import { EmailMessage } from 'cloudflare:email';

interface Env {
  ASSETS: Fetcher;
  LEADS: SendEmail;
}

const SECURITY: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
};

const LEAD_FROM = 'website@idearevive.com';
const LEAD_TO = 'idearevive1@gmail.com';
const LEAD_FIELDS = ['name', 'phone', 'email', 'service', 'website', 'message', 'page'] as const;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const isWww = url.hostname === 'www.idearevive.com';
    const isHttp = url.protocol === 'http:' && !url.hostname.endsWith('workers.dev') && url.hostname !== 'localhost';
    const isFile = /\.[a-zA-Z0-9]{1,8}$/.test(url.pathname);
    const isIndexFile = url.pathname.endsWith('/index.html');
    const isApi = url.pathname.startsWith('/api/');
    const needsSlash = !isFile && !isApi && url.pathname !== '/' && !url.pathname.endsWith('/');

    if (isWww || isHttp || needsSlash || isIndexFile) {
      if (isWww) url.hostname = 'idearevive.com';
      url.protocol = 'https:';
      if (isIndexFile) url.pathname = url.pathname.slice(0, -'index.html'.length);
      else if (needsSlash) url.pathname += '/';
      return redirect(url);
    }

    if (url.pathname === '/api/lead') return handleLead(request, env);

    const assetUrl = new URL(request.url);
    if (!isFile) {
      assetUrl.pathname = assetUrl.pathname.endsWith('/')
        ? `${assetUrl.pathname}index.html`
        : `${assetUrl.pathname}/index.html`;
    }
    const asset = await env.ASSETS.fetch(new Request(assetUrl.toString(), request));
    const headers = new Headers(asset.headers);
    for (const [key, value] of Object.entries(SECURITY)) headers.set(key, value);
    const cache = cacheControl(url.pathname);
    if (cache && asset.status === 200) headers.set('Cache-Control', cache);
    if (url.hostname.endsWith('workers.dev')) headers.set('X-Robots-Tag', 'noindex, nofollow');
    return new Response(asset.body, { status: asset.status, statusText: asset.statusText, headers });
  },
};

function cacheControl(pathname: string) {
  if (pathname.startsWith('/_astro/')) return 'public, max-age=31536000, immutable';
  if (/^\/(brand|og|images)\//.test(pathname) || /^\/(favicon\.(ico|svg)|apple-touch-icon\.png)$/.test(pathname)) {
    return 'public, max-age=604800, stale-while-revalidate=86400';
  }
  return '';
}

async function handleLead(request: Request, env: Env): Promise<Response> {
  const wantsJson = (request.headers.get('Accept') ?? '').includes('application/json');
  const reply = (ok: boolean, status: number, error?: string) => wantsJson
    ? json({ ok, ...(error && { error }) }, status)
    : redirect(new URL(ok ? '/thanks/' : '/contact/?error=1', 'https://idearevive.com'), 303);

  if (request.method !== 'POST') return json({ ok: false, error: 'POST only' }, 405);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return reply(false, 400, 'Invalid form');
  }
  if (form.get('_gotcha')) return reply(true, 200);

  const lead = Object.fromEntries(
    LEAD_FIELDS.map((k) => [k, String(form.get(k) ?? '').replace(/[\r\n]+/g, k === 'message' ? '\n' : ' ').trim().slice(0, k === 'message' ? 3000 : 300)]),
  ) as Record<(typeof LEAD_FIELDS)[number], string>;

  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) ? lead.email : '';
  if (!lead.name || (!lead.phone && !email)) return reply(false, 422, 'Name and a phone number or email are required');

  console.log('lead', JSON.stringify(lead));

  const subject = `New enquiry: ${lead.name}${lead.service ? ` · ${lead.service}` : ''}`;
  const body = [
    `Name: ${lead.name}`,
    lead.phone && `Phone / WhatsApp: ${lead.phone}`,
    email && `Email: ${email}`,
    lead.service && `Needs help with: ${lead.service}`,
    lead.website && `Website: ${lead.website}`,
    lead.message && `\nMessage:\n${lead.message}`,
    `\nSent from: ${lead.page || 'idearevive.com'}`,
    lead.phone && `WhatsApp: https://wa.me/${lead.phone.replace(/\D/g, '').replace(/^(\d{10})$/, '91$1')}`,
  ].filter(Boolean).join('\n');

  try {
    await env.LEADS.send(new EmailMessage(LEAD_FROM, LEAD_TO, mime({ subject, body, replyTo: email })));
  } catch (err) {
    console.error('lead email failed', String(err));
    return reply(false, 502, 'Could not send');
  }
  return reply(true, 200);
}

function mime({ subject, body, replyTo }: { subject: string; body: string; replyTo: string }) {
  const encode = (s: string) => `=?UTF-8?B?${btoa(String.fromCharCode(...new TextEncoder().encode(s)))}?=`;
  const b64 = btoa(String.fromCharCode(...new TextEncoder().encode(body))).replace(/.{76}/g, '$&\r\n');
  const headers = [
    `From: ${encode('IdeaRevive website')} <${LEAD_FROM}>`,
    `To: <${LEAD_TO}>`,
    replyTo && `Reply-To: <${replyTo}>`,
    `Subject: ${encode(subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@idearevive.com>`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
  ].filter(Boolean);
  return `${headers.join('\r\n')}\r\n\r\n${b64}`;
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', ...SECURITY } });
}

function redirect(url: URL, status = 301) {
  const headers = new Headers({ Location: url.toString(), ...SECURITY });
  return new Response(null, { status, headers });
}

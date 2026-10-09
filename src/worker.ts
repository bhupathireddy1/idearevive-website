const SECURITY: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
};

export default {
  async fetch(request: Request, env: { ASSETS: Fetcher }): Promise<Response> {
    const url = new URL(request.url);
    const isWww = url.hostname === 'www.idearevive.com';
    const isFile = /\.[a-zA-Z0-9]{1,8}$/.test(url.pathname);
    const needsSlash = !isFile && url.pathname !== '/' && !url.pathname.endsWith('/');

    if (isWww || needsSlash) {
      if (isWww) url.hostname = 'idearevive.com';
      url.protocol = 'https:';
      if (needsSlash) url.pathname += '/';
      return redirect(url);
    }

    const assetUrl = new URL(request.url);
    if (!isFile) {
      assetUrl.pathname = assetUrl.pathname.endsWith('/')
        ? `${assetUrl.pathname}index.html`
        : `${assetUrl.pathname}/index.html`;
    }
    const asset = await env.ASSETS.fetch(new Request(assetUrl.toString(), request));
    const headers = new Headers(asset.headers);
    for (const [key, value] of Object.entries(SECURITY)) headers.set(key, value);
    if (url.hostname.endsWith('workers.dev')) headers.set('X-Robots-Tag', 'noindex, nofollow');
    return new Response(asset.body, { status: asset.status, statusText: asset.statusText, headers });
  },
};

function redirect(url: URL) {
  const headers = new Headers({ Location: url.toString(), ...SECURITY });
  return new Response(null, { status: 301, headers });
}

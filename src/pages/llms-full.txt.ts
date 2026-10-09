import type { APIRoute } from 'astro';
import { site, formatInAddress } from '../data/site';
import { services, type FAQ } from '../data/services';
import { locations } from '../data/locations';
import { cities } from '../data/cities';
import { industries } from '../data/industries';
import { posts } from '../data/posts';
import { staticPages } from '../lib/pages';

const u = (path: string) => new URL(path, site.url).toString();
const faqs = (list: FAQ[]) => (list.length ? ['', 'FAQs:', ...list.flatMap((f) => [`Q: ${f.q}`, `A: ${f.a}`])] : []);
const bullets = (label: string, list: string[]) => ['', `${label}:`, ...list.map((i) => `- ${i}`)];

export const GET: APIRoute = () => {
  const out: string[] = [
    `# ${site.name} — full site content`,
    '',
    `> ${site.description}`,
    '',
    `Last updated: ${site.contentUpdated}. Source: ${site.url}. Summary index: ${u('/llms.txt')}`,
    '',
    '## About IdeaRevive',
    `${site.name} is a digital marketing agency based at ${formatInAddress()}.`,
    `Director: ${site.founder.name}, ${site.founder.role} of ${site.legalName}.`,
    site.founder.quote,
    ...site.founder.bio,
    ...site.proof.points.map((p) => `- ${p.value} ${p.label}`),
    `- Contact: ${site.email}${site.phone ? ` · ${site.phone}` : ''} · ${site.hoursLabel}`,
    `- Hyderabad studio: ${formatInAddress()}`,
    `- US mailing address: 30 N Gould St Ste R, Sheridan, Sheridan County, Wyoming 82801, United States`,
    '',
  ];

  for (const s of services) {
    out.push(`## ${s.h1}`, `URL: ${u(`/services/${s.slug}/`)}`, '', s.answer, '', s.intro,
      ...bullets('What’s included', s.included.map((i) => `${i.title}: ${i.text}`)),
      ...bullets('Deliverables', s.deliverables),
      '', `Timeline: ${s.timeline}`,
      ...bullets('Best for', s.bestFor), ...faqs(s.faqs), '');
  }
  for (const c of cities) {
    out.push(`## ${c.h1}`, `URL: ${u(`/cities/${c.slug}/`)}`, '', c.answer, '', c.context,
      ...bullets('Key sectors', c.sectors),
      '', `Campaign languages: ${c.languages.join(', ')}`,
      ...bullets('Focus', c.focus.map((f) => `${f.title}: ${f.text}`)),
      '', `How we serve ${c.name}: remotely from Hyderabad, with on-site visits when needed.`,
      ...faqs(c.faqs), '');
  }
  for (const l of locations) {
    out.push(`## ${l.h1}`, `URL: ${u(`/locations/${l.slug}/`)}`, '', l.answer, '', l.context,
      ...bullets('Businesses we help', l.businesses), ...bullets('Focus', l.focus), ...faqs(l.faqs), '');
  }
  for (const i of industries) {
    out.push(`## ${i.name} marketing`, `URL: ${u(`/industries/${i.slug}/`)}`, '', i.answer,
      ...bullets('Common challenges', i.challenges), ...bullets('Our approach', i.approach), ...faqs(i.faqs), '');
  }
  for (const p of posts) {
    out.push(`## ${p.title}`, `URL: ${u(`/blog/${p.slug}/`)}`, `Published: ${p.published} · Updated: ${p.updated} · By ${p.author}`, '', `Key takeaway: ${p.tldr}`, '');
    for (const b of p.body) {
      if (b.type === 'p') out.push(b.text, '');
      else if (b.type === 'h2' || b.type === 'h3') out.push(`### ${b.text}`, '');
      else if (b.type === 'ul' || b.type === 'ol') out.push(...b.items.map((i) => `- ${i}`), '');
      else if (b.type === 'table') out.push(b.head.join(' | '), ...b.rows.map((r) => r.join(' | ')), '');
    }
    out.push(...faqs(p.faqs), '');
  }
  out.push('## Other pages');
  for (const p of staticPages) out.push(`- ${p.title} (${u(p.path)}): ${p.summary}`);
  out.push('');

  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

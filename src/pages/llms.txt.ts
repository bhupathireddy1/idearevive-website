import type { APIRoute } from 'astro';
import { site, formatInAddress } from '../data/site';
import { services } from '../data/services';
import { locations } from '../data/locations';
import { cities } from '../data/cities';
import { industries } from '../data/industries';
import { posts } from '../data/posts';
import { staticPages } from '../lib/pages';

const u = (path: string) => new URL(path, site.url).toString();

export const GET: APIRoute = () => {
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `Full page content for AI systems: ${u('/llms-full.txt')}`,
    '',
    '## Key facts',
    `- Business type: Digital marketing agency, with SaaS product and mobile app development`,
    `- Hyderabad studio: ${formatInAddress()}`,
    `- US mailing address: 30 N Gould St Ste R, Sheridan, Sheridan County, Wyoming 82801, United States`,
    `- Director: ${site.founder.name}, ${site.founder.role}`,
    `- Experience: ${site.proof.years} years in digital marketing`,
    `- Clients: ${site.proof.clients} clients around the world, including eCommerce brands in India and abroad`,
    `- Areas served: Hyderabad, ${cities.length} Indian cities with dedicated pages, and international clients`,
    `- Email: ${site.email}`,
    ...(site.phone ? [`- Phone: ${site.phone}`] : []),
    `- Hours: ${site.hoursLabel}`,
    `- Website: ${site.url}`,
    '',
    '## Services',
    ...services.map((s) => `- [${s.h1}](${u(`/services/${s.slug}/`)}): ${s.answer}`),
    '',
    '## Cities across India',
    ...cities.map((c) => `- [${c.h1}](${u(`/cities/${c.slug}/`)}): ${c.answer}`),
    '',
    '## Hyderabad neighbourhoods',
    ...locations.map((l) => `- [${l.h1}](${u(`/locations/${l.slug}/`)}): ${l.answer}`),
    '',
    '## Industries',
    ...industries.map((i) => `- [${i.name}](${u(`/industries/${i.slug}/`)}): ${i.answer}`),
    '',
    '## Guides',
    ...posts.map((p) => `- [${p.title}](${u(`/blog/${p.slug}/`)}): ${p.tldr}`),
    '',
    '## Company and policies',
    ...staticPages.map((p) => `- [${p.title}](${u(p.path)}): ${p.summary}`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

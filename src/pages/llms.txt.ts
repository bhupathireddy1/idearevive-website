import type { APIRoute } from 'astro';
import { site, formatInAddress } from '../data/site';
import { services } from '../data/services';
import { locations } from '../data/locations';
import { cities } from '../data/cities';
import { industries } from '../data/industries';
import { posts } from '../data/posts';
import { staticPages } from '../lib/pages';
import { areaServicePaths, cityServicePaths, industryAreaPaths, industryCityPaths, offerPhrase } from '../lib/combos';

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
    ...(site.social.instagram ? [`- Instagram: ${site.social.instagram}`] : []),
    ...(site.social.linkedin ? [`- LinkedIn: ${site.social.linkedin}`] : []),
    ...(site.social.facebook ? [`- Facebook: ${site.social.facebook}`] : []),
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
    '## Combination pages',
    '- Hyderabad is the primary market. Neighbourhood service pages live under /locations/{area}/{service}/ (example: /locations/kondapur/google-ads/).',
    '- Other Indian cities are secondary and served from Hyderabad. Service-in-city pages live under /cities/{city}/{service}/ (example: /cities/pune/google-ads/).',
    '- Industry-in-city pages live under /industries/{industry}/{city}/ (example: /industries/landscaping/pune/). The industry hub without a city is Hyderabad.',
    '- Industry-in-neighbourhood pages live under /industries/{industry}/{area}/ (example: /industries/healthcare/banjara-hills/).',
    ...areaServicePaths().map(({ location, service, key }) => `- [${offerPhrase(service)} in ${location.name}](${u(`/locations/${location.slug}/${key}/`)})`),
    ...cityServicePaths().map(({ city, service, key }) => `- [${offerPhrase(service)} in ${city.name}](${u(`/cities/${city.slug}/${key}/`)})`),
    ...industryCityPaths().map(({ industry, city }) => `- [${industry.name} marketing in ${city.name}](${u(`/industries/${industry.slug}/${city.slug}/`)})`),
    ...industryAreaPaths().map(({ industry, location }) => `- [${industry.name} marketing in ${location.name}](${u(`/industries/${industry.slug}/${location.slug}/`)})`),
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

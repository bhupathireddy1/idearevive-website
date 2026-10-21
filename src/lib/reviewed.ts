import { site } from '../data/site';
import { posts } from '../data/posts';
import { cities } from '../data/cities';
import { locations } from '../data/locations';
import { industries } from '../data/industries';
import { services } from '../data/services';
import { caseStudies } from '../data/caseStudies';
import { areaServicePaths, cityServicePaths, industryCityPaths } from './combos';

/** Pages without a data entry. Bump a date only when that page’s own copy changes, never on a sitewide deploy. */
const pageReviews: Record<string, string> = {
  '/': '2026-10-10',
  '/about/': '2026-10-10',
  '/contact/': '2026-10-10',
  '/free-audit/': '2026-10-10',
  '/pricing/': '2026-10-10',
  '/case-studies/': '2026-10-10',
  '/services/': '2026-10-10',
  '/industries/': '2026-10-10',
  '/cities/': '2026-10-10',
  '/locations/': '2026-10-10',
  '/blog/': '2026-10-10',
  '/sitemap/': '2026-10-10',
};

const byPath = new Map<string, string>(Object.entries(pageReviews));
for (const p of posts) byPath.set(`/blog/${p.slug}/`, p.updated);
for (const c of cities) if (c.reviewed) byPath.set(`/cities/${c.slug}/`, c.reviewed);
for (const l of locations) if (l.reviewed) byPath.set(`/locations/${l.slug}/`, l.reviewed);
for (const i of industries) if (i.reviewed) byPath.set(`/industries/${i.slug}/`, i.reviewed);
for (const s of services) if (s.reviewed) byPath.set(`/services/${s.slug}/`, s.reviewed);
for (const c of caseStudies) byPath.set(`/case-studies/${c.slug}/`, c.published);
for (const pair of cityServicePaths()) {
  byPath.set(`/cities/${pair.city.slug}/${pair.key}/`, pair.city.reviewed ?? site.launched);
}
for (const pair of areaServicePaths()) {
  byPath.set(`/locations/${pair.location.slug}/${pair.key}/`, pair.location.reviewed ?? site.launched);
}
for (const pair of industryCityPaths()) {
  byPath.set(`/industries/${pair.industry.slug}/${pair.city.slug}/`, pair.city.reviewed ?? pair.industry.reviewed ?? site.launched);
}

export function reviewedFor(path: string): string {
  return byPath.get(path) ?? site.launched;
}

export function latestReview(): string {
  return [...byPath.values(), site.launched].sort().at(-1)!;
}

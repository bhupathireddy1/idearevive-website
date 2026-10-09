import { site, sameAs } from '../data/site';
import type { FAQ } from '../data/services';
import { coverFor } from './og';

const abs = (path: string) => new URL(path, site.url).toString();

export const orgId = `${site.url}/#organization`;
export const founderId = `${site.url}/about/#founder`;
const websiteId = `${site.url}/#website`;

export function telephone() {
  return site.phone.replace(/[^\d+]/g, '');
}

function postalAddress() {
  const a = site.address;
  return {
    '@type': 'PostalAddress',
    ...(a.street && { streetAddress: a.street }),
    addressLocality: a.locality,
    addressRegion: a.region,
    ...(a.postalCode && { postalCode: a.postalCode }),
    addressCountry: a.country,
  };
}

function usPostalAddress() {
  const a = site.usAddress;
  return {
    '@type': 'PostalAddress',
    streetAddress: a.street,
    addressLocality: a.locality,
    addressRegion: a.region,
    postalCode: a.postalCode,
    addressCountry: a.country,
  };
}

export function organizationSchema() {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': orgId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: abs('/brand/logo-on-paper.png'),
    image: abs(site.ogImage),
    description: site.description,
    slogan: site.tagline,
    ...(site.foundingYear && { foundingDate: site.foundingYear }),
    email: site.email,
    ...(site.phone && { telephone: telephone() }),
    founder: { '@id': founderId },
    address: [postalAddress(), usPostalAddress()],
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    openingHours: site.hours,
    areaServed: site.areaServed.map((name) => ({ '@type': 'Place', name })),
    knowsAbout: [
      'Search Engine Optimization', 'Local SEO', 'Google Ads', 'Pay-per-click advertising',
      'Social Media Marketing', 'Content Marketing', 'Web Design', 'Branding',
      'Performance Marketing', 'Generative Engine Optimization', 'Answer Engine Optimization',
      'eCommerce Marketing', 'SaaS Product Development', 'Mobile App Development',
      'App Store Optimization', 'App Install Campaigns',
    ],
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Years of digital marketing experience', value: site.proof.years },
      { '@type': 'PropertyValue', name: 'Clients served', value: site.proof.clients },
      { '@type': 'PropertyValue', name: 'Markets', value: 'India and international eCommerce brands' },
    ],
    ...(sameAs.length && { sameAs }),
    ...(site.googleBusinessProfile && { hasMap: site.googleBusinessProfile }),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: site.email,
      ...(site.phone && { telephone: telephone() }),
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Telugu'],
    },
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { '@id': orgId },
    inLanguage: 'en-IN',
  };
}

export function webPageSchema(opts: {
  path: string; title: string; description: string; type?: string; published?: string; updated?: string; image?: string;
}) {
  const image = abs(opts.image ?? site.ogImage);
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': `${abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.title,
    description: opts.description,
    isPartOf: { '@id': websiteId },
    about: { '@id': orgId },
    publisher: { '@id': orgId },
    datePublished: opts.published ?? site.contentPublished,
    dateModified: opts.updated ?? site.contentUpdated,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]'] },
    primaryImageOfPage: { '@type': 'ImageObject', url: image, width: 1200, height: 630 },
    image,
    inLanguage: 'en-IN',
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function founderSchema() {
  const f = site.founder;
  return {
    '@type': 'Person',
    '@id': founderId,
    name: f.name,
    jobTitle: f.role,
    description: f.bio.join(' '),
    url: `${site.url}/about/#founder`,
    worksFor: { '@id': orgId },
    email: site.email,
    ...(site.phone && { telephone: telephone() }),
    address: postalAddress(),
    knowsAbout: [
      'Digital marketing',
      'Search Engine Optimization',
      'Google Ads',
      'eCommerce marketing',
      'SaaS product development',
    ],
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(opts: {
  name: string; description: string; path: string; area?: string | string[]; serviceType?: string;
}) {
  const areas = opts.area === undefined ? ['Hyderabad', 'India'] : Array.isArray(opts.area) ? opts.area : [opts.area];
  return {
    '@type': 'Service',
    '@id': `${abs(opts.path)}#service`,
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    provider: { '@id': orgId },
    areaServed: areas.map((name) => ({ '@type': name === 'India' ? 'Country' : 'City', name })),
    serviceType: opts.serviceType ?? opts.name,
  };
}

export function articleSchema(opts: {
  path: string; title: string; description: string; published: string; updated: string; author: string;
}) {
  return {
    '@type': 'BlogPosting',
    '@id': `${abs(opts.path)}#article`,
    headline: opts.title,
    description: opts.description,
    datePublished: opts.published,
    dateModified: opts.updated,
    author: opts.author === site.founder.name
      ? { '@type': 'Person', '@id': founderId, name: opts.author, url: `${site.url}/about/#founder` }
      : { '@type': 'Organization', name: opts.author, url: site.url },
    publisher: { '@id': orgId },
    mainEntityOfPage: abs(opts.path),
    image: abs(coverFor(opts.path).src),
    inLanguage: 'en-IN',
  };
}

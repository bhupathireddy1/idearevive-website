import { services } from '../data/services';

const TECH = new Set([
  'hitech-city', 'gachibowli', 'madhapur', 'kondapur', 'nanakramguda', 'kokapet', 'nallagandla',
]);
const PREMIUM = new Set(['banjara-hills', 'jubilee-hills', 'somajiguda', 'begumpet', 'himayatnagar']);
const NORTH = new Set(['kukatpally', 'miyapur', 'nizampet', 'bachupally', 'kompally', 'alwal', 'secunderabad', 'ameerpet']);
const EAST = new Set([
  'dilsukhnagar', 'kothapet', 'lb-nagar', 'uppal', 'habsiguda', 'vanasthalipuram', 'malakpet',
]);

const SETS: Record<string, string[]> = {
  tech: ['seo-services-hyderabad', 'content-marketing-hyderabad', 'google-ads-ppc-hyderabad', 'saas-product-development-hyderabad'],
  premium: ['branding-creative-design-hyderabad', 'social-media-marketing-hyderabad', 'seo-services-hyderabad', 'website-design-development-hyderabad'],
  north: ['local-seo-hyderabad', 'google-ads-ppc-hyderabad', 'social-media-marketing-hyderabad', 'performance-marketing-lead-generation-hyderabad'],
  east: ['local-seo-hyderabad', 'google-ads-ppc-hyderabad', 'performance-marketing-lead-generation-hyderabad', 'ecommerce-marketing-hyderabad'],
  local: ['local-seo-hyderabad', 'google-ads-ppc-hyderabad', 'social-media-marketing-hyderabad', 'website-design-development-hyderabad'],
};

const CITY: Record<string, string[]> = {
  bengaluru: ['seo-services-hyderabad', 'saas-product-development-hyderabad', 'google-ads-ppc-hyderabad', 'app-install-campaigns-hyderabad'],
  mumbai: ['ecommerce-marketing-hyderabad', 'google-ads-ppc-hyderabad', 'social-media-marketing-hyderabad', 'performance-marketing-lead-generation-hyderabad'],
  delhi: ['google-ads-ppc-hyderabad', 'seo-services-hyderabad', 'content-marketing-hyderabad', 'performance-marketing-lead-generation-hyderabad'],
  gurugram: ['seo-services-hyderabad', 'google-ads-ppc-hyderabad', 'saas-product-development-hyderabad', 'content-marketing-hyderabad'],
  pune: ['seo-services-hyderabad', 'google-ads-ppc-hyderabad', 'ecommerce-marketing-hyderabad', 'website-design-development-hyderabad'],
  chennai: ['seo-services-hyderabad', 'local-seo-hyderabad', 'google-ads-ppc-hyderabad', 'content-marketing-hyderabad'],
  noida: ['seo-services-hyderabad', 'google-ads-ppc-hyderabad', 'content-marketing-hyderabad', 'saas-product-development-hyderabad'],
  kolkata: ['seo-services-hyderabad', 'content-marketing-hyderabad', 'social-media-marketing-hyderabad', 'google-ads-ppc-hyderabad'],
  ahmedabad: ['ecommerce-marketing-hyderabad', 'google-ads-ppc-hyderabad', 'seo-services-hyderabad', 'performance-marketing-lead-generation-hyderabad'],
  jaipur: ['social-media-marketing-hyderabad', 'branding-creative-design-hyderabad', 'seo-services-hyderabad', 'content-marketing-hyderabad'],
  kochi: ['local-seo-hyderabad', 'content-marketing-hyderabad', 'seo-services-hyderabad', 'google-ads-ppc-hyderabad'],
  chandigarh: ['seo-services-hyderabad', 'google-ads-ppc-hyderabad', 'content-marketing-hyderabad', 'website-design-development-hyderabad'],
  visakhapatnam: ['local-seo-hyderabad', 'google-ads-ppc-hyderabad', 'social-media-marketing-hyderabad', 'performance-marketing-lead-generation-hyderabad'],
  vijayawada: ['local-seo-hyderabad', 'google-ads-ppc-hyderabad', 'seo-services-hyderabad', 'website-design-development-hyderabad'],
  coimbatore: ['ecommerce-marketing-hyderabad', 'seo-services-hyderabad', 'google-ads-ppc-hyderabad', 'website-design-development-hyderabad'],
  lucknow: ['local-seo-hyderabad', 'social-media-marketing-hyderabad', 'google-ads-ppc-hyderabad', 'content-marketing-hyderabad'],
  indore: ['ecommerce-marketing-hyderabad', 'google-ads-ppc-hyderabad', 'seo-services-hyderabad', 'social-media-marketing-hyderabad'],
  surat: ['ecommerce-marketing-hyderabad', 'social-media-marketing-hyderabad', 'google-ads-ppc-hyderabad', 'performance-marketing-lead-generation-hyderabad'],
};

function pick(slugs: string[]) {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter((s): s is NonNullable<typeof s> => Boolean(s));
}

export function servicesForLocation(slug: string) {
  if (TECH.has(slug)) return pick(SETS.tech);
  if (PREMIUM.has(slug)) return pick(SETS.premium);
  if (NORTH.has(slug)) return pick(SETS.north);
  if (EAST.has(slug)) return pick(SETS.east);
  return pick(SETS.local);
}

export function servicesForCity(slug: string) {
  return pick(CITY[slug] ?? SETS.local);
}

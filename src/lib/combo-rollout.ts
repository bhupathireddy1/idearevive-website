/**
 * Extra combo pages beyond the phase-1 allowlist.
 * Ship at most DAILY_LIMIT per `shipped` date. Hyderabad first. No duplicates of
 * phase-1 pairs (those already come from servicesForCity / servicesForLocation /
 * industriesForCity). Never add /cities/hyderabad/ or /industries/{x}/hyderabad/.
 *
 * Order for later days:
 * 1. Remaining Hyderabad area × high-intent services (google-ads, local-seo, seo, performance)
 * 2. Hyderabad area × core industries (healthcare, interior-design, hospitality, education, real-estate, landscaping)
 * 3. Remaining Hyderabad area × other services
 * 4. Remaining city × services, then remaining industry × city
 */
export const DAILY_LIMIT = 5;

export type ShippedPair =
  | { kind: 'area-service'; area: string; service: string; shipped: string }
  | { kind: 'city-service'; city: string; service: string; shipped: string }
  | { kind: 'industry-city'; industry: string; city: string; shipped: string }
  | { kind: 'industry-area'; industry: string; area: string; shipped: string };

export const SHIPPED: ShippedPair[] = [
  { kind: 'area-service', area: 'banjara-hills', service: 'google-ads', shipped: '2026-10-24' },
  { kind: 'area-service', area: 'banjara-hills', service: 'local-seo', shipped: '2026-10-24' },
  { kind: 'area-service', area: 'jubilee-hills', service: 'google-ads', shipped: '2026-10-24' },
  { kind: 'industry-area', industry: 'healthcare', area: 'banjara-hills', shipped: '2026-10-24' },
  { kind: 'industry-area', industry: 'interior-design', area: 'banjara-hills', shipped: '2026-10-24' },
];

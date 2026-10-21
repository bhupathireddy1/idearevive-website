import { cities, type City } from '../data/cities';
import { locations, type Location } from '../data/locations';
import { industries, type Industry } from '../data/industries';
import { services, type FAQ, type Service } from '../data/services';
import { servicesForCity, servicesForLocation } from './area-services';

export const SERVICE_KEY: Record<string, string> = {
  'seo-services-hyderabad': 'seo',
  'local-seo-hyderabad': 'local-seo',
  'google-ads-ppc-hyderabad': 'google-ads',
  'social-media-marketing-hyderabad': 'social-media',
  'content-marketing-hyderabad': 'content',
  'website-design-development-hyderabad': 'websites',
  'branding-creative-design-hyderabad': 'branding',
  'performance-marketing-lead-generation-hyderabad': 'performance',
  'ecommerce-marketing-hyderabad': 'ecommerce',
  'saas-product-development-hyderabad': 'saas',
  'mobile-app-development-hyderabad': 'mobile-apps',
  'app-install-campaigns-hyderabad': 'app-installs',
};

const KEY_TO_SLUG = Object.fromEntries(Object.entries(SERVICE_KEY).map(([slug, key]) => [key, slug]));

const OFFER_PHRASE: Record<string, string> = {
  'seo-services-hyderabad': 'SEO services',
  'local-seo-hyderabad': 'Local SEO services',
  'google-ads-ppc-hyderabad': 'Google Ads services',
  'social-media-marketing-hyderabad': 'Social Media services',
  'content-marketing-hyderabad': 'Content marketing services',
  'website-design-development-hyderabad': 'Web Design services',
  'branding-creative-design-hyderabad': 'Branding services',
  'performance-marketing-lead-generation-hyderabad': 'Lead Generation services',
  'ecommerce-marketing-hyderabad': 'eCommerce marketing',
  'saas-product-development-hyderabad': 'SaaS development',
  'mobile-app-development-hyderabad': 'Mobile app development',
  'app-install-campaigns-hyderabad': 'App install campaigns',
};

export function keyOf(service: Service) {
  return SERVICE_KEY[service.slug];
}

export function serviceByKey(key: string) {
  const slug = KEY_TO_SLUG[key];
  return slug ? services.find((s) => s.slug === slug) : undefined;
}

/** Full commercial phrase: "Social Media services", not "Social Media". */
export function offerPhrase(service: Service) {
  return OFFER_PHRASE[service.slug] ?? `${service.shortName} services`;
}

/** Local trades we will take in any listed city. Hyderabad already has the industry hub. */
const EVERY_CITY = [
  'landscaping',
  'interior-design',
  'home-services',
  'healthcare',
  'education',
  'real-estate',
  'hospitality',
];

const SECTOR_HINT: Record<string, RegExp> = {
  'it-saas': /saas|it\b|ites|software|start-?up|fintech|consumer internet|\bapps\b|mnc|corporate|capability/i,
  manufacturing: /manufactur|engineering|industrial|pharma|chemical|foundr|pump|textile|spinning|export/i,
  automotive: /auto|automobile|vehicle/i,
  'ecommerce-retail': /d2c|ecommerce|retail|fashion|wholesale|fmcg|textile|saree|trade/i,
  'jewellery-fashion': /jewellery|jewelry|gems|diamond|textile|saree|fashion|chikankari|handicraft/i,
  'beauty-salons': /beauty|salon/i,
  'fitness-wellness': /fitness|wellness|yoga/i,
  'professional-services': /professional|consulting|immigration/i,
  'architecture-construction': /construction|architect|engineering/i,
};

export function industriesForCity(city: City) {
  return industries.filter((industry) => {
    if (EVERY_CITY.includes(industry.slug)) return true;
    const hint = SECTOR_HINT[industry.slug];
    return hint ? city.sectors.some((sector) => hint.test(sector)) : false;
  });
}

export function citiesForIndustry(industry: Industry) {
  return cities.filter((city) => industriesForCity(city).some((item) => item.slug === industry.slug));
}

export function citiesForService(service: Service) {
  return cities.filter((city) => servicesForCity(city.slug).some((item) => item.slug === service.slug));
}

export function locationsForService(service: Service) {
  return locations.filter((location) => servicesForLocation(location.slug).some((item) => item.slug === service.slug));
}

const HYD_ONLY = /\b(Kokapet|ORR|HITEC City|Kondapur|Gachibowli|Madhapur|Banjara Hills|Jubilee Hills|Old City|Abids|Krishe|WeWork|Telangana)\b/;

function usable(text: string, place: string) {
  if (HYD_ONLY.test(text)) return '';
  return text.replace(/\bHyderabad\b/g, place);
}

function sentence(text: string) {
  const trimmed = text.trim().replace(/\s+/g, ' ');
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function listAnd(items: string[]) {
  if (items.length <= 1) return items[0] ?? '';
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

function titleTag(phrase: string, place: string) {
  const withPlace = `${phrase} in ${place} | IdeaRevive`;
  if (withPlace.length <= 60) return withPlace;
  const shortPlace = place.split(',')[0];
  const shorter = `${phrase} in ${shortPlace} | IdeaRevive`;
  return shorter.length <= 62 ? shorter : `${phrase} in ${shortPlace}`;
}

function metaDescription(parts: string[]) {
  const text = parts.filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
  if (text.length <= 158) return text;
  return `${text.slice(0, 155).replace(/\s+\S*$/, '')}…`;
}

export type ComboCopy = {
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  answer: string;
  meaningTitle: string;
  meaning: string;
  whoTitle: string;
  who: string[];
  whoText: string;
  contextTitle: string;
  context: string;
  itemsTitle: string;
  items: { title: string; text: string }[];
  processTitle: string;
  process: { title: string; text: string }[];
  tableTitle: string;
  table: { head: [string, string]; rows: [string, string][] };
  facts: { label: string; value: string | string[] }[];
  faqs: FAQ[];
  related: { href: string; label: string }[];
  area: string[];
  serviceType: string;
  cta: string;
};

export function cityServiceCopy(city: City, service: Service): ComboCopy {
  const key = keyOf(service);
  const path = `/cities/${city.slug}/${key}/`;
  const offer = offerPhrase(service);
  const siblings = servicesForCity(city.slug).filter((item) => item.slug !== service.slug);
  const industryLinks = industriesForCity(city)
    .filter((industry) => industry.services.includes(service.slug))
    .slice(0, 4);

  return {
    path,
    title: titleTag(offer, city.name),
    description: metaDescription([
      `${offer} in ${city.name}, run from Hyderabad.`,
      `${city.sectors[0]}.`,
      `Campaigns in ${listAnd(city.languages)}.`,
      'Leads and cost per lead, not impressions.',
    ]),
    h1: `${offer} in ${city.name}`,
    eyebrow: `${city.name} · Served from Hyderabad`,
    answer: `${offer} in ${city.name} are planned at IdeaRevive’s Hyderabad studio for businesses in ${city.sectors.slice(0, 2).join(', ')}. ${sentence(service.card)} Campaigns use ${listAnd(city.languages)} when the buyer needs that.`,
    meaningTitle: `What are ${offer} in ${city.name}?`,
    meaning: `${offer} in ${city.name} is the work IdeaRevive runs for a ${city.name} company without opening a ${city.name} office. ${sentence(service.card)} ${sentence(city.context)} The plan is written for ${city.sectors.slice(0, 2).join(', ')}, in ${listAnd(city.languages)}. Bhupathi Reddy reviews the audit. Ad, analytics and Search Console accounts stay in your name. Weekly work is on calls and WhatsApp. We travel to ${city.name} for a kick-off, a shoot or a workshop when that helps.`,
    whoTitle: `Who are ${offer} in ${city.name} for?`,
    who: city.sectors,
    whoText: `If your ${city.name} work does not sit in those sectors, say so on the audit. We will say if this is the wrong first channel.`,
    contextTitle: `Why do ${offer} in ${city.name} need their own page?`,
    context: `${sentence(city.context)} A Hyderabad brief copied onto ${city.name} usually wastes spend. We write the page and the ads for this city first.`,
    itemsTitle: `What is included in ${offer} for ${city.name}?`,
    items: service.included,
    processTitle: `How do ${offer} in ${city.name} actually run?`,
    process: [
      { title: 'Free audit', text: `We review your site, search, ads and the competitors ${city.name} buyers compare you with, then send the five fixes we would make first.` },
      { title: '90-day plan', text: 'Channels, budget, timeline and the numbers we agree to be judged on, written before work starts.' },
      { title: 'Weekly work', text: `Calls, a live dashboard and WhatsApp from Hyderabad. On-site in ${city.name} when a shoot or workshop needs us there.` },
    ],
    tableTitle: `${offer} in ${city.name}, at a glance`,
    table: {
      head: ['Fact', 'Detail'],
      rows: [
        ['Place', `${city.name}, ${city.state}`],
        ['What this page is', offer],
        ['Campaign languages', listAnd(city.languages)],
        ['How we serve it', `Remotely from Hyderabad, on-site in ${city.name} when it matters`],
        ['Typical timeline', service.timeline],
        ['Who reviews the plan', 'Bhupathi Reddy, director'],
      ],
    },
    facts: [
      { label: 'City', value: `${city.name}, ${city.state}` },
      { label: 'Campaign languages', value: city.languages },
      { label: 'Sectors we see most', value: city.sectors },
      { label: 'How we serve it', value: `Remotely from Hyderabad, on-site in ${city.name} when it matters` },
      { label: 'Typical timeline', value: service.timeline },
    ],
    faqs: [
      {
        q: `Do you run ${offer} for businesses in ${city.name}?`,
        a: `Yes. ${offer} in ${city.name} are a remote service from the Hyderabad studio. Accounts stay in your name. Bhupathi Reddy reviews the plan. We start with a free audit of the ${city.name} market you actually sell into.`,
      },
      {
        q: `Do I need a ${city.name} office to hire you?`,
        a: `No. The studio is in Kondapur, Hyderabad. ${city.name} clients work over video and WhatsApp. We visit for kick-offs, shoots and workshops when that helps.`,
      },
      {
        q: `What language do you use for ${offer} in ${city.name}?`,
        a: `${listAnd(city.languages)}, chosen by audience. A B2B buyer and a local shop in ${city.name} rarely need the same creative.`,
      },
    ],
    related: [
      { href: `/cities/${city.slug}/`, label: `Digital marketing in ${city.name}` },
      { href: `/services/${service.slug}/`, label: `${offer} in Hyderabad` },
      ...siblings.map((item) => ({ href: `/cities/${city.slug}/${keyOf(item)}/`, label: `${offerPhrase(item)} in ${city.name}` })),
      ...industryLinks.map((industry) => ({ href: `/industries/${industry.slug}/${city.slug}/`, label: `${industry.name} marketing in ${city.name}` })),
      { href: '/cities/', label: 'All cities' },
    ],
    area: [city.name, city.state, 'India'],
    serviceType: offer,
    cta: `Free ${service.shortName} audit for my ${city.name} business`,
  };
}

export function areaServiceCopy(location: Location, service: Service): ComboCopy {
  const key = keyOf(service);
  const path = `/locations/${location.slug}/${key}/`;
  const offer = offerPhrase(service);
  const nearby = location.nearby
    .map((slug) => locations.find((item) => item.slug === slug))
    .filter((item): item is Location => Boolean(item));
  const siblings = servicesForLocation(location.slug).filter((item) => item.slug !== service.slug);

  return {
    path,
    title: titleTag(offer, `${location.name}, Hyderabad`),
    description: metaDescription([
      `${offer} in ${location.name}, Hyderabad.`,
      `${location.businesses[0]}.`,
      'Local pages and ads, not a generic city campaign.',
    ]),
    h1: `${offer} in ${location.name}, Hyderabad`,
    eyebrow: `${location.name}, Hyderabad`,
    answer: `${offer} in ${location.name} are the campaigns IdeaRevive writes for this Hyderabad neighbourhood first. ${location.businesses[0]} and ${location.businesses[1]} here are usually found through ${location.focus[0].toLowerCase()}. ${sentence(service.card)}`,
    meaningTitle: `What are ${offer} in ${location.name}?`,
    meaning: `${offer} in ${location.name} means the landing page, the Google profile and the ads sit on this neighbourhood first, not on a generic Hyderabad campaign. ${sentence(location.context)} ${location.businesses[0]} and ${location.businesses[1]} are the usual buyers. Nearby ${listAnd(nearby.slice(0, 3).map((item) => item.name))} are added only when the numbers justify it. Meetings can happen in ${location.name} or at the Kondapur studio. Bhupathi Reddy reviews the plan.`,
    whoTitle: `Who are ${offer} in ${location.name} for?`,
    who: location.businesses,
    whoText: `If your work in ${location.name} does not look like that, say so on the audit. We will say if this is the wrong first channel.`,
    contextTitle: `What do ${offer} have to respect in ${location.name}?`,
    context: `${sentence(location.context)} A Hyderabad-wide campaign that ignores ${location.name} usually wastes spend. We write the page and the ads for this neighbourhood first.`,
    itemsTitle: `What is included in ${offer} for ${location.name}?`,
    items: service.included,
    processTitle: `How do ${offer} in ${location.name} run?`,
    process: [
      { title: 'Free audit', text: `We review your ${location.name} listing, site, ads and the three nearby competitors you lose to most.` },
      { title: '90-day plan', text: `The page, the profile and the ads start on ${location.name}. Nearby areas wait until the numbers say so.` },
      { title: 'Weekly work', text: `Calls and WhatsApp. We can meet in ${location.name} or at the Kondapur studio.` },
    ],
    tableTitle: `${offer} in ${location.name}, at a glance`,
    table: {
      head: ['Fact', 'Detail'],
      rows: [
        ['Place', `${location.name}, Hyderabad, Telangana`],
        ['What this page is', offer],
        ['Nearby', listAnd(nearby.map((item) => item.name))],
        ['Meetings', `In ${location.name} or at the Kondapur studio`],
        ['Typical timeline', service.timeline],
        ['Who reviews the plan', 'Bhupathi Reddy, director'],
      ],
    },
    facts: [
      { label: 'Area', value: `${location.name}, Hyderabad, Telangana` },
      { label: 'Businesses we see', value: location.businesses },
      { label: 'Nearby', value: nearby.map((item) => item.name) },
      { label: 'Meetings', value: `In ${location.name} or over video. Studio in Kondapur.` },
      { label: 'Typical timeline', value: service.timeline },
    ],
    faqs: [
      {
        q: `Can you run ${offer} just for ${location.name}?`,
        a: `Yes. The Google profile, the landing page and the ads can sit on ${location.name} first. Nearby areas are added only when the numbers justify it.`,
      },
      {
        q: `Who in ${location.name} is this for?`,
        a: `${listAnd(location.businesses)}. If your work does not look like that, say so on the audit and we will say if ${offer} is the wrong first channel.`,
      },
      {
        q: `Do you meet clients in ${location.name}?`,
        a: `Yes, in ${location.name} or at the Kondapur studio. Weekly work runs on calls and WhatsApp.`,
      },
    ],
    related: [
      { href: `/locations/${location.slug}/`, label: `Marketing in ${location.name}` },
      { href: `/services/${service.slug}/`, label: `${offer} across Hyderabad` },
      ...siblings.map((item) => ({ href: `/locations/${location.slug}/${keyOf(item)}/`, label: `${offerPhrase(item)} in ${location.name}` })),
      ...nearby.slice(0, 3).map((item) => ({ href: `/locations/${item.slug}/${key}/`, label: `${offer} in ${item.name}` })),
      { href: '/locations/', label: 'All Hyderabad areas' },
    ],
    area: [`${location.name}, Hyderabad`, 'Hyderabad', 'Telangana'],
    serviceType: offer,
    cta: `Free ${service.shortName} audit for my ${location.name} business`,
  };
}

export function industryCityCopy(industry: Industry, city: City): ComboCopy {
  const path = `/industries/${industry.slug}/${city.slug}/`;
  const offer = `${industry.name} marketing`;
  const linkedServices = industry.services
    .map((slug) => services.find((item) => item.slug === slug))
    .filter((item): item is Service => Boolean(item));
  const cityServices = linkedServices.filter((item) => servicesForCity(city.slug).some((mapped) => mapped.slug === item.slug));
  const startWith = (cityServices.length ? cityServices : linkedServices).slice(0, 3);
  const challenges = industry.challenges.map((line) => usable(line, city.name)).filter(Boolean);
  const approach = industry.approach.map((line) => usable(line, city.name)).filter(Boolean);
  const otherCities = citiesForIndustry(industry)
    .filter((item) => item.slug !== city.slug)
    .slice(0, 6);

  return {
    path,
    title: titleTag(offer, city.name),
    description: metaDescription([
      `${offer} in ${city.name}, run from Hyderabad.`,
      `${city.sectors[0]}.`,
      'No invented office, no invented results.',
    ]),
    h1: `${offer} in ${city.name}`,
    eyebrow: `${city.name} · Served from Hyderabad`,
    answer: `${offer} in ${city.name} is handled remotely from IdeaRevive’s Hyderabad studio. ${sentence(challenges[0] || industry.challenges[0])} Buyers here sit in ${listAnd(city.sectors.slice(0, 2))}. We start with ${listAnd(startWith.map((item) => offerPhrase(item)))}.`,
    meaningTitle: `What is ${offer} in ${city.name}?`,
    meaning: `${offer} in ${city.name} is the same trade problem as Hyderabad, with ${city.name} streets, languages and competitors. ${sentence(challenges[0] || industry.challenges[0])} ${sentence(city.context)} Campaigns can run in ${listAnd(city.languages)}. The Hyderabad studio writes the plan. You keep your ad and analytics accounts. We visit ${city.name} when a shoot or a workshop needs us there.`,
    whoTitle: `Who is ${offer} in ${city.name} for?`,
    who: city.sectors,
    whoText: `Usual first channels: ${listAnd(startWith.map((item) => offerPhrase(item)))}. The free audit says which one first for your street.`,
    contextTitle: `What does ${city.name} change about ${industry.name.toLowerCase()} marketing?`,
    context: `${sentence(city.context)} The ${industry.name.toLowerCase()} problems stay the same. The streets, the language and the competitors do not.`,
    itemsTitle: `How do we approach ${industry.name.toLowerCase()} work in ${city.name}?`,
    items: (approach.length ? approach : industry.approach).map((text) => ({ title: '', text })),
    processTitle: `How does ${offer} in ${city.name} run?`,
    process: [
      { title: 'Free audit', text: `We look at your ${city.name} enquiries, listings and the competitors a ${industry.name.toLowerCase()} buyer actually compares.` },
      { title: '90-day plan', text: `Usually ${startWith[0] ? offerPhrase(startWith[0]) : 'the first channel that brings enquiries'}, then the next one that the audit names.` },
      { title: 'Weekly work', text: `Planned in Hyderabad. On-site in ${city.name} when a shoot or workshop needs us there.` },
    ],
    tableTitle: `${offer} in ${city.name}, at a glance`,
    table: {
      head: ['Fact', 'Detail'],
      rows: [
        ['Place', `${city.name}, ${city.state}`],
        ['What this page is', offer],
        ['Campaign languages', listAnd(city.languages)],
        ['Usual first channels', listAnd(startWith.map((item) => offerPhrase(item)))],
        ['How we serve it', `Remotely from Hyderabad, on-site in ${city.name} when it matters`],
        ['Who reviews the plan', 'Bhupathi Reddy, director'],
      ],
    },
    facts: [
      { label: 'City', value: `${city.name}, ${city.state}` },
      { label: 'Campaign languages', value: city.languages },
      { label: 'Sectors around this work', value: city.sectors },
      { label: 'Usual first channels', value: startWith.map((item) => offerPhrase(item)) },
      { label: 'How we serve it', value: `Remotely from Hyderabad, on-site in ${city.name} when it matters` },
    ],
    faqs: [
      {
        q: `Do you market ${industry.name.toLowerCase()} businesses in ${city.name}?`,
        a: `Yes. ${city.name} is a remote market for us. The Hyderabad studio plans the work. You keep your ad and analytics accounts. We visit when a shoot or a workshop needs us there.`,
      },
      {
        q: `Is this the same as your Hyderabad ${industry.name.toLowerCase()} page?`,
        a: `No. The Hyderabad page is for local catchments we can stand in. This page is for ${city.name} buyers, ${listAnd(city.languages)} creatives, and the sectors listed above.`,
      },
      {
        q: `Where should a ${city.name} ${industry.name.toLowerCase()} firm start?`,
        a: `Usually ${startWith[0] ? offerPhrase(startWith[0]) : 'a free audit'}, then ${startWith[1] ? offerPhrase(startWith[1]) : 'the next channel that brings enquiries'}. The free audit says which one first for your street, not a generic stack.`,
      },
    ],
    related: [
      { href: `/industries/${industry.slug}/`, label: `${industry.name} marketing in Hyderabad` },
      { href: `/cities/${city.slug}/`, label: `Digital marketing in ${city.name}` },
      ...startWith.map((item) => ({ href: `/cities/${city.slug}/${keyOf(item)}/`, label: `${offerPhrase(item)} in ${city.name}` })),
      ...otherCities.map((item) => ({ href: `/industries/${industry.slug}/${item.slug}/`, label: `${industry.name} marketing in ${item.name}` })),
      { href: '/industries/', label: 'All industries' },
    ],
    area: [city.name, city.state, 'India'],
    serviceType: offer,
    cta: `Free audit for my ${city.name} ${industry.name.toLowerCase()} business`,
  };
}

export function cityServicePaths() {
  return cities.flatMap((city) =>
    servicesForCity(city.slug).map((service) => ({ city, service, key: keyOf(service) })),
  );
}

export function areaServicePaths() {
  return locations.flatMap((location) =>
    servicesForLocation(location.slug).map((service) => ({ location, service, key: keyOf(service) })),
  );
}

export function industryCityPaths() {
  return cities.flatMap((city) => industriesForCity(city).map((industry) => ({ city, industry })));
}

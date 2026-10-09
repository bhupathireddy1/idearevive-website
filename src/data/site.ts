/**
 * Single source of truth for IdeaRevive business facts.
 * Everything here is reused in page copy, the footer, JSON-LD schema and llms.txt,
 * so keep it accurate — search engines and AI assistants cross-check these details.
 * Empty strings are skipped wherever they are rendered.
 */
export const site = {
  name: 'IdeaRevive',
  legalName: 'Belel Software OPC Private Limited',
  url: 'https://idearevive.com',
  tagline: 'Digital Marketing Agency in Hyderabad',
  /** Short lockup under the logo. Keep to 2–4 words. */
  lockup: 'Strategic digital marketing',
  description:
    'IdeaRevive is a Hyderabad digital marketing agency with 10+ years of experience and 50+ clients, offering SEO, Google Ads, social media, websites, SaaS and mobile app development, and app install campaigns across India and worldwide.',
  foundingYear: '',
  /** Last full content review. Rendered as the visible "Updated" date and WebPage dateModified. */
  contentUpdated: '2026-10-09',
  contentPublished: '2026-10-01',
  /** Proof points supplied by IdeaRevive. Keep these accurate; they appear in copy and schema. */
  proof: {
    years: '10+',
    clients: '50+',
    points: [
      { value: '10+', label: 'years in digital marketing' },
      { value: '50+', label: 'clients around the world' },
      { value: 'Global', label: 'eCommerce brands across India and abroad' },
      { value: 'Web + App', label: 'SaaS products and mobile apps built and launched' },
    ],
  },
  email: 'contact@idearevive.com',
  phone: '+91 99853 11989',
  whatsapp: '919985311989',
  founder: {
    name: 'Bhupathi Reddy',
    role: 'Director',
    quote:
      'I have spent more than ten years in digital marketing and worked with 50+ clients around the world. IdeaRevive is how I put that work in one place — search, ads, websites, products and reporting — so a business owner is not juggling five vendors.',
    bio: [
      'Bhupathi Reddy is the director of IdeaRevive, the digital marketing agency of Belel Software OPC Private Limited, based in Hyderabad. He still reviews audits, plans and monthly numbers himself, rather than handing accounts to a revolving roster of juniors.',
      'His work covers SEO, Google Ads, social media, content and websites for local Hyderabad businesses, companies across Indian cities, and eCommerce and SaaS brands selling internationally. The same team also designs and builds SaaS products and mobile apps, then runs the launch and app-install campaigns.',
      'Clients speak to him in English, Hindi or Telugu. The first step is usually a free audit of your website, search, ads and AI visibility — then a written 90-day plan you can judge in your own accounts.',
    ],
  },
  address: {
    street: 'WeWork Krishe Emerald, Kondapur Main Road, Laxmi Cyber City, Whitefields, Kondapur',
    locality: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500084',
    country: 'IN',
  },
  usAddress: {
    street: '30 N Gould St Ste R',
    locality: 'Sheridan',
    region: 'Wyoming',
    postalCode: '82801',
    county: 'Sheridan County',
    country: 'US',
  },
  geo: { lat: 17.457954, lng: 78.368317 },
  hours: 'Mo-Sa 10:00-19:00',
  hoursLabel: 'Monday to Saturday, 10:00 AM – 7:00 PM IST',
  areaServed: ['Kondapur', 'Hyderabad', 'Secunderabad', 'Telangana', 'India', 'United States', 'Worldwide'],
  social: {
    linkedin: '',
    instagram: '',
    facebook: '',
    x: '',
    youtube: '',
  },
  googleBusinessProfile: '',
  bookingUrl: '',
  formEndpoint: '',
  ogImage: '/og/hyd.png',
  logo: '/brand/logo.png',
};

export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'Industries', href: '/industries/' },
  { label: 'Hyderabad', href: '/locations/' },
  { label: 'India', href: '/cities/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Case Studies', href: '/case-studies/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
];

export const sameAs = Object.values(site.social).filter(Boolean);

export function formatInAddress() {
  const a = site.address;
  return [a.street, a.locality, a.region, a.postalCode, 'India'].filter(Boolean).join(', ');
}

export function formatUsAddress() {
  const a = site.usAddress;
  return `${a.street}, ${a.locality}, ${a.county}, ${a.region} ${a.postalCode}, United States`;
}

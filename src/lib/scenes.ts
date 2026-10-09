export type SceneKind = 'hyd' | 'search' | 'desk' | 'map' | 'india' | 'shop' | 'product' | 'meet';

export const sceneAlt: Record<SceneKind, string> = {
  hyd: 'Retro line drawing of Charminar as a signal tower for Search, Maps and AI',
  search: 'Retro print plates stacked as Search, Maps and AI answer cards',
  desk: 'Retro isometric desk: laptop, type and a signal square — no photograph',
  map: 'Retro city grid with animated map pins over Hyderabad',
  india: 'Retro stamp map of India with Hyderabad as the signal hub',
  shop: 'Retro storefront with an awning, window and open sign',
  product: 'Retro overlapping software windows for a product in build',
  meet: 'Retro meeting table drawn as two chairs and a signal lamp',
};

export function sceneFor(pathname: string): SceneKind {
  const p = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (p === '/') return 'hyd';
  const [section, slug] = p.split('/').filter(Boolean);
  if (section === 'blog' && slug === 'what-is-geo-aeo-llmo') return 'search';
  if (section === 'blog' && slug === 'local-seo-checklist-hyderabad') return 'map';
  if (section === 'blog') return 'meet';
  if (section === 'about') return 'desk';
  if (section === 'services' && slug === 'saas-product-development-hyderabad') return 'product';
  if (section === 'services' && slug === 'mobile-app-development-hyderabad') return 'product';
  if (section === 'services' && slug === 'app-install-campaigns-hyderabad') return 'product';
  if (section === 'services' && slug === 'ecommerce-marketing-hyderabad') return 'shop';
  if (section === 'services' && slug === 'website-design-development-hyderabad') return 'desk';
  if (section === 'services' && slug === 'local-seo-hyderabad') return 'map';
  if (section === 'services') return 'search';
  if (section === 'locations') return 'hyd';
  if (section === 'cities') return 'india';
  if (section === 'industries' && slug === 'interior-design') return 'desk';
  if (section === 'industries' && slug === 'landscaping') return 'india';
  if (section === 'industries' && (slug === 'manufacturing' || slug === 'automotive')) return 'product';
  if (section === 'industries') return 'shop';
  if (section === 'contact' || section === 'free-audit' || section === 'pricing' || section === 'case-studies') return 'meet';
  return 'hyd';
}

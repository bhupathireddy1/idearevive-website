import { sceneAlt, sceneFor, type SceneKind } from './scenes';

export type Cover = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const SIZE = { width: 1200, height: 630 };

const covers: Record<SceneKind, Cover> = {
  hyd: { src: '/og/hyd.png', alt: sceneAlt.hyd, ...SIZE },
  search: { src: '/og/search.png', alt: sceneAlt.search, ...SIZE },
  desk: { src: '/og/desk.png', alt: sceneAlt.desk, ...SIZE },
  map: { src: '/og/map.png', alt: sceneAlt.map, ...SIZE },
  india: { src: '/og/india.png', alt: sceneAlt.india, ...SIZE },
  shop: { src: '/og/shop.png', alt: sceneAlt.shop, ...SIZE },
  product: { src: '/og/product.png', alt: sceneAlt.product, ...SIZE },
  meet: { src: '/og/meet.png', alt: sceneAlt.meet, ...SIZE },
};

/** Retro print poster for OG / schema. On-page graphics use RetroScene, not these files. */
export function coverFor(pathname: string): Cover {
  return covers[sceneFor(pathname)];
}

export function ogPathFor(pathname: string): string {
  return coverFor(pathname).src;
}

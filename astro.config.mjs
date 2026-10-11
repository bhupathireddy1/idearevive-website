import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from './src/data/site.ts';
import { reviewedFor } from './src/lib/reviewed.ts';

/** Copy the generated urlset to /sitemap.xml, the URL crawlers actually request. */
function emitSitemapXml() {
  return {
    name: 'emit-sitemap-xml',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const dist = fileURLToPath(dir);
        const chunk = path.join(dist, 'sitemap-0.xml');
        const dest = path.join(dist, 'sitemap.xml');
        if (fs.existsSync(chunk)) fs.copyFileSync(chunk, dest);
      },
    },
  };
}

export default defineConfig({
  site: site.url,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/thanks/'),
      namespaces: { news: false, xhtml: false, image: false, video: false },
      serialize(item) {
        item.lastmod = reviewedFor(new URL(item.url).pathname);
        return item;
      },
    }),
    emitSitemapXml(),
  ],
  build: {
    inlineStylesheets: 'always',
  },
});

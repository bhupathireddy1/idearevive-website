import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { posts } from './src/data/posts.ts';
import { site } from './src/data/site.ts';

const postLastmod = Object.fromEntries(
  posts.map((post) => [`${site.url}/blog/${post.slug}/`, post.updated]),
);

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
      filter: (page) => !page.includes('/404'),
      namespaces: { news: false, xhtml: false, image: false, video: false },
      serialize(item) {
        item.lastmod = postLastmod[item.url] ?? site.contentUpdated;
        return item;
      },
    }),
    emitSitemapXml(),
  ],
  build: {
    inlineStylesheets: 'always',
  },
});

#!/usr/bin/env node
/**
 * On-page scorecard for every indexable page in dist/.
 * Six categories (SEO, GEO, AEO, AIO, LLMO, SXO), 10 checks each.
 * Checks that don't apply to a page type (e.g. FAQs on a privacy policy) are skipped,
 * and the category score is passed / applicable × 10.
 *
 *   npm run build && node scripts/score-pages.mjs [--verbose]
 */
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const SITE = 'https://idearevive.com';
const verbose = process.argv.includes('--verbose');

const read = (p) => fs.readFileSync(p, 'utf8');
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
const words = (t) => (t.match(/[\p{L}\p{N}][\p{L}\p{N}'’.-]*/gu) || []).length;
const all = (re, s) => [...s.matchAll(re)];

function walk(dir, out = []) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (f === 'index.html') out.push(p);
  }
  return out;
}

const robots = read(path.join(DIST, 'robots.txt'));
const llms = fs.existsSync(path.join(DIST, 'llms.txt')) ? read(path.join(DIST, 'llms.txt')) : '';
const llmsFull = fs.existsSync(path.join(DIST, 'llms-full.txt')) ? read(path.join(DIST, 'llms-full.txt')) : '';
const sitemapXml = fs.readdirSync(DIST).filter((f) => f === 'sitemap.xml' || /^sitemap-\d+\.xml$/.test(f)).map((f) => read(path.join(DIST, f))).join('');

function typeOf(url) {
  if (url === '/') return 'home';
  const [, a, b] = url.split('/');
  if (['privacy-policy', 'terms', 'cookie-policy', 'accessibility', 'sitemap'].includes(a)) return 'legal';
  if (['about', 'pricing', 'contact', 'free-audit'].includes(a)) return 'company';
  if (!b) return 'hub';
  return { services: 'service', locations: 'location', cities: 'city', industries: 'industry', blog: 'post', 'case-studies': 'case' }[a] ?? 'other';
}
const minWords = { home: 900, service: 700, city: 700, location: 600, industry: 600, post: 700, case: 500, hub: 400, company: 400, legal: 250 };
const DETAIL = ['service', 'city', 'location', 'industry', 'post', 'case'];

const pages = walk(DIST).map((file) => {
  const html = read(file);
  const url = '/' + path.relative(DIST, path.dirname(file)).split(path.sep).join('/') + (path.dirname(file) === DIST ? '' : '/');
  const u = url.replace(/^\/\//, '/');
  return { file, url: u, html };
}).filter((p) => !/name="robots" content="noindex/.test(p.html));

const titles = new Map(), descs = new Map(), questions = new Map();
for (const p of pages) {
  p.title = (p.html.match(/<title>([\s\S]*?)<\/title>/) || [])[1]?.trim() ?? '';
  p.desc = (p.html.match(/<meta name="description" content="([^"]*)"/) || [])[1] ?? '';
  p.main = (p.html.match(/<main[^>]*>([\s\S]*?)<\/main>/) || [])[1] ?? '';
  p.text = strip(p.main);
  p.type = typeOf(p.url);
  p.headings = all(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g, p.main).map((m) => ({ level: +m[1], text: strip(m[2]) }));
  p.paras = all(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/g, p.main).map((m) => strip(m[1])).filter((t) => words(t) > 3);
  p.faqQs = all(/<details class="faq-item"[^>]*>[\s\S]*?<h3>([\s\S]*?)<\/h3>[\s\S]*?<p>([\s\S]*?)<\/p>/g, p.main).map((m) => ({ q: strip(m[1]), a: strip(m[2]) }));
  const ld = all(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g, p.html);
  try { p.graph = ld.flatMap((m) => JSON.parse(m[1])['@graph'] ?? [JSON.parse(m[1])]); p.ldOk = true; } catch { p.graph = []; p.ldOk = false; }
  p.node = (t) => p.graph.find((n) => [].concat(n['@type']).includes(t));
  titles.set(p.title, (titles.get(p.title) ?? 0) + 1);
  descs.set(p.desc, (descs.get(p.desc) ?? 0) + 1);
  for (const f of p.faqQs) questions.set(f.q, (questions.get(f.q) ?? 0) + 1);
}

const exists = (href) => {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean) return true;
  const f = path.join(DIST, clean, clean.endsWith('/') ? 'index.html' : '');
  return fs.existsSync(f) || fs.existsSync(path.join(DIST, clean));
};
const FOUNDER = /Bhupathi Reddy/;

const checks = {
  SEO: [
    ['Title 30–60 chars', (p) => p.title.length >= 30 && p.title.length <= 60],
    ['Title unique', (p) => titles.get(p.title) === 1],
    ['Meta description 120–160 chars', (p) => p.desc.length >= 120 && p.desc.length <= 160],
    ['Meta description unique', (p) => descs.get(p.desc) === 1],
    ['Exactly one H1', (p) => p.headings.filter((h) => h.level === 1).length === 1],
    ['No skipped heading levels', (p) => p.headings.every((h, i) => i === 0 || h.level <= p.headings[i - 1].level + 1)],
    ['Self-referencing canonical', (p) => p.html.includes(`<link rel="canonical" href="${SITE}${p.url}"`)],
    ['≥ 8 internal links in main content', (p) => all(/<a [^>]*href="\/[^"]*"/g, p.main).length >= 8],
    ['No broken internal links', (p) => all(/href="(\/[^"]*)"/g, p.html).every((m) => exists(m[1]))],
    ['Open Graph, Twitter and lang complete', (p) => ['og:title', 'og:description', 'og:image', 'og:url', 'twitter:card'].every((k) => p.html.includes(k)) && /<html lang="en-IN"/.test(p.html)],
  ],
  GEO: [
    ['Structured data parses', (p) => p.ldOk && p.graph.length >= 3],
    ['Organization entity with knowsAbout', (p) => (p.node('Organization')?.knowsAbout?.length ?? 0) >= 8],
    ['WebPage has datePublished + dateModified', (p) => Boolean(p.node('WebPage')?.dateModified || p.graph.find((n) => n.dateModified && n['@id']?.endsWith('#webpage')))],
    ['Direct answer (25–90 words) near top', (p) => { const a = p.paras.find((t) => words(t) >= 25); return Boolean(a) && words(a) <= 90 && p.text.indexOf(a.slice(0, 40)) < p.text.length * 0.3; }, (t) => t !== 'legal'],
    ['Brand entity named in opening answer', (p) => /IdeaRevive/.test(p.paras.find((t) => words(t) >= 25) ?? ''), (t) => !['legal', 'post'].includes(t)],
    ['Accountable person named on page', (p) => FOUNDER.test(p.text), (t) => t !== 'legal'],
    ['Publisher / author linked to Organization', (p) => p.graph.some((n) => n.publisher?.['@id'] || n.author)],
    ['Content depth meets page-type minimum', (p) => words(p.text) >= (minWords[p.type] ?? 300)],
    ['Uses lists or tables', (p) => /<(ul|ol|table|dl)[\s>]/.test(p.main)],
    ['Visible updated date', (p) => /<time [^>]*datetime=/.test(p.main)],
  ],
  AEO: [
    ['FAQ section with ≥ 3 questions', (p) => p.faqQs.length >= 3, (t) => t !== 'legal'],
    ['FAQPage schema matches visible FAQs', (p) => (p.node('FAQPage')?.mainEntity?.length ?? -1) === p.faqQs.length, (t) => t !== 'legal'],
    ['Question-form headings', (p) => p.headings.filter((h) => h.text.trim().endsWith('?')).length >= 3, (t) => t !== 'legal'],
    ['FAQ answers concise (15–90 words)', (p) => p.faqQs.every((f) => words(f.a) >= 15 && words(f.a) <= 90), (t) => t !== 'legal'],
    ['FAQ questions unique sitewide', (p) => p.faqQs.every((f) => questions.get(f.q) === 1), (t) => t !== 'legal'],
    ['BreadcrumbList schema', (p) => Boolean(p.node('BreadcrumbList')), (t) => t !== 'home'],
    ['Visible breadcrumbs', (p) => /aria-label="Breadcrumb"/.test(p.main), (t) => t !== 'home'],
    ['Speakable markup on WebPage', (p) => p.graph.some((n) => n.speakable)],
    ['≥ 3 H2 sections', (p) => p.headings.filter((h) => h.level === 2).length >= 3],
    ['Opening answer’s first sentence ≤ 45 words', (p) => { const a = p.paras.find((t) => words(t) >= 25) ?? ''; return words(a.split(/(?<=[.!?])\s/)[0]) <= 45; }, (t) => t !== 'legal'],
  ],
  AIO: [
    ['Average paragraph ≤ 70 words', (p) => p.paras.reduce((s, t) => s + words(t), 0) / Math.max(1, p.paras.length) <= 70],
    ['No paragraph over 120 words', (p) => p.paras.every((t) => words(t) <= 120)],
    ['≥ 2 lists', (p) => all(/<(ul|ol)[\s>]/g, p.main).length >= 2],
    ['Key-facts table or definition list', (p) => /<(table|dl)[\s>]/.test(p.main), (t) => t !== 'legal'],
    ['Descriptive H2s (no generic labels)', (p) => p.headings.filter((h) => h.level === 2).every((h) => h.text.length >= 8 && !/^(overview|introduction|more|details|info)$/i.test(h.text))],
    ['Graphics have accessible names', (p) => all(/<img [^>]*>/g, p.main).every((m) => /alt="/.test(m[0])) && all(/<svg [^>]*role="img"[^>]*>/g, p.main).every((m) => /aria-label/.test(m[0]))],
    ['Snippets allowed (max-snippet:-1)', (p) => /max-snippet:-1/.test(p.html)],
    ['Content fully server-rendered', (p) => words(p.text) >= 200],
    ['No third-party render-blocking scripts', (p) => all(/<script[^>]+src="https?:[^>]*>/g, p.html).every((m) => /\s(defer|async)[\s>=]/.test(m[0]))],
    ['Citable passage (80–250 word section)', (p) => p.main.split(/<h2[\s>]/).slice(1).some((s) => { const w = words(strip('<h2 ' + s)); return w >= 80 && w <= 250; }), (t) => t !== 'legal'],
  ],
  LLMO: [
    ['Listed in llms.txt', (p) => llms.includes(`${SITE}${p.url}`) || (p.url === '/' && llms.includes(SITE))],
    ['Included in llms-full.txt', (p) => llmsFull.includes(`${SITE}${p.url}`)],
    ['AI crawlers allowed in robots.txt', () => ['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'].every((b) => robots.includes(`User-agent: ${b}`))],
    ['In XML sitemap', (p) => sitemapXml.includes(`<loc>${SITE}${p.url}</loc>`)],
    ['<link rel=alternate> to llms.txt', (p) => /href="\/llms\.txt"/.test(p.html)],
    ['Consistent entity @id across graph', (p) => p.graph.filter((n) => n.publisher || n.provider || n.about).every((n) => [n.publisher, n.provider, n.about].filter(Boolean).every((r) => r['@id'] === `${SITE}/#organization` || r['@type']))],
    ['Contact email consistent on page', (p) => p.html.includes('mailto:contact@idearevive.com')],
    ['inLanguage declared', (p) => p.graph.some((n) => n.inLanguage === 'en-IN')],
    ['Description mentions H1 topic', (p) => { const h1 = (p.headings.find((h) => h.level === 1)?.text ?? '').toLowerCase(); const key = h1.split(/\s+/).filter((w) => w.length > 4).slice(0, 4); return key.length === 0 || key.some((k) => p.desc.toLowerCase().includes(k.replace(/[^a-z]/g, ''))); }],
    ['Entity facts in Organization (experience, clients)', (p) => Boolean(p.node('Organization')?.numberOfEmployees || p.node('Organization')?.additionalProperty?.length)],
  ],
  SXO: [
    ['Primary CTA above first H2', (p) => { const i = p.main.search(/<h2[\s>]/); return /btn-primary/.test(i === -1 ? p.main : p.main.slice(0, i)); }, (t) => t !== 'legal'],
    ['Closing CTA section', (p) => /class="closer"/.test(p.main) || /id="(contact|audit)-form"/.test(p.main), (t) => t !== 'legal'],
    ['Direct contact path (email)', (p) => /mailto:/.test(p.html)],
    ['Trust strip with proof points', (p) => /class="proof/.test(p.main), (t) => t !== 'legal'],
    ['Next-step links (related list)', (p) => /class="(index-list|tag-list|type-links)/.test(p.main), (t) => t !== 'legal'],
    ['Breadcrumb trail', (p) => /aria-label="Breadcrumb"/.test(p.main), (t) => t !== 'home'],
    ['Page-type intent module', (p) => ({
      service: /class="timeline"/.test(p.main) && /href="\/pricing\/"/.test(p.html),
      city: /class="index-list"/.test(p.main) && /How we work with/.test(p.text),
      post: /class="answer-box/.test(p.main) && /<time /.test(p.main),
      location: /class="city-map"/.test(p.main),
    }[p.type] ?? true)],
    ['Title and H1 aligned', (p) => { const h1 = (p.headings.find((h) => h.level === 1)?.text ?? '').toLowerCase().split(/\W+/).filter((w) => w.length > 3); return h1.length === 0 || h1.filter((w) => p.title.toLowerCase().includes(w)).length / h1.length >= 0.5; }],
    ['Works without JavaScript (no-JS reveal fallback)', (p) => /scripting:\s*none/.test(p.html) || !/data-reveal/.test(p.main)],
    ['Mobile viewport', (p) => /name="viewport" content="width=device-width/.test(p.html)],
  ],
};

let totalFail = 0;
const rows = [];
for (const p of pages.sort((a, b) => a.url.localeCompare(b.url))) {
  const row = { url: p.url, type: p.type, fails: [] };
  for (const [cat, list] of Object.entries(checks)) {
    const applicable = list.filter(([, , applies]) => !applies || applies(p.type));
    const passed = applicable.filter(([name, fn]) => { const ok = fn(p); if (!ok) row.fails.push(`${cat}: ${name}`); return ok; });
    row[cat] = Math.round((passed.length / applicable.length) * 100) / 10;
  }
  totalFail += row.fails.length;
  rows.push(row);
}

const cats = Object.keys(checks);
const pad = (s, n) => String(s).padEnd(n);
console.log(pad('URL', 62) + cats.map((c) => pad(c, 6)).join(''));
for (const r of rows) {
  console.log(pad(r.url, 62) + cats.map((c) => pad(r[c], 6)).join(''));
  if (verbose || r.fails.length) r.fails.forEach((f) => console.log('    ✗ ' + f));
}
const perfect = rows.filter((r) => cats.every((c) => r[c] === 10)).length;
console.log(`\n${perfect}/${rows.length} pages score 10/10 in every category · ${totalFail} failed checks`);
process.exit(totalFail ? 1 : 0);

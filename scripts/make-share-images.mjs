#!/usr/bin/env node
/**
 * Rasterise retro print posters for Open Graph (1200×630 PNG)
 * plus favicon.ico and apple-touch-icon.png.
 */
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ogDir = join(root, 'public/og');
const W = 1200;
const H = 630;
const PAPER = '#f2ede3';
const INK = '#17140f';
const SIGNAL = '#ff4d1a';
const RULE = '#c9c0b0';

const posters = {
  hyd: {
    kicker: 'HYDERABAD',
    title: ['Get found on Google,', 'Maps and AI.'],
    note: 'SEO · Ads · Sites · Apps',
    art: `
      <g transform="translate(780,118)" fill="none" stroke="${INK}" stroke-width="6">
        <rect x="0" y="80" width="280" height="280"/>
        <rect x="36" y="140" width="70" height="140"/>
        <rect x="174" y="140" width="70" height="140"/>
        <rect x="105" y="200" width="70" height="80"/>
        <rect x="86" y="40" width="108" height="48"/>
        <rect x="118" y="0" width="44" height="44" fill="${SIGNAL}" stroke="none"/>
      </g>`,
  },
  search: {
    kicker: 'SEARCH',
    title: ['Rank for the words', 'buyers already type.'],
    note: 'SEO · AEO · GEO · LLMO',
    art: `
      <g transform="translate(760,130)">
        <rect x="40" y="0" width="280" height="88" fill="${PAPER}" stroke="${INK}" stroke-width="5"/>
        <rect x="20" y="110" width="280" height="88" fill="${PAPER}" stroke="${INK}" stroke-width="5"/>
        <rect x="0" y="220" width="280" height="88" fill="${SIGNAL}" stroke="${INK}" stroke-width="5"/>
        <rect x="58" y="28" width="200" height="14" fill="${INK}"/>
        <rect x="38" y="138" width="160" height="14" fill="${INK}"/>
        <rect x="18" y="248" width="180" height="14" fill="${PAPER}"/>
      </g>`,
  },
  desk: {
    kicker: 'THE DESK',
    title: ['Build and growth', 'in one team.'],
    note: 'Websites · SaaS · Apps',
    art: `
      <g transform="translate(740,150)" stroke="${INK}" stroke-width="6" fill="none">
        <rect x="40" y="40" width="300" height="190"/>
        <rect x="70" y="70" width="240" height="130" fill="${INK}" stroke="none"/>
        <rect x="0" y="230" width="380" height="22"/>
        <rect x="300" y="0" width="48" height="48" fill="${SIGNAL}" stroke="none"/>
      </g>`,
  },
  map: {
    kicker: 'MAPS',
    title: ['Show up where', 'Hyderabad searches.'],
    note: 'Local SEO · Google Business Profile',
    art: `
      <g transform="translate(760,120)" fill="none" stroke="${INK}" stroke-width="4">
        ${[0, 1, 2, 3, 4].map((i) => `<line x1="${i * 70}" y1="0" x2="${i * 70}" y2="360"/>`).join('')}
        ${[0, 1, 2, 3, 4, 5].map((i) => `<line x1="0" y1="${i * 72}" x2="280" y2="${i * 72}"/>`).join('')}
        <circle cx="70" cy="144" r="14" fill="${SIGNAL}" stroke="${INK}"/>
        <circle cx="210" cy="216" r="14" fill="${SIGNAL}" stroke="${INK}"/>
        <circle cx="140" cy="72" r="10" fill="${INK}" stroke="none"/>
      </g>`,
  },
  india: {
    kicker: 'INDIA',
    title: ['Hyderabad team.', 'Clients across India.'],
    note: 'Six metros · Remote everywhere else',
    art: `
      <g transform="translate(800,90)">
        <rect x="0" y="0" width="260" height="420" fill="${PAPER}" stroke="${INK}" stroke-width="8"/>
        <rect x="18" y="18" width="224" height="384" fill="none" stroke="${RULE}" stroke-width="3"/>
        <rect x="88" y="150" width="84" height="84" fill="${SIGNAL}"/>
        <rect x="70" y="300" width="120" height="16" fill="${INK}"/>
        <rect x="90" y="328" width="80" height="10" fill="${INK}"/>
      </g>`,
  },
  shop: {
    kicker: 'SHOP',
    title: ['eCommerce that knows', 'which order paid.'],
    note: 'Feeds · Tracking · Shopping',
    art: `
      <g transform="translate(760,140)" stroke="${INK}" stroke-width="6" fill="none">
        <path d="M0 70 L40 0 H360 L400 70 Z" fill="${SIGNAL}" stroke="${INK}"/>
        <rect x="20" y="70" width="360" height="260"/>
        <rect x="60" y="120" width="120" height="150"/>
        <rect x="220" y="120" width="120" height="150"/>
        <rect x="150" y="270" width="100" height="60" fill="${INK}" stroke="none"/>
      </g>`,
  },
  product: {
    kicker: 'PRODUCT',
    title: ['SaaS and apps,', 'then the install ads.'],
    note: 'Build · Launch · Grow',
    art: `
      <g transform="translate(740,120)">
        <rect x="80" y="0" width="280" height="180" fill="${PAPER}" stroke="${INK}" stroke-width="6"/>
        <rect x="40" y="80" width="280" height="180" fill="${PAPER}" stroke="${INK}" stroke-width="6"/>
        <rect x="0" y="160" width="280" height="180" fill="${INK}" stroke="${INK}" stroke-width="6"/>
        <rect x="320" y="20" width="36" height="36" fill="${SIGNAL}"/>
      </g>`,
  },
  meet: {
    kicker: 'AUDIT',
    title: ['A free look at', 'search, ads and AI.'],
    note: 'Hyderabad · India · Worldwide',
    art: `
      <g transform="translate(760,200)" stroke="${INK}" stroke-width="6" fill="none">
        <rect x="0" y="80" width="360" height="20" fill="${INK}" stroke="none"/>
        <rect x="40" y="120" width="70" height="90"/>
        <rect x="250" y="120" width="70" height="90"/>
        <rect x="160" y="0" width="40" height="80" fill="${SIGNAL}" stroke="none"/>
      </g>`,
  },
};

function escapeXml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;');
}

function words(x, y, value, extra, em = 52) {
  const gap = Math.round(em * 0.38);
  const unit = em * 0.54;
  let cursor = x;
  return value.split(' ').map((word) => {
    const node = `<text x="${cursor}" y="${y}" ${extra}>${escapeXml(word)}</text>`;
    cursor += Math.round(word.replace(/[^A-Za-z0-9]/g, '').length * unit + gap);
    return node;
  }).join('\n  ');
}

function posterSvg(meta) {
  const display = "font-family=\"Iowan Old Style, Palatino, Georgia, serif\" font-size=\"52\" font-weight=\"700\" fill=\"" + INK + "\"";
  const mono = "font-family=\"Menlo, SFMono-Regular, monospace\" font-size=\"16\" fill=\"" + INK + "\"";
  const lines = meta.title.map((line, i) => words(72, 220 + i * 64, line, display)).join('\n  ');
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${PAPER}"/>
  <rect x="36" y="36" width="${W - 72}" height="${H - 72}" fill="none" stroke="${INK}" stroke-width="3"/>
  <rect x="48" y="48" width="${W - 96}" height="${H - 96}" fill="none" stroke="${RULE}" stroke-width="1"/>
  ${meta.art}
  ${words(72, 96, 'IDEAREVIVE', 'font-family="Menlo, SFMono-Regular, monospace" font-size="18" letter-spacing="5" fill="#8a2208"', 18)}
  ${words(72, 140, meta.kicker, mono, 16)}
  ${lines}
  ${words(72, 560, meta.note, 'font-family="Menlo, SFMono-Regular, monospace" font-size="18" fill="' + INK + '"', 18)}
  <rect x="72" y="580" width="36" height="12" fill="${SIGNAL}"/>
</svg>`;
}

function icoFromPngs(pngs) {
  const count = pngs.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);
  let offset = 6 + 16 * count;
  const entries = [];
  for (const { size, buffer } of pngs) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt32LE(0, 2);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += buffer.length;
    entries.push(entry);
  }
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.buffer)]);
}

async function main() {
  mkdirSync(ogDir, { recursive: true });
  const manifest = [];

  for (const [key, meta] of Object.entries(posters)) {
    const svg = posterSvg(meta);
    const file = join(ogDir, `${key}.png`);
    const buffer = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
    const info = await sharp(buffer).metadata();
    if (info.width !== W || info.height !== H) {
      throw new Error(`${key} is ${info.width}×${info.height}, expected ${W}×${H}`);
    }
    writeFileSync(file, buffer);
    manifest.push({ file: `public/og/${key}.png`, bytes: buffer.length, width: W, height: H });
    console.log(`public/og/${key}.png  ${(buffer.length / 1024).toFixed(1)}kb  ${W}×${H}`);
  }

  const mark = readFileSync(join(root, 'public/favicon.svg'));
  const apple = await sharp(mark).resize(180, 180).png({ compressionLevel: 9 }).toBuffer();
  writeFileSync(join(root, 'public/apple-touch-icon.png'), apple);
  console.log(`public/apple-touch-icon.png  ${(apple.length / 1024).toFixed(1)}kb  180×180`);

  const icoPngs = [];
  for (const size of [16, 32, 48]) {
    const buffer = await sharp(mark).resize(size, size).png().toBuffer();
    icoPngs.push({ size, buffer });
  }
  const ico = icoFromPngs(icoPngs);
  writeFileSync(join(root, 'public/favicon.ico'), ico);
  console.log(`public/favicon.ico  ${(ico.length / 1024).toFixed(1)}kb`);

  writeFileSync(join(ogDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

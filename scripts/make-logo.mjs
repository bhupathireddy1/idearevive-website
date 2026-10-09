import { mkdirSync, writeFileSync, copyFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'public/brand/source.jpg');
const srcInk = join(root, 'public/brand/source-ink.jpg');
const outDir = join(root, 'public/brand');
mkdirSync(outDir, { recursive: true });

const PAPER = [0xf2, 0xed, 0xe3];
const INK = [0x17, 0x14, 0x0f];
const SIGNAL = [0xff, 0x4d, 0x1a];

function dist2(r, g, b, t) {
  const dr = r - t[0], dg = g - t[1], db = b - t[2];
  return dr * dr + dg * dg + db * db;
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

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const paperPx = [];

for (let i = 0; i < data.length; i += channels) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const toPaper = dist2(r, g, b, PAPER);
  const toWhite = dist2(r, g, b, [245, 240, 232]);
  const orange = r > 180 && g < 140 && b < 90 && r > g + 40;

  let a = 255;
  if (toPaper < 900 || toWhite < 1100) a = 0;
  else if (toPaper < 2200 && !orange) a = Math.round(255 * (1 - (2200 - toPaper) / 1300));

  paperPx.push(r, g, b, a);
}

async function cropTransparent(rgba, w, h) {
  let minX = w, minY = h, maxX = 0, maxY = 0, hits = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const a = rgba[(y * w + x) * 4 + 3];
      if (a > 12) {
        hits++;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (!hits) throw new Error('knockout removed every pixel — relax the paper threshold');
  const pad = 8;
  minX = Math.max(0, minX - pad);
  minY = Math.max(0, minY - pad);
  maxX = Math.min(w - 1, maxX + pad);
  maxY = Math.min(h - 1, maxY + pad);
  const cw = maxX - minX + 1;
  const ch = maxY - minY + 1;
  const raw = Buffer.from(rgba);
  return sharp(raw, { raw: { width: w, height: h, channels: 4 } })
    .extract({ left: minX, top: minY, width: cw, height: ch })
    .png({ compressionLevel: 9 })
    .toBuffer({ resolveWithObject: true });
}

const paper = await cropTransparent(paperPx, width, height);

writeFileSync(join(outDir, 'logo.png'), paper.data);
copyFileSync(src, join(outDir, 'source.jpg'));

const inkSrc = await sharp(srcInk).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const inkRaw = [];
for (let i = 0; i < inkSrc.data.length; i += inkSrc.info.channels) {
  const r = inkSrc.data[i], g = inkSrc.data[i + 1], b = inkSrc.data[i + 2];
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const chroma = Math.max(r, g, b) - Math.min(r, g, b);
  const orange = r > 145 && g < 175 && b < 135 && r > g + 18 && r > b + 28;
  const cream = luma > 140 && r >= g - 6;
  const beige = luma > 90 && luma <= 140 && r > b + 6 && chroma > 8;
  let a = 255;
  if (orange || cream || beige) a = 255;
  else if (luma < 48 && chroma < 28) a = 0;
  else if (chroma < 18 && luma < 90) a = Math.round(Math.min(255, Math.max(0, (luma - 30) * 4)));
  if (a === 0) inkRaw.push(0, 0, 0, 0);
  else inkRaw.push(r, g, b, a);
}
const ink = await cropTransparent(inkRaw, inkSrc.info.width, inkSrc.info.height);
writeFileSync(join(outDir, 'logo-on-ink.png'), ink.data);

const cream = await sharp(paper.data)
  .flatten({ background: { r: PAPER[0], g: PAPER[1], b: PAPER[2] } })
  .png({ compressionLevel: 9 })
  .toBuffer();
writeFileSync(join(outDir, 'logo-on-paper.png'), cream);

const apple = await sharp({
  create: { width: 180, height: 180, channels: 4, background: { r: PAPER[0], g: PAPER[1], b: PAPER[2], alpha: 255 } },
})
  .composite([{ input: await sharp(paper.data).resize({ width: 156, height: 156, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer(), gravity: 'centre' }])
  .png({ compressionLevel: 9 })
  .toBuffer();
writeFileSync(join(root, 'public/apple-touch-icon.png'), apple);

const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="10" fill="#17140f"/>
  <path fill="#ff4d1a" d="M32 8c-8.8 0-16 7-16 16.2 0 5.6 2.8 10.5 7.1 13.5v3.1c0 1.3.7 2.4 1.8 2.9h14.2c1.1-.5 1.8-1.6 1.8-2.9v-3.1c4.3-3 7.1-7.9 7.1-13.5C48 15 40.8 8 32 8z"/>
  <path fill="none" stroke="#f2ede3" stroke-width="2.2" stroke-linecap="round" d="M32 16.5v9.5M27 20.5c2 3 8 3 10 0"/>
  <rect x="24" y="43.5" width="16" height="4.2" rx="1.2" fill="#ff4d1a"/>
  <rect x="25.5" y="48.2" width="13" height="3.4" rx="1" fill="#ff4d1a"/>
  <rect x="27.5" y="52" width="9" height="3.2" rx="1" fill="#ff4d1a"/>
</svg>
`;
writeFileSync(join(root, 'public/favicon.svg'), faviconSvg);

const mark = Buffer.from(faviconSvg);
const icoPngs = [];
for (const size of [16, 32, 48]) {
  icoPngs.push({ size, buffer: await sharp(mark).resize(size, size).png().toBuffer() });
}
writeFileSync(join(root, 'public/favicon.ico'), icoFromPngs(icoPngs));

console.log(`logo ${paper.info.width}×${paper.info.height}  ${(paper.data.length / 1024).toFixed(1)}kb`);
console.log(`logo-on-ink ${ink.info.width}×${ink.info.height}`);
console.log('favicon.ico + favicon.svg + apple-touch-icon.png');

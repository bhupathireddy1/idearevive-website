// Tells IndexNow engines (Bing, Yandex, Seznam, Naver, Yep) which URLs changed.
// Default: sitemap URLs whose <lastmod> is today (IST). `--all` sends every URL; `--since=YYYY-MM-DD` sets the cut-off.
import fs from 'node:fs';
import path from 'node:path';

const HOST = 'idearevive.com';
const root = path.resolve(import.meta.dirname, '..');
const keyFile = fs.readdirSync(path.join(root, 'public')).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('No IndexNow key file in public/');
const key = keyFile.replace('.txt', '');

const args = process.argv.slice(2);
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
const since = args.includes('--all') ? '0000' : (args.find((a) => a.startsWith('--since='))?.split('=')[1] ?? today);
const dryRun = args.includes('--dry-run');

const xml = fs.readFileSync(path.join(root, 'dist/sitemap.xml'), 'utf8');
const urls = [...xml.matchAll(/<url><loc>([^<]+)<\/loc>(?:<lastmod>([^<]+)<\/lastmod>)?/g)]
  .filter(([, , lastmod = '']) => lastmod.slice(0, 10) >= since)
  .map(([, loc]) => loc);

if (!urls.length) {
  console.log(`IndexNow: no URLs changed since ${since}, nothing sent.`);
  process.exit(0);
}
if (dryRun) {
  console.log(`IndexNow dry run: ${urls.length} URLs`, urls);
  process.exit(0);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation: `https://${HOST}/${keyFile}`, urlList: urls }),
});
console.log(`IndexNow: sent ${urls.length} URLs changed since ${since} → HTTP ${res.status} ${await res.text()}`);
if (res.status >= 400) process.exit(1);

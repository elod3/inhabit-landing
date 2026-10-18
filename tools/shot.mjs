// capturi de pagină întreagă: node shot.mjs <url> <out-prefix> [width]
import { chromium } from '/home/elodke/.cache/hairline-look/node_modules/playwright-core/index.mjs';
const [url, out, w = '1440'] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: '/usr/bin/chromium' });
const p = await b.newPage({ viewport: { width: +w, height: +w < 700 ? 844 : 900 }, deviceScaleFactor: 1 });
await p.goto(url, { waitUntil: 'networkidle' });
// derulează ca să pornească apariția la scroll și linia drumului
const H = await p.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < H; y += 400) { await p.evaluate(y => scrollTo(0, y), y); await p.waitForTimeout(60); }
await p.waitForTimeout(900);
await p.screenshot({ path: out + '.png', fullPage: true });
await b.close();

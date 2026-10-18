import { chromium } from '/home/elodke/.cache/hairline-look/node_modules/playwright-core/index.mjs';
const b = await chromium.launch({ executablePath: '/usr/bin/chromium' });
for (const u of process.argv.slice(2)) {
  const p = await b.newPage({ viewport: { width: 390, height: 844 } });
  await p.goto(u, { waitUntil: 'networkidle' });
  const r = await p.evaluate(() => {
    const W = document.documentElement.clientWidth, out = [];
    document.querySelectorAll('body *').forEach(el => {
      const x = el.getBoundingClientRect();
      if (x.right > W + 1 && !el.closest('.reel,.quotes')) out.push(el.tagName + '.' + el.className + ' ' + Math.round(x.right));
    });
    return { sw: document.documentElement.scrollWidth, W, out: out.slice(0, 12) };
  });
  console.log(u, JSON.stringify(r, null, 1));
}
await b.close();

// OG 이미지 세 장(facebook 1200×630, x 1200×675, kakao 800×400)을 template.html로 그려 PNG로 저장한다.
// 쓰는 법: node docs/og/render.mjs <config.json> <저장 폴더>
//   config 경로는 docs/og 기준(예: example/bandali.json). Playwright가 필요하다(npm i -D playwright).
//   다른 곳에 설치된 Playwright를 쓰려면 PLAYWRIGHT=/경로/playwright/index.mjs 를 앞에 붙인다.
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join, resolve } from "node:path";

const playwright = await import(process.env.PLAYWRIGHT ?? "playwright");
const [config = "example/bandali.json", out = "og-out"] = process.argv.slice(2);
const docs = resolve(import.meta.dirname, "..");
const types = { ".html": "text/html", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".woff2": "font/woff2" };
const server = createServer(async (req, res) => {
  try {
    const path = join(docs, decodeURIComponent(new URL(req.url, "http://x").pathname));
    if (!path.startsWith(docs)) throw new Error("outside");
    const body = await readFile(path);
    res.writeHead(200, { "content-type": types[extname(path)] ?? "application/octet-stream" }).end(body);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((done) => server.listen(0, "127.0.0.1", done));
const base = `http://127.0.0.1:${server.address().port}/og/template.html`;
await mkdir(out, { recursive: true });
// 입력창의 배경 흐림(backdrop-filter)은 Chromium 계열에서만 그려진다. Playwright Chromium이 없으면 설치된 Chrome을 쓰고,
// 둘 다 없으면 멈춘다(WebKit 렌더는 흐림이 빠진다).
const browser = await playwright.chromium
  .launch()
  .catch(() => playwright.chromium.launch({ channel: "chrome" }))
  .catch(() => {
    console.error("Chromium이 없어요. npx playwright install chromium 으로 설치하거나 Chrome을 설치해 주세요.");
    process.exit(1);
  });
for (const [size, w, h] of [["facebook", 1200, 630], ["x", 1200, 675], ["kakao", 800, 400]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  await page.goto(`${base}?size=${size}&config=${encodeURIComponent(config)}`);
  await page.waitForSelector("body[data-ready]");
  const over = await page.evaluate(() => document.body.dataset.overflow);
  if (over) {
    console.error(`${size}: 문구가 넘쳐요 (${over}). config 문구를 줄여 주세요.`);
    process.exitCode = 1;
    await page.close();
    continue;
  }
  const file = join(out, `og-${size}-${w}x${h}.png`);
  await page.locator("#og").screenshot({ path: file });
  console.log(file);
  await page.close();
}
await browser.close();
server.close();

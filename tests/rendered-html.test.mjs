import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://portfolio.example/", {
      headers: {
        accept: "text/html",
        "x-forwarded-host": "portfolio.example",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Abdur Rehman's complete portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Abdur Rehman — Software, Security &amp; Systems<\/title>/i);
  assert.match(html, /I build software that connects the/);
  assert.match(html, /UrduSeekho/);
  assert.match(html, /LogiTruck/);
  assert.match(html, /Lazy Chef/);
  assert.match(html, /Air Force Research Laboratory/);
  assert.match(html, /seven\s+standalone regression tests/);
  assert.match(html, /two critical hardware\s+bugs/);
  assert.match(html, /Expected December 2026/);
  assert.match(html, /Microcredential in\s+Research/);
  assert.match(html, /rabdur2005@gmail\.com/);
  assert.match(html, /\/files\/abdur-rehman-resume\.pdf/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("ships portfolio assets and absolute social metadata", async () => {
  const [layout, packageJson] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  await Promise.all([
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/images/profile/abdur-rehman.png", import.meta.url)),
    access(new URL("../public/files/abdur-rehman-resume.pdf", import.meta.url)),
    access(new URL("../public/images/urdu-seekho/dashboard.png", import.meta.url)),
    access(new URL("../public/images/logitruck/dashboard-demo.png", import.meta.url)),
    access(new URL("../public/videos/urdu-seekho-demo.mp4", import.meta.url)),
    access(new URL("../public/brand-mark.svg", import.meta.url)),
  ]);

  assert.match(layout, /https:\/\/rehman20052\.github\.io/);
  assert.match(layout, /summary_large_image/);
  assert.match(layout, /og\.png/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  const response = await render();
  const html = await response.text();
  assert.match(html, /https:\/\/rehman20052\.github\.io\/og\.png/);
  assert.match(html, /\/videos\/urdu-seekho-demo\.mp4/);
  assert.match(html, /Expand: Personal dashboard/);
});

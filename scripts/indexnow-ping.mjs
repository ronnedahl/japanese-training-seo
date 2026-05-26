#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const HOST = 'simpleseniorfitness.com';
const KEY = '2fe2ca07debc49b3a68b73667e9b0bf5';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = resolve(process.cwd(), 'dist/sitemap-0.xml');
const ENDPOINT = 'https://api.indexnow.org/indexnow';

function extractUrls(xml) {
  return Array.from(xml.matchAll(/<loc>(.+?)<\/loc>/g), (m) => m[1]);
}

async function main() {
  let xml;
  try {
    xml = readFileSync(SITEMAP_PATH, 'utf8');
  } catch {
    console.error(`[indexnow] cannot read sitemap at ${SITEMAP_PATH} — run "npm run build" first`);
    process.exit(1);
  }

  const urls = extractUrls(xml);
  if (urls.length === 0) {
    console.error('[indexnow] no URLs found in sitemap — refusing to ping');
    process.exit(1);
  }

  console.log(`[indexnow] submitting ${urls.length} URLs to ${ENDPOINT}`);

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });

    if (res.status === 200 || res.status === 202) {
      console.log(`[indexnow] ok — status ${res.status}`);
    } else {
      const text = await res.text().catch(() => '');
      console.warn(`[indexnow] unexpected status ${res.status}: ${text || '(no body)'}`);
    }
  } catch (err) {
    console.warn(`[indexnow] network error: ${err.message} (non-fatal)`);
  }
}

main();

// scripts/indexnow-changed-ci.mjs
import { execSync } from "node:child_process";

function sh(cmd) {
  return execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] }).toString("utf8");
}
const uniq = (arr) => [...new Set(arr)];

function normalizeSiteUrl(raw) {
  const s = raw.trim().replace(/\/$/, "");
  // SITE_URL mutlaka https://... olmalı
  const u = new URL(s);
  return u.origin; // https://www.sahneva.com
}

// Yalnızca "page.*" değişikliklerinden URL üret (components/styles spam olmasın)
// Not: route group'lar app/(tr)/(site)/... gibi parantezlidir ve URL'e girmez;
// en/ar/ru dizinleri ise parantezsiz gerçek segmentlerdir ve URL'de korunur.
function mapPageFileToUrl(file, siteUrl) {
  const m = file.match(/^app\/(?:(.+)\/)?page\.(js|jsx|ts|tsx)$/);
  if (!m) return [];

  // api altındaki page dosyaları (varsa) URL üretmez
  if (m[1] && /^api(\/|$)/.test(m[1])) return [];

  const segments = (m[1] || "")
    .split("/")
    .filter(
      (seg) =>
        seg &&
        !(seg.startsWith("(") && seg.endsWith(")")) &&
        !seg.startsWith("@")
    );

  // Dinamik segment ([sehir] gibi) içeren rotalar tek URL'e eşlenemez; atla
  if (segments.some((seg) => seg.includes("[") || seg.includes("]"))) return [];

  const routePath = segments.join("/");
  const urls = [routePath ? `${siteUrl}/${routePath}` : `${siteUrl}/`];

  // Blog yazısı değiştiyse ilgili blog index'ini de bildir
  const blogIndex = segments.indexOf("blog");
  if (blogIndex !== -1 && blogIndex < segments.length - 1) {
    urls.push(`${siteUrl}/${segments.slice(0, blogIndex + 1).join("/")}`);
  }

  return urls;
}

function buildChangedFiles() {
  try {
    return sh("git diff --name-only HEAD~1..HEAD")
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
  } catch {
    return sh("git ls-files")
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
  }
}

async function main() {
  const siteUrlRaw = process.env.SITE_URL;
  if (!siteUrlRaw) {
    console.error("[IndexNow CI] SITE_URL missing (must be like https://www.sahneva.com)");
    process.exit(1);
  }
  const siteUrl = normalizeSiteUrl(siteUrlRaw);

  const changedFiles = buildChangedFiles();

  // SADECE app/.../page.* dosyalarından URL üret
  const pageFiles = changedFiles.filter((f) =>
    /^app\/.*\/page\.(js|jsx|ts|tsx)$/.test(f)
  );

  const urls = uniq(pageFiles.flatMap((f) => mapPageFileToUrl(f, siteUrl))).filter(Boolean);

  if (urls.length === 0) {
    console.log("[IndexNow CI] No mapped URLs from changed page files. Skipping.");
    console.log("OUTPUT_URLS_JSON=[]");
    return;
  }

  const limited = urls.slice(0, 100);

  console.log("[IndexNow CI] Submitting URLs:");
  for (const u of limited) console.log(" -", u);

  console.log(`OUTPUT_URLS_JSON=${JSON.stringify(limited)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const SOURCE_EXTENSIONS = new Set([".js", ".jsx", ".mjs", ".ts", ".tsx"]);
const APP_DIR = path.join(rootDir, "app");
const SITEMAP_DATA_FILE = path.join(rootDir, "lib", "sitemap", "data.js");

const ROUTE_REJECT_PATTERNS = [
  /^\/_next\//,
  /^\/api(?:\/|$)/,
  /^\/search(?:\/|$)/,
  /^\/sitemap(?:-|\.|\/|$)/,
  /^\/robots\.txt$/,
  /^\/llms\.txt$/,
  /^\/opensearch\.xml$/,
  /^\/sw\.js$/,
];

const PRICE_PAGE_PATHS = new Set([
  "/led-ekran-kiralama-fiyatlari",
  "/podyum-kiralama-fiyatlari",
]);

const IGNORE_SITEMAP_MISSING = new Set([
  "/_not-found",
  "/search",
  "/tesekkurler",
]);

const IGNORE_ORPHAN_CANDIDATES = new Set([
  "/search",
  "/tesekkurler",
]);

const MEDIA_EXTENSION_PATTERN =
  /\.(avif|webp|png|jpe?g|svg|gif|ico|mp4|webm|mov|pdf|xlsx?|docx?)(?:$|[?#])/i;

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next" || entry.name === ".git") {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else if (SOURCE_EXTENSIONS.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function routeFromPageFile(filePath) {
  const relative = toPosix(path.relative(APP_DIR, filePath));
  if (!relative.endsWith("/page.js") && !relative.endsWith("/page.jsx")) return null;

  const segments = relative
    .replace(/\/page\.(jsx|js)$/, "")
    .split("/")
    .filter(Boolean)
    .filter((segment) => !segment.startsWith("(") || !segment.endsWith(")"));

  if (segments.some((segment) => segment.startsWith("[") || segment.endsWith("]"))) {
    return null;
  }

  const route = `/${segments.join("/")}`.replace(/\/+/g, "/");
  return route === "/" ? "/" : route.replace(/\/$/, "");
}

function cleanInternalPath(value) {
  if (!value || !value.startsWith("/")) return null;
  if (value.startsWith("//")) return null;

  const noHash = value.split("#")[0];
  const noQuery = noHash.split("?")[0];
  const normalized = noQuery.length > 1 ? noQuery.replace(/\/$/, "") : noQuery;

  if (MEDIA_EXTENSION_PATTERN.test(normalized)) return null;

  if (!normalized || ROUTE_REJECT_PATTERNS.some((pattern) => pattern.test(normalized))) {
    return null;
  }

  return normalized;
}

function lineNumberForIndex(text, index) {
  return text.slice(0, index).split(/\r?\n/).length;
}

function getLine(text, lineNumber) {
  return text.split(/\r?\n/)[lineNumber - 1]?.trim() ?? "";
}

function extractInternalLinks(text) {
  const links = [];
  const patterns = [
    /\bhref\s*=\s*\{?\s*["']([^"']+)["']/g,
    /\bhref\s*:\s*["']([^"']+)["']/g,
  ];

  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      const href = cleanInternalPath(match[1]);
      if (!href) continue;
      const line = lineNumberForIndex(text, match.index ?? 0);
      links.push({ href, line, source: getLine(text, line) });
    }
  }

  return links;
}

function extractImageBlocks(text) {
  const blocks = [];
  const patterns = [
    /<Image\b[\s\S]*?(?:\/>|<\/Image>)/g,
    /<img\b[\s\S]*?(?:\/>|>)/g,
  ];

  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      const block = match[0];
      const line = lineNumberForIndex(text, match.index ?? 0);
      blocks.push({
        line,
        hasAlt: /\balt\s*=/.test(block),
      });
    }
  }

  return blocks;
}

function extractSitemapStaticPaths() {
  if (!fs.existsSync(SITEMAP_DATA_FILE)) return new Set();
  const text = readText(SITEMAP_DATA_FILE);
  const start = text.indexOf("const STATIC_PAGE_META");
  const end = text.indexOf("const STATIC_PAGES", start);
  const section = start >= 0 && end > start ? text.slice(start, end) : text;
  const paths = new Set();

  for (const match of section.matchAll(/["'](\/[^"']*)["']\s*:/g)) {
    paths.add(match[1].length > 1 ? match[1].replace(/\/$/, "") : match[1]);
  }

  return paths;
}

function pageSignals(text) {
  const title = /\btitle\s*:|export\s+async\s+function\s+generateMetadata|export\s+function\s+generateMetadata/.test(text);
  const description = /\bdescription\s*:/.test(text);
  const canonical = /canonical\s*:|buildCanonical\(|buildLanguageAlternates\(|\bconst\s+canonical\b/.test(text);
  const openGraph = /\bopenGraph\s*:/.test(text);
  const twitter = /\btwitter\s*:/.test(text);
  const jsonLd = /<JsonLd\b|BreadcrumbJsonLd|FAQPage|LocalBusiness|Service"|<ServicePage\b/.test(text);
  const breadcrumb = /BreadcrumbJsonLd|BreadcrumbList/.test(text);
  const alternates = /\balternates\s*:|\blanguages\s*:/.test(text);
  const visibleFaq = /id=["']faq["']|FAQ_ITEMS|function\s+FAQ\s*\(|Sık Sorulan|Частые вопросы/i.test(text);
  const faqSchema = /FAQPage|buildFaqSchema|mainEntity:\s*.*Question/s.test(text);

  return {
    title,
    description,
    canonical,
    openGraph,
    twitter,
    jsonLd,
    breadcrumb,
    alternates,
    visibleFaq,
    faqSchema,
  };
}

function isMoneyRoute(route) {
  const seoRouteTokens = [
    "kiralama",
    "organizasyon",
    "sistem",
    "hesaplama",
    "hizmetler",
    "rental",
    "events",
    "services",
  ];

  return (
    route === "/" ||
    route === "/en" ||
    route === "/ru" ||
    seoRouteTokens.some((token) => route.includes(token))
  );
}

function shouldCheckStaticSitemapRegistry(route) {
  if (IGNORE_SITEMAP_MISSING.has(route)) return false;
  if (route.startsWith("/blog/") || route.startsWith("/en/blog/")) return false;
  if (route.startsWith("/projeler/")) return false;
  if (ROUTE_REJECT_PATTERNS.some((pattern) => pattern.test(route))) return false;
  return true;
}

function analyzePages(pageFiles, sitemapPaths) {
  const pages = pageFiles
    .map((filePath) => ({ filePath, route: routeFromPageFile(filePath) }))
    .filter((item) => item.route);

  const pageReports = [];
  const fileToRoute = new Map(pages.map((item) => [item.filePath, item.route]));

  for (const page of pages) {
    const text = readText(page.filePath);
    const signals = pageSignals(text);
    const images = extractImageBlocks(text);
    const missingImageAlt = images.filter((image) => !image.hasAlt).length;
    const issues = [];

    if (isMoneyRoute(page.route)) {
      if (!signals.title) issues.push("missing title metadata signal");
      if (!signals.description) issues.push("missing description metadata signal");
      if (!signals.canonical) issues.push("missing canonical signal");
      if (!signals.openGraph) issues.push("missing OpenGraph signal");
      if (!signals.jsonLd) issues.push("missing JSON-LD signal");
    }

    if (signals.visibleFaq && !signals.faqSchema) {
      issues.push("visible FAQ without FAQPage schema signal");
    }

    if (missingImageAlt) issues.push(`${missingImageAlt} image component(s) without alt`);

    if (
      shouldCheckStaticSitemapRegistry(page.route) &&
      !sitemapPaths.has(page.route)
    ) {
      issues.push("route not listed in STATIC_PAGE_META sitemap registry");
    }

    pageReports.push({
      ...page,
      relativeFile: toPosix(path.relative(rootDir, page.filePath)),
      signals,
      issues,
    });
  }

  return { pages, pageReports, fileToRoute };
}

function analyzeLinks(files, routes, fileToRoute) {
  const routeSet = new Set(routes.map((item) => item.route));
  const incoming = new Map([...routeSet].map((route) => [route, []]));
  const brokenInternalLinks = [];
  const priceLinks = [];

  for (const filePath of files) {
    const text = readText(filePath);
    const sourceRoute = fileToRoute.get(filePath) ?? null;
    const relativeFile = toPosix(path.relative(rootDir, filePath));

    for (const link of extractInternalLinks(text)) {
      if (PRICE_PAGE_PATHS.has(link.href)) {
        priceLinks.push({ ...link, file: relativeFile });
      }

      if (!routeSet.has(link.href)) {
        brokenInternalLinks.push({ ...link, file: relativeFile });
        continue;
      }

      if (sourceRoute !== link.href) {
        incoming.get(link.href)?.push({ file: relativeFile, line: link.line });
      }
    }
  }

  const orphanCandidates = [...incoming.entries()]
    .filter(
      ([route, refs]) =>
        refs.length === 0 &&
        !["/", "/en", "/ar", "/ru"].includes(route) &&
        !IGNORE_ORPHAN_CANDIDATES.has(route)
    )
    .map(([route]) => route)
    .sort();

  return {
    incoming,
    brokenInternalLinks,
    orphanCandidates,
    priceLinks,
  };
}

function analyzeLocalBusiness() {
  const files = [
    "app/(tr)/layout.js",
    "app/en/layout.js",
    "app/(tr)/(site)/iletisim/page.js",
  ];

  const findings = [];

  for (const relative of files) {
    const fullPath = path.join(rootDir, relative);
    if (!fs.existsSync(fullPath)) {
      findings.push({ file: relative, status: "missing file" });
      continue;
    }

    const text = readText(fullPath);
    const checks = [];
    if (relative.endsWith("layout.js")) {
      checks.push(["openingHoursSpecification", /openingHoursSpecification\s*:/.test(text)]);
      checks.push(["GeoCoordinates", /GeoCoordinates/.test(text)]);
      checks.push(["PostalAddress", /PostalAddress/.test(text)]);
      checks.push(["no aggregateRating", !/aggregateRating|review\s*:/.test(text)]);
    } else {
      checks.push(["Google Maps embed", /google\.com\/maps\/embed/.test(text)]);
      checks.push(["iframe title", /<iframe[\s\S]*\btitle=/.test(text)]);
    }

    findings.push({ file: relative, checks });
  }

  return findings;
}

function printSection(title) {
  console.log("");
  console.log(`== ${title} ==`);
}

function printList(items, formatter, emptyText = "OK") {
  if (!items.length) {
    console.log(emptyText);
    return;
  }

  items.forEach((item) => console.log(formatter(item)));
}

function main() {
  const allSourceFiles = walk(rootDir);
  const pageFiles = walk(APP_DIR).filter((filePath) => /[\\/]page\.(js|jsx)$/.test(filePath));
  const sitemapPaths = extractSitemapStaticPaths();
  const { pages, pageReports, fileToRoute } = analyzePages(pageFiles, sitemapPaths);
  const linkReport = analyzeLinks(allSourceFiles, pages, fileToRoute);
  const localBusinessReport = analyzeLocalBusiness();

  const pageIssues = pageReports
    .filter((page) => page.issues.length)
    .sort((a, b) => a.route.localeCompare(b.route));

  printSection("SEO Audit Summary");
  console.log(`pages=${pages.length}`);
  console.log(`page_issue_groups=${pageIssues.length}`);
  console.log(`broken_internal_links=${linkReport.brokenInternalLinks.length}`);
  console.log(`orphan_candidates=${linkReport.orphanCandidates.length}`);
  console.log(`price_page_link_occurrences=${linkReport.priceLinks.length}`);

  printSection("Page Issues");
  printList(
    pageIssues,
    (page) => `- ${page.route} (${page.relativeFile}): ${page.issues.join("; ")}`,
    "No page-level issues found."
  );

  printSection("Broken Internal Links");
  printList(
    linkReport.brokenInternalLinks.slice(0, 80),
    (item) => `- ${item.href} in ${item.file}:${item.line}`,
    "No broken internal links found."
  );
  if (linkReport.brokenInternalLinks.length > 80) {
    console.log(`...and ${linkReport.brokenInternalLinks.length - 80} more`);
  }

  printSection("Orphan Route Candidates");
  printList(
    linkReport.orphanCandidates,
    (route) => `- ${route}`,
    "No orphan route candidates found."
  );

  printSection("Price Page Link Occurrences");
  printList(
    linkReport.priceLinks,
    (item) => `- ${item.href} in ${item.file}:${item.line}`,
    "No direct price page links found."
  );

  printSection("LocalBusiness Consistency");
  for (const finding of localBusinessReport) {
    if (finding.status) {
      console.log(`- ${finding.file}: ${finding.status}`);
      continue;
    }

    const result = finding.checks
      .map(([label, ok]) => `${label}=${ok ? "ok" : "missing"}`)
      .join("; ");
    console.log(`- ${finding.file}: ${result}`);
  }

  printSection("Notes");
  console.log("- This audit is read-only and does not change pages.");
  console.log("- Metadata signals can be inherited from layouts; review warnings before editing.");
  console.log("- Use Search Console/Vercel logs for live 404 evidence before adding redirects.");
}

main();

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

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
  "/podyum-kurulum-fiyatlari",
]);

// Yerel çalışma kopyaları dağıtıma dahil değildir; bunları taramak aynı bağlantıları
// ikinci kez raporlayıp denetim sonucunu yanıltır.
const IGNORED_SOURCE_DIRECTORIES = new Set(["node_modules", ".next", ".git", ".claude"]);

const IGNORE_SITEMAP_MISSING = new Set([
  "/_not-found",
  "/search",
  "/tesekkurler",
]);

const IGNORE_ORPHAN_CANDIDATES = new Set([
  "/search",
  "/tesekkurler",
]);

// Dinamik sözlük rotası yalnızca Line Array için statik olarak üretilir.
// Kaynak dosya adı tek başına URL'yi göstermediğinden, bağlantı denetiminde
// build ile üretilen bu somut yolu ayrıca tanımlarız.
const EXPLICIT_STATIC_DYNAMIC_PAGES = [
  {
    route: "/sozluk/line-array",
    filePath: path.join(APP_DIR, "(tr)", "sozluk", "[slug]", "page.js"),
  },
];

const MEDIA_EXTENSION_PATTERN =
  /\.(avif|webp|png|jpe?g|svg|gif|ico|mp4|webm|mov|pdf|xlsx?|docx?)(?:$|[?#])/i;

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORED_SOURCE_DIRECTORIES.has(entry.name)) {
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
    /\b[a-zA-Z0-9_]*Href\b\s*=\s*[^;\n]*?["']([^"']+)["']/g,
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

function extractImplicitDataLinks() {
  const sources = [
    { relativeFile: "lib/blogPosts.js", prefix: "/blog/" },
    { relativeFile: "lib/data.js", prefix: "/projeler/" },
  ];
  const links = [];

  for (const source of sources) {
    const fullPath = path.join(rootDir, source.relativeFile);
    if (!fs.existsSync(fullPath)) continue;

    const text = readText(fullPath);
    for (const match of text.matchAll(/\bslug\s*:\s*["']([^"']+)["']/g)) {
      const href = cleanInternalPath(`${source.prefix}${match[1]}`);
      if (!href) continue;
      const line = lineNumberForIndex(text, match.index ?? 0);
      links.push({
        href,
        line,
        file: source.relativeFile,
        source: "data-driven listing",
      });
    }
  }

  return links;
}

function addIncomingRef(incoming, routeSet, link) {
  if (!routeSet.has(link.href)) return;
  incoming.get(link.href)?.push({ file: link.file, line: link.line, source: link.source });
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
  const staticPages = pageFiles
    .map((filePath) => ({ filePath, route: routeFromPageFile(filePath) }))
    .filter((item) => item.route);
  const pages = [...staticPages, ...EXPLICIT_STATIC_DYNAMIC_PAGES].filter((page) =>
    fs.existsSync(page.filePath)
  );

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

  for (const link of extractImplicitDataLinks()) {
    addIncomingRef(incoming, routeSet, link);
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

/**
 * Bir Next.js redirect `source` desenini eslestirici duzenli ifadeye cevirir.
 *
 * Desteklenen bicimler: "/sabit", "/:ad", "/:ad*", "/:ad(kendi-regexi)".
 * Amac tam bir path-to-regexp uyarlamasi degil; bu dosyadaki desenleri
 * dogru eslestirip yanlis alarm URETMEMEK. Cozemedigi bir desen gelirse
 * null doner ve o kural sessizce atlanir — hatali bir eslestirmeyle build'i
 * kirmaktansa o kurali denetlememek yeglenir.
 */
function redirectSourceToRegExp(source) {
  if (!source.startsWith("/")) return null;

  // Tanidigimiz yapilari (":ad", ":ad*", ":ad(...)") cikardiktan sonra geriye
  // desen sozdizimi kaliyorsa bu kurali anlamiyoruz demektir. Bunu kontrol
  // etmezsek asagidaki dongu o karakterleri KACIS'a cevirip duz metinmis gibi
  // eslestirir ve gercekte golgelenen bir adres icin "temiz" raporlar.
  const residue = source
    .replace(/:[A-Za-z0-9_]+\([^)]*\)[*+?]?/g, "")
    .replace(/:[A-Za-z0-9_]+[*+?]?/g, "");
  if (/[()*+?[\]{}|]/.test(residue)) return null;

  let out = "";
  let i = 0;

  while (i < source.length) {
    const char = source[i];

    if (char !== ":") {
      out += char.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      i += 1;
      continue;
    }

    // :ad
    const nameMatch = /^:([A-Za-z0-9_]+)/.exec(source.slice(i));
    if (!nameMatch) return null;
    i += nameMatch[0].length;

    // :ad(...) — kendi regexi
    let base;
    let hadOwnRegex = false;
    if (source[i] === "(") {
      let depth = 0;
      const start = i;
      while (i < source.length) {
        if (source[i] === "(") depth += 1;
        else if (source[i] === ")") {
          depth -= 1;
          if (depth === 0) {
            i += 1;
            break;
          }
        }
        i += 1;
      }
      if (depth !== 0) return null;
      base = `(?:${source.slice(start + 1, i - 1)})`;
      hadOwnRegex = true;
    } else {
      base = "[^/]+";
    }

    // :ad* / :ad+ / :ad?  — niceleyiciyi tabana YAPISTIRMA; "[^/]+" + "*"
    // gecersiz bir ic ice niceleyici uretir ve kural sessizce denetlenemez olur.
    // Adlandirilmis parametre yildizliysa Next'te birden cok segmenti (egik
    // cizgi dahil) yakalar, bu yuzden tabani ".*" ile degistiriyoruz.
    const quantifier = "*+?".includes(source[i]) ? source[i] : "";
    if (quantifier) i += 1;

    if (!quantifier) {
      out += base;
    } else if (quantifier === "?") {
      out += `(?:${base})?`;
    } else if (hadOwnRegex) {
      out += `(?:${base})${quantifier}`;
    } else {
      out += quantifier === "*" ? ".*" : ".+";
    }
  }

  try {
    return new RegExp(`^${out}$`);
  } catch {
    return null;
  }
}

/**
 * Yonlendirme ile sitemap/sayfa cakismasi.
 *
 * Next dokumanindaki kural: "Redirects are checked before the filesystem."
 * Yani bir yolun redirect `source`'u varsa o yoldaki sayfaya ASLA ulasilamaz.
 * Sayfa yine de build'e girer, prerender edilir ve HTML denetiminden gecer;
 * hicbir sey kirilmaz. Tek belirti canli istekte 301 gormek ya da GSC'nin
 * "Sitemap'te gonderilen URL yonlendirme iceriyor" demesidir.
 *
 * 16 Agustos 2026'da /dome-cadir-kiralama tam olarak boyle iki gun boyunca
 * erisilemez kaldi: sayfa Mayis'ta /cadir-kiralama'ya katlanilmisti, Agustos'ta
 * yeniden acilip sitemap'e eklendi ama eski 301 silinmemisti.
 */
async function auditRedirectConflicts(sitemapPaths) {
  const configPath = path.join(rootDir, "next.config.mjs");
  if (!fs.existsSync(configPath)) {
    return { skipped: "next.config.mjs bulunamadi", conflicts: [], unchecked: [] };
  }

  let redirects;
  try {
    const mod = await import(pathToFileURL(configPath).href);
    redirects = await mod.default.redirects();
  } catch (error) {
    return {
      skipped: `next.config.mjs okunamadi: ${error.message}`,
      conflicts: [],
      unchecked: [],
    };
  }

  const routes = [...sitemapPaths];
  const conflicts = [];
  const unchecked = [];

  // Duz karsilastirmanin yetmedigi kurallar. ":" adlandirilmis parametredir;
  // "*" ve "(" desen sozdizimidir. Bunlar varken source bir sablondur, tek bir
  // adres degil — Set.has() ile bakmak yaniltici bir "temiz" sonucu verir.
  const isPattern = (source) => /[:*(]/.test(source);

  for (const rule of redirects) {
    const source = rule?.source;
    if (typeof source !== "string") {
      unchecked.push({ source: String(source), why: "source bir metin degil" });
      continue;
    }

    if (!isPattern(source)) {
      if (sitemapPaths.has(source)) {
        conflicts.push({
          source,
          destination: rule.destination,
          reason: "sitemap'te bu adres yayinlaniyor",
        });
      }
      continue;
    }

    const matcher = redirectSourceToRegExp(source);
    if (!matcher) {
      unchecked.push({ source, why: "desen eslestirici duzenli ifadeye cevrilemedi" });
      continue;
    }

    const matched = routes.filter((route) => matcher.test(route));
    if (matched.length) {
      conflicts.push({
        source,
        destination: rule.destination,
        reason: `sitemap'teki ${matched.length} adresi kapsiyor: ${matched.slice(0, 3).join(", ")}`,
      });
    }
  }

  return { skipped: null, conflicts, unchecked };
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

async function main() {
  const allSourceFiles = walk(rootDir);
  const pageFiles = walk(APP_DIR).filter((filePath) => /[\\/]page\.(js|jsx)$/.test(filePath));
  const sitemapPaths = extractSitemapStaticPaths();
  const redirectReport = await auditRedirectConflicts(sitemapPaths);
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

  printSection("Redirect / Sitemap Conflicts");
  if (redirectReport.skipped) {
    console.log(`- Skipped: ${redirectReport.skipped}`);
  } else {
    if (!redirectReport.conflicts.length) {
      console.log("No redirect shadows a sitemap URL.");
    } else {
      for (const conflict of redirectReport.conflicts) {
        console.log(`- HATA ${conflict.source} -> ${conflict.destination}`);
        console.log(`        ${conflict.reason}`);
      }
      console.log("");
      console.log("  Yonlendirmeler dosya sisteminden ONCE calisir; bu adreslerdeki");
      console.log("  sayfalara ulasilamaz ama sitemap onlari Google'a bildiriyor.");
      console.log("  Ya next.config.mjs'teki kurali ya da sitemap kaydini kaldirin.");
    }

    // Cevrilemeyen desenler denetimin KOR NOKTASI. Sessizce atlanirsa yukaridaki
    // "No redirect shadows a sitemap URL" satiri oldugundan guvenli gorunur.
    // Build'i kirmaz — kural bozuk demek degil, denetleyemedik demek.
    if (redirectReport.unchecked.length) {
      console.log("");
      for (const item of redirectReport.unchecked) {
        console.log(`- UYARI bu redirect deseni denetlenemedi: ${item.source}`);
        console.log(`        ${item.why}`);
      }
      console.log("");
      console.log("  Bu kurallarin sitemap'i golgeleyip golgelemedigi BILINMIYOR.");
      console.log("  Elle kontrol edin ya da redirectSourceToRegExp'i genisletin.");
    }
  }

  printSection("Notes");
  console.log("- This audit is read-only and does not change pages.");
  console.log("- Metadata signals can be inherited from layouts; review warnings before editing.");
  console.log("- Use Search Console/Vercel logs for live 404 evidence before adding redirects.");

  // Bu denetimin tek KIRAN kontrolu. Digerleri uyari niteliginde oldugu icin
  // cikis kodunu etkilemez; yonlendirme/sitemap cakismasi ise her zaman hatadir
  // ve baska hicbir asama yakalamaz (build yesil kalir, HTML denetimi temiz gecer).
  if (redirectReport.conflicts.length) {
    console.log("");
    console.log(`[seo-audit] ${redirectReport.conflicts.length} yonlendirme/sitemap cakismasi.`);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

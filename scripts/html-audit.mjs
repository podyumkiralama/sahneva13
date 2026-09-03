#!/usr/bin/env node
/**
 * Rendered-HTML quality gate.
 *
 * scripts/seo-audit.mjs denetimi kaynak dosyalar uzerinde yapar; bu script ise
 * `next build` ciktisindaki prerender edilmis HTML'i okur. Boylece layout
 * sablonlari, metadata birlesmesi ve bilesen davranisi sonrasi *gercekten*
 * yayina cikan isaretleme dogrulanir.
 *
 * Bu script `npm run build` boru hattinin SON adimidir:
 *
 *     seo:audit  ->  build:next (next build)  ->  seo:html
 *
 * Vercel varsayilan olarak `npm run build` calistirdigi icin ucu de deploy
 * sirasinda otomatik calisir; biri kirilirsa deploy basarisiz olur. Denetimi
 * atlayip yalnizca derlemek icin `npm run build:next` kullanin.
 *
 * DIKKAT: bu script `next build`'i ASLA cagirmamalidir. Build onu cagiriyor;
 * tersi de olursa sonsuz dongu olusur. Build ciktisi yoksa hata verip cikar,
 * kendisi build almaya calismaz.
 *
 * Tek basina calistirmak icin once bir build ciktisi gerekir:
 *     npm run build:next && npm run seo:html
 *
 * ERROR bulgusunda cikis kodu 1 doner (deploy'u kirar), WARN bulgusu
 * yalnizca raporlanir.
 */

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import path from "node:path";

import {
  PAGE_GROUPS,
  LOCALES as EQUIV_LOCALES,
  HREFLANG_CODE as EQUIV_HREFLANG,
} from "../lib/i18n/pageEquivalents.js";

const BUILD_DIR = path.resolve(process.cwd(), ".next/server/app");

// Esdegerlik tablosu goreli yollar tutar; HTML mutlak adres basar. Sondaki
// egik cizgi hreflangIndex'te de kirpildigi icin burada da kirpiliyor.
const SITE_ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  "https://www.sahneva.com"
).replace(/\/$/, "");

/* -------------------- esikler -------------------- */
const TITLE_MAX = 62;
const TITLE_MIN = 25;
const DESCRIPTION_MAX = 165;
const DESCRIPTION_MIN = 70;
const BRAND = "Sahneva";

// Google'in olcekli icerik ve doorway spam politikalarina karsi yuksek esikli
// bir build korumasi. Ayni dildeki indekslenebilir sayfalarin ana icerigi
// bes kelimelik dizilerle karsilastirilir; ortak header/footer bu sayede sonucu
// sisirmez. Esik bilincli olarak yuksek: benzer hizmet terminolojisi degil,
// gercek yakin-kopya sayfalar hedeflenir.
const DUPLICATE_CONTENT_MIN_WORDS = 250;
const DUPLICATE_CONTENT_SHINGLE_SIZE = 5;
const DUPLICATE_CONTENT_ERROR_THRESHOLD = 0.65;

// Baslik/aciklama uzunluk kontrolunden muaf rotalar. Latin disi alfabelerde
// karakter sayisi SERP genisligiyle ortusmedigi icin zh/ar/ru bilincli disarida.
const LENGTH_EXEMPT = /^\/(zh|ar|ru)(\/|$)/;

// Next.js'in kendi ic rotalari; SEO yuzeyi degil.
const INTERNAL_ROUTES = new Set(["/_global-error", "/_not-found"]);

// Bu rotalar perakende urun satmaz; ekipman kiralama, nakliye, kurulum ve
// sokumu tek saha hizmeti olarak sunar. Product veya Merchant'a ozgu kargo/iade
// sinyalleri Google Merchant tarafinda sahte bir fiziksel urun kaydi acabilir.
const RENTAL_SERVICE_ROUTES = new Set([
  "/sahne-kiralama",
  "/masa-sandalye-kiralama",
  "/ses-isik-sistemleri",
  "/sisme-oyun-parki-kiralama",
  "/en/stage-rental",
]);
const RENTAL_REQUIRED_SCHEMA_TYPES = new Set(["Service", "OfferCatalog", "Offer"]);
const RENTAL_FORBIDDEN_SCHEMA_TYPES = new Set([
  "Product",
  "AggregateOffer",
  "MerchantReturnPolicy",
  "OfferShippingDetails",
]);
const RENTAL_FORBIDDEN_SCHEMA_PROPS = new Set([
  "availability",
  "hasMerchantReturnPolicy",
  "shippingDetails",
]);

const PUBLIC_DIR = path.resolve(process.cwd(), "public");

/* -------------------- yapisal veri kurallari --------------------
 * Bu projede tekrarlayan hata deseni: CreativeWork'e ozgu ozellikler
 * Intangible ailesindeki turlere yaziliyor. Ahrefs bunu "Structured data has
 * schema.org validation error" olarak raporluyor ama haftalar sonra; asagidaki
 * kurallar ayni hatayi build aninda yakalar.
 *
 * Liste bilincli olarak dar tutuldu: yalnizca dogrulanmis (tur, ozellik)
 * ciftleri var. Emin olunmayan hicbir sey eklenmemeli - yanlis alarm veren bir
 * kalite kapisi kapatilir, ise yaramaz.
 */
const INTANGIBLE_TYPES = new Set([
  "DefinedTerm", "OfferCatalog", "ItemList", "ListItem", "BreadcrumbList",
  "Service", "Offer", "Demand", "AggregateOffer", "Brand", "Audience",
  "ContactPoint", "PropertyValue", "MerchantReturnPolicy", "EntryPoint",
  "OpeningHoursSpecification", "PriceSpecification", "UnitPriceSpecification",
  "MonetaryAmount", "GeoCoordinates", "PostalAddress", "Language",
]);

// CreativeWork alt turlerine ozgu ozellikler.
const CREATIVEWORK_ONLY_PROPS = new Set([
  "inLanguage", "hasPart", "workExample", "headline", "articleBody",
  "datePublished", "dateModified", "wordCount", "thumbnailUrl",
]);

// Ozellik -> yazilabilecegi turler (alt turler dahil edilerek yazildi).
const PROPERTY_DOMAINS = {
  isRelatedTo: ["Product", "Service"],
  isSimilarTo: ["Product", "Service"],
  telephone: [
    "Organization", "LocalBusiness", "GovernmentOrganization", "Place",
    "ContactPoint", "Person", "PostalAddress",
  ],
};

// Ozellik -> referans verdigi dugumun tasimasi gereken tur kisiti.
// Deger `@id` ile verildiginde ayni dokumandaki dugum cozulerek kontrol edilir.
const REFERENCE_RANGES = {
  offers: { allow: (types) => types.some((t) => ["Offer", "Demand", "AggregateOffer"].includes(t)), label: "Offer/Demand" },
  potentialAction: { allow: (types) => types.some((t) => t.endsWith("Action")), label: "Action" },
  hasPart: { allow: (types) => !types.some((t) => INTANGIBLE_TYPES.has(t)), label: "CreativeWork" },
  workExample: { allow: (types) => !types.some((t) => INTANGIBLE_TYPES.has(t)), label: "CreativeWork" },
};

/* -------------------- yardimcilar -------------------- */
const walk = (dir, out = []) => {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (entry.endsWith(".html")) out.push(full);
  }
  return out;
};

const toRoute = (file) => {
  const rel = path.relative(BUILD_DIR, file).split(path.sep).join("/");
  const withoutExt = rel.replace(/\.html$/, "");
  // Route group klasorleri "(tr)" URL'de yer almaz.
  const cleaned = withoutExt
    .split("/")
    .filter((segment) => !/^\(.+\)$/.test(segment))
    .join("/");
  if (cleaned === "index" || cleaned === "") return "/";
  return `/${cleaned}`;
};

// HTML entity'leri gorunur uzunluga cevirir; "&amp;" tek karakter sayilmali.
const decodeEntities = (value) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&nbsp;/g, " ");

const first = (html, regex) => (html.match(regex) || [])[1] || "";

// Ayni JSON-LD @id'si bir sayfada birden fazla kez tanimlanabilir; salt
// { "@id": "..." } referanslari sorun degildir. Ancak iki tam tanim ayni
// kimlik alanina farkli tekil degerler verirse JSON-LD islemcisi bunlari tek
// dugumde birlestirir ve varlik kimligi belirsizlesir. Dizileri (dogal olarak
// cok degerli olabilir) ve yalniz @id tasiyan referanslari bilincli olarak
// karsilastirmiyoruz.
const comparableJsonLdValue = (property, value) => {
  if (value == null || Array.isArray(value)) return null;

  let comparable = value;
  if (typeof value === "object") {
    comparable = value["@id"] ?? value.url ?? value.contentUrl ?? value.name;
  }

  if (!["string", "number", "boolean"].includes(typeof comparable)) return null;

  let normalized = String(comparable).trim();
  if (property === "telephone") normalized = normalized.replace(/[^+\d]/g, "");
  if (/^https?:\/\//i.test(normalized)) normalized = normalized.replace(/\/$/, "");
  return normalized;
};

const internalPathFromHref = (href) => {
  const decoded = decodeEntities(href).trim();
  if (!decoded || decoded.includes("#") || decoded.includes("?")) return null;

  try {
    const url = new URL(decoded, SITE_ORIGIN);
    const site = new URL(SITE_ORIGIN);
    const normalizeHost = (host) => host.replace(/^www\./, "");
    if (normalizeHost(url.hostname) !== normalizeHost(site.hostname)) return null;
    return url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : "/";
  } catch {
    return null;
  }
};

const localeGroupForRoute = (route) => {
  const match = route.match(/^\/(en|de|ar|ru|zh)(?:\/|$)/);
  return match?.[1] ?? "tr";
};

const expectedOgLocaleForRoute = (route) => {
  const locale = localeGroupForRoute(route);
  if (locale === "tr") return "tr_TR";
  if (locale === "en") return "en_US";
  return null;
};

const visibleMainTokens = (html) => {
  const main = first(html, /<main\b[^>]*>([\s\S]*?)<\/main>/i) || html;
  const visibleText = decodeEntities(
    main
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<svg\b[\s\S]*?<\/svg>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  ).toLowerCase();

  return visibleText.match(/[\p{L}\p{N}]{3,}/gu) ?? [];
};

const wordShingles = (tokens) => {
  const shingles = new Set();
  for (let index = 0; index <= tokens.length - DUPLICATE_CONTENT_SHINGLE_SIZE; index += 1) {
    shingles.add(
      tokens.slice(index, index + DUPLICATE_CONTENT_SHINGLE_SIZE).join(" "),
    );
  }
  return shingles;
};

const jaccardSimilarity = (left, right) => {
  let intersection = 0;
  for (const value of left) {
    if (right.has(value)) intersection += 1;
  }
  return intersection / (left.size + right.size - intersection || 1);
};

/* -------------------- bulgu toplama -------------------- */
const errors = [];
const warnings = [];
const addError = (route, rule, detail) => errors.push({ route, rule, detail });
const addWarning = (route, rule, detail) => warnings.push({ route, rule, detail });

if (!existsSync(BUILD_DIR)) {
  console.error(
    `[html-audit] Build ciktisi bulunamadi: ${BUILD_DIR}\n` +
      `Once "npm run build:next" calistirin (ham derleme). "npm run build"\n` +
      `zaten bu denetimi kendisi cagirdigi icin buradan onu onermiyoruz.`,
  );
  process.exit(1);
}

const files = walk(BUILD_DIR);
const titleIndex = new Map();
const descriptionIndex = new Map();
const jsonLdTypes = new Map();
// Capraz kontroller icin toplananlar: sitemap kapsami, orphan sayfa, kirik gorsel.
const indexableRoutes = new Set();
const linkedRoutes = new Set();
const imageRefs = new Map(); // public yolu -> [bulundugu rotalar]
const contentFingerprints = [];
// canonical -> { route, langs: Map(hreflang -> href) }
const hreflangIndex = new Map();
let auditedCount = 0;

for (const file of files) {
  const route = toRoute(file);
  if (INTERNAL_ROUTES.has(route)) continue;

  const html = readFileSync(file, "utf8");
  auditedCount += 1;

  const title = decodeEntities(first(html, /<title>([\s\S]*?)<\/title>/i));
  const description = decodeEntities(
    first(html, /<meta name="description" content="([\s\S]*?)"/i),
  );
  const canonical = first(html, /<link rel="canonical" href="([^"]*)"/i);
  const robots = first(html, /<meta name="robots" content="([^"]*)"/i);

  /* ---- hreflang toplama (karsilikli kontrol asagida) ---- */
  const alternateLangs = new Map();
  for (const m of html.matchAll(
    /<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/gi,
  )) {
    alternateLangs.set(m[1], m[2].replace(/\/$/, ""));
  }
  if (canonical && alternateLangs.size) {
    hreflangIndex.set(canonical.replace(/\/$/, ""), {
      route,
      langs: alternateLangs,
    });
  }

  const indexable = !/noindex/i.test(robots);
  if (indexable) {
    indexableRoutes.add(route);
    const tokens = visibleMainTokens(html);
    if (tokens.length >= DUPLICATE_CONTENT_MIN_WORDS) {
      contentFingerprints.push({
        route,
        locale: localeGroupForRoute(route),
        wordCount: tokens.length,
        shingles: wordShingles(tokens),
      });
    }
  }

  /* ---- og:url <-> canonical ---- */
  // Kendi openGraph'i olmayan sayfa kok layout'un anasayfa etiketlerini
  // devraliyor; og:url canonical yerine anasayfayi gosteriyor.
  const ogUrl = first(html, /<meta property="og:url" content="([^"]*)"/i);
  if (indexable && ogUrl && canonical) {
    const norm = (u) => u.replace(/\/$/, "");
    if (norm(ogUrl) !== norm(canonical)) {
      addError(route, "og-url-canonical-mismatch", `og:url=${ogUrl} canonical=${canonical}`);
    }
  }

  /* ---- TR/EN Open Graph locale ---- */
  const expectedOgLocale = expectedOgLocaleForRoute(route);
  const ogLocale = first(html, /<meta property="og:locale" content="([^"]*)"/i);
  if (indexable && expectedOgLocale && ogLocale !== expectedOgLocale) {
    addError(
      route,
      "og-locale-mismatch",
      `og:locale=${ogLocale || "missing"} expected=${expectedOgLocale}`,
    );
  }

  /* ---- ic link ve gorsel referanslari (capraz kontroller icin) ---- */
  // Baglantilar hem SSR HTML'deki href niteliklerinde hem RSC payload'indaki href
  // alanlarinda gecebiliyor; ikisi de sayilmazsa orphan kontrolu yanlis alarm veriyor.
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    linkedRoutes.add(m[1].length > 1 ? m[1].replace(/\/$/, "") : "/");
  }
  for (const m of html.matchAll(/\\"href\\":\\"(\/[^"\\#?]*)/g)) {
    linkedRoutes.add(m[1].length > 1 ? m[1].replace(/\/$/, "") : "/");
  }
  // Ayirici olarak `&` yetmiyor: RSC payload'inda srcset icindeki `&`
  // `\u0026` olarak kacisliyor, bu yuzden ters bolu ve bosluk da sinir sayilir.
  for (const m of html.matchAll(/\/_next\/image\?url=([^"&\\\s,]+)/g)) {
    let decoded;
    try {
      decoded = decodeURIComponent(m[1]);
    } catch {
      continue; // yarim kalmis kacis dizisi
    }
    if (decoded.startsWith("/") && !decoded.startsWith("//")) {
      imageRefs.set(decoded, [...(imageRefs.get(decoded) || []), route]);
    }
  }

  // Uzunluk esikleri SERP genisligine gore; noindex sayfalarin SERP yuzeyi yok.
  // Latin disi alfabelerde de karakter sayisi piksel genisligiyle ortusmuyor.
  const skipLength = LENGTH_EXEMPT.test(route) || !indexable;

  /* ---- title ---- */
  if (!title) {
    addError(route, "title-missing", "sayfada <title> yok");
  } else {
    const brandHits = (title.match(new RegExp(BRAND, "g")) || []).length;
    if (brandHits > 1) {
      addError(
        route,
        "title-brand-repeated",
        `marka ${brandHits} kez geciyor (layout sablonu zaten ekliyor): "${title}"`,
      );
    }
    if (!skipLength && title.length > TITLE_MAX) {
      addWarning(route, "title-too-long", `${title.length} karakter: "${title}"`);
    }
    if (!skipLength && title.length < TITLE_MIN) {
      addWarning(route, "title-too-short", `${title.length} karakter: "${title}"`);
    }
    if (indexable) {
      titleIndex.set(title, [...(titleIndex.get(title) || []), route]);
    }
  }

  /* ---- description ---- */
  if (!description) {
    addError(route, "description-missing", "meta description yok");
  } else {
    if (!skipLength && description.length > DESCRIPTION_MAX) {
      addWarning(route, "description-too-long", `${description.length} karakter`);
    }
    if (!skipLength && description.length < DESCRIPTION_MIN) {
      addWarning(route, "description-too-short", `${description.length} karakter`);
    }
    if (indexable) {
      descriptionIndex.set(description, [
        ...(descriptionIndex.get(description) || []),
        route,
      ]);
    }
  }

  /* ---- canonical ---- */
  if (!canonical) addError(route, "canonical-missing", "rel=canonical yok");

  /* ---- baslik hiyerarsisi ---- */
  const headings = [
    ...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi),
  ].map((m) => Number(m[1]));
  const h1Count = headings.filter((level) => level === 1).length;
  if (h1Count === 0) addError(route, "h1-missing", "sayfada h1 yok");
  if (h1Count > 1) addError(route, "h1-multiple", `${h1Count} adet h1`);

  let previous = 0;
  const skips = [];
  for (const level of headings) {
    if (previous && level > previous + 1) skips.push(`h${previous}->h${level}`);
    previous = level;
  }
  if (skips.length) {
    addError(route, "heading-skip", `seviye atlamasi: ${[...new Set(skips)].join(", ")}`);
  }

  /* ---- erisilebilirlik ---- */
  const images = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const withoutAlt = images.filter((tag) => !/\salt=/i.test(tag)).length;
  if (withoutAlt) addError(route, "img-alt-missing", `${withoutAlt}/${images.length} img`);

  const iframes = [...html.matchAll(/<iframe\b[^>]*>/gi)].map((m) => m[0]);
  const iframeNoTitle = iframes.filter((tag) => !/\stitle=/i.test(tag)).length;
  if (iframeNoTitle) addError(route, "iframe-title-missing", `${iframeNoTitle} iframe`);

  const anchors = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)];
  const namelessAnchors = anchors.filter(([, attrs, inner]) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    return !text && !/aria-label=|aria-labelledby=|title=/i.test(attrs);
  }).length;
  if (namelessAnchors) {
    addError(route, "link-name-missing", `${namelessAnchors} baglantida erisilebilir ad yok`);
  }

  const unsafeBlank = anchors.filter(
    ([, attrs]) => /target="_blank"/i.test(attrs) && !/rel="[^"]*noopener/i.test(attrs),
  ).length;
  if (unsafeBlank) {
    addError(route, "target-blank-unsafe", `${unsafeBlank} baglantida rel=noopener yok`);
  }

  // Header ve footer'daki global gezinme baglantilari bu kontrolden ayridir.
  // Ana icerikte canonical rotaya tekrar giden bir link kullaniciya yeni bir
  // hedef sunmaz ve gereksiz prefetch/navigation uretir. Fragment ve sorgu
  // baglantilari ise sayfa ici gezinme veya arac durumu tasiyabildigi icin korunur.
  const main = first(html, /<main\b[^>]*>([\s\S]*?)<\/main>/i) || html;
  const selfLinks = [...main.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>/gi)]
    .map((match) => internalPathFromHref(match[1]))
    .filter((href) => href === route);
  if (selfLinks.length) {
    addError(route, "self-link", `ana icerikte canonical rotaya ${selfLinks.length} link`);
  }

  const namelessButtons = [
    ...html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi),
  ].filter(([, attrs, inner]) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    return !text && !/aria-label=|aria-labelledby=/i.test(attrs);
  }).length;
  if (namelessButtons) {
    addError(route, "button-name-missing", `${namelessButtons} butonda erisilebilir ad yok`);
  }

  /* ---- yapisal veri ---- */
  const ldBlocks = [
    ...html.matchAll(
      /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ].map((m) => m[1]);

  if (indexable && ldBlocks.length === 0) {
    addWarning(route, "jsonld-missing", "indekslenebilir sayfada JSON-LD yok");
  }

  const routeSchemaTypes = new Set();
  const routeSchemaProps = new Set();
  const routeSchemaPayloads = [];
  const routeIdDefinitions = new Map();

  for (const block of ldBlocks) {
    let parsed;
    try {
      parsed = JSON.parse(block);
    } catch (error) {
      addError(route, "jsonld-invalid", `JSON parse hatasi: ${error.message}`);
      continue;
    }
    routeSchemaPayloads.push(parsed);

    const collectRentalSignals = (node) => {
      if (Array.isArray(node)) return node.forEach(collectRentalSignals);
      if (!node || typeof node !== "object") return;
      for (const type of [].concat(node["@type"] ?? [])) {
        if (typeof type === "string") routeSchemaTypes.add(type);
      }
      // @id-only referanslarin @type'i yoktur ve bu indekse girmez.
      if (node["@id"] && node["@type"]) {
        routeIdDefinitions.set(node["@id"], [
          ...(routeIdDefinitions.get(node["@id"]) || []),
          node,
        ]);
      }
      for (const prop of Object.keys(node)) {
        if (!prop.startsWith("@")) routeSchemaProps.add(prop);
      }
      Object.values(node).forEach((value) => {
        if (value && typeof value === "object") collectRentalSignals(value);
      });
    };
    collectRentalSignals(parsed);

    const collect = (node) => {
      if (Array.isArray(node)) return node.forEach(collect);
      if (!node || typeof node !== "object") return;
      for (const type of [].concat(node["@type"] ?? [])) {
        jsonLdTypes.set(type, (jsonLdTypes.get(type) || 0) + 1);
      }
      if (node["@graph"]) collect(node["@graph"]);
    };
    collect(parsed);

    /* ---- tur/ozellik uyumu ---- */
    // Once @id -> tur haritasi: referansla verilen dugumlerin araligi ancak
    // ayni dokumandaki hedef cozulerek denetlenebilir.
    const idTypes = new Map();
    const indexIds = (node) => {
      if (Array.isArray(node)) return node.forEach(indexIds);
      if (!node || typeof node !== "object") return;
      if (node["@id"] && node["@type"]) idTypes.set(node["@id"], [].concat(node["@type"]));
      Object.values(node).forEach((v) => { if (v && typeof v === "object") indexIds(v); });
    };
    indexIds(parsed);

    const typesOfValue = (value) => {
      if (!value || typeof value !== "object") return null;
      if (Array.isArray(value)) return null;
      if (value["@type"]) return [].concat(value["@type"]);
      if (value["@id"]) return idTypes.get(value["@id"]) ?? null;
      return null;
    };

    const validate = (node) => {
      if (Array.isArray(node)) return node.forEach(validate);
      if (!node || typeof node !== "object") return;
      const types = [].concat(node["@type"] ?? []).filter((t) => typeof t === "string");

      for (const prop of Object.keys(node)) {
        if (prop.startsWith("@")) continue;

        // 1) CreativeWork'e ozgu ozellik, Intangible turde
        if (CREATIVEWORK_ONLY_PROPS.has(prop) && types.some((t) => INTANGIBLE_TYPES.has(t))) {
          addError(route, "jsonld-invalid-property", `${types.join("/")}.${prop} (CreativeWork ozelligi)`);
        }

        // 2) Ozelligin yazilabilecegi turler sabit
        const domains = PROPERTY_DOMAINS[prop];
        if (domains && types.length && !types.some((t) => domains.includes(t))) {
          addError(route, "jsonld-invalid-property", `${types.join("/")}.${prop} (yalnizca ${domains.join("/")})`);
        }

        // 3) Referans verilen dugumun turu araliga uymali
        const range = REFERENCE_RANGES[prop];
        if (range) {
          for (const value of [].concat(node[prop])) {
            const targetTypes = typesOfValue(value);
            if (targetTypes && !range.allow(targetTypes)) {
              addError(
                route,
                "jsonld-invalid-range",
                `${types.join("/") || "?"}.${prop} -> ${targetTypes.join("/")} (beklenen: ${range.label})`,
              );
            }
          }
        }
      }

      Object.values(node).forEach((v) => { if (v && typeof v === "object") validate(v); });
    };
    validate(parsed);

    // Sablon sizintisi: derlenmemis placeholder yayina cikmamali.
    if (/\{\{|\$\{/.test(block)) {
      addError(route, "jsonld-placeholder", "JSON-LD icinde derlenmemis sablon ifadesi var");
    }
  }

  for (const [id, definitions] of routeIdDefinitions) {
    if (definitions.length < 2) continue;

    const conflicts = [];
    const properties = new Set(
      definitions.flatMap((definition) =>
        Object.keys(definition).filter((property) => !property.startsWith("@")),
      ),
    );

    for (const property of properties) {
      const values = new Set(
        definitions
          .map((definition) => comparableJsonLdValue(property, definition[property]))
          .filter((value) => value !== null),
      );
      if (values.size < 2) continue;

      const printable = [...values]
        .map((value) => (value.length > 80 ? `${value.slice(0, 77)}...` : value))
        .join(" <> ");
      conflicts.push(`${property}=${printable}`);
    }

    if (conflicts.length) {
      addError(route, "jsonld-id-conflict", `${id}: ${conflicts.join("; ")}`);
    }
  }

  if (RENTAL_SERVICE_ROUTES.has(route)) {
    for (const type of RENTAL_REQUIRED_SCHEMA_TYPES) {
      if (!routeSchemaTypes.has(type)) {
        addError(route, "rental-service-schema-missing", `${type} semasi bulunamadi`);
      }
    }
    for (const type of RENTAL_FORBIDDEN_SCHEMA_TYPES) {
      if (routeSchemaTypes.has(type)) {
        addError(route, "rental-merchant-schema", `${type} kiralama hizmetinde kullanilamaz`);
      }
    }
    for (const prop of RENTAL_FORBIDDEN_SCHEMA_PROPS) {
      if (routeSchemaProps.has(prop)) {
        addError(route, "rental-merchant-property", `${prop} kiralama hizmetinde kullanilamaz`);
      }
    }

    if (
      route === "/en/stage-rental" &&
      JSON.stringify(routeSchemaPayloads).includes(`${SITE_ORIGIN}/sahne-kiralama`)
    ) {
      addError(
        route,
        "rental-locale-leak",
        "Ingilizce sahne semasina Turkce /sahne-kiralama kimligi siziyor",
      );
    }
  }
}

/* ---- yinelenen title / description ---- */
for (const [title, routes] of titleIndex) {
  if (routes.length > 1) {
    addError(routes[0], "title-duplicate", `"${title}" -> ${routes.join(", ")}`);
  }
}
for (const [description, routes] of descriptionIndex) {
  if (routes.length > 1) {
    addError(
      routes[0],
      "description-duplicate",
      `"${description.slice(0, 60)}..." -> ${routes.join(", ")}`,
    );
  }
}

/* ---- yakin-kopya / doorway icerik korumasi ---- */
let strongestContentPair = null;
for (let leftIndex = 0; leftIndex < contentFingerprints.length; leftIndex += 1) {
  for (let rightIndex = leftIndex + 1; rightIndex < contentFingerprints.length; rightIndex += 1) {
    const left = contentFingerprints[leftIndex];
    const right = contentFingerprints[rightIndex];
    if (left.locale !== right.locale) continue;

    const similarity = jaccardSimilarity(left.shingles, right.shingles);
    if (!strongestContentPair || similarity > strongestContentPair.similarity) {
      strongestContentPair = { left, right, similarity };
    }

    if (similarity >= DUPLICATE_CONTENT_ERROR_THRESHOLD) {
      addError(
        left.route,
        "content-near-duplicate",
        `${(similarity * 100).toFixed(1)}% bes-kelimelik ortusme -> ${right.route} ` +
          `(${left.wordCount}/${right.wordCount} kelime)`,
      );
    }
  }
}

/* -------------------- sitemap kapsami -------------------- */
// Indekslenebilir her sayfa bir sitemap'te bulunmali. Bu kontrol olmadigi icin
// /defile-podyum-kiralama, locale filtresindeki `startsWith("/de")` yuzunden
// sessizce hicbir sitemap'e girmemisti.
const sitemapRoutes = new Set();
for (const file of readdirSync(BUILD_DIR)) {
  if (!/^sitemap.*\.xml\.body$/.test(file)) continue;
  const xml = readFileSync(path.join(BUILD_DIR, file), "utf8");
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    try {
      const { pathname } = new URL(m[1]);
      sitemapRoutes.add(pathname.length > 1 ? pathname.replace(/\/$/, "") : "/");
    } catch {
      /* sitemap index icindeki gecersiz loc'lar yoksayilir */
    }
  }
}
if (sitemapRoutes.size === 0) {
  addWarning("/", "sitemap-not-built", "build ciktisinda sitemap gövdesi bulunamadi");
} else {
  for (const route of indexableRoutes) {
    if (!sitemapRoutes.has(route)) {
      addError(route, "sitemap-missing", "indekslenebilir sayfa hicbir sitemap'te yok");
    }
  }
}

/* -------------------- orphan sayfa -------------------- */
// Hicbir sayfadan link almayan indekslenebilir sayfa. Yalnizca SSR HTML'deki
// baglantilar sayilir; client tarafinda uretilen linkler gorunmez, bu yuzden
// bulgu WARN seviyesinde tutuldu.
for (const route of indexableRoutes) {
  if (route === "/") continue;
  if (!linkedRoutes.has(route)) {
    addWarning(route, "orphan-page", "hicbir sayfadan ic link almiyor");
  }
}

/* -------------------- kirik gorsel referansi -------------------- */
// Kart gorselleri slug'dan uretildiginde dosyasi olmayan sehir icin next/image
// 400 donuyordu. Referans verilen her yerel gorsel public/ altinda olmali.
if (existsSync(PUBLIC_DIR)) {
  for (const [src, routes] of imageRefs) {
    if (existsSync(path.join(PUBLIC_DIR, src.replace(/^\//, "")))) continue;
    addError(routes[0], "image-missing", `${src} (public/ altinda yok, ${routes.length} sayfada)`);
  }
}

/* -------------------- hreflang <-> esdegerlik tablosu -------------------- */
// Tek kaynak korumasi: hreflang'i artik lib/i18n/pageEquivalents.js uretiyor.
// Bir sayfa tabloda tanimliysa yayina cikan etiketleri tablonun `translations`
// listesiyle BIREBIR ayni olmalidir. Ayrisma iki yonlu da hatadir:
//   - tabloda olup HTML'de yoksa: sayfa ortak sistemden kopmus (elle alternates)
//   - HTML'de olup tabloda yoksa: tablonun bilmedigi bir iliski yayinlaniyor
// `fallbacks` bilincli olarak DISARIDA: onlar dil seciciye ozgudur, hreflang
// esdegerlik beyani degildir (ornegin /podyum-kiralama icin /de/buehne-mieten).
for (const group of PAGE_GROUPS) {
  const expected = new Map();
  for (const locale of EQUIV_LOCALES) {
    const target = group.translations[locale];
    if (target) expected.set(EQUIV_HREFLANG[locale], `${SITE_ORIGIN}${target === "/" ? "" : target}`);
  }

  for (const locale of EQUIV_LOCALES) {
    const route = group.translations[locale];
    if (!route) continue;

    const url = `${SITE_ORIGIN}${route === "/" ? "" : route}`;
    const entry = hreflangIndex.get(url);
    if (!entry) continue; // sayfa build'de yoksa mevcut sitemap denetimi zaten yakalar

    const actual = new Map(
      [...entry.langs.entries()].filter(([lang]) => lang !== "x-default"),
    );

    for (const [lang, href] of expected) {
      if (!actual.has(lang)) {
        addError(entry.route, "hreflang-table-missing", `[${lang}] tabloda var, HTML'de yok`);
      } else if (actual.get(lang) !== href) {
        addError(
          entry.route,
          "hreflang-table-mismatch",
          `[${lang}] tablo=${href} HTML=${actual.get(lang)}`,
        );
      }
    }

    for (const [lang, href] of actual) {
      if (!expected.has(lang)) {
        addError(entry.route, "hreflang-table-extra", `[${lang}] -> ${href} tabloda yok`);
      }
    }
  }
}

/* -------------------- hreflang karsiliklilik -------------------- */
// Bir sayfa X dilinde Y'yi gosteriyorsa, Y de geri gostermek zorunda.
// Karsiligi olmayan bildirim Google tarafindan tumden yok sayilir.
for (const [url, { route, langs }] of hreflangIndex) {
  const targets = [...langs.entries()].filter(([lang]) => lang !== "x-default");

  for (const [lang, target] of targets) {
    if (target === url) continue;
    const other = hreflangIndex.get(target);
    if (!other) {
      addError(
        route,
        "hreflang-target-missing",
        `[${lang}] -> ${target} (hedefte hreflang bildirimi yok)`,
      );
      continue;
    }
    const backRefs = [...other.langs.entries()]
      .filter(([l]) => l !== "x-default")
      .map(([, href]) => href);
    if (!backRefs.includes(url)) {
      addError(
        route,
        "hreflang-no-return-tag",
        `[${lang}] -> ${target} (hedef geri baglanti vermiyor)`,
      );
    }
  }

  // x-default grubun tamaminda ayni adresi gostermeli.
  const xDefault = langs.get("x-default");
  if (!xDefault) continue;
  for (const [, target] of targets) {
    const other = hreflangIndex.get(target);
    const otherXDefault = other?.langs.get("x-default");
    if (otherXDefault && otherXDefault !== xDefault) {
      addError(
        route,
        "hreflang-x-default-conflict",
        `${xDefault} <-> ${target} sayfasi ${otherXDefault} diyor`,
      );
    }
  }
}

/* -------------------- rapor -------------------- */
const group = (items) => {
  const byRule = new Map();
  for (const item of items) {
    byRule.set(item.rule, [...(byRule.get(item.rule) || []), item]);
  }
  return [...byRule.entries()].sort((a, b) => b[1].length - a[1].length);
};

console.log(`== Rendered HTML Audit ==`);
console.log(`pages=${auditedCount}  errors=${errors.length}  warnings=${warnings.length}\n`);

if (strongestContentPair) {
  console.log(
    `near_duplicate_max=${(strongestContentPair.similarity * 100).toFixed(1)}% ` +
      `${strongestContentPair.left.route} <-> ${strongestContentPair.right.route}\n`,
  );
}

if (errors.length) {
  console.log("== ERRORS ==");
  for (const [rule, items] of group(errors)) {
    console.log(`\n[${rule}] ${items.length}`);
    for (const item of items) console.log(`  ${item.route}: ${item.detail}`);
  }
  console.log("");
}

if (warnings.length) {
  console.log("== WARNINGS ==");
  for (const [rule, items] of group(warnings)) {
    console.log(`\n[${rule}] ${items.length}`);
    for (const item of items) console.log(`  ${item.route}: ${item.detail}`);
  }
  console.log("");
}

console.log("== JSON-LD Type Coverage ==");
for (const [type, count] of [...jsonLdTypes.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(count).padStart(5)}  ${type}`);
}

if (errors.length) {
  console.error(`\n[html-audit] ${errors.length} hata bulundu.`);
  process.exit(1);
}
console.log("\n[html-audit] Hata yok.");

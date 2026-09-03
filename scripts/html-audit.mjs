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
  position: ["CreativeWork", "ListItem"],
  telephone: [
    "Organization", "LocalBusiness", "GovernmentOrganization", "Place",
    "ContactPoint", "Person", "PostalAddress",
  ],
};

// PROPERTY_DOMAINS ust turleri ifade eder; yalnizca burada denetlenen ve
// render edilen gerekli alt tur baglarini acikca tanimlariz.
const PROPERTY_DOMAIN_PARENT_TYPES = {
  HowToStep: ["CreativeWork"],
};

const matchesPropertyDomain = (types, domains) =>
  types.some((type) =>
    domains.includes(type) ||
    (PROPERTY_DOMAIN_PARENT_TYPES[type] ?? []).some((parentType) =>
      domains.includes(parentType)));

// Ozellik -> referans verdigi dugumun tasimasi gereken tur kisiti.
// Deger `@id` ile verildiginde ayni dokumandaki dugum cozulerek kontrol edilir.
const REFERENCE_RANGES = {
  offers: { allow: (types) => types.some((t) => ["Offer", "Demand", "AggregateOffer"].includes(t)), label: "Offer/Demand" },
  potentialAction: { allow: (types) => types.some((t) => t.endsWith("Action")), label: "Action" },
  hasPart: { allow: (types) => !types.some((t) => INTANGIBLE_TYPES.has(t)), label: "CreativeWork" },
  workExample: { allow: (types) => !types.some((t) => INTANGIBLE_TYPES.has(t)), label: "CreativeWork" },
};

const WEBPAGE_TYPES = new Set([
  "WebPage", "AboutPage", "ContactPage", "CollectionPage", "SearchResultsPage",
]);
const ARTICLE_TYPES = new Set(["Article", "BlogPosting", "NewsArticle"]);
const URL_VALUE_PROPERTIES = new Set([
  "@id", "url", "contentUrl", "embedUrl", "thumbnailUrl", "sameAs", "item",
  "mainEntityOfPage", "image", "logo", "publishingPrinciples", "urlTemplate",
]);

// Site kimligi yalnizca kanonik ana sayfada tam tanimlanir. Alt sayfalar bu
// dugumlere cross-document @id referansi verebilir; ayni varligi yeniden
// tanimlayamaz. Editor bir kisi degil, Sahneva'nin kurumsal icerik ekibidir.
const ROOT_GLOBAL_ENTITY_REQUIREMENTS = new Map([
  [
    `${SITE_ORIGIN}/#org`,
    {
      requiredTypes: new Set(["Organization", "LocalBusiness"]),
      allowedAssertionTypes: new Set(["Organization", "LocalBusiness"]),
      allowedAssertionNames: new Set([
        "Sahneva Organizasyon", "Sahneva Teknik", "Sahneva Technical",
        "Sahneva Organization", "Sahneva Event Operations Team",
        "Sahneva Technical Production Team",
      ]),
      definitionAnyProperties: new Set([
        "legalName", "address", "logo", "contactPoint", "telephone", "email",
        "taxID", "vatID", "identifier", "geo", "openingHoursSpecification",
        "hasOfferCatalog", "foundingDate", "foundingLocation", "areaServed",
        "sameAs", "description", "image", "paymentAccepted",
        "currenciesAccepted", "knowsAbout",
      ]),
      requiredUrls: new Map([["url", SITE_ORIGIN]]),
      requiredReferences: new Map([
        ["logo", `${SITE_ORIGIN}/#logo`],
        ["hasOfferCatalog", `${SITE_ORIGIN}/#catalog`],
      ]),
    },
  ],
  [
    `${SITE_ORIGIN}/#website`,
    {
      requiredTypes: new Set(["WebSite"]),
      allowedAssertionTypes: new Set(["WebSite"]),
      definitionAllProperties: new Set(["publisher", "name", "url"]),
      requiredUrls: new Map([["url", SITE_ORIGIN]]),
      requiredReferences: new Map([["publisher", `${SITE_ORIGIN}/#org`]]),
    },
  ],
  [
    `${SITE_ORIGIN}/#editor`,
    {
      requiredTypes: new Set(["Organization"]),
      allowedAssertionTypes: new Set(["Organization"]),
      allowedAssertionNames: new Set([
        "Sahneva İçerik Ekibi", "Sahneva Icerik Ekibi",
        "Sahneva Editorial Team", "Sahneva Content Team",
        "Sahneva Prodüksiyon Ekibi", "Sahneva Editör", "Sahneva Editor",
      ]),
      definitionAllProperties: new Set(["parentOrganization"]),
      requiredReferences: new Map([["parentOrganization", `${SITE_ORIGIN}/#org`]]),
    },
  ],
  [
    `${SITE_ORIGIN}/#logo`,
    {
      requiredTypes: new Set(["ImageObject"]),
      allowedAssertionTypes: new Set(["ImageObject"]),
      definitionAllProperties: new Set(["contentUrl", "url"]),
      requiredUrls: new Map([
        ["url", null],
        ["contentUrl", null],
      ]),
    },
  ],
]);
const ROOT_ORGANIZATION_ID = `${SITE_ORIGIN}/#org`;
const ROOT_EDITOR_ID = `${SITE_ORIGIN}/#editor`;
const ARTICLE_AUTHOR_IDS = new Set([ROOT_ORGANIZATION_ID, ROOT_EDITOR_ID]);
const LIGHTWEIGHT_AUTHOR_ASSERTION_PROPERTIES = new Set([
  "@id", "@type", "name", "url",
]);
const FORBIDDEN_LOCAL_BUSINESS_ID = `${SITE_ORIGIN}/#local`;

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

const jsonLdTypesOf = (node) =>
  [].concat(node?.["@type"] ?? []).filter((type) => typeof type === "string");

const walkJsonLd = (node, visitor, parent = null, property = null) => {
  if (Array.isArray(node)) {
    node.forEach((item) => walkJsonLd(item, visitor, parent, property));
    return;
  }
  if (!node || typeof node !== "object") return;

  visitor(node, parent, property);
  for (const [key, value] of Object.entries(node)) {
    if (value && typeof value === "object") walkJsonLd(value, visitor, node, key);
  }
};

const topLevelJsonLdNodes = (payload) => {
  if (Array.isArray(payload)) return payload.filter((node) => node && typeof node === "object");
  if (!payload || typeof payload !== "object") return [];
  if (Array.isArray(payload["@graph"])) return payload["@graph"];
  return [payload];
};

const isSubstantiveIdDefinition = (node) =>
  Boolean(node?.["@id"]) && Object.keys(node).some((property) => !property.startsWith("@"));

const isRootIdentityFullDefinition = (resolvedId, node) => {
  const requirement = ROOT_GLOBAL_ENTITY_REQUIREMENTS.get(resolvedId);
  if (!requirement || !isSubstantiveIdDefinition(node)) return false;

  const hasAllDefinitionProperties = requirement.definitionAllProperties
    ? [...requirement.definitionAllProperties].every((property) =>
        Object.hasOwn(node, property))
    : true;
  const hasAnyDefinitionProperty = requirement.definitionAnyProperties
    ? [...requirement.definitionAnyProperties].some((property) =>
        Object.hasOwn(node, property))
    : true;
  return hasAllDefinitionProperties && hasAnyDefinitionProperty;
};

const isLightweightAuthorAssertion = (resolvedId, node) =>
  ARTICLE_AUTHOR_IDS.has(resolvedId) &&
  ["@type", "name", "url"].every((property) => Object.hasOwn(node, property)) &&
  Object.keys(node).every((property) =>
    LIGHTWEIGHT_AUTHOR_ASSERTION_PROPERTIES.has(property));

const isIdReference = (node) =>
  Boolean(node?.["@id"]) &&
  Object.keys(node).length === 1 &&
  Object.hasOwn(node, "@id");

const normalizeSchemaUrl = (value) => {
  if (typeof value !== "string" || !/^https?:\/\//i.test(value)) return null;
  try {
    const parsed = new URL(value);
    parsed.hash = "";
    const normalized = parsed.href.replace(/\/$/, "");
    return normalized;
  } catch {
    return null;
  }
};

const schemaReferenceUrl = (value) => {
  if (typeof value === "string") return value;
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value["@id"] ?? value.url ?? null;
};

const resolveSchemaId = (value, pageUrl) => {
  if (typeof value !== "string") return null;
  try {
    return new URL(value, pageUrl).href;
  } catch {
    return null;
  }
};

const resolvedSchemaReferences = (value, pageUrl) =>
  [].concat(value ?? [])
    .map((item) => schemaReferenceUrl(item))
    .map((reference) => resolveSchemaId(reference, pageUrl))
    .filter(Boolean);

const articleAuthorContractIssues = (value, pageUrl) => {
  const authors = [].concat(value ?? []);
  if (authors.length === 0) return ["author @id yok; #editor veya #org olmali"];

  const issues = [];
  for (const author of authors) {
    const rawId = schemaReferenceUrl(author);
    const authorId = resolveSchemaId(rawId, pageUrl);
    if (!ARTICLE_AUTHOR_IDS.has(authorId)) {
      issues.push(`author=${rawId || "@id yok"}; #editor veya #org olmali`);
    }

    const authorTypes = jsonLdTypesOf(author);
    if (!authorTypes.includes("Organization")) {
      issues.push(`author=${rawId || "@id yok"}; @type Organization olmali`);
    }
    if (typeof author?.name !== "string" || !author.name.trim()) {
      issues.push(`author=${rawId || "@id yok"}; gorunur name olmali`);
    }

    const authorUrl = schemaReferenceUrl(author?.url);
    if (normalizeSchemaUrl(authorUrl) !== normalizeSchemaUrl(SITE_ORIGIN)) {
      issues.push(`author=${rawId || "@id yok"}; url ana sayfa olmali`);
    }
  }
  return issues;
};

const articlePublisherContractIssues = (value, pageUrl) => {
  const publishers = [].concat(value ?? []);
  if (publishers.length === 0) return ["publisher @id yok; #org olmali"];

  return publishers.flatMap((publisher) => {
    const rawId = schemaReferenceUrl(publisher);
    const publisherId = resolveSchemaId(rawId, pageUrl);
    return publisherId === ROOT_ORGANIZATION_ID
      ? []
      : [`publisher=${rawId || "@id yok"}; #org olmali`];
  });
};

const selectPrimaryArticle = (articles, canonicalBase, pageUrl) => {
  const canonicalCandidates = canonicalBase
    ? articles.filter((node) => {
        const candidateBases = [
          normalizeSchemaUrl(resolveSchemaId(node["@id"], pageUrl)),
          normalizeSchemaUrl(resolveSchemaId(schemaReferenceUrl(node.url), pageUrl)),
          ...resolvedSchemaReferences(node.mainEntityOfPage, pageUrl)
            .map((reference) => normalizeSchemaUrl(reference)),
        ];
        return candidateBases.includes(canonicalBase);
      })
    : [];

  if (canonicalCandidates.length === 1) {
    return { node: canonicalCandidates[0], ambiguousCount: 0 };
  }
  if (canonicalCandidates.length > 1) {
    return { node: null, ambiguousCount: canonicalCandidates.length };
  }
  return {
    node: articles.length === 1 ? articles[0] : null,
    ambiguousCount: 0,
  };
};

const absoluteUrlStrings = (value, out = []) => {
  if (Array.isArray(value)) {
    value.forEach((item) => absoluteUrlStrings(item, out));
  } else if (typeof value === "string" && /^https?:\/\//i.test(value)) {
    out.push(value);
  }
  return out;
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

const visibleMainText = (html) => {
  const main = first(html, /<main\b[^>]*>([\s\S]*?)<\/main>/i) || html;
  return decodeEntities(
    main
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<svg\b[\s\S]*?<\/svg>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  ).replace(/\s+/g, " ").trim();
};

const visibleMainTokens = (html) => {
  const visibleText = visibleMainText(html).toLowerCase();

  return visibleText.match(/[\p{L}\p{N}]{3,}/gu) ?? [];
};

const JSONLD_PRICE_VALUE_PROPERTIES = new Set([
  "price", "lowPrice", "highPrice", "minPrice", "maxPrice",
]);

const escapeRegExp = (value) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const priceValueVariants = (value) => {
  const numericValue =
    typeof value === "number" ? value : Number(String(value).trim());
  if (!Number.isFinite(numericValue)) return [];

  const variants = new Set([String(numericValue)]);
  for (const locale of ["tr-TR", "en-US", "de-DE"]) {
    variants.add(new Intl.NumberFormat(locale, {
      maximumFractionDigits: 2,
    }).format(numericValue));
    variants.add(new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericValue));
  }
  return [...variants].map((variant) => variant.replace(/\s+/g, " "));
};

const isPriceValueVisible = (visibleText, value) =>
  priceValueVariants(value).some((variant) =>
    new RegExp(`(?<![\\p{N}])${escapeRegExp(variant)}(?![\\p{N}])`, "u")
      .test(visibleText));

const currencyPattern = (currency) => {
  if (currency === "TRY") return /(?:\bTRY\b|\bTL\b|₺)/iu;
  if (currency === "EUR") return /(?:\bEUR\b|€)/iu;
  if (currency === "USD") return /(?:\bUSD\b|\$)/iu;
  return new RegExp(`\\b${escapeRegExp(currency)}\\b`, "iu");
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

// Dosya sistemi/build gerektirmeyen dar regresyon probe'u. CI veya yerel
// incelemede: node scripts/html-audit.mjs --probe-jsonld-contract
if (process.argv.includes("--probe-jsonld-contract")) {
  const assertProbe = (condition, message) => {
    if (!condition) throw new Error(`[html-audit probe] ${message}`);
  };
  const probeCanonical = `${SITE_ORIGIN}/probe`;
  const wrongArticle = {
    "@type": "BlogPosting",
    "@id": `${SITE_ORIGIN}/wrong#article`,
    mainEntityOfPage: { "@id": `${SITE_ORIGIN}/wrong#webpage` },
  };
  const listingArticles = [
    { "@type": "BlogPosting", "@id": `${SITE_ORIGIN}/one#article` },
    { "@type": "BlogPosting", "@id": `${SITE_ORIGIN}/two#article` },
  ];
  const validAuthorAssertion = {
    "@id": ROOT_EDITOR_ID,
    "@type": "Organization",
    name: "Sahneva Editorial Team",
    url: SITE_ORIGIN,
  };
  const administrativeOrganization = {
    "@id": ROOT_ORGANIZATION_ID,
    "@type": ["Organization", "LocalBusiness"],
    name: "Sahneva Organizasyon",
    url: SITE_ORIGIN,
    address: { "@type": "PostalAddress" },
  };
  const probePriceHtml =
    '<main>Teklif: 15.000 TL<script type="application/ld+json">' +
    '{"price":99999,"priceCurrency":"TRY"}</script></main>';

  assertProbe(isIdReference({ "@id": "#entity" }), "@id-only referans taninmadi");
  assertProbe(
    !isIdReference({ "@id": "#entity", "@type": "Person" }),
    "@id + @type saf referans sayildi",
  );
  assertProbe(
    resolveSchemaId("#entity", probeCanonical) ===
      resolveSchemaId(`${probeCanonical}#entity`, probeCanonical),
    "goreli ve mutlak @id ayni kimlige cozulmedi",
  );
  assertProbe(
    selectPrimaryArticle(
      [wrongArticle],
      normalizeSchemaUrl(probeCanonical),
      probeCanonical,
    ).node === wrongArticle,
    "tum canonical alanlari yanlis tek Article secilmedi",
  );
  assertProbe(
    selectPrimaryArticle(
      listingArticles,
      normalizeSchemaUrl(probeCanonical),
      probeCanonical,
    ).node === null,
    "liste sayfasindaki ilgisiz Article dugumu ana Article secildi",
  );
  assertProbe(
    !ROOT_GLOBAL_ENTITY_REQUIREMENTS
      .get(ROOT_EDITOR_ID)
      .allowedAssertionTypes.has("Person"),
    "#editor Person tur atamasina izin veriyor",
  );
  assertProbe(
    isLightweightAuthorAssertion(ROOT_EDITOR_ID, validAuthorAssertion),
    "type/name/url author nesnesi hafif assertion sayilmadi",
  );
  assertProbe(
    !isRootIdentityFullDefinition(ROOT_EDITOR_ID, validAuthorAssertion),
    "hafif author assertion tam kok tanim sayildi",
  );
  assertProbe(
    isRootIdentityFullDefinition(ROOT_ORGANIZATION_ID, administrativeOrganization),
    "idari Organization nesnesi tam kok tanim sayilmadi",
  );
  assertProbe(
    !isLightweightAuthorAssertion(ROOT_ORGANIZATION_ID, administrativeOrganization),
    "adresli Organization hafif author assertion sayildi",
  );
  assertProbe(
    isRootIdentityFullDefinition(`${SITE_ORIGIN}/#website`, {
      "@id": `${SITE_ORIGIN}/#website`,
      "@type": "WebSite",
      name: "Sahneva",
      url: SITE_ORIGIN,
      publisher: { "@id": ROOT_ORGANIZATION_ID },
    }),
    "publisher/name/url WebSite tam kok tanim sayilmadi",
  );
  assertProbe(
    isRootIdentityFullDefinition(ROOT_EDITOR_ID, {
      ...validAuthorAssertion,
      parentOrganization: { "@id": ROOT_ORGANIZATION_ID },
    }),
    "parentOrganization tasiyan editor tam kok tanim sayilmadi",
  );
  assertProbe(
    isRootIdentityFullDefinition(`${SITE_ORIGIN}/#logo`, {
      "@id": `${SITE_ORIGIN}/#logo`,
      "@type": "ImageObject",
      url: `${SITE_ORIGIN}/img/logo.png`,
      contentUrl: `${SITE_ORIGIN}/img/logo.png`,
    }),
    "url/contentUrl logo tam kok tanim sayilmadi",
  );
  assertProbe(
    articleAuthorContractIssues(validAuthorAssertion, probeCanonical).length === 0,
    "gecerli nested author sozlesmesi reddedildi",
  );
  assertProbe(
    articleAuthorContractIssues({ "@id": ROOT_EDITOR_ID }, probeCanonical).length === 3,
    "eksik author type/name/url alanlari yakalanmadi",
  );
  assertProbe(
    articlePublisherContractIssues(
      { "@id": ROOT_ORGANIZATION_ID },
      probeCanonical,
    ).length === 0,
    "gecerli #org publisher reddedildi",
  );
  assertProbe(
    articlePublisherContractIssues(
      { "@id": ROOT_EDITOR_ID },
      probeCanonical,
    ).length === 1,
    "#org disindaki publisher yakalanmadi",
  );
  assertProbe(
    visibleMainText(probePriceHtml) === "Teklif: 15.000 TL",
    "JSON-LD scriptindeki fiyat gorunur ana icerik sayildi",
  );
  assertProbe(
    isPriceValueVisible(visibleMainText(probePriceHtml), 15000),
    "yerellestirilmis gorunur fiyat degeri taninmadi",
  );
  assertProbe(
    !isPriceValueVisible(visibleMainText(probePriceHtml), 5000),
    "fiyat degeri daha uzun bir sayinin alt dizesiyle eslesti",
  );
  assertProbe(
    currencyPattern("TRY").test(visibleMainText(probePriceHtml)),
    "TRY icin gorunur TL para birimi taninmadi",
  );
  assertProbe(
    !currencyPattern("EUR").test(visibleMainText(probePriceHtml)),
    "gorunmeyen EUR para birimi var sayildi",
  );

  console.log("[html-audit probe] 22/22 JSON-LD contract checks passed");
  process.exit(0);
}

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
// global @id -> [{ route, node }]
const rootGlobalEntityDefinitions = new Map(
  [...ROOT_GLOBAL_ENTITY_REQUIREMENTS.keys()].map((id) => [id, []]),
);
// Tam tanim olmayan { @id, @type } dugumleri de global kimlige tur atar. Bu
// atamalar cardinality'ye dahil edilmez ama kimlik sozlesmesiyle uyumlu olmali.
const rootGlobalEntityTypeAssertions = new Map(
  [...ROOT_GLOBAL_ENTITY_REQUIREMENTS.keys()].map((id) => [id, []]),
);
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
  const routeSchemaNodes = [];
  const routeTopLevelNodes = [];
  const routeIdDefinitions = new Map();
  const routeIdReferences = new Set();
  const routeJsonLdFindings = new Set();
  const pageSchemaBase = canonical || `${SITE_ORIGIN}${route}`;
  const canonicalBase = normalizeSchemaUrl(canonical);
  const addJsonLdError = (rule, detail) => {
    const key = `${rule}\u0000${detail}`;
    if (routeJsonLdFindings.has(key)) return;
    routeJsonLdFindings.add(key);
    addError(route, rule, detail);
  };

  for (const block of ldBlocks) {
    let parsed;
    try {
      parsed = JSON.parse(block);
    } catch (error) {
      addJsonLdError("jsonld-invalid", `JSON parse hatasi: ${error.message}`);
      continue;
    }
    routeSchemaPayloads.push(parsed);
    routeTopLevelNodes.push(...topLevelJsonLdNodes(parsed));

    walkJsonLd(parsed, (node) => {
      routeSchemaNodes.push(node);

      for (const type of jsonLdTypesOf(node)) {
        routeSchemaTypes.add(type);
        jsonLdTypes.set(type, (jsonLdTypes.get(type) || 0) + 1);
      }

      for (const property of Object.keys(node)) {
        if (!property.startsWith("@")) routeSchemaProps.add(property);

        if (!URL_VALUE_PROPERTIES.has(property)) continue;
        for (const candidate of absoluteUrlStrings(node[property])) {
          try {
            new URL(candidate);
          } catch {
            addJsonLdError("jsonld-url-invalid", `${property}=${candidate}`);
            continue;
          }

          const sitePrefix = SITE_ORIGIN.toLowerCase();
          const lowerCandidate = candidate.toLowerCase();
          if (lowerCandidate.startsWith(sitePrefix)) {
            const boundary = candidate[SITE_ORIGIN.length];
            if (boundary && !["/", "#", "?"].includes(boundary)) {
              addJsonLdError(
                "jsonld-url-malformed",
                `${property}=${candidate} (site origininden sonra / eksik)`,
              );
            }
          }
        }
      }

      const rawId = node["@id"];
      const resolvedId = resolveSchemaId(rawId, pageSchemaBase);
      if (rawId && !resolvedId) {
        addJsonLdError("jsonld-id-invalid", `@id=${rawId}`);
      }

      if (resolvedId) {
        const isReservedIdentity = ROOT_GLOBAL_ENTITY_REQUIREMENTS.has(resolvedId);
        const isSubstantive = isSubstantiveIdDefinition(node);
        const isRootIdentityDefinition = isRootIdentityFullDefinition(resolvedId, node);
        const isFullDefinition =
          isSubstantive && (!isReservedIdentity || isRootIdentityDefinition);

        if (isFullDefinition) {
          routeIdDefinitions.set(resolvedId, [
            ...(routeIdDefinitions.get(resolvedId) || []),
            node,
          ]);

          if (isReservedIdentity) {
            rootGlobalEntityDefinitions.get(resolvedId).push({ route, node });
          }
        } else if (isIdReference(node)) {
          routeIdReferences.add(resolvedId);
        } else {
          // @id + @type salt referans degil, tur atamasidir. Yine de hedefin
          // cozulmesi gerekir; reserved kimlikteki tur ayrica asagida denetlenir.
          routeIdReferences.add(resolvedId);
        }

        if (
          isReservedIdentity &&
          isSubstantive &&
          !isRootIdentityDefinition &&
          !isLightweightAuthorAssertion(resolvedId, node)
        ) {
          addJsonLdError(
            "jsonld-global-id-partial-definition",
            `${resolvedId}: hafif author assertion veya tam kok kimlik tanimi degil`,
          );
        }

        if (
          isReservedIdentity &&
          Object.hasOwn(node, "@type")
        ) {
          rootGlobalEntityTypeAssertions.get(resolvedId).push({ route, node });
        }
      }

      let isForbiddenLocalBusinessId = resolvedId === FORBIDDEN_LOCAL_BUSINESS_ID;
      if (resolvedId && !isForbiddenLocalBusinessId) {
        const parsedId = new URL(resolvedId);
        isForbiddenLocalBusinessId =
          parsedId.origin === new URL(SITE_ORIGIN).origin &&
          parsedId.hash.toLowerCase() === "#local";
      }
      if (isForbiddenLocalBusinessId) {
        addJsonLdError(
          "jsonld-local-id-forbidden",
          `${resolvedId} tanimi/referansi kullanilamaz; #org kullanin`,
        );
      }
    });

    // Sablon sizintisi: derlenmemis placeholder yayina cikmamali.
    if (/\{\{|\$\{/.test(block)) {
      addJsonLdError("jsonld-placeholder", "JSON-LD icinde derlenmemis sablon ifadesi var");
    }
  }

  /* ---- JSON-LD fiyatlari <-> gorunur ana icerik ---- */
  // Google, kullanicinin goremedigi fiyat/teklif bilgisinin isaretlenmesini
  // yasaklar. Script metnini gorunur saymiyoruz; sayisal deger ile para birimi
  // gercek <main> metninde ayri ayri bulunmalidir.
  if (indexable) {
    const mainVisibleText = visibleMainText(html);
    for (const node of routeSchemaNodes) {
      const types = jsonLdTypesOf(node).join("/") || "?";
      const currency =
        typeof node.priceCurrency === "string"
          ? node.priceCurrency.trim().toUpperCase()
          : "";

      for (const property of JSONLD_PRICE_VALUE_PROPERTIES) {
        if (!Object.hasOwn(node, property)) continue;
        if (priceValueVariants(node[property]).length === 0) continue;

        if (!isPriceValueVisible(mainVisibleText, node[property])) {
          addJsonLdError(
            "jsonld-price-not-visible",
            `${types}.${property}=${node[property]} ana icerikte gorunmuyor`,
          );
        }
        if (currency && !currencyPattern(currency).test(mainVisibleText)) {
          addJsonLdError(
            "jsonld-price-currency-not-visible",
            `${types}.priceCurrency=${currency} ana icerikte gorunmuyor`,
          );
        }
      }
    }
  }

  /* ---- tur/ozellik uyumu ---- */
  // @id -> tur haritasi tum script bloklarindan kurulur. Layout'taki bir dugume
  // sayfa-level JSON-LD'den verilen referans da boylece dogru cozulur.
  const idTypes = new Map();
  for (const node of routeSchemaNodes) {
    if (!node["@id"] || jsonLdTypesOf(node).length === 0) continue;
    const resolvedId = resolveSchemaId(node["@id"], pageSchemaBase);
    if (!resolvedId) continue;
    idTypes.set(
      resolvedId,
      [...new Set([...(idTypes.get(resolvedId) || []), ...jsonLdTypesOf(node)])],
    );
  }

  const typesOfValue = (value) => {
    if (!value || typeof value !== "object" || Array.isArray(value)) return null;
    if (value["@type"]) return jsonLdTypesOf(value);
    if (value["@id"]) {
      const resolvedId = resolveSchemaId(value["@id"], pageSchemaBase);
      return (resolvedId && idTypes.get(resolvedId)) ?? null;
    }
    return null;
  };

  for (const node of routeSchemaNodes) {
    const types = jsonLdTypesOf(node);

    for (const prop of Object.keys(node)) {
      if (prop.startsWith("@")) continue;

      // 1) CreativeWork'e ozgu ozellik, Intangible turde
      if (CREATIVEWORK_ONLY_PROPS.has(prop) && types.some((type) => INTANGIBLE_TYPES.has(type))) {
        addJsonLdError(
          "jsonld-invalid-property",
          `${types.join("/")}.${prop} (CreativeWork ozelligi)`,
        );
      }

      // 2) Ozelligin yazilabilecegi turler sabit
      const domains = PROPERTY_DOMAINS[prop];
      if (domains && types.length && !matchesPropertyDomain(types, domains)) {
        addJsonLdError(
          "jsonld-invalid-property",
          `${types.join("/")}.${prop} (yalnizca ${domains.join("/")})`,
        );
      }

      // 3) Referans verilen dugumun turu araliga uymali
      const range = REFERENCE_RANGES[prop];
      if (range) {
        for (const value of [].concat(node[prop])) {
          const targetTypes = typesOfValue(value);
          if (targetTypes && !range.allow(targetTypes)) {
            addJsonLdError(
              "jsonld-invalid-range",
              `${types.join("/") || "?"}.${prop} -> ${targetTypes.join("/")} (beklenen: ${range.label})`,
            );
          }
        }
      }
    }
  }

  for (const [id, definitions] of routeIdDefinitions) {
    if (definitions.length < 2) continue;

    addJsonLdError(
      "jsonld-id-duplicate-definition",
      `${id}: ${definitions.length} tam tanim (referanslar @id-only olmali)`,
    );

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
      addJsonLdError("jsonld-id-conflict", `${id}: ${conflicts.join("; ")}`);
    }
  }

  /* ---- kopuk ayni-dokuman @id referanslari ---- */
  const siteBase = normalizeSchemaUrl(SITE_ORIGIN);
  for (const resolved of routeIdReferences) {
    if (routeIdDefinitions.has(resolved)) continue;
    if (ROOT_GLOBAL_ENTITY_REQUIREMENTS.has(resolved)) continue;

    const parsedReference = new URL(resolved);
    if (!parsedReference.hash || parsedReference.origin !== new URL(SITE_ORIGIN).origin) continue;

    const referenceBase = normalizeSchemaUrl(resolved);
    if (referenceBase !== canonicalBase && referenceBase !== siteBase) continue;

    addJsonLdError("jsonld-id-unresolved", `${resolved} icin ayni dokumanda tanim yok`);
  }

  /* ---- JSON-LD ana dugumleri <-> canonical ---- */
  const topLevelWebPages = routeTopLevelNodes.filter((node) =>
    jsonLdTypesOf(node).some((type) => WEBPAGE_TYPES.has(type)),
  );
  for (const node of topLevelWebPages) {
    const types = jsonLdTypesOf(node);
    const nodeIdBase = normalizeSchemaUrl(resolveSchemaId(node["@id"], pageSchemaBase));
    const nodeUrlBase = normalizeSchemaUrl(
      resolveSchemaId(schemaReferenceUrl(node.url), pageSchemaBase),
    );
    const isPrimaryWebPage =
      (/#webpage$/i.test(node["@id"] ?? "") ||
        (topLevelWebPages.length === 1 && topLevelWebPages[0] === node));

    if (isPrimaryWebPage && !node["@id"]) {
      addJsonLdError(
        "jsonld-webpage-id-missing",
        `${types.join("/")} ana dugumunde @id yok`,
      );
    } else if (isPrimaryWebPage && canonicalBase && nodeIdBase !== canonicalBase) {
      addJsonLdError(
        "jsonld-canonical-mismatch",
        `${types.join("/")}.@id=${node["@id"]} canonical=${canonical}`,
      );
    }
    if (isPrimaryWebPage && node.url && canonicalBase && nodeUrlBase !== canonicalBase) {
      addJsonLdError(
        "jsonld-canonical-mismatch",
        `${types.join("/")}.url=${node.url} canonical=${canonical}`,
      );
    }
  }

  // Liste sayfalari cok sayida top-level BlogPosting tasiyabilir. Canonical ile
  // iliskili tek dugumu seceriz; hicbiri eslesmiyorsa yalniz tek Article bulunan
  // sayfada onu yine ana dugum sayariz ki uc canonical alani da yanlisken kontrol
  // sessizce atlanmasin.
  const topLevelArticles = routeTopLevelNodes.filter((node) =>
    jsonLdTypesOf(node).some((type) => ARTICLE_TYPES.has(type)),
  );
  const articleSelection = selectPrimaryArticle(
    topLevelArticles,
    canonicalBase,
    pageSchemaBase,
  );
  const primaryArticle = articleSelection.node;
  const isBlogDetailRoute = /^\/(?:en\/)?blog\/[^/]+$/.test(route);
  if (isBlogDetailRoute && !primaryArticle) {
    addJsonLdError(
      "jsonld-article-missing",
      "blog detay rotasinda canonical Article/BlogPosting/NewsArticle dugumu yok",
    );
  }
  if (articleSelection.ambiguousCount) {
    addJsonLdError(
      "jsonld-article-primary-ambiguous",
      `${articleSelection.ambiguousCount} Article/BlogPosting canonical sayfayi sahipleniyor`,
    );
  }

  if (primaryArticle) {
    const types = jsonLdTypesOf(primaryArticle);
    const resolvedArticleId = resolveSchemaId(primaryArticle["@id"], pageSchemaBase);
    const articleIdBase = normalizeSchemaUrl(
      resolvedArticleId,
    );
    const articleUrlBase = normalizeSchemaUrl(
      resolveSchemaId(schemaReferenceUrl(primaryArticle.url), pageSchemaBase),
    );

    if (primaryArticle["@id"] && canonicalBase && articleIdBase !== canonicalBase) {
      addJsonLdError(
        "jsonld-canonical-mismatch",
        `${types.join("/")}.@id=${primaryArticle["@id"]} canonical=${canonical}`,
      );
    }
    if (
      isBlogDetailRoute &&
      canonicalBase &&
      resolvedArticleId !== `${canonicalBase}#blogposting`
    ) {
      addJsonLdError(
        "jsonld-article-id-contract",
        `${types.join("/")}.@id=${primaryArticle["@id"] ?? "yok"}; beklenen ${canonicalBase}#blogposting`,
      );
    }
    if (primaryArticle.url && canonicalBase && articleUrlBase !== canonicalBase) {
      addJsonLdError(
        "jsonld-canonical-mismatch",
        `${types.join("/")}.url=${schemaReferenceUrl(primaryArticle.url)} canonical=${canonical}`,
      );
    }

    const mainEntityBases = resolvedSchemaReferences(
      primaryArticle.mainEntityOfPage,
      pageSchemaBase,
    ).map((reference) => normalizeSchemaUrl(reference));
    if (!primaryArticle.mainEntityOfPage || mainEntityBases.length === 0) {
      addJsonLdError(
        "jsonld-article-main-entity-missing",
        `${types.join("/")}.mainEntityOfPage yok veya @id/url icermiyor`,
      );
    } else if (
      canonicalBase &&
      mainEntityBases.some((base) => base !== canonicalBase)
    ) {
      addJsonLdError(
        "jsonld-canonical-mismatch",
        `${types.join("/")}.mainEntityOfPage canonical=${canonical} olmali`,
      );
    }

    for (const issue of articleAuthorContractIssues(
      primaryArticle.author,
      pageSchemaBase,
    )) {
      addJsonLdError(
        "jsonld-article-author",
        `${types.join("/")}.${issue}`,
      );
    }

    for (const issue of articlePublisherContractIssues(
      primaryArticle.publisher,
      pageSchemaBase,
    )) {
      addJsonLdError(
        "jsonld-article-publisher",
        `${types.join("/")}.${issue}`,
      );
    }
  }

  for (const node of routeTopLevelNodes) {
    const types = jsonLdTypesOf(node);
    if (types.includes("BreadcrumbList") && Array.isArray(node.itemListElement)) {
      const lastItem = node.itemListElement.at(-1);
      const lastUrl = schemaReferenceUrl(lastItem?.item);
      if (lastUrl && canonicalBase && normalizeSchemaUrl(lastUrl) !== canonicalBase) {
        addJsonLdError(
          "jsonld-breadcrumb-canonical-mismatch",
          `son oge=${lastUrl} canonical=${canonical}`,
        );
      }
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

/* ---- kok site kimligi: tek tanim, dogru rota ve dogru tur ---- */
for (const [id, requirement] of ROOT_GLOBAL_ENTITY_REQUIREMENTS) {
  const definitions = rootGlobalEntityDefinitions.get(id) ?? [];
  if (definitions.length !== 1) {
    addError(
      "/",
      "jsonld-global-id-cardinality",
      `${id}: ${definitions.length} tam tanim bulundu; / rotasinda tam olarak 1 olmali`,
    );
  }

  for (const { route, node } of definitions) {
    if (route !== "/") {
      addError(
        route,
        "jsonld-global-id-location",
        `${id} yalnizca / rotasinda tam tanimlanabilir`,
      );
    }

    const types = jsonLdTypesOf(node);
    const missingTypes = [...requirement.requiredTypes].filter(
      (requiredType) => !types.includes(requiredType),
    );
    if (missingTypes.length) {
      addError(
        route,
        "jsonld-global-id-type",
        `${id}: ${types.join("/") || "tur yok"}; eksik ${missingTypes.join("/")}`,
      );
    }

    for (const [property, expectedUrl] of requirement.requiredUrls ?? []) {
      const rawUrl = schemaReferenceUrl(node[property]);
      const normalizedUrl = normalizeSchemaUrl(rawUrl);
      if (!normalizedUrl) {
        addError(
          route,
          "jsonld-global-id-contract",
          `${id}.${property} mutlak ve gecerli URL olmali`,
        );
      } else if (
        expectedUrl &&
        normalizedUrl !== normalizeSchemaUrl(expectedUrl)
      ) {
        addError(
          route,
          "jsonld-global-id-contract",
          `${id}.${property}=${rawUrl}; beklenen ${expectedUrl}`,
        );
      }
    }

    for (const [property, expectedId] of requirement.requiredReferences ?? []) {
      const targets = resolvedSchemaReferences(
        node[property],
        `${SITE_ORIGIN}${route === "/" ? "/" : route}`,
      );
      if (targets.length !== 1 || targets[0] !== expectedId) {
        addError(
          route,
          "jsonld-global-id-contract",
          `${id}.${property}=${targets.join(", ") || "@id yok"}; beklenen ${expectedId}`,
        );
      }
    }
  }

  for (const { route, node } of rootGlobalEntityTypeAssertions.get(id) ?? []) {
    const types = jsonLdTypesOf(node);
    if (types.length === 0) {
      addError(
        route,
        "jsonld-global-id-type-assertion",
        `${id}: gecerli @type atamasi yok`,
      );
      continue;
    }
    const unexpectedTypes = types.filter(
      (type) => !requirement.allowedAssertionTypes.has(type),
    );
    if (unexpectedTypes.length) {
      addError(
        route,
        "jsonld-global-id-type-assertion",
        `${id}: ${unexpectedTypes.join("/")} tur atamasi kimlik sozlesmesiyle uyumsuz`,
      );
    }
    if (
      requirement.allowedAssertionNames &&
      typeof node.name === "string" &&
      !requirement.allowedAssertionNames.has(node.name.trim())
    ) {
      addError(
        route,
        "jsonld-global-id-name-assertion",
        `${id}: name=${node.name} kimlik alias sozlesmesinde yok`,
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

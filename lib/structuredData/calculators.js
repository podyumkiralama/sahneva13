import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";

/**
 * Hesaplama araclari icin ortak yapisal veri grafigi.
 *
 * Bu sayfalar teknik olarak birer uygulama; sadece "WebPage" olarak isaretlemek
 * onlari icerik sayfasindan ayirt edilemez kiliyordu. WebApplication + HowTo
 * kombinasyonu araci hem klasik aramada hem de LLM tabanli asistanlarda
 * "ucretsiz cevrimici hesaplayici" olarak tanimlanabilir hale getirir.
 */

const abs = (pathOrUrl) => {
  if (!pathOrUrl) return undefined;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${BASE_SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
};

const compact = (object) =>
  Object.fromEntries(
    Object.entries(object).filter(([, value]) =>
      Array.isArray(value) ? value.length > 0 : value !== undefined && value !== null && value !== "",
    ),
  );

/**
 * @param {object} input
 * @param {string} input.path            Sayfa yolu, or. "/cadir-hesaplama"
 * @param {string} input.name            Aracin adi
 * @param {string} input.description     Aracin ne yaptigi
 * @param {string} [input.inLanguage]    Varsayilan "tr-TR"
 * @param {string} [input.image]         Ekran goruntusu / temsili gorsel
 * @param {string[]} input.featureList   Aracin yaptigi islemler
 * @param {{name: string, text: string}[]} input.howToSteps  Kullanim adimlari
 * @param {string} [input.howToName]     HowTo basligi
 * @param {string} [input.howToDescription]
 * @param {{name: string, url: string}[]} [input.breadcrumb]
 * @param {string[]} [input.about]       Aracin konusu olan varliklar
 * @param {string} [input.faqId]         Ayni sayfadaki FAQPage dugumunun @id'si
 * @param {string} [input.datePublished]
 * @param {string} [input.dateModified]
 */
export function buildCalculatorSchema({
  path,
  name,
  description,
  inLanguage = "tr-TR",
  image,
  featureList = [],
  howToSteps = [],
  howToName,
  howToDescription,
  breadcrumb = [],
  about = [],
  faqId,
  datePublished,
  dateModified,
}) {
  const pageUrl = abs(path);
  const webPageId = `${pageUrl}#webpage`;
  const appId = `${pageUrl}#app`;
  const howToId = `${pageUrl}#howto`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  const graph = [];

  graph.push(
    compact({
      "@type": "WebPage",
      "@id": webPageId,
      url: pageUrl,
      name,
      description,
      inLanguage,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORGANIZATION_ID },
      primaryImageOfPage: image ? { "@type": "ImageObject", url: abs(image) } : undefined,
      mainEntity: { "@id": appId },
      breadcrumb: breadcrumb.length ? { "@id": breadcrumbId } : undefined,
      datePublished,
      dateModified,
      // Sesli asistanlarin ve LLM ozetlerinin oncelikle okumasi gereken bolum.
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "[data-speakable]"],
      },
    }),
  );

  // Araci konu alan icerikler. HowTo bir CreativeWork oldugu icin daha once
  // kullanilan `potentialAction` gecersizdi (o ozellik yalnizca Action kabul
  // eder); ikisi de `subjectOf` altinda dogru yerde duruyor.
  const appSubjectOf = [
    ...(howToSteps.length ? [{ "@id": howToId }] : []),
    ...(faqId ? [{ "@id": faqId }] : []),
  ];

  graph.push(
    compact({
      "@type": "WebApplication",
      "@id": appId,
      name,
      description,
      url: pageUrl,
      inLanguage,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Etkinlik planlama hesaplayıcısı",
      operatingSystem: "Web",
      browserRequirements: "JavaScript etkin modern bir tarayıcı",
      // Arac ucretsiz; Offer/price=0 bunu makine tarafindan okunabilir kilar.
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: 0,
        priceCurrency: "TRY",
        availability: "https://schema.org/InStock",
      },
      featureList,
      screenshot: image ? abs(image) : undefined,
      image: image ? abs(image) : undefined,
      provider: { "@id": ORGANIZATION_ID },
      publisher: { "@id": ORGANIZATION_ID },
      isPartOf: { "@id": WEBSITE_ID },
      mainEntityOfPage: { "@id": webPageId },
      about: about.length
        ? about.map((term) => ({ "@type": "Thing", name: term }))
        : undefined,
      subjectOf: appSubjectOf.length ? appSubjectOf : undefined,
      datePublished,
      dateModified,
    }),
  );

  if (howToSteps.length) {
    graph.push(
      compact({
        "@type": "HowTo",
        "@id": howToId,
        name: howToName ?? `${name} nasıl kullanılır?`,
        description: howToDescription ?? description,
        inLanguage,
        totalTime: "PT2M",
        estimatedCost: {
          "@type": "MonetaryAmount",
          currency: "TRY",
          value: 0,
        },
        tool: [{ "@type": "HowToTool", name }],
        step: howToSteps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
          url: `${pageUrl}#adim-${index + 1}`,
        })),
        mainEntityOfPage: { "@id": webPageId },
      }),
    );
  }

  if (breadcrumb.length) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: breadcrumb.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: abs(item.url),
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

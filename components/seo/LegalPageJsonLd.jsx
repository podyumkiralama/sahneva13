import JsonLd from "@/components/seo/JsonLd";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";

/**
 * Yasal metin sayfalari (KVKK, mesafeli satis, teslimat, iptal-iade) icin
 * WebPage dugumu.
 *
 * Bu sayfalarda daha once yalnizca BreadcrumbList vardi; grafikte sayfayi temsil
 * eden bir dugum bulunmadigi icin isletme varliginin dogrulanabilir politika
 * kaynaklarina baglanmasi eksik kaliyordu.
 *
 * @param {object} props
 * @param {string} props.path        Sayfa yolu, or. "/kvkk"
 * @param {string} props.name        Sayfa basligi
 * @param {string} props.description Sayfa aciklamasi
 * @param {string} [props.inLanguage]
 * @param {string} [props.dateModified] ISO tarih; "son guncelleme" degeri
 */
export default function LegalPageJsonLd({
  path,
  name,
  description,
  inLanguage = "tr-TR",
  dateModified,
}) {
  const pageUrl = `${BASE_SITE_URL}${path}`;

  return (
    <JsonLd
      id={`ld-json-legal-${path.replace(/\//g, "-").replace(/^-/, "")}`}
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name,
        description,
        inLanguage,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        ...(dateModified ? { dateModified } : {}),
      }}
    />
  );
}

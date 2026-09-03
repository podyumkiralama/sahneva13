import {
  BASE_SITE_URL,
  EDITOR_ID,
  ORGANIZATION_ID,
  SOCIAL_PROFILES,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";
import { COMPANY } from "@/lib/legal/companyInfo";

/**
 * Sahneva'nin dile bagli olmayan, kanonik kurum kimligi.
 *
 * Bu nesne yalnizca ana sayfadaki site kimlik grafiginde tam olarak tanimlanir.
 * Diger sayfalar ayni kuruma ORGANIZATION_ID ile referans verir.
 *
 * Buradaki her deger depoda dogrulanmis kaynaklardan gelir:
 *   - Yasal bilgiler: lib/legal/companyInfo.js (ticaret sicili verisi)
 *   - Kurulus yili:   Google Business Profile acilis tarihi (27 Mart 2012),
 *                     lib/legal/companyInfo.js icindeki foundingDate
 */

export const ORGANIZATION_IDENTITY = {
  legalName: COMPANY.legalName,
  foundingDate: COMPANY.foundingDate,
  email: COMPANY.email,
  telephone: COMPANY.phoneHref,
  taxID: COMPANY.taxNumber,
  vatID: COMPANY.taxNumber,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hamidiye Mah. Anadolu Cad. Yalı Evleri No: 61A",
    addressLocality: "Kağıthane",
    addressRegion: "İstanbul",
    postalCode: "34408",
    addressCountry: "TR",
  },
  identifier: [
    {
      "@type": "PropertyValue",
      name: "MERSIS No",
      value: COMPANY.mersisNo,
    },
    {
      "@type": "PropertyValue",
      name: "Ticaret Sicil No",
      value: COMPANY.tradeRegistryNo,
    },
    {
      "@type": "PropertyValue",
      name: "Vergi No",
      value: COMPANY.taxNumber,
    },
  ],
  sameAs: SOCIAL_PROFILES,
  slogan: "Sahneyi birlikte kuralım.",
};

const HOME_URL = `${BASE_SITE_URL}/`;
const LOGO_ID = `${HOME_URL}#logo`;
const LOGO_URL = `${BASE_SITE_URL}/img/logo.png`;

/**
 * Google site kimligi icin yalnizca domain kokunde yayinlanan graph.
 * LocalBusiness, Organization'in alt turudur; ayni sirketi ikinci bir #local
 * varligi olarak cogaltmak yerine tek ve kararlı #org dugumunde birlestiririz.
 */
export const SITE_IDENTITY_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: LOGO_URL,
      contentUrl: LOGO_URL,
      caption: "Sahneva Organizasyon logosu",
    },
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": ORGANIZATION_ID,
      ...ORGANIZATION_IDENTITY,
      name: "Sahneva Organizasyon",
      alternateName: [
        "Sahneva",
        "Sahneva Teknik",
        "Sahneva Technical",
        "Sahneva Organization",
        "Sahneva Event Operations Team",
        "Sahneva Technical Production Team",
      ],
      url: HOME_URL,
      logo: { "@id": LOGO_ID },
      image: `${BASE_SITE_URL}/img/hero-bg.webp`,
      description:
        "Sahneva Organizasyon; sahne, podyum, LED ekran, ses-ışık, truss, çadır ve kurumsal etkinlik teknik prodüksiyonu alanlarında Türkiye genelinde hizmet verir.",
      telephone: COMPANY.phoneHref,
      currenciesAccepted: "TRY",
      paymentAccepted: "Kredi kartı, banka kartı, taksitli ödeme, banka havalesi",
      foundingLocation: {
        "@type": "Place",
        name: "İstanbul, Türkiye",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      areaServed: { "@type": "Country", name: "Türkiye" },
      knowsAbout: [
        "kurumsal organizasyon",
        "sahne kiralama",
        "podyum kiralama",
        "LED ekran kiralama",
        "ses ve ışık sistemleri",
        "truss kiralama",
        "çadır kiralama",
        "teknik prodüksiyon",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: COMPANY.phoneHref,
        contactType: "customer service",
        areaServed: "TR",
      },
      hasOfferCatalog: { "@id": `${HOME_URL}#catalog` },
    },
    {
      "@type": "Organization",
      "@id": EDITOR_ID,
      name: "Sahneva İçerik Ekibi",
      alternateName: [
        "Sahneva Editorial Team",
        "Sahneva Content Team",
        "Sahneva Icerik Ekibi",
        "Sahneva Prodüksiyon Ekibi",
        "Sahneva Editör",
        "Sahneva Editor",
      ],
      url: HOME_URL,
      parentOrganization: { "@id": ORGANIZATION_ID },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: HOME_URL,
      name: "Sahneva",
      alternateName: ["Sahneva Organizasyon", "sahneva.com"],
      inLanguage: ["tr-TR", "en-US", "de-DE", "ar", "ru-RU", "zh-CN"],
      publisher: { "@id": ORGANIZATION_ID },
    },
  ],
};

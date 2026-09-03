import { BASE_SITE_URL, SOCIAL_PROFILES } from "@/lib/seo/schemaIds";
import { COMPANY } from "@/lib/legal/companyInfo";

/**
 * Organization dugumunun dile bagli OLMAYAN kimlik cekirdegi.
 *
 * Ayni @id (#org) bes farkli layout'ta (tr/en/ar/ru/zh) yeniden tanimlaniyordu ve
 * her biri farkli alan kumesi basiyordu; yani ayni varlik dile gore farkli
 * gorunuyordu. Yasal unvan, vergi/MERSIS kimligi, adres ve kurulus yili gibi
 * dile bagli olmayan alanlar artik tek yerden geliyor. Aciklama ve
 * knowsAbout gibi dile bagli alanlar layout'larda kalmaya devam eder.
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
  publishingPrinciples: `${BASE_SITE_URL}/nasil-calisiyoruz`,
  slogan: "Sahneyi birlikte kuralım.",
};

/**
 * LocalBusiness dugumunun dile bagli olmayan ticari alanlari.
 * Odeme yontemleri /odeme sayfasindaki fiili PayTR kurulumundan gelir
 * (kredi/banka karti + taksit, ayrica banka havalesi).
 */
export const LOCAL_BUSINESS_IDENTITY = {
  legalName: COMPANY.legalName,
  foundingDate: COMPANY.foundingDate,
  email: COMPANY.email,
  currenciesAccepted: "TRY",
  paymentAccepted: "Kredi kartı, banka kartı, taksitli ödeme, banka havalesi",
  knowsLanguage: ["tr", "en", "de", "ar", "ru", "zh"],
  taxID: COMPANY.taxNumber,
  vatID: COMPANY.taxNumber,
};

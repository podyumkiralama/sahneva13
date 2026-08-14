import { BASE_SITE_URL, SOCIAL_PROFILES } from "@/lib/seo/schemaIds";
import { COMPANY } from "@/lib/legal/companyInfo";
import { RETURN_POLICY_NODE } from "@/lib/structuredData/returnPolicy";

/**
 * Organization dugumunun dile bagli OLMAYAN kimlik cekirdegi.
 *
 * Ayni @id (#org) bes farkli layout'ta (tr/en/ar/ru/zh) yeniden tanimlaniyordu ve
 * her biri farkli alan kumesi basiyordu; yani ayni varlik dile gore farkli
 * gorunuyordu. Yasal unvan, vergi/MERSIS kimligi, adres, kurulus yili ve odul
 * gibi dile bagli olmayan alanlar artik tek yerden geliyor. Aciklama ve
 * knowsAbout gibi dile bagli alanlar layout'larda kalmaya devam eder.
 *
 * Buradaki her deger depoda dogrulanmis kaynaklardan gelir:
 *   - Yasal bilgiler: lib/legal/companyInfo.js (ticaret sicili verisi)
 *   - Kurulus yili:   Google Business Profile acilis tarihi (27 Mart 2012),
 *                     lib/legal/companyInfo.js icindeki foundingDate
 *   - Odul:           /blog/pmgc-dunya-finali-sahne-arkasi (kamuya acik kazanan listesi)
 */

const AWARD_SOURCE = "https://aceofmice.com/ace-of-m-i-c-e-awards/kazananlar/";

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
  award: "Ace of M.I.C.E. 2023 – En İyi Ses, Işık, Görüntü Uygulaması",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Ace of M.I.C.E. Awards 2023 – En İyi Ses, Işık, Görüntü Uygulaması",
    credentialCategory: "award",
    url: AWARD_SOURCE,
    recognizedBy: {
      "@type": "Organization",
      name: "Ace of M.I.C.E. Awards",
      url: "https://aceofmice.com/",
    },
  },
  sameAs: SOCIAL_PROFILES,
  publishingPrinciples: `${BASE_SITE_URL}/nasil-calisiyoruz`,
  slogan: "Sahneyi birlikte kuralım.",
  // Yasal metin sayfalarini varlik grafigine baglar; "bu isletme hakkinda"
  // sinyallerinde dogrulanabilir politika kaynagi olarak okunur.
  hasMerchantReturnPolicy: RETURN_POLICY_NODE,
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
  award: "Ace of M.I.C.E. 2023 – En İyi Ses, Işık, Görüntü Uygulaması",
  taxID: COMPANY.taxNumber,
  vatID: COMPANY.taxNumber,
};

import { BASE_SITE_URL } from "@/lib/seo/schemaIds";

/**
 * Iptal/iade kosullarinin makine tarafindan okunabilir karsiligi.
 *
 * Kaynak metin: /iptal-ve-iade-kosullari (oranlar lib/legal/companyInfo.js ->
 * REFUND_TIERS). Etkinlik tarihine 30+ gun varken on odemenin tamami iade
 * edildigi icin MerchantReturnFiniteReturnWindow + 30 gun + ucretsiz iade dogru
 * karsiliktir. Sahneva kural olarak odemeyi kurulum sonrasi tahsil ettiginden
 * gercek kosullar bu tanimdan daha esnektir; sema muhafazakar tarafta kalir.
 *
 * Hem Offer dugumlerinde (lib/structuredData/serviceProducts.js) hem de
 * Organization dugumunde (lib/structuredData/organizationIdentity.js)
 * kullanildigi icin ayri modulde tutulur.
 */
export const RETURN_POLICY_ID = `${BASE_SITE_URL}/iptal-ve-iade-kosullari#return-policy`;

export const RETURN_POLICY_NODE = {
  "@type": "MerchantReturnPolicy",
  "@id": RETURN_POLICY_ID,
  name: "Sahneva iptal ve iade koşulları",
  applicableCountry: "TR",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 30,
  returnFees: "https://schema.org/FreeReturn",
  returnMethod: "https://schema.org/ReturnByMail",
  merchantReturnLink: `${BASE_SITE_URL}/iptal-ve-iade-kosullari`,
  inStoreReturnsOffered: false,
};

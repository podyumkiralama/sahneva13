import { SITE_URL } from "@/lib/seo/seoConfig";
import { findGroup } from "@/lib/i18n/pageEquivalents";

const toAbsolute = (value) => {
  if (!value) return undefined;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
};

export function buildLanguageAlternates({
  tr,
  en,
  de,
  ar,
  ru,
  zh,
  xDefault,
  canonical,
} = {}) {
  const languages = {};

  const addLanguage = (key, value) => {
    const url = toAbsolute(value);
    if (!url) return;
    languages[key] = url;
  };

  if (tr) addLanguage("tr-TR", tr);
  if (en) addLanguage("en", en);
  if (de) addLanguage("de", de);
  if (ar) addLanguage("ar", ar);
  if (ru) addLanguage("ru", ru);
  if (zh) addLanguage("zh", zh);

  const canonicalUrl = toAbsolute(canonical ?? tr ?? en ?? de ?? ar ?? ru ?? zh ?? "/");
  // x-default, listelenen dillerin hicbirine uymayan ziyaretciyi karsilar:
  // grubun Ingilizce uyesi varsa her zaman o secilir.
  const xDefaultUrl = toAbsolute(xDefault ?? en ?? tr ?? de ?? ar ?? ru ?? zh ?? "/");

  if (xDefaultUrl) {
    languages["x-default"] = xDefaultUrl;
  }

  return {
    canonical: canonicalUrl,
    languages,
  };
}

/**
 * Sayfanin hreflang + canonical bloklarini ORTAK esdegerlik tablosundan uretir.
 *
 * Tek kaynak: `lib/i18n/pageEquivalents.js` -> PAGE_GROUPS. Sayfalar artik
 * kendi dil listelerini elle tasimiyor; bir grup degistiginde tum uyeleri
 * otomatik ayni seti basar. Daha once her sayfa kendi listesini tuttugu icin
 * tablo ile gercek cikti sessizce ayrisabiliyordu.
 *
 * YALNIZCA `translations` hreflang'a girer. `fallbacks` ("en yakin ise yarar
 * sayfa") dil seciciye ozgudur ve buraya ASLA karismaz: ornegin
 * /podyum-kiralama icin /de/buehne-mieten bir yedektir, cevirisi degildir.
 *
 * Canonical her zaman sayfanin KENDI adresidir; gruptaki digerlerinden
 * etkilenmez. x-default grubun `xDefault` alani varsa ondan, yoksa
 * buildLanguageAlternates'in mevcut kuralindan gelir (Ingilizce uye varsa o).
 *
 * Tabloda olmayan bir yol icin HATA firlatir. Blog yazilari gibi dinamik
 * sayfalar bilincli olarak tabloda degildir; onlar kendi `alternates`
 * tanimlarini kullanmaya devam eder. Sessizce yanlis eslestirmektense
 * build'in kirilmasi tercih edilir.
 */
export function buildAlternatesForPath(pathname) {
  const group = findGroup(pathname);

  if (!group) {
    throw new Error(
      `hreflang: "${pathname}" lib/i18n/pageEquivalents.js tablosunda yok. ` +
        `Sayfa bir dil grubuna aitse grubu oraya ekleyin; degilse buildAlternatesForPath kullanmayin.`
    );
  }

  return buildLanguageAlternates({
    ...group.translations,
    canonical: pathname,
    xDefault: group.xDefault,
  });
}

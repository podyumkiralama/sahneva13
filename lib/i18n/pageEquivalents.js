/**
 * Diller arasi sayfa esdegerligi — TEK KAYNAK.
 *
 * IKISI DE bu tabloyu okur:
 *   - dil secici: `components/i18n/LanguageSwitcher.client.jsx`
 *   - hreflang  : `buildAlternatesForPath()` (lib/seo/alternates.js), sayfalarin
 *                 `alternates` alanindan cagriliyor
 *
 * Sapma otomatik denetleniyor: `npm run seo:html` icindeki
 * hreflang-table-missing / -mismatch / -extra kurallari, yayina cikan HTML ile
 * bu tablonun `translations` listesini karsilastirir ve ayrisirsa build'i kirar.
 *
 * Ihtiyac somut bir hatadan dogdu: switcher ile hreflang ayri listelerdi ve
 * sessizce ayrismislardi. Switcher /kvkk'dan Ingilizce'ye /en/privacy-policy'ye
 * gonderiyordu, oysa o AYRI bir belge (gizlilik politikasi); /kvkk'nin gercek
 * Ingilizce karsiligi /en/data-protection. Kullanici yanlis dokumana dusuyordu.
 *
 * ---------------------------------------------------------------------------
 * IKI KADEME — karistirmayin:
 *
 *   translations : Ayni sayfanin gercek cevirisi. hreflang'a YALNIZCA bunlar
 *                  girer. Karsilikli olmalidir: A dilindeki sayfa B'yi
 *                  gosteriyorsa B de A'yi gostermelidir.
 *
 *   fallbacks    : "En yakin ise yarar sayfa". Ceviri DEGILDIR, yalnizca dil
 *                  secicide kullanilir. hreflang'a asla yazilmaz.
 *
 * Ayrimin sebebi somut: /ar/services tek basina 16 ayri Turkce sayfanin yedegi.
 * Bunlar hreflang'a yazilsaydi tek bir Arapca sayfa 16 farkli sayfanin Arapca
 * karsiligi ilan edilecekti; karsiliklilik kirilir ve Google tum grubu yok
 * sayardi. Yedek, kullaniciyi bos birakmamak icindir; arama motoruna verilen
 * bir esdegerlik beyani degildir.
 * ---------------------------------------------------------------------------
 *
 * Yeni satir eklerken: sayfanin o dilde GERCEK cevirisi varsa translations'a,
 * yoksa fallbacks'e yazin. Emin degilseniz fallbacks'e yazin — yanlis hreflang,
 * eksik hreflang'dan daha pahalidir.
 */

export const LOCALES = ["tr", "en", "de", "ar", "ru", "zh"];

/** hreflang etiketinde kullanilan kod. Turkce bolgeli, digerleri sade dil. */
export const HREFLANG_CODE = {
  tr: "tr-TR",
  en: "en",
  de: "de",
  ar: "ar",
  ru: "ru",
  zh: "zh",
};

/** Grup bulunamadiginda dil secicinin dusecegi adres. */
export const LOCALE_HOME = {
  tr: "/",
  en: "/en",
  de: "/de",
  ar: "/ar",
  ru: "/ru",
  zh: "/zh",
};

export const PAGE_GROUPS = [
  {
    // x-default BILINCLI olarak Turkce kok. Grubun geri kalaninda kural
    // "Ingilizce uye varsa x-default odur" seklinde isliyor ve varsayilan
    // hesap burada /en verirdi; ana sayfa grubu bu kuralin tek istisnasi ve
    // bugun yayindaki deger bu. Migrasyon sirasinda politikayi degistirmemek
    // icin acikca yaziliyor.
    xDefault: "/",
    translations: { tr: "/", en: "/en", de: "/de", ar: "/ar", ru: "/ru", zh: "/zh" },
  },
  {
    translations: { tr: "/hakkimizda", en: "/en/about", de: "/de/ueber-uns", ar: "/ar/about", ru: "/ru/about", zh: "/zh/about" },
  },
  {
    translations: { tr: "/blog", en: "/en/blog" },
    fallbacks: { de: "/de", ar: "/ar", ru: "/ru", zh: "/zh" },
  },
  {
    translations: { tr: "/hizmetler", en: "/en/services", de: "/de/leistungen", ar: "/ar/services", ru: "/ru/services", zh: "/zh/services" },
  },
  {
    translations: { tr: "/projeler", en: "/en/projects", de: "/de/projekte", ar: "/ar/projects", ru: "/ru/projects", zh: "/zh/projects" },
  },
  {
    translations: { tr: "/yaptiklarimiz", en: "/en/our-work", de: "/de/referenzen", ar: "/ar/our-work", ru: "/ru/our-work", zh: "/zh/our-work" },
  },
  {
    translations: { tr: "/iletisim", en: "/en/contact", de: "/de/kontakt", ar: "/ar/contact", ru: "/ru/contact", zh: "/zh/contact" },
  },
  {
    translations: { tr: "/nasil-calisiyoruz", en: "/en/how-we-work", de: "/de/arbeitsweise" },
    fallbacks: { ar: "/ar/services", ru: "/ru/services", zh: "/zh/services" },
  },
  {
    translations: { tr: "/bolgesel-kiralama", en: "/en/regional-rental", de: "/de/regionale-vermietung" },
    fallbacks: { ar: "/ar/services", ru: "/ru/services", zh: "/zh/services" },
  },
  {
    translations: { tr: "/sss", en: "/en/faq", de: "/de/faq" },
    fallbacks: { ar: "/ar/services", ru: "/ru/services", zh: "/zh/services" },
  },
  {
    translations: { tr: "/podyum-kiralama", en: "/en/podium-rental" },
    fallbacks: { de: "/de/buehne-mieten", ar: "/ar/services", ru: "/ru/services#stage", zh: "/zh/services#stage-rental" },
  },
  {
    translations: { tr: "/led-ekran-kiralama", en: "/en/led-screen-rental", de: "/de/led-wand-mieten", ru: "/ru/led-screen-rental", zh: "/zh/led-screen-rental" },
    fallbacks: { ar: "/ar/services" },
  },
  {
    translations: { tr: "/sahne-kiralama", en: "/en/stage-rental", de: "/de/buehne-mieten", ru: "/ru/stage-rental", zh: "/zh/stage-rental" },
    fallbacks: { ar: "/ar/services" },
  },
  {
    translations: { tr: "/ses-isik-sistemleri", en: "/en/sound-light-rental", de: "/de/ton-und-lichttechnik", ru: "/ru/sound-light-rental", zh: "/zh/sound-light-rental" },
    fallbacks: { ar: "/ar/services" },
  },
  {
    translations: { tr: "/truss-kiralama", en: "/en/truss-rental", de: "/de/traversen-mieten" },
    fallbacks: { ar: "/ar/services", ru: "/ru/sound-light-rental", zh: "/zh/sound-light-rental" },
  },
  {
    translations: { tr: "/cadir-kiralama", en: "/en/tent-rental", de: "/de/zelt-mieten", ru: "/ru/tent-rental", zh: "/zh/tent-rental" },
    fallbacks: { ar: "/ar/services" },
  },
  {
    translations: { tr: "/masa-sandalye-kiralama", en: "/en/table-chair-rental", de: "/de/tische-und-stuehle-mieten" },
    fallbacks: { ar: "/ar/services", ru: "/ru/services#furniture", zh: "/zh/services" },
  },
  {
    translations: { tr: "/kurumsal-organizasyon", en: "/en/corporate-events", de: "/de/firmenevents", ru: "/ru/corporate-events", zh: "/zh/corporate-events" },
    fallbacks: { ar: "/ar/services" },
  },
  {
    translations: { tr: "/turkiyede-etkinlik-cozum-ortagi", en: "/en/event-production-company-turkey", de: "/de/eventproduktion-tuerkei", ar: "/ar/event-production-company-turkey", ru: "/ru/event-production-company-turkey" },
    fallbacks: { zh: "/zh" },
  },
  {
    translations: { tr: "/podyum-kurulum-fiyatlari", en: "/en/podium-rental-prices", de: "/de/podium-preise" },
    fallbacks: { ar: "/ar/services", ru: "/ru/contact", zh: "/zh/contact" },
  },
  {
    translations: { tr: "/led-ekran-kiralama-fiyatlari", en: "/en/led-screen-rental-prices" },
    fallbacks: { de: "/de/led-wand-mieten", ar: "/ar/services", ru: "/ru/led-screen-rental", zh: "/zh/led-screen-rental" },
  },
  {
    translations: { tr: "/sozluk", en: "/en/glossary" },
    fallbacks: { de: "/de/leistungen", ar: "/ar/services", ru: "/ru/services", zh: "/zh/services" },
  },
  {
    translations: { tr: "/konser-icin-podyum-kiralama", en: "/en/concert-podium-rental", de: "/de/konzertbuehne-mieten" },
    fallbacks: { ar: "/ar/services", ru: "/ru/stage-rental", zh: "/zh/stage-rental" },
  },
  {
    translations: { tr: "/defile-podyum-kiralama", en: "/en/runway-podium-rental", de: "/de/laufsteg-mieten" },
    fallbacks: { ar: "/ar/services", ru: "/ru/stage-rental", zh: "/zh/stage-rental" },
  },
  // Iki AYRI hukuki grup — birlestirmeyin. Eski switcher tablosu tam burada
  // hata yapiyordu: /kvkk satirina gizlilik politikasinin adreslerini yazmisti.
  // KVKK aydinlatma metni ile gizlilik politikasi farkli belgeler ve her ikisinin
  // kendi karsilikli hreflang grubu var.
  {
    translations: { tr: "/kvkk", en: "/en/data-protection" },
    fallbacks: { de: "/de/datenschutz", ar: "/ar/contact", ru: "/ru/contact", zh: "/zh/contact" },
  },
  {
    translations: {
      tr: "/gizlilik-politikasi",
      en: "/en/privacy-policy",
      de: "/de/datenschutz",
    },
    fallbacks: { ar: "/ar/contact", ru: "/ru/contact", zh: "/zh/contact" },
  },
];

const normalize = (pathname) => {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/$/, "");
};

/**
 * Adresi YALNIZCA `translations` icinde arar — hreflang tarafinin girisi budur.
 *
 * Yedeklere hic bakmamasi bilincli bir kisittir. `findGroup` yedeklere de bakar
 * ve bu dil secici icin dogrudur; ama ayni davranis hreflang uretiminde tehlikeli
 * olurdu: yalnizca yedek olarak gecen bir adres (ornegin /de/buehne-mieten,
 * /podyum-kiralama grubunun yedegi) buildAlternatesForPath'e verilseydi, o sayfa
 * kendisini ait olmadigi grubun cevirisiymis gibi ilan ederdi. Burada eslesme
 * bulunamamasi -> cagiran taraf hata firlatir; sessizce yanlis grup secilmez.
 */
export function findTranslationGroup(pathname) {
  const target = normalize(pathname);

  return (
    PAGE_GROUPS.find((group) =>
      LOCALES.some((locale) => group.translations[locale] === target)
    ) ?? null
  );
}

/**
 * Verilen adresi iceren grubu bulur; hangi dildeki adres oldugu fark etmez.
 * Yedek eslesmeleri de sayar, bu yuzden YALNIZCA dil secici icin uygundur.
 *
 * Ceviri eslesmesi yedek eslesmesini EZER. Ayni adres bir grupta ceviri, baska
 * bir grupta yedek olabilir: /de/datenschutz gizlilik grubunun Almanca uyesidir
 * ama /kvkk grubunun da yedegidir. Sadece siraya bakilsa o sayfada yanlis grup
 * bulunur ve kullanici Almanca gizlilik sayfasindan KVKK grubuna gonderilir.
 */
export function findGroup(pathname) {
  const byTranslation = findTranslationGroup(pathname);
  if (byTranslation) return byTranslation;

  const target = normalize(pathname);

  return (
    PAGE_GROUPS.find((group) =>
      LOCALES.some((locale) => group.fallbacks?.[locale] === target)
    ) ?? null
  );
}

/**
 * hreflang icin gercek ceviriler. Yedekler BILINCLI olarak disarida birakilir.
 *
 * Sayfalar bunu dogrudan degil, `buildAlternatesForPath()` uzerinden kullanir;
 * o yardimci canonical'i ve x-default'u da ekleyip Next'in bekledigi `alternates`
 * nesnesini uretir. Buradaki liste ise ham veridir.
 *
 * Bir grubu degistirdiginizde ilgili tum sayfalar otomatik yeni seti basar;
 * elle guncelleme gerekmez. Yanlislikla elle yazilan bir `alternates` blogu
 * kalirsa `npm run seo:html` bunu hreflang-table-* hatasiyla yakalar.
 */
export function getTranslations(pathname) {
  return findTranslationGroup(pathname)?.translations ?? null;
}

/**
 * Dil secici icin hedefler: once gercek ceviri, yoksa yedek, o da yoksa dilin
 * ana sayfasi. Boylece secicide her dil her zaman bir yere gider.
 */
export function getSwitcherTargets(pathname) {
  const group = findGroup(pathname);
  const targets = {};

  for (const locale of LOCALES) {
    targets[locale] =
      group?.translations[locale] ??
      group?.fallbacks?.[locale] ??
      LOCALE_HOME[locale];
  }

  return targets;
}

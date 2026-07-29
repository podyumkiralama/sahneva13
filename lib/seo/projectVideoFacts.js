// Proje videolarına ait, dilden bağımsız olgular.
//
// Aynı 16 YouTube videosu 5 sayfada birden listeleniyor (TR /yaptiklarimiz +
// EN/RU/ZH/AR /our-work). Süre ve "hangi kurumun işi" bilgisi çeviriye tabi
// olmadığı için tek kaynaktan besleniyor; sayfalar yalnızca başlık/açıklama
// gibi çevrilebilir alanları kendi içinde tutuyor.

// VideoObject.about üzerinden bağlanan, kamuya açık kurum ve etkinlikler.
// Arama motoru ve LLM tarafında zaten tanınan varlıklara referans vermek,
// proje iddialarını doğrulanabilir kılar.
// Yeni kayıt eklerken sameAs MUTLAKA kurumun resmî adresi olmalı; doğrulanamayan
// bir eşleşmeyi tahminle doldurmak yanlış kimlik beyanı anlamına gelir.
export const REFERENCED_ENTITIES = {
  tubitak: {
    "@type": "Organization",
    name: "TÜBİTAK",
    sameAs: "https://www.tubitak.gov.tr/",
  },
  teknofest: {
    "@type": "Event",
    name: "TEKNOFEST",
    sameAs: "https://www.teknofest.org/",
  },
  fatihBelediyesi: {
    "@type": "GovernmentOrganization",
    name: "Fatih Belediyesi",
    sameAs: "https://www.fatih.bel.tr/",
  },
  sahaExpo: {
    "@type": "ExhibitionEvent",
    name: "SAHA EXPO",
    sameAs: "https://www.sahaexpo.com/",
  },
  sifirAtik: {
    "@type": "Organization",
    name: "Sıfır Atık",
    sameAs: "https://sifiratik.gov.tr/",
  },
  tua: {
    "@type": "GovernmentOrganization",
    name: "Türkiye Uzay Ajansı",
    alternateName: "TUA",
    sameAs: "https://tua.gov.tr/",
  },
  eaaci: {
    "@type": "Organization",
    name: "EAACI",
    alternateName: "European Academy of Allergy and Clinical Immunology",
    sameAs: "https://www.eaaci.org/",
  },
};

// ISO 8601 süreler; YouTube watch sayfasındaki itemprop="duration" değerinden alındı.
// Yeni video eklerken tahmin etme, kaynağından oku.
export const VIDEO_DURATIONS = {
  z4DqZERYXkM: "PT2M4S",
  "x-BYu0vgO2E": "PT1M5S",
  CVdYV5BkF3k: "PT38S",
  JNzGlNzNRuk: "PT1M47S",
  "4ygMbL4FDRc": "PT1M6S",
  "7yjrrEtWrr0": "PT1M1S",
  _9Q7v0ZL304: "PT26S",
  c72ILTyJH4A: "PT24S",
  "173gBurWSRQ": "PT1M35S",
  "1R5Av0x5ouA": "PT24S",
  "i-KtuiLiBmI": "PT11S",
  AihkXPzPBi0: "PT50S",
  tyb1lG9KtiA: "PT3M13S",
  xatodgyZ_S8: "PT53S",
  j1Tr5l8DVW8: "PT1M33S",
  qiqiBN4Uhu4: "PT59S",
  // /yaptiklarimiz listesinde olmayan, tekil sayfalarda kullanılan videolar.
  "HNDZ-wYVKLw": "PT2M41S",
  w28sVIG7U08: "PT1M30S",
  pWpVKKHSdwQ: "PT1M57S",
};

// Video kimliği -> REFERENCED_ENTITIES anahtarları.
// Yalnızca kurumun adı içerikte açıkça geçen videolar listelenir.
const VIDEO_ENTITY_KEYS = {
  z4DqZERYXkM: ["sifirAtik"],
  "x-BYu0vgO2E": ["sahaExpo"],
  "4ygMbL4FDRc": ["tubitak", "teknofest"],
  "7yjrrEtWrr0": ["teknofest"],
  _9Q7v0ZL304: ["teknofest"],
  c72ILTyJH4A: ["fatihBelediyesi"],
  xatodgyZ_S8: ["tua"],
  j1Tr5l8DVW8: ["tua"],
  qiqiBN4Uhu4: ["eaaci"],
};

/**
 * Videoda adı geçen kurumların şema düğümlerini döner; yoksa boş dizi.
 * `about` alanı zaten doluysa (ör. Service referansı) bunu ona ekleyin.
 */
export function getVideoEntities(videoId) {
  const keys = VIDEO_ENTITY_KEYS[videoId];
  if (!keys?.length) return [];
  return keys.map((key) => REFERENCED_ENTITIES[key]);
}

/** VideoObject şemasına eklenecek duration/about alanlarını üretir. */
export function getVideoFactProps(videoId) {
  const duration = VIDEO_DURATIONS[videoId];
  const entityKeys = VIDEO_ENTITY_KEYS[videoId];

  return {
    ...(duration ? { duration } : {}),
    ...(entityKeys?.length
      ? { about: entityKeys.map((key) => REFERENCED_ENTITIES[key]) }
      : {}),
  };
}

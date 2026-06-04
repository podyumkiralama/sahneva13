// lib/data.js

// -----------------------------
// HİZMETLER
// -----------------------------
export const services = [
  {
    slug: "podyum-kiralama",
    title: "Podyum Kiralama",
    excerpt: "Modüler ölçüler, hızlı kurulum, güvenli taşıyıcı sistem.",
    img: "/img/hizmet-podyum.webp",
    ogImage: "/img/hizmet-podyum.webp",
    keywords: [
      "podyum kiralama",
      "modüler podyum",
      "podyum kurulumu",
      "podyum fiyatları",
      "etkinlik podyumu"
    ],
    desc:
      "Farklı ebat ve yükseklik seçenekleriyle etkinliğinize uygun podyum çözümleri sunuyoruz. Kaymaz kaplama, korkuluk ve rampa gibi güvenlik detaylarıyla birlikte, hem iç hem de dış mekân etkinliklerinde güvenle kullanılabilir. Kurulum ve söküm teknik ekibimiz tarafından yapılır.",
    faqs: [
      {
        q: "Podyum kurulumu ne kadar sürer",
        a: "Ölçülere ve zemin durumuna göre genellikle 1–3 saat sürer."
      },
      {
        q: "Açık alan için podyum uygun mu",
        a: "Evet. Rüzgâr ve yağmur durumlarına uygun sabitleme ve kaplama çözümleri sunuyoruz."
      }
    ],
    gallery: [
      "/img/galeri/podyum-kiralama-1.webp",
      "/img/galeri/podyum-kiralama-2.webp",
      "/img/galeri/podyum-kiralama-3.webp",
      "/img/galeri/podyum-kiralama-4.webp",
      "/img/galeri/podyum-kiralama-5.webp"
    ]
  },
  {
    slug: "led-ekran-kiralama",
    title: "LED Ekran Kiralama",
    excerpt: "P2–P6 seçenekleri, iç/dış mekân, teknik ekip dahil.",
    img: "/img/hizmet-led-ekran.webp",
    ogImage: "/img/hizmet-led-ekran.webp",
    keywords: [
      "led ekran kiralama",
      "dış mekan led ekran",
      "iç mekan led ekran",
      "led ekran p2 p3 p4",
      "led ekran fiyatları"
    ],
    desc:
      "Yüksek parlaklık ve netlik sağlayan LED ekranlarımız iç ve dış mekânlara uygundur. P2–P6 çözünürlük aralığındaki paneller, gündüz güneş ışığında dahi net görünürlük sağlar. Profesyonel içerik yönetimi, canlı miksaj ve 7/24 teknik destek ile hizmetinizdeyiz.",
    faqs: [
      {
        q: "Gündüz görünürlük nasıl sağlanıyor",
        a: "Yüksek nits değerine sahip paneller ve uygun renk/kontrast ayarıyla gündüz netliği korunur."
      },
      {
        q: "Canlı yayın girişi yapabilir miyiz",
        a: "Evet. Kamera veya yayın kaynağınız miksere bağlanarak büyük ekrana aktarılabilir."
      }
    ],
    gallery: [
      "/img/galeri/led-ekran-kiralama-1.webp",
      "/img/galeri/led-ekran-kiralama-2.webp",
      "/img/galeri/led-ekran-kiralama-3.webp",
      "/img/galeri/led-ekran-kiralama-4.webp",
      "/img/galeri/led-ekran-kiralama-5.webp"
    ]
  },
  {
    slug: "ses-isik-sistemleri",
    title: "Ses & Işık Sistemleri",
    excerpt: "Line array, dijital mikser, profesyonel ışık çözümleri.",
    img: "/img/hizmet-sesisik.webp",
    ogImage: "/img/hizmet-sesisik.webp",
    keywords: [
      "ses sistemi kiralama",
      "ışık sistemi kiralama",
      "line array",
      "dijital mikser",
      "etkinlik ses ışık"
    ],
    desc:
      "Konser, lansman ve kurumsal etkinlikler için optimize edilmiş ses ve ışık sistemleri. Line array hoparlörler, dijital mikserler, kablosuz mikrofonlar ve DMX kontrollü ışık sistemleri ile yüksek kaliteli bir deneyim sunuyoruz. Kurulum, test ve etkinlik boyunca teknik ekibimiz aktiftir.",
    faqs: [
      {
        q: "Mekâna göre sistem seçimini nasıl yapıyorsunuz",
        a: "Kapasite, akustik ve sahne planına göre hoparlör dağılımı ve ışık rigging’i planlanır."
      },
      {
        q: "Teknik ekip etkinlik boyunca kalıyor mu",
        a: "Evet. Ses ve ışık operatörlerimiz etkinlik boyunca canlı yönetim sağlar."
      }
    ]
    // Galeri opsiyonel
  },
  {
    slug: "sahne-kiralama",
    title: "Sahne Kurulumu",
    excerpt: "Truss, rigging, platform ve güvenlik ekipmanları.",
    img: "/img/hizmet-sahne.webp",
    ogImage: "/img/hizmet-sahne.webp",
    keywords: [
      "sahne kiralama",
      "truss sistemleri",
      "rigging",
      "sahne kurulumu",
      "etkinlik sahnesi"
    ],
    desc:
      "Truss sistemleri, rigging çözümleri, backline ve sahne tekstili dahil olmak üzere anahtar teslim sahne kurulumları gerçekleştiriyoruz. Uluslararası güvenlik standartlarına uygun taşıyıcı sistemler kullanıyor, dekoratif ve fonksiyonel sahne tasarımları sunuyoruz.",
    faqs: [
      {
        q: "Sahne ölçüleri özelleştirilebilir mi",
        a: "Evet. Etkinlik alanına ve ihtiyaca göre farklı ölçü ve yüksekliklerde tasarlanabilir."
      },
      {
        q: "Güvenlik için hangi önlemler var",
        a: "Yük hesabı, sabitleme, korkuluk/rampa ve acil durum planlaması standart süreçlerimizdir."
      }
    ]
  },
  {
    slug: "cadir-kiralama",
    title: "Çadır Kiralama",
    excerpt: "Etkinlik çadırları, iklimlendirme ve aydınlatma çözümleri.",
    img: "/img/hizmet-cadir.webp",
    ogImage: "/img/hizmet-cadir.webp",
    keywords: [
      "çadır kiralama",
      "etkinlik çadırı",
      "iklimlendirme",
      "zemin kaplama",
      "çadır kurulumu"
    ],
    desc:
      "Her mevsime uygun endüstriyel ve etkinlik tipi çadır seçenekleri. İhtiyaca göre klima/ısıtıcı, zemin kaplama, aydınlatma ve güvenlik ekipmanlarıyla birlikte teslim edilir. Çadır kurulum ve söküm işlemleri saha ekibimiz tarafından güvenli şekilde yapılır.",
    faqs: [
      {
        q: "Rüzgârlı havalarda çadır güvenli mi",
        a: "Doğru ankraj ve iskelet sistemleriyle rüzgâr dayanımı sağlanır; hava durumuna göre planlama yapılır."
      },
      {
        q: "Zemin kaplama sağlıyor musunuz",
        a: "Evet. Çelik konstrüksiyon üstü platform veya modüler zemin kaplama seçenekleri mevcuttur."
      }
    ],
    gallery: [
      "/img/galeri/cadir-kiralama-1.webp",
      "/img/galeri/cadir-kiralama-2.webp",
      "/img/galeri/cadir-kiralama-3.webp",
      "/img/galeri/cadir-kiralama-4.webp",
      "/img/galeri/cadir-kiralama-5.webp"
    ]
  },
  {
    slug: "masa-sandalye-kiralama",
    title: "Masa & Sandalye Kiralama",
    excerpt: "Toplantı, düğün ve konferans düzenine uygun setler.",
    img: "/img/hizmet-masa.webp",
    ogImage: "/img/hizmet-masa.webp",
    keywords: [
      "masa sandalye kiralama",
      "banket masa",
      "napolyon sandalye",
      "organizasyon ekipmanları",
      "etkinlik oturma düzeni"
    ],
    desc:
      "Banket, düğün, konferans ve fuar düzenleri için dayanıklı masa ve sandalye çözümleri sunuyoruz. Napolyon sandalye, banket masa ve katlanır sistemler dahil geniş ürün yelpazemizle, kurulum ve yerleşim hizmeti birlikte sağlanır.",
    faqs: [
      {
        q: "Teslimat ve yerleşim hizmeti var mı",
        a: "Evet. Taşıma, yerleşim ve etkinlik bitiminde toplama hizmetleri pakete dâhil edilebilir."
      },
      {
        q: "Örtü ve dekor sağlıyor musunuz",
        a: "Talebe göre masa örtüsü, runner ve süsleme opsiyonları eklenebilir."
      }
    ]
  }
];

// Tekli hizmet getirici
export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

// -----------------------------
// PROJE / REFERANS SAYFALARI
// -----------------------------
export const projects = [
  {
    slug: "sifir-atik-festivali-ana-sahne-teknik-produksiyon",
    title: "Sıfır Atık Festivali Ana Sahne Teknik Prodüksiyonu",
    excerpt:
      "Ana sahne, LED ekran, ses, ışık, truss, podyum, backstage reji ve vinç destekli kurulum operasyonu Sahneva tarafından sahada yönetildi.",
    date: "2026-06-04",
    tags: ["Festival Sahne Prodüksiyonu", "Ana Sahne", "LED Ekran", "Line Array", "Backstage Reji"],
    assetDir: "img/projeler/sifir-atik-festivali",
    cover: "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-ana-sahne-teknik-produksiyon-hero.webp",
    updatedAt: "2026-06-04",
    keywords: [
      "sıfır atık festivali",
      "ana sahne teknik prodüksiyonu",
      "festival sahne kurulumu",
      "açık hava festival sahnesi",
      "led ekran kiralama",
      "line array ses sistemi",
      "truss kiralama",
      "scaffold sahne sistemi",
      "backstage reji",
      "podyum kiralama",
      "vinç destekli sahne kurulumu"
    ],
    images: [
      "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-ana-sahne-teknik-produksiyon-hero.webp",
      "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-ana-sahne-led-ekran-genis-plan.webp",
      "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-vinc-destekli-sahne-kurulumu.webp",
      "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-sahne-ici-podyum-truss-kurulumu.webp",
      "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-podyum-sahne-zemin-detayi.webp",
      "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-line-array-ses-sistemi-detayi.webp",
      "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-backstage-ses-rack-altyapisi.webp",
      "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-dev-led-ekran-goruntu-sistemi.webp",
      "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-backstage-patch-sinyal-dagitimi.webp",
      "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-teknik-rack-enerji-sinyal-altyapisi.webp",
      "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-prova-sahne-ici-teknik-kontrol.webp"
    ],
    priority: 0.82,
    changeFrequency: "monthly"
  },
  {
    slug: "istanbul-amator-futbol-kuluplerine-nakdi-destek-programi",
    title: "İstanbul Amatör Futbol Kulüplerine 180 Milyon TL Nakdi Destek Programı",
    excerpt:
      "Millet Bahçesi Hangar’da gerçekleştirilen kapalı alan protokol etkinliğinde LED ekran, sahne, podyum, ses-ışık, truss, teknik reji ve salon düzeni Sahneva koordinasyonunda yönetildi.",
    date: "2026-05-19",
    tags: ["LED Ekran", "Sahne Kurulumu", "Protokol Etkinliği", "Ses Işık", "Teknik Reji"],
    assetDir: "img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi",
    cover:
      "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/istanbul-amator-futbol-kulupleri-led-ekran-sahne-kurulumu.webp",
    updatedAt: "2026-05-19",
    keywords: [
      "led ekran kiralama",
      "sahne kurulumu",
      "kapalı alan etkinlik kurulumu",
      "protokol etkinliği",
      "kurumsal organizasyon",
      "ses ışık sistemleri",
      "teknik reji",
      "truss sistemleri",
      "podyum kiralama",
      "Millet Bahçesi Hangar"
    ],
    images: [
      "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/istanbul-amator-futbol-kulupleri-led-ekran-sahne-kurulumu.webp",
      "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/amator-futbol-kulupleri-destek-programi-ana-sahne.webp",
      "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/kapali-alan-protokol-etkinligi-led-ekran-kurulumu.webp",
      "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/protokol-etkinligi-salon-yemek-duzeni.webp",
      "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/ses-isik-reji-teknik-masa-kurulumu.webp",
      "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/truss-isik-sistemi-sahne-arka-kurulum-detayi.webp",
      "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/sahne-podyum-basamak-platform-kurulumu.webp",
      "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/kurumsal-etkinlik-led-ekran-yan-ekran-kurgusu.webp",
      "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/teknik-reji-canli-kamera-aktarim-kurulumu.webp",
      "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/kapali-alan-protokol-salon-led-ekran-genis-aci.webp",
      "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/kapali-alan-turk-bayragi-led-ekran-salon-kurgusu.webp",
      "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/amator-futbol-kulupleri-destek-programi-karsilama-alani.webp"
    ],
    priority: 0.82,
    changeFrequency: "monthly"
  },
  {
    slug: "diclefest-sanliurfa",
    title: "DicleFest Şanlıurfa",
    excerpt:
      "Topçu Meydanı’nda düzenlenen DicleFest kapsamında dome çadırlar, oyun alanları, konser alanı, dekor uygulamaları ve açık alan festival saha operasyonu Sahneva koordinasyonunda yönetildi.",
    date: "2026-05-16",
    tags: ["Açık Alan Festival", "Dome Çadır", "Konser Alanı", "Oyun Alanları", "Saha Operasyonu"],
    assetDir: "img/projeler/diclefest-sanliurfa",
    cover: "/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-dome-cadir-genel-alan.webp",
    updatedAt: "2026-05-16",
    keywords: [
      "diclefest şanlıurfa",
      "şanlıurfa festival kurulumu",
      "dome çadır kurulumu",
      "açık alan festival organizasyonu",
      "konser alanı kurulumu",
      "festival teknik altyapısı",
      "oyun alanı kurulumu",
      "etkinlik çadırı kurulumu",
      "festival saha yönetimi",
      "kurumsal etkinlik organizasyonu",
      "açık alan etkinlik yönetimi"
    ],
    images: [
      "/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-dome-cadir-genel-alan.webp",
      "/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-acik-alan-festival-yerlesimi.webp",
      "/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-konser-alani-sahne-kurulumu.webp",
      "/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-oyun-alani-masa-tenisi.webp",
      "/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-dekor-ve-fotograf-alani.webp"
    ],
    priority: 0.86,
    changeFrequency: "monthly"
  },
  {
    slug: "saha-2026-dome-cadir-kurulumu",
    title: "SAHA 2026 Dome Çadır ve Özel Etkinlik Alanı Kurulumu",
    excerpt:
      "Kapalı fuar alanında dome çadır, özel giriş cephesi, zemin altyapısı ve ambiyans aydınlatmasıyla hazırlanan özel etkinlik alanı kurulumu.",
    date: "2026-05-02",
    tags: ["dome-cadir", "fuar", "kurulum"],
    assetDir: "images/projects",
    updatedAt: "2026-05-02",
    images: ["/images/projects/saha-2026-dome-cadir-final.webp"],
    videos: [
      {
        title: "SAHA 2026 Dome Çadır Kurulum Videosu",
        description:
          "SAHA 2026 kapsamında kapalı fuar alanında hazırlanan dome çadır, özel giriş alanı ve kurulum sürecinden saha videosu.",
        thumbnail_loc: "https://www.sahneva.com/images/projects/saha-2026-dome-cadir-video-poster.webp",
        content_loc: "https://www.sahneva.com/videos/projects/saha-2026-dome-cadir-kurulum.mp4",
        player_loc: "https://www.sahneva.com/projeler/saha-2026-dome-cadir-kurulumu",
        publication_date: "2026-05-02T17:00:00+03:00",
      },
    ],
    priority: 0.8,
    changeFrequency: "monthly"
  },
  {
    slug: "kapali-alan-led-sahne-kurulumu",
    title: "Kapalı Alan LED & Sahne Kurulumu (Protokol Seviyesi)",
    excerpt:
      "40'lık çadır içinde 24×8 m sahne/podyum ve 24×6 m P2 LED ekranla tamamlanan protokol seviyesi kurulum.",
    date: "2024-10-23",
    tags: ["led", "sahne", "kapali-alan"],
    assetDir: "img/projeler/kapali-alan-led",
    updatedAt: "2025-10-23",
    images: ["/img/projeler/kapali-alan-led/1.webp"],
    priority: 0.8,
    changeFrequency: "monthly"
  }
  // Yeni projeler bu listeye eklenecek
];

// Tekli proje getirici
export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

export const INTENT_MAP = {
  stageRental: {
    cluster: "Sahne kiralama",
    primaryPage: {
      href: "/sahne-kiralama",
      label: "Sahne Kiralama",
      intent: "Ana ticari hizmet sayfası",
    },
    supportPages: [
      {
        href: "/blog/sahne-kiralama-fiyatlari-neye-gore-belirlenir",
        label: "Sahne Kiralama Fiyatları Neye Göre Belirlenir?",
        intent: "Bilgilendirici fiyat araştırması",
      },
      {
        href: "/blog/sahne-neden-hep-yuksektir-2500-yillik-bir-sir",
        label: "Sahne Neden Hep Yüksektir?",
        intent: "Destekleyici bilgilendirici içerik",
      },
    ],
  },
  podiumRental: {
    cluster: "Podyum kiralama",
    primaryPage: {
      href: "/podyum-kiralama",
      label: "Podyum Kiralama",
      intent: "Ana ticari hizmet sayfası",
    },
    supportPages: [
      {
        href: "/podyum-kurulum-fiyatlari",
        label: "Podyum Kurulum Fiyatları",
        intent: "Fiyat araştırması ve ön bütçe niyeti",
      },
      {
        href: "/blog/podyum-kiralama-nasil-secilir",
        label: "Podyum Kiralama Nasıl Seçilir?",
        intent: "Bilgilendirici seçim rehberi",
      },
      {
        href: "/defile-podyum-kiralama",
        label: "Defile Podyum Kiralama",
        intent: "Senaryo bazlı alt niyet",
      },
      {
        href: "/konser-icin-podyum-kiralama",
        label: "Konser İçin Podyum Kiralama",
        intent: "Senaryo bazlı alt niyet",
      },
    ],
  },
  ledScreen: {
    cluster: "LED ekran kiralama",
    primaryPage: {
      href: "/led-ekran-kiralama",
      label: "LED Ekran Kiralama",
      intent: "Ana ticari hizmet sayfası",
    },
    supportPages: [
      {
        href: "/led-ekran-kiralama-fiyatlari",
        label: "LED Ekran Kiralama Fiyatları",
        intent: "Fiyat araştırması, m² hesabı ve P1.9 premium LED bütçe niyeti",
      },
      {
        href: "/blog/led-ekran-kurulum-guvenligi",
        label: "LED Ekran Kurulum Güvenliği",
        intent: "Saha güvenliği, ISG ve kurulum kontrol rehberi",
      },
      {
        href: "/blog/etkinlikler-icin-led-ekran-secimi",
        label: "Etkinlikler İçin LED Ekran Seçimi",
        intent: "Bilgilendirici seçim rehberi",
      },
      {
        href: "/blog/led-ekran-teknoloji-trendleri-2026",
        label: "2026 LED Ekran Teknoloji Trendleri",
        intent: "Destekleyici trend içeriği",
      },
    ],
  },
  corporate: {
    cluster: "Kurumsal organizasyon ve etkinlik şirketleri",
    primaryPage: {
      href: "/kurumsal-organizasyon",
      label: "Kurumsal Organizasyon ve Etkinlik Prodüksiyonu",
      intent: "Kurumsal organizasyon ve kurumsal etkinlik teklifi, firma seçimi ve anahtar teslim teknik prodüksiyon ana ticari sayfası",
    },
    supportPages: [
      {
        href: "/blog/kurumsal-organizasyon-nedir-nasil-planlanir",
        label: "Kurumsal Etkinlik Türleri ve Amaçları",
        intent: "Kurumsal etkinlik türleri, amaçları ve başlangıç düzeyi bilgi niyeti",
      },
      {
        href: "/blog/kurumsal-etkinlik-yonetimi",
        label: "Kurumsal Etkinlik Yönetimi",
        intent: "Saha operasyonu ve etkinlik yönetimi araştırması",
      },
      {
        href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
        label: "2026 Kurumsal Etkinlik Planlama Rehberi",
        intent: "Adım adım planlama, bütçe, zaman çizelgesi ve kontrol listesi bilgi niyeti",
      },
      {
        href: "/blog/urun-lansmani-organizasyonu",
        label: "Ürün Lansmanı Organizasyonu",
        intent: "Alt senaryo ve destek niyeti",
      },
      {
        href: "/blog/bayi-toplantisi-organizasyonu-rehberi",
        label: "Bayi Toplantısı Organizasyonu Rehberi",
        intent: "Bayi toplantısı ve satış organizasyonu planlama niyeti",
      },
      {
        href: "/led-ekran-kiralama",
        label: "LED Ekran Kiralama",
        intent: "Kurumsal etkinliklerde görsel prodüksiyon ihtiyacı",
      },
      {
        href: "/projeler",
        label: "Projeler",
        intent: "Kurumsal referans ve saha kanıtı inceleme",
      },
    ],
  },
  regionalHub: {
    cluster: "Bölgesel kiralama",
    primaryPage: {
      href: "/bolgesel-kiralama",
      label: "Bölgesel Kiralama",
      intent: "Şehir ve lojistik planlama merkezi",
    },
    supportPages: [
      {
        href: "/led-ekran-kiralama",
        label: "LED Ekran Kiralama",
        intent: "Ana hizmet detayı",
      },
      {
        href: "/sahne-kiralama",
        label: "Sahne Kiralama",
        intent: "Ana hizmet detayı",
      },
      {
        href: "/podyum-kiralama",
        label: "Podyum Kiralama",
        intent: "Ana hizmet detayı",
      },
      {
        href: "/ses-isik-sistemleri",
        label: "Ses ve Işık Sistemleri",
        intent: "Ana hizmet detayı",
      },
      {
        href: "/truss-kiralama",
        label: "Truss Kiralama",
        intent: "Ana hizmet detayı",
      },
    ],
  },
};

/**
 * English commercial-intent ownership.
 *
 * Keep country, city, product and informational demand on one declared owner
 * instead of creating a new landing page for every wording variation.
 */
export const EN_INTENT_MAP = {
  discovery: {
    primaryPage: { href: "/en", intent: "Brand and capability discovery" },
    supportPages: [
      { href: "/en/services", intent: "Service-category comparison" },
      { href: "/en/projects", intent: "Project proof and references" },
    ],
  },
  eventProductionTurkey: {
    primaryPage: {
      href: "/en/event-production-company-turkey",
      intent:
        "Event production company Turkey, event production services Turkey and local production partner",
    },
    supportPages: [
      { href: "/en/corporate-events", intent: "Corporate event formats" },
      { href: "/en/mice-turkey", intent: "MICE technical production" },
      { href: "/en/regional-rental", intent: "Multi-city logistics and coverage" },
    ],
  },
  istanbulProduction: {
    primaryPage: {
      href: "/en/event-production-istanbul",
      intent: "End-to-end production, venue access, local crew and load-in in Istanbul",
    },
    supportPages: [
      { href: "/en/av-rental-istanbul", intent: "Installed, crewed or dry-hire AV package" },
      {
        href: "/en/conference-av-rental-istanbul",
        intent: "Conference, congress, interpretation and breakout-room workflow",
      },
    ],
  },
  miceTurkey: {
    primaryPage: {
      href: "/en/mice-turkey",
      intent: "MICE technical production and PCO or DMC production support in Turkey",
    },
    supportPages: [
      { href: "/en/event-production-antalya", intent: "Antalya resort and congress-hotel delivery" },
      { href: "/en/corporate-events", intent: "Launch, gala and corporate-conference formats" },
    ],
  },
  ledScreen: {
    primaryPage: { href: "/en/led-screen-rental", intent: "Main LED screen and LED wall rental service" },
    supportPages: [
      {
        href: "/en/led-screen-rental-prices",
        intent: "LED screen rental prices in Turkey, cost factors and quote comparison",
      },
      {
        href: "/en/blog/led-pixel-pitch-viewing-distance-guide",
        intent: "Pixel pitch and viewing-distance research",
      },
      {
        href: "/en/blog/led-screen-technology-trends-2026",
        intent: "Technology trends and supporting education",
      },
    ],
  },
  eventFurniture: {
    primaryPage: { href: "/en/table-chair-rental", intent: "Event table and chair rental" },
    supportPages: [
      {
        href: "/en/blog/event-seating-layout-guide",
        intent: "Banquet, theatre, classroom, cabaret and cocktail layout research",
      },
    ],
  },
};

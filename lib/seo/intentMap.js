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
        href: "/podyum-kiralama-fiyatlari",
        label: "Podyum Kiralama Fiyatları",
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
    cluster: "Kurumsal organizasyon",
    primaryPage: {
      href: "/kurumsal-organizasyon",
      label: "Kurumsal Organizasyon",
      intent: "Ana ticari hizmet sayfası",
    },
    supportPages: [
      {
        href: "/blog/kurumsal-etkinlik-yonetimi",
        label: "Kurumsal Etkinlik Yönetimi",
        intent: "Bilgilendirici rehber",
      },
      {
        href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
        label: "2026 Kurumsal Etkinlik Planlama Rehberi",
        intent: "Uzun rehber ve planlama niyeti",
      },
      {
        href: "/blog/urun-lansmani-organizasyonu",
        label: "Ürün Lansmanı Organizasyonu",
        intent: "Alt senaryo ve destek niyeti",
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

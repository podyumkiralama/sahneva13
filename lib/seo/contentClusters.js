export const CONTENT_CLUSTERS = {
  stageRental: {
    eyebrow: "Planlama rehberleri",
    title: "Sahne kiralama rehberleri ve tamamlayıcı hizmetler",
    description:
      "Sahne fiyatını, yüksekliği, kurulum koşullarını ve tamamlayıcı teknik çözümleri birlikte değerlendirin.",
    primaryIntent: "Profesyonel sahne kiralama teklifi ve kurulum planı",
    secondaryIntent: "Sahne fiyatı, yükseklik ve teknik prodüksiyon araştırması",
    funnelStage: "commercial",
    guides: [
      {
        href: "/blog/sahne-kiralama-fiyatlari-neye-gore-belirlenir",
        label: "Sahne Kiralama Fiyatları Neye Göre Belirlenir?",
        anchorText: "sahne kiralama fiyatlarını belirleyen teknik kalemler",
        intent: "Fiyat araştırması ve bütçe netleştirme",
      },
      {
        href: "/blog/sahne-neden-hep-yuksektir-2500-yillik-bir-sir",
        label: "Sahne Neden Hep Yüksektir? 2500 Yıllık Bir Sır",
        anchorText: "podyum yüksekliği ve profesyonel sahne kurulumu mantığı",
        intent: "Teknik merak ve sahne güvenliği farkındalığı",
      },
    ],
    relatedServices: [
      {
        href: "/led-ekran-kiralama",
        label: "LED Ekran Kiralama",
        anchorText: "sahne kurulumunu güçlendiren LED ekran çözümleri",
        intent: "Tamamlayıcı görsel prodüksiyon",
      },
      {
        href: "/ses-isik-sistemleri",
        label: "Ses ve Işık Sistemleri",
        anchorText: "sahne etkinliğini tamamlayan ses ve ışık altyapısı",
        intent: "Tam teknik prodüksiyon ihtiyacı",
      },
      {
        href: "/truss-kiralama",
        label: "Truss Kiralama",
        anchorText: "sahne üstü taşıyıcı truss sistemleri",
        intent: "Rigging ve taşıyıcı sistem ihtiyacı",
      },
    ],
  },
  ledScreen: {
    eyebrow: "Planlama rehberleri",
    title: "LED ekran seçimi ve kiralama rehberleri",
    description:
      "Panel seçimini, izleme mesafesini, içerik akışını ve etkinlik koşullarını tekliften önce netleştirin.",
    primaryIntent: "LED ekran kiralama teklifi ve panel seçimi",
    secondaryIntent: "Pixel aralığı, içerik görünürlüğü ve etkinlik formatı araştırması",
    funnelStage: "commercial",
    guides: [
      {
        href: "/blog/led-ekran-kurulum-guvenligi",
        label: "LED Ekran Kurulum Güvenliği",
        anchorText: "kiralık LED ekran kurulum güvenliği ve ISG kontrol listesi",
        intent: "Saha güvenliği, taşıyıcı sistem ve personel yetkinliği araştırması",
      },
      {
        href: "/blog/etkinlikler-icin-led-ekran-secimi",
        label: "Etkinlikler İçin LED Ekran Seçimi",
        anchorText: "etkinliğe göre doğru LED ekran seçimi",
        intent: "Panel seçimi ve kullanım senaryosu araştırması",
      },
    ],
    relatedServices: [],
  },
  tent: {
    eyebrow: "Planlama rehberleri",
    title: "Çadır seçimi ve güvenli kurulum rehberleri",
    description:
      "Çadır türünü, saha koşullarını, zemin ve sabitleme planını teknik keşif öncesinde karşılaştırın.",
    primaryIntent: "Çadır kiralama teklifi, sistem seçimi ve anahtar teslim kurulum planı",
    secondaryIntent: "Çadır türleri, zemin, ankraj, balast, hava koşulları ve teknik keşif araştırması",
    funnelStage: "commercial",
    guides: [
      {
        href: "/blog/organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026",
        label: "Pagoda mı Şeffaf mı? Çadır Seçim Rehberi",
        anchorText: "etkinliğe göre pagoda, şeffaf ve geniş modül çadır seçimi",
        intent: "Etkinlik türüne ve kullanım biçimine göre çadır sistemi karşılaştırması",
      },
      {
        href: "/blog/etkinlik-cadiri-kurulum-guvenligi",
        label: "Etkinlik Çadırı Kurulum Güvenliği",
        anchorText: "çadır kurulumunda zemin, ankraj, rüzgâr ve yağmur planı",
        intent: "Zemin, sabitleme, hava koşulları ve saha operasyonu araştırması",
      },
      {
        href: "/blog/etkinlik-teknik-kesif-ve-planlama-rehberi",
        label: "Teknik Keşif ve Planlama Rehberi",
        anchorText: "etkinlik alanı teknik keşif ve kurulum planlama rehberi",
        intent: "Mekân, ölçü, enerji ve teknik altyapı araştırması",
      },
    ],
    relatedServices: [
      {
        href: "/podyum-kiralama",
        label: "Podyum Kiralama",
        anchorText: "çadır içinde düz ve modüler platform kurulumu",
        intent: "Çadır zemini, sahne ve yükseltilmiş kullanım alanı",
      },
      {
        href: "/kurumsal-organizasyon",
        label: "Kurumsal Organizasyon",
        anchorText: "çadır, sahne ve teknik prodüksiyonu birlikte planlama",
        intent: "Anahtar teslim etkinlik prodüksiyonu",
      },
      {
        href: "/dome-cadir-kiralama",
        label: "Dome Çadır Kiralama",
        anchorText: "deneyim alanları için dome çadır kiralama",
        intent: "Dome ve 360 derece mapping odaklı ayrı sistem ihtiyacı",
      },
    ],
  },
  corporate: {
    eyebrow: "Planlama rehberleri",
    title: "Kurumsal organizasyon için tamamlayıcı içerikler",
    description:
      "Kurumsal organizasyon kararında sahne, LED ekran, ses-ışık, teknik reji ve gerçek saha referanslarını birlikte değerlendirmek teklif sürecini daha net hale getirir.",
    primaryIntent: "Kurumsal organizasyon ve etkinlik teklifi, firma seçimi ve anahtar teslim prodüksiyon",
    secondaryIntent: "Etkinlik türleri, planlama, risk yönetimi ve teknik kapsam araştırması",
    funnelStage: "commercial",
    guides: [
      {
        href: "/blog/kurumsal-organizasyon-nedir-nasil-planlanir",
        label: "Kurumsal Etkinlik Türleri ve Amaçları",
        anchorText: "kurumsal etkinlik türleri ve amaçları başlangıç rehberi",
        intent: "Etkinlik türleri, amaçları ve başlangıç düzeyi bilgi niyeti",
      },
      {
        href: "/blog/kurumsal-etkinlik-yonetimi",
        label: "Kurumsal Etkinlik Yönetimi",
        anchorText: "kurumsal etkinlik yönetimi ve saha operasyon planı",
        intent: "Planlama niyeti ve operasyon güveni",
      },
      {
        href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
        label: "2026 Kurumsal Etkinlik Planlama Rehberi",
        anchorText: "2026 kurumsal etkinlik planlama rehberi",
        intent: "Araştırma ve hazırlık niyeti",
      },
      {
        href: "/blog/bayi-toplantisi-organizasyonu-rehberi",
        label: "Bayi Toplantısı Organizasyonu Rehberi",
        anchorText: "bayi toplantısı organizasyonu ve ödül gecesi prodüksiyonu",
        intent: "Bayi toplantısı formatı ve teknik kapsam niyeti",
      },
      {
        href: "/blog/kurumsal-etkinlikte-isik-kurgusu",
        label: "Kurumsal Etkinlikte Işık Kurgusu",
        anchorText: "kurumsal etkinlikte doğru ışık kurgusu",
        intent: "Sahne atmosferi, kamera uyumu ve teknik prodüksiyon planlama",
      },
    ],
    relatedServices: [
      {
        href: "/led-ekran-kiralama",
        label: "LED Ekran Kiralama",
        anchorText: "kurumsal etkinlikler için LED ekran kiralama",
        intent: "Görsel anlatım ve sahne etkisi",
      },
      {
        href: "/sahne-kiralama",
        label: "Sahne Kiralama",
        anchorText: "kurumsal etkinliğe uygun sahne kiralama",
        intent: "Sunum, protokol ve performans sahnesi",
      },
      // Not: tuketiciler bu diziyi slice(0, 3) ile kesiyor; personel temini
      // ilk uce alindi, podyum kendi kumesinden ve fiyat sayfasindan zaten
      // ic link aliyor.
      {
        href: "/etkinlik-personel-temini",
        label: "Etkinlik Personel Temini",
        anchorText: "etkinlik için güvenlik, temizlik ve karşılama personeli",
        intent: "Saha kadrosu ve operasyon personeli ihtiyacı",
      },
      {
        href: "/podyum-kiralama",
        label: "Podyum Kiralama",
        anchorText: "konferans ve gala için podyum kurulumu",
        intent: "Modüler sahne ve platform ihtiyacı",
      },
      {
        href: "/ses-isik-sistemleri",
        label: "Ses ve Işık Sistemleri",
        anchorText: "kurumsal etkinlik ses ve ışık prodüksiyonu",
        intent: "Salon akustiği ve atmosfer tasarımı",
      },
      {
        href: "/truss-kiralama",
        label: "Truss Kiralama",
        anchorText: "büyük sahne ve LED ekran için truss altyapısı",
        intent: "Taşıyıcı sistem ve rigging ihtiyacı",
      },
      {
        href: "/projeler",
        label: "Projeler",
        anchorText: "kurumsal organizasyon ve teknik prodüksiyon referansları",
        intent: "Gerçek saha kanıtı ve referans inceleme",
      },
    ],
  },
  podium: {
    eyebrow: "Planlama rehberleri",
    title: "Podyum seçimi ve kiralama rehberleri",
    description:
      "Etkinlik türüne göre podyum ölçüsünü, yüksekliği, zemini ve özel platform ihtiyacını karşılaştırın.",
    primaryIntent: "Podyum kiralama teklifi ve ölçüye göre platform seçimi",
    secondaryIntent: "Etkinlik türüne göre podyum yüksekliği ve zemin araştırması",
    funnelStage: "commercial",
    guides: [
      {
        href: "/blog/etkinlige-gore-podyum-tercihi",
        label: "Etkinliğe Göre Podyum Kiralama Nasıl Seçilir?",
        anchorText: "etkinliğe göre doğru podyum kiralama seçimi",
        intent: "Seçim kriterleri, kullanım senaryosu ve teklif hazırlığı",
      },
      {
        href: "/blog/neden-podyum-sahne-tercih-edilir",
        label: "Neden Podyum Sahne Tercih Edilir?",
        anchorText: "podyum sahne tercihinin avantajları",
        intent: "Farkındalık ve karşılaştırma niyeti",
      },
    ],
    relatedServices: [
      {
        href: "/sahne-kiralama",
        label: "Sahne Kiralama",
        anchorText: "podyumdan sahne kiralama çözümüne geçiş",
        intent: "Daha geniş sahne ihtiyacı",
      },
      {
        href: "/defile-podyum-kiralama",
        label: "Defile Podyum Kiralama",
        anchorText: "defile ve moda etkinlikleri için podyum kiralama",
        intent: "Niş etkinlik formatı",
      },
      {
        href: "/konser-icin-podyum-kiralama",
        label: "Konser İçin Podyum Kiralama",
        anchorText: "konser alanları için podyum kiralama",
        intent: "Yüksek dayanımlı konser platformu",
      },
    ],
  },
  soundLight: {
    eyebrow: "Planlama rehberleri",
    title: "Ses ve ışık sistemleri planlama rehberleri",
    description:
      "Ses, ışık, sahne ve LED ekran ihtiyaçlarını aynı teknik prodüksiyon planında nasıl birleştireceğinizi inceleyin.",
    primaryIntent: "Ses ve ışık sistemleri kiralama teklifi",
    secondaryIntent: "Akustik, aydınlatma, sahne atmosferi ve teknik ekipman araştırması",
    funnelStage: "commercial",
    guides: [
      {
        href: "/blog/kurumsal-etkinlikte-isik-kurgusu",
        label: "Kurumsal Etkinlikte Işık Kurgusu",
        anchorText: "kurumsal etkinliklerde ışık kurgusu ve kamera uyumu",
        intent: "Işık tasarımı, LED ekran dengesi ve sahne atmosferi araştırması",
      },
      {
        href: "/blog/ses-sistemlerinde-2026-yenilikleri-trendler",
        label: "Ses Sistemlerinde 2026 Yenilikleri",
        anchorText: "etkinlik ses sistemlerinde 2026 yenilikleri",
        intent: "Teknoloji trendleri ve sistem seçimi",
      },
      {
        href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
        label: "2026 Kurumsal Etkinlik Planlama Rehberi",
        anchorText: "kurumsal etkinliklerde ses ve ışık planlaması",
        intent: "Etkinlik akışı ve teknik kapsam bağlamı",
      },
    ],
    relatedServices: [
      {
        href: "/sahne-kiralama",
        label: "Sahne Kiralama",
        anchorText: "ses ve ışıkla uyumlu sahne kiralama",
        intent: "Sahne merkezli teknik prodüksiyon",
      },
      {
        href: "/led-ekran-kiralama",
        label: "LED Ekran Kiralama",
        anchorText: "ses ışık sistemlerini tamamlayan LED ekran kiralama",
        intent: "Görsel destek ve sahne etkisi",
      },
      {
        href: "/kurumsal-organizasyon",
        label: "Kurumsal Organizasyon",
        anchorText: "kurumsal etkinliklerde tam teknik prodüksiyon",
        intent: "Anahtar teslim organizasyon ihtiyacı",
      },
    ],
  },
};

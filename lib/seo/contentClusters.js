export const CONTENT_CLUSTERS = {
  stageRental: {
    eyebrow: "Konu kumesi",
    title: "Sahne kiralama etrafindaki icerik kumesi",
    description:
      "Fiyat, yukseklik, kurulum ve tamamlayici teknik cozumleri ayni akista baglayarak sahne kiralama sayfasini konu merkezine yerlestiriyoruz.",
    primaryIntent: "Profesyonel sahne kiralama teklifi ve kurulum plani",
    secondaryIntent: "Sahne fiyati, yukseklik ve teknik prodiksiyon arastirmasi",
    funnelStage: "commercial",
    guides: [
      {
        href: "/blog/sahne-kiralama-fiyatlari-neye-gore-belirlenir",
        label: "Sahne Kiralama Fiyatlari Neye Gore Belirlenir?",
        anchorText: "sahne kiralama fiyatlarini belirleyen teknik kalemler",
        intent: "Fiyat arastirmasi ve butce netlestirme",
      },
      {
        href: "/blog/sahne-neden-hep-yuksektir-2500-yillik-bir-sir",
        label: "Sahne Neden Hep Yuksektir? 2500 Yillik Bir Sir",
        anchorText: "podyum yuksekligi ve profesyonel sahne kurulumu mantigi",
        intent: "Teknik merak ve sahne guvenligi farkindaligi",
      },
    ],
    relatedServices: [
      {
        href: "/led-ekran-kiralama",
        label: "LED Ekran Kiralama",
        anchorText: "sahne kurulumunu guclendiren LED ekran cozumleri",
        intent: "Tamamlayici gorsel prodiksiyon",
      },
      {
        href: "/ses-isik-sistemleri",
        label: "Ses ve Isik Sistemleri",
        anchorText: "sahne etkinligini tamamlayan ses ve isik altyapisi",
        intent: "Tam teknik prodiksiyon ihtiyaci",
      },
      {
        href: "/truss-kiralama",
        label: "Truss Kiralama",
        anchorText: "sahne ustu tasiyici truss sistemleri",
        intent: "Rigging ve tasiyici sistem ihtiyaci",
      },
    ],
  },
  ledScreen: {
    eyebrow: "Konu kumesi",
    title: "LED ekran kiralama etrafindaki icerik kumesi",
    description:
      "Panel secimi, izleme mesafesi, icerik akisi ve kurumsal etkinlik ihtiyacini ayni kumede baglayarak LED ekran sayfasinin ticari gucunu artiriyoruz.",
    primaryIntent: "LED ekran kiralama teklifi ve panel secimi",
    secondaryIntent: "Pixel araligi, icerik gorunurlugu ve etkinlik formati arastirmasi",
    funnelStage: "commercial",
    guides: [
      {
        href: "/blog/led-ekran-teknoloji-trendleri-2026",
        label: "2026 LED Ekran Teknoloji Trendleri",
        anchorText: "etkinlikler icin guncel LED ekran teknolojileri",
        intent: "Teknoloji karsilastirmasi ve panel secimi",
      },
      {
        href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
        label: "2026 Kurumsal Etkinlik Planlama Rehberi",
        anchorText: "kurumsal etkinliklerde LED ekran planlama akisi",
        intent: "Etkinlik planlama ve gorsel prodiksiyon baglami",
      },
    ],
    relatedServices: [
      {
        href: "/kurumsal-organizasyon",
        label: "Kurumsal Organizasyon",
        anchorText: "LED ekranli kurumsal organizasyon prodiksiyonu",
        intent: "Kurumsal etkinlik ana hizmeti",
      },
      {
        href: "/sahne-kiralama",
        label: "Sahne Kiralama",
        anchorText: "LED ekranla uyumlu sahne kiralama kurulumu",
        intent: "Sahne ve ekran entegrasyonu",
      },
      {
        href: "/ses-isik-sistemleri",
        label: "Ses ve Isik Sistemleri",
        anchorText: "LED ekran etkinligini tamamlayan ses ve isik cozumleri",
        intent: "Tamamlayici teknik altyapi",
      },
    ],
  },
  corporate: {
    eyebrow: "Konu kumesi",
    title: "Kurumsal organizasyon etrafindaki icerik kumesi",
    description:
      "Planlama rehberleri, teknik prodiksiyon ve tamamlayici kiralama hizmetlerini ayni karar yolculugunda toplayarak kurumsal organizasyon sayfasini ana merkez yapiyoruz.",
    primaryIntent: "Kurumsal organizasyon teklifi ve anahtar teslim prodiksiyon",
    secondaryIntent: "Etkinlik planlama, risk yonetimi ve teknik kapsam arastirmasi",
    funnelStage: "commercial",
    guides: [
      {
        href: "/blog/kurumsal-etkinlik-yonetimi",
        label: "Kurumsal Etkinlik Yonetimi Rehberi",
        anchorText: "kurumsal etkinlik yonetimi ve saha operasyon plani",
        intent: "Planlama niyeti ve operasyon guveni",
      },
      {
        href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
        label: "2026 Kurumsal Etkinlik Planlama Rehberi",
        anchorText: "2026 kurumsal etkinlik planlama rehberi",
        intent: "Uzun arastirma ve hazirlik niyeti",
      },
    ],
    relatedServices: [
      {
        href: "/led-ekran-kiralama",
        label: "LED Ekran Kiralama",
        anchorText: "kurumsal etkinlikler icin LED ekran kiralama",
        intent: "Gorsel anlatim ve sahne etkisi",
      },
      {
        href: "/sahne-kiralama",
        label: "Sahne Kiralama",
        anchorText: "kurumsal etkinlige uygun sahne kiralama",
        intent: "Sunum, protokol ve performans sahnesi",
      },
      {
        href: "/ses-isik-sistemleri",
        label: "Ses ve Isik Sistemleri",
        anchorText: "kurumsal etkinlik ses ve isik prodiksiyonu",
        intent: "Salon akustigi ve atmosfer tasarimi",
      },
      {
        href: "/podyum-kiralama",
        label: "Podyum Kiralama",
        anchorText: "sunum ve protokol icin podyum kiralama",
        intent: "Moduler sahne ve platform ihtiyaci",
      },
    ],
  },
  podium: {
    eyebrow: "Konu kumesi",
    title: "Podyum kiralama etrafindaki icerik kumesi",
    description:
      "Podyum secimi, etkinlik turu, sahne yuksekligi ve ozel platform ihtiyacini ayni baglamda baglayarak podyum kiralama sayfasini ticari merkeze aliyoruz.",
    primaryIntent: "Podyum kiralama teklifi ve olcuye gore platform secimi",
    secondaryIntent: "Etkinlik turune gore podyum yuksekligi ve zemin arastirmasi",
    funnelStage: "commercial",
    guides: [
      {
        href: "/blog/podyum-kiralama-nasil-secilir",
        label: "Podyum Kiralama Nasil Secilir?",
        anchorText: "dogru podyum kiralama secimi icin teknik rehber",
        intent: "Secim kriterleri ve teklif hazirligi",
      },
      {
        href: "/blog/etkinlige-gore-podyum-tercihi",
        label: "Etkinlige Gore Podyum Tercihi",
        anchorText: "etkinlik turune gore podyum tercihi",
        intent: "Kullanim senaryosu ve olcu belirleme",
      },
      {
        href: "/blog/neden-podyum-sahne-tercih-edilir",
        label: "Neden Podyum Sahne Tercih Edilir?",
        anchorText: "podyum sahne tercihinin avantajlari",
        intent: "Farkindalik ve karsilastirma niyeti",
      },
    ],
    relatedServices: [
      {
        href: "/sahne-kiralama",
        label: "Sahne Kiralama",
        anchorText: "podyumdan sahne kiralama cozumune gecis",
        intent: "Daha genis sahne ihtiyaci",
      },
      {
        href: "/defile-podyum-kiralama",
        label: "Defile Podyum Kiralama",
        anchorText: "defile ve moda etkinlikleri icin podyum kiralama",
        intent: "Nis etkinlik formati",
      },
      {
        href: "/konser-icin-podyum-kiralama",
        label: "Konser Icin Podyum Kiralama",
        anchorText: "konser alanlari icin podyum kiralama",
        intent: "Yuksek dayanimli konser platformu",
      },
    ],
  },
  soundLight: {
    eyebrow: "Konu kumesi",
    title: "Ses ve isik sistemleri etrafindaki icerik kumesi",
    description:
      "Ses, isik, sahne ve LED ekran ihtiyacini ayni teknik prodiksiyon baglaminda birlestirerek kullaniciyi dogru hizmet merkezine yonlendiriyoruz.",
    primaryIntent: "Ses ve isik sistemleri kiralama teklifi",
    secondaryIntent: "Akustik, aydinlatma, sahne atmosferi ve teknik ekipman arastirmasi",
    funnelStage: "commercial",
    guides: [
      {
        href: "/blog/ses-sistemlerinde-2026-yenilikleri-trendler",
        label: "Ses Sistemlerinde 2026 Yenilikleri",
        anchorText: "etkinlik ses sistemlerinde 2026 yenilikleri",
        intent: "Teknoloji trendleri ve sistem secimi",
      },
      {
        href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
        label: "2026 Kurumsal Etkinlik Planlama Rehberi",
        anchorText: "kurumsal etkinliklerde ses ve isik planlamasi",
        intent: "Etkinlik akisi ve teknik kapsam baglami",
      },
    ],
    relatedServices: [
      {
        href: "/sahne-kiralama",
        label: "Sahne Kiralama",
        anchorText: "ses ve isikla uyumlu sahne kiralama",
        intent: "Sahne merkezli teknik prodiksiyon",
      },
      {
        href: "/led-ekran-kiralama",
        label: "LED Ekran Kiralama",
        anchorText: "ses isik sistemlerini tamamlayan LED ekran kiralama",
        intent: "Gorsel destek ve sahne etkisi",
      },
      {
        href: "/kurumsal-organizasyon",
        label: "Kurumsal Organizasyon",
        anchorText: "kurumsal etkinliklerde tam teknik prodiksiyon",
        intent: "Anahtar teslim organizasyon ihtiyaci",
      },
    ],
  },
};

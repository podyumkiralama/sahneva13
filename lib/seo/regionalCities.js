export const CITY_CONTEXTS = {
  kongre: {
    meta: "kongre, fuar, kamu ve kurumsal toplantı yoğunluğuna göre sahne, LED ekran, ses-ışık ve podyum kiralama planı",
    focus:
      "kongre, fuar ve kurumsal toplantı akışlarında sunum netliği, protokol düzeni ve salon teslim saatleri öne çıkar",
    planning:
      "Kürsü, mikrofon, LED ekran görünürlüğü, simultane ihtiyaçlar ve teknik prova saatleri ilk briefte netleştiğinde teklif daha sağlam çıkar.",
    serviceMix: ["Podyum Kiralama", "LED Ekran Kiralama", "Ses ve Işık Sistemleri"],
  },
  turizm: {
    meta: "otel, resort, açık hava gala ve turizm etkinlikleri için nem, sıcaklık ve açık alan koşullarına uygun kiralama planı",
    focus:
      "otel, resort ve açık hava projelerinde sıcaklık, nem, rüzgar, gece-gündüz geçişi ve misafir deneyimi birlikte düşünülür",
    planning:
      "Gala kurulumu, havuz başı sahne, açık alan LED parlaklığı, dekoratif ışık ve hızlı söküm planı aynı operasyon takviminde ele alınır.",
    serviceMix: ["LED Ekran Kiralama", "Ses ve Işık Sistemleri", "Çadır Kiralama"],
  },
  sanayi: {
    meta: "fabrika etkinliği, bayi toplantısı, lansman ve endüstriyel saha kurulumları için teknik kiralama planı",
    focus:
      "fabrika, OSB ve endüstriyel alanlarda yükleme noktası, zemin, elektrik kapasitesi ve iş güvenliği prosedürleri belirleyicidir",
    planning:
      "Saha giriş izni, kablo güzergahı, forklift/asansör erişimi, truss yüksekliği ve vardiya saatleri proje planına erkenden işlenir.",
    serviceMix: ["Truss Kiralama", "Podyum Kiralama", "Ses ve Işık Sistemleri"],
  },
  festival: {
    meta: "festival, meydan etkinliği, belediye organizasyonu ve açık hava konserleri için sahne ve teknik ekipman kiralama planı",
    focus:
      "meydan, festival ve açık hava etkinliklerinde kalabalık yönetimi, rüzgar, bariyerleme, enerji ve seyir mesafesi kritik hale gelir",
    planning:
      "Sahne yönü, ses kapsaması, LED parlaklığı, jeneratör konumu ve acil söküm senaryosu etkinlikten önce birlikte planlanır.",
    serviceMix: ["Sahne Kiralama", "LED Ekran Kiralama", "Truss Kiralama"],
  },
  lojistik: {
    meta: "şehir dışı kurulum, hızlı sevkiyat ve bölgesel etkinlik ekipmanı kiralama için lojistik odaklı plan",
    focus:
      "lojistik mesafe, kurulum penceresi ve ekip konaklaması teklif doğruluğunu etkileyen ana başlıklardır",
    planning:
      "Araç erişimi, ekip sayısı, kurulum-söküm saati ve yedek ekipman planı şehir bazında önceden netleştirilir.",
    serviceMix: ["LED Ekran Kiralama", "Podyum Kiralama", "Ses ve Işık Sistemleri"],
  },
  sahil: {
    meta: "sahil etkinliği, liman organizasyonu, açık hava konseri ve nemli hava koşullarına uygun teknik kiralama planı",
    focus:
      "sahil ve liman bölgelerinde rüzgar, tuzlu nem, zemin dayanımı ve gece görünürlüğü ekipman seçimini doğrudan etkiler",
    planning:
      "Ground stack LED, truss sabitleme, kablo koruma, ses yönü ve açık hava ışık senaryosu saha şartlarına göre kurgulanır.",
    serviceMix: ["LED Ekran Kiralama", "Truss Kiralama", "Ses ve Işık Sistemleri"],
  },
  genel: {
    meta: "yerel etkinlik, kurumsal organizasyon ve açık alan kurulumları için şehir bazlı kiralama planı",
    focus:
      "şehir içi etkinliklerde mekan erişimi, kurulum saati, enerji noktası ve ekipman ölçeği teklifin temelini oluşturur",
    planning:
      "Etkinlik türü, kişi sayısı, alan ölçüsü ve teknik beklenti paylaşıldığında şehir bazlı doğru ekipman listesi hızlıca çıkarılır.",
    serviceMix: ["Sahne Kiralama", "Podyum Kiralama", "LED Ekran Kiralama"],
  },
};

export const REGIONAL_CITIES = [
  { name: "Adana", slug: "adana", context: "festival" },
  { name: "Adıyaman", slug: "adiyaman", context: "genel" },
  { name: "Afyonkarahisar", slug: "afyonkarahisar", context: "kongre" },
  { name: "Ağrı", slug: "agri", context: "lojistik" },
  { name: "Amasya", slug: "amasya", context: "genel" },
  { name: "Ankara", slug: "ankara", context: "kongre" },
  { name: "Antalya", slug: "antalya", context: "turizm" },
  { name: "Artvin", slug: "artvin", context: "lojistik" },
  { name: "Aydın", slug: "aydin", context: "turizm" },
  { name: "Balıkesir", slug: "balikesir", context: "sahil" },
  { name: "Bilecik", slug: "bilecik", context: "sanayi" },
  { name: "Bingöl", slug: "bingol", context: "lojistik" },
  { name: "Bitlis", slug: "bitlis", context: "lojistik" },
  { name: "Bolu", slug: "bolu", context: "kongre" },
  { name: "Burdur", slug: "burdur", context: "genel" },
  { name: "Bursa", slug: "bursa", context: "sanayi" },
  { name: "Çanakkale", slug: "canakkale", context: "sahil" },
  { name: "Çankırı", slug: "cankiri", context: "genel" },
  { name: "Çorum", slug: "corum", context: "sanayi" },
  { name: "Denizli", slug: "denizli", context: "sanayi" },
  { name: "Diyarbakır", slug: "diyarbakir", context: "festival" },
  { name: "Edirne", slug: "edirne", context: "festival" },
  { name: "Elazığ", slug: "elazig", context: "kongre" },
  { name: "Erzincan", slug: "erzincan", context: "lojistik" },
  { name: "Erzurum", slug: "erzurum", context: "kongre" },
  { name: "Eskişehir", slug: "eskisehir", context: "kongre" },
  { name: "Gaziantep", slug: "gaziantep", context: "kongre" },
  { name: "Giresun", slug: "giresun", context: "sahil" },
  { name: "Gümüşhane", slug: "gumushane", context: "lojistik" },
  { name: "Hakkari", slug: "hakkari", context: "lojistik" },
  { name: "Hatay", slug: "hatay", context: "sahil" },
  { name: "Isparta", slug: "isparta", context: "kongre" },
  { name: "Mersin", slug: "mersin", context: "sahil" },
  { name: "İstanbul", slug: "istanbul", context: "kongre" },
  { name: "İzmir", slug: "izmir", context: "sahil" },
  { name: "Kars", slug: "kars", context: "lojistik" },
  { name: "Kastamonu", slug: "kastamonu", context: "lojistik" },
  { name: "Kayseri", slug: "kayseri", context: "sanayi" },
  { name: "Kırklareli", slug: "kirklareli", context: "sanayi" },
  { name: "Kırşehir", slug: "kirsehir", context: "genel" },
  { name: "Kocaeli", slug: "kocaeli", context: "sanayi" },
  { name: "Konya", slug: "konya", context: "kongre" },
  { name: "Kütahya", slug: "kutahya", context: "sanayi" },
  { name: "Malatya", slug: "malatya", context: "kongre" },
  { name: "Manisa", slug: "manisa", context: "sanayi" },
  { name: "Kahramanmaraş", slug: "kahramanmaras", context: "sanayi" },
  { name: "Mardin", slug: "mardin", context: "turizm" },
  { name: "Muğla", slug: "mugla", context: "turizm" },
  { name: "Muş", slug: "mus", context: "lojistik" },
  { name: "Nevşehir", slug: "nevsehir", context: "turizm" },
  { name: "Niğde", slug: "nigde", context: "genel" },
  { name: "Ordu", slug: "ordu", context: "sahil" },
  { name: "Rize", slug: "rize", context: "sahil" },
  { name: "Sakarya", slug: "sakarya", context: "sanayi" },
  { name: "Samsun", slug: "samsun", context: "sahil" },
  { name: "Siirt", slug: "siirt", context: "lojistik" },
  { name: "Sinop", slug: "sinop", context: "sahil" },
  { name: "Sivas", slug: "sivas", context: "kongre" },
  { name: "Tekirdağ", slug: "tekirdag", context: "sahil" },
  { name: "Tokat", slug: "tokat", context: "genel" },
  { name: "Trabzon", slug: "trabzon", context: "sahil" },
  { name: "Tunceli", slug: "tunceli", context: "lojistik" },
  { name: "Şanlıurfa", slug: "sanliurfa", context: "festival" },
  { name: "Uşak", slug: "usak", context: "sanayi" },
  { name: "Van", slug: "van", context: "kongre" },
  { name: "Yozgat", slug: "yozgat", context: "genel" },
  { name: "Zonguldak", slug: "zonguldak", context: "sanayi" },
  { name: "Aksaray", slug: "aksaray", context: "lojistik" },
  { name: "Bayburt", slug: "bayburt", context: "lojistik" },
  { name: "Karaman", slug: "karaman", context: "genel" },
  { name: "Kırıkkale", slug: "kirikkale", context: "sanayi" },
  { name: "Batman", slug: "batman", context: "sanayi" },
  { name: "Şırnak", slug: "sirnak", context: "lojistik" },
  { name: "Bartın", slug: "bartin", context: "sahil" },
  { name: "Ardahan", slug: "ardahan", context: "lojistik" },
  { name: "Iğdır", slug: "igdir", context: "lojistik" },
  { name: "Yalova", slug: "yalova", context: "turizm" },
  { name: "Karabük", slug: "karabuk", context: "sanayi" },
  { name: "Kilis", slug: "kilis", context: "genel" },
  { name: "Osmaniye", slug: "osmaniye", context: "sanayi" },
  { name: "Düzce", slug: "duzce", context: "sanayi" },
];

export function getRegionalCity(slug) {
  return REGIONAL_CITIES.find((city) => city.slug === slug);
}

export function getCityContext(city) {
  return CITY_CONTEXTS[city?.context] ?? CITY_CONTEXTS.genel;
}

export function getFeaturedRegionalCities() {
  const featured = new Set([
    "istanbul",
    "ankara",
    "izmir",
    "bursa",
    "antalya",
    "kocaeli",
    "sakarya",
    "tekirdag",
  ]);

  return REGIONAL_CITIES.filter((city) => featured.has(city.slug));
}

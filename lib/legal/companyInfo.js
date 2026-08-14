// lib/legal/companyInfo.js
// Yasal metinlerde (mesafeli satış sözleşmesi, iptal/iade koşulları) kullanılan
// satıcı bilgileri. TEK KAYNAK: burayı güncellemek tüm yasal sayfaları günceller.
//
// Adres olarak ticaret sicilinde tescilli şirket merkezi kullanılır; vergi
// levhasındaki Başakşehir iş yeri adresi resmî tebligat adresi değildir.
// Bu alanlardan biri boşaltılırsa COMPANY_INFO_COMPLETE false döner ve yasal
// sayfalar otomatik olarak noindex olur.

export const COMPANY = {
  legalName: "SAHNEVA ORGANİZASYON TASARIM VE REKLAM LİMİTED ŞİRKETİ",
  brandName: "Sahneva",
  // Şirketi temsile yetkili müdür. Almanca Impressum'da (vertretungsberechtigte
  // Person) zorunlu alan; TR yasal metinlerde şart değil, o yüzden yalnızca
  // /de/impressum bu alanı basıyor.
  representative: "Kasım Yılmaz",
  address: "Hamidiye Mah. Anadolu Cad. Yalı Evleri No: 61A, Kağıthane / İstanbul",
  postalCode: "34408",
  taxOffice: "Başakşehir",
  taxNumber: "7391410961",
  mersisNo: "0739141096100001",
  tradeRegistryNo: "1146862",
  email: "info@sahneva.com",
  phone: "+90 545 304 86 71",
  phoneHref: "+905453048671",
};

/**
 * Doldurulmamış alan kalıp kalmadığı. Yasal sayfalar bu bayrağa göre
 * indekslenir; eksik bilgiyle arama motorlarına açılmalarını engeller.
 */
export const COMPANY_INFO_COMPLETE = !Object.values(COMPANY).some(
  (value) => typeof value === "string" && value.includes("["),
);

/**
 * Kademeli iade basamakları. Hem sözleşme hem iptal/iade sayfası bunu kullanır,
 * böylece iki metin birbirinden ayrışamaz.
 *
 * DİKKAT: Bu oranlar YALNIZCA etkinlik öncesinde peşinat/ön ödeme alınan
 * işlemlerde geçerlidir. Sahneva kural olarak ödemeyi kurulum tamamlandıktan
 * sonra tahsil eder; o hâllerde iptal anında tahsil edilmiş tutar bulunmaz.
 */
export const REFUND_TIERS = [
  {
    window: "Etkinlik tarihine 30 gün ve daha fazla süre varken",
    rate: "%100",
    detail: "Ödenen tutarın tamamı iade edilir.",
  },
  {
    window: "Etkinlik tarihine 15–29 gün varken",
    rate: "%50",
    detail:
      "Ekipman ve ekip bu tarih için bloke edildiğinden, ödenen tutarın yarısı iade edilir.",
  },
  {
    window: "Etkinlik tarihine 15 günden az süre varken",
    rate: "İade yok",
    detail:
      "Bu aşamada ekipman rezervasyonu, lojistik planlaması ve ekip görevlendirmesi tamamlandığı için iade yapılamaz.",
  },
];

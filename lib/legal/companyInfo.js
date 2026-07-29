// lib/legal/companyInfo.js
// Yasal metinlerde (mesafeli satış sözleşmesi, iptal/iade koşulları) kullanılan
// satıcı bilgileri. TEK KAYNAK: burayı güncellemek tüm yasal sayfaları günceller.
//
// UYARI: Köşeli parantezli alanlar henüz doldurulmadı. 6502 sayılı Tüketicinin
// Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği, satıcının açık
// adresini ve MERSİS numarasını zorunlu kılar. Bu alanlar doldurulmadan yasal
// sayfalar yayına alınmamalıdır; eksik oldukları sürece sayfalar noindex kalır.

export const COMPANY = {
  legalName: "SAHNEVA ORGANİZASYON TASARIM VE REKLAM LİMİTED ŞİRKETİ",
  brandName: "Sahneva",
  address: "[AÇIK ADRES]",
  taxOffice: "[VERGİ DAİRESİ]",
  taxNumber: "[VERGİ NUMARASI]",
  mersisNo: "[MERSİS NUMARASI]",
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

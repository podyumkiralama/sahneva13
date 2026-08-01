/**
 * Adlandirilmis kurum referanslari — TEK KAYNAK.
 *
 * B2B'de satin alma tarafindaki karar verici yildiz puanina degil "kimlerle
 * calismis" sorusuna bakar. Bu liste, sitede zaten yayimlanmis ve dogrulanabilir
 * proje sayfalarina/videolarina dayanir; buraya kaynagi olmayan hicbir kurum
 * eklenmemeli.
 *
 * Alan sozlesmesi:
 *   org   -> kurum adi (gorunen)
 *   work  -> yapilan isin kisa adi
 *   href  -> o isin sitedeki kaynagi (proje sayfasi, vaka yazisi veya galeri)
 */
export const CLIENT_REFERENCES = [
  {
    org: "Fatih Belediyesi",
    work: "5 Yılda Fatih'e Değer 400 Proje etkinliği",
    href: "/yaptiklarimiz",
  },
  {
    org: "PUBG Mobile — PMGC 2023 Dünya Finali",
    work: "Ülker Arena sahne, LED ekran ve rigging prodüksiyonu",
    href: "/blog/pmgc-dunya-finali-sahne-arkasi",
  },
  {
    org: "TÜBİTAK",
    work: "TEKNOFEST Uzay Bilim Çadırı kurulumu",
    href: "/yaptiklarimiz",
  },
  {
    org: "Dicle Elektrik",
    work: "Batman lansmanı kurumsal etkinlik prodüksiyonu",
    href: "/yaptiklarimiz",
  },
  {
    org: "Sıfır Atık Festivali",
    work: "Ana sahne teknik prodüksiyonu",
    href: "/projeler/sifir-atik-festivali-ana-sahne-teknik-produksiyon",
  },
  {
    org: "SAHA 2026",
    work: "Dome çadır ve özel etkinlik alanı kurulumu",
    href: "/projeler/saha-2026-dome-cadir-kurulumu",
  },
  {
    org: "DicleFest Şanlıurfa",
    work: "Festival alanı, dome çadır ve LED ekran",
    href: "/projeler/diclefest-sanliurfa",
  },
  {
    org: "İstanbul Büyükşehir Belediyesi",
    work: "Amatör futbol kulüplerine destek programı töreni",
    href: "/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi",
  },
  {
    org: "Fişekhane",
    work: "PUBG Mobile Guinness Dünya Rekoru etkinliği",
    href: "/blog/fisekhane-pubg-guinness-rekoru",
  },
];

/**
 * Sema icin: sayfanin bahsettigi kurum ve isleri makine tarafindan okunabilir
 * kilar. `mentions` bilincli secildi — "musteri" iddiasi yerine "bu sayfa bu
 * kurumlardan ve islerden bahsediyor" demek, sema acisindan dogrulanabilir olani.
 */
export function buildClientReferenceMentions(siteUrl) {
  return CLIENT_REFERENCES.map((entry) => ({
    "@type": "CreativeWork",
    name: `${entry.org} — ${entry.work}`,
    url: `${siteUrl}${entry.href}`,
    about: { "@type": "Organization", name: entry.org },
  }));
}

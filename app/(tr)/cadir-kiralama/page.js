// app/(tr)/cadir-kiralama/page.jsx
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import VideoEmbed from "@/components/VideoEmbed.client";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import PaymentOptionsNote from "@/components/payments/PaymentOptionsNote";
import JsonLdScript from "@/components/seo/JsonLd";
import PageHero from "@/components/PageHero";
import GlossaryTermLinks from "@/components/seo/GlossaryTermLinks";
import { buildImageGallerySchema } from "@/lib/structuredData/imageGallery";
import { VIDEO_DURATIONS, getVideoEntities } from "@/lib/seo/projectVideoFacts";
import { WEBSITE_ID } from "@/lib/seo/schemaIds";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import RegionalCityLinks from "@/components/RegionalCityLinks";
import TentCalculatorCta from "@/components/TentCalculatorCta";
import ServiceDecisionGuide from "@/components/ServiceDecisionGuide.client";
import { SERVICE_DECISION_GUIDES } from "@/lib/serviceDecisionGuides";
import {
  UNIT_PRICES,
  TENT_PACKAGE_PRICES,
  formatTRY,
  buildTentPriceSentence,
} from "@/lib/pricing";
import { 
  Monitor, 
  MessageCircle, 
  CheckCircle, 
  Eye, 
  Layers, 
  Users,
  Music,
  Phone
} from "lucide-react";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { buildAlternatesForPath } from "@/lib/seo/alternates";
import { CONTENT_CLUSTERS } from "@/lib/seo/contentClusters";

/* ================== Sabitler ================== */
export const revalidate = 86400;
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");
const ORIGIN = SITE_URL;
const ORGANIZATION_ID = `${SITE_URL}/#org`;
const PHONE = "+905453048671";
const PHONE_DISPLAY = "+90 545 304 86 71";
const WA_TEXT =
  "Merhaba, çadır kiralama için teklif istiyorum. Etkinlik türü: [düğün/fuar/konser], Tarih: [gg.aa.yyyy], Kişi sayısı: [xxx].";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(WA_TEXT)}`;

// Sayfa kahramanında gerçek saha kurulumunu gösteren yüksek çözünürlüklü görsel
// kullanılıyor. Paylaşım görseli aşağıdaki ayrı JPEG varlığı olarak kalır.
const HERO_IMAGE_WIDTH = 1536;
const HERO_IMAGE_HEIGHT = 1024;

// Paylasim onizlemesi icin ayri asset: WhatsApp ve LinkedIn WebP og:image
// render etmiyor, bu yuzden hero'nun 1200x630 JPEG kopyasi kullaniliyor.
// Sayfa ici gorseller WebP kalmaya devam ediyor.
const OG_IMAGE = `${SITE_URL}/img/cadir/og-cadir-kiralama.jpg`;
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;
const OG_IMAGE_ALT =
  "Sahneva çadır kiralama - büyük açıklıklı etkinlik çadırının vinçle kurulumu ve yanındaki pagoda çadırlar";

// Base64 blur placeholder (LCP hero için)
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== Dinamik Bileşenler ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => <GalleryFallbackCards />,
});

export const metadata = {
  title: "Çadır Kiralama | Pagoda, Şeffaf ve Büyük Çadır",
  description:
    "Pagoda, şeffaf ve büyük açıklıklı çadır kiralama çözümleri. Düğün, fuar, festival, lansman ve kurumsal etkinlikler için Türkiye geneli kurulum.",
  alternates: buildAlternatesForPath("/cadir-kiralama"),
  openGraph: {
    title: "Çadır Kiralama | Profesyonel Etkinlik Çözümleri",
    description:
      "Pagoda, şeffaf ve büyük açıklıklı çadır kiralama çözümleri. Düğün, fuar, festival, lansman ve kurumsal etkinlikler için Türkiye geneli kurulum.",
    url: `${ORIGIN}/cadir-kiralama`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: OG_IMAGE,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        type: "image/jpeg",
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Çadır Kiralama | Profesyonel Etkinlik Çözümleri",
    description:
      "Düğün, fuar, konser ve özel etkinlikler için profesyonel çadır kiralama çözümleri.",
    images: [
      {
        url: OG_IMAGE,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  robots: AI_PREVIEW_ROBOTS,
};

/* ================== Yardımcılar & Sabitler ================== */
const HERO = {
  src: "/img/cadir/sahneva-cadir-kurulumu.webp",
  alt: "Büyük açıklıklı etkinlik çadırının vinçle kurulumu ve sahadaki pagoda çadırlar",
  sizes: "100vw",
};

const PAGE_SECTIONS = [
  { href: "#hizmetler", label: "Çadır tipleri" },
  { href: "#galeri", label: "Gerçek kurulumlar" },
  { href: "#fiyatlar", label: "Fiyatlar" },
  { href: "#stok-kapasitesi", label: "Stok ve kapasite" },
  { href: "#guvenlik-standartlari", label: "Güvenlik standardı" },
  { href: "#planlama-araclari", label: "Planlama araçları" },
  { href: "#sss", label: "Sık sorulanlar" },
];

const TURNKEY_FEATURES = [
  "Zemin tipine uygun profesyonel ankraj ve sabitleme çözümleri",
  "İhtiyaca göre klima, ısıtıcı ve hava yönetimi",
  "Proje bazlı zemin kaplama, internet ve enerji altyapısı",
  "Uçtan uca saha yönetimi ve güvenli kurulum koordinasyonu",
];

const VIDEO_EMBEDS = [
  {
    videoId: "tyb1lG9KtiA",
    title: "Kurulum Videosu • 00:10",
    uploadDate: "2025-11-17T00:00:00+03:00",
    description:
      "Güvenli sabitleme, doğru ekipman ve deneyimli ekip ile hızlı ve kontrollü kurulum.",
  },
  {
    videoId: "_9Q7v0ZL304",
    title: "Teknofest Çadır İç Görünüm • Sahne & Teknik Kurulum",
    uploadDate: "2025-11-17T00:00:00+03:00",
    description:
      "Teknofest’te kurduğumuz çadırın iç görünümü; sahne, LED ekran, ses, ışık ve güç dağıtım entegrasyonu.",
  },
];

// Not: cadir-saha-3 ve cadir-saha-9 karelerinde sosyal medya filigrani/arayuz izi
// bulunduğu icin galeriden cikarildi; cadir-saha-5 ayni sahanin temiz cekimi.
// Dome kareleri (SAHA 2026, DicleFest, blog dome gorselleri) bilincli olarak
// burada degil; dome ayri bir hizmet ve /dome-cadir-kiralama sayfasinda anlatiliyor.
const GALLERY_IMAGES = [
  { src: "/img/galeri/cadir-kiralama-15.webp", alt: "Şeffaf çadırın gece iç görünümü: aydınlatılmış ağaçlar ve hazırlanan davet alanı" },
  { src: "/img/cadir/cadir-saha-1.webp", alt: "Deniz kenarındaki fuar alanında büyük açıklıklı çadır ve pagoda çadır sırası" },
  { src: "/img/galeri/cadir-kiralama-7.webp", alt: "Çadır içinde tören düzeni: sahne, iki LED ekran ve yüzlerce beyaz sandalye" },
  { src: "/img/cadir/cadir-saha-6.webp", alt: "Beton saha üzerinde kolonsuz kurulan büyük açıklıklı çadır; iç hacimde dikme yok" },
  { src: "/img/galeri/cadir-kiralama-8.webp", alt: "Havuz çevresinde davet düzeniyle hazırlanan pagoda çadırlar" },
  { src: "/img/cadir/sahneva-cadir-kurulumu.webp", alt: "Büyük açıklıklı çadırın vinçle kurulumu, yanında pagoda çadırlar" },
  { src: "/img/cadir/seffaf.webp", alt: "Gece aydınlatmalı şeffaf çadır kurulumu, otel bahçesinde davet alanı" },
  { src: "/img/galeri/cadir-kiralama-6.webp", alt: "Otel bahçesinde havuz başına kurulan büyük etkinlik çadırı" },
  { src: "/img/cadir/cadir-liman-etkinlik-alani.webp", alt: "Liman sahasında kurulan yan duvarsız büyük açıklıklı etkinlik çadırı" },
  { src: "/img/galeri/cadir-kiralama-12.webp", alt: "Havadan festival alanı: etkinlik çadırı, oyun alanı ve karşılama aksı" },
  { src: "/img/cadir/cadir-kitap-fuari-karsilama.webp", alt: "Kitap ve kültür fuarı için cami avlusuna kurulan çadır ve karşılama girişi" },
  { src: "/img/galeri/cadir-kiralama-9.webp", alt: "Havadan görünüm: şeffaf pencereli yan duvarlarıyla uzun büyük açıklıklı çadır" },
  { src: "/img/galeri/cadir-kiralama-5.webp", alt: "Kurulum aşamasında çadır iskeleti ve arkasında sıralanmış pagoda çadırlar" },
  { src: "/img/cadir/buyuk-olcekli-cadir-kurulumu.webp", alt: "Boş sahada büyük açıklıklı çadır iskeletinin vinçle kurulması; açıklığın altı boş" },
  { src: "/img/cadir/cadir-saha-7.webp", alt: "Fuar çadırının iç görünümü: stant sıraları ve geniş açıklıklı taşıyıcı yapı" },
  { src: "/img/cadir/2.webp", alt: "Çadır içinde kurulan sahne, LED ekran ve oturma alanı düzeni" },
  { src: "/img/cadir/cadir-saha-8.webp", alt: "Meydanda kurulmuş yan duvarsız büyük açıklıklı çadır gölgeliği" },
  { src: "/img/cadir/cadir-uzun-gecis-golgeligi.webp", alt: "Bina önüne kurulan uzun geçiş gölgeliği çadırı" },
];

const GALLERY_FALLBACK_CARDS = [
  { src: "/img/galeri/cadir-kiralama-15.webp", title: "Şeffaf Davet Çadırı", alt: "Şeffaf çadırın gece iç görünümü" },
  { src: "/img/cadir/cadir-saha-1.webp", title: "Fuar Alanı Kurulumu", alt: "Deniz kenarındaki fuar alanında büyük çadır ve pagoda çadırlar" },
  { src: "/img/galeri/cadir-kiralama-7.webp", title: "Tören ve Protokol Düzeni", alt: "Çadır içinde sahne, LED ekran ve sandalye düzeni" },
  { src: "/img/cadir/cadir-saha-6.webp", title: "Kolonsuz Büyük Açıklık", alt: "Beton saha üzerinde kolonsuz kurulan büyük açıklıklı çadır" },
];

const FAQ_ITEMS = [
  {
    q: "Çadır kiralama fiyatları ne kadar?",
    a: buildTentPriceSentence(),
  },
  {
    q: "Çadır kurulumu ne kadar sürer?",
    a: "3x3, 4x4 ve 5x5 pagoda çadır kurulumları çoğu projede birkaç saat içinde tamamlanır. Büyük açıklıklı fuar, festival ve kurumsal çadır projelerinde kurulum genellikle etkinlikten 1 gün önce planlanır.",
  },
  {
    q: "Çadırlar kötü hava koşullarına dayanıklı mı?",
    a: "Çadır kurulumlarında zemin, açıklık, sabitleme yöntemi ve hava koşulları birlikte değerlendirilir. Uygun projelerde alüminyum taşıyıcı sistem, UV dayanımlı branda, profesyonel ağırlıklandırma ve su tahliye planı birlikte uygulanır.",
  },
  {
    q: "Kadıköy, Şişli, Beşiktaş gibi merkezi yerlerde acil çadır kurulumu yapıyor musunuz?",
    a: "Evet. İstanbul Avrupa ve Anadolu yakasındaki ekip planlamamızla merkezi ilçelere aynı gün veya planlı kurulum desteği sağlayabiliyoruz. Net süre; tarih, ölçü, zemin ve ekip yoğunluğuna göre belirlenir.",
  },
  {
    q: "Kocaeli, Bursa, Tekirdağ gibi çevre illere kiralama ve nakliye süreçleri nasıl işliyor?",
    a: "Marmara Bölgesi ve çevre illere kendi lojistik ağımızla hizmet veriyoruz. Uzaklık bazlı nakliye maliyetini ilk teklifte şeffaf olarak iletiyor, konaklama veya sürpriz masraf çıkarmadan anahtar teslim kurulum yapıyoruz.",
  },
  {
    q: "Çadır kiralama fiyatına neler dahildir?",
    a: "Standart fiyatlara çadır ekipmanı, kurulum ve söküm işçiliği dahildir. Nakliye, zemin kaplama, iklimlendirme, aydınlatma, masa-sandalye ve uzun süreli saha desteği proje kapsamına göre ayrıca fiyatlandırılır.",
  },
  {
    q: "Çadır kurulumunda zemin zarar görür mü?",
    a: "Zemin türüne göre ağırlıklandırma, ankraj, çelik ağırlık veya uygun sabitleme yöntemi seçilir. Çim, beton, asfalt ve hassas yüzeylerde zemine zarar vermemek için keşif sonrası kontrollü kurulum planı hazırlanır.",
  },
  {
    q: "Şeffaf çadır ile pagoda çadır arasındaki fark nedir?",
    a: "Pagoda çadırlar fuaye, karşılama, VIP alan ve küçük etkinliklerde hızlı ve modüler çözüm sağlar. Şeffaf çadırlar ise kır düğünü, lansman ve premium davetlerde manzarayı koruyan daha atmosferik bir alan oluşturur.",
  },
  {
    q: "Büyük çadırlarda iklimlendirme yapılabilir mi?",
    a: "Evet. Büyük çadır projelerinde klima, ısıtıcı, hava sirkülasyonu ve güç dağıtım planı ihtiyaçlara göre proje bazında hazırlanabilir.",
  },
  {
    q: "Açık hava etkinliklerinde çadır güvenliği nasıl sağlanır?",
    a: "Rüzgâr dayanımı, B1 alev yürütmez branda, profesyonel ankraj, ağırlıklandırma, yağmur oluğu ve su tahliye planı birlikte değerlendirilir. Etkinlik öncesi bağlantılar ve sabitleme noktaları kontrol edilir.",
  },
  {
    q: "Belediye ve kurumsal etkinlikler için kaç gün önceden planlama gerekir?",
    a: "Küçük pagoda kurulumları için birkaç gün yeterli olabilir. Fuar, festival, belediye etkinliği ve büyük çadır projelerinde keşif, lojistik, zemin ve güvenlik planı için en az 7-10 gün önceden brief paylaşılması önerilir.",
  },
];

const PRICING_ITEMS = [
  // amount/unitCode alanlari yalnizca semada kullanilir; gorunen metin `price`.
  // Onceden fiyat sadece serbest metindi ve arama motorlari icin okunamiyordu.
  {
    title: "3x3 Çadır",
    price: `${formatTRY(TENT_PACKAGE_PRICES["3x3"])} TL`,
    amount: TENT_PACKAGE_PRICES["3x3"],
    description: "Karşılama, kayıt masası ve kompakt stand alanları için 9 m² hızlı kurulum.",
  },
  {
    title: "4x4 Çadır",
    price: `${formatTRY(TENT_PACKAGE_PRICES["4x4"])} TL`,
    amount: TENT_PACKAGE_PRICES["4x4"],
    description: "Fuaye, ikram, küçük satış alanı ve orta ölçekli etkinlik noktaları için 16 m².",
  },
  {
    title: "5x5 Çadır",
    price: `${formatTRY(TENT_PACKAGE_PRICES["5x5"])} TL`,
    amount: TENT_PACKAGE_PRICES["5x5"],
    description: "VIP alan, lansman, kır daveti ve yüksek görünürlüklü pagoda çadır paketi.",
  },
  {
    title: "6x6 Çadır",
    price: `${formatTRY(TENT_PACKAGE_PRICES["6x6"])} TL`,
    amount: TENT_PACKAGE_PRICES["6x6"],
    description: "Geniş fuaye, yemek alanı ve çok masalı düzenler için 36 m² pagoda çadır.",
  },
  {
    title: "Büyük Çadırlar",
    price: `${UNIT_PRICES.tentSqm} TL / m²`,
    amount: UNIT_PRICES.tentSqm,
    unitCode: "MTK",
    unitText: "m²",
    description: "Fuar, festival, belediye etkinliği ve büyük ölçekli açık alan projeleri için geniş açıklıklı çözüm.",
  },
];

const TENT_SELECTOR_CARDS = [
  {
    title: "Pagoda Çadır Kiralama",
    badge: "Karşılama ve fuaye",
    img: "/img/galeri/cadir-kiralama-8.webp",
    imgAlt: "Havuz çevresinde yemekli davet düzeniyle hazırlanan pagoda çadırlar",
    usage: "Karşılama, fuaye, VIP alan, küçük etkinlik ve kayıt noktası",
    sizing: "3x3, 4x4 ve 5x5 modüllerle alan ihtiyacına göre büyür.",
    advantage: "Hızlı kurulur, kurumsal görünür ve yan yana çoğaltılabilir.",
  },
  {
    title: "Şeffaf Çadır Kiralama",
    badge: "Premium davet",
    img: "/img/cadir/seffaf.webp",
    imgAlt: "Gece aydınlatmalı şeffaf çadır kurulumu, otel bahçesinde davet alanı",
    usage: "Kır düğünü, premium davet, lansman ve manzaralı açık alan",
    sizing: "Manzara, masa düzeni, ışık ve giriş aksına göre planlanır.",
    advantage: "Mekan hissini kapatmadan hava koşullarına karşı kontrollü alan sağlar.",
  },
  {
    title: "Büyük Açıklıklı Çadır Kiralama",
    badge: "Fuar ve festival",
    img: "/img/cadir/cadir-saha-1.webp",
    imgAlt: "Fuar alanında kurulmuş büyük açıklıklı çadır ve yanındaki pagoda çadırlar",
    usage: "Fuar, festival, belediye etkinliği, yemek ve protokol alanı",
    sizing: "10, 20, 30 ve 40 m açıklık seçenekleriyle projelendirilir.",
    advantage: "Kolonsuz geniş alan, kontrollü giriş-çıkış ve teknik entegrasyon sağlar.",
  },
];

const TENT_STOCK = [
  {
    title: "3x3 Pagoda Çadır",
    capacity: "120 adet",
    typeLabel: "Adet stok",
    group: "Pagoda çadır stokları",
    description: "Karşılama, kayıt, satış noktası, küçük tanıtım alanı ve VIP destek alanları için hızlı kurulum çözümü.",
  },
  {
    title: "4x4 Pagoda Çadır",
    capacity: "140 adet",
    typeLabel: "Adet stok",
    group: "Pagoda çadır stokları",
    description: "Fuaye, ikram, bilgilendirme, festival destek alanı ve açık hava etkinliklerinde modüler kullanım.",
  },
  {
    title: "5x5 Pagoda Çadır",
    capacity: "110 adet",
    typeLabel: "Adet stok",
    group: "Pagoda çadır stokları",
    description: "Kurumsal etkinlik, belediye organizasyonu, fuar, festival ve geniş etkinlik alanları için güçlü pagoda çözümü.",
  },
  {
    title: "20 m Açıklıklı Çadır",
    capacity: "4.000 m²",
    typeLabel: "Kurulum kapasitesi",
    group: "Büyük açıklıklı çadır sistemleri",
    description: "Orta ve büyük ölçekli etkinlikler, fuar alanları, yemek alanları, sergi ve korunaklı etkinlik alanı ihtiyaçları.",
  },
  {
    title: "30 m Açıklıklı Çadır",
    capacity: "2.000 m²",
    typeLabel: "Kurulum kapasitesi",
    group: "Büyük açıklıklı çadır sistemleri",
    description: "Geniş katılımlı kurumsal organizasyonlar, festival alanları ve büyük etkinlik çadırı çözümleri.",
  },
  {
    title: "40 m Açıklıklı Çadır",
    capacity: "5.000 m²",
    typeLabel: "Kurulum kapasitesi",
    group: "Büyük açıklıklı çadır sistemleri",
    description: "Büyük fuar, festival, konser ve belediye etkinliği projeleri için yüksek kapasiteli çözüm.",
  },
];

const STANDARDS = [
  {
    // Deger uretici teknik foyunden alindi. Onceki "650 gr/m²" ifadesi foyle
    // ortusmuyordu; yuvarlanmis degeri "yaklasik" olmadan yazmak sozlesmede
    // taahhut sayilir.
    feature: "Branda Gramajı",
    standard: "Yaklaşık 630 gr/m² UV dayanımlı branda",
    detail: "Üretici teknik föyünde belirtilen değer. Güneş, yağmur ve yoğun kullanıma karşı profesyonel dış mekan standardı.",
  },
  {
    feature: "Yangın Sınıfı",
    standard: "B1 alev yürütmez malzeme",
    detail: "Kurumsal, fuar ve belediye etkinliklerinde güvenlik beklentisini destekler.",
  },
  {
    feature: "Rüzgâr Kontrolü",
    standard: "Proje bazlı rüzgâr ve zemin değerlendirmesi",
    detail: "Açık hava kurulumlarında zemin, açıklık, sabitleme ve hava durumu birlikte değerlendirilir.",
  },
  {
    feature: "Sabitleme",
    standard: "Profesyonel ankraj ve ağırlıklandırma",
    detail: "Beton, çim, asfalt ve hassas zeminlere uygun sabitleme yöntemi seçilir.",
  },
  {
    feature: "Su Tahliye",
    standard: "Yağmur oluğu ve su tahliye planı",
    detail: "Çadır çevresi, giriş aksı ve eğim durumuna göre kontrollü tahliye planlanır.",
  },
  {
    feature: "Zemin Kontrolü",
    standard: "Zemin türüne göre sabitleme",
    detail: "Kot farkı, yüzey hassasiyeti ve yük dağılımı saha keşfinde netleştirilir.",
  },
];

/* ---------- Sistem ve Standart ---------- */
// KAYNAK: Eschenbach montaj cizim paketi "AHA 31 (30, 25, 20)/4-C — EN 13782 —
// Rev. 04", Index g (02.12.2021), Eschenbach-Nr. 0092-00. Genel gorunus
// paftalari 11221-4 / 11223-4 / 11225-4 / 11227-3.
//
// Paftalardan birebir okunan degerler (4,00 m sacak / "C" varyanti):
//   AHA 20 -> aciklik 20.000 mm, mahya 7.249 mm, 3 alin diregi
//   AHA 25 -> aciklik 25.000 mm, mahya 8.061 mm, 4 alin diregi
//   AHA 30 -> aciklik 30.000 mm, mahya 8.874 mm, 5 alin diregi
//   AHA 31 -> aciklik 31.000 mm, mahya 9.036 mm, 5 alin diregi
// Sitedeki "30'luk" = AHA 30 (isletme teyidi, 16.08.2026).
//
// 40 m sutunu bu cizim paketinde YOK; ayri bir sistem ve statigi ayri
// (isletme teyidi). Degerleri gorev dosyasindan geliyor, kendi statigi elde
// edilince dogrulanmali.
const SPAN_SYSTEM_COLUMNS = ["20 m", "30 m", "40 m"];

const SPAN_SYSTEM_SPECS = [
  { label: "Açıklık (kolonsuz)", values: ["20,00 m", "30,00 m", "40,00 m"] },
  { label: "Saçak yüksekliği", values: ["4,00 m", "4,00 m", "4,00 m"] },
  { label: "Mahya (tepe) yüksekliği", values: ["7,25 m", "8,87 m", "10,50 m"] },
  { label: "Çatı eğimi", values: ["18°", "18°", "18°"] },
  { label: "Modül aralığı", values: ["5,00 m", "5,00 m", "5,00 m"] },
  { label: "Alın direği sayısı", values: ["3", "5", "7"] },
  { label: "Modül başına alan", values: ["100 m²", "150 m²", "200 m²"] },
  { label: "Sistem ağırlığı", values: ["15 kg/m²", "15 kg/m²", "15 kg/m²"] },
];

// Buyuk aciklikli sistemlerde birim fiyat ortak (m² bazli). Katalogda yine de
// her aciklik ayri kalem: alici "40 m acikliginiz var mi" diye ariyor, tek bir
// "Buyuk Cadirlar" kalemi bu soruya cevap vermiyor.
const SPAN_OFFER_ITEMS = SPAN_SYSTEM_COLUMNS.map((span) => ({
  title: `${span} Açıklıklı Çadır`,
  price: `${UNIT_PRICES.tentSqm} TL / m²`,
  amount: UNIT_PRICES.tentSqm,
  unitCode: "MTK",
  unitText: "m²",
  description: `Kolonsuz ${span} açıklık, 4,00 m saçak yüksekliği ve 5,00 m modül aralığıyla kurulan büyük açıklıklı çadır sistemi.`,
}));

// Malzeme ve imalat verileri Eschenbach montaj cizim paketinden (Index g,
// 02.12.2021) alindi. Bu satirlar "kaliteli malzeme kullaniyoruz" cumlesinin
// dogrulanabilir hali — alasim, imalat sinifi ve kaynak muayenesi yazili.
const MATERIAL_SPECS = [
  {
    label: "Taşıyıcı profiller",
    value: "EN AW-6082 T5 alüminyum",
    detail:
      "Ana taşıyıcıda 270×100×7×4 mm, ara profillerde 235×100 mm, bağlantı profillerinde 95×95 ve 60×60 mm kesitler kullanılır.",
  },
  {
    label: "Köşe ve mahya çubukları",
    value: "S235JRG2 çelik boru",
    detail: "Ø48,3×5,6 mm ve Ø60,3×4 mm kesitli çelik borular; açıklığa göre seçilir.",
  },
  {
    label: "Çatı ve duvar çaprazı",
    value: "Ø12 mm çelik halat",
    detail: "M20 gergi (liftbox) ile gerdirilir; yapının yatay yük taşıma kurgusunu tamamlar.",
  },
  {
    label: "İmalat sınıfı",
    value: "EXC 2 — DIN EN 1090-2",
    detail:
      "Taşıyıcı çelik imalatı bu sınıfın gerekliliklerini karşılar; kaynakların tamamına %100 gözle muayene (VT) uygulanır.",
  },
];

const ANCHORING_METHODS = [
  {
    surface: "Toprak ve çim",
    method: "Kazık ankrajı",
    detail:
      "Ø30 mm S235JR çelik kazıklar; kolon tipine göre ayak başına 4 ila 6 adet, 1.000–1.200 mm boyunda. Kazık çakılmadan önce yeraltı altyapısı sorgulanır.",
  },
  {
    surface: "Parke, beton, asfalt",
    method: "Su tankı balastı",
    detail:
      "Kolon diplerine su dolu IBC tankları yerleştirilir. Sahada su temini ve çadır çevresinde tankların oturacağı ek alan gerekir.",
  },
  {
    surface: "Spor sahası, parkur, hassas yüzey",
    method: "Beton blok balast",
    detail:
      "Yüzeye delik açılmadan ağırlık uygulanır. Nakliye yükü en yüksek yöntemdir; blok sayısı ve sevkiyat planı teklifte ayrıca gösterilir.",
  },
];

const INSTALLATION_STEPS = [
  { title: "Keşif", description: "Lazer ölçümleme ve zemin analizi." },
  {
    title: "Projelendirme",
    description: "İhtiyaca uygun çadır tipi, ankraj ve yerleşim planı.",
  },
  {
    title: "Hızlı Montaj",
    description: "Boş alanın güvenli ve kullanıma hazır etkinlik alanına dönüştürülmesi.",
  },
  {
    title: "Teknik Destek",
    description: "Etkinlik boyunca sahada güvenliği sağlayan uzman ekip.",
  },
];

const USE_CASES = [
  {
    icon: "💍",
    text: "Düğün çadırı kiralama",
    desc: "Şeffaf çadır, pagoda çadır, zemin kaplama ve atmosfer aydınlatmasıyla kır düğünü ve özel davet için kontrollü alan.",
  },
  {
    icon: "🎪",
    text: "Fuar çadırı kiralama",
    desc: "Marka standları, ziyaretçi akışı ve ürün sergileme için geniş açıklıklı fuar ve sergi etkinlik çadırı.",
  },
  {
    icon: "🎤",
    text: "Konser ve festival çadırı kiralama",
    desc: "Kulis, sağlık, teknik ekip ve izleyici destek alanları için hızlı kurulabilen açık hava etkinlik çadırı.",
  },
  {
    icon: "🏛️",
    text: "Belediye ve kurumsal etkinlik çadırı kiralama",
    desc: "Tören, iftar, lansman ve protokol etkinlikleri için güvenli, planlı ve marka uyumlu kiralık çadır kurulumu.",
  },
  {
    icon: "🏢",
    text: "Geçici etkinlik alanı çözümü",
    desc: "Yemek alanı, protokol bölümü, fuaye veya destek alanı için geniş açıklıklı sistem.",
  },
  {
    icon: "🏫",
    text: "Okul, mezuniyet ve kermes çadırı",
    desc: "Okul bahçesi, mezuniyet, kermes ve dönemsel etkinlikler için ekonomik ve hızlı kurulum.",
  },
];

const HERO_BADGES = [
  { title: "Saha keşfi", detail: "Ölçü ve zemin analizi" },
  { title: "Kendi ekibimiz", detail: "Kurulum ve saha desteği" },
  { title: "Türkiye geneli", detail: "Nakliye ilk teklifte net" },
];

const HERO_ACTIONS = [
  {
    key: "quote",
    label: "Hemen Teklif Al",
    href: WHATSAPP,
    external: true,
    ariaLabel: "WhatsApp üzerinden çadır kiralama teklifi alın",
  },
  {
    key: "call",
    label: PHONE_DISPLAY,
    href: `tel:${PHONE}`,
    ariaLabel: "Sahneva'yı telefonla arayın",
  },
];

/* ================== HERO ================== */
function Hero() {
  return (
    <PageHero
      eyebrow="Etkinlik çadırı · Stok hazır · Türkiye geneli"
      title="Anahtar Teslim"
      titleAccent="Çadır Kiralama"
      description="Pagoda çadır, şeffaf çadır ve büyük açıklıklı sistemlerle zemin, iklimlendirme ve lojistiği tek elden planlıyoruz."
      note="İstanbul'da çadır kiralama ihtiyaçları ve Türkiye genelindeki projeler için ölçü, zemin ve hava koşullarına göre güvenli, şık ve anahtar teslim alanlar kuruyoruz."
      badges={HERO_BADGES.map((badge) => `${badge.title} · ${badge.detail}`)}
      actions={HERO_ACTIONS}
      image={{
        src: HERO.src,
        alt: HERO.alt,
        sizes: HERO.sizes,
        quality: 72,
        blurDataURL: BLUR_DATA_URL,
      }}
    />
  );
}
/* ================== Sayfa İçi Hızlı Geçiş ================== */
function SectionJumpNav() {
  return (
    <nav
      aria-label="Sayfa içi bölümler"
      className="border-b border-slate-200 bg-white"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <ul className="flex snap-x gap-2 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PAGE_SECTIONS.map((section) => (
            <li key={section.href} className="snap-start">
              <Link
                href={section.href}
                className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-5 text-sm font-black text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-200"
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function CompactDecisionGuide() {
  const guide = SERVICE_DECISION_GUIDES.tent;
  const questionCount = guide.questions.length;

  return (
    <section
      id="planlama-araclari"
      className="scroll-mt-24 bg-slate-50 px-4 py-10 md:py-14"
      aria-label="İsteğe bağlı çadır planlama araçları"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700">
            İsteğe bağlı planlama desteği
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
            Görselleri ve çadır tiplerini inceledikten sonra detayları daraltın
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Bu bölüm karar vermek için zorunlu değildir. Zemin, kullanım ve iç düzen
            bilgilerini teknik ekibe daha düzenli aktarmak isteyenler için hazırlandı.
          </p>
        </div>

        <details className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <summary className="flex cursor-pointer list-none flex-col gap-4 p-5 marker:content-none sm:flex-row sm:items-center sm:justify-between sm:p-7 [&::-webkit-details-marker]:hidden">
            <span className="max-w-3xl">
              <span className="block text-xs font-black uppercase tracking-[0.16em] text-violet-700">
                Teknik seçim rehberi
              </span>
              <span className="mt-2 block text-xl font-black leading-tight text-slate-950 sm:text-2xl">
                {questionCount} soruda çadır briefini netleştirin
              </span>
              <span className="mt-2 block text-sm leading-6 text-slate-600">
                Kullanım, ölçek, sabitleme, zemin ve iç kurgu seçimlerini tek bir başlangıç
                planında toplayın.
              </span>
            </span>
            <span className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-black text-white transition group-open:bg-violet-700">
              <span className="group-open:hidden">Rehberi aç</span>
              <span className="hidden group-open:inline">Rehberi kapat</span>
            </span>
          </summary>
          <div className="hidden border-t border-slate-200 group-open:block [&>section]:py-10">
            <ServiceDecisionGuide guide={guide} />
          </div>
        </details>
      </div>
    </section>
  );
}

/* ================== Çadır Tipi Karar Kartları ================== */
function TentSelectorSection() {
  return (
    <section
      id="hizmetler"
      className="scroll-mt-24 [content-visibility:auto] [contain-intrinsic-size:auto_1400px] lg:[contain-intrinsic-size:auto_760px] bg-white py-20"
      aria-labelledby="hizmetler-baslik"
    >
      <div className="container mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-block rounded-full bg-violet-100 px-4 py-1 text-xs font-black tracking-[1.5px] text-violet-700">
            DOĞRU ÇADIRI SEÇİN
          </div>
          <h2
            id="hizmetler-baslik"
            className="text-4xl font-black tracking-tight text-gray-950 md:text-5xl lg:text-6xl"
          >
            Hangi Çadır Size Uygun?
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-700 md:text-xl">
            Etkinlik çadırı kiralama kararında ölçü kadar kullanım amacı, zemin, hava koşulu,
            giriş-çıkış akışı ve teknik entegrasyon da belirleyicidir.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TENT_SELECTOR_CARDS.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_24px_70px_rgba(124, 58, 237,0.14)]"
            >
              {/* Fotoğraf üst alan */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.imgAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={78}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <span className="absolute bottom-3 left-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-white backdrop-blur-sm">
                  {item.badge}
                </span>
              </div>

              {/* İçerik alt alan */}
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-black tracking-tight text-gray-950">
                  {item.title}
                </h3>

                <dl className="mt-6 space-y-5 text-sm leading-6 text-gray-700">
                  <div>
                    <dt className="font-black text-gray-950">Önerilen kullanım</dt>
                    <dd className="mt-1">{item.usage}</dd>
                  </div>
                  <div>
                    <dt className="font-black text-gray-950">Ölçü mantığı</dt>
                    <dd className="mt-1">{item.sizing}</dd>
                  </div>
                  <div className="border-t border-slate-200 pt-5">
                    <dt className="font-black text-gray-950">Avantaj</dt>
                    <dd className="mt-1">{item.advantage}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>

        {/* Dome bu sayfadan cikarildi; koprude tek cumleyle ayri hizmete
            yonlendiriliyor. Burada dome anlatmak iki sayfayi yeniden
            yamyamlastirir. */}
        <p className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 text-base leading-7 text-slate-700">
          360° mapping, deneyim alanı ve konsept stant kurguları için dome çadır ayrı bir
          çözümdür —{" "}
          <Link
            href="/dome-cadir-kiralama"
            className="font-black text-violet-700 underline underline-offset-4 hover:text-violet-800"
          >
            dome çadır kiralama
          </Link>{" "}
          sayfasına bakabilirsiniz.
        </p>

        <div className="mt-6 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base leading-7 text-slate-700">
            Hangi tipin uygun olduğundan emin değilseniz ölçü, tarih ve zemin bilgisini
            paylaşın; çadır tipini ve yerleşim planını birlikte netleştirelim.
          </p>
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-2xl bg-violet-700 px-7 py-3 font-black text-white shadow-lg transition hover:bg-violet-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-200"
          >
            Uygun çadır tipini sorun
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Çadır Stok ve Kapasite ================== */
function TentStockSection() {
  return (
    <section
      id="stok-kapasitesi"
      className="scroll-mt-24 [content-visibility:auto] [contain-intrinsic-size:auto_1800px] md:[contain-intrinsic-size:auto_1300px] lg:[contain-intrinsic-size:auto_940px] relative overflow-hidden bg-[#040817] py-20 text-white"
      aria-labelledby="stok-kapasitesi-baslik"
    >
      <div
        className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-[-10rem] top-8 h-80 w-80 rounded-full bg-[#4c1d95]/25 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-[#0f172a]/40 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.35fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-violet-300">
              Stok ve büyük ölçek gücü
            </p>
            <h2
              id="stok-kapasitesi-baslik"
              className="mt-4 text-4xl font-black leading-tight md:text-5xl"
            >
              Çadır Stok ve Kurulum Kapasitesi
            </h2>
            <div className="mt-6 space-y-5 rounded-3xl border border-white/[0.14] bg-slate-950/55 p-5 text-base leading-8 text-slate-100 shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-md md:p-6 md:text-lg">
              <p>
                Sahneva, İstanbul ve Türkiye genelindeki farklı ölçeklerdeki etkinlik çadırı kiralama
                ihtiyaçları için güçlü stok ve kurulum kapasitesiyle hizmet verir. 3x3, 4x4 ve 5x5 pagoda
                çadır stoklarının yanı sıra 20 m, 30 m ve 40 m açıklıklı büyük çadır
                sistemleriyle fuar, festival, belediye etkinliği, kurumsal organizasyon
                ve açık hava daveti projeleri için anahtar teslim kurulum yapılabilir.
              </p>
              <p>
                Stok yapımız; 120 adet 3x3 pagoda çadır, 140 adet 4x4 pagoda çadır
                ve 110 adet 5x5 pagoda çadırdan oluşan modüler çözümlerle küçük
                ve orta ölçekli etkinliklere hızlı cevap verebilir. Büyük ölçekli
                projelerde ise 20 metre açıklıklı çadırlarda 4.000 m², 30 metre
                açıklıklı çadırlarda 2.000 m² ve 40 metre açıklıklı çadırlarda 5.000 m²
                kurulum kapasitesiyle geniş alan ihtiyaçlarına çözüm sunulur.
                Bu değerler elimizdeki stok adedini gösterir, tek bir çadırın ölçüsünü
                değil; açıklık büyüdükçe kurulabilir toplam alan otomatik olarak artmaz.
              </p>
              <p>
                Çadır kurulumları yalnızca branda ve taşıyıcı sistem olarak ele alınmaz.
                Zemin kaplama, halı, aydınlatma, iklimlendirme, masa-sandalye,{" "}
                <Link href="/sahne-kiralama" className="font-black text-white underline underline-offset-4">
                  sahne
                </Link>
                ,{" "}
                <Link href="/podyum-kiralama" className="font-black text-white underline underline-offset-4">
                  podyum
                </Link>
                ,{" "}
                <Link href="/led-ekran-kiralama" className="font-black text-white underline underline-offset-4">
                  LED ekran
                </Link>
                ,{" "}
                <Link href="/ses-isik-sistemleri" className="font-black text-white underline underline-offset-4">
                  ses ve ışık sistemleri
                </Link>{" "}
                gibi tamamlayıcı ihtiyaçlar da proje kapsamında birlikte planlanabilir.
              </p>
            </div>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {TENT_STOCK.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/[0.14] bg-white/[0.08] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur-md"
                >
                  <p className="text-xs font-black uppercase tracking-widest text-violet-300">
                    {item.group}
                  </p>
                  <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
                  <div className="mt-5">
                    <div className="text-4xl font-black leading-none text-white">
                      {item.capacity}
                    </div>
                    <div className="mt-2 text-sm font-bold text-violet-200/80">
                      {item.typeLabel}
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-violet-50/[0.76]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            {/* 30 m kapasitesinin 20 m'den dusuk olmasi okuyanda tereddut
                yaratiyordu; rakam envanter gercegi, aciklamasi kartlarin
                altinda duruyor. */}
            <p className="mt-5 rounded-3xl border border-white/[0.14] bg-slate-950/50 p-5 text-sm leading-7 text-violet-50/[0.78] backdrop-blur-md">
              <strong className="font-black text-white">Kapasite nasıl okunur:</strong>{" "}
              Büyük açıklıklı sistemlerde yazan metrekare, o açıklıkta elimizde bulunan
              toplam stok alanıdır. Açıklık büyüdükçe kurulabilir alan artmaz; her ölçünün
              stok adedi birbirinden bağımsızdır. Bir projede tek seferde kurulabilecek
              alan, seçilen açıklığın stoğuyla sınırlıdır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== Anahtar Teslim Altyapı ================== */
function TurnkeyInfrastructure() {
  return (
    <section
      id="teknik-altyapi"
      className="py-16 bg-white"
      aria-labelledby="teknik-altyapi-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-violet-50 via-white to-purple-50 rounded-3xl border border-violet-100 p-8 md:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1">
              <p className="text-sm font-bold uppercase tracking-widest text-violet-600 mb-3">
                Anahtar Teslim Kurulum Gücü
              </p>
              <h2
                id="teknik-altyapi-baslik"
                className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
              >
                “Sıfırdan Kurulum” Odaklı Anahtar Teslim Çadır Altyapısı
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Sadece çadır kiralama değil; iklimlendirme, zemin kaplama ve enerji sistemleriyle
                <strong className="text-gray-900"> uçtan uca saha yönetimi </strong> sunuyoruz.
              </p>
              <ul className="space-y-3 text-gray-700">
                {TURNKEY_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-3xl w-full lg:max-w-xs shadow-xl">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/img/cadir/sahneva-cadir-kurulumu.webp"
                  alt="Büyük açıklıklı çadırın vinçle kurulumu ve yanında hazırlanan pagoda çadırlar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover"
                  quality={80}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040817]/85 via-[#040817]/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-black uppercase tracking-widest text-violet-300 mb-2">Saha Kaydı</p>
                <p className="text-white font-black text-lg leading-snug mb-4">Kurulum sürecinden gerçek görüntü</p>
                <Link
                  href={WHATSAPP}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-violet-600 hover:bg-violet-500 px-6 py-3 font-bold text-white transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-600"
                >
                  Kurulum Planı İsteyin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryFallbackCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" role="status" aria-label="Galeri yükleniyor">
      {GALLERY_FALLBACK_CARDS.map((item) => (
        <article
          key={item.title}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="relative aspect-[4/3] bg-slate-100">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
              quality={68}
              loading="lazy"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/[0.72] via-slate-950/10 to-transparent" />
            <h3 className="absolute bottom-4 left-4 right-4 text-lg font-black text-white">
              {item.title}
            </h3>
          </div>
        </article>
      ))}
      <span className="sr-only">Galeri görselleri yükleniyor.</span>
    </div>
  );
}

/* ================== Geliştirilmiş Galeri ================== */
function Gallery() {
  const SUCCESS_STORIES = [
    {
      title: "Teknofest Fuar Çadırı Kurulumu",
      category: "Kurumsal & Fuar Etkinliği",
      image: "/img/galeri/cadir-kiralama-7.webp",
      imageAlt: "Teknofest etkinlik çadırında sahne, LED ekran ve protokol oturma düzeni",
      transformation: "Açık fuar alanında büyük açıklıklı çadır, sahne ve teknik altyapı birlikte planlandı.",
      before: "Açık fuar alanında hava koşullarına uygun, geniş ve kontrollü bir etkinlik alanına ihtiyaç duyulması.",
      after: "Büyük açıklıklı çadır, LED ekran, sahne, ses-ışık ve güç dağıtımı aynı teknik planda kuruldu.",
      result: "Ziyaretçi akışı, teknik alan ve etkinlik içi kullanım daha kontrollü şekilde yönetildi.",
    },
    {
      title: "Sarıyer Şeffaf Kır Düğünü Çadırı",
      category: "Özel Davet & Düğün",
      image: "/img/galeri/cadir-kiralama-15.webp",
      imageAlt: "Gece aydınlatılan şeffaf davet çadırının iç kurulum görünümü",
      transformation: "Yağmur riski olan kır alanında manzarayı kapatmayan şeffaf çadır çözümü uygulandı.",
      before: "Orman içindeki düğünde yağmur riski bulunmasına rağmen, çiftin doğal manzarayı kapatmak istememesi.",
      after: "Şeffaf dome ve pagoda çadırlar kuruldu, iç mekan estetik LED aydınlatmalarla hazırlandı.",
      result: "Gece aydınlatmasıyla davet atmosferi güçlendirildi, alan kontrollü ve konforlu hale getirildi.",
    },
    {
      title: "Kocaeli Büyük Açıklıklı Çadır Kurulumu",
      category: "Kurumsal Etkinlik Alanı",
      image: "/img/cadir/cadir-saha-1.webp",
      imageAlt: "Sahil yakınındaki etkinlik alanında büyük açıklıklı çadırlar ve pagoda sırası",
      transformation: "Geniş açık alan, kısa sürede kullanıma hazır korunaklı etkinlik alanı olarak planlandı.",
      before: "Kocaeli projesinde geniş ve hızlı kurulabilir etkinlik alanı ihtiyacının ortaya çıkması.",
      after: "Geniş açıklıklı çadır sistemi, giriş-çıkış akışı ve zemin kullanımı dikkate alınarak kuruldu.",
      result: "Alan, etkinlik ihtiyacını karşılayacak şekilde kullanıma hazırlandı.",
    },
    {
      title: "Beşiktaş Kurumsal Lansman Çadırı",
      category: "Marka & Lansman",
      image: "/img/galeri/cadir-kiralama-8.webp",
      imageAlt: "Havuz çevresinde davet düzeniyle hazırlanan pagoda çadırlar",
      transformation: "Açık otel alanı, marka misafirlerini karşılayacak şık bir fuaye alanına dönüştürüldü.",
      before: "Lansman öncesi misafir karşılama alanı için otelin açık bölümünün estetik bir mekana çevrilme ihtiyacı.",
      after: "Sıralı 5x5 pagoda çadırlar kuruldu, zemin özel halı ile kaplandı ve alan uygun iklimlendirme desteğiyle hazırlandı.",
      result: "Misafir karşılama alanı, marka diliyle uyumlu ve konforlu bir düzene kavuştu.",
    },
  ];

  return (
    <section
      id="galeri"
      className="scroll-mt-24 [content-visibility:auto] [contain-intrinsic-size:auto_2600px] md:[contain-intrinsic-size:auto_1900px] lg:[contain-intrinsic-size:auto_1560px] bg-slate-50 py-16"
      aria-labelledby="galeri-baslik"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-violet-700">
              Saha kanıtı
            </p>
            <h2
              id="galeri-baslik"
              className="mt-3 text-3xl font-black leading-tight text-gray-950 md:text-5xl"
            >
              Referans, Görsel ve Video Kısa Vitrini
            </h2>
          </div>
          <p className="text-base leading-8 text-gray-700 md:text-lg">
            Etkinlik çadırı kiralama kararını hızlandıracak şekilde sadeleştirdik: öne çıkan
            uygulama özeti, gerçek saha görselleri ve iki kısa kurulum videosu aynı bölümde.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-5">
          <div className="mb-6 flex flex-col gap-4 px-2 pt-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-black text-gray-950 md:text-3xl">
                Gerçek saha görselleri
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 md:text-base">
                Davet, fuar, tören ve büyük açıklıklı kurulumlardan sekiz görünür örnek.
              </p>
            </div>
            <Link
              href="/projeler"
              className="inline-flex min-h-[44px] w-fit items-center justify-center rounded-full border border-violet-200 bg-violet-50 px-5 text-sm font-black text-violet-800 transition hover:bg-violet-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-200"
            >
              <Eye className="mr-2 h-4 w-4" aria-hidden="true" />
              Tüm projeler
            </Link>
          </div>
          <CaseGallery images={GALLERY_IMAGES} visibleCount={8} />
        </div>

        <div className="mt-14">
          <div className="mb-7 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700">
              Uygulama senaryoları
            </p>
            <h3 className="mt-3 text-2xl font-black text-gray-950 md:text-3xl">
              İhtiyaçtan kuruluma dört farklı saha örneği
            </h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {SUCCESS_STORIES.map((story, index) => (
              <article
                key={story.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_35px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_25px_70px_rgba(139,92,246,0.13)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    quality={75}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                    <span className="inline-flex rounded-full border border-white/20 bg-slate-950/45 px-4 py-2 text-xs font-black uppercase tracking-[0.08em] text-white backdrop-blur-md">
                      {story.category}
                    </span>
                    <span className="font-mono text-sm font-bold text-white/80">0{index + 1}</span>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <h4 className="text-2xl font-black leading-tight tracking-tight text-gray-950">
                    {story.title}
                  </h4>
                  <p className="mt-3 text-[15px] font-semibold leading-6 text-violet-700">
                    {story.transformation}
                  </p>

                  <dl className="mt-6 grid gap-5 border-t border-slate-100 pt-5 text-sm leading-6 text-gray-600 sm:grid-cols-2">
                    <div>
                      <dt className="text-xs font-black uppercase tracking-wider text-slate-700">
                        İhtiyaç
                      </dt>
                      <dd className="mt-1">{story.before}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-black uppercase tracking-wider text-slate-700">
                        Uygulama
                      </dt>
                      <dd className="mt-1">{story.after}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-xs font-black uppercase tracking-wider text-emerald-700">
                        Sonuç
                      </dt>
                      <dd className="mt-1 flex gap-2 text-gray-700">
                        <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                        <span>{story.result}</span>
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {VIDEO_EMBEDS.map((video) => (
            <article
              key={video.videoId}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              aria-labelledby={`video-${video.videoId}-title`}
            >
              <div className="relative aspect-video bg-black">
                <VideoEmbed
                  videoId={video.videoId}
                  title={video.title}
                  thumbnailUrl={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
                />
              </div>
              <div className="p-5">
                <h4
                  id={`video-${video.videoId}-title`}
                  className="text-lg font-black text-gray-950"
                >
                  {video.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {video.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-violet-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <h4 className="text-xl font-black text-gray-950">
              Daha fazla saha görseli için proje galerisini inceleyebilirsiniz.
            </h4>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Seçilmiş çadır kurulumları, etkinlik alanları ve tamamlanan projeler
              galeri sayfasında yer alır.
            </p>
          </div>
          <Link
            href="/projeler"
            className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-violet-700 px-7 py-3 font-black text-white shadow-lg transition hover:bg-violet-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-200"
          >
            Proje Galerisini Aç
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Fiyatlandırma ================== */
function PricingSection() {
  return (
    <section
      id="fiyatlar"
      className="scroll-mt-24 [content-visibility:auto] [contain-intrinsic-size:auto_1100px] md:[contain-intrinsic-size:auto_760px] py-16 bg-gradient-to-b from-slate-50 to-white"
      aria-labelledby="fiyatlar-baslik"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)]">
          <div className="relative bg-[#040817] px-6 py-8 text-white md:px-10">
            <div
              className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]"
              aria-hidden="true"
            />
            <div
              className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#4c1d95]/30 blur-[90px]"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-white/70">
                  NET BAŞLANGIÇ BEDELLERİ
                </p>
                <h2 id="fiyatlar-baslik" className="mt-3 text-3xl font-black md:text-5xl">
                  Çadır Kiralama Fiyatları 2026
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-white/75">
                Ölçü, tarih, şehir, zemin ve ek hizmetler paylaşıldığında nihai teklif
                aynı gün içinde netleştirilir.
              </p>
            </div>
          </div>

          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            {PRICING_ITEMS.map((item) => {
              const isPopular = item.title === "5x5 Çadır";
              return (
                <article
                  key={item.title}
                  className={`group relative border-t border-slate-200 p-7 md:border-l md:border-t-0 lg:p-8 first:md:border-l-0 transition-all duration-300 ${isPopular ? "bg-violet-50/60 ring-2 ring-violet-600/70 shadow-[0_15px_50px_rgba(124, 58, 237,0.15)] z-10" : "hover:bg-slate-50"}`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 right-6 rounded-full bg-violet-600 px-4 py-0.5 text-xs font-black tracking-widest text-white shadow">
                      EN ÇOK TERCİH EDİLEN
                    </div>
                  )}
                  <h3 className="text-[21px] font-black text-gray-950 tracking-tight">{item.title}</h3>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-[34px] font-black text-violet-700 tracking-tighter">{item.price}</span>
                    <span className="mb-1 text-sm font-semibold text-gray-500">+ nakliye</span>
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-gray-600 pr-2">{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="border-t border-slate-200 bg-violet-50/70 px-6 py-5 md:px-10">
            <p className="text-sm font-semibold leading-6 text-gray-700">
              Zemin kaplama, iklimlendirme, aydınlatma, masa-sandalye, şehir dışı
              lojistik ve uzun süreli kurulumlar proje bazlı fiyatlandırılır.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-green-700 px-8 py-4 font-black text-white shadow-lg transition hover:bg-green-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
          >
            <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
            Hemen Teklif Al
          </Link>
          <Link
            href="/cadir-kiralama#hizmetler"
            className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 font-black text-slate-900 shadow-sm transition hover:border-violet-300 hover:text-violet-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-200"
          >
            Çadır Tiplerini İncele
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Sahneva Standartları ================== */
function StandardsTable() {
  return (
    <section
      id="guvenlik-standartlari"
      className="scroll-mt-24 [content-visibility:auto] [contain-intrinsic-size:auto_1200px] lg:[contain-intrinsic-size:auto_720px] relative overflow-hidden bg-[#040817] py-20 text-white"
      aria-labelledby="sahneva-standartlari-baslik"
    >
      <div
        className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:46px_46px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-violet-400/[0.18] blur-[90px]"
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-black uppercase tracking-widest text-violet-200">
            Teknik güvenlik kontrolü
          </p>
          <h2
            id="sahneva-standartlari-baslik"
            className="mt-3 text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white"
          >
            Sahneva Güvenlik Standardı
          </h2>
          <p className="text-xl text-violet-50/[0.78] max-w-3xl mx-auto leading-relaxed">
            Çadır kiralama projelerinde güvenlik; malzeme, sabitleme, su tahliye
            ve zemin kontrolünün aynı planda yönetilmesiyle sağlanır.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STANDARDS.map((row) => (
            <article
              key={row.feature}
              className="rounded-3xl border border-white/[0.14] bg-white/[0.07] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md"
            >
              <p className="text-sm font-black uppercase tracking-wider text-violet-200">
                {row.feature}
              </p>
              <h3 className="mt-3 text-2xl font-black text-white">{row.standard}</h3>
              <p className="mt-4 text-sm leading-6 text-violet-50/[0.74]">{row.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 mx-auto flex max-w-5xl flex-col gap-4 rounded-3xl border border-white/[0.14] bg-white/[0.06] p-6 backdrop-blur-md md:flex-row md:items-center md:justify-between">
          <p className="text-base leading-7 text-violet-50/[0.78]">
            Kurulum öncesinde zemin, açıklık ve hava durumu birlikte değerlendirilir;
            sabitleme yöntemi saha keşfinde netleştirilir.
          </p>
          <Link
            href={`tel:${PHONE}`}
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3 font-black text-[#040817] shadow-lg transition hover:bg-violet-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Teknik ekibi arayın
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Sistem ve Standart ================== */
// Sayfada daha once marka adi, statik standardi ve tek bir boyutsal veri yoktu.
// Rakipler "TUV belgeli, DIN 4102 B1" yaziyor; buradaki veri seti daha guclu.
function SystemAndStandardSection() {
  return (
    <section
      id="sistem-ve-standart"
      className="scroll-mt-24 bg-slate-50 py-20"
      aria-labelledby="sistem-ve-standart-baslik"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-widest text-violet-700">
            Sistem ve standart
          </p>
          <h2
            id="sistem-ve-standart-baslik"
            className="mt-3 text-4xl font-black tracking-tight text-gray-950 md:text-5xl"
          >
            Çadır Sistemi Hangi Standarda Göre Kuruluyor?
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-700">
            Bir etkinlik çadırının güvenliği brandanın kalınlığından önce taşıyıcı
            sistemin nereden geldiğine, statik hesabın hangi standarda göre yapıldığına
            ve zemine nasıl bağlandığına bakılarak değerlendirilir.
          </p>
        </div>

        {/* 2.1 — Tek tedarikçi */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black tracking-tight text-gray-950 md:text-3xl">
              Sistemlerin tamamı neden tek üreticiden geliyor?
            </h3>
            <p className="mt-5 text-base leading-8 text-gray-700 md:text-lg">
              Sahneva’nın pagoda, şeffaf ve büyük açıklıklı çadır sistemlerinin tamamı
              aynı Alman üreticiden — <strong className="font-black text-gray-950">Eschenbach</strong> —
              tedarik edilir. Sektörde envanter çoğunlukla farklı üreticilerden parça parça
              toplanır; bu durumda her sistemin kendi belge seti, kendi bağlantı detayı ve
              kendi yangın sınıfı olur.
            </p>
            <ul className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Tek belge seti",
                  detail: "Yangın ve statik belgeleri tüm ölçüler için aynı kaynaktan çıkar.",
                },
                {
                  title: "Uyumlu parçalar",
                  detail: "Kolon, makas ve bağlantı elemanları sistemler arasında birbirine oturur.",
                },
                {
                  title: "Aynı standart",
                  detail: "Pagodadan 40 metrelik sisteme kadar aynı yangın ve statik standardı geçerlidir.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="text-base font-black text-gray-950">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* 2.4 — EN 13782 */}
          <div className="rounded-3xl border border-violet-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-black uppercase tracking-widest text-violet-700">
              Statik hesap standardı
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-tight text-gray-950">
              EN 13782
            </h3>
            <p className="mt-4 text-base leading-8 text-gray-700">
              Büyük açıklıklı çadır sistemlerinin statik hesabı, geçici çadır yapıları için
              Avrupa standardı olan EN 13782’ye göre bağımsız bir mühendislik bürosu
              tarafından yapılmıştır.
            </p>
            <p className="mt-5 text-sm font-black uppercase tracking-wider text-gray-950">
              Standardın kapsadıkları
            </p>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-gray-700">
              {[
                "Rüzgâr, kar ve sismik yük varsayımları",
                "Devrilme, kayma ve kalkma stabilite kontrolleri",
                "Ankraj gereklilikleri",
                "Yerinde çekme testleri",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-violet-700"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {/* Belge kimligi: "belgemiz var" demek ile hesabin kim tarafindan,
                hangi tarihte ve hangi revizyonla yapildigini yazmak ayni sey
                degil. Rakip "TUV belgeli" yaziyor; dogrulanabilir referans
                daha guclu. */}
            <dl className="mt-6 space-y-2 border-t border-slate-200 pt-5 text-sm leading-6 text-gray-700">
              <div className="flex gap-2">
                <dt className="font-black text-gray-950">Hesabı yapan:</dt>
                <dd>Ing.-Büro Strauch</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-black text-gray-950">Doküman:</dt>
                <dd>AHA 31 (30, 25, 20)/4-C — Rev. 04, 356 sayfa</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-black text-gray-950">Üretici kaydı:</dt>
                <dd>Eschenbach No. 0092-00</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* 2.2 — Boyutsal veri tablosu. Gercek <table>; div-grid ile kurulan
            sahte tablolar ayristiricilar tarafindan tablo olarak okunmuyor. */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-8 py-6">
            <h3 className="text-2xl font-black tracking-tight text-gray-950 md:text-3xl">
              Büyük açıklıklı sistemlerin ölçüleri nedir?
            </h3>
            <p className="mt-3 text-base leading-7 text-gray-700">
              Sahne, LED ekran ve asma kurgusu planlanan bir çadırda belirleyici olan
              rakamlar açıklık, saçak yüksekliği ve modül aralığıdır.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">
                Sahneva büyük açıklıklı çadır sistemlerinin 20, 30 ve 40 metre
                açıklıklardaki boyutsal verileri
              </caption>
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th
                    scope="col"
                    className="px-8 py-4 text-sm font-black uppercase tracking-wider text-gray-950"
                  >
                    Özellik
                  </th>
                  {SPAN_SYSTEM_COLUMNS.map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="px-6 py-4 text-sm font-black uppercase tracking-wider text-violet-700"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPAN_SYSTEM_SPECS.map((row) => (
                  <tr key={row.label} className="border-b border-slate-100 last:border-b-0">
                    <th
                      scope="row"
                      className="px-8 py-4 text-[15px] font-bold text-gray-950"
                    >
                      {row.label}
                    </th>
                    {row.values.map((value, i) => (
                      <td
                        key={SPAN_SYSTEM_COLUMNS[i]}
                        className="px-6 py-4 text-[15px] font-semibold text-gray-700"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 px-8 py-5 text-sm leading-6 text-gray-700">
            <p>
              Değerler üreticinin EN 13782 montaj çizim paketinden alınmıştır. Modül
              aralığı 5,00 m olduğu için çadır uzunluğu 5 metrenin katları hâlinde büyür;
              toplam alan seçilen modül sayısıyla belirlenir.
            </p>
            <p className="mt-3">
              20 ve 30 metrelik sistemlerde saçak yüksekliği 3,00 m veya 4,00 m olarak
              kurulabilir. Tablodaki mahya yükseklikleri 4,00 m saçak kurulumuna aittir;
              3,00 m saçak seçildiğinde mahya bir metre alçalır.
            </p>
          </div>
        </div>

        {/* Malzeme ve imalat standardi */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <h3 className="text-2xl font-black tracking-tight text-gray-950 md:text-3xl">
            Taşıyıcı sistem hangi malzemeden imal ediliyor?
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700 md:text-lg">
            Bir çadırın rüzgârda ayakta kalmasını sağlayan şey brandası değil, taşıyıcı
            iskeletin alaşımı, kesiti ve imalat kalitesidir. Sahneva’nın büyük açıklıklı
            sistemlerinde bu değerler üreticinin montaj çizim paketinde tanımlıdır.
          </p>

          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            {MATERIAL_SPECS.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <dt className="text-xs font-black uppercase tracking-wider text-violet-700">
                  {item.label}
                </dt>
                <dd>
                  <p className="mt-3 text-xl font-black text-gray-950">{item.value}</p>
                  <p className="mt-3 text-sm leading-6 text-gray-700">{item.detail}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 2.3 — Tek parça / birleştirilmiş ayrımı */}
        <div className="mt-8 grid gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2 lg:gap-0">
          <div className="p-8 lg:p-10">
            <h3 className="text-2xl font-black tracking-tight text-gray-950 md:text-3xl">
              Açıklık tek parça mı geçiliyor, birleştirilerek mi?
            </h3>
            <p className="mt-5 text-base leading-8 text-gray-700 md:text-lg">
              Türkiye’de büyük çadır kurulumlarının çoğu, geniş alanı yan yana
              birleştirilmiş ünitelerle elde eder; ünitelerin kesiştiği yerde oluk hattı ve
              kolon dizisi oluşur. Sahneva’nın 40 metrelik sistemi bu açıklığı tek parça
              geçer. Taşıyıcı yalnızca çevre kolonlarında ve alın cephelerindedir; iç
              hacimde hiçbir dikme bulunmaz.
            </p>
            <p className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-base leading-7 text-gray-700">
              <strong className="font-black text-gray-950">Pratikte ne değişir:</strong>{" "}
              40 metrelik sistemde mahya (tepe) yüksekliği 10,50 metredir ve bu yüksekliğin
              altında oluk hattı ya da iç kolon yoktur. Sahne aksı, ziyaretçi akışı ve stant
              yerleşimi kolon konumlarına göre değil, etkinliğin ihtiyacına göre kurulur.
            </p>
          </div>
          <figure className="relative m-0 min-h-[320px] lg:min-h-full">
            <Image
              src="/img/cadir/buyuk-olcekli-cadir-kurulumu.webp"
              alt="Kurulum hâlindeki büyük açıklıklı çadır iskeleti; çatı makasları açıklığı tek parça geçiyor ve altlarında iç dikme bulunmuyor"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              quality={80}
              loading="lazy"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-6 pb-5 pt-12 text-sm leading-6 text-white">
              Kaplama çekilmeden önceki iskelet: açıklığı geçen çatı makaslarının altında
              iç kolon bulunmuyor.
            </figcaption>
          </figure>
        </div>

        {/* 2.5 — Ankraj yontemleri */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <h3 className="text-2xl font-black tracking-tight text-gray-950 md:text-3xl">
            Çadır zemine nasıl sabitleniyor?
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-700 md:text-lg">
            Sabitleme yöntemi zemine göre değişir ve her yöntemin sahada ayrı bir maliyeti,
            ayrı bir alan ihtiyacı vardır. Yöntem saha keşfinde seçilir; teklifin içeriğini
            doğrudan etkilediği için baştan konuşulması gerekir.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {ANCHORING_METHODS.map((item) => (
              <article
                key={item.method}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-xs font-black uppercase tracking-wider text-violet-700">
                  {item.surface}
                </p>
                <h4 className="mt-3 text-xl font-black text-gray-950">{item.method}</h4>
                <p className="mt-4 text-sm leading-6 text-gray-700">{item.detail}</p>
              </article>
            ))}
          </div>

          {/* Asma yuk rakami statik hesaptan gelecek; rakam olmadan yayimlanmiyor.
              Ground support cumlesi rakamdan bagimsiz ve dogru. */}
          <p className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-base leading-7 text-gray-700">
            <strong className="font-black text-gray-950">Çatıya asılan yükler:</strong>{" "}
            Sahne, ses, ışık ve LED ekran kurgularında çatıya asılacak yük proje bazında
            statik hesapla değerlendirilir. Sistemin taşıma sınırını aşan kurgular çadırdan
            bağımsız ground support üzerine alınır.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================== Kullanım Alanları ================== */
function UseCases() {
  return (
    <section
      id="kullanim-alanlari"
      className="py-20 bg-gradient-to-br from-gray-900 to-violet-900/95"
      aria-labelledby="kullanim-alanlari-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="kullanim-alanlari-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Kullanım{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Alanları
            </span>
          </h2>
          <p className="text-xl text-white/[0.85] max-w-3xl mx-auto leading-relaxed">
            Etkinlik çadırı kiralama ve kiralık çadır çözümlerimizin tercih edildiği başlıca kullanım alanları
          </p>
          <div
            className="w-32 h-1 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto mt-8 rounded-full"
            aria-hidden="true"
          />
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {USE_CASES.map((uc) => (
            <li
              key={uc.text}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 group hover:scale-105"
            >
              <div className="flex flex-col items-start gap-4">
                <div
                  className="text-3xl bg-white/20 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {uc.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-violet-300 transition-colors">
                    {uc.text}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-violet-700 hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-600"
          >
            <span aria-hidden="true" className="text-xl mr-3">💬</span>
            <span>Etkinliğiniz için Özel Çözüm Alın</span>
          </Link>
        </div>

        {/* Büyük açıklıklı çadır yapısı — premium iç görünüm */}
        <div className="relative mt-14 overflow-hidden rounded-3xl aspect-[21/8]">
          <Image
            src="/img/hizmet-cadir.webp"
            alt="Sahneva büyük açıklıklı çadır iç yapısı profesyonel kurulum görünümü"
            fill
            sizes="100vw"
            className="object-cover object-[center_55%]"
            quality={85}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/75 via-gray-950/25 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-14">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-violet-300 mb-2">Yapı Kalitesi</p>
              <p className="text-white font-black text-2xl md:text-3xl max-w-sm leading-snug">
                Büyük açıklıklı çadır — kolon yok, alan tamamen kullanılabilir
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== Kurulum Süreci ================== */
function InstallationProcess() {
  return (
    <section
      id="kurulum-sureci"
      className="[content-visibility:auto] py-20 bg-gradient-to-r from-violet-700 via-purple-700 to-violet-800 text-white"
      aria-labelledby="kurulum-sureci-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="kurulum-sureci-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
          >
            Kurulum <span className="text-white/90">Süreci</span>
          </h2>
          <p className="text-xl text-violet-100 max-w-3xl mx-auto leading-relaxed">
            Etkinlik çadırı kiralamanızda keşiften söküme tüm süreç.
          </p>
        </div>

        {/* Kurulum sürecinden saha fotoğrafları */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto mb-10">
          {[
            { src: "/img/cadir/buyuk-olcekli-cadir-kurulumu.webp", alt: "Boş sahada çadır iskeletinin vinçle kurulması" },
            { src: "/img/cadir/sahneva-cadir-kurulumu.webp", alt: "Taşıyıcı iskelet üzerine çadır brandasının çekilmesi" },
            { src: "/img/galeri/cadir-kiralama-5.webp", alt: "Kurulum aşamasında çadır iskeleti ve arkasında sıralanmış pagoda çadırlar" },
            { src: "/img/cadir/cadir-saha-8.webp", alt: "Meydanda kurulumu tamamlanmış büyük açıklıklı çadır" },
          ].map((photo) => (
            <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className={`object-cover ${photo.position ?? ""}`}
                quality={78}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {INSTALLATION_STEPS.map((step, index) => (
            <li
              key={step.title}
              className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-500"
            >
              <div className="text-3xl font-black text-white mb-4" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-violet-100 text-base leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ================== SSS ================== */
function FAQ() {
  return (
    <section
      id="sss"
      className="scroll-mt-24 [content-visibility:auto] [contain-intrinsic-size:auto_1500px] bg-white py-20"
      aria-labelledby="sss-baslik"
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-black uppercase tracking-widest text-violet-700">
            Sık sorulan sorular
          </p>
          <h2
            id="sss-baslik"
            className="mt-3 text-4xl md:text-5xl font-black text-gray-950"
          >
            Çadır Kiralama Hakkında Merak Edilenler
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-3xl border-2 border-transparent bg-slate-50 transition-colors duration-300 hover:bg-slate-100 open:border-violet-200 open:bg-white open:shadow-sm [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-3xl p-6 text-lg font-black text-gray-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-200">
                <span className="flex-1">{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-violet-100 text-xl leading-none text-violet-700 transition-transform duration-300 group-open:rotate-180"
                >
                  ⌄
                </span>
              </summary>
              <p className="px-6 pb-6 text-base leading-7 text-gray-700">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Tamamlayıcı Hizmetler ================== */
function RelatedServices() {
  const services = [
    {
      href: "/ses-isik-sistemleri",
      title: "Ses & Işık Sistemleri",
      Icon: Music,
      desc: "Çadır etkinlikleri için profesyonel ses ve ışık çözümleri",
    },
    {
      href: "/sahne-kiralama",
      title: "Sahne Kiralama",
      Icon: Layers,
      desc: "Konser ve sunumlar için modüler sahne kurulumları",
    },
    {
      href: "/masa-sandalye-kiralama",
      title: "Masa Sandalye Kiralama",
      Icon: Users,
      desc: "Konforlu oturma alanları ve tamamlayıcı mobilyalar",
    },
    {
      href: "/led-ekran-kiralama",
      title: "LED Ekran Kiralama",
      Icon: Monitor,
      desc: "Sunum ve sahne için yüksek çözünürlüklü ekranlar",
    },
  ];

  return (
    <section
      id="tamamlayici-hizmetler"
      className="py-20 bg-gradient-to-br from-gray-50 to-violet-100/30"
      aria-labelledby="tamamlayici-hizmetler-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="tamamlayici-hizmetler-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Ek <span className="text-violet-700">Hizmetler</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Etkinlik çadırı kiralamanıza eşlik eden tamamlayıcı ekipman ve teknik çözümler
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ href, title, Icon, desc }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl"
            >
              <Icon className="h-8 w-8 text-violet-700" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-black text-gray-950 group-hover:text-violet-700">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Kapanış CTA ================== */
function ClosingCta() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#040817] py-16 text-white"
      aria-labelledby="cta-baslik"
    >
      <div
        className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px]"
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
        <h2 id="cta-baslik" className="text-3xl font-black md:text-4xl">
          Çadır planınızı birlikte netleştirelim
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-violet-100/80 md:text-lg">
          Tarih, ölçü, şehir ve zemin bilgisini paylaşın; nakliye dahil kalem kalem
          teklifi aynı gün içinde iletelim.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-green-700 px-8 text-[17px] font-black text-white shadow-lg transition hover:bg-green-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp’tan teklif alın
          </Link>
          <Link
            href={`tel:${PHONE}`}
            className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl border border-white/30 bg-white/[0.07] px-8 text-[17px] font-black text-white backdrop-blur-xl transition hover:bg-white/[0.14] focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {PHONE_DISPLAY}
          </Link>
          <Link
            href="/cadir-hesaplama"
            className="inline-flex min-h-[56px] items-center justify-center rounded-2xl border border-white/30 bg-transparent px-8 text-[17px] font-black text-white transition hover:bg-white/[0.1] focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
          >
            Ölçü hesaplayıcıyı açın
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== JSON-LD ================== */
function TentRentalJsonLd() {
  const pageUrl = `${ORIGIN}/cadir-kiralama`;
  const webPageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const pageDescription =
    "Açık hava etkinlikleri için pagoda, şeffaf ve büyük açıklıklı çadır çözümleri. Keşif, kurulum, zemin, iklimlendirme ve lojistik tek elden planlanır.";

  const provider = {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Sahneva",
    url: ORIGIN,
    telephone: PHONE,
  };

  const serviceNode = {
    "@type": "Service",
    "@id": serviceId,
    name: "Çadır Kiralama",
    serviceType: "Çadır kiralama ve etkinlik çadırı kurulumu",
    url: pageUrl,
    description: pageDescription,
    provider,
    areaServed: [
      { "@type": "Country", name: "Türkiye" },
      { "@type": "City", name: "İstanbul" },
      { "@type": "AdministrativeArea", name: "Marmara Bölgesi" },
    ],
    // Tasiyici sistemlerin tamami tek Alman ureticiden geliyor; marka adi
    // sayfanin teknik guvenilirlik sinyalinin parcasi.
    brand: { "@type": "Brand", name: "Eschenbach" },
    // `offers` yalnizca Offer/Demand kabul eder; katalog icin dogru ozellik
    // `hasOfferCatalog`. Sitedeki diger hizmet sayfalari da bunu kullaniyor.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Çadır Kiralama Fiyatları 2026",
      // Gorunen fiyat tablosundaki genel "Buyuk Cadirlar" kalemi katalogda
      // 20/30/40 m acikliklara aciliyor; birim fiyat ucunde de ayni.
      itemListElement: [
        ...PRICING_ITEMS.filter((item) => item.title !== "Büyük Çadırlar"),
        ...SPAN_OFFER_ITEMS,
      ].map((item, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: item.title,
        description: item.description,
        priceCurrency: "TRY",
        price: item.amount,
        priceSpecification: {
          "@type": item.unitCode ? "UnitPriceSpecification" : "PriceSpecification",
          priceCurrency: "TRY",
          price: item.amount,
          ...(item.unitCode ? { unitCode: item.unitCode, unitText: item.unitText } : {}),
          description: item.price,
        },
        availability: "https://schema.org/InStock",
        url: pageUrl,
      })),
    },
  };

  const gallerySchema = buildImageGallerySchema({
    images: GALLERY_IMAGES,
    origin: ORIGIN,
    pageUrl,
    serviceId,
    webPageId,
    name: "Çadır kiralama galeri görselleri",
  });

  serviceNode.image = gallerySchema.imageUrls;

  const webPageNode = {
    "@type": "WebPage",
    "@id": webPageId,
    name: "Çadır Kiralama | Profesyonel Etkinlik Çözümleri | Sahneva",
    description: pageDescription,
    url: pageUrl,
    inLanguage: "tr-TR",
    mainEntity: { "@id": serviceId },
    isPartOf: { "@id": WEBSITE_ID },
    publisher: provider,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${ORIGIN}${HERO.src}`,
      width: HERO_IMAGE_WIDTH,
      height: HERO_IMAGE_HEIGHT,
    },
    image: [`${ORIGIN}${HERO.src}`, ...gallerySchema.imageUrls],
    hasPart: [
      ...(gallerySchema.galleryNode ? [{ "@id": gallerySchema.galleryId }] : []),
      ...gallerySchema.imageNodes.map((image) => ({ "@id": image["@id"] })),
    ],
  };

  const faqNode = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    isPartOf: { "@id": webPageId },
    about: { "@id": serviceId },
    mainEntityOfPage: { "@id": webPageId },
    inLanguage: "tr-TR",
    mainEntity: FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const videoNodes = (VIDEO_EMBEDS || []).map((video) => ({
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    uploadDate: video.uploadDate,
    ...(VIDEO_DURATIONS[video.videoId]
      ? { duration: VIDEO_DURATIONS[video.videoId] }
      : {}),
    thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${video.videoId}`,
    inLanguage: "tr-TR",
    publisher: { "@id": ORGANIZATION_ID },
    ...(getVideoEntities(video.videoId).length
      ? { about: getVideoEntities(video.videoId) }
      : {}),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode,
      // Not: burada eskiden `serviceNode.offers` vardi. Node `hasOfferCatalog`
      // kullaniyor, `offers` diye bir alani hic olmadi; undefined deger
      // JSON.stringify tarafindan `null` olarak yaziliyor ve @graph'a gecersiz
      // bir dugum birakiyordu.
      serviceNode,
      ...(gallerySchema.galleryNode ? [gallerySchema.galleryNode] : []),
      ...gallerySchema.imageNodes,
      faqNode,
      ...videoNodes,
    ],
  };

  return <JsonLdScript id="ld-json-cadir" data={jsonLd} />;
}

/* ================== Bölüm Geçiş Divider'ları ================== */
function DividerLightToDark() {
  return (
    <div className="relative h-12 bg-white overflow-hidden -mb-px" aria-hidden="true">
      <svg viewBox="0 0 1440 48" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
        <path d="M0,0 L1440,28 L1440,48 L0,48 Z" fill="#040817" />
      </svg>
    </div>
  );
}

function DividerDarkToLight() {
  return (
    <div className="relative h-12 bg-[#040817] overflow-hidden -mb-px" aria-hidden="true">
      <svg viewBox="0 0 1440 48" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
        <path d="M0,28 L1440,0 L1440,48 L0,48 Z" fill="#f8fafc" />
      </svg>
    </div>
  );
}

// Gradient, InstallationProcess'in from-violet-700 / via-purple-700 / to-violet-800
// degerleriyle birebir eslesmeli; aksi halde bolum gecisinde renk kaymasi olusuyor.
function DividerBlueToWhite() {
  return (
    <div className="relative h-12 overflow-hidden -mb-px" style={{background: "linear-gradient(to right, #6d28d9, #7e22ce, #5b21b6)"}} aria-hidden="true">
      <svg viewBox="0 0 1440 48" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
        <path d="M0,0 L1440,28 L1440,48 L0,48 Z" fill="#ffffff" />
      </svg>
    </div>
  );
}

/* ================== Sayfa Bileşeni ================== */
export default function Page() {
  const baseUrl = ORIGIN;
  const canonical = `${baseUrl}/cadir-kiralama`;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Hizmetler", url: `${baseUrl}/hizmetler` },
    { name: "Çadır Kiralama", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <TentRentalJsonLd />

      <Hero />
      <SectionJumpNav />
      <TentSelectorSection />
      <Gallery />
      <PricingSection />
      <DividerLightToDark />
      <TentStockSection />
      <DividerDarkToLight />
      <TurnkeyInfrastructure />
      <DividerLightToDark />
      <StandardsTable />
      <DividerDarkToLight />
      <SystemAndStandardSection />
      <UseCases />
      <InstallationProcess />
      <DividerBlueToWhite />
      <CompactDecisionGuide />
      <TentCalculatorCta />
      <FAQ />
      <RelatedServices />
      <GlossaryTermLinks
        servicePath="/cadir-kiralama"
        title="Çadır kurulumunda geçen terimler"
        description="Ankraj, rüzgâr yükü, çadır zemini ve su tahliyesi; açık alanda güvenli kurulumu belirleyen başlıklar. Tanımlar sözlükte."
      />
      <RegionalCityLinks service="çadır kiralama" />

      <ServiceBlogLinks {...CONTENT_CLUSTERS.tent} links={CONTENT_CLUSTERS.tent.guides} />
      <PaymentOptionsNote />
      <ClosingCta />
    </>
  );
}

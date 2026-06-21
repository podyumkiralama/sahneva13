// app/(tr)/cadir-kiralama/page.jsx
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import VideoEmbed from "@/components/VideoEmbed.client";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLdScript from "@/components/seo/JsonLd";
import { buildImageGallerySchema } from "@/lib/structuredData/imageGallery";
import { buildServiceProductSchema } from "@/lib/structuredData/serviceProducts";
import { WEBSITE_ID } from "@/lib/seo/schemaIds";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import TentCalculatorCta from "@/components/TentCalculatorCta";
import { 
  Monitor, 
  MessageCircle, 
  CheckCircle, 
  Eye, 
  Layers, 
  Users, 
  Music
} from "lucide-react";

/* ================== Sabitler ================== */
export const revalidate = 1800;
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");
const ORIGIN = SITE_URL;
const ORGANIZATION_ID = `${SITE_URL}/#org`;
const PHONE = "+905453048671";
const WA_TEXT =
  "Merhaba%2C+çadır+kiralama+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bdüğün%2Ffuar%2Fkonser%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Kisi+sayisi%3A+%5Bxxx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

// Base64 blur placeholder (LCP hero için)
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== Dinamik Bileşenler ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => <GalleryFallbackCards />,
});

export const metadata = {
  title: "Çadır Kiralama | Profesyonel Etkinlik Çözümleri",
  description:
    "Pagoda, şeffaf ve büyük açıklıklı çadır kiralama çözümleri. Düğün, fuar, festival, lansman ve kurumsal etkinlikler için Türkiye geneli kurulum.",
  alternates: {
    canonical: `${ORIGIN}/cadir-kiralama`,
    languages: {
      "tr-TR": `${ORIGIN}/cadir-kiralama`,
      "en": `${ORIGIN}/en/tent-rental`,
      "ru": `${ORIGIN}/ru/tent-rental`,
      "x-default": `${ORIGIN}/cadir-kiralama`,
    },
  },
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
        url: `${ORIGIN}/img/cadir/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon çadır kiralama - pagoda, şeffaf dome ve büyük açıklıklı çadır çözümleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Çadır Kiralama | Profesyonel Etkinlik Çözümleri",
    description:
      "Düğün, fuar, konser ve özel etkinlikler için profesyonel çadır kiralama çözümleri.",
    images: [`${ORIGIN}/img/cadir/hero.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
export function Head() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/img/cadir/hero.webp"
        fetchPriority="high"
        type="image/webp"
        imageSizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1200px"
      />
    </>
  );
}

/* ================== Yardımcılar & Sabitler ================== */
const HERO = {
  src: "/img/cadir/hero.webp",
  alt: "Çadır kiralama için pagoda, şeffaf ve büyük etkinlik çadırı kurulumu",
  sizes: "(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1200px",
};

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

const GALLERY_IMAGES = [
  { src: "/img/cadir/cadir-saha-1.webp", alt: "Sahneva çadır kiralama - gerçek saha kurulumu etkinlik alanı" },
  { src: "/img/cadir/cadir-saha-2.webp", alt: "Profesyonel çadır kurulumu - anahtar teslim etkinlik alanı" },
  { src: "/img/cadir/cadir-saha-3.webp", alt: "Çadır kiralama saha görseli - büyük açıklıklı kurulum" },
  { src: "/img/cadir/cadir-saha-4.webp", alt: "Etkinlik çadırı kurulumu - Sahneva profesyonel ekip" },
  { src: "/img/cadir/cadir-saha-5.webp", alt: "Çadır kiralama referans görseli - açık hava etkinlik alanı" },
  { src: "/img/cadir/cadir-saha-6.webp", alt: "Sahneva çadır kurulumu - kurumsal etkinlik sahası" },
  { src: "/img/cadir/cadir-saha-7.webp", alt: "Profesyonel çadır kiralama - etkinlik planı ve kurulum" },
  { src: "/img/cadir/cadir-saha-8.webp", alt: "Çadır kiralama saha detayı - güvenli ve planlı kurulum" },
  { src: "/img/cadir/cadir-saha-9.webp", alt: "Sahneva çadır etkinlik alanı - tamamlanmış kurulum görseli" },
  { src: "/img/cadir/1.webp", alt: "Pagoda çadır kurulumu - Düğün etkinliği için profesyonel çadır düzeni" },
  { src: "/img/cadir/2.webp", alt: "Şeffaf dome çadır kurulumu - özel davetler için atmosfer" },
  { src: "/img/cadir/3.webp", alt: "Büyük açıklıklı çadır kurulumu - geniş etkinlik alanı çözümü" },
];

const GALLERY_FALLBACK_CARDS = [
  { src: "/img/cadir/cadir-saha-1.webp", title: "Gerçek Saha Kurulumu", alt: "Sahneva çadır kiralama gerçek saha kurulumu etkinlik alanı" },
  { src: "/img/cadir/cadir-saha-2.webp", title: "Anahtar Teslim Kurulum", alt: "Profesyonel çadır kurulumu anahtar teslim etkinlik alanı" },
  { src: "/img/cadir/cadir-saha-4.webp", title: "Etkinlik Alanı Kurulumu", alt: "Etkinlik çadırı kurulumu Sahneva profesyonel ekip" },
  { src: "/img/cadir/cadir-saha-6.webp", title: "Kurumsal Etkinlik Sahası", alt: "Sahneva çadır kurulumu kurumsal etkinlik sahası" },
];

const FAQ_ITEMS = [
  {
    q: "Çadır kiralama fiyatları ne kadar?",
    a: "2026 fiyatlarımız: 5×5 çadır 9.000 TL + nakliye, 4×4 çadır 8.000 TL + nakliye, 3×3 çadır 7.000 TL + nakliye. 10’luk, 20’lik, 30’luk ve 40’lık büyük ölçekli çadırlarda metrekare fiyatı 430 TL’dir.",
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
  {
    title: "3x3 Çadır",
    price: "7.000 TL",
    description: "Karşılama, kayıt masası ve kompakt stand alanları için 9 m² hızlı kurulum.",
  },
  {
    title: "4x4 Çadır",
    price: "8.000 TL",
    description: "Fuaye, ikram, küçük satış alanı ve orta ölçekli etkinlik noktaları için 16 m².",
  },
  {
    title: "5x5 Çadır",
    price: "9.000 TL",
    description: "VIP alan, lansman, kır daveti ve yüksek görünürlüklü pagoda çadır paketi.",
  },
  {
    title: "Büyük Çadırlar",
    price: "430 TL / m²",
    description: "Fuar, festival, belediye etkinliği ve büyük ölçekli açık alan projeleri için geniş açıklıklı çözüm.",
  },
];

const TENT_SELECTOR_CARDS = [
  {
    title: "Pagoda Çadır",
    badge: "Karşılama ve fuaye",
    img: "/img/cadir/cadir-saha-1.webp",
    imgAlt: "Pagoda çadır kiralama kurulum görseli",
    usage: "Karşılama, fuaye, VIP alan, küçük etkinlik ve kayıt noktası",
    sizing: "3x3, 4x4 ve 5x5 modüllerle alan ihtiyacına göre büyür.",
    advantage: "Hızlı kurulur, kurumsal görünür ve yan yana çoğaltılabilir.",
  },
  {
    title: "Şeffaf Çadır",
    badge: "Premium davet",
    img: "/img/cadir/cadir-saha-7.webp",
    imgAlt: "Şeffaf çadır kiralama iç mekan premium davet atmosferi",
    usage: "Kır düğünü, premium davet, lansman ve manzaralı açık alan",
    sizing: "Manzara, masa düzeni, ışık ve giriş aksına göre planlanır.",
    advantage: "Mekan hissini kapatmadan hava koşullarına karşı kontrollü alan sağlar.",
  },
  {
    title: "Büyük Etkinlik Çadırı",
    badge: "Fuar ve festival",
    img: "/img/cadir/cadir-saha-1.webp",
    imgAlt: "Büyük etkinlik çadırı fuar ve festival drone kurulum görseli",
    usage: "Fuar, festival, belediye etkinliği ve kalabalık organizasyon",
    sizing: "10, 20, 30 ve 40 m geniş açıklık seçenekleriyle projelendirilir.",
    advantage: "Geniş açıklık, kontrollü giriş-çıkış ve teknik entegrasyon imkanı sunar.",
  },
  {
    title: "Büyük Açıklıklı Çadır",
    badge: "Geniş alan",
    img: "/img/cadir/cadir-saha-9.webp",
    imgAlt: "Büyük açıklıklı çadır kiralama etkinlik alanı görseli",
    usage: "Fuar, festival, yemek alanı, protokol alanı ve büyük katılımlı organizasyonlar",
    sizing: "Genişlik, masa düzeni, giriş-çıkış akışı ve zemin durumuna göre projelendirilir.",
    advantage: "Kolonsuz geniş alan ihtiyacını hızlı ve kontrollü şekilde çözer.",
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
    feature: "Branda Gramajı",
    standard: "650 gr/m² UV dayanımlı branda",
    detail: "Güneş, yağmur ve yoğun kullanıma karşı profesyonel dış mekan standardı.",
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
    href: "/ses-isik-sistemleri",
    linkLabel: "ses ve ışık sistemleri",
  },
  {
    icon: "🎪",
    text: "Fuar çadırı kiralama",
    desc: "Marka standları, ziyaretçi akışı ve ürün sergileme için geniş açıklıklı fuar ve sergi etkinlik çadırı.",
    href: "/led-ekran-kiralama",
    linkLabel: "LED ekran kiralama",
  },
  {
    icon: "🎤",
    text: "Konser çadırı ve festival çadırı",
    desc: "Kulis, sağlık, teknik ekip ve izleyici destek alanları için hızlı kurulabilen açık hava etkinlik çadırı.",
    href: "/sahne-kiralama",
    linkLabel: "sahne kiralama",
  },
  {
    icon: "🏛️",
    text: "Belediye ve kurumsal etkinlik çadırı kiralama",
    desc: "Tören, iftar, lansman ve protokol etkinlikleri için güvenli, planlı ve marka uyumlu kiralık çadır kurulumu.",
    href: "/kurumsal-organizasyon",
    linkLabel: "kurumsal organizasyon",
  },
  {
    icon: "🏢",
    text: "Geçici etkinlik alanı çözümü",
    desc: "Yemek alanı, protokol bölümü, fuaye veya destek alanı için geniş açıklıklı sistem.",
    href: "/kurumsal-organizasyon",
    linkLabel: "kurumsal organizasyon",
  },
  {
    icon: "🏫",
    text: "Okul, mezuniyet ve kermes çadırı",
    desc: "Okul bahçesi, mezuniyet, kermes ve dönemsel etkinlikler için ekonomik ve hızlı kurulum.",
    href: "/podyum-kiralama",
    linkLabel: "podyum kiralama",
  },
];

const HERO_METRICS = [
  { value: "370", suffix: "adet", label: "Pagoda çadır stoğu" },
  { value: "11.000", suffix: "m²", label: "Büyük açıklıklı kapasite" },
  { value: "7.000 TL", suffix: "+ nakliye", label: "3x3 başlangıç fiyatı" },
  { value: "Rüzgar", suffix: "& zemin", label: "Güvenlik kontrolü" },
];

const HERO_FORMATS = ["3x3", "4x4", "5x5", "20 m", "30 m", "40 m"];

/* ================== HERO ================== */
function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[620px] items-start overflow-hidden bg-[#0a1429] pt-8 pb-10 text-white sm:min-h-[680px] md:min-h-[90svh] md:items-center md:pt-20 md:pb-16 lg:pt-20 lg:pb-16"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO.src}
          alt={HERO.alt}
          fill
          priority
          loading="eager"
          fetchPriority="high"
          className="object-cover"
          sizes={HERO.sizes}
          quality={88}
          blurDataURL={BLUR_DATA_URL}
          placeholder="blur"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0a1429]/97 via-[#1e3a8a]/88 to-[#0f172a]/94"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(30,58,138,0.38),transparent_44%),radial-gradient(circle_at_82%_13%,rgba(15,23,42,0.42),transparent_40%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.09] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:52px_52px]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6 md:py-8">
        <div className="mx-auto grid max-w-7xl gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(360px,420px)] xl:items-center 2xl:grid-cols-[minmax(0,1fr)_440px]">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-2.5 shadow-[0_20px_70px_rgba(30,58,138,0.25)] backdrop-blur-xl">
              <div className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
              </div>
              <span className="text-sm font-black tracking-[0.6px] text-white/90">
                ETKİNLİK ÇADIRI • STOK HAZIR • TÜRKİYE GENELİ
              </span>
            </div>

            <h1
              id="hero-title"
              className="mt-7 max-w-4xl text-[50px] font-black leading-[0.94] tracking-[-1.5px] text-white drop-shadow-[0_5px_25px_rgba(0,0,0,0.45)] md:text-[64px] lg:text-[76px] xl:text-[84px]"
            >
              Anahtar Teslim{" "}
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Çadır Kiralama
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-[20px] font-semibold leading-[1.4] text-white/[0.94] md:text-[23px]">
              Pagoda çadır, şeffaf dome ve büyük açıklıklı sistemlerle<br className="hidden md:block" />
              zemin, iklimlendirme ve lojistiği tek elden planlıyoruz.
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-blue-100/80 md:text-lg">
              Etkinliğinizin ölçüsüne, zemine ve hava koşullarına göre güvenli,
              şık ve anahtar teslim çadır alanları kuruyoruz.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[58px] min-w-[220px] items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] px-9 text-[17px] font-black text-white shadow-[0_20px_55px_rgba(30,64,175,0.45)] transition-all hover:brightness-110 active:scale-[0.985]"
              >
                <MessageCircle className="h-5 w-5 transition group-hover:-rotate-12" />
                HEMEN TEKLİF AL
              </Link>

              <Link
                href="#cadir-tipleri"
                className="group inline-flex h-[58px] min-w-[220px] items-center justify-center gap-3 rounded-3xl border border-white/30 bg-white/[0.06] px-9 text-[17px] font-black text-white backdrop-blur-xl transition-all hover:bg-white/[0.14] active:scale-[0.985]"
              >
                ÇADIR TİPLERİNİ İNCELE
              </Link>
            </div>

            {/* Güven Rozetleri */}
            <div className="mt-10 grid grid-cols-3 gap-3 max-w-2xl sm:gap-6 border-t border-white/10 pt-8">
              <div className="flex flex-col items-start sm:items-center text-left sm:text-center">
                <span className="text-2xl mb-1.5" aria-hidden="true">⭐</span>
                <div className="text-lg md:text-xl font-black text-white">Keşif</div>
                <div className="text-blue-200/70 text-xs md:text-sm font-medium">Planlı Kurulum</div>
              </div>
              <div className="flex flex-col items-start sm:items-center text-left sm:text-center border-l border-white/10 pl-3 sm:pl-0 sm:border-l-0">
                <span className="text-2xl mb-1.5" aria-hidden="true">🏆</span>
                <div className="text-lg md:text-xl font-black text-white">Ekip</div>
                <div className="text-blue-200/70 text-xs md:text-sm font-medium">Saha Koordinasyonu</div>
              </div>
              <div className="flex flex-col items-start sm:items-center text-left sm:text-center border-l border-white/10 pl-3 sm:pl-0 sm:border-l-0">
                <span className="text-2xl mb-1.5" aria-hidden="true">🚀</span>
                <div className="text-lg md:text-xl font-black text-white">Türkiye</div>
                <div className="text-blue-200/70 text-xs md:text-sm font-medium">Planlı Lojistik</div>
              </div>
            </div>
          </div>

          <aside className="relative w-full max-w-xl xl:max-w-none xl:justify-self-end mt-4 xl:mt-0" aria-label="Kapasite özeti">
            <div className="absolute -inset-6 rounded-[2.8rem] bg-blue-400/10 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/[0.15] bg-white/[0.07] px-5 py-3.5 backdrop-blur-xl">
                <div>
                  <p className="text-xs font-black uppercase tracking-[1px] text-blue-300">OPERASYON ÖZETİ</p>
                  <p className="mt-0.5 text-sm text-blue-200/80">Ölçü, stok ve güvenlik tek planda</p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3.5 py-1 text-xs font-black text-emerald-300">HAZIR STOK</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {HERO_METRICS.map((item, i) => (
                  <div key={i} className="rounded-2xl border border-white/[0.12] bg-white/[0.06] p-5 backdrop-blur-xl">
                    <div className="text-[34px] font-black leading-none text-white">{item.value}</div>
                    <div className="mt-1 text-xs font-black uppercase tracking-widest text-blue-300">{item.suffix}</div>
                    <div className="mt-3 text-sm font-semibold text-blue-200/80">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/[0.12] bg-slate-950/40 p-5 backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-widest text-blue-300">KURULUM FORMATLARI</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {HERO_FORMATS.map((f, i) => (
                    <span key={i} className="rounded-full border border-white/[0.15] bg-white/[0.07] px-3.5 py-1 text-sm font-black text-white">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
/* ================== Çadır Tipi Karar Kartları ================== */
function TentSelectorSection() {
  return (
    <section
      id="cadir-tipleri"
      className="[content-visibility:auto] [contain-intrinsic-size:auto_1500px] lg:[contain-intrinsic-size:auto_760px] bg-white py-20"
      aria-labelledby="cadir-tipleri-baslik"
    >
      <div className="container mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-black tracking-[1.5px] text-blue-700">
            DOĞRU ÇADIRI SEÇİN
          </div>
          <h2
            id="cadir-tipleri-baslik"
            className="text-4xl font-black tracking-tight text-gray-950 md:text-5xl lg:text-6xl"
          >
            Hangi Çadır Size Uygun?
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-700 md:text-xl">
            Etkinlik çadırı kiralama kararında ölçü kadar kullanım amacı, zemin, hava koşulu,
            giriş-çıkış akışı ve teknik entegrasyon da belirleyicidir.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {TENT_SELECTOR_CARDS.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]"
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

        {/* Saha fotoğrafları — çadır tiplerini somutlaştırır */}
        <div className="mt-10 grid grid-cols-3 gap-3 md:gap-4">
          {[
            { src: "/img/cadir/cadir-saha-1.webp", alt: "Sahneva pagoda çadır kurulumu saha görüntüsü", label: "Pagoda Kurulum" },
            { src: "/img/cadir/cadir-saha-3.webp", alt: "Büyük açıklıklı çadır kurulumu etkinlik alanı", label: "Büyük Açıklık" },
            { src: "/img/cadir/cadir-saha-6.webp", alt: "Kurumsal çadır etkinlik sahası kurulumu", label: "Kurumsal Alan" },
          ].map((photo) => (
            <div key={photo.src} className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 33vw, 33vw"
                className="object-cover"
                quality={78}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-black uppercase tracking-wider text-white">
                {photo.label}
              </span>
            </div>
          ))}
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
      className="[content-visibility:auto] [contain-intrinsic-size:auto_1800px] md:[contain-intrinsic-size:auto_1300px] lg:[contain-intrinsic-size:auto_940px] relative overflow-hidden bg-[#0a1429] py-20 text-white"
      aria-labelledby="stok-kapasitesi-baslik"
    >
      <div
        className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-[-10rem] top-8 h-80 w-80 rounded-full bg-[#1e3a8a]/25 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-[#0f172a]/40 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.35fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-blue-300">
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

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {TENT_STOCK.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/[0.14] bg-white/[0.08] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur-md"
              >
                <p className="text-xs font-black uppercase tracking-widest text-blue-300">
                  {item.group}
                </p>
                <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
                <div className="mt-5">
                  <div className="text-4xl font-black leading-none text-white">
                    {item.capacity}
                  </div>
                  <div className="mt-2 text-sm font-bold text-blue-200/80">
                    {item.typeLabel}
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-cyan-50/[0.76]">
                  {item.description}
                </p>
              </article>
            ))}
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
      className="py-16 bg-white nc-CadirKiralamaPage-section-0"
      aria-labelledby="anahtar-teslim-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl border border-blue-100 p-8 md:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
                Anahtar Teslim Kurulum Gücü
              </p>
              <h2
                id="anahtar-teslim-baslik"
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
                      className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0"
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
                  src="/img/cadir/cadir-saha-2.webp"
                  alt="Sahneva anahtar teslim çadır kurulumu saha fotoğrafı"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover"
                  quality={82}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1429]/85 via-[#0a1429]/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-black uppercase tracking-widest text-blue-300 mb-2">Saha Kaydı</p>
                <p className="text-white font-black text-lg leading-snug mb-4">Kurulum sürecinden gerçek görüntü</p>
                <Link
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 hover:bg-blue-500 px-6 py-3 font-bold text-white transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600"
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
      transformation: "Açık fuar alanında büyük açıklıklı çadır, sahne ve teknik altyapı birlikte planlandı.",
      before: "Açık fuar alanında hava koşullarına uygun, geniş ve kontrollü bir etkinlik alanına ihtiyaç duyulması.",
      after: "Büyük açıklıklı çadır, LED ekran, sahne, ses-ışık ve güç dağıtımı aynı teknik planda kuruldu.",
      result: "Ziyaretçi akışı, teknik alan ve etkinlik içi kullanım daha kontrollü şekilde yönetildi.",
      summary: "Uygulama özeti: büyük çadır, sahne, LED ekran, ses ve ışık entegrasyonu tek saha planında toplandı.",
    },
    {
      title: "Sarıyer Şeffaf Kır Düğünü Çadırı",
      category: "Özel Davet & Düğün",
      transformation: "Yağmur riski olan kır alanında manzarayı kapatmayan şeffaf çadır çözümü uygulandı.",
      before: "Orman içindeki düğünde yağmur riski bulunmasına rağmen, çiftin doğal manzarayı kapatmak istememesi.",
      after: "Şeffaf dome ve pagoda çadırlar kuruldu, iç mekan estetik LED aydınlatmalarla hazırlandı.",
      result: "Gece aydınlatmasıyla davet atmosferi güçlendirildi, alan kontrollü ve konforlu hale getirildi.",
      summary: "Uygulama özeti: şeffaf çadır, zemin düzeni ve ambiyans ışığı birlikte planlanarak yağmur riskine karşı kontrollü davet alanı oluşturuldu.",
    },
    {
      title: "Kocaeli Büyük Açıklıklı Çadır Kurulumu",
      category: "Kurumsal Etkinlik Alanı",
      transformation: "Geniş açık alan, kısa sürede kullanıma hazır korunaklı etkinlik alanı olarak planlandı.",
      before: "Kocaeli projesinde geniş ve hızlı kurulabilir etkinlik alanı ihtiyacının ortaya çıkması.",
      after: "Geniş açıklıklı çadır sistemi, giriş-çıkış akışı ve zemin kullanımı dikkate alınarak kuruldu.",
      result: "Alan, etkinlik ihtiyacını karşılayacak şekilde kullanıma hazırlandı.",
      summary: "Uygulama özeti: geniş açıklık, zemin kullanımı ve giriş-çıkış akışı birlikte planlandı.",
    },
    {
      title: "Beşiktaş Kurumsal Lansman Çadırı",
      category: "Marka & Lansman",
      transformation: "Açık otel alanı, marka misafirlerini karşılayacak şık bir fuaye alanına dönüştürüldü.",
      before: "Lansman öncesi misafir karşılama alanı için otelin açık bölümünün estetik bir mekana çevrilme ihtiyacı.",
      after: "Sıralı 5x5 pagoda çadırlar kuruldu, zemin özel halı ile kaplandı ve alan uygun iklimlendirme desteğiyle hazırlandı.",
      result: "Misafir karşılama alanı, marka diliyle uyumlu ve konforlu bir düzene kavuştu.",
      summary: "Uygulama özeti: pagoda çadır, halı zemin ve iklimlendirme ile marka lansmanına uygun bir fuaye alanı hazırlandı.",
    },
  ];

  return (
    <section
      className="[content-visibility:auto] [contain-intrinsic-size:auto_2200px] md:[contain-intrinsic-size:auto_1600px] lg:[contain-intrinsic-size:auto_1320px] bg-slate-50 py-16"
      aria-labelledby="galeri-baslik"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-blue-700">
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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SUCCESS_STORIES.map((story, index) => (
            <article
              key={story.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_8px_35px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_25px_70px_rgba(59,130,246,0.13)]"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-1 text-xs font-black uppercase tracking-[0.7px] text-blue-700">
                  {story.category}
                </span>
                <div className="text-xs font-mono text-slate-500">0{index + 1}</div>
              </div>
              <h3 className="mt-6 text-[21px] font-black leading-tight tracking-tight text-gray-950 pr-4">
                {story.title}
              </h3>
              <p className="mt-4 text-[15px] font-semibold leading-snug text-blue-700">
                {story.transformation}
              </p>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <div className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" aria-hidden="true" />
                  <p className="text-[14.5px] leading-relaxed text-gray-600">{story.summary}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-2xl font-black text-gray-950 md:text-3xl">
                Seçilmiş Uygulama Görselleri
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 md:text-base">
                Farklı çadır tiplerinden yalnızca en karar verdiren kurulum kareleri.
              </p>
            </div>
            <Link
              href="/projeler"
              className="inline-flex min-h-[44px] w-fit items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-900 shadow-sm transition hover:border-blue-300 hover:text-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
            >
              <Eye className="mr-2 h-4 w-4" aria-hidden="true" />
              Tüm projeler
            </Link>
          </div>
          <CaseGallery images={GALLERY_IMAGES} visibleCount={4} priorityCount={1} />
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

        <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
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
            className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-blue-700 px-7 py-3 font-black text-white shadow-lg transition hover:bg-blue-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
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
      className="[content-visibility:auto] [contain-intrinsic-size:auto_1100px] md:[contain-intrinsic-size:auto_760px] py-16 bg-gradient-to-b from-slate-50 to-white"
      aria-labelledby="fiyatlandirma-baslik"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)]">
          <div className="relative bg-[#0a1429] px-6 py-8 text-white md:px-10">
            <div
              className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]"
              aria-hidden="true"
            />
            <div
              className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#1e3a8a]/30 blur-[90px]"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-white/70">
                  NET BAŞLANGIÇ BEDELLERİ
                </p>
                <h2 id="fiyatlandirma-baslik" className="mt-3 text-3xl font-black md:text-5xl">
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
                  className={`group relative border-t border-slate-200 p-7 md:border-l md:border-t-0 lg:p-8 first:md:border-l-0 transition-all duration-300 ${isPopular ? "bg-blue-50/60 ring-2 ring-blue-600/70 shadow-[0_15px_50px_rgba(37,99,235,0.15)] z-10" : "hover:bg-slate-50"}`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 right-6 rounded-full bg-blue-600 px-4 py-0.5 text-xs font-black tracking-widest text-white shadow">
                      EN ÇOK TERCİH EDİLEN
                    </div>
                  )}
                  <h3 className="text-[21px] font-black text-gray-950 tracking-tight">{item.title}</h3>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-[34px] font-black text-blue-700 tracking-tighter">{item.price}</span>
                    <span className="mb-1 text-sm font-semibold text-gray-500">+ nakliye</span>
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-gray-600 pr-2">{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="border-t border-slate-200 bg-blue-50/70 px-6 py-5 md:px-10">
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
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-green-700 px-8 py-4 font-black text-white shadow-lg transition hover:bg-green-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
          >
            <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
            Hemen Teklif Al
          </Link>
          <Link
            href="/cadir-kiralama#cadir-tipleri"
            className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 font-black text-slate-900 shadow-sm transition hover:border-blue-300 hover:text-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
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
      className="[content-visibility:auto] [contain-intrinsic-size:auto_1400px] lg:[contain-intrinsic-size:auto_880px] relative overflow-hidden bg-[#0a1429] py-20 text-white nc-CadirKiralamaPage-section-standards"
      aria-labelledby="sahneva-standartlari-baslik"
    >
      <div
        className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:46px_46px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-cyan-400/[0.18] blur-[90px]"
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-black uppercase tracking-widest text-cyan-200">
            Teknik güvenlik kontrolü
          </p>
          <h2
            id="sahneva-standartlari-baslik"
            className="mt-3 text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white"
          >
            Sahneva Güvenlik Standardı
          </h2>
          <p className="text-xl text-cyan-50/[0.78] max-w-3xl mx-auto leading-relaxed">
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
              <p className="text-sm font-black uppercase tracking-wider text-cyan-200">
                {row.feature}
              </p>
              <h3 className="mt-3 text-2xl font-black text-white">{row.standard}</h3>
              <p className="mt-4 text-sm leading-6 text-cyan-50/[0.74]">{row.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/[0.14] bg-white/[0.06] shadow-xl">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-base">
              <thead className="bg-white/[0.10] text-white">
                <tr>
                  <th className="px-6 py-4 font-bold">Özellik</th>
                  <th className="px-6 py-4 font-bold">Standartlarımız</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {STANDARDS.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.08]">
                    <td className="px-6 py-4 font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-cyan-50/[0.78]">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== Kullanım Alanları ================== */
function UseCases() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/95 nc-CadirKiralamaPage-section-5"
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
            className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full"
            aria-hidden="true"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" role="list">
          {USE_CASES.map((uc) => (
            <div
              key={uc.text}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 group hover:scale-105"
              role="listitem"
            >
              <div className="flex flex-col items-start gap-4">
                <div
                  className="text-3xl bg-white/20 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {uc.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors">
                    {uc.text}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {uc.desc}
                  </p>
                  <Link
                    href={uc.href}
                    className="mt-5 inline-flex min-h-[44px] items-center rounded-xl border border-white/[0.18] bg-white/[0.08] px-4 py-2 text-sm font-black text-cyan-100 transition hover:bg-white/[0.14] hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
                  >
                    {uc.linkLabel}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600"
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
              <p className="text-xs font-black uppercase tracking-widest text-blue-300 mb-2">Yapı Kalitesi</p>
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
      className="[content-visibility:auto] py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white"
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
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Etkinlik çadırı kiralamanızda keşiften söküme tüm süreç.
          </p>
        </div>

        {/* Kurulum sürecinden saha fotoğrafları */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto mb-10">
          {[
            { src: "/img/cadir/cadir-saha-4.webp", alt: "Çadır kurulum ekibi saha çalışması" },
            { src: "/img/cadir/cadir-saha-5.webp", alt: "Açık hava çadır kurulumu etkinlik alanı" },
            { src: "/img/cadir/cadir-saha-7.webp", alt: "Çadır montaj detayı profesyonel kurulum" },
            { src: "/img/cadir/cadir-saha-8.webp", alt: "Güvenli çadır sabitleme ve ankraj" },
          ].map((photo) => (
            <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                quality={78}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-white/[0.04]" />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {INSTALLATION_STEPS.map((step, index) => (
            <article
              key={step.title}
              className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-500"
            >
              <div className="text-3xl font-black text-white mb-4">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-blue-100 text-base leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== SSS ================== */
function FAQ() {
  return (
    <section
      id="sss"
      className="[content-visibility:auto] [contain-intrinsic-size:auto_1500px] bg-white py-20"
      aria-labelledby="sss-baslik"
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-black uppercase tracking-widest text-blue-700">
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
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 open:bg-white open:shadow-sm"
            >
              <summary className="cursor-pointer list-none text-lg font-black text-gray-950">
                {faq.q}
              </summary>
              <p className="mt-4 text-base leading-7 text-gray-700">
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
      title: "Masa & Sandalye",
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
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-100/30"
      aria-labelledby="ek-hizmetler-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="ek-hizmetler-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Ek <span className="text-blue-700">Hizmetler</span>
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
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <Icon className="h-8 w-8 text-blue-700" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-black text-gray-950 group-hover:text-blue-700">
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
    offers: {
      "@type": "OfferCatalog",
      name: "Çadır Kiralama Fiyatları 2026",
      itemListElement: PRICING_ITEMS.map((item, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: item.title,
        description: item.description,
        priceCurrency: "TRY",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "TRY",
          description: item.price,
        },
        availability: "https://schema.org/InStock",
        url: pageUrl,
      })),
    },
    additionalProperty: TENT_STOCK.map((item) => ({
      "@type": "PropertyValue",
      name: item.title,
      value: `${item.capacity} ${item.typeLabel}`,
      description: item.description,
    })),
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
      url: `${ORIGIN}/img/cadir/hero.webp`,
      width: 1200,
      height: 630,
    },
    image: [`${ORIGIN}/img/cadir/hero.webp`, ...gallerySchema.imageUrls],
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
    thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${video.videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
  }));

  const productNodes = buildServiceProductSchema
    ? buildServiceProductSchema({
        serviceId,
        pageUrl,
        origin: ORIGIN,
        items: PRICING_ITEMS.map((item) => ({
          name: item.title,
          description: item.description,
          price: item.price,
        })),
      })
    : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode,
      serviceNode,
      serviceNode.offers,
      ...(gallerySchema.galleryNode ? [gallerySchema.galleryNode] : []),
      ...gallerySchema.imageNodes,
      faqNode,
      ...(Array.isArray(productNodes) ? productNodes : []),
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
        <path d="M0,0 L1440,28 L1440,48 L0,48 Z" fill="#0a1429" />
      </svg>
    </div>
  );
}

function DividerDarkToLight() {
  return (
    <div className="relative h-12 bg-[#0a1429] overflow-hidden -mb-px" aria-hidden="true">
      <svg viewBox="0 0 1440 48" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
        <path d="M0,28 L1440,0 L1440,48 L0,48 Z" fill="#f8fafc" />
      </svg>
    </div>
  );
}

function DividerDarkToWhite() {
  return (
    <div className="relative h-12 bg-[#0a1429] overflow-hidden -mb-px" aria-hidden="true">
      <svg viewBox="0 0 1440 48" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
        <path d="M0,28 L1440,0 L1440,48 L0,48 Z" fill="#ffffff" />
      </svg>
    </div>
  );
}

function DividerBlueToWhite() {
  return (
    <div className="relative h-12 overflow-hidden -mb-px" style={{background: "linear-gradient(to right, #1d40af, #6d28d9, #1e40af)"}} aria-hidden="true">
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
      <TentCalculatorCta />
      <TentSelectorSection />
      <DividerLightToDark />
      <TentStockSection />
      <DividerDarkToLight />
      <PricingSection />
      <TurnkeyInfrastructure />
      <Gallery />
      <DividerLightToDark />
      <StandardsTable />
      <UseCases />
      <InstallationProcess />
      <DividerBlueToWhite />
      <FAQ />
      <RelatedServices />

      <ServiceBlogLinks
        links={[
          {
            href: "/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping",
            label: "Dome Çadır Rehberi",
          },
          {
            href: "/blog/kurumsal-etkinlik-yonetimi",
            label: "Kurumsal Etkinlik Yönetimi Rehberi",
          },
        ]}
      />
    </>
  );
}

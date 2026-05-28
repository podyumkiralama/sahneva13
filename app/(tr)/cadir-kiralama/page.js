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

/* ================== Dinamik galeri (CaseGallery) ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => <GalleryFallbackCards />,
});

export const metadata = {
  title: "Çadır Kiralama | Profesyonel Etkinlik Çözümleri",
  description:
    "Düğün, fuar, konser ve özel etkinlikler için profesyonel çadır kiralama çözümleri. Pagoda, şeffaf, endüstriyel ve organizasyon çadırı seçenekleriyle Türkiye geneli hizmet.",
  alternates: {
    canonical: `${ORIGIN}/cadir-kiralama`,
    languages: {
      "tr-TR": `${ORIGIN}/cadir-kiralama`,
      "en": `${ORIGIN}/en/tent-rental`,
      "x-default": `${ORIGIN}/en/tent-rental`,
    },
  },
  openGraph: {
    title: "Çadır Kiralama | Profesyonel Etkinlik Çözümleri",
    description:
      "Düğün, fuar, konser ve özel etkinlikler için profesyonel çadır kiralama çözümleri. Pagoda, şeffaf, endüstriyel ve organizasyon çadırı seçenekleriyle Türkiye geneli hizmet.",
    url: `${ORIGIN}/cadir-kiralama`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/cadir/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon çadır kiralama – pagoda, şeffaf dome ve endüstriyel çadır çözümleri",
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
  "Endüstriyel iklimlendirme (klima/ısıtıcı) ve hava yönetimi",
  "Proje bazlı zemin kaplama, internet ve enerji altyapısı",
  "Uçtan uca saha yönetimi ve güvenli operasyon koordinasyonu",
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
  { src: "/img/cadir/1.webp", alt: "Pagoda çadır kurulumu - Düğün etkinliği için profesyonel çadır düzeni" },
  { src: "/img/cadir/2.webp", alt: "Şeffaf dome çadır - Özel davetler için atmosfer" },
  { src: "/img/cadir/3.webp", alt: "Endüstriyel çadır kurulumu - Depolama ve üretim alanı çözümü" },
  { src: "/img/cadir/4.webp", alt: "Fuar çadırı - Profesyonel sergi ve tanıtım alanı" },
  { src: "/img/cadir/5.webp", alt: "Aydınlatmalı çadır - Gece etkinlikleri için LED aydınlatma" },
  { src: "/img/cadir/6.webp", alt: "Konser çadırı - Açık hava etkinliği için çadır çözümü" },
  { src: "/img/cadir/7.webp", alt: "Kurulum ekibi - Profesyonel çadır kurulum süreci" },
  { src: "/img/cadir/8.webp", alt: "Markalama - Kurumsal etkinlikler için çözümler" },
  { src: "/img/cadir/9.webp", alt: "Çadır iç düzeni - Kurumsal etkinlik planı" },
  { src: "/img/cadir/10.webp", alt: "Geniş açıklıklı çadır - Etkinlik alanı düzeni" },
  { src: "/img/cadir/11.webp", alt: "Dekorasyon ve aydınlatma - Özel etkinlik atmosferi" },
  { src: "/img/cadir/12.webp", alt: "Çadır kurulum detayı - Profesyonel uygulama" },
];

const GALLERY_FALLBACK_CARDS = [
  {
    src: "/img/cadir/1.webp",
    title: "Pagoda çadır kurulumu",
    alt: "Pagoda çadır kiralama için karşılama ve fuaye alanı kurulumu",
  },
  {
    src: "/img/cadir/2.webp",
    title: "Şeffaf çadır davet alanı",
    alt: "Şeffaf çadır kiralama ile kır düğünü ve premium davet alanı",
  },
  {
    src: "/img/cadir/4.webp",
    title: "Büyük fuar ve festival çadırı",
    alt: "Fuar ve festival için büyük etkinlik çadırı kurulumu",
  },
  {
    src: "/img/cadir/3.webp",
    title: "Endüstriyel depo çadırı",
    alt: "Endüstriyel çadır kiralama ile geçici depo ve üretim alanı",
  },
];

const FAQ_ITEMS = [
  {
    q: "Çadır kiralama fiyatları ne kadar?",
    a: "2026 fiyatlarımız: 5×5 çadır 9.000 TL + nakliye, 4×4 çadır 8.000 TL + nakliye, 3×3 çadır 7.000 TL + nakliye. 10’luk, 20’lik, 30’luk ve 40’lık büyük ölçekli çadırlarda metrekare fiyatı 430 TL’dir.",
  },
  {
    q: "Çadır kurulumu ne kadar sürer?",
    a: "3x3, 4x4 ve 5x5 pagoda çadır kurulumları çoğu projede birkaç saat içinde tamamlanır. Büyük açıklıklı fuar, festival ve endüstriyel çadır projelerinde kurulum genellikle etkinlikten 1 gün önce planlanır.",
  },
  {
    q: "Çadırlar kötü hava koşullarına dayanıklı mı?",
    a: "Evet, çadırlarımız 90 km/s rüzgar hızına dayanıklıdır. TS EN 13782 standartlarına uygun üretilmiş alüminyum iskelet ve 650 gr/m² UV dayanımlı branda kullanıyoruz. Yağmur oluğu sistemi ile su tahliyesi sorunsuz şekilde sağlanır.",
  },
  {
    q: "Kadıköy, Şişli, Beşiktaş gibi merkezi yerlerde acil çadır kurulumu yapıyor musunuz?",
    a: "Evet. İstanbul Avrupa ve Anadolu yakalarındaki depolarımız sayesinde merkezi ilçelere trafiğe takılmadan, aynı gün veya saatler içinde ulaşıp hızlı kurulum sağlayabiliyoruz.",
  },
  {
    q: "Kocaeli, Bursa, Tekirdağ gibi çevre illere kiralama ve nakliye süreçleri nasıl işliyor?",
    a: "Marmara Bölgesi ve çevre illere kendi lojistik ağımızla hizmet veriyoruz. Uzaklık bazlı nakliye maliyetini ilk teklifte şeffaf olarak iletiyor, konaklama veya sürpriz masraf çıkarmadan anahtar teslim kurulum yapıyoruz."
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
    a: "Evet. Büyük etkinlik ve endüstriyel çadırlarda salon tipi klima, endüstriyel ısıtıcı, hava sirkülasyonu ve güç dağıtım planı proje bazında kurulabilir.",
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
    description:
      "Fuar, festival, belediye etkinliği ve endüstriyel alanlar için proje bazlı geniş açıklık.",
  },
];

const TENT_SELECTOR_CARDS = [
  {
    title: "Pagoda Çadır",
    badge: "Karşılama ve fuaye",
    usage: "Karşılama, fuaye, VIP alan, küçük etkinlik ve kayıt noktası",
    sizing: "3x3, 4x4 ve 5x5 modüllerle alan ihtiyacına göre büyür.",
    advantage: "Hızlı kurulur, kurumsal görünür ve yan yana çoğaltılabilir.",
  },
  {
    title: "Şeffaf Çadır",
    badge: "Premium davet",
    usage: "Kır düğünü, premium davet, lansman ve manzaralı açık alan",
    sizing: "Manzara, masa düzeni, ışık ve giriş aksına göre planlanır.",
    advantage: "Mekan hissini kapatmadan hava koşullarına karşı kontrollü alan sağlar.",
  },
  {
    title: "Büyük Etkinlik Çadırı",
    badge: "Fuar ve festival",
    usage: "Fuar, festival, belediye etkinliği ve kalabalık organizasyon",
    sizing: "10, 20, 30 ve 40 m geniş açıklık seçenekleriyle projelendirilir.",
    advantage: "Geniş açıklık, kontrollü giriş-çıkış ve teknik entegrasyon imkanı sunar.",
  },
  {
    title: "Endüstriyel Çadır",
    badge: "Uzun süreli alan",
    usage: "Depo, üretim alanı, geçici kapalı alan ve uzun süreli kullanım",
    sizing: "Stok, forklift akışı, kapı ölçüsü ve zemin türüne göre tasarlanır.",
    advantage: "Kalıcı inşaat beklemeden hızlı ve güvenli kapalı alan oluşturur.",
  },
];

const TENT_STOCK = [
  {
    title: "3x3 Pagoda Çadır",
    capacity: "120 adet",
    typeLabel: "Adet stok",
    group: "Pagoda çadır stokları",
    description:
      "Karşılama, kayıt, satış noktası, küçük tanıtım alanı ve VIP destek alanları için hızlı kurulum çözümü.",
  },
  {
    title: "4x4 Pagoda Çadır",
    capacity: "140 adet",
    typeLabel: "Adet stok",
    group: "Pagoda çadır stokları",
    description:
      "Fuaye, ikram, bilgilendirme, festival destek alanı ve açık hava etkinliklerinde modüler kullanım.",
  },
  {
    title: "5x5 Pagoda Çadır",
    capacity: "110 adet",
    typeLabel: "Adet stok",
    group: "Pagoda çadır stokları",
    description:
      "Kurumsal etkinlik, belediye organizasyonu, fuar, festival ve geniş operasyon alanları için güçlü pagoda çözümü.",
  },
  {
    title: "20 m Açıklıklı Çadır",
    capacity: "4.000 m²",
    typeLabel: "Kurulum kapasitesi",
    group: "Büyük açıklıklı çadır sistemleri",
    description:
      "Orta ve büyük ölçekli etkinlikler, fuar alanları, yemek alanları, sergi ve geçici kapalı alan ihtiyaçları.",
  },
  {
    title: "30 m Açıklıklı Çadır",
    capacity: "2.000 m²",
    typeLabel: "Kurulum kapasitesi",
    group: "Büyük açıklıklı çadır sistemleri",
    description:
      "Geniş katılımlı kurumsal organizasyonlar, festival alanları ve büyük kapalı etkinlik çözümleri.",
  },
  {
    title: "40 m Açıklıklı Çadır",
    capacity: "5.000 m²",
    typeLabel: "Kurulum kapasitesi",
    group: "Büyük açıklıklı çadır sistemleri",
    description:
      "Büyük fuar, festival, konser, belediye etkinliği ve endüstriyel kapalı alan projeleri için yüksek kapasiteli çözüm.",
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
    feature: "Rüzgâr Dayanımı",
    standard: "90 km/s rüzgâr dayanımı",
    detail: "Açık hava kurulumlarında zemin, açıklık ve hava durumu birlikte değerlendirilir.",
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
    description: "Boş bir alandan güvenli, iklimlendirmeli etkinlik alanına dönüşüm.",
  },
  {
    title: "Teknik Destek",
    description: "Etkinlik boyunca sahada güvenliği sağlayan uzman ekip.",
  },
];

const USE_CASES = [
  {
    icon: "💍",
    text: "Düğün ve özel davet çadırı",
    desc: "Şeffaf çadır, pagoda çadır, zemin kaplama ve atmosfer aydınlatmasıyla kontrollü davet alanı.",
    href: "/ses-isik-sistemleri",
    linkLabel: "ses ve ışık sistemleri",
  },
  {
    icon: "🎪",
    text: "Fuar ve sergi çadırı",
    desc: "Marka standları, ziyaretçi akışı ve ürün sergileme için geniş açıklıklı organizasyon çadırı.",
    href: "/led-ekran-kiralama",
    linkLabel: "LED ekran kiralama",
  },
  {
    icon: "🎤",
    text: "Konser ve festival çadırı",
    desc: "Kulis, sağlık, teknik operasyon ve izleyici destek alanları için hızlı kurulabilen çadır çözümleri.",
    href: "/sahne-kiralama",
    linkLabel: "sahne kiralama",
  },
  {
    icon: "🏛️",
    text: "Belediye ve kurumsal etkinlik çadırı",
    desc: "Tören, iftar, lansman ve protokol etkinlikleri için güvenli, planlı ve marka uyumlu kurulum.",
    href: "/kurumsal-organizasyon",
    linkLabel: "kurumsal organizasyon",
  },
  {
    icon: "🏭",
    text: "Endüstriyel depo çadırı",
    desc: "Geçici kapalı alan, üretim destek alanı ve uzun süreli depo ihtiyacı için geniş açıklıklı sistem.",
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


/* ================== HERO ================== */
const HERO_METRICS = [
  { value: "370", suffix: "adet", label: "Pagoda çadır stoğu" },
  { value: "11.000", suffix: "m²", label: "Büyük açıklıklı kapasite" },
  { value: "7.000 TL", suffix: "+ nakliye", label: "3x3 başlangıç fiyatı" },
  { value: "90 km/s", suffix: "standart", label: "Rüzgar dayanımı" },
];

const HERO_FORMATS = ["3x3", "4x4", "5x5", "20 m", "30 m", "40 m"];

function Hero() {
  return (
    <section
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-[#07111f] pt-16 pb-8 text-white md:pt-20 md:pb-10 lg:pt-20 lg:pb-10"
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
          quality={85}
          blurDataURL={BLUR_DATA_URL}
          placeholder="blur"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-blue-950/[0.78] to-cyan-950/[0.86]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.28),transparent_34%),radial-gradient(circle_at_82%_14%,rgba(59,130,246,0.24),transparent_32%),linear-gradient(to_top,rgba(2,6,23,0.96),rgba(2,6,23,0.20),rgba(2,6,23,0.76))]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6 md:py-8">
        <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(360px,420px)] xl:items-center 2xl:grid-cols-[minmax(0,1fr)_440px]">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 bg-white/[0.10] px-4 py-2 shadow-[0_18px_70px_rgba(14,165,233,0.18)] backdrop-blur-md">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-sm font-bold text-cyan-50">
                Pagoda, şeffaf ve büyük çadır çözümleri
              </span>
            </div>

            <h1
              id="hero-title"
              className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-normal md:text-7xl lg:text-[4.6rem] xl:text-[4.75rem] 2xl:text-[5.35rem]"
            >
              Anahtar Teslim{" "}
              <span className="block bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                Çadır Kiralama
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-xl font-semibold leading-relaxed text-white/[0.92] md:text-2xl">
              Pagoda çadır, şeffaf çadır, fuar/festival çadırı ve endüstriyel çadır
              seçeneklerini zemin, iklimlendirme, aydınlatma ve lojistikle tek ekipten planlıyoruz.
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-cyan-50/[0.78] md:text-lg">
              3x3, 4x4 ve 5x5 pagoda çadırların yanında büyük açıklıklı etkinlik çadırlarıyla
              düğün, lansman, belediye etkinliği, fuar ve geçici depo alanları için hızlı teklif.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp üzerinden hemen çadır kiralama teklifi alın"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-black text-white shadow-[0_18px_44px_rgba(16,185,129,0.28)] transition hover:from-emerald-400 hover:to-green-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                <span>Hemen Teklif Al</span>
              </Link>

              <Link
                href="#cadir-tipleri"
                aria-label="Çadır tiplerini incele"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/[0.24] bg-white/[0.10] px-8 py-4 font-black text-white shadow-[0_18px_44px_rgba(15,23,42,0.24)] backdrop-blur-md transition hover:bg-white/[0.16] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
              >
                <span>Çadır Tiplerini İncele</span>
              </Link>
            </div>
          </div>

          <aside className="relative w-full max-w-xl xl:max-w-none xl:justify-self-end" aria-label="Çadır kiralama kapasite özeti">
            <div
              className="absolute -inset-6 rounded-[2.5rem] bg-cyan-400/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="mb-3 flex items-center justify-between gap-4 rounded-2xl border border-white/[0.16] bg-white/[0.08] px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-cyan-200">
                    Operasyon özeti
                  </p>
                  <p className="mt-1 text-sm font-semibold text-cyan-50/[0.76]">
                    Ölçü, stok ve güvenlik aynı planda.
                  </p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black text-emerald-200">
                  Hazır stok
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {HERO_METRICS.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/[0.16] bg-white/[0.09] p-4 shadow-[0_18px_60px_rgba(2,6,23,0.26)] backdrop-blur-md"
                  >
                    <div className="text-3xl font-black leading-none text-white md:text-[2.15rem]">
                      {item.value}
                    </div>
                    <div className="mt-2 text-xs font-black uppercase tracking-wider text-cyan-200">
                      {item.suffix}
                    </div>
                    <div className="mt-3 text-sm font-semibold leading-5 text-cyan-50/[0.78]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-2xl border border-white/[0.16] bg-slate-950/35 p-4 backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-widest text-cyan-200">
                  Kurulum formatları
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {HERO_FORMATS.map((item) => (
                    <span
                      key={item}
                      className="whitespace-nowrap rounded-full border border-white/[0.16] bg-white/[0.08] px-3 py-1.5 text-sm font-black text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-6 text-cyan-50/[0.74]">
                  Pagoda, organizasyon çadırı ve büyük açıklıklı sistemler zemin,
                  aydınlatma ve iklimlendirme ihtiyaçlarıyla birlikte tekliflendirilir.
                </p>
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
      className="[content-visibility:auto] [contain-intrinsic-size:auto_1500px] lg:[contain-intrinsic-size:auto_760px] py-16 bg-white"
      aria-labelledby="cadir-tipleri-baslik"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-widest text-blue-700">
            Doğru çadırı hızlı seçin
          </p>
          <h2
            id="cadir-tipleri-baslik"
            className="mt-3 text-3xl font-black leading-tight text-gray-950 md:text-5xl"
          >
            Hangi Çadır Size Uygun?
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-700">
            Çadır kiralama kararında ölçü kadar kullanım amacı, zemin, hava koşulu,
            giriş-çıkış akışı ve teknik entegrasyon da belirleyicidir.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {TENT_SELECTOR_CARDS.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition hover:border-blue-200 hover:shadow-xl"
            >
              <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-blue-700">
                {item.badge}
              </span>
              <h3 className="mt-5 text-2xl font-black text-gray-950">{item.title}</h3>
              <dl className="mt-5 space-y-4 text-sm leading-6 text-gray-700">
                <div>
                  <dt className="font-black text-gray-950">Önerilen kullanım</dt>
                  <dd className="mt-1">{item.usage}</dd>
                </div>
                <div>
                  <dt className="font-black text-gray-950">Ölçü mantığı</dt>
                  <dd className="mt-1">{item.sizing}</dd>
                </div>
                <div>
                  <dt className="font-black text-gray-950">Avantaj</dt>
                  <dd className="mt-1">{item.advantage}</dd>
                </div>
              </dl>
            </article>
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
      className="[content-visibility:auto] [contain-intrinsic-size:auto_1800px] md:[contain-intrinsic-size:auto_1300px] lg:[contain-intrinsic-size:auto_940px] relative overflow-hidden bg-[#07111f] py-20 text-white"
      aria-labelledby="stok-kapasitesi-baslik"
    >
      <div
        className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:48px_48px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-[-10rem] top-8 h-80 w-80 rounded-full bg-cyan-400/20 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-blue-500/20 blur-[110px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.35fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-cyan-200">
              Stok ve büyük ölçek gücü
            </p>
            <h2
              id="stok-kapasitesi-baslik"
              className="mt-4 text-4xl font-black leading-tight md:text-5xl"
            >
              Çadır Stok ve Kurulum Kapasitesi
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-cyan-50/[0.92] md:text-lg">
              <p>
                Sahneva, farklı ölçeklerdeki çadır kiralama ihtiyaçları için güçlü
                stok ve kurulum kapasitesiyle hizmet verir. 3x3, 4x4 ve 5x5 pagoda
                çadır stoklarının yanı sıra 20 m, 30 m ve 40 m açıklıklı büyük çadır
                sistemleriyle fuar, festival, belediye etkinliği, kurumsal organizasyon,
                açık hava daveti ve geçici kapalı alan projeleri için anahtar teslim
                kurulum yapılabilir.
              </p>
              <p>
                Stok yapımız; 120 adet 3x3 pagoda çadır, 140 adet 4x4 pagoda çadır
                ve 110 adet 5x5 pagoda çadırdan oluşan güçlü modüler çözümlerle küçük
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
                <p className="text-xs font-black uppercase tracking-widest text-cyan-200">
                  {item.group}
                </p>
                <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
                <div className="mt-5">
                  <div className="text-4xl font-black leading-none text-white">
                    {item.capacity}
                  </div>
                  <div className="mt-2 text-sm font-bold text-cyan-100/[0.74]">
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
                Anahtar Teslim Operasyon Gücü
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
            <div className="bg-white rounded-3xl border border-blue-100 p-6 shadow-md w-full lg:max-w-xs">
              <h3 className="text-xl font-black text-gray-900 mb-4">
                Operasyonel Güç Paketi
              </h3>
              <div className="space-y-3 text-gray-600 text-base">
                <p>🔧 Saha keşfi ve zemin analizi</p>
                <p>⚡ Enerji sürekliliği ve güvenlik</p>
                <p>🏗️ Podyum ve Zemin Kaplama</p>
                <p>🌡️ Endüstriyel iklimlendirme</p>
              </div>
              <Link
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-bold text-white hover:scale-105 transition-transform duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600"
              >
                Operasyon Planı İsteyin
              </Link>
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
      title: "Devasa Kapalı Alan: Teknofest Fuar Çadırı",
      category: "Kurumsal & Fuar Etkinliği",
      transformation: "Rüzgarlı açık alan, binlerce ziyaretçiyi ağırlayacak güvenli bir teknoloji üssüne dönüştü.",
      before: "Açık fuar alanında rüzgar ve hava şartlarına dayanıklı, devasa ve kolonsuz bir kapalı alana ihtiyaç duyulması.",
      after: "10-20 metre geniş açıklıklı endüstriyel çadırlar; LED ekran, sahne, ses-ışık ve güç dağıtımıyla aynı teknik planda kuruldu.",
      result: "Ziyaretçi akışı, teknik alan ve etkinlik içi operasyon kapalı alan konforuyla yönetildi.",
      summary: "Uygulama özeti: büyük çadır, sahne, LED ekran, ses ve ışık entegrasyonu tek saha planında tamamlandı.",
    },
    {
      title: "Doğayla İç İçe: Sarıyer Premium Şeffaf Kır Düğünü",
      category: "Özel Davet & Düğün",
      transformation: "Yağmur riski taşıyan kır alanı, manzarayı kapatmayan lüks ve ışıltılı bir şeffaf salona evrildi.",
      before: "Orman içindeki düğünde yağmur riski bulunmasına rağmen, çiftin doğal manzarayı kapatmak istememesi.",
      after: "Tavanı ve yanları tamamen şeffaf dome ve pagoda çadırlar kuruldu, iç mekan estetik LED aydınlatmalarla süslendi.",
      result: "Gece ışıklandırmasıyla masalsı bir atmosfer yaratıldı, misafirler manzaradan kopmadan doğanın tadını çıkardı.",
      summary: "Uygulama özeti: şeffaf çadır, zemin düzeni ve ambiyans ışığı birlikte planlanarak yağmur riskine karşı kontrollü davet alanı oluşturuldu.",
    },
    {
      title: "Acil Alan İhtiyacı: Kocaeli Fabrika Endüstriyel Çadır",
      category: "Endüstriyel & Depolama",
      transformation: "Fabrikanın boş bahçesi, 48 saat içinde iklimlendirmeli ve güvenli bir üretim tesisine dönüştürüldü.",
      before: "Artan üretim kapasitesi nedeniyle Kocaeli'ndeki fabrikaya acil ve geniş bir kapalı alan (depo) ihtiyacı doğması.",
      after: "Ağır iş makinesi ve forkliftlerin rahatça girebileceği, yüksek tavanlı 20x40m endüstriyel çadır sistemi hızla inşa edildi.",
      result: "Müşterimiz kalıcı inşaat maliyeti ödemeden ve vakit kaybetmeden üretim kapasitesini başarıyla artırdı.",
      summary: "Uygulama özeti: forklift geçişi, yükleme aksı ve stok akışı dikkate alınarak geçici ama düzenli bir depo hacmi kuruldu.",
    },
    {
      title: "Prestijli Karşılama: Beşiktaş Kurumsal Lansman Çadırı",
      category: "Marka & Lansman",
      transformation: "Sıradan bir açık otel otoparkı, markanın VIP misafirlerini ağırladığı lüks bir fuaye alanına dönüştü.",
      before: "Lansman öncesi misafir karşılama (fuaye) alanı için otelin açık bölümünün estetik bir mekana çevrilme ihtiyacı.",
      after: "Sıralı 5x5 Pagoda çadırlar kuruldu, zemin özel halı ile kaplandı ve alan endüstriyel klimalarla ısıtıldı.",
      result: "VIP misafirler sıcak ve şık bir ortamda ağırlandı, markanın kurumsal imajı en üst seviyeye taşındı.",
      summary: "Uygulama özeti: pagoda çadır, halı zemin ve iklimlendirme ile marka lansmanına uygun bir fuaye alanı hazırlandı.",
    }
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
            Galeriyi karar vermeyi hızlandıracak şekilde sadeleştirdik: öne çıkan
            uygulama özeti, seçilmiş saha görselleri ve iki kısa video aynı bölümde.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SUCCESS_STORIES.map((story) => (
            <article
              key={story.title}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg"
            >
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-blue-700">
                {story.category}
              </span>
              <h3 className="mt-5 text-xl font-black leading-tight text-gray-950">
                {story.title}
              </h3>
              <p className="mt-4 text-sm font-semibold leading-6 text-blue-700">
                {story.transformation}
              </p>
              <div className="mt-5 border-t border-slate-100 pt-5">
                <div className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" aria-hidden="true" />
                  <p className="text-sm leading-6 text-gray-700">{story.summary}</p>
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
              Daha fazla uygulama örneği gerekiyorsa projeler sayfası hazır.
            </h4>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Burada sayfayı uzatmadan ana kanıtları gösterdik; detaylı fotoğraf arşivi
              proje galerisinde kalıyor.
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
          <div className="relative bg-[#07111f] px-6 py-8 text-white md:px-10">
            <div
              className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:42px_42px]"
              aria-hidden="true"
            />
            <div
              className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-400/20 blur-[80px]"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-cyan-200">
                  Net başlangıç bedelleri
                </p>
                <h2 id="fiyatlandirma-baslik" className="mt-3 text-3xl font-black md:text-5xl">
                  Çadır Kiralama Fiyatları 2026
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-cyan-50/[0.82]">
                Ölçü, tarih, şehir, zemin ve ek hizmetler paylaşıldığında nihai teklif
                aynı gün içinde netleştirilir.
              </p>
            </div>
          </div>

          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            {PRICING_ITEMS.map((item) => (
              <article
                key={item.title}
                className="border-t border-slate-200 p-6 md:border-l md:border-t-0 lg:p-8 first:md:border-l-0"
              >
                <h3 className="text-xl font-black text-gray-950">{item.title}</h3>
                <div className="mt-4 text-3xl font-black text-blue-700">
                  {item.price}
                  <span className="ml-2 text-sm font-bold text-gray-500">+ nakliye</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{item.description}</p>
              </article>
            ))}
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
            className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-green-600 px-8 py-4 font-black text-white shadow-lg transition hover:bg-green-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
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
      className="[content-visibility:auto] [contain-intrinsic-size:auto_1400px] lg:[contain-intrinsic-size:auto_880px] relative overflow-hidden bg-[#07111f] py-20 text-white nc-CadirKiralamaPage-section-standards"
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

/* ================== Kurulum Süreci ================== */
function InstallationProcess() {
  return (
    <section
      className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white nc-CadirKiralamaPage-section-process"
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
            Operasyonu adım adım görün.
          </p>
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

/* ================== İstatistik Bant ================== */
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
            Çadır çözümlerimizin tercih edildiği başlıca etkinlik türleri
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
      </div>
    </section>
  );
}

/* ================== Bölgesel Hizmet Kapsamı ================== */
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
            Çadır kurulumunuzu uçtan uca tamamlayacak diğer profesyonel çözümler
          </p>
          <div
            className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"
            aria-hidden="true"
          />
        </div>

        <nav aria-label="Ek hizmetler">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 text-center focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white h-full flex flex-col"
                aria-label={`${service.title} - ${service.desc}`}
              >
                <div
                  className="mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <service.Icon size={36} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-4 flex-grow">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}

/* ================== Bilgi & Rehber ================== */
function FAQ() {
  return (
    <section className="py-20 bg-white" aria-labelledby="sss-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2
            id="sss-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Sık Sorulan{" "}
            <span className="gradient-text gradient-text--safe-xl">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Çadır kiralama hakkında merak edilen sorular ve cevapları
          </p>
        </div>

        <div className="space-y-6">
          {FAQ_ITEMS.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-500 open:bg-blue-50 open:border-blue-200 border-2 border-transparent open:border"
            >
              <summary
                className="cursor-pointer list-none flex items-center justify-between text-xl font-bold text-gray-900"
              >
                <span className="pr-4">{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 transition-transform duration-500 group-open:rotate-180 text-blue-600 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
                >
                  ⌄
                </span>
              </summary>

              <div className="mt-6 text-gray-700 leading-relaxed text-lg pl-4 border-l-4 border-blue-500">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla sorunuz mu var? Uzman ekibimiz sizi arayıp bilgilendirsin.
          </p>
          <Link
            href="/sss"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600"
            aria-label="Sık Sorulan Sorular sayfasındaki tüm soruları görüntüle"
          >
            <span aria-hidden="true" className="text-xl mr-3">📚</span>
            <span className="text-lg">Tüm SSS'yi Görüntüle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== JSON-LD (Çadır Kiralama) — SSR SAFE ================== */
function TentRentalJsonLd() {
  const pageUrl = `${ORIGIN}/cadir-kiralama`;
  const pageDescription = metadata?.description || "";
  const webPageId = `${pageUrl}#webpage`;

  const provider = { "@id": ORGANIZATION_ID };

  const schemaResult = buildServiceProductSchema({
    slug: "/cadir-kiralama",
    locale: "tr-TR",
  }) || {};
  
  const serviceSchema = schemaResult.service || {};
  const productNodes = schemaResult.products || [];

  const offerCatalogId = `${pageUrl}#offer-catalog`;

  const offerCatalogNode = {
    "@type": "OfferCatalog",
    "@id": offerCatalogId,
    name: "Çadır Kiralama Fiyatları (Paket + m²)",
    itemListElement: [
      {
        "@type": "Offer",
        "@id": `${pageUrl}#offer-3x3`,
        name: "3×3 Çadır Kiralama",
        url: pageUrl,
        priceCurrency: "TRY",
        price: "7000",
        availability: "https://schema.org/InStock",
        businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
        description: "9 m² kompakt alanlar için hızlı kurulum çadır paketi. (Nakliye hariç)",
      },
      {
        "@type": "Offer",
        "@id": `${pageUrl}#offer-4x4`,
        name: "4×4 Çadır Kiralama",
        url: pageUrl,
        priceCurrency: "TRY",
        price: "8000",
        availability: "https://schema.org/InStock",
        businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
        description: "16 m² orta ölçekli kurulumlar için çadır paketi. (Nakliye hariç)",
      },
      {
        "@type": "Offer",
        "@id": `${pageUrl}#offer-5x5`,
        name: "5×5 Çadır Kiralama",
        url: pageUrl,
        priceCurrency: "TRY",
        price: "9000",
        availability: "https://schema.org/InStock",
        businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
        description: "25 m² etkinlik ve davetler için pagoda çadır paketi. (Nakliye hariç)",
      },
      {
        "@type": "Offer",
        "@id": `${pageUrl}#offer-m2`,
        name: "Geniş Açıklıklı Çadırlar (10 / 20 / 30 / 40 m) — m² Fiyatı",
        url: pageUrl,
        availability: "https://schema.org/InStock",
        businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "430",
          priceCurrency: "TRY",
          unitCode: "MTK",
          unitText: "m²",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Genişlik seçenekleri (m)",
            value: "10, 20, 30, 40",
          },
          {
            "@type": "PropertyValue",
            name: "Uzunluk",
            value: "Müşteri tercihine göre",
          },
        ],
        description:
          "Genişlik 10/20/30/40 metredir. Uzunluk müşteri tercihine göre belirlenir. Fiyat 430 TL / m²’dir. Nakliye ve saha koşulları proje bazlıdır.",
      },
    ],
  };

  const baseService = {
    "@type": "Service",
    name: "Çadır Kiralama",
    description: pageDescription,
    serviceType: "Etkinlik Çadır Kiralama",
    provider,
    areaServed: { "@type": "AdministrativeArea", name: "Türkiye" },
    url: pageUrl,
    mainEntityOfPage: { "@id": webPageId },
    hasOfferCatalog: { "@id": offerCatalogId },
  };

  const serviceNode = {
    ...serviceSchema,
    ...baseService,
    "@type": "Service",
    "@id": serviceSchema["@id"] || `${pageUrl}#service`,
    provider,
  };
  serviceNode.additionalProperty = [
    ...(Array.isArray(serviceSchema.additionalProperty)
      ? serviceSchema.additionalProperty
      : []),
    ...TENT_STOCK.map((item) => ({
      "@type": "PropertyValue",
      name: item.title,
      value: `${item.capacity} ${item.typeLabel}`,
      description: item.description,
    })),
  ];
  const serviceId = serviceNode["@id"];
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
    name: "Çadır Kiralama 2026 | Pagoda, Şeffaf ve Etkinlik Çadırı | Sahneva",
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode,
      serviceNode,
      offerCatalogNode,
      ...(gallerySchema.galleryNode ? [gallerySchema.galleryNode] : []),
      ...gallerySchema.imageNodes,
      faqNode,
      ...productNodes,
      ...videoNodes,
    ],
  };

  return <JsonLdScript id="ld-json-cadir" data={jsonLd} />;
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
      <TentSelectorSection />
      <TentStockSection />
      <PricingSection />
      <TurnkeyInfrastructure />
      <Gallery />
      <StandardsTable />
      <UseCases />
      <InstallationProcess />
      <FAQ />
      <RelatedServices />
      <ServiceBlogLinks
        links={[
          {
            href: "/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping",
            label: "Dome Çadır Rehberi: 360° Mapping",
          },
          {
            href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
            label: "2026 Kurumsal Etkinlik Planlama Rehberi",
          },
        ]}
      />
    </>
  );
}

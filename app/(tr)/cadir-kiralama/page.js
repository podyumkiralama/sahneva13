// app/(tr)/cadir-kiralama/page.jsx
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import VideoEmbed from "@/components/VideoEmbed.client";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildServiceProductSchema } from "@/lib/structuredData/serviceProducts";
import { WEBSITE_ID } from "@/lib/seo/schemaIds";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import { 
  Monitor, 
  Shield, 
  Zap, 
  MessageCircle, 
  CheckCircle, 
  Eye, 
  Truck, 
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
  loading: () => (
    <div
      className="flex justify-center items-center h-64"
      role="status"
      aria-label="Galeri yükleniyor"
    >
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
        aria-hidden="true"
      />
      <span className="sr-only">Galeri yükleniyor...</span>
    </div>
  ),
});

/* ================== META ================== */
export const metadata = {
  title: "Çadır Kiralama | Profesyonel Etkinlik Çözümleri",
  description:
    "Pagoda, şeffaf dome, endüstriyel çadır kiralama. Zemin kaplama, aydınlatma ve profesyonel kurulum. Türkiye geneli hızlı hizmet.",
  alternates: {
    canonical: `${ORIGIN}/cadir-kiralama`,
    languages: {
      "tr-TR": `${ORIGIN}/cadir-kiralama`,
      "en": `${ORIGIN}/en/tent-rental`,
      "x-default": `${ORIGIN}/en/tent-rental`,
    },
  },
  openGraph: {
    title: "Çadır Kiralama | Sahneva",
    description:
      "Pagoda, şeffaf ve endüstriyel çadır çözümleri. Türkiye geneli profesyonel kurulum ve tamamlayıcı hizmetler.",
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
    title: "Çadır Kiralama | Profesyonel Etkinlik Çözümleri | Sahneva",
    description:
      "Pagoda, şeffaf dome, endüstriyel çadır kiralama. Zemin kaplama, aydınlatma ve profesyonel kurulum.",
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
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, " ve ")
    .replace(/[^a-z0-9çğıöşü\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const HERO = {
  src: "/img/cadir/hero.webp",
  alt: "Profesyonel çadır kurulumu - Pagoda çadır ve etkinlik alanı düzenlemesi",
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
      "Teknofest’te kurduğumuz çadırın iç görünümü, sahne, LED ekran, ses ve ışık detayları.",
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

const FAQ_ITEMS = [
  {
    q: "Çadır kiralama fiyatları ne kadar?",
    a: "2026 fiyatlarımız: 5×5 çadır 9.000 TL + nakliye, 4×4 çadır 8.000 TL + nakliye, 3×3 çadır 7.000 TL + nakliye. 10’luk, 20’lik, 30’luk ve 40’lık büyük ölçekli çadırlarda metrekare fiyatı 430 TL’dir.",
  },
  {
    q: "Çadır kurulumu ne kadar sürer?",
    a: "5×5 metre çadır kurulumu genellikle 2-3 saat, 6×6 metre çadır kurulumu ise 3-4 saat sürmektedir. Büyük ölçekli projelerde kurulum 1 gün önceden tamamlanır. Acil durumlarda express kurulum hizmeti sunuyoruz.",
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
  }
];

const PRICING_ITEMS = [
  {
    title: "5x5 Çadır",
    price: "9.000 TL + nakliye",
    description: "Etkinlik ve davetler için 25 m² pagoda çadır paketi.",
  },
  {
    title: "4x4 Çadır",
    price: "8.000 TL + nakliye",
    description: "Orta ölçekli kurulumlar için 16 m² çadır çözümü.",
  },
  {
    title: "3x3 Çadır",
    price: "7.000 TL + nakliye",
    description: "Kompakt alanlar için 9 m² hızlı kurulum çadırı.",
  },
  {
    title: "Geniş Açıklıklı Çadırlar",
    price: "430 TL / m²",
    description:
      "10 m, 20 m, 30 m ve 40 m genişlik seçenekleri. Uzunluk tercihinize göre belirlenir. Büyük ölçekli etkinlikler içindir.",
  },
];

const STANDARDS = [
  {
    feature: "Rüzgar Dayanımı",
    standard: "90 km/s (TS EN 13782 Sertifikalı)",
  },
  {
    feature: "Branda Kalitesi",
    standard: "650 gr/m² UV korumalı, B1 alev yürümez",
  },
  {
    feature: "Kurulum Süresi",
    standard: "2 - 8 saat (Express Kurulum Seçeneği ile)",
  },
  {
    feature: "Ekstra Donanım",
    standard: "İklimlendirme, akustik çözüm, LED entegrasyonu",
  },
];

const CHALLENGES = [
  {
    title: "İklimlendirme ve Havalandırma",
    description:
      "Açık alandaki zorlu hava şartlarına karşı, çadır içini dev salon tipi klimalar veya endüstriyel ısıtıcılarla tamamen izole ediyoruz.",
  },
  {
    title: "Güvenli Zemin ve Ankraj",
    description:
      "Çim, toprak veya beton zemin fark etmeksizin, alana zarar vermeyen profesyonel çelik ağırlıklar veya zemin çivileriyle sıfır riskli sabitleme yapıyoruz.",
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

const SERVICES = [
  {
    icon: "🏕️",
    title: "Pagoda Çadır Sistemleri",
    description:
      "5×5m ve 6×6m modüler sistemler ile estetik ve fonksiyonel çözümler",
    features: ["Yüksek tepe noktası", "Modüler birleşim", "Yan branda opsiyonu", "Hızlı kurulum"],
  },
  {
    icon: "🔮",
    title: "Şeffaf Dome Çadırlar",
    description: "Doğa manzaralı, gece aydınlatmasına uygun şeffaf çadır sistemleri",
    features: ["Weather-proof yapı", "Tamamen şeffaf yüzey", "Davet organizasyonları", "Estetik aydınlatma"],
  },
  {
    icon: "🏭",
    title: "Endüstriyel Çadırlar",
    description: "Geniş açıklıklı, kolonsuz depolama ve üretim alanı çözümleri",
    features: ["Kolonsuz dev alan", "Uzun süreli kullanım", "Ağır hava şartlarına direnç", "Depo / Fabrika eki"],
  },
  {
    icon: "🎪",
    title: "Fuar & Sergi Çadırları",
    description: "Profesyonel fuar ve sergi alanları için optimize edilmiş dev sistemler",
    features: ["Stand uyumu", "Geniş yürüyüş yolları", "Profesyonel görünüm", "İklimlendirme"],
  },
  {
    icon: "💡",
    title: "Aydınlatma & İklimlendirme",
    description: "Çadır içi aydınlatma, ısıtma/soğutma ve elektrik altyapı çözümleri",
    features: ["Salon tipi klima", "Endüstriyel ısıtıcı", "LED & Truss aydınlatma", "Güç dağıtımı"],
  },
  {
    icon: "🔧",
    title: "Kurulum & Zemin Kaplama",
    description: "Zemin eşitleme, podyum, halı kaplama ve güvenli söküm hizmetleri",
    features: ["Podyum zemin", "Protokol halısı", "Söküm hizmeti", "7/24 destek"],
  },
];

const USE_CASES = [
  { icon: "💍", text: "Düğün, kına ve özel davetler", desc: "Özel günler için şık ve şeffaf çadır çözümleri" },
  { icon: "🎪", text: "Fuar, sergi ve lansmanlar", desc: "Markanızı öne çıkaran geniş açıklıklı tanıtım alanları" },
  { icon: "🎤", text: "Konser, festival ve etkinlikler", desc: "Kulis, sağlık ve operasyon çadır çözümleri" },
  { icon: "🏛️", text: "Belediye ve kurumsal etkinlikler", desc: "Miting, iftar ve törenler için güvenli protokol alanları" },
  { icon: "🏭", text: "Endüstriyel ve depolama", desc: "Fabrikalar için geçici kolonsuz üretim ve depo çadırları" },
  { icon: "🏫", text: "Okul ve eğitim etkinlikleri", desc: "Mezuniyet, bahar şenliği ve kermesler için çözümler" },
];


/* ================== HERO ================== */
function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-20 pb-14 md:pb-16 lg:pt-24"
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
          className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-800/70 to-blue-950/90"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-purple-900/60"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white py-12">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/30 mb-6">
          <span className="relative flex w-2 h-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full w-2 h-2 bg-green-500" />
          </span>
          <span className="text-sm font-bold text-white">
            Türkiye Geneli Profesyonel Hizmet
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 drop-shadow-2xl"
        >
          Profesyonel{" "}
          <span className="gradient-text gradient-text--safe-xl">
            Çadır Kiralama
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/95 max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed font-light mb-4">
          Düğün • Fuar • Festival • Lansman • Depolama • Özel Etkinlikler
        </p>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl 2xl:max-w-3xl mx-auto leading-relaxed font-normal mb-6">
          Pagoda çadırlar, şeffaf sistemler ve dev endüstriyel çadırlar ile
          <span className="font-semibold text-white"> anahtar teslim çözümler</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp üzerinden hemen teklif alın"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400 shadow-lg"
          >
            <span aria-hidden="true" className="text-xl mr-2">💬</span>
            <span className="text-base">Hemen Teklif Al</span>
          </Link>

          <Link
            href="#hizmetler"
            aria-label="Hizmetlerimiz hakkında daha fazla bilgi edinin"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white/95 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white shadow-lg"
          >
            <span aria-hidden="true" className="text-xl mr-2">🎯</span>
            <span className="text-base">Hizmetlerimiz</span>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <span className="text-2xl mb-2" aria-hidden="true">⭐</span>
            <div className="text-xl font-black text-white">4.9/5</div>
            <div className="text-white/80 text-sm">Doğrulanmış Puan</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <span className="text-2xl mb-2" aria-hidden="true">🏆</span>
            <div className="text-xl font-black text-white">700+</div>
            <div className="text-white/80 text-sm">Başarılı Proje</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <span className="text-2xl mb-2" aria-hidden="true">🚀</span>
            <div className="text-xl font-black text-white">81 İl</div>
            <div className="text-white/80 text-sm">Lojistik Ağı</div>
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

/* ================== Hizmetler ================== */
function Services() {
  return (
    <section
      id="hizmetler"
      className="py-20 bg-gradient-to-b from-white to-blue-50/50 nc-CadirKiralamaPage-section-1"
      aria-labelledby="hizmetler-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="hizmetler-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Profesyonel{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Hizmetlerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Çadır kiralama hizmetlerimiz: keşif, projelendirme, kurulum, iklimlendirme ve teknik destek
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service) => {
            const id = `svc-${slugify(service.title)}`;
            return (
              <div key={id} className="group">
                <article
                  className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl p-8 group-hover:scale-105 transition-all duration-500 h-full flex flex-col"
                  aria-labelledby={id}
                >
                  <div
                    className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                  <h3
                    id={id}
                    className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors"
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span
                          className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600"
          >
            <span aria-hidden="true" className="text-xl mr-3">📞</span>
            <span>Detaylı Teklif için İletişime Geçin</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Geliştirilmiş Galeri ve Başarı Hikayeleri (SEO + Video + Metin Linki) ================== */
function Gallery() {
  const SUCCESS_STORIES = [
    {
      title: "Devasa Kapalı Alan: Teknofest Fuar Çadırı",
      category: "Kurumsal & Fuar Etkinliği",
      transformation: "Rüzgarlı açık alan, binlerce ziyaretçiyi ağırlayacak güvenli bir teknoloji üssüne dönüştü.",
      before: "Açık fuar alanında rüzgar ve hava şartlarına dayanıklı, devasa ve kolonsuz bir kapalı alana ihtiyaç duyulması.",
      after: "10-20 metre geniş açıklıklı endüstriyel tip çadırlar, tonlarca beton ağırlıkla ankre edilerek kusursuz bir şekilde kuruldu.",
      result: "Ziyaretçiler olumsuz hava şartlarından etkilenmeden konforla fuarı gezdi, projeye %100 operasyonel güvence sağlandı.",
      quote: "Böylesine zorlu bir sahada rüzgara ve yağmura karşı tam koruma sağladılar. Profesyonel bir ekipti.",
      client: "Teknofest Operasyon Komitesi"
    },
    {
      title: "Doğayla İç İçe: Sarıyer Premium Şeffaf Kır Düğünü",
      category: "Özel Davet & Düğün",
      transformation: "Yağmur riski taşıyan kır alanı, manzarayı kapatmayan lüks ve ışıltılı bir şeffaf salona evrildi.",
      before: "Orman içindeki düğünde yağmur riski bulunmasına rağmen, çiftin doğal manzarayı kapatmak istememesi.",
      after: "Tavanı ve yanları tamamen şeffaf dome ve pagoda çadırlar kuruldu, iç mekan estetik LED aydınlatmalarla süslendi.",
      result: "Gece ışıklandırmasıyla masalsı bir atmosfer yaratıldı, misafirler manzaradan kopmadan doğanın tadını çıkardı.",
      quote: "Şeffaf çadır sayesinde yağmur yağarken gökyüzünü izlemek hayatımızın en güzel anlarındandı.",
      client: "Gelin & Damat"
    },
    {
      title: "Acil Alan İhtiyacı: Kocaeli Fabrika Endüstriyel Çadır",
      category: "Endüstriyel & Depolama",
      transformation: "Fabrikanın boş bahçesi, 48 saat içinde iklimlendirmeli ve güvenli bir üretim tesisine dönüştürüldü.",
      before: "Artan üretim kapasitesi nedeniyle Kocaeli'ndeki fabrikaya acil ve geniş bir kapalı alan (depo) ihtiyacı doğması.",
      after: "Ağır iş makinesi ve forkliftlerin rahatça girebileceği, yüksek tavanlı 20x40m endüstriyel çadır sistemi hızla inşa edildi.",
      result: "Müşterimiz kalıcı inşaat maliyeti ödemeden ve vakit kaybetmeden üretim kapasitesini başarıyla artırdı.",
      quote: "Betonarme bir depo yapmak aylarca sürecekken, ekipler iki günde bize devasa bir tesis kurdu.",
      client: "Fabrika Tedarik Müdürü"
    },
    {
      title: "Prestijli Karşılama: Beşiktaş Kurumsal Lansman Çadırı",
      category: "Marka & Lansman",
      transformation: "Sıradan bir açık otel otoparkı, markanın VIP misafirlerini ağırladığı lüks bir fuaye alanına dönüştü.",
      before: "Lansman öncesi misafir karşılama (fuaye) alanı için otelin açık bölümünün estetik bir mekana çevrilme ihtiyacı.",
      after: "Sıralı 5x5 Pagoda çadırlar kuruldu, zemin özel halı ile kaplandı ve alan endüstriyel klimalarla ısıtıldı.",
      result: "VIP misafirler sıcak ve şık bir ortamda ağırlandı, markanın kurumsal imajı en üst seviyeye taşındı.",
      quote: "Kusursuz bir zemin ve harika bir iklimlendirme. Çadırın içinde olduğumuzu hissetmedik bile.",
      client: "Kurumsal İletişim Direktörü"
    }
  ];

  return (
    <section className="py-20 bg-slate-50" aria-labelledby="galeri-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* 1. Kısa Giriş Paragrafı */}
        <div className="text-center mb-16">
          <h2 id="galeri-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Gerçek <span className="text-blue-700">Başarı Hikayelerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Projelerimizin kalitesi, etkinliğinizin en büyük güvencesidir. Referanslarımız ve uygulama örneklerimizle, açık alanları nasıl güvenilir kapalı mekanlara dönüştürdüğümüzü keşfedin.
          </p>
        </div>

        {/* 2. Başarı Hikayeleri Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {SUCCESS_STORIES.map((story, index) => (
            <article key={index} className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
              
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-wider">
                  {story.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight">{story.title}</h3>
              
              <p className="text-blue-700 font-semibold italic text-base mb-6 pb-6 border-b border-gray-100">
                ✨ {story.transformation}
              </p>
              
              <div className="space-y-5 flex-grow">
                <div className="relative pl-4 border-l-4 border-orange-400">
                  <h4 className="text-xs font-black text-orange-600 uppercase tracking-widest mb-1">Durum / İhtiyaç</h4>
                  <p className="text-gray-700 text-sm">{story.before}</p>
                </div>
                <div className="relative pl-4 border-l-4 border-blue-500">
                  <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">Teknik Çözüm</h4>
                  <p className="text-gray-700 text-sm">{story.after}</p>
                </div>
                <div className="relative pl-4 border-l-4 border-green-500">
                  <h4 className="text-xs font-black text-green-600 uppercase tracking-widest mb-1">Etki / Sonuç</h4>
                  <p className="text-gray-900 font-medium text-sm">{story.result}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 bg-gray-50/50 -mx-8 -mb-8 p-8 rounded-b-[2rem]">
                <div className="flex gap-3">
                  <MessageCircle className="text-blue-300 flex-shrink-0" size={32} />
                  <div>
                    <p className="text-gray-700 italic text-sm mb-2 font-medium">"{story.quote}"</p>
                    <p className="text-xs font-black text-gray-900 uppercase tracking-wider">— {story.client}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 3. SEO LİSTESİ: Kısa Okunabilir Uygulama Listesi */}
        <div className="mb-16 bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Popüler Çadır Uygulama ve Kiralama Seçeneklerimiz</h3>
          <p className="text-gray-600 mb-6">Bugüne kadar gerçekleştirdiğimiz bazı uygulama örnekleri ve aranan hizmetlerimiz:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "İstanbul Çadır Kiralama",
              "Şeffaf Çadır Kiralama",
              "Organizasyonlar İçin Kiralık Çadır",
              "Fuar ve Etkinlik Çadırı Kiralama",
              "Düğün ve Nişan Çadırı",
              "Kiralık Dev Endüstriyel Çadır",
              "Pagoda Çadır Kiralama",
              "Çadır Kiralama ve Kurulumu",
              "Çadır, Zemin ve İklimlendirme Sistemleri"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-800 font-semibold text-sm md:text-base">
                <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Görsel Galeri Alanı */}
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Sahadan Uygulama Görselleri</h3>
          <p className="text-lg text-gray-600 mb-8">Farklı etkinlik tiplerinden en güncel çadır kurulum karelerimiz</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <CaseGallery images={GALLERY_IMAGES} visibleCount={8} priorityCount={2} />
        </div>

        {/* 5. Video Galerisi Alanı */}
        <div className="mt-20 mb-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Video <span className="text-blue-700">Galerisi</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Zorlu kurulumlarımızdan ve saha operasyonlarımızdan seçilmiş kısa videolar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {VIDEO_EMBEDS.map((video) => (
              <article
                key={video.videoId}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                aria-labelledby={`video-${video.videoId}-title`}
              >
                <div className="relative w-full aspect-video bg-black">
                  <VideoEmbed
                    videoId={video.videoId}
                    title={video.title}
                    thumbnailUrl={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h4
                    id={`video-${video.videoId}-title`}
                    className="text-xl font-black text-gray-900 mb-3"
                  >
                    {video.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                    {video.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 6. YÖNLENDİRME METNİ VE BUTON */}
        <div className="mt-16 bg-gradient-to-br from-blue-900 to-slate-900 rounded-[2.5rem] p-8 md:p-14 text-center border border-blue-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <h4 className="text-3xl md:text-4xl font-black text-white mb-6">
              Daha Fazla İlham Mı Arıyorsunuz?
            </h4>
            
            {/* Ahrefs/Google Botları için doğrudan HTML Metin Linki */}
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Daha fazla uygulama örneği ve detaylı görsel için <a href="/projeler" className="underline font-bold text-white hover:text-blue-200 transition-colors">Tüm Proje Galerimizi inceleyin</a>. Yüzlerce başarılı referansımız arasından etkinliğinize en uygun çadır çözümünü birlikte tasarlayalım.
            </p>
            
            {/* Kullanıcılar İçin Etkileşimli Buton */}
            <Link
              href="/projeler"
              className="inline-flex items-center justify-center font-black px-10 py-5 rounded-2xl bg-white text-blue-900 hover:bg-blue-50 transform transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
            >
              <Eye size={24} className="mr-3" aria-hidden="true" />
              <span className="text-lg">Tüm Resimleri Gör</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================== Teknik Altyapı ================== */
function Technical() {
  const technicalItems = [
    {
      category: "malzeme",
      title: "Malzeme Kalitesi",
      description:
        "Alüminyum iskelet, çelik bağlantı elemanları ve UV dayanımlı branda",
      features: ["Alüminyum iskelet sistem", "650 gr/m² branda", "Alev yürütmez malzeme", "Çelik bağlantı elemanları"],
    },
    {
      category: "guvenlik",
      title: "Güvenlik Sistemleri",
      description: "TS EN standartlarına uygun güvenlik ve stabilite sistemleri",
      features: ["90 km/s rüzgar dayanımı", "Profesyonel ankraj", "Ağırlıklandırma sistemi", "Yağmur oluğu"],
    },
    {
      category: "olcu",
      title: "Ölçü & Kombinasyonlar",
      description: "Modüler sistemler ile esnek ölçü ve birleşim seçenekleri",
      features: ["5×5m / 6×6m pagoda", "Proje bazlı ölçülendirme", "10-20m geniş açıklık", "Yan yana birleştirme"],
    },
    {
      category: "kurulum",
      title: "Kurulum Süreçleri",
      description: "Hızlı kurulum, söküm ve lojistik hizmetleri",
      features: ["2-6 saat kurulum", "Profesyonel ekip", "Lojistik desteği", "Söküm hizmeti"],
    },
    {
      category: "destek",
      title: "Teknik Destek",
      description: "7/24 teknik destek ve acil müdahale hizmetleri",
      features: ["7/24 teknik destek", "Acil müdahale ekibi", "Yedek parça stoğu", "Bakım hizmetleri"],
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white nc-CadirKiralamaPage-section-3"
      aria-labelledby="altyapi-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="altyapi-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Teknik{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Altyapımız
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Profesyonel ekipmanlar ve güçlü teknik altyapı ile hizmetinizdeyiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {technicalItems.map((item) => (
            <div key={item.category} className="group">
              <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl group-hover:scale-105 transition-all duration-500 h-full">
                <h3 className="font-bold text-2xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">
                    {item.category === "malzeme" && "🏗️"}
                    {item.category === "guvenlik" && "🛡️"}
                    {item.category === "olcu" && "📐"}
                    {item.category === "kurulum" && "⚡"}
                    {item.category === "destek" && "📞"}
                  </span>
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span
                        className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Sahneva Standartları ================== */
function StandardsTable() {
  return (
    <section
      className="py-20 bg-white nc-CadirKiralamaPage-section-standards"
      aria-labelledby="sahneva-standartlari-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="sahneva-standartlari-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Sahneva{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Standartları
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Güven veren teknik detayları şeffaf biçimde paylaşıyoruz.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-base">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 font-bold">Özellik</th>
                  <th className="px-6 py-4 font-bold">Standartlarımız</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {STANDARDS.map((row) => (
                  <tr key={row.feature} className="hover:bg-blue-50/40">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{row.standard}</td>
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

/* ================== Zorluklar ve Çözümler ================== */
function ChallengesSolutions() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white nc-CadirKiralamaPage-section-solutions"
      aria-labelledby="zorluklar-cozumler-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="zorluklar-cozumler-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Zorluklar{" "}
            <span className="gradient-text gradient-text--safe-xl">
              ve Çözümler
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Teknik zorlukları ölçülebilir çözümlerle yönetiyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CHALLENGES.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 hover:shadow-xl transition-all duration-500"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
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
function StatsBand() {
  const stats = [
    { value: "700+", label: "Başarılı Etkinlik", icon: "🎪" },
    { value: "50+", label: "Kurumsal Müşteri", icon: "🏢" },
    { value: "81 İL", label: "Kendi Araçlarımızla Kurulum", icon: "🗺️" },
    { value: "10+", label: "Yıllık Deneyim", icon: "⭐" },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white nc-CadirKiralamaPage-section-4"
      aria-label="Başarı İstatistiklerimiz"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className="text-center group"
              role="group"
              aria-labelledby={`cadir-stat-${index}-value`}
              aria-describedby={`cadir-stat-${index}-label`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-105">
                <div
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>
                <h3
                  id={`cadir-stat-${index}-value`}
                  className="text-3xl md:text-4xl font-black mb-2 text-white drop-shadow-lg"
                >
                  {stat.value}
                </h3>
                <p
                  id={`cadir-stat-${index}-label`}
                  className="text-blue-100 text-sm md:text-base font-semibold"
                >
                  {stat.label}
                </p>
              </div>
            </article>
          ))}
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
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
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
function RegionalService() {
  const regions = [
    { 
      name: "İstanbul Avrupa Yakası", 
      detail: "Fuar, lansman ve toplantılar için Şişli, Beşiktaş ve Beylikdüzü odaklı hızlı mobil ekiplerimizle sahadayız.",
      districts: "Başakşehir, Esenyurt, Fatih, Sarıyer, Kağıthane, Şişli, Beşiktaş, Beylikdüzü"
    },
    { 
      name: "İstanbul Anadolu Yakası", 
      detail: "Düğün, konser ve kurumsal etkinlikler için Kadıköy, Ataşehir ve Ümraniye depolarımızdan anlık sevkiyat.",
      districts: "Kadıköy, Üsküdar, Maltepe, Tuzla, Pendik, Çekmeköy, Ataşehir"
    },
    { 
      name: "Marmara, Çevre İller & Türkiye Geneli", 
      detail: "Özel araç filomuzla çevre illere ve İç Anadolu'ya kadar profesyonel hizmet ulaştırıyoruz.",
      districts: "Tekirdağ, İzmit, Kocaeli, Yalova, Bursa, Sakarya, Düzce, Bolu ve Ankara"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="bolgesel-hizmet-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 id="bolgesel-hizmet-baslik" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            İstanbul, Marmara ve Çevre İllerde <span className="text-blue-700">Lider Güç</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Başta İstanbul içi konser, düğün, fuar ve lansman organizasyonları olmak üzere; çevre illerdeki tüm etkinliklerinize kendi araç filomuz ve uzman kadromuzla teknik destek sağlıyoruz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Sol Taraf: Bölgesel Dağılım */}
          <div className="space-y-8">
            {regions.map((region) => (
              <div key={region.name} className="group p-6 bg-white rounded-2xl border-l-4 border-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                <h3 className="font-black text-gray-900 text-xl mb-2">{region.name}</h3>
                <p className="text-gray-700 mb-3">{region.detail}</p>
                <div className="text-sm font-semibold text-blue-800 bg-blue-100/50 p-3 rounded-xl border border-blue-100">
                  📍 Kapsam: {region.districts}
                </div>
              </div>
            ))}
          </div>

          {/* Sağ Taraf: Operasyonel Güvence */}
          <div className="bg-slate-900 rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-50 pointer-events-none"></div>
            
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-blue-400">
              <Shield size={28} /> Operasyonel Güvence & Lojistik
            </h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex gap-4">
                <div className="bg-red-500/20 p-3 rounded-xl h-fit"><CheckCircle className="text-red-400" /></div>
                <div>
                  <h4 className="font-bold text-lg text-red-300">Açık Alanda "Kötü Sürprizlere" Son</h4>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">
                    Sahneva olarak <strong>%100 dış mekan (outdoor) uyumlu, 90km/s rüzgar dayanımlı ve su geçirmez</strong> sistemler kuruyor; zorlu hava şartlarında kusursuz alan garantisi veriyoruz.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl h-fit"><Truck className="text-blue-400" /></div>
                <div>
                  <h4 className="font-bold text-lg">Şeffaf Nakliye ve Fiyatlandırma</h4>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">
                    İstanbul içi projelerde lojistik maliyetlerini minimize ederken; <strong>Bursa, İzmit, Ankara, Tekirdağ</strong> gibi çevre illere yapılan operasyonlarda nakliye ve personel konaklama detaylarını ilk teklifte şeffafça sunuyoruz.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-500/20 p-3 rounded-xl h-fit"><Zap className="text-green-400" /></div>
                <div>
                  <h4 className="font-bold text-lg">Trafik & Ulaşım Avantajı</h4>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">
                    İstanbul'un iki yakasında konumlanmış ekiplerimiz sayesinde, farklı ilçelerdeki kurulumlara aynı hızda, trafik engeline takılmadan ulaşıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lojistik ve Fiyatlandırma Karşılaştırma Tablosu */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden mt-10">
          <div className="px-6 md:px-10 py-8 border-b border-gray-100 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900">Bölgesel Lojistik ve Operasyon Karşılaştırması</h3>
              <p className="text-gray-600 mt-2 text-lg">İstanbul içi ve çevre illerdeki çadır kiralama hizmet standartlarımızın şeffaf dökümü.</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="px-8 py-6 font-black text-gray-900 w-1/4 bg-gray-50 border-b-2 border-gray-200">Hizmet Kriteri</th>
                  <th className="px-8 py-6 font-black text-blue-800 w-3/8 bg-blue-50 border-b-2 border-blue-200">İstanbul İçi (Avrupa & Anadolu)</th>
                  <th className="px-8 py-6 font-black text-green-800 w-3/8 bg-green-50 border-b-2 border-green-200">Çevre İller (Marmara Bölgesi)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Kurulum Süresi</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Acil durumlarda 2-4 saatte hızlı express kurulum</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Planlı sevkiyat ile etkinlikten 1 gün önce güvenli kurulum</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Nakliye Ücreti</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">İlçe bazlı 8.000 TL - 12.000 TL (Müşteri dilerse kendi nakliyesi)</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Kilometre bazlı şeffaf, indirimli ve sabit fiyat garantisi</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Saha Desteği</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Yerel nöbetçi ekiplerle anlık destek, konaklama ücreti yok</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Projeye tahsisli, konaklamalı tam zamanlı operasyon desteği</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Zemin & İklimlendirme</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Beton/çim zemine uygun ağırlık ve klimalı sistemler</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Zorlu hava şartlarına karşı dev endüstriyel ısıtıcılar</td>
                </tr>
              </tbody>
            </table>
          </div>
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
function Articles() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50/50 nc-CadirKiralamaPage-section-6"
      aria-labelledby="bilgi-rehber-baslik"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2
            id="bilgi-rehber-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Bilgi &{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Profesyonel Rehber
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Çadır kiralama hakkında uzman görüşleri ve teknik bilgiler
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                    📚 Kapsamlı Rehber
                  </span>
                  <span className="bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                    ⭐ Uzman Görüşü
                  </span>
                  <span className="bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                    🎯 Pratik Çözümler
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Profesyonel Çadır Kiralama: Etkinlik Başarınız İçin Tam Kapsamlı Çözümler
                </h3>

                <p className="text-blue-100 mt-4 text-lg md:text-xl leading-relaxed">
                  Kurumsal standartlar, hızlı kurulum süreçleri ve ölçülebilir kalite yaklaşımı ile güvenli çözümler
                </p>
              </div>
            </header>

            <div className="p-8 md:p-10">
              <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-em:text-gray-600 prose-ul:mt-6 prose-ul:mb-6 prose-li:marker:text-blue-500">
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-6">
                    <h4>Profesyonel Çadır Kiralama Yaklaşımımız</h4>
                    <p>
                      <strong>Sahneva</strong>, çadır kiralama hizmetlerinde yalnızca fiziksel kurulum değil; planlama, güvenlik ve operasyonel sürekliliği birlikte ele alır. Her proje öncesinde alan keşfi yapılır, zemin yapısı analiz edilir ve çadır sistemleri bu verilere göre projelendirilir.
                    </p>
                    <p>
                      Düğün, fuar, konser veya kurumsal organizasyon fark etmeksizin tüm projelerde aynı kalite standartları uygulanır. Böylece etkinlik süresince hem güvenlik hem de görsel bütünlük korunur.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4>Kullanılan Çadır Sistemleri</h4>
                    <ul>
                      <li>Pagoda çadır sistemleri (5×5 m / 6×6 m modüler yapı)</li>
                      <li>Şeffaf dome çadır çözümleri</li>
                      <li>Endüstriyel ve geniş açıklıklı çadır sistemleri</li>
                      <li>Fuar ve sergi alanlarına özel çadır uygulamaları</li>
                    </ul>
                    <p>
                      Tüm sistemler TS EN standartlarına uygun malzemelerle kurulmakta, profesyonel ankraj ve sabitleme yöntemleriyle güvenli hâle getirilmektedir.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <details className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 open:border-blue-200 open:bg-blue-50/40">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold text-gray-900">
                      <span>Organizasyon Çadır Kiralama Nedir?</span>
                      <span
                        aria-hidden="true"
                        className="ml-4 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-transform duration-300 group-open:rotate-180"
                      >
                        ⌄
                      </span>
                    </summary>
                    <div className="mt-4 space-y-4 text-gray-700">
                      <p>
                        <strong>Organizasyon çadır kiralama</strong>, açık veya yarı açık alanlarda gerçekleştirilen etkinlikler için profesyonel, geçici ve güvenli mekân oluşturma çözümüdür. Sahneva, çadır sistemlerini yalnızca fiziksel bir yapı olarak değil; teknik altyapısı, güvenliği ve operasyonel planlaması yapılmış bir etkinlik alanı olarak ele alır.
                      </p>
                      <p>
                        Kurumsal lansmanlar, festivaller, belediye organizasyonları ve özel etkinliklerde kullanılan <strong>etkinlik çadırı kiralama</strong> çözümleri; katılımcı konforu, hava koşullarına dayanıklılık ve marka algısını doğrudan etkiler.
                      </p>
                      <h4>Kurulum Süreci Nasıl İlerler?</h4>
                      <p>
                        Kurulum süreci, saha keşfi ile başlar. Alan ölçümleri alındıktan sonra çadırın konumlandırması, giriş–çıkış noktaları ve teknik ekipman yerleşimi belirlenir. Kurulum, uzman ekipler tarafından kısa sürede tamamlanır ve etkinlik öncesi tüm kontroller yapılır.
                      </p>
                      <ul>
                        <li>Saha keşfi ve ölçümleme</li>
                        <li>Teknik planlama ve yerleşim tasarımı</li>
                        <li>Çadır kurulumu ve sabitleme</li>
                        <li>Aydınlatma, elektrik ve iklimlendirme entegrasyonu</li>
                        <li>Etkinlik süresince teknik destek</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 open:border-blue-200 open:bg-blue-50/40">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold text-gray-900">
                      <span>Düğün ve Özel Davetler İçin Çadır Kiralama</span>
                      <span
                        aria-hidden="true"
                        className="ml-4 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-transform duration-300 group-open:rotate-180"
                      >
                        ⌄
                      </span>
                    </summary>
                    <div className="mt-4 space-y-4 text-gray-700">
                      <p>
                        <strong>Düğün çadır kiralama</strong>, estetik görünüm ile teknik güvenliğin birlikte sağlanmasını gerektirir. Pagoda ve şeffaf çadır sistemleri, özellikle kır düğünleri ve açık hava davetlerinde hem şık bir atmosfer hem de kontrollü bir alan oluşturur.
                      </p>
                      <p>
                        Sahneva, düğün organizasyonlarında çadır kurulumunu; aydınlatma, zemin kaplama ve dekorasyon uyumluluğu ile birlikte planlayarak, etkinlik boyunca sorunsuz bir deneyim sunar.
                      </p>
                      <h4>Hangi Etkinlikler İçin Uygundur?</h4>
                      <p>
                        Çadır kiralama çözümlerimiz, çok farklı organizasyon türlerine uyarlanabilir. Açık hava düğünlerinden büyük ölçekli fuarlara kadar her etkinlik için ölçeklenebilir çözümler sunuyoruz.
                      </p>
                      <ul>
                        <li>Düğün, nişan ve özel davet organizasyonları</li>
                        <li>Fuar, sergi ve lansman etkinlikleri</li>
                        <li>Konser, festival ve açık hava etkinlikleri</li>
                        <li>Belediye ve kurumsal organizasyonlar</li>
                        <li>Geçici depolama ve endüstriyel kullanım alanları</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 open:border-blue-200 open:bg-blue-50/40">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold text-gray-900">
                      <span>Büyük Ölçekli ve Kurumsal Etkinliklerde Çadır Kiralama</span>
                      <span
                        aria-hidden="true"
                        className="ml-4 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-transform duration-300 group-open:rotate-180"
                      >
                        ⌄
                      </span>
                    </summary>
                    <div className="mt-4 space-y-4 text-gray-700">
                      <p>
                        <strong>Büyük çadır kiralama</strong>, standart organizasyonlara kıyasla daha yüksek mühendislik, lojistik ve saha yönetimi gerektirir. Fuar alanları, festival sahaları ve kamu projelerinde kullanılan büyük açıklıklı çadır sistemleri; vinçli kurulum ve profesyonel ekip koordinasyonu ile hayata geçirilir.
                      </p>
                      <p>
                        Sahneva, büyük ölçekli organizasyonlarda yalnızca çadır kurulumu değil; zamanlama, güvenlik ve teknik altyapı yönetimi ile anahtar teslim çözümler sunar. Bu yaklaşım, kurumsal etkinliklerin planlanan takvim içinde güvenle gerçekleşmesini sağlar.
                      </p>
                      <h4>Neden Sahneva?</h4>
                      <p>
                        Sahneva, çadır kiralama hizmetlerinde deneyim, teknik altyapı ve operasyon gücünü bir arada sunar. Türkiye genelinde 81 ilde hizmet veren yapımızla, her ölçekte organizasyon için güvenilir çözüm ortağıyız.
                      </p>
                      <p>
                        <strong>8+ yıllık deneyim, yüzlerce başarılı etkinlik ve profesyonel ekip</strong> ile etkinliğinizin sorunsuz ilerlemesini sağlıyoruz.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                Teknik Entegrasyon ve Kurulum Süreçleri
              </h3>
              <p className="text-blue-100 mt-2 text-lg">
                Güvenlik, sabitleme ve tamamlayıcı hizmetler
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <p>
                  Çadır kurulum sürecimiz keşif ve planlama ile başlar. Alanın zemin türüne göre profesyonel sabitleme yöntemi belirlenir; güvenlik ekipleri ve teknik ihtiyaçlar (elektrik, aydınlatma, iklimlendirme) projeye entegre edilir.
                </p>

                <div className="bg-gray-50 rounded-2xl p-5 mt-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-3">
                    <span
                      className="bg-purple-100 text-purple-600 rounded-xl p-2"
                      aria-hidden="true"
                    >
                      📋
                    </span>
                    Standart Uygulama Başlıkları
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li>Profesyonel ankraj & sabitleme</li>
                    <li>Yağmur oluğu ve su tahliye planı</li>
                    <li>Kablo gizleme ve güvenli hat düzeni</li>
                    <li>Etkinlik boyunca teknik destek</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                Etkinlik Türlerine Özel Çözümler
              </h3>
              <p className="text-blue-100 mt-2 text-lg">
                Düğün, fuar ve kurumsal organizasyonlara uygun planlama
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <p>
                  Her etkinliğin ihtiyacı farklıdır. Düğün ve davetlerde estetik ve konfor odaklı düzen kurarken, fuar ve kurumsal etkinliklerde akış, giriş–çıkış ve markalama planını öne alırız.
                </p>

                <div className="bg-blue-50 rounded-2xl p-5 mt-6 border border-blue-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-3">
                    Popüler senaryolar
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li>Düğün & özel davet — ışık & dekor entegrasyonu</li>
                    <li>Fuar & sergi — stand uyumu ve yönlendirme</li>
                    <li>Kurumsal etkinlik — iklimlendirme ve zemin planlama</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ================== SSS ================== */
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
                role="button"
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
            role="button"
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
function JsonLd() {
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
        description: "25 m² etkinlik ve davetler için pagoda çadır paketi. (Nakliye hariç)",
      },
      {
        "@type": "Offer",
        "@id": `${pageUrl}#offer-m2`,
        name: "Geniş Açıklıklı Çadırlar (10 / 20 / 30 / 40 m) — m² Fiyatı",
        url: pageUrl,
        availability: "https://schema.org/InStock",
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

  const webPageNode = {
    "@type": "WebPage",
    "@id": webPageId,
    name: "Çadır Kiralama | Profesyonel Etkinlik Çözümleri | Sahneva",
    description: pageDescription,
    url: pageUrl,
    inLanguage: "tr-TR",
    mainEntity: { "@id": serviceNode["@id"] },
    isPartOf: { "@id": WEBSITE_ID },
    publisher: provider,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${ORIGIN}/img/cadir/hero.webp`,
      width: 1200,
      height: 630,
    },
  };

  const faqNode = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
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
      faqNode,
      ...productNodes,
      ...videoNodes,
    ],
  };

  const safe = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <script
      id="ld-json-cadir"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safe }}
    />
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
      <JsonLd />
      <Hero />
      <TurnkeyInfrastructure />
      <StatsBand />
      <Services />
      <Gallery />
      <PricingSection />
      <Technical />
      <StandardsTable />
      <ChallengesSolutions />
      <InstallationProcess />
      <UseCases />
      <RegionalService />
      <Articles />
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

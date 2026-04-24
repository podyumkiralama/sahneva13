// app/ses-isik-sistemleri/page.jsx
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { existsSync } from "node:fs";
import { join } from "node:path";

import { buildFaqSchema } from "@/lib/structuredData/faq";
import { buildServiceProductSchema } from "@/lib/structuredData/serviceProducts";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import { CONTENT_CLUSTERS } from "@/lib/seo/contentClusters";
import JsonLdScript from "@/components/seo/JsonLd";
import { Layout, Monitor, Layers, Tent } from "lucide-react";

/* ================== Sabitler ================== */
export const revalidate = 1800;
const ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.sahneva.com";
const ORGANIZATION_ID = `${ORIGIN}/#org`;
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? ORIGIN).replace(/\/$/, "");
const PHONE = "+905453048671";
const WA_TEXT = "Merhaba%2C+ses+ve+isik+sistemleri+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bkonser%2Fkurumsal%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Kisi+sayisi%3A+%5Bxxx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

// Base64 blur placeholder
const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== Dinamik galeri (CaseGallery) ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div className="flex justify-center items-center h-64" role="status" aria-label="Galeri yükleniyor">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" aria-hidden="true" />
      <span className="sr-only">Galeri yükleniyor...</span>
    </div>
  )
});

/* ================== META ================== */
export const metadata = {
  title: "Ses ve Işık Sistemleri Kiralama | Profesyonel Çözümler",
  description: "Konser, festival ve kurumsal etkinliklere profesyonel ses-ışık kiralama: line array, dijital mikser, moving head, truss. 81 ilde canlı operasyon desteği.",
  alternates: buildLanguageAlternates({
    tr: "/ses-isik-sistemleri",
    en: "/en/sound-light-rental",
    xDefault: "/en/sound-light-rental",
  }),
  openGraph: {
    title: "Ses ve Işık Sistemleri Kiralama | Sahneva",
    description: "Türkiye genelinde uçtan uca ses & ışık çözümleri: keşif, projelendirme, kurulum, canlı miksaj ve söküm.",
    url: `${ORIGIN}/ses-isik-sistemleri`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [{ 
      url: `${ORIGIN}/img/ses-isik/hero.webp`, 
      width: 1200, 
      height: 630, 
      alt: "Sahneva Organizasyon ses ve ışık sistemleri kiralama – line array, hareketli ışık ve profesyonel sahne çözümleri"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ses ve Işık Sistemleri Kiralama | Sahneva",
    description: "Line array, dijital mikser, kablosuz mikrofon, hareketli başlık, truss ve canlı operasyonla Türkiye genelinde ses & ışık kiralama.",
    images: [`${ORIGIN}/img/ses-isik/hero.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { 
      index: true, 
      follow: true, 
      "max-image-preview": "large", 
      "max-snippet": -1, 
      "max-video-preview": -1 
    },
  },
};

/* ================== Yardımcılar & Sabitler ================== */
const slugify = (s) =>
  s.toLowerCase()
    .replace(/&/g, " ve ")
    .replace(/[^a-z0-9çğıöşü\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const HERO = {
  src: "/img/ses-isik/hero.webp",
  alt: "Profesyonel ses ve ışık sistemi kurulumu - Line array ses sistemi ve hareketli ışık başlıkları ile konser etkinliği",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const SERVICES = [
  {
    icon: "🔊",
    title: "Line Array & PA Sistemleri",
    description: "Yüksek ses kalitesi ve homojen dağılım için profesyonel çözümler",
    features: ["L/R cluster + sub dizilim", "Monitörleme (wedges/IEM)", "FOH miks & akustik ölçüm"],
  },
  {
    icon: "🎛️",
    title: "Dijital Mikser & Stagebox",
    description: "Hızlı kurulum ve esnek routing için gelişmiş mikser sistemleri",
    features: ["32–64ch dijital miks", "Sahnede stagebox", "Multitrack kayıt & playback"],
  },
  {
    icon: "🎤",
    title: "Kablosuz Sistemler",
    description: "Kesintisiz performans için profesyonel kablosuz mikrofon sistemleri",
    features: ["Çoklu alıcı sistem", "Pil/anten yönetimi", "Konferans & performans"],
  },
  {
    icon: "💡",
    title: "Işık Tasarımı & Sistemleri",
    description: "Etkileyici görsel deneyim için hareketli ışık sistemleri",
    features: ["RGBW spot, wash, beam", "DMX programlama", "Haze/duman efektleri"],
  },
  {
    icon: "🧱",
    title: "Truss & Rigging Sistemleri",
    description: "Güvenli ve profesyonel ekipman askı sistemleri",
    features: ["Alüminyum truss sistemler", "Ground support", "Profesyonel rigging"],
  },
  {
    icon: "🎚️",
    title: "Canlı Operasyon & Teknik Destek",
    description: "Etkinlik boyunca kesintisiz teknik destek ve operasyon",
    features: ["Soundcheck & prova", "Acil müdahale ekipleri", "Etkinlik sonrası söküm"],
  },
];

const USE_CASES = [
  { 
    icon: "🏢", 
    text: "Kurumsal lansman ve toplantılar",
    desc: "Konferans, lansman ve kurumsal etkinlikler"
  },
  { 
    icon: "💍", 
    text: "Düğün, nişan ve özel davetler",
    desc: "Özel günler için özel çözümler"
  },
  { 
    icon: "🎤", 
    text: "Konser, festival ve sahne performansları",
    desc: "Profesyonel sahne prodüksiyonu"
  },
  { 
    icon: "🎓", 
    text: "Mezuniyet törenleri ve okul etkinlikleri",
    desc: "Eğitim kurumları için çözümler"
  },
  { 
    icon: "🏛️", 
    text: "Belediye organizasyonları ve törenler",
    desc: "Açık alan etkinlikleri"
  },
  { 
    icon: "🛍️", 
    text: "AVM etkinlikleri ve fuar stantları",
    desc: "Ticari etkinlikler"
  },
];

const hasPublicFile = (relativePath) =>
  existsSync(join(process.cwd(), "public", relativePath.replace(/^\//, "")));

const FEATURED_BRANDS = [
  { src: "/img/ses-isik/dbaudio.png", alt: "d&b audiotechnik logo", width: 230, height: 68 },
  { src: "/img/ses-isik/dpa.png", alt: "DPA Microphones logo", width: 180, height: 58 },
  { src: "/img/ses-isik/lacoustics.png", alt: "L-Acoustics logo", width: 240, height: 62 },
  { src: "/img/ses-isik/meyer.png", alt: "Meyer Sound logo", width: 230, height: 82 },
  { src: "/img/ses-isik/shure.png", alt: "Shure logo", width: 200, height: 56 },
  ...(hasPublicFile("/img/ses-isik/sennheiser.webp")
    ? [{ src: "/img/ses-isik/sennheiser.webp", alt: "Sennheiser logo", width: 240, height: 62 }]
    : []),
  { src: "/img/ses-isik/yamaha.png", alt: "Yamaha logo", width: 240, height: 62 },
  { src: "/img/ses-isik/riedel.png", alt: "Riedel logo", width: 220, height: 60 },
  { src: "/img/ses-isik/clearcom.png", alt: "Clear-Com logo", width: 220, height: 64 },
];

const FEATURED_BRANDS_TOP_COUNT = FEATURED_BRANDS.length > 8 ? 7 : 6;

/* ================== HERO ================== */
function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-20 pb-14 md:pb-16 lg:pt-24" aria-labelledby="hero-title">
      <div className="absolute inset-0">
        <Image 
          src={HERO.src} 
          alt={HERO.alt} 
          fill 
          priority 
          fetchPriority="high"
          className="object-cover"
          sizes={HERO.sizes}
          quality={85}
         
          blurDataURL={BLUR_DATA_URL}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-800/70 to-blue-950/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-purple-900/60" aria-hidden="true" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/30 mb-6">
          <span className="relative flex w-2 h-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full w-2 h-2 bg-green-500" />
          </span>
          <span className="text-sm font-bold text-white">Türkiye Geneli Profesyonel Hizmet</span>
        </div>

        <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 drop-shadow-2xl">
          Profesyonel <span className="text-blue-200">Ses & Işık</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/95 max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed font-light mb-4">
          Konser • Festival • Lansman • Konferans
        </p>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl 2xl:max-w-3xl mx-auto leading-relaxed font-normal mb-6">
          Line array ses sistemleri, dijital mikserler ve hareketli ışık başlıkları ile 
          <span className="font-semibold text-white"> anahtar teslim çözümler</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp üzerinden hemen teklif alın"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring shadow-lg"
          >
            <span aria-hidden="true" className="text-xl mr-2">💬</span> 
            <span className="text-base">Hemen Teklif Al</span>
          </Link>

          <Link
            href="#hizmetler"
            aria-label="Hizmetlerimiz hakkında daha fazla bilgi edinin"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white/50 text-white bg-slate-900/85 backdrop-blur-lg hover:bg-slate-900/95 hover:border-white/70 hover:scale-105 transform transition-all duration-300 focus-ring shadow-lg"
          >
            <span aria-hidden="true" className="text-xl mr-2">🎯</span> 
            <span className="text-base">Hizmetlerimiz</span>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <span className="text-2xl mb-2" aria-hidden="true">⭐</span>
            <div className="text-xl font-black text-white">4.9/5</div>
            <div className="text-white/80 text-sm">250+ Değerlendirme</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <span className="text-2xl mb-2" aria-hidden="true">🏆</span>
            <div className="text-xl font-black text-white">700+</div>
            <div className="text-white/80 text-sm">Etkinlik</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <span className="text-2xl mb-2" aria-hidden="true">🚀</span>
            <div className="text-xl font-black text-white">81 İl</div>
            <div className="text-white/80 text-sm">Hizmet</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== Marka Barı ================== */
function FeaturedBrands() {
  return (
    <section className="py-16 bg-gray-100" aria-labelledby="markalar-baslik">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            id="markalar-baslik"
            className="text-center text-3xl md:text-4xl font-black text-gray-700 tracking-wide uppercase mb-12"
          >
            Kullandığımız Markalar
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-x-8 gap-y-10 items-center justify-items-center">
            {FEATURED_BRANDS.slice(0, FEATURED_BRANDS_TOP_COUNT).map((brand) => (
              <div key={brand.src} className="w-full h-14 flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  className="max-h-14 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto items-center justify-items-center">
            {FEATURED_BRANDS.slice(FEATURED_BRANDS_TOP_COUNT).map((brand) => (
              <div key={brand.src} className="w-full h-14 flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  className="max-h-14 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== Hizmetler ================== */
function Services() {
  return (
    <section id="hizmetler" className="py-20 bg-gradient-to-b from-white to-blue-50/50" aria-labelledby="hizmetler-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="hizmetler-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Profesyonel <span className="text-blue-700">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ses ve ışık sistemleri kiralama hizmetlerimiz: keşif, projelendirme, kurulum, canlı operasyon ve söküm
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
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3 id={id} className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0" aria-hidden="true" />
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
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
          >
            <span aria-hidden="true" className="text-xl mr-3">📞</span>
            <span>Detaylı Teklif için İletişime Geçin</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Galeri ================== */
const GALLERY_IMAGES = [
  { 
    src: "/img/ses-isik/isik-sistemi.webp", 
    alt: "Profesyonel line array ses sistemi kurulumu - Konser etkinliği için FOH ve sahne düzeni" 
  },
  { 
    src: "/img/ses-isik/ses-sistemi.webp", 
    alt: "Hareketli ışık başlıkları ve LED wash ışıklar - Sahne aydınlatma kurulumu" 
  },
  { 
    src: "/img/ses-isik/3.webp", 
    alt: "Alüminyum truss sistemi ve rigging uygulaması - Profesyonel ekipman askı sistemi" 
  },
  { 
    src: "/img/ses-isik/4.webp", 
    alt: "Konser canlı operasyon - FOH miksaj ve ışık kontrol konsolu" 
  },
  { 
    src: "/img/ses-isik/5.webp", 
    alt: "Sahne arka plan LED ekran ve beam ışıklar - Profesyonel sahne tasarımı" 
  },
  { 
    src: "/img/ses-isik/6.webp", 
    alt: "DMX kontrol sistemi ve ışık programlama - Hareketli ışık preset hazırlığı" 
  },
  { 
    src: "/img/ses-isik/7.webp", 
    alt: "Delay tower ve yan kule ses sistemleri - Büyük açık alan etkinliği kapsama" 
  },
  { 
    src: "/img/ses-isik/8.webp", 
    alt: "Kablosuz mikrofon sistemleri ve sahne monitörleri - Canlı performans kurulumu" 
  },
];

function Gallery() {
  return (
    <section className="py-20 bg-white" aria-labelledby="galeri-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="galeri-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Proje <span className="text-blue-700">Galerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gerçekleştirdiğimiz başarılı ses ve ışık sistemi kurulumlarından örnekler
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <CaseGallery images={GALLERY_IMAGES} visibleCount={8} priorityCount={2} />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla projemizi incelemek için galerimizi keşfedin
          </p>
          <Link
            href="/projeler"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transform transition-all duration-300 focus-ring"
          >
            <span aria-hidden="true" className="text-xl mr-3">📸</span>
            <span>Tüm Projeleri Görüntüle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Teknik Altyapı ================== */
function Technical() {
  const technicalItems = [
    {
      category: "pa",
      title: "Ses Sistemleri",
      description: "Line array / top+sub konfigürasyonları • Homojen kapsama ve yüksek ses kalitesi",
      features: ["Line array sistemler", "Subwoofer dizilimleri", "Akustik ölçüm ve kalibrasyon"]
    },
    {
      category: "mixer",
      title: "Mikser & Kontrol",
      description: "32–64ch dijital mikser • Stagebox • Çok kanallı kayıt ve playback sistemleri",
      features: ["Dijital mikserler", "Stagebox sistemleri", "Multitrack kayıt"]
    },
    {
      category: "wireless",
      title: "Kablosuz Sistemler",
      description: "Profesyonel kablosuz mikrofon sistemleri • RF planlama • Anten dağıtım",
      features: ["Kablosuz mikrofonlar", "RF yönetimi", "Anten sistemleri"]
    },
    {
      category: "lighting",
      title: "Işık Sistemleri",
      description: "RGBW spot/wash/beam • Hareketli başlıklar • Blinder/strobe/haze efektleri",
      features: ["Hareketli ışıklar", "LED aydınlatma", "Efekt makineleri"]
    },
    {
      category: "truss",
      title: "Truss & Rigging",
      description: "Alüminyum truss sistemleri • Ground support • Profesyonel rigging ekipmanları",
      features: ["Truss sistemleri", "Rigging ekipmanları", "Güvenlik sistemleri"]
    },
    {
      category: "control",
      title: "Kontrol & Yazılım",
      description: "DMX kontrol sistemleri • Show programlama • Ölçüm & kalibrasyon yazılımları",
      features: ["Kontrol konsolları", "Programlama yazılımları", "Ölçüm ekipmanları"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="altyapi-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="altyapi-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Teknik <span className="text-blue-700">Altyapımız</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En son teknoloji ekipmanlar ve profesyonel teknik altyapı ile hizmetinizdeyiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {technicalItems.map((item) => (
            <div key={item.category} className="group">
              <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl group-hover:scale-105 transition-all duration-500 h-full">
                <h3 className="font-bold text-2xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">
                    {item.category === "pa" && "🔊"}
                    {item.category === "mixer" && "🎛️"}
                    {item.category === "wireless" && "🎤"}
                    {item.category === "lighting" && "💡"}
                    {item.category === "truss" && "🧱"}
                    {item.category === "control" && "🎚️"}
                  </span>
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex-shrink-0" aria-hidden="true" />
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

/* ================== İstatistik Bant ================== */
function StatsBand() {
  const stats = [
    { value: "700+", label: "Başarılı Proje", icon: "??" },
    { value: "50+", label: "Kurumsal Müşteri", icon: "🏢" },
    { value: "81", label: "İlde Hizmet", icon: "🗺️" },
    { value: "10+", label: "Yıl Deneyim", icon: "⭐" },
  ];
  
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white" aria-label="Başarı İstatistiklerimiz">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className="text-center group"
              role="group"
              aria-labelledby={`tr-stat-${index}-value`}
              aria-describedby={`tr-stat-${index}-label`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {stat.icon}
                </div>
                <h3
                  id={`tr-stat-${index}-value`}
                  className="text-4xl md:text-5xl font-black mb-2 text-white drop-shadow-lg"
                >
                  {stat.value}
                </h3>
                <p
                  id={`tr-stat-${index}-label`}
                  className="text-blue-100 text-lg font-semibold"
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
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/95" aria-labelledby="kullanim-alanlari-baslik">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="kullanim-alanlari-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Kullanım <span className="text-blue-700">Alanları</span>
          </h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            Ses ve ışık çözümlerimizin tercih edildiği başlıca etkinlik türleri ve özel çözümlerimiz
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full" aria-hidden="true" />
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto list-none">
          {USE_CASES.map((uc) => (
            <li key={uc.text} className="h-full">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 group hover:scale-105 h-full">
                <div className="flex flex-col items-start gap-4">
                  <div className="text-3xl bg-white/20 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
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
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
          >
            <span aria-hidden="true" className="text-xl mr-3">💬</span>
            <span>Etkinliğiniz için Özel Çözüm Alın</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Bilgi & Rehber ================== */
function Articles() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50" aria-labelledby="bilgi-rehber-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 id="bilgi-rehber-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Bilgi & <span className="text-blue-700">Profesyonel Rehber</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ses ve ışık sistemleri hakkında uzman görüşleri ve teknik bilgiler
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ana Makale */}
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">📚 Kapsamlı Rehber</span>
                  <span className="bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">⭐ Uzman Görüşü</span>
                  <span className="bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">🎯 Pratik Çözümler</span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Profesyonel Ses ve Işık Sistemleri: Etkinlik Başarınız İçin Tam Kapsamlı Çözümler
                </h3>
                <p className="text-blue-100 mt-4 text-lg md:text-xl leading-relaxed">
                  Kurumsal standartlar, hızlı kurulum süreçleri ve ölçülebilir kalite garantisi ile etkinliklerinizde mükemmel performans
                </p>
              </div>
            </header>

            <div className="p-8 md:p-10">
              <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-em:text-gray-600 prose-ul:mt-6 prose-ul:mb-6 prose-li:marker:text-blue-500">
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-gray-900 flex items-center gap-4">
                      <span className="bg-blue-100 text-blue-600 rounded-2xl p-3" aria-hidden="true">🔊</span>
                      Ses Sistemleri ve Teknolojileri
                    </h4>
                    <p>
                      <strong className="text-gray-900">Sahneva</strong>, Türkiye genelinde{" "}
                      <Link href="/ses-isik-sistemleri" className="font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4">
                        profesyonel ses sistemi kiralama
                      </Link>{" "}
                      ve{" "}
                      <Link href="/ses-isik-sistemleri" className="font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4">
                        ışık sistemi kiralama
                      </Link>{" "}
                      hizmetleriyle kurumsal standartta çözümler sunmaktadır.
                    </p>
                    <p>
                      Etkinliğiniz ister açık hava konseri, ister kapalı salon konferansı olsun; detaylı akustik keşif, 
                      teknik projelendirme, güvenli <em className="text-gray-600">truss & rigging</em> ve canlı operasyon 
                      dahil <strong className="text-gray-900">uçtan uca hizmet</strong> modelimizle tek ekipten kapsamlı yönetim sağlıyoruz.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-gray-900 flex items-center gap-4">
                      <span className="bg-purple-100 text-purple-600 rounded-2xl p-3" aria-hidden="true">💡</span>
                      Işık Sistemleri ve Tasarım
                    </h4>
                    <p>
                      Doğru konfigüre edilmiş <em className="text-gray-600">line array</em> sistemleriyle homojen SPL dağılımı 
                      elde ederken, dijital mikser ve <em className="text-gray-600">stagebox</em> mimarisi sayesinde patch, 
                      routing ve kayıt süreçlerini optimize ediyoruz.
                    </p>
                    <p>
                      RGBW spot, wash ve beam/spot armatürleri; DMX tabanlı sahne programlarıyla senkronize edilerek 
                      konuşma anlaşılabilirliği yüksek, müzikal performansı dinamik ve temiz bir dinleyici deneyimi sunuyoruz.
                    </p>
                  </div>
                </div>

                {/* Önemli Bilgi Kutusu */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 rounded-r-2xl p-6 mb-8">
                  <h5 className="font-black text-blue-700 text-xl mb-4 flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">💡</span> 
                    Profesyonel Uygulama Stratejisi
                  </h5>
                  <p className="text-gray-700 text-lg mb-0 leading-relaxed">
                    Uygulama stratejimiz mekânın mimari ve akustik yapısına göre şekillenir. Açık alan etkinliklerinde 
                    rüzgâr ve zaman gecikmesini dengelemek için <em className="text-gray-600">delay tower</em> ve <em className="text-gray-600">side fill</em> 
                    çözümleri kullanır; kapalı salonlarda yankıyı azaltan top+sub ya da kompakt line array dizilimlerine yöneliriz.
                  </p>
                </div>

                {/* Başarı Faktörleri Grid */}
                <div className="mb-8">
                  <h4 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-4">
                    <span className="bg-green-100 text-green-600 rounded-2xl p-3" aria-hidden="true">🚀</span>
                    Kritik Başarı Faktörleri
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { 
                        icon: "🎯", 
                        title: "Detaylı Keşif ve Analiz", 
                        desc: "Akustik analiz, mekan değerlendirmesi ve ihtiyaç analizi" 
                      },
                      { 
                        icon: "📊", 
                        title: "Line Array Simülasyon", 
                        desc: "Doğru kapsama için profesyonel yazılımlarla planlama" 
                      },
                      { 
                        icon: "🔒", 
                        title: "Güvenli Rigging Sistemleri", 
                        desc: "Sertifikalı ekipman ve uzman rigging ekibi" 
                      },
                      { 
                        icon: "🎭", 
                        title: "Profesyonel Programlama", 
                        desc: "Soundcheck ve cue planlı ışık programlama" 
                      },
                    ].map((item, index) => (
                      <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group hover:border-blue-200">
                        <div className="flex items-start gap-4">
                          <span className="text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0" aria-hidden="true">
                            {item.icon}
                          </span>
                          <div>
                            <h5 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h5>
                            <p className="text-gray-600 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-6 mt-8">
                  <h5 className="font-black text-yellow-700 text-lg mb-3 flex items-center gap-3">
                    <span className="text-xl" aria-hidden="true">💎</span>
                    Neden Sahneva?
                  </h5>
                  <p className="text-yellow-800 mb-0">
                    <strong>10+ yıllık deneyim, 700+ başarılı proje ve 81 ilde hizmet</strong> ile 
                    ses ve ışık sistemleri konusunda güvenilir çözüm ortağınız. Profesyonel ekipman, 
                    uzman ekip ve 7/24 teknik destek garantisi.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Yan Makaleler */}
          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                Teknik Entegrasyon ve Uygulama Süreçleri
              </h3>
              <p className="text-blue-100 mt-2 text-lg">
                Akışa göre programlanmış ışık show ve profesyonel FOH miksaj çözümleri
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <p>
                  Akustik ve izleyici dağılımını temel alarak kapsama, gecikme ve yankı parametreleri 
                  üzerinden optimum ses & ışık yerleşimi planlıyoruz.
                </p>
                <p>
                  Açık alanlarda <em className="text-gray-600">delay tower</em> ile zaman dengelemesi 
                  sağlarken, iç mekânda yankıyı azaltacak dizilimler ve hedeflenmiş ışık açıları tercih ediyoruz.
                </p>
                
                <div className="bg-gray-50 rounded-2xl p-5 mt-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-3">
                    <span className="bg-purple-100 text-purple-600 rounded-xl p-2" aria-hidden="true">📋</span>
                    Teknik Özellikler ve Standartlar
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" aria-hidden="true" />
                      DMX topolojisi ve güvenli kablolama
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" aria-hidden="true" />
                      FOH ve monitör miks senkronizasyonu
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" aria-hidden="true" />
                      RF planlama ile maksimum verimlilik
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" aria-hidden="true" />
                      Haze/duman ve efekt cue planlaması
                    </li>
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
                Her etkinlik türüne özel ses ve ışık stratejileri ve teknik çözümler
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span className="bg-blue-100 text-blue-600 rounded-xl p-2" aria-hidden="true">🏢</span>
                      Kurumsal Etkinlikler
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Net ve anlaşılır konuşma, profesyonel görünüm, marka renklerine uygun aydınlatma
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-2xl p-5 border border-purple-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span className="bg-purple-100 text-purple-600 rounded-xl p-2" aria-hidden="true">🎤</span>
                      Konser & Festival
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Yüksek enerji, güçlü atmosfer, dinamik performans, etkileyici ışık şovları
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-2xl p-5 border border-green-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span className="bg-green-100 text-green-600 rounded-xl p-2" aria-hidden="true">💍</span>
                      Özel Davetler
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Samimi atmosfer, yumuşak aydınlatma, kaliteli ses, özel anlara uygun efektler
                    </p>
                  </div>
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
const FAQ_ITEMS = [
    { 
      q: "Hangi ses ve ışık sistemi benim etkinliğime uygun?", 
      a: "Etkinlik alanınızın büyüklüğü, seyirci sayısı, etkinlik türü ve bütçenize göre en uygun ses ve ışık sistemini belirliyoruz. Ücretsiz keşif hizmetimizle mekanınızı analiz edip en verimli yapılandırmayı öneriyoruz." 
    },
    { 
      q: "Kurulum ve söküm süreleri ne kadar sürüyor?", 
      a: "Salon kurulumları genellikle 4-6 saat, dış mekan kurulumları ise 6-8 saat sürer. Rigging gereken kompleks projelerde kurulum 1 gün önceden başlar. Söküm işlemleri ise ortalama 2-4 saatte tamamlanır." 
    },
    { 
      q: "Canlı operasyon ve teknik destek ekibiniz var mı?", 
      a: "Evet. Tüm etkinliklerimizde FOH (Front of House) ses mühendisi, monitör mühendisi ve ışık operatöründen oluşan profesyonel teknik ekibimiz canlı operasyon yönetimi sağlar. 7/24 acil teknik destek hizmetimiz mevcuttur." 
    },
    { 
      q: "Güç ihtiyacı ve elektrik altyapısı nasıl sağlanıyor?", 
      a: "Nakliye, kurulum ve operasyon bizden. Güç altyapısı (jeneratör/tesisat) bilgilerini sizden alıyor, gerekli yönlendirme ve koordinasyonu ekibimiz sağlıyor. Profesyonel güç dağıtım üniteleri ve elektrik mühendisleri ile güvenli çözümler sunuyoruz." 
    },
  ];

function FAQ() {
  
  return (
    <section className="py-20 bg-white" aria-labelledby="sss-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 id="sss-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Sık Sorulan <span className="text-blue-700">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ses ve ışık sistemleri kiralama hakkında merak edilen sorular ve cevapları
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
              <div className="mt-6 text-gray-700 leading-relaxed text-lg pl-4 border-l-4 border-blue-500" role="region">
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
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
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

/* ================== Tamamlayıcı Hizmetler ================== */
function RelatedServices() {
  const services = [
    { 
      href: "/podyum-kiralama", 
      title: "Podyum Kiralama", 
      Icon: Layout, 
      desc: "Profesyonel sahne platformları ve podyum sistemleri"
    },
    { 
      href: "/led-ekran-kiralama", 
      title: "LED Ekran Kiralama", 
      Icon: Monitor, 
      desc: "Yüksek çözünürlüklü LED ekran ve video wall çözümleri"
    },
    { 
      href: "/sahne-kiralama", 
      title: "Sahne Kiralama", 
      Icon: Layers, 
      desc: "Portatif ve modüler sahne sistemleri kiralama"
    },
    { 
      href: "/cadir-kiralama", 
      title: "Çadır Kiralama", 
      Icon: Tent, 
      desc: "Profesyonel etkinlik çadırları ve tenteli alan çözümleri"
    },
  ];
  
  return (
    <section 
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-100/30" 
      aria-labelledby="tamamlayici-hizmetler-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            id="tamamlayici-hizmetler-baslik" 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Tamamlayıcı{" "}
            <span className="text-blue-700">
              Hizmetlerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ses ve ışık sistemlerinizi tamamlayacak diğer profesyonel etkinlik çözümlerimiz
          </p>
          <div 
            className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full" 
            aria-hidden="true" 
          />
        </div>

        <nav aria-label="Tamamlayıcı hizmetler">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 text-center focus-ring h-full flex flex-col"
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

        <div className="sr-only">
          <p>
            Bu bölümde ses ve ışık sistemlerinizi tamamlayacak diğer hizmetlerimiz bulunmaktadır. 
            Her bir hizmet kartına tıklayarak veya klavye ile seçerek ilgili sayfaya gidebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================== CTA ================== */
function CTA() {
  return (
    <section className="py-20 bg-white" aria-labelledby="cta-baslik">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
          <div className="relative z-10">
            <h2 id="cta-baslik" className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Profesyonel Ses & Işık Çözümlerine Hazır Mısınız?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Etkinliğiniz için en uygun ses ve ışık sistemlerini sunalım. Ücretsiz keşif, profesyonel danışmanlık ve 
              rekabetçi fiyat garantisi ile hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/iletisim" 
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus-ring shadow-lg"
              >
                <span aria-hidden="true" className="text-xl mr-3">📞</span> 
                <span className="text-lg">Hemen Teklif Al</span>
              </Link>
              <a 
                href={WHATSAPP} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus-ring shadow-lg"
              >
                <span aria-hidden="true" className="text-xl mr-3">💬</span> 
                <span className="text-lg">WhatsApp'tan Yaz</span>
              </a>
            </div>
            <div className="mt-8 text-blue-200 text-lg">
              📍 81 ilde hizmet • ⏰ 7/24 teknik destek • ⭐ 10+ yıl deneyim
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== JSON-LD (FINAL / NO RATING) ================== */
function SoundLightJsonLd() {
  const pageUrl = `${ORIGIN}/ses-isik-sistemleri`;
  const pageDescription = metadata?.description || "";
  const webPageId = `${pageUrl}#webpage`;

  const provider = { "@id": ORGANIZATION_ID };

  const { service: serviceSchema, products } = buildServiceProductSchema({
    slug: "/ses-isik-sistemleri",
    locale: "tr-TR",
  });

  // Base Service Tanımı (AggregateRating YOK)
  const baseService = {
    "@type": "Service",
    name: "Ses ve Işık Sistemleri Kiralama",
    description: pageDescription,
    provider,
    areaServed: { "@type": "Country", name: "Türkiye" },
    offers: {
      "@type": "AggregateOffer",
      url: `${pageUrl}#teklif`,
      priceCurrency: "TRY",
      lowPrice: 30000,
      highPrice: 54000,
      offerCount: 2,
    },
  };

  // Service Node (çakışmasız merge)
  const serviceNode = {
    ...(serviceSchema || {}),
    ...baseService,
    "@type": "Service",
    "@id": serviceSchema?.["@id"] || `${pageUrl}#service`,
    provider,
    url: pageUrl,
  };

  const serviceId = serviceNode["@id"];

  const productNodes = products ?? [];
  const faqSchema = buildFaqSchema(FAQ_ITEMS);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      serviceNode,
      {
        "@type": "WebPage",
        "@id": webPageId,
        name: "Ses ve Işık Sistemleri Kiralama | Profesyonel Çözümler | Sahneva",
        description:
          "Konser, festival ve kurumsal etkinlikler için profesyonel ses & ışık sistemleri kiralama. Line array, dijital mikser, hareketli ışık, truss ve canlı operasyon. 81 ilde hizmet.",
        url: pageUrl,
        inLanguage: "tr-TR",
        mainEntity: { "@id": serviceId },
      },
      ...productNodes,
      ...(faqSchema ? [faqSchema] : []),
    ],
  };

  return (
      <JsonLdScript
        id="ld-json-ses-isik"
        data={jsonLd}
      />
    );
}

/* ================== Sayfa Bileşeni ================== */
export default function Page() {
  const baseUrl = SITE_URL;
  const canonical = `${baseUrl}/ses-isik-sistemleri`;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Hizmetler", url: `${baseUrl}/hizmetler` },
    { name: "Ses ve Işık Sistemleri", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <SoundLightJsonLd />
      <Hero />
      <FeaturedBrands />
      <Services />
      <Gallery />
      <Technical />
      <StatsBand />
      <UseCases />
      <Articles />
      <FAQ />
      <RelatedServices />
      <ServiceBlogLinks {...CONTENT_CLUSTERS.soundLight} links={CONTENT_CLUSTERS.soundLight.guides} />
      <CTA />
    </>
  );
}

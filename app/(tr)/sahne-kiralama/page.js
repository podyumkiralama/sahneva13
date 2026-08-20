// app/sahne-kiralama/page.jsx
import { YEARS_OF_EXPERIENCE } from "@/lib/experience";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { buildFaqSchema } from "@/lib/structuredData/faq";
import { buildImageGallerySchema } from "@/lib/structuredData/imageGallery";
import { buildServiceProductSchema } from "@/lib/structuredData/serviceProducts";
import { buildAlternatesForPath } from "@/lib/seo/alternates";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import PaymentOptionsNote from "@/components/payments/PaymentOptionsNote";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import RegionalCityLinks from "@/components/RegionalCityLinks";
import { CONTENT_CLUSTERS } from "@/lib/seo/contentClusters";
import JsonLdScript from "@/components/seo/JsonLd";
import ServiceDecisionGuide from "@/components/ServiceDecisionGuide.client";
import { SERVICE_DECISION_GUIDES } from "@/lib/serviceDecisionGuides";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardCheck,
  Layout,
  Layers,
  MessageCircle,
  Monitor,
  Music,
  Ruler,
  Users,
  Eye,
} from "lucide-react";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { PROJECTS_COMPLETED, PROVINCES_COUNT } from "@/lib/stats";

/* ================== Sabitler ================== */
export const revalidate = 86400;
const ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.sahneva.com";
const ORGANIZATION_ID = `${ORIGIN}/#org`;
const WEBSITE_ID = `${ORIGIN}/#website`;
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? ORIGIN).replace(/\/$/, "");
const PHONE = "+905453048671";
const WA_TEXT =
  "Merhaba%2C+sahne+kiralama+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bkonser%2Fkonferans%2Flansman%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Katilimci+sayisi%3A+%5Bxxx%5D%2C+Tahmini+sahne+olcusu%3A+%5Bm%C2%B2%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

const EventWeatherWidget = dynamic(
  () => import("@/components/EventWeatherWidget"),
  {
    loading: () => (
      <section className="bg-[#0B1120] py-16 sm:py-20" aria-hidden="true">
        <div className="container mx-auto px-4">
          <div className="min-h-[420px] rounded-3xl border border-white/10 bg-white/[0.05]" />
        </div>
      </section>
    ),
  },
);

// Base64 blur placeholder
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== META ================== */
export const metadata = {
  title: "Profesyonel Sahne Kiralama",
  description:
    `Konser, konferans ve festival için anahtar teslim sahne kiralama: truss, podyum, LED ekran, profesyonel ses-ışık. ${PROVINCES_COUNT} ilde hızlı kurulum ve teknik destek.`,
  alternates: buildAlternatesForPath("/sahne-kiralama"),
  openGraph: {
    title: "Sahne Kiralama | Sahneva",
    description:
      "Konser, konferans, lansman ve festival etkinlikleri için truss, podyum, LED ekran, ses ve ışık sistemleri ile anahtar teslim sahne çözümleri.",
    url: `${ORIGIN}/sahne-kiralama`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/sahne/6.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon sahne kiralama – konser, konferans, lansman ve festival için profesyonel sahne çözümleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahne Kiralama | Profesyonel Sahne Çözümleri | Sahneva",
    description:
      "Konser, konferans, lansman ve festival etkinlikleri için profesyonel sahne çözümleri.",
    images: [`${ORIGIN}/img/sahne/6.webp`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

/* ================== Yardımcılar & Sabitler ================== */
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, " ve ")
    .replace(/[^a-z0-9çğıöşü\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const HERO = {
  src: "/img/sahne/6.webp",
  alt: "Profesyonel sahne kurulumu - Konser sahnesinde truss sistemleri, LED ekran ve ışık performansı",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const SERVICES = [
  {
    icon: "🎭",
    title: "Modüler Sahne Sistemleri",
    description:
      "1×1 ve 2×1 podyum panelleri ile esnek ve hızlı kurulum çözümleri",
    features: [
      "1×1 & 2×1 paneller",
      "Modüler tasarım",
      "Hızlı kurulum",
      "Esnek konfigürasyon",
    ],
  },
  {
    icon: "🏗️",
    title: "Truss & Rigging Sistemleri",
    description:
      "Alüminyum truss sistemleri, profesyonel rigging ve güvenlik ekipmanları",
    features: [
      "Alüminyum truss",
      "Profesyonel rigging",
      "Güvenlik sistemleri",
      "Statik hesaplama",
    ],
  },
  {
    icon: "🖥️",
    title: "LED Ekran Entegrasyonu",
    description: "P2-P6 LED ekranlar, video wall sistemleri ve canlı yayın çözümleri",
    features: [
      "P2-P6 LED ekranlar",
      "Video wall sistemleri",
      "Canlı yayın",
      "4K çözünürlük",
    ],
  },
  {
    icon: "🎵",
    title: "Ses & Işık Sistemleri",
    description:
      "Profesyonel ses sistemleri, ışık tasarımı ve canlı performans çözümleri",
    features: [
      "Line array ses sistemleri",
      "Işık tasarımı",
      "DMX kontrol",
      "Canlı performans",
    ],
  },
  {
    icon: "⚡",
    title: "Teknik Altyapı",
    description:
      "Güç dağıtım, kablo yönetimi ve profesyonel teknik altyapı çözümleri",
    features: [
      "Güç dağıtım",
      "Kablo yönetimi",
      "Teknik altyapı",
      "Profesyonel ekip",
    ],
  },
  {
    icon: "🔧",
    title: "Anahtar Teslim Çözümler",
    description: "Kurulum, operasyon, canlı yönetim ve söküm dahil tam hizmet",
    features: ["Kurulum & söküm", "Canlı operasyon", "Teknik yönetim", "7/24 destek"],
  },
];

const USE_CASES = [
  {
    icon: "🎵",
    text: "Konser ve müzik festivalleri",
    desc: "Ana sahne ve alt sahne kurulumlarında yüksek stabilite, geniş performans alanı ve line array ses sistemleriyle açık hava koşullarına uygun altyapı planlıyoruz. Rüzgar yükü ve zemin stabilitesi, kurulum öncesi teknik keşifte ayrıca değerlendirilir.",
  },
  {
    icon: "💼",
    text: "Kurumsal konferans ve toplantılar",
    desc: "Yıllık genel kurul, bayi toplantısı ve sektör konferanslarında konuşmacı dostu tasarım, markalama alanı ve net ses aktarımı önceliklidir. Sahne yüksekliği ve podyum genişliği, salon oturma düzenine göre optimize edilir.",
  },
  {
    icon: "🚀",
    text: "Ürün lansmanı ve tanıtım etkinlikleri",
    desc: "Yeni ürün ve hizmet tanıtımlarında LED ekran entegrasyonu, özel ışık tasarımı ve marka görünürlüğünü öne çıkaran sahne düzeni bir arada kurgulanır. Talep halinde hibrit (canlı + online yayın) kurulum da planlanabilir.",
  },
  {
    icon: "🏆",
    text: "Ödül törenleri ve galalar",
    desc: "Şık ve görkemli ödül törenlerinde protokol düzeni, kırmızı halı entegrasyonu ve sahne arkası bekleme alanı gibi detaylar, ışık ve ses tasarımıyla birlikte tek bir akışta planlanır.",
  },
  {
    icon: "🎓",
    text: "Mezuniyet ve okul etkinlikleri",
    desc: "Mezuniyet törenleri ve yılsonu gösterilerinde geniş katılımcı kapasitesi, net görüş açısı için uygun sahne yüksekliği ve güvenli merdiven/rampa erişimi öncelikli olarak kurgulanır.",
  },
  {
    icon: "🛍️",
    text: "AVM ve perakende etkinlikleri",
    desc: "Alışveriş merkezlerinde düzenlenen promosyon ve marka etkinliklerinde hızlı kurulum, kompakt sahne ölçüleri ve yaya trafiğini engellemeyen yerleşim planı ön planda tutulur.",
  },
];

// Paket verileri
const PACKAGES = [
  {
    id: "mini-sahne",
    name: "Mini Sahne — 16 m²",
    badge: "Küçük Etkinlik",
    specs: {
      area: "16 m²",
      dimensions: "4×4 m",
      height: "40 cm",
      truss: "6 m düz truss",
    },
    includes: [
      "8 × (2×1 m) podyum – 16 m²",
      "Yükseklik 40 cm, kaymaz kaplama",
      "6 m düz truss arka fon",
      "2 LED bar + 2 spot",
      "Kurulum, test ve söküm",
    ],
    note: "Toplantı, söyleşi ve butik iç mekân etkinlikleri için ideal.",
  },
  {
    id: "standart-sahne",
    name: "Standart Sahne — 24 m²",
    badge: "Popüler",
    specs: {
      area: "24 m²",
      dimensions: "6×4 m",
      height: "60 cm",
      truss: "12 m U truss",
    },
    includes: [
      "12 × (2×1 m) podyum – 24 m²",
      "Yükseklik 60 cm, ön etek kapama",
      "U şeklinde 12 m truss",
      "4 hareketli başlık + 6 wash",
      "2+1 hoparlör, dijital mikser, kablosuz mikrofon",
      "Kurulum, canlı teknik yönetim, söküm",
    ],
    note: "Kurumsal lansman, söyleşi+performans, AVM etkinlikleri için.",
  },
  {
    id: "konser-sahnesi",
    name: "Konser Sahnesi Kiralama — 48 m²",
    badge: "Profesyonel",
    specs: {
      area: "48 m²",
      dimensions: "8×6 m",
      height: "80-100 cm",
      truss: "20 m truss sistemi",
    },
    includes: [
      "24 × (2×1 m) podyum – 48 m²",
      "Yükseklik 80–100 cm, rampa/korkuluk",
      "Ön kiriş 12 m + yan kule 8 m truss",
      "Line array PA, monitörler, backline altyapı",
      "LED ekran (örn. 5×3 m) + scaler",
      "Işık: hareketli başlıklar, wash, blinder, haze",
      "Kurulum, soundcheck, canlı yönetim, söküm",
    ],
    note: "Konser, festival, açık alan yüksek katılımlı etkinlikler için.",
  },
];

const FLOW_STEPS = [
  {
    title: "Etkinlik bilgisini netleştirelim",
    desc: "Tarih, lokasyon, etkinlik türü ve tahmini katılımcı sayısı yeterli.",
    Icon: ClipboardCheck,
  },
  {
    title: "Sahne ölçeğini birlikte seçelim",
    desc: "Konuşma, konser, lansman veya tören akışı için uygun m2 ve yükseklik belirlenir.",
    Icon: Ruler,
  },
  {
    title: "Kurulum planını onaylayalım",
    desc: "Nakliye, kurulum, teknik test, etkinlik günü destek ve söküm tek planda toplanır.",
    Icon: CalendarCheck,
  },
];

const PACKAGE_GUIDE = [
  {
    href: "#fiyat-1",
    label: "Mini Sahne",
    bestFor: "Söyleşi, toplantı, butik iç mekan",
    detail: "4x4 m, hızlı kurulum",
  },
  {
    href: "#fiyat-2",
    label: "Standart Sahne",
    bestFor: "Lansman, AVM etkinliği, kurumsal sunum",
    detail: "6x4 m, en dengeli paket",
  },
  {
    href: "#fiyat-3",
    label: "Konser Sahnesi",
    bestFor: "Festival, konser, açık alan etkinliği",
    detail: "8x6 m, LED ve line array altyapı",
  },
];

const SIZE_GUIDE_STEPS = [
  {
    title: "Katılımcı sayısını ve etkinlik formatını belirleyin",
    desc: "Oturma düzenindeki söyleşi ve toplantılarda daha kompakt bir sahne yeterli olabilirken; ayakta izlenen konser ve festivallerde katılımcı sayısı arttıkça sahne alanı da büyür.",
    Icon: Users,
  },
  {
    title: "Görüş açısı için doğru yüksekliği seçin",
    desc: "Ön sırada engel olmayan oturma düzenlerinde alçak bir podyum yeterli olabilirken; ayakta ve kalabalık izleyici önünde en arkadaki katılımcıya kadar net görüş açısı için daha yüksek bir podyum gerekir.",
    Icon: Eye,
  },
  {
    title: "Mekan tipini ve ek teknik ihtiyaçları paylaşın",
    desc: "İç mekan mı dış mekan mı olduğu, tavan yüksekliği (truss için), zemin türü ve LED ekran/ses-ışık ek ihtiyaçları teklif öncesi netleştiğinde en doğru paket birlikte seçilir.",
    Icon: Ruler,
  },
];

const SIZE_GUIDE_TABLE = [
  {
    scale: "Söyleşi, küçük toplantı",
    participants: "30-80 kişi",
    area: "12-16 m²",
    height: "20-40 cm",
  },
  {
    scale: "Kurumsal lansman, sunum",
    participants: "80-200 kişi",
    area: "16-24 m²",
    height: "40-60 cm",
  },
  {
    scale: "Konferans, gala",
    participants: "200-400 kişi",
    area: "24-48 m²",
    height: "60-80 cm",
  },
  {
    scale: "Konser, festival",
    participants: "400+ kişi",
    area: "48 m² ve üzeri",
    height: "80-100 cm ve üzeri",
  },
];

/* ================== HERO ================== */
const HERO_BADGES = [
  "Truss & Rigging",
  "Modüler Podyum",
  "LED Ekran Entegrasyonu",
  "Ses & Işık Sistemleri",
  "Kredi Kartı ile Taksitli Ödeme",
];

const HERO_METRICS = [
  {
    value: `${YEARS_OF_EXPERIENCE}`,
    label: "Yıl Deneyim",
    detail: "Konser, konferans ve festival sahnelerinde kesintisiz operasyon.",
  },
  {
    value: PROJECTS_COMPLETED,
    label: "Tamamlanan Proje",
    detail: "Kurumsal lansmanlardan açık hava festivallerine geniş referans.",
  },
  {
    value: `${PROVINCES_COUNT} İl`,
    label: "Kurulum Operasyonu",
    detail: "Türkiye genelinde nakliye, kurulum ve söküm koordinasyonu.",
  },
  {
    value: "7/24",
    label: "Teknik Destek",
    detail: "Mini sahneden konser sahnesine her ölçekte kurulum ve saha desteği.",
  },
];

function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#05070d] text-white pt-24 pb-14 md:pt-28 md:pb-20 lg:pt-32"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={HERO.src}
          alt={HERO.alt}
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes={HERO.sizes}
          quality={68}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />

        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,.94)_0%,rgba(2,6,23,.78)_40%,rgba(2,6,23,.45)_72%,rgba(2,6,23,.22)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#05070d] via-[#05070d]/[0.72] to-transparent"
          aria-hidden="true"
        />

        <div
          className="absolute left-[-10rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-blue-600/[0.16] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute right-[-12rem] top-[-6rem] h-[26rem] w-[26rem] rounded-full bg-cyan-400/[0.12] blur-3xl"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/[0.16] bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-md">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.85)]"
              aria-hidden="true"
            />
            <span>Türkiye geneli profesyonel sahne kurulumu</span>
          </div>

          <h1
            id="hero-title"
            className="text-5xl font-black leading-[1.02] tracking-tight md:text-6xl lg:text-7xl"
          >
            Sahne Kiralama{" "}
            <span className="gradient-text-clip-safe mt-2 block bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-3xl font-black md:text-4xl lg:text-5xl">
              ve Profesyonel Kurulum
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/[0.78] md:text-xl">
            Konser, konferans, lansman, miting ve festival etkinlikleri için
            truss sistemleri, modüler podyum, LED ekran ve ses-ışık altyapısıyla
            anahtar teslim sahne çözümleri.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {HERO_BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.07] px-4 py-2 text-sm font-bold text-white/[0.88] backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={WHATSAPP}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="WhatsApp üzerinden sahne kiralama teklifi alın"
              className="group inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-green-700 px-8 py-3.5 font-black text-white shadow-[0_16px_38px_rgba(21,128,61,0.34)] transition hover:bg-green-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
            >
              Teklif Al
              <ArrowRight
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="#paketler"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/[0.18] bg-white/[0.07] px-8 py-3.5 font-black text-white backdrop-blur-md transition hover:border-blue-300/40 hover:bg-white/[0.12] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              Paketleri Gör
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {HERO_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/[0.1] bg-white/[0.06] p-4 backdrop-blur-xl transition hover:border-blue-300/40 hover:bg-white/[0.1]"
              >
                <div className="gradient-text-clip-safe bg-gradient-to-r from-white to-blue-200 bg-clip-text text-xl font-black md:text-2xl">
                  {metric.value}
                </div>
                <div className="mt-1 text-xs font-bold text-blue-100 md:text-sm">{metric.label}</div>
                <p className="mt-2 hidden text-xs leading-relaxed text-white/[0.6] lg:block">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== Teklif Akisi ================== */
function RentalFlow() {
  return (
    <section
      id="teklif-akisi"
      className="bg-white py-14 sm:py-16"
      aria-labelledby="teklif-akisi-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-blue-700">
              Hızlı karar akışı
            </p>
            <h2
              id="teklif-akisi-baslik"
              className="max-w-2xl break-words text-2xl font-black leading-tight text-gray-950 sm:text-4xl md:text-5xl"
            >
              Sahne kiralamada önce ihtiyacı netleştirelim, sonra paketi seçelim.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
              En doğru teklif için önce etkinlik formatını, sahne ölçüsünü ve
              kurulum şartlarını sade bir akışta topluyoruz. Hazır paketlerden
              biri uygunsa aynı gün hızlı teklif hazırlanabilir.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={WHATSAPP}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl bg-green-700 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-green-800 hover:no-underline focus-ring sm:w-auto"
              >
                <MessageCircle size={20} aria-hidden="true" />
                WhatsApp ile Başlayın
              </Link>
              <Link
                href="#paketler"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 font-bold text-gray-950 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:no-underline focus-ring sm:w-auto"
              >
                Paketleri Karşılaştır
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {FLOW_STEPS.map((step, index) => (
              <article
                key={step.title}
                className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white">
                  <step.Icon size={23} aria-hidden="true" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-black uppercase tracking-wide text-blue-700">
                    Adım {index + 1}
                  </div>
                  <h3 className="text-xl font-black leading-snug text-gray-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-600">
                    {step.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl rounded-3xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-black text-gray-950">
                Hangi paket size daha yakın?
              </h3>
              <p className="mt-1 text-gray-600">
                Etkinlik tipine göre başlangıç paketini seçip detayları
                teklif aşamasında netleştirebiliriz.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {PACKAGE_GUIDE.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-white bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md hover:no-underline focus-ring"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h4 className="text-xl font-black text-gray-950">
                    {item.label}
                  </h4>
                  <ArrowRight
                    size={19}
                    className="text-blue-700 transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-base font-semibold text-gray-700">
                  {item.bestFor}
                </p>
                <p className="mt-2 text-sm text-gray-500">{item.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== Ölçü & Yükseklik Rehberi ================== */
function SizeGuide() {
  return (
    <section
      id="olcu-rehberi"
      className="py-20 bg-white"
      aria-labelledby="olcu-rehberi-baslik"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-wide text-blue-700">
            3 adımda doğru sahne
          </p>
          <h2
            id="olcu-rehberi-baslik"
            className="mb-6 text-balance text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            Doğru Sahne Ölçüsü ve Yüksekliği Nasıl Seçilir?
          </h2>
          <p className="text-xl leading-relaxed text-gray-600">
            Paketleri incelemeden önce, etkinliğinize uygun m² ve yükseklik
            aralığını üç adımda netleştirebilirsiniz.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {SIZE_GUIDE_STEPS.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white">
                <step.Icon size={23} aria-hidden="true" />
              </div>
              <div className="mb-2 text-sm font-black uppercase tracking-wide text-blue-700">
                Adım {index + 1}
              </div>
              <h3 className="text-xl font-black leading-snug text-gray-950">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                {step.desc}
              </p>
            </article>
          ))}
        </div>

        <div role="region" aria-label="Karşılaştırma tablosunu yatay kaydır" tabIndex={0} className="mx-auto mt-10 max-w-6xl overflow-x-auto rounded-3xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
          <h3 className="mb-5 text-2xl font-black text-gray-950">
            Etkinlik ölçeğine göre başlangıç referansı
          </h3>
          <table className="w-full min-w-[560px] border-collapse text-left text-sm sm:text-base">
            <thead>
              <tr className="border-b border-blue-200 text-gray-700">
                <th className="py-3 pr-4 font-black">Etkinlik ölçeği</th>
                <th className="py-3 pr-4 font-black">Katılımcı sayısı</th>
                <th className="py-3 pr-4 font-black">Önerilen alan</th>
                <th className="py-3 font-black">Önerilen yükseklik</th>
              </tr>
            </thead>
            <tbody>
              {SIZE_GUIDE_TABLE.map((row) => (
                <tr key={row.scale} className="border-b border-blue-100 last:border-0">
                  <td className="py-3 pr-4 font-bold text-gray-900">{row.scale}</td>
                  <td className="py-3 pr-4 text-gray-700">{row.participants}</td>
                  <td className="py-3 pr-4 text-gray-700">{row.area}</td>
                  <td className="py-3 text-gray-700">{row.height}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Bu aralıklar genel bir başlangıç referansıdır; kesin ölçü ve
            yükseklik, mekan tipi, görüş açısı ve ek ekipman ihtiyacına göre
            teklif aşamasında birlikte netleştirilir.
          </p>
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
      className="py-20 bg-gradient-to-b from-white to-blue-50/50"
      aria-labelledby="hizmetler-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="hizmetler-baslik"
            className="mb-6 text-balance text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Modüler Sahne Platformu{" "}
            <span className="text-blue-700">
              Kiralama ve Teknik Hizmetlerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sahne kiralama hizmetlerimiz: modüler sistemler, truss rigging, LED
            ekran entegrasyonu ve profesyonel kurulum
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service) => {
            const id = `svc-${slugify(service.title)}`;
            return (
              <div key={id} className="group">
                <article
                  className="flex h-full flex-col rounded-3xl border-2 border-gray-100 bg-white p-6 shadow-xl transition-all duration-500 hover:shadow-2xl lg:group-hover:scale-105 sm:p-8"
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
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              📞
            </span>
            <span>Detaylı Teklif için İletişime Geçin</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Paketler ================== */
function Packages() {
  return (
    <section
      id="paketler"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="paketler-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="paketler-baslik"
            className="mb-6 text-balance text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Sahne Kiralama{" "}
            <span className="text-blue-700">
              Fiyatları ve Hazır Paketler
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sahne kiralama ücretleri; ölçü, yükseklik, teknik ekipman ve saha koşullarına göre netleşir.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PACKAGES.map((pkg, index) => (
            <article key={pkg.id} id={`fiyat-${index + 1}`} className="group">
              <div
                className={`bg-white rounded-3xl border-2 shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 h-full flex flex-col ${
                  pkg.badge === "Popüler"
                    ? "border-blue-500 ring-4 ring-blue-500/20 lg:scale-105 lg:group-hover:scale-110"
                    : "border-gray-100 lg:group-hover:scale-105"
                }`}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-700 to-purple-700 p-8 text-white relative overflow-hidden">
                  {pkg.badge && (
                    <div
                      className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold ${
                        pkg.badge === "Popüler"
                          ? "bg-orange-800"
                          : pkg.badge === "Profesyonel"
                          ? "bg-blue-600"
                          : "bg-green-700"
                      }`}
                    >
                      {pkg.badge}
                    </div>
                  )}
                  <div className="text-4xl mb-4" aria-hidden="true">
                    {pkg.id === "mini-sahne" && "💼"}
                    {pkg.id === "standart-sahne" && "🏆"}
                    {pkg.id === "konser-sahnesi" && "🚀"}
                  </div>
                  <h3 className="text-2xl font-black mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-4 text-blue-100 text-sm">
                    <span>{pkg.specs.dimensions}</span>
                    <span>•</span>
                    <span>{pkg.specs.area}</span>
                    <span>•</span>
                    <span>{pkg.specs.height}</span>
                  </div>
                  <p className="text-blue-100 text-lg mt-2">{pkg.note}</p>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow">
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                      <span
                        className="w-2 h-2 bg-blue-600 rounded-full"
                        aria-hidden="true"
                      />
                      Paket İçeriği
                    </h4>
                    <ul className="space-y-3">
                      {pkg.includes.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span
                            className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fiyat */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                    <div className="text-center mb-4">
                      <div className="text-sm text-gray-800 uppercase tracking-wider font-semibold">
                        Günlük Kira (İstanbul)
                      </div>
                      <div className="text-3xl font-black text-gray-900 mt-2">
                        Fiyat sorunuz
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-gray-600">
                        Tahmini bütçedir; tarih, lokasyon, kurulum şartları ve
                        ek teknik ihtiyaçlara göre netleştirilir.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-8 pt-0">
                  <Link
                    href={`${WHATSAPP}&package=${encodeURIComponent(pkg.name)}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="w-full inline-flex items-center justify-center font-bold px-6 py-4 rounded-2xl bg-green-700 text-white hover:scale-105 hover:bg-green-800 transform transition-all duration-300 hover:shadow-xl focus-ring"
                  >
                    <span aria-hidden="true" className="text-xl mr-2">
                      💬
                    </span>
                    <span>Bu Paket için Teklif Al</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Galeri ================== */
const GALLERY_IMAGES = [
  {
    src: "/img/sahne/1.webp",
    alt: "Konser sahnesi ve profesyonel truss kurulumu - Büyük LED ekran ve ışık sistemi",
  },
  {
    src: "/img/sahne/2.webp",
    alt: "Konferans sahnesi ve LED ekran entegrasyonu - Modern tasarım ve profesyonel aydınlatma",
  },
  {
    src: "/img/sahne/3.webp",
    alt: "Açık hava festival sahnesi ve ışık sistemi - Geniş alan kurulumu",
  },
  {
    src: "/img/sahne/4.webp",
    alt: "Kurumsal lansman sahnesi ve özel tasarım - Marka entegrasyonlu sahne",
  },
  {
    src: "/img/sahne/5.webp",
    alt: "Düğün sahnesi ve dekoratif kurulum - Şık ve romantik tasarım",
  },
  {
    src: "/img/sahne/6.webp",
    alt: "Ödül töreni sahnesi ve protokol düzeni - Profesyonel ışıklandırma",
  },
  {
    src: "/img/sahne/7.webp",
    alt: "Türkiye genelinde sahne kiralama hizmeti - Profesyonel ekipmanlar",
  },
  {
    src: "/img/sahne/8.webp",
    alt: "Kaliteli sahne ekipmanları ve teknik altyapı - Sahneva",
  },
];

function StaticGallery({ images, visibleCount = 8, priorityCount = 2 }) {
  const displayImages = visibleCount ? images.slice(0, visibleCount) : images;

  return (
    <div
      className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
      aria-label="Proje galerisi"
    >
      {displayImages.map((img, index) => (
        <figure
          key={`stage-gallery-${index}`}
          className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
        >
          <div
            className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg shadow-slate-900/5 ${
              index === 0 ? "aspect-[4/3] h-full" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={
                index === 0
                  ? "(max-width: 768px) 100vw, 50vw"
                  : "(max-width: 768px) 50vw, 25vw"
              }
              className="object-cover"
              loading={index < priorityCount ? "eager" : "lazy"}
              decoding="async"
              quality={index === 0 ? 68 : 60}
            />
          </div>
        </figure>
      ))}
    </div>
  );
}

function Gallery() {
  return (
    <section className="py-20 bg-white" aria-labelledby="galeri-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="galeri-baslik"
            className="mb-6 text-balance text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Proje{" "}
            <span className="text-blue-700">
              Galerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gerçekleştirdiğimiz başarılı sahne kurulumlarından örnekler
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <StaticGallery
            images={GALLERY_IMAGES}
            visibleCount={8}
            priorityCount={0}
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla projemizi incelemek için galerimizi keşfedin
          </p>
          <Link
            href="/projeler"
            prefetch={false}
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transform transition-all duration-300 focus-ring"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              📸
            </span>
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
      category: "podyum",
      title: "Podyum Sistemleri",
      description:
        "1×1 ve 2×1 modüler paneller ile esnek ve güvenli sahne çözümleri",
      features: [
        "1×1 & 2×1 paneller",
        "20-100 cm yükseklik",
        "Kaymaz kaplama",
        "Merdiven & rampa",
      ],
    },
    {
      category: "truss",
      title: "Truss & Rigging",
      description:
        "Alüminyum truss sistemleri, profesyonel rigging ve güvenlik ekipmanları",
      features: [
        "Alüminyum truss",
        "Profesyonel rigging",
        "Statik hesaplama",
        "Güvenlik sistemleri",
      ],
    },
    {
      category: "led",
      title: "LED Ekran Sistemleri",
      description:
        "P2-P6 LED ekranlar, video wall sistemleri ve canlı yayın çözümleri",
      features: [
        "P2-P6 LED ekranlar",
        "Video wall sistemleri",
        "4K çözünürlük",
        "Canlı yayın",
      ],
    },
    {
      category: "ses",
      title: "Ses Sistemleri",
      description:
        "Profesyonel ses sistemleri, mikserler ve kablosuz ekipmanlar",
      features: [
        "Line array sistemler",
        "Dijital mikserler",
        "Kablosuz mikrofonlar",
        "Monitör sistemleri",
      ],
    },
    {
      category: "isik",
      title: "Işık Sistemleri",
      description:
        "Hareketli ışık başlıkları, LED wash ve profesyonel ışık tasarımı",
      features: [
        "Hareketli başlıklar",
        "LED wash ışıklar",
        "DMX kontrol",
        "Işık tasarımı",
      ],
    },
    {
      category: "guvenlik",
      title: "Güvenlik Sistemleri",
      description:
        "Korkuluk, rampa, acil çıkış ve profesyonel güvenlik önlemleri",
      features: [
        "Kenar korkulukları",
        "Engelli rampaları",
        "Acil çıkış planlaması",
        "Güvenlik ekipmanları",
      ],
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="altyapi-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="altyapi-baslik"
            className="mb-6 text-balance text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Teknik{" "}
            <span className="text-blue-700">
              Altyapımız
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En son teknoloji sahne sistemleri ve profesyonel teknik altyapı ile
            hizmetinizdeyiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {technicalItems.map((item) => (
            <div key={item.category} className="group">
              <div className="h-full rounded-3xl border-2 border-gray-100 bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-xl lg:group-hover:scale-105 sm:p-8">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-blue-600 sm:text-2xl">
                  <span className="text-3xl" aria-hidden="true">
                    {item.category === "podyum" && "🎭"}
                    {item.category === "truss" && "🏗️"}
                    {item.category === "led" && "🖥️"}
                    {item.category === "ses" && "🎵"}
                    {item.category === "isik" && "💡"}
                    {item.category === "guvenlik" && "🛡️"}
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

/* ================== İstatistik Bant ================== */
function StatsBand() {
  const stats = [
    { value: PROJECTS_COMPLETED, label: "Tamamlanan Proje", icon: "🏆" },
    { value: "7/24", label: "Teknik Destek", icon: "🎵" },
    { value: `${PROVINCES_COUNT}`, label: "İlde Hizmet", icon: "🗺️" },
    { value: `${YEARS_OF_EXPERIENCE}`, label: "Yıl Deneyim", icon: "⭐" },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white"
      aria-label="Başarı İstatistiklerimiz"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className="text-center group"
              role="group"
              aria-labelledby={`sahne-stat-${index}-value`}
              aria-describedby={`sahne-stat-${index}-label`}
            >
              <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/20 lg:group-hover:scale-105 sm:p-8">
                <div
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>
                <h3
                  id={`sahne-stat-${index}-value`}
                  className="text-4xl md:text-5xl font-black mb-2 text-white drop-shadow-lg"
                >
                  {stat.value}
                </h3>
                <p
                  id={`sahne-stat-${index}-label`}
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
    <section
      className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/95"
      aria-labelledby="kullanim-alanlari-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="kullanim-alanlari-baslik"
            className="mb-6 text-balance text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Kullanım{" "}
            <span className="text-cyan-300">
              Alanları
            </span>
          </h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            Sahne çözümlerimizin tercih edildiği başlıca etkinlik türleri ve özel
            çözümlerimiz
          </p>
          <div
            className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full"
            aria-hidden="true"
          />
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          role="list"
        >
          {USE_CASES.map((uc) => (
            <div
              key={uc.text}
              className="group rounded-3xl border border-white/30 bg-white/10 p-6 backdrop-blur-lg transition-all duration-500 hover:border-white/50 lg:hover:scale-105 sm:p-8"
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
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-emerald-900 text-white hover:scale-105 hover:bg-emerald-950 transform transition-all duration-300 hover:shadow-xl focus-ring"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              💬
            </span>
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
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50/50"
      aria-labelledby="bilgi-rehber-baslik"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2
            id="bilgi-rehber-baslik"
            className="mb-6 text-balance text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Bilgi &{" "}
            <span className="text-blue-700">
              Profesyonel Rehber
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sahne kiralama ve etkinlik planlama hakkında uzman görüşleri ve
            teknik bilgiler
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ana Makale */}
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white p-8 md:p-10 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-black/10"
                aria-hidden="true"
              ></div>
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
                  Profesyonel Sahne Kiralama: Etkinlik Başarınız İçin Anahtar
                  Teslim Çözümler
                </h3>
                <p className="text-blue-100 mt-4 text-lg md:text-xl leading-relaxed">
                  Modüler sahne sistemleri, truss rigging, LED ekran entegrasyonu
                  ve profesyonel ekip ile etkinliklerinizde mükemmel performans
                </p>
              </div>
            </header>

            <div className="p-8 md:p-10">
              <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-em:text-gray-600 prose-ul:mt-6 prose-ul:mb-6 prose-li:marker:text-blue-500">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-gray-900 flex items-center gap-4">
                      <span
                        className="bg-blue-100 text-blue-600 rounded-2xl p-3"
                        aria-hidden="true"
                      >
                        🎭
                      </span>
                      Modüler Sahne Sistemleri
                    </h4>
                    <p>
                      <strong className="text-gray-900">Sahneva</strong>, Türkiye
                      genelinde{" "}
                      <strong className="text-gray-900">profesyonel sahne kiralama</strong>{" "}
                      hizmetleriyle kurumsal standartta çözümler sunmaktadır.
                    </p>
                    <p>
                      Etkinliğiniz ister konser sahnesi, ister kurumsal konferans
                      olsun; detaylı teknik keşif, sahne optimizasyonu, profesyonel
                      kurulum ve canlı operasyon dahil{" "}
                      <strong className="text-gray-900">
                        anahtar teslim çözümler
                      </strong>{" "}
                      sunuyoruz.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-gray-900 flex items-center gap-4">
                      <span
                        className="bg-purple-100 text-purple-600 rounded-2xl p-3"
                        aria-hidden="true"
                      >
                        🏗️
                      </span>
                      Truss & Güvenlik Sistemleri
                    </h4>
                    <p>
                      Tüm truss sistemlerimiz alüminyum malzemeden üretilmiş olup,
                      statik hesaplamalar ve güvenlik testleri ile en yüksek
                      standartlara uygun olarak kurulmaktadır.
                    </p>
                    <p>
                      1×1 m ve 2×1 m modüler panel seçeneklerimizle, mekan
                      özelliklerine ve etkinlik türüne göre optimize edilmiş
                      çözümler sunarak hem güvenlik hem de fonksiyonellik
                      sorunlarını ortadan kaldırıyoruz.
                    </p>
                  </div>
                </div>

                {/* Önemli Bilgi Kutusu */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 rounded-r-2xl p-6 mb-8">
                  <h5 className="font-black text-blue-700 text-xl mb-4 flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      💡
                    </span>
                    Teknik Seçim Stratejisi
                  </h5>
                  <p className="text-gray-700 text-lg mb-0 leading-relaxed">
                    Sahne seçiminde etkinlik türü ve katılımcı sayısı en kritik
                    faktördür. Küçük etkinlikler (50-100 kişi) için 12-24 m², orta
                    ölçekli etkinlikler (100-300 kişi) için 24-48 m², büyük
                    etkinlikler (300+ kişi) için 48 m² ve üzeri sahne alanı öneriyoruz.
                    Açık hava etkinliklerinde ise rüzgar yükü ve zemin stabilitesi
                    öncelikli değerlendirilmelidir.
                  </p>
                </div>

                {/* Başarı Faktörleri Grid */}
                <div className="mb-8">
                  <h4 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-4">
                    <span
                      className="bg-green-100 text-green-600 rounded-2xl p-3"
                      aria-hidden="true"
                    >
                      🚀
                    </span>
                    Kritik Başarı Faktörleri
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: "🎯",
                        title: "Doğru Boyut Seçimi",
                        desc: "Etkinlik türüne ve katılımcı sayısına göre optimize edilmiş sahne boyutları",
                      },
                      {
                        icon: "📊",
                        title: "Güvenlik Optimizasyonu",
                        desc: "Statik hesaplamalar, rigging güvenliği ve acil durum planlaması",
                      },
                      {
                        icon: "🔒",
                        title: "Teknik Entegrasyon",
                        desc: "Ses, ışık ve LED ekran sistemlerinin uyumlu entegrasyonu",
                      },
                      {
                        icon: "🎭",
                        title: "Profesyonel Ekip",
                        desc: "Deneyimli teknik ekip ve canlı operasyon yönetimi",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group hover:border-blue-200"
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className="text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                            aria-hidden="true"
                          >
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
                    <span className="text-xl" aria-hidden="true">
                      💎
                    </span>
                    Neden Sahneva?
                  </h5>
                  <p className="text-yellow-800 mb-0">
                    <strong>
                      {YEARS_OF_EXPERIENCE} yıllık deneyim, {PROJECTS_COMPLETED} başarılı proje ve {PROVINCES_COUNT} ilde hizmet
                    </strong>{" "}
                    ile sahne kiralama konusunda güvenilir çözüm ortağınız. En
                    son teknoloji ekipman, uzman ekip ve 7/24 teknik destek
                    garantisi.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Yan Makaleler */}
          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                Truss & Rigging Sistemleri
              </h3>
              <p className="text-blue-100 mt-2 text-lg">
                Profesyonel sahne güvenliği için kritik unsurlar ve standartlar
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <p>
                  Truss sistemleri sahne güvenliğinin temel taşlarıdır. Tüm
                  sistemlerimiz TS EN 13814 sahne güvenlik standartlarına uygun
                  olarak tasarlanmış ve kurulmuştur.
                </p>
                <p>
                  Alüminyum malzeme, yüksek güvenlik katsayıları, profesyonel
                  rigging ekipmanları ve deneyimli ekip ile her türlü etkinlik
                  için güvenli çözümler sunuyoruz.
                </p>

                <div className="bg-gray-50 rounded-2xl p-5 mt-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-3">
                    <span
                      className="bg-purple-100 text-purple-600 rounded-xl p-2"
                      aria-hidden="true"
                    >
                      🏗️
                    </span>
                    Truss Standartları
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      6061-T6 alüminyum malzeme
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      5:1 güvenlik katsayısı
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      Profesyonel rigging ekipmanları
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      Statik ve dinamik yük testleri
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
                Her etkinlik türüne özel sahne stratejileri ve teknik çözümler
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span
                        className="bg-blue-100 text-blue-600 rounded-xl p-2"
                        aria-hidden="true"
                      >
                        🎵
                      </span>
                      Konser & Festival
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Yüksek stabilite, geniş performans alanı, line array ses
                      sistemleri, profesyonel ışık/ses entegrasyonu
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-5 border border-purple-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span
                        className="bg-purple-100 text-purple-600 rounded-xl p-2"
                        aria-hidden="true"
                      >
                        💼
                      </span>
                      Kurumsal Etkinlikler
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Şık görünüm, markalama imkanı, konuşmacı dostu tasarım,
                      profesyonel sunum alanı
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-5 border border-green-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span
                        className="bg-green-100 text-green-600 rounded-xl p-2"
                        aria-hidden="true"
                      >
                        💒
                      </span>
                      Düğün & Özel Davet
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Dekoratif kaplamalar, nikah sahnesi, dans platformu,
                      estetik detaylar
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
    q: "Sahne kiralama fiyatları ne kadar?",
    a: "Sahne kiralama fiyatı; sahne ölçüsü, yükseklik, truss ihtiyacı, ses-ışık kapsamı, etkinlik tarihi ve lokasyona göre değişir. Standart fiyatlı bir katalog üzerinden satış yapmıyoruz; mini sahne, standart sahne ve konser sahnesi paketlerimizin kapsamını yukarıda inceleyip tarih ile tahmini ölçünüzü paylaştığınızda aynı gün net bir teklif hazırlıyoruz.",
  },
  {
    q: "Sahne kurulumu ne kadar sürer?",
    a: "Standart bir sahne kurulumu 4-8 saat arasında tamamlanır. 16 m²'ye kadar küçük kurulumlar 4-6 saat, 16-48 m² orta ölçekli kurulumlar 6-8 saat, 48 m²+ büyük kurulumlar ise 8-12 saat sürmektedir. Kompleks truss ve rigging gerektiren projelerde bu süre 24 saate kadar çıkabilir.",
  },
  {
    q: "Açık hava etkinlikleri için uygun mu?",
    a: "Evet, tüm sahne sistemlerimiz açık hava kullanımına uygundur. Rüzgar yükü hesapları, zemin stabilite analizleri, su geçirmez ekipmanlar ve acil durum planlamaları ile açık hava etkinlikleri için güvenli çözümler sunuyoruz. Ancak şiddetli fırtına ve kasırga gibi ekstrem hava koşullarında güvenlik önlemi olarak kullanıma ara verilmesini öneriyoruz.",
  },
  {
    q: "Ses ve ışık sistemleri dahil mi?",
    a: "Evet, tüm paketlerimizde temel ses ve ışık sistemleri dahildir. Mini sahne paketinde 2 LED bar + 2 spot, standart sahne paketinde 4 hareketli başlık + 6 wash + 2+1 hoparlör sistemi, konser sahnesi paketinde ise line array PA sistemi, monitörler ve profesyonel ışık sistemi yer almaktadır. Özel ihtiyaçlarınız için ek ekipmanlar da temin edebiliriz.",
  },
  {
    q: "Sahne için elektrik ve güç ihtiyacını kim karşılıyor?",
    a: "Ses, ışık ve LED ekran ekipmanları için gerekli güç dağıtımını ve kablolamayı biz planlıyoruz. Mekânda yeterli elektrik altyapısı yoksa jeneratör desteğini de organizasyona dahil edebiliyoruz; kurulum öncesi teknik keşifte mevcut güç kapasitesini birlikte kontrol ediyoruz.",
  },
  {
    q: "Sahne kiralama için ne kadar önceden rezervasyon yapmalıyız?",
    a: "Mini ve standart sahne paketlerinde birkaç iş günü öncesinden talep genellikle yeterli olur. Truss ve LED ekran içeren konser ölçeğindeki kurulumlarda, özellikle yoğun sezonlarda, en az 2-3 hafta önceden planlama yapmanızı öneririz; erken rezervasyon ekip ve ekipman uygunluğunu garanti altına alır.",
  },
  {
    q: "Engelli erişimi ve rampa seçenekleriniz var mı?",
    a: "Evet, 60 cm ve üzeri yükseklikteki sahne kurulumlarında talep üzerine erişim rampası ekleyebiliyoruz. Konuşmacı ve katılımcı erişilebilirliğinin önemli olduğu kurumsal etkinliklerde bu ihtiyacı teklif aşamasında belirtmeniz yeterlidir.",
  },
  {
    q: "İç mekan ile dış mekan sahne kurulumu arasındaki fark nedir?",
    a: "İç mekanda zemin genellikle düzdür ve rüzgar yükü hesaba katılmaz. Dış mekanda ise zemin stabilitesi, rüzgar yükü hesaplaması ve gerektiğinde su geçirmez ekipman öncelikli değerlendirilir. Her iki durumda da truss ve podyum sistemleri aynı kalitede kurulur; fark kurulum süresi ve alınan ek güvenlik önlemlerinde ortaya çıkar.",
  },
  {
    q: "Düğün sahne fiyatları nasıl belirlenir?",
    a: "Düğün sahne fiyatları; nikah veya dans platformunun ölçüsü ve yüksekliği, dekoratif kaplama, merdiven ya da rampa, LED ekran, ses ve ışık sistemi, nakliye, kurulum ve söküm kapsamına göre belirlenir. Mekan ölçüsü ile davet akışını paylaştığınızda uygun sahne planı ve net teklif hazırlanır.",
  },
];

function FAQ() {
  return (
    <section className="py-20 bg-white" aria-labelledby="sss-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2
            id="sss-baslik"
            className="mb-6 text-balance text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Sık Sorulan{" "}
            <span className="text-blue-700">
              Sorular
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Sahne kiralama hakkında merak edilen sorular ve cevapları
          </p>
        </div>

        <div
          className="space-y-6"
          aria-label="Sık sorulan sorular listesi"
        >
          {FAQ_ITEMS.map((faq, index) => (
            <details
              key={index}
              className="group rounded-3xl border-2 border-transparent bg-gray-50 p-6 transition-all duration-500 hover:bg-gray-100 open:border open:border-blue-200 open:bg-blue-50 sm:p-8"
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
              <div
                className="mt-6 text-gray-700 leading-relaxed text-lg pl-4 border-l-4 border-blue-500"
                role="region"
              >
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
            prefetch={false}
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
            aria-label="Sık Sorulan Sorular sayfasındaki tüm soruları görüntüle"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              📚
            </span>
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
      href: "/ses-isik-sistemleri",
      title: "Ses & Işık Sistemleri",
      Icon: Music,
      desc: "Profesyonel ses ve ışık sistemleri kiralama",
    },
    {
      href: "/podyum-kiralama",
      title: "Podyum Kiralama",
      Icon: Layout,
      desc: "Modüler podyum sistemleri kiralama",
    },
    {
      href: "/led-ekran-kiralama",
      title: "LED Ekran Kiralama",
      Icon: Monitor,
      desc: "Profesyonel LED ekran ve video wall sistemleri",
    },
    {
      href: "/truss-kiralama",
      title: "Truss Kiralama",
      Icon: Layers,
      desc: "Alüminyum truss sistemleri kiralama",
    },
    {
      href: "/turkiyede-etkinlik-cozum-ortagi",
      title: "Türkiye’de Teknik Prodüksiyon Partneri",
      Icon: Layers,
      desc: "Yurt dışı etkinlik projeleri için yerel saha ve kurulum koordinasyonu",
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
            className="mb-6 text-balance text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Tamamlayıcı{" "}
            <span className="text-blue-700">
              Hizmetlerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sahne kurulumunuzu tamamlayacak diğer profesyonel etkinlik
            çözümlerimiz
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
                prefetch={false}
                className="group flex h-full flex-col rounded-3xl border-2 border-gray-100 bg-white p-6 text-center shadow-xl transition-all duration-500 hover:border-blue-200 hover:shadow-2xl focus-ring lg:hover:scale-105 sm:p-8"
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
            Bu bölümde sahne kurulumunuzu tamamlayacak diğer hizmetlerimiz
            bulunmaktadır. Her bir hizmet kartına tıklayarak veya klavye ile
            seçerek ilgili sayfaya gidebilirsiniz.
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
          <div
            className="absolute inset-0 bg-black/10"
            aria-hidden="true"
          ></div>
          <div className="relative z-10">
            <h2
              id="cta-baslik"
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
            >
              Profesyonel Sahne Çözümlerine Hazır Mısınız?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Etkinliğiniz için en uygun sahne sistemlerini sunalım. Ücretsiz
              keşif, profesyonel danışmanlık ve kalem kalem şeffaf fiyatlandırma
              ile hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/iletisim"
                prefetch={false}
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus-ring shadow-lg"
              >
                <span aria-hidden="true" className="text-xl mr-3">
                  📞
                </span>
                <span className="text-lg">Hemen Teklif Al</span>
              </Link>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus-ring shadow-lg"
              >
                <span aria-hidden="true" className="text-xl mr-3">
                  💬
                </span>
                <span className="text-lg">WhatsApp&apos;tan Yaz</span>
              </a>
            </div>
            <div className="mt-8 text-blue-200 text-lg">
              📍 {PROVINCES_COUNT} ilde hizmet • ⏰ 7/24 teknik destek • ⭐ {YEARS_OF_EXPERIENCE} yıl deneyim
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== JSON-LD (FINAL / NO RATING) ================== */
/* Burada next/script yerine düz <script> kullanıyoruz. */
function StageJsonLd() {
  const pageUrl = `${ORIGIN}/sahne-kiralama`;
  const pageDescription = metadata?.description || "";
  const webPageId = `${pageUrl}#webpage`;

  const provider = { "@id": ORGANIZATION_ID };

  const { service: serviceSchema, products } = buildServiceProductSchema({
    slug: "/sahne-kiralama",
    locale: "tr-TR",
  });

  const baseService = {
    "@type": "Service",
    name: "Sahne Kiralama",
    description: pageDescription,
    provider,
    areaServed: { "@type": "Country", name: "Türkiye" },
    // ❌ aggregateRating YOK (yorum yok dedin)
  };

  // ✅ Çakışmasız merge + WebPage bağlantısı
  const serviceNode = {
    ...(serviceSchema || {}),
    ...baseService,
    "@type": "Service",
    "@id": serviceSchema?.["@id"] || `${pageUrl}#service`,
    provider,
    url: pageUrl,
    mainEntityOfPage: { "@id": webPageId },
  };

  const serviceId = serviceNode["@id"];
  const productNodes = products ?? [];
  const faqSchema = buildFaqSchema(FAQ_ITEMS, {
    id: `${pageUrl}#faq`,
    pageId: webPageId,
    serviceId,
    inLanguage: "tr-TR",
  });
  const gallerySchema = buildImageGallerySchema({
    images: GALLERY_IMAGES,
    origin: ORIGIN,
    pageUrl,
    serviceId,
    webPageId,
    name: "Sahne kiralama galeri görselleri",
  });

  serviceNode.image = gallerySchema.imageUrls;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      serviceNode,
      {
        "@type": "WebPage",
        "@id": webPageId,
        name: "Sahne Kiralama | Profesyonel Sahne Çözümleri | Sahneva",
        description: pageDescription,
        url: pageUrl,
        inLanguage: "tr-TR",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": serviceId },
        publisher: provider,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${ORIGIN}${HERO.src}`,
          width: 1200,
          height: 630,
          caption: HERO.alt,
        },
        mainEntity: { "@id": serviceId },
        image: [`${ORIGIN}${HERO.src}`, ...gallerySchema.imageUrls],
        hasPart: [
          ...(gallerySchema.galleryNode ? [{ "@id": gallerySchema.galleryId }] : []),
          ...gallerySchema.imageNodes.map((image) => ({ "@id": image["@id"] })),
        ],
      },
      ...(gallerySchema.galleryNode ? [gallerySchema.galleryNode] : []),
      ...gallerySchema.imageNodes,
      ...productNodes,
      ...(faqSchema ? [faqSchema] : []),
    ],
  };

  return (
      <JsonLdScript
        id="ld-json-sahne"
        data={jsonLd}
      />
    );
}


/* ================== Sayfa Bileşeni ================== */
export default function Page() {
  const baseUrl = SITE_URL;
  const canonical = `${baseUrl}/sahne-kiralama`;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Hizmetler", url: `${baseUrl}/hizmetler` },
    { name: "Sahne Kiralama", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <StageJsonLd />
      <Hero />
      <ServiceDecisionGuide guide={SERVICE_DECISION_GUIDES.stage} />
      <RentalFlow />
      <SizeGuide />
      <Packages />
      <Services />
      <Gallery />
      <Technical />
      <EventWeatherWidget />
      <StatsBand />
      <UseCases />
      <Articles />
      <FAQ />
      <RelatedServices />
      <ServiceBlogLinks {...CONTENT_CLUSTERS.stageRental} links={CONTENT_CLUSTERS.stageRental.guides} />
      <RegionalCityLinks service="sahne kiralama" />
      <PaymentOptionsNote />
      <CTA />
    </>
  );
}

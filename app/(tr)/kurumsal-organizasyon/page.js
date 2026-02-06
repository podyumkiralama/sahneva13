// app/kurumsal-organizasyon/page.jsx
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { buildFaqSchema } from "@/lib/structuredData/faq";
import { buildServiceProductSchema } from "@/lib/structuredData/serviceProducts";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";

/* ================== Sabitler ================== */
export const revalidate = 1800;
const ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.sahneva.com";
const ORGANIZATION_ID = `${ORIGIN}/#org`;
const PHONE = "+905453048671";
const WA_TEXT =
  "Merhaba%2C+kurumsal+organizasyon+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bkonferans%2Flansman%2Fgala%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Kisi+sayisi%3A+%5Bxxx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

// Base64 blur placeholder
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

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
  title:
    "Kurumsal Organizasyon Şirketleri | İstanbul Etkinlik ve Organizasyon Kiralama",
  description:
    "İstanbul kurumsal organizasyon şirketleri arasında profesyonel sahne, LED ekran, ses ve etkinlik prodüksiyon çözümleri. Büyük organizasyon yönetimi ve organizasyon kiralama hizmetleri.",
  alternates: { canonical: `${ORIGIN}/kurumsal-organizasyon` },
  openGraph: {
    title:
      "Kurumsal Organizasyon Şirketleri | İstanbul Etkinlik ve Organizasyon Kiralama",
    description:
      "İstanbul kurumsal organizasyon şirketleri arasında profesyonel sahne, LED ekran, ses ve etkinlik prodüksiyon çözümleri. Büyük organizasyon yönetimi ve organizasyon kiralama hizmetleri.",
    url: `${ORIGIN}/kurumsal-organizasyon`,
    type: "website",
    siteName: "Sahneva Organizasyon",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/kurumsal/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Kurumsal organizasyon için konferans sahnesi ve etkinlik düzeni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kurumsal Organizasyon Şirketleri | İstanbul Etkinlik ve Organizasyon Kiralama",
    description:
      "İstanbul kurumsal organizasyon şirketleri arasında profesyonel sahne, LED ekran, ses ve etkinlik prodüksiyon çözümleri. Büyük organizasyon yönetimi ve organizasyon kiralama hizmetleri.",
    images: [`${ORIGIN}/img/kurumsal/hero.webp`],
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

/* ================== Yardımcılar & Sabitler ================== */
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, " ve ")
    .replace(/[^a-z0-9çğıöşü\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

/* ================== Premium helpers (hero like screenshot) ================== */
const KEYWORD_CHIPS = [
  "Kurumsal Organizasyon şirketleri",
  "Kurumsal etkinlik organizasyon şirketleri",
  "Etkinlik organizasyon",
  "Büyük organizasyon şirketleri",
  "Event organizasyon şirketleri",
  "Kurumsal etkinlik",
];

const HERO_FEATURES = [
  { t: "Tek sayfa strateji", d: "Brief → hedef, format, başarı metriği" },
  { t: "Teknik keşif", d: "Mekân ölçümü, güç, akustik, yükleme planı" },
  { t: "Yedekli sistem", d: "Güç, kontrol ve kritik ekipman yedekleri" },
  { t: "Run-of-show", d: "Prova, geçişler, sahne yönetimi" },
];

/* ================== Enterprise section system ================== */
function SectionShell({ variant = "light", id, children }) {
  const base = "relative overflow-hidden";
  const variants = {
    light: "bg-white",
    soft: "bg-gradient-to-b from-white to-slate-50/70",
    ink: "bg-[#0B1120] text-white",
  };

  return (
    <section id={id} className={`${base} ${variants[variant]} py-16 md:py-20`}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {variant === "ink" ? (
          <>
            <div
              className="absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />
            <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute -bottom-52 right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-400/12 blur-[140px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/60" />
          </>
        ) : (
          <>
            <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
            <div className="absolute -bottom-48 right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-500/8 blur-[120px]" />
          </>
        )}
      </div>

      <div className="relative container mx-auto px-4">{children}</div>
    </section>
  );
}

function H2({ kicker, title, desc, dark = false, center = false }) {
  return (
    <header className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-10`}>
      {kicker ? (
        <div
          className={[
            "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-sm",
            dark
              ? "border-white/15 bg-white/5 text-white/80"
              : "border-slate-200 bg-white text-slate-700",
          ].join(" ")}
        >
          <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
          <span className="font-semibold">{kicker}</span>
        </div>
      ) : null}

      <h2
        className={[
          "mt-5 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight",
          dark ? "text-white" : "text-gray-900",
        ].join(" ")}
      >
        {title}
      </h2>

      {desc ? (
        <p
          className={[
            "mt-4 text-lg md:text-xl leading-relaxed",
            dark ? "text-white/70" : "text-gray-600",
          ].join(" ")}
        >
          {desc}
        </p>
      ) : null}
    </header>
  );
}

function Card({ children, dark = false, className = "" }) {
  return (
    <div
      className={[
        "rounded-3xl border p-6 md:p-7 shadow-sm transition-all duration-300",
        dark
          ? "border-white/10 bg-white/5 backdrop-blur hover:bg-white/7"
          : "border-slate-200 bg-white hover:shadow-lg",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function PremiumMediaCard({ src, alt }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B1120] shadow-2xl">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 40vw"
          quality={90}
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="absolute inset-0 bg-[#0B1120]/35" />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -top-24 left-1/2 h-[280px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[90px]" />
        <div className="absolute -bottom-24 right-[-20%] h-[260px] w-[260px] rounded-full bg-cyan-500/18 blur-[90px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/25" />
      </div>

      <div className="p-6 bg-white/[0.03] backdrop-blur">
        <div className="grid grid-cols-3 gap-3">
          {[
            { k: "Operasyon", v: "Uçtan uca" },
            { k: "Altyapı", v: "Yedekli" },
            { k: "Plan", v: "Run-of-show" },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white"
            >
              <div className="text-xs text-white/60 font-semibold">{item.k}</div>
              <div className="mt-1 text-sm font-bold">{item.v}</div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-white/70 leading-relaxed">
          Kurumsal organizasyon yalnızca kurulum değil; planlama, risk ve görünürlük yönetimidir.
        </p>
      </div>
    </div>
  );
}

function PremiumGridBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* IMPORTANT: keep this semi-transparent so the hero image remains visible */}
      <div className="absolute inset-0 bg-[#0B1120]/55" />
      <div
        className="absolute inset-0 opacity-[0.20]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute -top-40 left-1/2 h-[560px] w-[920px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[130px]" />
      <div className="absolute -bottom-52 right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-400/15 blur-[140px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
    </div>
  );
}


function GlassCard({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,0.35)] " +
        className
      }
    >
      {children}
    </div>
  );
}

const HERO = {
  src: "/img/kurumsal/hero.webp",
  alt: "Profesyonel kurumsal organizasyon - Konferans sahnesi ve etkinlik düzenlemesi",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const SERVICES = [
  {
    icon: "🎤",
    title: "Konferans & Seminer Organizasyonu",
    description:
      "Profesyonel ses sistemi, LED ekran ve aydınlatma çözümleri ile etkileyici konferanslar",
    features: [
      "Simultane çeviri sistemleri",
      "Kablosuz mikrofon sistemleri",
      "Kayıt ve canlı yayın",
      "Akustik optimizasyon",
    ],
  },
  {
    icon: "🚀",
    title: "Ürün Lansman Organizasyonu",
    description:
      "Etkileyici görsel şovlar ve interaktif deneyimler ile unutulmaz lansmanlar",
    features: [
      "3D mapping ve projeksiyon",
      "Özel sahne tasarımı",
      "Medya duvarları",
      "Interaktif ekranlar",
    ],
  },
  {
    icon: "🎭",
    title: "Gala & Ödül Töreni",
    description:
      "Şık ve profesyonel organizasyon çözümleri ile kurumsal galalar",
    features: [
      "Kırmızı halı kurulumu",
      "Özel aydınlatma tasarımı",
      "Sahne dekorasyonu",
      "VIP alanları",
    ],
  },
  {
    icon: "🏟️",
    title: "Miting & Açık Hava Organizasyonu",
    description:
      "Büyük kitlelere yönelik profesyonel açık hava etkinlik çözümleri",
    features: [
      "Yüksek parlaklıklı LED ekranlar",
      "Güçlü ses sistemleri",
      "Jeneratör ve altyapı",
      "Güvenlik önlemleri",
    ],
  },
  {
    icon: "🛣️",
    title: "Roadshow & Fuar Organizasyonu",
    description:
      "Mobil ve esnek organizasyon çözümleri ile marka deneyimi",
    features: [
      "Taşınabilir sahne sistemleri",
      "Hızlı kurulum çözümleri",
      "Marka entegrasyonu",
      "Interaktif standlar",
    ],
  },
  {
    icon: "💡",
    title: "Teknik Altyapı & Destek",
    description:
      "Profesyonel teknik altyapı ve 7/24 teknik destek hizmetleri",
    features: [
      "Jeneratör sistemleri",
      "UPS kesintisiz güç",
      "Acil durum planlaması",
      "7/24 teknik destek",
    ],
  },
];

const USE_CASES = [
  {
    icon: "🎤",
    text: "Konferans ve Seminerler",
    desc: "Profesyonel bilgi paylaşım platformları",
  },
  {
    icon: "🚀",
    text: "Ürün Lansmanları",
    desc: "Yeni ürün ve hizmet tanıtım etkinlikleri",
  },
  {
    icon: "🎭",
    text: "Gala ve Ödül Törenleri",
    desc: "Kurumsal başarı kutlamaları",
  },
  {
    icon: "🏟️",
    text: "Kurumsal Mitingler",
    desc: "Açık hava kurumsal buluşmaları",
  },
  {
    icon: "🛣️",
    text: "Roadshow ve Fuarlar",
    desc: "Mobil tanıtım ve marka deneyimi",
  },
  {
    icon: "💍",
    text: "Kurumsal Sosyal Etkinlikler",
    desc: "Yılbaşı partileri ve kutlamalar",
  },
];

const PLANNING_STEPS = [
  {
    title: "Hedef & format belirleme",
    description:
      "Kurumsal organizasyonun başarısı, hedefin netleştirilmesiyle başlar. Konferans, lansman, gala ya da bayi toplantısı gibi formatlar; içerik, akış ve teknik gereksinimleri belirler. Hedef kitleyi ve ana mesajı netleştirmek, kurumsal etkinlik organizasyonu bütçesini doğru yönetmenizi sağlar. Böylece zaman çizelgesi, konuşmacı planı ve teknik ihtiyaçlar tek bir çatı altında toplanır.",
    checklist: [
      "Etkinlik amacı ve başarı metriği",
      "Format ve içerik akışı",
      "Katılımcı profili",
    ],
  },
  {
    title: "Mekân & kapasite analizi",
    description:
      "Mekân seçimi; kapasite, erişilebilirlik, yükleme alanı ve akustik gibi kriterleri içerir. İstanbul gibi büyük şehirlerde ulaşım ve park planı ekstra önem kazanır. Alanın tavan yüksekliği ve sahne yerleşimi, sahne ve LED ekran kurulumunu doğrudan etkiler. Bu aşamada yangın çıkışları, fuaye alanı ve kayıt noktaları da planlanmalıdır.",
    checklist: [
      "Kapasite ve oturma düzeni",
      "Teknik kurulum alanları",
      "Giriş-çıkış ve güvenlik",
    ],
  },
  {
    title: "Teknik altyapı kontrol listesi",
    description:
      "Sahne, ses, ışık ve LED ekran gereksinimleri kurumsal organizasyonun algısını belirler. İçerik yoğunluğu ve izleme mesafesi LED ekran çözünürlüğünü belirlerken, ses sistemi oturum tipine göre projelendirilir. Güç altyapısı ve yedekleme planı, kesintisiz yayın için kritik rol oynar. Teknik çizimler ve kablolama planları bu noktada tamamlanır.",
    checklist: [
      "Sahne ölçüsü ve görünürlük",
      "Ses-ışık ve LED ekran planı",
      "Güç ve yedek sistemler",
    ],
  },
  {
    title: "Kurulum, prova ve etkinlik günü akışı",
    description:
      "Kurulum planı, ekipmanların sahaya gelişinden prova saatine kadar net bir zaman çizelgesi ister. Provalarda sunum akışı, ışık senaryosu ve sahne geçişleri test edilir. Etkinlik günü; kayıt, sahne yönetimi ve back office koordinasyonu eş zamanlı yürütülür. Profesyonel kurumsal organizasyon firması, bu adımları tek elden yöneterek riski azaltır.",
    checklist: ["Kurulum zaman planı", "Prova ve teknik testler", "Gün akışı"],
  },
  {
    title: "Söküm & raporlama",
    description:
      "Etkinlik bittiğinde söküm ve iade süreci planlı yürütülmelidir. Tüm ekipman kontrol edilerek hasar raporu ve teslim tutanakları hazırlanır. Katılımcı geri bildirimleri, operasyonel raporlarla birlikte değerlendirilir. Bu analiz, bir sonraki kurumsal organizasyon için iyileştirme alanlarını netleştirir.",
    checklist: [
      "Söküm ve teslim planı",
      "Hasar ve envanter kontrolü",
      "Geri bildirim raporu",
    ],
  },
];

/* ================== HERO ================== */
/* ================== HERO (premium like screenshot) ================== */
function Hero({ breadcrumbItems }) {
  const crumb = Array.isArray(breadcrumbItems) ? breadcrumbItems : [];
  const last = crumb[crumb.length - 1]?.name ?? "Kurumsal Organizasyon";

  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      {/* Background image + premium overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={HERO.src}
          alt={HERO.alt}
          fill
          priority
          className="object-cover"
          sizes={HERO.sizes}
          quality={88}
          blurDataURL={BLUR_DATA_URL}
          loading="eager"
        />
        <PremiumGridBg />
        {/* extra cinematic vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/92 via-[#0B1120]/55 to-[#0B1120]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-14 md:pt-16 lg:pt-20 pb-10 md:pb-12">
        {/* breadcrumb line (inside hero) */}
        <div className="flex items-center gap-2 text-white/70 text-sm">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <span className="h-2 w-2 rounded-full bg-blue-400" aria-hidden="true" />
          </span>
          <span className="font-medium">Ana Sayfa</span>
          <span className="text-white/40">/</span>
          <span className="font-semibold text-white/80">{last}</span>
        </div>

        <div className="mt-8 max-w-2xl">
          <h1
            id="hero-title"
            className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-white"
          >
            Büyük Ölçekli Kurumsal{" "}
            <span className="text-white/90">Organizasyonlarda</span>{" "}
            <span className="block text-blue-300">Stratejik Prodüksiyon Partneriniz</span>
          </h1>

          <p className="mt-5 text-base md:text-lg leading-relaxed text-white/75">
            Konferans, lansman, gala ve yüksek katılımlı şirket etkinliklerinde; planlama, risk yönetimi
            ve yedekli teknik altyapı ile uçtan uca operasyon yönetimi.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 transition focus-ring"
            >
              Hemen Teklif Al
            </Link>
            <Link
              href="#hizmetler"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-black/25 px-6 py-3 font-semibold text-white/90 hover:bg-black/35 transition focus-ring"
            >
              Hizmetlerinizi İnceleyin
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {KEYWORD_CHIPS.map((k) => (
              <span
                key={k}
                className="rounded-full border border-white/12 bg-black/30 px-3 py-1 text-xs text-white/75"
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        {/* Trust bar (glass) */}
        <div className="mt-10">
          <GlassCard className="px-4 py-4 md:px-6 md:py-5">
            <div className="grid gap-4 md:grid-cols-4">
              {[
                { t: "Kurumsal Segment", d: "Holding • global marka • kamu • üniversite" },
                { t: "Operasyon Modeli", d: "Planlama → keşif → kurulum → yönetim → rapor" },
                { t: "Teknik Standart", d: "Yedekli güç • yedek kontrol • saha güvenliği" },
                { t: "Coğrafi Kapsam", d: "İstanbul merkezli • Türkiye geneli" },
              ].map((x) => (
                <div key={x.t} className="text-center md:text-left">
                  <div className="text-sm font-black text-white">{x.t}</div>
                  <div className="mt-1 text-sm text-white/70 leading-relaxed">{x.d}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}


/* ================== Üst Bilgilendirme ================== */
/* ================== Üst Bilgilendirme (premium) ================== */
function IntroSection() {
  return (
    <SectionShell variant="soft" id="ne-sunar">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <H2
            kicker="Kurumsal yaklaşım"
            title={
              <>
                Kurumsal Etkinlik <span className="text-blue-700">Organizasyon Şirketleri</span> Ne Sunar?
              </>
            }
            desc="Kurumsal organizasyon; hedef, içerik ve teknik prodüksiyonun aynı masada yönetildiği, ölçülebilir bir operasyon disiplinidir."
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {HERO_FEATURES.map((f) => (
              <Card key={f.t}>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
                  <div>
                    <div className="font-black text-gray-900">{f.t}</div>
                    <div className="mt-2 text-gray-600 leading-relaxed">{f.d}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <PremiumMediaCard
          src="/img/kurumsal/2.webp"
          alt="Kurumsal etkinlik sahnesi ve LED ekran kurulum örneği"
        />
      </div>
    </SectionShell>
  );
}



/* ================== Otorite İçerikleri ================== */
function SelectionSection() {
  return (
    <SectionShell variant="soft" id="secim">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2
            id="secim-baslik"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
          >
            Kurumsal Organizasyon Şirketleri Nasıl Seçilir?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Doğru iş ortağı seçimi, şirket etkinliği planlamasının en kritik
            adımıdır. Kurumsal organizasyon şirketleri, yalnızca teknik ekipman
            sağlayan firmalar değildir; aynı zamanda marka lansmanı veya
            kurumsal toplantı gibi stratejik buluşmalarda içerik akışını,
            sahne kurgusunu ve etkinlik organizasyon süreçlerini yöneten uzman
            ekiplerdir. İstanbul kurumsal organizasyon projelerinde deneyim
            sahibi bir prodüksiyon firması, hem şehir içi lojistik hem de mekan
            yönetimi konusunda hızlı hareket eder ve zaman kaybını azaltır.
          </p>
        </div>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Seçim sürecinde referans kontrolü yapmak, daha önce gerçekleştirilen
            lansman organizasyonu ve büyük ölçekli etkinliklerdeki başarı
            göstergelerini görmek açısından önemlidir. Teknik ekip kapasitesi
            yalnızca sahne kurulumuna değil, aynı zamanda LED ekran, ses ve ışık
            tasarımına hakimiyet göstermelidir. İstanbul ölçekli organizasyon
            deneyimi olan ekipler; trafik, kurulum saatleri, alan güvenliği ve
            belediye izinleri gibi detayları öngörerek operasyon planını daha
            gerçekçi bir takvime oturtur.
          </p>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <Image
              src="/img/kurumsal/2.webp"
              alt="Kurumsal organizasyon şirketi seçimi için referans ve teknik ekip değerlendirmesi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>

          <p>
            Sözleşme ve planlama aşamasında şeffaflık da kritiktir. İş planında
            sorumlulukların netleştirilmesi, hizmet kapsamının açık şekilde
            belirtilmesi ve teslim takvimi üzerinde mutabakat sağlanması,
            kurumsal etkinlik organizasyonu sürecinin sorunsuz ilerlemesine
            yardımcı olur. Referansların yanında, ekipmanın bakım kayıtları ve
            güvenlik sertifikaları gibi belgeler de karar sürecini destekleyen
            somut veri kaynaklarıdır.
          </p>

          <ul className="grid gap-3 md:grid-cols-2 text-gray-800">
            {[
              "Referans projeler ve ölçülebilir başarı metrikleri",
              "Teknik ekip kapasitesi ve uzmanlık sertifikaları",
              "LED, sahne ve ses altyapısında güncel ekipman parkı",
              "İstanbul ölçekli organizasyon deneyimi ve yerel tedarik ağı",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-2 h-2 w-2 rounded-full bg-blue-600"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}


function AdvantagesSectionBlock() {
  return (
    <SectionShell variant="soft" id="avantajlar">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center">
          <h2
            id="avantajlar-baslik"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
          >
            Büyük Organizasyon Şirketleri ile Çalışmanın Avantajları
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kurumsal organizasyon şirketleri arasında ölçek ve deneyim farkı,
            etkinliğin güvenliğini ve görünürlüğünü doğrudan etkiler. Büyük
            organizasyon şirketleri; kapsamlı ekip, güçlü tedarik ağı ve çoklu
            lokasyon yönetimi ile aynı anda birden fazla proje yürütebilir.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
            Kurumsal etkinlik organizasyon şirketleri, yalnızca etkinlik günü
            değil, hazırlık sürecinde de marka ekibinin stratejik partneridir.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Yedekli altyapı", "Kritik sistemlerde yedek planı ve hızlı müdahale prosedürleri"],
              ["Deneyimli saha yönetimi", "Protokol, akış ve katılımcı yönetimi tek merkezden"],
              ["Çoklu tedarik gücü", "Eşzamanlı kurulumlarda ölçeklenebilir ekip ve lojistik"],
              ["Raporlama & ölçüm", "Etkinlik sonrası çıktı, geri bildirim ve iyileştirme"],
            ].map(([t, d]) => (
              <Card key={t}>
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
                  <div>
                    <div className="font-black text-gray-900">{t}</div>
                    <div className="mt-2 text-gray-600 leading-relaxed">{d}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <Image
              src="/img/kurumsal/3.webp"
              alt="Büyük organizasyon şirketleriyle çalışmanın avantajlarını yansıtan sahne kurulumu"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}


function DifferencesSectionBlock() {
  return (
    <SectionShell variant="light" id="farklar">
      <div className="max-w-6xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
        <h2 id="farklar-baslik" className="text-3xl md:text-4xl font-black text-gray-900">
          Büyük Organizasyon Şirketleri ile Küçük Firmalar Arasındaki Fark
        </h2>

        <p>
          Büyük organizasyon şirketleri, etkinlik ölçeği büyüdükçe devreye giren
          karmaşık ihtiyaçları yönetme konusunda daha kapsamlı bir altyapı sunar.
          Ekipman parkı geniştir; aynı anda farklı sahnelerde LED ekran, ses sistemi
          ve ışık kurulumlarını sürdürebilir.
        </p>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <Image
            src="/img/kurumsal/6.webp"
            alt="Büyük organizasyon şirketleri ile küçük firmalar arasındaki ekipman ve operasyon farkları"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>

        <p>
          Yedek sistem yaklaşımı büyük etkinliklerde kritik bir güvenlik katmanıdır.
          Örneğin marka lansmanı sırasında yaşanacak bir ses kesintisi veya görüntü kaybı,
          etkinlik algısını olumsuz etkiler. Büyük organizasyon şirketleri, yedek jeneratör,
          UPS, alternatif mikrofon ve yedek LED kontrol ünitesi gibi önlemlerle kesintisiz
          bir deneyim sağlar.
        </p>

        <p>
          Operasyon ekibi büyüklüğü, etkinlik günündeki koordinasyonu belirler.
          Büyük organizasyon şirketleri, saha yönetimi için ayrı sorumlular, teknik
          yönetmenler ve güvenlik koordinatörleri görevlendirir.
        </p>

        <p>
          Risk yönetimi sadece teknik aksaklıklarla sınırlı değildir; kitle yönetimi,
          güvenlik, sahne akış planı ve protokol düzeni de büyük organizasyonlarda
          profesyonel bir koordinasyon gerektirir.
        </p>
      </div>
    </SectionShell>
  );
}


function TechnicalInfrastructureSectionBlock() {
  return (
    <SectionShell variant="soft" id="teknik-altyapi">
      <div className="max-w-6xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
        <h2 id="teknik-altyapi-baslik" className="text-3xl md:text-4xl font-black text-gray-900">
          Event Organizasyon Şirketleri İçin Teknik Altyapı
        </h2>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <Image
            src="/img/kurumsal/1.webp"
            alt="Event organizasyonlarında sahne, LED ekran ve teknik altyapı düzeni"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>

        <p>
          Event organizasyon şirketleri için teknik altyapı, etkinliğin bütünsel başarısını belirleyen ana faktördür.
          Sahne tasarımı, LED ekran senaryosu, ses sistemi yerleşimi ve ışık programlaması aynı anda planlandığında,
          şirket etkinliği boyunca izleyicinin dikkatini canlı tutan bir akış yaratılır.
        </p>

        <p>
          Lansman organizasyonu ve bayi toplantısı organizasyonu gibi yüksek bilgi aktarımı gerektiren formatlarda,
          konuşmacıların sesi net duyulmalı ve sahne üzerindeki içerik her noktadan görünür olmalıdır.
        </p>

        <p>
          Günümüzde canlı yayın ve hibrit etkinlik altyapısı da kritik bir ihtiyaç haline geldi. Kayıt, streaming,
          sahne içi görüntüleme ve network planı; “tek pakette” düşünülmelidir.
        </p>
      </div>
    </SectionShell>
  );
}


function RentalSectionBlock() {
  return (
    <SectionShell variant="light" id="kiralama">
      <div className="max-w-6xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
        <h2 id="kiralama-baslik" className="text-3xl md:text-4xl font-black text-gray-900">
          Organizasyon Kiralama: Sahne • LED Ekran • Ses • Işık
        </h2>
        <p>
          Kurumsal organizasyon kiralama ihtiyaçları; sahne/LED ekran/ses-ışık sistemlerinin tek bir teknik paket
          içinde projelendirilmesiyle daha sağlıklı yönetilir. Böylece kurulum, prova ve etkinlik günü yönetimi
          tek ekipte toplanır.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Sahne & Podyum", d: "Ölçü, yük, görünürlük, protokol düzeni" },
            { t: "LED Ekran", d: "İçerik/mesafe/pixel pitch optimizasyonu" },
            { t: "Ses & Işık", d: "Akustik + kapsama + atmosfer tasarımı" },
          ].map((x) => (
            <Card key={x.t}>
              <div className="text-lg font-black text-gray-900">{x.t}</div>
              <div className="mt-2 text-gray-600">{x.d}</div>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}


function PlanningGuide() {
  return (
    <SectionShell variant="light" id="planlama">
      <H2
        kicker="Planlama akışı"
        title="Kurumsal Organizasyon Nasıl Planlanır?"
        desc="Aşağıdaki adımlar, kurumsal organizasyon sürecini netleştirir ve operasyonu ölçülebilir hale getirir. Her başlık, sahne kurulumu ve etkinlik deneyimi için kritik kontrol noktalarını içerir."
        center
      />

      <div className="grid gap-6">
        {PLANNING_STEPS.map((step) => (
          <Card key={step.title} className="p-7 md:p-8">
            <h3 className="text-2xl font-black text-gray-900">{step.title}</h3>
            <p className="mt-3 text-gray-700 text-lg leading-relaxed">
              {step.description}
            </p>

            <ul className="mt-5 grid gap-2 sm:grid-cols-2 text-gray-700">
              {step.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}


/* ================== Hizmetler ================== */
function Services() {
  return (
    <SectionShell variant="soft" id="hizmetler">
      <H2
        kicker="Hizmet kapsamı"
        title={
          <>
            Kurumsal <span className="text-blue-700">Hizmetlerimiz</span>
          </>
        }
        desc="Planlama, teknik tasarım, kurulum, operasyon ve destek; tek operasyon akışında yönetilir."
        center
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => {
          const id = `svc-${slugify(service.title)}`;
          return (
            <Card key={id}>
              <div className="text-sm font-semibold text-blue-700">
                Kurumsal Organizasyon
              </div>
              <h3 id={id} className="mt-2 text-xl font-black text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2 text-gray-700">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500 transition focus-ring"
                >
                  Teklif Al
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}


/* ================== Galeri ================== */
const GALLERY_IMAGES = [
  {
    src: "/img/kurumsal/1.webp",
    alt: "Konferans organizasyonu - Profesyonel sahne ve LED ekran kurulumu",
  },
  {
    src: "/img/kurumsal/2.webp",
    alt: "Ürün lansmanı - Etkileyici görsel şov ve sahne tasarımı",
  },
  {
    src: "/img/kurumsal/3.webp",
    alt: "Gala organizasyonu - Şık dekorasyon ve aydınlatma",
  },
  {
    src: "/img/kurumsal/4.webp",
    alt: "Miting organizasyonu - Açık hava ses ve LED ekran sistemleri",
  },
  {
    src: "/img/kurumsal/5.webp",
    alt: "Roadshow organizasyonu - Mobil sahne ve marka standı",
  },
  {
    src: "/img/kurumsal/6.webp",
    alt: "Seminer organizasyonu - Profesyonel ses ve projeksiyon sistemi",
  },
  {
    src: "/img/kurumsal/7.webp",
    alt: "Kurumsal yemek organizasyonu - Özel masa düzeni ve aydınlatma",
  },
  {
    src: "/img/kurumsal/8.webp",
    alt: "Fuar organizasyonu - Interaktif stand ve marka deneyimi",
  },
  {
    src: "/img/kurumsal/9.webp",
    alt: "Ödül töreni - Kırmızı halı ve özel sahne düzeni",
  },
  {
    src: "/img/kurumsal/10.webp",
    alt: "Kurumsal etkinlik - Geniş katılımlı toplantı organizasyonu",
  },
];

function Gallery() {
  return (
    <SectionShell variant="light" id="projeler">
      <H2
        kicker="Referanslar"
        title={
          <>
            Kurumsal <span className="text-blue-700">Projelerimiz</span>
          </>
        }
        desc="Gerçekleştirdiğimiz kurumsal organizasyonlardan örnekler."
        center
      />

      <div className="max-w-7xl mx-auto">
        <Card className="p-0 overflow-hidden">
          <div className="p-6 md:p-7 border-b border-slate-200 bg-white">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="text-sm font-semibold text-slate-600">
                  Görsel seçkisi
                </div>
                <div className="mt-1 text-lg font-black text-gray-900">
                  Sahne • LED • Ses • Işık • Operasyon
                </div>
              </div>
              <Link
                href="/projeler"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-gray-900 hover:bg-slate-50 transition focus-ring"
              >
                Tüm Projeler →
              </Link>
            </div>
          </div>

          <div className="p-4 md:p-6 bg-white">
            <CaseGallery
              images={GALLERY_IMAGES}
              visibleCount={8}
              priorityCount={4}
              layout="featured"
            />
          </div>
        </Card>
      </div>
    </SectionShell>
  );
}


/* ================== Teknik Altyapı ================== */
function Technical() {
  return (
    <SectionShell variant="light" id="teknik">
      <div className="max-w-6xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
        <h2 id="teknik-baslik" className="text-3xl md:text-4xl font-black text-gray-900">
          Kurumsal Etkinliklerde Teknik Prodüksiyon Standardı
        </h2>
        <p>
          Kurumsal etkinlik organizasyonu; sahne görünürlüğü, LED ekran senaryosu, ses/ışık
          tasarımı ve yedekli güç planını birlikte ele aldığında “premium” algı gerçek olur.
        </p>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <Image
            src="/img/kurumsal/4.webp"
            alt="Kurumsal etkinliklerde ses, ışık ve LED ekran prodüksiyonu"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>
        <ul className="grid gap-3 md:grid-cols-2 text-gray-800">
          {[
            "Güç altyapısı: jeneratör + UPS + dağıtım planı",
            "LED ekran: izleme mesafesine uygun pixel pitch",
            "Ses: akustik + kapsama planı + RF kontrol",
            "Işık: sahne atmosferi + konuşmacı aydınlatması",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}


function StatsBand() {
  const stats = [
    { value: "500+", label: "Kurumsal Etkinlik" },
    { value: "50+", label: "Kurumsal Müşteri" },
    { value: "81", label: "İlde Hizmet" },
    { value: "10+ yıl", label: "Deneyim" },
  ];

  return (
    <SectionShell variant="ink" id="guven">
      <H2
        dark
        kicker="Güven & ölçek"
        title="Operasyonel Güç"
        desc="Kurumsal etkinliklerde premium kalite; öngörülebilir süreç ve yedekli teknik altyapıyla oluşur."
        center
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label} dark>
            <div className="text-3xl md:text-4xl font-black text-white">{s.value}</div>
            <div className="mt-2 text-white/70 font-semibold">{s.label}</div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}


/* ================== Kullanım Alanları ================== */
function UseCases() {
  return (
    <SectionShell variant="light" id="organizasyon-turleri">
      <H2
        kicker="Kullanım alanı"
        title={
          <>
            Organizasyon <span className="text-blue-700">Türleri</span>
          </>
        }
        desc="Kurumsal organizasyon çözümlerimizin tercih edildiği başlıca etkinlik türleri."
        center
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {USE_CASES.map((uc) => (
          <Card key={uc.text}>
            <h3 className="text-xl font-black text-gray-900">{uc.text}</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">{uc.desc}</p>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3 font-bold text-white hover:bg-blue-500 transition focus-ring"
        >
          Etkinliğiniz için Özel Çözüm Alın
        </Link>
      </div>
    </SectionShell>
  );
}


/* ================== Bilgi & Rehber ================== */
function Articles() {
  const guideCards = [
    {
      title: "Kurumsal organizasyon şirketi nasıl seçilir?",
      desc: "Referanslar, ekip kapasitesi, yedekli altyapı ve run-of-show disiplini; riskin en hızlı düşürüldüğü kriterlerdir.",
    },
    {
      title: "Büyük organizasyon şirketleri neden tercih edilir?",
      desc: "Çoklu tedarik, hızlı lojistik, güçlü saha yönetimi ve yedek planlar; yüksek görünürlüklü projelerde kesintisiz deneyim sağlar.",
    },
    {
      title: "Organizasyon kiralama bütçesi nasıl netleşir?",
      desc: "Sahne ölçüsü, LED metrajı, ses kapasitesi, kurulum süresi ve teknik ekip planı bütçeyi belirleyen ana değişkenlerdir.",
    },
  ];

  const thumbs = [
    { src: "/img/kurumsal/1.webp", alt: "Konferans sahnesi ve LED ekran kurulumu" },
    { src: "/img/kurumsal/3.webp", alt: "Gala gecesi dekorasyonu ve ışık tasarımı" },
    { src: "/img/kurumsal/5.webp", alt: "Roadshow sahne ve marka deneyimi" },
    { src: "/img/kurumsal/4.webp", alt: "Açık hava etkinlik teknik kurulumu" },
  ];

  return (
    <SectionShell variant="soft" id="rehber">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:items-start">
        <div>
          <H2
            kicker="Karar verme rehberi"
            title={
              <>
                Kurumsal <span className="text-blue-700">İçgörüler</span>
              </>
            }
            desc="Kapsam, teknik keşif ve prova planı net olduğunda; operasyon riski dramatik şekilde düşer."
          />

          <div className="grid gap-6">
            {guideCards.map((g) => (
              <Card key={g.title}>
                <h3 className="text-xl font-black text-gray-900">{g.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{g.desc}</p>
                <div className="mt-5">
                  <Link href="/blog" className="text-blue-700 font-bold hover:underline">
                    İlgili yazıları gör →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-600">Görsel seçki</div>
            <div className="mt-1 text-lg font-black text-gray-900">Kurumsal prodüksiyon örnekleri</div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {thumbs.map((t) => (
                <div key={t.src} className="relative overflow-hidden rounded-2xl border border-slate-200">
                  <div className="relative aspect-[4/3]">
                    <Image src={t.src} alt={t.alt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500 transition focus-ring"
              >
                Rehberli teklif iste
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </SectionShell>
  );
}


/* ================== SSS ================== */
const FAQ_ITEMS = [
  {
    q: "Kurumsal organizasyon şirketleri ne yapar?",
    a: "Kurumsal organizasyon şirketleri, etkinliğin hedef belirleme, içerik akışı, teknik prodüksiyon ve saha operasyonunu yönetir. Lansman organizasyonu, bayi toplantısı organizasyonu veya gala gecesi organizasyonu gibi formatlarda sahne, ses-ışık ve LED ekran gibi bileşenleri tek koordinasyon altında birleştirir.",
  },
  {
    q: "Büyük organizasyon şirketleri neden tercih edilir?",
    a: "Büyük organizasyon şirketleri, geniş ekipman parkı, yedek sistemler ve güçlü operasyon ekipleri sayesinde risk yönetimini daha etkin yapar. Bu yapı, şirket etkinliği ve marka lansmanı gibi yüksek görünürlüklü projelerde kesintisiz bir deneyim sunar.",
  },
  {
    q: "Organizasyon kiralama fiyatları neye göre belirlenir?",
    a: "Organizasyon kiralama fiyatları; sahne ölçüsü, LED ekran metrajı, ses sistemi kapasitesi, kurulum süresi ve teknik personel ihtiyacına göre belirlenir. Mekan koşulları ve etkinlik süresi arttıkça bütçe kalemleri de güncellenir.",
  },
  {
    q: "İstanbul’da kurumsal etkinlik firması seçerken nelere dikkat edilmeli?",
    a: "İstanbul kurumsal organizasyon projelerinde referans kontrolü, teknik ekip kapasitesi, LED/sahne/ses altyapısı ve yerel operasyon deneyimi kritik başlıklardır. Sözleşme kapsamının netleştirilmesi ve risk planının paylaşılması sağlıklı bir seçim süreci sunar.",
  },
  {
    q: "Event organizasyon şirketleri teknik ekipman sağlar mı?",
    a: "Evet. Event organizasyon şirketleri; sahne, LED ekran, ses-ışık, truss ve güç altyapısı gibi teknik ekipmanları sağlayabilir ve kurulumdan operasyona kadar yönetebilir. Doğru ekipman seçimi etkinliğin kalitesini doğrudan artırır.",
  },
];

function FAQ() {
  return (
    <SectionShell variant="soft" id="sss">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 id="faq-baslik" className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
            Sık Sorulan Sorular
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kurumsal organizasyon şirketleriyle çalışmadan önce en çok sorulanlar.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((f) => (
            <details
              key={f.q}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer text-lg font-black text-gray-900">
                {f.q}
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}


function RelatedServices() {
  const services = [
    {
      href: "/cadir-kiralama",
      title: "Çadır Kiralama",
      desc: "Profesyonel çadır sistemleri ve kurulum hizmetleri",
    },
    {
      href: "/podyum-kiralama",
      title: "Podyum Kiralama",
      desc: "Profesyonel sahne platformları ve podyum sistemleri",
    },
    {
      href: "/led-ekran-kiralama",
      title: "LED Ekran Kiralama",
      desc: "Yüksek çözünürlüklü LED ekran ve video wall çözümleri",
    },
    {
      href: "/ses-isik-sistemleri",
      title: "Ses & Işık Sistemleri",
      desc: "Profesyonel ses ve ışık sistemleri kiralama",
    },
  ];

  return (
    <SectionShell variant="light" id="tamamlayici-hizmetler">
      <H2
        kicker="Bütünleşik paket"
        title={
          <>
            Tamamlayıcı <span className="text-blue-700">Hizmetlerimiz</span>
          </>
        }
        desc="Kurumsal organizasyonunuzu tamamlayacak diğer profesyonel etkinlik çözümlerimiz."
        center
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="focus-ring rounded-3xl">
            <Card className="h-full">
              <div className="text-sm font-semibold text-blue-700">Hizmet</div>
              <div className="mt-2 text-xl font-black text-gray-900">{s.title}</div>
              <p className="mt-3 text-gray-600 leading-relaxed">{s.desc}</p>
              <div className="mt-5 text-blue-700 font-bold">İncele →</div>
            </Card>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}


/* ================== CTA ================== */
function CTA() {
  return (
    <SectionShell variant="ink" id="cta">
      <div className="max-w-5xl mx-auto">
        <H2
          dark
          kicker="Teklif & keşif"
          title="Profesyonel Kurumsal Çözümlere Hazır mısınız?"
          desc="Kurumsal etkinliğiniz için en uygun organizasyon modelini birlikte netleştirelim: ücretsiz danışmanlık, teknik keşif ve ölçülebilir bir operasyon planı."
          center
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Card dark className="p-7">
            <div className="text-white font-black text-xl">Hemen teklif isteyin</div>
            <p className="mt-3 text-white/70 leading-relaxed">
              Etkinlik türü, tarih ve kişi sayısına göre hızlı ön bütçe paylaşalım.
            </p>
            <div className="mt-6">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500 transition focus-ring"
              >
                WhatsApp’tan yaz
              </a>
            </div>
          </Card>

          <Card dark className="p-7">
            <div className="text-white font-black text-xl">Kapsamı netleştirelim</div>
            <p className="mt-3 text-white/70 leading-relaxed">
              Sahne/LED/ses-ışık gereksinimini, yükleme planını ve run-of-show akışını birlikte çıkaralım.
            </p>
            <div className="mt-6">
              <Link
                href="/iletisim"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-bold text-white hover:bg-white/10 transition focus-ring"
              >
                İletişim formu
              </Link>
            </div>
          </Card>
        </div>

        <div className="mt-10 text-center text-white/60">
          İstanbul merkezli • Türkiye geneli • Yedekli güç & kontrol • 7/24 operasyon desteği
        </div>
      </div>
    </SectionShell>
  );
}


/* ================== Sayfa Bileşeni ================== */
export default function Page() {
  const baseUrl = ORIGIN;
  const canonical = `${baseUrl}/kurumsal-organizasyon`;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Hizmetler", url: `${baseUrl}/hizmetler` },
    { name: "Kurumsal Organizasyon", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      {/* JSON-LD global graph layout'tan geliyor; sayfada tekrar basmıyoruz */}
      <Hero breadcrumbItems={breadcrumbItems} />
      <IntroSection />
      <SelectionSection />
      <PlanningGuide />
      <Services />
      <Gallery />
      <AdvantagesSectionBlock />
      <Technical />
      <DifferencesSectionBlock />
      <StatsBand />
      <UseCases />
      <TechnicalInfrastructureSectionBlock />
      <Articles />
      <RentalSectionBlock />
      <FAQ />
      <RelatedServices />
      <ServiceBlogLinks
        links={[
          {
            href: "/blog/kurumsal-etkinlik-yonetimi",
            label: "Kurumsal Etkinlik Yönetimi Rehberi",
          },
          {
            href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
            label: "2026 Kurumsal Etkinlik Planlama Rehberi",
          },
        ]}
      />
      <CTA />
    </>
  );
}

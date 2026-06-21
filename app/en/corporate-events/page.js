// app/en/corporate-events/page.js
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { buildFaqSchema } from "@/lib/structuredData/faq";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLdScript from "@/components/seo/JsonLd";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import { buildLanguageAlternates } from "@/lib/seo/alternates";

/* ================== Constants ================== */
export const revalidate = 1800;
const ORIGIN = "https://www.sahneva.com";
const ORGANIZATION_ID = `${ORIGIN}/#org`;
const WEBSITE_ID = `${ORIGIN}/#website`;

const PHONE = "+905453048671";
const WA_TEXT =
  "Hello%2C+I'd+like+to+request+a+quote+for+a+corporate+event.+Event+type%3A+%5Bconference%2Flaunch%2Fgala%5D%2C+Date%3A+%5Bdd.mm.yyyy%5D%2C+Guest+count%3A+%5Bxxx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

// Base64 blur placeholder
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== Dynamic gallery (CaseGallery) ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div
      className="flex justify-center items-center h-64"
      role="status"
      aria-label="Gallery loading"
    >
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
        aria-hidden="true"
      />
      <span className="sr-only">Loading gallery...</span>
    </div>
  ),
});

/* ================== META ================== */
export const metadata = {
  title: {
    absolute: "Corporate Events | Professional Event Production | Sahneva",
  },
  description:
    "Stage, LED screen, sound and lighting production solutions for corporate events in Istanbul. Turnkey rental, professional crew. Request a quote today.",
  alternates: buildLanguageAlternates({
    tr: "/kurumsal-organizasyon",
    en: "/en/corporate-events",
    ru: "/ru/corporate-events",
    canonical: "/en/corporate-events",
    xDefault: "/kurumsal-organizasyon",
  }),
  openGraph: {
    title:
      "Corporate Events | Professional Event Production | Sahneva",
    description:
      "Stage, LED screen, sound and lighting support for corporate events in Turkey. Plan conferences, launches and galas with one technical team.",
    url: `${ORIGIN}/en/corporate-events`,
    type: "website",
    siteName: "Sahneva",
    locale: "en_US",
    images: [
      {
        url: `${ORIGIN}/img/kurumsal/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Conference stage and event setup for corporate events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Corporate Events | Professional Event Production | Sahneva",
    description:
      "Stage, LED screen, sound and lighting support for corporate events in Turkey.",
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

/* ================== Helpers & Constants ================== */
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

/* ================== Premium helpers ================== */
const CORPORATE_DISCIPLINE_DESC =
  "Corporate event management works best when goals, content and technical production are planned together.";

const KEYWORD_CHIPS = [
  "Corporate event companies",
  "Corporate event production",
  "Event management",
  "Large event companies",
  "Corporate event planning",
  "Corporate events",
];

const HERO_FEATURES = [
  { t: "Single-page strategy", d: "Brief → goals, format, success metrics" },
  { t: "Technical scout", d: "Venue survey, power, acoustics, load plan" },
  { t: "Redundant systems", d: "Backup power, control and critical equipment" },
  { t: "Run-of-show", d: "Rehearsal, transitions, stage management" },
];

const HERO_STATS = [
  { t: "Since 2012", d: "Event operations experience" },
  { t: "360°", d: "End-to-end production management" },
  { t: "24/7", d: "On-site and technical support" },
];

const SHOWCASE_IMAGES = [
  { src: "/img/kurumsal/4.webp", alt: "Corporate conference stage with LED screen" },
  { src: "/img/kurumsal/5.webp", alt: "Speaker stage at a corporate event" },
  { src: "/img/kurumsal/6.webp", alt: "Corporate gala stage with lighting design" },
  { src: "/img/kurumsal/3.webp", alt: "Corporate meeting stage and audience area" },
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
        "rounded-3xl border p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1",
        dark
          ? "border-white/10 bg-white/5 backdrop-blur hover:bg-white/7"
          : "border-slate-200 bg-white/90 backdrop-blur hover:shadow-xl",
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
            { k: "Operations", v: "End-to-end" },
            { k: "Infrastructure", v: "Redundant" },
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
          Corporate event management is not just setup — it is planning, risk and visibility management.
        </p>
      </div>
    </div>
  );
}

function PremiumGridBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
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
  alt: "Professional corporate event — conference stage and event setup",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const SERVICES = [
  {
    icon: "🎤",
    title: "Conference & Seminar Production",
    description:
      "Clear sound, visible screens and smooth session flow for conferences",
    features: [
      "Simultaneous interpretation systems",
      "Wireless microphone systems",
      "Recording and live streaming",
      "Acoustic optimisation",
    ],
  },
  {
    icon: "🚀",
    title: "Product Launch Events",
    description:
      "Launch stages with LED content, lighting and brand-focused show flow",
    features: [
      "3D mapping and projection",
      "Custom stage design",
      "Media walls",
      "Interactive screens",
    ],
  },
  {
    icon: "🎭",
    title: "Gala & Awards Ceremonies",
    description:
      "Stage, lighting and sound planning for gala nights and award shows",
    features: [
      "Red carpet installation",
      "Custom lighting design",
      "Stage decoration",
      "VIP areas",
    ],
  },
  {
    icon: "🏟️",
    title: "Rally & Outdoor Events",
    description:
      "Outdoor stage and screen setups for wide audience areas",
    features: [
      "High-brightness LED screens",
      "Powerful sound systems",
      "Generator and power infrastructure",
      "Safety measures",
    ],
  },
  {
    icon: "🛣️",
    title: "Roadshow & Exhibition Production",
    description:
      "Mobile setups for exhibitions, roadshows and brand activations",
    features: [
      "Portable stage systems",
      "Fast-assembly solutions",
      "Brand integration",
      "Interactive stands",
    ],
  },
  {
    icon: "💡",
    title: "Technical Infrastructure & Support",
    description:
      "Power, crew and backup planning for live event operation",
    features: [
      "Generator systems",
      "UPS uninterruptible power",
      "Emergency planning",
      "24/7 technical support",
    ],
  },
];

const USE_CASES = [
  {
    icon: "🎤",
    text: "Conferences and Seminars",
    desc: "Professional knowledge-sharing platforms",
  },
  {
    icon: "🚀",
    text: "Product Launches",
    desc: "New product and service introduction events",
  },
  {
    icon: "🎭",
    text: "Galas and Awards Ceremonies",
    desc: "Corporate achievement celebrations",
  },
  {
    icon: "🏟️",
    text: "Corporate Rallies",
    desc: "Outdoor corporate gatherings",
  },
  {
    icon: "🛣️",
    text: "Roadshows and Exhibitions",
    desc: "Mobile brand promotion and brand experience",
  },
  {
    icon: "💍",
    text: "Corporate Social Events",
    desc: "Year-end parties and celebrations",
  },
];

const PLANNING_STEPS = [
  {
    title: "Goal & format definition",
    description:
      "Start with a clear objective. The event format sets the content, flow and technical needs. Once the audience and key message are clear, the budget becomes easier to manage.",
    checklist: [
      "Event purpose and success metrics",
      "Format and content flow",
      "Attendee profile",
    ],
  },
  {
    title: "Venue & capacity analysis",
    description:
      "Check capacity, access, loading areas and acoustics first. In Istanbul, transport and parking also matter. Ceiling height, stage placement and fire exits shape the technical plan.",
    checklist: [
      "Capacity and seating layout",
      "Technical installation areas",
      "Entry/exit and security",
    ],
  },
  {
    title: "Technical infrastructure checklist",
    description:
      "Stage, sound, lighting and LED screens shape how the event feels. Viewing distance affects LED resolution. Session type affects sound design. Power, backup and cabling plans are finalised here.",
    checklist: [
      "Stage dimensions and sightlines",
      "Sound, lighting and LED screen plan",
      "Power and backup systems",
    ],
  },
  {
    title: "Setup, rehearsal and event-day flow",
    description:
      "The setup plan needs a clear timeline. Rehearsals test presentations, lighting and stage transitions. On event day, registration, stage management and back-office coordination run together.",
    checklist: ["Installation timeline", "Rehearsal and technical tests", "Day-of flow"],
  },
  {
    title: "Strike & reporting",
    description:
      "After the event, the de-rigging plan starts. Equipment is checked and handover notes are prepared. Feedback and operation reports then guide the next event.",
    checklist: [
      "Strike and handover plan",
      "Damage and inventory check",
      "Feedback report",
    ],
  },
];

/* ================== HERO ================== */
function Hero({ breadcrumbItems }) {
  const crumb = Array.isArray(breadcrumbItems) ? breadcrumbItems : [];
  const last = crumb[crumb.length - 1]?.name ?? "Corporate Events";

  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      {/* Background image + premium overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={HERO.src}
          alt={HERO.alt}
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes={HERO.sizes}
          quality={88}
          blurDataURL={BLUR_DATA_URL}
          loading="eager"
        />
        <PremiumGridBg />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/92 via-[#0B1120]/55 to-[#0B1120]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-14 md:pt-16 lg:pt-20 pb-10 md:pb-12">
        {/* Breadcrumb line (inside hero) */}
        <div className="flex items-center gap-2 text-white/70 text-sm">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <span className="h-2 w-2 rounded-full bg-blue-400" aria-hidden="true" />
          </span>
          <span className="font-medium">Home</span>
          <span className="text-white/40">/</span>
          <span className="font-semibold text-white/80">{last}</span>
        </div>

        <div className="mt-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
            <span className="h-2 w-2 rounded-full bg-blue-400" aria-hidden="true" />
            Corporate Production
          </div>
          <h1
            id="hero-title"
            className="mt-5 text-4xl md:text-6xl font-black leading-tight tracking-tight text-white drop-shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
          >
            Your Strategic Production Partner for{" "}
            <span className="text-white/90">Large-Scale</span>{" "}
            <span className="block text-blue-300">Corporate Events</span>
          </h1>

          <p className="mt-5 text-base md:text-lg leading-relaxed text-white/75">
            Plan conferences, launches and galas in Turkey with one technical team. Sahneva coordinates stage, LED screen, sound, lighting, crew and site flow.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-[0_20px_50px_rgba(37,99,235,0.35)] hover:bg-blue-500 transition focus-ring"
            >
              Request a Quote
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-black/25 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 transition focus-ring"
            >
              Explore Our Services
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
                { t: "Corporate Segment", d: "Holding • global brand • public sector • university" },
                { t: "Operations Model", d: "Planning → scout → setup → management → report" },
                { t: "Technical Standard", d: "Redundant power • backup control • site safety" },
                { t: "Geographic Coverage", d: "Istanbul-based • Nationwide Türkiye" },
              ].map((x) => (
                <div key={x.t} className="text-center md:text-left">
                  <div className="text-sm font-black text-white">{x.t}</div>
                  <div className="mt-1 text-sm text-white/70 leading-relaxed">{x.d}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.t}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur"
            >
              <div className="text-2xl font-black">{stat.t}</div>
              <div className="mt-1 text-sm text-white/70">{stat.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickAnswerSection() {
  return (
    <SectionShell variant="soft" id="quick-answer">
      <div className="mx-auto max-w-5xl rounded-2xl border border-blue-100 bg-blue-50 p-6 md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">
          Quick answer
        </p>
        <h2 className="mt-3 text-2xl font-black text-slate-950">
          Corporate event production turns a company brief into a live experience.
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-700">
          The process covers goals, venue, stage, LED screen, sound, lighting,
          guest flow, rehearsal, and event-day operation.
        </p>
        <ul className="mt-5 grid gap-3 text-sm font-semibold text-slate-800 md:grid-cols-4">
          <li className="rounded-xl bg-white px-4 py-3">Brief</li>
          <li className="rounded-xl bg-white px-4 py-3">Technical scout</li>
          <li className="rounded-xl bg-white px-4 py-3">Run of show</li>
          <li className="rounded-xl bg-white px-4 py-3">Field team</li>
        </ul>
      </div>
    </SectionShell>
  );
}


/* ================== Intro Section ================== */
function IntroSection() {
  return (
    <SectionShell variant="soft" id="what-we-offer">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <H2
            kicker="Corporate approach"
            title={
              <>
                What Do <span className="text-blue-700">Corporate Event Companies</span> Offer?
              </>
            }
            desc={CORPORATE_DISCIPLINE_DESC}
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
          alt="Corporate event stage and LED screen installation example"
        />
      </div>
    </SectionShell>
  );
}

function ShowcaseSection() {
  return (
    <SectionShell variant="soft" id="what-we-offer-visuals">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <H2
            kicker="Operational discipline"
            title={
              <>
                Corporate Event{" "}
                <span className="text-blue-700">Production in Action</span>
              </>
            }
            desc={CORPORATE_DISCIPLINE_DESC}
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

        <div className="grid gap-4 sm:grid-cols-2">
          {SHOWCASE_IMAGES.map((image) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.2)]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 50vw, 30vw"
                  quality={85}
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-white/20" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}


/* ================== Selection Section ================== */
function SelectionSection() {
  return (
    <SectionShell variant="soft" id="how-to-choose">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h2
            id="selection-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
          >
            How to Choose a Corporate Event Company?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choosing the right partner is the first major step. The team should manage content flow, stage design and site work. In Istanbul, venue and logistics experience saves time.
          </p>
        </div>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Check references before you decide. Good references show real launch, gala and conference experience. The team should understand stage, LED screen, sound and lighting together.
          </p>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <Image
              src="/img/kurumsal/2.webp"
              alt="Evaluating references and technical teams when choosing a corporate event company"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>

          <p>
            The contract should be clear. Define the service scope, delivery schedule and team responsibilities early. Maintenance records and safety certificates also support the decision.
          </p>

          <ul className="grid gap-3 md:grid-cols-2 text-gray-800">
            {[
              "Reference projects and clear results",
              "Technical team capacity",
              "Current equipment for LED, stage and sound",
              "Istanbul venue and logistics experience",
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
    <SectionShell variant="soft" id="advantages">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center">
          <h2
            id="advantages-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
          >
            Advantages of Working with Large Event Companies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Scale and experience affect safety, speed and visibility. Large event companies can support more than one site with stronger teams.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
            A strong event company supports the brand team before, during and after the event.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Backup planning", "Clear response steps for key systems"],
              ["Site management", "Protocol, flow and guest movement from one centre"],
              ["Scalable logistics", "Teams ready for more than one installation"],
              ["Reporting", "Post-event notes and improvement actions"],
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
              alt="Stage installation reflecting the advantages of working with large event companies"
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
    <SectionShell variant="light" id="differences">
      <div className="max-w-6xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
        <h2 id="differences-heading" className="text-3xl md:text-4xl font-black text-gray-900">
          The Difference Between Large Event Companies and Small Firms
        </h2>

        <p>
          Large event companies have broader infrastructure. They can support LED screen, sound and lighting setups across more than one stage.
        </p>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <Image
            src="/img/kurumsal/6.webp"
            alt="Equipment and operational differences between large event companies and small firms"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>

        <p>
          Backup systems are important at large events. Sound or image problems can affect the guest experience. Generators, UPS units, spare microphones and backup LED control units reduce that risk.
        </p>

        <p>
          Team size affects event-day coordination. Large event companies assign site managers, technical directors and safety coordinators.
        </p>

        <p>
          Risk management is not only technical. Crowd flow, security, stage timing and protocol layout also need coordination.
        </p>
      </div>
    </SectionShell>
  );
}


function TechnicalInfrastructureSectionBlock() {
  return (
    <SectionShell variant="soft" id="technical-infrastructure">
      <div className="max-w-6xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
        <h2 id="technical-infrastructure-heading" className="text-3xl md:text-4xl font-black text-gray-900">
          Technical Infrastructure for Event Production Companies
        </h2>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <Image
            src="/img/kurumsal/1.webp"
            alt="Stage, LED screen and technical infrastructure layout for event productions"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>

        <p>
          Technical infrastructure shapes the event experience. Stage design, LED content, sound and lighting should be planned together. This keeps the audience focused.
        </p>

        <p>
          Launches and dealer meetings carry a lot of information. Speakers must be clear. Stage content must be visible from every seat.
        </p>

        <p>
          Hybrid event needs are also common. Recording, streaming, stage display and network planning should work as one package.
        </p>
      </div>
    </SectionShell>
  );
}


function RentalSectionBlock() {
  return (
    <SectionShell variant="light" id="rental">
      <div className="max-w-6xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
        <h2 id="rental-heading" className="text-3xl md:text-4xl font-black text-gray-900">
          Event Rental: Stage • LED Screen • Sound • Lighting
        </h2>
        <p>
          Event rental works best as one technical package. Stage, LED screen, sound and lighting should be planned together. This keeps setup, rehearsal and live operation under one team.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Stage & Podium", d: "Dimensions, load, sightlines, protocol layout" },
            { t: "LED Screen", d: "Content/distance/pixel pitch optimisation" },
            { t: "Sound & Lighting", d: "Acoustic + coverage + atmosphere design" },
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
    <SectionShell variant="light" id="planning">
      <H2
        kicker="Planning flow"
        title="How to Plan a Corporate Event?"
        desc="These steps make the event process easier to plan and review."
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


/* ================== Services ================== */
function Services() {
  return (
    <SectionShell variant="soft" id="services">
      <H2
        kicker="Service scope"
        title={
          <>
            Our Corporate <span className="text-blue-700">Services</span>
          </>
        }
        desc="Planning, technical design, installation, operations and support — all managed within a single operational flow."
        center
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => {
          const id = `svc-${slugify(service.title)}`;
          return (
            <Card key={id}>
              <div className="text-sm font-semibold text-blue-700">
                Corporate Events
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
                  Request a Quote
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}


/* ================== Gallery ================== */
const GALLERY_IMAGES = [
  {
    src: "/img/kurumsal/1.webp",
    alt: "Conference event — professional stage and LED screen installation",
  },
  {
    src: "/img/kurumsal/2.webp",
    alt: "Product launch — striking visual show and stage design",
  },
  {
    src: "/img/kurumsal/3.webp",
    alt: "Gala event — elegant decoration and lighting design",
  },
  {
    src: "/img/kurumsal/4.webp",
    alt: "Rally event — outdoor sound and LED screen systems",
  },
  {
    src: "/img/kurumsal/5.webp",
    alt: "Roadshow — mobile stage and brand stand",
  },
  {
    src: "/img/kurumsal/6.webp",
    alt: "Seminar — professional sound and projection system",
  },
  {
    src: "/img/kurumsal/7.webp",
    alt: "Corporate dinner — custom table layout and lighting",
  },
  {
    src: "/img/kurumsal/8.webp",
    alt: "Exhibition — interactive stand and brand experience",
  },
  {
    src: "/img/kurumsal/9.webp",
    alt: "Awards ceremony — red carpet and custom stage setup",
  },
  {
    src: "/img/kurumsal/10.webp",
    alt: "Corporate event — large-attendance meeting production",
  },
];

function Gallery() {
  return (
    <SectionShell variant="light" id="projects">
      <H2
        kicker="References"
        title={
          <>
            Our Corporate <span className="text-blue-700">Projects</span>
          </>
        }
        desc="Selected highlights from our corporate event productions."
        center
      />

      <div className="max-w-7xl mx-auto">
        <Card className="p-0 overflow-hidden">
          <div className="p-6 md:p-7 border-b border-slate-200 bg-white">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="text-sm font-semibold text-slate-600">
                  Visual selection
                </div>
                <div className="mt-1 text-lg font-black text-gray-900">
                  Stage • LED • Sound • Lighting • Operations
                </div>
              </div>
              <Link
                href="/en/projects"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-gray-900 hover:bg-slate-50 transition focus-ring"
              >
                All Projects →
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


/* ================== Technical ================== */
function Technical() {
  return (
    <SectionShell variant="light" id="technical">
      <div className="max-w-6xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
        <h2 id="technical-heading" className="text-3xl md:text-4xl font-black text-gray-900">
          Technical Production Standards for Corporate Events
        </h2>
        <p>
          Corporate events feel stronger when stage visibility, LED content, sound, lighting and power planning work together.
        </p>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <Image
            src="/img/kurumsal/4.webp"
            alt="Sound, lighting and LED screen production for corporate events"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>
        <ul className="grid gap-3 md:grid-cols-2 text-gray-800">
          {[
            "Power infrastructure: generator + UPS + distribution plan",
            "LED screen: pixel pitch matched to viewing distance",
            "Sound: acoustic + coverage plan + RF management",
            "Lighting: stage atmosphere + speaker illumination",
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
    { value: "700+", label: "Successful Projects" },
    { value: "50+", label: "Corporate Clients" },
    { value: "81", label: "Cities Served" },
    { value: "10+ yrs", label: "Experience" },
  ];

  return (
    <SectionShell variant="ink" id="trust">
      <H2
        dark
        kicker="Trust & scale"
        title="Operational Strength"
        desc="Strong events need a clear process, backup planning and an experienced field team."
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


/* ================== Use Cases ================== */
function UseCases() {
  return (
    <SectionShell variant="light" id="event-types">
      <H2
        kicker="Use cases"
        title={
          <>
            Event <span className="text-blue-700">Types</span>
          </>
        }
        desc="The primary event formats for which our corporate event solutions are chosen."
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
          Get a Custom Solution for Your Event
        </Link>
      </div>
    </SectionShell>
  );
}


/* ================== Articles ================== */
function Articles() {
  const guideCards = [
    {
      title: "How to choose a corporate event company?",
      desc: "References, team capacity, backup planning and run-of-show discipline reduce risk quickly.",
    },
    {
      title: "Why are large event companies preferred?",
      desc: "Fast logistics, strong site management and backup plans support high-visibility projects.",
    },
    {
      title: "How is an event rental budget determined?",
      desc: "Stage size, LED area, sound capacity, setup time and crew size shape the budget.",
    },
  ];

  const thumbs = [
    { src: "/img/kurumsal/1.webp", alt: "Conference stage and LED screen installation" },
    { src: "/img/kurumsal/3.webp", alt: "Gala evening decoration and lighting design" },
    { src: "/img/kurumsal/5.webp", alt: "Roadshow stage and brand experience" },
    { src: "/img/kurumsal/4.webp", alt: "Outdoor event technical installation" },
  ];

  return (
    <SectionShell variant="soft" id="insights">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:items-start">
        <div>
          <H2
            kicker="Decision-making guide"
            title={
              <>
                Corporate <span className="text-blue-700">Insights</span>
              </>
            }
            desc="Clear scope, site checks and rehearsal planning reduce operational risk."
          />

          <div className="grid gap-6">
            {guideCards.map((g) => (
              <Card key={g.title}>
                <h3 className="text-xl font-black text-gray-900">{g.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{g.desc}</p>
                <div className="mt-5">
                  <Link href="/en/blog" className="text-blue-700 font-bold hover:underline">
                    View related articles →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card className="p-6">
            <div className="text-sm font-semibold text-slate-600">Visual selection</div>
            <div className="mt-1 text-lg font-black text-gray-900">Corporate production examples</div>

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
                Request a guided quote
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </SectionShell>
  );
}


/* ================== FAQ ================== */
const FAQ_ITEMS = [
  {
    question: "What do corporate event companies do?",
    answer:
      "Corporate event companies manage goals, content flow, technical production and site operations. For launches, dealer meetings and galas, they bring stage, sound, lighting and LED screens into one plan.",
  },
  {
    question: "Why are large event companies preferred?",
    answer:
      "Large event companies reduce risk with strong equipment, backup systems and field teams. This matters most on launches and other visible events.",
  },
  {
    question: "How are event rental prices determined?",
    answer:
      "Prices depend on stage size, LED screen area, sound capacity, setup time and crew size. Venue conditions and event duration can also change the budget.",
  },
  {
    question: "What should I look for when choosing a corporate event company in Istanbul?",
    answer:
      "Look at references, technical team capacity and local operations experience. The company should also explain the contract scope and risk plan clearly.",
  },
  {
    question: "Do event production companies provide technical equipment?",
    answer:
      "Yes. Event production companies can supply stage, LED screen, sound, lighting, truss and power. They can also manage setup and live operation.",
  },
];


/* ================== JSON-LD ================== */
function CorporateEventsJsonLd() {
  const pageUrl = `${ORIGIN}/en/corporate-events`;
  const pageDescription = metadata?.description || "";
  const webPageId = `${pageUrl}#webpage`;

  const provider = { "@id": ORGANIZATION_ID };

  const baseService = {
    "@type": "Service",
    name: "Corporate Events Production",
    description: pageDescription,
    serviceType: "Corporate Event Production",
    provider,
    areaServed: { "@type": "Country", name: "Turkey" },
    url: pageUrl,
    mainEntityOfPage: { "@id": webPageId },
  };

  const serviceNode = {
    ...baseService,
    "@id": `${pageUrl}#service`,
  };

  const webPageNode = {
    "@type": "WebPage",
    "@id": webPageId,
    name: "Corporate Events | Professional Event Production | Sahneva",
    description: pageDescription,
    url: pageUrl,
    inLanguage: "en-US",
    mainEntity: { "@id": serviceNode["@id"] },
    isPartOf: { "@id": WEBSITE_ID },
    publisher: provider,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${ORIGIN}/img/kurumsal/hero.webp`,
      width: 1200,
      height: 630,
    },
  };

  const faqNode = buildFaqSchema?.(FAQ_ITEMS) || null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode,
      serviceNode,
      ...(faqNode ? [faqNode] : []),
    ],
  };

  return <JsonLdScript id="ld-json-corporate-events" data={jsonLd} />;
}

function FAQ() {
  return (
    <SectionShell variant="soft" id="faq">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The most common questions before working with corporate event companies.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((f) => (
            <details
              key={f.question}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer text-lg font-black text-gray-900">
                {f.question}
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{f.answer}</p>
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
      href: "/en/tent-rental",
      title: "Tent Rental",
      desc: "Professional tent systems and installation services",
    },
    {
      href: "/en/stage-rental",
      title: "Stage Rental",
      desc: "Professional stage platforms and podium systems",
    },
    {
      href: "/en/led-screen-rental",
      title: "LED Screen Rental",
      desc: "High-resolution LED screen and video wall solutions",
    },
    {
      href: "/en/sound-light-rental",
      title: "Sound & Lighting Systems",
      desc: "Professional sound and lighting system rental",
    },
  ];

  return (
    <SectionShell variant="light" id="complementary-services">
      <H2
        kicker="Integrated package"
        title={
          <>
            Our Complementary <span className="text-blue-700">Services</span>
          </>
        }
        desc="Other professional event solutions to complete your corporate event."
        center
      />

      <p className="mx-auto mb-8 max-w-3xl text-center leading-relaxed text-gray-600">
        If your team is planning from abroad, our{" "}
        <Link href="/en/event-production-company-turkey" className="font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900">
          event production partner in Turkey
        </Link>{" "}
        page explains how Sahneva supports venues, logistics, stage, LED screen, sound, lighting, truss and on-site technical coordination.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="focus-ring rounded-3xl">
            <Card className="h-full">
              <div className="text-sm font-semibold text-blue-700">Service</div>
              <div className="mt-2 text-xl font-black text-gray-900">{s.title}</div>
              <p className="mt-3 text-gray-600 leading-relaxed">{s.desc}</p>
              <div className="mt-5 text-blue-700 font-bold">Explore →</div>
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
          kicker="Quote & discovery"
          title="Ready for Professional Corporate Solutions?"
          desc="Share your event brief. We will define the technical scope, site needs and operation plan."
          center
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Card dark className="p-7">
            <div className="text-white font-black text-xl">Request a quote now</div>
            <p className="mt-3 text-white/70 leading-relaxed">
              Share your event type, date and guest count for a quick preliminary budget.
            </p>
            <div className="mt-6">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500 transition focus-ring"
              >
                Message us on WhatsApp
              </a>
            </div>
          </Card>

          <Card dark className="p-7">
            <div className="text-white font-black text-xl">Let's define the scope</div>
            <p className="mt-3 text-white/70 leading-relaxed">
              We'll work out stage, LED, sound and lighting requirements together with a loading plan and run-of-show flow.
            </p>
            <div className="mt-6">
              <Link
                href="/en/contact"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-bold text-white hover:bg-white/10 transition focus-ring"
              >
                Contact form
              </Link>
            </div>
          </Card>
        </div>

        <div className="mt-10 text-center text-white/60">
          Istanbul-based • Nationwide Türkiye • Redundant power &amp; control • 24/7 operations support
        </div>
      </div>
    </SectionShell>
  );
}


/* ================== Page Component ================== */
export default function Page() {
  const baseUrl = ORIGIN;
  const canonical = `${baseUrl}/en/corporate-events`;
  const breadcrumbItems = [
    { name: "Home", url: `${baseUrl}/en` },
    { name: "Services", url: `${baseUrl}/en/services` },
    { name: "Corporate Events", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <CorporateEventsJsonLd />
      <Hero breadcrumbItems={breadcrumbItems} />
      <QuickAnswerSection />
      <IntroSection />
      <ShowcaseSection />
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
        title="Guides on this topic"
        links={[
          {
            href: "/en/blog/corporate-event-management",
            label: "Corporate Event Management Guide",
          },
          {
            href: "/en/blog/corporate-event-planning-guide-2026",
            label: "2026 Corporate Event Planning Guide",
          },
        ]}
      />
      <CTA />
    </>
  );
}

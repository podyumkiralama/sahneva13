// app/en/mice-turkey/page.js
import Image from "next/image";
import Link from "next/link";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLdScript from "@/components/seo/JsonLd";

export const revalidate = 86400;

const ORIGIN = "https://www.sahneva.com";
const PHONE = "+905453048671";
const WA_TEXT =
  "Hello%2C+we+are+planning+a+MICE+event+in+Turkey+and+need+technical+production+support.+Event+type%3A+%5BMeeting%2FIncentive%2FConference%2FExhibition%5D%2C+City%3A+%5BIstanbul%2FAntalya%5D%2C+Date%3A+%5Bdd.mm.yyyy%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export const metadata = {
  title: {
    absolute: "MICE Turkey — Meetings, Incentives, Conferences | Sahneva",
  },
  description:
    "Professional MICE event technical production in Turkey. Stage, LED screen, sound and lighting for meetings, incentive events, conferences and exhibitions in Istanbul, Antalya and across Türkiye.",
  alternates: buildLanguageAlternates({
    en: "/en/mice-turkey",
    canonical: "/en/mice-turkey",
    xDefault: "/en/mice-turkey",
  }),
  openGraph: {
    title:
      "MICE Turkey — Technical Production for Meetings, Incentives, Conferences & Exhibitions | Sahneva",
    description:
      "Stage, LED screen, sound and lighting for MICE events in Turkey. One technical partner for meetings, incentive events, international congresses and exhibitions in Istanbul, Antalya and nationwide.",
    url: `${ORIGIN}/en/mice-turkey`,
    type: "website",
    siteName: "Sahneva",
    locale: "en_US",
    images: [
      {
        url: `${ORIGIN}/img/kurumsal/hero.webp`,
        width: 1200,
        height: 630,
        alt: "MICE event technical production in Turkey — conference stage and LED screen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MICE Turkey — Technical Production for MICE Events | Sahneva",
    description:
      "Stage, LED screen, sound and lighting for MICE events in Istanbul, Antalya and across Türkiye.",
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
    },
  },
};

/* ===== Shared UI Components ===== */
function SectionShell({ variant = "light", id, children }) {
  const variants = {
    light: "bg-white",
    soft: "bg-gradient-to-b from-white to-slate-50/70",
    ink: "bg-[#0B1120] text-white",
  };
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${variants[variant]} py-16 md:py-20`}
    >
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
      {kicker && (
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
      )}
      <h2
        className={[
          "mt-5 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight",
          dark ? "text-white" : "text-gray-900",
        ].join(" ")}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={[
            "mt-4 text-lg md:text-xl leading-relaxed",
            dark ? "text-white/70" : "text-gray-600",
          ].join(" ")}
        >
          {desc}
        </p>
      )}
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

/* ===== Hero ===== */
const HERO_STATS = [
  { t: "700+ Events", d: "Technical production experience" },
  { t: "English-first", d: "Project coordination & on-site team" },
  { t: "Istanbul · Antalya", d: "& nationwide Türkiye logistics" },
];

const KEYWORD_CHIPS = [
  "MICE Turkey",
  "MICE Istanbul",
  "MICE Antalya",
  "Congress production Turkey",
  "Conference AV Turkey",
  "Incentive event Turkey",
  "Exhibition production Turkey",
];

function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="mice-hero-title">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/img/kurumsal/hero.webp"
          alt="MICE event production in Turkey — conference stage and LED screen setup"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
          quality={88}
          blurDataURL={BLUR_DATA_URL}
          loading="eager"
        />
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/92 via-[#0B1120]/55 to-[#0B1120]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-14 md:pt-16 lg:pt-20 pb-10 md:pb-12">
        <div className="flex items-center gap-2 text-white/70 text-sm">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <span className="h-2 w-2 rounded-full bg-blue-400" aria-hidden="true" />
          </span>
          <Link href="/en" className="font-medium hover:text-white/90 transition">Home</Link>
          <span className="text-white/40">/</span>
          <span className="font-semibold text-white/80">MICE Turkey</span>
        </div>

        <div className="mt-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            <span className="h-2 w-2 rounded-full bg-blue-400" aria-hidden="true" />
            Technical production partner in Türkiye
          </div>

          <h1
            id="mice-hero-title"
            className="mt-5 text-4xl md:text-6xl font-black leading-tight tracking-tight text-white drop-shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
          >
            MICE Turkey —{" "}
            <span className="text-blue-300">Technical Production</span>
            {" "}for Meetings, Incentives, Conferences & Exhibitions
          </h1>

          <p className="mt-5 text-base md:text-lg leading-relaxed text-white/75">
            Sahneva is Turkey's technical production partner for MICE events. We provide stage, LED screen, sound, lighting, truss and tent support for international organizers, PCOs and DMCs planning meetings, incentive events, congresses and exhibitions in Istanbul, Antalya and across Türkiye.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              href={WHATSAPP}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-[0_20px_50px_rgba(37,99,235,0.35)] hover:bg-blue-500 transition"
            >
              Send Event Brief
            </Link>
            <Link
              href="#mice-categories"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-black/25 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 transition"
            >
              Our MICE Services
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

        <GlassCard className="mt-10 px-4 py-4 md:px-6 md:py-5">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { t: "MICE Segment", d: "International PCO · DMC · Corporate travel teams" },
              { t: "Technical scope", d: "Stage · LED screen · Sound · Lighting · Truss · Tent" },
              { t: "Communication", d: "English-speaking project manager on every project" },
              { t: "Coverage", d: "Istanbul · Antalya · Izmir · Ankara · Bodrum · Nationwide" },
            ].map((x) => (
              <div key={x.t} className="text-center md:text-left">
                <div className="text-sm font-black text-white">{x.t}</div>
                <div className="mt-1 text-sm text-white/70 leading-relaxed">{x.d}</div>
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {HERO_STATS.map((s) => (
            <div
              key={s.t}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur"
            >
              <div className="text-2xl font-black">{s.t}</div>
              <div className="mt-1 text-sm text-white/70">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== What is MICE ===== */
function WhatIsMice() {
  return (
    <SectionShell variant="soft" id="what-is-mice">
      <div className="mx-auto max-w-5xl rounded-2xl border border-blue-100 bg-blue-50 p-6 md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">
          Quick answer
        </p>
        <h2 className="mt-3 text-2xl font-black text-slate-950">
          What is MICE? And where does technical production fit?
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-700">
          MICE stands for Meetings, Incentives, Conferences and Exhibitions — the four main formats of business and group travel events. Technical production (stage, LED screen, sound, lighting) is the physical backbone that makes each MICE event visible, audible and memorable.
        </p>
        <ul className="mt-5 grid gap-3 text-sm font-semibold text-slate-800 md:grid-cols-4">
          <li className="rounded-xl bg-white px-4 py-3">
            <span className="block text-blue-700 text-xs uppercase tracking-wide mb-1">M</span>
            Meetings
          </li>
          <li className="rounded-xl bg-white px-4 py-3">
            <span className="block text-blue-700 text-xs uppercase tracking-wide mb-1">I</span>
            Incentives
          </li>
          <li className="rounded-xl bg-white px-4 py-3">
            <span className="block text-blue-700 text-xs uppercase tracking-wide mb-1">C</span>
            Conferences
          </li>
          <li className="rounded-xl bg-white px-4 py-3">
            <span className="block text-blue-700 text-xs uppercase tracking-wide mb-1">E</span>
            Exhibitions
          </li>
        </ul>
      </div>
    </SectionShell>
  );
}

/* ===== MICE Categories ===== */
const MICE_CATEGORIES = [
  {
    letter: "M",
    label: "Meetings",
    title: "Corporate Meetings Production in Turkey",
    desc: "Board meetings, leadership summits, dealer meetings, annual general meetings and internal company conferences. These events require clear sound, visible screens for presentations and professional lighting that matches the brand tone.",
    features: [
      "Presentation screens and confidence monitors",
      "Wireless microphone and speech amplification systems",
      "Branded stage backdrops and podiums",
      "Meeting room lighting and atmosphere design",
      "Simultaneous interpretation systems",
      "Recording and hybrid live-stream setup",
    ],
    image: "/img/kurumsal/premium/konferans-podium.webp",
    imageAlt: "Corporate meeting podium and conference stage setup in Turkey",
  },
  {
    letter: "I",
    label: "Incentives",
    title: "Incentive Event Production in Turkey",
    desc: "Incentive travel reward events, gala dinners, VIP experiences and brand celebration evenings. Turkey's hotels, coastal venues and historic spaces make it a top incentive destination. Technical production shapes the wow factor.",
    features: [
      "Gala dinner stage and lighting design",
      "Outdoor LED screens for evening shows",
      "Custom stage builds for awards moments",
      "Moving light shows and colour washes",
      "Live entertainment production support",
      "Beach and resort venue technical setup",
    ],
    image: "/img/kurumsal/premium/kurumsal-organizasyon-gala-isik-kanit.webp",
    imageAlt: "Incentive gala event lighting design in Turkey — moving light show",
  },
  {
    letter: "C",
    label: "Conferences & Congresses",
    title: "Conference & Congress Production in Turkey",
    desc: "International scientific congresses, trade conferences, academic symposiums and large-format summit events. Istanbul and Antalya host hundreds of international conferences each year. We provide full technical production for plenary halls, breakout rooms and exhibition areas.",
    features: [
      "Plenary stage and main hall LED screen",
      "Multi-room sound and AV distribution",
      "Simultaneous interpretation (SI) systems",
      "Speaker management and confidence monitors",
      "Breakout room production packages",
      "Live streaming and recording suites",
    ],
    image: "/img/kurumsal/premium/konferans-led-ekran.webp",
    imageAlt: "International conference production in Turkey — plenary stage and LED screen wall",
  },
  {
    letter: "E",
    label: "Exhibitions",
    title: "Exhibition & Trade Fair Production in Turkey",
    desc: "International trade fairs, product showcases, brand exhibitions and hosted-buyer events. Exhibition technical production focuses on booth audio-visuals, LED display walls, demonstration stages and ambient lighting that drives footfall.",
    features: [
      "Exhibition hall LED video walls",
      "Demonstration stage and product spotlight",
      "Brand activation sound systems",
      "Truss and rigging for banners and screens",
      "Modular display lighting solutions",
      "Large-tent and outdoor pavilion production",
    ],
    image: "/img/kurumsal/premium/panel-led-sahne.webp",
    imageAlt: "Exhibition panel LED stage production in Turkey — trade fair display wall",
  },
];

function MiceCategories() {
  return (
    <SectionShell variant="light" id="mice-categories">
      <H2
        kicker="The four MICE formats"
        title={
          <>
            MICE Event Technical Production —{" "}
            <span className="text-blue-700">M · I · C · E</span>
          </>
        }
        desc="Each MICE format has distinct technical requirements. Sahneva covers all four as a single local production partner in Turkey."
        center
      />

      <div className="space-y-16">
        {MICE_CATEGORIES.map((cat, i) => (
          <div
            key={cat.letter}
            className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div>
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-black text-white shadow-lg">
                  {cat.letter}
                </span>
                <span className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                  {cat.label}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                {cat.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">{cat.desc}</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {cat.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href={WHATSAPP}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500 transition text-sm"
                >
                  Request a Quote for {cat.label}
                </Link>
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
              <Image
                src={cat.image}
                alt={cat.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                blurDataURL={BLUR_DATA_URL}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ===== Why Turkey ===== */
function WhyTurkey() {
  return (
    <SectionShell variant="ink" id="why-turkey-mice">
      <div className="max-w-6xl mx-auto">
        <H2
          dark
          center
          kicker="Turkey as a MICE destination"
          title="Why International Organizers Choose Turkey for MICE Events"
          desc="Turkey ranked among the world's top 10 MICE destinations — and its venue infrastructure, travel connections and technical production capacity continue to grow."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            ["International congress capacity", "Istanbul and Antalya host hundreds of international congresses annually, with world-class congress centres, five-star hotels and open-air venues."],
            ["Direct flight connectivity", "Istanbul Airport connects to 300+ destinations — making it one of Europe's most accessible MICE hubs for multi-nationality delegate groups."],
            ["Cost-competitive production", "High-quality AV and staging at significantly lower cost than Western Europe — without compromising technical standards or crew quality."],
            ["Year-round event calendar", "Turkey's Mediterranean coast makes Antalya a preferred destination from spring through autumn; Istanbul is active year-round."],
            ["Venue variety", "Historic palaces, luxury resort hotels, convention centres, cruise terminals and open-air amphitheatres offer exceptional MICE backdrop options."],
            ["Government MICE support", "Turkey Meetings and Events industry has active government and tourism board support, making customs clearance and visa processing smoother for international delegates."],
          ].map(([t, d]) => (
            <Card key={t} dark>
              <div className="font-black text-white mb-2">{t}</div>
              <p className="text-white/70 text-sm leading-relaxed">{d}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* ===== MICE Cities ===== */
const CITIES = [
  {
    name: "Istanbul",
    desc: "Turkey's largest MICE hub. Historic venues, five-star conference hotels, ICC Istanbul, Raffles, Hilton Bosphorus and cruise terminal event spaces. Sahneva supports MICE events across all major Istanbul venue types.",
    events: ["International congresses", "Pharma and medical meetings", "Financial sector events", "Gala dinners with Bosphorus views"],
  },
  {
    name: "Antalya",
    desc: "Turkey's #1 resort MICE destination. Kemer, Belek and Side resort hotels host large-scale incentive groups and congresses year-round. Strong natural light and outdoor production options.",
    events: ["Incentive travel programs", "International congresses", "Pharmaceutical meetings", "Beach gala productions"],
  },
  {
    name: "Izmir",
    desc: "Western Turkey's exhibition and fair centre. Izmir Fuar Alanı and Aegean resort venues host trade fairs and regional congresses. Close proximity to Ephesus adds cultural options for incentive programmes.",
    events: ["Trade fairs and exhibitions", "Regional congresses", "Incentive cultural events", "Brand activation stands"],
  },
  {
    name: "Ankara",
    desc: "Turkey's capital for government, diplomatic and academic MICE events. Protocol events, UN agency meetings, academic symposiums and public sector conferences are the core formats.",
    events: ["Government and diplomatic meetings", "Academic congresses", "International summit events", "Protocol gala ceremonies"],
  },
];

function MiceCities() {
  return (
    <SectionShell variant="soft" id="mice-cities">
      <H2
        kicker="Key MICE destinations"
        title={
          <>
            Turkey's Top{" "}
            <span className="text-blue-700">MICE Cities</span>
          </>
        }
        desc="Sahneva provides local technical production support across Turkey's four main MICE destinations — with Istanbul and Antalya as primary hubs."
        center
      />

      <div className="grid md:grid-cols-2 gap-6">
        {CITIES.map((city) => (
          <Card key={city.name} className="p-7">
            <h3 className="text-xl font-black text-gray-900 mb-3">{city.name}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{city.desc}</p>
            <div className="border-t border-slate-100 pt-4">
              <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">
                MICE formats active in {city.name}
              </div>
              <ul className="space-y-1">
                {city.events.map((e) => (
                  <li key={e} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

/* ===== Technical Production ===== */
function TechnicalScope() {
  return (
    <SectionShell variant="light" id="technical-scope">
      <div className="max-w-6xl mx-auto">
        <H2
          kicker="Production scope"
          title="What Sahneva Provides for MICE Events in Turkey"
          desc="Our technical scope can cover the full event infrastructure or selected departments, depending on your existing contracts and what your project needs locally."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Stage & Podium",
              d: "Main stages, speaker podiums, panel tables, press conference risers, award ceremony stages and custom runway builds for product launches.",
              href: "/en/stage-rental",
            },
            {
              t: "LED Screens & Video Walls",
              d: "Indoor and outdoor LED screens, rear-projection screens, confidence monitors and multi-screen content distribution for plenary halls and exhibition areas.",
              href: "/en/led-screen-rental",
            },
            {
              t: "Sound Systems",
              d: "Line-array PA for large halls, directional speakers for breakout rooms, wireless microphones, SI receiver distribution and ambient background sound.",
              href: "/en/sound-light-rental",
            },
            {
              t: "Lighting Design",
              d: "Plenary stage lighting, colour-wash for gala events, spotlighting for awards, exhibit booth lighting and outdoor LED wash for evening events.",
              href: "/en/sound-light-rental",
            },
            {
              t: "Truss & Rigging",
              d: "Structural truss systems for hanging LED screens, lighting rigs, banner frames and stage architecture across ballrooms and open-air venues.",
              href: "/en/truss-rental",
            },
            {
              t: "Event Tents",
              d: "Large-span pagoda and structure tents for outdoor MICE events — product shows, branded pavilions, networking areas and gala dinner marquees.",
              href: "/en/tent-rental",
            },
          ].map((s) => (
            <Link key={s.href} href={s.href} className="rounded-3xl focus-visible:outline-blue-600">
              <Card className="h-full">
                <div className="text-sm font-semibold text-blue-700 mb-1">MICE production</div>
                <div className="text-xl font-black text-gray-900">{s.t}</div>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{s.d}</p>
                <div className="mt-5 text-blue-700 font-bold text-sm">Learn more →</div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* ===== Working with PCOs and DMCs ===== */
function PcoDmc() {
  return (
    <SectionShell variant="soft" id="pco-dmc">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <H2
              kicker="For PCOs and DMCs"
              title={
                <>
                  We Work Directly with{" "}
                  <span className="text-blue-700">PCOs, DMCs & Agency Partners</span>
                </>
              }
              desc="If you are a Professional Conference Organiser, Destination Management Company or international event agency bringing a project to Turkey, Sahneva can become your local technical production arm."
            />

            <div className="space-y-4">
              {[
                ["RFP-ready briefing process", "Send us your technical rider or production brief. We return a clear scope and budget within 24 hours for standard MICE formats."],
                ["Site inspection support", "For venue recce visits, our team can join site inspections to assess power, loading access, ceiling heights, acoustics and technical suitability."],
                ["Sub-contractor flexibility", "We can work as a sub-contractor to your agency or act as the primary technical vendor — whichever fits your project structure."],
                ["Dedicated project manager", "Every MICE project has a named English-speaking project manager who coordinates from first brief to post-event handover notes."],
              ].map(([t, d]) => (
                <Card key={t} className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
                    <div>
                      <div className="font-black text-gray-900">{t}</div>
                      <p className="mt-1 text-gray-600 text-sm leading-relaxed">{d}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <Image
              src="/img/kurumsal/premium/kurumsal-organizasyon-reji-kontrol-kanit.webp"
              alt="Technical control room and production management for MICE events in Turkey"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
              blurDataURL={BLUR_DATA_URL}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <GlassCard className="p-4">
                <div className="text-white font-black text-sm">International project coordination</div>
                <p className="mt-1 text-white/70 text-xs leading-relaxed">
                  English communication · RFP in 24h · Named project manager · Site inspection available
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ===== Stats ===== */
function StatsBand() {
  return (
    <SectionShell variant="ink" id="mice-stats">
      <H2
        dark center
        kicker="Track record"
        title="MICE Production Scale"
        desc="Sahneva has supported corporate meetings, international conferences, incentive galas and exhibitions across Turkey since 2012."
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { v: "700+", l: "Event projects completed" },
          { v: "10+ yrs", l: "MICE production experience" },
          { v: "81 cities", l: "Coverage across Turkey" },
          { v: "24h", l: "Quote turnaround for MICE briefs" },
        ].map((s) => (
          <Card key={s.l} dark>
            <div className="text-3xl md:text-4xl font-black text-white">{s.v}</div>
            <div className="mt-2 text-white/70 font-semibold text-sm">{s.l}</div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

/* ===== Photo Gallery ===== */
const GALLERY_IMAGES = [
  { src: "/img/kurumsal/premium/kurumsal-organizasyon-konferans-led-kanit.webp", alt: "Conference stage with LED screen wall — MICE production in Turkey" },
  { src: "/img/kurumsal/premium/kurumsal-organizasyon-konferans-podyum-kanit.webp", alt: "Conference podium and speaker stage — corporate congress production" },
  { src: "/img/kurumsal/premium/kurumsal-organizasyon-p19-led-kanit.webp", alt: "P19 LED screen panel setup — indoor MICE event production" },
  { src: "/img/kurumsal/premium/kurumsal-organizasyon-panel-led-kanit.webp", alt: "Panel LED screen configuration — conference and congress production" },
  { src: "/img/kurumsal/premium/kurumsal-organizasyon-panel-led-format.webp", alt: "Panel LED stage format — corporate event production Turkey" },
  { src: "/img/kurumsal/premium/salon-isik-kurulumu.webp", alt: "Ballroom lighting installation for corporate event in Turkey" },
  { src: "/img/kurumsal/konferans.webp", alt: "International conference production in Turkey — full stage and AV setup" },
  { src: "/img/kurumsal/bayi-toplantisi.webp", alt: "Dealer meeting stage setup — corporate partner event in Turkey" },
  { src: "/img/kurumsal/lansman.webp", alt: "Product launch stage with LED screen — brand event production Turkey" },
];

function PhotoGallery() {
  return (
    <SectionShell variant="soft" id="gallery">
      <H2
        kicker="Production references"
        title={<>MICE Event Production in Turkey — <span className="text-blue-700">Our Work</span></>}
        desc="Selected technical production references from corporate meetings, conferences, incentive galas and exhibitions across Turkey."
        center
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {GALLERY_IMAGES.map((img, i) => (
          <div
            key={img.src}
            className={`relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm group ${i === 0 ? "col-span-2 md:col-span-2 aspect-[16/8]" : "aspect-[4/3]"}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
              quality={85}
              blurDataURL={BLUR_DATA_URL}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/en/projects"
          className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-gray-900 hover:bg-slate-50 transition text-sm"
        >
          View All Projects →
        </Link>
      </div>
    </SectionShell>
  );
}

/* ===== FAQ ===== */
const FAQ_ITEMS = [
  {
    q: "What is MICE and why does Turkey attract international MICE events?",
    a: "MICE stands for Meetings, Incentives, Conferences and Exhibitions. Turkey attracts MICE events because of its central location between Europe and Asia, direct flight connectivity, competitive costs, world-class congress hotels in Istanbul and Antalya, and a strong government tourism support framework.",
  },
  {
    q: "Can Sahneva support a PCO or DMC as a local technical sub-contractor in Turkey?",
    a: "Yes. We regularly work as a sub-contractor to PCOs and DMCs, providing the local stage, LED screen, sound, lighting, truss and tent production scope while the international agency retains client-facing project management. We can align with your technical rider and work within your production timeline.",
  },
  {
    q: "Do you provide AV production for congresses and conferences in Istanbul?",
    a: "Yes. We provide full AV technical production for international congresses and conferences in Istanbul, including plenary hall LED screens, main stage, sound systems, simultaneous interpretation support, breakout room packages, speaker systems and recording setups.",
  },
  {
    q: "Can you support incentive events in Antalya resort hotels?",
    a: "Yes. Antalya is one of our most active production regions. We support incentive events, gala dinners and award ceremonies in Kemer, Belek, Side and central Antalya across international resort hotel properties.",
  },
  {
    q: "How does the RFP process work for MICE events?",
    a: "Share your event brief — event type (M/I/C/E), city, venue, date, guest count, and any technical expectations. We review and return a clear production scope with budget indicators within 24 hours for standard MICE formats. Detailed technical proposals follow after a venue survey or confirmed site inspection.",
  },
  {
    q: "Do you support multi-day congresses with multiple rooms?",
    a: "Yes. Multi-room congress packages cover the plenary hall, breakout rooms, registration area screens and exhibition halls as one coordinated production. We assign a technical team per room and a technical director for overall coordination.",
  },
  {
    q: "Can your team join a venue site inspection before the event?",
    a: "Yes. We can join site inspection visits with your PCO or agency team. Our production team assesses power supply, loading access, ceiling grid height, room acoustics, screen sightlines and any venue-specific technical constraints.",
  },
  {
    q: "Do you support simultaneous interpretation for international congresses?",
    a: "Yes. We can provide interpreter booths, SI receiver units for delegates, transmitters and technical operator support for multilingual congress sessions.",
  },
];

function Faq() {
  return (
    <SectionShell variant="soft" id="faq">
      <div className="max-w-6xl mx-auto">
        <H2
          center
          kicker="FAQ for MICE planners"
          title="Frequently Asked Questions"
          desc="Answers for PCOs, DMCs and international event teams evaluating Turkey as a MICE destination."
        />
        <div className="space-y-3">
          {FAQ_ITEMS.map((f) => (
            <details
              key={f.q}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer text-base font-black text-gray-900">
                {f.q}
              </summary>
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* ===== Related Services ===== */
function RelatedServices() {
  return (
    <SectionShell variant="light" id="related">
      <H2
        center
        kicker="Related pages"
        title="Explore Our Services"
        desc="All the technical production departments that support MICE events in Turkey."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { href: "/en/event-production-company-turkey", t: "Event Production Partner in Turkey", d: "Overview page for international companies planning events in Turkey" },
          { href: "/en/event-production-antalya", t: "Event Production Antalya", d: "Full technical production for resort-hotel events in Belek, Kemer and Side" },
          { href: "/en/corporate-events", t: "Corporate Events", d: "Conference, launch, gala and brand event production" },
          { href: "/en/blog/how-to-organize-corporate-event-in-turkey", t: "Corporate Event Guide: Turkey", d: "Step-by-step planning guide for foreign companies organizing events in Turkey" },
          { href: "/en/stage-rental", t: "Stage Rental", d: "Professional stage and podium systems" },
          { href: "/en/led-screen-rental", t: "LED Screen Rental", d: "Indoor and outdoor LED screens and video walls" },
        ].map((s) => (
          <Link key={s.href} href={s.href}>
            <Card className="h-full">
              <div className="text-sm font-semibold text-blue-700">Service</div>
              <div className="mt-2 text-lg font-black text-gray-900">{s.t}</div>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.d}</p>
              <div className="mt-4 text-blue-700 font-bold text-sm">Explore →</div>
            </Card>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}

/* ===== CTA ===== */
function Cta() {
  return (
    <SectionShell variant="ink" id="cta">
      <div className="max-w-5xl mx-auto">
        <H2
          dark center
          kicker="Send your brief"
          title="Planning a MICE Event in Turkey?"
          desc="Share your event type, city, date and expected attendance. We'll return with a clear technical production scope within 24 hours."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Card dark className="p-7">
            <div className="text-white font-black text-xl">WhatsApp brief (fastest)</div>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Message us your MICE event type, city, dates and estimated guest count. We respond same business day.
            </p>
            <div className="mt-6">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500 transition"
              >
                Send Event Brief on WhatsApp
              </a>
            </div>
          </Card>
          <Card dark className="p-7">
            <div className="text-white font-black text-xl">Contact form</div>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Use our contact form to send a detailed brief. A dedicated English-speaking project manager will respond within one business day.
            </p>
            <div className="mt-6">
              <Link
                href="/en/contact"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-bold text-white hover:bg-white/10 transition"
              >
                Go to contact form
              </Link>
            </div>
          </Card>
        </div>
        <div className="mt-8 text-center text-white/50 text-sm">
          Istanbul · Antalya · Izmir · Ankara · Bodrum · Nationwide Türkiye · English project coordination · RFP in 24h
        </div>
      </div>
    </SectionShell>
  );
}

/* ===== JSON-LD ===== */
function MiceTurkeyJsonLd() {
  const pageUrl = `${ORIGIN}/en/mice-turkey`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "MICE Turkey — Technical Production for Meetings, Incentives, Conferences & Exhibitions | Sahneva",
        description:
          "Professional MICE event technical production in Turkey. Stage, LED screen, sound and lighting for meetings, incentive events, conferences and exhibitions in Istanbul, Antalya and across Türkiye.",
        inLanguage: "en-US",
        isPartOf: { "@id": `${ORIGIN}/#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        mainEntity: { "@id": `${pageUrl}#service` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/en` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${ORIGIN}/en/services` },
          { "@type": "ListItem", position: 3, name: "MICE Turkey", item: pageUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "MICE Event Technical Production in Turkey",
        serviceType: "MICE Event Production",
        description:
          "Technical production services for MICE events in Turkey — stage, LED screen, sound, lighting, truss and tent for meetings, incentive events, conferences and exhibitions.",
        provider: { "@id": `${ORIGIN}/#org` },
        areaServed: [
          { "@type": "Country", name: "Turkey" },
          { "@type": "City", name: "Istanbul" },
          { "@type": "City", name: "Antalya" },
          { "@type": "City", name: "Izmir" },
          { "@type": "City", name: "Ankara" },
        ],
        audience: {
          "@type": "Audience",
          audienceType:
            "PCOs, DMCs, international event agencies and corporate teams planning MICE events in Turkey",
        },
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: FAQ_ITEMS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return <JsonLdScript id="ld-json-mice-turkey" data={jsonLd} />;
}

/* ===== Page ===== */
export default function MiceTurkeyPage() {
  const breadcrumbItems = [
    { name: "Home", url: `${ORIGIN}/en` },
    { name: "Services", url: `${ORIGIN}/en/services` },
    { name: "MICE Turkey", url: `${ORIGIN}/en/mice-turkey` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={ORIGIN} />
      <MiceTurkeyJsonLd />
      <Hero />
      <WhatIsMice />
      <MiceCategories />
      <WhyTurkey />
      <MiceCities />
      <TechnicalScope />
      <PcoDmc />
      <StatsBand />
      <PhotoGallery />
      <Faq />
      <RelatedServices />
      <Cta />
    </>
  );
}

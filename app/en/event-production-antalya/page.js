// app/en/event-production-antalya/page.js
import Image from "next/image";
import Link from "next/link";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLdScript from "@/components/seo/JsonLd";

export const revalidate = 86400;

const ORIGIN = "https://www.sahneva.com";
const PHONE = "+905453048671";
const WA_TEXT =
  "Hello%2C+we+are+planning+an+event+in+Antalya+and+need+technical+production+support.+Event+type%3A+%5BConference%2FGala%2FIncentive%5D%2C+Venue%3A+%5Bhotel+name%5D%2C+Date%3A+%5Bdd.mm.yyyy%5D%2C+Guests%3A+%5Bxxx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export const metadata = {
  title: {
    absolute:
      "Event Production Antalya — Stage, LED Screen, Sound & Lighting for International Events | Sahneva",
  },
  description:
    "Technical event production in Antalya for international companies, PCOs and DMCs. Stage, LED screen, sound and lighting for conferences, incentive events and galas in Antalya's resort hotels and congress venues.",
  alternates: buildLanguageAlternates({
    en: "/en/event-production-antalya",
    canonical: "/en/event-production-antalya",
    xDefault: "/en/event-production-antalya",
  }),
  openGraph: {
    title:
      "Event Production Antalya — Stage, LED Screen, Sound & Lighting | Sahneva",
    description:
      "Stage, LED screen, sound and lighting for conferences, incentive events and galas in Antalya. Local technical production partner for international organizers, PCOs and DMCs.",
    url: `${ORIGIN}/en/event-production-antalya`,
    type: "website",
    siteName: "Sahneva",
    locale: "en_US",
    images: [
      {
        url: `${ORIGIN}/img/kurumsal/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Event production in Antalya — conference stage and LED screen setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Production Antalya — Technical Production for International Events | Sahneva",
    description:
      "Stage, LED screen, sound and lighting for conferences, incentive events and galas in Antalya.",
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

/* ===== UI Components ===== */
function SectionShell({ variant = "light", id, children }) {
  const variants = {
    light: "bg-white",
    soft: "bg-gradient-to-b from-white to-slate-50/70",
    ink: "bg-[#0B1120] text-white",
  };
  return (
    <section id={id} className={`relative overflow-hidden ${variants[variant]} py-16 md:py-20`}>
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
        <p className={["mt-4 text-lg md:text-xl leading-relaxed", dark ? "text-white/70" : "text-gray-600"].join(" ")}>
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
    <div className={"rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,0.35)] " + className}>
      {children}
    </div>
  );
}

/* ===== Hero ===== */
const KEYWORD_CHIPS = [
  "Event production Antalya",
  "AV rental Antalya",
  "Conference production Antalya",
  "Incentive event Antalya",
  "Stage rental Antalya",
  "LED screen Antalya",
  "Gala production Antalya",
];

function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="antalya-hero-title">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/img/kurumsal/hero.webp"
          alt="Event production in Antalya — conference stage and LED screen at a resort hotel"
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
          <span className="font-semibold text-white/80">Event Production Antalya</span>
        </div>

        <div className="mt-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            <span className="h-2 w-2 rounded-full bg-blue-400" aria-hidden="true" />
            Local technical production partner · Antalya
          </div>

          <h1
            id="antalya-hero-title"
            className="mt-5 text-4xl md:text-6xl font-black leading-tight tracking-tight text-white drop-shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
          >
            Event Production{" "}
            <span className="text-blue-300">Antalya</span>{" "}
            — Stage, AV & Technical Support for International Events
          </h1>

          <p className="mt-5 text-base md:text-lg leading-relaxed text-white/75">
            Sahneva provides complete technical event production in Antalya for international companies, PCOs and DMCs. Stage, LED screen, sound, lighting, truss and tent — one local partner for conferences, incentive galas, product launches and exhibitions at Antalya's resort and congress venues.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              href={WHATSAPP}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-[0_20px_50px_rgba(37,99,235,0.35)] hover:bg-blue-500 transition"
            >
              Send Antalya Event Brief
            </Link>
            <Link
              href="#antalya-venues"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-black/25 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 transition"
            >
              Antalya Venue Areas
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {KEYWORD_CHIPS.map((k) => (
              <span key={k} className="rounded-full border border-white/12 bg-black/30 px-3 py-1 text-xs text-white/75">
                {k}
              </span>
            ))}
          </div>
        </div>

        <GlassCard className="mt-10 px-4 py-4 md:px-6 md:py-5">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { t: "Antalya coverage", d: "Kemer · Belek · Side · Alanya · City centre" },
              { t: "Technical scope", d: "Stage · LED screen · Sound · Lighting · Truss · Tent" },
              { t: "Coordination", d: "English-speaking project manager on every project" },
              { t: "Nationwide reach", d: "Istanbul-based · logistics to all Turkish cities" },
            ].map((x) => (
              <div key={x.t} className="text-center md:text-left">
                <div className="text-sm font-black text-white">{x.t}</div>
                <div className="mt-1 text-sm text-white/70 leading-relaxed">{x.d}</div>
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { t: "Antalya expertise", d: "Resort hotels, congress venues, open-air locations" },
            { t: "English-first", d: "All project communication and on-site coordination" },
            { t: "24h quote", d: "Technical proposal for standard Antalya event formats" },
          ].map((s) => (
            <div key={s.t} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur">
              <div className="text-lg font-black">{s.t}</div>
              <div className="mt-1 text-sm text-white/70">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Why Antalya ===== */
function WhyAntalya() {
  return (
    <SectionShell variant="soft" id="why-antalya">
      <div className="mx-auto max-w-5xl rounded-2xl border border-blue-100 bg-blue-50 p-6 md:p-8">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">
          Antalya for international events
        </p>
        <h2 className="mt-3 text-2xl font-black text-slate-950">
          Why Antalya is Turkey's #1 international event destination
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-700">
          Antalya hosts more international conferences and incentive travel events than any other Turkish city outside Istanbul. Its combination of five-star resort infrastructure, direct European flights, Mediterranean climate and world-class congress facilities makes it the default destination for European corporate groups, pharmaceutical congresses, dealer meetings and incentive programs.
        </p>
        <ul className="mt-5 grid gap-3 text-sm font-semibold text-slate-800 md:grid-cols-4">
          <li className="rounded-xl bg-white px-4 py-3">Year-round flights from 50+ countries</li>
          <li className="rounded-xl bg-white px-4 py-3">200+ five-star resort and congress hotels</li>
          <li className="rounded-xl bg-white px-4 py-3">Mediterranean climate (300+ sun days)</li>
          <li className="rounded-xl bg-white px-4 py-3">Competitive all-inclusive event pricing</li>
        </ul>
      </div>
    </SectionShell>
  );
}

/* ===== Venue Areas ===== */
const VENUE_AREAS = [
  {
    name: "Belek",
    desc: "Turkey's premium golf and resort event destination. Home to Titanic, Regnum, Rixos, Calista, Cornelia and other ultra-luxury resort hotels with extensive congress facilities, ballrooms up to 3,000 pax and dedicated outdoor event spaces.",
    formats: ["International conferences (500–3,000 pax)", "Pharmaceutical and medical congresses", "Incentive travel programs", "Dealer and channel partner meetings", "Gala dinner productions"],
  },
  {
    name: "Kemer & Çamyuva",
    desc: "Forested coastal resort strip with boutique and large-format hotels. Popular for smaller corporate retreats, incentive groups (50–300 pax) and brand experience events combining outdoor activities with evening gala productions.",
    formats: ["Incentive group events (50–300 pax)", "Corporate team-building events", "Brand experience productions", "Evening gala dinners", "Open-air show stages"],
  },
  {
    name: "Side & Manavgat",
    desc: "Eastern Antalya's event hub with historic Roman ruins as backdrop options. Large resort hotels with strong congress capacity — particularly popular for educational conferences, medical meetings and tour operator events.",
    formats: ["Educational and academic conferences", "Medical and pharma meetings", "Tour operator events", "Large incentive groups", "Open-air cultural productions"],
  },
  {
    name: "Alanya",
    desc: "Fast-growing MICE destination with newer hotel properties and competitive pricing. Growing appeal for regional corporate events, Eastern European company groups and budget-conscious international meetings.",
    formats: ["Regional corporate meetings", "Eastern European company events", "Sales conferences", "Product launches", "Incentive gala evenings"],
  },
  {
    name: "Antalya City Centre",
    desc: "The city's congress infrastructure includes Antalya Congress Centre (one of Turkey's largest), business hotels and the Marina. Used for large-scale international congresses, trade fairs, automotive events and public-sector events.",
    formats: ["Large international congresses", "Trade fairs and exhibitions", "Automotive and tech launches", "Government and diplomatic events", "Arena-scale productions"],
  },
  {
    name: "Open-Air & Unique Venues",
    desc: "Antalya's natural and historical locations — Roman amphitheatres, hilltop terraces, beach clubs and yacht harbours — provide unique options for incentive programme highlights, outdoor galas and brand activation events.",
    formats: ["Historic venue events", "Beach gala productions", "Rooftop brand activations", "Boat and marina events", "Amphitheatre productions"],
  },
];

function AntalyaVenues() {
  return (
    <SectionShell variant="light" id="antalya-venues">
      <H2
        kicker="Antalya event zones"
        title={
          <>
            Antalya Venue Areas —{" "}
            <span className="text-blue-700">Where We Work</span>
          </>
        }
        desc="Sahneva supports technical event production across all of Antalya's main resort and congress zones — from Belek's luxury hotel ballrooms to Side's coastal congress venues and the city's international congress centre."
        center
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {VENUE_AREAS.map((area) => (
          <Card key={area.name} className="p-6">
            <h3 className="text-xl font-black text-gray-900 mb-3">{area.name}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{area.desc}</p>
            <div className="border-t border-slate-100 pt-3">
              <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2">
                Event formats
              </div>
              <ul className="space-y-1">
                {area.formats.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
                    {f}
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

/* ===== Event Formats ===== */
function EventFormats() {
  return (
    <SectionShell variant="soft" id="event-formats">
      <H2
        kicker="What we support"
        title={
          <>
            Event Formats We Produce{" "}
            <span className="text-blue-700">in Antalya</span>
          </>
        }
        desc="From pharmaceutical congresses and corporate dealer meetings to incentive galas and trade exhibitions — these are Antalya's most common international event formats."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: "🏥",
            title: "Pharmaceutical & Medical Congresses",
            desc: "Multi-day scientific congresses with plenary halls, breakout symposiums, poster areas and satellite meeting rooms. Simultaneous interpretation and recording as standard.",
            services: ["Plenary stage + LED screen", "SI interpretation systems", "Multi-room AV distribution", "Recording and streaming"],
          },
          {
            icon: "🚗",
            title: "Corporate Dealer & Channel Partner Meetings",
            desc: "Annual or regional dealer meetings for automotive, tech and FMCG companies. Branded stage builds, product reveal moments and motivational show elements.",
            services: ["Branded stage + backdrop", "Product reveal LED screens", "Presentation and speaker systems", "Gala dinner production"],
          },
          {
            icon: "🎁",
            title: "Incentive Travel Galas & Award Ceremonies",
            desc: "High-impact gala evenings, awards nights and VIP dinners for incentive travel programs. Lighting design, stage presence and sound atmosphere create the premium feel.",
            services: ["Gala stage + moving lights", "Award ceremony production", "LED screen content", "Ambient sound design"],
          },
          {
            icon: "🚀",
            title: "Product Launches",
            desc: "New model, new product and brand campaign launch events in resort hotel ballrooms or outdoor event spaces. Show-style staging, LED content walls and reveal moments.",
            services: ["Custom stage build", "LED wall content delivery", "Reveal lighting design", "Sound and show flow"],
          },
          {
            icon: "🌐",
            title: "International Sales Conferences",
            desc: "Company-wide or regional sales conferences bringing 100–2,000 delegates together for strategy presentations, training and team motivation events.",
            services: ["Main stage + confidence monitors", "Breakout room packages", "Wireless microphones", "Live stream and recording"],
          },
          {
            icon: "🏟️",
            title: "Outdoor & Beach Events",
            desc: "Beach gala nights, open-air concerts and outdoor brand activations at resort beach clubs, marina terraces and poolside event spaces with dedicated outdoor AV setups.",
            services: ["Outdoor LED screens", "Weatherproof sound systems", "Generator power supply", "Stage and tent structures"],
          },
        ].map((f) => (
          <Card key={f.title}>
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-lg font-black text-gray-900 mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{f.desc}</p>
            <ul className="space-y-1">
              {f.services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-xs text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

/* ===== Technical Services ===== */
function TechnicalServices() {
  return (
    <SectionShell variant="light" id="technical-services">
      <div className="max-w-6xl mx-auto">
        <H2
          kicker="Production scope in Antalya"
          title="What We Provide for Events in Antalya"
          desc="Our full technical scope for Antalya events — everything below can be managed through one local production team."
        />
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            {[
              ["Stage & Podium Systems", "Main stage builds, speaker podiums, panel tables, catwalk runways and product reveal platforms. Sized and configured for ballroom, congress hall or outdoor use."],
              ["LED Screens & Video Walls", "Indoor and outdoor LED screens sized for each ballroom or congress hall. Pixel pitch selection, content routing, image processing and technical operator included."],
              ["Sound Systems", "Line-array PA for large plenary halls, directional speaker systems for breakout rooms, wireless microphone management and ambient background sound design."],
              ["Lighting Design", "Stage wash and spotlight for speakers, moving lights for gala atmosphere, LED flood for outdoor events and branding colour-wash for brand moments."],
              ["Truss & Rigging", "Overhead truss structures for LED screen suspension, lighting rig, banner frames and ceiling-mount elements in hotel ballrooms and congress halls."],
              ["Event Tents", "Large-span tent structures for outdoor gala dinners, beach events and product exhibition areas not covered by the hotel's existing structures."],
            ].map(([t, d]) => (
              <div key={t} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-white">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
                <div>
                  <div className="font-black text-gray-900">{t}</div>
                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <Image
                src="/img/kurumsal/premium/kurumsal-organizasyon-konferans-led-kanit.webp"
                alt="Conference stage and LED screen setup at an Antalya resort hotel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                blurDataURL={BLUR_DATA_URL}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <Image
                src="/img/kurumsal/premium/kurumsal-organizasyon-gala-isik-kanit.webp"
                alt="Gala dinner production at an Antalya resort — moving light and stage design"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                blurDataURL={BLUR_DATA_URL}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: "/img/kurumsal/bayi-toplantisi.webp", alt: "Dealer meeting stage setup at Antalya resort hotel ballroom" },
                { src: "/img/kurumsal/premium/konferans-podium.webp", alt: "Conference podium and speaker stage at Antalya congress venue" },
              ].map((img) => (
                <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="25vw"
                    quality={82}
                    blurDataURL={BLUR_DATA_URL}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

/* ===== How We Work ===== */
function HowWeWork() {
  return (
    <SectionShell variant="ink" id="how-we-work">
      <H2
        dark center
        kicker="Working process"
        title="How Sahneva Supports Your Antalya Event"
        desc="From the first brief to post-event handover — the process for international teams planning events in Antalya."
      />
      <div className="max-w-4xl mx-auto grid gap-4">
        {[
          ["1. Send your event brief", "Share event type, hotel name or venue, date, expected attendance and any known technical requirements. WhatsApp or contact form both work. We respond same business day."],
          ["2. Technical proposal within 24h", "We prepare a clear technical scope for stage, LED screen, sound, lighting, truss and tent based on your brief. The proposal includes indicative budgets for each technical department."],
          ["3. Site inspection (if needed)", "For new venues or complex productions, we join a site inspection with your team. We survey power supply, loading access, room dimensions and any technical constraints specific to the Antalya property."],
          ["4. Production planning & coordination", "We coordinate directly with the hotel technical department and your international team. Delivery timeline, setup schedule, crew roles and run-of-show are aligned in advance."],
          ["5. Installation, rehearsal & event day", "Our Antalya technical crew handles installation, sound checks, screen tests and rehearsal. On event day, the team remains fully on-site for the entire event duration."],
          ["6. Strike & handover", "Post-event, the technical team manages de-rigging, equipment load-out and full venue handover — with handover notes provided to your team if required."],
        ].map(([title, desc]) => (
          <Card key={title} dark className="p-6">
            <div className="font-black text-white mb-2">{title}</div>
            <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

/* ===== Stats ===== */
function Stats() {
  return (
    <SectionShell variant="soft" id="stats">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          { v: "700+", l: "Events produced across Turkey" },
          { v: "2012", l: "Operating since" },
          { v: "English", l: "All project communication" },
          { v: "24h", l: "Technical quote turnaround" },
        ].map((s) => (
          <Card key={s.l} className="text-center p-6">
            <div className="text-3xl font-black text-blue-700">{s.v}</div>
            <div className="mt-2 text-gray-600 text-sm font-semibold">{s.l}</div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

/* ===== Gallery ===== */
const ANTALYA_GALLERY = [
  { src: "/img/kurumsal/lansman.webp", alt: "Product launch stage setup at Antalya resort hotel" },
  { src: "/img/kurumsal/premium/konferans-led-ekran.webp", alt: "Conference LED screen wall at Antalya congress venue" },
  { src: "/img/kurumsal/premium/kurumsal-organizasyon-p19-led-kanit.webp", alt: "P19 LED screen production at Antalya event" },
  { src: "/img/kurumsal/premium/salon-isik-kurulumu.webp", alt: "Ballroom lighting installation for Antalya gala event" },
  { src: "/img/kurumsal/premium/panel-led-sahne.webp", alt: "Panel LED stage at Antalya corporate event" },
  { src: "/img/kurumsal/konferans.webp", alt: "International conference production at Antalya resort" },
  { src: "/img/kurumsal/premium/kurumsal-organizasyon-konferans-podyum-kanit.webp", alt: "Conference podium production at Antalya congress venue" },
  { src: "/img/kurumsal/7.webp", alt: "Corporate dinner and gala event setup in Antalya" },
];

function AntalyaGallery() {
  return (
    <SectionShell variant="soft" id="antalya-gallery">
      <H2
        kicker="Production references"
        title={<>Antalya Events — <span className="text-blue-700">Our Work</span></>}
        desc="Technical production from conferences, incentive galas, product launches and corporate meetings at Antalya resort hotels and congress venues."
        center
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {ANTALYA_GALLERY.map((img, i) => (
          <div
            key={img.src}
            className={`relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm group ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              quality={84}
              blurDataURL={BLUR_DATA_URL}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

/* ===== FAQ ===== */
const FAQ_ITEMS = [
  {
    q: "Can Sahneva provide technical event production in Antalya?",
    a: "Yes. Sahneva operates in Antalya as part of its nationwide Turkey event production coverage. We support conferences, incentive galas, product launches and exhibitions at Antalya's resort hotels, congress hotels and open-air venues — including Belek, Kemer, Side, Alanya and the city centre.",
  },
  {
    q: "Which Antalya hotels and venues do you work in?",
    a: "We work in all major Antalya resort and congress hotels, including properties in Belek (Rixos, Regnum, Titanic, Calista, Cornelia), Kemer, Side and Alanya zones, as well as Antalya Congress Centre and city-centre conference hotels. If you have a specific property, we can confirm coverage and any venue-specific technical notes.",
  },
  {
    q: "Do you support pharmaceutical and medical congresses in Antalya?",
    a: "Yes. Medical and pharmaceutical congresses are among our most common Antalya event formats. We provide plenary stage and LED screen, simultaneous interpretation systems, breakout room AV packages, recording suites and multi-room speaker systems for multi-day congress programmes.",
  },
  {
    q: "Can you produce incentive gala evenings and award ceremonies in Antalya?",
    a: "Yes. Gala dinners and incentive award ceremonies are a core Antalya production type for us. We provide gala stage, moving light design, colour-wash atmosphere, LED screen content, award moment spotlighting and full sound design for evening event programmes.",
  },
  {
    q: "Do you support outdoor and beach events in Antalya?",
    a: "Yes. Beach club galas, rooftop events, poolside productions and marina events require outdoor-rated AV equipment and generator power supply. We plan these as standard Antalya production formats.",
  },
  {
    q: "Can Sahneva work with our international PCO or event agency?",
    a: "Yes. We regularly work as a local technical sub-contractor to PCOs, DMCs and international event agencies bringing events to Antalya. We can provide RFP responses, join site inspections and align our production scope with your project structure.",
  },
  {
    q: "How do we get a quote for an Antalya event?",
    a: "Send us your event brief — event type, Antalya zone or hotel name, date, expected guest count and any known technical expectations. Via WhatsApp or our contact form. We return a technical scope and budget within 24 hours for standard Antalya event formats.",
  },
  {
    q: "Do you also cover Istanbul, Izmir and other Turkish cities?",
    a: "Yes. Sahneva is Istanbul-based and provides nationwide technical event production coverage across Turkey. For international teams managing multi-city or multi-day programmes, we can coordinate production across multiple Turkish locations from one point of contact.",
  },
];

function Faq() {
  return (
    <SectionShell variant="soft" id="faq">
      <div className="max-w-6xl mx-auto">
        <H2
          center
          kicker="FAQ for Antalya events"
          title="Frequently Asked Questions"
          desc="Quick answers for international event organizers, PCOs and DMCs planning events in Antalya."
        />
        <div className="space-y-3">
          {FAQ_ITEMS.map((f) => (
            <details key={f.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer text-base font-black text-gray-900">{f.q}</summary>
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

/* ===== Related ===== */
function RelatedPages() {
  return (
    <SectionShell variant="light" id="related">
      <H2
        center
        kicker="Related pages"
        title="More from Sahneva"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { href: "/en/event-production-company-turkey", t: "Event Production Partner in Turkey", d: "Overview for international companies planning events across Turkey" },
          { href: "/en/mice-turkey", t: "MICE Turkey", d: "Technical production for Meetings, Incentives, Conferences & Exhibitions" },
          { href: "/en/corporate-events", t: "Corporate Events", d: "Conference, launch, gala and brand event production" },
          { href: "/en/blog/how-to-organize-corporate-event-in-turkey", t: "Corporate Event Guide: Turkey", d: "Complete planning guide for foreign companies organising events in Turkey" },
          { href: "/en/services", t: "All Services", d: "Full catalogue of rental and production services" },
          { href: "/en/contact", t: "Contact & RFP", d: "Send your event brief or request a technical proposal" },
        ].map((s) => (
          <Link key={s.href} href={s.href}>
            <Card className="h-full">
              <div className="text-sm font-semibold text-blue-700">Sahneva</div>
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
          kicker="Start your Antalya event"
          title="Planning an Event in Antalya?"
          desc="Tell us your venue, event type, date and guest count. We'll return with a clear technical production proposal within 24 hours."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Card dark className="p-7">
            <div className="text-white font-black text-xl">WhatsApp — fastest response</div>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Message your Antalya event details — hotel, date, event type, guest count. We reply the same business day.
            </p>
            <div className="mt-6">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500 transition"
              >
                Send Brief on WhatsApp
              </a>
            </div>
          </Card>
          <Card dark className="p-7">
            <div className="text-white font-black text-xl">Contact form</div>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Prefer a form? Send your Antalya event brief and our English-speaking team responds within one business day.
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
          Belek · Kemer · Side · Alanya · Antalya city centre · English coordination · RFP in 24h
        </div>
      </div>
    </SectionShell>
  );
}

/* ===== JSON-LD ===== */
function AntalyaJsonLd() {
  const pageUrl = `${ORIGIN}/en/event-production-antalya`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Event Production Antalya — Stage, LED Screen, Sound & Lighting for International Events | Sahneva",
        description:
          "Technical event production in Antalya for international companies, PCOs and DMCs. Stage, LED screen, sound and lighting for conferences, incentive events and galas.",
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
          { "@type": "ListItem", position: 3, name: "Event Production Antalya", item: pageUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Technical Event Production in Antalya",
        serviceType: "Event Production",
        description:
          "Stage, LED screen, sound, lighting, truss and tent technical production for international conferences, incentive events, product launches and exhibitions in Antalya, Turkey.",
        provider: { "@id": `${ORIGIN}/#org` },
        areaServed: [
          { "@type": "City", name: "Antalya" },
          { "@type": "Place", name: "Belek" },
          { "@type": "Place", name: "Kemer" },
          { "@type": "Place", name: "Side" },
          { "@type": "Place", name: "Alanya" },
          { "@type": "Country", name: "Turkey" },
        ],
        audience: {
          "@type": "Audience",
          audienceType: "International companies, PCOs, DMCs and event agencies planning events in Antalya",
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

  return <JsonLdScript id="ld-json-antalya" data={jsonLd} />;
}

/* ===== Page ===== */
export default function EventProductionAntalyaPage() {
  const breadcrumbItems = [
    { name: "Home", url: `${ORIGIN}/en` },
    { name: "Services", url: `${ORIGIN}/en/services` },
    { name: "Event Production Antalya", url: `${ORIGIN}/en/event-production-antalya` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={ORIGIN} />
      <AntalyaJsonLd />
      <Hero />
      <WhyAntalya />
      <AntalyaVenues />
      <EventFormats />
      <TechnicalServices />
      <HowWeWork />
      <Stats />
      <AntalyaGallery />
      <Faq />
      <RelatedPages />
      <Cta />
    </>
  );
}

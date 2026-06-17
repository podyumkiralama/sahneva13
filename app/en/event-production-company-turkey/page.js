import Image from "next/image";
import Link from "next/link";

import JsonLdScript from "@/components/seo/JsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { SITE_URL } from "@/lib/seo/seoConfig";
import { ORGANIZATION_ID } from "@/lib/seo/schemaIds";

export const revalidate = 1800;

const PAGE_PATH = "/en/event-production-company-turkey";
const TR_PATH = "/turkiyede-etkinlik-cozum-ortagi";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const HERO_IMAGE = "/img/kurumsal/kurumsal-sahne-led-ekran.webp";
const OG_IMAGE = `${SITE_URL}${HERO_IMAGE}`;
const PHONE = "+905453048671";
const WHATSAPP_URL = `https://wa.me/${PHONE.replace("+", "")}?text=Hello%2C%20we%20are%20planning%20an%20international%20event%20in%20Turkey.%20Can%20we%20request%20technical%20production%20support%3F`;

const SERVICES = [
  {
    title: "Stage and podium systems",
    text: "Main stage, modular podium, protocol platforms and performance areas planned around venue access, load and audience flow.",
    href: "/en/stage-rental",
  },
  {
    title: "LED screen and video wall",
    text: "Indoor LED, outdoor LED, LED wall and video wall setups with processor, content routing and technical operator support.",
    href: "/en/led-screen-rental",
  },
  {
    title: "Sound, lighting and show control",
    text: "Line array sound, stage lighting, control desk, microphones and show-day technical crew under one production plan.",
    href: "/en/sound-light-rental",
  },
  {
    title: "Truss, rigging and tent structures",
    text: "Truss structures, scaffold support, event tents and temporary covered areas for indoor, outdoor and hybrid projects.",
    href: "/en/truss-rental",
  },
];

const CITIES = ["Istanbul", "Antalya", "Izmir", "Ankara", "Bodrum", "Turkey-wide logistics"];

const PROCESS = [
  {
    title: "Brief and scope",
    text: "We clarify event type, date, city, venue, audience size, screen needs, stage format and technical expectations.",
  },
  {
    title: "Technical planning",
    text: "A production plan is prepared for stage, LED screen, sound, lighting, truss, tent, power and backstage workflow.",
  },
  {
    title: "Logistics and setup",
    text: "Equipment, crew, vehicles, access hours and installation sequence are coordinated with the venue or local agency.",
  },
  {
    title: "Event-day operation",
    text: "The technical team remains on site for sound checks, screen control, stage transitions and operational support.",
  },
  {
    title: "Dismantling and handover",
    text: "After the event, dismantling, load-out and site handover are completed with the same technical responsibility.",
  },
];

const EVENT_TYPES = [
  "Corporate conferences",
  "Brand launches",
  "International congresses",
  "Gala and protocol events",
  "Festivals and concerts",
  "Exhibitions and trade fairs",
];

const FAQ_ITEMS = [
  {
    q: "Can Sahneva support international agencies planning an event in Turkey?",
    a: "Yes. Sahneva works as a local event production partner for international companies, agencies and brands that need stage, LED screen, sound, lighting, truss, tent and technical crew support in Turkey.",
  },
  {
    q: "Which cities do you cover in Turkey?",
    a: "We frequently support projects in Istanbul, Antalya, Izmir, Ankara and Bodrum, and we can plan logistics for other cities depending on the event scope and schedule.",
  },
  {
    q: "Can stage, LED screen, sound and lighting be planned as one package?",
    a: "Yes. For international events, a single technical plan is usually safer than separate suppliers. We can combine stage, podium, LED screen, sound, lighting, truss, tent and crew in one scope.",
  },
  {
    q: "What information is needed for a quote?",
    a: "Event date, city, venue, event format, guest count, required stage size, LED screen size, sound-light expectations and setup hours are enough for the first technical estimate.",
  },
  {
    q: "Do you communicate in English?",
    a: "Yes. English communication can be used during briefing, technical planning and offer preparation for international clients working in Turkey.",
  },
];

export const metadata = {
  title: {
    absolute: "Event Production Company in Turkey | Sahneva",
  },
  description:
    "Stage, LED screen, sound, lighting, truss, tent and technical event production in Turkey for international companies, agencies and brands.",
  alternates: buildLanguageAlternates({
    tr: TR_PATH,
    en: PAGE_PATH,
    canonical: PAGE_PATH,
    xDefault: PAGE_PATH,
  }),
  openGraph: {
    title: "Event Production Company in Turkey | Sahneva",
    description:
      "A local technical production partner in Turkey for international corporate events, launches, fairs, concerts and brand projects.",
    url: PAGE_URL,
    type: "website",
    siteName: "Sahneva",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Event production company in Turkey with stage and LED screen setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Production Company in Turkey | Sahneva",
    description:
      "Stage, LED screen, sound, lighting, truss and event production support in Turkey for international companies.",
    images: [OG_IMAGE],
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

function JsonLd() {
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const serviceId = `${PAGE_URL}#service`;
  const faqId = `${PAGE_URL}#faq`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Event Production Company in Turkey",
        description: metadata.description,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: { "@id": serviceId },
        hasPart: [{ "@id": faqId }],
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/en/services` },
          { "@type": "ListItem", position: 3, name: "Event Production Company in Turkey", item: PAGE_URL },
        ],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Event production company in Turkey",
        serviceType: "Technical event production",
        provider: { "@id": ORGANIZATION_ID },
        areaServed: [
          { "@type": "Country", name: "Turkey" },
          { "@type": "City", name: "Istanbul" },
          { "@type": "City", name: "Antalya" },
          { "@type": "City", name: "Izmir" },
          { "@type": "City", name: "Ankara" },
          { "@type": "City", name: "Bodrum" },
        ],
        audience: {
          "@type": "Audience",
          audienceType: "International companies, event agencies and brands planning events in Turkey",
        },
        description:
          "Stage, LED screen, sound, lighting, truss, tent, technical crew, setup and event-day operation support in Turkey.",
        image: OG_IMAGE,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "TRY",
          url: PAGE_URL,
          description: "Project-based event production quote for international events in Turkey.",
        },
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        inLanguage: "en-US",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return <JsonLdScript id="ld-json-event-production-turkey" data={data} />;
}

function SectionHeading({ eyebrow, title, text, dark = false }) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`text-sm font-black uppercase tracking-[0.28em] ${dark ? "text-cyan-200" : "text-blue-700"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-3xl font-black tracking-tight md:text-5xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/[0.72]" : "text-slate-600"}`}>{text}</p>
    </header>
  );
}

export default function EventProductionCompanyTurkeyPage() {
  return (
    <>
      <JsonLd />
      <main className="overflow-hidden bg-white text-slate-950">
        <section className="relative bg-[#080D1B] py-24 text-white md:py-28">
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              priority
              className="object-cover opacity-35"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080D1B] via-[#080D1B]/90 to-[#0B1B3A]/70" />
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />
          </div>

          <div className="container relative mx-auto grid gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
                Local event production partner in Turkey
              </div>
              <h1 className="mt-7 max-w-5xl text-4xl font-black leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                Event production company in Turkey for international brands
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/[0.82]">
                Sahneva provides stage, LED screen, sound, lighting, truss, tent and technical event production
                solutions in Turkey for international companies, agencies and brands planning events in Istanbul,
                Antalya, Izmir, Ankara, Bodrum and other cities.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-7 py-3 font-black text-slate-950 transition hover:bg-emerald-400"
                >
                  Request a WhatsApp Quote
                </a>
                <Link
                  href="/en/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 py-3 font-black text-white transition hover:bg-white/15"
                >
                  Contact the Team
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-white/12 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">Production scope</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {["Stage", "LED screen", "Sound", "Lighting", "Truss", "Tent"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <span className="text-lg font-black">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-cyan-200/20 bg-cyan-200/10 p-5">
                <p className="text-3xl font-black">700+ projects</p>
                <p className="mt-2 text-white/[0.72]">One technical team for planning, setup, operation and dismantling.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Why a local partner matters"
              title="International event plans need local technical control"
              text="When a brand or agency comes to Turkey, the challenge is rarely only equipment rental. The safer model is a local partner who understands venues, logistics, access hours, power distribution, crew coordination and event-day operation."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["Venue and city knowledge", "Venue access, loading points, city traffic and local operation habits are included in the planning."],
                ["One technical responsibility", "Stage, LED screen, sound, lighting and truss are coordinated as one production scope."],
                ["Clear communication", "Brief, technical plan, offer and event-day updates can be managed in English."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Turnkey technical production"
              title="Stage, LED, sound, lighting, truss and tent support"
              text="The production scope can be shaped as a complete event infrastructure or as selected technical departments depending on the agency's brief and venue conditions."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-xl font-black group-hover:text-blue-700">{service.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">{service.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0B1120] py-20 text-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Cities and event formats"
              title="Built for companies planning events in Turkey"
              text="Sahneva supports corporate events, launches, fairs, concerts, congresses and brand experiences where international planning needs a dependable local production partner."
              dark
            />
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                <h3 className="text-2xl font-black">Frequent cities</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {CITIES.map((city) => (
                    <span key={city} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 font-bold text-white/85">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {EVENT_TYPES.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="font-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="How we work"
              title="From first brief to site handover"
              text="The workflow is designed to make Turkey-side production clear for international teams before they travel, before equipment is loaded and before the event day begins."
            />
            <div className="grid gap-5 lg:grid-cols-5">
              {PROCESS.map((step, index) => (
                <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="text-sm font-black text-blue-700">0{index + 1}</span>
                  <h3 className="mt-3 text-lg font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Questions"
              title="FAQ for international event teams"
              text="Short answers for agencies and brands evaluating a local technical production partner in Turkey."
            />
            <div className="mx-auto max-w-4xl space-y-4">
              {FAQ_ITEMS.map((item) => (
                <details key={item.q} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <summary className="cursor-pointer text-lg font-black">{item.q}</summary>
                  <p className="mt-4 leading-relaxed text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#111827] py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-black md:text-5xl">Planning an international event in Turkey?</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/[0.72]">
              Share your city, date, venue, guest count and technical expectations. We will return with a clear
              production scope for stage, LED screen, sound, lighting, truss, tent and crew support.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-7 py-3 font-black text-slate-950 transition hover:bg-emerald-400"
              >
                Write on WhatsApp
              </a>
              <Link
                href="/en/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 py-3 font-black text-white transition hover:bg-white/15"
              >
                Send Event Details
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

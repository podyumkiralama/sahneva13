// app/en/event-production-istanbul/page.js
//
// KAPSAM SOZLESMESI — bu sayfa Istanbul'da UCTAN UCA PRODUKSIYON ORTAKLIGINI
// anlatir: mekan peyzaji, yukleme/erisim gercekligi, ekip olcekleme, takvim.
//
// Bu sayfaya YAZILMAZ:
//   - Ekipman katalogu / teknik spec listesi -> /en/av-rental-istanbul
//   - Kongre salonu is akisi (cevirmen kabini, breakout, hibrit) -> /en/conference-av-rental-istanbul
//   - Turkiye geneli konumlandirma -> /en/event-production-company-turkey
// Sinirlar kasitli: 2026 Agustos'ta 80 sehir sayfasi %82-96 ortusme yuzunden
// silinmisti; uc Istanbul landing'i ayni hataya dusmemeli.

import Image from "next/image";
import Link from "next/link";

import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { ORGANIZATION_ID } from "@/lib/seo/schemaIds";
import { YEARS_OF_EXPERIENCE } from "@/lib/experience";
import { PROJECTS_COMPLETED } from "@/lib/stats";
import {
  SectionShell,
  SectionHead,
  BulletCard,
  Card,
  ScopeTable,
  FaqList,
  SiblingLinks,
  CtaBand,
} from "@/components/en/LandingKit";

export const revalidate = 86400;

const ORIGIN = "https://www.sahneva.com";
const PATH = "/en/event-production-istanbul";
const PAGE_URL = `${ORIGIN}${PATH}`;

const WHATSAPP = `https://wa.me/905453048671?text=${encodeURIComponent(
  "Hello, we are planning an event in Istanbul and need a local production partner. Venue: [venue], Date: [dd.mm.yyyy], Guests: [xxx].",
)}`;

const PAGE_TITLE = "Event Production Istanbul | Local Partner";
const PAGE_DESCRIPTION =
  "Istanbul event production partner for international organisers: venue access and load-in planning, technical crew, stage, LED and audio.";

export const metadata = {
  title: { absolute: `${PAGE_TITLE} | Sahneva` },
  description: PAGE_DESCRIPTION,
  alternates: buildLanguageAlternates({
    en: PATH,
    canonical: PATH,
    xDefault: PATH,
  }),
  openGraph: {
    title: `${PAGE_TITLE} | Sahneva`,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: `${ORIGIN}/img/og/sahneva-og.webp`,
        width: 1200,
        height: 630,
        alt: "Event production in Istanbul — stage, LED screen and technical crew",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Sahneva`,
    description: PAGE_DESCRIPTION,
    images: [`${ORIGIN}/img/og/sahneva-og.webp`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

/* ================== CONTENT ================== */

const HERO_IMAGE = "/img/kurumsal/kurumsal-sahne-led-ekran.webp";

const VENUE_LANDSCAPE = [
  {
    title: "Purpose-built congress centres",
    intro:
      "Dedicated congress venues on the European side carry the largest plenary halls in the city and come with in-house technical rules.",
    items: [
      "Freight lifts and dock doors are shared with concurrent events — slots are booked, not improvised",
      "Rigging points are documented, so load calculations can be signed off before the truck leaves",
      "House power is usually sufficient; generators are the exception rather than the rule",
    ],
  },
  {
    title: "Exhibition and fair halls",
    intro:
      "Fair complexes give you floor area and drive-in access, and take away almost everything else.",
    items: [
      "Ground-supported structures instead of roof rigging — truss towers and scaffold skeletons",
      "Build-up windows overlap with dozens of other contractors on the same floor",
      "Distribution runs are long; cable routing and ramping become a schedule item, not a detail",
    ],
  },
  {
    title: "Hotel ballrooms and congress hotels",
    intro:
      "The most common venue type for corporate programmes, and the most constrained one physically.",
    items: [
      "Low clearance decides screen height before any creative decision does",
      "Load-in through service corridors and passenger-sized lifts caps panel and deck dimensions",
      "Noise and working-hour limits push heavy build to overnight windows",
    ],
  },
  {
    title: "Arenas and large indoor venues",
    intro:
      "Where broadcast-grade productions happen. We ran the PMGC 2023 World Finals at Ülker Arena over a seven-day build.",
    items: [
      "Multi-day build-up with staged crew rotations rather than a single install day",
      "Roof rigging with documented point loads and independent verification",
      "Camera sightlines drive stage geometry, not the other way round",
    ],
  },
];

const ACCESS_REALITY = [
  [
    "Two continents, one schedule",
    "A build that spans venues on both the European and Anatolian sides is a logistics problem before it is a technical one. We plan bridge crossings around them, and where the timing is tight we split the load across separate vehicles staged on each side rather than moving one truck twice.",
  ],
  [
    "Heavy-vehicle hours",
    "Central districts restrict when heavy vehicles can move and unload. Practically this means the heavy build is planned into night and early-morning windows, and the daytime slot is reserved for finishing work that a smaller vehicle can service.",
  ],
  [
    "Dock, lift and corridor dimensions",
    "We measure the route in, not just the room. Lift car depth, corridor turns and door clearance decide the largest deck, panel and truss length that can physically reach the stage position — and that is settled at the site survey, not on build day.",
  ],
  [
    "Shared build-up windows",
    "In congress and exhibition venues you are one of many contractors on the floor. We book the freight slot, sequence our own trades around it, and keep a documented fallback if the slot slips.",
  ],
  [
    "Venue paperwork",
    "Rigging plots, load calculations, insurance and crew lists are prepared in the format the venue's technical office expects, so approval is not the thing that delays your build.",
  ],
];

const WHAT_WE_RUN = [
  {
    title: "Site survey and technical plan",
    intro: "Before anything is quoted in detail, the room is measured and the route in is walked.",
    items: [
      "Measured drawing of stage position, sightlines and screen geometry",
      "Load-in route with the dimensional limits that constrain the kit list",
      "Power availability and distribution plan",
    ],
  },
  {
    title: "Single-contract coordination",
    intro:
      "Stage, LED, audio, lighting, rigging and crew arrive under one contract and one site manager.",
    items: [
      "One technical contact from survey through de-rig",
      "Trades sequenced against a written build schedule",
      "Itemised quotation so each line is traceable to a deliverable",
    ],
  },
  {
    title: "Crew on site",
    intro:
      "Crew is scaled to the build, not to a standard package. On a recent protocol-level indoor build we ran 60 people across two working days.",
    items: [
      "Riggers, audio, lighting, video and stage hands scheduled by shift",
      "English-speaking technical lead for international production teams",
      "Show-time operators plus a standby crew for the live window",
    ],
  },
  {
    title: "Show day and de-rig",
    intro: "The part of the job that decides whether the rest of it mattered.",
    items: [
      "Rehearsal and technical run before doors",
      "Redundancy on the paths that cannot fail during the live window",
      "De-rig scheduled against the venue's hand-back time",
    ],
  },
];

const ISTANBUL_PROOF = [
  {
    label: "PMGC 2023 World Finals",
    venue: "Ülker Arena, Istanbul",
    detail: "Seven-day arena build for a globally streamed esports final. Recognised as Best Technical Application of the Year.",
    href: "/en/projects/pmgc-2023-world-finals-esports-production-istanbul",
  },
  {
    label: "EAACI Congress Istanbul",
    venue: "Congress exhibition hall",
    detail: "A 360-degree LED wall built for Leti Pharma's exhibition space inside a live international congress.",
    href: "/en/projects/eaaci-congress-istanbul-led-installation",
  },
  {
    label: "Millet Bahçesi Hangar",
    venue: "Atatürk Airport National Garden, Istanbul",
    detail: "A documented one-event configuration with a 16 × 8 m scaffold stage, 16 × 6 m P1.9 main LED wall, four side screens and hall operations.",
    href: "/en/projects/millet-bahcesi-hangar-event-production",
  },
  {
    label: "Protocol-level indoor build",
    venue: "Indoor hangar venue, Istanbul",
    detail: "24 × 8 m stage and a 24 × 6 m P2 LED screen on a truss and scaffold skeleton, installed by 60 crew over two working days.",
    href: "/en/projects/indoor-led-stage-installation-protocol-event",
  },
  {
    label: "PUBG Mobile Guinness World Record",
    venue: "Fişekhane, Istanbul",
    detail: "Record-attempt production in a heritage industrial venue with the access constraints that come with one.",
    href: "/en/projects/fisekhane-pubg-mobile-guinness-world-record",
  },
];

const BRIEF_ROWS = [
  ["Venue and hall", "Name of the venue and the specific hall or ballroom. This alone rules most of the technical options in or out."],
  ["Dates", "Build-up, show day and de-rig. If the build window is shared with another event, tell us early."],
  ["Format", "Plenary, awards, launch, gala, exhibition stand or a mix. Format drives stage geometry and crew size."],
  ["Audience", "Expected headcount and seating layout — theatre, cabaret, standing."],
  ["Content", "Presentations, video playback, live camera or streaming. This decides the screen and control-room scope."],
  ["Who else is on site", "Other suppliers, venue in-house technical team, agency production crew. We plan around them rather than over them."],
];

const FAQ_ITEMS = [
  {
    q: "Do you work directly with international organisers, or only through a local agency?",
    a: "Both. Some clients contract us directly as the technical production partner for their Istanbul event; others bring us in behind an agency or PCO that owns the client relationship. The technical scope and the site management are the same in either model — what changes is who we report to.",
  },
  {
    q: "Can you handle venues on both the European and Anatolian sides?",
    a: "Yes. Our base and warehouse are in Istanbul, so both sides are served by the same crew and stock. For programmes that run across both sides on the same day we stage vehicles separately rather than moving one load across the city mid-schedule.",
  },
  {
    q: "What do you need before you can quote accurately?",
    a: "Venue and hall name, dates including build-up and de-rig, event format, expected audience and what has to appear on screen. With those five we can produce an itemised quotation. Anything genuinely uncertain is quoted as an option rather than buried in the total.",
  },
  {
    q: "Do you carry out a site survey?",
    a: "For anything beyond a small meeting room, yes. The survey measures the room and the route in — lift dimensions, corridor turns, dock access and power. That is what turns a plausible plan into a build that actually fits through the door.",
  },
  {
    q: "Is your crew able to work in English?",
    a: "The technical lead assigned to international projects works in English, and briefing documents, schedules and the run of show are produced in English. Crew on the floor is directed in Turkish by that lead.",
  },
  {
    q: "How far in advance should we book?",
    a: "For a standard corporate programme a few weeks is usually workable. For arena-scale builds, congress periods and the graduation and awards seasons, availability of both crew and stock tightens considerably — earlier is materially better.",
  },
];

const SIBLING_LINKS = [
  {
    href: "/en/hangar-event-venue-istanbul",
    label: "Hangar Event Venue Istanbul",
    desc: "A 90 × 30 m hall at Atatürk Airport National Garden with a ready stage, P1.9 LED, sound, lighting and furniture — usable as installed or reconfigured for the event.",
  },
  {
    href: "/en/av-rental-istanbul",
    label: "AV Rental Istanbul",
    desc: "If you already run the production yourself and need the equipment package plus technicians, this is the page for kit, crew and delivery windows.",
  },
  {
    href: "/en/conference-av-rental-istanbul",
    label: "Conference AV Rental Istanbul",
    desc: "Congress and conference rooms specifically: simultaneous interpretation, breakout scaling, speaker management, hybrid and recording.",
  },
  {
    href: "/en/event-production-company-turkey",
    label: "Event Production Company in Turkey",
    desc: "The country-level view — how we work with international clients across Türkiye rather than in Istanbul specifically.",
  },
  {
    href: "/en/mice-turkey",
    label: "MICE Turkey",
    desc: "Destination-level MICE production across multiple Turkish cities, for programmes that are not tied to a single Istanbul venue.",
  },
];

/* ================== SCHEMA ================== */

function StructuredData() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Event Production in Istanbul",
    serviceType: "Event production and technical production services",
    description: PAGE_DESCRIPTION,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: {
      "@type": "City",
      name: "Istanbul",
      containedInPlace: { "@type": "Country", name: "Türkiye" },
    },
    audience: {
      "@type": "BusinessAudience",
      name: "International event organisers, corporate clients, agencies and PCOs",
    },
    url: PAGE_URL,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
    </>
  );
}

/* ================== PAGE ================== */

export default function EventProductionIstanbulPage() {
  const breadcrumbItems = [
    { name: "Home", url: `${ORIGIN}/en` },
    { name: "Services", url: `${ORIGIN}/en/services` },
    { name: "Event Production Istanbul", url: PAGE_URL },
  ];

  return (
    <div id="main">
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={ORIGIN} />
      <StructuredData />

      {/* HERO */}
      <section className="relative overflow-hidden" aria-labelledby="istanbul-hero-title">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={HERO_IMAGE}
            alt="Corporate event stage with LED screen installed in an Istanbul venue"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={82}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0B1120]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/95 via-[#0B1120]/60 to-[#0B1120]/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
            <Link href="/en" className="hover:text-white">Home</Link>
            <span className="mx-2 text-white/40">/</span>
            <Link href="/en/services" className="hover:text-white">Services</Link>
            <span className="mx-2 text-white/40">/</span>
            <span className="text-white">Event Production Istanbul</span>
          </nav>

          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
            <span className="h-2 w-2 rounded-full bg-violet-400" aria-hidden="true" />
            Istanbul-based crew, stock and site management
          </p>

          <h1
            id="istanbul-hero-title"
            className="mt-6 max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-white"
          >
            Event Production in Istanbul
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/80">
            International organisers do not lose events in Istanbul on creative decisions. They
            lose them on load-in windows, lift dimensions and venues that were booked before anyone
            measured the room. We are the local technical production partner that plans for those
            first — {YEARS_OF_EXPERIENCE} years of it, {PROJECTS_COMPLETED} projects delivered.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/en/contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-white px-8 text-sm font-black text-violet-900 transition hover:bg-violet-50"
            >
              Request a production quote
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 text-sm font-black text-white transition hover:bg-white/15"
            >
              Talk to a producer
            </a>
          </div>
        </div>
      </section>

      {/* VENUE LANDSCAPE */}
      <SectionShell variant="light" labelledBy="venues-title">
        <SectionHead
          id="venues-title"
          kicker="Venue landscape"
          title="Four kinds of Istanbul venue, four different builds"
          desc="The venue category decides the build long before the brief does. These are the constraints we plan against in each."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {VENUE_LANDSCAPE.map((item) => (
            <BulletCard key={item.title} title={item.title} intro={item.intro} items={item.items} />
          ))}
        </div>
      </SectionShell>

      {/* ACCESS REALITY */}
      <SectionShell variant="ink" labelledBy="access-title">
        <SectionHead
          id="access-title"
          dark
          kicker="Load-in and access"
          title="The operational layer nobody quotes for"
          desc="This is the part of an Istanbul build that separates a schedule that holds from one that slips on day one."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ACCESS_REALITY.map(([title, body]) => (
            <Card key={title} dark>
              <h3 className="text-lg font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{body}</p>
            </Card>
          ))}
        </div>
      </SectionShell>

      {/* WHAT WE RUN */}
      <SectionShell variant="soft" labelledBy="scope-title">
        <SectionHead
          id="scope-title"
          kicker="Production scope"
          title="What we run end to end"
          desc="Coordination, crew and site management. For the equipment package itself, the AV rental page carries the kit detail."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {WHAT_WE_RUN.map((item) => (
            <BulletCard key={item.title} title={item.title} intro={item.intro} items={item.items} />
          ))}
        </div>
      </SectionShell>

      {/* PROOF */}
      <SectionShell variant="light" labelledBy="proof-title">
        <SectionHead
          id="proof-title"
          kicker="Istanbul projects"
          title="Builds we have delivered in this city"
          desc="Each of these has a project page with the technical scope written out."
        />
        <ul className="grid gap-5 md:grid-cols-2 list-none p-0 m-0">
          {ISTANBUL_PROOF.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-violet-300 hover:shadow-lg"
              >
                <span className="text-xs font-black uppercase tracking-[0.16em] text-violet-700">
                  {item.venue}
                </span>
                <span className="mt-3 text-xl font-black text-slate-950 group-hover:text-violet-800">
                  {item.label}
                </span>
                <span className="mt-3 text-sm leading-relaxed text-slate-600">{item.detail}</span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* BRIEF */}
      <SectionShell variant="soft" labelledBy="brief-title">
        <SectionHead
          id="brief-title"
          kicker="Before you brief us"
          title="Six things that make a quotation accurate"
          desc="Send these and the first quotation is close to the final one. Leave them out and every line is a placeholder."
        />
        <ScopeTable caption="Information needed for an accurate Istanbul production quotation" rows={BRIEF_ROWS} />
      </SectionShell>

      {/* FAQ */}
      <SectionShell variant="light" labelledBy="faq-title">
        <SectionHead
          id="faq-title"
          kicker="FAQ"
          title="Questions international organisers ask"
        />
        <div className="max-w-4xl">
          <FaqList items={FAQ_ITEMS} />
        </div>
      </SectionShell>

      {/* SIBLINGS */}
      <SectionShell variant="soft" labelledBy="siblings-title">
        <div className="sr-only" id="siblings-title">Related Sahneva pages</div>
        <SiblingLinks
          title="Looking for something more specific?"
          intro="This page covers running the production. If your need is narrower, these pages go deeper without repeating what is here."
          links={SIBLING_LINKS}
        />
      </SectionShell>

      {/* CTA */}
      <SectionShell variant="ink" labelledBy="cta-title">
        <div className="sr-only" id="cta-title">Contact Sahneva about an Istanbul event</div>
        <CtaBand
          title="Planning an event in Istanbul?"
          desc="Send the venue and the dates. We will tell you what the room allows before we tell you what it costs."
          primary={{ href: "/en/contact", label: "Request a production quote" }}
          secondary={{ href: WHATSAPP, label: "Message us on WhatsApp" }}
        />
      </SectionShell>
    </div>
  );
}

// app/en/conference-av-rental-istanbul/page.js
//
// KAPSAM SOZLESMESI — bu sayfa KONGRE/KONFERANS SALONU IS AKISINI anlatir:
// simultane ceviri, plenary-breakout olcekleme, konusmaci ve sunum yonetimi,
// hibrit/kayit, kongre mekaninda stant AV'si.
//
// Bu sayfaya YAZILMAZ:
//   - Genel AV ekipman paketi / dry hire modeli -> /en/av-rental-istanbul
//   - Uctan uca prodüksiyon ve mekan lojistigi -> /en/event-production-istanbul
//   - Turkiye geneli MICE destinasyon anlatisi -> /en/mice-turkey
// AV sayfasi bilincli olarak "conference AV"yi kapsamiyor; o niyet buraya ait.

import Image from "next/image";
import Link from "next/link";

import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { ORGANIZATION_ID } from "@/lib/seo/schemaIds";
import { getEnProjects } from "@/lib/enProjects";
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
const PATH = "/en/conference-av-rental-istanbul";
const PAGE_URL = `${ORIGIN}${PATH}`;

const WHATSAPP = `https://wa.me/905453048671?text=${encodeURIComponent(
  "Hello, we are organising a conference in Istanbul and need conference AV. Venue: [venue], Dates: [dd.mm.yyyy], Rooms: [plenary + breakouts], Delegates: [xxx].",
)}`;

const PAGE_TITLE = "Conference AV Rental Istanbul | Congress AV";
const PAGE_DESCRIPTION =
  "Conference and congress AV in Istanbul: simultaneous interpretation, plenary and breakout rooms, speaker management and hybrid delivery.";

// EAACI vaka calismasi bu sayfanin ana kaniti; slug degisirse burada da kirilsin
// istiyoruz — sessizce kanitsiz kalmasindansa build patlasin.
const EAACI_SLUG = "eaaci-congress-istanbul-led-installation";

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
        alt: "Conference AV setup in an Istanbul congress venue",
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

const HERO_IMAGE = "/img/kurumsal/konferans.webp";

const CONFERENCE_LAYERS = [
  {
    title: "Simultaneous interpretation",
    intro:
      "A standard line item once your delegate list crosses a language boundary, and one that has to be designed into the room rather than added at the end.",
    items: [
      "Sound-insulated interpreter booths positioned with a clear view of the stage",
      "Interpreter consoles and one receiver headset per delegate who needs a channel",
      "Interpretation feeds integrated with the room PA and the recording path, not run in parallel",
      "Booth position fixed early — it competes with camera positions and seating for the same floor",
    ],
    href: "/en/glossary#simultaneous-interpretation",
    hrefLabel: "What simultaneous interpretation needs",
  },
  {
    title: "Plenary and breakout scaling",
    intro:
      "A congress is not one room. The difficulty is running several at once with a crew that cannot be in all of them.",
    items: [
      "Plenary gets a dedicated control position and permanent operators",
      "Breakout rooms are standardised so any roaming technician can work any room",
      "Room-to-room changeover planned against the programme, not improvised between sessions",
      "A floor lead who owns the whole set of rooms rather than one of them",
    ],
  },
  {
    title: "Speaker and presentation management",
    intro:
      "The layer that decides whether a session starts on time. Most conference AV failures are here, not in the equipment.",
    items: [
      "Speaker preparation position where slides are checked before the session, not during it",
      "Central presentation handling so decks are loaded and cued in advance",
      "Preview and programme separation so the operator sees the next slide before the room does",
      "Countdown and confidence monitors for the presenter",
    ],
  },
  {
    title: "Hybrid, streaming and recording",
    intro:
      "Remote delegates and post-event content are usually the same infrastructure decision.",
    items: [
      "Camera and vision mixing per streamed room",
      "Encoding and delivery to the platform your organisation already uses",
      "Per-session recording with a clean programme feed for later publication",
      "Return audio and video so remote speakers can be brought into the room properly",
    ],
  },
  {
    title: "Exhibition and sponsor stands",
    intro:
      "Congress floors carry commercial space alongside the sessions, and it runs on a different clock.",
    items: [
      "Stand display and LED surfaces built to the venue's load and access rules",
      "Build-up inside a shared window with dozens of other contractors",
      "Screens designed to read from every approach angle rather than one seated direction",
    ],
  },
  {
    title: "Room audio and microphones",
    intro:
      "Conference speech intelligibility is a different problem from music reinforcement.",
    items: [
      "Coverage designed for speech in wide, low congress halls",
      "Lectern gooseneck, panel table, handheld roving and lavalier per speaking role",
      "Wireless frequency coordination across parallel rooms so they do not fight each other",
      "Spare channels and a wired fallback on the microphones that carry the session",
    ],
  },
];

const BUILD_WINDOW = [
  [
    "The slot is shared",
    "Congress venues run their build-up with many contractors on the floor at once. Your freight slot is booked, not taken when convenient, and the sequence around it has to be planned in advance.",
  ],
  [
    "Rooms hand over late",
    "Breakout rooms are frequently released later than the plenary. The standardised-room approach exists precisely so a late release does not become a late start.",
  ],
  [
    "Session-to-session turnaround",
    "Between sessions you have minutes, not hours. Changeovers are rehearsed and the kit is laid out so a mic swap or a laptop change does not require rigging access.",
  ],
  [
    "Hand-back is a deadline",
    "De-rig is scheduled against the venue's hand-back time, and overrunning it is expensive. It is planned at the same time as the build, not afterwards.",
  ],
];

const BRIEF_ROWS = [
  ["Venue and rooms", "The congress venue plus the plenary and each breakout room. Room count drives crew size more than delegate count does."],
  ["Programme", "Session schedule across all rooms, including parallel tracks and changeover times."],
  ["Languages", "Which languages need interpretation, in which rooms, and expected receiver headcount."],
  ["Speakers", "Number of presenters, whether they present remotely, and who supplies the decks."],
  ["Hybrid scope", "Which rooms are streamed or recorded, and where the output goes."],
  ["Exhibition", "Whether sponsor or exhibition stands are in scope, and the hall's build-up window."],
];

const FAQ_ITEMS = [
  {
    q: "Do you supply simultaneous interpretation equipment for congresses in Istanbul?",
    a: "Yes. Interpreter booths, interpreter consoles and delegate receiver headsets are supplied and integrated with the room audio and the recording feed. Booth position is agreed early in the room layout because it competes with camera positions and seating for floor space. Interpreters themselves are usually contracted by the organiser or the PCO; we supply and run the technical infrastructure they work in.",
  },
  {
    q: "How do you cover several breakout rooms running at the same time?",
    a: "Breakout rooms are standardised so that any roaming technician can work any room without a handover briefing. The plenary keeps dedicated operators and a permanent control position. A floor lead owns the whole set of rooms and manages changeovers against the published programme.",
  },
  {
    q: "How is this different from your general AV rental page?",
    a: "The AV rental page covers supplying an equipment package in Istanbul — audio, lighting, LED, playback — as dry hire or crewed. This page covers the congress workflow specifically: interpretation, parallel session management, speaker and presentation handling, and hybrid delivery. Many conferences need both; the quotation is still one document.",
  },
  {
    q: "Can you handle presentations and speaker slides centrally?",
    a: "Yes. A speaker preparation position lets presenters check their decks before their session rather than at the lectern. Slides are loaded and cued centrally, with preview and programme separated so the operator is always a step ahead of the room.",
  },
  {
    q: "Do you have experience with international medical and scientific congresses?",
    a: "Yes. At EAACI Congress Istanbul we built a 360-degree LED wall for Leti Pharma's exhibition space inside the live congress — a short shared build-up window, congress-venue load and access rules, and a surface that had to read from every approach angle. The project page sets out the technical scope.",
  },
  {
    q: "Can sessions be recorded for publication after the congress?",
    a: "Yes. Per-session recording from a clean programme feed is part of the hybrid scope, so the output is usable afterwards rather than a camera-in-the-back-of-the-room capture.",
  },
];

const SIBLING_LINKS = [
  {
    href: "/en/av-rental-istanbul",
    label: "AV Rental Istanbul",
    desc: "The general Istanbul AV package — audio, lighting, LED, playback and streaming — as dry hire, installed, or crewed.",
  },
  {
    href: "/en/event-production-istanbul",
    label: "Event Production Istanbul",
    desc: "When the whole event needs running: venue logistics, load-in planning, crew coordination and site management.",
  },
  {
    href: "/en/mice-turkey",
    label: "MICE Turkey",
    desc: "Destination-level view for meetings, incentives, conferences and exhibitions across Turkish cities, not only Istanbul.",
  },
  {
    href: "/en/led-screen-rental",
    label: "LED Screen Rental",
    desc: "Panel pitches, sizing and indoor or outdoor options for congress plenary screens and exhibition stands.",
  },
];

/* ================== SCHEMA ================== */

function StructuredData({ project }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "Conference AV Rental in Istanbul",
    alternateName: "Congress AV and interpretation services Istanbul",
    serviceType: "Conference and congress audio visual services",
    description: PAGE_DESCRIPTION,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: {
      "@type": "City",
      name: "Istanbul",
      containedInPlace: { "@type": "Country", name: "Türkiye" },
    },
    audience: {
      "@type": "BusinessAudience",
      name: "Congress organisers, PCOs, associations and corporate meeting planners",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Conference AV scope",
      itemListElement: CONFERENCE_LAYERS.map((layer) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: layer.title, description: layer.intro },
      })),
    },
    url: PAGE_URL,
  };


  const caseSchema = project
    ? {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `${PAGE_URL}#case`,
        name: project.title,
        about: { "@id": `${PAGE_URL}#service` },
        url: `${ORIGIN}/en/projects/${project.slug}`,
      }
    : null;

  return (
    <>
      <JsonLd data={serviceSchema} />
      {caseSchema ? <JsonLd data={caseSchema} /> : null}
    </>
  );
}

/* ================== PAGE ================== */

export default function ConferenceAvRentalIstanbulPage() {
  const project = getEnProjects().find((item) => item.slug === EAACI_SLUG);

  if (!project) {
    throw new Error(
      `conference-av-rental-istanbul: "${EAACI_SLUG}" lib/enProjects.js icinde bulunamadi. Sayfanin ana kaniti bu vaka.`,
    );
  }

  const breadcrumbItems = [
    { name: "Home", url: `${ORIGIN}/en` },
    { name: "Services", url: `${ORIGIN}/en/services` },
    { name: "Conference AV Rental Istanbul", url: PAGE_URL },
  ];

  return (
    <div id="main">
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={ORIGIN} />
      <StructuredData project={project} />

      {/* HERO */}
      <section className="relative overflow-hidden" aria-labelledby="conf-hero-title">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={HERO_IMAGE}
            alt="Conference hall with stage, screen and audio system prepared for a congress session"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={82}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0B1120]/72" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/95 via-[#0B1120]/60 to-[#0B1120]/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
            <Link href="/en" className="hover:text-white">Home</Link>
            <span className="mx-2 text-white/40">/</span>
            <Link href="/en/services" className="hover:text-white">Services</Link>
            <span className="mx-2 text-white/40">/</span>
            <span className="text-white">Conference AV Rental Istanbul</span>
          </nav>

          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
            <span className="h-2 w-2 rounded-full bg-violet-400" aria-hidden="true" />
            Congress floors, parallel sessions, interpretation
          </p>

          <h1
            id="conf-hero-title"
            className="mt-6 max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-white"
          >
            Conference AV Rental in Istanbul
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/80">
            A congress is several rooms running at once, in more than one language, on a programme
            that cannot slip. That is a workflow problem before it is an equipment problem — and it
            is what this page is about.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/en/contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-white px-8 text-sm font-black text-violet-900 transition hover:bg-violet-50"
            >
              Request a conference AV quote
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 text-sm font-black text-white transition hover:bg-white/15"
            >
              Send your programme
            </a>
          </div>
        </div>
      </section>

      {/* LAYERS */}
      <SectionShell variant="light" labelledBy="layers-title">
        <SectionHead
          id="layers-title"
          kicker="Conference AV scope"
          title="Six layers of a congress build"
          desc="Each of these is quoted as its own line. A meeting with one room and no interpretation needs two of them; an international congress needs all six."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CONFERENCE_LAYERS.map((layer) => (
            <div key={layer.title} className="flex flex-col">
              <BulletCard title={layer.title} intro={layer.intro} items={layer.items} />
              {layer.href ? (
                <Link
                  href={layer.href}
                  prefetch={false}
                  className="mt-3 inline-flex text-sm font-bold text-violet-700 hover:text-violet-900"
                >
                  {layer.hrefLabel} →
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </SectionShell>

      {/* PROOF — EAACI */}
      <SectionShell variant="ink" labelledBy="case-title">
        <SectionHead
          id="case-title"
          dark
          kicker="Congress case study"
          title="EAACI Congress Istanbul"
          desc={project.excerpt}
        />
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="overflow-hidden rounded-[1.6rem]">
            <LazyVideoEmbed
              locale="en"
              videoId={project.video.id}
              title={project.video.title}
              thumbnailUrl={project.video.thumbnailUrl}
              className="rounded-[1.6rem]"
            />
          </div>

          <div>
            <dl className="grid gap-3">
              {project.facts.map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <dt className="text-xs font-black uppercase tracking-[0.16em] text-violet-300 sm:w-32 sm:shrink-0">
                    {label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-white/80">{value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm leading-relaxed text-white/70">
              The constraint that defines congress work is visible here: a short shared build-up
              window, venue load and access rules that are not negotiable, and a surface that had to
              look finished from every direction because an exhibition floor has no back row.
            </p>

            <Link
              href={`/en/projects/${project.slug}`}
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 text-sm font-black text-white transition hover:bg-white/15"
            >
              Read the full technical scope
            </Link>
          </div>
        </div>
      </SectionShell>

      {/* BUILD WINDOW */}
      <SectionShell variant="soft" labelledBy="window-title">
        <SectionHead
          id="window-title"
          kicker="Build window"
          title="Congress venues run on a different clock"
          desc="Four scheduling realities that shape how a conference build is planned in Istanbul."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {BUILD_WINDOW.map(([title, body]) => (
            <Card key={title}>
              <h3 className="text-lg font-black text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
            </Card>
          ))}
        </div>
      </SectionShell>

      {/* BRIEF */}
      <SectionShell variant="light" labelledBy="brief-title">
        <SectionHead
          id="brief-title"
          kicker="Before you brief us"
          title="What a conference quotation needs"
          desc="Room count and language count move the price far more than delegate numbers do."
        />
        <ScopeTable caption="Information needed for a conference AV quotation in Istanbul" rows={BRIEF_ROWS} />
      </SectionShell>

      {/* FAQ */}
      <SectionShell variant="soft" labelledBy="faq-title">
        <SectionHead id="faq-title" kicker="FAQ" title="Conference AV questions" />
        <div className="max-w-4xl">
          <FaqList items={FAQ_ITEMS} />
        </div>
      </SectionShell>

      {/* SIBLINGS */}
      <SectionShell variant="light" labelledBy="siblings-title">
        <div className="sr-only" id="siblings-title">Related Sahneva pages</div>
        <SiblingLinks
          title="Related pages"
          intro="This page is the congress workflow. These cover the neighbouring needs without repeating it."
          links={SIBLING_LINKS}
        />
      </SectionShell>

      {/* CTA */}
      <SectionShell variant="ink" labelledBy="cta-title">
        <div className="sr-only" id="cta-title">Contact Sahneva about conference AV in Istanbul</div>
        <CtaBand
          title="Running a congress in Istanbul?"
          desc="Send the venue, the room list and the session programme. Room count and languages are what we price against."
          primary={{ href: "/en/contact", label: "Request a conference AV quote" }}
          secondary={{ href: WHATSAPP, label: "Message us on WhatsApp" }}
        />
      </SectionShell>
    </div>
  );
}

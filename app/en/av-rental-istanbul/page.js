// app/en/av-rental-istanbul/page.js
//
// KAPSAM SOZLESMESI — bu sayfa Istanbul'da AV EKIPMAN PAKETI + TEKNISYEN
// tedarikini anlatir: paket bilesenleri, dry hire / crewed ayrimi, salon
// olcegine gore eslestirme, teslim penceresi.
//
// Bu sayfaya YAZILMAZ:
//   - Kongre salonu is akisi (cevirmen, breakout, hibrit) -> /en/conference-av-rental-istanbul
//   - Uctan uca prodüksiyon yonetimi, mekan lojistigi -> /en/event-production-istanbul
//   - Turkiye geneli kategori spec tablolari -> /en/sound-light-rental, /en/led-screen-rental
// Spec detayi cogaltilmaz; ilgili kategori sayfasina link verilir.

import Image from "next/image";
import Link from "next/link";

import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { ORGANIZATION_ID } from "@/lib/seo/schemaIds";
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
const PATH = "/en/av-rental-istanbul";
const PAGE_URL = `${ORIGIN}${PATH}`;

const WHATSAPP = `https://wa.me/905453048671?text=${encodeURIComponent(
  "Hello, I need an AV rental quote for Istanbul. Venue: [venue], Date: [dd.mm.yyyy], Room: [ballroom/plenary], Guests: [xxx].",
)}`;

const PAGE_TITLE = "AV Rental Istanbul | Audio Visual Equipment Hire";
const PAGE_DESCRIPTION =
  "Audio visual rental in Istanbul: sound, lighting, LED screens, microphones, playback and livestream supplied as one package, dry hire or with technicians.";

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
        alt: "Audio visual equipment rental in Istanbul — sound, lighting and LED",
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

const HERO_IMAGE = "/img/ses-isik/ses-sistemi.webp";

const PACKAGE_PARTS = [
  {
    title: "Audio",
    intro: "Coverage sized to the room and the content, not to a package name.",
    items: [
      "Line array or point-source PA depending on room depth and ceiling height",
      "Digital mixing with a separate monitor path where the format needs one",
      "Playback, talkback and a recording feed when the session is being captured",
    ],
    href: "/en/sound-light-rental",
    hrefLabel: "Full sound system detail",
  },
  {
    title: "Microphones and wireless",
    intro:
      "The single most common cause of a visibly failed session, and the part most often under-specified.",
    items: [
      "Handheld, lavalier, headset and lectern gooseneck options per speaker role",
      "Wireless frequency coordination planned for the venue, not assumed",
      "Spare channels and a wired fallback on any mic that carries the session",
    ],
  },
  {
    title: "Lighting",
    intro: "Enough light for the camera and the room, without turning the stage into a concert.",
    items: [
      "Key and fill for presenters so faces read on camera and on screen",
      "Wash and colour for the room and set dressing",
      "DMX control with scenes pre-programmed against the run of show",
    ],
    href: "/en/sound-light-rental",
    hrefLabel: "Lighting equipment detail",
  },
  {
    title: "LED screens and projection",
    intro: "Screen size is decided by viewing distance and ceiling height before anything else.",
    items: [
      "Indoor LED walls in the pixel pitches that suit the closest viewer",
      "Side screens or confidence monitors where the main surface is content-only",
      "Projection where a venue's rigging or budget rules a LED wall out",
    ],
    href: "/en/led-screen-rental",
    hrefLabel: "LED screen specifications",
  },
  {
    title: "Playback and presentation control",
    intro: "The layer that decides whether the content on screen keeps up with the person talking.",
    items: [
      "Presentation switching with preview and programme separation",
      "Slide and video playback managed from a control position, not a laptop on a chair",
      "Redundant playback path for keynote-critical content",
    ],
  },
  {
    title: "Livestream and recording",
    intro: "Camera and encode as part of the same package, so nothing is left to a second supplier.",
    items: [
      "Single or multi-camera capture with a vision mix",
      "Encoding and delivery to the platform your team already uses",
      "Clean recording feed of programme output for post-event use",
    ],
  },
];

const HIRE_MODELS = [
  [
    "Dry hire",
    "Equipment only. You collect or we deliver, and your own technical team rigs and operates it. Suited to teams that tour with their own crew and just need local stock. Delivery window and return time are agreed in writing; the kit list is checked out and back in against it.",
  ],
  [
    "Delivered and installed",
    "We deliver, rig, test and hand over a working system, then return for de-rig. Your team operates during the event. The most common model for corporate meetings where the client has an in-house AV person but no crew or stock.",
  ],
  [
    "Crewed",
    "Equipment plus operators for the live window — audio engineer, lighting operator, video and presentation operator as the format requires. This is the model for anything with speakers, a run of show or a live stream, because the failure modes are operational rather than technical.",
  ],
];

const ROOM_TIERS = [
  ["Boardroom / small meeting", "Up to ~50 guests. Speech-only audio, a screen or single LED surface, two to four microphone channels. Usually delivered and installed rather than crewed."],
  ["Hotel ballroom", "~100–500 guests. Distributed PA for a wide, low room; presenter lighting; LED wall sized against ceiling height. Crewed for anything with a stage programme."],
  ["Plenary hall", "~500–2,000 guests. Line array with delay coverage, a full control position, side screens, and a presentation operator separate from the audio engineer."],
  ["Outdoor and courtyard", "Weather-rated enclosures, generator-backed distribution and higher-brightness display. Contingency for wind and rain is part of the plan, not an afterthought."],
];

const ISTANBUL_LOGISTICS = [
  [
    "Stock held in Istanbul",
    "Our warehouse is in the city, so an Istanbul booking is not a sub-hire routed through another supplier. That is what makes short-notice additions possible at all — and it is why a missing mic channel on the morning of a show is usually solvable.",
  ],
  [
    "Both sides of the city",
    "European and Anatolian side venues are served by the same crew and the same stock. Where a programme runs on both sides on one day, loads are staged separately rather than moved across the city between calls.",
  ],
  [
    "Delivery windows",
    "Central districts limit heavy-vehicle movement, so delivery slots are agreed against the venue's dock schedule. For hotel ballrooms this often means an overnight or early-morning install.",
  ],
  [
    "Route measured, not assumed",
    "Lift depth, corridor turns and door clearance cap the largest case, deck and panel that can reach the room. We confirm those before the kit list is finalised.",
  ],
];

const QUOTE_ROWS = [
  ["Venue and room", "The specific hall or ballroom. Ceiling height and room shape decide the audio and screen approach."],
  ["Date and access window", "Event date plus when the room is actually available for install and de-rig."],
  ["Audience and layout", "Headcount and seating — theatre, cabaret, standing. Coverage follows layout."],
  ["Programme", "Speeches, panel, awards, live music, video content. This sets the microphone count and the control scope."],
  ["Hire model", "Dry hire, delivered and installed, or crewed. If you are not sure, describe your own team and we will advise."],
  ["Streaming", "Whether the session is streamed or recorded, and to which platform."],
];

const FAQ_ITEMS = [
  {
    q: "What does an AV rental package in Istanbul actually include?",
    a: "At minimum: audio appropriate to the room, microphones for every speaking role, presenter lighting, a display surface, and the cabling and distribution behind them. Playback control, streaming and additional crew are added according to the programme. We quote each of those as separate lines so you can see what you are paying for.",
  },
  {
    q: "Can we rent equipment without technicians?",
    a: "Yes, dry hire is available. It suits teams that travel with their own crew. For anything with a live speaker programme we recommend at least a delivered-and-installed handover, because most visible failures at corporate events are operational rather than equipment faults.",
  },
  {
    q: "How is AV rental different from your sound and lighting rental page?",
    a: "The sound and lighting page is the country-wide category page with the equipment detail for those two disciplines. This page is the Istanbul supply model: the whole AV package — audio, microphones, lighting, LED, playback and streaming — from one supplier, with crew and delivery planned for this city.",
  },
  {
    q: "Do you support hybrid and streamed sessions?",
    a: "Yes. Camera, vision mixing, encoding and a clean recording feed are supplied as part of the same package. If your conference has interpretation, breakout rooms or a session-management workflow, the conference AV page covers that specifically.",
  },
  {
    q: "How quickly can you respond to a change on site?",
    a: "Because stock is held in Istanbul rather than sub-hired, additions on the day are often possible. It depends on what is already out on other jobs — we will tell you honestly at the time rather than promise and miss.",
  },
  {
    q: "Do you provide AV outside Istanbul?",
    a: "Yes. Istanbul is our base, but we deliver nationwide. For events elsewhere, start from the country-level service pages or the regional rental page and tell us the city.",
  },
];

const SIBLING_LINKS = [
  {
    href: "/en/conference-av-rental-istanbul",
    label: "Conference AV Rental Istanbul",
    desc: "Congress and conference rooms: simultaneous interpretation, breakout scaling, speaker and presentation management, hybrid delivery.",
  },
  {
    href: "/en/event-production-istanbul",
    label: "Event Production Istanbul",
    desc: "If you need the whole event run rather than the equipment supplied — venue logistics, site management and crew coordination.",
  },
  {
    href: "/en/sound-light-rental",
    label: "Sound & Lighting Rental",
    desc: "The country-wide category page with the detailed audio and lighting equipment specifications.",
  },
  {
    href: "/en/led-screen-rental",
    label: "LED Screen Rental",
    desc: "Pixel pitches, indoor and outdoor panel options and sizing guidance for LED walls.",
  },
];

/* ================== SCHEMA ================== */

function StructuredData() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE_URL}#service`,
    name: "AV Rental in Istanbul",
    alternateName: "Audio Visual Equipment Rental Istanbul",
    serviceType: "Audio visual equipment rental with technical crew",
    description: PAGE_DESCRIPTION,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: {
      "@type": "City",
      name: "Istanbul",
      containedInPlace: { "@type": "Country", name: "Türkiye" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AV rental package components",
      itemListElement: PACKAGE_PARTS.map((part) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: part.title, description: part.intro },
      })),
    },
    url: PAGE_URL,
  };


  return (
    <>
      <JsonLd data={serviceSchema} />
    </>
  );
}

/* ================== PAGE ================== */

export default function AvRentalIstanbulPage() {
  const breadcrumbItems = [
    { name: "Home", url: `${ORIGIN}/en` },
    { name: "Services", url: `${ORIGIN}/en/services` },
    { name: "AV Rental Istanbul", url: PAGE_URL },
  ];

  return (
    <div id="main">
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={ORIGIN} />
      <StructuredData />

      {/* HERO */}
      <section className="relative overflow-hidden" aria-labelledby="av-hero-title">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={HERO_IMAGE}
            alt="Audio visual equipment rig prepared for an event in Istanbul"
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
            <span className="text-white">AV Rental Istanbul</span>
          </nav>

          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
            <span className="h-2 w-2 rounded-full bg-violet-400" aria-hidden="true" />
            Stock held in Istanbul — not sub-hired
          </p>

          <h1
            id="av-hero-title"
            className="mt-6 max-w-4xl text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-white"
          >
            AV Rental in Istanbul
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/80">
            Audio, microphones, lighting, LED, playback and livestream from one supplier — with the
            technicians to run them. Take it as dry hire, as a delivered and installed system, or
            fully crewed for the live window.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/en/contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-white px-8 text-sm font-black text-violet-900 transition hover:bg-violet-50"
            >
              Request an AV quote
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 text-sm font-black text-white transition hover:bg-white/15"
            >
              Send your kit list
            </a>
          </div>
        </div>
      </section>

      {/* PACKAGE */}
      <SectionShell variant="light" labelledBy="package-title">
        <SectionHead
          id="package-title"
          kicker="What is in the package"
          title="Six parts of an AV package, quoted as separate lines"
          desc="You should be able to see what each element costs and drop the ones you do not need. Where a discipline has deeper specification, we link to the category page rather than repeat it here."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGE_PARTS.map((part) => (
            <div key={part.title} className="flex flex-col">
              <BulletCard title={part.title} intro={part.intro} items={part.items} />
              {part.href ? (
                <Link
                  href={part.href}
                  prefetch={false}
                  className="mt-3 inline-flex text-sm font-bold text-violet-700 hover:text-violet-900"
                >
                  {part.hrefLabel} →
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </SectionShell>

      {/* HIRE MODELS */}
      <SectionShell variant="ink" labelledBy="models-title">
        <SectionHead
          id="models-title"
          dark
          kicker="How you take it"
          title="Dry hire, installed, or crewed"
          desc="Three commercial models for the same stock. The right one depends on what your own team can cover."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {HIRE_MODELS.map(([title, body]) => (
            <Card key={title} dark>
              <h3 className="text-lg font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{body}</p>
            </Card>
          ))}
        </div>
      </SectionShell>

      {/* ROOM TIERS */}
      <SectionShell variant="soft" labelledBy="rooms-title">
        <SectionHead
          id="rooms-title"
          kicker="Sizing"
          title="Matching the package to the room"
          desc="A rough guide to what changes as the room grows. Final specification comes from the site survey."
        />
        <ScopeTable caption="AV package guidance by room size in Istanbul" rows={ROOM_TIERS} />
      </SectionShell>

      {/* LOGISTICS */}
      <SectionShell variant="light" labelledBy="logistics-title">
        <SectionHead
          id="logistics-title"
          kicker="Istanbul delivery"
          title="Why the city changes the supply plan"
          desc="Equipment is the easy half. Getting it into the room on schedule is the half that goes wrong."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {ISTANBUL_LOGISTICS.map(([title, body]) => (
            <Card key={title}>
              <h3 className="text-lg font-black text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
            </Card>
          ))}
        </div>
      </SectionShell>

      {/* QUOTE INPUTS */}
      <SectionShell variant="soft" labelledBy="quote-title">
        <SectionHead
          id="quote-title"
          kicker="Getting a quote"
          title="What we need from you"
          desc="With these six, the quotation is itemised and close to final."
        />
        <ScopeTable caption="Information needed for an Istanbul AV rental quotation" rows={QUOTE_ROWS} />
      </SectionShell>

      {/* FAQ */}
      <SectionShell variant="light" labelledBy="faq-title">
        <SectionHead id="faq-title" kicker="FAQ" title="AV rental questions" />
        <div className="max-w-4xl">
          <FaqList items={FAQ_ITEMS} />
        </div>
      </SectionShell>

      {/* SIBLINGS */}
      <SectionShell variant="soft" labelledBy="siblings-title">
        <div className="sr-only" id="siblings-title">Related Sahneva pages</div>
        <SiblingLinks
          title="Related pages"
          intro="This page is about supplying the AV package in Istanbul. These cover the adjacent needs without repeating it."
          links={SIBLING_LINKS}
        />
      </SectionShell>

      {/* CTA */}
      <SectionShell variant="ink" labelledBy="cta-title">
        <div className="sr-only" id="cta-title">Contact Sahneva about AV rental in Istanbul</div>
        <CtaBand
          title="Need AV for an Istanbul event?"
          desc="Send the venue, the date and the programme. You will get an itemised package back, not a single lump-sum number."
          primary={{ href: "/en/contact", label: "Request an AV quote" }}
          secondary={{ href: WHATSAPP, label: "Message us on WhatsApp" }}
        />
      </SectionShell>
    </div>
  );
}

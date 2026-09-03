import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import {
  BulletCard,
  Card,
  CtaBand,
  FaqList,
  ScopeTable,
  SectionHead,
  SectionShell,
  SiblingLinks,
} from "@/components/en/LandingKit";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { AI_PREVIEW_ROBOTS, SITE_URL } from "@/lib/seo/seoConfig";
import { ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";

export const revalidate = 86400;

const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div
      className="flex h-64 items-center justify-center rounded-3xl bg-slate-100"
      role="status"
      aria-label="Loading venue gallery"
    >
      <div
        className="h-11 w-11 animate-spin rounded-full border-4 border-slate-200 border-b-violet-600"
        aria-hidden="true"
      />
      <span className="sr-only">Loading venue gallery...</span>
    </div>
  ),
});

const ORIGIN = SITE_URL;
const PATH = "/en/hangar-event-venue-istanbul";
const PAGE_URL = `${ORIGIN}${PATH}`;
const IMAGE_BASE =
  "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi";

const PAGE_TITLE = "Event Venue Istanbul | Fully Equipped Hangar";
const PAGE_DESCRIPTION =
  "A fully equipped Hangar event venue in Istanbul with a 90 × 30 m hall, 10 m ceiling, installed stage, P1.9 LED, sound, lighting and flexible layouts.";

const HERO_IMAGE = {
  src: `${IMAGE_BASE}/kapali-alan-protokol-salon-led-ekran-genis-aci.webp`,
  width: 1600,
  height: 739,
  alt: "Wide view of Millet Bahçesi Hangar configured with an LED stage for a protocol event in Istanbul",
};

const VIDEO = {
  id: "EUhOMl_RyyU",
  name: "Millet Bahçesi Hangar venue promotional video",
  description:
    "A promotional video presenting the Hangar event venue at Atatürk Havalimanı Millet Bahçesi in Istanbul.",
  url: "https://youtu.be/EUhOMl_RyyU",
  embedUrl: "https://www.youtube-nocookie.com/embed/EUhOMl_RyyU",
  thumbnail: "https://i.ytimg.com/vi/EUhOMl_RyyU/hqdefault.jpg",
  uploadDate: "2026-06-26T02:31:23-07:00",
  duration: "PT1M3S",
};

const WHATSAPP = `https://wa.me/905453048671?text=${encodeURIComponent(
  "Hello, I would like to plan an event at Millet Bahçesi Hangar in Istanbul. Date: [dd.mm.yyyy], Format: [corporate/congress/concert/private/fair], Guests: [xxx], Layout: [theatre/banquet/standing/custom].",
)}`;

const VENUE_FACTS = [
  ["Hall footprint", "90 × 30 m"],
  ["Ceiling height", "10 m"],
  ["Location", "Atatürk Havalimanı Millet Bahçesi, Istanbul"],
  [
    "Starting point",
    "Installed technical setup or a reconfigured event layout",
  ],
];

const READY_INFRASTRUCTURE = [
  {
    title: "Installed technical core",
    intro:
      "The hall already has the main production layers that normally consume the first part of a venue build.",
    items: [
      "Sound and lighting systems ready to be planned into the event",
      "Scaffold-supported stage structure",
      "P1.9 indoor LED screen for close-viewing event content",
    ],
  },
  {
    title: "Furniture and room setup",
    intro:
      "Tables and chairs are available as a practical starting point, while the floor remains adaptable to the event format.",
    items: [
      "Seated corporate and protocol layouts",
      "Dining, gala and private-event arrangements",
      "Open-floor or mixed layouts for launches, fairs and live formats",
    ],
  },
  {
    title: "Flexible support spaces",
    intro:
      "The venue combines a large clear-span event hall with flexible areas and offices for production and guest flow.",
    items: [
      "Production, organiser and backstage working areas",
      "Layout planning around audience flow and sightlines",
      "Technical support for adapting the installed setup",
    ],
  },
  {
    title: "Access and event-day practicality",
    intro:
      "Its position at Atatürk Havalimanı Millet Bahçesi supports large-format event planning without losing the basics guests and crews need.",
    items: [
      "Easy access and parking",
      "A venue proposition centred on safety and comfort",
      "One plan for venue, stage, LED, audio, lighting and room layout",
    ],
  },
];

const EVENT_FORMATS = [
  {
    title: "Corporate events",
    text: "Brand launches, company meetings, training programmes, seminars and networking events with a room plan built around content and guest flow.",
  },
  {
    title: "Congresses and summits",
    text: "Large plenary programmes that need a legible LED canvas, controlled audio coverage, presenter focus and a practical technical-control position.",
  },
  {
    title: "Concerts and stage shows",
    text: "Live formats that can start from the installed scaffold-supported stage, sound, lighting and LED infrastructure, then scale to the show brief.",
  },
  {
    title: "Private and gala events",
    text: "Weddings, engagement celebrations, gala nights, VIP invitations and special celebrations with a custom dining or guest layout.",
  },
  {
    title: "Fairs and exhibitions",
    text: "Art exhibitions, product presentation areas and pop-up concepts that use the hall as a flexible visitor and display environment.",
  },
  {
    title: "Multi-format productions",
    text: "Programmes that combine a stage show, seated session, reception, catering and exhibition areas within one venue operation.",
  },
];

const DOCUMENTED_SETUP = [
  ["Scaffold stage", "16 × 8 m"],
  ["Main P1.9 LED", "16 × 6 m"],
  ["Side LED screens", "Four screens, each 4 × 2.5 m"],
  ["Seating used", "2,500 chairs"],
  ["Hospitality operation", "Planned for 3,000 people"],
  ["Main audio system", "24 JBL VTX A12 line-array elements"],
];

const WORKFLOW = [
  {
    title: "1. Define the event",
    body: "Date, audience, programme, seating style, content, catering and arrival flow set the real room brief.",
  },
  {
    title: "2. Choose the starting point",
    body: "Use the installed stage and technical core where it fits, or reconfigure the hall around a custom production design.",
  },
  {
    title: "3. Confirm the technical plan",
    body: "Stage geometry, LED content, audio coverage, lighting positions, control, furniture and support spaces are signed off together.",
  },
  {
    title: "4. Build and operate",
    body: "Installation, testing, rehearsal, live technical operation and the post-event reset follow one written production schedule.",
  },
];

const GALLERY_IMAGES = [
  {
    src: HERO_IMAGE.src,
    alt: HERO_IMAGE.alt,
    caption:
      "Wide hall view from a documented sports-sector protocol event; the configuration shown is an event example, not a fixed venue package.",
  },
  {
    src: `${IMAGE_BASE}/istanbul-amator-futbol-kulupleri-led-ekran-sahne-kurulumu.webp`,
    alt: "Millet Bahçesi Hangar main stage and LED screen during a sports-sector protocol programme",
    caption:
      "A completed event configuration showing the relationship between the main stage, LED canvas, lighting and audience area.",
  },
  {
    src: `${IMAGE_BASE}/protokol-etkinligi-salon-yemek-duzeni.webp`,
    alt: "Dining and protocol seating layout facing the LED stage inside Millet Bahçesi Hangar",
    caption:
      "One example of a dining and protocol layout planned around screen sightlines and service circulation.",
  },
  {
    src: `${IMAGE_BASE}/kurumsal-etkinlik-led-ekran-yan-ekran-kurgusu.webp`,
    alt: "Main and side LED screens providing long-room sightlines inside the Hangar venue",
    caption:
      "Side screens were added for this event so live content remained visible across the long room.",
  },
  {
    src: `${IMAGE_BASE}/amator-futbol-kulupleri-destek-programi-ana-sahne.webp`,
    alt: "Ready event stage with LED screen and lectern inside Millet Bahçesi Hangar",
    caption:
      "The documented main-stage arrangement combined LED, a presenter position, steps and stage lighting.",
  },
  {
    src: `${IMAGE_BASE}/teknik-reji-canli-kamera-aktarim-kurulumu.webp`,
    alt: "Technical control position for live camera and LED content at the Hangar event",
    caption:
      "The live camera feed, screen content, audio and show cues were coordinated from the technical-control position.",
  },
  {
    src: `${IMAGE_BASE}/sahne-podyum-basamak-platform-kurulumu.webp`,
    alt: "Scaffold stage platform, steps and lectern detail in Millet Bahçesi Hangar",
    caption:
      "A closer view of the scaffold-supported stage, platform surface, steps and presenter access used for this programme.",
  },
  {
    src: `${IMAGE_BASE}/truss-isik-sistemi-sahne-arka-kurulum-detayi.webp`,
    alt: "Backstage truss, lighting and technical access detail inside Millet Bahçesi Hangar",
    caption:
      "Behind the visible stage, truss, lighting and service access were organised as part of the event build.",
  },
];

const QUOTE_ROWS = [
  [
    "Date and schedule",
    "Access, preparation, rehearsal, doors, show time and venue reset.",
  ],
  [
    "Event format",
    "Corporate meeting, launch, congress, concert, gala, private event, fair or a mixed programme.",
  ],
  [
    "Audience and layout",
    "Expected guest count plus theatre, banquet, standing, exhibition or custom arrangement.",
  ],
  [
    "Stage and content",
    "Presenter, panel, performance, live camera, playback and the required LED content format.",
  ],
  ["Hospitality", "Reception, catering, dining and service-flow requirements."],
  [
    "What should change",
    "Which installed elements can remain and which parts need a custom layout or technical build.",
  ],
];

const FAQ_ITEMS = [
  {
    q: "Where is the Hangar event venue in Istanbul?",
    a: "The venue is at Atatürk Havalimanı Millet Bahçesi (Atatürk Airport National Garden) in Istanbul. The event brief should still include the arrival plan, access times and any supplier movements so these can be coordinated before build day.",
  },
  {
    q: "What are the hall dimensions?",
    a: "The main hall is 90 × 30 metres with a 10-metre ceiling. Final stage, audience and support-area dimensions are set against the chosen event layout rather than treated as one standard plan.",
  },
  {
    q: "Does the venue already have stage, LED, sound and lighting?",
    a: "Yes. The venue has a scaffold-supported stage, P1.9 LED screen, sound and lighting infrastructure, plus tables and chairs ready to plan around. The exact production scope, operators, dimensions, and any additional equipment are confirmed in the event proposal.",
  },
  {
    q: "Can the installed setup be changed?",
    a: "Yes. The ready setup can shorten preparation when it matches the brief, but the hall can also be reconfigured around a custom stage, screen, seating, dining, exhibition or guest-flow plan.",
  },
  {
    q: "Is 2,500 the venue's permanent seating capacity?",
    a: "No. The 2,500-chair layout belongs to one documented protocol-event configuration. It is not presented as a permanent or maximum venue capacity. Safe attendance and layout are confirmed for each event plan.",
  },
  {
    q: "What information is needed for an accurate venue proposal?",
    a: "Send the event date, programme format, expected audience, preferred layout, stage and screen content, catering needs and the elements you want to retain or change. Those details define the venue and production scope together.",
  },
];

const SIBLING_LINKS = [
  {
    href: "/en/event-production-istanbul",
    label: "Event Production Istanbul",
    desc: "For programmes at this or another Istanbul venue that need end-to-end technical production and site management.",
  },
  {
    href: "/en/corporate-events",
    label: "Corporate Event Production",
    desc: "Planning for launches, meetings, awards, conferences and company programmes across Turkey.",
  },
  {
    href: "/en/led-screen-rental",
    label: "LED Screen Rental",
    desc: "P1.9 indoor LED, screen geometry, processors, content checks and on-site video operation.",
  },
  {
    href: "/en/sound-light-rental",
    label: "Sound and Lighting Rental",
    desc: "Audio coverage, show lighting, control and technical crew when the brief extends beyond the installed base.",
  },
];

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
        url: `${ORIGIN}${HERO_IMAGE.src}`,
        width: HERO_IMAGE.width,
        height: HERO_IMAGE.height,
        alt: HERO_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Sahneva`,
    description: PAGE_DESCRIPTION,
    images: [`${ORIGIN}${HERO_IMAGE.src}`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

function StructuredData() {
  const primaryImageId = `${PAGE_URL}#primaryimage`;
  const venueId = `${PAGE_URL}#venue`;
  const serviceId = `${PAGE_URL}#service`;
  const videoId = `${PAGE_URL}#video`;
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;

  const imageObjects = GALLERY_IMAGES.map((image, index) => ({
    "@type": "ImageObject",
    "@id": index === 0 ? primaryImageId : `${PAGE_URL}#image-${index + 1}`,
    url: `${ORIGIN}${image.src}`,
    contentUrl: `${ORIGIN}${image.src}`,
    caption: image.caption,
    ...(index === 0
      ? { width: HERO_IMAGE.width, height: HERO_IMAGE.height }
      : {}),
    inLanguage: "en-US",
  }));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        isPartOf: { "@id": WEBSITE_ID },
        about: [{ "@id": venueId }, { "@id": serviceId }],
        primaryImageOfPage: { "@id": primaryImageId },
        breadcrumb: { "@id": breadcrumbId },
        video: { "@id": videoId },
        inLanguage: "en-US",
      },
      {
        "@type": "EventVenue",
        "@id": venueId,
        name: "Millet Bahçesi Hangar",
        description:
          "A reconfigurable Istanbul event venue with a 90 × 30 m hall, 10 m ceiling and installed event-production infrastructure.",
        url: PAGE_URL,
        image: GALLERY_IMAGES.map((image) => `${ORIGIN}${image.src}`),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Istanbul",
          addressCountry: "TR",
        },
        containedInPlace: {
          "@type": "Place",
          name: "Atatürk Havalimanı Millet Bahçesi",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Istanbul",
            addressCountry: "TR",
          },
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "90 × 30 m event hall",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "10 m ceiling height",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "P1.9 indoor LED screen",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Scaffold-supported stage",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Sound system",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Lighting system",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Tables and chairs",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Parking",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Flexible spaces and offices",
            value: true,
          },
        ],
        subjectOf: { "@id": videoId },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Hangar event venue and technical production in Istanbul",
        serviceType: "Event venue hire and on-site technical production",
        description: PAGE_DESCRIPTION,
        url: PAGE_URL,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: {
          "@type": "City",
          name: "Istanbul",
          containedInPlace: { "@type": "Country", name: "Turkiye" },
        },
        audience: {
          "@type": "BusinessAudience",
          name: "Event organisers, agencies, corporate teams and production companies",
        },
      },
      {
        "@type": "VideoObject",
        "@id": videoId,
        name: VIDEO.name,
        description: VIDEO.description,
        uploadDate: VIDEO.uploadDate,
        duration: VIDEO.duration,
        thumbnailUrl: [VIDEO.thumbnail],
        contentUrl: VIDEO.url,
        embedUrl: VIDEO.embedUrl,
        publisher: { "@id": ORGANIZATION_ID },
        about: { "@id": venueId },
        inLanguage: "en",
      },
      ...imageObjects,
    ],
  };

  return <JsonLd id="hangar-venue-json-ld" data={graph} />;
}

export default function HangarEventVenueIstanbulPage() {
  const breadcrumbItems = [
    { name: "Home", url: `${ORIGIN}/en` },
    { name: "Event Venues", url: `${ORIGIN}/en/event-production-istanbul` },
    { name: "Hangar Event Venue Istanbul", url: PAGE_URL },
  ];

  return (
    <div id="main">
      <BreadcrumbJsonLd
        items={breadcrumbItems}
        baseUrl={ORIGIN}
        id={`${PAGE_URL}#breadcrumb`}
      />
      <StructuredData />

      <section
        className="relative overflow-hidden"
        aria-labelledby="hangar-hero-title"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={HERO_IMAGE.src}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={82}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#07111f]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/72 to-[#07111f]/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pb-20 pt-28 md:pb-24 md:pt-32">
          <nav aria-label="Breadcrumb" className="mb-7 text-sm text-white/70">
            <Link href="/en" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-white/40">/</span>
            <Link
              href="/en/event-production-istanbul"
              className="hover:text-white"
            >
              Istanbul Venues
            </Link>
            <span className="mx-2 text-white/40">/</span>
            <span className="text-white">Hangar</span>
          </nav>

          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur">
            <span
              className="h-2 w-2 rounded-full bg-violet-400"
              aria-hidden="true"
            />
            Atatürk Havalimanı Millet Bahçesi, Istanbul
          </p>

          <h1
            id="hangar-hero-title"
            className="mt-6 max-w-5xl text-4xl font-black leading-[1.06] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            A Fully Equipped Hangar Event Venue in Istanbul
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            A 90 × 30 m hall with a 10 m ceiling, ready sound and lighting, a
            scaffold-supported stage, P1.9 LED screen, tables and chairs. Use
            the installed setup when speed matters, or reconfigure the venue
            around a custom event plan.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/en/contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-white px-8 text-sm font-black text-violet-900 transition hover:bg-violet-50"
            >
              Request venue availability
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 text-sm font-black text-white transition hover:bg-white/15"
            >
              Brief the event team
            </a>
          </div>

          <p className="mt-7 max-w-3xl rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-xs leading-relaxed text-white/72 backdrop-blur">
            The background image shows one completed sports-sector
            protocol-event configuration. Event dimensions and audience layouts
            are planned separately for each brief.
          </p>
        </div>
      </section>

      <SectionShell variant="light" labelledBy="venue-overview-title">
        <SectionHead
          id="venue-overview-title"
          kicker="Event venue Istanbul"
          title="Ready-built when speed matters. Reconfigurable when the brief demands it."
          desc="The practical advantage is not just an empty hall. The technical and furniture base is already present, while the room can still be reshaped around audience, content and event flow."
        />
        <ScopeTable
          caption="Millet Bahçesi Hangar venue facts"
          rows={VENUE_FACTS}
        />
      </SectionShell>

      <SectionShell variant="soft" labelledBy="infrastructure-title">
        <SectionHead
          id="infrastructure-title"
          kicker="Ready infrastructure"
          title="A production starting point, not a rigid package"
          desc="Installed systems can reduce first-day setup, but every event still receives its own technical, room and guest-flow plan."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {READY_INFRASTRUCTURE.map((item) => (
            <BulletCard
              key={item.title}
              title={item.title}
              intro={item.intro}
              items={item.items}
            />
          ))}
        </div>
      </SectionShell>

      <SectionShell variant="ink" labelledBy="formats-title">
        <SectionHead
          id="formats-title"
          dark
          kicker="Venue formats"
          title="One large hall, several event formats"
          desc="The hall can move between stage-led, seated, dining and exhibition uses instead of forcing every organiser into the same floor plan."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {EVENT_FORMATS.map((format) => (
            <Card key={format.title} dark>
              <h3 className="text-xl font-black text-white">{format.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {format.text}
              </p>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell variant="light" labelledBy="gallery-title">
        <SectionHead
          id="gallery-title"
          kicker="Real venue images"
          title="See how the Hangar works at event scale"
          desc="These photographs document a sports-sector protocol event produced in the hall. They show the space and technical execution; they do not represent a fixed package, permanent capacity or endorsement."
        />
        <CaseGallery
          images={GALLERY_IMAGES}
          visibleCount={6}
          layout="featured"
          locale="en"
        />
      </SectionShell>

      <SectionShell variant="ink" labelledBy="video-title">
        <SectionHead
          id="video-title"
          dark
          kicker="Venue promotional video"
          title="Walk through the Hangar before you brief it"
          desc="This Sahneva venue video gives organisers a first visual read of the building and its event potential. A technical layout is then prepared for the actual programme."
        />
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-2 shadow-2xl shadow-black/30">
          <LazyVideoEmbed
            locale="en"
            videoId={VIDEO.id}
            title={VIDEO.name}
            thumbnailUrl={VIDEO.thumbnail}
            className="rounded-[1.6rem]"
          />
        </div>
        <p className="mx-auto mt-4 max-w-4xl text-center text-sm leading-relaxed text-white/60">
          Video: “Hangar”, published by Sahneva Organizasyon on YouTube.
        </p>
      </SectionShell>

      <SectionShell variant="soft" labelledBy="documented-setup-title">
        <SectionHead
          id="documented-setup-title"
          kicker="Documented event example"
          title="What one protocol-event configuration used"
          desc="This is proof from one completed build inside the hall. It demonstrates what was delivered for that brief; it is not a statement of the venue's permanent dimensions, included inventory or maximum capacity."
        />
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ScopeTable
            caption="Technical measurements from one completed Millet Bahçesi Hangar event"
            rows={DOCUMENTED_SETUP}
          />
          <aside className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-800">
              Important distinction
            </p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
              A case setup is not a fixed capacity claim
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              The 16 × 8 m stage, 16 × 6 m main screen, four side screens,
              2,500-chair layout, 3,000-person hospitality operation and 24 JBL
              VTX A12 elements all belonged to one documented event. The next
              production may use a different layout, scale and equipment plan.
            </p>
            <Link
              href="/en/projects/millet-bahcesi-hangar-event-production"
              prefetch={false}
              className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-violet-900"
            >
              Read the event case study
            </Link>
          </aside>
        </div>
      </SectionShell>

      <SectionShell variant="light" labelledBy="workflow-title">
        <SectionHead
          id="workflow-title"
          kicker="Planning process"
          title="From venue enquiry to show-ready room"
          desc="Venue availability and technical production are treated as one connected decision, so the chosen layout is feasible before the details multiply."
        />
        <ol className="grid list-none gap-5 p-0 md:grid-cols-2 lg:grid-cols-4">
          {WORKFLOW.map((step) => (
            <li key={step.title}>
              <Card className="h-full">
                <h3 className="text-lg font-black text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell variant="soft" labelledBy="brief-title">
        <SectionHead
          id="brief-title"
          kicker="Get an accurate proposal"
          title="The six details that define the venue plan"
          desc="A guest number alone is not enough. Send these together and the proposal can separate what is ready, what must change and what needs to be added."
        />
        <ScopeTable
          caption="Information needed for a Hangar event venue proposal"
          rows={QUOTE_ROWS}
        />
      </SectionShell>

      <SectionShell variant="light" labelledBy="faq-title">
        <div className="mx-auto max-w-4xl">
          <SectionHead
            id="faq-title"
            kicker="Questions before booking"
            title="Hangar event venue FAQ"
            desc="Confirmed venue facts, the adaptable setup and the boundary between a past case and a future event plan."
          />
          <FaqList items={FAQ_ITEMS} />
        </div>
      </SectionShell>

      <SectionShell variant="soft" labelledBy="related-title">
        <SiblingLinks
          title="Related production services"
          intro="Use this page when the Hangar itself is part of the brief. Use these services when the event or equipment scope comes first."
          links={SIBLING_LINKS}
        />
      </SectionShell>

      <SectionShell variant="ink" labelledBy="hangar-cta-title">
        <div id="hangar-cta-title">
          <CtaBand
            title="Check the date, then shape the room"
            desc="Send the event date, format, guest estimate and preferred layout. We will separate the ready venue base from the custom production scope in the proposal."
            primary={{
              href: "/en/contact",
              label: "Request venue availability",
            }}
            secondary={{ href: WHATSAPP, label: "Send the event brief" }}
          />
        </div>
      </SectionShell>
    </div>
  );
}

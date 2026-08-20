// app/en/page.js

import { YEARS_OF_EXPERIENCE } from "@/lib/experience";
import dynamic from "next/dynamic";
import Link from "next/link";

import HeroSection from "@/components/HeroSection";
import HeroBelow from "@/components/HeroBelow";
import { HERO_FEATURES_EN } from "@/lib/heroFeatures";

import ServicesTabs from "@/components/ServicesTabs";
import CorporateEvents from "@/components/CorporateEvents";
import CorporateIntro from "@/components/CorporateIntro";
import TechCapabilities from "@/components/TechCapabilities";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyInternationalClients from "@/components/en/WhyInternationalClients";
import ProductionCapabilities from "@/components/en/ProductionCapabilities";
import DeferredHydration from "@/components/DeferredHydration.client";
import JsonLd from "@/components/seo/JsonLd";

import { buildCanonical, buildAlternateLanguages, getOgImageUrl } from "@/lib/seo/seoConfig";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import { FAQ_ITEMS_EN } from "@/lib/faqData";
import { PODIUM_UNIT_PRICES } from "@/lib/pricing";
import { CORPORATE_EVENTS, GOOGLE_RATING, GOOGLE_REVIEW_COUNT_DISPLAY, PROJECTS_COMPLETED, PROVINCES_COUNT, TECHNICAL_TEAM_SIZE, setupDurationText } from "@/lib/stats";

/* ================== ISR ================== */
export const revalidate = 3600;

/* ================== Dynamic components ================== */
const ProjectsGallery = dynamic(() => import("@/components/ProjectsGallery"), {
  loading: () => (
    <div
      className="flex justify-center items-center h-64"
      role="status"
      aria-label="Loading gallery"
    >
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
        aria-hidden="true"
      />
      <span className="sr-only">Loading gallery...</span>
    </div>
  ),
});

const Faq = dynamic(() => import("@/components/Faq"), {
  loading: () => (
    <div
      className="flex justify-center items-center h-32"
      role="status"
      aria-label="Loading FAQ"
    >
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
        aria-hidden="true"
      />
      <span className="sr-only">Loading FAQ...</span>
    </div>
  ),
});

function SectionLoading({ label, height = "h-48" }) {
  return (
    <div
      className={`flex ${height} items-center justify-center`}
      role="status"
      aria-label={label}
    >
      <div
        className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

const EN_HOME_URL = `${BASE_SITE_URL}/en`;
const WEBPAGE_ID = `${EN_HOME_URL}#webpage`;
const SERVICE_ID = `${EN_HOME_URL}#primary-service`;
const CATALOG_ID = `${EN_HOME_URL}#catalog`;
const FAQ_ID = `${EN_HOME_URL}#faq`;
const HERO_IMAGE_ID = `${EN_HOME_URL}#hero-image`;
const OG_IMAGE_ID = `${EN_HOME_URL}#og-image`;
const PRICING_DISCLAIMER =
  "Prices vary by city, duration, area, installation and equipment. Contact us for a precise quote.";

const ogUrl = getOgImageUrl?.() ?? `${BASE_SITE_URL}/img/og/sahneva-og.webp`;

const HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": WEBPAGE_ID,
      url: EN_HOME_URL,
      name: "Stage, LED Wall, Sound & Lighting Rentals | Nationwide Türkiye | Sahneva",
      description:
        "Discover professional stage, podium, LED wall, sound and lighting rental solutions with Sahneva. Istanbul-based, fast installation across Türkiye.",
      inLanguage: "en-US",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORGANIZATION_ID },
      primaryImageOfPage: { "@id": HERO_IMAGE_ID },
    },

    {
      "@type": "ImageObject",
      "@id": HERO_IMAGE_ID,
      contentUrl: `${BASE_SITE_URL}/img/hero-bg.webp`,
      width: 1600,
      height: 900,
    },
    {
      "@type": "ImageObject",
      "@id": OG_IMAGE_ID,
      contentUrl: ogUrl,
      width: 1200,
      height: 630,
    },

    {
      "@type": "OfferCatalog",
      "@id": CATALOG_ID,
      name: "Event Equipment Rental Catalogue",
      url: EN_HOME_URL,
      itemListElement: [
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/en/stage-rental`,
          itemOffered: {
            "@type": "Service",
            name: "Podium Rental",
            url: `${BASE_SITE_URL}/en/stage-rental`,
            image: `${BASE_SITE_URL}/img/hizmet-podyum.webp`,
            description: `Modular podium and stage rental service. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: PODIUM_UNIT_PRICES.platformSqmWeek,
            priceCurrency: "TRY",
            unitText: "m²",
            unitCode: "MTK",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: 1,
              unitCode: "MTK",
            },
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/en/services#led`,
          itemOffered: {
            "@type": "Service",
            name: "LED Wall Rental",
            url: `${BASE_SITE_URL}/en/services#led`,
            image: `${BASE_SITE_URL}/img/hizmet-led-ekran.webp`,
            description: `Indoor/outdoor LED wall rental. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 1800,
            priceCurrency: "TRY",
            unitText: "m²",
            unitCode: "MTK",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: 1,
              unitCode: "MTK",
            },
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/en/tent-rental`,
          itemOffered: {
            "@type": "Service",
            name: "Event Tent Rental",
            url: `${BASE_SITE_URL}/en/tent-rental`,
            description: `Tent rental for events and activations. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: 6000,
            maxPrice: 800000,
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/en/table-chair-rental`,
          itemOffered: {
            "@type": "Service",
            name: "Chair Rental",
            url: `${BASE_SITE_URL}/en/table-chair-rental`,
            description: `Chair rental for events. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 250,
            priceCurrency: "TRY",
            unitText: "unit",
            unitCode: "C62",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: 1,
              unitCode: "C62",
            },
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/en/table-chair-rental`,
          itemOffered: {
            "@type": "Service",
            name: "Table Rental",
            url: `${BASE_SITE_URL}/en/table-chair-rental`,
            description: `Table rental for events. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: 1000,
            maxPrice: 2000,
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/en/stage-rental`,
          itemOffered: {
            "@type": "Service",
            name: "Stage Rental",
            url: `${BASE_SITE_URL}/en/stage-rental`,
            image: `${BASE_SITE_URL}/img/hizmet-sahne.webp`,
            description: `Stage rental for concerts and events. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: 10000,
            maxPrice: 200000,
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/en/sound-light-rental`,
          itemOffered: {
            "@type": "Service",
            name: "Sound & Lighting Systems",
            url: `${BASE_SITE_URL}/en/sound-light-rental`,
            description: `Sound and lighting systems rental. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: 10000,
            maxPrice: 300000,
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/en/services`,
          itemOffered: {
            "@type": "Service",
            name: "Istanbul Logistics",
            url: `${BASE_SITE_URL}/en/services`,
            description: `Istanbul logistics service. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: 7000,
            priceCurrency: "TRY",
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
      ],
    },

    {
      "@type": "Service",
      "@id": SERVICE_ID,
      name: "Event Equipment Rental",
      description:
        "Stage, podium, LED wall, sound-light systems and tent rental across Türkiye. Setup, technical operation and dismantling included.",
      url: EN_HOME_URL,
      areaServed: { "@type": "Country", name: "Türkiye" },
      provider: { "@id": ORGANIZATION_ID },
      hasOfferCatalog: { "@id": CATALOG_ID },
      serviceType: "Event Production",
    },

    {
      "@type": "FAQPage",
      "@id": FAQ_ID,
      url: `${EN_HOME_URL}#faq`,
      mainEntity: FAQ_ITEMS_EN.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

const BREADCRUMB_ITEMS = [{ name: "Home", url: EN_HOME_URL }];

/* ================== English component data ================== */

const SERVICES_EN = [
  {
    id: "stage",
    title: "Stage Engineering",
    icon: "🎪",
    description:
      "Modular stages, runways and risers tailored to load calculations, audience capacity and venue conditions.",
    image: "/img/hizmet-sahne.webp",
    features: [
      "Modular decks (1x1m, 1x2m, 2x2m) with adjustable heights",
      "Aluminium truss roofs, scaff towers and handrails",
      "Safety barriers, ramps and weather protection",
      "Professional crew for installation and dismantling",
      "Heavy-duty platforms for concerts and launches",
    ],
    href: "/en/stage-rental",
  },
  {
    id: "podium",
    title: "Podium & Catwalks",
    icon: "👑",
    description:
      "Elegant podiums, catwalks and presentation stages for award nights, brand launches and ceremonies.",
    image: "/img/hizmet-podyum.webp",
    features: [
      "Custom podium heights and shapes",
      "Protocol desks, lecterns and backdrop options",
      "Carpet, vinyl or wooden finishes",
      "Fast assembly with compact transport",
      "Wide range of colours and accessories",
    ],
    href: "/en/stage-rental",
  },
  {
    id: "led",
    title: "LED Wall Rentals",
    icon: "🖥️",
    description:
      "High-resolution indoor/outdoor LED walls with content playback, processors and rigging systems.",
    image: "/img/galeri/led-ekran-kiralama-1.webp",
    features: [
      "P2–P6 pixel pitch options",
      "IP65 weatherproof outdoor cabinets",
      "4500+ nit brightness for daylight visibility",
      "Novastar/Brompton processing and redundancy",
      "Complete installation and operator support",
    ],
    href: "/en/services#led",
  },
  {
    id: "av",
    title: "Sound, Lighting & Truss",
    icon: "🎭",
    description:
      "Concert-grade PA systems, lighting rigs and truss structures operated by certified engineers.",
    image: "/img/ses-isik/ses-sistemi.webp",
    features: [
      "Line-array systems with digital mixing consoles",
      "Wireless microphone and monitor packages",
      "Moving-head, wash and effect lighting",
      "DMX programming and show control",
      "Rigging, hoists and power distribution",
    ],
    href: "/en/sound-light-rental",
  },
  {
    id: "tents",
    title: "Event Tents",
    icon: "⛺",
    description:
      "Professional marquees and pagoda tents with flooring, climate control and décor options.",
    image: "/img/galeri/cadir-kiralama-1.webp",
    features: [
      "3x3m, 3x6m, 6x6m tent structures",
      "Waterproof and UV-resistant fabrics",
      "Sidewalls, glass panels and flooring",
      "Ambient lighting and branding elements",
      "Full logistics, installation and dismantle",
    ],
    href: "/en/tent-rental",
  },
  {
    id: "seating",
    title: "Seating & Furniture",
    icon: "🪑",
    description:
      "Banquet tables, conference seating and lounge setups with delivery, styling and collection included.",
    image: "/img/hizmet-masa.webp",
    features: [
      "Round, rectangular and cocktail tables",
      "Comfortable chairs, stools and VIP seating",
      "Wedding and gala décor packages",
      "Table linens, covers and accessories",
      "End-to-end logistics and on-site styling",
    ],
    href: "/en/table-chair-rental",
  },
];

const HERO_DICT_EN = {
  // Kapsam şeridi: hizmet adları yerine teknik departmanlar. Uluslararası
  // ekipler kapsamı departman adıyla okuyor.
  keywords: [
    { text: "Stage", color: "text-blue-200" },
    { text: "LED", color: "text-purple-200" },
    { text: "Sound", color: "text-cyan-200" },
    { text: "Lighting", color: "text-amber-200" },
    { text: "Truss", color: "text-emerald-200" },
    { text: "Technical Crew", color: "text-sky-200" },
  ],
  keywordsAriaLabel: "Technical production scope",
  backgroundAlt:
    "Sahneva event production: stage, LED screen, sound-lighting and podium installation",
  badge: "One Team • One Roof • One Solution",
  titleLine1Prefix: "Your Trusted",
  titleLine1: "Technical Production Partner",
  titleLine2: "in Türkiye",
  description:
    "From international conferences to product launches, exhibitions and large-scale events — we provide the technical production, equipment and on-site execution your project needs.",
  proofPoints: [
    { value: PROJECTS_COMPLETED, label: "Projects" },
    { value: `${PROVINCES_COUNT}`, label: "Cities" },
    { value: `${YEARS_OF_EXPERIENCE}`, label: "Years" },
  ],
  // "Call Now" hero'dan cikarildi; footer ve /en/contact sayfasinda duruyor.
  // Birincil CTA teklif formu, ikincil CTA WhatsApp.
  ctaOrder: ["quote", "whatsapp"],
  ctaWhatsapp: "WhatsApp Our Team",
  ctaWhatsappAria: "Message the Sahneva team on WhatsApp — opens in new tab",
  ctaQuote: "Plan Your Event",
  ctaQuoteAria: "Open the event planning and proposal form",
  quoteAnchor: "/en/contact#proposal-form",
  whatsappText: encodeURIComponent(
    "Hello, we are planning an event in Türkiye and would like to discuss technical production.\n\nCity:\nDate:\nVenue:\nEvent type:\nExpected guests:",
  ),
  whatsappUtm:
    "utm_source=homepage_en&utm_medium=hero_secondary_cta&utm_campaign=plan_your_event",
};

const HERO_BELOW_DICT_EN = {
  processSteps: [
    {
      title: "Share Your Event Brief",
      desc: "Send the city, date, venue, event type, guest count and required services",
      badge: "1",
    },
    {
      title: "We Configure the Solution",
      desc: "We combine stage, LED, audio, lighting, logistics and crew in one technical plan",
      badge: "2",
    },
    {
      title: "Receive Your Quote",
      desc: "Get a clear scope covering equipment, delivery, setup, event support and dismantling",
      badge: "3",
    },
  ],
  features: HERO_FEATURES_EN,
  featuresAriaLabel: "Local delivery advantages in Türkiye",
  processAriaLabel: "Three steps to request an event quote in Türkiye",
  consultationTitle: "Free Professional Consultation",
  consultationDesc:
    "Let us plan the <strong>ideal stage and podium rental solution</strong> for your event and match LED screen rental options to your budget \u2014 at no charge. <span class=\"block mt-1 text-yellow-300 font-medium\">\u26a1 Detailed quote guaranteed within 2 hours.</span>",
  consultationCta: "Get a Quote",
  consultationCtaHref: "/en/contact#proposal-form",
  sectionBadge: "3 Steps to Your Quote",
  sectionTitle: "Brief, technical solution and a clear quote",
  sectionDesc:
    "Share the essential event details once. Our Turkey-based team turns them into one plan for equipment, local logistics, setup, on-site operation and dismantling.",
  srHeading: "Stage Rental Service Features and Consultation",
};

const CORPORATE_INTRO_DICT_EN = {
  badge: "Corporate Events & Event Production",
  heading: "For your brand,",
  headingHighlight: "end-to-end stage and technical management",
  description:
    "For launches, dealer meetings, conferences and trade fairs; we manage the full technical infrastructure \u2014 <strong>stage, LED screen rental, sound-lighting and truss structures</strong> \u2014 through a single team. We absorb technical risk and design a flawlessly executed event flow.",
  linkHref: "/en/corporate-events",
  linkText: "Corporate event solutions",
  linkSuffix: " \u2014 see our step-by-step process.",
  processHeading: "End-to-end technical management",
  processSteps: [
    {
      step: "1",
      title: "Discovery & Brief",
      text: "We clarify needs through venue and flow analysis.",
    },
    {
      step: "2",
      title: "Technical Design",
      text: "We design 3D stage plans, sound-lighting and LED layouts.",
    },
    {
      step: "3",
      title: "Setup & Testing",
      text: "All stage, sound-lighting and video systems installed with redundancy.",
    },
    {
      step: "4",
      title: "Live Management",
      text: "Full-day direction, technical oversight and post-event teardown.",
    },
  ],
  techStandardsHeading: "Our technical standards",
  techStandards: [
    "Acoustic & power load calculations",
    "3D stage & LED layout plan",
    "Redundant audio and video lines",
    "Truss static and load checks",
    "Colour calibration & brightness control",
    "Emergency scenario and backup system",
  ],
  stats: [
    { value: CORPORATE_EVENTS, label: "Corporate events" },
    { value: `${YEARS_OF_EXPERIENCE}`, label: "Years of field experience" },
    { value: "7/24", label: "Technical support" },
  ],
  imageAlt:
    "Corporate launch stage setup with LED screen rental and professional lighting systems at a live event.",
  imageBadge1: "Live Direction",
  imageCaption: "Corporate launch stage setup",
  imageCaptionSub:
    "Istanbul \u2022 2000+ attendees \u2022 Multi-camera live stream & full technical production",
  card1Label: "Single-point management",
  card1Text:
    "We bring stage, LED screen, sound-lighting, truss, generator and direction crews under one technical team. You manage the entire process through a single point of contact.",
  card2Label: "Sahneva Events",
  card2Badge: "Your corporate solutions partner",
  card2Text:
    "Work with a team that understands your brand approach and simplifies technical language. We track every step from brief to teardown on your behalf.",
};

const SERVICES_DICT_EN = {
  sectionPill: "Professional Service",
  sectionTitlePrefix: "Stage rental, LED wall rental and",
  sectionTitleHighlight: "Our Services",
  sectionDesc: "Turnkey stage, LED wall, sound, lighting and tent solutions available across Türkiye",
  tablistLabel: "Service tabs",
  featuresHeading: "Service Highlights",
  ctaLabel: "View details & request pricing",
  ctaTitle: "Open the detailed service scope and request a tailored quote",
  imageBadgeLabel: "Professional Solution",
  imageAlt: "{{title}} service by Sahneva",
  overlayButtonTitle: "Open {{title}} details",
  overlayButtonAria: "Open the {{title}} service detail page",
};

const PROJECT_GALLERIES_EN = {
  "LED Wall Installations": {
    imageSlug: "led-ekran-kiralama",
    imageCount: 36,
    description: "Immersive LED surfaces for conferences, arenas and outdoor brand activations.",
    stats: "50+ Corporate Shows",
    icon: "🖥️",
  },
  "Event Tent Solutions": {
    imageSlug: "cadir-kiralama",
    imageCount: 19,
    description: "Weatherproof marquees, pagodas and hospitality structures for outdoor gatherings.",
    stats: "100+ Outdoor Events",
    icon: "⛺",
  },
  "Podium & Stage Builds": {
    imageSlug: "podyum-kiralama",
    imageCount: 36,
    description: "Custom podiums, risers and catwalks supporting product launches and ceremonies.",
    stats: "200+ Installations",
    icon: "👑",
  },
};

const PROJECTS_DICT_EN = {
  title: "Project Gallery",
  subtitle:
    "We have been a professional solutions partner in over 500 corporate events, concerts, fairs and event organisation projects.",
  statsLabel: "Completed projects",
  exploreAria: "Open gallery — {{title}} ({{count}} projects)",
  exploreHiddenLabel: "Open gallery — {{title}} ({{count}} projects)",
  hoverCta: "View gallery",
  cardAlt: "{{title}} by Sahneva",
  seeAllLabel: "View all",
  seeAllSr: " — {{title}} ({{count}} projects)",
  badgeLabel: "Reference",
  dialogAria: "{{title}} project gallery",
  closeLabel: "Close gallery",
  prevLabel: "‹ Previous",
  prevSr: "Previous project",
  nextLabel: "Next ›",
  nextSr: "Next project",
  mobilePrevLabel: "‹ Previous",
  mobileNextLabel: "Next ›",
  counterLabel: "{{index}} / {{total}}",
  liveMessage: "{{title}} gallery opened with {{count}} projects",
  lightboxAlt: "{{title}} — reference project {{index}}",
  regionTitleSr: "Project gallery listings and detailed content",
};

const CORPORATE_EVENTS_CARDS_EN = [
  {
    slug: "launch",
    title: "Product Launches",
    img: "/img/kurumsal/lansman.webp",
    alt: "Stage, LED wall and lighting design for a corporate product launch by Sahneva",
    text: "LED wall storytelling, stage scenography, lighting design and live broadcast workflows for unforgettable reveals.",
    icon: "🚀",
    gradient: "from-purple-500/10 to-blue-500/10",
    color: "text-purple-700",
  },
  {
    slug: "conference",
    title: "Conferences & Summits",
    img: "/img/kurumsal/konferans.webp",
    alt: "Conference stage with projection, sound and lighting systems provided by Sahneva",
    text: "Multi-mic setups, interpretation booths, presentation management and recording services for flawless programs.",
    icon: "🎤",
    gradient: "from-green-500/10 to-emerald-500/10",
    color: "text-green-700",
  },
  {
    slug: "dealer",
    title: "Dealer & Internal Events",
    img: "/img/kurumsal/bayi-toplantisi.webp",
    alt: "Corporate dealer meeting with stage décor, LED visuals and audio support by Sahneva",
    text: "Brand-aligned stage décor, multi-screen playback, video & audio control and dedicated technical crews.",
    icon: "🤝",
    gradient: "from-orange-500/10 to-red-500/10",
    color: "text-orange-700",
  },
];

const CORPORATE_EVENTS_ADVANTAGES_EN = [
  {
    icon: "⚡",
    label: "Lightning-Fast Build",
    desc: "Same-day installation by experienced crews",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: "🎛",
    label: "Modern Equipment",
    desc: "Latest-generation audio, lighting and LED inventory",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: "👷",
    label: "Experienced Crew",
    desc: "Certified engineers overseeing every discipline",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    icon: "🛡",
    label: "Safety & Backup",
    desc: "Redundant power and contingency planning",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
];

const CORPORATE_EVENTS_DICT_EN = {
  sectionTitle: "Corporate Event Solutions",
  sectionTitleSr: "Corporate event solutions showcase",
  headingPrefix: "Your Solution Partner",
  headingHighlight: "Among Corporate Event Companies",
  headingSuffix: "in Istanbul",
  introText:
    "We manage every step of event organization and technical production from a single hub, staging your brand's prestige to global standards.",
  highlightTitle: "Why Sahneva?",
  highlightPill: "Why Sahneva?",
  highlightTitlePrefix: "Our edge in",
  highlightTitleAccent: "corporate production",
  advantagesAriaLabel: "Our advantages",
  cardCtaLabel: "Request quote",
  cardCtaHref: "/en/contact",
  cardCtaAria: "Request a quote for {{title}}",
  cardBadgeLabel: "Turnkey solution",
  bannerTitle: "Don't Leave Your Event to Chance",
  bannerTitlePrefix: "Your corporate events deserve",
  bannerTitleHighlight: "turnkey production",
  bannerTitleSuffix: "support",
  bannerDescription:
    "Tell us about your goals and we will provide staging, LED visuals, sound-lighting and broadcast workflows ready for rehearsals the same day.",
  phoneCtaLabel: "Call our team",
  phoneCtaHref: "tel:+905453048671",
  phoneCtaAria: "Call Sahneva for immediate technical consultation: +90 545 304 86 71",
  whatsappCtaLabel: "Chat on WhatsApp",
  whatsappCtaHref:
    "https://wa.me/905453048671?text=Hello%2C+I'm+planning+a+corporate+event.+Can+we+discuss+staging+and+technical+production+options%3F",
  whatsappCtaAria: "Send a WhatsApp message",
  whatsappSrHint: "(opens in a new tab)",
  supportStats: ["24/7 technical standby", "Detailed quote within 2 hours"],
};

const TECH_CAPABILITIES_DICT_EN = {
  sectionPill: "Technical Capacity & Infrastructure",
  sectionTitlePrefix: "A Trusted",
  sectionTitleHighlight: "Event Production Partner",
  sectionTitleSuffix: "in Türkiye",
  sectionDescription:
    "LED wall technology, sound-light systems and reliable infrastructure solutions covering all corporate event needs under one roof.",
  card1Title: "Technical Solutions",
  card1DescPrefix: "", // Turkish uses "olarak " before the description; English doesn't need a prefix
  card1Desc:
    "bespoke stage builds, LED wall rentals, media playback and broadcast solutions delivered turnkey for your project.",
  card1FeaturesAriaLabel: "Technical Solutions features",
  card1Features: [
    "Next-gen equipment for LED screens, projection, mapping and stage lighting",
    "Uninterrupted broadcast via satellite, fibre and 5G-backed live streaming infrastructure",
    "Simultaneous management with multi-camera shoots, mixers and audio desks",
    "Interactive solutions and dynamic graphics systems for audience engagement",
    "Custom content creation, video production and post-production support",
  ],
  card2Title: "Large-Scale Capacity & Infrastructure",
  card2Desc:
    "nationwide logistics, installation and technical operation support for events of every scale across Türkiye.",
  card2FeaturesAriaLabel: "Large-Scale Capacity & Infrastructure features",
  card2Features: [
    "Modular stage and truss systems for corporate events",
    "Up to 600 m² LED screen capacity and high-brightness options",
    "Professional sound and acoustic setups for large-scale concerts and congresses",
    "Redundant power infrastructure and generator integration",
    "Nationwide logistics, installation and technical operation management across Türkiye",
  ],
};

const WHY_CHOOSE_US_DICT_EN = {
  sectionPill: "Our Advantages",
  sectionTitlePrefix: "Why Choose",
  sectionTitleHighlight: "Sahneva",
  sectionTitleSuffix: "?",
  sectionDesc:
    `${YEARS_OF_EXPERIENCE} years of experience, modern equipment and an expert team at your service for every detail of your event.`,
  advantagesGroupAriaLabel: "Sahneva Infrastructure Advantages",
  bigLeftTitle: "End-to-End Technical Service & Professional Solutions",
  bigLeftDesc:
    "Sahneva provides complete technical solutions for stages, podiums, LED screens and sound-lighting systems across Türkiye.",
  bigLeftFeatures: [
    "IP65 outdoor LED panels, 4500+ nit brightness",
    "Professional line-array sound systems, digital mixing infrastructure",
    "Modular podium and stage platforms, truss rental solutions",
    "DMX-controlled lighting systems and ambient lighting",
  ],
  bigRightTitle: "Robust Infrastructure for Large-Scale Events",
  bigRightDesc:
    "We serve concerts, rallies, festivals, fairs and outdoor events with high-capacity equipment infrastructure.",
  bigRightFeatures: [
    "100 m²+ LED screen installation (P3.9 outdoor, P2.6 indoor)",
    "Line-array sound systems (JBL, RCF, dB etc.)",
    "Truss tower systems and roof stage solutions",
    "Generator, UPS and redundant power infrastructure",
  ],
  features: [
    { title: "Rated by Our Clients", desc: `${GOOGLE_RATING}/5 average from ${GOOGLE_REVIEW_COUNT_DISPLAY}+ verified Google reviews. Named client references and on-site project videos back it up.`, stat: `${GOOGLE_RATING}/5 on Google` },
    { title: "Fast Setup & Delivery", desc: "Podiums and LED walls go up in hours; a full stage build with truss and rigging takes longer. Every quote states the setup window for your scope.", stat: setupDurationText("overall", "en") },
    { title: "Premium LED Technology", desc: "High brightness and clarity with P2–P6 indoor/outdoor LED screens.", stat: "P2–P6" },
    { title: "Expert Technical Team", desc: `${YEARS_OF_EXPERIENCE} years of experience in stage, sound, lighting and LED — expert technical crew.`, stat: `${TECHNICAL_TEAM_SIZE} Experts` },
    { title: "Transparent, Itemised Pricing", desc: "Every quote lists equipment, crew, logistics, setup and dismantling as separate lines, so you can see exactly what you are paying for.", stat: "Itemised Quotes" },
    { title: "Nationwide Service", desc: `Production support across all ${PROVINCES_COUNT} provinces from our Istanbul-based team.`, stat: `${PROVINCES_COUNT} Provinces` },
  ],
};

const FAQ_DICT_EN = {
  sectionPill: "Common Questions",
  sectionTitlePrefix: "Rental Process &",
  sectionTitleHighlight: "Frequently Asked Questions",
  sectionDesc:
    "We answer all your questions about stage, LED wall, sound-lighting systems and technical operation processes.",
  supportTitle: "Couldn't find the answer?",
  supportDesc:
    "Your project may require a custom solution. Speak with our expert technical team.",
  supportPhoneLabel: "Call Us",
  supportWhatsappLabel: "WhatsApp Support",
  supportMailLabel: "Send Email",
  contactPhone: "+90 545 304 86 71",
  contactPhoneHref: "tel:+905453048671",
  contactWhatsappHref:
    "https://wa.me/905453048671?text=Hello%2C+I'm+reaching+out+from+the+FAQ+section.+I'd+like+to+get+information+about+event+and+equipment+rental.",
  contactMail: "info@sahneva.com",
  contactMailHref: "mailto:info@sahneva.com",
  regionTitleSr: "Frequently asked questions content region",
  whatsappActionText: "Send a Quick Message",
  newTabHint: "opens in new tab",
  seeAllHref: "/en/faq",
  seeAllLabel: "See all questions",
  seeAllAriaLabel: "View all questions on the FAQ page",
};

/* ================== Metadata ================== */
export const metadata = {
  title: "Technical Production Partner in Türkiye | Stage, LED, Sound",
  description:
    "Türkiye-based technical production partner for conferences, launches and large-scale events. Stage, LED, sound, lighting, truss and on-site crew from one team.",
  openGraph: {
    title: "Your Trusted Technical Production Partner in Türkiye | Sahneva",
    description:
      "From international conferences to product launches and exhibitions, Sahneva delivers the technical production, equipment and on-site execution your event needs across Türkiye.",
    url: EN_HOME_URL,
    type: "website",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: `${BASE_SITE_URL}/img/og/sahneva-og.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva – technical production partner in Türkiye: stage, LED, sound and lighting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Trusted Technical Production Partner in Türkiye | Sahneva",
    description:
      "Stage, LED, sound, lighting, truss and on-site technical crew for conferences, launches and large-scale events across Türkiye.",
    images: [`${BASE_SITE_URL}/img/og/sahneva-og.webp`],
  },
  alternates: {
    canonical: buildCanonical("/en"),
    languages: buildAlternateLanguages(),
  },
};

/* ================== Page ================== */
export default function EnglishHomePage() {
  return (
    <div className="overflow-x-hidden bg-black">
      <JsonLd data={HOME_JSON_LD} suppressHydrationWarning />
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />

      <HeroSection dictionary={HERO_DICT_EN} />
      <div className="relative z-10 -mt-16 md:-mt-24 bg-[#0B1120]">
        <HeroBelow dictionary={HERO_BELOW_DICT_EN} />
      </div>

      <div id="get-a-quote" aria-hidden="true" />

      <div className="bg-[#0B1120] pb-2 pt-0">
        <p className="container mx-auto max-w-4xl px-4 text-center text-sm leading-relaxed text-white/55 md:text-base">
          Sahneva is a Turkey-based event production company specializing in stage design, LED screen
          rental, professional audio systems, lighting and technical production services for corporate
          events, congresses and international organizations. For international agencies and brands planning events in Türkiye, Sahneva works as a local{" "}
          <Link href="/en/event-production-company-turkey" className="font-bold text-cyan-200 underline underline-offset-4 hover:text-white">
            event production partner in Turkey
          </Link>{" "}
          for venue coordination, stage, LED screen, sound, lighting, truss and field operation.
        </p>
      </div>

      {/* Why international clients choose Sahneva — kısa sürüm.
          Uzun sürüm /en/event-production-company-turkey sayfasında. */}
      <WhyInternationalClients />

      {/* Services */}
      <section
        aria-labelledby="services-title"
        className="content-visibility-auto cv-home-services bg-black"
      >
        <h2 id="services-title" className="sr-only">Services</h2>
        <p className="sr-only">
          Stage rental, podium rental, LED wall rental, sound-lighting systems, truss rental, tent
          rental and table-chair rental solutions across Türkiye.
        </p>
        <a className="sr-only" href="/en/services">View all services</a>
        <ServicesTabs servicesData={SERVICES_EN} dictionary={SERVICES_DICT_EN} />
      </section>

      {/* Ürettiğimiz etkinlik formatları — hizmet listesinin bir katman üstü. */}
      <ProductionCapabilities />

      {/* Projects */}
      <section
        aria-labelledby="projects-title"
        className="content-visibility-auto cv-home-projects bg-black"
      >
        <h2 id="projects-title" className="sr-only">Our Projects</h2>
        <p className="sr-only">
          Professional partner for {PROJECTS_COMPLETED} corporate events, concerts, fairs and activations.
        </p>
        <Link className="sr-only" href="/en/projects">View projects</Link>
        <DeferredHydration
          fallback={<SectionLoading label="Loading projects" height="h-80" />}
          rootMargin="600px"
          idleTimeout={7000}
        >
          <ProjectsGallery galleries={PROJECT_GALLERIES_EN} dictionary={PROJECTS_DICT_EN} />
        </DeferredHydration>
      </section>

      {/* Technical */}
      <div className="content-visibility-auto cv-home-tech bg-slate-900 py-10">
        <TechCapabilities dictionary={TECH_CAPABILITIES_DICT_EN} />
      </div>

      {/* Corporate */}
      <div className="content-visibility-auto cv-home-corporate-events bg-slate-50 py-0 m-0 w-full">
        <CorporateEvents
          cards={CORPORATE_EVENTS_CARDS_EN}
          advantages={CORPORATE_EVENTS_ADVANTAGES_EN}
          dictionary={CORPORATE_EVENTS_DICT_EN}
        />
      </div>

      <div className="content-visibility-auto cv-home-corporate-intro bg-black py-0 m-0 w-full">
        <CorporateIntro dictionary={CORPORATE_INTRO_DICT_EN} />
      </div>

      {/* Why Choose Us */}
      <div className="content-visibility-auto cv-home-why w-full p-0 m-0">
        <WhyChooseUs dictionary={WHY_CHOOSE_US_DICT_EN} />
      </div>

      {/* FAQ */}
      <div className="content-visibility-auto cv-home-faq w-full bg-transparent p-0 m-0">
        <Faq items={FAQ_ITEMS_EN} dictionary={FAQ_DICT_EN} />
      </div>
    </div>
  );
}

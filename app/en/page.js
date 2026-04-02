// app/en/page.js

import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";
import HeroBelow from "@/components/HeroBelow";

import ServicesTabs from "@/components/ServicesTabs";
import CorporateEvents from "@/components/CorporateEvents";
import CorporateIntro from "@/components/CorporateIntro";
import TechCapabilities from "@/components/TechCapabilities";
import WhyChooseUs from "@/components/WhyChooseUs";

import { buildCanonical, buildAlternateLanguages, getOgImageUrl } from "@/lib/seo/seoConfig";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import { FAQ_ITEMS_EN } from "@/lib/faqData";

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
            price: 250,
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
            price: 1700,
            priceCurrency: "TRY",
            unitText: "DAY",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: 1,
              unitText: "DAY",
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
            price: 200,
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

const homeJsonLdSafe = JSON.stringify(HOME_JSON_LD).replace(/</g, "\\u003c");
const BREADCRUMB_ITEMS = [{ name: "Home", url: EN_HOME_URL }];

function StructuredData() {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: homeJsonLdSafe }}
    />
  );
}

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
    imagePattern: "/img/galeri/led-ekran-kiralama-{{index}}.webp",
    imageCount: 36,
    description: "Immersive LED surfaces for conferences, arenas and outdoor brand activations.",
    stats: "50+ Corporate Shows",
    icon: "🖥️",
  },
  "Event Tent Solutions": {
    imagePattern: "/img/galeri/cadir-kiralama-{{index}}.webp",
    imageCount: 19,
    description: "Weatherproof marquees, pagodas and hospitality structures for outdoor gatherings.",
    stats: "100+ Outdoor Events",
    icon: "⛺",
  },
  "Podium & Stage Builds": {
    imagePattern: "/img/galeri/podyum-kiralama-{{index}}.webp",
    imageCount: 36,
    description: "Custom podiums, risers and catwalks supporting product launches and ceremonies.",
    stats: "200+ Installations",
    icon: "👑",
  },
};

const PROJECTS_DICT_EN = {
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
  sectionTitleSr: "Corporate event solutions showcase",
  highlightPill: "Why Sahneva?",
  highlightTitlePrefix: "Our edge in",
  highlightTitleAccent: "corporate production",
  advantagesAriaLabel: "Our advantages",
  cardCtaLabel: "Request quote",
  cardCtaHref: "/en/contact",
  cardCtaAria: "Request a quote for {{title}}",
  cardBadgeLabel: "Turnkey solution",
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
  supportStats: ["24/7 technical standby", "Replies within 15 minutes"],
};

const TECH_CAPABILITIES_DICT_EN = {
  sectionPill: "Technical Capacity & Infrastructure",
  sectionTitlePrefix: "Türkiye's",
  sectionTitleHighlight: "#1",
  sectionTitleSuffix: "Event Technology Partner",
  sectionDescription:
    "LED wall technology, sound-light systems and reliable infrastructure solutions covering all corporate event needs under one roof.",
  card1Title: "Technical Solutions",
  card1Desc:
    "bespoke stage builds, LED wall rentals, media playback and broadcast solutions delivered turnkey for your project.",
  card2Title: "Large-Scale Capacity & Infrastructure",
  card2Desc:
    "nationwide logistics, installation and technical operation support for events of every scale across Türkiye.",
};

const WHY_CHOOSE_US_DICT_EN = {
  sectionPill: "Our Advantages",
  sectionTitlePrefix: "Why Choose",
  sectionTitleHighlight: "Sahneva",
  sectionTitleSuffix: "?",
  sectionDesc:
    "10+ years of experience, modern equipment and an expert team at your service for every detail of your event.",
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
};

/* ================== Metadata ================== */
export const metadata = {
  title: "Stage, LED Wall, Sound & Lighting Rentals Across Türkiye",
  description:
    "Sahneva delivers stages, LED walls, sound and lighting systems with turnkey installation for corporate events, concerts and public activations across Türkiye.",
  openGraph: {
    title: "Stage, LED Wall, Sound & Lighting Rentals Across Türkiye | Sahneva",
    description:
      "Sahneva delivers stages, LED walls, sound and lighting systems with turnkey installation for corporate events, concerts and public activations across Türkiye.",
    url: EN_HOME_URL,
    type: "website",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: `${BASE_SITE_URL}/img/og/sahneva-og.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva – Stage, LED Wall, Sound & Lighting Rentals across Türkiye",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stage, LED Wall, Sound & Lighting Rentals Across Türkiye | Sahneva",
    description:
      "Sahneva delivers stages, LED walls, sound and lighting systems with turnkey installation across Türkiye.",
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
      <StructuredData />
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />

      <HeroSection />
      <div className="relative z-10 -mt-16 md:-mt-24 bg-[#0B1120]">
        <HeroBelow />
      </div>

      <div id="get-a-quote" className="sr-only" />

      {/* Services */}
      <section aria-labelledby="services-title" className="bg-black">
        <h2 id="services-title" className="sr-only">Services</h2>
        <p className="sr-only">
          Stage rental, podium rental, LED wall rental, sound-lighting systems, truss rental, tent
          rental and table-chair rental solutions across Türkiye.
        </p>
        <a className="sr-only" href="/en/services">View all services</a>
        <ServicesTabs servicesData={SERVICES_EN} dictionary={SERVICES_DICT_EN} />
      </section>

      {/* Projects */}
      <section aria-labelledby="projects-title" className="bg-black">
        <h2 id="projects-title" className="sr-only">Our Projects</h2>
        <p className="sr-only">
          Professional partner for 500+ corporate events, concerts, fairs and activations.
        </p>
        <a className="sr-only" href="/en/projects">View projects</a>
        <ProjectsGallery galleries={PROJECT_GALLERIES_EN} dictionary={PROJECTS_DICT_EN} />
      </section>

      {/* Technical */}
      <div className="bg-slate-900 py-10">
        <TechCapabilities dictionary={TECH_CAPABILITIES_DICT_EN} />
      </div>

      {/* Corporate */}
      <div className="bg-slate-50 py-0 m-0 w-full">
        <CorporateEvents
          cards={CORPORATE_EVENTS_CARDS_EN}
          advantages={CORPORATE_EVENTS_ADVANTAGES_EN}
          dictionary={CORPORATE_EVENTS_DICT_EN}
        />
      </div>

      <div className="bg-black py-0 m-0 w-full">
        <CorporateIntro />
      </div>

      {/* Why Choose Us */}
      <div className="w-full p-0 m-0">
        <WhyChooseUs dictionary={WHY_CHOOSE_US_DICT_EN} />
      </div>

      {/* FAQ */}
      <div className="w-full bg-transparent p-0 m-0">
        <Faq items={FAQ_ITEMS_EN} dictionary={FAQ_DICT_EN} />
      </div>
    </div>
  );
}

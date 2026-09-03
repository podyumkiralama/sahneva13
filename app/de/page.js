// app/de/page.js

import { YEARS_OF_EXPERIENCE } from "@/lib/experience";
import dynamic from "next/dynamic";
import Link from "next/link";

import HeroSection from "@/components/HeroSection";
import HeroBelow from "@/components/HeroBelow";
import { HERO_FEATURES_DE } from "@/lib/heroFeatures";

import ServicesTabs from "@/components/ServicesTabs";
import CorporateEvents from "@/components/CorporateEvents";
import CorporateIntro from "@/components/CorporateIntro";
import TechCapabilities from "@/components/TechCapabilities";
import WhyChooseUs from "@/components/WhyChooseUs";
import DeferredHydration from "@/components/DeferredHydration.client";
import JsonLd from "@/components/seo/JsonLd";

import { buildCanonical, buildAlternateLanguages, getOgImageUrl } from "@/lib/seo/seoConfig";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import { FAQ_ITEMS_DE } from "@/lib/faqData";
import { PODIUM_UNIT_PRICES } from "@/lib/pricing";
import { LED_SCREEN_PRICING } from "@/lib/ledScreenPricing";
import { CORPORATE_EVENTS, PROJECTS_COMPLETED, PROVINCES_COUNT, TECHNICAL_TEAM_SIZE, setupDurationText } from "@/lib/stats";

/* ================== ISR ================== */
export const revalidate = 3600;

/* ================== Dynamic components ================== */
const ProjectsGallery = dynamic(() => import("@/components/ProjectsGallery"), {
  loading: () => (
    <div
      className="flex justify-center items-center h-64"
      role="status"
      aria-label="Galerie wird geladen"
    >
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"
        aria-hidden="true"
      />
      <span className="sr-only">Galerie wird geladen …</span>
    </div>
  ),
});

const Faq = dynamic(() => import("@/components/Faq"), {
  loading: () => (
    <div
      className="flex justify-center items-center h-32"
      role="status"
      aria-label="Häufige Fragen werden geladen"
    >
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"
        aria-hidden="true"
      />
      <span className="sr-only">Häufige Fragen werden geladen …</span>
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
        className="h-12 w-12 animate-spin rounded-full border-b-2 border-violet-600"
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

const DE_HOME_URL = `${BASE_SITE_URL}/de`;
const WEBPAGE_ID = `${DE_HOME_URL}#webpage`;
const SERVICE_ID = `${DE_HOME_URL}#primary-service`;
const CATALOG_ID = `${DE_HOME_URL}#catalog`;
const FAQ_ID = `${DE_HOME_URL}#faq`;
const HERO_IMAGE_ID = `${DE_HOME_URL}#hero-image`;
const OG_IMAGE_ID = `${DE_HOME_URL}#og-image`;
const PRICING_DISCLAIMER =
  "Der Preis richtet sich nach Stadt, Mietdauer, Fläche, Aufbau und Equipment. Für ein verbindliches Angebot sprechen Sie uns an.";

const ogUrl = getOgImageUrl?.() ?? `${BASE_SITE_URL}/img/og/sahneva-og.webp`;

const HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": WEBPAGE_ID,
      url: DE_HOME_URL,
      name: "Bühne, LED-Wand, Ton- und Lichttechnik mieten | Türkeiweit | Sahneva",
      description:
        "Bühnen, Podeste, LED-Wände sowie Ton- und Lichttechnik für Veranstaltungen in der Türkei. Sitz in Istanbul, Aufbau und Betreuung landesweit.",
      inLanguage: "de-DE",
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
      name: "Leistungskatalog Veranstaltungstechnik",
      url: DE_HOME_URL,
      itemListElement: [
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/de/buehne-mieten`,
          itemOffered: {
            "@type": "Service",
            name: "Podest mieten",
            url: `${BASE_SITE_URL}/de/buehne-mieten`,
            image: `${BASE_SITE_URL}/img/hizmet-podyum.webp`,
            description: `Vermietung modularer Podeste und Bühnenelemente. ${PRICING_DISCLAIMER}`,
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
          url: `${BASE_SITE_URL}/de/led-wand-mieten`,
          itemOffered: {
            "@type": "Service",
            name: "LED-Wand mieten",
            url: `${BASE_SITE_URL}/de/led-wand-mieten`,
            image: `${BASE_SITE_URL}/img/hizmet-led-ekran.webp`,
            description: `Vermietung von LED-Wänden für den Innen- und Außenbereich. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: LED_SCREEN_PRICING.standard.perSqm,
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
          url: `${BASE_SITE_URL}/de/zelt-mieten`,
          itemOffered: {
            "@type": "Service",
            name: "Eventzelt mieten",
            url: `${BASE_SITE_URL}/de/zelt-mieten`,
            description: `Vermietung von Zelten für Veranstaltungen und Aktivierungen. ${PRICING_DISCLAIMER}`,
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
          url: `${BASE_SITE_URL}/de/buehne-mieten`,
          itemOffered: {
            "@type": "Service",
            name: "Bühne mieten",
            url: `${BASE_SITE_URL}/de/buehne-mieten`,
            image: `${BASE_SITE_URL}/img/hizmet-sahne.webp`,
            description: `Bühnenvermietung für Konzerte und Veranstaltungen. ${PRICING_DISCLAIMER}`,
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
          url: `${BASE_SITE_URL}/de/ton-und-lichttechnik`,
          itemOffered: {
            "@type": "Service",
            name: "Ton- und Lichttechnik",
            url: `${BASE_SITE_URL}/de/ton-und-lichttechnik`,
            description: `Vermietung von Beschallungs- und Lichttechnik inklusive Traversen. ${PRICING_DISCLAIMER}`,
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
          url: `${BASE_SITE_URL}/de/leistungen`,
          itemOffered: {
            "@type": "Service",
            name: "Logistik Istanbul",
            url: `${BASE_SITE_URL}/de/leistungen`,
            description: `Transport- und Logistikleistung im Raum Istanbul. ${PRICING_DISCLAIMER}`,
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
      name: "Vermietung von Veranstaltungstechnik",
      description:
        "Bühnen, Podeste, LED-Wände, Ton- und Lichttechnik sowie Zelte in der gesamten Türkei – inklusive Aufbau, technischem Betrieb und Abbau.",
      url: DE_HOME_URL,
      areaServed: { "@type": "Country", name: "Türkiye" },
      provider: { "@id": ORGANIZATION_ID },
      hasOfferCatalog: { "@id": CATALOG_ID },
      serviceType: "Eventproduktion",
    },

    {
      "@type": "FAQPage",
      "@id": FAQ_ID,
      url: `${DE_HOME_URL}#faq`,
      inLanguage: "de-DE",
      mainEntity: FAQ_ITEMS_DE.map((item) => ({
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

const BREADCRUMB_ITEMS = [{ name: "Startseite", url: DE_HOME_URL }];

/* ================== Inhalte der Komponenten ================== */

const SERVICES_DE = [
  {
    id: "stage",
    title: "Bühnenbau",
    icon: "🎪",
    description:
      "Modulare Bühnen, Laufstege und Podeste – ausgelegt auf Lastberechnung, Besucherzahl und die Gegebenheiten der Location.",
    image: "/img/hizmet-sahne.webp",
    features: [
      "Modulare Bühnenelemente (1×1 m, 1×2 m, 2×2 m) mit stufenloser Höhenverstellung",
      "Traversendächer aus Aluminium, Gerüsttürme und Geländer",
      "Absperrungen, Rampen und Wetterschutz",
      "Erfahrene Crew für Auf- und Abbau",
      "Schwerlastpodeste für Konzerte und Produktlaunches",
    ],
    href: "/de/buehne-mieten",
  },
  {
    id: "podium",
    title: "Podeste & Laufstege",
    icon: "👑",
    description:
      "Podeste, Laufstege und Präsentationsbühnen für Preisverleihungen, Markenauftritte und Zeremonien.",
    image: "/img/hizmet-podyum.webp",
    features: [
      "Individuelle Höhen und Grundrisse",
      "Rednerpulte, Protokolltische und Backdrop-Optionen",
      "Oberflächen in Teppich, Vinyl oder Holz",
      "Schneller Aufbau bei kompaktem Transportvolumen",
      "Breite Auswahl an Farben und Zubehör",
    ],
    href: "/de/laufsteg-mieten",
  },
  {
    id: "led",
    title: "LED-Wände",
    icon: "🖥️",
    description:
      "Hochauflösende LED-Wände für innen und außen, inklusive Zuspielung, Bildprozessoren und Rigging.",
    image: "/img/galeri/led-ekran-kiralama-1.webp",
    features: [
      "Pixelabstände von P2 bis P6",
      "Wetterfeste Outdoor-Kabinette nach IP65",
      "Über 4.500 nit Helligkeit für Tageslichteinsatz",
      "Bildverarbeitung mit Novastar/Brompton und Redundanz",
      "Kompletter Aufbau samt Operator vor Ort",
    ],
    href: "/de/led-wand-mieten",
  },
  {
    id: "av",
    title: "Ton, Licht & Traversen",
    icon: "🎭",
    description:
      "Beschallung in Konzertqualität, Lichtdesign und Traversenkonstruktionen, betreut von erfahrenen Technikern.",
    image: "/img/ses-isik/ses-sistemi.webp",
    features: [
      "Line-Array-Systeme mit digitalen Mischpulten",
      "Funkmikrofon- und Monitorpakete",
      "Moving Heads, Washer und Effektlicht",
      "DMX-Programmierung und Showsteuerung",
      "Rigging, Kettenzüge und Stromverteilung",
    ],
    href: "/de/ton-und-lichttechnik",
  },
  {
    id: "tents",
    title: "Eventzelte",
    icon: "⛺",
    description:
      "Zelte und Pagoden mit Bodenbelag, Klimatisierung und Ausstattung für Veranstaltungen im Freien.",
    image: "/img/galeri/cadir-kiralama-1.webp",
    features: [
      "Zeltgrößen 3×3 m, 3×6 m und 6×6 m",
      "Wasserdichte und UV-beständige Planen",
      "Seitenwände, Glaselemente und Bodenaufbau",
      "Ambiente-Beleuchtung und Brandingflächen",
      "Logistik, Aufbau und Abbau komplett aus einer Hand",
    ],
    href: "/de/zelt-mieten",
  },
  {
    id: "seating",
    title: "Mobiliar & Bestuhlung",
    icon: "🪑",
    description:
      "Bankett- und Konferenzbestuhlung sowie Lounge-Möbel inklusive Anlieferung, Aufbau und Abholung.",
    image: "/img/hizmet-masa.webp",
    features: [
      "Runde, rechteckige und Stehtische",
      "Stühle, Hocker und VIP-Bestuhlung",
      "Ausstattungspakete für Galas und Empfänge",
      "Tischwäsche, Hussen und Zubehör",
      "Durchgängige Logistik und Aufbau vor Ort",
    ],
    href: "/de/leistungen",
  },
];

const HERO_DICT_DE = {
  keywords: [
    { text: "Bühne mieten", color: "text-violet-200" },
    { text: "LED-Wand mieten", color: "text-purple-200" },
    { text: "Ton & Licht", color: "text-violet-200" },
    { text: "Podestbau", color: "text-emerald-200" },
  ],
  keywordsAriaLabel: "Ausgewählte Leistungen",
  backgroundAlt:
    "Sahneva Eventproduktion: Bühne, LED-Wand, Ton-Licht und Podium-Aufbau",
  badge: "Türkeiweit • Planbarer Aufbau • Ein Ansprechpartner",
  titleLine1Prefix: "mit Sahneva",
  titleLine1: "Eventproduktion",
  titleLine2: "Ein Team, ein Zeitplan, eine Verantwortung",
  description:
    "Mit <strong>über 700 realisierten Projekten</strong> in Bühnenbau, LED-Wänden, Ton- und Lichttechnik sowie Podestbau übernehmen wir die technische Produktion in der gesamten Türkei.",
  proofPoints: [
    { value: PROJECTS_COMPLETED, label: "realisierte Projekte" },
    { value: "Türkeiweit", label: "lokale Logistik und Aufbau" },
    { value: "Projektbezogen", label: "Kommunikation und Betreuung" },
    { value: "Ein Team", label: "Bühne, LED, Ton und Licht" },
  ],
  ctaCall: "Jetzt anrufen",
  ctaCallAria: "Sahneva jetzt anrufen",
  ctaWhatsapp: "Angebot über WhatsApp",
  ctaWhatsappAria: "Angebot über WhatsApp anfordern — wird in einem neuen Tab geöffnet",
  ctaQuote: "Angebot anfordern",
  ctaQuoteAria: "Formular für eine Angebotsanfrage öffnen",
  quoteAnchor: "/de/kontakt#angebot-formular",
  whatsappText: encodeURIComponent(
    "Guten Tag, ich möchte ein Angebot für eine Veranstaltung in der Türkei.\n\nStadt:\nDatum:\nVeranstaltungsort:\nArt der Veranstaltung:",
  ),
};

const HERO_BELOW_DICT_DE = {
  processSteps: [
    {
      title: "Veranstaltungsdaten senden",
      desc: "Stadt, Datum, Veranstaltungsort, Format, Gästezahl und benötigte Leistungen mitteilen",
      badge: "1",
    },
    {
      title: "Wir planen die Technik",
      desc: "Bühne, LED-Wand, Ton, Licht, Logistik und Crew werden in einem Konzept gebündelt",
      badge: "2",
    },
    {
      title: "Angebot erhalten",
      desc: "Sie erhalten einen klaren Umfang für Lieferung, Aufbau, Betreuung und Abbau vor Ort",
      badge: "3",
    },
  ],
  features: HERO_FEATURES_DE,
  featuresAriaLabel: "Vorteile unserer Leistungen",
  processAriaLabel: "Drei Schritte zur Angebotsanfrage für eine Veranstaltung in der Türkei",
  consultationTitle: "Kostenlose technische Beratung",
  consultationDesc:
    "Wir planen die <strong>passende Bühnen- und Podestlösung</strong> für Ihre Veranstaltung und stimmen die LED-Technik auf Ihr Budget ab — unverbindlich. <span class=\"block mt-1 text-yellow-300 font-medium\">Die Angebotszeit bestätigen wir nach Prüfung von Umfang und Location.</span>",
  consultationCta: "Angebot anfordern",
  consultationCtaHref: "/de/kontakt#angebot-formular",
  sectionBadge: "In 3 Schritten zum Angebot",
  sectionTitle: "Briefing, technische Lösung und klares Angebot",
  sectionDesc:
    "Senden Sie die Eckdaten einmal. Unser Team in der Türkei bündelt Technik, lokale Logistik, Aufbau, Betrieb und Abbau in einem belastbaren Plan.",
  srHeading: "Leistungsmerkmale und Beratung rund um die Bühnenvermietung",
};

const CORPORATE_INTRO_DICT_DE = {
  badge: "Firmenevents & Eventproduktion",
  heading: "Für Ihre Marke:",
  headingHighlight: "Bühne und Technik durchgängig aus einer Hand",
  description:
    "Für Produktlaunches, Händlertagungen, Konferenzen und Messeauftritte übernehmen wir die komplette technische Infrastruktur — <strong>Bühne, LED-Wand, Ton- und Lichttechnik sowie Traversen</strong> — mit einem Team. Wir tragen das technische Risiko und legen den Ablauf so aus, dass er im Ernstfall trotzdem trägt.",
  linkHref: "/de/firmenevents",
  linkText: "Lösungen für Firmenveranstaltungen",
  linkSuffix: " — Schritt für Schritt erklärt.",
  processHeading: "Technische Leitung über den gesamten Ablauf",
  processSteps: [
    {
      step: "1",
      title: "Briefing & Klärung",
      text: "Wir analysieren Location und Ablauf und schärfen daraus den Bedarf.",
    },
    {
      step: "2",
      title: "Technische Planung",
      text: "3D-Bühnenplan, Beschallungs- und Lichtkonzept sowie LED-Layout.",
    },
    {
      step: "3",
      title: "Aufbau & Test",
      text: "Bühne, Ton, Licht und Videotechnik werden redundant aufgebaut und eingemessen.",
    },
    {
      step: "4",
      title: "Betrieb & Abbau",
      text: "Regie und technische Aufsicht über den gesamten Tag, danach Abbau und Abtransport.",
    },
  ],
  techStandardsHeading: "Unsere technischen Standards",
  techStandards: [
    "Akustik- und Lastberechnung",
    "3D-Plan für Bühne und LED-Fläche",
    "Redundante Ton- und Videowege",
    "Statiknachweis und Lastprüfung der Traversen",
    "Farbkalibrierung und Helligkeitsabgleich",
    "Notfallszenario und Backup-Systeme",
  ],
  stats: [
    { value: CORPORATE_EVENTS, label: "Firmenveranstaltungen" },
    { value: `${YEARS_OF_EXPERIENCE}`, label: "Jahre Praxis vor Ort" },
    { value: "Geplant", label: "Technische Erreichbarkeit" },
  ],
  imageAlt:
    "Bühnenaufbau für einen Produktlaunch mit gemieteter LED-Wand und professioneller Lichttechnik während der Veranstaltung.",
  imageBadge1: "Live-Regie",
  imageCaption: "Bühnenaufbau für einen Produktlaunch",
  imageCaptionSub:
    "Istanbul • über 2.000 Gäste • Mehrkamera-Livestream und komplette technische Produktion",
  card1Label: "Ein Ansprechpartner",
  card1Text:
    "Bühne, LED-Wand, Ton, Licht, Traversen, Stromversorgung und Regie kommen aus einem Technikteam. Sie steuern das gesamte Projekt über einen einzigen Ansprechpartner.",
  card2Label: "Sahneva Events",
  card2Badge: "Ihr Partner für Firmenveranstaltungen",
  card2Text:
    "Wir arbeiten sowohl als Hauptauftragnehmer für Marken als auch als technischer Partner im Hintergrund von Agenturen — und übersetzen technische Details in nachvollziehbare Entscheidungen.",
};

const SERVICES_DICT_DE = {
  sectionPill: "Veranstaltungstechnik",
  sectionTitlePrefix: "Bühne mieten, LED-Wand mieten und",
  sectionTitleHighlight: "unsere Leistungen",
  sectionDesc:
    "Bühnen, LED-Wände, Ton- und Lichttechnik sowie Zelte — türkeiweit verfügbar, inklusive Aufbau",
  tablistLabel: "Leistungsbereiche",
  featuresHeading: "Das ist enthalten",
  ctaLabel: "Details ansehen und Preis anfragen",
  ctaTitle: "Leistungsumfang öffnen und ein passendes Angebot anfordern",
  imageBadgeLabel: "Professionelle Lösung",
  imageAlt: "{{title}} von Sahneva",
  overlayButtonTitle: "Details zu {{title}} öffnen",
  overlayButtonAria: "Detailseite zur Leistung {{title}} öffnen",
};

const PROJECT_GALLERIES_DE = {
  "LED-Wand-Installationen": {
    imageSlug: "led-ekran-kiralama",
    imageCount: 36,
    description:
      "Großflächige LED-Installationen für Konferenzen, Arenen und Markenauftritte im Freien.",
    stats: "50+ Firmenveranstaltungen",
    icon: "🖥️",
  },
  "Zeltlösungen für Events": {
    imageSlug: "cadir-kiralama",
    imageCount: 19,
    description:
      "Wetterfeste Zelte, Pagoden und Hospitality-Bauten für Veranstaltungen unter freiem Himmel.",
    stats: "100+ Outdoor-Events",
    icon: "⛺",
  },
  "Podest- und Bühnenbau": {
    imageSlug: "podyum-kiralama",
    imageCount: 36,
    description:
      "Podeste, Bühnenelemente und Laufstege für Produktlaunches und Zeremonien.",
    stats: "200+ Aufbauten",
    icon: "👑",
  },
};

const PROJECTS_DICT_DE = {
  title: "Projektgalerie",
  subtitle:
    "In über 500 Firmenveranstaltungen, Konzerten, Messen und Eventprojekten waren wir der technische Partner vor Ort.",
  statsLabel: "Abgeschlossene Projekte",
  exploreAria: "Galerie öffnen — {{title}} ({{count}} Projekte)",
  exploreHiddenLabel: "Galerie öffnen — {{title}} ({{count}} Projekte)",
  hoverCta: "Galerie ansehen",
  cardAlt: "{{title}} von Sahneva",
  seeAllLabel: "Alle ansehen",
  seeAllSr: " — {{title}} ({{count}} Projekte)",
  badgeLabel: "Referenz",
  dialogAria: "Projektgalerie {{title}}",
  closeLabel: "Galerie schließen",
  prevLabel: "‹ Zurück",
  prevSr: "Vorheriges Projekt",
  nextLabel: "Weiter ›",
  nextSr: "Nächstes Projekt",
  mobilePrevLabel: "‹ Zurück",
  mobileNextLabel: "Weiter ›",
  counterLabel: "{{index}} / {{total}}",
  liveMessage: "Galerie {{title}} mit {{count}} Projekten geöffnet",
  lightboxAlt: "{{title}} — Referenzprojekt {{index}}",
  regionTitleSr: "Projektgalerie mit Übersicht und Detailinhalten",
};

const CORPORATE_EVENTS_CARDS_DE = [
  {
    slug: "launch",
    title: "Produktlaunches",
    img: "/img/kurumsal/lansman.webp",
    alt: "Bühne, LED-Wand und Lichtdesign für einen Produktlaunch von Sahneva",
    text: "Inszenierung über die LED-Fläche, Bühnenbild, Lichtdesign und Livestream-Workflow für den Moment der Enthüllung.",
    icon: "🚀",
    gradient: "from-purple-500/10 to-violet-500/10",
    color: "text-purple-700",
  },
  {
    slug: "conference",
    title: "Konferenzen & Kongresse",
    img: "/img/kurumsal/konferans.webp",
    alt: "Konferenzbühne mit Projektion, Beschallung und Lichttechnik von Sahneva",
    text: "Mehrkanalige Mikrofonierung, Dolmetscherkabinen, Präsentationssteuerung und Mitschnitt für einen reibungslosen Programmablauf.",
    icon: "🎤",
    gradient: "from-green-500/10 to-emerald-500/10",
    color: "text-green-700",
  },
  {
    slug: "dealer",
    title: "Händler- & Mitarbeiterevents",
    img: "/img/kurumsal/bayi-toplantisi.webp",
    alt: "Händlertagung mit Bühnenbild, LED-Grafiken und Tontechnik von Sahneva",
    text: "Bühnenbild im Corporate Design, Zuspielung auf mehrere Flächen, Bild- und Tonregie sowie eine feste Technikcrew.",
    icon: "🤝",
    gradient: "from-orange-500/10 to-red-500/10",
    color: "text-orange-700",
  },
];

const CORPORATE_EVENTS_ADVANTAGES_DE = [
  {
    icon: "⚡",
    label: "Zügiger Aufbau",
    desc: "Eingespielte Crew, Aufbau am selben Tag möglich",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
  {
    icon: "🎛",
    label: "Aktuelles Equipment",
    desc: "Ton, Licht und LED auf dem Stand der Technik",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: "👷",
    label: "Erfahrene Techniker",
    desc: "Jede Gewerkeleitung in geschulter Hand",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    icon: "🛡",
    label: "Sicherheit & Backup",
    desc: "Redundante Stromversorgung und Notfallkonzept",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
];

const CORPORATE_EVENTS_DICT_DE = {
  sectionTitle: "Lösungen für Firmenveranstaltungen",
  sectionTitleSr: "Überblick über unsere Lösungen für Firmenveranstaltungen",
  headingPrefix: "Ihr Partner",
  headingHighlight: "für Firmenveranstaltungen",
  headingSuffix: "in Istanbul",
  introText:
    "Wir führen Organisation und technische Produktion an einer Stelle zusammen und setzen Ihre Marke auf einem Niveau in Szene, das internationalen Ansprüchen standhält.",
  highlightTitle: "Warum Sahneva?",
  highlightPill: "Warum Sahneva?",
  highlightTitlePrefix: "Unsere Stärke in der",
  highlightTitleAccent: "Eventproduktion",
  advantagesAriaLabel: "Unsere Vorteile",
  cardCtaLabel: "Angebot anfordern",
  cardCtaHref: "/de/kontakt",
  cardCtaAria: "Angebot für {{title}} anfordern",
  cardBadgeLabel: "Komplettlösung",
  bannerTitle: "Überlassen Sie Ihre Veranstaltung nicht dem Zufall",
  bannerTitlePrefix: "Ihre Firmenveranstaltung verdient",
  bannerTitleHighlight: "technische Produktion",
  bannerTitleSuffix: "aus einer Hand",
  bannerDescription:
    "Schildern Sie uns Ihr Ziel — wir liefern Bühnenbau, LED-Inhalte, Ton- und Lichttechnik sowie Übertragungstechnik rechtzeitig zur Probe.",
  phoneCtaLabel: "Team anrufen",
  phoneCtaHref: "tel:+905453048671",
  phoneCtaAria: "Sahneva für eine technische Beratung anrufen: +90 545 304 86 71",
  whatsappCtaLabel: "Über WhatsApp schreiben",
  whatsappCtaHref:
    "https://wa.me/905453048671?text=Guten+Tag%2C+wir+planen+eine+Firmenveranstaltung.+K%C3%B6nnen+wir+%C3%BCber+B%C3%BChne+und+Technik+sprechen%3F",
  whatsappCtaAria: "Nachricht über WhatsApp senden",
  whatsappSrHint: "(wird in einem neuen Tab geöffnet)",
  supportStats: ["Technische Erreichbarkeit nach Projektplan", "Angebotszeit nach Umfang bestätigt"],
};

const TECH_CAPABILITIES_DICT_DE = {
  sectionPill: "Technische Kapazität & Infrastruktur",
  sectionTitlePrefix: "Ihr Technikpartner",
  sectionTitleHighlight: "in der",
  sectionTitleSuffix: "Türkei",
  sectionDescription:
    "LED-Technik, Ton- und Lichtsysteme sowie eine belastbare Infrastruktur — alles, was eine Firmenveranstaltung technisch braucht, aus einem Haus.",
  card1Title: "Technische Lösungen",
  card1DescPrefix: "",
  card1Desc:
    "individueller Bühnenbau, LED-Wände, Medienzuspielung und Übertragungstechnik, schlüsselfertig für Ihr Projekt.",
  card1FeaturesAriaLabel: "Merkmale der technischen Lösungen",
  card1Features: [
    "Aktuelles Equipment für LED-Wände, Projektion, Mapping und Bühnenlicht",
    "Störungsfreie Übertragung über Satellit, Glasfaser und 5G-gestützte Streaminginfrastruktur",
    "Parallele Steuerung von Mehrkameraproduktion, Bildmischer und Tonpult",
    "Interaktive Anwendungen und dynamische Grafiksysteme zur Publikumsbindung",
    "Erstellung eigener Inhalte, Videoproduktion und Postproduktion",
  ],
  card2Title: "Kapazität für Großveranstaltungen",
  card2Desc:
    "Logistik, Aufbau und technischer Betrieb für Veranstaltungen jeder Größe in der gesamten Türkei.",
  card2FeaturesAriaLabel: "Merkmale der Kapazität für Großveranstaltungen",
  card2Features: [
    "Modulare Bühnen- und Traversensysteme für Firmenveranstaltungen",
    "LED-Flächen bis 600 m² und Optionen mit hoher Helligkeit",
    "Beschallungskonzepte für große Konzerte und Kongresse",
    "Redundante Stromversorgung mit Generatoreinbindung",
    "Logistik, Aufbau und technischer Betrieb landesweit in der Türkei",
  ],
};

const WHY_CHOOSE_US_DICT_DE = {
  sectionPill: "Unsere Vorteile",
  sectionTitlePrefix: "Warum",
  sectionTitleHighlight: "Sahneva",
  sectionTitleSuffix: "?",
  sectionDesc:
    `${YEARS_OF_EXPERIENCE} Jahre Praxis, aktuelles Equipment und ein eingespieltes Team — für jedes Detail Ihrer Veranstaltung.`,
  advantagesGroupAriaLabel: "Infrastrukturvorteile von Sahneva",
  bigLeftTitle: "Technische Betreuung und Umsetzung von A bis Z",
  bigLeftDesc:
    "Sahneva liefert vollständige technische Lösungen für Bühnen, Podeste, LED-Wände sowie Ton- und Lichttechnik in der gesamten Türkei.",
  bigLeftFeatures: [
    "Outdoor-LED-Panels nach IP65 mit über 4.500 nit Helligkeit",
    "Line-Array-Beschallung mit digitaler Mischpultinfrastruktur",
    "Modulare Podeste und Bühnenelemente sowie Traversensysteme",
    "DMX-gesteuerte Lichtanlagen und Ambientebeleuchtung",
  ],
  bigRightTitle: "Belastbare Infrastruktur für Großveranstaltungen",
  bigRightDesc:
    "Konzerte, Kundgebungen, Festivals, Messen und Open-Air-Formate betreuen wir mit entsprechend dimensioniertem Equipment.",
  bigRightFeatures: [
    "LED-Flächen ab 100 m² (P3.9 outdoor, P2.6 indoor)",
    "Line-Array-Systeme (JBL, RCF, d&b u. a.)",
    "Traversentürme und überdachte Bühnenkonstruktionen",
    "Generatoren, USV und redundante Stromversorgung",
  ],
  features: [
    {
      title: "Nachweise aus realen Projekten",
      desc: "Unsere Projektseiten verbinden den ausgeführten Leistungsumfang mit Baustellenfotos, Produktionsdetails und den jeweiligen Rahmenbedingungen.",
      stat: "Reale Projekte",
    },
    {
      title: "Schneller Aufbau",
      desc: "Podeste und LED-Wände stehen in wenigen Stunden; ein kompletter Bühnenbau mit Traversen und Rigging dauert länger. Jedes Angebot nennt das Aufbaufenster für Ihren Umfang.",
      stat: setupDurationText("overall", "de"),
    },
    {
      title: "Aktuelle LED-Technik",
      desc: "Hohe Helligkeit und Detailschärfe mit LED-Wänden von P2 bis P6 für innen und außen.",
      stat: "P2–P6",
    },
    {
      title: "Erfahrenes Technikteam",
      desc: `${YEARS_OF_EXPERIENCE} Jahre Praxis in Bühnenbau, Ton, Licht und LED-Technik.`,
      stat: `${TECHNICAL_TEAM_SIZE} Fachkräfte`,
    },
    {
      title: "Transparente Einzelpreise",
      desc: "Jedes Angebot weist Technik, Crew, Logistik, Aufbau und Abbau als getrennte Positionen aus — Sie sehen genau, wofür Sie zahlen.",
      stat: "Angebot nach Positionen",
    },
    {
      title: "Landesweit im Einsatz",
      desc: `Von Istanbul aus betreuen wir Projekte in allen ${PROVINCES_COUNT} Provinzen der Türkei.`,
      stat: `${PROVINCES_COUNT} Provinzen`,
    },
  ],
};

const FAQ_DICT_DE = {
  sectionPill: "Häufige Fragen",
  sectionTitlePrefix: "Ablauf der Vermietung &",
  sectionTitleHighlight: "häufige Fragen",
  sectionDesc:
    "Antworten zu Bühne, LED-Wand, Ton- und Lichttechnik sowie zum technischen Betrieb Ihrer Veranstaltung.",
  supportTitle: "Ihre Frage war nicht dabei?",
  supportDesc:
    "Womöglich braucht Ihr Projekt eine eigene Lösung. Sprechen Sie direkt mit unserem Technikteam.",
  supportPhoneLabel: "Anrufen",
  supportWhatsappLabel: "WhatsApp",
  supportMailLabel: "E-Mail schreiben",
  contactPhone: "+90 545 304 86 71",
  contactPhoneHref: "tel:+905453048671",
  contactWhatsappHref:
    "https://wa.me/905453048671?text=Guten+Tag%2C+ich+schreibe+aus+dem+FAQ-Bereich.+Ich+h%C3%A4tte+gerne+Informationen+zur+Veranstaltungstechnik.",
  contactMail: "info@sahneva.com",
  contactMailHref: "mailto:info@sahneva.com",
  regionTitleSr: "Bereich mit häufig gestellten Fragen",
  whatsappActionText: "Kurze Nachricht senden",
  newTabHint: "wird in einem neuen Tab geöffnet",
  seeAllHref: "/de/leistungen",
  seeAllLabel: "Alle Leistungen ansehen",
  seeAllAriaLabel: "Zur Übersicht aller Leistungen wechseln",
};

/* ================== Metadata ================== */
export const metadata = {
  title: "Bühne, LED-Wand, Ton- und Lichttechnik mieten in der Türkei",
  description:
    "Sahneva vermietet Bühnen, LED-Wände sowie Ton- und Lichttechnik für Firmenevents, Kongresse und Konzerte in der gesamten Türkei – inklusive Aufbau.",
  openGraph: {
    title: "Bühne, LED-Wand, Ton- und Lichttechnik mieten in der Türkei | Sahneva",
    description:
      "Sahneva vermietet Bühnen, LED-Wände sowie Ton- und Lichttechnik für Firmenveranstaltungen, Kongresse und Konzerte in der gesamten Türkei – inklusive Planung und Aufbau.",
    url: DE_HOME_URL,
    type: "website",
    locale: "de_DE",
    siteName: "Sahneva",
    images: [
      {
        url: `${BASE_SITE_URL}/img/og/sahneva-og.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva – Bühnen, LED-Wände sowie Ton- und Lichttechnik in der gesamten Türkei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bühne, LED-Wand, Ton- und Lichttechnik mieten in der Türkei | Sahneva",
    description:
      "Sahneva vermietet Bühnen, LED-Wände sowie Ton- und Lichttechnik für Veranstaltungen in der gesamten Türkei.",
    images: [`${BASE_SITE_URL}/img/og/sahneva-og.webp`],
  },
  alternates: {
    canonical: buildCanonical("/de"),
    languages: buildAlternateLanguages(),
  },
};

/* ================== Page ================== */
export default function GermanHomePage() {
  return (
    <div className="overflow-x-hidden bg-black">
      <JsonLd data={HOME_JSON_LD} suppressHydrationWarning />
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />

      <HeroSection dictionary={HERO_DICT_DE} />
      <div className="relative z-10 -mt-16 md:-mt-24 bg-[#0B1120]">
        <HeroBelow dictionary={HERO_BELOW_DICT_DE} />
      </div>

      <div id="angebot" aria-hidden="true" />

      <div className="bg-[#0B1120] pb-2 pt-0">
        <p className="container mx-auto max-w-4xl px-4 text-center text-sm leading-relaxed text-white/55 md:text-base">
          Sahneva ist ein Dienstleister für Veranstaltungstechnik mit Sitz in Istanbul und übernimmt
          Bühnenbau, LED-Wände, Beschallung, Licht und technische Produktion für Firmenveranstaltungen,
          Kongresse und internationale Events. Für Marken und Agenturen aus dem deutschsprachigen Raum
          arbeiten wir in zwei Modellen: als Hauptauftragnehmer für die gesamte Produktion oder als{" "}
          <Link
            href="/de/eventproduktion-tuerkei"
            className="font-bold text-violet-200 underline underline-offset-4 hover:text-white"
          >
            technischer Partner im Hintergrund Ihrer Agentur
          </Link>{" "}
          — inklusive Abstimmung mit der Location, Bühne, LED-Wand, Ton, Licht, Traversen und dem
          Betrieb vor Ort.
        </p>
      </div>

      {/* Leistungen */}
      <section
        aria-labelledby="services-title"
        className="content-visibility-auto cv-home-services bg-black"
      >
        <h2 id="services-title" className="sr-only">
          Leistungen
        </h2>
        <p className="sr-only">
          Bühnen, Podeste, LED-Wände, Ton- und Lichttechnik, Traversen, Zelte sowie Tische und Stühle
          für Veranstaltungen in der gesamten Türkei.
        </p>
        <a className="sr-only" href="/de/leistungen">
          Alle Leistungen ansehen
        </a>
        <ServicesTabs servicesData={SERVICES_DE} dictionary={SERVICES_DICT_DE} />
      </section>

      {/* Projekte */}
      <section
        aria-labelledby="projects-title"
        className="content-visibility-auto cv-home-projects bg-black"
      >
        <h2 id="projects-title" className="sr-only">
          Unsere Projekte
        </h2>
        <p className="sr-only">
          Technischer Partner in über 700 Firmenveranstaltungen, Konzerten, Messen und Aktivierungen.
        </p>
        <Link className="sr-only" href="/de/projekte">
          Projekte ansehen
        </Link>
        <DeferredHydration
          fallback={<SectionLoading label="Projekte werden geladen" height="h-80" />}
          rootMargin="600px"
          idleTimeout={7000}
        >
          <ProjectsGallery galleries={PROJECT_GALLERIES_DE} dictionary={PROJECTS_DICT_DE} />
        </DeferredHydration>
      </section>

      {/* Technik */}
      <div className="content-visibility-auto cv-home-tech bg-slate-900 py-10">
        <TechCapabilities dictionary={TECH_CAPABILITIES_DICT_DE} />
      </div>

      {/* Firmenevents */}
      <div className="content-visibility-auto cv-home-corporate-events bg-slate-50 py-0 m-0 w-full">
        <CorporateEvents
          cards={CORPORATE_EVENTS_CARDS_DE}
          advantages={CORPORATE_EVENTS_ADVANTAGES_DE}
          dictionary={CORPORATE_EVENTS_DICT_DE}
        />
      </div>

      <div className="content-visibility-auto cv-home-corporate-intro bg-black py-0 m-0 w-full">
        <CorporateIntro dictionary={CORPORATE_INTRO_DICT_DE} />
      </div>

      {/* Warum Sahneva */}
      <div className="content-visibility-auto cv-home-why w-full p-0 m-0">
        <WhyChooseUs dictionary={WHY_CHOOSE_US_DICT_DE} />
      </div>

      {/* FAQ */}
      <div className="content-visibility-auto cv-home-faq w-full bg-transparent p-0 m-0">
        <Faq items={FAQ_ITEMS_DE} dictionary={FAQ_DICT_DE} />
      </div>
    </div>
  );
}

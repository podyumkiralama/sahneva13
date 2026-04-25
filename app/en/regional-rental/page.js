import RegionalRentalClient from "@/app/(tr)/bolgesel-kiralama/RegionalRentalClient";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import JsonLdScript from "@/components/seo/JsonLd";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.sahneva.com";

const PAGE_PATH = "/en/regional-rental";
const PAGE_URL = `${SITE}${PAGE_PATH}`;
const OG_IMAGE = `${SITE}/img/bolgesel-kiralama/hero.webp`;

export const metadata = {
  title: "Regional Rental | Istanbul, Ankara, Izmir, and Across Turkey",
  description:
    "LED screen, truss, stage/podium, and sound-lighting rentals across Turkey. Plan installations for Istanbul, Ankara, Izmir, Bursa, Antalya, and nearby cities with setup, testing, and dismantling included.",
  alternates: buildLanguageAlternates({
    tr: "/bolgesel-kiralama",
    en: PAGE_PATH,
    canonical: PAGE_PATH,
    xDefault: PAGE_PATH,
  }),
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Regional Rental | Sahneva",
    description:
      "Event equipment rental across Turkey: LED screen, truss, stage/podium, and sound-lighting. Installation, operation, and dismantling included.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sahneva Regional Rental" }],
    siteName: "Sahneva",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regional Rental | Sahneva",
    description:
      "Event equipment rental across Turkey. Select your city and get a fast quote.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

function RegionalRentalJsonLd({ services, faqs, steps, regions }) {
  const orgId = `${SITE}/#org`;
  const webId = `${SITE}/#website`;
  const pageId = `${PAGE_URL}#webpage`;
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const catalogId = `${PAGE_URL}#offerCatalog`;
  const faqId = `${PAGE_URL}#faq`;
  const howtoId = `${PAGE_URL}#howto`;
  const serviceId = `${PAGE_URL}#service`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Sahneva Organization",
        url: SITE,
        telephone: "+90 545 304 86 71",
        areaServed: { "@type": "Country", name: "Turkey" },
      },
      {
        "@type": "WebSite",
        "@id": webId,
        url: SITE,
        name: "Sahneva Organization",
        publisher: { "@id": orgId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: PAGE_URL,
        name: "Regional Rental",
        description:
          "Event equipment rental across Turkey: LED screen, truss, stage/podium, and sound-lighting. Installation, testing, and dismantling included.",
        isPartOf: { "@id": webId },
        about: { "@id": serviceId },
        inLanguage: "en-US",
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/en` },
          { "@type": "ListItem", position: 2, name: "Regional Rental", item: PAGE_URL },
        ],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Regional Rental",
        serviceType: "Event equipment rental, installation, and operations",
        provider: { "@id": orgId },
        areaServed: [
          { "@type": "Country", name: "Turkey" },
          ...regions.map((region) => ({ "@type": "City", name: region.name })),
        ],
        hasOfferCatalog: { "@id": catalogId },
      },
      {
        "@type": "OfferCatalog",
        "@id": catalogId,
        name: "Regional Rental Services",
        itemListElement: services.map((service, idx) => ({
          "@type": "Offer",
          position: idx + 1,
          itemOffered: {
            "@type": "Service",
            name: service.title,
            url: `${SITE}${service.href}`,
            areaServed: { "@type": "Country", name: "Turkey" },
          },
        })),
      },
      {
        "@type": "HowTo",
        "@id": howtoId,
        name: "How does the regional rental process proceed?",
        description:
          "Brief, quote, logistics planning, installation/testing, event operations, and dismantling steps end-to-end.",
        inLanguage: "en-US",
        step: steps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: step.title,
          text: step.desc,
          url: `${PAGE_URL}#${step.id}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        inLanguage: "en-US",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

export default function Page() {
  const regions = [
    {
      name: "Istanbul",
      slug: "istanbul",
      desc: "Corporate events, trade fairs, concerts, and launches.",
      focus:
        "A dense corporate calendar, exhibition-center access, and same-day rehearsal pressure make Istanbul the fastest-moving hub in the network.",
      planning:
        "When venue handover, loading access, and run-of-show timing are clear in the first brief, the quote and crew plan settle much faster.",
      services: ["/en/led-screen-rental", "/en/podium-rental", "/en/sound-light-rental"],
    },
    {
      name: "Ankara",
      slug: "ankara",
      desc: "Congresses, indoor events, government and institutional organizations.",
      focus:
        "Congress centers and institutional venues usually depend on protocol flow, speech clarity, and controlled show timing.",
      planning:
        "Podium position, delegate seating, screen visibility, and microphone planning work best when they are shaped in one technical table.",
      services: ["/en/podium-rental", "/en/sound-light-rental", "/en/led-screen-rental"],
    },
    {
      name: "Izmir",
      slug: "izmir",
      desc: "Outdoor stages, festivals, and coastal events.",
      focus:
        "In open-air setups, wind, ground conditions, and power planning often become more important than the equipment list itself.",
      planning:
        "For coastal venues and festival grounds, we settle LED brightness, truss safety, and cable routing early.",
      services: ["/en/truss-rental", "/en/led-screen-rental", "/en/sound-light-rental"],
    },
    {
      name: "Bursa",
      slug: "bursa",
      desc: "Exhibition areas, dealer meetings, and stage installations.",
      focus:
        "Fairgrounds and dealer events need a balance between brand presentation and tight installation-dismantling windows.",
      planning:
        "Close-range screen use, stage flow, and sound coverage work better when matched to venue circulation from the beginning.",
      services: ["/en/led-screen-rental", "/en/podium-rental", "/en/table-chair-rental"],
    },
    {
      name: "Antalya",
      slug: "antalya",
      desc: "Hotel events, galas, congresses, and tourism organizations.",
      focus:
        "Hotel and resort projects often revolve around room-turn timing, gala pacing, and keeping the guest experience smooth.",
      planning:
        "Moving from congress sessions to gala staging gets easier when stage, decorative lighting, and screen content stay under one crew.",
      services: ["/en/sound-light-rental", "/en/led-screen-rental", "/en/tent-rental"],
    },
    {
      name: "Kocaeli",
      slug: "kocaeli",
      desc: "Factory events, launches, and corporate installations.",
      focus:
        "Industrial areas bring electrical, loading, and safety procedures directly into the center of the event setup.",
      planning:
        "For factory launches and corporate gatherings, we shape ground, cable routing, and sound distribution around field rules.",
      services: ["/en/truss-rental", "/en/podium-rental", "/en/sound-light-rental"],
    },
    {
      name: "Sakarya",
      slug: "sakarya",
      desc: "Open-area installations, truss, and stage projects.",
      focus:
        "Municipal programs and large open-air installations need setup speed and on-site safety to be planned together.",
      planning:
        "Height, barriers, sound coverage, and audience flow are handled up front for outdoor stage work.",
      services: ["/en/truss-rental", "/en/podium-rental", "/en/sound-light-rental"],
    },
    {
      name: "Tekirdag",
      slug: "tekirdag",
      desc: "Festivals, stages, sound-lighting, and LED screen installations.",
      focus:
        "Festival logistics and durable equipment choice are usually the two most critical decision points here.",
      planning:
        "We balance LED visibility, stage placement, and sound-lighting scenarios against wind and viewing distance.",
      services: ["/en/led-screen-rental", "/en/truss-rental", "/en/sound-light-rental"],
    },
  ];

  const services = [
    { title: "LED Screen Rental", href: "/en/led-screen-rental" },
    { title: "Truss Rental", href: "/en/truss-rental" },
    { title: "Stage / Podium Rental", href: "/en/podium-rental" },
    { title: "Sound & Lighting Systems", href: "/en/sound-light-rental" },
    { title: "Tent Rental", href: "/en/tent-rental" },
    { title: "Table & Chair Rental", href: "/en/table-chair-rental" },
  ];

  const steps = [
    { id: "services", title: "Services", desc: "Select and bundle rental items." },
    {
      id: "process",
      title: "Process",
      desc: "Brief -> quote -> logistics -> installation/testing -> operations -> dismantling.",
    },
    { id: "regions", title: "Regions", desc: "Planning and schedule are finalized by city." },
    {
      id: "regional-notes",
      title: "City notes",
      desc: "Practical planning differences for the main cities.",
    },
    { id: "planning", title: "Planning", desc: "Power, ground, height, safety, and access checklist." },
    { id: "faq", title: "FAQ", desc: "Frequently asked questions about regional rental." },
  ];

  const faqs = [
    {
      q: "What does regional rental mean?",
      a: "It means planning event equipment including LED screen, truss, stage/podium, and sound-lighting according to your city and delivering the setup end-to-end with installation and dismantling included.",
    },
    {
      q: "Do you serve across Turkey?",
      a: "Yes. Depending on the operations plan, we can provide installation and technical team support across Turkey.",
    },
    {
      q: "Do prices vary by city?",
      a: "Yes. Distance, installation time, crew size, and the equipment set can all change the final cost. A brief is enough for the first estimate.",
    },
    {
      q: "Can I get multiple services in the same project?",
      a: "Yes. We can plan LED screen, truss, stage/podium, and sound-lighting as one coordinated package.",
    },
    {
      q: "When does installation take place?",
      a: "Depending on project size, installation and testing are usually scheduled 24-48 hours in advance. Some smaller setups can be completed on the same day.",
    },
    {
      q: "How are safety and occupational health processes managed?",
      a: "Ground and anchoring, height safety, cabling, and access routes are all checked during installation. Additional measures are planned based on the project type.",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      <RegionalRentalJsonLd services={services} faqs={faqs} steps={steps} regions={regions} />
      <RegionalRentalClient
        regions={regions}
        services={services}
        faqs={faqs}
        steps={steps}
        locale="en"
      />
    </main>
  );
}

// app/en/regional-rental/page.js
import RegionalRentalClient from "@/app/(tr)/bolgesel-kiralama/RegionalRentalClient";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import JsonLdScript from "@/components/seo/JsonLd";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.sahneva.com";

const PAGE_PATH = "/en/regional-rental";
const PAGE_URL = `${SITE}${PAGE_PATH}`;
const OG_IMAGE = `${SITE}/img/bolgesel-kiralama/hero.webp`;

export const metadata = {
  title: "Regional Rental | Event Equipment Across Turkey",
  description:
    "LED screen, truss, stage/podium, and sound-lighting system rentals across Turkey. Select your city, get a fast quote; installation, testing, and dismantling included.",
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
      "Event equipment rental across Turkey: LED screen, truss, stage/podium, sound-lighting. Installation + operation + dismantling included.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sahneva Regional Rental" }],
    siteName: "Sahneva",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regional Rental | Sahneva",
    description:
      "Event equipment rental across Turkey. Select your city, get a fast quote.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

function RegionalRentalJsonLd({ services, faqs, steps }) {
  const orgId = `${SITE}/#org`;
  const webId = `${SITE}/#website`;
  const pageId = `${PAGE_URL}#webpage`;
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const catalogId = `${PAGE_URL}#offerCatalog`;
  const faqId = `${PAGE_URL}#faq`;
  const howtoId = `${PAGE_URL}#howto`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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
          "Event equipment rental across Turkey: LED screen, truss, stage/podium, sound-lighting. Installation, testing, and dismantling included.",
        isPartOf: { "@id": webId },
        about: { "@id": orgId },
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
        "@type": "OfferCatalog",
        "@id": catalogId,
        name: "Regional Rental Services",
        itemListElement: services.map((s, idx) => ({
          "@type": "Offer",
          position: idx + 1,
          itemOffered: {
            "@type": "Service",
            name: s.title,
            url: `${SITE}${s.href}`,
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
        step: steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.desc,
          url: `${PAGE_URL}#${s.id}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        inLanguage: "en-US",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <JsonLdScript data={jsonLd} />
  );
}

export default function Page() {
  const regions = [
    { name: "Istanbul", slug: "istanbul", desc: "Corporate events, trade fairs, concerts, and launches." },
    { name: "Ankara", slug: "ankara", desc: "Congresses, indoor events, government & institutional organizations." },
    { name: "Izmir", slug: "izmir", desc: "Outdoor stages, festivals, and coastal events." },
    { name: "Bursa", slug: "bursa", desc: "Exhibition areas, dealer meetings, stage installations." },
    { name: "Antalya", slug: "antalya", desc: "Hotel events, galas, congresses & tourism organizations." },
    { name: "Kocaeli", slug: "kocaeli", desc: "Factory events, launches & corporate installations." },
    { name: "Sakarya", slug: "sakarya", desc: "Open-area installations, truss & stage projects." },
    { name: "Tekirdağ", slug: "tekirdag", desc: "Festivals, stages, sound-lighting, and LED screen installations." },
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
    { id: "process", title: "Process", desc: "Brief → quote → logistics → installation/testing → operations → dismantling." },
    { id: "regions", title: "Regions", desc: "Planning and schedule finalized by city." },
    { id: "planning", title: "Planning", desc: "Power, ground, height, safety, and access checklist." },
    { id: "faq", title: "FAQ", desc: "Frequently asked questions about regional rental." },
  ];

  const faqs = [
    {
      q: "What does regional rental mean?",
      a: "It means planning event equipment (LED screen, truss, stage/podium, sound-lighting) according to your city and providing end-to-end service including installation and dismantling.",
    },
    {
      q: "Do you serve across Turkey?",
      a: "Yes. Depending on the operations plan, we can provide installation and technical team support across Turkey.",
    },
    {
      q: "Do prices vary by city?",
      a: "Yes. They can vary depending on distance, installation time, team size, and equipment set. A brief is all that's needed for the most accurate price.",
    },
    {
      q: "Can I get multiple services in the same project?",
      a: "Yes. We can plan items such as LED screen + truss + stage/podium + sound-lighting as a single package.",
    },
    {
      q: "When does installation take place?",
      a: "Depending on the project size, installation and testing are planned 24–48 hours in advance. Some small installations can be completed on the same day.",
    },
    {
      q: "How are safety and occupational health processes managed?",
      a: "During installation, ground/anchoring, height safety, cabling, and passageways are checked. Additional measures are planned depending on the project type.",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      <RegionalRentalJsonLd services={services} faqs={faqs} steps={steps} />
      <RegionalRentalClient regions={regions} services={services} faqs={faqs} steps={steps} />
    </main>
  );
}

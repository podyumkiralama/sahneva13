// app/de/regionale-vermietung/page.js
import RegionalRentalClient from "@/app/(tr)/bolgesel-kiralama/RegionalRentalClient";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import JsonLdScript from "@/components/seo/JsonLd";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.sahneva.com";
const PAGE_PATH = "/de/regionale-vermietung";
const PAGE_URL = `${SITE}${PAGE_PATH}`;
const OG_IMAGE = `${SITE}/img/bolgesel-kiralama/hero.webp`;

export const revalidate = 86400;

export const metadata = {
  // Das Locale-Layout hängt " | Sahneva" an – Marke hier nicht wiederholen.
  title: "Regionale Vermietung | Istanbul, Ankara, Izmir",
  description:
    "Veranstaltungstechnik nach Stadt geplant: LED-Wand, Traversen, Bühne und Ton- und Lichttechnik mit Logistik, Aufbau und Betreuung in der gesamten Türkei.",
  alternates: buildLanguageAlternates({
    tr: "/bolgesel-kiralama",
    en: "/en/regional-rental",
    de: PAGE_PATH,
    canonical: PAGE_PATH,
    xDefault: "/en/regional-rental",
  }),
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Regionale Vermietung | Sahneva",
    description:
      "Nach Stadt geplante Veranstaltungstechnik: LED-Wand, Traversen, Bühne sowie Ton- und Lichttechnik inklusive Aufbau.",
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: "Regionale Vermietung von Veranstaltungstechnik" },
    ],
    siteName: "Sahneva",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regionale Vermietung | Sahneva",
    description:
      "Nach Stadt geplante Veranstaltungstechnik in der gesamten Türkei – inklusive Logistik und Aufbau.",
    images: [OG_IMAGE],
  },
  robots: AI_PREVIEW_ROBOTS,
};

function RegionalRentalJsonLd({ services, faqs, steps, regions }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Regionale Vermietung",
        description: metadata.description,
        inLanguage: "de-DE",
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: `${SITE}/de` },
          { "@type": "ListItem", position: 2, name: "Regionale Vermietung", item: PAGE_URL },
        ],
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Regionale Vermietung von Veranstaltungstechnik",
        serviceType: "Veranstaltungstechnik",
        areaServed: [
          { "@type": "Country", name: "Türkiye" },
          ...regions.map((region) => ({ "@type": "City", name: region.name })),
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Leistungen der regionalen Vermietung",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              areaServed: { "@type": "Country", name: "Türkiye" },
            },
          })),
        },
      },
      {
        "@type": "HowTo",
        "@id": `${PAGE_URL}#howto`,
        name: "Wie läuft die regionale Vermietung ab?",
        inLanguage: "de-DE",
        step: steps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.title,
          text: step.desc,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        inLanguage: "de-DE",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return <JsonLdScript data={jsonLd} id="de-regional-rental-jsonld" />;
}

export default function GermanRegionalRentalPage() {
  const regions = [
    {
      name: "Istanbul",
      slug: "istanbul",
      desc: "Firmenveranstaltungen, Messen, Konzerte und Produktlaunches.",
      focus:
        "Dichter Veranstaltungskalender, Messegelände mit festen Anlieferzeiten und häufig nur ein Probentag – Istanbul ist der Standort mit dem engsten Takt.",
      planning:
        "Wenn Übergabe der Location, Zufahrt und Ablaufplan schon im ersten Briefing feststehen, stehen Angebot und Crewplan deutlich schneller.",
      services: ["/de/led-wand-mieten", "/de/buehne-mieten", "/de/ton-und-lichttechnik"],
    },
    {
      name: "Ankara",
      slug: "ankara",
      desc: "Kongresse, Indoor-Veranstaltungen sowie Protokoll- und Behördentermine.",
      focus:
        "Protokollarische Abläufe und feste Zeitfenster bestimmen den Aufbau; Sprachverständlichkeit und Redetechnik stehen im Vordergrund.",
      planning:
        "Frühe Klärung von Zugangsberechtigungen und Sicherheitskontrollen verhindert Verzögerungen am Aufbautag.",
      services: ["/de/led-wand-mieten", "/de/ton-und-lichttechnik", "/de/firmenevents"],
    },
    {
      name: "Izmir",
      slug: "izmir",
      desc: "Messen, Festivals und Veranstaltungen im Freien.",
      focus:
        "Messehallen und Freiflächen wechseln sich ab; im Sommer bestimmen Hitze und Wind die Planung von Zelt und Traversen mit.",
      planning:
        "Bodenbeschaffenheit und Verankerungsmöglichkeit früh klären, damit Ballast oder Erdnägel korrekt eingeplant sind.",
      services: ["/de/zelt-mieten", "/de/buehne-mieten", "/de/traversen-mieten"],
    },
    {
      name: "Antalya",
      slug: "antalya",
      desc: "Kongresshotels, Resorts und Incentive-Veranstaltungen.",
      focus:
        "Kongresshotels und Resortanlagen mit eigenen Hausregeln: Anlieferzeiten, Zufahrt über Personalwege und Rücksicht auf laufenden Hotelbetrieb.",
      planning:
        "Abstimmung mit der Haustechnik des Hotels vor dem Transport spart am Aufbautag mehrere Stunden.",
      services: ["/de/firmenevents", "/de/led-wand-mieten", "/de/ton-und-lichttechnik"],
    },
    {
      name: "Bursa",
      slug: "bursa",
      desc: "Industrieveranstaltungen, Händlertagungen und Werksevents.",
      focus:
        "Häufig Veranstaltungen auf Werksgeländen mit eigenen Sicherheitsvorgaben und begrenzten Zufahrtsfenstern.",
      planning:
        "Sicherheitsunterweisung und Zufahrtsberechtigungen für die Crew im Voraus organisieren.",
      services: ["/de/buehne-mieten", "/de/led-wand-mieten", "/de/zelt-mieten"],
    },
    {
      name: "Kocaeli",
      slug: "kocaeli",
      desc: "Werksgelände, Logistikzentren und Firmenveranstaltungen.",
      focus:
        "Industrieumfeld mit großen Flächen: Stromversorgung und Bodenbeschaffenheit bestimmen den Aufbau stärker als die Optik.",
      planning:
        "Anschlussleistung und Kabelwege vorab prüfen; oft ist ein Generator die verlässlichere Lösung.",
      services: ["/de/zelt-mieten", "/de/buehne-mieten", "/de/traversen-mieten"],
    },
    {
      name: "Bodrum",
      slug: "bodrum",
      desc: "Markenauftritte im Freien, Galaabende und Sommerveranstaltungen.",
      focus:
        "Open-Air-Formate an Küstenstandorten: Wind, Salzluft und schmale Zufahrten prägen die Planung.",
      planning:
        "Windlast und Verankerung sind hier keine Formalie – sie bestimmen, ob eine überdachte Konstruktion überhaupt möglich ist.",
      services: ["/de/buehne-mieten", "/de/zelt-mieten", "/de/ton-und-lichttechnik"],
    },
    {
      name: "Adana",
      slug: "adana",
      desc: "Regionale Firmenveranstaltungen, Messen und Freiluftprogramme.",
      focus:
        "Große Entfernung zu Istanbul: Transport und Unterbringung der Crew werden zu eigenen Positionen im Angebot.",
      planning:
        "Je früher der Termin feststeht, desto besser lässt sich der Transport mit anderen Projekten bündeln.",
      services: ["/de/buehne-mieten", "/de/led-wand-mieten", "/de/zelt-mieten"],
    },
  ];

  const services = [
    { title: "LED-Wand mieten", href: "/de/led-wand-mieten" },
    { title: "Traversen mieten", href: "/de/traversen-mieten" },
    { title: "Bühne & Podest mieten", href: "/de/buehne-mieten" },
    { title: "Ton- und Lichttechnik", href: "/de/ton-und-lichttechnik" },
    { title: "Zelt mieten", href: "/de/zelt-mieten" },
    { title: "Tische & Stühle mieten", href: "/de/tische-und-stuehle-mieten" },
  ];

  const steps = [
    { id: "services", title: "Leistungen", desc: "Gewerke auswählen und zu einem Umfang bündeln." },
    {
      id: "process",
      title: "Ablauf",
      desc: "Briefing → Angebot → Logistik → Aufbau und Tests → Betrieb → Abbau.",
    },
    { id: "regions", title: "Städte", desc: "Planung und Zeitplan werden nach Stadt festgelegt." },
    {
      id: "regional-notes",
      title: "Hinweise je Stadt",
      desc: "Praktische Unterschiede in den wichtigsten Städten.",
    },
    {
      id: "planning",
      title: "Checkliste",
      desc: "Strom, Untergrund, Höhe, Sicherheit und Zufahrt im Überblick.",
    },
    { id: "faq", title: "Fragen", desc: "Häufige Fragen zur regionalen Vermietung." },
  ];

  const faqs = [
    {
      q: "Was bedeutet regionale Vermietung",
      a: "Dass Equipment wie LED-Wand, Traversen, Bühne sowie Ton- und Lichttechnik nach Ihrer Stadt geplant wird – einschließlich Transport, Aufbau, Betreuung und Abbau vor Ort.",
    },
    {
      q: "Sind Sie in der gesamten Türkei im Einsatz",
      a: "Ja. Je nach Umfang stellen wir Aufbau und Technikcrew in allen Provinzen. Transport und Unterbringung weisen wir im Angebot getrennt aus.",
    },
    {
      q: "Unterscheiden sich die Preise nach Stadt",
      a: "Ja. Entfernung, Aufbauzeit, Crewgröße und der Equipmentumfang wirken sich auf die Kalkulation aus. Für eine erste Einschätzung genügt ein kurzes Briefing.",
    },
    {
      q: "Können mehrere Gewerke in einem Projekt kommen",
      a: "Ja. LED-Wand, Traversen, Bühne sowie Ton- und Lichttechnik lassen sich als ein abgestimmtes Paket planen – das ist meist auch günstiger als Einzelvergaben.",
    },
    {
      q: "Wann wird aufgebaut",
      a: "Je nach Projektgröße 24 bis 48 Stunden vorher, inklusive Tests. Kleinere Aufbauten lassen sich am selben Tag abschließen.",
    },
    {
      q: "Wie wird die Sicherheit auf der Baustelle geregelt",
      a: "Untergrund und Verankerung, Höhensicherung, Kabelwege und Fluchtwege werden beim Aufbau geprüft. Je nach Projektart planen wir zusätzliche Maßnahmen ein.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <RegionalRentalJsonLd services={services} faqs={faqs} steps={steps} regions={regions} />
      <RegionalRentalClient
        regions={regions}
        services={services}
        faqs={faqs}
        steps={steps}
        locale="de"
      />
    </div>
  );
}

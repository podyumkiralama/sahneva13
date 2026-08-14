// app/de/leistungen/page.js
import { YEARS_OF_EXPERIENCE } from "@/lib/experience";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import WebMcpServiceTools from "@/components/WebMcpServiceTools";
import { BASE_SITE_URL, ORGANIZATION_ID } from "@/lib/seo/schemaIds";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";

/* ───── META & ISR ───── */
export const metadata = {
  title: "Leistungen | Veranstaltungstechnik in der Türkei",
  description:
    "Bühnen, LED-Wände, Ton- und Lichttechnik, Podeste, Zelte und komplette Eventproduktion in der gesamten Türkei – geplant, aufgebaut und betreut von einem Team.",
  alternates: {
    canonical: `${BASE_SITE_URL}/de/leistungen`,
    languages: {
      "tr-TR": `${BASE_SITE_URL}/hizmetler`,
      en: `${BASE_SITE_URL}/en/services`,
      de: `${BASE_SITE_URL}/de/leistungen`,
      ar: `${BASE_SITE_URL}/ar/services`,
      ru: `${BASE_SITE_URL}/ru/services`,
      zh: `${BASE_SITE_URL}/zh/services`,
      "x-default": `${BASE_SITE_URL}/en/services`,
    },
  },
  openGraph: {
    title: "Leistungen | Sahneva – Veranstaltungstechnik in der Türkei",
    description:
      "Bühne, LED-Wand, Ton- und Lichttechnik, Podeste und Zelte mieten sowie komplette Eventproduktion in der gesamten Türkei.",
    url: `${BASE_SITE_URL}/de/leistungen`,
    images: [
      {
        url: `${BASE_SITE_URL}/img/hizmetler-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Leistungen von Sahneva – Bühne, LED-Wand, Ton- und Lichttechnik sowie Zelte",
      },
    ],
    type: "website",
    locale: "de_DE",
    siteName: "Sahneva",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leistungen | Sahneva – Veranstaltungstechnik in der Türkei",
    description:
      "Bühne, LED-Wand, Ton- und Lichttechnik, Podeste und Zelte mieten sowie komplette Eventproduktion in der gesamten Türkei.",
    images: [`${BASE_SITE_URL}/img/hizmetler-hero.webp`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

export const revalidate = 3600;
const SITE_URL = BASE_SITE_URL;

/* ───── STRUCTURED DATA ───── */
function ServicesStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Leistungen von Sahneva",
    description:
      "Vermietung von Bühnen, LED-Wänden, Ton- und Lichttechnik, Podesten und Zelten sowie technische Eventproduktion in der Türkei",
    image: `${SITE_URL}/img/hizmetler-hero.webp`,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "TR",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vermietung von Veranstaltungstechnik",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bühne mieten",
            description: "Planung, Aufbau und Betreuung von Bühnenkonstruktionen",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: "10000.00",
            maxPrice: "200000.00",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "LED-Wand mieten",
            description: "Vermietung hochauflösender LED-Wände inklusive Bildregie",
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "1800.00",
            priceCurrency: "TRY",
            unitText: "m²",
            unitCode: "MTK",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ton- und Lichttechnik",
            description: "Vermietung von Beschallungs- und Lichtanlagen mit Technikpersonal",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: "10000.00",
            maxPrice: "300000.00",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Podest mieten",
            description: "Modulare Podeste und Laufstege",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: "250.00",
            maxPrice: "100000.00",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Eventzelt mieten" },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: "6000.00",
            maxPrice: "800000.00",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Stuhlvermietung" },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "200.00",
            priceCurrency: "TRY",
            unitText: "pro Stück",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Tischvermietung" },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: "1000.00",
            maxPrice: "2000.00",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Logistik Istanbul" },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            price: "7000.00",
          },
        },
      ],
    },
  };

  return <JsonLd data={schema} />;
}

/* ───── DETAILLIERTE LEISTUNGSLISTE ───── */
function ServicesDetailList() {
  const services = [
    {
      title: "Bühnenbau",
      description: "Traversensysteme, modulare Bühnen und Laufstege",
      anchor: "buehne",
      items: [
        "Bühnenmaße 3×3 m, 6×4 m, 8×4 m und 10×6 m",
        "Traversensysteme aus Aluminium samt Sicherheitsausrüstung",
        "Modulare Podeste (1×1 m, 2×1 m) und Laufsteg-Layouts",
        "Bühnenbild und Branding der Flächen",
      ],
    },
    {
      title: "LED-Wände",
      description: "Hochauflösende LED-Flächen für innen und außen",
      anchor: "led",
      items: [
        "Pixelabstände P2.5, P3, P4, P5 und P6",
        "Indoor-Kabinette und wetterfeste Outdoor-Kabinette nach IP65",
        "Aufbau, Operator vor Ort und Verwaltung der Inhalte",
        "HD-Bildprozessoren und Steuerungssysteme",
      ],
    },
    {
      title: "Beschallung",
      description: "Vermietung und Einmessung professioneller Tontechnik",
      anchor: "ton",
      items: [
        "Line-Array-Systeme und digitale Mischpulte",
        "Funkmikrofone (Handsender und Ansteckmikrofone)",
        "Tontechniker und Operator während der Veranstaltung",
        "Einmessung und akustische Anpassung an die Location",
      ],
    },
    {
      title: "Lichttechnik",
      description: "Licht- und Effektanlagen für Bühne und Raum",
      anchor: "licht",
      items: [
        "Moving Heads, Spots und Washer",
        "Laser, Hazer und Spezialeffektgeräte",
        "DMX-Steuerung samt Operator",
        "Lichtprogrammierung und Synchronisation mit dem Ablauf",
      ],
    },
    {
      title: "Zelte",
      description: "Eventzelte und temporäre Bauten",
      anchor: "zelt",
      items: [
        "Pagodenzelte, stützenfreie Zelte und Industriezelte",
        "Zeltgrößen 3×3 m, 6×3 m, 9×3 m, 9×6 m und 12×6 m",
        "Heizung, Kühlung und Beleuchtung im Zelt",
        "Bodenaufbau und Ausstattung",
      ],
    },
    {
      title: "Mobiliar & Bestuhlung",
      description: "Tische, Stühle und Ausstattung für Veranstaltungen",
      anchor: "mobiliar",
      items: [
        "Banketttische (rund und rechteckig)",
        "Konferenz- und Stehtischbestuhlung",
        "Tischwäsche und dekorative Elemente",
        "Anlieferung, Aufbau und Abholung",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {services.map((service) => (
        <section
          key={service.anchor}
          id={service.anchor}
          className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100"
        >
          <h3 className="text-2xl font-black text-neutral-900 mb-4">{service.title}</h3>
          <p className="text-neutral-700 mb-6 text-lg">{service.description}</p>
          <ul className="grid md:grid-cols-2 gap-3">
            {service.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-center gap-3 text-neutral-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

/* ───── HAUPTKOMPONENTE ───── */
export default function GermanServicesPage() {
  const baseUrl = SITE_URL;
  const canonical = `${baseUrl}/de/leistungen`;
  const breadcrumbItems = [
    { name: "Startseite", url: `${baseUrl}/de` },
    { name: "Leistungen", url: canonical },
  ];

  const QUICK_ACCESS = [
    {
      href: "/de/buehne-mieten",
      title: "Bühne & Podeste",
      description: "Traversendächer, modulare Bühnen und Laufstege",
      icon: "🎪",
      color: "from-blue-500 to-cyan-500",
    },
    {
      href: "/de/led-wand-mieten",
      title: "LED-Wand mieten",
      description: "Pixelabstände P2 bis P6 für innen und außen",
      icon: "🖥️",
      color: "from-green-500 to-emerald-500",
    },
    {
      href: "/de/ton-und-lichttechnik",
      title: "Ton- und Lichttechnik",
      description: "Line-Array-Beschallung, Funkmikrofone, Licht und Traversen",
      icon: "🎵",
      color: "from-orange-500 to-red-500",
    },
    {
      href: "/de/zelt-mieten",
      title: "Eventzelte",
      description: "Pagoden, stützenfreie Zelte und Industriezelte",
      icon: "⛺",
      color: "from-teal-500 to-blue-500",
    },
    {
      href: "/de/firmenevents",
      title: "Firmenevents",
      description: "Konferenzen, Produktlaunches, Händlertagungen und Galaabende",
      icon: "🏢",
      color: "from-violet-500 to-purple-600",
    },
    {
      href: "/de/projekte",
      title: "Projekte",
      description: "Realisierte Produktionen mit Umfang und Rahmenbedingungen",
      icon: "🗺️",
      color: "from-sky-500 to-indigo-500",
    },
    {
      href: "/de/referenzen",
      title: "Referenzen",
      description: "Videos und Einblicke aus Aufbau und Betrieb",
      icon: "🎬",
      color: "from-amber-500 to-orange-500",
    },
    {
      href: "#mobiliar",
      title: "Mobiliar & Bestuhlung",
      description: "Bankett-, Konferenz- und Stehtischausstattung",
      icon: "🪑",
      color: "from-indigo-500 to-purple-500",
    },
    {
      href: "/de/kontakt",
      title: "Angebot anfordern",
      description: "Datum, Stadt und Umfang senden – Sie erhalten eine Kalkulation",
      icon: "✉️",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const SERVICE_FEATURES = [
    {
      icon: "⚡",
      title: "Planbarer Aufbau",
      description: "Aufbau und Abnahme in der Regel innerhalb von 2 bis 6 Stunden",
    },
    {
      icon: "🛡️",
      title: "Sicherheit dokumentiert",
      description: "Feste Prüfabläufe für Statik, Lastaufnahme und Stromversorgung",
    },
    {
      icon: "💎",
      title: "Gepflegtes Equipment",
      description: "Aktuelle Gerätegenerationen, regelmäßig gewartet und geprüft",
    },
    {
      icon: "🌍",
      title: "Landesweit im Einsatz",
      description: "Technikcrew und Logistik in allen 81 Provinzen der Türkei",
    },
    {
      icon: "📞",
      title: "Erreichbar rund um die Uhr",
      description: "Technische Betreuung und Beratung auch außerhalb der Bürozeiten",
    },
    {
      icon: "💰",
      title: "Nachvollziehbare Kalkulation",
      description: "Detailliertes Angebot ohne versteckte Positionen",
    },
  ];

  const WORKING_MODELS = [
    {
      title: "Als Hauptauftragnehmer",
      description:
        "Sie beauftragen uns direkt mit der gesamten technischen Produktion: Planung, Equipment, Logistik, Aufbau, Betrieb und Abbau laufen über ein Team und einen Ansprechpartner.",
      points: [
        "Ein Angebot über alle Gewerke",
        "Abstimmung mit Location und Behörden",
        "Technische Leitung während der Veranstaltung",
      ],
    },
    {
      title: "Als technischer Partner Ihrer Agentur",
      description:
        "Sie führen den Kunden, wir liefern die Technik im Hintergrund. Kommunikation, Auftreten vor Ort und Dokumentation richten sich nach Ihren Vorgaben.",
      points: [
        "Auftritt im Namen Ihrer Agentur",
        "Technische Zuarbeit für Ihre Angebote",
        "Feste Ansprechpartner für Ihre Projektleitung",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 overflow-hidden">
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <ServicesStructuredData />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg transition-all duration-200"
      >
        Zum Hauptinhalt springen
      </a>

      {/* HERO */}
      <section
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-14 lg:pt-16 text-white overflow-hidden"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/img/hizmetler-hero.webp"
            alt="Leistungen von Sahneva – Veranstaltungstechnik und Equipment für Events"
            fill
            priority
            fetchPriority="high"
            quality={80}
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.65) 0%, rgba(30,58,138,0.35) 45%, rgba(88,28,135,0.28) 100%)",
            }}
          />

          <div
            className="absolute inset-0 opacity-35"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="absolute -top-28 -right-28 w-96 h-96 bg-purple-500/14 rounded-full blur-3xl" />
          <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-blue-500/14 rounded-full blur-3xl" />
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
          aria-hidden="true"
        >
          <span className="text-[120px] lg:text-[180px] font-black text-white/5 tracking-wider">
            TECHNIK
          </span>
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 py-10 md:py-12 text-center">
            <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-white/90 text-sm font-medium">
                  Landesweit im Einsatz
                </span>
              </div>

              <h1
                id="hero-title"
                className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-[0_12px_35px_rgba(0,0,0,0.55)]"
              >
                <span className="block">UNSERE</span>{" "}
                <span className="text-blue-200">Leistungen</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl 2xl:max-w-4xl mx-auto">
                Von der Bühne über die LED-Wand bis zur kompletten Produktion —
                <br />
                <strong className="text-blue-300">alles aus einer Hand</strong>
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="#service-list"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  aria-label="Zu den Leistungen springen"
                >
                  <span className="flex items-center gap-2">
                    Leistungen ansehen
                    <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                      →
                    </span>
                  </span>
                </a>

                <a
                  href="tel:+905453048671"
                  className="group bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  aria-label="Für weitere Informationen anrufen"
                >
                  📞 Jetzt anrufen
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none" aria-hidden="true">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
            </div>
          </div>
        </div>

        <div className="relative z-10 h-12 bg-gradient-to-b from-transparent to-white" />
      </section>

      <div id="main" className="relative" style={{ color: "#0f172a" }}>
        {/* SCHNELLZUGRIFF */}
        <section className="py-20 bg-gradient-to-br from-white to-blue-50/50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Alle <span className="text-blue-700">Leistungen</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Equipment, Crew und Betreuung für Ihre Veranstaltung – von einem Anbieter
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {QUICK_ACCESS.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-neutral-100 hover:border-blue-200 transition-all duration-500 hover:scale-105"
                  aria-label={`Details zu ${service.title} öffnen`}
                >
                  <div
                    className="text-4xl mb-4 gradient-text gradient-text--safe-xl"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed text-sm">{service.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    <span>Details ansehen</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* MERKMALE */}
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-100/30">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Warum <span className="text-blue-700">Sahneva?</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                {YEARS_OF_EXPERIENCE} Jahre Praxis und eingespielte Gewerke, die vor Ort zusammenarbeiten
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICE_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-neutral-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 text-center"
                >
                  <div className="text-4xl mb-4 gradient-text gradient-text--safe-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black text-neutral-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DETAILLIERTE LEISTUNGEN */}
        <section id="service-list" className="py-20 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Technik für <span className="text-blue-700">jede Veranstaltung</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Vom Bühnenaufbau bis zur Leitung der gesamten Produktion übernehmen wir jeden Schritt
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8" />
            </div>

            <ServicesDetailList />
          </div>
        </section>

        {/* ZUSAMMENARBEIT */}
        <section className="py-20 bg-gradient-to-br from-white to-slate-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Zwei Wege der <span className="text-blue-700">Zusammenarbeit</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Ob Sie als Unternehmen direkt beauftragen oder als Agentur einen Technikpartner vor Ort
                suchen – beide Wege sind bei uns eingespielt.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {WORKING_MODELS.map((model) => (
                <div
                  key={model.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
                >
                  <h3 className="text-2xl font-black text-neutral-900">{model.title}</h3>
                  <p className="mt-4 text-neutral-700 leading-relaxed">{model.description}</p>
                  <ul className="mt-6 space-y-3">
                    {model.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-neutral-700">
                        <div className="mt-2 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ERGÄNZENDE LEISTUNGEN */}
        <section className="py-20 bg-gradient-to-br from-neutral-900 to-blue-900/95">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ergänzende <span className="text-blue-200">Leistungen</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Damit auch die Bereiche rund um die Technik zuverlässig laufen
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      🎯
                    </span>
                    Organisation & Produktion
                  </h3>
                  <ul className="space-y-3 text-white/90">
                    {[
                      "Planung und Steuerung der Veranstaltung",
                      "Koordination der technischen Produktion",
                      "Betreuung von Künstlern und Referenten",
                      "Backstage und Künstlergarderoben",
                      "Sicherheitskonzept und Besucherlenkung",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      🚚
                    </span>
                    Logistik & Unterstützung
                  </h3>
                  <ul className="space-y-3 text-white/90">
                    {[
                      "Transport und Aufbau des Equipments",
                      "Bereitstellung von Technikpersonal",
                      "Planung von Anreise und Unterkunft",
                      "Catering und Gästebetreuung",
                      "Reinigung und Abfallentsorgung",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      📸
                    </span>
                    Medien & Bild
                  </h3>
                  <ul className="space-y-3 text-white/90">
                    {[
                      "Veranstaltungsfotografie",
                      "Videoproduktion und Livestream",
                      "Drohnenaufnahmen",
                      "Betreuung der sozialen Kanäle",
                      "Presse- und Öffentlichkeitsarbeit",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      🎨
                    </span>
                    Gestaltung & Ausstattung
                  </h3>
                  <ul className="space-y-3 text-white/90">
                    {[
                      "Raumgestaltung und Dekoration",
                      "Lichtdesign",
                      "Branding und Grafik",
                      "Bühnenbau und Kulissen nach Maß",
                      "Blumenschmuck und Begrünung",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WebMcpServiceTools locale="de" contactHref="/de/kontakt" />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="container max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Angebot
              <span className="text-yellow-300">&nbsp;anfordern</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Schildern Sie uns Ihre Veranstaltung – Sie erhalten innerhalb von zwei Stunden eine
              ausführliche Kalkulation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <a
                href="tel:+905453048671"
                className="group bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="Für ein ausführliches Angebot anrufen"
              >
                <span className="flex items-center justify-center gap-2">📞 Anrufen</span>
              </a>

              <a
                href="https://wa.me/905453048671"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="group bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="Über WhatsApp schreiben (wird in einem neuen Tab geöffnet)"
              >
                <span className="flex items-center justify-center gap-2">💬 WhatsApp</span>
              </a>

              <Link
                href="/de/kontakt"
                className="group bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl border-2 border-white transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="Über das Kontaktformular schreiben"
              >
                <span className="flex items-center justify-center gap-2">📧 Kontakt</span>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
              <p className="text-white/90 text-sm">
                <strong>⏱️ Antwort innerhalb von 2 Stunden:</strong> Während der Geschäftszeiten
                erhalten Sie zu jeder Anfrage ein ausführliches Angebot samt technischer Einschätzung.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

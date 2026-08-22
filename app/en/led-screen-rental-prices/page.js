import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  FileCheck2,
  Layers3,
  MapPin,
  Monitor,
  PackageCheck,
  Ruler,
  Truck,
} from "lucide-react";

import PageHero from "@/components/PageHero";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { buildAlternatesForPath } from "@/lib/seo/alternates";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { getLastModifiedForFile } from "@/lib/seoLastModified";
import { LED_SCREEN_PRICING } from "@/lib/ledScreenPricing";

export const revalidate = 86400;

const SLUG = "/en/led-screen-rental-prices";
const PAGE_URL = `${BASE_SITE_URL}${SLUG}`;
const HERO_IMAGE = "/img/led/300m2-p19-indoor-led-ekran-kurumsal-etkinlik-sahneva.webp";
const TECH_IMAGE = "/img/led/p19-indoor-led-teknik-masa-kurumsal-konferans-sahneva.webp";
const PUBLISH_DATE = "2026-08-22T00:00:00+03:00";
const MODIFIED_DATE = `${getLastModifiedForFile(
  "app/en/led-screen-rental-prices/page.js",
  "2026-08-22",
)}T00:00:00+03:00`;
const PRICE_VALID_UNTIL = LED_SCREEN_PRICING.priceValidUntil;
const PHONE = "905453048671";
const WHATSAPP_TEXT =
  "Hello, I would like an itemised LED screen rental quote for an event in Turkey. Event date: [date], city: [city], venue: [indoor/outdoor], approximate screen size: [width x height / m2], preferred panel: [standard/P1.9].";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const PRICES = {
  standard: LED_SCREEN_PRICING.standard.perSqm,
  premiumP19: LED_SCREEN_PRICING.premiumP19.perSqm,
  currency: LED_SCREEN_PRICING.currency,
};

const quickLinks = [
  { href: "#published-led-screen-rental-prices", label: "Published rates" },
  { href: "#what-is-included", label: "What is included?" },
  { href: "#what-changes-the-cost", label: "Cost drivers" },
  { href: "#p19-led-screen-rental-cost", label: "P1.9 pricing" },
  { href: "#quote-brief", label: "Quote brief" },
  { href: "#faq", label: "FAQ" },
];

const priceRows = [
  {
    type: "Standard indoor / outdoor LED screen",
    rate: `From TRY ${formatTry(PRICES.standard)}/m²`,
    use: "The standard indoor or outdoor panel selected for the project",
    note: "Panel surface starting rate; final scope depends on the build and venue.",
  },
  {
    type: "P1.9 indoor LED screen",
    rate: `From TRY ${formatTry(PRICES.premiumP19)}/m²`,
    use: "Close-view launches, galas, conferences and indoor protocol events",
    note: "Higher pixel density and resolution produce the higher starting rate.",
  },
  {
    type: "Installation and de-rig",
    rate: "Project-specific",
    use: "Ground stack, rigging, cabling, testing and dismantling",
    note: "Calculated from access, load-in times, structure and crew requirements.",
  },
  {
    type: "NovaStar processing and technical control",
    rate: "Project-specific",
    use: "Content switching, image control, live cameras and show operation",
    note: "Specified from the signal flow and programme requirements.",
  },
  {
    type: "Transport outside Istanbul",
    rate: "Quoted separately",
    use: "Vehicle, crew travel, accommodation and regional site logistics",
    note: "Listed separately so that the equipment and logistics costs stay clear.",
  },
];

const includedItems = [
  "LED panel selection and screen-area calculation",
  "Support structure, rigging and cabling plan",
  "Installation, de-rig and on-site testing",
  "NovaStar video processing and image-control infrastructure",
  "Content flow, technical control and show operation",
  "On-site technical crew for the agreed event period",
];

const costDrivers = [
  {
    icon: Layers3,
    title: "Panel type and pixel pitch",
    text: "A finer pixel pitch contains more pixels in the same surface area. P1.9 therefore carries a higher starting rate than a standard LED panel.",
  },
  {
    icon: Ruler,
    title: "Total LED surface",
    text: "Width multiplied by height gives the nominal m². Cabinet dimensions, aspect ratio and spare-module planning can affect the final build quantity.",
  },
  {
    icon: PackageCheck,
    title: "Structure and installation",
    text: "A simple ground-supported wall and a flown, curved or custom structure require different engineering, rigging time and crew levels.",
  },
  {
    icon: Cpu,
    title: "Processor and control",
    text: "NovaStar processing, presentation switching, camera feeds, multi-screen synchronisation and technical operation are scoped to the show flow.",
  },
  {
    icon: MapPin,
    title: "Venue access",
    text: "Loading bays, lift dimensions, working-at-height rules, limited build windows and venue approvals can change labour and equipment requirements.",
  },
  {
    icon: Truck,
    title: "City and logistics",
    text: "Projects outside Istanbul may add vehicle, fuel, travel, accommodation and local access costs to the screen and production package.",
  },
];

const briefItems = [
  "Event date, city and venue name",
  "Indoor or outdoor use and expected operating hours",
  "Preferred width × height, or stage width if the screen size is not decided",
  "Nearest audience distance and the type of content to be shown",
  "Load-in, rehearsal, show and de-rig times",
  "Camera, presentation, playback, NovaStar control or live-stream requirements",
];

const comparisonRows = [
  ["Panel", "Brand/model or class, pixel pitch, indoor/outdoor rating and total active area"],
  ["Structure", "Ground stack, flown rig, custom support, ballast and engineering responsibility"],
  ["Video system", "Processor, scaler, playback, switching, signal conversion and backup path"],
  ["Labour", "Crew count, working hours, overnight work, installation, show call and de-rig"],
  ["Logistics", "Transport, parking, access equipment, accommodation and intercity travel"],
  ["Exclusions", "Venue fees, power supply, rigging points, permits, content production and overtime"],
];

const faq = [
  {
    q: "How much does LED screen rental cost in Turkey?",
    a: `Sahneva's published 2026 rates in Turkey start at TRY ${formatTry(PRICES.standard)} per m² for standard indoor/outdoor LED screens and TRY ${formatTry(PRICES.premiumP19)} per m² for P1.9 indoor LED. The final quote also reflects installation, structure, processing, crew, venue access and logistics.`,
  },
  {
    q: "Are LED screen rental prices the same across Turkey?",
    a: "The published panel starting rates stay the same reference point, but the total project price varies by city, venue and access conditions. Projects outside Istanbul can add vehicle, fuel, crew travel, accommodation and local logistics, all of which should be shown separately in the quote.",
  },
  {
    q: "Is LED screen rental always charged per square metre?",
    a: "The active LED surface is the main equipment calculation, but m² alone is not a complete project price. Pixel pitch, minimum deployment, structure, installation hours, video processing, technical control and logistics must also be aligned.",
  },
  {
    q: "What is included in the advertised starting price?",
    a: "The published figures are panel-surface starting rates, not an automatic all-inclusive package. Every proposal should state the panel, structure, cabling, installation, de-rig, processor, operator, transport and exclusions separately.",
  },
  {
    q: "Why does a P1.9 LED screen cost more?",
    a: "P1.9 panels place pixels closer together and deliver higher resolution at close viewing distances. They are suited to detailed presentations, camera work, launches, galas and conferences, so their published starting rate is higher than a standard panel.",
  },
  {
    q: "Are installation and dismantling included?",
    a: "They can be included in the project proposal, but the amount is confirmed after checking venue access, working hours, support structure, rigging, loading conditions and crew requirements. The quote should show the agreed scope clearly.",
  },
  {
    q: "Are NovaStar processing and an LED operator included?",
    a: "Processing and technical control are specified from the content and show flow. A straightforward playback setup and a multi-input production with cameras, switching or synchronised screens require different systems and operator coverage.",
  },
  {
    q: "How is LED screen size calculated?",
    a: "Nominal area is width multiplied by height. For example, a 6 m × 4 m wall is 24 m². The final cabinet layout also needs to respect the content aspect ratio, viewing distance, panel dimensions and support structure.",
  },
  {
    q: "What information is needed for an accurate quote?",
    a: "Send the event date, city, venue, indoor/outdoor use, approximate screen size, nearest viewing distance, content type, build and de-rig times, plus any camera, processor, playback or live-stream requirements.",
  },
];

export const metadata = {
  title: "LED Screen Rental Prices in Turkey 2026",
  description:
    "LED screen rental prices in Turkey: published 2026 starting rates per m² for standard and P1.9 panels, plus installation and logistics costs.",
  alternates: buildAlternatesForPath(SLUG),
  keywords: [
    "LED screen rental prices",
    "LED screen rental cost",
    "LED wall rental price",
    "LED screen rental price per square metre",
    "P1.9 LED screen rental cost",
    "LED screen rental prices in Turkey",
    "LED wall rental prices Turkey",
    "LED screen hire cost Turkey",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "LED Screen Rental Prices in Turkey 2026 | Cost per m²",
    description:
      "Compare published 2026 LED screen rental prices in Turkey for standard and P1.9 panels, including installation, processing, crew and logistics.",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: `${BASE_SITE_URL}${HERO_IMAGE}`,
        width: 1600,
        height: 739,
        alt: "P1.9 indoor LED screen used for a corporate event production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Screen Rental Prices in Turkey 2026 | Sahneva",
    description:
      "Published starting rates per m² for LED screen rental in Turkey, with the installation, processing and logistics items buyers should compare.",
    images: [`${BASE_SITE_URL}${HERO_IMAGE}`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

function formatTry(value) {
  return new Intl.NumberFormat("en-GB").format(value);
}

function buildJsonLd() {
  const webPageId = `${PAGE_URL}#webpage`;
  const serviceId = `${PAGE_URL}#service`;
  const offerCatalogId = `${PAGE_URL}#offer-catalog`;
  const standardOfferId = `${PAGE_URL}#standard-led-offer`;
  const p19OfferId = `${PAGE_URL}#p19-led-offer`;

  const offers = [
    {
      "@type": "Offer",
      "@id": standardOfferId,
      name: "Standard indoor / outdoor LED screen starting rate",
      price: String(PRICES.standard),
      priceCurrency: PRICES.currency,
      priceValidUntil: PRICE_VALID_UNTIL,
      availability: "https://schema.org/InStock",
      url: `${PAGE_URL}#published-led-screen-rental-prices`,
      description: "Published starting rate per square metre for a standard indoor or outdoor LED screen.",
      eligibleRegion: { "@type": "Country", name: "Turkey" },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(PRICES.standard),
        priceCurrency: PRICES.currency,
        unitText: "square metre",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MTK",
        },
      },
    },
    {
      "@type": "Offer",
      "@id": p19OfferId,
      name: "P1.9 indoor LED screen starting rate",
      price: String(PRICES.premiumP19),
      priceCurrency: PRICES.currency,
      priceValidUntil: PRICE_VALID_UNTIL,
      availability: "https://schema.org/InStock",
      url: `${PAGE_URL}#p19-led-screen-rental-cost`,
      description: "Published starting rate per square metre for a P1.9 indoor LED screen.",
      eligibleRegion: { "@type": "Country", name: "Turkey" },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(PRICES.premiumP19),
        priceCurrency: PRICES.currency,
        unitText: "square metre",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MTK",
        },
      },
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": webPageId,
        url: PAGE_URL,
        name: "LED Screen Rental Prices in Turkey 2026",
        description: metadata.description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": serviceId },
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${BASE_SITE_URL}${HERO_IMAGE}`,
          caption: "High-resolution P1.9 indoor LED screen infrastructure for events in Turkey.",
        },
        mainEntity: { "@id": serviceId },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "LED Screen Rental Pricing in Turkey",
        serviceType: "LED screen rental pricing and technical quotation",
        description: metadata.description,
        url: PAGE_URL,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "Country", name: "Turkey" },
        hasOfferCatalog: { "@id": offerCatalogId },
        offers,
      },
      {
        "@type": "OfferCatalog",
        "@id": offerCatalogId,
        name: "Published 2026 LED Screen Rental Prices in Turkey",
        itemListElement: offers,
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq-schema`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };
}

function SectionHeader({ eyebrow, title, description, light = false, align = "left" }) {
  const centered = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${centered}`}>
      <p
        className={`mb-3 text-sm font-black uppercase tracking-[0.18em] ${
          light ? "text-violet-700" : "text-violet-300"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-black leading-tight md:text-5xl ${
          light ? "text-slate-950" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 md:text-lg ${
            light ? "text-slate-700" : "text-slate-300"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Page() {
  const jsonLd = buildJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${BASE_SITE_URL}/en` },
          { name: "LED Screen Rental", url: `${BASE_SITE_URL}/en/led-screen-rental` },
          { name: "LED Screen Rental Prices in Turkey", url: PAGE_URL },
        ]}
      />
      <JsonLd id="ld-json-led-screen-rental-prices" data={jsonLd} />

      <div className="min-h-screen overflow-hidden bg-[#040817] text-white">
        <PageHero
          eyebrow="2026 cost per m² · Published starting rates"
          title="LED Screen Rental Prices"
          titleAccent="in Turkey"
          titleWide
          description="Sahneva's published 2026 price guide for LED screen rental in Turkey, with starting rates in TRY for standard indoor/outdoor walls and high-resolution P1.9 indoor screens."
          note={
            <>
              These are Sahneva&apos;s reference starting rates for projects in Turkey, not a
              fixed market-wide tariff. For panel options, installation capability and project
              images, visit the main{" "}
              <Link href="/en/led-screen-rental">LED screen rental service</Link>.
            </>
          }
          metrics={[
            {
              value: `TRY ${formatTry(PRICES.standard)}/m²`,
              label: "Standard LED screen",
              detail: "published starting rate",
            },
            {
              value: `TRY ${formatTry(PRICES.premiumP19)}/m²`,
              label: "P1.9 indoor LED",
              detail: "published starting rate",
            },
          ]}
          actions={[
            {
              key: "quote",
              label: "Request an itemised quote",
              href: WHATSAPP_URL,
              external: true,
              ariaLabel: "Request an itemised LED screen quote for an event in Turkey on WhatsApp",
            },
            {
              key: "rates",
              label: "Compare published rates",
              href: "#published-led-screen-rental-prices",
            },
            {
              key: "service",
              label: "Explore LED screen rental",
              href: "/en/led-screen-rental",
            },
          ]}
          quickLinks={quickLinks}
          quickLinksLabel="LED screen rental price guide sections"
          image={{
            src: HERO_IMAGE,
            alt: "High-resolution P1.9 indoor LED screen at a corporate event",
            sizes: "100vw",
          }}
        />

        <section id="published-led-screen-rental-prices" className="py-20 scroll-mt-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              eyebrow="Published rates"
              title="Published 2026 starting rates per m²"
              description="For LED screen rental in Turkey, the figures below are published starting rates per square metre. They establish the panel-cost baseline; a safe, working event system also needs an agreed structure, installation plan, video system, crew and logistics scope."
            />

            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[920px] border-collapse text-left">
                  <caption className="sr-only">
                    LED screen rental starting rates and project-specific quote items in Turkey
                  </caption>
                  <thead className="bg-violet-300/10 text-violet-100">
                    <tr>
                      {["Quote item", "Published rate", "Typical use", "Buyer note"].map((heading) => (
                        <th key={heading} scope="col" className="px-6 py-5 text-sm font-black uppercase tracking-[0.12em]">
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {priceRows.map((row) => (
                      <tr key={row.type} className="align-top">
                        <th scope="row" className="px-6 py-6 text-base font-black text-white">
                          {row.type}
                        </th>
                        <td className="px-6 py-6 font-black text-violet-200">{row.rate}</td>
                        <td className="px-6 py-6 leading-7 text-slate-300">{row.use}</td>
                        <td className="px-6 py-6 leading-7 text-slate-300">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-5 text-sm leading-7 text-amber-50">
              <strong>Price note:</strong> these reference rates are published in Turkish
              lira and shown through 31 December 2027. A dated proposal confirms the
              actual project total and its own validity period.
            </div>
          </div>
        </section>

        <section id="what-is-included" className="bg-white py-20 text-slate-950 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionHeader
                eyebrow="Itemised scope"
                title="What should an LED screen quote include?"
                description="A comparable quote separates the active LED surface from the systems and labour needed to deliver the show. Confirm each item instead of comparing one unexplained total against another."
                light
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {includedItems.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={20} aria-hidden="true" />
                    <span className="font-semibold leading-7 text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200">
              <table className="w-full border-collapse text-left">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-5 text-sm font-black uppercase tracking-[0.12em]">Comparison line</th>
                    <th scope="col" className="px-6 py-5 text-sm font-black uppercase tracking-[0.12em]">What must be stated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {comparisonRows.map(([label, value]) => (
                    <tr key={label}>
                      <th scope="row" className="px-6 py-5 font-black text-slate-950">{label}</th>
                      <td className="px-6 py-5 leading-7 text-slate-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="what-changes-the-cost" className="py-20 scroll-mt-24">
          <div className="container mx-auto px-4">
            <SectionHeader
              eyebrow="Cost drivers"
              title="Six factors that change an LED wall rental price"
              description="Two screens with the same nominal size can require different budgets. The difference should be traceable to technical scope, venue conditions or logistics—not left as an unexplained premium."
              align="center"
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {costDrivers.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <item.icon className="text-violet-300" size={32} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="p19-led-screen-rental-cost" className="bg-slate-950 py-20 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionHeader
                  eyebrow="High-resolution option"
                  title="Why P1.9 LED screen rental costs more"
                  description={`P1.9 panels place pixels closer together, creating a sharper image for audiences near the screen and for detailed presentation or camera content. Sahneva's published P1.9 indoor starting rate is TRY ${formatTry(PRICES.premiumP19)}/m².`}
                />
                <div className="mt-7 rounded-3xl border border-violet-300/30 bg-violet-300/10 p-6">
                  <p className="text-lg leading-8 text-violet-50">
                    Sahneva has a published <strong>300 m² Absen P1.9 indoor LED inventory</strong>.
                    Owned indoor stock also includes Unilumin P2.6 and P2.9 panels, so the pitch can
                    follow the viewing distance and content instead of forcing every brief onto one cabinet.{" "}
                    Use the <Link href="/en/blog/led-pixel-pitch-viewing-distance-guide" className="font-bold underline underline-offset-4">pixel pitch and viewing distance guide</Link>{" "}
                    to compare those options before requesting a quote.
                  </p>
                </div>
              </div>

              <figure className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
                <Image
                  src={HERO_IMAGE}
                  alt="P1.9 indoor LED screen installation for a corporate gala and conference"
                  width={1600}
                  height={900}
                  className="aspect-[16/9] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  loading="lazy"
                  unoptimized
                />
                <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-300">
                  Real P1.9 indoor LED infrastructure used for a large-format corporate production.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-slate-950">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <figure className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100">
                <Image
                  src={TECH_IMAGE}
                  alt="Technical control desk and NovaStar processing for a P1.9 indoor LED screen"
                  width={1600}
                  height={739}
                  className="aspect-[16/9] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  unoptimized
                />
              </figure>
              <div>
                <SectionHeader
                  eyebrow="Operational scope"
                  title="The screen surface is only one line of the budget"
                  description="A working LED wall also requires safe support, power and signal distribution, calibration, content control, testing and de-rig. NovaStar processing, technical operation and live inputs should be visible in the scope whenever the programme requires them."
                  light
                />
                <p className="mt-6 text-lg leading-8 text-slate-700">
                  If the screen is part of a wider technical package, compare it with the{" "}
                  <Link href="/en/av-rental-istanbul" className="font-black text-violet-700 underline underline-offset-4">
                    AV rental scope in Istanbul
                  </Link>{" "}
                  or the nationwide{" "}
                  <Link href="/en/event-production-company-turkey" className="font-black text-violet-700 underline underline-offset-4">
                    event production service in Turkey
                  </Link>{" "}
                  rather than duplicating crew and logistics across separate suppliers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="quote-brief" className="py-20 scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <SectionHeader
                  eyebrow="Accurate quotation"
                  title="Send this six-point LED screen brief"
                  description="A short, complete brief is more useful than requesting only a price per square metre. It allows the panel, screen size, structure, signal flow, labour and transport to be costed on the same assumptions."
                />
                <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  <Ruler className="text-violet-300" size={30} aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-black text-white">Basic area calculation</h3>
                  <p className="mt-4 rounded-2xl bg-slate-950 p-5 font-mono text-lg font-black text-white">
                    screen m² = width × height
                  </p>
                  <p className="mt-4 leading-7 text-slate-300">
                    Example: 6 m × 4 m = 24 m². Pixel pitch, cabinet layout,
                    aspect ratio and support structure are then checked against that size.
                  </p>
                </div>
              </div>

              <ol className="grid gap-4 sm:grid-cols-2">
                {briefItems.map((item, index) => (
                  <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-violet-300/15 font-black text-violet-200">
                      {index + 1}
                    </span>
                    <p className="mt-4 font-semibold leading-7 text-slate-200">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20 text-slate-950 scroll-mt-24">
          <div className="container mx-auto max-w-4xl px-4">
            <SectionHeader
              eyebrow="FAQ"
              title="Nationwide LED screen pricing: FAQ"
              description="Clear answers about pricing across Turkey, city logistics, per-square-metre rates, P1.9 panels, installation and the information required for a comparable proposal."
              light
              align="center"
            />
            <div className="mt-10 space-y-4">
              {faq.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 open:border-violet-300 open:bg-violet-50">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-slate-950">
                    {item.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-violet-100 text-violet-700 transition group-open:rotate-180" aria-hidden="true">
                      ⌄
                    </span>
                  </summary>
                  <p className="mt-5 border-l-4 border-violet-500 pl-5 leading-8 text-slate-700">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 pb-20 text-slate-950">
          <div className="container mx-auto">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <FileCheck2 className="text-violet-300" size={36} aria-hidden="true" />
                  <h2 className="mt-5 text-3xl font-black md:text-5xl">Request an itemised LED screen quote for your event in Turkey</h2>
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                    Share the date, Turkish city, venue, screen dimensions and technical inputs. We will align the panel, structure, processing, crew, logistics and exclusions in one project scope.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-violet-600 px-7 py-4 font-black text-white transition hover:bg-violet-500"
                  >
                    Request an itemised quote
                    <ArrowRight size={20} aria-hidden="true" />
                  </a>
                  <Link
                    href="/en/led-screen-rental"
                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-white/20 px-7 py-4 font-black text-white transition hover:bg-white/10"
                  >
                    View the LED service
                    <Monitor size={20} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

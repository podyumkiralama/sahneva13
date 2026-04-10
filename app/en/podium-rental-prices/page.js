// app/en/podium-rental-prices/page.js
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import JsonLd from "@/components/seo/JsonLd";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";

export const revalidate = 86400;

/* ================== URLS ================== */
const slug = "/en/podium-rental-prices";
const url = `${BASE_SITE_URL}${slug}`;

/* ================== DATES ================== */
const PUBLISH_DATE = "2026-02-09T00:00:00+03:00";
const PRICE_VALID_UNTIL = "2027-12-31";

/* ================== PRICES (2026) ================== */
const UNIT_PRICES = {
  platform_m2_week: 270, // TRY
  carpet_m2_week: 130, // TRY
  skirt_ml_week: 100, // TRY (per metre)
  ist_nakliye: 9000, // TRY (Istanbul fixed)
  currency: "TRY",
};

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== SEO METADATA ================== */
export const metadata = {
  title: "Podium Rental Prices 2026 | Istanbul Current m² List",
  description:
    "2026 podium rental prices: m² based, carpet-skirt included, fixed Istanbul transportation, installation and dismantling. Request a quote for fashion shows and concerts.",
  alternates: buildLanguageAlternates({
    tr: "/podyum-kiralama-fiyatlari",
    en: slug,
    xDefault: slug,
  }),
  openGraph: {
    type: "website",
    url,
    title: "Podium Rental Prices 2026 | Istanbul Current m² List | Sahneva",
    description:
      "Current m² based prices, sample calculations, and fast quotes. 2026 price guide with fixed Istanbul transportation (installation+dismantling included).",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: `${BASE_SITE_URL}/img/podyum/podyum-kiralama-fiyatlari-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Podium rental prices 2026 – m² based Istanbul current price list",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podium Rental Prices 2026 | Istanbul Current m² List",
    description:
      "Current m² based prices, sample calculations, and fast quotes. 2026 price guide with fixed Istanbul transportation (installation+dismantling included).",
    images: [`${BASE_SITE_URL}/img/podyum/podyum-kiralama-fiyatlari-hero.webp`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

/* ================== FAQ (2026 / Price Intent) ================== */
const FAQ = [
  {
    q: "How are podium rental prices calculated for 2026?",
    a: "The price is calculated based on platform area (m²), carpet covering (m²), skirt (metres), and Istanbul transportation (installation+dismantling included).",
  },
  {
    q: "Is the Istanbul transportation fee fixed?",
    a: "Yes. The Istanbul transportation fee on this page is 9,000 TRY and includes installation + dismantling (fixed).",
  },
  {
    q: "What determines podium rental prices for a fashion show?",
    a: "Runway dimensions, height, floor conditions, traffic volume, and operation details such as load-in/out hours affect the total budget. Unit prices are in the table; a precise quote is generated with project information.",
  },
  {
    q: "Are podium rental prices different for concert events?",
    a: "For concerts, since technical integration (sound/lighting/LED), heavy traffic, and time constraints may be higher, the total budget may vary based on the site plan. Unit prices are the same; application conditions are confirmed based on the project.",
  },
  {
    q: "Is short-term podium rental possible?",
    a: "Yes. Daily/weekly rental is available. For short-term projects, transportation and site planning can be a more prominent cost item.",
  },
  {
    q: "What determines podium prices?",
    a: "Area (m²), height, floor conditions, carpet/covering, skirt metre requirement, transportation, and site plan determine the total budget.",
  },
  {
    q: "What information is needed for a fast quote?",
    a: "Date, city/district, area (m²), height, carpet request, skirt metre requirement, and venue access information (floor/stairs/freight elevator) are sufficient.",
  },
  {
    q: "Are prices VAT inclusive?",
    a: "VAT status is stated separately in quotes. For corporate invoices, it is finalized according to payment/contract conditions.",
  },
];

/* ================== HELPERS ================== */
function tl(n) {
  try {
    return new Intl.NumberFormat("tr-TR").format(n);
  } catch {
    return String(n);
  }
}

/* ================== JSON-LD ================== */
function buildJsonLd() {
  // Mini: 12 m² + carpet + 14 m skirt + Istanbul transport (installation+dismantling included)
  const exampleLow =
    12 * UNIT_PRICES.platform_m2_week +
    12 * UNIT_PRICES.carpet_m2_week +
    14 * UNIT_PRICES.skirt_ml_week +
    UNIT_PRICES.ist_nakliye;

  // Pro: 48 m² + carpet + 28 m skirt + Istanbul transport (installation+dismantling included)
  const exampleHigh =
    48 * UNIT_PRICES.platform_m2_week +
    48 * UNIT_PRICES.carpet_m2_week +
    28 * UNIT_PRICES.skirt_ml_week +
    UNIT_PRICES.ist_nakliye;

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_SITE_URL}/en` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Podium Rental",
        item: `${BASE_SITE_URL}/en/podium-rental`,
      },
      { "@type": "ListItem", position: 3, name: "Podium Rental Prices", item: url },
    ],
  };

  const aggregateOffer = {
    "@type": "AggregateOffer",
    priceCurrency: UNIT_PRICES.currency,
    lowPrice: String(exampleLow),
    highPrice: String(exampleHigh),
    offerCount: "4",
    priceValidUntil: PRICE_VALID_UNTIL,
    availability: "https://schema.org/InStock",
    url,
  };

  const mainService = {
    "@type": "Service",
    name: "Podium Rental Prices (m² Based) — 2026",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: [
      { "@type": "Country", name: "Turkey" },
      { "@type": "AdministrativeArea", name: "Istanbul" },
    ],
    serviceType: "Podium rental pricing and quoting (platform/carpet/skirt/transportation)",
    inLanguage: "en-US",
    offers: [
      {
        "@type": "Offer",
        name: "Platform (Modular Podium) — 2026",
        price: String(UNIT_PRICES.platform_m2_week),
        priceCurrency: UNIT_PRICES.currency,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        url,
      },
      {
        "@type": "Offer",
        name: "Carpet Covering — 2026",
        price: String(UNIT_PRICES.carpet_m2_week),
        priceCurrency: UNIT_PRICES.currency,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        url,
      },
      {
        "@type": "Offer",
        name: "Skirt (Skirting) — 2026",
        price: String(UNIT_PRICES.skirt_ml_week),
        priceCurrency: UNIT_PRICES.currency,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        url,
      },
      {
        "@type": "Offer",
        name: "Istanbul Transportation (Installation + Dismantling Included) — 2026",
        price: String(UNIT_PRICES.ist_nakliye),
        priceCurrency: UNIT_PRICES.currency,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        url,
      },
    ],
  };

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: FAQ.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };

  const howTo = {
    "@type": "HowTo",
    name: "How to get a podium price quote?",
    description:
      "Share the required information for a fast quote, and we will generate a clear budget based on dimensions and site plan.",
    inLanguage: "en-US",
    step: [
      {
        "@type": "HowToStep",
        name: "Share dimension and date information",
        text: "Provide event date, city/district, area (m²), and height information.",
      },
      {
        "@type": "HowToStep",
        name: "Confirm options",
        text: "Specify carpet, skirt metre requirement, and venue access (floor/stairs/freight elevator).",
      },
      {
        "@type": "HowToStep",
        name: "Clear quote and site plan",
        text: "A quote with itemized totals based on unit prices + site plan is shared.",
      },
    ],
  };

  const webpage = {
    "@type": "WebPage",
    "@id": url,
    url,
    name: "Podium Rental Prices 2026",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    datePublished: PUBLISH_DATE,
    dateModified: PUBLISH_DATE,
    inLanguage: "en-US",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${BASE_SITE_URL}/img/podyum/podyum-kiralama-fiyatlari-hero.webp`,
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [webpage, breadcrumb, mainService, aggregateOffer, faqPage, howTo],
  };
}

export default function Page() {
  // Sample calculation (20 m² + carpet + 20 ml skirt + Istanbul transport)
  const sample = {
    m2: 20,
    skirt: 20,
    platform: 20 * UNIT_PRICES.platform_m2_week,
    carpet: 20 * UNIT_PRICES.carpet_m2_week,
    skirtCost: 20 * UNIT_PRICES.skirt_ml_week,
    nakliye: UNIT_PRICES.ist_nakliye,
  };
  const sampleTotal =
    sample.platform + sample.carpet + sample.skirtCost + sample.nakliye;

  // m² range table (reference)
  const ranges = [
    { label: "Mini (12 m²)", m2: 12, skirt: 14 },
    { label: "Mid (24 m²)", m2: 24, skirt: 20 },
    { label: "Pro (48 m²)", m2: 48, skirt: 28 },
  ].map((r) => {
    const platform = r.m2 * UNIT_PRICES.platform_m2_week;
    const carpet = r.m2 * UNIT_PRICES.carpet_m2_week;
    const skirt = r.skirt * UNIT_PRICES.skirt_ml_week;
    const total = platform + carpet + skirt + UNIT_PRICES.ist_nakliye;

    // Range: +- 10% based on site conditions (reference)
    const low = Math.round(total * 0.9);
    const high = Math.round(total * 1.1);

    return { ...r, platform, carpet, skirt, total, low, high };
  });

  const jsonLd = buildJsonLd();

  const districtsEurope = [
    "Beşiktaş",
    "Şişli",
    "Beyoğlu",
    "Sarıyer",
    "Kağıthane",
    "Bakırköy",
    "Bahçelievler",
    "Başakşehir",
    "Esenyurt",
    "Beylikdüzü",
    "Avcılar",
    "Zeytinburnu",
  ];

  const districtsAsia = [
    "Kadıköy",
    "Üsküdar",
    "Ataşehir",
    "Maltepe",
    "Kartal",
    "Pendik",
    "Tuzla",
    "Sancaktepe",
    "Çekmeköy",
    "Ümraniye",
    "Beykoz",
    "Şile",
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${BASE_SITE_URL}/en` },
          { name: "Podium Rental", url: `${BASE_SITE_URL}/en/podium-rental` },
          { name: "Podium Rental Prices", url },
        ]}
      />

      <JsonLd
        id="ld-json-podium-prices-en"
        data={jsonLd}
      />

      <main className="bg-white">
        {/* HERO */}
        <section className="relative bg-slate-950 text-white pt-20 pb-14 md:pb-16 lg:pt-24">
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/img/podyum/podyum-kiralama-fiyatlari-hero.webp"
              alt="Podium price table and professional modular podium installation"
              fill
              priority
              fetchPriority="high"
              className="object-cover"
              sizes="100vw"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/45 via-purple-900/20 to-slate-950/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-purple-900/25" />
            <div
              className="absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 px-4 py-2 mb-5">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.2)]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-extrabold text-white">
                    2026 Current List • m² Based Calculation
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 drop-shadow-[0_12px_35px_rgba(0,0,0,0.55)]">
                  Podium Rental <span className="text-blue-200">Prices</span>{" "}
                  2026
                </h1>

                <p className="text-base md:text-xl text-white/85 leading-relaxed mb-4 max-w-3xl mx-auto">
                  You can review the current podium rental prices for <b>2026</b> in Istanbul
                  on an <b>m² basis</b> below. Clear calculation examples for fashion shows,
                  concerts, and wedding events are included.
                </p>

                <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-5">
                  Budget is calculated based on area (m²), height, carpet/covering, skirt, and{" "}
                  <b>Istanbul transportation</b>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Link
                    href="/en/podium-rental"
                    className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl border-2 border-white/40 text-white bg-white/20 hover:bg-white/30 backdrop-blur-xl transition shadow-lg"
                  >
                    <span className="text-xl mr-2">🎯</span> Podium Rental
                  </Link>
                  <a
                    href="https://wa.me/905453048671?text=Hello%2C+I+would+like+a+podium+rental+price+quote.+Date%3A+%5Bdd.mm.yyyy%5D+Area%3A+%5Bm2%5D+District%3A+%5Bdistrict%5D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition"
                  >
                    <span className="text-xl mr-2">💬</span> Quote via WhatsApp
                  </a>
                </div>

                <p className="mt-6 text-sm text-white/70">
                  Prices may be updated until {PRICE_VALID_UNTIL}; quote terms may vary based on
                  seasonal demand.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 h-12 bg-gradient-to-b from-transparent to-white" />
        </section>

        {/* PRICING TABLE */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                2026 Current <span className="text-blue-700">Unit Price</span>{" "}
                Table
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The values below are reference starting prices for standard modular platform systems.
              </p>

              <p className="mt-4 text-base text-gray-600">
                Note: This page is price-focused. For service details and example installations,
                use the service link in the section above.
              </p>
            </div>

            <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-0">
                  <caption className="sr-only">
                    2026 podium rental unit prices table: platform, carpet, skirt, and Istanbul
                    transportation (installation+dismantling included). Prices are reference starting values.
                  </caption>
                  <thead>
                    <tr className="text-left bg-gray-50">
                      <th className="border-b border-gray-200 px-6 py-4 text-base font-bold text-gray-900">
                        Item
                      </th>
                      <th className="border-b border-gray-200 px-6 py-4 text-base font-bold text-gray-900">
                        Unit
                      </th>
                      <th className="border-b border-gray-200 px-6 py-4 text-base font-bold text-gray-900">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-base text-gray-700">
                    <tr>
                      <td className="border-b border-gray-100 px-6 py-4">
                        Platform (Modular Podium)
                      </td>
                      <td className="border-b border-gray-100 px-6 py-4">
                        m² / week
                      </td>
                      <td className="border-b border-gray-100 px-6 py-4 font-semibold text-gray-900">
                        {tl(UNIT_PRICES.platform_m2_week)} TRY
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-100 px-6 py-4">
                        Carpet Covering
                      </td>
                      <td className="border-b border-gray-100 px-6 py-4">
                        m² / week
                      </td>
                      <td className="border-b border-gray-100 px-6 py-4 font-semibold text-gray-900">
                        {tl(UNIT_PRICES.carpet_m2_week)} TRY
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-100 px-6 py-4">
                        Skirt (Skirting)
                      </td>
                      <td className="border-b border-gray-100 px-6 py-4">
                        metre / week
                      </td>
                      <td className="border-b border-gray-100 px-6 py-4 font-semibold text-gray-900">
                        {tl(UNIT_PRICES.skirt_ml_week)} TRY
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        Istanbul Transportation (Installation + Dismantling Included)
                      </td>
                      <td className="px-6 py-4">fixed</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {tl(UNIT_PRICES.ist_nakliye)} TRY
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500 text-center">
              Note: Prices are reference starting values. VAT and site conditions
              (access, time, floor) are finalized in the quote.
            </p>

            <div className="mt-10 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 text-center">
                Podium Rental Prices in Istanbul 2026
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
                Podium rental prices across Istanbul are calculated based on square metres, height,
                carpet/skirt options, and transportation items. The table above shows the starting
                unit prices valid for 2026.
              </p>
            </div>

            {/* FACTORS */}
            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-lg">
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                  Key Factors Affecting Price
                </h2>
                <ul className="space-y-3 text-lg text-gray-700 leading-relaxed">
                  <li>• Area (m²) and target height (e.g. 20–40–60 cm)</li>
                  <li>• Floor condition (flat/uneven/sloped) and leveling requirements</li>
                  <li>• Carpet covering (color/density) and skirt metre requirement</li>
                  <li>
                    • Site window (night work, short load-in, same-day dismantling)
                  </li>
                  <li>
                    • Venue access (floor, stairs, freight elevator, long carry)
                  </li>
                  <li>
                    • Technical integration (working alongside sound/lighting/LED)
                  </li>
                  <li>• Seasonal demand and crew/vehicle planning</li>
                </ul>
                <p className="mt-5 text-base text-gray-600">
                  Goal: correctly identify the same items and avoid surprise costs.
                  Technical scope and application steps vary by need and venue.
                </p>
              </div>

              {/* M2 RANGES */}
              <div className="rounded-3xl border-2 border-blue-100 bg-blue-50/60 p-8 shadow-lg">
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                  Reference Budget Ranges by m²
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The ranges below are example scenarios including Istanbul transportation
                  (installation+dismantling included), carpet + skirt. Finalized by site conditions.
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-separate border-spacing-0 bg-white rounded-2xl overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50 text-left">
                        <th className="border-b border-gray-200 px-5 py-4 text-base font-bold text-gray-900">
                          Package
                        </th>
                        <th className="border-b border-gray-200 px-5 py-4 text-base font-bold text-gray-900">
                          Area (m²)
                        </th>
                        <th className="border-b border-gray-200 px-5 py-4 text-base font-bold text-gray-900">
                          Reference Range
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-base text-gray-700">
                      {ranges.map((r) => (
                        <tr key={r.label}>
                          <td className="border-b border-gray-100 px-5 py-4 font-semibold text-gray-900">
                            {r.label}
                          </td>
                          <td className="border-b border-gray-100 px-5 py-4">
                            {r.m2}
                          </td>
                          <td className="border-b border-gray-100 px-5 py-4">
                            <span className="font-semibold text-gray-900">
                              {tl(r.low)} – {tl(r.high)} TRY
                            </span>
                            <span className="text-gray-500"> (reference)</span>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td className="px-5 py-4 font-semibold text-gray-900">
                          Sample (20 m²)
                        </td>
                        <td className="px-5 py-4">20</td>
                        <td className="px-5 py-4">
                          <span className="font-semibold text-gray-900">
                            {tl(sampleTotal)} TRY
                          </span>{" "}
                          <span className="text-gray-500">
                            (excl. VAT and site conditions)
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-5 text-base text-gray-600">
                  For a clearer budget, send us date + district + m² + height + carpet/skirt information.
                </p>
              </div>
            </div>

            <figure className="mt-10 overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
              <Image
                src="/img/podyum/6.webp"
                alt="Alignment of podium modules and surface preparation during installation"
                width={1600}
                height={1000}
                className="w-full h-[280px] md:h-[380px] object-cover"
                sizes="100vw"
              />
              <figcaption className="px-4 py-3 text-sm text-gray-600 bg-gray-50">
                Site preparation and modular podium alignment step.
              </figcaption>
            </figure>

            {/* TECH TRUST */}
            <div className="mt-14 rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Technical Confidence: Stability, Load Capacity, Safety
              </h2>
              <div className="grid gap-6 lg:grid-cols-3 text-lg text-gray-700 leading-relaxed">
                <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-2">Modular system</p>
                  <p>
                    Piece-by-piece installation provides dimensional flexibility; foot adjustment
                    and leveling can be done based on floor conditions.
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-2">Load distribution</p>
                  <p>
                    Load distribution and stability checks are critically important for
                    high-traffic events such as fashion shows/concerts.
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-2">Site discipline</p>
                  <p>
                    Entry-exit, safety perimeters (barrier/edge solutions), and time plan are
                    finalized on a project basis.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-base text-gray-600">
                For service details and example installations, you can review the service page link above.
              </p>
            </div>

            <figure className="mt-10 overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
              <Image
                src="/img/podyum/7.webp"
                alt="Edge finish and surface quality in a completed podium application"
                width={1600}
                height={1000}
                className="w-full h-[280px] md:h-[380px] object-cover"
                sizes="100vw"
              />
              <figcaption className="px-4 py-3 text-sm text-gray-600 bg-gray-50">
                Surface quality and edge safety example in finish details.
              </figcaption>
            </figure>

            {/* ISTANBUL DISTRICTS */}
            <div className="mt-14 rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Istanbul Delivery Areas (European / Asian Side)
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Delivery and site plan across Istanbul are prepared based on venue access and
                time window. The districts below are examples.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    European Side
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {districtsEurope.map((d) => (
                      <span
                        key={d}
                        className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-800"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    Asian Side
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {districtsAsia.map((d) => (
                      <span
                        key={d}
                        className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-800"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-6 text-base text-gray-600">
                For out-of-city projects, logistics planning is done separately.
              </p>
            </div>

            {/* SAMPLE CALC */}
            <div className="mt-14 rounded-3xl border-2 border-blue-100 bg-blue-50/60 p-6 md:p-8">
              <p className="text-lg font-bold text-gray-900">
                Sample calculation (reference)
              </p>
              <p className="mt-2 text-base text-gray-700">
                {sample.m2} m² platform + {sample.m2} m² carpet + {sample.skirt} m
                skirt + Istanbul transportation (installation+dismantling included)
              </p>
              <div className="mt-5 grid gap-4 text-base text-gray-700 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  Platform: <b>{tl(sample.platform)} TRY</b>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  Carpet: <b>{tl(sample.carpet)} TRY</b>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  Skirt: <b>{tl(sample.skirtCost)} TRY</b>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  Transport: <b>{tl(sample.nakliye)} TRY</b>
                </div>
              </div>
              <p className="mt-4 text-base text-gray-900">
                Approximate total: <b>{tl(sampleTotal)} TRY</b>
                <span className="text-gray-500">
                  {" "}
                  (excl. VAT and site conditions)
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Budget <span className="text-blue-700">by Event Type</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Traffic volume and technical integration may affect the budget for events like
                fashion shows and concerts.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              <div className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500">
                <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                  Fashion show podium prices
                </h3>
                <p className="mt-3 text-lg text-gray-600 leading-relaxed">
                  Budget may differ due to runway dimensions, heavy traffic, and time planning.
                </p>
                <Link
                  href="/en/runway-podium-rental"
                  className="mt-6 inline-flex items-center justify-center font-bold px-6 py-3 rounded-2xl border-2 border-gray-200 text-gray-900 hover:border-blue-200 hover:text-blue-700 transition"
                >
                  Runway Podium Page →
                </Link>
              </div>

              <div className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500">
                <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                  Concert podium prices
                </h3>
                <p className="mt-3 text-lg text-gray-600 leading-relaxed">
                  Truss/lighting/sound integration and load-in/out hours may affect the budget.
                </p>
                <Link
                  href="/en/concert-podium-rental"
                  className="mt-6 inline-flex items-center justify-center font-bold px-6 py-3 rounded-2xl border-2 border-gray-200 text-gray-900 hover:border-blue-200 hover:text-blue-700 transition"
                >
                  Concert Podium Page →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <figure className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
              <Image
                src="/img/podyum/8.webp"
                alt="View from a completed podium in use at the event venue"
                width={1600}
                height={1000}
                className="w-full h-[280px] md:h-[420px] object-cover"
                sizes="100vw"
              />
              <figcaption className="px-4 py-3 text-sm text-gray-600 bg-gray-50">
                Podium view in an event use scenario.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Frequently Asked <span className="text-blue-700">Questions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                The most frequently asked questions about 2026 prices and the quoting process.
              </p>
            </div>
            <div className="space-y-6">
              {FAQ.map((item) => (
                <details
                  key={item.q}
                  className="group bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-500 open:bg-blue-50 open:border-blue-200 border-2 border-transparent open:border"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between text-xl font-bold text-gray-900">
                    <span className="pr-4">{item.q}</span>
                    <span className="ml-4 transition-transform duration-500 group-open:rotate-180 text-blue-600 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      ⌄
                    </span>
                  </summary>
                  <div className="mt-6 text-gray-700 leading-relaxed text-lg pl-4 border-l-4 border-blue-500">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
                  Get a Fast Quote
                </h2>
                <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                  Send us date + district + m² + height + carpet/skirt information and we&apos;ll
                  get back to you within 24 hours with a clear quote and site plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://wa.me/905453048671?text=Hello%2C+I+would+like+a+podium+rental+price+quote.+Date%3A+%5Bdd.mm.yyyy%5D+Area%3A+%5Bm2%5D+Height%3A+%5Bcm%5D+District%3A+%5Bdistrict%5D+Carpet%3A+%5Byes%2Fno%5D+Skirt%3A+%5Bmetres%5D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
                  >
                    <span className="text-xl mr-3">💬</span> Message via WhatsApp
                  </a>

                  <Link
                    href="/en/podium-rental"
                    className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300"
                  >
                    <span className="text-xl mr-3">🎯</span> Professional Podium Rental Service
                  </Link>
                </div>
                <p className="mt-6 text-sm text-white/80">
                  This page targets price intent; you can review the service page for service scope
                  and example applications.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

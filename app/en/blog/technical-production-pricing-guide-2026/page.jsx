import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import SmartBlogSuggestions from "@/components/blog/SmartBlogSuggestions";
import {
  BASE_SITE_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";

export const revalidate = 86400;

const slug = "/en/blog/technical-production-pricing-guide-2026";
const url = `${BASE_SITE_URL}${slug}`;
const FEATURED_IMAGE = "/img/blog/kurumsal-etkinlik-led-ekran-sahne.webp";
const OG_IMAGE = FEATURED_IMAGE;
const AUTHOR_NAME = "Sahneva Content Team";
const PUBLISH_DATE = "2026-04-07T00:00:00+03:00";

export const metadata = {
  title: "Technical Production and Stage Rental Pricing Guide (2026)",
  description:
    "Stage, sound, lighting, LED screen and tent rental pricing strategies. Package model, demand-based pricing, add-on service profitability and approaches tailored to the market.",
  alternates: { canonical: url },
  image: FEATURED_IMAGE,
  openGraph: {
    title:
      "Technical Production and Stage Rental Pricing Guide (2026) | Sahneva",
    description:
      "Stage, sound, lighting, LED screen and tent rental pricing strategies. Package model, demand-based pricing and add-on service profitability guide.",
    url,
    siteName: "Sahneva",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: `${BASE_SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Technical Production Pricing Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Production Pricing Guide (2026)",
    description:
      "Stage, sound, lighting, LED screen and tent rental pricing strategies. Package model, demand-based pricing and add-on service profitability guide.",
    images: [`${BASE_SITE_URL}${OG_IMAGE}`],
  },
  keywords: [
    "stage rental pricing",
    "production prices 2026",
    "event equipment rental",
    "sound lighting price",
    "LED screen rental price",
    "technical production pricing",
    "stage rental rates",
    "tent rental price",
  ],
  authors: [{ name: AUTHOR_NAME }],
  date: PUBLISH_DATE,
  category: "Pricing",
  readTime: "9 min read",
  author: AUTHOR_NAME,
};

/* ---------- helpers ---------- */
function H2({ id, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl"
    >
      {children}
    </h2>
  );
}

function ProTip({ title = "Pro Tip", children }) {
  return (
    <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50 p-4">
      <div className="text-sm font-semibold text-sky-900">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-700">{children}</div>
    </div>
  );
}

function Table({ caption, columns, rows }) {
  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {caption ? (
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
          {caption}
        </div>
      ) : null}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 text-slate-700">
            <tr>
              {columns.map((c) => (
                <th key={c} className="px-4 py-3 font-medium">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {rows.map((r, idx) => (
              <tr key={idx}>
                {r.map((cell, j) => (
                  <td key={j} className="px-4 py-3">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Figure({ src, alt, caption, priority = false, loading = "lazy" }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] w-full bg-slate-50">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 760px"
          className="object-contain"
          loading={loading}
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function Page() {
  const publishedISO = PUBLISH_DATE;
  const publishedHuman = "April 7, 2026";
  const readingTime = "9 min read";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        mainEntityOfPage: { "@id": url },
        headline:
          "Technical Production and Stage Rental Pricing Guide (2026)",
        description:
          "Stage, sound, lighting, LED screen and tent rental pricing strategies. Package model, demand-based pricing, add-on service profitability and approaches tailored to the market.",
        image: `${BASE_SITE_URL}${FEATURED_IMAGE}`,
        datePublished: publishedISO,
        dateModified: publishedISO,
        inLanguage: "en-US",
        author: {
          "@type": "Organization",
          "@id": ORGANIZATION_ID,
          name: "Sahneva",
        },
        publisher: { "@id": ORGANIZATION_ID },
        isPartOf: { "@id": WEBSITE_ID },
        url,
        about: [
          { "@type": "Thing", name: "Stage rental pricing strategies" },
          { "@type": "Thing", name: "LED screen rental prices" },
          { "@type": "Thing", name: "Technical production package models" },
          { "@type": "Thing", name: "Event equipment rental" },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="ld-blogposting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
          <BreadcrumbJsonLd
            items={[
              { name: "Home", url: BASE_SITE_URL },
              { name: "Blog", url: `${BASE_SITE_URL}/en/blog` },
              {
                name: "Technical Production Pricing Guide 2026",
                url,
              },
            ]}
          />

          {/* Header */}
          <header>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
              Pricing • technical production • stage rental
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Technical Production and Stage Rental
              <span className="block text-slate-600">
                Pricing Guide (2026)
              </span>
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
              Event production pricing is a far more strategic subject than
              many companies realise. Correct pricing goes beyond covering
              costs — it strengthens your market position and delivers higher
              profitability with fewer projects. This guide covers package
              models, demand-based strategy, and approaches tailored to the
              market.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <time dateTime={publishedISO}>{publishedHuman}</time>
              <span aria-hidden="true">•</span>
              <span>{readingTime}</span>
              <span aria-hidden="true">•</span>
              <span>{AUTHOR_NAME}</span>
            </div>

            {/* CTA row */}
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://wa.me/905453048671"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Message on WhatsApp (quote in 2 hours)
              </a>

              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Get a Quote / Contact
              </Link>
            </div>

            <Figure
              src={FEATURED_IMAGE}
              alt="Corporate event production with professional stage, LED screen and sound-lighting system"
              caption="Corporate event production with professional stage, LED screen and sound-lighting system — the technical infrastructure that forms the foundation of correct pricing."
              priority
              loading="eager"
            />
          </header>

          {/* Layout */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
            {/* Main */}
            <article className="min-w-0">
              {/* TOC */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-base font-semibold text-slate-900">
                  In This Article
                </h2>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
                  {[
                    ["#s1", "1. Why Strategic Pricing?"],
                    ["#s2", "2. Experience & Value Selling"],
                    ["#s3", "3. Demand-Based Pricing"],
                    ["#s4", "4. Pricing Models"],
                    ["#s5", "5. The Size & Scope Fallacy"],
                    ["#s6", "6. Add-Ons Are the Real Profit"],
                    ["#s7", "7. Location, Season & Market Dynamics"],
                    ["#s8", "8. Perception & Psychological Pricing"],
                    ["#s9", "9. Market-Specific Approach (2026)"],
                    ["#s10", "10. Making the Most of Low-Demand Periods"],
                    ["#s11", "11. Conclusion"],
                  ].map(([href, text]) => (
                    <li key={href}>
                      <a className="hover:text-slate-900" href={href}>
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* s1 */}
              <section className="mt-10">
                <H2 id="s1">1. Why Strategic Pricing?</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Event production pricing is a far more strategic subject
                  than many companies realise. Most businesses still set their
                  prices based solely on "stage square meterage" or "number
                  of equipment items". However, this approach leads to
                  significant revenue loss — especially in highly competitive
                  areas such as corporate events, weddings, and concerts.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Because what is sold in this industry is not merely a{" "}
                  <Link
                    href="/en/stage-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    stage
                  </Link>
                  ,{" "}
                  <Link
                    href="/en/sound-light-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    sound system
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="/en/led-screen-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    LED screen
                  </Link>
                  . What is sold is the visual and audio quality of the event,
                  professional installation, on-time delivery, and a flawless
                  experience. Correct pricing goes beyond covering costs — it
                  strengthens your market position and delivers higher
                  profitability with fewer projects.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Incorrect pricing does not create low occupancy; it creates
                  a low perception of quality. The customer sees a "cheap"
                  quote and doubts the quality. Correct pricing, on the other
                  hand, brings a premium perception and a higher acceptance rate.
                </p>
              </section>

              {/* s2 */}
              <section className="mt-10">
                <H2 id="s2">
                  2. Experience &amp; Value Selling: You Sell Production, Not Equipment
                </H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  A customer organising a corporate launch, wedding, or concert
                  is actually buying the following when renting technical
                  equipment: the event being unforgettable, the clarity of the
                  sound, the impact of the lighting, the visual impact of the
                  LED screen, and the solidity of the stage.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The difference between a bare{" "}
                  <Link
                    href="/en/podium-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    podium
                  </Link>{" "}
                  and a professional truss system, quality moving-head lights,
                  a high-resolution{" "}
                  <Link
                    href="/en/led-screen-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    LED screen
                  </Link>{" "}
                  and an acoustically optimised{" "}
                  <Link
                    href="/en/sound-light-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    sound system
                  </Link>{" "}
                  comes not from square meterage, but from perceived value.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The fundamental question to ask when setting a price is:
                  "What kind of stage experience and technical confidence does
                  this production offer the client?"
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  If there is a strong technical infrastructure and professional
                  installation, it is possible to price above market average.
                  Weak perception, however, leaves no option but to lower the price.
                </p>

                <Figure
                  src="/img/blog/kurumsal-etkinlik-sahne-genel.webp"
                  alt="Professional production setup — stage, lighting and sound systems together"
                  caption="A stage setup equipped with professional truss, moving-head lights and LED screen — the most powerful element for building perceived value."
                />
              </section>

              {/* s3 */}
              <section className="mt-10">
                <H2 id="s3">3. Demand-Based Pricing</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The production industry is also time-based. The same
                  equipment cannot be used at multiple events on the same day.
                  This makes certain periods far more valuable.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The highest demand periods: Summer months (outdoor concerts,
                  weddings, festivals), Friday evenings and Saturdays (wedding +
                  corporate), New Year, public holidays and special days
                  (Valentine's Day, International Women's Day, etc.), corporate
                  summit and launch seasons (spring and autumn).
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Raising prices during peak periods and offering flexible
                  packages during low-demand periods (weekdays, winter months)
                  optimises total revenue. Working with a fixed price list means
                  missing the most valuable opportunities.
                </p>

                <Table
                  caption="Seasonal Demand and Pricing Strategy"
                  columns={["Period", "Demand Level", "Pricing Strategy"]}
                  rows={[
                    [
                      "Summer months (June–August)",
                      "Very High",
                      "Premium price + early booking advantage",
                    ],
                    ["Friday–Saturday", "High", "Weekend premium pricing"],
                    [
                      "New Year, holidays, special days",
                      "High",
                      "Special period pricing",
                    ],
                    [
                      "Spring–Autumn (corporate)",
                      "Medium–High",
                      "Package-based pricing",
                    ],
                    [
                      "Weekdays, winter months",
                      "Low",
                      "Flexible packages + promotions",
                    ],
                  ]}
                />
              </section>

              {/* s4 */}
              <section className="mt-10">
                <H2 id="s4">
                  4. Pricing Models and the Most Effective Approaches
                </H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Production companies typically use the following models:
                </p>
                <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700">
                  <li>
                    <strong className="font-semibold text-slate-900">
                      Fixed Package Model:
                    </strong>{" "}
                    The most popular model with the fastest turnaround. Offering
                    ready-made options such as "Wedding Package", "Corporate
                    Launch Package", and "Concert Production Package" eliminates
                    uncertainty for the client and accelerates the decision-making
                    process.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900">
                      Modular / À La Carte Model:
                    </strong>{" "}
                    For clients who only want a{" "}
                    <Link
                      href="/en/stage-rental"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      stage
                    </Link>
                    , only sound, or only an{" "}
                    <Link
                      href="/en/led-screen-rental"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      LED screen
                    </Link>
                    . Its advantage is flexibility, though it may limit total revenue.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900">
                      Hybrid Model (Most Recommended):
                    </strong>{" "}
                    Core package + add-on services. For example, you can increase
                    revenue by adding LED screen, truss,{" "}
                    <Link
                      href="/en/tent-rental"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      tent
                    </Link>
                    , setup-breakdown, and technical personnel to a core
                    sound-lighting-stage package.
                  </li>
                </ol>

                <Table
                  caption="Pricing Models Comparison"
                  columns={["Model", "Advantage", "Disadvantage", "Best For"]}
                  rows={[
                    [
                      "Fixed Package",
                      "Fast decision, clear price",
                      "Limited flexibility",
                      "Weddings, small corporate",
                    ],
                    [
                      "Modular / À La Carte",
                      "Full flexibility",
                      "Revenue may remain limited",
                      "Single equipment requests",
                    ],
                    [
                      "Hybrid (Recommended)",
                      "Flexibility + upsell",
                      "More presentation work required",
                      "Medium-large events",
                    ],
                  ]}
                />

                <Figure
                  src="/img/blog/sahne-kiralama-fiyatlari-teknik-sistemler.webp"
                  alt="Truss, LED screen and sound-lighting systems — the technical layers that determine price"
                  caption="Integrated use of stage, truss, LED screen and sound-lighting systems — forms the foundation of the hybrid package model."
                />
              </section>

              {/* s5 */}
              <section className="mt-10">
                <H2 id="s5">5. The Size and Scope Fallacy</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Many companies set prices based solely on "stage size". But a
                  larger stage does not always mean higher profit.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  What matters is: event type, number of attendees and expected
                  impact, per-person technical quality expectations, add-on
                  service potential ({" "}
                  <Link
                    href="/en/led-screen-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    LED screen
                  </Link>
                  , effect lighting,{" "}
                  <Link
                    href="/en/tent-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    tent
                  </Link>
                  , generator, etc.)
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  A smaller but high-quality production (for example, premium
                  sound + large LED screen) can be more profitable than a large
                  but basic-level setup. Your focus should be on profitability,
                  not occupancy.
                </p>

                <ProTip title="Profitability Formula">
                  Profitability formula: Large stage + low quality &lt; Small
                  stage + premium sound-lighting-LED. Think value-first.
                </ProTip>
              </section>

              {/* s6 */}
              <section className="mt-10">
                <H2 id="s6">6. Add-Ons Are the Real Profit</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The real profit usually comes not from the base rental fee,
                  but from add-on services:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  <li>Professional setup and breakdown service</li>
                  <li>Technical personnel (sound engineer, lighting designer)</li>
                  <li>Extended usage period</li>
                  <li>Transport and logistics</li>
                  <li>
                    <Link
                      href="/en/tent-rental"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Tent
                    </Link>{" "}
                    + flooring + décor integration
                  </li>
                  <li>Live streaming and recording system</li>
                  <li>Backup equipment and contingency plan support</li>
                </ul>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  When you position these services separately rather than
                  offering them "for free", or when you include them in smart
                  packages, your revenue increases significantly. Add-on
                  services are the most effective way to grow your price.
                </p>
              </section>

              {/* s7 */}
              <section className="mt-10">
                <H2 id="s7">7. Location, Season and Market Dynamics</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  In large cities, the district and venue type affect pricing.
                  For outdoor events,{" "}
                  <Link
                    href="/en/tent-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    tent
                  </Link>{" "}
                  +{" "}
                  <Link
                    href="/en/stage-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    stage
                  </Link>{" "}
                  combinations see more demand, while compact{" "}
                  <Link
                    href="/en/led-screen-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    LED
                  </Link>{" "}
                  +{" "}
                  <Link
                    href="/en/sound-light-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    sound systems
                  </Link>{" "}
                  are more in demand for indoor venues.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  However, location is not the sole determining factor. Even in
                  a less affluent area, premium pricing is achievable with
                  high-quality equipment, fast setup, and reliable service.
                </p>

                <Figure
                  src="/img/blog/kurumsal-etkinlik-cadir.webp"
                  alt="Outdoor corporate event tent setup"
                  caption="Tent + stage + LED combination at outdoor events forms the basis of location-based pricing."
                />
              </section>

              {/* s8 */}
              <section className="mt-10">
                <H2 id="s8">8. Perception and Psychological Pricing</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Very low price quotes — especially with corporate clients —
                  create a perception of being "inexperienced or low-quality".
                  Professional presentations, clear package lists, reference
                  photos and video demonstrations increase the likelihood of
                  the price being accepted.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The client often chooses not the cheapest quote, but the one
                  that appears most trustworthy and risk-free.
                </p>

                <ProTip title="Sell Through Perception">
                  Don't sell by cutting prices — sell by building perception.
                  Clear packages, professional presentations and reference
                  visuals minimise price objections.
                </ProTip>
              </section>

              {/* s9 */}
              <section className="mt-10">
                <H2 id="s9">9. Market-Specific Approach (2026)</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Production prices do not follow a fixed standard. Even the
                  same equipment is priced differently depending on event type,
                  date, and client profile.
                </p>

                <Table
                  caption="Segment-Based Pricing Approach"
                  columns={["Segment", "Approach", "Focus"]}
                  rows={[
                    [
                      "Small-scale weddings",
                      "Entry-level packages",
                      "Clear price, fast decision",
                    ],
                    [
                      "Mid-segment corporate",
                      "Hybrid packages + add-on services",
                      "Revenue growth, upsell",
                    ],
                    [
                      "Large concerts and festivals",
                      "Full production package",
                      "High price, premium quality",
                    ],
                  ]}
                />

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  What matters is not conforming to the competitor average, but
                  correctly positioning your own technical strength and
                  differentiation.
                </p>

                <Figure
                  src="/img/blog/kurumsal-etkinlik-butce-infografik.webp"
                  alt="Corporate event budget planning — production pricing strategy"
                  caption="Budget and pricing approach by event segment — a different strategy for every scale."
                />
              </section>

              {/* s10 */}
              <section className="mt-10">
                <H2 id="s10">10. Making the Most of Low-Demand Periods</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Successful companies don't focus only on summer and weekends.
                  They fill the off-season with weekday corporate events,
                  training sessions, trade fair stands, and targeted promotions.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The goal is not to lower the price, but to offer the right
                  package to the right client. This reduces revenue fluctuation
                  and makes the business sustainable.
                </p>
              </section>

              {/* s11 */}
              <section className="mt-10">
                <H2 id="s11">11. Conclusion</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  <Link
                    href="/en/stage-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Stage
                  </Link>
                  ,{" "}
                  <Link
                    href="/en/sound-light-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    sound, lighting
                  </Link>
                  ,{" "}
                  <Link
                    href="/en/led-screen-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    LED screen
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/en/tent-rental"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    tent
                  </Link>{" "}
                  rental pricing cannot be managed with fixed rules. Incorrect
                  approaches are usually the same: working only with an equipment
                  list price, ignoring demand fluctuations, providing add-on
                  services free of charge, and thinking only about "just rental".
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The correct approach is to position yourself not as an
                  equipment supplier, but as the technical production partner
                  for events. Pricing should also reflect the value of the
                  experience and confidence you deliver.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  When you adopt this perspective, it becomes possible to
                  achieve higher profitability by taking on fewer projects.
                  Because in this industry, the winners are not the cheapest
                  — they are those who communicate their value correctly, deliver
                  quality production, and justify their price.
                </p>
              </section>

              {/* CTA */}
              <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Get a strategic quote for your event
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  At Sahneva, with the experience gained across{" "}
                  <strong className="font-semibold text-slate-900">
                    300+ corporate projects
                  </strong>{" "}
                  in stage, sound-lighting, LED screen and tent rental, we manage
                  the entire process from technical scouting to installation under
                  one roof. Message us on WhatsApp for a fast quote; on most
                  projects we deliver a fully scoped proposal within{" "}
                  <strong className="font-semibold text-slate-900">
                    2 hours
                  </strong>
                  .
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Message on WhatsApp
                  </a>
                  <Link
                    href="/en/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Contact Form
                  </Link>
                </div>
              </section>

              <SmartBlogSuggestions
                currentSlug={slug.replace("/en/blog/", "")}
                currentCategory={metadata?.category}
                currentKeywords={metadata?.keywords}
              />

              <BlogRelatedLinks
                services={[
                  { href: "/en/stage-rental", label: "Stage Rental" },
                  { href: "/en/led-screen-rental", label: "LED Screen Rental" },
                  { href: "/en/sound-light-rental", label: "Sound & Lighting Systems" },
                  { href: "/en/tent-rental", label: "Tent Rental" },
                  { href: "/en/podium-rental", label: "Podium Rental" },
                ]}
              />
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Quick Quote
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Share your event details and we'll scope it quickly.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    WhatsApp
                  </a>
                  <Link
                    href="/en/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Contact Form
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Services
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/en/stage-rental"
                    >
                      Stage Rental
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/en/led-screen-rental"
                    >
                      LED Screen Rental
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/en/sound-light-rental"
                    >
                      Sound &amp; Lighting Systems
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/en/tent-rental"
                    >
                      Tent Rental
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/en/podium-rental"
                    >
                      Podium Rental
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Related Articles
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/en/blog/how-stage-rental-prices-are-determined"
                    >
                      How Are Stage Rental Prices Determined?
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/en/blog/corporate-event-planning-guide-2026"
                    >
                      2026 Corporate Event Planning Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/en/blog/led-screen-technology-trends-2026"
                    >
                      2026 LED Screen Technology Trends
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/en/blog/corporate-event-management"
                    >
                      Corporate Event Management Guide
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

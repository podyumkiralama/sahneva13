// app/en/glossary/page.js
import Link from "next/link";

import JsonLdScript from "@/components/seo/JsonLd";
import { buildAlternatesForPath } from "@/lib/seo/alternates";
import { ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import GlossarySearch from "@/components/GlossarySearch.client";
import {
  EN_GLOSSARY_CATEGORIES,
  EN_GLOSSARY_TERMS,
  getEnGlossaryTermsAlphabetical,
  getEnGlossaryTermsByCategory,
  isEnServiceHref,
} from "@/lib/enGlossary";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.sahneva.com";

const PAGE_PATH = "/en/glossary";
const TR_PAGE_PATH = "/sozluk";
const PAGE_URL = `${SITE}${PAGE_PATH}`;
const OG_IMAGE = `${SITE}/img/hero-bg.webp`;

export const revalidate = 86400;

export const metadata = {
  title: "Event Production Glossary | Technical Terms",
  description:
    "Event production glossary: what the stage, LED screen, sound, lighting, truss and tent terms used in quotes mean, and what each one changes on site.",
  alternates: buildAlternatesForPath("/en/glossary"),
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Sahneva",
    locale: "en_US",
    title: "Event Production Glossary | Sahneva",
    description:
      "Pixel pitch, line array, truss, SWL, run of show and more: what the terms used in event quotes and site surveys actually mean.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sahneva event production technical glossary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Production Glossary | Sahneva",
    description:
      "Definitions of the technical terms used on stage, LED screen, sound, lighting, truss and tent projects.",
    images: [OG_IMAGE],
  },
  robots: AI_PREVIEW_ROBOTS,
};

/* ================== JSON-LD ================== */
const TERM_SET_ID = `${PAGE_URL}#termset`;
const PAGE_ID = `${PAGE_URL}#webpage`;
const BREADCRUMB_ID = `${PAGE_URL}#breadcrumb`;
const termId = (slug) => `${PAGE_URL}#${slug}`;

const GLOSSARY_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["CollectionPage", "WebPage"],
      "@id": PAGE_ID,
      url: PAGE_URL,
      name: "Event Production Glossary",
      description: metadata.description,
      inLanguage: "en",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": TERM_SET_ID },
      mainEntity: { "@id": TERM_SET_ID },
      breadcrumb: { "@id": BREADCRUMB_ID },
      publisher: { "@id": ORGANIZATION_ID },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "[data-speakable]"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": BREADCRUMB_ID,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/en` },
        { "@type": "ListItem", position: 2, name: "Glossary", item: PAGE_URL },
      ],
    },
    {
      "@type": "DefinedTermSet",
      "@id": TERM_SET_ID,
      name: "Event Production Glossary",
      description:
        "Definitions of the technical terms used on stage, podium, LED screen, sound, lighting, truss and tent projects.",
      url: PAGE_URL,
      inLanguage: "en",
      publisher: { "@id": ORGANIZATION_ID },
      hasDefinedTerm: EN_GLOSSARY_TERMS.map((entry) => ({ "@id": termId(entry.slug) })),
    },
    ...EN_GLOSSARY_TERMS.map((entry) => ({
      "@type": "DefinedTerm",
      "@id": termId(entry.slug),
      name: entry.term,
      alternateName: entry.aliases,
      // Short definition only. The long explanation is already in the page
      // body; repeating it here pushed the Turkish JSON-LD to ~70 KB and the
      // short definition is the more useful one for consumers.
      description: entry.definition,
      url: `${PAGE_URL}#${entry.slug}`,
      // Note: DefinedTerm is an Intangible, not a CreativeWork, so `inLanguage`
      // is invalid here. The language stays on the parent DefinedTermSet.
      inDefinedTermSet: { "@id": TERM_SET_ID },
      subjectOf: entry.related
        ? { "@type": "WebPage", url: `${SITE}${entry.related.href}`, name: entry.related.label }
        : undefined,
    })),
  ],
};

/* ================== PAGE ================== */
export default function GlossaryPage() {
  return (
    <div className="bg-white text-slate-900">
      <JsonLdScript id="ld-json-en-glossary" data={GLOSSARY_JSON_LD} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white sm:py-20">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.25),transparent_38%),linear-gradient(135deg,#020617,#111827_48%,#0f172a)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/60">
              <li>
                <Link href="/en" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/90">
                Glossary
              </li>
            </ol>
          </nav>

          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            Event production glossary
          </h1>
          <p
            data-speakable
            className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            What the technical terms used in quotes and site surveys mean, what they
            change on site and which decision they drive — collected in one place.
            {" "}
            {EN_GLOSSARY_TERMS.length} terms across {EN_GLOSSARY_CATEGORIES.length} sections.
          </p>

          {/* Live search sits above the category buttons. With JavaScript off the
              component never renders and every term stays in the list. */}
          <div className="mt-10">
            <GlossarySearch locale="en" totalCount={EN_GLOSSARY_TERMS.length} />
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {EN_GLOSSARY_CATEGORIES.map((category) => (
              <a
                key={category.key}
                href={`#${category.key}`}
                className="inline-flex min-h-[44px] items-center rounded-full border border-white/15 bg-white/5 px-4 text-sm font-bold text-white/85 transition hover:bg-white/12 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* A–Z index — category navigation alone is not enough at 70+ terms.
          Rendered entirely on the server; works without JavaScript. */}
      <section
        aria-labelledby="index-heading"
        className="border-b border-slate-200 bg-slate-50 px-4 py-10"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="index-heading" className="text-lg font-black tracking-tight">
            All terms (A–Z)
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {getEnGlossaryTermsAlphabetical().map((entry) => (
              <li key={entry.slug} data-glossary-index-item={entry.slug}>
                <Link
                  href={`#${entry.slug}`}
                  className="inline-flex min-h-[36px] items-center rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {entry.term}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Term list */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        {EN_GLOSSARY_CATEGORIES.map((category) => {
          const terms = getEnGlossaryTermsByCategory(category.key);
          if (terms.length === 0) return null;

          return (
            <section
              key={category.key}
              id={category.key}
              data-glossary-section
              aria-labelledby={`${category.key}-heading`}
              className="mb-14 scroll-mt-28 last:mb-0"
            >
              <h2
                id={`${category.key}-heading`}
                className="text-2xl font-black tracking-tight sm:text-3xl"
              >
                {category.title}
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
                {category.description}
              </p>

              <dl className="mt-8 grid items-start gap-5 md:grid-cols-2">
                {terms.map((entry) => (
                  <div
                    key={entry.slug}
                    id={entry.slug}
                    data-glossary-item
                    className="glossary-card"
                  >
                    <dt>
                      <h3 className="text-xl font-black tracking-tight text-slate-950">
                        {entry.term}
                      </h3>
                      {entry.aliases?.length ? (
                        <>
                          <span className="sr-only">Also known as: </span>
                          <ul className="mt-3 flex flex-wrap gap-1.5">
                            {entry.aliases.map((alias) => (
                              <li key={alias}>
                                <span className="glossary-badge">{alias}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : null}
                    </dt>
                    <dd className="mt-4 flex flex-1 flex-col gap-3 text-base leading-7 text-slate-700">
                      <p className="font-semibold text-slate-900">{entry.definition}</p>
                      <p>{entry.detail}</p>

                      {entry.related ? (
                        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                          <Link
                            href={entry.related.href}
                            className="inline-flex min-h-[44px] items-center text-sm font-bold text-blue-700 underline underline-offset-4 hover:text-blue-900"
                          >
                            {entry.related.label}
                          </Link>
                          {/* Quote button only on commercial service pages; a
                              guide article should not promise pricing. */}
                          {isEnServiceHref(entry.related.href) ? (
                            <Link href={entry.related.href} className="glossary-cta">
                              Request a quote
                              <span aria-hidden="true" className="ml-1.5">
                                →
                              </span>
                              <span className="sr-only"> — {entry.related.label}</span>
                            </Link>
                          ) : null}
                        </div>
                      ) : null}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50 px-4 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
            Let’s talk about the project, not the terminology
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Share your event date, city and scope, and we will explain which equipment
            is needed and why, with the technical reasoning behind it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/en/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-slate-950 px-6 text-sm font-black text-white transition hover:bg-slate-800"
            >
              Request a quote
            </Link>
            <Link
              href="/en/services"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border-2 border-slate-950 px-6 text-sm font-black text-slate-950 transition hover:bg-slate-950 hover:text-white"
            >
              Explore services
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Looking for the Turkish technical terms? See the{" "}
            <Link
              href={TR_PAGE_PATH}
              hrefLang="tr-TR"
              className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900"
            >
              Etkinlik Prodüksiyonu Sözlüğü
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

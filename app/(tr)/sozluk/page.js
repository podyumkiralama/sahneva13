// app/(tr)/sozluk/page.js
import Image from "next/image";
import Link from "next/link";

import JsonLdScript from "@/components/seo/JsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { PODIUM_GLOSSARY_DETAIL_SLUGS } from "@/lib/glossaryDetailContent";
import { ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import GlossarySearch from "@/components/GlossarySearch.client";
import EventPlanningGuide from "@/components/EventPlanningGuide.client";
import {
  GLOSSARY_CATEGORIES,
  GLOSSARY_TERMS,
  getGlossaryTermsAlphabetical,
  getGlossaryTermsByCategory,
  isServiceHref,
} from "@/lib/glossary";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.sahneva.com";

const PAGE_PATH = "/sozluk";
const PAGE_URL = `${SITE}${PAGE_PATH}`;
const OG_IMAGE = `${SITE}/img/hero-bg.webp`;
const GLOSSARY_DETAIL_SLUGS = new Set(["line-array", ...PODIUM_GLOSSARY_DETAIL_SLUGS]);

const glossaryHref = (slug) =>
  GLOSSARY_DETAIL_SLUGS.has(slug) ? `/sozluk/${slug}` : `#${slug}`;

export const revalidate = 86400;

export const metadata = {
  title: "Etkinlik Prodüksiyonu Sözlüğü | Teknik Terimler",
  description:
    "Sahne, LED ekran, ses, ışık, truss ve çadır projelerinde geçen teknik terimlerin saha karşılıklarıyla açıklandığı etkinlik prodüksiyonu sözlüğü.",
  alternates: buildLanguageAlternates({
    tr: PAGE_PATH,
    en: "/en/glossary",
    canonical: PAGE_PATH,
    xDefault: PAGE_PATH,
  }),
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Sahneva",
    locale: "tr_TR",
    title: "Etkinlik Prodüksiyonu Sözlüğü | Sahneva",
    description:
      "Pixel pitch, line array, truss, SWL, run of show ve daha fazlası: teklif ve keşif görüşmelerinde geçen terimlerin pratik karşılıkları.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sahneva etkinlik prodüksiyonu teknik terimler sözlüğü",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etkinlik Prodüksiyonu Sözlüğü | Sahneva",
    description:
      "Sahne, LED ekran, ses, ışık, truss ve çadır projelerinde geçen teknik terimlerin açıklamaları.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      name: "Etkinlik Prodüksiyonu Sözlüğü",
      description: metadata.description,
      inLanguage: "tr-TR",
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
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Sözlük", item: PAGE_URL },
      ],
    },
    {
      "@type": "DefinedTermSet",
      "@id": TERM_SET_ID,
      name: "Etkinlik Prodüksiyonu Sözlüğü",
      description:
        "Sahne, podyum, LED ekran, ses, ışık, truss ve çadır projelerinde kullanılan teknik terimlerin tanımları.",
      url: PAGE_URL,
      inLanguage: "tr-TR",
      publisher: { "@id": ORGANIZATION_ID },
      hasDefinedTerm: GLOSSARY_TERMS.map((entry) => ({ "@id": termId(entry.slug) })),
    },
    ...GLOSSARY_TERMS.map((entry) => ({
      "@type": "DefinedTerm",
      "@id": termId(entry.slug),
      name: entry.term,
      alternateName: entry.aliases,
      // Yalnızca tek cümlelik tanım. Uzun açıklama sayfa gövdesinde zaten var;
      // şemada tekrarlamak JSON-LD'yi 79 terimde ~70 KB'a çıkarıyordu ve
      // tüketiciler için kısa tanım daha kullanışlı.
      description: entry.definition,
      url: `${PAGE_URL}#${entry.slug}`,
      inDefinedTermSet: { "@id": TERM_SET_ID },
      inLanguage: "tr-TR",
      // Bare URL'yi @id olarak vermek grafikte tanımsız bir düğüme referans
      // oluşturuyordu; satır içi WebPage düğümü doğru karşılık.
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
      <JsonLdScript id="ld-json-sozluk" data={GLOSSARY_JSON_LD} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white sm:py-20">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.25),transparent_38%),linear-gradient(135deg,#020617,#111827_48%,#0f172a)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl">
          <nav aria-label="Site içi konum" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/60">
              <li>
                <Link href="/" className="hover:text-white">
                  Ana Sayfa
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/90">
                Sözlük
              </li>
            </ol>
          </nav>

          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            Etkinlik prodüksiyonu sözlüğü
          </h1>
          <p
            data-speakable
            className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Teklif ve keşif görüşmelerinde geçen teknik terimlerin ne anlama geldiğini,
            sahada neyi değiştirdiğini ve hangi kararı etkilediğini bir arada topladık.
            {" "}
            {GLOSSARY_TERMS.length} terim, {GLOSSARY_CATEGORIES.length} başlık altında.
          </p>

          {/* Canlı arama — kategori butonlarının üzerinde. JavaScript kapalıysa
              bileşen hiç görünmez, terimlerin tamamı listede kalır. */}
          <div className="mt-10">
            <GlossarySearch totalCount={GLOSSARY_TERMS.length} />
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {GLOSSARY_CATEGORIES.map((category) => (
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

      {/* Alfabetik dizin — 80+ terimde kategori gezinmesi tek başına yetmiyor.
          Tamamen sunucuda basılır; JavaScript olmadan da çalışır. */}
      <section
        className="border-b border-slate-200 bg-slate-50 px-4 py-12 sm:py-16"
        aria-labelledby="etkinlik-rehberi-baslik"
      >
        <div className="mx-auto max-w-6xl">
          <EventPlanningGuide />
        </div>
      </section>

      <section
        aria-labelledby="dizin-baslik"
        className="border-b border-slate-200 bg-slate-50 px-4 py-10"
      >
        <div className="mx-auto max-w-6xl">
          <h2 id="dizin-baslik" className="text-lg font-black tracking-tight">
            Tüm terimler (A–Z)
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {getGlossaryTermsAlphabetical().map((entry) => (
              <li key={entry.slug} data-glossary-index-item={entry.slug}>
                <Link
                  href={glossaryHref(entry.slug)}
                  className="inline-flex min-h-[36px] items-center rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {entry.term}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Terim listesi */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        {GLOSSARY_CATEGORIES.map((category) => {
          const terms = getGlossaryTermsByCategory(category.key);
          if (terms.length === 0) return null;

          return (
            <section
              key={category.key}
              id={category.key}
              data-glossary-section
              aria-labelledby={`${category.key}-baslik`}
              className="mb-14 scroll-mt-28 last:mb-0"
            >
              <h2
                id={`${category.key}-baslik`}
                className="text-2xl font-black tracking-tight sm:text-3xl"
              >
                {category.title}
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
                {category.description}
              </p>

              {/* Grid: metin yoğun kartlar olduğu için 3 sütun okunabilirliği
                  düşürüyordu; md üstünde 2 sütun. items-start sayesinde kısa ve
                  uzun kartlar aynı yüksekliğe zorlanmıyor. */}
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
                        {GLOSSARY_DETAIL_SLUGS.has(entry.slug) ? (
                          <Link href={glossaryHref(entry.slug)} className="hover:text-blue-800">
                            {entry.term}
                          </Link>
                        ) : (
                          entry.term
                        )}
                      </h3>
                      {entry.aliases?.length ? (
                        <>
                          {/* Alternatif adlandırmalar müşterinin kendi dili —
                              düz metinde kayboluyordu, rozete çevrildi. */}
                          <span className="sr-only">Alternatif adlandırmalar: </span>
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
                      {entry.visual ? (
                        <figure className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                          <Image
                            src={entry.visual.src}
                            alt={entry.visual.alt}
                            width={entry.visual.width}
                            height={entry.visual.height}
                            sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) calc(50vw - 2.5rem), 520px"
                            className="h-auto w-full"
                          />
                          <figcaption className="px-4 py-3 text-sm font-medium leading-6 text-slate-600">
                            {entry.visual.caption}
                          </figcaption>
                        </figure>
                      ) : null}
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
                          {/* Teklif butonu yalnızca ticari hizmet sayfalarında;
                              rehber yazısına "fiyat al" demek yanlış beklenti kurar. */}
                          {isServiceHref(entry.related.href) ? (
                            <Link
                              // Fragment yok: hizmet sayfalarında ortak bir
                              // "#teklif" çapası bulunmuyor, uydurmak kullanıcıyı
                              // sayfanın başına düşürmekten başka işe yaramaz.
                              href={entry.related.href}
                              className="glossary-cta"
                            >
                              Fiyat / teklif al
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
            Terimi değil, projeyi konuşalım
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Etkinliğinizin tarihi, şehri ve kapsamını paylaşın; hangi ekipmanın neden
            gerektiğini teknik gerekçesiyle birlikte anlatalım.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/iletisim"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-slate-950 px-6 text-sm font-black text-white transition hover:bg-slate-800"
            >
              Teklif alın
            </Link>
            <Link
              href="/hizmetler"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border-2 border-slate-950 px-6 text-sm font-black text-slate-950 transition hover:bg-slate-950 hover:text-white"
            >
              Hizmetleri inceleyin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

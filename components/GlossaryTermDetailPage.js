import Image from "next/image";
import Link from "next/link";

import JsonLdScript from "@/components/seo/JsonLd";
import { GLOSSARY_TERMS } from "@/lib/glossary";
import { PODIUM_GLOSSARY_DETAIL_SLUGS } from "@/lib/glossaryDetailContent";
import { ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";

const SITE = "https://www.sahneva.com";

function glossaryHref(slug) {
  return PODIUM_GLOSSARY_DETAIL_SLUGS.includes(slug)
    ? `/sozluk/${slug}`
    : `/sozluk#${slug}`;
}

function GlossaryDetailJsonLd({ term, detail, pageUrl }) {
  const pageId = `${pageUrl}#webpage`;
  const termId = `${pageUrl}#definedterm`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const imageId = term.visual ? `${pageUrl}#primaryimage` : null;

  const graph = [
    {
      "@type": "WebPage",
      "@id": pageId,
      url: pageUrl,
      name: detail.title,
      description: detail.metaDescription,
      inLanguage: "tr-TR",
      isPartOf: { "@id": WEBSITE_ID },
      publisher: { "@id": ORGANIZATION_ID },
      mainEntity: { "@id": termId },
      breadcrumb: { "@id": breadcrumbId },
      ...(imageId ? { primaryImageOfPage: { "@id": imageId } } : {}),
    },
    {
      "@type": "DefinedTerm",
      "@id": termId,
      name: term.term,
      alternateName: term.aliases,
      description: term.definition,
      url: pageUrl,
      // DefinedTerm Intangible altindadir; `inLanguage` bu turde gecersiz.
      inDefinedTermSet: { "@id": `${SITE}/sozluk#termset` },
      subjectOf: { "@id": pageId },
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Sözlük", item: `${SITE}/sozluk` },
        { "@type": "ListItem", position: 3, name: term.term, item: pageUrl },
      ],
    },
  ];

  if (term.visual) {
    graph.push({
      "@type": "ImageObject",
      "@id": imageId,
      contentUrl: `${SITE}${term.visual.src}`,
      width: term.visual.width,
      height: term.visual.height,
      caption: term.visual.alt,
    });
  }

  return <JsonLdScript id={`ld-json-sozluk-${term.slug}`} data={{ "@context": "https://schema.org", "@graph": graph }} />;
}

export default function GlossaryTermDetailPage({ term, detail, pageUrl }) {
  const relatedTerms = GLOSSARY_TERMS.filter((entry) =>
    detail.relatedTerms.includes(entry.slug)
  );

  return (
    <div className="bg-white text-slate-900">
      <GlossaryDetailJsonLd term={term} detail={detail} pageUrl={pageUrl} />

      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white sm:py-20">
        {term.visual ? (
          <>
            <Image
              src={term.visual.src}
              alt={term.visual.alt}
              width={term.visual.width}
              height={term.visual.height}
              priority
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,6,23,.97),rgba(2,6,23,.82)_52%,rgba(2,6,23,.46))]"
              aria-hidden="true"
            />
          </>
        ) : null}
        <div className="relative mx-auto max-w-5xl">
          <nav aria-label="Site içi konum" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/60">
              <li><Link href="/" className="hover:text-white">Ana Sayfa</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/sozluk" className="hover:text-white">Sözlük</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/90">{term.term}</li>
            </ol>
          </nav>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-300">Sahne ve platform sözlüğü</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {detail.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            {detail.summary}
          </p>
        </div>
      </section>

      <div>
        <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16" aria-labelledby="kisa-tanim">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-700">Kısa tanım</p>
            <h2 id="kisa-tanim" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              {term.definition}
            </h2>
            {term.visual?.caption ? (
              <p className="mt-5 text-sm font-semibold leading-6 text-slate-500">{term.visual.caption}</p>
            ) : null}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 px-4 py-14 sm:py-16" aria-labelledby="pratikte">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-700">Pratik kullanım</p>
              <h2 id="pratikte" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                {detail.practicalTitle}
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              {detail.practical.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16" aria-labelledby="planlama">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-700">Planlama</p>
          <h2 id="planlama" className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            {detail.planningTitle}
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {detail.planning.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-base leading-7 text-slate-700 shadow-sm">{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-slate-950 px-4 py-14 text-white sm:py-16" aria-labelledby="uygulama">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-300">Sahneva uygulama notu</p>
            <h2 id="uygulama" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{detail.applicationTitle}</h2>
            <p className="mt-6 max-w-4xl text-base leading-8 text-white/75 sm:text-lg">{detail.application}</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16" aria-labelledby="sik-hatalar">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-700">Sık hatalar</p>
          <h2 id="sik-hatalar" className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Teknik detayı son ana bırakmamak gerekir
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {detail.mistakes.map((item) => (
              <li key={item} className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-base leading-7 text-slate-800">{item}</li>
            ))}
          </ul>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 px-4 py-14 sm:py-16" aria-labelledby="ilgili-terimler">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-700">İlgili teknik terimler</p>
            <h2 id="ilgili-terimler" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Birlikte planlanan başlıklar</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedTerms.map((relatedTerm) => (
                <Link key={relatedTerm.slug} href={glossaryHref(relatedTerm.slug)} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-violet-400 hover:shadow-md">
                  <h3 className="text-xl font-black tracking-tight text-slate-950">{relatedTerm.term}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-700">{relatedTerm.definition}</p>
                  <span className="mt-5 inline-flex text-sm font-black text-violet-700 underline underline-offset-4">Sözlükte görüntüle</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:py-16" aria-labelledby="iletisim-cta">
          <div className="mx-auto max-w-4xl rounded-3xl bg-slate-950 px-6 py-10 text-center text-white sm:px-10 sm:py-14">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-300">İletişim</p>
            <h2 id="iletisim-cta" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Kurulumu doğru başlıklarla planlayalım</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">{detail.cta}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/iletisim" className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-white px-6 text-sm font-black text-slate-950 transition hover:bg-violet-100">Teklif ve keşif talep edin</Link>
              {term.related ? (
                <Link href={term.related.href} className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border-2 border-white/80 px-6 text-sm font-black text-white transition hover:bg-white hover:text-slate-950">{term.related.label}</Link>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import WebMcpRuntime from "@/components/webmcp/WebMcpRuntime.client";
import { getSearchIndex } from "@/lib/searchIndex";
import { SITE_URL } from "@/lib/seo/seoConfig";
import { ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import { groupByType, highlightSegments, searchEntries } from "@/lib/search/core";

const SEARCH_URL = `${SITE_URL}/search`;
const SEARCH_OG_IMAGE_URL = `${SITE_URL}/img/og/sahneva-og.webp`;
const WEB_MCP_SEARCH_FORM_PROPS = {
  toolname: "searchSite",
  tooldescription: "Search Sahneva pages, services, projects and blog content.",
};
const WEB_MCP_SEARCH_INPUT_PROPS = {
  toolparamdescription:
    "Search query for Sahneva services, event production pages, projects and blog articles.",
};

/** Sonuc bulunamadiginda kullaniciyi cikmaza sokmamak icin. */
const SUGGESTED_QUERIES = [
  "sahne kiralama",
  "led ekran",
  "çadır",
  "pixel pitch",
  "ses sistemi",
  "kurumsal organizasyon",
];

export const metadata = {
  title: "Site İçi Arama",
  description: "Sahneva sayfaları arasında anahtar kelime ile arama yapın.",
  alternates: { canonical: SEARCH_URL },
  openGraph: {
    title: "Site İçi Arama | Sahneva",
    description: "Sahneva sayfaları arasında anahtar kelime ile arama yapın.",
    url: SEARCH_URL,
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: SEARCH_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Sahneva Site İçi Arama",
      },
    ],
  },
  robots: { index: false, follow: true },
};

/** Sayfa noindex; sema yalnizca mevcut arama sonucunun turunu ve site bagini aciklar. */
const buildSearchResultsSchema = (query, resultCount) => ({
  "@context": "https://schema.org",
  "@type": "SearchResultsPage",
  "@id": `${SEARCH_URL}#webpage`,
  url: query ? `${SEARCH_URL}?q=${encodeURIComponent(query)}` : SEARCH_URL,
  name: query ? `"${query}" için arama sonuçları` : "Site içi arama",
  description: "Sahneva sayfaları arasında anahtar kelime ile arama yapın.",
  inLanguage: "tr-TR",
  isPartOf: { "@id": WEBSITE_ID },
  publisher: { "@id": ORGANIZATION_ID },
  ...(query ? { query, mainEntity: { "@type": "ItemList", numberOfItems: resultCount } } : {}),
});

/** Eslesen parcalari <mark> ile isaretler; sunucuda calisir, JS gerektirmez. */
function Highlighted({ text, query }) {
  if (!text) return null;
  const segments = highlightSegments(text, query);

  return segments.map((segment, index) =>
    segment.match ? (
      <mark key={index} className="rounded bg-amber-100 px-0.5 text-inherit">
        {segment.text}
      </mark>
    ) : (
      <span key={index}>{segment.text}</span>
    ),
  );
}

export default async function SearchPage({ searchParams }) {
  // Next.js 15'ten beri searchParams bir Promise. Await edilmediginde `?.q` her
  // zaman undefined donuyordu; yani arama kutusuna ne yazilirsa yazilsin filtre
  // uygulanmiyor, sayfa tum indeksi listeliyordu.
  const resolvedSearchParams = await searchParams;
  const rawQuery = resolvedSearchParams?.q;
  const query =
    typeof rawQuery === "string" ? rawQuery : Array.isArray(rawQuery) ? (rawQuery[0] ?? "") : "";
  const trimmedQuery = query.trim();

  const entries = getSearchIndex();
  const results = searchEntries(entries, trimmedQuery);
  const groups = groupByType(results);

  return (
    <section className="container py-12 lg:py-16">
      <WebMcpRuntime locale="tr" />
      <JsonLd id="ld-json-search" data={buildSearchResultsSchema(trimmedQuery, results.length)} />

      <div className="max-w-4xl">
        <p className="text-sm font-semibold text-violet-600">Site İçi Arama</p>
        <h1 className="mt-2 text-3xl font-black text-neutral-900 lg:text-4xl">
          Aradığınız sayfayı hızlıca bulun
        </h1>
        <p className="mt-3 text-neutral-600">
          Hizmetler, hesaplama araçları, {entries.filter((e) => e.type === "terim").length} teknik
          terim, rehberler ve projeler tek arama kutusunda.
        </p>

        <form
          action="/search"
          method="get"
          {...WEB_MCP_SEARCH_FORM_PROPS}
          className="mt-6"
        >
          <label htmlFor="search-page-input" className="sr-only">
            Site içinde arama yapın
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              id="search-page-input"
              name="q"
              defaultValue={query}
              type="search"
              autoComplete="off"
              placeholder="Örn: pixel pitch, çadır m², truss kiralama..."
              {...WEB_MCP_SEARCH_INPUT_PROPS}
              enterKeyHint="search"
              /* text-base: 16px altındaki alanlarda iOS Safari sayfayı yakınlaştırıyor. */
              className="min-h-[52px] flex-1 rounded-2xl border border-neutral-200 bg-white px-4 text-base text-neutral-800 focus-ring"
            />
            <button
              type="submit"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-violet-600 px-6 text-sm font-bold text-white shadow-lg transition hover:bg-violet-700"
            >
              Ara
            </button>
          </div>
        </form>

        <p className="mt-4 text-sm font-semibold text-neutral-700">
          {trimmedQuery
            ? `"${trimmedQuery}" için ${results.length} sonuç`
            : `${results.length} sayfa listeleniyor`}
        </p>

        {results.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-lg font-black text-neutral-900">
              Aradığınız kelimeyle eşleşen sayfa bulunamadı
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Terimi kısaltmayı deneyin ya da aşağıdaki başlıklardan devam edin. Aradığınız
              teknik bir terimse sözlükte olabilir.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {SUGGESTED_QUERIES.map((suggestion) => (
                <li key={suggestion}>
                  <Link
                    href={`/search?q=${encodeURIComponent(suggestion)}`}
                    className="inline-flex min-h-[40px] items-center rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm font-bold text-neutral-700 transition hover:border-violet-500 hover:text-violet-800"
                  >
                    {suggestion}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/sozluk"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-slate-800"
              >
                Teknik sözlüğe git
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border-2 border-slate-950 px-5 text-sm font-black text-slate-950 transition hover:bg-slate-950 hover:text-white"
              >
                Bize sorun
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-8 space-y-8">
            {groups.map((group) => (
              <section key={group.type} aria-labelledby={`grup-${group.type}`}>
                <h2
                  id={`grup-${group.type}`}
                  className="text-sm font-black uppercase tracking-[0.14em] text-neutral-500"
                >
                  {group.plural}{" "}
                  <span className="font-bold text-neutral-400">({group.entries.length})</span>
                </h2>

                <ul className="mt-3 divide-y divide-neutral-100 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
                  {group.entries.map((entry) => (
                    <li key={entry.href}>
                      <Link
                        href={entry.href}
                        className="flex gap-3 px-5 py-4 transition hover:bg-violet-50/70"
                      >
                        <span className="mt-0.5 text-lg" aria-hidden="true">
                          {entry.icon}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-bold text-neutral-900">
                            <Highlighted text={entry.label} query={trimmedQuery} />
                          </span>
                          {entry.description ? (
                            <span className="mt-1 block text-sm leading-6 text-neutral-600">
                              <Highlighted text={entry.description} query={trimmedQuery} />
                            </span>
                          ) : null}
                          <span className="mt-1 block truncate text-xs font-medium text-neutral-400">
                            sahneva.com{entry.href}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

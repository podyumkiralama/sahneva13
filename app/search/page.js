import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { getSearchIndex } from "@/lib/searchIndex";
import { SITE_URL } from "@/lib/seo/seoConfig";
import { ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";

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

/**
 * Sayfa noindex; sema burada siralama icin degil, WebSite.potentialAction ile
 * tanimlanan SearchAction hedefinin gercekten bir arama sonucu sayfasi oldugunu
 * dogrulamak icin bulunur.
 */
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

const filterRoutes = (routes, query) => {
  const q = query.trim().toLowerCase();
  if (!q) return routes;

  return routes.filter((route) => {
    const labelMatch = route.label.toLowerCase().includes(q);
    const keywordMatch = route.keywords?.some((keyword) =>
      keyword.toLowerCase().includes(q),
    );
    return labelMatch || keywordMatch;
  });
};

// Next.js 15'ten beri searchParams bir Promise. Await edilmediginde `?.q` her zaman
// undefined donuyordu; yani arama kutusuna ne yazilirsa yazilsin filtre uygulanmiyor,
// sayfa tum indeksi listeliyordu.
export default async function SearchPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const rawQuery = resolvedSearchParams?.q;
  const query = typeof rawQuery === "string" ? rawQuery : Array.isArray(rawQuery) ? (rawQuery[0] ?? "") : "";
  const routes = getSearchIndex();
  const results = filterRoutes(routes, query);

  return (
    <section className="container py-12 lg:py-16">
      <JsonLd id="ld-json-search" data={buildSearchResultsSchema(query, results.length)} />
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-blue-600">Site İçi Arama</p>
        <h1 className="mt-2 text-3xl font-black text-neutral-900 lg:text-4xl">
          Aradığınız sayfayı hızlıca bulun
        </h1>
        <p className="mt-3 text-neutral-600">
          Anahtar kelimenizi yazın, ilgili sayfaları hemen listeleyelim.
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
              type="text"
              placeholder="Örn: truss kiralama, iletişim..."
              {...WEB_MCP_SEARCH_INPUT_PROPS}
              className="flex-1 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 focus-ring"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-blue-700"
            >
              Ara
            </button>
          </div>
        </form>

        <div className="mt-8 rounded-3xl border border-neutral-200 bg-white shadow-lg">
          <div className="border-b border-neutral-100 px-5 py-4">
            <p className="text-sm font-semibold text-neutral-900">
              {query.trim()
                ? `"${query}" için ${results.length} sonuç`
                : `${results.length} sayfa listeleniyor`}
            </p>
          </div>

          {results.length === 0 ? (
            <div className="px-5 py-10 text-sm text-neutral-500">
              Aradığınız anahtar kelimeyle eşleşen bir sayfa bulunamadı.
            </div>
          ) : (
            <ul className="divide-y divide-neutral-100">
              {results.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className="flex items-center gap-3 px-5 py-4 text-sm text-neutral-700 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    <span className="text-lg" aria-hidden="true">
                      {route.icon}
                    </span>
                    <span className="font-semibold text-neutral-900">
                      {route.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

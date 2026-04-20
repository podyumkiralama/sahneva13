import Link from "next/link";
import { getSearchIndex } from "@/lib/searchIndex";
import { SITE_URL } from "@/lib/seo/seoConfig";

const SEARCH_URL = `${SITE_URL}/search`;
const SEARCH_OG_IMAGE_URL = `${SITE_URL}/img/og/sahneva-og.webp`;

export const metadata = {
  title: "Site Ä°Ã§i Arama",
  description: "Sahneva sayfalarÄ± arasÄ±nda anahtar kelime ile arama yapÄ±n.",
  alternates: { canonical: SEARCH_URL },
  openGraph: {
    title: "Site Ä°Ã§i Arama | Sahneva",
    description: "Sahneva sayfalarÄ± arasÄ±nda anahtar kelime ile arama yapÄ±n.",
    url: SEARCH_URL,
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: SEARCH_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Sahneva Site Ä°Ã§i Arama",
      },
    ],
  },
  robots: { index: false, follow: true },
};

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

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = typeof params?.q === "string" ? params.q : "";
  const routes = getSearchIndex();
  const results = filterRoutes(routes, query);

  return (
    <section className="container py-12 lg:py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-blue-600">Site Ä°Ã§i Arama</p>
        <h1 className="mt-2 text-3xl font-black text-neutral-900 lg:text-4xl">
          AradÄ±ÄŸÄ±nÄ±z sayfayÄ± hÄ±zlÄ±ca bulun
        </h1>
        <p className="mt-3 text-neutral-600">
          Anahtar kelimenizi yazÄ±n, ilgili sayfalarÄ± hemen listeleyelim.
        </p>

        <form action="/search" method="get" className="mt-6">
          <label htmlFor="search-page-input" className="sr-only">
            Site iÃ§inde arama yapÄ±n
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              id="search-page-input"
              name="q"
              defaultValue={query}
              type="text"
              placeholder="Ã–rn: truss kiralama, iletiÅŸim..."
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
                ? `"${query}" iÃ§in ${results.length} sonuÃ§`
                : `${results.length} sayfa listeleniyor`}
            </p>
          </div>

          {results.length === 0 ? (
            <div className="px-5 py-10 text-sm text-neutral-500">
              AradÄ±ÄŸÄ±nÄ±z anahtar kelimeyle eÅŸleÅŸen bir sayfa bulunamadÄ±.
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

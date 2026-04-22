// components/SeoArticles.jsx

import Image from "next/image";
import Link from "next/link";
import path from "path";
import { existsSync } from "fs";
import { readdir } from "fs/promises";
import JsonLd from "@/components/seo/JsonLd";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.sahneva.com";

const ORG_ID = `${SITE}/#org`;

const abs = (p) =>
  /^https?:\/\//i.test(p || "")
    ? p
    : `${SITE}/${String(p || "").replace(/^\/+/, "")}`;

const CARD_SIZES =
  "(max-width: 640px) calc(100vw - 2rem)," +
  "(max-width: 1024px) calc((100vw - 3rem) / 2)," +
  "calc((100vw - 4rem) / 3)";

const BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='9' viewBox='0 0 16 9'%3E%3Crect width='16' height='9' fill='%23e5e7eb'/%3E%3C/svg%3E";

// BLOG KLİPTEN MAKALELERİ ÇEK
async function getSeoArticles(limit = 6) {
  try {
    // Blog klasörü: app/(tr)/blog
    const blogDir = path.join(process.cwd(), "app", "(tr)", "blog");

    if (!existsSync(blogDir)) {
      console.warn("[SeoArticles] Blog klasörü bulunamadı:", blogDir);
      return [];
    }

    const entries = await readdir(blogDir, { withFileTypes: true });

    const posts = await Promise.all(
      entries.map(async (entry) => {
        if (!entry.isDirectory()) return null;
        if (entry.name.startsWith(".")) return null;

        const slug = entry.name;

        try {
          // Blog sayfası modülünü içe aktar
          const mod = await import(
            `@/app/(tr)/blog/${slug}/page.jsx`
          );
          const meta = mod.metadata || {};

          const dateObj = meta.date ? new Date(meta.date) : null;

          return {
            slug,
            href: `/blog/${slug}`,
            title:
              meta.title ||
              slug
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase()),
            desc:
              meta.description ||
              "Bu makale için açıklama girilmemiş.",
            image: meta.image || "/img/blog/default.webp",
            category: meta.category || "Genel",
            date: dateObj,
            datePublished: meta.date || null,
            dateModified: meta.date || null,
            readTime: meta.readTime || null,
            author: meta.author || "Sahneva Editör",
          };
        } catch (error) {
          console.warn(
            "[SeoArticles] Blog sayfası import edilirken hata:",
            slug,
            error
          );
          return null;
        }
      })
    );

    const valid = posts.filter(Boolean);

    // Tarihe göre yeni → eski sırala
    valid.sort((a, b) => {
      if (a.date && b.date) return b.date - a.date;
      if (a.date) return -1;
      if (b.date) return 1;
      return 0;
    });

    return valid.slice(0, limit);
  } catch (error) {
    console.error("[SeoArticles] Blog okuma hatası:", error);
    return [];
  }
}

// JSON-LD (Rich Snippet) ÜRET
function ArticlesJsonLd({ items }) {
  if (!items?.length) return null;

  const list = items.map((a, i) => {
    const url = abs(a.href);
    const image = a.image ? [abs(a.image)] : undefined;
    return {
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "BlogPosting",
        headline: a.title,
        description: a.desc,
        url,
        image,
        datePublished: a.datePublished || undefined,
        dateModified: a.dateModified || a.datePublished || undefined,
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      },
    };
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: list,
  };

  return (
    <JsonLd
      id="home-articles-jsonld"
      data={schema}
      suppressHydrationWarning
    />
  );
}

// ANA BÖLÜM
export default async function SeoArticles({
  compact = false,
  title = "Teknik Bilgi & SEO Makaleleri",
}) {
  // 🔥 Blog klasöründen makaleleri çek
  const items = await getSeoArticles(6);
  if (!items.length) return null;

  return (
    <section
      className={`${
        compact ? "py-10" : "py-12"
      } bg-gradient-to-br from-white via-neutral-50 to-blue-50/30`}
      aria-labelledby="articles-title"
    >
      <div className="container">
        <div className="text-center mb-8">
          <h2
            id="articles-title"
            className="text-2xl md:text-3xl font-black text-neutral-900"
          >
            {title}
          </h2>
          <p className="text-neutral-600 mt-2 max-w-2xl mx-auto text-sm md:text-base">
            Sahne, podyum, LED ekran ve ses-ışık sistemleri hakkında; organizasyon
            tarafını güçlendiren pratik rehberler ve güven veren içerikler.
          </p>
        </div>

        {/* role=list semantiği kartların liste olarak algılanmasını sağlar */}
        <ul className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 list-none">
          {items.map((a) => {
            const formattedDate =
              a.date &&
              a.date.toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

            return (
              <li key={a.slug} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-xl focus-within:ring-2 focus-within:ring-blue-500">
                  {/* Üst görsel */}
                  <div className="relative h-40 w-full overflow-hidden rounded-t-2xl bg-neutral-200">
                    <Link
                      href={a.href}
                      className="absolute inset-0 block rounded-t-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      aria-label={a.title}
                    >
                      <span className="sr-only">{a.title}</span>
                    </Link>

                    {a.image ? (
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes={CARD_SIZES}
                        quality={80}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={BLUR}
                      />
                    ) : (
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300"
                        aria-hidden="true"
                      />
                    )}

                    {a.category && (
                      <span className="absolute left-2 top-2 rounded-full bg-blue-600/90 px-2 py-1 text-sm font-semibold text-white shadow-sm">
                        {a.category}
                      </span>
                    )}
                  </div>

                  {/* İçerik */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-neutral-500">
                      {formattedDate && (
                        <time dateTime={a.datePublished || ""}>
                          📅 {formattedDate}
                        </time>
                      )}
                      {a.readTime && (
                        <>
                          <span className="h-1 w-1 rounded-full bg-neutral-300" />
                          <span>⏱️ {a.readTime}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base font-semibold text-neutral-900 line-clamp-2 group-hover:text-blue-700 transition-colors">
                      <Link
                        href={a.href}
                        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                      >
                        {a.title}
                      </Link>
                    </h3>

                    <p className="mt-2 line-clamp-3 text-xs sm:text-sm text-neutral-600">
                      {a.desc}
                    </p>

                    <div className="mt-4 flex items-center justify-between text-xs font-semibold text-blue-600">
                      <Link
                        href={a.href}
                        className="inline-flex items-center gap-1 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                      >
                        Devamını oku
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <ArticlesJsonLd items={items} />
      </div>
    </section>
  );
}

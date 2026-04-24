import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ListTree, Network } from "lucide-react";
import SmartBlogSuggestions from "@/components/blog/SmartBlogSuggestions";
import styles from "@/components/blog/BlogLayout.module.css";

/**
 * Sahneva BlogLayout
 * - Hero + meta + CTA
 * - Breadcrumbs (UI)
 * - Prose wrapper
 *
 * Not: JSON-LD breadcrumb / Article schema gibi scriptleri sayfa içinde bırakın.
 */
export default function BlogLayout({
  breadcrumbItems = [],
  heroImage,
  pills = [],
  title,
  highlight,
  description,
  publishDate,
  author,
  readTime,
  primaryLinks,
  whatsappUrl,
  tocItems = [],
  cornerstoneLinks = [],
  currentSlug,
  currentCategory,
  currentKeywords,
  children,
}) {
  const formattedDate = publishDate ? formatTrDate(publishDate) : null;

  const links = Array.isArray(primaryLinks) ? primaryLinks.filter(Boolean) : [];
  const safeTocItems = Array.isArray(tocItems) ? tocItems.filter((item) => item?.href && item?.label) : [];
  const safeCornerstoneLinks = Array.isArray(cornerstoneLinks)
    ? cornerstoneLinks.filter((item) => item?.href && item?.label)
    : [];

  return (
    <>
      {/* HERO */}
      <header className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-blue-900/40 z-10" />
        {heroImage?.src ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage.src}
              alt={heroImage.alt ?? title ?? "Sahneva Blog"}
              fill
              className="object-cover opacity-65"
              priority
              sizes="100vw"
              fetchPriority="high"
            />
          </div>
        ) : null}

        <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
          {pills?.length ? (
            <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-7">
              {pills.slice(0, 4).map((p, i) => (
                <Pill key={`${p}-${i}`}>{p}</Pill>
              ))}
            </div>
          ) : null}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-5 tracking-tight">
            {title}{" "}
            {highlight ? (
              <span className="gradient-text gradient-text--safe-xl">{highlight}</span>
            ) : null}
          </h1>

          {description ? (
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto font-light antialiased">
              {description}
            </p>
          ) : null}

          {(formattedDate || readTime || author) ? (
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-200 mt-8 pt-8 border-t border-white/10">
              {formattedDate ? (
                <time dateTime={publishDate} className="flex items-center gap-2">
                  <span aria-hidden="true">📅</span> {formattedDate}
                </time>
              ) : null}

              {readTime ? (
                <span className="flex items-center gap-2">
                  <span aria-hidden="true">⏱️</span> {readTime}
                </span>
              ) : null}

              {author ? (
                <span className="flex items-center gap-2">
                  <span aria-hidden="true">✍️</span> {author}
                </span>
              ) : null}
            </div>
          ) : null}

          {(links.length || whatsappUrl) ? (
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {links.slice(0, 3).map((l, idx) => (
                <Link
                  key={`${l.href}-${idx}`}
                  href={l.href}
                  className={buttonClass(idx === 0)}
                >
                  {l.icon ? <span aria-hidden="true">{l.icon}</span> : null}
                  {l.label}
                </Link>
              ))}

              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp ile iletişime geç — yeni sekmede açılır"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-7 transition-transform hover:-translate-y-0.5"
                >
                  <span aria-hidden="true">💬</span> WhatsApp
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </header>

      {/* MAIN */}
      <main className="bg-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbItems} />

          {(safeTocItems.length || safeCornerstoneLinks.length) ? (
            <section
              aria-label="Makale navigasyonu"
              className="mb-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]"
            >
              {safeTocItems.length ? (
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <ListTree className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="m-0 text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                        Bu yazıda
                      </p>
                      <h2 className="mt-2 text-xl font-black text-slate-950">
                        Hızlı içerik akışı
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        Uzun rehberlerde doğrudan ilgili bölüme atlayabilmeniz için ana başlıkları burada topladık.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {safeTocItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="group inline-flex min-h-[56px] items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:text-blue-700"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" />
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}

              {safeCornerstoneLinks.length ? (
                <div className="rounded-3xl border border-slate-900 bg-slate-950 p-6 text-white">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Network className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="m-0 text-xs font-black uppercase tracking-[0.2em] text-blue-200">
                        Cornerstone
                      </p>
                      <h2 className="mt-2 text-xl font-black text-white">
                        Ana hizmet merkezleri
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        Rehberin bağlandığı ana hizmet sayfalarına buradan geçebilir, detay ve teklif akışını hızlandırabilirsiniz.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {safeCornerstoneLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        prefetch={false}
                        className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>
          ) : null}

          <article className={`${styles.scope} prose prose-xl lg:prose-2xl max-w-none prose-headings:font-black prose-headings:scroll-mt-32 prose-p:text-[1.24rem] lg:prose-p:text-[1.34rem] prose-p:leading-[1.7] prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline`}>
            {children}
          </article>

          <SmartBlogSuggestions
            currentSlug={currentSlug}
            currentCategory={currentCategory}
            currentKeywords={currentKeywords}
          />
        </div>
      </main>
    </>
  );
}

function buttonClass(isPrimary) {
  if (isPrimary) {
    return "inline-flex items-center justify-center gap-2 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold py-3.5 px-7 transition-transform hover:-translate-y-0.5";
  }
  return "inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold py-3.5 px-7 border border-white/20 transition-transform hover:-translate-y-0.5";
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs font-semibold tracking-wide">
      {children}
    </span>
  );
}

function Breadcrumbs({ items }) {
  if (!items?.length) return null;
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
        {items.map((it, idx) => (
          <li key={`${it.url}-${idx}`} className="flex items-center gap-2">
            {idx > 0 ? <span aria-hidden="true" className="text-gray-400">/</span> : null}
            {idx < items.length - 1 ? (
              <Link href={safePath(it.url)} className="hover:underline">
                {it.name}
              </Link>
            ) : (
              <span className="text-gray-900 font-semibold">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function safePath(url) {
  // siteUrl ile tam url verilirse path'e indir
  try {
    const u = new URL(url);
    return u.pathname + (u.search ?? "");
  } catch {
    return url;
  }
}

function formatTrDate(iso) {
  try {
    const d = new Date(iso);
    return new Intl.DateTimeFormat("tr-TR", { day: "2-digit", month: "long", year: "numeric" }).format(d);
  } catch {
    return null;
  }
}

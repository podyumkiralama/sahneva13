import Image from "next/image";
import Link from "next/link";

/**
 * Sahneva BlogLayout
 * - Hero + meta + CTA
 * - Breadcrumbs (UI)
 * - Prose wrapper
 *
 * Not: JSON-LD breadcrumb / Article schema gibi scriptleri sayfa içinde bırakın.
 */
export default function BlogLayout({
  siteUrl,
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
  children,
}) {
  const formattedDate = publishDate ? formatTrDate(publishDate) : null;

  const links = Array.isArray(primaryLinks) ? primaryLinks.filter(Boolean) : [];

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

          <article className="prose prose-lg max-w-none blog-scope prose-headings:font-black prose-headings:scroll-mt-32 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
            {children}
          </article>
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

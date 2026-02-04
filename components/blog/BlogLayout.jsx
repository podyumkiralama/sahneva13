import Image from "next/image";
import Link from "next/link";

/**
 * Sahneva BlogLayout
 * - Consistent hero aspect ratio (16:9)
 * - Consistent content image sizing (max 900px) via global style targeting .blog-content img
 *
 * Props:
 * - title, description, image, publishDate, author
 * - breadcrumbs: [{ name, item }]
 * - ctas: [{ href, label }]
 * - children
 */
export default function BlogLayout({
  title,
  description,
  image,
  publishDate,
  author = "Sahneva İçerik Ekibi",
  breadcrumbs = [],
  ctas = [],
  children,
}) {
  return (
    <>
      <article className="mx-auto w-full px-4 pb-16 pt-8">
        <div className="mx-auto w-full max-w-6xl">
          {/* Breadcrumbs */}
          {breadcrumbs?.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/70">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {breadcrumbs.map((b, i) => (
                  <li key={b.item ?? i} className="flex items-center gap-2">
                    {i > 0 && <span className="text-white/30">/</span>}
                    <Link href={b.item ?? "#"} className="hover:text-white">
                      {b.name}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Header */}
          <header className="mb-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              {title}
            </h1>

            {description && (
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
                {description}
              </p>
            )}

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/60">
              {publishDate && <time dateTime={publishDate}>{publishDate}</time>}
              <span className="text-white/25">•</span>
              <span>{author}</span>
            </div>

            {ctas?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {ctas.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </header>

          {/* Hero */}
          {image && (
            <div className="relative mb-10 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={image}
                  alt={title || "Blog görseli"}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Content */}
          <div className="blog-content mx-auto w-full max-w-4xl text-white/90">
            {children}
          </div>
        </div>
      </article>

      {/* Global image normalization for blog content */}
      <style jsx global>{`
        .blog-content img {
          width: 100% !important;
          max-width: 900px !important;
          height: auto !important;
          display: block !important;
          margin: 40px auto !important;
          border-radius: 16px !important;
        }
        /* Next/Image wrapper safety */
        .blog-content span > img {
          max-width: 900px !important;
        }
      `}</style>
    </>
  );
}

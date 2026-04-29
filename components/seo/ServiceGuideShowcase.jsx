import Link from "next/link";

export default function ServiceGuideShowcase({
  eyebrow = "Hizmet rehberi",
  title,
  description,
  contents = [],
  chapters = [],
  checklist = [],
  cta,
  theme = "blue",
}) {
  const accent = {
    blue: {
      badge: "bg-blue-50 text-blue-700 ring-blue-100",
      text: "text-blue-700",
      border: "border-blue-100",
      panel: "from-blue-50/80 via-white to-slate-50",
      button: "bg-blue-700 hover:bg-blue-800 focus-visible:ring-blue-500",
    },
    violet: {
      badge: "bg-violet-50 text-violet-700 ring-violet-100",
      text: "text-violet-700",
      border: "border-violet-100",
      panel: "from-violet-50/80 via-white to-slate-50",
      button: "bg-violet-700 hover:bg-violet-800 focus-visible:ring-violet-500",
    },
    amber: {
      badge: "bg-amber-50 text-amber-800 ring-amber-100",
      text: "text-amber-800",
      border: "border-amber-100",
      panel: "from-amber-50/80 via-white to-slate-50",
      button: "bg-amber-700 hover:bg-amber-800 focus-visible:ring-amber-500",
    },
  }[theme] ?? {
    badge: "bg-slate-100 text-slate-800 ring-slate-200",
    text: "text-slate-800",
    border: "border-slate-200",
    panel: "from-slate-50 via-white to-slate-50",
    button: "bg-slate-900 hover:bg-slate-800 focus-visible:ring-slate-500",
  };

  if (!title || (!contents.length && !chapters.length)) return null;

  return (
    <section
      className={`bg-gradient-to-b ${accent.panel} py-16 md:py-20`}
      aria-labelledby="service-guide-title"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <aside className="lg:sticky lg:top-24">
            <div className={`rounded-3xl border ${accent.border} bg-white p-6 shadow-sm`}>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ring-1 ${accent.badge}`}
              >
                {eyebrow}
              </span>
              <h2
                id="service-guide-title"
                className="mt-5 text-3xl font-black leading-tight text-slate-950 md:text-4xl"
              >
                {title}
              </h2>
              {description ? (
                <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
                  {description}
                </p>
              ) : null}

              {contents.length ? (
                <nav className="mt-8" aria-label={`${title} icindekiler`}>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-slate-500">
                    Icindekiler
                  </p>
                  <ol className="mt-4 space-y-3">
                    {contents.map((item, index) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                        >
                          <span className={`font-black ${accent.text}`}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </nav>
              ) : null}

              {cta?.href && cta?.label ? (
                <Link
                  href={cta.href}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-5 py-4 text-sm font-black text-white shadow-sm transition focus:outline-none focus-visible:ring-4 ${accent.button}`}
                  aria-label={cta.ariaLabel || cta.label}
                >
                  {cta.label}
                </Link>
              ) : null}
            </div>
          </aside>

          <div className="space-y-5">
            {chapters.map((chapter, index) => (
              <article
                key={chapter.id}
                id={chapter.id}
                className={`scroll-mt-28 rounded-3xl border ${accent.border} bg-white p-6 shadow-sm md:p-8`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <span
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-base font-black ring-1 ${accent.badge}`}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-black leading-tight text-slate-950">
                      {chapter.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-700">
                      {chapter.body}
                    </p>
                    {chapter.points?.length ? (
                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {chapter.points.map((point) => (
                          <li
                            key={point}
                            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold leading-relaxed text-slate-700"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}

            {checklist.length ? (
              <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm md:p-8">
                <h3 className="text-2xl font-black">Teklif oncesi kontrol listesi</h3>
                <ul className="mt-5 grid gap-3 md:grid-cols-2">
                  {checklist.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold leading-relaxed text-white/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

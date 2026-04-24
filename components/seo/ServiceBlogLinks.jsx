import Link from "next/link";
import { ArrowRight, BookOpenText, Network } from "lucide-react";

export default function ServiceBlogLinks({
  eyebrow = "İç link akışı",
  title = "Bu konuya dair rehberler",
  description = "İlgili blog yazılarından detaylı ipuçları ve güncel trendleri keşfedin.",
  links = [],
  relatedServices = [],
}) {
  if (!links.length && !relatedServices.length) return null;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
            <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
            {eyebrow}
          </div>
          <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">{title}</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
        </div>

        <div className={`mt-8 grid gap-6 ${relatedServices.length ? "lg:grid-cols-[1.15fr_0.85fr]" : ""}`}>
          {links.length ? (
            <div className="rounded-[1.6rem] border border-slate-200 bg-slate-50/80 p-5">
              <div className="flex items-center gap-3 text-slate-900">
                <BookOpenText className="h-5 w-5 text-blue-700" aria-hidden="true" />
                <div className="text-lg font-black">İlgili rehber içerikler</div>
              </div>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      prefetch={false}
                      className="group flex h-full items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:bg-blue-50/40"
                    >
                      <span>{link.label}</span>
                      <ArrowRight
                        className="mt-0.5 h-4 w-4 shrink-0 text-blue-700 transition group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {relatedServices.length ? (
            <div className="rounded-[1.6rem] border border-slate-200 bg-slate-950 p-5 text-white">
              <div className="flex items-center gap-3">
                <Network className="h-5 w-5 text-blue-300" aria-hidden="true" />
                <div className="text-lg font-black">İlgili hizmet halkası</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Bu rehber ve hizmet kümesini destekleyen en yakın sayfaları burada topluyoruz.
              </p>
              <ul className="mt-5 grid gap-3">
                {relatedServices.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      prefetch={false}
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      <span>{service.label}</span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-blue-300 transition group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, BookOpenText, Network } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");

function toAbsoluteUrl(href) {
  if (!href) return undefined;
  if (/^https?:\/\//i.test(href)) return href;
  return `${SITE_URL}${href.startsWith("/") ? href : `/${href}`}`;
}

function getAnchorText(item) {
  return item.anchorText || item.label;
}

export default function ServiceBlogLinks({
  eyebrow = "Ic link akisi",
  title = "Bu konuya dair rehberler",
  description = "Ilgili blog yazilarindan detayli ipuclari ve guncel trendleri kesfedin.",
  links = [],
  relatedServices = [],
  primaryIntent,
  secondaryIntent,
  funnelStage,
}) {
  if (!links.length && !relatedServices.length) return null;

  const clusterItems = [...links, ...relatedServices].filter((item) => item?.href);
  const itemListSchema = clusterItems.length
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: title,
        description: primaryIntent || description,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: clusterItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "WebPage",
            "@id": toAbsoluteUrl(item.href),
            url: toAbsoluteUrl(item.href),
            name: getAnchorText(item),
            description: item.intent,
          },
        })),
      }
    : null;

  return (
    <nav aria-label={`${title} ic link kumesi`} className="mx-auto w-full max-w-6xl px-4 py-10">
      <JsonLd data={itemListSchema} />
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
            <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
            {eyebrow}
          </div>
          <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">{title}</h3>
          <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>

          {primaryIntent || secondaryIntent ? (
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
              {primaryIntent ? (
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-blue-800">
                  {primaryIntent}
                </span>
              ) : null}
              {secondaryIntent ? (
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                  {secondaryIntent}
                </span>
              ) : null}
              {funnelStage ? (
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-800">
                  {funnelStage}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className={`mt-8 grid gap-6 ${relatedServices.length ? "lg:grid-cols-[1.15fr_0.85fr]" : ""}`}>
          {links.length ? (
            <div className="rounded-[1.6rem] border border-slate-200 bg-slate-50/80 p-5">
              <div className="flex items-center gap-3 text-slate-900">
                <BookOpenText className="h-5 w-5 text-blue-700" aria-hidden="true" />
                <div className="text-lg font-black">Ilgili rehber icerikler</div>
              </div>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      prefetch={false}
                      className="group flex h-full items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:bg-blue-50/40"
                    >
                      <span>
                        <span className="block">{getAnchorText(link)}</span>
                        {link.intent ? (
                          <span className="mt-1 block text-xs font-medium leading-relaxed text-slate-500">
                            {link.intent}
                          </span>
                        ) : null}
                      </span>
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
                <div className="text-lg font-black">Ilgili hizmet halkasi</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Bu rehber ve hizmet kumesini destekleyen en yakin sayfalari burada topluyoruz.
              </p>
              <ul className="mt-5 grid gap-3">
                {relatedServices.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      prefetch={false}
                      className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      <span>
                        <span className="block">{getAnchorText(service)}</span>
                        {service.intent ? (
                          <span className="mt-1 block text-xs font-medium leading-relaxed text-white/55">
                            {service.intent}
                          </span>
                        ) : null}
                      </span>
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
    </nav>
  );
}

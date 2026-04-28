import Link from "next/link";
import { ArrowRight, Compass, Network } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");

function toAbsoluteUrl(href) {
  if (!href) return undefined;
  if (/^https?:\/\//i.test(href)) return href;
  return `${SITE_URL}${href.startsWith("/") ? href : `/${href}`}`;
}

export default function IntentBridge({
  eyebrow = "Intent haritası",
  title,
  description,
  primaryPage,
  supportPages = [],
  tone = "light",
}) {
  const isDark = tone === "dark";
  const clusterPages = [primaryPage, ...supportPages].filter((page) => page?.href);
  const itemListSchema = clusterPages.length
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: title || "Sahneva içerik kümesi",
        description,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: clusterPages.map((page, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "WebPage",
            "@id": toAbsoluteUrl(page.href),
            url: toAbsoluteUrl(page.href),
            name: page.label,
            description: page.intent,
          },
        })),
      }
    : null;
  const ariaLabel = title
    ? `${title} içerik kümesi bağlantıları`
    : "İçerik kümesi bağlantıları";

  return (
    <aside
      aria-label={ariaLabel}
      className={
        isDark
          ? "rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
          : "rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8"
      }
    >
      <JsonLd data={itemListSchema} />
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="flex items-start gap-3">
            <span
              className={
                isDark
                  ? "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white"
                  : "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700"
              }
            >
              <Compass className="h-5 w-5" />
            </span>
            <div>
              <p
                className={
                  isDark
                    ? "m-0 text-xs font-black uppercase tracking-[0.2em] text-blue-200"
                    : "m-0 text-xs font-black uppercase tracking-[0.2em] text-blue-700"
                }
              >
                {eyebrow}
              </p>
              <h2 className={isDark ? "mt-2 text-2xl font-black text-white" : "mt-2 text-2xl font-black text-slate-950"}>
                {title}
              </h2>
              <p className={isDark ? "mt-3 max-w-2xl text-sm leading-relaxed text-slate-300" : "mt-3 max-w-2xl text-sm leading-relaxed text-slate-600"}>
                {description}
              </p>
            </div>
          </div>

          {primaryPage ? (
            <div className={isDark ? "mt-5 rounded-2xl border border-white/10 bg-white/[0.05] p-5" : "mt-5 rounded-2xl border border-slate-200 bg-white p-5"}>
              <p className={isDark ? "m-0 text-xs font-black uppercase tracking-[0.18em] text-slate-300" : "m-0 text-xs font-black uppercase tracking-[0.18em] text-slate-500"}>
                Ana hedef sayfa
              </p>
              <Link
                href={primaryPage.href}
                prefetch={true}
                className={isDark ? "mt-2 inline-flex items-center gap-2 text-lg font-black text-white hover:text-blue-200" : "mt-2 inline-flex items-center gap-2 text-lg font-black text-slate-950 hover:text-blue-700"}
              >
                {primaryPage.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className={isDark ? "mt-2 text-sm text-slate-300" : "mt-2 text-sm text-slate-600"}>
                {primaryPage.intent}
              </p>
            </div>
          ) : null}
        </div>

        {supportPages.length ? (
          <div className={isDark ? "rounded-2xl border border-white/10 bg-black/10 p-5" : "rounded-2xl border border-slate-200 bg-white p-5"}>
            <div className="flex items-center gap-2">
              <span
                className={
                  isDark
                    ? "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white"
                    : "inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700"
                }
              >
                <Network className="h-4 w-4" />
              </span>
              <div>
                <p className={isDark ? "m-0 text-sm font-black text-white" : "m-0 text-sm font-black text-slate-950"}>
                  Destek sayfalar
                </p>
                <p className={isDark ? "m-0 mt-1 text-xs text-slate-400" : "m-0 mt-1 text-xs text-slate-500"}>
                  Aynı kümeye giren ama farklı niyeti karşılayan sayfalar
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {supportPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  prefetch={false}
                  className={
                    isDark
                      ? "block rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 hover:bg-white/[0.08]"
                      : "block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 hover:border-blue-200 hover:bg-blue-50/70"
                  }
                >
                  <span className={isDark ? "block text-sm font-bold text-white" : "block text-sm font-bold text-slate-950"}>
                    {page.label}
                  </span>
                  <span className={isDark ? "mt-1 block text-xs text-slate-400" : "mt-1 block text-xs text-slate-500"}>
                    {page.intent}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </aside>
  );
}

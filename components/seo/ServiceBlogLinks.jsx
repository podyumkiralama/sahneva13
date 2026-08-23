import Link from "next/link";
import { ArrowRight, BookOpenText, Network } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import EventWeatherWidget from "@/components/EventWeatherWidget";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const TENT_WEATHER_WHATSAPP = `https://wa.me/905453048671?text=${encodeURIComponent(
  "Merhaba, açık hava etkinliği için rüzgar, yağış ve zemin riskine göre güvenli çadır kurulum planı hakkında teklif almak istiyorum.",
)}&utm_source=weather_widget&utm_medium=cadir_page_cta`;

function toAbsoluteUrl(href) {
  if (!href) return undefined;
  if (/^https?:\/\//i.test(href)) return href;
  return `${SITE_URL}${href.startsWith("/") ? href : `/${href}`}`;
}

function getAnchorText(item) {
  return item.anchorText || item.label;
}

function isTentRentalCluster(clusterItems) {
  return clusterItems.some((item) =>
    item?.href?.includes("dome-cadir") || item?.href?.includes("cadir"),
  );
}

function TentRentalCompactAddons() {
  const regions = [
    {
      title: "İstanbul Avrupa Yakası",
      detail:
        "Şişli, Beşiktaş, Başakşehir, Beylikdüzü ve çevresinde fuar, lansman ve açık hava etkinlikleri için hızlı keşif ve kurulum planı.",
      meta: "Aynı gün / planlı kurulum",
    },
    {
      title: "İstanbul Anadolu Yakası",
      detail:
        "Kadıköy, Üsküdar, Ataşehir, Ümraniye, Maltepe, Tuzla ve Pendik hattında düğün, festival ve kurumsal çadır çözümleri.",
      meta: "İlçe bazlı lojistik",
    },
    {
      title: "Marmara ve Çevre İller",
      detail:
        "Kocaeli, Bursa, Tekirdağ, Yalova, Sakarya ve Ankara projelerinde nakliye, ekip ve kurulum takvimi ilk teklifte netleştirilir.",
      meta: "Şeffaf nakliye planı",
    },
  ];

  return (
    <>
      <section
        id="bolgesel-lojistik"
        className="[content-visibility:auto] [contain-intrinsic-size:auto_700px] bg-white px-4 py-12"
        aria-labelledby="cadir-bolgesel-lojistik-baslik"
      >
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-violet-50/60 p-6 shadow-sm md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-violet-700">
                Bölgesel kurulum gücü
              </p>
              <h2
                id="cadir-bolgesel-lojistik-baslik"
                className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-4xl"
              >
                İstanbul ve Marmara’da Hızlı Çadır Kurulumu
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Tarih, ölçü, zemin ve şehir bilgisi paylaşıldığında; nakliye,
                kurulum ekibi ve saha desteği baştan netleştirilir.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {regions.map((region) => (
                <article
                  key={region.title}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-black text-violet-700">
                    {region.meta}
                  </span>
                  <h3 className="mt-4 text-lg font-black text-slate-950">
                    {region.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {region.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="[content-visibility:auto] [contain-intrinsic-size:auto_760px]">
        <EventWeatherWidget
          defaultCity="istanbul"
          whatsappHref={TENT_WEATHER_WHATSAPP}
        />
      </div>
    </>
  );
}

const CLUSTER_COPY = {
  tr: {
    eyebrow: "İç link akışı",
    title: "Bu konuya dair rehberler",
    description: "İlgili blog yazılarından detaylı ipuçları ve güncel yaklaşımları keşfedin.",
    guidesTitle: "İlgili rehber içerikler",
    servicesTitle: "İlgili hizmet halkası",
    servicesDesc: "Bu rehber ve hizmet kümesini destekleyen en yakın sayfaları burada topluyoruz.",
    navAriaSuffix: "iç link kümesi",
  },
  en: {
    eyebrow: "Internal link flow",
    title: "Guides on this topic",
    description: "Explore detailed tips and up-to-date approaches from our related articles.",
    guidesTitle: "Related guide articles",
    servicesTitle: "Related service cluster",
    servicesDesc: "The closest pages supporting this guide and service cluster are collected here.",
    navAriaSuffix: "internal link cluster",
  },
};

export default function ServiceBlogLinks({
  locale = "tr",
  eyebrow,
  title,
  description,
  links = [],
  relatedServices = [],
  primaryIntent,
  secondaryIntent,
  funnelStage,
}) {
  if (!links.length && !relatedServices.length) return null;

  const copy = CLUSTER_COPY[locale] ?? CLUSTER_COPY.tr;
  const resolvedEyebrow = eyebrow ?? copy.eyebrow;
  const resolvedTitle = title ?? copy.title;
  const resolvedDescription = description ?? copy.description;

  const clusterItems = [...links, ...relatedServices].filter((item) => item?.href);
  // Bolgesel cadir bloklari yalnizca Turkce kopya iceriyor; baska bir locale
  // icin cevirisi yazilana kadar gosterilmiyor.
  const showTentRentalAddons = locale === "tr" && isTentRentalCluster(clusterItems);
  const itemListSchema = clusterItems.length
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: resolvedTitle,
        description: primaryIntent || resolvedDescription,
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
    <>
      {showTentRentalAddons ? <TentRentalCompactAddons /> : null}

      <nav aria-label={`${resolvedTitle} ${copy.navAriaSuffix}`} className="mx-auto w-full max-w-6xl px-4 py-10">
        <JsonLd data={itemListSchema} />
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
              <span className="h-2 w-2 rounded-full bg-violet-600" aria-hidden="true" />
              {resolvedEyebrow}
            </div>
            <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-900 md:text-3xl">{resolvedTitle}</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{resolvedDescription}</p>

            {primaryIntent || secondaryIntent ? (
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                {primaryIntent ? (
                  <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-violet-800">
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
                  <BookOpenText className="h-5 w-5 text-violet-700" aria-hidden="true" />
                  <div className="text-lg font-black">{copy.guidesTitle}</div>
                </div>
                <ul className="mt-5 grid gap-3 md:grid-cols-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        prefetch={false}
                        className="group flex h-full items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-900 transition hover:border-violet-300 hover:bg-violet-50/40"
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
                          className="mt-0.5 h-4 w-4 shrink-0 text-violet-700 transition group-hover:translate-x-0.5"
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
                  <Network className="h-5 w-5 text-violet-300" aria-hidden="true" />
                  <div className="text-lg font-black">{copy.servicesTitle}</div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {copy.servicesDesc}
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
                          className="h-4 w-4 shrink-0 text-violet-300 transition group-hover:translate-x-0.5"
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
    </>
  );
}

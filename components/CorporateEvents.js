import Image from "next/image";
import Link from "next/link";

const DEFAULT_CARDS = [
  {
    slug: "lansman",
    title: "Ürün Lansmanları",
    img: "/img/kurumsal/lansman.webp",
    alt: "Marka lansmanı için profesyonel sahne ve LED ekran prodüksiyonu",
    text: "Marka prestijinizi yükselten, temiz teknik akış ve güçlü görsel dil ile tasarlanan lansman çözümleri sunuyoruz.",
    badge: "Yüksek Prestij",
  },
  {
    slug: "konferans",
    title: "Kongre ve Zirve",
    img: "/img/kurumsal/konferans.webp",
    alt: "Kongre ve zirveler için teknik altyapı hizmetleri",
    text: "Ses, görüntü ve sahne yönetimini tek merkezden planlayarak kurumsal toplantılarınızda güvenli bir operasyon akışı sağlıyoruz.",
    badge: "Global Standart",
  },
  {
    slug: "bayi-toplantisi",
    title: "Bayi ve Kurumsal Etkinlik",
    img: "/img/kurumsal/bayi-toplantisi.webp",
    alt: "Kurumsal bayi toplantısı sahne ve ışık sistemleri",
    text: "Kurum kültürünü yansıtan sahne, ışık ve LED ekran kurulumlarıyla aidiyeti güçlendiren etkinlik atmosferleri kuruyoruz.",
    badge: "Tam Çözüm",
  },
];

const DEFAULT_ADVANTAGES = [
  "Operasyonel hız ve zamanında teslimat",
  "Premium ve bakımlı ekipman parkı",
  "Deneyimli teknik ekip ve saha koordinasyonu",
  "Sözleşmeli, faturalı ve izlenebilir süreç",
];

const WHATSAPP_CORPORATE_MESSAGE = encodeURIComponent(
  "Merhaba, kurumsal etkinlik çözümleri için Sahneva'dan teklif almak istiyorum.",
);

const FOCUS_RING_CLASS =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120]";

const DEFAULT_DICTIONARY = {
  sectionTitle: "Kurumsal Etkinlik Çözümleri",
  introText:
    "Etkinlik organizasyonu ve teknik prodüksiyon süreçlerinde tüm aşamaları tek merkezden yönetiyor, markanızı güçlü bir sahne deneyimiyle destekliyoruz.",
  highlightTitle: "Neden Sahneva",
  cardCtaLabel: "Teklif Al",
  cardCtaHref: "/iletisim",
  bannerTitle: "Etkinliğinizi Şansa Bırakmayın",
  bannerDescription:
    "Sahne, ışık, LED ekran ve teknik prodüksiyon süreçlerinizi profesyonel bir ekiple yönetin.",
  phoneCtaLabel: "Kurumsal Destek Hattı",
  phoneCtaHref: "tel:+905453048671",
  whatsappCtaLabel: "Hızlı Teklif Al",
  whatsappCtaHref: `https://wa.me/905453048671?text=${WHATSAPP_CORPORATE_MESSAGE}&utm_source=homepage&utm_medium=corporate_whatsapp`,
  supportStats: ["Resmi Sözleşmeli", "7/24 Teknik Destek", "Anahtar Teslim"],
};

function mergeDictionary(base, override = {}) {
  return { ...base, ...(override || {}) };
}

export default function CorporateEvents({
  cards = DEFAULT_CARDS,
  advantages = DEFAULT_ADVANTAGES,
  dictionary: dictionaryOverride,
  role,
  ariaLabel,
  ariaLabelledby,
  ariaDescribedby,
} = {}) {
  const dictionary = mergeDictionary(DEFAULT_DICTIONARY, dictionaryOverride);
  const computedHeadingId = ariaLabelledby ?? "corporate-events-heading";
  const introId = "corporate-events-intro";
  const computedDescribedBy = ariaDescribedby ?? introId;
  const supportStats = Array.isArray(dictionary.supportStats)
    ? dictionary.supportStats
    : DEFAULT_DICTIONARY.supportStats;

  return (
    <section
      className="relative overflow-hidden bg-[#0B1120] py-16 md:py-24 2xl:py-28"
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabel ? undefined : computedHeadingId}
      aria-describedby={computedDescribedBy}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px] mix-blend-screen" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2
            id={ariaLabel ? undefined : computedHeadingId}
            className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
          >
            <span className="gradient-text gradient-text--safe-xl">
              {dictionary.sectionTitle}
            </span>
          </h2>

          <p
            id={introId}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl"
          >
            {dictionary.introText}
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3 lg:gap-8 lg:mb-24">
          {cards.map((card) => (
            <article
              key={card.slug}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-90" />
                <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  {card.badge}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold text-white">{card.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {card.text}
                </p>
                <div className="border-t border-white/10 pt-4">
                  <Link
                    href={dictionary.cardCtaHref}
                    className={`inline-flex items-center gap-2 text-xs font-bold text-white transition-colors hover:text-blue-400 ${FOCUS_RING_CLASS}`}
                    aria-label={`${dictionary.cardCtaLabel} - ${card.title}`}
                  >
                    <span>{dictionary.cardCtaLabel}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mb-16" aria-labelledby="corporate-advantages-heading">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h3
              id="corporate-advantages-heading"
              className="text-2xl font-bold text-white md:text-3xl"
            >
              {dictionary.highlightTitle}
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, index) => {
              const hasDetails = item && typeof item === "object";
              const label = hasDetails ? item.label : item;
              const desc = hasDetails ? item.desc : null;
              const icon = hasDetails ? item.icon : null;
              const textColor = hasDetails ? item.textColor ?? "text-slate-950" : "";
              const descColor = hasDetails ? item.descColor ?? "text-slate-700" : "";
              const colorClasses = hasDetails
                ? `${item.bg ?? "bg-white"} ${item.border ?? "border-white/20"} ${textColor}`
                : "border-white/10 bg-white/5 text-slate-300";

              return (
                <div
                  key={hasDetails ? `${label ?? "advantage"}-${index}` : `${item}-${index}`}
                  className={`rounded-xl border p-5 text-sm ${colorClasses}`}
                >
                  {hasDetails ? (
                    <>
                      {icon ? (
                        <span
                          aria-hidden="true"
                          className="mb-3 inline-flex text-xl leading-none"
                        >
                          {icon}
                        </span>
                      ) : null}
                      <p className="font-bold leading-snug">{label}</p>
                      {desc ? (
                        <p className={`mt-2 text-xs leading-relaxed ${descColor}`}>
                          {desc}
                        </p>
                      ) : null}
                    </>
                  ) : (
                    item
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <div
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-900 via-indigo-900 to-[#0B1120] p-6 text-center text-white shadow-2xl md:p-10"
          role="region"
          aria-labelledby="corporate-events-banner-title"
          aria-describedby="corporate-events-banner-desc"
        >
          <div className="absolute left-0 top-0 h-full w-full overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute left-[-20%] top-[-50%] h-[80%] w-[80%] rounded-full bg-blue-500/20 blur-[120px]" />
            <div className="absolute bottom-[-50%] right-[-20%] h-[80%] w-[80%] rounded-full bg-purple-500/20 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <h3
              id="corporate-events-banner-title"
              className="mb-4 text-2xl font-bold leading-tight md:text-4xl"
            >
              {dictionary.bannerTitle}
            </h3>

            <p
              id="corporate-events-banner-desc"
              className="mb-8 text-sm leading-relaxed text-blue-100/90 md:text-lg"
            >
              {dictionary.bannerDescription}
            </p>

            <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={dictionary.phoneCtaHref}
                className={`inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-blue-950 transition-all hover:scale-105 hover:bg-blue-50 md:text-base ${FOCUS_RING_CLASS}`}
              >
                <span>{dictionary.phoneCtaLabel}</span>
              </a>

              <a
                href={dictionary.whatsappCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20 md:text-base ${FOCUS_RING_CLASS}`}
              >
                <span>{dictionary.whatsappCtaLabel}</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-blue-200/80 md:text-sm">
              {supportStats.map((label) => (
                <div key={label} className="flex items-center gap-1.5">
                  <div
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"
                    aria-hidden="true"
                  />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

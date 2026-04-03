// components/CorporateEvents.js

import Image from "next/image";
import Link from "next/link";

// —————————————————————————————————————————
// YAPILANDIRMA & VERİLER
// —————————————————————————————————————————

const DEFAULT_CARDS = [
  {
    slug: "lansman",
    title: "Ürün Lansmanları",
    img: "/img/kurumsal/lansman.webp",
    alt: "Marka lansmanı için profesyonel sahne ve LED ekran prodüksiyonu",
    text: "Marka prestijinizi zirveye taşıyan, hatasız teknik akış ve etkileyici görsel şovlarla kurgulanmış kusursuz lansmanlar.",
    icon: "🚀",
    badge: "Yüksek Prestij",
  },
  {
    slug: "konferans",
    title: "Kongre & Zirve",
    img: "/img/kurumsal/konferans.webp",
    alt: "Uluslararası kongre ve zirve teknik altyapı hizmetleri",
    text: "Global standartlarda ses netliği, kesintisiz görüntü aktarımı ve simultane altyapı ile mesajınız kitlelere ulaşsın.",
    icon: "🎤",
    badge: "Global Standart",
  },
  {
    slug: "bayi-toplantisi",
    title: "Bayi & Kurumsal Etkinlik",
    img: "/img/kurumsal/bayi-toplantisi.webp",
    alt: "Kurumsal bayi toplantısı sahne ve ışık sistemleri",
    text: "Kurum kültürünüzü yansıtan sahne tasarımları ve aidiyet duygusunu güçlendiren atmosferler yaratıyoruz.",
    icon: "🤝",
    badge: "Tam Çözüm",
  },
];

const DEFAULT_ADVANTAGES = [
  {
    icon: "⚡",
    label: "Operasyonel Hız",
    desc: "Planlanan saatte, eksiksiz teslimat garantisi.",
    colorClass:
      "text-blue-300 bg-blue-500/10 border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]",
  },
  {
    icon: "💎",
    label: "Premium Envanter",
    desc: "Sıfır hata payı için düzenli bakımı yapılan güncel ekipmanlar.",
    colorClass:
      "text-purple-300 bg-purple-500/10 border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
  },
  {
    icon: "👷",
    label: "Saha Deneyimi",
    desc: "Kriz anlarını yönetebilen, 10+ yıl deneyimli teknik kadro.",
    colorClass:
      "text-emerald-300 bg-emerald-500/10 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]",
  },
  {
    icon: "🛡️",
    label: "Kurumsal Güvence",
    desc: "Sözleşmeli hizmet, faturalı süreç ve teknik süpervizör desteği.",
    colorClass:
      "text-amber-300 bg-amber-500/10 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.15)]",
  },
];

const WHATSAPP_CORPORATE_MESSAGE = encodeURIComponent(
  "Merhaba, kurumsal etkinlik çözümleri için Sahneva'dan teklif almak istiyorum."
);

const FOCUS_RING_CLASS =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120]";

const DEFAULT_DICTIONARY = {
  sectionTitleSr: "Kurumsal etkinlik çözümleri ve hizmet detayları",
  headingPrefix: "İstanbul'da",
  headingHighlight: "Kurumsal Organizasyon Yapan Firmalar",
  headingSuffix: "Arasında Çözüm Ortağınız",
  introText:
    "Etkinlik organizasyonu ve teknik prodüksiyon süreçlerinde tüm aşamaları tek merkezden yönetiyor, markanızın prestijini global standartlarda sahneliyoruz.",
  highlightPill: "Neden Biz?",
  highlightTitlePrefix: "Kurumsal Süreçlerde",
  highlightTitleAccent: "Güvenilir Çözüm Ortağınız",
  advantagesAriaLabel: "Sahneva kurumsal hizmet avantajları",
  cardCtaLabel: "Projeyi İncele",
  cardCtaLabels: {
    lansman: "Lansman Çözümleri",
    konferans: "Teknik Altyapı",
    "bayi-toplantisi": "Toplantı Çözümleri",
  },
  cardCtaHref: "/iletisim",
  cardCtaAria: "{{title}} için kurumsal teklif al",
  cardBadgeLabel: "Kurumsal",

  // BANNER
  bannerTitlePrefix: "Etkinliğinizi",
  bannerTitleHighlight: "Şansa Bırakmayın",
  bannerTitleSuffix: "",
  bannerDescription:
    "Sahne, ışık, LED ekran ve teknik prodüksiyon süreçlerinizi tek merkezden, profesyonel bir ekiple yönetin. Risksiz, stressiz ve kusursuz bir organizasyon deneyimi.",

  phoneCtaLabel: "Kurumsal Destek Hattı",
  phoneCtaHref: "tel:+905453048671",
  phoneCtaAria: "Kurumsal destek hattını ara: +90 545 304 86 71",

  whatsappCtaLabel: "Hızlı Teklif Al",
  whatsappCtaHref: `https://wa.me/905453048671?text=${WHATSAPP_CORPORATE_MESSAGE}&utm_source=homepage&utm_medium=corporate_whatsapp`,
  whatsappCtaAria: "WhatsApp üzerinden kurumsal fiyat teklifi isteyin",
  whatsappSrHint: "(yeni pencerede açılır)",

  supportStats: ["Resmi Sözleşmeli", "7/24 Teknik Süpervizör", "Anahtar Teslim"],
};

const TITLE_TEMPLATE_TOKEN = /\{\{\s*title\s*\}\}/g;

function resolveTitleTemplate(template, title) {
  const source = template ?? DEFAULT_DICTIONARY.cardCtaAria;
  if (typeof source === "function") return source(title);
  if (typeof source === "string") return source.replace(TITLE_TEMPLATE_TOKEN, title);
  return title;
}

function mergeDictionary(base, override = {}) {
  const result = { ...base };
  for (const [key, value] of Object.entries(override || {})) {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      typeof base[key] === "object"
    ) {
      result[key] = mergeDictionary(base[key], value);
    } else if (value !== undefined) {
      result[key] = value;
    }
  }
  return result;
}

function CardImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  );
}

// —————————————————————————————————————————
// ANA BİLEŞEN
// —————————————————————————————————————————

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
  const cardCtaAriaTemplate = dictionary.cardCtaAria;

  const supportStats = Array.isArray(dictionary.supportStats)
    ? dictionary.supportStats
    : DEFAULT_DICTIONARY.supportStats;

  // Sabit ID’ler (stabil)
  const computedHeadingId = ariaLabelledby ?? "corporate-events-heading";
  const introId = "corporate-events-intro";
  const advantagesHeadingId = "corporate-events-advantages-heading";
  const bannerTitleId = "corporate-events-banner-title";
  const bannerDescId = "corporate-events-banner-desc";
  const phoneHintId = "corporate-events-phone-hint";
  const whatsappHintId = "corporate-events-whatsapp-hint";

  const phoneDescription = dictionary.phoneCtaAria?.trim();
  const whatsappDescription = [dictionary.whatsappCtaAria?.trim(), dictionary.whatsappSrHint?.trim()]
    .filter(Boolean)
    .join(" — ");

  const phoneAriaDescribedBy = phoneDescription ? phoneHintId : undefined;
  const whatsappAriaDescribedBy = whatsappDescription ? whatsappHintId : undefined;

  const computedDescribedBy = ariaDescribedby ?? introId;
  return (
    <section
      className="relative py-16 md:py-24 2xl:py-28 bg-[#0B1120] overflow-hidden"
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabel ? undefined : computedHeadingId}
      aria-describedby={computedDescribedBy}
    >
      {/* Arka Plan Efektleri */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* SEO & Giriş */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2
            id={ariaLabel ? undefined : computedHeadingId}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            {dictionary.headingPrefix}{" "}
            <span className="gradient-text gradient-text--safe-xl">
              {dictionary.headingHighlight}
            </span>{" "}
            {dictionary.headingSuffix}
          </h2>

          <p
            id={introId}
            className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            {dictionary.introText}
          </p>
        </div>

        {/* 1) Kartlar */}
        <div className="grid gap-6 lg:gap-8 md:grid-cols-3 mb-16 lg:mb-24">
          {cards.map((card, i) => {
            const cardCtaLabel =
              dictionary.cardCtaLabels?.[card.slug] ?? dictionary.cardCtaLabel;

            const cardCtaAria = resolveTitleTemplate(cardCtaAriaTemplate, card.title);
            const cardAccessibleLabel = cardCtaAria
              ? `${cardCtaLabel} — ${cardCtaAria}`
              : cardCtaLabel;

            return (
              <div key={card.slug} className="group flex flex-col h-full">
                <article
                  className="relative flex-1 flex flex-col bg-white/5 border border-white/10 rounded-3xl shadow-2xl backdrop-blur-sm transition-all duration-500 overflow-hidden group-hover:-translate-y-2 group-hover:border-white/20"
                  aria-labelledby={`corp-card-${i}-title`}
                >
                  {/* Görsel */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <CardImage src={card.img} alt={card.alt} />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-90" />

                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md text-white border border-white/20 shadow-lg">
                        {card.badge || dictionary.cardBadgeLabel}
                      </span>
                    </div>

                    {/* İkon */}
                    <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center text-xl shadow-lg">
                      {card.icon}
                    </div>
                  </div>

                  {/* İçerik */}
                  <div className="flex-1 p-6 flex flex-col">
                    <h3
                      id={`corp-card-${i}-title`}
                      className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
                    >
                      {card.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed text-sm mb-4 flex-1">
                      {card.text}
                    </p>

                    <div className="pt-4 border-t border-white/10 mt-auto">
                      <Link
                        href={dictionary.cardCtaHref}
                        className={`inline-flex items-center gap-2 font-bold text-xs text-white hover:text-blue-400 transition-colors group/link ${FOCUS_RING_CLASS}`}
                        aria-label={cardAccessibleLabel}
                      >
                        <span>{cardCtaLabel}</span>
                        <svg
                          className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* 2) Avantajlar */}
        <section className="mb-16" aria-labelledby={advantagesHeadingId}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-xs mb-1 block">
              {dictionary.highlightPill}
            </span>

            <h3 id={advantagesHeadingId} className="text-2xl md:text-3xl font-bold text-white">
              {dictionary.highlightTitlePrefix}{" "}
              <span className="gradient-text gradient-text--safe-xl">
                {dictionary.highlightTitleAccent}
              </span>
            </h3>
          </div>

          <div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            role="list"
            aria-label={dictionary.advantagesAriaLabel}
          >
            {advantages.map((item, i) => {
              const safeColorClass = item.colorClass || "";
              const safeBorderClass = safeColorClass
                .split(" ")
                .filter((c) => c.startsWith("border"))
                .join(" ");

              return (
                <div
                  key={`${item.label}-${i}`}
                  className={`group relative p-5 rounded-xl border transition-all duration-300 bg-white/5 hover:bg-white/10 ${safeBorderClass} border-white/5 hover:border-opacity-50`}
                  role="listitem"
                >
                  <div className="relative z-10">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-3 transition-all duration-300 border ${safeColorClass}`}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>

                    <h4 className="text-base font-bold text-white mb-1">{item.label}</h4>
                    <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3) CTA Banner */}
        <div
          className="relative rounded-[2rem] bg-gradient-to-br from-blue-900 via-indigo-900 to-[#0B1120] p-6 md:p-10 text-center text-white overflow-hidden shadow-2xl border border-white/10"
          role="region"
          aria-labelledby={bannerTitleId}
          aria-describedby={bannerDescId}
        >
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-blue-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] bg-purple-500/20 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 id={bannerTitleId} className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              {dictionary.bannerTitlePrefix}{" "}
              <span className="gradient-text gradient-text--safe-xl">
                {dictionary.bannerTitleHighlight}
              </span>{" "}
              {dictionary.bannerTitleSuffix}
            </h3>

            <p id={bannerDescId} className="text-blue-100/90 text-sm md:text-lg mb-8 leading-relaxed">
              {dictionary.bannerDescription}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
              <a
                href={dictionary.phoneCtaHref}
                className={`inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white text-blue-950 font-bold px-6 text-sm md:text-base transition-all hover:bg-blue-50 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] ${FOCUS_RING_CLASS}`}
                aria-describedby={phoneAriaDescribedBy}
              >
                <span className="text-lg" aria-hidden="true">📞</span>
                <span>{dictionary.phoneCtaLabel}</span>
                {phoneDescription && <span id={phoneHintId} className="sr-only">{phoneDescription}</span>}
              </a>

              <a
                href={dictionary.whatsappCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white font-bold px-6 text-sm md:text-base transition-all hover:bg-white/20 hover:scale-105 ${FOCUS_RING_CLASS}`}
                aria-describedby={whatsappAriaDescribedBy}
              >
                <span className="text-lg" aria-hidden="true">💬</span>
                <span>{dictionary.whatsappCtaLabel}</span>
                {whatsappDescription && <span id={whatsappHintId} className="sr-only">{whatsappDescription}</span>}
                <span className="sr-only">(yeni sekmede açılır)</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm font-medium text-blue-200/80">
              {supportStats.map((label, idx) => (
                <div key={`${label}-${idx}`} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" aria-hidden="true" />
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

import { FAQ_ITEMS } from "../lib/faqData";

const FAQ_WHATSAPP_MESSAGE = encodeURIComponent(
  "Merhaba, SSS bolumunden ulasiyorum. Etkinlik ve ekipman kiralama icin bilgi almak istiyorum.",
);

const FOCUS_RING_CLASS =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120]";

const DEFAULT_DICTIONARY = {
  sectionPill: "Merak Edilenler",
  sectionTitlePrefix: "Kiralama Sureci ve",
  sectionTitleHighlight: "Sikca Sorulanlar",
  sectionDesc:
    "Sahne, LED ekran, ses-isik sistemleri ve teknik operasyon surecleri hakkinda akliniza takilan tum sorulari yanitliyoruz.",
  supportTitle: "Cevabi bulamadiniz mi?",
  supportDesc:
    "Projeniz ozel bir cozum gerektiriyor olabilir. Uzman teknik ekibimizle gorusun.",
  supportPhoneLabel: "Bizi Arayin",
  supportWhatsappLabel: "WhatsApp Destek",
  supportMailLabel: "E-posta Gonder",
  contactPhone: "+90 545 304 86 71",
  contactPhoneHref: "tel:+905453048671",
  contactWhatsappHref: `https://wa.me/905453048671?text=${FAQ_WHATSAPP_MESSAGE}`,
  contactMail: "info@sahneva.com",
  contactMailHref: "mailto:info@sahneva.com",
  regionTitleSr: "Sikca sorulan sorular bolumu icerigi",
  whatsappActionText: "Hizli Mesaj Gonder",
  newTabHint: "yeni sekmede acilir",
  seeAllHref: "/sss",
  seeAllLabel: "Tum sorulari gor",
  seeAllAriaLabel: "Sik Sorulan Sorular sayfasindaki tum sorulari goruntule",
};

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

function FaqRow({ item }) {
  return (
    <details className="group overflow-hidden rounded-2xl border border-white/5 bg-white/5 transition-colors open:border-sky-400/50 open:bg-white/10">
      <summary
        className={`flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left ${FOCUS_RING_CLASS}`}
      >
        <span className="text-sm font-bold text-slate-200 md:text-base group-open:text-white">
          {item.question}
        </span>
        <span
          className="ml-4 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-transform group-open:rotate-180 group-open:border-sky-500 group-open:bg-sky-600 group-open:text-white"
          aria-hidden="true"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </summary>

      <div className="px-5 pb-5">
        <div className="border-t border-white/10 pt-4 text-sm leading-relaxed text-slate-200 md:text-base">
          {item.answer}
        </div>
      </div>
    </details>
  );
}

function SupportCard({ dictionary }) {
  return (
      <div className="w-full space-y-6 rounded-3xl border border-white/10 bg-[#0F1623] p-6 shadow-2xl md:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-purple-600 text-2xl shadow-lg">
        ?
      </div>

      <div>
        <h3 className="mb-2 text-xl font-bold text-white">{dictionary.supportTitle}</h3>
        <p className="text-sm leading-relaxed text-slate-300">{dictionary.supportDesc}</p>
      </div>

      <div className="space-y-3">
        <a
          href={dictionary.contactPhoneHref}
          className={`group flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-all hover:border-sky-500/30 hover:bg-white/10 ${FOCUS_RING_CLASS}`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 transition-colors group-hover:bg-sky-500 group-hover:text-white">
            Tel
          </span>
          <div className="min-w-0">
            <span className="block text-xs font-medium text-slate-400">
              {dictionary.supportPhoneLabel}
            </span>
            <span className="block break-words text-sm font-bold text-white group-hover:text-sky-300">
              {dictionary.contactPhone}
            </span>
          </div>
        </a>

        <a
          href={dictionary.contactWhatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-all hover:border-green-500/30 hover:bg-white/10 ${FOCUS_RING_CLASS}`}
          aria-label={`${dictionary.supportWhatsappLabel} - ${dictionary.newTabHint}`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-400 transition-colors group-hover:bg-green-500 group-hover:text-white">
            WA
          </span>
          <div className="min-w-0">
            <span className="block text-xs font-medium text-slate-400">
              {dictionary.supportWhatsappLabel}
            </span>
            <span className="block text-sm font-bold text-white group-hover:text-green-300">
              {dictionary.whatsappActionText}
            </span>
          </div>
        </a>

        <a
          href={dictionary.contactMailHref}
          className={`group flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-all hover:border-purple-500/30 hover:bg-white/10 ${FOCUS_RING_CLASS}`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 transition-colors group-hover:bg-purple-500 group-hover:text-white">
            @
          </span>
          <div className="min-w-0">
            <span className="block text-xs font-medium text-slate-400">
              {dictionary.supportMailLabel}
            </span>
            <span className="block break-words text-sm font-bold text-white group-hover:text-purple-300">
              {dictionary.contactMail}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default function Faq({
  items = FAQ_ITEMS,
  dictionary: dictionaryOverride,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaLabel,
  regionLabelId = "faq-section-title",
  descriptionId: ariaDescriptionId,
  role: roleOverride,
} = {}) {
  const dictionary = mergeDictionary(DEFAULT_DICTIONARY, dictionaryOverride);
  const headingId = ariaLabelledBy ?? regionLabelId;
  const descriptionId =
    ariaDescriptionId ??
    (!ariaLabelledBy && headingId ? `${headingId}-description` : undefined);
  const describedBy = ariaDescribedBy ?? descriptionId;

  return (
    <section
      className="relative bg-[#0B1120] py-16 md:py-24 2xl:py-28"
      {...(ariaLabel
        ? { "aria-label": ariaLabel }
        : headingId
          ? { "aria-labelledby": headingId }
          : {})}
      {...(describedBy ? { "aria-describedby": describedBy } : {})}
      role={roleOverride}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[140px] mix-blend-screen" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {!ariaLabelledBy && (
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-200 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden="true" />
                {dictionary.sectionPill}
              </span>
            </div>

            <h2
              id={headingId}
              className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
            >
              {dictionary.sectionTitlePrefix}{" "}
              <span className="gradient-text gradient-text--safe-xl">
                {dictionary.sectionTitleHighlight}
              </span>
            </h2>

            <p
              id={descriptionId}
              className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
            >
              {dictionary.sectionDesc}
            </p>
          </div>
        )}

        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
            <div className="min-w-0 flex-1 space-y-4" aria-label={dictionary.regionTitleSr}>
              {items.map((item) => (
                <FaqRow key={item.slug} item={item} />
              ))}

              <div className="pt-4">
                <a
                  href={dictionary.seeAllHref}
                  className={`inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-100 transition-colors hover:border-sky-300/70 hover:text-white ${FOCUS_RING_CLASS}`}
                  aria-label={dictionary.seeAllAriaLabel}
                >
                  <span aria-hidden="true">+</span>
                  {dictionary.seeAllLabel}
                </a>
              </div>
            </div>

            <div className="mt-6 w-full lg:mt-0 lg:max-w-sm xl:max-w-md">
              <SupportCard dictionary={dictionary} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

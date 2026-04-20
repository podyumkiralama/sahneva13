// components/HeroSection.js
import Link from "next/link";
import RichText from "@/components/RichText";

const DEFAULT_KEYWORDS = [
  { text: "Sahne Kiralama", color: "text-blue-200" },
  { text: "LED Ekran Kiralama", color: "text-purple-200" },
  { text: "Ses & I\u015f\u0131k Sistemleri", color: "text-cyan-200" },
  { text: "Podyum Kurulumu", color: "text-emerald-200" },
];

const DEFAULT_DICTIONARY = {
  keywords: DEFAULT_KEYWORDS,
  keywordsAriaLabel: "\u00d6ne \u00e7\u0131kan hizmetler",
  badge: "T\u00fcrkiye Geneli \u2022 H\u0131zl\u0131 Kurulum \u2022 Ayn\u0131 G\u00fcn Devreye Alma",
  titleLine1Prefix: "Sahneva ile",
  titleLine1: "Etkinlik Prod\u00fcksiyonu",
  titleLine2: "Tek Ekip, Tek \u00c7at\u0131, Tek \u00c7\u00f6z\u00fcm",
  description:
    "Sahneva ile <strong>etkinlik prod\u00fcksiyonu</strong>; sahne kiralama, LED ekran kiralama, ses-\u0131\u015f\u0131k sistemleri ve podyum kurulumunda tek ekip, tek \u00e7at\u0131 ve tek \u00e7\u00f6z\u00fcm anlay\u0131\u015f\u0131yla ilerler. <strong>500+ proje</strong> deneyimiyle T\u00fcrkiye genelinde anahtar teslim \u00e7\u00f6z\u00fcmler sunuyoruz.",
  ctaCall: "Hemen Ara",
  ctaCallAria: "Hemen ara - Sahneva'y\u0131 telefonla aray\u0131n",
  ctaWhatsapp: "WhatsApp Teklif",
  ctaWhatsappAria: "WhatsApp teklif - yeni sekmede a\u00e7\u0131l\u0131r",
  ctaQuote: "Hemen Teklif Al",
  ctaQuoteAria: "Hemen teklif al b\u00f6l\u00fcm\u00fcne git",
  quoteAnchor: "#teklif-al",
  whatsappText:
    "Merhaba%2C+web+sitenizden+ula%C5%9F%C4%B1yorum.+Detayl%C4%B1+teklif+almak+istiyorum.",
};

const CTA_BASE =
  "w-full sm:w-auto min-w-[180px] min-h-[44px] inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-ring";

function KeywordPills({ keywords, ariaLabel }) {
  return (
    <ul
      className="mx-auto mb-4 mt-4 flex max-w-4xl list-none flex-wrap justify-center gap-2 p-0"
      aria-label={ariaLabel}
    >
      {keywords.map((k) => (
        <li key={k.text}>
          <span
            className={`rounded-lg border border-white/10 bg-white/10 px-3 py-1 text-sm font-semibold md:text-base ${k.color}`}
          >
            {k.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function HeroSection({ dictionary: dictionaryOverride } = {}) {
  const d = { ...DEFAULT_DICTIONARY, ...dictionaryOverride };

  return (
    <section
      className="relative overflow-hidden bg-[#0B1120] py-20 text-white md:py-24 lg:py-28"
      aria-labelledby="hero-title"
      aria-describedby="hero-desc"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/img/hero-bg-mobile.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/img/hero-bg-desktop.webp"
            type="image/webp"
          />
          <img
            src="/img/hero-bg-desktop.webp"
            alt="Sahneva etkinlik prod\u00fcksiyonu i\u00e7in sahne, LED ekran, ses-\u0131\u015f\u0131k ve podyum kurulumu"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>

        <div className="absolute inset-0 bg-slate-950/52" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(145deg, rgba(30,58,138,0.18) 0%, rgba(88,28,135,0.06) 48%, rgba(2,6,23,0.72) 100%)",
          }}
        />

        <div className="grid-overlay opacity-20" />
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <p className="inline-flex rounded-full border border-white/15 bg-black/70 px-5 py-2 text-xs font-extrabold text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md md:text-sm">
              {d.badge}
            </p>

            <h1
              id="hero-title"
              className="mt-3 text-4xl font-black leading-[1.15] drop-shadow-[0_14px_40px_rgba(0,0,0,0.60)] md:mt-4 md:text-6xl lg:text-7xl"
            >
              {d.titleLine1Prefix}{" "}
              <span className="text-blue-200 [text-shadow:0_0_18px_rgba(59,130,246,0.22)]">
                {d.titleLine1}
              </span>
              <span className="block text-white">{d.titleLine2}</span>
            </h1>

            <KeywordPills keywords={d.keywords} ariaLabel={d.keywordsAriaLabel} />

            <p
              id="hero-desc"
              className="mx-auto max-w-3xl text-base leading-relaxed text-white/90 [text-shadow:0_10px_26px_rgba(0,0,0,0.45)] md:text-xl md:leading-loose"
            >
              <RichText text={d.description} />
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:+905453048671"
                className={`${CTA_BASE} bg-white text-slate-950 hover:bg-white/90`}
                aria-label={d.ctaCallAria}
              >
                {d.ctaCall}
              </a>

              <a
                href={`https://wa.me/905453048671?text=${d.whatsappText}&utm_source=homepage&utm_medium=hero_cta&utm_campaign=whatsapp`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`${CTA_BASE} bg-gradient-to-r from-green-500 to-emerald-600 text-white`}
                aria-label={d.ctaWhatsappAria}
              >
                {d.ctaWhatsapp}
              </a>

              <Link
                href={d.quoteAnchor}
                className={`${CTA_BASE} border border-white/20 bg-white/10 text-white hover:bg-white/15`}
                aria-label={d.ctaQuoteAria}
              >
                {d.ctaQuote}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-10 w-full bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  );
}

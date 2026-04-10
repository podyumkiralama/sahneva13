// components/HeroSection.js
import Image from "next/image";
import Link from "next/link";

const DEFAULT_KEYWORDS = [
  { text: "Sahne Kiralama", color: "text-blue-200" },
  { text: "LED Ekran Kiralama", color: "text-purple-200" },
  { text: "Ses & Işık Sistemleri", color: "text-cyan-200" },
  { text: "Podyum Kurulumu", color: "text-emerald-200" },
];

const DEFAULT_DICTIONARY = {
  keywords: DEFAULT_KEYWORDS,
  keywordsAriaLabel: "Öne çıkan hizmetler",
  badge: "Türkiye Geneli • Hızlı Kurulum • Aynı Gün Devreye Alma",
  titleLine1Prefix: "Sahneva ile",
  titleLine1: "Etkinlik Prodüksiyonu",
  titleLine2: "Tek Ekip, Tek Çatı, Tek Çözüm",
  description:
    "Sahne kiralama, LED ekran kiralama, ses-ışık sistemleri ve podyum kurulumunda <strong>500+ proje</strong> deneyimiyle Türkiye genelinde anahtar teslim çözümler sunuyoruz.",
  ctaCall: "Hemen Ara",
  ctaCallAria: "Hemen ara — Sahneva'yı telefonla arayın",
  ctaWhatsapp: "WhatsApp Teklif",
  ctaWhatsappAria: "WhatsApp teklif — yeni sekmede açılır",
  ctaQuote: "Hemen Teklif Al",
  ctaQuoteAria: "Hemen teklif al bölümüne git",
  quoteAnchor: "#teklif-al",
  whatsappText:
    "Merhaba%2C+web+sitenizden+ula%C5%9F%C4%B1yorum.+Detayl%C4%B1+teklif+almak+istiyorum.",
};

const CTA_BASE =
  "w-full sm:w-auto min-w-[180px] min-h-[44px] inline-flex items-center justify-center gap-2 font-extrabold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-ring";

function KeywordPills({ keywords, ariaLabel }) {
  return (
    <ul
      className="flex flex-wrap justify-center gap-2 mt-4 mb-4 max-w-4xl mx-auto list-none p-0"
      aria-label={ariaLabel}
    >
      {keywords.map((k) => (
        <li key={k.text}>
          <span
            className={`text-sm md:text-base font-semibold px-3 py-1 rounded-lg border border-white/10 bg-white/10 ${k.color}`}
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
      className="relative bg-[#0B1120] text-white overflow-hidden py-20 md:py-24 lg:py-28"
      aria-labelledby="hero-title"
      aria-describedby="hero-desc"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Mobile image */}
        <Image
          src="/img/hero-bg-mobile.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center sm:hidden"
          sizes="100vw"
          quality={80}
        />
        {/* Desktop image */}
        <Image
          src="/img/hero-bg-desktop.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center hidden sm:block"
          sizes="(max-width: 1280px) 100vw, 1280px"
          quality={70}
        />

        {/* Film (okunurluk) */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Mavi-mor vibe (daha az mor) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,58,138,0.28) 0%, rgba(88,28,135,0.10) 55%, rgba(2,6,23,0.78) 100%)",
          }}
        />

        {/* Grid overlay — globals.css ile uyumlu */}
        <div className="grid-overlay opacity-35" />

        {/* Glow blobs */}
        <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-blue-500/12 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-purple-500/8 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* ✅ Üst boşluk azaltıldı: py yerine pt/pb */}
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge: daha belirgin */}
            <div className="inline-flex items-center gap-3 bg-black/70 backdrop-blur-md rounded-full px-5 py-2 border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <span
                className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
                aria-hidden="true"
              />
              <span className="text-xs md:text-sm font-extrabold text-white">
                {d.badge}
              </span>
            </div>

            {/* Title */}
            <h1
              id="hero-title"
              className="mt-3 md:mt-4 text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] drop-shadow-[0_14px_40px_rgba(0,0,0,0.60)]"
            >
              {d.titleLine1Prefix}{" "}
              <span className="text-blue-200 [text-shadow:0_0_18px_rgba(59,130,246,0.22)]">
                {d.titleLine1}
              </span>
              <span className="block text-white">
                {d.titleLine2}
              </span>
            </h1>

            {/* Pills */}
            <KeywordPills keywords={d.keywords} ariaLabel={d.keywordsAriaLabel} />

            {/* Description */}
            <p
              id="hero-desc"
              className="text-base md:text-xl text-white/90 leading-relaxed md:leading-loose max-w-3xl mx-auto [text-shadow:0_10px_26px_rgba(0,0,0,0.45)]"
              dangerouslySetInnerHTML={{ __html: d.description }}
            />

            {/* CTAs */}
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href="tel:+905453048671"
                className={`${CTA_BASE} bg-white text-slate-950 hover:bg-white/90`}
                aria-label={d.ctaCallAria}
              >
                <span aria-hidden="true">📞</span>
                {d.ctaCall}
              </a>

              <a
                href={`https://wa.me/905453048671?text=${d.whatsappText}&utm_source=homepage&utm_medium=hero_cta&utm_campaign=whatsapp`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`${CTA_BASE} bg-gradient-to-r from-green-500 to-emerald-600 text-white`}
                aria-label={d.ctaWhatsappAria}
              >
                <span aria-hidden="true">💬</span>
                {d.ctaWhatsapp}
              </a>

              <Link
                href={d.quoteAnchor}
                className={`${CTA_BASE} bg-white/10 text-white border border-white/20 hover:bg-white/15`}
                aria-label={d.ctaQuoteAria}
              >
                <span aria-hidden="true">🎯</span>
                {d.ctaQuote}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="hidden lg:block absolute bottom-5 left-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <div className="animate-bounce motion-reduce:animate-none">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </div>
        </div>
      </div>

      {/* ✅ HeroBelow ile geçiş: daha az “beyaz band” hissi */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-slate-950 pointer-events-none" />
    </section>
  );
}

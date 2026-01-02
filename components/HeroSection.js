// components/HeroSection.js
import Image from "next/image";
import Link from "next/link";

const HERO_KEYWORDS = [
  { text: "Sahne Kiralama", color: "text-blue-200" },
  { text: "LED Ekran Kiralama", color: "text-purple-200" },
  { text: "Ses & Işık Sistemleri", color: "text-cyan-200" },
  { text: "Podyum Kurulumu", color: "text-emerald-200" },
];

const CTA_BASE =
  "w-full sm:w-auto min-w-[180px] min-h-[44px] inline-flex items-center justify-center gap-2 font-extrabold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-ring";

function KeywordPills() {
  return (
    <ul
      className="flex flex-wrap justify-center gap-2 mt-5 mb-5 max-w-4xl mx-auto list-none p-0"
      aria-label="Öne çıkan hizmetler"
    >
      {HERO_KEYWORDS.map((k) => (
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

export default function HeroSection() {
  return (
    <header
      className="relative bg-slate-950 text-white pt-14 lg:pt-16 overflow-hidden"
      aria-labelledby="hero-title"
      aria-describedby="hero-desc"
    >
      {/* background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/img/hero-bg.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* soft film */}
        <div className="absolute inset-0 bg-black/40" />

        {/* vibe gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,58,138,0.35) 0%, rgba(88,28,135,0.18) 55%, rgba(2,6,23,0.65) 100%)",
          }}
        />

        {/* grid overlay (faq vibe) */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* glow blobs */}
        <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-blue-500/14 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-purple-500/12 blur-3xl" />
      </div>

      {/* content (normal flow) */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-10 md:py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 border border-white/15">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-xs md:text-sm font-bold text-white/90">
                Türkiye Geneli • Hızlı Kurulum • Aynı Gün Devreye Alma
              </span>
            </div>

            {/* title */}
            <h1
              id="hero-title"
              className="mt-5 text-4xl md:text-6xl lg:text-7xl font-black leading-tight drop-shadow-[0_12px_35px_rgba(0,0,0,0.55)]"
            >
              Sahneva ile{" "}
              <span className="text-blue-200">Etkinlik Prodüksiyonu</span>
              <span className="block text-white">
                Tek Ekip, Tek Çatı, Tek Çözüm
              </span>
            </h1>

            {/* keywords */}
            <KeywordPills />

            {/* description */}
            <p
              id="hero-desc"
              className="text-base md:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto"
            >
              Sahne kiralama, LED ekran kiralama, ses-ışık sistemleri ve podyum
              kurulumunda <strong className="text-white">500+ proje</strong>{" "}
              deneyimiyle Türkiye genelinde anahtar teslim çözümler sunuyoruz.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href="tel:+905453048671"
                className={`${CTA_BASE} bg-white text-slate-950 hover:bg-white/90`}
                aria-label="Hemen ara — Sahneva'yı telefonla arayın"
              >
                <span aria-hidden="true">📞</span>
                Hemen Ara
              </a>

              <a
                href="https://wa.me/905453048671?text=Merhaba%2C+web+sitenizden+ula%C5%9F%C4%B1yorum.+Detayl%C4%B1+teklif+almak+istiyorum.&utm_source=homepage&utm_medium=hero_cta&utm_campaign=whatsapp"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`${CTA_BASE} bg-gradient-to-r from-green-500 to-emerald-600 text-white`}
                aria-label="WhatsApp teklif — yeni sekmede açılır"
              >
                <span aria-hidden="true">💬</span>
                WhatsApp Teklif
              </a>

              <Link
                href="#teklif-al"
                className={`${CTA_BASE} bg-white/10 text-white border border-white/20 hover:bg-white/15`}
                aria-label="Hemen teklif al bölümüne git"
              >
                <span aria-hidden="true">🎯</span>
                Hemen Teklif Al
              </Link>
            </div>

            {/* trust row */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "⭐", value: "4.8/5", label: "Memnuniyet" },
                { icon: "🏆", value: "500+", label: "Proje" },
                { icon: "🚚", value: "Türkiye", label: "Geneli" },
                { icon: "⚡", value: "2 Saat", label: "Teklif" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/12 px-4 py-4 text-center"
                >
                  <div className="text-2xl mb-1" aria-hidden="true">
                    {s.icon}
                  </div>
                  <div className="text-xl font-black">{s.value}</div>
                  <div className="text-sm text-white/70 font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="hidden lg:block absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none" aria-hidden="true">
        <div className="animate-bounce motion-reduce:animate-none">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="relative z-10 h-12 bg-gradient-to-b from-transparent to-white" />
    </header>
  );
}

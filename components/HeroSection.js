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
  "w-full sm:w-auto min-w-[190px] min-h-[50px] inline-flex items-center justify-center gap-3 font-extrabold px-10 py-5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 focus-ring";

function KeywordPills() {
  return (
    /* mt-8 mb-8 ile pill'lerin etrafını açtık */
    <ul
      className="flex flex-wrap justify-center gap-3 mt-8 mb-10 max-w-4xl mx-auto list-none p-0"
      aria-label="Öne çıkan hizmetler"
    >
      {HERO_KEYWORDS.map((k) => (
        <li key={k.text}>
          <span
            className={`text-sm md:text-base font-semibold px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm ${k.color}`}
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
    <header className="relative bg-[#0B1120] text-white overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32">
      {/* Background Section (Aynı Kalıyor) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/img/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="grid-overlay opacity-30" />
      </div>

      {/* Content Area */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-lg rounded-full px-6 py-2.5 border border-white/10 shadow-2xl">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs md:text-sm font-bold tracking-wide uppercase">
              Türkiye Geneli • Hızlı Kurulum • Kesintisiz Destek
            </span>
          </div>

          {/* Title - mt-8 ile yukarıdan ayırdık */}
          <h1
            id="hero-title"
            className="mt-8 md:mt-12 text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight drop-shadow-2xl"
          >
            Sahneva ile <br />
            <span className="text-blue-300">Etkinlik Prodüksiyonu</span>
          </h1>

          {/* Pills Component */}
          <KeywordPills />

          {/* Description - leading-relaxed ve max-width ile okunurluğu artırdık */}
          <p
            id="hero-desc"
            className="text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto px-4"
          >
            Sahne, LED ekran ve ses sistemlerinde <strong className="text-white">500+ proje</strong> tecrübesiyle çözüm ortağınızız.
          </p>

          {/* CTAs - mt-12 veya mt-16 ile en alta ittik */}
          <div className="mt-12 md:mt-20 flex flex-col sm:flex-row justify-center items-center gap-5">
            <a
              href="tel:+905453048671"
              className={`${CTA_BASE} bg-white text-slate-950 hover:bg-slate-100`}
            >
              <span className="text-xl">📞</span> Hemen Ara
            </a>

            <a
              href="https://wa.me/905453048671"
              className={`${CTA_BASE} bg-emerald-600 text-white hover:bg-emerald-500`}
            >
              <span className="text-xl">💬</span> WhatsApp Teklif
            </a>

            <Link
              href="#teklif-al"
              className={`${CTA_BASE} bg-white/5 text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm`}
            >
              <span className="text-xl">🎯</span> Teklif Formu
            </Link>
          </div>
        </div>
      </div>

      {/* Alt Gradyan Geçişi */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0B1120] to-transparent pointer-events-none" />
    </header>
  );
}

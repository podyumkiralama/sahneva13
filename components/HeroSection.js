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
    <ul className="flex flex-wrap justify-center gap-2 mt-6 mb-6 max-w-4xl mx-auto list-none p-0">
      {HERO_KEYWORDS.map((k) => (
        <li key={k.text}>
          <span className={`text-sm md:text-base font-semibold px-3 py-1 rounded-lg border border-white/10 bg-white/10 ${k.color}`}>
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
      /* min-h-screen: Ekranın tamamını kaplar. flex-col: İçeriği dikey sıralar */
      className="relative bg-[#0B1120] text-white overflow-hidden min-h-screen flex flex-col"
    >
      {/* Background (Aynı Kalıyor) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/img/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="grid-overlay opacity-35" />
      </div>

      {/* Content Area - flex-1 sayesinde tüm boşluğu doldurur */}
      <div className="relative z-10 flex-1 flex flex-col pt-24 pb-12">
        <div className="container mx-auto px-4 flex-1 flex flex-col">
          
          {/* Üst Kısım: Başlık ve Açıklama (Merkezde durması için) */}
          <div className="max-w-5xl mx-auto text-center mt-auto mb-auto">
            {/* Orijinal Badge */}
            <div className="inline-flex items-center gap-3 bg-black/70 backdrop-blur-md rounded-full px-5 py-2 border border-white/15">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-extrabold text-white">
                Türkiye Geneli • Hızlı Kurulum • Aynı Gün Devreye Alma
              </span>
            </div>

            {/* Orijinal Başlık */}
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black leading-tight drop-shadow-2xl">
              Sahneva ile{" "}
              <span className="text-blue-200">Etkinlik Prodüksiyonu</span>
              <span className="block text-white">Tek Ekip, Tek Çatı, Tek Çözüm</span>
            </h1>

            <KeywordPills />

            {/* Orijinal Açıklama */}
            <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Sahne kiralama, LED ekran kiralama, ses-ışık sistemleri ve podyum
              kurulumunda <strong className="text-white">500+ proje</strong>{" "}
              deneyimiyle Türkiye genelinde anahtar teslim çözümler sunuyoruz.
            </p>
          </div>

          {/* Alt Kısım: Butonlar (mt-auto ile en aşağıya itildi) */}
          <div className="mt-auto flex flex-col sm:flex-row justify-center items-center gap-3">
            <a href="tel:+905453048671" className={`${CTA_BASE} bg-white text-slate-950`}>
              <span aria-hidden="true">📞</span> Hemen Ara
            </a>

            <a href="https://wa.me/905453048671" className={`${CTA_BASE} bg-gradient-to-r from-green-500 to-emerald-600 text-white`}>
              <span aria-hidden="true">💬</span> WhatsApp Teklif
            </a>

            <Link href="#teklif-al" className={`${CTA_BASE} bg-white/10 text-white border border-white/20`}>
              <span aria-hidden="true">🎯</span> Hemen Teklif Al
            </Link>
          </div>
          
        </div>
      </div>

      {/* Alt Gradyan */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-slate-950 pointer-events-none" />
    </header>
  );
}

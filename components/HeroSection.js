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
  "w-full sm:w-auto min-w-[180px] min-h-[48px] inline-flex items-center justify-center gap-2 font-extrabold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1";

export default function HeroSection() {
  return (
    <header
      /* min-h-screen yerine min-h-[85vh] yaparak alt komponenti yukarı çektik */
      className="relative bg-[#0B1120] text-white overflow-hidden min-h-[85vh] flex flex-col justify-center pt-24 pb-12"
    >
      {/* Background - Katmanlar arası z-index sabitlendi */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/img/hero-bg.webp"
          alt="Sahneva Sahne ve Ses Sistemleri"
          fill
          priority
          unoptimized 
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="grid-overlay opacity-25" />
      </div>

      {/* Ana İçerik */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur-md rounded-full px-5 py-2 border border-white/10 mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs md:text-sm font-bold text-white">
              Türkiye Geneli • Hızlı Kurulum • Aynı Gün Devreye Alma
            </span>
          </div>

          {/* Başlık - Kelime vurguları geri geldi */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight drop-shadow-2xl">
            Sahneva ile <span className="text-blue-200">Etkinlik Prodüksiyonu</span>
            <span className="block text-white mt-2">Tek Ekip, Tek Çatı, Tek Çözüm</span>
          </h1>

          {/* Hizmet Pills - mt-8 ile boşluk verildi */}
          <ul className="flex flex-wrap justify-center gap-3 mt-8 mb-8">
            {HERO_KEYWORDS.map((k) => (
              <li key={k.text}>
                <span className={`text-sm md:text-base font-semibold px-4 py-1.5 rounded-xl border border-white/15 bg-white/5 ${k.color}`}>
                  {k.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Açıklama */}
          <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-10">
            Sahne kiralama, LED ekran kiralama, ses-ışık sistemleri ve podyum
            kurulumunda <strong className="text-white">500+ proje</strong> deneyimiyle profesyonel çözümler sunuyoruz.
          </p>

          {/* Butonlar - Windows araç çubuğunun biraz üstünde duracak şekilde mb-4 eklendi */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
            <a href="tel:+905453048671" className={`${CTA_BASE} bg-white text-slate-950`}>
              <span className="text-xl">📞</span> Hemen Ara
            </a>
            <a href="https://wa.me/905453048671" className={`${CTA_BASE} bg-emerald-600 text-white`}>
              <span className="text-xl">💬</span> WhatsApp Teklif
            </a>
            <Link href="#teklif-al" className={`${CTA_BASE} bg-white/10 text-white border border-white/20`}>
              <span className="text-xl">🎯</span> Hemen Teklif Al
            </Link>
          </div>

          {/* Mouse İkonu - Alanı daraltmak için mt-4 yapıldı */}
          <div className="hidden lg:flex justify-center mt-4" aria-hidden="true">
            <div className="animate-bounce w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/50 rounded-full mt-1.5" />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

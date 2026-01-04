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

export default function HeroSection() {
  return (
    <header
      /* min-h-screen yerine içindeki içeriğe göre uzayan ama 
         en az bir ekran boyu yer kaplayan güvenli yapı */
      className="relative bg-[#0B1120] text-white overflow-hidden flex flex-col pt-20 pb-12 md:pt-28 md:pb-24"
      aria-labelledby="hero-title"
    >
      {/* 1. Arka Plan: Diğer bölümlere taşmaması için inset-0 kullanıldı */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/img/hero-bg.webp"
          alt="Sahneva Etkinlik Prodüksiyon"
          fill
          priority
          unoptimized 
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-[#0B1120]/60" />
        <div className="grid-overlay opacity-20" />
      </div>

      {/* 2. İçerik Alanı: Googlebot'un her şeyi görmesi için merkezi hizalama */}
      <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-md rounded-full px-5 py-2 border border-white/10 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs md:text-sm font-bold">
              Türkiye Geneli • Hızlı Kurulum • Aynı Gün Devreye Alma
            </span>
          </div>

          {/* Başlık */}
          <h1 id="hero-title" className="text-4xl md:text-7xl font-black leading-tight">
            Sahneva ile <span className="text-blue-200">Etkinlik Prodüksiyonu</span>
            <span className="block text-white">Tek Ekip, Tek Çatı, Tek Çözüm</span>
          </h1>

          {/* Hizmet Pills */}
          <ul className="flex flex-wrap justify-center gap-2 my-8">
            {HERO_KEYWORDS.map((k) => (
              <li key={k.text}>
                <span className={`text-sm md:text-base font-semibold px-3 py-1 rounded-lg border border-white/10 bg-white/5 ${k.color}`}>
                  {k.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Açıklama */}
          <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Sahne, LED ekran ve ses sistemlerinde <strong className="text-white">500+ proje</strong> deneyimiyle anahtar teslim çözümler sunuyoruz.
          </p>

          {/* Butonlar: "Boyama" yapmaması için alt boşlukla ayrıldı */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:+905453048671" className={`${CTA_BASE} bg-white text-slate-950`}>
              📞 Hemen Ara
            </a>
            <a href="https://wa.me/905453048671" className={`${CTA_BASE} bg-emerald-600 text-white`}>
              💬 WhatsApp Teklif
            </a>
            <Link href="#teklif-al" className={`${CTA_BASE} bg-white/10 text-white border border-white/20`}>
              🎯 Hemen Teklif Al
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Mouse İkonu (Sadece masaüstü) */}
      <div className="hidden lg:flex justify-center mt-12 relative z-10">
        <div className="animate-bounce w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </header>
  );
}

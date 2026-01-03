// components/HeroSection.js
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <header className="relative bg-[#0B1120] text-white min-h-screen flex flex-col justify-between overflow-hidden">
      
      {/* Background Section - unoptimized ekleyerek Google'ın hızlı görmesini sağladık */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/img/hero-bg.webp"
          alt="Sahneva Sahne ve Ses Sistemleri"
          fill
          priority
          unoptimized 
          className="object-cover object-center"
        />
        {/* Görsel yüklenene kadar veya yüklenmezse gözükecek hafif siyah film */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* İçerik: Üst/Orta Kısım */}
      <div className="relative z-10 pt-32 container mx-auto px-4 text-center">
         <div className="max-w-5xl mx-auto">
            {/* Orijinal içeriklerin */}
            <h1 className="text-4xl md:text-7xl font-black leading-tight drop-shadow-xl">
              Sahneva ile <span className="text-blue-200">Etkinlik Prodüksiyonu</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Sahne kiralama ve LED ekran kurulumunda profesyonel çözümler.
            </p>
         </div>
      </div>

      {/* İçerik: Alt Kısım (Butonlar Tam Aşağıda) */}
      <div className="relative z-10 pb-16 container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="tel:+905453048671" className="bg-white text-black px-8 py-4 rounded-2xl font-bold w-full sm:w-auto text-center">
            Hemen Ara
          </a>
          <a href="https://wa.me/905453048671" className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold w-full sm:w-auto text-center">
            WhatsApp
          </a>
        </div>
      </div>

    </header>
  );
}

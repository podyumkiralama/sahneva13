import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <header className="relative bg-[#0B1120] w-full overflow-hidden">
      {/* Arka Plan Katmanı */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0B1120]" />
        <Image
          src="/img/hero-bg.webp"
          alt="Sahneva Etkinlik Prodüksiyon"
          fill
          priority
          unoptimized
          className="object-cover opacity-30"
        />
      </div>

      {/* İçerik Katmanı - Botların görmesi için sabit padding */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
            Sahneva ile <span className="text-blue-400">Etkinlik Prodüksiyonu</span>
            <span className="block mt-2">Tek Ekip, Tek Çatı, Tek Çözüm</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
             Profesyonel sahne, LED ekran ve ses sistemleri kiralama çözümleri.
          </p>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
            <a href="tel:+905453048671" className="min-w-[180px] bg-white text-black font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-2 transition-transform hover:-translate-y-1">
              📞 Hemen Ara
            </a>
            <a href="https://wa.me/905453048671" className="min-w-[180px] bg-emerald-600 text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-2 transition-transform hover:-translate-y-1">
              💬 WhatsApp
            </a>
            <Link href="#teklif-al" className="min-w-[180px] bg-white/10 text-white border border-white/20 font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-2 transition-transform hover:-translate-y-1">
              🎯 Teklif Al
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";

export default function LedEkranKiralamaFiyatlariLayout({ children }) {
  return (
    <>
      <section
        className="bg-slate-950 px-4 pt-24 pb-8 text-white"
        aria-labelledby="led-ekran-kiralama-ana-hizmet-linki"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur md:flex md:items-center md:justify-between md:gap-8 md:p-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">
                Fiyat sayfası yönlendirmesi
              </p>
              <h2
                id="led-ekran-kiralama-ana-hizmet-linki"
                className="mt-2 text-2xl font-black leading-tight md:text-3xl"
              >
                Genel hizmet kapsamı için ana LED ekran kiralama sayfası
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/72 md:text-base">
                Bu sayfa m² fiyatı, 2026 başlangıç bedelleri ve P1.9 fiyat farkı için hazırlanmıştır. Indoor, outdoor, LED wall, kurulum, teknik ekip ve görüntü kontrol sürecini detaylı görmek için ana hizmet sayfasına geçebilirsiniz.
              </p>
            </div>
            <Link
              href="/led-ekran-kiralama"
              className="mt-5 inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-blue-100 md:mt-0"
            >
              LED ekran kiralama
            </Link>
          </div>
        </div>
      </section>
      {children}
    </>
  );
}

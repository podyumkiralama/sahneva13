import Link from "next/link";

export default function LedScreenRentalLayout({ children }) {
  return (
    <>
      <section
        aria-label="LED ekran fiyat ve kurulum yönlendirmesi"
        className="border-b border-slate-800 bg-slate-950 px-4 py-3 text-white"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="leading-6 text-slate-200">
            LED ekran kiralama hizmeti; indoor/outdoor panel seçimi, LED wall kurulumu,
            teknik reji ve operatör desteğiyle planlanır.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/led-ekran-kiralama-fiyatlari"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-cyan-300 px-4 py-2 font-black text-slate-950 transition hover:bg-cyan-200"
            >
              LED ekran fiyatlarını gör
            </Link>
            <Link
              href="/led-ekran-hesaplama"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/20 px-4 py-2 font-black text-white transition hover:bg-white/10"
            >
              m² hesapla
            </Link>
          </div>
        </div>
      </section>
      {children}
      <section
        aria-labelledby="led-kurulum-operasyonu-baslik"
        className="bg-white px-4 py-14 text-slate-950"
      >
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
            Hizmet niyeti
          </p>
          <h2
            id="led-kurulum-operasyonu-baslik"
            className="mt-3 text-3xl font-black tracking-tight md:text-4xl"
          >
            LED ekran kiralama ve kurulum operasyonu
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700 md:text-lg">
            Sahneva LED ekran kiralama projelerinde keşif, ekran ölçüsü, piksel aralığı,
            indoor/outdoor panel seçimi, truss veya ground stack taşıyıcı planı, kurulum,
            test, NovaStar görüntü işlemcisi, teknik reji, operatör desteği ve söküm akışını
            tek operasyon altında yönetir. Detaylı başlangıç m² bedelleri ve fiyat kalemleri
            için ayrı hazırlanan fiyat sayfası kullanılmalıdır.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/led-ekran-kiralama-fiyatlari"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-700 px-5 py-3 font-black text-white transition hover:bg-blue-800"
            >
              LED ekran kiralama fiyatları
            </Link>
            <Link
              href="/ses-isik-sistemleri"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 font-black text-slate-900 transition hover:border-blue-300 hover:text-blue-700"
            >
              Ses ve ışık entegrasyonu
            </Link>
            <Link
              href="/truss-kiralama"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 font-black text-slate-900 transition hover:border-blue-300 hover:text-blue-700"
            >
              Truss ve rigging planı
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

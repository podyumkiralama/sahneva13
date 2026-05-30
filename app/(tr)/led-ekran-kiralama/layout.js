import Link from "next/link";

export default function LedEkranKiralamaLayout({ children }) {
  return (
    <>
      {children}
      <section
        className="bg-white py-16 md:py-20"
        aria-labelledby="led-ekran-kiralama-hizmet-odagi"
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-blue-700">
                Ana hizmet sayfası
              </p>
              <h2
                id="led-ekran-kiralama-hizmet-odagi"
                className="text-3xl font-black leading-tight text-slate-950 md:text-5xl"
              >
                LED ekran kiralama hizmeti; kurulum, teknik ekip ve görüntü kontrolüyle birlikte planlanır.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">
                Sahneva, indoor LED ekran, outdoor LED ekran, LED wall ve video wall kurulumlarını etkinlik tipine göre projelendirir. Konser, festival, fuar, lansman, gala, konferans ve kurumsal organizasyonlarda ekran ölçüsü, izleme mesafesi, piksel aralığı, taşıyıcı sistem, reji ve teknik ekip ihtiyacı aynı plan içinde değerlendirilir.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">
                Bu sayfa genel <strong>LED ekran kiralama</strong> hizmetinin ana sayfasıdır. Sadece bütçe ve m² hesabı arıyorsanız <Link href="/led-ekran-kiralama-fiyatlari" className="font-black text-blue-700 underline underline-offset-4 hover:text-blue-900">güncel m² fiyatları</Link> sayfasından başlangıç bedellerini inceleyebilirsiniz.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                ["Indoor LED ekran kiralama", "P1.9, P2.5 ve P2.9 seçenekleriyle yakın izleme, lansman, fuar ve konferans kurulumları."],
                ["Outdoor LED ekran kiralama", "P3.9 dış mekan LED ekranlarla konser, festival, belediye etkinliği ve açık hava organizasyonları."],
                ["LED wall ve video wall", "Modüler ekran kurulumu, görüntü kontrolü, NovaStar processor ve teknik reji desteği."],
              ].map(([title, detail]) => (
                <article key={title} className="rounded-2xl border border-white bg-white p-5 shadow-sm">
                  <h3 className="text-xl font-black text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function KurumsalOrganizasyonLayout({ children }) {
  return (
    <>
      {children}
      <section
        className="relative isolate overflow-hidden bg-[#0B1120] py-14 text-white md:py-20"
        aria-labelledby="kurumsal-etkinlik-hizmetleri-odagi"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:84px_84px]" />
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-300">
              Organizasyon hizmetleri
            </p>
            <h2
              id="kurumsal-etkinlik-hizmetleri-odagi"
              className="mt-3 text-3xl font-black leading-tight tracking-normal text-white md:text-5xl"
            >
              Marka etkinliklerinde planlama, teknik prodüksiyon ve saha yönetimi aynı akışta ilerler.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72 md:text-lg">
              Sahneva olarak organizasyon hizmetleri kapsamında lansman, konferans, gala, bayi toplantısı ve marka etkinliklerini teknik prodüksiyon bakışıyla planlamaya devam ediyoruz. Farklı ölçeklerdeki kurumsal organizasyonları sahne, LED ekran, ses, ışık, truss, reji ve saha koordinasyonuyla tek ekip üzerinden yönetiyoruz.
            </p>
            <p className="mt-4 text-base leading-8 text-white/68 md:text-lg">
              Etkinlik hedefi, davetli profili, salon akışı, protokol düzeni, içerik sırası ve teknik riskler ilk brief aşamasında birlikte değerlendirilir. Böylece marka etkinliği yalnızca ekipman kurulumu olarak değil; prova, operasyon, yedek plan ve kapanış süreciyle birlikte yönetilebilir bir prodüksiyon haline gelir.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["Planlama", "Brief, hedef, timeline, görev dağılımı ve run-of-show akışı netleştirilir."],
              ["Teknik prodüksiyon", "Sahne, LED ekran, ses, ışık, truss, reji ve içerik akışı birlikte planlanır."],
              ["Saha operasyonu", "Kurulum, prova, etkinlik günü yönetimi, söküm ve teslim süreci tek muhatapla ilerler."],
            ].map(([title, detail]) => (
              <article key={title} className="border border-white/10 bg-white/[0.055] p-5 shadow-[0_20px_70px_rgba(15,23,42,.22)] backdrop-blur">
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/68">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

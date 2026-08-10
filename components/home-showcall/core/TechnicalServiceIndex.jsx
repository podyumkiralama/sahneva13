import Link from "next/link";

const SERVICES = [
  {
    number: "01",
    title: "Sahne",
    scope: "Modüler platform / çatı / truss / güvenli kurulum",
    href: "/sahne-kiralama",
  },
  {
    number: "02",
    title: "LED ekran",
    scope: "İç ve dış mekân / görüntü yönetimi / teknik reji",
    href: "/led-ekran-kiralama",
  },
  {
    number: "03",
    title: "Ses / Işık",
    scope: "Line array / ışık tasarımı / canlı operasyon",
    href: "/ses-isik-sistemleri",
  },
  {
    number: "04",
    title: "Podyum",
    scope: "Protokol / konferans / defile / özel ölçü platform",
    href: "/podyum-kiralama",
  },
  {
    number: "05",
    title: "Çadır",
    scope: "Dome / pagoda / geçici etkinlik yapıları",
    href: "/cadir-kiralama",
  },
  {
    number: "06",
    title: "Masa / Sandalye",
    scope: "Kurumsal yerleşim / protokol / banket / saha teslimi",
    href: "/masa-sandalye-kiralama",
  },
];

export default function TechnicalServiceIndex() {
  return (
    <section
      id="hizmetler"
      className="scroll-mt-20 bg-[#eee9dd] py-16 text-[#10100d] sm:py-20 lg:py-28"
      aria-labelledby="technical-service-index-title"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="grid gap-9 border-t border-black/35 pt-5 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#c84012]">
              Operasyon / Hizmet indeksi
            </p>
            <h2
              id="technical-service-index-title"
              className="mt-5 max-w-[9ch] font-display text-4xl font-extrabold uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
            >
              Tek ekip. Tüm teknik disiplinler.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
              Her sistem ayrı uzmanlık ister. Sahada ise hepsi aynı plana ve aynı saate
              bağlı çalışır.
            </p>

            <Link
              href="/iletisim"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-between gap-7 border border-black bg-[#ff6a2b] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-black no-underline transition-colors hover:bg-black hover:text-white hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#eee9dd] sm:w-auto sm:min-w-64"
            >
              Teknik kapsam çıkaralım
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <nav className="lg:col-span-8" aria-label="Sahneva teknik hizmetleri">
            <ul className="border-t border-black/35">
              {SERVICES.map((service) => (
                <li key={service.href} className="border-b border-black/35">
                  <Link
                    href={service.href}
                    className="group grid min-h-32 grid-cols-[3.25rem_1fr_auto] items-center gap-x-3 px-1 py-5 text-[#10100d] no-underline transition-colors hover:bg-[#10100d] hover:px-4 hover:text-[#f2efe6] hover:no-underline focus-visible:bg-[#10100d] focus-visible:px-4 focus-visible:text-[#f2efe6] focus-visible:outline-none sm:grid-cols-[4.5rem_minmax(12rem,0.8fr)_1fr_auto] sm:gap-x-5"
                  >
                    <span className="self-start pt-1 font-mono text-xs font-bold tracking-[0.18em] text-[#6f61d8] group-hover:text-[#ff6a2b] sm:self-center sm:pt-0">
                      {service.number}
                    </span>
                    <span className="font-display text-2xl font-extrabold uppercase leading-none tracking-[-0.025em] sm:text-3xl lg:text-4xl">
                      {service.title}
                    </span>
                    <span className="col-start-2 mt-3 max-w-md text-sm leading-6 text-black/55 group-hover:text-white/60 sm:col-start-auto sm:mt-0 sm:text-base">
                      {service.scope}
                    </span>
                    <span
                      className="row-span-2 text-xl text-[#6f61d8] transition-transform group-hover:translate-x-1 group-hover:text-[#ff6a2b] sm:row-span-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

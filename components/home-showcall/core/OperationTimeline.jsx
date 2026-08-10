import Image from "next/image";

const OPERATION_STEPS = [
  {
    code: "01 / BRF",
    title: "Keşif",
    description: "Alan, akış, zemin ve erişim koşullarını yerinde okuruz.",
  },
  {
    code: "02 / PLN",
    title: "Planlama",
    description: "Teknik ihtiyaçları, ekip sorumluluklarını ve saat planını netleştiririz.",
  },
  {
    code: "03 / LOG",
    title: "Lojistik",
    description: "Araç, yük sırası ve saha girişlerini kurulum ritmine göre düzenleriz.",
  },
  {
    code: "04 / BLD",
    title: "Kurulum",
    description: "Sahne, görüntü, ses ve ışığı tek teknik akışta devreye alırız.",
  },
  {
    code: "05 / LIVE",
    title: "Canlı operasyon",
    description: "Prova ve etkinlik boyunca reji ile saha ekibi aynı çağrı planını izler.",
  },
  {
    code: "06 / OUT",
    title: "Söküm",
    description: "Alanı kontrollü biçimde teslim eder, ekipmanı yeniden sevke hazırlarız.",
  },
];

export default function OperationTimeline() {
  return (
    <section
      id="operasyon-akisi"
      className="scroll-mt-20 border-b border-white/15 bg-[#11110e] py-16 text-[#f2efe6] sm:py-20 lg:py-28"
      aria-labelledby="operation-timeline-title"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="grid gap-8 border-t border-white/25 pt-5 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#ff6a2b]">
              Operasyon akışı / 00–06
            </p>
            <h2
              id="operation-timeline-title"
              className="mt-5 max-w-[10ch] font-display text-4xl font-extrabold uppercase leading-[0.94] tracking-[-0.035em] sm:text-6xl lg:text-7xl"
            >
              Şov başladığında biz çoktan hazırız.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              İşimizi ekipman listesi olarak değil, dakikası belli bir saha operasyonu
              olarak tasarlarız.
            </p>
          </div>

          <figure className="lg:col-span-7">
            <div className="relative aspect-[16/9] overflow-hidden border border-white/20 bg-black sm:aspect-[2/1]">
              <Image
                src="/img/projeler/sifir-atik-festivali/sifir-atik-festivali-vinc-destekli-sahne-kurulumu.webp"
                alt="Sahne konstrüksiyonunun vinç desteğiyle kurulduğu saha operasyonu"
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover object-center grayscale-[15%]"
              />
              <div className="absolute left-0 top-0 bg-[#ff6a2b] px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black sm:text-xs">
                Build phase / saha
              </div>
            </div>
            <figcaption className="flex justify-between gap-5 border-x border-b border-white/20 px-4 py-3 font-mono text-[10px] uppercase leading-5 tracking-[0.12em] text-white/50 sm:text-xs">
              <span>Vinc destekli ana sahne kurulumu</span>
              <span className="shrink-0">Kayıt / 700+</span>
            </figcaption>
          </figure>
        </div>

        <ol className="mt-12 grid border-t border-white/25 lg:mt-16 lg:grid-cols-6">
          {OPERATION_STEPS.map((step, index) => (
            <li
              key={step.code}
              className="relative border-b border-white/20 pb-12 pl-8 pr-3 pt-6 before:absolute before:bottom-0 before:left-0 before:top-0 before:w-px before:bg-white/25 lg:min-h-64 lg:border-b-0 lg:border-r lg:px-5 lg:py-7 lg:before:-top-[5px] lg:before:bottom-auto lg:before:h-[9px] lg:before:w-[9px] lg:before:bg-[#ff6a2b] lg:last:border-r-0"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff6a2b] sm:text-xs">
                {step.code}
              </span>
              <h3 className="mt-6 font-display text-xl font-extrabold uppercase tracking-[-0.02em] text-white lg:mt-16 lg:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{step.description}</p>
              <span
                className="absolute bottom-5 right-3 font-mono text-[10px] text-white/25 lg:left-5 lg:right-auto"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}—06
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

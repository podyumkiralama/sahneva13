import Image from "next/image";
import Link from "next/link";

const CAPACITY = [
  { value: "700+", label: "tamamlanan kurulum" },
  { value: "81 il", label: "Türkiye geneli saha erişimi" },
  { value: "Tek ekip", label: "kurulumdan söküme operasyon" },
  { value: "Canlı reji", label: "ses, görüntü ve ışık takibi" },
];

const CHECKS = [
  ["01", "Sinyal akışı", "Kaynak, dağıtım ve sahne bağlantıları prova öncesinde doğrulanır."],
  ["02", "Enerji planı", "Ana besleme, yük dağılımı ve kritik sistemlerin yedeği birlikte ele alınır."],
  ["03", "Canlı takip", "Reji ekibi gösteri boyunca ses, görüntü ve cue akışını izler."],
  ["04", "Planlı söküm", "Etkinlik bitişi, ekipman çıkışı ve alan teslimi operasyon planına dahildir."],
];

export default function BackstageCapacityProof() {
  return (
    <section
      id="teknik-kapasite"
      className="scroll-mt-20 overflow-hidden bg-[#11110f] py-16 text-[#f1efe7] sm:py-20 lg:py-28"
      aria-labelledby="backstage-proof-title"
    >
      <div className="container mx-auto">
        <header className="grid gap-6 border-t border-white/35 pt-4 lg:grid-cols-12 lg:gap-8">
          <p className="m-0 text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#f06a2b] lg:col-span-2">
            Operasyon defteri / 02
          </p>
          <h2
            id="backstage-proof-title"
            className="m-0 max-w-4xl font-display text-[clamp(2.65rem,6.5vw,6.25rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.045em] text-[#f1efe7] lg:col-span-7"
          >
            Seyirci sahneyi görür.
            <br />
            Biz sinyali izleriz.
          </h2>
          <p className="m-0 max-w-md text-base font-medium leading-relaxed text-[#aaa89f] lg:col-span-3 lg:pt-2">
            Kontrol masası, backstage rack&apos;leri ve saha ekibi aynı akışta
            çalışır. Kurulum ancak prova tamamlandığında hazırdır.
          </p>
        </header>

        <div className="mt-12 grid min-w-0 border-y border-white/25 lg:mt-20 lg:grid-cols-12">
          <figure className="m-0 min-w-0 border-b border-white/25 lg:col-span-8 lg:border-b-0 lg:border-r">
            <div className="relative aspect-[16/10] bg-black sm:aspect-[16/8.5] lg:h-full lg:min-h-[36rem] lg:aspect-auto">
              <Image
                src="/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/teknik-reji-canli-kamera-aktarim-kurulumu.webp"
                alt="Sahne yanında ses, görüntü ve canlı kamera akışını yöneten teknik reji ekibi"
                fill
                sizes="(max-width: 1024px) 100vw, 67vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="grid gap-1 border-t border-white/25 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#aaa89f] sm:grid-cols-[1fr_auto] sm:px-0 sm:pr-4 sm:pl-4">
              <span>Canlı reji / ses + görüntü + kamera</span>
              <span>İstanbul</span>
            </figcaption>
          </figure>

          <aside className="min-w-0 lg:col-span-4" aria-label="Operasyon kapasitesi">
            <dl className="m-0 grid h-full lg:grid-rows-4">
              {CAPACITY.map(({ value, label }, index) => (
                <div
                  key={label}
                  className={`grid min-h-32 content-between gap-5 p-5 sm:grid-cols-[1fr_auto] sm:items-end sm:p-6 lg:min-h-0 lg:grid-cols-1 lg:p-8 ${
                    index < CAPACITY.length - 1 ? "border-b border-white/25" : ""
                  }`}
                >
                  <dt className="order-2 m-0 max-w-56 text-xs font-bold uppercase leading-relaxed tracking-[0.14em] text-[#aaa89f] sm:text-right lg:text-left">
                    {label}
                  </dt>
                  <dd className="order-1 m-0 font-display text-[clamp(2.25rem,5vw,4.8rem)] font-extrabold uppercase leading-none tracking-[-0.04em] text-[#f1efe7] sm:col-start-1 sm:row-start-1">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-6">
          <figure className="m-0 min-w-0 lg:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-black sm:aspect-[3/2] lg:aspect-[4/5]">
              <Image
                src="/img/projeler/sifir-atik-festivali/sifir-atik-festivali-backstage-ses-rack-altyapisi.webp"
                alt="Backstage alanında sinyal dağıtımı için hazırlanmış profesyonel ses rack altyapısı"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-[center_70%]"
              />
            </div>
            <figcaption className="border-t border-white/25 pt-3 text-xs font-bold uppercase tracking-[0.14em] text-[#aaa89f]">
              Backstage / patch ve sinyal dağıtımı
            </figcaption>
          </figure>

          <div className="min-w-0 lg:col-span-8 lg:pl-8">
            <div className="grid gap-4 border-t border-white/25 pt-4 sm:grid-cols-[1fr_auto] sm:items-start">
              <h3 className="m-0 max-w-2xl font-display text-3xl font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-[#f1efe7] sm:text-4xl lg:text-5xl">
                Görünmeyen iş, gösterinin güvenli tarafıdır.
              </h3>
              <Link
                href="/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi"
                className="inline-flex min-h-11 items-center gap-3 border-b border-white/50 text-sm font-black uppercase tracking-[0.12em] text-[#f1efe7] no-underline hover:text-white hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f06a2b]"
              >
                Reji kaydını incele
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <ol className="m-0 mt-10 list-none border-b border-white/25 p-0">
              {CHECKS.map(([index, title, description]) => (
                <li
                  key={index}
                  className="grid gap-2 border-t border-white/25 py-5 sm:grid-cols-[3rem_11rem_1fr] sm:gap-5 sm:py-6"
                >
                  <span className="text-xs font-black tracking-[0.18em] text-[#f06a2b]">
                    {index}
                  </span>
                  <span className="text-base font-black uppercase tracking-[-0.02em] text-[#f1efe7]">
                    {title}
                  </span>
                  <span className="max-w-xl text-sm font-medium leading-relaxed text-[#aaa89f]">
                    {description}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

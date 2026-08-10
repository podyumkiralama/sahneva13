import Image from "next/image";
import Link from "next/link";

const HERO_PROOF = [
  { value: "700+", label: "tamamlanan kurulum" },
  { value: "81 il", label: "saha erişimi" },
  { value: "Tek ekip", label: "planlama + uygulama" },
];

export default function ShowCallHero() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-white/15 bg-[#090907] pt-16 text-[#f2efe6] lg:pt-20"
      aria-labelledby="show-call-hero-title"
      aria-describedby="show-call-hero-description"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-4 hidden w-px bg-white/15 md:block lg:left-8"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-4 hidden w-px bg-white/15 md:block lg:right-8"
        aria-hidden="true"
      />

      <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-[1600px] lg:min-h-[calc(100svh-5rem)] lg:grid-cols-12">
        <div className="relative z-10 flex flex-col justify-between px-5 pb-9 pt-10 sm:px-8 sm:pb-12 sm:pt-12 lg:col-span-7 lg:min-h-[760px] lg:px-14 lg:pb-8 lg:pt-8 xl:px-20">
          <div className="flex items-start justify-between gap-5 border-t border-white/25 pt-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 sm:text-xs">
            <span>SV / Event Technology</span>
            <span className="text-right">
              İstanbul merkez
              <br />
              Türkiye geneli
            </span>
          </div>

          <div className="py-9 sm:py-12 lg:py-10">
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#ff6a2b] sm:text-sm">
              Show call / 18:30
            </p>
            <h1
              id="show-call-hero-title"
              className="max-w-[14ch] font-display text-[clamp(3.25rem,12vw,6rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.055em] sm:text-[clamp(5rem,10vw,8.5rem)] lg:text-[clamp(5.5rem,7vw,7rem)]"
            >
              <span className="block">Sahne</span>
              <span className="block">arkasında</span>
              <span className="block lg:whitespace-nowrap">
                <span className="text-[#ff6a2b]">700</span> projelik
              </span>
              <span className="block">refleks.</span>
            </h1>

            <p
              id="show-call-hero-description"
              className="mt-6 max-w-xl border-l-2 border-[#ff6a2b] pl-4 text-base leading-7 text-white/75 sm:mt-7 sm:pl-6 sm:text-lg sm:leading-8"
            >
              Sahne, LED ekran, ses–ışık, podyum ve çadır sistemlerini; keşiften
              söküme kadar aynı teknik ekip ve tek operasyon planıyla yönetiyoruz.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/iletisim"
                className="inline-flex min-h-12 items-center justify-between gap-7 border border-[#ff6a2b] bg-[#ff6a2b] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-black no-underline transition-colors hover:bg-[#ff7c45] hover:text-black hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:min-w-56"
              >
                Projeyi konuşalım
                <span aria-hidden="true">↗</span>
              </Link>
              <a
                href="tel:+905453048671"
                className="inline-flex min-h-12 items-center px-1 py-3 font-mono text-sm font-bold text-white underline decoration-white/40 underline-offset-8 transition-colors hover:text-[#ff6a2b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a2b]"
                aria-label="Sahneva'yı 0545 304 86 71 numarasından arayın"
              >
                +90 545 304 86 71
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-3 border-y border-white/20">
            {HERO_PROOF.map((item) => (
              <div
                key={item.value}
                className="border-r border-white/20 px-2 py-4 last:border-r-0 sm:px-4 sm:py-5"
              >
                <dt className="font-mono text-[10px] uppercase leading-tight tracking-[0.06em] text-white/50 sm:text-[11px]">
                  {item.label}
                </dt>
                <dd className="mt-2 font-display text-lg font-extrabold uppercase leading-none tracking-tight text-[#9a8df7] sm:text-2xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-[430px] border-t border-white/15 lg:col-span-5 lg:min-h-[760px] lg:border-l lg:border-t-0">
          <Image
            src="/img/projeler/sifir-atik-festivali/sifir-atik-festivali-ana-sahne-teknik-produksiyon-hero.webp"
            alt="Sahneva ekibinin kurduğu festival ana sahnesi, LED ekran ve ışık sistemleri"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 42vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between border-b border-white/30 bg-black/75 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:px-6 sm:text-xs">
            <span>Rig check / 14:00</span>
            <span>Cam 01 / Wide</span>
          </div>

          <div className="absolute bottom-0 left-0 border-r border-t border-white/25 bg-[#090907] px-5 py-4 sm:px-7 sm:py-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff6a2b]">
              Field note / 042
            </p>
            <p className="mt-2 max-w-[19rem] text-sm font-bold leading-5 text-white sm:text-base">
              Görünen şovdan önce görünmeyen yüzlerce teknik karar.
            </p>
          </div>

          <span
            className="absolute right-4 top-16 font-mono text-[10px] uppercase tracking-[0.15em] text-white/70 [writing-mode:vertical-rl] sm:right-6"
            aria-hidden="true"
          >
            40°57&apos;N / 29°06&apos;E
          </span>
        </div>
      </div>
    </section>
  );
}

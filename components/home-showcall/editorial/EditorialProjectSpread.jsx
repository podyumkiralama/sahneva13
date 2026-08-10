import Image from "next/image";
import Link from "next/link";

const PRIMARY_PROJECT = {
  href: "/projeler/saha-2026-dome-cadir-kurulumu",
  src: "/images/projects/saha-2026-dome-cadir-final.webp",
  alt: "SAHA 2026 etkinlik alanında tamamlanan dome çadır ve etkinlik yapısı",
  title: "SAHA 2026 dome çadır",
  note: "İskelet · Kaplama · Zemin",
};

const BUILD_PROJECT = {
  href: "/projeler/saha-2026-dome-cadir-kurulumu",
  src: "/images/projects/saha-2026-dome-cadir-iskelet-kurulumu.webp",
  alt: "SAHA 2026 etkinlik alanında dome çadır taşıyıcı iskelet kurulumu",
  title: "Geodezik iskelet kurulumu",
  note: "Kurulum kaydı / İstanbul",
};

const PLATFORM_PROJECT = {
  href: "/blog/etkinlik-teknik-kesif-ve-planlama-rehberi",
  src: "/img/blog/etkinlik-teknik-kesif-ve-planlama-rehberi/sahne-kurulum-platform.webp",
  alt: "Etkinlik alanında ölçülendirilerek kurulan modüler sahne platformu",
  title: "Modüler sahne platformu",
  note: "Keşif · Ölçü · Kurulum",
};

const ARCHIVE_LINKS = [
  [
    "Ana sahne teknik prodüksiyonu",
    "/projeler/sifir-atik-festivali-ana-sahne-teknik-produksiyon",
  ],
  ["Dome çadır kurulum günlüğü", "/projeler/saha-2026-dome-cadir-kurulumu"],
  ["Fişekhane Guinness kaydı", "/blog/fisekhane-pubg-guinness-rekoru"],
];

function ProjectCaption({ index, title, note }) {
  return (
    <figcaption className="grid gap-2 border-t border-[#171713] pt-3 sm:grid-cols-[4rem_1fr_auto] sm:items-start">
      <span className="text-[0.68rem] font-black tracking-[0.24em] text-[#5c5b54]">
        {index}
      </span>
      <span className="font-display text-lg font-extrabold uppercase leading-none text-[#11110e]">
        {title}
      </span>
      <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#5c5b54] sm:text-right">
        {note}
      </span>
    </figcaption>
  );
}

export default function EditorialProjectSpread() {
  return (
    <section
      id="projeler"
      className="scroll-mt-20 overflow-hidden border-y border-[#171713] bg-[#e8e5db] py-16 text-[#11110e] sm:py-20 lg:py-28"
      aria-labelledby="editorial-projects-title"
    >
      <div className="container mx-auto">
        <header className="grid gap-6 border-t border-[#171713] pt-4 lg:grid-cols-12 lg:gap-8">
          <p className="m-0 text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#5c5b54] lg:col-span-2">
            Saha kaydı / 01
          </p>
          <h2
            id="editorial-projects-title"
            className="m-0 max-w-4xl font-display text-[clamp(2.75rem,7vw,6.75rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.05em] text-[#11110e] lg:col-span-7"
          >
            Kurulum anı,
            <br />
            işin kendisidir.
          </h2>
          <div className="lg:col-span-3 lg:pt-2">
            <p className="m-0 max-w-md text-base font-medium leading-relaxed text-[#3f3e38]">
              Bitmiş sahnenin arkasında keşif, sevkiyat, enerji, sinyal ve ekip
              koordinasyonu vardır. Burada yalnızca finali değil, sahadaki
              emeği de gösteriyoruz.
            </p>
            <Link
              href="/projeler"
              className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-[#171713] text-sm font-black uppercase tracking-[0.12em] text-[#11110e] no-underline hover:text-[#11110e] hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110e]"
            >
              Tüm saha kayıtları
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </header>

        <div className="mt-12 grid min-w-0 gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-20">
          <article className="min-w-0 lg:col-span-8">
            <Link
              href={PRIMARY_PROJECT.href}
              className="group block text-[#11110e] no-underline hover:text-[#11110e] hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110e]"
              aria-label={`${PRIMARY_PROJECT.title} proje kaydını incele`}
            >
              <figure className="m-0">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1b1b18] sm:aspect-[2/1]">
                  <Image
                    src={PRIMARY_PROJECT.src}
                    alt={PRIMARY_PROJECT.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 67vw"
                    className="object-cover"
                  />
                  <span
                    className="absolute left-0 top-0 bg-[#f06a2b] px-3 py-2 text-[0.64rem] font-black uppercase tracking-[0.2em] text-[#11110e]"
                    aria-hidden="true"
                  >
                    Final / 18:30
                  </span>
                </div>
                <ProjectCaption
                  index="PRJ—01"
                  title={PRIMARY_PROJECT.title}
                  note={PRIMARY_PROJECT.note}
                />
              </figure>
            </Link>
          </article>

          <article className="min-w-0 lg:col-span-4 lg:mt-24">
            <Link
              href={BUILD_PROJECT.href}
              className="block text-[#11110e] no-underline hover:text-[#11110e] hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110e]"
              aria-label={`${BUILD_PROJECT.title} proje kaydını incele`}
            >
              <figure className="m-0">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#1b1b18] sm:aspect-[3/2] lg:aspect-[4/5]">
                  <Image
                    src={BUILD_PROJECT.src}
                    alt={BUILD_PROJECT.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover lg:object-[58%_center]"
                  />
                  <span
                    className="absolute bottom-0 right-0 bg-[#11110e] px-3 py-2 text-[0.64rem] font-black uppercase tracking-[0.2em] text-[#e8e5db]"
                    aria-hidden="true"
                  >
                    Rig check / 14:00
                  </span>
                </div>
                <ProjectCaption
                  index="PRJ—01A"
                  title={BUILD_PROJECT.title}
                  note={BUILD_PROJECT.note}
                />
              </figure>
            </Link>
          </article>

          <article className="min-w-0 lg:col-span-7 lg:col-start-2">
            <Link
              href={PLATFORM_PROJECT.href}
              className="block text-[#11110e] no-underline hover:text-[#11110e] hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110e]"
              aria-label={`${PLATFORM_PROJECT.title} saha kaydını incele`}
            >
              <figure className="m-0">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1b1b18]">
                  <Image
                    src={PLATFORM_PROJECT.src}
                    alt={PLATFORM_PROJECT.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                </div>
                <ProjectCaption
                  index="PRJ—02"
                  title={PLATFORM_PROJECT.title}
                  note={PLATFORM_PROJECT.note}
                />
              </figure>
            </Link>
          </article>

          <nav
            className="border-t border-[#171713] lg:col-span-4 lg:col-start-9 lg:self-end"
            aria-label="Seçilmiş saha kayıtları"
          >
            <p className="m-0 py-4 text-[0.68rem] font-black uppercase tracking-[0.26em] text-[#5c5b54]">
              Saha arşivi / seçki
            </p>
            <ol className="m-0 list-none border-b border-[#171713] p-0">
              {ARCHIVE_LINKS.map(([label, href], index) => (
                <li key={href} className="border-t border-[#171713]">
                  <Link
                    href={href}
                    className="grid min-h-12 grid-cols-[2.5rem_1fr_auto] items-center gap-2 py-3 text-[#11110e] no-underline hover:text-[#11110e] hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#11110e]"
                  >
                    <span className="text-[0.68rem] font-black text-[#74726a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-black uppercase tracking-[-0.02em]">
                      {label}
                    </span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}

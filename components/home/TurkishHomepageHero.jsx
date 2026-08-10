import Image from "next/image";
import Link from "next/link";

import styles from "./TurkishHomepageHeroMosaic.module.css";

export const TR_HOME_PRIMARY_IMAGE = {
  src: "/img/led/acik-hava-konser-led-ekran-sahneva.webp",
  width: 1600,
  height: 1199,
  alt: "Açık hava etkinliğinde dev LED ekranlar, sahne ışıkları ve izleyici alanı",
};

const MOSAIC_TILES = [
  {
    label: "Sahne",
    ariaLabel: "Sahne kiralama hizmetini inceleyin",
    href: "/sahne-kiralama",
    image: "/img/blog/kurumsal-etkinlik-led-ekran-sahne.webp",
    imagePosition: "50% 50%",
    tileClass: styles.tileTop,
    eager: true,
  },
  {
    label: "Çadır",
    ariaLabel: "Çadır kiralama hizmetini inceleyin",
    href: "/cadir-kiralama",
    image: "/images/projects/saha-2026-dome-cadir-final.webp",
    imagePosition: "64% 40%",
    tileClass: styles.tileMiddle,
    eager: true,
  },
  {
    label: "Podyum",
    ariaLabel: "Podyum kiralama hizmetini inceleyin",
    href: "/podyum-kiralama",
    image: "/img/podyum/moda-defilesi-sahne.webp",
    imagePosition: "50% 58%",
    tileClass: styles.tileLowerCenter,
  },
  {
    label: "LED Ekran",
    ariaLabel: "LED ekran kiralama hizmetini inceleyin",
    href: "/led-ekran-kiralama",
    image: "/img/led/gala-led-sahne-video-wall-sahneva.webp",
    imagePosition: "50% 50%",
    tileClass: styles.tileLowerLeft,
  },
  {
    label: "Ses–Işık",
    ariaLabel: "Ses ve ışık sistemleri hizmetini inceleyin",
    href: "/ses-isik-sistemleri",
    image: "/img/kurumsal/premium/konser-isik-tasarimi.webp",
    imagePosition: "62% 50%",
    tileClass: styles.tileLowerRight,
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ServiceMosaic() {
  return (
    <div className={styles.mosaicShell}>
      <ul className={styles.mosaicTiles} aria-label="Sahneva hizmetleri">
        {MOSAIC_TILES.map((service) => (
          <li
            key={service.href}
            className={`${styles.tile} ${service.tileClass}`}
          >
            <Link
              href={service.href}
              prefetch={false}
              className={styles.tileLink}
              aria-label={service.ariaLabel}
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 1536px) 840px, (min-width: 1024px) 46vw, 100vw"
                quality={65}
                loading={service.eager ? "eager" : "lazy"}
                className={styles.tileImage}
                style={{ objectPosition: service.imagePosition }}
              />
              <span className={styles.tileShade} aria-hidden="true" />
              <span className={styles.tileLabel} aria-hidden="true">
                {service.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <svg
        className={styles.mosaicWireframe}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon
          points="56,0 75,0 100,25 47,25"
          vectorEffect="non-scaling-stroke"
        />
        <polygon
          points="3,24.5 100,24.5 100,53 35,53"
          vectorEffect="non-scaling-stroke"
        />
        <polygon
          points="35,52.5 100,52.5 62,76"
          vectorEffect="non-scaling-stroke"
        />
        <polygon
          points="35,52.5 62,76 8,100 0,100"
          vectorEffect="non-scaling-stroke"
        />
        <polygon
          points="100,52.5 100,100 8,100 62,76"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export default function TurkishHomepageHero() {
  return (
    <section
      className={`${styles.hero} relative isolate overflow-hidden bg-[#040817] pb-28 pt-24 text-white sm:pb-32 sm:pt-28 lg:pb-36 lg:pt-28`}
      aria-labelledby="hero-title"
      aria-describedby="hero-desc"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={TR_HOME_PRIMARY_IMAGE.src}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={85}
          className={styles.heroImage}
        />
        <div className={styles.heroWash} />
        <div className={styles.copyShade} />
      </div>

      <div className="pointer-events-none relative z-20 mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className={`${styles.heroCopy} pointer-events-auto`}>
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-violet-200 sm:text-xs">
            Kurumsal Etkinlik · Konser · Lansman · Festival
          </p>

          <h1
            id="hero-title"
            className={styles.heroTitle}
          >
            <span>Sahne,</span>
            <span>
              LED, <em>Ses–Işık.</em>
            </span>
            <span>Tek Ekip.</span>
          </h1>

          <p id="hero-desc" className={styles.heroDescription}>
            Sahne kiralama, LED ekran, ses–ışık, podyum ve çadır sistemleri;
            keşiften söküme tek teknik ekip. 700+ proje deneyimiyle Türkiye
            genelinde kurulum.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/projeler"
              prefetch={false}
              className="inline-flex min-h-12 items-center justify-between gap-6 border border-violet-400 bg-violet-600 px-6 py-3.5 text-sm font-extrabold text-white no-underline transition-colors hover:border-violet-200 hover:bg-violet-500 hover:no-underline focus-ring sm:min-w-[210px]"
            >
              Projeleri incele
              <ArrowIcon />
            </Link>
            <Link
              href="#teklif-al"
              className="inline-flex min-h-12 items-center justify-between gap-6 border border-white/65 bg-[#040817]/60 px-6 py-3.5 text-sm font-extrabold text-white no-underline transition-colors hover:border-white hover:bg-[#0b1120]/90 hover:no-underline focus-ring sm:min-w-[180px]"
            >
              Teklif al
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.mosaicStage}>
        <ServiceMosaic />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-24 bg-[#0B1120]/45"
        aria-hidden="true"
      />
    </section>
  );
}

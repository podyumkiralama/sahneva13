import Image from "next/image";
import Link from "next/link";

import { getClientReferences } from "@/lib/clientReferences";
import HeroMosaicParallax from "./HeroMosaicParallax.client";
import styles from "./TurkishHomepageHeroEffects.module.css";

export const TR_HOME_PRIMARY_IMAGE = {
  src: "/img/led/acik-hava-konser-led-ekran-sahneva.webp",
  width: 1600,
  height: 1199,
  alt: "Açık hava etkinliğinde dev LED ekranlar, sahne ışıkları ve izleyici alanı",
};

const MOSAIC_TILES = [
  {
    label: "Sahne",
    projectLabel: "PUBG Türkiye Finali",
    videoId: "173gBurWSRQ",
    videoTitle: "PUBG Türkiye Finali 2023",
    videoMeta: "Sahne · LED ekran · ses–ışık · reji",
    href: "/sahne-kiralama",
    ctaLabel: "Sahne sistemlerini incele",
    image: "/img/blog/kurumsal-etkinlik-led-ekran-sahne.webp",
    imagePosition: "50% 50%",
    tileClass: styles.tileTop,
    eager: true,
  },
  {
    label: "Çadır",
    projectLabel: "SAHA 2026",
    videoId: "x-BYu0vgO2E",
    videoTitle: "SAHA 2026 Özel Etkinlik Alanı ve Fuar Prodüksiyonu",
    videoMeta: "Dome çadır · zemin · ambiyans ışığı",
    href: "/cadir-kiralama",
    ctaLabel: "Çadır çözümlerini incele",
    image: "/images/projects/saha-2026-dome-cadir-final.webp",
    imagePosition: "64% 40%",
    tileClass: styles.tileMiddle,
    eager: true,
  },
  {
    label: "Podyum",
    projectLabel: "Sıfır Atık Festivali",
    videoId: "z4DqZERYXkM",
    videoTitle: "Sıfır Atık Festivali Ana Sahne Prodüksiyonu",
    videoMeta: "Sahne · LED ekran · ses–ışık",
    href: "/podyum-kiralama",
    ctaLabel: "Podyum çözümlerini incele",
    image:
      "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-ana-sahne-teknik-produksiyon-hero.webp",
    imagePosition: "50% 50%",
    tileClass: styles.tileLowerCenter,
  },
  {
    label: "LED Ekran",
    projectLabel: "Fatih Belediyesi",
    videoId: "c72ILTyJH4A",
    videoTitle: "Fatih Belediyesi 5 Yılda Fatih'e Değer 400 Proje Etkinliği",
    videoMeta: "Sahne · LED ekran · ses–ışık · teknik prodüksiyon",
    href: "/led-ekran-kiralama",
    ctaLabel: "LED ekran çözümlerini incele",
    image: "/img/led/gala-led-sahne-video-wall-sahneva.webp",
    imagePosition: "50% 50%",
    tileClass: styles.tileLowerLeft,
  },
  {
    label: "Ses–Işık",
    projectLabel: "PUBG Provaları",
    videoId: "1R5Av0x5ouA",
    videoTitle: "PUBG Sahne, LED Ekran ve Işık Provaları",
    videoMeta: "Işık · prova · teknik reji",
    href: "/ses-isik-sistemleri",
    ctaLabel: "Ses–ışık çözümlerini incele",
    image: "/img/kurumsal/premium/konser-isik-tasarimi.webp",
    imagePosition: "62% 50%",
    tileClass: styles.tileLowerRight,
  },
];

const FEATURED_PROJECT_REFERENCES = getClientReferences([
  "Fatih Belediyesi",
  "PUBG Mobile — PMGC 2023 Dünya Finali",
  "SAHA 2026",
  "Sıfır Atık Festivali",
]);

const MOSAIC_LIGHT_PATH_OUTER =
  "M56 0 L75 0 L100 24.5 L100 100 L0 100 L35 52.5 L3 24.5 L47 25 Z";

const MOSAIC_WIREFRAME_PATH =
  "M56 0 L75 0 L100 24.5 L100 100 L0 100 L35 52.5 L3 24.5 L47 25 Z M47 25 L100 24.5 M35 52.5 L100 52.5 M35 52.5 L62 76 L100 52.5 M62 76 L8 100";

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
  const videos = MOSAIC_TILES.map(
    ({ videoId, videoTitle, videoMeta, href, ctaLabel }) => ({
      videoId,
      videoTitle,
      videoMeta,
      href,
      ctaLabel,
    }),
  );

  return (
    <HeroMosaicParallax className={styles.mosaicShell} videos={videos}>
      <ul className={styles.mosaicTiles} aria-label="Sahneva proje videoları">
        {MOSAIC_TILES.map((service, index) => (
          <li
            key={service.videoId}
            className={`${styles.tile} ${service.tileClass}`}
            data-mosaic-parallax-tile
          >
            <button
              type="button"
              className={styles.tileLink}
              data-mosaic-video-index={index}
              aria-label={`${service.videoTitle} videosunu oynat`}
              aria-haspopup="dialog"
              style={{ position: "absolute" }}
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
              <span className={styles.tileLabel}>
                <span className={styles.tileServiceLabel}>
                  <span className={styles.tilePlayIcon} aria-hidden="true">
                    ▶
                  </span>
                  <span>{service.label}</span>
                </span>
                <span className={styles.tileProjectLabel}>
                  {service.projectLabel}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <svg
        className={styles.mosaicWireframe}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={MOSAIC_WIREFRAME_PATH}
          vectorEffect="non-scaling-stroke"
        />

        <g className={styles.mosaicLightTrail}>
          <path
            className={styles.mosaicLightHalo}
            d={MOSAIC_LIGHT_PATH_OUTER}
            pathLength="100"
            vectorEffect="non-scaling-stroke"
          />
          <path
            className={styles.mosaicLightCore}
            d={MOSAIC_LIGHT_PATH_OUTER}
            pathLength="100"
            vectorEffect="non-scaling-stroke"
          />
        </g>

      </svg>
    </HeroMosaicParallax>
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

          <aside
            className={styles.projectReferences}
            aria-label="Öne çıkan proje kayıtları"
          >
            <span className={styles.projectReferencesLabel}>Proje kayıtları</span>
            <ul>
              {FEATURED_PROJECT_REFERENCES.map((reference) => (
                <li key={reference.org}>
                  {reference.shortName ?? reference.org}
                </li>
              ))}
            </ul>
          </aside>

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

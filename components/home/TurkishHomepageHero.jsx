import Image from "next/image";
import Link from "next/link";

import { getClientReferences } from "@/lib/clientReferences";
import HeroMosaicParallax from "./HeroMosaicParallax.client";
import styles from "./TurkishHomepageHeroEffects.module.css";
import { PROJECTS_COMPLETED } from "@/lib/stats";

export const HOME_PRIMARY_IMAGE = {
  src: "/img/led/acik-hava-konser-led-ekran-sahneva.webp",
  width: 1600,
  height: 1199,
  alt: "Açık hava etkinliğinde dev LED ekranlar, sahne ışıkları ve izleyici alanı",
};

export const TR_HOME_PRIMARY_IMAGE = HOME_PRIMARY_IMAGE;

const DEFAULT_MOSAIC_TILES = [
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

const DEFAULT_PROOF_POINTS = FEATURED_PROJECT_REFERENCES.map((reference) => ({
  label: reference.shortName ?? reference.org,
}));

const DEFAULT_DICTIONARY = {
  eyebrow: "Kurumsal Etkinlik \u00b7 Konser \u00b7 Lansman \u00b7 Festival",
  titleLines: [
    { text: "Sahne," },
    { text: "LED, ", emphasis: "Ses\u2013I\u015f\u0131k." },
    { text: "Tek Ekip." },
  ],
  description: `Sahne kiralama, LED ekran, ses\u2013\u0131\u015f\u0131k, podyum ve \u00e7ad\u0131r sistemleri; ke\u015fiften s\u00f6k\u00fcme tek teknik ekip. ${PROJECTS_COMPLETED} proje deneyimiyle T\u00fcrkiye genelinde kurulum.`,
  proofLabel: "Proje kay\u0131tlar\u0131",
  proofAriaLabel: "\u00d6ne \u00e7\u0131kan proje kay\u0131tlar\u0131",
  proofPoints: DEFAULT_PROOF_POINTS,
  mosaicTiles: DEFAULT_MOSAIC_TILES,
  mosaicAriaLabel: "Sahneva proje videolar\u0131",
  tilePlayAria: "{{title}} videosunu oynat",
  dialogLabels: {
    eyebrow: "Proje kayd\u0131 / Sahneva",
    closeLabel: "Proje videosunu kapat",
  },
  actions: [
    {
      key: "projects",
      label: "Projeleri incele",
      href: "/projeler",
      prefetch: false,
    },
    {
      key: "quote",
      label: "Teklif al",
      href: "#teklif-al",
    },
  ],
};

const TILE_CLASSES = [
  styles.tileTop,
  styles.tileMiddle,
  styles.tileLowerCenter,
  styles.tileLowerLeft,
  styles.tileLowerRight,
];

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

function formatLabel(template, title) {
  return template.replace("{{title}}", title);
}

function ServiceMosaic({
  tiles,
  ariaLabel,
  tilePlayAria,
  dialogLabels,
}) {
  const videos = tiles.map(
    ({ videoId, videoTitle, videoMeta, href, ctaLabel }) => ({
      videoId,
      videoTitle,
      videoMeta,
      href,
      ctaLabel,
    }),
  );

  return (
    <HeroMosaicParallax
      className={styles.mosaicShell}
      videos={videos}
      dialogLabels={dialogLabels}
    >
      <ul className={styles.mosaicTiles} aria-label={ariaLabel}>
        {tiles.map((service, index) => (
          <li
            key={service.videoId}
            className={`${styles.tile} ${service.tileClass ?? TILE_CLASSES[index]}`}
            data-mosaic-parallax-tile
          >
            <button
              type="button"
              className={styles.tileLink}
              data-mosaic-video-index={index}
              aria-label={formatLabel(tilePlayAria, service.videoTitle)}
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

function getActions(dictionaryOverride) {
  if (dictionaryOverride?.actions) return dictionaryOverride.actions;
  if (!dictionaryOverride?.ctaOrder) return DEFAULT_DICTIONARY.actions;

  return dictionaryOverride.ctaOrder.map((key) => {
    if (key === "whatsapp") {
      return {
        key,
        label: dictionaryOverride.ctaWhatsapp,
        ariaLabel: dictionaryOverride.ctaWhatsappAria,
        href: `https://wa.me/905453048671?text=${dictionaryOverride.whatsappText}&${dictionaryOverride.whatsappUtm}`,
        external: true,
      };
    }

    return {
      key,
      label: dictionaryOverride.ctaQuote,
      ariaLabel: dictionaryOverride.ctaQuoteAria,
      href: dictionaryOverride.quoteAnchor,
    };
  });
}

function HeroAction({ action, primary }) {
  const className = primary
    ? "inline-flex min-h-12 items-center justify-between gap-6 border border-violet-400 bg-violet-600 px-6 py-3.5 text-sm font-extrabold text-white no-underline transition-colors hover:border-violet-200 hover:bg-violet-500 hover:no-underline focus-ring sm:min-w-[210px]"
    : "inline-flex min-h-12 items-center justify-between gap-6 border border-white/65 bg-[#040817]/60 px-6 py-3.5 text-sm font-extrabold text-white no-underline transition-colors hover:border-white hover:bg-[#0b1120]/90 hover:no-underline focus-ring sm:min-w-[180px]";
  const content = (
    <>
      {action.label}
      <ArrowIcon />
    </>
  );

  if (action.external) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={className}
        aria-label={action.ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={action.href}
      prefetch={action.prefetch}
      className={className}
      aria-label={action.ariaLabel}
    >
      {content}
    </Link>
  );
}

export default function TurkishHomepageHero({ dictionary: dictionaryOverride } = {}) {
  const d = { ...DEFAULT_DICTIONARY, ...dictionaryOverride };
  const eyebrow =
    dictionaryOverride?.eyebrow ?? dictionaryOverride?.badge ?? DEFAULT_DICTIONARY.eyebrow;
  const description = dictionaryOverride?.heroDescription ?? d.description;
  const actions = getActions(dictionaryOverride);

  return (
    <section
      className={`${styles.hero} hero-shell hero-shell-inner relative isolate flex flex-col justify-center overflow-hidden bg-[#040817] text-white`}
      aria-labelledby="hero-title"
      aria-describedby="hero-desc"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={HOME_PRIMARY_IMAGE.src}
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
            {eyebrow}
          </p>

          <h1
            id="hero-title"
            aria-label={d.titleLines
              .map((line) => `${line.text}${line.emphasis ?? ""}`)
              .join(" ")}
            className={`${styles.heroTitle} ${d.titleVariant === "english" ? styles.heroTitleEnglish : ""}`}
          >
            {d.titleLines.map((line, index) => (
              <span
                key={`${line.text}-${index}`}
                className={line.compact ? styles.heroTitleCompactLine : undefined}
              >
                {line.text}
                {line.emphasis ? <em>{line.emphasis}</em> : null}
              </span>
            ))}
          </h1>

          <p id="hero-desc" className={styles.heroDescription}>
            {description}
          </p>

          {d.proofPoints?.length ? (
            <aside
              className={styles.projectReferences}
              aria-label={d.proofAriaLabel}
            >
              <span className={styles.projectReferencesLabel}>{d.proofLabel}</span>
              <ul>
                {d.proofPoints.map((item, index) => (
                  <li key={`${item.value ?? "proof"}-${item.label}-${index}`}>
                    {item.value ? (
                      <strong className={styles.proofValue}>{item.value}</strong>
                    ) : null}
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {actions.map((action, index) => (
              <HeroAction key={action.key} action={action} primary={index === 0} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.mosaicStage}>
        <ServiceMosaic
          tiles={d.mosaicTiles}
          ariaLabel={d.mosaicAriaLabel}
          tilePlayAria={d.tilePlayAria}
          dialogLabels={d.dialogLabels}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-24 bg-[#0B1120]/45"
        aria-hidden="true"
      />
    </section>
  );
}

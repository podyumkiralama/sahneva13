const HOME_RESPONSIVE_OUTPUT_ROOT = "/img/responsive/home";

export const HOME_RESPONSIVE_AVIF_SETTINGS = Object.freeze({
  quality: 42,
  effort: 6,
  revisionTag: "a42e6",
});

// These files are generated at build-preparation time and committed to public/.
// `revision` hashes the source bytes plus the Sharp transform settings, so the
// one-year immutable cache can never keep serving an older visual after a
// source or compression setting changes.
export const HOME_RESPONSIVE_IMAGE_CONFIG = {
  "/img/led/acik-hava-konser-led-ekran-sahneva.webp": {
    key: "open-air-concert-led",
    width: 1600,
    height: 1199,
    widths: [480, 768, 1024, 1440, 1600],
    quality: 72,
    revision: "065305021f",
  },
  "/img/led/p19-malatya-kura-toreni-led-ekran-sahneva.webp": {
    key: "p19-malatya-event",
    width: 1600,
    height: 1200,
    widths: [480, 768, 1024],
    quality: 70,
    revision: "db69c9836c",
  },
  "/img/led/p19-cop31-konferans-led-ekran-sahneva.webp": {
    key: "p19-cop31-conference",
    width: 1600,
    height: 1200,
    widths: [480, 768, 1024],
    quality: 70,
    revision: "02e0981dbd",
  },
  "/img/led/led-ekran-fuar-lansman-salon-kurulumu-sahneva.webp": {
    key: "led-launch-ballroom",
    width: 1600,
    height: 1200,
    widths: [480, 768, 1024],
    quality: 70,
    revision: "226d39b170",
  },
  "/img/led/p19-kahramanmaras-acilis-led-ekran-sahneva.webp": {
    key: "p19-kahramanmaras-event",
    width: 1600,
    height: 1200,
    widths: [480, 768, 1024],
    quality: 70,
    revision: "bbc3b27ec7",
  },
  "/img/led/kurumsal-konferans-led-ekran-sahne-isik-sahneva.webp": {
    key: "corporate-conference-led",
    width: 1536,
    height: 1024,
    widths: [480, 768, 1024],
    quality: 70,
    revision: "1cbf3f4e6c",
  },
  "/img/led/absen-p19-sekiz-panel-360-dairesel-led-arka-baglanti-sahneva.webp": {
    key: "p19-circular-rear",
    width: 800,
    height: 1000,
    widths: [320, 480, 768, 800],
    quality: 70,
    revision: "3fbc8f725c",
  },
  "/img/led/absen-p19-kavisli-led-sahne-ust-bant-halka-sahneva.webp": {
    key: "p19-curved-stage-ring",
    width: 1200,
    height: 1600,
    widths: [480, 768, 1024, 1200],
    quality: 70,
    revision: "390afda4cd",
  },
  "/img/led/absen-p19-led-teknik-ekip-kablo-hazirlik-sahneva.webp": {
    key: "p19-cable-preparation",
    width: 1600,
    height: 739,
    widths: [480, 768, 1024],
    quality: 70,
    revision: "9f4395f4b1",
  },
  "/img/kurumsal/premium/truss-sahne-cati.webp": {
    key: "truss-stage-roof",
    width: 1600,
    height: 900,
    widths: [320, 480, 768, 1024],
    quality: 70,
    revision: "267999923f",
  },
  "/img/blog/kurumsal-etkinlik-led-ekran-sahne.webp": {
    key: "corporate-led-stage",
    width: 1920,
    height: 1080,
    widths: [480, 768, 1024, 1440],
    quality: 70,
    revision: "2f05e1eb40",
  },
  "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-ana-sahne-teknik-produksiyon-hero.webp": {
    key: "zero-waste-main-stage",
    width: 4000,
    height: 1848,
    widths: [480, 768, 1024, 1440],
    quality: 70,
    revision: "af75dc78bc",
  },
  "/img/cadir/seffaf.webp": {
    key: "transparent-event-tent",
    width: 1536,
    height: 2048,
    widths: [320, 480, 768, 1024],
    quality: 70,
    revision: "9d3c82f461",
  },
  "/img/blog/podyum-sahne-profesyonel-etkinlik.webp": {
    key: "professional-podium-stage",
    width: 1600,
    height: 900,
    widths: [320, 480, 768, 1024],
    quality: 70,
    revision: "a6dacc3da5",
  },
  "/img/blog/kurumsal-etkinlik-ses-backstage.webp": {
    key: "corporate-audio-backstage",
    width: 3264,
    height: 1472,
    widths: [320, 480, 768, 1024],
    quality: 70,
    revision: "aa2d5b3c36",
  },
  "/img/blog/fisekhane-pubg-koreografili.webp": {
    key: "fisekhane-pubg-production",
    width: 1333,
    height: 812,
    widths: [480, 768, 1024, 1280],
    quality: 70,
    revision: "2a3c80b845",
  },
  "/img/led/led-wall-urun-lansmani-hybrid-sahneva.webp": {
    key: "hybrid-launch-led-wall",
    width: 1600,
    height: 1200,
    widths: [320, 480, 768, 1024],
    quality: 70,
    revision: "23f3d3f9ae",
  },
  "/img/sandalye/sandalye-masa-kiralama-sahneva.webp": {
    key: "table-chair-event-layout",
    width: 1560,
    height: 720,
    widths: [320, 480, 768, 1024],
    quality: 70,
    revision: "6ded6ab662",
  },
  "/img/led/gala-led-sahne-video-wall-sahneva.webp": {
    key: "gala-led-video-wall",
    width: 1600,
    height: 900,
    widths: [480, 768, 1024, 1440],
    quality: 70,
    revision: "df50d6e111",
  },
  "/img/ses-isik/hero.webp": {
    key: "sound-light-stage",
    width: 1600,
    height: 720,
    widths: [320, 480, 768, 1024],
    quality: 70,
    revision: "cd6e706163",
  },
  "/img/blog/milli-uzay-programi-podyum.webp": {
    key: "space-program-podium",
    width: 1536,
    height: 1024,
    widths: [480, 768, 1024, 1280],
    quality: 70,
    revision: "4d6df8576c",
  },
  "/images/projects/saha-2026-dome-cadir-final.webp": {
    key: "saha-dome-tent",
    width: 1439,
    height: 1023,
    widths: [480, 768, 1024, 1280],
    quality: 70,
    revision: "a58f66de0d",
  },
  "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/teknik-reji-canli-kamera-aktarim-kurulumu.webp": {
    key: "technical-control-desk",
    width: 1600,
    height: 739,
    widths: [480, 768, 1024, 1440, 1600],
    quality: 70,
    revision: "427b1d2d77",
  },
  "/img/kurumsal/premium/konser-isik-tasarimi.webp": {
    key: "concert-lighting-design",
    width: 1179,
    height: 899,
    widths: [480, 768, 1024, 1179],
    quality: 70,
    revision: "db39752849",
  },
  "/img/kurumsal/premium/kurumsal-organizasyon-gala-isik-kanit.webp": {
    key: "corporate-gala-lighting",
    width: 720,
    height: 540,
    widths: [320, 480, 640, 720],
    quality: 70,
    revision: "9e61a04fa3",
  },
};

export function buildHomeResponsiveImagePath(config, width, format = "webp") {
  const revision =
    format === "avif"
      ? `${config.revision}-${HOME_RESPONSIVE_AVIF_SETTINGS.revisionTag}`
      : config.revision;

  return `${HOME_RESPONSIVE_OUTPUT_ROOT}/${config.key}.${revision}.${width}w.${format}`;
}

export function getHomeResponsiveImage(src) {
  const config = HOME_RESPONSIVE_IMAGE_CONFIG[src];
  if (!config) return null;

  return {
    ...config,
    src,
    variants: config.widths.map((width) => ({
      width,
      src: buildHomeResponsiveImagePath(config, width),
    })),
    avifVariants: config.widths.map((width) => ({
      width,
      src: buildHomeResponsiveImagePath(config, width, "avif"),
    })),
  };
}

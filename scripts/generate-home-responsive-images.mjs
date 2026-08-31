import { createHash } from "node:crypto";
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

import {
  HOME_RESPONSIVE_AVIF_SETTINGS,
  HOME_RESPONSIVE_IMAGE_CONFIG,
  buildHomeResponsiveImagePath,
} from "../lib/homeResponsiveImages.js";

const PUBLIC_DIR = path.resolve(process.cwd(), "public");
const SHARP_VERSION = sharp.versions.sharp;
const EFFORT = 6;

function getTransformSignature(config) {
  return JSON.stringify({
    format: "webp",
    quality: config.quality,
    effort: EFFORT,
    sharpVersion: SHARP_VERSION,
    widths: config.widths,
  });
}

async function getRevision(sourcePath, config) {
  const source = await readFile(sourcePath);

  return createHash("sha256")
    .update(source)
    .update(getTransformSignature(config))
    .digest("hex")
    .slice(0, 10);
}

async function generateImage(sourceUrl, config) {
  const sourcePath = path.join(PUBLIC_DIR, sourceUrl.slice(1));
  const revision = await getRevision(sourcePath, config);

  if (revision !== config.revision) {
    throw new Error(
      `Stale responsive-image revision for ${sourceUrl}: expected ${revision}, manifest has ${config.revision}`,
    );
  }

  const generated = [];

  for (const width of config.widths) {
    const webpUrl = buildHomeResponsiveImagePath(config, width);
    const webpPath = path.join(PUBLIC_DIR, webpUrl.slice(1));
    const avifUrl = buildHomeResponsiveImagePath(config, width, "avif");
    const avifPath = path.join(PUBLIC_DIR, avifUrl.slice(1));

    await mkdir(path.dirname(webpPath), { recursive: true });
    await sharp(sourcePath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: config.quality, effort: EFFORT })
      .toFile(webpPath);
    await sharp(sourcePath)
      .resize({ width, withoutEnlargement: true })
      .avif({
        quality: HOME_RESPONSIVE_AVIF_SETTINGS.quality,
        effort: HOME_RESPONSIVE_AVIF_SETTINGS.effort,
      })
      .toFile(avifPath);

    generated.push(webpUrl, avifUrl);
  }

  return generated;
}

const generated = [];

for (const [sourceUrl, config] of Object.entries(
  HOME_RESPONSIVE_IMAGE_CONFIG,
)) {
  generated.push(...(await generateImage(sourceUrl, config)));
}

console.log(`Generated ${generated.length} responsive homepage images.`);

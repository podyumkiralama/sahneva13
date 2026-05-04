import { BASE_SITE_URL } from "@/lib/seo/schemaIds";

const SITE_URL = (BASE_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const DEFAULT_OG_IMAGE = "/img/og/sahneva-og.webp";

const cleanText = (value = "") =>
  String(value)
    .replace(/\s+/g, " ")
    .trim();

export function buildDynamicOgImageUrl({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  eyebrow = "Türkiye Geneli Etkinlik Prodüksiyonu",
} = {}) {
  const params = new URLSearchParams();

  if (cleanText(title)) params.set("title", cleanText(title));
  if (cleanText(description)) params.set("description", cleanText(description));
  if (cleanText(eyebrow)) params.set("eyebrow", cleanText(eyebrow));
  if (cleanText(image)) params.set("image", cleanText(image));

  return `${SITE_URL}/api/og?${params.toString()}`;
}

export function buildDynamicOgImage({
  title,
  description,
  image,
  eyebrow,
  alt,
} = {}) {
  return {
    url: buildDynamicOgImageUrl({ title, description, image, eyebrow }),
    width: 1200,
    height: 630,
    alt:
      alt ||
      cleanText(title) ||
      "Sahneva Organizasyon sosyal medya paylaşım görseli",
  };
}

export function buildDynamicTwitterImages(options = {}) {
  return [buildDynamicOgImageUrl(options)];
}

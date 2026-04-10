import { SITE_URL } from "@/lib/seo/seoConfig";

const toAbsolute = (value) => {
  if (!value) return undefined;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
};

export function buildLanguageAlternates({
  tr,
  en,
  ar,
  xDefault,
  canonical,
} = {}) {
  const languages = {};

  if (tr) languages["tr-TR"] = toAbsolute(tr);
  if (en) {
    languages.en = toAbsolute(en);
    languages["en-US"] = toAbsolute(en);
  }
  if (ar) languages.ar = toAbsolute(ar);

  const canonicalUrl = toAbsolute(canonical ?? tr ?? en ?? ar ?? "/");
  const xDefaultUrl = toAbsolute(xDefault ?? en ?? tr ?? ar ?? "/");

  if (xDefaultUrl) {
    languages["x-default"] = xDefaultUrl;
  }

  return {
    canonical: canonicalUrl,
    languages,
  };
}

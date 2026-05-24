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

  const addLanguage = (key, value) => {
    const url = toAbsolute(value);
    if (!url) return;
    languages[key] = url;
  };

  if (tr) addLanguage("tr-TR", tr);
  if (en) {
    addLanguage("en", en);
    addLanguage("en-US", en);
  }
  if (ar) addLanguage("ar", ar);

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

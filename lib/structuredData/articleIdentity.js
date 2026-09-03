import {
  BASE_SITE_URL,
  EDITOR_ID,
  ORGANIZATION_ID,
} from "@/lib/seo/schemaIds";

const ORGANIZATION_AUTHOR_NAMES = new Set([
  "Sahneva Teknik",
  "Sahneva Technical",
  "Sahneva Organizasyon",
  "Sahneva Organization",
  "Sahneva Event Operations Team",
  "Sahneva Technical Production Team",
]);
const HOME_URL = `${BASE_SITE_URL}/`;

/**
 * Article author references must carry enough identity data to stand alone.
 * Editorial, content and production teams share #editor; Sahneva's technical
 * organization names resolve to the primary #org identity.
 */
export function buildArticleAuthor(name) {
  const normalizedName = typeof name === "string" ? name.trim() : "";

  if (!normalizedName) {
    throw new TypeError("Article author name must be a non-empty string.");
  }

  return {
    "@type": "Organization",
    "@id": ORGANIZATION_AUTHOR_NAMES.has(normalizedName)
      ? ORGANIZATION_ID
      : EDITOR_ID,
    name: normalizedName,
    url: HOME_URL,
  };
}

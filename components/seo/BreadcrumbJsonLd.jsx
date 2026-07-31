import { buildBreadcrumbList, normalizeBaseUrl } from "@/lib/seo/breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";

export async function BreadcrumbJsonLd({ items, baseUrl, id }) {
  if (!items || items.length === 0) return null;

  const normalizedBaseUrl = normalizeBaseUrl(baseUrl);
  const data = buildBreadcrumbList({ baseUrl: normalizedBaseUrl, items, id });
  return <JsonLd data={data} />;
}

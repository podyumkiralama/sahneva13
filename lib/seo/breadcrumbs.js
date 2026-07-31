export function normalizeBaseUrl(url) {
  if (!url) return "";
  return url.replace(/\/$/, "");
}

/**
 * @param {object} input
 * @param {string} input.baseUrl
 * @param {{name: string, url: string}[]} input.items
 * @param {string} [input.id] Verildiginde BreadcrumbList'e @id yazilir; boylece
 *   ayni sayfadaki WebPage dugumu `breadcrumb` ile buna referans verebilir.
 *   Verilmediginde cikti eskisiyle bire bir ayni kalir.
 */
export function buildBreadcrumbList({ baseUrl, items, id }) {
  const normalizedBase = normalizeBaseUrl(baseUrl);
  const normalizedItems = (items || []).map((item) => {
    const isAbsolute = /^https?:\/\//i.test(item.url);
    const normalizedUrl = isAbsolute
      ? item.url
      : `${normalizedBase}${item.url.startsWith("/") ? "" : "/"}${item.url.replace(/^\//, "")}`;

    return {
      ...item,
      url: normalizedUrl,
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(id ? { "@id": id } : {}),
    itemListElement: normalizedItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

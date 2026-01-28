const XML_HEADER = '<?xml version="1.0" encoding="UTF-8"?>';

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const buildUrl = (entry) => {
  const images = (entry.images ?? [])
    .map((image) => `    <image:image><image:loc>${escapeXml(image)}</image:loc></image:image>`)
    .join("\n");

  const videos = (entry.videos ?? [])
    .map(
      (video) => `    <video:video>
      <video:thumbnail_loc>${escapeXml(video.thumbnail_loc)}</video:thumbnail_loc>
      <video:title>${escapeXml(video.title)}</video:title>
      <video:description>${escapeXml(video.description)}</video:description>
      <video:content_loc>${escapeXml(video.content_loc)}</video:content_loc>
      <video:player_loc>${escapeXml(video.player_loc)}</video:player_loc>
      <video:publication_date>${escapeXml(video.publication_date)}</video:publication_date>
    </video:video>`
    )
    .join("\n");

  return [
    "  <url>",
    `    <loc>${escapeXml(entry.url)}</loc>`,
    entry.lastMod ? `    <lastmod>${escapeXml(entry.lastMod)}</lastmod>` : null,
    entry.changeFrequency ? `    <changefreq>${escapeXml(entry.changeFrequency)}</changefreq>` : null,
    typeof entry.priority === "number"
      ? `    <priority>${entry.priority.toFixed(1)}</priority>`
      : null,
    images || null,
    videos || null,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
};

export function buildUrlSet(entries) {
  const hasImages = entries.some((entry) => entry.images?.length);
  const hasVideos = entries.some((entry) => entry.videos?.length);
  const namespaces = [
    "xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"",
    hasImages ? "xmlns:image=\"http://www.google.com/schemas/sitemap-image/1.1\"" : null,
    hasVideos ? "xmlns:video=\"http://www.google.com/schemas/sitemap-video/1.1\"" : null,
  ]
    .filter(Boolean)
    .join(" ");

  const body = entries.map(buildUrl).join("\n");
  return `${XML_HEADER}\n<urlset ${namespaces}>\n${body}\n</urlset>`;
}

export function buildSitemapIndex(items) {
  const body = items
    .map(
      (item) => `  <sitemap>
    <loc>${escapeXml(item.loc)}</loc>
    ${item.lastMod ? `<lastmod>${escapeXml(item.lastMod)}</lastmod>` : ""}
  </sitemap>`
    )
    .join("\n");

  return `${XML_HEADER}\n<sitemapindex xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n${body}\n</sitemapindex>`;
}

export const getLatestLastMod = (entries) => {
  const latest = entries.reduce((acc, entry) => {
    const value = entry.lastMod ? new Date(entry.lastMod).getTime() : 0;
    return value > acc ? value : acc;
  }, 0);

  return latest ? new Date(latest).toISOString() : undefined;
};

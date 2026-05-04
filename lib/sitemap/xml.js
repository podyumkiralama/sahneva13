const XML_HEADER = '<?xml version="1.0" encoding="UTF-8"?>';
const XSL_STYLESHEET =
  '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>';

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");

const toDateOnly = (value) => {
  if (!value) return undefined;
  const raw = String(value).trim();
  const direct = raw.match(/^(\d{4}-\d{2}-\d{2})/);
  if (direct) return direct[1];

  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return undefined;

  return parsed.toISOString().slice(0, 10);
};

const normalizeUrlForCompare = (value) => {
  if (!value) return null;

  try {
    const url = new URL(String(value).trim());
    url.hash = "";
    url.search = "";
    const pathname = url.pathname.length > 1 ? url.pathname.replace(/\/$/, "") : url.pathname;
    return `${url.origin}${pathname}`.toLowerCase();
  } catch {
    return String(value).trim().replace(/\/$/, "").toLowerCase();
  }
};

const isSameUrl = (a, b) =>
  normalizeUrlForCompare(a) === normalizeUrlForCompare(b);

const isLikelyMediaUrl = (value) =>
  /\.(mp4|mov|m4v|webm|mpeg|mpg|avi)(?:$|[?#])/i.test(String(value ?? ""));

const isLikelyEmbedUrl = (value) => {
  const raw = String(value ?? "").trim();
  if (!raw) return false;

  try {
    const url = new URL(raw);
    const host = url.hostname.replace(/^www\./, "");
    const pathname = url.pathname.toLowerCase();

    if (host === "youtube.com" || host === "youtube-nocookie.com") {
      return pathname.startsWith("/embed/");
    }

    if (host === "player.vimeo.com") return pathname.startsWith("/video/");
    if (host === "dailymotion.com") return pathname.startsWith("/embed/");
  } catch {
    return false;
  }

  return false;
};

const normalizeVideo = (video, pageUrl) => {
  const contentLoc = video.content_loc?.trim();
  const playerLoc = video.player_loc?.trim();
  const validContentLoc =
    contentLoc && isLikelyMediaUrl(contentLoc) && !isSameUrl(contentLoc, pageUrl)
      ? contentLoc
      : null;
  const validPlayerLoc =
    playerLoc && isLikelyEmbedUrl(playerLoc) && !isSameUrl(playerLoc, pageUrl)
      ? playerLoc
      : null;

  if (!validContentLoc && !validPlayerLoc) return null;

  return {
    ...video,
    content_loc: validContentLoc,
    player_loc: validPlayerLoc,
  };
};

const buildVideo = (video) => {
  const inner = [
    `<video:thumbnail_loc>${escapeXml(video.thumbnail_loc)}</video:thumbnail_loc>`,
    `<video:title>${escapeXml(video.title)}</video:title>`,
    `<video:description>${escapeXml(video.description)}</video:description>`,
    video.content_loc ? `<video:content_loc>${escapeXml(video.content_loc)}</video:content_loc>` : null,
    video.player_loc ? `<video:player_loc>${escapeXml(video.player_loc)}</video:player_loc>` : null,
    video.publication_date ? `<video:publication_date>${escapeXml(video.publication_date)}</video:publication_date>` : null,
  ]
    .filter(Boolean)
    .join("\n      ");

  return `    <video:video>\n      ${inner}\n    </video:video>`;
};

const buildUrl = (entry) => {
  const images = (entry.images ?? [])
    .map((image) => {
      const loc = typeof image === "string" ? image : image.loc;
      const title = typeof image === "object" ? image.title : null;
      const caption = typeof image === "object" ? image.caption : null;
      const inner = [
        `<image:loc>${escapeXml(loc)}</image:loc>`,
        title ? `<image:title>${escapeXml(title)}</image:title>` : null,
        caption ? `<image:caption>${escapeXml(caption)}</image:caption>` : null,
      ]
        .filter(Boolean)
        .join("");
      return `    <image:image>${inner}</image:image>`;
    })
    .join("\n");

  const videos = (entry.videos ?? [])
    .map((video) => normalizeVideo(video, entry.url))
    .filter(Boolean)
    .map(buildVideo)
    .join("\n");

  return [
    "  <url>",
    `    <loc>${escapeXml(entry.url)}</loc>`,
    entry.lastMod ? `    <lastmod>${escapeXml(toDateOnly(entry.lastMod) ?? entry.lastMod)}</lastmod>` : null,
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
  const hasVideos = entries.some((entry) =>
    (entry.videos ?? []).some((video) => normalizeVideo(video, entry.url))
  );
  const namespaces = [
    'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    hasImages ? 'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"' : null,
    hasVideos ? 'xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"' : null,
  ]
    .filter(Boolean)
    .join(" ");

  const body = entries.map(buildUrl).join("\n");
  return `${XML_HEADER}\n${XSL_STYLESHEET}\n<urlset ${namespaces}>\n${body}\n</urlset>`;
}

export function buildSitemapIndex(items) {
  const body = items
    .map(
      (item) => `  <sitemap>\n    <loc>${escapeXml(item.loc)}</loc>\n    ${item.lastMod ? `<lastmod>${escapeXml(toDateOnly(item.lastMod) ?? item.lastMod)}</lastmod>` : ""}\n  </sitemap>`
    )
    .join("\n");

  return `${XML_HEADER}\n${XSL_STYLESHEET}\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>`;
}

export const getLatestLastMod = (entries) => {
  const normalized = entries
    .map((entry) => toDateOnly(entry.lastMod))
    .filter(Boolean)
    .sort();

  return normalized.length ? normalized[normalized.length - 1] : undefined;
};

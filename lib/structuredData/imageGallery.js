const absUrl = (origin, src) => {
  if (!src) return null;
  if (/^https?:\/\//i.test(src)) return src;
  return `${origin}${String(src).startsWith("/") ? src : `/${src}`}`;
};

const getImageSrc = (image) => {
  if (!image) return null;
  if (typeof image === "string") return image;
  return image.src || image.url || image.image || null;
};

const getImageText = (image, index, fallbackName) => {
  if (typeof image === "string") return `${fallbackName} görseli ${index + 1}`;
  return image.alt || image.caption || image.title || image.name || `${fallbackName} görseli ${index + 1}`;
};

export function buildImageGallerySchema({
  images = [],
  origin,
  pageUrl,
  serviceId,
  webPageId,
  galleryId = `${pageUrl}#image-gallery`,
  name = "Hizmet galeri görselleri",
  limit = 5,
}) {
  const normalized = images
    .map((image, index) => {
      const src = getImageSrc(image);
      const url = absUrl(origin, src);
      if (!url) return null;

      const text = getImageText(image, index, name);
      return {
        url,
        text,
      };
    })
    .filter(Boolean)
    .slice(0, limit);

  const imageNodes = normalized.map((image, index) => ({
    "@type": "ImageObject",
    "@id": `${pageUrl}#gallery-image-${index + 1}`,
    url: image.url,
    contentUrl: image.url,
    caption: image.text,
    name: image.text,
    inLanguage: "tr-TR",
    representativeOfPage: index === 0,
    ...(serviceId ? { about: { "@id": serviceId } } : {}),
    ...(webPageId ? { mainEntityOfPage: { "@id": webPageId } } : {}),
  }));

  const galleryNode = imageNodes.length
    ? {
        "@type": "CollectionPage",
        "@id": galleryId,
        name,
        url: `${pageUrl}#projeler`,
        inLanguage: "tr-TR",
        ...(webPageId ? { isPartOf: { "@id": webPageId } } : {}),
        ...(serviceId ? { about: { "@id": serviceId } } : {}),
        hasPart: imageNodes.map((image) => ({ "@id": image["@id"] })),
      }
    : null;

  return {
    galleryId,
    galleryNode,
    imageNodes,
    imageUrls: normalized.map((image) => image.url),
  };
}

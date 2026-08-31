import { getHomeResponsiveImage } from "@/lib/homeResponsiveImages";

const FILL_STYLE = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  color: "transparent",
};

const PICTURE_STYLE = {
  ...FILL_STYLE,
  display: "block",
};

/**
 * Direct, pre-generated responsive image for quota-safe static assets.
 *
 * The site intentionally keeps Next's metered image transformer disabled.
 * This component restores real browser `srcset` selection for the audited
 * Turkish-homepage images without sending a request to /_next/image.
 */
export default function StaticResponsiveImage({
  src,
  alt = "",
  sizes,
  className,
  style,
  priority = false,
  loading = "lazy",
  fetchPriority,
  decoding = "async",
  ...imageProps
}) {
  const image = getHomeResponsiveImage(src);

  if (!image) {
    throw new Error(`Responsive image manifest entry is missing for: ${src}`);
  }

  const fallback = image.variants.at(-1);
  const srcSet = image.variants
    .map((variant) => `${variant.src} ${variant.width}w`)
    .join(", ");
  const avifSrcSet = image.avifVariants
    .map((variant) => `${variant.src} ${variant.width}w`)
    .join(", ");

  return (
    // Native picture/srcset is deliberate: global Next optimization is
    // disabled to prevent Vercel quota failures. Browsers with AVIF support
    // receive the smaller static source; WebP remains the universal fallback.
    <picture style={PICTURE_STYLE}>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <img
        {...imageProps}
        src={fallback.src}
        srcSet={srcSet}
        sizes={sizes}
        width={image.width}
        height={image.height}
        alt={alt}
        className={className}
        style={{ ...FILL_STYLE, ...style }}
        loading={priority ? "eager" : loading}
        fetchPriority={priority ? "high" : fetchPriority}
        decoding={decoding}
      />
    </picture>
  );
}

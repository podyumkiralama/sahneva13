/**
 * Blog segment layout (Next.js App Router)
 * - Normalizes all images inside blog routes to a consistent visual size
 * - Prevents overly wide images from breaking the reading rhythm
 *
 * Place this file at: app/(tr)/blog/layout.jsx in your repo.
 */
export default function BlogSegmentLayout({ children }) {
  return (
    <>
      <div className="blog-scope">{children}</div>

      <style jsx global>{`
        /* Make images in blog pages consistent */
        .blog-scope img {
          width: 100% !important;
          max-width: 900px !important;
          height: auto !important;
          display: block !important;
          margin: 40px auto !important;
          border-radius: 16px !important;
        }

        /* If a page has a hero wrapper, allow a bit wider */
        .blog-scope .blog-hero img,
        .blog-scope [data-blog-hero] img {
          max-width: 1200px !important;
          margin-top: 24px !important;
          margin-bottom: 40px !important;
        }
      `}</style>
    </>
  );
}

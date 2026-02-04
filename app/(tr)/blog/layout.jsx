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
    </>
  );
}

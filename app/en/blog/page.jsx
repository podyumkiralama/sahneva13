// app/en/blog/page.jsx
import Link from "next/link";
import { readdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import BlogList from "@/components/blog/BlogList.client";
import JsonLd from "@/components/seo/JsonLd";
import { normalizeBaseUrl } from "@/lib/seo/breadcrumbs";
import { getLastModifiedForFile } from "@/lib/seoLastModified";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { buildAlternatesForPath } from "@/lib/seo/alternates";
import { BLOG_PUBLISHED_AT } from "@/lib/sitemap/data";
/* ================== RUNTIME & ISR ================== */
export const runtime = "nodejs";
export const revalidate = 3600;

/* ================== CONSTANTS ================== */
const ORIGIN = "https://www.sahneva.com";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? ORIGIN;

function getBaseUrl() {
  return normalizeBaseUrl(SITE_URL || ORIGIN);
}

/* ================== META DATA ================== */
export const metadata = {
  title: "Blog | Event & Organization Guides",
  description:
    "Expert guides on corporate event management, stage rental, LED screen technology, sound and lighting systems.",
  // /blog ile karsilikli esdeger — bkz. lib/i18n/pageEquivalents.js. Dil kodu
  // "en-US" degil "en": grubun Turkce uyesi de "en" ile isaret ediyor ve
  // karsiliklilik ancak ayni kodla kurulur.
  alternates: buildAlternatesForPath("/en/blog"),
  openGraph: {
    title: "Sahneva | Event Technologies Guide",
    description:
      "Up-to-date blog posts from the Sahneva team on corporate events and technical equipment.",
    url: `${getBaseUrl()}/en/blog`,
    type: "website",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: `${ORIGIN}/img/blog/default.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva – event technologies and organization guides blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahneva Blog | Event Technologies and Organization Guides",
    description:
      "Expert guides on corporate event management, stage rental, LED screen technology, sound and lighting systems.",
    images: [`${ORIGIN}/img/blog/default.webp`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

/* ================== HELPERS ================== */
function safeDateString(date) {
  if (!date) return null;

  const raw = String(date).trim();
  if (!raw) return null;

  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    return `${raw}T00:00:00+03:00`;
  }

  const d = new Date(raw);
  return Number.isNaN(d.getTime()) ? null : raw;
}

function normalizePostMeta(slug, rawMeta = {}) {
  const fallbackTitle = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const ogImage = Array.isArray(rawMeta?.openGraph?.images)
    ? rawMeta.openGraph.images[0]
    : null;
  const ogImageUrl =
    typeof ogImage === "string"
      ? ogImage
      : typeof ogImage?.url === "string"
        ? ogImage.url
        : null;
  const imageFromOg = ogImageUrl
    ? ogImageUrl.replace(/^https?:\/\/[^/]+/i, "")
    : null;

  return {
    slug,
    title: rawMeta.title || fallbackTitle,
    description: rawMeta.description || "No description entered for this article.",
    date: safeDateString(rawMeta.date),
    image: rawMeta.image || imageFromOg || "/img/blog/default.webp",
    category: rawMeta.category || "General",
    readTime: rawMeta.readTime || "3 min read",
    draft: rawMeta.draft === true,
    author: rawMeta.author || "Sahneva Editor",
    modifiedDate: rawMeta.modifiedDate || null,
  };
}

/* ================== GET BLOG POSTS ================== */
async function getBlogPosts() {
  try {
    const blogDir = path.join(process.cwd(), "app", "en", "blog");

    if (!existsSync(blogDir)) {
      console.warn(`[Blog] Directory not found: ${blogDir}`);
      return [];
    }

    const items = await readdir(blogDir, { withFileTypes: true });
    const posts = [];

    for (const item of items) {
      if (!item.isDirectory()) continue;

      const postSlug = item.name;

      if (
        postSlug.startsWith(".") ||
        postSlug.startsWith("_") ||
        postSlug === "api"
      ) {
        continue;
      }

      const pageJsPath = path.join(blogDir, postSlug, "page.js");
      const pageJsxPath = path.join(blogDir, postSlug, "page.jsx");
      if (!existsSync(pageJsPath) && !existsSync(pageJsxPath)) continue;

      try {
        const postModule = await import(`./${postSlug}/page`);
        const postMetadata = postModule?.metadata || {};
        const fileRelativePath = existsSync(pageJsxPath)
          ? `app/en/blog/${postSlug}/page.jsx`
          : `app/en/blog/${postSlug}/page.js`;
        const modifiedDate = `${getLastModifiedForFile(fileRelativePath, "2026-02-01")}T00:00:00+03:00`;
        const publishedDate =
          safeDateString(postMetadata.date) ?? BLOG_PUBLISHED_AT[postSlug] ?? null;
        const normalized = normalizePostMeta(postSlug, {
          ...postMetadata,
          date: publishedDate,
          modifiedDate,
        });
        if (normalized.draft) continue;

        posts.push(normalized);
      } catch (error) {
        console.warn(`[Blog] Error reading ${postSlug}.`, error);
        continue;
      }
    }

    posts.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });
    return posts;
  } catch (error) {
    console.error("[Blog] Critical read error:", error);
    return [];
  }
}

/* ================== JSON-LD ================== */
function BlogJsonLd({ posts, baseUrl }) {
  if (!posts?.length) return null;

  const site = String(baseUrl || "").replace(/\/$/, "");
  const orgId = `${site}/#org`;
  const websiteId = `${site}/#website`;
  const blogUrl = `${site}/en/blog`;
  const blogId = `${blogUrl}#blog`;
  const breadcrumbId = `${blogUrl}#breadcrumb`;

  const title =
    typeof metadata?.title === "string"
      ? metadata.title
      : metadata?.title?.default || "Sahneva Blog";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${blogUrl}#webpage`,
        url: blogUrl,
        name: title,
        description: metadata?.description,
        inLanguage: "en-US",
        isPartOf: { "@id": websiteId },
        publisher: { "@id": orgId },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: { "@id": blogId },
      },
      {
        "@type": "Blog",
        "@id": blogId,
        url: blogUrl,
        name: title,
        description: metadata?.description,
        publisher: { "@id": orgId },
        inLanguage: "en-US",
        mainEntityOfPage: { "@id": `${blogUrl}#webpage` },
        blogPost: posts.map((post) => ({
          "@id": `${blogUrl}/${post.slug}#blogposting`,
        })),
      },

      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${site}/en`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: blogUrl,
          },
        ],
      },
    ],
  };

  return <JsonLd data={jsonLd} suppressHydrationWarning />;
}

/* ================== MAIN PAGE ================== */
export default async function BlogPage() {
  const posts = await getBlogPosts();
  const hasPosts = posts.length > 0;
  const baseUrl = getBaseUrl();

  return (
    <div className="bg-gray-50 min-h-screen">
      <BlogJsonLd posts={posts} baseUrl={baseUrl} />

      <section className="relative bg-[#0f172a] text-white py-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Sahneva{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Blog
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            The latest trends in the world of event technologies, technical guides and organization tips.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-12 relative z-20 pb-20">
        <div className="bg-white rounded-xl shadow-lg p-4 mb-12 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-12 border border-gray-100">
          <div className="text-center">
            <span className="block text-2xl font-bold text-violet-600">
              {posts.length}
            </span>
            <span className="text-xs text-gray-600 uppercase tracking-wider font-semibold">
              Articles
            </span>
          </div>
          <div className="hidden md:block w-px h-10 bg-gray-200" />
          <div className="text-center">
            <span className="block text-2xl font-bold text-purple-600">
              {hasPosts ? "Active" : "-"}
            </span>
            <span className="text-xs text-gray-600 uppercase tracking-wider font-semibold">
              Status
            </span>
          </div>
        </div>

        {hasPosts ? (
          <BlogList posts={posts} locale="en" />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-gray-300 text-center">
            <div className="text-6xl mb-4 opacity-50">📝</div>
            <h3 className="text-xl font-semibold text-gray-900">No Articles Yet</h3>
            <p className="text-gray-600 mt-2">
              Blog content is being prepared, please check back later.
            </p>
            <Link href="/en" className="mt-6 text-violet-600 hover:underline">
              Go to Homepage
            </Link>
          </div>
        )}

        <div className="mt-24 bg-violet-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Follow Our Latest Insights
            </h2>
            <p className="text-violet-100 mb-8">
              Contact the Sahneva team for information about our latest guides and event
              industry insights.
            </p>

            <Link
              href="/en/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-violet-900 shadow-lg transition-colors hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-violet-900"
            >
              Contact Our Team
            </Link>
            <p className="mt-4 text-sm text-violet-100">
              This opens our contact page; it does not create an automatic newsletter
              subscription.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

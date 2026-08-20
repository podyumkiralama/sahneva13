import Image from "next/image";
import Link from "next/link";
import { readdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const FALLBACK_IMAGE = "/img/blog/default.webp";
const MAX_ITEMS = 3;

// Her locale kendi blog klasorunden okur; EN yazilarin altinda TR kartlar
// cikmasin diye kaynak dizin ve link oneki birlikte secilir.
const LOCALE_SOURCES = {
  tr: {
    dir: ["app", "(tr)", "blog"],
    basePath: "/blog",
    heading: "Diğer yazılara da göz atın",
    allPosts: "Tüm yazılar",
    fallbackDescription: "Bu makale için açıklama girilmemiş.",
    fallbackCategory: "Genel",
    fallbackReadTime: "3 dk okuma",
    fallbackAuthor: "Sahneva Editör",
  },
  en: {
    dir: ["app", "en", "blog"],
    basePath: "/en/blog",
    heading: "Explore more articles",
    allPosts: "All posts",
    fallbackDescription: "No description entered for this article.",
    fallbackCategory: "General",
    fallbackReadTime: "3 min read",
    fallbackAuthor: "Sahneva Editor",
  },
};

function safeDateString(date) {
  if (!date) return null;
  const d = new Date(date);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

function normalizeKeywords(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.map((item) => String(item).toLowerCase());
  return String(value)
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function normalizePostMeta(slug, rawMeta = {}, source = LOCALE_SOURCES.tr) {
  const fallbackTitle = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    slug,
    title: rawMeta.title || fallbackTitle,
    description: rawMeta.description || source.fallbackDescription,
    date: safeDateString(rawMeta.date),
    image: rawMeta.image || FALLBACK_IMAGE,
    category: rawMeta.category || source.fallbackCategory,
    readTime: rawMeta.readTime || source.fallbackReadTime,
    draft: rawMeta.draft === true,
    author: rawMeta.author || source.fallbackAuthor,
    keywords: normalizeKeywords(rawMeta.keywords),
  };
}

async function importPostModule(locale, postSlug) {
  // Sablon degiskeni bundler'in context modulu uretebilmesi icin sabit onekle
  // yaziliyor; tek bir birlesik yol kullanilirsa iki blog agaci da cozulmez.
  if (locale === "en") {
    return import(`@/app/en/blog/${postSlug}/page`);
  }
  return import(`@/app/(tr)/blog/${postSlug}/page`);
}

async function getBlogPosts(locale, source) {
  const blogDir = path.join(process.cwd(), ...source.dir);

  if (!existsSync(blogDir)) {
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
      const postModule = await importPostModule(locale, postSlug);
      const postMetadata = postModule?.metadata || {};
      const normalized = normalizePostMeta(postSlug, postMetadata, source);
      if (normalized.draft) continue;
      posts.push(normalized);
    } catch (error) {
      console.warn(`[SmartBlogSuggestions] ${postSlug} okunamadı.`, error);
    }
  }

  return posts;
}

function scorePost(post, currentCategory, currentKeywords) {
  let score = 0;

  if (currentCategory && post.category === currentCategory) {
    score += 3;
  }

  if (currentKeywords?.length) {
    const keywords = new Set(currentKeywords.map((item) => item.toLowerCase()));
    const overlap = post.keywords.filter((kw) => keywords.has(kw));
    score += overlap.length * 2;
  }

  return score;
}

export default async function SmartBlogSuggestions({
  locale = "tr",
  currentSlug,
  currentCategory,
  currentKeywords,
  heading,
}) {
  if (!currentSlug) return null;

  const source = LOCALE_SOURCES[locale] ?? LOCALE_SOURCES.tr;
  const resolvedHeading = heading ?? source.heading;
  const posts = await getBlogPosts(locale, source);
  const filtered = posts.filter((post) => post.slug !== currentSlug);

  const scored = filtered.map((post) => ({
    ...post,
    score: scorePost(post, currentCategory, currentKeywords),
  }));

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  const items = scored.slice(0, MAX_ITEMS);

  if (!items.length) return null;

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-900">{resolvedHeading}</h2>
        <Link href={source.basePath} className="text-sm text-blue-600 hover:text-blue-700">
          {source.allPosts}
        </Link>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((post) => (
          <Link
            key={post.slug}
            href={`${source.basePath}/${post.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5"
          >
            <div className="relative aspect-[16/9] w-full bg-slate-100">
              <Image
                src={post.image || FALLBACK_IMAGE}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
              />
            </div>
            <div className="flex h-full flex-col p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {post.category}
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-blue-700">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                {post.description}
              </p>
              <div className="mt-4 text-xs text-slate-500">
                {post.readTime}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

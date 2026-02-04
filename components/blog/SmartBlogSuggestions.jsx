import Image from "next/image";
import Link from "next/link";
import { readdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const FALLBACK_IMAGE = "/img/blog/default.webp";
const MAX_ITEMS = 3;

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

function normalizePostMeta(slug, rawMeta = {}) {
  const fallbackTitle = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return {
    slug,
    title: rawMeta.title || fallbackTitle,
    description: rawMeta.description || "Bu makale için açıklama girilmemiş.",
    date: safeDateString(rawMeta.date),
    image: rawMeta.image || FALLBACK_IMAGE,
    category: rawMeta.category || "Genel",
    readTime: rawMeta.readTime || "3 dk okuma",
    draft: rawMeta.draft === true,
    author: rawMeta.author || "Sahneva Editör",
    keywords: normalizeKeywords(rawMeta.keywords),
  };
}

async function getBlogPosts() {
  const blogDir = path.join(process.cwd(), "app", "(tr)", "blog");

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
      const postModule = await import(`@/app/(tr)/blog/${postSlug}/page`);
      const postMetadata = postModule?.metadata || {};
      const normalized = normalizePostMeta(postSlug, postMetadata);
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
  currentSlug,
  currentCategory,
  currentKeywords,
  heading = "Diğer yazılara da göz atın",
}) {
  if (!currentSlug) return null;

  const posts = await getBlogPosts();
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
        <h2 className="text-xl font-semibold text-slate-900">{heading}</h2>
        <Link href="/blog" className="text-sm text-blue-600 hover:text-blue-700">
          Tüm yazılar
        </Link>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
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

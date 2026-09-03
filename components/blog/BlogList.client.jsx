"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const COPY = {
  tr: {
    allCategories: "Tümü",
    basePath: "/blog",
    categoryLabel: "Blog kategorileri",
    dateLocale: "tr-TR",
    emptyDescription: "Seçilen kategori için yayınlanmış blog içeriği bulunmuyor.",
    emptyTitle: "Yazı Bulunamadı",
    loadMore: "Daha Fazla Yazı Göster",
    readMore: "Devamını Oku",
  },
  en: {
    allCategories: "All",
    basePath: "/en/blog",
    categoryLabel: "Blog categories",
    dateLocale: "en-GB",
    emptyDescription: "No published articles were found in the selected category.",
    emptyTitle: "No Articles Found",
    loadMore: "Show More Articles",
    readMore: "Read More",
  },
};
const INITIAL_VISIBLE_COUNT = 9;
const PAGE_SIZE = 6;

function formatDate(date, locale) {
  if (!date) return null;

  return new Date(date).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    timeZone: "Europe/Istanbul",
    year: "numeric",
  });
}

function BlogCard({ post, index, copy }) {
  const formattedDate = formatDate(post.date, copy.dateLocale);
  const shouldPrefetch = index < 3;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-xl">
      <Link
        href={`${copy.basePath}/${post.slug}`}
        prefetch={shouldPrefetch}
        className="flex h-full flex-col"
        aria-label={post.title}
      >
        <div className="relative h-56 w-full overflow-hidden bg-gray-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index === 0}
            quality={72}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"
            aria-hidden="true"
          />
          <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-violet-800 shadow-sm backdrop-blur">
            {post.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
            {formattedDate ? (
              <time
                dateTime={post.date}
                className="flex items-center gap-1"
                suppressHydrationWarning
              >
                {formattedDate}
              </time>
            ) : null}
            {formattedDate ? (
              <span className="h-1 w-1 rounded-full bg-gray-400" aria-hidden="true" />
            ) : null}
            <span>{post.readTime}</span>
          </div>

          <h2 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-violet-600">
            {post.title}
          </h2>

          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
            {post.description}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
            <span className="text-sm font-semibold text-violet-600 group-hover:underline">
              {copy.readMore}
            </span>
            <span
              className="text-lg text-gray-600 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function BlogList({ posts, locale = "tr" }) {
  const copy = COPY[locale] ?? COPY.tr;
  const [activeCategory, setActiveCategory] = useState(copy.allCategories);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(posts.map((post) => post.category).filter(Boolean));
    return [copy.allCategories, ...Array.from(uniqueCategories)];
  }, [copy.allCategories, posts]);

  const filteredPosts = useMemo(() => {
    if (activeCategory === copy.allCategories) return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, copy.allCategories, posts]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  return (
    <div className="space-y-8">
      <div
        className="flex flex-wrap items-center justify-center gap-3"
        role="group"
        aria-label={copy.categoryLabel}
      >
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => handleCategoryChange(category)}
              className={`min-h-[44px] rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-violet-600 bg-violet-600 text-white shadow-md"
                  : "border-gray-200 bg-white text-gray-700 hover:border-violet-300 hover:text-violet-700"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {visiblePosts.length ? (
        <>
          <div
            id="blog-post-grid"
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            aria-live="polite"
          >
            {visiblePosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} copy={copy} />
            ))}
          </div>

          {hasMore ? (
            <div className="flex justify-center pt-4">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                aria-controls="blog-post-grid"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg transition-colors hover:bg-violet-700 focus-ring"
              >
                {copy.loadMore}
              </button>
            </div>
          ) : null}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white py-20 text-center">
          <h3 className="text-xl font-semibold text-gray-900">{copy.emptyTitle}</h3>
          <p className="mt-2 text-gray-600">
            {copy.emptyDescription}
          </p>
        </div>
      )}
    </div>
  );
}

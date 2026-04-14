import { projects as projectMetadata } from "./data";

function humanizeSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

function getCover(meta = {}) {
  if (meta.cover) return meta.cover;
  if (Array.isArray(meta.images) && meta.images[0]) return meta.images[0];
  return null;
}

export function getProjects() {
  const results = projectMetadata.map((meta) => ({
    slug: meta.slug,
    title: meta.title ?? humanizeSlug(meta.slug),
    excerpt: meta.excerpt ?? null,
    date: meta.date ?? meta.updatedAt ?? null,
    tags: meta.tags ?? [],
    cover: getCover(meta),
  }));

  return results.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });
}

export function getProjectSummary(slug) {
  const meta = projectMetadata.find((project) => project.slug === slug);
  if (!meta) return null;

  return {
    ...meta,
    cover: getCover(meta),
  };
}

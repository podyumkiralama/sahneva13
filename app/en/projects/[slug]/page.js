// app/en/projects/[slug]/page.js
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import JsonLd from "@/components/seo/JsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";
import { getVideoFactProps } from "@/lib/seo/projectVideoFacts";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import { getEnProject, getEnProjectSlugs } from "@/lib/enProjects";

const SITE_URL = BASE_SITE_URL;

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return getEnProjectSlugs().map((slug) => ({ slug }));
}

function getProjectOrThrow(slug) {
  const project = getEnProject(slug);
  if (!project) notFound();
  return project;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectOrThrow(slug);
  const path = `/en/projects/${project.slug}`;
  const url = `${SITE_URL}${path}`;
  const image = `${SITE_URL}${project.heroImage}`;
  // The layout title template only applies to `title`; social titles need the brand spelled out.
  const socialTitle = `${project.metaTitle} | Sahneva`;

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    keywords: project.keywords,
    alternates: buildLanguageAlternates({
      canonical: path,
      en: path,
      tr: project.trEquivalent,
      xDefault: path,
    }),
    openGraph: {
      type: "article",
      title: socialTitle,
      description: project.metaDescription,
      url,
      siteName: "Sahneva",
      locale: "en_US",
      images: [
        { url: image, width: 1200, height: 630, alt: project.heroAlt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: project.metaDescription,
      images: [image],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

function buildJsonLd(project) {
  const path = `/en/projects/${project.slug}`;
  const url = `${SITE_URL}${path}`;
  const image = `${SITE_URL}${project.heroImage}`;

  const graph = [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: project.title,
      description: project.metaDescription,
      image,
      datePublished: project.date,
      inLanguage: "en-US",
      author: { "@id": ORGANIZATION_ID },
      publisher: { "@id": ORGANIZATION_ID },
      isPartOf: { "@id": WEBSITE_ID },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      about: { "@id": ORGANIZATION_ID },
      keywords: project.keywords.join(", "),
    },
    {
      "@type": "CreativeWork",
      "@id": `${url}#project`,
      name: project.title,
      description: project.lead,
      url,
      inLanguage: "en-US",
      creator: { "@id": ORGANIZATION_ID },
      image: project.gallery
        ? project.gallery.map(([src]) => `${SITE_URL}${src}`)
        : [image],
    },
  ];

  if (project.video) {
    graph.push({
      "@type": "VideoObject",
      "@id": `${url}#video`,
      name: project.video.title,
      description: project.metaDescription,
      thumbnailUrl: project.video.thumbnailUrl,
      uploadDate: project.date,
      contentUrl: `https://www.youtube.com/watch?v=${project.video.id}`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${project.video.id}`,
      publisher: { "@id": ORGANIZATION_ID },
      ...getVideoFactProps(project.video.id),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export default async function EnProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectOrThrow(slug);

  const breadcrumbItems = [
    { name: "Home", url: `${SITE_URL}/en` },
    { name: "Projects", url: `${SITE_URL}/en/projects` },
    { name: project.shortTitle, url: `${SITE_URL}/en/projects/${project.slug}` },
  ];

  return (
    <div
      id="main"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0b0f1a] to-purple-900/20 text-white"
    >
      <JsonLd data={buildJsonLd(project)} />
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />

      {/* HERO */}
      <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden md:min-h-[460px]">
        <Image
          src={project.heroImage}
          alt={project.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-[#0b0f1a]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur">
            {project.category}
          </span>
          <h1 className="mt-6 text-3xl font-black leading-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
            {project.lead}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-20">
        {/* FACT TABLE */}
        <section aria-labelledby="project-facts" className="-mt-10 relative z-10">
          <h2 id="project-facts" className="sr-only">
            Project details
          </h2>
          <dl className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            {project.facts.map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-bold uppercase tracking-wide text-blue-200/80">
                  {label}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold leading-relaxed text-white/90">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* VIDEO */}
        {project.video && (
          <section aria-labelledby="project-video" className="mt-14">
            <h2
              id="project-video"
              className="mb-6 text-2xl font-bold md:text-3xl"
            >
              Project video
            </h2>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
              <LazyVideoEmbed
                videoId={project.video.id}
                title={project.video.title}
                thumbnailUrl={project.video.thumbnailUrl}
                locale="en"
                className="rounded-3xl"
              />
            </div>
          </section>
        )}

        {/* NARRATIVE */}
        <section aria-labelledby="project-approach" className="mt-14">
          <h2
            id="project-approach"
            className="mb-6 text-2xl font-bold md:text-3xl"
          >
            Production approach
          </h2>
          <div className="space-y-5">
            {project.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-white/80 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        {project.gallery && (
          <section aria-labelledby="project-gallery" className="mt-14">
            <h2
              id="project-gallery"
              className="mb-6 text-2xl font-bold md:text-3xl"
            >
              Project gallery
            </h2>
            <ul className="grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2">
              {project.gallery.map(([src, alt]) => (
                <li key={src}>
                  <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                        quality={72}
                      />
                    </div>
                    <figcaption className="px-4 py-3 text-sm leading-snug text-white/70">
                      {alt}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* SERVICES USED */}
        <section aria-labelledby="project-services" className="mt-14">
          <h2
            id="project-services"
            className="mb-6 text-2xl font-bold md:text-3xl"
          >
            Services used in this project
          </h2>
          <ul className="grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {project.services.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-2xl border border-white/10 bg-white/5 p-4 font-semibold text-white/90 transition hover:border-white/25 hover:bg-white/10"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {project.relatedReading && (
            <p className="mt-6 text-sm text-white/70">
              Read more:{" "}
              <Link
                href={project.relatedReading.href}
                className="font-semibold text-blue-300 underline underline-offset-4 hover:text-white"
              >
                {project.relatedReading.label}
              </Link>
            </p>
          )}
        </section>

        {/* ENTITY / CTA */}
        <section aria-labelledby="project-cta" className="mt-14">
          <h2 id="project-cta" className="sr-only">
            Request a quote
          </h2>
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 md:p-8">
            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              Sahneva is a Turkey-based event production company specializing in
              stage design, LED screen rental, professional audio systems,
              lighting and technical production services for corporate events,
              congresses and international organizations. If you are planning a
              similar production in Türkiye, we can scope it with you as your{" "}
              <Link
                href="/en/event-production-company-turkey"
                className="font-semibold text-cyan-200 underline underline-offset-4 hover:text-white"
              >
                local event production partner
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/en/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-violet-600 px-6 py-3 font-bold text-white shadow-lg transition hover:bg-violet-700"
              >
                Request a quote
              </Link>
              <Link
                href="/en/projects"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                All projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

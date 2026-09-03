import JsonLd from "@/components/seo/JsonLd";
import BlogList from "@/components/blog/BlogList.client";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { getBlogPosts } from "@/lib/blogPosts";
import { normalizeBaseUrl } from "@/lib/seo/breadcrumbs";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { buildAlternatesForPath } from "@/lib/seo/alternates";
export const revalidate = 3600;

const ORIGIN = "https://www.sahneva.com";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? ORIGIN;

function getBaseUrl() {
  return normalizeBaseUrl(SITE_URL || ORIGIN);
}

export const metadata = {
  title: "Blog | Etkinlik ve Organizasyon Rehberleri",
  description:
    "Kurumsal etkinlik yönetimi, sahne kiralama, LED ekran teknolojileri, ses-ışık sistemleri hakkında uzman rehberleri.",
  // Blog indeksi ile /en/blog karsilikli esdeger; ikisi daha once birbirini hic
  // tanimiyordu (TR yalnizca tr-TR, EN yalnizca en-US basiyordu) ve her ikisinin
  // x-default'u kendini gosteriyordu. Dil secici bunlari zaten esdeger sayiyordu.
  // Grup uyeligi lib/i18n/pageEquivalents.js'te tanimli.
  alternates: buildAlternatesForPath("/blog"),
  openGraph: {
    title: "Sahneva | Etkinlik Teknolojileri Rehberi",
    description:
      "Sahneva ekibinden kurumsal organizasyon ve teknik ekipmanlar üzerine güncel blog yazıları.",
    url: `${getBaseUrl()}/blog`,
    type: "website",
    locale: "tr_TR",
    siteName: "Sahneva",
    images: [
      {
        url: `${ORIGIN}/img/blog/default.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon - etkinlik teknolojileri ve organizasyon rehberleri blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahneva Blog | Etkinlik Teknolojileri ve Organizasyon Rehberleri",
    description:
      "Kurumsal etkinlik yönetimi, sahne kiralama, LED ekran teknolojileri, ses-ışık sistemleri hakkında uzman rehberleri.",
    images: [`${ORIGIN}/img/blog/default.webp`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

function BlogJsonLd({ posts, baseUrl }) {
  if (!posts?.length) return null;

  const site = String(baseUrl || "").replace(/\/$/, "");
  const orgId = `${site}/#org`;
  const websiteId = `${site}/#website`;
  const blogUrl = `${site}/blog`;
  const blogId = `${blogUrl}#blog`;
  const breadcrumbId = `${blogUrl}#breadcrumb`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${blogUrl}#webpage`,
        url: blogUrl,
        name: metadata.title,
        description: metadata.description,
        inLanguage: "tr-TR",
        isPartOf: { "@id": websiteId },
        publisher: { "@id": orgId },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: { "@id": blogId },
      },
      {
        "@type": "Blog",
        "@id": blogId,
        url: blogUrl,
        name: metadata.title,
        description: metadata.description,
        publisher: { "@id": orgId },
        inLanguage: "tr-TR",
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
            name: "Anasayfa",
            item: site,
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

export default function BlogPage() {
  const posts = getBlogPosts();
  const hasPosts = posts.length > 0;
  const baseUrl = getBaseUrl();

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogJsonLd posts={posts} baseUrl={baseUrl} />

      <PageHero
        breadcrumb={[{ label: "Ana Sayfa", href: "/" }, { label: "Blog" }]}
        eyebrow="Etkinlik teknolojileri günlüğü"
        title="Sahneva"
        titleAccent="Blog"
        description="Etkinlik teknolojileri dünyasındaki son trendler, teknik rehberler ve organizasyon ipuçları."
      />

      <section className="container relative z-20 mx-auto px-4 pb-20 pt-12">
        <div className="mx-auto mb-12 flex max-w-4xl flex-wrap items-center justify-center gap-6 rounded-xl border border-gray-100 bg-white p-4 shadow-lg md:gap-12">
          <div className="text-center">
            <span className="block text-2xl font-bold text-violet-600">
              {posts.length}
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-600">
              Makale
            </span>
          </div>
          <div className="hidden h-10 w-px bg-gray-200 md:block" />
          <div className="text-center">
            <span className="block text-2xl font-bold text-purple-600">
              {hasPosts ? "Aktif" : "-"}
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-600">
              Durum
            </span>
          </div>
        </div>

        <BlogList posts={posts} />

        <div className="relative mt-24 overflow-hidden rounded-2xl bg-violet-900 p-8 text-center text-white md:p-12">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Yeni İçerikleri Takip Edin
            </h2>
            <p className="mb-8 text-violet-100">
              Yeni rehberlerimiz ve etkinlik sektörü içeriklerimiz hakkında bilgi almak için
              Sahneva ekibiyle iletişime geçin.
            </p>

            <Link
              href="/iletisim"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-violet-900 shadow-lg transition-colors hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-violet-900"
            >
              İletişime Geçin
            </Link>
            <p className="mt-4 text-sm text-violet-100">
              Bu bağlantı iletişim sayfamızı açar; otomatik bülten aboneliği oluşturmaz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

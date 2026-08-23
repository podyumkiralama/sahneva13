import JsonLd from "@/components/seo/JsonLd";
import BlogList from "@/components/blog/BlogList.client";
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
  const editorId = `${site}/#editor`;
  const blogUrl = `${site}/blog`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${blogUrl}#blog`,
        url: blogUrl,
        name: metadata.title,
        description: metadata.description,
        publisher: { "@id": orgId },
        inLanguage: "tr-TR",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${blogUrl}#breadcrumb`,
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
      ...posts.map((post) => {
        const postUrl = `${blogUrl}/${post.slug}`;
        const img = String(post.image || "");
        const absImg = /^https?:\/\//i.test(img) ? img : `${site}${img}`;

        return {
          "@type": "BlogPosting",
          "@id": `${postUrl}#blogposting`,
          url: postUrl,
          headline: post.title,
          description: post.description,
          image: absImg,
          datePublished: post.date || undefined,
          dateModified: post.modifiedDate || post.date || undefined,
          inLanguage: "tr-TR",
          author: { "@id": editorId },
          publisher: { "@id": orgId },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": postUrl,
          },
          isPartOf: {
            "@id": `${blogUrl}#blog`,
          },
        };
      }),
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
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
              Bültenimize Katılın
            </h3>
            <p className="mb-8 text-violet-100">
              Yeni yazılarımızdan ve etkinlik sektörü haberlerinden ilk siz haberdar olun.
            </p>

            <form className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Bülten e-posta adresi
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="E-posta adresiniz"
                className="min-h-[48px] flex-1 rounded-lg px-5 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-400"
                required
              />
              <button
                type="submit"
                className="min-h-[48px] rounded-lg bg-violet-500 px-8 py-3 font-semibold shadow-lg transition-colors hover:bg-violet-400"
              >
                Abone Ol
              </button>
            </form>
            <p className="mt-4 text-sm text-violet-300 opacity-80">
              Spam yok, sadece değerli içerik.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

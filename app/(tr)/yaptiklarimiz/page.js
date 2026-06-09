import Link from "next/link";
import { ArrowRight, Clapperboard, PlayCircle, Sparkles } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";

export const revalidate = 86400;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_PATH = "/yaptiklarimiz";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "Yaptıklarımız | Sahne, LED Ekran ve Organizasyon Projeleri";
const PAGE_DESCRIPTION =
  "Sahneva tarafından tamamlanan sahne, LED ekran, podyum, ses, ışık, truss, çadır ve kurumsal organizasyon projelerini video çalışmalarıyla inceleyin.";
const PUBLISHED_AT = "2026-06-08T00:00:00+03:00";

const PROJECT_VIDEOS = [
  {
    id: "z4DqZERYXkM",
    title: "Konser Sahnesi ve LED Ekran Kurulumu",
    description:
      "Sahneva tarafından tamamlanan sahne, LED ekran, ses, ışık ve teknik prodüksiyon çalışmalarından seçilmiş proje videosu.",
    services: ["Sahne", "LED Ekran", "Ses", "Işık"],
    youtubeUrl: "https://www.youtube.com/watch?v=z4DqZERYXkM",
    thumbnailUrl: "https://i.ytimg.com/vi/z4DqZERYXkM/maxresdefault.jpg",
    uploadDate: "2026-06-05T00:00:00+03:00",
  },
  {
    id: "x-BYu0vgO2E",
    title: "SAHA 2026 Özel Etkinlik Alanı ve Fuar Prodüksiyonu",
    description:
      "Kapalı fuar alanında özel yapı, giriş aksı, zemin altyapısı, dome çadır ve ambiyans aydınlatmasıyla hazırlanan proje kurulumundan seçilmiş saha görüntüsü.",
    services: ["Dome Çadır", "Fuar Alanı", "Zemin", "Işık"],
    youtubeUrl: "https://www.youtube.com/watch?v=x-BYu0vgO2E",
    thumbnailUrl: "https://i.ytimg.com/vi/x-BYu0vgO2E/hqdefault.jpg",
    uploadDate: "2026-04-29T00:00:00+03:00",
  },
  {
    id: "JNzGlNzNRuk",
    title: "Hızlı Kurulum ve Teknik Hazırlık",
    description:
      "Dar zamanlı projelerde sahne, LED ekran ve teknik ekip koordinasyonunu gösteren gerçek uygulama kesiti.",
    services: ["Sahne", "LED Ekran", "Teknik Ekip", "Kurulum"],
    youtubeUrl: "https://www.youtube.com/watch?v=JNzGlNzNRuk",
    thumbnailUrl: "https://i.ytimg.com/vi/JNzGlNzNRuk/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
];

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "tr-TR": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: PROJECT_VIDEOS[0].thumbnailUrl,
        width: 1280,
        height: 720,
        alt: PROJECT_VIDEOS[0].title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [PROJECT_VIDEOS[0].thumbnailUrl],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

function YaptiklarimizStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: "tr-TR",
        datePublished: PUBLISHED_AT,
        dateModified: PUBLISHED_AT,
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#video-list` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Yaptıklarımız", item: PAGE_URL },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#video-list`,
        name: "Sahneva Yaptıklarımız Video Listesi",
        itemListElement: PROJECT_VIDEOS.map((video, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: { "@id": `${PAGE_URL}#video-${video.id}` },
        })),
      },
      ...PROJECT_VIDEOS.map((video) => ({
        "@type": "VideoObject",
        "@id": `${PAGE_URL}#video-${video.id}`,
        name: video.title,
        description: video.description,
        thumbnailUrl: [video.thumbnailUrl, `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`],
        embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`,
        contentUrl: video.youtubeUrl,
        url: video.youtubeUrl,
        ...(video.uploadDate ? { uploadDate: video.uploadDate } : {}),
        inLanguage: "tr-TR",
      })),
    ],
  };

  return <JsonLd data={jsonLd} />;
}

function SectionEyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-100 shadow-lg shadow-blue-950/20 backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(147,197,253,0.85)]" />
      {children}
    </div>
  );
}

function ProjectVideoCard({ video, index }) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-3 shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-300/35 hover:bg-white/[0.075]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.16),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-black">
        <LazyVideoEmbed
          videoId={video.id}
          title={video.title}
          thumbnailUrl={video.thumbnailUrl}
          className="rounded-[1.4rem]"
        />
        <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-xs font-black text-white backdrop-blur">
          <PlayCircle className="h-4 w-4" />
          Video {String(index + 1).padStart(2, "0")}
        </div>
      </div>
      <div className="relative p-5">
        <h2 className="text-xl font-black leading-tight text-white md:text-2xl">{video.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">{video.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Bu videodaki hizmet başlıkları">
          {video.services.map((service) => (
            <li key={service} className="rounded-full border border-blue-300/20 bg-blue-500/10 px-3 py-1 text-xs font-black text-blue-100">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function YaptiklarimizPage() {
  const featuredVideo = PROJECT_VIDEOS[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1120] text-white">
      <YaptiklarimizStructuredData />

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(14,165,233,0.16),transparent_28%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,auto,64px_64px,64px_64px]" aria-hidden="true" />
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-32 top-36 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/65">
            <Link href="/" className="transition hover:text-white">Ana Sayfa</Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-white">Yaptıklarımız</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionEyebrow>Video Proje Vitrini</SectionEyebrow>
              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Yaptığımız sahne, LED ekran ve organizasyon projeleri
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                Sahneva olarak tamamladığımız konser, festival, kurumsal etkinlik, podyum, ses, ışık, truss ve çadır kurulumlarından seçilmiş video çalışmalarını bu sayfada topluyoruz.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-xl shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Benzer Proje İçin Teklif Al
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/projeler"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white/15"
                >
                  Proje Detaylarını İncele
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl" aria-hidden="true" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="mb-3 flex items-center justify-between gap-3 px-2 pt-1 text-sm text-slate-300">
                  <span className="inline-flex items-center gap-2 font-black text-white">
                    <Sparkles className="h-4 w-4 text-blue-200" />
                    Öne Çıkan İlk Video
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-blue-100">Sahneva</span>
                </div>
                <LazyVideoEmbed
                  videoId={featuredVideo.id}
                  title={featuredVideo.title}
                  thumbnailUrl={featuredVideo.thumbnailUrl}
                  className="rounded-[1.5rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="video-gallery-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_20%,rgba(59,130,246,0.10),transparent_32%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionEyebrow>Video Galeri</SectionEyebrow>
              <h2 id="video-gallery-title" className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                Kurulumdan etkinlik anına kadar sahadan işler
              </h2>
            </div>
            <p className="max-w-lg rounded-3xl border border-white/10 bg-white/[0.055] px-5 py-4 text-sm leading-relaxed text-slate-300 backdrop-blur">
              Bu alan filtre kullanmadan, temiz bir proje vitrini olarak hazırlandı. Yeni video geldikçe sadece listeye eklenerek 15–20 videoluk güçlü bir referans sayfasına dönüşecek.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {PROJECT_VIDEOS.map((video, index) => (
              <ProjectVideoCard key={video.id} video={video} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-blue-950/20 backdrop-blur">
          <div className="relative p-8 md:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.16),transparent_35%)]" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-blue-100">
                  <Clapperboard className="h-4 w-4" />
                  Sahneva Proje Arşivi
                </div>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  Etkinliğiniz için benzer bir kurulum planlayalım.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                  Konser, festival, kurumsal etkinlik, lansman ve açık hava organizasyonları için sahne, LED ekran, podyum, ses, ışık, truss ve çadır çözümlerini tek elden projelendiriyoruz.
                </p>
              </div>
              <Link
                href="/iletisim"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-3 text-sm font-black text-white shadow-xl shadow-blue-950/25 transition hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Teklif Al
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

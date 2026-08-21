import Link from "next/link";
import { ArrowRight, Clapperboard } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/PageHero";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";
import { getVideoFactProps } from "@/lib/seo/projectVideoFacts";
import { ORGANIZATION_ID } from "@/lib/seo/schemaIds";
import VideoGallery from "./VideoGallery.client";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { buildAlternatesForPath } from "@/lib/seo/alternates";

export const revalidate = 86400;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_PATH = "/yaptiklarimiz";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "Yaptıklarımız | Sahne ve LED Ekran Projelerimiz";
const PAGE_DESCRIPTION =
  "Sahneva tarafından tamamlanan sahne, LED ekran, podyum, ses, ışık, truss, çadır ve kurumsal organizasyon projelerini video çalışmalarıyla inceleyin.";
const PUBLISHED_AT = "2026-06-08T00:00:00+03:00";

const PROJECT_VIDEOS = [
  {
    id: "z4DqZERYXkM",
    title: "Sıfır Atık Festivali Ana Sahne Prodüksiyonu",
    description:
      "Sıfır Atık Festivali ana sahnesi için hazırlanan sahne, LED ekran, ses ve ışık kurulumundan seçilmiş teknik prodüksiyon görüntüsü.",
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
    id: "CVdYV5BkF3k",
    title: "Dome Çadırda Lazer Projeksiyon Animasyonu",
    description:
      "Dome çadır tavanına yansıtılan lazer ve projeksiyon animasyonuyla hazırlanan etkinlik atmosferinden seçilmiş uygulama görüntüsü.",
    services: ["Dome Çadır", "Projeksiyon", "Lazer Animasyon", "Işık"],
    youtubeUrl: "https://www.youtube.com/shorts/CVdYV5BkF3k?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/CVdYV5BkF3k/hq2.jpg",
    uploadDate: "2026-01-21T03:16:02-08:00",
  },
  {
    id: "JNzGlNzNRuk",
    title: "Dicle Elektrik Batman Lansmanı Kurumsal Etkinlik Prodüksiyonu",
    description:
      "Dicle Elektrik Batman lansmanı için hazırlanan sahne, LED ekran ve teknik ekip koordinasyonunu gösteren kurumsal etkinlik prodüksiyonu kesiti.",
    services: ["Kurumsal Etkinlik", "Sahne", "LED Ekran", "Teknik Ekip"],
    youtubeUrl: "https://www.youtube.com/watch?v=JNzGlNzNRuk",
    thumbnailUrl: "https://i.ytimg.com/vi/JNzGlNzNRuk/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "4ygMbL4FDRc",
    title: "TÜBİTAK Uzay Bilim Çadırı - TEKNOFEST",
    description:
      "TEKNOFEST kapsamında hazırlanan TÜBİTAK Uzay Bilim Çadırı için çadır, etkinlik alanı ve saha prodüksiyonundan seçilmiş proje videosu.",
    services: ["Çadır", "TEKNOFEST", "Etkinlik Alanı", "Prodüksiyon"],
    youtubeUrl: "https://www.youtube.com/watch?v=4ygMbL4FDRc",
    thumbnailUrl: "https://i.ytimg.com/vi/4ygMbL4FDRc/hqdefault.jpg",
    uploadDate: "2025-10-28T00:48:40-07:00",
  },
  {
    id: "7yjrrEtWrr0",
    title: "TEKNOFEST Çadır İçi Dekorasyon ve Teknik Altyapı",
    description:
      "TEKNOFEST çadır alanında iç dekorasyon, ses sistemi, LED ekran, masa-sandalye yerleşimi ve etkinlik altyapısından seçilmiş uygulama görüntüsü.",
    services: ["Çadır", "Dekorasyon", "LED Ekran", "Ses Sistemi", "Masa Sandalye"],
    youtubeUrl: "https://www.youtube.com/shorts/7yjrrEtWrr0?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/7yjrrEtWrr0/hq2.jpg",
    uploadDate: "2025-10-17T16:56:21-07:00",
  },
  {
    id: "_9Q7v0ZL304",
    title: "TEKNOFEST Sahne, LED Ekran, Ses ve Işık Kurulumu",
    description:
      "TEKNOFEST etkinlik alanında sahne, LED ekran, ses, ışık ve teknik altyapı entegrasyonundan seçilmiş saha görüntüsü.",
    services: ["Sahne", "LED Ekran", "Ses", "Işık"],
    youtubeUrl: "https://www.youtube.com/watch?v=_9Q7v0ZL304",
    thumbnailUrl: "https://i.ytimg.com/vi/_9Q7v0ZL304/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "c72ILTyJH4A",
    title: "Fatih Belediyesi 5 Yılda Fatih'e Değer 400 Proje Etkinliği",
    description:
      "Fatih Belediyesi'nin 5 yılda Fatih'e değer katan 400 proje etkinliği için hazırlanan sahne, LED ekran, ses-ışık ve teknik prodüksiyon kurulumundan seçilmiş saha görüntüsü.",
    services: ["Kurumsal Etkinlik", "Sahne", "LED Ekran", "Ses-Işık"],
    youtubeUrl: "https://www.youtube.com/watch?v=c72ILTyJH4A",
    thumbnailUrl: "https://i.ytimg.com/vi/c72ILTyJH4A/hqdefault.jpg",
    uploadDate: "2026-04-29T00:00:00+03:00",
  },
  {
    id: "173gBurWSRQ",
    title: "PUBG Türkiye Finali 2023",
    description:
      "PUBG Türkiye Finali 2023 etkinliği için hazırlanan sahne, LED ekran, ses-ışık, podyum ve teknik prodüksiyon uygulamasından seçilmiş saha görüntüsü.",
    services: ["E-Spor", "Sahne", "LED Ekran", "Ses-Işık"],
    youtubeUrl: "https://www.youtube.com/watch?v=173gBurWSRQ",
    thumbnailUrl: "https://i.ytimg.com/vi/173gBurWSRQ/hqdefault.jpg",
    uploadDate: "2023-12-01T00:00:00+03:00",
  },
  {
    id: "1R5Av0x5ouA",
    title: "PUBG Sahne, LED Ekran ve Işık Provaları",
    description:
      "PUBG etkinliği için hazırlanan sahne, LED ekran ve ışık provalarından seçilmiş teknik prova görüntüsü.",
    services: ["E-Spor", "Sahne", "LED Ekran", "Işık"],
    youtubeUrl: "https://www.youtube.com/watch?v=1R5Av0x5ouA",
    thumbnailUrl: "https://i.ytimg.com/vi/1R5Av0x5ouA/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "i-KtuiLiBmI",
    title: "Küp LED Ekran Kiralama",
    description:
      "Küp LED ekran formunda hazırlanan yaratıcı görüntü yüzeyiyle marka, sahne ve etkinlik alanı için dikkat çekici LED ekran uygulaması.",
    services: ["Küp LED", "LED Ekran", "Sahne Tasarımı", "Prodüksiyon"],
    youtubeUrl: "https://www.youtube.com/shorts/i-KtuiLiBmI?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/i-KtuiLiBmI/hq2.jpg",
    uploadDate: "2026-04-10T01:44:04-07:00",
  },
  {
    id: "AihkXPzPBi0",
    title: "Kurumsal Etkinlik Toplantısında LED Ekran Kullanımı",
    description:
      "Kurumsal toplantı sahnesinde LED ekran, sunum akışı, marka görünürlüğü ve teknik prodüksiyon düzeninden seçilmiş uygulama görüntüsü.",
    services: ["Kurumsal Etkinlik", "LED Ekran", "Toplantı", "Teknik Prodüksiyon"],
    youtubeUrl: "https://www.youtube.com/shorts/AihkXPzPBi0?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/AihkXPzPBi0/hq2.jpg",
    uploadDate: "2026-05-30T09:54:16-07:00",
  },
  {
    id: "tyb1lG9KtiA",
    title: "Çadır Kurulum Organizasyonu",
    description:
      "Etkinlik çadırı kurulumunda taşıyıcı sistem, branda, sabitleme ve saha koordinasyonunu gösteren uygulama kesiti.",
    services: ["Çadır", "Kurulum", "Sabitleme", "Saha Ekibi"],
    youtubeUrl: "https://www.youtube.com/watch?v=tyb1lG9KtiA&t=46s",
    thumbnailUrl: "https://i.ytimg.com/vi/tyb1lG9KtiA/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
    startSeconds: 46,
  },
  {
    id: "xatodgyZ_S8",
    title: "Ufkun Ötesinde Galası ve Türkiye'nin İnsanlı İlk Uzay Misyonu Sergisi",
    description:
      "Ufkun Ötesinde Galası ve Türkiye'nin insanlı ilk uzay misyonu sergisi için hazırlanan sahne, LED ekran, sergi alanı ve teknik prodüksiyon uygulamasından seçilmiş proje videosu.",
    services: ["Gala", "Sergi Alanı", "LED Ekran", "Teknik Prodüksiyon"],
    youtubeUrl: "https://www.youtube.com/watch?v=xatodgyZ_S8",
    thumbnailUrl: "https://i.ytimg.com/vi/xatodgyZ_S8/hqdefault.jpg",
    uploadDate: "2026-06-09T03:10:17-07:00",
  },
  {
    id: "j1Tr5l8DVW8",
    title: "TUA Milli Uzay Programı Lansmanı 2021",
    description:
      "TUA Milli Uzay Programı Lansmanı için hazırlanan sahne, LED ekran, pnömatik dome yapı ve teknik prodüksiyon uygulamasından seçilmiş sahne arkası görüntüsü.",
    services: ["Lansman", "Dome", "LED Ekran", "Sahne"],
    youtubeUrl: "https://www.youtube.com/watch?v=j1Tr5l8DVW8",
    thumbnailUrl: "https://i.ytimg.com/vi/j1Tr5l8DVW8/hqdefault.jpg",
    uploadDate: "2021-02-09T00:00:00+03:00",
  },
  {
    id: "qiqiBN4Uhu4",
    title: "EAACI Kongresi İstanbul — Leti Pharma 360° LED Wall Kurulumu",
    description:
      "EAACI Congress İstanbul'da Leti Pharma için hazırlanan 360° LED wall kurulumundan seçilmiş uygulama görüntüsü. Kurumsal sergi alanında tam çevreleyen LED ekran mimarisiyle marka deneyimi oluşturuldu.",
    services: ["360° LED Wall", "LED Ekran", "Kurumsal Etkinlik", "Kongre", "Sergi"],
    youtubeUrl: "https://youtube.com/shorts/qiqiBN4Uhu4",
    thumbnailUrl: "https://i.ytimg.com/vi/qiqiBN4Uhu4/hq2.jpg",
    uploadDate: "2026-06-23T00:00:00+03:00",
  },
];

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: buildAlternatesForPath("/yaptiklarimiz"),
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
  robots: AI_PREVIEW_ROBOTS,
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
        embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1${video.startSeconds ? `&start=${video.startSeconds}` : ""}`,
        contentUrl: video.youtubeUrl,
        url: video.youtubeUrl,
        ...(video.uploadDate ? { uploadDate: video.uploadDate } : {}),
        inLanguage: "tr-TR",
        publisher: { "@id": ORGANIZATION_ID },
        ...getVideoFactProps(video.id),
      })),
    ],
  };

  return <JsonLd data={jsonLd} />;
}

function SectionEyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-violet-100 shadow-lg shadow-violet-950/20 backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_18px_rgba(147,197,253,0.85)]" />
      {children}
    </div>
  );
}

export default function YaptiklarimizPage() {
  const featuredVideo = PROJECT_VIDEOS[0];

  return (
    <div className="min-h-screen overflow-hidden bg-[#0B1120] text-white">
      <YaptiklarimizStructuredData />

      <PageHero
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Yaptıklarımız" },
        ]}
        eyebrow="Video proje vitrini"
        title="Yaptığımız Sahne, LED Ekran"
        titleAccent="ve Organizasyon Projeleri"
        titleWide
        description="Sahne, LED ekran, ses-ışık, truss, podyum ve çadır çözümlerini gerçek etkinlik alanlarında nasıl kurduğumuzu gösteren saha referanslarını bu sayfada bir araya getiriyoruz."
        actions={[
          {
            key: "quote",
            label: "Benzer Proje İçin Teklif Al",
            href: "/iletisim",
          },
          {
            key: "projects",
            label: "Proje Detaylarını İncele",
            href: "/projeler",
          },
        ]}
        asideLabel="Öne çıkan proje videosu"
        aside={
          <>
            <p className="mb-3 flex items-center gap-2 font-mono text-[0.625rem] font-bold uppercase tracking-[0.14em] text-violet-300">
              Öne çıkan ilk video
            </p>
            <LazyVideoEmbed
              videoId={featuredVideo.id}
              title={featuredVideo.title}
              thumbnailUrl={featuredVideo.thumbnailUrl}
              startSeconds={featuredVideo.startSeconds}
            />
          </>
        }
      />

      <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="video-gallery-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_20%,rgba(139, 92, 246,0.10),transparent_32%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionEyebrow>Video Galeri</SectionEyebrow>
              <h2 id="video-gallery-title" className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                Kurulumdan etkinlik anına kadar sahadan işler
              </h2>
            </div>
          </div>
          <VideoGallery videos={PROJECT_VIDEOS} />

          <div className="mt-14 rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur md:p-9" aria-labelledby="video-services-title">
            <h2 id="video-services-title" className="text-2xl font-black tracking-tight md:text-3xl">
              Bu videolardaki kurulumları hangi hizmetlerimizle yapıyoruz?
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-slate-300">
              Videolarda gördüğünüz her kurulum, aşağıdaki hizmet kapsamlarımızla projelendirilir. Detaylı bilgi ve fiyat için ilgili hizmet sayfasını inceleyebilirsiniz.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/sahne-kiralama" className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-black text-white transition hover:bg-white/20">Sahne Kiralama</Link>
              <Link href="/led-ekran-kiralama" className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-black text-white transition hover:bg-white/20">LED Ekran Kiralama</Link>
              <Link href="/ses-isik-sistemleri" className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-black text-white transition hover:bg-white/20">Ses ve Işık Sistemleri</Link>
              <Link href="/podyum-kiralama" className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-black text-white transition hover:bg-white/20">Podyum Kiralama</Link>
              <Link href="/cadir-kiralama" className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-black text-white transition hover:bg-white/20">Çadır Kiralama</Link>
              <Link href="/truss-kiralama" className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-black text-white transition hover:bg-white/20">Truss Kiralama</Link>
              <Link href="/kurumsal-organizasyon" className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-black text-white transition hover:bg-white/20">Kurumsal Organizasyon</Link>
              <Link href="/masa-sandalye-kiralama" className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-black text-white transition hover:bg-white/20">Masa Sandalye Kiralama</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-violet-950/20 backdrop-blur">
          <div className="relative p-8 md:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139, 92, 246,0.16),transparent_35%)]" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-violet-100">
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
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-violet-500 px-7 py-3 text-sm font-black text-white shadow-xl shadow-violet-950/25 transition hover:-translate-y-0.5 hover:bg-violet-400"
              >
                Teklif Al
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, Clapperboard, Sparkles } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";
import VideoGallery from "./VideoGallery.client";

export const revalidate = 86400;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_PATH = "/ar/our-work";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "أعمالنا | مشاريع المسارح وشاشات LED وتنظيم الفعاليات";
const PAGE_DESCRIPTION =
  "استعرض مشاريع Sahneva المنجزة: استئجار المسارح وشاشات LED والمنصات والصوت والإضاءة والخيام وتنظيم الفعاليات المؤسسية — مع توثيق فيديو من الواقع.";
const PUBLISHED_AT = "2026-06-08T00:00:00+03:00";

const PROJECT_VIDEOS = [
  {
    id: "z4DqZERYXkM",
    title: "تركيب مسرح حفلات وشاشة LED",
    description:
      "فيديو مشروع مختار من أعمال Sahneva في تركيب المسارح وشاشات LED والصوت والإضاءة والإنتاج التقني.",
    services: ["مسرح", "شاشة LED", "صوت", "إضاءة"],
    youtubeUrl: "https://www.youtube.com/watch?v=z4DqZERYXkM",
    thumbnailUrl: "https://i.ytimg.com/vi/z4DqZERYXkM/maxresdefault.jpg",
    uploadDate: "2026-06-05T00:00:00+03:00",
  },
  {
    id: "x-BYu0vgO2E",
    title: "SAHA 2026 — مساحة فعالية خاصة وإنتاج معرض",
    description:
      "لقطات ميدانية من معرض داخلي: هياكل مخصصة، محور دخول، بنية تحتية للأرضية، خيمة قبة وإضاءة محيطية.",
    services: ["خيمة قبة", "ساحة معرض", "أرضية", "إضاءة"],
    youtubeUrl: "https://www.youtube.com/watch?v=x-BYu0vgO2E",
    thumbnailUrl: "https://i.ytimg.com/vi/x-BYu0vgO2E/hqdefault.jpg",
    uploadDate: "2026-04-29T00:00:00+03:00",
  },
  {
    id: "CVdYV5BkF3k",
    title: "رسوم متحركة بالليزر والعرض في خيمة قبة",
    description:
      "لقطات من فعالية تضمنت رسومًا متحركة بالليزر والعرض على سقف خيمة قبة.",
    services: ["خيمة قبة", "عرض", "رسوم ليزر", "إضاءة"],
    youtubeUrl: "https://www.youtube.com/shorts/CVdYV5BkF3k?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/CVdYV5BkF3k/hq2.jpg",
    uploadDate: "2026-01-21T03:16:02-08:00",
  },
  {
    id: "JNzGlNzNRuk",
    title: "تركيب سريع وتحضير تقني",
    description:
      "لقطة حقيقية تُظهر تنسيق المسرح وشاشة LED والفريق التقني في ظل مواعيد ضيقة.",
    services: ["مسرح", "شاشة LED", "فريق تقني", "تركيب"],
    youtubeUrl: "https://www.youtube.com/watch?v=JNzGlNzNRuk",
    thumbnailUrl: "https://i.ytimg.com/vi/JNzGlNzNRuk/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "4ygMbL4FDRc",
    title: "خيمة علوم الفضاء TÜBİTAK — TEKNOFEST",
    description:
      "فيديو مشروع من تركيب الخيمة والساحة والإنتاج الميداني لخيمة TÜBİTAK لعلوم الفضاء في TEKNOFEST.",
    services: ["خيمة", "TEKNOFEST", "ساحة الفعالية", "إنتاج"],
    youtubeUrl: "https://www.youtube.com/watch?v=4ygMbL4FDRc",
    thumbnailUrl: "https://i.ytimg.com/vi/4ygMbL4FDRc/hqdefault.jpg",
    uploadDate: "2025-10-28T00:48:40-07:00",
  },
  {
    id: "7yjrrEtWrr0",
    title: "الديكور الداخلي للخيمة والبنية التحتية التقنية في TEKNOFEST",
    description:
      "لقطات من منطقة خيمة TEKNOFEST: ديكور داخلي، نظام صوت، شاشة LED، ترتيب طاولات وكراسي، وبنية تحتية للفعالية.",
    services: ["خيمة", "ديكور", "شاشة LED", "نظام صوت", "طاولات وكراسي"],
    youtubeUrl: "https://www.youtube.com/shorts/7yjrrEtWrr0?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/7yjrrEtWrr0/hq2.jpg",
    uploadDate: "2025-10-17T16:56:21-07:00",
  },
  {
    id: "_9Q7v0ZL304",
    title: "تركيب مسرح وشاشة LED وصوت وإضاءة في TEKNOFEST",
    description:
      "لقطات ميدانية لتكامل المسرح وشاشة LED والصوت والإضاءة والبنية التحتية التقنية في ساحة TEKNOFEST.",
    services: ["مسرح", "شاشة LED", "صوت", "إضاءة"],
    youtubeUrl: "https://www.youtube.com/watch?v=_9Q7v0ZL304",
    thumbnailUrl: "https://i.ytimg.com/vi/_9Q7v0ZL304/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "c72ILTyJH4A",
    title: "بلدية فاتح — فعالية 400 مشروع في 5 سنوات",
    description:
      "لقطات ميدانية من تركيب المسرح وشاشة LED والصوت والإضاءة والإنتاج التقني لفعالية بلدية فاتح.",
    services: ["فعالية مؤسسية", "مسرح", "شاشة LED", "صوت وإضاءة"],
    youtubeUrl: "https://www.youtube.com/watch?v=c72ILTyJH4A",
    thumbnailUrl: "https://i.ytimg.com/vi/c72ILTyJH4A/hqdefault.jpg",
    uploadDate: "2026-04-29T00:00:00+03:00",
  },
  {
    id: "173gBurWSRQ",
    title: "نهائي PUBG تركيا 2023",
    description:
      "لقطات ميدانية من تركيب المسرح وشاشة LED والصوت والإضاءة والمنصة والإنتاج التقني لنهائي PUBG تركيا 2023.",
    services: ["رياضات إلكترونية", "مسرح", "شاشة LED", "صوت وإضاءة"],
    youtubeUrl: "https://www.youtube.com/watch?v=173gBurWSRQ",
    thumbnailUrl: "https://i.ytimg.com/vi/173gBurWSRQ/hqdefault.jpg",
    uploadDate: "2023-12-01T00:00:00+03:00",
  },
  {
    id: "1R5Av0x5ouA",
    title: "بروفات مسرح وشاشة LED وإضاءة لـ PUBG",
    description:
      "لقطات البروفة التقنية للمسرح وشاشة LED والإضاءة المُعدَّة لفعالية PUBG.",
    services: ["رياضات إلكترونية", "مسرح", "شاشة LED", "إضاءة"],
    youtubeUrl: "https://www.youtube.com/watch?v=1R5Av0x5ouA",
    thumbnailUrl: "https://i.ytimg.com/vi/1R5Av0x5ouA/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "i-KtuiLiBmI",
    title: "تأجير شاشة LED مكعبة",
    description:
      "تطبيق شاشة LED بتصميم مكعب للعلامة التجارية والمسرح وساحة الفعالية.",
    services: ["LED مكعب", "شاشة LED", "تصميم مسرح", "إنتاج"],
    youtubeUrl: "https://www.youtube.com/shorts/i-KtuiLiBmI?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/i-KtuiLiBmI/hq2.jpg",
    uploadDate: "2026-04-10T01:44:04-07:00",
  },
  {
    id: "AihkXPzPBi0",
    title: "شاشة LED في اجتماع فعالية مؤسسية",
    description:
      "لقطات من مسرح اجتماع مؤسسي: شاشة LED، تدفق العرض، ظهور العلامة التجارية والإنتاج التقني.",
    services: ["فعالية مؤسسية", "شاشة LED", "اجتماع", "إنتاج تقني"],
    youtubeUrl: "https://www.youtube.com/shorts/AihkXPzPBi0?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/AihkXPzPBi0/hq2.jpg",
    uploadDate: "2026-05-30T09:54:16-07:00",
  },
  {
    id: "tyb1lG9KtiA",
    title: "تركيب الخيمة وتنظيم الموقع",
    description:
      "لقطة توضح الهيكل الحامل والمظلة والتثبيت وتنسيق الموقع أثناء تركيب خيمة الفعالية.",
    services: ["خيمة", "تركيب", "تثبيت", "فريق ميداني"],
    youtubeUrl: "https://www.youtube.com/watch?v=tyb1lG9KtiA&t=46s",
    thumbnailUrl: "https://i.ytimg.com/vi/tyb1lG9KtiA/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
    startSeconds: 46,
  },
  {
    id: "xatodgyZ_S8",
    title: "حفل «ما وراء الأفق» ومعرض أول مهمة فضائية مأهولة لتركيا",
    description:
      "فيديو مشروع تركيب المسرح وشاشة LED وساحة المعرض والإنتاج التقني لحفل «ما وراء الأفق» ومعرض أول مهمة فضائية مأهولة لتركيا.",
    services: ["حفل", "ساحة معرض", "شاشة LED", "إنتاج تقني"],
    youtubeUrl: "https://www.youtube.com/watch?v=xatodgyZ_S8",
    thumbnailUrl: "https://i.ytimg.com/vi/xatodgyZ_S8/hqdefault.jpg",
    uploadDate: "2026-06-09T03:10:17-07:00",
  },
  {
    id: "j1Tr5l8DVW8",
    title: "إطلاق البرنامج الوطني للفضاء 2021",
    description:
      "لقطات من كواليس تركيب المسرح وشاشة LED والقبة الهوائية والإنتاج التقني لإطلاق البرنامج الوطني للفضاء TUA.",
    services: ["إطلاق", "قبة", "شاشة LED", "مسرح"],
    youtubeUrl: "https://www.youtube.com/watch?v=j1Tr5l8DVW8",
    thumbnailUrl: "https://i.ytimg.com/vi/j1Tr5l8DVW8/hqdefault.jpg",
    uploadDate: "2021-02-09T00:00:00+03:00",
  },
  {
    id: "qiqiBN4Uhu4",
    title: "مؤتمر EAACI إسطنبول — تركيب جدار LED 360° لـ Leti Pharma",
    description:
      "لقطات تركيب جدار LED بزاوية 360° لـ Leti Pharma في مؤتمر EAACI بإسطنبول. أوجدت معمارية شاشة LED المحيطة بالكامل تجربة علامة تجارية غامرة في ساحة المعرض المؤسسية.",
    services: ["جدار LED 360°", "شاشة LED", "فعالية مؤسسية", "مؤتمر", "معرض"],
    youtubeUrl: "https://youtube.com/shorts/qiqiBN4Uhu4",
    thumbnailUrl: "https://i.ytimg.com/vi/qiqiBN4Uhu4/hq2.jpg",
    uploadDate: "2026-06-23T00:00:00+03:00",
  },
];

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "tr-TR": `${SITE_URL}/yaptiklarimiz`,
      "en": `${SITE_URL}/en/our-work`,
      "ru": `${SITE_URL}/ru/our-work`,
      "ar": PAGE_URL,
      "x-default": `${SITE_URL}/yaptiklarimiz`,
    },
  },
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Sahneva",
    locale: "ar_SA",
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

function OurWorkStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: "ar-SA",
        datePublished: PUBLISHED_AT,
        dateModified: PUBLISHED_AT,
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#video-list` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}/ar` },
          { "@type": "ListItem", position: 2, name: "أعمالنا", item: PAGE_URL },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#video-list`,
        name: "قائمة فيديو أعمال Sahneva",
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
        inLanguage: "ar-SA",
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

export default function OurWorkArPage() {
  const featuredVideo = PROJECT_VIDEOS[0];

  return (
    <div className="min-h-screen overflow-hidden bg-[#0B1120] text-white" dir="rtl">
      <OurWorkStructuredData />

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(14,165,233,0.16),transparent_28%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,auto,64px_64px,64px_64px]" aria-hidden="true" />
        <div className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -left-32 top-36 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="مسار التنقل" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/65">
            <Link href="/ar" className="transition hover:text-white">الرئيسية</Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-white">أعمالنا</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionEyebrow>عرض مشاريع الفيديو</SectionEyebrow>
              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                مشاريعنا المنجزة في المسارح وشاشات LED وتنظيم الفعاليات
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                نجمع هنا مراجع ميدانية توضح كيف نركّب المسارح وشاشات LED والصوت والإضاءة والفرامات والمنصات والخيام في ساحات فعاليات حقيقية.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/ar/contact"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-xl shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  احصل على عرض سعر لمشروع مماثل
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </Link>
                <Link
                  href="/ar/projects"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white/15"
                >
                  استعرض تفاصيل المشاريع
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-bl from-blue-500/20 to-cyan-400/10 blur-2xl" aria-hidden="true" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="mb-3 flex items-center justify-between gap-3 px-2 pt-1 text-sm text-slate-300">
                  <span className="inline-flex items-center gap-2 font-black text-white">
                    <Sparkles className="h-4 w-4 text-blue-200" />
                    الفيديو المميز
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-blue-100">Sahneva</span>
                </div>
                <LazyVideoEmbed
                  videoId={featuredVideo.id}
                  title={featuredVideo.title}
                  thumbnailUrl={featuredVideo.thumbnailUrl}
                  startSeconds={featuredVideo.startSeconds}
                  locale="ar"
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
              <SectionEyebrow>معرض الفيديو</SectionEyebrow>
              <h2 id="video-gallery-title" className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                من التركيب إلى يوم الفعالية — أعمال حقيقية من الميدان
              </h2>
            </div>
          </div>
          <VideoGallery videos={PROJECT_VIDEOS} />
        </div>
      </section>

      <section className="relative px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-blue-950/20 backdrop-blur">
          <div className="relative p-8 md:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.16),transparent_35%)]" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
              <Link
                href="/ar/contact"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-3 text-sm font-black text-white shadow-xl shadow-blue-950/25 transition hover:-translate-y-0.5 hover:bg-blue-400"
              >
                احصل على عرض سعر
                <ArrowRight className="h-4 w-4 rotate-180" />
              </Link>
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-blue-100">
                  <Clapperboard className="h-4 w-4" />
                  أرشيف مشاريع Sahneva
                </div>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  لنخطط لإعداد مشابه لفعاليتك.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                  نقدم حلولاً متكاملة للحفلات والمهرجانات والفعاليات المؤسسية وإطلاق المنتجات والفعاليات في الهواء الطلق — مسرح وشاشة LED ومنصة وصوت وإضاءة وفرامات وخيام من مصدر واحد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

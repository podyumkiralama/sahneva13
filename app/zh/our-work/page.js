import Link from "next/link";
import { ArrowRight, Clapperboard, Sparkles } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";
import { getVideoFactProps } from "@/lib/seo/projectVideoFacts";
import { ORGANIZATION_ID } from "@/lib/seo/schemaIds";
import VideoGallery from "./VideoGallery.client";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { buildAlternatesForPath } from "@/lib/seo/alternates";

export const revalidate = 86400;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_PATH = "/zh/our-work";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
// 与 /zh/projects 的标题区分开，避免重复标题。
const PAGE_TITLE = "我们的作品 — 现场技术制作实例";
const PAGE_DESCRIPTION =
  "观看 Sahneva 的现场实拍视频：TEKNOFEST、国家航天计划发布会、PUBG 总决赛等项目的舞台、LED屏幕、音响灯光与篷房搭建过程。";
const PUBLISHED_AT = "2026-07-27T00:00:00+03:00";

const PROJECT_VIDEOS = [
  {
    id: "z4DqZERYXkM",
    title: "Sıfır Atık（零废弃）艺术节主舞台制作",
    description:
      "为 Sıfır Atık（零废弃）艺术节主舞台搭建的舞台、LED 屏幕、音响与灯光技术制作画面。",
    services: ["舞台", "LED屏幕", "音响", "灯光"],
    youtubeUrl: "https://www.youtube.com/watch?v=z4DqZERYXkM",
    thumbnailUrl: "https://i.ytimg.com/vi/z4DqZERYXkM/maxresdefault.jpg",
    uploadDate: "2026-06-05T00:00:00+03:00",
  },
  {
    id: "x-BYu0vgO2E",
    title: "SAHA 2026 — 定制展览场地与制作",
    description:
      "闭门展览的现场实拍：定制结构、入口动线、地面基础设施、球形篷与背景照明。",
    services: ["球形篷", "展览场地", "地面铺装", "灯光"],
    youtubeUrl: "https://www.youtube.com/watch?v=x-BYu0vgO2E",
    thumbnailUrl: "https://i.ytimg.com/vi/x-BYu0vgO2E/hqdefault.jpg",
    uploadDate: "2026-04-29T00:00:00+03:00",
  },
  {
    id: "CVdYV5BkF3k",
    title: "球形篷内的激光投影动画",
    description:
      "活动现场实拍：投射在球形篷穹顶上的激光与投影动画。",
    services: ["球形篷", "投影", "激光动画", "灯光"],
    youtubeUrl: "https://www.youtube.com/shorts/CVdYV5BkF3k?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/CVdYV5BkF3k/hq2.jpg",
    uploadDate: "2026-01-21T03:16:02-08:00",
  },
  {
    id: "JNzGlNzNRuk",
    title: "Dicle Elektrik 巴特曼发布会 — 企业活动制作",
    description:
      "展示 Dicle Elektrik 巴特曼发布会中舞台、LED 屏幕与技术团队协作的现场画面。",
    services: ["舞台", "LED屏幕", "技术团队", "安装"],
    youtubeUrl: "https://www.youtube.com/watch?v=JNzGlNzNRuk",
    thumbnailUrl: "https://i.ytimg.com/vi/JNzGlNzNRuk/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "4ygMbL4FDRc",
    title: "TÜBİTAK「空间科学」主题篷 — TEKNOFEST",
    description:
      "TEKNOFEST 科技节上 TÜBİTAK 空间科学主题篷的篷房搭建、场地与现场制作视频。",
    services: ["篷房", "TEKNOFEST", "活动场地", "制作"],
    youtubeUrl: "https://www.youtube.com/watch?v=4ygMbL4FDRc",
    thumbnailUrl: "https://i.ytimg.com/vi/4ygMbL4FDRc/hqdefault.jpg",
    uploadDate: "2025-10-28T00:48:40-07:00",
  },
  {
    id: "7yjrrEtWrr0",
    title: "TEKNOFEST 篷房内部布置与技术基础设施",
    description:
      "TEKNOFEST 篷房区域实拍：内部装饰、音响系统、LED屏幕、桌椅布置与活动基础设施。",
    services: ["篷房", "布置", "LED屏幕", "音响系统", "桌椅"],
    youtubeUrl: "https://www.youtube.com/shorts/7yjrrEtWrr0?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/7yjrrEtWrr0/hq2.jpg",
    uploadDate: "2025-10-17T16:56:21-07:00",
  },
  {
    id: "_9Q7v0ZL304",
    title: "TEKNOFEST 舞台、LED屏幕、音响与灯光搭建",
    description:
      "TEKNOFEST 现场：舞台、LED屏幕、音响、灯光与技术基础设施的一体化集成实拍。",
    services: ["舞台", "LED屏幕", "音响", "灯光"],
    youtubeUrl: "https://www.youtube.com/watch?v=_9Q7v0ZL304",
    thumbnailUrl: "https://i.ytimg.com/vi/_9Q7v0ZL304/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "c72ILTyJH4A",
    title: "法蒂赫市政府 —「5年400个项目」活动",
    description:
      "法蒂赫市政府活动的舞台、LED屏幕、音响、灯光与技术制作现场实拍。",
    services: ["企业活动", "舞台", "LED屏幕", "音响灯光"],
    youtubeUrl: "https://www.youtube.com/watch?v=c72ILTyJH4A",
    thumbnailUrl: "https://i.ytimg.com/vi/c72ILTyJH4A/hqdefault.jpg",
    uploadDate: "2026-04-29T00:00:00+03:00",
  },
  {
    id: "173gBurWSRQ",
    title: "PUBG Türkiye 2023 总决赛",
    description:
      "PUBG Türkiye 2023 总决赛的舞台、LED屏幕、音响、灯光、T台与技术制作现场实拍。",
    services: ["电竞", "舞台", "LED屏幕", "音响灯光"],
    youtubeUrl: "https://www.youtube.com/watch?v=173gBurWSRQ",
    thumbnailUrl: "https://i.ytimg.com/vi/173gBurWSRQ/hqdefault.jpg",
    uploadDate: "2023-12-01T00:00:00+03:00",
  },
  {
    id: "1R5Av0x5ouA",
    title: "PUBG 赛事的舞台、LED屏幕与灯光彩排",
    description:
      "为 PUBG 赛事准备的舞台、LED屏幕与灯光技术彩排实拍。",
    services: ["电竞", "舞台", "LED屏幕", "灯光"],
    youtubeUrl: "https://www.youtube.com/watch?v=1R5Av0x5ouA",
    thumbnailUrl: "https://i.ytimg.com/vi/1R5Av0x5ouA/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "i-KtuiLiBmI",
    title: "立方体LED屏幕租赁",
    description:
      "立方体造型LED屏幕在品牌、舞台与活动场地中的创意应用。",
    services: ["立方体LED", "LED屏幕", "舞台设计", "制作"],
    youtubeUrl: "https://www.youtube.com/shorts/i-KtuiLiBmI?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/i-KtuiLiBmI/hq2.jpg",
    uploadDate: "2026-04-10T01:44:04-07:00",
  },
  {
    id: "AihkXPzPBi0",
    title: "企业会议中的LED屏幕",
    description:
      "企业会议舞台实拍：LED屏幕、演示流程、品牌展示与技术制作。",
    services: ["企业活动", "LED屏幕", "会议", "技术制作"],
    youtubeUrl: "https://www.youtube.com/shorts/AihkXPzPBi0?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/AihkXPzPBi0/hq2.jpg",
    uploadDate: "2026-05-30T09:54:16-07:00",
  },
  {
    id: "tyb1lG9KtiA",
    title: "篷房安装与场地组织",
    description:
      "活动篷房安装实拍：承重框架、篷布、固定与现场协调。",
    services: ["篷房", "安装", "固定", "现场团队"],
    youtubeUrl: "https://www.youtube.com/watch?v=tyb1lG9KtiA&t=46s",
    thumbnailUrl: "https://i.ytimg.com/vi/tyb1lG9KtiA/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
    startSeconds: 46,
  },
  {
    id: "xatodgyZ_S8",
    title: "「地平线之外」晚宴与土耳其首次载人航天任务展览",
    description:
      "「地平线之外」晚宴与土耳其首次载人航天任务展览的舞台、LED屏幕、展览场地与技术制作项目视频。",
    services: ["晚宴", "展览场地", "LED屏幕", "技术制作"],
    youtubeUrl: "https://www.youtube.com/watch?v=xatodgyZ_S8",
    thumbnailUrl: "https://i.ytimg.com/vi/xatodgyZ_S8/hqdefault.jpg",
    uploadDate: "2026-06-09T03:10:17-07:00",
  },
  {
    id: "j1Tr5l8DVW8",
    title: "TUA 2021 国家航天计划发布会",
    description:
      "TUA 国家航天计划发布会的舞台、LED屏幕、充气穹顶与技术制作幕后实拍。",
    services: ["发布会", "穹顶", "LED屏幕", "舞台"],
    youtubeUrl: "https://www.youtube.com/watch?v=j1Tr5l8DVW8",
    thumbnailUrl: "https://i.ytimg.com/vi/j1Tr5l8DVW8/hqdefault.jpg",
    uploadDate: "2021-02-09T00:00:00+03:00",
  },
  {
    id: "qiqiBN4Uhu4",
    title: "EAACI 伊斯坦布尔大会 — Leti Pharma 360° LED墙搭建",
    description:
      "在伊斯坦布尔 EAACI 大会上为 Leti Pharma 搭建 360° LED墙的实拍。环绕式LED屏幕结构在企业展览场地打造了沉浸式品牌体验。",
    services: ["360° LED墙", "LED屏幕", "企业活动", "大会", "展览"],
    youtubeUrl: "https://youtube.com/shorts/qiqiBN4Uhu4",
    thumbnailUrl: "https://i.ytimg.com/vi/qiqiBN4Uhu4/hq2.jpg",
    uploadDate: "2026-06-23T00:00:00+03:00",
  },
];

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: buildAlternatesForPath("/zh/our-work"),
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Sahneva",
    locale: "zh_CN",
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
        inLanguage: "zh-CN",
        datePublished: PUBLISHED_AT,
        dateModified: PUBLISHED_AT,
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#video-list` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "首页", item: `${SITE_URL}/zh` },
          { "@type": "ListItem", position: 2, name: "项目案例", item: PAGE_URL },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#video-list`,
        name: "Sahneva 项目案例视频列表",
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
        inLanguage: "zh-CN",
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

export default function OurWorkZhPage() {
  const featuredVideo = PROJECT_VIDEOS[0];

  return (
    <div className="min-h-screen overflow-hidden bg-[#0B1120] text-white">
      <OurWorkStructuredData />

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(124, 58, 237,0.24),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(139, 92, 246,0.16),transparent_28%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,auto,64px_64px,64px_64px]" aria-hidden="true" />
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-32 top-36 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="面包屑导航" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/65">
            <Link href="/zh" className="transition hover:text-white">首页</Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-white">项目案例</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionEyebrow>视频项目展示</SectionEyebrow>
              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                舞台、LED屏幕与活动制作的真实项目案例
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                这些现场实拍展示了我们如何在真实活动场地安装舞台、LED屏幕、音响、灯光、桁架、T台与篷房方案。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/zh/contact"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-xl shadow-violet-950/20 transition hover:-translate-y-0.5 hover:bg-violet-50"
                >
                  为类似项目获取报价
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/zh/projects"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white/15"
                >
                  查看项目详情
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-violet-500/20 to-violet-400/10 blur-2xl" aria-hidden="true" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="mb-3 flex items-center justify-between gap-3 px-2 pt-1 text-sm text-slate-300">
                  <span className="inline-flex items-center gap-2 font-black text-white">
                    <Sparkles className="h-4 w-4 text-violet-200" />
                    精选视频
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-violet-100">Sahneva</span>
                </div>
                <LazyVideoEmbed
                  videoId={featuredVideo.id}
                  title={featuredVideo.title}
                  thumbnailUrl={featuredVideo.thumbnailUrl}
                  startSeconds={featuredVideo.startSeconds}
                  locale="zh"
                  className="rounded-[1.5rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="video-gallery-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_20%,rgba(139, 92, 246,0.10),transparent_32%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionEyebrow>视频库</SectionEyebrow>
              <h2 id="video-gallery-title" className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                从安装到活动当天 — 来自现场的真实项目
              </h2>
            </div>
          </div>
          <VideoGallery videos={PROJECT_VIDEOS} />
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
                  Sahneva 项目档案
                </div>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  让我们为您的活动规划一套类似的方案。
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                  演唱会、音乐节、企业活动、新品发布与户外活动的一站式解决方案：舞台、LED屏幕、T台、音响、灯光、桁架与篷房——由一个团队交付。
                </p>
              </div>
              <Link
                href="/zh/contact"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-violet-500 px-7 py-3 text-sm font-black text-white shadow-xl shadow-violet-950/25 transition hover:-translate-y-0.5 hover:bg-violet-400"
              >
                获取报价
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

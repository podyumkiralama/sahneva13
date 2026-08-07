import Image from "next/image";
import Link from "next/link";
import CaseGallery from "@/components/CaseGallery";
import JsonLd from "@/components/seo/JsonLd";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";
import { getFeaturedPortfolio } from "@/lib/portfolioGallery";

const ZH_PROJECTS_URL = buildCanonical("/zh/projects");
const ZH_PROJECTS_IMAGE = `${SITE_URL}/img/kurumsal/kurumsal-sahne-led-ekran.webp`;

const PROJECT_GROUPS = [
  {
    title: "LED屏幕与舞台",
    text: "企业会议、发布会以及室内外视频墙解决方案。",
    image: "/img/galeri/led-ekran-kiralama-1.webp",
  },
  {
    title: "音乐节与演唱会",
    text: "高强度档期下的舞台、桁架、音响、灯光与技术团队。",
    image: "/img/sahne/galeri-1.webp",
  },
  {
    title: "篷房与活动场地",
    text: "球形篷、尖顶篷与大型活动篷房，配套家具、照明与物流。",
    image: "/img/galeri/cadir-kiralama-1.webp",
  },
];

export const metadata = {
  title: "项目案例 — 舞台、LED屏幕与活动制作",
  description:
    "浏览 Sahneva 在土耳其完成的项目：企业会议、新品发布、音乐节与展览现场的舞台、LED屏幕、音响灯光、桁架与篷房搭建实例。",
  alternates: {
    canonical: ZH_PROJECTS_URL,
    languages: {
      "tr-TR": `${SITE_URL}/projeler`,
      en: `${SITE_URL}/en/projects`,
      de: `${SITE_URL}/de/projekte`,
      ar: `${SITE_URL}/ar/projects`,
      ru: `${SITE_URL}/ru/projects`,
      zh: ZH_PROJECTS_URL,
      "x-default": `${SITE_URL}/en/projects`,
    },
  },
  openGraph: {
    title: "项目案例 — 舞台、LED屏幕与活动制作 | Sahneva",
    description:
      "浏览 Sahneva 在土耳其完成的项目：企业会议、新品发布、音乐节与展览现场的舞台、LED屏幕、音响灯光、桁架与篷房搭建实例。",
    url: ZH_PROJECTS_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "zh_CN",
    images: [{ url: ZH_PROJECTS_IMAGE, width: 1200, height: 630, alt: "Sahneva 土耳其活动项目案例" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "项目案例 — 舞台、LED屏幕与活动制作 | Sahneva",
    description:
      "浏览 Sahneva 在土耳其完成的项目：企业会议、新品发布、音乐节与展览现场的舞台、LED屏幕、音响灯光、桁架与篷房搭建实例。",
    images: [ZH_PROJECTS_IMAGE],
  },
};

const PROJECTS_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${ZH_PROJECTS_URL}#webpage`,
      url: ZH_PROJECTS_URL,
      name: metadata.openGraph.title,
      description: metadata.description,
      inLanguage: "zh-CN",
      mainEntity: { "@id": `${ZH_PROJECTS_URL}#itemlist` },
      breadcrumb: { "@id": `${ZH_PROJECTS_URL}#breadcrumb` },
    },
    {
      "@type": "ItemList",
      "@id": `${ZH_PROJECTS_URL}#itemlist`,
      itemListElement: PROJECT_GROUPS.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.text,
          image: `${SITE_URL}${project.image}`,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${ZH_PROJECTS_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Sahneva", item: `${SITE_URL}/zh` },
        { "@type": "ListItem", position: 2, name: metadata.title, item: ZH_PROJECTS_URL },
      ],
    },
  ],
};

export default function ChineseProjectsPage() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-10">
      <JsonLd id="zh-projects-jsonld" data={PROJECTS_JSON_LD} />
      <header className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-black text-neutral-900">Sahneva 项目案例</h1>
        <p className="text-base leading-7 text-neutral-600">
          我们服务不同规模的活动：从闭门的企业发布会，到开放的音乐节与展览场地。
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {PROJECT_GROUPS.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-black text-neutral-900">{project.title}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{project.text}</p>
            </div>
          </article>
        ))}
      </div>

      <section>
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
            项目图库
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
            真实项目现场照片
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700">
            舞台、LED屏幕、音响、灯光、桁架与篷房——拍摄于土耳其各城市的安装现场与活动当天。
          </p>
        </div>

        <CaseGallery
          images={getFeaturedPortfolio("zh")}
          visibleCount={8}
          locale="zh"
        />

        <div className="mt-8 text-center">
          <Link
            href="/zh/our-work"
            className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border-2 border-indigo-600 px-7 text-sm font-black text-indigo-700 transition hover:bg-indigo-600 hover:text-white"
          >
            观看现场视频
          </Link>
        </div>
      </section>

      <section className="rounded-3xl bg-slate-950 p-6 text-white md:p-8">
        <h2 className="text-2xl font-black">想做一个类似的项目？</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
          描述一下场地和活动目标，我们会为您配置舞台、屏幕、音响、灯光与物流方案。
        </p>
        <Link href="/zh/contact" className="mt-6 inline-flex min-h-[48px] items-center rounded-xl bg-white px-6 font-bold text-slate-950">
          获取报价
        </Link>
      </section>
    </div>
  );
}

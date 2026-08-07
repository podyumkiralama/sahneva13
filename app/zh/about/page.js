import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const ZH_ABOUT_URL = buildCanonical("/zh/about");
const ZH_ABOUT_IMAGE = `${SITE_URL}/img/hakkimizda-hero-corporate.webp`;
const ORGANIZATION_ID = `${SITE_URL}/#org`;

const VALUES = [
  { title: "安全", text: "团队进场前逐项核查承重结构、电力负荷、高度与安装动线。" },
  { title: "效率", text: "统筹运输、安装、测试与拆除，在紧凑的筹备窗口内按时交付。" },
  { title: "透明", text: "报价中列明设备清单、团队配置、工期与责任分区，一目了然。" },
];

export const metadata = {
  title: "关于我们 — 土耳其活动技术制作团队",
  description:
    "Sahneva 是一支总部位于伊斯坦布尔的活动技术制作团队，自 2012 年以来完成 700 多个项目，提供舞台、LED屏幕、音响灯光、桁架与篷房的一站式执行。",
  alternates: {
    canonical: ZH_ABOUT_URL,
    languages: {
      "tr-TR": `${SITE_URL}/hakkimizda`,
      en: `${SITE_URL}/en/about`,
      de: `${SITE_URL}/de/ueber-uns`,
      ar: `${SITE_URL}/ar/about`,
      ru: `${SITE_URL}/ru/about`,
      zh: ZH_ABOUT_URL,
      "x-default": `${SITE_URL}/en/about`,
    },
  },
  openGraph: {
    title: "关于我们 — 土耳其活动技术制作团队",
    description:
      "Sahneva 是一支总部位于伊斯坦布尔的活动技术制作团队，自 2012 年以来完成 700 多个项目，提供舞台、LED屏幕、音响灯光、桁架与篷房的一站式执行。",
    url: ZH_ABOUT_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "zh_CN",
    images: [{ url: ZH_ABOUT_IMAGE, width: 1200, height: 630, alt: "Sahneva 技术团队在项目现场" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "关于我们 — 土耳其活动技术制作团队",
    description:
      "Sahneva 是一支总部位于伊斯坦布尔的活动技术制作团队，自 2012 年以来完成 700 多个项目，提供舞台、LED屏幕、音响灯光、桁架与篷房的一站式执行。",
    images: [ZH_ABOUT_IMAGE],
  },
};

const ABOUT_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${ZH_ABOUT_URL}#webpage`,
      url: ZH_ABOUT_URL,
      name: metadata.openGraph.title,
      description: metadata.description,
      inLanguage: "zh-CN",
      mainEntity: { "@id": ORGANIZATION_ID },
      breadcrumb: { "@id": `${ZH_ABOUT_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${ZH_ABOUT_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Sahneva", item: `${SITE_URL}/zh` },
        { "@type": "ListItem", position: 2, name: metadata.title, item: ZH_ABOUT_URL },
      ],
    },
  ],
};

export default function ChineseAboutPage() {
  return (
    <div className="bg-white">
      <JsonLd id="zh-about-jsonld" data={ABOUT_JSON_LD} />
      <section className="relative min-h-[62vh] overflow-hidden bg-slate-950 text-white">
        <Image src="/img/hakkimizda-hero-corporate.webp" alt="Sahneva 技术团队在项目现场" fill priority sizes="100vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/60 to-slate-950/85" />
        <div className="container relative z-10 mx-auto flex min-h-[62vh] items-center px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black md:text-6xl">关于 Sahneva</h1>
            <p className="mt-5 text-lg leading-8 text-white/85">
              我们负责活动的全部技术环节：舞台、T台、LED屏幕、音响、灯光、桁架、篷房与家具。
              服务企业活动、演唱会、音乐节、展览与新品发布，覆盖土耳其全境。
            </p>
            <Link href="/zh/contact" className="mt-8 inline-flex min-h-[48px] items-center rounded-xl bg-emerald-500 px-6 font-bold text-white hover:bg-emerald-600">
              洽谈项目
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-5 text-base leading-8 text-neutral-700">
          <h2 className="text-3xl font-black text-neutral-900">把复杂的技术制作变简单</h2>
          <p>
            Sahneva 帮助活动主办方快速、准确地做出技术决策。我们会综合考虑场地条件、人流动线、
            舞台流程、屏幕可视性、声学效果、灯光氛围和物流安排。
          </p>
          <p>
            我们的目标：让团队执行清晰、让场地安全可控、让来宾获得深刻的现场体验。
            对于从中国远道而来的客户，我们提供从需求沟通到现场执行的全程对接。
          </p>
        </div>
        <Image src="/img/ekip-calisma.webp" alt="Sahneva 技术团队筹备现场" width={720} height={480} className="rounded-2xl object-cover shadow-xl" />
      </section>

      <section className="bg-neutral-50 py-14">
        <div className="container mx-auto grid gap-5 px-4 md:grid-cols-3">
          {VALUES.map((value) => (
            <article key={value.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-neutral-900">{value.title}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{value.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

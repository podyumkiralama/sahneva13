import Image from "next/image";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";
import { CHINESE_SERVICE_LIST } from "./serviceData";

const ZH_SERVICES_URL = buildCanonical("/zh/services");
const ZH_SERVICES_TITLE = "服务项目 — 土耳其舞台、LED与音响灯光租赁";
const ZH_SERVICES_DESCRIPTION =
  "Sahneva 为在土耳其举办的会议、展览、演出与企业活动提供舞台、T台、LED屏幕、音响灯光、桁架、篷房及桌椅租赁，含现场安装与技术支持。";
const ZH_SERVICES_IMAGE = `${SITE_URL}/img/hero-bg-desktop.webp`;

const SERVICE_KEYWORDS = [
  "土耳其舞台租赁",
  "土耳其LED屏幕租赁",
  "活动音响灯光",
  "篷房租赁",
  "企业活动制作",
  "活动技术执行",
];

const SERVICES_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Sahneva 土耳其活动服务项目",
  url: ZH_SERVICES_URL,
  inLanguage: "zh",
  itemListElement: CHINESE_SERVICE_LIST.map((service, index) => ({
    "@type": "Offer",
    position: index + 1,
    url: `${SITE_URL}${service.href}`,
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      areaServed: "Türkiye",
    },
  })),
};

export const metadata = {
  title: ZH_SERVICES_TITLE,
  description: ZH_SERVICES_DESCRIPTION,
  alternates: {
    canonical: ZH_SERVICES_URL,
    languages: {
      "tr-TR": `${SITE_URL}/hizmetler`,
      en: `${SITE_URL}/en/services`,
      ar: `${SITE_URL}/ar/services`,
      ru: `${SITE_URL}/ru/services`,
      zh: ZH_SERVICES_URL,
      "x-default": `${SITE_URL}/hizmetler`,
    },
  },
  openGraph: {
    title: `${ZH_SERVICES_TITLE} | Sahneva`,
    description: ZH_SERVICES_DESCRIPTION,
    url: ZH_SERVICES_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: ZH_SERVICES_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sahneva - 土耳其活动服务项目",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${ZH_SERVICES_TITLE} | Sahneva`,
    description: ZH_SERVICES_DESCRIPTION,
    images: [ZH_SERVICES_IMAGE],
  },
};

export default function ChineseServicesPage() {
  return (
    <div className="bg-white">
      <JsonLd data={SERVICES_JSON_LD} />
      <BreadcrumbJsonLd
        items={[
          { name: "首页", url: "/zh" },
          { name: "服务项目", url: "/zh/services" },
        ]}
        baseUrl={SITE_URL}
      />

      <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-20">
        <div className="absolute inset-0 opacity-45" aria-hidden="true">
          <Image
            src="/img/hero-bg-desktop.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-blue-950/70" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
              Sahneva services
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              土耳其活动服务项目
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/[0.82]">
              舞台、LED屏幕、音响、灯光、桁架、篷房、家具与现场团队，
              服务在土耳其举办的会议、展览、晚宴、演出与户外项目。
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {SERVICE_KEYWORDS.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-18">
        <div className="grid gap-6 lg:grid-cols-2">
          {CHINESE_SERVICE_LIST.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={`${service.title} - Sahneva`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">
                    {service.eyebrow}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
                    {service.shortTitle}
                  </h2>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <p className="text-base leading-7 text-slate-700">{service.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.scenarios.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={service.href}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-slate-800"
                  >
                    了解详情
                  </Link>
                  <Link
                    href="/zh/contact"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-slate-300 px-5 text-sm font-black text-slate-950 transition hover:border-slate-950"
                  >
                    获取报价
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
          {[
            ["服务区域", "伊斯坦布尔、安塔利亚、安卡拉、伊兹密尔及土耳其其他城市。"],
            ["服务内容", "舞台、LED、音响、灯光、桁架、篷房与桌椅。"],
            ["合作方式", "需求沟通、方案配置、安装、测试、现场支持、拆除。"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-black text-slate-950">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { Building2, Layers, Monitor, Music, Tent, Users } from "lucide-react";

import HeroSection from "@/components/HeroSection";
import HeroBelow from "@/components/HeroBelow";
import ServicesTabs from "@/components/ServicesTabs";
import JsonLd from "@/components/seo/JsonLd";
import { buildAlternateLanguages, buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const ZH_HOME_URL = buildCanonical("/zh");

const ZH_WHATSAPP_TEXT = encodeURIComponent(
  "您好，我想咨询在土耳其举办活动的设备租赁与报价。"
);

const ZH_SERVICES = [
  {
    id: "stage",
    title: "舞台与T台租赁",
    Icon: Layers,
    description:
      "模块化舞台、T台、走秀台、桁架、台阶与围栏，服务土耳其境内各类活动。",
    image: "/img/hizmet-sahne.webp",
    features: ["舞台与T台", "桁架系统", "安全围栏", "现场安装"],
    href: "/zh/stage-rental",
  },
  {
    id: "led",
    title: "LED屏幕租赁",
    Icon: Monitor,
    description:
      "室内与室外LED屏幕、视频墙、视频处理器、内容播控与现场操作员。",
    image: "/img/led/300m2-p19-indoor-led-ekran-kurumsal-etkinlik-sahneva.webp",
    features: ["LED视频墙", "室内 / 室外", "P1.9-P3.9", "现场操作员"],
    href: "/zh/led-screen-rental",
  },
  {
    id: "sound-light",
    title: "音响、灯光与桁架",
    Icon: Music,
    description:
      "线阵音响、无线麦克风、舞台灯光、摇头灯、DMX控制与现场技术支持。",
    image: "/img/ses-isik/ses-sistemi.webp",
    features: ["线阵音响", "无线麦克风", "舞台灯光", "DMX控制"],
    href: "/zh/sound-light-rental",
  },
  {
    id: "tent",
    title: "活动篷房",
    Icon: Tent,
    description:
      "篷房、尖顶篷、活动家具、桌椅、地面铺装与照明，覆盖各类户外场地。",
    image: "/img/galeri/cadir-kiralama-1.webp",
    features: ["活动篷房", "桌椅家具", "照明系统", "物流运输"],
    href: "/zh/tent-rental",
  },
  {
    id: "corporate",
    title: "企业活动制作",
    Icon: Building2,
    description:
      "会议、新品发布会、经销商大会与晚宴的全程技术制作与现场保障。",
    image: "/img/kurumsal/kurumsal-sahne-led-ekran.webp",
    features: ["会议论坛", "新品发布", "品牌舞台", "后台保障"],
    href: "/zh/corporate-events",
  },
  {
    id: "furniture",
    title: "活动家具",
    Icon: Users,
    description:
      "桌椅、贵宾区、休息区家具，可与舞台、篷房或LED屏幕一站式配套。",
    image: "/img/hizmet-masa.webp",
    features: ["桌子", "椅子", "贵宾区", "休息区"],
    href: "/zh/services#furniture",
  },
];

const HERO_DICTIONARY = {
  keywords: [
    { text: "舞台租赁", color: "text-blue-200" },
    { text: "LED屏幕", color: "text-cyan-200" },
    { text: "音响灯光", color: "text-purple-200" },
    { text: "土耳其篷房", color: "text-emerald-200" },
  ],
  keywordsAriaLabel: "Sahneva 中文核心服务",
  badge: "舞台 • LED屏幕 • 音响 • 灯光 • 土耳其篷房",
  titleLine1Prefix: "Sahneva",
  titleLine1: "活动设备租赁",
  titleLine2: "服务土耳其全境",
  description:
    "为在伊斯坦布尔及土耳其全境举办的会议、展览、演出、发布会与企业活动提供专业的<strong>舞台、T台、LED屏幕、音响灯光、桁架、篷房及桌椅租赁</strong>，一个团队全程负责。",
  proofPoints: [
    { value: "700+", label: "项目案例" },
    { value: "81 城", label: "覆盖土耳其" },
    { value: "24/7", label: "响应与支持" },
    { value: "1 团队", label: "舞台、LED、音响" },
  ],
  ctaCall: "致电咨询",
  ctaCallAria: "致电 Sahneva",
  ctaWhatsapp: "WhatsApp",
  ctaWhatsappAria: "打开 WhatsApp 获取报价",
  ctaQuote: "服务项目",
  ctaQuoteAria: "查看服务项目",
  quoteAnchor: "#zh-services",
  whatsappText: ZH_WHATSAPP_TEXT,
};

const ZH_WHATSAPP_HREF = `https://wa.me/905453048671?text=${ZH_WHATSAPP_TEXT}`;

const HERO_BELOW_DICTIONARY = {
  sectionBadge: "合作方式",
  sectionTitle: "为您在土耳其的活动配置完整技术方案",
  sectionDesc:
    "无论您计划在土耳其举办会议、展览、晚宴、新品发布还是户外活动，Sahneva 都会把舞台、LED屏幕、音响灯光、篷房、家具和安装团队整合到一份清晰的执行方案中。",
  featuresAriaLabel: "Sahneva 为中文客户提供的优势",
  features: [
    {
      icon: "01",
      title: "设备与团队",
      description: "根据活动形式、场地、城市和安装周期配置合适的设备组合。",
      color: "text-cyan-300",
    },
    {
      icon: "02",
      title: "视觉呈现",
      description: "舞台、LED屏幕、灯光与品牌区域呈现为统一的视觉系统。",
      color: "text-blue-300",
    },
    {
      icon: "03",
      title: "现场保障",
      description: "活动进行期间技术人员全程驻场，实时保障节目运行。",
      color: "text-emerald-300",
    },
  ],
  processSteps: [
    {
      title: "需求沟通",
      desc: "城市、日期、场地、活动形式、人数与所需服务。",
      badge: "1",
    },
    {
      title: "方案配置",
      desc: "舞台、LED、音响、灯光、篷房、家具与安装团队。",
      badge: "2",
    },
    {
      title: "安装执行",
      desc: "运输、安装、测试、现场支持与活动结束后的拆除。",
      badge: "3",
    },
  ],
  consultationTitle: "需要土耳其活动的报价方案？",
  consultationDesc:
    "把日期、城市和所需服务发给我们：<strong>舞台、LED屏幕、音响、灯光、篷房或家具</strong>，我们会提供清晰的设备方案。",
  consultationCta: "联系我们",
  consultationCtaHref: "/zh/contact",
};

const SERVICES_DICTIONARY = {
  sectionPill: "土耳其活动服务",
  sectionTitlePrefix: "活动设备租赁：",
  sectionTitleHighlight: "舞台、LED、音响灯光与篷房",
  sectionDesc:
    "可单独租赁某一类设备，也可以为在伊斯坦布尔、安塔利亚、安卡拉、伊兹密尔等土耳其城市举办的活动配置完整技术方案。",
  featuresHeading: "包含内容",
  ctaLabel: "了解详情",
  ctaTitle: "{{title}}（土耳其）",
  imageBadgeLabel: "Sahneva",
  imageAlt: "{{title}} - 土耳其 Sahneva",
};

const CITY_SIGNALS = [
  "伊斯坦布尔",
  "安塔利亚",
  "安卡拉",
  "伊兹密尔",
  "布尔萨",
  "科贾埃利",
  "科尼亚",
  "土耳其全境",
];

const ZH_EVENT_FORMATS = [
  {
    title: "企业活动",
    text: "会议、经销商大会、新品发布与晚宴：可控的舞台、LED屏幕、音响灯光与后台运营。",
    href: "/zh/corporate-events",
  },
  {
    title: "展会与品牌展位",
    text: "为参加土耳其展会的企业提供LED视频墙、展示舞台、音响灯光、桁架、家具与接待区搭建。",
    href: "/zh/led-screen-rental",
  },
  {
    title: "演出与音乐节",
    text: "舞台、户外LED、线阵音响、灯光、桁架与技术团队，服务露天场地与城市活动。",
    href: "/zh/stage-rental",
  },
  {
    title: "户外与篷房区域",
    text: "尖顶篷、球形篷、大型活动篷房，配套家具、照明、地面铺装与临时场地基础设施。",
    href: "/zh/tent-rental",
  },
];

const ZH_HOME_FAQ_ITEMS = [
  {
    question: "在土耳其举办活动的设备租赁如何规划？",
    answer:
      "首先确认城市、日期、场地、活动形式、人数和所需服务，然后我们配置技术方案：舞台、LED屏幕、音响、灯光、篷房、家具、安装与现场支持，并给出清晰报价。",
  },
  {
    question: "你们只在伊斯坦布尔服务吗？",
    answer:
      "不是。Sahneva 服务伊斯坦布尔、安塔利亚、安卡拉、伊兹密尔、布尔萨、科贾埃利等土耳其各城市。物流、安装团队和工期会根据场地统一规划。",
  },
  {
    question: "可以用中文或英文发送活动需求吗？",
    answer:
      "可以。您可以用中文、英文或土耳其语发送需求。只需说明城市、日期、活动形式、场地和所需服务，我们会尽快回复报价。",
  },
  {
    question: "舞台、LED屏幕、音响灯光可以打包租赁吗？",
    answer:
      "可以。大多数项目都是整体规划的：舞台、LED视频墙、音响、灯光、桁架、篷房、家具与技术人员整合为一套方案，由一个团队负责执行。",
  },
  {
    question: "获取快速报价需要提供哪些信息？",
    answer:
      "城市、日期、场地、预计人数、活动类型、所需服务和安装时间。如有场地平面图、技术清单（rider）或视觉参考，也可以一并发送。",
  },
  {
    question: "安装周期取决于哪些因素？",
    answer:
      "取决于城市、场地进出条件、舞台或LED屏幕的尺寸、桁架高度、设备数量、进场时间以及场地的安全要求。",
  },
];

const ZH_HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${ZH_HOME_URL}#business`,
  name: "Sahneva Organizasyon",
  url: ZH_HOME_URL,
  image: `${SITE_URL}/img/hero-bg.webp`,
  telephone: "+90 545 304 86 71",
  areaServed: "Türkiye",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.096173214009205,
    longitude: 28.97663777534253,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hamidiye, Anadolu Cd. 61 A",
    addressLocality: "Kagithane",
    addressRegion: "Istanbul",
    postalCode: "34400",
    addressCountry: "TR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  description:
    "为土耳其境内的活动提供舞台、T台、LED屏幕、音响灯光、篷房及家具租赁服务。",
  makesOffer: ZH_SERVICES.slice(0, 5).map((service) => ({
    "@type": "Offer",
    url: `${SITE_URL}${service.href}`,
    itemOffered: {
      "@type": "Service",
      name: service.title,
      areaServed: "Türkiye",
    },
  })),
};

const ZH_HOME_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${ZH_HOME_URL}#faq`,
  inLanguage: "zh-CN",
  mainEntity: ZH_HOME_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata = {
  title: {
    absolute: "土耳其舞台、LED屏幕、音响灯光与篷房租赁 | Sahneva",
  },
  description:
    "Sahneva：为在伊斯坦布尔及土耳其全境举办的会议、展览、演出与企业活动提供舞台、T台、LED屏幕、音响灯光、桁架、篷房及桌椅租赁。",
  alternates: {
    canonical: ZH_HOME_URL,
    languages: buildAlternateLanguages(),
  },
  openGraph: {
    title: "土耳其舞台、LED屏幕、音响灯光与篷房租赁 | Sahneva",
    description:
      "Sahneva 为土耳其境内的活动提供完整技术方案：舞台、LED屏幕、音响、灯光、桁架、篷房、家具、安装与现场支持。",
    url: ZH_HOME_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: `${SITE_URL}/img/hero-bg-desktop.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva - 土耳其活动设备租赁",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "土耳其舞台、LED屏幕、音响灯光与篷房租赁 | Sahneva",
    description:
      "舞台、LED屏幕、音响、灯光、桁架、篷房、家具与技术团队，服务土耳其境内的各类活动。",
    images: [`${SITE_URL}/img/hero-bg-desktop.webp`],
  },
};

export default function ChineseHomePage() {
  return (
    <div className="overflow-x-hidden bg-[#0B1120]">
      <JsonLd data={ZH_HOME_JSON_LD} />
      <JsonLd data={ZH_HOME_FAQ_JSON_LD} id="zh-home-faq-jsonld" />
      <HeroSection dictionary={HERO_DICTIONARY} />
      <HeroBelow dictionary={HERO_BELOW_DICTIONARY} />

      <div id="zh-services" />
      <ServicesTabs servicesData={ZH_SERVICES} dictionary={SERVICES_DICTIONARY} />

      <section className="bg-white py-14 md:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              在土耳其办活动
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              为中文客户提供设备与现场团队
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">
              Sahneva 服务计划在土耳其举办活动的品牌、参展企业、代理机构与活动主办方：
              我们负责设备配置、安装排期、物流运输和现场技术保障，让您在异国办活动也能一切可控。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {CITY_SIGNALS.map((city) => (
              <div
                key={city}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-extrabold text-slate-900"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_1150px] lg:[contain-intrinsic-size:auto_680px] bg-slate-50 py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              项目类型
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              当您需要的不只是租一件设备，而是完整的活动技术制作
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ZH_EVENT_FORMATS.map((format) => (
              <Link
                key={format.title}
                href={format.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
              >
                <h3 className="text-xl font-black text-slate-950">{format.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{format.text}</p>
                <span className="mt-5 inline-flex text-sm font-black text-indigo-700 group-hover:text-indigo-900">
                  了解详情
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="content-visibility-auto [contain-intrinsic-size:auto_1350px] lg:[contain-intrinsic-size:auto_820px] bg-white py-14 md:py-18"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
                常见问题
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                在土耳其办活动前需要了解的事项
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                为计划在土耳其举办会议、展览、演出、晚宴、发布会或户外项目的中文客户准备的简明解答。
              </p>
            </div>
            <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-7">
              {ZH_HOME_FAQ_ITEMS.map((item) => (
                <article key={item.question} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-black text-slate-950">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
              Sahneva Turkey
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              需要舞台、LED屏幕、音响灯光或篷房？
            </h2>
            <p className="mt-3 text-base leading-7 text-white/[0.75]">
              把城市、日期和活动形式发给我们，我们会配置技术方案与安装团队。
            </p>
          </div>
          <Link
            href="/zh/contact"
            className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-emerald-500 px-7 text-base font-black text-white transition hover:bg-emerald-600"
          >
            获取报价
          </Link>
          <Link
            href="/zh/our-work"
            className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 text-base font-black text-white transition hover:bg-white/15"
          >
            项目案例
          </Link>
          <a
            href={ZH_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 text-base font-black text-white transition hover:bg-white/15"
          >
            WhatsApp 咨询
          </a>
        </div>
      </section>
    </div>
  );
}

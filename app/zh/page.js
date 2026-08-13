import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Clock3,
  Globe2,
  Headphones,
  Languages,
  Layers,
  MapPinned,
  Monitor,
  Music,
  Tent,
  Truck,
  Users,
  Wrench,
} from "lucide-react";

import HeroSection from "@/components/HeroSection";
import HeroBelow from "@/components/HeroBelow";
import ServicesTabs from "@/components/ServicesTabs";
import JsonLd from "@/components/seo/JsonLd";
import { buildAlternateLanguages, buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const ZH_HOME_URL = buildCanonical("/zh");

const ZH_WHATSAPP_TEXT = encodeURIComponent(
  "您好，我想咨询在土耳其举办活动的技术方案与报价。城市：[ ]，日期：[ ]，场地：[ ]，活动类型：[ ]。"
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
    { text: "展会", color: "text-blue-200" },
    { text: "新品发布会", color: "text-cyan-200" },
    { text: "经销商大会", color: "text-purple-200" },
    { text: "企业活动", color: "text-emerald-200" },
    { text: "品牌活动", color: "text-amber-200" },
  ],
  keywordsAriaLabel: "Sahneva 服务的活动类型",
  badge: "土耳其本地团队 • 技术制作 • 现场执行",
  titleLine1Prefix: "中国企业在土耳其的",
  titleLine1: "本地活动技术合作伙伴",
  titleLine2: "从设备到现场执行",
  description:
    "从<strong>LED显示屏、舞台、音响灯光</strong>到本地运输、专业安装、现场技术支持和活动结束后的拆除，均由 Sahneva 土耳其本地团队统一协调执行，服务覆盖土耳其全国。",
  proofPoints: [
    { value: "700+", label: "已完成项目" },
    { value: "全国", label: "本地物流与执行" },
    { value: "24/7", label: "活动现场支持" },
    { value: "1 个团队", label: "安装、执行与拆除" },
  ],
  ctaCall: "致电咨询",
  ctaCallAria: "致电 Sahneva",
  ctaWhatsapp: "WhatsApp 联系我们",
  ctaWhatsappAria: "打开 WhatsApp 获取报价",
  ctaQuote: "微信获取中文报价",
  ctaQuoteAria: "查看 Sahneva 微信二维码并获取中文报价",
  quoteAnchor: "#wechat",
  whatsappText: ZH_WHATSAPP_TEXT,
};

const ZH_WHATSAPP_HREF = `https://wa.me/905453048671?text=${ZH_WHATSAPP_TEXT}`;

const HERO_BELOW_DICTIONARY = {
  sectionBadge: "3步获取土耳其活动报价",
  sectionTitle: "提交活动信息，由土耳其本地团队制定方案并落地执行",
  sectionDesc:
    "只需发送城市、日期、场地、活动类型与大致规模，我们会把设备、物流、安装、现场运营和拆除整合为一份清晰的执行方案。",
  featuresAriaLabel: "Sahneva 为中文客户提供的优势",
  processAriaLabel: "获取土耳其活动报价的三个步骤",
  features: [
    {
      icon: "01",
      title: "土耳其本地团队",
      description: "本地沟通、场地协调、物流安排与现场执行由一个团队负责。",
      color: "text-cyan-300",
    },
    {
      icon: "02",
      title: "清晰方案与报价",
      description: "根据场地和活动流程明确设备、人员、工期与执行范围。",
      color: "text-blue-300",
    },
    {
      icon: "03",
      title: "安装到拆除",
      description: "设备进场、搭建、调试、活动日支持与会后拆除统一安排。",
      color: "text-emerald-300",
    },
  ],
  processSteps: [
    {
      title: "提交需求",
      desc: "发送城市、日期、场地、活动类型、预计人数及所需服务。",
      badge: "01",
    },
    {
      title: "我们为您制定方案",
      desc: "配置LED显示屏、舞台、音响灯光、物流运输、安装团队及现场技术人员。",
      badge: "02",
    },
    {
      title: "获取报价",
      desc: "收到中文或英文报价；确认后由本地团队完成运输、安装、调试、现场支持与拆除。",
      badge: "03",
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

const ZH_LOCAL_ADVANTAGES = [
  {
    Icon: MapPinned,
    title: "土耳其本地团队",
    description: "熟悉当地场地、进场规则与执行流程，快速协调现场需求。",
  },
  {
    Icon: Clock3,
    title: "快速响应",
    description: "收到城市、日期和活动需求后，及时确认档期、设备与技术条件。",
  },
  {
    Icon: Globe2,
    title: "覆盖土耳其全国",
    description: "根据活动城市统一安排设备、车辆、安装人员与执行计划。",
  },
  {
    Icon: Truck,
    title: "本地物流运输",
    description: "协调设备运输、进场、撤场及时间安排，降低跨城执行压力。",
  },
  {
    Icon: Wrench,
    title: "专业安装与拆除",
    description: "按场地条件完成搭建、接线、调试、安全检查与会后拆除。",
  },
  {
    Icon: Headphones,
    title: "现场技术支持",
    description: "技术人员活动期间驻场，保障LED显示屏、音响和灯光稳定运行。",
  },
  {
    Icon: Languages,
    title: "多语言沟通",
    description: "支持中文、英文和土耳其语需求沟通与报价，减少信息误差。",
  },
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
    question: "可以通过微信联系 Sahneva 吗？",
    answer:
      "可以。微信号是 sahneva。您也可以扫描页面中的二维码，发送城市、日期、场地、活动类型和所需服务。",
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
    "中国企业在土耳其的本地活动技术与现场执行合作伙伴，提供舞台、LED显示屏、音响灯光、本地运输、安装、现场支持与拆除。",
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
    "Sahneva 是中国企业在土耳其的本地活动技术合作伙伴，提供舞台、LED显示屏、音响灯光、本地运输、安装、现场支持与拆除。",
  alternates: {
    canonical: ZH_HOME_URL,
    languages: buildAlternateLanguages(),
  },
  openGraph: {
    title: "土耳其舞台、LED屏幕、音响灯光与篷房租赁 | Sahneva",
    description:
      "中国企业在土耳其的本地活动技术合作伙伴：舞台、LED显示屏、音响灯光、运输、安装、现场支持与拆除由一个本地团队执行。",
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
      "中国企业在土耳其的本地活动技术合作伙伴，提供舞台、LED显示屏、音响灯光、运输、安装、现场支持与拆除。",
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

      <section className="bg-white py-14 md:py-18" aria-labelledby="zh-china-case-title">
        <div className="mx-auto max-w-7xl px-4">
          <article className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-2xl lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[280px] lg:min-h-[500px]">
              <Image
                src="/img/blog/bayi-toplantisi-organizasyonu-rehberi-hero.webp"
                alt="第三届土耳其—中国经贸论坛现场的大型LED显示屏、会议舞台与参会人员"
                fill
                quality={80}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"
                aria-hidden="true"
              />
              <p className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-slate-950/75 px-4 py-2 text-sm font-black text-white backdrop-blur-sm">
                真实项目 · 伊斯坦布尔
              </p>
            </div>

            <div className="flex flex-col justify-center p-6 text-white sm:p-8 lg:p-10">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-300">
                中土商务活动技术执行案例
              </p>
              <h2
                id="zh-china-case-title"
                className="mt-3 text-3xl font-black leading-tight md:text-4xl"
              >
                第三届土耳其—中国经贸论坛（TCBC）
              </h2>
              <p className="mt-3 font-bold text-blue-200">伊斯坦布尔｜2026年2月7日</p>
              <p className="mt-5 text-base leading-8 text-white/80">
                该会议由 DEİK、TÜSİAD 与中国国际贸易促进委员会（CCPIT）共同举办。图中为
                Sahneva 团队完成的活动现场，展示了我们在中土商务会议中的本地技术执行能力。
              </p>
              <p className="mt-4 text-base leading-8 text-white/80">
                从设备进场、舞台与LED显示系统搭建、安装调试到活动日现场技术支持与会后拆除，
                由土耳其本地团队统一协调。
              </p>

              <ul className="mt-6 flex list-none flex-wrap gap-2 p-0" aria-label="项目技术范围">
                {["中土商务会议", "LED显示系统", "舞台搭建", "安装调试", "现场技术支持"].map(
                  (item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-bold text-white/90"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/zh/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-emerald-500 px-5 font-black text-white transition hover:bg-emerald-600"
                >
                  为类似活动获取报价
                </Link>
                <Link
                  href="/zh/our-work"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 font-black text-white transition hover:bg-white/15"
                >
                  查看更多现场项目
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div id="zh-services" />
      <ServicesTabs servicesData={ZH_SERVICES} dictionary={SERVICES_DICTIONARY} />

      <section className="bg-white py-14 md:py-18" aria-labelledby="zh-local-advantages-title">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              土耳其本地优势
            </p>
            <h2
              id="zh-local-advantages-title"
              className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl"
            >
              为什么选择 Sahneva？
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">
              从设备进场到活动结束后的拆除，由一个土耳其本地团队统一协调，让跨国活动执行更清晰、更高效。
            </p>
          </div>

          <ul className="mt-8 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ZH_LOCAL_ADVANTAGES.map(({ Icon, title, description }) => (
              <li key={title} className="h-full">
                <article className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <Icon className="h-7 w-7 text-indigo-600" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-black text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p>
                </article>
              </li>
            ))}
          </ul>
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

      <section
        id="wechat"
        className="scroll-mt-24 bg-slate-950 py-14 text-white"
        aria-labelledby="wechat-title"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
              Sahneva Turkey
            </p>
            <h2 id="wechat-title" className="mt-3 text-3xl font-black md:text-4xl">
              通过微信、WhatsApp或表单获取中文报价
            </h2>
            <p className="mt-3 text-base leading-7 text-white/[0.75]">
              发送城市、日期、场地、活动类型与所需服务，我们会配置设备、物流、安装团队与现场技术支持。
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/zh/contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-emerald-500 px-7 text-base font-black text-white transition hover:bg-emerald-600"
              >
                获取中文报价
              </Link>
              <a
                href={ZH_WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 text-base font-black text-white transition hover:bg-white/15"
              >
                WhatsApp 咨询
              </a>
              <Link
                href="/zh/our-work"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 text-base font-black text-white transition hover:bg-white/15"
              >
                项目案例
              </Link>
            </div>
          </div>

          <aside className="mx-auto flex w-full max-w-md flex-col items-center gap-5 rounded-3xl bg-white p-5 text-center text-slate-950 shadow-2xl sm:flex-row sm:text-left">
            <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white sm:h-52 sm:w-52">
              <Image
                src="/img/zh/sahneva-wechat-qr.jpeg"
                alt="Sahneva微信二维码"
                fill
                quality={90}
                sizes="(max-width: 640px) 256px, 208px"
                className="object-cover object-center"
              />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-emerald-700">
                微信咨询
              </p>
              <p className="mt-2 text-xl font-black">微信号：sahneva</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                扫码添加微信，发送城市、日期、场地和活动类型。
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

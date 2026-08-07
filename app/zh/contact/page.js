import JsonLd from "@/components/seo/JsonLd";
import QuoteFormValidation from "@/components/QuoteFormValidation.client";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const ZH_CONTACT_URL = buildCanonical("/zh/contact");
const ZH_CONTACT_IMAGE = `${SITE_URL}/img/hero-bg.webp`;
const FORM_ENDPOINT = "https://formspree.io/f/xanppven";
const LOCAL_BUSINESS_ID = `${SITE_URL}/#local`;

const WEB_MCP_QUOTE_FORM_PROPS = {
  toolname: "requestEventProductionQuote",
  tooldescription:
    "Submit an event production quote request to Sahneva for stage, LED screen, sound, lighting, truss, tent, podium and technical crew needs in Turkey.",
};

const WEB_MCP_QUOTE_FIELD_PROPS = {
  name: {
    toolparamdescription:
      "Full name of the person requesting the event production quote.",
  },
  phone: {
    toolparamdescription:
      "Phone number with country code for quote follow-up by Sahneva.",
  },
  email: {
    toolparamdescription:
      "Email address where Sahneva should send the proposal and technical details.",
  },
  eventType: {
    toolparamdescription:
      "Type of event such as corporate event, concert, festival, conference, exhibition or other.",
  },
  message: {
    toolparamdescription:
      "Event date, city or venue, estimated audience size, required equipment and production details.",
  },
  formSubject: {
    title: "Internal form subject",
    toolparamdescription:
      "Internal Formspree subject line used to identify this Sahneva quote request.",
  },
  redirectUrl: {
    title: "Post-submit redirect URL",
    toolparamdescription:
      "Internal redirect URL that sends the user to the Sahneva thank-you page after submission.",
  },
  spamTrap: {
    title: "Spam prevention field",
    toolparamdescription:
      "Hidden anti-spam field that should be left empty by real users and AI agents.",
  },
};

const CONTACT_CHANNELS = [
  {
    title: "电子邮箱",
    value: "info@sahneva.com",
    href: "mailto:info@sahneva.com",
    description: "适合发送技术清单、场地平面图和附件资料，中英文均可。",
  },
  {
    title: "WhatsApp",
    value: "+90 545 304 86 71",
    href: "https://wa.me/905453048671?text=%E6%82%A8%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E5%92%A8%E8%AF%A2%E5%9C%A8%E5%9C%9F%E8%80%B3%E5%85%B6%E4%B8%BE%E5%8A%9E%E6%B4%BB%E5%8A%A8%E7%9A%84%E8%AE%BE%E5%A4%87%E7%A7%9F%E8%B5%81%E4%B8%8E%E6%8A%A5%E4%BB%B7%E3%80%82",
    description: "发送日期、城市和简要需求，快速获取回复。",
  },
  {
    title: "电话",
    value: "+90 545 304 86 71",
    href: "tel:+905453048671",
    description: "紧急报价或确认团队档期时，欢迎直接来电。",
  },
];

const BRIEF_ITEMS = [
  "城市、场地、日期与安装时间。",
  "活动形式与预计来宾人数。",
  "是否需要舞台、LED屏幕、音响、灯光、桁架、篷房或家具。",
  "特殊需求：品牌包装、直播、礼仪流程、户外条件等。",
];

export const metadata = {
  title: "联系我们 — 获取土耳其活动设备租赁报价",
  description:
    "联系 Sahneva 获取报价：在伊斯坦布尔及土耳其全境为您的会议、展览与企业活动提供舞台、LED屏幕、音响灯光、篷房与桌椅租赁，支持中文沟通。",
  alternates: {
    canonical: ZH_CONTACT_URL,
    languages: {
      "tr-TR": `${SITE_URL}/iletisim`,
      en: `${SITE_URL}/en/contact`,
      de: `${SITE_URL}/de/kontakt`,
      ar: `${SITE_URL}/ar/contact`,
      ru: `${SITE_URL}/ru/contact`,
      zh: ZH_CONTACT_URL,
      "x-default": `${SITE_URL}/en/contact`,
    },
  },
  openGraph: {
    title: "联系我们 — 获取土耳其活动设备租赁报价 | Sahneva",
    description:
      "联系 Sahneva 获取报价：在伊斯坦布尔及土耳其全境为您的会议、展览与企业活动提供舞台、LED屏幕、音响灯光、篷房与桌椅租赁，支持中文沟通。",
    url: ZH_CONTACT_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "zh_CN",
    images: [{ url: ZH_CONTACT_IMAGE, width: 1200, height: 630, alt: "Sahneva 土耳其活动联系渠道" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "联系我们 — 获取土耳其活动设备租赁报价 | Sahneva",
    description:
      "联系 Sahneva 获取报价：在伊斯坦布尔及土耳其全境为您的会议、展览与企业活动提供舞台、LED屏幕、音响灯光、篷房与桌椅租赁，支持中文沟通。",
    images: [ZH_CONTACT_IMAGE],
  },
};

const CONTACT_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${ZH_CONTACT_URL}#webpage`,
      url: ZH_CONTACT_URL,
      name: metadata.openGraph.title,
      description: metadata.description,
      inLanguage: "zh-CN",
      about: { "@id": LOCAL_BUSINESS_ID },
      mainEntity: { "@id": LOCAL_BUSINESS_ID },
      breadcrumb: { "@id": `${ZH_CONTACT_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${ZH_CONTACT_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Sahneva", item: `${SITE_URL}/zh` },
        { "@type": "ListItem", position: 2, name: metadata.title, item: ZH_CONTACT_URL },
      ],
    },
  ],
};

export default function ChineseContactPage() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-10">
      <JsonLd id="zh-contact-jsonld" data={CONTACT_JSON_LD} />
      <header className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-black text-neutral-900">联系 Sahneva</h1>
        <p className="text-base leading-7 text-neutral-600">
          把活动的详细信息发给我们，我们会提供包含设备清单、团队配置、安装工期和预估费用的技术方案。
          支持中文、英文和土耳其语沟通。
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {CONTACT_CHANNELS.map((channel) => (
          <a key={channel.title} href={channel.href} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-lg font-black text-neutral-900">{channel.title}</h2>
            <p className="mt-2 text-base font-bold text-indigo-600">{channel.value}</p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{channel.description}</p>
          </a>
        ))}
      </div>

      <section className="rounded-3xl border border-indigo-100 bg-indigo-50/70 p-6 md:p-8">
        <h2 className="text-2xl font-black text-neutral-900">快速报价需要提供什么？</h2>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {BRIEF_ITEMS.map((item) => (
            <li key={item} className="rounded-2xl border border-white/70 bg-white p-4 text-sm leading-6 text-neutral-700 shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm lg:grid-cols-[0.8fr_1.2fr] md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
            Request a quote
          </p>
          <h2 className="mt-3 text-3xl font-black text-neutral-900">
            发送活动信息，获取技术方案与报价。
          </h2>
          <p className="mt-4 text-sm leading-7 text-neutral-600">
            请填写城市、日期、活动形式、预计人数和所需设备。
            Sahneva 团队会针对项目范围给出专业回复。
          </p>
        </div>

        <form
          action={FORM_ENDPOINT}
          method="POST"
          acceptCharset="UTF-8"
          {...WEB_MCP_QUOTE_FORM_PROPS}
          className="space-y-5"
        >
          <QuoteFormValidation locale="zh" />

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-black text-neutral-800">
                姓名 *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                {...WEB_MCP_QUOTE_FIELD_PROPS.name}
                className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-black text-neutral-800">
                电话（含国家区号）*
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                placeholder="+86 ..."
                {...WEB_MCP_QUOTE_FIELD_PROPS.phone}
                className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-sm font-black text-neutral-800">
                电子邮箱 *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                placeholder="name@example.com"
                {...WEB_MCP_QUOTE_FIELD_PROPS.email}
                className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
              />
            </div>
            <div>
              <label htmlFor="eventType" className="block text-sm font-black text-neutral-800">
                活动形式 *
              </label>
              <select
                id="eventType"
                name="eventType"
                required
                autoComplete="off"
                {...WEB_MCP_QUOTE_FIELD_PROPS.eventType}
                className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none transition focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
              >
                <option value="">请选择活动形式</option>
                <option value="Corporate Event">企业活动</option>
                <option value="Conference">会议论坛</option>
                <option value="Concert">演出或音乐节</option>
                <option value="Exhibition">展会展览</option>
                <option value="Esports Event">电竞赛事</option>
                <option value="Other">其他</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-black text-neutral-800">
              活动详情 *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              autoComplete="off"
              placeholder="城市、日期、场地、人数、所需设备..."
              {...WEB_MCP_QUOTE_FIELD_PROPS.message}
              className="mt-2 w-full resize-none rounded-2xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
            />
          </div>

          <input type="hidden" name="_subject" value="Sahneva | Chinese Proposal Request" {...WEB_MCP_QUOTE_FIELD_PROPS.formSubject} />
          <input type="hidden" name="_redirect" value="https://www.sahneva.com/tesekkurler" {...WEB_MCP_QUOTE_FIELD_PROPS.redirectUrl} />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" {...WEB_MCP_QUOTE_FIELD_PROPS.spamTrap} />

          <button
            type="submit"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl bg-indigo-600 px-6 text-sm font-black text-white transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
          >
            发送咨询
          </button>
        </form>
      </section>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import CaseGallery from "@/components/CaseGallery";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo/seoConfig";
import { getPortfolioImages } from "@/lib/portfolioGallery";

import { CHINESE_SERVICE_LIST } from "./serviceData";

const WHATSAPP_TEXT = encodeURIComponent(
  "您好，我想咨询在土耳其举办活动的设备租赁与报价。"
);

const BUSINESS_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Hamidiye, Anadolu Cd. 61 A",
  addressLocality: "Kagithane",
  addressRegion: "Istanbul",
  postalCode: "34400",
  addressCountry: "TR",
};

function buildServiceJsonLd(service) {
  const pageUrl = `${SITE_URL}${service.href}`;
  const faqId = `${pageUrl}#faq`;
  const serviceId = `${pageUrl}#service`;

  const graph = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: service.title,
      description: service.description,
      inLanguage: "zh-CN",
      isPartOf: { "@id": `${SITE_URL}/zh#website` },
      about: { "@id": serviceId },
      hasPart: [{ "@id": faqId }],
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: service.title,
      description: service.description,
      serviceType: service.shortTitle,
      areaServed: [
        { "@type": "Country", name: "Türkiye" },
        { "@type": "City", name: "伊斯坦布尔" },
        { "@type": "City", name: "安塔利亚" },
        { "@type": "City", name: "安卡拉" },
        { "@type": "City", name: "伊兹密尔" },
      ],
      provider: {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/zh#business`,
        name: "Sahneva Organizasyon",
        url: `${SITE_URL}/zh`,
        telephone: "+90 545 304 86 71",
        address: BUSINESS_ADDRESS,
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: pageUrl,
        priceCurrency: "TRY",
      },
    },
  ];

  if (service.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": faqId,
      inLanguage: "zh-CN",
      mainEntity: service.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function RelatedServices({ currentSlug }) {
  const related = CHINESE_SERVICE_LIST.filter((item) => item.slug !== currentSlug).slice(0, 4);

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {related.map((item) => (
        <Link
          key={item.slug}
          href={item.href}
          className="group rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-cyan-300/50 hover:bg-white/[0.09]"
        >
          <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200/80">
            {item.eyebrow}
          </p>
          <h3 className="mt-2 text-lg font-black text-white">{item.shortTitle}</h3>
          <p className="mt-2 text-sm leading-6 text-white/[0.68]">{item.description}</p>
          <span className="mt-4 inline-flex text-sm font-black text-cyan-200 group-hover:text-white">
            了解详情
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function ServicePage({ service }) {
  const jsonLd = buildServiceJsonLd(service);
  const galleryImages = getPortfolioImages(service.gallery, "zh");

  return (
    <div className="overflow-hidden bg-white">
      <JsonLd data={jsonLd} id={`zh-${service.slug}-jsonld`} />
      <BreadcrumbJsonLd
        items={[
          { name: "首页", url: "/zh" },
          { name: "服务项目", url: "/zh/services" },
          { name: service.shortTitle, url: service.href },
        ]}
        baseUrl={SITE_URL}
      />

      <section className="relative min-h-[72vh] overflow-hidden bg-slate-950 text-white">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-72"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/64 to-slate-950/90" />
        <div className="absolute inset-0 grid-overlay opacity-25" aria-hidden="true" />
        <div
          className="absolute -right-28 top-20 h-80 w-80 rounded-full bg-cyan-400/18 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-blue-500/18 blur-[120px]"
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto grid min-h-[72vh] gap-10 px-4 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-cyan-100 backdrop-blur">
              {service.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/[0.86]">
              {service.description}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-cyan-50/76">
              {service.intent}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/zh/contact"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-emerald-500 px-7 font-black text-white shadow-[0_18px_42px_rgba(16,185,129,0.28)] transition hover:bg-emerald-600"
              >
                获取报价
              </Link>
              <a
                href={`https://wa.me/905453048671?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 font-black text-white backdrop-blur transition hover:bg-white/15"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/14 bg-white/[0.08] p-5 shadow-2xl backdrop-blur md:p-6">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              快速参考
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {service.heroStats.map((stat) => (
                <div key={`${stat.value}-${stat.label}`} className="rounded-2xl bg-slate-950/54 p-4">
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="mt-1 text-sm font-bold text-white/[0.66]">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/58 p-5">
              <h2 className="text-xl font-black text-white">报价所需信息</h2>
              <ul className="mt-4 space-y-3">
                {service.planningNotes.map((note) => (
                  <li key={note} className="flex gap-3 text-sm font-semibold leading-6 text-white/[0.78]">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" aria-hidden="true" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_1250px] lg:[contain-intrinsic-size:auto_760px] bg-white py-16 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              服务内容
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              根据场地、城市和活动形式定制技术方案
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">
              {service.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.scenarios.map((scenario) => (
                <span
                  key={scenario}
                  className="rounded-full bg-indigo-50 px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-indigo-700"
                >
                  {scenario}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.highlights.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_1180px] lg:[contain-intrinsic-size:auto_760px] bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              包含内容
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">
              设备、安装与现场保障
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.included.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white">
                  ✓
                </div>
                <p className="text-base font-bold leading-7 text-slate-800">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {galleryImages.length ? (
        <section className="content-visibility-auto [contain-intrinsic-size:auto_1200px] lg:[contain-intrinsic-size:auto_800px] bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-9 max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
                项目图库
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                真实项目现场照片
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                这些照片拍摄于安装过程与活动当天的真实场地，可以直接看到 Sahneva 团队的执行效果。
              </p>
            </div>
            <CaseGallery images={galleryImages} visibleCount={8} priorityCount={2} locale="zh" />
            <div className="mt-8 text-center">
              <Link
                href="/zh/our-work"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border-2 border-indigo-600 px-7 text-sm font-black text-indigo-700 transition hover:bg-indigo-600 hover:text-white"
              >
                观看现场视频
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="content-visibility-auto [contain-intrinsic-size:auto_950px] lg:[contain-intrinsic-size:auto_620px] bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
                应用场景
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                适用于注重可视效果、节奏与专业执行的活动
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {service.useCases.map((item) => (
                <article key={item.title} className="rounded-3xl bg-slate-950 p-6 text-white">
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.72]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_980px] lg:[contain-intrinsic-size:auto_620px] bg-slate-950 py-16 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              合作流程
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              从需求沟通到活动结束拆除，流程清晰可控
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-4">
            {service.process.map((step, index) => (
              <article
                key={step}
                className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6"
              >
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-200 text-base font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold leading-7 text-white/[0.76]">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="content-visibility-auto [contain-intrinsic-size:auto_1100px] lg:[contain-intrinsic-size:auto_760px] bg-white py-16 md:py-20"
      >
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[1fr_0.88fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              常见问题
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              报价前的常见问题
            </h2>
            <div className="mt-7 divide-y divide-slate-200">
              {service.faq.map((item) => (
                <article key={item.question} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-black text-slate-950">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
              为您的场地定制方案
            </p>
            <h2 className="mt-3 text-3xl font-black">发送城市、日期与活动形式</h2>
            <p className="mt-4 text-sm leading-7 text-white/[0.74]">
              我们会为您在土耳其的活动配置可执行的技术方案：设备、安装、物流、团队与现场支持。
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/zh/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-white px-6 font-black text-slate-950"
              >
                联系我们
              </Link>
              <a
                href={`https://wa.me/905453048671?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-6 font-black text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_1100px] lg:[contain-intrinsic-size:auto_620px] bg-slate-950 py-16 text-white md:py-20">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              更多服务
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              一个技术团队，搞定您在土耳其的整场活动
            </h2>
            <p className="mt-4 text-base leading-8 text-white/[0.70]">
              一个项目往往需要多个板块协同：舞台、LED、音响、灯光、篷房、T台、桁架、家具与活动日的现场支持。
            </p>
          </div>
          <RelatedServices currentSlug={service.slug} />
        </div>
      </section>
    </div>
  );
}

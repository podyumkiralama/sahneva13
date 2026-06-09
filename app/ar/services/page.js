import Image from "next/image";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const AR_SERVICES_URL = buildCanonical("/ar/services");
const AR_SERVICES_TITLE = "خدمات تجهيز الفعاليات في تركيا";
const AR_SERVICES_DESCRIPTION =
  "حلول متكاملة للفعاليات في تركيا تشمل المسرح، شاشات LED، الصوت، الإضاءة، التراس، الخيام والبوديوم مع تخطيط فني وتشغيل ميداني.";
const AR_SERVICES_IMAGE = `${SITE_URL}/img/hizmetler-hero.webp`;
const WHATSAPP_URL =
  "https://wa.me/905453048671?text=%D8%A3%D8%B1%D9%8A%D8%AF+%D8%B9%D8%B1%D8%B6+%D8%B3%D8%B9%D8%B1+%D9%84%D8%AA%D8%AC%D9%87%D9%8A%D8%B2+%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A9+%D9%81%D9%8A+%D8%AA%D8%B1%D9%83%D9%8A%D8%A7.";

const SERVICE_KEYWORDS = [
  "تجهيز فعاليات في تركيا",
  "تأجير مسرح في إسطنبول",
  "تأجير شاشة LED",
  "أنظمة صوت وإضاءة",
  "خيام وبوديوم للفعاليات",
  "تشغيل تقني ميداني",
];

const SERVICE_CARDS = [
  {
    id: "stage",
    title: "تأجير المسرح والمنصات",
    eyebrow: "Stage & podium",
    image: "/img/hizmet-sahne.webp",
    description:
      "منصات معيارية للمؤتمرات، الحفلات، إطلاق المنتجات والفعاليات المفتوحة مع حسابات تحميل، ارتفاعات مناسبة وخطة تركيب واضحة.",
    features: ["منصة رئيسية", "بوديوم ودرج", "حواجز أمان", "تسليم قبل البروفة"],
  },
  {
    id: "led",
    title: "تأجير شاشات LED",
    eyebrow: "Indoor & outdoor LED",
    image: "/img/led/300m2-p19-indoor-led-ekran-kurumsal-etkinlik-sahneva.webp",
    description:
      "شاشات LED داخلية وخارجية للمعارض، الجالا، المؤتمرات والحفلات مع معالج صورة، إدارة محتوى وفريق تشغيل أثناء الحدث.",
    features: ["P1.9 داخلي", "LED wall", "شاشة خارجية", "تحكم بالصورة"],
  },
  {
    id: "sound-light",
    title: "أنظمة الصوت والإضاءة",
    eyebrow: "Sound & lighting",
    image: "/img/ses-isik/ses-sistemi.webp",
    description:
      "تصميم صوت وإضاءة يراعي مساحة القاعة، نوع المحتوى، حركة الجمهور والبث المباشر، مع ربط الريجي الفني في نقطة تشغيل واحدة.",
    features: ["Line Array", "إضاءة ذكية", "ميكروفونات", "ريجي صوت وصورة"],
  },
  {
    id: "truss",
    title: "تراس وريجينغ",
    eyebrow: "Truss & rigging",
    image: "/img/blog/etkinlik-teknik-kesif-ve-planlama-rehberi/rigging-truss-linearray.webp",
    description:
      "هياكل تعليق ودعم للشاشات والإضاءة والديكور، يتم تخطيطها حسب ارتفاع المكان، نقاط التعليق، الوزن ومسار الجمهور.",
    features: ["Ground support", "Rigging", "تعليق شاشة", "إضاءة علوية"],
  },
  {
    id: "tent",
    title: "خيام الفعاليات",
    eyebrow: "Event tents",
    image: "/img/cadir/hero.webp",
    description:
      "خيام باغودا، خيام شفافة وخيام كبيرة المساحة للمعارض، المهرجانات، الضيافة ومناطق الدعم مع أرضيات وإضاءة عند الحاجة.",
    features: ["Pagoda", "خيمة شفافة", "خيمة كبيرة", "أرضية وإضاءة"],
  },
  {
    id: "corporate",
    title: "الإنتاج المؤسسي الكامل",
    eyebrow: "Turnkey production",
    image: "/img/kurumsal/kurumsal-sahne-led-ekran.webp",
    description:
      "إدارة تقنية موحدة للمؤتمر، الجالا، اجتماع الموزعين أو إطلاق المنتج: مسرح، LED، صوت، إضاءة، ريجي، تركيب وتشغيل.",
    features: ["مدير مشروع", "كشف ميداني", "جدول تشغيل", "فريق يوم الحدث"],
  },
];

const PLANNING_STEPS = [
  {
    title: "قراءة الهدف والمكان",
    text: "نبدأ من نوع الفعالية، عدد الحضور، الرسالة البصرية، أبعاد المكان، نقاط الكهرباء ومسارات الدخول.",
  },
  {
    title: "تجميع الحل التقني",
    text: "نحدد المسرح، الشاشة، الصوت، الإضاءة، التراس والخيام حسب زاوية الرؤية، الأمان، الجدول والميزانية.",
  },
  {
    title: "تنفيذ وتشغيل ميداني",
    text: "يتابع الفريق النقل، التركيب، الاختبار، البروفة، تشغيل المحتوى ثم الفك بخطة زمنية قابلة للتطبيق.",
  },
];

const CAPABILITY_POINTS = [
  "حلول منفصلة أو باقة إنتاج كاملة من فريق واحد.",
  "خدمة في إسطنبول وأنطاليا وأنقرة وإزمير ومدن تركيا الأخرى.",
  "تخطيط يناسب المؤتمرات، المعارض، الجالا، الحفلات والفعاليات الخارجية.",
  "تواصل سريع بالعربية أو الإنجليزية أو التركية لمرحلة العرض الفني.",
];

const SERVICES_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Sahneva خدمات تجهيز الفعاليات في تركيا",
  url: AR_SERVICES_URL,
  inLanguage: "ar",
  itemListElement: SERVICE_CARDS.map((service, index) => ({
    "@type": "Offer",
    position: index + 1,
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      areaServed: "Türkiye",
    },
  })),
};

export const metadata = {
  title: AR_SERVICES_TITLE,
  description: AR_SERVICES_DESCRIPTION,
  openGraph: {
    title: `${AR_SERVICES_TITLE} | Sahneva`,
    description: AR_SERVICES_DESCRIPTION,
    url: AR_SERVICES_URL,
    type: "website",
    locale: "ar_AR",
    images: [
      {
        url: AR_SERVICES_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sahneva - خدمات تجهيز الفعاليات في تركيا",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${AR_SERVICES_TITLE} | Sahneva`,
    description: AR_SERVICES_DESCRIPTION,
    images: [AR_SERVICES_IMAGE],
  },
  alternates: {
    canonical: AR_SERVICES_URL,
    languages: {
      "tr-TR": `${SITE_URL}/hizmetler`,
      en: `${SITE_URL}/en/services`,
      ar: AR_SERVICES_URL,
      ru: `${SITE_URL}/ru/services`,
      "x-default": `${SITE_URL}/en/services`,
    },
  },
};

export default function ArabicServicesPage() {
  return (
    <main className="bg-white" dir="rtl">
      <JsonLd data={SERVICES_JSON_LD} />
      <BreadcrumbJsonLd
        items={[
          { name: "الرئيسية", url: "/ar" },
          { name: "الخدمات", url: "/ar/services" },
        ]}
        baseUrl={SITE_URL}
      />

      <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-20">
        <div className="absolute inset-0 opacity-45" aria-hidden="true">
          <Image
            src="/img/hizmetler-hero.webp"
            alt="خدمات تجهيز الفعاليات في تركيا"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/85 to-blue-950/70" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl text-right">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
              Sahneva services
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              خدمات تجهيز الفعاليات في تركيا
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/[0.82]">
              مسرح، شاشة LED، صوت، إضاءة، تراس، خيام وبوديوم ضمن خطة إنتاج واحدة
              للمعارض، المؤتمرات، حفلات الجالا، إطلاق المنتجات والفعاليات الخارجية.
            </p>

            <div className="mt-7 flex flex-wrap justify-start gap-2 md:justify-end">
              {SERVICE_KEYWORDS.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-6 text-sm font-black text-white shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-400"
              >
                اطلب عرضاً سريعاً
              </a>
              <Link
                href="#service-grid"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 text-sm font-black text-white transition hover:bg-white/15"
              >
                استعرض الخدمات
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="service-grid" className="container mx-auto px-4 py-14 md:py-18">
        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICE_CARDS.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Sahneva`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-right">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    {service.eyebrow}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white">{service.title}</h2>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-7 text-slate-700">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-slate-950 p-7 text-white md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                خطة العمل
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                لا نختار المعدات قبل فهم المكان والجمهور والمحتوى.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/[0.76]">
                الهدف هو تحويل الطلب إلى خطة قابلة للتنفيذ: زاوية رؤية واضحة،
                صوت متوازن، إضاءة مناسبة، مسارات آمنة وجدول تركيب لا يضغط يوم الحدث.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {PLANNING_STEPS.map((step, index) => (
                <article key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="text-sm font-black text-indigo-600">0{index + 1}</span>
                  <h3 className="mt-4 text-xl font-black text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">
                لماذا Sahneva؟
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">
                فريق واحد يربط التصميم، التقنية، النقل والتشغيل.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {CAPABILITY_POINTS.map((point) => (
                <div key={point} className="rounded-2xl border border-white bg-white/80 p-4 text-sm font-bold leading-7 text-slate-700 shadow-sm">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="max-w-2xl text-right">
              <h2 className="text-3xl font-black">شارك تفاصيل الفعالية لنجهز لك نطاقاً فنياً واضحاً.</h2>
              <p className="mt-3 text-sm leading-7 text-white/[0.72]">
                المدينة، التاريخ، عدد الحضور، نوع المكان، الحاجة إلى المسرح أو LED أو الصوت
                أو الإضاءة تكفي لنبدأ بتقدير أولي مناسب.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-6 text-sm font-black text-white transition hover:bg-emerald-400"
              >
                WhatsApp
              </a>
              <Link
                href="/ar/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/20 px-6 text-sm font-black text-white transition hover:bg-white/10"
              >
                صفحة التواصل
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

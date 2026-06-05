import Image from "next/image";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const AR_CONTACT_URL = buildCanonical("/ar/contact");
const AR_CONTACT_TITLE = "تواصل مع Sahneva";
const AR_CONTACT_DESCRIPTION =
  "تواصل مع فريق Sahneva لطلب عرض فني للفعاليات في تركيا: مسرح، LED، صوت، إضاءة، تراس، خيام وتشغيل ميداني.";
const AR_CONTACT_OG_IMAGE_URL = `${SITE_URL}/img/hero-bg-desktop.webp`;
const WHATSAPP_URL =
  "https://wa.me/905453048671?text=%D8%A3%D8%B1%D9%8A%D8%AF+%D8%B9%D8%B1%D8%B6+%D8%B3%D8%B9%D8%B1+%D9%84%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A9+%D9%81%D9%8A+%D8%AA%D8%B1%D9%83%D9%8A%D8%A7.";

const CONTACT_CHANNELS = [
  {
    title: "WhatsApp",
    value: "+90 545 304 86 71",
    href: WHATSAPP_URL,
    description: "للطلبات السريعة، مشاركة الموقع، الصور، التاريخ وعدد الحضور.",
    type: "external",
  },
  {
    title: "البريد الإلكتروني",
    value: "info@sahneva.com",
    href: "mailto:info@sahneva.com",
    description: "لإرسال المخططات، rider التقني، ملف الشركة أو تفاصيل المناقصة.",
    type: "mail",
  },
  {
    title: "اتصال مباشر",
    value: "+90 545 304 86 71",
    href: "tel:+905453048671",
    description: "للتواصل مع فريق المشروع حول الجدول، المدينة والنطاق الفني.",
    type: "phone",
  },
];

const BRIEF_ITEMS = [
  "نوع الفعالية: مؤتمر، معرض، جالا، إطلاق منتج، حفل أو فعالية خارجية.",
  "المدينة، التاريخ، ساعات التركيب، ساعات التشغيل وموعد الفك المتوقع.",
  "عدد الحضور، مساحة المكان، ارتفاع السقف، الكهرباء ونقاط تحميل المعدات.",
  "الحاجة إلى مسرح، شاشة LED، صوت، إضاءة، تراس، خيمة، بوديوم أو أثاث.",
  "هل يوجد محتوى عرض، بث مباشر، ترجمة، ضيوف VIP أو بروفة قبل الفعالية؟",
  "صور أو فيديو قصير من المكان يساعدان في تقدير أولي أكثر دقة.",
];

const RESPONSE_STEPS = [
  {
    title: "قراءة الطلب",
    text: "نراجع تفاصيل الفعالية ونحدد الأسئلة التي تؤثر على النطاق، السلامة، الجدول والتكلفة.",
  },
  {
    title: "اقتراح فني",
    text: "نقترح هيكل المعدات والفريق حسب المكان، الجمهور، المحتوى واحتياج التشغيل.",
  },
  {
    title: "عرض واضح",
    text: "نرسل نطاق العمل، عناصر الخدمة، جدول التركيب، فريق التشغيل والتكلفة المتوقعة بشكل منظم.",
  },
];

const SERVICE_PROMPTS = [
  "مسرح ومنصة",
  "شاشة LED",
  "صوت وإضاءة",
  "تراس وريجينغ",
  "خيمة فعالية",
  "إنتاج كامل",
];

const CONTACT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: AR_CONTACT_TITLE,
  url: AR_CONTACT_URL,
  inLanguage: "ar",
  about: {
    "@id": `${SITE_URL}/#localbusiness`,
  },
};

export const metadata = {
  title: AR_CONTACT_TITLE,
  description: AR_CONTACT_DESCRIPTION,
  openGraph: {
    title: `${AR_CONTACT_TITLE} | Sahneva`,
    description: AR_CONTACT_DESCRIPTION,
    url: AR_CONTACT_URL,
    type: "website",
    locale: "ar_AR",
    images: [
      {
        url: AR_CONTACT_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Sahneva - تواصل معنا للفعاليات في تركيا",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${AR_CONTACT_TITLE} | Sahneva`,
    description: AR_CONTACT_DESCRIPTION,
    images: [AR_CONTACT_OG_IMAGE_URL],
  },
  alternates: {
    canonical: AR_CONTACT_URL,
    languages: {
      "tr-TR": `${SITE_URL}/iletisim`,
      en: `${SITE_URL}/en/contact`,
      ar: AR_CONTACT_URL,
      ru: `${SITE_URL}/ru/contact`,
      "x-default": `${SITE_URL}/en/contact`,
    },
  },
};

export default function ArabicContactPage() {
  return (
    <main className="bg-white" dir="rtl">
      <JsonLd data={CONTACT_JSON_LD} />
      <BreadcrumbJsonLd
        items={[
          { name: "الرئيسية", url: "/ar" },
          { name: "تواصل معنا", url: "/ar/contact" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/85 to-blue-950/70" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div className="text-right">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Contact Sahneva
              </p>
              <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                أخبرنا عن فعاليتك في تركيا، ونحوّلها إلى نطاق فني واضح.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/[0.82]">
                نساعدك في تخطيط المسرح، شاشة LED، الصوت، الإضاءة، التراس، الخيام
                وفريق التشغيل حسب المدينة، التاريخ، المكان وعدد الحضور.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {SERVICE_PROMPTS.map((item) => (
                  <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.08] p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-300">
                Fast brief
              </p>
              <h2 className="mt-3 text-2xl font-black">معلومات قليلة تكفي للبدء</h2>
              <p className="mt-3 text-sm leading-7 text-white/[0.74]">
                المدينة، التاريخ، نوع الفعالية، عدد الحضور واحتياجك من الخدمات تساعدنا
                على إرسال تقدير أولي بسرعة.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl bg-emerald-500 px-6 text-sm font-black text-white transition hover:bg-emerald-400"
              >
                ابدأ عبر WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {CONTACT_CHANNELS.map((channel) => {
            const isExternal = channel.type === "external";

            return (
              <a
                key={channel.title}
                href={channel.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "nofollow noopener noreferrer" : undefined}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-right shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
              >
                <p className="text-sm font-black uppercase tracking-[0.16em] text-indigo-600">
                  {channel.title}
                </p>
                <h2 className="mt-3 text-2xl font-black text-slate-950">{channel.value}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">{channel.description}</p>
              </a>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl bg-slate-950 p-7 text-white md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                عرض أسرع
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                كلما كان البريف أوضح، أصبحت الخطة الفنية أدق.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/[0.76]">
                لا تحتاج إلى ملف كامل من البداية. أرسل المعلومات الأساسية، وسنوضح
                لك ما يجب تأكيده قبل التسعير النهائي.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {BRIEF_ITEMS.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold leading-7 text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {RESPONSE_STEPS.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-right shadow-sm">
              <span className="text-sm font-black text-indigo-600">0{index + 1}</span>
              <h2 className="mt-4 text-xl font-black text-slate-950">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-right md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                  تركيا بالكامل
                </p>
                <h2 className="mt-3 text-3xl font-black">
                  إسطنبول، أنطاليا، أنقرة، إزمير ومدن أخرى بخطة لوجستية واحدة.
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/[0.72]">
                  يمكننا تقديم حل منفصل أو إنتاج كامل يشمل الكشف، النقل، التركيب،
                  الاختبار، التشغيل والفك حسب نطاق المشروع.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-6 text-sm font-black text-white transition hover:bg-emerald-400"
                >
                  WhatsApp
                </a>
                <Link
                  href="/ar/services"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/20 px-6 text-sm font-black text-white transition hover:bg-white/10"
                >
                  الخدمات
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

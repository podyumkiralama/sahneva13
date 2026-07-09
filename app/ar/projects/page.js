import Image from "next/image";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const AR_PROJECTS_URL = buildCanonical("/ar/projects");
const AR_PROJECTS_TITLE = "مشاريع فعاليات في تركيا";
const AR_PROJECTS_DESCRIPTION =
  "نماذج من إنتاج Sahneva للفعاليات في تركيا: مسرح رئيسي، شاشة LED، صوت وإضاءة، تراس، خيام وتشغيل ميداني للمعارض والمؤتمرات والحفلات.";
const AR_PROJECTS_OG_IMAGE_URL = `${SITE_URL}/img/kurumsal/kurumsal-sahne-led-ekran.webp`;
const WHATSAPP_URL =
  "https://wa.me/905453048671?text=%D8%A3%D8%B1%D9%8A%D8%AF+%D8%B1%D8%A4%D9%8A%D8%A9+%D9%86%D9%85%D8%A7%D8%B0%D8%AC+%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9+%D9%82%D8%B1%D9%8A%D8%A8%D8%A9+%D9%85%D9%86+%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%AA%D9%8A.";

const PROJECT_STORIES = [
  {
    title: "إطلاق علامة تجارية في إسطنبول",
    type: "مؤتمر وإطلاق منتج",
    image: "/img/kurumsal/kurumsal-sahne-led-ekran.webp",
    proof: "المسرح الرئيسي وشاشة LED",
    description:
      "تم ربط المسرح، شاشة LED، الإضاءة، الصوت والريجي الفني ضمن خطة تشغيل واحدة لعرض المحتوى والعروض التقديمية أمام جمهور مؤسسي.",
    highlights: ["تصميم مسرح واسع", "LED قريب المشاهدة", "ريجي تقني", "بروفة قبل الحدث"],
  },
  {
    title: "حفل جماهيري خارجي",
    type: "مسرح مفتوح",
    image: "/img/sahne/galeri-1.webp",
    proof: "اتساع المسرح ومسار الجمهور",
    description:
      "استخدمت المنصة، التراس، الإضاءة وشاشات الدعم لتقديم تجربة مشاهدة واضحة في مساحة مفتوحة مع خطة تحميل وتركيب مناسبة للموقع.",
    highlights: ["مسرح رئيسي", "إضاءة علوية", "توزيع صوت", "تنسيق ميداني"],
  },
  {
    title: "معرض وجناح علامة تجارية",
    type: "Fuar & stand",
    image: "/img/galeri/led-ekran-kiralama-1.webp",
    proof: "نظام الصورة وتجربة الزائر",
    description:
      "تم استخدام شاشة LED وتصميم بصري للستاند من أجل جذب الزائر، تنظيم الرسالة التسويقية وتحويل مساحة العرض إلى نقطة تواصل قوية.",
    highlights: ["LED wall", "محتوى بصري", "تدفق زوار", "تشغيل مستمر أثناء المعرض"],
  },
  {
    title: "خيمة فعالية ومنطقة ضيافة",
    type: "خيام وبنية مؤقتة",
    image: "/img/galeri/cadir-kiralama-1.webp",
    proof: "منطقة استقبال وتشغيل",
    description:
      "تم تخطيط الخيمة، الأرضية، الإضاءة، الأثاث ومسارات الدخول لتكوين مساحة مؤقتة منظمة للضيافة، الاستقبال أو فعاليات الهواء الطلق.",
    highlights: ["خيمة فعالية", "أرضية", "إضاءة", "أثاث ضيافة"],
  },
];

const PROOF_POINTS = [
  {
    title: "حجم المشروع",
    text: "نقرأ عرض المسرح، ارتفاع السقف، عدد الجمهور، مسافة الرؤية ومسار الدخول قبل تحديد الحل.",
  },
  {
    title: "الصورة والمحتوى",
    text: "نختار LED، processor، الريجي ونظام التشغيل وفق المحتوى، الكاميرا وقرب الجمهور من الشاشة.",
  },
  {
    title: "الصوت والإضاءة",
    text: "يتم تخطيط الصوت والإضاءة كجزء من تجربة الحضور، وليس كقائمة معدات منفصلة.",
  },
  {
    title: "اللوجستيات والتركيب",
    text: "النقل، التركيب، الاختبار، البروفة والفك يتم ترتيبها ضمن جدول واحد مع مسؤول ميداني واضح.",
  },
];

const FIELD_EVIDENCE = [
  {
    title: "غرفة التحكم",
    image: "/img/blog/kurumsal-etkinlik-ses-backstage.webp",
    text: "الصوت، الصورة، البث والمحتوى تحتاج نقطة تشغيل منظمة حتى يبقى مسار الحدث واضحاً للفريق.",
  },
  {
    title: "التراس والرفع",
    image: "/img/blog/etkinlik-teknik-kesif-ve-planlama-rehberi/arena-led-rigging.webp",
    text: "مشاريع الشاشة والإضاءة الكبيرة تعتمد على قراءة الوزن، التعليق، الارتفاع ومساحة الجمهور.",
  },
];

const PROJECTS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: AR_PROJECTS_TITLE,
  url: AR_PROJECTS_URL,
  inLanguage: "ar",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: PROJECT_STORIES.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        image: `${SITE_URL}${project.image}`,
      },
    })),
  },
};

export const metadata = {
  title: AR_PROJECTS_TITLE,
  description: AR_PROJECTS_DESCRIPTION,
  openGraph: {
    title: `${AR_PROJECTS_TITLE} | Sahneva`,
    description: AR_PROJECTS_DESCRIPTION,
    url: AR_PROJECTS_URL,
    type: "website",
    locale: "ar_AR",
    images: [
      {
        url: AR_PROJECTS_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Sahneva - مشاريع فعاليات في تركيا",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${AR_PROJECTS_TITLE} | Sahneva`,
    description: AR_PROJECTS_DESCRIPTION,
    images: [AR_PROJECTS_OG_IMAGE_URL],
  },
  alternates: {
    canonical: AR_PROJECTS_URL,
    languages: {
      "tr-TR": `${SITE_URL}/projeler`,
      en: `${SITE_URL}/en/projects`,
      ar: AR_PROJECTS_URL,
      ru: `${SITE_URL}/ru/projects`,
      "x-default": `${SITE_URL}/projeler`,
    },
  },
};

export default function ArabicProjectsPage() {
  return (
    <div className="bg-white" dir="rtl">
      <JsonLd data={PROJECTS_JSON_LD} />
      <BreadcrumbJsonLd
        items={[
          { name: "الرئيسية", url: "/ar" },
          { name: "المشاريع", url: "/ar/projects" },
        ]}
        baseUrl={SITE_URL}
      />

      <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-20">
        <div className="absolute inset-0 opacity-45" aria-hidden="true">
          <Image
            src="/img/kurumsal/kurumsal-sahne-led-ekran.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/85 to-indigo-950/60" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-right">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
            Field proof
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            مشاريع نفذناها كإنتاج تقني كامل، وليس كقائمة معدات فقط.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/[0.82]">
            في تركيا، تحتاج الفعاليات الدولية إلى مسرح واضح، صورة قوية، صوت مضبوط،
            إضاءة مؤثرة وفريق يعرف إيقاع الموقع. هذه أمثلة مختصرة من هذا المنهج.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-6 text-sm font-black text-white transition hover:bg-emerald-400"
            >
              اطلب مرجعاً قريباً من مشروعك
            </a>
            <Link
              href="/ar/services"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 text-sm font-black text-white transition hover:bg-white/15"
            >
              استعرض الخدمات
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-18">
        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECT_STORIES.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.proof}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-right">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    {project.type}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
                    {project.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <p className="text-sm font-black text-indigo-700">{project.proof}</p>
                <p className="mt-3 text-base leading-7 text-slate-700">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.highlights.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700">
                      {item}
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
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl bg-slate-950 p-7 text-white md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                طريقة القراءة
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                كل صورة في المشروع هي دليل على قرار تقني.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/[0.76]">
                الصورة الواسعة توضح حجم المسرح، لقطة LED تشرح نظام العرض، غرفة التحكم
                تكشف الريجي، ومشهد التركيب يوضح قدرة الفريق على إدارة الموقع.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {PROOF_POINTS.map((point) => (
                <article key={point.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-black text-slate-950">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="grid gap-6 lg:grid-cols-2">
          {FIELD_EVIDENCE.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} - Sahneva`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-black text-slate-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-right md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
              Project match
            </p>
            <h2 className="mt-3 text-3xl font-black">
              أخبرنا بنوع الفعالية لنشاركك أمثلة أقرب إلى احتياجك.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/[0.72]">
              يمكننا مطابقة مشروعك مع نماذج من مؤتمرات، معارض، جالا، حفلات خارجية أو
              فعاليات ضيافة حتى ترى النطاق الفني قبل طلب العرض النهائي.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
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
    </div>
  );
}

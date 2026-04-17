import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const AR_PROJECTS_URL = buildCanonical("/ar/projects");
const AR_PROJECTS_OG_IMAGE_URL = `${SITE_URL}/img/og/sahneva-og.webp`;

export const metadata = {
  title: "أعمال مختارة",
  description:
    "نماذج من فعاليات سحنيفا تشمل إطلاقات الشركات، الحفلات الجماهيرية والمهرجانات الرياضية في مدن تركيا المختلفة.",
  openGraph: {
    title: "أعمال مختارة | سحنيفا",
    description:
      "نماذج من فعاليات سحنيفا تشمل إطلاقات الشركات، الحفلات الجماهيرية والمهرجانات الرياضية في مدن تركيا المختلفة.",
    url: AR_PROJECTS_URL,
    type: "website",
    locale: "ar_AR",
    images: [
      {
        url: AR_PROJECTS_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "سحنيفا – مشاريع وفعاليات منجزة",
      },
    ],
  },
  alternates: {
    canonical: AR_PROJECTS_URL,
    languages: {
      "tr-TR": `${SITE_URL}/projeler`,
      en: `${SITE_URL}/en/projects`,
      ar: AR_PROJECTS_URL,
      "x-default": `${SITE_URL}/en/projects`,
    },
  },
};

const PROJECTS = [
  {
    title: "إطلاق شركة في إسطنبول",
    description:
      "شاشة LED عالية الدقة مع نظام بث مباشر، منصة معيارية وإضاءة ديناميكية لحفل إطلاق منتج تقني.",
    details: "قاعة داخلية — 800 ضيف",
  },
  {
    title: "حفل موسيقي في أنقرة",
    description:
      "منصة بطول 24 متر، نظام صوت Line-array، هياكل إضاءة وشاشة LED خارجية بمساحة 40 م².",
    details: "مفتوح — 25,000 متفرج",
  },
  {
    title: "مهرجان رياضي في إزمير",
    description:
      "منصة تكريم، شاشات نتائج، منصة تعليق صوتي، نظام صوت موزّع وخيام VIP.",
    details: "واجهة بحرية — 3 أيام",
  },
];

export default function ArabicProjectsPage() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-10" dir="rtl">
      <header className="space-y-4 text-right">
        <h1 className="text-3xl font-black text-neutral-900">دراسات حالة حديثة</h1>
        <p className="max-w-3xl text-base leading-7 text-neutral-600">
          كل مشروع يتم تصميمه وفق متطلبات الموقع وعدد الجمهور ورؤية العميل. إليك مجموعة من المشاريع التي نفذتها سحنيفا في مختلف المدن التركية.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <article key={project.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm text-right">
            <h2 className="text-xl font-semibold text-neutral-900">{project.title}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{project.description}</p>
            <p className="mt-4 text-xs uppercase tracking-wide text-neutral-500">{project.details}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

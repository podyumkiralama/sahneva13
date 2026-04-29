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

const PROJECT_REVIEW_POINTS = [
  {
    title: "هدف الفعالية",
    text: "نبدأ من الرسالة المطلوبة: إطلاق منتج، اجتماع موزعين، حفل جماهيري أو تجربة علامة تجارية.",
  },
  {
    title: "قراءة المكان",
    text: "نراجع مساحة الموقع، ارتفاع السقف، الكهرباء، نقاط الدخول، مسار الجمهور ومخاطر الطقس.",
  },
  {
    title: "اختيار التجهيزات",
    text: "نربط المنصة وشاشة LED والصوت والإضاءة والتراس باحتياج المحتوى وعدد الحضور.",
  },
  {
    title: "تشغيل يوم الحدث",
    text: "نخطط لفريق التركيب، الاختبار، البروفة، إدارة المحتوى والدعم الفني أثناء الفعالية.",
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

      <section className="rounded-3xl border border-neutral-200 bg-white p-6 text-right shadow-sm md:p-8">
        <h2 className="text-2xl font-black text-neutral-900">كيف نختار الحل المناسب لكل مشروع؟</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-600">
          لا تتعامل سحنيفا مع المشاريع كقائمة معدات ثابتة. في كل فعالية نقرأ
          هدف العلامة التجارية، المكان، عدد الجمهور، احتياج المحتوى ومستوى
          المخاطر قبل تحديد المنصة، الشاشة، الصوت، الإضاءة والتراس. هذا الأسلوب
          يساعد العميل على الحصول على ميزانية واقعية وتجربة بصرية أكثر ثباتاً.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {PROJECT_REVIEW_POINTS.map((point) => (
            <article key={point.title} className="rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
              <h3 className="text-base font-bold text-neutral-900">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-neutral-950 p-6 text-right text-white md:p-8">
        <h2 className="text-2xl font-black">من الفكرة إلى التشغيل الميداني</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-300">
          تعرض هذه الصفحة نماذج مختصرة فقط. يمكن لفريقنا تجهيز مشاريع داخلية
          وخارجية في إسطنبول، أنقرة، إزمير، أنطاليا ومدن تركية أخرى، مع إدارة
          فنية تشمل المعاينة، المخطط، النقل، التركيب، الاختبار، البروفة والدعم
          أثناء الحدث. الهدف هو أن يرى الجمهور تجربة منظمة، وأن يعرف العميل أن
          التفاصيل التقنية تحت السيطرة.
        </p>
      </section>
    </div>
  );
}

import { LOCALE_CONTENT } from "../../../lib/i18n/localeContent";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const { services } = LOCALE_CONTENT.ar.home;
const AR_SERVICES_URL = buildCanonical("/ar/services");
const AR_SERVICES_OG_IMAGE_URL = `${SITE_URL}/img/hizmet-sahne.webp`;

const SERVICE_PLANNING_POINTS = [
  "تحديد نوع الفعالية وعدد الضيوف وهدف العلامة التجارية.",
  "معاينة المكان، الكهرباء، نقاط التحميل، الارتفاع ومسارات الجمهور.",
  "اختيار المنصة، شاشة LED، الصوت، الإضاءة، التراس أو الخيام حسب الحاجة.",
  "إعداد جدول التركيب، الاختبار، البروفة والدعم الفني أثناء الحدث.",
];

const SERVICE_PROCESS_STEPS = [
  {
    title: "اكتشاف تقني",
    text: "نحلل المكان قبل التسعير حتى لا تظهر مفاجآت في يوم التركيب.",
  },
  {
    title: "تصميم الحل",
    text: "نختار المعدات وفق الرؤية، الميزانية، أمان التركيب وتجربة الجمهور.",
  },
  {
    title: "تنفيذ ميداني",
    text: "يتابع فريقنا النقل، التركيب، الاختبار، التشغيل والتفكيك بخطة واضحة.",
  },
];

export const metadata = {
  title: "خدمات تجهيز الفعاليات",
  description:
    "تعرف على حلول سحنيفا للمنصات، شاشات LED، أنظمة الصوت والإضاءة، الخيام وتجهيزات الجلوس مع تشغيل كامل.",
  openGraph: {
    title: "خدمات تجهيز الفعاليات | سحنيفا",
    description:
      "تعرف على حلول سحنيفا للمنصات، شاشات LED، أنظمة الصوت والإضاءة، الخيام وتجهيزات الجلوس مع تشغيل كامل.",
    url: AR_SERVICES_URL,
    type: "website",
    locale: "ar_AR",
    images: [
      {
        url: AR_SERVICES_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "سحنيفا – خدمات تجهيز الفعاليات: منصات، شاشات LED، صوت وإضاءة",
      },
    ],
  },
  alternates: {
    canonical: AR_SERVICES_URL,
    languages: {
      "tr-TR": `${SITE_URL}/hizmetler`,
      en: `${SITE_URL}/en/services`,
      ar: AR_SERVICES_URL,
      "x-default": `${SITE_URL}/en/services`,
    },
  },
};

export default function ArabicServicesPage() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-10" dir="rtl">
      <header className="space-y-4 text-right">
        <h1 className="text-3xl font-black text-neutral-900">{services.title}</h1>
        <p className="max-w-3xl text-base leading-7 text-neutral-600">
          نقدّم حلولاً متكاملة يمكن حجزها بشكل منفصل أو ضمن باقات جاهزة تشمل الهيكل، الشاشات، الصوت، الإضاءة وتجربة الجمهور.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {services.items.map((item, idx) => (
          <section key={item.title} id={idx === 0 ? "stage" : idx === 1 ? "led" : idx === 2 ? "audio" : "tents"} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm text-right">
            <h2 className="text-xl font-semibold text-neutral-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{item.description}</p>
            <p className="mt-4 text-sm leading-6 text-neutral-500">
              {idx === 0 &&
                "منصات حتى 12×20 متر، ارتفاعات مخصصة، حواجز أمان، منحدرات وحماية من الأحوال الجوية."}
              {idx === 1 &&
                "ألواح خارجية مقاومة للعوامل الجوية، تعليق أرضي أو معلق، إدارة محتوى وبث مباشر."}
              {idx === 2 &&
                "أنظمة صوت Line-array، طاولات مزج رقمية، وحدات إضاءة، هياكل تراس وتوزيع طاقة."}
              {idx === 3 &&
                "خيام قابلة للتمديد، خيام باجودا، طاولات وكراسي للحفلات مع خيارات تدفئة أو تبريد."}
            </p>
          </section>
        ))}
      </div>

      <section className="rounded-3xl border border-indigo-100 bg-indigo-50/70 p-6 text-right md:p-8">
        <h2 className="text-2xl font-black text-neutral-900">كيف نخطط خدمات تجهيز الفعاليات؟</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-700">
          تعتمد جودة الفعالية على الربط بين التصميم والتقنية والتشغيل. لذلك
          ندرس موقع الحدث قبل تحديد المعدات، ثم نبني حلاً يناسب طبيعة الجمهور
          والمحتوى ووقت التركيب. يمكن حجز كل خدمة بشكل مستقل، أو دمجها ضمن
          إنتاج كامل للفعاليات المؤسسية، الحفلات، المهرجانات وإطلاق المنتجات.
        </p>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {SERVICE_PLANNING_POINTS.map((point) => (
            <li key={point} className="rounded-2xl border border-white/70 bg-white p-4 text-sm leading-6 text-neutral-700 shadow-sm">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {SERVICE_PROCESS_STEPS.map((step) => (
          <article key={step.title} className="rounded-2xl border border-neutral-200 bg-white p-6 text-right shadow-sm">
            <h2 className="text-lg font-bold text-neutral-900">{step.title}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{step.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

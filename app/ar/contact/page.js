import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const AR_CONTACT_URL = buildCanonical("/ar/contact");
const AR_CONTACT_OG_IMAGE_URL = `${SITE_URL}/img/hero-bg.webp`;

export const metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع فريق سحنيفا لطلب عروض الأسعار، التخطيط التقني أو الدعم العاجل في جميع أنحاء تركيا. نغطي كافة المدن بفرق متخصصة جاهزة للتركيب السريع.",
  openGraph: {
    title: "تواصل مع سحنيفا",
    description:
      "تواصل مع فريق سحنيفا لطلب عروض الأسعار، التخطيط التقني أو الدعم العاجل في جميع أنحاء تركيا. نغطي كافة المدن بفرق متخصصة جاهزة للتركيب السريع.",
    url: AR_CONTACT_URL,
    type: "website",
    locale: "ar_AR",
    images: [
      {
        url: AR_CONTACT_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "سحنيفا – تواصل معنا لحلول تقنيات الفعاليات",
      },
    ],
  },
  alternates: {
    canonical: AR_CONTACT_URL,
    languages: {
      "tr-TR": `${SITE_URL}/iletisim`,
      en: `${SITE_URL}/en/contact`,
      ar: AR_CONTACT_URL,
      "x-default": `${SITE_URL}/en/contact`,
    },
  },
};

const CONTACT_CHANNELS = [
  {
    title: "واتساب",
    value: "+90 545 304 86 71",
    href: "https://wa.me/905453048671?text=%D8%A3%D8%B1%D9%8A%D8%AF+%D8%B9%D8%B1%D8%B6+%D8%B3%D8%B9%D8%B1+%D9%84%D8%AA%D8%AC%D9%87%D9%8A%D8%B2+%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A9.",
    description: "محادثة فورية مع منسقي الإنتاج لدينا.",
  },
  {
    title: "البريد الإلكتروني",
    value: "info@sahneva.com",
    href: "mailto:info@sahneva.com",
    description: "أرسل المخططات التقنية أو تفاصيل الفعالية.",
  },
  {
    title: "الهاتف",
    value: "+90 545 304 86 71",
    href: "tel:+905453048671",
    description: "تحدث مباشرة مع مدير المشروع.",
  },
].filter(Boolean);

const CONTACT_BRIEF_ITEMS = [
  "نوع الفعالية: مؤتمر، إطلاق منتج، حفل، مهرجان أو اجتماع شركة.",
  "المدينة والتاريخ والمدة المتوقعة للتركيب والتشغيل.",
  "عدد الضيوف، مساحة المكان، نقطة التحميل ومعلومات الكهرباء.",
  "احتياج المنصة، شاشة LED، الصوت، الإضاءة، التراس أو الخيام.",
];

const CONTACT_RESPONSE_STEPS = [
  {
    title: "مراجعة أولية",
    text: "نراجع تفاصيل الطلب ونحدد الأسئلة التقنية التي تؤثر في السعر والجدول.",
  },
  {
    title: "اقتراح فني",
    text: "نقترح قائمة معدات مناسبة لطبيعة المكان والجمهور وهدف الفعالية.",
  },
  {
    title: "عرض واضح",
    text: "نرسل عرضاً يتضمن نطاق العمل، الفريق، مدة التركيب والتكلفة المتوقعة.",
  },
];

export default function ArabicContactPage() {
  const contactChannels = Array.isArray(CONTACT_CHANNELS) ? CONTACT_CHANNELS : [];
  const contactCards = [];

  if (Array.isArray(contactChannels) && contactChannels.length > 0) {
    for (const channel of contactChannels) {
      if (!channel) continue;

      const { title, href, value, description } = channel;

      if (!title || !href || !value) continue;

      contactCards.push(
        <a
          key={title}
          href={href}
          className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg text-right"
        >
          <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
          <p className="mt-2 text-base font-bold text-indigo-600">{value}</p>
          {description ? (
            <p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p>
          ) : null}
        </a>
      );
    }
  }

  return (
    <div className="container mx-auto space-y-12 px-4 py-10" dir="rtl">
      <header className="space-y-3 text-right">
        <h1 className="text-3xl font-black text-neutral-900">تواصل مع سحنيفا</h1>
        <p className="max-w-2xl text-base leading-7 text-neutral-600">
          شاركنا تفاصيل الفعالية لنرسل لك عرضاً تفصيلياً في نفس اليوم يتضمن المخططات، قائمة الأجهزة والجدول الزمني. يعمل فريقنا في جميع المدن التركية بسرعة استجابة عالية.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">{contactCards}</div>

      <section className="rounded-3xl border border-indigo-100 bg-indigo-50/70 p-6 text-right md:p-8">
        <h2 className="text-2xl font-black text-neutral-900">معلومات تساعدنا على تسعير أسرع</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-700">
          كلما كانت تفاصيل الفعالية أوضح، أصبح بإمكان فريق سحنيفا إعداد عرض أدق
          للمنصة، شاشة LED، الصوت، الإضاءة، التراس أو تجهيزات الضيافة. لا تحتاج
          إلى مخطط كامل في البداية؛ يكفي إرسال المعلومات الأساسية لنبدأ التقييم.
        </p>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {CONTACT_BRIEF_ITEMS.map((item) => (
            <li key={item} className="rounded-2xl border border-white/70 bg-white p-4 text-sm leading-6 text-neutral-700 shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {CONTACT_RESPONSE_STEPS.map((step) => (
          <article key={step.title} className="rounded-2xl border border-neutral-200 bg-white p-6 text-right shadow-sm">
            <h2 className="text-lg font-bold text-neutral-900">{step.title}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{step.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

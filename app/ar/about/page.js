// app/ar/about/page.js
import Image from "next/image";
import Link from "next/link";

/* ───── META & ISR ───── */
export const metadata = {
  title: "من نحن | سحنيفا - تقنيات الفعاليات الاحترافية",
  description:
    "أكثر من 10 سنوات من الخبرة في تأجير المنصات على مستوى تركيا وشاشات LED وأنظمة الصوت والإضاءة وإنتاج الفعاليات الكاملة. أكثر من 700 مشروع منجز.",
  alternates: {
    canonical: "https://www.sahneva.com/ar/about",
    languages: {
      "tr-TR": "https://www.sahneva.com/hakkimizda",
      "en": "https://www.sahneva.com/en/about",
      "ar": "https://www.sahneva.com/ar/about",
      "x-default": "https://www.sahneva.com/en/about",
    },
  },
  openGraph: {
    title: "من نحن | سحنيفا - تقنيات الفعاليات الاحترافية",
    description:
      "حلول فعاليات احترافية في جميع أنحاء تركيا بخبرة تمتد لأكثر من 10 سنوات. أكثر من 700 مشروع ناجح ونسبة رضا 98%.",
    url: "https://www.sahneva.com/ar/about",
    images: [
      {
        url: "https://www.sahneva.com/img/hakkimizda-hero-corporate.webp",
        width: 1200,
        height: 630,
        alt: "فريق سحنيفا - تقنيات الفعاليات الاحترافية",
      },
    ],
    type: "website",
    locale: "ar_AR",
  },
  robots: { index: true, follow: true },
};

export const revalidate = 3600;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const ORGANIZATION_ID = `${SITE_URL}/#org`;

/* ───── STRUCTURED DATA ───── */
function AboutStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/ar/about#webpage`,
    url: `${SITE_URL}/ar/about`,
    name: "من نحن | سحنيفا - تقنيات الفعاليات الاحترافية",
    description:
      "خدمات تأجير المنصات الاحترافية وشاشات LED وأنظمة الصوت والإضاءة وإنتاج الفعاليات",
    mainEntity: { "@id": ORGANIZATION_ID },
    inLanguage: "ar",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Base64 blur placeholder
const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ───── MAIN COMPONENT ───── */
export default function ArabicAboutPage() {
  const PHONE = "+905453048671";
  const WA_TEXT = "%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D9%85%D8%B2%D9%8A%D8%AF+%D9%85%D9%86+%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA";
  const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

  const TIMELINE = [
    {
      year: "2012",
      title: "التأسيس",
      description:
        "بدأنا تقديم تقنيات المنصات والصوت الاحترافية. في هذا العام رسّخنا نهج الخدمة التي تضع العميل أولاً، وهو ما يوجّهنا حتى اليوم.",
      icon: "🚀",
    },
    {
      year: "2016",
      title: "الاستثمار في التكنولوجيا",
      description:
        "توسّعنا في شاشات LED والأنظمة البصرية، مما عزّز قدراتنا الإنتاجية. وامتدّت عملياتنا من إسطنبول إلى الأناضول.",
      icon: "🖥️",
    },
    {
      year: "2020",
      title: "التحوّل المؤسسي",
      description:
        "أكملنا شبكة اللوجستيات الوطنية وأصبحنا شريكاً موثوقاً للفعاليات المؤسسية الكبرى في جميع أنحاء تركيا.",
      icon: "🏢",
    },
    {
      year: "2024",
      title: "ريادة الابتكار",
      description:
        "بفضل المعدّات من الجيل التالي والتكاملات الرقمية وحلول البث المباشر، وضعنا معايير جديدة في القطاع وتجاوزنا 700 مشروع.",
      icon: "⚡",
    },
  ];

  const VALUES = [
    {
      icon: "🛡️",
      title: "الجودة والسلامة",
      description:
        "رقابة جودة وفق معايير ISO، بروتوكولات السلامة المهنية، وصيانة دورية للمعدات",
    },
    {
      icon: "⚡",
      title: "التركيب السريع",
      description:
        "نشر في نفس اليوم مع تسليم المنصة والتقنيات الاحترافية في غضون 2-6 ساعات",
    },
    {
      icon: "💎",
      title: "معدّات متميّزة",
      description:
        "شاشات LED من أحدث الأجيال وأنظمة صوت احترافية وحلول منصات معيارية",
    },
    {
      icon: "🌍",
      title: "تغطية وطنية",
      description: "فرق تقنية ولوجستية جاهزة لخدمة جميع المحافظات الـ81",
    },
    {
      icon: "📞",
      title: "دعم على مدار الساعة",
      description: "استشارات تقنية احترافية قبل كل تركيب وخلاله وبعده",
    },
    {
      icon: "💰",
      title: "أسعار شفافة",
      description: "عروض أسعار تفصيلية بخيارات تناسب الميزانية ودون رسوم خفية",
    },
  ];

  const CLIENTS = [
    "العلامات التجارية والشركات المؤسسية",
    "البلديات والمؤسسات الحكومية",
    "وكالات الفعاليات والإنتاج",
    "منظّمو المهرجانات والحفلات",
    "منظّمو حفلات الأعراس والفعاليات الخاصة",
    "شركات المعارض والمؤتمرات",
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden" dir="rtl">
      <AboutStructuredData />

      {/* HERO */}
      <section className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-20 min-h-[80vh] 2xl:min-h-[85vh]" aria-labelledby="hero-title">
        <div className="absolute inset-0">
          <Image
            src="/img/hakkimizda-hero-corporate.webp"
            alt="فريق سحنيفا يتمتع بأكثر من عقد من الخبرة في تقنيات الفعاليات"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-800/70 to-blue-950/90" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-purple-900/60" aria-hidden="true" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white py-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/30 mb-6">
            <span className="relative flex w-2 h-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full w-2 h-2 bg-green-500" />
            </span>
            <span className="text-sm font-bold text-white">شريكك الموثوق منذ 2012</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 drop-shadow-2xl">
            من نحن <span className="gradient-text gradient-text--safe-xl">سحنيفا</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/95 max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed font-light mb-4">
            تقنيات الفعاليات • خبرة تمتد لأكثر من 10 سنوات • أكثر من 700 إنتاج
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl 2xl:max-w-3xl mx-auto leading-relaxed font-normal mb-8">
            بوصفنا <span className="font-semibold text-white">شريكاً رائداً في تقنيات الفعاليات في تركيا</span>، نجمع بين التميّز التقني والتنفيذ الإبداعي في كل مشروع.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
            <Link
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل معنا فوراً عبر واتساب"
              className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring shadow-lg"
              role="button"
            >
              <span aria-hidden="true" className="text-xl ml-2">💬</span>
              <span className="text-base">تواصل عبر واتساب</span>
            </Link>

            <Link
              href="#timeline"
              aria-label="اكتشف مسيرتنا"
              className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white/50 text-white bg-slate-900/85 backdrop-blur-lg hover:bg-slate-900/95 hover:border-white/70 hover:scale-105 transform transition-all duration-300 focus-ring shadow-lg"
              role="button"
            >
              <span aria-hidden="true" className="text-xl ml-2">📖</span>
              <span className="text-base">قصّتنا</span>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <span className="text-2xl mb-2" aria-hidden="true">🎬</span>
              <div className="text-xl font-black text-white">700+</div>
              <div className="text-white/80 text-sm">مشروع منجز</div>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <span className="text-2xl mb-2" aria-hidden="true">⭐</span>
              <div className="text-xl font-black text-white">12+</div>
              <div className="text-white/80 text-sm">سنة خبرة</div>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <span className="text-2xl mb-2" aria-hidden="true">🗺️</span>
              <div className="text-xl font-black text-white">81</div>
              <div className="text-white/80 text-sm">مدينة نخدمها</div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        {/* WHO WE ARE */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50/50" aria-labelledby="who-we-are-title">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="who-we-are-title" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
                <span className="gradient-text gradient-text--safe-xl">من نحن</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                شريكك الموثوق في تقنيات الفعاليات منذ 2012
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-blue-600">سحنيفا</strong> من أبرز{" "}
                  <strong>شركات إنتاج الفعاليات الرائدة في تركيا</strong> منذ عام 2012. بفريق متخصص في تأجير المنصات وشاشات LED وأنظمة الصوت والإضاءة والتركيب الاحترافي، نضخّ الحياة في كل فعالية من خلال التميّز التقني والرؤية الإبداعية.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  مهمّتنا تقديم حلول <strong>موثوقة ومبتكرة وتتمحور حول العميل</strong> لتغطية بنيتكم التحتية التقنية بسلاسة وتعزيز قيمة علامتكم التجارية.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { number: "700+", label: "مشروع منجز" },
                    { number: "98%", label: "نسبة الرضا" },
                    { number: "81", label: "محافظة نغطّيها" },
                    { number: "15+", label: "فرد في الفريق المتخصص" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-100"
                      aria-label={`${stat.number} ${stat.label}`}
                    >
                      <div className="text-2xl font-black text-blue-600">{stat.number}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/img/ekip-calisma.webp"
                    alt="فريق سحنيفا الاحترافي يُجهّز المنصة والإعداد التقني"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>
                <div
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl -z-10"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl -z-10"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-20 bg-gradient-to-br from-blue-50/80 to-purple-50/60" aria-labelledby="values-title">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="values-title" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                قيمنا و
                <span className="gradient-text gradient-text--safe-xl"> مبادئنا</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                الركائز التي تقوم عليها عقليّتنا الموجّهة بالجودة والموثوقية ومحوريّة العميل
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VALUES.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105"
                >
                  <div className="text-4xl mb-4 gradient-text gradient-text--safe-xl">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="py-20 bg-white" aria-labelledby="timeline-title">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="timeline-title" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                مسيرتنا و
                <span className="gradient-text gradient-text--safe-xl"> قصّة نجاحنا</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" aria-hidden="true" />
            </div>

            <div className="relative">
              <div
                className="absolute right-1/2 translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full hidden lg:block"
                aria-hidden="true"
              />
              <div className="space-y-12 lg:space-y-0">
                {TIMELINE.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col lg:flex-row items-center ${
                      index % 2 === 0 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"} mb-8 lg:mb-0`}>
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-3xl" aria-hidden="true">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                              {item.year}
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    <div className="absolute right-1/2 translate-x-1/2 lg:flex items-center justify-center hidden" aria-hidden="true">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg" />
                    </div>

                    <div className="lg:w-1/2 hidden lg:block" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT PORTFOLIO */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/95" aria-labelledby="clients-title">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="clients-title" className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                شركاؤنا
                <span className="gradient-text gradient-text--safe-xl"> الموثوقون</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                على مدى أكثر من عقد دعمنا العلامات التجارية المؤسسية والمؤسسات الحكومية والوكالات الإبداعية بإنتاج متكامل.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {CLIENTS.map((client, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full motion-safe:animate-pulse" aria-hidden="true" />
                    <span className="text-white font-medium group-hover:text-blue-300 transition-colors">{client}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
                <h3 className="text-2xl font-black text-white mb-4">لماذا يختارنا الآلاف من العملاء؟</h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  إتقاننا التقني وموثوقيّتنا وعقليّتنا التي تضع العميل في المقدمة يتيحون لنا تقديم قيمة أعلى في كل إنتاج.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl border border-white/30 transition-all duration-300 hover:scale-105"
                    aria-label="راسلنا عبر واتساب"
                  >
                    💬 تواصل عبر واتساب
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50/30" aria-labelledby="vision-title">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="text-4xl mb-4" aria-hidden="true">🎯</div>
                <h3 id="vision-title" className="text-3xl font-black text-gray-900 mb-6">مهمّتنا</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  تقديم حلول تقنية <strong>مبتكرة وموثوقة ومستدامة</strong> لفعاليات عملائنا ترفع قيمة علاماتهم التجارية وتحقّق التميّز التقني والرؤية الإبداعية في جميع أنحاء تركيا.
                </p>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "أهداف خالية من الأخطاء في البنية التحتية التقنية",
                    "نجاح يتجاوز 98% في رضا العملاء",
                    "ابتكار مستمر وتحديث للمعدات",
                    "عمليات مراعية للبيئة ومستدامة",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg border border-purple-100">
                <div className="text-4xl mb-4" aria-hidden="true">🚀</div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">رؤيتنا</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  أن نكون <strong>أكبر شركة تقنيات فعاليات في تركيا</strong> بحلول 2028 وأن ننمو لنصبح علامة عالمية في أوروبا والشرق الأوسط، بوضع معايير جديدة من خلال التحوّل الرقمي والتقنيات الخضراء.
                </p>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "تغطية 100% لجميع محافظات تركيا",
                    "التوسّع نحو أوروبا والشرق الأوسط",
                    "حلول فعاليات متكاملة مع تقنيات AR/VR",
                    "عمليات محايدة كربونياً كهدف استراتيجي",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600" aria-labelledby="cta-title">
          <div className="container max-w-4xl mx-auto px-4 text-center text-white">
            <h2 id="cta-title" className="text-4xl md:text-5xl font-black mb-6">
              لنتعاون في <span className="text-yellow-300">إنتاجك القادم</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              فريقنا المتمرّس جاهز لتقديم أنسب الحلول لفعاليتك بخبرة تمتد لأكثر من عقد.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <a
                href={`tel:${PHONE}`}
                className="group bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="اتصل الآن للحصول على استشارة احترافية"
              >
                <span className="flex items-center justify-center gap-2">📞 اتصل الآن</span>
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="تواصل معنا عبر واتساب للحصول على عرض سريع"
              >
                <span className="flex items-center justify-center gap-2">💬 واتساب</span>
              </a>

              <Link
                href="/ar/contact"
                className="group bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl border-2 border-white transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="تواصل معنا عبر نموذج البريد الإلكتروني"
              >
                <span className="flex items-center justify-center gap-2">📧 البريد الإلكتروني</span>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
              <p className="text-white/90 text-sm">
                <strong>⏱️ رد خلال ساعتين:</strong> خلال ساعات العمل نقدّم عرض سعر تفصيلياً وإرشادات احترافية في غضون ساعتين.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

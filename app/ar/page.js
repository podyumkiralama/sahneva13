import Image from "next/image";

import CorporateEvents from "@/components/CorporateEvents";
import ServicesTabs from "@/components/ServicesTabs";
import ProjectsGallery from "@/components/ProjectsGallery";
import Faq from "@/components/Faq";
import JsonLd from "@/components/seo/JsonLd";

import { LOCALE_CONTENT } from "@/lib/i18n/localeContent";
import { FAQ_ITEMS_AR } from "@/lib/faqData";
import {
  SITE_URL,
  buildAlternateLanguages,
  buildCanonical,
} from "@/lib/seo/seoConfig";

const { home } = LOCALE_CONTENT.ar;

const HERO_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjUiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjUiIGZpbGw9IiMwYjBmMWEiLz48L3N2Zz4=";

const heroImg = {
  src: "/img/hero-bg.webp",
  width: 1600,
  height: 1066,
  blurDataURL: HERO_BLUR_DATA_URL,
};

const HERO_IMAGE_ALT_AR =
  "خلفية تعرض منصة مع شاشة LED وهيكل تعليق وإضاءة من فريق ساهنيفا للتقنيات الحدثية";

const HERO_FEATURES_AR = [
  {
    icon: "📍",
    title: "فريق محلي في تركيا",
    description: "تخطيط وتنسيق مباشر مع موقع الفعالية",
    color: "from-yellow-400 to-orange-400",
  },
  {
    icon: "🚚",
    title: "لوجستيات محلية",
    description: "نقل وتركيب وفك ضمن خطة واحدة",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: "🎛️",
    title: "دعم تقني في الموقع",
    description: "طاقم تشغيل أثناء الفعالية",
    color: "from-purple-400 to-pink-400",
  },
];

const ORGANIZATION_ID = `${SITE_URL}/#org`;
const AR_PAGE_URL = buildCanonical("/ar");
const AR_OG_IMAGE_URL = `${SITE_URL}/img/og/sahneva-og.webp`;
const AR_WHATSAPP_HREF = `https://wa.me/905453048671?text=${encodeURIComponent(
  "مرحبًا، أود الحصول على عرض سعر لفعالية في تركيا.\n\nالمدينة:\nالتاريخ:\nمكان الفعالية:\nنوع الفعالية:",
)}`;

const WHY_SAHNEVA_FEATURES_AR = [
  {
    icon: "📍",
    title: "فريق محلي في تركيا",
    desc: "فريق واحد يتولى التخطيط والتنسيق مع الموقع والتنفيذ التقني من بداية المشروع حتى تسليم المساحة.",
    stat: "فريق محلي",
  },
  {
    icon: "⚡",
    title: "استجابة سريعة وواضحة",
    desc: "نراجع تفاصيل المدينة والتاريخ والمكان ونوضح المعلومات الناقصة قبل إعداد النطاق الفني.",
    stat: "تواصل مباشر",
  },
  {
    icon: "🗺️",
    title: "تنفيذ في مختلف أنحاء تركيا",
    desc: "نخطط للموارد والجدول وحركة الفريق وفق مدينة المشروع ومتطلبات الموقع وموعد الفعالية.",
    stat: "تغطية وطنية",
  },
  {
    icon: "🚚",
    title: "لوجستيات محلية",
    desc: "ننسق النقل والدخول إلى الموقع والتفريغ واستلام المعدات وإعادتها بعد انتهاء الفعالية.",
    stat: "نقل وتجهيز",
  },
  {
    icon: "🛠️",
    title: "تركيب وفك احترافي",
    desc: "يقوم الطاقم بتركيب الأنظمة واختبارها ثم فكها وإخلاء الموقع وفق الجدول المتفق عليه.",
    stat: "من التركيب إلى الفك",
  },
  {
    icon: "🎛️",
    title: "دعم تقني في الموقع",
    desc: "يتابع المشغل والفنيون الصوت والصورة والإضاءة وتدفق البرنامج أثناء الفعالية.",
    stat: "تشغيل ميداني",
  },
];

const AR_QUOTE_STEPS = [
  {
    title: "أرسلوا تفاصيل الفعالية",
    desc: "المدينة، التاريخ، المكان، نوع الفعالية، عدد الضيوف والخدمات المطلوبة.",
  },
  {
    title: "نجهز الحل الفني",
    desc: "نجمع المنصة، شاشة LED، الصوت، الإضاءة، اللوجستيات والطاقم في خطة واحدة.",
  },
  {
    title: "استلموا العرض الفني والمالي",
    desc: "نطاق واضح يشمل المعدات والنقل والتركيب والتشغيل في الموقع والفك.",
  },
];

const SERVICES_AR = [
  {
    id: "stage",
    title: "هندسة المنصات",
    icon: "🎪",
    description:
      "منصات معيارية، ممشى عرض ومنصات مرتفعة مصممة حسب الأحمال والجمهور وخصائص المكان.",
    image: "/img/hizmet-sahne.webp",
    features: [
      "سطوح معيارية (1×1م، 1×2م، 2×2م) بارتفاعات قابلة للتعديل",
      "هياكل تراس من الألومنيوم، أبراج ودعامات أمان",
      "حواجز حماية، منحدرات وحلول مقاومة للعوامل الجوية",
      "فريق تركيب وفك احترافي",
      "منصات عالية التحمل للحفلات والإطلاقات",
    ],
    href: "/ar/services#stage",
  },
  {
    id: "podium",
    title: "البوديوم وممرات العرض",
    icon: "👑",
    description:
      "بوديومات أنيقة، ممرات عرض ومنصات تقديم للفعاليات المؤسسية، حفلات الجوائز وحملات العلامات التجارية.",
    image: "/img/hizmet-podyum.webp",
    features: [
      "ارتفاعات وأشكال مخصصة للبوديوم",
      "مكاتب بروتوكول، مناضد محاضرات وخلفيات للعلامة",
      "تشطيبات بالسجاد أو الفينيل أو الخشب",
      "تركيب سريع ونقل مدمج",
      "مجموعة ألوان وملحقات واسعة",
    ],
    href: "/ar/services#stage",
  },
  {
    id: "led",
    title: "تأجير شاشات LED",
    icon: "🖥️",
    description:
      "جدران LED داخلية وخارجية عالية الدقة مع تشغيل محتوى، معالجات وأنظمة تعليق كاملة.",
    image: "/img/galeri/led-ekran-kiralama-1.webp",
    features: [
      "خيارات Pixel Pitch من P2 حتى P6",
      "خزائن خارجية مقاومة للعوامل الجوية بمعيار IP65",
      "سطوع يفوق 4500 نت للرؤية النهارية",
      "معالجة Novastar أو Brompton مع خطط احتياطية",
      "تركيب كامل ودعم تشغيل من المشغلين",
    ],
    href: "/ar/services#led",
  },
  {
    id: "av",
    title: "أنظمة الصوت والإضاءة",
    icon: "🎭",
    description:
      "أنظمة صوت بمستوى الحفلات، إضاءة مسرحية وهياكل تراس يديرها مهندسون معتمدون.",
    image: "/img/ses-isik/ses-sistemi.webp",
    features: [
      "أنظمة Line-array مع طاولات مزج رقمية",
      "حزم ميكروفونات لاسلكية ومراقبة مسرحية",
      "رؤوس متحركة، وحدات إضاءة غامرة ومؤثرات",
      "برمجة DMX وتحكم كامل في العرض",
      "حلول تعليق، رافعات وتوزيع طاقة",
    ],
    href: "/ar/services#audio",
  },
  {
    id: "tents",
    title: "خيام الفعاليات",
    icon: "⛺",
    description:
      "خيام احترافية وباجودا مع أرضيات، تكييف وخيارات ديكور للمناسبات الخارجية.",
    image: "/img/galeri/cadir-kiralama-1.webp",
    features: [
      "هياكل 3×3م، 3×6م، 6×6م",
      "أقمشة مقاومة للماء والأشعة فوق البنفسجية",
      "جدران جانبية، ألواح زجاجية وأرضيات",
      "إضاءة محيطية وعناصر العلامة التجارية",
      "لوجستيات كاملة وتركيب وفك",
    ],
    href: "/ar/services#tents",
  },
  {
    id: "seating",
    title: "تجهيزات الجلوس والضيافة",
    icon: "🪑",
    description:
      "طاولات ولوازم جلوس للمؤتمرات والاحتفالات مع التوصيل، التنسيق والجمع بعد الفعالية.",
    image: "/img/hizmet-masa.webp",
    features: [
      "طاولات دائرية، مستطيلة وكوكتيل",
      "كراسٍ مريحة، مقاعد VIP وأثاث صالات",
      "حزم ديكور للأعراس والحفلات",
      "أغطية طاولات، مفارش وإكسسوارات",
      "لوجستيات شاملة وتنسيق في الموقع",
    ],
    href: "/ar/services#tents",
  },
];

const SERVICES_DICTIONARY_AR = {
  sectionPill: "خدمة احترافية",
  sectionTitlePrefix: "خدمات المسرح، LED و",
  sectionTitleHighlight: "الإنتاج التقني للفعاليات",
  sectionDesc:
    "نقدم في تركيا حلول تأجير المسرح، شاشات LED، الصوت، الإضاءة، التراس والخيام مع تخطيط فني وتشغيل ميداني من فريق واحد للمعارض، المؤتمرات، الحفلات والفعاليات المؤسسية.",
  tablistLabel: "تبويبات الخدمات",
  featuresHeading: "مميزات الخدمة",
  ctaLabel: "عرض التفاصيل وطلب عرض سعر",
  ctaTitle: "افتح تفاصيل الخدمة واطلب عرض سعر مخصص",
  imageBadgeLabel: "حل احترافي",
  imageAlt: "خدمة {{title}} من سحنيفا",
  overlayButtonTitle: "افتح تفاصيل {{title}}",
  overlayButtonAria: "فتح صفحة تفاصيل خدمة {{title}}",
};

const PROJECT_GALLERIES_AR = {
  "تركيبات شاشات LED": {
    imageSlug: "led-ekran-kiralama",
    imageCount: 36,
    description: "شاشات غامرة للمؤتمرات، الملاعب وتجارب العلامات التجارية في الهواء الطلق.",
    stats: "+50 عرضًا مؤسسيًا",
    icon: "🖥️",
  },
  "حلول خيام الفعاليات": {
    imageSlug: "cadir-kiralama",
    imageCount: 19,
    description: "خيام مقاومة للطقس مع مساحات ضيافة وتجهيزات استقبال متكاملة.",
    stats: "+100 فعالية خارجية",
    icon: "⛺",
  },
  "منصات وبوديوم": {
    imageSlug: "podyum-kiralama",
    imageCount: 36,
    description: "منصات مخصصة، ممشى عرض وحلول بوديوم لدعم الإطلاقات والحفلات.",
    stats: "+200 تركيب",
    icon: "👑",
  },
};

const PROJECTS_DICTIONARY_AR = {
  title: "نماذج من مشاريعنا",
  subtitle:
    "مختارات من تجهيزات Sahneva في تركيا: مؤتمرات، حفلات، معارض، مهرجانات ومشاريع إنتاج ميداني نفذت بتنسيق تقني واحد.",
  exploreAria: "استعرض المعرض — {{title}} ({{count}} مشروع)",
  exploreHiddenLabel: "استعرض المعرض — {{title}} ({{count}} مشروع)",
  hoverCta: "استعرض المعرض",
  statsLabel: "مشاريع منجزة",
  caseStudyCta: "افتح تفاصيل المشروع",
  cardAlt: "{{title}} من تنفيذ سحنيفا",
  seeAllLabel: "عرض الكل",
  seeAllSr: " — {{title}} ({{count}} مشروع)",
  badgeLabel: "مرجع",
  dialogAria: "معرض مشاريع {{title}}",
  closeLabel: "إغلاق المعرض",
  prevLabel: "‹ السابق",
  prevSr: "المشروع السابق",
  nextLabel: "التالي ›",
  nextSr: "المشروع التالي",
  mobilePrevLabel: "‹ السابق",
  mobileNextLabel: "التالي ›",
  counterLabel: "{{index}} / {{total}}",
  liveMessage: "تم فتح معرض {{title}} ويضم {{count}} مشروعًا",
  lightboxAlt: "{{title}} — مرجع المشروع رقم {{index}}",
  regionTitleSr: "منطقة محتوى معارض المشاريع التفصيلية",
};

const FAQ_DICTIONARY_AR = {
  sectionPill: "الأسئلة الشائعة",
  sectionTitlePrefix: "خطوات التأجير و",
  sectionTitleHighlight: "الأسئلة المتكررة",
  sectionDesc:
    "إجابات عملية حول تأجير المسرح، شاشات LED، الصوت، الإضاءة، الخيام وتشغيل الفعاليات داخل تركيا.",
  supportTitle: "لم تجدوا الإجابة؟",
  supportDesc:
    "قد تحتاج فعاليتكم في تركيا إلى نطاق خاص. شاركونا المدينة، التاريخ وعدد الحضور لنقترح خطة فنية واضحة.",
  supportPhoneLabel: "اتصلوا بنا",
  supportWhatsappLabel: "دعم واتساب",
  supportMailLabel: "أرسلوا بريداً",
  contactPhone: "+90 545 304 86 71",
  contactPhoneHref: "tel:+905453048671",
  contactWhatsappHref:
    "https://wa.me/905453048671?text=%D8%A3%D8%B1%D9%8A%D8%AF+%D8%AA%D8%AC%D9%87%D9%8A%D8%B2+%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A9+%D9%81%D9%8A+%D8%AA%D8%B1%D9%83%D9%8A%D8%A7+%D9%85%D8%B9+Sahneva",
  contactMail: "info@sahneva.com",
  contactMailHref: "mailto:info@sahneva.com",
  whatsappActionText: "أرسلوا تفاصيل المشروع",
  newTabHint: "يفتح في علامة تبويب جديدة",
  seeAllHref: "/ar/contact",
  seeAllLabel: "تواصلوا معنا",
  seeAllAriaLabel: "افتح صفحة التواصل مع Sahneva",
  sectionTitle: "الأسئلة الشائعة",
  regionTitleSr: "منطقة محتوى الأسئلة الشائعة",
  cta: {
    title: "🌟 هل تحتاجون إلى إجابة مخصصة؟",
    description: "فريق الإنتاج التقني لدينا جاهز لمساعدتكم في تصميم الحل المثالي لفعاليتكم.",
    primary: {
      label: "استعرض جميع الخدمات",
      href: "/ar/services",
      srLabel: "صفحة الخدمات",
    },
    secondary: {
      label: "تواصلوا معنا",
      href: "/ar/contact",
      srLabel: "صفحة الاتصال",
    },
  },
  quickContact: {
    title: "قنوات تواصل سريعة",
    navLabel: "خيارات التواصل السريع",
    items: [
      {
        href: "tel:+905453048671",
        icon: "📞",
        label: "هاتف",
        description: "+90 545 304 8671",
        className:
          "inline-flex items-center gap-3 bg-blue-100 hover:bg-blue-200 border border-blue-300 text-blue-900 font-bold px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105 min-h-[48px] text-sm",
      },
      {
        href: "https://wa.me/905453048671?text=%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84+%D9%85%D8%B9+%D9%81%D8%B1%D9%8A%D9%82+%D8%B3%D8%AD%D9%86%D9%8A%D9%81%D8%A7+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D8%B1%D8%B6+%D8%B3%D8%B9%D8%B1",
        icon: "💬",
        label: "واتساب",
        description: "رسالة فورية",
        target: "_blank",
        rel: "noopener noreferrer",
        srHint: " (يفتح في علامة تبويب جديدة)",
        className:
          "inline-flex items-center gap-3 bg-green-100 hover:bg-green-200 border border-green-300 text-green-900 font-bold px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105 min-h-[48px] text-sm",
      },
      {
        href: "mailto:info@sahneva.com",
        icon: "✉️",
        label: "بريد إلكتروني",
        description: "info@sahneva.com",
        className:
          "inline-flex items-center gap-3 bg-purple-100 hover:bg-purple-200 border border-purple-300 text-purple-900 font-bold px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105 min-h-[48px] text-sm",
      },
    ],
    stats: ["دعم على مدار الساعة", "رد خلال 5 دقائق"],
  },
};

const CORPORATE_EVENTS_CARDS_AR = [
  {
    slug: "launch",
    title: "إطلاق المنتجات",
    img: "/img/kurumsal/lansman.webp",
    alt: "منصة وشاشة LED وإضاءة احترافية لإطلاق منتج تنفذه سحنيفا",
    text: "سرد بصري عبر شاشات LED، تصميم منصة، عروض إضاءة وبث مباشر لإطلاقات لا تُنسى.",
    icon: "🚀",
    gradient: "from-purple-500/10 to-blue-500/10",
    color: "text-purple-700",
  },
  {
    slug: "conference",
    title: "المؤتمرات والقمم",
    img: "/img/kurumsal/konferans.webp",
    alt: "منصة مؤتمر مع عرض وإضاءة وصوت من تنفيذ سحنيفا",
    text: "ترتيبات ميكروفونات متعددة، كبائن ترجمة، إدارة عروض وتسجيل احترافي لبرامج بلا أخطاء.",
    icon: "🎤",
    gradient: "from-green-500/10 to-emerald-500/10",
    color: "text-green-700",
  },
  {
    slug: "dealer",
    title: "اجتماعات الوكلاء والفعاليات الداخلية",
    img: "/img/kurumsal/bayi-toplantisi.webp",
    alt: "فعالية وكلاء مع ديكور منصة وشاشات LED ودعم صوتي من سحنيفا",
    text: "ديكور متوافق مع الهوية البصرية، تشغيل متعدد الشاشات، تحكم صوتي/مرئي وفرق تقنية متخصصة.",
    icon: "🤝",
    gradient: "from-orange-500/10 to-red-500/10",
    color: "text-orange-700",
  },
];

const CORPORATE_EVENTS_ADVANTAGES_AR = [
  {
    icon: "⚡",
    label: "تركيب منظم ومختبر",
    desc: "فِرق خبيرة تنفذ التركيب والاختبارات وفق جدول الموقع",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: "🎛",
    label: "معدات حديثة",
    desc: "أحدث تجهيزات الصوت، الإضاءة وLED",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: "👷",
    label: "طاقم ذو خبرة",
    desc: "مهندسون معتمدون يشرفون على كل التفاصيل",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    icon: "🛡",
    label: "أمان وخطط احتياطية",
    desc: "طاقة احتياطية وإجراءات سلامة شاملة",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
];

const CORPORATE_EVENTS_DICTIONARY_AR = {
  sectionTitle: "حلول الفعاليات المؤسسية في تركيا",
  introText:
    "نساعد الشركات والوكالات العربية على تنفيذ المؤتمرات، الإطلاقات، المعارض وحفلات البروتوكول في تركيا من خلال فريق محلي يدير المسرح، LED، الصوت، الإضاءة والتشغيل الميداني.",
  highlightTitle: "لماذا Sahneva",
  sectionTitleSr: "منطقة عرض حلول الفعاليات المؤسسية",
  highlightPill: "لماذا سحنيفا؟",
  highlightTitlePrefix: "تميزنا في",
  highlightTitleAccent: "الحلول المؤسسية",
  advantagesAriaLabel: "مزايا خدماتنا",
  cardCtaLabel: "اطلب عرض سعر",
  cardCtaHref: "/ar/contact",
  cardCtaAria: "اطلب عرض سعر لخدمة {{title}}",
  cardBadgeLabel: "حل متكامل",
  bannerTitle: "لا تتركوا فعالية تركيا للصدفة",
  bannerTitlePrefix: "فعالياتكم المؤسسية تستحق",
  bannerTitleHighlight: "تنفيذًا متكاملًا",
  bannerTitleSuffix: "بدعم تقني",
  bannerDescription:
    "أخبرونا بأهدافكم لنقدّم لكم المنصة، شاشات LED، الصوت، الإضاءة والبث ضمن خطة جاهزة للتركيب والاختبارات وفق جدول الفعالية.",
  phoneCtaLabel: "اتصلوا بفريقنا",
  phoneCtaHref: "tel:+905453048671",
  phoneCtaAria: "اتصل بسحنيفا للحصول على استشارة تقنية: +90 545 304 86 71",
  whatsappCtaLabel: "دردشة واتساب",
  whatsappCtaHref:
    "https://wa.me/905453048671?text=%D8%A3%D8%B1%D9%8A%D8%AF+%D8%AA%D9%86%D8%B8%D9%8A%D9%85+%D9%81%D8%B9%D8%A7%D9%84%D9%8A%D8%A9+%D9%85%D8%A4%D8%B3%D8%B3%D9%8A%D8%A9.+%D9%87%D9%84+%D9%86%D8%AA%D8%AD%D8%AF%D8%AB+%D8%B9%D9%86+%D8%A7%D9%84%D9%85%D9%86%D8%B5%D8%A9+%D9%88%D8%A7%D9%84%D8%AF%D8%B9%D9%85+%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%9F",
  whatsappCtaAria: "أرسل رسالة عبر واتساب",
  whatsappSrHint: "(يفتح في علامة تبويب جديدة)",
  supportStats: ["فريق محلي في تركيا", "دعم تقني في الموقع"],
};

export const metadata = {
  title: "تأجير منصات وشاشات LED وأنظمة صوت وإضاءة في تركيا",
  description:
    "سحنيفا تقدم خدمات تأجير منصات الأحداث وشاشات LED وأنظمة الصوت والإضاءة مع تركيب وتشغيل احترافي كامل في مختلف أنحاء تركيا لجميع أنواع الفعاليات والمؤتمرات.",
  openGraph: {
    title: "تأجير منصات وشاشات LED وأنظمة صوت وإضاءة في تركيا | Sahneva",
    description:
      "سحنيفا تقدم خدمات تأجير منصات الأحداث وشاشات LED وأنظمة الصوت والإضاءة مع تركيب وتشغيل احترافي كامل في مختلف أنحاء تركيا لجميع أنواع الفعاليات والمؤتمرات.",
    url: AR_PAGE_URL,
    type: "website",
    locale: "ar_AR",
    siteName: "Sahneva",
    images: [
      {
        url: AR_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Sahneva – تأجير منصات وشاشات LED وأنظمة صوت وإضاءة في تركيا",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تأجير منصات وشاشات LED وأنظمة صوت وإضاءة في تركيا | Sahneva",
    description:
      "سحنيفا تقدم خدمات تأجير منصات الأحداث وشاشات LED وأنظمة الصوت والإضاءة مع تركيب وتشغيل احترافي كامل في مختلف أنحاء تركيا لجميع أنواع الفعاليات والمؤتمرات.",
  },
  alternates: {
    canonical: AR_PAGE_URL,
    languages: buildAlternateLanguages(),
  },
};

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${AR_PAGE_URL}#webpage`,
        url: AR_PAGE_URL,
        name: "تأجير منصات وشاشات LED وأنظمة صوت وإضاءة | Sahneva",
        inLanguage: "ar",
        about: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": "OfferCatalog",
        "@id": `${AR_PAGE_URL}#catalog`,
        name: "خدمات تقنيات الفعاليات",
        url: AR_PAGE_URL,
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "تأجير المنصات",
              description: "خدمات هندسة المنصات والبوديوم",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "TRY",
              minPrice: 10000,
              maxPrice: 200000,
            },
            availability: "https://schema.org/InStock",
            areaServed: "TR",
            seller: { "@id": ORGANIZATION_ID },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "تأجير شاشات LED" },
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: 1800,
              priceCurrency: "TRY",
              unitText: "م²",
              unitCode: "MTK",
            },
            areaServed: "TR",
            seller: { "@id": ORGANIZATION_ID },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "أنظمة الصوت والإضاءة" },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "TRY",
              minPrice: 10000,
              maxPrice: 300000,
            },
            areaServed: "TR",
            seller: { "@id": ORGANIZATION_ID },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "خيام الفعاليات" },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "TRY",
              minPrice: 6000,
              maxPrice: 800000,
            },
            areaServed: "TR",
            seller: { "@id": ORGANIZATION_ID },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "تأجير المنصات (بوديوم)" },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "TRY",
              minPrice: 250,
              maxPrice: 100000,
            },
            areaServed: "TR",
            seller: { "@id": ORGANIZATION_ID },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "تأجير الكراسي" },
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: 250,
              priceCurrency: "TRY",
              unitText: "للوحدة",
            },
            areaServed: "TR",
            seller: { "@id": ORGANIZATION_ID },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "تأجير الطاولات" },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "TRY",
              minPrice: 1000,
              maxPrice: 2000,
            },
            areaServed: "TR",
            seller: { "@id": ORGANIZATION_ID },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "خدمة النقل داخل إسطنبول" },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: 7000,
              priceCurrency: "TRY",
            },
            areaServed: "TR",
            seller: { "@id": ORGANIZATION_ID },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "إنتاج الفعاليات المؤسسية" },
            areaServed: "TR",
            seller: { "@id": ORGANIZATION_ID },
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${AR_PAGE_URL}#service`,
        name: "حلول تقنيات الفعاليات",
        description:
          "حلول متكاملة للمنصات، شاشات LED، الصوت، الإضاءة والخيام مع فرق تشغيل محترفة في كل تركيا.",
        url: AR_PAGE_URL,
        areaServed: { "@type": "Country", name: "TR" },
        provider: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": "ImageObject",
        "@id": `${AR_PAGE_URL}#og`,
        contentUrl: AR_OG_IMAGE_URL,
        width: 1200,
        height: 630,
      },
      {
        "@type": "FAQPage",
        "@id": `${AR_PAGE_URL}#faq`,
        url: AR_PAGE_URL,
        mainEntity: FAQ_ITEMS_AR.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return <JsonLd data={data} suppressHydrationWarning />;
}

function HeroBackgroundImage({ alt = HERO_IMAGE_ALT_AR, ariaHidden = false }) {
  return (
    <Image
      src={heroImg.src}
      alt={ariaHidden ? "" : alt}
      fill
      priority
      fetchPriority="high"
      sizes="100vw"
      placeholder="blur"
      blurDataURL={heroImg.blurDataURL}
      quality={70}
      className="absolute inset-0 h-full w-full object-cover object-center"
      style={{ filter: "brightness(0.7) contrast(1.1) saturate(1.05)" }}
      aria-hidden={ariaHidden}
    />
  );
}

export default function ArabicHomePage() {
  return (
    <div className="overflow-x-hidden" dir="rtl">
      <StructuredData />

      <section
        className="relative min-h-[80vh] 2xl:min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b0f1a] via-blue-950 to-purple-950 pt-16 lg:pt-20"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <HeroBackgroundImage />
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/70 to-purple-900/75"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse motion-reduce:animate-none nc-ArHomePage-aurora-1"
          aria-hidden="true"
        />

        <div className="relative z-10 container py-12 md:py-16">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto text-center mb-10">
            
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 mb-6">
                <span
                  className="w-2 h-2 bg-green-400 rounded-full animate-pulse motion-reduce:animate-none"
                  aria-hidden="true"
                />
                <span className="text-white/90 text-sm font-medium">شريك الإنتاج التقني في عموم تركيا</span>
              </div>
            

            
              <h1
                id="hero-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6"
              >
                <span className="block">حلول تقنية متكاملة للفعاليات</span>
                <span className="gradient-text gradient-text--safe-xl" aria-hidden="true">
                  في جميع أنحاء تركيا
                </span>
              </h1>
            

            
              <p className="text-white/80 text-base md:text-lg mb-8 max-w-3xl 2xl:max-w-4xl mx-auto">
                {home.hero.subtitle}
              </p>
            

            
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 mb-12">
                <a
                  href="tel:+905453048671"
                  className="w-full sm:w-auto min-w-[180px] text-center group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-base px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 backdrop-blur-sm focus-ring"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span aria-hidden="true">📞</span> اتصل بفريقنا
                  </span>
                  <div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={AR_WHATSAPP_HREF}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="w-full sm:w-auto min-w-[180px] text-center group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-base px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 backdrop-blur-sm focus-ring"
                  aria-label="عرض واتساب – يفتح في علامة تبويب جديدة"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span aria-hidden="true">💬</span> عرض واتساب
                  </span>
                  <span className="sr-only">(يفتح في علامة تبويب جديدة)</span>
                  <div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                </a>
              </div>
            

            
              <h2 className="sr-only">أبرز الميزات</h2>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12 list-none p-0 m-0">
                {HERO_FEATURES_AR.map((item) => (
                  <li key={item.title} className="m-0 p-0">
                    
                      <div className="group bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:bg-white/15">
                        <div className="text-2xl mb-2 gradient-text gradient-text--safe-xl" aria-hidden="true">
                          {item.icon}
                        </div>
                        <div className="text-white font-bold text-base mb-1">{item.title}</div>
                        <div className="text-white/70 text-xs">{item.description}</div>
                      </div>
                    
                  </li>
                ))}
              </ul>
            

            
              <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-xl max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-xl" aria-hidden="true">
                      🎯
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-start">
                    <p className="text-white text-xl md:text-2xl font-bold mb-2">استشارة تقنية مجانية</p>
                    <p className="text-white/90 text-base leading-relaxed">
                      لنخطط معًا الحزمة المثالية من المنصات، شاشات LED وأنظمة الصوت والإضاءة مع مخططات تفصيلية وقوائم معدات ولوجستيات.
                      <strong className="text-yellow-300"> عرض سعر واضح حسب نطاق العمل.</strong>
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="#get-a-quote"
                      className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-5 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm focus-ring"
                    >
                      احصل على عرض سعر
                    </a>
                  </div>
                </div>
              </div>
            
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div className="animate-bounce motion-reduce:animate-none">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
            </div>
          </div>
        </div>
      </section>

      <div id="main" className="relative">
        <section
          id="get-a-quote"
          dir="rtl"
          aria-labelledby="ar-quote-steps-title"
          className="scroll-mt-24 bg-slate-950 py-12 text-white md:py-16"
        >
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black text-cyan-300">
                عرض السعر في 3 خطوات
              </p>
              <h2
                id="ar-quote-steps-title"
                className="mt-3 text-3xl font-black leading-tight md:text-4xl"
              >
                من تفاصيل الفعالية إلى عرض واضح للتنفيذ في تركيا
              </h2>
              <p className="mt-4 text-base leading-8 text-white/75">
                أرسلوا المعلومات الأساسية مرة واحدة، وسنحوّلها إلى خطة تجمع التجهيزات
                واللوجستيات والتركيب والدعم الميداني.
              </p>
            </div>

            <ol className="mx-auto mt-8 grid max-w-6xl list-none gap-4 p-0 md:grid-cols-3">
              {AR_QUOTE_STEPS.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-6"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-300 font-black text-slate-950"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-black">{step.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/75">{step.desc}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 text-center">
              <a
                href="/ar/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-300 px-7 font-black text-slate-950 transition hover:bg-cyan-200 focus-ring"
              >
                أرسلوا طلب عرض السعر
              </a>
            </div>
          </div>
        </section>

        <div aria-hidden="true" className="h-12 lg:h-16" />

        <section
          className="relative py-12 bg-gradient-to-b from-white to-neutral-50/80"
          aria-labelledby="services-title"
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"
            aria-hidden="true"
          />
          <div className="relative z-10 space-y-8">
            <div className="container">
              
                <div className="text-center mb-12">
                  <h2 id="services-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
                    خدمات فعاليات <span className="gradient-text gradient-text--safe-xl">احترافية</span>
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    حلول متكاملة للمنصات، شاشات LED، الصوت، الإضاءة والخيام في جميع أنحاء تركيا
                  </p>
                </div>
              
            </div>

            {/* Negatif margin'li sarmalayıcı kutuyu kapsayıcıdan 16px taşırıyordu
                (overflow-x:hidden gizliyordu). Diğer diller ServicesTabs'ı
                doğrudan render ediyor. */}
            <ServicesTabs
              servicesData={SERVICES_AR}
              dictionary={SERVICES_DICTIONARY_AR}
              containerProps={{ dir: "rtl" }}
            />
          </div>
        </section>

        <section
          className="py-12 bg-gradient-to-br from-neutral-900 to-blue-900/95"
          aria-labelledby="projects-title"
        >
          <div className="container">
            
              <div className="text-center mb-12">
                <h2 id="projects-title" className="text-3xl md:text-4xl font-black text-white mb-4">
                  أحدث <span className="gradient-text gradient-text--safe-xl">المشاريع</span>
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  إطلاقات مؤسسية، حفلات في الهواء الطلق، فعاليات حكومية وتجارب علامات تجارية نفذتها سحنيفا بشكل متكامل
                </p>
              </div>
            
            <ProjectsGallery
              galleries={PROJECT_GALLERIES_AR}
              dictionary={PROJECTS_DICTIONARY_AR}
              containerProps={{ dir: "rtl" }}
            />
          </div>
        </section>

        <section
          className="py-12 bg-white"
          aria-labelledby="corporate-title"
        >
          <div className="container">
            
              <div className="text-center mb-12">
                <h2 id="corporate-title" className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
                  حلول <span className="gradient-text gradient-text--safe-xl">الفعاليات المؤسسية</span>
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  من القمم التنفيذية إلى لقاءات الوكلاء، ندير تصميم المنصات والإنتاج المرئي والدعم التقني من الألف إلى الياء
                </p>
              </div>
            
            <CorporateEvents
              cards={CORPORATE_EVENTS_CARDS_AR}
              advantages={CORPORATE_EVENTS_ADVANTAGES_AR}
              dictionary={CORPORATE_EVENTS_DICTIONARY_AR}
            />
          </div>
        </section>

        <section
          className="py-12 bg-gradient-to-br from-blue-50/80 to-purple-50/60"
          aria-labelledby="why-heading"
        >
          <div className="container">
            
              <div className="text-center mb-12">
                <h2 id="why-heading" className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
                  لماذا تختار <span className="gradient-text gradient-text--safe-xl">سحنيفا</span>
                </h2>
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  فريق محلي ولوجستيات منظمة وتركيب وتشغيل ميداني ضمن خطة واحدة
                </p>
              </div>
            

            
              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
                {WHY_SAHNEVA_FEATURES_AR.map(({ icon, title, desc, stat }, i) => (
                  <li key={title} className="m-0 p-0">
                    
                      <article
                        className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border border-neutral-100 hover:border-blue-200/70 hover:scale-105"
                        aria-labelledby={`why-card-${i}-title`}
                      >
                        <div className="absolute top-3 end-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {stat}
                        </div>
                        <div className="text-3xl mb-4 gradient-text gradient-text--safe-xl" aria-hidden="true">
                          {icon}
                        </div>
                        <p id={`why-card-${i}-title`} className="font-black text-lg mb-3 text-neutral-900 group-hover:text-blue-600 transition-colors">
                          {title}
                        </p>
                        <p className="text-neutral-700 leading-relaxed text-sm">{desc}</p>
                      </article>
                    
                  </li>
                ))}
              </ul>
            
          </div>
        </section>

        <section
          className="py-12 bg-white"
          aria-labelledby="seo-title"
        >
          <div className="container">
            
              <h2 id="seo-title" className="text-3xl md:text-4xl font-black text-center mb-12 text-neutral-900">
                شريككم <span className="gradient-text gradient-text--safe-xl">المحلي</span> للفعاليات في تركيا
              </h2>
            

            <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
              
                <article className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg border border-blue-100">
                  <p className="font-black text-xl mb-4 text-neutral-900 flex items-center gap-3">
                    <span className="bg-blue-500 text-white p-2 rounded-lg" aria-hidden="true">🚀</span>
                    إنتاج تقني ولوجستي للضيوف القادمين إلى تركيا
                  </p>
                  <div className="prose max-w-none text-neutral-700">
                    <p className="text-base leading-relaxed">
                      عندما تخطط شركة أو وكالة عربية لفعالية في إسطنبول أو أي مدينة تركية، تقوم <strong>سحنيفا</strong> بتصميم ونقل وتشغيل{" "}
                      <a
                        href="/ar/services#stage"
                        className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 inline-block px-2 py-1 rounded-md underline-offset-4 transition-colors"
                      >
                        منصات معيارية
                      </a>
                      {" "}و{" "}
                      <a
                        href="/ar/services#led"
                        className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 inline-block px-2 py-1 rounded-md underline-offset-4 transition-colors"
                      >
                        شاشات LED
                      </a>
                      {" "}و{" "}
                      <a
                        href="/ar/services#audio"
                        className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 inline-block px-2 py-1 rounded-md underline-offset-4 transition-colors"
                      >
                        أنظمة الصوت والإضاءة
                      </a>{" "}
                      للإطلاقات، المعارض، القمم، الحفلات والفعاليات الحكومية.
                    </p>
                    <ul className="mt-4 space-y-2 text-neutral-700">
                      {[
                        "تخطيط الموقع والتحميل والتركيب والإزالة من فريق محلي واحد",
                        "شاشات LED داخلية وخارجية مع تشغيل محتوى وإدارة إشارة",
                        "أنظمة صوت Line-array، إضاءة مسرحية وطاولات تحكم رقمية",
                        "تراس، Rigging، خيام وحلول منصة متوافقة مع طبيعة المكان",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              

              
                <article className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-lg border border-purple-100">
                  <p className="font-black text-xl mb-4 text-neutral-900 flex items-center gap-3">
                    <span className="bg-purple-500 text-white p-2 rounded-lg" aria-hidden="true">🎤</span>
                    إدارة ميدانية للفعاليات الكبيرة
                  </p>
                  <div className="prose max-w-none text-neutral-700">
                    <p className="text-base leading-relaxed">
                      للفعاليات ذات الجمهور الكبير نربط بين خطة الوصول، توزيع الطاقة، مسارات الكابلات، نقاط التحكم وطاقم التشغيل حتى يعمل الموقع كمنظومة واحدة.
                    </p>
                    <ul className="mt-4 space-y-2 text-neutral-700">
                      {[
                        "حلول LED خارجية P3.9 للميادين والحفلات المفتوحة",
                        "أنظمة صوت Line-array وتوزيع صوت مناسب لمساحة الجمهور",
                        "تراس، Scaffold، أبراج دعم ومساحات backstage منظمة",
                        "تنسيق الطاقة، الإشارة، السلامة واللوجستيات قبل يوم الفعالية",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              
            </div>
          </div>
        </section>

        <section
          className="py-12 bg-gradient-to-br from-neutral-900 to-blue-900/95"
          aria-labelledby="faq-title"
        >
          <div className="container">
            
              <div className="text-center mb-12">
                <h2 id="faq-title" className="text-3xl md:text-4xl font-black text-white mb-4">
                  الأسئلة <span className="gradient-text gradient-text--safe-xl">الشائعة</span>
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  إجابات حول الأسعار، اللوجستيات، أوقات التركيب ودعم الطاقم لخدمات المنصات، شاشات LED وأنظمة AV
                </p>
              </div>
            
            <Faq
              items={FAQ_ITEMS_AR}
              dictionary={FAQ_DICTIONARY_AR}
              containerProps={{ dir: "rtl" }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

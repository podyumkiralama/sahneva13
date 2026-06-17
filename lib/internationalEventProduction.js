import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { SITE_URL } from "@/lib/seo/seoConfig";
import { ORGANIZATION_ID } from "@/lib/seo/schemaIds";

export const COMPANY_PROFILE_PDF_URL = "/files/sahneva-company-profile.pdf";
export const COMPANY_PROFILE_PDF_ABSOLUTE_URL = `${SITE_URL}${COMPANY_PROFILE_PDF_URL}`;

const commonPaths = {
  tr: "/turkiyede-etkinlik-cozum-ortagi",
  en: "/en/event-production-company-turkey",
  ar: "/ar/event-production-company-turkey",
  ru: "/ru/event-production-company-turkey",
};

const heroImage = "/img/kurumsal/kurumsal-sahne-led-ekran.webp";
const ogImage = `${SITE_URL}${heroImage}`;

export const INTERNATIONAL_EVENT_CONTENT = {
  en: {
    locale: "en",
    htmlLang: "en-US",
    ogLocale: "en_US",
    path: commonPaths.en,
    title: "Event Production Partner in Turkey for International Companies | Sahneva",
    description:
      "Sahneva provides stage, LED screen, sound, lighting, truss, tent and technical event production solutions in Turkey for international companies, agencies and brands.",
    eyebrow: "Local event production partner in Turkey",
    h1: "Your Local Event Production Partner in Turkey",
    intro:
      "Sahneva supports international companies, European event agencies and global brands planning events in Turkey with stage, LED screen, sound, lighting, truss, tent and technical production solutions. From Istanbul and Antalya to Izmir, Ankara and Bodrum, we plan the local production scope, logistics, setup, show-day operation and dismantling with one technical team.",
    primaryCta: "Request a WhatsApp Quote",
    secondaryCta: "Contact the Team",
    pdfCta: "Download Company Profile",
    pdfAria: "Download Sahneva Company Profile PDF",
    productionScope: "Production scope",
    scopeItems: ["Stage", "LED screen", "Sound", "Lighting", "Truss", "Tent"],
    statValue: "700+ projects",
    statText: "One technical partner for planning, setup, event-day operation and dismantling.",
    heroPdfText: "Company profile and selected references",
    why: {
      eyebrow: "Why a local partner matters",
      title: "International event plans need local technical control",
      text:
        "For a brand or agency coming to Turkey, the challenge is not only equipment rental. A dependable local partner understands venues, loading hours, city logistics, power distribution, crew coordination and event-day production flow.",
      cards: [
        ["Venue and city knowledge", "Venue access, loading points, city traffic and local operation habits are included in the planning."],
        ["One technical responsibility", "Stage, LED screen, sound, lighting, truss and tent teams are coordinated under one production scope."],
        ["International communication", "Briefing, technical planning, quote preparation and production updates can be managed in English."],
      ],
    },
    servicesHeading: {
      eyebrow: "Turnkey technical production",
      title: "Stage, LED screen, sound, lighting, truss and tent support",
      text:
        "The production scope can be shaped as a complete event infrastructure or selected technical departments depending on the agency brief, brand expectations and venue conditions.",
    },
    services: [
      {
        title: "Stage and podium systems",
        text: "Main stage, modular podium, protocol platforms and performance areas planned around venue access, load and audience flow.",
        href: "/en/stage-rental",
      },
      {
        title: "LED screen and video wall",
        text: "Indoor LED, outdoor LED, LED wall and video wall setups with processor, content routing and technical operator support.",
        href: "/en/led-screen-rental",
      },
      {
        title: "Sound, lighting and show control",
        text: "Line array sound, stage lighting, control desk, microphones and show-day technical crew under one production plan.",
        href: "/en/sound-light-rental",
      },
      {
        title: "Truss and rigging systems",
        text: "Truss structures, scaffold support, rigging points and carrier systems for LED, lighting, banners and stage architecture.",
        href: "/en/truss-rental",
      },
      {
        title: "Event tents and covered areas",
        text: "Pagoda tents, transparent tents and large-span tent systems for exhibitions, festivals, hospitality and backstage areas.",
        href: "/en/tent-rental",
      },
      {
        title: "Corporate event production",
        text: "Conference, launch, gala and brand experience production with technical planning, crew coordination and run-of-show support.",
        href: "/en/corporate-events",
      },
    ],
    market: {
      eyebrow: "Cities and event formats",
      title: "Built for companies planning events in Turkey",
      text:
        "Sahneva supports corporate events, launches, trade fairs, sports events, esports tournaments, arena productions, concerts and brand experiences where international planning needs a dependable Turkey event partner.",
    },
    cities: ["Istanbul", "Antalya", "Izmir", "Ankara", "Bodrum", "Turkey-wide logistics"],
    eventTypes: [
      "Corporate conferences",
      "Brand launches",
      "International congresses",
      "Gala and protocol events",
      "Sports events and arena productions",
      "Esports tournaments and LED-heavy show stages",
      "Festivals and concerts",
      "Exhibitions and trade fairs",
    ],
    esports: {
      eyebrow: "Sports and esports production",
      title: "Arena-ready stage, LED and show-lighting support",
      text:
        "For sports events and esports tournaments, we can plan player desks, LED-heavy show stages, audience-facing screens, show lighting, sound systems, truss/scaffold structures and technical crew coordination as one field operation.",
    },
    profile: {
      eyebrow: "Company profile",
      title: "Download Sahneva Company Profile",
      text:
        "Review our company profile with selected stage, LED screen, sound, lighting, truss, corporate event and esports production references.",
    },
    processHeading: {
      eyebrow: "How we work",
      title: "From first brief to site handover",
      text:
        "The workflow is designed to make Turkey-side production clear for international teams before they travel, before equipment is loaded and before the event day begins.",
    },
    process: [
      ["Brief and scope", "We clarify event type, date, city, venue, audience size, screen needs, stage format and technical expectations."],
      ["Technical planning", "A production plan is prepared for stage, LED screen, sound, lighting, truss, tent, power and backstage workflow."],
      ["Logistics and setup", "Equipment, crew, vehicles, access hours and installation sequence are coordinated with the venue or local agency."],
      ["Event-day operation", "The technical team remains on site for sound checks, screen control, stage transitions and operational support."],
      ["Dismantling and handover", "After the event, dismantling, load-out and site handover are completed with the same technical responsibility."],
    ],
    faqHeading: {
      eyebrow: "Questions",
      title: "FAQ for international event teams",
      text: "Short answers for agencies and brands evaluating a local technical production partner in Turkey.",
    },
    faq: [
      ["Do you provide event production services for international companies in Turkey?", "Yes. Sahneva works as a local event production partner for international companies, agencies and brands that need stage, LED screen, sound, lighting, truss, tent and technical crew support in Turkey."],
      ["Can Sahneva support European event agencies in Turkey?", "Yes. We can support European agencies with English communication, local logistics, technical production planning, setup, show-day operation and dismantling across major Turkish cities."],
      ["Which technical services do you provide?", "We provide stage, podium, LED screen, video wall, sound, lighting, truss, rigging, tent, player desk, backstage and technical crew services depending on the project scope."],
      ["Do you work in Istanbul, Antalya, Izmir, Ankara and Bodrum?", "Yes. These cities are frequent production locations for Sahneva, and logistics can be planned for other cities in Turkey when the project scope is clear."],
      ["Can you support sports and esports events?", "Yes. We can plan arena productions, esports stages, player desks, LED-heavy show stages, show lighting, sound systems and technical crew coordination."],
      ["Can we download your company profile?", "Yes. The Sahneva Company Profile PDF is available on this page as a downloadable portfolio and reference document."],
    ],
    final: {
      title: "Planning an international event in Turkey?",
      text:
        "Share your city, date, venue, guest count and technical expectations. We will return with a clear production scope for stage, LED screen, sound, lighting, truss, tent and crew support.",
      contact: "Send Event Details",
      contactHref: "/en/contact",
      whatsapp: "Write on WhatsApp",
    },
  },
  tr: {
    locale: "tr",
    htmlLang: "tr-TR",
    ogLocale: "tr_TR",
    path: commonPaths.tr,
    title: "Türkiye’de Etkinlik Çözüm Ortağı | Uluslararası Firmalar İçin Sahneva",
    description:
      "Sahneva, Avrupa’dan ve yurt dışından gelen firmalar için Türkiye’de sahne, LED ekran, ses, ışık, truss, çadır ve teknik etkinlik prodüksiyonu çözümleri sunar.",
    eyebrow: "Türkiye'de yerel etkinlik prodüksiyon ortağı",
    h1: "Türkiye’de Etkinlik Yapacak Uluslararası Firmalar İçin Yerel Çözüm Ortağı",
    intro:
      "Sahneva; Türkiye'de etkinlik planlayan uluslararası şirketler, Avrupa etkinlik ajansları ve global markalar için sahne, LED ekran, ses, ışık, truss, çadır ve teknik prodüksiyon çözümleri sunar. İstanbul, Antalya, İzmir, Ankara ve Bodrum başta olmak üzere yerel prodüksiyon kapsamını, lojistiği, kurulumu, etkinlik günü operasyonunu ve sökümü tek teknik ekipten planlarız.",
    primaryCta: "WhatsApp'tan Teklif Al",
    secondaryCta: "Ekiple İletişime Geç",
    pdfCta: "Şirket Profilini İndir",
    pdfAria: "Sahneva şirket profili PDF dosyasını indir",
    productionScope: "Prodüksiyon kapsamı",
    scopeItems: ["Sahne", "LED ekran", "Ses", "Işık", "Truss", "Çadır"],
    statValue: "700+ proje",
    statText: "Planlama, kurulum, etkinlik günü operasyonu ve söküm için tek teknik sorumluluk.",
    heroPdfText: "Şirket profili ve seçilmiş referanslar",
    why: {
      eyebrow: "Neden yerel ortak?",
      title: "Uluslararası etkinliklerde teknik kontrol sahada başlar",
      text:
        "Yurt dışından gelen bir marka veya ajans için ihtiyaç yalnızca ekipman kiralama değildir. Mekan erişimi, şehir lojistiği, enerji dağılımı, kurulum saatleri, teknik ekip koordinasyonu ve etkinlik günü prodüksiyon akışı birlikte yönetilmelidir.",
      cards: [
        ["Mekan ve şehir bilgisi", "Yükleme alanı, trafik, giriş saatleri ve yerel operasyon alışkanlıkları planın parçası olur."],
        ["Tek teknik sorumluluk", "Sahne, LED ekran, ses, ışık, truss ve çadır ekipleri tek prodüksiyon kapsamı altında koordine edilir."],
        ["Uluslararası iletişim", "Brief, teknik plan, teklif ve saha güncellemeleri İngilizce yürütülebilir."],
      ],
    },
    servicesHeading: {
      eyebrow: "Anahtar teslim teknik prodüksiyon",
      title: "Sahne, LED ekran, ses, ışık, truss ve çadır desteği",
      text:
        "Prodüksiyon kapsamı; ajans brief'ine, marka beklentisine ve mekan koşullarına göre tüm etkinlik altyapısı veya seçili teknik hizmetler olarak planlanabilir.",
    },
    services: [
      { title: "Sahne ve podyum sistemleri", text: "Ana sahne, modüler podyum, protokol platformu ve performans alanları; mekan erişimi, yük ve izleyici akışına göre planlanır.", href: "/sahne-kiralama" },
      { title: "LED ekran ve video wall", text: "İç mekan LED, dış mekan LED, LED wall ve video wall kurulumları görüntü işlemcisi, içerik akışı ve operatör desteğiyle hazırlanır.", href: "/led-ekran-kiralama" },
      { title: "Ses, ışık ve teknik reji", text: "Line array ses, sahne ışığı, mikrofon, kontrol masası ve etkinlik günü teknik ekip desteği tek prodüksiyon planında toplanır.", href: "/ses-isik-sistemleri" },
      { title: "Truss ve rigging sistemleri", text: "LED, ışık, banner ve sahne mimarisi için truss, scaffold destek, rigging noktaları ve taşıyıcı sistemler planlanır.", href: "/truss-kiralama" },
      { title: "Etkinlik çadırları ve kapalı alanlar", text: "Pagoda çadır, şeffaf çadır ve büyük açıklıklı çadır sistemleri fuar, festival, ağırlama ve backstage alanları için kurgulanır.", href: "/cadir-kiralama" },
      { title: "Kurumsal etkinlik prodüksiyonu", text: "Konferans, lansman, gala ve marka deneyimi projelerinde teknik planlama, ekip koordinasyonu ve akış desteği sağlanır.", href: "/kurumsal-organizasyon" },
    ],
    market: {
      eyebrow: "Şehirler ve etkinlik türleri",
      title: "Türkiye'de etkinlik yapacak firmalar için yerel saha gücü",
      text:
        "Sahneva; kurumsal etkinlik, lansman, fuar, spor organizasyonu, e-spor turnuvası, arena prodüksiyonu, konser ve marka deneyimi projelerinde uluslararası planlama ekiplerine Türkiye tarafında etkinlik çözüm ortağı olur.",
    },
    cities: ["İstanbul", "Antalya", "İzmir", "Ankara", "Bodrum", "Türkiye geneli lojistik"],
    eventTypes: [
      "Kurumsal konferanslar",
      "Marka lansmanları",
      "Uluslararası kongreler",
      "Gala ve protokol etkinlikleri",
      "Spor etkinlikleri ve arena prodüksiyonları",
      "E-spor turnuvaları ve LED ağırlıklı show sahneleri",
      "Festival ve konserler",
      "Fuar ve sergi projeleri",
    ],
    esports: {
      eyebrow: "Spor ve e-spor prodüksiyonu",
      title: "Arena ölçeğinde sahne, LED ve show ışığı desteği",
      text:
        "Spor etkinlikleri ve e-spor turnuvaları için oyuncu masaları, LED ağırlıklı show sahneleri, seyirciye dönük ekranlar, show ışığı, ses sistemi, truss/scaffold taşıyıcılar ve teknik ekip koordinasyonu tek saha operasyonu olarak planlanabilir.",
    },
    profile: {
      eyebrow: "Şirket profili",
      title: "Sahneva Şirket Profilini İndirin",
      text:
        "Sahne, LED ekran, ses, ışık, truss, kurumsal etkinlik ve e-spor prodüksiyon referanslarımızı içeren şirket profilimizi inceleyebilirsiniz.",
    },
    processHeading: {
      eyebrow: "Çalışma akışı",
      title: "İlk brief'ten alan teslimine kadar",
      text:
        "Süreç, uluslararası ekiplerin Türkiye tarafındaki prodüksiyonu seyahat öncesinde, yükleme öncesinde ve etkinlik günü net şekilde görmesi için kurgulanır.",
    },
    process: [
      ["Brief ve kapsam", "Etkinlik tipi, tarih, şehir, mekan, kişi sayısı, sahne formatı, LED ekran ihtiyacı ve teknik beklentiler netleştirilir."],
      ["Teknik planlama", "Sahne, LED ekran, ses, ışık, truss, çadır, enerji ve backstage akışı için uygulanabilir bir saha planı oluşturulur."],
      ["Lojistik ve kurulum", "Ekipman, araç, teknik ekip, giriş saatleri ve kurulum sırası mekan veya ajans ekibiyle koordine edilir."],
      ["Etkinlik günü operasyon", "Teknik ekip; ses kontrolü, ekran akışı, sahne geçişleri ve operasyon desteği için sahada görev alır."],
      ["Söküm ve teslim", "Etkinlik sonrası söküm, yükleme ve alan teslimi aynı teknik sorumluluk içinde tamamlanır."],
    ],
    faqHeading: {
      eyebrow: "Sık sorulanlar",
      title: "Uluslararası etkinlik ekipleri için kısa cevaplar",
      text: "Türkiye'de yerel teknik prodüksiyon ortağı arayan markalar ve ajanslar için temel soruları netleştirdik.",
    },
    faq: [
      ["Sahneva Türkiye'de uluslararası firmalara etkinlik prodüksiyonu sağlar mı?", "Evet. Sahneva, Türkiye'de etkinlik planlayan uluslararası şirketler, ajanslar ve markalar için sahne, LED ekran, ses, ışık, truss, çadır ve teknik ekip desteğini yerel çözüm ortağı olarak planlar."],
      ["Avrupa'dan gelen etkinlik ajanslarına destek verir misiniz?", "Evet. Avrupa etkinlik ajansları için İngilizce iletişim, yerel lojistik, teknik prodüksiyon planı, kurulum, etkinlik günü operasyonu ve söküm süreçleri desteklenebilir."],
      ["Hangi teknik hizmetleri sağlıyorsunuz?", "Sahne, podyum, LED ekran, video wall, ses, ışık, truss, rigging, çadır, oyuncu masası, backstage ve teknik ekip hizmetleri proje kapsamına göre planlanır."],
      ["İstanbul, Antalya, İzmir, Ankara ve Bodrum'da çalışıyor musunuz?", "Evet. Bu şehirler Sahneva'nın sık çalıştığı üretim noktalarıdır. Proje kapsamı netleştiğinde Türkiye'nin farklı şehirleri için de lojistik planlama yapılabilir."],
      ["Spor ve e-spor etkinliklerinde destek verebilir misiniz?", "Evet. Arena prodüksiyonları, e-spor sahneleri, oyuncu masaları, LED ağırlıklı show sahneleri, show ışığı, ses sistemi ve teknik ekip koordinasyonu planlanabilir."],
      ["Şirket profilinizi indirebilir miyiz?", "Evet. Sahneva şirket profili PDF'i bu sayfada indirilebilir portfolyo ve referans dokümanı olarak sunulmuştur."],
    ],
    final: {
      title: "Türkiye'de uluslararası bir etkinlik mi planlıyorsunuz?",
      text:
        "Şehir, tarih, mekan, kişi sayısı ve teknik beklentilerinizi paylaşın. Sahne, LED ekran, ses, ışık, truss, çadır ve teknik ekip kapsamını net bir prodüksiyon planı olarak hazırlayalım.",
      contact: "Etkinlik Bilgisi Gönderin",
      contactHref: "/iletisim",
      whatsapp: "WhatsApp'tan Yazın",
    },
  },
};

INTERNATIONAL_EVENT_CONTENT.ar = {
  ...INTERNATIONAL_EVENT_CONTENT.en,
  locale: "ar",
  htmlLang: "ar",
  ogLocale: "ar_AR",
  path: commonPaths.ar,
  title: "شريك إنتاج فعاليات في تركيا للشركات الدولية | Sahneva",
  description:
    "توفر Sahneva حلول المسرح وشاشات LED والصوت والإضاءة والتراس والخيام والإنتاج التقني للفعاليات في تركيا للشركات والوكالات والعلامات الدولية.",
  eyebrow: "شريك إنتاج فعاليات محلي في تركيا",
  h1: "شريك إنتاج فعاليات في تركيا للشركات الدولية",
  intro:
    "تدعم Sahneva الشركات الدولية ووكالات الفعاليات الأوروبية والعلامات العالمية التي تخطط لفعاليات في تركيا من خلال حلول المسرح وشاشات LED والصوت والإضاءة والتراس والخيام والإنتاج التقني. من إسطنبول وأنطاليا إلى إزمير وأنقرة وبودروم، نخطط نطاق الإنتاج المحلي واللوجستيات والتركيب والتشغيل يوم الفعالية والفك من خلال فريق تقني واحد.",
  primaryCta: "اطلب عرضاً عبر واتساب",
  secondaryCta: "تواصل مع الفريق",
  pdfCta: "تحميل ملف الشركة",
  pdfAria: "تحميل ملف Sahneva التعريفي بصيغة PDF",
  productionScope: "نطاق الإنتاج",
  scopeItems: ["مسرح", "شاشة LED", "صوت", "إضاءة", "Truss", "خيام"],
  statText: "شريك تقني واحد للتخطيط والتركيب والتشغيل يوم الفعالية والفك.",
  heroPdfText: "ملف الشركة ومراجع مختارة",
  why: {
    eyebrow: "لماذا تحتاجون شريكاً محلياً؟",
    title: "الفعاليات الدولية تحتاج إلى تحكم تقني محلي",
    text:
      "بالنسبة إلى شركة أو وكالة تأتي إلى تركيا، لا يتعلق الأمر بتأجير المعدات فقط. الشريك المحلي الموثوق يفهم المواقع وساعات التحميل ولوجستيات المدن وتوزيع الطاقة وتنسيق الفريق وتدفق الإنتاج يوم الفعالية.",
    cards: [
      ["معرفة المواقع والمدن", "ندمج الوصول إلى الموقع ونقاط التحميل وحركة المدينة وعادات التشغيل المحلية في الخطة."],
      ["مسؤولية تقنية واحدة", "يتم تنسيق المسرح وشاشة LED والصوت والإضاءة والتراس والخيام ضمن نطاق إنتاج واحد."],
      ["تواصل دولي واضح", "يمكن إدارة brief والخطة التقنية والعرض وتحديثات الإنتاج باللغة الإنجليزية."],
    ],
  },
  servicesHeading: {
    eyebrow: "إنتاج تقني متكامل",
    title: "دعم المسرح وشاشات LED والصوت والإضاءة والتراس والخيام",
    text:
      "يمكن تشكيل نطاق الإنتاج كبنية فعالية كاملة أو كأقسام تقنية مختارة وفق brief الوكالة وتوقعات العلامة وظروف الموقع.",
  },
  services: [
    { title: "أنظمة المسرح والبوديوم", text: "مسرح رئيسي وبوديوم ومنصات بروتوكول ومساحات أداء حسب الوصول إلى الموقع والحمل وتدفق الجمهور.", href: "/ar/services" },
    { title: "شاشات LED وVideo Wall", text: "حلول LED داخلية وخارجية وLED wall وvideo wall مع معالج صورة وتوجيه محتوى ودعم مشغل تقني.", href: "/ar/services" },
    { title: "الصوت والإضاءة والتحكم", text: "Line array وإضاءة مسرح وطاولة تحكم وميكروفونات وفريق تقني ضمن خطة إنتاج واحدة.", href: "/ar/services" },
    { title: "Truss وRigging", text: "هياكل truss وscaffold ونقاط rigging وحوامل لشاشات LED والإضاءة واللافتات ومعمارية المسرح.", href: "/ar/services" },
    { title: "خيام الفعاليات والمناطق المغطاة", text: "خيام pagoda وخيام شفافة وأنظمة خيام كبيرة للمعارض والمهرجانات ومناطق الضيافة والـ backstage.", href: "/ar/services" },
    { title: "إنتاج الفعاليات المؤسسية", text: "إنتاج المؤتمرات والإطلاقات والجالا وتجارب العلامة مع تخطيط تقني وتنسيق فريق ودعم run-of-show.", href: "/ar/services" },
  ],
  market: {
    eyebrow: "المدن وأنواع الفعاليات",
    title: "مصمم للشركات التي تخطط لفعاليات في تركيا",
    text:
      "تدعم Sahneva الفعاليات المؤسسية، إطلاقات العلامات، المعارض، الفعاليات الرياضية، بطولات الرياضات الإلكترونية، إنتاجات arena، الحفلات وتجارب العلامات حيث يحتاج التخطيط الدولي إلى شريك فعاليات موثوق في تركيا.",
  },
  cities: ["إسطنبول", "أنطاليا", "إزمير", "أنقرة", "بودروم", "لوجستيات في عموم تركيا"],
  eventTypes: [
    "مؤتمرات مؤسسية",
    "إطلاقات العلامات",
    "مؤتمرات دولية",
    "فعاليات gala وبروتوكول",
    "فعاليات رياضية وإنتاجات arena",
    "بطولات e-sports ومراحل LED مكثفة",
    "مهرجانات وحفلات",
    "معارض وتجارب تجارية",
  ],
  esports: {
    eyebrow: "إنتاج الرياضة والرياضات الإلكترونية",
    title: "دعم مسرح وLED وإضاءة show بمستوى arena",
    text:
      "للفعاليات الرياضية وبطولات e-sports، يمكننا تخطيط طاولات اللاعبين، مراحل show تعتمد على LED، شاشات للجمهور، إضاءة show، أنظمة صوت، هياكل truss/scaffold وتنسيق الفريق التقني كعملية ميدانية واحدة.",
  },
  profile: {
    eyebrow: "ملف الشركة",
    title: "تحميل ملف Sahneva التعريفي",
    text:
      "استعرضوا ملف الشركة الذي يتضمن مراجع مختارة في المسرح وشاشات LED والصوت والإضاءة والتراس والفعاليات المؤسسية وإنتاجات e-sports.",
  },
  processHeading: {
    eyebrow: "طريقة العمل",
    title: "من أول brief إلى تسليم الموقع",
    text:
      "تم تصميم سير العمل لجعل إنتاج تركيا واضحاً للفرق الدولية قبل السفر وقبل تحميل المعدات وقبل بدء يوم الفعالية.",
  },
  process: [
    ["Brief والنطاق", "نوضح نوع الفعالية والتاريخ والمدينة والموقع وعدد الحضور واحتياج الشاشة وشكل المسرح والتوقعات التقنية."],
    ["التخطيط التقني", "نعد خطة إنتاج للمسرح وشاشة LED والصوت والإضاءة والتراس والخيام والطاقة وتدفق backstage."],
    ["اللوجستيات والتركيب", "يتم تنسيق المعدات والفريق والمركبات وساعات الدخول وتسلسل التركيب مع الموقع أو الوكالة المحلية."],
    ["تشغيل يوم الفعالية", "يبقى الفريق التقني في الموقع لاختبارات الصوت والتحكم بالشاشات وانتقالات المسرح والدعم التشغيلي."],
    ["الفك والتسليم", "بعد الفعالية يتم الفك والتحميل وتسليم الموقع ضمن نفس المسؤولية التقنية."],
  ],
  faqHeading: {
    eyebrow: "أسئلة شائعة",
    title: "إجابات قصيرة للفرق الدولية",
    text: "إجابات للوكالات والعلامات التي تبحث عن شريك إنتاج تقني محلي في تركيا.",
  },
  faq: [
    ["هل تقدمون خدمات إنتاج فعاليات للشركات الدولية في تركيا؟", "نعم. تعمل Sahneva كشريك إنتاج فعاليات محلي للشركات والوكالات والعلامات الدولية التي تحتاج إلى المسرح وشاشات LED والصوت والإضاءة والتراس والخيام والفريق التقني في تركيا."],
    ["هل يمكنكم دعم وكالات الفعاليات الأوروبية في تركيا؟", "نعم. يمكننا دعم الوكالات الأوروبية بالتواصل باللغة الإنجليزية واللوجستيات المحلية والتخطيط التقني والتركيب والتشغيل يوم الفعالية والفك في المدن التركية الرئيسية."],
    ["ما الخدمات التقنية التي تقدمونها؟", "نقدم المسرح والبوديوم وشاشات LED وvideo wall والصوت والإضاءة والتراس والـ rigging والخيام وطاولات اللاعبين والـ backstage والفريق التقني حسب نطاق المشروع."],
    ["هل تعملون في إسطنبول وأنطاليا وإزمير وأنقرة وبودروم؟", "نعم. هذه المدن من مواقع الإنتاج المتكررة لدينا، ويمكن تخطيط اللوجستيات لمدن أخرى في تركيا عندما يكون نطاق المشروع واضحاً."],
    ["هل تدعمون الفعاليات الرياضية وفعاليات e-sports؟", "نعم. يمكننا تخطيط إنتاجات arena ومراحل e-sports وطاولات اللاعبين ومراحل LED المكثفة وإضاءة show وأنظمة الصوت وتنسيق الفريق التقني."],
    ["هل يمكن تحميل ملف الشركة؟", "نعم. ملف Sahneva التعريفي متاح في هذه الصفحة كوثيقة قابلة للتحميل للمراجع والملف التعريفي."],
  ],
  final: {
    title: "هل تخططون لفعالية دولية في تركيا؟",
    text:
      "شاركونا المدينة والتاريخ والموقع وعدد الضيوف والتوقعات التقنية. سنعود إليكم بنطاق إنتاج واضح للمسرح وشاشة LED والصوت والإضاءة والتراس والخيام والفريق التقني.",
    contact: "إرسال تفاصيل الفعالية",
    contactHref: "/ar/contact",
    whatsapp: "اكتبوا على واتساب",
  },
};

INTERNATIONAL_EVENT_CONTENT.ru = {
  ...INTERNATIONAL_EVENT_CONTENT.en,
  locale: "ru",
  htmlLang: "ru",
  ogLocale: "ru_RU",
  path: commonPaths.ru,
  title: "Партнер по event production в Турции для международных компаний | Sahneva",
  description:
    "Sahneva предоставляет сцену, LED-экраны, звук, свет, truss, шатры и технический event production в Турции для компаний, агентств и брендов.",
  eyebrow: "Локальный event production партнер в Турции",
  h1: "Партнер по event production в Турции для международных компаний",
  intro:
    "Sahneva помогает международным компаниям, европейским event-агентствам и глобальным брендам, которые планируют мероприятия в Турции. Мы объединяем сцену, LED-экраны, звук, свет, truss, шатры и техническую команду в один production scope. В Стамбуле, Анталье, Измире, Анкаре, Бодруме и других городах мы планируем локальную логистику, монтаж, работу во время события и демонтаж.",
  primaryCta: "Запросить расчет в WhatsApp",
  secondaryCta: "Связаться с командой",
  pdfCta: "Скачать Company Profile",
  pdfAria: "Download Sahneva Company Profile PDF",
  productionScope: "Production scope",
  scopeItems: ["Сцена", "LED-экран", "Звук", "Свет", "Truss", "Шатры"],
  statText: "Один технический партнер для планирования, монтажа, event-day operation и демонтажа.",
  heroPdfText: "Company profile и выбранные референсы",
  why: {
    eyebrow: "Почему нужен локальный партнер",
    title: "Международным событиям в Турции нужен локальный технический контроль",
    text:
      "Для бренда или агентства, приезжающего в Турцию, задача не ограничивается арендой оборудования. Надежный локальный партнер понимает площадки, часы загрузки, городскую логистику, питание, координацию команды и production flow в день мероприятия.",
    cards: [
      ["Знание площадок и городов", "Доступ к площадке, зоны загрузки, трафик и локальные операционные детали включаются в план."],
      ["Одна техническая ответственность", "Сцена, LED-экран, звук, свет, truss и шатры координируются как единый production scope."],
      ["Международная коммуникация", "Brief, технический план, предложение и updates по production можно вести на английском языке."],
    ],
  },
  servicesHeading: {
    eyebrow: "Turnkey technical production",
    title: "Сцена, LED-экран, звук, свет, truss и шатры",
    text:
      "Production scope может быть полным техническим пакетом или отдельными техническими направлениями в зависимости от брифа агентства, ожиданий бренда и условий площадки.",
  },
  services: [
    { title: "Сцена и подиум", text: "Main stage, модульный подиум, protocol platforms и performance areas планируются по доступу к площадке, нагрузке и потоку аудитории.", href: "/ru/stage-rental" },
    { title: "LED-экраны и video wall", text: "Indoor LED, outdoor LED, LED wall и video wall с видеопроцессором, маршрутизацией контента и техническим оператором.", href: "/ru/led-screen-rental" },
    { title: "Звук, свет и show control", text: "Line array звук, сценический свет, control desk, микрофоны и техническая команда в одном production plan.", href: "/ru/sound-light-rental" },
    { title: "Truss и rigging systems", text: "Truss, scaffold support, rigging points и несущие системы для LED, света, баннеров и сценической архитектуры.", href: "/ru/stage-rental" },
    { title: "Шатры и covered areas", text: "Pagoda, прозрачные шатры и большие шатровые системы для выставок, фестивалей, hospitality и backstage zones.", href: "/ru/tent-rental" },
    { title: "Corporate event production", text: "Конференции, launches, gala и brand experience с техническим планом, crew coordination и run-of-show support.", href: "/ru/corporate-events" },
  ],
  market: {
    eyebrow: "Города и форматы",
    title: "Для компаний, которые планируют мероприятия в Турции",
    text:
      "Sahneva поддерживает корпоративные события, launches, выставки, sports events, esports tournaments, arena productions, концерты и brand experiences, где международной команде нужен надежный Turkey event partner.",
  },
  cities: ["Стамбул", "Анталья", "Измир", "Анкара", "Бодрум", "Логистика по Турции"],
  eventTypes: [
    "Корпоративные конференции",
    "Запуски брендов",
    "Международные конгрессы",
    "Gala и protocol events",
    "Sports events и arena productions",
    "Esports tournaments и LED-heavy show stages",
    "Фестивали и концерты",
    "Выставки и trade fairs",
  ],
  esports: {
    eyebrow: "Sports и esports production",
    title: "Arena-ready stage, LED и show lighting support",
    text:
      "Для sports events и esports tournaments мы можем планировать player desks, LED-heavy show stages, audience screens, show lighting, sound systems, truss/scaffold structures и техническую команду как одну полевую операцию.",
  },
  profile: {
    eyebrow: "Company profile",
    title: "Скачать Sahneva Company Profile",
    text:
      "Посмотрите company profile с выбранными референсами stage, LED screen, sound, lighting, truss, corporate event и esports production.",
  },
  processHeading: {
    eyebrow: "Как мы работаем",
    title: "От первого brief до сдачи площадки",
    text:
      "Workflow помогает международным командам заранее понимать Turkey-side production: до поездки, до загрузки оборудования и до event day.",
  },
  process: [
    ["Brief и scope", "Уточняем тип события, дату, город, площадку, количество гостей, LED needs, формат сцены и технические ожидания."],
    ["Technical planning", "Готовим production plan для сцены, LED-экрана, звука, света, truss, шатров, питания и backstage workflow."],
    ["Logistics и setup", "Оборудование, команда, транспорт, access hours и монтажная последовательность координируются с площадкой или агентством."],
    ["Event-day operation", "Техническая команда остается на площадке для sound check, screen control, stage transitions и operational support."],
    ["Dismantling и handover", "После события демонтаж, load-out и сдача площадки выполняются в той же зоне технической ответственности."],
  ],
  faqHeading: {
    eyebrow: "Вопросы",
    title: "FAQ для международных event-команд",
    text: "Короткие ответы для агентств и брендов, которые ищут local technical production partner in Turkey.",
  },
  faq: [
    ["Вы предоставляете event production для международных компаний в Турции?", "Да. Sahneva работает как local event production partner для компаний, агентств и брендов, которым нужны сцена, LED-экран, звук, свет, truss, шатры и техническая команда в Турции."],
    ["Может ли Sahneva поддержать европейские event-агентства в Турции?", "Да. Мы можем поддержать европейские агентства через английскую коммуникацию, локальную логистику, technical production planning, setup, show-day operation и демонтаж в ключевых городах Турции."],
    ["Какие технические услуги вы предоставляете?", "Мы предоставляем stage, podium, LED screen, video wall, sound, lighting, truss, rigging, tent, player desk, backstage и technical crew services по scope проекта."],
    ["Работаете ли вы в Стамбуле, Анталье, Измире, Анкаре и Бодруме?", "Да. Это частые production locations для Sahneva. Для других городов Турции логистика планируется после уточнения scope."],
    ["Можете поддержать sports и esports events?", "Да. Мы можем планировать arena productions, esports stages, player desks, LED-heavy show stages, show lighting, sound systems и technical crew coordination."],
    ["Можно скачать company profile?", "Да. Sahneva Company Profile PDF доступен на этой странице как downloadable portfolio and reference document."],
  ],
  final: {
    title: "Планируете международное событие в Турции?",
    text:
      "Отправьте город, дату, площадку, количество гостей и технические ожидания. Мы подготовим понятный production scope для сцены, LED screen, sound, lighting, truss, tent и crew support.",
    contact: "Отправить детали события",
    contactHref: "/ru/contact",
    whatsapp: "Написать в WhatsApp",
  },
};

export function getInternationalEventContent(locale) {
  return INTERNATIONAL_EVENT_CONTENT[locale] ?? INTERNATIONAL_EVENT_CONTENT.en;
}

export function buildInternationalEventMetadata(locale) {
  const content = getInternationalEventContent(locale);

  return {
    title: { absolute: content.title },
    description: content.description,
    alternates: buildLanguageAlternates({
      tr: commonPaths.tr,
      en: commonPaths.en,
      ar: commonPaths.ar,
      ru: commonPaths.ru,
      canonical: content.path,
      xDefault: commonPaths.en,
    }),
    openGraph: {
      title:
        locale === "tr"
          ? "Türkiye’de Etkinlik Çözüm Ortağı | Sahneva"
          : locale === "en"
            ? "Event Production Partner in Turkey | Sahneva"
            : content.title,
      description: content.description,
      url: `${SITE_URL}${content.path}`,
      type: "website",
      siteName: "Sahneva",
      locale: content.ogLocale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function buildInternationalEventJsonLd(locale) {
  const content = getInternationalEventContent(locale);
  const pageUrl = `${SITE_URL}${content.path}`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const serviceId = `${pageUrl}#service`;
  const faqId = `${pageUrl}#faq`;

  const homeName = locale === "tr" ? "Anasayfa" : locale === "ar" ? "الرئيسية" : locale === "ru" ? "Главная" : "Home";
  const servicesName = locale === "tr" ? "Hizmetler" : locale === "ar" ? "الخدمات" : locale === "ru" ? "Услуги" : "Services";
  const servicesPath = locale === "tr" ? "/hizmetler" : `/${locale}/services`;
  const homePath = locale === "tr" ? "/" : `/${locale}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: content.title,
        description: content.description,
        inLanguage: content.htmlLang,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: { "@id": serviceId },
        hasPart: [{ "@id": faqId }],
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: homeName, item: `${SITE_URL}${homePath === "/" ? "" : homePath}` },
          { "@type": "ListItem", position: 2, name: servicesName, item: `${SITE_URL}${servicesPath}` },
          { "@type": "ListItem", position: 3, name: content.h1, item: pageUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: content.h1,
        serviceType: "Technical event production",
        provider: { "@id": ORGANIZATION_ID },
        areaServed: [
          { "@type": "Country", name: "Turkey" },
          { "@type": "City", name: "Istanbul" },
          { "@type": "City", name: "Antalya" },
          { "@type": "City", name: "Izmir" },
          { "@type": "City", name: "Ankara" },
          { "@type": "City", name: "Bodrum" },
        ],
        audience: {
          "@type": "Audience",
          audienceType: "International companies, event agencies and brands planning events in Turkey",
        },
        description: content.description,
        image: ogImage,
        subjectOf: {
          "@type": "DigitalDocument",
          name: "Sahneva Company Profile",
          encodingFormat: "application/pdf",
          url: COMPANY_PROFILE_PDF_ABSOLUTE_URL,
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "TRY",
          url: pageUrl,
          description: "Project-based event production quote for international events in Turkey.",
        },
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        inLanguage: content.htmlLang,
        mainEntity: content.faq.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };
}

export function getInternationalEventWhatsappUrl(locale) {
  const phone = "905453048671";
  const text =
    locale === "tr"
      ? "Merhaba, Türkiye'de planlanan uluslararası bir etkinlik için teknik prodüksiyon desteği almak istiyoruz."
      : locale === "ar"
        ? "مرحبا، نخطط لفعالية دولية في تركيا ونحتاج إلى دعم إنتاج تقني."
        : locale === "ru"
          ? "Здравствуйте, мы планируем международное мероприятие в Турции и хотим получить поддержку technical production."
          : "Hello, we are planning an international event in Turkey and would like technical production support.";

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export const INTERNATIONAL_EVENT_HERO_IMAGE = heroImage;

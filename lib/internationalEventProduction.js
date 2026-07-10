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

const serviceLinks = {
  en: ["/en/stage-rental", "/en/led-screen-rental", "/en/sound-light-rental", "/en/truss-rental", "/en/tent-rental", "/en/corporate-events"],
  tr: ["/sahne-kiralama", "/led-ekran-kiralama", "/ses-isik-sistemleri", "/truss-kiralama", "/cadir-kiralama", "/kurumsal-organizasyon"],
  ar: ["/ar/services", "/ar/services", "/ar/services", "/ar/services", "/ar/services", "/ar/services"],
  ru: ["/ru/stage-rental", "/ru/led-screen-rental", "/ru/sound-light-rental", "/ru/stage-rental", "/ru/tent-rental", "/ru/corporate-events"],
};

const serviceText = {
  en: [
    ["Stage and podium systems", "Main stage, modular podium, protocol platforms and performance areas planned around venue access, load and audience flow."],
    ["LED screen and video wall", "Indoor LED, outdoor LED, LED wall and video wall setups with image processor, content routing and technical operator support."],
    ["Sound, lighting and technical control", "Line array sound, stage lighting, control desk, microphones and event-day technical crew under one production plan."],
    ["Truss and rigging systems", "Truss structures, scaffold support, rigging points and carrier systems for LED, lighting, banners and stage architecture."],
    ["Event tents and covered areas", "Pagoda tents, transparent tents and large-span tent systems for exhibitions, festivals, hospitality and backstage areas."],
    ["Corporate event production", "Conference, launch, gala and brand experience production with technical planning, crew coordination and event flow support."],
  ],
  tr: [
    ["Sahne ve podyum sistemleri", "Ana sahne, modüler podyum, protokol platformu ve performans alanları; mekan erişimi, yük ve izleyici akışına göre planlanır."],
    ["LED ekran ve video wall", "İç mekan LED, dış mekan LED, LED wall ve video wall kurulumları görüntü işlemcisi, içerik akışı ve operatör desteğiyle hazırlanır."],
    ["Ses, ışık ve teknik reji", "Line array ses, sahne ışığı, mikrofon, kontrol masası ve etkinlik günü teknik ekip desteği tek prodüksiyon planında toplanır."],
    ["Truss ve taşıyıcı sistemler", "LED, ışık, banner ve sahne mimarisi için truss, iskele destek, askı noktaları ve taşıyıcı sistemler planlanır."],
    ["Etkinlik çadırları ve kapalı alanlar", "Pagoda çadır, şeffaf çadır ve büyük açıklıklı çadır sistemleri fuar, festival, ağırlama ve kulis alanları için kurgulanır."],
    ["Kurumsal etkinlik prodüksiyonu", "Konferans, lansman, gala ve marka deneyimi projelerinde teknik planlama, ekip koordinasyonu ve akış desteği sağlanır."],
  ],
  ar: [
    ["أنظمة المسرح والبوديوم", "مسرح رئيسي، بوديوم، منصات بروتوكول ومساحات أداء يتم تخطيطها وفق الوصول إلى الموقع، الحمولة وحركة الجمهور."],
    ["شاشات LED وجدران العرض", "شاشات داخلية وخارجية وجدران عرض LED مع معالجة الصورة، توجيه المحتوى ودعم مشغل تقني في الموقع."],
    ["الصوت والإضاءة والتحكم التقني", "أنظمة صوت، إضاءة مسرح، ميكروفونات، طاولة تحكم وفريق تقني ضمن خطة تنفيذ واحدة."],
    ["هياكل التعليق والحمل", "هياكل تعليق وحوامل للمسرح والشاشات والإضاءة واللافتات مع مراعاة سلامة التركيب."],
    ["خيام الفعاليات والمناطق المغطاة", "خيام باغودا، خيام شفافة وخيام كبيرة للمعارض والمهرجانات ومناطق الضيافة وخلف المسرح."],
    ["إنتاج الفعاليات المؤسسية", "تنفيذ المؤتمرات، الإطلاقات، حفلات الجالا وتجارب العلامة التجارية مع تخطيط تقني وتنسيق فريق واضح."],
  ],
  ru: [
    ["Сцена и подиум", "Основная сцена, модульный подиум, протокольные платформы и зоны выступлений планируются с учетом доступа, нагрузки и потока гостей."],
    ["LED-экраны и видеостены", "Внутренние и наружные LED-экраны, LED wall и видеостены с видеопроцессором, маршрутизацией контента и техническим оператором."],
    ["Звук, свет и технический контроль", "Звуковые системы, сценический свет, микрофоны, пульт управления и техническая команда в едином плане работ."],
    ["Ферменные и подвесные системы", "Несущие конструкции, точки подвеса и опорные системы для LED, света, баннеров и сценической архитектуры."],
    ["Шатры и крытые зоны", "Пагода, прозрачные шатры и большие шатровые системы для выставок, фестивалей, зон приема гостей и закулисных зон."],
    ["Корпоративные мероприятия", "Конференции, запуски брендов, гала и брендовые события с техническим планом, координацией команды и поддержкой сценария."],
  ],
};

const services = Object.fromEntries(
  Object.entries(serviceText).map(([locale, items]) => [
    locale,
    items.map(([title, text], index) => ({ title, text, href: serviceLinks[locale][index] })),
  ]),
);

const sharedImages = {
  hero: heroImage,
};

const content = {
  en: {
    locale: "en",
    htmlLang: "en-US",
    ogLocale: "en_US",
    path: commonPaths.en,
    title: "Event Production Company in Turkey | Sahneva",
    description: "Stage, LED screen, sound, lighting, truss and tent production in Turkey for international companies, agencies and brands.",
    eyebrow: "Local event production partner in Turkey",
    h1: "Your Local Event Production Partner in Turkey",
    intro: "Sahneva supports international companies, European event agencies and global brands planning events in Turkey with stage, LED screen, sound, lighting, truss, tent and technical production solutions. As an event production company in Turkey working with a partner mindset, we plan the local production scope, logistics, installation, event-day operation and dismantling with one technical team.",
    heroTrust:
      "Your trusted technical production partner in Türkiye. We help international brands manage local venues, logistics, access hours and technical production requirements with one experienced field team.",
    heroTrustBadge: "English-Speaking Project Managers & On-Site Coordination",
    primaryCta: "Request a WhatsApp Quote",
    secondaryCta: "Contact the Team",
    pdfCta: "Download Company Profile",
    pdfAria: "Download Sahneva Company Profile PDF",
    productionScope: "Technical production scope",
    scopeItems: ["Stage", "LED screen", "Sound", "Lighting", "Truss", "Tent"],
    statValue: "Hundreds of completed event projects",
    statText: "One technical partner for planning, installation, event-day operation and dismantling.",
    heroPdfText: "Company profile and selected references",
    seoSupport:
      "For teams comparing an event production partner Turkey option, AV rental companies Istanbul, AV rental companies Antalya, stage and lighting rental Turkey, audio visual rental Turkey or technical production partner Turkey support, Sahneva brings the key technical departments into one clear local production scope.",
    trust: {
      title: "What international event teams worry about — and how we solve it",
      cards: [
        ["English-speaking project coordination", "Technical briefing, quote preparation, setup updates and event-day coordination can be managed in English."],
        ["Single point of contact", "Stage, LED screen, sound, lighting, truss, tent, crew, logistics and dismantling are coordinated under one technical production scope."],
        ["Local venue and logistics knowledge", "Venue access, hotel ballrooms, exhibition halls, loading hours, city traffic, power planning and local supplier coordination are considered before setup."],
      ],
    },
    why: {
      eyebrow: "Why a local partner matters",
      title: "International event plans need local technical control",
      text: "For a brand or agency coming to Turkey, the challenge is not only equipment rental. A dependable local partner understands venues, loading hours, city logistics, power distribution, crew coordination and event-day production flow.",
      cards: [
        ["Venue and city knowledge", "Venue access, loading points, city traffic and local operation habits are included in the planning."],
        ["One technical responsibility", "Stage, LED screen, sound, lighting, truss and tent teams are coordinated under one production scope."],
        ["International communication", "Briefing, technical planning, quote preparation and production updates can be managed in English."],
      ],
    },
    servicesHeading: {
      eyebrow: "Turnkey technical production",
      title: "Stage, LED screen, sound, lighting, truss and tent support",
      text: "The production scope can be shaped as complete event infrastructure or selected technical departments for teams looking for stage and lighting rental Turkey, LED wall, truss, tent and audio visual rental Turkey support.",
    },
    services: services.en,
    market: {
      eyebrow: "Cities and event formats",
      title: "Built for companies planning events in Turkey",
      text: "Sahneva supports corporate events, launches, trade fairs, sports events, esports tournaments, arena productions, concerts and brand experiences where international planning needs a dependable Turkey event partner.",
    },
    destination: {
      title: "Local production knowledge across Turkey’s key event destinations",
      text: "We support events in Istanbul’s historic venues and business hotels, Antalya’s congress hotels and resort venues, Izmir’s fair and exhibition areas, Ankara’s protocol event spaces, Bodrum’s open-air brand experiences and Cappadocia destination events and outdoor brand experiences. For international teams, this local familiarity helps reduce setup risk and makes the technical process easier to manage.",
    },
    equipment: {
      title: "International-standard AV, sound, lighting and video systems",
      text: "Depending on project scope, Sahneva can work with professional sound, lighting, video, LED processing and control system equipment suitable for corporate events, arena productions, trade fairs and outdoor brand experiences.",
    },
    cities: ["Istanbul", "Antalya", "Izmir", "Ankara", "Bodrum", "Turkey-wide logistics"],
    eventTypes: ["Corporate conferences", "Brand launches", "International congresses", "Gala and protocol events", "Sports events and arena productions", "Esports tournaments and LED-heavy show stages", "Festivals and concerts", "Exhibitions and trade fairs"],
    esports: {
      eyebrow: "Sports and esports production",
      title: "Arena-ready stage, LED and lighting support",
      text: "For sports events and esports tournaments, we can plan player desks, LED-heavy show stages, audience-facing screens, stage lighting, sound systems, truss structures and technical crew coordination as one field operation.",
    },
    profile: {
      eyebrow: "Company profile",
      title: "Download Sahneva Company Profile",
      text: "Review our company profile with selected stage, LED screen, sound, lighting, truss, corporate event and esports production references.",
    },
    processHeading: {
      eyebrow: "How we work",
      title: "From first brief to site handover",
      text: "The workflow is designed to make Turkey-side production clear for international teams before they travel, before equipment is loaded and before the event day begins.",
    },
    process: [
      ["Brief and scope", "We clarify event type, date, city, venue, audience size, screen needs, stage format and technical expectations."],
      ["Technical planning", "A production plan is prepared for stage, LED screen, sound, lighting, truss, tent, power and backstage workflow."],
      ["Logistics and installation", "Equipment, crew, vehicles, access hours and installation sequence are coordinated with the venue or local agency."],
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
      ["Can Sahneva support European event agencies in Turkey?", "Yes. We can support European agencies with English communication, local logistics, technical production planning, installation, event-day operation and dismantling across major Turkish cities."],
      ["Can you coordinate directly with our international technical director?", "Yes. Our project coordination can align with your international technical director from the first briefing to technical planning, setup updates, rehearsal and event-day operation."],
      ["Do you have experience working in major hotels and convention centers in Turkey?", "Yes. Sahneva can plan technical production for business hotels, congress hotels, exhibition halls, historic venues and outdoor event areas in Istanbul, Antalya, Izmir, Ankara, Bodrum and other Turkish destinations."],
      ["Which technical services do you provide?", "We provide stage, podium, LED screen, video wall, sound, lighting, truss, rigging, tent, player desk, backstage and technical crew services depending on the project scope."],
      ["Do you work in Istanbul, Antalya, Izmir, Ankara and Bodrum?", "Yes. These cities are frequent production locations for Sahneva, and logistics can be planned for other cities in Turkey when the project scope is clear."],
      ["Can you support sports and esports events?", "Yes. We can plan arena productions, esports stages, player desks, LED-heavy show stages, stage lighting, sound systems and technical crew coordination."],
      ["Do you provide AV rental in Istanbul and Antalya?", "Yes. Sahneva can support AV rental and technical production needs in Istanbul, Antalya and other Turkish event destinations, including LED screens, sound, lighting, stage, truss and technical crew."],
      ["Can we manage the whole technical production through one contact?", "Yes. Sahneva can act as a single point of contact for stage, LED screen, sound, lighting, truss, tent, logistics, setup, event-day operation and dismantling."],
      ["Can your team communicate in English on site?", "Yes. Technical briefing, offer preparation, setup updates and event-day coordination can be managed in English for international teams."],
      ["Can we download your company profile?", "Yes. The Sahneva Company Profile PDF is available on this page as a downloadable portfolio and reference document."],
    ],
    final: {
      title: "Planning an international event in Turkey?",
      text: "Share your city, date, venue, guest count and technical expectations. We will return with a clear production scope for stage, LED screen, sound, lighting, truss, tent and crew support.",
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
    title: "Türkiye’de Etkinlik Çözüm Ortağı | Sahneva",
    description: "Sahneva, Avrupa’dan ve yurt dışından gelen firmalar için Türkiye’de sahne, LED ekran, ses, ışık, truss, çadır ve teknik etkinlik prodüksiyonu çözümleri sunar.",
    eyebrow: "Türkiye’de yerel teknik çözüm ortağı",
    h1: "Türkiye’de Etkinlik Yapacak Uluslararası Firmalar İçin Yerel Çözüm Ortağı",
    intro: "Sahneva, Avrupa’dan ve yurt dışından Türkiye’ye gelen firmalar, ajanslar ve global markalar için sahne, LED ekran, ses, ışık, truss, çadır ve teknik etkinlik prodüksiyonunu tek saha ekibiyle planlar. Yerel mekan bilgisi, lojistik, kurulum, etkinlik günü operasyonu ve söküm süreci aynı teknik sorumluluk altında yönetilir.",
    heroTrust:
      "Türkiye’de güvenilir teknik prodüksiyon ortağınız. Uluslararası markalar için yerel mekan süreci, lojistik, giriş saatleri ve teknik prodüksiyon ihtiyaçlarını tek deneyimli saha ekibiyle yönetiriz.",
    heroTrustBadge: "İngilizce Proje Yönetimi ve Saha Koordinasyonu",
    primaryCta: "WhatsApp ile Teklif Al",
    secondaryCta: "Ekiple İletişime Geç",
    pdfCta: "Şirket Profilini İndir",
    pdfAria: "Sahneva şirket profili PDF dosyasını indir",
    productionScope: "Teknik prodüksiyon kapsamı",
    scopeItems: ["Sahne", "LED ekran", "Ses", "Işık", "Truss", "Çadır"],
    statValue: "Yüzlerce tamamlanmış etkinlik projesi",
    statText: "Planlama, kurulum, etkinlik günü operasyonu ve söküm için tek teknik çözüm ortağı.",
    heroPdfText: "Şirket profili ve seçilmiş referanslar",
    seoSupport:
      "Sahneva, Türkiye’de etkinlik prodüksiyon firması ve uluslararası ekipler için teknik prodüksiyon ortağı olarak İstanbul, Antalya ve diğer büyük etkinlik destinasyonlarında sahne, LED ekran, ses, ışık, truss, çadır ve teknik ekip ihtiyaçlarını tek kapsamda planlar.",
    trust: {
      title: "Uluslararası etkinlik ekiplerinin en büyük risklerini nasıl çözüyoruz?",
      cards: [
        ["İngilizce saha ve proje iletişimi", "Proje özeti, teklif, teknik planlama, kurulum güncellemeleri ve etkinlik günü koordinasyonu İngilizce yürütülebilir."],
        ["Tek muhatap, tek teknik sorumluluk", "Sahne, LED ekran, ses, ışık, truss, çadır, ekip, lojistik ve söküm tek prodüksiyon kapsamı altında koordine edilir."],
        ["Yerel mekan ve lojistik bilgisi", "Mekan erişimi, otel balo salonları, fuar alanları, yükleme saatleri, şehir trafiği, enerji planı ve yerel tedarik koordinasyonu kurulumdan önce değerlendirilir."],
      ],
    },
    why: {
      eyebrow: "Yerel ortak neden önemli?",
      title: "Türkiye’de etkinlik planlayan ekipler yerel teknik kontrole ihtiyaç duyar",
      text: "Yurt dışından gelen bir marka veya ajans için konu yalnızca ekipman kiralamak değildir. Güvenilir bir yerel ortak; mekan girişlerini, yükleme saatlerini, şehir içi lojistiği, enerji dağıtımını, ekip koordinasyonunu ve etkinlik günü akışını bilir.",
      cards: [
        ["Mekan ve şehir bilgisi", "Mekan erişimi, yükleme noktaları, trafik ve yerel operasyon alışkanlıkları planlamaya dahil edilir."],
        ["Tek teknik sorumluluk", "Sahne, LED ekran, ses, ışık, truss ve çadır ekipleri aynı prodüksiyon kapsamı altında koordine edilir."],
        ["Uluslararası iletişim", "Proje özeti, teknik planlama, teklif ve prodüksiyon güncellemeleri İngilizce yürütülebilir."],
      ],
    },
    servicesHeading: {
      eyebrow: "Anahtar teslim teknik prodüksiyon",
      title: "Sahne, LED ekran, ses, ışık, truss ve çadır desteği",
      text: "Prodüksiyon kapsamı; ajans proje özeti, marka beklentisi ve mekan koşullarına göre komple etkinlik altyapısı veya seçili teknik departmanlar şeklinde planlanabilir.",
    },
    services: services.tr,
    market: {
      eyebrow: "Şehirler ve etkinlik formatları",
      title: "Türkiye’de etkinlik planlayan firmalar için yerel saha ortağı",
      text: "Sahneva; kurumsal etkinlik, lansman, fuar, spor organizasyonu, e-spor turnuvası, arena prodüksiyonu, konser ve marka deneyimi projelerinde Türkiye tarafındaki teknik operasyonu netleştirir.",
    },
    destination: {
      title: "Türkiye’nin önemli etkinlik destinasyonlarında yerel saha deneyimi",
      text: "İstanbul’un tarihi mekanları ve iş otellerinde, Antalya’nın kongre otelleri ve resort alanlarında, İzmir’in fuar alanlarında, Ankara’nın protokol etkinlik mekanlarında, Bodrum’un açık hava marka etkinliklerinde ve Kapadokya destinasyon etkinlikleri ve açık hava marka deneyimlerinde teknik prodüksiyon planlaması yapabiliriz. Uluslararası ekipler için bu yerel saha bilgisi, kurulum riskini azaltır ve süreci daha yönetilebilir hale getirir.",
    },
    equipment: {
      title: "Uluslararası standartlarda ses, ışık, görüntü ve kontrol sistemleri",
      text: "Proje kapsamına göre Sahneva; kurumsal etkinlik, arena prodüksiyonu, fuar ve açık hava marka deneyimleri için profesyonel ses, ışık, görüntü, LED işleme ve kontrol sistemi ekipmanlarıyla çalışabilir.",
    },
    cities: ["İstanbul", "Antalya", "İzmir", "Ankara", "Bodrum", "Türkiye geneli lojistik"],
    eventTypes: ["Kurumsal konferanslar", "Marka lansmanları", "Uluslararası kongreler", "Gala ve protokol etkinlikleri", "Spor etkinlikleri ve arena prodüksiyonları", "E-spor turnuvaları ve LED ağırlıklı sahneler", "Festival ve konserler", "Fuar ve sergi projeleri"],
    esports: {
      eyebrow: "Spor ve e-spor prodüksiyonu",
      title: "Arena ölçeğinde sahne, LED ve ışık desteği",
      text: "Spor etkinlikleri ve e-spor turnuvalarında oyuncu masaları, LED ağırlıklı gösteri sahneleri, izleyici ekranları, sahne ışığı, ses sistemi, truss yapıları ve teknik ekip koordinasyonu tek saha operasyonu olarak planlanabilir.",
    },
    profile: {
      eyebrow: "Şirket profili",
      title: "Sahneva Şirket Profilini İndirin",
      text: "Sahne, LED ekran, ses, ışık, truss, kurumsal etkinlik ve e-spor prodüksiyon referanslarımızı içeren şirket profilimizi inceleyebilirsiniz.",
    },
    processHeading: {
      eyebrow: "Çalışma şeklimiz",
      title: "İlk proje özetinden saha teslimine kadar net süreç",
      text: "Akış; yurt dışı ekiplerin Türkiye tarafındaki prodüksiyonu seyahatten, ekipman yüklemesinden ve etkinlik gününden önce net görmesi için tasarlanır.",
    },
    process: [
      ["Proje özeti ve kapsam", "Etkinlik türü, tarih, şehir, mekan, davetli sayısı, ekran ihtiyacı, sahne formatı ve teknik beklentiler netleştirilir."],
      ["Teknik planlama", "Sahne, LED ekran, ses, ışık, truss, çadır, enerji ve kulis akışı için prodüksiyon planı hazırlanır."],
      ["Lojistik ve kurulum", "Ekipman, ekip, araç, giriş saatleri ve kurulum sırası mekan veya yerel ajansla koordine edilir."],
      ["Etkinlik günü operasyonu", "Teknik ekip; ses kontrolü, ekran kontrolü, sahne geçişleri ve operasyon desteği için sahada kalır."],
      ["Söküm ve teslim", "Etkinlik sonunda söküm, yükleme ve saha teslimi aynı teknik sorumlulukla tamamlanır."],
    ],
    faqHeading: {
      eyebrow: "Sorular",
      title: "Uluslararası etkinlik ekipleri için kısa cevaplar",
      text: "Türkiye’de yerel teknik prodüksiyon ortağı arayan ajanslar ve markalar için temel bilgiler.",
    },
    faq: [
      ["Türkiye’de uluslararası firmalara etkinlik prodüksiyonu sağlıyor musunuz?", "Evet. Sahneva; sahne, LED ekran, ses, ışık, truss, çadır ve teknik ekip ihtiyacı olan uluslararası firma, ajans ve markalar için yerel etkinlik çözüm ortağı olarak çalışır."],
      ["Avrupa’dan gelen ajanslara destek olabilir misiniz?", "Evet. İngilizce iletişim, yerel lojistik, teknik planlama, kurulum, etkinlik günü operasyonu ve söküm süreçlerinde destek sağlayabiliriz."],
      ["Uluslararası teknik direktörümüzle doğrudan koordinasyon kurabilir misiniz?", "Evet. Proje koordinasyonumuz ilk brief’ten teknik planlamaya, kurulum güncellemelerine, provaya ve etkinlik günü operasyonuna kadar uluslararası teknik direktörünüzle uyumlu ilerleyebilir."],
      ["Türkiye’de büyük oteller ve kongre merkezlerinde çalışma deneyiminiz var mı?", "Evet. Sahneva; İstanbul, Antalya, İzmir, Ankara, Bodrum ve diğer destinasyonlarda iş otelleri, kongre otelleri, fuar alanları, tarihi mekanlar ve açık hava etkinlik alanları için teknik prodüksiyon planlayabilir."],
      ["Hangi teknik hizmetleri veriyorsunuz?", "Proje kapsamına göre sahne, podyum, LED ekran, video wall, ses, ışık, truss, askı ve taşıyıcı çözümler, çadır, oyuncu masası, kulis alanları ve teknik ekip desteği sunuyoruz."],
      ["İstanbul, Antalya, İzmir, Ankara ve Bodrum’da çalışıyor musunuz?", "Evet. Bu şehirler sık çalıştığımız prodüksiyon lokasyonlarıdır; proje kapsamı net olduğunda Türkiye’nin farklı şehirleri için de lojistik planlanabilir."],
      ["Spor ve e-spor etkinliklerini destekleyebilir misiniz?", "Evet. Arena prodüksiyonu, e-spor sahnesi, oyuncu masası, LED ağırlıklı gösteri sahnesi, ışık, ses ve teknik ekip koordinasyonu planlanabilir."],
      ["İstanbul ve Antalya’da ses-görüntü kiralama desteği veriyor musunuz?", "Evet. Sahneva, İstanbul, Antalya ve Türkiye’nin farklı etkinlik destinasyonlarında LED ekran, ses, ışık, sahne, truss ve teknik ekip dahil ses-görüntü kiralama ve teknik prodüksiyon desteği sağlayabilir."],
      ["Tüm teknik prodüksiyonu tek kişi üzerinden yönetebilir miyiz?", "Evet. Sahneva; sahne, LED ekran, ses, ışık, truss, çadır, lojistik, kurulum, etkinlik günü operasyonu ve söküm için tek muhatap olarak süreci yönetebilir."],
      ["Saha ekibi İngilizce iletişim kurabilir mi?", "Evet. Teknik proje özeti, teklif hazırlığı, kurulum güncellemeleri ve etkinlik günü koordinasyonu uluslararası ekipler için İngilizce yürütülebilir."],
      ["Şirket profilinizi indirebilir miyiz?", "Evet. Sahneva şirket profili PDF’i bu sayfada portfolyo ve referans dokümanı olarak indirilebilir."],
    ],
    final: {
      title: "Türkiye’de uluslararası bir etkinlik mi planlıyorsunuz?",
      text: "Şehir, tarih, mekan, katılımcı sayısı ve teknik beklentilerinizi paylaşın. Sahne, LED ekran, ses, ışık, truss, çadır ve ekip desteği için net bir prodüksiyon kapsamı hazırlayalım.",
      contact: "Etkinlik Detaylarını Gönder",
      contactHref: "/iletisim",
      whatsapp: "WhatsApp’tan Yazın",
    },
  },
};

const localizedOverrides = {
  ar: {
    locale: "ar",
    htmlLang: "ar",
    ogLocale: "ar_AR",
    path: commonPaths.ar,
    title: "شريك إنتاج فعاليات في تركيا للشركات الدولية | Sahneva",
    description: "تقدم Sahneva حلول المسرح، شاشات LED، الصوت، الإضاءة، truss، الخيام والتنفيذ التقني للفعاليات في تركيا للشركات والوكالات والعلامات الدولية.",
    eyebrow: "شريك محلي للفعاليات في تركيا",
    h1: "شريك تقني محلي لفعالياتكم في تركيا",
    intro: "تدعم Sahneva الشركات والوكالات والعلامات الدولية التي تخطط لفعاليات في تركيا عبر حلول المسرح، شاشات LED، الصوت، الإضاءة، truss، الخيام والفريق التقني. نساعدكم على تحويل متطلبات الفعالية إلى خطة تنفيذ واضحة تشمل اللوجستيات، التركيب، التشغيل في يوم الحدث والتفكيك.",
    heroTrust:
      "شريككم التقني الموثوق في تركيا. نساعد العلامات الدولية على إدارة مواقع الفعاليات، اللوجستيات، ساعات الدخول والمتطلبات التقنية عبر فريق ميداني واحد.",
    heroTrustBadge: "إدارة مشروع باللغة الإنجليزية وتنسيق ميداني",
    primaryCta: "اطلب عرضاً عبر واتساب",
    secondaryCta: "تواصل مع الفريق",
    pdfCta: "تحميل ملف الشركة",
    pdfAria: "تحميل ملف شركة Sahneva بصيغة PDF",
    productionScope: "نطاق التنفيذ التقني",
    scopeItems: ["مسرح", "شاشات LED", "صوت", "إضاءة", "هياكل تعليق", "خيام"],
    statValue: "مئات مشاريع الفعاليات المنجزة",
    statText: "شريك تقني واحد للتخطيط، التركيب، تشغيل يوم الحدث والتفكيك.",
    heroPdfText: "ملف الشركة ونماذج من الأعمال",
    seoSupport:
      "تعمل Sahneva كشريك إنتاج تقني في تركيا للفرق الدولية، وتدعم احتياجات المسرح، شاشات LED، الصوت، الإضاءة، هياكل التعليق، الخيام والفريق التقني في إسطنبول، أنطاليا ومدن الفعاليات الرئيسية.",
    trust: {
      title: "ما الذي يقلق فرق الفعاليات الدولية؟ وكيف نعالجه؟",
      cards: [
        ["تنسيق المشروع باللغة الإنجليزية", "يمكن إدارة المتطلبات التقنية، العرض، تحديثات التركيب وتنسيق يوم الفعالية باللغة الإنجليزية."],
        ["نقطة اتصال واحدة", "يتم تنسيق المسرح، LED، الصوت، الإضاءة، هياكل التعليق، الخيام، الفريق، اللوجستيات والتفكيك ضمن نطاق تقني واحد."],
        ["معرفة المواقع واللوجستيات المحلية", "نأخذ في الاعتبار دخول الموقع، قاعات الفنادق، مراكز المعارض، ساعات التحميل، حركة المدينة وتخطيط الطاقة قبل التركيب."],
      ],
    },
    why: {
      eyebrow: "أهمية الشريك المحلي",
      title: "الفعاليات الدولية في تركيا تحتاج إلى تحكم تقني محلي",
      text: "بالنسبة إلى علامة أو وكالة قادمة إلى تركيا، لا يكفي استئجار المعدات فقط. الشريك المحلي الموثوق يعرف المواقع، ساعات التحميل، حركة المدن، توزيع الطاقة، تنسيق الفرق ومسار الفعالية.",
      cards: [["معرفة المواقع والمدن", "ندخل الوصول إلى الموقع، نقاط التحميل، حركة المرور وطريقة العمل المحلية ضمن الخطة."], ["مسؤولية تقنية واحدة", "يتم تنسيق المسرح، شاشات LED، الصوت، الإضاءة، هياكل التعليق والخيام ضمن نطاق تقني واحد."], ["تواصل دولي", "يمكن إدارة المتطلبات، التخطيط التقني، العروض والتحديثات باللغة الإنجليزية."]],
    },
    servicesHeading: { eyebrow: "تنفيذ تقني متكامل", title: "دعم المسرح، LED، الصوت، الإضاءة، هياكل التعليق والخيام", text: "يمكن تشكيل نطاق العمل كبنية كاملة للفعالية أو كأقسام تقنية مختارة حسب متطلبات الوكالة، أهداف العلامة وظروف الموقع." },
    services: services.ar,
    market: { eyebrow: "المدن وأنواع الفعاليات", title: "للشركات التي تخطط لفعاليات في تركيا", text: "تدعم Sahneva المؤتمرات، الإطلاقات، المعارض، الفعاليات الرياضية، بطولات الألعاب الإلكترونية، إنتاجات القاعات، الحفلات وتجارب العلامات التي تحتاج إلى شريك موثوق داخل تركيا." },
    destination: {
      title: "خبرة محلية في أهم وجهات الفعاليات في تركيا",
      text: "ندعم الفعاليات في المواقع التاريخية وفنادق الأعمال في إسطنبول، فنادق المؤتمرات والمنتجعات في أنطاليا، مناطق المعارض في إزمير، مواقع البروتوكول في أنقرة وتجارب العلامات في الهواء الطلق في بودروم.",
    },
    equipment: {
      title: "أنظمة صوت وإضاءة وصورة وتحكم بمعايير مهنية",
      text: "بحسب نطاق المشروع، يمكن لـ Sahneva العمل مع معدات صوت وإضاءة وفيديو ومعالجة LED وأنظمة تحكم مناسبة للمؤتمرات، المعارض، الإنتاجات الكبيرة والفعاليات الخارجية.",
    },
    cities: ["إسطنبول", "أنطاليا", "إزمير", "أنقرة", "بودروم", "لوجستيات في أنحاء تركيا"],
    eventTypes: ["مؤتمرات الشركات", "إطلاق العلامات", "مؤتمرات دولية", "حفلات جالا وبروتوكول", "فعاليات رياضية وقاعات كبيرة", "بطولات ألعاب إلكترونية ومراحل LED", "مهرجانات وحفلات", "معارض وتجارب تجارية"],
    esports: { eyebrow: "فعاليات رياضية وألعاب إلكترونية", title: "دعم المسرح، LED والإضاءة للقاعات الكبيرة", text: "في الفعاليات الرياضية وبطولات الألعاب الإلكترونية يمكننا تخطيط طاولات اللاعبين، الشاشات الكبيرة، شاشات الجمهور، إضاءة المسرح، الصوت، هياكل التعليق وتنسيق الفريق التقني كعملية ميدانية واحدة." },
    profile: { eyebrow: "ملف الشركة", title: "تحميل ملف Sahneva التعريفي", text: "اطلعوا على ملف الشركة الذي يتضمن نماذج من أعمال المسرح، شاشات LED، الصوت، الإضاءة، هياكل التعليق، الفعاليات المؤسسية وإنتاج بطولات الألعاب الإلكترونية." },
    processHeading: { eyebrow: "طريقة العمل", title: "من أول متطلبات إلى تسليم الموقع", text: "تم تصميم المسار ليجعل تنفيذ الفعالية في تركيا واضحاً للفريق الدولي قبل السفر، قبل تحميل المعدات وقبل يوم الحدث." },
    process: [["المتطلبات والنطاق", "نوضح نوع الفعالية، التاريخ، المدينة، الموقع، عدد الضيوف، احتياج الشاشات، شكل المسرح والتوقعات التقنية."], ["التخطيط التقني", "نعد خطة للمسرح، LED، الصوت، الإضاءة، هياكل التعليق، الخيام، الطاقة ومسار خلف المسرح."], ["اللوجستيات والتركيب", "ننسق المعدات، الفريق، المركبات، ساعات الدخول وتسلسل التركيب مع الموقع أو الوكالة المحلية."], ["تشغيل يوم الحدث", "يبقى الفريق التقني في الموقع لفحص الصوت، التحكم بالشاشات، انتقالات المسرح والدعم التشغيلي."], ["التفكيك والتسليم", "بعد الحدث يتم التفكيك، التحميل وتسليم الموقع تحت نفس المسؤولية التقنية."]],
    faqHeading: { eyebrow: "أسئلة شائعة", title: "إجابات مختصرة للفرق الدولية", text: "معلومات أساسية للوكالات والعلامات التي تبحث عن شريك تقني محلي في تركيا." },
    faq: [["هل تقدمون إنتاج فعاليات للشركات الدولية في تركيا؟", "نعم. تعمل Sahneva كشريك محلي للشركات والوكالات والعلامات التي تحتاج إلى المسرح، LED، الصوت، الإضاءة، هياكل التعليق، الخيام وفريق تقني في تركيا."], ["هل يمكن دعم وكالات أوروبية في تركيا؟", "نعم. نقدم تواصلاً بالإنجليزية، لوجستيات محلية، تخطيطاً تقنياً، تركيباً، تشغيل يوم الحدث وتفكيكاً في المدن التركية الرئيسية."], ["ما الخدمات التقنية المتاحة؟", "حسب نطاق المشروع نوفر المسرح، البوديوم، LED، جدران العرض، الصوت، الإضاءة، هياكل التعليق، حلول الحمل، الخيام، طاولات اللاعبين، مناطق خلف المسرح والفريق التقني."], ["هل تعملون في إسطنبول وأنطاليا وإزمير وأنقرة وبودروم؟", "نعم. هذه المدن من مواقع العمل المتكررة لدينا، ويمكن تخطيط اللوجستيات لمدن أخرى عند وضوح نطاق المشروع."], ["هل تدعمون الفعاليات الرياضية والألعاب الإلكترونية؟", "نعم. يمكن تخطيط إنتاج القاعات، مسارح الألعاب الإلكترونية، طاولات اللاعبين، شاشات LED الكبيرة، الإضاءة، الصوت والفريق التقني."], ["هل يمكن تحميل ملف الشركة؟", "نعم. ملف Sahneva التعريفي متاح على هذه الصفحة كوثيقة مرجعية قابلة للتحميل."]],
    final: { title: "هل تخططون لفعالية دولية في تركيا؟", text: "شاركوا معنا المدينة، التاريخ، الموقع، عدد الضيوف والتوقعات التقنية. سنعود إليكم بنطاق واضح للمسرح، LED، الصوت، الإضاءة، هياكل التعليق، الخيام والفريق.", contact: "إرسال تفاصيل الفعالية", contactHref: "/ar/contact", whatsapp: "تواصل عبر واتساب" },
  },
  ru: {
    locale: "ru",
    htmlLang: "ru",
    ogLocale: "ru_RU",
    path: commonPaths.ru,
    title: "Партнер по техническому обеспечению мероприятий в Турции | Sahneva",
    description: "Sahneva предоставляет сцену, LED-экраны, звук, свет, truss, шатры и техническую команду для международных компаний, агентств и брендов в Турции.",
    eyebrow: "Локальный партнер по мероприятиям в Турции",
    h1: "Технический партнер для международных мероприятий в Турции",
    intro: "Sahneva помогает международным компаниям, европейским агентствам и глобальным брендам проводить мероприятия в Турции. Мы планируем сцену, LED-экраны, звук, свет, ферменные конструкции, шатры, логистику, монтаж, работу в день события и демонтаж одной технической командой.",
    heroTrust:
      "Ваш надежный технический партнер в Турции. Мы помогаем международным брендам управлять площадками, логистикой, временем доступа и техническими требованиями через одну опытную полевую команду.",
    heroTrustBadge: "Англоязычное управление проектом и координация на площадке",
    primaryCta: "Запросить расчет в WhatsApp",
    secondaryCta: "Связаться с командой",
    pdfCta: "Скачать профиль компании",
    pdfAria: "Скачать PDF профиль компании Sahneva",
    productionScope: "Технический объем работ",
    scopeItems: ["Сцена", "LED-экран", "Звук", "Свет", "Фермы", "Шатры"],
    statValue: "Сотни завершенных проектов",
    statText: "Один технический партнер для планирования, монтажа, работы в день события и демонтажа.",
    heroPdfText: "Профиль компании и избранные проекты",
    seoSupport:
      "Sahneva работает как технический производственный партнер в Турции для международных команд и помогает планировать сцену, LED-экраны, звук, свет, ферменные конструкции, шатры, команду и логистику в Стамбуле, Анталье и других ключевых городах.",
    trust: {
      title: "Что беспокоит международные команды мероприятий — и как мы это решаем",
      cards: [
        ["Координация проекта на английском", "Технический бриф, предложение, обновления по монтажу и координация в день события могут вестись на английском языке."],
        ["Одна точка контакта", "Сцена, LED-экраны, звук, свет, ферменные конструкции, шатры, команда, логистика и демонтаж координируются в едином техническом объеме."],
        ["Знание площадок и логистики", "Доступ к площадке, гостиничные залы, выставочные центры, часы загрузки, городской трафик и питание учитываются до монтажа."],
      ],
    },
    why: { eyebrow: "Почему важен локальный партнер", title: "Международным мероприятиям в Турции нужен местный технический контроль", text: "Для бренда или агентства, приезжающего в Турцию, задача не ограничивается арендой оборудования. Надежный местный партнер понимает площадки, часы загрузки, городскую логистику, питание, координацию команды и ход события.", cards: [["Знание площадок и городов", "Доступ к площадке, точки разгрузки, трафик и местные рабочие привычки входят в планирование."], ["Единая техническая ответственность", "Сцена, LED-экраны, звук, свет, ферменные конструкции и шатры координируются в едином техническом объеме."], ["Международная коммуникация", "Требования, технический план, коммерческое предложение и обновления могут вестись на английском языке."]] },
    servicesHeading: { eyebrow: "Техническое обеспечение под ключ", title: "Сцена, LED-экраны, звук, свет, фермы и шатры", text: "Объем работ может быть полной инфраструктурой мероприятия или отдельными техническими направлениями в зависимости от задач агентства, ожиданий бренда и условий площадки." },
    services: services.ru,
    market: { eyebrow: "Города и форматы событий", title: "Для компаний, планирующих мероприятия в Турции", text: "Sahneva поддерживает корпоративные события, запуски, выставки, спортивные мероприятия, киберспортивные турниры, аренные проекты, концерты и брендовые события, где нужен надежный партнер в Турции." },
    destination: {
      title: "Локальный опыт в ключевых городах Турции для мероприятий",
      text: "Мы поддерживаем события в исторических площадках и бизнес-отелях Стамбула, конгресс-отелях и курортных площадках Антальи, выставочных зонах Измира, протокольных пространствах Анкары и проектах под открытым небом в Бодруме.",
    },
    equipment: {
      title: "Профессиональные AV, звук, свет, видео и системы контроля",
      text: "В зависимости от проекта Sahneva может работать с профессиональным звуком, светом, видео, LED-обработкой и системами контроля для корпоративных событий, выставок, арен и проектов под открытым небом.",
    },
    cities: ["Стамбул", "Анталья", "Измир", "Анкара", "Бодрум", "Логистика по Турции"],
    eventTypes: ["Корпоративные конференции", "Запуски брендов", "Международные конгрессы", "Гала и протокольные события", "Спортивные мероприятия и арены", "Киберспортивные турниры и LED-сцены", "Фестивали и концерты", "Выставки и ярмарки"],
    esports: { eyebrow: "Спорт и киберспорт", title: "Сцена, LED и свет для аренных форматов", text: "Для спортивных мероприятий и киберспортивных турниров мы планируем столы игроков, LED-сцены, экраны для зрителей, сценический свет, звук, ферменные конструкции и координацию технической команды как единую полевую операцию." },
    profile: { eyebrow: "Профиль компании", title: "Скачать профиль Sahneva", text: "Ознакомьтесь с профилем компании: сцена, LED-экраны, звук, свет, ферменные конструкции, корпоративные события и киберспортивные проекты." },
    processHeading: { eyebrow: "Как мы работаем", title: "От первых требований до передачи площадки", text: "Процесс помогает международной команде ясно видеть турецкую часть работ до поездки, до загрузки оборудования и до дня мероприятия." },
    process: [["Требования и объем", "Уточняем тип события, дату, город, площадку, количество гостей, экраны, формат сцены и технические ожидания."], ["Технический план", "Готовим план по сцене, LED, звуку, свету, ферменным конструкциям, шатрам, питанию и закулисной работе."], ["Логистика и монтаж", "Координируем оборудование, команду, транспорт, часы доступа и очередность монтажа с площадкой или местным агентством."], ["Работа в день события", "Техническая команда остается на площадке для проверки звука, управления экранами, сценических переходов и поддержки."], ["Демонтаж и сдача", "После события демонтаж, загрузка и передача площадки завершаются под той же технической ответственностью."]],
    faqHeading: { eyebrow: "Вопросы", title: "FAQ для международных команд", text: "Короткие ответы для агентств и брендов, выбирающих локального технического партнера в Турции." },
    faq: [["Вы работаете с международными компаниями в Турции?", "Да. Sahneva работает как локальный партнер для компаний, агентств и брендов, которым нужны сцена, LED, звук, свет, ферменные конструкции, шатры и техническая команда в Турции."], ["Можете ли вы поддержать европейские агентства?", "Да. Мы обеспечиваем коммуникацию на английском, местную логистику, техническое планирование, монтаж, работу в день события и демонтаж в крупных городах Турции."], ["Какие технические услуги вы предоставляете?", "В зависимости от проекта мы предоставляем сцену, подиум, LED, видеостены, звук, свет, ферменные и подвесные конструкции, шатры, столы игроков, закулисные зоны и техническую команду."], ["Работаете ли вы в Стамбуле, Анталье, Измире, Анкаре и Бодруме?", "Да. Это частые города наших проектов; при ясном объеме работ логистика может быть спланирована и для других городов Турции."], ["Поддерживаете ли вы спортивные и киберспортивные события?", "Да. Мы можем планировать аренные проекты, киберспортивные сцены, столы игроков, LED-сцены, свет, звук и координацию технической команды."], ["Можно ли скачать профиль компании?", "Да. PDF-профиль Sahneva доступен на этой странице как портфолио и справочный документ."]],
    final: { title: "Планируете международное мероприятие в Турции?", text: "Сообщите город, дату, площадку, количество гостей и технические ожидания. Мы подготовим понятный объем работ по сцене, LED, звуку, свету, ферменным конструкциям, шатрам и команде.", contact: "Отправить детали события", contactHref: "/ru/contact", whatsapp: "Написать в WhatsApp" },
  },
};

Object.assign(content, localizedOverrides);

export const INTERNATIONAL_EVENT_CONTENT = content;

export function getInternationalEventContent(locale) {
  return content[locale] || content.en;
}

export function buildInternationalEventMetadata(locale) {
  const pageContent = getInternationalEventContent(locale);
  const pageUrl = `${SITE_URL}${pageContent.path}`;

  return {
    title: { absolute: pageContent.title },
    description: pageContent.description,
    alternates: buildLanguageAlternates({
      tr: commonPaths.tr,
      en: commonPaths.en,
      ar: commonPaths.ar,
      ru: commonPaths.ru,
      canonical: pageContent.path,
      xDefault: commonPaths.en,
    }),
    openGraph: {
      title: pageContent.title,
      description: pageContent.description,
      url: pageUrl,
      type: "website",
      siteName: "Sahneva",
      locale: pageContent.ogLocale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: pageContent.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageContent.title,
      description: pageContent.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export function buildInternationalEventJsonLd(locale) {
  const pageContent = getInternationalEventContent(locale);
  const pageUrl = `${SITE_URL}${pageContent.path}`;
  const webPageId = `${pageUrl}#webpage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const serviceId = `${pageUrl}#service`;
  const faqId = `${pageUrl}#faq`;
  const homePath = locale === "tr" ? "/" : `/${locale}`;
  const servicesPath = locale === "tr" ? "/hizmetler" : `/${locale}/services`;
  const homeName = locale === "tr" ? "Ana Sayfa" : locale === "ar" ? "الرئيسية" : locale === "ru" ? "Главная" : "Home";
  const servicesName = locale === "tr" ? "Hizmetler" : locale === "ar" ? "الخدمات" : locale === "ru" ? "Услуги" : "Services";

  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": webPageId, url: pageUrl, name: pageContent.title, description: pageContent.description, inLanguage: pageContent.htmlLang, isPartOf: { "@id": `${SITE_URL}/#website` }, breadcrumb: { "@id": breadcrumbId }, mainEntity: { "@id": serviceId }, hasPart: [{ "@id": faqId }] },
      { "@type": "BreadcrumbList", "@id": breadcrumbId, itemListElement: [{ "@type": "ListItem", position: 1, name: homeName, item: `${SITE_URL}${homePath === "/" ? "" : homePath}` }, { "@type": "ListItem", position: 2, name: servicesName, item: `${SITE_URL}${servicesPath}` }, { "@type": "ListItem", position: 3, name: pageContent.h1, item: pageUrl }] },
      { "@type": "Service", "@id": serviceId, name: pageContent.h1, serviceType: "Technical event production", provider: { "@id": ORGANIZATION_ID }, areaServed: [{ "@type": "Country", name: "Turkey" }, { "@type": "City", name: "Istanbul" }, { "@type": "City", name: "Antalya" }, { "@type": "City", name: "Izmir" }, { "@type": "City", name: "Ankara" }, { "@type": "City", name: "Bodrum" }], audience: { "@type": "Audience", audienceType: "International companies, event agencies and brands planning events in Turkey" }, description: pageContent.description, image: ogImage, subjectOf: { "@type": "DigitalDocument", name: "Sahneva Company Profile", encodingFormat: "application/pdf", url: COMPANY_PROFILE_PDF_ABSOLUTE_URL }, offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "TRY", url: pageUrl, description: "Project-based event production quote for international events in Turkey." } },
      { "@type": "FAQPage", "@id": faqId, inLanguage: pageContent.htmlLang, mainEntity: pageContent.faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    ],
  };
}

export function getInternationalEventWhatsappUrl(locale) {
  const phone = "905453048671";
  const text = locale === "tr"
    ? "Merhaba, Türkiye'de planlanan uluslararası bir etkinlik için teknik prodüksiyon desteği almak istiyoruz."
    : locale === "ar"
      ? "مرحباً، نخطط لفعالية دولية في تركيا ونحتاج إلى دعم تقني للفعالية."
      : locale === "ru"
        ? "Здравствуйте, мы планируем международное мероприятие в Турции и хотим получить техническую поддержку."
        : "Hello, we are planning an international event in Turkey and would like technical production support.";

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export const INTERNATIONAL_EVENT_HERO_IMAGE = heroImage;
export const INTERNATIONAL_EVENT_SHARED_IMAGES = sharedImages;

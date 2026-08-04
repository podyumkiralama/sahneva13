// Merkezi görsel portfolyo kaynağı.
// Tek yerde tanımlanan seçki, tüm dillerde (tr/en/ru/zh/ar/de) aynı görselleri
// kendi alt metniyle sunar. Yeni dil eklenirse buraya da anahtar eklenmeli;
// eksik dil otomatik olarak İngilizce alt metne düşer.

const FALLBACK_LOCALE = "en";

function alt(tr, en, ru, zh, ar, de) {
  return { tr, en, ru, zh, ar, de };
}

export const PORTFOLIO_CATEGORIES = {
  stage: [
    {
      src: "/img/sahne/1.webp",
      alt: alt(
        "Truss çatılı konser sahnesi, LED ekran ve ışık kurulumu",
        "Concert stage with professional truss roof, LED wall and lighting installation",
        "Концертная сцена с фермовой крышей, LED-экраном и световой установкой",
        "带专业桁架顶棚的演唱会舞台，配LED屏幕与灯光系统",
        "مسرح حفلات بسقف truss احترافي مع جدار LED وإضاءة",
        "Konzertbühne mit Traversendach, LED-Wand und Lichtinstallation"
      ),
    },
    {
      src: "/img/sahne/2.webp",
      alt: alt(
        "Entegre LED ekranlı konferans sahnesi ve profesyonel ışık",
        "Conference stage with integrated LED display and modern professional lighting",
        "Конференц-сцена со встроенным LED-экраном и профессиональным светом",
        "会议舞台，集成LED显示屏与专业灯光",
        "مسرح مؤتمرات بشاشة LED مدمجة وإضاءة احترافية",
        "Konferenzbühne mit integrierter LED-Fläche und professioneller Lichttechnik"
      ),
    },
    {
      src: "/img/sahne/3.webp",
      alt: alt(
        "Açık hava festival sahnesi, geniş ışık ve ses sistemi",
        "Outdoor festival stage featuring extensive lighting and audio rig",
        "Фестивальная сцена под открытым небом со светом и звуковым комплектом",
        "户外音乐节舞台，配备大型灯光与音响系统",
        "مسرح مهرجان في الهواء الطلق مع إضاءة ونظام صوت واسع",
        "Open-Air-Festivalbühne mit umfangreicher Licht- und Tonanlage"
      ),
    },
    {
      src: "/img/sahne/4.webp",
      alt: alt(
        "Markalı arka fon ve LED ekran entegrasyonlu lansman sahnesi",
        "Corporate launch stage with branded backdrop and LED wall integration",
        "Сцена запуска продукта с брендированным задником и LED-экраном",
        "新品发布舞台，配品牌背景板与LED屏幕",
        "مسرح إطلاق منتج بخلفية تحمل هوية العلامة وجدار LED",
        "Launch-Bühne mit gebrandetem Backdrop und eingebundener LED-Wand"
      ),
    },
    {
      src: "/img/sahne/5.webp",
      alt: alt(
        "Dekoratif kurulum ve atmosferik ışık tasarımlı sahne",
        "Event stage with decorative setup and atmospheric lighting design",
        "Сцена с декоративным оформлением и атмосферным светом",
        "活动舞台，配装饰布景与氛围灯光设计",
        "مسرح فعالية بتصميم ديكور وإضاءة أجواء",
        "Veranstaltungsbühne mit dekorativem Aufbau und atmosphärischem Lichtdesign"
      ),
    },
    {
      src: "/img/sahne/6.webp",
      alt: alt(
        "Modüler sahne platformu ve teknik kurulum detayı",
        "Modular stage platform with technical installation detail",
        "Модульная сценическая платформа и технический монтаж",
        "模块化舞台平台与技术安装细节",
        "منصة مسرح معيارية وتفاصيل التركيب التقني",
        "Modulare Bühnenplattform mit Detailansicht der technischen Montage"
      ),
    },
    {
      src: "/img/sahne/7.webp",
      alt: alt(
        "Geniş açıklıklı sahne kurulumu ve truss portal",
        "Wide-span stage installation with truss portal structure",
        "Сцена с большим пролетом и труссовым порталом",
        "大跨度舞台搭建，配桁架门架结构",
        "تركيب مسرح واسع المدى مع بوابة truss",
        "Weitgespannte Bühnenkonstruktion mit Traversenportal"
      ),
    },
    {
      src: "/img/sahne/8.webp",
      alt: alt(
        "Sahne önü podyum platformu ve güvenlik bariyerleri",
        "Front-of-stage podium platform with safety barriers",
        "Подиум перед сценой с защитными ограждениями",
        "舞台前区平台与安全围栏",
        "منصة أمام المسرح مع حواجز أمان",
        "Podest vor der Bühne mit Absperrungen"
      ),
    },
  ],

  led: [
    {
      src: "/img/galeri/led-ekran-kiralama-1.webp",
      alt: alt(
        "Konser sahnesinde büyük LED ekran ve görsel şov",
        "Professional LED screen installation - concert stage with a large LED wall and visual show",
        "Большой LED-экран на концертной сцене и визуальное шоу",
        "演唱会舞台上的大型LED屏幕与视觉演出",
        "تركيب شاشة LED احترافية على مسرح حفلات مع عرض بصري",
        "Aufbau einer professionellen LED-Wand auf einer Konzertbühne mit Visual-Show"
      ),
    },
    {
      src: "/img/galeri/led-ekran-kiralama-2.webp",
      alt: alt(
        "Canlı performans sırasında konser sahnesindeki LED wall",
        "Large LED wall built on a concert stage during a live performance",
        "LED-стена на концертной сцене во время живого выступления",
        "现场演出中搭建于演唱会舞台的LED墙",
        "جدار LED كبير على مسرح حفلات أثناء عرض حي",
        "Großflächige LED-Wand auf einer Konzertbühne während des Auftritts"
      ),
    },
    {
      src: "/img/galeri/led-ekran-kiralama-3.webp",
      alt: alt(
        "Kurumsal etkinlikte sunum görselli LED ekran",
        "LED screen at a corporate event with presentation visuals and professional lighting",
        "LED-экран на корпоративном мероприятии с презентационной графикой",
        "企业活动中的LED屏幕，播放演示内容并配专业灯光",
        "شاشة LED في فعالية مؤسسية مع محتوى عرض وإضاءة احترافية",
        "LED-Wand bei einer Firmenveranstaltung mit Präsentationsgrafiken und Lichttechnik"
      ),
    },
    {
      src: "/img/galeri/led-ekran-kiralama-4.webp",
      alt: alt(
        "Açık hava festivalinde yüksek parlaklıklı LED wall",
        "High-brightness LED wall at an outdoor festival delivering crisp daylight visuals",
        "Яркая LED-стена на open-air фестивале с четкой картинкой при дневном свете",
        "户外音乐节的高亮度LED墙，日光下画面依然清晰",
        "جدار LED عالي السطوع في مهرجان خارجي بصورة واضحة نهاراً",
        "Lichtstarke LED-Wand auf einem Open-Air-Festival mit klarem Bild bei Tageslicht"
      ),
    },
    {
      src: "/img/galeri/led-ekran-kiralama-5.webp",
      alt: alt(
        "Fuar standı içinde marka içerikli video wall",
        "Video wall inside a trade show booth showcasing branded content",
        "Видеостена на выставочном стенде с брендированным контентом",
        "展会展位内的视频墙，播放品牌内容",
        "جدار فيديو داخل جناح معرض يعرض محتوى العلامة",
        "Videowall auf einem Messestand mit Markeninhalten"
      ),
    },
    {
      src: "/img/galeri/led-ekran-kiralama-6.webp",
      alt: alt(
        "Stadyum içinde dev LED ekran ve canlı görüntü akışı",
        "Giant LED screen inside a stadium displaying live scores and footage",
        "Гигантский LED-экран на стадионе с прямой трансляцией",
        "体育场内的巨型LED屏幕，显示实时比分与画面",
        "شاشة LED عملاقة داخل ملعب تعرض النتائج والبث المباشر",
        "Großbildwand in einem Stadion mit Live-Bild und Spielstand"
      ),
    },
    {
      src: "/img/galeri/led-ekran-kiralama-7.webp",
      alt: alt(
        "Özel etkinlikte canlı fotoğraf ve video akışlı LED ekran",
        "LED screen at a private event streaming live photos and videos",
        "LED-экран на частном мероприятии с трансляцией фото и видео",
        "私人活动中的LED屏幕，实时播放照片与视频",
        "شاشة LED في فعالية خاصة تبث الصور والفيديو مباشرة",
        "LED-Wand bei einer privaten Veranstaltung mit Live-Fotos und Videos"
      ),
    },
    {
      src: "/img/galeri/led-ekran-kiralama-8.webp",
      alt: alt(
        "Canlı yayına hazırlanan stüdyoda profesyonel LED arka fon",
        "Professional LED backdrop inside a TV studio prepared for live broadcast",
        "Профессиональный LED-задник в студии, готовой к прямому эфиру",
        "电视演播室内的专业LED背景墙，为直播做准备",
        "خلفية LED احترافية داخل استوديو تلفزيوني جاهز للبث المباشر",
        "LED-Hintergrundwand in einem Fernsehstudio, vorbereitet für die Liveübertragung"
      ),
    },
  ],

  "sound-light": [
    {
      src: "/img/ses-isik/ses-sistemi.webp",
      alt: alt(
        "Line-array hoparlör sistemi ve FOH mikser masası",
        "Line-array speaker system with FOH mixing console",
        "Система line-array и микшерный пульт FOH",
        "线阵音响系统与FOH调音台",
        "نظام صوت line-array مع طاولة مزج FOH",
        "Line-Array-Beschallung mit Mischpult am FOH-Platz"
      ),
    },
    {
      src: "/img/ses-isik/isik-sistemi.webp",
      alt: alt(
        "Moving head ışık rigi, wash ve beam efektleri",
        "Moving-head lighting rig with stage wash and beam effects",
        "Риг из moving head со сценическим wash и beam",
        "摇头灯灯架，配舞台染色与光束效果",
        "منظومة إضاءة moving head مع تأثيرات wash وbeam",
        "Moving-Head-Lichtanlage mit Wash- und Beam-Effekten auf der Bühne"
      ),
    },
    {
      src: "/img/ses-isik/3.webp",
      alt: alt(
        "Line-array ses ve moving head ışıkla konser sahnesi",
        "Concert stage with line-array speakers, moving-head lighting and live audience",
        "Концертная сцена с line-array, moving head и зрителями",
        "演唱会舞台，配线阵音响、摇头灯与现场观众",
        "مسرح حفلات مع صوت line-array وإضاءة moving head وجمهور",
        "Konzertbühne mit Line-Array-Boxen, Moving Heads und Publikum"
      ),
    },
    {
      src: "/img/ses-isik/4.webp",
      alt: alt(
        "Açık hava sahnesi için alüminyum truss ve rigging kurulumu",
        "Aluminium truss and rigging setup for outdoor stage",
        "Алюминиевый truss и риггинг для открытой сцены",
        "户外舞台的铝制桁架与吊挂系统搭建",
        "تركيب truss ألمنيوم وrigging لمسرح خارجي",
        "Traversen- und Riggingaufbau aus Aluminium für eine Außenbühne"
      ),
    },
    {
      src: "/img/ses-isik/5.webp",
      alt: alt(
        "Canlı konser sesini yöneten FOH ses operatörü",
        "Front of house engineer mixing live concert audio",
        "Звукорежиссер FOH на живом концерте",
        "FOH 调音师在演唱会现场实时调音",
        "مهندس صوت FOH يدير الصوت في حفل حي",
        "Tontechniker beim Mischen eines Konzerts am FOH-Platz"
      ),
    },
    {
      src: "/img/ses-isik/6.webp",
      alt: alt(
        "Beam ışıklar ve sis efektiyle sahne arkası LED wall",
        "Stage backdrop LED wall with beam lights and haze",
        "LED-задник сцены с beam-светом и дымкой",
        "舞台背景LED墙，配光束灯与烟雾效果",
        "جدار LED خلفي مع أضواء beam وضباب",
        "LED-Rückwand der Bühne mit Beam-Scheinwerfern und Hazer"
      ),
    },
    {
      src: "/img/ses-isik/7.webp",
      alt: alt(
        "DMX programlama arayüzlü ışık kontrol masası",
        "Lighting control desk with DMX programming interface",
        "Световой пульт с интерфейсом программирования DMX",
        "灯光控制台，配DMX编程界面",
        "طاولة تحكم إضاءة بواجهة برمجة DMX",
        "Lichtpult mit DMX-Programmierung"
      ),
    },
    {
      src: "/img/ses-isik/8.webp",
      alt: alt(
        "Büyük açık hava etkinliği için delay tower hoparlör dizisi",
        "Delay tower speaker arrays for large outdoor event",
        "Массивы delay tower для крупного open-air события",
        "大型户外活动的延时塔音响阵列",
        "مصفوفات مكبرات delay tower لفعالية خارجية كبيرة",
        "Delay-Türme mit Lautsprecherarrays für eine Großveranstaltung"
      ),
    },
  ],

  tent: [
    {
      src: "/img/cadir/1.webp",
      alt: alt(
        "Pagoda yapılı profesyonel çadır kurulumu",
        "Professional tent installation with pagoda structure and event setup",
        "Профессиональный монтаж шатра с конструкцией pagoda",
        "专业篷房搭建，采用尖顶篷结构",
        "تركيب خيمة احترافية بهيكل pagoda",
        "Aufbau eines Eventzelts in Pagodenbauweise mit kompletter Ausstattung"
      ),
    },
    {
      src: "/img/cadir/2.webp",
      alt: alt(
        "Davet ve karşılama alanı için pagoda çadır kurulumu",
        "Pagoda tent installation for a reception and welcome area",
        "Шатер pagoda для приема и welcome-зоны",
        "用于接待与迎宾区的尖顶篷搭建",
        "خيمة pagoda لمنطقة استقبال وترحيب",
        "Pagodenzelt als Empfangs- und Willkommensbereich"
      ),
    },
    {
      src: "/img/cadir/3.webp",
      alt: alt(
        "Sürükleyici atmosfer yaratan şeffaf dome çadır",
        "Transparent dome tent creating an immersive atmosphere",
        "Прозрачный dome-шатер с иммерсивной атмосферой",
        "透明球形篷，营造沉浸式氛围",
        "خيمة قبة شفافة تخلق أجواء غامرة",
        "Transparentes Kuppelzelt für eine immersive Atmosphäre"
      ),
    },
    {
      src: "/img/cadir/4.webp",
      alt: alt(
        "Depolama ve prodüksiyon alanı sağlayan endüstriyel çadır",
        "Industrial tent setup providing storage and production space",
        "Индустриальный шатер под склад и продакшн-зону",
        "工业篷房，提供仓储与制作空间",
        "خيمة صناعية توفر مساحة تخزين وإنتاج",
        "Industriezelt als Lager- und Produktionsfläche"
      ),
    },
    {
      src: "/img/cadir/5.webp",
      alt: alt(
        "Fuar sunumları için hazırlanmış sergi çadırı",
        "Exhibition tent prepared for professional fair presentations",
        "Выставочный шатер, подготовленный к презентациям",
        "为专业展会演示准备的展览篷房",
        "خيمة معارض مجهزة لعروض المعارض الاحترافية",
        "Ausstellungszelt, vorbereitet für Messepräsentationen"
      ),
    },
    {
      src: "/img/cadir/6.webp",
      alt: alt(
        "Akşam etkinlikleri için LED aydınlatmalı çadır atmosferi",
        "LED-lit tent ambience for evening events",
        "Шатер с LED-подсветкой для вечерних мероприятий",
        "配LED照明的篷房氛围，适合夜间活动",
        "أجواء خيمة مضاءة بـ LED للفعاليات المسائية",
        "Zeltbeleuchtung mit LED-Technik für Abendveranstaltungen"
      ),
    },
    {
      src: "/img/cadir/7.webp",
      alt: alt(
        "Açık hava etkinlikleri için konser çadırı çözümü",
        "Concert tent solution for outdoor events",
        "Шатровое решение для концертов на открытом воздухе",
        "用于户外活动的演出篷房方案",
        "حل خيمة حفلات للفعاليات الخارجية",
        "Zeltlösung für ein Open-Air-Konzert"
      ),
    },
    {
      src: "/img/cadir/8.webp",
      alt: alt(
        "Çadır yapısını kuran montaj ekibi",
        "Installation crew assembling a tent structure",
        "Монтажная бригада собирает конструкцию шатра",
        "安装团队正在搭建篷房结构",
        "فريق التركيب يجمع هيكل الخيمة",
        "Aufbaucrew bei der Montage einer Zeltkonstruktion"
      ),
    },
  ],

  corporate: [
    {
      src: "/img/kurumsal/1.webp",
      alt: alt(
        "LED ekranlı kurumsal konferans sahnesi",
        "Corporate conference stage with LED screen",
        "Корпоративная конференц-сцена с LED-экраном",
        "配LED屏幕的企业会议舞台",
        "مسرح مؤتمر مؤسسي مع شاشة LED",
        "Konferenzbühne mit LED-Wand bei einer Firmenveranstaltung"
      ),
    },
    {
      src: "/img/kurumsal/2.webp",
      alt: alt(
        "Kurumsal etkinlikte konuşmacı sahnesi",
        "Speaker stage at a corporate event",
        "Сцена для спикеров на корпоративном мероприятии",
        "企业活动中的演讲嘉宾舞台",
        "منصة المتحدثين في فعالية مؤسسية",
        "Rednerbühne bei einer Firmenveranstaltung"
      ),
    },
    {
      src: "/img/kurumsal/3.webp",
      alt: alt(
        "Işık tasarımlı kurumsal gala sahnesi",
        "Corporate gala stage with lighting design",
        "Сцена корпоративного gala со световым дизайном",
        "企业晚宴舞台，配灯光设计",
        "مسرح حفل مؤسسي مع تصميم إضاءة",
        "Galabühne mit Lichtdesign für ein Unternehmensevent"
      ),
    },
    {
      src: "/img/kurumsal/4.webp",
      alt: alt(
        "Kurumsal toplantı sahnesi ve katılımcı alanı",
        "Corporate meeting stage and audience area",
        "Сцена корпоративной встречи и зона гостей",
        "企业会议舞台与观众区",
        "مسرح اجتماع مؤسسي ومنطقة الحضور",
        "Bühne und Zuschauerbereich einer Firmentagung"
      ),
    },
    {
      src: "/img/kurumsal/5.webp",
      alt: alt(
        "Profesyonel kurumsal etkinlik konferans sahnesi kurulumu",
        "Professional corporate event - conference stage and event setup",
        "Профессиональная корпоративная конференц-сцена",
        "专业企业活动——会议舞台与现场布置",
        "فعالية مؤسسية احترافية - مسرح مؤتمر وتجهيز الموقع",
        "Firmenveranstaltung mit Konferenzbühne und vollständigem Aufbau"
      ),
    },
    {
      src: "/img/kurumsal/6.webp",
      alt: alt(
        "Konferans etkinliği için sahne ve LED ekran kurulumu",
        "Conference event - professional stage and LED screen installation",
        "Конференция - сцена и монтаж LED-экрана",
        "会议活动——专业舞台与LED屏幕搭建",
        "فعالية مؤتمر - مسرح احترافي وتركيب شاشة LED",
        "Kongress mit professioneller Bühne und LED-Wand"
      ),
    },
    {
      src: "/img/kurumsal/7.webp",
      alt: alt(
        "Ürün lansmanında etkileyici görsel şov ve sahne tasarımı",
        "Product launch - striking visual show and stage design",
        "Запуск продукта - визуальное шоу и дизайн сцены",
        "新品发布——震撼视觉演出与舞台设计",
        "إطلاق منتج - عرض بصري لافت وتصميم مسرح",
        "Produktlaunch mit auffälliger Visual-Show und Bühnenbild"
      ),
    },
    {
      src: "/img/kurumsal/8.webp",
      alt: alt(
        "Gala gecesinde zarif dekorasyon ve ışık tasarımı",
        "Gala event - elegant decoration and lighting design",
        "Gala - элегантный декор и световое оформление",
        "晚宴活动——优雅装饰与灯光设计",
        "حفل gala - ديكور أنيق وتصميم إضاءة",
        "Galaabend mit elegantem Dekor und Lichtdesign"
      ),
    },
  ],
};

// Kategoriler arası "en iyi kareler" seçkisi — projeler/hizmetler sayfaları için.
const FEATURED_REFS = [
  ["corporate", 0],
  ["led", 0],
  ["stage", 0],
  ["tent", 2],
  ["sound-light", 2],
  ["corporate", 6],
  ["led", 3],
  ["stage", 2],
  ["tent", 5],
  ["sound-light", 1],
  ["corporate", 2],
  ["led", 4],
];

function localizeImage(image, locale) {
  return {
    src: image.src,
    alt: image.alt[locale] ?? image.alt[FALLBACK_LOCALE],
  };
}

/**
 * Bir hizmet kategorisinin görsellerini istenen dilde döndürür.
 * @param {keyof typeof PORTFOLIO_CATEGORIES} category
 * @param {string} locale
 */
export function getPortfolioImages(category, locale = "tr") {
  const images = PORTFOLIO_CATEGORIES[category];
  if (!images) return [];
  return images.map((image) => localizeImage(image, locale));
}

/** Kategorilerden derlenmiş karma seçki. */
export function getFeaturedPortfolio(locale = "tr", limit = FEATURED_REFS.length) {
  return FEATURED_REFS.slice(0, limit)
    .map(([category, index]) => PORTFOLIO_CATEGORIES[category]?.[index])
    .filter(Boolean)
    .map((image) => localizeImage(image, locale));
}

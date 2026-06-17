import Image from "next/image";
import Link from "next/link";

import JsonLdScript from "@/components/seo/JsonLd";
import {
  COMPANY_PROFILE_PDF_URL,
  INTERNATIONAL_EVENT_HERO_IMAGE,
  buildInternationalEventJsonLd,
  getInternationalEventContent,
  getInternationalEventWhatsappUrl,
} from "@/lib/internationalEventProduction";

const VISUAL_REFERENCES = {
  en: {
    title: "Selected event production references in Turkey",
    text:
      "A visual selection from large-scale stage, LED screen, sound, lighting, truss, corporate, protocol and esports event productions delivered by Sahneva.",
    servicesLabel: "Related production services",
    cards: [
      ["Open-Air Concert LED Stage", "Large outdoor LED surfaces, stage lighting and audience-facing screen operation for concert and festival fields.", "Outdoor LED", "/img/led/acik-hava-konser-led-ekran-sahneva.webp", "Open-air concert LED screen stage production in Turkey"],
      ["Hybrid Product Launch LED Wall", "LED wall, stage design and brand presentation flow for product launch and hybrid corporate event formats.", "Launch", "/img/led/led-wall-urun-lansmani-hybrid-sahneva.webp", "Hybrid product launch LED wall stage design"],
      ["Corporate Gala Video Wall", "Indoor video wall, stage lighting and live performance setup for gala and executive event environments.", "Gala", "/img/led/gala-led-sahne-video-wall-sahneva.webp", "Corporate gala video wall and stage lighting"],
      ["Hall Lighting Setup", "Architectural hall lighting, stage ambience and pre-event installation control for indoor corporate venues.", "Lighting", "/img/kurumsal/premium/salon-isik-kurulumu.webp", "Corporate hall lighting installation for event production"],
      ["Outdoor Truss Stage", "Truss structure, roof line and technical carrier system prepared for outdoor stage and show equipment loads.", "Truss", "/img/kurumsal/premium/truss-outdoor-sahne.webp", "Outdoor truss stage structure for event production"],
      ["Wide Conference Hall", "Large meeting hall setup with LED screen, stage focus and technical planning for international business events.", "Congress", "/img/blog/12-eglenceli-kurumsal-etkinlik-fikri/genis-konferans-salonu.webp", "Wide conference hall with LED screen for corporate event"],
    ],
    wideTitle: "Built for conferences, launches, festivals and esports",
    wideCards: [
      ["International congresses and protocol events", "Venue access, protocol flow, stage visibility and multilingual communication are planned before the technical load-in."],
      ["Brand launches and corporate stages", "LED wall, stage design, show lighting and speaker flow are shaped around the brand message and audience focus."],
      ["Sports and esports productions", "Player desks, arena lighting, LED-heavy show stages and technical crew coordination are prepared as one field operation."],
    ],
  },
  tr: {
    title: "Türkiye’de gerçekleştirdiğimiz seçili etkinlik prodüksiyonları",
    text:
      "Sahneva’nın büyük ölçekli sahne, LED ekran, ses, ışık, truss, kurumsal, protokol ve e-spor etkinlik prodüksiyonlarından seçilmiş görsel referanslar.",
    servicesLabel: "İlgili prodüksiyon hizmetleri",
    cards: [
      ["Açık Hava Konser LED Sahnesi", "Konser ve festival alanları için büyük LED yüzeyler, sahne ışığı ve izleyiciye dönük ekran operasyonu.", "Outdoor LED", "/img/led/acik-hava-konser-led-ekran-sahneva.webp", "Açık hava konser LED ekran sahne prodüksiyonu"],
      ["Hibrit Ürün Lansmanı LED Wall", "Ürün lansmanı ve hibrit kurumsal etkinlik formatları için LED wall, sahne tasarımı ve marka sunum akışı.", "Lansman", "/img/led/led-wall-urun-lansmani-hybrid-sahneva.webp", "Hibrit ürün lansmanı LED wall sahne tasarımı"],
      ["Kurumsal Gala Video Wall", "Gala ve üst düzey davet ortamları için iç mekan video wall, sahne ışığı ve canlı performans düzeni.", "Gala", "/img/led/gala-led-sahne-video-wall-sahneva.webp", "Kurumsal gala video wall ve sahne ışığı kurulumu"],
      ["Salon Işık Kurulumu", "Kapalı kurumsal mekanlarda mimari ışık, sahne ambiyansı ve etkinlik öncesi kurulum kontrolü.", "Işık", "/img/kurumsal/premium/salon-isik-kurulumu.webp", "Kurumsal etkinlik salon ışık kurulumu"],
      ["Açık Hava Truss Sahne", "Açık hava sahnesi ve teknik ekipman yükleri için hazırlanan truss yapı, çatı hattı ve taşıyıcı sistem.", "Truss", "/img/kurumsal/premium/truss-outdoor-sahne.webp", "Açık hava truss sahne taşıyıcı sistem kurulumu"],
      ["Geniş Konferans Salonu", "Uluslararası iş etkinlikleri için LED ekran, sahne odağı ve teknik planlama içeren geniş toplantı salonu.", "Kongre", "/img/blog/12-eglenceli-kurumsal-etkinlik-fikri/genis-konferans-salonu.webp", "Kurumsal etkinlik için geniş konferans salonu LED ekran kurulumu"],
    ],
    wideTitle: "Kongre, lansman, festival ve e-spor etkinlikleri için hazır teknik ekip",
    wideCards: [
      ["Uluslararası kongreler ve protokol etkinlikleri", "Mekan erişimi, protokol akışı, sahne görünürlüğü ve çok dilli iletişim teknik yükleme öncesinde planlanır."],
      ["Marka lansmanları ve kurumsal sahneler", "LED wall, sahne tasarımı, sahne ışığı ve konuşmacı akışı marka mesajına ve izleyici odağına göre kurgulanır."],
      ["Spor ve e-spor prodüksiyonları", "Oyuncu masaları, arena ışığı, LED ağırlıklı sahneler ve teknik ekip koordinasyonu tek saha operasyonu olarak hazırlanır."],
    ],
  },
  ar: {
    title: "مراجع مختارة من إنتاج الفعاليات في تركيا",
    text:
      "نماذج بصرية من مشاريع Sahneva في المسرح، شاشات LED، الصوت، الإضاءة، هياكل التعليق، الفعاليات المؤسسية، البروتوكول والرياضات الإلكترونية في تركيا.",
    servicesLabel: "خدمات إنتاج مرتبطة",
    cards: [
      ["نهائيات PUBG / PMGC للرياضات الإلكترونية", "شاشات LED كبيرة، إضاءة مسرحية، مناطق لاعبين وتنفيذ تقني مناسب للصالات الكبيرة.", "رياضات إلكترونية", "/img/blog/kurumsal-etkinlik-hero.webp", "إنتاج مسرح وشاشات LED لنهائي رياضات إلكترونية في تركيا"],
      ["مسرح جالا مؤسسي", "شاشة LED داخلية، إضاءة مسرحية وإعداد أداء حي لأجواء فعالية مؤسسية واضحة.", "مؤسسي", "/img/kurumsal/kurumsal-sahne-led-ekran.webp", "مسرح جالا مؤسسي مع شاشة LED وإضاءة"],
      ["المسرح الرئيسي لمهرجان خارجي", "مسرح خارجي كبير مع شاشات LED، نظام صوت خطي، هياكل تعليق وتشغيل ميداني.", "مهرجان", "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-ana-sahne-teknik-produksiyon-hero.webp", "إنتاج تقني لمسرح مهرجان خارجي في تركيا"],
      ["تشغيل تقني خلف المسرح", "توجيه الإشارة، معدات الصوت، نقاط الربط، الطاقة والتحكم التقني خلف المسرح.", "خلف المسرح", "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-backstage-ses-rack-altyapisi.webp", "تشغيل تقني خلف المسرح للفعالية"],
      ["شاشات LED وتدفق المحتوى", "شاشات رئيسية وجانبية وتدفق محتوى مخطط لظهور الرعاة وتأثير الجمهور.", "LED", "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-dev-led-ekran-goruntu-sistemi.webp", "شاشة LED كبيرة وتدفق محتوى بصري"],
      ["نظام صوت خطي", "تخطيط صوتي للجمهور الكبير والمراحل الخارجية ومناطق الأداء الحي.", "صوت", "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-line-array-ses-sistemi-detayi.webp", "نظام صوت خطي لمسرح خارجي"],
    ],
    wideTitle: "جاهزون للمؤتمرات والإطلاقات والمهرجانات والرياضات الإلكترونية",
    wideCards: [
      ["مؤتمرات دولية وفعاليات بروتوكول", "نخطط الوصول إلى الموقع، تدفق البروتوكول، وضوح المسرح والتواصل متعدد اللغات قبل دخول المعدات."],
      ["إطلاقات علامات ومراحل مؤسسية", "يتم ربط شاشة LED، تصميم المسرح، الإضاءة ورسائل العلامة ضمن خطة واحدة."],
      ["إنتاج الرياضة والرياضات الإلكترونية", "مناطق اللاعبين، إضاءة الصالة، مراحل LED والفريق التقني تدار كعملية ميدانية واحدة."],
    ],
  },
  ru: {
    title: "Избранные референсы технического продакшена в Турции",
    text:
      "Визуальная подборка проектов Sahneva: сцена, LED-экраны, звук, свет, ферменные конструкции, корпоративные, протокольные и киберспортивные события в Турции.",
    servicesLabel: "Связанные технические услуги",
    cards: [
      ["Финал PUBG / PMGC по киберспорту", "Большие LED-поверхности, сценический свет, зоны игроков и техническое обеспечение для крупного зала.", "Киберспорт", "/img/blog/kurumsal-etkinlik-hero.webp", "Сцена и LED-экраны для киберспортивного финала в Турции"],
      ["Корпоративная гала-сцена", "Внутренний LED-экран, сценический свет и подготовка живого выступления для корпоративного события.", "Корпоративное", "/img/kurumsal/kurumsal-sahne-led-ekran.webp", "Корпоративная гала-сцена с LED-экраном и светом"],
      ["Главная сцена open-air фестиваля", "Большая открытая сцена с LED-экранами, линейным звуком, ферменными конструкциями и полевой технической работой.", "Фестиваль", "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-ana-sahne-teknik-produksiyon-hero.webp", "Технический продакшен главной сцены фестиваля в Турции"],
      ["Техническая работа за сценой", "Маршрутизация сигнала, звуковые стойки, патч, питание и технический контроль за сценой.", "За сценой", "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-backstage-ses-rack-altyapisi.webp", "Техническая работа за сценой и звуковая инфраструктура"],
      ["LED-экраны и визуальный контент", "Главные и боковые LED-экраны с заранее спланированным потоком контента для видимости бренда и реакции аудитории.", "LED", "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-dev-led-ekran-goruntu-sistemi.webp", "Большой LED-экран и поток визуального контента"],
      ["Линейная звуковая система", "Звуковое планирование для большой аудитории, открытых сцен и зон живого выступления.", "Звук", "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-line-array-ses-sistemi-detayi.webp", "Линейная звуковая система для открытой сцены"],
    ],
    wideTitle: "Для конференций, запусков, фестивалей и киберспорта",
    wideCards: [
      ["Международные конгрессы и протокольные события", "Доступ к площадке, протокольный сценарий, видимость сцены и многоязычная коммуникация планируются до завоза оборудования."],
      ["Запуски брендов и корпоративные сцены", "LED-экран, дизайн сцены, свет и поток выступающих связываются с сообщением бренда."],
      ["Спортивные и киберспортивные проекты", "Столы игроков, свет в зале, LED-сцены и техническая команда готовятся как единая полевая операция."],
    ],
  },
};

const ARTICLE_SECTIONS = {
  en: [
    ["Reliable partner for international companies planning events in Turkey", "Turkey is a strong event destination for companies coming from Europe, the Middle East and global markets. Istanbul, Antalya, Izmir, Ankara and Bodrum host fairs, congresses, launches, corporate meetings, concerts, sports events and private brand experiences. For an international team, the main need is a local production partner who can connect venue realities with technical expectations.", "Sahneva works as that local event production partner in Turkey. We support international companies, agencies and brand teams with stage, LED screen, sound, lighting, truss, tent, technical crew, logistics, setup, show-day operation and dismantling."],
    ["Turnkey event and technical production from one point", "For companies arriving from abroad, sourcing each service separately can create timing gaps and communication risk. Sahneva brings stage, podium, LED screen, sound system, lighting system, truss, tent, crew and site operation under one coordinated production scope.", "Our aim is not only equipment rental. We help companies planning events in Turkey work with a field team that owns the technical process and keeps the operation clear before, during and after the event."],
    ["Local partner for European agencies and global brands", "European event agencies often manage projects in Turkey on behalf of their own clients. In these projects, timing, technical capacity, quality control and communication matter. Sahneva can work like the Turkey-side field team of the agency.", "We receive the brief, analyze the technical scope, prepare the equipment and installation plan, manage setup on site and complete dismantling after the event. This helps international teams avoid losing time searching for separate suppliers in Turkey."],
    ["Main service areas", "Stage and podium systems, LED screen rental and setup, sound systems, show lighting, truss and rigging, tent and outdoor event structures, fair and congress technical infrastructure, backstage areas, brand zones, technical crew, setup, show operation and dismantling can be planned depending on the project scope."],
    ["Service across Istanbul, Antalya, Izmir, Ankara and Turkey", "Sahneva supports event projects in different Turkish cities. Istanbul, Antalya, Izmir, Ankara, Bodrum, Bursa, Konya and Adana can be planned for corporate events, fairs, congresses, festivals and special projects. City logistics, technical preparation and site coordination are evaluated together."],
    ["Why work with a local event partner in Turkey?", "The right local team saves time, keeps costs more controlled, reduces technical risk and provides faster field response. Local venue experience, technical equipment support, one-point communication, quick quote preparation, fair, congress, concert, launch and corporate event experience all become part of the production value."],
    ["From event brief to dismantling", "The process starts with project brief and needs analysis. Then technical planning, quotation, logistics, setup, event-day technical support, dismantling and site handover are handled in sequence. This structure helps international teams see the whole Turkey-side operation before the event starts."],
    ["Planning an event in Turkey?", "If you are planning an event, fair, congress, launch or private brand project in Turkey, Sahneva can be your local event production partner. Share your project details to receive a clear scope for stage, LED screen, sound, lighting, truss, tent and technical production needs."],
  ],
  tr: [
    ["Türkiye’de Etkinlik Yapacak Uluslararası Firmalar İçin Güvenilir Çözüm Ortağı", "Türkiye; İstanbul, Antalya, İzmir, Ankara ve Bodrum gibi güçlü destinasyonlarıyla Avrupa’dan, Orta Doğu’dan ve dünyanın farklı bölgelerinden gelen markalar için önemli bir etkinlik merkezidir. Fuarlar, kongreler, lansmanlar, kurumsal toplantılar, konserler, spor organizasyonları ve özel marka etkinlikleri için Türkiye hem lokasyon avantajı hem de güçlü hizmet altyapısı sunar.", "Ancak yabancı bir firma için Türkiye’de etkinlik organize etmek her zaman kolay değildir. Yerel tedarikçileri bulmak, teknik ekipmanları doğru planlamak, sahada güvenilir ekiplerle çalışmak, kurulum ve söküm süreçlerini zamanında yönetmek ciddi bir koordinasyon ister. Sahneva olarak Türkiye’de etkinlik düzenlemek isteyen uluslararası firmalar, ajanslar, marka temsilcileri ve organizasyon şirketleri için yerel çözüm ortağı olarak hizmet veriyoruz."],
    ["Türkiye’de Tek Noktadan Etkinlik ve Teknik Prodüksiyon Hizmeti", "Yurt dışından gelen firmalar için en büyük ihtiyaçlardan biri, farklı hizmetleri ayrı ayrı tedarik etmek yerine tüm süreci tek bir güvenilir ekip üzerinden yönetebilmektir.", "Sahneva; sahne, podyum, LED ekran, ses sistemi, ışık sistemi, truss, çadır, teknik ekip, kurulum, söküm ve saha operasyonu gibi birçok hizmeti tek çatı altında sunar. Amacımız yalnızca ekipman kiralamak değil; Türkiye’de etkinlik yapmak isteyen firmalara sahada güvenilir bir operasyon partneri olmaktır."],
    ["Uluslararası Ajanslar ve Markalar İçin Yerel Partner", "Avrupa’dan veya farklı ülkelerden gelen etkinlik ajansları çoğu zaman Türkiye’de kendi müşterileri adına proje yürütür. Bu projelerde zamanlama, kalite, teknik yeterlilik ve iletişim çok önemlidir.", "Sahneva olarak yabancı ajansların Türkiye’deki saha ekibi gibi çalışırız. Proje özetini alır, teknik ihtiyaçları analiz eder, uygun ekipman ve kurulum planını hazırlar, sahada kurulumu yönetir ve etkinlik sonunda söküm sürecini tamamlarız."],
    ["Hizmet Verdiğimiz Başlıca Alanlar", "Sahne ve podyum sistemleri, LED ekran kiralama ve kurulum, ses sistemi ve canlı yayın ses çözümleri, ışık sistemi ve sahne ışığı tasarımı, truss sistemleri, askı ve taşıyıcı çözümler, çadır ve açık hava etkinlik çözümleri, fuar, kongre ve lansman teknik altyapısı, kulis alanları, karşılama alanı, marka alanı kurulumu, teknik personel ve saha operasyon desteği proje kapsamına göre planlanabilir."],
    ["İstanbul, Antalya, İzmir, Ankara ve Türkiye Genelinde Hizmet", "Sahneva, Türkiye’nin farklı şehirlerinde etkinlik projeleri için çözüm üretir. İstanbul başta olmak üzere Antalya, İzmir, Ankara, Bodrum, Bursa, Konya, Adana ve diğer şehirlerde kurumsal etkinlikler, fuarlar, kongreler, festivaller ve özel projeler için destek sağlayabiliriz.", "Yurt dışından gelen firmalar için şehir fark etmeksizin en önemli konu, sahada hızlı hareket eden ve süreci doğru yöneten bir ekip ile çalışmaktır. Bu nedenle her projede planlama, lojistik, teknik hazırlık ve saha koordinasyonu birlikte değerlendirilir."],
    ["Neden Türkiye’de Yerel Bir Etkinlik Partneri ile Çalışmalısınız?", "Türkiye’de etkinlik düzenlemek isteyen yabancı firmalar için yerel partner seçimi projenin başarısını doğrudan etkiler. Doğru yerel ekip; zaman kazandırır, maliyetleri daha kontrollü hale getirir, teknik riskleri azaltır ve sahada hızlı çözüm üretir.", "Türkiye’de yerel saha tecrübesi, teknik ekipman ve kurulum desteği, tek noktadan iletişim, hızlı teklif ve proje planlama, fuar, kongre, konser, lansman ve kurumsal etkinlik deneyimi Sahneva’nın bu sayfadaki temel vaadidir."],
    ["Hangi Etkinlikler İçin Çözüm Sunuyoruz?", "Uluslararası kongreler, fuar ve stand etkinlikleri, kurumsal toplantılar, marka lansmanları, gala ve özel davetler, konser ve festival sahneleri, spor etkinlikleri, e-spor turnuvaları, arena prodüksiyonları, açık hava organizasyonları, basın toplantıları, AVM ve meydan etkinlikleri, üniversite ve kamu etkinlikleri için teknik prodüksiyon kapsamı oluşturabiliriz."],
    ["Etkinlik Öncesinden Söküme Kadar Yanınızdayız", "Proje özeti ve ihtiyaç analiziyle başlayan süreç; teknik planlama ve teklif, lojistik ve kurulum, etkinlik süreci teknik destek, söküm ve alan teslimi adımlarıyla ilerler. Bu yapı, uluslararası ekiplerin Türkiye tarafındaki prodüksiyon akışını net görmesini sağlar."],
    ["Türkiye’de Etkinlik Yapmayı Planlıyorsanız", "Türkiye’de bir etkinlik, fuar, kongre, lansman veya özel marka organizasyonu planlıyorsanız, Sahneva sizin için güvenilir bir yerel çözüm ortağı olabilir. Projenizin detaylarını bizimle paylaşarak sahne, LED ekran, ses, ışık, truss, çadır ve teknik prodüksiyon ihtiyaçlarınız için teklif alabilirsiniz.", "Sahneva, uluslararası firmalar için Türkiye’de yalnızca bir tedarikçi değil; sahada işi sahiplenen, süreci takip eden ve etkinliğin başarılı şekilde tamamlanması için çalışan bir çözüm ortağıdır."],
  ],
  ar: [
    ["شريك محلي موثوق للشركات الدولية في تركيا", "تركيا مركز مهم للفعاليات القادمة من أوروبا والشرق الأوسط والأسواق العالمية. إسطنبول، أنطاليا، إزمير، أنقرة وبودروم تستضيف المؤتمرات، المعارض، الإطلاقات، الاجتماعات المؤسسية، الحفلات والفعاليات الرياضية.", "تعمل Sahneva كشريك إنتاج محلي يساعد الشركات والوكالات على تحويل المتطلبات التقنية إلى خطة ميدانية واضحة تشمل المسرح، شاشات LED، الصوت، الإضاءة، هياكل التعليق، الخيام والفريق التقني."],
    ["تنفيذ تقني من نقطة واحدة", "بدلاً من التعامل مع موردين متعددين، يمكن تخطيط المسرح، البوديوم، شاشات LED، الصوت، الإضاءة، الخيام، اللوجستيات والتفكيك ضمن نطاق إنتاج واحد.", "الهدف ليس تأجير المعدات فقط، بل إدارة العملية التقنية في تركيا قبل الفعالية وأثناءها وبعدها."],
    ["دعم للوكالات الأوروبية والعلامات العالمية", "نستلم ملخص المشروع، نحلل الاحتياجات التقنية، نجهز خطة المعدات والتركيب، ندير الفريق في الموقع ونكمل عملية التفكيك بعد الفعالية.", "هذا يمنح الفرق الدولية شريكاً ميدانياً محلياً بدلاً من البحث عن موردين منفصلين."],
    ["أنواع الفعاليات", "ندعم المؤتمرات الدولية، المعارض، الفعاليات المؤسسية، إطلاق المنتجات، الجالا، الحفلات، المهرجانات، الفعاليات الرياضية، بطولات الرياضات الإلكترونية، إنتاج الصالات الكبيرة والفعاليات الخارجية."],
    ["من التخطيط إلى التسليم", "تبدأ العملية بتحليل الاحتياج، ثم التخطيط التقني والعرض، اللوجستيات والتركيب، دعم يوم الفعالية، التفكيك وتسليم الموقع."],
  ],
  ru: [
    ["Надежный локальный партнер для международных компаний", "Турция является сильным направлением для компаний из Европы, Ближнего Востока и других регионов. Стамбул, Анталья, Измир, Анкара и Бодрум подходят для выставок, конгрессов, запусков, корпоративных встреч, концертов, спортивных и брендовых событий.", "Sahneva работает как локальный технический партнер в Турции и помогает связать ожидания международной команды с реальностью площадки."],
    ["Техническое обеспечение из одной точки", "Сцена, подиум, LED-экран, звук, свет, ферменные конструкции, шатры, техническая команда, логистика, монтаж, работа в день события и демонтаж планируются как единый объем работ.", "Это не только аренда оборудования. Это полевая команда, которая берет ответственность за технический процесс."],
    ["Партнер для европейских агентств и глобальных брендов", "Мы принимаем проектное задание, анализируем технический объем, готовим оборудование и план монтажа, управляем работой на площадке и завершаем демонтаж после события.", "Так международная команда не теряет время на поиск отдельных поставщиков в Турции."],
    ["Какие события мы поддерживаем", "Международные конгрессы, выставки, корпоративные встречи, запуски брендов, гала, концерты, фестивали, спортивные мероприятия, киберспортивные турниры, аренные проекты, открытые мероприятия и публичные события."],
    ["От проектного задания до сдачи площадки", "Процесс включает анализ потребностей, техническое планирование, коммерческое предложение, логистику, монтаж, поддержку в день события, демонтаж и передачу площадки."],
  ],
};

const ARTICLE_SIDE_IMAGES = [
  ["/img/led/acik-hava-konser-led-ekran-sahneva.webp", "Open-air LED screen stage production"],
  ["/img/led/led-wall-urun-lansmani-hybrid-sahneva.webp", "LED wall product launch stage production"],
  ["/img/kurumsal/premium/truss-outdoor-sahne.webp", "Outdoor truss stage technical production"],
  ["/img/kurumsal/premium/salon-isik-kurulumu.webp", "Indoor hall lighting setup for corporate event"],
  ["/img/blog/kurumsal-etkinlik-led-ekran-sahne.webp", "Corporate LED screen stage setup"],
  ["/img/blog/12-eglenceli-kurumsal-etkinlik-fikri/genis-konferans-salonu.webp", "Wide conference hall stage and LED screen"],
  ["/img/blog/12-eglenceli-kurumsal-etkinlik-fikri/kurumsal-led-dijital-enstalasyon.webp", "Corporate digital LED installation"],
  ["/img/led/gala-led-sahne-video-wall-sahneva.webp", "Corporate gala video wall stage"],
  ["/img/kurumsal/premium/kurumsal-organizasyon-hero-mobile.webp", "Corporate conference stage production"],
];

const focusVisibleRing =
  "focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";
const focusVisibleRingLight =
  "focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const serviceLinks = {
  en: [
    ["/en/stage-rental", "Stage Rental"],
    ["/en/led-screen-rental", "LED Screen Rental"],
    ["/en/sound-light-rental", "Sound & Light Rental"],
    ["/en/truss-rental", "Truss Rental"],
    ["/en/tent-rental", "Tent Rental"],
    ["/en/corporate-events", "Corporate Events"],
  ],
  tr: [
    ["/sahne-kiralama", "Sahne Kiralama"],
    ["/led-ekran-kiralama", "LED Ekran Kiralama"],
    ["/ses-isik-sistemleri", "Ses & Işık Sistemleri"],
    ["/truss-kiralama", "Truss Kiralama"],
    ["/cadir-kiralama", "Çadır Kiralama"],
    ["/kurumsal-organizasyon", "Kurumsal Organizasyon"],
  ],
  ar: [["/ar/services", "خدماتنا"], ["/ar/projects", "المشاريع"], ["/ar/contact", "تواصل معنا"]],
  ru: [
    ["/ru/stage-rental", "Аренда сцены"],
    ["/ru/led-screen-rental", "Аренда LED-экранов"],
    ["/ru/sound-light-rental", "Звук и свет"],
    ["/ru/tent-rental", "Аренда шатров"],
    ["/ru/corporate-events", "Корпоративные события"],
  ],
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionHeading({ eyebrow, title, text, align = "center", dark = false }) {
  return (
    <div className={cn("mx-auto max-w-4xl", align === "center" ? "text-center" : "")}>
      {eyebrow ? (
        <p className={cn("text-sm font-black uppercase tracking-[0.22em]", dark ? "text-cyan-200" : "text-blue-700")}>{eyebrow}</p>
      ) : null}
      <h2 className={cn("mt-3 text-3xl font-black tracking-tight md:text-5xl", dark ? "text-white" : "text-slate-950")}>{title}</h2>
      {text ? <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-white/[0.72]" : "text-slate-600")}>{text}</p> : null}
    </div>
  );
}

function PdfButton({ content, className }) {
  return (
    <a
      href={COMPANY_PROFILE_PDF_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={content.pdfAria}
      className={cn(className, focusVisibleRing)}
    >
      {content.pdfCta}
    </a>
  );
}

export default function EventProductionPartnerPage({ locale }) {
  const content = getInternationalEventContent(locale);
  const visuals = VISUAL_REFERENCES[locale] ?? VISUAL_REFERENCES.en;
  const articleSections = ARTICLE_SECTIONS[locale] ?? ARTICLE_SECTIONS.en;
  const whatsappUrl = getInternationalEventWhatsappUrl(locale);
  const isRtl = locale === "ar";

  return (
    <>
      <JsonLdScript id={`international-event-production-${locale}`} data={buildInternationalEventJsonLd(locale)} />
      <main dir={isRtl ? "rtl" : undefined} className="overflow-hidden bg-white text-slate-950">
        <section className="relative min-h-[620px] overflow-hidden bg-slate-950 text-white md:min-h-[760px]">
          <Image
            src={INTERNATIONAL_EVENT_HERO_IMAGE}
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.34),transparent_32%),linear-gradient(90deg,rgba(2,6,23,0.96),rgba(15,23,42,0.72),rgba(2,6,23,0.94))]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:48px_48px] opacity-25" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-32">
            <div>
              <div className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-200/10 px-5 py-2 text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
                {content.eyebrow}
              </div>
              <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">{content.h1}</h1>
              <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/[0.78] md:text-2xl">{content.intro}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={cn("inline-flex min-h-[52px] items-center justify-center rounded-full bg-emerald-500 px-7 font-black text-slate-950 shadow-[0_18px_44px_rgba(16,185,129,0.32)] transition hover:bg-emerald-400", focusVisibleRing)}>
                  {content.primaryCta}
                </a>
                <Link href={content.final.contactHref} className={cn("inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 font-black text-white transition hover:bg-white/15", focusVisibleRing)}>
                  {content.secondaryCta}
                </Link>
                <PdfButton content={content} className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-200/10 px-7 font-black text-cyan-100 transition hover:bg-cyan-200/15" />
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/14 bg-white/[0.08] p-6 shadow-2xl backdrop-blur-xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-100">{content.productionScope}</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {content.scopeItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-5 text-lg font-black">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/45 p-5">
                <p className="text-4xl font-black text-white">{content.statValue}</p>
                <p className="mt-3 leading-relaxed text-white/[0.68]">{content.statText}</p>
              </div>
              <a href={COMPANY_PROFILE_PDF_URL} target="_blank" rel="noopener noreferrer" aria-label={content.pdfAria} className={cn("mt-5 block rounded-2xl border border-cyan-200/25 bg-cyan-200/10 p-5 font-black text-cyan-100 transition hover:bg-cyan-200/15", focusVisibleRing)}>
                {content.heroPdfText}
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading {...content.why} />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {content.why.cards.map(([title, text]) => (
                <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-black text-slate-950">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {content.seoSupport || content.trust ? (
          <section className="bg-slate-50 px-6 py-20 md:px-10">
            <div className="mx-auto max-w-7xl space-y-10">
              {content.seoSupport ? (
                <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
                  <p className="max-w-5xl text-xl font-semibold leading-relaxed text-slate-700">{content.seoSupport}</p>
                </div>
              ) : null}
              {content.trust ? (
                <div>
                  <h2 className="max-w-4xl text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{content.trust.title}</h2>
                  <div className="mt-8 grid gap-5 md:grid-cols-3">
                    {content.trust.cards.map(([title, text]) => (
                      <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                        <h3 className="text-xl font-black text-slate-950">{title}</h3>
                        <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className="bg-slate-950 px-6 py-20 text-white md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title={visuals.title} text={visuals.text} dark />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visuals.cards.map(([title, text, category, src, alt]) => (
                <article key={title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-xl">
                  <div className="relative aspect-[4/3]">
                    <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="rounded-full bg-cyan-200/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-cyan-100">{category}</span>
                    <h3 className="mt-4 text-xl font-black">{title}</h3>
                    <p className="mt-3 leading-relaxed text-white/[0.68]">{text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">{visuals.servicesLabel}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {(serviceLinks[locale] ?? serviceLinks.en).map(([href, label]) => (
                  <Link key={href} href={href} className={cn("rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-sm font-bold text-white/[0.82] transition hover:bg-white/[0.12]", focusVisibleRing)}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading {...content.servicesHeading} />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {content.services.map((service) => (
                <Link key={service.href} href={service.href} className={cn("group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl", focusVisibleRingLight)}>
                  <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{service.text}</p>
                  <span className="mt-5 inline-flex text-sm font-black text-blue-700 group-hover:text-blue-800">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading {...content.market} align="start" />
              <div className="mt-8 flex flex-wrap gap-3">
                {content.cities.map((city) => (
                  <span key={city} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700">{city}</span>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.eventTypes.map((type) => (
                <div key={type} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 font-bold text-slate-800 shadow-sm">{type}</div>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-3">
            {visuals.wideCards.map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        {content.destination || content.equipment ? (
          <section className="px-6 py-20 md:px-10">
            <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
              {[content.destination, content.equipment].filter(Boolean).map((item) => (
                <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
                  <h2 className="text-3xl font-black tracking-tight text-slate-950">{item.title}</h2>
                  <p className="mt-5 text-lg leading-relaxed text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl space-y-8">
            {articleSections.map(([title, ...paragraphs], index) => {
              const imageEntry = index % 2 === 0 ? ARTICLE_SIDE_IMAGES[Math.floor(index / 2) % ARTICLE_SIDE_IMAGES.length] : null;
              const imageFirst = index % 4 === 2;

              return (
                <article
                  key={title}
                  className={cn(
                    "overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm",
                    imageEntry ? "grid lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch" : "p-7 md:p-10"
                  )}
                >
                  {imageEntry ? (
                    <div className={cn("relative min-h-[280px] lg:min-h-full", imageFirst ? "lg:order-first" : "lg:order-last")}>
                      <Image
                        src={imageEntry[0]}
                        alt={imageEntry[1]}
                        fill
                        sizes="(max-width: 1024px) 100vw, 44vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                    </div>
                  ) : null}
                  <div className={cn(imageEntry ? "p-7 md:p-10" : "")}>
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">0{index + 1}</span>
                    <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">{title}</h2>
                    {paragraphs.map((paragraph) => (
                      <p key={paragraph} className="mt-4 text-lg leading-relaxed text-slate-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-20 text-white md:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-100">{content.esports.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">{content.esports.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-white/[0.7]">{content.esports.text}</p>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10">
              <Image src="/img/blog/kurumsal-etkinlik-sahne-genel.webp" alt={content.esports.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-blue-700 to-slate-950 p-8 text-white shadow-2xl md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-100">{content.profile.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">{content.profile.title}</h2>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/[0.74]">{content.profile.text}</p>
              </div>
              <PdfButton content={content} className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-white px-7 font-black text-slate-950 transition hover:bg-cyan-50" />
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading {...content.processHeading} />
            <div className="mt-12 grid gap-5 md:grid-cols-5">
              {content.process.map(([title, text], index) => (
                <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="text-sm font-black text-blue-700">0{index + 1}</span>
                  <h3 className="mt-3 text-lg font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <SectionHeading {...content.faqHeading} align="start" />
            <div className="space-y-4">
              {content.faq.map(([question, answer]) => (
                <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <summary className={cn("flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl text-lg font-black text-slate-950", focusVisibleRingLight)}>
                    <span>{question}</span>
                    <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-xl leading-none text-blue-700">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">-</span>
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 md:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-8 text-center text-white shadow-2xl md:p-14">
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">{content.final.title}</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/[0.72]">{content.final.text}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={cn("inline-flex min-h-[52px] items-center justify-center rounded-full bg-emerald-500 px-7 font-black text-slate-950 transition hover:bg-emerald-400", focusVisibleRing)}>
                {content.final.whatsapp}
              </a>
              <Link href={content.final.contactHref} className={cn("inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 font-black text-white transition hover:bg-white/15", focusVisibleRing)}>
                {content.final.contact}
              </Link>
              <PdfButton content={content} className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-200/10 px-7 font-black text-cyan-100 transition hover:bg-cyan-200/15" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

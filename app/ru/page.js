import Link from "next/link";
import { Building2, Layers, Monitor, Music, Tent, Users } from "lucide-react";

import HeroSection from "@/components/HeroSection";
import HeroBelow from "@/components/HeroBelow";
import ServicesTabs from "@/components/ServicesTabs";
import JsonLd from "@/components/seo/JsonLd";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const RU_HOME_URL = buildCanonical("/ru");

const RU_SERVICES = [
  {
    id: "stage",
    title: "Аренда сцен и подиумов",
    Icon: Layers,
    description:
      "Модульные сцены, подиумы, runway-платформы, truss, лестницы и барьеры для мероприятий в Турции.",
    image: "/img/hizmet-sahne.webp",
    features: ["сцены и подиумы", "truss-системы", "барьеры", "монтаж"],
    href: "/ru/stage-rental",
  },
  {
    id: "led",
    title: "Аренда LED-экранов",
    Icon: Monitor,
    description:
      "Indoor и outdoor LED-экраны, видеостены, процессоры, контент и оператор для сцены.",
    image: "/img/led/300m2-p19-indoor-led-ekran-kurumsal-etkinlik-sahneva.webp",
    features: ["LED video wall", "indoor / outdoor", "P1.9-P3.9", "оператор"],
    href: "/ru/led-screen-rental",
  },
  {
    id: "sound-light",
    title: "Звук, свет и truss",
    Icon: Music,
    description:
      "Line-array звук, микрофоны, сценический свет, moving head, DMX и техническая поддержка.",
    image: "/img/ses-isik/ses-sistemi.webp",
    features: ["line-array", "радиомикрофоны", "сценический свет", "DMX"],
    href: "/ru/sound-light-rental",
  },
  {
    id: "tent",
    title: "Шатры для мероприятий",
    Icon: Tent,
    description:
      "Шатры, pagoda, мебель, столы, стулья, покрытие и освещение для открытых площадок.",
    image: "/img/galeri/cadir-kiralama-1.webp",
    features: ["шатры", "столы и стулья", "освещение", "логистика"],
    href: "/ru/tent-rental",
  },
  {
    id: "corporate",
    title: "Корпоративные события",
    Icon: Building2,
    description:
      "Техническое сопровождение конференций, запусков продуктов, дилерских встреч и gala-ужинов.",
    image: "/img/kurumsal/kurumsal-sahne-led-ekran.webp",
    features: ["конференции", "launch", "бренд-сцена", "backstage"],
    href: "/ru/corporate-events",
  },
  {
    id: "furniture",
    title: "Мебель для событий",
    Icon: Users,
    description:
      "Столы, стулья, протокол, lounge-зоны и мебельные решения вместе со сценой, шатром или LED.",
    image: "/img/hizmet-masa.webp",
    features: ["столы", "стулья", "протокол", "lounge"],
    href: "/ru/services#furniture",
  },
];

const HERO_DICTIONARY = {
  keywords: [
    { text: "Аренда сцен", color: "text-blue-200" },
    { text: "LED-экраны", color: "text-cyan-200" },
    { text: "Звук и свет", color: "text-purple-200" },
    { text: "Шатры в Турции", color: "text-emerald-200" },
  ],
  keywordsAriaLabel: "Основные услуги Sahneva на русском языке",
  badge: "Сцены • LED-экраны • Звук • Свет • Шатры в Турции",
  titleLine1Prefix: "Sahneva",
  titleLine1: "аренда оборудования",
  titleLine2: "для мероприятий в Турции",
  description:
    "Профессиональная <strong>аренда сцен, подиумов, LED-экранов, звука, света, truss-систем, шатров, столов и стульев</strong> для конференций, концертов, выставок, корпоративных событий и open-air проектов в Стамбуле и по всей Турции.",
  proofPoints: [
    { value: "700+", label: "проектов" },
    { value: "81 город", label: "по Турции" },
    { value: "24/7", label: "связь и поддержка" },
    { value: "1 команда", label: "сцена, LED, звук" },
  ],
  ctaCall: "Позвонить",
  ctaCallAria: "Позвонить в Sahneva",
  ctaWhatsapp: "WhatsApp",
  ctaWhatsappAria: "Открыть WhatsApp для запроса расчета",
  ctaQuote: "Услуги",
  ctaQuoteAria: "Перейти к услугам",
  quoteAnchor: "#ru-services",
  whatsappText:
    "%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D1%80%D0%B0%D1%81%D1%87%D0%B5%D1%82%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D1%8F%20%D0%B2%20%D0%A2%D1%83%D1%80%D1%86%D0%B8%D0%B8.",
};

const RU_WHATSAPP_HREF = `https://wa.me/905453048671?text=${HERO_DICTIONARY.whatsappText}`;

const HERO_BELOW_DICTIONARY = {
  sectionBadge: "Как мы работаем",
  sectionTitle: "Технический комплект под мероприятие в Турции",
  sectionDesc:
    "Если вы планируете конференцию, выставку, gala, запуск продукта или open-air проект в Турции, Sahneva собирает сцену, LED, звук, свет, шатры, мебель и монтажную команду в одном рабочем плане.",
  featuresAriaLabel: "Преимущества Sahneva для русскоязычных клиентов",
  features: [
    {
      icon: "01",
      title: "Оборудование и команда",
      description: "Подбираем комплект под формат, площадку, город и сроки монтажа.",
      color: "text-cyan-300",
    },
    {
      icon: "02",
      title: "Визуальный результат",
      description: "Сцена, LED-экран, свет и бренд-зона смотрятся как единая система.",
      color: "text-blue-300",
    },
    {
      icon: "03",
      title: "Поддержка на событии",
      description: "Технические специалисты остаются на площадке во время программы.",
      color: "text-emerald-300",
    },
  ],
  processSteps: [
    {
      title: "Бриф",
      desc: "Город, дата, площадка, формат события, гости и нужные услуги.",
      badge: "1",
    },
    {
      title: "Комплект",
      desc: "Сцена, LED, звук, свет, шатер, мебель и монтажная команда.",
      badge: "2",
    },
    {
      title: "Монтаж",
      desc: "Доставка, установка, тесты, поддержка и демонтаж после события.",
      badge: "3",
    },
  ],
  consultationTitle: "Нужен расчет для мероприятия в Турции?",
  consultationDesc:
    "Отправьте дату, город и нужные услуги: <strong>сцена, LED-экран, звук, свет, шатер или мебель</strong>. Мы подготовим понятный комплект.",
  consultationCta: "Связаться",
  consultationCtaHref: "/ru/contact",
};

const SERVICES_DICTIONARY = {
  sectionPill: "Услуги в Турции",
  sectionTitlePrefix: "Аренда оборудования для событий:",
  sectionTitleHighlight: "сцены, LED, звук, свет и шатры",
  sectionDesc:
    "Выберите нужное направление или соберите полный технический комплект для мероприятия в Стамбуле, Анталье, Анкаре, Измире и других городах Турции.",
  featuresHeading: "Что входит",
  ctaLabel: "Подробнее",
  ctaTitle: "{{title}} в Турции",
  imageBadgeLabel: "Sahneva",
  imageAlt: "{{title}} в Турции - Sahneva",
};

const CITY_SIGNALS = [
  "Стамбул",
  "Анталья",
  "Анкара",
  "Измир",
  "Бурса",
  "Коджаэли",
  "Конья",
  "по всей Турции",
];

const RU_EVENT_FORMATS = [
  {
    title: "Корпоративные мероприятия",
    text: "Конференции, дилерские встречи, запуски продуктов и gala с управляемой сценой, LED-экраном, звуком, светом и backstage.",
    href: "/ru/corporate-events",
  },
  {
    title: "Выставки и бренд-зоны",
    text: "LED wall, презентационный подиум, звук, свет, truss, мебель и welcome-зона для стенда или roadshow в Турции.",
    href: "/ru/led-screen-rental",
  },
  {
    title: "Концерты и фестивали",
    text: "Сцена, outdoor LED, line-array звук, свет, truss и техническая команда для открытых площадок и городских событий.",
    href: "/ru/stage-rental",
  },
  {
    title: "Open-air и шатровые зоны",
    text: "Pagoda, dome, большие event-шатры, мебель, освещение, покрытие и инфраструктура для временной площадки.",
    href: "/ru/tent-rental",
  },
];

const RU_HOME_FAQ_ITEMS = [
  {
    question: "Как планируется аренда оборудования для мероприятия в Турции?",
    answer:
      "Сначала уточняются город, дата, площадка, формат события, количество гостей и нужные направления. После этого подбирается технический комплект: сцена, LED-экран, звук, свет, шатер, мебель, монтаж и поддержка на площадке.",
  },
  {
    question: "Работаете ли вы за пределами Стамбула?",
    answer:
      "Да. Sahneva работает в Стамбуле, Анталье, Анкаре, Измире, Бурсе, Коджаэли и других городах Турции. Логистика, монтажная команда и сроки установки рассчитываются по площадке.",
  },
  {
    question: "Можно ли отправить бриф на русском или английском языке?",
    answer:
      "Да. Бриф можно отправить на русском, английском или турецком языке. Для расчета достаточно указать город, дату, формат события, площадку и нужные услуги.",
  },
  {
    question: "Можно ли заказать сцену, LED-экран, звук и свет одним пакетом?",
    answer:
      "Да. Часто эти направления планируются вместе: сцена, LED wall, звук, свет, truss, шатровая зона, мебель и технические специалисты собираются в один рабочий комплект.",
  },
  {
    question: "Какие данные нужны для быстрого предложения?",
    answer:
      "Нужны город, дата, площадка, примерное количество гостей, тип события, желаемые услуги и сроки монтажа. Если есть план площадки, райдер или визуальная референция, их тоже можно отправить.",
  },
  {
    question: "От чего зависит срок монтажа?",
    answer:
      "Срок зависит от города, доступа к площадке, размера сцены или LED-экрана, высоты truss, количества оборудования, времени заезда и требований площадки по безопасности.",
  },
];

const RU_HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${RU_HOME_URL}#business`,
  name: "Sahneva Organizasyon",
  url: RU_HOME_URL,
  image: `${SITE_URL}/img/hero-bg.webp`,
  telephone: "+90 545 304 86 71",
  areaServed: "Türkiye",
  inLanguage: "ru",
  description:
    "Аренда сцен, подиумов, LED-экранов, звука, света, шатров и мебели для мероприятий в Турции.",
  makesOffer: RU_SERVICES.slice(0, 5).map((service) => ({
    "@type": "Offer",
    url: `${SITE_URL}${service.href}`,
    itemOffered: {
      "@type": "Service",
      name: service.title,
      areaServed: "Türkiye",
    },
  })),
};

const RU_HOME_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${RU_HOME_URL}#faq`,
  inLanguage: "ru-RU",
  mainEntity: RU_HOME_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata = {
  title: {
    absolute: "Аренда сцен, LED-экранов, звука и шатров в Турции | Sahneva",
  },
  description:
    "Sahneva: аренда сцен, подиумов, LED-экранов, звука, света, truss, шатров, столов и стульев для мероприятий в Стамбуле и по всей Турции.",
  alternates: {
    canonical: RU_HOME_URL,
    languages: {
      "tr-TR": `${SITE_URL}/`,
      en: `${SITE_URL}/en`,
      ar: `${SITE_URL}/ar`,
      ru: RU_HOME_URL,
      "x-default": `${SITE_URL}/en`,
    },
  },
  openGraph: {
    title: "Аренда сцен, LED-экранов, звука и шатров в Турции | Sahneva",
    description:
      "Sahneva организует технический комплект для мероприятий в Турции: сцены, LED-экраны, звук, свет, truss, шатры, мебель, монтаж и поддержка.",
    url: RU_HOME_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: `${SITE_URL}/img/hero-bg-desktop.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva - аренда оборудования для мероприятий в Турции",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Аренда сцен, LED-экранов, звука и шатров в Турции | Sahneva",
    description:
      "Сцена, LED-экран, звук, свет, truss, шатры, мебель и техническая команда для мероприятий в Турции.",
    images: [`${SITE_URL}/img/hero-bg-desktop.webp`],
  },
};

export default function RussianHomePage() {
  return (
    <div className="overflow-x-hidden bg-[#0B1120]">
      <JsonLd data={RU_HOME_JSON_LD} />
      <JsonLd data={RU_HOME_FAQ_JSON_LD} id="ru-home-faq-jsonld" />
      <HeroSection dictionary={HERO_DICTIONARY} />
      <HeroBelow dictionary={HERO_BELOW_DICTIONARY} />

      <div id="ru-services" />
      <ServicesTabs servicesData={RU_SERVICES} dictionary={SERVICES_DICTIONARY} />

      <section className="bg-white py-14 md:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Мероприятия в Турции
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Оборудование и площадочная команда под русскоязычный бриф
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">
              Sahneva помогает брендам, агентствам и частным организаторам, которые
              планируют событие в Турции: подбираем оборудование, монтажный график,
              логистику и техническую поддержку на площадке.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {CITY_SIGNALS.map((city) => (
              <div
                key={city}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-extrabold text-slate-900"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_1150px] lg:[contain-intrinsic-size:auto_680px] bg-slate-50 py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Форматы проектов
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Когда нужен технический продакшн в Турции, а не просто аренда одной позиции
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {RU_EVENT_FORMATS.map((format) => (
              <Link
                key={format.title}
                href={format.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
              >
                <h3 className="text-xl font-black text-slate-950">{format.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{format.text}</p>
                <span className="mt-5 inline-flex text-sm font-black text-indigo-700 group-hover:text-indigo-900">
                  Подробнее
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="content-visibility-auto [contain-intrinsic-size:auto_1350px] lg:[contain-intrinsic-size:auto_820px] bg-white py-14 md:py-18"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
                Частые вопросы
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                Что важно знать перед расчетом мероприятия в Турции
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                Короткие ответы для русскоязычных клиентов, которые планируют
                конференцию, выставку, концерт, gala, презентацию или open-air проект.
              </p>
            </div>
            <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-7">
              {RU_HOME_FAQ_ITEMS.map((item) => (
                <article key={item.question} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-black text-slate-950">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
              Sahneva Turkey
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Нужна сцена, LED-экран, звук, свет или шатер?
            </h2>
            <p className="mt-3 text-base leading-7 text-white/[0.75]">
              Отправьте город, дату и формат события. Мы подберем технический комплект и монтажную команду.
            </p>
          </div>
          <Link
            href="/ru/contact"
            className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-emerald-500 px-7 text-base font-black text-white transition hover:bg-emerald-600"
          >
            Получить расчет
          </Link>
          <a
            href={RU_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 text-base font-black text-white transition hover:bg-white/15"
          >
            Написать в WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}


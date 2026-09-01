import Image from "next/image";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";
import { RUSSIAN_SERVICE_LIST } from "./serviceData";
import { buildAlternatesForPath } from "@/lib/seo/alternates";

const RU_SERVICES_URL = buildCanonical("/ru/services");
const RU_SERVICES_TITLE = "Услуги для мероприятий в Турции";
const RU_SERVICES_DESCRIPTION =
  "Аренда сцен, подиумов, LED-экранов, звука, света, ферменных конструкций, шатров и мебели для мероприятий в Турции.";
const RU_SERVICES_IMAGE = `${SITE_URL}/img/hero-bg-desktop.webp`;

const SERVICE_KEYWORDS = [
  "аренда сцены в Турции",
  "аренда LED-экрана в Турции",
  "звук и свет для мероприятий",
  "аренда шатров",
  "корпоративные события",
  "техническое обеспечение мероприятий",
];

const FORMAT_GUIDES = [
  {
    title: "Конференция или презентация",
    text: "Сцена или подиум для спикеров, LED-экран с учётом расстояния просмотра, радиомикрофоны и фронтальный свет. Для мелкого текста, презентаций и съёмки с близкой дистанции можно использовать Absen P1.9; точный шаг пикселя выбирается после проверки плана зала.",
  },
  {
    title: "Концерт или фестиваль",
    text: "Сцена, ферменные конструкции, звуковая система линейного массива, сценический свет и LED-экран подбираются по площади, числу зрителей, техническому райдеру и условиям открытой или закрытой площадки.",
  },
  {
    title: "Выставка или бренд-зона",
    text: "Презентационный подиум, LED-экран, акцентный свет, мебель и аккуратно организованные кабельные линии объединяются в пространство, которое поддерживает фирменный стиль и движение посетителей.",
  },
  {
    title: "Мероприятие на открытом воздухе",
    text: "Шатёр, напольное покрытие, сцена, звук, свет и мебель планируются с учётом сезона, основания, площади, водоотвода, доступа техники и потока гостей.",
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Бриф",
    text: "Уточняем город, дату, площадку, формат программы, число гостей и задачи организатора.",
  },
  {
    title: "Технический план",
    text: "Определяем размеры, состав оборудования, способ установки, график и команду на площадке.",
  },
  {
    title: "Монтаж и проверка",
    text: "Доставляем и собираем оборудование, проверяем конструкцию, сигнал, звук, свет и контент.",
  },
  {
    title: "Работа во время мероприятия",
    text: "Операторы управляют оборудованием и техническими переходами по согласованной программе.",
  },
  {
    title: "Демонтаж",
    text: "После завершения программы разбираем и загружаем оборудование, затем передаём площадку.",
  },
];

const QUOTE_CHECKLIST = [
  "город, дата и точный адрес площадки",
  "формат мероприятия и предполагаемое количество гостей",
  "ориентировочные размеры сцены, подиума или экрана",
  "помещение или открытая площадка",
  "время доступа, монтажа, репетиции и демонтажа",
  "план площадки, фотографии, технический райдер или пример контента, если они есть",
];

const SERVICES_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Sahneva услуги для мероприятий в Турции",
  // OfferCatalog ItemList/Intangible altindadir, CreativeWork degil; `inLanguage`
  // bu turde gecersiz. Sayfa dili WebPage/WebSite dugumlerinde zaten bildiriliyor.
  url: RU_SERVICES_URL,
  itemListElement: RUSSIAN_SERVICE_LIST.map((service, index) => ({
    "@type": "Offer",
    position: index + 1,
    url: `${SITE_URL}${service.href}`,
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      areaServed: "Türkiye",
    },
  })),
};

export const metadata = {
  title: RU_SERVICES_TITLE,
  description: RU_SERVICES_DESCRIPTION,
  alternates: buildAlternatesForPath("/ru/services"),
  openGraph: {
    title: `${RU_SERVICES_TITLE} | Sahneva`,
    description: RU_SERVICES_DESCRIPTION,
    url: RU_SERVICES_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: RU_SERVICES_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sahneva - услуги для мероприятий в Турции",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RU_SERVICES_TITLE} | Sahneva`,
    description: RU_SERVICES_DESCRIPTION,
    images: [RU_SERVICES_IMAGE],
  },
};

export default function RussianServicesPage() {
  return (
    <div className="bg-white">
      <JsonLd data={SERVICES_JSON_LD} />
      <BreadcrumbJsonLd
        items={[
          { name: "Главная", url: "/ru" },
          { name: "Услуги", url: "/ru/services" },
        ]}
        baseUrl={SITE_URL}
      />

      <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-20">
        <div className="absolute inset-0 opacity-45" aria-hidden="true">
          <Image
            src="/img/hero-bg-desktop.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-violet-950/70" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
              Технические услуги Sahneva
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Услуги для мероприятий в Турции
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/[0.82]">
              Сцены, LED-экраны, звук, свет, ферменные конструкции, шатры, мебель и
              техническая команда на площадке для конференций, выставок,
              гала-мероприятий, концертов и проектов на открытом воздухе в Турции.
              Если нужен единый подрядчик для всех направлений, изучите наш{" "}
              <Link
                href="/ru/event-production-company-turkey"
                className="font-bold text-emerald-300 underline decoration-emerald-300/60 underline-offset-4 transition hover:text-emerald-200"
              >
                комплексное техническое обеспечение мероприятий
              </Link>
              .
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {SERVICE_KEYWORDS.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-18">
        <div className="mb-10 max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
            Отдельная услуга или единый комплект
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
            Технические решения под формат и условия площадки
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">
            Можно заказать отдельную сцену, LED-экран, звуковую систему, свет или шатёр.
            Для комплексного проекта мы согласуем размеры, оборудование, электропитание,
            кабельные линии, логистику, монтаж и работу операторов в одном техническом
            плане.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {RUSSIAN_SERVICE_LIST.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={`${service.title} - Sahneva`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">
                    {service.eyebrow}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
                    {service.shortTitle}
                  </h2>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <p className="text-base leading-7 text-slate-700">{service.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.scenarios.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-violet-50 px-3 py-2 text-xs font-bold text-violet-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={service.href}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-slate-800"
                  >
                    Подробнее
                  </Link>
                  <Link
                    href="/ru/contact"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-slate-300 px-5 text-sm font-black text-slate-950 transition hover:border-slate-950"
                  >
                    Получить расчет
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-14 md:py-18">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
              Подбор оборудования
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Как подобрать технический комплект
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">
              Комплект определяется не только количеством гостей. Важны программа,
              геометрия и акустика площадки, расстояние просмотра, доступная мощность,
              время монтажа и требования к съёмке или трансляции.
            </p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {FORMAT_GUIDES.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
              >
                <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-18">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
            Понятная последовательность
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
            Как проходит работа
          </h2>
        </div>
        <ol className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {WORKFLOW_STEPS.map((step, index) => (
            <li key={step.title} className="rounded-3xl border border-slate-200 p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-sm font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-black text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-slate-950 py-14 text-white md:py-18">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
              Данные для предложения
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Что прислать для расчёта
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/[0.78]">
              Даже если точных размеров ещё нет, этих исходных данных достаточно для
              предварительного подбора решения. После проверки площадки состав и график
              уточняются.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {QUOTE_CHECKLIST.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm leading-6 text-white/[0.86]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/ru/contact"
              className="mt-7 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-emerald-400 px-6 text-sm font-black text-slate-950 transition hover:bg-emerald-300"
            >
              Отправить данные для расчёта
            </Link>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/[0.06] p-7">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-200">
              Реальные проекты
            </p>
            <h2 className="mt-3 text-2xl font-black">Посмотрите решения на площадках</h2>
            <p className="mt-4 text-sm leading-7 text-white/[0.72]">
              Видео и описания показывают реальные сцены, LED-экраны, шатры,
              звук, свет и комплексные проекты Sahneva. Они помогают понять масштаб и
              состав работ до подготовки нового предложения.
            </p>
            <div className="mt-6 grid gap-3">
              <Link
                href="/ru/our-work"
                className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-white px-5 text-sm font-black text-slate-950 transition hover:bg-violet-50"
              >
                Видео с реализованных площадок
              </Link>
              <Link
                href="/ru/projects"
                className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-white/20 px-5 text-sm font-black text-white transition hover:bg-white/10"
              >
                Подробные описания проектов
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
          {[
            ["Где", "Стамбул, Анталья, Анкара, Измир и другие города Турции."],
            ["Что", "Сцена, LED-экран, звук, свет, ферменные конструкции, шатры и мебель."],
            ["Как", "Бриф, технический расчёт, монтаж, проверка, сопровождение и демонтаж."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-black text-slate-950">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

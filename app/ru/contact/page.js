import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const RU_CONTACT_URL = buildCanonical("/ru/contact");
const RU_CONTACT_IMAGE = `${SITE_URL}/img/hero-bg.webp`;

const CONTACT_CHANNELS = [
  {
    title: "WhatsApp",
    value: "+90 545 304 86 71",
    href: "https://wa.me/905453048671?text=Здравствуйте,%20я%20хочу%20получить%20расчет%20для%20мероприятия.",
    description: "Самый быстрый способ отправить дату, город и краткий бриф.",
  },
  {
    title: "E-mail",
    value: "info@sahneva.com",
    href: "mailto:info@sahneva.com",
    description: "Подходит для технических райдеров, планов площадки и вложений.",
  },
  {
    title: "Телефон",
    value: "+90 545 304 86 71",
    href: "tel:+905453048671",
    description: "Позвоните для срочного расчета или уточнения доступности команды.",
  },
];

const BRIEF_ITEMS = [
  "Город, площадка, дата и время монтажа.",
  "Формат события и ожидаемое количество гостей.",
  "Нужны ли сцена, LED-экран, звук, свет, truss, шатер или мебель.",
  "Особые требования: брендирование, трансляция, протокол, outdoor-условия.",
];

export const metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с Sahneva для расчета аренды сцены, LED-экрана, звука, света, шатра и мебели для мероприятий в Турции.",
  alternates: {
    canonical: RU_CONTACT_URL,
    languages: {
      "tr-TR": `${SITE_URL}/iletisim`,
      en: `${SITE_URL}/en/contact`,
      ar: `${SITE_URL}/ar/contact`,
      ru: RU_CONTACT_URL,
      "x-default": `${SITE_URL}/iletisim`,
    },
  },
  openGraph: {
    title: "Контакты | Sahneva",
    description:
      "Свяжитесь с Sahneva для расчета аренды сцены, LED-экрана, звука, света, шатра и мебели для мероприятий в Турции.",
    url: RU_CONTACT_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "ru_RU",
    images: [{ url: RU_CONTACT_IMAGE, width: 1200, height: 630, alt: "Sahneva контакты для мероприятий в Турции" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакты | Sahneva",
    description:
      "Свяжитесь с Sahneva для расчета аренды сцены, LED-экрана, звука, света, шатра и мебели для мероприятий в Турции.",
    images: [RU_CONTACT_IMAGE],
  },
};

export default function RussianContactPage() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-10">
      <header className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-black text-neutral-900">Свяжитесь с Sahneva</h1>
        <p className="text-base leading-7 text-neutral-600">
          Отправьте детали мероприятия, и мы подготовим техническое предложение с оборудованием, командой, сроками монтажа и ориентировочной стоимостью.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {CONTACT_CHANNELS.map((channel) => (
          <a key={channel.title} href={channel.href} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-lg font-black text-neutral-900">{channel.title}</h2>
            <p className="mt-2 text-base font-bold text-indigo-600">{channel.value}</p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{channel.description}</p>
          </a>
        ))}
      </div>

      <section className="rounded-3xl border border-indigo-100 bg-indigo-50/70 p-6 md:p-8">
        <h2 className="text-2xl font-black text-neutral-900">Что отправить для быстрого расчета?</h2>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {BRIEF_ITEMS.map((item) => (
            <li key={item} className="rounded-2xl border border-white/70 bg-white p-4 text-sm leading-6 text-neutral-700 shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const RU_CONTACT_URL = buildCanonical("/ru/contact");
const RU_CONTACT_IMAGE = `${SITE_URL}/img/hero-bg.webp`;
const FORM_ENDPOINT = "https://formspree.io/f/xanppven";

const WEB_MCP_QUOTE_FORM_PROPS = {
  toolname: "requestEventProductionQuote",
  tooldescription:
    "Submit an event production quote request to Sahneva for stage, LED screen, sound, lighting, truss, tent, podium and technical crew needs in Turkey.",
};

const WEB_MCP_QUOTE_FIELD_PROPS = {
  name: {
    toolparamdescription:
      "Full name of the person requesting the event production quote.",
  },
  phone: {
    toolparamdescription:
      "Phone number with country code for quote follow-up by Sahneva.",
  },
  email: {
    toolparamdescription:
      "Email address where Sahneva should send the proposal and technical details.",
  },
  eventType: {
    toolparamdescription:
      "Type of event such as corporate event, concert, festival, conference, exhibition or other.",
  },
  message: {
    toolparamdescription:
      "Event date, city or venue, estimated audience size, required equipment and production details.",
  },
  formSubject: {
    title: "Internal form subject",
    toolparamdescription:
      "Internal Formspree subject line used to identify this Sahneva quote request.",
  },
  redirectUrl: {
    title: "Post-submit redirect URL",
    toolparamdescription:
      "Internal redirect URL that sends the user to the Sahneva thank-you page after submission.",
  },
  spamTrap: {
    title: "Spam prevention field",
    toolparamdescription:
      "Hidden anti-spam field that should be left empty by real users and AI agents.",
  },
};

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

      <section className="grid gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm lg:grid-cols-[0.8fr_1.2fr] md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
            Request a quote
          </p>
          <h2 className="mt-3 text-3xl font-black text-neutral-900">
            Отправьте детали мероприятия для технического расчета.
          </h2>
          <p className="mt-4 text-sm leading-7 text-neutral-600">
            Укажите город, дату, формат мероприятия, примерное количество гостей и нужное
            оборудование. Команда Sahneva подготовит проектный ответ по объему работ.
          </p>
        </div>

        <form
          action={FORM_ENDPOINT}
          method="POST"
          acceptCharset="UTF-8"
          {...WEB_MCP_QUOTE_FORM_PROPS}
          className="space-y-5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-black text-neutral-800">
                Имя и фамилия *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                {...WEB_MCP_QUOTE_FIELD_PROPS.name}
                className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-black text-neutral-800">
                Телефон *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                placeholder="+90 ..."
                {...WEB_MCP_QUOTE_FIELD_PROPS.phone}
                className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-sm font-black text-neutral-800">
                E-mail *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                placeholder="name@example.com"
                {...WEB_MCP_QUOTE_FIELD_PROPS.email}
                className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
              />
            </div>
            <div>
              <label htmlFor="eventType" className="block text-sm font-black text-neutral-800">
                Формат мероприятия *
              </label>
              <select
                id="eventType"
                name="eventType"
                required
                autoComplete="off"
                {...WEB_MCP_QUOTE_FIELD_PROPS.eventType}
                className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none transition focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
              >
                <option value="">Выберите формат</option>
                <option value="Corporate Event">Корпоративное мероприятие</option>
                <option value="Conference">Конференция</option>
                <option value="Concert">Концерт или фестиваль</option>
                <option value="Exhibition">Выставка</option>
                <option value="Esports Event">Киберспортивное событие</option>
                <option value="Other">Другое</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-black text-neutral-800">
              Детали мероприятия *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              autoComplete="off"
              placeholder="Город, дата, площадка, аудитория, оборудование..."
              {...WEB_MCP_QUOTE_FIELD_PROPS.message}
              className="mt-2 w-full resize-none rounded-2xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
            />
          </div>

          <input type="hidden" name="_subject" value="Sahneva | Russian Proposal Request" {...WEB_MCP_QUOTE_FIELD_PROPS.formSubject} />
          <input type="hidden" name="_redirect" value="https://www.sahneva.com/tesekkurler" {...WEB_MCP_QUOTE_FIELD_PROPS.redirectUrl} />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" {...WEB_MCP_QUOTE_FIELD_PROPS.spamTrap} />

          <button
            type="submit"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl bg-indigo-600 px-6 text-sm font-black text-white transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
          >
            Отправить запрос
          </button>
        </form>
      </section>
    </div>
  );
}

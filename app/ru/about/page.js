import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const RU_ABOUT_URL = buildCanonical("/ru/about");
const RU_ABOUT_IMAGE = `${SITE_URL}/img/hakkimizda-hero-corporate.webp`;
const ORGANIZATION_ID = `${SITE_URL}/#org`;

const VALUES = [
  { title: "Безопасность", text: "Проверяем несущие конструкции, электрическую нагрузку, высоты и маршруты монтажа до выхода команды на площадку." },
  { title: "Скорость", text: "Планируем доставку, монтаж, тестирование и демонтаж так, чтобы уложиться в короткие окна подготовки." },
  { title: "Прозрачность", text: "Показываем состав оборудования, команду, сроки и зоны ответственности в коммерческом предложении." },
];

export const metadata = {
  title: "О Sahneva",
  description:
    "Sahneva - команда технического продакшена мероприятий в Турции: сцены, LED-экраны, звук, свет, truss и шатры.",
  alternates: {
    canonical: RU_ABOUT_URL,
    languages: {
      "tr-TR": `${SITE_URL}/hakkimizda`,
      en: `${SITE_URL}/en/about`,
      ar: `${SITE_URL}/ar/about`,
      ru: RU_ABOUT_URL,
      "x-default": `${SITE_URL}/hakkimizda`,
    },
  },
  openGraph: {
    title: "О Sahneva",
    description:
      "Sahneva - команда технического продакшена мероприятий в Турции: сцены, LED-экраны, звук, свет, truss и шатры.",
    url: RU_ABOUT_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "ru_RU",
    images: [{ url: RU_ABOUT_IMAGE, width: 1200, height: 630, alt: "Команда Sahneva на техническом проекте" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "О Sahneva",
    description:
      "Sahneva - команда технического продакшена мероприятий в Турции: сцены, LED-экраны, звук, свет, truss и шатры.",
    images: [RU_ABOUT_IMAGE],
  },
};

const ABOUT_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${RU_ABOUT_URL}#webpage`,
      url: RU_ABOUT_URL,
      name: metadata.openGraph.title,
      description: metadata.description,
      inLanguage: "ru-RU",
      mainEntity: { "@id": ORGANIZATION_ID },
      breadcrumb: { "@id": `${RU_ABOUT_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${RU_ABOUT_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Sahneva", item: `${SITE_URL}/ru` },
        { "@type": "ListItem", position: 2, name: metadata.title, item: RU_ABOUT_URL },
      ],
    },
  ],
};

export default function RussianAboutPage() {
  return (
    <div className="bg-white">
      <JsonLd id="ru-about-jsonld" data={ABOUT_JSON_LD} />
      <section className="relative min-h-[62vh] overflow-hidden bg-slate-950 text-white">
        <Image src="/img/hakkimizda-hero-corporate.webp" alt="Команда Sahneva на техническом проекте" fill priority sizes="100vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-950/60 to-slate-950/85" />
        <div className="container relative z-10 mx-auto flex min-h-[62vh] items-center px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black md:text-6xl">О Sahneva</h1>
            <p className="mt-5 text-lg leading-8 text-white/85">
              Мы проектируем и реализуем техническую часть мероприятий: сцены, подиумы, LED-экраны, звук, свет, truss, шатры и мебель. Работаем с корпоративными событиями, концертами, фестивалями, выставками и запусками продуктов.
            </p>
            <Link href="/ru/contact" className="mt-8 inline-flex min-h-[48px] items-center rounded-xl bg-emerald-500 px-6 font-bold text-white hover:bg-emerald-600">
              Обсудить проект
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-8 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-5 text-base leading-8 text-neutral-700">
          <h2 className="text-3xl font-black text-neutral-900">Технический продакшен без лишней сложности</h2>
          <p>
            Sahneva помогает организаторам принимать технические решения быстро и уверенно. Мы учитываем площадку, поток гостей, сценический сценарий, видимость экрана, акустику, световую атмосферу и логистику.
          </p>
          <p>
            Наша цель - сделать событие понятным для команды, безопасным для площадки и впечатляющим для гостей.
          </p>
        </div>
        <Image src="/img/ekip-calisma.webp" alt="Техническая команда Sahneva во время подготовки" width={720} height={480} className="rounded-2xl object-cover shadow-xl" />
      </section>

      <section className="bg-neutral-50 py-14">
        <div className="container mx-auto grid gap-5 px-4 md:grid-cols-3">
          {VALUES.map((value) => (
            <article key={value.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-neutral-900">{value.title}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{value.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

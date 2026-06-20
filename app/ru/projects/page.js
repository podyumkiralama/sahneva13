import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const RU_PROJECTS_URL = buildCanonical("/ru/projects");
const RU_PROJECTS_IMAGE = `${SITE_URL}/img/kurumsal/kurumsal-sahne-led-ekran.webp`;

const PROJECT_GROUPS = [
  {
    title: "LED-экраны и сцены",
    text: "Корпоративные конференции, презентации, indoor и outdoor video wall решения.",
    image: "/img/galeri/led-ekran-kiralama-1.webp",
  },
  {
    title: "Фестивали и концерты",
    text: "Сцены, truss, звук, свет и техническая команда для интенсивного графика мероприятий.",
    image: "/img/sahne/galeri-1.webp",
  },
  {
    title: "Шатры и площадки",
    text: "Dome, pagoda и event-шатры с мебелью, освещением и логистикой.",
    image: "/img/galeri/cadir-kiralama-1.webp",
  },
];

export const metadata = {
  title: "Проекты",
  description:
    "Примеры проектов Sahneva: сцены, LED-экраны, звук, свет, truss, шатры и полная техническая подготовка мероприятий.",
  alternates: {
    canonical: RU_PROJECTS_URL,
    languages: {
      "tr-TR": `${SITE_URL}/projeler`,
      en: `${SITE_URL}/en/projects`,
      ar: `${SITE_URL}/ar/projects`,
      ru: RU_PROJECTS_URL,
      "x-default": `${SITE_URL}/projeler`,
    },
  },
  openGraph: {
    title: "Проекты | Sahneva",
    description:
      "Примеры проектов Sahneva: сцены, LED-экраны, звук, свет, truss, шатры и полная техническая подготовка мероприятий.",
    url: RU_PROJECTS_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "ru_RU",
    images: [{ url: RU_PROJECTS_IMAGE, width: 1200, height: 630, alt: "Проекты Sahneva для мероприятий в Турции" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Проекты | Sahneva",
    description:
      "Примеры проектов Sahneva: сцены, LED-экраны, звук, свет, truss, шатры и полная техническая подготовка мероприятий.",
    images: [RU_PROJECTS_IMAGE],
  },
};

const PROJECTS_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${RU_PROJECTS_URL}#webpage`,
      url: RU_PROJECTS_URL,
      name: metadata.openGraph.title,
      description: metadata.description,
      inLanguage: "ru-RU",
      mainEntity: { "@id": `${RU_PROJECTS_URL}#itemlist` },
      breadcrumb: { "@id": `${RU_PROJECTS_URL}#breadcrumb` },
    },
    {
      "@type": "ItemList",
      "@id": `${RU_PROJECTS_URL}#itemlist`,
      itemListElement: PROJECT_GROUPS.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.text,
          image: `${SITE_URL}${project.image}`,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${RU_PROJECTS_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Sahneva", item: `${SITE_URL}/ru` },
        { "@type": "ListItem", position: 2, name: metadata.title, item: RU_PROJECTS_URL },
      ],
    },
  ],
};

export default function RussianProjectsPage() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-10">
      <JsonLd id="ru-projects-jsonld" data={PROJECTS_JSON_LD} />
      <header className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-black text-neutral-900">Проекты Sahneva</h1>
        <p className="text-base leading-7 text-neutral-600">
          Мы работаем с мероприятиями разного масштаба: от закрытых корпоративных запусков до открытых фестивалей и выставочных площадок.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {PROJECT_GROUPS.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-black text-neutral-900">{project.title}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{project.text}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="rounded-3xl bg-slate-950 p-6 text-white md:p-8">
        <h2 className="text-2xl font-black">Нужен похожий проект?</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
          Опишите площадку и цель мероприятия - мы подберем сцену, экран, звук, свет и логистику под ваш формат.
        </p>
        <Link href="/ru/contact" className="mt-6 inline-flex min-h-[48px] items-center rounded-xl bg-white px-6 font-bold text-slate-950">
          Запросить расчет
        </Link>
      </section>
    </div>
  );
}

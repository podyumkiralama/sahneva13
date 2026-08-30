import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Layers3,
  Lightbulb,
  MapPin,
  MonitorPlay,
  Sparkles,
} from "lucide-react";

import JsonLd from "@/components/seo/JsonLd";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { ORGANIZATION_ID } from "@/lib/seo/schemaIds";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_PATH = "/projeler/bayrampasa-adapark-30-agustos-sahne-kurulumu";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const IMAGE_BASE = "/img/projeler/bayrampasa-adapark-30-agustos-sahne-kurulumu";

const PROJECT_NAME = "Bayrampaşa Adapark 30 Ağustos 2026 Zafer Bayramı Sahne Kurulumu";
const SEO_TITLE = "Bayrampaşa Adapark 30 Ağustos Sahne Kurulumu";
const META_DESCRIPTION =
  "Bayrampaşa Adapark'taki 30 Ağustos 2026 Zafer Bayramı için kurulan sahne, LED ekran, podyum, truss ve ışık sistemlerini inceleyin.";
const PUBLISHED_AT = "2026-08-30T00:00:00+03:00";
const MODIFIED_AT = "2026-08-30T00:00:00+03:00";

const IMAGES = {
  hero: {
    src: `${IMAGE_BASE}/bayrampasa-adapark-30-agustos-ana-sahne-led-ekran.webp`,
    width: 1920,
    height: 1440,
    alt: "Bayrampaşa Adapark 30 Ağustos 2026 Zafer Bayramı için kurulan ana sahne, LED ekran, üst banner LED ve profesyonel ışık sistemi",
    title: "Bayrampaşa Adapark 30 Ağustos Ana Sahne ve LED Ekran Kurulumu",
    caption:
      "Adapark'taki 30 Ağustos Zafer Bayramı sahnesinde ana LED ekran, üst banner LED ekran, truss taşıyıcı yapı ve ışık sistemi birlikte konumlandırıldı.",
  },
  stageDetail: {
    src: `${IMAGE_BASE}/bayrampasa-adapark-sahne-podyum-truss-isik-detayi.webp`,
    width: 1920,
    height: 1440,
    alt: "Bayrampaşa Adapark sahne kurulumunda podyum basamakları, truss konstrüksiyon, ışık ekipmanları ve ana LED ekranın yandan görünümü",
    title: "Adapark Sahne Podyum, Truss ve Işık Kurulum Detayı",
    caption:
      "Yan açıdan çekilen gerçek proje fotoğrafı; podyum yüzeyini, basamak erişimini, truss aksını, ışık ekipmanlarını ve sahne kenarı teknik çalışma alanını gösteriyor.",
  },
};

const PROJECT_FACTS = [
  { label: "Tarih", value: "30 Ağustos 2026", icon: CalendarDays },
  { label: "Lokasyon", value: "Adapark, Bayrampaşa / İstanbul", icon: MapPin },
  { label: "Proje Tipi", value: "Zafer Bayramı Açık Hava Etkinliği", icon: Sparkles },
  { label: "Kapsam", value: "Sahne, LED Ekran, Podyum, Truss ve Işık", icon: Layers3 },
];

const SCOPE_ITEMS = [
  "Açık hava sahne ve podyum kurulumu",
  "Ana LED ekran ve üst banner LED ekran yerleşimi",
  "Truss taşıyıcı sistem ve teknik ekipman konumlandırması",
  "Profesyonel sahne ışık sistemi",
  "Podyum basamakları ve sahne erişim düzeni",
];

const RELATED_SERVICES = [
  {
    href: "/sahne-kiralama",
    title: "Sahne Kiralama",
    description: "Açık hava kutlamaları, konserler ve kurumsal etkinlikler için ölçeğe uygun sahne kurulumu.",
    icon: Layers3,
  },
  {
    href: "/led-ekran-kiralama",
    title: "LED Ekran Kiralama",
    description: "Ana ekran, banner ekran ve sahne içeriği için profesyonel LED görüntü çözümleri.",
    icon: MonitorPlay,
  },
  {
    href: "/podyum-kiralama",
    title: "Podyum Kiralama",
    description: "Etkinlik akışına göre planlanan podyum yüzeyi, basamak ve platform uygulamaları.",
    icon: Layers3,
  },
  {
    href: "/truss-kiralama",
    title: "Truss Kiralama",
    description: "LED ekran ve ışık yerleşimine uygun profesyonel truss taşıyıcı sistemleri.",
    icon: CheckCircle2,
  },
  {
    href: "/ses-isik-sistemleri",
    title: "Ses ve Işık Sistemleri",
    description: "Sahne odağını ve gece görünürlüğünü destekleyen profesyonel ışık sistemi çözümleri.",
    icon: Lightbulb,
  },
];

export const revalidate = 86400;

export const metadata = {
  title: SEO_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "tr-TR": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    type: "article",
    title: `${SEO_TITLE} | Sahneva`,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Sahneva",
    locale: "tr_TR",
    publishedTime: PUBLISHED_AT,
    modifiedTime: MODIFIED_AT,
    images: [
      {
        url: `${SITE_URL}${IMAGES.hero.src}`,
        width: IMAGES.hero.width,
        height: IMAGES.hero.height,
        alt: IMAGES.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SEO_TITLE} | Sahneva`,
    description: META_DESCRIPTION,
    images: [`${SITE_URL}${IMAGES.hero.src}`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

export default function BayrampasaAdaparkVictoryDayProjectPage() {
  const jsonLd = buildJsonLd();

  return (
    <article className="relative isolate min-h-screen overflow-hidden bg-[#0B1120] text-white">
      <JsonLd data={jsonLd} />
      <SiteBackground />

      <section className="relative px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20" aria-labelledby="proje-basligi">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Breadcrumb />
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-violet-100">
              Referans Proje / Açık Hava Sahne Kurulumu
            </p>
            <h1 id="proje-basligi" className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              {PROJECT_NAME}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
              Sahneva, Bayrampaşa Adapark&apos;ta gerçekleştirilen 30 Ağustos 2026 Zafer Bayramı
              programı için sahne, LED ekran, podyum, truss ve profesyonel ışık sistemi kurulumunu
              aynı teknik yerleşim içinde tamamladı.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/sahne-kiralama"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-xl shadow-violet-950/30 transition hover:-translate-y-0.5 hover:bg-violet-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
              >
                Sahne Kurulumu Hizmeti
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
              >
                Benzer Proje İçin Teklif Al
              </Link>
            </div>
          </div>

          <ProjectFigure image={IMAGES.hero} priority />
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECT_FACTS.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/10 backdrop-blur">
              <Icon className="mb-4 h-5 w-5 text-violet-200" aria-hidden="true" />
              <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-100/80">{label}</p>
              <p className="mt-2 text-base font-bold leading-snug text-white">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="proje-ozeti">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionEyebrow>Proje Özeti</SectionEyebrow>
            <h2 id="proje-ozeti" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Adapark&apos;ta 30 Ağustos kutlamasına uygun bütünlüklü sahne kurgusu
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed md:text-lg [&_p]:!text-slate-200">
              <p>
                Bayrampaşa Adapark&apos;taki açık hava etkinlik alanında kurulan sahne; ana LED ekran,
                sahne üstündeki yatay banner LED ekran, podyum yüzeyi, truss taşıyıcı sistem ve
                hareketli ışık ekipmanlarıyla birlikte planlandı. Kırmızı-beyaz sahne dekoru ve
                ekran içerikleri, 30 Ağustos Zafer Bayramı görsel bütünlüğünü sahnenin tamamına taşıdı.
              </p>
              <p>
                Ana LED ekran izleyiciye dönük geniş görsel yüzeyi oluştururken üst banner ekran
                sahne başlığını tamamladı. LED yüzeylerin truss aksı ve ışık ekipmanlarıyla aynı
                hizada ele alınması, gece programında sahnenin farklı görüş noktalarından okunaklı
                kalmasını destekledi.
              </p>
              <p>
                Sahne önündeki podyum yüksekliği, basamak erişimi ve yan teknik çalışma alanı aynı
                sistem içinde kuruldu. Yan açıdaki gerçek proje fotoğrafı, açık hava sahnesinin
                görsel öğeleriyle uygulama ayrıntılarının sahada nasıl buluştuğunu gösteriyor.
              </p>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8" aria-labelledby="kurulum-kapsami">
            <h2 id="kurulum-kapsami" className="text-2xl font-black tracking-tight text-white">
              Kurulum Kapsamı
            </h2>
            <ul className="mt-6 grid gap-3">
              {SCOPE_ITEMS.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-[#0B1120]/55 px-4 py-3 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-200" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="sahne-detayi">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <ProjectFigure image={IMAGES.stageDetail} />
          <div>
            <SectionEyebrow>Gerçek Proje Detayı</SectionEyebrow>
            <h2 id="sahne-detayi" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Podyum, truss ve ışık sisteminin sahne içindeki yerleşimi
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed md:text-lg [&_p]:!text-slate-200">
              <p>
                Yan açıdaki proje fotoğrafı, sahne yüzeyi ile podyum basamaklarının ilişkisini,
                truss konstrüksiyona yerleştirilen ışık ekipmanlarını ve ana LED ekran yüzeyinin
                yandan görünümünü ayrıntılı biçimde gösteriyor.
              </p>
              <p>
                Benzer açık hava projelerinde <Link href="/podyum-kiralama" className="font-bold text-violet-200 underline decoration-violet-300/40 underline-offset-4">podyum kurulumu</Link>,
                {" "}<Link href="/truss-kiralama" className="font-bold text-violet-200 underline decoration-violet-300/40 underline-offset-4">truss sistemi</Link> ve
                {" "}<Link href="/ses-isik-sistemleri" className="font-bold text-violet-200 underline decoration-violet-300/40 underline-offset-4">profesyonel ışık altyapısı</Link>,
                sahnenin ölçüsü ve etkinlik akışıyla birlikte planlanır.
              </p>
              <p>
                Ana ve üst banner ekran yerleşimi hakkında ayrıntılı seçenekler için
                {" "}<Link href="/led-ekran-kiralama" className="font-bold text-violet-200 underline decoration-violet-300/40 underline-offset-4">LED ekran kiralama</Link> hizmetini inceleyebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="ilgili-hizmetler">
        <div className="mx-auto max-w-7xl">
          <SectionEyebrow>İlgili Hizmetler</SectionEyebrow>
          <h2 id="ilgili-hizmetler" className="mt-3 max-w-4xl text-3xl font-black tracking-tight md:text-4xl">
            Açık hava sahnesini oluşturan teknik hizmetler
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {RELATED_SERVICES.map(({ href, title, description, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-violet-300/35 hover:bg-white/[0.09] focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-violet-100">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-black tracking-tight text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-violet-200">
                  Hizmeti İncele
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="teklif-basligi">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600/25 via-white/[0.07] to-slate-950 p-8 text-center shadow-2xl shadow-violet-950/30 backdrop-blur md:p-12">
          <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-violet-100">
            <Sparkles className="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 id="teklif-basligi" className="text-3xl font-black tracking-tight md:text-4xl">
            Açık Hava Etkinliğiniz İçin Sahne ve Teknik Kurulum
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">
            Etkinlik alanı, tarih, sahne ölçüsü ve ihtiyaç duyulan LED ekran, podyum, truss ve ışık
            kapsamını paylaşın; kurulum planını projenize göre birlikte oluşturalım.
          </p>
          <Link
            href="/iletisim"
            className="mt-8 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-black text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-violet-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
          >
            Teklif ve Keşif Talebi Oluştur
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </article>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-300">
      <Link href="/" className="hover:text-white">Ana Sayfa</Link>
      <span aria-hidden="true">/</span>
      <Link href="/projeler" className="hover:text-white">Projeler</Link>
      <span aria-hidden="true">/</span>
      <span className="text-white">Bayrampaşa Adapark 30 Ağustos</span>
    </nav>
  );
}

function ProjectFigure({ image, priority = false }) {
  return (
    <figure className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-violet-950/30">
      <div className="relative aspect-[4/3]">
        <Image
          src={image.src}
          alt={image.alt}
          title={image.title}
          width={image.width}
          height={image.height}
          priority={priority}
          fetchPriority={priority ? "high" : undefined}
          loading={priority ? undefined : "lazy"}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/35 via-transparent to-transparent" aria-hidden="true" />
      </div>
      <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-slate-300">
        {image.caption}
      </figcaption>
    </figure>
  );
}

function SectionEyebrow({ children }) {
  return <p className="m-0 text-xs font-black uppercase tracking-[0.28em] text-violet-200">{children}</p>;
}

function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(167,139,250,0.16),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(124,58,237,0.18),transparent_34%),linear-gradient(180deg,#0B1120_0%,#020617_100%)]" />
      <div className="absolute inset-0 grid-overlay opacity-45" />
      <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-violet-400/10 to-transparent" />
    </div>
  );
}

function buildJsonLd() {
  const imageObjects = Object.values(IMAGES).map((image, index) => ({
    "@type": "ImageObject",
    "@id": `${PAGE_URL}#image-${index + 1}`,
    contentUrl: `${SITE_URL}${image.src}`,
    url: `${SITE_URL}${image.src}`,
    name: image.title,
    caption: image.caption,
    width: image.width,
    height: image.height,
    inLanguage: "tr-TR",
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: SEO_TITLE,
        description: META_DESCRIPTION,
        inLanguage: "tr-TR",
        datePublished: PUBLISHED_AT,
        dateModified: MODIFIED_AT,
        primaryImageOfPage: { "@id": `${PAGE_URL}#image-1` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#project` },
        publisher: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": ["CreativeWork", "Project"],
        "@id": `${PAGE_URL}#project`,
        name: PROJECT_NAME,
        headline: PROJECT_NAME,
        description: META_DESCRIPTION,
        url: PAGE_URL,
        image: Object.values(IMAGES).map((image) => `${SITE_URL}${image.src}`),
        provider: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        dateCreated: "2026-08-30",
        datePublished: PUBLISHED_AT,
        dateModified: MODIFIED_AT,
        locationCreated: {
          "@type": "Place",
          name: "Adapark",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bayrampaşa",
            addressRegion: "İstanbul",
            addressCountry: "TR",
          },
        },
        inLanguage: "tr-TR",
        about: [
          "30 Ağustos Zafer Bayramı sahne kurulumu",
          "açık hava sahnesi",
          "LED ekran kurulumu",
          "podyum kurulumu",
          "truss sistemi",
          "profesyonel sahne ışığı",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Projeler", item: `${SITE_URL}/projeler` },
          { "@type": "ListItem", position: 3, name: PROJECT_NAME, item: PAGE_URL },
        ],
      },
      ...imageObjects,
    ],
  };
}

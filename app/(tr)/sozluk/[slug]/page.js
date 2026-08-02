import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import JsonLdScript from "@/components/seo/JsonLd";
import { GLOSSARY_TERMS } from "@/lib/glossary";
import { LINE_ARRAY_DETAIL_CONTENT } from "@/lib/glossaryDetailContent";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";

const SITE = "https://www.sahneva.com";
const PAGE_PATH = "/sozluk/line-array";
const PAGE_URL = "https://www.sahneva.com/sozluk/line-array";
const HERO_IMAGE = "/img/sozluk/line-array-tavandan-asilmis-dizi-sistemi.webp";
const EQUIPMENT_DETAIL_IMAGE = "/img/sozluk/line-array-ekipman-detayi.webp";
const CORPORATE_EVENT_IMAGE = "/img/sozluk/line-array-kurumsal-etkinlik-uygulamasi.webp";
const FESTIVAL_IMAGE = "/img/sozluk/line-array-acik-hava-festival-kurulumu.webp";

const RELATED_SERVICES = [
  {
    href: "/ses-isik-sistemleri",
    title: "Ses ve Işık Sistemleri",
    description: "Line array, dijital mikser, kablosuz sistem ve canlı operasyonun birlikte planlanması.",
  },
  {
    href: "/truss-kiralama",
    title: "Truss Kiralama",
    description: "Ses sisteminin güvenli taşıyıcı altyapı ve rigging planıyla birlikte kurulması.",
  },
  {
    href: "/kurumsal-organizasyon",
    title: "Kurumsal Organizasyon",
    description: "Sahne, LED ekran, ses ve operasyon akışını tek teknik plan altında birleştiren çözümler.",
  },
];

const RELATED_TERM_SLUGS = ["foh", "rigging", "soundcheck"];

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return [{ slug: "line-array" }];
}

function getLineArrayTerm(slug) {
  const term = GLOSSARY_TERMS.find(
    (entry) => entry.slug === "line-array" && slug === entry.slug
  );

  if (!term) notFound();
  return term;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  getLineArrayTerm(slug);

  return {
    title: "Line Array Nedir? | Profesyonel Ses Sistemi Rehberi",
    description:
      "Line array ses sistemi nedir? Kapsama, açılandırma, subwoofer yerleşimi, FOH ve salon yapısına göre profesyonel ses sistemi planlama rehberi.",
    alternates: buildLanguageAlternates({
      tr: PAGE_URL,
      canonical: PAGE_URL,
      xDefault: PAGE_URL,
    }),
    openGraph: {
      type: "website",
      url: PAGE_URL,
      siteName: "Sahneva",
      locale: "tr_TR",
      title: "Line Array Nedir? | Sahneva",
      description:
        "Line array sisteminin çalışma mantığı, kapsama planı, rigging, subwoofer ve FOH ilişkisini saha pratiğiyle açıklıyoruz.",
      images: [
        {
          url: `${SITE}${HERO_IMAGE}`,
          width: 1170,
          height: 662,
          alt: "Tavana asılmış profesyonel line array ses sistemi",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Line Array Nedir? | Sahneva",
      description:
        "Kapsama, açılandırma, subwoofer ve FOH kararlarıyla line array ses sistemi rehberi.",
      images: [`${SITE}${HERO_IMAGE}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function LineArrayJsonLd({ term }) {
  const pageId = `${PAGE_URL}#webpage`;
  const termId = `${PAGE_URL}#definedterm`;
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const imageId = `${PAGE_URL}#equipment-image`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: PAGE_URL,
        name: "Line Array Nedir?",
        description: "Line array ses sisteminin kapsama, açılandırma, subwoofer ve FOH ilişkisiyle açıklaması.",
        inLanguage: "tr-TR",
        isPartOf: { "@id": WEBSITE_ID },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntity: { "@id": termId },
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: { "@id": imageId },
      },
      {
        "@type": "DefinedTerm",
        "@id": termId,
        name: term.term,
        alternateName: term.aliases,
        description: term.definition,
        url: PAGE_URL,
        inDefinedTermSet: { "@id": `${SITE}/sozluk#termset` },
        inLanguage: "tr-TR",
        subjectOf: {
          "@type": "WebPage",
          "@id": pageId,
          url: PAGE_URL,
          name: "Line Array Nedir?",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Sözlük", item: `${SITE}/sozluk` },
          { "@type": "ListItem", position: 3, name: term.term, item: PAGE_URL },
        ],
      },
      {
        "@type": "ImageObject",
        "@id": imageId,
        contentUrl: `${SITE}${HERO_IMAGE}`,
        width: 1170,
        height: 662,
        caption: "Tavana asılmış profesyonel line array ses sistemi",
      },
    ],
  };

  return <JsonLdScript id="ld-json-sozluk-line-array" data={data} />;
}

export default async function LineArrayGlossaryPage({ params }) {
  const { slug } = await params;
  const term = getLineArrayTerm(slug);
  const relatedTerms = GLOSSARY_TERMS.filter((entry) =>
    RELATED_TERM_SLUGS.includes(entry.slug)
  );

  return (
    <div className="bg-white text-slate-900">
      <LineArrayJsonLd term={term} />

      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white sm:py-20">
        <div
          className="absolute inset-0"
        >
          <Image
            src={HERO_IMAGE}
            alt="Tavana asılmış profesyonel line array ses sistemi"
            width={1170}
            height={662}
            priority
            sizes="100vw"
            className="h-full w-full object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.23),transparent_38%),linear-gradient(100deg,rgba(2,6,23,.97),rgba(2,6,23,.86)_48%,rgba(15,23,42,.56))]"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-5xl">
          <nav aria-label="Site içi konum" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/60">
              <li><Link href="/" className="hover:text-white">Ana Sayfa</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/sozluk" className="hover:text-white">Sözlük</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/90">Line Array</li>
            </ol>
          </nav>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-300">Ses sistemleri sözlüğü</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Line Array Nedir?
          </h1>
          <p data-speakable className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Line array sistemini sadece hoparlör adediyle değil; kapsama hedefi, açılandırma,
            salon yapısı, subwoofer planı ve FOH operasyonuyla birlikte değerlendiririz.
          </p>
        </div>
      </section>

      <main>
        <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16" aria-labelledby="kisa-tanim">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">Kısa tanım</p>
            <h2 id="kisa-tanim" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Uzak mesafeye kontrollü ses taşımak için tasarlanan dizi sistemi
            </h2>
            {LINE_ARRAY_DETAIL_CONTENT.shortDefinition.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <figure className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src={EQUIPMENT_DETAIL_IMAGE}
              alt="Sahneva profesyonel line array ses sistemi ekipmanları"
              width={1600}
              height={720}
              sizes="(max-width: 768px) 100vw, 1152px"
              className="h-auto w-full"
            />
            <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">
              Sahneva profesyonel line array ses sistemi ekipmanları
            </figcaption>
          </figure>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 px-4 py-14 sm:py-16" aria-labelledby="calisma-mantigi">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">Sistemin çalışma mantığı</p>
              <h2 id="calisma-mantigi" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Dizinin açısı, dinleyici alanına göre kurulur
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              {LINE_ARRAY_DETAIL_CONTENT.operatingPrinciple.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16" aria-labelledby="geleneksel-fark">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">Geleneksel hoparlörden farkı</p>
          <h2 id="geleneksel-fark" className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Line array bir ürün değil, alanı kapsama yaklaşımıdır
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {LINE_ARRAY_DETAIL_CONTENT.traditionalDifference.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black tracking-tight">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-14 text-white sm:py-16" aria-labelledby="kullanim-etkinlikleri">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-300">Kullanım etkinlikleri</p>
              <h2 id="kullanim-etkinlikleri" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Farklı ölçeklerde, farklı ses hedefleri
              </h2>
              <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
                Aynı sistem planı her etkinlik formatına taşınmaz. Konuşma netliği, canlı müzik
                dinamiği, sahne kurgusu ve seyirci dağılımı; teknik ekibin keşifte birlikte okuduğu verilerdir.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {LINE_ARRAY_DETAIL_CONTENT.useCases.map((item) => (
                <li key={item} className="rounded-2xl border border-white/15 bg-white/5 p-5 text-base font-bold leading-7 text-white/90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16" aria-labelledby="planlama">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">Hoparlör adedi ve asılma açısının belirlenmesi</p>
            <h2 id="planlama" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Adet, açı ve asılma yüksekliği keşif sonucudur
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
              Evrensel bir modül sayısı ya da sabit asılma açısı yoktur. Sistem tasarımı, etkinliğin
              gerçek mekanında güvenlik ve ses hedefi birlikte değerlendirilerek yapılır.
            </p>
          </div>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {LINE_ARRAY_DETAIL_CONTENT.arrayPlanning.map((item, index) => (
              <li key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-black text-white">{index + 1}</span>
                <span className="text-base leading-7 text-slate-700">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 px-4 py-14 sm:py-16" aria-labelledby="secim-kriterleri">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">Seçim kriterleri</p>
              <h2 id="secim-kriterleri" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Doğru sistem, program ve mekânla birlikte seçilir
              </h2>
            </div>
            <ul className="space-y-3">
              {LINE_ARRAY_DETAIL_CONTENT.selectionCriteria.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-base leading-7 text-slate-700 shadow-sm">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16" aria-labelledby="sik-hatalar">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">Sık hatalar</p>
          <h2 id="sik-hatalar" className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Ses sistemi kararını tek bir değişkene indirmemek gerekir
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {LINE_ARRAY_DETAIL_CONTENT.commonMistakes.map((item) => (
              <li key={item} className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-base leading-7 text-slate-800">{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-slate-950 px-4 py-14 text-white sm:py-16" aria-labelledby="kurumsal-kullanim">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <figure className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-slate-900">
              <Image
                src={CORPORATE_EVENT_IMAGE}
                alt="Kurumsal etkinlikte kurulu line array ses sistemi"
                width={720}
                height={1600}
                sizes="(max-width: 1024px) 100vw, 384px"
                className="h-auto w-full"
              />
              <figcaption className="px-5 py-4 text-sm leading-6 text-white/65">Kurumsal etkinlikte kurulu line array ses sistemi</figcaption>
            </figure>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-300">Kurumsal kullanım örneği</p>
              <h2 id="kurumsal-kullanim" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Görsel sahne kurgusunun yanında çalışan ses planı
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-white/75 sm:text-lg">
                {LINE_ARRAY_DETAIL_CONTENT.corporateUse.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50 px-4 py-14 sm:py-16" aria-labelledby="sahneva-uygulama">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
              <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src={FESTIVAL_IMAGE}
                  alt="Açık hava festival sahnesinde kurulu line array ses sistemi"
                  width={1600}
                  height={739}
                  sizes="(max-width: 1024px) 100vw, 672px"
                  className="h-auto w-full"
                />
                <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">Açık hava festival sahnesinde kurulu line array ses sistemi</figcaption>
              </figure>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">Sahneva gerçek uygulama örneği</p>
                <h2 id="sahneva-uygulama" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Açık hava festival sahnesinde bütünleşik ses planı
                </h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
                  {LINE_ARRAY_DETAIL_CONTENT.festivalApplication.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16" aria-labelledby="ilgili-hizmetler">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">İlgili hizmetler</p>
          <h2 id="ilgili-hizmetler" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Teknik planı tamamlayan hizmetler</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {RELATED_SERVICES.map((service) => (
              <Link key={service.href} href={service.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md">
                <h3 className="text-xl font-black tracking-tight group-hover:text-blue-800">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-700">{service.description}</p>
                <span className="mt-5 inline-flex text-sm font-black text-blue-700 underline underline-offset-4">Hizmeti incele <span aria-hidden="true" className="ml-1.5">→</span></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 px-4 py-14 sm:py-16" aria-labelledby="ilgili-terimler">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-700">İlgili teknik terimler</p>
            <h2 id="ilgili-terimler" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Line array planında sık geçen başlıklar</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedTerms.map((relatedTerm) => (
                <Link key={relatedTerm.slug} href={`/sozluk#${relatedTerm.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-400 hover:shadow-md">
                  <h3 className="text-xl font-black tracking-tight text-slate-950">{relatedTerm.term}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-700">{relatedTerm.definition}</p>
                  <span className="mt-5 inline-flex text-sm font-black text-blue-700 underline underline-offset-4">Sözlükte görüntüle</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:py-16" aria-labelledby="iletisim-cta">
          <div className="mx-auto max-w-4xl rounded-3xl bg-slate-950 px-6 py-10 text-center text-white sm:px-10 sm:py-14">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-300">İletişim</p>
            <h2 id="iletisim-cta" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Etkinliğiniz için doğru ses planını birlikte çıkaralım</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Tarih, mekan krokisi, seyirci düzeni, program akışı ve varsa sahne görsellerini paylaşın; line array,
              subwoofer, FOH ve rigging ihtiyaçlarını aynı teknik plan içinde değerlendirelim.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/iletisim" className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-white px-6 text-sm font-black text-slate-950 transition hover:bg-blue-100">Teklif ve keşif talep edin</Link>
              <Link href="/ses-isik-sistemleri" className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border-2 border-white/80 px-6 text-sm font-black text-white transition hover:bg-white hover:text-slate-950">Ses sistemlerini inceleyin</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cable,
  ClipboardList,
  MapPin,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLdScript from "@/components/seo/JsonLd";
import { buildAlternatesForPath } from "@/lib/seo/alternates";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import {
  ADDITIONAL_CATALOG_GROUPS,
  CATALOG_CATEGORIES,
} from "./catalog";

export const revalidate = 86400;

const ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");
const PAGE_PATH = "/sisme-oyun-parki-kiralama";
const PAGE_URL = ORIGIN + PAGE_PATH;
const TITLE = "Şişme Oyun Parkı Kiralama İstanbul";
const DESCRIPTION =
  "İstanbul merkezli şişme oyun parkı kiralama: kaydırak, engel parkuru ve takım oyunları için Türkiye geneli nakliye, kurulum ve söküm.";
const PHONE = "+905453048671";
const OG_PATH =
  "/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-cocuk-ve-genclik-etkinlik-alani.webp";
const OG_IMAGE = ORIGIN + OG_PATH;

function getWhatsappUrl(model = "") {
  const message = [
    "Merhaba, şişme oyun parkı kiralama için teklif istiyorum.",
    model ? "Model / kategori: " + model + "." : "Model / kategori: [seçim].",
    "Tarih: [gg.aa.yyyy].",
    "Şehir / ilçe: [konum].",
    "Etkinlik: [okul şenliği / kurum pikniği / festival / doğum günü].",
    "Yaş grubu ve katılımcı: [bilgi].",
    "Kullanılabilir alan ve zemin: [en × boy / çim / beton / salon].",
  ].join(" ");

  return (
    "https://wa.me/" +
    PHONE.replace("+", "") +
    "?text=" +
    encodeURIComponent(message)
  );
}

const WHATSAPP = getWhatsappUrl();

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "şişme oyun parkı kiralama",
    "şişme oyun parkı kiralama İstanbul",
    "şişme oyun alanı kiralama",
    "şişme oyuncak kiralama",
    "oyun parkuru kiralama",
    "engelli parkur kiralama",
    "kurumsal takım oyunları",
  ],
  alternates: buildAlternatesForPath(PAGE_PATH),
  openGraph: {
    title: TITLE + " | Sahneva",
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: OG_IMAGE,
        width: 3264,
        height: 1472,
        alt: "Sahneva DicleFest çocuk ve gençlik etkinlik alanı uygulaması",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE + " | Sahneva",
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: AI_PREVIEW_ROBOTS,
};

const FAQ_ITEMS = [
  {
    question: "Şişme oyun parkı kiralama fiyatları neye göre belirlenir?",
    answer:
      "Fiyat; model ölçüsü, kullanım süresi, tarih, şehir, saha erişimi, zemin, elektrik ihtiyacı ve görevli sayısına göre hesaplanır. Katalogda doğrulanmış sabit fiyat bulunmadığı için rakam uydurmak yerine brief üzerinden kalem kalem teklif hazırlıyoruz.",
  },
  {
    question: "İstanbul dışında kurulum yapıyor musunuz?",
    answer:
      "Evet. İstanbul merkezli ekiple Türkiye genelinde proje planlayabiliyoruz. Şehir dışı işlerde nakliye, ekip ulaşımı, gerekiyorsa konaklama ve kurulum takvimi teklifte ayrıca gösterilir.",
  },
  {
    question: "Hangi modelin alana sığacağını nasıl belirliyorsunuz?",
    answer:
      "Net en, boy ve tavan yüksekliği; giriş genişliği, zemin türü ve çevrede bırakılacak güvenli boşlukla birlikte değerlendirilir. Ürün ölçüsüne ek olarak kullanıcı dolaşımı ve teknik çalışma alanı gerekir.",
  },
  {
    question: "Şişme oyun alanı için elektrik gerekir mi?",
    answer:
      "Çoğu şişme model sürekli çalışan bir veya daha fazla şişiriciye ihtiyaç duyar. Priz, hat kapasitesi ve kablo mesafesi seçilen model doğrulandıktan sonra belirtilir; yetersiz altyapıda jeneratör planlanabilir.",
  },
  {
    question: "Kurulum, görevli ve söküm hizmete dahil mi?",
    answer:
      "Kapsam teklif üzerinde açıkça yazılır. Nakliye, kurulum, sabitleme, oyun alanı görevlisi, kullanım süresi ve söküm kalemlerini tek tek netleştiririz.",
  },
  {
    question: "Yağmur veya kuvvetli rüzgârda kurulum yapılır mı?",
    answer:
      "Açık hava kurulumunda hava tahmini, zemin ve ürün kullanım sınırları birlikte değerlendirilir. Güvenli olmayan koşullarda model değişikliği, kapalı alan veya tarih planı önerilir.",
  },
  {
    question: "Seçtiğim ürün için teknik doküman alabilir miyim?",
    answer:
      "Evet. Model kesinleştikten sonra mevcut ölçü, güç, saha ve operasyon bilgilerini içeren teknik özeti paylaşabiliriz. Güncel uygunluk ve teknik bilgi teklif öncesinde ayrıca doğrulanır.",
  },
];

const PRICE_FACTORS = [
  {
    title: "Model ve ölçü",
    text: "Kompakt top havuzu ile 21 metrelik engel parkurunun taşıma ve alan ihtiyacı aynı değildir.",
    icon: Ruler,
  },
  {
    title: "Tarih ve süre",
    text: "Etkinlik tarihi, toplam kullanım süresi ve özel gün yoğunluğu operasyon planını etkiler.",
    icon: ClipboardList,
  },
  {
    title: "Şehir ve erişim",
    text: "Nakliye mesafesi, araç yaklaşımı, yükleme noktası ve kurulum katı ayrıca değerlendirilir.",
    icon: Truck,
  },
  {
    title: "Zemin ve sabitleme",
    text: "Çim, beton, asfalt veya salon zemini için uygun sabitleme ve koruma yöntemi seçilir.",
    icon: ShieldCheck,
  },
  {
    title: "Elektrik altyapısı",
    text: "Şişirici sayısı ve güç ihtiyacı modele göre doğrulanır; gerekirse jeneratör planlanır.",
    icon: Cable,
  },
  {
    title: "Görevli ve akış",
    text: "Eşzamanlı kullanıcı sayısı, tur süresi ve saha görevlisi ihtiyacı briefe göre yazılır.",
    icon: Users,
  },
];

const RELATED = [
  {
    href: "/kurumsal-organizasyon",
    title: "Kurumsal organizasyon",
    text: "Kurum pikniği, aile günü ve marka etkinliği akışını tek planda kurun.",
  },
  {
    href: "/etkinlik-personel-temini",
    title: "Etkinlik personeli",
    text: "Karşılama, alan görevlisi, güvenlik ve temizlik ekiplerini planlayın.",
  },
  {
    href: "/cadir-kiralama",
    title: "Etkinlik çadırı",
    text: "Gölgelik, aktivite standı ve kapalı oyun alanı seçeneklerini değerlendirin.",
  },
  {
    href: "/ses-isik-sistemleri",
    title: "Ses ve ışık sistemleri",
    text: "Sunucu, müzik, anons ve sahne akışı için teknik altyapıyı tamamlayın.",
  },
];

function StructuredData() {
  const serviceId = PAGE_URL + "#service";
  const webpageId = PAGE_URL + "#webpage";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: PAGE_URL,
        name: TITLE + " | Sahneva",
        description: DESCRIPTION,
        inLanguage: "tr-TR",
        isPartOf: { "@id": ORIGIN + "/#website" },
        mainEntity: { "@id": serviceId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: OG_IMAGE,
          width: 3264,
          height: 1472,
        },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Şişme Oyun Parkı ve Oyun Parkuru Kiralama",
        alternateName: [
          "Şişme Oyun Alanı Kiralama",
          "Şişme Oyuncak Kiralama",
          "Engelli Parkur Kiralama",
        ],
        serviceType:
          "Şişme oyun parkı, aktivite oyunu ve takım parkuru kiralama",
        description: DESCRIPTION,
        provider: { "@id": ORIGIN + "/#org" },
        areaServed: { "@type": "Country", name: "Türkiye" },
        url: PAGE_URL,
        mainEntityOfPage: { "@id": webpageId },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Şişme oyun parkı ve aktivite kataloğu",
          itemListElement: CATALOG_CATEGORIES.map((category) => ({
            "@type": "OfferCatalog",
            name: category.title,
            itemListElement: category.products.map((product) => ({
              "@type": "Offer",
              businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
              url: PAGE_URL + "#" + product.id,
              eligibleRegion: { "@type": "Country", name: "Türkiye" },
              seller: { "@id": ORIGIN + "/#org" },
              itemOffered: {
                "@type": "Service",
                name: product.name,
                serviceType: category.title,
                image: ORIGIN + product.image,
                provider: { "@id": ORIGIN + "/#org" },
                areaServed: { "@type": "Country", name: "Türkiye" },
                providerMobility: "dynamic",
                description:
                  product.dimension +
                  ". " +
                  product.useCase +
                  ". Proje bazlı kiralama ve saha kurulumu.",
              },
            })),
          })),
        },
      },
    ],
  };

  return <JsonLdScript id="ld-json-sisme-oyun-parki" data={jsonLd} />;
}

function Hero() {
  const previewImages = [
    {
      src: "/img/sisme-oyun-parki/labirent-kalesi.webp",
      alt: "10 x 10 metre labirent oyun kalesi",
      label: "10 × 10 m labirent kalesi",
    },
    {
      src: "/img/sisme-oyun-parki/coklu-engel-parkuru.webp",
      alt: "21 metrelik çoklu şişme engel parkuru",
      label: "21 m çoklu engel parkuru",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#07091a] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.34),transparent_36%),radial-gradient(circle_at_86%_70%,rgba(34,197,94,0.18),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-400/10 px-4 py-2 text-sm font-bold text-violet-100">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            İstanbul merkezli · Türkiye geneli kurulum
          </div>
          <h1 className="mt-7 text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl lg:text-7xl">
            Şişme Oyun Parkı ve{" "}
            <span className="bg-gradient-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
              Oyun Parkuru Kiralama
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Çocuk oyun alanından 21 metrelik engel parkuruna; kurum pikniği,
            okul şenliği, festival ve marka aktivasyonları için model seçimi,
            nakliye, kurulum, saha akışı ve sökümü tek briefte planlıyoruz.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Okul şenliği",
              "Kurum pikniği",
              "Festival",
              "Doğum günü",
              "Takım oyunu",
            ].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm font-semibold text-slate-200"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-6 py-3.5 font-black transition hover:bg-violet-400"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Etkinlik briefi gönderin
            </a>
            <a
              href="#modeller"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-3.5 font-black transition hover:bg-white/10"
            >
              Modelleri inceleyin
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400">
            Katalog görselleri proje bazlı tedarik seçeneklerini gösterir.
            Güncel model, teknik bilgi ve kapsam teklif öncesinde doğrulanır.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <figure className="group relative col-span-2 h-56 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900 sm:h-72">
            <Image
              src={OG_PATH}
              alt="DicleFest Şanlıurfa çocuk ve gençlik etkinlik alanı"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-5 pb-4 pt-14 text-sm font-bold">
              Sahneva saha uygulaması · DicleFest etkinlik alanı
            </figcaption>
          </figure>
          {previewImages.map((item) => (
            <figure
              key={item.src}
              className="relative h-40 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 sm:h-52"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 27vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-3 pb-3 pt-10 text-xs font-bold sm:text-sm">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <article
      id={product.id}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.name + " kiralama için örnek ürün görseli"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
          Proje bazlı tedarik
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black text-slate-950">{product.name}</h3>
        <p className="mt-3 flex items-start gap-2 text-sm font-bold text-violet-700">
          <Ruler className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {product.dimension}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {product.useCase}
        </p>
        <a
          href={getWhatsappUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-black text-slate-900 underline decoration-violet-400/60 underline-offset-4 hover:text-violet-700"
          aria-label={product.name + " için WhatsApp üzerinden teklif alın"}
        >
          Bu seçenek için teklif alın
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function Catalog() {
  return (
    <section
      id="modeller"
      className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="modeller-baslik"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-violet-700">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Görsel ürün seçimi
          </div>
          <h2
            id="modeller-baslik"
            className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl"
          >
            Şişme oyun parkı kiralama seçenekleri
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Şişme oyun alanı, şişme oyuncak, engelli oyun parkuru ve takım
            oyunlarını kullanım amacına göre ayırdık. İlk kategori açıktır;
            diğer grupları gerektiğinde genişletebilirsiniz.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {CATALOG_CATEGORIES.map((category, index) => (
            <details
              key={category.id}
              open={index === 0}
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm open:shadow-lg sm:p-7"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 marker:hidden">
                <span className="flex items-start gap-4">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-2xl"
                    aria-hidden="true"
                  >
                    {category.icon}
                  </span>
                  <span>
                    <span className="block text-xl font-black text-slate-950 sm:text-2xl">
                      {category.title}
                    </span>
                    <span className="mt-2 block max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
                      {category.description}
                    </span>
                  </span>
                </span>
                <span className="mt-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-700 group-open:bg-violet-100 group-open:text-violet-800">
                  {category.products.length} seçenek
                </span>
              </summary>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {category.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </details>
          ))}
        </div>

        <details className="mt-6 rounded-[1.75rem] border border-violet-200 bg-violet-50/70 p-6 sm:p-8">
          <summary className="cursor-pointer list-none text-xl font-black text-violet-950 marker:hidden">
            Katalogdaki diğer aktivite seçeneklerini görün
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-violet-900/75">
            Bu liste kısa seçim içindir. Güncel model, görsel, teknik özellik ve
            müsaitlik etkinlik tarihi paylaşıldıktan sonra doğrulanır.
          </p>
          <div className="mt-7 grid gap-6 md:grid-cols-2">
            {ADDITIONAL_CATALOG_GROUPS.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-violet-200 bg-white p-5"
              >
                <h3 className="font-black text-slate-950">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

function PlanningAndPricing() {
  const steps = [
    {
      number: "01",
      title: "Etkinlik briefi",
      text: "Tarih, şehir, yaş grubu, katılımcı sayısı, alan ölçüsü, zemin ve süreyi alırız.",
    },
    {
      number: "02",
      title: "Model ve saha eşleştirmesi",
      text: "Ürün ölçüsünü dolaşım alanı, tavan, elektrik ve araç erişimiyle birlikte kontrol ederiz.",
    },
    {
      number: "03",
      title: "Teklif ve saha operasyonu",
      text: "Model, nakliye, kurulum, görevli, kullanım süresi ve sökümü yazılı teklifte netleştiririz.",
    },
  ];

  return (
    <>
      <section
        className="bg-[#090c1d] px-4 py-20 text-white sm:px-6 lg:px-8"
        aria-labelledby="planlama-baslik"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em] text-violet-300">
              Kurulumdan önce
            </span>
            <h2
              id="planlama-baslik"
              className="mt-4 text-3xl font-black tracking-tight sm:text-5xl"
            >
              Doğru parkuru yalnız fotoğrafa bakarak seçmeyin
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Kullanıcı yaşı, kapasite, net kurulum alanı ve elektrik altyapısı
              model seçiminden önce doğrulanır.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-black text-slate-950 transition hover:bg-violet-100"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Alan bilgilerini gönderin
            </a>
          </div>
          <ol className="space-y-4">
            {steps.map((step) => (
              <li
                key={step.number}
                className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:grid-cols-[4rem_1fr]"
              >
                <span className="text-3xl font-black text-violet-300">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-black">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-300">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        aria-labelledby="fiyat-baslik"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-violet-700">
              Proje bazlı fiyat
            </span>
            <h2
              id="fiyat-baslik"
              className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl"
            >
              Şişme oyun parkı kiralama fiyatını belirleyen kalemler
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Rakip fiyatlarını veya katalogda bulunmayan rakamları
              kopyalamıyoruz. Teklif aşağıdaki gerçek girdilerle hazırlanır.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRICE_FACTORS.map((factor) => {
              const Icon = factor.icon;
              return (
                <article
                  key={factor.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <Icon className="h-8 w-8 text-violet-700" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    {factor.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {factor.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function FieldProof() {
  const images = [
    {
      src: "/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-oyun-alani-langirt.webp",
      alt: "DicleFest Şanlıurfa langırt oyun alanı",
    },
    {
      src: "/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-oyun-alani-masa-tenisi.webp",
      alt: "DicleFest Şanlıurfa masa tenisi aktivite alanı",
    },
    {
      src: "/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-aktivite-alani-truss-oyun-kurgusu.webp",
      alt: "DicleFest Şanlıurfa truss oyun alanı kurgusu",
    },
  ];

  return (
    <section
      className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8"
      aria-labelledby="saha-baslik"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em] text-violet-300">
              Gerçek saha operasyonu
            </span>
            <h2
              id="saha-baslik"
              className="mt-4 text-3xl font-black tracking-tight sm:text-5xl"
            >
              Oyun alanı genel etkinlik akışından ayrı kurulmaz
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-slate-300">
              DicleFest uygulamasında çocuk ve gençlik alanları; çadır, enerji,
              ziyaretçi dolaşımı ve saha planıyla birlikte ele alındı. Bu
              referans şişme ürün stoğu değil, Sahneva’nın etkinlik alanı
              operasyonunu gösterir.
            </p>
            <Link
              href="/projeler/diclefest-sanliurfa"
              className="mt-5 inline-flex items-center gap-2 font-black text-violet-300 hover:text-violet-200"
            >
              DicleFest proje detayını inceleyin
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {images.map((image, index) => (
            <figure
              key={image.src}
              className={
                "relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 " +
                (index === 2 ? "h-72 sm:h-64" : "h-52 sm:h-64")
              }
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqAndRelated() {
  return (
    <>
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        aria-labelledby="sss-baslik"
      >
        <div className="mx-auto max-w-4xl">
          <span className="text-sm font-black uppercase tracking-[0.18em] text-violet-700">
            Teklif öncesi sorular
          </span>
          <h2
            id="sss-baslik"
            className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl"
          >
            Şişme oyun parkı kiralama hakkında sık sorulanlar
          </h2>
          <div className="mt-10 space-y-4">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none text-lg font-black text-slate-950 marker:hidden">
                  {item.question}
                </summary>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="ilgili-baslik"
      >
        <div className="mx-auto max-w-7xl">
          <h2 id="ilgili-baslik" className="text-2xl font-black text-slate-950">
            Etkinlik alanını tamamlayan hizmetler
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RELATED.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-violet-300 hover:shadow-lg"
              >
                <span className="flex items-center justify-between gap-3 font-black text-slate-950">
                  {item.title}
                  <ArrowRight
                    className="h-4 w-4 text-violet-700 transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-3 block text-sm leading-relaxed text-slate-600">
                  {item.text}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function Page() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: ORIGIN },
    { name: "Hizmetler", url: ORIGIN + "/hizmetler" },
    { name: "Şişme Oyun Parkı Kiralama", url: PAGE_URL },
  ];

  return (
    <div className="bg-white">
      <StructuredData />
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={ORIGIN} />
      <Hero />
      <Catalog />
      <PlanningAndPricing />
      <FieldProof />
      <FaqAndRelated />
    </div>
  );
}

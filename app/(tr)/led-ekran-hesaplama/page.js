import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_URL = `${SITE_URL}/led-ekran-hesaplama`;

export const revalidate = 86400;

export const metadata = {
  // Marka adini yazma: (tr)/layout.js sablonu zaten " | Sahneva" ekliyor.
  title: "LED Ekran Ölçüsü Planlama Rehberi",
  description:
    "LED ekran ölçüsü, izleme mesafesi, pixel pitch ve kurulum erişimini planlayın. Fiyat ve m² maliyet hesabı için ayrı LED ekran fiyat rehberini inceleyin.",
  alternates: buildLanguageAlternates({ tr: PAGE_URL, canonical: PAGE_URL }),
  openGraph: {
    title: "LED Ekran Ölçüsü Planlama Rehberi | Sahneva",
    description:
      "LED ekran ölçüsü, izleme mesafesi, pixel pitch ve kurulum erişimi için teknik planlama notları.",
    url: PAGE_URL,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${SITE_URL}/img/led/kurumsal-konferans-led-ekran-sahne-isik-sahneva.webp`,
        width: 1200,
        height: 630,
        alt: "Kurumsal etkinlikte LED ekran ölçüsü ve teknik kurulum planlaması",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Ekran Ölçüsü Planlama Rehberi | Sahneva",
    description: "LED ekran ölçüsü, izleme mesafesi ve panel seçimi için teknik planlama notları.",
    images: [`${SITE_URL}/img/led/kurumsal-konferans-led-ekran-sahne-isik-sahneva.webp`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

const PLANNING_STEPS = [
  {
    title: "Genişlik ve yüksekliği belirleyin",
    text: "Sahnedeki görünür alanı, dekoru ve güvenli boşlukları birlikte ölçün. Ekran yüzeyi genişlik × yükseklik hesabıyla netleşir.",
  },
  {
    title: "İzleme mesafesini değerlendirin",
    text: "Yakın izleme için daha sık pixel pitch; uzak izleme ve açık hava için parlaklık ile panel dayanımı öne çıkar.",
  },
  {
    title: "İçerik ve teknik akışı paylaşın",
    text: "Sunum, kamera, canlı yayın veya marka filmi; görüntü işlemcisi, reji ve sinyal akışının hangi kapsamda planlanacağını belirler.",
  },
  {
    title: "Kurulum erişimini doğrulayın",
    text: "Yükleme saati, asma veya ground-stack yöntemi, elektrik hattı ve saha erişimi kurulum planının temel girdileridir.",
  },
];

const PLANNING_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: "LED Ekran Ölçüsü Planlama Rehberi",
  description:
    "LED ekran ölçüsü, izleme mesafesi, pixel pitch ve kurulum erişimi için teknik planlama rehberi.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: [
    "LED ekran kiralama",
    "LED ekran ölçüsü",
    "pixel pitch",
    "etkinlik teknik prodüksiyonu",
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Sahneva", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "LED Ekran Kiralama", item: `${SITE_URL}/led-ekran-kiralama` },
      { "@type": "ListItem", position: 3, name: "LED Ekran Ölçüsü Planlama", item: PAGE_URL },
    ],
  },
};

export default function Page() {
  return (
    <main className="bg-slate-950 pb-20 text-white">
      <JsonLd id="ld-json-led-ekran-olcu-planlama" data={PLANNING_PAGE_SCHEMA} />
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.34),transparent_48%)] px-4 pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-blue-200">Teknik planlama rehberi</p>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">LED ekran ölçüsünü doğru planlayın</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
            Bu sayfa ekran ölçüsü, izleme mesafesi ve kurulum koşullarını netleştirmenize yardımcı olur. Ana hizmet kapsamı ve teknik çözüm seçenekleri için önce hizmet sayfasını inceleyin.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/led-ekran-kiralama"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-white px-7 py-4 font-black text-slate-950 transition hover:bg-blue-100"
            >
              LED ekran kiralama hizmeti
            </Link>
            <Link
              href="/led-ekran-kiralama-fiyatlari#led-ekran-hesaplama-araci"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/30 px-7 py-4 font-black text-white transition hover:bg-white/10"
            >
              LED ekran kiralama fiyatları ve hesaplama aracı
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {PLANNING_STEPS.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-7">
              <p className="text-sm font-black text-blue-200">Adım {index + 1}</p>
              <h2 className="mt-3 text-2xl font-black">{step.title}</h2>
              <p className="mt-4 leading-7 text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-blue-300/20 bg-blue-500/10 p-7 text-center md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-200">Fiyat ve m² hesabı</p>
          <h2 className="mt-3 text-3xl font-black">Hesaplama ve maliyet kalemleri fiyat sayfasında</h2>
          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-200">
            Birim bedeller, paket kapsamları ve fiyat hesaplama aracı yalnızca LED ekran kiralama fiyatları sayfasında yer alır. Böylece hizmet seçimi ile fiyat araştırması ayrı ve net kalır.
          </p>
          <Link
            href="/led-ekran-kiralama-fiyatlari#led-ekran-hesaplama-araci"
            className="mt-7 inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-white px-7 py-4 font-black text-slate-950 transition hover:bg-blue-100"
          >
            LED ekran kiralama fiyatlarını incele
          </Link>
        </div>
      </section>
    </main>
  );
}

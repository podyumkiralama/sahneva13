import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

/* ================== SABİTLER ================== */
const ORIGIN = "https://www.sahneva.com";
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? ORIGIN).replace(/\/$/, "");

const SLUG = "sahne-kiralama-fiyatlari-neye-gore-belirlenir";
const BLOG_PATH = `/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

/* OG IMAGE = HERO */
const HERO_IMG = "/img/blog/sahne-kiralama-fiyatlari-hero.webp";
const IMG_M2 = "/img/blog/sahne-kiralama-fiyatlari-m2-olcu.webp";
const IMG_TEKNIK = "/img/blog/sahne-kiralama-fiyatlari-teknik-sistemler.webp";
const IMG_CADIR = "/img/blog/sahne-kiralama-fiyatlari-cadir-m2.webp";
const IMG_RIDER = "/img/blog/sahne-kiralama-fiyatlari-teknik-rider.webp";

const PUBLISH_DATE = "2026-01-05T09:00:00+03:00";
const MODIFIED_DATE = "2026-01-05T09:00:00+03:00";

/* ================== META ================== */
export const metadata = {
  title: "Sahne Kiralama Fiyatları Neye Göre Belirlenir?",
  description:
    "Sahne kiralama fiyatı m², teknik ihtiyaçlar ve ekipmanlara göre belirlenir. Rider varsa net fiyat teknik gereksinimlere göre şekillenir; rider yoksa verilen fiyatlar ortalamadır.",
  alternates: { canonical: BLOG_URL },
  image: HERO_IMG,
  openGraph: {
    title: "Sahne Kiralama Fiyatları Neye Göre Belirlenir? | Sahneva Organizasyon",
    description:
      "Sahne fiyatını m² belirler; yükseklik fiyatı etkilemez. Truss, LED, ses-ışık ve çadır gibi teknik katmanlar ile rider geldiğinde fiyat netleşir.",
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva Organizasyon",
    images: [
      {
        url: `${SITE_URL}${HERO_IMG}`,
        width: 1200,
        height: 630,
        alt: "Sahne kiralama fiyatlarını etkileyen m² ve teknik sistemler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahne Kiralama Fiyatları Neye Göre Belirlenir?",
    description:
      "m², teknik ekipmanlar ve rider: sahne kiralama fiyatının gerçek belirleyicileri.",
    images: [`${SITE_URL}${HERO_IMG}`],
  },
  robots: { index: true, follow: true },
};

/* ================== JSON-LD ================== */
function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function buildArticleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BLOG_URL}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
    headline: metadata.title,
    description: metadata.description,
    image: [`${SITE_URL}${HERO_IMG}`],
    datePublished: PUBLISH_DATE,
    dateModified: MODIFIED_DATE,
    inLanguage: "tr-TR",
    author: {
      "@type": "Organization",
      name: "Sahneva Organizasyon",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Sahneva Organizasyon",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.webp` },
    },
  };
}

function buildBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Sahne Kiralama Fiyatları Neye Göre Belirlenir?",
        item: BLOG_URL,
      },
    ],
  };
}

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Sahne kiralama fiyatını en çok ne belirler?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sahne kiralama fiyatını en temel olarak sahne ölçüsü (m²) belirler. Etkinliğin mekânı/alanı, kurulumun kapsamı ve sahnenin teknik katmanları (truss, LED, ses-ışık gibi) toplam bütçeyi şekillendirir.",
        },
      },
      {
        "@type": "Question",
        name: "Sahne yüksekliği fiyatı etkiler mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Hayır. Sahne yüksekliği genellikle fiyatı belirleyen bir unsur değildir. Fiyatı asıl etkileyen sahnenin m²’si ve etkinliğin teknik ihtiyaçlarıdır.",
        },
      },
      {
        "@type": "Question",
        name: "Rider olmadan verilen fiyatlar net midir?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Rider (teknik gereksinimler) olmadan verilen fiyatlar ortalama/tahmini olur. Teknik rider geldiğinde sahne, truss, LED ve ses-ışık ihtiyaçları netleşir ve fiyat buna göre belirlenir.",
        },
      },
      {
        "@type": "Question",
        name: "Truss, LED ekran ve ses-ışık sistemleri nasıl fiyatlanır?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "LED ekranlar çoğunlukla günlük, truss ve podyum sistemleri ise proje kapsamına göre günlük/haftalık değerlendirilir. Marka, adet ve özellikler fiyatı doğrudan etkiler.",
        },
      },
      {
        "@type": "Question",
        name: "Çadır kiralama fiyatı neye göre belirlenir?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Çadır fiyatı m² üzerinden belirlenir. Açık hava etkinlikleri, açılışlar ve güvenlik alanı oluşturulan projelerde çadır ölçüsü hem çadır hem de sahne planını etkiler.",
        },
      },
    ],
  };
}

/* ================== SAYFA ================== */
export default function Page() {
  const articleJsonLd = buildArticleJsonLd();
  const breadcrumbJsonLd = buildBreadcrumbJsonLd();
  const faqJsonLd = buildFaqJsonLd();

  return (
    <>
      {/* Projende BreadcrumbJsonLd component’i kullanıyorsan bunu koru */}
      <BreadcrumbJsonLd
        baseUrl={SITE_URL}
        items={[
          { name: "Ana Sayfa", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Sahne Kiralama Fiyatları Neye Göre Belirlenir?", url: BLOG_URL },
        ]}
      />

      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* HERO */}
      <header className="relative overflow-hidden bg-gray-900 py-20 text-white">
        <Image
          src={HERO_IMG}
          alt="Sahne kiralama fiyatlarını etkileyen m² ve teknik ihtiyaçlar"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center">
          <h1 className="text-balance text-3xl font-black tracking-tight md:text-5xl">
            Sahne Kiralama Fiyatları Neye Göre Belirlenir?
          </h1>
          <p className="mt-5 text-pretty text-base text-white/85 md:text-lg">
            Fiyatı “tek rakam” gibi düşünmeyin: sahne m²’si, teknik sistemler ve varsa
            teknik rider, toplam bütçeyi belirler. Rider yoksa konuşulan fiyatlar
            ortalamadır; rider geldikten sonra netleşir.
          </p>

          {/* Hızlı linkler */}
          <div className="mt-7 flex flex-wrap justify-center gap-2 text-sm">
            <Link
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/15"
              href="/sahne-kiralama"
            >
              Sahne Kiralama
            </Link>
            <Link
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/15"
              href="/podyum-kiralama"
            >
              Podyum Kiralama
            </Link>
            <Link
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/15"
              href="/led-ekran-kiralama"
            >
              LED Ekran
            </Link>
            <Link
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/15"
              href="/ses-isik-sistemleri"
            >
              Ses & Işık
            </Link>
            <Link
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/15"
              href="/cadir-kiralama"
            >
              Çadır Kiralama
            </Link>
            <Link
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/15"
              href="/kurumsal-organizasyon"
            >
              Kurumsal Organizasyon
            </Link>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="bg-white">
        <article className="mx-auto w-full max-w-4xl px-4 py-12">
          <div className="prose prose-lg max-w-none">
            <p>
              Sahne kiralama fiyatları sorulduğunda çoğu kişi net bir rakam bekler.
              Oysa sahne, tek başına bir ürün değil; etkinliğin teknik omurgasıdır.
              Bu nedenle fiyatlar sabit tarifeden değil, etkinliğin ihtiyaçlarından doğar.
            </p>

            <h2>Sahne fiyatını en temelde m² belirler</h2>
            <p>
              Sahne fiyatını etkileyen en temel unsur ölçüdür. Ancak sahne ölçüsünü
              çoğu zaman “müşterinin kafasındaki ölçü” değil; <strong>mekânın alanı</strong>,
              etkinlik akışı ve varsa <strong>çadır ölçüsü</strong> belirler.
            </p>

            <figure className="not-prose my-8">
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                <Image
                  src={IMG_M2}
                  alt="Sahne ölçüsü (m²) ve alan planlaması"
                  width={1200}
                  height={675}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-sm text-gray-500">
                Sahne ölçüsü çoğu projede alan/çadır ölçüsüne göre netleşir; firma ölçüyü dayatmaz,
                tavsiye eder.
              </figcaption>
            </figure>

            <p>
              Bazı projelerde sahnenin “ortamı doldurması” gerekir. Çünkü sahne, etkinliğin
              atmosferini belirler. Bu yüzden özellikle büyük kitleli işlerde, alanın izin verdiği
              ölçüde sahneyi daha dolu ve dengeli kurmak, hem görsel hem akış açısından daha doğru olur.
            </p>

            <h2>Sahne yüksekliği fiyatı etkiler mi?</h2>
            <p>
              Hayır. Sahne yüksekliği (40/60/80 cm gibi) genellikle fiyatı belirleyen bir unsur değildir.
              Fiyatı belirleyen ana eksen sahnenin m²’si ve teknik kapsamıdır.
            </p>

            <h2>Teknik katmanlar: Truss, LED, ses-ışık ve diğerleri</h2>
            <p>
              Sahne çoğu zaman tek başına kurulmaz. Truss, LED ekran, ses ve ışık sistemleri gibi
              katmanlar sahneyi tamamlar. Bu ekipmanlarda fiyatı; <strong>adet, marka ve özellik</strong>
              belirler.
            </p>

            <figure className="not-prose my-8">
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                <Image
                  src={IMG_TEKNIK}
                  alt="Truss, LED ekran ve ses-ışık sistemleri"
                  width={1200}
                  height={675}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-sm text-gray-500">
                LED ekran çoğunlukla günlük fiyatlanır; truss/podyum ise proje kapsamına göre değerlendirilir.
              </figcaption>
            </figure>

            <ul>
              <li>
                <strong>LED ekran</strong>: Çoğu zaman günlük fiyatlanır; piksel aralığı, marka ve iç/dış mekân
                şartları belirleyicidir.
              </li>
              <li>
                <strong>Truss & podyum</strong>: Proje kapsamına göre günlük/haftalık değerlendirilir; pratikte
                bazı işlerde günlük/haftalık aynı bantta kalabilir.
              </li>
              <li>
                <strong>Ses & ışık</strong>: Konuşma sistemi ile konser sistemi aynı değildir. Güç, marka ve
                canlı performans ihtiyacı fiyatı doğrudan değiştirir.
              </li>
            </ul>

            <h2>Çadır fiyatı m² üzerinden belirlenir</h2>
            <p>
              Çadırlar genellikle açık hava, açılış işleri veya bina önlerinde güvenlik alanı oluşturulan
              projelerde tercih edilir. Çadır fiyatı <strong>tamamen m² üzerinden</strong> hesaplanır ve
              çoğu zaman sahne planını da etkiler.
            </p>

            <figure className="not-prose my-8">
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                <Image
                  src={IMG_CADIR}
                  alt="Çadır kiralama m² hesabı ve açık hava kurulum planı"
                  width={1200}
                  height={675}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-sm text-gray-500">
                Çadır m² hesabı, sahne ölçüsünü ve yerleşimi doğrudan etkileyebilir.
              </figcaption>
            </figure>

            <h2>Tahmini fiyat vs net fiyat: kritik ayrım</h2>
            <p>
              Rider (teknik gereksinimler) olmadan verilen fiyatlar çoğu zaman <strong>ortalama/tahmini</strong>{" "}
              olur. Çünkü etkinlik tek katmanlı olmayabilir: konserin ardından konuşma/protokol ya da
              farklı bir akış planlanabilir. Bu durumda sahneyi sadece “sanatçı için” kurmazsınız; tüm akışa
              hizmet edecek şekilde planlarsınız.
            </p>

            <h2>Teknik rider geldiğinde fiyat neden değişir?</h2>
            <p>
              Teknik rider, yalnızca sanatçıdan gelmek zorunda değildir. Ajans veya organizasyon ekibi de
              tüm etkinlik için teknik şartname çıkarabilir. Rider geldiğinde sahne, truss, LED ve ses-ışık
              kalemleri netleşir; fiyat da buna göre belirlenir.
            </p>

            <figure className="not-prose my-8">
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                <Image
                  src={IMG_RIDER}
                  alt="Teknik rider ile sahne ve ekipman gereksinimlerinin netleşmesi"
                  width={1200}
                  height={675}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-sm text-gray-500">
                Rider; sahne ölçüsü, riser/platformlar, LED ölçüleri ve teknik ekipman detaylarını belirleyebilir.
              </figcaption>
            </figure>

            <p>
              Özellikle <strong>canlı müzik, orkestra, backline</strong> gibi detaylar devreye girerse fiyatın
              tamamen değişmesi normaldir. Bu yüzden rider olmadan konuşulan rakamlar, ancak “başlangıç
              tahmini” olarak değerlendirilmelidir.
            </p>

            <h2>İstanbul içi / şehir dışı nakliye nasıl etkiler?</h2>
            <p>
              Nakliye maliyeti proje lokasyonuna göre değişir. İstanbul içi ile şehir dışı aynı değildir.
              Şehir dışı projelerde nakliye genellikle lojistik/nakliye firmalarından alınan fiyatlara göre
              şekillenir.
            </p>

            <h2>Sonuç: Doğru tanım olmadan “tek fiyat” yok</h2>
            <p>
              Sahne kiralama fiyatları; sahnenin m²’si, teknik katmanlar ve varsa rider ile netleşir. Rider olmayan
              kurumsal/açılış/düğün gibi işlerde fiyat daha öngörülebilirken; sanatçı veya canlı performans giren
              işlerde rider belirleyicidir.
            </p>

            <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="mt-0">Hızlı Özet</h3>
              <ul className="mb-0">
                <li><strong>Sahne fiyatı:</strong> En temelde m²</li>
                <li><strong>Yükseklik:</strong> Genelde fiyatı etkilemez</li>
                <li><strong>LED / ses-ışık / truss:</strong> Adet + marka + özellik</li>
                <li><strong>Çadır:</strong> m² üzerinden</li>
                <li><strong>Rider:</strong> Net fiyatın ana anahtarı</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/sahne-kiralama"
              className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-6 py-4 font-bold text-white hover:bg-gray-800"
            >
              Sahne Kiralama Sayfası
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-4 font-bold text-gray-900 hover:bg-gray-50"
            >
              Keşif / Teklif Al
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}

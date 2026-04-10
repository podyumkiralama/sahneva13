import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import SmartBlogSuggestions from "@/components/blog/SmartBlogSuggestions";
import {
  BASE_SITE_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";

export const revalidate = 86400;

const slug = "/blog/teknik-produksiyon-fiyatlandirma-rehberi-2026";
const url = `${BASE_SITE_URL}${slug}`;
const FEATURED_IMAGE = "/img/blog/kurumsal-etkinlik-led-ekran-sahne.webp";
const OG_IMAGE = FEATURED_IMAGE;
const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const PUBLISH_DATE = "2026-04-07T00:00:00+03:00";

export const metadata = {
  title: "Teknik Prodüksiyon ve Sahne Kiralama Fiyatlandırma Rehberi (2026)",
  description:
    "Sahne, ses, ışık, LED ekran ve çadır kiralama fiyatlandırma stratejileri. Paket modeli, talep bazlı fiyatlandırma, ek hizmet kârlılığı ve Türkiye pazarına özel yaklaşımlar.",
  alternates: { canonical: url },
  image: FEATURED_IMAGE,
  openGraph: {
    title:
      "Teknik Prodüksiyon ve Sahne Kiralama Fiyatlandırma Rehberi (2026) | Sahneva",
    description:
      "Sahne, ses, ışık, LED ekran ve çadır kiralama fiyatlandırma stratejileri. Paket modeli, talep bazlı fiyatlandırma ve ek hizmet kârlılığı rehberi.",
    url,
    siteName: "Sahneva",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: `${BASE_SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Teknik Prodüksiyon Fiyatlandırma Rehberi 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teknik Prodüksiyon Fiyatlandırma Rehberi (2026)",
    description:
      "Sahne, ses, ışık, LED ekran ve çadır kiralama fiyatlandırma stratejileri. Paket modeli, talep bazlı fiyatlandırma ve ek hizmet kârlılığı rehberi.",
    images: [`${BASE_SITE_URL}${OG_IMAGE}`],
  },
  keywords: [
    "sahne kiralama fiyatlandırma",
    "prodüksiyon fiyatları 2026",
    "etkinlik ekipman kiralama",
    "ses ışık fiyat",
    "LED ekran kiralama fiyat",
    "teknik prodüksiyon fiyatlandırma",
    "sahne kiralama fiyatları",
    "çadır kiralama fiyat",
  ],
  authors: [{ name: AUTHOR_NAME }],
  date: PUBLISH_DATE,
  category: "Fiyatlandırma",
  readTime: "9 dk okuma",
  author: AUTHOR_NAME,
};

/* ---------- helpers ---------- */
function H2({ id, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl"
    >
      {children}
    </h2>
  );
}

function ProTip({ title = "Pro Tip", children }) {
  return (
    <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50 p-4">
      <div className="text-sm font-semibold text-sky-900">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-700">{children}</div>
    </div>
  );
}

function Table({ caption, columns, rows }) {
  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {caption ? (
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
          {caption}
        </div>
      ) : null}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 text-slate-700">
            <tr>
              {columns.map((c) => (
                <th key={c} className="px-4 py-3 font-medium">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {rows.map((r, idx) => (
              <tr key={idx}>
                {r.map((cell, j) => (
                  <td key={j} className="px-4 py-3">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Figure({ src, alt, caption, priority = false, loading = "lazy" }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] w-full bg-slate-50">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 760px"
          className="object-contain"
          loading={loading}
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function Page() {
  const publishedISO = PUBLISH_DATE;
  const publishedHuman = "7 Nisan 2026";
  const readingTime = "9 dk okuma";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        mainEntityOfPage: { "@id": url },
        headline:
          "Teknik Prodüksiyon ve Sahne Kiralama Fiyatlandırma Rehberi (2026)",
        description:
          "Sahne, ses, ışık, LED ekran ve çadır kiralama fiyatlandırma stratejileri. Paket modeli, talep bazlı fiyatlandırma, ek hizmet kârlılığı ve Türkiye pazarına özel yaklaşımlar.",
        image: `${BASE_SITE_URL}${FEATURED_IMAGE}`,
        datePublished: publishedISO,
        dateModified: publishedISO,
        inLanguage: "tr-TR",
        author: {
          "@type": "Organization",
          "@id": ORGANIZATION_ID,
          name: "Sahneva",
        },
        publisher: { "@id": ORGANIZATION_ID },
        isPartOf: { "@id": WEBSITE_ID },
        url,
        about: [
          { "@type": "Thing", name: "Sahne kiralama fiyatlandırma stratejileri" },
          { "@type": "Thing", name: "LED ekran kiralama fiyatları" },
          { "@type": "Thing", name: "Teknik prodüksiyon paket modelleri" },
          { "@type": "Thing", name: "Etkinlik ekipman kiralama Türkiye" },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd
        id="ld-blogposting"
        data={jsonLd}
      />

      <div className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
          <BreadcrumbJsonLd
            items={[
              { name: "Anasayfa", url: BASE_SITE_URL },
              { name: "Blog", url: `${BASE_SITE_URL}/blog` },
              {
                name: "Teknik Prodüksiyon Fiyatlandırma Rehberi 2026",
                url,
              },
            ]}
          />

          {/* Header */}
          <header>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
              Fiyatlandırma • teknik prodüksiyon • sahne kiralama
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Teknik Prodüksiyon ve Sahne Kiralama
              <span className="block text-slate-600">
                Fiyatlandırma Rehberi (2026)
              </span>
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
              Etkinlik prodüksiyonu fiyatlandırması, birçok firmanın sandığından
              çok daha stratejik bir konudur. Doğru fiyatlandırma maliyetleri
              karşılamanın ötesinde firmanızın pazardaki konumunu güçlendirir ve
              daha az iş ile daha yüksek kârlılık sağlar. Bu rehber; paket
              modelleri, talep bazlı strateji ve Türkiye pazarına özel
              yaklaşımları kapsar.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <time dateTime={publishedISO}>{publishedHuman}</time>
              <span aria-hidden="true">•</span>
              <span>{readingTime}</span>
              <span aria-hidden="true">•</span>
              <span>{AUTHOR_NAME}</span>
            </div>

            {/* CTA row */}
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://wa.me/905453048671"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                WhatsApp'tan Yazın (2 saatte teklif)
              </a>

              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Teklif Al / İletişim
              </Link>
            </div>

            <Figure
              src={FEATURED_IMAGE}
              alt="Profesyonel sahne, LED ekran ve ses-ışık sistemi ile kurumsal etkinlik prodüksiyonu"
              caption="Profesyonel sahne, LED ekran ve ses-ışık sistemi ile kurumsal etkinlik prodüksiyonu — doğru fiyatlandırmanın temelini oluşturan teknik altyapı."
              priority
              loading="eager"
            />
          </header>

          {/* Layout */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
            {/* Main */}
            <article className="min-w-0">
              {/* TOC */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-base font-semibold text-slate-900">
                  Bu Yazının Rotası
                </h2>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
                  {[
                    ["#s1", "1. Neden Stratejik Fiyatlandırma?"],
                    ["#s2", "2. Deneyim ve Değer Satışı"],
                    ["#s3", "3. Talep Bazlı Fiyatlandırma"],
                    ["#s4", "4. Fiyatlandırma Modelleri"],
                    ["#s5", "5. Boyut ve Kapsam Yanılgısı"],
                    ["#s6", "6. Ek Hizmetler Asıl Kârdır"],
                    ["#s7", "7. Lokasyon, Mevsim ve Pazar Dinamikleri"],
                    ["#s8", "8. Algı ve Psikolojik Fiyatlandırma"],
                    ["#s9", "9. Türkiye'ye Özel Yaklaşım (2026)"],
                    ["#s10", "10. Düşük Talep Dönemlerini Değerlendirmek"],
                    ["#s11", "11. Sonuç"],
                  ].map(([href, text]) => (
                    <li key={href}>
                      <a className="hover:text-slate-900" href={href}>
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* s1 */}
              <section className="mt-10">
                <H2 id="s1">1. Neden Stratejik Fiyatlandırma?</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Etkinlik prodüksiyonu fiyatlandırması, birçok firmanın
                  sandığından çok daha stratejik bir konudur. Çoğu işletme hâlâ
                  fiyatlarını sadece "sahne metrekaresi" veya "ekipman adedi"
                  üzerinden belirliyor. Ancak bu yaklaşım, özellikle kurumsal
                  organizasyon, düğün ve konser gibi rekabetin yüksek olduğu
                  alanlarda ciddi gelir kaybına yol açıyor.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Çünkü bu sektörde satılan şey sadece bir{" "}
                  <Link
                    href="/sahne-kiralama"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    sahne
                  </Link>
                  ,{" "}
                  <Link
                    href="/ses-isik-sistemleri"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    ses sistemi
                  </Link>{" "}
                  veya{" "}
                  <Link
                    href="/led-ekran-kiralama"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    LED ekran
                  </Link>{" "}
                  değildir. Satılan, etkinliğin görsel ve işitsel kalitesi,
                  profesyonel kurulum, zamanında teslim ve sorunsuz deneyimdir.
                  Doğru fiyatlandırma, maliyetleri karşılamanın ötesinde
                  firmanızın pazardaki konumunu güçlendirir ve daha az iş ile
                  daha yüksek kârlılık sağlar.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Yanlış fiyatlandırma düşük doluluk yaratmaz; düşük algı
                  yaratır. Müşteri "ucuz" görünen teklifte kalite şüphesi duyar.
                  Doğru fiyatlandırma ise premium algı ile daha yüksek kabul
                  oranı getirir.
                </p>
              </section>

              {/* s2 */}
              <section className="mt-10">
                <H2 id="s2">
                  2. Deneyim ve Değer Satışı: Ekipman Değil Prodüksiyon Satılır
                </H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Kurumsal bir lansman, düğün veya konser düzenleyen müşteri
                  teknik ekipman kiralarken aslında şunu satın alır: Etkinliğin
                  unutulmaz olması, sesin netliği, ışığın etkisi, LED ekranın
                  görselliği ve sahnenin sağlamlığı.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Boş bir{" "}
                  <Link
                    href="/podyum-kiralama"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    podyum
                  </Link>{" "}
                  ile profesyonel truss sistemi, kaliteli moving head ışıklar,
                  yüksek çözünürlüklü{" "}
                  <Link
                    href="/led-ekran-kiralama"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    LED ekran
                  </Link>{" "}
                  ve akustik olarak optimize edilmiş{" "}
                  <Link
                    href="/ses-isik-sistemleri"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    ses sistemi
                  </Link>{" "}
                  arasındaki fark, metrekareden değil, algılanan değerden gelir.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Fiyat belirlerken sorulması gereken temel soru şudur: "Bu
                  prodüksiyon müşteriye nasıl bir sahne deneyimi ve teknik güven
                  sunuyor?"
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Güçlü bir teknik altyapı ve profesyonel kurulum varsa, piyasa
                  ortalamasının üzerinde fiyatlandırma yapmak mümkündür. Zayıf
                  algı ise fiyatı düşürmekten başka çare bırakmaz.
                </p>

                <Figure
                  src="/img/blog/kurumsal-etkinlik-sahne-genel.webp"
                  alt="Profesyonel prodüksiyon kurulumu — sahne, ışık ve ses sistemleri bir arada"
                  caption="Profesyonel truss, moving head ışıklar ve LED ekran ile donatılmış bir sahne kurulumu — değer algısını artıran en güçlü unsur."
                />
              </section>

              {/* s3 */}
              <section className="mt-10">
                <H2 id="s3">3. Talep Bazlı Fiyatlandırma</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Prodüksiyon sektörü de zaman bazlıdır. Aynı ekipman aynı gün
                  birden fazla etkinlikte kullanılamaz. Bu yüzden bazı dönemler
                  çok daha değerlidir.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Türkiye'de en yoğun talep dönemleri: Yaz ayları (açık hava
                  konserleri, düğünler, festival), Cuma akşamı ve cumartesi
                  (düğün + kurumsal), Yılbaşı, bayramlar, özel günler (14 Şubat,
                  8 Mart vb.), Kurumsal zirve ve lansman sezonları (ilkbahar ve
                  sonbahar).
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Yoğun dönemlerde fiyatı artırmak, düşük talep dönemlerinde
                  ise (hafta içi, kış ayları) esnek paketler sunmak toplam
                  geliri optimize eder. Sabit fiyat listesiyle çalışmak en
                  değerli fırsatları kaçırmak anlamına gelir.
                </p>

                <Table
                  caption="Mevsimsel Talep ve Fiyatlandırma Stratejisi"
                  columns={["Dönem", "Talep Seviyesi", "Fiyatlandırma Stratejisi"]}
                  rows={[
                    [
                      "Yaz ayları (Haziran–Ağustos)",
                      "Çok Yüksek",
                      "Premium fiyat + erken rezervasyon avantajı",
                    ],
                    ["Cuma–Cumartesi", "Yüksek", "Hafta sonu prim fiyatı"],
                    [
                      "Yılbaşı, bayramlar, özel günler",
                      "Yüksek",
                      "Özel dönem fiyatlandırması",
                    ],
                    [
                      "İlkbahar–Sonbahar (kurumsal)",
                      "Orta–Yüksek",
                      "Paket bazlı fiyat",
                    ],
                    [
                      "Hafta içi, kış ayları",
                      "Düşük",
                      "Esnek paketler + kampanya",
                    ],
                  ]}
                />
              </section>

              {/* s4 */}
              <section className="mt-10">
                <H2 id="s4">
                  4. Fiyatlandırma Modelleri ve En Verimli Yaklaşımlar
                </H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Prodüksiyon firmaları genellikle şu modelleri kullanır:
                </p>
                <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700">
                  <li>
                    <strong className="font-semibold text-slate-900">
                      Sabit Paket Modeli:
                    </strong>{" "}
                    En popüler ve en hızlı dönüş sağlayan model. "Düğün Paketi",
                    "Kurumsal Lansman Paketi", "Konser Prodüksiyon Paketi" gibi
                    hazır seçenekler sunmak müşteride belirsizliği ortadan
                    kaldırır ve karar sürecini hızlandırır.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900">
                      Modüler / A La Carte Modeli:
                    </strong>{" "}
                    Sadece{" "}
                    <Link
                      href="/sahne-kiralama"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      sahne
                    </Link>
                    , sadece ses, sadece{" "}
                    <Link
                      href="/led-ekran-kiralama"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      LED ekran
                    </Link>{" "}
                    isteyen müşteriler için. Avantajı esneklik olsa da, toplam
                    ciroyu sınırlayabilir.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900">
                      Hibrit Model (En Önerilen):
                    </strong>{" "}
                    Temel paket + ek hizmetler. Örneğin temel ses-ışık-sahne
                    paketine LED ekran, truss,{" "}
                    <Link
                      href="/cadir-kiralama"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      çadır
                    </Link>
                    , kurulum-söküm ve teknik personel ekleyerek ciroyu
                    artırabilirsiniz.
                  </li>
                </ol>

                <Table
                  caption="Fiyatlandırma Modelleri Karşılaştırması"
                  columns={["Model", "Avantaj", "Dezavantaj", "En Uygun"]}
                  rows={[
                    [
                      "Sabit Paket",
                      "Hızlı karar, net fiyat",
                      "Esneklik sınırlı",
                      "Düğün, küçük kurumsal",
                    ],
                    [
                      "Modüler / A La Carte",
                      "Tam esneklik",
                      "Ciro sınırlı kalabilir",
                      "Tekil ekipman talebi",
                    ],
                    [
                      "Hibrit (Önerilen)",
                      "Esneklik + upsell",
                      "Daha fazla sunum çalışması",
                      "Orta-büyük etkinlik",
                    ],
                  ]}
                />

                <Figure
                  src="/img/blog/sahne-kiralama-fiyatlari-teknik-sistemler.webp"
                  alt="Truss, LED ekran ve ses-ışık sistemleri — fiyatı belirleyen teknik katmanlar"
                  caption="Sahne, truss, LED ekran ve ses-ışık sistemlerinin bütünleşik kullanımı — hibrit paket modelinin temelini oluşturur."
                />
              </section>

              {/* s5 */}
              <section className="mt-10">
                <H2 id="s5">5. Boyut ve Kapsam Yanılgısı</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Birçok firma fiyatı sadece "sahne boyutu"na göre belirler.
                  Oysa büyük bir sahne her zaman daha yüksek kâr anlamına
                  gelmez.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Önemli olan: Etkinlik türü, katılımcı sayısı ve beklenen etki,
                  kişi başı teknik kalite beklentisi, ek hizmet potansiyeli (
                  <Link
                    href="/led-ekran-kiralama"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    LED ekran
                  </Link>
                  , efekt ışık,{" "}
                  <Link
                    href="/cadir-kiralama"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    çadır
                  </Link>
                  , jeneratör vb.)
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Daha küçük ama yüksek kaliteli bir prodüksiyon (örneğin
                  premium ses + büyük LED ekran), büyük ama temel seviyede bir
                  kurulumdan daha kârlı olabilir. Odak noktanız doluluk değil,
                  kârlılık olmalıdır.
                </p>

                <ProTip title="Kârlılık Formülü">
                  Kârlılık formülü: Büyük sahne + düşük kalite &lt; Küçük sahne
                  + premium ses-ışık-LED. Değer odaklı düşünün.
                </ProTip>
              </section>

              {/* s6 */}
              <section className="mt-10">
                <H2 id="s6">6. Ek Hizmetler Asıl Kârdır</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Asıl kâr genellikle temel kiralama bedelinden değil, ek
                  hizmetlerden gelir:
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  <li>Profesyonel kurulum ve söküm hizmeti</li>
                  <li>Teknik personel (tonmaister, ışık tasarımcısı)</li>
                  <li>Uzatılmış kullanım süresi</li>
                  <li>Taşıma ve lojistik</li>
                  <li>
                    <Link
                      href="/cadir-kiralama"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Çadır
                    </Link>{" "}
                    + zemin + dekor entegrasyonu
                  </li>
                  <li>Canlı yayın ve kayıt sistemi</li>
                  <li>Yedek ekipman ve B planı desteği</li>
                </ul>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Bu hizmetleri "ücretsiz" sunmak yerine ayrı
                  konumlandırdığınızda veya akıllı paketlere dahil ettiğinizde
                  geliriniz ciddi oranda artar. Ek hizmetler, fiyatı büyütmenin
                  en etkili yoludur.
                </p>
              </section>

              {/* s7 */}
              <section className="mt-10">
                <H2 id="s7">7. Lokasyon, Mevsim ve Pazar Dinamikleri</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  İstanbul gibi büyük şehirlerde semt ve mekan tipi fiyatı
                  etkiler. Açık hava etkinlikleri için{" "}
                  <Link
                    href="/cadir-kiralama"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    çadır
                  </Link>{" "}
                  +{" "}
                  <Link
                    href="/sahne-kiralama"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    sahne
                  </Link>{" "}
                  kombinasyonu, kapalı mekanlar için ise kompakt{" "}
                  <Link
                    href="/led-ekran-kiralama"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    LED
                  </Link>{" "}
                  +{" "}
                  <Link
                    href="/ses-isik-sistemleri"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    ses sistemleri
                  </Link>{" "}
                  daha fazla talep görür.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Ancak lokasyon tek başına belirleyici değildir. Zayıf bir
                  bölgede dahi yüksek kaliteli ekipman, hızlı kurulum ve
                  güvenilir hizmet ile premium fiyatlandırma yapılabilir.
                </p>

                <Figure
                  src="/img/blog/kurumsal-etkinlik-cadir.webp"
                  alt="Açık hava kurumsal etkinlik çadır kurulumu"
                  caption="Açık hava etkinliklerinde çadır + sahne + LED kombinasyonu, lokasyona göre fiyatlandırmanın temelini oluşturur."
                />
              </section>

              {/* s8 */}
              <section className="mt-10">
                <H2 id="s8">8. Algı ve Psikolojik Fiyatlandırma</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Çok düşük fiyat teklifleri, özellikle kurumsal müşterilerde
                  "acemi veya kalitesiz" algısı yaratır. Profesyonel sunum, net
                  paket listesi, referans fotoğraflar ve video gösterimleri
                  fiyatın kabul edilme şansını artırır.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Müşteri çoğu zaman en ucuz teklifi değil, en güven veren ve
                  risksiz görünen teklifi tercih eder.
                </p>

                <ProTip title="Algı ile Sat">
                  Fiyat kırarak satış yapmayın, algı inşa ederek satın. Net
                  paketler, profesyonel sunum ve referans görseller, fiyat
                  itirazını en aza indirir.
                </ProTip>
              </section>

              {/* s9 */}
              <section className="mt-10">
                <H2 id="s9">9. Türkiye'ye Özel Yaklaşım (2026)</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Türkiye'de prodüksiyon fiyatları sabit bir standart taşımaz.
                  Aynı ekipman bile etkinlik türüne, tarihe ve müşteri profiline
                  göre farklı fiyatlandırılır.
                </p>

                <Table
                  caption="Segment Bazlı Fiyatlandırma Yaklaşımı — Türkiye"
                  columns={["Segment", "Yaklaşım", "Odak Noktası"]}
                  rows={[
                    [
                      "Küçük ölçekli düğünler",
                      "Giriş seviyesi paketler",
                      "Net fiyat, hızlı karar",
                    ],
                    [
                      "Orta segment kurumsal",
                      "Hibrit paketler + ek hizmetler",
                      "Ciro artırma, upsell",
                    ],
                    [
                      "Büyük konser ve festival",
                      "Tam prodüksiyon paketi",
                      "Yüksek fiyat, premium kalite",
                    ],
                  ]}
                />

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Önemli olan rakip ortalamasına uymak değil, kendi teknik
                  gücünüzü ve farkınızı doğru konumlandırmaktır.
                </p>

                <Figure
                  src="/img/blog/kurumsal-etkinlik-butce-infografik.webp"
                  alt="Kurumsal etkinlik bütçe planlaması — prodüksiyon fiyatlandırma stratejisi"
                  caption="Etkinlik segmentine göre bütçe ve fiyatlandırma yaklaşımı — her ölçek için farklı strateji."
                />
              </section>

              {/* s10 */}
              <section className="mt-10">
                <H2 id="s10">10. Düşük Talep Dönemlerini Değerlendirmek</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Başarılı firmalar sadece yaz ve hafta sonuna odaklanmaz. Hafta
                  içi kurumsal etkinlikler, eğitim organizasyonları, fuar
                  standları ve özel kampanyalarla düşük sezonları doldurur.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Amaç fiyatı düşürmek değil, doğru müşteriye doğru paketi
                  sunmaktır. Bu sayede gelir dalgalanması azalır ve iş
                  sürdürülebilir hale gelir.
                </p>
              </section>

              {/* s11 */}
              <section className="mt-10">
                <H2 id="s11">11. Sonuç</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  <Link
                    href="/sahne-kiralama"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Sahne
                  </Link>
                  ,{" "}
                  <Link
                    href="/ses-isik-sistemleri"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    ses, ışık
                  </Link>
                  ,{" "}
                  <Link
                    href="/led-ekran-kiralama"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    LED ekran
                  </Link>{" "}
                  ve{" "}
                  <Link
                    href="/cadir-kiralama"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    çadır
                  </Link>{" "}
                  kiralama fiyatlandırması sabit kurallarla yönetilemez. Yanlış
                  yaklaşımlar genellikle aynıdır: Sadece ekipman liste fiyatıyla
                  çalışmak, talep değişimini göz ardı etmek, ek hizmetleri
                  ücretsiz vermek ve "sadece kiralama" odaklı düşünmek.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Doğru yaklaşım, kendinizi bir ekipman tedarikçisi değil,
                  etkinliklerin teknik prodüksiyon partneri olarak
                  konumlandırmaktır. Fiyatlandırma da sunduğunuz deneyimin ve
                  güvenin değeri üzerinden yapılmalıdır.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Bu bakış açısını benimsediğinizde, daha az iş alarak daha
                  yüksek kârlılık elde etmek mümkündür. Çünkü bu sektörde
                  kazananlar en ucuz olanlar değil, değerini doğru anlatan,
                  kaliteli prodüksiyon sunan ve fiyatını haklı çıkaranlardır.
                </p>
              </section>

              {/* CTA */}
              <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Etkinliğiniz için stratejik teklif alın
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Sahneva olarak sahne, ses-ışık, LED ekran ve çadır
                  kiralama konularında{" "}
                  <strong className="font-semibold text-slate-900">
                    300+ kurumsal projede
                  </strong>{" "}
                  edindiğimiz deneyimle, teknik keşiften kuruluma kadar tüm
                  süreci tek elden yönetiyoruz. Hızlı teklif için
                  WhatsApp'tan yazın; çoğu projede{" "}
                  <strong className="font-semibold text-slate-900">
                    2 saat içinde
                  </strong>{" "}
                  projelendirilmiş teklif çıkıyoruz.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    WhatsApp'tan Yazın
                  </a>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    İletişim Formu
                  </Link>
                </div>
              </section>

              <SmartBlogSuggestions
                currentSlug={slug.replace("/blog/", "")}
                currentCategory={metadata?.category}
                currentKeywords={metadata?.keywords}
              />

              <BlogRelatedLinks
                services={[
                  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
                  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
                  { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemleri" },
                  { href: "/cadir-kiralama", label: "Çadır Kiralama" },
                  { href: "/podyum-kiralama", label: "Podyum Kiralama" },
                ]}
              />
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Hızlı Teklif
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Etkinlik detaylarını yazın, hızlıca projelendirelim.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    WhatsApp
                  </a>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    İletişim Formu
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Hizmetler
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/sahne-kiralama"
                    >
                      Sahne Kiralama
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/led-ekran-kiralama"
                    >
                      LED Ekran Kiralama
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/ses-isik-sistemleri"
                    >
                      Ses & Işık Sistemleri
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/cadir-kiralama"
                    >
                      Çadır Kiralama
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/podyum-kiralama"
                    >
                      Podyum Kiralama
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  İlgili Yazılar
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/blog/sahne-kiralama-fiyatlari-neye-gore-belirlenir"
                    >
                      Sahne Kiralama Fiyatları Neye Göre Belirlenir?
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/blog/kurumsal-etkinlik-planlama-rehberi-2026"
                    >
                      2026 Kurumsal Etkinlik Planlama Rehberi
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/blog/led-ekran-teknoloji-trendleri-2026"
                    >
                      2026 LED Ekran Teknolojisi Trendleri
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/blog/kurumsal-etkinlik-yonetimi"
                    >
                      Kurumsal Etkinlik Yönetimi Rehberi
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

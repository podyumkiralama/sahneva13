import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import InteractiveChecklist from "@/components/blog/InteractiveChecklist.client";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import SmartBlogSuggestions from "@/components/blog/SmartBlogSuggestions";
import {
  BASE_SITE_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";

export const revalidate = 86400;

const slug = "/blog/kurumsal-organizasyon-nedir-nasil-planlanir";
const url = `${BASE_SITE_URL}${slug}`;
const FEATURED_IMAGE = "/img/blog/kurumsal-organizasyon-nedir-nasil-planlanir-hero.webp";
const OG_IMAGE = FEATURED_IMAGE;
const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const PUBLISH_DATE = "2026-07-24T11:00:00+03:00";

export const metadata = {
  title: "Kurumsal Organizasyon Nedir, Nasıl Planlanır?",
  description:
    "Kurumsal organizasyon nedir, neden yapılır ve nasıl planlanır? Etkinlik türleri, hedefler, bütçe, mekân ve teknik prodüksiyon adımlarını içeren kapsamlı başlangıç rehberi.",
  alternates: {
    canonical: url,
  },
  image: FEATURED_IMAGE,
  openGraph: {
    title: "Kurumsal Organizasyon Nedir, Nasıl Planlanır? | Sahneva",
    description:
      "Kurumsal organizasyon nedir, neden yapılır, nasıl planlanır? Etkinlik türleri, hedefler, bütçe, mekân ve teknik prodüksiyon rehberi.",
    url,
    siteName: "Sahneva",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: `${BASE_SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Kurumsal organizasyon nedir ve nasıl planlanır rehberi öne çıkan görseli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurumsal Organizasyon Nedir, Nasıl Planlanır?",
    description:
      "Kurumsal organizasyonun tanımı, amacı, etkinlik türleri ve planlama adımları için başlangıç rehberi.",
    images: [`${BASE_SITE_URL}${OG_IMAGE}`],
  },
  keywords: [
    "kurumsal organizasyon nedir",
    "kurumsal organizasyon",
    "kurumsal etkinlik türleri",
    "kurumsal organizasyon nasıl planlanır",
    "kurumsal etkinlik planlama",
    "teknik prodüksiyon",
    "sahne kiralama",
    "LED ekran kiralama",
  ],
  authors: [{ name: AUTHOR_NAME }],
  date: PUBLISH_DATE,
  category: "Kurumsal Organizasyon",
  readTime: "10–12 dk okuma",
  author: AUTHOR_NAME,
};

/* ---------- helpers (LIGHT BLOG THEME) ---------- */
function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-2xl font-semibold tracking-tight text-slate-900">
        {value}
      </div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

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
  const publishedHuman = "24 Temmuz 2026";
  const readingTime = "10–12 dk okuma";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        mainEntityOfPage: { "@id": url },
        headline:
          "Kurumsal Organizasyon Nedir, Neden Yapılmalı ve Nasıl Planlanır?",
        description:
          "Kurumsal organizasyon nedir, neden yapılır ve nasıl planlanır? Etkinlik türleri, hedefler, bütçe, mekân ve teknik prodüksiyon adımlarını içeren başlangıç rehberi.",
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
          { "@type": "Thing", name: "Kurumsal organizasyon" },
          { "@type": "Thing", name: "Kurumsal etkinlik türleri" },
          { "@type": "Thing", name: "Etkinlik planlama ve bütçe" },
          { "@type": "Thing", name: "Teknik prodüksiyon" },
          { "@type": "Thing", name: "Sahne ve LED ekran kiralama" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Kurumsal organizasyon nedir?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kurumsal organizasyon; bir şirketin belirli bir amaç doğrultusunda düzenlediği planlı etkinliklerin genel adıdır. Ürün lansmanı, bayi toplantısı, konferans, gala, açılış ve kurumsal kutlamalar bu başlık altında yer alır ve genellikle profesyonel teknik prodüksiyonla hayata geçirilir.",
            },
          },
          {
            "@type": "Question",
            name: "Kurumsal organizasyon neden yapılır?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Marka bilinirliğini artırmak, çalışan ve bayi motivasyonunu yükseltmek, yeni ürün veya stratejiyi duyurmak, iş ilişkilerini güçlendirmek ve kurumsal itibarı pekiştirmek için yapılır. İyi planlanmış bir organizasyon ölçülebilir iş sonuçları da üretir.",
            },
          },
          {
            "@type": "Question",
            name: "Kurumsal organizasyon nasıl planlanır?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Önce amaç ve hedef kitle netleştirilir; ardından etkinlik türü, bütçe, tarih ve mekân belirlenir. Teknik keşif sonrası sahne, LED ekran, ses-ışık ve reji planı kurulur, dakika dakika run-of-show hazırlanır ve etkinlik sonrası başarı ölçümü yapılır.",
            },
          },
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
              { name: "Kurumsal Organizasyon Nedir, Nasıl Planlanır?", url },
            ]}
          />

          {/* Header */}
          <header>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
              Başlangıç rehberi • kurumsal organizasyon • teknik prodüksiyon
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Kurumsal Organizasyon Nedir?{" "}
              <span className="block text-slate-600">
                Neden Yapılmalı ve Nasıl Planlanır?
              </span>
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
              Kurumsal organizasyon; bir şirketin belirli bir amaç için düzenlediği
              planlı etkinliklerin genel adıdır — ürün lansmanından bayi toplantısına,
              konferanstan gala gecesine kadar. Bu rehber üç temel soruyu net biçimde
              yanıtlıyor: kurumsal organizasyon <strong className="font-semibold text-slate-900">nedir</strong>,{" "}
              <strong className="font-semibold text-slate-900">neden</strong> yapılmalı
              ve baştan sona <strong className="font-semibold text-slate-900">nasıl</strong>{" "}
              planlanır? Detaya inmek istediğiniz her adımda ilgili derin rehberlere de
              yönlendiriyoruz.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span>{publishedHuman}</span>
              <span aria-hidden="true">•</span>
              <span>{readingTime}</span>
              <span aria-hidden="true">•</span>
              <span>Sahneva İçerik Ekibi</span>
            </div>

            {/* CTA row */}
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://wa.me/905453048671"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                WhatsApp’tan Yazın (2 saatte teklif)
              </a>

              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Teklif Al / İletişim
              </Link>

              <Link
                href="/kurumsal-organizasyon"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Kurumsal Organizasyon Hizmeti
              </Link>
            </div>

            <Figure
              src={FEATURED_IMAGE}
              alt="Kurumsal organizasyon nedir ve nasıl planlanır: sahne, LED ekran ve salon kurulumu"
              caption="Kurumsal organizasyon: amaç, format ve teknik prodüksiyonu tek planda buluşturmak."
              priority
              loading="eager"
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard value="Tek Amaç" label="Her organizasyonun net bir hedefi olmalı" />
              <StatCard value="6+ tür" label="Lansman, bayi, konferans, gala, açılış, kutlama" />
              <StatCard value="Tek Plan" label="Sahne + LED + ses–ışık + reji birlikte" />
              <StatCard value="Ölçüm" label="Etkinlik sonrası başarı verisiyle kapanır" />
            </div>

            <ProTip title="Bu yazıyı nasıl kullanın?">
              Bu rehber bir “başlangıç haritası”dır: kurumsal organizasyonun ne olduğunu ve
              nasıl planlandığını bütün olarak gösterir. Her bölümde, konuyu derinleştiren
              özel rehberlere (planlama, yönetim, bayi toplantısı, lansman) bağlantı bulacaksınız.
            </ProTip>
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
                    ["#s1", "1. Kurumsal organizasyon nedir?"],
                    ["#s2", "2. Neden yapılmalı? (amaçlar)"],
                    ["#s3", "3. Kurumsal etkinlik türleri"],
                    ["#s4", "4. Planlamanın 7 adımı"],
                    ["#s5", "5. Bütçe ve mekân"],
                    ["#s6", "6. Teknik prodüksiyonun rolü"],
                    ["#s7", "7. Ajansla mı, kendiniz mi?"],
                    ["#s8", "8. Başarıyı nasıl ölçersiniz?"],
                    ["#s9", "9. Sık sorulan sorular"],
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
                <H2 id="s1">1. Kurumsal organizasyon nedir?</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Kurumsal organizasyon; bir şirketin çalışanları, iş ortakları, bayileri,
                  müşterileri veya kamuoyuna yönelik belirli bir amaçla düzenlediği planlı
                  etkinliklerin genel adıdır. Bir ürün lansmanı da kurumsal organizasyondur,
                  bir bayi toplantısı da, yıl sonu gala gecesi de. Ortak nokta şudur:
                  net bir hedef, planlı bir akış ve bu akışı taşıyan{" "}
                  <Link className="font-semibold underline underline-offset-4" href="/kurumsal-organizasyon">
                    kurumsal organizasyon
                  </Link>{" "}
                  ve teknik prodüksiyon altyapısı.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Kısacası kurumsal organizasyon, “bir araya gelme” değil “bir amaç etrafında
                  tasarlanmış deneyim”dir. Sahne, LED ekran, ses–ışık ve içerik; bu deneyimi
                  izleyiciye aktaran araçlardır.
                </p>

                <Figure
                  src="/img/blog/kurumsal-organizasyon-ornek-sahne-led-ekran.webp"
                  alt="Kurumsal organizasyon örneği: dev LED ekranlı ödül töreni sahnesi ve izleyici"
                  caption="Kurumsal organizasyon, net bir amaç etrafında tasarlanmış bütünsel bir deneyimdir."
                />
              </section>

              {/* s2 */}
              <section className="mt-10">
                <H2 id="s2">2. Neden yapılmalı? Kurumsal organizasyonun amaçları</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Kurumsal organizasyon bir “masraf” değil, doğru kurgulandığında ölçülebilir
                  iş sonucu üreten bir yatırımdır. Şirketler bunu genellikle şu amaçlarla yapar:
                </p>

                <Table
                  caption="Kurumsal organizasyonun başlıca amaçları"
                  columns={["Amaç", "Ne sağlar?", "Tipik format"]}
                  rows={[
                    ["Marka bilinirliği", "Yeni ürün/hizmeti güçlü biçimde duyurma", "Ürün lansmanı, basın etkinliği"],
                    ["Motivasyon", "Çalışan ve bayi bağlılığını artırma", "Bayi toplantısı, ödül gecesi"],
                    ["İç iletişim", "Strateji ve hedefleri hizalama", "Konferans, kick-off"],
                    ["İş geliştirme", "İlişki kurma ve satış fırsatı", "Networking, gala, fuar"],
                    ["İtibar", "Kurumsal imaj ve güven inşası", "Açılış, kutlama, tören"],
                  ]}
                />

                <ProTip title="Anahtar ilke">
                  “Neden” sorusunu tek cümleyle yanıtlayamıyorsanız, organizasyon henüz hazır
                  değildir. Amaç netleşmeden bütçe ve teknik kapsam doğru kurulamaz.
                </ProTip>
              </section>

              {/* s3 */}
              <section className="mt-10">
                <H2 id="s3">3. Kurumsal etkinlik türleri</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  “Kurumsal organizasyon” şemsiye bir kavramdır; altında birbirinden farklı
                  formatlar bulunur. Doğru türü seçmek, teknik kapsamı ve bütçeyi doğrudan belirler.
                </p>

                <Figure
                  src="/img/blog/kurumsal-organizasyon-konferans-etkinlik-turu.webp"
                  alt="Kurumsal organizasyon türü örneği: dev perde ve sahnede konuşmacı ile konferans"
                  caption="Konferans, gala, lansman, açılış… Her tür farklı bir teknik kapsam ve sahne kurgusu gerektirir."
                />

                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                  <li>
                    <strong className="font-semibold text-slate-900">Ürün lansmanı:</strong>{" "}
                    Tek mesajı güçlü biçimde vurgulayan, gösterişli ve kısa format. Ayrıntılar için{" "}
                    <Link className="font-semibold underline underline-offset-4" href="/blog/urun-lansmani-organizasyonu">
                      ürün lansmanı organizasyonu
                    </Link>{" "}
                    rehberine bakın.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900">Bayi toplantısı:</strong>{" "}
                    Genel oturum, hedef sunumu, eğitim ve ödül gecesini birleştiren çok bölümlü format.{" "}
                    <Link
                      className="font-semibold underline underline-offset-4"
                      href="/blog/bayi-toplantisi-organizasyonu-rehberi"
                    >
                      Bayi toplantısı organizasyonu rehberi
                    </Link>.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900">Konferans & kongre:</strong>{" "}
                    Bilgi aktarımı ağırlıklı, sunum ve ses netliğinin kritik olduğu format.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900">Gala & ödül gecesi:</strong>{" "}
                    Duygusal zirve; show ışığı, sahne ve atmosfer öne çıkar.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900">Açılış & tören:</strong>{" "}
                    Kurumsal itibar odaklı, protokol ve görünürlük gerektiren format.
                  </li>
                  <li>
                    <strong className="font-semibold text-slate-900">Kutlama & sosyal etkinlik:</strong>{" "}
                    Motivasyon ve aidiyet odaklı; yaratıcı fikirler için{" "}
                    <Link
                      className="font-semibold underline underline-offset-4"
                      href="/blog/12-eglenceli-kurumsal-etkinlik-fikri"
                    >
                      12 eğlenceli kurumsal etkinlik fikri
                    </Link>.
                  </li>
                </ul>
              </section>

              {/* s4 */}
              <section className="mt-10">
                <H2 id="s4">4. Kurumsal organizasyon nasıl planlanır? 7 adım</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Planlama, amaçtan ölçüme uzanan bir zincirdir. Aşağıdaki yedi adım her kurumsal
                  organizasyonun iskeletini oluşturur. Her adımın detaylı uygulaması için{" "}
                  <Link
                    className="font-semibold underline underline-offset-4"
                    href="/blog/kurumsal-etkinlik-planlama-rehberi-2026"
                  >
                    2026 kurumsal etkinlik planlama rehberi
                  </Link>{" "}
                  ve{" "}
                  <Link
                    className="font-semibold underline underline-offset-4"
                    href="/blog/kurumsal-etkinlik-yonetimi"
                  >
                    kurumsal etkinlik yönetimi
                  </Link>{" "}
                  yazılarına geçebilirsiniz.
                </p>

                <Figure
                  src="/img/blog/kurumsal-etkinlik-timeline.webp"
                  alt="Kurumsal organizasyon planlama adımları zaman çizelgesi"
                  caption="Amaçtan ölçüme: kurumsal organizasyon planlamasının yedi temel adımı."
                />

                <Table
                  caption="Planlamanın 7 adımı"
                  columns={["Adım", "Ne yapılır?"]}
                  rows={[
                    ["1. Amaç & kitle", "Etkinliğin ‘neden’i ve hedef kitlesi tek cümleyle yazılır"],
                    ["2. Tür & format", "Lansman / bayi / konferans / gala kararı verilir"],
                    ["3. Bütçe & tarih", "Gerçekçi bütçe, contingency ve uygun tarih belirlenir"],
                    ["4. Mekân & keşif", "Salon seçilir, teknik keşifle altyapı doğrulanır"],
                    ["5. Teknik prodüksiyon", "Sahne, LED, ses–ışık ve reji planı kurulur"],
                    ["6. Run-of-show & prova", "Dakika dakika akış yazılır, sahnede prova edilir"],
                    ["7. Ölçüm", "Etkinlik sonrası veriyle başarı değerlendirilir"],
                  ]}
                />

                <InteractiveChecklist
                  storageKey="ko_s4_plan"
                  items={[
                    "Amaç ve hedef kitle yazılı hale getirildi mi?",
                    "Etkinlik türü ve format kararı verildi mi?",
                    "Bütçe (contingency dahil) ve tarih net mi?",
                    "Mekân seçildi ve teknik keşif planlandı mı?",
                    "Teknik prodüksiyon kapsamı belirlendi mi?",
                    "Run-of-show ve prova takvimi hazır mı?",
                    "Başarı ölçüm yöntemi tanımlandı mı?",
                  ]}
                />
              </section>

              {/* s5 */}
              <section className="mt-10">
                <H2 id="s5">5. Bütçe ve mekân: en belirleyici iki karar</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Bir kurumsal organizasyonun karakterini en çok bütçe ve mekân belirler.
                  Bütçenin önemli bir kısmı “mekân + teknik altyapı” tarafında toplanır; bu yüzden
                  sahne, LED ekran ve ses–ışığı tek pakette düşünmek maliyet ve sorumluluk yönetimini
                  netleştirir. Son dakika talepleri için %10–15 contingency bırakmak standarttır.
                </p>

                <Figure
                  src="/img/blog/kurumsal-etkinlik-butce-infografik.webp"
                  alt="Kurumsal organizasyon bütçe dağılımı infografiği"
                  caption="Bütçeyi kalemlere bölmek ve contingency ayırmak, sürprizi baştan azaltır."
                />

                <InteractiveChecklist
                  storageKey="ko_s5_butce"
                  items={[
                    "Bütçe kalemlere ayrıldı mı (mekân/teknik/catering/içerik)?",
                    "Contingency (%10–15) eklendi mi?",
                    "Mekân kapasitesi ve teknik uygunluğu doğrulandı mı?",
                    "Elektrik, tavan ve yükleme koşulları kontrol edildi mi?",
                  ]}
                />
              </section>

              {/* s6 */}
              <section className="mt-10">
                <H2 id="s6">6. Teknik prodüksiyonun rolü</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Fikir ne kadar iyi olursa olsun, izleyiciye ulaşmasını sağlayan teknik prodüksiyondur.
                  Sahne ve podyum sunumu taşır;{" "}
                  <Link className="font-semibold underline underline-offset-4" href="/led-ekran-kiralama">
                    LED ekran
                  </Link>{" "}
                  hikâyeyi görselleştirir;{" "}
                  <Link className="font-semibold underline underline-offset-4" href="/ses-isik-sistemleri">
                    ses ve ışık sistemleri
                  </Link>{" "}
                  atmosferi ve anlaşılırlığı kurar; reji ise tüm bunları senkron tutar. Bu bileşenlerin
                  ayrı tedarikçilerden gelmesi yerine tek elden yönetilmesi, sahadaki en yaygın krizleri baştan önler.
                </p>

                <Figure
                  src="/img/blog/kurumsal-organizasyon-teknik-produksiyon-ses-reji.webp"
                  alt="Kurumsal organizasyonda ses mikseri, reji ve LED ekranın entegrasyonu"
                  caption="Sahne + LED + ses–ışık + reji tek planda buluştuğunda deneyim kesintisiz olur."
                />

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  <Link className="font-semibold underline underline-offset-4" href="/sahne-kiralama">
                    Sahne Kiralama
                  </Link>{" "}
                  •{" "}
                  <Link className="font-semibold underline underline-offset-4" href="/podyum-kiralama">
                    Podyum Kiralama
                  </Link>{" "}
                  •{" "}
                  <Link className="font-semibold underline underline-offset-4" href="/cadir-kiralama">
                    Çadır Kiralama
                  </Link>
                </p>

                <InteractiveChecklist
                  storageKey="ko_s6_teknik"
                  items={[
                    "Sahne/podyum ölçü ve yüksekliği belirlendi mi?",
                    "LED ekran (piksel/parlaklık) ihtiyacı netleşti mi?",
                    "Ses sistemi ve mikrofon planı yapıldı mı?",
                    "Işık kurgusu ve reji akışı planlandı mı?",
                    "Tek elden yönetim mi, çok tedarikçi mi karar verildi mi?",
                  ]}
                />
              </section>

              {/* s7 */}
              <section className="mt-10">
                <H2 id="s7">7. Ajansla mı çalışmalı, kendiniz mi planlamalı?</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Küçük ölçekli ve iç ekiple yönetilebilir etkinlikler kurum içinde planlanabilir.
                  Ancak katılımcı sayısı, teknik kapsam ve marka görünürlüğü arttıkça profesyonel bir
                  organizasyon ve teknik prodüksiyon partneriyle çalışmak riski ciddi biçimde azaltır.
                  Kritik ölçüt şudur: aynı anda yönetilmesi gereken parça sayısı arttığında “tek karar
                  noktası + tek teknik plan” avantaja dönüşür.
                </p>

                <InteractiveChecklist
                  storageKey="ko_s7_ajans"
                  items={[
                    "Etkinlik ölçeği iç ekiple yönetilebilir mi?",
                    "Teknik kapsam (sahne/LED/ses/ışık) uzmanlık gerektiriyor mu?",
                    "Marka görünürlüğü ve risk toleransı değerlendirildi mi?",
                    "Tek elden anahtar teslim çözüm daha mı verimli?",
                  ]}
                />
              </section>

              {/* s8 */}
              <section className="mt-10">
                <H2 id="s8">8. Başarıyı nasıl ölçersiniz?</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Kurumsal organizasyon, alkışla değil veriyle kapanır. Katılım oranı, memnuniyet
                  anketi, hedeflerin benimsenmesi, elde edilen lead veya medya yansıması gibi metrikler
                  bir sonraki etkinliğin kalitesini belirler. Ölçümü en baştan planlamak (QR anket,
                  canlı oylama, kayıt verisi) sonradan “acaba ne kadar işe yaradı?” belirsizliğini önler.
                </p>

                <InteractiveChecklist
                  storageKey="ko_s8_olcum"
                  items={[
                    "Başlangıçta ölçülebilir hedefler tanımlandı mı?",
                    "Memnuniyet anketi (QR/e-posta) planlandı mı?",
                    "Katılım/etkileşim verisi toplanacak mı?",
                    "Ekip içi debrief ve öğrenimler raporlanacak mı?",
                  ]}
                />
              </section>

              {/* s9 */}
              <section className="mt-10">
                <H2 id="s9">9. Sık sorulan sorular</H2>

                <div className="mt-4 space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900">
                      Kurumsal organizasyon nedir?
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Bir şirketin belirli bir amaç doğrultusunda düzenlediği planlı etkinliklerin
                      genel adıdır: ürün lansmanı, bayi toplantısı, konferans, gala, açılış ve
                      kurumsal kutlamalar bu başlık altındadır ve genellikle profesyonel teknik
                      prodüksiyonla hayata geçirilir.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900">
                      Kurumsal organizasyon neden yapılır?
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Marka bilinirliğini artırmak, çalışan ve bayi motivasyonunu yükseltmek, yeni
                      ürün/stratejiyi duyurmak, iş ilişkilerini güçlendirmek ve kurumsal itibarı
                      pekiştirmek için. İyi planlanmış bir organizasyon ölçülebilir iş sonucu üretir.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900">
                      Kurumsal organizasyon nasıl planlanır?
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Amaç ve hedef kitle netleştirilir; tür, bütçe, tarih ve mekân belirlenir;
                      teknik keşif sonrası sahne–LED–ses–ışık ve reji planı kurulur, dakika dakika
                      run-of-show hazırlanır ve etkinlik sonrası başarı ölçülür.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">
                  Kurumsal organizasyonunuzu tek elden planlayalım
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Sahneva olarak{" "}
                  <strong className="font-semibold text-slate-900">700+ başarılı projede</strong>{" "}
                  edindiğimiz deneyimle,{" "}
                  <strong className="font-semibold text-slate-900">81 ilde</strong> kurumsal
                  organizasyonun amaç tanımından teknik prodüksiyonuna kadar tüm süreci tek elden
                  yönetiyoruz. Hızlı teklif için WhatsApp’tan yazın; çoğu projede{" "}
                  <strong className="font-semibold text-slate-900">2 saat içinde</strong>{" "}
                  projelendirilmiş teklif çıkıyoruz.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    WhatsApp’tan Yazın
                  </a>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    İletişim Formu
                  </Link>
                  <Link
                    href="/kurumsal-organizasyon"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Kurumsal Organizasyon Hizmeti
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
                  { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
                  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
                ]}
              />
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Hızlı Teklif</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Etkinlik türü, tarih ve katılımcı sayısını yazın; hızlıca projelendirelim.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
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
                  <Link
                    href="/kurumsal-organizasyon"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Kurumsal Organizasyon
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Hizmetler</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li><Link className="hover:text-slate-900" href="/kurumsal-organizasyon">Kurumsal Organizasyon</Link></li>
                  <li><Link className="hover:text-slate-900" href="/led-ekran-kiralama">LED Ekran Kiralama</Link></li>
                  <li><Link className="hover:text-slate-900" href="/ses-isik-sistemleri">Ses & Işık Sistemleri</Link></li>
                  <li><Link className="hover:text-slate-900" href="/sahne-kiralama">Sahne Kiralama</Link></li>
                  <li><Link className="hover:text-slate-900" href="/podyum-kiralama">Podyum Kiralama</Link></li>
                  <li><Link className="hover:text-slate-900" href="/cadir-kiralama">Çadır Kiralama</Link></li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">İlgili Yazılar</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li><Link className="hover:text-slate-900" href="/blog/kurumsal-etkinlik-planlama-rehberi-2026">2026 Kurumsal Etkinlik Planlama Rehberi</Link></li>
                  <li><Link className="hover:text-slate-900" href="/blog/kurumsal-etkinlik-yonetimi">Kurumsal Etkinlik Yönetimi Rehberi</Link></li>
                  <li><Link className="hover:text-slate-900" href="/blog/bayi-toplantisi-organizasyonu-rehberi">Bayi Toplantısı Organizasyonu Rehberi</Link></li>
                  <li><Link className="hover:text-slate-900" href="/blog/urun-lansmani-organizasyonu">Ürün Lansmanı Organizasyonu</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

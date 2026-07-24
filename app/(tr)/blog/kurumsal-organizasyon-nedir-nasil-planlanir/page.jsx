// app/(tr)/blog/kurumsal-organizasyon-nedir-nasil-planlanir/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import InteractiveChecklist from "@/components/blog/InteractiveChecklist.client";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

/* ================== YAPILANDIRMA & SABİTLER ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const BLOG_URL = `${SITE_URL}/blog/kurumsal-organizasyon-nedir-nasil-planlanir`;
const PUBLISH_DATE = "2026-07-24T11:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile(
  "app/(tr)/blog/kurumsal-organizasyon-nedir-nasil-planlanir/page.jsx",
  "2026-07-24T11:00:00+03:00"
);
const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const HERO_IMAGE = "/img/blog/kurumsal-organizasyon-nedir-nasil-planlanir-hero.webp";
const FEATURED_IMAGE = HERO_IMAGE;
const OG_IMAGE = HERO_IMAGE;
const WA_URL =
  "https://wa.me/905453048671?text=" +
  encodeURIComponent("Merhaba, kurumsal organizasyon için teklif almak istiyorum.");

const TOC_ITEMS = [
  { href: "#s1", label: "Kurumsal organizasyon nedir?" },
  { href: "#s2", label: "Neden yapılmalı? (amaçlar)" },
  { href: "#s3", label: "Kurumsal etkinlik türleri" },
  { href: "#s4", label: "Planlamanın 7 adımı" },
  { href: "#s5", label: "Bütçe ve mekân" },
  { href: "#s6", label: "Teknik prodüksiyonun rolü" },
  { href: "#s7", label: "Ajansla mı, kendiniz mi?" },
  { href: "#s8", label: "Başarıyı nasıl ölçersiniz?" },
  { href: "#faq", label: "Sık sorulan sorular" },
];

const CORNERSTONE_LINKS = [
  { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemleri" },
];

/* ================== META DATA ================== */
export const metadata = {
  title: "Kurumsal Organizasyon Nedir, Nasıl Planlanır?",
  description:
    "Kurumsal organizasyon nedir, neden yapılır ve nasıl planlanır? Etkinlik türleri, hedefler, bütçe, mekân ve teknik prodüksiyon adımlarını içeren kapsamlı başlangıç rehberi.",
  alternates: {
    canonical: BLOG_URL,
  },
  image: HERO_IMAGE,
  openGraph: {
    title: "Kurumsal Organizasyon Nedir, Nasıl Planlanır? | Sahneva",
    description:
      "Kurumsal organizasyon nedir, neden yapılır, nasıl planlanır? Etkinlik türleri, hedefler, bütçe, mekân ve teknik prodüksiyon rehberi.",
    url: BLOG_URL,
    siteName: "Sahneva",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
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
    images: [`${SITE_URL}${OG_IMAGE}`],
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
  publisher: "Sahneva",
  date: PUBLISH_DATE,
  category: "Kurumsal Organizasyon",
};

/* ================== FAQ VERİLERİ ================== */
const FAQ_ITEMS = [
  {
    question: "Kurumsal organizasyon nedir?",
    answer:
      "Bir şirketin belirli bir amaç doğrultusunda düzenlediği planlı etkinliklerin genel adıdır: ürün lansmanı, bayi toplantısı, konferans, gala, açılış ve kurumsal kutlamalar bu başlık altındadır ve genellikle profesyonel teknik prodüksiyonla hayata geçirilir.",
  },
  {
    question: "Kurumsal organizasyon neden yapılır?",
    answer:
      "Marka bilinirliğini artırmak, çalışan ve bayi motivasyonunu yükseltmek, yeni ürün/stratejiyi duyurmak, iş ilişkilerini güçlendirmek ve kurumsal itibarı pekiştirmek için. İyi planlanmış bir organizasyon ölçülebilir iş sonucu üretir.",
  },
  {
    question: "Kurumsal organizasyon nasıl planlanır?",
    answer:
      "Amaç ve hedef kitle netleştirilir; tür, bütçe, tarih ve mekân belirlenir; teknik keşif sonrası sahne–LED–ses–ışık ve reji planı kurulur, dakika dakika run-of-show hazırlanır ve etkinlik sonrası başarı ölçülür.",
  },
];

/* ================== SCHEMA (JSON-LD) ================== */
function ArticleSchema() {
  const site = String(SITE_URL || "").replace(/\/$/, "");
  const orgId = `${site}/#org`;
  const editorId = `${site}/#editor`;
  const modified = MODIFIED_DATE || PUBLISH_DATE;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BLOG_URL}#blogposting`,
        headline: metadata?.title || "Blog Yazısı",
        description: metadata?.description,
        image: `${site}${HERO_IMAGE}`,
        datePublished: PUBLISH_DATE,
        dateModified: modified,
        inLanguage: "tr-TR",
        author: { "@id": editorId },
        publisher: { "@id": orgId },
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        isPartOf: { "@type": "Blog", "@id": `${site}/blog#blog` },
      },
      {
        "@type": "FAQPage",
        "@id": `${BLOG_URL}#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return <JsonLd data={schema} suppressHydrationWarning />;
}

/* ================== YEREL BİLEŞENLER (prose içi, not-prose) ================== */
function Figure({ src, alt, caption, priority = false, loading = "lazy" }) {
  return (
    <figure className="my-10 not-prose">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        sizes="(max-width: 768px) 100vw, 800px"
        className="w-full h-auto rounded-2xl shadow-lg"
        priority={priority}
        loading={loading}
        fetchPriority={priority ? "high" : "auto"}
      />
      {caption ? (
        <figcaption className="mt-3 text-sm text-gray-600 text-center font-medium">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ProTip({ title = "Profesyonel İpucu", children }) {
  return (
    <div className="my-10 bg-gradient-to-r from-indigo-50 to-blue-50 border border-blue-100 p-6 rounded-2xl shadow-sm not-prose">
      <div className="flex items-start gap-4">
        <span className="text-3xl flex-shrink-0" aria-hidden="true">💡</span>
        <div>
          <h4 className="text-blue-900 font-bold mt-0 mb-2 text-lg">{title}</h4>
          <div className="text-blue-800 text-base leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

function DataTable({ caption, columns, rows }) {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm text-left bg-white min-w-[600px]">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead className="bg-gray-50 text-gray-700 uppercase tracking-wider text-xs border-b">
          <tr>
            {columns.map((c) => (
              <th key={c} scope="col" className="p-4 font-bold">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((r, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition-colors">
              {r.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="p-4 font-bold text-blue-600">
                    {cell}
                  </th>
                ) : (
                  <td key={j} className="p-4 text-gray-700">
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Checklist({ storageKey, items }) {
  return (
    <div className="not-prose my-8">
      <InteractiveChecklist storageKey={storageKey} items={items} />
    </div>
  );
}

/* ================== ANA SAYFA ================== */
export default function KurumsalOrganizasyonNedirPage() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "Kurumsal Organizasyon Nedir, Nasıl Planlanır?", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />

      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{
          src: HERO_IMAGE,
          alt: "Kurumsal organizasyon: dev LED ekranlı sahne ve izleyici",
        }}
        pills={["Sahneva Blog", "Başlangıç Rehberi", "Kurumsal Organizasyon"]}
        title="Kurumsal Organizasyon Nedir, Nasıl Planlanır?"
        description={metadata.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="10–12 dk okuma"
        tocItems={TOC_ITEMS}
        cornerstoneLinks={CORNERSTONE_LINKS}
        currentSlug={BLOG_URL.split("/").pop()}
        currentCategory={metadata?.category}
        currentKeywords={metadata?.keywords}
        primaryLinks={[
          { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon", icon: "🏢" },
          { href: "/sahne-kiralama", label: "Sahne Kiralama", icon: "🎭" },
          { href: "/led-ekran-kiralama", label: "LED Ekran", icon: "🟦" },
        ]}
        whatsappUrl={WA_URL}
      >
        <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
          <p className="text-lg text-gray-700 font-medium italic m-0">
            Kurumsal organizasyon; bir şirketin belirli bir amaç için düzenlediği planlı etkinliklerin genel
            adıdır — ürün lansmanından bayi toplantısına, konferanstan gala gecesine kadar.
          </p>
        </div>

        <p>
          Bu rehber üç temel soruyu net biçimde yanıtlıyor: kurumsal organizasyon{" "}
          <strong>nedir</strong>, <strong>neden</strong> yapılmalı ve baştan sona <strong>nasıl</strong>{" "}
          planlanır? Detaya inmek istediğiniz her adımda ilgili derin rehberlere de yönlendiriyoruz.
        </p>

        <div className="not-prose my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Tek Amaç", "Her organizasyonun net bir hedefi olmalı"],
            ["6+ tür", "Lansman, bayi, konferans, gala, açılış, kutlama"],
            ["Tek Plan", "Sahne + LED + ses–ışık + reji birlikte"],
            ["Ölçüm", "Etkinlik sonrası başarı verisiyle kapanır"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-2xl font-black tracking-tight text-slate-900">{value}</div>
              <div className="mt-1 text-sm text-slate-600">{label}</div>
            </div>
          ))}
        </div>

        <ProTip title="Bu yazıyı nasıl kullanın?">
          Bu rehber bir “başlangıç haritası”dır: kurumsal organizasyonun ne olduğunu ve nasıl planlandığını
          bütün olarak gösterir. Her bölümde, konuyu derinleştiren özel rehberlere (planlama, yönetim, bayi
          toplantısı, lansman) bağlantı bulacaksınız.
        </ProTip>

        {/* s1 */}
        <h2 id="s1">1. Kurumsal organizasyon nedir?</h2>
        <p>
          Kurumsal organizasyon; bir şirketin çalışanları, iş ortakları, bayileri, müşterileri veya kamuoyuna
          yönelik belirli bir amaçla düzenlediği planlı etkinliklerin genel adıdır. Bir ürün lansmanı da
          kurumsal organizasyondur, bir bayi toplantısı da, yıl sonu gala gecesi de. Ortak nokta şudur: net
          bir hedef, planlı bir akış ve bu akışı taşıyan{" "}
          <Link href="/kurumsal-organizasyon">kurumsal organizasyon</Link> ve teknik prodüksiyon altyapısı.
        </p>
        <p>
          Kısacası kurumsal organizasyon, “bir araya gelme” değil “bir amaç etrafında tasarlanmış deneyim”dir.
          Sahne, LED ekran, ses–ışık ve içerik; bu deneyimi izleyiciye aktaran araçlardır.
        </p>
        <Figure
          src="/img/blog/kurumsal-organizasyon-ornek-sahne-led-ekran.webp"
          alt="Kurumsal organizasyon örneği: dev LED ekranlı ödül töreni sahnesi ve izleyici"
          caption="Kurumsal organizasyon, net bir amaç etrafında tasarlanmış bütünsel bir deneyimdir."
        />

        {/* s2 */}
        <h2 id="s2">2. Neden yapılmalı? Kurumsal organizasyonun amaçları</h2>
        <p>
          Kurumsal organizasyon bir “masraf” değil, doğru kurgulandığında ölçülebilir iş sonucu üreten bir
          yatırımdır. Şirketler bunu genellikle şu amaçlarla yapar:
        </p>
        <DataTable
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
          “Neden” sorusunu tek cümleyle yanıtlayamıyorsanız, organizasyon henüz hazır değildir. Amaç
          netleşmeden bütçe ve teknik kapsam doğru kurulamaz.
        </ProTip>

        {/* s3 */}
        <h2 id="s3">3. Kurumsal etkinlik türleri</h2>
        <p>
          “Kurumsal organizasyon” şemsiye bir kavramdır; altında birbirinden farklı formatlar bulunur. Doğru
          türü seçmek, teknik kapsamı ve bütçeyi doğrudan belirler.
        </p>
        <Figure
          src="/img/blog/kurumsal-organizasyon-konferans-etkinlik-turu.webp"
          alt="Kurumsal organizasyon türü örneği: dev perde ve sahnede konuşmacı ile konferans"
          caption="Konferans, gala, lansman, açılış… Her tür farklı bir teknik kapsam ve sahne kurgusu gerektirir."
        />
        <ul>
          <li>
            <strong>Ürün lansmanı:</strong> Tek mesajı güçlü biçimde vurgulayan, gösterişli ve kısa format.
            Ayrıntılar için{" "}
            <Link href="/blog/urun-lansmani-organizasyonu">ürün lansmanı organizasyonu</Link> rehberine bakın.
          </li>
          <li>
            <strong>Bayi toplantısı:</strong> Genel oturum, hedef sunumu, eğitim ve ödül gecesini birleştiren
            çok bölümlü format.{" "}
            <Link href="/blog/bayi-toplantisi-organizasyonu-rehberi">
              Bayi toplantısı organizasyonu rehberi
            </Link>
            .
          </li>
          <li>
            <strong>Konferans &amp; kongre:</strong> Bilgi aktarımı ağırlıklı, sunum ve ses netliğinin kritik
            olduğu format.
          </li>
          <li>
            <strong>Gala &amp; ödül gecesi:</strong> Duygusal zirve; show ışığı, sahne ve atmosfer öne çıkar.
          </li>
          <li>
            <strong>Açılış &amp; tören:</strong> Kurumsal itibar odaklı, protokol ve görünürlük gerektiren
            format.
          </li>
          <li>
            <strong>Kutlama &amp; sosyal etkinlik:</strong> Motivasyon ve aidiyet odaklı; yaratıcı fikirler
            için{" "}
            <Link href="/blog/12-eglenceli-kurumsal-etkinlik-fikri">12 eğlenceli kurumsal etkinlik fikri</Link>
            .
          </li>
        </ul>

        {/* s4 */}
        <h2 id="s4">4. Kurumsal organizasyon nasıl planlanır? 7 adım</h2>
        <p>
          Planlama, amaçtan ölçüme uzanan bir zincirdir. Aşağıdaki yedi adım her kurumsal organizasyonun
          iskeletini oluşturur. Her adımın detaylı uygulaması için{" "}
          <Link href="/blog/kurumsal-etkinlik-planlama-rehberi-2026">
            2026 kurumsal etkinlik planlama rehberi
          </Link>{" "}
          ve <Link href="/blog/kurumsal-etkinlik-yonetimi">kurumsal etkinlik yönetimi</Link> yazılarına
          geçebilirsiniz.
        </p>
        <Figure
          src="/img/blog/kurumsal-etkinlik-timeline.webp"
          alt="Kurumsal organizasyon planlama adımları zaman çizelgesi"
          caption="Amaçtan ölçüme: kurumsal organizasyon planlamasının yedi temel adımı."
        />
        <DataTable
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
        <Checklist
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

        {/* s5 */}
        <h2 id="s5">5. Bütçe ve mekân: en belirleyici iki karar</h2>
        <p>
          Bir kurumsal organizasyonun karakterini en çok bütçe ve mekân belirler. Bütçenin önemli bir kısmı
          “mekân + teknik altyapı” tarafında toplanır; bu yüzden sahne, LED ekran ve ses–ışığı tek pakette
          düşünmek maliyet ve sorumluluk yönetimini netleştirir. Son dakika talepleri için %10–15 contingency
          bırakmak standarttır.
        </p>
        <Figure
          src="/img/blog/kurumsal-etkinlik-butce-infografik.webp"
          alt="Kurumsal organizasyon bütçe dağılımı infografiği"
          caption="Bütçeyi kalemlere bölmek ve contingency ayırmak, sürprizi baştan azaltır."
        />
        <Checklist
          storageKey="ko_s5_butce"
          items={[
            "Bütçe kalemlere ayrıldı mı (mekân/teknik/catering/içerik)?",
            "Contingency (%10–15) eklendi mi?",
            "Mekân kapasitesi ve teknik uygunluğu doğrulandı mı?",
            "Elektrik, tavan ve yükleme koşulları kontrol edildi mi?",
          ]}
        />

        {/* s6 */}
        <h2 id="s6">6. Teknik prodüksiyonun rolü</h2>
        <p>
          Fikir ne kadar iyi olursa olsun, izleyiciye ulaşmasını sağlayan teknik prodüksiyondur. Sahne ve
          podyum sunumu taşır; <Link href="/led-ekran-kiralama">LED ekran</Link> hikâyeyi görselleştirir;{" "}
          <Link href="/ses-isik-sistemleri">ses ve ışık sistemleri</Link> atmosferi ve anlaşılırlığı kurar;
          reji ise tüm bunları senkron tutar. Bu bileşenlerin ayrı tedarikçilerden gelmesi yerine tek elden
          yönetilmesi, sahadaki en yaygın krizleri baştan önler.
        </p>
        <Figure
          src="/img/blog/kurumsal-organizasyon-teknik-produksiyon-ses-reji.webp"
          alt="Kurumsal organizasyonda ses mikseri, reji ve LED ekranın entegrasyonu"
          caption="Sahne + LED + ses–ışık + reji tek planda buluştuğunda deneyim kesintisiz olur."
        />
        <p>
          <Link href="/sahne-kiralama">Sahne Kiralama</Link> ·{" "}
          <Link href="/podyum-kiralama">Podyum Kiralama</Link> ·{" "}
          <Link href="/cadir-kiralama">Çadır Kiralama</Link>
        </p>
        <Checklist
          storageKey="ko_s6_teknik"
          items={[
            "Sahne/podyum ölçü ve yüksekliği belirlendi mi?",
            "LED ekran (piksel/parlaklık) ihtiyacı netleşti mi?",
            "Ses sistemi ve mikrofon planı yapıldı mı?",
            "Işık kurgusu ve reji akışı planlandı mı?",
            "Tek elden yönetim mi, çok tedarikçi mi karar verildi mi?",
          ]}
        />

        {/* s7 */}
        <h2 id="s7">7. Ajansla mı çalışmalı, kendiniz mi planlamalı?</h2>
        <p>
          Küçük ölçekli ve iç ekiple yönetilebilir etkinlikler kurum içinde planlanabilir. Ancak katılımcı
          sayısı, teknik kapsam ve marka görünürlüğü arttıkça profesyonel bir organizasyon ve teknik
          prodüksiyon partneriyle çalışmak riski ciddi biçimde azaltır. Kritik ölçüt şudur: aynı anda
          yönetilmesi gereken parça sayısı arttığında “tek karar noktası + tek teknik plan” avantaja dönüşür.
        </p>
        <Checklist
          storageKey="ko_s7_ajans"
          items={[
            "Etkinlik ölçeği iç ekiple yönetilebilir mi?",
            "Teknik kapsam (sahne/LED/ses/ışık) uzmanlık gerektiriyor mu?",
            "Marka görünürlüğü ve risk toleransı değerlendirildi mi?",
            "Tek elden anahtar teslim çözüm daha mı verimli?",
          ]}
        />

        {/* s8 */}
        <h2 id="s8">8. Başarıyı nasıl ölçersiniz?</h2>
        <p>
          Kurumsal organizasyon, alkışla değil veriyle kapanır. Katılım oranı, memnuniyet anketi, hedeflerin
          benimsenmesi, elde edilen lead veya medya yansıması gibi metrikler bir sonraki etkinliğin kalitesini
          belirler. Ölçümü en baştan planlamak (QR anket, canlı oylama, kayıt verisi) sonradan “acaba ne kadar
          işe yaradı?” belirsizliğini önler.
        </p>
        <Checklist
          storageKey="ko_s8_olcum"
          items={[
            "Başlangıçta ölçülebilir hedefler tanımlandı mı?",
            "Memnuniyet anketi (QR/e-posta) planlandı mı?",
            "Katılım/etkileşim verisi toplanacak mı?",
            "Ekip içi debrief ve öğrenimler raporlanacak mı?",
          ]}
        />

        {/* FAQ */}
        <h2 id="faq">Sık Sorulan Sorular</h2>
        <section aria-labelledby="faq-heading" className="not-prose space-y-3 mt-6">
          <h3 id="faq-heading" className="sr-only">Sıkça Sorulan Sorular</h3>
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden open:ring-2 open:ring-blue-100 open:border-blue-300 transition-all duration-200"
            >
              <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer font-semibold text-gray-800 select-none bg-gray-50/50 hover:bg-gray-50 transition-colors">
                {item.question}
                <span className="ml-4 flex-shrink-0 transition-transform group-open:rotate-180 text-gray-600">▼</span>
              </summary>
              <div className="px-5 pb-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                {item.answer}
              </div>
            </details>
          ))}
        </section>

        {/* BOTTOM CTA */}
        <div className="not-prose mt-16 bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">
            Kurumsal organizasyonunuzu tek elden planlayalım
          </h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10 text-lg">
            Amaç tanımından teknik prodüksiyona kadar tüm süreci tek elden yönetelim. Çoğu projede 2 saat
            içinde projelendirilmiş teklif çıkıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="https://wa.me/905453048671"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="WhatsApp üzerinden teklif isteyin — yeni sekmede açılır"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg"
            >
              <span>💬</span> WhatsApp’tan Yazın
            </a>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg"
            >
              <span>📩</span> İletişim Formu
            </Link>
          </div>
        </div>

        <BlogRelatedLinks
          services={[
            { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
            { href: "/sahne-kiralama", label: "Sahne Kiralama" },
          ]}
        />
      </BlogLayout>
    </>
  );
}

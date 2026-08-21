import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(
  /\/$/,
  ""
);

const SLUG = "organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026";
const BLOG_PATH = `/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const PUBLISH_DATE = "2026-02-12T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile(
  "app/(tr)/blog/organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026/page.jsx",
  "2026-02-05T00:00:00+03:00"
);
const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const ARTICLE_TITLE = "2026 Çadır Kiralama Rehberi: En İyi Seçenekler";
const META_DESCRIPTION =
  "Kurumsal etkinlikten düğüne, fuardan festivale: 2026 çadır kiralama rehberi. Doğru çadır seçimi, kurulum süreci ve maliyetleri hızlıca öğrenin.";

const TENT_SERVICE_PATH = "/cadir-kiralama";
const TENT_CALC_PATH = "/cadir-hesaplama";
const STAGE_SERVICE_PATH = "/sahne-kiralama";
const PODIUM_SERVICE_PATH = "/podyum-kiralama";
const LED_SERVICE_PATH = "/led-ekran-kiralama";
const SOUND_LIGHT_PATH = "/ses-isik-sistemleri";
const CORPORATE_SERVICE_PATH = "/kurumsal-organizasyon";
const DOME_BLOG_PATH = "/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping";

const HERO_IMG = "/img/blog/pagoda-cadir-kurumsal-etkinlik.webp";
const IMG_CLEAR_TOP = "/img/blog/kurumsal-etkinlik-cadir.webp";
const IMG_WIDE_MODULE = "/img/blog/dome-cadir-ic-mekan.webp";

const GALLERY_IMAGES = [
  {
    src: "/img/cadir/pagoda.webp",
    alt: "Kurumsal etkinlik alanında pagoda çadır kiralama kurulumu",
    title: "Pagoda Çadır",
    caption:
      "Karşılama, kokteyl ve VIP alanlarında pagoda formu hem estetik hem hızlı kurulum avantajı sağlar.",
  },
  {
    src: "/img/cadir/seffaf.webp",
    alt: "Düğün ve davet için şeffaf tavanlı çadır kiralama örneği",
    title: "Şeffaf Tavanlı Çadır",
    caption:
      "Clear-top sistemler düğün ve galalarda dekor, avize ve ışık kurgusuyla birlikte planlanır.",
  },
  {
    src: "/img/cadir/buyuk-olcekli-cadir-kurulumu.webp",
    alt: "Büyük ölçekli alüminyum konstrüksiyon çadır kurulumu",
    title: "Büyük Ölçekli Kurulum",
    caption:
      "Geniş açıklıklı sistemlerde ana kirişler forklift ile kaldırılır; ankraj planı zemine göre yapılır.",
  },
  {
    src: "/img/cadir/sahneva-cadir-kurulumu.webp",
    alt: "Sahneva ekibinin etkinlik çadırı kurulum operasyonu",
    title: "Kurulum Operasyonu",
    caption:
      "Kurulum günü; kiriş montajı, tente gerilimi ve çift kontrol ankraj adımlarıyla ilerler.",
  },
  {
    src: "/img/cadir/cadir-saha-2.webp",
    alt: "Etkinlik alanında çadır, sahne ve teknik ekipman entegrasyonu",
    title: "Saha Entegrasyonu",
    caption:
      "Çadır; sahne, LED ekran ve ses-ışık sistemleriyle tek teknik plan içinde ele alınır.",
  },
];

const WA_URL =
  "https://wa.me/905453048671?text=" +
  encodeURIComponent(
    "Merhaba, etkinliğim için çadır kiralama teklifi almak istiyorum. Alan ölçüsü ve kişi sayısını paylaşabilirim."
  );

const TOC_ITEMS = [
  { href: "#neden-cadir", label: "Neden çadır?" },
  { href: "#cadir-tipleri", label: "Çadır tipleri" },
  { href: "#kapasite-olcu", label: "Kapasite ve m² hesabı" },
  { href: "#zemin-ankraj", label: "Zemin ve sabitleme" },
  { href: "#teknik-entegrasyon", label: "Teknik entegrasyon" },
  { href: "#kurulum", label: "Kurulum süreci" },
  { href: "#maliyet", label: "Maliyet kalemleri" },
  { href: "#risk", label: "Sık yapılan hatalar" },
  { href: "#sonuc", label: "Sonuç ve teklif" },
];

export const metadata = {
  title: ARTICLE_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: BLOG_URL,
    languages: {
      "tr-TR": BLOG_URL,
      "en-US": `${SITE_URL}/en/blog/best-tent-rental-options-for-events-2026`,
      "x-default": `${SITE_URL}/en/blog/best-tent-rental-options-for-events-2026`,
    },
  },
  image: HERO_IMG,
  openGraph: {
    title: `${ARTICLE_TITLE} | Sahneva`,
    description: META_DESCRIPTION,
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${HERO_IMG}`,
        width: 1200,
        height: 630,
        alt: "Organizasyonlar için 2026 çadır kiralama rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${ARTICLE_TITLE} | Sahneva`,
    description: META_DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMG}`],
  },
  robots: AI_PREVIEW_ROBOTS,
  keywords: [
    "çadır kiralama",
    "organizasyon çadırı",
    "etkinlik çadırı kiralama",
    "kurumsal etkinlik çadırı",
    "düğün çadırı kiralama",
    "fuar çadırı",
    "festival çadırı",
    "pagoda çadır",
    "şeffaf çadır",
    "çadır kiralama fiyatları",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva Organizasyon",
  category: "Çadır Kiralama",
  date: PUBLISH_DATE,
  readTime: "9 dk okuma",
  other: {
    "article:published_time": PUBLISH_DATE,
    "article:modified_time": MODIFIED_DATE,
    "article:author": AUTHOR_NAME,
    "article:section": "Çadır Kiralama",
  },
};

const FAQ_ITEMS = [
  {
    question: "Kurumsal etkinlikler için en güvenli çadır sistemi hangisi?",
    answer:
      "Alüminyum konstrüksiyon çerçeve çadırlar en güvenli ve teknik entegrasyona uygun çözümdür. Truss, LED ekran ve iklimlendirme altyapıları için ideal taşıyıcı yapıyı sunar.",
  },
  {
    question: "Kaç kişilik etkinlik için kaç metrekare çadır gerekir?",
    answer:
      "Ayakta kokteyl düzeninde kişi başı yaklaşık 1 m², yuvarlak masa yemek düzeninde 1,5 m², tiyatro düzeni oturmada 0,8 m² hesaplanır. Örneğin 200 kişilik bir yemekli davet için sahne ve servis alanıyla birlikte 300-350 m² çadır planlanmalıdır.",
  },
  {
    question: "Çadır kurulumu ne kadar sürer?",
    answer:
      "Süre; metrekare, zemin ve hava koşullarına bağlıdır. 100-300 m² arası kurulumlar genellikle aynı gün tamamlanır. Büyük ölçekli işlerde 6-12 kişilik ekip, 1-2 forklift ve 1-2 tam gün operasyon gerekebilir. Teknik keşif bu planın 2-4 hafta önce yapılmasını gerektirir.",
  },
  {
    question: "Düğün ve özel günlerde çadır seçimi nasıl olmalı?",
    answer:
      "Şeffaf tavanlı veya yüksek kubbeli sistemler hem estetik hem de havalandırma açısından avantaj sağlar. Zemin analizi ve rüzgar hesabı mutlaka yapılmalıdır.",
  },
  {
    question: "Çadır kiralama maliyetini en çok ne etkiler?",
    answer:
      "Metrekare, zemin koşulları, ankraj ihtiyacı, iklimlendirme, LED ekran/sahne entegrasyonu ve lojistik giderleri maliyetin ana belirleyicileridir.",
  },
  {
    question: "İstanbul dışına çadır kurulumu yapıyor musunuz?",
    answer:
      "Evet. İstanbul Kağıthane merkezli ekibimizle Türkiye genelinde kurulum yapıyoruz. Şehir dışı projelerde nakliye, konaklama ve kurulum süresi teklif aşamasında ayrıca planlanır.",
  },
];

function ArticleJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BLOG_URL}#blogposting`,
        headline: ARTICLE_TITLE,
        description: META_DESCRIPTION,
        image: [`${SITE_URL}${HERO_IMG}`, ...GALLERY_IMAGES.map((image) => `${SITE_URL}${image.src}`)],
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        inLanguage: "tr-TR",
        author: { "@type": "Organization", name: "Sahneva Organizasyon", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Sahneva Organizasyon",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.webp` },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        about: [
          { "@type": "Service", name: "Çadır Kiralama", url: `${SITE_URL}${TENT_SERVICE_PATH}` },
          {
            "@type": "Service",
            name: "Kurumsal Organizasyon",
            url: `${SITE_URL}${CORPORATE_SERVICE_PATH}`,
          },
        ],
        mentions: [
          `${SITE_URL}${TENT_CALC_PATH}`,
          `${SITE_URL}${STAGE_SERVICE_PATH}`,
          `${SITE_URL}${LED_SERVICE_PATH}`,
          `${SITE_URL}${SOUND_LIGHT_PATH}`,
        ],
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

function DecisionBox({ title, children }) {
  return (
    <div className="not-prose rounded-2xl border border-violet-100 bg-violet-50 p-5">
      <p className="m-0 text-base font-black text-violet-950">{title}</p>
      <div className="mt-2 text-sm leading-relaxed text-violet-900">{children}</div>
    </div>
  );
}

function GuideImage({ src, alt, caption }) {
  return (
    <figure className="not-prose my-10">
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={788}
          sizes="(max-width: 768px) 100vw, 900px"
          className="h-auto w-full"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm font-medium text-gray-600">
        {caption}
      </figcaption>
    </figure>
  );
}

function TentTypeTable() {
  const rows = [
    ["Pagoda çadır", "25-100 m² modüller", "Kokteyl, karşılama, VIP alan", "Şık tepe formu, hızlı kurulum"],
    ["Alüminyum çerçeve çadır", "100-1.000 m²", "Lansman, bayi toplantısı, fuar", "Truss, LED ekran, klima entegrasyonu"],
    ["High-peak / geniş modül", "300 m² ve üzeri", "Festival, sergi, büyük davet", "Kolonsuz geniş açıklık"],
    ["Şeffaf (clear-top) çadır", "50-300 m²", "Düğün, gala, özel davet", "Dekor, avize ve ışık askısına uygun"],
    ["Dome çadır", "Proje bazlı", "Lansman, 360° mapping deneyimi", "Pnömatik / geodezik yapı"],
    ["Depo ve endüstriyel çadır", "Uzun dönem", "Depolama, saha ofisi, lojistik", "Aylık kiralama modeli"],
  ];

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
        <p className="m-0 font-black text-gray-900">Çadır Tipi Hızlı Karar Tablosu</p>
        <p className="m-0 mt-1 text-sm text-gray-600">
          Ölçüler örnektir; net plan için alan keşfi ve kullanım amacı birlikte değerlendirilmelidir.
        </p>
      </div>
      <div role="region" aria-label="Karşılaştırma tablosunu yatay kaydır" tabIndex={0} className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-5 py-3 font-bold text-gray-900">Çadır Tipi</th>
              <th className="px-5 py-3 font-bold text-gray-900">Tipik Ölçü</th>
              <th className="px-5 py-3 font-bold text-gray-900">Kullanım Amacı</th>
              <th className="px-5 py-3 font-bold text-gray-900">Öne Çıkan Özellik</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-gray-100 last:border-0">
                {row.map((cell) => (
                  <td key={cell} className="whitespace-nowrap px-5 py-4 text-gray-700">
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

function CapacityTable() {
  const rows = [
    ["Kokteyl (ayakta)", "~1 m² / kişi", "100 kişi → ~100 m²", "Servis ve bar alanı ayrıca eklenir"],
    ["Yemekli davet (yuvarlak masa)", "~1,5 m² / kişi", "200 kişi → ~300 m²", "Sahne, dans pisti ve servis koridoru hariç"],
    ["Tiyatro düzeni oturma", "~0,8 m² / kişi", "300 kişi → ~240 m²", "Sahne ve reji alanı ayrıca planlanır"],
    ["Fuar / stand alanı", "Layout bazlı", "Stand + koridor planına göre", "Yangın çıkışları ve elektrik dağıtımı dahil"],
  ];

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
        <p className="m-0 font-black text-gray-900">Kişi Sayısına Göre Yaklaşık m² İhtiyacı</p>
        <p className="m-0 mt-1 text-sm text-gray-600">
          İlk fikir içindir; kesin ölçü için oturma düzeni ve teknik ekipman planı birlikte hesaplanır.
        </p>
      </div>
      <div role="region" aria-label="Karşılaştırma tablosunu yatay kaydır" tabIndex={0} className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-5 py-3 font-bold text-gray-900">Düzen</th>
              <th className="px-5 py-3 font-bold text-gray-900">Kişi Başı Alan</th>
              <th className="px-5 py-3 font-bold text-gray-900">Örnek Hesap</th>
              <th className="px-5 py-3 font-bold text-gray-900">Not</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-gray-100 last:border-0">
                {row.map((cell) => (
                  <td key={cell} className="whitespace-nowrap px-5 py-4 text-gray-700">
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

function TentGallery() {
  return (
    <section id="cadir-galeri" className="not-prose my-10 scroll-mt-28">
      <div className="mb-5">
        <p className="m-0 text-sm font-black uppercase tracking-wide text-violet-700">
          Çadır kiralama uygulama galerisi
        </p>
        <h2 className="m-0 mt-2 text-2xl font-black text-gray-950">
          Farklı Organizasyonlarda Çadır Seçimi Nasıl Görünür?
        </h2>
        <p className="m-0 mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
          Aşağıdaki örnekler; çadır tipi, ölçü, zemin ve teknik entegrasyon kararlarının sahada
          nasıl uygulandığını gösterir.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {GALLERY_IMAGES.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <div className="relative aspect-video bg-gray-100">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="p-4">
              <span className="block text-sm font-black text-gray-950">{image.title}</span>
              <span className="mt-1 block text-sm leading-relaxed text-gray-600">
                {image.caption}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: ARTICLE_TITLE, url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleJsonLd />

      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{
          src: HERO_IMG,
          alt: ARTICLE_TITLE,
        }}
        pills={["Çadır Kiralama", "Seçim Rehberi", "Teknik Planlama"]}
        title={ARTICLE_TITLE}
        description={metadata.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime={metadata.readTime}
        tocItems={TOC_ITEMS}
        currentSlug={SLUG}
        currentCategory={metadata.category}
        currentKeywords={metadata.keywords}
        primaryLinks={[
          { href: TENT_SERVICE_PATH, label: "Çadır Kiralama", icon: "⛺" },
          { href: TENT_CALC_PATH, label: "Çadır Hesaplama", icon: "📐" },
          { href: CORPORATE_SERVICE_PATH, label: "Kurumsal Organizasyon", icon: "🏢" },
        ]}
        whatsappUrl={WA_URL}
      >
        <p>
          <strong>Çadır kiralama</strong> kararı, yalnızca kaç metrekare tente kurulacağıyla
          verilmez. Etkinliğin türü, katılımcı sayısı, zemin yapısı, rüzgar yükü, teknik ekipman
          entegrasyonu ve kurulum takvimi birlikte değerlendirildiğinde doğru çadır sistemi ortaya
          çıkar. Bu rehberde, teklif almadan önce netleştirmeniz gereken tüm başlıkları adım adım
          topladık.
        </p>

        <TentTypeTable />

        <h2 id="neden-cadir">Organizasyonun Görünmeyen Sigortası: Çadır</h2>
        <p>
          Açık hava organizasyonlarında her şey hazır gibi görünür: sahne ışıkları parlar, ses net,
          LED ekranlar kristal... Ancak bir anda rüzgar çıkar, zemin yumuşar ve o "mükemmel" kurulum
          sallanmaya başlar. İşte o an anlarsınız ki, etkinliğin asıl gizli kahramanı{" "}
          <strong>çadır sistemidir</strong>.
        </p>
        <p>
          Yanlış çadır seçimi sadece konforu değil, tüm organizasyonun güvenliğini riske atar.
          Sahneva olarak yılların saha tecrübesiyle söylüyoruz: <Link href={TENT_SERVICE_PATH}>çadır kiralama</Link>{" "}
          bir tente işi değil; mühendislik, rüzgar yükü hesabı, zemin analizi ve operasyon
          planlamasıdır.
        </p>

        <h2 id="cadir-tipleri">1. Etkinlik Türüne Göre Çadır Tipleri</h2>

        <h3>Kurumsal etkinlikler, lansmanlar ve bayi toplantıları</h3>
        <p>
          Prestij ve teknik güvenlik birlikte düşünülmelidir. Tercih edilen sistem: alüminyum
          konstrüksiyon çerçeve çadırlar (4-6 metre yan yükseklik). Truss sistemleri sorunsuz
          entegre edilir, line array ses sistemleri taşınabilir, dev LED ekran montajı güvenle
          yapılır, klima ve havalandırma kurulabilir.
        </p>
        <p>
          Sahadaki gerçeklik: Bir lansman projesinde 300 m² alanda ağır truss ve 12 metrelik LED
          ekran kurduk. Forklift ile ana kirişler kaldırıldı, zemin eğimi milimetrik ölçüldü, ankraj
          beton bloklarla desteklendi. Tonlarca yük altında tek titreşim yaşanmadı. Marka deneyimini
          bir adım öteye taşımak isteyen projelerde{" "}
          <Link href={DOME_BLOG_PATH}>dome çadır ve 360° mapping kurulumları</Link> da
          değerlendirilebilir.
        </p>

        <GuideImage
          src={HERO_IMG}
          alt="Kurumsal etkinliklerde pagoda çadır kurulumu"
          caption="Kurumsal etkinliklerde pagoda ve çerçeve sistemler, truss ve LED entegrasyonu için idealdir."
        />

        <h3>Düğün, nişan ve özel günler</h3>
        <p>
          Estetik önemlidir; ancak teknik altyapı sağlam değilse o estetik risk haline gelir.
          Tercih edilen sistemler: şeffaf tavanlı (clear-top) çadırlar, yüksek kubbeli yapılar ve
          5-6 metre tavan yüksekliği. Bu sistemler avize, dekor ve ışık askılarına uygundur; hava
          sirkülasyonu sağlar.
        </p>
        <p>
          Güvenlik detayı: Bir düğünde ani fırtınada, önceden yaptığımız zemin sertlik analizi,
          rüzgar yönü hesabı, çapraz gergiler ve beton blok sabitlemeleri sayesinde gece sorunsuz
          geçti.
        </p>

        <GuideImage
          src={IMG_CLEAR_TOP}
          alt="Şeffaf tavanlı düğün çadırı kurulumu"
          caption="Şeffaf tavanlı çadırlar, dekor ve aydınlatma kurulumunda etkileyici bir atmosfer yaratır."
        />

        <h3>Fuar, sergi ve festival alanları</h3>
        <p>
          Geniş alanlar ve yüksek insan trafiği için modüler sistemler şarttır. Tercih edilen:
          yüksek açıklıklı (high-peak) sistemler, geniş modül çadırlar ve 100-1.000 m² arası
          yapılar. Stand yerleşim planı, yangın çıkış koridorları, elektrik dağıtımı ve forklift
          giriş-çıkış alanı kurulumdan önce çizilen teknik planın parçasıdır.
        </p>

        <GuideImage
          src={IMG_WIDE_MODULE}
          alt="Festival ve sergi alanları için geniş modül çadır örneği"
          caption="Yüksek peak ve geniş açıklıklı çadırlar, yoğun insan trafiğini rahat yönetmenizi sağlar."
        />

        <h2 id="kapasite-olcu">2. Kaç Kişi İçin Kaç Metrekare Çadır Gerekir?</h2>
        <p>
          Metrekare hesabı, oturma düzenine göre değişir. Ayakta kokteylde kişi başı yaklaşık 1 m²
          yeterliyken, yuvarlak masalı yemek düzeninde bu değer 1,5 m² seviyesine çıkar. Sahne,
          dans pisti, servis koridoru ve teknik reji alanı bu hesaba ayrıca eklenmelidir.
        </p>

        <CapacityTable />

        <p>
          Yaklaşık alan ihtiyacınızı hızlıca görmek için{" "}
          <Link href={TENT_CALC_PATH}>çadır hesaplama aracı</Link> üzerinden kişi sayısı ve oturma
          düzenine göre ilk m² fikrini alabilirsiniz.
        </p>

        <DecisionBox title="Hızlı karar sorusu">
          Etkinlikte aynı anda kaç kişi bulunacak ve hangi düzende ağırlanacak? Bu iki cevap,
          çadır ölçüsünü belirleyen en pratik başlangıç noktasıdır.
        </DecisionBox>

        <h2 id="zemin-ankraj">3. Zemin Yapısı ve Sabitleme Güvenliğin Temelidir</h2>
        <p>
          Çadır kurulacak alan çim, asfalt, beton veya toprak olabilir; her zemin farklı sabitleme
          yöntemi gerektirir. Toprak ve çim zeminlerde kazıklı ankraj kullanılırken, delinemeyen
          beton ve asfalt zeminlerde beton blok sabitleme uygulanır. Rüzgar yükü hesabı ve zemin
          sertlik analizi, özellikle açık ve rüzgara maruz alanlarda kurulumun olmazsa olmazıdır.
        </p>
        <p>
          Zemin eğimliyse, çadır içi zemin kaplama ve{" "}
          <Link href={PODIUM_SERVICE_PATH}>podyum sistemleriyle</Link> 10-20 cm yükseltilmiş düz bir
          taban oluşturulabilir. Bu hem masa-sandalye stabilitesi hem de yağmur drenajı açısından
          fark yaratır.
        </p>

        <h2 id="teknik-entegrasyon">4. Sahne, LED Ekran ve İklimlendirme Entegrasyonu</h2>
        <p>
          Çadır çoğu zaman tek başına düşünülür; ancak etkinliğin gerçek başarısı çadır, sahne,
          ekran, ses ve ışığın birlikte çalışmasına bağlıdır. Çadır içine kurulacak{" "}
          <Link href={STAGE_SERVICE_PATH}>sahne</Link> ve{" "}
          <Link href={LED_SERVICE_PATH}>LED ekran</Link> sistemleri, tavan yüksekliğini ve taşıyıcı
          yapı ihtiyacını doğrudan etkiler. Aynı şekilde{" "}
          <Link href={SOUND_LIGHT_PATH}>ses ışık sistemleri</Link> için truss, kablo geçişi ve
          teknik masa konumu önceden planlanmalıdır.
        </p>
        <p>
          Kış etkinliklerinde ısıtma, yaz etkinliklerinde klima ve havalandırma kapasitesi çadır
          hacmine göre hesaplanır. Jeneratör konumu, kablo güzergahı ve elektrik dağıtım panosu da
          aynı teknik planın parçasıdır. Tüm bu kalemleri tek planla ilerletmek isteyen kurumlar
          için <Link href={CORPORATE_SERVICE_PATH}>kurumsal organizasyon</Link> hizmetimiz anahtar
          teslim çözüm sunar.
        </p>

        <h2 id="kurulum">5. Profesyonel Çadır Kurulum Süreci</h2>
        <p>"Kurulum ne kadar sürer?" sorusunun cevabı zemine, hava durumuna ve alana bağlıdır.</p>
        <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Teknik Keşif (2-4 Hafta Önce)",
              items: [
                "Alan ölçümü",
                "Zemin analizi (çim, asfalt, toprak)",
                "Rüzgar yönü ve hız değerlendirmesi",
                "Lojistik giriş planlaması",
              ],
            },
            {
              title: "Kurulum Günü Operasyonu",
              items: [
                "Forklift / vinç konumlandırma",
                "Ana taşıyıcı kiriş montajı",
                "Tente gerilimi",
                "Yan panel ve kapı sistemleri",
                "Çift kontrol ankraj",
              ],
            },
            {
              title: "Güvenlik Testi",
              items: [
                "Rüzgar yükü kontrolü",
                "Zemin tutuş testi",
                "Bağlantı noktalarının son kontrolü",
              ],
            },
          ].map((step) => (
            <div key={step.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <h3 className="text-sm font-semibold text-gray-900">{step.title}</h3>
              <ul className="mt-3 space-y-2 text-xs text-gray-600">
                {step.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p>
          Büyük ölçekli işlerde 6-12 kişilik ekip, 1-2 forklift ve 1 tam gün operasyon gerekebilir.
        </p>

        <TentGallery />

        <h2 id="maliyet">6. 2026 Çadır Kiralama Maliyetlerini Etkileyen Faktörler</h2>
        <p>
          Maliyetler; metrekare büyüklüğü, kiralama süresi, mevsim, zemin koşulları, ek ankraj
          ihtiyacı, klima ve iklimlendirme, LED ekran/sahne entegrasyonu, forklift-vinç gereksinimi
          ve İstanbul dışı lojistik kalemlerine göre değişir. Bu nedenle yalnızca "kaç metrekare?"
          sorusuyla alınan fiyatlar çoğu zaman eksik kalır.
        </p>
        <p>
          En doğru fiyat için etkinlik tarihi, il/ilçe, alan ölçüsü, kişi sayısı, oturma düzeni,
          çadır içinde kullanılacak teknik ekipmanlar ve kurulum-söküm saatleri netleştirilmelidir.
        </p>
        <div className="not-prose rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="m-0 font-semibold text-gray-900">Teklif alırken mutlaka sorun:</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>• Teknik keşif yapıldı mı?</li>
            <li>• Rüzgar yükü hesabı var mı?</li>
            <li>• İSG standartları uygulanıyor mu?</li>
            <li>• Sabitleme yöntemi nedir?</li>
          </ul>
        </div>

        <h2 id="risk">7. Sık Yapılan Hatalar: En Büyük Risk Planlama Eksikliği</h2>
        <p>
          Sahada karşılaştığımız sorunların neredeyse tamamı aynı dört hataya dayanır: yetersiz
          sabitleme, yanlış zemin analizi, forklift trafiğinin hesaplanmaması ve yapının aşırı yük
          ile zorlanması. Kişi sayısına tam denk gelen metrekareyle ilerlemek de yaygın bir hatadır;
          servis, sahne ve sirkülasyon alanı her zaman ayrıca hesaplanmalıdır. Profesyonel keşif ve
          kurulum, bu riskleri sıfıra yaklaştırır.
        </p>

        <h2>Teklif Almadan Önce Çadır Kiralama Kontrol Listesi</h2>
        <div className="not-prose my-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <ul className="m-0 space-y-3 text-base leading-relaxed text-gray-800">
            <li>Etkinlik türü: kurumsal, düğün, fuar, festival veya uzun dönem depolama</li>
            <li>Katılımcı sayısı ve oturma düzeni (kokteyl, yemek, tiyatro)</li>
            <li>Alan ölçüsü, zemin türü ve eğim durumu</li>
            <li>Sahne, podyum, LED ekran, ses-ışık entegrasyonu ihtiyacı</li>
            <li>Isıtma, klima veya havalandırma gereksinimi</li>
            <li>Elektrik altyapısı ve jeneratör planı</li>
            <li>Kurulum, etkinlik ve söküm tarihleri</li>
            <li>Şehir ve alan erişimi (forklift/vinç girişi, yükleme alanı)</li>
          </ul>
        </div>

        <h2 id="sonuc">Sonuç: Başarılı Organizasyonun Temeli Güvendir</h2>
        <p>
          Doğru çadır sadece yağmurdan korumaz; markanızın itibarını, misafirlerinizin güvenliğini
          ve emeğinizi taşır. Etkinlik günü herkes sahneye bakarken, arka planda forklift operatörü
          milimetrik manevra yapar, teknik ekip bağlantıları iki kez kontrol eder, rüzgar hesapları
          gözden geçirilir. Ve siz içiniz rahat izlersiniz.
        </p>
        <p>
          Etkinliğiniz için doğru sistemi seçmek ve fiyat almak isterseniz{" "}
          <Link href={TENT_SERVICE_PATH}>çadır kiralama</Link> hizmet sayfamızdaki kapsam, çadır
          tipleri ve kurulum detaylarını inceleyebilir; anahtar teslim projeler için{" "}
          <Link href={CORPORATE_SERVICE_PATH}>kurumsal organizasyon</Link> ekibimizden teklif
          alabilirsiniz.
        </p>

        <section aria-labelledby="faq-heading" className="not-prose mt-12 space-y-3">
          <h2 id="faq-heading" className="text-2xl font-black text-gray-900">
            Çadır Kiralama Hakkında Sık Sorulan Sorular
          </h2>
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-gray-200 bg-white open:border-violet-300 open:ring-2 open:ring-violet-100"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-bold text-gray-900">
                {item.question}
              </summary>
              <p className="m-0 border-t border-gray-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-gray-700">
                {item.answer}
              </p>
            </details>
          ))}
        </section>

        <div className="not-prose mt-12 rounded-3xl bg-gradient-to-br from-gray-900 to-violet-900 p-8 text-white shadow-2xl">
          <h2 className="m-0 text-2xl font-black">Etkinliğiniz için doğru çadırı birlikte seçelim</h2>
          <p className="mb-0 mt-3 text-violet-100">
            Ölçü, zemin, sabitleme, iklimlendirme ve sahne-LED entegrasyonunu tek planla
            netleştirelim.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={TENT_SERVICE_PATH}
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-violet-950 hover:bg-violet-50"
            >
              Çadır Kiralama Hizmetini İncele
            </Link>
            <a
              href={WA_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-800"
            >
              WhatsApp ile Teklif Al
            </a>
          </div>
        </div>

        <BlogRelatedLinks
          services={[
            { href: TENT_SERVICE_PATH, label: "Çadır Kiralama" },
            { href: TENT_CALC_PATH, label: "Çadır Hesaplama Aracı" },
            { href: STAGE_SERVICE_PATH, label: "Sahne Kiralama" },
            { href: CORPORATE_SERVICE_PATH, label: "Kurumsal Organizasyon" },
          ]}
        />
      </BlogLayout>
    </>
  );
}

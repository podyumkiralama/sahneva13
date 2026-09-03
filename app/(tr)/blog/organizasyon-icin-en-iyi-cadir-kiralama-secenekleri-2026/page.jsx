import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { ORGANIZATION_ID } from "@/lib/seo/schemaIds";
import { buildArticleAuthor } from "@/lib/structuredData/articleIdentity";

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
const ARTICLE_TITLE = "Pagoda mı Şeffaf mı? 2026 Çadır Seçim Rehberi";
const META_DESCRIPTION =
  "Pagoda, şeffaf, geniş modül ve dome çadırları görünüm, kapasite ve kullanım amacına göre karşılaştırın; etkinliğiniz için doğru sistemi seçin.";

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
  { href: "#hizli-karsilastirma", label: "Hızlı karşılaştırma" },
  { href: "#pagoda", label: "Pagoda ne zaman seçilir?" },
  { href: "#seffaf", label: "Şeffaf çadır ne zaman seçilir?" },
  { href: "#genis-modul", label: "Geniş modül ne zaman seçilir?" },
  { href: "#kapasite", label: "Kapasiteyi eleme ölçütü" },
  { href: "#saha-kosullari", label: "Seçimi değiştiren saha koşulları" },
  { href: "#karar-listesi", label: "Karar listesi" },
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
        alt: "Pagoda, şeffaf ve modüler çadır seçim rehberi",
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
    "etkinliğe göre çadır seçimi",
    "çadır türleri karşılaştırma",
    "pagoda mı şeffaf çadır mı",
    "pagoda çadır",
    "şeffaf çadır",
    "geniş modül çadır",
    "kurumsal etkinlik çadırı",
    "düğün çadırı seçimi",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva Organizasyon",
  category: "Çadır Kiralama",
  date: PUBLISH_DATE,
  readTime: "8 dk okuma",
  other: {
    "article:published_time": PUBLISH_DATE,
    "article:modified_time": MODIFIED_DATE,
    "article:author": AUTHOR_NAME,
    "article:section": "Çadır Kiralama",
  },
};

const FAQ_ITEMS = [
  {
    question: "Pagoda çadır ile şeffaf çadır arasındaki temel fark nedir?",
    answer:
      "Pagoda çadır, sivri tepe formu ve küçük modülleriyle karşılama, kokteyl ve VIP alanlarında öne çıkar. Şeffaf çadır ise manzara, gün ışığı ve dekorun görünür kalmasının istendiği düğün ve gala projelerinde tercih edilir.",
  },
  {
    question: "Büyük katılımlı etkinliklerde hangi çadır tipi seçilir?",
    answer:
      "Fuar, festival ve büyük kurumsal davetlerde geniş açıklıklı alüminyum çerçeve veya high-peak modüler sistemler tercih edilir. Kesin sistem; kişi sayısı kadar sahne, servis, kaçış koridoru ve teknik alan ihtiyacına göre belirlenir.",
  },
  {
    question: "Dome çadır hangi etkinlikler için uygundur?",
    answer:
      "Dome çadır; ürün lansmanı, 360 derece projection mapping ve deneyim odaklı marka aktivasyonlarında güçlü bir görsel kabuk sunar. Standart davet çadırından farklı olarak içerik ve projeksiyon kurgusuyla birlikte proje bazlı planlanır.",
  },
  {
    question: "Şeffaf çadır her mevsim kullanılabilir mi?",
    answer:
      "Kullanılabilir; ancak şeffaf yüzeylerde yazın güneş yükü, kışın yoğuşma ve ısı kaybı ayrıca değerlendirilmelidir. Gölgeleme, klima, ısıtma ve havalandırma ihtiyacı mevsime göre teklife eklenir.",
  },
  {
    question: "Çadır ölçüsünü seçerken yalnız kişi sayısı yeterli mi?",
    answer:
      "Hayır. Oturma düzeni, sahne, dans pisti, servis koridoru, reji, vestiyer ve kaçış güzergâhları da hesaba katılmalıdır. Kişi sayısı yalnız ilk eleme ölçütüdür.",
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
        author: buildArticleAuthor(AUTHOR_NAME),
        publisher: { "@id": ORGANIZATION_ID },
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        about: [
          { "@type": "Thing", name: "Etkinliğe göre çadır seçimi" },
          { "@type": "Thing", name: "Pagoda ve şeffaf çadır karşılaştırması" },
          { "@type": "Thing", name: "Geniş modül çadır seçimi" },
        ],
        mentions: [
          `${SITE_URL}${TENT_SERVICE_PATH}`,
          `${SITE_URL}${TENT_CALC_PATH}`,
          `${SITE_URL}${STAGE_SERVICE_PATH}`,
          `${SITE_URL}${LED_SERVICE_PATH}`,
          `${SITE_URL}${SOUND_LIGHT_PATH}`,
        ],
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
        pills={["Çadır Kiralama", "Tür Karşılaştırması", "Seçim Rehberi"]}
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
          <strong>Çadır kiralama</strong> araştırmasında ilk soru fiyat değil, hangi sistemin
          etkinliğinize uyduğudur. Pagoda; karşılama alanında güçlü bir siluet oluşturur, şeffaf
          çadır manzarayı ve dekoru görünür bırakır, geniş modül sistem ise kalabalık ve teknik
          prodüksiyon için kesintisiz alan sağlar. Bu rehber, bu seçenekleri aynı karar ölçütleriyle
          karşılaştırır. Kurulum kapsamı ve saha operasyonu için ayrı{" "}
          <Link href={TENT_SERVICE_PATH}>çadır kiralama hizmet sayfamızı</Link> kullanabilirsiniz.
        </p>

        <h2 id="hizli-karsilastirma">Hızlı Karşılaştırma: Hangi Çadır Hangi Etkinliğe Uyar?</h2>
        <p>
          Seçimi görünüm, ölçek ve içeride kurulacak sistemler belirler. Küçük bir VIP karşılama
          alanıyla yüzlerce kişilik gala aynı kabuğa ihtiyaç duymaz. Aşağıdaki tablo seçenekleri ilk
          aşamada elemek içindir; kesin ölçü ve taşıyıcı planı teknik keşifle belirlenir.
        </p>
        <TentTypeTable />
        <DecisionBox title="Tek cümlelik seçim kuralı">
          Görsel vurgu için pagoda, manzara ve dekor için şeffaf çadır, yüksek kapasite ve teknik
          prodüksiyon için geniş modül; sürükleyici marka deneyimi için dome sistemini değerlendirin.
        </DecisionBox>

        <h2 id="pagoda">Pagoda Çadır Ne Zaman Seçilir?</h2>
        <p>
          Pagoda çadırın sivri tepe formu uzaktan kolay fark edilir. Bu nedenle kayıt masası,
          karşılama noktası, VIP lounge, ürün sergileme ve kokteyl alanı gibi küçük-orta ölçekli
          bölümlerde kullanışlıdır. Birden fazla modül yan yana kurularak giriş aksı veya marka
          köyü de oluşturulabilir.
        </p>
        <p>
          Pagoda seçerken yalnız dış görünüşe bakmayın. Kapalı yan panel ihtiyacı, misafir akışı,
          servis kapısı ve modüller arasındaki geçişler baştan çizilmelidir. Büyük sahne, yoğun
          oturma düzeni veya geniş LED ekran gerekiyorsa pagoda yerine alüminyum çerçeve sistem daha
          doğru bir başlangıç olabilir.
        </p>
        <GuideImage
          src={HERO_IMG}
          alt="Kurumsal etkinlikte pagoda çadır seçimi"
          caption="Pagoda modüller; karşılama, kokteyl ve VIP alanlarına belirgin bir giriş silueti kazandırır."
        />

        <h2 id="seffaf">Şeffaf Çadır Ne Zaman Seçilir?</h2>
        <p>
          Şeffaf tavanlı veya şeffaf yan panelli sistemler; düğün, gala ve manzaralı mekânlarda dış
          çevreyi dekorun parçasına dönüştürür. Gündüz doğal ışık, akşam ise içerideki aydınlatma
          kurgusu dışarıdan görünür. Bu özellik, kapalı beyaz tenteye göre daha atmosferik bir sonuç
          verir.
        </p>
        <p>
          Bunun karşılığında iklim kontrolü daha dikkatli planlanır. Yazın güneş yükü ve sera
          etkisi, kışın ısı kaybı ve yoğuşma; gölgeleme, klima, ısıtma ve havalandırma kararını
          değiştirir. Öğlen yapılan bir yaz etkinliğinde tamamen şeffaf tavan yerine şeffaf yan panel
          ile opak tavan kombinasyonu daha dengeli olabilir.
        </p>
        <GuideImage
          src={IMG_CLEAR_TOP}
          alt="Düğün ve gala için şeffaf çadır seçimi"
          caption="Şeffaf sistemler manzarayı korur; mevsim ve günün saati iklimlendirme kararına doğrudan etki eder."
        />

        <h2 id="genis-modul">Geniş Modül ve High-Peak Çadır Ne Zaman Seçilir?</h2>
        <p>
          Fuar, festival, bayi toplantısı, lansman ve büyük yemekli davetlerde öncelik kesintisiz iç
          hacimdir. Alüminyum çerçeve ve geniş açıklıklı modüler sistemler; masa düzeni, sahne,
          servis koridorları ve teknik reji için daha esnek bir yerleşim sunar. İhtiyaç arttıkça
          sistem boyuna modüllerle büyütülebilir.
        </p>
        <p>
          Tavan yüksekliği de seçim ölçütüdür. <Link href={STAGE_SERVICE_PATH}>Sahne</Link>,{" "}
          <Link href={LED_SERVICE_PATH}>LED ekran</Link> ve{" "}
          <Link href={SOUND_LIGHT_PATH}>ses-ışık sistemleri</Link> kurulacaksa, yalnız taban
          metrekaresini değil üst hacmi ve güvenli askı planını da değerlendirin. Dairesel görüntü
          veya projection mapping odaklı bir lansmanda ise klasik geniş modül yerine{" "}
          <Link href={DOME_BLOG_PATH}>dome çadır çözümü</Link> daha güçlü bir deneyim sunabilir.
        </p>
        <GuideImage
          src={IMG_WIDE_MODULE}
          alt="Fuar ve festival için geniş modül çadır seçimi"
          caption="Geniş modül sistemler; kalabalık akışı, sahne ve teknik alanları aynı hacimde planlamayı kolaylaştırır."
        />

        <h2 id="kapasite">Kapasiteyi Bir Eleme Ölçütü Olarak Kullanın</h2>
        <p>
          Kişi sayısı doğru sistemi tek başına seçmez ama uygun olmayan seçenekleri hızlıca eler.
          Ayakta kokteyl ile yuvarlak masa düzeni aynı katılımcı sayısında farklı alan ister; sahne,
          dans pisti, servis ve reji alanları da ayrıca eklenir.
        </p>
        <CapacityTable />
        <p>
          İlk m² aralığını görmek için <Link href={TENT_CALC_PATH}>çadır hesaplama aracını</Link>{" "}
          kullanın. Sonucu kesin proje ölçüsü olarak değil, pagoda modülleriyle mi yoksa geniş
          açıklıklı tek hacimle mi ilerlemeniz gerektiğini gösteren bir başlangıç verisi olarak
          değerlendirin.
        </p>

        <TentGallery />

        <h2 id="saha-kosullari">Aynı Etkinlikte Seçimi Değiştiren Saha Koşulları</h2>
        <p>
          Fotoğrafta beğendiğiniz sistem her alana aynı şekilde uygulanamaz. Çim ve toprak zemin
          kazıklı ankraja izin verirken, delinemeyen beton veya asfalt yüzeylerde balast planı
          gerekir. Eğimli alanda düz bir kullanım yüzeyi için{" "}
          <Link href={PODIUM_SERVICE_PATH}>modüler platform</Link> eklenmesi gerekebilir.
        </p>
        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Rüzgâr ve açık cephe",
              text: "Sahil, tepe veya açık arazide rüzgâr maruziyeti; yan panel kullanımını, ankrajı ve uygun sistem ölçüsünü değiştirir.",
            },
            {
              title: "Mevsim ve günün saati",
              text: "Şeffaf yüzey, gölgeleme, ısıtma, klima ve havalandırma kararı hava koşullarıyla birlikte verilmelidir.",
            },
            {
              title: "Yükleme erişimi",
              text: "Forklift veya vinç girişinin sınırlı olduğu alanlarda büyük modül yerine daha küçük parçalarla kurulabilen çözüm gerekebilir.",
            },
            {
              title: "İçerideki prodüksiyon",
              text: "Sahne yüksekliği, LED ekran ölçüsü, truss ve reji alanı çadırın taban ölçüsünü ve tavan yüksekliğini etkiler.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="m-0 text-base font-black text-gray-900">{item.title}</h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
        <p>
          Ankraj hesabı, taşıyıcı detaylar, kurulum-söküm takvimi ve fiyat kapsamı bu seçim
          rehberinin değil, teknik keşif ve teklif sürecinin konusudur. Bu ayrıntıları{" "}
          <Link href={TENT_SERVICE_PATH}>çadır kiralama hizmet kapsamımızda</Link> bulabilirsiniz.
        </p>

        <h2 id="karar-listesi">Tekliften Önce Çadır Türünü Netleştiren 7 Cevap</h2>
        <div className="not-prose my-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <ul className="m-0 space-y-3 text-base leading-relaxed text-gray-800">
            <li>Etkinliğin ana formatı: karşılama, kokteyl, yemek, fuar, festival veya lansman</li>
            <li>İstenen görünüm: belirgin pagoda silueti, şeffaf manzara veya geniş tek hacim</li>
            <li>Katılımcı sayısı ve oturma düzeni</li>
            <li>Sahne, LED ekran, dekor ve teknik reji için ayrılacak alan</li>
            <li>Mekânın zemin türü, eğimi ve rüzgâra açıklığı</li>
            <li>Etkinlik mevsimi, başlangıç saati ve iklimlendirme ihtiyacı</li>
            <li>Kurulum alanına forklift/vinç ve yükleme aracının erişimi</li>
          </ul>
        </div>
        <p>
          Bu cevaplar hazır olduğunda sistem seçimi hızlanır ve farklı tedarikçilerden gelen
          teklifleri aynı kapsam üzerinden karşılaştırmak kolaylaşır. Çadır, sahne ve teknik
          prodüksiyonun birlikte planlandığı projeler için{" "}
          <Link href={CORPORATE_SERVICE_PATH}>kurumsal organizasyon</Link> ekibimizle tek brief
          üzerinden ilerleyebilirsiniz.
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

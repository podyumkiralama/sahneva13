import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(
  /\/$/,
  ""
);

const SLUG = "podyum-kiralama-nasil-secilir";
const BLOG_PATH = `/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const PUBLISH_DATE = "2026-04-21T09:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile(
  "app/(tr)/blog/podyum-kiralama-nasil-secilir/page.jsx",
  "2026-04-21T09:00:00+03:00"
);
const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const ARTICLE_TITLE = "Podyum Kiralama Nasıl Seçilir?";
const META_DESCRIPTION =
  "Podyum kiralama için doğru ölçü, yükseklik, zemin, güvenlik ve fiyat kriterlerini öğrenin; etkinliğiniz için uygun platformu seçin.";

const PODIUM_SERVICE_PATH = "/podyum-kiralama";
const PODIUM_PRICE_PATH = "/podyum-kiralama-fiyatlari";
const STAGE_SERVICE_PATH = "/sahne-kiralama";
const LED_SERVICE_PATH = "/led-ekran-kiralama";
const SOUND_LIGHT_PATH = "/ses-isik-sistemleri";
const TENT_SERVICE_PATH = "/cadir-kiralama";
const CORPORATE_SERVICE_PATH = "/kurumsal-organizasyon";

const HERO_IMG = "/img/blog/podyum-kiralama-nasil-secilir-hero.webp";
const IMG_MEASURE = "/img/blog/kurumsal-sahne-podyum-yerlesim.webp";
const IMG_DETAIL = "/img/blog/kurumsal-etkinlik-podyum-detay.webp";
const IMG_STAGE = "/img/blog/podyum-sahne-profesyonel-etkinlik.webp";

const GALLERY_IMAGES = [
  {
    src: "/img/podyum/25.webp",
    alt: "Kapalı alanda beyaz yüzeyli profesyonel podyum kiralama kurulumu",
    title: "Kapalı Alan Sahnesi",
    caption: "Kurumsal sunum ve protokol etkinliklerinde temiz yüzey, doğru yükseklik ve arka plan planı birlikte düşünülür.",
  },
  {
    src: "/img/podyum/28.webp",
    alt: "Lansman ve defile için parlak yüzeyli podyum kiralama örneği",
    title: "Lansman ve Runway",
    caption: "Marka lansmanı ya da defile formatında podyum yüzeyi, ışık yansıması ve yürüyüş aksı kararın merkezindedir.",
  },
  {
    src: "/img/podyum/31.webp",
    alt: "Açık alanda kademeli modüler podyum kiralama uygulaması",
    title: "Açık Alan Kademesi",
    caption: "Dış mekan kurulumlarında zemin eğimi, dengeleme ve izleyici görüş açısı podyum ölçüsünü doğrudan etkiler.",
  },
  {
    src: "/img/podyum/37.webp",
    alt: "Bahçe etkinliği için siyah kaplamalı modüler podyum kiralama",
    title: "Siyah Kaplama Podyum",
    caption: "Siyah yüzey, gala, kokteyl ve sahne performanslarında daha sade ve teknik bir görünüm sağlar.",
  },
  {
    src: "/img/podyum/39.webp",
    alt: "Podyum kiralama öncesi panel, ayak ve yüzey kurulum detayı",
    title: "Kurulum Detayı",
    caption: "Panel birleşimleri, ayak yüksekliği ve yüzey dengesi etkinlik başlamadan önce kontrol edilmelidir.",
  },
];

const WA_URL =
  "https://wa.me/905453048671?text=" +
  encodeURIComponent(
    "Merhaba, etkinliğim için doğru podyum ölçüsü, yükseklik ve kurulum planı hakkında teklif almak istiyorum."
  );

export const metadata = {
  title: ARTICLE_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: BLOG_URL,
    languages: {
      "tr-TR": BLOG_URL,
      "x-default": BLOG_URL,
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
        alt: "Podyum kiralama seçimi için ölçü, yükseklik ve güvenlik rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${ARTICLE_TITLE} | Sahneva`,
    description: META_DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMG}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  keywords: [
    "podyum kiralama",
    "podyum kiralama nasıl seçilir",
    "modüler podyum kiralama",
    "podyum ölçüsü",
    "podyum yüksekliği",
    "podyum kiralama fiyatları",
    "sahne podyum kiralama",
    "etkinlik podyumu",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva Organizasyon",
  category: "Podyum Kiralama",
  date: PUBLISH_DATE,
  readTime: "8 dk okuma",
  other: {
    "article:published_time": PUBLISH_DATE,
    "article:modified_time": MODIFIED_DATE,
    "article:author": AUTHOR_NAME,
    "article:section": "Podyum Kiralama",
  },
};

const FAQ_ITEMS = [
  {
    question: "Podyum kiralama seçerken ilk neye bakılmalı?",
    answer:
      "İlk olarak etkinlik türü, katılımcı sayısı, sahne üzerinde bulunacak kişi ve ekipman sayısı, alan ölçüsü ve zemin yapısı netleştirilmelidir. Bu bilgiler doğru ölçü ve yükseklik seçimini belirler.",
  },
  {
    question: "Podyum yüksekliği nasıl belirlenir?",
    answer:
      "Küçük toplantı ve lansmanlarda 40-60 cm, kurumsal etkinliklerde 60-80 cm, konser ve kalabalık açık alanlarda 100 cm ve üzeri yükseklikler değerlendirilebilir. Yükseklik arttıkça merdiven, korkuluk ve sabitleme ihtiyacı da artar.",
  },
  {
    question: "Podyum kiralama fiyatları neden değişir?",
    answer:
      "Fiyat; metrekare, yükseklik, panel tipi, halı veya skört kaplama, merdiven-rampa ihtiyacı, kurulum süresi, şehir ve nakliye koşullarına göre değişir.",
  },
  {
    question: "Podyum LED ekran ve ses sistemiyle birlikte kiralanabilir mi?",
    answer:
      "Evet. Podyum kiralama; LED ekran, ses-ışık sistemi, truss ve sahne çözümleriyle birlikte planlanabilir. Tek planla ilerlemek kurulum süresini ve saha risklerini azaltır.",
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
          { "@type": "Service", name: "Podyum Kiralama", url: `${SITE_URL}${PODIUM_SERVICE_PATH}` },
          { "@type": "Service", name: "Sahne Kiralama", url: `${SITE_URL}${STAGE_SERVICE_PATH}` },
        ],
        mentions: [
          `${SITE_URL}${PODIUM_PRICE_PATH}`,
          `${SITE_URL}${LED_SERVICE_PATH}`,
          `${SITE_URL}${SOUND_LIGHT_PATH}`,
          `${SITE_URL}${TENT_SERVICE_PATH}`,
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
    <div className="not-prose rounded-2xl border border-blue-100 bg-blue-50 p-5">
      <p className="m-0 text-base font-black text-blue-950">{title}</p>
      <div className="mt-2 text-sm leading-relaxed text-blue-900">{children}</div>
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

function PodyumGallery() {
  return (
    <section id="podyum-galeri" className="not-prose my-10 scroll-mt-28">
      <div className="mb-5">
        <p className="m-0 text-sm font-black uppercase tracking-wide text-blue-700">
          Podyum kiralama uygulama galerisi
        </p>
        <h2 className="m-0 mt-2 text-2xl font-black text-gray-950">
          Farklı Etkinliklerde Podyum Seçimi Nasıl Görünür?
        </h2>
        <p className="m-0 mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
          Aşağıdaki örnekler, podyum kiralama kararında yüzey kaplaması, yükseklik, zemin
          dengesi ve kullanım senaryosunun nasıl değiştiğini gösterir.
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

function SelectionTable() {
  const rows = [
    ["Konuşma / Sunum", "12-24 m²", "40-60 cm", "Merdiven, halı, skört"],
    ["Kurumsal lansman", "24-48 m²", "60-80 cm", "LED ekran, marka kaplama"],
    ["Mezuniyet / Tören", "48 m² ve üzeri", "80-100 cm", "Geniş merdiven, korkuluk"],
    ["Konser / Festival", "Proje bazlı", "100 cm ve üzeri", "Sabitleme, truss, ses-ışık"],
    ["Çadır içi zemin", "Alan planına göre", "10-20 cm", "Halı kaplama, masa-sandalye dengesi"],
  ];

  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
        <p className="m-0 font-black text-gray-900">Podyum Seçimi Hızlı Karar Tablosu</p>
        <p className="m-0 mt-1 text-sm text-gray-600">
          Ölçüler örnektir; net plan için alan keşfi ve kullanım amacı birlikte değerlendirilmelidir.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-5 py-3 font-bold text-gray-900">Kullanım Amacı</th>
              <th className="px-5 py-3 font-bold text-gray-900">Önerilen Alan</th>
              <th className="px-5 py-3 font-bold text-gray-900">Yükseklik</th>
              <th className="px-5 py-3 font-bold text-gray-900">Ek İhtiyaç</th>
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
        pills={["Podyum Kiralama", "Seçim Rehberi", "Teknik Planlama"]}
        title={ARTICLE_TITLE}
        description={metadata.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime={metadata.readTime}
        currentSlug={SLUG}
        currentCategory={metadata.category}
        currentKeywords={metadata.keywords}
        primaryLinks={[
          { href: PODIUM_SERVICE_PATH, label: "Podyum Kiralama", icon: "🧱" },
          { href: PODIUM_PRICE_PATH, label: "Podyum Fiyatları", icon: "₺" },
          { href: STAGE_SERVICE_PATH, label: "Sahne Kiralama", icon: "🎭" },
        ]}
        whatsappUrl={WA_URL}
      >
        <p>
          <strong>Podyum kiralama</strong> kararı, yalnızca kaç metrekare platform kurulacağıyla
          verilmez. Etkinliğin türü, katılımcı sayısı, sahne üzerinde kullanılacak ekipmanlar,
          alanın zemin durumu, kurulum süresi ve güvenlik beklentisi birlikte değerlendirildiğinde
          doğru podyum sistemi ortaya çıkar.
        </p>

        <p>
          Sahneva olarak podyum seçimini bir ürün listesi gibi değil, etkinlik mühendisliğinin
          bir parçası olarak ele alıyoruz. Bu rehberde, teklif almadan önce netleştirmeniz gereken
          başlıkları ve <Link href={PODIUM_SERVICE_PATH}>podyum kiralama</Link> sürecinde doğru
          karar vermenizi sağlayacak teknik kriterleri adım adım özetledik.
        </p>

        <SelectionTable />

        <h2>1. Etkinliğin Amacı Podyum Ölçüsünü Belirler</h2>
        <p>
          Bir konuşmacı platformu ile konser sahnesi aynı podyum mantığıyla planlanamaz. Konferans
          veya ürün lansmanı gibi etkinliklerde konuşmacı, kürsü, sandalye ve LED ekran konumu
          hesaba katılırken; konser veya festivalde sanatçı trafiği, backline ekipmanları, monitörler
          ve teknik ekip hareket alanı dikkate alınmalıdır.
        </p>

        <DecisionBox title="Hızlı karar sorusu">
          Podyum üzerinde aynı anda kaç kişi olacak ve hangi ekipmanlar bulunacak? Bu iki cevap,
          metrekare ihtiyacını belirleyen en pratik başlangıç noktasıdır.
        </DecisionBox>

        <GuideImage
          src={IMG_MEASURE}
          alt="Kurumsal etkinlikte podyum ölçüsü ve yerleşim planı"
          caption="Podyum ölçüsü, yalnızca sahne alanını değil, izleyici görüş açısını ve teknik ekip yerleşimini de etkiler."
        />

        <h2>2. Yükseklik Seçimi Görünürlük ve Güvenlik Dengesidir</h2>
        <p>
          Podyum yüksekliği arttıkça görünürlük güçlenir; ancak merdiven, korkuluk, sabitleme ve
          erişim planı daha kritik hale gelir. Küçük toplantılarda 40-60 cm yüksekliğindeki bir
          platform yeterliyken, kalabalık açık alan etkinliklerinde 100 cm ve üzeri çözümler gündeme
          gelebilir. 150 cm gibi yüksek kurulumlarda bağlantı aparatları ve güvenlik önlemleri ayrıca
          değerlendirilmelidir.
        </p>

        <p>
          Eğer etkinlikte sahneye sık giriş-çıkış olacaksa, merdiven konumu yalnızca estetik değil
          operasyonel bir karardır. Kurumsal etkinliklerde geniş ve erişilebilir merdivenler avantaj
          sağlar; konser ve miting gibi kontrollü geçiş gerektiren yapılarda ise merdiven sayısı
          sınırlandırılmalıdır.
        </p>

        <h2>3. Zemin Yapısı Podyumun Stabilitesini Doğrudan Etkiler</h2>
        <p>
          Podyum kurulacak alan düz, eğimli, parke, beton, çim veya toprak olabilir. Her zemin farklı
          dengeleme ihtiyacı doğurur. Özellikle açık alanlarda zemin eğimi ve yük dağılımı önceden
          kontrol edilmelidir. Bu yüzden profesyonel <Link href={STAGE_SERVICE_PATH}>sahne kiralama</Link>
          ve podyum planlarında teknik keşif yalnızca formalite değil, güvenli kurulumun temelidir.
        </p>

        <GuideImage
          src={IMG_DETAIL}
          alt="Podyum kiralama için panel, yükseklik ve yüzey detayları"
          caption="Panel tipi, ayak yüksekliği ve yüzey kaplaması podyumun kullanım amacına göre seçilmelidir."
        />

        <h2>4. Yüzey Kaplaması Etkinlik Algısını Değiştirir</h2>
        <p>
          Aynı podyum sistemi, yüzey kaplamasına göre bambaşka bir algı oluşturabilir. Halı kaplama,
          kurumsal ve protokol etkinliklerinde temiz bir görünüm sağlar. Siyah yüzey konser ve sahne
          performanslarında daha teknik bir algı verir. Beyaz halı veya özel kaplama ise düğün,
          nişan ve marka lansmanlarında daha şık bir atmosfer oluşturabilir.
        </p>

        <p>
          Podyum ön yüzünde skört, branda veya marka giydirme kullanılacaksa bu ihtiyaç teklif
          aşamasında belirtilmelidir. Böylece sadece platform değil, sahnenin fotoğraf ve video
          kayıtlarında nasıl görüneceği de planlanmış olur.
        </p>

        <h2>5. Podyum Kiralama Fiyatları Hangi Kalemlere Göre Değişir?</h2>
        <p>
          <Link href={PODIUM_PRICE_PATH}>Podyum kiralama fiyatları</Link>; platform metrekare hesabı,
          yükseklik, kaplama, merdiven veya rampa ihtiyacı, skört, nakliye, kurulum süresi ve şehir
          dışı operasyon koşullarına göre değişir. Bu nedenle yalnızca "kaç metrekare?" sorusuyla
          alınan fiyatlar çoğu zaman eksik kalır.
        </p>

        <p>
          En doğru fiyat için etkinlik tarihi, il/ilçe, kurulum alanı, istenen yükseklik, podyum
          üzerinde bulunacak ekipmanlar ve kurulum-söküm saatleri netleştirilmelidir. Bu bilgiler
          paylaşıldığında hem gereksiz maliyetler azalır hem de kritik teknik kalemler gözden kaçmaz.
        </p>

        <PodyumGallery />

        <h2>6. LED Ekran, Ses ve Işıkla Birlikte Planlamak Neden Önemli?</h2>
        <p>
          Podyum kiralama çoğu zaman tek başına düşünülür; ancak etkinliğin gerçek başarısı sahne,
          ekran, ses ve ışığın birlikte çalışmasına bağlıdır. Podyumun arkasına kurulacak{" "}
          <Link href={LED_SERVICE_PATH}>LED ekran kiralama</Link> sistemi, sahne derinliğini ve
          taşıyıcı yapı ihtiyacını etkileyebilir. Aynı şekilde <Link href={SOUND_LIGHT_PATH}>ses ışık sistemleri</Link>
          için truss, kablo geçişi ve teknik masa konumu önceden planlanmalıdır.
        </p>

        <GuideImage
          src={IMG_STAGE}
          alt="Profesyonel podyum, sahne, LED ekran ve ışık entegrasyonu"
          caption="Podyum, LED ekran ve ses-ışık sistemi tek teknik plan içinde ele alındığında etkinlik günü daha kontrollü ilerler."
        />

        <h2>7. Açık Alan ve Çadır İçi Podyumlarda Ek Kontroller</h2>
        <p>
          Açık alan etkinliklerinde hava koşulları, rüzgar, zemin eğimi ve enerji altyapısı ayrıca
          değerlendirilmelidir. Çadır içinde kullanılacak podyumlarda ise 10-20 cm zemin yükseltme,
          masa-sandalye stabilitesi ve halı kaplama konforu öne çıkar. Bu tip projelerde{" "}
          <Link href={TENT_SERVICE_PATH}>çadır kiralama</Link> ve podyum planını aynı anda yapmak
          kurulum süresini kısaltır.
        </p>

        <h2>Teklif Almadan Önce Podyum Kiralama Kontrol Listesi</h2>
        <div className="not-prose my-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <ul className="m-0 space-y-3 text-base leading-relaxed text-gray-800">
            <li>Etkinlik türü: kurumsal, düğün, konser, festival, tören veya çadır içi kullanım</li>
            <li>Katılımcı sayısı ve izleyici yerleşimi</li>
            <li>Podyum üzerinde bulunacak kişi ve ekipman sayısı</li>
            <li>İstenen metrekare, yükseklik ve yüzey kaplaması</li>
            <li>Zemin türü, kat bilgisi, yükleme alanı ve taşıma mesafesi</li>
            <li>Merdiven, rampa, korkuluk, skört veya marka kaplama ihtiyacı</li>
            <li>LED ekran, ses-ışık, truss veya çadır entegrasyonu</li>
            <li>Kurulum, prova, etkinlik ve söküm saatleri</li>
          </ul>
        </div>

        <h2>Sonuç: Doğru Podyum, Doğru Brief ile Seçilir</h2>
        <p>
          Podyum kiralama kararında en doğru sonuç, etkinlik ihtiyacını teknik detaylarla birlikte
          anlatan net bir brief ile alınır. Ölçü, yükseklik, zemin, ekipman ve akış bilgileri baştan
          paylaşıldığında, hem fiyat daha doğru hesaplanır hem de etkinlik günü sürpriz riskler azalır.
        </p>

        <p>
          Etkinliğiniz için doğru podyum ölçüsünü ve teknik kurulum planını netleştirmek istiyorsanız,
          Sahneva'nın <Link href={PODIUM_SERVICE_PATH}>podyum kiralama</Link> sayfasından hizmet
          detaylarını inceleyebilir veya <Link href={CORPORATE_SERVICE_PATH}>kurumsal organizasyon</Link>
          ihtiyaçlarınız için teklif alabilirsiniz.
        </p>

        <section aria-labelledby="faq-heading" className="not-prose mt-12 space-y-3">
          <h2 id="faq-heading" className="text-2xl font-black text-gray-900">
            Podyum Kiralama Hakkında Sık Sorulan Sorular
          </h2>
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-gray-200 bg-white open:border-blue-300 open:ring-2 open:ring-blue-100"
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

        <div className="not-prose mt-12 rounded-3xl bg-gradient-to-br from-gray-900 to-blue-900 p-8 text-white shadow-2xl">
          <h2 className="m-0 text-2xl font-black">Etkinliğiniz için doğru podyumu birlikte seçelim</h2>
          <p className="mb-0 mt-3 text-blue-100">
            Ölçü, yükseklik, kaplama, LED ekran ve ses-ışık entegrasyonunu tek planla netleştirelim.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={PODIUM_SERVICE_PATH}
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-950 hover:bg-blue-50"
            >
              Podyum Kiralama Hizmetini İncele
            </Link>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-800"
            >
              WhatsApp ile Teklif Al
            </a>
          </div>
        </div>

        <BlogRelatedLinks
          services={[
            { href: PODIUM_SERVICE_PATH, label: "Podyum Kiralama" },
            { href: PODIUM_PRICE_PATH, label: "Podyum Kiralama Fiyatları" },
            { href: STAGE_SERVICE_PATH, label: "Sahne Kiralama" },
            { href: LED_SERVICE_PATH, label: "LED Ekran Kiralama" },
          ]}
        />
      </BlogLayout>
    </>
  );
}

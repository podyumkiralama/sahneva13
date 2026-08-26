import Image from "next/image";
import Link from "next/link";

import BlogLayout from "@/components/blog/BlogLayout";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { CONTENT_CLUSTERS } from "@/lib/seo/contentClusters";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(
  /\/$/,
  ""
);
const SLUG = "etkinlik-cadiri-kurulum-guvenligi";
const BLOG_PATH = `/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const PUBLISH_DATE = "2026-08-26T09:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile(
  "app/(tr)/blog/etkinlik-cadiri-kurulum-guvenligi/page.jsx",
  PUBLISH_DATE
);

const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const TITLE = "Etkinlik Çadırı Kurulum Güvenliği";
const H1 = "Etkinlik Çadırı Kurulumunda Güvenlik";
const DESCRIPTION =
  "Etkinlik çadırı kurulumunda zemin, ankraj, balast, rüzgâr, yağmur, drenaj ve saha erişimini teklif öncesinde kontrol etmek için alıcı rehberi.";

const TENT_SERVICE_PATH = "/cadir-kiralama";
const TENT_CALC_PATH = "/cadir-hesaplama";
const TENT_FLOOR_GLOSSARY_PATH = "/sozluk/cadir-zemini";
const TENT_SELECTION_GUIDE_PATH =
  "/blog/organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026";
const PODIUM_SERVICE_PATH = "/podyum-kiralama";

const HERO_IMG = "/img/cadir/buyuk-olcekli-cadir-kurulumu.webp";
const INSTALLATION_IMG = "/img/cadir/sahneva-cadir-kurulumu.webp";
const VENUE_IMG = "/img/cadir/cadir-liman-etkinlik-alani.webp";
const FIELD_IMG = "/img/cadir/cadir-saha-1.webp";
const INTERIOR_IMG = "/img/cadir/cadir-saha-5.webp";

const WA_URL =
  "https://wa.me/905453048671?text=" +
  encodeURIComponent(
    "Merhaba, etkinlik çadırı için zemin, ankraj ve hava koşullarını içeren teknik keşif planı hazırlamak istiyorum."
  );

const TOC_ITEMS = [
  { href: "#ilk-bilgiler", label: "Güvenli kurulumun ilk bilgileri" },
  { href: "#zemin-ankraj", label: "Zemin, ankraj ve balast" },
  { href: "#ruzgar", label: "Rüzgâr ve açık cepheler" },
  { href: "#yagmur-drenaj", label: "Yağmur ve drenaj" },
  { href: "#kurulum-lojistigi", label: "Kurulum lojistiği" },
  { href: "#ic-yerlesim", label: "İç yerleşim ve geçişler" },
  { href: "#kontrol-listesi", label: "Teknik keşif kontrol listesi" },
  { href: "#sss", label: "Sık sorulan sorular" },
];

const CORNERSTONE_LINKS = [
  { href: TENT_SERVICE_PATH, label: "Çadır Kiralama" },
  { href: TENT_CALC_PATH, label: "Çadır Hesaplama Aracı" },
  { href: TENT_SELECTION_GUIDE_PATH, label: "Çadır Seçim Rehberi" },
  { href: TENT_FLOOR_GLOSSARY_PATH, label: "Çadır Zemini Sözlüğü" },
];

const DISCOVERY_CHECKLIST = [
  "Etkinlik tarihi, kullanım saatleri ve kurulum-söküm için ayrılan zaman",
  "Alan ölçüleri, eğim, kot farkı ve çadırın yerleşeceği kesin sınırlar",
  "Zemin türü: çim, sıkıştırılmış toprak, beton, asfalt veya kaplamalı yüzey",
  "Zemine müdahale izni ve delinemeyen yüzeylerde balast için ayrılabilecek alan",
  "Sahanın rüzgâra açıklığı, çevredeki yapılar ve açık bırakılması istenen cepheler",
  "Yağmur suyunun doğal akış yönü, düşük kotlar ve mevcut drenaj noktaları",
  "Forklift, vinç, kamyon ve ekip araçları için giriş ile manevra imkânı",
  "Sahne, LED ekran, ses-ışık, catering, klima ve jeneratör yerleşimleri",
  "Misafir girişleri, servis koridorları ve kesintisiz bırakılacak geçiş aksları",
  "Mekân yönetiminin çalışma saatleri, saha kuralları ve gerekli onayları",
];

const FAQ_ITEMS = [
  {
    question: "Etkinlik çadırı her zemine kurulabilir mi?",
    answer:
      "Birçok zeminde çözüm üretilebilir; ancak sabitleme yöntemi aynı değildir. Çim veya uygun toprakta ankraj kullanılabilirken, delinemeyen beton ve asfalt yüzeylerde proje verilerine göre balastlı çözüm gerekebilir. Zemin türü ve müdahale izni tekliften önce doğrulanmalıdır.",
  },
  {
    question: "Beton zeminde çadır nasıl sabitlenir?",
    answer:
      "Zemin delinemiyorsa taşıyıcı sistem, çadır ölçüsü, saha koşulları ve üretici verileri dikkate alınarak balastlı sabitleme planlanır. Balastın türü, miktarı ve yerleşimi fotoğrafa bakarak değil, proje bazında teknik ekip tarafından belirlenmelidir.",
  },
  {
    question: "Rüzgârlı havada çadır kurulabilir mi?",
    answer:
      "Karar; çadır sisteminin belgeleri, kurulum biçimi, sahanın rüzgâra açıklığı ve güncel hava koşulları birlikte değerlendirilerek verilir. Tek bir genel rüzgâr değeri bütün çadırlar ve sahalar için güvenli sınır olarak kullanılamaz; izleme ve müdahale planı kurulumdan önce netleşmelidir.",
  },
  {
    question: "Yağmurda etkinlik çadırına su girer mi?",
    answer:
      "Doğru kurulum yalnız üst örtüye dayanmaz. Tente gerginliği, birleşim noktaları, kapı eşikleri, zemin kotu, çatıdan inen suyun yönü ve saha drenajı birlikte planlanmalıdır. Düşük kotta veya su akış hattında kalan alanlar kurulumdan önce tespit edilmelidir.",
  },
  {
    question: "Çadır zemini için modüler platform gerekir mi?",
    answer:
      "Eğim, çamur riski, kablo geçişleri veya düzgün bir kullanım yüzeyi ihtiyacı varsa modüler platform yararlı olabilir. Platform kararı; kişi sayısı, masa düzeni, sahne yükleri ve giriş kotlarıyla birlikte verilmelidir.",
  },
  {
    question: "Çadır teklifi istemeden önce hangi bilgileri göndermeliyim?",
    answer:
      "Tarih, şehir, kişi sayısı, kullanım düzeni, yaklaşık ölçü, zemin fotoğrafları, alan videosu, kurulum saatleri, araç erişimi ve içeride kurulacak teknik ekipmanlar iyi bir başlangıç briefi oluşturur. Bu bilgiler keşif ihtiyacını ve teklif kalemlerini daha erken netleştirir.",
  },
];

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: BLOG_URL,
    languages: {
      "tr-TR": BLOG_URL,
      "x-default": BLOG_URL,
    },
  },
  image: HERO_IMG,
  category: "Çadır Kiralama",
  readTime: "9-11 dk okuma",
  keywords: [
    "etkinlik çadırı kurulum güvenliği",
    "çadır ankrajı",
    "beton zemine çadır kurulumu",
    "çadır balastı",
    "rüzgârda çadır güvenliği",
    "çadır yağmur drenajı",
    "açık hava etkinlik çadırı",
    "çadır teknik keşfi",
  ],
  openGraph: {
    title: `${TITLE} | Sahneva`,
    description: DESCRIPTION,
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${HERO_IMG}`,
        width: 1536,
        height: 1024,
        alt: "Büyük ölçekli etkinlik çadırında güvenli taşıyıcı sistem kurulumu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Sahneva`,
    description: DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMG}`],
  },
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva Organizasyon",
  robots: AI_PREVIEW_ROBOTS,
  other: {
    "article:published_time": PUBLISH_DATE,
    "article:modified_time": MODIFIED_DATE,
    "article:author": AUTHOR_NAME,
    "article:section": "Çadır Kiralama",
  },
};

function ArticleJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BLOG_URL}#blogposting`,
        headline: "Etkinlik Çadırı Kurulumunda Güvenlik: Zemin, Ankraj, Rüzgâr ve Yağmur",
        description: DESCRIPTION,
        image: [
          `${SITE_URL}${HERO_IMG}`,
          `${SITE_URL}${INSTALLATION_IMG}`,
          `${SITE_URL}${VENUE_IMG}`,
        ],
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        inLanguage: "tr-TR",
        author: {
          "@type": "Organization",
          name: AUTHOR_NAME,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#org`,
          name: "Sahneva Organizasyon",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/img/logo.webp`,
          },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/blog#blog` },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Etkinlik organizatörleri, kurumsal satın alma ekipleri ve ajanslar",
        },
        about: [
          { "@type": "Thing", name: "Etkinlik çadırı kurulum güvenliği" },
          { "@type": "Thing", name: "Zemin, ankraj ve balast planı" },
          { "@type": "Thing", name: "Rüzgâr ve yağmur risk planlaması" },
          { "@type": "Service", "@id": `${SITE_URL}${TENT_SERVICE_PATH}#service` },
        ],
        mentions: [
          { "@type": "WebPage", "@id": `${SITE_URL}${TENT_SERVICE_PATH}` },
          { "@type": "WebPage", "@id": `${SITE_URL}${TENT_CALC_PATH}` },
          { "@type": "WebPage", "@id": `${SITE_URL}${TENT_FLOOR_GLOSSARY_PATH}` },
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

function GuideImage({ src, alt, caption, position = "center" }) {
  return (
    <figure className="not-prose my-10">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          sizes="(max-width: 768px) 100vw, 1100px"
          className={`aspect-[16/9] w-full object-cover ${
            position === "top" ? "object-top" : "object-center"
          }`}
        />
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-slate-500">{caption}</figcaption>
    </figure>
  );
}

function ShortAnswer() {
  return (
    <div className="geo-answer not-prose my-8 rounded-3xl border border-violet-100 bg-violet-50 p-6 md:p-8">
      <p className="m-0 text-sm font-black uppercase tracking-[0.18em] text-violet-700">
        Kısa cevap
      </p>
      <p className="mt-3 text-lg leading-relaxed text-slate-800">
        Güvenli etkinlik çadırı kurulumu, yalnız doğru çadırı seçmek değildir. Zemin ve sabitleme
        yöntemi, sahanın rüzgâra açıklığı, yağmur suyunun akış yönü, kurulum araçlarının erişimi ve
        içerideki sahne-teknik yerleşim aynı keşif planında değerlendirilmelidir. Kesin ankraj veya
        balast kararı da kullanılan sistemin teknik verileri ve sahaya özgü koşullar üzerinden
        yetkin ekip tarafından verilmelidir.
      </p>
    </div>
  );
}

function ComparisonTable() {
  const rows = [
    {
      surface: "Çim veya uygun toprak",
      approach: "Sistem verilerine ve zemin uygunluğuna göre ankraj",
      question: "Kazı, hat veya sulama altyapısı var mı; zemine müdahale izni veriliyor mu?",
    },
    {
      surface: "Beton veya asfalt",
      approach: "Delme iznine göre mekanik çözüm ya da proje bazlı balast",
      question: "Yüzey delinebilir mi; balast ve güvenlik mesafesi için yeterli alan var mı?",
    },
    {
      surface: "Eğimli veya bozuk zemin",
      approach: "Kotlandırma ve gerekiyorsa modüler platformla düz kullanım yüzeyi",
      question: "Giriş kotları, erişilebilirlik ve yağmur suyunun akış yönü nasıl çözülecek?",
    },
    {
      surface: "Kaplamalı özel alan",
      approach: "Yüzeyi koruyan ve mekân kurallarına uyan sabitleme planı",
      question: "Mekânın yük, koruma, araç ve çalışma saati kısıtları nelerdir?",
    },
  ];

  return (
    <div className="not-prose my-9 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-[820px] w-full text-left text-sm">
        <thead className="bg-slate-950 text-white">
          <tr>
            <th className="px-5 py-4 font-black">Zemin</th>
            <th className="px-5 py-4 font-black">Planlama yaklaşımı</th>
            <th className="px-5 py-4 font-black">Tekliften önce sorulacak soru</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.surface} className="border-t border-slate-200 align-top">
              <th className="px-5 py-4 font-black text-slate-950">{row.surface}</th>
              <td className="px-5 py-4 leading-relaxed text-slate-700">{row.approach}</td>
              <td className="px-5 py-4 leading-relaxed text-slate-700">{row.question}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DiscoveryChecklist() {
  return (
    <section
      id="kontrol-listesi"
      className="not-prose my-12 rounded-3xl bg-slate-950 p-6 text-white md:p-9"
    >
      <p className="m-0 text-sm font-black uppercase tracking-[0.18em] text-violet-200">
        Briefe eklenecekler
      </p>
      <h2 className="mt-3 text-3xl font-black text-white">
        Teknik keşif öncesi 10 maddelik kontrol listesi
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-300">
        Bu bilgilerin fotoğraf ve kısa alan videosuyla birlikte gönderilmesi; sistem, ekip, araç ve
        kurulum takviminin daha doğru planlanmasına yardımcı olur.
      </p>
      <ol className="mt-7 grid gap-3 md:grid-cols-2">
        {DISCOVERY_CHECKLIST.map((item, index) => (
          <li
            key={item}
            className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-slate-100"
          >
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500 font-black text-white">
              {index + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function Page() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "Etkinlik Çadırı Kurulum Güvenliği", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleJsonLd />

      <BlogLayout
        locale="tr"
        breadcrumbItems={breadcrumbItems}
        heroImage={{
          src: HERO_IMG,
          alt: "Açık hava etkinliği için büyük ölçekli çadır taşıyıcı sistem kurulumu",
        }}
        pills={["Çadır Kurulumu", "Zemin ve Ankraj", "Açık Hava Planlama"]}
        title={H1}
        highlight="Zemin, Ankraj, Rüzgâr ve Yağmur"
        description={DESCRIPTION}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="9-11 dk okuma"
        primaryLinks={[
          { href: TENT_SERVICE_PATH, label: "Çadır Kiralama Hizmeti" },
          { href: TENT_CALC_PATH, label: "Çadır Ölçüsünü Hesapla" },
        ]}
        whatsappUrl={WA_URL}
        tocItems={TOC_ITEMS}
        cornerstoneLinks={CORNERSTONE_LINKS}
        currentSlug={SLUG}
        currentCategory="Çadır Kiralama"
        currentKeywords={[
          "etkinlik çadırı",
          "çadır ankrajı",
          "çadır balastı",
          "açık hava etkinliği",
          "teknik keşif",
        ]}
      >
        <ShortAnswer />

        <p>
          Bir organizatör için güvenli kurulumun ilk işareti, teklifin yalnız çadır ölçüsünü değil
          saha koşullarını da sormasıdır. “Kaç metre çadır?” sorusundan önce nerede kurulacağı,
          zemine müdahale edilip edilemeyeceği, açık cephelerin yönü ve içeride hangi ekipmanların
          yer alacağı netleşmelidir.
        </p>
        <p>
          Bu yazı bir taşıyıcı sistem hesabı veya sahaya özel mühendislik onayı değildir. Amacı,
          alıcının teknik keşif öncesinde doğru bilgileri hazırlamasına ve gelen teklifte hangi
          başlıkların görünmesi gerektiğini anlamasına yardımcı olmaktır. Çadır türü seçimi için
          ayrıca <Link href={TENT_SELECTION_GUIDE_PATH}>pagoda, şeffaf ve geniş modül çadır karşılaştırmasını</Link>
          inceleyebilirsiniz.
        </p>

        <h2 id="ilk-bilgiler">Güvenli Çadır Kurulumu Hangi Bilgilerle Başlar?</h2>
        <p>
          Keşif, yalnız metreyle alan ölçmek değildir. Çadırın kaplayacağı sınırların yanı sıra
          kamyonun yanaşacağı nokta, montaj alanı, çevredeki yaya akışı, bina girişleri, acil
          geçişler ve çatıdan ya da zeminden gelebilecek su birlikte okunur. Mekân çizimi varsa
          fotoğraf ve videoyla eşleştirilmesi sahadaki sürprizleri azaltır.
        </p>
        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Alan ve kullanım",
              text: "Net ölçü, kişi sayısı, oturma biçimi, sahne, servis ve teknik alanlar aynı yerleşim üzerinde gösterilir.",
            },
            {
              title: "Zemin ve izinler",
              text: "Zemin türü, eğim, kaplama, yer altı hatları ve ankraj veya delme izni mekân yönetimiyle doğrulanır.",
            },
            {
              title: "Hava ve çevre",
              text: "Sahanın açıklığı, hâkim rüzgâr yönü, çevredeki yapılar, su akış çizgileri ve mevsim koşulları not edilir.",
            },
            {
              title: "Kurulum operasyonu",
              text: "Araç erişimi, forklift ya da vinç alanı, çalışma saatleri, depolama ve söküm rotası birlikte planlanır.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="m-0 text-lg font-black text-slate-950">{item.title}</h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
        <GuideImage
          src={VENUE_IMG}
          alt="Liman etkinlik alanında çadır kurulumu için saha ve araç erişimi planı"
          caption="Kurulum alanı yalnız çadırın oturumundan ibaret değildir; taşıma, montaj, yaya akışı ve söküm rotası da planda yer alır."
        />

        <h2 id="zemin-ankraj">Çim, Toprak, Beton ve Asfaltta Ankraj Kararı</h2>
        <p>
          Sabitleme yöntemi zemine göre değişir. Uygun çim veya toprak yüzey, sistemin gerektirdiği
          ankraj çözümüne izin verebilir. Beton, asfalt ya da korunması gereken kaplamalarda ise
          yüzeyin delinip delinemeyeceği ve balast için ayrılabilecek alan tekliften önce
          belirlenmelidir. “Her zeminde aynı ağırlık yeterlidir” yaklaşımı doğru değildir.
        </p>
        <p>
          Balast ve ankraj; çadırın ölçüsü, taşıyıcı sistemi, açık veya kapalı cepheleri, sahanın
          maruziyeti ve üretici dokümantasyonu birlikte değerlendirilerek belirlenir. Bu nedenle
          teklifte yalnız “sabitleme dahil” ifadesi yerine kullanılacak yöntemin ve saha
          varsayımlarının açık olması daha güven vericidir.
        </p>
        <ComparisonTable />
        <p>
          Eğim veya bozuk zemin nedeniyle düz bir kullanım yüzeyi gerekiyorsa
          <Link href={TENT_FLOOR_GLOSSARY_PATH}> çadır zemini</Link> çözümü ile
          <Link href={PODIUM_SERVICE_PATH}> modüler platform</Link> birlikte değerlendirilebilir.
          Platform; giriş kotları, masa düzeni ve kablo geçişleriyle aynı planda çözülmelidir.
        </p>
        <GuideImage
          src={INSTALLATION_IMG}
          alt="Sahneva ekibinin alüminyum etkinlik çadırı taşıyıcı sistem montajı"
          caption="Taşıyıcı sistem, sabitleme ve tente montajı; saha planında tanımlanan sırayla ve kontrollü çalışma alanında ilerler."
          position="top"
        />

        <h2 id="ruzgar">Rüzgâr Planı Yalnız Hava Durumu Tahmini Değildir</h2>
        <p>
          Aynı çadır, yapıların arasında korunaklı bir avluda ve açık bir sahil hattında aynı
          koşullarda çalışmaz. Çevredeki binalar, açıklıklar, tepe veya kıyı konumu ve çadırın
          cephe yönü maruziyeti değiştirir. Yan kapamaların açık ya da kapalı tutulması da yük
          davranışını etkileyebileceği için etkinlik akışıyla birlikte ele alınmalıdır.
        </p>
        <p>
          Kurulum ekibinden yalnız “rüzgâra dayanır mı?” cevabını istemek yerine kullanılan sistemin
          teknik dokümanını, sahaya göre seçilen sabitleme yaklaşımını, hava koşullarının nasıl
          izleneceğini ve koşullar değişirse kimin hangi kararı vereceğini sorun. Tek bir internet
          tahmini veya bütün sistemlere uygulanan genel bir hız değeri, sahaya özel planın yerini
          tutmaz.
        </p>
        <div className="not-prose my-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
          <p className="m-0 text-sm font-black uppercase tracking-[0.18em] text-amber-800">
            Teklifte görünmesi gereken sınır
          </p>
          <p className="mb-0 mt-3 text-base leading-relaxed text-amber-950">
            Teknik doküman, saha varsayımı, sabitleme biçimi, izleme sorumluluğu ve müdahale planı
            net değilse yalnız “hava koşullarına dayanıklı” ifadesi yeterli bir kapsam tanımı değildir.
          </p>
        </div>

        <h2 id="yagmur-drenaj">Yağmur, Eğim ve Su Tahliyesini Birlikte Planlayın</h2>
        <p>
          Yağmur planı, tentenin su geçirmemesiyle bitmez. Çatıdan inen suyun nereye akacağı, kapı
          eşiklerinde birikip birikmeyeceği, alanın düşük kotları ve çevredeki mazgal ya da drenaj
          noktaları keşifte görülmelidir. Kurulum zeminin doğal su yolunu kapatıyorsa etkinlik alanı
          kuru kalmayabilir.
        </p>
        <p>
          Elektrik dağıtımı, jeneratör, kablo ekleri ve reji alanı da su akışından uzak, kontrollü
          güzergâhlarda planlanmalıdır. Kablo rampaları hem koruma hem yaya akışı için önemlidir;
          ancak rampanın kendisi suyu yanlış yöne çevirmemelidir. İçeride platform kullanılacaksa
          kenarlar ve giriş rampaları da drenaj senaryosuna dahil edilir.
        </p>
        <GuideImage
          src={FIELD_IMG}
          alt="Açık hava alanında çadır yerleşimi, zemin eğimi ve yağmur drenajı planlaması"
          caption="Saha fotoğraflarında düşük kotlar, suyun geliş yönü, kapı eşikleri ve teknik ekipman güzergâhları birlikte işaretlenmelidir."
        />

        <h2 id="kurulum-lojistigi">Forklift, Vinç ve Kurulum-Söküm Takvimi</h2>
        <p>
          Büyük açıklıklı çadırlar sahaya parçalar halinde gelir; ancak kiriş, tente ve taşıyıcı
          elemanların güvenli biçimde taşınması için yalnız kamyon girişinin açık olması yetmez.
          Forklift veya vinç manevra alanı, malzemenin geçici olarak bırakılacağı bölüm ve montaj
          sırasında çevrilecek çalışma alanı önceden ayrılmalıdır.
        </p>
        <p>
          Dekor, catering, sahne, LED ekran ve ses-ışık ekipleri aynı saatte alana çağrıldığında
          araç ve personel akışı birbirini kilitleyebilir. Doğru sıra genellikle zeminin ve taşıyıcı
          yapının hazırlanmasıyla başlar; iç teknik sistemler, kapamalar ve son kontroller proje
          takvimine göre devam eder. Kesin sıra ise sahaya ve kullanılacak sisteme göre teknik ekip
          tarafından belirlenir.
        </p>
        <GuideImage
          src={HERO_IMG}
          alt="Forklift erişimiyle büyük ölçekli alüminyum çadır kurulumu"
          caption="Büyük taşıyıcı elemanlar için araç erişimi, kaldırma alanı ve güvenli çalışma sınırı kuruluma başlamadan ayrılır."
        />

        <h2 id="ic-yerlesim">Girişler, Geçiş Aksları ve Teknik Yerleşim</h2>
        <p>
          Çadır oturumunu yalnız masa veya sandalye kapasitesine göre doldurmak doğru değildir.
          Misafir girişi, servis kapısı, catering rotası, sahne önü, reji, jeneratör bağlantısı ve
          kesintisiz bırakılacak geçişler yerleşimin parçasıdır. İlk alan ihtiyacını görmek için
          <Link href={TENT_CALC_PATH}> çadır hesaplama aracını</Link> kullanabilir; sonucu teknik
          yerleşimle birlikte revize edebilirsiniz.
        </p>
        <p>
          Sahne ve LED ekran varsa taşıyıcı sistemle çakışma, görüş açısı, kablo güzergâhı ve arka
          servis alanı ayrıca kontrol edilir. Yan kapamaların etkinlik sırasında açılması isteniyorsa
          bu karar hem misafir akışında hem de hava planında önceden gösterilmelidir. Son dakika
          yer değişiklikleri sabitleme ve enerji planını etkileyebilir.
        </p>
        <GuideImage
          src={INTERIOR_IMG}
          alt="Etkinlik çadırı içinde sahne, oturma düzeni ve teknik geçiş planı"
          caption="Çadır içi kapasite; sahne, servis, teknik reji ve kesintisiz geçiş alanları ayrıldıktan sonra netleşir."
        />

        <DiscoveryChecklist />

        <h2>Teklifi Aynı Saha Varsayımları Üzerinden Karşılaştırın</h2>
        <p>
          İki teklif aynı çadır ölçüsünü yazsa bile kapsamları aynı olmayabilir. Nakliye,
          kurulum-söküm, ankraj veya balast, zemin platformu, yan kapamalar, aydınlatma,
          iklimlendirme, araç ve operatör ihtiyacı ile bekleme süresi ayrı kalemler olabilir.
          Karşılaştırmayı yalnız toplam rakam üzerinden değil, aynı saha koşulları ve aynı teslim
          kapsamı üzerinden yapın.
        </p>
        <p>
          Sistem türü ve kapasite henüz net değilse önce
          <Link href={TENT_SELECTION_GUIDE_PATH}> çadır seçim rehberini</Link>, ardından
          <Link href={TENT_SERVICE_PATH}> çadır kiralama hizmet kapsamını</Link> inceleyin. Alan
          fotoğraflarını, ölçüyü ve tarih bilgisini paylaştığınızda saha keşfi ve teklif kalemleri
          daha doğru ayrıştırılabilir.
        </p>

        <section id="sss" aria-labelledby="faq-heading" className="not-prose mt-12 space-y-3">
          <h2 id="faq-heading" className="text-3xl font-black text-slate-950">
            Etkinlik Çadırı Kurulum Güvenliği Hakkında Sorular
          </h2>
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white open:border-violet-300 open:ring-2 open:ring-violet-100"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-bold text-slate-950">
                {item.question}
              </summary>
              <p className="m-0 border-t border-slate-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-700">
                {item.answer}
              </p>
            </details>
          ))}
        </section>

        <div className="not-prose mt-12 rounded-3xl bg-gradient-to-br from-slate-950 to-violet-950 p-7 text-white md:p-9">
          <p className="m-0 text-sm font-black uppercase tracking-[0.18em] text-violet-200">
            Teknik keşif briefi
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Alanı görmeden yalnız ölçüye göre teklif istemeyin
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-200">
            Tarih, şehir, kişi sayısı, zemin fotoğrafları, kısa alan videosu ve içeride kurulacak
            teknik ekipmanları paylaşın; sabitleme, kurulum lojistiği ve teslim kapsamını aynı
            briefte netleştirelim.
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
              Teknik Bilgileri WhatsApp'tan Gönder
            </a>
          </div>
        </div>

        <BlogRelatedLinks
          services={[
            { href: TENT_SERVICE_PATH, label: "Çadır Kiralama" },
            { href: TENT_CALC_PATH, label: "Çadır Hesaplama Aracı" },
            ...CONTENT_CLUSTERS.tent.relatedServices.slice(0, 2),
          ]}
        />
      </BlogLayout>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";

import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import BlogLayout from "@/components/blog/BlogLayout";

/* ================== URLS ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? BASE_SITE_URL).replace(/\/$/, "");
const BLOG_PATH = "/blog/ses-sistemlerinde-2026-yenilikleri-trendler";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

/* ================== DATES ================== */
const PUBLISH_DATE = "2026-01-16T00:00:00+03:00";
const MODIFIED_DATE = "2026-01-17T00:00:00+03:00";

/* ================== AUTHOR ================== */
const AUTHOR_NAME = "Sahneva Teknik";

/* ================== ASSETS ================== */
const HERO_IMAGE = "/img/blog/ses-sistemleri-2026-hero.webp";
const OG_IMAGE = HERO_IMAGE;

/* ================== META ================== */
export const metadata = {
  title: "Ses Sistemlerinde 2026 Yenilikleri: Mikrofon ve Line Array",
  description:
    "2026 ses teknolojilerini keşfedin: WMAS sistemler, AI tabanlı frekans yönetimi ve beam steering ile etkinlik prodüksiyonunda mühendislik dönemi.",
  image: HERO_IMAGE,
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title: "Ses Sistemlerinde 2026 Yenilikleri: Mikrofon ve Line Array Trendleri",
    description:
      "WMAS, AI tabanlı frekans yönetimi ve beam steering ile ses mühendisliğinde yeni dönem.",
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva Organizasyon",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon blog görseli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ses Sistemlerinde 2026 Yenilikleri",
    description: "WMAS ve line array trendleriyle 2026 ses teknolojileri.",
    images: [`${SITE_URL}${OG_IMAGE}`],
  },
  keywords: [
    "ses sistemleri kiralama",
    "kablosuz mikrofon teknolojileri",
    "line array ses sistemleri",
    "WMAS",
    "AI frekans yönetimi",
    "beam steering",
  ],
  authors: [{ name: AUTHOR_NAME }],
};

/* ================== JSON-LD (ID-LI, GLOBAL ILE UYUMLU) ================== */
function ArticleSchema() {
  const WEBPAGE_ID = `${BLOG_URL}#webpage`;
  const ARTICLE_ID = `${BLOG_URL}#article`;
  const PRIMARY_IMAGE_ID = `${BLOG_URL}#primaryimage`;
  const LOGO_ID = `${SITE_URL}/#logo`; // global graph ile ayni format

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageObject",
        "@id": PRIMARY_IMAGE_ID,
        url: `${SITE_URL}${HERO_IMAGE}`,
        contentUrl: `${SITE_URL}${HERO_IMAGE}`,
        width: 1200,
        height: 630,
      },
      {
        "@type": "WebPage",
        "@id": WEBPAGE_ID,
        url: BLOG_URL,
        name:
          "Ses Sistemlerinde 2026 Yenilikleri: Kablosuz Mikrofon Teknolojileri ve Line Array Ses Sistemleri Trendleri",
        isPartOf: { "@id": WEBSITE_ID }, // global WebSite
        about: { "@id": ORGANIZATION_ID },
        primaryImageOfPage: { "@id": PRIMARY_IMAGE_ID },
        inLanguage: "tr-TR",
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
      },
      {
        "@type": "Article",
        "@id": ARTICLE_ID,
        isPartOf: { "@id": WEBPAGE_ID },
        mainEntityOfPage: { "@id": WEBPAGE_ID },
        headline:
          "Ses Sistemlerinde 2026 Yenilikleri: Kablosuz Mikrofon Teknolojileri ve Line Array Ses Sistemleri Trendleri",
        description:
          "2026 yılı etkinlik ses teknolojileri, WMAS, AI frekans yönetimi ve line array trendleri üzerine teknik inceleme.",
        image: { "@id": PRIMARY_IMAGE_ID },
        author: { "@id": ORGANIZATION_ID }, // global Organization
        publisher: { "@id": ORGANIZATION_ID }, // global Organization
        inLanguage: "tr-TR",
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
      },
      // Optional ama faydali: logo node'unu referanslamak (globalde zaten var).
      // Duplicate olmasin diye sadece @id ile isaretliyoruz.
      {
        "@type": "ImageObject",
        "@id": LOGO_ID,
      },
    ],
  };

  const safe = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <Script
      id="article-ld-json"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: safe }}
    />
  );
}

/* ================== UI HELPERS ================== */
const Breadcrumbs = () => (
  <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
    <ol className="flex items-center space-x-2 flex-wrap">
      <li>
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Anasayfa
        </Link>
      </li>
      <li aria-hidden="true" className="text-gray-500">
        /
      </li>
      <li>
        <Link href="/blog" className="hover:text-blue-600 transition-colors">
          Blog
        </Link>
      </li>
      <li aria-hidden="true" className="text-gray-500">
        /
      </li>
      <li className="text-gray-900 font-medium truncate" aria-current="page">
        Ses Sistemlerinde 2026 Yenilikleri
      </li>
    </ol>
  </nav>
);

const TableOfContents = () => (
  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-6 hidden lg:block">
    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">İçindekiler</h4>
    <ul className="space-y-2 text-sm">
      {[
        { id: "kablosuz-mikrofon", label: "1. Kablosuz Mikrofon Teknolojileri" },
        { id: "wmas", label: "1.1 WMAS Dönemi" },
        { id: "ai-frekans", label: "1.2 AI Tabanlı Frekans Koordinasyonu" },
        { id: "line-array", label: "2. Line Array Ses Sistemleri" },
        { id: "network-kontrol", label: "2.1 Network Kontrollü Mimari" },
        { id: "oda-kalibrasyonu", label: "2.2 Akıllı Oda Kalibrasyonu" },
        { id: "neden-yatirim", label: "3. Neden 2026 Teknolojileri?" },
      ].map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all block"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

/* ================== PAGE ================== */
export default function BlogPostAudioTrends2026() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "Ses Sistemlerinde 2026 Yenilikleri", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      {/* Article + WebPage + BreadcrumbList JSON-LD */}
            <ArticleSchema />
      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{ src: (typeof IMAGES !== "undefined" && IMAGES?.hero?.src ? IMAGES.hero.src : (typeof FEATURED_IMAGE !== "undefined" ? FEATURED_IMAGE : (typeof HERO_IMAGE !== "undefined" ? HERO_IMAGE : (typeof OG_IMAGE !== "undefined" ? OG_IMAGE : "")))), alt: (typeof IMAGES !== "undefined" && IMAGES?.hero?.alt ? IMAGES.hero.alt : (metadata?.title ? String(metadata.title).replace(/\\s*\\|\\s*Sahneva.*$/, "") : "Sahneva Blog")) }}
        pills={["Sahneva Blog", "Prodüksiyon & Teknik", "Etkinlik Mühendisliği"]}
        title={(metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : "")}
        description={metadata?.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="2\u20134 dk okuma"
        primaryLinks={[
          { href: (typeof STAGE_SERVICE_PATH !== "undefined" ? STAGE_SERVICE_PATH : "/sahne-kiralama"), label: "Sahne Kiralama", icon: "🎭" },
          { href: (typeof PODIUM_SERVICE_PATH !== "undefined" ? PODIUM_SERVICE_PATH : "/podyum-kiralama"), label: "Podyum Kiralama", icon: "🧱" },
          { href: (typeof LED_SERVICE_PATH !== "undefined" ? LED_SERVICE_PATH : "/led-ekran-kiralama"), label: "LED Ekran", icon: "🟦" },
        ]}
        whatsappUrl={(typeof WA_URL !== "undefined" ? WA_URL : undefined)}
      >

              <Breadcrumbs />

              <p>
                2026 yılı itibarıyla profesyonel ses sistemleri, yüksek desibel odaklı yaklaşımları
                geride bırakarak; spektral verimlilik, akıllı frekans yönetimi ve akustik simülasyon
                temelli bir döneme girmiştir. Güncel projelerde artık “daha yüksek ses” değil, daha
                kontrollü, daha temiz ve daha güvenli ses konuşulmaktadır.
              </p>

              <h2 id="kablosuz-mikrofon">
                Kablosuz Mikrofon Teknolojileri 2026: Spektrum Savaşlarında Akıllı Çözümler
              </h2>

              <p>
                RF (Radyo Frekansı) spektrumunun 5G altyapıları ve yoğun dijital yayın trafiği
                nedeniyle daralması, geleneksel analog sistemlerin sınırlarını net biçimde ortaya
                koymuştur. 2026 itibarıyla kablosuz mikrofon sistemlerinde temel yaklaşım, “kanal
                açmak”tan çok spektrumu yönetmek üzerine kuruludur.
              </p>

              <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
                <figure className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                  <Image
                    src="/img/blog/kablosuz-mikrofon-kiralama-2026-trendleri.webp"
                    alt="2026 kablosuz mikrofon teknolojileri: sahne üzerinde mikrofon ekipmanları"
                    width={720}
                    height={480}
                    className="w-full h-full object-cover"
                  />
                </figure>

                <figure className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                  <Image
                    src="/img/blog/wmas-teknolojisi-frekans-yonetimi.webp"
                    alt="WMAS teknolojisi: frekans yönetimi ve çok kanallı dijital kablosuz sistemler"
                    width={720}
                    height={480}
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>

              <h3 id="wmas">WMAS (Wireless Multichannel Audio Systems) Dönemi</h3>

              <p>
                Shure Axient Digital PSM ve Sennheiser Spectera gibi yeni nesil sistemler, tek bir 6
                MHz veya 8 MHz frekans bloğu içerisinde 64 kanala kadar ses iletimi sağlayabilmektedir.
                Bu yapı, bidirectional bodypack teknolojisi sayesinde tek bir ünite üzerinden hem
                mikrofon sinyalinin gönderilmesine hem de kulak içi monitör (IEM) sinyalinin
                alınmasına olanak tanır. Bu yaklaşım, RF yoğunluğunu yaklaşık %50 oranında azaltır.
              </p>

              <h3 id="ai-frekans">AI Tabanlı Frekans Koordinasyonu</h3>

              <p>
                Yeni nesil dijital alıcılar, ortamda oluşabilecek RF parazitlerini milisaniyelik
                taramalarla analiz eder. Olası bir çakışma tespit edildiğinde sistem, “Interference
                Detection” mekanizması sayesinde seste fark edilebilir bir kesinti yaşatmadan
                otomatik olarak yedek frekansa geçiş yapar.
              </p>

              <h3>AES-256 Şifreleme ve Veri Güvenliği</h3>

              <p>
                Kurumsal etkinlikler ve gizliliğin ön planda olduğu organizasyonlarda dijital ses
                güvenliği artık standarttır. 2026 model sistemlerde kullanılan AES-256 şifreleme,
                ses sinyalinin dışarıdan dinlenmesini teknik olarak imkânsız hâle getirir.
              </p>

              <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-5 my-8 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-xl" aria-hidden="true">
                    ⚙️
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Mühendislik Notu: “Görünmez Kablo” Güvenliği
                    </p>
                    <p className="text-slate-700 mt-2">
                      Modern etkinliklerde kablosuz sistemler yalnızca donanım değil, aktif olarak
                      yönetilen bir RF altyapısıdır. Gerçek zamanlı spektrum analizleri sayesinde,
                      baz istasyonları veya diğer telsiz sistemlerinden kaynaklanabilecek kopma
                      (dropout) riskleri milisaniyelik tepkilerle kontrol altında tutulur.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="line-array">
                Line Array Ses Sistemleri 2026: Akustik Simülasyon ve Nokta Atışı Kapsama
              </h2>

              <p>
                Büyük ölçekli organizasyonlarda homojen ses dağılımı sağlamak, yalnızca hoparlörleri
                asmakla sınırlı değildir. 2026 itibarıyla line array sistemler; beam steering (hüzme
                yönlendirme) ve yapay zeka destekli oda kalibrasyonu ile yönetilmektedir.
              </p>

              <figure className="not-prose rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm my-8">
                <Image
                  src="/img/blog/line-array-ses-sistemi-akustik-kalibrasyon.webp"
                  alt="Profesyonel line array ses sistemi kurulumu ve AI destekli akustik simülasyon"
                  width={960}
                  height={540}
                  className="w-full h-full object-cover"
                />
              </figure>

              <h3 id="network-kontrol">Aktif Entegre Mimari ve Network Kontrol</h3>

              <p>
                L-Acoustics, d&b audiotechnik ve Meyer Sound gibi üreticilerin yeni nesil kabinleri,
                amplifikatör ve DSP birimlerini kendi gövdelerinde barındırır. Milan ve Dante
                protokolleri üzerinden çalışan bu yapı sayesinde her hoparlörün ısı, voltaj ve
                performans verileri anlık olarak izlenebilir. Bu yaklaşım, kurulum süresini önemli
                ölçüde kısaltırken sistem kararlılığını artırır.
              </p>

              <h3>Cardioid Subwoofer Mühendisliği</h3>

              <p>
                Sahne arkasındaki düşük frekans kirliliğini azaltmak amacıyla kullanılan cardioid ve
                end-fire dizilimler, ses enerjisinin arka tarafa yayılmasını %90’a varan oranlarda
                sınırlar. Böylece hem sahne üzerindeki performans konforu artar hem de izleyici
                alanında daha temiz bir bas dağılımı elde edilir.
              </p>

              <h3 id="oda-kalibrasyonu">Akıllı Oda Kalibrasyonu (System Tuning)</h3>

              <p>
                Kurulum sonrası yapılan lazer ölçümler ve akustik analizler, mekanın fiziksel
                özelliklerini dijital ortama aktarır. Sistem; EQ, gecikme (delay) ve faz ayarlarını bu
                verilere göre optimize eder. Sonuç olarak ön sıradaki dinleyici ile en arka
                sıradaki dinleyici aynı netlikte ve dengede sesi algılar.
              </p>

              <h2 id="neden-yatirim">Neden 2026 Teknolojilerine Yatırım Yapılmalı?</h2>

              <ul>
                <li>Yüksek güvenilirlik: Frekans çakışmaları ve kopmalar minimum seviyeye iner.</li>
                <li>Hızlı ve modüler kurulum: Daha kısa sürede, daha kararlı sistemler.</li>
                <li>Sürdürülebilirlik: Düşük enerji tüketimli Class-D amplifikatörler.</li>
                <li>
                  Hibrit uyumluluk: Canlı yayın ve fiziksel etkinliklerin aynı anda kusursuz yönetimi.
                </li>
              </ul>

              <p>
                2026 yılı, ses sistemlerinde teknolojinin mühendislik refleksiyle birleştiği bir dönüm
                noktasıdır. Doğru planlanan sistemler, yalnızca daha iyi ses değil; daha güvenli, daha
                kontrollü ve daha profesyonel etkinlikler anlamına gelir. 2026 teknolojileri, etkinlik
                prodüksiyonunu bir ekipman kurulumu olmaktan çıkararak tamamen veri odaklı bir mühendislik
                sürecine dönüştürüyor. Sahneva Teknik, bu yeni nesil dijital standartları operasyonel
                yaklaşımının merkezine alarak, teknik risklerin minimize edildiği yüksek prestijli etkinlik
                altyapılarının oluşturulmasına odaklanmaktadır.
              </p>

              <p>
                Profesyonel{" "}
                <Link href="/ses-isik-sistemleri">ses sistemleri kiralama</Link>{" "}
                çözümleri için ekibimizle iletişime geçebilir, mühendislik yaklaşımımızı yakından görmek
                için{" "}
                <Link href="/hakkimizda">teknik partner</Link>{" "}
                sayfamızı inceleyebilirsiniz.
              </p>

              <div className="not-prose mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div>
                  <p className="text-lg font-semibold text-blue-900">
                    👉 Profesyonel ses ve ışık çözümleri
                  </p>
                  <p className="text-sm text-blue-800">
                    Projeleriniz için uygun ses, ışık ve mühendislik desteğini planlayalım.
                  </p>
                </div>

                <Link
                  href="/ses-isik-sistemleri"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Teklif Alın
                </Link>
              </div>

              <BlogRelatedLinks
                services={[
                  { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemleri" },
                  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
                ]}
              />
      </BlogLayout>
    </>
  );}
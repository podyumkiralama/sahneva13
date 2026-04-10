import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";

import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

/* ================== URLS ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? BASE_SITE_URL).replace(
  /\/$/,
  ""
);
const BLOG_PATH =
  "/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

/* ================== DATES ================== */
const PUBLISH_DATE = "2026-01-20T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile("app/(tr)/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping/page.jsx", "2026-02-05T00:00:00+03:00");

/* ================== AUTHOR ================== */
const AUTHOR_NAME = "Sahneva Teknik";

/* ================== ASSETS ================== */
const HERO_IMAGE = "/img/blog/dome-cadir-360-mapping-hero.webp";
const OG_IMAGE = HERO_IMAGE;

const FEATURED_IMAGE = HERO_IMAGE;
const IMAGES = null;
const STAGE_SERVICE_PATH = "/sahne-kiralama";
const PODIUM_SERVICE_PATH = "/podyum-kiralama";
const LED_SERVICE_PATH = "/led-ekran-kiralama";
const WA_URL = "https://wa.me/905453048671?text=" + encodeURIComponent("Merhaba, projem için teklif almak istiyorum.");

const IMG_KURULUM = "/img/blog/dome-cadir-kurulum.webp";
const IMG_IC_MEKAN = "/img/blog/dome-cadir-ic-mekan.webp";
const IMG_MAPPING = "/img/blog/dome-cadir-projeksiyon-mapping.webp";
const IMG_GECE = "/img/blog/dome-cadir-gece-ambiyans.webp"; // ⚠️ .web değil .webp varsaydım

const YT_URL = "https://www.youtube.com/watch?v=JNzGlNzNRuk";
const YT_ID = "JNzGlNzNRuk";
const YT_EMBED = `https://www.youtube-nocookie.com/embed/${YT_ID}?rel=0&modestbranding=1`;
const YT_THUMB = `https://img.youtube.com/vi/${YT_ID}/hqdefault.jpg`;
const YT_LASER_URL = "https://youtube.com/shorts/CVdYV5BkF3k";
const YT_LASER_ID = "CVdYV5BkF3k";
const YT_LASER_EMBED = `https://www.youtube-nocookie.com/embed/${YT_LASER_ID}?rel=0&modestbranding=1`;
const YT_LASER_THUMB = `https://img.youtube.com/vi/${YT_LASER_ID}/hqdefault.jpg`;

/* ================== META ================== */
export const metadata = {
  title:
    "Kurumsal Etkinliklerde Dome Çadır Devrimi: 360° Mapping",
  description:
    "Kurumsal lansmanlarda dome çadır ve 360° video mapping devrimi. Dicle Fest örneği, hızlı kurulum, akustik senkronizasyon ve tüm proje detayları.",
  image: HERO_IMAGE,
  alternates: {
    canonical: BLOG_URL,
  },
  openGraph: {
    title:
      "Kurumsal Etkinliklerde Dome Çadır Devrimi: Pnömatik Yapı ve 360° Mapping",
    description:
      "Dome çadır içinde 360° mapping: mühendislik, kurulum hızı, akustik kontrol ve tam senkron prodüksiyon yaklaşımı.",
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Kurumsal etkinliklerde dome çadır devrimi – pnömatik yapı ve 360° mapping uygulaması",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dome Çadır + 360° Mapping ile Geleceğin Lansmanları",
    description:
      "Pnömatik dome ve 360° video mapping ile kapsayıcı lansman deneyimi.",
    images: [`${SITE_URL}${OG_IMAGE}`],
  },
  keywords: [
    "dome çadır kiralama",
    "pnömatik dome çadır",
    "geodezik dome",
    "360 video mapping",
    "projeksiyon mapping",
    "kurumsal lansman",
    "teknik prodüksiyon",
    "çadır kiralama",
  ],
  authors: [{ name: AUTHOR_NAME }],
};

/* ================== JSON-LD (ID-LI, GLOBAL ILE UYUMLU) ================== */
function ArticleSchema() {
  const WEBPAGE_ID = `${BLOG_URL}#webpage`;
  const ARTICLE_ID = `${BLOG_URL}#article`;
  const PRIMARY_IMAGE_ID = `${BLOG_URL}#primaryimage`;
  const VIDEO_ID = `${BLOG_URL}#video`;
  const VIDEO_LASER_ID = `${BLOG_URL}#laser-video`;
  const LOGO_ID = `${SITE_URL}/#logo`; // global graph formatınla uyumlu

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
          "Kurumsal Etkinliklerde Dome Çadır Devrimi: Pnömatik Yapı ve 360° Mapping ile Geleceğin Lansmanları",
        isPartOf: { "@id": WEBSITE_ID }, // global WebSite
        about: { "@id": ORGANIZATION_ID }, // global Organization
        primaryImageOfPage: { "@id": PRIMARY_IMAGE_ID },
        inLanguage: "tr-TR",
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
      },
      {
        "@type": "VideoObject",
        "@id": VIDEO_ID,
        name: "Dome Çadır & 360° Mapping Örneği",
        description:
          "Dome çadır içinde 360° video mapping uygulamasına örnek video.",
        uploadDate: "2025-11-17T00:00:00+03:00",
        embedUrl: `https://www.youtube-nocookie.com/embed/${YT_ID}`,
        contentUrl: YT_URL,
        thumbnailUrl: YT_THUMB,
      },
      {
        "@type": "VideoObject",
        "@id": VIDEO_LASER_ID,
        name: "Lazer Projeksiyon Mapping Örneği",
        description:
          "Lazer projeksiyon mapping içeriğinin akışı ve efektlerini gösteren kısa video.",
        uploadDate: "2025-11-17T00:00:00+03:00",
        embedUrl: `https://www.youtube-nocookie.com/embed/${YT_LASER_ID}`,
        contentUrl: YT_LASER_URL,
        thumbnailUrl: YT_LASER_THUMB,
      },
      {
        "@type": "Article",
        "@id": ARTICLE_ID,
        isPartOf: { "@id": WEBPAGE_ID },
        mainEntityOfPage: { "@id": WEBPAGE_ID },
        headline:
          "Kurumsal Etkinliklerde Dome Çadır Devrimi: Pnömatik Yapı ve 360° Mapping ile Geleceğin Lansmanları",
        description:
          "Pnömatik/geodezik dome çadır + 360° mapping ile kapsayıcı lansmanlar: Batman Dicle Elektrik – Dicle Fest örneği, kurulum, akustik ve senkronizasyon.",
        image: { "@id": PRIMARY_IMAGE_ID },
        author: { "@id": ORGANIZATION_ID }, // global Organization
        publisher: { "@id": ORGANIZATION_ID }, // global Organization
        inLanguage: "tr-TR",
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        video: [{ "@id": VIDEO_ID }, { "@id": VIDEO_LASER_ID }],
      },
      // Optional: globaldeki logo node'unu sadece @id ile işaretle (duplicate olmasın)
      {
        "@type": "ImageObject",
        "@id": LOGO_ID,
      },
    ],
  };

  return <JsonLd id="article-ld-json" data={jsonLd} />;
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
        Dome Çadır + 360° Mapping
      </li>
    </ol>
  </nav>
);

function YouTubeEmbed({ title, embedUrl }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

/* ================== PAGE ================== */
export default function BlogPostDome360Mapping() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "Dome Çadır + 360° Mapping", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      {/* Article + WebPage + Video JSON-LD */}
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
        currentSlug={BLOG_PATH.replace("/blog/", "")}
        currentCategory={metadata?.category}
        currentKeywords={metadata?.keywords}
        primaryLinks={[
          { href: (typeof STAGE_SERVICE_PATH !== "undefined" ? STAGE_SERVICE_PATH : "/sahne-kiralama"), label: "Sahne Kiralama", icon: "🎭" },
          { href: (typeof PODIUM_SERVICE_PATH !== "undefined" ? PODIUM_SERVICE_PATH : "/podyum-kiralama"), label: "Podyum Kiralama", icon: "🧱" },
          { href: (typeof LED_SERVICE_PATH !== "undefined" ? LED_SERVICE_PATH : "/led-ekran-kiralama"), label: "LED Ekran", icon: "🟦" },
        ]}
        whatsappUrl={(typeof WA_URL !== "undefined" ? WA_URL : undefined)}
      >

              <Breadcrumbs />

              <p>
                Kurumsal dünyada prestij, artık klasik otel salonlarının sınırlarını
                aşarak; gökyüzüne açılan, teknolojiyle nefes alan fütüristik etkinlik
                yapıları ile yeniden tanımlanıyor. 2026 itibarıyla lansmanların yeni
                gözdesi ise açık: <strong>Pnömatik Dome Çadır Yapıları</strong> ve{" "}
                <strong>360° Video Mapping</strong> mühendisliği.
              </p>

              <p>
                Bu sistemler markayı yalnızca anlatmıyor; katılımcıyı, hikâyenin tam
                merkezine yerleştirerek deneyimin bir parçası haline getiriyor.
                Sahneva Teknik olarak Batman Dicle Elektrik – Dicle Fest projesinde
                hayata geçirdiğimiz devasa geodezik dome yapı, bu dönüşümün
                Türkiye’deki en somut ve etkileyici örneklerinden biridir.
              </p>

              <figure className="not-prose rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm my-8">
                <Image
                  src={IMG_IC_MEKAN}
                  alt="Dome çadır iç mekân: kolonsuz geniş hacim ve 360° deneyime uygun görüş"
                  width={960}
                  height={540}
                  className="w-full h-full object-cover"
                />
              </figure>

              <h2 id="dome-gucu">1. Dome Çadırın Kurumsal Gücü: Neden Kiralamalısınız?</h2>
              <p>
                Klasik çadır ve geçici yapı sistemlerini geride bırakan geodezik ve
                pnömatik dome çadırlar, markalara “yenilikçi, güçlü ve vizyoner” bir
                algı kazandırır.
              </p>

              <h3 id="immersif">1.1 İmmersif (Kapsayıcı) Atmosfer</h3>
              <p>
                Şeffaf dış yüzey sayesinde etkinlik alanı zamansız bir ruha bürünür:
              </p>
              <ul>
                <li>
                  <strong>Gündüz:</strong> Doğal ışığın hakim olduğu ferah bir lansman alanı.
                </li>
                <li>
                  <strong>Gece:</strong> Yıldızlarla bütünleşen fütüristik bir atmosfer.
                </li>
                <li>
                  <strong>İç Yüzey:</strong> Markaya özel 360° içerikler; katılımcıyı çevreleyen,
                  kesintisiz bir görsel deneyim sunar.
                </li>
              </ul>

              <figure className="not-prose rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm my-8">
                <Image
                  src={IMG_GECE}
                  alt="Gece ambiyansında dome çadır: dışarıdan fütüristik silüet"
                  width={960}
                  height={540}
                  className="w-full h-full object-cover"
                />
              </figure>

              <h3 id="guvenlik">1.2 Mühendislik Harikası ve Güvenlik</h3>
              <p>
                Batman’da kurulan dev yapı, rüzgâr yükünü tüm yüzeye eşit dağıtan geodezik form
                sayesinde maksimum dayanım sağlar. Kolonsuz yapı; geniş ve engelsiz bir iç hacim
                sunarak sahne görüş açılarını, LED ekran yerleşimini ve ses dağılımını ideal
                seviyeye taşır.
              </p>

              <h3 id="hizli-kurulum">1.3 Hızlı ve Modüler Operasyon</h3>
              <p>
                Sahneva mühendisliğiyle; dome kurulumu, zemin ve altyapı entegrasyonu ve teknik sistem
                yerleşimi <strong>4 saat</strong> gibi kısa bir sürede tamamlanmıştır.
              </p>

              <figure className="not-prose rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm my-8">
                <Image
                  src={IMG_KURULUM}
                  alt="Dome çadır kurulum süreci: modüler kurulum ve hızlı operasyon"
                  width={960}
                  height={540}
                  className="w-full h-full object-cover"
                />
              </figure>

              <p>
                Dome çadır sistemleri; profesyonel sahne, LED ekranlar, line array ses sistemleri ve
                moving head ışıklar ile sorunsuz ve güvenli şekilde entegre edilebilir.
              </p>

              <h2 id="mapping">2. 360° Mapping Mühendisliği: Dicle Elektrik Batman Örneği</h2>
              <p>
                Batman’daki lansmanda kullanılan 360° mapping sistemi, dome’un iç yüzeyini devasa bir
                dijital sahneye dönüştürdü.
              </p>

              <div className="not-prose my-8">
                <YouTubeEmbed
                  title="Dome Çadır & 360° Mapping Video"
                  embedUrl={YT_EMBED}
                />
                <p className="mt-3 text-sm text-gray-600">
                  Video kaynağı:{" "}
                  <a href={YT_URL} target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>{" "}
                  (embed: youtube-nocookie).
                </p>
              </div>

              <div className="not-prose my-8">
                <YouTubeEmbed
                  title="Lazer Projeksiyon Mapping Video"
                  embedUrl={YT_LASER_EMBED}
                />
                <p className="mt-3 text-sm text-gray-600">
                  Video kaynağı:{" "}
                  <a href={YT_LASER_URL} target="_blank" rel="noopener noreferrer">
                    YouTube Shorts
                  </a>{" "}
                  (lazer projeksiyon mapping içeriği).
                </p>
              </div>

              <h3 id="projeksiyon">2.1 Lümen Gücü + Warp &amp; Edge Blending</h3>
              <ul>
                <li>
                  <strong>Yüksek Lümen Gücü:</strong> Çap/alan hesaplarına göre 4 – 8 adet 20.000 ANSI
                  lümen sınıfı projektörle homojen aydınlatma sağlanır.
                </li>
                <li>
                  <strong>Warp &amp; Edge Blending:</strong> MadMapper/Watchout gibi yazılımlarla kavisli
                  yüzeyde distortion ve bindirmeler milimetrik düzeltilir.
                </li>
              </ul>

              <figure className="not-prose rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm my-8">
                <Image
                  src={IMG_MAPPING}
                  alt="Projeksiyon mapping: kavisli yüzeyde warp ve edge blending ile hizalama"
                  width={960}
                  height={540}
                  className="w-full h-full object-cover"
                />
              </figure>

              <h3 id="senkron">2.2 Tam Senkronizasyon</h3>
              <p>
                Mapping içerikleri; konuşma anları, line array sisteminden gelen vuruşlar ve moving head
                ışık efektleri ile tam zamanlı senkronize çalışır. Katılımcı içeri girer girmez “vay be”
                etkisi başlar.
              </p>

              <h2 id="zorluklar">3. Teknik Zorluklar ve Sahneva Çözümleri</h2>
              <ul>
                <li>
                  <strong>Akustik Yankı Kontrolü:</strong> Yuvarlak geometrinin odaklanmış yankısı; doğru
                  line array konumlandırma + akustik önlemlerle kontrol altına alınır.
                </li>
                <li>
                  <strong>RF / Spektrum Güvenliği:</strong> Açık alanlarda 5G/RF kirliliğine karşı gerçek zamanlı
                  analiz ve çakışma önleme ile “görünmez kablo güvenliği” sağlanır.
                </li>
                <li>
                  <strong>Hassas Kalibrasyon:</strong> Lazer ölçüm ve noktasal hizalama ile görüntü bozulması
                  sıfıra yakın seviyeye indirilir.
                </li>
              </ul>

              <h2 id="sonuc">Sonuç: Geleceğin Lansmanını Bugün Yaşayın</h2>
              <p>
                2026 itibarıyla kurumsal etkinlikler; dome çadır ve 360° mapping mühendisliği olmadan eksik
                kalıyor. Biz bu yapıları yalnızca bir çadır değil; veri, mühendislik ve deneyim odaklı bir
                prodüksiyon sistemi olarak ele alıyoruz.
              </p>

              <p className="not-prose mt-6">
                Dicle Fest kalitesinde bir proje mi planlıyorsunuz?
              </p>

              <div className="not-prose mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div>
                  <p className="text-lg font-semibold text-blue-900">
                    👉 Dome Çadır &amp; Teknik Prodüksiyon Teklifi
                  </p>
                  <p className="text-sm text-blue-800">
                    2 saat içinde 3D yerleşim planı ve mapping konsepti için iletişime geçin.
                  </p>
                  <p className="text-sm text-blue-800 mt-2">
                    Diğer seçenekler:{" "}
                    <Link href="/cadir-kiralama" className="underline font-semibold">
                      Çadır kiralama seçeneklerimizi görün
                    </Link>
                  </p>
                </div>

                <Link
                  href="/sahne-kiralama"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Teklif Alın
                </Link>
              </div>

              <BlogRelatedLinks
                services={[
                  { href: "/cadir-kiralama", label: "Çadır Kiralama" },
                  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
                ]}
              />
      </BlogLayout>
    </>
  );}

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

import {
  BASE_SITE_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";

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
const MODIFIED_DATE = "2026-01-20T00:00:00+03:00";

/* ================== AUTHOR ================== */
const AUTHOR_NAME = "Sahneva Teknik";

/* ================== ASSETS ================== */
const HERO_IMAGE = "/img/blog/dome-cadir-360-mapping-hero.webp";
const OG_IMAGE = "/img/og/sahneva-og.webp";

const IMG_KURULUM = "/img/blog/dome-cadir-kurulum.webp";
const IMG_IC_MEKAN = "/img/blog/dome-cadir-ic-mekan.webp";
const IMG_MAPPING = "/img/blog/dome-cadir-projeksiyon-mapping.webp";
const IMG_GECE = "/img/blog/dome-cadir-gece-ambiyans.webp"; // ⚠️ .web değil .webp varsaydım

const YT_URL = "https://www.youtube.com/watch?v=JNzGlNzNRuk";
const YT_ID = "JNzGlNzNRuk";
const YT_EMBED = `https://www.youtube-nocookie.com/embed/${YT_ID}?rel=0&modestbranding=1`;

/* ================== META ================== */
export const metadata = {
  title:
    "Kurumsal Etkinliklerde Dome Çadır Devrimi: 360° Mapping | Sahneva",
  description:
    "Pnömatik/geodezik dome çadır + 360° video mapping ile kurumsal lansmanlarda yeni dönem. Batman Dicle Elektrik – Dicle Fest örneği, kurulum, akustik ve senkronizasyon detayları.",
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
        uploadDate: "2026-01-20",
        embedUrl: `https://www.youtube-nocookie.com/embed/${YT_ID}`,
        contentUrl: YT_URL,
        thumbnailUrl: `${SITE_URL}${HERO_IMAGE}`,
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
        video: { "@id": VIDEO_ID },
      },
      // Optional: globaldeki logo node'unu sadece @id ile işaretle (duplicate olmasın)
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
        Dome Çadır + 360° Mapping
      </li>
    </ol>
  </nav>
);

const TableOfContents = () => (
  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-6 hidden lg:block">
    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
      İçindekiler
    </h4>
    <ul className="space-y-2 text-sm">
      {[
        { id: "dome-gucu", label: "1. Dome Çadırın Kurumsal Gücü" },
        { id: "immersif", label: "1.1 İmmersif Atmosfer" },
        { id: "guvenlik", label: "1.2 Mühendislik & Güvenlik" },
        { id: "hizli-kurulum", label: "1.3 Hızlı ve Modüler Operasyon" },
        { id: "mapping", label: "2. 360° Mapping Mühendisliği" },
        { id: "projeksiyon", label: "2.1 Lümen / Warp / Edge Blending" },
        { id: "senkron", label: "2.2 Tam Senkronizasyon" },
        { id: "zorluklar", label: "3. Teknik Zorluklar & Çözümler" },
        { id: "sonuc", label: "Sonuç" },
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

function YouTubeEmbed() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={YT_EMBED}
          title="Dome Çadır & 360° Mapping Video"
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
      {/* Breadcrumb JSON-LD */}
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />

      {/* Article + WebPage + Video JSON-LD */}
      <ArticleSchema />

      <header className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-blue-900/25 z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Dome çadır içinde 360° video mapping ile kapsayıcı lansman atmosferi"
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Kurumsal Organizasyon / Çadır Kiralama
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] mb-6 tracking-tight">
            Kurumsal Etkinliklerde Dome Çadır Devrimi: Pnömatik Yapı ve 360° Mapping
            ile Geleceğin Lansmanları
          </h1>

          <p className="text-lg md:text-xl text-slate-200 mb-6">
            Yayın Tarihi: 20 Ocak 2026 | Okuma Süresi: 9 dk | Kategori: Kurumsal
            Organizasyon / Çadır Kiralama
          </p>

          <p className="text-base md:text-lg text-slate-200">
            Prestij artık dört duvar arasında değil; gökyüzüne açılan, teknolojiyle
            nefes alan fütüristik yapılarda. 2026 itibarıyla lansmanların yeni
            standardı: pnömatik/geodezik dome ve 360° video mapping.
          </p>
        </div>
      </header>

      <main className="bg-white">
        <section className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            <aside>
              <TableOfContents />
            </aside>

            <article className="prose prose-lg max-w-none">
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
                <YouTubeEmbed />
                <p className="mt-3 text-sm text-gray-600">
                  Video kaynağı:{" "}
                  <a href={YT_URL} target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>{" "}
                  (embed: youtube-nocookie).
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
                    <Link href="/sahne-kiralama" className="underline font-semibold">
                      çadır kiralama seçeneklerimizi görün
                    </Link>
                  </p>
                </div>

                <Link
                  href="/cadir-kiralama"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Teklif Alın
                </Link>
              </div>

              <p className="mt-10">
                Profesyonel{" "}
                <Link href="/iletisim">çadır kiralama</Link>{" "}
                ve{" "}
                <Link href="/ses-isik-sistemleri">ses &amp; ışık sistemleri</Link>{" "}
                çözümleri için ekibimizle iletişime geçebilirsiniz.
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

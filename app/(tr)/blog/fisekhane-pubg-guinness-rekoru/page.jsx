// app/(tr)/blog/fisekhane-pubg-guinness-rekoru/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";

import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

/* ================== URLS ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? BASE_SITE_URL).replace(
  /\/$/,
  ""
);
const BLOG_PATH = "/blog/fisekhane-pubg-guinness-rekoru";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

/* ================== DATES ================== */
const PUBLISH_DATE = "2026-01-25T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile("app/(tr)/blog/fisekhane-pubg-guinness-rekoru/page.jsx", "2026-02-08T00:00:00+03:00");

/* ================== AUTHOR ================== */
const AUTHOR_NAME = "Sahneva Teknik";

/* ================== ASSETS ================== */
const HERO_IMAGE = "/img/blog/fisekhane-pubg-etkinlik.webp";
const OG_IMAGE = HERO_IMAGE;

const FEATURED_IMAGE = HERO_IMAGE;
const IMAGES = null;
const STAGE_SERVICE_PATH = "/sahne-kiralama";
const PODIUM_SERVICE_PATH = "/podyum-kiralama";
const LED_SERVICE_PATH = "/led-ekran-kiralama";
const WA_URL = "https://wa.me/905453048671?text=" + encodeURIComponent("Merhaba, projem için teklif almak istiyorum.");

const IMG_STAGE = "/img/blog/fisekhane-pubg-sahne-kurulumu.webp";
const IMG_GUINNESS = "/img/blog/fisekhane-pubg-guinness-rekoru.webp";
const IMG_CHOREO = "/img/blog/fisekhane-pubg-koreografili.webp";
const IMG_CONFETTI = "/img/blog/fisekhane-pubg-rekor-ani.webp";

/* ================== META ================== */
export const metadata = {
  title: "Fişekhane PUBG Mobile Guinness Dünya Rekoru™",
  description:
    "Fişekhane’de gerçekleşen PUBG Mobile etkinliğinde sahne/podyum, LED ekran, ses-ışık, teknik destek ve canlı yayın/çekim altyapısı tarafımızdan sağlandı.",
  image: HERO_IMAGE,
  alternates: { canonical: BLOG_URL },
  openGraph: {
    title: "Fişekhane’de PUBG Mobile Guinness Dünya Rekoru™ | Sahneva Teknik Destek",
    description:
      "Sahne/podyum, LED ekran, ses-ışık, teknik operasyon ve canlı yayın/çekim süreçlerine teknik destek.",
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Fişekhane’de PUBG Mobile etkinliği ve teknik prodüksiyon atmosferi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fişekhane’de PUBG Mobile Guinness Dünya Rekoru™",
    description:
      "Etkinlikte sahne/podyum, LED ekran, ses-ışık ve canlı yayın/çekim altyapısına teknik destek.",
    images: [`${SITE_URL}${OG_IMAGE}`],
  },
  keywords: [
    "fisekhane etkinlik",
    "pubg mobile etkinlik istanbul",
    "guinness dünya rekoru pubg",
    "sahne kurulumu",
    "podyum kiralama",
    "led ekran kiralama",
    "ses sistemi kiralama",
    "ışık sistemi kiralama",
    "teknik prodüksiyon",
    "canlı yayın teknik destek",
  ],
  authors: [{ name: AUTHOR_NAME }],
};

/* ================== JSON-LD (GLOBAL ILE UYUMLU) ================== */
function ArticleSchema() {
  const WEBPAGE_ID = `${BLOG_URL}#webpage`;
  const ARTICLE_ID = `${BLOG_URL}#article`;
  const PRIMARY_IMAGE_ID = `${BLOG_URL}#primaryimage`;

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
        name: "Fişekhane’de PUBG Mobile Guinness Dünya Rekoru™ Türkiye Buluşması",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        primaryImageOfPage: { "@id": PRIMARY_IMAGE_ID },
        inLanguage: "tr-TR",
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
      },
      {
        // Blog içinde dursa da “haber/ref” formatı için NewsArticle iyi sinyal verir
        "@type": "NewsArticle",
        "@id": ARTICLE_ID,
        isPartOf: { "@id": WEBPAGE_ID },
        mainEntityOfPage: { "@id": WEBPAGE_ID },
        headline:
          "Fişekhane’de PUBG Mobile Guinness Dünya Rekoru™ Türkiye Buluşması: Teknik Altyapı Desteği",
        description:
          "Fişekhane’de gerçekleşen PUBG Mobile etkinliğinde sahne/podyum, LED ekran, ses-ışık, teknik destek ve canlı yayın/çekim altyapısı tarafımızdan sağlandı.",
        image: { "@id": PRIMARY_IMAGE_ID },
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        inLanguage: "tr-TR",
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        articleSection: ["Etkinlik", "E-Spor", "Teknik Prodüksiyon"],
      },
      {
        "@type": "Event",
        "@id": `${BLOG_URL}#event`,
        name: "PUBG Mobile Guinness Dünya Rekoru™ Türkiye Buluşması",
        startDate: "2026-01-25T00:00:00+03:00",
        endDate: "2026-01-25T23:59:59+03:00",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "FİŞEKHANE",
          address: {
            "@type": "PostalAddress",
            addressLocality: "İstanbul",
            addressCountry: "TR",
          },
        },
        organizer: { "@id": ORGANIZATION_ID },
      },
    ],
  };

  const safe = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <script
      id="pubg-fisekhane-ld-json"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safe }}
    />
  );
}

/* ================== UI HELPERS ================== */
function Figure({ src, alt, caption, w = 1200, h = 800 }) {
  return (
    <figure className="not-prose rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm my-8">
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        className="w-full h-auto object-cover"
        sizes="(min-width: 1024px) 960px, 100vw"
        loading="lazy"
      />
      {caption ? (
        <figcaption className="px-4 py-3 text-sm text-gray-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* ================== PAGE ================== */
export default function BlogPostFisekhanePubgGuinness() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "Fişekhane PUBG Mobile Guinness Dünya Rekoru™", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
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
        readTime="1\u20133 dk okuma"
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

              <h2 id="kisa-bilgi">Kısa Bilgi</h2>
              <p>
                25 Ocak’ta İstanbul <strong>Fişekhane</strong>’de gerçekleştirilen
                PUBG Mobile buluşmasında, organizasyonun sahne ve teknik altyapı
                ihtiyaçları tarafımızdan karşılandı. Etkinliğin kurulumdan
                etkinlik içi operasyona kadar olan sürecinde, sahada aktif
                teknik ekip ile operasyonel süreklilik sağlandı.
              </p>

              <Figure
                src={IMG_GUINNESS}
                alt="PUBG Mobile Guinness Dünya Rekoru sertifikasıyla Fişekhane’de kutlama anı"
                caption="Fişekhane’de PUBG Mobile etkinliğinde Guinness Dünya Rekoru™ sonrası kutlama anı."
              />

              <h2 id="sagladigimiz-hizmetler">Sağladığımız Hizmetler</h2>
              <p>
                Etkinlik kapsamında ihtiyaç duyulan tüm kritik teknik başlıklarda
                entegre destek sağladık. Sahne üzeri akış, görsel içerik
                yönetimi, ses-ışık dengesi ve yayın/çekim süreçlerinin birlikte
                ilerlemesi için tek plan üzerinden ilerledik.
              </p>

              <ul>
                <li>
                  <strong>Sahne & podyum kurulumu:</strong> Modüler platform
                  sistemleri, sahne önü geçiş ve güvenli kullanım düzeni.
                </li>
                <li>
                  <strong>LED ekran:</strong> Sahne ve alan içerisinde görsel
                  içerik akışına uygun kurulum ve entegrasyon.
                </li>
                <li>
                  <strong>Ses sistemi:</strong> Mekân akustiğine göre yerleşim,
                  kontrollü ses dağılımı ve net konuşma anlaşılabilirliği.
                </li>
                <li>
                  <strong>Işık kurgusu:</strong> Sahne atmosferi ve kamera
                  görüntüsünü destekleyen ışık dengesi.
                </li>
                <li>
                  <strong>Teknik destek:</strong> Kurulum, etkinlik anı ve söküm
                  süreçlerinde sahada operasyonel ekip.
                </li>
                <li>
                  <strong>Canlı yayın & çekim desteği:</strong> Yayın akışı,
                  sahne-görüntü uyumu ve teknik koordinasyon.
                </li>
              </ul>

              <Figure
                src={IMG_CHOREO}
                alt="PUBG Mobile rekor etkinliği kapsamında Fişekhane’de koreografili an"
                caption="Etkinlik akışında eş zamanlı koreografili anlar; kurgunun ve sahne düzeninin yayın tarafıyla birlikte yönetilmesini gerektirdi."
              />

              <h2 id="kurulum-operasyon">Kurulum ve Operasyon</h2>
              <p>
                Fişekhane’nin mimari yapısı ve etkinlik yoğunluğu dikkate
                alınarak sahne/podyum yerleşimi planlandı. Kurulum sırasında
                kablo güzergâhları, güvenli geçiş alanları ve teknik ekipman
                konumları belirlenerek etkinlik süresince akıcı bir operasyon
                hedeflendi.
              </p>

              <Figure
                src={IMG_STAGE}
                alt="PUBG Mobile etkinliği öncesinde Fişekhane’de yapılan sahne ve podyum kurulumu"
                caption="Etkinlik öncesi sahne/podyum kurulumu: alan akışı ve teknik ekipman yerleşimi buna göre planlandı."
              />

              <h2 id="yayin-cekim">Canlı Yayın ve Çekim Desteği</h2>
              <p>
                Canlı yayın ve çekim tarafında, sahne kurgusu ile ışık dengesi ve
                görsel içerik akışı birlikte düşünülerek teknik destek sağlandı.
                Bu yaklaşım, hem katılımcı deneyimini hem de görüntü
                sürekliliğini güçlendirdi.
              </p>

              <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-5 my-8 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-xl" aria-hidden="true">
                    ✅
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Tek noktadan entegre teknik çözüm
                    </p>
                    <p className="text-slate-700 mt-2">
                      Sahne/podyum + LED ekran + ses/ışık + teknik ekip + yayın/çekim
                      koordinasyonu; tek operasyon planı içinde yönetildi.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="rekor-ani">Rekor Anı ve Atmosfer</h2>
              <p>
                Rekor anının sahnede güçlü bir atmosfere dönüşebilmesi için sahne
                ışığı, görsel akış ve alan düzeni birlikte yönetildi. Finalde
                ortaya çıkan kutlama atmosferi, etkinliğin en güçlü anlarından
                birini oluşturdu.
              </p>

              <Figure
                src={IMG_CONFETTI}
                alt="Fişekhane’de PUBG Mobile Guinness Dünya Rekoru sonrası genel kutlama atmosferi"
                caption="Rekor sonrası kutlama atmosferi: sahne ışıkları ve alan kurgusu ile bütünleşen final anı."
              />

              <h2 id="benzer-etkinlikler">Benzer Etkinlikler İçin</h2>
              <p>
                E-spor, lansman, konser ve{" "}
                <Link href="/kurumsal-organizasyon">kurumsal organizasyonlarda</Link>; sahne,
                LED ekran, ses-ışık, teknik operasyon ve yayın/çekim süreçleri
                birlikte planlandığında riskler azalır ve etkinlik kalitesi
                belirgin şekilde artar.
              </p>

              <p>
                <Link href="/podyum-kiralama">Podyum</Link>,{" "}
                <Link href="/led-ekran-kiralama">LED ekran</Link> ve{" "}
                <Link href="/ses-isik-sistemleri">ses/ışık</Link> çözümlerimiz için
                ekibimizle iletişime geçebilirsiniz.
              </p>

              <div className="not-prose mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div>
                  <p className="text-lg font-semibold text-blue-900">
                    👉 Etkinliğiniz için teknik planlama yapalım
                  </p>
                  <p className="text-sm text-blue-800">
                    Sahne + LED ekran + ses/ışık + yayın/çekim desteği dahil
                    entegre teklif hazırlayalım.
                  </p>
                </div>

                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Teklif Alın
                </Link>
              </div>

              <BlogRelatedLinks
                services={[
                  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
                  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
                ]}
              />
      </BlogLayout>
    </>
  );}

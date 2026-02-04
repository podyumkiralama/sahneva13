import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";

import heroImg from "@/public/img/blog/pagoda-cadir-kurumsal-etkinlik.webp";
import clearTopImg from "@/public/img/blog/kurumsal-etkinlik-cadir.webp";
import domeImg from "@/public/img/blog/dome-cadir-ic-mekan.webp";
import BlogLayout from "@/components/blog/BlogLayout";

/* ================== YAPILANDIRMA & SABİTLER ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(
  /\/$/,
  ""
);

const BLOG_PATH = "/blog/organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const FEATURED_IMAGE = "/img/blog/pagoda-cadir-kurumsal-etkinlik.webp";
const TENT_SERVICE_PATH = "/cadir-kiralama";

const PUBLISH_DATE = "2026-02-12T00:00:00+03:00";
const MODIFIED_DATE = "2026-02-12T00:00:00+03:00";
const AUTHOR_NAME = "Sahneva İçerik Ekibi";

const TITLE = "2026 Çadır Kiralama Rehberi: Organizasyon İçin Seçenekler";
const DESCRIPTION =
  "Kurumsal etkinlikten düğüne, fuardan festivale: 2026 çadır kiralama rehberi. Doğru çadır seçimi, kurulum süreci ve maliyetleri hızlıca öğrenin.";

/* ================== META DATA ================== */
export const metadata = {
  title: `${TITLE}`,
  description: DESCRIPTION,
  alternates: { canonical: BLOG_URL },
  image: FEATURED_IMAGE,
  openGraph: {
    title: `${TITLE} | Sahneva Organizasyon`,
    description: DESCRIPTION,
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva Organizasyon",
    images: [
      {
        url: `${SITE_URL}${FEATURED_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Organizasyonlar için 2026 çadır kiralama rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${FEATURED_IMAGE}`],
  },
  keywords: [
    "çadır kiralama",
    "organizasyon çadırı",
    "kurumsal etkinlik",
    "düğün çadırı",
    "fuar çadırı",
    "festival çadırı",
    "yüksek peak çadır",
    "modüler çadır",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  other: {
    "article:published_time": PUBLISH_DATE,
    "article:modified_time": MODIFIED_DATE,
    "article:author": AUTHOR_NAME,
    "article:section": "Çadır Kiralama",
  },
};

/* ================== FAQ VERİLERİ ================== */
const FAQ_ITEMS = [
  {
    question: "Kurumsal etkinlikler için en güvenli çadır sistemi hangisi?",
    answer:
      "Alüminyum konstrüksiyon çerçeve çadırlar en güvenli ve teknik entegrasyona uygun çözümdür. Truss, LED ekran ve iklimlendirme altyapıları için ideal taşıyıcı yapıyı sunar.",
  },
  {
    question: "Düğün ve özel günlerde çadır seçimi nasıl olmalı?",
    answer:
      "Şeffaf tavanlı veya yüksek kubbeli sistemler hem estetik hem de havalandırma açısından avantaj sağlar. Zemin analizi ve rüzgar hesabı mutlaka yapılmalıdır.",
  },
  {
    question: "Fuar ve festival alanlarında hangi çadırlar tercih edilir?",
    answer:
      "High-peak ve geniş modül çadırlar büyük insan trafiği için uygundur. Stand yerleşimi, yangın çıkışları ve elektrik dağıtımı planlamasıyla birlikte düşünülmelidir.",
  },
  {
    question: "Çadır kiralama maliyetini en çok ne etkiler?",
    answer:
      "Metrekare, zemin koşulları, ankraj ihtiyacı, iklimlendirme, LED ekran/sahne entegrasyonu ve lojistik giderleri maliyetin ana belirleyicileridir.",
  },
];

const STAT_ITEMS = [
  {
    value: "%60",
    label: "Yanlış planlama kaynaklı bütçe sapması",
  },
  {
    value: "4x",
    label: "Teknik keşif yapılan projelerde risk azalması",
  },
  {
    value: "12m",
    label: "LED ekran + truss entegrasyonlu tipik kurulum",
  },
  {
    value: "24s",
    label: "Rüzgar yükü kontrolü gereken ortalama süre",
  },
];

/* ================== UI PARÇALARI ================== */
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
        2026 Çadır Kiralama Rehberi
      </li>
    </ol>
  </nav>
);

const TableOfContents = () => (
  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-6 hidden lg:block">
    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">İçindekiler</h4>
    <ul className="space-y-2 text-sm">
      {[
        { id: "neden-cadir", label: "Çadırın gizli rolü" },
        { id: "kurumsal", label: "Kurumsal etkinlikler" },
        { id: "dugun", label: "Düğün ve özel günler" },
        { id: "fuar", label: "Fuar & festival alanları" },
        { id: "kurulum", label: "Kurulum süreci" },
        { id: "maliyet", label: "Maliyet belirleyicileri" },
        { id: "risk", label: "Planlama riski" },
        { id: "sonuc", label: "Sonuç" },
        { id: "faq", label: "Sık Sorulan Sorular" },
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

const StatCard = ({ value, label }) => (
  <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
    <div className="text-2xl md:text-3xl font-black text-gray-900">{value}</div>
    <p className="mt-2 text-sm text-gray-600 leading-snug">{label}</p>
  </div>
);

/* ================== SCHEMA (JSON-LD) ================== */
function ArticleSchema() {
  const site = String(SITE_URL || "").replace(/\/$/, "");
  const orgId = `${site}/#org`;
  const editorId = `${site}/#editor`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BLOG_URL}#blogposting`,
        headline: metadata?.title || "Blog Yazısı",
        description: metadata?.description,
        image: `${site}${FEATURED_IMAGE}`,
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
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

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}

/* ================== ANA SAYFA ================== */
export default function Page() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: TITLE, url: BLOG_URL },
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
        readTime="2\u20134 dk okuma"
        primaryLinks={[
          { href: (typeof STAGE_SERVICE_PATH !== "undefined" ? STAGE_SERVICE_PATH : "/sahne-kiralama"), label: "Sahne Kiralama", icon: "🎭" },
          { href: (typeof PODIUM_SERVICE_PATH !== "undefined" ? PODIUM_SERVICE_PATH : "/podyum-kiralama"), label: "Podyum Kiralama", icon: "🧱" },
          { href: (typeof LED_SERVICE_PATH !== "undefined" ? LED_SERVICE_PATH : "/led-ekran-kiralama"), label: "LED Ekran", icon: "🟦" },
        ]}
        whatsappUrl={(typeof WA_URL !== "undefined" ? WA_URL : undefined)}
      >

                <h2 id="neden-cadir">Organizasyonun görünmeyen sigortası: Çadır</h2>
                <p>
                  Açık hava organizasyonlarında her şey hazır gibi görünür: sahne ışıkları parlar,
                  ses net, LED ekranlar kristal... Ancak bir anda rüzgar çıkar, zemin yumuşar ve o
                  “mükemmel” kurulum sallanmaya başlar. İşte o an anlarsınız ki, etkinliğin asıl
                  gizli kahramanı <strong>çadır sistemidir</strong>.
                </p>
                <p>
                  Yanlış çadır seçimi sadece konforu değil, tüm organizasyonun güvenliğini riske atar.
                  Doğru çadır kiralama ise etkinliğin görünmeyen sigortasıdır. Sahneva Organizasyon
                  olarak yılların saha tecrübesiyle söylüyoruz: Çadır kiralama bir tente işi değil;
                  mühendislik, rüzgar yükü hesabı, zemin analizi ve operasyon planlamasıdır.
                </p>
                <ul>
                  <li>Çadır kiralama</li>
                  <li>Sahne kurulumu</li>
                  <li>LED ekran sistemleri</li>
                  <li>Ses ve ışık entegrasyonu</li>
                </ul>
                <p>
                  İstanbul Kağıthane merkezli ekibimizle Türkiye genelinde anahtar teslim hizmet
                  sunuyoruz.
                </p>

                <h2 id="kurumsal">1️⃣ Kurumsal Etkinlikler, Lansmanlar ve Bayi Toplantıları</h2>
                <p>
                  Prestij ve teknik güvenlik birlikte düşünülmelidir. Tercih edilen sistem:
                  alüminyum konstrüksiyon çerçeve çadırlar (4–6 metre yan yükseklik).
                </p>
                <ul>
                  <li>Truss sistemleri sorunsuz entegre edilir.</li>
                  <li>Line array ses sistemleri taşınabilir.</li>
                  <li>Dev LED ekran montajı güvenle yapılır.</li>
                  <li>Klima ve havalandırma kurulabilir.</li>
                </ul>
                <p>
                  Sahadaki gerçeklik: Bir lansman projesinde 300 m² alanda ağır truss ve 12 metrelik
                  LED ekran kurduk. Forklift ile ana kirişler kaldırıldı, zemin eğimi milimetrik
                  ölçüldü, ankraj beton bloklarla desteklendi. Tonlarca yük altında tek titreşim
                  yaşanmadı.
                </p>
                <figure>
                  <Image
                    src={heroImg}
                    alt="Kurumsal etkinliklerde pagoda çadır kurulumu"
                    width={heroImg.width}
                    height={heroImg.height}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                  <figcaption>
                    Kurumsal etkinliklerde pagoda ve çerçeve sistemler, truss ve LED entegrasyonu için idealdir.
                  </figcaption>
                </figure>

                <h2 id="dugun">2️⃣ Düğün, Nişan ve Özel Günler</h2>
                <p>
                  Estetik önemlidir. Ancak teknik altyapı sağlam değilse o estetik risk haline gelir.
                  Tercih edilen sistemler: şeffaf tavanlı (clear-top) çadırlar, yüksek kubbeli
                  yapılar ve 5–6 metre tavan yüksekliği.
                </p>
                <p>Bu sistemler avize, dekor ve ışık askılarına uygundur; hava sirkülasyonu sağlar.</p>
                <p>
                  Güvenlik detayı: Bir düğünde ani fırtınada, önceden yaptığımız zemin sertlik analizi,
                  rüzgar yönü hesabı, çapraz gergiler ve beton blok sabitlemeleri sayesinde gece
                  sorunsuz geçti.
                </p>
                <figure>
                  <Image
                    src={clearTopImg}
                    alt="Şeffaf tavanlı düğün çadırı kurulumu"
                    width={clearTopImg.width}
                    height={clearTopImg.height}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                  <figcaption>
                    Şeffaf tavanlı çadırlar, dekor ve aydınlatma kurulumunda etkileyici bir atmosfer yaratır.
                  </figcaption>
                </figure>

                <h2 id="fuar">3️⃣ Fuar, Sergi ve Festival Alanları</h2>
                <p>
                  Geniş alanlar ve yüksek insan trafiği için modüler sistemler şarttır. Tercih edilen:
                  yüksek açıklıklı (high peak) sistemler, Röder tipi geniş modül çadırlar ve 100–1000
                  m² arası yapılar.
                </p>
                <ul>
                  <li>Stand yerleşim planı (layout)</li>
                  <li>Yangın çıkış koridorları</li>
                  <li>Elektrik dağıtım planlaması</li>
                  <li>Forklift giriş-çıkış alanı</li>
                </ul>
                <p>
                  Yanlış planlanan lojistik saatlerce gecikmeye yol açar. Bu yüzden ekiplerimiz
                  kurulumdan önce detaylı teknik plan çizer.
                </p>
                <figure>
                  <Image
                    src={domeImg}
                    alt="Festival ve sergi alanları için geniş modül çadır örneği"
                    width={domeImg.width}
                    height={domeImg.height}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                  <figcaption>
                    Yüksek peak ve geniş açıklıklı çadırlar, yoğun insan trafiğini rahat yönetmenizi sağlar.
                  </figcaption>
                </figure>

                <h2 id="kurulum">Profesyonel Çadır Kurulum Süreci</h2>
                <p>“Kurulum ne kadar sürer?” cevabı: zemine, hava durumuna ve alana bağlıdır.</p>
                <div className="not-prose grid gap-4 md:grid-cols-3 my-8">
                  {[
                    {
                      title: "Teknik Keşif (2–4 Hafta Önce)",
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
                  Büyük ölçekli işlerde 6–12 kişilik ekip, 1–2 forklift ve 1 tam gün operasyon
                  gerekebilir.
                </p>

                <h2 id="maliyet">2026 Çadır Kiralama Maliyetlerini Etkileyen Faktörler</h2>
                <p>Maliyetler metrekare, süre, mevsim, zemin ve ek ihtiyaçlara göre değişir.</p>
                <ul>
                  <li>Metrekare büyüklüğü</li>
                  <li>Zemin koşulları</li>
                  <li>Ek ankraj ihtiyacı</li>
                  <li>Klima ve iklimlendirme</li>
                  <li>LED ekran / sahne entegrasyonu</li>
                  <li>Forklift / vinç gereksinimi</li>
                  <li>İstanbul dışı lojistik</li>
                </ul>
                <div className="not-prose rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900">Teklif alırken mutlaka sorun:</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li>• Teknik keşif yapıldı mı?</li>
                    <li>• Rüzgar yükü hesabı var mı?</li>
                    <li>• İSG standartları uygulanıyor mu?</li>
                    <li>• Sabitleme yöntemi nedir?</li>
                  </ul>
                </div>

                <h2 id="risk">En Büyük Risk: Planlama Eksikliği</h2>
                <ul>
                  <li>Yetersiz sabitleme</li>
                  <li>Yanlış zemin analizi</li>
                  <li>Forklift trafiği hesapsızlığı</li>
                  <li>Aşırı yük taşıma</li>
                </ul>
                <p>Profesyonel hizmet riski sıfıra yaklaştırır.</p>

                <h2 id="sonuc">Sonuç: Başarılı Organizasyonun Temeli Güvendir</h2>
                <p>
                  Doğru çadır sadece yağmurdan korumaz; markanızın itibarını, misafirlerinizin
                  güvenliğini ve emeğinizi taşır. Etkinlik günü herkes sahneye bakarken, arka planda
                  forklift operatörü milimetrik manevra yapar, teknik ekip bağlantıları iki kez
                  kontrol eder, rüzgar hesapları gözden geçirilir. Ve siz içiniz rahat izlersiniz.
                </p>
                <p className="font-semibold">Sahneva Organizasyon olarak biz, gökyüzünü güvenle mekâna indiriyoruz.</p>

                <h2 id="faq">Sık Sorulan Sorular</h2>
                <div className="not-prose space-y-3">
                  {FAQ_ITEMS.map((item) => (
                    <details
                      key={item.question}
                      className="rounded-2xl border border-gray-200 bg-white p-4"
                    >
                      <summary className="cursor-pointer text-sm font-semibold text-gray-900">
                        {item.question}
                      </summary>
                      <p className="mt-3 text-sm text-gray-700">{item.answer}</p>
                    </details>
                  ))}
                </div>
      </BlogLayout>
    </>
  );}
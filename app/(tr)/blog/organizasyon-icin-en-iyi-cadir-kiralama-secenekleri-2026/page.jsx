import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";

import heroImg from "@/public/img/blog/pagoda-cadir-kurumsal-etkinlik.webp";
import clearTopImg from "@/public/img/blog/kurumsal-etkinlik-cadir.webp";
import domeImg from "@/public/img/blog/dome-cadir-ic-mekan.webp";

/* ================== YAPILANDIRMA & SABİTLER ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(
  /\/$/,
  ""
);

const BLOG_PATH = "/blog/organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const FEATURED_IMAGE = "/img/blog/pagoda-cadir-kurumsal-etkinlik.webp";

const PUBLISH_DATE = "2026-02-12T00:00:00+03:00";
const MODIFIED_DATE = "2026-02-12T00:00:00+03:00";
const AUTHOR_NAME = "Sahneva İçerik Ekibi";

const TITLE =
  "Organizasyon İçin En İyi Çadır Kiralama Seçenekleri (2026 Güncel Rehber)";
const DESCRIPTION =
  "Kurumsal etkinlikten düğüne, fuardan festivale: 2026 çadır kiralama rehberi. Doğru çadır seçimi, kurulum süreci, maliyet belirleyicileri ve güvenlik kontrol listesi.";

/* ================== META DATA ================== */
export const metadata = {
  title: `${TITLE} | Sahneva Organizasyon`,
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
    color: "text-rose-500",
  },
  {
    value: "4x",
    label: "Teknik keşif yapan projelerde risk azalması",
    color: "text-emerald-500",
  },
  {
    value: "12m",
    label: "LED ekran + truss entegrasyonlu tipik kurulum",
    color: "text-sky-500",
  },
  {
    value: "24s",
    label: "Rüzgar yükü kontrolü yapılması gereken süre",
    color: "text-amber-500",
  },
];

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

function SectionCard({ id, title, children }) {
  return (
    <section
      id={id}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm scroll-mt-28"
    >
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-6 text-gray-700">{children}</div>
    </section>
  );
}

/* ================== SAYFA ================== */
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

      <header className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Çadır Kiralama Rehberi
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-[1.15] mb-5 tracking-tight text-gray-900">
            {TITLE}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
            {DESCRIPTION}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mt-6">
            <time dateTime={PUBLISH_DATE} className="flex items-center gap-2">
              <span>📅</span> 12 Şubat 2026
            </time>
            <span className="flex items-center gap-2"><span>⏱️</span> 8–10 dk okuma</span>
            <span className="flex items-center gap-2"><span>✍️</span> {AUTHOR_NAME}</span>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-10">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src={heroImg}
              alt="Kurumsal organizasyonlar için profesyonel çadır kurulumu"
              className="h-auto w-full object-cover"
              priority
              sizes="100vw"
              placeholder="blur"
            />
          </div>
        </div>
      </header>

      <section className="relative -mt-10 z-30 px-4" aria-label="Öne Çıkan Veriler">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-100">
              {STAT_ITEMS.map((stat) => (
                <div key={stat.label} className="text-center group px-2">
                  <div
                    className={`text-3xl md:text-4xl font-black ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium leading-snug max-w-[160px] mx-auto">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-semibold text-gray-900">İçindekiler</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {[
                  { id: "neden-cadir", label: "Çadırın gizli rolü" },
                  { id: "kurumsal", label: "Kurumsal etkinlikler" },
                  { id: "dugun", label: "Düğün ve özel günler" },
                  { id: "fuar", label: "Fuar & festival alanları" },
                  { id: "kurulum", label: "Kurulum süreci" },
                  { id: "maliyet", label: "Maliyet belirleyicileri" },
                  { id: "risk", label: "Planlama riski" },
                  { id: "sonuc", label: "Sonuç" },
                ].map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="hover:text-blue-600">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-6">
            <section id="neden-cadir" className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Sahneva Organizasyon Perspektifi
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-gray-900">
                Organizasyonun görünmeyen sigortası: Çadır
              </h2>
              <p className="mt-4 text-sm leading-6 text-gray-700">
                Açık hava organizasyonlarında her şey hazır gibi görünür: sahne ışıkları parlar,
                ses net, LED ekranlar kristal... Ancak bir anda rüzgar çıkar, zemin yumuşar ve o
                “mükemmel” kurulum sallanmaya başlar. İşte o an anlarsınız ki, etkinliğin asıl
                gizli kahramanı <strong>çadır sistemidir</strong>.
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-700">
                Yanlış çadır seçimi sadece konforu değil, tüm organizasyonun güvenliğini riske atar.
                Doğru çadır kiralama ise etkinliğin görünmeyen sigortasıdır. Sahneva Organizasyon
                olarak yılların saha tecrübesiyle söylüyoruz: Çadır kiralama bir tente işi değil;
                mühendislik, rüzgar yükü hesabı, zemin analizi ve operasyon planlamasıdır.
              </p>
              <div className="mt-5 grid gap-2 text-sm text-gray-700 md:grid-cols-2">
                <span>• Çadır kiralama</span>
                <span>• Sahne kurulumu</span>
                <span>• LED ekran sistemleri</span>
                <span>• Ses ve ışık entegrasyonu</span>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                İstanbul Kağıthane merkezli ekibimizle Türkiye genelinde anahtar teslim hizmet
                sunuyoruz.
              </p>
            </section>

            <SectionCard id="kurumsal" title="1️⃣ Kurumsal Etkinlikler, Lansmanlar ve Bayi Toplantıları">
              <p>
                Prestij ve teknik güvenlik birlikte düşünülmelidir. Tercih edilen sistem:
                alüminyum konstrüksiyon çerçeve çadırlar (4–6 metre yan yükseklik).
              </p>
              <ul className="space-y-2">
                <li>• Truss sistemleri sorunsuz entegre edilir.</li>
                <li>• Line array ses sistemleri taşınabilir.</li>
                <li>• Dev LED ekran montajı güvenle yapılır.</li>
                <li>• Klima ve havalandırma kurulabilir.</li>
              </ul>
              <p>
                Sahadaki gerçeklik: Bir lansman projesinde 300 m² alanda ağır truss ve 12 metrelik
                LED ekran kurduk. Forklift ile ana kirişler kaldırıldı, zemin eğimi milimetrik
                ölçüldü, ankraj beton bloklarla desteklendi. Tonlarca yük altında tek titreşim
                yaşanmadı.
              </p>
              <Image
                src={heroImg}
                alt="Kurumsal etkinliklerde pagoda çadır kurulumu"
                className="h-auto w-full rounded-xl object-cover"
              />
            </SectionCard>

            <SectionCard id="dugun" title="2️⃣ Düğün, Nişan ve Özel Günler">
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
              <Image
                src={clearTopImg}
                alt="Şeffaf tavanlı düğün çadırı kurulumu"
                className="h-auto w-full rounded-xl object-cover"
              />
            </SectionCard>

            <SectionCard id="fuar" title="3️⃣ Fuar, Sergi ve Festival Alanları">
              <p>
                Geniş alanlar ve yüksek insan trafiği için modüler sistemler şarttır. Tercih edilen:
                yüksek açıklıklı (high peak) sistemler, Röder tipi geniş modül çadırlar ve 100–1000
                m² arası yapılar.
              </p>
              <ul className="space-y-2">
                <li>• Stand yerleşim planı (layout)</li>
                <li>• Yangın çıkış koridorları</li>
                <li>• Elektrik dağıtım planlaması</li>
                <li>• Forklift giriş-çıkış alanı</li>
              </ul>
              <p>
                Yanlış planlanan lojistik saatlerce gecikmeye yol açar. Bu yüzden ekiplerimiz
                kurulumdan önce detaylı teknik plan çizer.
              </p>
              <Image
                src={domeImg}
                alt="Festival ve sergi alanları için geniş modül çadır örneği"
                className="h-auto w-full rounded-xl object-cover"
              />
            </SectionCard>

            <SectionCard id="kurulum" title="Profesyonel Çadır Kurulum Süreci">
              <p>“Kurulum ne kadar sürer?” cevabı: zemine, hava durumuna ve alana bağlıdır.</p>
              <div className="grid gap-4 md:grid-cols-3">
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
              <p className="text-xs text-gray-500">
                Büyük ölçekli işlerde 6–12 kişilik ekip, 1–2 forklift ve 1 tam gün operasyon
                gerekebilir.
              </p>
            </SectionCard>

            <SectionCard id="maliyet" title="2026 Çadır Kiralama Maliyetlerini Etkileyen Faktörler">
              <p>Maliyetler metrekare, süre, mevsim, zemin ve ek ihtiyaçlara göre değişir.</p>
              <ul className="grid gap-2 md:grid-cols-2">
                <li>• Metrekare büyüklüğü</li>
                <li>• Zemin koşulları</li>
                <li>• Ek ankraj ihtiyacı</li>
                <li>• Klima ve iklimlendirme</li>
                <li>• LED ekran / sahne entegrasyonu</li>
                <li>• Forklift / vinç gereksinimi</li>
                <li>• İstanbul dışı lojistik</li>
              </ul>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <p className="font-semibold text-gray-900">Teklif alırken mutlaka sorun:</p>
                <ul className="mt-3 space-y-2">
                  <li>• Teknik keşif yapıldı mı?</li>
                  <li>• Rüzgar yükü hesabı var mı?</li>
                  <li>• İSG standartları uygulanıyor mu?</li>
                  <li>• Sabitleme yöntemi nedir?</li>
                </ul>
              </div>
            </SectionCard>

            <SectionCard id="risk" title="En Büyük Risk: Planlama Eksikliği">
              <ul className="grid gap-2 md:grid-cols-2">
                <li>• Yetersiz sabitleme</li>
                <li>• Yanlış zemin analizi</li>
                <li>• Forklift trafiği hesapsızlığı</li>
                <li>• Aşırı yük taşıma</li>
              </ul>
              <p>Profesyonel hizmet riski sıfıra yaklaştırır.</p>
            </SectionCard>

            <SectionCard id="sonuc" title="Sonuç: Başarılı Organizasyonun Temeli Güvendir">
              <p>
                Doğru çadır sadece yağmurdan korumaz; markanızın itibarını, misafirlerinizin
                güvenliğini ve emeğinizi taşır. Etkinlik günü herkes sahneye bakarken, arka planda
                forklift operatörü milimetrik manevra yapar, teknik ekip bağlantıları iki kez
                kontrol eder, rüzgar hesapları gözden geçirilir. Ve siz içiniz rahat izlersiniz.
              </p>
              <p className="font-semibold text-gray-900">
                Sahneva Organizasyon olarak biz, gökyüzünü güvenle mekâna indiriyoruz.
              </p>
            </SectionCard>

            <section className="rounded-2xl border border-gray-200 bg-gray-900 p-6 text-white">
              <h2 className="text-lg font-semibold">Ücretsiz Teknik Keşif İçin Hemen İletişime Geçin</h2>
              <p className="mt-2 text-sm text-gray-200">
                Bir sonraki organizasyonunuzda risk almayın. Profesyonel çadır kiralama, sahne,
                LED, ses-ışık anahtar teslim çözümler için ekibimiz hazır.
              </p>
              <div className="mt-4 space-y-1 text-sm text-gray-200">
                <p>📞 +90 545 304 86 71</p>
                <p>✉️ info@sahneva.com</p>
                <p>🌐 www.sahneva.com</p>
              </div>
              <p className="mt-4 text-xs text-gray-400">
                İstanbul Kağıthane&apos;den Türkiye geneline... Harika etkinlikler dileriz! 🌟
              </p>
            </section>

            <BlogRelatedLinks
              services={[
                { href: "/cadir-kiralama", label: "Çadır Kiralama" },
                { href: "/sahne-kiralama", label: "Sahne Kiralama" },
                { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
}

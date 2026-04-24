// app/blog/urun-lansmani-organizasyonu/page.jsx
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import IntentBridge from "@/components/seo/IntentBridge";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";
import { INTENT_MAP } from "@/lib/seo/intentMap";

/* ================== YAPILANDIRMA & SABİTLER ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const BLOG_URL = `${SITE_URL}/blog/urun-lansmani-organizasyonu`;
const PUBLISH_DATE = "2026-03-26T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile("app/(tr)/blog/urun-lansmani-organizasyonu/page.jsx", "2026-03-26T00:00:00+03:00");
const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const HERO_IMAGE = "/img/kurumsal/lansman.webp";
const FEATURED_IMAGE = HERO_IMAGE;
const OG_IMAGE = HERO_IMAGE;
const IMAGES = null;
const WA_URL = "https://wa.me/905453048671?text=" + encodeURIComponent("Merhaba, ürün lansmanı için teklif almak istiyorum.");

/* ================== META DATA ================== */
export const metadata = {
  title: "Ürün Lansmanı Organizasyonu",
  description:
    "Ürün lansmanı için sahne, LED ekran, ses-ışık ve teknik prodüksiyon çözümleri. Türkiye genelinde anahtar teslim kurulum.",
  alternates: {
    canonical: BLOG_URL,
  },
  image: HERO_IMAGE,
  openGraph: {
    title: "Ürün Lansmanı Organizasyonu | Sahneva",
    description:
      "Sahneva ile kusursuz ürün lansmanı: sahne tasarımı, LED ekran, ses-ışık, canlı yayın ve 360° görsel deneyim çözümleri.",
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${HERO_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Ürün lansmanı organizasyonu – profesyonel sahne ve LED ekran prodüksiyonu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ürün Lansmanı Organizasyonu | Sahneva",
    description: "Sahneva ile kusursuz ürün lansmanı organizasyonu.",
    images: [`${SITE_URL}${HERO_IMAGE}`],
  },
  keywords: [
    "ürün lansmanı",
    "lansman organizasyonu",
    "kurumsal lansman",
    "sahne kiralama lansman",
    "LED ekran lansman",
    "etkinlik prodüksiyon",
    "lansman sahne tasarımı",
    "canlı yayın lansman",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  date: PUBLISH_DATE,
};

/* ================== FAQ VERİLERİ ================== */
const FAQ_ITEMS = [
  {
    question: "Lansman için teknik keşif ücretli mi?",
    answer:
      "Hayır, projelendirme öncesi yerinde teknik keşif hizmetimizi ücretsiz sunuyoruz.",
  },
  {
    question: "Hibrit (hem fiziksel hem online) lansman yapıyor musunuz?",
    answer:
      "Evet, güçlü internet altyapımız ve çok kameralı reji sistemimizle lansmanınızı aynı anda tüm dünyaya canlı yayınlayabiliyoruz.",
  },
  {
    question: "Sadece ekipman mı kiralıyorsunuz yoksa ekip desteği de veriyor musunuz?",
    answer:
      "Biz bir prodüksiyon çözüm ortağıyız. Ekipmanla birlikte tüm süreci yönetecek uzman teknik ekibimizi de görevlendiriyoruz.",
  },
];

/* ================== SCHEMA (JSON-LD) ================== */
function ArticleSchema() {
  const site = String(SITE_URL || "").replace(/\/$/, "");

  const orgId = `${site}/#org`;
  const editorId = `${site}/#editor`;

  const modified =
    typeof MODIFIED_DATE !== "undefined" && MODIFIED_DATE ? MODIFIED_DATE : PUBLISH_DATE;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // BlogPosting
      {
        "@type": "BlogPosting",
        "@id": `${BLOG_URL}#blogposting`,
        headline: metadata?.title || "Blog Yazısı",
        description: metadata?.description,
        image: `${site}${HERO_IMAGE}`,
        datePublished: PUBLISH_DATE,
        dateModified: modified,
        inLanguage: "tr-TR",
        author: { "@id": editorId },
        publisher: { "@id": orgId },
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        isPartOf: { "@type": "Blog", "@id": `${site}/blog#blog` },
      },

      // FAQ rich result
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

/* ================== ANA SAYFA ================== */
export default function Page() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "Ürün Lansmanı Organizasyonu", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />

      {/* --- HERO SECTION --- */}
      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{ src: (typeof IMAGES !== "undefined" && IMAGES?.hero?.src ? IMAGES.hero.src : (typeof FEATURED_IMAGE !== "undefined" ? FEATURED_IMAGE : (typeof HERO_IMAGE !== "undefined" ? HERO_IMAGE : (typeof OG_IMAGE !== "undefined" ? OG_IMAGE : "")))), alt: (typeof IMAGES !== "undefined" && IMAGES?.hero?.alt ? IMAGES.hero.alt : (metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : "Sahneva Blog")) }}
        pills={["Sahneva Blog", "Ürün Lansmanı", "Kurumsal Prodüksiyon"]}
        title={(metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : "")}
        description={metadata?.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="5–7 dk okuma"
        currentSlug={BLOG_URL.split("/").pop()}
        currentCategory={metadata?.category}
        currentKeywords={metadata?.keywords}
        primaryLinks={[
          { href: "/sahne-kiralama", label: "Sahne Kiralama", icon: "🎭" },
          { href: "/led-ekran-kiralama", label: "LED Ekran", icon: "🟦" },
          { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon", icon: "🏢" },
        ]}
        whatsappUrl={(typeof WA_URL !== "undefined" ? WA_URL : undefined)}
      >

        {/* Giriş Kutusu */}
        <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
          <p className="text-lg text-gray-700 font-medium italic m-0">
            Bir ürün lansmanı, markanızın yeni hikayesinin başladığı kritik andır. Bu anın kalıcılığı, sadece sunulan ürünle değil, sunumun teknik kalitesiyle de doğrudan ilişkilidir.
          </p>
        </div>

        <p>
          Sahneva olarak, 2012&apos;den beri edindiğimiz 10+ yıllık deneyim ve 1200&apos;den fazla başarılı proje ile bu kritik anı riske atmıyoruz. Türkiye genelinde kusursuz teknik prodüksiyon çözümleri sunuyoruz.
        </p>

        <h2 id="teknik-kusursuzluk">1. Neden Teknik Kusursuzluk?</h2>
        <p>
          Bir lansmanda her şey yolunda giderken sesin cızırdaması veya ekrandaki küçük bir görüntü hatası, marka algısını saniyeler içinde zedeleyebilir. Lansmanlarda teknik altyapı, dekor ve ikramdan çok daha kritiktir; çünkü duyguyu yöneten ışıktır, mesajı ileten sestir.
        </p>

        <ul>
          <li>
            <strong>Stratejik Sahne Tasarımı:</strong> Ürünü merkeze alan, marka renklerinizle uyumlu modüler ve güvenlik standartlarına uygun yapılar.
          </li>
          <li>
            <strong>Kristal Netliğinde Görüntü:</strong> P2 ve P3 piksel aralığında yüksek çözünürlüklü LED ekranlar ile en yakın mesafeden bile etkileyici görseller.
          </li>
          <li>
            <strong>Akustik Mühendisliği:</strong> Alanın her noktasından eşit netlikte ses veren profesyonel line array hoparlör sistemleri.
          </li>
          <li>
            <strong>Dramatik Işık Senaryoları:</strong> Ürün ortaya çıktığı anda heyecanı zirveye taşıyan DMX kontrollü profesyonel ışık şovları.
          </li>
        </ul>

        <h2 id="lansman-cozumleri">2. Sahneva Lansman Çözümleri: Uçtan Uca Profesyonellik</h2>

        <h3>🎭 Sahne ve Teknik Altyapı</h3>
        <p>
          Türkiye genelinde sunduğumuz profesyonel <Link href="/sahne-kiralama">sahne kiralama</Link> hizmetiyle her ölçekteki mekanı gösteri merkezine dönüştürüyoruz. Alüminyum truss sistemleri, güvenlik bariyerleri ve mühendislik onaylı kurulumlarla güvenliği her zaman ön planda tutuyoruz.
        </p>

        <h3>📺 Görsel Hikaye Anlatıcılığı (LED Ekran)</h3>
        <p>
          Lansmanın kalbi olan ürün videoları, 4500+ nit parlaklığa sahip <Link href="/led-ekran-kiralama">LED ekranlarımızda</Link> hayat buluyor. Sadece görüntü yansıtmıyor; 360° lazer-LED senkronizasyonu ile katılımcıları markanızın dünyasına davet ediyoruz.
        </p>

        <h3>🔊 Ses, Işık ve Reji Yönetimi</h3>
        <p>
          Keşiften söküme kadar tüm süreci yönetiyoruz. <Link href="/ses-isik-sistemleri">Canlı miksaj</Link> ve deneyimli reji ekibimizle lansman akışının provalardaki gibi kusursuz ve saniye şaşmadan gerçekleşmesini sağlıyoruz.
        </p>

        <h3>🏕️ Prestijli Dış Mekan Çözümleri (Çadır &amp; Dome)</h3>
        <p>
          Sıradışı bir mekan arıyorsanız, şeffaf <Link href="/cadir-kiralama">çadırlar</Link> ve 360° projeksiyon mapping yapılabilen pnömatik dome yapılarla açık havada da prestijli bir atmosfer yaratıyoruz.
        </p>

        <h2 id="lansman-takvimi">3. Lansman Takvimi: Adım Adım Başarıya</h2>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm text-left bg-white min-w-[600px]">
            <caption className="sr-only">Lansman Organizasyonu Takvimi</caption>
            <thead className="bg-gray-50 text-gray-700 uppercase tracking-wider text-xs border-b">
              <tr>
                <th scope="col" className="p-4 font-bold">Aşama</th>
                <th scope="col" className="p-4 font-bold">Süreç</th>
                <th scope="col" className="p-4 font-bold">Sahneva&apos;nın Rolü</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition-colors">
                <th scope="row" className="p-4 font-bold text-blue-600">Strateji &amp; Konsept</th>
                <td className="p-4">T-60 Gün</td>
                <td className="p-4">Mekân seçimi ve teknik ihtiyaç analizi.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <th scope="row" className="p-4 font-bold text-blue-600">Teknik Keşif</th>
                <td className="p-4">T-45 Gün</td>
                <td className="p-4">Akustik kontrol, elektrik yükü ve zemin analizi.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <th scope="row" className="p-4 font-bold text-blue-600">Tasarım &amp; Planlama</th>
                <td className="p-4">T-30 Gün</td>
                <td className="p-4">3D sahne tasarımı ve ışık senaryosu oluşturma.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <th scope="row" className="p-4 font-bold text-blue-600">Kurulum &amp; Test</th>
                <td className="p-4">T-2 Gün</td>
                <td className="p-4">Sistemin kurulması ve tüm ekipmanların stress testi.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <th scope="row" className="p-4 font-bold text-blue-600">Prova</th>
                <td className="p-4">T-1 Gün</td>
                <td className="p-4">Ses, ışık ve sunum senkronizasyonu (Genel Prova).</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <th scope="row" className="p-4 font-bold text-blue-600">Lansman Günü</th>
                <td className="p-4">D-Day</td>
                <td className="p-4">Canlı reji, operasyon yönetimi ve anlık kriz kontrolü.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="neden-sahneva">4. Neden Sahneva&apos;yı Seçmelisiniz?</h2>

        <ul>
          <li>
            <strong>Türkiye Geneli Hizmet:</strong> 81 ilde aynı yüksek kalite standartlarında operasyon yeteneği.
          </li>
          <li>
            <strong>Premium Envanter:</strong> Sürekli güncellenen, bakımlı ve en son teknolojili ekipman parkuru.
          </li>
          <li>
            <strong>Kriz Yönetimi:</strong> Sahada 10+ yıl deneyimli, çözüm odaklı ve soğukkanlı teknik kadro.
          </li>
          <li>
            <strong>Kurumsal Güvence:</strong> Sözleşmeli çalışma ve sigortalı ekipman desteği.
          </li>
        </ul>

        {/* Başarı Hikayesi */}
        <div className="not-prose my-12 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gray-900 text-white p-5 flex justify-between items-center">
            <span className="font-bold flex items-center gap-2 text-lg">📂 Başarı Hikayesi</span>
            <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full tracking-wide uppercase">Gerçek Proje</span>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              2021 Milli Uzay Programı Lansmanı&apos;nda Beştepe Kongre Merkezi&apos;nde pnömatik dome yapı ve 360° senkronize teknoloji çözümlerimizle Türkiye&apos;nin en önemli vizyon projelerinden birine teknik katkı sağladık.
            </p>
            <Link
              href="/blog/milli-uzay-programi-lansmani-sahneva-muhendislik-refleksi"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Projenin Detaylarını İnceleyin →
            </Link>
          </div>
        </div>

        {/* FAQ SECTION */}
        <h2 id="faq">5. Sıkça Sorulan Sorular</h2>
        <section aria-labelledby="faq-heading" className="not-prose space-y-3 mt-6">
          <h3 id="faq-heading" className="sr-only">Sıkça Sorulan Sorular</h3>
          {FAQ_ITEMS.map((item, index) => (
            <details key={index} className="group bg-white border border-gray-200 rounded-xl overflow-hidden open:ring-2 open:ring-blue-100 open:border-blue-300 transition-all duration-200">
              <summary
                className="flex items-center justify-between p-4 md:p-5 cursor-pointer font-semibold text-gray-800 select-none bg-gray-50/50 hover:bg-gray-50 transition-colors"
              >
                {item.question}
                <span className="ml-4 flex-shrink-0 transition-transform group-open:rotate-180 text-gray-600">▼</span>
              </summary>
              <div className="px-5 pb-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                {item.answer}
              </div>
            </details>
          ))}
        </section>

        {/* BOTTOM CTA */}
        <div className="not-prose mt-16 bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">Markanızı Sahneye Taşımaya Hazır mısınız?</h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10 text-lg">
            Ürün lansmanınızı sıradan bir etkinlikten öteye taşıyıp gerçekten unutulmaz bir deneyime dönüştürelim. Teknik detayları ve stresi bize bırakın, siz sadece başarınızın tadını çıkarın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp üzerinden teklif isteyin — yeni sekmede açılır"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg"
            >
              <span>💬</span> WhatsApp&apos;tan Yazın
            </a>
            <a href="tel:+905453048671" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg">
              <span>📞</span> Hemen Arayın
            </a>
            <a href="mailto:info@sahneva.com" className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg">
              <span>✉️</span> E-posta Gönderin
            </a>
          </div>
        </div>

        <div className="not-prose mt-10">
          <IntentBridge
            title="Bu yazı kurumsal kümede alt senaryo niyetini karşılar"
            description="Ürün lansmanı organizasyonu yazısı, kurumsal kümenin lansman odaklı araştırma niyetini hedefler. Ana hizmet ve teklif merkezi ise kurumsal organizasyon sayfasıdır."
            primaryPage={INTENT_MAP.corporate.primaryPage}
            supportPages={INTENT_MAP.corporate.supportPages.filter((item) => item.href !== "/blog/urun-lansmani-organizasyonu")}
          />
        </div>

        <BlogRelatedLinks
          services={[
            { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
            { href: "/sahne-kiralama", label: "Sahne Kiralama" },
            { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
          ]}
        />
      </BlogLayout>
    </>
  );
}

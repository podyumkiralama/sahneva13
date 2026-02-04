// app/blog/kurumsal-etkinlik-yonetimi/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";

/* ================== YAPILANDIRMA & SABİTLER ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const BLOG_URL = `${SITE_URL}/blog/kurumsal-etkinlik-yonetimi`;
// ✅ Rich Results için timezone dahil ISO 8601
const PUBLISH_DATE = "2025-12-15T00:00:00+03:00";
const MODIFIED_DATE = "2025-12-15T00:00:00+03:00";
const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const HERO_IMAGE = "/img/blog/kurumsal-etkinlik-hero.webp";

/* ================== META DATA ================== */
export const metadata = {
  title: "Kurumsal Etkinlik Yönetimi ve Teknik Kiralama Rehberi",
  description:
    "Kurumsal organizasyonlarınızda kusursuz bir akış için sahne, podyum, LED ekran, ses-ışık ve çadır kiralama rehberi. Lansman ve bayi toplantısı ipuçları.",
  alternates: {
    canonical: BLOG_URL,
  },
  image: HERO_IMAGE,
  openGraph: {
    title: "Kurumsal Etkinlik Yönetimi: Teknik Kiralama Rehberi | Sahneva Organizasyon",
    description:
      "Lansman, bayi toplantısı ve şirket etkinlikleri için sahne, LED ekran, ses-ışık ve çadır kiralama odaklı profesyonel teknik çözüm rehberi.",
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva Organizasyon",
    images: [
      {
        url: `${SITE_URL}${HERO_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon blog görseli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurumsal Etkinlik Yönetimi Rehberi",
    description: "Kurumsal Etkinlikleriniz için teknik planlama ipuçları.",
    images: [`${SITE_URL}${HERO_IMAGE}`],
  },
  keywords: [
    "kurumsal etkinlik yönetimi",
    "sahne kiralama",
    "LED ekran kiralama",
    "ses ışık sistemi",
    "çadır kiralama",
    "organizasyon",
    "bayi toplantısı",
    "teknik prodüksiyon",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  date: PUBLISH_DATE,
};

/* ================== FAQ VERİLERİ ================== */
const FAQ_ITEMS = [
  {
    question: "Kurumsal bir etkinlik için teknik planlamaya ne kadar önce başlanmalı?",
    answer:
      "İdeal olarak en az 2–3 ay önce planlamaya başlanmalıdır. Mekan keşfi, sahne ve LED ekran ölçülerinin belirlenmesi, ses-ışık ihtiyacının hesaplanması ve yedek planların oluşturulması için yeterli zamana sahip olmak, hem bütçe sapmalarını azaltır hem de son dakika sorunlarını minimuma indirir.",
  },
  {
    question: "Kurumsal etkinliklerde minimum hangi teknik ekipmanlar olmalı?",
    answer:
      "Etkinliğin türüne göre değişmekle birlikte, temel ihtiyaçlar genellikle sahne veya podyum, ses sistemi (hoparlörler, mikrofonlar, mikser), görsel sunum için LED ekran veya projeksiyon, sahne aydınlatması ve gerektiğinde çadır ve iklimlendirme sistemleridir.",
  },
  {
    question: "LED ekran mı yoksa projeksiyon mu tercih etmeliyim?",
    answer:
      "Aydınlık salonlarda, büyük ölçekli ve prestij amaçlı kurumsal etkinliklerde çoğunlukla LED ekran tercih edilir çünkü yüksek parlaklık ve kontrast sunar. Küçük ölçekli, karanlık salonlarda projeksiyon kullanılabilir ancak marka algısı için LED ekran daha güçlüdür.",
  },
  {
    question: "Dış mekanda yapılan kurumsal etkinliklerde çadır kullanmak şart mı?",
    answer:
      "Şart değildir ancak hava koşullarına bağlı riskleri düşürmek için şiddetle tavsiye edilir. Profesyonel çadır sistemleri; zemin kaplama, aydınlatma ve ısıtma/soğutma ile birleştiğinde dış mekan etkinliklerini 5 yıldızlı otel konforuna taşır.",
  },
  {
    question: "Sahneva kurumsal etkinlikler için hangi teknik hizmetleri sunuyor?",
    answer:
      "Sahneva; sahne ve podyum kurulumundan LED ekranlara, ses-ışık sistemlerinden truss ve rigging altyapısına, çadır ve zemin kaplamadan jeneratör desteğine kadar teknik süreci anahtar teslim yönetir.",
  },
];
/* ================== SCHEMA (JSON-LD) ================== */
function ArticleSchema() {
  const site = String(SITE_URL || "").replace(/\/$/, "");

  // RootLayout'ta tanımlı ID'leri kullanmak için sabit tanımlarınızı burada yapıyorsunuz.
  // Bu değişkenler, RootLayout'taki BASE_SITE_URL, ORGANIZATION_ID, etc. ile tutarlı olmalıdır.
  const orgId = `${site}/#org`;
  const editorId = `${site}/#editor`;

  // MODIFIED_DATE yoksa publish'i kullan
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
        image: `${site}/img/blog/kurumsal-etkinlik-hero.webp`,
        datePublished: PUBLISH_DATE,
        dateModified: modified,
        inLanguage: "tr-TR",
        // RootLayout'taki tanımlara referans veriliyor:
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

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/* ================== BİLEŞENLER ================== */
const Breadcrumbs = () => (
  <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
    <ol className="flex items-center space-x-2 flex-wrap">
      <li><Link href="/" className="hover:text-blue-600 transition-colors">Anasayfa</Link></li>
      <li aria-hidden="true" className="text-gray-500">/</li>
      <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
      <li aria-hidden="true" className="text-gray-500">/</li>
      <li className="text-gray-900 font-medium truncate" aria-current="page">Kurumsal Etkinlik Yönetimi</li>
    </ol>
  </nav>
);

const TableOfContents = () => (
  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-6 hidden lg:block">
    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">İçindekiler</h4>
    <ul className="space-y-2 text-sm">
      {[
        { id: "sahne-podyum", label: "1. Sahne ve Podyum Tasarımı" },
        { id: "led-ekran", label: "2. LED Ekran Teknolojileri" },
        { id: "ses-isik", label: "3. Ses ve Işık Yönetimi" },
        { id: "kurumsal-cadir", label: "4. Kurumsal Çadırlar" },
        { id: "teknik-prova", label: "5. Teknik Prova Akışı" },
        { id: "butce-planlama", label: "Bütçe Planlaması" },
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

/* ================== ANA SAYFA ================== */
export default function BlogPostCorporate() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "Kurumsal Etkinlik Yönetimi", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />
      
            {/* --- HERO SECTION --- */}
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

                
                <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
                  <p className="text-lg text-gray-700 font-medium italic m-0">
                    Kurumsal etkinlikler, bir şirketin vizyonunu paydaşlarına gösterdiği en güçlü sahnelerdir. Bu sahnenin arkasındaki görünmeyen kahraman ise; doğru planlanmış <strong>teknik altyapı</strong>dır.
                  </p>
                </div>

                <p>
                  Bir ürün lansmanı, yıl sonu ödül töreni veya bayi buluşması düzenliyor olabilirsiniz. İçerik ne kadar güçlü olursa olsun; teknik bir aksaklık algıyı saniyeler içinde negatife çevirebilir. Bu nedenle teknik planlama, dekor ve ikramdan daha kritiktir.
                </p>

                <figure className="my-10 not-prose">
                  <Image
                    src="/img/blog/kurumsal-etkinlik-sahne-genel.webp"
                    alt="Kurumsal lansman sahnesi, LED ekran ve podyum kurulumu"
                    width={1200}
                    height={675}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                  <figcaption className="mt-3 text-sm text-gray-600 text-center font-medium">
                    Kurumsal lansmanda bütüncül sahne tasarımı marka algısını güçlendirir.
                  </figcaption>
                </figure>

                {/* Pro Tip Box */}
                <div className="my-10 bg-gradient-to-r from-indigo-50 to-blue-50 border border-blue-100 p-6 rounded-2xl shadow-sm not-prose">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0" aria-hidden="true">💡</span>
                    <div>
                      <h4 className="text-blue-900 font-bold mt-0 mb-2 text-lg">Profesyonel İpucu</h4>
                      <p className="mb-2 text-blue-800 text-base">
                        Etkinlik planlamasına <strong>en az 2–3 ay önceden</strong> başlamak ve teknik tedarikçi ile mekan keşfini (site survey) birlikte yapmak:
                      </p>
                      <ul className="text-blue-800 list-disc pl-5 space-y-1 text-sm m-0">
                        <li className="m-0">Bütçe sapmalarını %20 azaltır.</li>
                        <li className="m-0">Elektrik ve sahne ölçüsü problemlerini önler.</li>
                        <li className="m-0">Güçlü bir B planı oluşturmanızı sağlar.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 id="sahne-podyum">1. Odak Noktasını Tasarlamak: Sahne ve Podyum</h2>
                <p>
                  Her etkinliğin kalbi sahnedir. Konuşmacıların ve protokolün yer aldığı alan; salonun her noktasından görülebilir, güvenli ve estetik olmalıdır. Kurumsal kimliğinize uygun, TÜV sertifikalı sistemlerle kurulan bir <Link href="/sahne-kiralama">sahne kiralama</Link> hizmeti almak, işin temelidir.
                </p>
                <p>
                  Özellikle konuşma ağırlıklı etkinliklerde protokolün rahat hareketi için modüler <Link href="/podyum-kiralama">podyum kiralama</Link> çözümleri devreye girer. Halı kaplı, skörtlü ve güvenli bir podyum, konuşmacıya özgüven verir.
                </p>

                <figure className="my-10 not-prose">
                  <Image
                    src="/img/blog/kurumsal-etkinlik-podyum-detay.webp"
                    alt="Kurumsal etkinlikte protokol podyumu ve sahne detayı"
                    width={1200}
                    height={750}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </figure>

                <h2 id="led-ekran">2. Görsel Etki: LED Ekran Teknolojileri</h2>
                <p>
                  Kurumsal etkinlikler artık sadece anlatılanlarla değil, ekranlarda gösterilenlerle de hatırlanıyor. Projeksiyon cihazlarının yerini yüksek parlaklığa sahip <Link href="/led-ekran-kiralama">LED ekran kiralama</Link> çözümleri aldı.
                </p>

                <figure className="my-10 not-prose">
                  <Image
                    src="/img/blog/kurumsal-etkinlik-led-ekran-sahne.webp"
                    alt="Kurumsal etkinlikte geniş LED ekranlı sahne"
                    width={1200}
                    height={675}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </figure>

                {/* Accessible Table */}
                <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full text-sm text-left bg-white min-w-[600px]">
                    <caption className="sr-only">LED Ekran Seçim Tablosu</caption>
                    <thead className="bg-gray-50 text-gray-700 uppercase tracking-wider text-xs border-b">
                      <tr>
                        <th scope="col" className="p-4 font-bold">Piksel Aralığı</th>
                        <th scope="col" className="p-4 font-bold">İdeal Mesafe</th>
                        <th scope="col" className="p-4 font-bold">Kullanım Alanı</th>
                        <th scope="col" className="p-4 font-bold">Maliyet</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <th scope="row" className="p-4 font-bold text-blue-600">P2.9</th>
                        <td className="p-4">3m+</td>
                        <td className="p-4">İç Mekan (Lansman)</td>
                        <td className="p-4 text-gray-600">$$$</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <th scope="row" className="p-4 font-bold text-blue-600">P3.9</th>
                        <td className="p-4">4m+</td>
                        <td className="p-4">İç Mekan (Konferans)</td>
                        <td className="p-4 text-gray-600">$$</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <th scope="row" className="p-4 font-bold text-blue-600">P4.8</th>
                        <td className="p-4">5m+</td>
                        <td className="p-4">İç/Dış Mekan</td>
                        <td className="p-4 text-gray-600">$</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 id="ses-isik">3. Duyguyu Yönetmek: Ses ve Işık</h2>
                <p>
                  "Sesini duyamıyoruz!" cümlesi, bir organizasyonun kabusudur. Line-array hoparlör sistemleri ve dijital mikserler ile mesajınızın net ulaşmasını sağlarsınız. Ancak sadece duymak yetmez, hissetmek gerekir. Robot ışıklar ve takip spotları ile sıradan bir salonu, deneyimli bir <Link href="/ses-isik-sistemleri">ses ışık sistemi kiralama</Link> hizmetiyle şov alanına dönüştürebilirsiniz.
                </p>

                <figure className="my-10 not-prose">
                  <Image
                    src="/img/blog/kurumsal-etkinlik-ses-backstage.webp"
                    alt="Kurumsal etkinlikte ses miksaj masası ve ışık kontrolü"
                    width={1200}
                    height={750}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </figure>

                <h2 id="kurumsal-cadir">4. Mekan Bağımsızlığı: Kurumsal Çadırlar</h2>
                <p>
                  Dış mekan etkinliklerinde hava durumu en büyük risktir. Profesyonel <Link href="/cadir-kiralama">çadır kiralama</Link> sistemleri, zemin kaplaması ve iklimlendirme ile birleştiğinde, açık havada 5 yıldızlı konfor sunar.
                </p>

                <figure className="my-10 not-prose">
                  <Image
                    src="/img/blog/kurumsal-etkinlik-cadir.webp"
                    alt="Kurumsal etkinlik çadırı"
                    width={1200}
                    height={750}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </figure>

                <h2 id="teknik-prova">5. Teknik Prova ve Etkinlik Günü Akışı</h2>
                <p>
                  Teknik ekipmanlar ne kadar güçlü olursa olsun, <strong>prova yapılmayan</strong> hiçbir kurulum tam güven vermez. Kurumsal etkinliklerde özellikle konuşma ve video akışları, prova günü netleştirilmelidir.
                </p>
                <ul>
                  <li>Tüm sunum dosyaları tek bir bilgisayarda toplanmalı ve LED ekranda test edilmelidir.</li>
                  <li>Konuşmacıların mikrofon kullanımı, sahne giriş–çıkışları ve sahnede duracakları noktalar prova edilmelidir.</li>
                  <li>Canlı yayın varsa, stream altyapısı etkinlikten en az 1 gün önce test bağlantısıyla denenmelidir.</li>
                </ul>

                {/* CASE STUDY */}
                <div className="not-prose my-12 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gray-900 text-white p-5 flex justify-between items-center">
                    <span className="font-bold flex items-center gap-2 text-lg">📂 Vaka Analizi</span>
                    <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full tracking-wide uppercase">Gerçek Proje</span>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">XYZ Otomotiv - Yıl Sonu Bayi Toplantısı</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-red-50/50 p-4 rounded-xl border border-red-100">
                        <h4 className="text-sm font-bold text-red-600 uppercase mb-3 tracking-wide">Zorluklar & İhtiyaçlar</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex gap-2"><span className="text-red-500">✕</span> 800 kişi için yetersiz akustik</li>
                          <li className="flex gap-2"><span className="text-red-500">✕</span> Karmaşık video mapping isteği</li>
                          <li className="flex gap-2"><span className="text-red-500">✕</span> 6 saatlik kısıtlı kurulum süresi</li>
                        </ul>
                      </div>
                      <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
                        <h4 className="text-sm font-bold text-green-600 uppercase mb-3 tracking-wide">Sahneva Çözümü</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex gap-2"><span className="text-green-500">✓</span> 12 Line-Array modülü ile homojen ses</li>
                          <li className="flex gap-2"><span className="text-green-500">✓</span> Watchout sistemli 60m² P2 LED Ekran</li>
                          <li className="flex gap-2"><span className="text-green-500">✓</span> 14 kişilik teknik ekip ile 5 saatte teslim</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                      <p className="text-green-800 font-medium text-lg m-0">
                        "Sonuç: Sıfır teknik aksama, %98 katılımcı memnuniyeti."
                      </p>
                    </div>
                  </div>
                </div>

                <h2 id="butce-planlama">Gerçekçi Bütçe Planlaması</h2>
                <p>Teknik bütçeyi doğru yönetmek için ortalama dağılım şöyledir:</p>

                <div className="not-prose bg-gray-50 border border-gray-200 rounded-xl p-6 my-8 space-y-5">
                  {[
                    { label: "Ses ve Işık Sistemleri", pct: 40, w: "40%", color: "bg-blue-600" },
                    { label: "Görsel (LED Ekran)", pct: 30, w: "30%", color: "bg-purple-600" },
                    { label: "Sahne ve Altyapı", pct: 20, w: "20%", color: "bg-indigo-500" },
                    { label: "Personel & Lojistik", pct: 10, w: "10%", color: "bg-gray-400" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1.5 text-sm font-bold text-gray-700">
                        <span>{item.label}</span>
                        <span>%{item.pct}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div className={`${item.color} h-full rounded-full transition-all duration-1000 ease-out`} style={{ width: item.w }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* TEKNOLOJİ TRENDLERİ */}
                <div className="not-prose my-10 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-2xl">🚀</span> 2025 Teknoloji Trendleri
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-5 border border-green-100">
                      <h4 className="font-bold text-lg mb-2 text-green-900">AR (Artırılmış Gerçeklik)</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Ürün lansmanlarında fiziksel mekan sınırlarını aşmak için AR destekli LED ekran çözümleri. Misafirler telefonlarıyla ürünleri 3B inceleyebiliyor.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                      <h4 className="font-bold text-lg mb-2 text-blue-900">Hibrit Sistemler</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Hem fiziksel hem online katılım için entegre ses/ışık/görüntü sistemleri. Canlı yayın kalitesi artık lüks değil, standart.
                      </p>
                    </div>
                  </div>
                </div>

                {/* UYARI KUTUSU */}
                <div className="not-prose my-10 bg-red-50 border border-red-200 rounded-2xl p-6 relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="font-bold text-red-800 mb-4 text-lg flex items-center gap-2">
                      ⚠️ Sözleşme İçin Kritik 5 Madde
                    </h4>
                    <ol className="space-y-2 list-decimal list-inside text-sm text-red-900/80 font-medium">
                      <li><strong>Yedek Ekipman:</strong> Her kritik sistem için %100 yedek.</li>
                      <li><strong>Sigorta:</strong> En az 5M TL mesleki sorumluluk teminatı.</li>
                      <li><strong>Zamanlama:</strong> Net montaj/demontaj saatleri.</li>
                      <li><strong>Teknik Ekip:</strong> Personel sayısı ve görev tanımları.</li>
                      <li><strong>İptal Koşulları:</strong> Mücbir sebepler ve iade politikası.</li>
                    </ol>
                  </div>
                </div>

                {/* FAQ SECTION */}
                <h2 id="faq">Sık Sorulan Sorular</h2>
                <section aria-labelledby="faq-heading" className="not-prose space-y-3 mt-6">
                  <h3 id="faq-heading" className="sr-only">Sıkça Sorulan Sorular</h3>
                  {FAQ_ITEMS.map((item, index) => (
                    <details key={index} className="group bg-white border border-gray-200 rounded-xl overflow-hidden open:ring-2 open:ring-blue-100 open:border-blue-300 transition-all duration-200">
                    <summary
                      className="flex items-center justify-between p-4 md:p-5 cursor-pointer font-semibold text-gray-800 select-none bg-gray-50/50 hover:bg-gray-50 transition-colors"
                      role="button"
                      tabIndex={0}
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
                  
                  <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">Etkinliğinizi Şansa Bırakmayın</h3>
                  <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10 text-lg">
                    Profesyonel kurumsal etkinlik çözümlerimizle markanızı en iyi şekilde temsil edelim. Ücretsiz keşif için hemen ulaşın.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                    <a
                      href="https://wa.me/905453048671"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp üzerinden teklif isteyin — yeni sekmede açılır"
                      className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg"
                    >
                      <span>💬</span> WhatsApp'tan Yazın
                    </a>
                    <a href="tel:+905453048671" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg">
                      <span>📞</span> Hemen Arayın
                    </a>
                  </div>
                </div>

                <BlogRelatedLinks
                  services={[
                    { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
                    { href: "/sahne-kiralama", label: "Sahne Kiralama" },
                  ]}
                />
      </BlogLayout>
    </>
  );}
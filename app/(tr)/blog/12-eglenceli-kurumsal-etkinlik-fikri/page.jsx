// app/blog/12-eglenceli-kurumsal-etkinlik-fikri/page.jsx
import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import SmartBlogSuggestions from "@/components/blog/SmartBlogSuggestions";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";

/* ================== YAPILANDIRMA ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? BASE_SITE_URL).replace(/\/$/, "");
const BLOG_PATH = "/blog/12-eglenceli-kurumsal-etkinlik-fikri";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const TITLE = "12 Eğlenceli Kurumsal Etkinlik Fikri (2026 Güncel)";
const HERO_IMAGE = "/img/blog/12-eglenceli-kurumsal-etkinlik-fikri/12-eglenceli-kurumsal-etkinlik-hero.webp";

// Dinamik OG Image URL - Türkçe karakter güvenliği için encodeURIComponent eklendi
const DYNAMIC_OG_URL = `${SITE_URL}/api/og?title=${encodeURIComponent(TITLE)}&bg=${encodeURIComponent(HERO_IMAGE)}`;

const PUBLISH_DATE = "2026-02-27T10:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile("app/(tr)/blog/12-eglenceli-kurumsal-etkinlik-fikri/page.jsx", "2026-03-01T17:00:00+03:00");
const AUTHOR_NAME = "Sahneva İçerik Ekibi";

// İçerik Görselleri
const IMG_KONFERANS = "/img/blog/12-eglenceli-kurumsal-etkinlik-fikri/genis-konferans-salonu.webp";
const IMG_LED_ENSTALASYON = "/img/blog/12-eglenceli-kurumsal-etkinlik-fikri/kurumsal-led-dijital-enstalasyon.webp";
const IMG_GALA = "/img/blog/12-eglenceli-kurumsal-etkinlik-fikri/gala-gecesi-truss-led-kurulum.webp";
const IMG_SEFFAF_CADIR = "/img/blog/12-eglenceli-kurumsal-etkinlik-fikri/seffaf_cadir_kokteyl.webp";
const IMG_ACIK_HAVA = "/img/blog/12-eglenceli-kurumsal-etkinlik-fikri/acik-hava-luks-davet-masa-duzeni.webp";
const IMG_PANEL = "/img/blog/12-eglenceli-kurumsal-etkinlik-fikri/kurumsal-panel-konusmaci-sahne.webp";
const IMG_PROTOKOL = "/img/blog/12-eglenceli-kurumsal-etkinlik-fikri/protokol-sahne-backwall.webp";

export const metadata = {
  title: TITLE,
  description: "Profesyonellik ile eğlenceyi bir arada sunan 12 yaratıcı kurumsal etkinlik fikri. Atölye, spor, cinayet gizemi, bingo, gala ve daha fazlası!",
  alternates: { canonical: BLOG_URL },
  category: "Kurumsal Etkinlik",
  keywords: ["kurumsal etkinlik", "eğlenceli etkinlik", "ekip etkinliği", "şirket organizasyonu", "kurumsal organizasyon", "etkinlik fikirleri"],
  openGraph: {
    title: `${TITLE} | Sahneva`,
    description: "Kurumsal etkinliklerinizi unutulmaz kılacak 12 hazır fikir + uygulama ipuçları.",
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva",
    images: [{ url: DYNAMIC_OG_URL, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Kurumsal etkinliklerinizi unutulmaz kılacak 12 hazır fikir + uygulama ipuçları.",
    images: [DYNAMIC_OG_URL],
  },
};

/* ================== SEO ŞEMALARI ================== */
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
        url: DYNAMIC_OG_URL,
        contentUrl: DYNAMIC_OG_URL,
        width: 1200,
        height: 630,
      },
      {
        "@type": "WebPage",
        "@id": WEBPAGE_ID,
        url: BLOG_URL,
        name: TITLE,
        isPartOf: { "@id": WEBSITE_ID },
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
        headline: TITLE,
        description: metadata.description,
        image: { "@id": PRIMARY_IMAGE_ID },
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        inLanguage: "tr-TR",
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}

function FaqSchema() {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Kurumsal etkinlik nedir?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Kurumsal etkinlik; bir şirket tarafından çalışanları, müşterileri veya paydaşları için düzenlenen, belirli iş hedeflerine ulaşmayı ya da profesyonel ilişkileri geliştirmeyi amaçlayan planlı organizasyonlardır.",
              },
            },
            {
              "@type": "Question",
              name: "Kurumsal etkinlikler neden önemlidir?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Kurumsal etkinlikler, başarıyı görünür kılmak, iş motivasyonunu artırmak ve çalışanlara teşvik sağlamak açısından önemli bir rol oynar. Networking fırsatları sunar, ekip çalışmasını destekler ve bilgi paylaşımını teşvik eder.",
              },
            },
            {
              "@type": "Question",
              name: "2026'da öne çıkan kurumsal etkinlik trendleri nelerdir?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "2026'da AI entegrasyonu, sürdürülebilirlik ve karbon nötr etkinlikler, wellbeing odaklı aktiviteler, micro-experience formatlar ve immersive/duyusal tasarım kurumsal etkinliklerin merkezine oturdu.",
              },
            },
          ],
        }).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/* ================== YARDIMCI BİLEŞENLER ================== */
function Tip2026({ children }) {
  return (
    <div className="not-prose my-4 bg-violet-50 border border-violet-200 rounded-xl px-5 py-4 flex gap-3 items-start">
      <span className="text-violet-600 font-bold text-sm whitespace-nowrap">💡 2026 İpucu:</span>
      <p className="text-sm text-violet-800 m-0">{children}</p>
    </div>
  );
}

function MidCTA() {
  return (
    <div className="not-prose my-12 bg-violet-50 rounded-2xl p-8 text-center border border-violet-200">
      <p className="text-lg font-semibold text-violet-900 mb-4">Bu etkinlikleri profesyonelce organize etmek ister misiniz?</p>
      <a
        href="https://wa.me/905453048671"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-violet-700 hover:bg-violet-800 text-white font-bold py-3 px-8 rounded-xl transition-colors"
      >
        💬 Ücretsiz Teklif Alın
      </a>
    </div>
  );
}

/* ================== ANA SAYFA BİLEŞENİ ================== */
export default function BlogPost() {
  const breadcrumbItems = [
    { name: "Anasayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "12 Eğlenceli Kurumsal Etkinlik Fikri", url: BLOG_URL },
  ];

  const etkinlikler = [
    "AI Destekli Yaratıcı Atölye Etkinlikleri",
    "Hibrit & Kapsayıcı Spor Festivalleri",
    "İş Networking Etkinlikleri",
    "Immersive & AR Destekli Gizem Maceraları",
    "Amaç Odaklı Sosyal Etki Etkinlikleri",
    "Duyusal & Multi-Genre Müzik Deneyimleri",
    "Kurumsal Gala Yemekleri",
    "Gamification & AI Destekli Eğlence Yarışmaları",
    "Yiyecek & İçecek Tadım Kurumsal Etkinlikleri",
    "Micro-Learning & İnteraktif Bilgi Oturumları",
    "Kurumsal Ödül Törenleri",
    "Kurumsal Komedi Etkinlikleri",
  ];

  return (
    <> 
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />
      <FaqSchema />

      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{ src: HERO_IMAGE, alt: TITLE }}
        pills={['Sahneva Blog', 'Eğlence & Motivasyon']}
        title={TITLE}
        description={metadata.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="9 dk okuma"
      >
        <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
          <p className="text-lg text-gray-700 font-medium italic m-0">
            Profesyonellik ile eğlence arasındaki hassas dengeyi kurmak, kurumsal etkinlik planlarken en zorlayıcı konulardan biridir.
          </p>
        </div>

        <p>2026&apos;da yapay zeka entegrasyonu, sürdürülebilirlik ve wellbeing odaklı deneyimler kurumsal etkinliklerin merkezine oturdu. Farklı zevk ve tercihlere sahip katılımcılar için hem ilham verici hem de etkileyici bir deneyim tasarlama sorumluluğu her zamankinden daha nüanslı bir anlam kazanıyor.</p>
        <p>Sahneva olarak yalnızca profesyonel hedefleri karşılayan değil, aynı zamanda katılımcılar üzerinde kalıcı ve olumlu bir etki bırakan etkinlikler planlamanın öneminin farkındayız. Bu rehber, 2026 trendlerini yakalayan ve organizasyonlarınızı herkesin keyifle hatırlayacağı deneyimlere dönüştürmek için hazırlanmıştır.</p>

        <figure className="my-10 not-prose">
          <Image src={HERO_IMAGE} alt="12 Eğlenceli Kurumsal Etkinlik" width={1200} height={675} className="rounded-2xl shadow-lg" priority />
        </figure>

        <h2>Kurumsal Etkinlik Nedir?</h2>
        <p>Kurumsal etkinlik; bir şirket tarafından çalışanları, müşterileri veya paydaşları için düzenlenen, belirli iş hedeflerine ulaşmayı ya da profesyonel ilişkileri geliştirmeyi amaçlayan planlı organizasyonlardır. Bu etkinlikler; konferanslardan seminerlere, atölye çalışmalarından ekip oluşturma programlarına, ürün lansmanlarından kutlama gecelerine kadar farklı formatlarda gerçekleştirilebilir.</p>

        <h2>Kurumsal Etkinlikler Neden Önemlidir?</h2>
        <p>Kurumsal etkinlikler, başarıyı görünür kılmak, iş motivasyonunu artırmak ve çalışanlara teşvik sağlamak açısından kritik bir rol oynar. Networking fırsatları sunar, ekip çalışmasını destekler ve bilgi paylaşımını teşvik eder.</p>

        {/* İçindekiler */}
        <nav className="not-prose bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
          <p className="font-bold text-gray-800 mb-3 text-base">📋 İçindekiler</p>
          <ul className="space-y-2 text-violet-700 text-sm list-none p-0 m-0">
            {etkinlikler.map((ad, i) => (
              <li key={i}>
                <a href={`#etkinlik-${i + 1}`} className="hover:underline">{i + 1}. {ad}</a>
              </li>
            ))}
          </ul>
        </nav>

        <h2 className="mt-16">12 Eğlenceli Kurumsal Etkinlik Fikri</h2>

        {/* 1 */}
        <h3 id="etkinlik-1" className="text-2xl font-bold mt-14 scroll-mt-20">1. AI Destekli Yaratıcı Atölye Etkinlikleri</h3>
        <p>Yapay zeka destekli atölyeler, 2026&apos;nın en güçlü kurumsal etkinlik trendlerinden biri haline geldi. Kintsugi gibi onarıcı sanat pratiklerinden AI destekli tasarım çalışmalarına kadar geniş bir yelpazeyi kapsar.</p>
        <Tip2026>AI destekli eşleştirme algoritmaları ile katılımcıları ilgi alanlarına göre gruplara ayırabilir, atölye verimliliğini önemli ölçüde artırabilirsiniz.</Tip2026>

        {/* 2 */}
        <h3 id="etkinlik-2" className="text-2xl font-bold mt-14 scroll-mt-20">2. Hibrit & Kapsayıcı Spor Festivalleri</h3>
        <p>Kurumsal spor etkinlikleri 2026&apos;da hibrit ve kapsayıcı bir format kazandı. Yalnızca rekabetçi katılımcılara değil, tüm fiziksel seviyelere hitap eder.</p>

        {/* 3 */}
        <h3 id="etkinlik-3" className="text-2xl font-bold mt-14 scroll-mt-20">3. İş Networking Etkinlikleri</h3>
        <figure className="my-10 not-prose">
          <Image src={IMG_KONFERANS} alt="Geniş konferans salonu" width={1200} height={675} className="h-auto w-full rounded-2xl" loading="lazy" />
        </figure>
        <p>İş networking etkinlikleri, bağlantıları güçlendirmek ve yeni bakış açıları kazanmak açısından değerli platformlardır.</p>

        {/* 4 */}
        <h3 id="etkinlik-4" className="text-2xl font-bold mt-14 scroll-mt-20">4. Immersive & AR Destekli Gizem Maceraları</h3>
        <figure className="my-10 not-prose">
          <Image src={IMG_LED_ENSTALASYON} alt="Kurumsal LED enstalasyon" width={1200} height={675} className="h-auto w-full rounded-2xl" loading="lazy" />
        </figure>

        {/* 5 */}
        <h3 id="etkinlik-5" className="text-2xl font-bold mt-14 scroll-mt-20">5. Amaç Odaklı Sosyal Etki Etkinlikleri</h3>
        <MidCTA />

        {/* 6 */}
        <h3 id="etkinlik-6" className="text-2xl font-bold mt-14 scroll-mt-20">6. Duyusal & Multi-Genre Müzik Deneyimleri</h3>
        
        {/* 7 */}
        <h3 id="etkinlik-7" className="text-2xl font-bold mt-14 scroll-mt-20">7. Kurumsal Gala Yemekleri</h3>
        <figure className="my-10 not-prose">
          <Image src={IMG_GALA} alt="Gala gecesi truss ve LED kurulumu" width={1200} height={675} className="h-auto w-full rounded-2xl" loading="lazy" />
        </figure>

        {/* 8 */}
        <h3 id="etkinlik-8" className="text-2xl font-bold mt-14 scroll-mt-20">8. Gamification & AI Destekli Eğlence Yarışmaları</h3>

        {/* 9 */}
        <h3 id="etkinlik-9" className="text-2xl font-bold mt-14 scroll-mt-20">9. Yiyecek & İçecek Tadım Kurumsal Etkinlikleri</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
          <Image src={IMG_SEFFAF_CADIR} alt="Şeffaf çadır kokteyl" width={600} height={400} className="rounded-xl shadow-md" />
          <Image src={IMG_ACIK_HAVA} alt="Açık hava lüks davet" width={600} height={400} className="rounded-xl shadow-md" />
        </div>

        {/* 10 */}
        <h3 id="etkinlik-10" className="text-2xl font-bold mt-14 scroll-mt-20">10. Micro-Learning & İnteraktif Bilgi Oturumları</h3>
        <figure className="my-10 not-prose">
          <Image src={IMG_PANEL} alt="Kurumsal panel konuşmacı sahne" width={1200} height={675} className="h-auto w-full rounded-2xl" loading="lazy" />
        </figure>

        {/* 11 */}
        <h3 id="etkinlik-11" className="text-2xl font-bold mt-14 scroll-mt-20">11. Kurumsal Ödül Törenleri</h3>
        <figure className="my-10 not-prose">
          <Image src={IMG_PROTOKOL} alt="Protokol sahne backwall" width={1200} height={675} className="h-auto w-full rounded-2xl" loading="lazy" />
        </figure>

        {/* 12 */}
        <h3 id="etkinlik-12" className="text-2xl font-bold mt-14 scroll-mt-20">12. Kurumsal Komedi Etkinlikleri</h3>

        <h2 className="mt-16 scroll-mt-20">Sahneva&apos;da Kurumsal Etkinlikler</h2>
        <p>Sahneva, çok yönlü organizasyon çözümleri ve güçlü teknik altyapısıyla kurumsal etkinliklerin farklı ihtiyaçlarına uyum sağlayan dinamik bir yapı sunar.</p>

        <div className="not-prose mt-16 bg-gradient-to-br from-violet-900 to-fuchsia-900 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-black mb-6">Hangi fikri şirketinize uyarlayalım?</h3>
          <p className="text-xl mb-8">Hemen bizimle iletişime geçin, size özel teklif hazırlayalım!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/905453048671" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 font-bold py-5 px-12 rounded-2xl text-lg transition-transform hover:scale-105">💬 WhatsApp&apos;tan Yazın</a>
            <a href="tel:+905453048671" className="bg-white text-violet-900 hover:bg-violet-50 font-bold py-5 px-12 rounded-2xl text-lg transition-transform hover:scale-105">📞 Hemen Arayın</a>
          </div>
        </div>

        <SmartBlogSuggestions
          currentSlug="12-eglenceli-kurumsal-etkinlik-fikri"
          currentCategory={metadata.category}
          currentKeywords={metadata.keywords}
        />

        <BlogRelatedLinks services={[
          { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
          { href: "/sahne-kiralama", label: "Sahne Kiralama" },
          { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
          { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemi" },
          { href: "/cadir-kiralama", label: "Çadır Kiralama" },
          { href: "/truss-kiralama", label: "Truss Kiralama" },
        ]} />

      </BlogLayout>
    </>
  );
}

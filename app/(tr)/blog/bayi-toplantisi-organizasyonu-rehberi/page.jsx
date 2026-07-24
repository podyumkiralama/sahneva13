// app/(tr)/blog/bayi-toplantisi-organizasyonu-rehberi/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import InteractiveChecklist from "@/components/blog/InteractiveChecklist.client";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

/* ================== YAPILANDIRMA & SABİTLER ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const BLOG_URL = `${SITE_URL}/blog/bayi-toplantisi-organizasyonu-rehberi`;
const PUBLISH_DATE = "2026-07-24T09:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile(
  "app/(tr)/blog/bayi-toplantisi-organizasyonu-rehberi/page.jsx",
  "2026-07-24T09:00:00+03:00"
);
const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const HERO_IMAGE = "/img/blog/bayi-toplantisi-organizasyonu-rehberi-hero.webp";
const FEATURED_IMAGE = HERO_IMAGE;
const OG_IMAGE = HERO_IMAGE;
const WA_URL =
  "https://wa.me/905453048671?text=" +
  encodeURIComponent("Merhaba, bayi toplantısı organizasyonu için teklif almak istiyorum.");

const TOC_ITEMS = [
  { href: "#s1", label: "Bayi toplantısı nedir?" },
  { href: "#s2", label: "Format seçimi" },
  { href: "#s3", label: "Salon ve şehir dışı lojistiği" },
  { href: "#s4", label: "Program ve run-of-show" },
  { href: "#s5", label: "Sahne ve podyum" },
  { href: "#s6", label: "LED ekran ve sunum rejisi" },
  { href: "#s7", label: "Ses sistemi" },
  { href: "#s8", label: "Ödül gecesi prodüksiyonu" },
  { href: "#s9", label: "Katılımcı etkileşimi" },
  { href: "#s10", label: "Bütçe planı" },
  { href: "#s11", label: "Kurulum ve prova" },
  { href: "#faq", label: "Sık sorulan sorular" },
];

const CORNERSTONE_LINKS = [
  { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemleri" },
];

/* ================== META DATA ================== */
export const metadata = {
  title: "Bayi Toplantısı Organizasyonu Rehberi 2026",
  description:
    "Bayi toplantısı organizasyonu rehberi: format seçimi, salon ve şehir dışı lojistiği, sahne-LED-ses kurgusu, ödül gecesi prodüksiyonu ve indirilebilir kontrol listesi.",
  alternates: {
    canonical: BLOG_URL,
  },
  image: HERO_IMAGE,
  openGraph: {
    title: "Bayi Toplantısı Organizasyonu Rehberi 2026 | Sahneva",
    description:
      "Bayi toplantısı organizasyonu: format, salon seçimi, teknik prodüksiyon, ödül gecesi ve run-of-show. Tek elden anahtar teslim kurulum rehberi.",
    url: BLOG_URL,
    siteName: "Sahneva",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Bayi toplantısı organizasyonu rehberi öne çıkan görseli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayi Toplantısı Organizasyonu Rehberi 2026",
    description:
      "Bayi toplantısı için format seçimi, salon lojistiği, teknik prodüksiyon ve ödül gecesi kurgusu kontrol listesi.",
    images: [`${SITE_URL}${OG_IMAGE}`],
  },
  keywords: [
    "bayi toplantısı organizasyonu",
    "bayi toplantısı",
    "bayi buluşması",
    "satış toplantısı organizasyonu",
    "kurumsal organizasyon",
    "sahne kiralama",
    "LED ekran kiralama",
    "ödül gecesi organizasyonu",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  date: PUBLISH_DATE,
  category: "Kurumsal Etkinlik",
};

/* ================== FAQ VERİLERİ ================== */
const FAQ_ITEMS = [
  {
    question: "Bayi toplantısı organizasyonu ne kadar önceden planlanmalı?",
    answer:
      "Şehir dışından gelen bayi sayısı yüksekse ve gecede ödül töreni/gala varsa 8–12 hafta önceden başlamak idealdir. Salon rezervasyonu, konaklama blokajı ve teknik keşif bu sürede rahatça netleşir.",
  },
  {
    question: "Bayi toplantısında hangi teknik ekipmanlar gerekir?",
    answer:
      "Genel oturum için sahne/podyum, yüksek çözünürlüklü LED ekran, line array ses sistemi, sahne ışığı ve sunum/kamera rejisi temeldir. Ödül gecesi için ek ışık, canlı isim/skor grafiği ve varsa canlı yayın altyapısı eklenir.",
  },
  {
    question: "Bayi toplantısı ile ürün lansmanı arasındaki fark nedir?",
    answer:
      "Ürün lansmanı tek bir mesaj etrafında kısa ve gösterişli kurgulanır; bayi toplantısı ise genel oturum, hedef sunumu, eğitim ve çoğu zaman ödül gecesini birleştiren, güne yayılan çok bölümlü bir formattır.",
  },
];

/* ================== SCHEMA (JSON-LD) ================== */
function ArticleSchema() {
  const site = String(SITE_URL || "").replace(/\/$/, "");
  const orgId = `${site}/#org`;
  const editorId = `${site}/#editor`;
  const modified = MODIFIED_DATE || PUBLISH_DATE;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
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

/* ================== YEREL BİLEŞENLER (prose içi, not-prose) ================== */
function Figure({ src, alt, caption, priority = false, loading = "lazy" }) {
  return (
    <figure className="my-10 not-prose">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        sizes="(max-width: 768px) 100vw, 800px"
        className="w-full h-auto rounded-2xl shadow-lg"
        priority={priority}
        loading={loading}
        fetchPriority={priority ? "high" : "auto"}
      />
      {caption ? (
        <figcaption className="mt-3 text-sm text-gray-600 text-center font-medium">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ProTip({ title = "Profesyonel İpucu", children }) {
  return (
    <div className="my-10 bg-gradient-to-r from-indigo-50 to-blue-50 border border-blue-100 p-6 rounded-2xl shadow-sm not-prose">
      <div className="flex items-start gap-4">
        <span className="text-3xl flex-shrink-0" aria-hidden="true">💡</span>
        <div>
          <h4 className="text-blue-900 font-bold mt-0 mb-2 text-lg">{title}</h4>
          <div className="text-blue-800 text-base leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

function DataTable({ caption, columns, rows }) {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm text-left bg-white min-w-[600px]">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead className="bg-gray-50 text-gray-700 uppercase tracking-wider text-xs border-b">
          <tr>
            {columns.map((c) => (
              <th key={c} scope="col" className="p-4 font-bold">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((r, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition-colors">
              {r.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="p-4 font-bold text-blue-600">
                    {cell}
                  </th>
                ) : (
                  <td key={j} className="p-4 text-gray-700">
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Checklist({ storageKey, items }) {
  return (
    <div className="not-prose my-8">
      <InteractiveChecklist storageKey={storageKey} items={items} />
    </div>
  );
}

/* ================== ANA SAYFA ================== */
export default function BayiToplantisiPage() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "Bayi Toplantısı Organizasyonu Rehberi", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />

      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{ src: HERO_IMAGE, alt: "Bayi toplantısı için sahne, LED ekran ve salon kurulumu" }}
        pills={["Sahneva Blog", "Kurumsal Organizasyon", "Bayi Toplantısı"]}
        title="Bayi Toplantısı Organizasyonu Rehberi"
        description={metadata.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="11–13 dk okuma"
        tocItems={TOC_ITEMS}
        cornerstoneLinks={CORNERSTONE_LINKS}
        currentSlug={BLOG_URL.split("/").pop()}
        currentCategory={metadata?.category}
        currentKeywords={metadata?.keywords}
        primaryLinks={[
          { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon", icon: "🏢" },
          { href: "/sahne-kiralama", label: "Sahne Kiralama", icon: "🎭" },
          { href: "/led-ekran-kiralama", label: "LED Ekran", icon: "🟦" },
        ]}
        whatsappUrl={WA_URL}
      >
        <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
          <p className="text-lg text-gray-700 font-medium italic m-0">
            Bayi toplantısı; lansmandan farklı olarak tek bir mesaj değil, bir günün tamamına yayılan
            çok bölümlü bir prodüksiyondur: genel oturum, hedef sunumu, bayi eğitimi ve çoğu zaman bir
            ödül gecesi. En küçük teknik aksaklık salonun enerjisini düşürür.
          </p>
        </div>

        <p>
          Yüzlerce bayi şehir dışından gelir, program dakika dakika işler. Bu rehber; format seçiminden
          salon lojistiğine, sahne–LED–ses kurgusundan ödül gecesi prodüksiyonuna kadar tüm süreci tek
          yerde toplar. Detaya inmek istediğiniz her adımda ilgili hizmet ve rehberlere de yönlendiriyoruz.
        </p>

        <div className="not-prose my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["8–12 hafta", "İdeal planlama başlangıcı (şehir dışı katılım)"],
            ["3–4 bölüm", "Genel oturum + hedef + eğitim + ödül gecesi"],
            ["Tek Plan", "Sahne + LED + ses–ışık + reji + yayın"],
            ["%10–15", "Önerilen bütçe contingency payı"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-2xl font-black tracking-tight text-slate-900">{value}</div>
              <div className="mt-1 text-sm text-slate-600">{label}</div>
            </div>
          ))}
        </div>

        <ProTip title="Neden ayrı bir başlık?">
          Bayi toplantısını “kurumsal etkinlik” genel başlığıyla planlamak eksik kalır. Buradaki gerçek
          zorluk; aynı gün içinde ciddi bir hedef sunumundan coşkulu bir ödül gecesine geçişi kesintisiz
          yönetmektir. Sahne, LED içerik ve ışık kurgusu bu iki modu birlikte taşıyacak şekilde tasarlanmalı.
        </ProTip>

        {/* s1 */}
        <h2 id="s1">1. Bayi toplantısı nedir, ne zaman gerekir?</h2>
        <p>
          Bayi toplantısı; bir markanın bayi, distribütör ve satış ağını yılda bir ya da sezon başında bir
          araya getirdiği kurumsal buluşmadır. Amaç genellikle dört başlıkta toplanır: geçmiş dönemi
          değerlendirmek, yeni dönem hedeflerini paylaşmak, ürün/kampanya eğitimi vermek ve başarılı
          bayileri ödüllendirmek. Ürün lansmanından farkı burada başlar: lansman tek bir mesajı vurgular,
          bayi toplantısı ise bu dört amacı tek güne sığdıran çok bölümlü bir akıştır.
        </p>
        <p>
          Bu yüzden <Link href="/kurumsal-organizasyon">kurumsal organizasyon</Link> planında bayi
          toplantısı ayrı bir senaryo olarak ele alınmalı. Benzer bir çerçeveyi{" "}
          <Link href="/blog/urun-lansmani-organizasyonu">ürün lansmanı organizasyonu</Link> yazısıyla
          karşılaştırarak formatınıza karar verebilirsiniz.
        </p>
        <Checklist
          storageKey="bayi_s1_amac"
          items={[
            "Toplantının ana amacı net mi (hedef / eğitim / ödül / motivasyon)?",
            "Katılımcı profili belli mi (bayi, distribütör, saha ekibi)?",
            "Beklenen katılımcı sayısı ve şehir dağılımı çıkarıldı mı?",
            "Başarı kriteri tanımlandı mı (katılım, memnuniyet, hedef benimseme)?",
          ]}
        />

        {/* s2 */}
        <h2 id="s2">2. Formatı seçin: tek gün mü, kamp mı, gala mı?</h2>
        <p>
          Format kararı, teknik kapsamı doğrudan belirler. Yarım günlük bir bölge toplantısıyla, iki güne
          yayılan ve gecesinde ödül galası olan ulusal bayi buluşması aynı ekiple planlanmaz. Aşağıdaki
          tablo en sık kullanılan formatları ve teknik ağırlık merkezini özetler.
        </p>
        <DataTable
          caption="Bayi toplantısı formatları ve teknik odak"
          columns={["Format", "Süre / ölçek", "Teknik ağırlık"]}
          rows={[
            ["Bölge toplantısı", "Yarım gün, 50–150 kişi", "Sahne + LED + ses; sade reji"],
            ["Ulusal bayi buluşması", "1 tam gün, 200–800 kişi", "Büyük LED, line array, çok kameralı reji"],
            ["Toplantı + ödül gecesi", "1 gün + gala, 300–1000 kişi", "Gündüz sunum + gece show ışığı/gala"],
            ["Bayi kampı (2 gün)", "2 gün, konaklamalı", "Genel oturum + breakout + sosyal program"],
          ]}
        />
        <ProTip title="Karar kısayolu">
          Gecesinde ödül töreni varsa, salonu ve sahne tasarımını baştan iki modlu düşünün: gündüz
          “kurumsal sunum”, gece “gala show”. Aynı LED ve ışık altyapısını iki içerik setiyle kullanmak,
          ikinci bir kurulumdan çok daha ekonomiktir.
        </ProTip>
        <Checklist
          storageKey="bayi_s2_format"
          items={[
            "Format kararı (bölge / ulusal / gala / kamp) verildi mi?",
            "Gündüz oturum + gece program ayrımı netleştirildi mi?",
            "Breakout / eğitim oturumu olacak mı?",
            "Sosyal program (yemek, gösteri, DJ) kapsamı belirlendi mi?",
          ]}
        />

        {/* s3 */}
        <h2 id="s3">3. Salon ve şehir dışı lojistiği</h2>
        <p>
          Bayi toplantısının en büyük operasyonel farkı katılımcıların çoğunun şehir dışından gelmesidir.
          Bu da salon seçimini konaklama, ulaşım ve karşılama akışıyla birlikte düşünmeyi gerektirir. Otel
          balo salonu çoğu zaman en pratik çözümdür; çünkü konaklama, catering ve toplantı alanı tek noktada
          birleşir. Ancak balo salonlarında tavan yüksekliği, kolon konumları ve elektrik kapasitesi teknik
          tasarımı sınırlayabilir.
        </p>
        <Figure
          src="/img/blog/bayi-toplantisi-salon-toplanti-duzeni.webp"
          alt="Bayi toplantısı için otel toplantı salonunda U düzeni oturma planı"
          caption="Salon yerleşiminde tavan yüksekliği, oturma düzeni ve görüş açıları teknik tasarımı doğrudan belirler."
        />
        <DataTable
          caption="Teknik keşifte bayi toplantısına özel kontroller"
          columns={["Başlık", "Ne bakılır?", "Neden önemli?"]}
          rows={[
            ["Elektrik", "kW / pano / topraklama", "LED + ışık + ses aynı anda yüklenir"],
            ["Tavan", "yükseklik / asma nokta / rigging izni", "LED yüksekliği ve truss askısı buna bağlı"],
            ["Kolon & görüş", "ölü açı / arka sıra hattı", "Yüzlerce kişide her sıra sahneyi görmeli"],
            ["Yükleme", "kapı / asansör / kat", "Büyük LED ve truss taşıma güvenliği"],
            ["Konaklama", "oda blokajı / salon yakınlığı", "Karşılama ve zaman yönetimi"],
          ]}
        />
        <Checklist
          storageKey="bayi_s3_salon"
          items={[
            "Salon kapasitesi oturma düzenine göre teyit edildi mi?",
            "Tavan yüksekliği ve asma nokta / rigging izni kontrol edildi mi?",
            "Elektrik kapasitesi teknik ekiple ölçüldü mü?",
            "Konaklama blokajı ve karşılama akışı planlandı mı?",
            "Yükleme–boşaltma güzergâhı ve saatleri belirlendi mi?",
          ]}
        />

        {/* s4 */}
        <h2 id="s4">4. Program akışı ve run-of-show</h2>
        <p>
          Bayi toplantısında program yoğundur ve tempo değişir: açılış, üst yönetim konuşması, geçmiş dönem
          sonuçları, yeni hedefler, ürün/kampanya, ara, eğitim ve akşam ödül gecesi. Her geçiş; LED içeriği,
          ışık atmosferi ve ses kaynağının birlikte değişmesi demektir. Bu yüzden dakika dakika bir
          run-of-show dosyası, teknik prodüksiyonun sigortasıdır.
        </p>
        <DataTable
          caption="Örnek bir gün akışı (run-of-show özeti)"
          columns={["Saat", "Bölüm", "Teknik cue"]}
          rows={[
            ["09:30", "Karşılama & kayıt", "Fuaye ses, karşılama LED döngüsü"],
            ["10:00", "Açılış + üst yönetim", "Intro video, sahne ışığı, tek yaka mikrofon"],
            ["10:45", "Dönem sonuçları + hedefler", "Grafik/sunum rejisi, çoklu ekran"],
            ["12:30", "Öğle & networking", "Fuaye müzik, ürün alanı LED"],
            ["14:00", "Eğitim / breakout", "Salon bölme, ek ses/LED setleri"],
            ["20:00", "Ödül gecesi & gala", "Show ışığı, isim/skor grafiği, DJ/sahne"],
          ]}
        />
        <ProTip title="Kritik zincir">
          Kurulum sırasını netleştirin: elektrik → LED → ses/ışık → reji/yayın. Bu sıraya uyulmazsa özellikle
          balo salonu gibi sınırlı sürede teslim edilen mekânlarda prova zamanı erir.
        </ProTip>
        <Checklist
          storageKey="bayi_s4_ros"
          items={[
            "Run-of-show dakika dakika hazır mı?",
            "Her bölüm için LED / ışık / ses cue’ları yazıldı mı?",
            "Konuşmacı listesi ve mikrofon planı çıkarıldı mı?",
            "Gündüz–gece geçiş provası takvime alındı mı?",
          ]}
        />

        {/* s5 */}
        <h2 id="s5">5. Sahne ve podyum planlaması</h2>
        <p>
          Sahne, hem ciddi bir hedef sunumunu hem de coşkulu bir ödül törenini taşıyacak ölçüde tasarlanmalı.
          Konuşmacı kürsüsü, ödül alan bayilerin çıkışı için yeterli genişlik ve güvenli basamaklar birlikte
          düşünülür. Yüzlerce kişilik salonda arka sıraların da görebilmesi için yeterli sahne yüksekliği
          kritik. Detaylar için <Link href="/sahne-kiralama">sahne kiralama</Link> ve{" "}
          <Link href="/podyum-kiralama">podyum kiralama</Link> sayfalarına göz atabilirsiniz.
        </p>
        <Figure
          src="/img/blog/bayi-toplantisi-sahne-podyum-kurulumu.webp"
          alt="Bayi toplantısı için sahne, kürsü ve LED ekran kurulumu"
          caption="Sahne genişliği ve çıkış rampası; ödül alan bayilerin akışı ve kamera hattı düşünülerek belirlenir."
        />
        <Checklist
          storageKey="bayi_s5_sahne"
          items={[
            "Sahne ölçüsü ve yüksekliği arka sıra görüşüne göre net mi?",
            "Ödül töreni için sahne çıkış/iniş akışı planlandı mı?",
            "Kürsü, konuşmacı ve sunum alanı yerleşimi belirlendi mi?",
            "Basamak güvenliği ve kaymaz yüzey planlandı mı?",
          ]}
        />

        {/* s6 */}
        <h2 id="s6">6. LED ekran ve sunum rejisi</h2>
        <p>
          Bayi toplantısında LED ekran; satış grafikleri, hedef tabloları, ürün görselleri ve ödül gecesi
          isim/skor animasyonlarının ana taşıyıcısıdır. Salon geniş ve izleme mesafesi uzunsa doğru piksel
          aralığı ile parlaklık, okunabilirliği belirler. Sunum rejisi (grafik operatörü) ise konuşmacı
          temposuyla slaytları senkron tutar. Bkz.{" "}
          <Link href="/led-ekran-kiralama">LED ekran kiralama</Link> ve{" "}
          <Link href="/blog/led-ekran-teknoloji-trendleri-2026">2026 LED trendleri</Link>.
        </p>
        <Figure
          src="/img/blog/bayi-toplantisi-fuaye-led-ekran-alani.webp"
          alt="Bayi toplantısı fuaye alanında dikey LED ekran ve marka standları"
          caption="Fuaye ve ürün alanında ek LED yüzeyler, aralarda marka ve kampanya iletişimini sürdürür."
        />
        <Checklist
          storageKey="bayi_s6_led"
          items={[
            "İzleme mesafesine uygun piksel aralığı seçildi mi?",
            "Salon aydınlığına göre yeterli parlaklık teyit edildi mi?",
            "Sunum/grafik operatörü ve yedek dosya akışı planlandı mı?",
            "Ödül gecesi grafikleri (isim/skor) önceden hazırlandı mı?",
          ]}
        />

        {/* s7 */}
        <h2 id="s7">7. Ses sistemi ve konuşulabilirlik</h2>
        <p>
          Bayi toplantısının kalbi konuşmadır: hedefler, sonuçlar ve eğitim salonun her köşesinde net
          duyulmalı. Geniş balo salonlarında{" "}
          <Link href="/ses-isik-sistemleri">ses ve ışık sistemleri</Link> doğru kalibre edilmezse arka
          sıralarda anlaşılırlık düşer. Kablosuz yaka/el mikrofonları, yedek kanallar ve gerekirse simultane
          çeviri altyapısı baştan planlanmalı.
        </p>
        <Figure
          src="/img/blog/bayi-toplantisi-ses-mikrofon-duzeni.webp"
          alt="Bayi toplantısı için mikrofonlu masa düzeni ve LED ekran arka fon"
          caption="Masa mikrofonları, yedek kanallar ve net bir reji akışı, konuşma ağırlıklı programda en büyük sigortadır."
        />
        <Checklist
          storageKey="bayi_s7_ses"
          items={[
            "Salon büyüklüğüne uygun ses sistemi (line array vb.) planlandı mı?",
            "Kablosuz mikrofon adedi ve yedek kanallar belirlendi mi?",
            "Konuşmacı sunum sesi / video sesi kaynakları test edildi mi?",
            "Gerekliyse simultane çeviri altyapısı eklendi mi?",
          ]}
        />

        {/* s8 */}
        <h2 id="s8">8. Ödül gecesi prodüksiyonu</h2>
        <p>
          Ödül gecesi, bayi toplantısının duygusal zirvesidir ve gündüzden tamamen farklı bir mod ister: show
          ışığı, müzik, sahneye çıkış anonsları ve LED’de isim/başarı grafikleri. Ödül kategorileri, kazanan
          listesi ve çıkış sırası önceden reji dosyasına işlenmeli; sahnede yaşanan “sıradaki kim?” tereddüdü
          bütün geceyi yavaşlatır. Coşkuyu artıracak sürpriz gösteri veya sanatçı için sahne ve ses kapasitesi
          baştan hesaba katılmalı.
        </p>
        <p>
          Gecenin sosyal ve motive edici tarafını güçlendirmek için{" "}
          <Link href="/blog/12-eglenceli-kurumsal-etkinlik-fikri">12 eğlenceli kurumsal etkinlik fikri</Link>{" "}
          yazısındaki formatlardan ilham alabilirsiniz.
        </p>
        <Figure
          src="/img/blog/bayi-toplantisi-odul-gecesi-gala.webp"
          alt="Bayi toplantısı ödül gecesi: gala dekoru, avize ve sahne ışığı"
          caption="Ödül gecesi gündüz oturumundan farklı bir mod ister: gala atmosferi, show ışığı ve sahne akışı birlikte planlanır."
        />
        <Checklist
          storageKey="bayi_s8_odul"
          items={[
            "Ödül kategorileri ve kazanan listesi kesinleşti mi?",
            "Sahneye çıkış sırası ve anons metinleri reji dosyasında mı?",
            "İsim/skor LED grafikleri hazır ve provalı mı?",
            "Gece için show ışığı ve müzik/DJ planı yapıldı mı?",
            "Ödül/plaket teslim akışı ve fotoğraf noktası belirlendi mi?",
          ]}
        />

        {/* s9 */}
        <h2 id="s9">9. Katılımcı etkileşimi ve ölçüm</h2>
        <p>
          Bayi toplantısı tek yönlü bir sunum olmamalı. Canlı anket, soru-cevap, mobil uygulama veya QR
          üzerinden geri bildirim, hem katılımı yükseltir hem de hedeflerin ne kadar benimsendiğini ölçmenizi
          sağlar. Bu etkileşim araçları LED reji ve ses planına en baştan dahil edilmeli; sonradan eklemek
          teknik olarak zorlaşır.
        </p>
        <Checklist
          storageKey="bayi_s9_etkilesim"
          items={[
            "Canlı anket / soru-cevap aracı belirlendi mi?",
            "Etkileşim ekranı LED reji akışına eklendi mi?",
            "Toplantı sonu memnuniyet ölçümü (QR/e-posta) planlandı mı?",
            "Bayi geri bildirimleri raporlanacak formatta toplanacak mı?",
          ]}
        />

        {/* s10 */}
        <h2 id="s10">10. Bütçeyi gerçekçi kurun</h2>
        <p>
          Bayi toplantısında teknik prodüksiyon; sahne, LED, ses–ışık ve rejinin yanında ödül gecesi için ek
          show ekipmanını da içerir. Bu kalemleri tek anahtar teslim pakette toplamak hem maliyeti hem
          sorumluluğu netleştirir. Son dakika talepleri (ek mikrofon, yedek operatör, revizyon) için %10–15
          contingency bırakın.
        </p>
        <Figure
          src="/img/blog/kurumsal-etkinlik-butce-infografik.webp"
          alt="Bayi toplantısı bütçe dağılımı infografiği"
          caption="Teknik prodüksiyonu ve ödül gecesi ekipmanını ayrı kalemlemek sürprizi azaltır."
        />
        <DataTable
          caption="Örnek bütçe dağılımı (yön verici)"
          columns={["Kalem", "Tahmini Oran (%)", "Not"]}
          rows={[
            ["Salon + Teknik Altyapı", "30–40", "Sahne / LED / ses–ışık / reji"],
            ["Ödül gecesi & show", "10–20", "Ek ışık, DJ/sahne, grafik üretimi"],
            ["Catering & İkram", "20–25", "Öğle + gala yemeği"],
            ["İçerik & Görsel Üretim", "10–15", "Sunum, LED içerik, ödül grafikleri"],
            ["Personel & Lojistik", "10–15", "Nakliye, kurulum, karşılama"],
            ["Contingency", "10–15", "Yedek ekipman ve son dakika revizyon"],
          ]}
        />
        <ProTip title="Anahtar teslim notu">
          Gündüz sunum + gece gala tek ekiple yürütüldüğünde kurulum, revizyon ve operasyon zamanı ciddi
          biçimde kısalır. Tek plan, tek sorumluluk noktası.
        </ProTip>
        <Checklist
          storageKey="bayi_s10_butce"
          items={[
            "Teknik prodüksiyon ve ödül gecesi kalemleri ayrı bütçelendi mi?",
            "Contingency (%10–15) eklendi mi?",
            "Tekliflerde teknik detaylar (LED / ses / ışık) net mi?",
            "Nakliye, kurulum ve söküm süreleri gerçekçi mi?",
          ]}
        />

        {/* s11 */}
        <h2 id="s11">11. Kurulum, prova ve gün yönetimi</h2>
        <p>
          Sorunsuz bir bayi toplantısı şans değil, provadır. Gündüz oturumundan gece galasına geçiş dahil tüm
          cue’lar sahnede en az bir kez çalıştırılmalı. Konuşmacı provaları, mikrofon testleri ve ödül gecesi
          çıkış akışı ayrı ayrı denenmeli. Etkinlik günü ise son tur kontrol günüdür.
        </p>
        <Checklist
          storageKey="bayi_s11_gun"
          items={[
            "Tüm cue’lar (gündüz + gece) sahnede test edildi mi?",
            "Konuşmacı ve ödül töreni provaları tamamlandı mı?",
            "Ses–ışık–LED senkron kontrolü yapıldı mı?",
            "Ekip iletişim listesi ve yedek senaryo hazır mı?",
            "Son walk-through ve ekipman kontrolü tamamlandı mı?",
          ]}
        />

        {/* FAQ */}
        <h2 id="faq">Sık Sorulan Sorular</h2>
        <section aria-labelledby="faq-heading" className="not-prose space-y-3 mt-6">
          <h3 id="faq-heading" className="sr-only">Sıkça Sorulan Sorular</h3>
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden open:ring-2 open:ring-blue-100 open:border-blue-300 transition-all duration-200"
            >
              <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer font-semibold text-gray-800 select-none bg-gray-50/50 hover:bg-gray-50 transition-colors">
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
          <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">
            Bayi toplantınızı tek elden planlayalım
          </h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10 text-lg">
            Bayi sayısı, şehir ve tarih bilgisini yazın; teknik keşiften ödül gecesine kadar tüm süreci tek
            elden yönetelim. Çoğu projede 2 saat içinde projelendirilmiş teklif çıkıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="https://wa.me/905453048671"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="WhatsApp üzerinden teklif isteyin — yeni sekmede açılır"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg"
            >
              <span>💬</span> WhatsApp’tan Yazın
            </a>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg"
            >
              <span>📩</span> İletişim Formu
            </Link>
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
  );
}

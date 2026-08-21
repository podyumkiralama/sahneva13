// app/(tr)/blog/teknik-produksiyon-fiyatlandirma-rehberi-2026/page.jsx
//
// 21 Agustos 2026 — yazi alici tarafina cevrildi.
// Onceki hali tedarikci mantigina gore kurulmustu: "Ek Hizmetler Asil Kardir",
// "Algi ve Psikolojik Fiyatlandirma", "yogun donemlerde fiyati artirmak toplam
// geliri optimize eder". Musteriye donuk bir sitede bu hem teklife guveni
// dusuruyor hem de rakibe fiyatlama stratejisi ogretiyordu.
// Karlilik / upsell / gelir optimizasyonu bolumleri tamamen kaldirildi ve
// yazi EN esiyle ayni alti alici odakli bolume indirildi.
//
// KORUNANLAR: URL, canonical, datePublished, karsilikli hreflang (tr <-> en).

import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";
import { buildLanguageAlternates } from "@/lib/seo/alternates";

/* ================== YAPILANDIRMA & SABİTLER ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const SLUG = "/blog/teknik-produksiyon-fiyatlandirma-rehberi-2026";
const BLOG_URL = `${SITE_URL}${SLUG}`;
const PUBLISH_DATE = "2026-04-07T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile(
  "app/(tr)/blog/teknik-produksiyon-fiyatlandirma-rehberi-2026/page.jsx",
  "2026-08-21T00:00:00+03:00"
);
const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const HERO_IMAGE = "/img/blog/kurumsal-etkinlik-led-ekran-sahne.webp";
const OG_IMAGE = HERO_IMAGE;
const WA_URL =
  "https://wa.me/905453048671?text=" +
  encodeURIComponent("Merhaba, etkinliğimiz için kalem kalem teknik prodüksiyon teklifi almak istiyorum.");

const TOC_ITEMS = [
  { href: "#s1", label: "Maliyeti belirleyen unsurlar" },
  { href: "#s2", label: "Teklifte ayrı fiyatlanan kalemler" },
  { href: "#s3", label: "Sezon, şehir, mekân ve lojistik" },
  { href: "#s4", label: "Teklifleri aynı kapsamda karşılaştırma" },
  { href: "#s5", label: "Eksik veya riskli teklif işaretleri" },
  { href: "#s6", label: "Gönderilecek brief" },
  { href: "#sss", label: "Sık sorulan sorular" },
];

const CORNERSTONE_LINKS = [
  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemleri" },
  { href: "/podyum-kurulum-fiyatlari", label: "Podyum Kurulum Fiyatları" },
];

const PAGE_TITLE = "Teknik Prodüksiyon Maliyetleri 2026";
const PAGE_DESCRIPTION =
  "Teknik prodüksiyon maliyetini ne belirler, teklifte hangi kalemler ayrı fiyatlanır ve iki teklif aynı kapsam üzerinden nasıl karşılaştırılır.";

/* ================== SSS ================== */
const SSS = [
  {
    q: "Teknik prodüksiyon maliyetini ne belirler?",
    a: "Altı girdi her şeyden fazla etkiler: kurulumun fiziksel ölçeği (sahne alanı, ekran metrekaresi, rig ağırlığı), ekipman sınıfı, ekip sayısı ve kaç vardiya çalıştığı, kurulum-söküm süresi, nakliye mesafesi ve mekânın kendi kısıtları. Ekipman kalemi çoğu projede en büyük kalem değildir; ekip, süre ve erişim genellikle onu geçer.",
  },
  {
    q: "Bir teklifte hangi kalemler ayrı görünmeli?",
    a: "Disiplin bazında ekipman, rol ve vardiya bazında ekip, nakliye, kurulum ve söküm, halı-skört gibi sarf kalemleri, enerji dağıtımı, rigging ve yük hesabı, canlı yayın penceresi için operatörler, yedeklilik ve stand-by. Kalemlerin ayrı yazılması teklifin şişirildiği anlamına gelmez; hiçbir şeyin sessizce kapsam dışı bırakılmadığını doğrulamanın yoludur.",
  },
  {
    q: "Aynı etkinlik için gelen iki teklif neden çok farklı olabiliyor?",
    a: "Neredeyse her zaman farklı kapsamları fiyatladıkları için. Biri kurulum-sökümü ekipman kalemine dahil ederken diğeri ayrı yazıyor olabilir; biri enerjiyi mekânın sağladığını varsaymış olabilir; biri daha geniş bir pixel pitch veya daha az ekip hesaplamış olabilir. Kapsamı önce eşitleyin — aynı metrekare, aynı teknik özellik, aynı gün sayısı, aynı ekip — aradaki fark genellikle belirgin şekilde daralır.",
  },
  {
    q: "Sezon ve şehir fiyatı değiştirir mi?",
    a: "Evet. Prodüksiyon zaman bazlıdır: aynı ekipman aynı gün iki etkinlikte olamaz, bu yüzden yoğun tarihlerde esneklik azalır. Depoya olan mesafe nakliyeyi, belirli bir menzilin ötesinde ise ekip konaklamasını devreye sokar. Mekân erişimi — asansör ölçüsü, yükleme saatleri, yalnızca gece verilen kurulum penceresi — ekipman listesi hiç değişmeden bir vardiya ekleyebilir.",
  },
  {
    q: "Riskli bir teklifin işaretleri nelerdir?",
    a: "Kalem dökümü olmayan tek bir toplam, ekip sayısının yazılmaması, kurulum ve söküm sürelerinin belirtilmemesi, nakliyenin “netleşecek” olarak bırakılması, pixel pitch yazılmadan verilen LED kalemi, yük hesabı olmayan rigging ve bir arıza hâlinde stand-by’ın kimde olduğunun hiç geçmemesi. Bunların her biri ortadan kalkmış bir maliyet değil, henüz yazılmamış bir maliyettir.",
  },
  {
    q: "Doğru fiyat için hangi bilgileri göndermeliyim?",
    a: "Mekân ve salon adı, etkinlik tarihi ile kurulum-söküm erişim pencereleri, beklenen katılımcı sayısı ve oturum düzeni, etkinlik formatı, ekranda ne görüneceği ve oturumun canlı yayınlanıp yayınlanmayacağı. Bu altı bilgiyle teklif tahmini olmaktan çıkıp kalem kalem hazırlanabilir hâle gelir.",
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
        headline: "Teknik Prodüksiyon Maliyetleri: 2026 Alıcı Rehberi",
        description: PAGE_DESCRIPTION,
        image: `${site}${HERO_IMAGE}`,
        datePublished: PUBLISH_DATE,
        dateModified: modified,
        inLanguage: "tr-TR",
        author: { "@id": editorId },
        publisher: { "@id": orgId },
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        isPartOf: { "@type": "Blog", "@id": `${site}/blog#blog` },
        audience: {
          "@type": "BusinessAudience",
          name: "Etkinlik organizatörleri, kurumsal satın alma ekipleri, ajanslar ve PCO'lar",
        },
        about: [
          { "@type": "Thing", name: "Teknik prodüksiyon maliyetleri" },
          { "@type": "Thing", name: "Etkinlik teknik bütçesi" },
          { "@type": "Thing", name: "Teknik prodüksiyon tekliflerini karşılaştırma" },
          { "@type": "Thing", name: "Teklif kalemleri ve kapsam" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${BLOG_URL}#faq`,
        mainEntity: SSS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return <JsonLd data={schema} suppressHydrationWarning />;
}

/* ================== META DATA ================== */
export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: buildLanguageAlternates({
    canonical: SLUG,
    tr: SLUG,
    en: "/en/blog/technical-production-pricing-guide-2026",
  }),
  image: HERO_IMAGE,
  openGraph: {
    title: `${PAGE_TITLE} | Sahneva`,
    description: PAGE_DESCRIPTION,
    url: BLOG_URL,
    siteName: "Sahneva",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Teknik prodüksiyon maliyet kalemleri — sahne, LED ekran ve ses-ışık",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Sahneva`,
    description: PAGE_DESCRIPTION,
    images: [`${SITE_URL}${OG_IMAGE}`],
  },
  keywords: [
    "teknik prodüksiyon maliyetleri",
    "etkinlik teknik bütçesi",
    "teknik prodüksiyon teklifi karşılaştırma",
    "sahne kiralama maliyeti",
    "LED ekran kiralama maliyeti",
    "ses ışık bütçesi",
    "etkinlik teklif kalemleri",
    "kalem kalem teklif",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  date: PUBLISH_DATE,
  category: "Fiyatlandırma",
};

/* ================== YEREL BİLEŞENLER (prose içi, not-prose) ================== */
function ProTip({ title = "Kontrol edin", children }) {
  return (
    // Kenar notu: belge başlık hiyerarşisine girmemeli (h2 → h4 atlaması yaratıyordu).
    <aside
      role="note"
      aria-label={title}
      className="my-10 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100 p-6 rounded-2xl shadow-sm not-prose"
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl flex-shrink-0" aria-hidden="true">💡</span>
        <div>
          <p className="text-violet-900 font-bold mt-0 mb-2 text-lg">{title}</p>
          <div className="text-violet-800 text-base leading-relaxed">{children}</div>
        </div>
      </div>
    </aside>
  );
}

function DataTable({ caption, columns, rows }) {
  return (
    <div role="region" aria-label="Karşılaştırma tablosunu yatay kaydır" tabIndex={0} className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm text-left bg-white min-w-[600px]">
        {caption ? (
          <caption className="p-4 text-left text-sm font-bold text-gray-900 bg-gray-50 border-b">
            {caption}
          </caption>
        ) : null}
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
                  <th key={j} scope="row" className="p-4 font-bold text-violet-600">
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

function RiskList({ items }) {
  return (
    <ul className="not-prose my-8 space-y-3">
      {items.map(([baslik, metin]) => (
        <li key={baslik} className="flex gap-3 text-base leading-relaxed text-gray-700">
          <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" aria-hidden="true" />
          <span>
            <strong className="font-bold text-gray-900">{baslik}.</strong> {metin}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ================== ANA SAYFA ================== */
export default function TeknikProduksiyonFiyatlandirmaPage() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "Teknik Prodüksiyon Maliyetleri 2026", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />

      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{
          src: HERO_IMAGE,
          alt: "Profesyonel sahne, LED ekran ve ses-ışık sistemi ile kurumsal etkinlik prodüksiyonu",
        }}
        pills={["Sahneva Blog", "Bütçeleme", "Teklif Okuma"]}
        title="Teknik Prodüksiyon Maliyetleri: 2026 Alıcı Rehberi"
        description={PAGE_DESCRIPTION}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="8 dk okuma"
        tocItems={TOC_ITEMS}
        cornerstoneLinks={CORNERSTONE_LINKS}
        currentSlug={SLUG.split("/").pop()}
        currentCategory={metadata?.category}
        currentKeywords={metadata?.keywords}
        primaryLinks={[
          { href: "/sahne-kiralama", label: "Sahne Kiralama", icon: "🎭" },
          { href: "/led-ekran-kiralama", label: "LED Ekran", icon: "🟦" },
          { href: "/podyum-kurulum-fiyatlari", label: "Fiyat Listesi", icon: "📋" },
        ]}
        whatsappUrl={WA_URL}
      >
        <div className="bg-violet-50/50 p-6 rounded-xl border-l-4 border-violet-500 mb-8">
          <p className="text-lg text-gray-700 font-medium italic m-0">
            Bir etkinliği ilk kez bütçeleyen çoğu kişi, ekipman listesinin fiyat olduğunu varsayar.
            Nadiren öyledir. Ekip, kurulum süresi ve kamyonun yükleme rampasına ne kadar zor
            ulaştığı; teknik prodüksiyon bütçesini hoparlör ya da LED panel seçiminden daha fazla
            hareket ettirir.
          </p>
        </div>

        <p>
          Bu rehber üç soruya cevap veriyor: rakamı gerçekte ne belirliyor, teklifte hangi kalemleri
          ayrı görmeyi beklemelisiniz ve birbirine hiç benzemeyen iki teklifi nasıl karşılaştırırsınız.
        </p>

        {/* s1 */}
        <h2 id="s1">1. Teknik prodüksiyon maliyetini belirleyen unsurlar</h2>
        <p>
          Bir teknik prodüksiyon bütçesi altı girdiden kurulur. Birini değiştirdiğinizde toplam
          hareket eder; mekânı değiştirdiğinizde aynı anda birkaçı birden hareket eder. Hangi kolu
          çektiğinizi bilmek, bütçe konuşmasını pazarlıktan çıkarıp kapsam kararına dönüştürür.
        </p>

        <DataTable
          caption="Teknik prodüksiyon bütçesini hareket ettiren altı girdi"
          columns={["Girdi", "Neyi kapsar", "Toplamı neden hareket ettirir"]}
          rows={[
            [
              "Fiziksel ölçek",
              "Sahne alanı (m²), ekran ölçüsü, rig ağırlığı, çadır açıklığı",
              "Malzeme miktarını belirler ama araç sayısı ve ekip saatini de büyütür; ölçek tek başına artmaz",
            ],
            [
              "Ekipman sınıfı",
              "Pixel pitch, hoparlör tipi, armatür kalitesi, platform yük sınıfı",
              "Daha dar pixel pitch veya line array hem m² başına daha pahalıdır hem de arkasında daha fazla işleme gerektirir",
            ],
            [
              "Ekip ve vardiya",
              "Rigger, ses, ışık, görüntü, sahne elemanı, operatör",
              "Orta ölçekli kurulumlarda genellikle en büyük tek kalem; kişi sayısından çok vardiya sayısı belirleyicidir",
            ],
            [
              "Kurulum ve söküm süresi",
              "Kapı açılmadan önce ve son misafirden sonra sahada geçen saat",
              "İki günlük kurulum, bir günlüğün iki katı değildir; konaklama, stand-by ve mekân kirası da ekler",
            ],
            [
              "Nakliye",
              "Araç sayısı, mesafe, yükleme ekipmanı",
              "Depoya olan mesafe; belirli bir menzilin ötesinde ekip yolculuğu ve konaklaması devreye girer",
            ],
            [
              "Mekân kısıtları",
              "Asansör ölçüsü, yükleme saatleri, tavan yüksekliği, enerji, rigging noktaları",
              "Ekipman listesinde tek bir kalem değişmeden bütün bir vardiya ekleyebilir",
            ],
          ]}
        />

        <p>
          Beklenmedik olanı sonuncusudur. İki farklı salondaki birebir aynı teknik şartname, yalnızca
          birinin yük asansörü tam boy platform alırken diğerinin almaması yüzünden ciddi biçimde
          farklı fiyatlanabilir. Doğru teklif bu yüzden genellikle keşiften sonra çıkar, keşiften önce
          değil: bütçenin neyin karşılanabilir olduğuna karar vermesinden önce salon neyin mümkün
          olduğuna karar verir.
        </p>

        <ProTip title="Para genelde nerede">
          Kurumsal kurulumların çoğunda ekipman kirası en büyük kalem değildir. Ekip, kurulum saatleri
          ve lojistik birlikte onu geçer. Bir teklifte maliyetin neredeyse tamamı ekipman olarak
          görünüyorsa, ekip ve kurulum süresinin nereye gittiğini sorun — ortadan kalkmış olamazlar.
        </ProTip>

        {/* s2 */}
        <h2 id="s2">2. Teklifte ayrı fiyatlanabilen kalemler</h2>
        <p>
          Kalem kalem yazılmış bir teklif daha uzun bir fatura değil, okunabilir bir faturadır.
          Aşağıdakilerin her biri gerçekten ayrı bir maliyettir ve listelenmiş olmaları hiçbir şeyin
          varsayımla atlanmadığını kontrol etmenizi sağlar. Bir kalem eksikse, çoğunlukla ücretsiz
          verildiği için değil kapsam dışı bırakıldığı için eksiktir.
        </p>

        <DataTable
          caption="Teklifte görmeyi beklemeniz gereken kalemler ve her birinin kapsamı"
          columns={["Kalem", "Neyi kapsamalı", "Yoksa ne sorulmalı"]}
          rows={[
            [
              "Disiplin bazında ekipman",
              "Sahne, LED, ses, ışık, truss ayrı ayrı ve teknik özelliğiyle",
              "Hangi şartname varsayıldı — pitch, hoparlör tipi, platform yük sınıfı?",
            ],
            [
              "Rol ve vardiya bazında ekip",
              "Kaç kişi, hangi rollerde, kaç vardiya",
              "Kurulumu kim yapıyor, etkinlik sırasında kim işletiyor?",
            ],
            [
              "Nakliye",
              "Araç, mesafe, forklift veya vinç gibi yükleme ekipmanı",
              "Teslimat dahil mi, nereden?",
            ],
            [
              "Kurulum ve söküm",
              "Muğlak bir pay değil, saat olarak planlanmış kurulum ve söküm",
              "Ekip ne zaman geliyor, mekân ne zaman teslim ediliyor?",
            ],
            [
              "Yüzey ve bitiş",
              "Halı, skört, kenar koruma, rampa ve merdiven",
              "Platform bitmiş hâlde mi yoksa ham mı teslim ediliyor?",
            ],
            [
              "Enerji ve dağıtım",
              "Dağıtım panosu, kablolama, kablo kanalı, gerekiyorsa jeneratör",
              "Mekân enerjisinin yeterli olduğu varsayıldı mı, bunu kim doğruladı?",
            ],
            [
              "Rigging ve yük hesabı",
              "Nokta yükleri, hesap raporu, tavan rigging yoksa yerden taşıyıcı sistem",
              "Mekân için yük hesabını kim imzalıyor?",
            ],
            [
              "Canlı pencere operatörleri",
              "Şov sırasında ses, ışık ve sunum operatörleri",
              "Kapılar açıldıktan sonra masada biri var mı?",
            ],
            [
              "Yedeklilik ve stand-by",
              "Yedek kanal, yedek playback yolu, çağrılabilir ekip",
              "Kritik hat oturum sırasında arızalanırsa ne oluyor?",
            ],
          ]}
        />

        <p>
          LED kaleminde ekran metrekaresi, pixel pitch, kurulum-söküm, NovaStar processor ve reji
          kapsamını birlikte görmek için{" "}
          <Link href="/led-ekran-kiralama-fiyatlari">LED ekran kiralama fiyatları</Link> sayfasındaki
          başlangıç fiyat mantığını ayrıca inceleyebilirsiniz. Tek bir disiplinde alan, kaplama ve
          nakliyenin nasıl birleştiğini görmek içinse{" "}
          <Link href="/podyum-kurulum-fiyatlari">podyum kurulum fiyatları</Link> sayfasında m² bazlı
          rakamlar ve işlenmiş bir örnek yayımlanıyor.
        </p>

        {/* s3 */}
        <h2 id="s3">3. Sezon, şehir, mekân ve lojistik etkisi</h2>
        <p>
          Prodüksiyon, kiralanan çoğu üründen farklı olarak zamana bağlıdır: aynı LED duvar aynı akşam
          iki etkinlikte birden bulunamaz. Tarihler arasında göreceğiniz farkın çoğunu ve yoğun
          dönemlerin dışında bulacağınız esnekliğin tamamını bu tek kısıt açıklar.
        </p>

        <DataTable
          caption="Ekipman listesi dışında rakamı değiştiren etkenler"
          columns={["Etken", "Teklife tipik etkisi"]}
          rows={[
            [
              "Yoğun tarihler",
              "Yaz hafta sonları, mezuniyet ve ödül sezonu ile yılbaşı en az müsaitliğin olduğu dönemlerdir. Ekip ve stok en erken burada bağlanır; geç kalan talep yalnızca daha pahalı değil, daha az seçenekli olur.",
            ],
            [
              "Hafta içi ve sezon dışı",
              "Hafta içi ve kış tarihleri gerçek esnekliğin bulunduğu yerdir: ekip planlamasında, kurulum penceresinde ve ekipmanın sahada ne kadar kalabileceğinde.",
            ],
            [
              "Depoya mesafe",
              "Nakliye mesafeyle birlikte artar; belirli bir menzilin ötesinde ekip yolculuğu ve konaklaması hesaba katılır.",
            ],
            [
              "Mekân erişimi",
              "Yük asansörü ölçüsü, rampa randevu saatleri ve koridor dönüşleri salona fiziksel olarak ne girebileceğini belirler; gece kurulumunu zorunlu kılabilir.",
            ],
            [
              "İç mekân / açık hava",
              "Açık hava; hava koşullarına dayanıklı ekipman, balast veya ankraj, jeneratör ve bir B planı ekler. Bunların hepsi gerçek kalemlerdir.",
            ],
            [
              "Paylaşılan kurulum penceresi",
              "Kongre ve fuar mekânlarında zemini ve yük asansörünü başka yüklenicilerle paylaşırsınız; bu, ekipman eklemeden kurulum süresini uzatır.",
            ],
          ]}
        />

        <ProTip title="Tarihiniz esnekse">
          Kurumsal bir etkinliği haziranda cumartesiden sezon dışı bir hafta içine almak, genellikle
          size açılan seçenek yelpazesini fiyatı düşürdüğünden daha fazla genişletir. Takvimi
          sabitlemeden önce alternatif tarihlerde ekip ve stok durumunun ne olduğunu sorun.
        </ProTip>

        {/* s4 */}
        <h2 id="s4">4. Teklifleri aynı kapsam üzerinden karşılaştırma</h2>
        <p>
          Aynı etkinlik için gelen iki teklif çoğu zaman ciddi biçimde farklıdır ve sebebi neredeyse
          hiçbir zaman bir tedarikçinin pahalı olması değildir. Farklı işleri fiyatlıyor olmalarıdır.
          Toplamları karşılaştırmadan önce kapsamı eşitleyin.
        </p>

        <DataTable
          caption="Toplamları karşılaştırmadan önce bunları eşitleyin"
          columns={["Kontrol", "İki teklifte hizalanacak bilgi"]}
          rows={[
            ["Alan ve ölçü", "Sahne m², ekran ölçüsü (metre), platform yüksekliği — tarif eden kelimeler değil"],
            ["Teknik şartname", "Pixel pitch, hoparlör tipi, armatür adedi, platform yük sınıfı"],
            ["Gün sayısı", "Kiralama günü mü etkinlik günü mü; kurulum günü ücretlendiriliyor mu?"],
            ["Ekip", "Kişi sayısı, roller ve her biri için kaç vardiya"],
            ["Dahil / hariç", "Nakliye, kurulum, söküm, enerji, rigging, operatörler"],
            ["Saha varsayımları", "Enerjiyi kim sağlıyor, keşif yapıldı mı, hangi erişim rotası varsayıldı"],
            ["Yedeklilik", "Stand-by ekip, yedek kanal, yedek playback yolu"],
            ["Vergi ve şartlar", "Rakam KDV dahil mi, ödeme takvimi nedir"],
          ]}
        />

        <p>
          Bunlar hizalandıktan sonra kalan fark anlamlıdır ve doğrudan sorulmaya değer. Deneyimimizde
          dürüst cevap genellikle üçünden biri olur: farklı bir ekipman sınıfı, farklı bir ekip
          varsayımı veya tedarikçilerden birinin mekânı çoktan keşfetmiş, diğerinin etmemiş olması.
        </p>

        {/* s5 */}
        <h2 id="s5">5. Eksik veya riskli teklif işaretleri</h2>
        <p>
          Ucuz teklif ile eksik teklif kurulum gününe kadar birbirinin aynısı görünür. Aşağıdakiler,
          sonradan — elinizde ne pazarlık gücü ne de zaman varken — ek işe dönüşen atlamalardır.
        </p>

        <RiskList
          items={[
            ["Kalem dökümü olmayan tek toplam", "İhtiyacınız olmayanı çıkaramazsınız, hiç dahil edilmemiş olanı da göremezsiniz."],
            ["Ekip sayısı veya vardiya planı yok", "İşçilik genellikle en büyük değişkendir. Yazılmamışsa kapsanmamıştır."],
            ["Kurulum ve söküm süresi yok", "Erişim saatleri mekânın kısıtıdır. Bunu atlayan bir teklif mekânın kurallarını okumamıştır."],
            ["Nakliye “netleşecek”", "Mesafe teklif aşamasında bilinebilir. Açık bırakmak, bilinen bir maliyeti sizin risk hanenize taşır."],
            ["Pixel pitch yazılmamış LED", "Pitch hem fiyatı hem de ön sıradakinin ekranı okuyup okuyamayacağını belirler."],
            ["Yük hesabı olmayan rigging", "Bu bir evrak değil güvenlik belgesidir. Yokluğu bu listedeki en ciddi maddedir."],
            ["Stand-by veya yedekliliğe hiç değinilmemiş", "Canlı pencerede kritik hat arızalanırsa ne olduğunu sorun."],
            ["KDV ve ödeme şartları belirsiz", "Vergi hariç çıkan bir rakam karşılaştırmanızın tamamını yeniden sıralar."],
          ]}
        />

        <ProTip title="En işe yarayan tek soru">
          Her tedarikçiye sorun: “Bu teklifin kapsamı dışında kalan nedir?” İyi kurgulanmış bir teklif
          bunu tek cümlede yanıtlar. Muğlak olan hiç yanıtlayamaz — aradığınız bilgi de zaten budur.
        </ProTip>

        {/* s6 */}
        <h2 id="s6">6. Doğru fiyat almak için gönderilecek brief</h2>
        <p>
          Teklif turlarının çoğu ilk brief eksik olduğu için iki üç revizyona gider. Aşağıdakileri
          baştan göndermek, ilk teklifin sonuncusuna yakın çıkması ve içindeki her kalemin
          istediğiniz bir şeye karşılık gelmesi anlamına gelir.
        </p>

        <DataTable
          caption="Bu altısını gönderin, teklif tahmin değil kalem kalem hazırlansın"
          columns={["Bilgi", "Teklifi neden değiştirir"]}
          rows={[
            [
              "Mekân ve salon adı",
              "Tavan yüksekliği, rigging noktaları ve yükleme rotası adı konmuş bir salonun bilinen özellikleridir. Tek başına bu alan teknik seçeneklerin çoğunu eler veya açar.",
            ],
            [
              "Tarih ve erişim penceresi",
              "Etkinlik tarihi ile salonun kurulum ve söküm için gerçekten müsait olduğu saatler. Paylaşılan kurulum pencereleri erken bildirilmeli.",
            ],
            [
              "Katılımcı ve düzen",
              "Kişi sayısı ve oturum düzeni — tiyatro, kokteyl, yuvarlak masa. Kapsama ve görüş açıları düzeni takip eder, yalnızca kişi sayısını değil.",
            ],
            [
              "Etkinlik formatı",
              "Konferans, lansman, gala, ödül töreni, konser veya fuar. Format sahne geometrisini, mikrofon sayısını ve ekip büyüklüğünü belirler.",
            ],
            [
              "Ekranda ne görünecek",
              "Sunum, video, canlı kamera. Bu; ekranı, işleme zincirini ve operatör gerekip gerekmediğini belirler.",
            ],
            [
              "Canlı yayın veya kayıt",
              "Oturum canlı yayınlanacak mı, kaydedilecek mi ve hangi platforma. Kamera ve encode ayrı bir kapsamdır.",
            ],
          ]}
        />

        <p>
          Briefin bir kısmı gerçekten netleşmediyse tahmin etmek yerine bunu belirtin. İyi bir
          tedarikçi belirsiz kalemi, varsayımı toplamın içine gömmek yerine açıkça işaretlenmiş bir
          opsiyon olarak fiyatlar.
        </p>

        {/* SSS */}
        <h2 id="sss">Sık sorulan sorular</h2>
        <div className="not-prose my-8 space-y-4">
          {SSS.map((item) => (
            <details
              key={item.q}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-base font-bold text-gray-900">
                {item.q}
              </summary>
              <p className="mt-3 text-base leading-relaxed text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="not-prose mt-16 bg-gradient-to-br from-gray-900 to-violet-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">
            Etkinliğiniz için kalem kalem teklif alın
          </h3>
          <p className="text-violet-100 mb-8 max-w-xl mx-auto relative z-10 text-lg">
            Sahne, ses-ışık, LED ekran ve çadır kiralamada teknik keşiften söküme kadar tüm süreci tek
            elden yönetiyoruz. Yukarıdaki altı bilgiyi gönderin; kalem bazında ayrılmış, belirsiz
            kısımları toplamın içine gömmek yerine opsiyon olarak işaretlenmiş bir teklif alın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href={WA_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="WhatsApp üzerinden teklif isteyin — yeni sekmede açılır"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg"
            >
              <span>💬</span> WhatsApp’tan Yazın
            </a>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 bg-white text-violet-900 hover:bg-violet-50 font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg"
            >
              <span>📩</span> İletişim Formu
            </Link>
          </div>
        </div>

        <BlogRelatedLinks
          services={[
            { href: "/sahne-kiralama", label: "Sahne Kiralama" },
            { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
            { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemleri" },
            { href: "/podyum-kurulum-fiyatlari", label: "Podyum Kurulum Fiyatları" },
            { href: "/cadir-kiralama", label: "Çadır Kiralama" },
          ]}
        />
      </BlogLayout>
    </>
  );
}

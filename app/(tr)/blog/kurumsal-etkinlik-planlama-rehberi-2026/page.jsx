// app/(tr)/blog/kurumsal-etkinlik-planlama-rehberi-2026/page.jsx
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
const SLUG = "/blog/kurumsal-etkinlik-planlama-rehberi-2026";
const BLOG_URL = `${SITE_URL}${SLUG}`;
const PUBLISH_DATE = "2026-01-28T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile(
  "app/(tr)/blog/kurumsal-etkinlik-planlama-rehberi-2026/page.jsx",
  "2026-02-01T00:00:00+03:00"
);
const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const HERO_IMAGE = "/img/blog/kurumsal-etkinlik-timeline.webp";
const OG_IMAGE = HERO_IMAGE;
const PDF_HREF = "/files/kurumsal-etkinlik-kontrol-listesi-2026.pdf";
const WA_URL =
  "https://wa.me/905453048671?text=" +
  encodeURIComponent("Merhaba, kurumsal etkinlik planlaması için teklif almak istiyorum.");

const TOC_ITEMS = [
  { href: "#s1", label: "1. Etkinlik stratejisi" },
  { href: "#s1a", label: "1A. Mission–Audience–SMART" },
  { href: "#s2", label: "2. Ekip ve rol dağılımı" },
  { href: "#s3", label: "3. Zaman çizelgesi" },
  { href: "#s4", label: "4. Bütçe planı" },
  { href: "#s5", label: "5. Tema ve marka dili" },
  { href: "#s6", label: "6. Mekân ve teknik keşif" },
  { href: "#s6a", label: "6A. Hibrit run-of-show" },
  { href: "#s7", label: "7. Sahne ve podyum" },
  { href: "#s8", label: "8. LED ekran ve yayın" },
  { href: "#s9", label: "9. Çadır ve açık hava" },
  { href: "#s10", label: "10. Masa-sandalye ve akış" },
  { href: "#s11", label: "11. Kurulum ve prova" },
  { href: "#s11a", label: "11A. Etkinlik günü listesi" },
  { href: "#s12", label: "12. Etkinlik sonrası" },
  { href: "#s12a", label: "12A. Başarı ölçümü" },
];

const CORNERSTONE_LINKS = [
  { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemleri" },
];

/* ================== META DATA ================== */
export const metadata = {
  title: "2026 Kurumsal Etkinlik Planlama Rehberi",
  description:
    "Kurumsal etkinlik planlama rehberi: strateji, bütçe, zaman çizelgesi, sahne-LED-çadır, run-of-show ve indirilebilir kontrol listesi.",
  alternates: {
    canonical: BLOG_URL,
    languages: {
      "tr-TR": BLOG_URL,
      "en-US": `${SITE_URL}/en/blog/corporate-event-planning-guide-2026`,
      "x-default": `${SITE_URL}/en/blog/corporate-event-planning-guide-2026`,
    },
  },
  image: HERO_IMAGE,
  openGraph: {
    title: "2026 Kurumsal Etkinlik Planlama Rehberi | Sahneva",
    description:
      "Kurumsal etkinlik planlama rehberi: strateji, bütçe, zaman çizelgesi, sahne-LED-çadır, run-of-show ve indirilebilir kontrol listesi.",
    url: BLOG_URL,
    siteName: "Sahneva",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "2026 Kurumsal Etkinlik Planlama Rehberi öne çıkan görseli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 Kurumsal Etkinlik Planlama Rehberi",
    description:
      "Kurumsal etkinlik planlaması için strateji, bütçe, zaman çizelgesi ve teknik prodüksiyon kontrol listesi.",
    images: [`${SITE_URL}${OG_IMAGE}`],
  },
  keywords: [
    "kurumsal etkinlik planlama",
    "kurumsal etkinlik kontrol listesi",
    "sahne kiralama",
    "LED ekran kiralama",
    "teknik prodüksiyon",
    "run of show",
    "etkinlik bütçesi",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  date: PUBLISH_DATE,
  category: "Kurumsal Etkinlik",
};

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
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        headline:
          "2026 Kurumsal Etkinlik Planlama Rehberi: Kontrol Listesi ve Teknik İpuçları",
        description: metadata?.description,
        image: `${site}${HERO_IMAGE}`,
        datePublished: PUBLISH_DATE,
        dateModified: modified,
        inLanguage: "tr-TR",
        author: { "@id": editorId },
        publisher: { "@id": orgId },
        isPartOf: { "@type": "Blog", "@id": `${site}/blog#blog` },
        about: [
          { "@type": "Thing", name: "İstanbul kurumsal etkinlik firmaları" },
          { "@type": "Thing", name: "Profesyonel sahne ve LED ekran kiralama" },
          { "@type": "Thing", name: "Etkinlik yönetiminde teknik prodüksiyon" },
          { "@type": "Thing", name: "Hibrit etkinlik" },
          { "@type": "Thing", name: "Canlı yayın prodüksiyonu" },
        ],
        citation: [
          "Kaltura – State of Virtual Events 2023 (technical glitches / drop-off)",
          "Eventcube – Event industry statistics & hybrid/virtual trends",
          "Assorted 2025–2026 event industry benchmarks (hybrid becoming the norm)",
        ],
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
export default function KurumsalEtkinlikPlanlamaPage() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "2026 Kurumsal Etkinlik Planlama Rehberi", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />

      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{ src: HERO_IMAGE, alt: "Kurumsal etkinlik planlama rehberi için öne çıkan görsel" }}
        pills={["Sahneva Blog", "Kurumsal Etkinlik", "Planlama Rehberi"]}
        title="2026 Kurumsal Etkinlik Planlama Rehberi"
        description="En kapsamlı kontrol listesi ve teknik ipuçları: strateji, bütçe, run-of-show ve teknik prodüksiyon."
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="12–14 dk okuma"
        tocItems={TOC_ITEMS}
        cornerstoneLinks={CORNERSTONE_LINKS}
        currentSlug={SLUG.split("/").pop()}
        currentCategory={metadata?.category}
        currentKeywords={metadata?.keywords}
        primaryLinks={[
          { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon", icon: "🏢" },
          { href: PDF_HREF, label: "Kontrol Listesi PDF", icon: "📄" },
          { href: "/sahne-kiralama", label: "Sahne Kiralama", icon: "🎭" },
        ]}
        whatsappUrl={WA_URL}
      >
        <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
          <p className="text-lg text-gray-700 font-medium italic m-0">
            2026’da hibrit etkinlikler artık “alternatif” değil, norm haline geliyor. Sahne, LED ekran,
            ses–ışık ve yayın zincirini tek bir planla yönetmezseniz en küçük aksaklık, akışı ve bütçeyi
            hızla bozar. Bu rehber; stratejiden run-of-show’a kadar tüm süreci tek yerde toplar.
          </p>
        </div>

        <div className="not-prose my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["%65–68", "Hibrit etkinlik oranı (2025–2026 raporları)"],
            ["%25–46", "Teknik aksaklık sonrası terk/kriz riski aralığı"],
            ["2–3 ay", "İdeal planlama başlangıç süresi"],
            ["Tek Plan", "Sahne+LED+ses+ışık+yayın akışı"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-2xl font-black tracking-tight text-slate-900">{value}</div>
              <div className="mt-1 text-sm text-slate-600">{label}</div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500">
          Kaynak notu: Teknik aksaklık sonrası terk oranı için Kaltura “State of Virtual Events 2023” (1–2
          glitch sonrası ~%25, 3+ glitch sonrası ~%46). Ayrıca hibritleşme eğilimleri için Eventcube sektör
          istatistik derlemeleri ve 2025–2026 benchmark’ları.
        </p>

        <ProTip title="2026 notu">
          Hibrit işlerde sadece “m²” konuşmak yetmez. LED ekran + kamera + ses/ışık + yayın zinciri aynı
          dosyada yazılı olmalı; aksi halde sahada küçük bir sorun büyük gecikmeye döner.
        </ProTip>

        {/* s1 */}
        <h2 id="s1">1. Etkinlik stratejisini belirleyin</h2>
        <p>
          Bütçe veya mekâna dalmadan önce strateji net olmalı: etkinlik türü (lansman, bayi toplantısı,
          konferans, gala), hedef kitle, ana mesaj ve başarı ölçümü. İstanbul’da iş hacmi yüksek olduğu için
          kararlar erken netleşirse <strong>etkinlik yönetiminde teknik prodüksiyon</strong> planı da sağlam
          kurulur.
        </p>
        <ProTip title="Tek sayfa strateji">
          Amaç + kitle + format + SMART hedef + bütçe aralığı… Tek sayfa doküman; sahne, LED, ses-ışık ve
          yayın tekliflerini aynı çerçevede toplar.
        </ProTip>
        <Checklist
          storageKey="s1_strateji"
          items={[
            "Etkinliğin amacı ve hedef kitlesi yazılı hale getirildi mi?",
            "Format net mi (yüz yüze / hibrit / canlı yayın)?",
            "Başarı kriterleri (katılım, etkileşim, lead, memnuniyet) belirlendi mi?",
            "Bütçe aralığı ve onay süreci net mi?",
          ]}
        />

        {/* s1a */}
        <h2 id="s1a">1A. Mission–Audience–SMART: 2026’da stratejiyi kilitleyen çerçeve</h2>
        <p>
          “Katılım” tek başına hedef sayılmaz. Hibrit etkinliklerde ölçülebilir hedefler koymak (ör.
          “katılımcıların %80’i tüm oturumlara dahil olsun”) LED içerik akışını, yayın planını ve sahne
          geçişlerini otomatik olarak netleştirir.
        </p>
        <Checklist
          storageKey="s1a_smart"
          items={[
            "Mission: Etkinliğin ‘neden’i tek cümleyle yazıldı mı?",
            "Audience: Katılımcı profili net mi (rol/sektör/ihtiyaç)?",
            "SMART hedefler sayısal ve zamanlı mı?",
            "Hedef dokümanı ekip ve tedarikçilerle paylaşıldı mı?",
          ]}
        />

        {/* s2 */}
        <h2 id="s2">2. Ekip oluşturun ve rolleri netleştirin</h2>
        <p>
          Kurumsal etkinlikte “her şey bende” modeli çalışmaz. Proje yönetimi, bütçe, içerik,
          sahne–LED–ses–ışık, yayın/çekim, lojistik ve misafir yönetimi ayrı sorumluluklarla ilerlemeli. En
          kritik nokta: tek karar noktası.
        </p>
        <DataTable
          caption="Örnek rol dağılımı (kısa)"
          columns={["Sorumluluk", "Kim?", "Çıktı"]}
          rows={[
            ["Proje lideri", "İç ekip", "Tek plan, tek karar noktası"],
            ["Teknik prodüksiyon", "Sahneva / teknik ekip", "Sahne+LED+ses-ışık+yayın planı"],
            ["Lojistik", "Operasyon", "Nakliye/kurulum-söküm takvimi"],
            ["İçerik/brand", "Pazarlama", "Ajanda + görseller + davet akışı"],
          ]}
        />
        <Checklist
          storageKey="s2_ekip"
          items={[
            "Proje sorumlusu (tek karar noktası) belirlendi mi?",
            "Teknik prodüksiyon sorumlusu net mi?",
            "Kurulum–söküm ekipleri ve çalışma saatleri planlandı mı?",
            "Dış tedarikçiler (catering, güvenlik, DJ vb.) listelendi mi?",
          ]}
        />

        {/* s3 */}
        <h2 id="s3">3. Zaman çizelgesi oluşturun (geriye doğru)</h2>
        <p>
          Etkinliğin en görünmeyen ama en kritik parçası timeline’dır. Teknik keşif, üretim, kurulum, prova
          ve etkinlik günü akışı geriye doğru planlanmalı.
        </p>
        <Figure
          src="/img/blog/kurumsal-etkinlik-timeline.webp"
          alt="Kurumsal etkinlik planlama zaman çizelgesi"
          caption="Örnek timeline: teknik keşiften prova gününe kadar geriye doğru plan."
        />
        <DataTable
          caption="Pratik timeline örneği (geriye doğru)"
          columns={["Zaman", "İş", "Not"]}
          rows={[
            ["T-30 / T-21", "Teknik keşif + konsept + ilk teklifler", "Sahne/LED/çadır ölçüleri netleşir"],
            ["T-14 / T-10", "Ajanda kilitlenir + içerik üretimi başlar", "LED içerik ve yayın akışı planlanır"],
            ["T-7 / T-3", "Plan revizyonları + final teyitler", "Tedarikçi saatleri kesinleşir"],
            ["T-1", "Kurulum + test + prova", "Senkron testler, konuşmacı provası"],
            ["T", "Uygulama", "Run-of-show + komuta zinciri"],
          ]}
        />
        <Checklist
          storageKey="s3_timeline"
          items={[
            "Karar tarihleri ve teslim tarihleri timeline’a işlendi mi?",
            "Teknik keşif tarihi belirlendi mi?",
            "Kurulum, prova ve söküm saatleri net mi?",
            "Timeline tüm ekiple paylaşıldı mı?",
          ]}
        />

        {/* s4 */}
        <h2 id="s4">4. Bütçeyi gerçekçi kurun (contingency şart)</h2>
        <p>
          2026’da bütçenin büyük kısmı “mekân + teknik altyapı” tarafında toplanıyor. Sahne, LED ekran,
          ses–ışık ve yayın zincirini tek pakette düşünmek; hem maliyet hem sorumluluk yönetimini temizler.
          Son dakika talepleri için %10–15 contingency bırakın.
        </p>
        <Figure
          src="/img/blog/kurumsal-etkinlik-butce-infografik.webp"
          alt="Kurumsal etkinlik bütçe dağılımı infografiği"
          caption="Bütçeyi kalemlere bölmek, sürprizi azaltır. Contingency payını en baştan yazın."
        />
        <DataTable
          caption="Örnek bütçe dağılımı"
          columns={["Kalem", "Tahmini Oran (%)", "Not"]}
          rows={[
            ["Mekân + Teknik Altyapı", "35–45", "Sahne / LED / Çadır / Ses-ışık"],
            [
              "Teknik Prodüksiyon Paketi (Sahneva tümleşik)",
              "35–45 içinde",
              "Tek elden yönetim; revizyon, kurulum ve operasyon zamanını düşürür (özellikle büyük ölçeklerde).",
            ],
            ["Catering & İkram", "20–25", "Özel diyetler dahil"],
            ["Dekorasyon & Görsel", "15–20", "LED içerik üretimiyle beraber düşünün"],
            ["Personel & Lojistik", "10–15", "Nakliye + kurulum ekibi"],
            ["Contingency (beklenmeyen)", "10–15", "Ek kablo, yedek operatör, revizyon, ekstra ekip"],
          ]}
        />
        <ProTip title="Anahtar teslim notu">
          Büyük etkinliklerde “anahtar teslim teknik paket” (sahne + LED + ses/ışık + yayın) en az sürpriz
          çıkaran modeldir. Tek plan, tek sorumluluk.
        </ProTip>
        <Checklist
          storageKey="s4_butce"
          items={[
            "Teknik prodüksiyon bütçesi ayrı kalemlendi mi?",
            "Contingency (%10–15) eklendi mi?",
            "Nakliye/kurulum/söküm süreleri gerçekçi mi?",
            "Tekliflerde teknik detaylar (LED panel/yenileme vb.) net mi?",
          ]}
        />

        {/* s5 */}
        <h2 id="s5">5. Tema ve marka dili</h2>
        <p>
          Tema; sahne tasarımı, ışık renkleri, LED ekran görselleri ve basılı/dijital materyallerin ortak
          dilidir. LED içeriğini son haftaya bırakmak, sahada “son dakika revizyon” krizini büyütür.
        </p>
        <Checklist
          storageKey="s5_tema"
          items={[
            "Tema, marka kimliğiyle uyumlu mu?",
            "LED içerikler (çözünürlük/format) teknik ekiple onaylandı mı?",
            "Sosyal medya/PR görsel paketleri planlandı mı?",
          ]}
        />

        {/* s6 */}
        <h2 id="s6">6. Mekân ve teknik keşif</h2>
        <p>
          Mekân güzel olabilir ama teknik açıdan yetersizse risk büyür: elektrik kapasitesi, yükleme–boşaltma,
          tavan yüksekliği, görüş açıları, yayın için internet altyapısı… Teknik keşif, en pahalı hataları
          baştan önler.
        </p>
        <DataTable
          caption="Teknik keşifte hızlı kontrol"
          columns={["Başlık", "Ne bakılır?", "Neden önemli?"]}
          rows={[
            ["Elektrik", "kW / hat / sigorta", "LED + ses-ışık aynı anda yük bindirir"],
            ["Yerleşim", "görüş açıları / camera line", "LED ve sahne herkes tarafından görülmeli"],
            ["Yükleme", "rampa/asansör/kapı", "Kurulum süresi ve ekip güvenliği"],
            ["İnternet", "upload hızı / kablolu", "Hibrit ve canlı yayın stabilitesi"],
          ]}
        />
        <Checklist
          storageKey="s6_kesif"
          items={[
            "Elektrik altyapısı ve kapasite kontrol edildi mi?",
            "LED ekran ve sahne görüş açıları ölçüldü mü?",
            "Yükleme–boşaltma planı net mi?",
            "İnternet (özellikle upload) test edildi mi?",
          ]}
        />

        {/* s6a */}
        <h2 id="s6a">6A. Hibrit akış için run-of-show</h2>
        <p>
          Run-of-show dosyası; dakika dakika akış + ışık + LED cue + yayın geçişleri demektir. Teknik
          prodüksiyonun sigortasıdır.
        </p>
        <ProTip title="Kısa taktik">
          Kurulumu “kritik zincir”le yürütün: elektrik → LED → ses/ışık → yayın. En hızlı ilerleyen sıra budur.
        </ProTip>
        <Checklist
          storageKey="s6a_runofshow"
          items={[
            "Run-of-show dosyası dakika dakika hazır mı?",
            "LED cue’ları (intro/speaker/ara/kapanış) yazıldı mı?",
            "Yayın geçişleri (kamera/overlay) planlandı mı?",
            "Kurulum kritik zincire göre planlandı mı?",
          ]}
        />

        {/* s7 */}
        <h2 id="s7">7. Sahne ve podyum planlaması</h2>
        <p>
          Sahne; etkinliğin kalbidir. Ölçü, yükseklik, basamak, güvenlik ve kamera açıları doğru planlanmazsa
          hem deneyim hem güvenlik etkilenir. Detay için{" "}
          <Link href="/sahne-kiralama">Sahne Kiralama</Link> ve{" "}
          <Link href="/podyum-kiralama">Podyum Kiralama</Link> sayfalarına bakın.
        </p>
        <Figure
          src="/img/blog/kurumsal-sahne-podyum-yerlesim.webp"
          alt="Kurumsal etkinlik sahne ve podyum yerleşim örneği"
          caption="Sahne/podyum yerleşimi: görüş açısı + kamera hattı + basamak güvenliği birlikte düşünülür."
        />
        <Checklist
          storageKey="s7_sahne"
          items={[
            "Sahne ölçüsü ve podyum yüksekliği net mi?",
            "Basamaklar ve kaymaz yüzey planlandı mı?",
            "Kamera ve LED görüş açıları kontrol edildi mi?",
            "Kenar güvenliği / yönlendirme detayları yazıldı mı?",
          ]}
        />

        {/* s8 */}
        <h2 id="s8">8. LED ekran + yayın + 2026 trendleri</h2>
        <p>
          LED ekran artık “fon” değil, hikâyenin ana taşıyıcısı. Hibrit işlerde LED + canlı yayın
          entegrasyonu, içerik akışı ve operatör koordinasyonu birlikte planlanır. Bkz.{" "}
          <Link href="/led-ekran-kiralama">LED Ekran Kiralama</Link> ve{" "}
          <Link href="/blog/led-ekran-teknoloji-trendleri-2026">2026 LED trendleri</Link>.
        </p>
        <Figure
          src="/img/blog/p2-led-ekran-kurumsal-etkinlik.webp"
          alt="Kurumsal etkinlik için LED ekran örneği (P2/P3)"
          caption="Yakın izleme mesafelerinde doğru piksel aralığı ve içerik formatı kritik."
        />
        <Checklist
          storageKey="s8_led"
          items={[
            "İç/dış mekân panel sınıfı doğru mu (parlaklık)?",
            "Piksel aralığı ve yenileme oranı teklif dosyasında net mi?",
            "İçerik çözünürlüğü/FPS/formatlar onaylandı mı?",
            "Canlı yayın varsa kamera–LED–ses senkron testi yapıldı mı?",
          ]}
        />

        {/* s9 */}
        <h2 id="s9">9. Çadır ve açık hava risk yönetimi</h2>
        <p>
          Açık hava işlerinde risk yönetimi şart: rüzgâr, yağmur, zemin ve güvenlik. Çadır–sahne–LED
          entegrasyonu kablo güzergâhına kadar planlanmalı. Bkz.{" "}
          <Link href="/cadir-kiralama">Çadır Kiralama</Link> ve{" "}
          <Link href="/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping">
            Dome Çadır Rehberi
          </Link>
          .
        </p>
        <Figure
          src="/img/blog/pagoda-cadir-kurumsal-etkinlik.webp"
          alt="Kurumsal etkinlik için pagoda/dome çadır kurulumu"
          caption="Açık hava işlerinde B planı ve zemin sabitleme, işi kurtarır."
        />
        <Checklist
          storageKey="s9_cadir"
          items={[
            "Çadır ölçüsü ve dayanım planı net mi?",
            "Zemin sabitleme ve güvenlik alanları belirlendi mi?",
            "Kablo güzergâhları çizildi mi?",
            "Hava koşulları için B planı hazır mı?",
          ]}
        />

        {/* s10 */}
        <h2 id="s10">10. Masa–sandalye ve katılımcı akışı</h2>
        <p>
          Oturma düzeni sahne görüşünü kapatmamalı; geçiş alanları, kayıt/karşılama ve servis akışı net
          olmalı. Bkz. <Link href="/masa-sandalye-kiralama">Masa Sandalye Kiralama</Link>.
        </p>
        <Checklist
          storageKey="s10_akis"
          items={[
            "Oturma planı (konferans/gala/kokteyl) net mi?",
            "Geçiş alanları ve yönlendirme planlandı mı?",
            "Kayıt/karşılama masası konumu doğru mu?",
            "Erişilebilirlik ve acil çıkışlar açık mı?",
          ]}
        />

        {/* s11 */}
        <h2 id="s11">11. Kurulum, prova ve gün yönetimi</h2>
        <p>
          Sorunsuz etkinlik “şans” değildir; prova ve testtir. Sahne, LED,{" "}
          <Link href="/ses-isik-sistemleri">ses ve ışık sistemleri</Link> ve yayın zinciri birlikte
          çalıştırılmalı.
        </p>
        <ProTip title="Kritik zincir">
          Kurulum sırasını netleştirin: elektrik → LED → ses/ışık → yayın. Bu sıraya uyulmazsa iş uzar.
        </ProTip>
        <Checklist
          storageKey="s11_kurulum"
          items={[
            "Kurulum planı ekiplerle paylaşıldı mı?",
            "Ses–ışık–LED senkron testleri yapıldı mı?",
            "Konuşmacı provaları tamamlandı mı?",
            "Acil durum ve yedek senaryo hazır mı?",
          ]}
        />

        {/* s11a */}
        <h2 id="s11a">11A. Etkinlik günü kontrol listesi</h2>
        <p>
          Etkinlik günü “son tur kontrol” günüdür. Tedarikçi teyidi, alan walk-through ve ekipman testleri
          krizi azaltır.
        </p>
        <Checklist
          storageKey="s11a_dayof"
          items={[
            "Tüm tedarikçilerle varış/kurulum saatleri teyit edildi mi?",
            "Konuşmacılara final ajanda + teknik ihtiyaçlar iletildi mi?",
            "Kayıt/karşılama, yönlendirme ve basılı materyaller hazır mı?",
            "Son walk-through yapıldı mı?",
            "Tüm ekipman test edildi mi?",
            "Ekip iletişim listesi ve acil prosedürler hazır mı?",
          ]}
        />

        {/* s12 */}
        <h2 id="s12">12. Etkinlik sonrası değerlendirme</h2>
        <p>
          Etkinlik bittiğinde rapor başlar: bütçe sapmaları, teknik notlar, katılımcı geri bildirimleri ve
          “bir sonraki proje” dersleri.
        </p>
        <Checklist
          storageKey="s12_sonrasi"
          items={[
            "Teknik ekip debrief yapıldı mı?",
            "Bütçe sapmaları ve nedenleri not edildi mi?",
            "Katılımcı memnuniyet verileri toplandı mı?",
            "Görsel/video çıktılar teslim alındı mı?",
          ]}
        />

        {/* s12a */}
        <h2 id="s12a">12A. Başarı ölçümü ve geri bildirim</h2>
        <p>
          Kısa bir anket (QR/e-posta) + ekip içi debrief + SMART hedeflerle karşılaştırma… Bir sonraki
          etkinliğin kalitesi buradan çıkar.
        </p>
        <Checklist
          storageKey="s12a_roi"
          items={[
            "Etkinlik sonrası anket gönderildi mi?",
            "Geri bildirimler güçlü/zayıf alanlar olarak sınıflandırıldı mı?",
            "SMART hedeflere göre debrief yapıldı mı?",
            "Lead/memnuniyet/katılım metrikleri raporlandı mı?",
            "Paydaşlara özet çıktı ve öğrenimler paylaşıldı mı?",
          ]}
        />

        {/* Kaynaklar */}
        <h2 id="kaynaklar">Kaynaklar</h2>
        <ul>
          <li>
            Kaltura – State of Virtual Events 2023: Teknik glitch sonrası terk oranları (%25 / %46 aralığı).
          </li>
          <li>Eventcube – Event industry statistics & hybrid/virtual trend derlemeleri.</li>
          <li>
            2025–2026 sektör benchmark’ları: hibrit etkinliğin norm haline gelmesi ve B2B ROI eğilimleri.
          </li>
        </ul>

        {/* BOTTOM CTA */}
        <div className="not-prose mt-16 bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">
            Etkinliğinizi şansa bırakmayın
          </h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10 text-lg">
            Sahneva olarak 700+ başarılı projede edindiğimiz deneyimle, 81 ilde teknik keşiften yayın
            zincirine kadar tüm süreci tek elden yönetiyoruz. Çoğu projede 2 saat içinde projelendirilmiş
            teklif çıkıyoruz.
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
            <a
              href={PDF_HREF}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg"
            >
              <span>📄</span> Kontrol Listesi PDF
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
  );
}

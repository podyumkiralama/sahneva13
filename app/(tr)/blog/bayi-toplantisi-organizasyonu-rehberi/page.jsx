import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import InteractiveChecklist from "@/components/blog/InteractiveChecklist.client";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import SmartBlogSuggestions from "@/components/blog/SmartBlogSuggestions";
import {
  BASE_SITE_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";

export const revalidate = 86400;

const slug = "/blog/bayi-toplantisi-organizasyonu-rehberi";
const url = `${BASE_SITE_URL}${slug}`;
const FEATURED_IMAGE = "/img/blog/bayi-toplantisi-organizasyonu-rehberi-hero.webp";
const OG_IMAGE = FEATURED_IMAGE;
const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const PUBLISH_DATE = "2026-07-24T09:00:00+03:00";

export const metadata = {
  title: "Bayi Toplantısı Organizasyonu Rehberi 2026",
  description:
    "Bayi toplantısı organizasyonu rehberi: format seçimi, salon ve şehir dışı lojistiği, sahne-LED-ses kurgusu, ödül gecesi prodüksiyonu ve indirilebilir kontrol listesi.",
  alternates: {
    canonical: url,
  },
  image: FEATURED_IMAGE,
  openGraph: {
    title: "Bayi Toplantısı Organizasyonu Rehberi 2026 | Sahneva",
    description:
      "Bayi toplantısı organizasyonu: format, salon seçimi, teknik prodüksiyon, ödül gecesi ve run-of-show. Tek elden anahtar teslim kurulum rehberi.",
    url,
    siteName: "Sahneva",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: `${BASE_SITE_URL}${OG_IMAGE}`,
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
    images: [`${BASE_SITE_URL}${OG_IMAGE}`],
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
  date: PUBLISH_DATE,
  category: "Kurumsal Etkinlik",
  readTime: "11–13 dk okuma",
  author: AUTHOR_NAME,
};

/* ---------- helpers (LIGHT BLOG THEME) ---------- */
function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-2xl font-semibold tracking-tight text-slate-900">
        {value}
      </div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

function H2({ id, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl"
    >
      {children}
    </h2>
  );
}

function ProTip({ title = "Pro Tip", children }) {
  return (
    <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50 p-4">
      <div className="text-sm font-semibold text-sky-900">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-700">{children}</div>
    </div>
  );
}

function Table({ caption, columns, rows }) {
  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {caption ? (
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
          {caption}
        </div>
      ) : null}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 text-slate-700">
            <tr>
              {columns.map((c) => (
                <th key={c} className="px-4 py-3 font-medium">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {rows.map((r, idx) => (
              <tr key={idx}>
                {r.map((cell, j) => (
                  <td key={j} className="px-4 py-3">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Figure({ src, alt, caption, priority = false, loading = "lazy" }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] w-full bg-slate-50">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 760px"
          className="object-contain"
          loading={loading}
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function Page() {
  const publishedISO = PUBLISH_DATE;
  const publishedHuman = "24 Temmuz 2026";
  const readingTime = "11–13 dk okuma";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        mainEntityOfPage: { "@id": url },
        headline:
          "Bayi Toplantısı Organizasyonu Rehberi: Format, Teknik Prodüksiyon ve Ödül Gecesi",
        description:
          "Bayi toplantısı organizasyonu rehberi: format seçimi, salon ve şehir dışı lojistiği, sahne-LED-ses kurgusu, ödül gecesi prodüksiyonu ve kontrol listesi.",
        image: `${BASE_SITE_URL}${FEATURED_IMAGE}`,
        datePublished: publishedISO,
        dateModified: publishedISO,
        inLanguage: "tr-TR",
        author: {
          "@type": "Organization",
          "@id": ORGANIZATION_ID,
          name: "Sahneva",
        },
        publisher: { "@id": ORGANIZATION_ID },
        isPartOf: { "@id": WEBSITE_ID },
        url,
        about: [
          { "@type": "Thing", name: "Bayi toplantısı organizasyonu" },
          { "@type": "Thing", name: "Satış toplantısı ve bayi buluşması" },
          { "@type": "Thing", name: "Kurumsal etkinlikte teknik prodüksiyon" },
          { "@type": "Thing", name: "Ödül gecesi ve gala prodüksiyonu" },
          { "@type": "Thing", name: "Sahne ve LED ekran kiralama" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Bayi toplantısı organizasyonu ne kadar önceden planlanmalı?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Şehir dışından gelen bayi sayısı yüksekse ve gecede ödül töreni/gala varsa 8–12 hafta önceden başlamak idealdir. Salon rezervasyonu, konaklama blokajı ve teknik keşif bu sürede netleşir.",
            },
          },
          {
            "@type": "Question",
            name: "Bayi toplantısında hangi teknik ekipmanlar gerekir?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Genel oturum için sahne/podyum, yüksek çözünürlüklü LED ekran, line array ses sistemi, sahne ışığı ve sunum/kamera rejisi temel ihtiyaçtır. Ödül gecesi için ek ışık, canlı skor/isim grafiği ve varsa canlı yayın altyapısı eklenir.",
            },
          },
          {
            "@type": "Question",
            name: "Bayi toplantısı ile ürün lansmanı organizasyonu arasındaki fark nedir?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ürün lansmanı tek bir mesaj etrafında kısa ve gösterişli kurgulanır; bayi toplantısı ise genel oturum, hedef sunumu, eğitim/breakout ve çoğu zaman ödül gecesini birleştiren, yarım-tam güne yayılan çok bölümlü bir formattır.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd
        id="ld-blogposting"
        data={jsonLd}
      />

      <div className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
          <BreadcrumbJsonLd
            items={[
              { name: "Anasayfa", url: BASE_SITE_URL },
              { name: "Blog", url: `${BASE_SITE_URL}/blog` },
              { name: "Bayi Toplantısı Organizasyonu Rehberi", url },
            ]}
          />

          {/* Header */}
          <header>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
              Kurumsal organizasyon • bayi toplantısı • teknik prodüksiyon
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Bayi Toplantısı Organizasyonu Rehberi{" "}
              <span className="block text-slate-600">
                Format, Teknik Prodüksiyon ve Ödül Gecesi
              </span>
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
              Bayi toplantısı; lansmandan farklı olarak tek bir mesaj değil, bir
              günün tamamına yayılan çok bölümlü bir prodüksiyondur: genel oturum,
              hedef sunumu, bayi eğitimi ve çoğu zaman bir ödül gecesi. Yüzlerce
              bayi şehir dışından gelir, program dakika dakika işler ve en küçük
              teknik aksaklık salonun enerjisini düşürür. Bu rehber; format seçiminden
              salon lojistiğine, sahne–LED–ses kurgusundan ödül gecesi prodüksiyonuna
              kadar tüm süreci tek yerde toplar.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span>{publishedHuman}</span>
              <span aria-hidden="true">•</span>
              <span>{readingTime}</span>
              <span aria-hidden="true">•</span>
              <span>Sahneva İçerik Ekibi</span>
            </div>

            {/* CTA row */}
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://wa.me/905453048671"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                WhatsApp’tan Yazın (2 saatte teklif)
              </a>

              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Teklif Al / İletişim
              </Link>

              <Link
                href="/kurumsal-organizasyon"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Kurumsal Organizasyon
              </Link>
            </div>

            <Figure
              src={FEATURED_IMAGE}
              alt="Bayi toplantısı için sahne, LED ekran ve salon kurulumu"
              caption="Bayi toplantısı: genel oturum, hedef sunumu ve ödül gecesini tek prodüksiyon planında birleştirmek."
              priority
              loading="eager"
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard value="8–12 hafta" label="İdeal planlama başlangıç süresi (şehir dışı katılım)" />
              <StatCard value="3–4 bölüm" label="Genel oturum + hedef + eğitim + ödül gecesi" />
              <StatCard value="Tek Plan" label="Sahne + LED + ses–ışık + reji + yayın akışı" />
              <StatCard value="%10–15" label="Önerilen bütçe contingency payı" />
            </div>

            <ProTip title="Neden ayrı bir başlık?">
              Bayi toplantısını “kurumsal etkinlik” genel başlığıyla planlamak eksik kalır.
              Çünkü buradaki gerçek zorluk; aynı gün içinde ciddi bir hedef sunumundan
              coşkulu bir ödül gecesine geçişi kesintisiz yönetmektir. Sahne, LED içerik
              ve ışık kurgusu bu iki modu birlikte taşıyacak şekilde tasarlanmalı.
            </ProTip>
          </header>

          {/* Layout */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
            {/* Main */}
            <article className="min-w-0">
              {/* TOC */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-base font-semibold text-slate-900">
                  Bu Yazının Rotası
                </h2>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
                  {[
                    ["#s1", "1. Bayi toplantısı nedir, ne zaman gerekir?"],
                    ["#s2", "2. Format seçimi"],
                    ["#s3", "3. Salon ve şehir dışı lojistiği"],
                    ["#s4", "4. Program ve run-of-show"],
                    ["#s5", "5. Sahne ve podyum"],
                    ["#s6", "6. LED ekran ve sunum rejisi"],
                    ["#s7", "7. Ses sistemi ve konuşulabilirlik"],
                    ["#s8", "8. Ödül gecesi prodüksiyonu"],
                    ["#s9", "9. Katılımcı etkileşimi"],
                    ["#s10", "10. Bütçe planı"],
                    ["#s11", "11. Kurulum, prova ve gün yönetimi"],
                    ["#s12", "12. Sık sorulan sorular"],
                  ].map(([href, text]) => (
                    <li key={href}>
                      <a className="hover:text-slate-900" href={href}>
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* s1 */}
              <section className="mt-10">
                <H2 id="s1">1. Bayi toplantısı nedir, ne zaman gerekir?</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Bayi toplantısı; bir markanın bayi, distribütör ve satış ağını yılda bir
                  ya da sezon başında bir araya getirdiği kurumsal buluşmadır. Amaç genellikle
                  dört başlıkta toplanır: geçmiş dönemi değerlendirmek, yeni dönem hedeflerini
                  paylaşmak, ürün/kampanya eğitimi vermek ve başarılı bayileri ödüllendirmek.
                  Ürün lansmanından farkı burada başlar: lansman tek bir mesajı vurgular,
                  bayi toplantısı ise bu dört amacı tek güne sığdıran çok bölümlü bir akıştır.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Bu yüzden{" "}
                  <Link className="font-semibold underline underline-offset-4" href="/kurumsal-organizasyon">
                    kurumsal organizasyon
                  </Link>{" "}
                  planında bayi toplantısı ayrı bir senaryo olarak ele alınmalı. Benzer bir
                  çerçeveyi{" "}
                  <Link
                    className="font-semibold underline underline-offset-4"
                    href="/blog/urun-lansmani-organizasyonu"
                  >
                    ürün lansmanı organizasyonu
                  </Link>{" "}
                  yazısıyla karşılaştırarak formatınıza karar verebilirsiniz.
                </p>

                <InteractiveChecklist
                  storageKey="bayi_s1_amac"
                  items={[
                    "Toplantının ana amacı net mi (hedef / eğitim / ödül / motivasyon)?",
                    "Katılımcı profili belli mi (bayi, distribütör, saha ekibi)?",
                    "Beklenen katılımcı sayısı ve şehir dağılımı çıkarıldı mı?",
                    "Başarı kriteri tanımlandı mı (katılım, memnuniyet, hedef benimseme)?",
                  ]}
                />
              </section>

              {/* s2 */}
              <section className="mt-10">
                <H2 id="s2">2. Formatı seçin: tek gün mü, kamp mı, gala mı?</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Format kararı, teknik kapsamı doğrudan belirler. Yarım günlük bir bölge
                  toplantısıyla, iki güne yayılan ve gecesinde ödül galası olan ulusal bayi
                  buluşması aynı ekiple planlanmaz. Aşağıdaki tablo en sık kullanılan formatları
                  ve teknik ağırlık merkezini özetler.
                </p>

                <Table
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
                  Gecesinde ödül töreni varsa, salonu ve sahne tasarımını baştan iki modlu
                  düşünün: gündüz “kurumsal sunum”, gece “gala show”. Aynı LED ve ışık altyapısını
                  iki içerik setiyle kullanmak, ikinci bir kurulumdan çok daha ekonomiktir.
                </ProTip>

                <InteractiveChecklist
                  storageKey="bayi_s2_format"
                  items={[
                    "Format kararı (bölge / ulusal / gala / kamp) verildi mi?",
                    "Gündüz oturum + gece program ayrımı netleştirildi mi?",
                    "Breakout / eğitim oturumu olacak mı?",
                    "Sosyal program (yemek, gösteri, DJ) kapsamı belirlendi mi?",
                  ]}
                />
              </section>

              {/* s3 */}
              <section className="mt-10">
                <H2 id="s3">3. Salon ve şehir dışı lojistiği</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Bayi toplantısının en büyük operasyonel farkı katılımcıların çoğunun şehir
                  dışından gelmesidir. Bu da salon seçimini konaklama, ulaşım ve karşılama akışıyla
                  birlikte düşünmeyi gerektirir. Otel balo salonu çoğu zaman en pratik çözümdür;
                  çünkü konaklama, catering ve toplantı alanı tek noktada birleşir. Ancak balo
                  salonlarında tavan yüksekliği, kolon konumları ve elektrik kapasitesi teknik
                  tasarımı sınırlayabilir.
                </p>

                <Figure
                  src="/img/blog/toplanti-salonu-led-ekran-sahne.webp"
                  alt="Bayi toplantısı için balo salonu sahne ve LED ekran yerleşimi"
                  caption="Balo salonu yerleşiminde tavan yüksekliği, kolon hattı ve görüş açıları sahne tasarımını belirler."
                />

                <Table
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

                <InteractiveChecklist
                  storageKey="bayi_s3_salon"
                  items={[
                    "Salon kapasitesi oturma düzenine göre teyit edildi mi?",
                    "Tavan yüksekliği ve asma nokta / rigging izni kontrol edildi mi?",
                    "Elektrik kapasitesi teknik ekiple ölçüldü mü?",
                    "Konaklama blokajı ve karşılama akışı planlandı mı?",
                    "Yükleme–boşaltma güzergâhı ve saatleri belirlendi mi?",
                  ]}
                />
              </section>

              {/* s4 */}
              <section className="mt-10">
                <H2 id="s4">4. Program akışı ve run-of-show</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Bayi toplantısında program yoğundur ve tempo değişir: açılış, üst yönetim
                  konuşması, geçmiş dönem sonuçları, yeni hedefler, ürün/kampanya, ara, eğitim,
                  ve akşam ödül gecesi. Her geçiş; LED içeriği, ışık atmosferi ve ses kaynağının
                  birlikte değişmesi demektir. Bu yüzden dakika dakika bir run-of-show dosyası,
                  teknik prodüksiyonun sigortasıdır.
                </p>

                <Table
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
                  Kurulum sırasını netleştirin: elektrik → LED → ses/ışık → reji/yayın. Bu sıraya
                  uyulmazsa özellikle balo salonu gibi sınırlı sürede teslim edilen mekânlarda
                  prova zamanı erir.
                </ProTip>

                <InteractiveChecklist
                  storageKey="bayi_s4_ros"
                  items={[
                    "Run-of-show dakika dakika hazır mı?",
                    "Her bölüm için LED / ışık / ses cue’ları yazıldı mı?",
                    "Konuşmacı listesi ve mikrofon planı çıkarıldı mı?",
                    "Gündüz–gece geçiş provası takvime alındı mı?",
                  ]}
                />
              </section>

              {/* s5 */}
              <section className="mt-10">
                <H2 id="s5">5. Sahne ve podyum planlaması</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Sahne, hem ciddi bir hedef sunumunu hem de coşkulu bir ödül törenini taşıyacak
                  ölçüde tasarlanmalı. Konuşmacı kürsüsü, ödül alan bayilerin çıkışı için yeterli
                  genişlik ve güvenli basamaklar birlikte düşünülür. Yüzlerce kişilik salonda arka
                  sıraların da görebilmesi için yeterli sahne yüksekliği kritik.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  <Link className="font-semibold underline underline-offset-4" href="/sahne-kiralama">
                    Sahne Kiralama
                  </Link>{" "}
                  •{" "}
                  <Link className="font-semibold underline underline-offset-4" href="/podyum-kiralama">
                    Podyum Kiralama
                  </Link>
                </p>

                <Figure
                  src="/img/blog/kurumsal-sahne-podyum-yerlesim.webp"
                  alt="Bayi toplantısı sahne ve podyum yerleşim örneği"
                  caption="Sahne genişliği; ödül alan bayilerin akışı ve kamera hattı düşünülerek belirlenir."
                />

                <InteractiveChecklist
                  storageKey="bayi_s5_sahne"
                  items={[
                    "Sahne ölçüsü ve yüksekliği arka sıra görüşüne göre net mi?",
                    "Ödül töreni için sahne çıkış/iniş akışı planlandı mı?",
                    "Kürsü, konuşmacı ve sunum alanı yerleşimi belirlendi mi?",
                    "Basamak güvenliği ve kaymaz yüzey planlandı mı?",
                  ]}
                />
              </section>

              {/* s6 */}
              <section className="mt-10">
                <H2 id="s6">6. LED ekran ve sunum rejisi</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Bayi toplantısında LED ekran; satış grafikleri, hedef tabloları, ürün görselleri
                  ve ödül gecesi isim/skor animasyonlarının ana taşıyıcısıdır. Salon geniş ve
                  izleme mesafesi uzunsa doğru piksel aralığı ile parlaklık, okunabilirliği belirler.
                  Sunum rejisi (grafik operatörü) ise konuşmacı temposuyla slaytları senkron tutar.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  <Link className="font-semibold underline underline-offset-4" href="/led-ekran-kiralama">
                    LED Ekran Kiralama
                  </Link>{" "}
                  •{" "}
                  <Link
                    className="font-semibold underline underline-offset-4"
                    href="/blog/led-ekran-teknoloji-trendleri-2026"
                  >
                    2026 LED trendleri
                  </Link>
                </p>

                <Figure
                  src="/img/blog/marka-lansmani-led-ekran-standi.webp"
                  alt="Bayi toplantısında ürün ve marka alanı için LED ekran kullanımı"
                  caption="Fuaye ve ürün alanında ek LED yüzeyler, aralarda marka ve kampanya iletişimini sürdürür."
                />

                <InteractiveChecklist
                  storageKey="bayi_s6_led"
                  items={[
                    "İzleme mesafesine uygun piksel aralığı seçildi mi?",
                    "Salon aydınlığına göre yeterli parlaklık teyit edildi mi?",
                    "Sunum/grafik operatörü ve yedek dosya akışı planlandı mı?",
                    "Ödül gecesi grafikleri (isim/skor) önceden hazırlandı mı?",
                  ]}
                />
              </section>

              {/* s7 */}
              <section className="mt-10">
                <H2 id="s7">7. Ses sistemi ve konuşulabilirlik</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Bayi toplantısının kalbi konuşmadır: hedefler, sonuçlar ve eğitim salonun her
                  köşesinde net duyulmalı. Geniş balo salonlarında{" "}
                  <Link className="font-semibold underline underline-offset-4" href="/ses-isik-sistemleri">
                    ses ve ışık sistemleri
                  </Link>{" "}
                  doğru kalibre edilmezse arka sıralarda anlaşılırlık düşer. Kablosuz yaka/el
                  mikrofonları, yedek kanallar ve gerekirse simultane çeviri altyapısı baştan
                  planlanmalı.
                </p>

                <Figure
                  src="/img/blog/kurumsal-etkinlik-ses-backstage.webp"
                  alt="Bayi toplantısı için ses reji ve sahne arkası kurulumu"
                  caption="Yedek mikrofon kanalı ve net bir reji akışı, konuşma ağırlıklı programda en büyük sigortadır."
                />

                <InteractiveChecklist
                  storageKey="bayi_s7_ses"
                  items={[
                    "Salon büyüklüğüne uygun ses sistemi (line array vb.) planlandı mı?",
                    "Kablosuz mikrofon adedi ve yedek kanallar belirlendi mi?",
                    "Konuşmacı sunum sesi / video sesi kaynakları test edildi mi?",
                    "Gerekliyse simultane çeviri altyapısı eklendi mi?",
                  ]}
                />
              </section>

              {/* s8 */}
              <section className="mt-10">
                <H2 id="s8">8. Ödül gecesi prodüksiyonu</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Ödül gecesi, bayi toplantısının duygusal zirvesidir ve gündüzden tamamen farklı
                  bir mod ister: show ışığı, müzik, sahneye çıkış anonsları ve LED’de isim/başarı
                  grafikleri. Ödül kategorileri, kazanan listesi ve çıkış sırası önceden reji
                  dosyasına işlenmeli; sahnede yaşanan “sıradaki kim?” tereddüdü bütün geceyi
                  yavaşlatır. Coşkuyu artıracak sürpriz gösteri veya sanatçı için sahne ve ses
                  kapasitesi baştan hesaba katılmalı.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Gecenin sosyal ve motive edici tarafını güçlendirmek için{" "}
                  <Link
                    className="font-semibold underline underline-offset-4"
                    href="/blog/12-eglenceli-kurumsal-etkinlik-fikri"
                  >
                    12 eğlenceli kurumsal etkinlik fikri
                  </Link>{" "}
                  yazısındaki formatlardan ilham alabilirsiniz.
                </p>

                <InteractiveChecklist
                  storageKey="bayi_s8_odul"
                  items={[
                    "Ödül kategorileri ve kazanan listesi kesinleşti mi?",
                    "Sahneye çıkış sırası ve anons metinleri reji dosyasında mı?",
                    "İsim/skor LED grafikleri hazır ve provalı mı?",
                    "Gece için show ışığı ve müzik/DJ planı yapıldı mı?",
                    "Ödül/plaket teslim akışı ve fotoğraf noktası belirlendi mi?",
                  ]}
                />
              </section>

              {/* s9 */}
              <section className="mt-10">
                <H2 id="s9">9. Katılımcı etkileşimi ve ölçüm</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Bayi toplantısı tek yönlü bir sunum olmamalı. Canlı anket, soru-cevap, mobil
                  uygulama veya QR üzerinden geri bildirim, hem katılımı yükseltir hem de hedeflerin
                  ne kadar benimsendiğini ölçmenizi sağlar. Bu etkileşim araçları LED reji ve ses
                  planına en baştan dahil edilmeli; sonradan eklemek teknik olarak zorlaşır.
                </p>

                <InteractiveChecklist
                  storageKey="bayi_s9_etkilesim"
                  items={[
                    "Canlı anket / soru-cevap aracı belirlendi mi?",
                    "Etkileşim ekranı LED reji akışına eklendi mi?",
                    "Toplantı sonu memnuniyet ölçümü (QR/e-posta) planlandı mı?",
                    "Bayi geri bildirimleri raporlanacak formatta toplanacak mı?",
                  ]}
                />
              </section>

              {/* s10 */}
              <section className="mt-10">
                <H2 id="s10">10. Bütçeyi gerçekçi kurun</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Bayi toplantısında teknik prodüksiyon; sahne, LED, ses–ışık ve rejinin yanında
                  ödül gecesi için ek show ekipmanını da içerir. Bu kalemleri tek anahtar teslim
                  pakette toplamak hem maliyeti hem sorumluluğu netleştirir. Son dakika talepleri
                  (ek mikrofon, yedek operatör, revizyon) için %10–15 contingency bırakın.
                </p>

                <Figure
                  src="/img/blog/kurumsal-etkinlik-butce-infografik.webp"
                  alt="Bayi toplantısı bütçe dağılımı infografiği"
                  caption="Teknik prodüksiyonu ve ödül gecesi ekipmanını ayrı kalemlemek sürprizi azaltır."
                />

                <Table
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
                  Gündüz sunum + gece gala tek ekiple yürütüldüğünde kurulum, revizyon ve operasyon
                  zamanı ciddi biçimde kısalır. Tek plan, tek sorumluluk noktası.
                </ProTip>

                <InteractiveChecklist
                  storageKey="bayi_s10_butce"
                  items={[
                    "Teknik prodüksiyon ve ödül gecesi kalemleri ayrı bütçelendi mi?",
                    "Contingency (%10–15) eklendi mi?",
                    "Tekliflerde teknik detaylar (LED / ses / ışık) net mi?",
                    "Nakliye, kurulum ve söküm süreleri gerçekçi mi?",
                  ]}
                />
              </section>

              {/* s11 */}
              <section className="mt-10">
                <H2 id="s11">11. Kurulum, prova ve gün yönetimi</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Sorunsuz bir bayi toplantısı şans değil, provadır. Gündüz oturumundan gece
                  galasına geçiş dahil tüm cue’lar sahnede en az bir kez çalıştırılmalı. Konuşmacı
                  provaları, mikrofon testleri ve ödül gecesi çıkış akışı ayrı ayrı denenmeli.
                  Etkinlik günü ise son tur kontrol günüdür.
                </p>

                <InteractiveChecklist
                  storageKey="bayi_s11_gun"
                  items={[
                    "Tüm cue’lar (gündüz + gece) sahnede test edildi mi?",
                    "Konuşmacı ve ödül töreni provaları tamamlandı mı?",
                    "Ses–ışık–LED senkron kontrolü yapıldı mı?",
                    "Ekip iletişim listesi ve yedek senaryo hazır mı?",
                    "Son walk-through ve ekipman kontrolü tamamlandı mı?",
                  ]}
                />
              </section>

              {/* s12 */}
              <section className="mt-10">
                <H2 id="s12">12. Sık sorulan sorular</H2>

                <div className="mt-4 space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900">
                      Bayi toplantısı organizasyonu ne kadar önceden planlanmalı?
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Şehir dışından gelen bayi sayısı yüksekse ve gecede ödül töreni/gala
                      varsa 8–12 hafta önceden başlamak idealdir. Salon rezervasyonu, konaklama
                      blokajı ve teknik keşif bu sürede rahatça netleşir.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900">
                      Bayi toplantısında hangi teknik ekipmanlar gerekir?
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Genel oturum için sahne/podyum, yüksek çözünürlüklü LED ekran, line array
                      ses sistemi, sahne ışığı ve sunum/kamera rejisi temeldir. Ödül gecesi için
                      ek ışık, canlı isim/skor grafiği ve varsa canlı yayın altyapısı eklenir.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900">
                      Bayi toplantısı ile ürün lansmanı arasındaki fark nedir?
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Ürün lansmanı tek bir mesaj etrafında kısa ve gösterişli kurgulanır; bayi
                      toplantısı ise genel oturum, hedef sunumu, eğitim ve çoğu zaman ödül gecesini
                      birleştiren, güne yayılan çok bölümlü bir formattır.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">
                  Bayi toplantınızı tek elden planlayalım
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Sahneva olarak{" "}
                  <strong className="font-semibold text-slate-900">700+ başarılı projede</strong>{" "}
                  edindiğimiz deneyimle,{" "}
                  <strong className="font-semibold text-slate-900">81 ilde</strong> bayi
                  toplantısının teknik keşfinden ödül gecesine kadar tüm süreci tek elden
                  yönetiyoruz. Hızlı teklif için WhatsApp’tan yazın; çoğu projede{" "}
                  <strong className="font-semibold text-slate-900">2 saat içinde</strong>{" "}
                  projelendirilmiş teklif çıkıyoruz.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    WhatsApp’tan Yazın
                  </a>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    İletişim Formu
                  </Link>
                  <Link
                    href="/kurumsal-organizasyon"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Kurumsal Organizasyon
                  </Link>
                </div>
              </section>

              <SmartBlogSuggestions
                currentSlug={slug.replace("/blog/", "")}
                currentCategory={metadata?.category}
                currentKeywords={metadata?.keywords}
              />

              <BlogRelatedLinks
                services={[
                  { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
                  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
                ]}
              />
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Hızlı Teklif</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Bayi sayısı, şehir ve tarih bilgisini yazın; hızlıca projelendirelim.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    WhatsApp
                  </a>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    İletişim Formu
                  </Link>
                  <Link
                    href="/kurumsal-organizasyon"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Kurumsal Organizasyon
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Hizmetler</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li><Link className="hover:text-slate-900" href="/kurumsal-organizasyon">Kurumsal Organizasyon</Link></li>
                  <li><Link className="hover:text-slate-900" href="/led-ekran-kiralama">LED Ekran Kiralama</Link></li>
                  <li><Link className="hover:text-slate-900" href="/ses-isik-sistemleri">Ses & Işık Sistemleri</Link></li>
                  <li><Link className="hover:text-slate-900" href="/sahne-kiralama">Sahne Kiralama</Link></li>
                  <li><Link className="hover:text-slate-900" href="/podyum-kiralama">Podyum Kiralama</Link></li>
                  <li><Link className="hover:text-slate-900" href="/masa-sandalye-kiralama">Masa Sandalye Kiralama</Link></li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">İlgili Yazılar</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li><Link className="hover:text-slate-900" href="/blog/kurumsal-etkinlik-planlama-rehberi-2026">2026 Kurumsal Etkinlik Planlama Rehberi</Link></li>
                  <li><Link className="hover:text-slate-900" href="/blog/kurumsal-etkinlik-yonetimi">Kurumsal Etkinlik Yönetimi Rehberi</Link></li>
                  <li><Link className="hover:text-slate-900" href="/blog/urun-lansmani-organizasyonu">Ürün Lansmanı Organizasyonu</Link></li>
                  <li><Link className="hover:text-slate-900" href="/blog/12-eglenceli-kurumsal-etkinlik-fikri">12 Eğlenceli Kurumsal Etkinlik Fikri</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

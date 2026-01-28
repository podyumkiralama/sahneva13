// app/(tr)/blog/kurumsal-etkinlik-planlama-rehberi-2026/page.jsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import InteractiveChecklist from "@/components/blog/InteractiveChecklist.client";
import {
  BASE_SITE_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";

export const revalidate = 86400;

const slug = "/blog/kurumsal-etkinlik-planlama-rehberi-2026";
const url = `${BASE_SITE_URL}${slug}`;

export async function generateMetadata() {
  const title =
    "2026 Kurumsal Etkinlik Planlama Rehberi: Kontrol Listesi ve Teknik İpuçları | Sahneva";
  const description =
    "İstanbul’da kurumsal etkinlik planlaması için kapsamlı rehber: strateji, bütçe, zaman çizelgesi, sahne–LED–çadır, run-of-show ve indirilebilir kontrol listesi. Teknik prodüksiyonla sorunsuz organizasyon!";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Sahneva",
      type: "article",
      locale: "tr_TR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

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

function Figure({ src, alt, caption }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/8] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 760px"
          className="object-cover"
          loading="lazy"
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
  const publishedISO = "2026-01-28";
  const publishedHuman = "28 Ocak 2026";
  const readingTime = "12–14 dk okuma";
  const pdfHref = "/files/kurumsal-etkinlik-kontrol-listesi-2026.pdf";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        mainEntityOfPage: { "@id": url },
        headline:
          "2026 Kurumsal Etkinlik Planlama Rehberi: Kontrol Listesi ve Teknik İpuçları",
        description:
          "İstanbul’da kurumsal etkinlik planlaması için kapsamlı rehber: strateji, bütçe, zaman çizelgesi, sahne–LED–çadır, run-of-show ve indirilebilir kontrol listesi.",
        datePublished: publishedISO,
        dateModified: publishedISO,
        inLanguage: "tr-TR",
        author: { "@type": "Organization", "@id": ORGANIZATION_ID, name: "Sahneva" },
        publisher: { "@id": ORGANIZATION_ID },
        isPartOf: { "@id": WEBSITE_ID },
        url,
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

  return (
    <>
      <Script
        id="ld-blogposting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
          <BreadcrumbJsonLd
            items={[
              { name: "Anasayfa", url: BASE_SITE_URL },
              { name: "Blog", url: `${BASE_SITE_URL}/blog` },
              { name: "2026 Kurumsal Etkinlik Planlama Rehberi", url },
            ]}
          />

          {/* Header */}
          <header>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
              İstanbul kurumsal etkinlik firmaları • teknik prodüksiyon
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              2026 Kurumsal Etkinlik Planlama Rehberi
              <span className="block text-slate-600">
                En Kapsamlı Kontrol Listesi ve Teknik İpuçları
              </span>
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
              2026’da hibrit etkinlikler artık “alternatif” değil, norm haline geliyor.
              İşin kritik tarafı şu: sahne, LED ekran, ses–ışık ve yayın zincirini tek
              bir planla yönetmezseniz en küçük aksaklık, akışı ve bütçeyi hızla bozar.
              Bu rehber; stratejiden run-of-show’a kadar tüm süreci tek yerde toplar.
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
                rel="noopener noreferrer"
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

              <a
                href={pdfHref}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Kontrol Listesi PDF İndir
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard value="%65–68" label="Hibrit etkinlik oranı (2025–2026 raporları)" />
              <StatCard
                value="%25–46"
                label="Teknik aksaklık sonrası terk/kriz riski aralığı"
              />
              <StatCard value="2–3 ay" label="İdeal planlama başlangıç süresi" />
              <StatCard value="Tek Plan" label="Sahne+LED+ses+ışık+yayın akışı" />
            </div>

            {/* Sources / footnote */}
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Kaynak notu: Teknik aksaklık sonrası terk oranı için Kaltura “State of Virtual Events 2023”
              (1–2 glitch sonrası ~%25, 3+ glitch sonrası ~%46). Ayrıca hibritleşme eğilimleri için Eventcube
              sektör istatistik derlemeleri ve 2025–2026 benchmark’ları.
            </p>

            <ProTip title="2026 notu">
              Hibrit işlerde sadece “m²” konuşmak yetmez. LED ekran + kamera + ses/ışık + yayın zinciri aynı
              dosyada yazılı olmalı; aksi halde sahada küçük bir sorun büyük gecikmeye döner.
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
                    ["#s1", "1. Etkinlik stratejisi"],
                    ["#s1a", "1A. Mission–Audience–SMART (2026)"],
                    ["#s2", "2. Ekip ve rol dağılımı"],
                    ["#s3", "3. Zaman çizelgesi"],
                    ["#s4", "4. Bütçe planı"],
                    ["#s5", "5. Tema ve marka dili"],
                    ["#s6", "6. Mekân ve teknik keşif"],
                    ["#s6a", "6A. Ajanda ve katılımcı etkileşimi"],
                    ["#s7", "7. Sahne ve podyum"],
                    ["#s8", "8. LED ekran ve yayın"],
                    ["#s9", "9. Çadır ve açık hava riskleri"],
                    ["#s10", "10. Masa-sandalye ve akış"],
                    ["#s11", "11. Kurulum ve prova"],
                    ["#s11a", "11A. Etkinlik günü kontrol listesi"],
                    ["#s12", "12. Etkinlik sonrası değerlendirme"],
                    ["#s12a", "12A. Başarı ölçümü ve geri bildirim"],
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
                <H2 id="s1">1. Etkinlik stratejisini belirleyin</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Bütçe veya mekâna dalmadan önce strateji net olmalı: etkinlik türü
                  (lansman, bayi toplantısı, konferans, gala), hedef kitle, ana mesaj
                  ve başarı ölçümü. İstanbul’da iş hacmi yüksek olduğu için kararlar
                  erken netleşirse <strong className="font-semibold text-slate-900">
                  etkinlik yönetiminde teknik prodüksiyon</strong> planı da sağlam kurulur.
                </p>

                <ProTip title="Tek sayfa strateji">
                  Amaç + kitle + format + SMART hedef + bütçe aralığı… Tek sayfa doküman;
                  sahne, LED, ses-ışık ve yayın tekliflerini aynı çerçevede toplar.
                </ProTip>

                <InteractiveChecklist
                  storageKey="s1_strateji"
                  items={[
                    "Etkinliğin amacı ve hedef kitlesi yazılı hale getirildi mi?",
                    "Format net mi (yüz yüze / hibrit / canlı yayın)?",
                    "Başarı kriterleri (katılım, etkileşim, lead, memnuniyet) belirlendi mi?",
                    "Bütçe aralığı ve onay süreci net mi?",
                  ]}
                />
              </section>

              {/* s1a */}
              <section className="mt-10">
                <H2 id="s1a">1A. Mission–Audience–SMART: 2026’da stratejiyi kilitleyen çerçeve</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  “Katılım” tek başına hedef sayılmaz. Hibrit etkinliklerde ölçülebilir hedefler
                  koymak (ör. “katılımcıların %80’i tüm oturumlara dahil olsun”) LED içerik akışını,
                  yayın planını ve sahne geçişlerini otomatik olarak netleştirir.
                </p>

                <InteractiveChecklist
                  storageKey="s1a_smart"
                  items={[
                    "Mission: Etkinliğin ‘neden’i tek cümleyle yazıldı mı?",
                    "Audience: Katılımcı profili net mi (rol/sektör/ihtiyaç)?",
                    "SMART hedefler sayısal ve zamanlı mı?",
                    "Hedef dokümanı ekip ve tedarikçilerle paylaşıldı mı?",
                  ]}
                />
              </section>

              {/* s2 */}
              <section className="mt-10">
                <H2 id="s2">2. Ekip oluşturun ve rolleri netleştirin</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Kurumsal etkinlikte “her şey bende” modeli çalışmaz. Proje yönetimi,
                  bütçe, içerik, sahne–LED–ses–ışık, yayın/çekim, lojistik ve misafir yönetimi
                  ayrı sorumluluklarla ilerlemeli. En kritik nokta: tek karar noktası.
                </p>

                <Table
                  caption="Örnek rol dağılımı (kısa)"
                  columns={["Sorumluluk", "Kim?", "Çıktı"]}
                  rows={[
                    ["Proje lideri", "İç ekip", "Tek plan, tek karar noktası"],
                    ["Teknik prodüksiyon", "Sahneva / teknik ekip", "Sahne+LED+ses-ışık+yayın planı"],
                    ["Lojistik", "Operasyon", "Nakliye/kurulum-söküm takvimi"],
                    ["İçerik/brand", "Pazarlama", "Ajanda + görseller + davet akışı"],
                  ]}
                />

                <InteractiveChecklist
                  storageKey="s2_ekip"
                  items={[
                    "Proje sorumlusu (tek karar noktası) belirlendi mi?",
                    "Teknik prodüksiyon sorumlusu net mi?",
                    "Kurulum–söküm ekipleri ve çalışma saatleri planlandı mı?",
                    "Dış tedarikçiler (catering, güvenlik, DJ vb.) listelendi mi?",
                  ]}
                />
              </section>

              {/* s3 */}
              <section className="mt-10">
                <H2 id="s3">3. Zaman çizelgesi oluşturun (geriye doğru)</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Etkinliğin en görünmeyen ama en kritik parçası timeline’dır.
                  Teknik keşif, üretim, kurulum, prova ve etkinlik günü akışı geriye doğru planlanmalı.
                </p>

                <Figure
                  src="/img/blog/kurumsal-etkinlik-timeline.webp"
                  alt="Kurumsal etkinlik planlama zaman çizelgesi"
                  caption="Örnek timeline: teknik keşiften prova gününe kadar geriye doğru plan."
                />

                <Table
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

                <InteractiveChecklist
                  storageKey="s3_timeline"
                  items={[
                    "Karar tarihleri ve teslim tarihleri timeline’a işlendi mi?",
                    "Teknik keşif tarihi belirlendi mi?",
                    "Kurulum, prova ve söküm saatleri net mi?",
                    "Timeline tüm ekiple paylaşıldı mı?",
                  ]}
                />
              </section>

              {/* s4 */}
              <section className="mt-10">
                <H2 id="s4">4. Bütçeyi gerçekçi kurun (contingency şart)</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  2026’da bütçenin büyük kısmı “mekân + teknik altyapı” tarafında toplanıyor.
                  Sahne, LED ekran, ses–ışık ve yayın zincirini tek pakette düşünmek; hem maliyet hem sorumluluk
                  yönetimini temizler. Son dakika talepleri için %10–15 contingency bırakın.
                </p>

                <Figure
                  src="/img/blog/kurumsal-etkinlik-butce-infografik.webp"
                  alt="Kurumsal etkinlik bütçe dağılımı infografiği"
                  caption="Bütçeyi kalemlere bölmek, sürprizi azaltır. Contingency payını en baştan yazın."
                />

                <Table
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
                  Büyük etkinliklerde “anahtar teslim teknik paket” (sahne + LED + ses/ışık + yayın)
                  en az sürpriz çıkaran modeldir. Tek plan, tek sorumluluk.
                </ProTip>

                <InteractiveChecklist
                  storageKey="s4_butce"
                  items={[
                    "Teknik prodüksiyon bütçesi ayrı kalemlendi mi?",
                    "Contingency (%10–15) eklendi mi?",
                    "Nakliye/kurulum/söküm süreleri gerçekçi mi?",
                    "Tekliflerde teknik detaylar (LED panel/yenileme vb.) net mi?",
                  ]}
                />
              </section>

              {/* s5 */}
              <section className="mt-10">
                <H2 id="s5">5. Tema ve marka dili</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Tema; sahne tasarımı, ışık renkleri, LED ekran görselleri ve basılı/dijital materyallerin ortak dilidir.
                  LED içeriğini son haftaya bırakmak, sahada “son dakika revizyon” krizini büyütür.
                </p>

                <InteractiveChecklist
                  storageKey="s5_tema"
                  items={[
                    "Tema, marka kimliğiyle uyumlu mu?",
                    "LED içerikler (çözünürlük/format) teknik ekiple onaylandı mı?",
                    "Sosyal medya/PR görsel paketleri planlandı mı?",
                  ]}
                />
              </section>

              {/* s6 */}
              <section className="mt-10">
                <H2 id="s6">6. Mekân ve teknik keşif</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Mekân güzel olabilir ama teknik açıdan yetersizse risk büyür: elektrik kapasitesi,
                  yükleme–boşaltma, tavan yüksekliği, görüş açıları, yayın için internet altyapısı…
                  Teknik keşif, en pahalı hataları baştan önler.
                </p>

                <Table
                  caption="Teknik keşifte hızlı kontrol"
                  columns={["Başlık", "Ne bakılır?", "Neden önemli?"]}
                  rows={[
                    ["Elektrik", "kW / hat / sigorta", "LED + ses-ışık aynı anda yük bindirir"],
                    ["Yerleşim", "görüş açıları / camera line", "LED ve sahne herkes tarafından görülmeli"],
                    ["Yükleme", "rampa/asansör/kapı", "Kurulum süresi ve ekip güvenliği"],
                    ["İnternet", "upload hızı / kablolu", "Hibrit ve canlı yayın stabilitesi"],
                  ]}
                />

                <InteractiveChecklist
                  storageKey="s6_kesif"
                  items={[
                    "Elektrik altyapısı ve kapasite kontrol edildi mi?",
                    "LED ekran ve sahne görüş açıları ölçüldü mü?",
                    "Yükleme–boşaltma planı net mi?",
                    "İnternet (özellikle upload) test edildi mi?",
                  ]}
                />
              </section>

              {/* s6a */}
              <section className="mt-10">
                <H2 id="s6a">6A. Hibrit akış için run-of-show</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Run-of-show dosyası; dakika dakika akış + ışık + LED cue + yayın geçişleri demektir.
                  Teknik prodüksiyonun sigortasıdır.
                </p>

                <ProTip title="Kısa taktik">
                  Kurulumu “kritik zincir”le yürütün: elektrik → LED → ses/ışık → yayın. En hızlı ilerleyen sıra budur.
                </ProTip>

                <InteractiveChecklist
                  storageKey="s6a_runofshow"
                  items={[
                    "Run-of-show dosyası dakika dakika hazır mı?",
                    "LED cue’ları (intro/speaker/ara/kapanış) yazıldı mı?",
                    "Yayın geçişleri (kamera/overlay) planlandı mı?",
                    "Kurulum kritik zincire göre planlandı mı?",
                  ]}
                />
              </section>

              {/* s7 */}
              <section className="mt-10">
                <H2 id="s7">7. Sahne ve podyum planlaması</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Sahne; etkinliğin kalbidir. Ölçü, yükseklik, basamak, güvenlik ve kamera açıları doğru
                  planlanmazsa hem deneyim hem güvenlik etkilenir.
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
                  alt="Kurumsal etkinlik sahne ve podyum yerleşim örneği"
                  caption="Sahne/podyum yerleşimi: görüş açısı + kamera hattı + basamak güvenliği birlikte düşünülür."
                />

                <InteractiveChecklist
                  storageKey="s7_sahne"
                  items={[
                    "Sahne ölçüsü ve podyum yüksekliği net mi?",
                    "Basamaklar ve kaymaz yüzey planlandı mı?",
                    "Kamera ve LED görüş açıları kontrol edildi mi?",
                    "Kenar güvenliği / yönlendirme detayları yazıldı mı?",
                  ]}
                />
              </section>

              {/* s8 */}
              <section className="mt-10">
                <H2 id="s8">8. LED ekran + yayın + 2026 trendleri</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  LED ekran artık “fon” değil, hikâyenin ana taşıyıcısı. Hibrit işlerde LED + canlı yayın entegrasyonu,
                  içerik akışı ve operatör koordinasyonu birlikte planlanır.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  <Link className="font-semibold underline underline-offset-4" href="/led-ekran-kiralama">
                    LED Ekran Kiralama
                  </Link>{" "}
                  •{" "}
                  <Link className="font-semibold underline underline-offset-4" href="/blog/led-ekran-teknoloji-trendleri-2026">
                    2026 LED trendleri
                  </Link>
                </p>

                <Figure
                  src="/img/blog/p2-led-ekran-kurumsal-etkinlik.webp"
                  alt="Kurumsal etkinlik için LED ekran örneği (P2/P3)"
                  caption="Yakın izleme mesafelerinde doğru piksel aralığı ve içerik formatı kritik."
                />

                <InteractiveChecklist
                  storageKey="s8_led"
                  items={[
                    "İç/dış mekân panel sınıfı doğru mu (parlaklık)?",
                    "Piksel aralığı ve yenileme oranı teklif dosyasında net mi?",
                    "İçerik çözünürlüğü/FPS/formatlar onaylandı mı?",
                    "Canlı yayın varsa kamera–LED–ses senkron testi yapıldı mı?",
                  ]}
                />
              </section>

              {/* s9 */}
              <section className="mt-10">
                <H2 id="s9">9. Çadır ve açık hava risk yönetimi</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Açık hava işlerinde risk yönetimi şart: rüzgâr, yağmur, zemin ve güvenlik.
                  Çadır–sahne–LED entegrasyonu kablo güzergâhına kadar planlanmalı.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  <Link className="font-semibold underline underline-offset-4" href="/cadir-kiralama">
                    Çadır Kiralama
                  </Link>{" "}
                  •{" "}
                  <Link
                    className="font-semibold underline underline-offset-4"
                    href="/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping"
                  >
                    Dome Çadır Rehberi
                  </Link>
                </p>

                <Figure
                  src="/img/blog/pagoda-cadir-kurumsal-etkinlik.webp"
                  alt="Kurumsal etkinlik için pagoda/dome çadır kurulumu"
                  caption="Açık hava işlerinde B planı ve zemin sabitleme, işi kurtarır."
                />

                <InteractiveChecklist
                  storageKey="s9_cadir"
                  items={[
                    "Çadır ölçüsü ve dayanım planı net mi?",
                    "Zemin sabitleme ve güvenlik alanları belirlendi mi?",
                    "Kablo güzergâhları çizildi mi?",
                    "Hava koşulları için B planı hazır mı?",
                  ]}
                />
              </section>

              {/* s10 */}
              <section className="mt-10">
                <H2 id="s10">10. Masa–sandalye ve katılımcı akışı</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Oturma düzeni sahne görüşünü kapatmamalı; geçiş alanları, kayıt/karşılama ve servis akışı net olmalı.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  <Link className="font-semibold underline underline-offset-4" href="/masa-sandalye-kiralama">
                    Masa Sandalye Kiralama
                  </Link>
                </p>

                <InteractiveChecklist
                  storageKey="s10_akıs"
                  items={[
                    "Oturma planı (konferans/gala/kokteyl) net mi?",
                    "Geçiş alanları ve yönlendirme planlandı mı?",
                    "Kayıt/karşılama masası konumu doğru mu?",
                    "Erişilebilirlik ve acil çıkışlar açık mı?",
                  ]}
                />
              </section>

              {/* s11 */}
              <section className="mt-10">
                <H2 id="s11">11. Kurulum, prova ve gün yönetimi</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Sorunsuz etkinlik “şans” değildir; prova ve testtir. Sahne, LED,{" "}
                  <Link className="font-semibold underline underline-offset-4" href="/ses-isik-sistemleri">
                    ses ve ışık sistemleri
                  </Link>{" "}
                  ve yayın zinciri birlikte çalıştırılmalı.
                </p>

                <ProTip title="Kritik zincir">
                  Kurulum sırasını netleştirin: elektrik → LED → ses/ışık → yayın. Bu sıraya uyulmazsa iş uzar.
                </ProTip>

                <InteractiveChecklist
                  storageKey="s11_kurulum"
                  items={[
                    "Kurulum planı ekiplerle paylaşıldı mı?",
                    "Ses–ışık–LED senkron testleri yapıldı mı?",
                    "Konuşmacı provaları tamamlandı mı?",
                    "Acil durum ve yedek senaryo hazır mı?",
                  ]}
                />
              </section>

              {/* s11a */}
              <section className="mt-10">
                <H2 id="s11a">11A. Etkinlik günü kontrol listesi</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Etkinlik günü “son tur kontrol” günüdür. Tedarikçi teyidi, alan walk-through ve ekipman testleri krizi azaltır.
                </p>

                <InteractiveChecklist
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
              </section>

              {/* s12 */}
              <section className="mt-10">
                <H2 id="s12">12. Etkinlik sonrası değerlendirme</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Etkinlik bittiğinde rapor başlar: bütçe sapmaları, teknik notlar, katılımcı geri bildirimleri ve “bir sonraki proje” dersleri.
                </p>

                <InteractiveChecklist
                  storageKey="s12_sonrası"
                  items={[
                    "Teknik ekip debrief yapıldı mı?",
                    "Bütçe sapmaları ve nedenleri not edildi mi?",
                    "Katılımcı memnuniyet verileri toplandı mı?",
                    "Görsel/video çıktılar teslim alındı mı?",
                  ]}
                />
              </section>

              {/* s12a */}
              <section className="mt-10">
                <H2 id="s12a">12A. Başarı ölçümü ve geri bildirim</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Kısa bir anket (QR/e-posta) + ekip içi debrief + SMART hedeflerle karşılaştırma…
                  Bir sonraki etkinliğin kalitesi buradan çıkar.
                </p>

                <InteractiveChecklist
                  storageKey="s12a_roi"
                  items={[
                    "Etkinlik sonrası anket gönderildi mi?",
                    "Geri bildirimler güçlü/zayıf alanlar olarak sınıflandırıldı mı?",
                    "SMART hedeflere göre debrief yapıldı mı?",
                    "Lead/memnuniyet/katılım metrikleri raporlandı mı?",
                    "Paydaşlara özet çıktı ve öğrenimler paylaşıldı mı?",
                  ]}
                />
              </section>

              {/* CTA */}
              <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">
                  Etkinliğinizi şansa bırakmayın
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Sahneva olarak <strong className="font-semibold text-slate-900">300+ kurumsal projede</strong>{" "}
                  edindiğimiz deneyimle, <strong className="font-semibold text-slate-900">81 ilde</strong> teknik
                  keşiften yayın zincirine kadar tüm süreci tek elden yönetiyoruz.
                  Hızlı teklif için WhatsApp’tan yazın; çoğu projede{" "}
                  <strong className="font-semibold text-slate-900">2 saat içinde</strong> projelendirilmiş teklif çıkıyoruz.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="noopener noreferrer"
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
                  <a
                    href={pdfHref}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    PDF Kontrol Listesi
                  </a>
                </div>
              </section>

              {/* Sources footer (clean) */}
              <section className="mt-10 text-xs leading-6 text-slate-500">
                <div className="font-semibold text-slate-700">Kaynaklar</div>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Kaltura – State of Virtual Events 2023: Teknik glitch sonrası terk oranları (%25 / %46 aralığı).
                  </li>
                  <li>
                    Eventcube – Event industry statistics & hybrid/virtual trend derlemeleri.
                  </li>
                  <li>
                    2025–2026 sektör benchmark’ları: hibrit etkinliğin norm haline gelmesi ve B2B ROI eğilimleri.
                  </li>
                </ul>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Hızlı Teklif</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Etkinlik detaylarını yazın, hızlıca projelendirelim.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="noopener noreferrer"
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
                  <a
                    href={pdfHref}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    PDF Kontrol Listesi
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Hizmetler</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li><Link className="hover:text-slate-900" href="/kurumsal-organizasyon">Kurumsal Organizasyon</Link></li>
                  <li><Link className="hover:text-slate-900" href="/led-ekran-kiralama">LED Ekran Kiralama</Link></li>
                  <li><Link className="hover:text-slate-900" href="/ses-isik-sistemleri">Ses & Işık Sistemleri</Link></li>
                  <li><Link className="hover:text-slate-900" href="/cadir-kiralama">Çadır Kiralama</Link></li>
                  <li><Link className="hover:text-slate-900" href="/sahne-kiralama">Sahne Kiralama</Link></li>
                  <li><Link className="hover:text-slate-900" href="/podyum-kiralama">Podyum Kiralama</Link></li>
                  <li><Link className="hover:text-slate-900" href="/masa-sandalye-kiralama">Masa Sandalye Kiralama</Link></li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">İlgili Yazılar</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li><Link className="hover:text-slate-900" href="/blog/led-ekran-teknoloji-trendleri-2026">2026 LED Ekran Teknolojisi Trendleri</Link></li>
                  <li><Link className="hover:text-slate-900" href="/blog/ses-sistemlerinde-2026-yenilikleri-trendler">Ses Sistemlerinde 2026 Yenilikleri</Link></li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping"
                    >
                      Dome Çadır Rehberi: 360° Mapping
                    </Link>
                  </li>
                  <li><Link className="hover:text-slate-900" href="/blog/kurumsal-etkinlik-yonetimi">Kurumsal Etkinlik Yönetimi Rehberi</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

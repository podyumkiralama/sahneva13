// app/(tr)/blog/av-kesif-teknik-kesif-rehberi/page.jsx
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";

export const revalidate = 86400;

const slug = "/blog/av-kesif-teknik-kesif-rehberi";
const url = `${BASE_SITE_URL}${slug}`;

const TITLE = "Etkinlik Mekânı AV Keşfi Nasıl Yapılır? Ses–Işık–Video–Rigging İçin Kontrol Listesi";
const DESCRIPTION = "Etkinlik öncesi teknik keşif (AV keşif) rehberi: ihtiyaç analizi, mekân altyapısı, güç/akustik/rigging, video ve aydınlatma planı, sözleşme maddeleri ve dokümantasyon. Üstte sahada kullanılabilir checklist + SSS.";

const PUBLISH_DATE = "2026-02-23T00:00:00+03:00";
const MODIFIED_DATE = "2026-02-23T00:00:00+03:00";
const HERO = "/img/blog/av-kesif-rehberi-hero.webp";
const OG_IMAGE = `${BASE_SITE_URL}${HERO}`;

const FAQ = [
  {
    "q": "Teknik keşif (AV keşif) etkinlikten kaç gün önce yapılmalı?",
    "a": "Büyük kurulumlarda 2–4 hafta idealdir. Rigging onayı, mekân izinleri veya içerik üretimi (LED içerik) varsa daha erken planlayın."
  },
  {
    "q": "Mekânın elektrik gücünü nasıl doğrularız?",
    "a": "Pano kapasitesi, faz dağılımı, sigorta/kaçak akım, priz/hat sayısı ve kablo güzergâhı kontrol edilir. Toplam yük kalem kalem çıkarılıp %10–15 yedek pay bırakılır."
  },
  {
    "q": "Rigging için hangi bilgiler istenmeli?",
    "a": "Askı noktaları, taşıma kapasitesi, tavan yüksekliği, statik/izin dokümanları ve ağırlık dağılım planı (rigging plot)."
  },
  {
    "q": "Video/LED planında en sık yapılan hata nedir?",
    "a": "Görüş çizgisi ve gün ışığı/parlama etkisini ölçmeden ekran konumu belirlemek. Keşifte oturma düzeni, ekran yüksekliği ve parlaklık senaryosu netleşmeli."
  },
  {
    "q": "Mekânın AV sözleşmelerinde nelere dikkat edilmeli?",
    "a": "Münhasır tedarikçi şartı, ek ücretler, sökme/kurulum kısıtları, çalışma saatleri, gürültü limitleri, sorumluluk ve cezai şartlar. Gerekirse hukuk danışmanlığı alın."
  }
];

function buildJsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE_SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: TITLE, item: url },
    ],
  };

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: TITLE,
    description: DESCRIPTION,
    image: [OG_IMAGE],
    datePublished: PUBLISH_DATE,
    dateModified: MODIFIED_DATE,
    inLanguage: "tr-TR",
    author: { "@id": `${BASE_SITE_URL}/#editor` },
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: FAQ.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return { breadcrumb, blogPosting, faqPage };
}

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: url },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url,
    type: "article",
    locale: "tr_TR",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
};

function SectionCard({ title, children, id }) {
  return (
    <section id={id} className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
      <h2 className="text-lg font-semibold tracking-tight sm:text-xl">{title}</h2>
      <div className="mt-3 text-sm text-white/80 leading-relaxed">{children}</div>
    </section>
  );
}

function Accordion({ items }) {
  return (
    <div className="mt-4 space-y-3">
      {items.map((it) => (
        <details
          key={it.title}
          className="group rounded-xl border border-white/10 bg-black/10 p-4 open:bg-black/20"
        >
          <summary className="cursor-pointer list-none text-sm font-semibold text-white/90">
            <span className="mr-2 inline-block transition-transform group-open:rotate-90">›</span>
            {it.title}
          </summary>
          <div className="mt-3 space-y-2 text-sm text-white/75">{it.body}</div>
        </details>
      ))}
    </div>
  );
}

export default function Page() {
  const { breadcrumb, blogPosting, faqPage } = buildJsonLd();

  return (
    <>
      <Script
        id="jsonld-blogposting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPosting).replace(/</g, "\\u003c"),
        }}
      />
      <Script
        id="jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPage).replace(/</g, "\\u003c"),
        }}
      />
      <Script
        id="jsonld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c"),
        }}
      />

      <main className="relative overflow-hidden bg-[#0B1120] text-white">
        {/* Grid + glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(60% 60% at 50% 20%, black 52%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(60% 60% at 50% 20%, black 52%, transparent 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-24 right-[-140px] h-[420px] w-[420px] rounded-full bg-indigo-500/15 blur-3xl"
        />

        {/* Hero */}
        <header className="relative mx-auto max-w-6xl px-4 pt-10 pb-8 sm:pt-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                Teknik Keşif • AV Keşif • Rigging • Güç Planı
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                {TITLE}
              </h1>
              <p className="mt-4 max-w-2xl text-white/80">
                Bu rehber; mekân seçimi, altyapı doğrulama, ses/ışık/video/rigging kararları ve sözleşme
                maddeleri dahil olmak üzere keşif sürecini “sahada sürpriz” bırakmayacak şekilde kurgular.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0B1120] hover:bg-white/90"
                >
                  Teknik Keşif Talep Et
                </Link>
                <Link
                  href="/kurumsal-organizasyon"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Kurumsal Etkinlik Çözümleri
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/60">
                <span>Yayın: 23 Şubat 2026</span>
                <span>•</span>
                <span>Okuma: ~10 dk</span>
                <span>•</span>
                <span>Odak: net bütçe & düşük risk</span>
              </div>

              <nav className="mt-6 flex flex-wrap gap-2 text-xs">
                {[
                  ["#checklist", "Checklist"],
                  ["#bolum-1", "İhtiyaç Analizi"],
                  ["#bolum-2", "Hazırlık"],
                  ["#bolum-3", "Sahada Uygulama"],
                  ["#bolum-4", "Dokümantasyon"],
                  ["#sss", "SSS"],
                ].map(([h, t]) => (
                  <a
                    key={h}
                    href={h}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-white/80 hover:bg-white/10"
                  >
                    {t}
                  </a>
                ))}
              </nav>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/30" />
                <Image
                  src={HERO}
                  alt="Etkinlik mekânı teknik keşif ve AV planlama"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/70">
                Sahada pratik: Keşif notlarını tek sayfa “Keşif Özeti”ne dökün (güç, rigging, FOH, internet, erişim, izinler).
              </div>
            </div>
          </div>
        </header>

        {/* Checklist */}
        <section id="checklist" className="relative mx-auto max-w-6xl px-4 pb-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <h2 className="text-lg font-semibold">✅ AV Keşif Kontrol Listesi (Sahada Kullan)</h2>
            <p className="mt-2 text-sm text-white/75">
              15 maddeden 12’si netse; kurulum günü sürpriz oranı ciddi düşer. Büyük projelerde bu listeyi “keşif tutanağı”na çevirin.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <ul className="space-y-2 text-sm text-white/80">
                <li>• Güç: toplam kW, faz dağılımı, pano konumu, yedek kapasite (%10–15)</li>
                <li>• Priz/hat: FOH, sahne, LED, medya, interkom, kamera, şarj noktaları</li>
                <li>• Kablo güzergâhı: yaya akışı, kablo köprüsü, güvenlik bantlama</li>
                <li>• FOH: görüş hattı, mesafe, masa ölçüsü, çevresel gürültü</li>
                <li>• Akustik: yankı, konuşma anlaşılabilirliği, SPL limiti</li>
                <li>• Işık: tavan yüksekliği/trim, blackout ihtiyacı, gün ışığı etkisi</li>
                <li>• LED/Video: görüş açısı, parlama, en-boy oranı, içerik formatı</li>
                <li>• İnternet: uplink/downlink, kablolu hat, yedek (4.5G/5G) plan</li>
              </ul>

              <ul className="space-y-2 text-sm text-white/80">
                <li>• Rigging: askı noktaları, taşıma kapasitesi, izin/evrak, rigging plot</li>
                <li>• Truss/Sahne: ölçüler, zemin, yük dağılımı, bariyer ihtiyacı</li>
                <li>• Backstage: depo, geçiş koridoru, sanatçı/konuşmacı akışı</li>
                <li>• Lojistik: tır yanaşma, rampa, forklift, çalışma saatleri</li>
                <li>• Güvenlik: alan kapanışı, gece güvenliği, akses kontrol</li>
                <li>• İzinler: belediye/AVM/site, gürültü, yangın güvenliği</li>
                <li>• Run-of-show: prova, soundcheck, içerik teslim tarihleri</li>
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/ses-isik-sistemleri" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
                Ses-Işık Sistemleri
              </Link>
              <Link href="/led-ekran-kiralama" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
                LED Ekran Kiralama
              </Link>
              <Link href="/sahne-kiralama" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
                Sahne Kiralama
              </Link>
              <Link href="/podyum-kiralama" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
                Podyum Kiralama
              </Link>
              <Link href="/cadir-kiralama" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
                Çadır Kiralama
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="relative mx-auto max-w-3xl px-4 pb-16">
          <SectionCard id="bolum-1" title="Bölüm 1 — Etkinliğin AV ihtiyaçlarını doğru tarif et">
            <p>
              Keşif, “mekânı görmek” değil; ihtiyaçları netleştirip teknik kararları kilitlemektir. Önce etkinlik hedefini
              (lansman, konferans, konser, gala) ve hedef kitleyi netleştir. Sonra şu 4 soruyla çerçeveyi kur:
            </p>
            <ul className="mt-3 space-y-2">
              <li><strong>Mesaj:</strong> Katılımcı neyi hatırlamalı?</li>
              <li><strong>Deneyim:</strong> Sürükleyici mi, bilgi odaklı mı?</li>
              <li><strong>Format:</strong> Konuşma mı, performans mı, hibrit mi?</li>
              <li><strong>İçerik:</strong> Sunum/Video/Canlı yayın/Çoklu kamera var mı?</li>
            </ul>
            <p className="mt-3">
              Bu cevaplar; hoparlör yerleşimi, LED boyutu, ışık dili ve rigging ihtiyacını belirler.
            </p>
          </SectionCard>

          <SectionCard id="bolum-2" title="Bölüm 2 — Keşfe hazırlık: mekândan isteyeceğin bilgiler">
            <p>
              Keşiften önce mekândan yazılı olarak şu bilgileri iste. Bu, sahada “sürpriz” riskini düşürür.
            </p>

            <Accordion
              items={[
                {
                  title: "Elektrik & altyapı",
                  body: (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Pano kapasitesi, faz bilgisi, sigorta/kaçak akım</li>
                      <li>Priz/hat sayısı, FOH ve sahneye uzaklık</li>
                      <li>Yedek hat/jenaratör ihtimali ve konum</li>
                    </ul>
                  ),
                },
                {
                  title: "Rigging / truss / askı noktaları",
                  body: (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Askı noktaları ve taşıma kapasitesi (yazılı)</li>
                      <li>İzin/prosedür, statik rapor gereksinimi</li>
                      <li>Tavan yüksekliği, trim limitleri</li>
                    </ul>
                  ),
                },
                {
                  title: "Lojistik & erişim",
                  body: (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Tır yanaşma, rampa, yük asansörü, kapı ölçüleri</li>
                      <li>Kurulum saatleri, sessiz saatler, depo alanı</li>
                      <li>Gece güvenliği, alan kapanışı</li>
                    </ul>
                  ),
                },
                {
                  title: "Sözleşme & kısıtlar",
                  body: (
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Münhasır AV tedarikçisi şartı var mı?</li>
                      <li>Ek ücretler: sökme/kaldırma, mesai, güvenlik, elektrik</li>
                      <li>Gürültü/SPL limiti, yangın güvenliği şartları</li>
                    </ul>
                  ),
                },
              ]}
            />
          </SectionCard>

          <SectionCard id="bolum-3" title="Bölüm 3 — Mekânda uygulama: ses, video, ışık, rigging">
            <p>
              Sahada hedef: ölçmek, fotoğraflamak ve kararları kilitlemek. Aşağıdaki başlıklar, keşfin omurgasıdır.
            </p>

            <Accordion
              items={[
                {
                  title: "Ses: akustik, FOH ve SPL limitleri",
                  body: (
                    <>
                      <p>
                        Konuşma odaklı etkinlikte anlaşılabilirlik; performans odaklı etkinlikte SPL ve low-end yönetimi kritiktir.
                        Yankı, HVAC gürültüsü, komşuluk riski ve limitör stratejisini keşifte netleştir.
                      </p>
                      <p className="text-white/70">
                        Sahneva notu: FOH sahneyi görmüyorsa, miks kalitesi düşer ve show kontrol zorlaşır.
                      </p>
                    </>
                  ),
                },
                {
                  title: "Video/LED: görüş çizgisi, en-boy oranı, içerik testleri (6 ipucu)",
                  body: (
                    <ol className="list-decimal pl-5 space-y-1">
                      <li><strong>En-boy oranı:</strong> İçerik formatını (16:9 vb.) önceden test et.</li>
                      <li><strong>Seçim:</strong> alan + ışık koşuluna göre projeksiyon/LED belirle.</li>
                      <li><strong>İnternet:</strong> yayın/uzaktan katılım varsa yedek hat planla.</li>
                      <li><strong>İletim:</strong> kablo karmaşası için kablosuz iletim senaryosu düşün.</li>
                      <li><strong>Kaynaklar:</strong> sunum, video, kamera, uzaktan katılım… hepsini listele.</li>
                      <li><strong>Çoklu ekran:</strong> aynı içerik mi farklı mı? sinyal planını kilitle.</li>
                    </ol>
                  ),
                },
                {
                  title: "Işık: doğal ışık, blackout, sahne dili (6 ipucu + 3D plan)",
                  body: (
                    <>
                      <p>
                        Keşfi mümkünse etkinliğin yapılacağı saat aralığında yap. Gün ışığı parlaması; LED kontrastını ve sahne görünürlüğünü etkiler.
                        Dimmer/DMX altyapısı ve blackout ihtiyacını doğrula.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Stage wash</li>
                        <li>Back-lighting</li>
                        <li>Uplight</li>
                        <li>Beam / hareketli ışık</li>
                        <li>Gobo</li>
                        <li>Followspot</li>
                      </ul>
                      <p className="mt-2">
                        Büyük kurulumlarda <strong>3D plan/render</strong> iste: sahne, LED ve ışık konumlarını kağıt üstünde doğrulamak revizyon maliyetini düşürür.
                      </p>
                    </>
                  ),
                },
                {
                  title: "Rigging: askı kapasitesi ‘varsayım’ değildir",
                  body: (
                    <p>
                      Askı noktaları, taşıma kapasitesi ve izin süreçleri yazılı doğrulanmalı. Keşifte rigging plot ile ağırlık dağılımını netleştir;
                      “buraya asarız” yaklaşımı sonradan iptal ve ek maliyet üretir.
                    </p>
                  ),
                },
              ]}
            />
          </SectionCard>

          <SectionCard id="bolum-4" title="Bölüm 4 — Dokümantasyon, bütçe ve karar alma">
            <p>
              Keşif bittiğinde elinde 2 çıktı olmalı: (1) tek sayfa keşif özeti, (2) ekler (foto, kroki, ölçü, risk notu).
              Bu sayede teklif netleşir, bütçe şişmesi azalır.
            </p>
            <ul className="mt-3 space-y-2">
              <li><strong>Tek sayfa strateji</strong> + run-of-show ile üretim planını kilitle.</li>
              <li><strong>%10–15 kontenjan</strong> (contingency) bırak: sürpriz kalemleri yönet.</li>
              <li><strong>Net rol dağılımı:</strong> FOH, ışık, LED, rigging, sahne, içerik sorumluları.</li>
              <li><strong>Sözleşme kontrolü:</strong> münhasırlık, ek ücretler, mesai, limitler, sorumluluk.</li>
            </ul>

            <div className="mt-6 rounded-xl border border-white/10 bg-black/15 p-4">
              <p className="text-sm text-white/80">
                Sahneva yaklaşımı: keşif raporu + teknik paket olmadan “final fiyat” kilitlemeyiz. Böylece sahada sürpriz değil, planlı üretim olur.
              </p>
            </div>
          </SectionCard>

          {/* CTA */}
          <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <h2 className="text-lg font-semibold">Teknik keşif talep edin</h2>
            <p className="mt-2 text-sm text-white/75">
              İstanbul ve Türkiye geneli projelerinizde; sahne, podyum, LED ekran, ses-ışık ve rigging planını keşif raporu + net teknik paket ile kuralım.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0B1120] hover:bg-white/90"
              >
                Keşif / Teklif Formu
              </Link>
              <Link
                href="/kurumsal-organizasyon"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                Kurumsal Organizasyon
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section id="sss" className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <h2 className="text-lg font-semibold">SSS</h2>
            <div className="mt-4 space-y-4">
              {FAQ.map((item) => (
                <div key={item.q} className="rounded-xl border border-white/10 bg-black/10 p-4">
                  <h3 className="text-sm font-semibold text-white/90">{item.q}</h3>
                  <p className="mt-2 text-sm text-white/75">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import SmartBlogSuggestions from "@/components/blog/SmartBlogSuggestions";
import {
  BASE_SITE_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";

export const revalidate = 86400;

const slug = "/blog/etkinlik-teknik-kesif";
const url = `${BASE_SITE_URL}${slug}`;
const FEATURED_IMAGE = "/img/blog/etkinlik-teknik-kesif-hero.webp";
const OG_IMAGE = FEATURED_IMAGE;
const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const PUBLISH_DATE = "2026-02-23T00:00:00+03:00";

export const metadata = {
  title: "Etkinlik Teknik Keşif Rehberi: Ses, Işık, LED ve Sahne için Net Checklist",
  description: "Etkinlik teknik keşif (AV keşif) sürecini A’dan Z’ye anlatan rehber: ihtiyaç analizi, mekân altyapısı, güç/elektrik planı, akustik, LED & video, aydınlatma, rigging ve sözleşme riskleri. Sahada kullanılabilir kontrol listesi.",
  alternates: { canonical: url },
  image: FEATURED_IMAGE,
  openGraph: {
    title: "Etkinlik Teknik Keşif Rehberi: Ses, Işık, LED ve Sahne için Net Checklist | Sahneva",
    description: "Etkinlik teknik keşif (AV keşif) sürecini A’dan Z’ye anlatan rehber: ihtiyaç analizi, mekân altyapısı, güç/elektrik planı, akustik, LED & video, aydınlatma, rigging ve sözleşme riskleri. Sahada kullanılabilir kontrol listesi.",
    url,
    siteName: "Sahneva",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: `${BASE_SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Etkinlik Teknik Keşif Rehberi: Ses, Işık, LED ve Sahne için Net Checklist öne çıkan görseli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etkinlik Teknik Keşif Rehberi: Ses, Işık, LED ve Sahne için Net Checklist",
    description: "Etkinlik teknik keşif (AV keşif) sürecini A’dan Z’ye anlatan rehber: ihtiyaç analizi, mekân altyapısı, güç/elektrik planı, akustik, LED & video, aydınlatma, rigging ve sözleşme riskleri. Sahada kullanılabilir kontrol listesi.",
    images: [`${BASE_SITE_URL}${OG_IMAGE}`],
  },
  keywords: [
  "teknik keşif",
  "av keşif",
  "ses ışık keşfi",
  "led ekran keşfi",
  "sahne keşfi",
  "rigging",
  "etkinlik prodüksiyon",
  "teknik prodüksiyon",
  "run of show",
  "güç planı"
],
  authors: [{ name: AUTHOR_NAME }],
  date: PUBLISH_DATE,
  category: "Teknik Prodüksiyon",
  readTime: "10–12 dk okuma",
  author: AUTHOR_NAME,
};

/* ---------- helpers (PROJECT BLOG STYLE) ---------- */
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
  const publishedHuman = "23 Şubat 2026";
  const readingTime = metadata?.readTime ?? "10–12 dk okuma";

  const faqItems = [
  {
    "q": "Teknik keşif etkinlikten kaç gün önce yapılmalı?",
    "a": "Büyük kurulumlarda 2–4 hafta önce idealdir. Rigging onayı, mekân izinleri veya LED içerik üretimi varsa daha erken planlayın."
  },
  {
    "q": "Elektrik gücünü nasıl doğrularız?",
    "a": "Pano kapasitesi, faz dağılımı, sigorta/kaçak akım, priz/hat sayısı ve kablo güzergâhı kontrol edilir. Toplam yük kalem kalem çıkarılır; %10–15 yedek pay bırakılır."
  },
  {
    "q": "Rigging için mekândan hangi bilgiler istenir?",
    "a": "Askı noktaları, taşıma kapasitesi, tavan yüksekliği, statik/izin dokümanları ve ağırlık dağılım planı (rigging plot)."
  },
  {
    "q": "Video/LED tarafında en sık yapılan hata nedir?",
    "a": "Görüş çizgisi ve gün ışığı/parlama etkisini ölçmeden ekran konumu belirlemek. Keşifte oturma düzeni, ekran yüksekliği ve parlaklık senaryosu netleşmeli."
  },
  {
    "q": "Mekân sözleşmesinde AV için nelere dikkat edilmeli?",
    "a": "Münhasır tedarikçi şartı, ek ücretler, çalışma saatleri, gürültü limitleri, sökme/kurulum kısıtları, sorumluluk/cezai şartlar. Gerekirse hukuk danışmanlığı alın."
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        mainEntityOfPage: { "@id": url },
        headline: "Etkinlik Teknik Keşif Rehberi: Ses, Işık, LED ve Sahne için Net Checklist",
        description: "Etkinlik teknik keşif (AV keşif) sürecini A’dan Z’ye anlatan rehber: ihtiyaç analizi, mekân altyapısı, güç/elektrik planı, akustik, LED & video, aydınlatma, rigging ve sözleşme riskleri. Sahada kullanılabilir kontrol listesi.",
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
          { "@type": "Thing", name: "Etkinlik teknik keşif" },
          { "@type": "Thing", name: "Ses ve ışık sistemleri" },
          { "@type": "Thing", name: "LED ekran ve video yönetimi" },
          { "@type": "Thing", name: "Rigging ve truss güvenliği" },
          { "@type": "Thing", name: "Run-of-show ve operasyon planı" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqItems.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: { "@type": "Answer", text: it.a },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="ld-blogposting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
          <BreadcrumbJsonLd
            items={[
              { name: "Anasayfa", url: BASE_SITE_URL },
              { name: "Blog", url: `${BASE_SITE_URL}/blog` },
              { name: "Etkinlik Teknik Keşif Rehberi", url },
            ]}
          />

          {/* Header */}
          <header>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
              teknik prodüksiyon • AV keşif • check-list
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Etkinlik Teknik Keşif Rehberi
              <span className="block text-slate-600">
                Ses, Işık, LED ve Sahne için net checklist
              </span>
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
              Teknik keşif; sahne, LED ekran, ses–ışık ve rigging kararlarını{" "}
              <strong className="font-semibold text-slate-900">
                sahada sürpriz kalmayacak
              </strong>{" "}
              şekilde kilitleme işidir. Bu rehberde keşfi nasıl planlayacağınızı,
              mekânda neyi ölçüp neyi yazılı almanız gerektiğini ve teklifi “pakete”
              nasıl çevireceğinizi anlatıyoruz.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span>{publishedHuman}</span>
              <span aria-hidden="true">•</span>
              <span>{readingTime}</span>
              <span aria-hidden="true">•</span>
              <span>{AUTHOR_NAME}</span>
            </div>

            {/* CTA row */}
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://wa.me/905453048671"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                WhatsApp’tan Yazın (hızlı keşif)
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
              alt="Etkinlik teknik keşif rehberi öne çıkan görsel"
              caption="Teknik keşif; güç planı, yerleşim, kablo güzergâhı ve show akışını sahada kilitlemenin en hızlı yoludur."
              priority
              loading="eager"
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard value="2–4 hafta" label="Büyük kurulumlarda ideal keşif zamanı" />
              <StatCard value="%10–15" label="Bütçe kontenjanı (contingency) önerisi" />
              <StatCard value="Tek plan" label="Sahne + LED + ses/ışık + yayın akışı" />
              <StatCard value="0 sürpriz" label="Hedef: kurulum günü revizyonu düşürmek" />
            </div>

            <ProTip title="Sahada altın kural">
              Keşifte “olur” denilen her şeyin şartını{" "}
              <strong className="font-semibold text-slate-900">yazılı</strong>{" "}
              alın: elektrik, çalışma saatleri, rigging kapasitesi, gürültü limitleri,
              yükleme boşaltma ve güvenlik.
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
                    ["#s1", "1. Keşiften önce: ihtiyaç analizi"],
                    ["#s2", "2. Mekândan yazılı isteyeceğin bilgiler"],
                    ["#s3", "3. Keşifte ölç–fotoğrafla–kilitle"],
                    ["#s4", "4. Keşif raporu: tek sayfa özet + risk listesi"],
                    ["#s5", "5. Paket nasıl çıkarılır? (Basic/Pro/Premium)"],
                    ["#s6", "6. SSS"],
                  ].map(([href, text]) => (
                    <li key={href}>
                      <a className="hover:text-slate-900" href={href}>
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-10">
                <H2 id="s1">1. Keşiften önce: ihtiyaç analizi</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  “Ses–ışık paketi”nin netleşmesi için önce etkinliğin hedefini ve içerik akışını tarif etmelisiniz.
                  Konuşma odaklı bir konferans ile müzik enerjisi istenen bir lansmanın teknik tasarımı farklıdır.
                </p>

                <Table
                  caption="Teknik paketi kilitleyen 7 soru"
                  columns={["Soru", "Neyi belirler?"]}
                  rows={[
                    ["Katılımcı sayısı + oturma/ayakta düzen", "Ses kapsaması, ekran yüksekliği, bariyer ve akış"],
                    ["İçerik türü (sunum/video/canlı kamera)", "Switcher, medya server, içerik formatı"],
                    ["Canlı yayın / kayıt var mı?", "Kamera sayısı, uplink, yedekleme"],
                    ["LED ekranda ne gösterilecek?", "Ekran oranı, çözünürlük, sinyal planı"],
                    ["Rigging gerekli mi?", "Askı planı, kapasite, statik/izin"],
                    ["Kurulum penceresi kaç saat?", "Ekip büyüklüğü, lojistik, pre-rig ihtiyacı"],
                    ["Gürültü/SPL limiti var mı?", "Sistem ölçeği ve yerleşim"],
                  ]}
                />

                <ProTip title="Run-of-show taslağı">
                  Keşiften önce 1 sayfalık run-of-show çıkar: açılış, konuşmacı değişimleri, video girişleri, canlı kamera,
                  ödül anı, kapanış. Bu sayfa, teklifin “paket” çıkmasını hızlandırır.
                </ProTip>
              </section>

              <section className="mt-10">
                <H2 id="s2">2. Mekândan yazılı isteyeceğin bilgiler</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Keşfe gitmeden önce mekândan bazı bilgileri yazılı almak; “gittik gördük ama sonradan şart çıktı” krizini azaltır.
                </p>

                <Table
                  caption="Keşif öncesi mekândan istenecekler"
                  columns={["Başlık", "Örnek detay"]}
                  rows={[
                    ["Elektrik", "Pano kapasitesi (A/kW), faz sayısı, priz/hat, kaçak akım, ek ücret"],
                    ["Rigging", "Askı noktası planı, taşıma kapasitesi (yazılı), tavan yüksekliği, izin/prosedür"],
                    ["Lojistik", "Tır yanaşma, rampa, kapı ölçüleri, yük asansörü, çalışma saatleri"],
                    ["Kısıtlar", "Gürültü limiti, blackout izinleri, kablo güzergâhı kısıtları"],
                    ["Güvenlik", "Gece güvenliği, alan kapanışı, depo/backstage kilitli alan"],
                  ]}
                />

                <ProTip title="Özellikle rigging">
                  Rigging kapasitesi “varsayım” değildir. Askı noktası yoksa veya kapasite belirsizse planı zeminden kuracak şekilde revize etmek gerekebilir.
                </ProTip>
              </section>

              <section className="mt-10">
                <H2 id="s3">3. Keşifte ölç–fotoğrafla–kilitle</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Keşifte amaç: kararları kilitlemek. Ölçü + foto + not üçlüsü, sonra teklif ve kurulum planına dönüşür.
                </p>

                <ProTip title="Güç planı (en kritik)">
                  Toplam yükü kalem kalem çıkar (ses/ışık/LED/medya/server/kayıt). Faz dağılımını ve pano erişimini doğrula.
                  Sonra <strong className="font-semibold text-slate-900">%10–15</strong> yedek pay bırak.
                </ProTip>

                <Table
                  caption="Sahada mutlaka kontrol edilecek 10 madde"
                  columns={["Alan", "Kontrol"]}
                  rows={[
                    ["FOH", "Sahneyi görüyor mu? Masa ölçüsü? Kablo güzergâhı?"],
                    ["Akustik", "Yankı/HVAC gürültüsü? Konuşma anlaşılabilirliği?"],
                    ["LED / Video", "Görüş çizgisi, parlama, ekran yüksekliği, oran"],
                    ["Işık", "Trim yüksekliği, blackout, DMX altyapısı"],
                    ["Rigging", "Askı noktası + kapasite + prosedür (yazılı)"],
                    ["Zemin", "Sahne/truss yükü, eğim, kaplama ihtiyacı"],
                    ["Backstage", "Depo, geçiş koridoru, konuşmacı/sanatçı akışı"],
                    ["İnternet", "Kablolu hat, uplink, yedek bağlantı"],
                    ["Güvenlik", "Gece güvenliği, kilitli alan, akses kontrol"],
                    ["Çalışma saatleri", "Mesai, gece çalışması, gürültü kısıtı"],
                  ]}
                />
              </section>

              <section className="mt-10">
                <H2 id="s4">4. Keşif raporu: tek sayfa özet + risk listesi</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Keşif bittiğinde “tek sayfa özet” hazırlayın. Bu sayfa; teknik paketin, bütçenin ve sorumlulukların netleşmesini sağlar.
                </p>

                <Table
                  caption="Tek sayfa keşif özeti (şablon)"
                  columns={["Başlık", "Ne yazılır?"]}
                  rows={[
                    ["Yerleşim", "Sahne ölçüsü, LED ölçüsü/konumu, FOH yeri, backstage"],
                    ["Güç", "Toplam kW, faz dağılımı, pano konumu, yedek pay"],
                    ["Sinyal planı", "Sunum/video/kamera kaynakları, çıkışlar, yedek"],
                    ["Rigging", "Askı noktası/kapasite, rigging plot, izinler"],
                    ["Lojistik", "Load-in/out, çalışma saatleri, forklift/rampa"],
                    ["Risk & aksiyon", "Açık hava B planı, güvenlik, kısıtlar, ek maliyet"],
                  ]}
                />

                <ProTip title="Bütçe kontenjanı">
                  Keşifte riskleri notlayıp bütçede <strong className="font-semibold text-slate-900">%10–15</strong> kontenjan ayırmak; son dakika mecburi maliyetleri yönetilebilir kılar.
                </ProTip>
              </section>

              <section className="mt-10">
                <H2 id="s5">5. Paket nasıl çıkarılır? (Basic/Pro/Premium)</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  “Ne istendiğini bilmiyoruz” durumunda en doğru yöntem; keşifte ihtiyaçları sınıflandırıp 3 seviyeli paket sunmaktır:
                  <strong className="font-semibold text-slate-900"> Basic / Pro / Premium</strong>.
                </p>

                <Table
                  caption="Örnek paket mantığı"
                  columns={["Paket", "Kim için?", "İçerik yaklaşımı"]}
                  rows={[
                    ["Basic", "Küçük toplantı / konuşma odaklı", "Temel PA + sahne wash + tek ekran/tek kaynak"],
                    ["Pro", "Orta ölçek / çok içerikli", "Geniş ses kapsaması + hareketli ışık + kamera entegrasyonu"],
                    ["Premium", "Büyük ölçek / yayın + sponsor", "Çoklu ekran + switcher + yedekli güç/sinyal + rigging planı"],
                  ]}
                />

                <ProTip title="Tek elden paket">
                  Sahne + LED + ses/ışık + yayın zinciri tek pakette olursa hem maliyet hem sorumluluk yönetimi temizleşir.
                </ProTip>
              </section>

              <section className="mt-10">
                <H2 id="s6">6. SSS</H2>
                <div className="mt-4 space-y-5">
                  {faqItems.map((it) => (
                    <div key={it.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="text-sm font-semibold text-slate-900">{it.q}</div>
                      <div className="mt-2 text-sm leading-7 text-slate-700">{it.a}</div>
                    </div>
                  ))}
                </div>
              </section>

              <SmartBlogSuggestions
                currentSlug={slug.replace("/blog/", "")}
                currentCategory={metadata?.category}
                currentKeywords={metadata?.keywords}
              />

              <BlogRelatedLinks
                services={[
                  { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemleri" },
                  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
                  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
                  { href: "/podyum-kiralama", label: "Podyum Kiralama" },
                  { href: "/cadir-kiralama", label: "Çadır Kiralama" },
                ]}
              />
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Hızlı Keşif / Teklif</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Etkinlik detaylarını yazın, keşif + net paketle ilerleyelim.
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
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Hizmetler</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li><Link className="hover:text-slate-900" href="/led-ekran-kiralama">LED Ekran Kiralama</Link></li>
                  <li><Link className="hover:text-slate-900" href="/ses-isik-sistemleri">Ses & Işık Sistemleri</Link></li>
                  <li><Link className="hover:text-slate-900" href="/sahne-kiralama">Sahne Kiralama</Link></li>
                  <li><Link className="hover:text-slate-900" href="/podyum-kiralama">Podyum Kiralama</Link></li>
                  <li><Link className="hover:text-slate-900" href="/cadir-kiralama">Çadır Kiralama</Link></li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">İlgili Yazılar</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li><Link className="hover:text-slate-900" href="/blog/kurumsal-etkinlik-planlama-rehberi-2026">2026 Kurumsal Etkinlik Planlama Rehberi</Link></li>
                  <li><Link className="hover:text-slate-900" href="/blog/led-ekran-teknoloji-trendleri-2026">2026 LED Ekran Teknolojisi Trendleri</Link></li>
                  <li><Link className="hover:text-slate-900" href="/blog/ses-sistemlerinde-2026-yenilikleri-trendler">Ses Sistemlerinde 2026 Yenilikleri</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

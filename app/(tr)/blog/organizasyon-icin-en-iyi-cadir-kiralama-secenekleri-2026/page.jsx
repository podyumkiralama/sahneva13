import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";

const ORIGIN = "https://www.sahneva.com";
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? ORIGIN).replace(/\/$/, "");

const SLUG = "organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026";
const BLOG_PATH = `/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const HERO_IMG = "/img/blog/pagoda-cadir-kurumsal-etkinlik.webp";
const IMG_PAGODA = "/img/blog/pagoda-cadir-kurumsal-etkinlik.webp";
const IMG_CLEAR = "/img/blog/kurumsal-etkinlik-cadir.webp";
const IMG_DOME = "/img/blog/dome-cadir-ic-mekan.webp";

const TITLE =
  "Organizasyon İçin En İyi Çadır Kiralama Seçenekleri (2026 Güncel Rehber)";
const DESCRIPTION =
  "Kurumsal etkinlikten düğüne, fuardan festivale: 2026 çadır kiralama rehberi. Doğru çadır seçimi, kurulum süreci, maliyet belirleyicileri ve güvenlik kontrol listesi.";
const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const PUBLISH_DATE = "2026-02-12T00:00:00+03:00";
const MODIFIED_DATE = "2026-02-12T00:00:00+03:00";

export const metadata = {
  title: `${TITLE} | Sahneva Organizasyon`,
  description: DESCRIPTION,
  alternates: { canonical: BLOG_URL },
  image: HERO_IMG,
  openGraph: {
    title: `${TITLE} | Sahneva Organizasyon`,
    description: DESCRIPTION,
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva Organizasyon",
    images: [
      {
        url: `${SITE_URL}${HERO_IMG}`,
        width: 1200,
        height: 630,
        alt: "Organizasyonlar için 2026 çadır kiralama rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMG}`],
  },
  keywords: [
    "çadır kiralama",
    "organizasyon çadırı",
    "kurumsal etkinlik",
    "düğün çadırı",
    "fuarlarda çadır",
    "yüksek peak çadır",
    "modüler çadır",
    "Sahneva",
  ],
  authors: [{ name: AUTHOR_NAME }],
  category: "Çadır Kiralama",
  date: PUBLISH_DATE,
  readTime: "8–10 dk okuma",
  author: AUTHOR_NAME,
};

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function buildArticleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BLOG_URL}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
    headline: TITLE,
    description: DESCRIPTION,
    image: [`${SITE_URL}${HERO_IMG}`],
    datePublished: PUBLISH_DATE,
    dateModified: MODIFIED_DATE,
    inLanguage: "tr-TR",
    author: {
      "@type": "Organization",
      name: "Sahneva Organizasyon",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Sahneva Organizasyon",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.webp` },
    },
  };
}

function buildBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: TITLE, item: BLOG_URL },
    ],
  };
}

function Figure({ src, alt, caption }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] w-full bg-slate-50">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 760px"
          className="object-cover"
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
  const articleJsonLd = buildArticleJsonLd();
  const breadcrumbJsonLd = buildBreadcrumbJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        baseUrl={SITE_URL}
        items={[
          { name: "Ana Sayfa", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: TITLE, url: BLOG_URL },
        ]}
      />

      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />

      <article className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 pb-20 pt-10 lg:px-8">
        <header className="space-y-6">
          <nav className="text-sm text-slate-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link className="hover:text-slate-900" href="/">
                  Anasayfa
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li>
                <Link className="hover:text-slate-900" href="/blog">
                  Blog
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="font-medium text-slate-900">2026 Çadır Kiralama Rehberi</li>
            </ol>
          </nav>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Sahneva Organizasyon · Çadır Kiralama
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {TITLE}
            </h1>
            <p className="text-lg text-slate-600">{DESCRIPTION}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span>Yayın: 12 Şubat 2026</span>
              <span>•</span>
              <span>{metadata.readTime}</span>
              <span>•</span>
              <span>{AUTHOR_NAME}</span>
            </div>
          </div>

          <Figure
            src={HERO_IMG}
            alt="Kurumsal organizasyonlar için profesyonel çadır kurulumu"
            caption="Doğru çadır seçimi görünmeyen sigortadır: rüzgar yükü hesabı, zemin analizi ve operasyon planı ile bütünleşir."
          />
        </header>

        <section className="space-y-5 text-base leading-7 text-slate-700">
          <p>
            Açık hava organizasyonlarında her şey hazır gibi görünür: sahne ışıkları parlar,
            ses net, LED ekranlar kristal... Ancak bir anda rüzgar çıkar, zemin yumuşar ve
            o “mükemmel” kurulum sallanmaya başlar. İşte o an anlarsınız ki, etkinliğin asıl
            gizli kahramanı <strong>çadır sistemidir</strong>.
          </p>
          <p>
            Yanlış çadır seçimi sadece konforu değil, tüm organizasyonun güvenliğini riske
            atar. Doğru çadır kiralama ise etkinliğin görünmeyen sigortasıdır. Sahneva
            Organizasyon olarak yılların saha tecrübesiyle söylüyoruz: Çadır kiralama bir tente
            işi değil; mühendislik, rüzgar yükü hesabı, zemin analizi ve operasyon planlamasıdır.
          </p>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">Sahneva Organizasyon Hizmetleri</p>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
              <li>• Çadır kiralama</li>
              <li>• Sahne kurulumu</li>
              <li>• LED ekran sistemleri</li>
              <li>• Ses ve ışık entegrasyonu</li>
            </ul>
            <p className="mt-3 text-sm text-slate-600">
              İstanbul Kağıthane merkezli ekibimizle Türkiye genelinde anahtar teslim hizmet
              sunuyoruz.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Organizasyon Türüne Göre En Uygun Çadır Sistemleri
          </h2>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              1️⃣ Kurumsal Etkinlikler, Lansmanlar ve Bayi Toplantıları İçin
            </h3>
            <p className="text-slate-700">
              Prestij ve teknik güvenlik birlikte düşünülmelidir. Tercih edilen sistem: alüminyum
              konstrüksiyon çerçeve çadırlar (4–6 metre yan yükseklik).
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Truss sistemleri sorunsuz entegre edilir.</li>
              <li>• Line array ses sistemleri taşınabilir.</li>
              <li>• Dev LED ekran montajı güvenle yapılır.</li>
              <li>• Klima ve havalandırma kurulabilir.</li>
            </ul>
            <p className="text-sm text-slate-600">
              Sahadaki gerçeklik: Bir lansman projesinde 300 m² alanda ağır truss ve 12 metrelik
              LED ekran kurduk. Forklift ile ana kirişler kaldırıldı, zemin eğimi milimetrik
              ölçüldü, ankraj beton bloklarla desteklendi. Tonlarca yük altında tek titreşim
              yaşanmadı.
            </p>
            <Figure
              src={IMG_PAGODA}
              alt="Kurumsal etkinliklerde pagoda çadır kurulumu"
              caption="Kurumsal etkinliklerde pagoda ve çerçeve sistemler, truss ve LED ekran entegrasyonu için idealdir."
            />
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              2️⃣ Düğün, Nişan ve Özel Günler İçin
            </h3>
            <p className="text-slate-700">
              Estetik önemlidir. Ancak teknik altyapı sağlam değilse o estetik risk haline gelir.
              Tercih edilen sistemler: şeffaf tavanlı (clear-top) çadırlar, yüksek kubbeli yapılar
              ve 5–6 metre tavan yüksekliği.
            </p>
            <p className="text-slate-700">
              Bu sistemler avize, dekor ve ışık askılarına uygundur; hava sirkülasyonu sağlar.
            </p>
            <p className="text-sm text-slate-600">
              Güvenlik detayı: Bir düğünde ani fırtınada, önceden yaptığımız zemin sertlik analizi,
              rüzgar yönü hesabı, çapraz gergiler ve beton blok sabitlemeleri sayesinde gece
              sorunsuz geçti.
            </p>
            <Figure
              src={IMG_CLEAR}
              alt="Şeffaf tavanlı düğün çadırı kurulumu"
              caption="Şeffaf tavanlı çadırlar, dekor ve aydınlatma kurulumunda etkileyici bir atmosfer yaratır."
            />
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              3️⃣ Fuar, Sergi ve Festival Alanları İçin
            </h3>
            <p className="text-slate-700">
              Geniş alanlar ve yüksek insan trafiği için modüler sistemler şarttır. Tercih edilen:
              yüksek açıklıklı (high peak) sistemler, Röder tipi geniş modül çadırlar ve 100–1000
              m² arası yapılar.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Stand yerleşim planı (layout)</li>
              <li>• Yangın çıkış koridorları</li>
              <li>• Elektrik dağıtım planlaması</li>
              <li>• Forklift giriş-çıkış alanı</li>
            </ul>
            <p className="text-sm text-slate-600">
              Yanlış planlanan lojistik saatlerce gecikmeye yol açar. Bu yüzden ekiplerimiz
              kurulumdan önce detaylı teknik plan çizer.
            </p>
            <Figure
              src={IMG_DOME}
              alt="Festival ve sergi alanları için geniş modül çadır örneği"
              caption="Yüksek peak ve geniş açıklıklı çadırlar, yoğun insan trafiğini rahat yönetmenizi sağlar."
            />
          </div>
        </section>

        <section className="space-y-4 text-base leading-7 text-slate-700">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Profesyonel Çadır Kurulum Süreci Nasıl İlerler?
          </h2>
          <p>
            “Kurulum ne kadar sürer?” cevabı: zemine, hava durumuna ve alana bağlıdır.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Teknik Keşif (2–4 Hafta Önce)",
                items: [
                  "Alan ölçümü",
                  "Zemin analizi (çim, asfalt, toprak)",
                  "Rüzgar yönü ve hız değerlendirmesi",
                  "Lojistik giriş planlaması",
                ],
              },
              {
                title: "Kurulum Günü Operasyonu",
                items: [
                  "Forklift / vinç konumlandırma",
                  "Ana taşıyıcı kiriş montajı",
                  "Tente gerilimi",
                  "Yan panel ve kapı sistemleri",
                  "Çift kontrol ankraj",
                ],
              },
              {
                title: "Güvenlik Testi",
                items: [
                  "Rüzgar yükü kontrolü",
                  "Zemin tutuş testi",
                  "Bağlantı noktalarının son kontrolü",
                ],
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-slate-900">{step.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {step.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600">
            Büyük ölçekli işlerde 6–12 kişilik ekip, 1–2 forklift ve 1 tam gün operasyon
            gerekebilir.
          </p>
        </section>

        <section className="space-y-4 text-base leading-7 text-slate-700">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            2026 Çadır Kiralama Maliyetlerini Etkileyen Faktörler
          </h2>
          <p>Maliyetler metrekare, süre, mevsim, zemin ve ek ihtiyaçlara göre değişir.</p>
          <ul className="grid gap-2 text-sm text-slate-700 md:grid-cols-2">
            <li>• Metrekare büyüklüğü</li>
            <li>• Zemin koşulları</li>
            <li>• Ek ankraj ihtiyacı</li>
            <li>• Klima ve iklimlendirme</li>
            <li>• LED ekran / sahne entegrasyonu</li>
            <li>• Forklift / vinç gereksinimi</li>
            <li>• İstanbul dışı lojistik</li>
          </ul>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Teklif alırken mutlaka sorun:</p>
            <ul className="mt-3 space-y-2">
              <li>• Teknik keşif yapıldı mı?</li>
              <li>• Rüzgar yükü hesabı var mı?</li>
              <li>• İSG standartları uygulanıyor mu?</li>
              <li>• Sabitleme yöntemi nedir?</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4 text-base leading-7 text-slate-700">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            En Büyük Risk: Planlama Eksikliği
          </h2>
          <ul className="grid gap-2 text-sm text-slate-700 md:grid-cols-2">
            <li>• Yetersiz sabitleme</li>
            <li>• Yanlış zemin analizi</li>
            <li>• Forklift trafiği hesapsızlığı</li>
            <li>• Aşırı yük taşıma</li>
          </ul>
          <p>Profesyonel hizmet riski sıfıra yaklaştırır.</p>
        </section>

        <section className="space-y-6 text-base leading-7 text-slate-700">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Sonuç: Başarılı Organizasyonun Temeli Güvendir
          </h2>
          <p>
            Doğru çadır sadece yağmurdan korumaz; markanızın itibarını, misafirlerinizin
            güvenliğini ve emeğinizi taşır. Etkinlik günü herkes sahneye bakarken, arka planda
            forklift operatörü milimetrik manevra yapar, teknik ekip bağlantıları iki kez
            kontrol eder, rüzgar hesapları gözden geçirilir. Ve siz içiniz rahat izlersiniz.
          </p>
          <p className="font-semibold text-slate-900">
            Sahneva Organizasyon olarak biz, gökyüzünü güvenle mekâna indiriyoruz.
          </p>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Ücretsiz Teknik Keşif İçin Hemen İletişime Geçin
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Bir sonraki organizasyonunuzda risk almayın. Profesyonel çadır kiralama, sahne,
              LED, ses-ışık anahtar teslim çözümler için ekibimiz hazır.
            </p>
            <div className="mt-4 space-y-1 text-sm text-slate-700">
              <p>📞 +90 545 304 86 71</p>
              <p>✉️ info@sahneva.com</p>
              <p>🌐 www.sahneva.com</p>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              İstanbul Kağıthane&apos;den Türkiye geneline... Harika etkinlikler dileriz! 🌟
            </p>
          </div>
        </section>

        <BlogRelatedLinks
          services={[
            { href: "/cadir-kiralama", label: "Çadır Kiralama" },
            { href: "/sahne-kiralama", label: "Sahne Kiralama" },
            { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
          ]}
        />
      </article>
    </>
  );
}

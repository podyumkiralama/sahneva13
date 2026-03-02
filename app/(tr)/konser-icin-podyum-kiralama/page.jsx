// app/(tr)/konser-icin-podyum-kiralama/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";

/* ================== 1. AYARLAR & SABİTLER ================== */
export const revalidate = 1800;
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");
const ORIGIN = SITE_URL;
const ORGANIZATION_ID = `${SITE_URL}/#org`;
const WHATSAPP_URL = `https://wa.me/905453048671?text=${encodeURIComponent(
  "Merhaba, konser için podyum/sahne kiralama hakkında bilgi almak istiyorum."
)}`;

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== 2. İÇERİK VERİLERİ ================== */
const SERVICES = [
  {
    icon: "🎤",
    title: "Ana Sahne Platformları",
    description:
      "Headliner sanatçılar ve büyük prodüksiyonlar için yüksek taşıma kapasiteli, mühendislik onaylı geniş sahne platformları",
    features: ["Geniş alan kapasitesi", "Yüksek yük taşıma", "Modüler genişletme", "Mühendislik onaylı"],
  },
  {
    icon: "🥁",
    title: "Davul & Enstrüman Yükselticileri",
    description:
      "Optimum ses projeksiyonu ve sahne içi görüş açısı için özel ölçülerde tasarlanan platform çözümleri",
    features: ["Ses izolasyonu", "Özel ölçü tasarım", "Titreşim damperleri", "Güvenli bağlantı"],
  },
  {
    icon: "🎪",
    title: "Festival Sahne Sistemleri",
    description:
      "Çelik truss çatılı, brandalı ve hava koşullarına dayanıklı büyük ölçekli festival sahne altyapısı",
    features: ["Truss çatı sistemi", "Rüzgar yükü hesaplı", "Brandalı üst kaplama", "Açık hava onaylı"],
  },
  {
    icon: "🖥️",
    title: "LED Ekran & Işık Entegrasyonu",
    description:
      "Sahne planlamasına entegre LED ekran konfigürasyonu, ışık tasarımı ve truss taşıma sistemleri",
    features: ["LED video wall", "Işık tasarımı", "Truss entegrasyonu", "Teknik rider uyumu"],
  },
  {
    icon: "🎛️",
    title: "FOH & Teknik Kontrol Platformları",
    description:
      "Ses mühendisi ve teknik ekip için ergonomik FOH platformları ve sahne arkası operasyon alanları",
    features: ["FOH platform", "Teknik kontrol alanı", "Kablo yönetimi", "Sahne arkası erişim"],
  },
  {
    icon: "🔧",
    title: "Uçtan Uca Teknik Destek",
    description:
      "Keşif, projelendirme, teslimat, kurulum, prova/soundcheck takibi ve söküm dahil tam saha yönetimi",
    features: ["Mekân değerlendirmesi", "Teknik rider analizi", "Etkinlik günü destek", "Söküm hizmeti"],
  },
];

const USE_CASES = [
  { icon: "🎤", text: "Açık hava konserleri ve festivaller", desc: "On binlerce kişilik büyük ölçekli etkinlikler" },
  { icon: "🏟️", text: "Kapalı mekân konserleri", desc: "Akustik yapıya uygun sahne kurulumu" },
  { icon: "🎵", text: "DJ ve elektronik müzik performansları", desc: "DJ booth ve yükseltilmiş platform çözümleri" },
  { icon: "🎼", text: "Klasik müzik ve orkestra sahneleri", desc: "Geniş orkestra platform düzenlemeleri" },
  { icon: "🌟", text: "Yerel ve ulusal ölçekli konserler", desc: "Her ölçeğe uygun esnek çözümler" },
  { icon: "🎊", text: "Yılbaşı ve özel gece etkinlikleri", desc: "Premium sahne ve prodüksiyon desteği" },
];

const TECHNICAL_SPECS = [
  {
    title: "Güvenlik & Mühendislik",
    icon: "🛡️",
    description: "Mühendislik hesapları yapılmış, yük taşıma kapasitesi onaylı sistemler",
    features: ["Statik hesap raporları", "Rüzgar yükü analizi", "Zemin analizi", "TS EN standartları"],
  },
  {
    title: "Modüler Sahne Yapısı",
    icon: "🏗️",
    description: "İstenilen ölçü ve yükseklikte kurulabilen esnek modüler sahne sistemi",
    features: ["Her ölçeğe uyum", "Hızlı kurulum", "Dayanıklı malzeme", "Kaymaz yüzey kaplama"],
  },
  {
    title: "Açık Hava Sistemleri",
    icon: "🌤️",
    description: "Rüzgar yükü, zemin analizi ve sabitleme sistemleriyle açık hava güvenliği",
    features: ["Zemin sabitleme", "Brandalı çatı", "Hava koşulu dayanımı", "Güvenli yapı"],
  },
  {
    title: "Kapalı Alan Çözümleri",
    icon: "🏛️",
    description: "Tavan yüksekliği, akustik yapı ve truss kapasitesi hesaplanmış iç mekân kurulumu",
    features: ["Akustik planlama", "Tavan yükü hesabı", "Truss entegrasyonu", "Alan optimizasyonu"],
  },
  {
    title: "Ses & Teknik Altyapı",
    icon: "🔊",
    description: "Ses sistemi yerleşimi, kablo kanalları ve teknik rider'a uygun altyapı hazırlığı",
    features: ["Ses sistemi uyumu", "Kablo kanalları", "Teknik rider analizi", "Ses izolasyonu"],
  },
  {
    title: "Operasyonel Disiplin",
    icon: "⚡",
    description: "Prova ve soundcheck takvimine uyumlu kurulum, sahada anlık teknik müdahale",
    features: ["Takvim uyumu", "Prova desteği", "Soundcheck hazırlığı", "Anlık müdahale"],
  },
];

const FAQ_ITEMS = [
  {
    q: "Konser için podyum kiralama fiyatları nasıl belirlenir?",
    a: "Fiyat; sahne boyutu (m²), yükseklik, sistemin türü (modüler podyum / truss sahne), ek donanımlar (FOH platformu, yan sahneler, davul yükselticisi) ve etkinlik süresiyle şekillenir. Açık hava etkinliklerinde rüzgar yükü hesapları ve zemin sabitleme maliyeti de dahil edilir. Ücretsiz keşif ve özel fiyat teklifi için Sahneva ile iletişime geçebilirsiniz.",
  },
  {
    q: "Büyük açık hava festivalleri için sahne kurulumu ne kadar sürer?",
    a: "Büyük ölçekli festival sahneleri genellikle 1-3 gün öncesinden kurulmaya başlar. Kurulum süresi; sahne boyutu, truss çatı sistemi, LED entegrasyonu ve ekip büyüklüğüne göre de  işir. Sahneva ekibi, prova ve soundcheck takvimiyle uyumlu kurulum planlaması yapar.",
  },
  {
    q: "Sanatçının teknik rider'ı sahne planlamasını etkiler mi?",
    a: "Evet, teknik rider sahne planlamasının temel girdisidir. Rider; sahne boyutu, ses sistemi yerleşimi, ışık rig yüksekliği, LED ekran konfigürasyonu ve backstage düzenini doğrudan belirler. Sahneva, rider analizi yaparak teknik uyumlu kurulum sağlar.",
  },
  {
    q: "Kapalı mekân konserlerinde sahne kurulumu farklı mı?",
    a: "Evet. Kapalı mekânlarda tavan yüksekliği, mekânın taşıyıcı sistem kapasitesi ve akustik yapı özellikle önem taşır. Truss taşıma kapasitesi mekâna özel hesaplanır, ses sisteminin yansıma noktaları ve ışık tasarımı da buna göre planlanır.",
  },
  {
    q: "Konser sahnesine LED ekran ve ışık sistemi entegre edilebilir mi?",
    a: "Evet. Sahne planlaması; LED ekran konfigürasyonu, ışık tasarımı ve truss taşıma sistemi ile bütünleşik şekilde yapılır. Sahneva bu hizmetleri tek paket olarak sunarak teknik uyumluluğu ve kurulum hızını en üst düzeye çıkarır.",
  },
];

const RELATED_SERVICES = [
  { href: "/podyum-kiralama", title: "Podyum Kiralama", icon: "🎭", desc: "Modüler podyum sistemleri ve profesyonel kurulum" },
  { href: "/ses-isik-sistemleri", title: "Ses & Işık Sistemleri", icon: "🎵", desc: "Profesyonel ses ve ışık sistemleri kiralama" },
  { href: "/led-ekran-kiralama", title: "LED Ekran Kiralama", icon: "🖥️", desc: "Yüksek çözünürlüklü LED ekran ve video wall" },
  { href: "/cadir-kiralama", title: "Çadır Kiralama", icon: "🏕️", desc: "Açık hava etkinlikleri için çadır sistemleri" },
];

/* ================== 3. GÖRSEL VERİLERİ ================== */
// Görselleri /img/podyum/ altına ekleyin
const ARTICLE_BREAK_IMAGES = [
  { src: "/img/podyum/konser-1.webp", alt: "Konser için büyük sahne platformu kurulumu – Sahneva" },
  { src: "/img/podyum/konser-2.webp", alt: "Festival sahne altyapısı ve truss sistemi – Sahneva" },
  { src: "/img/podyum/konser-3.webp", alt: "Konser sahnesi LED ekran ve ışık entegrasyonu – Sahneva" },
];

const ARTICLE_BREAK_IMAGES_2 = [
  { src: "/img/podyum/konser-4.webp", alt: "Açık hava festivali sahne kurulumu – Sahneva" },
  { src: "/img/podyum/konser-5.webp", alt: "Kapalı mekân konser sahnesi kurulumu – Sahneva" },
  { src: "/img/podyum/konser-6.webp", alt: "Profesyonel konser sahne detayı – Sahneva" },
];

/* ================== 4. META DATA ================== */
export const metadata = {
  title: "Konser İçin Podyum Kiralama | Festival & Canlı Performans Sahne Çözümleri | Sahneva",
  description:
    "Konser ve festival organizasyonları için profesyonel sahne kurulum ve podyum kiralama hizmeti. Açık hava festivalleri, kapalı mekân konserleri ve canlı performanslar için mühendislik onaylı sahne sistemleri. İstanbul & Türkiye geneli.",
  alternates: { canonical: `${ORIGIN}/konser-icin-podyum-kiralama` },
  openGraph: {
    title: "Konser İçin Podyum Kiralama | Festival & Canlı Performans Sahne Çözümleri",
    description:
      "Açık hava festivalleri ve kapalı mekân konserlerinde profesyonel sahne kurulumu. Mühendislik onaylı, LED entegrasyonlu, teknik rider uyumlu sahne sistemleri.",
    url: `${ORIGIN}/konser-icin-podyum-kiralama`,
    type: "website",
    siteName: "Sahneva Organizasyon",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/podyum/konser-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon – Konser için profesyonel podyum kiralama ve festival sahne kurulumu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Konser İçin Podyum Kiralama | Festival Sahne Çözümleri | Sahneva",
    description:
      "Konser ve festival organizasyonları için mühendislik onaylı sahne sistemleri. Açık hava ve kapalı mekân kurulumları.",
    images: [`${ORIGIN}/img/podyum/konser-hero.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/* ================== 5. BİLEŞENLER ================== */

function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${ORIGIN}/konser-icin-podyum-kiralama#service`,
        name: "Konser İçin Podyum Kiralama",
        alternateName: "Festival Sahne Kurulumu",
        description: metadata.description,
        provider: {
          "@id": ORGANIZATION_ID,
          "@type": "Organization",
          name: "Sahneva Organizasyon",
          url: ORIGIN,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "İstanbul" },
          { "@type": "AdministrativeArea", name: "Türkiye" },
        ],
        serviceType: "Konser Sahne Kiralama",
        category: "Etkinlik Teknik Hizmetleri",
        image: `${ORIGIN}/img/podyum/konser-hero.webp`,
        offers: {
          "@type": "Offer",
          url: `${ORIGIN}/konser-icin-podyum-kiralama`,
          priceCurrency: "TRY",
          availability: "https://schema.org/InStock",
          description:
            "Konser ve festival için profesyonel sahne kurulumu. Ücretsiz keşif ve özel fiyat teklifi için iletişime geçin.",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Konser Sahne Hizmetleri",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.description,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${ORIGIN}/konser-icin-podyum-kiralama#webpage`,
        url: `${ORIGIN}/konser-icin-podyum-kiralama`,
        name: metadata.title,
        description: metadata.description,
        isPartOf: { "@type": "WebSite", url: ORIGIN },
        inLanguage: "tr-TR",
        datePublished: "2026-01-01",
        dateModified: "2026-03-02",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${ORIGIN}/img/podyum/konser-hero.webp`,
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${ORIGIN}/` },
            { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${ORIGIN}/hizmetler` },
            {
              "@type": "ListItem",
              position: 3,
              name: "Konser İçin Podyum Kiralama",
              item: `${ORIGIN}/konser-icin-podyum-kiralama`,
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function HeroSection() {
  return (
    <section className="relative bg-slate-950 text-white pt-20 pb-14 md:pb-16 lg:pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/img/podyum/konser-hero.webp"
          alt="Konser için profesyonel sahne kurulumu ve podyum kiralama – Sahneva"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
          quality={60}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/25 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-purple-900/20" />

        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-blue-500/12 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 px-4 py-2 mb-5">
              <span
                className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_0_6px_rgba(34,197,94,0.18)]"
                aria-hidden="true"
              />
              <span className="text-sm font-extrabold text-white">
                İstanbul & Türkiye Geneli • Mühendislik Onaylı Sahne Sistemleri
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 drop-shadow-[0_12px_35px_rgba(0,0,0,0.55)]">
              Konser İçin{" "}
              <span className="text-blue-200">Podyum Kiralama</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-3">
              Festival • Canlı Performans • Açık Hava • Kapalı Mekân Konserleri
            </p>

            <p className="text-base md:text-xl text-white/75 leading-relaxed mb-7 max-w-3xl mx-auto">
              Küçük ölçekli kapalı mekân etkinliklerinden on binlerce kişilik açık hava
              festivallerine — her ölçeğe uygun{" "}
              <span className="font-semibold text-white">mühendislik onaylı sahne çözümleri</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-9">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition"
              >
                <span className="text-xl mr-2">💬</span> Ücretsiz Keşif & Teklif
              </Link>

              <Link
                href="#hizmetler"
                className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl border-2 border-white/40 text-white bg-white/20 hover:bg-white/30 backdrop-blur-xl transition shadow-lg"
              >
                <span className="text-xl mr-2">🎤</span> Hizmetlerimiz
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: "⭐", value: "4.8/5", label: "200+ Değerlendirme" },
                { icon: "🏆", value: "600+", label: "Başarılı Etkinlik" },
                { icon: "🌍", value: "TR Geneli", label: "Hizmet Alanı" },
                { icon: "🛡️", value: "Mühendislik", label: "Onaylı Sistemler" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/12 px-4 py-4 text-center"
                >
                  <div className="text-2xl mb-1" aria-hidden="true">
                    {s.icon}
                  </div>
                  <div className="text-xl font-black">{s.value}</div>
                  <div className="text-sm text-white/70 font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <span className="sr-only">Konser İçin Podyum Kiralama - Sahneva Organizasyon</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 h-12 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="hizmetler"
      className="py-20 bg-gradient-to-b from-white to-blue-50/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Konser Sahne{" "}
            <span className="text-blue-700">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Teknik rider analizi, mekân değerlendirmesi, sahne kurulumu ve etkinlik günü teknik destek
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl p-8 transition-all duration-500 h-full flex flex-col"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
          >
            <span className="text-xl mr-3">📞</span> Konser Sahneniz İçin Teklif Alın
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArticlesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Konser Sahne{" "}
            <span className="text-blue-700">Rehberi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Konser ve festival organizasyonlarında başarılı sahne kurulumu için teknik bilgiler
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ANA MAKALE */}
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white p-8 md:p-10 relative">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                  🎤 Konser & Festival
                </span>
                <span className="bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                  🛡️ Mühendislik Onaylı
                </span>
                <span className="bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                  🎯 Teknik Rider Uyumlu
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                Konser İçin Podyum Kiralama: Sahneyi Performansa Dönüştüren Altyapı
              </h3>
              <p className="text-blue-100 mt-4 text-lg md:text-xl leading-relaxed">
                Mühendislik hesapları, LED entegrasyonu, ses sistemi yerleşimi ve uçtan uca teknik destek
              </p>
            </header>
            <div className="p-8 md:p-10 prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">

              <h4 className="flex items-center gap-3">
                <span className="inline-flex bg-blue-100 text-blue-600 rounded-2xl p-2">🎤</span>{" "}
                Konser Sahnesi: Sadece Bir Platform Değil
              </h4>
              <p>
                Konser ve festival organizasyonlarında sahne, yalnızca sanatçının durduğu bir platform değil;
                ışık, ses, LED ekran, sahne arkası operasyonu ve izleyici deneyiminin birleştiği ana merkezdir.{" "}
                <strong>Sahneva</strong> olarak konser için podyum kiralama ve festival sahne kurulum hizmetlerimizi;
                küçük ölçekli kapalı mekân etkinliklerinden on binlerce kişilik açık hava organizasyonlarına
                kadar her ölçeğe uygun şekilde planlıyor ve uyguluyoruz.
              </p>

              <div className="not-prose mt-8 grid gap-4 md:grid-cols-3">
                {ARTICLE_BREAK_IMAGES.map((img) => (
                  <figure key={img.src} className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-md">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </figure>
                ))}
              </div>

              <h4 className="flex items-center gap-3 mt-10">
                <span className="inline-flex bg-purple-100 text-purple-600 rounded-2xl p-2">🏗️</span>{" "}
                Her Performans İçin Profesyonel Sahne Çözümleri
              </h4>
              <p>
                İster yerel bir konser, ister büyük ölçekli bir müzik festivali düzenliyor olun; ihtiyaca göre
                ölçeklenebilir sahne sistemleri sunuyoruz. Sahne sistemlerimiz dayanıklılık, stabilite ve modüler
                yapı esas alınarak tasarlanır.
              </p>
              <ul>
                <li><strong>Açık hava organizasyonlarında:</strong> rüzgâr yükü hesapları, zemin analizi ve sabitleme sistemleri titizlikle planlanır</li>
                <li><strong>Kapalı alan konserlerinde:</strong> tavan yüksekliği, akustik yapı ve truss taşıma kapasitesi dikkate alınarak kurulum yapılır</li>
                <li><strong>Ana sahne platformları:</strong> headliner sanatçılar için geniş ve yüksek taşıma kapasiteli yapılar</li>
                <li><strong>Davul yükselticileri:</strong> optimum ses projeksiyonu için özel ölçülerde tasarım</li>
              </ul>

              <aside className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-5">
                <h5 className="font-black text-blue-700 text-lg mb-2">💡 Teknik Rider Entegrasyonu</h5>
                <p className="mb-0">
                  Sanatçının teknik rider&apos;ı, ses sistemi yerleşimi, ışık tasarımı ve LED entegrasyonu sahne
                  planlamasının ayrılmaz bir parçasıdır. Sahneva, rider analizini kurulumdan önce tamamlayarak
                  teknik uyumsuzlukları sıfıra indirir.
                </p>
              </aside>

              <div className="not-prose mt-10 grid gap-4 md:grid-cols-3">
                {ARTICLE_BREAK_IMAGES_2.map((img) => (
                  <figure key={img.src} className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-md">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </figure>
                ))}
              </div>

              <h4 className="mt-10 flex items-center gap-3">
                <span className="inline-flex bg-green-100 text-green-600 rounded-2xl p-2">🚀</span>{" "}
                Uçtan Uca Sahne Hizmeti ve Teknik Destek
              </h4>
              <p>
                Sahneva ekibi; keşif, projelendirme, teslimat, kurulum ve söküm dahil olmak üzere tüm süreci
                yönetir. Organizasyon öncesinde mekân değerlendirmesi yaparak ideal sahne ölçülerini ve yerleşim
                planını belirliyoruz.
              </p>
              <ul>
                <li><strong>Güvenlik ve zamanlama:</strong> iş güvenliği standartları ve mühendislik hesapları esas alınır</li>
                <li><strong>Prova takibi:</strong> kurulum süreci, prova ve soundcheck takvimiyle uyumlu ilerler</li>
                <li><strong>Etkinlik günü destek:</strong> sahada deneyimli teknik ekip, olası ihtiyaçlara anında müdahale eder</li>
              </ul>

              <aside className="mt-10 rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-5">
                <h5 className="font-black text-yellow-700 text-lg mb-2 flex items-center gap-2">
                  <span aria-hidden="true">💎</span> Neden Sahneva?
                </h5>
                <p className="mb-0 text-yellow-800">
                  <strong>8+ yıllık deneyim, 600+ başarılı etkinlik</strong> ve Türkiye geneli hizmet ile konser
                  ve festival sahne kurulumlarında güvenilir çözüm ortağınız. Amacımız yalnızca bir sahne kurmak
                  değil; sanatçının performansını güçlendiren ve izleyiciye unutulmaz bir deneyim yaşatan bir
                  prodüksiyon altyapısı oluşturmaktır.
                </p>
              </aside>
            </div>
          </article>

          {/* MAKALE 2 */}
          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black leading-tight">
                Konser & Festival Sahnelerimiz Neleri Kapsar?
              </h3>
              <p className="text-blue-100 mt-2 text-lg">
                Ana sahneden FOH platformuna kadar eksiksiz sahne altyapısı
              </p>
            </header>
            <div className="p-6 md:p-8 prose prose-lg max-w-none prose-p:text-gray-600">
              <p>
                Ana sahneler, headliner sanatçılar ve ana performanslar için geniş ve yüksek taşıma
                kapasiteli platformlardan oluşur.
              </p>
              <ul>
                <li>Gruplar, DJ performansları ve dans ekipleri için yükseltilmiş platformlar</li>
                <li>Davul yükselticileri — optimum ses projeksiyonu için özel ölçü</li>
                <li>Sahne genişletme modülleri — büyük ekipler ve kalabalık orkestralar için</li>
                <li>Yan kuleler ve teknik kontrol alanları</li>
                <li>FOH platformları — ses mühendisi için ergonomik çalışma alanı</li>
              </ul>
              <p>
                Tüm sistemlerimiz; kaymaz yüzey kaplamaları, güvenli bağlantı noktaları ve yüksek
                taşıma değerlerine sahip modüler sahne elemanlarından oluşur.
              </p>
            </div>
          </article>

          {/* MAKALE 3 */}
          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black leading-tight">
                Özelleştirilebilir Festival Sahne Tasarımı
              </h3>
              <p className="text-blue-100 mt-2 text-lg">
                Sanatçının sahne şovuna özel, LED entegrasyonlu sahne planlaması
              </p>
            </header>
            <div className="p-6 md:p-8 prose prose-lg max-w-none prose-p:text-gray-600">
              <p>
                Her konser ve festivalin dinamiği farklıdır. Bu nedenle sahne tasarımını; sanatçının
                sahne şovu, LED ekran konfigürasyonu, ışık tasarımı ve ses sistemi yerleşimi ile
                entegre şekilde projelendiriyoruz.
              </p>
              <h4 className="flex items-center gap-2 text-lg font-bold">
                <span className="inline-flex bg-purple-100 text-purple-600 rounded-xl p-2">🎪</span>{" "}
                Büyük Ölçekli Festivaller
              </h4>
              <p>
                Çelik truss çatılı sahne sistemleri, brandalı üst kaplama ve hava koşullarına
                dayanıklı yapı elemanları kullanılır.
              </p>
              <h4 className="flex items-center gap-2 text-lg font-bold mt-4">
                <span className="inline-flex bg-blue-100 text-blue-600 rounded-xl p-2">🏛️</span>{" "}
                Kapalı Mekân Konserleri
              </h4>
              <p>
                Tavan yüksekliği, akustik yapı ve truss taşıma kapasitesi dikkate alınarak kurulum
                yapılır. Yan kuleler, FOH platformları ve teknik kontrol alanları planlamaya dahil edilir.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function TechnicalSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Teknik{" "}
            <span className="text-blue-700">Altyapımız</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mühendislik hesaplı, güvenlik standartlarına uygun profesyonel konser sahne sistemleri
          </p>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {TECHNICAL_SPECS.map((item, idx) => (
            <li key={idx} className="h-full">
              <article className="group bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <h3 className="font-bold text-2xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors flex items-center gap-3">
                  <span className="text-3xl">{item.icon}</span> {item.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                  {item.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "600+", label: "Başarılı Etkinlik", icon: "🎪" },
    { value: "8+", label: "Yıl Deneyim", icon: "⭐" },
    { value: "TR Geneli", label: "Hizmet Alanı", icon: "🌍" },
    { value: "7/24", label: "Teknik Destek", icon: "🛡️" },
  ];
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <article
              key={stat.label}
              className="text-center group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105"
              aria-labelledby={`konser-stat-${idx}-value`}
              aria-describedby={`konser-stat-${idx}-label`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                {stat.icon}
              </div>
              <h3
                id={`konser-stat-${idx}-value`}
                className="text-4xl md:text-5xl font-black mb-1 text-white drop-shadow-lg"
              >
                {stat.value}
              </h3>
              <p id={`konser-stat-${idx}-label`} className="text-blue-100 text-lg font-semibold mb-0">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/95">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Konser{" "}
            <span className="text-blue-300">Türleri</span>
          </h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            Sahne kurulumu yaptığımız başlıca konser ve festival türleri
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full" />
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {USE_CASES.map((uc, idx) => (
            <li
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 group hover:scale-105"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="text-3xl bg-white/20 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                  {uc.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors">
                    {uc.text}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-center mt-12">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
          >
            <span className="text-xl mr-3">💬</span> Konseriniz İçin Özel Çözüm Alın
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Sık Sorulan{" "}
            <span className="text-blue-700">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Konser için podyum kiralama ve sahne kurulumu hakkında merak edilenler
          </p>
        </div>

        <div className="space-y-6">
          {FAQ_ITEMS.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-500 open:bg-blue-50 open:border-blue-200 border-2 border-transparent open:border"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between text-xl font-bold text-gray-900">
                <span className="pr-4">{faq.q}</span>
                <span className="ml-4 transition-transform duration-500 group-open:rotate-180 text-blue-600 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  ⌄
                </span>
              </summary>
              <div className="mt-6 text-gray-700 leading-relaxed text-lg pl-4 border-l-4 border-blue-500">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla sorunuz mu var? Uzman ekibimiz sizi arayıp bilgilendirsin.
          </p>
          <Link
            href="/sss"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
          >
            <span className="text-xl mr-3">📚</span>
            <span className="text-lg">Tüm SSS&apos;yi Görüntüle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function RelatedServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-100/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Tamamlayıcı{" "}
            <span className="text-blue-700">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Konser sahnenizi tamamlayacak diğer profesyonel etkinlik çözümlerimiz
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {RELATED_SERVICES.map((service) => (
            <li key={service.href} className="h-full">
              <Link
                href={service.href}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 text-center h-full flex flex-col"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-4 flex-grow">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Konserinizi Güçlü Bir Sahneyle Başlatın
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Etkinliğiniz için en uygun sahne sistemini sunalım. Ücretsiz keşif, profesyonel
              danışmanlık ve rekabetçi fiyat garantisi ile hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
              >
                <span className="text-xl mr-3">📞</span> Hemen Teklif Al
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300"
              >
                <span className="text-xl mr-3">💬</span> WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const baseUrl = SITE_URL;
  const canonical = `${baseUrl}/konser-icin-podyum-kiralama`;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Hizmetler", url: `${baseUrl}/hizmetler` },
    { name: "Konser İçin Podyum Kiralama", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <StructuredData />
      <HeroSection />
      <ServicesSection />
      <ArticlesSection />
      <TechnicalSection />
      <StatsSection />
      <UseCasesSection />
      <FAQSection />
      <RelatedServicesSection />
      <ServiceBlogLinks
        links={[
          { href: "/blog/etkinlige-gore-podyum-tercihi", label: "Etkinliğe Göre Podyum Tercihi" },
          { href: "/blog/neden-podyum-sahne-tercih-edilir", label: "Neden Podyum Sahne Tercih Edilir?" },
          { href: "/blog/sahne-neden-hep-yuksektir-2500-yillik-bir-sir", label: "Sahne Neden Hep Yüksektir?" },
        ]}
      />
      <CTASection />
    </>
  );
}

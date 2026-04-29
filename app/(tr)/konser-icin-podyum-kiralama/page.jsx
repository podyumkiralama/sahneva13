// app/(tr)/konser-icin-podyum-kiralama/page.jsx
import Image from "next/image";
import Link from "next/link";
import { buildFaqSchema } from "@/lib/structuredData/faq";
import { buildImageGallerySchema } from "@/lib/structuredData/imageGallery";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import ServiceGuideShowcase from "@/components/seo/ServiceGuideShowcase";
import JsonLd from "@/components/seo/JsonLd";

/* ================== 1. AYARLAR & SABİTLER ================== */
export const revalidate = 1800;
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");
const ORIGIN = SITE_URL;
const ORGANIZATION_ID = `${SITE_URL}/#org`;
const WHATSAPP_URL = `https://wa.me/905453048671?text=${encodeURIComponent(
  "Merhaba, konser için podyum kiralama hakkında teklif istiyorum."
)}`;

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== 2. İÇERİK VERİLERİ ================== */
const CONCERT_GALLERY_IMAGES = [
  {
    src: "/img/podyum/konser-1.webp",
    alt: "Konser için podyum ve sahne kurulumu",
  },
  {
    src: "/img/podyum/konser-2.webp",
    alt: "Festival sahnesi podyum ve teknik prodüksiyon alanı",
  },
  {
    src: "/img/podyum/konser-3.webp",
    alt: "Açık hava konseri için modüler podyum kurulumu",
  },
  {
    src: "/img/podyum/konser-4.webp",
    alt: "Konser podyumu, ses ışık ve LED entegrasyonu",
  },
];

const SERVICES = [
  {
    icon: "🎤",
    title: "Ana Sahne Platformları",
    description:
      "Headliner sanatçılar ve ana performanslar için yüksek taşıma kapasiteli ana sahne sistemleri",
    features: [
      "Geniş platform alanı",
      "Yüksek yük kapasitesi",
      "Çelik truss entegrasyonu",
      "Modüler genişletme",
    ],
  },
  {
    icon: "🎸",
    title: "Yan Sahne & Uzatmalar",
    description:
      "Dans ekipleri, arka vokal ve enstrümanlar için ana sahneye entegre yan platform çözümleri",
    features: [
      "Ana sahne entegrasyonu",
      "Esnek ölçülendirme",
      "Güvenli geçiş yolları",
      "Teknik erişim",
    ],
  },
  {
    icon: "🥁",
    title: "Davul Yükselticisi",
    description:
      "Optimum ses projeksiyonu ve sahne içi görüş açısı için özel tasarım davul platformları",
    features: [
      "Özel ölçülendirme",
      "Titreşim yönetimi",
      "Ses izolasyonu",
      "Güvenli kablo kanalları",
    ],
  },
  {
    icon: "🎚️",
    title: "FOH & Teknik Platformlar",
    description:
      "Ses mühendisi ve teknik ekip için sahne önü ve kontrol alanı platformları",
    features: [
      "FOH mixer platformu",
      "Teknik kontrol alanı",
      "Kablo yönetimi",
      "Ergonomik tasarım",
    ],
  },
  {
    icon: "💡",
    title: "LED & Işık Entegrasyonu",
    description:
      "LED ekran taşıyıcı yapılar, ışık truss sistemleri ve sahne aydınlatma altyapısı",
    features: [
      "LED ekran desteği",
      "Truss sistemleri",
      "Işık bar entegrasyonu",
      "Ağır yük kapasitesi",
    ],
  },
  {
    icon: "🔧",
    title: "Teknik Destek & Saha Yönetimi",
    description:
      "Kurulum, prova, soundcheck ve etkinlik boyunca kesintisiz teknik destek",
    features: [
      "Rider uyumlu kurulum",
      "Soundcheck desteği",
      "Etkinlik günü destek",
      "Söküm hizmeti",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "Konser için podyum kiralama fiyatları nasıl belirlenir?",
    a: "Konser sahnesi fiyatlandırması; sahne alanı (m²), yükseklik, LED/truss entegrasyonu, ekstra platformlar (FOH, davul, yan sahne) ve kurulum süresi temel alınarak belirlenir. Türkiye geneli ve İstanbul dışı projeler için özel nakliye bedeli uygulanır.",
  },
  {
    q: "Kaç günlük organizasyonlar için hizmet veriyorsunuz?",
    a: "Tek günlük konserlerden çok günlü festivallere kadar hizmet sunuyoruz. Multi-day festivallerde sahne yapısı kurulur ve etkinlik süresince yerinde teknik destek sağlanır.",
  },
  {
    q: "Teknik rider'a uygun sahne kurulumu yapıyor musunuz?",
    a: "Evet. Sanatçının teknik rider belgesi incelenerek sahne ölçüleri, yükseklikleri, kablo geçişleri ve teknik platform konumları buna göre planlanır.",
  },
  {
    q: "Açık hava konserlerinde güvenlik nasıl sağlanıyor?",
    a: "Açık hava organizasyonlarında rüzgâr yükü hesaplamaları, zemin analizi ve sabitleme sistemleri mühendislik standartlarına uygun olarak planlanır. Tüm bağlantı noktaları ve taşıma kapasiteleri belgelenmiş sistemler kullanılır.",
  },
];

const RELATED_SERVICES = [
  {
    href: "/podyum-kiralama",
    title: "Podyum Kiralama",
    icon: "🎭",
    desc: "Tüm etkinlik türleri için modüler podyum çözümleri",
  },
  {
    href: "/defile-podyum-kiralama",
    title: "Defile Podyum Kiralama",
    icon: "👗",
    desc: "Moda defilesi ve marka lansmanı podyumları",
  },
  {
    href: "/led-ekran-kiralama",
    title: "LED Ekran Kiralama",
    icon: "🖥️",
    desc: "Yüksek çözünürlüklü LED ekran ve video wall çözümleri",
  },
  {
    href: "/ses-isik-sistemleri",
    title: "Ses & Işık Sistemleri",
    icon: "🎵",
    desc: "Profesyonel ses ve ışık sistemleri kiralama",
  },
];

const GUIDE_CONTENTS = [
  { href: "#konser-sahne-olcusu", label: "Konser podyum olcusu nasil belirlenir?" },
  { href: "#konser-rider", label: "Teknik rider ve platform ihtiyaci" },
  { href: "#konser-guvenlik", label: "Acik alan guvenligi ve zemin" },
  { href: "#konser-fiyat", label: "Konser podyum fiyat kalemleri" },
];

const GUIDE_CHAPTERS = [
  {
    id: "konser-sahne-olcusu",
    title: "Sahne olcusu sanatci, ekipman ve seyirci alanina gore netlesir",
    body:
      "Konser podyumu planlanirken yalnizca sahne genisligi degil; davul riseri, yan platform, ekip gecisleri, LED ekran ve teknik ekip alanlari birlikte hesaplanir.",
    points: [
      "Ana performans alani ve sanatci sayisi",
      "Davul, DJ veya orkestra icin yukseltilmis platform",
      "Yan sahne, merdiven, rampa ve teknik gecisler",
      "LED ekran ve truss entegrasyonu",
    ],
  },
  {
    id: "konser-rider",
    title: "Teknik rider sahne planinin kisa yoludur",
    body:
      "Sanatci rider'i varsa sahne olcusu, enerji, FOH, monitor, backline ve riser ihtiyaclari daha hizli netlesir. Rider yoksa etkinlik turune gore pratik bir teknik brief hazirlanir.",
    points: [
      "FOH ve monitor platformlari",
      "Kablo kanallari ve sahne arkasi gecisleri",
      "Soundcheck ve prova saatleri",
      "Teknik ekip icin operasyon alani",
    ],
  },
  {
    id: "konser-guvenlik",
    title: "Acik hava kurulumunda zemin ve hava kosullari kritik rol oynar",
    body:
      "Festival veya acik alan konserlerinde yukseklik, zemin egimi, ruzgar, bariyer ve seyirci yogunlugu sahne guvenligini dogrudan etkiler.",
    points: [
      "Zemin kot farki ve ayak dengeleme",
      "Ruzgar ve ekipman sabitleme planı",
      "Seyirci bariyeri ve sahne on guvenligi",
      "Kurulum-sokum icin arac giris guzergahi",
    ],
  },
  {
    id: "konser-fiyat",
    title: "Fiyat; ana platformdan teknik destek suresine kadar hesaplanir",
    body:
      "Konser podyum kiralama teklifinde metrekare, yukseklik, ek platformlar, nakliye, kurulum ekibi, etkinlik gun sayisi ve sahada teknik destek ihtiyaci birlikte degerlendirilir.",
    points: [
      "m2, yukseklik ve kaplama ihtiyaci",
      "FOH, davul riseri ve yan platformlar",
      "LED/truss/ses-isik entegrasyonu",
      "Sehir, nakliye ve ekip konaklama ihtimali",
    ],
  },
];

const GUIDE_CHECKLIST = [
  "Sanatci rider'i veya sahne olcu talebi",
  "Etkinlik tarihi, sehir ve mekan tipi",
  "Tahmini seyirci sayisi ve sahne konumu",
  "LED ekran, truss, ses ve isik ihtiyaci",
  "FOH, davul riseri, yan sahne ve merdiven ihtiyaci",
  "Kurulum, soundcheck ve sokum saatleri",
];

/* ================== 3. META DATA ================== */
export const metadata = {
  title:
    "Konser İçin Podyum Kiralama | Festival Sahne Çözümleri",
  description:
    "Konser & festival podyum kiralama: ana platform, yan kule, FOH, uçtan uca teknik destek. Profesyonel kurulum, İstanbul ve Türkiye geneli hızlı hizmet.",
  alternates: buildLanguageAlternates({
    tr: "/konser-icin-podyum-kiralama",
    en: "/en/concert-podium-rental",
    xDefault: "/en/concert-podium-rental",
  }),
  openGraph: {
    title: "Konser İçin Podyum Kiralama | Sahneva",
    description:
      "Festival ve konser sahneleri için modüler sahne sistemleri, LED entegrasyonu ve profesyonel kurulum.",
    url: `${ORIGIN}/konser-icin-podyum-kiralama`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/podyum/konser-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Konser için profesyonel sahne ve podyum kiralama – Sahneva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Konser İçin Podyum Kiralama | Festival Sahne Çözümleri | Sahneva",
    description:
      "Konser ve festival organizasyonları için profesyonel sahne kurulumu.",
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

/* ================== 4. BİLEŞENLER ================== */

// --- JSON-LD ---
function StructuredData() {
  const pageUrl = `${ORIGIN}/konser-icin-podyum-kiralama`;
  const serviceId = `${pageUrl}#service`;
  const webPageId = `${pageUrl}#webpage`;
  const gallerySchema = buildImageGallerySchema({
    images: CONCERT_GALLERY_IMAGES,
    origin: ORIGIN,
    pageUrl,
    serviceId,
    webPageId,
    name: "Konser podyum kiralama galeri görselleri",
  });

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Konser İçin Podyum Kiralama",
        description: metadata.description,
        url: pageUrl,
        image: gallerySchema.imageUrls,
        mainEntityOfPage: { "@id": webPageId },
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "AdministrativeArea", name: "Türkiye" },
        serviceType: "Konser Sahne Kurulumu",
      },
      {
        "@type": "WebPage",
        "@id": webPageId,
        url: pageUrl,
        name: metadata.title,
        description: metadata.description,
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${ORIGIN}/#website` },
        mainEntity: { "@id": serviceId },
        image: [`${ORIGIN}/img/podyum/konser-hero.webp`, ...gallerySchema.imageUrls],
        hasPart: [
          ...(gallerySchema.galleryNode ? [{ "@id": gallerySchema.galleryId }] : []),
          ...gallerySchema.imageNodes.map((image) => ({ "@id": image["@id"] })),
        ],
      },
      ...(gallerySchema.galleryNode ? [gallerySchema.galleryNode] : []),
      ...gallerySchema.imageNodes,
      buildFaqSchema(FAQ_ITEMS.map((f) => ({ question: f.q, answer: f.a }))),
    ],
  };
  return <JsonLd data={schema} />;
}

// --- HERO ---
function HeroSection() {
  const stats = [
    { icon: "🎤", value: "500+", label: "Konser & Festival" },
    { icon: "🇹🇷", value: "Türkiye Geneli", label: "Hizmet Alanı" },
    { icon: "⏱️", value: "8+ Yıl", label: "Sahne Deneyimi" },
    { icon: "🛡️", value: "Mühendislik", label: "Onaylı Sistemler" },
  ];

  return (
    <section
      className="relative min-h-[80vh] 2xl:min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b0f1a] via-blue-950 to-purple-950 pt-16 lg:pt-20"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/img/podyum/konser-hero.webp"
          alt="Konser için profesyonel sahne ve podyum kurulumu – Sahneva"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover opacity-40"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/70 to-purple-900/75"
        aria-hidden="true"
      />
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-5 py-2 text-sm font-semibold text-blue-200 mb-8">
            <span aria-hidden="true">🎤</span> Konser & Festival Sahne Uzmanı
          </div>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6 tracking-tight"
          >
            Konser İçin{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Podyum Kiralama
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
            Festival ve canlı performans sahne çözümleri — küçük ölçekli kapalı
            mekân etkinliklerinden on binlerce kişilik açık hava organizasyonlarına
            kadar profesyonel kurulum.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span className="text-xl mr-2" aria-hidden="true">💬</span> Hemen Teklif Al
            </Link>
            <Link
              href="#hizmetler"
              className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl border-2 border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-xl transition-all duration-300 shadow-lg"
            >
              <span className="text-xl mr-2" aria-hidden="true">🎪</span> Hizmetlerimiz
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/12 px-4 py-4 text-center"
              >
                <div className="text-2xl mb-1" aria-hidden="true">{s.icon}</div>
                <div className="text-xl font-black">{s.value}</div>
                <div className="text-sm text-white/70 font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
          <span className="sr-only">Konser İçin Podyum Kiralama - Sahneva Organizasyon</span>
        </div>
      </div>
      <div className="relative z-10 h-12 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}

// --- HİZMETLER ---
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
            Teknik rider analizi, mekân değerlendirmesi, sahne kurulumu ve
            etkinlik günü kesintisiz teknik destek
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl p-8 transition-all duration-500 h-full flex flex-col"
            >
              <div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
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
            <span className="text-xl mr-3" aria-hidden="true">📞</span> Konser
            Sahneniz İçin Teklif Alın
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- MAKALE (tam metin + sağlı-sollu görsel dağılımı) ---
function ArticlesSection() {
  return (
    <section id="makale" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Konser Sahne{" "}
            <span className="text-blue-700">Rehberi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Konser ve festival sahne kurulumu hakkında uzman görüşleri ve teknik
            bilgiler
          </p>
        </div>

        {/* ── Giriş paragrafı + Görsel 1 (sağda) ── */}
        <div className="flex flex-col lg:flex-row gap-10 items-start mb-16">
          <div className="flex-1 prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              Konser ve festival organizasyonlarında sahne, yalnızca sanatçının
              durduğu bir platform değil; ışık, ses, LED ekran, sahne arkası
              operasyonu ve izleyici deneyiminin birleştiği ana merkezdir.
              Sahneva olarak konser için podyum kiralama ve festival sahne
              kurulum hizmetlerimizi; küçük ölçekli kapalı mekân
              etkinliklerinden on binlerce kişilik açık hava organizasyonlarına
              kadar her ölçeğe uygun şekilde planlıyor ve uyguluyoruz.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              İstanbul başta olmak üzere Türkiye genelinde gerçekleştirdiğimiz
              konser sahne kurulumlarında; mühendislik hesapları yapılmış,
              yüksek taşıma kapasiteli ve güvenlik standartlarına uygun
              sistemler kullanıyoruz. Sanatçının teknik rider&#39;ı, ses sistemi
              yerleşimi, ışık tasarımı ve LED entegrasyonu sahne planlamasının
              ayrılmaz bir parçasıdır.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Konser dışındaki genel modüler platform ihtiyaçları için{" "}
              <Link className="font-semibold text-blue-700 underline underline-offset-4" href="/podyum-kiralama">
                podyum kiralama
              </Link>{" "}
              ana hizmet sayfamızdaki ölçü, kurulum ve teknik destek kapsamını
              inceleyebilirsiniz.
            </p>
          </div>
          <div className="w-full lg:w-[420px] shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src="/img/podyum/konser-1.webp"
              alt="Konser sahne kurulumu – ana platform ve truss sistemi"
              width={840}
              height={560}
              className="w-full h-auto object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <p className="text-sm text-gray-500 text-center py-3 px-4 bg-gray-50">
              Ana sahne platformu ve çelik truss sistemi kurulumu
            </p>
          </div>
        </div>

        {/* ── Görsel 2 (solda) + Her Performans İçin Profesyonel Sahne ── */}
        <div className="flex flex-col lg:flex-row-reverse gap-10 items-start mb-16">
          <div className="flex-1 prose prose-lg max-w-none">
            <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <span className="inline-flex bg-blue-100 text-blue-600 rounded-2xl p-2 text-xl" aria-hidden="true">🎤</span>
              Her Performans İçin Profesyonel Sahne Çözümleri
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              İster yerel bir konser, ister büyük ölçekli bir müzik festivali
              düzenliyor olun; ihtiyaca göre ölçeklenebilir sahne sistemleri
              sunuyoruz. Sahne sistemlerimiz dayanıklılık, stabilite ve modüler
              yapı esas alınarak tasarlanır. Açık hava organizasyonlarında
              rüzgâr yükü hesapları, zemin analizi ve sabitleme sistemleri
              titizlikle planlanır. Kapalı alan konserlerinde ise tavan
              yüksekliği, akustik yapı ve truss taşıma kapasitesi dikkate
              alınarak kurulum yapılır.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Konser için podyum kiralama hizmetimiz kapsamında; ana sahne
              platformları, yan sahne uzatmaları, teknik platformlar ve
              sanatçıya özel alan çözümleri sunuyoruz. Büyük prodüksiyonlarda
              sahne genişletmeleri sayesinde kalabalık orkestralar, dans
              ekipleri veya çoklu performans düzenleri rahatlıkla
              konumlandırılabilir.
            </p>
          </div>
          <div className="w-full lg:w-[420px] shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src="/img/podyum/konser-2.webp"
              alt="Festival sahnesi geniş alan kurulumu – modüler platform sistemi"
              width={840}
              height={560}
              className="w-full h-auto object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <p className="text-sm text-gray-500 text-center py-3 px-4 bg-gray-50">
              Büyük ölçekli festival sahnesi — modüler genişletme sistemi
            </p>
          </div>
        </div>

        {/* ── Konser & Festival Sahnelerimiz Neleri Kapsar? (bilgi kutusu tam genişlik) ── */}
        <aside className="rounded-3xl border-l-4 border-blue-500 bg-blue-50 p-8 md:p-10 mb-16 shadow-lg">
          <h3 className="text-2xl font-black text-blue-700 mb-5 flex items-center gap-3">
            <span aria-hidden="true">💡</span> Konser ve Festival Sahnelerimiz Neleri Kapsar?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Ana sahneler, headliner sanatçılar ve ana performanslar için geniş
              ve yüksek taşıma kapasiteli platformlardan oluşur. Gruplar, DJ
              performansları ve dans ekipleri için yükseltilmiş platform
              çözümleri sağlanır.
            </p>
            <p>
              Davul yükselticileri, optimum ses projeksiyonu ve sahne içi görüş
              açısı için özel ölçülerde tasarlanır. Daha büyük ekipler için
              sahne genişletme modülleri ile esnek alan yaratılır. Tüm
              sistemlerimiz; kaymaz yüzey kaplamaları, güvenli bağlantı
              noktaları ve yüksek taşıma değerlerine sahip modüler sahne
              elemanlarından oluşur.
            </p>
          </div>
        </aside>

        {/* ── Özelleştirilebilir Festival Sahne Tasarımı + Görsel 3 (sağda) ── */}
        <div className="flex flex-col lg:flex-row gap-10 items-start mb-16">
          <div className="flex-1 prose prose-lg max-w-none">
            <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <span className="inline-flex bg-purple-100 text-purple-600 rounded-2xl p-2 text-xl" aria-hidden="true">🎨</span>
              Özelleştirilebilir Festival Sahne Tasarımı
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Her konser ve festivalin dinamiği farklıdır. Bu nedenle sahne
              tasarımını; sanatçının sahne şovu, LED ekran konfigürasyonu, ışık
              tasarımı ve ses sistemi yerleşimi ile entegre şekilde
              projelendiriyoruz. İstenilen ölçü ve yükseklikte sahne kurulumu
              yapılabilir; yan kuleler, FOH platformları ve teknik kontrol
              alanları planlamaya dahil edilir.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Büyük ölçekli açık hava festivallerinde; çelik truss çatılı sahne
              sistemleri, brandalı üst kaplama ve hava koşullarına dayanıklı
              yapı elemanları kullanılır. Kurulum süreci, prova ve soundcheck
              takvimi ile uyumlu şekilde ilerler.
            </p>
          </div>
          <div className="w-full lg:w-[420px] shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src="/img/podyum/konser-3.webp"
              alt="Açık hava konser podyumu – LED ekran entegrasyonu ve truss sistemi"
              width={840}
              height={560}
              className="w-full h-auto object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <p className="text-sm text-gray-500 text-center py-3 px-4 bg-gray-50">
              Açık hava festival sahnesi — LED entegrasyonu ve truss çatı
            </p>
          </div>
        </div>

        {/* ── Görsel 4 (solda) + Uçtan Uca Sahne Hizmeti ── */}
        <div className="flex flex-col lg:flex-row-reverse gap-10 items-start mb-16">
          <div className="flex-1 prose prose-lg max-w-none">
            <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <span className="inline-flex bg-green-100 text-green-600 rounded-2xl p-2 text-xl" aria-hidden="true">🔧</span>
              Uçtan Uca Sahne Hizmeti ve Teknik Destek
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Sahneva ekibi; keşif, projelendirme, teslimat, kurulum ve söküm
              dahil olmak üzere tüm süreci yönetir. Organizasyon öncesinde mekân
              değerlendirmesi yaparak ideal sahne ölçülerini ve yerleşim planını
              belirliyoruz. Kurulum sürecinde deneyimli teknik ekibimiz, güvenli
              ve stabil bir yapı oluşturur.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Etkinlik boyunca yerinde teknik destek sağlanarak olası ihtiyaçlara
              anında müdahale edilir. Güvenlik, zamanlama ve operasyonel disiplin;
              konser ve festival organizasyonlarının en kritik unsurlarıdır. Bu
              nedenle tüm sahne kurulumlarımızda iş güvenliği standartları ve
              mühendislik hesapları esas alınır.
            </p>
          </div>
          <div className="w-full lg:w-[420px] shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src="/img/podyum/konser-4.webp"
              alt="Konser için davul yükselticisi ve teknik platform kurulumu – Sahneva"
              width={840}
              height={560}
              className="w-full h-auto object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <p className="text-sm text-gray-500 text-center py-3 px-4 bg-gray-50">
              Davul yükselticisi ve FOH teknik platform kurulumu
            </p>
          </div>
        </div>

        {/* ── Neden Sahneva? (vurgu kutusu + kapanış metni) ── */}
        <aside className="rounded-3xl border-l-4 border-yellow-400 bg-yellow-50 p-8 md:p-10 shadow-lg">
          <h3 className="text-2xl font-black text-yellow-700 mb-5 flex items-center gap-3">
            <span aria-hidden="true">💎</span> Konser İçin Podyum Kiralama Hizmetinde Neden Sahneva?
          </h3>
          <p className="text-yellow-800 text-lg leading-relaxed mb-4">
            Yüksek kaliteli ekipman, deneyimli teknik kadro ve büyük ölçekli
            organizasyon tecrübesi ile konser ve festival sahne kurulumlarında
            güvenilir bir çözüm ortağıyız. Amacımız yalnızca bir sahne kurmak
            değil; sanatçının performansını güçlendiren ve izleyiciye unutulmaz
            bir deneyim yaşatan bir prodüksiyon altyapısı oluşturmaktır.
          </p>
          <p className="text-yellow-800 text-lg leading-relaxed mb-6">
            Konser veya festival organizasyonunuz için profesyonel sahne kurulumu
            ve podyum kiralama hizmeti almak, teknik detayları birlikte planlamak
            ve size özel fiyat teklifi oluşturmak için Sahneva ile iletişime
            geçebilirsiniz. Etkinliğinizi güçlü bir sahneyle başlatın; izleyicilerin
            hafızasında yer edecek bir performans deneyimi yaratın.
          </p>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
          >
            <span className="text-xl mr-3" aria-hidden="true">💬</span> Ücretsiz
            Keşif & Teklif Alın
          </Link>
        </aside>
      </div>
    </section>
  );
}

// --- SSS ---
function FAQSection() {
  return (
    <section id="sss" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Sık Sorulan{" "}
            <span className="text-blue-700">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600">
            Konser ve festival sahne kiralama hakkında merak edilenler
          </p>
        </div>
        <dl className="space-y-6">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border-2 border-gray-100 bg-gray-50 p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <dt className="text-xl font-black text-gray-900 mb-3">
                {item.q}
              </dt>
              <dd className="text-gray-600 text-lg leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// --- İLGİLİ HİZMETLER ---
function RelatedServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            İlgili <span className="text-blue-700">Hizmetler</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Organizasyonunuzu tamamlayan diğer çözümlerimiz
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {RELATED_SERVICES.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              className="group bg-white rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-xl p-7 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform" aria-hidden="true">
                {s.icon}
              </div>
              <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== 5. SAYFA ================== */
export default function KonserIcinPodyumKiralamaPage() {
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
      <ServiceGuideShowcase
        eyebrow="Konser podyum rehberi"
        title="Konser sahnesi icin podyum kararini teknik brief ile netlestirin"
        description="Konser aramalarinda kullanici hem fiyat hem de guvenli sahne kurulumu ister. Bu rehber olcu, rider, guvenlik ve teklif bilgisini ayni akista toplar."
        contents={GUIDE_CONTENTS}
        chapters={GUIDE_CHAPTERS}
        checklist={GUIDE_CHECKLIST}
        cta={{
          href: WHATSAPP_URL,
          label: "Konser sahne briefi gonder",
          ariaLabel: "WhatsApp uzerinden konser podyum kiralama briefi gonder",
        }}
        visual={{
          src: "/img/podyum/konser-hero.webp",
          alt: "Konser icin profesyonel podyum ve sahne kurulumu",
          title: "Konser sahnesi teknik brief ile baslar",
          caption: "Ana platform, riser, FOH ve LED entegrasyonu ayni operasyon planinda netlesir.",
        }}
        theme="amber"
      />
      <ServicesSection />
      <ArticlesSection />
      <FAQSection />
      <RelatedServicesSection />
      <ServiceBlogLinks
        links={[
          {
            href: "/blog/etkinlige-gore-podyum-tercihi",
            label: "Etkinliğe Göre Podyum Tercihi",
          },
          {
            href: "/blog/sahne-neden-hep-yuksektir-2500-yillik-bir-sir",
            label: "Sahne Neden Hep Yüksektir?",
          },
          {
            href: "/blog/neden-podyum-sahne-tercih-edilir",
            label: "Neden Podyum Sahne Tercih Edilir?",
          },
        ]}
      />
    </>
  );
}

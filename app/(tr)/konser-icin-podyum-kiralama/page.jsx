// app/(tr)/konser-icin-podyum-kiralama/page.jsx
import Image from "next/image";
import Link from "next/link";
import { buildFaqSchema } from "@/lib/structuredData/faq";
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
  "Merhaba, konser için podyum kiralama hakkında teklif istiyorum."
)}`;

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== 2. İÇERİK VERİLERİ ================== */
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

const ARTICLE_BREAK_IMAGES = [
  {
    src: "/img/podyum/konser-1.webp",
    alt: "Konser sahne kurulumu – ana platform ve truss sistemi",
  },
  {
    src: "/img/podyum/konser-2.webp",
    alt: "Festival sahnesi geniş alan kurulumu",
  },
  {
    src: "/img/podyum/konser-3.webp",
    alt: "Açık hava konser podyumu – LED entegrasyonu",
  },
  {
    src: "/img/podyum/konser-4.webp",
    alt: "Konser için davul yükselticisi ve teknik platform",
  },
];

/* ================== 3. META DATA ================== */
export const metadata = {
  title:
    "Konser İçin Podyum Kiralama | Festival ve Canlı Performans Sahne Çözümleri | Sahneva",
  description:
    "Konser ve festival organizasyonları için profesyonel sahne kurulumu ve podyum kiralama. Ana sahne platformları, yan kuleler, FOH platformları ve uçtan uca teknik destek. İstanbul ve Türkiye geneli hizmet.",
  alternates: { canonical: `${ORIGIN}/konser-icin-podyum-kiralama` },
  openGraph: {
    title: "Konser İçin Podyum Kiralama | Sahneva",
    description:
      "Festival ve konser sahneleri için modüler sahne sistemleri, LED entegrasyonu ve profesyonel kurulum.",
    url: `${ORIGIN}/konser-icin-podyum-kiralama`,
    type: "website",
    siteName: "Sahneva Organizasyon",
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
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Konser İçin Podyum Kiralama",
        description: metadata.description,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "AdministrativeArea", name: "Türkiye" },
        serviceType: "Konser Sahne Kurulumu",
      },
      buildFaqSchema ? buildFaqSchema(FAQ_ITEMS) : {},
    ].filter(Boolean),
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
          alt="Konser için profesyonel sahne ve podyum kurulumu – Sahneva"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
          quality={60}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/45 via-purple-900/20 to-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-purple-900/25" />

        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-blue-500/14 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-purple-500/12 blur-3xl" />
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
                İstanbul Geneli Profesyonel Hizmet
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 drop-shadow-[0_12px_35px_rgba(0,0,0,0.55)]">
              Konser İçin <span className="text-blue-200">Podyum Kiralama</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-3">
              Ana Sahne • Yan Kuleler • FOH Platform • LED Entegrasyonu
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-9">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition"
              >
                <span className="text-xl mr-2">💬</span> Hemen Teklif Al
              </Link>

              <Link
                href="#hizmetler"
                className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl border-2 border-white/40 text-white bg-white/20 hover:bg-white/30 backdrop-blur-xl transition shadow-lg"
              >
                <span className="text-xl mr-2">🎯</span> Hizmetlerimiz
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: "🎤", value: "500+", label: "Konser & Festival" },
                { icon: "🏆", value: "Türkiye", label: "Geneli Hizmet" },
                { icon: "🚀", value: "8+", label: "Yıl Deneyim" },
                { icon: "🛡️", value: "Güvenli", label: "Mühendislik Onaylı" },
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

            <span className="sr-only">
              Konser İçin Podyum Kiralama - Sahneva Organizasyon
            </span>
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
            Profesyonel <span className="text-blue-700">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Konser ve festival sahne kurulumunda keşif, projelendirme, nakliye,
            kurulum, teknik destek ve söküm
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
            <span className="text-xl mr-3">📞</span> Detaylı Teklif için
            İletişime Geçin
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
            Konser Sahne <span className="text-blue-700">Rehberi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Konser ve festival sahne kurulumu hakkında uzman görüşleri ve teknik
            bilgiler
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white p-8 md:p-10 relative">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                  📚 Kapsamlı Rehber
                </span>
                <span className="bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                  ⭐ Uzman Görüşü
                </span>
                <span className="bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                  🎯 Pratik Çözümler
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                Konser ve Festival Sahnelerinde Profesyonel Podyum Kurulumu
              </h3>
              <p className="text-blue-100 mt-4 text-lg md:text-xl leading-relaxed">
                Ana sahne platformlarından FOH kulelerine, LED entegrasyonundan
                teknik desteke uçtan uca çözümler
              </p>
            </header>
            <div className="p-8 md:p-10 prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">
              <p>
                Konser ve festival organizasyonlarında sahne, yalnızca sanatçının
                durduğu bir platform değil; ışık, ses, LED ekran, sahne arkası
                operasyonu ve izleyici deneyiminin birleştiği ana merkezdir.{" "}
                <strong>Sahneva</strong> olarak konser için podyum kiralama ve
                festival sahne kurulum hizmetlerimizi; küçük ölçekli kapalı
                mekân etkinliklerinden on binlerce kişilik açık hava
                organizasyonlarına kadar her ölçeğe uygun şekilde planlıyor ve
                uyguluyoruz.
              </p>

              <p>
                İstanbul başta olmak üzere Türkiye genelinde gerçekleştirdiğimiz
                konser sahne kurulumlarında; mühendislik hesapları yapılmış,
                yüksek taşıma kapasiteli ve güvenlik standartlarına uygun
                sistemler kullanıyoruz. Sanatçının teknik rider&apos;ı, ses
                sistemi yerleşimi, ışık tasarımı ve LED entegrasyonu sahne
                planlamasının ayrılmaz bir parçasıdır.
              </p>

              <div className="not-prose mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {ARTICLE_BREAK_IMAGES.map((img) => (
                  <figure
                    key={img.src}
                    className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-md"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </figure>
                ))}
              </div>

              <h4 className="flex items-center gap-3 mt-10">
                <span className="inline-flex bg-blue-100 text-blue-600 rounded-2xl p-2">
                  🎤
                </span>{" "}
                Her Performans İçin Profesyonel Sahne Çözümleri
              </h4>
              <p>
                İster yerel bir konser, ister büyük ölçekli bir müzik festivali
                düzenliyor olun; ihtiyaca göre ölçeklenebilir sahne sistemleri
                sunuyoruz. Açık hava organizasyonlarında rüzgâr yükü hesapları,
                zemin analizi ve sabitleme sistemleri titizlikle planlanır.
                Kapalı alan konserlerinde ise tavan yüksekliği, akustik yapı ve
                truss taşıma kapasitesi dikkate alınarak kurulum yapılır.
              </p>
              <p>
                Konser için podyum kiralama hizmetimiz kapsamında; ana sahne
                platformları, yan sahne uzatmaları, teknik platformlar ve
                sanatçıya özel alan çözümleri sunuyoruz. Büyük prodüksiyonlarda
                sahne genişletmeleri sayesinde kalabalık orkestralar, dans
                ekipleri veya çoklu performans düzenleri rahatlıkla
                konumlandırılabilir.
              </p>

              <aside className="mt-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-5">
                <h5 className="font-black text-blue-700 text-lg mb-2">
                  💡 Konser ve Festival Sahnelerimiz Neleri Kapsar?
                </h5>
                <p className="mb-0">
                  Ana sahneler, headliner sanatçılar ve ana performanslar için
                  geniş ve yüksek taşıma kapasiteli platformlardan oluşur.
                  Gruplar, DJ performansları ve dans ekipleri için yükseltilmiş
                  platform çözümleri sağlanır. Davul yükselticileri, optimum ses
                  projeksiyonu ve sahne içi görüş açısı için özel ölçülerde
                  tasarlanır. Daha büyük ekipler için sahne genişletme modülleri
                  ile esnek alan yaratılır.
                </p>
              </aside>

              <h4 className="mt-10 flex items-center gap-3">
                <span className="inline-flex bg-purple-100 text-purple-600 rounded-2xl p-2">
                  🎨
                </span>{" "}
                Özelleştirilebilir Festival Sahne Tasarımı
              </h4>
              <p>
                Her konser ve festivalin dinamiği farklıdır. Sahne tasarımını;
                sanatçının sahne şovu, LED ekran konfigürasyonu, ışık tasarımı
                ve ses sistemi yerleşimi ile entegre şekilde projelendiriyoruz.
                İstenilen ölçü ve yükseklikte sahne kurulumu yapılabilir; yan
                kuleler, FOH platformları ve teknik kontrol alanları planlamaya
                dahil edilir.
              </p>
              <p>
                Büyük ölçekli açık hava festivallerinde; çelik truss çatılı
                sahne sistemleri, brandalı üst kaplama ve hava koşullarına
                dayanıklı yapı elemanları kullanılır.
              </p>

              <aside className="mt-10 rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-5">
                <h5 className="font-black text-yellow-700 text-lg mb-2 flex items-center gap-2">
                  <span aria-hidden="true">💎</span> Neden Sahneva?
                </h5>
                <p className="mb-0 text-yellow-800">
                  Yüksek kaliteli ekipman, deneyimli teknik kadro ve büyük
                  ölçekli organizasyon tecrübesi ile konser ve festival sahne
                  kurulumlarında güvenilir bir çözüm ortağıyız. Sahneva ekibi;
                  keşif, projelendirme, teslimat, kurulum ve söküm dahil olmak
                  üzere tüm süreci yönetir. Etkinlik boyunca yerinde teknik
                  destek sağlanarak olası ihtiyaçlara anında müdahale edilir.
                </p>
              </aside>
            </div>
          </article>

          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black leading-tight">
                Teknik Rider Uyumlu Sahne Planlaması
              </h3>
              <p className="text-blue-100 mt-2 text-lg">
                Sanatçının teknik gereksinimlerine göre özelleştirilmiş sahne
                çözümleri
              </p>
            </header>
            <div className="p-6 md:p-8 prose prose-lg max-w-none prose-p:text-gray-600">
              <p>
                Sanatçının teknik rider belgesi incelenerek sahne ölçüleri,
                yükseklikleri, kablo geçişleri ve teknik platform konumları buna
                göre planlanır. Ses sistemi yerleşimi, ışık tasarımı ve LED
                entegrasyonu sahne planlamasının ayrılmaz bir parçasıdır.
              </p>
              <ul>
                <li>Rider&apos;a uygun sahne boyutları</li>
                <li>Kablo geçiş ve yönetim planı</li>
                <li>Monitor ve FOH platform konumları</li>
                <li>Backline ve enstrüman alanı düzenlemesi</li>
              </ul>
            </div>
          </article>

          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black leading-tight">
                Açık Hava vs. Kapalı Alan Konser Sahneleri
              </h3>
              <p className="text-blue-100 mt-2 text-lg">
                Her ortama özel teknik çözümler ve güvenlik planlaması
              </p>
            </header>
            <div className="p-6 md:p-8 prose prose-lg max-w-none prose-p:text-gray-600">
              <h4 className="flex items-center gap-2 text-lg font-bold">
                <span className="inline-flex bg-blue-100 text-blue-600 rounded-xl p-2">
                  🌤️
                </span>{" "}
                Açık Hava Organizasyonları
              </h4>
              <p>
                Rüzgâr yükü hesapları, zemin analizi ve sabitleme sistemleri
                mühendislik standartlarına uygun planlanır. Çelik truss çatı ve
                hava koşullarına dayanıklı yapı elemanları kullanılır.
              </p>

              <h4 className="flex items-center gap-2 text-lg font-bold mt-6">
                <span className="inline-flex bg-purple-100 text-purple-600 rounded-xl p-2">
                  🏛️
                </span>{" "}
                Kapalı Alan Konserleri
              </h4>
              <p>
                Tavan yüksekliği, akustik yapı ve truss taşıma kapasitesi
                dikkate alınarak kurulum yapılır. Mekânın yapısal özellikleri
                sahne planlamasına entegre edilir.
              </p>
            </div>
          </article>
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
            Sık Sorulan <span className="text-blue-700">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Konser için podyum kiralama hakkında merak edilen sorular ve
            cevapları
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
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
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
            Tamamlayıcı <span className="text-blue-700">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Konser sahne kurulumunuzu tamamlayacak diğer profesyonel etkinlik
            çözümlerimiz
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
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.desc}
                </p>
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
              Konser Sahnesi Çözümlerine Hazır Mısınız?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Konser ve festival organizasyonunuz için en uygun sahne sistemlerini
              sunalım. Ücretsiz keşif, profesyonel danışmanlık ve rekabetçi fiyat
              garantisi ile hizmetinizdeyiz.
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
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Hizmetler", url: `${SITE_URL}/hizmetler` },
    {
      name: "Konser İçin Podyum Kiralama",
      url: `${SITE_URL}/konser-icin-podyum-kiralama`,
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <StructuredData />
      <HeroSection />
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
            href: "/blog/neden-podyum-sahne-tercih-edilir",
            label: "Neden Podyum Sahne Tercih Edilir?",
          },
          {
            href: "/blog/sahne-neden-hep-yuksektir-2500-yillik-bir-sir",
            label: "Sahne Neden Hep Yüksektir?",
          },
        ]}
      />
      <CTASection />
    </>
  );
}

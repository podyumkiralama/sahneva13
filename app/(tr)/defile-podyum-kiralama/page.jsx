// app/(tr)/defile-podyum-kiralama/page.jsx
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
  "Merhaba, defile ve podyum kiralama için teklif istiyorum."
)}`;

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== 2. GÖRSELLER ================== */
// Hero + 3 içerik görseli — kullanıcı bu dosyaları /public/img/podyum/ altına ekleyecek
const HERO_IMAGE = "/img/podyum/defile-podyum-kiralama-hero.webp";

const CONTENT_IMAGES = [
  {
    src: "/img/podyum/defile-runway-tasarimi.webp",
    alt: "T tipi defile runway tasarımı – moda defilesi için podyum kurulumu",
    width: 1440,
    height: 1322,
  },
  {
    src: "/img/podyum/moda-defilesi-sahne.webp",
    alt: "Moda defilesi sahne kurulumu – profesyonel ışık ve arka plan entegrasyonu",
    width: 1440,
    height: 1657,
  },
  {
    src: "/img/podyum/podyum-isik-entegrasyonu.webp",
    alt: "Podyum ışık entegrasyonu – LED destekli defile sahnesi",
    width: 1194,
    height: 1913,
  },
];

/* ================== 3. İÇERİK VERİLERİ ================== */
const SERVICES = [
  {
    icon: "👗",
    title: "Runway Tasarımı",
    description:
      "Düz, U tipi ve T tipi runway düzenlemeleri; koleksiyonun akışına ve mekânın mimari yapısına uygun planlanır.",
    features: ["Düz runway", "U tipi runway", "T tipi runway", "Özel formlar"],
  },
  {
    icon: "💡",
    title: "LED & Işık Entegrasyonu",
    description:
      "Dramatik ışık geçişleri, LED arka plan sahneleri ve projeksiyon mapping ile sahneyi görsel bir deneyime dönüştürün.",
    features: ["LED arka panel", "Projeksiyon mapping", "Sahne aydınlatma", "Renk geçişleri"],
  },
  {
    icon: "🏗️",
    title: "Yükseltilmiş Podyum Platformları",
    description:
      "Seyirci görüş açısını maksimize eden, güvenli ve estetik yükseltilmiş sunum platformları.",
    features: ["Ayarlanabilir yükseklik", "Basamak geçişleri", "Kaymaz yüzey", "Güvenlik detayları"],
  },
  {
    icon: "🎨",
    title: "Özel Yüzey Kaplamaları",
    description:
      "Parlak, mat veya halı kaplı yüzey seçenekleriyle sahneni koleksiyonun estetik diline uygun hale getirin.",
    features: ["Parlak kaplama", "Mat kaplama", "Halı kaplama", "Özel renkler"],
  },
  {
    icon: "📸",
    title: "Fotoğraf & Video Çekim Alanları",
    description:
      "Sosyal medya görünürlüğü ve marka algısı düşünülerek planlanan fotoğraf ve video çekim bölgeleri.",
    features: ["360° çekim açısı", "Backstage alanı", "Medya pozisyonları", "Marka entegrasyonu"],
  },
  {
    icon: "🔧",
    title: "Teknik Destek & Operasyon",
    description:
      "Prova saatleri ve koreografi akışıyla uyumlu kurulum, demontaj ve etkinlik günü teknik destek.",
    features: ["Zamanlamalı kurulum", "Yedek parça", "Etkinlik günü ekip", "Acil müdahale"],
  },
];

const USE_CASES = [
  { icon: "👗", text: "Butik tasarımcı defileleri", desc: "Küçük ve samimi koleksiyon sunumları için özel podyum" },
  { icon: "🏆", text: "Moda haftası sunumları", desc: "Geniş katılımlı prestijli moda haftaları için büyük sahne" },
  { icon: "🚀", text: "Ürün lansmanları", desc: "Prestijli markalar için dramatik sahne kurulumları" },
  { icon: "📷", text: "Showroom sunumları", desc: "Kurumsal showroom ve marka tanıtımları" },
  { icon: "🛍️", text: "Pop-up mağaza etkinlikleri", desc: "Geçici mağaza açılış ve tanıtım organizasyonları" },
  { icon: "🎬", text: "Reklam & lookbook çekimleri", desc: "Fotoğraf ve video prodüksiyonlarına özel sahne kurulumu" },
];

const FAQ_ITEMS = [
  {
    q: "Defile için hangi runway tipleri mevcut?",
    a: "Düz (linear), U tipi ve T tipi runway tasarımları sunuyoruz. Koleksiyonun akışına, model yürüyüş ritmine ve seyirci oturma düzenine göre en uygun tipi birlikte planlıyoruz.",
  },
  {
    q: "Podyum yüzey kaplaması seçenekleri nelerdir?",
    a: "Parlak, mat ve halı kaplı seçenekler mevcuttur. Haute couture sunumlar için saten ya da özel kumaş kaplamalar da talep üzerine uygulanmaktadır.",
  },
  {
    q: "LED ve projeksiyon entegrasyonu mümkün mü?",
    a: "Evet, LED arka panel sahneleri, projeksiyon mapping ve sahne aydınlatma sistemleri podyum kurulumuna entegre edilebilir. Işık tasarımı koleksiyonun atmosferine göre özelleştirilir.",
  },
  {
    q: "Kurulum ve demontaj prova saatleriyle uyumlu planlanabilir mi?",
    a: "Kesinlikle. Prova saatleri, koreografi akışı ve yayın planına uygun şekilde kurulum ve demontaj sürecini planlıyoruz. İstanbul ve Türkiye genelinde teslimat, kurulum ve söküm işlemleri profesyonel ekiplerimiz tarafından gerçekleştirilir.",
  },
  {
    q: "Sadece İstanbul'da mı hizmet veriyorsunuz?",
    a: "Hayır. İstanbul merkez olmak üzere Türkiye genelinde moda etkinlikleri için podyum ve defile sahne kurulumu gerçekleştiriyoruz. Şehir dışı projeler için lütfen özel teklif alın.",
  },
];

const RELATED_SERVICES = [
  { href: "/podyum-kiralama", title: "Podyum Kiralama", icon: "🎭", desc: "Modüler podyum sistemleri ve profesyonel kurulum" },
  { href: "/sahne-kiralama", title: "Sahne Kiralama", icon: "🏗️", desc: "Konser, konferans ve lansman etkinlikleri için sahne" },
  { href: "/led-ekran-kiralama", title: "LED Ekran Kiralama", icon: "🖥️", desc: "Yüksek çözünürlüklü LED ekran ve video wall çözümleri" },
  { href: "/ses-isik-sistemleri", title: "Ses & Işık Sistemleri", icon: "🎵", desc: "Profesyonel ses ve ışık sistemleri kiralama" },
];

/* ================== 4. META DATA ================== */
export const metadata = {
  title: "Defile & Podyum Kiralama | Moda Etkinlikleri İçin Profesyonel Sahne Çözümleri | Sahneva",
  description:
    "Defile ve podyum kiralama: T tipi, U tipi ve düz runway tasarımları, LED arka plan sahneleri, projeksiyon mapping ve tam teknik destek. İstanbul geneli profesyonel moda etkinliği sahne hizmeti.",
  alternates: { canonical: `${ORIGIN}/defile-podyum-kiralama` },
  openGraph: {
    title: "Defile & Podyum Kiralama | Sahneva Organizasyon",
    description:
      "Moda defileleri ve podyum etkinlikleri için T tipi runway, LED entegrasyonu ve tam teknik destek.",
    url: `${ORIGIN}/defile-podyum-kiralama`,
    type: "website",
    siteName: "Sahneva Organizasyon",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}${HERO_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Sahneva defile podyum kiralama – moda etkinlikleri için profesyonel runway sahne çözümleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Defile & Podyum Kiralama | Profesyonel Moda Sahne Çözümleri | Sahneva",
    description:
      "T tipi, U tipi ve düz runway tasarımları, LED entegrasyonu ve profesyonel kurulum ile moda defileleriniz için anahtar teslim sahne çözümleri.",
    images: [`${ORIGIN}${HERO_IMAGE}`],
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
        name: "Defile & Podyum Kiralama",
        description: metadata.description,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "AdministrativeArea", name: "İstanbul" },
        serviceType: "Defile Podyum Kiralama",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Defile Podyum Kiralama Hizmetleri",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.description,
            },
          })),
        },
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
          src={HERO_IMAGE}
          alt="Moda defilesi için profesyonel podyum kurulumu – runway sahne tasarımı"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
          quality={60}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/50 via-pink-900/20 to-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-violet-900/25" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-violet-500/14 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-pink-500/12 blur-3xl" />
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
                İstanbul Geneli Profesyonel Moda Sahne Hizmeti
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 drop-shadow-[0_12px_35px_rgba(0,0,0,0.55)]">
              Defile &amp;{" "}
              <span className="text-pink-200">Podyum Kiralama</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-3">
              Defile • Runway • Moda Haftası • Lansman • Showroom
            </p>

            <p className="text-base md:text-xl text-white/75 leading-relaxed mb-7 max-w-3xl mx-auto">
              T tipi, U tipi ve düz runway tasarımları, LED arka plan sahneleri ve{" "}
              <span className="font-semibold text-white">uçtan uca teknik destek</span>{" "}
              ile moda etkinliklerinize sofistike bir sahne
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
                <span className="text-xl mr-2">👗</span> Hizmetlerimiz
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: "⭐", value: "4.8/5", label: "200+ Değerlendirme" },
                { icon: "👗", value: "300+", label: "Moda Etkinliği" },
                { icon: "🚀", value: "Uçtan Uca", label: "Hizmet" },
                { icon: "🛡️", value: "TS EN", label: "Güvenlik Standartları" },
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

            <span className="sr-only">Defile Podyum Kiralama - Sahneva Organizasyon</span>
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
      className="py-20 bg-gradient-to-b from-white to-violet-50/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Moda Etkinliklerine Özel{" "}
            <span className="text-violet-700">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Podyum tasarımından ışık entegrasyonuna, LED arka plan çözümlerinden
            backstage planlamasına kadar tüm süreci yönetiyoruz
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
              <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-violet-600 transition-colors">
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
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
          >
            <span className="text-xl mr-3">📞</span> Detaylı Teklif için İletişime Geçin
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContentSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Sol: Ana makale */}
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <header className="bg-gradient-to-r from-violet-700 via-pink-700 to-violet-800 text-white p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                  👗 Moda Etkinlikleri
                </span>
                <span className="bg-pink-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                  ⭐ Uçtan Uca Hizmet
                </span>
                <span className="bg-violet-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                  🎯 Özelleştirilebilir Tasarım
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                Defile &amp; Podyum Kiralama | Moda Etkinlikleri İçin Profesyonel Sahne Çözümleri
              </h2>
              <p className="text-violet-100 mt-4 text-lg md:text-xl leading-relaxed">
                Markanın kimliğini, koleksiyonun ruhunu ve tasarımcının vizyonunu taşıyan ana unsur: sahne
              </p>
            </header>

            <div className="p-8 md:p-10 prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">
              <p>
                Moda dünyasında sahne, yalnızca bir platform değil; markanın kimliğini,
                koleksiyonun ruhunu ve tasarımcının vizyonunu taşıyan ana unsurdur.{" "}
                <strong>Sahneva</strong> olarak defile ve podyum kiralama hizmetlerimiz,
                her moda etkinliğinin kendine özgü estetik beklentilerini karşılamak üzere
                özel olarak planlanır.
              </p>

              <p>
                İster butik bir tasarımcı defilesi, ister geniş katılımlı bir moda haftası
                sunumu, ister prestijli bir ürün lansmanı düzenliyor olun; etkinliğinize
                sofistike, zarif ve teknik olarak kusursuz bir altyapı sağlıyoruz. Türkiye
                genelinde, özellikle İstanbul merkezli gerçekleştirdiğimiz moda
                organizasyonlarında; podyum tasarımından ışık entegrasyonuna, LED arka plan
                çözümlerinden backstage planlamasına kadar tüm süreci uçtan uca yönetiyoruz.
              </p>

              {/* 3 içerik görseli */}
              <div className="not-prose mt-8 grid gap-4 md:grid-cols-3 items-start">
                {CONTENT_IMAGES.map((img) => (
                  <figure
                    key={img.src}
                    className="group overflow-hidden rounded-2xl border border-gray-200 shadow-md"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </figure>
                ))}
              </div>

              <h3 className="flex items-center gap-3 mt-10">
                <span className="inline-flex bg-violet-100 text-violet-600 rounded-2xl p-2">🏗️</span>{" "}
                Tüm Moda Etkinlikleri İçin Esnek Sahneleme Çözümleri
              </h3>
              <p>
                Samimi tasarımcı defilelerinden büyük ölçekli podyum prodüksiyonlarına kadar,
                sunduğumuz sahne kiralama çözümleri yüksek taşıma kapasitesi, estetik bütünlük
                ve modüler kurulum avantajı ile tasarlanır. Moda tasarımcıları, ajanslar ve
                kurumsal markalarla çalışarak; defilelerden özel davetlere, showroom sunumlarından
                geçici mağaza lansmanlarına kadar geniş bir yelpazede hizmet veriyoruz.
              </p>
              <p>
                Defile ve podyum kiralama kapsamımızda; düz, U tipi veya T tipi runway tasarımları,
                yükseltilmiş sunum platformları, LED destekli arka plan sahneleri ve fotoğraf çekim
                alanları yer alır. Her kurulum, koleksiyonun akışına, model yürüyüş ritmine ve
                seyirci oturma düzenine göre teknik olarak planlanır. Sahne yüksekliği, yüzey
                kaplaması (parlak, mat, halı kaplı), basamak geçişleri ve güvenlik detayları
                titizlikle hesaplanır.
              </p>

              <aside className="mt-8 rounded-2xl border-l-4 border-violet-500 bg-violet-50 p-5">
                <h4 className="font-black text-violet-700 text-lg mb-2">
                  💡 Özelleştirilebilir Podyum ve Sahne Tasarımları
                </h4>
                <p className="mb-0">
                  Hiçbir moda etkinliği birbirinin aynısı değildir. İster minimal ve modern bir
                  koleksiyon için sade bir platform, ister haute couture sunum için dramatik ışık
                  geçişleriyle desteklenmiş iddialı bir runway tasarımı isteyin; sahneyi
                  koleksiyonun bir parçası haline getiriyoruz. Projeksiyon mapping, LED ekran
                  entegrasyonu, özel tasarım fonlar ve kumaş kaplamalar ile sahnenizi görsel
                  olarak büyüleyici bir deneyim alanına dönüştürüyoruz.
                </p>
              </aside>

              <h3 className="flex items-center gap-3 mt-10">
                <span className="inline-flex bg-pink-100 text-pink-600 rounded-2xl p-2">⚡</span>{" "}
                Kapsamlı Teknik Hizmet ve Operasyon Desteği
              </h3>
              <p>
                Moda etkinliklerinde zamanlama kritik öneme sahiptir. Prova saatleri, koreografi
                akışı ve yayın planı ile uyumlu şekilde kurulum ve demontaj sürecini planlıyoruz.
                İstanbul ve Türkiye genelinde sunduğumuz hizmet kapsamında teslimat, kurulum ve
                söküm işlemleri profesyonel ekiplerimiz tarafından gerçekleştirilir.
              </p>
              <ul>
                <li>Profesyonel ışık ve ses sistemleri entegrasyonu</li>
                <li>Truss kurulumları ve arka plan uygulamaları</li>
                <li>Etkinlik boyunca yerinde teknik destek</li>
                <li>Deneyimli teknisyenler ile sorunsuz altyapı yönetimi</li>
              </ul>

              <aside className="mt-8 rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-5">
                <h4 className="font-black text-yellow-700 text-lg mb-2 flex items-center gap-2">
                  <span aria-hidden="true">💎</span> Moda Etkinliklerinizde Neden Sahneva?
                </h4>
                <p className="mb-0 text-yellow-800">
                  Moda sunumlarının görsel etkisinin marka değerine doğrudan katkı sağladığını
                  biliyoruz. Yalnızca dayanıklı ve güvenilir sahne sistemleri değil; aynı zamanda
                  estetik, zarif ve yüksek segment organizasyonlara yakışır çözümler sunuyoruz.
                  Mühendislik hesapları yapılmış, güvenlik standartlarına uygun ve estetik açıdan
                  güçlü sahne tasarımlarımızla moda etkinliklerinizi bir üst seviyeye taşıyoruz.
                </p>
              </aside>
            </div>
          </article>

          {/* Sağ: Runway tipleri */}
          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <header className="bg-gradient-to-r from-violet-600 to-pink-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black leading-tight">
                Runway Tasarım Seçenekleri
              </h3>
              <p className="text-violet-100 mt-2 text-lg">
                Koleksiyonunuza en uygun runway formunu birlikte seçelim
              </p>
            </header>
            <div className="p-6 md:p-8 prose prose-lg max-w-none prose-p:text-gray-600">
              <h4 className="flex items-center gap-2 text-lg font-bold">
                <span className="inline-flex bg-violet-100 text-violet-600 rounded-xl p-2">➡️</span>{" "}
                Düz (Linear) Runway
              </h4>
              <p>Klasik ve şık. Uzun bir çizgide modellerin yürüyüşünü ön plana çıkarır.</p>

              <h4 className="flex items-center gap-2 text-lg font-bold mt-6">
                <span className="inline-flex bg-pink-100 text-pink-600 rounded-xl p-2">🔄</span>{" "}
                U Tipi Runway
              </h4>
              <p>Seyirciye daha yakın bir deneyim sunar. Salon ortasındaki seyirciler için idealdir.</p>

              <h4 className="flex items-center gap-2 text-lg font-bold mt-6">
                <span className="inline-flex bg-yellow-100 text-yellow-600 rounded-xl p-2">✝️</span>{" "}
                T Tipi Runway
              </h4>
              <p>
                En yaygın defile formatı. Modellerin koleksiyonunu ön cephe ve iki yandan sergilemesini sağlar.
              </p>
            </div>
          </article>

          {/* Sağ: Teknik entegrasyon */}
          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <header className="bg-gradient-to-r from-pink-600 to-violet-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black leading-tight">
                Teknik Entegrasyon Olanakları
              </h3>
              <p className="text-violet-100 mt-2 text-lg">
                Sahnenizi görsel ve işitsel bir deneyime dönüştürün
              </p>
            </header>
            <div className="p-6 md:p-8 prose prose-lg max-w-none prose-p:text-gray-600">
              <ul>
                <li>LED arka panel ve video wall entegrasyonu</li>
                <li>Projeksiyon mapping uygulamaları</li>
                <li>Özel kumaş ve dekoratif fon sistemleri</li>
                <li>Sahne aydınlatma ve renk geçişleri</li>
                <li>Ses sistemleri ve koreografi müziği altyapısı</li>
                <li>Truss ve asma ekipman kurulumları</li>
              </ul>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-violet-900/95">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Hizmet Verdiğimiz{" "}
            <span className="text-pink-300">Etkinlik Türleri</span>
          </h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            Butik defilelerden büyük ölçekli moda haftalarına kadar geniş bir yelpazede
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-400 to-pink-400 mx-auto mt-8 rounded-full" />
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
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-pink-300 transition-colors">
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
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-violet-700 hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
          >
            <span className="text-xl mr-3">💬</span> Etkinliğiniz İçin Özel Teklif Alın
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "300+", label: "Moda Etkinliği", icon: "👗" },
    { value: "8+", label: "Yıl Deneyim", icon: "⭐" },
    { value: "Uçtan", label: "Uca Hizmet", icon: "🚀" },
    { value: "TS EN", label: "Güvenlik Standardı", icon: "🛡️" },
  ];
  return (
    <section className="py-20 bg-gradient-to-r from-violet-700 via-pink-700 to-violet-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <article
              key={stat.label}
              className="text-center group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105"
            >
              <div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black mb-1 text-white drop-shadow-lg">
                {stat.value}
              </div>
              <p className="text-pink-100 text-lg font-semibold">{stat.label}</p>
            </article>
          ))}
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
            Sık Sorulan <span className="text-violet-700">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Defile ve podyum kiralama hakkında merak edilen sorular ve cevapları
          </p>
        </div>

        <div className="space-y-6">
          {FAQ_ITEMS.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-500 open:bg-violet-50 open:border-violet-200 border-2 border-transparent open:border"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between text-xl font-bold text-gray-900">
                <span className="pr-4">{faq.q}</span>
                <span className="ml-4 transition-transform duration-500 group-open:rotate-180 text-violet-600 bg-violet-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  ⌄
                </span>
              </summary>
              <div className="mt-6 text-gray-700 leading-relaxed text-lg pl-4 border-l-4 border-violet-500">
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
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-violet-100/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Tamamlayıcı <span className="text-violet-700">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Defile ve podyum kurulumunuzu tamamlayacak diğer profesyonel etkinlik çözümlerimiz
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {RELATED_SERVICES.map((service) => (
            <li key={service.href} className="h-full">
              <Link
                href={service.href}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-violet-200 transition-all duration-500 hover:scale-105 text-center h-full flex flex-col"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-violet-600 transition-colors mb-4 flex-grow">
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
        <div className="bg-gradient-to-r from-violet-700 to-pink-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Koleksiyonunuzu Etkileyici Bir Sahneyle Unutulmaz Kılın
            </h2>
            <p className="text-violet-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Bir sonraki defile veya moda etkinliğiniz için profesyonel podyum kiralama hizmeti almak,
              teknik detayları birlikte planlamak ve size özel fiyat teklifi oluşturmak için Sahneva
              ekibiyle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-violet-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
              >
                <span className="text-xl mr-3">💬</span> Hemen Teklif Al
              </Link>
              <Link
                href="/podyum-kiralama"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300"
              >
                <span className="text-xl mr-3">🎭</span> Podyum Kiralama
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const baseUrl = SITE_URL;
  const canonical = `${baseUrl}/defile-podyum-kiralama`;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Hizmetler", url: `${baseUrl}/hizmetler` },
    { name: "Defile & Podyum Kiralama", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <StructuredData />
      <HeroSection />
      <ServicesSection />
      <ContentSection />
      <UseCasesSection />
      <StatsSection />
      <FAQSection />
      <RelatedServicesSection />
      <ServiceBlogLinks
        links={[
          { href: "/blog/etkinlige-gore-podyum-tercihi", label: "Etkinliğe Göre Podyum Tercihi" },
          { href: "/blog/neden-podyum-sahne-tercih-edilir", label: "Neden Podyum Sahne Tercih Edilir?" },
        ]}
      />
      <CTASection />
    </>
  );
}

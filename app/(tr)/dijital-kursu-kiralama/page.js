// app/(tr)/dijital-kursu-kiralama/page.js

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import JsonLdScript from "@/components/seo/JsonLd";
import { MessageCircle, Eye, CheckCircle } from "lucide-react";

/* ================== ISR ================== */
export const revalidate = 86400;

/* ================== Sabitler ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const ORIGIN = SITE_URL;
const LOCAL_BUSINESS_ID = `${SITE_URL}/#local`;

const PAGE_PATH = "/dijital-kursu-kiralama";
const PAGE_URL = `${ORIGIN}${PAGE_PATH}`;

const TITLE = "Dijital Kürsü Kiralama | LED Sunum Kürsüsü";
const DESCRIPTION =
  "Konferans, lansman ve kurumsal etkinlikler için dijital kürsü kiralama. LED ekranlı, şeffaf ve özel tasarım sunum kürsüleri — kurulum ve nakliye dahil.";

const OG_IMAGE = `${ORIGIN}/img/dijital-kursu/dijital-kursu-hero.webp`;
const PHONE = "+905453048671";

const WA_TEXT =
  "Merhaba%2C+dijital+kursu+kiralama+icin+teklif+istiyorum.+Etkinlik%3A+%5Bkonferans%2Flansman%2Fkurumsal%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Sehir%3A+%5Bil%2Filce%5D%2C+Kurs+adeti%3A+%5Bx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

// Base64 blur placeholder
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== Dinamik bileşenler ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => <GalleryFallback />,
});

/* ================== Metadata ================== */
export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildLanguageAlternates({
    tr: "/dijital-kursu-kiralama",
    xDefault: "/dijital-kursu-kiralama",
  }),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Sahneva",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon dijital kürsü kiralama – LED ekranlı sunum kürsüsü kurumsal etkinlik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
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

/* ================== JSON-LD ================== */
function StructuredData() {
  const galleryImages = GALLERY_IMAGES.map((img, i) => ({
    "@type": "ImageObject",
    "@id": `${PAGE_URL}#image-${i + 1}`,
    url: `${ORIGIN}${img.src}`,
    contentUrl: `${ORIGIN}${img.src}`,
    caption: img.alt,
  }));

  const faqs = FAQ_ITEMS.map((f, i) => ({
    "@type": "Question",
    "@id": `${PAGE_URL}#faq-q-${i + 1}`,
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${ORIGIN}/#website` },
        primaryImageOfPage: { "@type": "ImageObject", "@id": `${PAGE_URL}#primaryimage`, url: OG_IMAGE },
        mainEntity: { "@id": `${PAGE_URL}#service` },
        hasPart: [{ "@id": `${PAGE_URL}#faq` }, { "@id": `${PAGE_URL}#gallery` }],
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Dijital Kürsü Kiralama",
        serviceType: "Dijital kürsü kiralama",
        provider: { "@id": LOCAL_BUSINESS_ID },
        areaServed: "TR",
        url: PAGE_URL,
        description: "Konferans, lansman ve kurumsal etkinlikler için LED ekranlı dijital kürsü kiralama ve kurulum hizmeti.",
        offers: {
          "@type": "Offer",
          url: PAGE_URL,
          availability: "https://schema.org/InStock",
          priceCurrency: "TRY",
        },
      },
      { "@type": "FAQPage", "@id": `${PAGE_URL}#faq`, mainEntity: faqs },
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#gallery`,
        name: "Dijital Kürsü Galeri",
        url: `${PAGE_URL}#galeri`,
        hasPart: galleryImages,
      },
      ...galleryImages,
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

/* ================== Veri ================== */
const GALLERY_IMAGES = [
  { src: "/img/dijital-kursu/dijital-kursu-hero.webp", alt: "Dijital kürsü kiralama – mavi tonlu gerçek saha kurulumu" },
  { src: "/img/dijital-kursu/dijital-kursu-saha-1.webp", alt: "Kurumsal etkinlikte LED ekranlı dijital kürsü kurulumu" },
  { src: "/img/dijital-kursu/dijital-kursu-saha-2.webp", alt: "Konferans salonunda dijital sunum kürsüsü" },
];

const GALLERY_FALLBACK_CARDS = [
  { src: "/img/dijital-kursu/dijital-kursu-hero.webp", title: "Gerçek Saha Kurulumu", alt: "Dijital kürsü gerçek saha kurulumu mavi ışıklı etkinlik" },
  { src: "/img/dijital-kursu/dijital-kursu-saha-1.webp", title: "Kurumsal Etkinlik", alt: "LED ekranlı dijital kürsü kurumsal lansman etkinliği" },
  { src: "/img/dijital-kursu/dijital-kursu-saha-2.webp", title: "Konferans Kurulumu", alt: "Dijital sunum kürsüsü konferans salon kurulumu" },
];

const HERO_METRICS = [
  { value: "LED", suffix: "Ekranlı", label: "Dijital kürsü" },
  { value: "Şeffaf", suffix: "Akrilik", label: "Premium tasarım" },
  { value: "Ses", suffix: "Entegreli", label: "Mikrofon bağlantısı" },
  { value: "Türkiye", suffix: "Geneli", label: "Nakliye + kurulum" },
];

const KURSU_TIPLERI = [
  {
    title: "LED Ekranlı Kürsü",
    badge: "En çok tercih",
    img: "/img/dijital-kursu/dijital-kursu-saha-1.webp",
    imgAlt: "LED ekranlı dijital kürsü kurumsal konferans kurulumu",
    usage: "Kurumsal konferans, zirve, yönetim kurulu ve ürün lansmanı",
    sizing: "1080 × 1920 px Full HD dikey ekran — konuşmacı notları, logo veya slayt içeriği görüntülenebilir.",
    advantage: "Konuşmacı notları veya marka içeriği doğrudan kürsü ekranında görüntülenir.",
  },
  {
    title: "Şeffaf Akrilik Kürsü",
    badge: "Premium etkinlik",
    img: "/img/dijital-kursu/dijital-kursu-saha-2.webp",
    imgAlt: "Şeffaf akrilik dijital kürsü premium lansman etkinliği",
    usage: "Moda, teknoloji lansmanı, ödül töreni ve premium davet",
    sizing: "Sahne konsepti, kamera açısı ve renk paletine göre konumlandırılır.",
    advantage: "Minimalist görünümle konuşmacıyı ön plana çıkarır; sahne estetiğini bozmaz.",
  },
  {
    title: "Logolu / Özel Tasarım",
    badge: "Protokol töreni",
    img: "/img/dijital-kursu/dijital-kursu-hero.webp",
    imgAlt: "Özel logolu dijital kürsü protokol tören kurulumu",
    usage: "Protokol töreni, mezuniyet, belediye etkinliği ve kurumsal gala",
    sizing: "Marka renkleri, logo boyutu ve mekan ışığına göre özelleştirilir.",
    advantage: "Marka kimliğini sunum platformuna taşır; kurumsal algıyı güçlendirir.",
  },
];

const USE_CASES = [
  {
    icon: "🎤",
    text: "Kurumsal konferans ve zirve",
    desc: "Ana konuşmacı kürsüsü, moderatör platformu ve panel yönetimi için profesyonel dijital çözüm.",
    href: "/kurumsal-organizasyon",
    linkLabel: "kurumsal organizasyon",
  },
  {
    icon: "🚀",
    text: "Ürün ve hizmet lansmanı",
    desc: "Marka çıkışında dijital kürsü, LED içerik ve sahne entegrasyonu tek planda planlanır.",
    href: "/sahne-kiralama",
    linkLabel: "sahne kiralama",
  },
  {
    icon: "🎓",
    text: "Mezuniyet ve tören",
    desc: "Protokol dijital kürsüsü, diploma bölümü ve kamera açısına uygun konum planlaması.",
    href: "/podyum-kiralama",
    linkLabel: "podyum kiralama",
  },
  {
    icon: "📺",
    text: "Basın toplantısı",
    desc: "Medya karşısında markalı kürsü, mikrofon bankosu ve kamera açısı koordinasyonu.",
    href: "/ses-isik-sistemleri",
    linkLabel: "ses ışık sistemleri",
  },
  {
    icon: "🏆",
    text: "Ödül töreni ve gala",
    desc: "Şeffaf veya logolu kürsü ile sahne estetiğini tamamlayan sunum platformu.",
    href: "/led-ekran-kiralama",
    linkLabel: "LED ekran kiralama",
  },
  {
    icon: "🏛️",
    text: "Belediye ve kurumsal etkinlik",
    desc: "Resmi tören, açılış ve protokol etkinlikleri için marka uyumlu dijital kürsü kurulumu.",
    href: "/kurumsal-organizasyon",
    linkLabel: "kurumsal organizasyon",
  },
];

const INTEGRATION_ITEMS = [
  {
    feature: "Mikrofon Bağlantısı",
    standard: "Kondenser kürsü mikrofonu veya yaka mikrofonu",
    detail: "Mevcut ses sistemine kablo veya kablosuz entegrasyon; seviye ayarı etkinlik öncesi test edilir.",
  },
  {
    feature: "Görüntü Çıkışı",
    standard: "HDMI / DisplayPort — 1080×1920 px Full HD",
    detail: "LED ekranlı modellerde 1080 yatay × 1920 dikey Full HD dikey ekrana konuşmacı notu, logo veya sunum içeriği doğrudan aktarılabilir.",
  },
  {
    feature: "Kamera Açısı",
    standard: "Yükseklik ve konum optimizasyonu",
    detail: "Kamera, seyirci ve ışık açılarına göre kürsü konumu kurulum öncesi planlanır.",
  },
  {
    feature: "Spot Işık",
    standard: "Konuşmacı aydınlatması",
    detail: "Sahne ışık sistemiyle koordineli; konuşmacıyı öne çıkaran focused spot planlaması.",
  },
  {
    feature: "Nakliye & Kurulum",
    standard: "Anahtar teslim hizmet",
    detail: "Nakliye, kurulum, kablo yönetimi ve söküm tek operasyonda planlanır.",
  },
  {
    feature: "Zemin & Konum",
    standard: "Saha keşfine göre yerleşim",
    detail: "Sahne planı, enerji noktaları ve kablo güzergâhı etkinlik öncesinde netleştirilir.",
  },
];

const TECH_SPECS = [
  {
    feature: "Ekran",
    standard: "21.5\" AMVA LED Panel",
    detail: "1920×1080 Full HD çözünürlük, portre konumda 1080×1920 px kullanım, 25 cd/m² parlaklık, 8ms tepki süresi.",
  },
  {
    feature: "Dokunmatik",
    standard: "10 Nokta Kapasitif",
    detail: "Konuşmacının sunum içeriğini ekran üzerinden kolayca yönetebileceği çoklu dokunmatik teknoloji.",
  },
  {
    feature: "İşlemci",
    standard: "Intel 10. Nesil i5 / i7",
    detail: "DDR4 8GB veya 16GB RAM, 256GB veya 512GB SSD depolama ile güçlü sunum performansı.",
  },
  {
    feature: "İşletim Sistemi",
    standard: "Windows 11 Professional",
    detail: "PowerPoint, Keynote ve tüm sunum yazılımlarıyla tam uyumlu hazır kurulum.",
  },
  {
    feature: "Bağlantı",
    standard: "WiFi & Bluetooth",
    detail: "Kablosuz ağ bağlantısı ve Bluetooth ile uzaktan kumanda, klavye veya fare kullanımı.",
  },
  {
    feature: "Yükseklik Ayarı",
    standard: "Motorize Mekanizma",
    detail: "Elektrikli yükseklik ayarı sayesinde farklı boylardaki konuşmacılara ergonomik uyum sağlar.",
  },
];

const INSTALLATION_STEPS = [
  { title: "Keşif", description: "Mekan planı, sahne düzeni, kamera açısı ve teknik altyapı netleştirilir." },
  { title: "Planlama", description: "Kürsü tipi, konum, mikrofon ve görüntü bağlantısı aynı teknik planda hazırlanır." },
  { title: "Kurulum", description: "Kürsü montajı, kablo yönetimi ve ses-görüntü testi aynı operasyonda yapılır." },
  { title: "Saha Desteği", description: "Etkinlik süresince teknik ekip koordinasyonu ve anlık müdahale imkânı." },
];

const FAQ_ITEMS = [
  {
    q: "Dijital kürsü kiralama nedir?",
    a: "Dijital kürsü; LED ekranlı, şeffaf akrilik veya özel tasarımlı, konuşmacının notlarını ve içeriğini görüntüleyebildiği modern sunum platformudur. Kiralama hizmetimiz nakliye ve kurulum dahildir.",
  },
  {
    q: "Hangi etkinlikler için uygundur?",
    a: "Kurumsal konferanslar, ürün lansmanları, zirve ve paneller, mezuniyet törenleri, basın toplantıları ve protokol etkinlikleri başta olmak üzere konuşmacı odaklı her etkinlikte kullanılabilir.",
  },
  {
    q: "Ses sistemiyle entegre çalışabiliyor mu?",
    a: "Evet. Kondenser kürsü mikrofonu veya yaka mikrofonu mevcut ses sistemine entegre edilebilir. Kablo ve kablosuz seçenekler mevcuttur; ihtiyaca göre teknik planlama yapıyoruz.",
  },
  {
    q: "LED ekranın çözünürlüğü ve boyutu nedir?",
    a: "Dijital kürsüdeki ön LED ekran 1080 yatay × 1920 dikey piksel çözünürlüğünde Full HD dikey formattadır. HDMI veya DisplayPort bağlantısı ile konuşmacı notları, sunum slaytları veya marka içeriği doğrudan bu ekranda görüntülenebilir.",
  },
  {
    q: "Kurulum ve söküm hizmeti var mı?",
    a: "Evet. Nakliye, kurulum, kablo yönetimi ve söküm anahtar teslim olarak sunulmaktadır. Etkinlik tarihine ve lokasyona göre planlama yapıyoruz.",
  },
  {
    q: "İstanbul dışında hizmet veriyor musunuz?",
    a: "Evet. İstanbul başta olmak üzere proje bazlı Türkiye genelinde hizmet verebiliyoruz.",
  },
];

/* ================== Bileşenler ================== */
function GalleryFallback() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="status" aria-label="Galeri yükleniyor">
      {GALLERY_FALLBACK_CARDS.map((item) => (
        <article key={item.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[4/3] bg-slate-100">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              quality={68}
              loading="lazy"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/[0.72] via-slate-950/10 to-transparent" />
            <h3 className="absolute bottom-4 left-4 right-4 text-lg font-black text-white">{item.title}</h3>
          </div>
        </article>
      ))}
      <span className="sr-only">Galeri görselleri yükleniyor.</span>
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[620px] items-start overflow-hidden bg-[#0a1429] pt-8 pb-10 text-white sm:min-h-[680px] md:min-h-[90svh] md:items-center md:pt-20 md:pb-16 lg:pt-20 lg:pb-16"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0">
        <Image
          src="/img/dijital-kursu/dijital-kursu-hero.webp"
          alt="Dijital kürsü kiralama – LED ekranlı sunum kürsüsü gerçek saha kurulumu"
          fill
          priority
          loading="eager"
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
          quality={88}
          blurDataURL={BLUR_DATA_URL}
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1429]/97 via-[#1e3a8a]/88 to-[#0f172a]/94" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(30,58,138,0.38),transparent_44%),radial-gradient(circle_at_82%_13%,rgba(15,23,42,0.42),transparent_40%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.09] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:52px_52px]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-6 md:py-8">
        <nav aria-label="Sayfa yolu" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
            <li><Link className="hover:text-white transition-colors" href="/">Ana Sayfa</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link className="hover:text-white transition-colors" href="/hizmetler">Hizmetler</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white/90 font-semibold">Dijital Kürsü Kiralama</li>
          </ol>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(360px,420px)] xl:items-center 2xl:grid-cols-[minmax(0,1fr)_440px]">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-2.5 shadow-[0_20px_70px_rgba(30,58,138,0.25)] backdrop-blur-xl">
              <div className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
              </div>
              <span className="text-sm font-black tracking-[0.6px] text-white/90">
                DİJİTAL KÜRSÜ • STOK HAZIR • TÜRKİYE GENELİ
              </span>
            </div>

            <h1
              id="hero-title"
              className="mt-7 max-w-4xl text-[50px] font-black leading-[0.94] tracking-[-1.5px] text-white drop-shadow-[0_5px_25px_rgba(0,0,0,0.45)] md:text-[64px] lg:text-[76px] xl:text-[84px]"
            >
              Profesyonel{" "}
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Dijital Kürsü Kiralama
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-[20px] font-semibold leading-[1.4] text-white/[0.94] md:text-[23px]">
              LED ekranlı, şeffaf ve özel tasarım kürsülerle<br className="hidden md:block" />
              ses entegrasyonu ve kurulumu tek elden planlıyoruz.
            </p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-blue-100/80 md:text-lg">
              Konferans, lansman, mezuniyet ve protokol etkinlikleri için nakliye, montaj ve saha teknik desteği dahil anahtar teslim hizmet.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[58px] min-w-[220px] items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] px-9 text-[17px] font-black text-white shadow-[0_20px_55px_rgba(30,64,175,0.45)] transition-all hover:brightness-110 active:scale-[0.985]"
              >
                <MessageCircle className="h-5 w-5 transition group-hover:-rotate-12" />
                HEMEN TEKLİF AL
              </Link>

              <Link
                href="#kursu-tipleri"
                className="group inline-flex h-[58px] min-w-[220px] items-center justify-center gap-3 rounded-3xl border border-white/30 bg-white/[0.06] px-9 text-[17px] font-black text-white backdrop-blur-xl transition-all hover:bg-white/[0.14] active:scale-[0.985]"
              >
                KÜRSÜ TİPLERİNİ İNCELE
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 max-w-2xl sm:gap-6 border-t border-white/10 pt-8">
              <div className="flex flex-col items-start sm:items-center text-left sm:text-center">
                <span className="text-2xl mb-1.5" aria-hidden="true">🎙️</span>
                <div className="text-lg md:text-xl font-black text-white">Ses</div>
                <div className="text-blue-200/70 text-xs md:text-sm font-medium">Entegrasyonu</div>
              </div>
              <div className="flex flex-col items-start sm:items-center text-left sm:text-center border-l border-white/10 pl-3 sm:pl-0 sm:border-l-0">
                <span className="text-2xl mb-1.5" aria-hidden="true">🖥️</span>
                <div className="text-lg md:text-xl font-black text-white">LED</div>
                <div className="text-blue-200/70 text-xs md:text-sm font-medium">İçerik Ekranı</div>
              </div>
              <div className="flex flex-col items-start sm:items-center text-left sm:text-center border-l border-white/10 pl-3 sm:pl-0 sm:border-l-0">
                <span className="text-2xl mb-1.5" aria-hidden="true">🚀</span>
                <div className="text-lg md:text-xl font-black text-white">Anahtar</div>
                <div className="text-blue-200/70 text-xs md:text-sm font-medium">Teslim Kurulum</div>
              </div>
            </div>
          </div>

          <aside className="relative w-full max-w-xl xl:max-w-none xl:justify-self-end mt-4 xl:mt-0" aria-label="Hizmet özeti">
            <div className="absolute -inset-6 rounded-[2.8rem] bg-blue-400/10 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/[0.15] bg-white/[0.07] px-5 py-3.5 backdrop-blur-xl">
                <div>
                  <p className="text-xs font-black uppercase tracking-[1px] text-blue-300">HİZMET ÖZETİ</p>
                  <p className="mt-0.5 text-sm text-blue-200/80">Kürsü tipi, entegrasyon ve kurulum tek planda</p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3.5 py-1 text-xs font-black text-emerald-300">HAZIR STOK</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {HERO_METRICS.map((item, i) => (
                  <div key={i} className="rounded-2xl border border-white/[0.12] bg-white/[0.06] p-5 backdrop-blur-xl">
                    <div className="text-[28px] font-black leading-none text-white">{item.value}</div>
                    <div className="mt-1 text-xs font-black uppercase tracking-widest text-blue-300">{item.suffix}</div>
                    <div className="mt-3 text-sm font-semibold text-blue-200/80">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/[0.12] bg-slate-950/40 p-5 backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-widest text-blue-300">UYUMLU HİZMETLER</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Sahne Kiralama", "LED Ekran", "Ses & Işık", "Kurumsal Org."].map((f, i) => (
                    <span key={i} className="rounded-full border border-white/[0.15] bg-white/[0.07] px-3.5 py-1 text-sm font-black text-white">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function KursuTipleriSection() {
  return (
    <section
      id="kursu-tipleri"
      className="bg-white py-20"
      aria-labelledby="kursu-tipleri-baslik"
    >
      <div className="container mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-black tracking-[1.5px] text-blue-700">
            DOĞRU KÜRSÜYÜ SEÇİN
          </div>
          <h2
            id="kursu-tipleri-baslik"
            className="text-4xl font-black tracking-tight text-gray-950 md:text-5xl lg:text-6xl"
          >
            Hangi Dijital Kürsü Size Uygun?
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-700 md:text-xl">
            Dijital kürsü seçiminde kürsü tipi kadar etkinlik formatı, kamera açısı, ses entegrasyonu ve sahne konsepti de belirleyicidir.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {KURSU_TIPLERI.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.imgAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={78}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <span className="absolute bottom-3 left-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-white backdrop-blur-sm">
                  {item.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-black tracking-tight text-gray-950">{item.title}</h3>
                <dl className="mt-6 space-y-5 text-sm leading-6 text-gray-700">
                  <div>
                    <dt className="font-black text-gray-950">Önerilen kullanım</dt>
                    <dd className="mt-1">{item.usage}</dd>
                  </div>
                  <div>
                    <dt className="font-black text-gray-950">Seçim mantığı</dt>
                    <dd className="mt-1">{item.sizing}</dd>
                  </div>
                  <div className="border-t border-slate-200 pt-5">
                    <dt className="font-black text-gray-950">Avantaj</dt>
                    <dd className="mt-1">{item.advantage}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0a1429] py-20 text-white"
      aria-labelledby="entegrasyon-baslik"
    >
      <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" aria-hidden="true" />
      <div className="absolute left-[-10rem] top-8 h-80 w-80 rounded-full bg-[#1e3a8a]/25 blur-[110px]" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.35fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-blue-300">Teknik entegrasyon</p>
            <h2 id="entegrasyon-baslik" className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Dijital Kürsü Teknik Entegrasyon Standartları
            </h2>
            <div className="mt-6 space-y-5 rounded-3xl border border-white/[0.14] bg-slate-950/55 p-5 text-base leading-8 text-slate-100 shadow-[0_22px_70px_rgba(0,0,0,0.28)] backdrop-blur-md md:p-6 md:text-lg">
              <p>
                Dijital kürsü, sahne kurgusunun bir parçası olarak planlanır. Ses sistemi entegrasyonu,
                LED ekrandan içerik aktarımı ve kamera açısına göre konum belirlenmesi etkinlik öncesinde
                teknik planda netleştirilir.
              </p>
              <p>
                Kürsü bağlantıları;{" "}
                <Link href="/ses-isik-sistemleri" className="font-black text-white underline underline-offset-4">ses ve ışık sistemleri</Link>,{" "}
                <Link href="/led-ekran-kiralama" className="font-black text-white underline underline-offset-4">LED ekran</Link>{" "}
                ve{" "}
                <Link href="/sahne-kiralama" className="font-black text-white underline underline-offset-4">sahne kiralama</Link>{" "}
                ile aynı teknik planda yönetildiğinde operasyon süresi kısalır, saha sürprizi azalır.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {INTEGRATION_ITEMS.map((item) => (
              <article
                key={item.feature}
                className="rounded-3xl border border-white/[0.14] bg-white/[0.08] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.22)] backdrop-blur-md"
              >
                <p className="text-xs font-black uppercase tracking-widest text-blue-300">{item.feature}</p>
                <h3 className="mt-3 text-xl font-black text-white">{item.standard}</h3>
                <p className="mt-5 text-sm leading-6 text-cyan-50/[0.76]">{item.description ?? item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechSpecsSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0a1429] py-20 text-white"
      aria-labelledby="teknik-ozellikler-baslik"
    >
      <div
        className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:46px_46px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-cyan-400/[0.18] blur-[90px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm font-black uppercase tracking-widest text-cyan-200">
            HAGEL TD5000XD • Türk Mühendisliği Tasarımı
          </p>
          <h2
            id="teknik-ozellikler-baslik"
            className="mt-3 text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white"
          >
            Dijital Kürsü Teknik Özellikleri
          </h2>
          <p className="text-xl text-cyan-50/[0.78] max-w-3xl mx-auto leading-relaxed">
            Kiralama filomuzda yer alan dijital kürsünün donanım ve yazılım özellikleri.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TECH_SPECS.map((row) => (
            <article
              key={row.feature}
              className="rounded-3xl border border-white/[0.14] bg-white/[0.07] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md"
            >
              <p className="text-sm font-black uppercase tracking-wider text-cyan-200">
                {row.feature}
              </p>
              <h3 className="mt-3 text-2xl font-black text-white">{row.standard}</h3>
              <p className="mt-4 text-sm leading-6 text-cyan-50/[0.74]">{row.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/[0.14] bg-white/[0.06] shadow-xl">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-base">
              <thead className="bg-white/[0.10] text-white">
                <tr>
                  <th className="px-6 py-4 font-bold">Özellik</th>
                  <th className="px-6 py-4 font-bold">Değer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {TECH_SPECS.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.08]">
                    <td className="px-6 py-4 font-semibold text-white">{row.feature}</td>
                    <td className="px-6 py-4 text-cyan-50/[0.78]">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="bg-slate-50 py-16" aria-labelledby="galeri-baslik" id="galeri">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-blue-700">Saha kanıtı</p>
            <h2 id="galeri-baslik" className="mt-3 text-3xl font-black leading-tight text-gray-950 md:text-5xl">
              Gerçek Saha Kurulumlarından Görseller
            </h2>
          </div>
          <p className="text-base leading-8 text-gray-700 md:text-lg">
            Kurumsal etkinlik, lansman ve konferanslarda kullandığımız dijital kürsülerden gerçek saha görüntüleri.
          </p>
        </div>

        <CaseGallery images={GALLERY_IMAGES} visibleCount={3} priorityCount={2} />

        <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <h4 className="text-xl font-black text-gray-950">Daha fazla saha görseli için proje galerisini inceleyebilirsiniz.</h4>
            <p className="mt-2 text-sm leading-6 text-gray-600">Tamamlanan etkinlik ve kurumsal organizasyon projeleri galeri sayfasında yer alır.</p>
          </div>
          <Link
            href="/projeler"
            className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-blue-700 px-7 py-3 font-black text-white shadow-lg transition hover:bg-blue-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
          >
            <Eye className="mr-2 h-5 w-5" aria-hidden="true" />
            Proje Galerisini Aç
          </Link>
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/95" aria-labelledby="kullanim-baslik">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="kullanim-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Kullanım{" "}
            <span className="gradient-text gradient-text--safe-xl">Alanları</span>
          </h2>
          <p className="text-xl text-white/[0.85] max-w-3xl mx-auto leading-relaxed">
            Dijital kürsü kiralamanın en çok tercih edildiği etkinlik formatları
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full" aria-hidden="true" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" role="list">
          {USE_CASES.map((uc) => (
            <div
              key={uc.text}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 group hover:scale-105"
              role="listitem"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="text-3xl bg-white/20 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {uc.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors">{uc.text}</h3>
                  <p className="text-white/70 text-lg leading-relaxed">{uc.desc}</p>
                  <Link
                    href={uc.href}
                    className="mt-5 inline-flex min-h-[44px] items-center rounded-xl border border-white/[0.18] bg-white/[0.08] px-4 py-2 text-sm font-black text-cyan-100 transition hover:bg-white/[0.14] hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
                  >
                    {uc.linkLabel}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden rounded-3xl aspect-[21/8]">
          <Image
            src="/img/dijital-kursu/dijital-kursu-saha-1.webp"
            alt="Dijital kürsü kurumsal etkinlik kurulumu gerçek saha görüntüsü"
            fill
            sizes="100vw"
            className="object-cover"
            quality={85}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/75 via-gray-950/25 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-14">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-blue-300 mb-2">Saha Kaydı</p>
              <p className="text-white font-black text-2xl md:text-3xl max-w-sm leading-snug">
                Dijital kürsü — konuşmacıyı sahnenin odağına taşır
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstallationProcess() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white" aria-labelledby="kurulum-sureci-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="kurulum-sureci-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Kurulum <span className="text-white/90">Süreci</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Keşiften söküme dijital kürsü kurulum operasyonunun adımları.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto mb-10">
          {[
            { src: "/img/dijital-kursu/dijital-kursu-hero.webp", alt: "Dijital kürsü gerçek saha kurulumu mavi ışık" },
            { src: "/img/dijital-kursu/dijital-kursu-saha-1.webp", alt: "Dijital kürsü kurumsal etkinlik kurulumu" },
            { src: "/img/dijital-kursu/dijital-kursu-saha-2.webp", alt: "Dijital kürsü konferans salon kurulumu" },
            { src: "/img/dijital-kursu/dijital-kursu-saha-1.webp", alt: "Dijital kürsü profesyonel kurulum detayı" },
          ].map((photo, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" quality={78} loading="lazy" />
              <div className="absolute inset-0 bg-white/[0.04]" />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {INSTALLATION_STEPS.map((step, index) => (
            <article key={step.title} className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-500">
              <div className="text-3xl font-black text-white mb-4">{String(index + 1).padStart(2, "0")}</div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-blue-100 text-base leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="py-20 bg-white" aria-labelledby="sss-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm font-black uppercase tracking-widest text-blue-700 mb-4">Sık sorulan sorular</p>
          <h2 id="sss-baslik" className="text-4xl md:text-5xl font-black text-gray-950 mb-6">
            Dijital Kürsü Kiralama SSS
          </h2>
        </div>

        <div className="space-y-4" role="list">
          {FAQ_ITEMS.map((faq, index) => (
            <article key={faq.q} role="listitem">
              <details className="group bg-gray-50 rounded-3xl border-2 border-transparent transition-all duration-500 hover:bg-gray-100 open:bg-gray-100 open:border-blue-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer w-full list-none text-left flex items-center justify-between gap-4 px-8 py-6 text-xl font-bold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-3xl">
                  <span className="pr-4 flex-1">{faq.q}</span>
                  <span aria-hidden="true" className="ml-4 transition-transform duration-300 text-blue-600 bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 group-open:rotate-180">⌄</span>
                </summary>
                <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-300 px-8 pb-0">
                  <div className="overflow-hidden text-gray-700 leading-relaxed text-lg pt-0 group-open:pt-2 group-open:pb-6">
                    <p className="pl-4 border-l-4 border-blue-500">{faq.a}</p>
                  </div>
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="teklif" className="py-20 bg-gradient-to-b from-white to-slate-50" aria-labelledby="teklif-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)]">
          <div className="relative bg-[#0a1429] px-6 py-8 text-white md:px-10">
            <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" aria-hidden="true" />
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#1e3a8a]/30 blur-[90px]" aria-hidden="true" />
            <div className="relative z-10">
              <p className="text-sm font-black uppercase tracking-widest text-white/70">HIZLI TEKLİF</p>
              <h2 id="teklif-baslik" className="mt-3 text-3xl font-black md:text-5xl">
                Dijital Kürsü Teklifi Alın
              </h2>
              <p className="mt-3 text-base leading-7 text-white/75 max-w-xl">
                Aşağıdaki bilgileri paylaşın; aynı gün içinde net fiyat ve kurulum planı iletilsin.
              </p>
            </div>
          </div>

          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3 p-6 gap-4">
            {[
              "Şehir / İlçe",
              "Etkinlik tarihi",
              "Kürsü tipi (LED / şeffaf / logolu)",
              "Adet ihtiyacı",
              "Ses sistemi entegrasyonu (evet/hayır)",
              "Ek ihtiyaçlar (sahne / LED ekran / ses-ışık)",
            ].map((x) => (
              <div key={x} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
                <p className="font-semibold text-gray-900 text-sm">{x}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 px-6 py-6 md:px-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p className="text-sm font-semibold leading-6 text-gray-700">
              İlgili hizmetler:{" "}
              <Link className="font-bold text-blue-700 hover:text-blue-900" href="/sahne-kiralama">Sahne</Link> •{" "}
              <Link className="font-bold text-blue-700 hover:text-blue-900" href="/ses-isik-sistemleri">Ses & Işık</Link> •{" "}
              <Link className="font-bold text-blue-700 hover:text-blue-900" href="/led-ekran-kiralama">LED Ekran</Link> •{" "}
              <Link className="font-bold text-blue-700 hover:text-blue-900" href="/kurumsal-organizasyon">Kurumsal Org.</Link>
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <Link
                href={WHATSAPP}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-blue-700 px-6 py-3 font-black text-white shadow-lg transition hover:bg-blue-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                WhatsApp Teklif
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-900 shadow-sm transition hover:border-blue-300 hover:text-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                Ara
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== PAGE ================== */
export default function Page() {
  return (
    <main>
      <StructuredData />
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", url: ORIGIN },
          { name: "Hizmetler", url: `${ORIGIN}/hizmetler` },
          { name: "Dijital Kürsü Kiralama", url: PAGE_URL },
        ]}
      />

      <Hero />
      <KursuTipleriSection />
      <IntegrationSection />
      <TechSpecsSection />
      <Gallery />
      <UseCasesSection />
      <InstallationProcess />
      <FAQ />
      <ServiceBlogLinks
        links={[
          { href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026", label: "Kurumsal Etkinlik Planlama Rehberi 2026" },
          { href: "/blog/etkinlik-teknik-kesif-ve-planlama-rehberi", label: "Etkinlik Teknik Keşif ve Planlama Rehberi" },
        ]}
      />
      <Offer />
    </main>
  );
}

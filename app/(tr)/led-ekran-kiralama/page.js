// app/led-ekran-kiralama/page.jsx

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import VideoEmbed from "@/components/VideoEmbed.client";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import { getLastModifiedForFile } from "@/lib/seoLastModified";
import {
  Monitor,
  Sun,
  Shield,
  Zap,
  Settings,
  MessageCircle,
  CheckCircle,
  Layout,
  ArrowRight,
  Camera,
  Layers,
  Activity,
  Users,
  Music,
  Briefcase,
  Tent,
  Tv,
  Headphones,
  Cpu,
  Eye,
  Truck,
  Lock,
  RotateCcw,
  Gauge,
} from "lucide-react";

/* ================== Sabitler ================== */
export const revalidate = 1800;
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");
const ORIGIN = SITE_URL;
const PAGE_LAST_MODIFIED = getLastModifiedForFile("app/(tr)/led-ekran-kiralama/page.js", "2026-01-14");
const ORGANIZATION_ID = `${SITE_URL}/#org`;
const LOCAL_BUSINESS_ID = `${SITE_URL}/#local`;
const PHONE = "+905453048671";
const WA_TEXT = "Merhaba, LED ekran kiralama projemiz için profesyonel teklif almak istiyoruz. Etkinlik türü: [Konser/Fuar/Düğün], Tarih: [Tarih], Şehir: [Şehir].";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(WA_TEXT)}`;

const getServiceWhatsappLink = (title) => {
  const text = `Merhaba, ${title} hizmeti için detaylı bilgi ve fiyat teklifi almak istiyorum. Etkinlik tarihi: [gg.aa.yyyy], mekân: [iç/dış], tahmini ekran ölçüsü: [xx m2]`;
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`;
};

// Base64 blur placeholder
const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== Dinamik galeri (CaseGallery) ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div className="flex justify-center items-center h-64" role="status" aria-label="Galeri yükleniyor">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" aria-hidden="true" />
      <span className="sr-only">Galeri yükleniyor...</span>
    </div>
  )
});
/*fiyat*/
const PRICE_MULTIPLIERS = {
  "P2.5": 1.5,
  "P2.9": 1.2,
  "P3.9": 1.0,
  "P4.8": 0.8,
};

/* ================== META ================== */
export const metadata = {
  title: "LED Ekran Kiralama | İç & Dış Mekan Profesyonel Çözümler",
  description:
    "İç mekan P2.5/P2.9, dış mekan P3.9 LED ekran kiralama. Konser ve fuarlar için yüksek parlaklık, IP65 dayanıklılık, uzman kurulum ve hızlı teslimat hizmeti.",
  keywords:
    "led ekran kiralama, p2.9 led ekran, p2.5 led ekran, p3.9 led ekran, led wall kiralama, video wall kiralama, outdoor led ekran, indoor led ekran, konser led ekran",
  alternates: { canonical: `${ORIGIN}/led-ekran-kiralama` },
  openGraph: {
    title: "LED Ekran Kiralama | P2.9 & P3.9 LED Wall – Sahneva",
    description:
      "İç mekanda P2.5/P2.9, dış mekanda P3.9 LED ekran kiralama. Yüksek parlaklık, IP65 koruma ve profesyonel kurulum/söküm ekibi.",
    url: `${ORIGIN}/led-ekran-kiralama`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/hizmet-led-ekran.webp`,
        width: 1200,
        height: 630,
        alt: "LED ekran kiralama – sahnede profesyonel LED wall kurulumu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Ekran Kiralama | P2.9 & P3.9 LED Wall – Sahneva",
    description:
      "P2.5/P2.9 indoor, P3.9 outdoor LED ekran kiralama. Konser, fuar ve kurumsal etkinliklerde yüksek parlaklık ve uzman kurulum.",
    images: [`${ORIGIN}/img/hizmet-led-ekran.webp`],
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

/* ================== Yardımcılar & Sabitler ================== */
const slugify = (s) =>
  String(s)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " ve ")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const HERO = {
  src: "/img/hizmet-led-ekran.webp",
  alt: "Profesyonel LED ekran kurulumu - Konser sahnesinde büyük LED wall ve görsel şov",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const SERVICES = [
  {
    Icon: Monitor,
    title: "İç Mekan LED Ekranlar",
    description: "P2.5-P2.9 piksel aralığı ile yüksek çözünürlüklü iç mekan çözümleri",
    features: ["P2.5/P2.9 piksel", "800-1500 nit parlaklık", "4K çözünürlük", "Hızlı kurulum"],
    cta: { label: "Detaylı Bilgi", href: getServiceWhatsappLink("İç Mekan LED Ekranlar") },
  },
  {
    Icon: Sun,
    title: "Dış Mekan LED Ekranlar",
    description: "P3.9 piksel aralığı ve yüksek parlaklık ile açık hava çözümleri",
    features: ["P3.9 piksel", "5000-6500+ nit", "IP65 su geçirmez", "UV dayanıklı"],
    cta: { label: "Teklif Al", href: getServiceWhatsappLink("Dış Mekan LED Ekranlar") },
  },
  {
    Icon: Layers,
    title: "Video Wall Sistemleri",
    description: "Modüler yapıda esnek video wall ve kreatif ekran çözümleri",
    features: ["Modüler tasarım", "Esnek konfigürasyon", "Yüksek yenileme hızı", "Profesyonel kontrol", "Kavisli tasarım (-10°/+10°)"],
    cta: { label: "Kreatif Çözüm Planla", href: getServiceWhatsappLink("Video Wall Sistemleri") },
  },
  {
    Icon: Cpu,
    title: "Kontrol & Yayın Sistemleri",
    description: "Profesyonel video işleme, kontrol ve canlı yayın sistemleri",
    features: ["Novastar işlemciler", "4K scaler", "Medya sunucular", "Canlı yayın", "3840Hz yenileme hızı"],
    cta: { label: "Yayın Desteği", href: getServiceWhatsappLink("Kontrol & Yayın Sistemleri") },
  },
  {
    Icon: Zap,
    title: "Kurulum & Rigging",
    description: "Profesyonel kurulum, truss sistemleri ve güvenlik çözümleri",
    features: ["Ground stack", "Truss rigging", "Güvenlik sistemleri", "Hızlı montaj", "Click-lock hızlı kilit"],
    cta: { label: "Kurulum Planı", href: getServiceWhatsappLink("Kurulum & Rigging") },
  },
  {
    Icon: Headphones,
    title: "Operatör & Teknik Destek",
    description: "Deneyimli operatörler ve 7/24 teknik destek hizmeti",
    features: ["Profesyonel operatör", "İçerik yönetimi", "7/24 teknik destek", "Acil müdahale"],
    cta: { label: "Operatör Talep Et", href: getServiceWhatsappLink("Operatör & Teknik Destek") },
  },
];

const USE_CASES = [
  {
    Icon: Music,
    text: "Konser, festival ve sahne performansları",
    desc: "Ana sahne LED ekranları ve yan ekran çözümleri"
  },
  {
    Icon: Briefcase,
    text: "Kurumsal lansman ve toplantılar",
    desc: "Profesyonel sunum ve marka gösterimi"
  },
  {
    Icon: Tent,
    text: "Fuar, sergi ve ticari etkinlikler",
    desc: "Stand tasarımı ve etkileşimli ekranlar"
  },
  {
    Icon: Activity,
    text: "Spor etkinlikleri ve stadyumlar",
    desc: "Dev ekranlar ve skorboard sistemleri"
  },
  {
    Icon: Tv,
    text: "AVM ve perakende mekanları",
    desc: "Reklam ve bilgilendirme ekranları"
  },
  {
    Icon: Camera,
    text: "Düğün ve özel davetler",
    desc: "Fotoğraf/video gösterimi ve canlı yayın"
  },
];

const FAQ_ITEMS = [
  {
    q: "LED ekran kiralama fiyatları nasıl belirlenir?",
    a: "LED ekran kiralama fiyatları; ekranın toplam metrekaresi, tercih edilen piksel aralığı (P2.5, P2.9, P3.9), kurulumun iç veya dış mekan olması, kiralama süresi ve kurulumun yapılacağı şehrin uzaklığına göre hesaplanır. Sahneva olarak şeffaf fiyatlandırma ve en iyi teknoloji garantisi sunuyoruz."
  },
  {
    q: "İç mekan (Indoor) ve Dış mekan (Outdoor) LED ekran arasındaki fark nedir?",
    a: "Temel fark parlaklık ve dayanıklılıktır. İç mekan ekranlar 800-1500 nit parlaklık sunarken, dış mekan ekranlar güneş ışığında görünürlük için 5000-6500 nit parlaklığa ve IP65 su geçirmezlik korumasına sahiptir. Ayrıca dış mekan modellerinde piksel aralığı genellikle daha geniştir (P3.9, P4.8)."
  },
  {
    q: "LED ekran kurulumu ne kadar sürer?",
    a: "Standart bir 15-30 m² LED ekran kurulumu, teknik ekibimiz tarafından yaklaşık 2-4 saat içinde tamamlanır. Kurulum sonrasında renk kalibrasyonu ve görüntü testleri yapılarak sistem operatörümüze teslim edilir."
  },
  {
    q: "Etkinliğim için hangi çözünürlüğü seçmeliyim?",
    a: "Eğer izleyiciler ekrana 3 metreden daha yakınsa P2.5, 5 metre ve üzeri mesafelerde P2.9 veya P3.9 idealdir. Lansman ve sunum ağırlıklı projelerde yüksek piksel yoğunluğu (P2.5) metin okunabilirliği için kritiktir."
  },
];

function FAQ() {
  return (
    <section className="py-20 bg-white" aria-labelledby="sss-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 id="sss-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Sık Sorulan <span className="text-blue-700">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            LED ekran kiralama hakkında merak edilen sorular ve cevapları
          </p>
        </div>

        <div className="space-y-4" role="list" aria-label="Sık sorulan sorular listesi">
          {FAQ_ITEMS.map((faq, index) => {
            const panelId = `faq-panel-${index}`;
            const headingId = `faq-heading-${index}`;

            return (
              <article key={faq.q} role="listitem">
                <details
                  className="group bg-gray-50 rounded-3xl border-2 border-transparent transition-all duration-500 hover:bg-gray-100 open:bg-gray-100 open:border-blue-100 [&_summary::-webkit-details-marker]:hidden"
                  id={panelId}
                  aria-labelledby={headingId}
                >
                  <summary
                    id={headingId}
                    className="cursor-pointer w-full list-none text-left flex items-center justify-between gap-4 px-8 py-6 text-xl font-bold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-3xl"
                  >
                    <span className="pr-4 flex-1">{faq.q}</span>
                    <span
                      aria-hidden="true"
                      className="ml-4 transition-transform duration-300 text-blue-600 bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 group-open:rotate-180"
                    >
                      ⌄
                    </span>
                  </summary>

                  <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-300 px-8 pb-0">
                    <div className="overflow-hidden text-gray-700 leading-relaxed text-lg pt-0 group-open:pt-2 group-open:pb-6">
                      <p className="pl-4 border-l-4 border-blue-500">{faq.a}</p>
                    </div>
                  </div>
                </details>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla sorunuz mu var? Uzman ekibimiz sizi arayıp bilgilendirsin.
          </p>
          <Link
            href="/sss"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
            aria-label="Sık Sorulan Sorular sayfasındaki tüm soruları görüntüle"
          >
            <ArrowRight size={20} aria-hidden="true" className="mr-3" />
            <span className="text-lg">Tüm SSS'yi Görüntüle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== HERO ================== */
function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-20 pb-14 md:pb-16 lg:pt-24" aria-labelledby="hero-title">
      <div className="absolute inset-0">
        <Image 
          src={HERO.src} 
          alt={HERO.alt} 
          fill 
          priority 
          className="object-cover"
          sizes={HERO.sizes}
          quality={65}
          fetchPriority="high"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-800/70 to-blue-950/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-purple-900/60" aria-hidden="true" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/30 mb-6">
          <span className="relative flex w-2 h-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full w-2 h-2 bg-green-500" />
          </span>
          <span className="text-sm font-bold text-white">Türkiye Geneli Profesyonel Hizmet</span>
        </div>

        <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 drop-shadow-2xl">
          Profesyonel <span className="text-blue-200">LED Ekran Kiralama</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/95 max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed font-light mb-4">
          Konser • Fuar • Lansman • Festival • Kurumsal Etkinlikler
        </p>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl 2xl:max-w-3xl mx-auto leading-relaxed font-normal mb-6">
          P2.5-P3.9 piksel aralığı, 4K çözünürlük ve yüksek parlaklık ile 
          <span className="font-semibold text-white"> profesyonel görsel çözümler</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp üzerinden hemen teklif alın"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-600 shadow-lg"
          >
            <MessageCircle size={20} aria-hidden="true" className="mr-2" />
            <span className="text-base">Hemen Teklif Al</span>
          </Link>

          <Link
            href="#hizmetler"
            aria-label="Hizmetlerimiz hakkında daha fazla bilgi edinin"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white/40 text-white bg-white/20 backdrop-blur-lg hover:bg-white/30 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-lg"
          >
            <Monitor size={20} aria-hidden="true" className="mr-2" />
            <span className="text-base">Hizmetlerimiz</span>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <div className="mb-2 text-yellow-300"><CheckCircle size={24} aria-hidden="true" /></div>
            <div className="text-xl font-black text-white">4.9/5</div>
            <div className="text-white/80 text-sm">2 Doğrulanmış Değerlendirme</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <div className="mb-2 text-blue-300"><Users size={24} aria-hidden="true" /></div>
            <div className="text-xl font-black text-white">300+</div>
            <div className="text-white/80 text-sm">Proje</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <div className="mb-2 text-green-300"><Truck size={24} aria-hidden="true" /></div>
            <div className="text-xl font-black text-white">81 İl</div>
            <div className="text-white/80 text-sm">Hizmet</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== Hizmetler ================== */
function Services() {
  return (
    <section id="hizmetler" className="py-20 bg-gradient-to-b from-white to-blue-50/50" aria-labelledby="hizmetler-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="hizmetler-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Profesyonel <span className="text-blue-700">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            LED ekran kiralama hizmetlerimiz: teknik danışmanlık, kurulum, operasyon ve 7/24 destek
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {SERVICES.map((service, index) => {
            const id = `svc-${slugify(service.title)}`;
            const delayClass = `animation-delay-${index * 100}`;
            return (
              <div key={id} className="group">
                <article
                  className={`bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl p-8 group-hover:scale-105 transition-all duration-500 h-full flex flex-col animate-fade-up ${delayClass}`}
                  aria-labelledby={id}
                >
                  <div className="mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    <service.Icon size={36} aria-hidden="true" />
                  </div>
                  <h3 id={id} className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0" aria-hidden="true" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.cta && (
                    <div className="mt-8">
                      <Link
                        href={service.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        aria-label={`${service.title} için ${service.cta.label}`}
                      >
                        <ArrowRight size={18} aria-hidden="true" />
                        <span>{service.cta.label}</span>
                      </Link>
                    </div>
                  )}
                </article>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
          >
            <MessageCircle size={20} aria-hidden="true" className="mr-3" />
            <span>Detaylı Teklif için İletişime Geçin</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
/* ================== Galeri ================== */
const GALLERY_IMAGES = [
  { 
    src: "/img/galeri/led-ekran-kiralama-1.webp", 
    alt: "Konser sahnesinde kurulmuş büyük LED ekran, kalabalık önünde canlı performans gösterimi" 
  },
  { 
    src: "/img/galeri/led-ekran-kiralama-2.webp", 
    alt: "Kurumsal etkinlikte kullanılan LED ekran, sunum sırasında profesyonel aydınlatma ile aydınlatılmış" 
  },
  { 
    src: "/img/galeri/led-ekran-kiralama-3.webp",
    alt: "Açık hava festivalinde yüksek parlaklıklı LED ekran, gün ışığında net görüntü" 
  },
  { 
    src: "/img/galeri/led-ekran-kiralama-4.webp",
    alt: "Fuar standında kullanılan video wall sistemi, marka tanıtımı için optimize edilmiş" 
  },
  { 
    src: "/img/galeri/led-ekran-kiralama-5.webp", 
    alt: "Stadyumda dev LED ekran, spor etkinliği sırasında canlı skor ve görüntüler" 
  },
  { 
    src: "/img/galeri/led-ekran-kiralama-6.webp", 
    alt: "Düğün organizasyonunda LED ekran, canlı fotoğraf ve video gösterimi" 
  },
  { 
    src: "/img/galeri/led-ekran-kiralama-7.webp", 
    alt: "TV stüdyosunda kullanılan profesyonel LED ekran, canlı yayın için optimize edilmiş" 
  },
  { 
    src: "/img/galeri/led-ekran-kiralama-8.webp",
    alt: "Alışveriş merkezinde reklam LED ekranı, yüksek trafikli alanda marka gösterimi" 
  },
];

const VIDEO_GALLERY = [
  {
    id: "1R5Av0x5ouA",
    title: "LED Ekran Kurulum ve Sahne Prodüksiyonu",
    description: "Dar zamanlarda bile eksiksiz kurulum: sahne prodüksiyonundan canlı yayına hazır hâle getirme sürecini izleyin.",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "JNzGlNzNRuk",
    title: "LED Ekran Kurulum Süreci",
    description: "Click-lock sistemiyle hızlı montaj, sıfır gecikme: etkinlik başlamadan ekranınız test edilmiş ve yayında.",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "j1Tr5l8DVW8",
    title: "Güneş Altında Yüksek Performanslı Dış Mekan Uygulaması",
    description: "6500 nit parlaklıkla tam güneş ışığında bile kristal netlik: dış mekan etkinliklerinizde görüntü sorunu yaşamazsınız.",
    uploadDate: "2026-01-15T00:00:00+03:00",
  },
  {
    id: "HNDZ-wYVKLw",
    title: "LED Ekran Kurulum Detayları",
    description: "Kablolama karmaşasına son: optimize edilmiş altyapı ve hızlı görüntü ayarıyla sahne anında hazır.",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "173gBurWSRQ",
    title: "Etkinlik LED Ekran Örnekleri",
    description: "Konser, kurumsal gala, fuar: her etkinlik tipinde sorunsuz çalışan LED ekran kurulumlarından gerçek örnekler.",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
];

function Gallery() {
  return (
    <section className="py-14 bg-white" aria-labelledby="galeri-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="galeri-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Proje <span className="text-blue-700">Galerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gerçekleştirdiğimiz başarılı LED ekran kurulumlarından örnekler
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <CaseGallery images={GALLERY_IMAGES} visibleCount={8} priorityCount={2} />
        </div>

        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Video <span className="text-blue-700">Galerisi</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Gerçek kurulumlarımızdan seçilmiş kısa videolar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {VIDEO_GALLERY.map((video) => (
              <article
                key={video.id}
                className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                aria-labelledby={`video-${video.id}-title`}
              >
                <div className="relative w-full aspect-video bg-black">
                  <VideoEmbed
                    videoId={video.id}
                    title={video.title}
                    thumbnailUrl={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  />
                </div>
                <div className="p-5">
                  <h4
                    id={`video-${video.id}-title`}
                    className="text-lg font-bold text-gray-900 mb-2"
                  >
                    {video.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed line-clamp-2">{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla projemizi incelemek için galerimizi keşfedin
          </p>
          <Link
            href="/projeler"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300"
          >
            <Eye size={20} aria-hidden="true" className="mr-3" />
            <span>Tüm Projeleri Görüntüle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Teknik Karşılaştırma Tablosu ================== */
function TechnicalComparison() {
  return (
    <div className="max-w-5xl mx-auto mt-12">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 bg-gray-50">
          <h3 className="text-xl md:text-2xl font-black text-gray-900">
            Piksel Aralığı ve İzleme Mesafesi Karşılaştırması
          </h3>
          <p className="text-gray-600 mt-1">
            Doğru piksel seçimi, görüntü netliği ve bütçe optimizasyonu için kritik öneme sahiptir.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white border-b border-gray-100">
                <th className="px-6 py-4 font-bold text-gray-900">Model</th>
                <th className="px-6 py-4 font-bold text-gray-900">Netlik Düzeyi</th>
                <th className="px-6 py-4 font-bold text-gray-900">Maliyet Endeksi</th>
                <th className="px-6 py-4 font-bold text-gray-900">Önerilen Mesafe</th>
                <th className="px-6 py-4 font-bold text-gray-900">Yenileme Hızı</th>
                <th className="px-6 py-4 font-bold text-gray-900">Kullanım Alanı</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-semibold text-gray-900">P2.5</td>
                <td className="px-6 py-4 text-gray-700">Ultra High HD</td>
                <td className="px-6 py-4 text-gray-700">💰💰💰💰</td>
                <td className="px-6 py-4 text-gray-700">2.5m ve üzeri</td>
                <td className="px-6 py-4 font-semibold text-blue-700">3840Hz</td>
                <td className="px-6 py-4 text-gray-700">Lansman, fuar, yakın izleme</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-semibold text-gray-900">P2.9</td>
                <td className="px-6 py-4 text-gray-700">High Definition</td>
                <td className="px-6 py-4 text-gray-700">💰💰💰</td>
                <td className="px-6 py-4 text-gray-700">3m ve üzeri</td>
                <td className="px-6 py-4 font-semibold text-blue-700">3840Hz</td>
                <td className="px-6 py-4 text-gray-700">İç mekan etkinlikler, hibrit kullanım</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">P3.9</td>
                <td className="px-6 py-4 text-gray-700">Standard HD</td>
                <td className="px-6 py-4 text-gray-700">💰💰</td>
                <td className="px-6 py-4 text-gray-700">4m ve üzeri</td>
                <td className="px-6 py-4 font-semibold text-blue-700">3840Hz</td>
                <td className="px-6 py-4 text-gray-700">Dış mekan, konser, festival</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ================== Teknik Altyapı ================== */
function Technical() {
  const technicalItems = [
    {
      category: "piksel",
      title: "Piksel Teknolojileri",
      description: "P2.5-P3.9 piksel aralığı ile her ihtiyaca uygun çözümler",
      Icon: Eye,
      features: ["P2.5: İç mekan premium", "P3.9: Hibrit kullanım", "P4: Dış mekan standart", "P4.8: Uzak mesafe (opsiyon)"]
    },
    {
      category: "parlaklik",
      title: "Parlaklık & Görünürlük",
      description: "Ortam koşullarına göre optimize edilmiş parlaklık seviyeleri",
      Icon: Sun,
      features: ["İç mekan: 800-1500 nit", "Dış mekan: 3500-6500 nit", "Otomatik parlaklık", "Güneş altında netlik"]
    },
    {
      category: "koruma",
      title: "Koruma Sistemleri",
      description: "IP65 su geçirmez koruma ve dayanıklı yapı",
      Icon: Shield,
      features: ["IP65 ön koruma", "IP54 arka koruma", "UV dayanıklı malzeme", "Toz geçirmez yapı", "Flip-shield köşe koruması"]
    },
    {
      category: "kontrol",
      title: "Kontrol Sistemleri",
      description: "Profesyonel video işleme ve kontrol sistemleri",
      Icon: Settings,
      features: ["Novastar işlemciler", "4K video scaling", "Medya sunucular", "Uzaktan kontrol", "3840Hz flicker-free yenileme"]
    },
    {
      category: "kurulum",
      title: "Kurulum Sistemleri",
      description: "Hızlı ve güvenli kurulum için özel sistemler",
      Icon: Zap,
      features: ["Ground stack", "Truss rigging", "Motorlu asma sistem", "Hızlı kilit mekanizması", "Click-lock tek kişilik kurulum", "Pinch n' Go modül değişim"]
    },
    {
      category: "destek",
      title: "Teknik Destek",
      description: "7/24 teknik destek ve acil müdahale hizmetleri",
      Icon: Headphones,
      features: ["7/24 teknik destek", "Yedek modül stoğu", "Acil müdahale ekibi", "Uzaktan diagnostik"]
    }
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="altyapi-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 id="altyapi-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Teknik <span className="text-blue-700">Altyapımız</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En son teknoloji LED ekranlar ve profesyonel teknik altyapı ile hizmetinizdeyiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {technicalItems.map((item) => (
            <div key={item.category} className="group">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <h3 className="font-black text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors flex items-center gap-3">
                  <span className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    <item.Icon size={28} aria-hidden="true" />
                  </span>
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-2 text-base leading-relaxed">
                  {item.description}
                </p>
                <details className="mt-4 rounded-xl border border-gray-100 bg-gray-50/50 p-4">
                  <summary className="cursor-pointer select-none font-semibold text-gray-900">
                    Detayları gör
                  </summary>
                  <ul className="mt-3 space-y-2">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" aria-hidden="true" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          ))}
        </div>

        <TechnicalComparison />
      </div>
    </section>
  );
}

/* ================== İstatistik Bant (Kompakt) ================== */
function StatsBand() {
  const stats = [
    { value: "300+", label: "Başarılı Proje" },
    { value: "50+", label: "Kurumsal Müşteri" },
    { value: "81 İL", label: "Kendi Araçlarımızla Hızlı Kurulum" },
    { value: "5+", label: "Yıl Deneyim" },
  ];

  return (
    <section className="py-10 bg-[#0B1120]" aria-label="Başarı İstatistiklerimiz">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s) => (
            <article
              key={s.label}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
            >
              <div className="text-3xl font-black text-white">{s.value}</div>
              <div className="text-sm text-white/70 mt-1">{s.label}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Neden Sahneva? ================== */
function WhySahneva() {
  const features = [
    {
      Icon: Shield,
      title: "Flip-shield Köşe Koruması",
      description:
        "Panellerin hassas köşelerini koruyan otomatik mekanizma sayesinde kurulum sırasında piksel hasarı riski sıfıra iner.",
    },
    {
      Icon: RotateCcw,
      title: "Kavisli Tasarım (-10° / +10°)",
      description:
        "İçbükey veya dışbükey kavisli ekranlar oluşturabilme esnekliğiyle sahnenize derinlik ve estetik katıyoruz.",
    },
    {
      Icon: Lock,
      title: "Click-lock Hızlı Kurulum",
      description:
        "Özel kilit mekanizması sayesinde tek kişiyle çok kısa sürede güvenli kurulum. Prodüksiyonda zaman ve iş gücü tasarrufu.",
    },
    {
      Icon: Zap,
      title: "Pinch n' Go Modül Değişimi",
      description:
        "Herhangi bir teknik aksaklıkta modüller saniyeler içinde değiştirilebilir; canlı yayın sırasında kesintisiz görüntü garantisi.",
    },
    {
      Icon: Gauge,
      title: "3840Hz Kamera Dostu Performans",
      description:
        "Yüksek yenileme hızı ve gri skala derinliği sayesinde TV çekimlerinde ve canlı yayınlarda ekranda titreme (flicker) oluşmaz.",
    },
    {
      Icon: Activity,
      title: "Türkiye Geneli 81 İl Hizmet",
      description:
        "Uzman teknik ekibimiz kurulumdan söküme kadar her aşamada yanınızda; sorunsuz operasyonel süreç garantisi.",
    },
  ];

  return (
    <section
      id="neden-sahneva"
      className="py-20 bg-gradient-to-b from-blue-50/50 to-white"
      aria-labelledby="neden-sahneva-baslik"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2
            id="neden-sahneva-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Teknik <span className="text-blue-700">Üstünlüğümüz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unilumin URMIII serisi paneller ve entegre sahne deneyimiyle rakipsiz prodüksiyon kalitesi
          </p>
          <div
            className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"
            aria-hidden="true"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <article
                className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl p-8 group-hover:scale-105 transition-all duration-500 h-full flex flex-col"
                aria-labelledby={`why-${slugify(feature.title)}`}
              >
                <div className="mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-700 group-hover:scale-110 transition-transform duration-300">
                  <feature.Icon size={28} aria-hidden="true" />
                </div>
                <h3
                  id={`why-${slugify(feature.title)}`}
                  className="text-xl font-black text-gray-900 mb-3 group-hover:text-blue-700 transition-colors"
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </article>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
            aria-label="Unilumin URMIII teknolojisi hakkında detaylı bilgi ve teklif alın"
          >
            <MessageCircle size={20} aria-hidden="true" className="mr-3" />
            <span>Teknik Danışmanlık Alın</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================== Kullanım Alanları ================== */
function UseCases() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/95" aria-labelledby="kullanim-alanlari-baslik">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="kullanim-alanlari-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Kullanım <span className="text-blue-300">Alanları</span>
          </h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            LED ekran çözümlerimizin tercih edildiği başlıca etkinlik türleri ve özel çözümlerimiz
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
                <div className="text-white bg-white/20 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                  <uc.Icon size={28} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors">
                    {uc.text}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
          >
            <MessageCircle size={20} aria-hidden="true" className="mr-3" />
            <span>Etkinliğiniz için Özel Çözüm Alın</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Bilgi & Rehber ================== */
function Articles() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/50" aria-labelledby="bilgi-rehber-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 id="bilgi-rehber-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            LED Ekran Kiralama <span className="text-blue-700">Rehberi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Etkinliğiniz için doğru LED ekranı seçmek, kurulum sürecini planlamak ve bütçeyi optimize etmek için kapsamlı rehber
          </p>
        </div>

        <article className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              LED Ekran Kiralama: Etkinliklerde Yüksek Etki İçin Doğru Planlama
            </h3>
            <p className="text-blue-100 mt-4 text-lg md:text-xl leading-relaxed">
              Konserden fuara, kurumsal lansmandan düğüne kadar her organizasyonda güçlü görsel iletişim için profesyonel çözümler
            </p>
          </header>

          <div className="p-8 md:p-10">
            <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:mt-4 prose-ul:mb-6 prose-li:marker:text-blue-500">
              <h4>LED Ekran Kiralama Nedir?</h4>
              <p>
                <strong>LED ekran kiralama</strong>, kısa veya orta süreli etkinlikler için yüksek görüntü kalitesi sunan LED ekran sistemlerinin
                kurulum, operasyon ve teknik destek dahil şekilde proje bazlı temin edilmesidir. Satın alma maliyeti olmadan profesyonel ekipman
                kullanmanıza olanak tanır.
              </p>

              <h4>Neden LED Ekran Kiralama Tercih Edilmeli?</h4>
              <p>
                Dönemsel organizasyonlarda kalıcı yatırım yerine kiralama modeli, maliyet ve operasyon açısından çok daha esnek bir çözüm sunar.
                Doğru planlama ile hem izleyici deneyimi artar hem de teknik riskler minimuma iner.
              </p>
              <ul>
                <li>Yüksek satın alma maliyetinden kaçınma</li>
                <li>Etkinliğe uygun m² ve piksel aralığı seçebilme</li>
                <li>Kurulum, söküm ve teknik operasyonun tek ekipten alınması</li>
                <li>İç mekan ve dış mekan için farklı parlaklık/koruma alternatifleri</li>
              </ul>

              <h4>İç Mekan ve Dış Mekan LED Ekran Farkı</h4>
              <p>
                İç mekan LED ekranlarda (P2.5 / P2.9) yakın izleme mesafesine uygun netlik ön plandadır. Dış mekan LED ekranlarda (P3.9 ve üzeri)
                ise güneş altında görünürlük, IP koruma sınıfı ve dayanıklılık kritik rol oynar.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl p-6 my-6">
                <h5 className="font-black text-blue-700 text-lg mb-3">Kamera Dostu Performans: 3840Hz Yenileme Hızı</h5>
                <p className="text-gray-700 mb-0">
                  Unilumin URMIII panellerinin 3840Hz yenileme hızı, televizyon çekimlerinde ve canlı yayınlarda
                  ekranda <strong>titreme (flicker) oluşmasını engeller</strong>. Yüksek gri skala derinliği sayesinde kamera
                  karşısında profesyonel bir görüntü elde edilir.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 rounded-r-2xl p-6 mb-8">
                <h5 className="font-black text-green-700 text-lg mb-3">Flip-shield ile Sıfır Piksel Hasarı Garantisi</h5>
                <p className="text-gray-700 mb-0">
                  Unilumin URMIII teknolojisindeki <strong>Flip-shield köşe koruma mekanizması</strong>, kurulum sırasında
                  panellerin en hassas noktaları olan köşeleri otomatik olarak korur. Bu sayede piksel hasarı riski
                  sıfıra iner ve kusursuz görüntü kalitesi garanti edilir.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-6 my-8">
                <h5 className="font-black text-blue-700 text-xl mb-3">Hızlı Teknik Seçim İpucu</h5>
                <p className="text-gray-700 mb-0">
                  İzleyici ekrana ne kadar yakınsa piksel aralığı o kadar küçük olmalıdır. Yakın mesafede P2.5/P2.9; orta-uzak mesafede P3.9/P4
                  tercih edilerek daha net ve dengeli görüntü elde edilir.
                </p>
              </div>
              <h4>Neden Fiyatlar Değişiyor?</h4>
<p>
  LED ekran kiralama fiyatlarında en belirleyici unsur piksel hassasiyetidir. P2.5 gibi düşük piksel aralıklı ekranlar,
  izleyicinin ekrana yakın olduğu projelerde kusursuz netlik sunar; ancak birim m² maliyeti daha yüksektir.
  P3.9 ve üzeri modeller ise geniş alanlarda maliyet avantajı sağlar.
</p>
<p>
  Özetle, m² arttıkça birim fiyat avantajı oluşabilir; fakat seçilecek piksel aralığı toplam proje bedelini belirgin şekilde etkiler.
</p>                    

              <h4>LED Ekran Kiralama Fiyatlarını Neler Etkiler?</h4>
              <ul>
                <li>Toplam ekran alanı (m²)</li>
                <li>Piksel aralığı (P2.5, P2.9, P3.9, P4)</li>
                <li>İç mekan / dış mekan tercihi</li>
                <li>Kiralama süresi (günlük, haftalık, proje bazlı)</li>
                <li>Kurulum zorluğu, rigging ve teknik ekip sayısı</li>
                <li>Canlı yayın, reji ve kamera entegrasyon ihtiyaçları</li>
              </ul>

              <h4>Kurulum Süreci Nasıl İlerler?</h4>
              <p>
                Profesyonel süreç; keşif, projelendirme, kurulum, test-kalibrasyon ve etkinlik anı teknik destek adımlarından oluşur. Bu yapı,
                yayın sırasında kesinti riskini azaltır ve içerik akışının sorunsuz ilerlemesini sağlar.
              </p>

              <h4>Hangi Etkinliklerde Kullanılır?</h4>
              <ul>
                <li>Konser, festival ve sahne performansları</li>
                <li>Kurumsal toplantı ve lansmanlar</li>
                <li>Fuar, sergi ve tanıtım organizasyonları</li>
                <li>Düğün, özel davet ve canlı yayın prodüksiyonları</li>
                <li>AVM ve perakende alanlarında reklam gösterimleri</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-6 mt-8">
                <h5 className="font-black text-yellow-700 text-lg mb-3">Sonuç</h5>
                <p className="text-yellow-800 mb-0">
                  Doğru planlanan bir <strong>LED ekran kiralama</strong> hizmeti, etkinliğinizin görsel etkisini artırır, marka algısını güçlendirir
                  ve katılımcı deneyimini belirgin şekilde iyileştirir. İhtiyaca uygun teknik seçim + uzman operasyon = başarılı etkinlik.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

/* ================== Tamamlayıcı Hizmetler ================== */
function RelatedServices() {
  const services = [
    { 
      href: "/ses-isik-sistemleri", 
      title: "Ses & Işık Sistemleri", 
      Icon: Music, 
      desc: "Line Array ses sistemleri ve akıllı robot ışık tasarımı ile profesyonel prodüksiyon" 
    },
    { 
      href: "/sahne-kiralama", 
      title: "Sahne Kiralama", 
      Icon: Layers, 
      desc: "Modüler sahne sistemleri, güvenli truss yapıları ve estetik sahne dekor uygulamaları" 
    },
    { 
      href: "/podyum-kiralama", 
      title: "Podyum Kiralama", 
      Icon: Layout, 
      desc: "Profesyonel sahne platformları ve podyum sistemleri" 
    },
    { 
      href: "/cadir-kiralama", 
      title: "Çadır Kiralama", 
      Icon: Tent, 
      desc: "Profesyonel etkinlik çadırları ve tenteli alan çözümleri" 
    },
    {
      href: getServiceWhatsappLink("Kamera & Reji"),
      title: "Kamera & Reji",
      Icon: Camera,
      desc: "Çok kameralı canlı yayın reji hizmetleri ve anlık görüntü miksajı",
      external: true,
    },
  ];
  
  return (
    <section 
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-100/30" 
      aria-labelledby="tamamlayici-hizmetler-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            id="tamamlayici-hizmetler-baslik" 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Tamamlayıcı{" "}
            <span className="text-blue-700">
              Hizmetlerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            LED ekran kurulumunuzu tamamlayacak diğer profesyonel etkinlik çözümlerimiz
          </p>
          <div 
            className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full" 
            aria-hidden="true" 
          />
        </div>

        <nav aria-label="Tamamlayıcı hizmetler">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                {...(service.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 text-center focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white h-full flex flex-col"
                aria-label={`${service.title} - ${service.desc}`}
              >
                <div 
                  className="mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" 
                  aria-hidden="true"
                >
                  <service.Icon size={36} />
                </div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-4 flex-grow">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </nav>

        <div className="sr-only">
          <p>
            Bu bölümde LED ekran kurulumunuzu tamamlayacak diğer hizmetlerimiz bulunmaktadır. 
            Her bir hizmet kartına tıklayarak veya klavye ile seçerek ilgili sayfaya gidebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 bg-white" aria-labelledby="cta-baslik">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
          <div className="relative z-10">
            <h2 id="cta-baslik" className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Profesyonel LED Ekran Çözümlerine Hazır Mısınız?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Türkiye'nin 81 ilinde kendi araçlarımız ve uzman ekibimizle hızlı kurulum yapıyoruz. Ücretsiz keşif, profesyonel danışmanlık ve
              rekabetçi fiyat garantisi ile hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-white shadow-lg"
              >
                <MessageCircle size={20} aria-hidden="true" className="mr-3" />
                <span className="text-lg">Hemen Teklif Al</span>
              </Link>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white shadow-lg"
              >
                <MessageCircle size={20} aria-hidden="true" className="mr-3" />
                <span className="text-lg">WhatsApp'tan Yaz</span>
              </a>
            </div>

            <p className="mt-5 text-sm md:text-base text-blue-100/90">
              Fiyatlar <strong>başlayan fiyatlarla</strong> sunulmaktadır; proje kapsamı, m², piksel aralığı ve şehir/lojistik koşullarına göre değişebilir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
/* ================== JSON-LD (LED Ekran Kiralama) — FINAL ================== */
function JsonLd() {
  const pageUrl = `${ORIGIN}/led-ekran-kiralama`;
  const pageDescription = metadata.description;

  const providerRef = {
    "@id": ORGANIZATION_ID,
  };

  const localBusinessRef = { "@id": LOCAL_BUSINESS_ID };

  const ratingNodeId = `${pageUrl}#rating`;

  const ratingNode = {
    "@type": "AggregateRating",
    "@id": ratingNodeId,
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "2",
    itemReviewed: localBusinessRef,
  };

  const serviceNode = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "LED Ekran Kiralama",
    description: pageDescription,
    serviceType: "LED Ekran Kiralama Hizmeti",
    url: pageUrl,
    provider: providerRef,
    areaServed: {
      "@type": "State",
      name: "Türkiye",
      description:
        "Türkiye'nin 81 ilinde profesyonel LED ekran kiralama hizmeti",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "TRY",
      lowPrice: "1800",
      highPrice: "2800",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
    aggregateRating: {
      "@id": ratingNodeId,
    },
  };

  const productNode = {
    "@type": "Product",
    "@id": `${pageUrl}#product`,
    name: "İç ve Dış Mekan LED Ekran Kiralama",
    description:
      "İç mekanda P2.5/P2.9, dış mekanda P3.9 piksel aralığıyla 4K çözünürlük ve yüksek parlaklık sunan profesyonel LED ekran kiralama hizmeti. Konser, fuar, festival ve kurumsal etkinlikler için uzman kurulum.",
    category: "EventLedScreenRental",
    image: `${ORIGIN}/img/hizmet-led-ekran.webp`,
    brand: providerRef,
    url: pageUrl,
    isRelatedTo: {
      "@id": `${pageUrl}#service`,
    },
    aggregateRating: {
      "@id": ratingNodeId,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "TRY",
      lowPrice: "1800",
      highPrice: "2800",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  };

  const webpageSchema = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: metadata.title,
    description: pageDescription,
    url: pageUrl,
    inLanguage: "tr-TR",
    mainEntity: {
      "@id": `${pageUrl}#service`,
    },
    hasPart: VIDEO_GALLERY.map((video, index) => ({
      "@id": `${pageUrl}#video-${index + 1}`,
    })),
    isPartOf: {
      "@id": `${ORIGIN}#website`,
    },
    about: {
      "@id": `${pageUrl}#service`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${ORIGIN}/img/hizmet-led-ekran.webp`,
      width: 1200,
      height: 630,
      caption: "Sahneva — Profesyonel LED Ekran Kiralama Hizmetleri",
    },
    datePublished: "2024-01-01",
    dateModified: PAGE_LAST_MODIFIED,
    author: providerRef,
  };

  const eventServiceSchema = {
    "@type": "Service",
    "@id": `${pageUrl}#eventservice`,
    name: "Etkinlik LED Ekran Kiralama Hizmeti",
    description:
      "Konser, festival, fuar, kurumsal lansman ve özel etkinlikler için LED ekran çözümleri.",
    serviceType: USE_CASES.map((uc) => uc.text),
    provider: providerRef,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Türkiye",
    },
  };

  const videoObjects = VIDEO_GALLERY.map((video, index) => ({
    "@type": "VideoObject",
    "@id": `${pageUrl}#video-${index + 1}`,
    name: video.title,
    description: video.description,
    uploadDate: video.uploadDate ?? undefined,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    inLanguage: "tr-TR",
    isFamilyFriendly: true,
    publisher: providerRef,
    about: {
      "@id": `${pageUrl}#service`,
    },
    mainEntityOfPage: {
      "@id": `${pageUrl}#webpage`,
    },
  }));

  const reviews = [
    {
      "@type": "Review",
      "@id": `${pageUrl}#review-1`,
      itemReviewed: { "@id": `${pageUrl}#product` },
      author: { "@type": "Person", name: "Kurumsal Müşteri" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody:
        "Lansman etkinliğimizde kullanılan LED ekranlar çok parlak ve netti. Kurulum ve yayın süreci sorunsuz ilerledi.",
      datePublished: "2024-02-10",
    },
    {
      "@type": "Review",
      "@id": `${pageUrl}#review-2`,
      itemReviewed: { "@id": `${pageUrl}#product` },
      author: { "@type": "Person", name: "Etkinlik Ajansı" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody:
        "Açık hava festivalinde gün ışığında bile LED ekran parlaklığı çok iyiydi. Teknik ekip hızlı ve profesyoneldi.",
      datePublished: "2024-03-05",
    },
  ];

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webpageSchema,
      serviceNode,
      productNode,
      eventServiceSchema,
      ratingNode,
      ...videoObjects,
      ...reviews,
      faqSchema,
    ],
  };

  return (
    <script
      id="ld-json-led-ekran"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ================== Sayfa Bileşeni ================== */
export default function Page() {
  const baseUrl = SITE_URL;
  const canonical = `${baseUrl}/led-ekran-kiralama`;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Hizmetler", url: `${baseUrl}/hizmetler` },
    { name: "LED Ekran Kiralama", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <JsonLd />
      <Hero />
      <StatsBand />
      <Services />
      <Gallery />
      <Technical />
      <WhySahneva />
      <UseCases />
      <Articles />
      <FAQ />
      <RelatedServices />
      <ServiceBlogLinks
        links={[
          { href: "/blog/led-ekran-teknoloji-trendleri-2026", label: "2026 LED Ekran Teknoloji Trendleri" },
          {
            href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
            label: "2026 Kurumsal Etkinlik Planlama Rehberi",
          },
        ]}
      />
      <CTA />
    </>
  );
}

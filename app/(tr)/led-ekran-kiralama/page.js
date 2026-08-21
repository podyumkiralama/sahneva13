// app/led-ekran-kiralama/page.jsx

import { YEARS_OF_EXPERIENCE } from "@/lib/experience";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildAlternatesForPath } from "@/lib/seo/alternates";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";
import AccessibleFaq from "@/components/AccessibleFaq.client";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import { CONTENT_CLUSTERS } from "@/lib/seo/contentClusters";
import { VIDEO_DURATIONS, getVideoEntities } from "@/lib/seo/projectVideoFacts";
import JsonLdScript from "@/components/seo/JsonLd";
import PageHero from "@/components/PageHero";
import { getLastModifiedForFile } from "@/lib/seoLastModified";
import { buildImageGallerySchema } from "@/lib/structuredData/imageGallery";
import ServiceDecisionGuide from "@/components/ServiceDecisionGuide.client";
import { SERVICE_DECISION_GUIDES } from "@/lib/serviceDecisionGuides";
import {
  Monitor,
  Sun,
  Shield,
  Zap,
  Settings,
  MessageCircle,
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
  FileText,
  Download,
} from "lucide-react";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { WEBSITE_ID } from "@/lib/seo/schemaIds";
import { PROJECTS_COMPLETED, PROVINCES_COUNT } from "@/lib/stats";

/* ================== Sabitler ================== */
export const revalidate = 86400;
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");
const ORIGIN = SITE_URL;
const P19_PROOF_IMAGE_SRC =
  "/img/led/300m2-p19-indoor-led-ekran-kurumsal-etkinlik-sahneva.webp";
const P19_PROOF_DISPLAY_IMAGE_SRC =
  "/img/led/300m2-p19-indoor-led-ekran-kurumsal-etkinlik-sahneva-display.webp";
const P19_TECHNICAL_CONTROL_IMAGE_SRC =
  "/img/led/p19-indoor-led-teknik-masa-kurumsal-konferans-sahneva.webp";
const LED_CORPORATE_CONFERENCE_ASIDE_IMAGE_SRC =
  "/img/led/kurumsal-konferans-led-ekran-sahne-isik-sahneva-aside.webp";
const LED_CORPORATE_CONFERENCE_CARD_IMAGE_SRC =
  "/img/led/kurumsal-konferans-led-ekran-sahne-isik-sahneva-card.webp";
const LED_HYBRID_LAUNCH_IMAGE_SRC =
  "/img/led/led-wall-urun-lansmani-hybrid-sahneva.webp";
const LED_BALLROOM_LAUNCH_IMAGE_SRC =
  "/img/led/led-ekran-fuar-lansman-salon-kurulumu-sahneva.webp";
const LED_GALA_STAGE_IMAGE_SRC =
  "/img/led/gala-led-sahne-video-wall-sahneva.webp";
const LED_GALA_STAGE_HERO_DESKTOP_IMAGE_SRC =
  "/img/led/gala-led-sahne-video-wall-sahneva-hero-desktop.webp";
const LED_GALA_STAGE_HERO_TABLET_IMAGE_SRC =
  "/img/led/gala-led-sahne-video-wall-sahneva-hero-tablet.webp";
const LED_GALA_STAGE_HERO_MOBILE_IMAGE_SRC =
  "/img/led/gala-led-sahne-video-wall-sahneva-hero-mobile.webp";
const LED_OUTDOOR_CONCERT_IMAGE_SRC =
  "/img/led/acik-hava-konser-led-ekran-sahneva.webp";
// Yalnızca kullanım alanına göre önceden boyutlandırılmış varyantlar optimizer'ı atlar.
// 1600px'lik ham kaynak görseller Next optimizer'dan geçerek srcset ile küçültülür.
const PREMIUM_LED_IMAGE_SRCS = new Set([
  P19_PROOF_DISPLAY_IMAGE_SRC,
  LED_CORPORATE_CONFERENCE_ASIDE_IMAGE_SRC,
  LED_CORPORATE_CONFERENCE_CARD_IMAGE_SRC,
  LED_GALA_STAGE_HERO_DESKTOP_IMAGE_SRC,
  LED_GALA_STAGE_HERO_TABLET_IMAGE_SRC,
  LED_GALA_STAGE_HERO_MOBILE_IMAGE_SRC,
]);
const shouldBypassLedImageOptimizer = (src) => PREMIUM_LED_IMAGE_SRCS.has(src);
const PAGE_LAST_MODIFIED = getLastModifiedForFile(
  "app/(tr)/led-ekran-kiralama/page.js",
  "2026-01-14"
);
const PAGE_PUBLISHED_DATE = "2025-10-25";
const ORGANIZATION_ID = `${SITE_URL}/#org`;
const ABSEN_P19_TECHNICAL_PDF =
  "/files/absen-p19-kavisli-led-on-teknik-ozellikler-en.pdf";
const CURVED_P19_INSTALLATION_IMAGES = [
  {
    src: "/img/led/absen-p19-kavisli-led-depo-on-montaj-sahneva.webp",
    alt: "Absen P1.9 kavisli LED kabinetlerinin depoda kurulum öncesi yarım daire formunda test dizilimi",
    eyebrow: "Depo ön montajı",
    title: "Kavis geometrisi kontrolü",
    caption:
      "Absen P1.9 kabinetleri sahaya çıkmadan önce hedeflenen kavis formunda dizilerek mekanik birleşim ve yüzey sürekliliği kontrol edildi.",
    positionClass: "object-center",
  },
  {
    src: "/img/led/absen-p19-kavisli-led-sahne-ust-bant-halka-sahneva.webp",
    alt: "Etkinlik sahnesinde Absen P1.9 kavisli üst LED bant ve dairesel asılı LED ekran kurulumu",
    eyebrow: "Saha uygulaması",
    title: "Kavisli üst bant ve LED halka",
    caption:
      "Kavisli üst bant ve dairesel LED halka, ana sahne ekranıyla birlikte kullanıldı.",
    positionClass: "object-top",
  },
  {
    src: "/img/led/absen-p19-kavisli-led-acik-hava-teknik-prova-sahneva.webp",
    alt: "Açık hava etkinlik sahnesinde Absen P1.9 kavisli LED ekran kurulumu ve teknik prova",
    eyebrow: "Teknik prova",
    title: "İçerik ve görüntü testi",
    caption:
      "Test deseniyle ekran geometrisi, görüntü akışı ve sahne bütünlüğü etkinlik öncesinde kontrol edildi.",
    positionClass: "object-center",
  },
];
const PHONE = "+905453048671";
const WA_TEXT = "Merhaba, LED ekran kiralama projemiz için profesyonel teklif almak istiyoruz. Etkinlik türü: [Konser/Fuar/Düğün], Tarih: [Tarih], Şehir: [Şehir].";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(WA_TEXT)}`;

const getServiceWhatsappLink = (title) => {
  const text = `Merhaba, ${title} hizmeti için teknik değerlendirme ve teklif almak istiyorum. Etkinlik tarihi: [gg.aa.yyyy], mekân: [iç/dış], tahmini ekran ölçüsü: [xx m2]`;
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`;
};

const LED_PIXEL_ROWS = [
  {
    model: "P1.9",
    badge: "Yeni Premium Envanter",
    badgeClass: "bg-violet-100 text-violet-700",
    clarity: "Ultra Fine Pixel",
    detailIndex: "●●●●●",
    detailText: "En yüksek çözünürlük düzeyi",
    distance: "1.9 m ve Üzeri",
    refreshRate: "3840 Hz",
    usage: "Lansman, Fuar, Gala, Konferans ve Yakın İzleme",
  },
  {
    model: "P2.6",
    badge: "Yüksek Çözünürlük Dengesi",
    badgeClass: "bg-purple-100 text-purple-700",
    clarity: "Ultra High HD",
    detailIndex: "●●●●",
    detailText: "Yüksek çözünürlük düzeyi",
    distance: "2.6 m ve Üzeri",
    refreshRate: "3840 Hz",
    usage: "Lansman, Fuar ve Yakın İzleme Sunumları",
  },
  {
    model: "P2.9",
    badge: "En dengeli seçim",
    badgeClass: "bg-violet-100 text-violet-700",
    clarity: "High Definition",
    detailIndex: "●●●",
    detailText: "Dengeli çözünürlük düzeyi",
    distance: "3 m ve Üzeri",
    refreshRate: "3840 Hz",
    usage: "İç Mekan Etkinlikleri ve Hibrit Kullanım",
  },
  {
    model: "P3.9",
    badge: "En çok tercih edilen",
    badgeClass: "bg-green-100 text-green-700",
    clarity: "Standard HD",
    detailIndex: "●●",
    detailText: "Standart çözünürlük düzeyi",
    distance: "4 m ve Üzeri",
    refreshRate: "3840 Hz",
    usage: "Dış Mekan, Konser ve Festival Sahneleri",
  },
];

/* ================== META ================== */
export const metadata = {
  title: "LED Ekran Kiralama İstanbul | Indoor & Outdoor",
  description:
    "İstanbul ve Türkiye genelinde LED ekran kiralama. 300 m² Absen P1.9 indoor, Unilumin P2.6/P2.9 ve P3.9 paneller; kurulum, NovaStar reji ve teknik ekip.",
  keywords:
    "led ekran kiralama, p1.9 led ekran, kavisli led ekran kiralama, p2.9 led ekran, p2.6 led ekran, p3.9 led ekran, led wall kiralama, video wall kiralama, outdoor led ekran, indoor led ekran, konser led ekran",
  alternates: buildAlternatesForPath("/led-ekran-kiralama"),
  openGraph: {
    title: "LED Ekran Kiralama İstanbul | Indoor & Outdoor LED Wall",
    description:
      "İstanbul ve Türkiye genelinde iç ve dış mekan LED wall kurulumları. 300 m² Absen P1.9, Unilumin P2.6/P2.9, NovaStar reji ve teknik ekip desteği.",
    url: `${ORIGIN}/led-ekran-kiralama`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}${P19_PROOF_IMAGE_SRC}`,
        width: 1600,
        height: 739,
        alt: "LED ekran kiralama İstanbul iç ve dış mekan LED wall kurulumu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Ekran Kiralama İstanbul | İç & Dış Mekan LED Wall Çözümleri",
    description:
      "İstanbul ve Türkiye genelinde iç mekan, dış mekan, LED wall ve video wall kiralama çözümleri.",
    images: [`${ORIGIN}${P19_PROOF_IMAGE_SRC}`],
  },
  robots: AI_PREVIEW_ROBOTS,
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
  src: LED_GALA_STAGE_HERO_DESKTOP_IMAGE_SRC,
  tabletSrc: LED_GALA_STAGE_HERO_TABLET_IMAGE_SRC,
  mobileSrc: LED_GALA_STAGE_HERO_MOBILE_IMAGE_SRC,
  alt: "İstanbul LED ekran kiralama hizmeti için kurumsal sahnede LED wall, ses, ışık ve teknik reji kurulumu",
};

const SERVICES = [
  {
    Icon: Monitor,
    title: "İç Mekan LED Ekranlar",
    description: "Absen P1.9 ile Unilumin P2.6 ve P2.9 seçenekleriyle lansman, fuar, gala ve konferanslarda yakın izleme mesafesine uygun indoor LED ekran kurulumları.",
    features: ["Absen P1.9", "Unilumin P2.6 / P2.9", "300 m² Absen P1.9 Envanteri", "Yakın İzleme Netliği"],
    cta: { label: "Detaylı Bilgi" },
  },
  {
    Icon: Sun,
    title: "Dış Mekan LED Ekranlar",
    description: "P3.9 dış mekan LED ekranlarla konser, festival, belediye etkinliği ve açık hava organizasyonlarında yüksek parlaklık ve güvenilir görüntü.",
    features: ["P3.9 Piksel Aralığı", "5000 - 6500+ Nit Parlaklık", "IP65 Hava Koşullarına Dayanıklılık", "UV Korumalı Panel Yapısı"],
    cta: { label: "Teklif Al" },
  },
  {
    Icon: Layers,
    title: "Video Wall Sistemleri",
    description: "Modüler LED wall ve video wall kurulumlarında görüntü kontrolü, NovaStar görüntü işlemcisi, teknik reji ve kreatif ekran tasarımı birlikte planlanır.",
    features: ["Modüler tasarım", "Esnek konfigürasyon", "Yüksek yenileme hızı", "Profesyonel kontrol", "Kavisli tasarım (-10°/+10°)"],
    cta: { label: "Kreatif Çözüm Planla" },
  },
  {
    Icon: Cpu,
    title: "Kontrol & Yayın Sistemleri",
    description: "Profesyonel video işleme, kontrol ve canlı yayın sistemleri",
    features: ["NovaStar Görüntü İşlemcileri", "4K Scaler Altyapısı", "Medya Sunucuları", "Canlı Yayın Entegrasyonu", "3840 Hz Yenileme Hızı"],
    cta: { label: "Yayın Desteği" },
  },
  {
    Icon: Zap,
    title: "Kurulum & Rigging",
    description: "Profesyonel kurulum, truss sistemleri ve güvenlik çözümleri",
    features: ["Ground Stack Kurulum", "Truss ve Rigging Sistemleri", "Güvenlik ve Kilitleme Donanımları", "Hızlı Montaj Avantajı", "Click-Lock Güvenli Kilit Teknolojisi"],
    cta: { label: "Kurulum Planı" },
  },
  {
    Icon: Headphones,
    title: "Operatör & Teknik Destek",
    description: "Deneyimli operatörler ve 7/24 teknik destek hizmeti",
    features: ["Profesyonel Reji ve Ekran Operatörü", "Anlık İçerik ve Reji Yönetimi", "7/24 Teknik Destek Planı", "Hızlı Müdahale Protokolü"],
    cta: { label: "Operatör Talep Et" },
  },
];

const USE_CASES = [
  {
    Icon: Music,
    title: "Konser ve Festival Alanları",
    desc: "Devasa LED duvarlar ile canlı performansı en arka sıradaki izleyiciye bile yüksek netlikte ulaştırıyoruz."
  },
  {
    Icon: Briefcase,
    title: "Ürün Lansmanları ve Kurumsal Toplantılar",
    desc: "P1.9 indoor LED altyapısıyla yakın izleme mesafesinde ürün detaylarını, sunum içeriklerini ve kurumsal marka mesajınızı yüksek çözünürlükle sahneye taşıyoruz."
  },
  {
    Icon: Tent,
    title: "Fuar ve Stant Organizasyonları",
    desc: "Kreatif ekran tasarımlarıyla stant alanınızdaki ziyaretçi trafiğini ve marka etkileşimini artırıyoruz."
  },
  {
    Icon: Tv,
    title: "Açık Hava Reklamcılığı",
    desc: "Şehir meydanlarında ve AVM önlerinde, güneş ışığında bile yüksek görünürlük sunan ekranlarla hedef kitlenize doğrudan ulaşıyoruz."
  },
  {
    Icon: Users,
    title: "Belediye ve Kamu Etkinlikleri",
    desc: "Milli bayramlar, törenler ve kutlamalarda IP65 dış mekan ekranlarımızla güvenilir görsel çözüm sunuyoruz."
  },
  {
    Icon: Camera,
    title: "Düğün, Nişan ve Özel Davetler",
    desc: "Hayatınızın en özel anlarını canlı yayın ve estetik görsel şovlar ile unutulmaz bir prodüksiyona dönüştürüyoruz."
  },
  {
    Icon: Activity,
    title: "Spor Organizasyonları",
    desc: "Stadyumlarda anlık skorboard entegrasyonu ve reklam alanları ile spor heyecanını dev ekranlara taşıyoruz."
  },
  {
    Icon: Headphones,
    title: "Canlı Yayın ve Stüdyo Uygulamaları",
    desc: "3840 Hz yenileme hızıyla profesyonel kameralarda tarama çizgisi riskini azaltan, yayın standartlarına uygun arka plan çözümleri sağlıyoruz."
  }
];

const QUICK_SELECTION_SCENARIOS = [
  {
    title: "Lansman ve fuar standı",
    recommendation: "P1.9 / P2.6",
    detail: "Yakın izleme ve sunum netliği için 300 m² Absen P1.9 indoor LED envanterimizle yüksek çözünürlüklü iç mekan panel çözümleri önerilir.",
  },
  {
    title: "Kurumsal etkinlik ve hibrit sahne",
    recommendation: "P1.9 / P2.9",
    detail: "Salon içi kullanımda yakın izleme netliği, içerik akışı ve teknik operasyon birlikte planlanır.",
  },
  {
    title: "Konser, festival ve açık hava",
    recommendation: "P3.9",
    detail: "Açık havada görünürlük, geniş alan etkisi ve dış mekan dayanımı öne çıkar.",
  },
];

const ARTICLE_SECTIONS = [
  { id: "led-ekran-nedir", label: "LED ekran kiralama nedir?" },
  { id: "neden-tercih-edilir", label: "Neden tercih edilir?" },
  { id: "ic-dis-mekan-farki", label: "İç / dış mekan farkı" },
  { id: "kurulum-sureci", label: "Kurulum süreci" },
  { id: "kullanim-senaryolari", label: "Hangi etkinliklerde kullanılır?" },
  { id: "istanbul-kurulum-sureci", label: "İstanbul operasyon süreci" },
];

const FAQ_ITEMS = [
  {
    q: "P1.9 indoor LED ekran hangi etkinliklerde kullanılır?",
    a: "P1.9 Indoor LED ekran; lansman, fuar, gala, konferans, üst düzey kurumsal toplantı ve yakın izleme mesafesi gerektiren salon kurulumlarında tercih edilir. Sahneva'nın 300 m² genişliğindeki Absen P1.9 Indoor LED envanteri, yakın izleme mesafesinde yüksek çözünürlüklü görüntü ve özmal altyapı gücü sağlar."
  },
  {
    q: "İç Mekan (Indoor) ve Dış Mekan (Outdoor) LED Ekran Arasındaki Fark Nedir?",
    a: "Temel fark parlaklık ve dayanıklılıktır. İç mekan ekranlar 800-1500 nit parlaklık sunarken, dış mekan ekranlar güneş ışığında görünürlük için 5000-6500 nit parlaklığa ve IP65 su geçirmezlik korumasına sahiptir. Ayrıca dış mekan modellerinde piksel aralığı genellikle daha geniştir (P3.9, P4.8)."
  },
  {
    q: "Kadıköy, Şişli veya Beşiktaş gibi merkezi ilçelerde acil kurulum mümkün mü?",
    a: "Evet, İstanbul içi operasyonlarımızda her iki yakadaki depolarımız sayesinde, acil taleplerde trafiğe takılmadan aynı gün veya birkaç saat içinde mobil ekiplerimizle hızlı kurulum yapabiliyoruz. Erken saatte mobilize olarak İstanbul trafiğine yakalanmadan kurulumu tamamlıyoruz."
  },
  {
    q: "Kocaeli, Bursa veya Tekirdağ gibi çevre illerde hafta sonu teknik destek nasıl planlanıyor?",
    a: "Çevre illerdeki hafta sonu etkinlikleri için 7/24 teknik destek, araç ve varsa konaklama planını ilk briefte birlikte netleştiriyoruz. Ekran tipi, kurulum saati ve saha erişimini baştan doğrulayarak operasyon kapsamını netleştiriyoruz."
  },
  {
    q: "İstanbul dışında, Marmara'nın hava şartlarına uygun ekranlarınız var mı?",
    a: "Kesinlikle. Özellikle açık hava etkinliklerinde sürpriz yağışlara karşı IP65 koruma sınıfına sahip dış mekan panelleri kurarak yayınınızı güvence altına alıyoruz."
  },
  {
    q: "Daha önce bizimkine benzer bir etkinlikte nasıl bir çözüm sundunuz?",
    a: "Her etkinlik tipi için gerçek uygulama örneklerimiz var. Örneğin Kocaeli'de 500+ izleyicili e-spor turnuvasında 3840 Hz yenileme hızıyla kamera dostu oyun yayını planladık. TÜYAP'ta havada asılı 4 cepheli LED Box ile stant görünürlüğünü güçlendirdik. Açık hava davetlerinde 6500 nit parlaklıkla yüksek görünürlük sağlayan dış mekan ekran çözümleri kurduk. Belediye meydan konserlerinde geniş kitlelere yönelik sahne destek ekranlarıyla izleyici deneyimini güçlendirdik. Sizi en yakın referansımızla eşleştirip teknik detayları paylaşabiliriz."
  },
  {
    q: "LED ekran teknik dokümanını müşterimizin teknik ekibi indirebilir mi?",
    a: "Evet. Absen P1.9 kavisli indoor LED için İngilizce ön teknik bilgi PDF'si bu sayfadaki LED Ekran Teknik Dokümanları bölümünden doğrudan açılabilir veya indirilebilir. Unilumin P2.6 ve P2.9 projelerinde kesin kabinet, işlemci, toplam çözünürlük ve güç planı etkinlik ölçülerine göre yazılı teklifle birlikte teyit edilir."
  }
];

function FAQ() {
  return (
    <section className="py-20 bg-white" aria-labelledby="sss-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 id="sss-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Sık Sorulan <span className="text-violet-700">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            LED ekran kiralama hakkında merak edilen sorular ve cevapları
          </p>
        </div>

        <AccessibleFaq items={FAQ_ITEMS} />

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla sorunuz mu var? Uzman ekibimiz sizi arayıp bilgilendirsin.
          </p>
          <Link
            href="/sss"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-500"
            aria-label="Tüm SSS'yi Görüntüle - Sık Sorulan Sorular sayfasındaki tüm soruları görüntüle"
          >
            <ArrowRight size={20} aria-hidden="true" className="mr-3" />
            <span className="text-lg">Tüm SSS'yi Görüntüle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function QuickSelectionGuide() {
  return (
    <section
      id="led-secim-rehberi"
      className="py-20 bg-gradient-to-b from-white to-slate-50"
      aria-labelledby="led-secim-rehberi-baslik"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="led-secim-rehberi-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-5"
          >
            Etkinliğinize göre <span className="text-violet-700 normal-case">panel önerisi</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En sık karşılaştığımız üç senaryoda hangi piksel aralığının öne çıktığını ve nedenini kısaca özetledik.
          </p>
        </div>

        {/*
          17 Ağu 2026 — sol sütundaki QUICK_SELECTION_STEPS kaldırıldı: hemen
          üstteki ServiceDecisionGuide ile aynı üç kararı (iç/dış mekân, izleme
          mesafesi, ölçü) sorduruyordu. Senaryo kartları benzersiz olduğu için
          korundu ve tek sütuna alındı.
        */}
        <div className="mx-auto max-w-3xl">

          <aside className="w-full">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 text-white shadow-2xl">
              <div className="relative aspect-[16/9]">
                <Image
                  src={LED_CORPORATE_CONFERENCE_ASIDE_IMAGE_SRC}
                  alt="Kurumsal konferans sahnesinde profesyonel LED ekran ve sahne ışık kurulumu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  loading="lazy"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
                  Hızlı seçim özeti
                </div>
              </div>

              <div className="p-5 md:p-6">
                <h3 className="text-[1.45rem] font-black leading-tight">Projeye göre hızlı öneri</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  En sık kullanılan üç senaryo için kısa yönlendirme:
                </p>

                <div className="mt-4 space-y-2.5">
                  {QUICK_SELECTION_SCENARIOS.map((scenario) => (
                    <div
                      key={scenario.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-base font-bold leading-snug text-white">{scenario.title}</h4>
                          <p className="mt-1.5 text-xs leading-relaxed text-white/85 md:text-[13px]">{scenario.detail}</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-violet-500/20 px-2.5 py-1 text-xs font-bold text-violet-200">
                          {scenario.recommendation}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-2xl bg-green-700 px-5 py-3 font-bold text-white shadow-[0_14px_32px_rgba(21,128,61,0.28)] transition hover:bg-green-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
                  >
                    WhatsApp ile ölçü paylaş
                  </a>
                  <Link
                    href="#teknik-altyapi"
                    className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-bold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                  >
                    Teknik detayları incele
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function P19InvestmentProof() {
  return (
    <section className="bg-white py-20" aria-labelledby="p19-yatirim-baslik">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-violet-700">
            Özmal Envanter Gücü
          </div>
          <h2 id="p19-yatirim-baslik" className="text-3xl font-black leading-tight text-gray-900 md:text-5xl">
            300 m² Absen P1.9 Indoor LED Envanteri
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600 md:text-xl">
            Absen P1.9 Indoor LED altyapısıyla lansman, fuar, gala ve konferanslarda yakın izleme mesafesine
            uygun, yüksek çözünürlüklü ve dengeli görüntü alanları kuruyoruz.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              "P1.9 Yakın İzleme",
              "3840 Hz Yenileme Hızı",
              "Özmal LED Envanteri",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-black text-slate-800">
                {item}
              </div>
            ))}
          </div>
        </div>

        <figure className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-2xl">
          <div className="relative aspect-[16/9]">
            <Image
              src={P19_PROOF_DISPLAY_IMAGE_SRC}
              alt="Sahneva 300 m² Absen P1.9 indoor LED ekran kurulumu ile kurumsal gala ve konferans sahnesi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 54vw"
              loading="lazy"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-transparent to-transparent" />
          </div>
          <figcaption className="absolute inset-x-5 bottom-5">
            <span className="inline-flex rounded-full bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-violet-100 backdrop-blur">
              Gerçek kurulum kanıtı
            </span>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-white/86">
              P1.9 LED altyapısı; kamera çekimi, canlı yayın ve salon içi sunumlarda yüksek yenileme hızıyla net, dengeli ve profesyonel bir görüntü akışı sağlar.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function TechnicalDocuments() {
  const preliminarySpecs = [
    { label: "Marka ve sınıf", value: "Absen P1.9 kavisli indoor LED" },
    { label: "Kabinet ölçüsü", value: "500 × 500 mm" },
    { label: "Kabinet çözünürlüğü", value: "256 × 256 piksel" },
    { label: "Yenileme hızı", value: "≥ 3.840 Hz (ön bilgi)" },
    { label: "Kurulum biçimi", value: "İçbükey / dışbükey kavis" },
    { label: "Kontrol uyumu", value: "NovaStar / Brompton" },
  ];
  const inventoryProofImages = [
    {
      src: "/img/led/absen-p19-led-kablo-envanteri-sahneva.webp",
      alt: "Sahneva deposunda Absen P1.9 LED ekranlar için hazırlanmış güç ve sinyal kabloları",
      eyebrow: "Bağlantı altyapısı",
      caption: "LED kabinetleri için güç ve sinyal kablolarının düzenli özmal envanteri.",
      aspectClass: "aspect-[16/9]",
      positionClass: "object-center",
    },
    {
      src: "/img/led/absen-p19-led-flight-case-depo-envanteri-sahneva.webp",
      alt: "Sahneva deposunda tekerlekli flight case kasalarında saklanan Absen P1.9 LED ekran envanteri",
      eyebrow: "Taşıma ve depolama",
      caption: "Sevkiyata hazır, korumalı flight case kasalarında saklanan LED kabinetleri.",
      aspectClass: "aspect-[4/5] md:aspect-[16/9]",
      positionClass: "object-center",
    },
    {
      src: "/img/led/absen-p19-led-teknik-ekip-kablo-hazirlik-sahneva.webp",
      alt: "Sahneva teknik ekibi Absen P1.9 LED ekran sevkiyatı öncesinde kablo ve bağlantı hazırlığı yaparken",
      eyebrow: "Teknik hazırlık",
      caption: "Teknik ekibin sevkiyat öncesi kablo, konnektör ve ekipman kontrolleri.",
      aspectClass: "aspect-[16/9]",
      positionClass: "object-center",
    },
  ];

  return (
    <section
      id="teknik-dokumanlar"
      className="bg-gradient-to-b from-slate-950 via-[#11182b] to-[#0B1120] py-16 text-white md:py-20"
      aria-labelledby="teknik-dokumanlar-baslik"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-300/10 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-violet-200">
              <FileText size={18} aria-hidden="true" />
              Müşteri teknik ekipleri için
            </div>
            <h2 id="teknik-dokumanlar-baslik" className="text-3xl font-black leading-tight md:text-5xl">
              LED Ekran <span className="text-violet-300">Teknik Dokümanları</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              Absen P1.9 kavisli indoor LED çözümünün temel teknik özelliklerini sayfadan inceleyebilir,
              İngilizce ön teknik föyü müşterinizin teknik departmanına doğrudan iletebilirsiniz.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={ABSEN_P19_TECHNICAL_PDF}
                target="_blank"
                rel="noopener noreferrer"
                type="application/pdf"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-black text-slate-950 transition hover:bg-violet-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300 sm:w-auto"
                aria-label="Absen P1.9 kavisli LED İngilizce ön teknik özellikler PDF dosyasını yeni sekmede aç"
              >
                <FileText size={19} aria-hidden="true" />
                PDF'yi Aç
              </a>
              <a
                href={ABSEN_P19_TECHNICAL_PDF}
                download="Sahneva-Absen-P19-Kavisli-LED-On-Teknik-Ozellikler-EN.pdf"
                type="application/pdf"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-black text-white transition hover:bg-white/15 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300 sm:w-auto"
                aria-label="Absen P1.9 kavisli LED İngilizce ön teknik özellikler PDF dosyasını indir"
              >
                <Download size={19} aria-hidden="true" />
                PDF İndir
              </a>
              <a
                href={getServiceWhatsappLink("Absen P1.9 kavisli LED ekran")}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-green-300/30 bg-green-400/15 px-5 py-3 font-black text-green-100 transition hover:bg-green-400/25 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300 sm:w-auto"
              >
                <MessageCircle size={19} aria-hidden="true" />
                Projeye Özel Teyit Al
              </a>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              PDF · İngilizce · 1 sayfa · 24 KB. Belge hızlı teknik değerlendirme için ön bilgi niteliğindedir;
              kesin seri/model, parlaklık, toplam ekran çözünürlüğü, güç ve işlemci konfigürasyonu projeye göre yazılı teklifte teyit edilir.
            </p>
          </div>

          <article className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-sm md:p-7">
            <div className="mb-5 flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.14em] text-violet-300">Portföy teknik kartı</p>
                <h3 className="mt-2 text-2xl font-black text-white">Absen P1.9 Kavisli Indoor LED</h3>
              </div>
              <span className="w-fit rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-100">
                Ön teknik bilgi
              </span>
            </div>

            <dl className="grid gap-3 sm:grid-cols-2">
              {preliminarySpecs.map((spec) => (
                <div key={spec.label} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  <dt className="text-xs font-black uppercase tracking-[0.12em] text-white/50">{spec.label}</dt>
                  <dd className="mt-2 text-base font-bold text-white">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 rounded-2xl border border-violet-300/15 bg-violet-300/[0.08] p-4">
              <p className="text-sm font-black text-violet-200">Envanter marka–pitch ayrımı</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/75">
                <li><strong className="text-white">Absen:</strong> P1.9 kavisli indoor LED</li>
                <li><strong className="text-white">Unilumin:</strong> P2.6 ve P2.9 LED paneller</li>
              </ul>
            </div>
          </article>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-violet-300">Özmal envanter kanıtı</p>
            <h3 className="mt-2 text-2xl font-black text-white md:text-3xl">Dokümanın arkasındaki saha hazırlığı</h3>
            <p className="mt-3 text-base leading-relaxed text-white/65">
              Kabinetler, bağlantı kabloları ve flight case düzeni; teknik dokümandaki ekipmanın sahadaki taşıma,
              kurulum ve kontrol süreciyle birlikte yönetildiğini gösterir.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {inventoryProofImages.map((item) => (
              <figure key={item.src} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-xl">
                <div className={`relative overflow-hidden ${item.aspectClass}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={`object-cover ${item.positionClass}`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" aria-hidden="true" />
                </div>
                <figcaption className="p-5">
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-violet-300">{item.eyebrow}</span>
                  <p className="mt-2 text-sm leading-relaxed text-white/72">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CurvedP19ImageCard({ item, aspectClass, sizes }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-xl">
      <div className={`relative overflow-hidden bg-slate-950 ${aspectClass}`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className={`object-cover ${item.positionClass}`}
          sizes={sizes}
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>
      <figcaption className="p-5">
        <span className="text-xs font-black uppercase tracking-[0.14em] text-violet-300">
          {item.eyebrow}
        </span>
        <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/68">{item.caption}</p>
      </figcaption>
    </figure>
  );
}

function CurvedP19InstallationProof() {
  const [preAssembly, stageInstallation, technicalRehearsal] =
    CURVED_P19_INSTALLATION_IMAGES;

  return (
    <section
      id="absen-p19-kavisli-led-kurulumu"
      className="border-t border-white/10 bg-[#0B1120] py-16 text-white md:py-20"
      aria-labelledby="absen-p19-kavisli-led-baslik"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-300">
              Gerçek P1.9 uygulaması
            </p>
            <h2 id="absen-p19-kavisli-led-baslik" className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Absen P1.9 <span className="text-violet-300">Kavisli LED Kurulumu</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/72">
              Kavisli LED ekran kurulumu yalnızca kabinetleri yan yana getirmekten ibaret değildir. Bu uygulamada
              Absen P1.9 paneller önce depoda hedeflenen formda test edildi; ardından kavisli üst bant, dairesel LED
              halka ve ana sahne ekranı etkinlik alanında kurularak görüntü provası yapıldı.
            </p>
          </div>

          <a
            href={getServiceWhatsappLink("Absen P1.9 kavisli LED kurulumu")}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-violet-300/30 bg-violet-300/10 px-5 py-3 font-black text-violet-100 transition hover:bg-violet-300/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300 sm:w-fit"
          >
            Kavisli LED İçin Teklif Al
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-9 space-y-5">
          <CurvedP19ImageCard
            item={preAssembly}
            aspectClass="aspect-[16/9]"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          <div className="grid items-start gap-5 md:grid-cols-[0.75fr_1.25fr]">
            <CurvedP19ImageCard
              item={stageInstallation}
              aspectClass="aspect-[3/4]"
              sizes="(max-width: 768px) 100vw, 38vw"
            />
            <CurvedP19ImageCard
              item={technicalRehearsal}
              aspectClass="aspect-[4/3]"
              sizes="(max-width: 768px) 100vw, 62vw"
            />
          </div>
        </div>

        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-white/55">
          Kesin kavis çapı, ekran ölçüsü, asma veya zemin taşıma yöntemi; mekân keşfi, görüş açısı ve statik yük
          planına göre projelendirilir.
        </p>
      </div>
    </section>
  );
}

function VisualProofStrip() {
  return (
    <section className="py-14 md:py-16 bg-gradient-to-b from-slate-900 via-[#11182b] to-[#0B1120]" aria-labelledby="gorsel-ritim-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8 text-center">
          <h2 id="gorsel-ritim-baslik" className="text-3xl md:text-4xl font-black text-white mb-3">
            Gerçek Kurulumlardan <span className="text-violet-400">Hızlı Görsel Özet</span>
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Sayfadaki teknik akışı desteklemesi için farklı kullanım senaryolarından seçilmiş örnek kurulumları öne çıkardık.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {VISUAL_FLOW_IMAGES.map((item, index) => (
            <article
              key={item.src}
              className={`overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl ${
                index === 0 ? "md:translate-y-6" : index === 2 ? "md:-translate-y-6" : ""
              }`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  unoptimized={shouldBypassLedImageOptimizer(item.src)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-violet-300">
                    {item.eyebrow}
                  </div>
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{item.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== HERO ================== */
const HERO_BADGES = [
  "İç Mekan LED",
  "Dış Mekan LED",
  "LED Wall & Video Wall",
  "Reji ve Teknik Ekip",
  "Kredi Kartı ile Taksitli Ödeme",
];

const HERO_ACTIONS = [
  {
    key: "quote",
    label: "Teklif Al",
    href: WHATSAPP,
    external: true,
    ariaLabel: "Teklif Al - WhatsApp üzerinden LED ekran kiralama teklifi alın",
  },
  {
    key: "services",
    label: "Hizmet Kapsamını İncele",
    href: "#hizmetler",
    ariaLabel: "LED ekran hizmet kapsamına gidin",
  },
];

const HERO_METRICS = [
  {
    value: "Indoor",
    label: "İç Mekan LED",
    detail: "Salon, konferans ve stüdyo kurulumlarında yüksek çözünürlüklü LED wall.",
  },
  {
    value: "Outdoor",
    label: "Dış Mekan LED",
    detail: "Açık hava etkinliklerinde parlaklık ve hava koşullarına dayanıklı sistemler.",
  },
  {
    value: PROJECTS_COMPLETED,
    label: "Tamamlanan Proje",
    detail: "Kurumsal lansmandan festival ana sahnesine geniş saha referansı.",
  },
  {
    value: `${PROVINCES_COUNT} İl`,
    label: "Kurulum Operasyonu",
    detail: "Türkiye genelinde nakliye, kurulum, reji ve söküm koordinasyonu.",
  },
];

function Hero() {
  return (
    <PageHero
      eyebrow="İstanbul ve Türkiye geneli LED ekran kiralama"
      title="LED Ekran Kiralama"
      description="İstanbul ve Türkiye genelinde LED ekran kiralama hizmeti sunuyoruz. İç mekan LED ekran, dış mekan LED ekran, LED wall ve video wall çözümlerini; kurulum, söküm, teknik ekip, görüntü işlemcisi ve reji desteğiyle birlikte projeye özel planlıyoruz."
      badges={HERO_BADGES}
      actions={HERO_ACTIONS}
      metrics={HERO_METRICS}
      image={{
        src: HERO.src,
        alt: HERO.alt,
        width: 1440,
        height: 810,
        sources: [
          { media: "(max-width: 640px)", srcSet: HERO.mobileSrc },
          { media: "(max-width: 1024px)", srcSet: HERO.tabletSrc },
        ],
      }}
    />
  );
}

/* ================== Hizmetler ================== */
function Services() {
  return (
    <section id="hizmetler" className="py-20 bg-gradient-to-b from-white to-violet-50/50" aria-labelledby="hizmetler-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="hizmetler-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            LED Ekran Kiralama <span className="text-violet-700">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Indoor LED ekran, outdoor LED ekran, LED wall ve video wall kurulumlarını etkinlik tipine göre; ekran ölçüsü, izleme mesafesi, piksel aralığı, taşıyıcı sistem, reji ve teknik ekip ihtiyacıyla birlikte planlıyoruz.
          </p>
          <p className="mt-5 text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fiyat, m² hesabı ve maliyeti oluşturan kalemler için{" "}
            <Link href="/led-ekran-kiralama-fiyatlari" className="font-black text-violet-700 underline underline-offset-4 hover:text-violet-900">
              güncel LED ekran kiralama fiyatları
            </Link>{" "}
            sayfasında ayrı bir fiyat rehberi hazırladık; bu sayfa ise hizmet ve teknik çözüm kapsamına odaklanır.
          </p>
          <p className="mt-5 text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Salon ölçünüze ve izleme mesafenize uygun ekran boyutunu kendiniz denemek isterseniz{" "}
            <Link href="/led-ekran-hesaplama" className="font-black text-violet-700 underline underline-offset-4 hover:text-violet-900">
              LED ekran ölçü hesaplama aracını
            </Link>{" "}
            kullanabilirsiniz.
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
                  <div className="mb-4 text-violet-600 group-hover:scale-110 transition-transform duration-300">
                    <service.Icon size={36} aria-hidden="true" />
                  </div>
                  <h3 id={id} className="text-2xl font-black mb-4 text-gray-900 group-hover:text-violet-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex-shrink-0" aria-hidden="true" />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.cta && (
                    <div className="mt-8">
                      <Link
                        href={getServiceWhatsappLink(service.title)}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500"
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
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-500"
          >
            <MessageCircle size={20} aria-hidden="true" className="mr-3" />
            <span>Detaylı Teklif için İletişime Geçin</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Galeri Verileri ================== */
const GALLERY_IMAGES = [
  {
    src: P19_PROOF_DISPLAY_IMAGE_SRC,
    alt: "Sahneva 300 m² Absen P1.9 indoor LED ekran kurulumu ile kurumsal gala ve konferans sahnesi",
    caption: "Geniş ölçekli kongre, lansman ve gala sahneleri için planlanan 300 m² Absen P1.9 indoor LED envanteri; yakın izleme mesafesinde yüksek çözünürlüklü, dengeli ve profesyonel bir görüntü alanı oluşturur."
  },
  {
    src: P19_TECHNICAL_CONTROL_IMAGE_SRC,
    alt: "Absen P1.9 indoor LED ekran sahnesinde teknik prodüksiyon kontrol masası ve canlı görüntü akışı",
    caption: "Teknik Operasyon | Absen P1.9 Indoor LED | Merkezi Kontrol Masası | Gerçek Zamanlı Sahne Yönetimi"
  },
  {
    src: LED_CORPORATE_CONFERENCE_CARD_IMAGE_SRC,
    alt: "Kurumsal konferans sahnesinde LED ekran, sahne ışığı ve oturum düzeni",
    caption: "Kurumsal Konferans | LED Ekran ve Sahne Işık Altyapısı | Net Marka Görünürlüğü"
  },
  {
    src: LED_HYBRID_LAUNCH_IMAGE_SRC,
    alt: "Ürün lansmanı sahnesinde LED wall, kırmızı ışık tasarımı ve kurumsal marka sunumu",
    caption: "Ürün Lansmanı | LED Wall & Sahne Tasarımı | Markanın ana mesajını tek ve güçlü bir görsel yüzeyde toplar."
  },
  {
    src: LED_BALLROOM_LAUNCH_IMAGE_SRC,
    alt: "Fuar ve lansman salonunda geniş LED ekran kurulumu ve kurumsal sahne düzeni",
    caption: "Fuar ve Lansman Salonu | Geniş Ölçekli LED Ekran | Yakın izleme mesafesinde yüksek çözünürlüklü sunum alanı sağlar."
  },
  {
    src: LED_GALA_STAGE_IMAGE_SRC,
    alt: "Gala sahnesinde büyük LED ekran, video wall ve sahne ışık prodüksiyonu",
    caption: "Gala Sahnesi | Video Wall & Senkronize Işık | Prestijli organizasyonlarda sahne etkisini artıran yüksek yenileme hızlı görüntü akışı."
  },
  {
    src: LED_OUTDOOR_CONCERT_IMAGE_SRC,
    alt: "Açık hava konser sahnesinde büyük LED ekran, kalabalık ve sahne prodüksiyonu",
    caption: "Açık Hava Konseri | Büyük Ölçekli LED Ekran | Geniş ve açık alanlarda uzaktan fark edilebilen yüksek görünürlük performansı."
  },
];

const VIDEO_GALLERY = [
  {
    id: "1R5Av0x5ouA",
    title: "PUBG Sahne, LED Ekran ve Işık Provaları",
    description: "PUBG etkinliği için hazırlanan sahne, LED ekran ve ışık provalarından seçilmiş teknik prova görüntüsü.",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "JNzGlNzNRuk",
    title: "LED Ekran Kurulum Süreci",
    description: "Click-lock sistemiyle hızlı montaj ve yüksek senkronizasyon; etkinlik öncesi testleri tamamlanan aktif ekran altyapısı.",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "j1Tr5l8DVW8",
    title: "Milli Uzay Programı Lansmanı 2021",
    description: "TUA Milli Uzay Programı Lansmanı için hazırlanan sahne, LED ekran, pnömatik dome yapı ve teknik prodüksiyon uygulamasından seçilmiş sahne arkası görüntüsü.",
    uploadDate: "2021-02-09T00:00:00+03:00",
  },
  {
    id: "HNDZ-wYVKLw",
    title: "LED Ekran Kurulum Detayları",
    description: "Kablolama karmaşasını azaltan optimize edilmiş altyapı ve hızlı kalibrasyon ayarlarıyla kontrollü sahne yönetim süreci.",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "173gBurWSRQ",
    title: "PUBG Türkiye Finali 2023",
    description: "E-spor final sahnesinde LED ekran, sahne, podyum, ses-ışık ve teknik prodüksiyon entegrasyonundan seçilmiş saha görüntüsü.",
    uploadDate: "2023-12-01T00:00:00+03:00",
  },
];

const VISUAL_FLOW_IMAGES = [
  {
    src: "/img/led/1.webp",
    alt: "Uluslararası forum salonunda geniş LED ekran ve yan LED panolarla kurumsal sahne kurulumu",
    eyebrow: "Kurumsal konferans",
    title: "Geniş ölçekli iç mekan LED görüntü altyapısı",
    detail: "Kongre ve forum sahnelerinde yakın izleme mesafesinde net, parlak ve yüksek çözünürlüklü görüntü kalitesi.",
  },
  {
    src: "/img/led/3.webp",
    alt: "Gala salonunda truss, LED ekranlar ve teknik ekip ile kurulum hazırlığı",
    eyebrow: "Operasyon kontrolü",
    title: "Sahne Arkasında Kontrollü Teknik Operasyon",
    detail: "Görüntü, ses ve ışık senkronizasyonu tek merkezden yönetilir; operasyonel riskler kontrollü planlama ile azaltılır.",
  },
  {
    src: "/img/led/2.webp",
    alt: "Balo salonunda tek parça geniş LED wall ile kurumsal davet sahnesi",
    eyebrow: "Lansman sahnesi",
    title: "Marka mesajını taşıyan tek güçlü yüzey",
    detail: "Ürün lansmanı ve bayi toplantılarında LED wall sahnenin ana iletişim alanına dönüşür.",
  },
];

/* ================== Geliştirilmiş Galeri ve Başarı Hikayeleri ================== */
function Gallery() {
  return (
    <section className="py-20 bg-slate-50" aria-labelledby="galeri-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 id="galeri-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Gerçek LED Ekran <span className="text-violet-700">Kurulumlarımız</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Gerçek saha görselleriyle; LED ekran kurulum kapasitemizi, sahne entegrasyon gücümüzü ve prodüksiyon kalitemizi öne çıkarıyoruz.
          </p>
        </div>

        <ul className="mb-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3" aria-label="Hizmet verdiğimiz sektörler">
          {[
            { icon: "🎵", label: "Konser & Festival" },
            { icon: "🏛️", label: "Devlet & Belediye" },
            { icon: "🎓", label: "Eğitim & Tören" },
            { icon: "🏢", label: "Kurumsal & Fuar Stantları" },
            { icon: "🎮", label: "Spor & E-spor" },
            { icon: "✨", label: "Gala & Davet" },
          ].map((sector) => (
            <li key={sector.label} className="flex flex-col items-center gap-2 bg-white rounded-2xl p-4 border border-gray-200 shadow-sm text-center">
              <span className="text-2xl" aria-hidden="true">{sector.icon}</span>
              <span className="text-sm font-bold text-gray-700 leading-tight">{sector.label}</span>
            </li>
          ))}
        </ul>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr] mb-16">
          <article className="relative overflow-hidden rounded-3xl border border-gray-200 bg-slate-900 shadow-xl">
            <div className="relative aspect-[16/10]">
              <Image
                src={GALLERY_IMAGES[0].src}
                alt={GALLERY_IMAGES[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                loading="lazy"
                unoptimized={shouldBypassLedImageOptimizer(GALLERY_IMAGES[0].src)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 max-w-2xl">
                <div className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-violet-200 backdrop-blur">
                  Öne çıkan kurulum
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white">
                  Absen P1.9 Indoor LED ile Kurumsal Sahne Tasarımı
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/80">{GALLERY_IMAGES[0].caption}</p>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            {GALLERY_IMAGES.slice(1, 3).map((image) => (
              <article
                key={image.src}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    loading="lazy"
                    unoptimized={shouldBypassLedImageOptimizer(image.src)}
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold leading-relaxed text-gray-700">{image.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Sahadan Uygulama Görselleri</h3>
            <p className="text-lg text-gray-600 mb-8">Daha derli toplu bir akış için saha görsellerini sabit oranlı, tek ritimde bir gride aldık.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {GALLERY_IMAGES.slice(3, 8).map((image) => (
              <article
                key={image.src}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    loading="lazy"
                    unoptimized={shouldBypassLedImageOptimizer(image.src)}
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold leading-relaxed text-gray-700">{image.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 mb-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Video <span className="text-violet-700">Galerisi</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Gerçek kurulumlarımızdan ve saha operasyonlarımızdan seçilmiş kısa videolar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {VIDEO_GALLERY.map((video) => (
              <article
                key={video.id}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                aria-labelledby={`video-${video.id}-title`}
              >
                <div className="relative w-full aspect-video bg-black">
                  <LazyVideoEmbed
                    videoId={video.id}
                    title={video.title}
                    thumbnailUrl={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h4
                    id={`video-${video.id}-title`}
                    className="text-xl font-black text-gray-900 mb-3"
                  >
                    {video.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                    {video.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-violet-900 to-slate-900 rounded-3xl p-8 md:p-14 text-center border border-violet-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500 opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              Daha Fazla İlham Mı Arıyorsunuz?
            </h3>
            
            <p className="text-violet-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Daha fazla uygulama örneği ve detaylı görsel için <a href="/projeler" className="underline font-bold text-white hover:text-violet-200 transition-colors">Tüm Proje Galerimizi inceleyin</a>. Yüzlerce başarılı referansımız arasından etkinliğinize en uygun LED ekran çözümünü birlikte tasarlayalım.
            </p>
            
            <Link
              href="/projeler"
              className="inline-flex items-center justify-center font-black px-10 py-5 rounded-2xl bg-white text-violet-900 hover:bg-violet-50 transform transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
            >
              <Eye size={24} className="mr-3" aria-hidden="true" />
              <span className="text-lg">Tüm Resimleri Gör</span>
            </Link>
          </div>
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
          <h3 id="technical-comparison-title" className="text-xl md:text-2xl font-black text-gray-900">
            Piksel Aralığı ve İzleme Mesafesi Karşılaştırması
          </h3>
          <p className="text-gray-600 mt-1">
            Doğru piksel seçimi, görüntü netliği ve izleme mesafesi için kritik öneme sahiptir.
          </p>
        </div>

        <div
          className="overflow-x-auto"
          role="region"
          aria-labelledby="technical-comparison-title"
          tabIndex={0}
          aria-label="Piksel aralığı ve izleme mesafesi karşılaştırma tablosunu yatay kaydır"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white border-b border-gray-100">
                <th className="px-6 py-4 font-bold text-gray-900">Model</th>
                <th className="px-6 py-4 font-bold text-gray-900">Netlik Düzeyi</th>
                <th className="px-6 py-4 font-bold text-gray-900">Çözünürlük Seviyesi</th>
                <th className="px-6 py-4 font-bold text-gray-900">Önerilen Mesafe</th>
                <th className="px-6 py-4 font-bold text-gray-900">Yenileme Hızı</th>
                <th className="px-6 py-4 font-bold text-gray-900">Kullanım Alanı</th>
              </tr>
            </thead>
            <tbody>
              {LED_PIXEL_ROWS.map((row, index) => (
                <tr
                  key={row.model}
                  className={index < LED_PIXEL_ROWS.length - 1 ? "border-b border-gray-100" : undefined}
                >
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-900">{row.model}</span>
                    <span
                      className={`ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-bold ${row.badgeClass}`}
                    >
                      {row.badge}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{row.clarity}</td>
                  <td className="px-6 py-4 text-gray-700">
                    <span aria-hidden="true">{row.detailIndex}</span>
                    <span className="sr-only">{row.detailText}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{row.distance}</td>
                  <td className="px-6 py-4 font-semibold text-violet-700">{row.refreshRate}</td>
                  <td className="px-6 py-4 text-gray-700">{row.usage}</td>
                </tr>
              ))}
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
      description: "P1.9-P3.9 piksel aralığı ile yakın izleme ve geniş alan ihtiyaçlarına uygun çözümler",
      Icon: Eye,
      features: ["Absen P1.9: Yakın İzleme Premium İç Mekan", "Unilumin P2.6 / P2.9: İç Mekan ve Hibrit", "P3.9: Açık Hava ve Geniş Alan", "P4.8: Uzak Mesafe (Opsiyonel)"]
    },
    {
      category: "parlaklik",
      title: "Parlaklık & Görünürlük",
      description: "Ortam koşullarına göre optimize edilmiş parlaklık seviyeleri",
      Icon: Sun,
      features: ["İç Mekan: 800 - 1500 Nit Parlaklık", "Dış Mekan: 3500 - 6500 Nit Parlaklık", "Otomatik Parlaklık Optimizasyonu", "Güneş Işığı Altında Yüksek Netlik"]
    },
    {
      category: "koruma",
      title: "Koruma Sistemleri",
      description: "IP65 su geçirmez koruma ve dayanıklı yapı",
      Icon: Shield,
      features: ["IP65 Ön Yüzey Koruması", "IP54 Arka Panel Koruması", "UV Filtreli ve Dayanıklı Malzeme Yapısı", "Toz ve Çevre Koşullarına Karşı Yalıtım", "Flip-Shield Gelişmiş Köşe Koruması"]
    },
    {
      category: "kontrol",
      title: "Kontrol Sistemleri",
      description: "Profesyonel video işleme ve kontrol sistemleri",
      Icon: Settings,
      features: ["NovaStar Görüntü İşlemcileri", "4K Video Scaling Altyapısı", "Medya Sunucuları", "Uzaktan Kontrol ve Yönetim", "3840 Hz Titreşimsiz Yenileme"]
    },
    {
      category: "kurulum",
      title: "Kurulum Sistemleri",
      description: "Hızlı ve güvenli kurulum için özel sistemler",
      Icon: Zap,
      features: ["Ground Stack Kurulum Tipi", "Truss ve Rigging Çözümleri", "Motorlu Asma ve Kaldırma Sistemleri", "Hızlı Kilit ve Güvenlik Mekanizması", "Click-Lock Tek Kişilik Hızlı Kurulum", "Pinch n' Go Pratik Modül Değişimi"]
    },
    {
      category: "destek",
      title: "Teknik Destek",
      description: "7/24 teknik destek ve acil müdahale hizmetleri",
      Icon: Headphones,
      features: ["7/24 Teknik Destek Planı", "Anlık Yedek Modül Güvencesi", "Sahada Acil Müdahale Ekibi", "Uzaktan Diagnostik ve Hata Tespiti"]
    }
  ];

  return (
    <section id="teknik-altyapi" className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="altyapi-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 id="altyapi-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Teknik <span className="text-violet-700">Altyapımız</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En son teknoloji LED ekranlar ve profesyonel teknik altyapı ile hizmetinizdeyiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {technicalItems.map((item) => {
            const detailsId = `${slugify(item.title)}-details`;

            return (
            <div key={item.category} className="group">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <h3 className="font-black text-xl text-gray-900 mb-3 group-hover:text-violet-600 transition-colors flex items-center gap-3">
                  <span className="text-violet-600 group-hover:scale-110 transition-transform duration-300">
                    <item.Icon size={28} aria-hidden="true" />
                  </span>
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-2 text-base leading-relaxed">
                  {item.description}
                </p>
                <details className="mt-4 rounded-xl border border-gray-100 bg-gray-50/50 p-4">
                  <summary
                    aria-controls={detailsId}
                    className="flex min-h-12 cursor-pointer select-none items-center rounded-lg font-semibold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
                  >
                    Detayları gör
                  </summary>
                  <ul id={detailsId} className="mt-3 space-y-2">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <span className="mt-2 w-2 h-2 bg-violet-600 rounded-full flex-shrink-0" aria-hidden="true" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          );
          })}
        </div>

        <TechnicalComparison />
      </div>
    </section>
  );
}

/* ================== İstatistik Bant (Güncellenmiş) ================== */
function StatsBand() {
  const stats = [
    { value: "300 m²", label: "Absen P1.9 Indoor LED Envanteri" },
    { value: PROJECTS_COMPLETED, label: "Başarılı Proje" },
    { value: `${PROVINCES_COUNT} İl`, label: "Kendi Araçlarımızla Kurulum" },
    { value: `${YEARS_OF_EXPERIENCE}`, label: "Yıllık Deneyim" },
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
              <div className="text-sm text-white/85 mt-1">{s.label}</div>
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
        "Panellerin hassas köşelerini koruyan otomatik mekanizma sayesinde, kurulum ve taşıma esnasında oluşabilecek piksel hasarı riski minimuma indirilir.",
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
        "Özel kilit mekanizması sayesinde tek kişiyle hızlı ve güvenli kurulum olanağı tanır; prodüksiyon süreçlerinde zaman ve iş gücü tasarrufu sağlar.",
    },
    {
      Icon: Zap,
      title: "Pinch n' Go Modül Değişimi",
      description:
        "Olası bir teknik aksaklıkta modüller saniyeler içinde değiştirilebilir; canlı yayın ve etkinlik esnasında operasyonel süreklilik desteklenir.",
    },
    {
      Icon: Gauge,
      title: "3840 Hz Kamera Dostu Performans",
      description:
        "Yüksek yenileme hızı ve gri skala derinliği sayesinde TV çekimi ve canlı yayınlarda flicker riskini azaltan, kamera dostu görüntü akışı sağlar.",
    },
    {
      Icon: Activity,
      title: `Türkiye Geneli ${PROVINCES_COUNT} İl Hizmet`,
      description:
        "Uzman teknik kadromuz kurulumdan söküme kadar her aşamada sahada yer alarak operasyonel süreci planlı ve kontrollü şekilde yönetir.",
    },
  ];

  return (
    <section
      id="neden-sahneva"
      className="py-20 bg-gradient-to-b from-violet-50/50 to-white"
      aria-labelledby="neden-sahneva-baslik"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2
            id="neden-sahneva-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Neden <span className="text-violet-700">Sahneva?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Absen P1.9 ile Unilumin P2.6 ve P2.9 panelleri, entegre sahne deneyimiyle birlikte planlıyoruz
          </p>
          <div
            className="w-32 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mt-8 rounded-full"
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
                <div className="mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center text-violet-700 group-hover:scale-110 transition-transform duration-300">
                  <feature.Icon size={28} aria-hidden="true" />
                </div>
                <h3
                  id={`why-${slugify(feature.title)}`}
                  className="text-xl font-black text-gray-900 mb-3 group-hover:text-violet-700 transition-colors"
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
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-500"
            aria-label="Absen P1.9 ve Unilumin P2.6/P2.9 LED envanteri için teknik danışmanlık ve teklif alın"
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
    <section id="kullanim-alanlari" className="py-20 bg-slate-950" aria-labelledby="kullanim-alanlari-baslik">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="kullanim-alanlari-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            LED Ekran <span className="text-violet-400">Kullanım Alanları</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Sektörel ihtiyaçlara özel, yüksek performanslı dijital görüntüleme çözümleri.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mt-8 rounded-full" aria-hidden="true" />
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {USE_CASES.map((uc) => (
            <li
              key={uc.title}
              className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
            >
              <div className="text-violet-400 mb-5 group-hover:scale-110 transition-transform" aria-hidden="true">
                <uc.Icon size={32} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-white font-black text-lg mb-3 leading-tight uppercase tracking-wide">
                {uc.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed border-t border-white/10 pt-3">
                {uc.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ================== Bölgesel Hizmet Kapsamı ================== */
function RegionalService() {
  const regions = [
    { 
      name: "İstanbul Avrupa Yakası", 
      detail: "Trafiğin yoğun olduğu Şişli, Beşiktaş ve fuar merkezi Beylikdüzü gibi lokasyonlarda, erken saatte mobilize olarak hızlı kurulum sağlayan ekiplerimiz sahada yer alır.",
      districts: "Başakşehir, Esenyurt, Fatih, Sarıyer, Kağıthane, Şişli, Beşiktaş, Beylikdüzü"
    },
    { 
      name: "İstanbul Anadolu Yakası", 
      detail: "Kadıköy, Ataşehir ve Ümraniye depolarımızdan, köprü trafiğine takılmadan anlık sevkiyat ve aynı gün müdahale.",
      districts: "Kadıköy, Üsküdar, Maltepe, Tuzla, Pendik, Çekmeköy, Ataşehir"
    },
    { 
      name: "Marmara & Çevre İller", 
      detail: "Özel araç filomuz ve konaklamalı teknik ekiplerimizle, Marmara'nın değişken hava şartlarına uygun IP65 dış mekan çözümleri planlarız.",
      districts: "Tekirdağ, İzmit, Kocaeli, Yalova, Bursa, Sakarya, Düzce, Bolu, Edirne"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="bolgesel-hizmet-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 id="bolgesel-hizmet-baslik" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            İstanbul, Marmara ve Çevre İllerde <span className="text-violet-700">Lider Güç</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bölgenizin coğrafi ve lojistik dinamiklerini biliyoruz. İstanbul trafiğine özel erken kurulum stratejilerimiz ve çevre illere özel şeffaf nakliye çözümlerimizle etkinliklerinizi güvence altına alıyoruz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Sol Taraf: Bölgesel Dağılım */}
          <div className="space-y-8">
            {regions.map((region) => (
              <div key={region.name} className="group p-6 bg-white rounded-2xl border-l-4 border-violet-600 hover:bg-violet-50 transition-colors shadow-sm">
                <h3 className="font-black text-gray-900 text-xl mb-2">{region.name}</h3>
                <p className="text-gray-700 mb-3">{region.detail}</p>
                <div className="text-sm font-semibold text-violet-800 bg-violet-100/50 p-3 rounded-xl border border-violet-100">
                  📍 Kapsam: {region.districts}
                </div>
              </div>
            ))}
          </div>

          {/* Sağ Taraf: Operasyonel Güvence */}
          <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-600 rounded-full blur-[80px] opacity-50 pointer-events-none"></div>
            
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-violet-400">
              <Shield size={28} aria-hidden="true" /> Operasyonel Avantajlarımız
            </h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex gap-4">
                <div className="bg-violet-600/20 p-3 rounded-xl h-fit"><Truck className="text-violet-400" aria-hidden="true" /></div>
                <div>
                  <h4 className="font-bold text-lg">Trafik ve Zaman Yönetimi</h4>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">
                    Megakent İstanbul'un trafiğine karşı etkinlikten saatler önce alana giriyoruz. Asya ve Avrupa yakasındaki bağımsız ekiplerimizle operasyonel gecikme riskini minimuma indiriyoruz.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-green-500/20 p-3 rounded-xl h-fit"><Zap className="text-green-400" aria-hidden="true" /></div>
                <div>
                  <h4 className="font-bold text-lg">Hava Şartlarına Tam Uyum</h4>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">
                    Marmara'nın değişken havasına karşı, özellikle açık hava etkinliklerinde IP65 koruma sınıfına sahip dış mekan panelleriyle yayın altyapısını güvenceye alıyoruz.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-500/20 p-3 rounded-xl h-fit"><Users className="text-orange-400" aria-hidden="true" /></div>
                <div>
                  <h4 className="font-bold text-lg">Çevre İl Lojistik Planı</h4>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">
                    Bursa, Tekirdağ ve Kocaeli gibi illerde araç, teknik ekip, kurulum saati ve gerekirse konaklama planını etkinlik briefiyle birlikte oluşturuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bölgesel Lojistik ve Operasyon Karşılaştırma Tablosu */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden mt-10">
          <div className="px-6 md:px-10 py-8 border-b border-gray-100 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 id="regional-ops-table-title" className="text-2xl md:text-3xl font-black text-gray-900">Bölgesel Lojistik ve Operasyon Karşılaştırması</h3>
              <p className="text-gray-600 mt-2 text-lg">İstanbul içi ve çevre illerdeki hizmet standartlarımızın şeffaf dökümü.</p>
            </div>
          </div>
          <div
            className="overflow-x-auto"
            role="region"
            aria-labelledby="regional-ops-table-title"
            tabIndex={0}
            aria-label="Bölgesel lojistik ve operasyon karşılaştırma tablosunu yatay kaydır"
          >
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="px-8 py-6 font-black text-gray-900 w-1/4 bg-gray-50 border-b-2 border-gray-200">Hizmet Kriteri</th>
                  <th className="px-8 py-6 font-black text-violet-800 w-3/8 bg-violet-50 border-b-2 border-violet-200">İstanbul İçi (Avrupa & Anadolu)</th>
                  <th className="px-8 py-6 font-black text-green-800 w-3/8 bg-green-50 border-b-2 border-green-200">Çevre İller (Marmara Bölgesi)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Müdahale & Kurulum</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Acil taleplerde aynı gün 2-4 saat içinde hızlı kurulum planı.</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Planlı sevkiyat ile etkinlikten 1 gün önce güvenli kurulum sağlanır.</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Sevkiyat Planı</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Merkezi ilçelerde yükleme noktası ve araç erişimi birlikte planlanır.</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Rota, yükleme saati ve saha erişimi etkinlik takvimine göre netleştirilir.</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Teknik Ekip & Konaklama</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Yerel nöbetçi ekiplerle anlık destek ve kısa erişim süresi sağlanır.</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Projeye tahsisli, konaklamalı ve tam zamanlı operatör desteği.</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Operasyonel Çözüm</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Trafik yoğunluğuna karşı sabah erken saatte planlı sevkiyat.</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Değişken hava şartlarına uygun IP65 korumalı dış mekan donanımı.</td>
                </tr>
              </tbody>
            </table>
          </div>
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
            LED Ekran Kiralama <span className="text-violet-700">Rehberi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Etkinliğiniz için doğru LED ekranı seçmek, kurulum sürecini planlamak ve teknik gereksinimleri netleştirmek için kapsamlı rehber
          </p>
        </div>

        <nav
          aria-label="LED ekran kiralama rehber başlıkları"
          className="mb-8 flex flex-wrap justify-center gap-3"
        >
          {ARTICLE_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="inline-flex items-center rounded-full border border-violet-100 bg-white px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm transition hover:border-violet-200 hover:bg-violet-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-200"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <article className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <header className="bg-gradient-to-r from-violet-700 via-purple-700 to-violet-800 text-white p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              LED Ekran Kiralama: Etkinliklerde Yüksek Etki İçin Doğru Planlama
            </h3>
            <p className="text-violet-100 mt-4 text-lg md:text-xl leading-relaxed">
              Konserden fuara, kurumsal lansmandan gala gecelerine kadar her organizasyonda; güçlü görsel iletişim ve yüksek çözünürlüklü profesyonel çözümler
            </p>
          </header>

          <div className="p-8 md:p-10">
            <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:mt-4 prose-ul:mb-6 prose-li:marker:text-violet-500">
              <h3 id="led-ekran-nedir">LED Ekran Kiralama Nedir?</h3>
              <p>
                <strong>LED ekran kiralama</strong>, kısa veya orta süreli etkinlikler için yüksek görüntü kalitesi sunan LED ekran sistemlerinin
                kurulum, operasyon ve teknik destek dahil şekilde proje bazlı temin edilmesidir. Kalıcı ekipman yönetimi gerektirmeden profesyonel ekipman
                kullanmanıza olanak tanır.
              </p>

              <h3 id="neden-tercih-edilir">Neden LED Ekran Kiralama Tercih Edilmeli?</h3>
              <p>
                Dönemsel organizasyonlarda kalıcı yatırım yerine kiralama modeli, operasyon planlamasında daha esnek bir çözüm sunar.
                Doğru planlama ile hem izleyici deneyimi artar hem de teknik riskler minimuma iner.
              </p>
              <ul>
                <li>Kalıcı ekipman depolama ve bakım yükünü üstlenmeme</li>
                <li>Etkinliğe uygun m² ve Piksel Aralığı seçebilme</li>
                <li>Kurulum, söküm ve teknik operasyonun tek ekipten alınması</li>
                <li>İç Mekan ve Dış Mekan için farklı parlaklık / koruma alternatifleri</li>
              </ul>

              <h3 id="ic-dis-mekan-farki">İç Mekan ve Dış Mekan LED Ekran Farkı</h3>
              <p>
                İç mekan LED ekranlarda Absen P1.9 ile Unilumin P2.6 / P2.9 seçeneklerinde yakın izleme mesafesine uygun netlik ön plandadır. Dış mekan LED ekranlarda (P3.9 ve üzeri)
                ise güneş altında görünürlük, IP koruma sınıfı ve dayanıklılık kritik rol oynar.
              </p>

              <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={LED_BALLROOM_LAUNCH_IMAGE_SRC}
                  alt="İç mekan LED ekran kiralama uygulaması ve kurumsal lansman sahnesi"
                  width={1600}
                  height={1200}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 1080px"
                  quality={70}
                  loading="lazy"
                />
              </div>

              <div className="bg-violet-50 border-l-4 border-violet-600 rounded-r-2xl p-6 my-6">
                <h4 className="font-black text-violet-700 text-lg mb-3">Kamera Dostu Performans: 3840 Hz Yenileme Hızı</h4>
                <p className="text-gray-700 mb-0">
                  Unilumin P2.6 / P2.9 panellerin 3840 Hz yenileme hızı, televizyon çekimleri ve canlı yayınlarda
                  tarama çizgisi (moiré) ile titreşim (flicker) riskini azaltmaya yardımcı olur. Yüksek gri skala
                  derinliği sayesinde kamera karşısında daha dengeli bir görüntü akışı elde edilir.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 rounded-r-2xl p-6 mb-8">
                <h4 className="font-black text-green-700 text-lg mb-3">Flip-Shield ile Gelişmiş Köşe Koruması</h4>
                <p className="text-gray-700 mb-0">
                  Unilumin P2.6 / P2.9 panellerdeki <strong>Flip-Shield köşe koruma mekanizması</strong>, kurulum ve taşıma
                  sırasında panellerin hassas köşe noktalarını korumaya yardımcı olur. Bu yapı, piksel hasarı riskini
                  azaltarak operasyonel güvenliği destekler.
                </p>
              </div>

              <div className="bg-violet-50 border-l-4 border-violet-500 rounded-r-2xl p-6 my-8">
                <h4 className="font-black text-violet-700 text-xl mb-3">Hızlı Teknik Seçim İpucu</h4>
                <p className="text-gray-700 mb-0">
                  İzleyici ekrana ne kadar yakınsa piksel aralığı o kadar küçük olmalıdır. Yakın mesafede P1.9/P2.6/P2.9; orta-uzak mesafede P3.9/P4
                  tercih edilerek daha net ve dengeli görüntü elde edilir.
                </p>
              </div>

              <div className="not-prose my-8 rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-black text-gray-900">Etkinlik tipine göre LED ekran seçimi</h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Konferans, lansman, festival veya açık hava organizasyonu için ekran ölçüsü,
                  pixel pitch ve parlaklık kararını daha detaylı görmek isterseniz hazırladığımız
                  rehberi inceleyebilirsiniz.
                </p>
                <Link
                  href="/blog/etkinlikler-icin-led-ekran-secimi"
                  className="mt-4 inline-flex items-center font-bold text-violet-700 hover:text-violet-900"
                >
                  LED ekran seçimi rehberini oku
                </Link>
              </div>
              

              <h3 id="kurulum-sureci">LED Ekran Kurulumu Nasıl İlerler?</h3>
              <p>
                Profesyonel süreç; keşif, projelendirme, kurulum, test-kalibrasyon ve etkinlik anı teknik destek adımlarından oluşur. Bu yapı,
                yayın sırasında oluşabilecek kesinti riskini azaltır ve içerik akışının kontrollü şekilde yönetilmesine yardımcı olur.
              </p>

              <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={P19_TECHNICAL_CONTROL_IMAGE_SRC}
                  alt="Absen P1.9 indoor LED ekran kiralama kurulum süreci ve teknik prodüksiyon ekibi"
                  width={1600}
                  height={739}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 1080px"
                  quality={70}
                  loading="lazy"
                />
              </div>

              <h3 id="kullanim-senaryolari">Hangi Etkinliklerde Kullanılır?</h3>
              <ul>
                <li>Konser, festival ve sahne performansları</li>
                <li>Kurumsal Toplantı, Kongre ve Lansmanlar</li>
                <li>Fuar, Sergi ve Stant Organizasyonları</li>
                <li>Gala, Prestijli Davetler ve Canlı Yayın Prodüksiyonları</li>
                <li>AVM ve Perakende Alanlarında Dijital Reklam Gösterimleri</li>
              </ul>

              <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={LED_OUTDOOR_CONCERT_IMAGE_SRC}
                  alt="Açık hava konser ve etkinliklerde büyük LED ekran kiralama uygulaması"
                  width={1600}
                  height={1199}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 1080px"
                  quality={70}
                  loading="lazy"
                />
              </div>
              
              <h3 id="istanbul-kurulum-sureci">İstanbul'da LED Ekran Kiralama Süreci Nasıl İşler?</h3>
              <p>
                Megakent İstanbul'un lojistik zorluklarını bilerek, kurulum süreçlerimizi <strong>"Tam Zamanında Teslimat"</strong> ilkesine göre planlıyoruz. 
                Kadıköy'deki bir lansman ile Beylikdüzü'ndeki bir fuar organizasyonunun farklı trafik dinamiklerine sahip olduğunun bilincindeyiz. 
                Bu nedenle, İstanbul'un her iki yakasında bulunan teknik ekiplerimiz, etkinlikten saatler önce mekânda hazır bulunarak 
                montaj ve sinyal testlerini tamamlamaktadır.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-6 mt-8">
                <h4 className="font-black text-yellow-700 text-lg mb-3">Sonuç</h4>
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
      desc: "Line Array ses sistemleri ve akıllı robot ışık tasarımı ile profesyonel prodüksiyon çözümleri." 
    },
    { 
      href: "/sahne-kiralama", 
      title: "Sahne Kiralama", 
      Icon: Layers, 
      desc: "Modüler sahne sistemleri, güvenli truss yapıları ve estetik sahne dekor uygulamaları." 
    },
    { 
      href: "/podyum-kiralama", 
      title: "Podyum Kiralama", 
      Icon: Layout, 
      desc: "Profesyonel sahne platformları ve podyum sistemleri." 
    },
    { 
      href: "/cadir-kiralama", 
      title: "Çadır Kiralama", 
      Icon: Tent, 
      desc: "Profesyonel etkinlik çadırları ve tenteli alan çözümleri." 
    },
    {
      waTitle: "Kamera & Reji",
      title: "Kamera & Reji",
      Icon: Camera,
      desc: "Çok kameralı canlı yayın reji hizmetleri ve anlık görüntü miksajı.",
      external: true,
    },
  ];
  
  return (
    <section 
      className="py-20 bg-gradient-to-br from-gray-50 to-violet-100/30" 
      aria-labelledby="tamamlayici-hizmetler-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            id="tamamlayici-hizmetler-baslik" 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Tamamlayıcı{" "}
            <span className="text-violet-700">
              Hizmetlerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            LED ekran kurulumunuzu tamamlayacak diğer profesyonel etkinlik çözümlerimiz
          </p>
          <div 
            className="w-32 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mt-8 rounded-full" 
            aria-hidden="true" 
          />
        </div>

        <nav aria-label="Tamamlayıcı hizmetler">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.external ? getServiceWhatsappLink(service.waTitle ?? service.title) : service.href}
                {...(service.external ? { target: "_blank", rel: "nofollow noopener noreferrer" } : {})}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-violet-200 transition-all duration-500 hover:scale-105 text-center focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white h-full flex flex-col"
              >
                <div 
                  className="mb-6 text-violet-600 group-hover:scale-110 transition-transform duration-300" 
                  aria-hidden="true"
                >
                  <service.Icon size={36} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-violet-600 transition-colors mb-4 flex-grow">
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
        <div className="bg-gradient-to-r from-violet-700 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
          <div className="relative z-10">
            <h2 id="cta-baslik" className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Profesyonel LED Ekran Çözümlerine Hazır Mısınız?
            </h2>
            <p className="text-violet-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Türkiye'nin {PROVINCES_COUNT} ilinde kendi lojistik altyapımız ve uzman kadromuzla hızlı kurulum sağlıyoruz. Ücretsiz keşif, profesyonel danışmanlık ve
              etkinlik akışınıza uygun teknik planlamayla hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-violet-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-white shadow-lg"
              >
                <MessageCircle size={20} aria-hidden="true" className="mr-3" />
                <span className="text-lg">Hemen Teklif Al</span>
              </Link>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white shadow-lg"
              >
                <MessageCircle size={20} aria-hidden="true" className="mr-3" />
                <span className="text-lg">WhatsApp'tan Yaz</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== JSON-LD (LED Ekran Kiralama) ================== */
function LedScreenJsonLd() {
  const pageUrl = `${ORIGIN}/led-ekran-kiralama`;
  const pageDescription = metadata.description;
  const serviceId = `${pageUrl}#service`;
  const webPageId = `${pageUrl}#webpage`;
  const technicalDocumentId = `${pageUrl}#absen-p19-teknik-dokuman`;

  const providerRef = {
    "@id": ORGANIZATION_ID,
  };

  const serviceNode = {
    "@type": "Service",
    "@id": serviceId,
    name: "LED Ekran Kiralama",
    description: pageDescription,
    serviceType: "LED Ekran Kiralama Hizmeti",
    url: pageUrl,
    provider: providerRef,
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
      description:
        `Türkiye'nin ${PROVINCES_COUNT} ilinde profesyonel LED ekran kiralama hizmeti`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "LED ekran kiralama hizmet kapsamı",
      itemListElement: [
        "İç mekan LED ekran kiralama",
        "Dış mekan LED ekran kiralama",
        "LED wall kiralama",
        "Video wall kiralama",
        "Sahne LED ekran kurulumu",
        "Absen P1.9 kavisli LED ekran kiralama",
        "Unilumin P2.6 ve P2.9 LED ekran kiralama",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          provider: providerRef,
        },
        url: pageUrl,
      })),
    },
  };

  const webpageSchema = {
    "@type": "WebPage",
    "@id": webPageId,
    name: metadata.title,
    description: pageDescription,
    url: pageUrl,
    inLanguage: "tr-TR",
    mainEntity: {
      "@id": serviceId,
    },
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": serviceId,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${ORIGIN}${P19_PROOF_IMAGE_SRC}`,
      width: 1600,
      height: 739,
      caption: "Sahneva 300 m² Absen P1.9 Indoor LED ekran envanteri",
    },
    datePublished: PAGE_PUBLISHED_DATE,
    dateModified: PAGE_LAST_MODIFIED,
    author: providerRef,
  };

  const technicalDocumentSchema = {
    "@type": "DigitalDocument",
    "@id": technicalDocumentId,
    name: "Absen P1.9 Kavisli Indoor LED Ön Teknik Özellikler",
    description:
      "Müşteri teknik ekiplerinin ilk değerlendirmesi için Absen P1.9 kavisli indoor LED temel özelliklerini içeren İngilizce ön teknik bilgi föyü.",
    url: `${ORIGIN}${ABSEN_P19_TECHNICAL_PDF}`,
    encodingFormat: "application/pdf",
    inLanguage: "en",
    isPartOf: {
      "@id": webPageId,
    },
    about: {
      "@id": serviceId,
    },
  };

  const videoObjects = VIDEO_GALLERY.map((video, index) => ({
    "@type": "VideoObject",
    "@id": `${pageUrl}#video-${index + 1}`,
    name: video.title,
    description: video.description,
    uploadDate: video.uploadDate ?? undefined,
    ...(VIDEO_DURATIONS[video.id] ? { duration: VIDEO_DURATIONS[video.id] } : {}),
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    inLanguage: "tr-TR",
    isFamilyFriendly: true,
    publisher: providerRef,
    about: [{ "@id": serviceId }, ...getVideoEntities(video.id)],
    mainEntityOfPage: {
      "@id": webPageId,
    },
  }));
  const gallerySchema = buildImageGallerySchema({
    images: GALLERY_IMAGES,
    origin: ORIGIN,
    pageUrl,
    serviceId,
    webPageId,
    name: "LED ekran kiralama galeri görselleri",
  });
  const curvedP19ImageUrls = CURVED_P19_INSTALLATION_IMAGES.map(
    (image) => `${ORIGIN}${image.src}`
  );

  serviceNode.image = [...gallerySchema.imageUrls, ...curvedP19ImageUrls];
  webpageSchema.image = [
    `${ORIGIN}${P19_PROOF_IMAGE_SRC}`,
    `${ORIGIN}${HERO.src}`,
    ...gallerySchema.imageUrls,
    ...curvedP19ImageUrls,
  ];
  webpageSchema.hasPart = [
    { "@id": technicalDocumentId },
    ...VIDEO_GALLERY.map((video, index) => ({
      "@id": `${pageUrl}#video-${index + 1}`,
    })),
    ...(gallerySchema.galleryNode ? [{ "@id": gallerySchema.galleryId }] : []),
    ...gallerySchema.imageNodes.map((image) => ({ "@id": image["@id"] })),
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
      technicalDocumentSchema,
      ...(gallerySchema.galleryNode ? [gallerySchema.galleryNode] : []),
      ...gallerySchema.imageNodes,
      ...videoObjects,
      faqSchema,
    ],
  };

  return (
      <JsonLdScript
        id="ld-json-led-ekran"
        data={jsonLd}
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
      <LedScreenJsonLd />
      <Hero />
      <ServiceDecisionGuide guide={SERVICE_DECISION_GUIDES.ledScreen} />
      <QuickSelectionGuide />
      <VisualProofStrip />
      <StatsBand />
      <UseCases />
      <Services />
      <P19InvestmentProof />
      <TechnicalDocuments />
      <CurvedP19InstallationProof />
      <Technical />
      <WhySahneva />
      <Gallery />
      <RegionalService />
      <FAQ />
      <Articles />
      <RelatedServices />
      <ServiceBlogLinks {...CONTENT_CLUSTERS.ledScreen} links={CONTENT_CLUSTERS.ledScreen.guides} />
      {/*
        17 Ağu 2026 — sayfa sonundaki dört ayrı link bloğu ikiye indirildi.
        GlossaryTermLinks kaldırıldı: ServiceDecisionGuide zaten aynı terimleri
        (pixel pitch, parlaklık, kabinet, görüntü işlemcisi) sözlüğe bağlıyor.
        RegionalCityLinks kaldırıldı: tek bir /bolgesel-kiralama linki için
        tam genişlikte bölüm ayırıyordu.
        PaymentOptionsNote kaldırıldı: kiralama teklifi öncesi ödeme koşulu
        bu sayfada karar aşamasının dışında kalıyor.
      */}
      <CTA />
    </>
  );
}

// app/led-ekran-kiralama/page.jsx

import { YEARS_OF_EXPERIENCE } from "@/lib/experience";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildAlternatesForPath } from "@/lib/seo/alternates";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";
import AccessibleFaq from "@/components/AccessibleFaq.client";
import { VIDEO_DURATIONS, getVideoEntities } from "@/lib/seo/projectVideoFacts";
import JsonLdScript from "@/components/seo/JsonLd";
import PageHero from "@/components/PageHero";
import GlossaryTermLinks from "@/components/seo/GlossaryTermLinks";
import PaymentOptionsNote from "@/components/payments/PaymentOptionsNote";
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
const P19_KAHRAMANMARAS_EVENT_IMAGE_SRC =
  "/img/led/p19-kahramanmaras-acilis-led-ekran-sahneva.webp";
const P19_COP31_CONFERENCE_IMAGE_SRC =
  "/img/led/p19-cop31-konferans-led-ekran-sahneva.webp";
const P19_MALATYA_EVENT_IMAGE_SRC =
  "/img/led/p19-malatya-kura-toreni-led-ekran-sahneva.webp";
const P39_EVENT_STAGE_IMAGE_SRC = "/img/kurumsal/2.webp";
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
    positionClass: "object-[center_75%]",
  },
  {
    src: "/img/led/absen-p19-sekiz-panel-360-dairesel-led-arka-baglanti-sahneva.webp",
    alt: "Depoda 45 derece açıyla birleştirilen sekiz Absen P1.9 panelden oluşan 360 derece dairesel LED ekranın arka bağlantıları",
    eyebrow: "En küçük dairesel form",
    title: "8 panel × 45° = 360°",
    caption:
      "Sekiz Absen P1.9 panel, panel başına 45° açıyla birleştirilerek 360° dairesel form oluşturuldu. Bu en küçük dairesel kurulumumuzdur; daha büyük çaplar proje ölçüsüne göre panel sayısı ve birleşim açıları planlanarak hazırlanabilir.",
    positionClass: "object-[center_58%]",
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
    "İstanbul ve Türkiye genelinde LED ekran kiralama. 400 m² Absen P1.9 indoor, Unilumin P2.6/P2.9 ve P3.9 paneller; kurulum, NovaStar reji ve teknik ekip.",
  keywords:
    "led ekran kiralama, p1.9 led ekran, kavisli led ekran kiralama, p2.9 led ekran, p2.6 led ekran, p3.9 led ekran, led wall kiralama, video wall kiralama, outdoor led ekran, indoor led ekran, konser led ekran",
  alternates: buildAlternatesForPath("/led-ekran-kiralama"),
  openGraph: {
    title: "LED Ekran Kiralama İstanbul | Indoor & Outdoor LED Wall",
    description:
      "İstanbul ve Türkiye genelinde iç ve dış mekan LED wall kurulumları. 400 m² Absen P1.9, Unilumin P2.6/P2.9, NovaStar reji ve teknik ekip desteği.",
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
    image: P19_PROOF_DISPLAY_IMAGE_SRC,
    title: "İç Mekan LED Ekranlar",
    description: "Absen P1.9 ile Unilumin P2.6 ve P2.9 seçenekleriyle lansman, fuar, gala ve konferanslarda yakın izleme mesafesine uygun indoor LED ekran kurulumları.",
    features: ["Absen P1.9", "Unilumin P2.6 / P2.9", "400 m² Absen P1.9 Envanteri", "Yakın İzleme Netliği"],
    cta: { label: "Detaylı Bilgi" },
  },
  {
    Icon: Sun,
    image: LED_OUTDOOR_CONCERT_IMAGE_SRC,
    title: "Dış Mekan LED Ekranlar",
    description: "P3.9 dış mekan LED ekranlarla konser, festival, belediye etkinliği ve açık hava organizasyonlarında yüksek parlaklık ve güvenilir görüntü.",
    features: ["P3.9 Piksel Aralığı", "5000 - 6500+ Nit Parlaklık", "IP65 Hava Koşullarına Dayanıklılık", "UV Korumalı Panel Yapısı"],
    cta: { label: "Teklif Al" },
  },
  {
    Icon: Layers,
    image: "/img/led/absen-p19-kavisli-led-sahne-ust-bant-halka-sahneva.webp",
    title: "Video Wall Sistemleri",
    description: "Modüler LED wall ve video wall kurulumlarında görüntü kontrolü, NovaStar görüntü işlemcisi, teknik reji ve kreatif ekran tasarımı birlikte planlanır.",
    features: ["Modüler tasarım", "Esnek konfigürasyon", "Yüksek yenileme hızı", "Profesyonel kontrol", "Kavisli tasarım (-10°/+10°)"],
    cta: { label: "Kreatif Çözüm Planla" },
  },
  {
    Icon: Cpu,
    image: P19_TECHNICAL_CONTROL_IMAGE_SRC,
    title: "Kontrol & Yayın Sistemleri",
    description: "Profesyonel video işleme, kontrol ve canlı yayın sistemleri",
    features: ["NovaStar Görüntü İşlemcileri", "4K Scaler Altyapısı", "Medya Sunucuları", "Canlı Yayın Entegrasyonu", "3840 Hz Yenileme Hızı"],
    cta: { label: "Yayın Desteği" },
  },
  {
    Icon: Zap,
    image: LED_CORPORATE_CONFERENCE_ASIDE_IMAGE_SRC,
    title: "Kurulum & Rigging",
    description: "Profesyonel kurulum, truss sistemleri ve güvenlik çözümleri",
    features: ["Ground Stack Kurulum", "Truss ve Rigging Sistemleri", "Güvenlik ve Kilitleme Donanımları", "Hızlı Montaj Avantajı", "Click-Lock Güvenli Kilit Teknolojisi"],
    cta: { label: "Kurulum Planı" },
  },
  {
    Icon: Headphones,
    image: "/img/led/absen-p19-led-teknik-ekip-kablo-hazirlik-sahneva.webp",
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

const FAQ_ITEMS = [
  {
    q: "P1.9 indoor LED ekran hangi etkinliklerde kullanılır?",
    a: "P1.9 Indoor LED ekran; lansman, fuar, gala, konferans, üst düzey kurumsal toplantı ve yakın izleme mesafesi gerektiren salon kurulumlarında tercih edilir. Sahneva'nın 400 m² genişliğindeki Absen P1.9 Indoor LED envanteri, yakın izleme mesafesinde yüksek çözünürlüklü görüntü ve özmal altyapı gücü sağlar."
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
    <section
      id="sss" className="bg-white py-10 md:py-14" aria-labelledby="sss-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          <summary className="cursor-pointer list-none p-5 marker:content-none sm:p-7 [&::-webkit-details-marker]:hidden">
            <h2 id="sss-baslik" className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="max-w-2xl">
                <span className="block text-xs font-black uppercase tracking-[0.16em] text-violet-700">
                  {FAQ_ITEMS.length} yanıtlanmış soru
                </span>
                <span className="mt-2 block text-2xl font-black text-gray-900 md:text-3xl">
                  LED ekran hakkında sık sorulan sorular
                </span>
                <span className="mt-2 block text-sm font-medium leading-6 text-gray-600">
                  Fiyat, ölçü, pixel pitch, kurulum, teknik doküman ve operasyon yanıtlarını tek yerde açın.
                </span>
              </span>
              <span className="inline-flex min-h-11 shrink-0 items-center justify-center self-start rounded-full bg-violet-700 px-5 text-sm font-black text-white transition group-open:bg-slate-950 sm:self-auto">
                <span className="group-open:hidden">Soruları aç</span>
                <span className="hidden group-open:inline">Soruları kapat</span>
              </span>
            </h2>
          </summary>

          <div className="hidden border-t border-slate-200 bg-white p-4 group-open:block sm:p-6">
            <AccessibleFaq items={FAQ_ITEMS} />
            <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-gray-600">Başka bir teknik sorunuz varsa ekibimizle doğrudan görüşebilirsiniz.</p>
              <Link
                href="/sss"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-violet-700 px-5 text-sm font-black text-white transition hover:bg-violet-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
              >
                Tüm SSS sayfası
              </Link>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}

function CompactDecisionGuide() {
  const guide = SERVICE_DECISION_GUIDES.ledScreen;
  const questionCount = guide.questions.length;

  return (
    <section id="karar-rehberi" className="bg-slate-50 px-4 py-8 md:py-10" aria-label="İsteğe bağlı LED ekran seçim rehberi">
      <div className="mx-auto max-w-6xl">
        <details className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <summary className="flex cursor-pointer list-none flex-col gap-4 p-5 marker:content-none sm:flex-row sm:items-center sm:justify-between sm:p-7 [&::-webkit-details-marker]:hidden">
            <span className="max-w-3xl">
              <span className="block text-xs font-black uppercase tracking-[0.16em] text-violet-700">
                İsteğe bağlı teknik seçim aracı
              </span>
              <span className="mt-2 block text-xl font-black leading-tight text-slate-950 sm:text-2xl">
                {questionCount} soruda LED ekran planını netleştirin
              </span>
              <span className="mt-2 block text-sm leading-6 text-slate-600">
                Ortam, kurulum biçimi, izleme mesafesi ve içerik akışını seçerek teknik ekibe gönderilecek ilk briefi oluşturun.
              </span>
            </span>
            <span className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-black text-white transition group-open:bg-violet-700">
              <span className="group-open:hidden">Aracı aç</span>
              <span className="hidden group-open:inline">Aracı kapat</span>
            </span>
          </summary>
          <div className="hidden border-t border-slate-200 group-open:block [&>section]:py-10">
            <ServiceDecisionGuide guide={guide} />
          </div>
        </details>
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
            400 m² Absen P1.9 Indoor LED Envanteri
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

          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
            {inventoryProofImages.map((item) => (
              <figure key={item.src} className="w-[84vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-xl md:w-auto">
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

function CurvedP19ImageCard({ item, aspectClass, sizes, className = "" }) {
  return (
    <figure className={`${className} overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-xl`}>
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
  const [preAssembly, smallestCircularForm, stageInstallation, technicalRehearsal] =
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
              Absen P1.9 paneller önce depoda hedeflenen formda test edildi. Dairesel parçada sekiz panel, panel
              başına 45° açıyla birleştirilerek 360° form oluşturuldu; ardından kurulum etkinlik alanında görüntü
              provasından geçirildi.
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
          <div className="-mx-4 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-[1.25fr_0.75fr] md:overflow-visible md:px-0 md:pb-0">
            <CurvedP19ImageCard
              item={preAssembly}
              aspectClass="h-[320px] sm:h-[390px] lg:h-[480px]"
              sizes="(max-width: 768px) 86vw, 62vw"
              className="w-[86vw] shrink-0 snap-start md:w-auto"
            />
            <CurvedP19ImageCard
              item={smallestCircularForm}
              aspectClass="h-[320px] sm:h-[390px] lg:h-[480px]"
              sizes="(max-width: 768px) 72vw, 38vw"
              className="w-[72vw] shrink-0 snap-start md:w-auto"
            />
          </div>
          <div className="-mx-4 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-[0.75fr_1.25fr] md:overflow-visible md:px-0 md:pb-0">
            <CurvedP19ImageCard
              item={stageInstallation}
              aspectClass="h-[360px] sm:h-[480px] lg:h-[600px]"
              sizes="(max-width: 768px) 100vw, 38vw"
              className="w-[82vw] shrink-0 snap-start md:w-auto"
            />
            <CurvedP19ImageCard
              item={technicalRehearsal}
              aspectClass="h-[360px] sm:h-[480px] lg:h-[600px]"
              sizes="(max-width: 768px) 100vw, 62vw"
              className="w-[82vw] shrink-0 snap-start md:w-auto"
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

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {VISUAL_FLOW_IMAGES.map((item, index) => (
            <article
              key={item.src}
              className={`w-[84vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl md:w-auto ${
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
    <section
      id="hizmetler"
      className="bg-gradient-to-b from-white to-violet-50/50 py-14 md:py-16"
      aria-labelledby="hizmetler-baslik"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-700">Görsel çözüm portföyü</p>
            <h2 id="hizmetler-baslik" className="mt-3 text-3xl font-black leading-tight text-gray-900 md:text-5xl">
            LED Ekran Kiralama <span className="text-violet-700">Hizmetlerimiz</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              Indoor, outdoor, kavisli LED, görüntü kontrolü, rigging ve teknik operasyonu gerçek kurulum
              örnekleri üzerinden inceleyin.
            </p>
          </div>

          <nav aria-label="LED ekran fiyat ve ölçü araçları" className="flex flex-wrap gap-2">
            <Link
              href="/led-ekran-kiralama-fiyatlari"
              className="inline-flex min-h-11 items-center rounded-full border border-violet-200 bg-white px-4 text-sm font-black text-violet-800 transition hover:bg-violet-50"
            >
              Fiyat rehberi
            </Link>
            <Link
              href="/led-ekran-hesaplama"
              className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-white px-4 text-sm font-black text-slate-800 transition hover:bg-slate-50"
            >
              Ekran ölçüsü hesapla
            </Link>
          </nav>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const id = `svc-${slugify(service.title)}`;
            return (
              <article
                key={id}
                className="group relative min-h-[360px] w-[84vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl sm:w-auto"
                aria-labelledby={id}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} için Sahneva gerçek LED ekran kurulumu`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 84vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  unoptimized={shouldBypassLedImageOptimizer(service.image)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/62 to-slate-950/10" aria-hidden="true" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                  <div className="mb-3 inline-flex rounded-xl border border-white/15 bg-white/10 p-2.5 text-violet-100 backdrop-blur-sm">
                    <service.Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 id={id} className="text-xl font-black md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/78">
                    {service.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.features.slice(0, 2).map((feature) => (
                      <span key={feature} className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs font-bold text-white/90 backdrop-blur-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  {service.cta ? (
                    <a
                      href={getServiceWhatsappLink(service.title)}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-black text-slate-950 transition hover:bg-violet-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
                      aria-label={`${service.title} için ${service.cta.label}`}
                    >
                      {service.cta.label}
                      <ArrowRight size={17} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
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
    caption: "Geniş ölçekli kongre, lansman ve gala sahneleri için planlanan 400 m² Absen P1.9 indoor LED envanteri; yakın izleme mesafesinde yüksek çözünürlüklü, dengeli ve profesyonel bir görüntü alanı oluşturur.",
    technology: "Absen P1.9 Indoor",
  },
  {
    src: P19_KAHRAMANMARAS_EVENT_IMAGE_SRC,
    alt: "Kahramanmaraş açılış programında P1.9 indoor LED ekran ve protokol sahnesi kurulumu",
    caption: "Kahramanmaraş Açılış Programı | P1.9 Indoor LED | Geniş sunum yüzeyi, protokol sahnesi ve canlı görüntü akışı.",
    technology: "P1.9 Indoor",
  },
  {
    src: P19_COP31_CONFERENCE_IMAGE_SRC,
    alt: "COP31 diplomatik misyonlar bilgilendirme toplantısında geniş P1.9 indoor LED ekranlı konferans sahnesi",
    caption: "COP31 Diplomatik Misyonlar Toplantısı | P1.9 Indoor LED | Kamera çekimine ve yakın izlemeye uygun yüksek çözünürlüklü konferans ekranı.",
    technology: "P1.9 Indoor",
  },
  {
    src: P19_MALATYA_EVENT_IMAGE_SRC,
    alt: "Malatya kura töreninde P1.9 indoor LED ekranlı sahne ve canlı kamera görüntüsü",
    caption: "Malatya Kura Töreni | P1.9 Indoor LED | Sahne içeriği ve canlı kamera görüntülerinin tek geniş yüzeyde yönetimi.",
    technology: "P1.9 Indoor",
  },
  {
    src: P39_EVENT_STAGE_IMAGE_SRC,
    alt: "Etkinlik sahnesinde P3.9 LED ana ekran ve iki yan destek ekranı",
    caption: "Etkinlik Sahnesi | P3.9 LED Ekran | Ana görüntü yüzeyi ve yan destek ekranlarıyla geniş izleyici alanına yüksek görünürlük.",
    technology: "P3.9 Sahne LED",
  },
  {
    src: P19_TECHNICAL_CONTROL_IMAGE_SRC,
    alt: "Absen P1.9 indoor LED ekran sahnesinde teknik prodüksiyon kontrol masası ve canlı görüntü akışı",
    caption: "Teknik Operasyon | Absen P1.9 Indoor LED | Merkezi Kontrol Masası | Gerçek Zamanlı Sahne Yönetimi",
    technology: "Absen P1.9 Indoor",
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
    <section
      id="galeri" className="bg-slate-50 py-14 md:py-16" aria-labelledby="galeri-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-9 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-700">Sahneva görsel arşivi</p>
            <h2 id="galeri-baslik" className="mt-3 text-3xl font-black leading-tight text-gray-900 md:text-5xl">
              Gerçek LED Ekran <span className="text-violet-700">Kurulumlarımız</span>
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-gray-600 md:text-lg">
              Kurulum kapasitemizi, sahne entegrasyonunu ve prodüksiyon kalitesini gerçek saha görüntüleriyle gösteriyoruz.
            </p>
          </div>
          <Link
            href="/projeler"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-violet-200 bg-white px-5 text-sm font-black text-violet-800 transition hover:bg-violet-50 lg:self-auto"
          >
            <Eye size={18} aria-hidden="true" />
            Tüm projeleri görün
          </Link>
        </div>

        <div className="mb-12 grid items-start gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="relative self-start overflow-hidden rounded-3xl border border-gray-200 bg-slate-900 shadow-xl">
            <div className="relative h-[420px] sm:h-[520px] lg:h-[690px]">
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
                  Öne çıkan kurulum · {GALLERY_IMAGES[0].technology}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white">
                  Absen P1.9 Indoor LED ile Kurumsal Sahne Tasarımı
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/80">{GALLERY_IMAGES[0].caption}</p>
              </div>
            </div>
          </article>

          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:grid lg:overflow-visible lg:px-0 lg:pb-0">
            {GALLERY_IMAGES.slice(1, 3).map((image) => (
              <article
                key={image.src}
                className="w-[82vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg lg:w-auto"
              >
                <div className="relative h-[240px] lg:h-[260px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    loading="lazy"
                    unoptimized={shouldBypassLedImageOptimizer(image.src)}
                  />
                  {image.technology ? (
                    <span className="absolute left-4 top-4 rounded-full bg-slate-950/85 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-white backdrop-blur">
                      {image.technology}
                    </span>
                  ) : null}
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold leading-relaxed text-gray-700">{image.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <div className="mb-7">
            <h3 className="text-2xl font-black text-gray-900 md:text-3xl">Sahadan uygulama görselleri</h3>
            <p className="mt-2 text-base text-gray-600">Kurumsal salon, lansman, gala ve açık hava uygulamalarından seçilmiş gerçek kareler.</p>
          </div>
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4">
            {GALLERY_IMAGES.slice(3).map((image) => (
              <article
                key={image.src}
                className="w-[80vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:w-auto"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    loading="lazy"
                    unoptimized={shouldBypassLedImageOptimizer(image.src)}
                  />
                  {image.technology ? (
                    <span className="absolute left-4 top-4 rounded-full bg-slate-950/85 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-white backdrop-blur">
                      {image.technology}
                    </span>
                  ) : null}
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold leading-relaxed text-gray-700">{image.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="text-2xl font-black text-gray-900 md:text-3xl">
              Video <span className="text-violet-700">Galerisi</span>
            </h3>
            <p className="max-w-2xl text-base leading-relaxed text-gray-600">
              Gerçek kurulumlarımızdan ve saha operasyonlarımızdan seçilmiş kısa videolar
            </p>
          </div>

          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-3">
            {VIDEO_GALLERY.map((video) => (
              <article
                key={video.id}
                className="flex w-[86vw] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-xl md:w-auto"
                aria-labelledby={`video-${video.id}-title`}
              >
                <div className="relative w-full aspect-video bg-black">
                  <LazyVideoEmbed
                    videoId={video.id}
                    title={video.title}
                    thumbnailUrl={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  />
                </div>
                <div className="flex flex-grow flex-col p-5">
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
    <section id="teknik-altyapi" className="bg-gradient-to-b from-gray-50 to-white py-14 md:py-20" aria-labelledby="teknik-altyapi-baslik">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center md:mb-10">
          <h2 id="teknik-altyapi-baslik" className="mb-4 text-3xl font-black text-gray-900 md:mb-6 md:text-5xl lg:text-6xl">
            Teknik <span className="text-violet-700">Altyapımız</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En son teknoloji LED ekranlar ve profesyonel teknik altyapı ile hizmetinizdeyiz
          </p>
        </div>

        <div className="-mx-4 flex max-w-7xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-auto md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 lg:gap-6">
          {technicalItems.map((item) => {
            const detailsId = `${slugify(item.title)}-details`;

            return (
            <div key={item.category} className="group w-[82vw] shrink-0 snap-start md:w-auto">
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
    { value: "400 m²", label: "Absen P1.9 Indoor LED Envanteri" },
    { value: PROJECTS_COMPLETED, label: "Başarılı Proje" },
    { value: `${PROVINCES_COUNT} İl`, label: "Kendi Araçlarımızla Kurulum" },
    { value: `${YEARS_OF_EXPERIENCE}`, label: "Yıllık Deneyim" },
  ];

  return (
    <section
      id="saha-kaniti"
      aria-label="LED ekran saha kanıtı: envanter, proje ve kurulum sayıları" className="py-10 bg-[#0B1120]" >
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
      className="bg-gradient-to-b from-violet-50/50 to-white py-14 md:py-20"
      aria-labelledby="neden-sahneva-baslik"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8 text-center md:mb-16">
          <h2
            id="neden-sahneva-baslik"
            className="mb-4 text-3xl font-black text-gray-900 md:mb-6 md:text-5xl lg:text-6xl"
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

        <div className="-mx-4 flex max-w-6xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-auto md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 lg:gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="group w-[82vw] shrink-0 snap-start md:w-auto">
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

        <div className="mt-8 text-center md:mt-12">
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
    <section id="kullanim-alanlari" className="bg-slate-950 py-14 md:py-20" aria-labelledby="kullanim-alanlari-baslik">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-8 text-center md:mb-16">
          <h2 id="kullanim-alanlari-baslik" className="mb-4 text-3xl font-black text-white md:mb-6 md:text-5xl lg:text-6xl">
            LED Ekran <span className="text-violet-400">Kullanım Alanları</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Sektörel ihtiyaçlara özel, yüksek performanslı dijital görüntüleme çözümleri.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mt-8 rounded-full" aria-hidden="true" />
        </div>

        <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4 lg:gap-6">
          {USE_CASES.map((uc) => (
            <li
              key={uc.title}
              className="group w-[82vw] shrink-0 snap-start rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/30 hover:bg-white/10 md:w-auto"
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
  const operationHighlights = [
    {
      Icon: Truck,
      title: "İstanbul'da iki yaka",
      detail: "Araç erişimi, trafik ve yükleme saatine göre erken saha girişi planlanır.",
    },
    {
      Icon: Shield,
      title: "Marmara'da planlı sevkiyat",
      detail: "Rota, teknik ekip ve gerekiyorsa konaklama etkinlik takvimine bağlanır.",
    },
    {
      Icon: Users,
      title: "Türkiye geneli " + PROVINCES_COUNT + " il",
      detail: "Nakliye, kurulum, reji ve söküm aynı operasyon planında yönetilir.",
    },
  ];

  return (
    <section
      id="bolgesel-kiralama" className="bg-gray-50 py-14 md:py-16" aria-labelledby="bolgesel-kiralama-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8 max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-700">Kurulum ve lojistik ağı</p>
          <h2 id="bolgesel-kiralama-baslik" className="mt-3 text-3xl font-black leading-tight text-gray-900 md:text-5xl">
            İstanbul, Marmara ve Çevre İllerde <span className="text-violet-700">Lider Güç</span>
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-gray-600 md:text-lg">
            İstanbul trafiğini, çevre il rotalarını ve saha giriş saatlerini kurulum planının parçası olarak ele alıyoruz.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {operationHighlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 inline-flex rounded-xl bg-violet-50 p-2.5 text-violet-700">
                <item.Icon size={22} aria-hidden="true" />
              </div>
              <h3 className="font-black text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>

        <details className="group mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <summary className="flex cursor-pointer list-none flex-col gap-3 p-5 marker:content-none sm:flex-row sm:items-center sm:justify-between [&::-webkit-details-marker]:hidden">
            <span>
              <span className="block font-black text-slate-950">İlçe kapsamı ve lojistik karşılaştırması</span>
              <span className="mt-1 block text-sm leading-6 text-slate-600">Avrupa Yakası, Anadolu Yakası ve çevre il operasyon detaylarını açın.</span>
            </span>
            <span className="inline-flex min-h-11 shrink-0 items-center justify-center self-start rounded-full bg-slate-950 px-5 text-sm font-black text-white group-open:bg-violet-700 sm:self-auto">
              <span className="group-open:hidden">Detayları aç</span>
              <span className="hidden group-open:inline">Detayları kapat</span>
            </span>
          </summary>

          <div className="hidden border-t border-slate-200 p-4 group-open:block sm:p-6">
        <div className="mb-10 grid items-start gap-8 lg:grid-cols-2">
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
        <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
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
        </details>

      </div>
    </section>
  );
}

/* ================== Tamamlayıcı Hizmetler ================== */
function RelatedServices() {
  const services = [
    { href: "/ses-isik-sistemleri", title: "Ses & Işık", Icon: Music },
    { href: "/sahne-kiralama", title: "Sahne", Icon: Layers },
    { href: "/podyum-kiralama", title: "Podyum", Icon: Layout },
    { href: "/cadir-kiralama", title: "Çadır", Icon: Tent },
    {
      waTitle: "Kamera & Reji",
      title: "Kamera & Reji",
      Icon: Camera,
      external: true,
    },
  ];
  
  return (
    <section
      id="tamamlayici-hizmetler" 
      className="bg-gradient-to-br from-gray-50 to-violet-100/30 py-10 md:py-12"
      aria-labelledby="tamamlayici-hizmetler-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="tamamlayici-hizmetler-baslik" className="text-2xl font-black text-gray-900 md:text-3xl">
            Prodüksiyonu <span className="text-violet-700">tamamlayan hizmetler</span>
          </h2>
          <p className="text-sm font-medium leading-6 text-gray-600">
            Aynı teknik plan içinde birlikte çalışır.{" "}
            <Link href="/blog/etkinlikler-icin-led-ekran-secimi" className="font-black text-violet-700 hover:text-violet-900">
              LED ekran seçimi rehberi
            </Link>{" "}
            ·{" "}
            <Link href="/blog/led-ekran-kurulum-guvenligi" className="font-black text-violet-700 hover:text-violet-900">
              kurulum güvenliği
            </Link>
          </p>
        </div>

        <nav aria-label="Tamamlayıcı hizmetler">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.external ? getServiceWhatsappLink(service.waTitle ?? service.title) : service.href}
                {...(service.external ? { target: "_blank", rel: "nofollow noopener noreferrer" } : {})}
                className="group flex min-h-20 items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-violet-300 hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
              >
                <div className="shrink-0 rounded-xl bg-violet-50 p-2.5 text-violet-700" aria-hidden="true">
                  <service.Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-sm font-black leading-tight text-gray-900 transition-colors group-hover:text-violet-700">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </nav>
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
      caption: "Sahneva 400 m² Absen P1.9 Indoor LED ekran envanteri",
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
    limit: GALLERY_IMAGES.length,
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
/* ================== Kapanış CTA ================== */
function CTA() {
  return (
    <section id="cta" className="py-20 bg-white" aria-labelledby="cta-baslik">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-700 to-purple-700 p-8 text-center text-white md:p-12">
          <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
          <div className="relative z-10">
            <h2 id="cta-baslik" className="mb-6 text-3xl font-black md:text-4xl lg:text-5xl">
              LED Ekran Kurulumunuzu Birlikte Planlayalım
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-violet-100">
              Alan ölçüsü, izleme mesafesi ve içerik çözünürlüğünü paylaşın; uygun pixel
              pitch, kabinet sayısı ve kurulum yöntemini kalem kalem fiyatlandıralım.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/iletisim"
                className="focus-ring inline-flex transform items-center justify-center rounded-2xl bg-white px-8 py-4 font-bold text-violet-700 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span aria-hidden="true" className="mr-3 text-xl">📞</span>
                <span className="text-lg">Hemen Teklif Al</span>
              </Link>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring inline-flex transform items-center justify-center rounded-2xl border-2 border-white bg-transparent px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                <span aria-hidden="true" className="mr-3 text-xl">💬</span>
                <span className="text-lg">WhatsApp'tan Yaz</span>
              </a>
            </div>
            <p className="mt-6 text-sm font-semibold text-violet-100">
              Keşif ve ölçü danışmanlığı ücretsiz; teklif kalem kalem paylaşılır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

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
      <CompactDecisionGuide />
      <Services />
      <Gallery />
      <VisualProofStrip />
      <Technical />
      <P19InvestmentProof />
      <TechnicalDocuments />
      <StatsBand />
      <UseCases />
      <CurvedP19InstallationProof />
      <WhySahneva />
      <FAQ />
      <RelatedServices />
      <GlossaryTermLinks
        servicePath="/led-ekran-kiralama"
        title="LED ekran kararlarında geçen terimler"
        description="Pixel pitch, nit parlaklık, kabinet ve görüntü işlemcisi; ekran ölçüsünü ve izleme mesafesini doğrudan belirleyen başlıklar. Tanımlar sözlükte."
      />
      <RegionalService />
      <PaymentOptionsNote />
      <CTA />
    </>
  );
}

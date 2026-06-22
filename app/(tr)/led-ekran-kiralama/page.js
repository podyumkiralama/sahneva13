// app/led-ekran-kiralama/page.jsx

import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";
import AccessibleFaq from "@/components/AccessibleFaq.client";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import { CONTENT_CLUSTERS } from "@/lib/seo/contentClusters";
import JsonLdScript from "@/components/seo/JsonLd";
import { getLastModifiedForFile } from "@/lib/seoLastModified";
import { buildImageGallerySchema } from "@/lib/structuredData/imageGallery";
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
const LED_CORPORATE_CONFERENCE_IMAGE_SRC =
  "/img/led/kurumsal-konferans-led-ekran-sahne-isik-sahneva.webp";
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
const PREMIUM_LED_IMAGE_SRCS = new Set([
  P19_PROOF_IMAGE_SRC,
  P19_PROOF_DISPLAY_IMAGE_SRC,
  P19_TECHNICAL_CONTROL_IMAGE_SRC,
  LED_CORPORATE_CONFERENCE_IMAGE_SRC,
  LED_CORPORATE_CONFERENCE_ASIDE_IMAGE_SRC,
  LED_CORPORATE_CONFERENCE_CARD_IMAGE_SRC,
  LED_HYBRID_LAUNCH_IMAGE_SRC,
  LED_BALLROOM_LAUNCH_IMAGE_SRC,
  LED_GALA_STAGE_IMAGE_SRC,
  LED_GALA_STAGE_HERO_DESKTOP_IMAGE_SRC,
  LED_GALA_STAGE_HERO_TABLET_IMAGE_SRC,
  LED_GALA_STAGE_HERO_MOBILE_IMAGE_SRC,
  LED_OUTDOOR_CONCERT_IMAGE_SRC,
]);
const shouldBypassLedImageOptimizer = (src) => PREMIUM_LED_IMAGE_SRCS.has(src);
const PAGE_LAST_MODIFIED = getLastModifiedForFile(
  "app/(tr)/led-ekran-kiralama/page.js",
  "2026-01-14"
);
const PAGE_PUBLISHED_DATE = "2025-10-25";
const ORGANIZATION_ID = `${SITE_URL}/#org`;
const PHONE = "+905453048671";
const WA_TEXT = "Merhaba, LED ekran kiralama projemiz için profesyonel teklif almak istiyoruz. Etkinlik türü: [Konser/Fuar/Düğün], Tarih: [Tarih], Şehir: [Şehir].";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(WA_TEXT)}`;

const getServiceWhatsappLink = (title) => {
  const text = `Merhaba, ${title} hizmeti için detaylı bilgi ve fiyat teklifi almak istiyorum. Etkinlik tarihi: [gg.aa.yyyy], mekân: [iç/dış], tahmini ekran ölçüsü: [xx m2]`;
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`;
};

const LED_PIXEL_ROWS = [
  {
    model: "P1.9",
    badge: "Yeni Premium Envanter",
    badgeClass: "bg-cyan-100 text-cyan-700",
    clarity: "Ultra Fine Pixel",
    costIndex: "💰💰💰💰💰",
    distance: "1.9 m ve Üzeri",
    refreshRate: "3840 Hz",
    usage: "Lansman, Fuar, Gala, Konferans ve Yakın İzleme",
  },
  {
    model: "P2.5",
    badge: "Yüksek Çözünürlük Dengesi",
    badgeClass: "bg-purple-100 text-purple-700",
    clarity: "Ultra High HD",
    costIndex: "💰💰💰💰",
    distance: "2.5 m ve Üzeri",
    refreshRate: "3840 Hz",
    usage: "Lansman, Fuar ve Yakın İzleme Sunumları",
  },
  {
    model: "P2.9",
    badge: "En dengeli seçim",
    badgeClass: "bg-blue-100 text-blue-700",
    clarity: "High Definition",
    costIndex: "💰💰💰",
    distance: "3 m ve Üzeri",
    refreshRate: "3840 Hz",
    usage: "İç Mekan Etkinlikleri ve Hibrit Kullanım",
  },
  {
    model: "P3.9",
    badge: "En çok tercih edilen",
    badgeClass: "bg-green-100 text-green-700",
    clarity: "Standard HD",
    costIndex: "💰💰",
    distance: "4 m ve Üzeri",
    refreshRate: "3840 Hz",
    usage: "Dış Mekan, Konser ve Festival Sahneleri",
  },
];

/* ================== META ================== */
export const metadata = {
  title: "LED Ekran Kiralama İstanbul | P1.9, P2.9, P3.9 Indoor & Outdoor LED Wall",
  description:
    "İstanbul ve Türkiye genelinde iç mekan ve dış mekan LED ekran kiralama. 300 m² P1.9 Indoor LED envanteri, P2.9 ve P3.9 panel seçenekleri; kurulum, söküm, NovaStar reji ve teknik ekip desteğiyle eksiksiz proje çözümü.",
  keywords:
    "led ekran kiralama, p1.9 led ekran, p2.9 led ekran, p2.5 led ekran, p3.9 led ekran, led wall kiralama, video wall kiralama, outdoor led ekran, indoor led ekran, konser led ekran",
  alternates: buildLanguageAlternates({
    tr: "/led-ekran-kiralama",
    en: "/en/led-screen-rental",
    ru: "/ru/led-screen-rental",
    xDefault: "/led-ekran-kiralama",
    canonical: "/led-ekran-kiralama",
  }),
  openGraph: {
    title: "LED Ekran Kiralama İstanbul | P1.9, P2.9, P3.9 Indoor & Outdoor LED Wall",
    description:
      "İstanbul ve Türkiye genelinde iç mekan LED ekran, dış mekan LED ekran, LED wall ve video wall kurulumları. 300 m² P1.9 Indoor LED envanteri, NovaStar reji ve teknik ekip desteğiyle planlayın.",
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
  src: LED_GALA_STAGE_HERO_DESKTOP_IMAGE_SRC,
  tabletSrc: LED_GALA_STAGE_HERO_TABLET_IMAGE_SRC,
  mobileSrc: LED_GALA_STAGE_HERO_MOBILE_IMAGE_SRC,
  alt: "İstanbul LED ekran kiralama hizmeti için kurumsal sahnede LED wall, ses, ışık ve teknik reji kurulumu",
};

const SERVICES = [
  {
    Icon: Monitor,
    title: "İç Mekan LED Ekranlar",
    description: "P1.9, P2.5 ve P2.9 seçenekleriyle lansman, fuar, gala ve konferanslarda yakın izleme mesafesine uygun yüksek çözünürlüklü indoor LED ekran kurulumları.",
    features: ["P1.9 / P2.5 / P2.9 Piksel Aralığı", "300 m² P1.9 Indoor LED Envanteri", "Yakın İzleme Netliği", "4K Çözünürlük Desteği"],
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

const QUICK_SELECTION_STEPS = [
  {
    Icon: Layout,
    title: "Etkinlik tipini netleştirin",
    description:
      "Konser, fuar, lansman ya da açık hava etkinliği için ekranın kullanım biçimi ilk teknik kararı belirler.",
    points: ["İç Mekan / Dış Mekan", "Yakın İzleme / Uzak İzleme", "Sunum / Canlı Yayın / Reklam"],
  },
  {
    Icon: Eye,
    title: "Piksel aralığını seçin",
    description:
      "İzleme mesafesi düştükçe daha sık piksel aralığı gerekir. Böylece görüntü keskin kalır, bütçe de gereksiz yükselmez.",
    points: ["P1.9: Yakın İzleme Premium", "P2.5 / P2.9: İç Mekan", "P3.9: Açık Hava ve Geniş Alan"],
  },
  {
    Icon: MessageCircle,
    title: "Ölçü ve şehir bilgisini paylaşın",
    description:
      "m², kurulum saati ve şehir bilgisi geldiğinde teknik ekip doğru panel, taşıma ve kurulum planını aynı çizgide çıkarır.",
    points: ["Tahmini Ekran Ölçüsü", "Kurulum / Söküm Saatleri", "Şehir ve Mekan Tipi"],
  },
];

const QUICK_SELECTION_SCENARIOS = [
  {
    title: "Lansman ve fuar standı",
    recommendation: "P1.9 / P2.5",
    detail: "Yakın izleme ve sunum netliği için 300 m² P1.9 indoor LED envanterimizle yüksek çözünürlüklü iç mekan panel çözümleri önerilir.",
  },
  {
    title: "Kurumsal etkinlik ve hibrit sahne",
    recommendation: "P1.9 / P2.9",
    detail: "Salon içi kullanımda yakın izleme netliği ve bütçe dengesi birlikte planlanır.",
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

const SUCCESS_STORIES = [
  {
    title: "360° Senkronize Deneyim: Ankara Beştepe Lansmanı",
    category: "Devlet & Kamu Etkinliği",
    transformation: "Sıradan bir kongre salonu, 360 derecelik devasa dijital bir uzay üssüne dönüştü.",
    before: "Ankara Beştepe Kongre Merkezi'nde standart ekranların yetersiz kaldığı, devasa bir görsel alana ihtiyaç duyulması.",
    after: "Pnömatik dome yapıya entegre edilen P2.5 yüksek çözünürlüklü kavisli panellerle senkronize bir görüntü akışı sağlandı.",
    result: "300+ kişilik kongre katılımcısına yüksek çözünürlüklü canlı yayın aktarıldı; 8 saatlik etkinlik boyunca planlanan teknik akış korunarak yüksek müşteri memnuniyeti sağlandı.",
    quote: "Böylesine kritik bir canlı yayında yüksek senkronizasyon ve net görüntü kalitesiyle operasyonu başarıyla yönettiler.",
    client: "Organizasyon Komitesi",
  },
  {
    title: "Sarıyer Premium Açık Hava Kır Düğünü",
    category: "Özel Davet & Gala",
    transformation: "Gündüz ışığında sönük kalacak anılar, 6500 nit parlaklıkla açık havanın yıldızı oldu.",
    before: "İstanbul Sarıyer'de gündüz saatlerinde, açık alandaki yoğun güneş ışığı nedeniyle anı videolarının görünmeme riski.",
    after: "6500 nit parlaklığa sahip P3.9 dış mekan LED ekran kurularak, doğrudan güneş ışığı altında yüksek görünürlük ve netlik sağlandı.",
    result: "250+ davetlinin tamamı, en arka sıradaki misafirler dahil, canlı yayın görüntüsünü sinema kalitesinde izledi; kurulum etkinlik başlamadan 2 saat önce tamamlandı.",
    quote: "En mutlu günümüzde görüntü kalitesi harikaydı, her şey tam saatinde profesyonelce hazırdı.",
    client: "Gelin & Damat",
  },
  {
    title: "Kocaeli İzmit AVM İçi E-Spor Turnuvası",
    category: "Spor & Eğlence",
    transformation: "Sessiz bir AVM köşesi, yüzlerce kişinin heyecanla maçı takip ettiği dev bir dijital arenaya evrildi.",
    before: "Kocaeli İzmit'teki dar kapalı alanda kalabalık bir kitlenin anlık skorları ve oyun içi hızlı hareketleri takip edememesi.",
    after: "Hızlı kurulan paneller ve 3840 Hz yenileme hızına sahip ekranlarla, kamera dostu ve yüksek kare hızlı oyun yayını gerçekleştirildi.",
    result: "500+ izleyiciye anlık skor ve oyun yayını yüksek senkronizasyonla aktarıldı; AVM'nin o bölgesindeki etkinlik trafiği organizatörün beklentisinin belirgin biçimde üzerine çıktı.",
    quote: "Oyuncuların dinamizmine ayak uyduran, kamera dostu ve güçlü bir ekran kurulumu oldu.",
    client: "Etkinlik Koordinatörü",
  },
  {
    title: "İstanbul TÜYAP Fuarında Havada Asılı LED Box",
    category: "Kurumsal Fuar",
    transformation: "Standart tasarımların arasında kaybolan fuar alanı, havada süzülen 4 cepheli bir çekim merkezine dönüştü.",
    before: "Beylikdüzü TÜYAP Fuar alanında markanın öne çıkabilmesi için havada duran yaratıcı bir dijital tasarıma ihtiyaç vardı.",
    after: "Hafif kasa modülleri ve profesyonel truss askı sistemleri kullanılarak güvenli, 4 cepheli bir LED Box oluşturuldu.",
    result: "Stant ziyaret süresi önceki yıla kıyasla gözlemlenebilir ölçüde uzadı; 4 cepheli yapı sayesinde marka görünürlüğü hol genelinde güçlendirildi.",
    quote: "Tasarım tam istediğimiz gibi havada asılı ve çok dikkat çekiciydi. Ekibin rigging uzmanlığına hayran kaldık.",
    client: "Kurumsal İletişim Müdürü",
  },
  {
    title: "Üniversite Mezuniyet Töreni: 2.000 Kişilik Dev Salon",
    category: "Eğitim & Tören",
    transformation: "Projeksiyon ışığının yetersiz kaldığı devasa salon, her köşeye eşit parlaklık sunan LED wall ile dönüştü.",
    before: "Ankara'da 2.000 kişilik üniversite mezuniyet salonunda projektörün uzak tribünlere yetmemesi ve görüntü solgunluğu sorunu.",
    after: "P2.9 yüksek çözünürlüklü 12m × 4m LED ekran, salonun ön cephesine monte edilerek tüm oturma sektörlerine eşit parlaklık sağlandı.",
    result: "2.000 mezun ve ailesine yüksek görünürlüklü sahne destek ekranları sunuldu; kurulum standart projeksiyon sistemine kıyasla belirgin şekilde daha hızlı tamamlandı.",
    quote: "En arka sıradaki veliler de konuşmacıyı daha net takip edebildi. LED ekran kurulumu organizasyonun görünürlüğünü güçlendirdi.",
    client: "Üniversite Organizasyon Koordinatörü",
  },
  {
    title: "Cumhuriyet Bayramı Kutlaması: İlçe Meydanı Konseri",
    category: "Belediye & Açık Hava",
    transformation: "Meydan kalabalığında sahneden kopuk kalan vatandaşlar, 8.000 kişiyi saran dijital deneyimle buluştu.",
    before: "İstanbul'da kalabalık meydan etkinliğinde sahne arkasındaki ve yan kesimlerdeki vatandaşların sanatçıyı görmekte zorlanması.",
    after: "IP65 korumalı P3.9 dış mekan LED ekranlar sahnenin iki yanına konumlandırılarak 180° görüş açısı ve 6500 nit parlaklık sağlandı.",
    result: "8.000+ vatandaşın katıldığı etkinlikte sahne destek ekranlarıyla geniş izleyici alanına güçlü görüntü aktarımı sağlandı.",
    quote: "Sahneyi doğrudan göremeyen alanlarda ekranlar izleyici deneyimini belirgin şekilde güçlendirdi.",
    client: "Belediye Kültür Müdürlüğü",
  },
];

const FAQ_ITEMS = [
  {
    q: "P1.9 indoor LED ekran hangi etkinliklerde kullanılır?",
    a: "P1.9 Indoor LED ekran; lansman, fuar, gala, konferans, üst düzey kurumsal toplantı ve yakın izleme mesafesi gerektiren salon kurulumlarında tercih edilir. Sahneva'nın 300 m² genişliğindeki P1.9 Indoor LED envanteri, en yakın izleme açısında bile yüksek çözünürlüklü görüntü kalitesi ve özmal altyapı gücü sağlar."
  },
  {
    q: "İç Mekan (Indoor) ve Dış Mekan (Outdoor) LED Ekran Arasındaki Fark Nedir?",
    a: "Temel fark parlaklık ve dayanıklılıktır. İç mekan ekranlar 800-1500 nit parlaklık sunarken, dış mekan ekranlar güneş ışığında görünürlük için 5000-6500 nit parlaklığa ve IP65 su geçirmezlik korumasına sahiptir. Ayrıca dış mekan modellerinde piksel aralığı genellikle daha geniştir (P3.9, P4.8)."
  },
  {
    q: "Kadıköy, Şişli veya Beşiktaş gibi merkezi ilçelerde acil kurulum mümkün mü?",
    a: "Evet, İstanbul içi operasyonlarımızda her iki yakadaki depolarımız sayesinde, acil taleplerde trafiğe takılmadan aynı gün veya birkaç saat içinde mobil ekiplerimizle hızlı kurulum yapabiliyoruz. Erken saatte mobilize olarak İstanbul trafiğini ekarte ediyoruz."
  },
  {
    q: "Kocaeli, Bursa veya Tekirdağ gibi çevre iller için hafta sonu teknik destek ve nakliye ücreti nasıl hesaplanıyor?",
    a: "Çevre illerdeki hafta sonu etkinlikleriniz için 7/24 teknik destek planı oluşturuyoruz. Nakliye ve varsa personel konaklama maliyetlerini ilk teklifimizde tamamen şeffaf bir şekilde listeliyoruz; sonradan gizli ücret çıkarmıyoruz."
  },
  {
    q: "İstanbul dışında, Marmara'nın hava şartlarına uygun ekranlarınız var mı?",
    a: "Kesinlikle. Özellikle açık hava etkinliklerinde sürpriz yağışlara karşı IP65 koruma sınıfına sahip dış mekan panelleri kurarak yayınınızı güvence altına alıyoruz."
  },
  {
    q: "Daha önce bizimkine benzer bir etkinlikte nasıl bir çözüm sundunuz?",
    a: "Her etkinlik tipi için gerçek uygulama örneklerimiz var. Örneğin Kocaeli'de 500+ izleyicili e-spor turnuvasında 3840 Hz yenileme hızıyla kamera dostu oyun yayını planladık. TÜYAP'ta havada asılı 4 cepheli LED Box ile stant görünürlüğünü güçlendirdik. Açık hava davetlerinde 6500 nit parlaklıkla yüksek görünürlük sağlayan dış mekan ekran çözümleri kurduk. Belediye meydan konserlerinde geniş kitlelere yönelik sahne destek ekranlarıyla izleyici deneyimini güçlendirdik. Sizi en yakın referansımızla eşleştirip teknik detayları paylaşabiliriz."
  }
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

        <AccessibleFaq items={FAQ_ITEMS} />

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla sorunuz mu var? Uzman ekibimiz sizi arayıp bilgilendirsin.
          </p>
          <Link
            href="/sss"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
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
      className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50"
      aria-labelledby="led-secim-rehberi-baslik"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="led-secim-rehberi-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-5"
          >
            Doğru LED Ekranı <span className="text-blue-700 normal-case">3 adımda seçin</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sayfayı baştan sona incelemeden önce, projeniz için doğru panel tipini ve teklif akışını hızlıca netleştirebilirsiniz.
          </p>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-[1.15fr_0.85fr] xl:gap-6">
          <div className="space-y-5">
            {QUICK_SELECTION_STEPS.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[2rem] border border-gray-200 bg-white p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <step.Icon size={28} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-700">
                      Adım {index + 1}
                    </div>
                    <h3 className="text-2xl font-black text-gray-900">{step.title}</h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">{step.description}</p>
                    <ul className="mt-5 grid gap-3 md:grid-cols-3">
                      {step.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-xl bg-slate-100/80 px-3.5 py-2.5 text-[13px] font-semibold text-slate-700 md:text-sm"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 self-start max-w-[23rem] xl:max-w-[24rem]">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 text-white shadow-2xl">
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
                        <span className="shrink-0 rounded-full bg-blue-500/20 px-2.5 py-1 text-xs font-bold text-blue-200">
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
    <section className="bg-white py-14 md:py-20" aria-labelledby="p19-yatirim-baslik">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-blue-700">
            Özmal Envanter Gücü
          </div>
          <h2 id="p19-yatirim-baslik" className="text-3xl font-black leading-tight text-gray-900 md:text-5xl">
            300 m² P1.9 Indoor LED Envanteri
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600 md:text-xl">
            Türkiye'de sayılı firmada bulunan P1.9 Indoor LED altyapısıyla lansman, fuar, gala ve konferanslarda
            yakın izleme mesafesinde yüksek çözünürlüklü ve dengeli görüntü altyapısı kuruyoruz.
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

        <figure className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-2xl">
          <div className="relative aspect-[16/9]">
            <Image
              src={P19_PROOF_DISPLAY_IMAGE_SRC}
              alt="Sahneva 300 m² P1.9 indoor LED ekran kurulumu ile kurumsal gala ve konferans sahnesi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 54vw"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-transparent to-transparent" />
          </div>
          <figcaption className="absolute inset-x-5 bottom-5">
            <span className="inline-flex rounded-full bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-100 backdrop-blur">
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

function VisualProofStrip() {
  return (
    <section className="pt-10 pb-10 md:pt-14 md:pb-14 bg-gradient-to-b from-slate-900 via-[#11182b] to-[#0B1120]" aria-labelledby="gorsel-ritim-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8 text-center">
          <h2 id="gorsel-ritim-baslik" className="text-3xl md:text-4xl font-black text-white mb-3">
            Gerçek Kurulumlardan <span className="text-blue-400">Hızlı Görsel Özet</span>
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Sayfadaki teknik akışı desteklemesi için farklı kullanım senaryolarından seçilmiş örnek kurulumları öne çıkardık.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {VISUAL_FLOW_IMAGES.map((item, index) => (
            <article
              key={item.src}
              className={`overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl ${
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
                  <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-blue-300">
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
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#05070d] pt-24 pb-14 md:pt-28 md:pb-20 lg:min-h-[760px] lg:pt-32 lg:pb-24" aria-labelledby="hero-title">
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 640px)" srcSet={HERO.mobileSrc} />
          <source media="(max-width: 1024px)" srcSet={HERO.tabletSrc} />
          <img
            src={HERO.src}
            alt={HERO.alt}
            width="1440"
            height="810"
            className="absolute inset-0 h-full w-full object-cover object-center"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,.92)_0%,rgba(2,6,23,.64)_42%,rgba(2,6,23,.24)_72%,rgba(2,6,23,.06)_100%)]" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/70 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#05070d] via-[#05070d]/60 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:96px_96px]" aria-hidden="true" />
      </div>

      <div className="relative z-10 container mx-auto grid max-w-7xl items-end gap-10 px-4 text-white lg:min-h-[560px] lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-3 border border-white/20 bg-black/30 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.85)]" aria-hidden="true" />
            <span>İstanbul ve Türkiye geneli LED ekran kiralama</span>
          </div>

          <h1 id="hero-title" className="max-w-4xl text-5xl font-black leading-[0.96] text-white md:text-7xl lg:text-8xl">
            LED Ekran Kiralama
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85 md:text-2xl">
            İstanbul ve Türkiye genelinde LED ekran kiralama hizmeti sunuyoruz. İç mekan LED ekran, dış mekan LED
            ekran, LED wall ve video wall çözümlerini; kurulum, söküm, teknik ekip, görüntü işlemcisi ve reji
            desteğiyle birlikte projeye özel planlıyoruz.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5 text-sm font-semibold text-white/85">
            {["İç Mekan LED", "Dış Mekan LED", "LED Wall & Video Wall", "Reji ve Teknik Ekip"].map((item) => (
              <span key={item} className="border border-white/15 bg-white/10 px-3.5 py-2 backdrop-blur-sm">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Teklif Al - WhatsApp üzerinden LED ekran kiralama teklifi alın"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 bg-white px-6 py-4 font-bold text-slate-950 transition hover:bg-emerald-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
            >
              <MessageCircle size={20} aria-hidden="true" />
              <span>Teklif Al</span>
            </Link>

            <Link
              href="/led-ekran-hesaplama"
              aria-label="LED ekran hesaplama aracına gidin"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 border border-white/30 bg-black/25 px-6 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              <Monitor size={20} aria-hidden="true" />
              <span>LED Ekran Hesapla</span>
            </Link>
          </div>
        </div>

        <aside className="hidden border border-white/15 bg-black/30 p-5 backdrop-blur-md lg:block" aria-label="LED ekran hero operasyon özeti">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <CheckCircle size={22} className="text-emerald-300" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-white/80">Sahneva LED Ops</p>
              <p className="text-lg font-black text-white">Teknik operasyon akışı</p>
            </div>
          </div>
          <dl className="mt-5 grid gap-4">
            {[
              ["Indoor", "iç mekan LED"],
              ["Outdoor", "dış mekan LED"],
              ["700+", "tamamlanan proje"],
              ["81 il", "kurulum operasyonu"],
            ].map(([value, label]) => (
              <div key={label} className="grid grid-cols-[5.5rem_1fr] items-baseline gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                <dt className="text-2xl font-black text-white">{value}</dt>
                <dd className="text-sm font-medium text-white/85">{label}</dd>
              </div>
            ))}
          </dl>
        </aside>
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
            LED Ekran Kiralama <span className="text-blue-700">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Indoor LED ekran, outdoor LED ekran, LED wall ve video wall kurulumlarını etkinlik tipine göre; ekran ölçüsü, izleme mesafesi, piksel aralığı, taşıyıcı sistem, reji ve teknik ekip ihtiyacıyla birlikte planlıyoruz.
          </p>
          <p className="mt-5 text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Yalnızca başlangıç m² bedellerini ve bütçe aralığını görmek isteyenler için{" "}
            <Link href="/led-ekran-kiralama-fiyatlari" className="font-black text-blue-700 underline underline-offset-4 hover:text-blue-900">
              güncel LED ekran kiralama fiyatları
            </Link>{" "}
            sayfasında ayrı bir fiyat rehberi hazırladık.
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
                        href={getServiceWhatsappLink(service.title)}
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

/* ================== Galeri Verileri ================== */
const GALLERY_IMAGES = [
  {
    src: P19_PROOF_DISPLAY_IMAGE_SRC,
    alt: "Sahneva 300 m² P1.9 indoor LED ekran kurulumu ile kurumsal gala ve konferans sahnesi",
    caption: "Geniş ölçekli kongre, lansman ve gala sahneleri için planlanan 300 m² P1.9 indoor LED envanteri; yakın izleme mesafesinde yüksek çözünürlüklü, dengeli ve profesyonel bir görüntü alanı oluşturur."
  },
  {
    src: P19_TECHNICAL_CONTROL_IMAGE_SRC,
    alt: "P1.9 indoor LED ekran sahnesinde teknik prodüksiyon kontrol masası ve canlı görüntü akışı",
    caption: "Teknik Operasyon | P1.9 Indoor LED | Merkezi Kontrol Masası | Gerçek Zamanlı Sahne Yönetimi"
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
    src: P19_PROOF_DISPLAY_IMAGE_SRC,
    alt: "Sahneva 300 m² P1.9 indoor LED ekran kurulumu ile kurumsal gala ve konferans sahnesi",
    eyebrow: "P1.9 indoor LED",
    title: "300 m² özmal LED görüntü altyapısı",
    detail: "Yakın izleme mesafesinde net, parlak ve yüksek çözünürlüklü görüntü kalitesi.",
  },
  {
    src: P19_TECHNICAL_CONTROL_IMAGE_SRC,
    alt: "Kurumsal konferans sahnesinde teknik prodüksiyon kontrol masası ve P1.9 LED ekran",
    eyebrow: "Operasyon kontrolü",
    title: "Sahne Arkasında Kontrollü Teknik Operasyon",
    detail: "Görüntü, ses ve ışık senkronizasyonu tek merkezden yönetilir; operasyonel riskler kontrollü planlama ile azaltılır.",
  },
  {
    src: LED_HYBRID_LAUNCH_IMAGE_SRC,
    alt: "Kurumsal ürün lansmanı sahnesinde LED wall ve ışık prodüksiyonu",
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
            Gerçek LED Ekran <span className="text-blue-700">Kurulumlarımız</span>
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
          <article className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-slate-900 shadow-xl">
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
                <div className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-200 backdrop-blur">
                  Öne çıkan kurulum
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white">
                  P1.9 Indoor LED ile Kurumsal Sahne Tasarımı
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/80">{GALLERY_IMAGES[0].caption}</p>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            {GALLERY_IMAGES.slice(1, 3).map((image) => (
              <article
                key={image.src}
                className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-lg"
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

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {SUCCESS_STORIES.slice(0, 4).map((story, index) => (
            <article key={index} className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
              
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-wider">
                  {story.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight">{story.title}</h3>
              
              <p className="text-blue-700 font-semibold italic text-base mb-6 pb-6 border-b border-gray-100">
                ✨ {story.transformation}
              </p>
              
              <div className="space-y-5 flex-grow">
                <div className="relative pl-4 border-l-4 border-orange-400">
                  <p className="text-xs font-black text-orange-800 uppercase tracking-widest mb-1">Durum / İhtiyaç</p>
                  <p className="text-gray-700 text-sm">{story.before}</p>
                </div>
                <div className="relative pl-4 border-l-4 border-blue-500">
                  <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">Teknik Çözüm</p>
                  <p className="text-gray-700 text-sm">{story.after}</p>
                </div>
                <div className="relative pl-4 border-l-4 border-green-500">
                  <p className="text-xs font-black text-green-800 uppercase tracking-widest mb-1">Etki / Sonuç</p>
                  <p className="text-gray-900 font-medium text-sm">{story.result}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 bg-gray-50/50 -mx-8 -mb-8 p-8 rounded-b-[2rem]">
                <div className="flex gap-3">
                  <MessageCircle className="text-blue-300 flex-shrink-0" size={32} />
                  <div>
                    <p className="text-gray-700 italic text-sm mb-2 font-medium">"{story.quote}"</p>
                    <p className="text-xs font-black text-gray-900 uppercase tracking-wider">— {story.client}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
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
                className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
              Video <span className="text-blue-700">Galerisi</span>
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

        <div className="mt-16 bg-gradient-to-br from-blue-900 to-slate-900 rounded-[2.5rem] p-8 md:p-14 text-center border border-blue-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              Daha Fazla İlham Mı Arıyorsunuz?
            </h3>
            
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Daha fazla uygulama örneği ve detaylı görsel için <a href="/projeler" className="underline font-bold text-white hover:text-blue-200 transition-colors">Tüm Proje Galerimizi inceleyin</a>. Yüzlerce başarılı referansımız arasından etkinliğinize en uygun LED ekran çözümünü birlikte tasarlayalım.
            </p>
            
            <Link
              href="/projeler"
              className="inline-flex items-center justify-center font-black px-10 py-5 rounded-2xl bg-white text-blue-900 hover:bg-blue-50 transform transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
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
            Doğru piksel seçimi, görüntü netliği ve bütçe optimizasyonu için kritik öneme sahiptir.
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
                <th className="px-6 py-4 font-bold text-gray-900">Maliyet Endeksi</th>
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
                  <td className="px-6 py-4 text-gray-700">{row.costIndex}</td>
                  <td className="px-6 py-4 text-gray-700">{row.distance}</td>
                  <td className="px-6 py-4 font-semibold text-blue-700">{row.refreshRate}</td>
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
      features: ["P1.9: Yakın İzleme Premium İç Mekan", "P2.5 / P2.9: İç Mekan ve Hibrit", "P3.9: Açık Hava ve Geniş Alan", "P4.8: Uzak Mesafe (Opsiyonel)"]
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
    <section id="teknik-altyapi" className="py-14 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="altyapi-baslik">
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
          {technicalItems.map((item) => {
            const detailsId = `${slugify(item.title)}-details`;

            return (
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
                  <summary
                    aria-controls={detailsId}
                    className="cursor-pointer select-none font-semibold text-gray-900"
                  >
                    Detayları gör
                  </summary>
                  <ul id={detailsId} className="mt-3 space-y-2">
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
    { value: "300 m²", label: "P1.9 Indoor LED Envanteri" },
    { value: "700+", label: "Başarılı Proje" },
    { value: "81 İL", label: "Kendi Araçlarımızla Kurulum" },
    { value: "10+", label: "Yıllık Deneyim" },
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
      title: "Türkiye Geneli 81 İl Hizmet",
      description:
        "Uzman teknik kadromuz kurulumdan söküme kadar her aşamada sahada yer alarak operasyonel süreci planlı ve kontrollü şekilde yönetir.",
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
            LED Ekran <span className="text-blue-700">Teknik Altyapımız</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unilumin URMIII serisi paneller ve entegre sahne deneyimiyle yüksek standartlı prodüksiyon altyapısı
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
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
            aria-label="Teknik Danışmanlık Alın - Unilumin URMIII teknolojisi hakkında detaylı bilgi ve teklif alın"
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
            LED Ekran <span className="text-blue-400">Kullanım Alanları</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Sektörel ihtiyaçlara özel, yüksek performanslı dijital görüntüleme çözümleri.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full" aria-hidden="true" />
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {USE_CASES.map((uc) => (
            <li
              key={uc.title}
              className="bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
            >
              <div className="text-blue-400 mb-5 group-hover:scale-110 transition-transform">
                <uc.Icon size={32} strokeWidth={1.5} />
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
            İstanbul, Marmara ve Çevre İllerde <span className="text-blue-700">Lider Güç</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bölgenizin coğrafi ve lojistik dinamiklerini biliyoruz. İstanbul trafiğine özel erken kurulum stratejilerimiz ve çevre illere özel şeffaf nakliye çözümlerimizle etkinliklerinizi güvence altına alıyoruz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Sol Taraf: Bölgesel Dağılım */}
          <div className="space-y-8">
            {regions.map((region) => (
              <div key={region.name} className="group p-6 bg-white rounded-2xl border-l-4 border-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                <h3 className="font-black text-gray-900 text-xl mb-2">{region.name}</h3>
                <p className="text-gray-700 mb-3">{region.detail}</p>
                <div className="text-sm font-semibold text-blue-800 bg-blue-100/50 p-3 rounded-xl border border-blue-100">
                  📍 Kapsam: {region.districts}
                </div>
              </div>
            ))}
          </div>

          {/* Sağ Taraf: Operasyonel Güvence */}
          <div className="bg-slate-900 rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-50 pointer-events-none"></div>
            
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-blue-400">
              <Shield size={28} /> Operasyonel Avantajlarımız
            </h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl h-fit"><Truck className="text-blue-400" /></div>
                <div>
                  <h4 className="font-bold text-lg">Trafik ve Zaman Yönetimi</h4>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">
                    Megakent İstanbul'un trafiğine karşı etkinlikten saatler önce alana giriyoruz. Asya ve Avrupa yakasındaki bağımsız ekiplerimizle operasyonel gecikme riskini minimuma indiriyoruz.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-green-500/20 p-3 rounded-xl h-fit"><Zap className="text-green-400" /></div>
                <div>
                  <h4 className="font-bold text-lg">Hava Şartlarına Tam Uyum</h4>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">
                    Marmara'nın değişken havasına karşı, özellikle açık hava etkinliklerinde IP65 koruma sınıfına sahip dış mekan panelleriyle yayın altyapısını güvenceye alıyoruz.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-500/20 p-3 rounded-xl h-fit"><Users className="text-orange-400" /></div>
                <div>
                  <h4 className="font-bold text-lg">Şeffaf Çevre İl Lojistiği</h4>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">
                    Bursa, Tekirdağ, Kocaeli gibi illere giden konaklamalı teknik ekiplerimiz için nakliye ve ulaşım bedelleri ilk teklifte şeffaf şekilde listelenir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lojistik ve Fiyatlandırma Karşılaştırma Tablosu */}
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
                  <th className="px-8 py-6 font-black text-blue-800 w-3/8 bg-blue-50 border-b-2 border-blue-200">İstanbul İçi (Avrupa & Anadolu)</th>
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
                  <td className="px-8 py-5 font-bold text-gray-800">Nakliye Ücretlendirmesi</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Çoğu merkezi ilçede fiyata dahil veya avantajlı nakliye planı.</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Kilometre bazlı şeffaf, avantajlı ve sabit fiyat politikası.</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Teknik Ekip & Konaklama</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Yerel nöbetçi ekiplerle anlık destek; konaklama maliyeti oluşmaz.</td>
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
            LED Ekran Kiralama <span className="text-blue-700">Rehberi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Etkinliğiniz için doğru LED ekranı seçmek, kurulum sürecini planlamak ve bütçeyi optimize etmek için kapsamlı rehber
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
              className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <article className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              LED Ekran Kiralama: Etkinliklerde Yüksek Etki İçin Doğru Planlama
            </h3>
            <p className="text-blue-100 mt-4 text-lg md:text-xl leading-relaxed">
              Konserden fuara, kurumsal lansmandan gala gecelerine kadar her organizasyonda; güçlü görsel iletişim ve yüksek çözünürlüklü profesyonel çözümler
            </p>
          </header>

          <div className="p-8 md:p-10">
            <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:mt-4 prose-ul:mb-6 prose-li:marker:text-blue-500">
              <h3 id="led-ekran-nedir">LED Ekran Kiralama Nedir?</h3>
              <p>
                <strong>LED ekran kiralama</strong>, kısa veya orta süreli etkinlikler için yüksek görüntü kalitesi sunan LED ekran sistemlerinin
                kurulum, operasyon ve teknik destek dahil şekilde proje bazlı temin edilmesidir. Satın alma maliyeti olmadan profesyonel ekipman
                kullanmanıza olanak tanır.
              </p>

              <h3 id="neden-tercih-edilir">Neden LED Ekran Kiralama Tercih Edilmeli?</h3>
              <p>
                Dönemsel organizasyonlarda kalıcı yatırım yerine kiralama modeli, maliyet ve operasyon açısından çok daha esnek bir çözüm sunar.
                Doğru planlama ile hem izleyici deneyimi artar hem de teknik riskler minimuma iner.
              </p>
              <ul>
                <li>Yüksek satın alma maliyetinden kaçınma</li>
                <li>Etkinliğe uygun m² ve Piksel Aralığı seçebilme</li>
                <li>Kurulum, söküm ve teknik operasyonun tek ekipten alınması</li>
                <li>İç Mekan ve Dış Mekan için farklı parlaklık / koruma alternatifleri</li>
              </ul>

              <h3 id="ic-dis-mekan-farki">İç Mekan ve Dış Mekan LED Ekran Farkı</h3>
              <p>
                İç mekan LED ekranlarda (P2.5 / P2.9) yakın izleme mesafesine uygun netlik ön plandadır. Dış mekan LED ekranlarda (P3.9 ve üzeri)
                ise güneş altında görünürlük, IP koruma sınıfı ve dayanıklılık kritik rol oynar.
              </p>

              <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={LED_BALLROOM_LAUNCH_IMAGE_SRC}
                  alt="İç mekan LED ekran kiralama uygulaması ve kurumsal lansman sahnesi"
                  width={1600}
                  height={1200}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  unoptimized
                />
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl p-6 my-6">
                <h4 className="font-black text-blue-700 text-lg mb-3">Kamera Dostu Performans: 3840 Hz Yenileme Hızı</h4>
                <p className="text-gray-700 mb-0">
                  Unilumin URMIII panellerinin 3840 Hz yenileme hızı, televizyon çekimleri ve canlı yayınlarda
                  tarama çizgisi (moiré) ile titreşim (flicker) riskini azaltmaya yardımcı olur. Yüksek gri skala
                  derinliği sayesinde kamera karşısında daha dengeli bir görüntü akışı elde edilir.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 rounded-r-2xl p-6 mb-8">
                <h4 className="font-black text-green-700 text-lg mb-3">Flip-Shield ile Gelişmiş Köşe Koruması</h4>
                <p className="text-gray-700 mb-0">
                  Unilumin URMIII teknolojisindeki <strong>Flip-Shield köşe koruma mekanizması</strong>, kurulum ve taşıma
                  sırasında panellerin hassas köşe noktalarını korumaya yardımcı olur. Bu yapı, piksel hasarı riskini
                  azaltarak operasyonel güvenliği destekler.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-6 my-8">
                <h4 className="font-black text-blue-700 text-xl mb-3">Hızlı Teknik Seçim İpucu</h4>
                <p className="text-gray-700 mb-0">
                  İzleyici ekrana ne kadar yakınsa piksel aralığı o kadar küçük olmalıdır. Yakın mesafede P2.5/P2.9; orta-uzak mesafede P3.9/P4
                  tercih edilerek daha net ve dengeli görüntü elde edilir.
                </p>
              </div>

              <div className="not-prose my-8 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-black text-gray-900">Etkinlik tipine göre LED ekran seçimi</h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Konferans, lansman, festival veya açık hava organizasyonu için ekran ölçüsü,
                  pixel pitch ve parlaklık kararını daha detaylı görmek isterseniz hazırladığımız
                  rehberi inceleyebilirsiniz.
                </p>
                <Link
                  href="/blog/etkinlikler-icin-led-ekran-secimi"
                  className="mt-4 inline-flex items-center font-bold text-blue-700 hover:text-blue-900"
                >
                  LED ekran seçimi rehberini oku
                </Link>
              </div>
              
              <div className="not-prose my-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm">
                <h4 className="text-lg font-black text-blue-800 mb-3">LED Ekran Kiralama Fiyatları</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Standart indoor/outdoor LED ekran ile P1.9 Indoor LED için 2026 m² başlangıç bedellerini, kurulum, söküm, NovaStar görüntü işlemcisi ve teknik reji kapsamını ayrı bir sayfada detaylandırdık.
                </p>
                <Link
                  href="/led-ekran-kiralama-fiyatlari"
                  className="inline-flex items-center font-black text-blue-700 underline underline-offset-4 hover:text-blue-900"
                >
                  LED ekran kiralama fiyatları sayfasını incele →
                </Link>
              </div>

              <h3 id="kurulum-sureci">Kurulum Süreci Nasıl İlerler?</h3>
              <p>
                Profesyonel süreç; keşif, projelendirme, kurulum, test-kalibrasyon ve etkinlik anı teknik destek adımlarından oluşur. Bu yapı,
                yayın sırasında oluşabilecek kesinti riskini azaltır ve içerik akışının kontrollü şekilde yönetilmesine yardımcı olur.
              </p>

              <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={P19_TECHNICAL_CONTROL_IMAGE_SRC}
                  alt="P1.9 indoor LED ekran kiralama kurulum süreci ve teknik prodüksiyon ekibi"
                  width={1600}
                  height={739}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  unoptimized
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
                  loading="lazy"
                  unoptimized
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
                key={service.title}
                href={service.external ? getServiceWhatsappLink(service.waTitle ?? service.title) : service.href}
                {...(service.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 text-center focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white h-full flex flex-col"
                aria-label={`${service.title} - ${service.desc}`}
              >
                <div 
                  className="mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" 
                  aria-hidden="true"
                >
                  <service.Icon size={36} aria-hidden="true" />
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
              Türkiye'nin 81 ilinde kendi lojistik altyapımız ve uzman kadromuzla hızlı kurulum sağlıyoruz. Ücretsiz keşif, profesyonel danışmanlık ve
              rekabetçi fiyat politikamızla hizmetinizdeyiz.
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
                rel="nofollow noopener noreferrer"
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

/* ================== JSON-LD (LED Ekran Kiralama) ================== */
function LedScreenJsonLd() {
  const pageUrl = `${ORIGIN}/led-ekran-kiralama`;
  const pageDescription = metadata.description;
  const serviceId = `${pageUrl}#service`;
  const webPageId = `${pageUrl}#webpage`;

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
        "Türkiye'nin 81 ilinde profesyonel LED ekran kiralama hizmeti",
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
      "@id": `${ORIGIN}#website`,
    },
    about: {
      "@id": serviceId,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${ORIGIN}${P19_PROOF_IMAGE_SRC}`,
      width: 1600,
      height: 739,
      caption: "Sahneva 300 m² P1.9 Indoor LED ekran envanteri",
    },
    datePublished: PAGE_PUBLISHED_DATE,
    dateModified: PAGE_LAST_MODIFIED,
    author: providerRef,
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
      "@id": serviceId,
    },
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

  serviceNode.image = gallerySchema.imageUrls;
  webpageSchema.image = [`${ORIGIN}${P19_PROOF_IMAGE_SRC}`, `${ORIGIN}${HERO.src}`, ...gallerySchema.imageUrls];
  webpageSchema.hasPart = [
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
      <QuickSelectionGuide />
      <VisualProofStrip />
      <StatsBand />
      <UseCases />
      <Services />
      <P19InvestmentProof />
      <Technical />
      <WhySahneva />
      <Gallery />
      <RegionalService />
      <FAQ />
      <Articles />
      <RelatedServices />
      <ServiceBlogLinks {...CONTENT_CLUSTERS.ledScreen} links={CONTENT_CLUSTERS.ledScreen.guides} />
      <CTA />
    </>
  );
}

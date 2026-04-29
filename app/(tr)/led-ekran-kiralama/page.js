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
import { DEFAULT_BLUR_DATA_URL } from "@/lib/seo/imagePlaceholders";
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
export const revalidate = 1800;
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");
const ORIGIN = SITE_URL;
const PAGE_LAST_MODIFIED = getLastModifiedForFile(
  "app/(tr)/led-ekran-kiralama/page.js",
  "2026-01-14"
);
const PAGE_PUBLISHED_DATE = "2025-10-25";
const ORGANIZATION_ID = `${SITE_URL}/#org`;
const LOCAL_BUSINESS_ID = `${SITE_URL}/#local`;
const PHONE = "+905453048671";
const WA_TEXT = "Merhaba, LED ekran kiralama projemiz için profesyonel teklif almak istiyoruz. Etkinlik türü: [Konser/Fuar/Düğün], Tarih: [Tarih], Şehir: [Şehir].";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(WA_TEXT)}`;

const getServiceWhatsappLink = (title) => {
  const text = `Merhaba, ${title} hizmeti için detaylı bilgi ve fiyat teklifi almak istiyorum. Etkinlik tarihi: [gg.aa.yyyy], mekân: [iç/dış], tahmini ekran ölçüsü: [xx m2]`;
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`;
};

const BLUR_DATA_URL = DEFAULT_BLUR_DATA_URL;

/*fiyat*/
const LED_PRICING = {
  aggregateOffer: {
    lowPrice: "1800",
    highPrice: "2800",
    priceCurrency: "TRY",
  },
  aggregateRating: {
    ratingValue: "4.9",
    ratingCount: "2",
    bestRating: "5",
    worstRating: "1",
  },
};

const LED_PIXEL_ROWS = [
  {
    model: "P2.5",
    badge: "%50 daha premium",
    badgeClass: "bg-purple-100 text-purple-700",
    clarity: "Ultra High HD",
    costIndex: "💰💰💰💰",
    distance: "2.5m ve üzeri",
    refreshRate: "3840Hz",
    usage: "Lansman, fuar, yakın izleme",
  },
  {
    model: "P2.9",
    badge: "En dengeli seçim",
    badgeClass: "bg-blue-100 text-blue-700",
    clarity: "High Definition",
    costIndex: "💰💰💰",
    distance: "3m ve üzeri",
    refreshRate: "3840Hz",
    usage: "İç mekan etkinlikler, hibrit kullanım",
  },
  {
    model: "P3.9",
    badge: "En çok tercih edilen",
    badgeClass: "bg-green-100 text-green-700",
    clarity: "Standard HD",
    costIndex: "💰💰",
    distance: "4m ve üzeri",
    refreshRate: "3840Hz",
    usage: "Dış mekan, konser, festival",
  },
];

/* ================== META ================== */
export const metadata = {
  title: "LED Ekran Kiralama | İç & Dış Mekan Profesyonel Çözümler",
  description:
    "İç mekan P2.5/P2.9, dış mekan P3.9 LED ekran kiralama. Konser ve fuarlar için yüksek parlaklık, IP65 dayanıklılık, uzman kurulum ve hızlı teslimat hizmeti.",
  keywords:
    "led ekran kiralama, p2.9 led ekran, p2.5 led ekran, p3.9 led ekran, led wall kiralama, video wall kiralama, outdoor led ekran, indoor led ekran, konser led ekran",
  alternates: buildLanguageAlternates({
    tr: "/led-ekran-kiralama",
    en: "/en/led-screen-rental",
    xDefault: "/en/led-screen-rental",
  }),
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
  sizes: "(max-width: 1440px) 100vw, 1440px",
};

const SERVICES = [
  {
    Icon: Monitor,
    title: "İç Mekan LED Ekranlar",
    description: "P2.5-P2.9 piksel aralığı ile yüksek çözünürlüklü iç mekan çözümleri",
    features: ["P2.5/P2.9 piksel", "800-1500 nit parlaklık", "4K çözünürlük", "Hızlı kurulum"],
    cta: { label: "Detaylı Bilgi" },
  },
  {
    Icon: Sun,
    title: "Dış Mekan LED Ekranlar",
    description: "P3.9 piksel aralığı ve yüksek parlaklık ile açık hava çözümleri",
    features: ["P3.9 piksel", "5000-6500+ nit", "IP65 su geçirmez", "UV dayanıklı"],
    cta: { label: "Teklif Al" },
  },
  {
    Icon: Layers,
    title: "Video Wall Sistemleri",
    description: "Modüler yapıda esnek video wall ve kreatif ekran çözümleri",
    features: ["Modüler tasarım", "Esnek konfigürasyon", "Yüksek yenileme hızı", "Profesyonel kontrol", "Kavisli tasarım (-10°/+10°)"],
    cta: { label: "Kreatif Çözüm Planla" },
  },
  {
    Icon: Cpu,
    title: "Kontrol & Yayın Sistemleri",
    description: "Profesyonel video işleme, kontrol ve canlı yayın sistemleri",
    features: ["Novastar işlemciler", "4K scaler", "Medya sunucular", "Canlı yayın", "3840Hz yenileme hızı"],
    cta: { label: "Yayın Desteği" },
  },
  {
    Icon: Zap,
    title: "Kurulum & Rigging",
    description: "Profesyonel kurulum, truss sistemleri ve güvenlik çözümleri",
    features: ["Ground stack", "Truss rigging", "Güvenlik sistemleri", "Hızlı montaj", "Click-lock hızlı kilit"],
    cta: { label: "Kurulum Planı" },
  },
  {
    Icon: Headphones,
    title: "Operatör & Teknik Destek",
    description: "Deneyimli operatörler ve 7/24 teknik destek hizmeti",
    features: ["Profesyonel operatör", "İçerik yönetimi", "7/24 teknik destek", "Acil müdahale"],
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
    desc: "P2.5 ultra yüksek çözünürlükle sunumlarınızda ve marka tanıtımlarınızda maksimum prestij sağlıyoruz."
  },
  {
    Icon: Tent,
    title: "Fuar ve Stand Organizasyonları",
    desc: "Kreatif ekran tasarımlarıyla stand alanınızda ziyaretçi trafiğini ve etkileşimi artırıyoruz."
  },
  {
    Icon: Tv,
    title: "Açık Hava Reklamcılığı",
    desc: "Şehir meydanlarında ve AVM önlerinde, gün ışığında bile net görünen ekranlarla büyük kitlelere ulaşıyoruz."
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
    desc: "3840Hz yenileme hızı sayesinde kameralarda titreme yapmayan, profesyonel arka plan çözümleri sağlıyoruz."
  }
];

const QUICK_SELECTION_STEPS = [
  {
    Icon: Layout,
    title: "Etkinlik tipini netleştirin",
    description:
      "Konser, fuar, lansman ya da açık hava etkinliği için ekranın kullanım biçimi ilk teknik kararı belirler.",
    points: ["İç mekan / dış mekan", "Yakın izleme / uzak izleme", "Sunum / canlı yayın / reklam"],
  },
  {
    Icon: Eye,
    title: "Piksel aralığını seçin",
    description:
      "İzleme mesafesi düştükçe daha sık piksel aralığı gerekir. Böylece görüntü keskin kalır, bütçe de gereksiz yükselmez.",
    points: ["P2.5: premium iç mekan", "P2.9: dengeli hibrit çözüm", "P3.9: açık hava ve geniş alan"],
  },
  {
    Icon: MessageCircle,
    title: "Ölçü ve şehir bilgisini paylaşın",
    description:
      "m², kurulum saati ve şehir bilgisi geldiğinde teknik ekip doğru panel, taşıma ve kurulum planını aynı çizgide çıkarır.",
    points: ["Tahmini ekran ölçüsü", "Kurulum / söküm saatleri", "Şehir ve mekan tipi"],
  },
];

const QUICK_SELECTION_SCENARIOS = [
  {
    title: "Lansman ve fuar standı",
    recommendation: "P2.5 / P2.9",
    detail: "Yakın izleme ve sunum netliği için yüksek çözünürlüklü iç mekan panel önerilir.",
  },
  {
    title: "Kurumsal etkinlik ve hibrit sahne",
    recommendation: "P2.9",
    detail: "Salon içi kullanımda netlik ve bütçe dengesini en iyi kuran çözüm.",
  },
  {
    title: "Konser, festival ve açık hava",
    recommendation: "P3.9",
    detail: "Güneş altında görünürlük, geniş alan hakimiyeti ve güçlü dış mekan dayanımı sağlar.",
  },
];

const ARTICLE_SECTIONS = [
  { id: "led-ekran-nedir", label: "LED ekran kiralama nedir?" },
  { id: "neden-tercih-edilir", label: "Neden tercih edilir?" },
  { id: "ic-dis-mekan-farki", label: "İç / dış mekan farkı" },
  { id: "fiyatlar-neden-degisir", label: "Fiyatlar neden değişir?" },
  { id: "fiyatlari-etkileyenler", label: "Fiyatı etkileyen faktörler" },
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
    result: "300+ kişilik kongre katılımcısına kesintisiz canlı yayın sunuldu; 8 saatlik etkinlik boyunca sıfır teknik arıza ve %100 müşteri memnuniyeti raporlandı.",
    quote: "Böylesine kritik bir canlı yayında sıfır gecikme ve kusursuz görüntü kalitesiyle yanımızdaydılar.",
    client: "Organizasyon Komitesi",
  },
  {
    title: "Sarıyer Premium Açık Hava Kır Düğünü",
    category: "Özel Davet & Düğün",
    transformation: "Gündüz ışığında sönük kalacak anılar, 6500 nit parlaklıkla açık havanın yıldızı oldu.",
    before: "İstanbul Sarıyer'de gündüz saatlerinde, açık alandaki yoğun güneş ışığı nedeniyle anı videolarının görünmeme riski.",
    after: "6500 nit parlaklığa sahip P3.9 Dış Mekan (Outdoor) LED ekran kurularak güneş altında bile %100 netlik elde edildi.",
    result: "250+ davetlinin tamamı, en arka sıradaki misafirler dahil, canlı yayın görüntüsünü sinema kalitesinde izledi; kurulum etkinlik başlamadan 2 saat önce tamamlandı.",
    quote: "En mutlu günümüzde görüntü kalitesi harikaydı, her şey tam saatinde profesyonelce hazırdı.",
    client: "Gelin & Damat",
  },
  {
    title: "Kocaeli İzmit AVM İçi E-Spor Turnuvası",
    category: "Spor & Eğlence",
    transformation: "Sessiz bir AVM köşesi, yüzlerce kişinin heyecanla maçı takip ettiği dev bir dijital arenaya evrildi.",
    before: "Kocaeli İzmit'teki dar kapalı alanda kalabalık bir kitlenin anlık skorları ve oyun içi hızlı hareketleri takip edememesi.",
    after: "Hızlı kurulan paneller ve 3840Hz yenileme hızına sahip ekranlarla titreşimsiz, akıcı oyun yayını yapıldı.",
    result: "500+ izleyiciye anlık skor ve oyun yayını aksaklıksız iletildi; AVM'nin o bölgesindeki etkinlik trafiği %40 artarak organizatörün hedefinin üzerine çıktı.",
    quote: "Oyuncuların hızına yetişebilen ve kamerada asla titremeyen tek ekran! Harika bir turnuva oldu.",
    client: "Etkinlik Koordinatörü",
  },
  {
    title: "İstanbul TÜYAP Fuarında Havada Asılı LED Box",
    category: "Kurumsal Fuar",
    transformation: "Standart tasarımların arasında kaybolan fuar alanı, havada süzülen 4 cepheli bir çekim merkezine dönüştü.",
    before: "Beylikdüzü TÜYAP Fuar alanında markanın öne çıkabilmesi için havada duran yaratıcı bir dijital tasarıma ihtiyaç vardı.",
    after: "Hafif kasa modülleri ve profesyonel truss askı sistemleri kullanılarak güvenli, 4 cepheli bir LED Box oluşturuldu.",
    result: "Stand ziyaretçi süresi önceki yıla kıyasla ortalama %45 uzadı; 4 cepheli yapı sayesinde marka görünürlüğü tüm holde sağlandı.",
    quote: "Tasarım tam istediğimiz gibi havada asılı ve çok dikkat çekiciydi. Ekibin rigging uzmanlığına hayran kaldık.",
    client: "Kurumsal İletişim Müdürü",
  },
  {
    title: "Üniversite Mezuniyet Töreni: 2.000 Kişilik Dev Salon",
    category: "Eğitim & Tören",
    transformation: "Projeksiyon ışığının yetersiz kaldığı devasa salon, her köşeye eşit parlaklık sunan LED wall ile dönüştü.",
    before: "Ankara'da 2.000 kişilik üniversite mezuniyet salonunda projektörün uzak tribünlere yetmemesi ve görüntü solgunluğu sorunu.",
    after: "P2.9 yüksek çözünürlüklü 12m × 4m LED ekran, salonun ön cephesine monte edilerek tüm oturma sektörlerine eşit parlaklık sağlandı.",
    result: "2.000 mezun ve ailesine kesintisiz görsel deneyim sunuldu; etkinlik sonrası anket %98 memnuniyet, kurulum standart projeksiyon sistemine göre %30 daha hızlı tamamlandı.",
    quote: "En arka sıradaki veliler bile konuşmacının yüzünü net gördü. LED ekran olmasa bu organizasyon yarısı kadar başarılı olurdu.",
    client: "Üniversite Organizasyon Koordinatörü",
  },
  {
    title: "Cumhuriyet Bayramı Kutlaması: İlçe Meydanı Konseri",
    category: "Belediye & Açık Hava",
    transformation: "Meydan kalabalığında sahneden kopuk kalan vatandaşlar, 8.000 kişiyi saran dijital deneyimle buluştu.",
    before: "İstanbul'da kalabalık meydan etkinliğinde sahne arkasındaki ve yan kesimlerdeki vatandaşların sanatçıyı görmekte zorlanması.",
    after: "IP65 korumalı P3.9 dış mekan LED ekranlar sahnenin iki yanına konumlandırılarak 180° görüş açısı ve 6500 nit parlaklık sağlandı.",
    result: "8.000+ vatandaşın katıldığı etkinlikte sıfır teknik arıza kaydedildi; belediye etkinlik raporuna göre katılımcı memnuniyeti %97 olarak ölçüldü.",
    quote: "Sahneyi göremeyenler artık sorun değil. Her iki yanımızdaki ekranlar şehrin en büyük konserini mümkün kıldı.",
    client: "Belediye Kültür Müdürlüğü",
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
    q: "Kadıköy, Şişli veya Beşiktaş gibi merkezi ilçelerde acil kurulum mümkün mü?",
    a: "Evet, İstanbul içi operasyonlarımızda her iki yakadaki depolarımız sayesinde, acil taleplerde trafiğe takılmadan aynı gün veya birkaç saat içinde mobil ekiplerimizle hızlı kurulum yapabiliyoruz. Erken saatte mobilize olarak İstanbul trafiğini ekarte ediyoruz."
  },
  {
    q: "Kocaeli, Bursa veya Tekirdağ gibi çevre iller için hafta sonu teknik destek ve nakliye ücreti nasıl hesaplanıyor?",
    a: "Çevre illerdeki hafta sonu etkinlikleriniz için 7/24 kesintisiz destek sunuyoruz. Nakliye ve varsa personel konaklama maliyetlerini ilk teklifimizde tamamen şeffaf bir şekilde listeliyoruz; sonradan gizli ücret çıkarmıyoruz."
  },
  {
    q: "İstanbul dışında, Marmara'nın hava şartlarına uygun ekranlarınız var mı?",
    a: "Kesinlikle. Özellikle açık hava etkinliklerinde sürpriz yağışlara karşı %100 su ve toz geçirmez (IP65 standardında) dış mekan panelleri kurarak yayınınızı güvence altına alıyoruz."
  },
  {
    q: "Daha önce bizimkine benzer bir etkinlikte nasıl bir çözüm sundunuz?",
    a: "Her etkinlik tipi için gerçek uygulama örneklerimiz var. Örneğin: Kocaeli'de 500+ izleyicili e-spor turnuvasında 3840Hz yenileme hızıyla titremesiz oyun yayını sağladık. TÜYAP'ta havada asılı 4 cepheli LED Box ile stand görünürlüğünü %45 artırdık. Sarıyer düğününde 6500 nit parlaklıkla güneş altında kristal netlik elde ettik. Belediye meydan konserinde 8.000+ kişiye %97 memnuniyetle ulaştık. Sizi en yakın referansımızla eşleştirip teknik detayları paylaşabiliriz."
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

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-5 xl:gap-6 items-start">
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
                          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-[13px] md:text-sm font-semibold text-slate-800"
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
              <div className="relative aspect-[16/10]">
                <Image
                  src="/img/galeri/led-ekran-kiralama-3.webp"
                  alt="Kurumsal etkinlikte kullanılan profesyonel LED ekran kurulumu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
                  Hızlı seçim özeti
                </div>
                <div className="absolute inset-x-5 bottom-4 flex flex-wrap gap-2.5">
                  <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">
                    <div className="text-xs uppercase tracking-wide text-white/70">Parlaklık</div>
                    <div className="text-lg font-black">1500 - 6500 nit</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur">
                    <div className="text-xs uppercase tracking-wide text-white/70">Kurulum</div>
                    <div className="text-lg font-black">Hızlı rigging</div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-6.5">
                <h3 className="text-[1.65rem] font-black leading-tight">Projeye göre hızlı öneri</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">
                  Teknik tabloya geçmeden önce en sık kullanılan üç senaryo için kısa yönlendirme:
                </p>

                <div className="mt-5 space-y-3">
                  {QUICK_SELECTION_SCENARIOS.map((scenario) => (
                    <div
                      key={scenario.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3.5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-[1.05rem] font-bold leading-snug text-white">{scenario.title}</h4>
                          <p className="mt-1.5 text-sm leading-relaxed text-white/70">{scenario.detail}</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-blue-500/20 px-3 py-1 text-sm font-bold text-blue-200">
                          {scenario.recommendation}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-2xl bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/62 via-purple-800/48 to-blue-950/72" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/68 via-transparent to-purple-900/42" aria-hidden="true" />
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
        <p className="text-balance text-lg md:text-xl text-white/85 max-w-[38rem] mx-auto leading-relaxed font-normal mb-6">
          P2.5-P3.9 piksel aralığı, 4K çözünürlük ve yüksek parlaklık ile etkinliğinize uygun{" "}
          <span className="font-semibold text-white md:whitespace-nowrap">profesyonel görsel çözümler</span>
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
            href="#led-secim-rehberi"
            aria-label="Doğru LED ekran seçimi rehberine gidin"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white/40 text-white bg-white/20 backdrop-blur-lg hover:bg-white/30 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-lg"
          >
            <Monitor size={20} aria-hidden="true" className="mr-2" />
            <span className="text-base">Doğru LED'i Seç</span>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <div className="mb-2 text-yellow-300"><CheckCircle size={24} aria-hidden="true" /></div>
            <div className="text-xl font-black text-white">10+</div>
            <div className="text-white/80 text-sm">Yıllık Deneyim</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <div className="mb-2 text-blue-300"><Users size={24} aria-hidden="true" /></div>
            <div className="text-xl font-black text-white">700+</div>
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
    src: "/img/galeri/led-ekran-kiralama-1.webp", 
    alt: "Konser sahnesinde kurulmuş büyük LED ekran, kalabalık önünde canlı performans gösterimi",
    caption: "Konser & Festival | P3.9 Outdoor | 10×6 m — 3.000+ izleyici kapasiteli açık hava etkinliği"
  },
  { 
    src: "/img/galeri/led-ekran-kiralama-2.webp", 
    alt: "Kurumsal etkinlikte kullanılan LED ekran, sunum sırasında profesyonel aydınlatma ile aydınlatılmış",
    caption: "Kurumsal Gala | P2.9 Indoor | 8×3 m — Ürün lansmanı, İstanbul"
  },
  { 
    src: "/img/galeri/led-ekran-kiralama-3.webp",
    alt: "Açık hava festivalinde yüksek parlaklıklı LED ekran, gün ışığında net görüntü",
    caption: "Açık Hava Festivali | P3.9 Outdoor | 6500 nit — Tam güneş ışığında kristal netlik"
  },
  { 
    src: "/img/galeri/led-ekran-kiralama-4.webp",
    alt: "Fuar standında kullanılan video wall sistemi, marka tanıtımı için optimize edilmiş",
    caption: "Fuar & Stand | LED Box 4 Cepheli | TÜYAP — Havada asılı truss kurulum"
  },
  { 
    src: "/img/galeri/led-ekran-kiralama-5.webp", 
    alt: "Stadyumda dev LED ekran, spor etkinliği sırasında canlı skor ve görüntüler",
    caption: "Spor Organizasyonu | P3.9 Outdoor | Skor takip + canlı yayın entegrasyonu"
  },
  { 
    src: "/img/galeri/led-ekran-kiralama-6.webp", 
    alt: "Düğün organizasyonunda LED ekran, canlı fotoğraf ve video gösterimi",
    caption: "Düğün & Özel Davet | P3.9 Outdoor | 6500 nit — Sarıyer, İstanbul"
  },
  { 
    src: "/img/galeri/led-ekran-kiralama-7.webp", 
    alt: "TV stüdyosunda kullanılan profesyonel LED ekran, canlı yayın için optimize edilmiş",
    caption: "Canlı Yayın & Stüdyo | P2.5 Indoor | 3840 Hz — Kamerada titreme sıfır"
  },
  { 
    src: "/img/galeri/led-ekran-kiralama-8.webp",
    alt: "Alışveriş merkezinde reklam LED ekranı, yüksek trafikli alanda marka gösterimi",
    caption: "AVM & Reklam | P3.9 Indoor/Outdoor | E-spor etkinliği, Kocaeli İzmit"
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

const VISUAL_FLOW_IMAGES = [
  {
    src: "/img/galeri/led-ekran-kiralama-2.webp",
    alt: "Kurumsal etkinlikte kullanılan LED ekran kurulumu",
    eyebrow: "Kurumsal etkinlik",
    title: "Yakın izleme için net sunum yüzeyi",
    detail: "P2.9 indoor kurulum ile lansman ve toplantılarda keskin görüntü.",
  },
  {
    src: "/img/galeri/led-ekran-kiralama-3.webp",
    alt: "Açık hava etkinliğinde kullanılan yüksek parlaklıklı LED ekran",
    eyebrow: "Açık hava çözümü",
    title: "Güneş altında okunabilir güçlü görüntü",
    detail: "6500 nit parlaklık ile festival ve meydan kurulumlarında yüksek görünürlük.",
  },
  {
    src: "/img/galeri/led-ekran-kiralama-7.webp",
    alt: "Canlı yayın ve stüdyo için kullanılan LED ekran",
    eyebrow: "Canlı yayın",
    title: "Kamera dostu 3840Hz performans",
    detail: "Stüdyo ve hibrit yayınlarda titreşimsiz görüntü akışı.",
  },
];

/* ================== Geliştirilmiş Galeri ve Başarı Hikayeleri ================== */
function Gallery() {
  return (
    <section className="py-20 bg-slate-50" aria-labelledby="galeri-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 id="galeri-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Gerçek <span className="text-blue-700">Başarı Hikayelerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Projelerimizin kalitesi, etkinliğinizin en büyük güvencesidir. Referanslarımız ve uygulama örneklerimizle, sıradan mekanları nasıl büyüleyici sahnelere dönüştürdüğümüzü keşfedin.
          </p>
        </div>

        <ul className="mb-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3" aria-label="Hizmet verdiğimiz sektörler">
          {[
            { icon: "🎵", label: "Konser & Festival" },
            { icon: "🏛️", label: "Devlet & Belediye" },
            { icon: "🎓", label: "Eğitim & Tören" },
            { icon: "🏢", label: "Kurumsal & Fuar" },
            { icon: "🎮", label: "Spor & E-Spor" },
            { icon: "💍", label: "Düğün & Davet" },
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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 max-w-2xl">
                <div className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-200 backdrop-blur">
                  Öne çıkan kurulum
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white">
                  Konser ve festival sahnelerinde yüksek görünürlük
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
    { value: "700+", label: "Başarılı Proje" },
    { value: "50+", label: "Kurumsal Müşteri" },
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
              <p className="text-white/60 text-sm leading-relaxed border-t border-white/10 pt-3">
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
      detail: "Trafiğin yoğun olduğu Şişli, Beşiktaş ve fuar merkezi Beylikdüzü'nde erken saatte mobilize olan hızlı kurulum ekiplerimiz.",
      districts: "Başakşehir, Esenyurt, Fatih, Sarıyer, Kağıthane, Şişli, Beşiktaş, Beylikdüzü"
    },
    { 
      name: "İstanbul Anadolu Yakası", 
      detail: "Kadıköy, Ataşehir ve Ümraniye depolarımızdan, köprü trafiğine takılmadan anlık sevkiyat ve aynı gün müdahale.",
      districts: "Kadıköy, Üsküdar, Maltepe, Tuzla, Pendik, Çekmeköy, Ataşehir"
    },
    { 
      name: "Marmara & Çevre İller", 
      detail: "Özel araç filomuz ve konaklamalı teknik ekiplerimizle, Marmara'nın değişken hava şartlarına uygun IP65 dış mekan çözümleri.",
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
                    Megakent İstanbul'un trafiğine karşı etkinlikten saatler önce alana giriyoruz. Asya ve Avrupa yakasındaki bağımsız ekiplerimizle gecikme riskini sıfırlıyoruz.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-green-500/20 p-3 rounded-xl h-fit"><Zap className="text-green-400" /></div>
                <div>
                  <h4 className="font-bold text-lg">Hava Şartlarına Tam Uyum</h4>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">
                    Marmara'nın değişken havasına karşı, özellikle açık hava etkinliklerinde %100 IP65 su ve toz geçirmez dış mekan panelleriyle yayını güvenceye alıyoruz.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-orange-500/20 p-3 rounded-xl h-fit"><Users className="text-orange-400" /></div>
                <div>
                  <h4 className="font-bold text-lg">Şeffaf Çevre İl Lojistiği</h4>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">
                    Bursa, Tekirdağ, Kocaeli gibi illere giden konaklamalı teknik ekiplerimiz için nakliye ve ulaşım bedelleri ilk teklifte sabittir. Gizli maliyet çıkmaz.
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
                  <td className="px-8 py-5 text-gray-700 font-medium">Acil durumlarda aynı gün 2-4 saatte hızlı kurulum</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Planlı sevkiyat ile etkinlikten 1 gün önce güvenli kurulum</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Nakliye Ücretlendirmesi</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Çoğu merkezi ilçede fiyata dahil / Ücretsiz nakliye</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Kilometre bazlı şeffaf, indirimli ve sabit fiyat garantisi</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Teknik Ekip & Konaklama</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Yerel nöbetçi ekiplerle anlık destek, konaklama ücreti yok</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Projeye tahsisli, konaklamalı tam zamanlı operatör desteği</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Operasyonel Çözüm</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Trafik yoğunluğuna karşı sabah erken saatte sevkiyat</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Değişken hava şartlarına özel IP65 korumalı donanım</td>
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
              Konserden fuara, kurumsal lansmandan düğüne kadar her organizasyonda güçlü görsel iletişim için profesyonel çözümler
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
                <li>Etkinliğe uygun m² ve piksel aralığı seçebilme</li>
                <li>Kurulum, söküm ve teknik operasyonun tek ekipten alınması</li>
                <li>İç mekan ve dış mekan için farklı parlaklık/koruma alternatifleri</li>
              </ul>

              <h3 id="ic-dis-mekan-farki">İç Mekan ve Dış Mekan LED Ekran Farkı</h3>
              <p>
                İç mekan LED ekranlarda (P2.5 / P2.9) yakın izleme mesafesine uygun netlik ön plandadır. Dış mekan LED ekranlarda (P3.9 ve üzeri)
                ise güneş altında görünürlük, IP koruma sınıfı ve dayanıklılık kritik rol oynar.
              </p>

              <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/img/galeri/led-ekran-kiralama-9.webp"
                  alt="İç mekan ve dış mekan LED ekran kiralama uygulaması"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl p-6 my-6">
                <h4 className="font-black text-blue-700 text-lg mb-3">Kamera Dostu Performans: 3840Hz Yenileme Hızı</h4>
                <p className="text-gray-700 mb-0">
                  Unilumin URMIII panellerinin 3840Hz yenileme hızı, televizyon çekimlerinde ve canlı yayınlarda
                  ekranda <strong>titreme (flicker) oluşmasını engeller</strong>. Yüksek gri skala derinliği sayesinde kamera
                  karşısında profesyonel bir görüntü elde edilir.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 rounded-r-2xl p-6 mb-8">
                <h4 className="font-black text-green-700 text-lg mb-3">Flip-shield ile Sıfır Piksel Hasarı Garantisi</h4>
                <p className="text-gray-700 mb-0">
                  Unilumin URMIII teknolojisindeki <strong>Flip-shield köşe koruma mekanizması</strong>, kurulum sırasında
                  panellerin en hassas noktaları olan köşeleri otomatik olarak korur. Bu sayede piksel hasarı riski
                  sıfıra iner ve kusursuz görüntü kalitesi garanti edilir.
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
              
              <h3 id="fiyatlar-neden-degisir">Neden Fiyatlar Değişiyor?</h3>
              <p>
                LED ekran kiralama fiyatlarında en belirleyici unsur piksel hassasiyetidir. P2.5 gibi düşük piksel aralıklı ekranlar,
                izleyicinin ekrana yakın olduğu projelerde kusursuz netlik sunar; ancak birim m² maliyeti daha yüksektir.
                P3.9 ve üzeri modeller ise geniş alanlarda maliyet avantajı sağlar.
              </p>
              <p>
                Özetle, m² arttıkça birim fiyat avantajı oluşabilir; fakat seçilecek piksel aralığı toplam proje bedelini belirgin şekilde etkiler.
              </p>

              <h3 id="fiyatlari-etkileyenler">LED Ekran Kiralama Fiyatlarını Neler Etkiler?</h3>
              <ul>
                <li>Toplam ekran alanı (m²)</li>
                <li>Piksel aralığı (P2.5, P2.9, P3.9, P4)</li>
                <li>İç mekan / dış mekan tercihi</li>
                <li>Kiralama süresi (günlük, haftalık, proje bazlı)</li>
                <li>Kurulum zorluğu, rigging ve teknik ekip sayısı</li>
                <li>Canlı yayın, reji ve kamera entegrasyon ihtiyaçları</li>
              </ul>

              <h3 id="kurulum-sureci">Kurulum Süreci Nasıl İlerler?</h3>
              <p>
                Profesyonel süreç; keşif, projelendirme, kurulum, test-kalibrasyon ve etkinlik anı teknik destek adımlarından oluşur. Bu yapı,
                yayın sırasında kesinti riskini azaltır ve içerik akışının sorunsuz ilerlemesini sağlar.
              </p>

              <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/img/galeri/led-ekran-kiralama-14.webp"
                  alt="LED ekran kiralama kurulum süreci ve teknik ekip"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <h3 id="kullanim-senaryolari">Hangi Etkinliklerde Kullanılır?</h3>
              <ul>
                <li>Konser, festival ve sahne performansları</li>
                <li>Kurumsal toplantı ve lansmanlar</li>
                <li>Fuar, sergi ve tanıtım organizasyonları</li>
                <li>Düğün, özel davet ve canlı yayın prodüksiyonları</li>
                <li>AVM ve perakende alanlarında reklam gösterimleri</li>
              </ul>

              <div className="not-prose my-8 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/img/galeri/led-ekran-kiralama-20.webp"
                  alt="Konser ve etkinliklerde LED ekran kiralama uygulaması"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
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
      waTitle: "Kamera & Reji",
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

/* ================== JSON-LD (LED Ekran Kiralama) ================== */
function LedScreenJsonLd() {
  const pageUrl = `${ORIGIN}/led-ekran-kiralama`;
  const pageDescription = metadata.description;
  const serviceId = `${pageUrl}#service`;
  const productId = `${pageUrl}#product`;
  const webPageId = `${pageUrl}#webpage`;

  const providerRef = {
    "@id": ORGANIZATION_ID,
  };

  const localBusinessRef = { "@id": LOCAL_BUSINESS_ID };

  const ratingNodeId = `${pageUrl}#rating`;

  const ratingNode = {
    "@type": "AggregateRating",
    "@id": ratingNodeId,
    ratingValue: LED_PRICING.aggregateRating.ratingValue,
    bestRating: LED_PRICING.aggregateRating.bestRating,
    worstRating: LED_PRICING.aggregateRating.worstRating,
    ratingCount: LED_PRICING.aggregateRating.ratingCount,
    itemReviewed: localBusinessRef,
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
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: LED_PRICING.aggregateOffer.priceCurrency,
      lowPrice: LED_PRICING.aggregateOffer.lowPrice,
      highPrice: LED_PRICING.aggregateOffer.highPrice,
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
    aggregateRating: {
      "@id": ratingNodeId,
    },
  };

  const productNode = {
    "@type": "Product",
    "@id": productId,
    name: "İç ve Dış Mekan LED Ekran Kiralama",
    description:
      "İç mekanda P2.5/P2.9, dış mekanda P3.9 piksel aralığıyla 4K çözünürlük ve yüksek parlaklık sunan profesyonel LED ekran kiralama hizmeti. Konser, fuar, festival ve kurumsal etkinlikler için uzman kurulum.",
    category: "EventLedScreenRental",
    brand: providerRef,
    url: pageUrl,
    isRelatedTo: {
      "@id": serviceId,
    },
    aggregateRating: {
      "@id": ratingNodeId,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: LED_PRICING.aggregateOffer.priceCurrency,
      lowPrice: LED_PRICING.aggregateOffer.lowPrice,
      highPrice: LED_PRICING.aggregateOffer.highPrice,
      availability: "https://schema.org/InStock",
      url: pageUrl,
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
      url: `${ORIGIN}/img/hizmet-led-ekran.webp`,
      width: 1200,
      height: 630,
      caption: "Sahneva — Profesyonel LED Ekran Kiralama Hizmetleri",
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
  productNode.image = [`${ORIGIN}/img/hizmet-led-ekran.webp`, ...gallerySchema.imageUrls];
  webpageSchema.image = [`${ORIGIN}/img/hizmet-led-ekran.webp`, ...gallerySchema.imageUrls];
  webpageSchema.hasPart = [
    ...VIDEO_GALLERY.map((video, index) => ({
      "@id": `${pageUrl}#video-${index + 1}`,
    })),
    ...(gallerySchema.galleryNode ? [{ "@id": gallerySchema.galleryId }] : []),
    ...gallerySchema.imageNodes.map((image) => ({ "@id": image["@id"] })),
  ];

  const reviews = [
    {
      "@type": "Review",
      "@id": `${pageUrl}#review-1`,
      itemReviewed: { "@id": `${pageUrl}#product` },
      author: { "@type": "Person", name: "Ahmet B." },
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
      author: { "@type": "Person", name: "Merve T." },
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
      ratingNode,
      ...(gallerySchema.galleryNode ? [gallerySchema.galleryNode] : []),
      ...gallerySchema.imageNodes,
      ...videoObjects,
      ...reviews,
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

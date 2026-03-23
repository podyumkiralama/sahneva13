// app/led-ekran-kiralama/page.jsx
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import { getLastModifiedForFile } from "@/lib/seoLastModified";
import VideoEmbedClient from "@/components/VideoEmbed.client";
import { 
  Monitor, Sun, Shield, Zap, Settings, Star, Play, MessageCircle, 
  ChevronDown, MapPin, CheckCircle, Layout, ExternalLink, ArrowRight, 
  Camera, Layers, Activity, Award, Users, Globe, Music, Briefcase, 
  Tent, Tv, Headphones, Cpu, Eye, Umbrella, Truck, Stadium, ShoppingBag, Church
} from 'lucide-react';

export const revalidate = 1800;

const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div className="flex justify-center items-center h-64" role="status" aria-label="Galeri yükleniyor">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" aria-hidden="true" />
      <span className="sr-only">Galeri yükleniyor...</span>
    </div>
  ),
});

/* ================== Sabitler & Yapılandırma ================== */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com";
const PHONE = "+905453048671";
const WA_TEXT = "Merhaba%2C+LED+ekran+kiralama+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bkonser%2Ffuar%2Flansman%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Ekran+boyutu%3A+%5Bxxx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

/* ================== Veri Setleri (SEO Odaklı) ================== */
const FAQ_ITEMS = [
  {
    q: "LED ekran kiralama fiyatları ne kadar?",
    a: "LED ekran kiralama fiyatları piksel aralığı, ekran boyutu (m²), iç/dış mekan kullanım ve kurulum tipi (zemin/truss/rigging) gibi faktörlere göre değişir. İç mekanda P2.5 / P2.9 çözümler ile, dış mekanda P3.9 yüksek parlaklık çözümler için proje bazlı fiyatlandırma yapılır. İstersen etkinlik tarihi, şehir ve yaklaşık ölçüyü yaz; en doğru teklifi hızlıca çıkaralım."
  },
  {
    q: "LED ekran kiralama fiyatına hangi hizmetler dahildir?",
    a: "Paketler genellikle LED panel kiralama, kurulum-söküm, kontrol sistemi kurulumu, test yayını ve sahada teknik ekip desteğini kapsar. İçerik formatlama (çözünürlük uyarlama) ve operatör desteği ise projenin ihtiyacına göre eklenebilir."
  },
  {
    q: "LED ekran kurulumu ne kadar sürer?",
    a: "Standart kurulumlar çoğu projede 2–6 saat içinde tamamlanır. Ekran alanı büyüdükçe ve rigging/truss gerektiren kurulumlarda süre uzayabilir. Büyük ölçekli sahne projelerinde keşif + planlama ile birlikte aynı gün içinde kurulum ve test yayını tamamlanacak şekilde planlama yapılır."
  },
  {
    q: "LED ekran kiralama teslim süresi ne kadar?",
    a: "Küçük ve orta ölçekli projelerde (ör. 20–40 m²) LED ekran sistemleri ortalama **3–5 saat içinde** kurulabilir. Acil durumlarda ekip ve ekipman hazırsa aynı gün kurulum sağlanır. Büyük ölçekli konser ve festival projelerinde ise taşıyıcı sistem (truss/rigging), enerji ve güvenlik planlamasına bağlı olarak süre uzayabilir; takvim keşif sonrası netleştirilir."
  },
  {
    q: "Yağmurlu havada LED ekran kullanılabilir mi?",
    a: "Evet. Dış mekan LED ekranlarımız IP65 koruma sınıfı ile açık havada kullanılabilir. Yine de şiddetli fırtına ve ekstrem hava koşullarında güvenlik önlemleri kapsamında kullanıma ara verilmesini öneririz."
  },
  {
    q: "LED ekran için hangi piksel aralığını seçmeliyim?",
    a: "Doğru seçim izleme mesafesine bağlıdır. Yakın mesafe ve iç mekan uygulamalarında P2.5 / P2.9 daha net görüntü verir. Açık hava konser, festival ve geniş izleme alanlarında en yaygın tercih P3.9'dur. Çok uzak mesafe uygulamalarında farklı piksel aralıkları da sağlanabilir; teknik keşifle en doğru seçimi netleştiririz."
  },
  {
    q: "LED ekran kiralama hizmetiniz hangi şehirlerde geçerlidir?",
    a: "Türkiye'nin tüm büyük şehirlerinde hizmet vermekteyiz. İstanbul, Ankara, İzmir, Bursa, Antalya, Adana başta olmak üzere tüm il ve ilçelerde kurulum gerçekleştiriyoruz. Şehir dışı projelerde nakliye ve konaklama maliyetleri fiyata ayrıca yansıtılır."
  },
  {
    q: "Etkinlik sırasında teknik arıza olursa ne yapılır?",
    a: "Tüm ekipmanlarımız için etkinlik süresince yerinde teknik destek sunuyoruz. Sahneva teknisyenleri etkinlik başından sonuna kadar sahada hazır bulunur. Olası arızalar için her projede %20 yedek panel ve yedekli kontrol ünitesi bulunduruyoruz."
  },
  {
    q: "Kendi içeriğimi LED ekranda nasıl yayınlarım?",
    a: "Sahneva, içerik yönetimi için tam donanımlı kontrol masası ve operatör sağlar. HDMI, SDI, DVI ve DisplayPort girişleri desteklenmektedir. PowerPoint, video dosyaları, canlı kamera beslemesi ve DJ'lerden gelen sinyal doğrudan ekrana aktarılabilir."
  }
];

const SERVICES = [
  {
    icon: <Monitor className="text-blue-500" size={48} />, 
    title: "İç Mekan LED Ekranlar",
    description: "P2.5-P2.9 piksel aralığı ile yüksek çözünürlüklü iç mekan çözümleri",
    features: ["P2.5/P2.9 piksel", "800-1500 nit parlaklık", "4K çözünürlük", "Hızlı kurulum"],
  },
  {
    icon: <Sun className="text-orange-500" size={48} />, 
    title: "Dış Mekan LED Ekranlar",
    description: "P3.9 piksel aralığı ve yüksek parlaklık ile açık hava çözümleri",
    features: ["P3.9 piksel", "5000-6500+ nit", "IP65 su geçirmez", "UV dayanıklı"],
  },
  {
    icon: <Layers className="text-purple-500" size={48} />, 
    title: "Video Wall Sistemleri",
    description: "Modüler yapıda esnek video wall ve kreatif ekran çözümleri",
    features: ["Modüler tasarım", "Esnek konfigürasyon", "Yüksek yenileme hızı", "Profesyonel kontrol"],
  },
  {
    icon: <Zap className="text-yellow-500" size={48} />, 
    title: "Kontrol & Yayın Sistemleri",
    description: "Profesyonel video işleme, kontrol ve canlı yayın sistemleri",
    features: ["Novastar işlemciler", "4K scaler", "Medya sunucular", "Canlı yayın"],
  },
  {
    icon: <Settings className="text-gray-500" size={48} />, 
    title: "Kurulum & Rigging",
    description: "Profesyonel kurulum, truss sistemleri ve güvenlik çözümleri",
    features: ["Ground stack", "Truss rigging", "Güvenlik sistemleri", "Hızlı montaj"],
  },
  {
    icon: <Headphones className="text-green-500" size={48} />, 
    title: "Operatör & Teknik Destek",
    description: "Deneyimli operatörler ve 7/24 teknik destek hizmeti",
    features: ["Profesyonel operatör", "İçerik yönetimi", "7/24 teknik destek", "Acil müdahale"],
  },
];

const USE_CASES = [
  { icon: <Music />, title: "Konser, festival and sahne performansları", desc: "Ana sahne LED ekranları and yan ekran çözümleri" },
  { icon: <Briefcase />, title: "Kurumsal lansman and toplantılar", desc: "Profesyonel sunum and marka gösterimi" },
  { icon: <Tent />, title: "Fuar, sergi and ticari etkinlikler", desc: "Stand tasarımı and etkileşimli ekranlar" },
  { icon: <Stadium />, title: "Spor etkinlikleri and stadyumlar", desc: "Dev ekranlar and skorboard sistemleri" },
  { icon: <ShoppingBag />, title: "AVM and perakende mekanları", desc: "Reklam and bilgilendirme ekranları" },
  { icon: <Church />, title: "Düğün and özel davetler", desc: "Fotoğraf/video gösterimi and canlı yayın" },
];

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop", alt: "LED ekran kiralama konser" },
  { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop", alt: "Sahne LED ekran kurulumu" },
  { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop", alt: "Fuar LED ekran" },
  { src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop", alt: "Kurumsal etkinlik LED ekran" },
  { src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop", alt: "Açık hava LED ekran" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop", alt: "Gala gecesi LED ekran" },
  { src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop", alt: "Spor etkinliği LED ekran" },
  { src: "https://images.unsplash.com/photo-1598387846148-47e82ee120cc?q=80&w=2070&auto=format&fit=crop", alt: "LED ekran teknik kurulum" },
];

const VIDEO_GALLERY = [
  { id: "dQw4w9WgXcQ", title: "LED Ekran Kiralama — Konser Prodüksiyonu" },
  { id: "9bZkp7q19f0", title: "P3.9 Outdoor LED — Açık Hava Festivali" },
  { id: "JGwWNGJdvx8", title: "Kurumsal Lansman — İç Mekan P2.5 LED" },
];

const REVIEWS = [
  { name: "Ahmet K.", company: "Müzik Prodüksiyon A.Ş.", rating: 5, text: "3 gün süren festivalimiz için P3.9 outdoor LED ekran kiraladık. Kurulum ekibi sabah 6'da sahada, akşam 11'e kadar destek verdi. Mükemmel bir deneyimdi." },
  { name: "Elif S.", company: "Global Fuar Organizasyon", rating: 5, text: "Fuarımızda 40 m² video wall kullandık. Görüntü kalitesi ve teknik destek beklentilerimizin çok üzerindeydi. Kesinlikle tavsiye ederim." },
  { name: "Mehmet T.", company: "Sahne & Ses Prodüksiyon", rating: 5, text: "10 yıldır birlikte çalıştığımız ekipmanlar arasında Sahneva'nın LED ekranları en güvenilir olanlar. Hiç arıza yaşamadık." },
  { name: "Zeynep A.", company: "Kurumsal Etkinlikler Ltd.", rating: 5, text: "İç mekan lansman etkinliğimiz için P2.5 LED panel kullandık. Renkler mükemmeldi, sunum çok profesyonel göründü." },
  { name: "Kerem B.", company: "Spor Organizasyon Merkezi", rating: 5, text: "Turnuva organizasyonumuz için dev ekranlar kiraladık. Hem fiyat hem de hizmet kalitesi açısından piyasanın en iyisi." },
  { name: "Selin Y.", company: "Moda & Tasarım Stüdyosu", rating: 5, text: "Defile organizasyonumuz için farklı renk profilleri denedik. LED ekranlarının renk doğruluğu tasarımcılarımızı büyüledi." },
  { name: "Oğuzhan D.", company: "Reklam & Medya Grubu", rating: 5, text: "Canlı yayın projemizde moiré sorunu yaşamadık. Teknik ekip kamera açılarına göre panel ayarını önceden yaptı." },
  { name: "Fatma N.", company: "Düğün & Organizasyon Merkezi", rating: 5, text: "Düğün salonumuz için LED ekran aldık. Misafirlerimiz çok beğendi. Fiyat/performans açısından rakipsizler." },
];

/* ================== Metadata ================== */
export async function generateMetadata() {
  const lastMod = await getLastModifiedForFile("app/(tr)/led-ekran-kiralama/page.js");
  return {
    title: "LED Ekran Kiralama | P2.9 & P3.9 LED Wall",
    description:
      "İç mekan P2.5/P2.9, dış mekan P3.9 LED ekran kiralama. Konser ve fuarlar için yüksek parlaklık, IP65 dayanıklılık, uzman kurulum ve hızlı teslimat hizmeti.",
    keywords:
      "led ekran kiralama, p2.9 led ekran, p2.5 led ekran, p3.9 led ekran, led wall kiralama, video wall kiralama, outdoor led ekran, indoor led ekran, konser led ekran",
    alternates: { canonical: "https://www.sahneva.com/led-ekran-kiralama" },
    openGraph: {
      title: "LED Ekran Kiralama | P2.9 & P3.9 LED Wall – Sahneva",
      description:
        "İç mekanda P2.5/P2.9, dış mekanda P3.9 LED ekran kiralama. Yüksek parlaklık, IP65 koruma ve profesyonel kurulum/söküm ekibi.",
      url: "https://www.sahneva.com/led-ekran-kiralama",
      type: "website",
      siteName: "Sahneva",
      locale: "tr_TR",
      images: [
        {
          url: "https://www.sahneva.com/img/hizmet-led-ekran.webp",
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
      images: ["https://www.sahneva.com/img/hizmet-led-ekran.webp"],
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
    other: lastMod ? { "article:modified_time": lastMod } : {},
  };
}

/* ================== Yardımcı Bileşenler ================== */

const SectionTitle = ({ title, subtitle, light = false }) => (
  <div className="mb-16 text-left max-w-4xl">
    <h2 className={`text-4xl md:text-6xl font-black mb-6 tracking-tighter ${light ? 'text-white' : 'text-gray-900'}`}> {title} </h2>
    <div className={`w-24 h-2 rounded-full mb-6 ${light ? 'bg-blue-500' : 'bg-blue-600'}`} />
    <p className={`text-xl leading-relaxed ${light ? 'text-gray-400' : 'text-gray-600'}`}> {subtitle} </p>
  </div>
);

/* ================== ANA SAYFA BİLEŞENİ ================== */

export default function Page() {
  const canonical = `${SITE_URL}/led-ekran-kiralama`;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Hizmetler", url: `${SITE_URL}/hizmetler` },
    { name: "LED Ekran Kiralama", url: canonical },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      {/* Orijinal Mimarideki Ekmek Kırıntısı Bileşeni */}
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />

      {/* Zenginleştirilmiş SEO JSON-LD Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Sahneva LED Ekran Kiralama",
                "serviceType": "Event Technology",
                "description": "P2.5, P2.9, P3.9 piksel seçenekleri, iç ve dış mekan modelleri, teknik ekip ve montaj dahil.",
                "url": canonical,
                "provider": { "@type": "LocalBusiness", "name": "Sahneva", "telephone": PHONE },
                "areaServed": { "@type": "Country", "name": "Turkey" }
              },
              {
                "@type": "FAQPage",
                "mainEntity": FAQ_ITEMS.map(item => ({
                  "@type": "Question",
                  "name": item.q,
                  "acceptedAnswer": { "@type": "Answer", "text": item.a }
                }))
              },
              ...VIDEO_GALLERY.map((v) => ({
                "@type": "VideoObject",
                "name": v.title,
                "description": `Sahneva LED ekran kiralama proje videosu: ${v.title}`,
                "thumbnailUrl": `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`,
                "uploadDate": "2024-01-01",
                "embedUrl": `https://www.youtube.com/embed/${v.id}`,
                "publisher": { "@type": "Organization", "name": "Sahneva" }
              }))
            ]
          })
        }}
      />

      {/* --- HERO: SEO ODAKLI H1 --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/hizmet-led-ekran.webp"
            alt="Profesyonel LED ekran kurulumu - Konser sahnesinde büyük LED wall ve görsel şov"
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-6xl">
            <div className="inline-flex items-center gap-3 bg-blue-600/20 backdrop-blur-md rounded-full px-6 py-2 border border-blue-500/30 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-bold tracking-widest uppercase text-blue-100 italic">2026 Teknoloji Altyapısı İle Hizmetinizdeyiz</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-8 tracking-tighter text-white">
              LED EKRAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600">
                KİRALAMA
              </span> <br />
              SERVİSİ
            </h1>

            <p className="text-xl md:text-3xl text-gray-300 max-w-4xl leading-relaxed mb-12 font-light">
              P2.5'ten P3.9'a kadar geniş ürün yelpazesi. Konser, fuar ve kurumsal etkinlikler için 
              <strong> anahtar teslim görsel prodüksiyon </strong> çözümleri.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-12 py-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xl transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] flex items-center justify-center gap-3"
              >
                Hızlı Fiyat Teklifi <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#hizmetler"
                className="px-12 py-6 rounded-2xl border-2 border-white/30 hover:border-white text-white font-black text-xl transition-all hover:scale-105 backdrop-blur-md flex items-center justify-center gap-3"
              >
                Hizmetleri İncele <ChevronDown className="group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler Bölümü */}
      <section id="hizmetler" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="LED Ekran Çözümlerimiz"
            subtitle="İç mekan ve dış mekan ihtiyaçlarınıza özel yüksek teknoloji LED ekran sistemleri"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-black mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kullanım Alanları */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Kullanım Alanları"
            subtitle="Her sektör için özelleştirilmiş LED ekran çözümleri"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-blue-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600 rounded-xl text-white">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{useCase.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Proje Galerisi"
            subtitle="Gerçekleşen projelerimizden örnekler"
            light
          />
          <CaseGallery images={GALLERY_IMAGES} />
        </div>
      </section>

      {/* Videolar */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Video Galerisi"
            subtitle="LED ekran uygulamalarımız canlı olarak"
            light
          />
          <div className="grid md:grid-cols-3 gap-6">
            {VIDEO_GALLERY.map((video, index) => (
              <div key={index} className="aspect-video rounded-2xl overflow-hidden bg-gray-800">
                <VideoEmbedClient videoId={video.id} title={video.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Müşteri Yorumları"
            subtitle="Mutlu müşterilerimizin deneyimleri"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">"{review.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-gray-600 text-xs">{review.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Sık Sorulan Sorular"
            subtitle="LED ekran kiralama hakkında merak ettikleriniz"
          />
          <div className="max-w-4xl mx-auto space-y-6">
            {FAQ_ITEMS.map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  {faq.q}
                  <ChevronDown className="transition-transform" size={20} />
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Hemen Başlayalım
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Etkinliğiniz için en uygun LED ekran çözümünü birlikte planlayalım
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-12 py-6 rounded-2xl bg-white text-blue-600 font-black text-xl hover:scale-105 transition-all shadow-lg items-center gap-3"
          >
            <MessageCircle size={24} />
            WhatsApp ile İletişime Geç
          </a>
        </div>
      </section>

      <ServiceBlogLinks service="led-ekran-kiralama" />
    </div>
  );
}

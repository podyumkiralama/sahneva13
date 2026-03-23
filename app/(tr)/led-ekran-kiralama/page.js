// app/led-ekran-kiralama/page.jsx
"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import { 
  Monitor, Sun, Shield, Zap, Settings, Star, Play, MessageCircle, 
  ChevronDown, MapPin, CheckCircle, Layout, ExternalLink, ArrowRight, 
  Camera, Layers, Activity, Award, Users, Globe, Music, Briefcase, 
  Tent, Tv, Headphones, Cpu, Eye, Umbrella, Truck
} from 'lucide-react';

/* ================== Sabitler & Yapılandırma ================== */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com";
const PHONE = "+905453048671";
const WA_TEXT = "Merhaba, LED ekran kiralama projemiz için profesyonel teklif almak istiyoruz. Etkinlik türü: [Konser/Fuar/Düğün], Tarih: [Tarih], Şehir: [Şehir].";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(WA_TEXT)}`;

/* ================== Veri Setleri (SEO Odaklı) ================== */
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
  }
];

const SERVICES = [
  {
    icon: <Monitor className="text-blue-500" size={48} />,
    title: "İç Mekan P2.5 / P2.9 High-Res",
    description: "Yakın mesafeden kristal netliğinde görüntü. Lansman, konferans ve kurumsal sunumlar için optimize edilmiş yüksek yenileme hızı.",
    features: ["P2.5 Ultra-HD Seçeneği", "3840Hz Yenileme Hızı", "Sessiz Fan Teknolojisi", "HDR10 Görüntü Desteği"],
  },
  {
    icon: <Sun className="text-orange-500" size={48} />,
    title: "Dış Mekan P3.9 / P4.8 Outdoor",
    description: "Güneş ışığı altında tam performans. IP65 koruma sınıfı ile yağmur ve toz gibi hava koşullarına karşı %100 dayanıklılık.",
    features: ["6500 Nit Işık Gücü", "IP65 Su Geçirmezlik", "UV Korumalı Maske", "Hızlı Kilit Mekanizması"],
  },
  {
    icon: <Cpu className="text-purple-500" size={48} />,
    title: "Kontrol & Yayın Altyapısı",
    description: "Novastar ve Brompton işlemciler ile kesintisiz görüntü yönetimi. 4K Video Scaler ve yedekli yayın sistemleri.",
    features: ["Novastar VX Serisi Kontrol", "Yedekli Sinyal Hattı", "4K HDMI / SDI Girişleri", "Anlık Görüntü Miksajı"],
  }
];

const USE_CASES = [
  { icon: <Music />, title: "Konser & Festival", desc: "Devasa sahne prodüksiyonları için yüksek parlaklık ve devasa ölçülerde kurulum." },
  { icon: <Briefcase />, title: "Lansman & Gala", desc: "Marka prestijini yansıtan kusursuz piksel yoğunluğu ve şık çerçevesiz tasarım." },
  { icon: <Layout />, title: "Fuar & Stand", desc: "Ziyaretçi trafiğini artıran interaktif ve dikkat çekici video wall çözümleri." },
  { icon: <Tv />, title: "Canlı Yayın & TV", desc: "Kamera çekimlerinde tarama çizgisi (moiré) oluşturmayan profesyonel paneller." },
  { icon: <Award />, title: "Moda & Defile", desc: "Renk doğruluğu en yüksek seviyede olan, dinamik içeriklere uygun kurulumlar." },
  { icon: <Users />, title: "Spor & Miting", desc: "Geniş kitlelere hitap eden, uzak mesafeden net görülebilen dev ekranlar." }
];

/* ================== Yardımcı Bileşenler ================== */

const SectionTitle = ({ title, subtitle, light = false }) => (
  <div className="mb-16 text-left max-w-4xl">
    <h2 className={`text-4xl md:text-6xl font-black mb-6 tracking-tighter ${light ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h2>
    <div className={`w-24 h-2 rounded-full mb-6 ${light ? 'bg-blue-500' : 'bg-blue-600'}`} />
    <p className={`text-xl leading-relaxed ${light ? 'text-gray-400' : 'text-gray-600'}`}>
      {subtitle}
    </p>
  </div>
);

const VideoEmbed = ({ videoId, title }) => (
  <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black group shadow-lg border border-gray-100">
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
);

const FAQItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 text-left flex justify-between items-center font-bold text-xl select-none focus:outline-none"
      >
        <span className="pr-4">{q}</span>
        <ChevronDown className={`text-blue-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={28} />
      </button>
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-50 pt-6 text-lg">
          {a}
        </div>
      </div>
    </div>
  );
};

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
                "description": "P2.5, P2.9 ve P3.9 profesyonel LED ekran kiralama, sahne kurulumu ve teknik prodüksiyon hizmetleri.",
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
              }
            ]
          })
        }}
      />

      {/* --- HERO: SEO ODAKLI H1 --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          {/* Harici linkler next.config.js'de ayarlı değilse standart img etiketi kullanmak hataları önler */}
          <img 
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop" 
            alt="Profesyonel LED Ekran Kiralama Sahneva" 
            className="w-full h-full object-cover opacity-50"
            loading="eager"
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
              <strong> anahtar teslim görsel prodüksiyon</strong> çözümleri.
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
                href="#teknik-rehber"
                className="group px-12 py-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3"
              >
                Teknik Rehber <Eye className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS: GÜVEN SİNYALLERİ --- */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "500+", label: "BAŞARILI ETKİNLİK" },
              { val: "3840Hz", label: "TAZELEME HIZI" },
              { val: "81 İL", label: "HİZMET AĞI" },
              { val: "7/24", label: "TEKNİK DESTEK" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-blue-600 mb-2">{stat.val}</div>
                <div className="text-gray-500 font-bold text-xs uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES: DETAYLI HİZMETLER --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={<span>Görsel Teknoloji <span className="text-blue-600">Çözümleri</span></span>}
            subtitle="Piksel aralığından parlaklık değerine kadar her ihtiyaca uygun LED ekran konfigürasyonu."
          />
          
          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES.map((svc, idx) => (
              <div key={idx} className="group relative p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-blue-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl">
                <div className="mb-8 transform group-hover:-translate-y-2 transition-transform duration-500 bg-blue-50 w-24 h-24 rounded-3xl flex items-center justify-center">
                  {svc.icon}
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tighter text-gray-900">{svc.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{svc.description}</p>
                <div className="space-y-4 mb-10">
                  {svc.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={14} className="text-blue-600" />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
                <a 
                  href={WHATSAPP}
                  target="_blank"
                  className="w-full py-5 rounded-2xl bg-blue-50 text-blue-600 font-bold flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  Şimdi Teklif Al <ArrowRight size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- KAPSAMLI MAKALE REHBERİ (SEO ANA İÇERİK) --- */}
      <section id="teknik-rehber" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 block">Profesyonel Makale & Rehber</span>
            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-[0.9]">
              LED Ekran Kiralama: <br /> Etkinliğiniz İçin Doğru Seçimi Yapın
            </h2>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8 text-lg text-gray-700 leading-relaxed">
                <p>
                  Modern etkinlik dünyasında görsellik artık bir yan unsur değil, etkinliğin temel taşıdır. 
                  <strong> LED ekran kiralama</strong> hizmeti alırken dikkat etmeniz gereken teknik parametreler, 
                  izleyicilerinizin görsel deneyimini doğrudan belirler. Sahneva olarak sunduğumuz 2026 model 
                  paneller, sadece yüksek çözünürlük değil, aynı zamanda canlı yayın uyumluluğu ve renk doğruluğu sunar.
                </p>

                <h3 className="text-3xl font-black text-gray-900 mt-12 tracking-tight">Piksel Aralığı (Pixel Pitch) Neden Önemlidir?</h3>
                <p>
                  P2.5, P2.9 ve P3.9 gibi terimler, iki piksel arasındaki mesafeyi milimetre cinsinden ifade eder. 
                  Mesafe ne kadar düşükse, çözünürlük o kadar yüksek olur. <strong>İç mekan LED ekran kiralama</strong> 
                  projelerinde (lansman, sunum) genellikle P2.5 ve P2.9 tercih edilirken; geniş alan konserlerinde 
                  P3.9 ve P4.8 modelleri maliyet-performans dengesi sağlar.
                </p>

                <div className="bg-blue-50 p-8 rounded-[2rem] border-l-8 border-blue-600 my-10">
                  <h4 className="font-bold text-2xl text-blue-900 mb-4">Altın Kural: İzleme Mesafesi</h4>
                  <p className="text-blue-800">
                    Ekranın piksel değeri, izleyicinin minimum kaç metreden ekrana bakması gerektiğini belirler. 
                    Örneğin; P2.9 bir ekran için en net görüntü 3 metreden itibaren başlar. Doğru seçim, bütçenizi korur.
                  </p>
                </div>

                <h3 className="text-3xl font-black text-gray-900 tracking-tight">Novastar İşlemci ve Görüntü Kalitesi</h3>
                <p>
                  LED panellerin kalitesi kadar onları süren işlemciler de kritiktir. Sahneva, tüm projelerinde 
                  dünya standardı olan <strong>Novastar</strong> işlemcileri kullanır. Bu sayede ekran parlaklığı, 
                  kontrast dengesi ve tazeleme hızı (refresh rate) yazılımsal olarak her ortam için optimize edilir.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900 text-white p-10 rounded-[3rem] sticky top-24 shadow-2xl">
                  <h4 className="text-2xl font-black mb-6">Teknik Check-List</h4>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <Zap className="text-blue-400 flex-shrink-0" />
                      <div>
                        <span className="font-bold block">Güç Altyapısı</span>
                        <span className="text-sm opacity-60">Kurulum öncesi enerji keşfi yapıyoruz.</span>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <Activity className="text-blue-400 flex-shrink-0" />
                      <div>
                        <span className="font-bold block">Yedekli Yayın</span>
                        <span className="text-sm opacity-60">Sinyal kesilmesine karşı double-link.</span>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <Camera className="text-blue-400 flex-shrink-0" />
                      <div>
                        <span className="font-bold block">Yayın Uyumu</span>
                        <span className="text-sm opacity-60">Kamera çekimlerinde flicker (titreme) yapmaz.</span>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <Truck className="text-blue-400 flex-shrink-0" />
                      <div>
                        <span className="font-bold block">Lojistik & Montaj</span>
                        <span className="text-sm opacity-60">Türkiye geneli hızlı sevkiyat ve kurulum.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- KULLANIM ALANLARI: LSI KELİMELER --- */}
      <section className="py-24 bg-neutral-900 text-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            light 
            title={<span>Sektörel <span className="text-blue-500">Uygulamalar</span></span>}
            subtitle="Hangi etkinlik için hangi LED ekran kurgulanmalı? Sektörel bazda uzmanlık çözümlerimiz."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {USE_CASES.map((uc, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  {React.cloneElement(uc.icon, { size: 32 })}
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{uc.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-lg">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VİDEO GALERİ --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Saha <span className="text-blue-600">Performansımız</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto italic text-lg">Gerçek kurulumlarımızdan kesitlerle görüntü kalitemizi yakından inceleyin.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="space-y-6">
              <VideoEmbed videoId="1R5Av0x5ouA" title="Konser Sahne Kurulumu" />
              <div className="px-4">
                <h4 className="font-bold text-xl mb-2">Canlı Sahne Prodüksiyonu</h4>
                <p className="text-gray-500">Açık hava festivalinde dev ekran ve ışık entegrasyonu.</p>
              </div>
            </div>
            <div className="space-y-6">
              <VideoEmbed videoId="JNzGlNzNRuk" title="Kurumsal Fuar Standı" />
              <div className="px-4">
                <h4 className="font-bold text-xl mb-2">İnteraktif Fuar Çözümleri</h4>
                <p className="text-gray-500">Marka standında dikkat çeken yüksek çözünürlüklü LED duvar.</p>
              </div>
            </div>
            <div className="space-y-6">
              <VideoEmbed videoId="j1Tr5l8DVW8" title="Özel Lansman Uygulaması" />
              <div className="px-4">
                <h4 className="font-bold text-xl mb-2">Ürün Lansman Etkinliği</h4>
                <p className="text-gray-500">Metin ve detay odaklı P2.5 premium iç mekan kurulumu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ: ZENGİN SORULAR --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle 
            title="Sık Sorulan Sorular"
            subtitle="LED kiralama süreci hakkında teknik ve operasyonel merak edilen tüm detaylar."
          />
          <div className="mt-12 space-y-4">
            {FAQ_ITEMS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
            <div className="p-8 rounded-[2rem] bg-blue-50 text-blue-900 font-bold flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-center sm:text-left">Daha fazla sorunuz mu var? Teknik ekibimizle konuşun.</span>
              <a href={WHATSAPP} className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 flex-shrink-0">
                Soru Sor <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA: FINAL DÖNÜŞÜM --- */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
            Etkinliğinize Güç Katın
          </h2>
          <p className="text-2xl md:text-3xl text-blue-100 max-w-4xl mx-auto mb-14 font-light">
            En yeni teknoloji LED ekranlar, profesyonel operatör desteği ve 
            <strong> 81 ilde hizmet kapasitesi</strong> ile çözüm ortağınız olmaya hazırız.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={WHATSAPP} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-5 sm:px-14 sm:py-7 bg-white text-blue-600 font-black rounded-[2.5rem] hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-4 text-xl sm:text-2xl"
            >
              <MessageCircle size={32} />
              WhatsApp’tan Teklif Al
            </a>
            <Link 
              href="/iletisim" 
              className="px-8 py-5 sm:px-14 sm:py-7 bg-blue-900/40 backdrop-blur-md border border-white/20 text-white font-black rounded-[2.5rem] hover:bg-blue-900/60 transition-all flex items-center justify-center gap-4 text-xl sm:text-2xl"
            >
              Bize Ulaşın <ExternalLink size={32} />
            </Link>
          </div>
          
          <div className="mt-24 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-10 text-blue-200/60 font-bold uppercase tracking-widest text-sm">
            <span className="flex items-center gap-2"><CheckCircle size={16} /> Ücretsiz Teknik Keşif</span>
            <span className="flex items-center gap-2"><CheckCircle size={16} /> Türkiye Geneli Kurulum</span>
            <span className="flex items-center gap-2"><CheckCircle size={16} /> 2026 Model Donanım</span>
          </div>
        </div>
      </section>

      {/* Orijinal Mimarideki İç Bağlantı (SEO) Bileşeni */}
      <ServiceBlogLinks
        links={[
          { href: "/blog/led-ekran-teknoloji-trendleri-2026", title: "2026 LED Ekran Teknolojileri" },
          { href: "/blog/p2-5-vs-p3-9-karsilastirma", title: "P2.5 ve P3.9 Ekran Karşılaştırması" }
        ]}
      />
    </div>
  );
}

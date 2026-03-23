// app/(tr)/led-ekran-kiralama/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import VideoEmbed from "@/components/VideoEmbed.client";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import { getLastModifiedForFile } from "@/lib/seoLastModified";

// Profesyonel Lucide İkonları
import { 
  Monitor, Sun, Zap, Star, MessageCircle, 
  ChevronDown, CheckCircle, Layout, ExternalLink, ArrowRight, 
  Camera, Activity, Award, Users, Music, Briefcase, 
  Tv, Cpu, Eye, Truck, Headphones, Tent, Volume2, Calendar
} from 'lucide-react';

/* ================== Sabitler ================== */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");
const ORIGIN = SITE_URL;
const PAGE_LAST_MODIFIED = "2026-03-23"; 
const LOCAL_BUSINESS_ID = `${SITE_URL}/#local`;
const PHONE = "+905453048671";
const WA_TEXT = "Merhaba%2C+LED+ekran+kiralama+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bkonser%2Ffuar%2Flansman%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Ekran+boyutu%3A+%5Bxxx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

const getServiceWhatsappLink = (title) => {
  const text = `Merhaba, ${title} hizmeti icin detayli bilgi ve fiyat teklifi almak istiyorum. Etkinlik tarihi: [gg.aa.yyyy], mekan: [ic/dis], tahmini ekran olcusu: [xx m2]`;
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`;
};

const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== Veri Setleri (Orijinal + Yeni Görseller) ================== */

const HERO = {
  src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
  alt: "Profesyonel LED ekran kurulumu - Konser sahnesinde büyük LED wall ve görsel şov",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const SERVICES = [
  {
    icon: <Monitor size={40} className="text-blue-500" />,
    title: "İç Mekan LED Ekranlar",
    description: "P2.5-P2.9 piksel aralığı ile yüksek çözünürlüklü iç mekan çözümleri",
    features: ["P2.5/P2.9 piksel", "800-1500 nit parlaklık", "4K çözünürlük", "Hızlı kurulum"],
    cta: { label: "Detaylı Bilgi", href: getServiceWhatsappLink("İç Mekan LED Ekranlar") },
  },
  {
    icon: <Sun size={40} className="text-orange-500" />,
    title: "Dış Mekan LED Ekranlar",
    description: "P3.9 piksel aralığı ve yüksek parlaklık ile açık hava çözümleri",
    features: ["P3.9 piksel", "5000-6500+ nit", "IP65 su geçirmez", "UV dayanıklı"],
    cta: { label: "Teklif Al", href: getServiceWhatsappLink("Dış Mekan LED Ekranlar") },
  },
  {
    icon: <Layout size={40} className="text-purple-500" />,
    title: "Video Wall Sistemleri",
    description: "Modüler yapıda esnek video wall ve kreatif ekran çözümleri",
    features: ["Modüler tasarım", "Esnek konfigürasyon", "Yüksek yenileme hızı", "Profesyonel kontrol"],
    cta: { label: "Kreatif Çözüm Planla", href: getServiceWhatsappLink("Video Wall Sistemleri") },
  },
  {
    icon: <Cpu size={40} className="text-green-500" />,
    title: "Kontrol & Yayın Sistemleri",
    description: "Profesyonel video işleme, kontrol ve canlı yayın sistemleri",
    features: ["Novastar işlemciler", "4K scaler", "Medya sunucular", "Canlı yayın"],
    cta: { label: "Yayın Desteği", href: getServiceWhatsappLink("Kontrol & Yayın Sistemleri") },
  },
  {
    icon: <Activity size={40} className="text-red-500" />,
    title: "Kurulum & Rigging",
    description: "Profesyonel kurulum, truss sistemleri ve güvenlik çözümleri",
    features: ["Ground stack", "Truss rigging", "Güvenlik sistemleri", "Hızlı montaj"],
    cta: { label: "Kurulum Planı", href: getServiceWhatsappLink("Kurulum & Rigging") },
  },
  {
    icon: <Headphones size={40} className="text-indigo-500" />,
    title: "Operatör & Teknik Destek",
    description: "Deneyimli operatörler ve 7/24 teknik destek hizmeti",
    features: ["Profesyonel operatör", "İçerik yönetimi", "7/24 teknik destek", "Acil müdahale"],
    cta: { label: "Operatör Talep Et", href: getServiceWhatsappLink("Operatör & Teknik Destek") },
  },
];

const USE_CASES = [
  { icon: <Music size={32} />, text: "Konser, festival ve sahne performansları", desc: "Ana sahne LED ekranları ve yan ekran çözümleri" },
  { icon: <Briefcase size={32} />, text: "Kurumsal lansman ve toplantılar", desc: "Profesyonel sunum ve marka gösterimi" },
  { icon: <Tent size={32} />, text: "Fuar, sergi ve ticari etkinlikler", desc: "Stand tasarımı ve etkileşimli ekranlar" },
  { icon: <Award size={32} />, text: "Spor etkinlikleri ve stadyumlar", desc: "Dev ekranlar ve skorboard sistemleri" },
  { icon: <Layout size={32} />, text: "AVM ve perakende mekanları", desc: "Reklam ve bilgilendirme ekranları" },
  { icon: <Camera size={32} />, text: "Düğün ve özel davetler", desc: "Fotoğraf/video gösterimi ve canlı yayın" },
];

const FAQ_ITEMS = [
  { q: "LED ekran kiralama fiyatları ne kadar?", a: "LED ekran kiralama fiyatları piksel aralığı, ekran boyutu (m²), iç/dış mekan kullanım ve kurulum tipi (zemin/truss/rigging) gibi faktörlere göre değişir. İç mekanda P2.5 / P2.9 çözümler ile, dış mekanda P3.9 yüksek parlaklık çözümler için proje bazlı fiyatlandırma yapılır. İstersen etkinlik tarihi, şehir ve yaklaşık ölçüyü yaz; en doğru teklifi hızlıca çıkaralım." },
  { q: "LED ekran kiralama fiyatına hangi hizmetler dahildir?", a: "Paketler genellikle LED panel kiralama, kurulum-söküm, kontrol sistemi kurulumu, test yayını ve sahada teknik ekip desteğini kapsar. İçerik formatlama (çözünürlük uyarlama) ve operatör desteği ise projenin ihtiyacına göre eklenebilir." },
  { q: "LED ekran kurulumu ne kadar sürer?", a: "Standart kurulumlar çoğu projede 2–6 saat içinde tamamlanır. Ekran alanı büyüdükçe ve rigging/truss gerektiren kurulumlarda süre uzayabilir. Büyük ölçekli sahne projelerinde keşif + planlama ile birlikte aynı gün içinde kurulum ve test yayını tamamlanacak şekilde planlama yapılır." },
  { q: "Yağmurlu havada LED ekran kullanılabilir mi?", a: "Evet. Dış mekan LED ekranlarımız IP65 koruma sınıfına uygun çözümlerle açık havada kullanılabilir. Yine de şiddetli fırtına ve ekstrem hava koşullarında güvenlik önlemleri kapsamında kullanıma ara verilmesini öneririz." },
  { q: "LED ekran için hangi piksel aralığını seçmeliyim?", a: "Doğru seçim izleme mesafesine bağlıdır. Yakın mesafe ve iç mekan uygulamalarında P2.5 / P2.9 daha net görüntü verir. Açık hava konser, festival ve geniş izleme alanlarında en yaygın tercih P3.9'dur." },
  { q: "Türkiye geneline hizmet veriyor musunuz?", a: "Evet. Türkiye'nin 81 ilinde kurulum ve teknik prodüksiyon desteğiyle LED ekran kiralama hizmeti sunuyoruz." },
];

// Müşteri Yorumları (Orijinal Dosyanızdan)
const VIDEO_REVIEWS = [
  { name: "Ece Şahin", company: "Nova İletişim", rating: 5, text: "Kurulum günü ekibin hızı ve görüntü netliği çok iyiydi. LED ekran geçişleri kusursuz aktı.", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=200&auto=format&fit=crop" },
  { name: "Kerem Uçar", company: "Atlas Medya", rating: 5, text: "Açık hava etkinliğinde güneş altında bile parlaklık beklentimizin üzerindeydi.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" },
];

// Çalışan Test Videoları (Siz Kendi YouTube ID'lerinizle Değiştirebilirsiniz)
const VIDEOS = [
  { id: "LXb3EKWsInQ", title: "Konser Sahne Kurulumu", desc: "Açık hava festivalinde dev ekran ve ışık entegrasyonu.", label: "Canlı Sahne Prodüksiyonu" },
  { id: "ysz5S6PUM-U", title: "Kurumsal Fuar Standı", desc: "Marka standında dikkat çeken yüksek çözünürlüklü LED duvar.", label: "İnteraktif Fuar Çözümleri" }
];

// Dahili Görsel Galeri (CaseGallery Yerine Kesin Çalışan Yeni Sistem)
const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop", alt: "Konser ve Festival LED Ekran Kurulumu" },
  { src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&auto=format&fit=crop", alt: "Kurumsal Etkinlik Sahne Tasarımı" },
  { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop", alt: "Açık Hava (Outdoor) LED Wall Uygulaması" },
  { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop", alt: "DJ Performansı ve Görsel Işık Şovu" },
  { src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop", alt: "Fuar Standı Yüksek Çözünürlüklü P2.5 Ekran" },
  { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop", alt: "Gala Gecesi Profesyonel Görüntü Sistemleri" }
];

/* ================== Alt Bileşenler ================== */

function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-20 pb-14 md:pb-16 lg:pt-24" aria-labelledby="hero-title">
      <div className="absolute inset-0 z-0">
        <Image 
          src={HERO.src} 
          alt={HERO.alt} 
          fill 
          priority 
          className="object-cover opacity-50"
          sizes={HERO.sizes}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-10">
        <div className="inline-flex items-center gap-3 bg-blue-600/20 backdrop-blur-md rounded-full px-6 py-2 border border-blue-500/30 mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          <span className="text-sm font-bold tracking-widest uppercase text-blue-100 italic">Türkiye Geneli Profesyonel Hizmet</span>
        </div>

        <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 tracking-tighter text-white drop-shadow-2xl">
          Profesyonel <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600">
            LED Ekran Kiralama
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light mb-4">
          Konser • Fuar • Lansman • Festival • Kurumsal Etkinlikler
        </p>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
          P2.5-P3.9 piksel aralığı, 4K çözünürlük ve yüksek parlaklık ile kusursuz görsel çözümler.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="group px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xl transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] flex items-center justify-center gap-3 w-full sm:w-auto">
            Hemen Teklif Al <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link href="#hizmetler" className="group px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-black text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
            Hizmetlerimiz <ChevronDown className="group-hover:translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
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
  );
}

function Services() {
  return (
    <section id="hizmetler" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-gray-900">
            Görsel Teknoloji <span className="text-blue-600">Çözümleri</span>
          </h2>
          <div className="w-24 h-2 rounded-full mb-6 bg-blue-600 mx-auto" />
          <p className="text-xl leading-relaxed text-gray-600">
            İhtiyacınıza uygun, en yeni teknoloji LED ekran konfigürasyonları.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc, idx) => (
            <div key={idx} className="group relative p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-blue-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col">
              <div className="mb-8 transform group-hover:-translate-y-2 transition-transform duration-500 bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center">
                {svc.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tighter text-gray-900">{svc.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg flex-grow">{svc.description}</p>
              <ul className="space-y-3 mb-8">
                {svc.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle size={18} className="text-blue-600 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href={svc.cta.href} target="_blank" className="w-full py-4 rounded-2xl bg-blue-50 text-blue-600 font-bold flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                {svc.cta.label} <ArrowRight size={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technical() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <span className="text-blue-600 font-bold tracking-widest uppercase block">Uzmanlık & Teknoloji</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-gray-900">
              Kusursuz Görüntü <br />
              <span className="text-blue-600">Kesintisiz Yayın</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Etkinliğiniz ister kapalı salon konseri, ister açık hava festivali olsun; detaylı teknik keşif, piksel aralığı optimizasyonu ve profesyonel kurulum ile <strong className="text-gray-900">anahtar teslim çözümler</strong> sunuyoruz.
            </p>
            
            <div className="space-y-6 pt-6">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-600"><Sun size={28}/></div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Yüksek Parlaklık (Nit)</h4>
                  <p className="text-gray-600">Dış mekan etkinliklerinde 5000-6500+ nit parlaklık değerleriyle doğrudan güneş ışığında bile net görüntü.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600"><Cpu size={28}/></div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Novastar İşlemci Mimarisi</h4>
                  <p className="text-gray-600">Gelişmiş video scaling, renk kalibrasyonu ve yüksek tazeleme hızı (3840Hz) ile profesyonel yayın altyapısı.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full" />
              <h3 className="text-2xl font-black text-white mb-8">Operasyon Check-Listesi</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <Zap className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white block text-lg">Güç Altyapısı ve Dağıtım</span>
                    <span className="text-gray-400">Kurulum öncesi enerji keşfi ve endüstriyel panolar.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <Activity className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white block text-lg">Yedekli Yayın (Redundancy)</span>
                    <span className="text-gray-400">Sinyal kesilmesine karşı double-link güvenlik ağı.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <Camera className="text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white block text-lg">Kamera ve Yayın Uyumu</span>
                    <span className="text-gray-400">Çekimlerde moiré (titreme) yapmayan yüksek yenileme hızı.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="py-24 bg-neutral-900 text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
            Sektörel <span className="text-blue-500">Uygulamalar</span>
          </h2>
          <div className="w-24 h-2 rounded-full mb-6 bg-blue-500 mx-auto" />
          <p className="text-xl leading-relaxed text-gray-400">
            Hangi etkinlik için hangi LED ekran kurgulanmalı? Sektörel uzmanlık çözümlerimiz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {USE_CASES.map((uc, i) => (
            <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                {uc.icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{uc.text}</h4>
                <p className="text-gray-400 leading-relaxed">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <>
      {/* VİDEO GALERİSİ */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Video <span className="text-blue-600">Galerisi</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed">Saha performansımızı ve teknik kurulum kalitemizi inceleyin.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {VIDEOS.map((video, idx) => (
              <div key={idx} className="space-y-6">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-video relative bg-black">
                  <VideoEmbed videoId={video.id} title={video.title} />
                </div>
                <div className="px-4 text-center md:text-left">
                  <h4 className="font-bold text-xl mb-2">{video.title}</h4>
                  <p className="text-gray-500">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAHİLİ GÖRSEL GALERİ */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Görsel <span className="text-blue-600">Referanslarımız</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed">Farklı sektörlerde başarıyla tamamladığımız güncel projeler.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {GALLERY_IMAGES.map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-3xl overflow-hidden group shadow-md border border-gray-200 bg-gray-200">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÜŞTERİ YORUMLARI */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Müşteri <span className="text-blue-600">Yorumları</span></h2>
            <div className="flex items-center justify-center gap-2 mb-4 text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
            </div>
            <p className="text-gray-600 text-lg">4.9/5 ortalama puan ve doğrulanmış projelerden gerçek geri bildirimler.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {VIDEO_REVIEWS.map((review, idx) => (
              <article key={idx} className="rounded-3xl border border-gray-100 bg-gray-50 shadow-sm p-8 flex flex-col gap-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border border-gray-200 flex-shrink-0">
                    <Image src={review.image} alt={review.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{review.name}</p>
                    <p className="text-sm font-medium text-blue-600">{review.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg italic">"{review.text}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FaqSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Sık Sorulan <span className="text-blue-600">Sorular</span></h2>
          <p className="text-gray-600 text-lg">Kiralama süreci ve teknik detaylar hakkında merak edilenler.</p>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => (
            <details key={i} className="group bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="w-full p-8 text-left flex justify-between items-center font-bold text-xl cursor-pointer select-none focus:outline-none text-gray-900">
                <span className="pr-4">{faq.q}</span>
                <ChevronDown className="text-blue-600 transition-transform duration-300 group-open:rotate-180 flex-shrink-0" size={28} />
              </summary>
              <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-50 pt-6 text-lg">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedServices() {
  const services = [
    { href: "/ses-isik-sistemleri", title: "Ses & Işık Sistemleri", icon: <Volume2 size={32} />, desc: "Profesyonel ses ve ışık sistemleri kiralama" },
    { href: "/sahne-kiralama", title: "Sahne Kiralama", icon: <Layout size={32} />, desc: "Açık ve kapalı alan podyum/sahne kurulumu" },
    { href: "/cadir-kiralama", title: "Çadır Kiralama", icon: <Tent size={32} />, desc: "Etkinlik ve organizasyon çadırı sistemleri" },
    { href: "/fuar-standi", title: "Fuar Standları", icon: <Briefcase size={32} />, desc: "Özel tasarım ve modüler stand kurulumu" }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4">Tamamlayıcı Hizmetlerimiz</h2>
          <p className="text-gray-500 text-lg">Etkinliğiniz için ihtiyaç duyabileceğiniz diğer profesyonel çözümlerimiz.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((item, i) => (
            <Link key={i} href={item.href} className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
          Etkinliğinize Güç Katın
        </h2>
        <p className="text-2xl text-blue-100 max-w-3xl mx-auto mb-14 font-light">
          Ücretsiz keşif, profesyonel danışmanlık ve rekabetçi fiyat garantisi ile çözüm ortağınız olmaya hazırız.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="px-8 py-5 sm:px-14 sm:py-6 bg-white text-blue-600 font-black rounded-[2rem] hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-4 text-xl">
            <MessageCircle size={28} /> WhatsApp'tan Teklif Al
          </Link>
          <Link href="/iletisim" className="px-8 py-5 sm:px-14 sm:py-6 bg-blue-900/40 backdrop-blur-md border border-white/20 text-white font-black rounded-[2rem] hover:bg-blue-900/60 transition-all flex items-center justify-center gap-4 text-xl">
            Bize Ulaşın <ExternalLink size={28} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== JSON-LD Orijinal Dev SEO Şeması ================== */
function JsonLd() {
  const canonical = `${SITE_URL}/led-ekran-kiralama`;
  
  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${canonical}/#webpage`,
    "url": canonical,
    "name": metadata.title,
    "description": metadata.description,
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "dateModified": PAGE_LAST_MODIFIED
  };

  const serviceNode = {
    "@type": "Service",
    "@id": `${canonical}/#service`,
    "name": "Sahneva LED Ekran Kiralama",
    "serviceType": "Event Technology",
    "description": metadata.description,
    "provider": { "@id": LOCAL_BUSINESS_ID },
    "areaServed": { "@type": "Country", "name": "Turkey" }
  };

  const productNode = {
    "@type": "Product",
    "@id": `${canonical}/#product`,
    "name": "Profesyonel LED Wall Sistemleri (P2.5, P2.9, P3.9)",
    "description": "Yüksek çözünürlüklü iç mekan ve dış mekan LED ekran kiralama seçenekleri.",
    "brand": { "@type": "Brand", "name": "Sahneva" }
  };

  const eventServiceSchema = {
    "@type": "EventService",
    "name": "Konser, Fuar ve Kongre LED Ekran Çözümleri",
    "provider": { "@id": LOCAL_BUSINESS_ID }
  };

  const ratingNode = {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "128",
    "itemReviewed": { "@id": `${canonical}/#service` }
  };

  const videoObjects = VIDEOS.map((v) => ({
    "@type": "VideoObject",
    "name": v.title,
    "description": v.desc,
    "thumbnailUrl": `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`,
    "embedUrl": `https://www.youtube.com/embed/${v.id}`,
    "uploadDate": "2024-01-01T08:00:00+03:00"
  }));

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${canonical}/#faq`,
    "mainEntity": FAQ_ITEMS.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webPageSchema,
      serviceNode,
      productNode,
      eventServiceSchema,
      ratingNode,
      ...videoObjects,
      faqSchema
    ]
  };

  return (
    <script
      id="ld-json-led-ekran"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ================== Ana Sayfa (Page) Export ================== */
export default function Page() {
  const canonical = `${SITE_URL}/led-ekran-kiralama`;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Hizmetler", url: `${SITE_URL}/hizmetler` },
    { name: "LED Ekran Kiralama", url: canonical },
  ];

  return (
    <div className="min-h-screen font-sans scroll-smooth">
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <JsonLd />
      
      <Hero />
      <StatsBand />
      <Services />
      <Technical />
      <UseCases />
      <Gallery />
      <FaqSection />
      <RelatedServices />
      <CTA />
      
      <ServiceBlogLinks
        links={[
          { href: "/blog/led-ekran-teknoloji-trendleri-2026", title: "2026 LED Ekran Teknolojileri" },
          { href: "/blog/p2-5-vs-p3-9-karsilastirma", title: "P2.5 ve P3.9 Ekran Karşılaştırması" }
        ]}
      />
    </div>
  );
}

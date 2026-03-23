// app/(tr)/led-ekran-kiralama/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import VideoEmbed from "@/components/VideoEmbed.client";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import { useState } from "react";

// Lucide İkonları
import { 
  Monitor, Sun, Zap, Star, MessageCircle, 
  ChevronDown, CheckCircle, Layout, ExternalLink, ArrowRight, 
  Camera, Activity, Award, Users, Music, Briefcase, 
  Tv, Cpu, Eye, Truck, Headphones, Tent, Volume2, BookOpen
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

const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== Veri Setleri ================== */

const HERO = {
  src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
  alt: "Profesyonel LED ekran kurulumu - Konser sahnesinde büyük LED wall ve görsel şov",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const VIDEOS = [
  { id: "LXb3EKWsInQ", title: "Konser Sahne Kurulumu", desc: "Açık hava festivalinde dev ekran ve ışık entegrasyonu.", label: "Canlı Sahne Prodüksiyonu" },
  { id: "ysz5S6PUM-U", title: "Kurumsal Fuar Standı", desc: "Marka standında dikkat çeken yüksek çözünürlüklü LED duvar.", label: "İnteraktif Fuar Çözümleri" }
];

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop", alt: "Konser ve Festival LED Ekran Kurulumu" },
  { src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&auto=format&fit=crop", alt: "Kurumsal Etkinlik Sahne Tasarımı" },
  { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop", alt: "Açık Hava (Outdoor) LED Wall Uygulaması" },
  { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop", alt: "DJ Performansı ve Görsel Işık Şovu" },
  { src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop", alt: "Fuar Standı Yüksek Çözünürlüklü P2.5 Ekran" },
  { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop", alt: "Gala Gecesi Profesyonel Görüntü Sistemleri" }
];

const SERVICES = [
  {
    icon: <Monitor size={40} className="text-blue-500" />,
    title: "İç Mekan (Indoor) LED",
    description: "P2.5 ve P2.9 piksel aralığı ile lansman ve konferanslar için yüksek çözünürlüklü iç mekan çözümleri.",
    features: ["P2.5/P2.9 piksel", "800-1500 nit parlaklık", "4K çözünürlük", "Sessiz fan teknolojisi"]
  },
  {
    icon: <Sun size={40} className="text-orange-500" />,
    title: "Dış Mekan (Outdoor) LED",
    description: "P3.9 piksel aralığı ve IP65 koruma sınıfıyla açık hava ve festival etkinlikleri için dayanıklı ekranlar.",
    features: ["P3.9 piksel", "5000-6500+ nit", "IP65 su geçirmez", "Güneş altında netlik"]
  },
  {
    icon: <Cpu size={40} className="text-purple-500" />,
    title: "Kontrol & Yayın Sistemleri",
    description: "Novastar işlemciler ve yedekli yayın sistemleri ile kusursuz anlık görüntü ve reji yönetimi.",
    features: ["Novastar işlemciler", "Yedekli sistem", "3840Hz yenileme hızı", "Canlı yayın uyumu"]
  }
];

const USE_CASES = [
  { icon: <Music size={32} />, text: "Konser, festival ve sahne performansları", desc: "Ana sahne LED ekranları ve yan delay ekran çözümleri." },
  { icon: <Briefcase size={32} />, text: "Kurumsal lansman ve toplantılar", desc: "Profesyonel sunum ve marka prestiji gösterimi." },
  { icon: <Tent size={32} />, text: "Fuar, sergi ve ticari etkinlikler", desc: "Stand tasarımı ve ziyaretçi etkileşimli ekranlar." },
  { icon: <Award size={32} />, text: "Spor etkinlikleri ve mitingler", desc: "Devasa ekranlar ve canlı skor/yayın sistemleri." },
];

const ARTICLES_DATA = [
  {
    title: "Piksel Aralığı (Pixel Pitch) Seçimi",
    content: "LED ekran kiralama projelerinde en önemli kriterlerden biri piksel aralığıdır. İç mekan (indoor) etkinliklerde, izleyici mesafesi yakın olduğu için P2.5 ve P2.9 gibi yüksek çözünürlüklü paneller tercih edilir. Dış mekan (outdoor) etkinliklerde ise izleme mesafesi arttığı için P3.9 ve P4.8 paneller ideal görüntü kalitesi sağlar. Doğru piksel seçimi, bütçe ve performans optimizasyonu için kritiktir."
  },
  {
    title: "Yüksek Yenileme Hızı (Refresh Rate)",
    content: "Özellikle kamera çekimi ve canlı yayın yapılan lansman, kongre veya konser gibi etkinliklerde LED ekranın yenileme hızı hayati önem taşır. 3840Hz ve üzeri yenileme hızına sahip panellerimiz, kamera sensörlerinde 'moiré' (titreme ve dalgalanma) efekti yaratmaz, fotoğraflarda ve videolarda kusursuz bir arka plan sunar."
  },
  {
    title: "Kabin ve Kurulum Altyapısı",
    content: "Güvenlik ve estetik, sahne prodüksiyonunun temelidir. Die-cast alüminyum kabinlerimiz sayesinde ekranlar pürüzsüz birleşir, kesit veya çizgi izi bırakmaz. Kurulum alanının fiziki şartlarına göre ground support (zemin destekli) veya truss sistemlerine asılarak (rigging) uluslararası güvenlik standartlarında monte edilir."
  },
  {
    title: "Neden Sahneva'yı Tercih Etmelisiniz?",
    content: "Sahneva olarak sadece ekipman kiralama değil, anahtar teslim görsel prodüksiyon hizmeti sunuyoruz. Novastar işlemciler, yedekli (redundant) yayın altyapısı, 81 ile uzanan lojistik ağımız ve etkinlik boyunca anlık müdahale edebilen uzman operatörlerimizle projenizi şansa bırakmıyoruz."
  }
];

const FAQ_ITEMS = [
  { q: "LED ekran kiralama fiyatları ne kadar?", a: "LED ekran kiralama fiyatları piksel aralığı, ekran boyutu (m²), iç/dış mekan kullanım ve kurulum tipi (zemin/truss/rigging) gibi faktörlere göre değişir. Etkinlik tarihi, şehir ve yaklaşık ölçüyü bize ileterek hızlıca fiyat teklifi alabilirsiniz." },
  { q: "LED ekran kiralama fiyatına hangi hizmetler dahildir?", a: "Paketlerimiz LED panel kiralama, lojistik, kurulum-söküm, kontrol sistemi (işlemci) kurulumu, renk kalibrasyonu ve sahada teknik uzman (operatör) desteğini kapsar." },
  { q: "LED ekran kurulumu ne kadar sürer?", a: "Standart 15-30 m² kurulumlar 2–4 saat içinde tamamlanır. Kurulum bittikten sonra test yayını yapılarak sistem hazır hale getirilir." },
  { q: "Yağmurlu havada dış mekan LED ekran kullanılabilir mi?", a: "Evet. Dış mekan (Outdoor) LED ekranlarımız IP65 koruma sınıfına sahip olup yağmur, toz ve güneş ışığı gibi doğa olaylarına karşı %100 dayanıklıdır." },
];

/* ================== Alt Bileşenler ================== */

function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-20 pb-14 md:pb-24 lg:pt-32" aria-label="Sahneva LED Ekran Kiralama">
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

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 tracking-tighter text-white drop-shadow-2xl">
          Profesyonel <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600">
            LED Ekran Kiralama
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light mb-4">
          Konser • Fuar • Lansman • Festival • Kurumsal Etkinlikler
        </p>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
          P2.5'ten P3.9'a kadar geniş ürün yelpazesi. Yüksek çözünürlük ve kusursuz yayın altyapısıyla anahtar teslim görsel çözümler.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={WHATSAPP} target="_blank" className="group px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xl transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] flex items-center justify-center gap-3 w-full sm:w-auto">
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
    <section className="bg-white py-12 border-b border-gray-100 relative z-20">
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
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-gray-900">
            Görsel Teknoloji <span className="text-blue-600">Çözümleri</span>
          </h2>
          <div className="w-24 h-2 rounded-full mb-6 bg-blue-600 mx-auto" />
          <p className="text-xl leading-relaxed text-gray-600">
            Farklı ortam ve izleme mesafelerine özel olarak optimize edilmiş son teknoloji LED ekran konfigürasyonları.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((svc, idx) => (
            <div key={idx} className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-blue-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col">
              <div className="mb-8 transform group-hover:-translate-y-2 transition-transform duration-500 bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center">
                {svc.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tighter text-gray-900">{svc.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg flex-grow">{svc.description}</p>
              <ul className="space-y-3">
                {svc.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle size={18} className="text-blue-600 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
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
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Video <span className="text-blue-600">Galerisi</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed">Saha performansımızı ve teknik kurulum kalitemizi inceleyin.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {VIDEOS.map((video, idx) => (
              <div key={idx} className="space-y-6">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-video relative bg-slate-900">
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

      <section className="py-24 bg-gray-50">
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
    </>
  );
}

function UseCases() {
  return (
    <section className="py-24 bg-neutral-900 text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-white">
            Sektörel <span className="text-blue-500">Uygulamalar</span>
          </h2>
          <div className="w-24 h-2 rounded-full mb-6 bg-blue-500 mx-auto" />
          <p className="text-xl leading-relaxed text-gray-400">
            Hangi etkinlik için hangi LED ekran kurgulanmalı?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {USE_CASES.map((uc, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group flex flex-col items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                {uc.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{uc.text}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Orijinal dosyanızdaki ve Görseldeki SEO Makaleleri Alanı
function Articles() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-16 text-center">
          <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 block">Teknik Rehber</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-gray-900">
            LED Ekran Kiralama <span className="text-blue-600">Teknolojileri</span>
          </h2>
          <div className="w-24 h-2 rounded-full bg-blue-600 mx-auto" />
        </div>

        <div className="space-y-12 text-lg text-gray-700 leading-relaxed">
          {ARTICLES_DATA.map((article, index) => (
            <div key={index} className="bg-gray-50 p-8 md:p-10 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="text-blue-600 flex-shrink-0" size={32} />
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">{article.title}</h3>
              </div>
              <p className="text-gray-600 ml-0 md:ml-12">{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
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
    { href: "/ses-isik-sistemleri", title: "Ses & Işık Sistemleri", icon: <Volume2 size={32} />, desc: "Profesyonel ses ve ışık kiralama" },
    { href: "/sahne-kiralama", title: "Sahne Kiralama", icon: <Layout size={32} />, desc: "Açık ve kapalı alan podyum kurulumu" },
    { href: "/cadir-kiralama", title: "Çadır Kiralama", icon: <Tent size={32} />, desc: "Organizasyon çadırı sistemleri" },
    { href: "/fuar-standi", title: "Fuar Standları", icon: <Briefcase size={32} />, desc: "Özel tasarım stand kurulumu" }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4">Tamamlayıcı Hizmetlerimiz</h2>
          <p className="text-gray-500 text-lg">Etkinliğiniz için ihtiyaç duyabileceğiniz diğer çözümlerimiz.</p>
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

/* ================== Dev SEO Şeması ================== */
function JsonLd() {
  const canonical = `${SITE_URL}/led-ekran-kiralama`;
  
  const webPageSchema = {
    "@type": "WebPage",
    "@id": `${canonical}/#webpage`,
    "url": canonical,
    "name": "LED Ekran Kiralama | P2.9 & P3.9 LED Wall",
    "description": "İç mekan P2.5/P2.9, dış mekan P3.9 LED ekran kiralama. Konser ve fuarlar için yüksek parlaklık ve profesyonel hizmet.",
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "dateModified": PAGE_LAST_MODIFIED
  };

  const serviceNode = {
    "@type": "Service",
    "@id": `${canonical}/#service`,
    "name": "Sahneva LED Ekran Kiralama",
    "serviceType": "Event Technology",
    "description": "P2.5, P2.9 ve P3.9 profesyonel LED ekran kiralama hizmetleri.",
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
    <div className="min-h-screen font-sans scroll-smooth bg-white">
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <JsonLd />
      
      {/* Orijinal dosyanızdaki sıralamaya GÖRE BİREBİR inşa edilmiştir:
        Hero -> Services -> Gallery -> StatsBand -> UseCases -> Articles -> FAQ -> RelatedServices
      */}
      <Hero />
      <Services />
      <Gallery />
      <StatsBand />
      <UseCases />
      <Articles />
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

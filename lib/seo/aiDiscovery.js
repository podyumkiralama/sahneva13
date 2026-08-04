// lib/seo/aiDiscovery.js
import { SITE_URL } from "@/lib/seo/seoConfig";

/**
 * Yapay zekâ tarayıcılarına ve ajanlarına açılan tek kaynak sayfa listesi.
 *
 * Hem /.well-known/webmcp.json hem de /llms.txt bu listeden besleniyor;
 * böylece iki dosya birbirinden kopmuyor. `intent` alanı sayfanın hangi
 * soruya cevap verdiğini anlatır ve iki çıktıda da aynen kullanılır.
 *
 * Dil kuralı: Türkçe sayfaların açıklaması Türkçe, diğer lokallerinki
 * İngilizce yazılır (ajan tarafında ortak dil İngilizce).
 */
export const AI_IMPORTANT_PAGES = Object.freeze([
  /* ---------- Uluslararası giriş sayfaları ---------- */
  {
    path: "/en/event-production-company-turkey",
    title: "Event Production Partner in Turkey",
    language: "en",
    priority: 0.95,
    intent:
      "International companies, European event agencies and global brands looking for a local technical event production partner in Turkey.",
  },
  {
    path: "/turkiyede-etkinlik-cozum-ortagi",
    title: "Türkiye’de Etkinlik Çözüm Ortağı",
    language: "tr",
    priority: 0.95,
    intent:
      "Türkiye’de etkinlik yapacak uluslararası firmalar için yerel teknik prodüksiyon ve saha operasyonu çözümü.",
  },
  {
    path: "/en",
    title: "Sahneva – Event Production and Technical Rental in Turkey",
    language: "en",
    priority: 0.94,
    intent:
      "English entry point covering stage, podium, LED screen, sound-light, truss and tent rental services across Turkey.",
  },

  /* ---------- İngilizce hizmet sayfaları ---------- */
  {
    path: "/en/stage-rental",
    title: "Stage Rental in Turkey",
    language: "en",
    priority: 0.9,
    intent: "Stage rental, podium systems, platforms and event stage infrastructure.",
  },
  {
    path: "/en/podium-rental",
    title: "Podium Rental in Turkey",
    language: "en",
    priority: 0.88,
    intent:
      "Modular podium platforms, runway and concert podium setups with height, load and flooring planning.",
  },
  {
    path: "/en/led-screen-rental",
    title: "LED Screen Rental in Turkey",
    language: "en",
    priority: 0.9,
    intent:
      "Indoor and outdoor LED screen rental, video wall and visual content display systems.",
  },
  {
    path: "/en/sound-light-rental",
    title: "Sound and Light Rental",
    language: "en",
    priority: 0.9,
    intent:
      "Line array sound, microphones, mixers, stage lighting and technical control support.",
  },
  {
    path: "/en/truss-rental",
    title: "Truss Rental",
    language: "en",
    priority: 0.88,
    intent: "Truss, roof, rigging support and structural event setup planning.",
  },
  {
    path: "/en/tent-rental",
    title: "Tent Rental",
    language: "en",
    priority: 0.88,
    intent: "Outdoor event tents, temporary covered areas and field infrastructure.",
  },
  {
    path: "/en/table-chair-rental",
    title: "Table and Chair Rental",
    language: "en",
    priority: 0.82,
    intent:
      "Seating and table furniture rental for banquets, conferences and outdoor event areas.",
  },
  {
    path: "/en/corporate-events",
    title: "Corporate Events",
    language: "en",
    priority: 0.9,
    intent:
      "Corporate conferences, launches, gala events, protocol events and brand experiences.",
  },
  {
    path: "/en/mice-turkey",
    title: "MICE Services in Turkey",
    language: "en",
    priority: 0.86,
    intent:
      "Meetings, incentives, congresses and exhibitions in Turkey with local technical production support.",
  },
  {
    path: "/en/event-production-antalya",
    title: "Event Production in Antalya",
    language: "en",
    priority: 0.84,
    intent:
      "Antalya resort and congress hotel events with local crew, equipment logistics and setup planning.",
  },
  {
    path: "/en/regional-rental",
    title: "Regional Event Rental Coverage",
    language: "en",
    priority: 0.8,
    intent:
      "City-by-city coverage for stage, LED screen, sound-light and tent rental across Turkey.",
  },

  /* ---------- Karar destek ve kanıt sayfaları ---------- */
  {
    path: "/en/services",
    title: "Sahneva Service Capability Guide",
    language: "en",
    priority: 0.9,
    intent:
      "Service capability guidance for stage, podium, LED screen, sound-light AV, truss, tent, corporate event, esports arena and field operation quote preparation.",
  },
  {
    path: "/hizmetler",
    title: "Sahneva Hizmet Kapsamı Rehberi",
    language: "tr",
    priority: 0.9,
    intent:
      "Sahne, podyum, LED ekran, ses-ışık AV, truss, çadır, kurumsal etkinlik, e-spor arena ve saha operasyonu talepleri için hizmet kapsamı ön bilgi sayfası.",
  },
  {
    path: "/en/our-work",
    title: "Sahneva Production References",
    language: "en",
    priority: 0.86,
    intent:
      "Video and photo evidence from completed festival, congress, launch and esports productions.",
  },
  {
    path: "/en/how-we-work",
    title: "How Sahneva Works",
    language: "en",
    priority: 0.82,
    intent:
      "Technical scouting, planning, load-in, rehearsal, event-day operation and dismantling process step by step.",
  },
  {
    path: "/en/faq",
    title: "Sahneva FAQ",
    language: "en",
    priority: 0.82,
    intent:
      "Answers on setup duration, technical requirements, pricing basis, payment and site survey process.",
  },
  {
    path: "/en/glossary",
    title: "Event Production Glossary",
    language: "en",
    priority: 0.8,
    intent:
      "Definitions of stage, rigging, LED, audio and event production terms used in technical riders.",
  },
  {
    path: "/en/blog",
    title: "Sahneva Event Production Insights",
    language: "en",
    priority: 0.78,
    intent:
      "Planning guides, pricing explanations and production case notes for corporate and large-scale events.",
  },

  /* ---------- Türkçe çekirdek hizmet ve karar sayfaları ---------- */
  {
    path: "/kurumsal-organizasyon",
    title: "Kurumsal Organizasyon",
    language: "tr",
    priority: 0.9,
    intent:
      "Lansman, konferans ve gala için sahne, LED ekran, ses-ışık, truss ve teknik rejiyi tek ekipten yönetin. Türkiye geneli kurumsal organizasyon çözümleri.",
  },
  {
    path: "/truss-kiralama",
    title: "Truss Kiralama",
    language: "tr",
    priority: 0.88,
    intent:
      "Kare, üçgen, daire ve kemer dahil truss kiralama ve truss sahne kurulumları. LED ekran, ses-ışık rigging ve sahne portalı için montaj desteği.",
  },
  {
    path: "/defile-podyum-kiralama",
    title: "Defile Podyum Kiralama",
    language: "tr",
    priority: 0.86,
    intent:
      "Defile ve moda podyumu kiralama: T/U tipi, düz runway, LED arka plan, projeksiyon mapping ve tam teknik destek.",
  },
  {
    path: "/konser-icin-podyum-kiralama",
    title: "Konser İçin Podyum Kiralama",
    language: "tr",
    priority: 0.86,
    intent:
      "Konser ve festival podyum kiralama: ana platform, yan kule, FOH alanı ve uçtan uca teknik destek.",
  },
  {
    path: "/podyum-kurulum-fiyatlari",
    title: "Podyum Kurulum Fiyatları",
    language: "tr",
    priority: 0.86,
    intent:
      "Podyum kurulum fiyatları; metrekare, yükseklik, halı kaplama, kumaş giydirme, nakliye ve etkinlik süresine göre değişir.",
  },
  {
    path: "/led-ekran-kiralama-fiyatlari",
    title: "LED Ekran Kiralama Fiyatları",
    language: "tr",
    priority: 0.86,
    intent:
      "P1.9, P2.5, P2.9 ve P3.9 panellerde m² bazlı başlangıç bedelleri; kurulum, reji ve lojistikle netleşir.",
  },
  {
    path: "/dijital-kursu-kiralama",
    title: "Dijital Kürsü Kiralama",
    language: "tr",
    priority: 0.84,
    intent:
      "Konferans, lansman ve kurumsal etkinlikler için LED ekranlı, şeffaf ve özel tasarım sunum kürsüleri; kurulum ve nakliye dahil.",
  },
  {
    path: "/yaptiklarimiz",
    title: "Yaptıklarımız",
    language: "tr",
    priority: 0.84,
    intent:
      "Tamamlanan sahne, LED ekran, podyum, ses, ışık, truss, çadır ve kurumsal organizasyon projelerinin video kayıtları.",
  },
  {
    path: "/sozluk",
    title: "Etkinlik Prodüksiyonu Sözlüğü",
    language: "tr",
    priority: 0.84,
    intent:
      "Sahne, LED ekran, ses, ışık, truss ve çadır projelerinde geçen teknik terimlerin saha karşılıklarıyla açıklaması.",
  },
  {
    path: "/led-ekran-hesaplama",
    title: "LED Ekran Hesaplama Aracı",
    language: "tr",
    priority: 0.8,
    intent:
      "LED ekran ölçüsü, panel tipi, gün sayısı ve Watchout ihtiyacına göre yaklaşık başlangıç bedelini hesaplayan araç.",
  },
  {
    path: "/etkinlik-planlayici",
    title: "Etkinlik Planlayıcı",
    language: "tr",
    priority: 0.8,
    intent:
      "Tür, kişi sayısı, mekân ve süreye göre sahne, LED ekran, ses-ışık ve çadır için önerilen kapsamı ve yaklaşık bütçeyi veren araç.",
  },
  {
    path: "/nasil-calisiyoruz",
    title: "Nasıl Çalışıyoruz",
    language: "tr",
    priority: 0.8,
    intent:
      "İhtiyaç analizi, teklif, teknik keşif, kurulum ve etkinlik sonrası söküm dahil uçtan uca süreç.",
  },
  {
    path: "/bolgesel-kiralama",
    title: "Bölgesel Kiralama",
    language: "tr",
    priority: 0.8,
    intent:
      "Türkiye genelinde LED ekran, truss, sahne/podyum ve ses-ışık kiralama; şehir bazlı kurulum planlaması.",
  },
  {
    path: "/blog",
    title: "Sahneva Blog",
    language: "tr",
    priority: 0.78,
    intent:
      "Kurumsal etkinlik yönetimi, sahne kiralama, LED ekran teknolojileri ve ses-ışık sistemleri üzerine rehberler.",
  },

  /* ---------- İngilizce ek sayfalar ---------- */
  {
    path: "/en/concert-podium-rental",
    title: "Concert Podium Rental",
    language: "en",
    priority: 0.84,
    intent:
      "Concert and festival podium rental with main platforms, side towers, FOH areas and end-to-end technical support across Turkey.",
  },
  {
    path: "/en/runway-podium-rental",
    title: "Runway Podium Rental",
    language: "en",
    priority: 0.84,
    intent:
      "Runway and fashion podium rental: T/U-shape, straight runway, LED backdrop, projection mapping and full technical support.",
  },
  {
    path: "/en/podium-rental-prices",
    title: "Podium Rental Prices",
    language: "en",
    priority: 0.84,
    intent:
      "Podium rental prices by m² including carpet, skirt, transport, setup and dismantling.",
  },
  {
    path: "/en/projects",
    title: "Sahneva Projects",
    language: "en",
    priority: 0.84,
    intent:
      "Completed concert, corporate event and activation projects with stage, podium, LED screen and sound-lighting references.",
  },
  {
    path: "/en/about",
    title: "About Sahneva",
    language: "en",
    priority: 0.8,
    intent:
      "Over 10 years of nationwide stage rentals, LED video walls, sound and lighting systems and full-scale event production.",
  },

  /* ---------- Rusça ---------- */
  {
    path: "/ru",
    title: "Sahneva – Event Production in Turkey (Russian)",
    language: "ru",
    priority: 0.75,
    intent:
      "Russian entry point for stage, LED screen, sound-light and tent rental in Turkey.",
  },
  {
    path: "/ru/event-production-company-turkey",
    title: "Event Production Partner in Turkey (Russian)",
    language: "ru",
    priority: 0.74,
    intent:
      "Russian page for companies looking for a local technical event production partner in Turkey.",
  },
  {
    path: "/ru/services",
    title: "Sahneva Services (Russian)",
    language: "ru",
    priority: 0.72,
    intent: "Russian service overview for event production and technical rental in Turkey.",
  },
  {
    path: "/ru/stage-rental",
    title: "Stage Rental (Russian)",
    language: "ru",
    priority: 0.7,
    intent: "Russian stage and podium rental page for events in Turkey.",
  },
  {
    path: "/ru/led-screen-rental",
    title: "LED Screen Rental (Russian)",
    language: "ru",
    priority: 0.7,
    intent: "Russian indoor and outdoor LED screen rental page for events in Turkey.",
  },
  {
    path: "/ru/sound-light-rental",
    title: "Sound and Light Rental (Russian)",
    language: "ru",
    priority: 0.7,
    intent: "Russian sound, lighting and AV rental page for events in Turkey.",
  },
  {
    path: "/ru/tent-rental",
    title: "Tent Rental (Russian)",
    language: "ru",
    priority: 0.7,
    intent: "Russian event tent and outdoor infrastructure rental page for Turkey.",
  },
  {
    path: "/ru/corporate-events",
    title: "Corporate Events (Russian)",
    language: "ru",
    priority: 0.7,
    intent: "Russian corporate event and protocol production page for Turkey.",
  },
  {
    path: "/ru/our-work",
    title: "Sahneva References (Russian)",
    language: "ru",
    priority: 0.68,
    intent: "Russian page with video evidence from completed Sahneva productions.",
  },
  {
    path: "/ru/projects",
    title: "Sahneva Projects (Russian)",
    language: "ru",
    priority: 0.68,
    intent: "Russian project references for stage, LED screen and event production in Turkey.",
  },
  {
    path: "/ru/about",
    title: "About Sahneva (Russian)",
    language: "ru",
    priority: 0.66,
    intent: "Russian company profile: team, technical infrastructure and production experience.",
  },
  {
    path: "/ru/contact",
    title: "Contact Sahneva Russian",
    language: "ru",
    priority: 0.72,
    intent:
      "Russian contact page for international event production quote requests in Turkey.",
  },

  /* ---------- Çince ---------- */
  {
    path: "/zh",
    title: "Sahneva – Event Production in Turkey (Chinese)",
    language: "zh",
    priority: 0.75,
    intent:
      "Chinese entry point for stage, LED screen, sound-light and tent rental in Turkey.",
  },
  {
    path: "/zh/services",
    title: "Sahneva Services (Chinese)",
    language: "zh",
    priority: 0.72,
    intent: "Chinese service overview for event production and technical rental in Turkey.",
  },
  {
    path: "/zh/stage-rental",
    title: "Stage Rental (Chinese)",
    language: "zh",
    priority: 0.7,
    intent: "Chinese stage and podium rental page for events in Turkey.",
  },
  {
    path: "/zh/led-screen-rental",
    title: "LED Screen Rental (Chinese)",
    language: "zh",
    priority: 0.7,
    intent: "Chinese indoor and outdoor LED screen rental page for events in Turkey.",
  },
  {
    path: "/zh/sound-light-rental",
    title: "Sound and Light Rental (Chinese)",
    language: "zh",
    priority: 0.7,
    intent: "Chinese sound, lighting and AV rental page for events in Turkey.",
  },
  {
    path: "/zh/tent-rental",
    title: "Tent Rental (Chinese)",
    language: "zh",
    priority: 0.7,
    intent: "Chinese event tent and outdoor infrastructure rental page for Turkey.",
  },
  {
    path: "/zh/corporate-events",
    title: "Corporate Events (Chinese)",
    language: "zh",
    priority: 0.7,
    intent: "Chinese corporate event and protocol production page for Turkey.",
  },
  {
    path: "/zh/our-work",
    title: "Sahneva References (Chinese)",
    language: "zh",
    priority: 0.68,
    intent: "Chinese page with video evidence from completed Sahneva productions.",
  },
  {
    path: "/zh/projects",
    title: "Sahneva Projects (Chinese)",
    language: "zh",
    priority: 0.68,
    intent: "Chinese project references for stage, LED screen and event production in Turkey.",
  },
  {
    path: "/zh/about",
    title: "About Sahneva (Chinese)",
    language: "zh",
    priority: 0.66,
    intent: "Chinese company profile: team, technical infrastructure and production experience.",
  },
  {
    path: "/zh/contact",
    title: "Contact Sahneva Chinese",
    language: "zh",
    priority: 0.72,
    intent:
      "Chinese contact page for international event production quote requests in Turkey.",
  },

  /* ---------- Almanca ---------- */
  {
    path: "/de",
    title: "Sahneva – Event Production in Turkey (German)",
    language: "de",
    priority: 0.75,
    intent:
      "German entry point for stage, LED wall, sound-light and tent rental in Turkey, aimed at DACH agencies and corporate clients.",
  },
  {
    path: "/de/leistungen",
    title: "Sahneva Services (German)",
    language: "de",
    priority: 0.72,
    intent: "German service overview for event production and technical rental in Turkey.",
  },
  {
    path: "/de/buehne-mieten",
    title: "Stage Rental (German)",
    language: "de",
    priority: 0.7,
    intent: "German stage and podium rental page for events in Turkey.",
  },
  {
    path: "/de/led-wand-mieten",
    title: "LED Screen Rental (German)",
    language: "de",
    priority: 0.7,
    intent: "German indoor and outdoor LED wall rental page for events in Turkey.",
  },
  {
    path: "/de/ton-und-lichttechnik",
    title: "Sound and Light Rental (German)",
    language: "de",
    priority: 0.7,
    intent: "German sound, lighting and truss rental page for events in Turkey.",
  },
  {
    path: "/de/zelt-mieten",
    title: "Tent Rental (German)",
    language: "de",
    priority: 0.7,
    intent: "German event tent and outdoor infrastructure rental page for Turkey.",
  },
  {
    path: "/de/firmenevents",
    title: "Corporate Events (German)",
    language: "de",
    priority: 0.7,
    intent: "German corporate event and conference production page for Turkey.",
  },
  {
    path: "/de/referenzen",
    title: "Sahneva References (German)",
    language: "de",
    priority: 0.68,
    intent: "German page with video evidence from completed Sahneva productions.",
  },
  {
    path: "/de/projekte",
    title: "Sahneva Projects (German)",
    language: "de",
    priority: 0.68,
    intent: "German project references for stage, LED wall and event production in Turkey.",
  },
  {
    path: "/de/ueber-uns",
    title: "About Sahneva (German)",
    language: "de",
    priority: 0.66,
    intent: "German company profile: team, technical infrastructure and production experience.",
  },
  {
    path: "/de/kontakt",
    title: "Contact Sahneva German",
    language: "de",
    priority: 0.72,
    intent:
      "German contact page for DACH agencies and companies requesting technical event production quotes in Turkey.",
  },

  /* ---------- Arapça ---------- */
  {
    path: "/ar",
    title: "Sahneva – Event Production in Turkey (Arabic)",
    language: "ar",
    priority: 0.75,
    intent:
      "Arabic entry point for stage, LED screen, sound-light and tent rental in Turkey.",
  },
  {
    path: "/ar/event-production-company-turkey",
    title: "Event Production Partner in Turkey (Arabic)",
    language: "ar",
    priority: 0.74,
    intent:
      "Arabic page for Gulf-region companies looking for a local technical event production partner in Turkey.",
  },
  {
    path: "/ar/services",
    title: "Sahneva Services (Arabic)",
    language: "ar",
    priority: 0.72,
    intent: "Arabic service overview for event production and technical rental in Turkey.",
  },
  {
    path: "/ar/our-work",
    title: "Sahneva References (Arabic)",
    language: "ar",
    priority: 0.68,
    intent: "Arabic page with video evidence from completed Sahneva productions.",
  },
  {
    path: "/ar/projects",
    title: "Sahneva Projects (Arabic)",
    language: "ar",
    priority: 0.68,
    intent: "Arabic project references for stage, LED screen and event production in Turkey.",
  },
  {
    path: "/ar/about",
    title: "About Sahneva (Arabic)",
    language: "ar",
    priority: 0.66,
    intent: "Arabic company profile: team, technical infrastructure and production experience.",
  },
  {
    path: "/ar/contact",
    title: "Contact Sahneva Arabic",
    language: "ar",
    priority: 0.72,
    intent:
      "Arabic contact page for international event production quote requests in Turkey.",
  },

  /* ---------- İletişim ---------- */
  {
    path: "/en/contact",
    title: "Contact Sahneva",
    language: "en",
    priority: 0.9,
    intent: "Send an event brief, RFP, technical rider or quote request.",
  },
]);

/** WebMCP manifestindeki `importantPages` biçimi. */
export function getWebMcpImportantPages() {
  return AI_IMPORTANT_PAGES.map(({ title, path, language, intent }) => ({
    title,
    url: `${SITE_URL}${path}`,
    language,
    intent,
  }));
}

/**
 * llms.txt girdisi biçimi. Aynı yol llms.txt'te zaten tanımlıysa (örn.
 * /hizmetler) rota tarafındaki tekilleştirme ilk tanımı korur.
 */
export function getLlmsTxtLocaleEntries() {
  return AI_IMPORTANT_PAGES.map(({ title, path, language, intent, priority }) => ({
    path,
    title,
    summary: intent,
    priority,
    category: `page-${language}`,
    keywords: `sahneva,${language}`,
  }));
}

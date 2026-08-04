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
    path: "/ru/services",
    title: "Sahneva Services (Russian)",
    language: "ru",
    priority: 0.72,
    intent: "Russian service overview for event production and technical rental in Turkey.",
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
    path: "/zh/contact",
    title: "Contact Sahneva Chinese",
    language: "zh",
    priority: 0.72,
    intent:
      "Chinese contact page for international event production quote requests in Turkey.",
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

// app/robots.js
import { SITE_URL } from "@/lib/seo/seoConfig";

/**
 * Kullanıcı sorusuna canlı cevap üretirken sayfa çeken botlar.
 * Yapay zekâ yanıtlarındaki alıntı (citation) bu grup üzerinden geliyor;
 * bu yüzden `llms.txt` ve `webmcp.json` gibi ajanlara açılan dosyaları
 * açıkça izin listesine alan ayrı bir grupta tutuluyorlar.
 */
const AI_ANSWER_AGENTS = [
  // OpenAI - ChatGPT arama, kullanıcı tetikli sayfa çekme ve reklam doğrulama
  "OAI-SearchBot",
  "ChatGPT-User",
  "OAI-AdsBot",
  // Anthropic - Claude arama ve kullanıcı tetikli sayfa çekme
  "Claude-SearchBot",
  "Claude-User",
  // Perplexity - dizin botu ve kullanıcı tetikli çekme
  "PerplexityBot",
  "Perplexity-User",
  // Diğer cevap motorları
  "Applebot",
  "DuckAssistBot",
  "Amazonbot",
  "MistralAI-User",
  "YouBot",
];

/**
 * Model eğitimi ve temellendirme (grounding) amaçlı tarayıcılar.
 * Sahneva'nın marka ve hizmet bilgisinin model belleğine girmesi istendiği
 * için açık bırakılıyor; engellenirse marka adı yanıtlarda geçmez.
 */
const AI_TRAINING_AGENTS = [
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Google-CloudVertexBot",
  "Applebot-Extended",
  "meta-externalagent",
  "meta-externalfetcher",
  "CCBot",
  "cohere-ai",
];

export default function robots() {
  const disallow = ["/api/", "/private/", "/_next-live/"];
  const allow = ["/", "/llms.txt", "/.well-known/webmcp.json"];

  return {
    rules: [
      // Crawl-delay bilinçli olarak yok: Google bu kuralı zaten yok sayıp
      // Search Console'da uyarı basıyor, uyan taraf (Bing) içinse site
      // tamamen statik üretildiğinden yavaşlatılacak bir yük bulunmuyor.
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      {
        userAgent: AI_ANSWER_AGENTS,
        allow,
        disallow,
      },
      {
        userAgent: AI_TRAINING_AGENTS,
        allow,
        disallow,
      },
    ],

    sitemap: [`${SITE_URL}/sitemap.xml`],
  };
}

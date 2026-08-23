// app/robots.js
import { SITE_URL } from "@/lib/seo/seoConfig";

/**
 * Arama, kullanıcı tarafından tetiklenen erişim ve ürün doğrulama botları.
 * Bu kurallar yalnızca robots.txt tarama tercihlerini bildirir; WAF/CDN
 * erişimi, indekslenme veya yapay zekâ yanıtlarında alıntılanma garantisi vermez.
 */
const AI_ACCESS_AGENTS = [
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
 * Sağlayıcıların model geliştirme/eğitim veya genişletilmiş AI kullanımı için
 * belgelediği tarayıcılar. İzin vermek içeriği taranabilir kılar; eğitime
 * alınma, model belleğinde tutulma veya yanıtlarda görünme garantisi vermez.
 */
const AI_TRAINING_AGENTS = [
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "Google-CloudVertexBot",
  "Applebot-Extended",
  "meta-externalagent",
  "meta-externalfetcher",
  "CCBot",
  "cohere-ai",
];

export default function robots() {
  const disallow = ["/api/", "/private/", "/_next-live/", "/yonetim/"];
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
        userAgent: AI_ACCESS_AGENTS,
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

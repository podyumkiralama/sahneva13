// app/robots.js
import { SITE_URL } from "@/lib/seo/seoConfig";

export default function robots() {
   const disallow = ["/api/", "/private/"];

  return {
    rules: [
      {
        userAgent: "*",
        crawlDelay: 1,
        allow: "/",
        disallow,
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-SearchBot",
          "Google-Extended",
        ],
        allow: ["/", "/llms.txt"],
        disallow,
      },
    ],

    sitemap: [`${SITE_URL}/sitemap.xml`],
  };
}

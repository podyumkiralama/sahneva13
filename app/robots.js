// app/robots.js
import { SITE_URL } from "@/lib/seo/seoConfig";

export default function robots() {
  const host = SITE_URL;
  const disallow = ["/api/", "/private/", "/search"];

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

    sitemap: [`${host}/sitemap.xml`],
  };
}

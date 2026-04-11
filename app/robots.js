// app/robots.js

export default function robots() {
  const host = "https://www.sahneva.com";
  const disallow = ["/api/", "/private/", "/_next/", "/search"];

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

    sitemap: [
      `${host}/sitemap.xml`,
      `${host}/sitemap-pages.xml`,
      `${host}/sitemap-blog.xml`,
      `${host}/sitemap-en.xml`,
      `${host}/sitemap-en-blog.xml`,
      `${host}/sitemap-ar.xml`,
      `${host}/sitemap-projects.xml`,
    ],
  };
}

// app/robots.js

export default function robots() {
  const host = "https://www.sahneva.com";
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

    sitemap: [`${host}/sitemap.xml`],
  };
}

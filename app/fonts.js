// app/fonts.js
import localFont from "next/font/local";

export const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter/InterVariable.woff2",
      style: "normal",
      weight: "100 900",
    },
  ],
  // Keep the first render stable on slow connections. `swap` can replace the
  // fallback several seconds later and move a text-based LCP to that late
  // repaint; `optional` keeps the cold-load paint as the final paint while the
  // cached font is still used on following navigations.
  display: "optional",
  // Do not compete with the hero's CSS and media on the first navigation. The
  // optional face is fetched when needed and remains cached for later routes.
  preload: false,
  variable: "--font-inter",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

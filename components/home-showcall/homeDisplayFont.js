import { Barlow_Condensed } from "next/font/google";

export const homeDisplayFont = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "800"],
  display: "swap",
  preload: true,
  variable: "--font-barlow-condensed",
  fallback: ["Arial Narrow", "Helvetica Neue", "Arial", "sans-serif"],
});

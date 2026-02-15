import { NextResponse } from "next/server";

import {
  SITE,
  getArPageEntries,
  getBlogEntries,
  getEnPageEntries,
  getPageEntries,
  getProjectEntries,
} from "@/lib/sitemap/data";
import { buildSitemapIndex, getLatestLastMod } from "@/lib/sitemap/xml";

const SITEMAP_FEEDS = Object.freeze([
  { path: "/sitemap-pages.xml", getEntries: getPageEntries },
  { path: "/sitemap-en.xml", getEntries: getEnPageEntries },
  { path: "/sitemap-ar.xml", getEntries: getArPageEntries },
  { path: "/sitemap-blog.xml", getEntries: getBlogEntries },
  { path: "/sitemap-projects.xml", getEntries: getProjectEntries },
]);

export function GET() {
  const items = SITEMAP_FEEDS.map(({ path, getEntries }) => {
    const entries = getEntries();
    if (!entries.length) return null;

    return {
      loc: `${SITE}${path}`,
      lastMod: getLatestLastMod(entries),
    };
  }).filter(Boolean);

  const xml = buildSitemapIndex(items);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

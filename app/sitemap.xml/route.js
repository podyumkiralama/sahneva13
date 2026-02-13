import { NextResponse } from "next/server";

import {
  SITE,
  getBlogEntries,
  getPageEntries,
  getProjectEntries,
} from "@/lib/sitemap/data";
import { buildSitemapIndex, getLatestLastMod } from "@/lib/sitemap/xml";

const SITEMAP_FEEDS = Object.freeze([
  { path: "/sitemap-pages.xml", getEntries: getPageEntries },
  { path: "/sitemap-blog.xml", getEntries: getBlogEntries },
  { path: "/sitemap-projects.xml", getEntries: getProjectEntries },
]);

export function GET() {
  const items = SITEMAP_FEEDS.map(({ path, getEntries }) => {
    const entries = getEntries();
    return {
      loc: `${SITE}${path}`,
      lastMod: getLatestLastMod(entries),
    };
  });

  const xml = buildSitemapIndex(items);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

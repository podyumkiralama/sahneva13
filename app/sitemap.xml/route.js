import { NextResponse } from "next/server";

import { SITE, getBlogEntries, getPageEntries, getProjectEntries } from "@/lib/sitemap/data";
import { buildSitemapIndex, getLatestLastMod } from "@/lib/sitemap/xml";

export function GET() {
  const pages = getPageEntries();
  const blogs = getBlogEntries();
  const projects = getProjectEntries();

  const items = [
    { loc: `${SITE}/sitemap-pages.xml`, lastMod: getLatestLastMod(pages) },
    { loc: `${SITE}/sitemap-blog.xml`, lastMod: getLatestLastMod(blogs) },
    { loc: `${SITE}/sitemap-projects.xml`, lastMod: getLatestLastMod(projects) },
  ];

  const xml = buildSitemapIndex(items);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

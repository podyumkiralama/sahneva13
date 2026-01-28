import { NextResponse } from "next/server";

import { SITE, getBlogEntries, getPageEntries, getProjectEntries, getServiceEntries } from "@/lib/sitemap/data";
import { buildSitemapIndex, getLatestLastMod } from "@/lib/sitemap/xml";

export function GET() {
  const pages = getPageEntries();
  const services = getServiceEntries();
  const blogs = getBlogEntries();
  const projects = getProjectEntries();

  const items = [
    { loc: `${SITE}/sitemap-pages.xml`, lastMod: getLatestLastMod(pages) },
    { loc: `${SITE}/sitemap-services.xml`, lastMod: getLatestLastMod(services) },
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

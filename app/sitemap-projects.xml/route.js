import { NextResponse } from "next/server";

import { getProjectEntries } from "@/lib/sitemap/data";
import { buildUrlSet } from "@/lib/sitemap/xml";

export function GET() {
  const entries = getProjectEntries();
  const xml = buildUrlSet(entries);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

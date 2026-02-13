import { NextResponse } from "next/server";

import { getEnPageEntries } from "@/lib/sitemap/data";
import { buildUrlSet } from "@/lib/sitemap/xml";

export function GET() {
  const entries = getEnPageEntries();
  const xml = buildUrlSet(entries);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

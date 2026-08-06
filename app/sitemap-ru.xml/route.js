import { NextResponse } from "next/server";

import { getRuPageEntries } from "@/lib/sitemap/data";
import { buildUrlSet } from "@/lib/sitemap/xml";

// Cikti tamamen yerel veriden uretiliyor ve istege bagli degil; deploy
// disinda degismez. Segment config olmadan route handler her istekte yeniden
// render ediliyordu.
export const dynamic = "force-static";

export function GET() {
  const entries = getRuPageEntries();
  const xml = buildUrlSet(entries);

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

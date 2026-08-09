// Panel: sohbet listesi.

import { isStoreConfigured } from "@/lib/support/config";
import { isAdminRequest, serviceUnavailable, unauthorized } from "@/lib/support/guard";
import { listConversations } from "@/lib/support/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdminRequest())) return unauthorized();
  if (!isStoreConfigured()) return serviceUnavailable();

  try {
    // Özet kayıtları liste görünümünün alanlarıyla sınırlı; jeton özeti
    // taşımıyorlar.
    return Response.json({ ok: true, threads: await listConversations() });
  } catch {
    return Response.json({ ok: false, error: "store_error" }, { status: 502 });
  }
}

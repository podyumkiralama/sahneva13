// Panel: sohbet listesi.

import { isStoreConfigured } from "@/lib/support/config";
import { isAdminRequest, serviceUnavailable, unauthorized } from "@/lib/support/guard";
import { listConversations, toPublicConversation } from "@/lib/support/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdminRequest())) return unauthorized();
  if (!isStoreConfigured()) return serviceUnavailable();

  try {
    const conversations = await listConversations();
    const threads = conversations.map(toPublicConversation);

    return Response.json({ ok: true, threads });
  } catch {
    return Response.json({ ok: false, error: "store_error" }, { status: 502 });
  }
}

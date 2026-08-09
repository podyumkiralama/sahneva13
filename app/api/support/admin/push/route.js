// Panel: telefona bildirim aboneliği.

import { getVapidCredentials, isStoreConfigured } from "@/lib/support/config";
import { isAdminRequest, serviceUnavailable, unauthorized } from "@/lib/support/guard";
import { notifyAgents } from "@/lib/support/push";
import { deletePushSubscription, savePushSubscription } from "@/lib/support/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isValidSubscription(subscription) {
  return Boolean(
    subscription &&
      typeof subscription.endpoint === "string" &&
      subscription.endpoint.startsWith("https://") &&
      subscription.keys?.p256dh &&
      subscription.keys?.auth,
  );
}

export async function GET() {
  if (!(await isAdminRequest())) return unauthorized();

  const credentials = getVapidCredentials();

  return Response.json({
    ok: true,
    configured: Boolean(credentials) && isStoreConfigured(),
    publicKey: credentials?.publicKey ?? null,
  });
}

export async function POST(request) {
  if (!(await isAdminRequest())) return unauthorized();
  if (!isStoreConfigured() || !getVapidCredentials()) return serviceUnavailable();

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Kurulumun gerçekten çalıştığını telefondan doğrulamak için deneme bildirimi.
  if (payload?.action === "test") {
    const result = await notifyAgents({
      title: "Sahneva canlı destek",
      body: "Bildirim kurulumu çalışıyor. Yeni mesajlar bu şekilde düşecek.",
      url: "/yonetim/destek",
      tag: "sahneva-support-test",
    });

    return Response.json({ ok: true, ...result });
  }

  if (!isValidSubscription(payload?.subscription)) {
    return Response.json({ ok: false, error: "invalid_subscription" }, { status: 400 });
  }

  try {
    await savePushSubscription(payload.subscription);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "store_error" }, { status: 502 });
  }
}

export async function DELETE(request) {
  if (!(await isAdminRequest())) return unauthorized();
  if (!isStoreConfigured()) return serviceUnavailable();

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const endpoint = typeof payload?.endpoint === "string" ? payload.endpoint : "";
  if (!endpoint) {
    return Response.json({ ok: false, error: "endpoint_required" }, { status: 400 });
  }

  try {
    await deletePushSubscription(endpoint);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "store_error" }, { status: 502 });
  }
}

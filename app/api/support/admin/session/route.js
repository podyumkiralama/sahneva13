// Yönetim paneli girişi.

import { cookies } from "next/headers";

import { isAdminConfigured, isStoreConfigured } from "@/lib/support/config";
import { isAdminRequest, serviceUnavailable } from "@/lib/support/guard";
import { SESSION_COOKIE, createSessionValue, verifyAdminPassword } from "@/lib/support/session";
import { consumeRateLimit } from "@/lib/support/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "";
}

export async function GET() {
  return Response.json({
    ok: true,
    authenticated: await isAdminRequest(),
    configured: isAdminConfigured() && isStoreConfigured(),
  });
}

export async function POST(request) {
  if (!isAdminConfigured()) return serviceUnavailable();

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Deneme sınırı Redis'e bağlı; depo yoksa giriş yine çalışsın diye
  // sınırlama sessizce atlanıyor.
  if (isStoreConfigured()) {
    try {
      const allowed = await consumeRateLimit("login", getClientIp(request), 10);
      if (!allowed) {
        return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
      }
    } catch {
      // Depo hatası girişi engellememeli.
    }
  }

  if (!verifyAdminPassword(payload?.password)) {
    return Response.json({ ok: false, error: "invalid_password" }, { status: 401 });
  }

  const store = await cookies();
  store.set(SESSION_COOKIE.name, createSessionValue(), SESSION_COOKIE.options);

  return Response.json({ ok: true });
}

export async function DELETE() {
  const store = await cookies();
  store.set(SESSION_COOKIE.name, "", { ...SESSION_COOKIE.options, maxAge: 0 });

  return Response.json({ ok: true });
}

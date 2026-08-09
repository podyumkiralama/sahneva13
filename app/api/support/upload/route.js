// Ziyaretçinin dosyayı doğrudan depoya yüklemesi için imzalı adres üretir.
//
// Dosya bu fonksiyondan geçmiyor: yalnızca tek bir yola, tek bir içerik
// türüne ve boyuta kilitli, 10 dakikalık bir yükleme izni veriliyor.

import { SUPPORT_LIMITS, isStoreConfigured } from "@/lib/support/config";
import {
  ALLOWED_FILE_TYPES,
  MAX_FILE_SIZE,
  buildPathname,
  createUploadUrl,
  isFilesConfigured,
} from "@/lib/support/files";
import { authorizeVisitor, consumeRateLimit } from "@/lib/support/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function fail(error, status = 400) {
  return Response.json({ ok: false, error }, { status });
}

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "";
}

export async function POST(request) {
  if (!isStoreConfigured() || !isFilesConfigured()) {
    return fail("not_configured", 503);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return fail("invalid_json");
  }

  const id = typeof payload?.id === "string" ? payload.id.trim() : "";
  const token = typeof payload?.token === "string" ? payload.token.trim() : "";
  const name = typeof payload?.name === "string" ? payload.name : "";
  const type = typeof payload?.type === "string" ? payload.type : "";
  const size = Number(payload?.size);

  if (!ALLOWED_FILE_TYPES.includes(type)) return fail("type_not_allowed");
  if (!Number.isFinite(size) || size <= 0 || size > MAX_FILE_SIZE) {
    return fail("file_too_large");
  }

  try {
    const authorized = await authorizeVisitor(id, token);
    if (!authorized) return fail("unauthorized", 401);

    // Dosya yükleme mesaj sınırından ayrı sayılıyor; bir sohbet üzerinden
    // depo doldurulmasın.
    const allowed = await consumeRateLimit(
      "file",
      getClientIp(request),
      SUPPORT_LIMITS.filesPerHour,
    );
    if (!allowed) return fail("rate_limited", 429);

    const pathname = buildPathname(authorized.conversation.id, name);
    const { uploadUrl } = await createUploadUrl({ pathname, contentType: type, size });

    return Response.json({ ok: true, uploadUrl, pathname });
  } catch {
    return fail("upload_unavailable", 502);
  }
}

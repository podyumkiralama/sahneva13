// Günlük temizlik: saklama süresini geçmiş dosyaları siler.
//
// Vercel Blob'un kendi zaman aşımı yok, bu yüzden silme işi cron ile
// yapılıyor (vercel.json). Mesajların kendisi Redis TTL'i ile zaten düşüyor;
// burada silinen yalnızca dosyalar.

import { deleteExpiredFiles, getRetentionDays, isFilesConfigured } from "@/lib/support/files";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

/** Cron çağrısı Vercel tarafından `Authorization: Bearer $CRON_SECRET` ile gelir. */
function isAuthorized(request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;

  return request.headers.get("authorization") === `Bearer ${secret}`;
}

export async function GET(request) {
  if (!isAuthorized(request)) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  if (!isFilesConfigured()) {
    return Response.json({ ok: true, skipped: "files_not_configured" });
  }

  try {
    const result = await deleteExpiredFiles();
    return Response.json({ ok: true, retentionDays: getRetentionDays(), ...result });
  } catch {
    return Response.json({ ok: false, error: "cleanup_failed" }, { status: 502 });
  }
}

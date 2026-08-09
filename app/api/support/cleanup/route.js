// Günlük temizlik: saklama süresini geçmiş dosyaları siler.
//
// Vercel Blob'un kendi zaman aşımı yok, bu yüzden silme işi cron ile
// yapılıyor (vercel.json). Mesajların kendisi Redis TTL'i ile zaten düşüyor;
// burada silinen yalnızca dosyalar.

import { isStoreConfigured } from "@/lib/support/config";
import { deleteExpiredFiles, getRetentionDays, isFilesConfigured } from "@/lib/support/files";
import { consumeRateLimit } from "@/lib/support/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * `CRON_SECRET` tanımlıysa katı doğrulama: Vercel cron çağrısını
 * `Authorization: Bearer $CRON_SECRET` ile gönderir.
 *
 * Tanımlı değilse uç açık çalışır. Bunun sakıncalı olmamasının nedeni
 * işlemin kapsamı: yalnızca saklama süresini çoktan geçmiş dosyalar
 * siliniyor, yani dışarıdan bir çağrı zamanlanmış çalıştırmadan farklı
 * bir sonuç üretmiyor. Yine de depoya gereksiz yük binmesin diye saatte
 * bir kez çalışacak şekilde sınırlanıyor.
 */
async function isAuthorized(request) {
  const secret = process.env.CRON_SECRET;

  if (secret) {
    return request.headers.get("authorization") === `Bearer ${secret}`;
  }

  if (!isStoreConfigured()) return false;

  try {
    return await consumeRateLimit("cleanup", "global", 1);
  } catch {
    return false;
  }
}

export async function GET(request) {
  if (!(await isAuthorized(request))) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  if (!isFilesConfigured()) {
    return Response.json({ ok: true, skipped: "files_not_configured" });
  }

  // Süreli silme kapalıyken bu uç hiçbir şeye dokunmuyor. Dosyalar sohbet
  // silinene kadar duruyor.
  if (getRetentionDays() === 0) {
    return Response.json({ ok: true, skipped: "retention_disabled" });
  }

  try {
    const result = await deleteExpiredFiles();
    return Response.json({ ok: true, retentionDays: getRetentionDays(), ...result });
  } catch {
    return Response.json({ ok: false, error: "cleanup_failed" }, { status: 502 });
  }
}

// Panel: sohbete eklenmiş dosyayı okur.
//
// Dosya depoda "private" duruyor; adresi doğrudan açılamıyor. Okuma yalnızca
// yönetici oturumu doğrulandıktan sonra, bu uç üzerinden yapılıyor.

import { isAdminRequest, serviceUnavailable, unauthorized } from "@/lib/support/guard";
import { isFilesConfigured, readFile, sanitizeFileName } from "@/lib/support/files";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  if (!(await isAdminRequest())) return unauthorized();
  if (!isFilesConfigured()) return serviceUnavailable();

  const params = new URL(request.url).searchParams;
  const pathname = params.get("path") ?? "";
  const downloadName = sanitizeFileName(params.get("name") ?? "dosya");

  // Yol yalnızca destek klasörünün altında olabilir.
  if (!pathname.startsWith("destek/") || pathname.includes("..")) {
    return Response.json({ ok: false, error: "invalid_path" }, { status: 400 });
  }

  try {
    const result = await readFile(pathname);

    if (result?.statusCode !== 200) {
      return Response.json({ ok: false, error: "not_found" }, { status: 404 });
    }

    return new Response(result.stream, {
      headers: {
        "Content-Type": result.blob.contentType ?? "application/octet-stream",
        "Content-Disposition": `attachment; filename="${downloadName}"`,
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return Response.json({ ok: false, error: "read_failed" }, { status: 502 });
  }
}

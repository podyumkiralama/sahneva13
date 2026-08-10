// Ziyaretçinin, kendisine gönderilen dosyayı indirmesi.
//
// Depodaki kayıt "private"; okuma yalnızca buradan yapılıyor. İki kapı var:
// sohbet jetonu doğrulanıyor ve istenen dosyanın o cihazın görebildiği
// mesajlar arasında bulunması şart. Böylece sohbete sonradan bağlanan bir
// cihaz, katılmadan önce paylaşılmış dosyalara erişemiyor.

import { isFilesConfigured, readFile, sanitizeFileName } from "@/lib/support/files";
import { conversationPrefix } from "@/lib/support/files";
import { authorizeVisitor, getMessages } from "@/lib/support/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function fail(error, status = 400) {
  return Response.json({ ok: false, error }, { status });
}

export async function GET(request) {
  if (!isFilesConfigured()) return fail("not_configured", 503);

  const id = request.headers.get("x-support-conversation")?.trim() ?? "";
  const token = request.headers.get("x-support-token")?.trim() ?? "";
  const pathname = new URL(request.url).searchParams.get("path") ?? "";

  if (!id || !token) return fail("unauthorized", 401);

  try {
    const authorized = await authorizeVisitor(id, token);
    if (!authorized) return fail("unauthorized", 401);

    const { conversation, floor } = authorized;

    if (!pathname.startsWith(conversationPrefix(conversation.id)) || pathname.includes("..")) {
      return fail("invalid_path");
    }

    // Dosya, bu cihazın görebildiği mesajlardan birine iliştirilmiş olmalı.
    const { messages } = await getMessages(conversation.id, floor);
    const attachment = messages.find((entry) => entry.file?.path === pathname)?.file;

    if (!attachment) return fail("not_found", 404);

    const result = await readFile(pathname);
    if (result?.statusCode !== 200) return fail("not_found", 404);

    return new Response(result.stream, {
      headers: {
        "Content-Type": result.blob.contentType ?? "application/octet-stream",
        "Content-Disposition": `attachment; filename="${sanitizeFileName(attachment.name)}"`,
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return fail("read_failed", 502);
  }
}

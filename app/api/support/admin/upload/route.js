// Panel: yöneticinin sohbete dosya eklemesi için imzalı yükleme adresi.
//
// Ziyaretçi tarafındaki uçla aynı mantık; tek farkı yetkinin sohbet
// jetonundan değil yönetici oturumundan gelmesi.

import { isStoreConfigured } from "@/lib/support/config";
import {
  ALLOWED_FILE_TYPES,
  MAX_FILE_SIZE,
  buildPathname,
  createUploadUrl,
  isFilesConfigured,
} from "@/lib/support/files";
import { isAdminRequest, serviceUnavailable, unauthorized } from "@/lib/support/guard";
import { getConversation } from "@/lib/support/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function fail(error, status = 400) {
  return Response.json({ ok: false, error }, { status });
}

export async function POST(request) {
  if (!(await isAdminRequest())) return unauthorized();
  if (!isStoreConfigured() || !isFilesConfigured()) return serviceUnavailable();

  let payload;
  try {
    payload = await request.json();
  } catch {
    return fail("invalid_json");
  }

  const id = typeof payload?.id === "string" ? payload.id.trim() : "";
  const name = typeof payload?.name === "string" ? payload.name : "";
  const type = typeof payload?.type === "string" ? payload.type : "";
  const size = Number(payload?.size);

  if (!id) return fail("id_required");
  if (!ALLOWED_FILE_TYPES.includes(type)) return fail("type_not_allowed");
  if (!Number.isFinite(size) || size <= 0 || size > MAX_FILE_SIZE) {
    return fail("file_too_large");
  }

  try {
    const conversation = await getConversation(id);
    if (!conversation) return fail("not_found", 404);

    const pathname = buildPathname(conversation.id, name);
    const { uploadUrl } = await createUploadUrl({ pathname, contentType: type, size });

    return Response.json({ ok: true, uploadUrl, pathname });
  } catch {
    return fail("upload_unavailable", 502);
  }
}

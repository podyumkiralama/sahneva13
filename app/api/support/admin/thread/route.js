// Panel: tek sohbetin mesajları, cevap yazma ve okundu/kapat işlemleri.

import { SUPPORT_LIMITS, isStoreConfigured } from "@/lib/support/config";
import { isAdminRequest, serviceUnavailable, unauthorized } from "@/lib/support/guard";
import {
  ALLOWED_FILE_TYPES,
  MAX_FILE_SIZE,
  conversationPrefix,
  deleteConversationFiles,
  isFilesConfigured,
} from "@/lib/support/files";
import {
  appendMessage,
  closeConversation,
  deleteConversation,
  getConversation,
  getMessages,
  markThreadRead,
  toPublicConversation,
} from "@/lib/support/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function storeError() {
  return Response.json({ ok: false, error: "store_error" }, { status: 502 });
}

/** Cevaba iliştirilen dosyanın künyesi. */
function normalizeAttachment(value) {
  if (!value || typeof value !== "object") return null;

  const path = clean(value.path, 300);
  const name = clean(value.name, 160);
  const type = clean(value.type, 100);
  const size = Number(value.size);

  if (!path || !ALLOWED_FILE_TYPES.includes(type)) return null;
  if (!Number.isFinite(size) || size <= 0 || size > MAX_FILE_SIZE) return null;

  return { path, name: name || "dosya", type, size };
}

export async function GET(request) {
  if (!(await isAdminRequest())) return unauthorized();
  if (!isStoreConfigured()) return serviceUnavailable();

  const params = new URL(request.url).searchParams;
  const id = clean(params.get("id"), 64);
  const since = Number(params.get("since") ?? 0);

  if (!id) return Response.json({ ok: false, error: "id_required" }, { status: 400 });

  try {
    const conversation = await getConversation(id);
    if (!conversation) {
      return Response.json({ ok: false, error: "not_found" }, { status: 404 });
    }

    const { messages, nextCursor } = await getMessages(id, since);

    return Response.json({
      ok: true,
      thread: toPublicConversation(conversation),
      messages,
      cursor: nextCursor,
    });
  } catch {
    return storeError();
  }
}

export async function POST(request) {
  if (!(await isAdminRequest())) return unauthorized();
  if (!isStoreConfigured()) return serviceUnavailable();

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const id = clean(payload?.id, 64);
  const text = clean(payload?.message, SUPPORT_LIMITS.maxMessageLength);
  const file = normalizeAttachment(payload?.file);

  // Dosya eklenmişse metin zorunlu değil.
  if (!id || (!text && !file)) {
    return Response.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  try {
    const conversation = await getConversation(id);
    if (!conversation) {
      return Response.json({ ok: false, error: "not_found" }, { status: 404 });
    }

    if (file && !file.path.startsWith(conversationPrefix(conversation.id))) {
      return Response.json({ ok: false, error: "invalid_attachment" }, { status: 400 });
    }

    const result = await appendMessage(conversation, { role: "agent", text, file });
    // Cevap yazmak, sohbeti okunmuş saymanın doğal yeri.
    await markThreadRead(id);

    return Response.json({ ok: true, cursor: result.index + 1 });
  } catch {
    return storeError();
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

  const id = clean(payload?.id, 64);
  if (!id) return Response.json({ ok: false, error: "id_required" }, { status: 400 });

  try {
    // Önce dosyalar: Redis kaydı silindikten sonra sohbetin varlığı
    // doğrulanamaz ve dosyalar sahipsiz kalırdı.
    if (isFilesConfigured()) {
      await deleteConversationFiles(id).catch(() => {});
    }

    const removed = await deleteConversation(id);
    if (!removed) {
      return Response.json({ ok: false, error: "not_found" }, { status: 404 });
    }

    return Response.json({ ok: true });
  } catch {
    return storeError();
  }
}

export async function PATCH(request) {
  if (!(await isAdminRequest())) return unauthorized();
  if (!isStoreConfigured()) return serviceUnavailable();

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const id = clean(payload?.id, 64);
  const action = clean(payload?.action, 16);

  if (!id) return Response.json({ ok: false, error: "id_required" }, { status: 400 });

  try {
    if (action === "close") {
      const closed = await closeConversation(id);
      if (!closed) {
        return Response.json({ ok: false, error: "not_found" }, { status: 404 });
      }
      return Response.json({ ok: true });
    }

    await markThreadRead(id);
    return Response.json({ ok: true });
  } catch {
    return storeError();
  }
}

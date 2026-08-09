// Ziyaretçi tarafı sohbet ucu.
//
// POST  → sohbet açar veya mevcut sohbete mesaj ekler
// GET   → görülmemiş mesajları çeker (widget birkaç saniyede bir sorar)

import {
  SUPPORT_LIMITS,
  isStoreConfigured,
  isWithinBusinessHours,
} from "@/lib/support/config";
import { normalizeContact } from "@/lib/support/contact";
import { getSupportDictionary } from "@/lib/support/dictionary";
import { notifyAgents } from "@/lib/support/push";
import {
  appendMessage,
  authorizeVisitor,
  consumeRateLimit,
  countMessages,
  createConversation,
  findOpenConversationByContact,
  getMessages,
  joinConversation,
} from "@/lib/support/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SUPPORTED_LOCALES = new Set(["tr", "en", "de", "ru", "zh", "ar"]);

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "";
}

function fail(error, status = 400) {
  return Response.json({ ok: false, error }, { status });
}

/** Bildirim gövdesinde sohbetin kim olduğu tek bakışta görünsün. */
function buildNotification(conversation, text) {
  const who = conversation.name || "Yeni ziyaretçi";
  const where = conversation.contact ? ` · ${conversation.contact}` : "";

  return {
    title: `${who}${where}`,
    body: text.length > 160 ? `${text.slice(0, 157)}…` : text,
    url: `/yonetim/destek?id=${conversation.id}`,
    // Aynı sohbetin ardışık mesajları bildirim merkezinde üst üste yığılmasın.
    tag: `sahneva-support-${conversation.id}`,
  };
}

export async function POST(request) {
  if (!isStoreConfigured()) {
    return fail("not_configured", 503);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return fail("invalid_json");
  }

  const ip = getClientIp(request);
  const message = clean(payload?.message, SUPPORT_LIMITS.maxMessageLength);

  if (!message) {
    return fail("message_required");
  }

  const conversationId = clean(payload?.id, 64);
  const token = clean(payload?.token, 64);

  try {
    // ---- mevcut sohbete ekleme ----
    if (conversationId && token) {
      const authorized = await authorizeVisitor(conversationId, token);
      if (!authorized) return fail("unauthorized", 401);

      const { conversation } = authorized;

      const total = await countMessages(conversationId);
      if (total >= SUPPORT_LIMITS.maxMessagesPerConversation) {
        return fail("conversation_full", 409);
      }

      const allowed = await consumeRateLimit("msg", ip, SUPPORT_LIMITS.messagesPerHour);
      if (!allowed) return fail("rate_limited", 429);

      const result = await appendMessage(conversation, { role: "visitor", text: message });
      await notifyAgents(buildNotification(result.conversation, message));

      return Response.json({ ok: true, cursor: result.index + 1 });
    }

    // ---- yeni sohbet ----
    const locale = SUPPORTED_LOCALES.has(payload?.locale) ? payload.locale : "tr";
    const online = isWithinBusinessHours();
    const name = clean(payload?.name, SUPPORT_LIMITS.maxNameLength);
    const contact = clean(payload?.contact, SUPPORT_LIMITS.maxContactLength);

    if (!name) return fail("name_required");
    // Mesai dışında sohbeti kimse karşılamayacağı için iletişim bilgisi şart:
    // aksi halde geri dönülemeyen bir mesaj birikir.
    if (!online && !contact) return fail("contact_required");

    const allowed = await consumeRateLimit(
      "start",
      ip,
      SUPPORT_LIMITS.newConversationsPerHour,
    );
    if (!allowed) return fail("rate_limited", 429);

    const page = clean(payload?.page, 300);
    const contactKeyValue = normalizeContact(contact);

    // Aynı numara/e-posta ile açık bir sohbet varsa yeni kayıt açmak yerine
    // ona bağlanılıyor; ziyaretçi ismini farklı yazsa da panelde tek bir
    // yazışma olarak sürüyor.
    const existing = contactKeyValue
      ? await findOpenConversationByContact(contactKeyValue)
      : null;

    const { conversation, token: freshToken } = existing
      ? await joinConversation(existing, { name, page })
      : await createConversation({
          locale,
          name,
          contact,
          contactKeyValue,
          page,
          referrer: clean(request.headers.get("referer"), 300),
        });

    // Bu cihazın görebileceği en eski mesaj: sohbete katıldığı an. Daha
    // öncesi, numarayı bilen birine geçmişi açmamak için gizli kalıyor.
    const floor = await countMessages(conversation.id);

    const dictionary = getSupportDictionary(locale);

    await appendMessage(conversation, {
      role: "system",
      text: online ? dictionary.greeting : dictionary.greetingOffline,
    });
    const result = await appendMessage(conversation, { role: "visitor", text: message });

    await notifyAgents(buildNotification(result.conversation, message));

    const { messages, nextCursor } = await getMessages(conversation.id, floor);

    return Response.json({
      ok: true,
      id: conversation.id,
      token: freshToken,
      messages,
      cursor: nextCursor,
      online,
    });
  } catch {
    return fail("store_error", 502);
  }
}

export async function GET(request) {
  if (!isStoreConfigured()) {
    return fail("not_configured", 503);
  }

  // Jeton sorgu dizesinde taşınmıyor: sunucu erişim kayıtlarına düşmesin.
  const id = clean(request.headers.get("x-support-conversation"), 64);
  const token = clean(request.headers.get("x-support-token"), 64);
  const since = Number(new URL(request.url).searchParams.get("since") ?? 0);

  if (!id || !token) return fail("unauthorized", 401);

  try {
    const authorized = await authorizeVisitor(id, token);
    if (!authorized) return fail("unauthorized", 401);

    const { conversation, floor } = authorized;

    // İstemciden gelen `since` taban değerin altına inemez.
    const from = Math.max(Number.isFinite(since) ? since : 0, floor);
    const { messages, nextCursor } = await getMessages(id, from);

    return Response.json({
      ok: true,
      messages,
      cursor: nextCursor,
      online: isWithinBusinessHours(),
      closed: Boolean(conversation.closed),
    });
  } catch {
    return fail("store_error", 502);
  }
}

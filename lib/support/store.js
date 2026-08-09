// Canlı destek veri katmanı — Upstash Redis REST API üzerinden.
//
// REST kullanılmasının nedeni sürücü bağımlılığından kaçınmak: Vercel'in
// serverless fonksiyonları kalıcı TCP bağlantısı tutamadığı için Redis
// sürücüsü zaten her istekte yeniden bağlanırdı. Düz `fetch` hem daha az
// bağımlılık hem de Edge/Node ayrımından bağımsız çalışma demek.

import { createHash, randomBytes } from "node:crypto";

import {
  CONVERSATION_TTL_SECONDS,
  SUPPORT_LIMITS,
  getRedisCredentials,
} from "./config.js";

const KEY_PREFIX = "sup";
const INDEX_KEY = `${KEY_PREFIX}:index`;
const PUSH_KEY = `${KEY_PREFIX}:push`;

const conversationKey = (id) => `${KEY_PREFIX}:conv:${id}`;
const messagesKey = (id) => `${KEY_PREFIX}:msg:${id}`;
const rateKey = (bucket, ip) => `${KEY_PREFIX}:rate:${bucket}:${ip}`;

class SupportStoreError extends Error {}

async function command(args) {
  const credentials = getRedisCredentials();
  if (!credentials) {
    throw new SupportStoreError("Redis is not configured.");
  }

  const response = await fetch(credentials.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new SupportStoreError(
      `Redis command failed with status ${response.status}.`,
    );
  }

  const payload = await response.json();
  if (payload?.error) {
    throw new SupportStoreError(payload.error);
  }

  return payload?.result ?? null;
}

async function pipeline(commands) {
  const credentials = getRedisCredentials();
  if (!credentials) {
    throw new SupportStoreError("Redis is not configured.");
  }

  const response = await fetch(`${credentials.url}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${credentials.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commands),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new SupportStoreError(
      `Redis pipeline failed with status ${response.status}.`,
    );
  }

  const payload = await response.json();
  if (!Array.isArray(payload)) {
    throw new SupportStoreError("Unexpected pipeline response.");
  }

  const failed = payload.find((entry) => entry?.error);
  if (failed) {
    throw new SupportStoreError(failed.error);
  }

  return payload.map((entry) => entry?.result ?? null);
}

function parseJson(value, fallback = null) {
  if (value == null) return fallback;
  if (typeof value === "object") return value;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

/* ------------------------------ kimlikler ------------------------------ */

// URL'de ve localStorage'da taşınacağı için karakter kümesi dar tutuldu.
const ID_ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789";

function randomId(length) {
  const bytes = randomBytes(length);
  let out = "";
  for (let index = 0; index < length; index += 1) {
    out += ID_ALPHABET[bytes[index] % ID_ALPHABET.length];
  }
  return out;
}

function hashToken(token) {
  return createHash("sha256").update(token).digest("hex");
}

/* ------------------------------- oranlama ------------------------------ */

/**
 * Saatlik pencere sayacı. Pencere kayan değil sabit: TTL yalnızca sayaç ilk
 * kez oluştuğunda veriliyor, aksi halde her istek süreyi uzatır ve sayaç hiç
 * sıfırlanmazdı.
 */
export async function consumeRateLimit(bucket, ip, limit) {
  if (!ip) return true;

  const key = rateKey(bucket, ip);
  const count = Number(await command(["INCR", key]));

  if (count === 1) {
    await command(["EXPIRE", key, 3600]);
  }

  return count <= limit;
}

/* ------------------------------ sohbetler ------------------------------ */

/**
 * Yeni sohbet açar ve ziyaretçiye özel erişim jetonu üretir.
 * Jetonun kendisi saklanmaz, yalnızca SHA-256 özeti tutulur.
 */
export async function createConversation({
  locale = "tr",
  name = "",
  contact = "",
  page = "",
  referrer = "",
}) {
  const id = randomId(16);
  const token = randomId(32);
  const now = Date.now();

  const conversation = {
    id,
    tokenHash: hashToken(token),
    createdAt: now,
    updatedAt: now,
    locale,
    name,
    contact,
    page,
    referrer,
    // Yönetim panelinde okunmamış rozetini süren sayaç.
    agentUnread: 0,
    lastVisitorAt: now,
    lastAgentAt: 0,
    closed: false,
  };

  await pipeline([
    ["SET", conversationKey(id), JSON.stringify(conversation), "EX", CONVERSATION_TTL_SECONDS],
    ["ZADD", INDEX_KEY, now, id],
  ]);

  return { conversation, token };
}

export async function getConversation(id) {
  if (!id) return null;
  return parseJson(await command(["GET", conversationKey(id)]));
}

async function saveConversation(conversation) {
  await pipeline([
    [
      "SET",
      conversationKey(conversation.id),
      JSON.stringify(conversation),
      "EX",
      CONVERSATION_TTL_SECONDS,
    ],
    ["ZADD", INDEX_KEY, conversation.updatedAt, conversation.id],
  ]);
}

/** Ziyaretçi jetonunu doğrular; başarısızsa null döner. */
export async function authorizeVisitor(id, token) {
  if (!id || !token) return null;

  const conversation = await getConversation(id);
  if (!conversation) return null;
  if (conversation.tokenHash !== hashToken(token)) return null;

  return conversation;
}

/**
 * Sohbete mesaj ekler. Dönen `index`, listedeki sıra numarasıdır; ziyaretçi
 * ve panel bu sayıyı "kaç mesaj gördüm" bilgisi olarak taşır.
 */
export async function appendMessage(conversation, { role, text }) {
  const message = { role, text, at: Date.now() };

  const [length] = await pipeline([
    ["RPUSH", messagesKey(conversation.id), JSON.stringify(message)],
    ["EXPIRE", messagesKey(conversation.id), CONVERSATION_TTL_SECONDS],
  ]);

  const updated = {
    ...conversation,
    updatedAt: message.at,
    ...(role === "visitor"
      ? {
          lastVisitorAt: message.at,
          agentUnread: (conversation.agentUnread ?? 0) + 1,
        }
      : { lastAgentAt: message.at }),
  };

  await saveConversation(updated);

  return { message, index: Number(length) - 1, conversation: updated };
}

export async function countMessages(id) {
  return Number(await command(["LLEN", messagesKey(id)])) || 0;
}

/** `since` indeksinden sonraki mesajları döndürür. */
export async function getMessages(id, since = 0) {
  const start = Number.isFinite(since) && since > 0 ? Math.floor(since) : 0;
  const raw = await command(["LRANGE", messagesKey(id), start, -1]);

  if (!Array.isArray(raw)) return { messages: [], nextCursor: start };

  const messages = raw
    .map((entry) => parseJson(entry))
    .filter((entry) => entry && typeof entry.text === "string");

  return { messages, nextCursor: start + messages.length };
}

/** Panele giden nesnede ziyaretçi jetonunun özeti bulunmamalı. */
export function toPublicConversation(conversation) {
  if (!conversation) return null;

  const clone = { ...conversation };
  delete clone.tokenHash;
  return clone;
}

export async function markThreadRead(id) {
  const conversation = await getConversation(id);
  if (!conversation || !conversation.agentUnread) return conversation;

  const updated = { ...conversation, agentUnread: 0 };
  await saveConversation(updated);
  return updated;
}

export async function closeConversation(id) {
  const conversation = await getConversation(id);
  if (!conversation) return null;

  const updated = { ...conversation, closed: true, agentUnread: 0 };
  await saveConversation(updated);
  return updated;
}

/**
 * Panel için son sohbetler. TTL dolmuş kayıtlar indekste asılı kalabildiği
 * için, karşılığı bulunamayan kimlikler bu okuma sırasında temizleniyor.
 */
export async function listConversations(limit = SUPPORT_LIMITS.threadListSize) {
  // Sıra puanı `updatedAt`; en yeniden eskiye ilk N kayıt.
  const ids = await command(["ZREVRANGE", INDEX_KEY, 0, Math.max(limit - 1, 0)]);
  if (!Array.isArray(ids) || ids.length === 0) return [];

  const rows = await pipeline(ids.map((id) => ["GET", conversationKey(id)]));

  const stale = [];
  const conversations = [];

  rows.forEach((row, position) => {
    const parsed = parseJson(row);
    if (parsed) {
      conversations.push(parsed);
    } else {
      stale.push(ids[position]);
    }
  });

  if (stale.length > 0) {
    await pipeline(stale.map((id) => ["ZREM", INDEX_KEY, id]));
  }

  return conversations;
}

/* --------------------------- push abonelikleri -------------------------- */

export async function savePushSubscription(subscription) {
  await command([
    "HSET",
    PUSH_KEY,
    subscription.endpoint,
    JSON.stringify(subscription),
  ]);
}

export async function deletePushSubscription(endpoint) {
  await command(["HDEL", PUSH_KEY, endpoint]);
}

export async function listPushSubscriptions() {
  const raw = await command(["HGETALL", PUSH_KEY]);
  if (!raw) return [];

  // Upstash HGETALL'ı düz dizi (alan, değer, alan, değer...) olarak döndürür.
  const values = Array.isArray(raw)
    ? raw.filter((_, index) => index % 2 === 1)
    : Object.values(raw);

  return values
    .map((entry) => parseJson(entry))
    .filter((entry) => entry && typeof entry.endpoint === "string");
}

export { SupportStoreError };

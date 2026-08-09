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
// Panel listesi tek bir HASH'ten okunuyor. Alternatifi (sıralı küme + her
// sohbet için ayrı GET) liste her yenilendiğinde sohbet sayısı kadar komut
// harcıyordu; Upstash ücretsiz kademesinin aylık komut bütçesini asıl yiyen
// buydu. Özet kaydı, sohbet kaydıyla aynı yazma turunda güncelleniyor.
const SUMMARY_KEY = `${KEY_PREFIX}:summary`;
const PUSH_KEY = `${KEY_PREFIX}:push`;

const conversationKey = (id) => `${KEY_PREFIX}:conv:${id}`;
const messagesKey = (id) => `${KEY_PREFIX}:msg:${id}`;
const rateKey = (bucket, ip) => `${KEY_PREFIX}:rate:${bucket}:${ip}`;
// Normalleştirilmiş iletişim bilgisinden sohbete: aynı kişi yeni bir
// cihazdan yazdığında aynı sohbette devam etsin diye.
const contactIndexKey = (contactKeyValue) => `${KEY_PREFIX}:contact:${contactKeyValue}`;

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

// Bir sohbete bağlanabilecek cihaz sayısı ve tutulacak isim yazımı sayısı.
const MAX_SESSIONS = 20;
const MAX_ALIASES = 5;

/**
 * Yeni sohbet açar ve ziyaretçiye özel erişim jetonu üretir.
 * Jetonun kendisi saklanmaz, yalnızca SHA-256 özeti tutulur.
 */
export async function createConversation({
  locale = "tr",
  name = "",
  contact = "",
  contactKeyValue = "",
  page = "",
  referrer = "",
}) {
  const id = randomId(16);
  const token = randomId(32);
  const now = Date.now();

  const conversation = {
    id,
    // Her cihaz kendi jetonuyla bağlanıyor. `cursor`, o oturumun
    // görebileceği en eski mesajın sırası: sonradan katılan bir cihaz
    // kendinden önceki yazışmayı okuyamaz.
    sessions: [{ h: hashToken(token), c: 0, at: now }],
    contactKey: contactKeyValue,
    createdAt: now,
    updatedAt: now,
    locale,
    name,
    aliases: [],
    contact,
    page,
    referrer,
    // Yönetim panelinde okunmamış rozetini süren sayaç.
    agentUnread: 0,
    lastVisitorAt: now,
    lastAgentAt: 0,
    closed: false,
  };

  await saveConversation(conversation);

  if (contactKeyValue) {
    await command([
      "SET",
      contactIndexKey(contactKeyValue),
      id,
      "EX",
      CONVERSATION_TTL_SECONDS,
    ]);
  }

  return { conversation, token };
}

/**
 * Aynı numara/e-posta ile daha önce açılmış, hâlâ açık sohbeti bulur.
 * Kapatılmış sohbetler eşleşmez: "Kapat" düğmesi, yanlış eşleşen bir
 * kaydı ayırmanın ve biten bir işi arşivlemenin yolu.
 */
export async function findOpenConversationByContact(contactKeyValue) {
  if (!contactKeyValue) return null;

  const id = await command(["GET", contactIndexKey(contactKeyValue)]);
  if (!id) return null;

  const conversation = await getConversation(id);
  if (!conversation || conversation.closed) return null;

  return conversation;
}

/**
 * Mevcut sohbete yeni bir cihaz bağlar: yeni jeton üretir ve o cihazın
 * yalnızca bundan sonrasını görmesi için imleç tabanını kaydeder.
 */
export async function joinConversation(conversation, { name = "", page = "" }) {
  const token = randomId(32);
  const now = Date.now();
  const cursor = await countMessages(conversation.id);

  const sessions = [
    ...(conversation.sessions ?? []),
    { h: hashToken(token), c: cursor, at: now },
  ].slice(-MAX_SESSIONS);

  // İsim her seferinde aynı yazılmıyor; en son yazılan öne alınıp
  // öncekiler yanlış eşleşmeyi fark edebilmeniz için saklanıyor.
  const previousNames = [conversation.name, ...(conversation.aliases ?? [])];
  const aliases = name
    ? previousNames.filter((entry) => entry && entry !== name).slice(0, MAX_ALIASES)
    : (conversation.aliases ?? []);

  const updated = {
    ...conversation,
    sessions,
    name: name || conversation.name,
    aliases,
    page: page || conversation.page,
    updatedAt: now,
  };

  await saveConversation(updated);

  return { conversation: updated, token };
}

export async function getConversation(id) {
  if (!id) return null;
  return parseJson(await command(["GET", conversationKey(id)]));
}

/** Liste görünümünün ihtiyaç duyduğu alanlar; jeton özeti burada yok. */
function toSummary(conversation) {
  return {
    id: conversation.id,
    name: conversation.name,
    contact: conversation.contact,
    locale: conversation.locale,
    page: conversation.page,
    // Aynı numarayla farklı yazılmış isimler; yanlış eşleşmeyi fark
    // edebilmek için panelde gösteriliyor.
    aliases: conversation.aliases ?? [],
    createdAt: conversation.createdAt,
    updatedAt: conversation.updatedAt,
    agentUnread: conversation.agentUnread ?? 0,
    closed: Boolean(conversation.closed),
  };
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
    ["HSET", SUMMARY_KEY, conversation.id, JSON.stringify(toSummary(conversation))],
  ]);
}

/**
 * Ziyaretçi jetonunu doğrular; başarısızsa null döner.
 *
 * Dönen `floor`, o cihazın görebileceği en eski mesaj sırasıdır. Sohbete
 * sonradan katılan cihaz `since=0` göndererek geçmişi çekemesin diye
 * okuma bu değerin altına inemiyor.
 */
export async function authorizeVisitor(id, token) {
  if (!id || !token) return null;

  const conversation = await getConversation(id);
  if (!conversation) return null;

  const hash = hashToken(token);

  const session = (conversation.sessions ?? []).find((entry) => entry.h === hash);
  if (session) {
    return { conversation, floor: Number(session.c) || 0 };
  }

  // Bu alan, çoklu oturum desteğinden önce açılmış sohbetlerde duruyor.
  if (conversation.tokenHash && conversation.tokenHash === hash) {
    return { conversation, floor: 0 };
  }

  return null;
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
          // Kapatılmış bir sohbete gelen yeni mesaj onu yeniden açar;
          // aksi halde panelde "kapalı" görünen bir yazışma cevap bekler.
          closed: false,
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

/** Panele giden nesnede ziyaretçi jetonlarının özeti bulunmamalı. */
export function toPublicConversation(conversation) {
  if (!conversation) return null;

  const clone = { ...conversation };
  delete clone.tokenHash;
  delete clone.sessions;
  delete clone.contactKey;
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
 * Panel için son sohbetler — tek komut.
 *
 * Özet kaydının kendi TTL'i yok (HASH alanları tek tek zaman aşımına
 * uğramaz); saklama süresini geçmiş satırlar bu okuma sırasında siliniyor.
 */
export async function listConversations(limit = SUPPORT_LIMITS.threadListSize) {
  const raw = await command(["HGETALL", SUMMARY_KEY]);
  if (!raw) return [];

  const values = Array.isArray(raw)
    ? raw.filter((_, index) => index % 2 === 1)
    : Object.values(raw);

  const cutoff = Date.now() - CONVERSATION_TTL_SECONDS * 1000;
  const stale = [];
  const conversations = [];

  values.forEach((entry) => {
    const parsed = parseJson(entry);
    if (!parsed?.id) return;

    if ((parsed.updatedAt ?? 0) < cutoff) {
      stale.push(parsed.id);
    } else {
      conversations.push(parsed);
    }
  });

  if (stale.length > 0) {
    await pipeline(stale.map((id) => ["HDEL", SUMMARY_KEY, id]));
  }

  return conversations
    .sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0))
    .slice(0, limit);
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

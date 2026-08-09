// Canlı destek modülünün ortak sabitleri.
//
// Modül, ortam değişkenleri tanımlı değilken sessizce devre dışı kalır:
// widget hiç görünmez, API uçları 503 döner. Böylece anahtarlar girilmeden
// yapılan bir dağıtım, ziyaretçiye cevapsız kalacak bir sohbet kutusu
// göstermez.

export const SUPPORT_LIMITS = {
  // Tek mesaj uzunluğu; teklif detayı yazan ziyaretçiye yer bırakır.
  maxMessageLength: 1500,
  maxNameLength: 80,
  maxContactLength: 120,
  // Bir sohbette biriken mesaj sayısı. Aşılınca yeni mesaj reddedilir.
  maxMessagesPerConversation: 200,
  // Yönetim panelinde listelenen sohbet sayısı.
  threadListSize: 40,
  // Aynı IP'den saatte açılabilecek yeni sohbet ve gönderilebilecek mesaj.
  newConversationsPerHour: 5,
  messagesPerHour: 60,
};

// Yazışmalar kişisel veri; KVKK saklama süresi olarak 90 gün sonunda
// Redis anahtarları kendiliğinden düşer.
export const CONVERSATION_TTL_SECONDS = 60 * 60 * 24 * 90;

// Mesai penceresi widget tarafından da okunduğu için ayrı, istemciye
// güvenli bir dosyada duruyor.
export { BUSINESS_HOURS, isWithinBusinessHours } from "./hours.js";

export const SUPPORT_COOKIE_NAME = "sahneva_support_admin";
export const SUPPORT_SESSION_TTL_SECONDS = 60 * 60 * 24 * 30;

/**
 * Upstash Redis bağlantısı. Vercel Marketplace entegrasyonu değişkenleri
 * `KV_` önekiyle yazıyor, doğrudan Upstash panosundan alınanlar `UPSTASH_`
 * önekiyle; ikisi de kabul edilir.
 */
export function getRedisCredentials() {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL ?? "";
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN ?? "";

  return url && token ? { url, token } : null;
}

export function isStoreConfigured() {
  return getRedisCredentials() !== null;
}

export function getVapidCredentials() {
  const publicKey = process.env.SUPPORT_VAPID_PUBLIC_KEY ?? "";
  const privateKey = process.env.SUPPORT_VAPID_PRIVATE_KEY ?? "";
  const subject = process.env.SUPPORT_VAPID_SUBJECT ?? "mailto:info@sahneva.com";

  return publicKey && privateKey ? { publicKey, privateKey, subject } : null;
}

export function isPushConfigured() {
  return getVapidCredentials() !== null;
}

export function isAdminConfigured() {
  return Boolean(
    process.env.SUPPORT_ADMIN_PASSWORD && process.env.SUPPORT_SESSION_SECRET,
  );
}

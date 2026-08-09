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
  // Aynı numara tek sohbette birleştiği için bu sayı tek bir görüşmeyi
  // değil, kişiyle 90 gün boyunca yapılan tüm yazışmayı kapsıyor.
  maxMessagesPerConversation: 500,
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
 * Upstash Redis bağlantısı.
 *
 * Değişken adları nereden geldiğine göre değişiyor: Vercel Marketplace
 * entegrasyonu kurulumda seçilen öneki kullanıyor (`UPSTASH_REDIS_`, `KV_`,
 * varsayılanda `STORAGE_`), doğrudan Upstash panosundan alınanlar ise
 * `UPSTASH_REDIS_REST_` biçiminde. Son ek de `_REST_URL` veya
 * `_REST_API_URL` olabiliyor. Kurulumun adlandırma tercihine takılmamak
 * için bilinen bileşimlerin tümü deneniyor.
 */
const REDIS_ENV_PREFIXES = ["UPSTASH_REDIS", "KV", "STORAGE", "REDIS"];
const REDIS_ENV_SUFFIXES = [
  ["_REST_URL", "_REST_TOKEN"],
  ["_REST_API_URL", "_REST_API_TOKEN"],
];

// REST uçları HTTPS; `redis://` biçimindeki bağlantı dizesi bu istemciyle
// çalışmaz, yanlışlıkla seçilmesin.
const isRestUrl = (value) => typeof value === "string" && value.startsWith("http");

export function getRedisCredentials() {
  for (const prefix of REDIS_ENV_PREFIXES) {
    for (const [urlSuffix, tokenSuffix] of REDIS_ENV_SUFFIXES) {
      const url = process.env[`${prefix}${urlSuffix}`];
      const token = process.env[`${prefix}${tokenSuffix}`];

      if (isRestUrl(url) && token) {
        return { url, token };
      }
    }
  }

  // Bilinen önekler tutmadıysa: REST adresi biçimindeki herhangi bir
  // değişkeni, aynı öneki paylaşan jetonuyla eşleştir. Vercel'in ürettiği
  // adlandırma kuruluma göre değiştiği için son çare olarak duruyor.
  for (const [key, value] of Object.entries(process.env)) {
    if (!isRestUrl(value)) continue;

    const match = key.match(/^(.+)_REST(_API)?_URL$/);
    if (!match) continue;

    const token = process.env[`${match[1]}_REST${match[2] ?? ""}_TOKEN`];
    if (token) return { url: value, token };
  }

  return null;
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

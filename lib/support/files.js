// Sohbete eklenen dosyalar.
//
// Dosya tarayıcıdan doğrudan depoya yükleniyor; bizim fonksiyonumuzdan
// geçmiyor. Depodaki kayıt "private": adresi bilinse bile açılmıyor, okumak
// için her seferinde kısa ömürlü imzalı bir bağlantı üretiliyor.
//
// Blob deposu tanımlı değilse modül sessizce kapalı kalır: widget'ta ataç
// düğmesi görünmez, uçlar 503 döner.

const PREFIX = "destek";

// Etkinlik işinde gelen tipik ekler: mekân fotoğrafı, yerleşim planı,
// teknik şartname. Çalıştırılabilir içerik kabul edilmiyor.
export const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "application/pdf",
];

export const MAX_FILE_SIZE = 10 * 1024 * 1024;

/**
 * Dosyaların kendiliğinden silinme süresi (gün).
 *
 * Varsayılan olarak **kapalı**: hiçbir dosya zamanla silinmiyor. Dosyalar
 * yalnızca sohbet panelden silindiğinde gidiyor. Süreli silme istenirse
 * `SUPPORT_FILE_RETENTION_DAYS` tanımlanır; o zaman `/api/support/cleanup`
 * süresi dolanları temizler.
 */
export function getRetentionDays() {
  const raw = Number(process.env.SUPPORT_FILE_RETENTION_DAYS);
  return Number.isFinite(raw) && raw > 0 ? raw : 0;
}

export function isFilesConfigured() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

/** Dosya adını yola gömerken yol ayracı ve sürpriz karakter kalmasın. */
export function sanitizeFileName(name) {
  const fallback = "dosya";
  if (typeof name !== "string") return fallback;

  const base = name.split(/[\\/]/).pop() ?? "";
  const cleaned = base
    .normalize("NFKD")
    .replace(/[^\w.-]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^[-.]+/, "")
    .slice(0, 80);

  return cleaned || fallback;
}

export function conversationPrefix(conversationId) {
  return `${PREFIX}/${conversationId}/`;
}

/** Yüklenecek dosyanın deposundaki yolu. */
export function buildPathname(conversationId, fileName) {
  const unique = Math.random().toString(36).slice(2, 10);
  return `${conversationPrefix(conversationId)}${unique}-${sanitizeFileName(fileName)}`;
}

/**
 * Tarayıcının doğrudan yükleme yapacağı imzalı adres. Yetki tek bir yola,
 * tek bir içerik türüne ve boyuta kilitli; süresi 10 dakika.
 */
export async function createUploadUrl({ pathname, contentType, size }) {
  const { issueSignedToken, presignUrl } = await import("@vercel/blob");

  const validUntil = Date.now() + 10 * 60 * 1000;

  const token = await issueSignedToken({
    pathname,
    operations: ["put"],
    allowedContentTypes: [contentType],
    maximumSizeInBytes: size,
    validUntil,
  });

  const { presignedUrl } = await presignUrl(token, {
    operation: "put",
    pathname,
    access: "private",
    allowedContentTypes: [contentType],
    maximumSizeInBytes: size,
    validUntil,
    // Rastgele son ek kapalı: açık olduğunda depodaki gerçek ad
    // istediğimizden farklı oluyor ve mesajda sakladığımız yol o dosyayı
    // bulamıyor. Çakışma riski yok — yolun başında zaten benzersiz bir
    // önek var ve üzerine yazma kapalı.
    addRandomSuffix: false,
    allowOverwrite: false,
  });

  return { uploadUrl: presignedUrl, pathname };
}

/** Panelin dosyayı okuması için akış döndürür. */
export async function readFile(pathname) {
  const { get } = await import("@vercel/blob");
  return get(pathname, { access: "private" });
}

/** Bir sohbete ait tüm dosyaları siler (yüklenip mesaja iliştirilmemiş olanlar dahil). */
export async function deleteConversationFiles(conversationId) {
  const { list, del } = await import("@vercel/blob");

  let cursor;
  let deleted = 0;

  do {
    const result = await list({
      prefix: conversationPrefix(conversationId),
      cursor,
      limit: 100,
    });

    if (result.blobs.length > 0) {
      await del(result.blobs.map((blob) => blob.url));
      deleted += result.blobs.length;
    }

    cursor = result.cursor;
  } while (cursor);

  return deleted;
}

/**
 * Saklama süresini geçmiş dosyaları siler. Günlük cron ile çağrılıyor;
 * Blob'un kendi zaman aşımı olmadığı için temizlik böyle yapılıyor.
 */
export async function deleteExpiredFiles() {
  const { list, del } = await import("@vercel/blob");

  const cutoff = Date.now() - getRetentionDays() * 24 * 60 * 60 * 1000;

  let cursor;
  let deleted = 0;
  let scanned = 0;

  do {
    const result = await list({ prefix: `${PREFIX}/`, cursor, limit: 100 });
    scanned += result.blobs.length;

    const expired = result.blobs
      .filter((blob) => new Date(blob.uploadedAt).getTime() < cutoff)
      .map((blob) => blob.url);

    if (expired.length > 0) {
      await del(expired);
      deleted += expired.length;
    }

    cursor = result.cursor;
  } while (cursor);

  return { scanned, deleted };
}

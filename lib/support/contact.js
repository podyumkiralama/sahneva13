// Aynı kişiyi tanımak için iletişim bilgisinin normalleştirilmesi.
//
// Ziyaretçi numarasını her seferinde farklı yazıyor: "0555 111 22 33",
// "+90 555 111 22 33", "905551112233". Üçü de aynı kişi olmalı.

/**
 * Karşılaştırma anahtarı üretir. Eşleşmeyen veya anlamsız girdilerde boş
 * dize döner; boş anahtar hiçbir sohbetle eşleştirilmez.
 *
 * @returns {string} `p:5551112233` | `e:ad@ornek.com` | ""
 */
export function normalizeContact(value) {
  if (typeof value !== "string") return "";

  const trimmed = value.trim().toLowerCase();
  if (!trimmed) return "";

  if (trimmed.includes("@")) {
    // Basit bir geçerlilik kontrolü; hatalı yazımlar eşleşme üretmesin.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ? `e:${trimmed}` : "";
  }

  let digits = trimmed.replace(/\D/g, "");
  if (digits.length < 7) return "";

  // Uluslararası arama önekleri.
  if (digits.startsWith("00")) digits = digits.slice(2);

  // Türkiye: +90 5xx… ve 05xx… biçimleri 10 haneye iniyor. Yurt dışı
  // numaraları ülke koduyla birlikte kaldığı için ülkeler arası çakışma
  // olmuyor.
  if (digits.length === 12 && digits.startsWith("90")) digits = digits.slice(2);
  else if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);

  return `p:${digits}`;
}

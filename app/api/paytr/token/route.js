// PayTR iFrame API — 1. Adım: sunucu tarafında iframe_token üretimi.
// İstemci yalnızca token'ı görür; merchant_key / merchant_salt burada kalır.

import {
  createMerchantOid,
  encodeBasket,
  formatTry,
  getPaytrConfig,
  parseAmountToKurus,
  requestIframeToken,
  resolveClientIp,
  toAscii,
} from "@/lib/payments/paytr";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+\d\s().-]{10,20}$/;
const REFERENCE_PATTERN = /^[A-Za-z0-9 ._/-]{0,40}$/;

// Basit hız sınırı: PayTR'a gereksiz token isteği açılmasını engeller.
// Sunucu örneği başına çalışır; kötüye kullanımı tamamen durdurmaz, yavaşlatır.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 8;
const rateBuckets = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const hits = (rateBuckets.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  rateBuckets.set(ip, hits);

  if (rateBuckets.size > 5000) rateBuckets.clear();

  return hits.length > RATE_LIMIT_MAX;
}

function sanitize(value, maxLength) {
  return typeof value === "string"
    ? value.replace(/[\r\n\t]/g, " ").trim().slice(0, maxLength)
    : "";
}

function validate(payload, config) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { valid: false, errors: ["Geçersiz istek gövdesi."] };
  }

  const fields = {
    name: sanitize(payload.name, 60),
    email: toAscii(sanitize(payload.email, 100)).toLowerCase(),
    phone: sanitize(payload.phone, 20),
    address: sanitize(payload.address, 400),
    reference: sanitize(payload.reference, 40),
  };

  const amountKurus = parseAmountToKurus(payload.amount);
  const errors = [];

  if (fields.name.length < 3) errors.push("Ad soyad en az 3 karakter olmalı.");
  if (!EMAIL_PATTERN.test(fields.email)) errors.push("Geçerli bir e-posta adresi girin.");
  if (!PHONE_PATTERN.test(fields.phone)) errors.push("Geçerli bir telefon numarası girin.");
  if (!REFERENCE_PATTERN.test(fields.reference)) {
    errors.push("Teklif / referans numarası yalnızca harf, rakam ve - _ / . içerebilir.");
  }
  if (payload.terms !== true) {
    errors.push("Ödemeye devam etmek için bilgilendirmeyi onaylamanız gerekiyor.");
  }

  if (amountKurus === null) {
    errors.push("Tutarı 1500 veya 1500.50 biçiminde girin.");
  } else if (amountKurus < config.minAmountKurus) {
    errors.push(`Tutar en az ${formatTry(config.minAmountKurus)} TL olmalı.`);
  } else if (amountKurus > config.maxAmountKurus) {
    errors.push(
      `Tutar en fazla ${formatTry(config.maxAmountKurus)} TL olabilir. Daha yüksek tutarlar için bizimle iletişime geçin.`,
    );
  }

  return { valid: errors.length === 0, errors, fields, amountKurus };
}

export async function POST(request) {
  const config = getPaytrConfig();

  if (!config.configured) {
    console.error("PAYTR_CONFIG_MISSING: PAYTR_MERCHANT_ID / _KEY / _SALT tanımlı değil.");
    return Response.json(
      { ok: false, errors: ["Online ödeme şu anda kullanılamıyor. Lütfen bizimle iletişime geçin."] },
      { status: 503 },
    );
  }

  const userIp = resolveClientIp(request.headers);

  if (isRateLimited(userIp)) {
    return Response.json(
      { ok: false, errors: ["Çok fazla deneme yapıldı. Lütfen birkaç dakika sonra tekrar deneyin."] },
      { status: 429 },
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ ok: false, errors: ["İstek gövdesi geçerli JSON olmalı."] }, { status: 400 });
  }

  const { valid, errors, fields, amountKurus } = validate(payload, config);
  if (!valid) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  const merchantOid = createMerchantOid();
  const label = fields.reference
    ? `Sahneva hizmet odemesi - Ref ${fields.reference}`
    : "Sahneva hizmet odemesi";

  const result = await requestIframeToken({
    config,
    merchantOid,
    userIp,
    email: fields.email,
    amountKurus,
    basket: encodeBasket(label, amountKurus),
    userName: fields.name,
    userAddress: fields.address || "Belirtilmedi",
    userPhone: fields.phone,
  }).catch((error) => ({ ok: false, reason: error?.message ?? "Ağ hatası" }));

  if (!result.ok) {
    // reason PayTR'ın teknik mesajı — log'a yazılır, müşteriye gösterilmez.
    console.error("PAYTR_TOKEN_FAILED", { merchantOid, reason: result.reason });
    return Response.json(
      { ok: false, errors: ["Ödeme formu açılamadı. Lütfen tekrar deneyin veya bizimle iletişime geçin."] },
      { status: 502 },
    );
  }

  console.info("PAYTR_TOKEN_CREATED", {
    merchantOid,
    amount: formatTry(amountKurus),
    reference: fields.reference || null,
    testMode: config.testMode,
  });

  return Response.json(
    {
      ok: true,
      token: result.token,
      merchantOid,
      amount: formatTry(amountKurus),
      testMode: config.testMode,
    },
    { status: 200, headers: { "Cache-Control": "no-store" } },
  );
}

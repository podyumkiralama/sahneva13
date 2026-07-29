// lib/payments/paytr.js
// PayTR iFrame API yardımcıları — YALNIZCA sunucu tarafı.
// merchant_key / merchant_salt istemciye asla sızmamalı, bu dosyayı
// hiçbir "use client" bileşeninden import etmeyin.
// Doküman: https://dev.paytr.com/iframe-api

import crypto from "node:crypto";

const TOKEN_ENDPOINT = "https://www.paytr.com/odeme/api/get-token";

export const PAYTR_ORIGIN = "https://www.paytr.com";
export const PAYTR_IFRAME_BASE = `${PAYTR_ORIGIN}/odeme/guvenli`;

const DEFAULT_MIN_TRY = 100;
const DEFAULT_MAX_TRY = 250000;

function readInt(value, fallback) {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

/**
 * Ortam değişkenlerinden PayTR yapılandırmasını okur.
 * `configured` false ise mağaza bilgileri henüz girilmemiştir.
 */
export function getPaytrConfig() {
  const merchantId = (process.env.PAYTR_MERCHANT_ID ?? "").trim();
  const merchantKey = (process.env.PAYTR_MERCHANT_KEY ?? "").trim();
  const merchantSalt = (process.env.PAYTR_MERCHANT_SALT ?? "").trim();

  // Varsayılan TEST: canlıya geçiş yalnızca PAYTR_TEST_MODE=0 ile bilinçli yapılır.
  const testMode = process.env.PAYTR_TEST_MODE !== "0";

  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    "https://www.sahneva.com"
  ).replace(/\/$/, "");

  return {
    merchantId,
    merchantKey,
    merchantSalt,
    // Taksit tablosu widget'ı (PaytrInstallmentTable) için — merchant_id gibi
    // bu token da tarayıcıya gömülmek üzere tasarlanmıştır, gizli değildir.
    installmentToken: (process.env.PAYTR_INSTALLMENT_TOKEN ?? "").trim(),
    configured: Boolean(merchantId && merchantKey && merchantSalt),
    testMode,
    siteUrl,
    currency: "TL",
    lang: "tr",
    timeoutLimit: readInt(process.env.PAYTR_TIMEOUT_LIMIT, 30),
    noInstallment: readInt(process.env.PAYTR_NO_INSTALLMENT, 0) === 1 ? 1 : 0,
    maxInstallment: Math.min(Math.max(readInt(process.env.PAYTR_MAX_INSTALLMENT, 0), 0), 12),
    minAmountKurus: readInt(process.env.PAYTR_MIN_AMOUNT_TRY, DEFAULT_MIN_TRY) * 100,
    maxAmountKurus: readInt(process.env.PAYTR_MAX_AMOUNT_TRY, DEFAULT_MAX_TRY) * 100,
    okUrl: `${siteUrl}/odeme/basarili`,
    failUrl: `${siteUrl}/odeme/basarisiz`,
  };
}

/**
 * "1500" / "1500.50" / "1500,50" → kuruş (integer). Geçersizse null.
 * PayTR payment_amount alanı 100 ile çarpılmış tam sayı bekler (34.56 → 3456).
 */
export function parseAmountToKurus(raw) {
  if (typeof raw !== "string" && typeof raw !== "number") return null;

  const text = String(raw).trim().replace(/\s/g, "");
  if (!/^\d{1,9}([.,]\d{1,2})?$/.test(text)) return null;

  const [whole, frac = ""] = text.replace(",", ".").split(".");
  const kurus = Number(whole) * 100 + Number(frac.padEnd(2, "0"));

  return Number.isSafeInteger(kurus) && kurus > 0 ? kurus : null;
}

export function formatTry(kurus) {
  return (kurus / 100).toFixed(2);
}

/**
 * Benzersiz sipariş numarası. PayTR yalnızca alfanümerik kabul eder (maks. 64).
 */
export function createMerchantOid(prefix = "SV") {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = crypto.randomBytes(5).toString("hex").toUpperCase();
  return `${prefix}${stamp}${rand}`.replace(/[^A-Z0-9]/g, "").slice(0, 64);
}

/**
 * user_basket: [[ürün adı, birim fiyat, adet]] dizisinin base64'ü.
 * Hash bu base64 metnin birebir kendisiyle hesaplanır.
 */
export function encodeBasket(label, amountKurus) {
  const basket = [[label.slice(0, 150), formatTry(amountKurus), 1]];
  return Buffer.from(JSON.stringify(basket), "utf8").toString("base64");
}

function hmacBase64(key, payload) {
  return crypto.createHmac("sha256", key).update(payload, "utf8").digest("base64");
}

/**
 * PayTR'ın Türkçe karakter kabul etmediği alanlar (özellikle email) için.
 */
export function toAscii(value) {
  const map = { ı: "i", İ: "I", ş: "s", Ş: "S", ğ: "g", Ğ: "G", ü: "u", Ü: "U", ö: "o", Ö: "O", ç: "c", Ç: "C" };
  return String(value)
    .replace(/[ıİşŞğĞüÜöÖçÇ]/g, (ch) => map[ch] ?? ch)
    .normalize("NFKD")
    .replace(/[^\x20-\x7E]/g, "");
}

/**
 * 1. Adım: iframe_token isteği. Başarılıysa { ok: true, token, merchantOid }.
 */
export async function requestIframeToken({
  config,
  merchantOid,
  userIp,
  email,
  amountKurus,
  basket,
  userName,
  userAddress,
  userPhone,
}) {
  const paymentAmount = String(amountKurus);
  const testMode = config.testMode ? "1" : "0";
  const noInstallment = String(config.noInstallment);
  const maxInstallment = String(config.maxInstallment);

  const hashStr =
    config.merchantId +
    userIp +
    merchantOid +
    email +
    paymentAmount +
    basket +
    noInstallment +
    maxInstallment +
    config.currency +
    testMode;

  const paytrToken = hmacBase64(config.merchantKey, hashStr + config.merchantSalt);

  const body = new URLSearchParams({
    merchant_id: config.merchantId,
    user_ip: userIp,
    merchant_oid: merchantOid,
    email,
    payment_amount: paymentAmount,
    paytr_token: paytrToken,
    user_basket: basket,
    debug_on: config.testMode ? "1" : "0",
    no_installment: noInstallment,
    max_installment: maxInstallment,
    user_name: userName,
    user_address: userAddress,
    user_phone: userPhone,
    merchant_ok_url: config.okUrl,
    merchant_fail_url: config.failUrl,
    timeout_limit: String(config.timeoutLimit),
    currency: config.currency,
    test_mode: testMode,
    lang: config.lang,
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    return { ok: false, reason: `PayTR HTTP ${response.status}` };
  }

  let payload;
  try {
    payload = await response.json();
  } catch {
    return { ok: false, reason: "PayTR yanıtı okunamadı." };
  }

  if (payload?.status !== "success" || !payload?.token) {
    return { ok: false, reason: payload?.reason ?? "PayTR token üretmedi." };
  }

  return { ok: true, token: payload.token, merchantOid };
}

/**
 * 2. Adım: bildirim (callback) imzası.
 * hash = base64(HMAC-SHA256(merchant_key, merchant_oid + merchant_salt + status + total_amount))
 */
export function verifyCallbackHash({ config, merchantOid, status, totalAmount, hash }) {
  if (!hash) return false;

  const expected = hmacBase64(
    config.merchantKey,
    `${merchantOid}${config.merchantSalt}${status}${totalAmount}`,
  );

  const received = Buffer.from(String(hash), "utf8");
  const computed = Buffer.from(expected, "utf8");

  if (received.length !== computed.length) return false;
  return crypto.timingSafeEqual(received, computed);
}

/**
 * Vercel arkasında gerçek müşteri IP'si. PayTR user_ip alanını doğrular.
 */
export function resolveClientIp(headers) {
  const forwarded = headers.get("x-forwarded-for");
  const candidate =
    forwarded?.split(",")[0]?.trim() ||
    headers.get("x-real-ip")?.trim() ||
    "";

  // IPv6 loopback / boş değerler PayTR tarafından reddediliyor.
  if (!candidate || candidate === "::1") return "127.0.0.1";
  return candidate.slice(0, 39);
}

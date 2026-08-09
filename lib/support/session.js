// Yönetim paneli oturumu.
//
// Kullanıcı hesabı yok; tek bir yönetici parolası var. Oturum, sunucuda
// saklanmayan imzalı bir çerezle taşınıyor: çerezin içeriği "son kullanma
// zamanı + HMAC" olduğu için sunucu tarafında oturum tablosu tutmaya gerek
// kalmıyor, parola değişince de eski çerezler geçersizleşiyor.

import { createHmac, timingSafeEqual } from "node:crypto";

import { SUPPORT_COOKIE_NAME, SUPPORT_SESSION_TTL_SECONDS } from "./config.js";

function getSecret() {
  return process.env.SUPPORT_SESSION_SECRET ?? "";
}

function sign(value) {
  // Parola da imzaya karışıyor: parola değiştirildiği anda dağıtılmış tüm
  // oturum çerezleri geçersiz hale gelir.
  return createHmac("sha256", `${getSecret()}:${process.env.SUPPORT_ADMIN_PASSWORD ?? ""}`)
    .update(value)
    .digest("base64url");
}

function safeEquals(a, b) {
  const left = Buffer.from(String(a));
  const right = Buffer.from(String(b));
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export function verifyAdminPassword(candidate) {
  const expected = process.env.SUPPORT_ADMIN_PASSWORD ?? "";
  if (!expected || typeof candidate !== "string") return false;

  // Uzunluk farkı timingSafeEqual'ı patlatmasın diye önce özet alınıyor.
  const digest = (value) => createHmac("sha256", getSecret()).update(value).digest();
  return timingSafeEqual(digest(candidate), digest(expected));
}

export function createSessionValue() {
  const expiresAt = Date.now() + SUPPORT_SESSION_TTL_SECONDS * 1000;
  return `${expiresAt}.${sign(String(expiresAt))}`;
}

export function isValidSessionValue(value) {
  if (typeof value !== "string" || !value.includes(".")) return false;
  if (!getSecret()) return false;

  const [expiresAt, signature] = value.split(".");
  const expiry = Number(expiresAt);

  if (!Number.isFinite(expiry) || expiry < Date.now()) return false;

  return safeEquals(signature, sign(expiresAt));
}

export const SESSION_COOKIE = {
  name: SUPPORT_COOKIE_NAME,
  options: {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SUPPORT_SESSION_TTL_SECONDS,
  },
};

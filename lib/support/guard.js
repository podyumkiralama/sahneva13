// Yönetim uçlarının ortak kapısı.

import { cookies } from "next/headers";

import { SUPPORT_COOKIE_NAME, isAdminConfigured } from "./config.js";
import { isValidSessionValue } from "./session.js";

export async function isAdminRequest() {
  if (!isAdminConfigured()) return false;

  const store = await cookies();
  return isValidSessionValue(store.get(SUPPORT_COOKIE_NAME)?.value);
}

export function unauthorized() {
  return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
}

export function serviceUnavailable(error = "not_configured") {
  return Response.json({ ok: false, error }, { status: 503 });
}

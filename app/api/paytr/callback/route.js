// PayTR iFrame API — 2. Adım: Bildirim (callback) URL'i.
// PayTR ödeme sonucunu buraya sunucudan sunucuya POST eder.
// Ödemenin gerçekten alındığının TEK kanıtı bu isteğin doğrulanmış hash'idir;
// /odeme/basarili sayfası yalnızca bilgilendirme amaçlıdır.
//
// PayTR panelinde Bildirim URL: https://www.sahneva.com/api/paytr/callback
// Bu adres kimlik doğrulaması istememeli ve her zaman düz metin "OK" dönmelidir,
// aksi halde PayTR bildirimi tekrar tekrar gönderir.

import { getPaytrConfig, verifyCallbackHash } from "@/lib/payments/paytr";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function textResponse(body, status = 200) {
  return new Response(body, {
    status,
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}

export async function POST(request) {
  const config = getPaytrConfig();

  if (!config.configured) {
    console.error("PAYTR_CALLBACK_CONFIG_MISSING");
    return textResponse("PAYTR configuration missing", 503);
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return textResponse("PAYTR bad request", 400);
  }

  const merchantOid = String(form.get("merchant_oid") ?? "");
  const status = String(form.get("status") ?? "");
  const totalAmount = String(form.get("total_amount") ?? "");
  const hash = String(form.get("hash") ?? "");

  if (!merchantOid || !status || !totalAmount) {
    return textResponse("PAYTR bad request", 400);
  }

  if (!verifyCallbackHash({ config, merchantOid, status, totalAmount, hash })) {
    console.error("PAYTR_CALLBACK_BAD_HASH", { merchantOid });
    return textResponse("PAYTR bad hash", 403);
  }

  const record = {
    merchantOid,
    status,
    totalAmount,
    currency: String(form.get("currency") ?? ""),
    paymentType: String(form.get("payment_type") ?? ""),
    paymentAmount: String(form.get("payment_amount") ?? ""),
    installmentCount: String(form.get("installment_count") ?? ""),
    testMode: String(form.get("test_mode") ?? ""),
    receivedAt: new Date().toISOString(),
  };

  if (status === "success") {
    // Kalıcı sipariş kaydı yok: mutabakat PayTR mağaza panelinden yapılır.
    // Bir veritabanı eklendiğinde mükerrer bildirim koruması da buraya girmeli
    // (aynı merchant_oid ikinci kez geldiğinde tekrar işlememek için).
    console.info("PAYTR_PAYMENT_SUCCESS", record);
  } else {
    console.warn("PAYTR_PAYMENT_FAILED", {
      ...record,
      failedReasonCode: String(form.get("failed_reason_code") ?? ""),
      failedReasonMsg: String(form.get("failed_reason_msg") ?? ""),
    });
  }

  // PayTR yalnızca gövdesi tam olarak "OK" olan yanıtı kabul eder.
  return textResponse("OK");
}

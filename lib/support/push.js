// Telefona bildirim gönderimi (Web Push / VAPID).
//
// Bildirim, mağazadan indirilen bir uygulamaya değil, ana ekrana eklenmiş
// siteye gider: tarayıcı kapalıyken de işletim sistemi bildirimi düşürür.
// Şifreleme ve VAPID imzalama RFC 8291/8292'ye göre `web-push` paketinde.

import { getVapidCredentials } from "./config.js";
import { deletePushSubscription, listPushSubscriptions } from "./store.js";

let configuredClient = null;

async function getClient() {
  const credentials = getVapidCredentials();
  if (!credentials) return null;

  if (!configuredClient) {
    const { default: webPush } = await import("web-push");
    webPush.setVapidDetails(
      credentials.subject,
      credentials.publicKey,
      credentials.privateKey,
    );
    configuredClient = webPush;
  }

  return configuredClient;
}

/**
 * Kayıtlı tüm yönetici cihazlarına bildirim gönderir.
 *
 * Bildirim gönderimi sohbet akışını bloke etmemeli: hata durumunda mesaj
 * yine de kaydedilmiş olur, yalnızca bildirim düşmez.
 */
export async function notifyAgents({ title, body, url, tag }) {
  const client = await getClient();
  if (!client) return { sent: 0, removed: 0 };

  const subscriptions = await listPushSubscriptions();
  if (subscriptions.length === 0) return { sent: 0, removed: 0 };

  const payload = JSON.stringify({ title, body, url, tag });

  const results = await Promise.allSettled(
    subscriptions.map((subscription) =>
      client.sendNotification(subscription, payload, { TTL: 60 * 60 * 12 }),
    ),
  );

  // Kullanıcı bildirimi kapattığında veya uygulamayı sildiğinde push servisi
  // 404/410 döner; o abonelik bir daha çalışmayacağı için siliniyor.
  const expired = [];
  results.forEach((result, index) => {
    if (result.status === "rejected") {
      const status = result.reason?.statusCode;
      if (status === 404 || status === 410) {
        expired.push(subscriptions[index].endpoint);
      }
    }
  });

  await Promise.allSettled(expired.map((endpoint) => deletePushSubscription(endpoint)));

  return {
    sent: results.filter((result) => result.status === "fulfilled").length,
    removed: expired.length,
  };
}

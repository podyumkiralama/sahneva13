// Service worker kaynağı.
//
// Dosya `public/` yerine route handler'dan yayınlanıyor; böylece başlıklar
// (Service-Worker-Allowed, no-cache) tek yerden kontrol ediliyor.
//
// Sayfa önbellekleme (fetch yakalama) bilinçli olarak yok: site ISR ile
// yayınlanıyor, araya girecek bir önbellek katmanı ziyaretçiye eski içerik
// gösterme riski taşırdı. Buradaki tek iş, canlı destek bildirimlerini
// karşılamak.

const SW_SOURCE = `const SW_VERSION = "sahneva-sw-v5";

const NOTIFICATION_ICON = "/android-chrome-192x192.png";
const NOTIFICATION_BADGE = "/favicon-32x32.png";
const SUPPORT_CONSOLE_PATH = "/yonetim/destek";

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SAHNEVA_SW_VERSION") {
    event.ports?.[0]?.postMessage({ version: SW_VERSION });
  }
});

self.addEventListener("push", (event) => {
  let payload = {};

  try {
    payload = event.data ? event.data.json() : {};
  } catch (error) {
    payload = { body: event.data ? event.data.text() : "" };
  }

  const url = payload.url || SUPPORT_CONSOLE_PATH;

  event.waitUntil(
    self.registration.showNotification(payload.title || "Sahneva canlı destek", {
      body: payload.body || "Yeni mesaj var.",
      icon: NOTIFICATION_ICON,
      badge: NOTIFICATION_BADGE,
      tag: payload.tag || "sahneva-support",
      renotify: true,
      vibrate: [120, 60, 120],
      data: { url },
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  // Mutlak adres: openWindow bazı Android sürümlerinde göreli yolu
  // çözemiyor.
  const target = new URL(
    event.notification.data?.url || SUPPORT_CONSOLE_PATH,
    self.location.origin
  ).href;

  event.waitUntil(
    (async () => {
      const clientList = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });

      // Panel zaten açıksa yeni pencere açmak yerine ona odaklanmayı dene.
      const existing = clientList.find((client) =>
        client.url.includes(SUPPORT_CONSOLE_PATH)
      );

      if (existing) {
        try {
          if ("navigate" in existing) {
            const navigated = await existing.navigate(target);
            if (navigated) {
              await navigated.focus();
              return;
            }
          }
          await existing.focus();
          return;
        } catch (error) {
          // Arka planda kalmış veya service worker'ın kontrolünde olmayan
          // bir sekme odaklanmayı reddedebiliyor; bu durumda hiçbir şey
          // açılmıyordu. Yedek plan yeni pencere açmak.
        }
      }

      await self.clients.openWindow(target);
    })()
  );
});

`;

export const dynamic = "force-dynamic";

export function GET() {
  return new Response(SW_SOURCE, {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "Service-Worker-Allowed": "/",
    },
  });
}

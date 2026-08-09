"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Bell, BellRing, Check, LogOut, RefreshCw, Send } from "lucide-react";

const THREAD_LIST_POLL_MS = 8000;
const ACTIVE_THREAD_POLL_MS = 4000;

/** VAPID genel anahtarı base64url metinden byte dizisine çevrilir. */
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = window.atob(base64);

  const output = new Uint8Array(raw.length);
  for (let index = 0; index < raw.length; index += 1) {
    output[index] = raw.charCodeAt(index);
  }
  return output;
}

function formatTimestamp(value) {
  if (!value) return "";
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(value));
  } catch {
    return "";
  }
}

export default function AdminConsole() {
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [threads, setThreads] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState("");

  const [pushState, setPushState] = useState({
    supported: false,
    configured: false,
    subscribed: false,
    busy: false,
  });

  const cursorRef = useRef(0);
  const fetchChainRef = useRef(null);
  const scrollRef = useRef(null);

  /* ------------------------------- oturum ------------------------------ */

  useEffect(() => {
    let cancelled = false;

    fetch("/api/support/admin/session", { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        if (cancelled) return;
        setAuthenticated(Boolean(data?.authenticated));
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setChecking(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const login = async (event) => {
    event.preventDefault();
    setLoginError("");

    try {
      const response = await fetch("/api/support/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setAuthenticated(true);
        setPassword("");
        return;
      }

      const data = await response.json().catch(() => null);
      setLoginError(
        data?.error === "rate_limited"
          ? "Çok fazla deneme yapıldı. Bir süre sonra tekrar deneyin."
          : data?.error === "not_configured"
            ? "Panel ortam değişkenleri tanımlı değil."
            : "Parola hatalı.",
      );
    } catch {
      setLoginError("Giriş yapılamadı. Bağlantınızı kontrol edin.");
    }
  };

  const logout = async () => {
    await fetch("/api/support/admin/session", { method: "DELETE" }).catch(() => {});
    setAuthenticated(false);
    setThreads([]);
    setMessages([]);
    setActiveId(null);
  };

  /* ------------------------------ sohbetler ---------------------------- */

  const loadThreads = useCallback(async () => {
    try {
      const response = await fetch("/api/support/admin/threads", { cache: "no-store" });
      if (response.status === 401) {
        setAuthenticated(false);
        return;
      }

      const data = await response.json().catch(() => null);
      if (data?.ok) setThreads(data.threads ?? []);
    } catch {
      // Geçici ağ hatası; bir sonraki tur yeniden dener.
    }
  }, []);

  const fetchMessages = useCallback(async (id, since) => {
    try {
      const response = await fetch(
        `/api/support/admin/thread?id=${encodeURIComponent(id)}&since=${since}`,
        { cache: "no-store" },
      );

      if (response.status === 401) {
        setAuthenticated(false);
        return;
      }

      const data = await response.json().catch(() => null);
      if (!data?.ok) return;

      if (data.messages.length > 0) {
        setMessages((current) => (since === 0 ? data.messages : [...current, ...data.messages]));
        cursorRef.current = data.cursor;
      } else if (since === 0) {
        setMessages([]);
        cursorRef.current = data.cursor;
      }
    } catch {
      // yoksay
    }
  }, []);

  // Zamanlayıcının turu ile cevap gönderiminin tetiklediği tur aynı anda
  // çalışırsa ikisi de aynı imleçten okur ve mesaj listeye iki kez eklenir;
  // bu yüzden okumalar tek sıraya diziliyor.
  const loadMessages = useCallback(
    (id, since) => {
      const previous = fetchChainRef.current ?? Promise.resolve();
      const next = previous.then(
        () => fetchMessages(id, since === undefined ? cursorRef.current : since),
        () => fetchMessages(id, since === undefined ? cursorRef.current : since),
      );
      fetchChainRef.current = next.catch(() => {});
      return next;
    },
    [fetchMessages],
  );

  useEffect(() => {
    if (!authenticated) return undefined;

    loadThreads();
    const timer = window.setInterval(loadThreads, THREAD_LIST_POLL_MS);
    return () => window.clearInterval(timer);
  }, [authenticated, loadThreads]);

  useEffect(() => {
    if (!authenticated || !activeId) return undefined;

    cursorRef.current = 0;
    setMessages([]);
    loadMessages(activeId, 0);

    // Sohbeti açmak okundu saymanın doğal yeri.
    fetch("/api/support/admin/thread", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: activeId, action: "read" }),
    })
      .then(() => loadThreads())
      .catch(() => {});

    const timer = window.setInterval(() => {
      loadMessages(activeId);
    }, ACTIVE_THREAD_POLL_MS);

    return () => window.clearInterval(timer);
  }, [authenticated, activeId, loadMessages, loadThreads]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const reply = async (event) => {
    event.preventDefault();

    const text = draft.trim();
    if (!text || !activeId) return;

    setSending(true);
    setDraft("");

    try {
      const response = await fetch("/api/support/admin/thread", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: activeId, message: text }),
      });

      if (!response.ok) {
        setDraft(text);
        setNotice("Mesaj gönderilemedi.");
        return;
      }

      await loadMessages(activeId);
      loadThreads();
    } catch {
      setDraft(text);
      setNotice("Mesaj gönderilemedi.");
    } finally {
      setSending(false);
    }
  };

  const closeThread = async () => {
    if (!activeId) return;

    await fetch("/api/support/admin/thread", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: activeId, action: "close" }),
    }).catch(() => {});

    loadThreads();
  };

  /* ------------------------------ bildirim ----------------------------- */

  useEffect(() => {
    if (!authenticated) return;

    const supported =
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      "PushManager" in window &&
      "Notification" in window;

    if (!supported) {
      setPushState((current) => ({ ...current, supported: false }));
      return;
    }

    let cancelled = false;

    (async () => {
      const response = await fetch("/api/support/admin/push", { cache: "no-store" }).catch(
        () => null,
      );
      const data = await response?.json().catch(() => null);

      let subscribed = false;
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        subscribed = Boolean(await registration?.pushManager.getSubscription());
      } catch {
        subscribed = false;
      }

      if (!cancelled) {
        setPushState({
          supported: true,
          configured: Boolean(data?.configured),
          subscribed,
          busy: false,
        });
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [authenticated]);

  const enableNotifications = async () => {
    setPushState((current) => ({ ...current, busy: true }));
    setNotice("");

    try {
      const keyResponse = await fetch("/api/support/admin/push", { cache: "no-store" });
      const keyData = await keyResponse.json();

      if (!keyData?.publicKey) {
        setNotice("Bildirim anahtarları sunucuda tanımlı değil.");
        return;
      }

      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        setNotice("Bildirim izni verilmedi. Tarayıcı ayarlarından açabilirsiniz.");
        return;
      }

      // Kayıt üretimde otomatik yapılıyor; panelde geliştirme ortamında da
      // çalışsın diye burada da güvenceye alınıyor.
      await navigator.serviceWorker.register("/sw.js?v=sahneva-sw-v3", {
        scope: "/",
        updateViaCache: "none",
      });
      const registration = await navigator.serviceWorker.ready;

      const existing = await registration.pushManager.getSubscription();
      const subscription =
        existing ??
        (await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(keyData.publicKey),
        }));

      const saveResponse = await fetch("/api/support/admin/push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subscription: subscription.toJSON() }),
      });

      if (!saveResponse.ok) {
        setNotice("Abonelik kaydedilemedi.");
        return;
      }

      setPushState((current) => ({ ...current, subscribed: true }));
      setNotice("Bu cihaz artık yeni mesajlarda bildirim alacak.");
    } catch {
      setNotice("Bildirim kurulumu tamamlanamadı.");
    } finally {
      setPushState((current) => ({ ...current, busy: false }));
    }
  };

  const sendTestNotification = async () => {
    setNotice("");
    const response = await fetch("/api/support/admin/push", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "test" }),
    }).catch(() => null);

    const data = await response?.json().catch(() => null);

    setNotice(
      data?.ok
        ? `Deneme bildirimi ${data.sent} cihaza gönderildi.`
        : "Deneme bildirimi gönderilemedi.",
    );
  };

  /* ------------------------------- görünüm ----------------------------- */

  if (checking) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <span className="text-sm text-slate-500">Yükleniyor…</span>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="mx-auto max-w-sm px-4 py-16">
        <h1 className="text-2xl font-bold text-slate-900">Canlı Destek Paneli</h1>
        <span className="mt-2 block text-sm text-slate-600">
          Devam etmek için yönetici parolasını girin.
        </span>

        <form onSubmit={login} className="mt-6 space-y-3">
          <label htmlFor="support-password" className="sr-only">
            Parola
          </label>
          <input
            id="support-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
          />
          {loginError ? (
            <span className="block text-sm font-medium text-rose-600" role="alert">
              {loginError}
            </span>
          ) : null}
          <button
            type="submit"
            className="w-full rounded-xl bg-[#6d28d9] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5b21b6]"
          >
            Giriş yap
          </button>
        </form>
      </div>
    );
  }

  const activeThread = threads.find((thread) => thread.id === activeId) ?? null;
  const totalUnread = threads.reduce((sum, thread) => sum + (thread.agentUnread ?? 0), 0);

  return (
    <div className="mx-auto flex h-dvh max-w-6xl flex-col px-3 py-3">
      <header className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-bold text-slate-900">Canlı Destek</h1>
          {totalUnread > 0 ? (
            <span className="rounded-full bg-rose-500 px-2 py-0.5 text-xs font-bold text-white">
              {totalUnread}
            </span>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {pushState.supported && pushState.configured ? (
            pushState.subscribed ? (
              <button
                type="button"
                onClick={sendTestNotification}
                className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800"
              >
                <BellRing aria-hidden="true" className="h-3.5 w-3.5" />
                Bildirim açık · dene
              </button>
            ) : (
              <button
                type="button"
                onClick={enableNotifications}
                disabled={pushState.busy}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#6d28d9] px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-60"
              >
                <Bell aria-hidden="true" className="h-3.5 w-3.5" />
                Bu cihaza bildirim aç
              </button>
            )
          ) : null}

          <button
            type="button"
            onClick={loadThreads}
            aria-label="Listeyi yenile"
            className="rounded-lg border border-slate-300 p-1.5 text-slate-600 hover:bg-slate-100"
          >
            <RefreshCw aria-hidden="true" className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={logout}
            aria-label="Çıkış yap"
            className="rounded-lg border border-slate-300 p-1.5 text-slate-600 hover:bg-slate-100"
          >
            <LogOut aria-hidden="true" className="h-3.5 w-3.5" />
          </button>
        </div>
      </header>

      {notice ? (
        <div className="mb-3 rounded-lg bg-slate-100 px-3 py-2 text-xs text-slate-700">
          {notice}
        </div>
      ) : null}

      <div className="grid min-h-0 flex-1 gap-3 md:grid-cols-[18rem_1fr]">
        <aside
          className={`min-h-0 overflow-y-auto rounded-xl border border-slate-200 bg-white ${
            activeId ? "hidden md:block" : "block"
          }`}
        >
          {threads.length === 0 ? (
            <span className="block px-3 py-6 text-center text-sm text-slate-500">
              Henüz sohbet yok.
            </span>
          ) : (
            <ul className="divide-y divide-slate-100">
              {threads.map((thread) => (
                <li key={thread.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(thread.id)}
                    className={`flex w-full flex-col items-start gap-0.5 px-3 py-2.5 text-left transition hover:bg-slate-50 ${
                      thread.id === activeId ? "bg-violet-50" : ""
                    }`}
                  >
                    <span className="flex w-full items-center justify-between gap-2">
                      <span className="truncate text-sm font-semibold text-slate-900">
                        {thread.name || "İsimsiz"}
                      </span>
                      {thread.agentUnread > 0 ? (
                        <span className="shrink-0 rounded-full bg-rose-500 px-1.5 text-xs font-bold text-white">
                          {thread.agentUnread}
                        </span>
                      ) : null}
                    </span>
                    <span className="truncate text-xs text-slate-500">
                      {thread.contact || thread.page || "—"}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {formatTimestamp(thread.updatedAt)}
                      {thread.closed ? " · kapalı" : ""}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </aside>

        <section
          className={`flex min-h-0 flex-col rounded-xl border border-slate-200 bg-white ${
            activeId ? "flex" : "hidden md:flex"
          }`}
        >
          {activeThread ? (
            <>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 px-3 py-2">
                <div className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-slate-900">
                    {activeThread.name || "İsimsiz"}
                    {activeThread.contact ? ` · ${activeThread.contact}` : ""}
                  </span>
                  <span className="block truncate text-xs text-slate-500">
                    {activeThread.locale?.toUpperCase()} · {activeThread.page || "—"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveId(null)}
                    className="rounded-lg border border-slate-300 px-2 py-1 text-xs text-slate-600 md:hidden"
                  >
                    Liste
                  </button>
                  <button
                    type="button"
                    onClick={closeThread}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-2 py-1 text-xs text-slate-600 hover:bg-slate-100"
                  >
                    <Check aria-hidden="true" className="h-3 w-3" />
                    Kapat
                  </button>
                </div>
              </div>

              <div ref={scrollRef} className="min-h-0 flex-1 space-y-2 overflow-y-auto bg-slate-50 px-3 py-3">
                {messages.map((entry, index) => (
                  <div
                    key={`${entry.at}-${index}`}
                    className={`flex ${entry.role === "agent" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] whitespace-pre-wrap break-words rounded-2xl px-3 py-2 text-sm ${
                        entry.role === "agent"
                          ? "bg-[#6d28d9] text-white"
                          : entry.role === "system"
                            ? "bg-violet-100 text-violet-900"
                            : "bg-white text-slate-800 ring-1 ring-slate-200"
                      }`}
                    >
                      {entry.text}
                      <span
                        className={`mt-1 block text-[11px] ${
                          entry.role === "agent" ? "text-violet-200" : "text-slate-400"
                        }`}
                      >
                        {formatTimestamp(entry.at)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={reply} className="flex items-end gap-2 border-t border-slate-200 px-3 py-2">
                <label htmlFor="support-reply" className="sr-only">
                  Cevabınız
                </label>
                <textarea
                  id="support-reply"
                  rows={2}
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      reply(event);
                    }
                  }}
                  placeholder="Cevabınızı yazın…"
                  maxLength={1500}
                  className="max-h-32 min-h-[2.75rem] flex-1 resize-none rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
                />
                <button
                  type="submit"
                  disabled={sending || !draft.trim()}
                  aria-label="Gönder"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6d28d9] text-white transition hover:bg-[#5b21b6] disabled:bg-slate-300"
                >
                  <Send aria-hidden="true" className="h-4 w-4" />
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center px-4 py-10">
              <span className="text-sm text-slate-500">
                Soldan bir sohbet seçin.
              </span>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

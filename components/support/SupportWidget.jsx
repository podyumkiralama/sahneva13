"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Download, MessageCircle, Paperclip, Send, X } from "lucide-react";

import {
  WHATSAPP_URL,
  getPrivacyPath,
  getSupportDictionary,
} from "@/lib/support/dictionary";
import {
  FILE_ACCEPT_ATTRIBUTE,
  MAX_FILE_SIZE,
  resolveFileType,
} from "@/lib/support/fileTypes";
import { isWithinBusinessHours } from "@/lib/support/hours";

const STORAGE_KEY = "sahneva_support_session";

// Açıkken hızlı, kapalıyken seyrek yoklama. Kapalı durumdaki yoklama, cevabı
// bekleyip sekmeyi arka plana atan ziyaretçinin rozeti görmesi için var.
const POLL_OPEN_MS = 4000;
const POLL_IDLE_MS = 20000;
// Hareketsiz sohbette arka plan isteği sonsuza kadar sürmesin.
const IDLE_TIMEOUT_MS = 20 * 60 * 1000;

function readSession() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    return parsed?.id && parsed?.token ? parsed : null;
  } catch {
    return null;
  }
}

function writeSession(session) {
  try {
    if (session) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // Gizli sekmede depolama kapalı olabilir; sohbet yine de bu oturum
    // boyunca bellekte çalışır.
  }
}

function formatTime(at, locale) {
  try {
    return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : locale, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(at));
  } catch {
    return "";
  }
}

function formatFileSize(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

export default function SupportWidget({ locale = "tr", attachments = false }) {
  const dictionary = useMemo(() => getSupportDictionary(locale), [locale]);
  const isRtl = locale === "ar";

  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [pending, setPending] = useState([]);
  const [unread, setUnread] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [online, setOnline] = useState(true);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [draft, setDraft] = useState("");
  const [attachment, setAttachment] = useState(null);
  const fileInputRef = useRef(null);

  const cursorRef = useRef(0);
  const lastActivityRef = useRef(0);
  const openRef = useRef(false);
  const sessionRef = useRef(null);
  // Yoklamalar sıraya diziliyor: zamanlayıcının turu ile mesaj gönderiminin
  // tetiklediği tur aynı anda çalışırsa ikisi de aynı imleçten okur ve mesaj
  // listeye iki kez eklenirdi.
  const pollChainRef = useRef(null);
  const scrollRef = useRef(null);
  const draftRef = useRef(null);

  openRef.current = open;
  sessionRef.current = session;

  useEffect(() => {
    setOnline(isWithinBusinessHours());
    lastActivityRef.current = Date.now();

    const stored = readSession();
    if (stored) {
      setSession(stored);
      cursorRef.current = stored.cursor ?? 0;
    }
  }, []);

  /* ----------------------------- yoklama ----------------------------- */

  const runPoll = useCallback(async () => {
    const active = sessionRef.current;
    if (!active) return;

    try {
      const response = await fetch(`/api/support/chat?since=${cursorRef.current}`, {
        headers: {
          "x-support-conversation": active.id,
          "x-support-token": active.token,
        },
        cache: "no-store",
      });

      if (response.status === 401) {
        // Sohbet saklama süresi dolmuş; yeni sohbet açılabilsin diye temizle.
        writeSession(null);
        setSession(null);
        setMessages([]);
        setPending([]);
        cursorRef.current = 0;
        return;
      }

      if (!response.ok) return;

      const data = await response.json();
      if (!data?.ok) return;

      setOnline(Boolean(data.online));

      if (Array.isArray(data.messages) && data.messages.length > 0) {
        setMessages((current) => [...current, ...data.messages]);
        setPending([]);
        cursorRef.current = data.cursor;
        lastActivityRef.current = Date.now();

        writeSession({ ...active, cursor: data.cursor });

        const fromAgent = data.messages.filter((entry) => entry.role === "agent").length;
        if (fromAgent > 0 && !openRef.current) {
          setUnread((current) => current + fromAgent);
        }
      }
    } catch {
      // Ağ hatası geçici kabul edilir; bir sonraki tur yeniden dener.
    }
  }, []);

  const poll = useCallback(() => {
    const previous = pollChainRef.current ?? Promise.resolve();
    const next = previous.then(runPoll, runPoll);
    pollChainRef.current = next.catch(() => {});
    return next;
  }, [runPoll]);

  useEffect(() => {
    if (!session) return undefined;

    let timer = null;

    const tick = async () => {
      const idle = Date.now() - lastActivityRef.current > IDLE_TIMEOUT_MS;

      if (document.visibilityState === "visible" && (openRef.current || !idle)) {
        await poll();
      }

      timer = window.setTimeout(tick, openRef.current ? POLL_OPEN_MS : POLL_IDLE_MS);
    };

    timer = window.setTimeout(tick, openRef.current ? POLL_OPEN_MS : POLL_IDLE_MS);

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [session, poll, open]);

  /* ------------------------------ gönderim ---------------------------- */

  const errorMessageFor = useCallback(
    (code) => {
      if (code === "rate_limited") return dictionary.errorRate;
      if (code === "contact_required") return dictionary.errorContact;
      if (code === "name_required" || code === "message_required") {
        return dictionary.errorRequired;
      }
      if (code === "not_configured") return dictionary.unavailable;
      return dictionary.errorGeneric;
    },
    [dictionary],
  );

  const startConversation = useCallback(async () => {
    const trimmedName = name.trim();
    const trimmedMessage = draft.trim();

    if (!trimmedName || !trimmedMessage) {
      setError(dictionary.errorRequired);
      return;
    }
    if (!online && !contact.trim()) {
      setError(dictionary.errorContact);
      return;
    }

    setBusy(true);
    setError("");

    try {
      const response = await fetch("/api/support/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          name: trimmedName,
          contact: contact.trim(),
          message: trimmedMessage,
          page: window.location.pathname,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.ok) {
        setError(errorMessageFor(data?.error));
        return;
      }

      const fresh = { id: data.id, token: data.token, cursor: data.cursor };
      cursorRef.current = data.cursor;
      lastActivityRef.current = Date.now();

      writeSession(fresh);
      setSession(fresh);
      setMessages(data.messages ?? []);
      setDraft("");
      setOnline(Boolean(data.online));
    } catch {
      setError(dictionary.errorGeneric);
    } finally {
      setBusy(false);
    }
  }, [contact, dictionary, draft, errorMessageFor, locale, name, online]);

  /**
   * Dosya bizim sunucumuza uğramıyor: uçtan yalnızca kısa ömürlü, tek bir
   * yola kilitli bir yükleme adresi alınıp doğrudan depoya gönderiliyor.
   */
  const uploadAttachment = useCallback(
    async (file, activeSession) => {
      const contentType = resolveFileType(file);

      const ticketResponse = await fetch("/api/support/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: activeSession.id,
          token: activeSession.token,
          name: file.name,
          type: contentType,
          size: file.size,
        }),
      });

      const ticket = await ticketResponse.json().catch(() => null);
      if (!ticketResponse.ok || !ticket?.uploadUrl) {
        throw new Error(ticket?.error ?? "upload_failed");
      }

      const putResponse = await fetch(ticket.uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": contentType },
        body: file,
      });

      if (!putResponse.ok) throw new Error("upload_failed");

      // Depo, kaydettiği gerçek yolu yanıtta bildiriyorsa onu kullan:
      // istediğimiz ad ile saklanan ad birbirinden ayrılırsa dosya
      // sonradan bulunamaz hale geliyor.
      let storedPath = ticket.pathname;
      try {
        const stored = await putResponse.clone().json();
        if (typeof stored?.pathname === "string" && stored.pathname) {
          storedPath = stored.pathname;
        }
      } catch {
        // Yanıt JSON değilse istenen yol geçerli kabul edilir.
      }

      return { path: storedPath, name: file.name, type: contentType, size: file.size };
    },
    [],
  );

  const sendMessage = useCallback(async () => {
    const text = draft.trim();
    const file = attachment;
    if ((!text && !file) || !session) return;

    setBusy(true);
    setError("");
    setDraft("");
    setAttachment(null);
    setPending((current) => [
      ...current,
      { text, at: Date.now(), file: file ? { name: file.name, size: file.size } : null },
    ]);

    try {
      let uploaded = null;
      if (file) {
        uploaded = await uploadAttachment(file, session);
      }

      const response = await fetch("/api/support/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: session.id,
          token: session.token,
          message: text,
          file: uploaded,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.ok) {
        setPending([]);
        setDraft(text);
        setAttachment(file);
        setError(errorMessageFor(data?.error));
        return;
      }

      lastActivityRef.current = Date.now();
      // Kendi mesajımızın sunucudaki kopyası da bu yoklamayla geliyor;
      // bekleyen kopya orada temizleniyor.
      await poll();
    } catch (uploadError) {
      setPending([]);
      setDraft(text);
      setAttachment(file);
      setError(
        uploadError?.message === "file_too_large"
          ? dictionary.errorFileTooLarge
          : uploadError?.message === "type_not_allowed"
            ? dictionary.errorFileType
            : dictionary.errorGeneric,
      );
    } finally {
      setBusy(false);
    }
  }, [attachment, dictionary, draft, errorMessageFor, poll, session, uploadAttachment]);

  /**
   * Dosya özel olarak saklandığı için doğrudan bağlantıyla açılmıyor;
   * jetonla okunup tarayıcıya indirtiliyor.
   */
  const downloadAttachment = useCallback(
    async (file) => {
      const active = sessionRef.current;
      if (!active) return;

      try {
        const response = await fetch(
          `/api/support/file?path=${encodeURIComponent(file.path)}`,
          {
            headers: {
              "x-support-conversation": active.id,
              "x-support-token": active.token,
            },
            cache: "no-store",
          },
        );

        if (!response.ok) throw new Error("download_failed");

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = file.name || "dosya";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
      } catch {
        setError(dictionary.errorGeneric);
      }
    },
    [dictionary],
  );

  const pickAttachment = useCallback(
    (event) => {
      const file = event.target.files?.[0];
      event.target.value = "";
      if (!file) return;

      if (file.size > MAX_FILE_SIZE) {
        setError(dictionary.errorFileTooLarge);
        return;
      }
      // Tarayıcı türü boş bırakmış olabilir; uzantıdan tamamlanıyor.
      if (!resolveFileType(file)) {
        setError(dictionary.errorFileType);
        return;
      }

      setError("");
      setAttachment(file);
    },
    [dictionary],
  );

  /* -------------------------------- görünüm --------------------------- */

  useEffect(() => {
    if (!open) return;
    setUnread(0);
    lastActivityRef.current = Date.now();
    const frame = window.requestAnimationFrame(() => draftRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (!open || !scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, pending, open]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const onDraftKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (session) sendMessage();
      else startConversation();
    }
  };

  const subtitle = online ? dictionary.subtitleOnline : dictionary.subtitleOffline;

  return (
    <div
      className="mobile-fixed-bottom-start fixed bottom-4 left-4 z-[70] print:hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {open ? (
        <section
          role="dialog"
          aria-label={dictionary.title}
          className="flex h-[min(32rem,calc(100dvh-2rem))] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <header className="flex items-start justify-between gap-3 bg-gradient-to-r from-[#6d28d9] to-[#4f46e5] px-4 py-3">
            <div className="min-w-0">
              <span className="block text-sm font-bold text-white">
                {dictionary.title}
              </span>
              <span className="mt-0.5 flex items-center gap-1.5 text-xs text-violet-100">
                <span
                  aria-hidden="true"
                  className={`inline-block h-2 w-2 shrink-0 rounded-full ${
                    online ? "bg-emerald-400" : "bg-amber-300"
                  }`}
                />
                <span className="truncate">{subtitle}</span>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={dictionary.closeLabel}
              className="-me-1 inline-flex min-h-12 min-w-12 shrink-0 items-center justify-center rounded-lg text-white/90 transition hover:bg-white/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
            </button>
          </header>

          {session ? (
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-3 py-4"
            >
              {messages.map((entry, index) => (
                <Bubble
                  key={`${entry.at}-${index}`}
                  entry={entry}
                  locale={locale}
                  dictionary={dictionary}
                  session={session}
                  onDownload={downloadAttachment}
                />
              ))}
              {pending.map((entry, index) => (
                <Bubble
                  key={`pending-${index}`}
                  entry={{ ...entry, role: "visitor" }}
                  locale={locale}
                  dictionary={dictionary}
                  muted
                />
              ))}
            </div>
          ) : (
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              <Field
                id="sahneva-support-name"
                label={dictionary.nameLabel}
                value={name}
                onChange={setName}
                placeholder={dictionary.namePlaceholder}
                autoComplete="name"
                maxLength={80}
              />
              <Field
                id="sahneva-support-contact"
                label={dictionary.contactLabel}
                value={contact}
                onChange={setContact}
                placeholder={dictionary.contactPlaceholder}
                autoComplete="tel"
                maxLength={120}
                hint={online ? "" : dictionary.contactHintOffline}
              />
              <span className="block text-xs leading-relaxed text-slate-500">
                {dictionary.consent}{" "}
                <a
                  href={getPrivacyPath(locale)}
                  className="font-medium text-violet-700 underline"
                >
                  {dictionary.consentLink}
                </a>
              </span>
            </div>
          )}

          <div className="border-t border-slate-200 bg-white px-3 py-3">
            {error ? (
              <span className="mb-2 block text-xs font-medium text-rose-600" role="alert">
                {error}
              </span>
            ) : null}

            {attachment ? (
              <div className="mb-2 flex items-center gap-2 rounded-lg bg-violet-50 px-2.5 py-1.5">
                <Paperclip aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-violet-700" />
                <span className="min-w-0 flex-1 truncate text-xs text-violet-900">
                  {attachment.name}
                </span>
                <span className="shrink-0 text-[11px] text-violet-700">
                  {formatFileSize(attachment.size)}
                </span>
                <button
                  type="button"
                  onClick={() => setAttachment(null)}
                  aria-label={dictionary.removeFile}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-violet-700 hover:bg-violet-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  <X aria-hidden="true" className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : null}

            <div className="flex items-end gap-2">
              <label htmlFor="sahneva-support-draft" className="sr-only">
                {dictionary.messageLabel}
              </label>

              {/* Dosya ancak sohbet açıldıktan sonra eklenebiliyor: yükleme
                  izni sohbetin jetonuna bağlı. */}
              {attachments && session ? (
                <>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={FILE_ACCEPT_ATTRIBUTE}
                    onChange={pickAttachment}
                    className="sr-only"
                    tabIndex={-1}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    aria-label={dictionary.attachFile}
                    title={dictionary.attachFile}
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-violet-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  >
                    <Paperclip aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
                  </button>
                </>
              ) : null}
              <textarea
                id="sahneva-support-draft"
                ref={draftRef}
                rows={2}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={onDraftKeyDown}
                placeholder={dictionary.messagePlaceholder}
                maxLength={1500}
                className="max-h-32 min-h-12 flex-1 resize-none rounded-xl border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 sm:text-sm"
              />
              <button
                type="button"
                disabled={busy || (!draft.trim() && !attachment)}
                onClick={() => (session ? sendMessage() : startConversation())}
                aria-label={session ? dictionary.sendButton : dictionary.startButton}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6d28d9] text-white transition hover:bg-[#5b21b6] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                <Send aria-hidden="true" className="h-4 w-4 rtl:-scale-x-100" strokeWidth={2.2} />
              </button>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-center text-xs font-medium text-slate-500 no-underline hover:text-violet-700"
            >
              {dictionary.whatsappFallback}
            </a>
          </div>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative inline-flex min-h-12 items-center gap-2 rounded-full bg-[#6d28d9] py-3 ps-4 pe-5 text-sm font-semibold text-white shadow-xl transition hover:bg-[#5b21b6] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2"
        >
          <MessageCircle aria-hidden="true" className="h-5 w-5" strokeWidth={2.2} />
          <span>{dictionary.launcher}</span>
          {unread > 0 ? (
            <span
              aria-label={dictionary.newMessages}
              className="absolute -top-1 -right-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 text-xs font-bold text-white"
            >
              {unread}
            </span>
          ) : null}
        </button>
      )}
    </div>
  );
}

function Bubble({ entry, locale, dictionary, session, onDownload, muted = false }) {
  const isVisitor = entry.role === "visitor";
  const isSystem = entry.role === "system";

  if (isSystem) {
    return (
      <div className="mx-auto max-w-[95%] rounded-xl bg-violet-50 px-3 py-2 text-center text-xs leading-relaxed text-violet-900">
        {entry.text}
      </div>
    );
  }

  return (
    <div className={`flex ${isVisitor ? "justify-end" : "justify-start"}`}>
      <div className="max-w-[85%]">
        <div
          className={`whitespace-pre-wrap break-words rounded-2xl px-3 py-2 text-sm leading-relaxed ${
            isVisitor
              ? `bg-[#6d28d9] text-white ${muted ? "opacity-60" : ""}`
              : "bg-white text-slate-800 shadow-sm ring-1 ring-slate-200"
          }`}
        >
          {entry.file ? (
            <span className="mb-1 block">
              <span
                className={`flex items-center gap-1.5 text-xs ${
                  isVisitor ? "text-violet-100" : "text-slate-500"
                }`}
              >
                <Paperclip aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{entry.file.name}</span>
              </span>

              {/* Karşı taraftan gelen dosya indirilebilir; ziyaretçinin
                  kendi gönderdiği dosya zaten kendisinde. */}
              {!isVisitor && session ? (
                <button
                  type="button"
                  onClick={() => onDownload?.(entry.file)}
                  className="mt-1.5 inline-flex min-h-11 items-center gap-1 rounded-lg bg-[#6d28d9] px-3 py-2 text-xs font-semibold text-white hover:bg-[#5b21b6] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  <Download aria-hidden="true" className="h-3 w-3" />
                  {dictionary.downloadFile}
                </button>
              ) : null}
            </span>
          ) : null}
          {entry.text}
        </div>
        <span
          className={`mt-1 block text-[11px] text-slate-400 ${
            isVisitor ? "text-end" : "text-start"
          }`}
        >
          {isVisitor ? dictionary.visitorName : dictionary.agentName}
          {entry.at ? ` · ${formatTime(entry.at, locale)}` : ""}
        </span>
      </div>
    </div>
  );
}

function Field({ id, label, value, onChange, placeholder, autoComplete, maxLength, hint }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-semibold text-slate-700">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 sm:text-sm"
      />
      {hint ? <span className="mt-1 block text-xs text-slate-500">{hint}</span> : null}
    </div>
  );
}

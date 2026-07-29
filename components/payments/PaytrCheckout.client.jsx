"use client";

import { useState } from "react";

// PayTR ödeme formu bu origin üzerinden iframe içinde açılır.
// CSP frame-src listesinde izinli olmalı (lib/security/buildCsp.js).
const PAYTR_IFRAME_BASE = "https://www.paytr.com/odeme/guvenli";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  reference: "",
  address: "",
  amount: "",
};

const FIELD_CLASS =
  "mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:focus:border-neutral-100";

const LABEL_CLASS = "block text-sm font-semibold text-neutral-800 dark:text-neutral-200";

export default function PaytrCheckout({ minAmount = "100.00", maxAmount = "250000.00", testMode = true }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState([]);
  const [pending, setPending] = useState(false);
  const [session, setSession] = useState(null);

  const updateField = (field) => (event) => {
    setForm((previous) => ({ ...previous, [field]: event.target.value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (pending) return;

    setPending(true);
    setErrors([]);

    try {
      const response = await fetch("/api/paytr/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, terms }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.ok) {
        setErrors(data?.errors ?? ["Ödeme formu açılamadı. Lütfen tekrar deneyin."]);
        return;
      }

      setSession({ token: data.token, merchantOid: data.merchantOid, amount: data.amount });
    } catch {
      setErrors(["Bağlantı kurulamadı. İnternet bağlantınızı kontrol edip tekrar deneyin."]);
    } finally {
      setPending(false);
    }
  }

  function resetSession() {
    setSession(null);
    setErrors([]);
  }

  if (session) {
    return (
      <div className="space-y-4">
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm dark:border-neutral-800 dark:bg-neutral-900/60">
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">
            Ödenecek tutar: {session.amount} TL
          </p>
          <p className="mt-1 text-neutral-600 dark:text-neutral-400">
            İşlem numarası: <span className="font-mono">{session.merchantOid}</span>
          </p>
          {testMode ? (
            <p className="mt-2 font-semibold text-amber-700 dark:text-amber-500">
              Test modu açık — bu işlemde gerçek tahsilat yapılmaz.
            </p>
          ) : null}
        </div>

        <iframe
          title="PayTR güvenli ödeme formu"
          src={`${PAYTR_IFRAME_BASE}/${session.token}`}
          className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800"
          style={{ height: "clamp(640px, 82vh, 920px)" }}
        />

        <button
          type="button"
          onClick={resetSession}
          className="text-sm font-semibold text-neutral-600 underline underline-offset-4 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          Bilgileri değiştir / yeni ödeme başlat
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="space-y-4">
      {errors.length > 0 ? (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800"
        >
          <ul className="list-inside list-disc space-y-1">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={LABEL_CLASS} htmlFor="paytr-name">
            Ad Soyad <span aria-hidden="true">*</span>
          </label>
          <input
            id="paytr-name"
            name="name"
            type="text"
            required
            minLength={3}
            maxLength={60}
            autoComplete="name"
            value={form.name}
            onChange={updateField("name")}
            className={FIELD_CLASS}
          />
        </div>

        <div>
          <label className={LABEL_CLASS} htmlFor="paytr-email">
            E-posta <span aria-hidden="true">*</span>
          </label>
          <input
            id="paytr-email"
            name="email"
            type="email"
            required
            maxLength={100}
            autoComplete="email"
            value={form.email}
            onChange={updateField("email")}
            className={FIELD_CLASS}
          />
          <p className="mt-1 text-xs text-neutral-500">Ödeme dekontu bu adrese gönderilir.</p>
        </div>

        <div>
          <label className={LABEL_CLASS} htmlFor="paytr-phone">
            Telefon <span aria-hidden="true">*</span>
          </label>
          <input
            id="paytr-phone"
            name="phone"
            type="tel"
            required
            maxLength={20}
            autoComplete="tel"
            placeholder="0532 000 00 00"
            value={form.phone}
            onChange={updateField("phone")}
            className={FIELD_CLASS}
          />
        </div>

        <div>
          <label className={LABEL_CLASS} htmlFor="paytr-reference">
            Teklif / Referans No
          </label>
          <input
            id="paytr-reference"
            name="reference"
            type="text"
            maxLength={40}
            placeholder="Örn. TKL-2026-118"
            value={form.reference}
            onChange={updateField("reference")}
            className={FIELD_CLASS}
          />
          <p className="mt-1 text-xs text-neutral-500">
            Size ilettiğimiz teklif numarası. Bilmiyorsanız boş bırakabilirsiniz.
          </p>
        </div>
      </div>

      <div>
        <label className={LABEL_CLASS} htmlFor="paytr-address">
          Fatura Adresi
        </label>
        <textarea
          id="paytr-address"
          name="address"
          rows={2}
          maxLength={400}
          autoComplete="street-address"
          value={form.address}
          onChange={updateField("address")}
          className={FIELD_CLASS}
        />
      </div>

      <div>
        <label className={LABEL_CLASS} htmlFor="paytr-amount">
          Ödenecek Tutar (TL) <span aria-hidden="true">*</span>
        </label>
        <input
          id="paytr-amount"
          name="amount"
          type="number"
          inputMode="decimal"
          required
          step="0.01"
          min={minAmount}
          max={maxAmount}
          placeholder="15000.00"
          value={form.amount}
          onChange={updateField("amount")}
          className={FIELD_CLASS}
        />
        <p className="mt-1 text-xs text-neutral-500">
          Teklifte anlaştığımız tutarı yazın. En az {minAmount} TL, en fazla {maxAmount} TL.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="paytr-terms"
          name="terms"
          type="checkbox"
          required
          checked={terms}
          onChange={(event) => setTerms(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-neutral-400"
        />
        <label htmlFor="paytr-terms" className="text-sm text-neutral-700 dark:text-neutral-300">
          Girdiğim tutarın Sahneva ile mutabık kalınan hizmet bedeli olduğunu, bilgilerimin ödeme
          işlemi için PayTR Ödeme Hizmetleri A.Ş. ile paylaşılacağını kabul ediyorum.
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 sm:w-auto"
      >
        {pending ? "Ödeme formu hazırlanıyor…" : "Güvenli ödemeye geç"}
      </button>

      <p aria-live="polite" className="sr-only">
        {pending ? "Ödeme formu hazırlanıyor" : ""}
      </p>
    </form>
  );
}

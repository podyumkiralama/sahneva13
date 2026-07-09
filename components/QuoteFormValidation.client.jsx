"use client";

import { useEffect, useRef, useState } from "react";

const SUMMARY_MESSAGES = {
  tr: (count) =>
    `Form gönderilemedi: ${count} alan eksik veya hatalı. Lütfen işaretli alanları kontrol edin.`,
  en: (count) =>
    `The form could not be submitted: ${count} field(s) are missing or invalid. Please review the highlighted fields.`,
  ru: (count) =>
    `Форма не отправлена: заполните или исправьте отмеченные поля (${count}).`,
  ar: (count) => `تعذّر إرسال النموذج: يرجى تصحيح الحقول المحددة (${count}).`,
};

const ERROR_CLASS = "mt-2 text-xs font-semibold text-red-600";

function attachFieldError(field) {
  field.setAttribute("aria-invalid", "true");
  if (!field.id) return;

  const errorId = `${field.id}-error`;
  let errorEl = document.getElementById(errorId);
  if (!errorEl) {
    errorEl = document.createElement("p");
    errorEl.id = errorId;
    errorEl.className = ERROR_CLASS;
    field.parentElement?.appendChild(errorEl);
  }
  errorEl.textContent = field.validationMessage;

  if (field.dataset.baseDescribedby === undefined) {
    field.dataset.baseDescribedby = field.getAttribute("aria-describedby") ?? "";
  }
  const base = field.dataset.baseDescribedby;
  field.setAttribute("aria-describedby", base ? `${base} ${errorId}` : errorId);
}

function clearFieldError(field) {
  field.removeAttribute("aria-invalid");
  if (!field.id) return;

  document.getElementById(`${field.id}-error`)?.remove();
  const base = field.dataset.baseDescribedby;
  if (base !== undefined) {
    if (base) field.setAttribute("aria-describedby", base);
    else field.removeAttribute("aria-describedby");
  }
}

/**
 * İlerlemeli iyileştirme: içine yerleştirildiği formun yerleşik (native)
 * validasyonunu ekran okuyucular için erişilebilir hale getirir.
 * Gönderim engellendiğinde role="alert" bölgesine özet mesaj yazar,
 * geçersiz alanları aria-invalid + alana özel hata metniyle işaretler.
 */
export default function QuoteFormValidation({ locale = "tr" }) {
  const regionRef = useRef(null);
  const [message, setMessage] = useState("");
  const summaryFor = SUMMARY_MESSAGES[locale] ?? SUMMARY_MESSAGES.tr;

  useEffect(() => {
    const form = regionRef.current?.closest("form");
    if (!form) return;

    let syncQueued = false;

    const validatableFields = () =>
      Array.from(form.elements).filter(
        (el) => el.willValidate && el.type !== "hidden" && el.getAttribute("aria-hidden") !== "true"
      );

    const syncInvalidState = () => {
      let invalidCount = 0;
      for (const field of validatableFields()) {
        if (field.validity.valid) {
          clearFieldError(field);
        } else {
          invalidCount += 1;
          attachFieldError(field);
        }
      }
      setMessage(invalidCount > 0 ? summaryFor(invalidCount) : "");
    };

    // "invalid" olayı geçersiz her kontrol için ayrı ayrı tetiklenir;
    // mikro görevle tek bir toplu güncellemeye indirgenir.
    const handleInvalid = () => {
      if (syncQueued) return;
      syncQueued = true;
      queueMicrotask(() => {
        syncQueued = false;
        syncInvalidState();
      });
    };

    const handleFieldEdit = (event) => {
      const field = event.target;
      if (field.getAttribute?.("aria-invalid") === "true" && field.validity?.valid) {
        clearFieldError(field);
      }
    };

    const handleValidSubmit = () => setMessage("");

    form.addEventListener("invalid", handleInvalid, true);
    form.addEventListener("input", handleFieldEdit);
    form.addEventListener("change", handleFieldEdit);
    form.addEventListener("submit", handleValidSubmit);

    return () => {
      form.removeEventListener("invalid", handleInvalid, true);
      form.removeEventListener("input", handleFieldEdit);
      form.removeEventListener("change", handleFieldEdit);
      form.removeEventListener("submit", handleValidSubmit);
    };
  }, [summaryFor]);

  return (
    <div
      ref={regionRef}
      role="alert"
      className={
        message
          ? "p-4 bg-red-50 border border-red-200 rounded-xl text-sm font-semibold text-red-800"
          : "sr-only"
      }
    >
      {message}
    </div>
  );
}

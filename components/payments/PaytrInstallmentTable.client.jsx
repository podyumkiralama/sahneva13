"use client";

import { useEffect, useRef } from "react";

// PayTR'ın "Taksit Tablosu" embed script'i. Panelin verdiği kod statiktir
// (tutar URL'e gömülür), bu yüzden kullanıcı tutarı her değiştirdiğinde
// script'i debounce ile yeniden oluşturup DOM'a yeniden ekliyoruz.
// CSP script-src ve Trusted Types allowlist'i için:
// lib/security/buildCsp.js ve lib/security/inlineScripts.js.
const WIDGET_ENDPOINT = "https://www.paytr.com/odeme/taksit-tablosu/v2";
const AMOUNT_PATTERN = /^\d{1,9}([.,]\d{1,2})?$/;
const DEBOUNCE_MS = 600;

// PayTR'ın panelden verdiği stil bloğu birebir; sınıf adları script'in
// ürettiği HTML'e sabit kodlanmış, CSS Modülü ile eşleşmezler.
const WIDGET_STYLE = `
  #paytr_taksit_tablosu{clear:both;font-size:12px;max-width:1200px;text-align:center;font-family:Arial, sans-serif;}
  #paytr_taksit_tablosu::before{display:table;content:" ";}
  #paytr_taksit_tablosu::after{content:"";clear:both;display:table;}
  .taksit-tablosu-wrapper{margin:5px;width:280px;padding:12px;cursor:default;text-align:center;display:inline-block;border:1px solid #e1e1e1;}
  .taksit-logo img{max-height:28px;padding-bottom:10px;}
  .taksit-tutari-text{float:left;width:126px;color:#a2a2a2;margin-bottom:5px;}
  .taksit-tutar-wrapper{display:inline-block;background-color:#f7f7f7;}
  .taksit-tutar-wrapper:hover{background-color:#e8e8e8;}
  .taksit-tutari{float:left;width:126px;padding:6px 0;color:#474747;border:2px solid #ffffff;}
  .taksit-tutari-bold{font-weight:bold;}
  @media all and (max-width: 600px){.taksit-tablosu-wrapper{margin:5px 0;}}
`;

export default function PaytrInstallmentTable({ merchantId, installmentToken, amount }) {
  const tableRef = useRef(null);
  const scriptRef = useRef(null);

  useEffect(() => {
    const table = tableRef.current;
    if (!table || !merchantId || !installmentToken) return;

    scriptRef.current?.remove();
    scriptRef.current = null;
    table.innerHTML = "";

    const trimmed = (amount ?? "").trim();
    if (!AMOUNT_PATTERN.test(trimmed)) return;

    const timer = setTimeout(() => {
      const params = new URLSearchParams({
        token: installmentToken,
        merchant_id: merchantId,
        amount: trimmed,
        taksit: "0",
        tumu: "0",
      });
      const script = document.createElement("script");
      script.src = `${WIDGET_ENDPOINT}?${params.toString()}`;
      table.after(script);
      scriptRef.current = script;
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [amount, merchantId, installmentToken]);

  useEffect(() => () => scriptRef.current?.remove(), []);

  if (!merchantId || !installmentToken) return null;

  return (
    <div className="mt-3">
      <style dangerouslySetInnerHTML={{ __html: WIDGET_STYLE }} />
      <div id="paytr_taksit_tablosu" ref={tableRef} />
    </div>
  );
}

"use client";

import { useEffect } from "react";

/**
 * PayTR, ödeme bitince iframe'i merchant_ok_url / merchant_fail_url adresine
 * yönlendirir; yani sonuç sayfası ödeme çerçevesinin içinde açılır.
 * Bu bileşen sonucu üst pencereye taşır. Üst pencere bizimle aynı origin
 * olduğu için erişim serbesttir, yine de tarayıcı kısıtlarına karşı korumalı.
 */
export default function FrameBreakout() {
  useEffect(() => {
    try {
      if (window.top && window.top !== window.self) {
        window.top.location.replace(window.location.href);
      }
    } catch {
      // Üst pencereye erişilemiyorsa sayfa iframe içinde görüntülenmeye devam eder.
    }
  }, []);

  return null;
}

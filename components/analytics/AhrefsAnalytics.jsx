// Ahrefs Web Analytics — sunucudan gelen HTML'in <head> bölümüne giriyor.
//
// Neden onay kutusunun arkasında değil: betik tarayıcıda çerez, localStorage
// veya sessionStorage kullanmıyor (yalnızca sendBeacon/XHR ile toplu sayfa
// görüntüleme gönderiyor), yani ziyaretçinin cihazına hiçbir şey yazmıyor.
// Çerez kullanan GA4 ve Clarity, AnalyticsConsentWrapper içinde onaydan sonra
// yükleniyor; ayrım bilinçli.
//
// Neden istemci tarafında sonradan eklenmiyor: Ahrefs kurulumu doğrularken
// sayfanın sunucudan dönen kaynağına bakıyor. Betik tarayıcıda sonradan
// eklendiğinde panelde "Script isn't found" görünüyor ve ölçüm yalnızca
// onay veren ziyaretçilerin küçük bir bölümünü kapsıyor.
//
// Betik kaynağı CSP script-src/connect-src listesinde (lib/security/buildCsp.js).
// Trusted Types burada devreye girmiyor: kısıtlama JavaScript'ten DOM'a yazılan
// betikler için geçerli, HTML'de doğrudan yer alan etiket için değil.

const AHREFS_ANALYTICS_KEY =
  process.env.NEXT_PUBLIC_AHREFS_ANALYTICS_KEY || "Kv+8z9eTm0xVGfUOcrQp3A";

// Ön izleme dağıtımlarındaki gezinmeler canlı site verisine karışmasın.
// Yerel geliştirmeyi betiğin kendisi zaten atlıyor (localhost/127.0.0.1).
const IS_PREVIEW =
  process.env.VERCEL_ENV === "preview" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";

export default function AhrefsAnalytics() {
  if (!AHREFS_ANALYTICS_KEY || IS_PREVIEW) return null;

  return (
    <script
      src="https://analytics.ahrefs.com/analytics.js"
      data-key={AHREFS_ANALYTICS_KEY}
      async
    />
  );
}

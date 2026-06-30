const CLOUDFLARE_WEB_ANALYTICS_TOKEN = "555df96d305a4fa8928568c4ba27fdfd";
const SHOULD_LOAD_ANALYTICS =
  process.env.VERCEL_ENV === "production" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ||
  process.env.NEXT_PUBLIC_ENABLE_CLOUDFLARE_ANALYTICS === "true";

export default function CloudflareWebAnalytics() {
  if (!SHOULD_LOAD_ANALYTICS) return null;

  // External script — no nonce needed. Allowed by the https://static.cloudflareinsights.com
  // host entry in the CSP script-src allowlist set by middleware.js.
  return (
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({
        token: CLOUDFLARE_WEB_ANALYTICS_TOKEN,
      })}
    />
  );
}

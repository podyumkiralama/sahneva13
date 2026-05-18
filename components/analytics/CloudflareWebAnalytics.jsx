import { STATIC_CSP_NONCE } from "@/lib/security/staticCsp";

const CLOUDFLARE_WEB_ANALYTICS_TOKEN = "555df96d305a4fa8928568c4ba27fdfd";
const SHOULD_LOAD_ANALYTICS =
  process.env.VERCEL_ENV === "production" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ||
  process.env.NEXT_PUBLIC_ENABLE_CLOUDFLARE_ANALYTICS === "true";

export default function CloudflareWebAnalytics({ nonce = STATIC_CSP_NONCE }) {
  if (!SHOULD_LOAD_ANALYTICS) return null;

  return (
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({
        token: CLOUDFLARE_WEB_ANALYTICS_TOKEN,
      })}
      nonce={nonce}
    />
  );
}

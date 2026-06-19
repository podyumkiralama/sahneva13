# CSP Inline Script Audit

Date: 2026-06-20

This audit documents the inline script surfaces that matter for `CSP_STRICT_SCRIPTS=true`. The flag is intended for preview and staged testing first. Default production behavior remains unchanged unless the flag is explicitly enabled.

## Classification

| Category | Meaning |
| --- | --- |
| A | Safe executable inline script moved to a first-party external file |
| B | Non-critical inline script disabled or replaced under strict mode |
| C | SEO structured data kept in HTML and documented |
| D | Framework hydration/runtime inline payload kept because the app depends on it |
| E | Needs a larger architecture change before production enforcement |

## Findings

| Source | Inline surface | Required? | Category | Decision |
| --- | --- | --- | --- | --- |
| `components/security/TrustedTypesPolicy.jsx` | Executable Trusted Types bootstrap script | Yes, for `require-trusted-types-for 'script'` compatibility | A | Moved to `/js/trusted-types-policy.js`. It is now loaded as a first-party external script allowed by `script-src 'self'`. |
| `components/performance/SpeculationRules.jsx` | Inline `type="speculationrules"` JSON | No, it is only a prefetch hint | B | Rendered in default mode, but disabled when `CSP_STRICT_SCRIPTS=true`. This avoids weakening strict script CSP for a non-critical optimization. |
| `components/seo/JsonLd.jsx` and page-level JSON-LD | Inline `application/ld+json` structured data | Yes, for SEO and rich-result eligibility | C | Kept. It is not executable JavaScript. A stable hash list is not maintainable across dynamic route data, and a request nonce would push static/ISR pages toward dynamic rendering. |
| Next.js App Router / RSC payloads | Generated inline hydration and flight payloads such as `self.__next_f.push(...)` | Yes, for client navigation and hydration | D / E | Kept. Do not patch generated framework internals. True strict production enforcement needs a framework-supported nonce/hash strategy or a larger rendering architecture change. |
| `components/analytics/CloudflareWebAnalytics.jsx` | External Cloudflare script | Optional analytics | Not an inline blocker | Kept as an external allowlisted script source. |
| Layout style tags | Inline CSS/style payloads | Yes, for current rendering | Out of script scope | Left unchanged because `style-src 'unsafe-inline'` intentionally remains enabled for now. |

## Current strict-mode behavior

- `CSP_STRICT_SCRIPTS` not set: enforced CSP keeps `script-src 'unsafe-inline'` and `script-src-elem 'unsafe-inline'`.
- `CSP_STRICT_SCRIPTS=true`: enforced CSP removes `'unsafe-inline'` from `script-src` and `script-src-elem`.
- `script-src-attr 'none'`, Trusted Types, and the report-only policy remain in place.

## Remaining blocker

`CSP_STRICT_SCRIPTS=true` is still not production-ready until a browser preview run is clean. The known blocker class is framework and SEO inline payloads, especially Next App Router hydration/RSC payloads and inline JSON-LD. The safe production path is to keep strict mode behind the environment flag while testing Vercel Preview pages for console CSP violations.

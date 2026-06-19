// Static/ISR pages cannot safely rotate a per-request nonce without changing
// the rendering and caching model. This value is only a stable marker for
// first-party static scripts that are already covered by the CSP allowlist; do
// not treat it as an XSS boundary or use it to bless user-controlled scripts.
export const STATIC_CSP_NONCE = "c2FobmV2YS1zdGF0aWMtY3Nw";

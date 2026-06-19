/* eslint-disable @next/next/no-sync-scripts */

export default function TrustedTypesPolicy() {
  return (
    // Trusted Types must be available before third-party loaders touch script URL
    // sinks, so this tiny first-party bootstrap is intentionally loaded early.
    <script
      id="trusted-types-policy"
      src="/js/trusted-types-policy.js"
    />
  );
}

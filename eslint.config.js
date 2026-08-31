// eslint.config.mjs veya eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import nextConfig from "eslint-config-next/core-web-vitals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 1) Ignore klasörleri
  {
    ignores: ["**/.next/**", "**/.open-next/**", "node_modules/**"],
  },

  // 2) Temel JS ayarları
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    extends: [js.configs.recommended],
  },

  // 3) Next + React önerilen kurallar
  // eslint-config-next flat yapı, şu şekilde ekleniyor:
  ...nextConfig,

  // 5) Proje özel kurallar
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    settings: { react: { version: "detect" } },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/refs": "off",
      "@next/next/no-img-element": "off",
      "react-hooks/static-components": "off",
      "react-hooks/exhaustive-deps": "off",
      "react/jsx-no-target-blank": "off",
      // Next.js 16 build sirasinda lint calistirmadigi icin build komutu bu
      // klavye, odak ve form kurallarini da zorunlu olarak calistirir.
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/iframe-has-title": "error",
      "jsx-a11y/interactive-supports-focus": "error",
      "jsx-a11y/label-has-associated-control": "error",
      "jsx-a11y/mouse-events-have-key-events": "error",
      "jsx-a11y/no-static-element-interactions": "error",
      "jsx-a11y/tabindex-no-positive": "error",
      // İstersen erişilebilirlik için bunları açarsın:
      // "react-hooks/rules-of-hooks": "error",
      // "react-hooks/exhaustive-deps": "warn",
    },
  },
]);

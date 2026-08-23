"use client";

import { useEffect } from "react";

import { createSahnevaWebMcpTools } from "@/lib/webmcp/browserTools";

/**
 * Progressive enhancement for the experimental WebMCP browser API.
 * Human-facing forms and links remain the fallback when the API is unavailable.
 */
export default function WebMcpRuntime({ locale = "en" }) {
  useEffect(() => {
    const modelContext = document.modelContext;
    if (
      globalThis.isSecureContext !== true ||
      typeof modelContext?.registerTool !== "function"
    ) {
      return undefined;
    }

    const controller = new AbortController();
    let disposed = false;

    // The deferred setup avoids a duplicate development registration during
    // React Strict Mode's setup-cleanup-setup check.
    const timerId = window.setTimeout(async () => {
      const tools = createSahnevaWebMcpTools({
        locale,
        origin: window.location.origin,
      });

      for (const tool of tools) {
        if (disposed || controller.signal.aborted) break;

        try {
          await modelContext.registerTool(tool, { signal: controller.signal });
        } catch (error) {
          if (disposed || controller.signal.aborted) break;
          if (process.env.NODE_ENV !== "production") {
            console.warn(`WebMCP tool registration failed: ${tool.name}`, error);
          }
        }
      }
    }, 0);

    return () => {
      disposed = true;
      window.clearTimeout(timerId);
      controller.abort();
    };
  }, [locale]);

  return null;
}

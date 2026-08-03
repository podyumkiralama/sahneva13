"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { normalizeSearchText } from "@/lib/glossary";
import { normalizeEnSearchText } from "@/lib/enGlossary";

/**
 * Locale-specific copy and normalizer.
 *
 * The normalizer cannot be passed in as a prop (server components may not send
 * functions across the RSC boundary), so it is selected here from `locale`.
 */
const LOCALES = {
  tr: {
    inputId: "sozluk-arama",
    normalize: normalizeSearchText,
    label: "Terim ara",
    placeholder: "Örn: pixel pitch, asma hoparlör, rüzgâr…",
    clear: "Temizle",
    idle: (total) => `${total} terim listeleniyor.`,
    matched: (total, visible) => `${total} terimden ${visible} tanesi eşleşti.`,
    empty: "Eşleşen terim yok. Farklı bir kelime deneyin veya bize sorun.",
  },
  en: {
    inputId: "glossary-search",
    normalize: normalizeEnSearchText,
    label: "Search terms",
    placeholder: "e.g. pixel pitch, line array, wind load…",
    clear: "Clear",
    idle: (total) => `Showing ${total} terms.`,
    matched: (total, visible) => `${visible} of ${total} terms matched.`,
    empty: "No matching term. Try another word or ask us directly.",
  },
};

/**
 * Sozluk sayfasi icin canli arama.
 *
 * Terim verisi prop olarak GECIRILMEZ. Karlar zaten sunucuda basiliyor; ayni
 * metni bir de client component prop'u olarak gondermek RSC payload'ini
 * (sayfa halihazirda ~300 KB) ikiye katlardi. Bunun yerine bu bilesen mount
 * aninda DOM'dan bir arama indeksi cikarir ve eslesmeyen kartlari `hidden`
 * ile gizler.
 *
 * Sonuclari:
 *  - JavaScript calismazsa butun terimler gorunur kalir (progressive enhancement)
 *  - Sunucu HTML'i degismedigi icin SEO tarafinda hicbir sey kaybolmaz
 *  - Ek veri serilestirmesi yok
 */
export default function GlossarySearch({ totalCount, locale = "tr" }) {
  const strings = LOCALES[locale] ?? LOCALES.tr;
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(totalCount);
  const indexRef = useRef(null);
  const inputRef = useRef(null);

  // DOM indeksi: her kart icin gorunur metnin normalize edilmis hali.
  const buildIndex = useCallback(() => {
    const cards = Array.from(document.querySelectorAll("[data-glossary-item]"));
    return {
      cards: cards.map((element) => ({
        element,
        slug: element.id,
        haystack: strings.normalize(element.textContent ?? ""),
      })),
      sections: Array.from(document.querySelectorAll("[data-glossary-section]")),
      indexLinks: Array.from(document.querySelectorAll("[data-glossary-index-item]")),
    };
  }, [strings]);

  useEffect(() => {
    if (!indexRef.current) {
      indexRef.current = buildIndex();
    }
    const { cards, sections, indexLinks } = indexRef.current;
    const needle = strings.normalize(query);

    const matchedSlugs = new Set();
    for (const card of cards) {
      const isMatch = !needle || card.haystack.includes(needle);
      card.element.hidden = !isMatch;
      if (isMatch) matchedSlugs.add(card.slug);
    }

    // Icinde eslesen terim kalmayan kategori bolumunu tamamen gizle.
    for (const section of sections) {
      section.hidden = !section.querySelector("[data-glossary-item]:not([hidden])");
    }

    // A-Z dizini kartlarla ayni suzgeci uygular; capa hedefi gizliyse baglanti da gizlenir.
    for (const link of indexLinks) {
      link.hidden = !matchedSlugs.has(link.dataset.glossaryIndexItem);
    }

    setVisibleCount(matchedSlugs.size);
  }, [query, buildIndex, strings]);

  // Bilesen sokulurse (client-side gezinme) gizlenen dugumleri geri ac.
  useEffect(
    () => () => {
      const current = indexRef.current;
      if (!current) return;
      for (const card of current.cards) card.element.hidden = false;
      for (const section of current.sections) section.hidden = false;
      for (const link of current.indexLinks) link.hidden = false;
    },
    [],
  );

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <div className="mx-auto max-w-3xl">
      <label
        htmlFor={strings.inputId}
        className="block text-sm font-bold uppercase tracking-[0.16em] text-white/60"
      >
        {strings.label}
      </label>
      <div className="relative mt-3">
        <input
          ref={inputRef}
          id={strings.inputId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={strings.placeholder}
          autoComplete="off"
          className="min-h-[52px] w-full rounded-2xl border border-white/15 bg-white/10 px-5 pr-28 text-base font-medium text-white placeholder:text-white/45 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {query ? (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2 top-1/2 inline-flex min-h-[40px] -translate-y-1/2 items-center rounded-xl bg-white/15 px-4 text-sm font-bold text-white transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
          >
            {strings.clear}
          </button>
        ) : null}
      </div>

      <p aria-live="polite" className="mt-3 min-h-[24px] text-sm font-semibold text-white/70">
        {query
          ? visibleCount > 0
            ? strings.matched(totalCount, visibleCount)
            : strings.empty
          : strings.idle(totalCount)}
      </p>
    </div>
  );
}

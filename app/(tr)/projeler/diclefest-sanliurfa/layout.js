const DICLEFEST_TIGHT_SPACING_CSS = `
  .diclefest-tight-scope > main > section {
    padding-top: 2.75rem !important;
    padding-bottom: 2.75rem !important;
  }

  .diclefest-tight-scope > main > section:first-of-type {
    padding-top: 6.75rem !important;
    padding-bottom: 2.5rem !important;
  }

  /* Case study bölümlerinde metin üstte, görseller altta aksın. */
  .diclefest-tight-scope > main section > div[class*="lg:grid-cols-2"] {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 1.35rem !important;
  }

  .diclefest-tight-scope > main section > div[class*="lg:grid-cols-2"] > div:first-child {
    order: 1 !important;
    max-width: 980px !important;
  }

  .diclefest-tight-scope > main section > div[class*="lg:grid-cols-2"] > div:last-child {
    order: 2 !important;
    width: 100% !important;
  }

  .diclefest-tight-scope > main section > div[class*="lg:grid-cols-2"] > div:last-child.grid {
    display: grid !important;
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    gap: 0.85rem !important;
  }

  .diclefest-tight-scope > main section > div[class*="lg:grid-cols-2"] > div:last-child.grid > figure:first-child:nth-last-child(3),
  .diclefest-tight-scope > main section > div[class*="lg:grid-cols-2"] > div:last-child.grid > figure:first-child:nth-last-child(3) ~ figure {
    grid-column: auto !important;
  }

  .diclefest-tight-scope > main figure {
    align-self: start !important;
    border-radius: 1.25rem !important;
  }

  .diclefest-tight-scope > main figure figcaption {
    padding: 0.6rem 0.9rem !important;
    font-size: 0.8125rem !important;
    line-height: 1.42 !important;
  }

  .diclefest-tight-scope > main figure [class*="aspect-"] {
    aspect-ratio: 16 / 9 !important;
    margin-bottom: 0 !important;
  }

  .diclefest-tight-scope > main figure img {
    object-fit: cover !important;
    background: transparent !important;
  }

  .diclefest-tight-scope > main .grid {
    align-items: start !important;
  }

  .diclefest-tight-scope > main .grid.gap-5 {
    gap: 0.85rem !important;
  }

  .diclefest-tight-scope > main .grid.gap-8 {
    gap: 1.25rem !important;
  }

  .diclefest-tight-scope > main .grid.gap-10 {
    gap: 1.5rem !important;
  }

  .diclefest-tight-scope > main .mb-8 {
    margin-bottom: 1.15rem !important;
  }

  .diclefest-tight-scope > main .mt-10 {
    margin-top: 1.5rem !important;
  }

  .diclefest-tight-scope > main .space-y-5 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 0.9rem !important;
  }

  @media (max-width: 1023px) {
    .diclefest-tight-scope > main section > div[class*="lg:grid-cols-2"] > div:last-child.grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }
  }

  @media (max-width: 767px) {
    .diclefest-tight-scope > main > section {
      padding-top: 2.15rem !important;
      padding-bottom: 2.15rem !important;
    }

    .diclefest-tight-scope > main > section:first-of-type {
      padding-top: 5.75rem !important;
      padding-bottom: 2.1rem !important;
    }

    .diclefest-tight-scope > main section > div[class*="lg:grid-cols-2"] > div:last-child.grid {
      grid-template-columns: minmax(0, 1fr) !important;
    }

    .diclefest-tight-scope > main figure [class*="aspect-"] {
      aspect-ratio: 4 / 3 !important;
    }

    .diclefest-tight-scope > main figure figcaption {
      padding: 0.52rem 0.8rem !important;
      font-size: 0.78rem !important;
    }
  }
`;

export default function DicleFestProjectLayout({ children }) {
  return (
    <div className="diclefest-tight-scope">
      {children}
      <style dangerouslySetInnerHTML={{ __html: DICLEFEST_TIGHT_SPACING_CSS }} />
    </div>
  );
}

const DICLEFEST_TIGHT_SPACING_CSS = `
  .diclefest-tight-scope > main > section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .diclefest-tight-scope > main > section:first-of-type {
    padding-top: 6.75rem !important;
    padding-bottom: 2.75rem !important;
  }

  .diclefest-tight-scope > main figure {
    align-self: start !important;
    border-radius: 1.35rem !important;
  }

  .diclefest-tight-scope > main figure figcaption {
    padding: 0.65rem 1rem !important;
    font-size: 0.8125rem !important;
    line-height: 1.45 !important;
  }

  .diclefest-tight-scope > main figure [class*="aspect-"] {
    aspect-ratio: 16 / 10 !important;
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
    gap: 0.875rem !important;
  }

  .diclefest-tight-scope > main .grid.gap-8 {
    gap: 1.5rem !important;
  }

  .diclefest-tight-scope > main .grid.gap-10 {
    gap: 2rem !important;
  }

  .diclefest-tight-scope > main .mb-8 {
    margin-bottom: 1.35rem !important;
  }

  .diclefest-tight-scope > main .mt-10 {
    margin-top: 1.75rem !important;
  }

  .diclefest-tight-scope > main .space-y-5 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 1rem !important;
  }

  @media (max-width: 767px) {
    .diclefest-tight-scope > main > section {
      padding-top: 2.35rem !important;
      padding-bottom: 2.35rem !important;
    }

    .diclefest-tight-scope > main > section:first-of-type {
      padding-top: 5.75rem !important;
      padding-bottom: 2.25rem !important;
    }

    .diclefest-tight-scope > main figure [class*="aspect-"] {
      aspect-ratio: 4 / 3 !important;
    }

    .diclefest-tight-scope > main figure figcaption {
      padding: 0.55rem 0.85rem !important;
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

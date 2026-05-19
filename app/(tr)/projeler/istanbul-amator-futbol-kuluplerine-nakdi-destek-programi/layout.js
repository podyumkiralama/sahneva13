const AMATOR_FOOTBALL_PROJECT_SPACING_CSS = `
  .amator-football-project-scope {
    background: #0B1120;
  }

  .amator-football-project-scope main section .grid {
    align-items: start !important;
  }

  .amator-football-project-scope main figure {
    height: fit-content !important;
    align-self: start !important;
  }

  .amator-football-project-scope main figure [class*="aspect-"] {
    margin-bottom: 0 !important;
  }

  .amator-football-project-scope main figure figcaption {
    padding: 0.75rem 1rem !important;
    font-size: 0.8125rem !important;
    line-height: 1.45 !important;
  }

  .amator-football-project-scope main section[aria-labelledby="galeri"] .grid {
    gap: 1rem !important;
    align-items: start !important;
  }

  .amator-football-project-scope main section[aria-labelledby="galeri"] figure {
    border-radius: 1.25rem !important;
  }

  .amator-football-project-scope main section[aria-labelledby="galeri"] figure [class*="aspect-"] {
    aspect-ratio: 16 / 10 !important;
  }

  .amator-football-project-scope main section[aria-labelledby="galeri"] figure img,
  .amator-football-project-scope main section[aria-labelledby="galeri"] figure [class*="object-contain"] {
    object-fit: cover !important;
    background: transparent !important;
  }

  .amator-football-project-scope main section[aria-labelledby="galeri"] figure figcaption {
    min-height: 4.75rem !important;
    display: flex !important;
    align-items: center !important;
  }

  .amator-football-project-scope main section:not([aria-labelledby="galeri"]) figure [class*="aspect-[9/16]"] {
    aspect-ratio: 16 / 11 !important;
  }

  .amator-football-project-scope main section:not([aria-labelledby="galeri"]) figure [class*="object-contain"] {
    object-fit: cover !important;
    background: transparent !important;
  }

  @media (max-width: 767px) {
    .amator-football-project-scope main section[aria-labelledby="galeri"] .grid {
      gap: 0.85rem !important;
    }

    .amator-football-project-scope main section[aria-labelledby="galeri"] figure [class*="aspect-"] {
      aspect-ratio: 4 / 3 !important;
    }

    .amator-football-project-scope main figure figcaption {
      padding: 0.65rem 0.85rem !important;
      font-size: 0.78rem !important;
    }

    .amator-football-project-scope main section[aria-labelledby="galeri"] figure figcaption {
      min-height: auto !important;
      display: block !important;
    }
  }
`;

export default function AmateurFootballProjectLayout({ children }) {
  return (
    <div className="amator-football-project-scope">
      {children}
      <style dangerouslySetInnerHTML={{ __html: AMATOR_FOOTBALL_PROJECT_SPACING_CSS }} />
    </div>
  );
}

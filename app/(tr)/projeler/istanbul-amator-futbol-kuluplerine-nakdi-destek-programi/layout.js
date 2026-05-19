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

  /* Hero ve özet dışındaki case-study bloklarında büyük boşluk oluşmasın:
     metin üstte, görseller altta tam genişlik aksın. */
  .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) > div[class*="lg:grid-cols-2"] {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 1.35rem !important;
  }

  .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) > div[class*="lg:grid-cols-2"] > div:first-child {
    order: 1 !important;
    max-width: 980px !important;
  }

  .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) > div[class*="lg:grid-cols-2"] > div:last-child {
    order: 2 !important;
    width: 100% !important;
  }

  .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) > div[class*="lg:grid-cols-2"] > div:last-child.grid {
    display: grid !important;
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    gap: 0.95rem !important;
  }

  .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) > div[class*="lg:grid-cols-2"] > div:last-child.grid > figure,
  .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) > div[class*="lg:grid-cols-2"] > div:last-child.grid > figure[class*="col-span"] {
    grid-column: auto !important;
  }

  .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) figure {
    border-radius: 1.25rem !important;
  }

  .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) figure [class*="aspect-"] {
    aspect-ratio: 16 / 9 !important;
  }

  .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) figure img,
  .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) figure [class*="object-contain"] {
    object-fit: cover !important;
    background: transparent !important;
  }

  .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) figure figcaption {
    min-height: 4.25rem !important;
    display: flex !important;
    align-items: center !important;
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

  @media (max-width: 1023px) {
    .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) > div[class*="lg:grid-cols-2"] > div:last-child.grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }
  }

  @media (max-width: 767px) {
    .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) > div[class*="lg:grid-cols-2"] > div:last-child.grid,
    .amator-football-project-scope main section[aria-labelledby="galeri"] .grid {
      grid-template-columns: minmax(0, 1fr) !important;
      gap: 0.85rem !important;
    }

    .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) figure [class*="aspect-"],
    .amator-football-project-scope main section[aria-labelledby="galeri"] figure [class*="aspect-"] {
      aspect-ratio: 4 / 3 !important;
    }

    .amator-football-project-scope main figure figcaption {
      padding: 0.65rem 0.85rem !important;
      font-size: 0.78rem !important;
    }

    .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) figure figcaption,
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

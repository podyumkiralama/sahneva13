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

  /* Hero alanı: başlık çok büyüyüp sağ görseli sıkıştırmasın, kart daha dengeli dursun. */
  .amator-football-project-scope main > section:first-of-type {
    padding-top: clamp(6.25rem, 8vw, 8.25rem) !important;
    padding-bottom: clamp(2.5rem, 5vw, 4.25rem) !important;
  }

  .amator-football-project-scope main > section:first-of-type > div:first-child {
    align-items: center !important;
    gap: clamp(2rem, 4vw, 3.5rem) !important;
  }

  .amator-football-project-scope main > section:first-of-type h1 {
    max-width: 760px !important;
    font-size: clamp(3.4rem, 5.6vw, 5.65rem) !important;
    line-height: 0.98 !important;
    letter-spacing: -0.065em !important;
  }

  .amator-football-project-scope main > section:first-of-type h1 + p {
    max-width: 720px !important;
    margin-top: 1.5rem !important;
    font-size: clamp(1.05rem, 1.35vw, 1.35rem) !important;
    line-height: 1.75 !important;
  }

  .amator-football-project-scope main > section:first-of-type figure {
    width: 100% !important;
    max-width: 840px !important;
    justify-self: end !important;
    border-radius: 1.75rem !important;
  }

  .amator-football-project-scope main > section:first-of-type figure [class*="aspect-"] {
    aspect-ratio: 16 / 8.4 !important;
  }

  .amator-football-project-scope main > section:first-of-type figure img {
    object-fit: cover !important;
    object-position: center center !important;
  }

  .amator-football-project-scope main > section:first-of-type figure figcaption {
    padding: 0.85rem 1.15rem !important;
    font-size: 0.92rem !important;
    line-height: 1.5 !important;
    background: rgba(15, 23, 42, 0.86) !important;
  }

  .amator-football-project-scope main > section:first-of-type > div:first-child + div {
    margin-top: 1.6rem !important;
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

  @media (max-width: 1280px) {
    .amator-football-project-scope main > section:first-of-type h1 {
      font-size: clamp(3rem, 5.2vw, 4.75rem) !important;
    }

    .amator-football-project-scope main > section:first-of-type figure {
      max-width: 760px !important;
    }
  }

  @media (max-width: 1023px) {
    .amator-football-project-scope main > section:first-of-type > div:first-child {
      align-items: start !important;
    }

    .amator-football-project-scope main > section:first-of-type h1 {
      max-width: 900px !important;
      font-size: clamp(2.75rem, 8vw, 4.5rem) !important;
    }

    .amator-football-project-scope main > section:first-of-type figure {
      max-width: none !important;
      justify-self: stretch !important;
    }

    .amator-football-project-scope main section:not(:first-of-type):not([aria-labelledby="proje-ozeti"]):not([aria-labelledby="galeri"]) > div[class*="lg:grid-cols-2"] > div:last-child.grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }
  }

  @media (max-width: 767px) {
    .amator-football-project-scope main > section:first-of-type {
      padding-top: 5.75rem !important;
      padding-bottom: 2.5rem !important;
    }

    .amator-football-project-scope main > section:first-of-type h1 {
      font-size: clamp(2.35rem, 12vw, 3.35rem) !important;
      line-height: 1.04 !important;
      letter-spacing: -0.045em !important;
    }

    .amator-football-project-scope main > section:first-of-type h1 + p {
      font-size: 1rem !important;
      line-height: 1.65 !important;
    }

    .amator-football-project-scope main > section:first-of-type figure [class*="aspect-"] {
      aspect-ratio: 4 / 3 !important;
    }

    .amator-football-project-scope main > section:first-of-type figure figcaption {
      padding: 0.65rem 0.85rem !important;
      font-size: 0.78rem !important;
    }

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

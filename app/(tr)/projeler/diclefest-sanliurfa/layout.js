const DICLEFEST_TIGHT_SPACING_CSS = `
  .diclefest-tight-scope > main > section {
    padding-top: 2.75rem !important;
    padding-bottom: 2.75rem !important;
  }

  .diclefest-tight-scope > main > section:first-of-type {
    padding-top: 6.75rem !important;
    padding-bottom: 2.5rem !important;
  }

  .diclefest-tight-scope > main h1,
  .diclefest-tight-scope > main h2,
  .diclefest-tight-scope > main h3 {
    color: #f8fafc !important;
    text-shadow: 0 1px 18px rgba(2, 6, 23, 0.32) !important;
  }

  .diclefest-tight-scope > main p,
  .diclefest-tight-scope > main li,
  .diclefest-tight-scope > main figcaption {
    color: #dbe6f3 !important;
  }

  .diclefest-tight-scope > main [class*="text-slate-300"],
  .diclefest-tight-scope > main [class*="text-slate-400"] {
    color: #d7e2f0 !important;
  }

  .diclefest-tight-scope > main [class*="text-blue-200"],
  .diclefest-tight-scope > main [class*="text-blue-100"] {
    color: #dbeafe !important;
  }

  .diclefest-tight-scope > main .space-y-5 p,
  .diclefest-tight-scope > main section p {
    font-weight: 500 !important;
    letter-spacing: -0.005em !important;
  }

  .diclefest-tight-scope > main figure figcaption {
    background: rgba(15, 23, 42, 0.82) !important;
  }

  .diclefest-scale-section {
    padding: 3rem 1rem !important;
    background: #0B1120;
  }

  .diclefest-scale-inner {
    max-width: 1280px;
    margin: 0 auto;
  }

  .diclefest-scale-head {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: 1.5rem;
    align-items: end;
  }

  .diclefest-scale-kicker {
    margin: 0;
    color: #dbeafe !important;
    font-size: 0.75rem;
    font-weight: 900;
    letter-spacing: 0.28em;
    text-transform: uppercase;
  }

  .diclefest-scale-title {
    margin: 0.75rem 0 0;
    color: #f8fafc !important;
    font-size: clamp(2rem, 4vw, 3.35rem);
    line-height: 1.05;
    font-weight: 950;
    letter-spacing: -0.04em;
  }

  .diclefest-scale-desc {
    margin: 0;
    color: #d7e2f0 !important;
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 1.75;
  }

  .diclefest-scale-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 0.9rem;
    margin-top: 1.5rem;
  }

  .diclefest-scale-card {
    min-height: 160px;
    border: 1px solid rgba(219, 234, 254, 0.16);
    border-radius: 1.5rem;
    background: rgba(255, 255, 255, 0.06);
    padding: 1.1rem;
    box-shadow: 0 20px 50px rgba(2, 6, 23, 0.24);
  }

  .diclefest-scale-value {
    color: #ffffff !important;
    font-size: clamp(1.8rem, 3vw, 2.75rem);
    font-weight: 950;
    line-height: 1;
    letter-spacing: -0.055em;
  }

  .diclefest-scale-label {
    margin: 0.75rem 0 0;
    color: #dbeafe !important;
    font-size: 0.9rem;
    font-weight: 900;
    line-height: 1.35;
  }

  .diclefest-scale-note {
    margin: 0.55rem 0 0;
    color: #cbd5e1 !important;
    font-size: 0.82rem;
    font-weight: 600;
    line-height: 1.5;
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

  @media (max-width: 1180px) {
    .diclefest-scale-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 1023px) {
    .diclefest-tight-scope > main section > div[class*="lg:grid-cols-2"] > div:last-child.grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }

    .diclefest-scale-head {
      grid-template-columns: minmax(0, 1fr);
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

    .diclefest-scale-section {
      padding: 2.25rem 1rem !important;
    }

    .diclefest-scale-grid {
      grid-template-columns: minmax(0, 1fr);
    }

    .diclefest-scale-card {
      min-height: auto;
    }
  }
`;

const PROJECT_SCALE = [
  {
    value: "25×25 m",
    label: "Dome çadır",
    note: "Festival alanının ana deneyim yapısı olarak konumlandırıldı.",
  },
  {
    value: "800 m²",
    label: "Etkinlik çadırı alanı",
    note: "Teknoloji, deneyim, oyun ve bilgilendirme alanları için planlandı.",
  },
  {
    value: "1.500 m²",
    label: "Podyum, zemin ve sahne",
    note: "Platform, geçiş ve sahne uygulamaları tek saha planıyla yapıldı.",
  },
  {
    value: "150 m²",
    label: "LED ekran",
    note: "Sahne ve görsel deneyim kurgusunda kullanılan ekran altyapısı uygulandı.",
  },
  {
    value: "4 adet",
    label: "Dome içi lazer projeksiyon",
    note: "Dome alanları içinde etkileşimli görsel deneyim noktaları oluşturuldu.",
  },
];

function ProjectScaleSection() {
  return (
    <section className="diclefest-scale-section" aria-labelledby="diclefest-proje-olcegi">
      <div className="diclefest-scale-inner">
        <div className="diclefest-scale-head">
          <div>
            <p className="diclefest-scale-kicker">Sayısal Verilerle Proje Ölçeği</p>
            <h2 id="diclefest-proje-olcegi" className="diclefest-scale-title">
              DicleFest Şanlıurfa saha uygulamasının ölçeği
            </h2>
          </div>
          <p className="diclefest-scale-desc">
            Proje; 25×25 metre dome çadır, 800 m² etkinlik çadırı alanı, 1.500 m² podyum/zemin/sahne uygulaması,
            150 m² LED ekran ve 4 adet dome içi lazer projeksiyon deneyim alanıyla çok noktalı bir açık alan festival operasyonu olarak yönetildi.
          </p>
        </div>

        <div className="diclefest-scale-grid" aria-label="DicleFest Şanlıurfa proje ölçeği verileri">
          {PROJECT_SCALE.map((item) => (
            <article className="diclefest-scale-card" key={item.label}>
              <div className="diclefest-scale-value">{item.value}</div>
              <h3 className="diclefest-scale-label">{item.label}</h3>
              <p className="diclefest-scale-note">{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DicleFestProjectLayout({ children }) {
  return (
    <div className="diclefest-tight-scope">
      {children}
      <ProjectScaleSection />
      <style dangerouslySetInnerHTML={{ __html: DICLEFEST_TIGHT_SPACING_CSS }} />
    </div>
  );
}

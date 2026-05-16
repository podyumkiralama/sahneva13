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

export default function ProjectScaleSection() {
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

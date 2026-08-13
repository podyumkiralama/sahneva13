import Image from "next/image";
import Link from "next/link";

import styles from "./TurkishHomeFieldProof.module.css";

const TECH_CONNECTIONS = [
  {
    code: "01",
    title: "LED ekran ve görüntü",
    detail: "İçerik çıkışı, sinyal dağıtımı ve ekran kurulumu",
    href: "/led-ekran-kiralama",
  },
  {
    code: "02",
    title: "Ses–ışık sistemleri",
    detail: "Mikrofon, line array, sahne ışığı ve operatör",
    href: "/ses-isik-sistemleri",
  },
  {
    code: "03",
    title: "Truss ve taşıyıcı hat",
    detail: "Rigging planı, güvenli askı ve saha yerleşimi",
    href: "/truss-kiralama",
  },
  {
    code: "04",
    title: "Sahne kurulumu",
    detail: "Platform, çatı, backstage ve yükleme planı",
    href: "/sahne-kiralama",
  },
  {
    code: "05",
    title: "Canlı yayın ve saha akışı",
    detail: "Reji, kamera aktarımı, lojistik, kurulum ve söküm",
    href: "/nasil-calisiyoruz",
  },
];

const CORPORATE_FORMATS = [
  {
    code: "01 / LANSMAN",
    title: "Ürün lansmanları",
    description: "LED içerik, konuşmacı akışı ve sahne ışığını aynı teknik reji planında buluşturuyoruz.",
    image: "/img/led/led-wall-urun-lansmani-hybrid-sahneva.webp",
    position: "50% 52%",
  },
  {
    code: "02 / KONGRE",
    title: "Kongre ve zirveler",
    description: "Mikrofon, sunum, kamera ve backstage geçişlerini oturum programına göre yönetiyoruz.",
    image: "/img/blog/kurumsal-etkinlik-ses-backstage.webp",
    position: "50% 50%",
  },
  {
    code: "03 / GALA",
    title: "Gala geceleri",
    description: "Sahne, ışık ve masa düzenini davetli akışı ile mekân teslim saatine göre kuruyoruz.",
    image: "/img/kurumsal/premium/kurumsal-organizasyon-gala-isik-kanit.webp",
    position: "50% 48%",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function TurkishHomeFieldProof() {
  return (
    <div className={styles.root}>
      <section
        className={styles.techSection}
        aria-labelledby="tr-field-proof-tech-title"
        aria-describedby="tr-field-proof-tech-description"
      >
        <div className={styles.shell}>
          <header className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Teknik üretim / saha akışı</p>
              <h2 id="tr-field-proof-tech-title" className={styles.techTitle}>
                Teknik reji ve saha altyapısı
              </h2>
            </div>
            <p id="tr-field-proof-tech-description" className={styles.description}>
              LED ekranın iç/dış mekân seçimini; ses–ışık, canlı yayın, reji, truss ve sahne
              kurulumlarıyla birlikte yönetiyoruz. Jeneratör-yedek güç ile Türkiye geneli nakliye,
              kurulum ve söküm aynı teknik planda netleşir.
            </p>
          </header>

          <div className={styles.techGrid}>
            <figure className={styles.controlPanel}>
              <Image
                src="/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/teknik-reji-canli-kamera-aktarim-kurulumu.webp"
                alt="Canlı kamera aktarımı için kurulan Sahneva teknik reji masası"
                fill
                sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) 56vw, 780px"
                quality={75}
                className={styles.controlImage}
              />
              <div className={styles.signalPath} aria-hidden="true">
                <span>Kamera</span><i /><span>Reji</span><i /><span>Saha çıkışı</span>
              </div>
              <figcaption className={styles.controlCaption}>
                <span>Saha kaydı / teknik reji</span>
                <strong>Canlı kamera aktarımı ve sinyal kontrolü</strong>
              </figcaption>
            </figure>

            <nav className={styles.ledger} aria-label="Teknik sistem bağlantıları">
              <div className={styles.ledgerHeader} aria-hidden="true">
                <span>Hat</span><span>Sistem ve saha kapsamı</span><span>Bağlantı</span>
              </div>
              <ol className={styles.connectionList}>
                {TECH_CONNECTIONS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} prefetch={false} className={styles.connectionLink}>
                      <span className={styles.connectionCode}>{item.code}</span>
                      <span className={styles.connectionCopy}>
                        <strong>{item.title}</strong><span>{item.detail}</span>
                      </span>
                      <span className={styles.arrow}><ArrowIcon /></span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section
        className={styles.corporateSection}
        aria-labelledby="tr-field-proof-corporate-title"
        aria-describedby="tr-field-proof-corporate-description"
      >
        <div className={styles.shell}>
          <header className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Kurumsal prodüksiyon / formatlar</p>
              <h2 id="tr-field-proof-corporate-title" className={styles.corporateTitle}>
                Kurumsal etkinlik formatları
              </h2>
            </div>
            <p id="tr-field-proof-corporate-description" className={styles.description}>
              İçeriği, konuşmacıyı, sahne üzerindeki hareketi ve teknik ekibi etkinliğin gerçek
              akışına göre birlikte planlıyoruz.
            </p>
          </header>

          <ol className={styles.filmStrip} aria-label="Kurumsal etkinlik formatları">
            {CORPORATE_FORMATS.map((format) => (
              <li key={format.code} className={styles.filmFrame}>
                <Image
                  src={format.image}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 767px) calc(100vw - 2rem), 33vw"
                  quality={72}
                  className={styles.filmImage}
                  style={{ objectPosition: format.position }}
                />
                <div className={styles.filmCopy}>
                  <span>{format.code}</span>
                  <h3>{format.title}</h3>
                  <p>{format.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={styles.action}>
            <Link href="/kurumsal-organizasyon" prefetch={false} className={styles.corporateLink}>
              <span>Kurumsal organizasyon kapsamını incele</span><ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

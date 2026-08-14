import Image from "next/image";
import Link from "next/link";

import styles from "./TurkishHomeServices.module.css";

const SERVICES = [
  {
    code: "01 / SAHNE",
    title: "Sahne Kiralama",
    scope: "Modüler sahne · truss · çatı",
    description:
      "Konser, festival ve kurumsal etkinlikler için projeye özel, güvenli sahne sistemleri kuruyoruz.",
    href: "/sahne-kiralama",
    image: "/img/kurumsal/premium/truss-sahne-cati.webp",
    imagePosition: "50% 50%",
  },
  {
    code: "02 / PODYUM",
    title: "Podyum Kiralama",
    scope: "30–90 cm · kaplama · protokol",
    description:
      "Lansman, toplantı ve törenler için ölçüye göre podyum, merdiven ve yüzey kaplama sağlıyoruz.",
    href: "/podyum-kiralama",
    image: "/img/blog/podyum-sahne-profesyonel-etkinlik.webp",
    imagePosition: "54% 50%",
    imageTone: "bright",
  },
  {
    code: "03 / GÖRÜNTÜ",
    title: "LED Ekran Kiralama",
    scope: "P1.9–P2.9 · 3840 Hz · reji",
    description:
      "Fuar ve lansmanlar için LED ekranı taşıyıcı sistem, içerik ve rejiyle planlıyoruz.",
    href: "/led-ekran-kiralama",
    image: "/img/led/led-wall-urun-lansmani-hybrid-sahneva.webp",
    imagePosition: "50% 58%",
  },
  {
    code: "04 / SİNYAL",
    title: "Ses–Işık Sistemleri",
    scope: "Line array · mikrofon · DMX",
    description:
      "Mekâna uygun line array, mikrofon ve sahne ışığını profesyonel operatörlerle yönetiyoruz.",
    href: "/ses-isik-sistemleri",
    image: "/img/ses-isik/hero.webp",
    imagePosition: "50% 48%",
  },
  {
    code: "05 / SAHA",
    title: "Çadır Kiralama",
    scope: "Pagoda · şeffaf · dome",
    description:
      "Açık hava etkinlikleri için zemin, aydınlatma ve profesyonel montaj dahil çadır kuruyoruz.",
    href: "/cadir-kiralama",
    image: "/img/cadir/seffaf.webp",
    imagePosition: "52% 54%",
  },
  {
    code: "06 / ALAN",
    title: "Masa–Sandalye Kiralama",
    scope: "Salon planı · sevk · kurulum",
    description:
      "Davetli sayısı ve servis akışına göre masa, sandalye, örtü, sevk ve yerleşim sağlıyoruz.",
    href: "/masa-sandalye-kiralama",
    image: "/img/sandalye/sandalye-masa-kiralama-sahneva.webp",
    imagePosition: "50% 52%",
    imageTone: "bright",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function TurkishHomeServices() {
  return (
    <section
      className={styles.section}
      aria-labelledby="tr-home-services-title"
      aria-describedby="tr-home-services-description"
    >
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Hizmetler / 06</p>
          <h2 id="tr-home-services-title" className={styles.title}>
            Teknik Kiralama Hizmetleri
          </h2>
        </div>

        <p id="tr-home-services-description" className={styles.introduction}>
          <strong>
            Türkiye genelinde sahne kiralama, podyum kiralama, LED ekran
            kiralama, ses–ışık sistemleri, truss kiralama, çadır kiralama ve
            masa–sandalye kiralama hizmetlerini;
          </strong>{" "}
          keşif, lojistik, kurulum, teknik reji ve söküm dahil tek teknik ekip
          altında yürütüyoruz.
        </p>
      </header>

      <ol className={styles.matrix}>
        {SERVICES.map((service) => (
          <li
            key={service.href}
            className={`${styles.item} ${service.imageTone === "bright" ? styles.imageBright : ""}`}
          >
            <Link
              href={service.href}
              prefetch={false}
              className={styles.link}
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 639px) 40vw, (max-width: 1023px) 50vw, 34vw"
                quality={68}
                loading="lazy"
                className={styles.image}
                style={{ objectPosition: service.imagePosition }}
              />

              <span className={styles.copyPlane}>
                <span className={styles.code}>{service.code}</span>
                <span className={styles.name}>{service.title}</span>
                <span className={styles.scope}>{service.scope}</span>
                <span className={styles.description}>{service.description}</span>
              </span>

              <span className={styles.arrow} aria-hidden="true">
                <ArrowIcon />
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

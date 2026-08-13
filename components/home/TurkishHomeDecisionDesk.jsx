import Image from "next/image";
import Link from "next/link";

import { FAQ_ITEMS } from "@/lib/faqData";

import styles from "./TurkishHomeDecisionDesk.module.css";

const OFFER_ROWS = [
  {
    title: "Ölçü ve taşıyıcı planı",
    text: "Alan ölçüsü, zemin, görüş mesafesi ve yük noktaları aynı teknik plana işlenir.",
  },
  {
    title: "Ekipman ve teknik ekip",
    text: "Sahne, LED ekran, ses–ışık, reji ve saha ekibi ihtiyaca göre kalem kalem belirtilir.",
  },
  {
    title: "Sevk, kurulum ve söküm",
    text: "Araç planı, mekân giriş saati, montaj sırası, teknik operasyon ve alan teslimi takvimlenir.",
  },
  {
    title: "Fiyat ve ödeme",
    text: "Kapsam, teklif geçerliliği, ödeme planı ve seçilen ödeme yöntemi yazılı olarak netleşir.",
  },
];

const CARD_LOGOS = [
  { src: "/img/odeme/visa-logo.svg", alt: "Visa", width: 32, height: 32 },
  { src: "/img/odeme/mastercard-logo.svg", alt: "Mastercard", width: 32, height: 32 },
  { src: "/img/odeme/troy-logo.svg", alt: "TROY", width: 60, height: 28 },
];

const WHATSAPP_URL =
  "https://wa.me/905453048671?text=" +
  encodeURIComponent(
    "Merhaba, etkinliğim için teknik kapsamı netleştirip teklif almak istiyorum.",
  ) +
  "&utm_source=homepage&utm_medium=decision_desk";

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function TurkishHomeDecisionDesk() {
  return (
    <div className={styles.root}>
      <section
        id="teklif-al"
        className={styles.offerSection}
        aria-labelledby="home-offer-title"
      >
        <div className={styles.offerSheet}>
          <header className={styles.offerHeader}>
            <p className={styles.code}>Teknik teklif / kapsam föyü</p>
            <h2 id="home-offer-title">Teklif dosyasında ne netleşir?</h2>
            <p>
              Teklif, ekipman listesinin yanında sahadaki uygulamanın kapsamını,
              sırasını ve sorumluluklarını da gösterir.
            </p>
            <dl>
              <div>
                <dt>Dosya</dt>
                <dd>Etkinlik teknik kapsamı</dd>
              </div>
              <div>
                <dt>Süreç</dt>
                <dd>Keşiften alan teslimine</dd>
              </div>
            </dl>
          </header>

          <ol className={styles.offerRows} aria-label="Teklif dosyası kapsamı">
            {OFFER_ROWS.map((row, index) => (
              <li key={row.title}>
                <span className={styles.rowNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.checkbox} aria-hidden="true">✓</span>
                <span className={styles.rowCopy}>
                  <strong>{row.title}</strong>
                  <span>{row.text}</span>
                </span>
              </li>
            ))}
          </ol>

          <footer className={styles.offerFooter}>
            <p>
              Şehir dışı projelerde sevk, ekip ve saha takvimi ilk dosyada
              açıklanır. Türkiye geneli çalışma biçimimizi{" "}
              <Link href="/turkiyede-etkinlik-cozum-ortagi">
                çözüm ortaklığı sayfasında
              </Link>{" "}
              inceleyebilirsiniz.
            </p>
            <div className={styles.actions}>
              <Link href="/iletisim" className={styles.primary}>
                Teklif talebi oluştur <Arrow />
              </Link>
              <a href="tel:+905453048671">Telefonla görüş</a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                WhatsApp’tan yaz
                <span className={styles.srOnly}> — yeni sekmede açılır</span>
              </a>
            </div>
          </footer>
        </div>
      </section>

      <section
        className={styles.decisionSection}
        aria-labelledby="home-process-payment-title"
      >
        <div className={styles.decisionInner}>
          <header className={styles.decisionHeader}>
            <p className={styles.code}>Karar masası / süreç notları</p>
            <h2 id="home-process-payment-title">Süreç ve ödeme hakkında</h2>
          </header>

          <div className={styles.decisionGrid}>
            <div className={styles.faqColumn}>
              <div className={styles.columnHeader}>
                <h3>Kiralama süreci</h3>
                <Link href="/sss">Tüm sorular</Link>
              </div>
              <div className={styles.faqList}>
                {FAQ_ITEMS.map((item, index) => (
                  <details key={item.slug}>
                    <summary>
                      <span className={styles.faqNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item.question}</span>
                      <span className={styles.detailMark} aria-hidden="true" />
                    </summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <aside className={styles.payment} aria-labelledby="home-payment-title">
              <p className={styles.code}>Ödeme notu / teklif sonrası</p>
              <h3 id="home-payment-title">Kartla ve taksitli ödeme seçeneği</h3>
              <p>
                Yazılı teklif onaylandıktan sonra tutarı havaleyle veya kredi ve
                banka kartıyla ödeyebilirsiniz. Kart işlemleri 3D Secure
                korumalı formdan alınır; taksit seçeneği ödeme ekranında gösterilir.
              </p>
              <ul aria-label="Kabul edilen kart şemaları">
                {CARD_LOGOS.map((logo) => (
                  <li key={logo.alt}>
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      unoptimized
                    />
                  </li>
                ))}
              </ul>
              <div className={styles.paymentActions}>
                <Link href="/odeme" className={styles.paymentPrimary}>
                  Ödeme seçenekleri <Arrow />
                </Link>
                <a href="mailto:info@sahneva.com">E-posta gönder</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

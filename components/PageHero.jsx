// components/PageHero.jsx
// Anasayfadaki (TurkishHomepageHero) kurumsal kimliği iç sayfalara taşıyan
// ortak hero bileşeni: #040817 zemin, mor aksan, keskin geometri, mono
// etiketler ve ağır büyük harf başlık. Hizmet sayfalarındaki farklı hero
// varyantları bunun yerine tek kaynaktan gelir.
//
// Yükseklik standardı: hero her sayfada ekrana tam oturur (globals.css
// içindeki --hero-h / --hero-pt). Ayrı bir "compact" yüksekliği yok;
// kısa içerikli sayfalar da aynı ölçüyü kullanır.
import Image from "next/image";
import Link from "next/link";

import RichText from "@/components/RichText";
import styles from "./PageHero.module.css";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles.actionIcon}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

// Bazı sayfalarda hero görseli optimizasyon dışı, elde üretilmiş kırpımlarla
// (mobil/tablet/masaüstü) geliyor. Böyle durumlarda next/image yerine <picture>
// kullanılır; aksi hâlde tek kaynaktan next/image sürer.
function HeroImage({ image }) {
  const alt = image.alt ?? "";
  const style = image.position ? { objectPosition: image.position } : undefined;

  if (image.sources?.length) {
    return (
      <picture>
        {image.sources.map((source) => (
          <source key={source.srcSet} media={source.media} srcSet={source.srcSet} />
        ))}
        <img
          width={image.width ?? 1600}
          height={image.height ?? 900}
          decoding="async"
          {...image.imgProps}
          src={image.src ?? image.imgProps?.src}
          alt={alt}
          fetchPriority="high"
          className={`${styles.heroImage} ${styles.heroImageRaw}`}
          style={style}
        />
      </picture>
    );
  }

  return (
    <Image
      src={image.src}
      alt={alt}
      fill
      priority
      fetchPriority="high"
      sizes={image.sizes ?? "100vw"}
      quality={image.quality ?? 70}
      placeholder={image.blurDataURL ? "blur" : undefined}
      blurDataURL={image.blurDataURL}
      className={styles.heroImage}
      style={style}
    />
  );
}

function HeroAction({ action, primary }) {
  const className = `${styles.action}${primary ? ` ${styles.actionPrimary}` : ""}`;
  const content = (
    <>
      <span>{action.label}</span>
      <ArrowIcon />
    </>
  );

  if (action.external) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel={action.rel ?? "noopener noreferrer nofollow"}
        className={className}
        aria-label={action.ariaLabel}
      >
        {content}
      </a>
    );
  }

  if (action.href?.startsWith("tel:") || action.href?.startsWith("mailto:")) {
    return (
      <a href={action.href} className={className} aria-label={action.ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <Link
      href={action.href}
      prefetch={action.prefetch}
      className={className}
      aria-label={action.ariaLabel}
    >
      {content}
    </Link>
  );
}

export default function PageHero({
  breadcrumb,
  eyebrow,
  title,
  titleAccent,
  titleWide = false,
  description,
  note,
  badges,
  chipGroups,
  actions,
  metrics,
  quickLinks,
  quickLinksLabel = "Sayfa bölümleri",
  aside,
  asideLabel,
  image,
  titleId = "hero-title",
  descriptionId = "hero-desc",
  children,
}) {
  const titleClassName = `${styles.title}${titleWide ? ` ${styles.titleWide}` : ""}`;
  const ariaLabel = titleAccent ? `${title} ${titleAccent}` : undefined;

  return (
    <section
      className={styles.hero}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
    >
      {image ? (
        <div className={styles.backdrop} aria-hidden={image.alt ? undefined : "true"}>
          <HeroImage image={image} />
          <div className={styles.heroWash} />
          <div className={styles.copyShade} />
        </div>
      ) : (
        <div className={styles.backdropPlain} aria-hidden="true" />
      )}

      <div className={`${styles.inner}${aside ? ` ${styles.innerSplit}` : ""}`}>
        <div className={styles.copy}>
          {breadcrumb?.length ? (
            <nav aria-label="Sayfa yolu" className={styles.breadcrumb}>
              <ol>
                {breadcrumb.map((crumb) => (
                  <li key={crumb.label}>
                    {crumb.href ? (
                      <Link href={crumb.href}>{crumb.label}</Link>
                    ) : (
                      <span aria-current="page">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}

          <h1 id={titleId} className={titleClassName} aria-label={ariaLabel}>
            {title}
            {/* Vurgu satırı blok olarak akıyor; aradaki boşluk görsel olarak
                yutulur ama metin çıkarımında iki cümle birbirine yapışmaz. */}
            {titleAccent ? <> <em>{titleAccent}</em></> : null}
          </h1>

          {description ? (
            <p
              id={descriptionId}
              className={styles.description}
            >
              {typeof description === "string" ? (
                <RichText text={description} />
              ) : (
                description
              )}
            </p>
          ) : null}

          {note ? (
            <p className={styles.note}>
              {typeof note === "string" ? <RichText text={note} /> : note}
            </p>
          ) : null}

          {badges?.length ? (
            <ul className={styles.badges}>
              {badges.map((badge) => (
                <li key={badge} className={styles.badge}>
                  {badge}
                </li>
              ))}
            </ul>
          ) : null}

          {chipGroups?.length
            ? chipGroups.map((group) => (
                <div key={group.label} className={styles.chipGroup}>
                  <span className={styles.chipGroupLabel}>{group.label}</span>
                  <ul className={styles.chipList}>
                    {group.items.map((item) => (
                      <li key={item} className={styles.badge}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            : null}

          {actions?.length ? (
            <div className={styles.actions}>
              {actions.map((action, index) => (
                <HeroAction
                  key={action.key ?? action.href}
                  action={action}
                  primary={index === 0}
                />
              ))}
            </div>
          ) : null}

          {metrics?.length ? (
            <ul
              className={styles.metrics}
              style={{ "--metric-columns": Math.min(metrics.length, 4) }}
            >
              {metrics.map((metric) => (
                <li key={`${metric.value}-${metric.label}`} className={styles.metric}>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                  {metric.detail ? (
                    <p className={styles.metricDetail}>{metric.detail}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : null}

          {children}

          {quickLinks?.length ? (
            <nav className={styles.quickLinks} aria-label={quickLinksLabel}>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>

        {aside ? (
          <aside className={styles.aside} aria-label={asideLabel}>
            {aside}
          </aside>
        ) : null}
      </div>

      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  );
}

from pathlib import Path

replacements = {
    "app/(tr)/sahne-kiralama/page.js": (
        '''  const baseService = {
    "@type": "Service",
    name: "Sahne Kiralama",
    description: pageDescription,
    provider,
    areaServed: { "@type": "Country", name: "Türkiye" },
    // ❌ aggregateRating YOK (yorum yok dedin)
  };

  // ✅ Çakışmasız merge + WebPage bağlantısı
  const serviceNode = {
    ...(serviceSchema || {}),
    ...baseService,
    "@type": "Service",
    "@id": serviceSchema?.["@id"] || `${pageUrl}#service`,
    provider,
    url: pageUrl,
    mainEntityOfPage: { "@id": webPageId },
  };''',
        '''  // Merkezi Service şeması tek kaynak; yalnızca güvenli fallback tutulur.
  const serviceNode = serviceSchema || {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Sahne Kiralama",
    description: pageDescription,
    provider,
    areaServed: { "@type": "Country", name: "Türkiye" },
    url: pageUrl,
    mainEntityOfPage: { "@id": webPageId },
  };''',
    ),
    "app/(tr)/ses-isik-sistemleri/page.js": (
        '''  // Base Service Tanımı (AggregateRating YOK)
  const baseService = {
    "@type": "Service",
    name: "Ses Sistemi Kiralama ve Işık Sistemleri",
    description: pageDescription,
    provider,
    areaServed: { "@type": "Country", name: "Türkiye" },
  };

  // Service Node (çakışmasız merge)
  const serviceNode = {
    ...(serviceSchema || {}),
    ...baseService,
    "@type": "Service",
    "@id": serviceSchema?.["@id"] || `${pageUrl}#service`,
    provider,
    url: pageUrl,
    mainEntityOfPage: { "@id": webPageId },
  };''',
        '''  // Merkezi Service şeması tek kaynak; yalnızca güvenli fallback tutulur.
  const serviceNode = serviceSchema || {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Ses Sistemi Kiralama ve Işık Sistemleri",
    description: pageDescription,
    provider,
    areaServed: { "@type": "Country", name: "Türkiye" },
    url: pageUrl,
    mainEntityOfPage: { "@id": webPageId },
  };''',
    ),
    "app/en/stage-rental/page.js": (
        '''  const baseService = {
    "@type": "Service",
    name: "Stage Rental in Turkey",
    description: pageDescription,
    provider,
    areaServed: { "@type": "Country", name: "Turkey" },
  };

  const serviceNode = {
    ...(serviceSchema || {}),
    ...baseService,
    "@type": "Service",
    "@id": serviceSchema?.["@id"] || `${pageUrl}#service`,
    provider,
    url: pageUrl,
    mainEntityOfPage: { "@id": webPageId },
  };''',
        '''  // Keep the shared Service schema as the single source of truth.
  const serviceNode = serviceSchema || {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: "Stage Rental in Turkey",
    description: pageDescription,
    provider,
    areaServed: { "@type": "Country", name: "Turkey" },
    url: pageUrl,
    mainEntityOfPage: { "@id": webPageId },
  };''',
    ),
}

for filename, (old, new) in replacements.items():
    path = Path(filename)
    text = path.read_text(encoding="utf-8-sig")
    if old not in text:
        raise SystemExit(f"Expected schema block not found: {filename}")
    path.write_text(text.replace(old, new, 1), encoding="utf-8")
    print(f"updated {filename}")

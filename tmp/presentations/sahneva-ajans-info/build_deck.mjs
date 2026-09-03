import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const ROOT = "C:/Users/KASIM/Documents/GitHub/sahneva13";
const TMP_DIR = path.join(ROOT, "tmp/presentations/sahneva-ajans-info");
const ASSET_DIR = path.join(TMP_DIR, "assets");
const PREVIEW_DIR = path.join(TMP_DIR, "final-preview");
const LAYOUT_DIR = path.join(TMP_DIR, "final-layout");
const OUTPUT_DIR = path.join(ROOT, "output/presentation");
const FINAL_PPTX = path.join(
  OUTPUT_DIR,
  "Sahneva_Ajans_Teknik_Stok_ve_Uretim_Profili_TR.pptx",
);

const W = 1280;
const H = 905;

const C = {
  bg: "#07111F",
  bg2: "#0B1727",
  panel: "#13223A",
  panel2: "#0D192B",
  grid: "#20324F",
  border: "#41597F",
  cyan: "#8FD7FF",
  cyan2: "#67C8FF",
  white: "#F8FBFF",
  body: "#DDE8F8",
  muted: "#AABAD2",
  green: "#63E0AE",
  violet: "#8F80FF",
};

const F = "Arial";
const imageCache = new Map();
const svgCache = new Map();

async function asArrayBuffer(filePath) {
  if (!imageCache.has(filePath)) {
    const bytes = await fs.readFile(filePath);
    imageCache.set(
      filePath,
      bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength),
    );
  }
  return imageCache.get(filePath);
}

async function asSvg(filePath) {
  if (!svgCache.has(filePath)) {
    svgCache.set(filePath, await fs.readFile(filePath, "utf8"));
  }
  return svgCache.get(filePath);
}

function addText(slide, name, text, position, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    name,
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    typeface: F,
    fontSize: style.fontSize ?? 22,
    bold: style.bold ?? false,
    color: style.color ?? C.body,
    alignment: style.alignment ?? "left",
    verticalAlignment: style.verticalAlignment ?? "top",
    lineSpacing: style.lineSpacing ?? 1.05,
    insets: style.insets ?? { top: 0, right: 0, bottom: 0, left: 0 },
    autoFit: "none",
    wrap: "square",
  };
  return shape;
}

function addPanel(slide, name, position, options = {}) {
  return slide.shapes.add({
    geometry: options.geometry ?? "roundRect",
    name,
    position,
    fill: options.fill ?? C.panel,
    line: {
      style: "solid",
      fill: options.line ?? C.border,
      width: options.lineWidth ?? 1,
    },
    borderRadius: options.borderRadius ?? "rounded-2xl",
    ...(options.shadow ? { shadow: options.shadow } : {}),
  });
}

function addPill(slide, text, left, top, width, options = {}) {
  const panel = addPanel(
    slide,
    `pill-${text}`,
    { left, top, width, height: options.height ?? 40 },
    {
      fill: options.fill ?? C.panel,
      line: options.line ?? C.border,
      borderRadius: "rounded-full",
    },
  );
  const label = addText(
    slide,
    `pill-label-${text}`,
    text,
    { left: left + 14, top: top + 8, width: width - 28, height: 24 },
    {
      fontSize: options.fontSize ?? 16,
      bold: true,
      color: options.color ?? C.cyan,
      alignment: "center",
    },
  );
  return { panel, label };
}

async function addImage(slide, name, filePath, position, options = {}) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : "image/png";
  return slide.images.add({
    blob: await asArrayBuffer(filePath),
    contentType,
    alt: options.alt ?? name,
    fit: options.fit ?? "cover",
    position,
    geometry: options.geometry ?? "roundRect",
    borderRadius: options.borderRadius ?? "rounded-2xl",
    ...(options.crop ? { crop: options.crop } : {}),
  });
}

async function addQr(slide, name, svgPath, position) {
  addPanel(
    slide,
    `${name}-qr-bg`,
    {
      left: position.left - 8,
      top: position.top - 8,
      width: position.width + 16,
      height: position.height + 16,
    },
    { fill: "#FFFFFF", line: "#FFFFFF", borderRadius: "rounded-xl" },
  );
  return slide.images.add({
    svg: await asSvg(svgPath),
    alt: `${name} bağlantı QR kodu`,
    fit: "contain",
    position,
  });
}

function addGrid(slide) {
  for (let x = 0; x <= W; x += 92) {
    slide.shapes.add({
      geometry: "line",
      name: `grid-v-${x}`,
      position: { left: x, top: 0, width: 0, height: H },
      fill: "none",
      line: { style: "solid", fill: C.grid, width: 1 },
    });
  }
  for (let y = 0; y <= H; y += 92) {
    slide.shapes.add({
      geometry: "line",
      name: `grid-h-${y}`,
      position: { left: 0, top: y, width: W, height: 0 },
      fill: "none",
      line: { style: "solid", fill: C.grid, width: 1 },
    });
  }
}

async function addChrome(slide, section, page) {
  await addImage(
    slide,
    "sahneva-logo",
    path.join(ASSET_DIR, "sahneva-logo-dark-theme.png"),
    { left: 48, top: 24, width: 132, height: 62 },
    { fit: "contain", geometry: "rect", borderRadius: 0 },
  );
  addText(
    slide,
    "section-label",
    section.toUpperCase(),
    { left: 910, top: 32, width: 320, height: 24 },
    { fontSize: 14, bold: true, color: C.cyan, alignment: "right" },
  );
  addText(
    slide,
    "footer-label",
    "Sahneva | Ajans Teknik Profil",
    { left: 48, top: 864, width: 320, height: 18 },
    { fontSize: 13, color: C.muted },
  );
  addText(
    slide,
    "page-number",
    String(page).padStart(2, "0"),
    { left: 1180, top: 864, width: 50, height: 18 },
    { fontSize: 13, color: C.muted, alignment: "right" },
  );
}

function addTitle(slide, eyebrow, title, options = {}) {
  addPill(slide, eyebrow.toUpperCase(), 64, options.pillTop ?? 110, options.pillWidth ?? 210, {
    fill: C.panel2,
    line: C.border,
    color: options.pillColor ?? C.cyan,
  });
  return addText(
    slide,
    "slide-title",
    title,
    {
      left: 64,
      top: options.titleTop ?? 170,
      width: options.titleWidth ?? 740,
      height: options.titleHeight ?? 125,
    },
    {
      fontSize: options.fontSize ?? 50,
      bold: true,
      color: C.white,
      lineSpacing: options.lineSpacing ?? 0.95,
    },
  );
}

function setSources(slide, lines) {
  slide.speakerNotes.textFrame.setText(`[Sources]\n${lines.map((line) => `- ${line}`).join("\n")}`);
  slide.speakerNotes.setVisible(true);
}

function addLinkedLabel(slide, name, label, url, position, options = {}) {
  const text = addText(slide, name, label, position, {
    fontSize: options.fontSize ?? 18,
    bold: options.bold ?? true,
    color: options.color ?? C.cyan,
    alignment: options.alignment ?? "left",
    verticalAlignment: options.verticalAlignment ?? "middle",
  });
  text.text.get(label).link = { uri: url, isExternal: true };
  return text;
}

function addMetricBlock(slide, name, value, label, position, options = {}) {
  addPanel(slide, `${name}-panel`, position, {
    fill: options.fill ?? C.panel,
    line: options.line ?? C.border,
    borderRadius: "rounded-3xl",
  });
  addText(
    slide,
    `${name}-value`,
    value,
    {
      left: position.left + 26,
      top: position.top + 24,
      width: position.width - 52,
      height: options.valueHeight ?? 90,
    },
    {
      fontSize: options.valueSize ?? 66,
      bold: true,
      color: options.valueColor ?? C.white,
      lineSpacing: 0.92,
    },
  );
  addText(
    slide,
    `${name}-label`,
    label,
    {
      left: position.left + 28,
      top: position.top + (options.labelTop ?? 124),
      width: position.width - 56,
      height: position.height - (options.labelTop ?? 124) - 20,
    },
    {
      fontSize: options.labelSize ?? 20,
      bold: options.labelBold ?? false,
      color: options.labelColor ?? C.muted,
      lineSpacing: 1.05,
    },
  );
}

async function buildSlide1(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = C.bg;

  await addImage(
    slide,
    "cover-event",
    path.join(ASSET_DIR, "hero-bg-desktop.png"),
    { left: 0, top: 0, width: W, height: 720 },
    {
      alt: "PUBG Mobile Global Championship Türkiye finalinde geniş LED ekranlı ana sahne ve ışık prodüksiyonu",
      fit: "contain",
      geometry: "rect",
      borderRadius: 0,
    },
  );
  addPanel(slide, "cover-band", { left: 0, top: 720, width: W, height: 180 }, {
    geometry: "rect",
    fill: C.bg,
    line: C.bg,
    borderRadius: 0,
  });
  addPanel(slide, "cover-divider", { left: 0, top: 716, width: W, height: 4 }, {
    geometry: "rect",
    fill: C.cyan,
    line: C.cyan,
    borderRadius: 0,
  });
  await addImage(
    slide,
    "cover-logo",
    path.join(ASSET_DIR, "sahneva-logo-dark-theme.png"),
    { left: 54, top: 736, width: 190, height: 88 },
    { fit: "contain", geometry: "rect", borderRadius: 0 },
  );
  addPill(slide, "AJANS TEKNİK PROFİLİ", 54, 838, 226, {
    height: 34,
    fontSize: 14,
    fill: C.panel,
    line: C.border,
    color: C.cyan,
  });
  addText(
    slide,
    "cover-subtitle",
    "LED ekran, podyum, çadır, ses-ışık, dekor, baskı ve tabela çözümleri",
    { left: 322, top: 753, width: 520, height: 80 },
    { fontSize: 24, color: C.body, lineSpacing: 1.12 },
  );
  addText(
    slide,
    "cover-capability-line",
    "TEKNİK PLANLAMA  ·  ÜRETİM  ·  LOJİSTİK  ·  KURULUM  ·  OPERASYON",
    { left: 322, top: 842, width: 528, height: 24 },
    { fontSize: 13, bold: true, color: C.cyan, lineSpacing: 1 },
  );
  addPanel(slide, "cover-callout", { left: 904, top: 744, width: 326, height: 128 }, {
    fill: C.panel,
    line: C.border,
    borderRadius: "rounded-2xl",
  });
  addText(
    slide,
    "cover-callout-title",
    "Stok, üretim ve saha operasyonu",
    { left: 930, top: 763, width: 274, height: 48 },
    { fontSize: 21, bold: true, color: C.white, lineSpacing: 0.98 },
  );
  addText(
    slide,
    "cover-callout-body",
    "Ajans briefini uygulanabilir teknik kapsama dönüştüren tek koordinasyon.",
    { left: 930, top: 818, width: 274, height: 42 },
    { fontSize: 15, color: C.body, lineSpacing: 1.08 },
  );
  setSources(slide, [
    "Kapak görseli: C:/Users/KASIM/Desktop/yeni desktop/desktop/img/blog/hero-bg-desktop.webp (kullanıcı tarafından sağlandı)",
    "Logo: public/img/sahneva-logo-dark-theme.png",
    "İçerik kapsamı: kullanıcı tarafından sağlanan güncel stok ve üretim beyanı, 03.09.2026",
    "Görsel dil referansı: C:/Users/KASIM/Downloads/DOC-20260610-WA0000..pdf",
  ]);
}

async function buildSlide2(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = C.bg;
  addGrid(slide);
  await addChrome(slide, "Ajans İş Ortaklığı", 2);
  addTitle(slide, "Ajans iş ortaklığı", "Brief'i sahada çalışan\nteknik plana dönüştürüyoruz", {
    titleWidth: 590,
    titleHeight: 122,
    fontSize: 46,
  });
  addText(
    slide,
    "partner-body",
    "Sahneva; ekipman planlaması, üretim, lojistik, kurulum, prova, etkinlik günü teknik operasyon ve söküm süreçlerini tek koordinasyon altında yürütür. Ajans ekibi yaratıcı akışı yönetirken saha uygulaması teknik planla ilerler.",
    { left: 66, top: 318, width: 560, height: 150 },
    { fontSize: 22, color: C.body, lineSpacing: 1.15 },
  );
  const cards = [
    ["01", "Teknik kapsam", "Mekân, ölçü, akış ve ekipman ihtiyacı netleştirilir."],
    ["02", "Üretim ve hazırlık", "Baskı, dekor, konstrüksiyon ve ekipman hazırlığı planlanır."],
    ["03", "Kurulum ve prova", "Saha yerleşimi, enerji, sinyal ve test süreci tamamlanır."],
    ["04", "Canlı operasyon", "Reji, ses, ışık, LED ve saha ekibi etkinlik boyunca yönetilir."],
  ];
  cards.forEach((card, index) => {
    const left = index % 2 === 0 ? 64 : 345;
    const top = index < 2 ? 520 : 670;
    addPanel(slide, `partner-card-${index + 1}`, { left, top, width: 260, height: 122 }, {
      fill: C.panel,
      line: C.border,
      borderRadius: "rounded-2xl",
    });
    addText(slide, `partner-card-no-${index + 1}`, card[0], { left: left + 18, top: top + 16, width: 48, height: 26 }, {
      fontSize: 16,
      bold: true,
      color: C.cyan,
    });
    addText(slide, `partner-card-title-${index + 1}`, card[1], { left: left + 18, top: top + 42, width: 220, height: 28 }, {
      fontSize: 20,
      bold: true,
      color: C.white,
    });
    addText(slide, `partner-card-body-${index + 1}`, card[2], { left: left + 18, top: top + 74, width: 220, height: 42 }, {
      fontSize: 14,
      color: C.muted,
      lineSpacing: 1.05,
    });
  });
  await addImage(
    slide,
    "partner-event",
    path.join(ASSET_DIR, "kurumsal-organizasyon-hero-desktop.png"),
    { left: 680, top: 158, width: 530, height: 646 },
    { alt: "Kurumsal etkinlikte LED ekran, sahne ve ışık prodüksiyonu" },
  );
  setSources(slide, [
    "Görsel: public/img/kurumsal/premium/kurumsal-organizasyon-hero-desktop.webp",
    "Çalışma modeli: kullanıcı briefi ve Sahneva hizmet kapsamı; https://www.sahneva.com/nasil-calisiyoruz",
  ]);
}

async function buildSlide3(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = C.bg;
  addGrid(slide);
  await addChrome(slide, "Kapasite Özeti", 3);
  addTitle(slide, "Güncel stok beyanı", "Ajans planlaması için net stok görünümü", {
    titleWidth: 760,
    titleHeight: 78,
    fontSize: 50,
  });
  addMetricBlock(
    slide,
    "led-total",
    "800 m²",
    "Toplam indoor LED ekran kapasitesi\n400 m² Absen P1.9 + 400 m² Unilumin P2.6",
    { left: 64, top: 300, width: 550, height: 320 },
    { valueSize: 82, labelTop: 148, labelSize: 23, valueColor: C.cyan },
  );
  addMetricBlock(
    slide,
    "podium-total",
    "15.000 m²",
    "Podyum stoğu",
    { left: 650, top: 300, width: 560, height: 190 },
    { valueSize: 68, labelTop: 118, labelSize: 22, valueColor: C.white },
  );
  addMetricBlock(
    slide,
    "dome-total",
    "17 adet",
    "Dome çadır stoğu\n25 m: 3 • 20 m: 4 • 10 m: 10",
    { left: 650, top: 515, width: 560, height: 220 },
    { valueSize: 65, labelTop: 112, labelSize: 21, valueColor: C.green },
  );
  addPanel(slide, "capacity-bottom", { left: 64, top: 660, width: 550, height: 140 }, {
    fill: C.panel2,
    line: C.border,
    borderRadius: "rounded-2xl",
  });
  addText(slide, "capacity-bottom-title", "Profesyonel ses ve ışık ekipman parkı", { left: 90, top: 690, width: 500, height: 34 }, {
    fontSize: 23,
    bold: true,
    color: C.white,
  });
  addText(slide, "capacity-bottom-body", "Adet ve marka bazlı detaylar proje teknik listesinde kesinleştirilir.", { left: 90, top: 738, width: 500, height: 32 }, {
    fontSize: 17,
    color: C.muted,
  });
  addText(slide, "capacity-disclaimer", "Stok uygunluğu, proje tarihi ve eş zamanlı rezervasyonlara göre teklif aşamasında teyit edilir.", { left: 650, top: 770, width: 560, height: 28 }, {
    fontSize: 16,
    color: C.muted,
    alignment: "right",
  });
  setSources(slide, [
    "Stok miktarları: kullanıcı tarafından sağlanan güncel beyan, 03.09.2026",
    "Hesaplanan toplamlar: 400 + 400 = 800 m² indoor LED; 3 + 4 + 10 = 17 adet dome",
  ]);
}

async function buildSlide4(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = C.bg;
  addGrid(slide);
  await addChrome(slide, "Indoor LED", 4);
  addTitle(slide, "Indoor LED ekran", "800 m² indoor LED,\niki farklı piksel aralığı", {
    titleWidth: 500,
    titleHeight: 120,
    fontSize: 46,
  });
  addMetricBlock(
    slide,
    "absen",
    "400 m²",
    "Absen P1.9\nYakın izleme, detaylı içerik ve premium indoor sahne uygulamaları",
    { left: 64, top: 322, width: 500, height: 225 },
    { valueSize: 60, labelTop: 105, labelSize: 20, valueColor: C.cyan },
  );
  addMetricBlock(
    slide,
    "unilumin",
    "400 m²",
    "Unilumin P2.6\nKonferans, lansman, bayi toplantısı ve geniş indoor kurulumlar",
    { left: 64, top: 575, width: 500, height: 225 },
    { valueSize: 60, labelTop: 105, labelSize: 20, valueColor: C.green },
  );
  await addImage(
    slide,
    "led-application",
    path.join(ASSET_DIR, "p19-cop31-konferans-led-ekran-sahneva.png"),
    { left: 610, top: 178, width: 600, height: 420 },
    { alt: "Kurumsal konferans sahnesinde indoor LED ekran uygulaması" },
  );
  await addImage(
    slide,
    "led-inventory",
    path.join(ASSET_DIR, "absen-p19-led-flight-case-depo-envanteri-sahneva.png"),
    { left: 610, top: 625, width: 190, height: 175 },
    { alt: "LED ekran flight-case depo envanteri", crop: { left: 0, top: 0.12, right: 0, bottom: 0.12 } },
  );
  addPanel(slide, "led-service-strip", { left: 820, top: 625, width: 390, height: 175 }, {
    fill: C.panel,
    line: C.border,
    borderRadius: "rounded-2xl",
  });
  addText(slide, "led-service-title", "Teknik kapsam", { left: 848, top: 654, width: 330, height: 32 }, {
    fontSize: 23,
    bold: true,
    color: C.white,
  });
  addText(slide, "led-service-body", "Kurulum • görüntü işlemci • içerik akışı • test • yedekleme • operatör", { left: 848, top: 704, width: 330, height: 70 }, {
    fontSize: 19,
    color: C.body,
    lineSpacing: 1.18,
  });
  setSources(slide, [
    "Stok miktarları ve marka/model: kullanıcı tarafından sağlanan güncel beyan, 03.09.2026",
    "Görsel: public/img/led/p19-cop31-konferans-led-ekran-sahneva.webp",
    "Görsel: public/img/led/absen-p19-led-flight-case-depo-envanteri-sahneva.webp",
    "Not: Unilumin P2.6 için marka/modeli kadrajda doğrulayan ayrı stok fotoğrafı sağlanmadığından görseller model bazında etiketlenmedi.",
  ]);
}

async function buildSlide5(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = C.bg;
  addGrid(slide);
  await addChrome(slide, "Podyum ve Platform", 5);
  addTitle(slide, "Podyum stoğu", "15.000 m² podyum stoğu", {
    titleWidth: 500,
    titleHeight: 110,
    fontSize: 46,
  });
  addText(slide, "podium-lead", "Farklı ölçü ve yüksekliklerde sahne, platform ve etkinlik zemini kurguları planlanır. Proje kapsamına göre merdiven, skört/kaplama ve marka uygulamalarıyla tamamlanır.", { left: 64, top: 315, width: 475, height: 150 }, {
    fontSize: 22,
    color: C.body,
    lineSpacing: 1.17,
  });
  addMetricBlock(slide, "podium-metric", "15.000 m²", "Güncel podyum stoğu", { left: 64, top: 520, width: 475, height: 220 }, {
    valueSize: 70,
    labelTop: 120,
    labelSize: 22,
    valueColor: C.cyan,
  });
  await addImage(
    slide,
    "podium-finished",
    path.join(ASSET_DIR, "podyum-kiralama-fiyatlari-hero.png"),
    { left: 590, top: 175, width: 620, height: 380 },
    { alt: "Tamamlanmış siyah podyum ve basamak sistemi" },
  );
  await addImage(
    slide,
    "podium-field",
    path.join(ASSET_DIR, "diclefest-sanliurfa-podyum-zemin-kurulumu.png"),
    { left: 590, top: 585, width: 620, height: 215 },
    { alt: "Geniş alanda podyum ve zemin kurulum süreci" },
  );
  setSources(slide, [
    "Podyum miktarı: kullanıcı tarafından sağlanan güncel beyan, 03.09.2026",
    "Görsel: public/img/podyum/podyum-kiralama-fiyatlari-hero.webp",
    "Görsel: public/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-podyum-zemin-kurulumu.webp",
  ]);
}

async function buildSlide6(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = C.bg;
  addGrid(slide);
  await addChrome(slide, "Çadır Sistemleri", 6);
  addTitle(slide, "Çadır sistemleri", "Öz stok ile proje bazlı temin ayrı planlanır", {
    titleWidth: 760,
    titleHeight: 116,
    fontSize: 48,
  });
  await addImage(
    slide,
    "dome-finished",
    path.join(ASSET_DIR, "saha-2026-dome-cadir-final.png"),
    { left: 64, top: 310, width: 540, height: 350 },
    { alt: "Tamamlanmış dome çadır etkinlik uygulaması" },
  );
  addText(slide, "dome-caption", "Dome çadır öz stoğu", { left: 64, top: 680, width: 540, height: 32 }, {
    fontSize: 22,
    bold: true,
    color: C.white,
  });
  const domes = [
    ["25 m", "3 adet", C.cyan],
    ["20 m", "4 adet", C.green],
    ["10 m", "10 adet", C.violet],
  ];
  domes.forEach((item, index) => {
    const top = 300 + index * 148;
    addPanel(slide, `dome-${index + 1}`, { left: 650, top, width: 250, height: 120 }, {
      fill: C.panel,
      line: C.border,
      borderRadius: "rounded-2xl",
    });
    addText(slide, `dome-size-${index + 1}`, item[0], { left: 675, top: top + 18, width: 100, height: 48 }, {
      fontSize: 34,
      bold: true,
      color: item[2],
    });
    addText(slide, `dome-count-${index + 1}`, item[1], { left: 775, top: top + 28, width: 100, height: 34 }, {
      fontSize: 22,
      bold: true,
      color: C.white,
      alignment: "right",
    });
    addText(slide, `dome-label-${index + 1}`, "açıklık", { left: 675, top: top + 74, width: 100, height: 22 }, {
      fontSize: 15,
      color: C.muted,
    });
  });
  await addImage(
    slide,
    "large-span-tent",
    path.join(ASSET_DIR, "buyuk-olcekli-cadir-kurulumu.png"),
    { left: 930, top: 300, width: 280, height: 268 },
    { alt: "Vinçli büyük açıklıklı etkinlik çadırı kurulumu" },
  );
  addPanel(slide, "tent-supply", { left: 650, top: 722, width: 560, height: 115 }, {
    fill: C.panel2,
    line: C.border,
    borderRadius: "rounded-2xl",
  });
  addText(slide, "tent-supply-title", "Proje bazlı temin", { left: 680, top: 738, width: 500, height: 28 }, {
    fontSize: 22,
    bold: true,
    color: C.cyan,
  });
  addText(slide, "tent-supply-body", "40 m ve 20 m açıklıklı etkinlik çadırları\n5×5, 4×4 ve 3×3 modüler çadırlar", { left: 680, top: 775, width: 500, height: 48 }, {
    fontSize: 17,
    color: C.body,
    lineSpacing: 1.18,
  });
  setSources(slide, [
    "Dome açıklıkları ve adetleri: kullanıcı tarafından sağlanan güncel beyan, 03.09.2026",
    "Temin kapsamı: kullanıcı tarafından sağlanan bilgi; 40 m, 20 m, 5x5, 4x4 ve 3x3 sistemlerde adet belirtilmedi.",
    "Görsel: public/images/projects/saha-2026-dome-cadir-final.webp",
    "Görsel: public/img/cadir/buyuk-olcekli-cadir-kurulumu.webp",
  ]);
}

async function buildSlide7(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = C.bg;
  addGrid(slide);
  await addChrome(slide, "Üretim ve Dekor", 7);
  addTitle(slide, "Üretim altyapısı", "Dekor, baskı ve tabela üretimi", {
    titleWidth: 500,
    titleHeight: 110,
    fontSize: 44,
  });
  addPanel(slide, "steel-copy", { left: 64, top: 315, width: 450, height: 205 }, {
    fill: C.panel,
    line: C.border,
    borderRadius: "rounded-2xl",
  });
  addText(slide, "steel-title", "Çelik konstrüksiyon ve etkinlik dekoru", { left: 92, top: 346, width: 395, height: 40 }, {
    fontSize: 25,
    bold: true,
    color: C.white,
  });
  addText(slide, "steel-body", "Etkinlik çadırları ve özel dekor uygulamaları için çelik konstrüksiyon malzeme altyapısı; kapsam ve ölçüler saha koşullarına göre projelendirilir.", { left: 92, top: 404, width: 395, height: 92 }, {
    fontSize: 19,
    color: C.body,
    lineSpacing: 1.14,
  });
  addPanel(slide, "print-copy", { left: 64, top: 548, width: 450, height: 245 }, {
    fill: C.panel2,
    line: C.border,
    borderRadius: "rounded-2xl",
  });
  addText(slide, "print-title", "Baskı ve tabela üretimi", { left: 92, top: 580, width: 395, height: 38 }, {
    fontSize: 25,
    bold: true,
    color: C.cyan,
  });
  addText(slide, "print-body", "Folyo, vinil, mesh ve farklı yüzeylere geniş format baskı\n\nIşıklı ve ışıksız tabela üretimi\n\nAjans görsel briefinin sahadaki marka uygulamasına dönüştürülmesi", { left: 92, top: 636, width: 395, height: 140 }, {
    fontSize: 18,
    color: C.body,
    lineSpacing: 1.06,
  });
  await addImage(
    slide,
    "decor-finished",
    path.join(ASSET_DIR, "diclefest-sanliurfa-dekor-uygulamalari.png"),
    { left: 560, top: 185, width: 650, height: 290 },
    { alt: "Etkinlik çadırında markalı dekor ve baskı uygulamaları" },
  );
  await addImage(
    slide,
    "print-stand",
    path.join(ASSET_DIR, "urun-lansmani-proje-acilis-standi.png"),
    { left: 560, top: 510, width: 315, height: 283 },
    { alt: "Baskılı lansman ve karşılama standı uygulaması" },
  );
  await addImage(
    slide,
    "steel-structure",
    path.join(ASSET_DIR, "saha-2026-dome-cadir-iskelet-kurulumu.png"),
    { left: 895, top: 510, width: 315, height: 283 },
    { alt: "Dome çadır iskelet ve konstrüksiyon kurulum süreci" },
  );
  setSources(slide, [
    "Üretim ve malzeme kapsamı: kullanıcı tarafından sağlanan beyan, 03.09.2026",
    "Görsel: public/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-dekor-uygulamalari.webp",
    "Görsel: public/img/blog/urun-lansmani-proje-acilis-standi.webp",
    "Görsel: public/images/projects/saha-2026-dome-cadir-iskelet-kurulumu.webp",
    "Not: Görseller tamamlanmış uygulama ve saha kurulumunu gösterir; atölye/makine parkı görseli sağlanmamıştır.",
  ]);
}

async function buildSlide8(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = C.bg;
  addGrid(slide);
  await addChrome(slide, "Ses, Işık ve Reji", 8);
  addTitle(slide, "Teknik operasyon", "Ses, ışık, truss ve teknik reji", {
    titleWidth: 620,
    titleHeight: 110,
    fontSize: 44,
  });
  await addImage(
    slide,
    "show-control",
    path.join(ASSET_DIR, "show-kontrol.png"),
    { left: 64, top: 310, width: 350, height: 480 },
    { alt: "Işık ve gösteri kontrol masası", crop: { left: 0.08, top: 0, right: 0.08, bottom: 0 } },
  );
  await addImage(
    slide,
    "sound-array",
    path.join(ASSET_DIR, "sifir-atik-festivali-line-array-ses-sistemi-detayi.png"),
    { left: 448, top: 315, width: 280, height: 220 },
    { alt: "Büyük ölçekli line array ses sistemi", crop: { left: 0, top: 0.12, right: 0, bottom: 0.12 } },
  );
  await addImage(
    slide,
    "truss-show",
    path.join(ASSET_DIR, "truss-rigging-konser.png"),
    { left: 756, top: 315, width: 454, height: 220 },
    { alt: "Konser sahnesinde truss rigging ve ışık tasarımı" },
  );
  addPanel(slide, "sound-light-copy", { left: 448, top: 565, width: 762, height: 225 }, {
    fill: C.panel,
    line: C.border,
    borderRadius: "rounded-3xl",
  });
  addText(slide, "sound-light-title", "Ekipman parkı ve saha ekibi birlikte çalışır", { left: 482, top: 595, width: 690, height: 42 }, {
    fontSize: 28,
    bold: true,
    color: C.white,
  });
  addText(slide, "sound-light-body", "Line array PA ve subwoofer sistemleri\nDijital mikser, stagebox, kablosuz mikrofon ve RF altyapısı\nMoving head, beam, wash ve DMX kontrol\nTruss, rigging, teknik reji, prova ve canlı operasyon", { left: 482, top: 650, width: 690, height: 118 }, {
    fontSize: 19,
    color: C.body,
    lineSpacing: 1.15,
  });
  setSources(slide, [
    "Ses ve ışık kapasitesi: kullanıcı tarafından sağlanan nitel beyan; marka/adet iddiası eklenmedi.",
    "Görsel: public/img/kurumsal/premium/show-kontrol.webp",
    "Görsel: public/img/projeler/sifir-atik-festivali/sifir-atik-festivali-line-array-ses-sistemi-detayi.webp",
    "Görsel: public/img/kurumsal/premium/truss-rigging-konser.webp",
  ]);
}

const VIDEO_GROUP_1 = [
  {
    no: "01",
    title: "Sıfır Atık Festivali\nAna Sahne Prodüksiyonu",
    meta: "Sahne • LED • ses • ışık",
    url: "https://www.youtube.com/watch?v=z4DqZERYXkM",
    image: "01-sifir-atik.jpg",
    qr: "video-01-sifir-atik.svg",
  },
  {
    no: "02",
    title: "SAHA 2026\nDome ve Fuar Alanı",
    meta: "Dome • zemin • ambiyans",
    url: "https://www.youtube.com/watch?v=x-BYu0vgO2E",
    image: "02-saha-2026.jpg",
    qr: "video-02-saha-2026.svg",
  },
  {
    no: "03",
    title: "TEKNOFEST\nÇadır İçi Dekorasyon",
    meta: "Dekor • LED • ses • yerleşim",
    url: "https://www.youtube.com/shorts/7yjrrEtWrr0",
    image: "03-teknofest-dekor.jpg",
    qr: "video-03-teknofest-dekor.svg",
  },
];

const VIDEO_GROUP_2 = [
  {
    no: "04",
    title: "TEKNOFEST\nSahne ve Teknik Altyapı",
    meta: "Sahne • LED • ses • ışık",
    url: "https://www.youtube.com/watch?v=_9Q7v0ZL304",
    image: "04-teknofest-sahne.jpg",
    qr: "video-04-teknofest-sahne.svg",
  },
  {
    no: "05",
    title: "PUBG Türkiye Finali\nTeknik Prodüksiyon",
    meta: "E-spor • sahne • LED • podyum",
    url: "https://www.youtube.com/watch?v=173gBurWSRQ",
    image: "05-pubg-final.jpg",
    qr: "video-05-pubg-final.svg",
  },
  {
    no: "06",
    title: "EAACI İstanbul\n360° LED Wall",
    meta: "Kongre • sergi • 360° LED",
    url: "https://youtube.com/shorts/qiqiBN4Uhu4",
    image: "06-eaaci-led.jpg",
    qr: "video-06-eaaci-led.svg",
  },
];

async function addVideoCard(slide, video, index) {
  const left = 54 + index * 405;
  const top = 220;
  const width = 370;
  const height = 575;
  addPanel(slide, `video-card-${video.no}`, { left, top, width, height }, {
    fill: C.panel,
    line: C.border,
    borderRadius: "rounded-3xl",
  });
  await addImage(
    slide,
    `video-image-${video.no}`,
    path.join(ASSET_DIR, "video-thumbs", video.image),
    { left: left + 14, top: top + 14, width: width - 28, height: 220 },
    { alt: `${video.title.replace(/\n/g, " ")} video kapak görseli`, crop: { left: 0, top: 0.05, right: 0, bottom: 0.05 } },
  );
  addPanel(slide, `video-play-${video.no}`, { left: left + 28, top: top + 172, width: 52, height: 52 }, {
    fill: C.bg,
    line: C.cyan,
    borderRadius: "rounded-full",
  });
  addText(slide, `video-play-icon-${video.no}`, "▶", { left: left + 42, top: top + 184, width: 25, height: 25 }, {
    fontSize: 18,
    bold: true,
    color: C.white,
    alignment: "center",
  });
  addText(slide, `video-no-${video.no}`, `VİDEO ${video.no}`, { left: left + 24, top: top + 262, width: 120, height: 24 }, {
    fontSize: 14,
    bold: true,
    color: C.cyan,
  });
  addText(slide, `video-title-${video.no}`, video.title, { left: left + 24, top: top + 302, width: width - 48, height: 82 }, {
    fontSize: 27,
    bold: true,
    color: C.white,
    lineSpacing: 0.95,
  });
  addText(slide, `video-meta-${video.no}`, video.meta, { left: left + 24, top: top + 401, width: width - 48, height: 30 }, {
    fontSize: 16,
    color: C.muted,
  });
  await addQr(
    slide,
    `video-${video.no}`,
    path.join(ASSET_DIR, "qr", video.qr),
    { left: left + 30, top: top + 458, width: 82, height: 82 },
  );
  addLinkedLabel(
    slide,
    `video-link-${video.no}`,
    "Videoyu aç ↗",
    video.url,
    { left: left + 140, top: top + 478, width: 190, height: 40 },
    { fontSize: 19, bold: true, color: C.cyan, verticalAlignment: "middle" },
  );
  addText(slide, `video-qr-help-${video.no}`, "Tara veya tıkla", { left: left + 140, top: top + 520, width: 190, height: 22 }, {
    fontSize: 14,
    color: C.muted,
  });
}

async function buildVideoSlide(presentation, group, page, label) {
  const slide = presentation.slides.add();
  slide.background.fill = C.bg;
  addGrid(slide);
  await addChrome(slide, "Proje Videoları", page);
  addTitle(slide, label, "Gerçek işlerden proje videoları", {
    titleWidth: 800,
    titleHeight: 70,
    fontSize: 48,
    pillWidth: 220,
  });
  for (let i = 0; i < group.length; i += 1) {
    await addVideoCard(slide, group[i], i);
  }
  addLinkedLabel(
    slide,
    `all-videos-${page}`,
    "Tüm video arşivini görüntüle ↗",
    "https://www.sahneva.com/yaptiklarimiz",
    { left: 870, top: 824, width: 350, height: 28 },
    { fontSize: 16, bold: true, color: C.cyan, alignment: "right" },
  );
  setSources(slide, [
    "Video ve proje başlıkları: https://www.sahneva.com/yaptiklarimiz",
    ...group.map((video) => `Video: ${video.url}`),
    ...group.map((video) => `Kapak: https://i.ytimg.com/vi/${video.url.includes("watch?v=") ? video.url.split("watch?v=")[1] : video.url.split("/").pop()}/hqdefault.jpg`),
    ...(page === 10 ? ["PUBG kapak görseli: kullanıcı tarafından sağlanan DOC-20260610-WA0000..pdf içindeki sayfa 3 görseli"] : []),
  ]);
}

async function buildSlide11(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = C.bg;
  addGrid(slide);
  await addChrome(slide, "Çalışma Modeli", 11);
  addTitle(slide, "Saha operasyonu", "Brief'ten söküme tek teknik koordinasyon", {
    titleWidth: 820,
    titleHeight: 80,
    fontSize: 50,
    pillWidth: 260,
  });

  slide.shapes.add({
    geometry: "line",
    name: "workflow-line",
    position: { left: 112, top: 455, width: 1055, height: 0 },
    fill: "none",
    line: { style: "solid", fill: C.border, width: 3 },
  });

  const steps = [
    ["01", "Brief"],
    ["02", "Keşif"],
    ["03", "Teknik plan"],
    ["04", "Üretim ve\nhazırlık"],
    ["05", "Kurulum ve\nprova"],
    ["06", "Canlı\noperasyon"],
    ["07", "Söküm"],
  ];
  steps.forEach((step, index) => {
    const center = 112 + index * (1055 / 6);
    addPanel(slide, `workflow-node-${index + 1}`, { left: center - 30, top: 425, width: 60, height: 60 }, {
      fill: index === 5 ? C.cyan2 : C.panel,
      line: index === 5 ? C.cyan2 : C.border,
      borderRadius: "rounded-full",
    });
    addText(slide, `workflow-no-${index + 1}`, step[0], { left: center - 24, top: 442, width: 48, height: 24 }, {
      fontSize: 17,
      bold: true,
      color: index === 5 ? C.bg : C.white,
      alignment: "center",
    });
    addText(slide, `workflow-label-${index + 1}`, step[1], { left: center - 70, top: 510, width: 140, height: 70 }, {
      fontSize: 19,
      bold: true,
      color: C.white,
      alignment: "center",
      lineSpacing: 1.0,
    });
  });
  addPanel(slide, "brief-inputs", { left: 126, top: 650, width: 1028, height: 125 }, {
    fill: C.panel2,
    line: C.border,
    borderRadius: "rounded-3xl",
  });
  addText(slide, "brief-inputs-title", "Hızlı ve doğru teklif için paylaşılacak bilgiler", { left: 164, top: 680, width: 950, height: 34 }, {
    fontSize: 25,
    bold: true,
    color: C.cyan,
    alignment: "center",
  });
  addText(slide, "brief-inputs-body", "Tarih • şehir • mekân • saha ölçüsü • katılımcı sayısı • görsel brief • teknik beklenti • kurulum/söküm zaman aralığı", { left: 164, top: 729, width: 950, height: 32 }, {
    fontSize: 19,
    color: C.body,
    alignment: "center",
  });
  setSources(slide, [
    "Süreç kurgusu: kullanıcı briefi ve Sahneva hizmet akışı; https://www.sahneva.com/nasil-calisiyoruz",
  ]);
}

async function buildSlide12(presentation) {
  const slide = presentation.slides.add();
  slide.background.fill = C.bg;
  await addImage(
    slide,
    "contact-stage",
    path.join(ASSET_DIR, "sifir-atik-festivali-ana-sahne-teknik-produksiyon-hero.png"),
    { left: 665, top: 0, width: 615, height: H },
    { alt: "Sıfır Atık Festivali ana sahne teknik prodüksiyonu", geometry: "rect", borderRadius: 0 },
  );
  await addImage(
    slide,
    "contact-logo",
    path.join(ASSET_DIR, "sahneva-logo-dark-theme.png"),
    { left: 64, top: 44, width: 188, height: 88 },
    { fit: "contain", geometry: "rect", borderRadius: 0 },
  );
  addPanel(slide, "contact-panel", { left: 64, top: 190, width: 555, height: 570 }, {
    fill: C.panel2,
    line: C.border,
    borderRadius: "rounded-3xl",
  });
  addText(slide, "contact-title", "Bir sonraki etkinliğin teknik kapsamını birlikte netleştirelim.", { left: 104, top: 240, width: 475, height: 160 }, {
    fontSize: 48,
    bold: true,
    color: C.white,
    lineSpacing: 0.95,
  });
  addText(slide, "contact-body", "Etkinlik tarihi, şehir, mekân, ölçüler ve teknik beklentiyi paylaşın; ekipman, üretim, ekip ve lojistik kapsamını tek planda oluşturalım.", { left: 104, top: 435, width: 475, height: 100 }, {
    fontSize: 21,
    color: C.body,
    lineSpacing: 1.16,
  });
  addLinkedLabel(slide, "contact-site", "www.sahneva.com", "https://www.sahneva.com", { left: 104, top: 575, width: 330, height: 32 }, {
    fontSize: 21,
    bold: true,
    color: C.cyan,
  });
  addLinkedLabel(slide, "contact-mail", "info@sahneva.com", "mailto:info@sahneva.com", { left: 104, top: 625, width: 330, height: 32 }, {
    fontSize: 21,
    bold: true,
    color: C.white,
  });
  addLinkedLabel(slide, "contact-phone", "+90 545 304 86 71", "tel:+905453048671", { left: 104, top: 675, width: 330, height: 32 }, {
    fontSize: 21,
    bold: true,
    color: C.white,
  });
  addPanel(slide, "contact-qr-card", { left: 900, top: 560, width: 260, height: 255 }, {
    fill: C.panel,
    line: C.border,
    borderRadius: "rounded-3xl",
  });
  await addQr(slide, "contact", path.join(ASSET_DIR, "qr", "contact.svg"), { left: 960, top: 590, width: 140, height: 140 });
  addLinkedLabel(slide, "contact-qr-link", "İletişim sayfasını aç ↗", "https://www.sahneva.com/iletisim", { left: 925, top: 760, width: 210, height: 28 }, {
    fontSize: 16,
    bold: true,
    color: C.cyan,
    alignment: "center",
  });
  addText(slide, "contact-legal", "SAHNEVA ORGANİZASYON TASARIM VE REKLAM LİMİTED ŞİRKETİ", { left: 64, top: 844, width: 560, height: 20 }, {
    fontSize: 12,
    color: C.muted,
  });
  setSources(slide, [
    "Görsel: public/img/projeler/sifir-atik-festivali/sifir-atik-festivali-ana-sahne-teknik-produksiyon-hero.webp",
    "İletişim bilgileri: https://www.sahneva.com/iletisim, canlı doğrulama 03.09.2026",
    "Yasal unvan: lib/legal/companyInfo.js ve https://www.sahneva.com/iletisim",
  ]);
}

async function writeBlob(filePath, blob) {
  await fs.writeFile(filePath, new Uint8Array(await blob.arrayBuffer()));
}

async function main() {
  await fs.mkdir(PREVIEW_DIR, { recursive: true });
  await fs.mkdir(LAYOUT_DIR, { recursive: true });
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const presentation = Presentation.create({ slideSize: { width: W, height: H } });
  presentation.theme.colorScheme = {
    name: "Sahneva Navy",
    themeColors: {
      accent1: C.cyan2,
      accent2: C.green,
      accent3: C.violet,
      accent4: "#FF6B8A",
      accent5: "#F4B860",
      accent6: "#7FD8BE",
      bg1: C.bg,
      bg2: C.panel,
      tx1: C.white,
      tx2: C.body,
      dk1: "#000000",
      dk2: C.bg2,
      lt1: C.white,
      lt2: C.body,
      hlink: C.cyan2,
      folHlink: C.violet,
    },
  };

  await buildSlide1(presentation);
  await buildSlide2(presentation);
  await buildSlide3(presentation);
  await buildSlide4(presentation);
  await buildSlide5(presentation);
  await buildSlide6(presentation);
  await buildSlide7(presentation);
  await buildSlide8(presentation);
  await buildVideoSlide(presentation, VIDEO_GROUP_1, 9, "Seçili işler • 1/2");
  await buildVideoSlide(presentation, VIDEO_GROUP_2, 10, "Seçili işler • 2/2");
  await buildSlide11(presentation);
  await buildSlide12(presentation);

  for (const [index, slide] of presentation.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    await writeBlob(
      path.join(PREVIEW_DIR, `${stem}.png`),
      await presentation.export({ slide, format: "png", scale: 1.25 }),
    );
    const layout = await slide.export({ format: "layout" });
    await fs.writeFile(path.join(LAYOUT_DIR, `${stem}.layout.json`), await layout.text());
  }

  await writeBlob(
    path.join(TMP_DIR, "final-montage.webp"),
    await presentation.export({
      format: "webp",
      montage: { format: "webp", width: 2600, slideWidth: 620, padding: 24, gap: 24, background: "#FFFFFF", columns: 3 },
      scale: 1,
    }),
  );

  const inspect = await presentation.inspect({
    kind: "slide,textbox,shape,image,notes",
    maxChars: 50000,
  });
  await fs.writeFile(path.join(TMP_DIR, "final-inspect.ndjson"), inspect.ndjson, "utf8");

  const sourceNotes = [
    "Reference PDF: C:/Users/KASIM/Downloads/DOC-20260610-WA0000..pdf",
    "Stock/capability source: user-provided statement dated 2026-09-03.",
    "Current contact source: https://www.sahneva.com/iletisim (checked 2026-09-03).",
    "Video index source: https://www.sahneva.com/yaptiklarimiz (checked 2026-09-03).",
    "Local photography sources are listed in each slide's [Sources] speaker-notes block.",
    "Externally sourced thumbnails are YouTube i.ytimg.com assets for the linked first-party project videos.",
  ].join("\n");
  await fs.writeFile(path.join(TMP_DIR, "source-notes.txt"), sourceNotes, "utf8");

  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(FINAL_PPTX);
  console.log(JSON.stringify({ finalPptx: FINAL_PPTX, slides: presentation.slides.items.length }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

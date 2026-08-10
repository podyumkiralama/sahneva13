// Kabul edilen dosya türleri — hem sunucu uçları hem de iki arayüz
// kullanıyor, bu yüzden sunucuya özgü hiçbir şey içermez.
//
// Liste üç yerde ayrı ayrı tutuluyordu; birinde unutulan bir tür sessiz
// bir uyumsuzluk üretiyordu. Tek kaynak burası.

export const MAX_FILE_SIZE = 10 * 1024 * 1024;

/**
 * Etkinlik işinde gelen tipik ekler: mekân fotoğrafı, yerleşim planı,
 * teknik şartname, ekipman listesi. Çalıştırılabilir içerik kabul
 * edilmiyor.
 */
export const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "application/pdf",
  // Excel
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
  "application/vnd.ms-excel", // .xls
];

/**
 * Uzantıdan tür çıkarımı. Tarayıcı, Office dosyalarında `file.type`
 * değerini boş bırakabiliyor (özellikle Android'de); o durumda dosya
 * geçerli olduğu hâlde reddedilirdi.
 */
const TYPE_BY_EXTENSION = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  heic: "image/heic",
  heif: "image/heif",
  pdf: "application/pdf",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xls: "application/vnd.ms-excel",
};

/** Dosya seçicide gösterilecek filtre: tür + uzantı birlikte. */
export const FILE_ACCEPT_ATTRIBUTE = [
  ...ALLOWED_FILE_TYPES,
  ...Object.keys(TYPE_BY_EXTENSION).map((extension) => `.${extension}`),
].join(",");

/**
 * Dosyanın kullanılacak MIME türü. Tarayıcının bildirdiği tür listede
 * yoksa uzantıya bakılır; o da tutmazsa boş dize döner ve dosya reddedilir.
 */
export function resolveFileType(file) {
  if (ALLOWED_FILE_TYPES.includes(file?.type)) return file.type;

  const extension = String(file?.name ?? "").split(".").pop()?.toLowerCase();
  return TYPE_BY_EXTENSION[extension] ?? "";
}

// Mesai penceresi — hem sunucu uçları hem de widget kullanıyor, bu yüzden
// sunucuya özgü hiçbir şey (process.env, node: modülleri) içermez.
//
// Dışında kalan saatlerde sohbet yine açılır; ziyaretçiye "geri döneceğiz"
// mesajı gösterilip iletişim bilgisi istenir.

export const BUSINESS_HOURS = { startHour: 9, endHour: 20 };

const ISTANBUL_HOUR_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Istanbul",
  hour: "2-digit",
  hour12: false,
});

/** Sunucu saati UTC, ziyaretçi saati herhangi bir dilim olabilir; ölçüt İstanbul. */
export function isWithinBusinessHours(date = new Date()) {
  const hour = Number(ISTANBUL_HOUR_FORMATTER.format(date));
  if (Number.isNaN(hour)) return true;
  return hour >= BUSINESS_HOURS.startHour && hour < BUSINESS_HOURS.endHour;
}

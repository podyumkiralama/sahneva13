const STRINGS = {
  tr: {
    toMain: "Ana içeriğe geç",
    toHeader: "Üst menüye geç",
    toFooter: "Alt bilgiye geç",
  },
  en: {
    toMain: "Skip to main content",
    toHeader: "Skip to header",
    toFooter: "Skip to footer",
  },
  ar: {
    toMain: "انتقل إلى المحتوى الرئيسي",
    toHeader: "انتقل إلى الترويسة",
    toFooter: "انتقل إلى التذييل",
  },
};

const LINK_CLASSNAME =
  "sr-only focus:not-sr-only focus:fixed focus:left-2 focus:z-[9999] inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg focus-ring";

const SKIP_TARGETS = [
  { id: "_main_content", key: "toMain" },
  { id: "_main_header", key: "toHeader" },
  { id: "_main_footer", key: "toFooter" },
];

function normalizeLocale(value) {
  if (!value) return "tr";
  const normalized = value.toLowerCase();
  if (normalized.startsWith("en")) return "en";
  if (normalized.startsWith("ar")) return "ar";
  return "tr";
}

export default function SkipLinks({ locale = "tr" }) {
  const strings = STRINGS[normalizeLocale(locale)] ?? STRINGS.tr;

  return (
    <nav
      aria-label={strings.toMain}
      className="fixed left-2 top-2 z-[9999] pointer-events-none"
    >
      {SKIP_TARGETS.map(({ id, key }, index) => (
        <a
          key={id}
          href={`#${id}`}
          className={`${LINK_CLASSNAME} pointer-events-auto`}
          style={{ top: `${0.5 + index * 3}rem` }}
        >
          {strings[key]}
        </a>
      ))}
    </nav>
  );
}

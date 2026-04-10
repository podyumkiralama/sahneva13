const STRINGS = {
  tr: {
    toMain: "Ana icerige gec",
    toHeader: "Ust menuye gec",
    toFooter: "Alt bilgiye gec",
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
  "inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg focus-ring";

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
      className="sr-only focus-within:not-sr-only fixed left-2 top-2 z-[9999] space-y-2"
    >
      {SKIP_TARGETS.map(({ id, key }) => (
        <a key={id} href={`#${id}`} className={LINK_CLASSNAME}>
          {strings[key]}
        </a>
      ))}
    </nav>
  );
}

const TOKEN_REGEX =
  /(<strong>.*?<\/strong>|<em>.*?<\/em>|<br\s*\/?>|<span class="[^"]*">.*?<\/span>)/gi;

function sanitizeClassName(className = "") {
  return className
    .split(/\s+/)
    .filter(Boolean)
    .filter((token) => /^[a-zA-Z0-9:_/.[\]%#()-]+$/.test(token))
    .join(" ");
}

function renderToken(token, key) {
  if (/^<br\s*\/?>$/i.test(token)) {
    return <br key={key} />;
  }

  const strongMatch = token.match(/^<strong>(.*?)<\/strong>$/i);
  if (strongMatch) {
    return <strong key={key}>{strongMatch[1]}</strong>;
  }

  const emMatch = token.match(/^<em>(.*?)<\/em>$/i);
  if (emMatch) {
    return <em key={key}>{emMatch[1]}</em>;
  }

  const spanMatch = token.match(/^<span class="([^"]*)">(.*?)<\/span>$/i);
  if (spanMatch) {
    const [, className, text] = spanMatch;
    return (
      <span key={key} className={sanitizeClassName(className)}>
        {text}
      </span>
    );
  }

  return token;
}

export default function RichText({ text = "" }) {
  if (!text) return null;

  const parts = text.split(TOKEN_REGEX).filter(Boolean);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("<") ? renderToken(part, index) : part
      )}
    </>
  );
}

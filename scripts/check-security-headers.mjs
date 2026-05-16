const targetUrl =
  process.argv[2] ?? process.env.SECURITY_CHECK_URL ?? "https://www.sahneva.com/";
const timeoutMs = Number(process.env.SECURITY_CHECK_TIMEOUT_MS ?? 15000);

const requiredHeaders = [
  ["content-security-policy", (value) => value.includes("script-src-attr 'none'")],
  ["x-content-type-options", (value) => value.toLowerCase() === "nosniff"],
  [
    "referrer-policy",
    (value) =>
      ["same-origin", "strict-origin-when-cross-origin"].includes(
        value.toLowerCase(),
      ),
  ],
  ["permissions-policy", (value) => value.includes("camera=()")],
  ["strict-transport-security", (value) => value.includes("max-age=")],
];

const response = await fetch(targetUrl, {
  redirect: "manual",
  signal: AbortSignal.timeout(timeoutMs),
});

if (response.status < 200 || response.status >= 400) {
  throw new Error(`Unexpected response status ${response.status} for ${targetUrl}`);
}

const failures = [];

for (const [name, validate] of requiredHeaders) {
  const value = response.headers.get(name);

  if (!value) {
    failures.push(`${name}: missing`);
    continue;
  }

  if (!validate(value)) {
    failures.push(`${name}: unexpected value: ${value}`);
  }
}

if (failures.length) {
  console.error(`Security header check failed for ${targetUrl}`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Security headers OK for ${targetUrl}`);

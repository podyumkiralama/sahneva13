const MAX_FIELD_LENGTH = 2000;
const REQUIRED_FIELDS = ["name", "message"];

function sanitizeValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { valid: false, errors: ["Invalid request body."] };
  }

  const normalized = {
    name: sanitizeValue(payload.name),
    email: sanitizeValue(payload.email),
    phone: sanitizeValue(payload.phone),
    service: sanitizeValue(payload.service),
    city: sanitizeValue(payload.city),
    eventDate: sanitizeValue(payload.eventDate),
    message: sanitizeValue(payload.message),
  };

  const errors = [];

  REQUIRED_FIELDS.forEach((field) => {
    if (!normalized[field]) {
      errors.push(`${field} is required.`);
    }
  });

  Object.entries(normalized).forEach(([field, value]) => {
    if (value.length > MAX_FIELD_LENGTH) {
      errors.push(`${field} is too long.`);
    }
  });

  if (normalized.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized.email)) {
    errors.push("email is invalid.");
  }

  if (normalized.phone && !/^[+\d\s().-]{7,}$/.test(normalized.phone)) {
    errors.push("phone is invalid.");
  }

  return { valid: errors.length === 0, errors, normalized };
}

export async function POST(req) {
  try {
    const payload = await req.json();
    const validation = validatePayload(payload);

    if (!validation.valid) {
      return Response.json(
        { ok: false, errors: validation.errors },
        { status: 400 },
      );
    }

    if (process.env.NODE_ENV !== "production") {
      console.info("QUOTE_REQ", validation.normalized);
    }

    return Response.json(
      {
        ok: true,
        message:
          "Quote request accepted. Delivery integration is not configured yet.",
      },
      { status: 202 },
    );
  } catch {
    return Response.json(
      {
        ok: false,
        errors: ["Request body must be valid JSON."],
      },
      { status: 400 },
    );
  }
}

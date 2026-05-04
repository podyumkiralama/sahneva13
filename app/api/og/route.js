import { ImageResponse } from "next/og";

export const runtime = "edge";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");

const FALLBACK_TITLE = "Sahneva Organizasyon";
const FALLBACK_DESCRIPTION =
  "Sahne • Podyum • LED Ekran • Ses & Işık • Çadır";

const clampText = (value, maxLength) => {
  const text = String(value ?? "").trim();
  if (!text) return "";
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const title = clampText(searchParams.get("title") || FALLBACK_TITLE, 78);
  const description = clampText(
    searchParams.get("description") || FALLBACK_DESCRIPTION,
    130
  );
  const eyebrow = clampText(searchParams.get("eyebrow") || "Türkiye Geneli Etkinlik Prodüksiyonu", 56);
  const image = searchParams.get("image");

  const backgroundImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`
    : `${SITE_URL}/img/og/sahneva-og.webp`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#07111f",
          color: "white",
          overflow: "hidden",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <img
          src={backgroundImage}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.62,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(110deg, rgba(7,17,31,0.96) 0%, rgba(11,24,48,0.82) 46%, rgba(30,64,175,0.54) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 78% 18%, rgba(59,130,246,0.48), transparent 30%), radial-gradient(circle at 18% 88%, rgba(147,51,234,0.36), transparent 34%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 34,
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: 34,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 82px 64px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 62,
                height: 62,
                borderRadius: 18,
                background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                fontWeight: 900,
                boxShadow: "0 18px 60px rgba(37,99,235,0.42)",
              }}
            >
              S
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-0.02em" }}>
                Sahneva Organizasyon
              </div>
              <div style={{ fontSize: 18, color: "rgba(255,255,255,0.72)", marginTop: 3 }}>
                sahneva.com
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 860 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                padding: "10px 18px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#bfdbfe",
                fontSize: 22,
                fontWeight: 800,
                marginBottom: 28,
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                fontSize: title.length > 54 ? 62 : 72,
                lineHeight: 0.94,
                letterSpacing: "-0.055em",
                fontWeight: 950,
                textShadow: "0 18px 70px rgba(0,0,0,0.46)",
              }}
            >
              {title}
            </div>
            <div
              style={{
                marginTop: 28,
                fontSize: 29,
                lineHeight: 1.22,
                color: "rgba(255,255,255,0.82)",
                maxWidth: 820,
              }}
            >
              {description}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {["Sahne", "Podyum", "LED Ekran", "Ses & Işık", "Çadır"].map((item) => (
              <div
                key={item}
                style={{
                  padding: "10px 16px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  fontSize: 18,
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.86)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

// app/api/og/route.js
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

async function fetchAsBase64(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const buffer = await res.arrayBuffer();
    const contentType = res.headers.get('content-type') || 'image/webp';
    const bytes = new Uint8Array(buffer);
    let binary = '';
    const chunkSize = 8192;
    for (let i = 0; i < bytes.length; i += chunkSize) {
      binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
    }
    const base64 = btoa(binary);
    return `data:${contentType};base64,${base64}`;
  } catch {
    return null;
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get('title')?.slice(0, 100) || 'Sahneva Organizasyon & Podyum Kiralama';
    const bgParam = searchParams.get('bg');

    const baseUrl = (
      process.env.SITE_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://www.sahneva.com'
    ).replace(/\/$/, '');

    let bgUrl = null;
    if (bgParam) {
      if (bgParam.startsWith('http')) {
        bgUrl = bgParam;
      } else {
        bgUrl = `${baseUrl}${bgParam.startsWith('/') ? '' : '/'}${bgParam}`;
      }
    }

    const [bgDataUrl, logoDataUrl] = await Promise.all([
      bgUrl ? fetchAsBase64(bgUrl) : Promise.resolve(null),
      fetchAsBase64(`${baseUrl}/img/logo.png`),
    ]);

    const hasBg = !!bgDataUrl;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#0A0A0A',
            position: 'relative',
            padding: '80px',
          }}
        >
          {/* 1. KATMAN: Arka Plan Resmi (base64 data URL ile SSL-safe) */}
          {hasBg && (
            <img
              src={bgDataUrl}
              alt=""
              role="presentation"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}

          {/* 2. KATMAN: Karartma (Overlay) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: hasBg
                ? 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.1) 100%)'
                : 'radial-gradient(circle at 25px 25px, #222 2%, transparent 0%), radial-gradient(circle at 75px 75px, #222 2%, transparent 0%)',
              backgroundSize: hasBg ? '100% 100%' : '100px 100px',
            }}
          />

          {/* 3. KATMAN: İçerik (Logo, Başlık, Domain) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            {/* Sol Üst Logo */}
            <div style={{ display: 'flex' }}>
              {logoDataUrl && (
                <img
                  src={logoDataUrl}
                  alt="Sahneva Logo"
                  width="250"
                  style={{ objectFit: 'contain' }}
                />
              )}
            </div>

            {/* Dinamik Başlık */}
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '850px' }}>
              <h1
                style={{
                  fontSize: 72,
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  fontFamily: 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                }}
              >
                {title}
              </h1>
            </div>

            {/* Alt Bilgi Bandı (Domain) */}
            <div
              style={{
                display: 'flex',
                fontSize: 32,
                color: '#E4E4E7',
                fontWeight: 500,
                letterSpacing: '0.05em',
              }}
            >
              sahneva.com
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error('OG Image Generation Hatası:', e.message);
    return new Response(`Failed to generate the image`, { status: 500 });
  }
}

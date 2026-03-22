// app/api/og/route.js
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    // Parametreleri alıyoruz
    const title = searchParams.get('title')?.slice(0, 100) || 'Sahneva Organizasyon & Podyum Kiralama';
    const bgParam = searchParams.get('bg'); // Resim yolu parametresi

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sahneva.com';

    // Eğer bg parametresi geldiyse, URL'yi oluşturuyoruz
    let bgUrl = null;
    if (bgParam) {
      if (bgParam.startsWith('http')) {
        bgUrl = bgParam;
      } else {
        // "/img/blog/..." gibi göreceli bir yolsa ana domain ile birleştir
        bgUrl = `${baseUrl}${bgParam.startsWith('/') ? '' : '/'}${bgParam}`;
      }
    }

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
          {/* 1. KATMAN: Arka Plan Resmi (Eğer gönderildiyse) */}
          {bgUrl && (
            <img
              src={bgUrl}
              alt="Background"
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

          {/* 2. KATMAN: Karartma (Overlay) - Yazının okunabilirliğini garanti eder */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              // Resim varsa soldan sağa açılan siyah degrade, yoksa standart kurumsal desen
              backgroundImage: bgUrl
                ? 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.1) 100%)'
                : 'radial-gradient(circle at 25px 25px, #222 2%, transparent 0%), radial-gradient(circle at 75px 75px, #222 2%, transparent 0%)',
              backgroundSize: bgUrl ? '100% 100%' : '100px 100px',
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
              <img
                src={`${baseUrl}/img/logo.png`}
                alt="Sahneva Logo"
                width="250"
                style={{ objectFit: 'contain' }}
              />
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

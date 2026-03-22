import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Sadece başlığı alıyoruz (Resmi API içinden biz vereceğiz)
    const title = searchParams.get('title')?.slice(0, 100) || 'Sahneva Organizasyon & Podyum Kiralama';

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sahneva.com';

    // Sitenizdeki hazır JPG dosyasını kullanıyoruz (WebP kullanmadığımız için çökmeyecek)
    const bgUrl = `${baseUrl}/img/og.jpg`;
    const logoUrl = `${baseUrl}/img/logo.png`; // Bu zaten PNG, sorunsuz okur

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
          {/* 1. KATMAN: Sabit ve Güvenli JPG Arka Plan */}
          <img
            src={bgUrl}
            alt=""
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* 2. KATMAN: Okunabilirlik için Siyah Degrade Film */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.2) 100%)',
            }}
          />

          {/* 3. KATMAN: Dinamik İçerik (Logo ve Değişen Yazı) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              justifyContent: 'space-between',
              zIndex: 10,
            }}
          >
            {/* Logo */}
            <div style={{ display: 'flex' }}>
              <img
                src={logoUrl}
                alt="Sahneva Logo"
                width="250"
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Linkten Gelen Dinamik Blog Başlığı */}
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '850px' }}>
              <h1
                style={{
                  fontSize: 76,
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                {title}
              </h1>
            </div>

            <div
              style={{
                display: 'flex',
                fontSize: 32,
                color: '#E4E4E7',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
              }}
            >
              www.sahneva.com
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
    console.error('OG Hatasi:', e);
    return new Response(`Resim uretilemedi`, { status: 500 });
  }
}

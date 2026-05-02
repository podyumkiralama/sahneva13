<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  exclude-result-prefixes="sitemap image video"
>
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="tr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sahneva Sitemap</title>
        <style>
          :root {
            color-scheme: light;
            --bg: #f5f7fb;
            --panel: #ffffff;
            --text: #0f172a;
            --muted: #64748b;
            --line: #dbe3ef;
            --brand: #4f46e5;
            --brand-soft: #eef2ff;
          }

          * { box-sizing: border-box; }

          body {
            margin: 0;
            background: var(--bg);
            color: var(--text);
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            line-height: 1.5;
          }

          main {
            width: min(1120px, calc(100% - 32px));
            margin: 40px auto;
          }

          .hero {
            border: 1px solid var(--line);
            border-radius: 18px;
            background: linear-gradient(135deg, #ffffff 0%, #eef2ff 100%);
            padding: 28px;
            box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
          }

          .eyebrow {
            margin: 0 0 8px;
            color: var(--brand);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }

          h1 {
            margin: 0;
            font-size: clamp(28px, 4vw, 44px);
            line-height: 1.05;
            letter-spacing: 0;
          }

          .summary {
            margin: 12px 0 0;
            max-width: 760px;
            color: var(--muted);
            font-size: 16px;
          }

          .stats {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;
          }

          .stat {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--line);
            border-radius: 999px;
            background: rgba(255,255,255,0.72);
            padding: 8px 12px;
            color: var(--muted);
            font-size: 13px;
            font-weight: 700;
          }

          .stat strong { color: var(--text); }

          .table-wrap {
            margin-top: 24px;
            overflow: hidden;
            border: 1px solid var(--line);
            border-radius: 16px;
            background: var(--panel);
            box-shadow: 0 14px 36px rgba(15, 23, 42, 0.06);
          }

          table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
          }

          th {
            background: #f8fafc;
            color: #334155;
            font-size: 12px;
            letter-spacing: 0.08em;
            text-align: left;
            text-transform: uppercase;
          }

          th, td {
            padding: 14px 16px;
            border-bottom: 1px solid var(--line);
            vertical-align: top;
          }

          tr:last-child td { border-bottom: 0; }

          a {
            color: #2563eb;
            font-weight: 700;
            overflow-wrap: anywhere;
            text-decoration: none;
          }

          a:hover { text-decoration: underline; }

          .muted { color: var(--muted); }
          .center { text-align: center; }
          .badge {
            display: inline-flex;
            align-items: center;
            border-radius: 999px;
            background: var(--brand-soft);
            color: #3730a3;
            padding: 4px 8px;
            font-size: 12px;
            font-weight: 800;
          }

          @media (max-width: 760px) {
            main {
              width: min(100% - 20px, 1120px);
              margin: 20px auto;
            }

            .hero { padding: 20px; }

            table, thead, tbody, tr, th, td {
              display: block;
              width: 100%;
            }

            thead { display: none; }

            tr { border-bottom: 1px solid var(--line); }
            tr:last-child { border-bottom: 0; }

            td {
              border-bottom: 0;
              padding: 10px 14px;
            }

            td::before {
              content: attr(data-label);
              display: block;
              margin-bottom: 3px;
              color: var(--muted);
              font-size: 11px;
              font-weight: 800;
              letter-spacing: 0.08em;
              text-transform: uppercase;
            }
          }
        </style>
      </head>
      <body>
        <main>
          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">
              <xsl:call-template name="sitemap-index" />
            </xsl:when>
            <xsl:otherwise>
              <xsl:call-template name="urlset" />
            </xsl:otherwise>
          </xsl:choose>
        </main>
      </body>
    </html>
  </xsl:template>

  <xsl:template name="sitemap-index">
    <section class="hero">
      <p class="eyebrow">Sahneva Sitemap Index</p>
      <h1>Site Haritası</h1>
      <p class="summary">Bu XML dosyası Sahneva sayfalarını, blog içeriklerini ve proje bağlantılarını arama motorları için gruplandırır.</p>
      <div class="stats">
        <span class="stat"><strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)" /></strong> sitemap dosyası</span>
      </div>
    </section>

    <section class="table-wrap" aria-label="Sitemap listesi">
      <table>
        <thead>
          <tr>
            <th>Sitemap</th>
            <th>Son Güncelleme</th>
          </tr>
        </thead>
        <tbody>
          <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
            <tr>
              <td data-label="Sitemap">
                <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a>
              </td>
              <td data-label="Son Güncelleme" class="muted">
                <xsl:choose>
                  <xsl:when test="sitemap:lastmod"><xsl:value-of select="sitemap:lastmod" /></xsl:when>
                  <xsl:otherwise>-</xsl:otherwise>
                </xsl:choose>
              </td>
            </tr>
          </xsl:for-each>
        </tbody>
      </table>
    </section>
  </xsl:template>

  <xsl:template name="urlset">
    <section class="hero">
      <p class="eyebrow">Sahneva URL Sitemap</p>
      <h1>URL Listesi</h1>
      <p class="summary">Bu sitemap içindeki URL’ler, güncelleme tarihi ve öncelik bilgisiyle birlikte listelenir.</p>
      <div class="stats">
        <span class="stat"><strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)" /></strong> URL</span>
        <span class="stat"><strong><xsl:value-of select="count(sitemap:urlset/sitemap:url[image:image])" /></strong> görsel içeren URL</span>
        <span class="stat"><strong><xsl:value-of select="count(sitemap:urlset/sitemap:url[video:video])" /></strong> video içeren URL</span>
      </div>
    </section>

    <section class="table-wrap" aria-label="URL listesi">
      <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>Son Güncelleme</th>
            <th>Frekans</th>
            <th>Öncelik</th>
            <th class="center">Medya</th>
          </tr>
        </thead>
        <tbody>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td data-label="URL">
                <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a>
              </td>
              <td data-label="Son Güncelleme" class="muted">
                <xsl:choose>
                  <xsl:when test="sitemap:lastmod"><xsl:value-of select="sitemap:lastmod" /></xsl:when>
                  <xsl:otherwise>-</xsl:otherwise>
                </xsl:choose>
              </td>
              <td data-label="Frekans" class="muted">
                <xsl:choose>
                  <xsl:when test="sitemap:changefreq"><xsl:value-of select="sitemap:changefreq" /></xsl:when>
                  <xsl:otherwise>-</xsl:otherwise>
                </xsl:choose>
              </td>
              <td data-label="Öncelik">
                <xsl:choose>
                  <xsl:when test="sitemap:priority"><span class="badge"><xsl:value-of select="sitemap:priority" /></span></xsl:when>
                  <xsl:otherwise><span class="muted">-</span></xsl:otherwise>
                </xsl:choose>
              </td>
              <td data-label="Medya" class="center muted">
                <xsl:value-of select="count(image:image)" /> görsel / <xsl:value-of select="count(video:video)" /> video
              </td>
            </tr>
          </xsl:for-each>
        </tbody>
      </table>
    </section>
  </xsl:template>
</xsl:stylesheet>

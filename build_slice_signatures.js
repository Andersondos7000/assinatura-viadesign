const fs = require('fs');

const GITHUB_PAGES_BASE = 'https://andersondos7000.github.io/assinatura-viadesign/slices';

const people = [
  {
    key: 'anderson',
    name: 'ANDERSON ARAÚJO',
    phone: '(18) 99160-4609',
    phoneRaw: '5518991604609'
  },
  {
    key: 'daniel',
    name: 'DANIEL SANTANA',
    phone: '(18) 98801-7190',
    phoneRaw: '5518988017190'
  },
  {
    key: 'fernandes',
    name: 'FERNANDES CESAR',
    phone: '(18) 99744-2528',
    phoneRaw: '5518997442528'
  },
  {
    key: 'tiago',
    name: 'TIAGO BANSI',
    phone: '(18) 99631-2442',
    phoneRaw: '5518996312442'
  }
];

const fbUrl = 'https://www.facebook.com/viadesigncomunicacao';
const igUrl = 'https://www.instagram.com/viadesign_aracatuba/';
const telUrl = 'tel:551833058370';
const mapsUrl = 'https://maps.google.com/?q=R.+Benedito+Rodrigues+do+Prado,+30+-+Jardim+do+Prado,+Ara%C3%A7atuba+-+SP,+16025-390';
const siteUrl = 'https://viadesign.com.br';

function generateSignature(p) {
  const waUrl = `https://wa.me/${p.phoneRaw}`;

  return `<!-- ASSINATURA VIA DESIGN 100% FIEL FATIADA - ${p.name} -->
<table cellpadding="0" cellspacing="0" border="0" style="width: 568px; max-width: 568px; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; margin: 0; padding: 0;">
  <tr>
    <!-- COLUNA 1: FOTO DO COLABORADOR (148x152px) -->
    <td width="148" height="152" valign="top" style="width: 148px; height: 152px; padding: 0; margin: 0; line-height: 0; font-size: 0;">
      <a href="${waUrl}" target="_blank" style="text-decoration: none; border: 0; display: block;">
        <img src="${GITHUB_PAGES_BASE}/slice_avatar_${p.key}.png" width="148" height="152" alt="${p.name}" border="0" style="width: 148px; height: 152px; display: block; border: 0; outline: none; margin: 0; padding: 0;" />
      </a>
    </td>

    <!-- COLUNA 2: DADOS + REDES SOCIAIS (260x152px) -->
    <td width="260" height="152" valign="top" style="width: 260px; height: 152px; padding: 0; margin: 0; line-height: 0; font-size: 0;">
      <table cellpadding="0" cellspacing="0" border="0" style="width: 260px; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; margin: 0; padding: 0;">
        <!-- LINHA NOME / CARGO (260x57px) -->
        <tr>
          <td width="260" height="57" style="width: 260px; height: 57px; padding: 0; margin: 0; line-height: 0; font-size: 0;">
            <a href="${waUrl}" target="_blank" style="text-decoration: none; border: 0; display: block;">
              <img src="${GITHUB_PAGES_BASE}/slice_name_${p.key}.png" width="260" height="57" alt="${p.name}" border="0" style="width: 260px; height: 57px; display: block; border: 0; outline: none; margin: 0; padding: 0;" />
            </a>
          </td>
        </tr>
        <!-- LINHA FACEBOOK (260x31px) -->
        <tr>
          <td width="260" height="31" style="width: 260px; height: 31px; padding: 0; margin: 0; line-height: 0; font-size: 0;">
            <a href="${fbUrl}" target="_blank" style="text-decoration: none; border: 0; display: block;">
              <img src="${GITHUB_PAGES_BASE}/slice_fb.png" width="260" height="31" alt="Facebook" border="0" style="width: 260px; height: 31px; display: block; border: 0; outline: none; margin: 0; padding: 0;" />
            </a>
          </td>
        </tr>
        <!-- LINHA WHATSAPP (260x32px) -->
        <tr>
          <td width="260" height="32" style="width: 260px; height: 32px; padding: 0; margin: 0; line-height: 0; font-size: 0;">
            <a href="${waUrl}" target="_blank" style="text-decoration: none; border: 0; display: block;">
              <img src="${GITHUB_PAGES_BASE}/slice_wa_${p.key}.png" width="260" height="32" alt="WhatsApp" border="0" style="width: 260px; height: 32px; display: block; border: 0; outline: none; margin: 0; padding: 0;" />
            </a>
          </td>
        </tr>
        <!-- LINHA INSTAGRAM (260x32px) -->
        <tr>
          <td width="260" height="32" style="width: 260px; height: 32px; padding: 0; margin: 0; line-height: 0; font-size: 0;">
            <a href="${igUrl}" target="_blank" style="text-decoration: none; border: 0; display: block;">
              <img src="${GITHUB_PAGES_BASE}/slice_ig.png" width="260" height="32" alt="Instagram" border="0" style="width: 260px; height: 32px; display: block; border: 0; outline: none; margin: 0; padding: 0;" />
            </a>
          </td>
        </tr>
      </table>
    </td>

    <!-- COLUNA 3: LOGO + TELEFONE DA FÁBRICA (160x152px) -->
    <td width="160" height="152" valign="top" style="width: 160px; height: 152px; padding: 0; margin: 0; line-height: 0; font-size: 0;">
      <table cellpadding="0" cellspacing="0" border="0" style="width: 160px; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; margin: 0; padding: 0;">
        <!-- LOGO VIA DESIGN (160x88px) -->
        <tr>
          <td width="160" height="88" style="width: 160px; height: 88px; padding: 0; margin: 0; line-height: 0; font-size: 0;">
            <a href="${siteUrl}" target="_blank" style="text-decoration: none; border: 0; display: block;">
              <img src="${GITHUB_PAGES_BASE}/slice_logo_${p.key}.png" width="160" height="88" alt="Via Design" border="0" style="width: 160px; height: 88px; display: block; border: 0; outline: none; margin: 0; padding: 0;" />
            </a>
          </td>
        </tr>
        <!-- TELEFONE FÁBRICA 3305-8370 (160x64px) -->
        <tr>
          <td width="160" height="64" style="width: 160px; height: 64px; padding: 0; margin: 0; line-height: 0; font-size: 0;">
            <a href="${telUrl}" style="text-decoration: none; border: 0; display: block;">
              <img src="${GITHUB_PAGES_BASE}/slice_phone.png" width="160" height="64" alt="Telefone Fábrica (18) 3305-8370" border="0" style="width: 160px; height: 64px; display: block; border: 0; outline: none; margin: 0; padding: 0;" />
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- LINHA INFERIOR: BARRA DE ENDEREÇO COMPLETA (568x33px) -->
  <tr>
    <td colspan="3" width="568" height="33" style="width: 568px; height: 33px; padding: 0; margin: 0; line-height: 0; font-size: 0;">
      <a href="${mapsUrl}" target="_blank" style="text-decoration: none; border: 0; display: block;">
        <img src="${GITHUB_PAGES_BASE}/slice_address.png" width="568" height="33" alt="Endereço Via Design no Google Maps" border="0" style="width: 568px; height: 33px; display: block; border: 0; outline: none; margin: 0; padding: 0;" />
      </a>
    </td>
  </tr>
</table>`;
}

// Generate individual signature pages
people.forEach(p => {
  const sigHtml = generateSignature(p);
  const fullHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Assinatura ${p.name} - Via Design (Fiel ao Original)</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #f8fafc;
      padding: 24px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    .container {
      max-width: 630px;
      margin: 0 auto;
      background: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.06);
      border: 1px solid #e2e8f0;
    }
    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid #f1f5f9;
    }
    .colab-name {
      font-size: 16px;
      font-weight: 700;
      color: #0f172a;
    }
    .btn-copy {
      background: #e51920;
      color: #ffffff;
      border: none;
      padding: 10px 18px;
      font-size: 13px;
      font-weight: 700;
      border-radius: 6px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .btn-copy:hover { background: #c40a0a; }
    .toast {
      display: none;
      margin-left: 10px;
      color: #16a34a;
      font-weight: 700;
      font-size: 13px;
    }
    .sig-area {
      width: 568px;
      height: 185px;
      margin: 0 auto;
      display: block;
      line-height: 0;
      font-size: 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header-bar">
      <span class="colab-name">${p.name}</span>
      <div>
        <button class="btn-copy" onclick="copySig()">📋 Copiar para o Gmail</button>
        <span id="toast" class="toast">✓ Copiado! Cole no Gmail (Ctrl+V).</span>
      </div>
    </div>

    <!-- ASSINATURA EM TABELA FATIADA (COMPATIBILIDADE NATIVA GMAIL) -->
    <div id="sig-container" class="sig-area">
${sigHtml}
    </div>
  </div>

  <script>
    function copySig() {
      const el = document.getElementById('sig-container');
      const range = document.createRange();
      range.selectNode(el);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      try {
        document.execCommand('copy');
        const t = document.getElementById('toast');
        t.style.display = 'inline';
        setTimeout(() => { t.style.display = 'none'; }, 3000);
      } catch (err) {
        alert('Selecione com o mouse e aperte Ctrl+C.');
      }
      window.getSelection().removeAllRanges();
    }
  </script>
</body>
</html>`;

  fs.writeFileSync(`assinatura-${p.key}.html`, fullHtml, 'utf8');
});

// Central hub page
const centralHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Central de Assinaturas de E-mail - Via Design</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: #f1f5f9;
      padding: 30px 20px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    .container {
      max-width: 630px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .header {
      text-align: center;
      margin-bottom: 8px;
    }
    .header h1 {
      font-size: 22px;
      font-weight: 800;
      color: #0f172a;
    }
    .header p {
      font-size: 14px;
      color: #64748b;
      margin-top: 6px;
    }
    .card {
      background: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.06);
      border: 1px solid #e2e8f0;
    }
    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 14px;
      padding-bottom: 10px;
      border-bottom: 1px solid #f1f5f9;
    }
    .card-name {
      font-size: 15px;
      font-weight: 700;
      color: #0f172a;
    }
    .btn {
      background: #e51920;
      color: #ffffff;
      border: none;
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 700;
      border-radius: 6px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .btn:hover { background: #c40a0a; }
    .sig-area {
      width: 568px;
      height: 185px;
      margin: 0 auto;
      display: block;
      line-height: 0;
      font-size: 0;
    }
    .toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #16a34a;
      color: #ffffff;
      padding: 12px 22px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 14px;
      display: none;
      box-shadow: 0 6px 20px rgba(0,0,0,0.25);
      z-index: 9999;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Central de Assinaturas de E-mail</h1>
      <p>Arte original 100% preservada em fatiamento nativo com links independentes para o Gmail.</p>
    </div>

    ${people.map(p => `
    <div class="card">
      <div class="card-top">
        <span class="card-name">${p.name}</span>
        <button class="btn" onclick="copySig('${p.key}')">📋 Copiar Assinatura</button>
      </div>
      <div class="sig-area" id="sig-${p.key}">
${generateSignature(p)}
      </div>
    </div>`).join('\n')}
  </div>

  <div id="toast" class="toast">✓ Assinatura copiada! Cole no Gmail (Ctrl+V).</div>

  <script>
    function copySig(key) {
      const el = document.getElementById('sig-' + key);
      const range = document.createRange();
      range.selectNode(el);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      try {
        document.execCommand('copy');
        const t = document.getElementById('toast');
        t.style.display = 'block';
        setTimeout(() => { t.style.display = 'none'; }, 3000);
      } catch (e) {
        alert('Selecione com o mouse e aperte Ctrl+C.');
      }
      window.getSelection().removeAllRanges();
    }
  </script>
</body>
</html>`;

fs.writeFileSync('central-assinaturas.html', centralHtml, 'utf8');
fs.writeFileSync('index.html', centralHtml, 'utf8');
console.log('Saved slice-based HTML signatures and central hub.');

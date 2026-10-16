# Assinaturas de E-mail Profissionais - Via Design

Sistema de assinaturas de e-mail corporativas da **Via Design**, desenvolvidas para manter **100% de fidelidade visual à arte original do CorelDRAW** e total compatibilidade com o **Gmail** (preservando links individuais clicáveis via fatiamento nativo em tabela HTML).

---

## 🌐 Central de Assinaturas (GitHub Pages)

Acesse diretamente pelo navegador para visualizar e copiar a assinatura desejada com um clique:

👉 **[https://andersondos7000.github.io/assinatura-viadesign/](https://andersondos7000.github.io/assinatura-viadesign/)**

### Links Individuais por Colaborador:
- [Anderson Araújo](https://andersondos7000.github.io/assinatura-viadesign/assinatura-anderson.html)
- [Daniel Santana](https://andersondos7000.github.io/assinatura-viadesign/assinatura-daniel.html)
- [Fernandes Cesar](https://andersondos7000.github.io/assinatura-viadesign/assinatura-fernandes.html)
- [Tiago Bansi](https://andersondos7000.github.io/assinatura-viadesign/assinatura-tiago.html)

---

## 📋 Como Instalar no Gmail

1. Abra a [Central de Assinaturas](https://andersondos7000.github.io/assinatura-viadesign/) ou a página do seu nome.
2. Clique no botão vermelho **"📋 Copiar Assinatura"** (ou selecione a assinatura na tela e pressione `Ctrl+C`).
3. No **Gmail**, clique no ícone de engrenagem ⚙️ (Canto superior direito) > **Ver todas as configurações**.
4. Na aba **Geral**, role até a seção **Assinatura**.
5. Crie uma nova assinatura ou clique na existente, cole no campo de texto com `Ctrl+V`.
6. Role até o final da página e clique em **Salvar alterações**.

---

## 🔗 Links Mapeados em Cada Assinatura

Cada botão e elemento da assinatura possui link direto e independente:

| Elemento | Destino / Ação | Link |
|---|---|---|
| **Foto do Colaborador (Círculo)** | WhatsApp direto do colaborador | `https://wa.me/5518...` |
| **Nome e Cargo** | WhatsApp direto do colaborador | `https://wa.me/5518...` |
| **Linha Facebook** | Fanpage oficial Via Design | `https://www.facebook.com/viadesigncomunicacao` |
| **Linha WhatsApp** | WhatsApp direto do colaborador | `https://wa.me/5518...` |
| **Linha Instagram** | Instagram oficial Via Design | `https://www.instagram.com/viadesign_aracatuba/` |
| **Logo Via Design** | Site Institucional | `https://viadesign.com.br` |
| **Telefone da Fábrica** | Discagem direta | `tel:551833058370` |
| **Barra Inferior (Endereço)** | Google Maps | `https://maps.google.com/?q=...` |

> **Nota:** Conforme solicitado, o telefone celular sob o logo foi removido, mantendo exclusivamente o telefone fixo da fábrica: **(18) 3305-8370**.

---

## 🛠️ Arquitetura Técnica e Fatiamento

### Por que o fatiamento em tabela foi a solução adotada?
1. **Gmail descarta tags `<map>` e `<area>`**: Ao colar imagens com mapa HTML, o Gmail remove os metadados do mapa e cola apenas a imagem estática.
2. **Gmail descarta SVGs puros**: O editor do Gmail limpa nós `<svg>`, `<path>` e converte em texto sem formatação.
3. **HTML textual puro descaracteriza a marca**: Fontes de sistema não reproduzem o kerning, a proporção exata e os efeitos tridimensionais das fitas e sombras do CorelDRAW.
4. **Solução Definitiva**: A arte mestre oficial (568x185px) foi fatiada com precisão de pixel pelo script `slice_master.ps1`. Cada pedaço é uma imagem PNG contínua em células de uma `<table>` com espaçamento e padding zerados, cada uma envelopada com `<a href="...">`. O Gmail preserva as tags de link (`<a>`) e une perfeitamente as imagens sem vãos.

### Estrutura de Arquivos do Projeto:

```text
Assinatura-email/
├── VALIDADO/                     # Arquivos originais exportados do CorelDRAW (vetores e assets)
├── slices/                       # Recortes precisos PNG de cada zona clicável
│   ├── slice_address.png         # Barra inferior de endereço (568x33px)
│   ├── slice_avatar_*.png        # Fotos circulares individuais (148x152px)
│   ├── slice_name_*.png          # Nome e cargo individuais (260x57px)
│   ├── slice_wa_*.png            # Linha WhatsApp individual (260x32px)
│   ├── slice_fb.png              # Linha Facebook (260x31px)
│   ├── slice_ig.png              # Linha Instagram (260x32px)
│   ├── slice_logo_*.png          # Logo Via Design individual limpo sem invasão de texto (160x88px)
│   └── slice_phone.png           # Telefone fixo 3305-8370 (160x64px)
├── index.html                    # Central de assinaturas (hospedada no GitHub Pages)
├── central-assinaturas.html      # Cópia da central de assinaturas
├── assinatura-anderson.html      # Página individual Anderson Araújo
├── assinatura-daniel.html        # Página individual Daniel Santana
├── assinatura-fernandes.html     # Página individual Fernandes Cesar
├── assinatura-tiago.html         # Página individual Tiago Bansi
├── assinatura-*.png              # Imagens mestres originais completas
├── build_slice_signatures.js     # Script Node.js de montagem das tabelas HTML
├── slice_master.ps1              # Script PowerShell de corte gráfico das fatias
├── README.md                     # Esta documentação completa
└── .gitignore                    # Regras de exclusão de arquivos de trabalho/temporários
```

---

## 🚀 Como Recriar ou Atualizar

Caso haja necessidade de atualizar fotos, contatos ou textos:
1. Atualize ou substitua as imagens mestres `assinatura-*.png`.
2. Execute o script de fatiamento:
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\slice_master.ps1
   ```
3. Regenere as páginas HTML:
   ```bash
   node build_slice_signatures.js
   ```
4. Suba as alterações para o Git:
   ```bash
   git add .
   git commit -m "update: novas assinaturas"
   git push origin main
   ```
O GitHub Pages atualiza automaticamente em poucos segundos.

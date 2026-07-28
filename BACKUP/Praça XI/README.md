# Saudosa Praça Onze — Landing Page

Landing page de alta conversão do lançamento **Saudosa Praça Onze (Cury)** — R. Benedito Hipólito, 160, Praça Onze, Rio de Janeiro.

## Estrutura
- `index.html` — página completa (HTML + CSS + JS em arquivo único, mobile first, sem dependências de build).

## Como publicar (GitHub Pages)
1. Envie os arquivos para `https://github.com/jorn4da/Praca-XI`.
2. No repositório: **Settings → Pages → Branch: main / (root) → Save**.
3. A página fica em `https://curylançamento.com.br/`.

## Imagens
As imagens são servidas direto do Google Drive (folder compartilhado do material Cury), com fallback automático para o thumbnail do Drive. Para máxima performance em produção, baixe as imagens do Drive para uma pasta `assets/`, comprima em WebP (ex.: squoosh.app) e troque as URLs no `index.html`.

## Antes de rodar tráfego
- [ ] Inserir CRECI no rodapé (`[INSERIR CRECI]`).
- [ ] Configurar Google Tag Manager e Meta Pixel (bloco comentado no `<head>`); o evento `whatsapp_click` já é disparado em todos os CTAs.
- [ ] Conferir valores da tabela (sujeitos a alteração pela incorporadora).

## Leads
- **WhatsApp:** todos os CTAs verdes apontam para `https://wa.me/message/AMKKLD5NLFKAM1`.
- **Formulários (2 pontos de captura):** após as tipologias e no CTA final. Campos: nome, telefone, e-mail, tipologia e condição de compra (financiamento/à vista). Envio via [FormSubmit](https://formsubmit.co) — cada cadastro chega como e-mail em tabela para **imoveisjornada@gmail.com**, com os dados do projeto e a origem do formulário.
- **IMPORTANTE — ativação (uma única vez):** no primeiro envio de teste, o FormSubmit manda um e-mail de confirmação para imoveisjornada@gmail.com. Clique em "Activate" nesse e-mail; a partir daí todos os leads chegam automaticamente.
- Após o envio, o visitante cai em `obrigado.html`, que reforça o contato imediato pelo WhatsApp.
- Eventos prontos para GTM/Pixel: `whatsapp_click`, `generate_lead` (envio do formulário) e `lead_confirmado` + `CompleteRegistration` (página de obrigado).

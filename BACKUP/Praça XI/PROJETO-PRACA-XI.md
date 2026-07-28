# Praça XI — Landing Page Saudosa Praça Onze (Cury)

> Documentação completa do projeto — atualizada em 05/07/2026

## 🔗 Endereços

| Item | URL |
|---|---|
| **Site oficial** | https://curylançamento.com.br |
| Repositório | https://github.com/jorn4da/Praca-XI |
| GitHub Pages (alternativo) | https://jorn4da.github.io/Praca-XI/ |
| Política de privacidade | https://curylançamento.com.br/politica-de-privacidade.html |
| Página de obrigado | https://curylançamento.com.br/obrigado.html |
| WhatsApp dos CTAs | https://wa.me/message/AMKKLD5NLFKAM1 |
| Material (Drive) | https://drive.google.com/drive/folders/1kuoKCqoOfYsox9To71Ms7tVhUo1DrDMD |

## 🏢 O empreendimento

- **Saudosa Praça Onze** — Cury Construtora e Incorporadora
- R. Benedito Hipólito, 160 — Praça Onze, Rio de Janeiro
- Terreno 2.860 m² · 495 unidades · 2 blocos · 17 pavimentos · rooftop panorâmico
- 300m do Metrô Praça Onze · ao lado da Sapucaí e da Presidente Vargas
- Financiamento MCMV

### Tipologias e preços (tabela de lançamento)

| Tipologia | Área | Preço | Avaliação |
|---|---|---|---|
| Studio | 32,27 m² | R$ 290.000 | R$ 350.000 |
| 1 Quarto | 32 m² | R$ 295.000 | — |
| 2 Quartos c/ varanda | 38,3 m² | R$ 335.000 | — |
| 2 Quartos suíte + varanda | 49 m² | R$ 435.000 | R$ 514.000 |

### Argumento de valorização (Praça Onze Maravilha)

1. **Novo Sambódromo + Museu do Samba** — [Prefeitura](https://prefeitura.rio/noticias/prefeitura-do-rio-apresenta-projeto-ambicioso-nos-moldes-do-porto-maravilha-para-a-regiao-do-sambodromo/)
2. **Boulevard do Samba** (demolição do Elevado 31 de Março) — [Diário do Rio](https://diariodorio.com/revitalizacao-do-sambodromo-prefeitura-do-rio-aposta-em-autofinanciamento-para-transformar-a-regiao/)
3. **Biblioteca dos Saberes** (Francis Kéré, Pritzker) — [G1](https://g1.globo.com/rj/rio-de-janeiro/noticia/2025/11/20/praca-onze-maravilha-conheca-o-projeto.ghtml)

## 📄 Estrutura da página

1. Topbar de urgência → Hero com **vídeo drone** (fallback foto fachada) → Stats
2. Problema (aluguel) → História/Solução (berço do samba) → Vídeo apresentação (Drive)
3. Tipologias com ancoragem de preço → **Formulário principal**
4. Galeria lazer (9 itens, só lazer) → Localização + mapa
5. Praça Onze Maravilha (investimentos da região) → 6 motivos de investimento
6. Autoridade (15+ anos) → FAQ (objeções) → CTA final + **Formulário compacto** + garantia
7. Rodapé legal + link política de privacidade

## 📥 Captação de leads

- **Formulários (FormSubmit)**: nome, telefone, e-mail, tipologia, condição de compra (financiamento/à vista)
  - Leads chegam em **imoveisjornada@gmail.com** — assunto "🔥 NOVO LEAD — Saudosa Praça Onze (Cury)"
  - Validação em tempo real: máscara de telefone (XX) 9XXXX-XXXX, nome mín. 3 letras, formato de e-mail — vermelho/verde
  - Pós-envio → obrigado.html → empurra para o WhatsApp
  - ⚠️ Ativação: clicar em "Activate" no e-mail do FormSubmit (uma única vez)
- **WhatsApp**: todos os botões verdes + botão flutuante + barra fixa mobile
- **Eventos para GTM/Pixel**: `whatsapp_click`, `generate_lead`, `lead_confirmado` / `CompleteRegistration`

## 🛠 Técnico

- Arquivo único `index.html` (HTML+CSS+JS), mobile first, breakpoints 1024/860/700/640/480px
- Imagens servidas do Google Drive (lh3.googleusercontent.com) com fallback automático
- Vídeo hero: `assets/drone-web.mp4` (2,2MB, comprimido do original de 61MB — original só no Drive, fora do repo via .gitignore)
- SEO: canonical, Open Graph, Schema.org (ApartmentComplex)
- Pasta local: `/Users/aritan/Claude/Projects/Programador | SITE E LANDING PAGE/praca11`

### Comandos para publicar alterações

```bash
cd "/Users/aritan/Claude/Projects/Programador | SITE E LANDING PAGE/praca11"
git add -A
git commit -m "descrição da alteração"
git push origin main
```

## ✅ Checklist pendente

- [ ] Inserir CRECI no rodapé do index e da política (`[INSERIR CRECI]`)
- [ ] Configurar Google Tag Manager e Meta Pixel (bloco comentado no `<head>`)
- [ ] Ativar FormSubmit (e-mail "Activate") e testar lead completo
- [ ] Confirmar com a Cury a autorização de uso da marca no domínio
- [ ] Conferir valores da tabela antes de rodar tráfego

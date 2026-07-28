/* =====================================================================
   RASTREAMENTO — Saudosa Praça Onze
   ---------------------------------------------------------------------
   Preencha os IDs abaixo. Enquanto um valor tiver "XXX", ele fica
   desligado (nada dispara), então é seguro publicar mesmo sem preencher.

   Onde pegar cada ID:
   - GA4_ID .............. GA4 > Administrador > Fluxos de dados > "ID de métricas" (G-XXXXXXXXXX)
   - GOOGLE_ADS_ID ....... Google Ads > Metas > Conversões > Tag do Google (AW-XXXXXXXXXX)
   - ADS_LABEL_LEAD ...... rótulo da conversão "Lead - formulário" (parte depois da barra)
   - ADS_LABEL_WHATSAPP .. rótulo da conversão "Clique no WhatsApp"
   - META_PIXEL_ID ....... opcional, só se usar Meta Ads
   ===================================================================== */
(function () {
  var CONFIG = {
    GA4_ID:             'G-0LHY05WGV6',
    GOOGLE_ADS_ID:      'AW-XXXXXXXXXX',
    ADS_LABEL_LEAD:     'XXXXXXXXXXXXXXXXX',
    ADS_LABEL_WHATSAPP: 'XXXXXXXXXXXXXXXXX',
    META_PIXEL_ID:      ''
  };
  window.__CURY_TRACK_CONFIG = CONFIG;

  var isSet = function (v) { return !!v && v.indexOf('XXX') === -1; };

  // ---- Base do Google (gtag / GA4 / Google Ads) --------------------
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  var loadId = isSet(CONFIG.GA4_ID) ? CONFIG.GA4_ID
             : (isSet(CONFIG.GOOGLE_ADS_ID) ? CONFIG.GOOGLE_ADS_ID : null);

  if (loadId) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + loadId;
    document.head.appendChild(s);
    gtag('js', new Date());
    if (isSet(CONFIG.GA4_ID))        gtag('config', CONFIG.GA4_ID);
    if (isSet(CONFIG.GOOGLE_ADS_ID)) gtag('config', CONFIG.GOOGLE_ADS_ID);
  }

  // ---- Meta Pixel (opcional) ---------------------------------------
  if (isSet(CONFIG.META_PIXEL_ID)) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', CONFIG.META_PIXEL_ID);
    fbq('track', 'PageView');
  }

  // ---- Conversão do Google Ads (só se configurada) -----------------
  function adsConversion(label) {
    if (isSet(CONFIG.GOOGLE_ADS_ID) && isSet(label)) {
      gtag('event', 'conversion', { send_to: CONFIG.GOOGLE_ADS_ID + '/' + label, transport_type: 'beacon' });
    }
  }

  // ---- API pública -------------------------------------------------
  // Chamada nos handlers das páginas. Segura mesmo com IDs em branco.
  window.CuryTrack = {
    // Clique em qualquer botão de WhatsApp
    whatsapp: function () {
      // beacon garante o envio mesmo quando o WhatsApp abre e sai da página
      gtag('event', 'whatsapp_click', { event_category: 'engagement', transport_type: 'beacon' });
      adsConversion(CONFIG.ADS_LABEL_WHATSAPP);
    },
    // Envio do formulário (evento leve; a conversão firme é na página de obrigado)
    lead: function (origin) {
      // evento de funil no envio; a conversao firme (generate_lead) dispara na pagina de obrigado
      gtag('event', 'lead_form_submit', { form_origin: origin || '' });
    },
    // Página de obrigado (lead confirmado) — conversão principal do Google Ads
    leadConfirmed: function () {
      gtag('event', 'generate_lead', { event_category: 'form', value: 1, currency: 'BRL' });
      adsConversion(CONFIG.ADS_LABEL_LEAD);
    }
  };
})();

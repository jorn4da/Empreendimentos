/* Página de obrigado (curyoficial.com)
   - Formulário: chame irObrigado('Formulário Hero', nome, msg, 'form') após registrar o lead.
   - Botões de WhatsApp (inclusive o flutuante): passam por /obrigado.html, que dispara o Pixel e abre o WhatsApp.
   Nada de nome/telefone vai na URL: os dados ficam só na sessão do navegador. */
(function(){
  function slug(t){ return String(t||'pagina').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,60); }
  function pagina(){
    var p = location.pathname.split('/').pop().replace(/\.html$/,'');
    return (!p || p==='index') ? 'Hub' : p;
  }
  window.irObrigado = function(origem, nome, msg, tipo, delay){
    var id = 'lead_' + Date.now() + '_' + Math.random().toString(36).slice(2,8);
    try { sessionStorage.setItem('ty_lead', JSON.stringify({id:id, origem:origem, nome:nome||'', msg:msg||'', tipo:tipo||'form', pagina:pagina(), ts:Date.now()})); } catch(e){}
    setTimeout(function(){ location.href = '/obrigado.html?origem=' + encodeURIComponent(slug(origem)) + '&tipo=' + (tipo||'form'); }, delay==null ? 150 : delay);
  };
  document.addEventListener('click', function(e){
    var a = e.target.closest ? e.target.closest('a[href*="wa.me/"]') : null;
    if(!a) return;
    var msg = '';
    try { msg = new URL(a.href).searchParams.get('text') || ''; } catch(x){}
    var label = a.getAttribute('data-zap-origem') || (a.classList.contains('float-wa') ? 'Botão flutuante' : (a.textContent||'').trim().replace(/\s+/g,' ').slice(0,40) || 'WhatsApp');
    var origem = pagina() + ' · ' + label;
    e.preventDefault();
    window.irObrigado(origem, '', msg, 'whatsapp', 60);
    if(pagina()!=='Hub'){ try{ var t=JSON.parse(sessionStorage.getItem('ty_lead')); t.empreendimento=(document.title.split('|')[0]||'').trim(); sessionStorage.setItem('ty_lead',JSON.stringify(t)); }catch(x){} }
  }, true);
})();

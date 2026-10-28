/* curyoficial.com · Captura antes do WhatsApp (modelo curyincorporadora.com.br)
   - Todo link wa.me (botão flutuante, header, CTAs, rodapé) abre um modal com:
     empreendimento de interesse, nome, WhatsApp e renda.
   - Nas subpáginas o empreendimento já vem selecionado (pelo título da página).
   - Ao enviar: lead vai para e-mail (FormSubmit) + planilha Google, e o cliente segue
     para /obrigado.html, que dispara o Pixel Lead e abre o WhatsApp com a mensagem
     completa (empreendimento + dados do cliente).
   - Nada de nome/telefone na URL: os dados ficam só na sessão do navegador.
   Backup da versão anterior: assets/ty-hook.js.bak-modal */
(function(){
  var CFG = {
    whatsapp: '5521959434519',
    email: 'imoveisjornada@gmail.com',
    sheet: 'https://script.google.com/macros/s/AKfycbyeCg1rfo85NcgTM15vE2dLzhPqomi23nAiLItM63QqhwqTC5CAmoihL2J713Dqx-nB/exec',
    site: 'curyoficial.com',
    cc: 'aritan.rj@curyvendas.com.br'
  };
  var EMPS = ['Residencial Dona Ivone Lara','Erê','Nova Leopoldina','Orla Central','Saudosa Praça Onze','Luzes do Rio - Condomínio Lamparina','Parque Piedade - Condomínio Aquarela','Luzes do Rio','Farol da Guanabara','Nova Norte - Raízes','Residencial Cartola','Residencial Pixinguinha','Caminhos da Guanabara','Arcos do Porto Residencial','Ciata Residencial','Residencial Nova Olaria','Metropolitan Dream','The Pier Residencial','My Jacarepaguá Mood','Américas 19'];
  var INDECISO = 'Ainda não decidi / quero ver opções';
  var RENDAS = ['Até R$ 5 mil','De R$ 5.000,01 até R$ 9.600','De R$ 9.600 até R$ 13.000','Acima de R$ 13.000'];

  function slug(t){ return String(t||'pagina').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,60); }
  function pagina(){ var p=location.pathname.split('/').pop().replace(/\.html$/,''); return (!p||p==='index')?'Hub':p; }
  function empDaPagina(){
    if(pagina()==='Hub') return '';
    var t=(document.title.split('|')[0]||'').trim();
    var s=slug(t);
    for(var i=0;i<EMPS.length;i++){ var e=slug(EMPS[i]); if(e===s||s.indexOf(e)>=0||e.indexOf(s)>=0) return EMPS[i]; }
    return t;
  }
  function lsGet(){ try{ return JSON.parse(localStorage.getItem('cury_cli')||'null')||{}; }catch(e){ return {}; } }
  function lsSet(o){ try{ localStorage.setItem('cury_cli',JSON.stringify(o)); }catch(e){} }

  /* Telefone: (XX) 9XXXX-XXXX, DDD real, sem sequência repetida */
  var DDDS='11 12 13 14 15 16 17 18 19 21 22 24 27 28 31 32 33 34 35 37 38 41 42 43 44 45 46 47 48 49 51 53 54 55 61 62 63 64 65 66 67 68 69 71 73 74 75 77 79 81 82 83 84 85 86 87 88 89 91 92 93 94 95 96 97 98 99'.split(' ');
  function maskTel(v){ v=v.replace(/\D/g,'').slice(0,11); if(v.length>7)return '('+v.slice(0,2)+') '+v.slice(2,7)+'-'+v.slice(7); if(v.length>2)return '('+v.slice(0,2)+') '+v.slice(2); return v; }
  function telOk(v){ var m=v.match(/^\((\d{2})\) 9\d{4}-\d{4}$/); if(!m||DDDS.indexOf(m[1])<0)return false; return !/^(\d)\1{10}$/.test(v.replace(/\D/g,'')); }

  /* Monta a mensagem padrão (sem emoji, marcador •) */
  window.CuryMsg = function(d){
    return 'Olá! Vim pelo site '+CFG.site+' e quero receber as condições do lançamento.\n\n'
      + '• Empreendimento de interesse: '+(d.emp||INDECISO)+'\n'
      + '• Nome: '+d.nome+'\n'
      + '• WhatsApp: '+d.fone+'\n'
      + '• Renda familiar: '+d.renda
      + (d.origem ? '\n• Origem: '+d.origem : '');
  };


  /* ---------- Envio de e-mail CONFIÁVEL (corrigido 28/10/2026) ----------
     Antes: JSON + redirect em 150-400 ms. O JSON exige "preflight" (CORS) e o
     navegador cancelava o envio ao trocar de página, sobretudo no celular.
     Agora: corpo form-urlencoded (sem preflight), keepalive, sendBeacon de reserva,
     espera a confirmação (até 2,5 s) antes de sair da página e guarda o lead
     pendente para reenviar na página de obrigado se algo falhar. */
  function emailBody(o){ var b=new URLSearchParams(); for(var k in o){ if(o[k]!=null) b.append(k,String(o[k])); } return b; }
  /* UM envio por cadastro: o fetch keepalive (sem preflight) continua mesmo após
     trocar de página; o beacon só entra se o fetch nem conseguir sair. Sem reenvio
     na página de obrigado (causava e-mail duplicado quando o FormSubmit demorava). */
  try{ localStorage.removeItem('cury_pend'); }catch(e){}
  window.CuryEmail = function(dados){
    var o={}; for(var k in dados) o[k]=dados[k];
    o._cc=CFG.cc; o._template='table'; o._captcha='false';
    var url='https://formsubmit.co/ajax/'+CFG.email;
    return new Promise(function(fim){
      var feito=false; function ok(){ if(!feito){ feito=true; fim(); } }
      setTimeout(ok, 2500);
      var req=null;
      try{ req=fetch(url,{method:'POST',keepalive:true,headers:{'Accept':'application/json'},body:emailBody(o)}); }catch(e){ req=null; }
      if(req){ req.then(ok, ok); }
      else { try{ if(navigator.sendBeacon) navigator.sendBeacon(url, emailBody(o)); }catch(e){} ok(); }
    });
  };

  function postLead(d){
    var agora=new Date().toLocaleString('pt-BR');
    try{ fetch(CFG.sheet,{method:'POST',mode:'no-cors',keepalive:true,headers:{'Content-Type':'text/plain;charset=utf-8'},
      body:JSON.stringify({Nome:d.nome,WhatsApp:d.fone,Renda:d.renda,Empreendimento:d.emp,Interesse:'WhatsApp · '+d.origem,Origem:location.href})}).catch(function(){}); }catch(e){}
    return window.CuryEmail({_subject:'Novo lead - '+d.emp+' | Cury Lançamentos (WhatsApp)','Empreendimento de interesse':d.emp,Nome:d.nome,WhatsApp:d.fone,'Renda familiar':d.renda,'Botão clicado':d.origem,'Recebido em':agora,Origem:location.href});
  }

  window.irObrigado = function(origem, nome, msg, tipo, delay, emp){
    var id='lead_'+Date.now()+'_'+Math.random().toString(36).slice(2,8);
    try{ sessionStorage.setItem('ty_lead',JSON.stringify({id:id,origem:origem,nome:nome||'',msg:msg||'',tipo:tipo||'form',pagina:pagina(),empreendimento:emp||'',ts:Date.now()})); }catch(e){}
    setTimeout(function(){ location.href='/obrigado.html?origem='+encodeURIComponent(slug(origem))+'&tipo='+(tipo||'form'); }, delay==null?150:delay);
  };

  /* ---------- Modal ---------- */
  var css='.cm-ov{position:fixed;inset:0;z-index:9999;background:rgba(20,33,61,.78);backdrop-filter:blur(4px);display:none;align-items:center;justify-content:center;padding:16px}'
   +'.cm-ov.open{display:flex}'
   +'.cm-box{background:#fff;border-radius:18px;padding:30px 26px 24px;max-width:430px;width:100%;max-height:calc(100vh - 32px);overflow:auto;position:relative;border-top:5px solid #3B5BE0;box-shadow:0 24px 60px rgba(0,0,0,.35);font-family:Inter,sans-serif;color:#1B2A4A;animation:cmIn .22s ease}'
   +'@keyframes cmIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}'
   +'.cm-x{position:absolute;top:10px;right:14px;background:none;border:0;font-size:28px;line-height:1;color:#5B6472;cursor:pointer;padding:4px}'
   +'.cm-badge{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#3B5BE0;font-weight:700}'
   +'.cm-box h3{font-family:Archivo,sans-serif;font-weight:900;font-size:24px;letter-spacing:-.02em;color:#14213D;margin:6px 0 4px;line-height:1.15}'
   +'.cm-sub{font-size:14px;color:#5B6472;margin:0 0 16px;line-height:1.5}'
   +'.cm-box label{display:block;font-size:13px;font-weight:600;color:#14213D;margin:12px 0 6px}'
   +'.cm-box input,.cm-box select{width:100%;padding:13px 14px;border:1.5px solid #E4E7EC;border-radius:11px;font-size:16px;font-family:Inter,sans-serif;color:#1B2A4A;background:#fff;box-sizing:border-box}'
   +'.cm-box input:focus,.cm-box select:focus{outline:none;border-color:#3B5BE0;box-shadow:0 0 0 3px #EAEEFF}'
   +'.cm-box .inv{border-color:#E5484D!important}.cm-box .val{border-color:#25D366}'
   +'.cm-err{display:none;color:#E5484D;font-size:12px;margin-top:5px}.cm-err.on{display:block}'
   +'.cm-ok{display:none;color:#1a9e4b;font-size:12px;margin-top:5px}.cm-ok.on{display:block}'
   +'.cm-btn{margin-top:18px;width:100%;display:flex;align-items:center;justify-content:center;gap:10px;background:#25D366;color:#fff;border:0;border-radius:999px;padding:15px 20px;font-weight:700;font-size:16px;font-family:Inter,sans-serif;cursor:pointer;box-shadow:0 10px 24px rgba(37,211,102,.35)}'
   +'.cm-btn:hover{background:#1eb457}.cm-btn svg{width:20px;height:20px;fill:#fff}'
   +'.cm-lgpd{font-size:11px;color:#8A93A3;text-align:center;margin-top:12px;line-height:1.4}.cm-lgpd a{color:#3B5BE0;text-decoration:underline}';
  function opts(list,sel){ return list.map(function(o){ return '<option'+(o===sel?' selected':'')+'>'+o+'</option>'; }).join(''); }

  var ov, ORIGEM='Página';
  function build(){
    if(ov) return;
    var st=document.createElement('style'); st.textContent=css; document.head.appendChild(st);
    ov=document.createElement('div'); ov.className='cm-ov'; ov.setAttribute('role','dialog'); ov.setAttribute('aria-modal','true'); ov.setAttribute('aria-labelledby','cmTit');
    ov.innerHTML='<div class="cm-box"><button type="button" class="cm-x" aria-label="Fechar">&times;</button>'
      +'<span class="cm-badge">Falta só um passo</span><h3 id="cmTit">Receba as condições no WhatsApp</h3>'
      +'<p class="cm-sub">Informe seus dados para o especialista Cury já te atender com valores e simulação para a sua renda.</p>'
      +'<form id="cmForm" novalidate data-nl-lead-form>'
      +'<label for="cmEmp">Empreendimento de interesse</label><select id="cmEmp" data-nl-field="message" required></select><span class="cm-err" id="cmEmpE">Escolha o empreendimento.</span>'
      +'<label for="cmNome">Nome e sobrenome</label><input id="cmNome" type="text" autocomplete="name" data-nl-field="name" placeholder="Ex.: Ana Souza" required><span class="cm-err" id="cmNomeE">Informe nome e sobrenome.</span>'
      +'<label for="cmFone">WhatsApp (com DDD)</label><input id="cmFone" type="tel" inputmode="numeric" autocomplete="tel" maxlength="16" data-nl-field="phone" placeholder="(21) 90000-0000" required><span class="cm-err" id="cmFoneE">Número inválido. Use (XX) 9XXXX-XXXX</span><span class="cm-ok" id="cmFoneOk">✓ Número de WhatsApp válido</span>'
      +'<label for="cmRenda">Renda familiar</label><select id="cmRenda" required><option value="" disabled selected>Selecione a renda familiar</option>'+opts(RENDAS)+'</select><span class="cm-err" id="cmRendaE">Selecione a renda.</span>'
      +'<button type="submit" class="cm-btn"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>Continuar para o WhatsApp</button>'
      +'<p class="cm-lgpd">Seus dados são usados só para este atendimento. <a href="/politica-de-privacidade.html" target="_blank" rel="noopener">Política de Privacidade</a></p>'
      +'</form></div>';
    document.body.appendChild(ov);
    ov.querySelector('.cm-x').addEventListener('click',fechar);
    ov.addEventListener('click',function(e){ if(e.target===ov) fechar(); });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&ov.classList.contains('open')) fechar(); });
    var f=g('cmFone');
    f.addEventListener('input',function(){ f.value=maskTel(f.value); f.classList.remove('inv'); g('cmFoneE').classList.remove('on');
      var ok=telOk(f.value); f.classList.toggle('val',ok); g('cmFoneOk').classList.toggle('on',ok); });
    f.addEventListener('blur',function(){ if(f.value&&!telOk(f.value)){ f.classList.add('inv'); g('cmFoneE').classList.add('on'); } });
    g('cmForm').addEventListener('submit',enviar);
  }
  function g(id){ return document.getElementById(id); }

  function abrir(origem, empPreferido){
    build(); ORIGEM=origem;
    var emp=empPreferido||empDaPagina();
    var lista=EMPS.slice(); if(emp&&lista.indexOf(emp)<0&&emp!==INDECISO) lista.unshift(emp);
    g('cmEmp').innerHTML='<option value="" disabled'+(emp?'':' selected')+'>Selecione o empreendimento</option>'+opts(lista,emp)+'<option'+(emp===INDECISO?' selected':'')+'>'+INDECISO+'</option>';
    var c=lsGet();
    if(c.nome&&!g('cmNome').value) g('cmNome').value=c.nome;
    if(c.fone&&!g('cmFone').value){ g('cmFone').value=c.fone; g('cmFone').dispatchEvent(new Event('input')); }
    if(c.renda&&!g('cmRenda').value){ g('cmRenda').value=c.renda; }
    ov.classList.add('open'); document.body.style.overflow='hidden';
    setTimeout(function(){ var alvo=!g('cmEmp').value?g('cmEmp'):(!g('cmNome').value?g('cmNome'):(!telOk(g('cmFone').value)?g('cmFone'):g('cmRenda'))); try{alvo.focus();}catch(e){} },60);
    if(window.fbq) fbq('trackCustom','LeadIntent',{origem:origem,empreendimento:emp||''});
    if(window.dataLayer) dataLayer.push({event:'lead_intent',origem:origem,empreendimento:emp||''});
  }
  function fechar(){ if(!ov)return; ov.classList.remove('open'); document.body.style.overflow=''; }
  window.CuryLeadModal={abrir:abrir,fechar:fechar};

  function enviar(e){
    e.preventDefault();
    var emp=g('cmEmp').value, nome=g('cmNome').value.trim().replace(/\s+/g,' '), fone=g('cmFone').value.trim(), renda=g('cmRenda').value;
    var ok=true, primeiro=null;
    function marca(el,errId,cond){ el.classList.toggle('inv',!cond); g(errId).classList.toggle('on',!cond); if(!cond){ ok=false; if(!primeiro) primeiro=el; } }
    marca(g('cmEmp'),'cmEmpE',!!emp);
    marca(g('cmNome'),'cmNomeE',nome.split(' ').filter(Boolean).length>=2);
    marca(g('cmFone'),'cmFoneE',telOk(fone));
    marca(g('cmRenda'),'cmRendaE',!!renda);
    if(!ok){ primeiro.focus(); return; }
    var d={emp:emp,nome:nome,fone:fone,renda:renda,origem:ORIGEM};
    lsSet({nome:nome,fone:fone,renda:renda});
    var envio=postLead(d);
    if(window.dataLayer) dataLayer.push({event:'form_submit',form_origin:'modal_whatsapp',empreendimento:emp});
    var btn=g('cmForm').querySelector('.cm-btn'); btn.disabled=true; btn.lastChild.textContent='Abrindo o WhatsApp...';
    envio.then(function(){ window.irObrigado(ORIGEM, nome, window.CuryMsg(d), 'form', 0, emp); });
  }

  /* Intercepta todo link de WhatsApp da página */
  document.addEventListener('click', function(e){
    var a = e.target.closest ? e.target.closest('a[href*="wa.me/"]') : null;
    if(!a || a.hasAttribute('data-skipmodal')) return;
    e.preventDefault(); e.stopPropagation();
    var label = a.getAttribute('data-zap-origem') || (a.classList.contains('float-wa') ? 'Botão flutuante' : (a.textContent||'').trim().replace(/\s+/g,' ').slice(0,40) || 'WhatsApp');
    var nomePag = pagina()==='Hub' ? 'Hub' : (empDaPagina()||pagina());
    var pref = '';
    if(pagina()==='Hub'){ var s=g('projeto'); if(s&&s.value) pref=s.value; }
    abrir(nomePag+' · '+label, pref);
  }, true);
})();

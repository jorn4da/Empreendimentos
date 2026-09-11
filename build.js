// Gerador do hub + subpáginas Cury Lançamentos (curylançamento.com.br)
// Dados reais extraídos de curyconstrutoralancamentos.com.br
const fs = require('fs');
const path = require('path');

const WHATS = '5521959434519';
const EMAIL = 'aritan.rj@curyvendas.com.br';

// mapa de imagens (URL de origem -> nome local) para o baixador
const IMG_MAP = new Map();

// token -> URL de origem no CDN Cury
function srcUrl(tok){
  const isW = tok[0]==='W';
  const rest = tok.slice(1);
  const hash = rest.replace(/\.(x|j|p)$/,'');
  const ext = rest.endsWith('.x') ? '.jpeg.webp' : rest.endsWith('.p') ? '.png' : '.jpeg';
  const folder = isW ? 'images_webp/products/gallery/' : 'images/products/gallery/';
  return 'https://cury.net/storage/'+folder+hash+ext;
}
// nome do arquivo local (hospedado no próprio domínio)
function localName(tok){
  const rest = tok.slice(1);
  const hash = rest.replace(/\.(x|j|p)$/,'');
  const ext = rest.endsWith('.x') ? '.webp' : rest.endsWith('.p') ? '.png' : '.jpg';
  return hash+ext;
}
// caminho da imagem: usa a versão local se já baixada em assets/img; senão cai para o CDN da Cury.
// Assim o site abre com as fotos mesmo antes de rodar o baixador; depois de baixar, tudo vira local.
function img(tok, prefix){
  prefix = prefix || '';
  const name = localName(tok);
  const url = srcUrl(tok);
  IMG_MAP.set(url, name);
  const abs = path.join(__dirname,'assets','img',name);
  return fs.existsSync(abs) ? (prefix+'assets/img/'+name) : url;
}

// retorna os caminhos das imagens de um empreendimento (localImgs tem prioridade sobre tokens g)
function imgsOf(p, prefix){
  prefix = prefix || '';
  if(p.localImgs && p.localImgs.length) return p.localImgs.map(n=>prefix+'assets/img/'+n);
  return (p.g||[]).map(t=>img(t,prefix));
}

const REGIONS = {centro:'Centro','zona-norte':'Zona Norte','zona-oeste':'Zona Oeste',niteroi:'Niterói'};

// DATA: ordem = ordem dos lançamentos (o próximo lançamento fica sempre em 1º, em destaque)
// priority:true => empreendimento sem tabela liberada; foco em cadastro para virar prioridade
const DATA = [
 {slug:'ere',name:'Erê',region:'centro',bairro:'Zona Portuária',local:'Av. Rodrigues Alves, 733 (Galpão ao lado do Nau) — Zona Portuária, Rio de Janeiro - RJ',qts:'Studio, 1 e Double',area:'Vista para a Baía de Guanabara',entrega:'Breve lançamento',status:'Breve Lançamento',priority:true,
  video:'ere-teaser.mp4',
  desc:'Um novo jeito de viver começa aqui. Inspirado na alegria de viver, na leveza e na pureza dos pequenos momentos, o Erê é o próximo lançamento da Cury na Zona Portuária do Rio — com vista para a Baía de Guanabara, na Av. Rodrigues Alves, no coração da arte e da mobilidade. Um projeto de mix diversificado, com 494 unidades e opções premium. Em breve, você vai conhecer o seu novo jeito de viver.',
  bullets:['Studios de 33 a 35m²','1 quarto frontal de 38 a 39m²','Double Studios de 60m²','494 unidades residenciais + 2 lojas · térreo + 19 pavimentos + rooftop com lazer','54 vagas de automóvel + 500 vagas de bicicleta','Fachada assinada por Isay Weinfeld · paisagismo Gabriella Ornaghi e Bianca Vasone','Vista para a Baía de Guanabara, na Zona Portuária (Av. Rodrigues Alves, 733)'],
  feat:['Vista para a Baía','Fachada Isay Weinfeld','Rooftop com lazer','Studios ~33m²','1 quarto frontal','Double Studios ~60m²','54 vagas + 500 bikes','Térreo + 19 pav + rooftop','Aquecimento central de água','Zona Portuária'],
  lazer:['Piscina','Rooftop com lazer','Sport Bar','Salão de Festas','Churrasqueira','Lounge','Deck descoberto','Brinquedoteca','Playground','Academia','Pet Place','Mercadinho','Lavanderia','Bicicletário (500 vagas)'],
  filme:'ere-filme.mp4',
  lazerFotos:[['ere-lz-rooftop.jpg','Rooftop com vista para a Baía'],['ere-lz-piscina.jpg','Piscina'],['ere-lz-salao-festas.jpg','Salão de festas'],['ere-lz-churrasqueira.jpg','Churrasqueira'],['ere-lz-academia.jpg','Academia'],['ere-lz-lounge.jpg','Lounge'],['ere-lz-pet-place.jpg','Pet Place'],['ere-lz-playground.jpg','Playground'],['ere-lz-brinquedoteca.jpg','Brinquedoteca'],['ere-lz-mercadinho.jpg','Mercadinho'],['ere-lz-lavanderia.jpg','Lavanderia']],
  localImgs:['ere-poster.jpg']},
 {slug:'nova-leopoldina',name:'Nova Leopoldina',region:'zona-norte',bairro:'Ramos',local:'Rua Teixeira de Castro, 574 — Ramos, Rio de Janeiro - RJ',pf:249900,qts:'1, 2',area:'30–39m²',entrega:'Lançamento',status:'Lançamento',
  desc:'O novo lançamento da Cury em Ramos, na Zona Norte do Rio, no berço da Imperatriz Leopoldinense. São 2 blocos com 1.266 apartamentos de 1 e 2 quartos com varanda, lazer de clube com mais de 15 itens e áreas comuns entregues equipadas e decoradas.',
  bullets:['2 blocos e 1.266 apartamentos de 1 e 2 quartos com varanda','Mais de 15 itens de lazer (lazer de clube)','Áreas comuns entregues equipadas e decoradas','Ao lado da Av. Brasil, BRT Rubens Vaz, SESC Ramos e Shopping Nova América','Bicicletário com 1.270 vagas (empreendimento sem vaga de garagem)'],
  feat:['Piscina adulto e infantil','Sport Bar','Salão de Festas','Churrasqueira','Fitness','Quadra','Coworking','Pet Care','Playground','Brinquedoteca','Lavanderia','Mercadinho','Sala Games','Bicicletário'],
  localImgs:['nova-leopoldina-pool.jpg','nova-leopoldina-sportbar.jpg','nova-leopoldina-salao.jpg','nova-leopoldina-churrasqueira.jpg','nova-leopoldina-fitness.jpg','nova-leopoldina-coworking.jpg','nova-leopoldina-petcare.jpg','nova-leopoldina-lavanderia.jpg','nova-leopoldina-fachada.jpg']},

 {slug:'orla-central',name:'Orla Central',region:'niteroi',bairro:'Centro de Niterói',local:'Caminho Niemeyer — Centro, Niterói - RJ',pf:321999,pt:795500,qts:'1, 2',area:'31–36m²',entrega:'Q3 2026',status:'Em Obras',
  desc:'A Cury renasce no coração de Niterói, no Caminho Niemeyer, à beira da Baía de Guanabara. Apartamentos de 1 e 2 quartos com varanda e lazer completo entregue equipado e decorado: duas piscinas, beach tennis, rooftop com solário, fitness e coworking. Ao lado das Barcas, do Plaza Shopping e do complexo cultural de Niemeyer.',
  bullets:['1 e 2 quartos com varanda, de 31 a 36m²','No Caminho Niemeyer, à beira da Baía de Guanabara','Ao lado das Barcas, do Plaza Shopping e do Bay Market','Beach tennis, duas piscinas e rooftop com solário e espaço luau','Áreas comuns entregues equipadas e decoradas'],
  feat:['Beach Tennis','Piscina adulto e infantil','Rooftop com solário','Fitness','Fitness externo','Coworking','Salão de Festas','Sala de Jogos','Brinquedoteca','Playground','Pet Care','Easy Market','Lavanderia','Bicicletário'],
  localImgs:['orla-central-fachada.jpg','orla-central-aerea.jpg','orla-central-piscina.jpg','orla-central-festas.jpg','orla-central-churrasqueira.jpg','orla-central-academia.jpg','orla-central-coworking.jpg','orla-central-jogos.jpg','orla-central-brinquedoteca.jpg','orla-central-lounge.jpg','orla-central-lavanderia.jpg','orla-central-portaria.jpg','orla-central-market.jpg','orla-central-bicicletario.jpg']},

 {slug:'saudosa-praca-onze',name:'Saudosa Praça Onze',region:'centro',bairro:'Praça Onze',local:'Rua Benedito Hipólito — Praça Onze (Centro), Rio de Janeiro - RJ',pf:290000,pt:435000,qts:'Studio, 1, 2',area:'31–41m²',entrega:'Lançamento',status:'Lançamento',
  desc:'A Cury chega ao coração do samba carioca, entre a Av. Presidente Vargas, a Sapucaí e a Praça Onze. Studios, 1 e 2 quartos, todos com varanda, em 2 blocos com rooftop panorâmico e áreas comuns entregues equipadas e decoradas. A 4 min do Metrô Praça Onze e a 2 min da Central do Brasil.',
  bullets:['Studio (32m²), 1 quarto (31m²) e 2 quartos (38 a 41m²), todos com varanda','A 4 min do Metrô Praça Onze e 2 min da Central do Brasil','Ao lado da Av. Presidente Vargas e da Sapucaí','2 blocos com rooftop panorâmico: lounge, churrasqueira gourmet e fitness externo','Áreas comuns entregues equipadas e decoradas'],
  feat:['Piscina adulta e infantil','Rooftop panorâmico','Lounge','Churrasqueira gourmet','Salão de Festas','Fitness','Fitness externo','Brinquedoteca','Playground','Pet Place','Mercadinho','Bicicletário'],
  localImgs:['saudosa-praca-onze-fachada.jpg','saudosa-praca-onze-piscina.jpg','saudosa-praca-onze-fotomontagem.jpg','saudosa-praca-onze-festas.jpg','saudosa-praca-onze-lounge.jpg','saudosa-praca-onze-churrasqueira.jpg','saudosa-praca-onze-rooftop.jpg','saudosa-praca-onze-fitness.jpg','saudosa-praca-onze-brinquedoteca.jpg','saudosa-praca-onze-playground.jpg','saudosa-praca-onze-mercadinho.jpg','saudosa-praca-onze-portaria.jpg']},

 {slug:'luzes-do-rio-condominio-lamparina',name:'Luzes do Rio - Condomínio Lamparina',region:'centro',bairro:'Imperial de São Cristóvão',local:'Imperial de São Cristóvão — Rio de Janeiro - RJ',pf:290000,pt:349500,qts:'1, 2',area:'32–53m²',entrega:'A definir',status:'Lançamento',
  desc:'O Condomínio Lamparina é a fase do Luzes do Rio com lazer ao ar livre, em uma das regiões mais ricas em cultura e mobilidade do Rio. Apartamentos de 1 e 2 quartos, com opção de garden e suíte, de 32 a 53m², e o diferencial Cury + LEV: uma bike elétrica por apartamento. Perto do Rio Star, AquaRio, Quinta da Boa Vista e Feira de São Cristóvão.',
  bullets:['1 e 2 quartos, com opção de garden e suíte, de 32 a 53m²','1 Bike LEV elétrica por apartamento','Próximo ao Rio Star, AquaRio, Quinta da Boa Vista e Feira de São Cristóvão','Acesso fácil à Ponte Rio-Niterói, Museu do Amanhã, Boulevard Olímpico, VLT e Rodoviária','Lazer completo com quadra, praça e playground'],
  feat:['Quadra Esportiva','Praça','Churrasqueira','Playground','Espaço Gourmet','Salão de Jogos','Pebolim','Delivery','Bicicletário','Bike LEV'],
  localImgs:['lamparina-fachada.jpg','lamparina-praca.jpg','lamparina-quadra.jpg','lamparina-churrasqueira.jpg','lamparina-playground.jpg','lamparina-delivery.jpg','lamparina-bicicletario.jpg','lamparina-pub.jpg']},

 {slug:'parque-piedade-condominio-aquarela',name:'Parque Piedade - Condomínio Aquarela',region:'zona-norte',bairro:'Piedade',local:'Piedade — Rio de Janeiro - RJ',pf:298500,pt:460000,qts:'2',area:'37–45m²',entrega:'A definir',status:'Lançamento',
  desc:'Parque Piedade - Condomínio Aquarela traz um novo conceito de morar para a Zona Norte do Rio, em uma das regiões mais bem localizadas e com fácil acesso aos principais pontos da cidade.',
  bullets:['Próximo ao Norte Shopping','Ao lado do Parque Arlindo Cruz e do Estádio Nilton Santos','Acesso fácil à Linha Amarela e à Estação Piedade','Lazer completo com piscina, quadra, sauna e muito mais','Opção de unidades garden'],
  feat:['Piscina','Sauna','Quadra Esportiva','Playground','Salão de Festas','Churrasqueira','Pet Place','Espaço Relax','Solarium','Lavanderia','Brinquedoteca','Sports Bar','Bicicletário / Oficina de Bike','Praça Jabuticabeira'],
  g:['I69c6cbd3e9e0a.j','I69ca99f147c29.j','I69ca9a0f9b577.j','I69ca9a24d845c.j','I69ca9a3c0a18a.j','I69ca9a50abed4.j']},

 {slug:'luzes-do-rio',name:'Luzes do Rio',region:'centro',bairro:'Porto Maravilha',local:'Porto Maravilha — Rio de Janeiro - RJ',pf:289000,pt:489000,qts:'1, 2',area:'31–38m²',entrega:'2028',status:'Lançamento',
  desc:'Luzes do Rio nasce no coração do Porto Maravilha, uma das regiões que mais se transformam no Rio. Apartamentos de 1 e 2 quartos com varanda, casarão histórico preservado e um diferencial único: a loja Cury + LEV, com bikes elétricas para se mover pelo Porto. A poucos passos do VLT, do metrô, das Barcas e do Aeroporto Santos Dumont.',
  bullets:['1 e 2 quartos com varanda, de 31 a 38m²','No Porto Maravilha, ao lado de todos os modais (VLT, metrô e barcas)','Diferencial Cury + LEV: bikes elétricas para os moradores','Casarão histórico preservado e lazer completo','A minutos do Aeroporto Santos Dumont e do Centro'],
  feat:['Casarão histórico preservado','Cury + LEV (bikes elétricas)','Piscina adulto','Sport Bar','Salão de Festas','Academia','Fitness externo','Coworking','Brinquedoteca','Pet Place','Espaço Beauty','Lavanderia'],
  localImgs:['luzes-do-rio-fachada.jpg','luzes-do-rio-casarao.jpg','luzes-do-rio-piscina.jpg','luzes-do-rio-festas.jpg','luzes-do-rio-sportbar.jpg','luzes-do-rio-academia.jpg','luzes-do-rio-coworking.jpg','luzes-do-rio-fitness-externo.jpg','luzes-do-rio-brinquedoteca.jpg','luzes-do-rio-petplace.jpg','luzes-do-rio-beauty.jpg','luzes-do-rio-lavanderia.jpg','luzes-do-rio-portaria.jpg']},

 {slug:'farol-da-guanabara',name:'Farol da Guanabara',region:'centro',bairro:'Porto Maravilha',local:'Av. Rodrigues Alves, 733 — Porto Maravilha (Santo Cristo), Rio de Janeiro - RJ',pf:360000,pt:860000,qts:'Studio, 1, 3',area:'33–80m²',entrega:'3º Trimestre',status:'Lançamento',
  desc:'De frente para a Baía de Guanabara, o Farol da Guanabara é um ícone no Porto Maravilha, na Av. Rodrigues Alves. São Studios, Double Studios e apartamentos de 1 e 3 quartos com suíte, em 494 unidades e 20 pavimentos, com lazer completo e rooftop com vista para a baía. Cercado pela mobilidade do Rio — VLT, Rodoviária Novo Rio e Terminal Gentileza — e pelos ícones da cidade: Museu do Amanhã, MAR, Rio Star e Sambódromo.',
  bullets:['De frente para a Baía de Guanabara, com lazer completo e rooftop','Studios, Double Studios e apartamentos de 1 e 3 quartos com suíte','494 unidades em 20 pavimentos, com 57 vagas de garagem','Na Av. Rodrigues Alves, 733 — Porto Maravilha, com vista para a baía','Cercado por VLT, Rodoviária Novo Rio e Terminal Gentileza','Perto do Museu do Amanhã, MAR, Rio Star e Sambódromo'],
  feat:['Vista para a Baía','Rooftop','Piscina','Fitness','Coworking','Salão de Festas','Brinquedoteca','Playground','Pet Place','Easy Market','Lavanderia','Bicicletário','Studios e Double Studios'],
  localImgs:['farol-fachada.jpg','farol-aerea.jpg','farol-rooftop.jpg','farol-piscina.jpg','farol-rooftop-estar.jpg','farol-festas.jpg','farol-fitness.jpg','farol-coworking.jpg','farol-brinquedoteca.jpg','farol-playground.jpg','farol-petplace.jpg','farol-market.jpg','farol-lavanderia.jpg','farol-bicicletario.jpg']},

 {slug:'nova-norte-raizes',name:'Nova Norte - Raízes',region:'zona-norte',bairro:'Irajá',local:'Irajá — Rio de Janeiro - RJ',pf:220000,pt:380000,qts:'2, 3',area:'41–65m²',entrega:'2028',status:'Lançamento',
  desc:'Apartamentos à venda de 2 e 3 quartos com opção de suíte e garden. Conheça o Nova Norte - Raízes com a Cury Construtora!',
  bullets:['Fácil acesso às principais vias da cidade: Via Dutra e Av. Brasil','Próximo ao polo gastronômico de Vista Alegre e ao Shopping Via Brasil','Diversas opções de transporte perto de casa'],
  feat:['Piscinas','Praça','Churrasqueira','Playground','Salão de Festas','Academia'],
  g:['W689e0449e58eb.x','I689e0468e3494.j','I689e0485e0377.j','I689e053396ec2.j','I689e05614d9e8.j','I689e05b50e895.j']},

 {slug:'residencial-cartola',name:'Residencial Cartola',region:'centro',bairro:'Porto Maravilha',local:'Porto Maravilha — Rio de Janeiro - RJ',pf:280000,pt:460000,qts:'1, 2',area:'30–55m²',entrega:'2028',status:'Lançamento',
  desc:'Residencial Cartola homenageia um dos maiores sambistas da história, trazendo a alma carioca para o Porto Maravilha.',
  bullets:['Projeto moderno e funcional','Localização privilegiada','Lazer completo'],
  feat:['Piscina','Rooftop','Academia','Salão de Festas','Pet Place','Bicicletário'],
  g:['W687fce7908a6b.x','I687fce87adec0.j','I687fce9c1483e.j','I687fceb09dcde.j','I687fcf5ab4708.j','I687fcf761eafa.j']},

 {slug:'residencial-pixinguinha',name:'Residencial Pixinguinha',region:'centro',bairro:'Porto Maravilha',local:'Porto Maravilha — Rio de Janeiro - RJ',pf:270000,pt:440000,qts:'1, 2, 3',area:'28–70m²',entrega:'2029',status:'Em Obras',
  desc:'Residencial Pixinguinha homenageia um dos maiores compositores da música brasileira, em um empreendimento moderno no coração do Porto Maravilha.',
  bullets:['Design contemporâneo','Excelente infraestrutura','Região em valorização'],
  feat:['Piscina','Academia','Rooftop','Coworking','Pet Place','Bicicletário'],
  g:['W681270e476552.x','I6812710a0829e.j','I68127283b0d46.j','I681273efcd200.j','I6812713176b8b.j','I681273be9fbe9.j']},

 {slug:'caminhos-da-guanabara',name:'Caminhos da Guanabara',region:'niteroi',bairro:'Centro de Niterói',local:'Centro de Niterói — Niterói - RJ',pf:280000,pt:450000,qts:'1, 2',area:'30–54m²',entrega:'2028',status:'Em Obras',
  desc:'Caminhos da Guanabara é sua oportunidade de investimento estratégico no Centro de Niterói.',
  bullets:['Investimento imobiliário estratégico','Centro de Niterói','Próximo às barcas e transporte'],
  feat:['Central','Piscina','Academia','Salão de Festas','Coworking','Pet Place'],
  g:['W67c9bb96a9943.x','I67c9bba82326a.j','I67c9bbb709757.j','I67c9bbc7e0f16.j','I67c9bbd631325.j','I67c9bbe724cb7.j']},

 {slug:'arcos-do-porto',name:'Arcos do Porto Residencial',region:'centro',bairro:'Porto Maravilha',local:'Porto Maravilha — Rio de Janeiro - RJ',pf:290000,pt:480000,qts:'1, 2',area:'30–58m²',entrega:'2028',status:'Em Obras',
  desc:'Arcos do Porto Residencial traz a referência dos famosos Arcos da Lapa para o Porto Maravilha.',
  bullets:['Arquitetura inspirada na história carioca','Localização privilegiada','Lazer completo'],
  feat:['Piscina','Academia','Salão de Festas','Rooftop','Lavanderia','Portaria 24h'],
  g:['W67a378fd33033.x','I67a379089fcbe.j','I67a379123e007.j','I67a37924a677f.j','I67a3792e221ab.j','I67a37940eb63b.j']},

 {slug:'ciata-residencial',name:'Ciata Residencial',region:'centro',bairro:'Porto Maravilha',local:'Porto Maravilha — Rio de Janeiro - RJ',pf:280000,pt:450000,qts:'1, 2',area:'32–55m²',entrega:'Dezembro 2028',status:'Em Obras',
  desc:'Ciata Residencial homenageia Tia Ciata, figura histórica do samba carioca, em um empreendimento moderno no Porto Maravilha.',
  bullets:['Região em plena valorização','Vista para a Baía de Guanabara','Próximo ao VLT e transporte público'],
  feat:['Piscina','Rooftop','Coworking','Lavanderia','Pet Place','Bicicletário'],
  g:['W676197655ace7.x','I67619772d463e.j','I6761977e3133e.j','I6761978ee738b.j','I6761979a5da9b.j','I676197a854061.j']},

 {slug:'residencial-nova-olaria',name:'Residencial Nova Olaria',region:'zona-norte',bairro:'Olaria',local:'Olaria — Rio de Janeiro - RJ',pf:230000,pt:380000,qts:'2, 3',area:'40–62m²',entrega:'Junho 2027',status:'Lançamento',
  desc:'Conheça o Residencial Nova Olaria, apartamentos de 2 quartos e amplo lazer!',
  bullets:['Localização estratégica','Próximo ao Hospital Balbino','Fácil acesso a Av. Brasil e à estação de Trem de Olaria','Perto do Supermercado Guanabara e Polo Gastronômico'],
  feat:['Piscina','Churrasqueira','Playground','Salão de Festas','Academia','Pet Place'],
  g:['W6751c1adc6b13.x','I6751c1ce8683a.j','I6751c1dfd8813.j','I6751c204cbeb0.j','I6751c21db5a7a.j','I6751c234230b1.j']},

 {slug:'metropolitan-dream',name:'Metropolitan Dream',region:'zona-oeste',bairro:'Barra da Tijuca',local:'Centro Metropolitano - Barra Olímpica — Barra da Tijuca, RJ',pf:339000,pt:650000,qts:'1, 2, 3',area:'35–85m²',entrega:'Dezembro 2027',status:'Lançamento',
  desc:'Metropolitan Dream é o novo lançamento da Cury na Barra Olímpica, uma das regiões que mais valoriza no Rio de Janeiro.',
  bullets:['Apartamentos de 1, 2 e 3 quartos','Lazer surpreendente','Ao lado da futura cidade administrativa','Região com grande potencial de valorização'],
  feat:['Piscina','Academia','Churrasqueira','Salão de Festas','Playground','Pet Place','Bicicletário'],
  g:['I66f4789554414.j','I66f478aa7a562.j','I66f478b92de79.j','W66f478c9e64a2.x','I66f478e3ce148.j','I66f478f526c31.j']},

 {slug:'the-pier-residencial',name:'The Pier Residencial',region:'niteroi',bairro:'Centro de Niterói',local:'Centro de Niterói — Niterói - RJ',pf:320000,pt:520000,qts:'1, 2',area:'32–58m²',entrega:'2027',status:'Em Obras',
  desc:'The Pier Residencial é o empreendimento da Cury no Centro de Niterói, com localização privilegiada e fácil acesso às barcas.',
  bullets:['Próximo às barcas para o Rio','Centro comercial de Niterói','Vista para a Baía'],
  feat:['Vista Baía','Piscina','Academia','Rooftop','Coworking','Lavanderia'],
  g:['W66ce0df34efcc.x','I66ce0e00966f6.j','I66ce0e1d3b330.j','I66ce0e2ce9949.j','I66ce0e3b6f648.j','I66ce0e47d77b7.j']},

 {slug:'my-jacarepagua-mood',name:'My Jacarepaguá Mood',region:'zona-oeste',bairro:'Jacarepaguá',local:'Jacarepaguá — Rio de Janeiro - RJ',pf:280000,pt:480000,qts:'2, 3',area:'42–68m²',entrega:'Março 2027',status:'Lançamento',
  desc:'My Jacarepaguá Mood é o novo empreendimento da Cury em Jacarepaguá, trazendo estilo e qualidade de vida para a Zona Oeste.',
  bullets:['Localização privilegiada em Jacarepaguá','Lazer completo','Excelente custo-benefício'],
  feat:['Piscina','Academia','Churrasqueira','Playground','Salão de Festas','Pet Place'],
  g:['W669fc67cf143c.x','I669fc68d173d1.j','I669fc6b62f9d1.j','I669fc6d3ee677.j','I669fc6e86c38f.j','I669fc6f7c707a.j']},

 {slug:'americas-19',name:'Américas 19',region:'zona-oeste',bairro:'Recreio dos Bandeirantes',local:'Recreio dos Bandeirantes — Rio de Janeiro - RJ',pf:450000,pt:850000,qts:'2, 3',area:'55–95m²',entrega:'Março 2027',status:'Lançamento',
  desc:'Américas 19 oferece qualidade de vida no Recreio dos Bandeirantes, próximo à praia e com toda infraestrutura da região.',
  bullets:['Foco médio/alto padrão','Próximo às melhores praias','Lazer completo'],
  feat:['Perto da Praia','Piscina','Academia','Churrasqueira','Salão de Festas','Pet Friendly'],
  g:['W65d781ddb24e9.x','I65d781ed9c145.j','I65d7820243990.j','I65d78216ac9b4.j']}
];

const brl = n => 'R$ '+n.toLocaleString('pt-BR');
const waLink = (msg) => 'https://wa.me/'+WHATS+'?text='+encodeURIComponent(msg);

// tags de favicon (símbolo Cury). prefix '' na home/política, '../' nas subpáginas
function fav(prefix){prefix=prefix||'';return `<link rel="icon" href="${prefix}assets/favicon.ico" sizes="any"><link rel="icon" type="image/png" sizes="32x32" href="${prefix}assets/favicon-32.png"><link rel="icon" type="image/png" sizes="16x16" href="${prefix}assets/favicon-16.png"><link rel="apple-touch-icon" href="${prefix}assets/favicon-180.png">`;}

// ===== MENSURAÇÃO (copiado da Praça XI) =====
// Meta Pixel (Facebook) no <head> de todas as páginas
const PIXEL = `<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1902592370422998');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1902592370422998&ev=PageView&noscript=1"/></noscript>
<!-- End Meta Pixel Code -->`;

// Rastreia clique em qualquer link do WhatsApp como evento Contact (Pixel + dataLayer)
const TRACK = `<script>
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('a[href*="wa.me/"]').forEach(function(a){
    a.addEventListener('click',function(){
      if(window.dataLayer)dataLayer.push({event:'whatsapp_click',zap_origem:a.getAttribute('data-zap-origem')||''});
      if(window.fbq)fbq('track','Contact');
      if(window.CuryTrack)CuryTrack.whatsapp();
    });
  });
});
</script>`;

// ---------- NotificaLead (captura de leads) ----------
const NL = `<script async src="https://curyrj.notificalead.com.br/api/v1/lead_capture/3eaa0ef126400617c4851356918d2e8802df6888c1df236f.js"></script>`;

// ---------- CSS compartilhado ----------
const CSS = `
:root{--navy:#14213D;--navy-2:#1B2A4A;--blue:#3B5BE0;--blue-dark:#2A44C4;--blue-soft:#EAEEFF;--bg:#F5F6F8;--white:#fff;--text:#1B2A4A;--muted:#5B6472;--line:#E4E7EC;--wa:#25D366;--radius:16px;--shadow:0 18px 45px rgba(20,33,61,.12)}
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;color:var(--text);background:var(--white);line-height:1.55;-webkit-font-smoothing:antialiased}
h1,h2,h3,.display{font-family:'Archivo',sans-serif;line-height:1.1;letter-spacing:-.02em}
a{text-decoration:none;color:inherit}img{max-width:100%;display:block}
.wrap{max-width:1180px;margin:0 auto;padding:0 22px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;font-weight:700;border:none;border-radius:999px;cursor:pointer;transition:.2s;font-size:16px;font-family:'Inter'}
.btn-blue{background:var(--blue);color:#fff;padding:15px 26px}.btn-blue:hover{background:var(--blue-dark);transform:translateY(-2px)}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.35);padding:13px 24px}.btn-ghost:hover{border-color:#fff}
.btn-wa{background:var(--wa);color:#fff;padding:14px 24px}.btn-wa:hover{background:#1eb457;transform:translateY(-2px)}
header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.96);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
.nav{display:flex;align-items:center;justify-content:space-between;height:74px}
.logo{display:flex;flex-direction:column;line-height:1}.logo b{font-family:'Archivo';font-weight:900;font-size:26px;color:var(--navy);letter-spacing:.02em}
.logo span{font-size:11px;letter-spacing:.26em;color:var(--blue);font-weight:700;margin-top:4px}
.menu{display:flex;gap:30px;align-items:center}.menu a{font-weight:600;color:var(--navy-2);font-size:15px}.menu a:hover{color:var(--blue)}
.burger{display:none;background:none;border:none;cursor:pointer}
.cury-band{background:#D6E2EE;padding:22px 0 50px;text-align:center}
.cury-band-logo{height:60px;width:auto;display:inline-block}
.cury-band-txt{margin-top:14px;color:var(--muted);font-size:13px;letter-spacing:.18em;text-transform:uppercase;font-weight:600}
footer{background:var(--navy);color:#C7D0E4;padding:56px 0 0}
.fgrid{display:grid;grid-template-columns:1.4fr 1fr 1.2fr;gap:36px;padding-bottom:40px}
.fgrid .logo b{color:#fff}
footer p.tag{margin-top:16px;font-size:14px;max-width:320px;color:#9FAAC4}
footer h4{color:#fff;font-size:13px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:16px}
footer ul{list-style:none;display:flex;flex-direction:column;gap:11px}footer ul a,footer ul li{font-size:15px;color:#C7D0E4}footer ul a:hover{color:#fff}
.fcontact li{display:flex;gap:9px;align-items:center}
.copy{border-top:1px solid rgba(255,255,255,.1);padding:18px 0;text-align:center;font-size:13px;color:#8894B0}
.float-wa{position:fixed;right:22px;bottom:22px;width:58px;height:58px;border-radius:50%;background:var(--wa);display:flex;align-items:center;justify-content:center;box-shadow:0 8px 22px rgba(0,0,0,.3);z-index:60;animation:wapulse 1.6s infinite}
.float-wa:hover{animation-play-state:paused}
@keyframes wapulse{0%{box-shadow:0 8px 22px rgba(0,0,0,.3),0 0 0 0 rgba(37,211,102,.55)}70%{box-shadow:0 8px 22px rgba(0,0,0,.3),0 0 0 18px rgba(37,211,102,0)}100%{box-shadow:0 8px 22px rgba(0,0,0,.3),0 0 0 0 rgba(37,211,102,0)}}
.logo-img{height:38px;width:auto;display:block}
.logo-footer{height:32px}
footer .logo span{margin-top:5px}
.hero-top{text-align:center;max-width:780px;margin:0 auto 34px}
.video-card{border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);background:#000;aspect-ratio:16/9}
.video-card video{width:100%;height:100%;object-fit:cover;display:block}
.legal{max-width:820px;margin:0 auto;padding:40px 0 60px;color:var(--text)}
.legal h1{font-size:clamp(28px,3.4vw,38px);color:var(--navy);font-weight:900;margin:8px 0 6px}
.legal .upd{color:var(--muted);font-size:14px;margin-bottom:26px}
.legal h2{font-size:20px;color:var(--navy);font-weight:800;margin:28px 0 10px}
.legal p{margin-bottom:12px;font-size:16px}.legal ul{margin:0 0 12px 20px}.legal li{margin-bottom:6px}
.legal a{color:var(--blue);font-weight:600}
`;

const WA_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.5 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607z"/></svg>';

function header(prefix){return `<header><div class="wrap nav">
<a href="${prefix}index.html" class="logo"><img class="logo-img" src="${prefix}assets/logo-cury.png" alt="Cury"><span>LANÇAMENTOS</span></a>
<nav class="menu"><a href="${prefix}index.html#empreendimentos">Empreendimentos</a><a href="${prefix}index.html#beneficios">Por que a Cury</a><a href="${prefix}index.html#contato">Contato</a></nav>
<a class="btn btn-blue" href="${waLink('Olá! Quero saber mais sobre os lançamentos Cury.')}" target="_blank" rel="noopener">${WA_SVG} Fale no WhatsApp</a>
</div></header>`;}

function footer(prefix){return `<section class="cury-band"><div class="wrap"><img class="cury-band-logo" src="${prefix}assets/logo-cury.png" alt="Cury Construtora"><p class="cury-band-txt">Empreendimentos Cury Construtora</p></div></section>
<footer id="contato"><div class="wrap fgrid">
<div><h4 style="color:#fff;font-family:'Archivo';font-size:20px;letter-spacing:normal;text-transform:none;margin-bottom:12px">Cury Lançamentos</h4><p class="tag">Os melhores lançamentos da Cury Construtora no Rio de Janeiro. Apartamentos de 1 a 3 quartos com condições facilitadas.</p></div>
<div><h4>Links</h4><ul><li><a href="${prefix}index.html#empreendimentos">Empreendimentos</a></li><li><a href="${prefix}index.html#beneficios">Por que a Cury</a></li><li><a href="${prefix}politica-de-privacidade.html">Política de Privacidade</a></li></ul></div>
<div><h4>Contato</h4><ul class="fcontact">
<li>${WA_SVG} <a href="${waLink('Olá! Quero saber mais sobre os lançamentos Cury.')}" target="_blank" rel="noopener">(21) 95943-4519</a></li>
<li>✉ ${EMAIL}</li><li>📍 Rio de Janeiro - RJ</li><li>🏢 CRECI Cury: 23.670-J</li></ul></div>
</div><div class="copy">© 2026 Cury Lançamentos · CRECI 23.670-J (Resp. Técnico: Renato Silva Correia) · <a href="${prefix}politica-de-privacidade.html" style="color:#8894B0;text-decoration:underline">Política de Privacidade</a><br>Site de divulgação de corretor autorizado. Cury Construtora S.A.</div></footer>
<a class="float-wa" href="${waLink('Olá! Quero saber mais sobre os lançamentos Cury.')}" target="_blank" rel="noopener" aria-label="WhatsApp"><svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.5 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z"/></svg></a>${NL}`;}

// ---------- HUB ----------
function buildHub(){
  const cards = DATA.map((p,i)=>{
    const main = imgsOf(p)[0];
    const badge = p.priority ? `<span class="badge badge-prio">${p.status}</span>` : `<span class="badge">${p.status}</span>`;
    const cardCls = 'card'+(p.priority?' card-prio':'');
    const priceBlock = p.priority
      ? `<div class="price prio">🔥 Vagas limitadas · seja prioridade</div>
        <div class="specs"><span>🛏 ${p.qts} qts</span><span>🏊 ${p.area}</span></div>
        <div class="prio-flash">Pré-lançamento</div>
        <span class="btn btn-blue cta">Quero ser prioridade</span>`
      : `<div class="price">${p.pt ? brl(p.pf)+' — '+brl(p.pt) : 'A partir de '+brl(p.pf)}</div>
        <div class="specs"><span>🛏 ${p.qts} qts</span><span>▭ ${p.area}</span><span>📅 ${p.entrega}</span></div>
        <span class="btn btn-blue cta">Ver empreendimento</span>`;
    return `<a class="${cardCls}" data-region="${p.region}" href="empreendimento/${p.slug}.html">
      <div class="thumb"><img src="${main}" alt="Fachada ${p.name}" loading="lazy">${badge}<span class="order">${i+1}º lançamento</span></div>
      <div class="body">
        <h3>${p.name}</h3>
        <div class="loc">📍 ${p.local}</div>
        ${priceBlock}
      </div></a>`;
  }).join('\n');

  const projOpts = DATA.map(p=>`<option>${p.name}</option>`).join('');

  return `<!DOCTYPE html><html lang="pt-BR"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
${PIXEL}
<title>Cury Lançamentos | 19 empreendimentos no Rio de Janeiro</title>
${fav('')}
<meta name="description" content="19 lançamentos Cury no Rio de Janeiro. Apartamentos de 1 a 3 quartos com condições facilitadas e subsídio do Minha Casa Minha Vida.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${CSS}
.hero{position:relative;overflow:hidden;background:var(--navy);color:#fff;padding:60px 0 70px}
.hero-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;filter:brightness(1.15) saturate(1.05)}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(100deg,rgba(20,33,61,.80) 0%,rgba(20,33,61,.48) 48%,rgba(20,33,61,.28) 100%);z-index:1}
.hero .wrap{position:relative;z-index:2}
.badge-prio{background:#E8912B}
.card-prio{outline:2px solid #E8912B;outline-offset:0}
.price.prio{color:#E8912B;font-size:16px;font-weight:800}
.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}
.hero h1{font-size:clamp(32px,4.2vw,52px);font-weight:900}.hero h1 em{color:#8FA6FF;font-style:normal}
.hero p.sub{margin-top:18px;font-size:18px;color:#D7DDEA;max-width:520px}
.hero-actions{display:flex;gap:14px;margin-top:28px;flex-wrap:wrap}
.form-card{background:#fff;color:var(--text);border-radius:var(--radius);padding:30px 28px;box-shadow:var(--shadow)}
.form-card h3{font-size:23px;color:var(--navy);font-weight:800}.form-card p.small{font-size:14px;color:var(--muted);margin:6px 0 18px}
.form-card label{display:block;font-size:13px;font-weight:600;color:var(--navy-2);margin:14px 0 6px}
.form-card input,.form-card select{width:100%;padding:14px 15px;border:1.5px solid var(--line);border-radius:11px;font-size:15px;font-family:'Inter';color:var(--text);background:#fff}
.form-card input:focus,.form-card select:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-soft)}
.form-card input.valid{border-color:#25A35A}
.form-card input.invalid{border-color:#E5484D;box-shadow:0 0 0 3px rgba(229,72,77,.14)}
.err-msg{display:none;font-size:12.5px;color:#E5484D;font-weight:600;margin-top:6px}
.form-card input.invalid ~ .err-msg{display:block}
.ok-msg{display:none;font-size:12.5px;color:#1E8E4E;font-weight:600;margin-top:6px}
.form-card input.valid ~ .ok-msg{display:block}
.form-card .btn-blue{width:100%;margin-top:20px;text-transform:uppercase;letter-spacing:.02em}
.form-card .privacy{font-size:12px;color:var(--muted);text-align:center;margin-top:12px}
section{padding:76px 0}.head{text-align:center;max-width:640px;margin:0 auto 38px}
.head h2{font-size:clamp(28px,3.4vw,40px);font-weight:800}.head h2 em{color:var(--blue);font-style:normal}.head p{color:var(--muted);margin-top:12px;font-size:17px}
.empre{background:var(--navy)}.empre .head h2{color:#fff}.empre .head p{color:#B9C2D6}
.filters{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:38px}
.filters button{background:transparent;color:#C7D0E4;border:1.5px solid rgba(255,255,255,.22);padding:9px 20px;border-radius:999px;font-weight:600;font-size:14px;cursor:pointer;transition:.2s;font-family:'Inter'}
.filters button:hover{border-color:#fff;color:#fff}.filters button.active{background:var(--blue);border-color:var(--blue);color:#fff}
.empre-more{text-align:center;margin-top:42px}
.btn-expand{background:#fff;color:var(--navy);padding:14px 30px}
.btn-expand:hover{background:var(--blue-soft);transform:translateY(-2px)}
.btn-expand svg{transition:transform .25s}
.btn-expand.is-open svg{transform:rotate(180deg)}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}
.card{background:#fff;border-radius:var(--radius);overflow:hidden;box-shadow:0 12px 30px rgba(0,0,0,.25);display:flex;flex-direction:column;transition:.25s}
.card:hover{transform:translateY(-6px)}
.card .thumb{height:200px;position:relative;background:var(--navy-2)}
.card .thumb img{width:100%;height:100%;object-fit:cover}
.badge{position:absolute;top:14px;left:14px;background:rgba(20,33,61,.82);color:#fff;font-size:12px;font-weight:700;padding:6px 13px;border-radius:999px;z-index:2}
.order{position:absolute;top:14px;right:14px;background:var(--blue);color:#fff;font-size:12px;font-weight:800;padding:6px 12px;border-radius:999px;z-index:2;font-family:'Archivo'}
.card .body{padding:20px;display:flex;flex-direction:column;gap:8px;flex:1}
.card h3{font-size:20px;color:var(--navy);font-weight:800}.card .loc{font-size:13px;color:var(--muted)}
.card .price{font-size:19px;font-weight:800;color:var(--blue);font-family:'Archivo';margin-top:2px}
.card .specs{display:flex;flex-wrap:wrap;gap:14px;font-size:13px;color:var(--navy-2);margin-top:6px;padding-top:12px;border-top:1px solid var(--line)}
.card .cta{margin-top:auto;width:100%;font-size:15px;padding:12px}
.card-prio .cta{margin-top:12px}
.prio-flash{align-self:flex-start;margin-top:auto;display:inline-flex;align-items:center;gap:8px;background:#FFF3E0;color:#B5670A;font-weight:800;font-size:13px;padding:7px 14px;border-radius:999px;animation:flash 1.1s ease-in-out infinite}
.prio-flash::before{content:"";width:9px;height:9px;border-radius:50%;background:#E8912B;animation:pulsedot 1.1s infinite}
@keyframes flash{0%,100%{opacity:1}50%{opacity:.45}}
@keyframes pulsedot{0%{box-shadow:0 0 0 0 rgba(232,145,43,.6)}70%{box-shadow:0 0 0 8px rgba(232,145,43,0)}100%{box-shadow:0 0 0 0 rgba(232,145,43,0)}}
.why{background:var(--bg)}.bcards{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.bcard{background:var(--navy);color:#fff;border-radius:var(--radius);padding:36px 28px;text-align:center}
.bcard .ico{width:110px;height:110px;margin:0 auto 10px}.bcard .ico img{width:100%;height:100%;object-fit:contain}
.bcard h3{font-size:21px;font-weight:800;margin-bottom:8px}.bcard p{color:#B9C2D6;font-size:15px}
.band{background:#D6E2EE;color:var(--navy);text-align:center;padding:70px 0 20px}
.band h2{font-size:clamp(26px,3.2vw,36px);font-weight:800;max-width:760px;margin:0 auto;color:var(--navy)}.band p{color:#3E4B63;margin:14px auto 26px;max-width:560px;font-size:17px}
@media(max-width:900px){.hero-grid{grid-template-columns:1fr;gap:34px}.cards,.bcards{grid-template-columns:1fr 1fr}.fgrid{grid-template-columns:1fr 1fr}}
@media(max-width:640px){.menu,.btn-blue.navbtn{display:none}.cards,.bcards,.fgrid{grid-template-columns:1fr}section{padding:56px 0}}
</style></head><body id="top">
${header('')}
<section class="hero">
  <video class="hero-bg" src="assets/video-topo.mp4" poster="assets/video-poster.jpg" autoplay muted loop playsinline preload="metadata"></video>
  <div class="hero-overlay"></div>
  <div class="wrap hero-grid">
    <div>
      <h1>19 lançamentos Cury no <em>Rio de Janeiro</em></h1>
      <p class="sub">Do Porto Maravilha à Barra e Niterói. Apartamentos de Studio, 1 a 3 quartos com condições facilitadas e subsídio do Minha Casa Minha Vida.</p>
      <div class="hero-actions">
        <a class="btn btn-blue" href="#empreendimentos">Ver empreendimentos</a>
        <a class="btn btn-ghost" href="${waLink('Olá! Quero falar com um especialista Cury.')}" target="_blank" rel="noopener">Falar com especialista</a>
      </div>
    </div>
    <div class="form-card" id="lead-form">
      <div id="form-inner">
      <h3>Receba condições exclusivas</h3>
      <p class="small">Preencha e um especialista da Cury entra em contato com as melhores ofertas.</p>
      <form id="leadForm" onsubmit="return enviarLead(event)" data-nl-lead-form>
        <label>Seu nome</label><input id="nome" name="nome" type="text" data-nl-field="name" placeholder="Nome completo" required>
        <label>WhatsApp (com DDD)</label><input id="fone" name="fone" type="tel" data-nl-field="phone" inputmode="numeric" maxlength="16" placeholder="(21) 90000-0000" required><span class="err-msg" id="fone-err">Número inválido. Confira o DDD e use (XX) 9XXXX-XXXX</span><span class="ok-msg" id="fone-ok"></span>
        <label>Empreendimento de interesse</label>
        <select id="projeto" name="projeto" data-nl-field="message" required><option value="" disabled selected>Selecione o empreendimento</option>${projOpts}<option>Ainda não decidi / quero ver opções</option></select>
        <label>Renda familiar</label>
        <select id="renda" name="renda" required><option value="" disabled selected>Selecione a renda familiar</option><option>Até R$ 5 mil</option><option>De R$ 5.000,01 até R$ 9.600</option><option>De R$ 9.600 até R$ 13.000</option><option>Acima de R$ 13.000</option></select>
        <button type="submit" class="btn btn-blue" id="leadBtn">Receber condições exclusivas</button>
        <p class="privacy">Seus dados estão seguros. Sem spam.</p>
      </form>
      </div>
      <div id="form-ok" style="display:none;text-align:center;padding:14px 4px 6px">
        <div style="width:64px;height:64px;border-radius:50%;background:#E7F6ED;display:flex;align-items:center;justify-content:center;margin:0 auto 14px"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#1E8E4E" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg></div>
        <h3 style="font-size:22px;color:var(--navy);font-weight:800">Recebemos seus dados!</h3>
        <p style="color:var(--muted);font-size:15px;margin:8px 0 18px">Em breve um especialista da Cury entra em contato. Se preferir, fale agora mesmo:</p>
        <a class="btn btn-wa" style="width:100%" href="${waLink('Olá! Acabei de me cadastrar no site e quero falar com um especialista Cury.')}" target="_blank" rel="noopener">${WA_SVG} Falar no WhatsApp</a>
      </div>
    </div>
  </div>
</section>
<section class="empre" id="empreendimentos">
  <div class="wrap">
    <div class="head"><h2>Nossos Empreendimentos</h2><p>19 lançamentos nas melhores regiões do Rio. Selecione a região para filtrar.</p></div>
    <div class="filters" id="filters">
      <button class="active" data-f="todos">Todos</button><button data-f="centro">Centro</button><button data-f="zona-norte">Zona Norte</button><button data-f="zona-oeste">Zona Oeste</button><button data-f="niteroi">Niterói</button>
    </div>
    <div class="cards" id="cards">${cards}</div>
    <div class="empre-more" id="verTodosWrap">
      <button class="btn btn-expand" id="verTodos"><span class="txt">Ver todos os empreendimentos</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
      </button>
    </div>
  </div>
</section>
<section class="why" id="beneficios">
  <div class="wrap"><div class="head"><h2>Por que a <em>Cury</em>?</h2><p>Uma das maiores construtoras do país, com solidez para realizar o seu sonho.</p></div>
  <div class="bcards">
    <div class="bcard"><div class="ico"><img src="assets/icon-lider.png" alt="Construtora Líder"></div><h3>Construtora Líder</h3><p>Mais de 60 anos de mercado e milhares de unidades entregues em todo o Brasil.</p></div>
    <div class="bcard"><div class="ico"><img src="assets/icon-seguranca.png" alt="Segurança"></div><h3>Segurança</h3><p>Projetos com registro de incorporação e financiamento facilitado pela Caixa.</p></div>
    <div class="bcard"><div class="ico"><img src="assets/icon-facilidade.png" alt="Facilidade"></div><h3>Facilidade</h3><p>Condições de pagamento flexíveis e subsídios do Minha Casa Minha Vida.</p></div>
  </div></div>
</section>
<section class="band"><div class="wrap"><h2>Descubra em 1 minuto quanto ficaria a sua parcela</h2><p>Envie seus dados e receba uma simulação personalizada, sem compromisso.</p>
<a class="btn btn-wa" href="${waLink('Olá! Quero uma simulação de financiamento dos lançamentos Cury.')}" target="_blank" rel="noopener">${WA_SVG} Simular pelo WhatsApp</a></div></section>
${footer('')}
<script>
// Máscara e validação de telefone celular brasileiro: (XX) 9XXXX-XXXX
var TEL_RE=/^\\((\\d{2})\\) 9\\d{4}-\\d{4}$/;
// DDDs válidos no Brasil (ANATEL)
var DDDS='11 12 13 14 15 16 17 18 19 21 22 24 27 28 31 32 33 34 35 37 38 41 42 43 44 45 46 47 48 49 51 53 54 55 61 62 63 64 65 66 67 68 69 71 73 74 75 77 79 81 82 83 84 85 86 87 88 89 91 92 93 94 95 96 97 98 99'.split(' ');
function maskTel(v){v=v.replace(/\\D/g,'').slice(0,11);if(v.length>7)return '('+v.slice(0,2)+') '+v.slice(2,7)+'-'+v.slice(7);if(v.length>2)return '('+v.slice(0,2)+') '+v.slice(2);return v;}
// número é celular válido: formato + DDD real + não pode ser sequência repetida
function foneValido(v){var m=v.match(TEL_RE);if(!m)return false;if(DDDS.indexOf(m[1])<0)return false;var d=v.replace(/\\D/g,'');if(/^(\\d)\\1{10}$/.test(d))return false;return true;}
(function(){var t=document.getElementById('fone');if(!t)return;var ok=document.getElementById('fone-ok');
  t.addEventListener('input',function(){t.value=maskTel(t.value);
    if(foneValido(t.value)){t.classList.remove('invalid');t.classList.add('valid');
      ok.textContent='\\u2713 N\\u00famero de WhatsApp v\\u00e1lido';
    } else { t.classList.remove('valid'); }});
  t.addEventListener('blur',function(){if(t.value&&!foneValido(t.value)){t.classList.add('invalid');}});
})();
function sucessoLead(){var i=document.getElementById('form-inner'),o=document.getElementById('form-ok');if(i)i.style.display='none';if(o)o.style.display='block';}
function enviarLead(ev){ev.preventDefault();
var foneEl=document.getElementById('fone');
if(!foneValido(foneEl.value)){foneEl.classList.remove('valid');foneEl.classList.add('invalid');foneEl.focus();return false;}
var n=nome.value.trim(),f=fone.value.trim(),r=renda.value;
var proj=(document.getElementById('projeto')||{}).value||'';
var btn=document.getElementById('leadBtn'); if(btn){btn.disabled=true;btn.textContent='Enviando...';}
if(window.dataLayer)dataLayer.push({event:'generate_lead',form_origin:'hero',empreendimento:proj});
if(window.fbq)fbq('track','Lead',{content_name:proj});
if(window.CuryTrack)CuryTrack.lead('hero');
fetch('https://script.google.com/macros/s/AKfycbyeCg1rfo85NcgTM15vE2dLzhPqomi23nAiLItM63QqhwqTC5CAmoihL2J713Dqx-nB/exec',{method:'POST',mode:'no-cors',keepalive:true,headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({Nome:n,WhatsApp:f,Renda:r,Empreendimento:proj,Interesse:'Cadastro site',Origem:location.href})}).catch(function(){});fetch('https://formsubmit.co/ajax/imoveisjornada@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({_subject:'Novo lead'+(proj?(' - '+proj):'')+' | Cury Lançamentos','Empreendimento de interesse':proj,Nome:n,WhatsApp:f,'Renda familiar':r,Origem:location.href,_template:'table',_captcha:'false'})})
.then(function(res){return res.json();})
.then(function(){sucessoLead();})
.catch(function(){var msg='Olá! Quero receber as condições exclusivas dos lançamentos Cury.\\nEmpreendimento de interesse: '+proj+'\\nNome: '+n+'\\nWhatsApp: '+f+'\\nRenda familiar: '+r;window.open('https://wa.me/${WHATS}?text='+encodeURIComponent(msg),'_blank');sucessoLead();});
return false;}
// Pré-seleciona o empreendimento quando o cliente vem de uma página específica (?proj=Nome)
(function(){try{var q=new URLSearchParams(location.search).get('proj');if(!q)return;var s=document.getElementById('projeto');if(!s)return;for(var i=0;i<s.options.length;i++){if(s.options[i].value===q||s.options[i].text===q){s.selectedIndex=i;break;}}}catch(e){}})();
var LIMIT=6, filtro='todos', expandido=false;
var cards=[].slice.call(document.querySelectorAll('#cards .card'));
var wrap=document.getElementById('verTodosWrap'), btn=document.getElementById('verTodos');
function aplicarVista(){
  var total=0; cards.forEach(function(c){ if(filtro==='todos'||c.dataset.region===filtro) total++; });
  var count=0;
  cards.forEach(function(c){
    var match=(filtro==='todos'||c.dataset.region===filtro);
    if(!match){c.style.display='none';return;}
    var esconder=(filtro==='todos'&&!expandido&&count>=LIMIT);
    c.style.display=esconder?'none':'';
    count++;
  });
  if(filtro==='todos'&&total>LIMIT){
    wrap.style.display='';
    btn.querySelector('.txt').textContent=expandido?'Ver menos':('Ver todos os '+total+' empreendimentos');
    btn.classList.toggle('is-open',expandido);
  } else { wrap.style.display='none'; }
}
document.querySelectorAll('#filters button').forEach(function(b){b.addEventListener('click',function(){
  document.querySelector('#filters .active').classList.remove('active');b.classList.add('active');
  filtro=b.dataset.f; expandido=false; aplicarVista();
});});
btn.addEventListener('click',function(){
  expandido=!expandido; aplicarVista();
  if(!expandido){ document.getElementById('empreendimentos').scrollIntoView({behavior:'smooth'}); }
});
aplicarVista();
</script>
${TRACK}
</body></html>`;
}

// ---------- SUBPÁGINA ----------
function buildDetail(p, idx){
  const srcs = imgsOf(p,'../');
  const gallery = srcs.map((s,i)=>`<img src="${s}" alt="${p.name} ${i+1}" loading="lazy">`).join('\n');
  const bullets = p.bullets.map(b=>`<li>${b}</li>`).join('');
  const feats = p.feat.map(f=>`<span class="feat">${f}</span>`).join('');
  const lazer = p.lazer ? p.lazer.map(f=>`<span class="feat feat-lz">${f}</span>`).join('') : '';
  const lazerFotos = p.lazerFotos ? p.lazerFotos.map(a=>`<figure class="lzfig"><img src="../assets/img/${a[0]}" alt="${a[1]}" loading="lazy"><figcaption>${a[1]}</figcaption></figure>`).join('') : '';
  const msg = p.priority
    ? 'Olá! Quero ser PRIORIDADE no lançamento '+p.name+' ('+p.local+'). Pode me avisar em primeira mão sobre valores e unidades?'
    : 'Olá! Tenho interesse no empreendimento '+p.name+' ('+p.local+'). Pode me enviar mais informações e uma simulação?';
  return `<!DOCTYPE html><html lang="pt-BR"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
${PIXEL}
<title>${p.name} | Cury Lançamentos</title>
${fav('../')}
<meta name="description" content="${p.name} em ${p.bairro}. ${p.qts} quartos. ${p.priority?'Pré-lançamento: cadastre-se e seja prioridade. ':'A partir de '+brl(p.pf)+'. '}${p.desc}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${CSS}
.back{display:inline-flex;gap:8px;align-items:center;color:var(--muted);font-weight:600;font-size:14px;margin:24px 0 4px}
.phero{display:grid;grid-template-columns:1.4fr 1fr;gap:34px;padding:14px 0 30px;align-items:start}
.phero .main{border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);aspect-ratio:16/10;background:var(--navy-2)}
.phero .main img{width:100%;height:100%;object-fit:cover}
.phero .main video{width:100%;height:100%;object-fit:cover;display:block}
.pbadge{display:inline-block;background:var(--blue-soft);color:var(--blue-dark);font-weight:700;font-size:13px;padding:6px 14px;border-radius:999px}
.phero h1{font-size:clamp(28px,3.6vw,40px);color:var(--navy);font-weight:900;margin:12px 0 6px}
.phero .loc{color:var(--muted);font-size:15px}
.pricebox{margin-top:20px;padding:20px;border:1px solid var(--line);border-radius:var(--radius);background:var(--bg)}
.pricebox.prio{border:2px solid #E8912B;background:#FFF7EC}
.prio-tag{display:inline-block;background:#E8912B;color:#fff;font-weight:700;font-size:13px;padding:5px 12px;border-radius:999px}
.prio-title{font-family:'Archivo';font-weight:800;color:var(--navy);font-size:22px;margin:12px 0 6px}
.prio-text{color:var(--text);font-size:15px;margin-bottom:6px}
.pbadge-prio{background:#FCEBD3;color:#B5670A}
.pricebox .from{font-size:13px;color:var(--muted)}.pricebox .val{font-size:30px;font-weight:900;color:var(--blue);font-family:'Archivo'}
.pspecs{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:16px}
.pspecs div{background:#fff;border:1px solid var(--line);border-radius:12px;padding:12px;text-align:center}
.pspecs .k{font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em}.pspecs .v{font-weight:700;color:var(--navy);font-size:15px;margin-top:3px}
.pricebox .btn-wa{width:100%;margin-top:16px}
section.det{padding:20px 0 60px}
.det h2{font-size:24px;color:var(--navy);font-weight:800;margin:34px 0 14px}
.about{color:var(--text);font-size:16px;max-width:820px}.about ul{margin:14px 0 0 20px}.about li{margin-bottom:6px}
.feats{display:flex;flex-wrap:wrap;gap:10px;margin-top:6px}
.feat{background:var(--blue-soft);color:var(--blue-dark);font-weight:600;font-size:14px;padding:8px 15px;border-radius:999px}
.feat-lz{background:#E7F1E9;color:#1E5233}
.lzgal{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:6px}.lzfig{position:relative;border-radius:12px;overflow:hidden;aspect-ratio:4/3;margin:0}.lzfig img{width:100%;height:100%;object-fit:cover;display:block}.lzfig figcaption{position:absolute;left:0;right:0;bottom:0;padding:10px 12px;background:linear-gradient(transparent,rgba(20,33,61,.82));color:#fff;font-weight:600;font-size:14px}@media(max-width:640px){.lzgal{grid-template-columns:1fr 1fr}}
.gal{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:6px}
.gal img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:12px;box-shadow:0 8px 20px rgba(20,33,61,.12)}
.finalcta{background:var(--navy);color:#fff;border-radius:var(--radius);padding:40px;text-align:center;margin-top:44px}
.finalcta h2{color:#fff;margin:0 0 8px}.finalcta p{color:#B9C2D6;margin-bottom:22px}
@media(max-width:820px){.phero{grid-template-columns:1fr}.gal{grid-template-columns:1fr 1fr}}
@media(max-width:640px){.menu{display:none}.pspecs{grid-template-columns:1fr 1fr}}
</style></head><body id="top">
${header('../')}
<div class="wrap">
  <a class="back" href="../index.html#empreendimentos">← Voltar aos empreendimentos</a>
  <div class="phero">
    <div>
      <div class="main">${p.video ? `<video src="../assets/${p.video}" poster="${srcs[0]}" autoplay muted loop playsinline preload="metadata"></video>` : `<img src="${srcs[0]}" alt="Fachada ${p.name}">`}</div>
    </div>
    <div>
      <span class="pbadge${p.priority?' pbadge-prio':''}">${p.status} · ${idx+1}º lançamento</span>
      <h1>${p.name}</h1>
      <div class="loc">📍 ${p.local}</div>
      ${p.priority ? `<div class="pricebox prio">
        <div class="prio-tag">🔥 Pré-lançamento · vagas limitadas</div>
        <div class="prio-title">Seja prioridade neste lançamento</div>
        <p class="prio-text">A tabela de valores ainda não foi liberada. Cadastre-se agora e tenha <strong>acesso antecipado</strong> aos preços e às melhores unidades, antes do público geral.</p>
        <div class="pspecs">
          <div><div class="k">Quartos</div><div class="v">${p.qts}</div></div>
          <div><div class="k">Diferencial</div><div class="v">${p.area}</div></div>
          <div><div class="k">Status</div><div class="v">${p.entrega}</div></div>
        </div>
        <a class="btn btn-wa" href="${waLink(msg)}" target="_blank" rel="noopener">${WA_SVG} Quero ser prioridade</a>
        <a class="btn btn-blue" style="width:100%;margin-top:10px" href="../index.html?proj=${encodeURIComponent(p.name)}#lead-form">Cadastrar pelo formulário</a>
      </div>` : `<div class="pricebox">
        <div class="from">A partir de</div><div class="val">${brl(p.pf)}</div>
        <div class="pspecs">
          <div><div class="k">Quartos</div><div class="v">${p.qts}</div></div>
          <div><div class="k">Área</div><div class="v">${p.area}</div></div>
          <div><div class="k">Entrega</div><div class="v">${p.entrega}</div></div>
        </div>
        <a class="btn btn-wa" href="${waLink(msg)}" target="_blank" rel="noopener">${WA_SVG} Tenho interesse</a>
      </div>`}
    </div>
  </div>
  <section class="det">
    <h2>Sobre o empreendimento</h2>
    <div class="about"><p>${p.desc}</p><ul>${bullets}</ul></div>
    <h2>Diferenciais</h2>
    <div class="feats">${feats}</div>
    ${p.lazer ? `<h2>Lazer &amp; áreas comuns</h2>
    <p style="color:var(--muted);font-size:14px;margin:-6px 0 14px">Térreo + Rooftop com vista para a Baía de Guanabara · perspectivas ilustrativas.</p>
    <div class="feats">${lazer}</div>` : ''}
    ${p.filme ? `<h2>Filme do empreendimento</h2>
    <div class="video-card" style="margin-top:6px"><video src="../assets/${p.filme}" poster="${srcs[0]}" controls preload="metadata" playsinline></video></div>` : ''}
    ${p.video ? '' : `<h2>Galeria de fotos</h2>
    <div class="gal">${gallery}</div>`}
    ${p.lazerFotos ? `<h2>Galeria de lazer</h2>
    <p style="color:var(--muted);font-size:14px;margin:-6px 0 14px">Perspectivas ilustrativas do Erê (book oficial).</p>
    <div class="lzgal">${lazerFotos}</div>` : ''}
    <div class="finalcta">
      <h2>Gostou do ${p.name}?</h2>
      <p>Fale agora com um especialista e receba a tabela de valores e condições.</p>
      <a class="btn btn-wa" href="${waLink(msg)}" target="_blank" rel="noopener">${WA_SVG} Falar no WhatsApp</a>
    </div>
  </section>
</div>
${footer('../')}
${TRACK}
</body></html>`;
}

// ---------- POLÍTICA DE PRIVACIDADE ----------
function buildPrivacy(){
  return `<!DOCTYPE html><html lang="pt-BR"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
${PIXEL}
<title>Política de Privacidade | Cury Lançamentos</title>
${fav('')}
<meta name="description" content="Política de Privacidade do site Cury Lançamentos, em conformidade com a LGPD.">
<meta name="robots" content="index, follow">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${CSS}</style></head><body id="top">
${header('')}
<div class="wrap"><div class="legal">
  <a class="back" href="index.html" style="display:inline-block;color:var(--muted);font-weight:600;font-size:14px;margin:24px 0 4px">← Voltar ao início</a>
  <h1>Política de Privacidade</h1>
  <p class="upd">Última atualização: julho de 2026</p>

  <p>Este site (curylançamento.com.br) é mantido por um corretor de imóveis autorizado para divulgação dos empreendimentos da <strong>Cury Construtora S.A.</strong> no Rio de Janeiro. Respeitamos a sua privacidade e tratamos seus dados de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).</p>

  <h2>1. Quais dados coletamos</h2>
  <p>Coletamos apenas os dados que você nos fornece voluntariamente e informações técnicas de navegação:</p>
  <ul>
    <li>Dados de contato que você preenche nos formulários: nome, número de WhatsApp/telefone e faixa de renda familiar;</li>
    <li>Mensagens que você envia por WhatsApp a partir dos botões do site;</li>
    <li>Dados de navegação coletados por cookies e ferramentas de análise (páginas visitadas, origem do acesso, dispositivo), via Google Tag Manager, Google Analytics e Google Ads.</li>
  </ul>

  <h2>2. Para que usamos seus dados</h2>
  <ul>
    <li>Entrar em contato para apresentar empreendimentos, valores, condições e simulações de financiamento;</li>
    <li>Prestar atendimento e acompanhar seu interesse de compra;</li>
    <li>Melhorar o site e mensurar o resultado de campanhas de marketing.</li>
  </ul>

  <h2>3. Base legal</h2>
  <p>O tratamento é feito com base no seu consentimento e no legítimo interesse em responder à sua solicitação de contato, conforme a LGPD.</p>

  <h2>4. Compartilhamento</h2>
  <p>Seus dados podem ser compartilhados com a Cury Construtora S.A. e sua equipe de vendas para viabilizar a negociação, e com provedores de tecnologia utilizados no atendimento (por exemplo, WhatsApp/Meta e ferramentas do Google). <strong>Não vendemos seus dados</strong> a terceiros.</p>

  <h2>5. Cookies</h2>
  <p>Utilizamos cookies para lembrar preferências e medir a audiência do site. Você pode desativar os cookies nas configurações do seu navegador, ciente de que isso pode afetar sua experiência.</p>

  <h2>6. Seus direitos</h2>
  <p>A qualquer momento você pode solicitar: confirmação e acesso aos seus dados, correção, anonimização, portabilidade, eliminação e revogação do consentimento. Para exercer seus direitos, entre em contato pelo e-mail <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>

  <h2>7. Segurança e retenção</h2>
  <p>Adotamos medidas para proteger seus dados e os mantemos apenas pelo tempo necessário às finalidades acima ou conforme exigido por lei.</p>

  <h2>8. Responsável e contato</h2>
  <p>Corretor autorizado - CRECI Cury: <strong>23.670-J</strong> (Responsável Técnico: Renato Silva Correia).<br>
  E-mail: <a href="mailto:${EMAIL}">${EMAIL}</a> · WhatsApp: <a href="${waLink('Olá! Tenho uma dúvida sobre a Política de Privacidade.')}" target="_blank" rel="noopener">(21) 95943-4519</a>.</p>

  <p style="color:var(--muted);font-size:14px;margin-top:22px">Este é um site independente de divulgação e não é o site oficial da Cury Construtora. As informações de empreendimentos, valores e prazos são de responsabilidade da incorporadora e podem sofrer alterações sem aviso prévio.</p>
</div></div>
${footer('')}
${TRACK}
</body></html>`;
}

// ---------- ESCREVE ----------
const OUT = __dirname;
const SUB = path.join(OUT,'empreendimento');
const IMGDIR = path.join(OUT,'assets','img');
fs.mkdirSync(SUB,{recursive:true});
fs.mkdirSync(IMGDIR,{recursive:true});
fs.writeFileSync(path.join(OUT,'index.html'), buildHub());
fs.writeFileSync(path.join(OUT,'politica-de-privacidade.html'), buildPrivacy());
DATA.forEach((p,i)=>fs.writeFileSync(path.join(SUB,p.slug+'.html'), buildDetail(p,i)));

// ---- baixador de imagens (o usuário roda para hospedar as fotos no próprio domínio) ----
const pares = [...IMG_MAP.entries()]; // [url, nomeLocal]
// manifesto legível
fs.writeFileSync(path.join(OUT,'imagens-manifesto.txt'),
  pares.map(([u,n])=>n+'  <=  '+u).join('\n'));

// script macOS/Linux: baixa tudo para assets/img (curl já vem no Mac)
const sh = `#!/bin/bash
# Baixa as ${pares.length} imagens dos empreendimentos para assets/img/
# Uso: abra o Terminal nesta pasta e rode:  bash baixar-imagens.sh
cd "$(dirname "$0")"
mkdir -p assets/img
ok=0; fail=0
` + pares.map(([u,n])=>
`if [ ! -s "assets/img/${n}" ]; then
  if curl -fsSL -A "Mozilla/5.0" -e "https://curyconstrutoralancamentos.com.br/" "${u}" -o "assets/img/${n}"; then echo "OK  ${n}"; ok=$((ok+1)); else echo "FALHOU  ${n}"; fail=$((fail+1)); fi
else echo "JA EXISTE  ${n}"; ok=$((ok+1)); fi`).join('\n')
+ `\necho ""
echo "Concluído: $ok baixadas/existentes, $fail falharam de ${pares.length}."`;
fs.writeFileSync(path.join(OUT,'baixar-imagens.sh'), sh);

// versão Node (alternativa, caso prefira: node baixar-imagens.js)
const njs = `// Baixa as imagens para assets/img/ usando Node. Uso: node baixar-imagens.js
const fs=require('fs'),https=require('https'),path=require('path');
const PARES=${JSON.stringify(pares)};
const dir=path.join(__dirname,'assets','img'); fs.mkdirSync(dir,{recursive:true});
function get(u,dest){return new Promise(res=>{const f=fs.createWriteStream(dest);
https.get(u,{headers:{'User-Agent':'Mozilla/5.0','Referer':'https://curyconstrutoralancamentos.com.br/'}},r=>{
if(r.statusCode!==200){f.close();fs.unlinkSync(dest);console.log('FALHOU',path.basename(dest),r.statusCode);return res();}
r.pipe(f);f.on('finish',()=>{f.close();console.log('OK',path.basename(dest));res();});})
.on('error',e=>{console.log('ERRO',path.basename(dest),e.message);res();});});}
(async()=>{for(const [u,n] of PARES){const d=path.join(dir,n); if(fs.existsSync(d)&&fs.statSync(d).size>0){console.log('JA EXISTE',n);continue;} await get(u,d);} console.log('Concluído.');})();`;
fs.writeFileSync(path.join(OUT,'baixar-imagens.js'), njs);

console.log('OK: index.html + '+DATA.length+' subpáginas + baixador ('+pares.length+' imagens) gerados.');

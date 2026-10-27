// Mundo 9 — Coroa da Europa: expandir para além da Espanha. Fatos conferidos em 2026-10-26.
// Regra deste mundo: a lista de países, as ferramentas e as datas do Pan-EU vêm de páginas da Amazon.es;
// IVA e embalagens vêm de páginas oficiais (UE, HMRC, ZSVR/LUCID, Citeo). Onde as fontes divergem, o texto avisa.
// Valores por país que não foram confirmados em fonte aberta ficam de fora ou aparecem de forma qualitativa.
export default {
  id: 9,
  chefe: {
    id: "chefao", nome: "O CHEFÃO DAS VENDAS", hp: 100, vidas: 5, final: true,
    fala: "Você chegou longe. Mas vender de verdade é Espanha, operação e Europa ao mesmo tempo. Mostre que dominou os três.",
    derrota: "Impossível... um vendedor que sabe o que faz, calcula antes de agir e cumpre as regras. A coroa é sua.",
    fases: [
      {
        nome: "Fase 1: Espanha",
        perguntas: [
          { id: "bf-1", tipo: "multipla", licaoRef: "2-5", enunciado: "Qual o IVA geral cobrado na Espanha?", opcoes: ["21%", "7%", "35%", "0%"], correta: 0, explicacao: "O tipo geral é 21%, com 10% e 4% para casos específicos." },
          { id: "bf-2", tipo: "multipla", licaoRef: "2-5", enunciado: "O que o OSS permite a quem vende a consumidores de outros países da UE?", opcoes: ["Declarar e pagar o IVA desses países numa só declaração, no país de identificação", "Não pagar IVA nunca", "Vender sem EORI para o mundo todo", "Substituir a declaração nacional"], correta: 0, explicacao: "É adicional: o modelo 303 nacional continua." },
          { id: "bf-3", tipo: "multipla", licaoRef: "2-5", enunciado: "Qual o limite do OSS, sem IVA, somando o ano atual e o anterior?", opcoes: ["10.000 €", "1.000 €", "100.000 €", "Não existe"], correta: 0, explicacao: "Acima de 10.000 € aplica-se o IVA do país do cliente." },
          { id: "bf-4", tipo: "vf", licaoRef: "2-1", enunciado: "Ter um NIE já autoriza, por si só, a trabalhar por conta própria na Espanha.", correta: false, explicacao: "Depende do tipo de autorização de residência. Fale com um advogado de extranjería." },
          { id: "bf-5", tipo: "multipla", licaoRef: "5-1", enunciado: "Por que calcular a margem com todas as taxas antes de comprar um lote?", opcoes: ["Porque comissão, logística, anúncios, IVA e devoluções corroem o lucro", "Porque a Amazon exige", "Porque é opcional", "Para pagar menos imposto"], correta: 0, explicacao: "Sem a conta completa, um produto bonito pode dar prejuízo." },
          { id: "bf-6", tipo: "multipla", licaoRef: "6-4", enunciado: "Para que serve o Brand Registry?", opcoes: ["Proteger e controlar a sua marca e a página dos seus produtos", "Pagar menos comissão", "Evitar o IVA", "Criar contas extras"], correta: 0, explicacao: "Exige uma marca registrada ou pedido em andamento, e dá mais controle sobre a página." },
          { id: "bf-7", tipo: "multipla", licaoRef: "4-3", enunciado: "Que documento identifica a mercadoria e seus direitos de importação de fora da UE?", opcoes: ["Declaração aduaneira (DUA) com código TARIC", "Cartão de visita", "Fatura do anúncio", "Extrato do banco"], correta: 0, explicacao: "O código aduaneiro define direitos e regras; o despachante cuida da declaração." },
        ],
      },
      {
        nome: "Fase 2: Operação",
        perguntas: [
          { id: "bf-8", tipo: "multipla", licaoRef: "8-1", enunciado: "Qual o alvo de ODR informado pela Amazon.es?", opcoes: ["Abaixo de 1%", "Abaixo de 10%", "Abaixo de 25%", "Não há alvo"], correta: 0, explicacao: "Um pedido conta uma vez, mesmo com mais de um problema." },
          { id: "bf-9", tipo: "multipla", licaoRef: "8-3", enunciado: "A partir de quantos dias parado a Amazon trata o estoque como excedente?", opcoes: ["90 dias", "7 dias", "15 dias", "365 dias"], correta: 0, explicacao: "Inventário que passa de 90 dias sem vender é considerado excedente." },
          { id: "bf-10", tipo: "multipla", licaoRef: "8-4", enunciado: "Qual o prazo de desistência do consumidor em compras online na UE?", opcoes: ["14 dias", "3 dias", "6 meses", "Não existe"], correta: 0, explicacao: "Sem justificativa, contado da entrega." },
          { id: "bf-11", tipo: "ordenar", licaoRef: "8-2", enunciado: "Ordene a reação a um aviso de conta em risco:", opcoes: ["Ler o aviso e identificar o problema", "Descobrir a causa raiz", "Corrigir e documentar as ações", "Enviar o plano de ação com medidas preventivas"], explicacao: "A Amazon pede causa raiz, ações corretivas e medidas preventivas." },
          { id: "bf-12", tipo: "vf", licaoRef: "8-2", enunciado: "Abrir uma conta nova para contornar uma suspensão é uma boa saída.", correta: false, explicacao: "Pode agravar o problema. O caminho é o plano de ação e a apelação." },
          { id: "bf-13", tipo: "multipla", licaoRef: "7-4", enunciado: "Se o ACoS do seu anúncio é maior que a margem do produto antes dos anúncios, o que acontece?", opcoes: ["Cada venda por anúncio dá prejuízo", "Você lucra mais", "Nada muda", "A Amazon devolve a diferença"], correta: 0, explicacao: "ACoS acima da margem de equilíbrio significa vender com perda." },
          { id: "bf-14", tipo: "multipla", licaoRef: "8-5", enunciado: "O que faz a rotina semanal de 30 minutos funcionar?", opcoes: ["Dia e hora fixos, com números-chave e gatilhos escritos", "Fazer quando sobra tempo", "Olhar só quando há problema", "Delegar tudo e nunca olhar"], correta: 0, explicacao: "Rotina é hábito. Delegue a coleta dos números e guarde a decisão." },
        ],
      },
      {
        nome: "Fase 3: Europa",
        perguntas: [
          { id: "bf-15", tipo: "vf", licaoRef: "9-2", enunciado: "Com uma conta de vendedor na Espanha, você já pode vender em todas as lojas da Europa sem criar outras contas.", correta: false, explicacao: "Segundo a Amazon, não há conta única: é preciso criar uma conta de vendedor para cada loja de destino." },
          { id: "bf-16", tipo: "multipla", licaoRef: "9-2", enunciado: "Para que serve a ferramenta Build International Listings?", opcoes: ["Criar ofertas em outras lojas a partir de uma loja existente, sincronizando preços", "Registrar a marca", "Pagar o IVA", "Abrir um armazém"], correta: 0, explicacao: "Ela reaproveita o catálogo; você ainda confere a tradução e os preços." },
          { id: "bf-17", tipo: "multipla", licaoRef: "9-3", enunciado: "No Pan-EU, o que a Amazon exige em relação ao IVA?", opcoes: ["Cumprir as obrigações de IVA, incluindo número de IVA em cada país onde há estoque", "Nada", "Só IVA espanhol", "Pagar IVA em dobro"], correta: 0, explicacao: "O número de IVA é necessário em cada país onde a mercadoria fica armazenada." },
          { id: "bf-18", tipo: "multipla", licaoRef: "9-3", enunciado: "Quem vende para consumidores na Alemanha e na França com embalagem de envio própria deve se preocupar com o quê?", opcoes: ["Responsabilidade estendida do produtor (registro e reciclagem de embalagens)", "Só o idioma", "Só a cor da caixa", "Nada, porque a Amazon cobre tudo"], correta: 0, explicacao: "Na Alemanha há o registro LUCID e o sistema dual; na França, a adesão a uma organização de EPR. Peça ajuda a um especialista." },
          { id: "bf-19", tipo: "multipla", licaoRef: "9-4", enunciado: "O Reino Unido faz parte do Pan-EU?", opcoes: ["Não, saiu em 1º de janeiro de 2021", "Sim", "Só em dezembro", "Só para livros"], correta: 0, explicacao: "O Reino Unido tem regras próprias de IVA e alfândega." },
          { id: "bf-20", tipo: "multipla", licaoRef: "9-1", enunciado: "Qual a melhor hora de expandir para outro país?", opcoes: ["Quando o produto e a operação já são estáveis e lucrativos na Espanha", "Quando tudo na Espanha está dando errado", "No primeiro dia", "Quando alguém pedir"], correta: 0, explicacao: "Expandir multiplica o que já funciona, e também os problemas." },
        ],
      },
    ],
  },
  licoes: [
    {
      id: "9-1", titulo: "Quando é a hora de expandir", minutos: 5,
      fontes: ["amz-global-guia", "sell-es-europa-fba"],
      cards: [
        { tipo: "texto", arte: "coroa", titulo: "A Europa é grande, mas não é pra já", corpo: "A Amazon lista **27 lojas** em todo o mundo, e na Europa a Espanha é só uma das portas. Antes de abrir outra, a pergunta certa é: **o que na Espanha está funcionando que eu consigo repetir?**\n\nExpandir **multiplica** o que existe. Um produto que ganha dinheiro na Espanha pode ganhar em outro país. Uma operação desorganizada só ganha **mais bagunça**." },
        { tipo: "passos", titulo: "Sinais de que você está pronto", itens: ["O produto tem **margem confirmada** (Mundo 5) depois de todas as taxas", "O **ODR está abaixo de 1%** e a conta está saudável (Mundo 8)", "Há **estoque e fornecedor estáveis**: dá para produzir mais sem estragar a qualidade", "As **declarações de IVA** da Espanha estão em dia", "Você tem uma **rotina semanal** e alguém para ajudar nela"] },
        { tipo: "alerta", titulo: "O que a Amazon avisa", corpo: "Para cada loja nova, a Amazon sugere **checar impostos, regulamentos e requisitos de conformidade** antes de decidir o que vender, e consultar assessores fiscais, jurídicos e bancários." },
        { tipo: "texto", titulo: "Escolha o primeiro país com critério", corpo: "Não escolha pelo tamanho do país e sim pelo **menor atrito**:\n\n- **Idioma:** consegue atender e revisar a página?\n- **Logística:** o produto sai barato de onde está o estoque?\n- **Regras:** há **embalagem, resíduos ou certificações** específicas?\n- **Concorrência:** seu produto tem diferencial lá?\n\nCom o FBA, a Amazon dá **atendimento ao cliente no idioma local**. No envio próprio, você precisa contratar quem atenda." },
        { tipo: "delegar", corpo: "**Assessor fiscal (gestor):** diz se a nova venda cria obrigação de IVA. **Tradutor nativo:** revisa as páginas. **Você:** decide o país e o orçamento com base nos números." },
        { tipo: "dica", corpo: "Comece com **um** país e **poucos** produtos, os que melhor vendem na Espanha. Aprenda a rotina e só então some o próximo." },
      ],
      quiz: [
        { id: "9-1-q1", tipo: "multipla", enunciado: "Qual o melhor momento para expandir?", opcoes: ["Quando a operação na Espanha está estável e lucrativa", "Quando tudo está dando errado", "Antes de vender o primeiro item", "Nunca"], correta: 0, explicacao: "Expansão multiplica o que existe, para o bem ou para o mal." },
        { id: "9-1-q2", tipo: "vf", enunciado: "A Amazon sugere checar impostos e requisitos de conformidade antes de vender em um novo país.", correta: true, explicacao: "E consultar assessores fiscais, jurídicos e bancários." },
        { id: "9-1-q3", tipo: "multipla", enunciado: "Qual critério NÃO é bom para escolher o primeiro país?", opcoes: ["Só o tamanho do país", "Idioma e atendimento", "Custo logístico", "Regras de embalagem"], correta: 0, explicacao: "Tamanho sozinho não paga a conta; o atrito (idioma, logística, regras) pesa mais." },
        { id: "9-1-q4", tipo: "multipla", enunciado: "Quem dá o atendimento ao cliente em idioma local no FBA?", opcoes: ["A Amazon", "Você, obrigatoriamente", "O banco", "Ninguém"], correta: 0, explicacao: "No envio próprio, você contrata um prestador." },
      ],
    },
    {
      id: "9-2", titulo: "Construir listagens internacionais", minutos: 6,
      fontes: ["amz-global-guia", "sell-es-europa-fba"],
      cards: [
        { tipo: "texto", arte: "coroa", titulo: "Uma conta por loja", corpo: "A Amazon informa que **não existe conta única de vendedor**: para cada loja de destino você cria uma **nova conta de vendedor**, mesmo já vendendo em outra. A conta pode usar o e-mail da conta de cliente ou um e-mail empresarial separado.\n\nO **desempenho é medido separadamente** em cada conta. Já o **registro de marca é global**: aprovado em um país, vale em todas as lojas." },
        { tipo: "passos", titulo: "Roteiro para abrir uma loja nova", itens: ["Decidir **o que vender** e checar regras de impostos e conformidade", "Criar a **conta de vendedor** da loja", "Publicar os produtos (até 20 itens dá para manual; acima disso, **arquivos em massa**)", "Escolher **FBA ou envio próprio** e mandar o estoque", "Gerenciar tudo no **Seller Central**"] },
        { tipo: "texto", titulo: "Build International Listings", corpo: "A ferramenta (em espanhol, \"Crear listados internacionales\") **cria ofertas em outras lojas a partir de uma loja existente**. Com ela, a Amazon informa que:\n\n- os **preços são sincronizados** e ajustados pelas variações cambiais\n- você ainda pode criar listagens **separadas com preços diferentes**\n- as **avaliações** do produto são transferidas, **só no início**, até o produto receber avaliações locais", termos: [] },
        { tipo: "alerta", titulo: "Anúncio no idioma local", corpo: "Os anúncios devem estar **no idioma local**. Se o produto já tem página na loja de destino, basta **associar sua oferta**. Em páginas novas, a tradução costuma ser **automática**, mas leia com cuidado: erro de tradução vira **devolução e avaliação ruim**. Use um tradutor nativo na rede de prestadores da Amazon ou independente." },
        { tipo: "texto", titulo: "Precificar com a cabeça fria", corpo: "A Amazon recomenda considerar **frete, atendimento, conversão de moeda, impostos e taxas** ao definir preços. Nem sempre o mesmo preço da Espanha funciona: o **IVA local, a logística e a concorrência** mudam. Refaça a conta na **Oficina** para cada país." },
        { tipo: "delegar", corpo: "**Tradutor nativo:** revisa título, bullets e descrição. **Assistente virtual:** carrega os arquivos em massa e confere os preços. **Você:** aprova a margem final por país." },
      ],
      quiz: [
        { id: "9-2-q1", tipo: "vf", enunciado: "Com uma conta de vendedor espanhola, você vende automaticamente em todas as lojas.", correta: false, explicacao: "É preciso criar uma conta para cada loja de destino." },
        { id: "9-2-q2", tipo: "multipla", enunciado: "O que é global, valendo em todas as lojas?", opcoes: ["O registro de marca", "A conta de vendedor", "O desempenho", "O IVA"], correta: 0, explicacao: "Aprovada em um país, a marca pode ser usada nas outras lojas." },
        { id: "9-2-q3", tipo: "multipla", enunciado: "As avaliações do produto são transferidas para outras lojas...", opcoes: ["Só no início, até chegarem as avaliações locais", "Para sempre", "Nunca", "Só as negativas"], correta: 0, explicacao: "É um empurrão inicial." },
        { id: "9-2-q4", tipo: "multipla", enunciado: "Por que revisar a tradução automática?", opcoes: ["Erro de tradução gera devolução e avaliação ruim", "Porque é proibido traduzir", "Não precisa revisar", "Porque o IVA muda"], correta: 0, explicacao: "Use um tradutor nativo." },
        { id: "9-2-q5", tipo: "lacuna", enunciado: "A Amazon recomenda publicar manualmente até cerca de 20 produtos; acima disso, use ___.", opcoes: ["arquivos de inventário em massa", "contas extras", "só o aplicativo", "o telefone"], correta: 0, explicacao: "Arquivos em massa poupam muito tempo." },
      ],
    },
    {
      id: "9-3", titulo: "Logística e IVA por país", minutos: 8,
      fontes: ["sell-es-europa-fba", "sell-es-iva", "ue-oss", "de-verpackungsregister-online", "citeo-adhesion"],
      cards: [
        { tipo: "texto", arte: "coroa", titulo: "Três jeitos de entregar na Europa", corpo: "1. **Envio próprio (FBM):** você manda do seu estoque. Mais controle, mais custo e mais tempo.\n2. **EFN:** estoque **só local**; a Amazon entrega localmente ou envia a outros países, pagando a **tarifa transfronteiriça**.\n3. **Pan-EU:** a Amazon **distribui o estoque pelos países ativados**, sem custo adicional, e você paga a **tarifa local** onde armazena.\n\nA Amazon cita **até 53% de economia** nas tarifas de logística e até 24% de aumento de vendas, mas a própria Amazon diz que são dados de um estudo de 2023 e **sem garantia**.", termos: ["pan-eu"] },
        { tipo: "passos", titulo: "O que o Pan-EU pede", itens: ["Publicar com o **mesmo SKU/FNSKU** nas lojas obrigatórias: **Alemanha, França, Itália, Espanha e Países Baixos**", "Ativar armazenamento em **pelo menos dois países** (Alemanha, França, Itália, Espanha ou Polônia)", "Garantir que os produtos são **elegíveis**", "**Cumprir as obrigações de IVA**", "Enviar o estoque a um centro logístico da UE", "Na Alemanha e na França: cumprir a **responsabilidade estendida do produtor (EPR)**"] },
        { tipo: "alerta", titulo: "Datas que a página da Amazon cita", corpo: "**3 de setembro de 2026:** todos os produtos do Pan-EU devem ter oferta ativa nos **Países Baixos**. **26 de fevereiro de 2027:** o mesmo para a **Bélgica**, com aviso de pelo menos 30 dias. Regras do programa mudam: **releia a página oficial** antes de se inscrever." },
        { tipo: "texto", titulo: "IVA: onde há estoque, há número de IVA", corpo: "Para o Pan-EU, é necessário **um número de IVA para cada país onde a mercadoria fica armazenada**. Em geral não é preciso número de IVA no país de destino do cliente.\n\nPara vender de um país a consumidores de outro **sem estoque lá**, o regime é o das **vendas à distância**, e o [[oss]] permite declarar tudo numa só declaração trimestral no país de identificação.", termos: ["oss", "iva"] },
        { tipo: "alerta", titulo: "Atenção: duas fontes, números diferentes", corpo: "A página de IVA da Amazon.es ainda mostra **limites por país** para vendas à distância (por exemplo 100.000 € para a Alemanha, 35.000 € para França e Itália). A página oficial da UE sobre o OSS fala em **um limite único de 10.000 €** para fornecedores estabelecidos em um só Estado-Membro, desde 1º de julho de 2021.\n\nPara decidir, **siga a regra da UE e confirme com o seu gestor**. A própria Amazon diz que a obrigação depende do país sede, do local do estoque e do volume de vendas." },
        { tipo: "texto", titulo: "Embalagens: Alemanha e França", corpo: "**Alemanha:** quem envia embalagens diretamente a consumidores alemães é, no mínimo, **fabricante e produtor** da embalagem de envio, esteja onde estiver. As etapas são **registro no LUCID**, **contrato com um sistema dual** e **declaração dos volumes**. Estrangeiros sem sede na Alemanha precisam de **representante autorizado**. Os marketplaces devem checar o registro antes de permitir a venda.\n\n**França:** quem coloca no mercado produtos embalados vendidos a consumidores deve **aderir a uma organização de responsabilidade estendida**. Sem identificador (UIN), o marketplace pode **declarar e cobrar uma taxa por pedido**. A multa por não aderir pode chegar a **7.500 € por tonelada ou unidade**, segundo a Citeo.", termos: ["epr"] },
        { tipo: "delegar", corpo: "**Gestor/representante fiscal:** números de IVA, OSS e declarações por país. **Serviço de EPR (alemão e francês):** LUCID, sistema dual, adesão e declarações. **Você:** decide em quais países ativar estoque conforme o custo e a margem." },
      ],
      quiz: [
        { id: "9-3-q1", tipo: "multipla", enunciado: "Qual a diferença entre Pan-EU e EFN?", opcoes: ["No Pan-EU a Amazon distribui o estoque pelos países ativados; no EFN fica só local", "São iguais", "O EFN é só para livros", "O Pan-EU é gratuito"], correta: 0, explicacao: "Os dois usam a rede da Amazon, com logística de estoque diferente." },
        { id: "9-3-q2", tipo: "multipla", enunciado: "Em que países o Pan-EU exige publicar?", opcoes: ["Alemanha, França, Itália, Espanha e Países Baixos", "Só Espanha", "Todos os países da UE", "Só Reino Unido"], correta: 0, explicacao: "Mais armazenamento em pelo menos dois países." },
        { id: "9-3-q3", tipo: "multipla", enunciado: "Onde é necessário número de IVA no Pan-EU?", opcoes: ["Em cada país onde a mercadoria fica armazenada", "Só na Espanha", "Em nenhum país", "Só onde mora o cliente"], correta: 0, explicacao: "Em geral não é preciso no país de destino." },
        { id: "9-3-q4", tipo: "multipla", enunciado: "Qual a regra única do OSS para vendas à distância na UE (fornecedor em um só Estado-Membro)?", opcoes: ["10.000 € por ano, sem IVA", "35.000 € por país", "100.000 € por país", "Não há limite"], correta: 0, explicacao: "Quando as páginas divergem, siga a UE e confirme com o gestor." },
        { id: "9-3-q5", tipo: "vf", enunciado: "Na Alemanha, vendedor estrangeiro que envia direto a consumidores pode ignorar o LUCID.", correta: false, explicacao: "Ele é, no mínimo, fabricante e produtor da embalagem de envio." },
        { id: "9-3-q6", tipo: "multipla", enunciado: "O que pode acontecer na França sem número identificador de EPR?", opcoes: ["O marketplace pode declarar por você e cobrar uma taxa por pedido", "Nada", "A Amazon paga", "O produto fica grátis"], correta: 0, explicacao: "Melhor aderir e informar o identificador aos marketplaces." },
      ],
    },
    {
      id: "9-4", titulo: "Os mercados europeus, um a um", minutos: 7,
      fontes: ["sell-es-europa-fba", "amz-global-guia", "gov-uk-iva-overseas", "sell-es-iva"],
      cards: [
        { tipo: "texto", arte: "coroa", titulo: "O mapa do Pan-EU", corpo: "Segundo a Amazon.es, o Pan-EU cobre **Alemanha, França, Itália, Espanha, Países Baixos, Polônia, Suécia, Bélgica e Irlanda**. **Suécia, Irlanda e Polônia** são lojas opcionais. Para tarifas nacionais na Suécia e nos Países Baixos, é preciso ativar a **Alemanha**; para a Bélgica, a **Alemanha ou a França**." },
        { tipo: "comparacao", titulo: "Visão geral dos primeiros mercados", colunas: ["Alemanha", "França", "Itália"], rotuloLinhas: "Ponto de atenção", linhas: [["Idioma", "Alemão", "Francês", "Italiano"], ["Pan-EU", "Obrigatória no Pan-EU", "Obrigatória no Pan-EU", "Obrigatória no Pan-EU"], ["Embalagens", "LUCID e sistema dual", "Adesão a organização de EPR", "Confirme regras com o gestor"], ["O que checar", "Representante autorizado, se sem sede", "UIN para o marketplace", "Número de IVA se houver estoque"]], nota: "Quadro resumido do que foi confirmado em fontes oficiais. Preços, categorias e concorrência por país variam: pesquise antes de decidir." },
        { tipo: "texto", titulo: "Países Baixos, Polônia, Suécia, Bélgica", corpo: "Os **Países Baixos** são loja obrigatória do Pan-EU e a **Bélgica** passa a ser obrigatória segundo a data informada pela Amazon (confira na página). **Polônia** é um país onde o armazenamento pode ser ativado e também loja opcional. **Suécia e Irlanda** são lojas opcionais.\n\nCada país tem **IVA e regras de embalagem próprios**. Antes de ativar, peça ao gestor um checklist **do país**." },
        { tipo: "texto", titulo: "Reino Unido: outro universo", corpo: "O Reino Unido **deixou o Pan-EU em 1º de janeiro de 2021**. Segundo a HMRC, remessas de até **£135** de fora do Reino Unido pagam o **IVA britânico na venda** (o vendedor cobra e declara, o que exige **registro de IVA**). Acima de £135, valem as **regras normais de importação**. Bens que você já tem no Reino Unido exigem **registro e IVA** nas vendas diretas.\n\nA Amazon.es cita ainda limites próprios do Reino Unido (por exemplo £85.000 nacional e £70.000 para vendas de outro país da UE). Como as regras mudam, **confirme com o gestor** antes de vender lá." },
        { tipo: "alerta", corpo: "Este curso **não dá preços, comissões ou ranking por país** que não pôde confirmar em fonte oficial. Antes de escolher o 2º mercado, use o **Product Opportunity Explorer** da Amazon e uma **pesquisa de palavras-chave** na loja do país." },
        { tipo: "delegar", corpo: "**Tradutor/analista de mercado local:** pesquisa a concorrência e as palavras-chave no idioma. **Gestor fiscal:** IVA e embalagem por país. **Você:** escolhe o 2º mercado com base na margem calculada na Oficina." },
      ],
      quiz: [
        { id: "9-4-q1", tipo: "multipla", enunciado: "Quais são lojas opcionais do Pan-EU segundo a Amazon.es?", opcoes: ["Suécia, Irlanda e Polônia", "Alemanha e França", "Espanha e Itália", "Todas"], correta: 0, explicacao: "Alemanha, França, Itália, Espanha e Países Baixos são as obrigatórias." },
        { id: "9-4-q2", tipo: "vf", enunciado: "O Reino Unido faz parte do Pan-EU.", correta: false, explicacao: "Saiu em 1º de janeiro de 2021." },
        { id: "9-4-q3", tipo: "multipla", enunciado: "Segundo a HMRC, para remessas de até £135 de fora do Reino Unido, quem cobra o IVA britânico?", opcoes: ["O vendedor, no momento da venda", "O cliente na entrega, sempre", "Ninguém", "A transportadora"], correta: 0, explicacao: "Isso exige registro de IVA do vendedor, salvo vendas B2B com número britânico." },
        { id: "9-4-q4", tipo: "multipla", enunciado: "Qual a melhor forma de escolher o 2º mercado?", opcoes: ["Pesquisar demanda e concorrência no país e calcular a margem local", "Escolher o maior país", "Sorteio", "Copiar um amigo"], correta: 0, explicacao: "Dados e margem, não palpite." },
      ],
    },
    {
      id: "9-5", titulo: "Escalar e, quem sabe, vender o negócio", minutos: 6,
      fontes: ["amz-global-guia"],
      cards: [
        { tipo: "texto", arte: "coroa", titulo: "Escalar é ganhar sem se afogar", corpo: "Crescer não é só vender mais: é **vender mais sem perder o controle**. Quatro alavancas:\n\n1. **Mais produtos** que complementam os que já vendem\n2. **Mais países**, um de cada vez\n3. **Mais canais** (site próprio, outros marketplaces, B2B)\n4. **Menos você** na operação: rotinas escritas e pessoas de confiança\n\nA Amazon sugere publicar uma **seleção ampla do catálogo** nas novas lojas e remover o que não vende." },
        { tipo: "passos", titulo: "Ordem segura para crescer", itens: ["**Estabilize** a Espanha: margem, conta saudável e IVA em dia", "**Documente** a rotina para outra pessoa conseguir fazer", "Abra **um país novo** com poucos produtos", "Meça **margem real** por país depois de 60 a 90 dias", "Só então **adicione produtos ou países**"] },
        { tipo: "texto", titulo: "Marca forte vale mais", corpo: "Quem tem **marca própria registrada**, páginas bem feitas, boas avaliações e **contas organizadas** constrói um ativo que dá para **proteger e, se quiser, vender**. Sem marca e sem documentação, o negócio depende só de você.\n\nO registro de marca é **global na Amazon**: vale em todas as lojas onde você entrar." },
        { tipo: "alerta", titulo: "Sobre vender o negócio", corpo: "Compradores olham **lucro real, contas limpas, marca registrada, fornecedores estáveis e dependência do dono**. Não há aqui uma regra de preço confiável (os múltiplos variam muito), então **não aposte em número que alguém te prometeu**. Para avaliar e negociar, use um **advogado e um contador**." },
        { tipo: "delegar", corpo: "**Contador:** demonstrativos limpos por país. **Advogado:** contratos de fornecimento e de marca. **Gerente de operações:** assume a rotina. **Você:** estratégia, produto e as grandes decisões." },
        { tipo: "dica", corpo: "Você começou do zero. Cada mundo foi um **degrau**. Agora volte à **Oficina** e aos **Missões da Vida Real** e transforme o que aprendeu em ação." },
      ],
      quiz: [
        { id: "9-5-q1", tipo: "multipla", enunciado: "Qual a ordem segura para crescer?", opcoes: ["Estabilizar, documentar, abrir um país novo, medir e só então expandir", "Abrir todos os países ao mesmo tempo", "Parar de olhar os números", "Esperar sorte"], correta: 0, explicacao: "Passos curtos com medição." },
        { id: "9-5-q2", tipo: "vf", enunciado: "Existe uma regra fixa e confiável de quantas vezes o lucro vale um negócio de Amazon.", correta: false, explicacao: "Os múltiplos variam muito. Use contador e advogado." },
        { id: "9-5-q3", tipo: "multipla", enunciado: "O que torna o negócio mais vendável?", opcoes: ["Marca registrada, contas limpas e pouca dependência do dono", "Segredo absoluto", "Ter muitas contas", "Não ter documentação"], correta: 0, explicacao: "Organização e marca formam o ativo." },
        { id: "9-5-q4", tipo: "multipla", enunciado: "Quem decide as grandes escolhas de produto e estratégia?", opcoes: ["Você", "A fábrica", "O cliente", "Ninguém"], correta: 0, explicacao: "Delegue operação, guarde a estratégia." },
      ],
    },
  ],
};

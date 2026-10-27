// Mundo 4 (es). Gerado por tools/i18n-mundos.mjs a partir de js/content/world4.js.
export default {
 "id": 4,
 "chefe": {
  "id": "capitao-container",
  "nome": "Capitán Contenedor",
  "hp": 100,
  "fala": "¡Ahoy! Tu lote está atascado en el puerto sin papeles. ¡Responde bien o te quedas anclado!",
  "derrota": "Has navegado bien. La carga sigue hacia el almacén.",
  "perguntas": [
   {
    "id": "b4-1",
    "tipo": "multipla",
    "licaoRef": "4-1",
    "enunciado": "¿Qué es lo primero que hay que comprobar de un proveedor nuevo?",
    "opcoes": [
     "Si es fábrica o intermediario, y si la empresa existe de verdad (registro, dirección, referencias)",
     "Si el logotipo es bonito",
     "Si responde rápido a los mensajes",
     "Si tiene el precio más bajo"
    ],
    "correta": 0,
    "explicacao": "Un precio bajo y una respuesta rápida no demuestran nada. Empieza por la existencia y la capacidad reales."
   },
   {
    "id": "b4-2",
    "tipo": "vf",
    "licaoRef": "4-2",
    "enunciado": "Pedir una muestra es opcional cuando el proveedor tiene buenas fotos.",
    "correta": false,
    "explicacao": "Una foto no muestra el material, el acabado ni las medidas. La muestra es tu primer control de calidad."
   },
   {
    "id": "b4-3",
    "tipo": "multipla",
    "licaoRef": "4-2",
    "enunciado": "¿Para qué sirve una inspección de terceros antes del embarque?",
    "opcoes": [
     "Para comprobar el lote frente a la especificación acordada antes de pagar el saldo y embarcar",
     "Para pagar menos impuestos",
     "Para registrar la marca",
     "Para no tener que firmar contrato"
    ],
    "correta": 0,
    "explicacao": "Inspeccionar antes del embarque es más barato que descubrir el defecto cuando el stock ya ha llegado."
   },
   {
    "id": "b4-4",
    "tipo": "multipla",
    "licaoRef": "4-3",
    "enunciado": "En el Incoterm EXW, ¿quién se ocupa del transporte y del despacho de exportación?",
    "opcoes": [
     "El vendedor, por completo",
     "El comprador",
     "Amazon",
     "El banco"
    ],
    "correta": 1,
    "explicacao": "En EXW el vendedor solo pone la mercancía a disposición en sus instalaciones. El comprador asume el transporte y los trámites de exportación."
   },
   {
    "id": "b4-5",
    "tipo": "multipla",
    "licaoRef": "4-3",
    "enunciado": "¿Por qué el artículo de la ICC sugiere FCA en lugar de EXW y DAP en lugar de DDP cuando es posible?",
    "opcoes": [
     "Porque siempre son más baratos",
     "Porque reducen las dificultades del despacho de exportación o importación",
     "Porque eliminan impuestos",
     "Porque no requieren transporte"
    ],
    "correta": 1,
    "explicacao": "FCA evita que el comprador tenga que despachar la exportación en el país del vendedor, y DAP evita que el vendedor tenga que despachar la importación."
   },
   {
    "id": "b4-6",
    "tipo": "multipla",
    "licaoRef": "4-4",
    "enunciado": "A la hora de importar, ¿qué función tiene el TARIC?",
    "opcoes": [
     "Registrar marcas",
     "Consultar la clasificación de la mercancía, los aranceles, el IVA de importación y otras medidas aplicables",
     "Abrir una cuenta de vendedor",
     "Pagar el flete"
    ],
    "correta": 1,
    "explicacao": "El TARIC reúne el arancel aduanero común de la UE y las medidas de política comercial por mercancía."
   },
   {
    "id": "b4-7",
    "tipo": "multipla",
    "licaoRef": "4-4",
    "enunciado": "Según la Agencia Tributaria, la base imponible del IVA en la importación parte de...",
    "opcoes": [
     "Solo el precio de fábrica",
     "El valor en aduana más aranceles y otros gravámenes, y los gastos hasta el primer destino en la UE",
     "El precio de venta en Amazon",
     "El beneficio"
    ],
    "correta": 1,
    "explicacao": "Valor en aduana + aranceles y gravámenes (salvo el propio IVA) + gastos accesorios hasta el primer destino dentro de la UE."
   },
   {
    "id": "b4-8",
    "tipo": "multipla",
    "licaoRef": "4-4",
    "enunciado": "Valor en aduana 5.650 €, arancel de importación hipotético del 3 % (169,50 €) y transporte hasta el almacén de 150 €. ¿Cuál es el IVA de importación al 21 %?",
    "opcoes": [
     "1.186,50 €",
     "1.253,60 €",
     "1.300,00 €",
     "1.000,00 €"
    ],
    "correta": 1,
    "explicacao": "Base = 5.650 + 169,50 + 150 = 5.969,50. IVA = 21 % de 5.969,50 = 1.253,60 €."
   },
   {
    "id": "b4-9",
    "tipo": "vf",
    "licaoRef": "4-4",
    "enunciado": "Amazon indica que sus centros logísticos pueden ser el importador registrado de tus entradas desde fuera de la UE.",
    "correta": false,
    "explicacao": "Amazon.es indica que los centros logísticos no pueden ser el importador registrado."
   },
   {
    "id": "b4-10",
    "tipo": "multipla",
    "licaoRef": "4-5",
    "enunciado": "¿Cuál es la nueva longitud máxima de caja estándar para nuevos envíos a FBA en España, según el anuncio oficial?",
    "opcoes": [
     "40 cm",
     "63,5 cm",
     "91,4 cm",
     "120 cm"
    ],
    "correta": 1,
    "explicacao": "La longitud máxima se redujo de 91,4 cm a 63,5 cm. Los envíos fuera de norma pueden rechazarse o generar tarifas."
   },
   {
    "id": "b4-11",
    "tipo": "ordenar",
    "licaoRef": "4-5",
    "enunciado": "Ordena el recorrido del lote hasta estar disponible para la venta en FBA:",
    "opcoes": [
     "La fábrica produce y etiqueta según la especificación",
     "Inspección antes del embarque",
     "Transporte y despacho en la UE",
     "Entrega en el centro logístico de Amazon y recepción"
    ],
    "explicacao": "Producción, inspección, transporte y despacho, entrega y recepción."
   }
  ]
 },
 "licoes": [
  {
   "id": "4-1",
   "titulo": "Dónde encontrar proveedores",
   "minutos": 6,
   "fontes": [
    "sell-es-vender-online"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "mercado",
     "titulo": "El mercado es grande, y la trampa también",
     "corpo": "Para marca propia, la mayoría de los vendedores compra a **fábricas en Asia**, pero también hay proveedores en **Europa** (Portugal, Turquía, España y otros). Cada región cambia **precio, plazo, calidad y papeleo**.\n\nRegla del Mercado de los Proveedores: **quien compra más barato sin verificar acaba pagando más caro**."
    },
    {
     "tipo": "comparacao",
     "titulo": "Dónde buscar",
     "colunas": [
      "Ventaja",
      "Cuidado"
     ],
     "linhas": [
      [
       "Plataformas B2B en línea (Alibaba, Made-in-China, Global Sources y similares)",
       "Muchos proveedores, comparación rápida",
       "Hay intermediarios y perfiles flojos: compruébalo todo"
      ],
      [
       "Ferias comerciales (presenciales)",
       "Ves el producto, la fábrica y a la persona",
       "Coste de viaje y tiempo"
      ],
      [
       "Agente de sourcing",
       "Conoce fábricas, negocia y hace seguimiento",
       "Comisión; elige un agente con referencias"
      ],
      [
       "Fabricantes europeos",
       "Plazo corto, sin aduana, comunicación fácil",
       "Coste unitario normalmente mayor"
      ]
     ],
     "nota": "Comparación cualitativa. Los nombres de plataformas son ejemplos y no recomendaciones."
    },
    {
     "tipo": "passos",
     "titulo": "Cómo verificar a un proveedor",
     "itens": [
      "Pedir el **registro de la empresa** y la dirección de la fábrica; comprobar que coinciden",
      "Preguntar si es **fábrica** o **empresa comercial** (intermediaria)",
      "Pedir **referencias** y fotos/vídeos de la línea de producción",
      "Hacer una **videollamada** con la fábrica",
      "Pedir los **certificados** que exige tu producto (CE, ensayos), con número y fecha",
      "Empezar con un **pedido pequeño** y un pago con protección"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Señales de alerta",
     "corpo": "- Precio **muy por debajo** de todos los demás\n- Se niega a hacer videollamada o a enviar documentos\n- Pide el pago íntegro por adelantado a la cuenta de una **persona física**\n- Cuenta bancaria a nombre distinto del de la empresa\n- Certificados genéricos, sin número o con fechas raras\n\nCualquiera de estas es motivo para pararse, y dos juntas, para irse."
    },
    {
     "tipo": "delegar",
     "titulo": "Quién lo hace por ti",
     "corpo": "**Agente de sourcing:** busca, filtra, visita y negocia. **Tú:** decides y pagas con seguridad (preferiblemente de cuenta de empresa a cuenta de empresa, con contrato). **Abogado o gestoría:** revisan el contrato de compra si el importe es alto.",
     "termos": []
    },
    {
     "tipo": "dica",
     "corpo": "Pide presupuesto a **3 a 5 proveedores** y compara **especificación por especificación**, no solo el precio. El presupuesto más barato suele tener otro material u otro acabado."
    }
   ],
   "quiz": [
    {
     "id": "4-1-q1",
     "tipo": "multipla",
     "enunciado": "¿Cuál es la pregunta más importante en la primera conversación con un proveedor?",
     "opcoes": [
      "¿Es fábrica o intermediario, y cuál es su capacidad real?",
      "¿Cuál es tu descuento máximo?",
      "¿Tienes logotipo?",
      "¿Cuántos años tiene el dueño?"
     ],
     "correta": 0,
     "explicacao": "Saber con quién hablas cambia el precio, el plazo y el control de calidad."
    },
    {
     "id": "4-1-q2",
     "tipo": "vf",
     "enunciado": "El proveedor con el precio más bajo es siempre la mejor opción.",
     "correta": false,
     "explicacao": "Un precio muy bajo suele esconder una especificación inferior o una estafa."
    },
    {
     "id": "4-1-q3",
     "tipo": "multipla",
     "enunciado": "¿Cuál de estas es una señal de alerta?",
     "opcoes": [
      "Acepta videollamada",
      "Pide el pago total por adelantado a la cuenta de una persona física",
      "Envía certificados con número",
      "Tiene una dirección de fábrica verificable"
     ],
     "correta": 1,
     "explicacao": "Una cuenta personal y el pago total por adelantado son señales típicas de estafa."
    },
    {
     "id": "4-1-q4",
     "tipo": "multipla",
     "enunciado": "¿Cuál es la ventaja principal de los fabricantes europeos?",
     "opcoes": [
      "Siempre más baratos",
      "Plazo corto y sin aduana de entrada",
      "Sin contrato",
      "Sin control de calidad"
     ],
     "correta": 1,
     "explicacao": "Dentro de la UE no hay despacho de importación y el plazo suele ser menor, aunque el coste unitario puede ser mayor."
    }
   ]
  },
  {
   "id": "4-2",
   "titulo": "Muestras, MOQ, contrato e inspección",
   "minutos": 7,
   "fontes": [
    "ue-ce",
    "ue-gpsr-faq",
    "sell-es-fba"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "El orden correcto: muestra, después pedido, después inspección",
     "corpo": "El error clásico es encargar miles de unidades de un producto que nunca has tenido en las manos. El camino seguro:\n\n1. **Muestra** de cada finalista\n2. **Prueba** de las muestras (úsalas, ábrelas, mídelas, pésalas, dóblalas)\n3. **Pedido piloto** (pequeño)\n4. **Inspección** antes del embarque\n5. **Pedido mayor**, solo después de que el piloto se venda"
    },
    {
     "tipo": "texto",
     "titulo": "MOQ: cantidad mínima de pedido",
     "corpo": "El **MOQ** (minimum order quantity) es el lote más pequeño que acepta la fábrica. **Varía mucho** según el producto y la fábrica y casi siempre es **negociable**, sobre todo si aceptas menos personalización.\n\nEl MOQ define el **capital que pones en riesgo**. Haz la cuenta de tu primera compra con el margen calculado en el Mundo 5 y acepta solo un MOQ que soportarías perder.",
     "termos": []
    },
    {
     "tipo": "passos",
     "titulo": "Lo que debe decir el contrato o pedido",
     "itens": [
      "**Especificación** completa: material, medidas, color, peso, acabado",
      "**Muestra aprobada** como patrón (con firma y foto)",
      "**Embalaje y etiqueta**: qué lleva la caja de cada unidad",
      "**Plazo** de producción y de entrega, con penalización por retraso si es posible",
      "**Condiciones de pago** y cuándo se libera el saldo",
      "**Documentos**: declaración de conformidad, informes de ensayo, factura comercial",
      "**Propiedad intelectual**: la marca y el diseño son tuyos, y la fábrica no los vende a otros"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Lo que la UE exige a tu producto",
     "corpo": "Quien vende con marca propia es **el fabricante a efectos legales** (Mundo 2). Por eso el pedido debe incluir:\n\n- **Marcado CE** y declaración UE de conformidad, cuando el producto lo exija (la documentación debe guardarse al menos 10 años)\n- **Información del GPSR** en el propio producto: nombre y marca del fabricante, dirección postal y electrónica y, si es de fuera de la UE, los datos de la persona responsable en la UE\n- **Etiqueta de código de barras** correcta del producto"
    },
    {
     "tipo": "texto",
     "titulo": "Inspección: comprobar antes de embarcar",
     "corpo": "Las empresas de **inspección de terceros** visitan la fábrica y comprueban una **muestra del lote** frente a tu especificación. Cuando el lote está listo, **antes** de pagar el saldo y embarcar.\n\nEs un coste pequeño comparado con el de un stock defectuoso. Defines el criterio de aceptación (cuántos defectos se toleran) y te entregan un **informe con fotos**.",
     "termos": []
    },
    {
     "tipo": "delegar",
     "corpo": "**Agente de sourcing:** gestiona las muestras y la negociación. **Empresa de inspección:** audita el lote. **Laboratorio:** ensayos de seguridad cuando se exijan. **Abogado:** revisa contratos de importe alto. **Tú:** apruebas la muestra final y liberas el pago."
    },
    {
     "tipo": "dica",
     "corpo": "Guarda **todo por escrito**: especificación, muestra aprobada (con foto), conversaciones e informes. Si hay una disputa con la fábrica, lo que cuenta son las pruebas."
    }
   ],
   "quiz": [
    {
     "id": "4-2-q1",
     "tipo": "ordenar",
     "enunciado": "Ordena el camino seguro de compra:",
     "opcoes": [
      "Pedir y probar muestras",
      "Hacer un pedido piloto pequeño",
      "Inspeccionar el lote antes del embarque",
      "Hacer un pedido mayor después de vender el piloto"
     ],
     "explicacao": "Muestra, piloto, inspección y solo después escala."
    },
    {
     "id": "4-2-q2",
     "tipo": "multipla",
     "enunciado": "¿Qué es el MOQ?",
     "opcoes": [
      "Un impuesto de importación",
      "La cantidad mínima de pedido de la fábrica",
      "Un código de barras",
      "Una tarifa de Amazon"
     ],
     "correta": 1,
     "explicacao": "El MOQ es el lote más pequeño que la fábrica acepta producir o vender."
    },
    {
     "id": "4-2-q3",
     "tipo": "vf",
     "enunciado": "El MOQ siempre es fijo y no se puede negociar.",
     "correta": false,
     "explicacao": "Muchas veces es negociable, sobre todo con menos personalización."
    },
    {
     "id": "4-2-q4",
     "tipo": "multipla",
     "enunciado": "¿Cuándo se hace la inspección de terceros?",
     "opcoes": [
      "Después de que el stock llegue al almacén",
      "Antes del embarque y del pago del saldo",
      "Antes de pedir la muestra",
      "Nunca"
     ],
     "correta": 1,
     "explicacao": "La inspección debe hacerse con el lote listo, antes de liberar el saldo y el embarque."
    },
    {
     "id": "4-2-q5",
     "tipo": "multipla",
     "enunciado": "Quien vende con marca propia fabricada por una fábrica debe exigir en el pedido...",
     "opcoes": [
      "Solo el precio",
      "Declaración de conformidad, informes de ensayo y los datos que exige el GPSR cuando corresponda",
      "Nada",
      "Solo la factura"
     ],
     "correta": 1,
     "explicacao": "Eres el fabricante a efectos legales. La documentación tiene que existir y guardarse."
    }
   ]
  },
  {
   "id": "4-3",
   "titulo": "Flete e Incoterms",
   "minutos": 7,
   "fontes": [
    "icc-incoterms",
    "icc-exw-ddp",
    "tradegov-incoterms",
    "sell-es-fba"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Cuánto cuesta y cuánto tarda",
     "corpo": "La mercancía viaja por **mar, aire, tren o mensajería urgente**. La regla cualitativa vale para cualquier ruta:\n\n- **Marítimo:** el más barato por unidad, y el más lento\n- **Aéreo:** rápido y caro, bueno para urgencias o productos de alto valor y poco peso\n- **Ferroviario:** intermedio en plazo y coste, cuando está disponible\n- **Urgente:** práctico para muestras y lotes pequeños, poco económico para volumen\n\nLos plazos y precios **cambian cada semana**. Pide siempre presupuesto a un **transitario (freight forwarder)** en el momento del pedido."
    },
    {
     "tipo": "texto",
     "titulo": "Incoterms: quién hace qué",
     "corpo": "Los **Incoterms** son reglas de la ICC (Cámara de Comercio Internacional) que definen **responsabilidades, costes y riesgos** entre vendedor y comprador. Los Incoterms 2020 tienen **11 reglas**: siete para cualquier modo de transporte (**EXW, FCA, CPT, CIP, DAP, DPU, DDP**) y cuatro solo para transporte marítimo (**FAS, FOB, CFR, CIF**).\n\n**No** definen el precio, la forma de pago, la transmisión de la propiedad ni los documentos del despacho en el país del comprador: eso va en el contrato.",
     "termos": [
      "incoterm"
     ]
    },
    {
     "tipo": "comparacao",
     "titulo": "Los dos extremos",
     "colunas": [
      "EXW",
      "DDP"
     ],
     "linhas": [
      [
       "Vendedor",
       "Solo pone la mercancía a disposición en la fábrica o el almacén",
       "Entrega en el destino acordado, asumiendo transporte, costes y riesgos hasta allí"
      ],
      [
       "Comprador",
       "Carga, transporta y asume costes y riesgos desde la fábrica",
       "Solo descarga el último vehículo"
      ],
      [
       "Despacho",
       "El comprador se ocupa de la exportación y la importación",
       "El vendedor se ocupa de la exportación y la importación"
      ],
      [
       "El riesgo pasa al comprador",
       "Cuando la mercancía se pone a disposición en la fábrica",
       "Al llegar al destino"
      ]
     ],
     "nota": "Según la ICC. El artículo sugiere FCA en lugar de EXW y DAP en lugar de DDP cuando sea posible, para reducir dificultades de despacho."
    },
    {
     "tipo": "texto",
     "titulo": "Qué significa esto en la práctica",
     "corpo": "- **FOB** (solo marítimo): el vendedor entrega la mercancía a bordo en el puerto de origen y, a partir de ahí, el comprador asume el transporte principal y los riesgos.\n- **CIF** (solo marítimo): el vendedor paga el flete hasta el puerto de destino y un seguro básico; el seguro estándar es el nivel \"C\" de las Institute Cargo Clauses.\n- **EXW:** parece barato, pero **tú** tienes que contratar la exportación en China. Para quien empieza, es el más arriesgado.\n- **DDP:** parece cómodo, pero es difícil en la práctica, porque algunos países prohíben que empresas extranjeras hagan el despacho de importación.\n\nPara un primer lote, muchos importadores usan **FOB o FCA** con un transitario."
    },
    {
     "tipo": "alerta",
     "titulo": "El flete tiene que entrar en la cuenta",
     "corpo": "El flete, el seguro, el despacho y el transporte interior hasta el almacén **forman parte del coste del producto**. Sin ellos, el margen del Mundo 5 es una ilusión. Pide al transitario un presupuesto **puerta a puerta** (de la fábrica al almacén) con **todas las líneas**."
    },
    {
     "tipo": "delegar",
     "corpo": "**Transitario (forwarder):** presupuesta, reserva y sigue la carga. **Agente de aduanas:** presenta la declaración de importación en la UE (lección 4-4). **Aseguradora o el propio transitario:** seguro de la carga. **Amazon:** el programa de transportista asociado y Amazon Global Logistics pueden ayudar con las entradas a FBA."
    },
    {
     "tipo": "dica",
     "corpo": "Pide presupuesto a **dos o tres transitarios** y compara la **suma de todo**, no solo la línea del flete."
    }
   ],
   "quiz": [
    {
     "id": "4-3-q1",
     "tipo": "multipla",
     "enunciado": "¿Cuántas reglas tienen los Incoterms 2020?",
     "opcoes": [
      "5",
      "8",
      "11",
      "20"
     ],
     "correta": 2,
     "explicacao": "Son 11: siete para cualquier modo de transporte y cuatro para transporte marítimo."
    },
    {
     "id": "4-3-q2",
     "tipo": "multipla",
     "enunciado": "En EXW, ¿quién se ocupa de la exportación?",
     "opcoes": [
      "El vendedor",
      "El comprador",
      "Amazon",
      "Nadie"
     ],
     "correta": 1,
     "explicacao": "En EXW el comprador asume los trámites de exportación e importación."
    },
    {
     "id": "4-3-q3",
     "tipo": "multipla",
     "enunciado": "¿Qué modo de transporte suele ser el más barato por unidad y el más lento?",
     "opcoes": [
      "Aéreo",
      "Marítimo",
      "Urgente",
      "Dron"
     ],
     "correta": 1,
     "explicacao": "El marítimo es el más económico para volumen y el que más tarda."
    },
    {
     "id": "4-3-q4",
     "tipo": "vf",
     "enunciado": "Los Incoterms definen la forma de pago y el precio de la mercancía.",
     "correta": false,
     "explicacao": "Los Incoterms tratan de la entrega, los costes y los riesgos. El precio y el pago van en el contrato."
    },
    {
     "id": "4-3-q5",
     "tipo": "multipla",
     "enunciado": "¿Qué debe entrar en el coste del producto además del precio de fábrica?",
     "opcoes": [
      "Nada",
      "Flete, seguro, despacho y transporte hasta el almacén",
      "Solo el flete marítimo",
      "Solo el IVA"
     ],
     "correta": 1,
     "explicacao": "Todo lo necesario hasta que el producto está en el almacén forma parte del coste."
    }
   ]
  },
  {
   "id": "4-4",
   "titulo": "Aduana de la UE: TARIC, DUA e IVA de importación",
   "minutos": 8,
   "fontes": [
    "aeat-taric",
    "aeat-taric-consulta",
    "aeat-iva-importacion",
    "aeat-eori",
    "ue-baja-cuantia",
    "sell-es-registro"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Ha llegado a la frontera de la UE",
     "corpo": "La mercancía que viene de fuera de la UE debe **declararse en aduana** para entrar. La declaración (en España, el **DUA**) indica qué es el producto, de dónde viene, cuánto vale y a qué aranceles está sujeto.\n\nEl **EORI** (Mundo 2) es obligatorio antes de presentar una declaración aduanera.",
     "termos": [
      "eori"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "TARIC: el mapa arancelario",
     "corpo": "El **TARIC** es la norma que reúne el **arancel aduanero común de la UE** y otras medidas. Según la Agencia Tributaria, permite conocer los **aranceles y el IVA de importación** aplicables a una mercancía, además de las medidas de política comercial.\n\nEl arancel se basa en la **Nomenclatura Combinada**, que se actualiza cada año. Cada producto tiene un **código de clasificación**. Un código equivocado cambia el arancel y los requisitos, y puede acarrear multas. La Agencia Tributaria ofrece una consulta pública del TARIC en su web.",
     "termos": [
      "taric"
     ]
    },
    {
     "tipo": "passos",
     "titulo": "Cómo funciona el despacho",
     "itens": [
      "Se define el **código del producto** (TARIC)",
      "El **declarante** (tú o tu agente de aduanas) presenta el **DUA** con valor, origen y documentos (factura comercial, packing list, conocimiento de embarque)",
      "La aduana libera la mercancía **o** pide una inspección o documentos",
      "Pagas los **aranceles de importación y el IVA de importación**",
      "La carga sigue hacia el almacén"
     ],
     "termos": [
      "dua"
     ]
    },
    {
     "tipo": "calculo",
     "titulo": "Ejemplo hipotético: lote de 5.000 € procedente de fuera de la UE",
     "corpo": "El porcentaje del arancel (3 %) es **hipotético**: el real sale del TARIC según el código y el origen.",
     "linhas": [
      [
       "Valor en aduana (mercancía + flete y seguro hasta la UE)",
       "5.650,00 €"
      ],
      [
       "Arancel de importación hipotético (3 % del valor en aduana)",
       "169,50 €"
      ],
      [
       "Transporte hasta el primer destino en la UE",
       "150,00 €"
      ],
      [
       "Base del IVA (5.650,00 + 169,50 + 150,00)",
       "5.969,50 €"
      ]
     ],
     "total": [
      "IVA de importación (21 % de la base)",
      "1.253,60 €"
     ],
     "nota": "Según la Agencia Tributaria, la base del IVA es el valor en aduana más aranceles, gravámenes (salvo el propio IVA) y gastos hasta el primer destino en la UE. El IVA de importación es, por regla general, **recuperable** en la declaración de IVA (consulta a tu gestoría)."
    },
    {
     "tipo": "alerta",
     "titulo": "El error del impuesto de 3 euros",
     "corpo": "El 1 de julio de 2026 la UE empezó a cobrar una **tasa fija temporal de 3 € por artículo** en envíos de **bajo valor (hasta 150 €)** de ventas a distancia desde fuera de la UE, hasta el 1 de julio de 2028. Está pensada para los **paquetes al consumidor**. Un **lote comercial para el almacén** sigue el despacho normal, pero **confirma el encaje** con tu agente de aduanas."
    },
    {
     "tipo": "texto",
     "titulo": "Quién es el importador registrado",
     "corpo": "Amazon indica que sus **centros logísticos no pueden ser el importador registrado** de las entradas desde fuera de la UE. Es decir: **tú** (con EORI) o un **colaborador** (agente de aduanas, transitario, servicio especializado) eres quien importa en tu nombre.\n\nEso implica **responsabilidad**: si la declaración tiene errores, la deuda aduanera es del importador."
    },
    {
     "tipo": "delegar",
     "titulo": "Quién lo hace por ti",
     "corpo": "**Agente de aduanas / transitario con servicio aduanero:** clasifica el producto, presenta el DUA, paga aranceles e IVA y entrega el lote. **Gestoría:** anota el IVA de importación en la declaración. **Tú:** envías la factura comercial correcta, el packing list y fotos del producto.\n\nPide un **presupuesto con todos los costes de despacho** antes del embarque."
    }
   ],
   "quiz": [
    {
     "id": "4-4-q1",
     "tipo": "multipla",
     "enunciado": "¿Cuál es la base del IVA de importación, según la Agencia Tributaria?",
     "opcoes": [
      "Solo el precio de fábrica",
      "Valor en aduana + aranceles y gravámenes (salvo el IVA) + gastos hasta el primer destino en la UE",
      "El precio de venta en Amazon",
      "Cero"
     ],
     "correta": 1,
     "explicacao": "El IVA se aplica sobre el valor en aduana más aranceles, gravámenes y gastos hasta el primer destino."
    },
    {
     "id": "4-4-q2",
     "tipo": "multipla",
     "enunciado": "¿Para qué sirve el TARIC?",
     "opcoes": [
      "Para consultar aranceles, IVA y medidas aplicables a cada mercancía",
      "Para abrir una empresa",
      "Para pedir el NIE",
      "Para registrar una marca"
     ],
     "correta": 0,
     "explicacao": "El TARIC es el arancel integrado de la UE."
    },
    {
     "id": "4-4-q3",
     "tipo": "vf",
     "enunciado": "Los centros logísticos de Amazon pueden ser el importador registrado de tus entradas desde fuera de la UE.",
     "correta": false,
     "explicacao": "Según Amazon.es, no pueden."
    },
    {
     "id": "4-4-q4",
     "tipo": "multipla",
     "enunciado": "¿Qué tasa fija temporal aplica la UE a los artículos de bajo valor vendidos a distancia desde el 1/7/2026?",
     "opcoes": [
      "1 € por paquete",
      "3 € por artículo",
      "10 % del valor",
      "50 € por envío"
     ],
     "correta": 1,
     "explicacao": "3 € por artículo, hasta el 1 de julio de 2028, para envíos de hasta 150 €."
    },
    {
     "id": "4-4-q5",
     "tipo": "multipla",
     "enunciado": "Calcula: base del IVA de 5.969,50 € al 21 %. ¿Cuál es el IVA?",
     "opcoes": [
      "1.186,50 €",
      "1.253,60 €",
      "1.500,00 €",
      "1.000,00 €"
     ],
     "correta": 1,
     "explicacao": "5.969,50 × 0,21 = 1.253,60 €."
    },
    {
     "id": "4-4-q6",
     "tipo": "multipla",
     "enunciado": "¿Qué número es obligatorio antes de presentar una declaración aduanera en la UE?",
     "opcoes": [
      "TARIC",
      "EORI",
      "ASIN",
      "GTIN"
     ],
     "correta": 1,
     "explicacao": "El EORI identifica al operador ante las aduanas de la UE."
    }
   ]
  },
  {
   "id": "4-5",
   "titulo": "Preparar y enviar al almacén",
   "minutos": 7,
   "fontes": [
    "sell-es-fba",
    "sc-es-caja-63",
    "sell-es-grande-pesado",
    "amz-rate-card-es"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Del contenedor a la estantería de Amazon",
     "corpo": "Después del despacho, el lote tiene que llegar al **centro logístico de Amazon** en las condiciones correctas. Según Amazon.es, el camino tiene cinco etapas:\n\n1. **Registro** de la cuenta de vendedor\n2. **Listados** creados o convertidos\n3. **Preparación y envío** siguiendo los requisitos de embalaje y preparación\n4. **Recepción** (estados del envío: entregado, registrado, en recepción, cerrado)\n5. **Gestión** del inventario con los informes de Seller Central"
    },
    {
     "tipo": "texto",
     "titulo": "Etiquetas: cada unidad necesita identidad",
     "corpo": "Cada unidad enviada a FBA necesita una **etiqueta de código de barras**, normalmente el [[fnsku]] de Amazon, para que el almacén sepa de quién es el artículo. Hay dos formas: **etiquetar tú** (o pedirlo a la fábrica o al prep center) o **dejar que Amazon etiquete** (con un cargo por unidad: consulta el importe actual en Seller Central).\n\nPide a la fábrica que **aplique ya** las etiquetas, si el producto está confirmado, y evita rehacer trabajo.",
     "termos": [
      "fnsku"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Cajas: el límite que ha cambiado",
     "corpo": "Según un anuncio oficial de Amazon.es, la **longitud máxima de la caja estándar** en los nuevos envíos a FBA (Reino Unido, Francia, Alemania, Italia y España) bajó de **91,4 cm a 63,5 cm**, con anchura y altura de **63,5 cm**. Los envíos que no cumplan pueden **rechazarse** o generar **tarifas**.\n\nSobre el **peso máximo por caja**, hay vendedores que citan 15 kg y 23 kg, pero **no es oficial**: consulta el límite actual en los requisitos de envío de Seller Central antes de preparar el lote."
    },
    {
     "tipo": "alerta",
     "titulo": "Los artículos grandes y pesados son un caso aparte",
     "corpo": "Para artículos grandes y pesados, Amazon.es tiene el **programa Grande y Pesado**. Para España, la página cita una longitud de **175 a 300 cm**, un peso de **31,5 a 120 kg** y un perímetro de **360 a 800 cm**. La tarifa FBA en ese tramo es mucho más alta y se cobra por peso."
    },
    {
     "tipo": "texto",
     "titulo": "Incentivos de entrada que anuncia Amazon",
     "corpo": "Para quien envía su primer lote, Amazon.es describe (y puede cambiar):\n\n- **Transportista asociado:** crédito de **90 €** en costes de envío, que se activa cuando Amazon recibe el primer envío. El primer envío debe llegar **en un máximo de 90 días** después de publicar el primer producto disponible para la venta\n- **Amazon Global Logistics:** crédito de **180 €** en tarifas de gestión logística para nuevos vendedores\n- **New Selection:** almacenamiento mensual gratuito, liquidaciones gratuitas y procesamiento gratuito de devoluciones (condiciones en la página)\n- Exenciones el primer año de algunas tarifas de almacenamiento y de cobertura de stock\n\nLas condiciones y los importes cambian. Lee los términos antes de contar con ellos."
    },
    {
     "tipo": "delegar",
     "titulo": "Quién lo hace por ti",
     "corpo": "**Prep center o fábrica:** etiquetar y embalar según las normas. **Transitario:** programar la entrega en el centro logístico. **Gestor de cuenta/asistente:** crear el envío en Seller Central. **Tú:** comprobar la **primera unidad** del lote en mano (pide una a tu domicilio) y aprobar el envío."
    },
    {
     "tipo": "dica",
     "corpo": "Para el primer lote, muchos vendedores piden **una unidad más para casa**, para comprobar la etiqueta, el embalaje y los datos del GPSR antes de que el grueso vaya al almacén."
    }
   ],
   "quiz": [
    {
     "id": "4-5-q1",
     "tipo": "multipla",
     "enunciado": "¿Cuál es la longitud máxima de la caja estándar en los nuevos envíos a FBA, según el anuncio oficial?",
     "opcoes": [
      "63,5 cm",
      "91,4 cm",
      "120 cm",
      "30 cm"
     ],
     "correta": 0,
     "explicacao": "El límite bajó de 91,4 a 63,5 cm en los nuevos envíos."
    },
    {
     "id": "4-5-q2",
     "tipo": "vf",
     "enunciado": "Los límites de peso por caja que citan los vendedores en el foro (15 kg y 23 kg) son una norma oficial de Amazon.",
     "correta": false,
     "explicacao": "Son testimonios no oficiales. Confírmalo en Seller Central."
    },
    {
     "id": "4-5-q3",
     "tipo": "multipla",
     "enunciado": "¿Qué debe llevar cada unidad enviada a FBA?",
     "opcoes": [
      "Una etiqueta de código de barras que la identifique (como el FNSKU)",
      "Un lazo",
      "Una carta",
      "Nada"
     ],
     "correta": 0,
     "explicacao": "Sin la etiqueta correcta, el almacén no sabe de quién es el artículo."
    },
    {
     "id": "4-5-q4",
     "tipo": "multipla",
     "enunciado": "¿Cuál es el crédito del programa Transportista asociado que cita Amazon.es?",
     "opcoes": [
      "10 €",
      "90 €",
      "900 €",
      "9.000 €"
     ],
     "correta": 1,
     "explicacao": "90 € en costes de envío, con condiciones, y puede cambiar."
    },
    {
     "id": "4-5-q5",
     "tipo": "multipla",
     "enunciado": "¿Por qué pedir una unidad extra para casa en el primer lote?",
     "opcoes": [
      "Para comprobar la etiqueta, el embalaje y los datos exigidos antes del envío principal",
      "Para venderla fuera de Amazon",
      "Para pagar menos impuestos",
      "Sin motivo"
     ],
     "correta": 0,
     "explicacao": "Un error de etiqueta o de documentación en un lote entero es mucho más caro de corregir."
    }
   ]
  }
 ]
};

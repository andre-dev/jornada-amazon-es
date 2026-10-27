// Mundo 1 (es). Gerado por tools/i18n-mundos.mjs a partir de js/content/world1.js.
export default {
 "id": 1,
 "slug": "vila-do-zero",
 "titulo": "Pueblo Cero",
 "subtitulo": "Qué es vender en Amazon",
 "cor": "var(--sol)",
 "cenario": "vila",
 "chefe": {
  "id": "nevoeiro",
  "nome": "La Niebla de la Duda",
  "hp": 100,
  "fala": "¿Vender en Amazon? ¿En España? ¿Sin hablar español como nativo? Mejor rendirse...",
  "derrota": "Vale, vale... la duda se ha disipado. Puedes seguir.",
  "perguntas": [
   {
    "id": "b1-1",
    "tipo": "multipla",
    "licaoRef": "1-1",
    "enunciado": "Dos vendedores ofrecen el mismo ASIN en Amazon.es. ¿Qué decide quién aparece en el botón de compra?",
    "opcoes": [
     "Un sorteo entre los vendedores",
     "Una combinación de factores de la oferta, como precio total, disponibilidad, entrega y rendimiento del vendedor",
     "Siempre quien se registró primero",
     "Siempre quien tiene más años de cuenta"
    ],
    "correta": 1,
    "explicacao": "La Buy Box se decide por un conjunto de factores de la oferta y del vendedor. El precio no lo es todo: la entrega y el rendimiento pesan."
   },
   {
    "id": "b1-2",
    "tipo": "vf",
    "licaoRef": "1-1",
    "enunciado": "En el modelo 3P (vendedor externo), Amazon compra tu stock y fija el precio de venta.",
    "correta": false,
    "explicacao": "Eso describe el modelo 1P (vendor). En el 3P tú mantienes el stock, fijas el precio y Amazon cobra tarifas por usar la plataforma."
   },
   {
    "id": "b1-3",
    "tipo": "multipla",
    "licaoRef": "1-2",
    "enunciado": "¿Cuál de estas tiendas NO forma parte del programa logístico Pan-EU, según la página oficial?",
    "opcoes": [
     "Amazon.de",
     "Amazon.it",
     "Amazon.co.uk",
     "Amazon.nl"
    ],
    "correta": 2,
    "explicacao": "El Reino Unido salió de Pan-EU el 1 de enero de 2021. Se gestiona en un programa aparte."
   },
   {
    "id": "b1-4",
    "tipo": "multipla",
    "licaoRef": "1-3",
    "enunciado": "¿Cuál es la principal ventaja de la marca propia frente a revender marcas conocidas?",
    "opcoes": [
     "Exige menos capital",
     "Controlas el producto, la página y (en general) la Buy Box",
     "No requiere ningún cuidado con la calidad",
     "No necesita anuncios"
    ],
    "correta": 1,
    "explicacao": "Con marca propia el catálogo es tuyo: eliges producto, imágenes y texto, y no compites por la misma oferta con decenas de revendedores."
   },
   {
    "id": "b1-5",
    "tipo": "vf",
    "licaoRef": "1-4",
    "enunciado": "Según la política de Amazon, el dropshipping está permitido siempre que tú seas el vendedor registrado y el proveedor no aparezca en los documentos del cliente.",
    "correta": true,
    "explicacao": "Exacto: el nombre del vendedor registrado debe figurar en todo lo que recibe el cliente, el proveedor tiene que desaparecer de facturas, etiquetas y embalaje, y las devoluciones son cosa tuya."
   },
   {
    "id": "b1-6",
    "tipo": "multipla",
    "licaoRef": "1-4",
    "enunciado": "¿Por qué es arriesgado el arbitraje minorista (comprar en tiendas y revender en Amazon)?",
    "opcoes": [
     "Porque está prohibido por ley en España",
     "Porque Amazon puede pedir justificantes de procedencia, las marcas pueden reclamar la venta y no hay reposición garantizada",
     "Porque los productos nunca tienen margen",
     "Porque solo funciona en diciembre"
    ],
    "correta": 1,
    "explicacao": "El riesgo está en la autenticidad, los justificantes, las categorías restringidas y las reclamaciones de marca. Además, una oferta de tienda se acaba y no puedes reponer."
   },
   {
    "id": "b1-7",
    "tipo": "ordenar",
    "licaoRef": "1-5",
    "enunciado": "Ordena el recorrido de un pedido FBA, desde el clic del cliente hasta la entrega.",
    "opcoes": [
     "El cliente compra en Amazon.es",
     "Amazon prepara y embala el producto en el almacén",
     "Amazon lo envía al cliente",
     "Amazon se encarga del seguimiento, la atención y la devolución, si la hay"
    ],
    "explicacao": "En FBA Amazon asume la operación después de la compra: prepara, embala, envía y atiende al cliente."
   },
   {
    "id": "b1-8",
    "tipo": "multipla",
    "licaoRef": "1-5",
    "enunciado": "¿Cuál de estos es uno de los requisitos publicados para el programa Prime gestionado por el vendedor en España?",
    "opcoes": [
     "Seguimiento válido en al menos el 99 % de los envíos",
     "Tener al menos tres marcas registradas",
     "Usar solo el almacén de Amazon",
     "Vender solo productos de moda"
    ],
    "correta": 0,
    "explicacao": "La página oficial cita, entre otros, un 90 % de entregas a tiempo, seguimiento válido en al menos el 99 % de los envíos y cancelaciones de hasta el 0,5 %."
   },
   {
    "id": "b1-9",
    "tipo": "multipla",
    "licaoRef": "1-6",
    "enunciado": "¿Quién se encarga normalmente de los impuestos, las declaraciones y los registros fiscales de las pequeñas empresas en España?",
    "opcoes": [
     "El gestor de PPC",
     "La gestoría",
     "El prep center",
     "El fotógrafo"
    ],
    "correta": 1,
    "explicacao": "La gestoría es el despacho que se ocupa del papeleo fiscal y contable de autónomos y pequeñas empresas."
   },
   {
    "id": "b1-10",
    "tipo": "vf",
    "licaoRef": "1-6",
    "enunciado": "Para delegar el trabajo en Seller Central, lo ideal es compartir tu contraseña principal con el asistente.",
    "correta": false,
    "explicacao": "No lo hagas. Crea usuarios con permisos limitados para cada persona: así controlas el acceso y puedes retirarlo cuando quieras."
   }
  ]
 },
 "licoes": [
  {
   "id": "1-1",
   "titulo": "Cómo funciona el marketplace por dentro",
   "minutos": 6,
   "fontes": [
    "sell-es-vender-online",
    "sell-es-home"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "vila",
     "titulo": "Un centro comercial gigante con miles de tiendas",
     "corpo": "Amazon.es es un **marketplace**: un escaparate único donde conviven la propia Amazon y miles de vendedores independientes. El cliente compra en la web, pero muchas veces el producto viene de un vendedor como tú.\n\nPara quien vende, esto significa algo valioso: **alquilas el acceso a millones de compradores** sin montar una tienda y sin pagar para atraer al primer visitante. El precio son las tarifas y las normas de la casa."
    },
    {
     "tipo": "comparacao",
     "titulo": "1P vs. 3P: dos formas de estar en Amazon",
     "rotuloLinhas": "",
     "colunas": [
      "1P (vendor)",
      "3P (vendedor externo)"
     ],
     "linhas": [
      [
       "Quién compra el stock",
       "Amazon te compra y revende",
       "Tú mantienes el stock como propietario"
      ],
      [
       "Quién fija el precio",
       "Amazon",
       "Tú"
      ],
      [
       "Quién aparece como vendedor",
       "Amazon",
       "Tú"
      ],
      [
       "Cómo entrar",
       "En general, por invitación de Amazon",
       "Abriendo una cuenta de vendedor"
      ],
      [
       "Control sobre la marca y la oferta",
       "Menor",
       "Mayor"
      ]
     ],
     "nota": "Este curso trata del **3P**, que es el camino abierto a cualquier emprendedor.",
     "termos": [
      "1p",
      "3p"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Catálogo compartido y el ASIN",
     "corpo": "Cada producto tiene una única página, identificada por un código de 10 caracteres: el [[asin]]. Si tres vendedores venden la misma botella, los tres **ofertan en el mismo ASIN**, en la misma página.\n\nPor eso en Amazon no \"creas una tienda\": **creas páginas del catálogo o entras en ellas**. Si el producto ya existe, ofertas en él. Si es un producto nuevo y tuyo, creas el ASIN (normalmente con un [[gtin]], el código de barras).",
     "termos": [
      "asin",
      "gtin"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "La Buy Box: el botón que concentra las ventas",
     "corpo": "Cuando varios vendedores ofertan en el mismo ASIN, Amazon elige **una oferta** para ocupar el botón \"Añadir a la cesta\". Es la [[buy-box]]. Quien la gana se lleva la mayor parte de las compras de esa página.\n\nLa elección tiene en cuenta un conjunto de factores de la oferta y del vendedor, como:\n\n- precio total (producto + envío)\n- disponibilidad de stock\n- rapidez y fiabilidad de la entrega\n- rendimiento de la cuenta (cancelaciones, retrasos, reclamaciones)\n\nAmazon no publica la fórmula exacta. Lo que importa: **el precio bajo por sí solo no basta**.",
     "termos": [
      "buy-box"
     ]
    },
    {
     "tipo": "exemplo",
     "titulo": "La botella térmica con cinco ofertas",
     "corpo": "Imagina una botella de una marca conocida con cinco vendedores en el mismo ASIN. Uno envía desde el almacén de Amazon, entrega rápido y tiene la cuenta impecable. Otro es un 2 % más barato, pero envía desde su casa en cuatro días.\n\nEs habitual que el primero se lleve la Buy Box aunque cobre un poco más. Moraleja: **la entrega y la reputación compensan el precio**."
    },
    {
     "tipo": "dica",
     "corpo": "Cuando creas **tu propio producto** con **tu marca**, el ASIN es tuyo y nadie te disputa la Buy Box. Es el gran argumento a favor de la marca propia, que veremos en la lección 3."
    },
    {
     "tipo": "alerta",
     "titulo": "Amazon también puede ser tu competidora",
     "corpo": "En muchas páginas la propia Amazon vende el producto (1P). Cuando ocurre, ganar la Buy Box es mucho más difícil. Antes de elegir un producto de reventa, mira **quién vende** en la página."
    },
    {
     "tipo": "delegar",
     "corpo": "No necesitas manejar Seller Central a diario. Necesitas entender estos cuatro conceptos (ASIN, catálogo, Buy Box, 1P vs. 3P) para **exigir bien** a quien opera por ti y para **decidir** qué tipo de producto merece la pena."
    }
   ],
   "quiz": [
    {
     "id": "1-1-q1",
     "tipo": "multipla",
     "enunciado": "¿Qué es un ASIN?",
     "opcoes": [
      "El código de 10 caracteres que identifica una página de producto en el catálogo",
      "El número fiscal del vendedor en España",
      "La tarifa cobrada por artículo vendido",
      "El nombre del almacén de Amazon"
     ],
     "correta": 0,
     "explicacao": "El ASIN es el identificador del producto en el catálogo. Varios vendedores pueden ofertar en el mismo ASIN."
    },
    {
     "id": "1-1-q2",
     "tipo": "vf",
     "enunciado": "En el catálogo compartido, cada vendedor tiene su propia página para el mismo producto.",
     "correta": false,
     "explicacao": "Hay una página por producto (ASIN). Todos los vendedores de ese producto aparecen en ella como ofertas."
    },
    {
     "id": "1-1-q3",
     "tipo": "multipla",
     "enunciado": "¿Cuál es la mejor descripción de la Buy Box?",
     "opcoes": [
      "El depósito de garantía que paga el vendedor",
      "El botón de compra, ocupado por una de las ofertas del ASIN",
      "La caja en la que se envía el producto",
      "Un sello para marcas registradas"
     ],
     "correta": 1,
     "explicacao": "La Buy Box es el botón de compra principal. Quien la ocupa recibe la mayor parte de las ventas del ASIN."
    },
    {
     "id": "1-1-q4",
     "tipo": "lacuna",
     "enunciado": "En el modelo ___, tú eres el vendedor, mantienes el stock y fijas el precio.",
     "opcoes": [
      "3P",
      "1P",
      "FNSKU"
     ],
     "correta": 0,
     "explicacao": "3P es el vendedor externo: tú vendes, Amazon intermedia y cobra tarifas."
    },
    {
     "id": "1-1-q5",
     "tipo": "ordenar",
     "enunciado": "Ordena el recorrido de una venta de un vendedor externo:",
     "opcoes": [
      "El cliente busca y abre la página del ASIN",
      "Una oferta ocupa la Buy Box",
      "El cliente compra",
      "El vendedor entrega el pedido (o Amazon, si es FBA)"
     ],
     "explicacao": "La venta empieza en la búsqueda, pasa por la Buy Box y termina en la entrega."
    }
   ]
  },
  {
   "id": "1-2",
   "titulo": "Amazon.es y los mercados europeos",
   "minutos": 5,
   "fontes": [
    "sell-es-europa-fba",
    "sell-es-home"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Cada país, una tienda",
     "corpo": "Amazon no es una web única para Europa. Hay **una tienda por país**: Amazon.es (España), Amazon.de (Alemania), Amazon.fr (Francia), etc. Cada una tiene su idioma, sus clientes, sus hábitos de compra y sus normas fiscales.\n\nLa buena noticia: la propia Amazon indica que la cuenta de vendedor se configura para vender en toda Europa. **No abres una empresa nueva en cada país** para estar presente en las tiendas."
    },
    {
     "tipo": "texto",
     "titulo": "Cuáles son las tiendas europeas para vender",
     "corpo": "Según la página oficial de Logística de Amazon en Europa, las tiendas del programa Pan-EU son:\n\n- **Obligatorias:** Alemania, Francia, Italia, España y Países Bajos (esta última obligatoria a partir del 3 de septiembre de 2026)\n- **Disponibles:** Polonia, Suecia, Bélgica e Irlanda (Bélgica pasa a ser obligatoria el 26 de febrero de 2027)\n\nEl **Reino Unido** salió de Pan-EU el 1 de enero de 2021 y se gestiona en un programa aparte, porque ya no pertenece a la Unión Europea.",
     "termos": [
      "pan-eu"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Cuenta única no significa impuesto único",
     "corpo": "Acceder a las tiendas es fácil. Lo difícil es **cumplir las normas de cada país**: IVA, envases, etiquetas, seguridad del producto. Por eso la estrategia recomendada para empezar es dominar **una** tienda antes de abrir las demás."
    },
    {
     "tipo": "comparacao",
     "titulo": "Empezar solo en España vs. empezar en toda Europa",
     "colunas": [
      "Solo en España",
      "Toda Europa"
     ],
     "linhas": [
      [
       "Idioma y cultura",
       "Uno solo (y vives allí)",
       "Varios idiomas, varios públicos"
      ],
      [
       "Complejidad fiscal",
       "Menor",
       "Mayor: IVA y normas por país"
      ],
      [
       "Riesgo de error",
       "Más fácil de controlar",
       "Se multiplica"
      ],
      [
       "Cuándo tiene sentido",
       "Primer producto, primeros meses",
       "Producto validado y margen sano"
      ]
     ]
    },
    {
     "tipo": "passos",
     "titulo": "La ruta recomendada",
     "itens": [
      "Montar la estructura fiscal y la cuenta y vender en España",
      "Validar el producto: ventas estables, buenas reseñas, margen real",
      "Ampliar a los países vecinos con listados traducidos",
      "Solo entonces optimizar la logística paneuropea (Mundo 9)"
     ]
    },
    {
     "tipo": "dica",
     "corpo": "Como vas a vivir en **Madrid**, España es el campo de entrenamiento perfecto: el idioma a la puerta de casa, correos y proveedores cerca, y las normas que aprenderás en el Mundo 2 sirven de base para todo lo demás."
    }
   ],
   "quiz": [
    {
     "id": "1-2-q1",
     "tipo": "multipla",
     "enunciado": "Según la página oficial, ¿qué tienda salió de Pan-EU en 2021?",
     "opcoes": [
      "Amazon.fr",
      "Amazon.co.uk",
      "Amazon.it",
      "Amazon.pl"
     ],
     "correta": 1,
     "explicacao": "El Reino Unido salió de Pan-EU el 1 de enero de 2021."
    },
    {
     "id": "1-2-q2",
     "tipo": "vf",
     "enunciado": "Tener una cuenta de vendedor que llega a varias tiendas europeas significa que el IVA es igual en todas.",
     "correta": false,
     "explicacao": "El acceso a las tiendas es común, pero cada país tiene sus normas fiscales y de producto."
    },
    {
     "id": "1-2-q3",
     "tipo": "multipla",
     "enunciado": "¿Por qué España es una buena primera tienda para quien vive en Madrid?",
     "opcoes": [
      "Porque es la única que acepta vendedores extranjeros",
      "Porque el idioma, los proveedores y las normas quedan a mano, lo que reduce el riesgo de error",
      "Porque allí no existe el IVA",
      "Porque es la mayor tienda de Europa"
     ],
     "correta": 1,
     "explicacao": "Aprender con una sola tienda reduce el riesgo. Las demás tiendas también aceptan extranjeros, y el IVA existe en todas."
    },
    {
     "id": "1-2-q4",
     "tipo": "ordenar",
     "enunciado": "Ordena la ruta de expansión recomendada:",
     "opcoes": [
      "Vender en España",
      "Validar el producto con datos reales",
      "Traducir y listar en los países vecinos",
      "Optimizar la logística paneuropea"
     ],
     "explicacao": "Primero valida el producto donde es más sencillo, luego expándete y solo al final optimiza la logística."
    }
   ]
  },
  {
   "id": "1-3",
   "titulo": "Marca propia y reventa: los dos caminos principales",
   "minutos": 7,
   "fontes": [
    "sell-es-home"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Camino 1: marca propia (private label)",
     "corpo": "Eliges un producto que ya existe en fábricas, le pones **tu marca** (y normalmente mejoras de diseño, embalaje o un pack) y lo vendes como exclusivo. El catálogo pasa a ser tuyo.\n\n**Ventajas:** control de la página y del precio, margen potencialmente mayor, un activo que crece (la marca), sin pelear por la Buy Box.\n\n**Retos:** exige investigación, muestras, importación, atención a la seguridad del producto e inversión en anuncios para que te descubran. Un error de producto afecta a toda la marca.",
     "termos": [
      "marca-propria"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Camino 2: reventa (wholesale)",
     "corpo": "Compras a **marcas o distribuidores autorizados** y revendes en Amazon. El producto ya tiene demanda y reputación.\n\n**Ventajas:** menos trabajo de producto, demanda existente, el capital para empezar puede ser menor.\n\n**Retos:** márgenes ajustados, competencia por la Buy Box, riesgo de que la marca venda directamente o cambie de distribuidor, y la necesidad de **autorización y facturas** que acrediten la procedencia. También hay implicaciones de IVA para quien revende (lo veremos en el Mundo 2).",
     "termos": [
      "wholesale"
     ]
    },
    {
     "tipo": "comparacao",
     "titulo": "Lado a lado",
     "rotuloLinhas": "",
     "colunas": [
      "Marca propia",
      "Reventa"
     ],
     "linhas": [
      [
       "Control de la página",
       "Total",
       "Compartido con otros vendedores"
      ],
      [
       "Buy Box",
       "En general solo tuya",
       "Disputada"
      ],
      [
       "Margen potencial",
       "Mayor",
       "Menor y presionado"
      ],
      [
       "Trabajo inicial",
       "Alto (producto, marca, fotos)",
       "Medio (contratos con marcas)"
      ],
      [
       "Capital y plazo",
       "Stock grande y plazo de importación",
       "Compras recurrentes, rotación más rápida"
      ],
      [
       "Riesgo principal",
       "Elegir el producto equivocado",
       "Depender de pocas marcas y del precio"
      ]
     ],
     "nota": "Los niveles son cualitativos: varían mucho según el producto y la categoría."
    },
    {
     "tipo": "delegar",
     "titulo": "Qué se puede delegar",
     "corpo": "**Marca propia:** agente de sourcing (encuentra fábricas y negocia), diseñador de embalaje y fotos, gestor de anuncios, prep center para etiquetar y enviar.\n\n**Reventa:** asistente de compras para contactar con marcas y distribuidores, herramienta de precios automáticos y la gestoría para la parte de facturas e IVA.\n\nEn ambos casos, **la elección del producto y del proveedor es decisión tuya**."
    },
    {
     "tipo": "exemplo",
     "titulo": "Dos ideas para el mismo bolsillo",
     "corpo": "**Marca propia:** organizador de cajón de cocina, ligero y sencillo. Personalizas color y pack, creas la marca y solo lo vendes tú.\n\n**Reventa:** café de un tostador español autorizado. Ya se vende bien, pero compartes la página con otros revendedores y dependes del contrato con el tostador."
    },
    {
     "tipo": "alerta",
     "corpo": "Revender marcas conocidas **sin autorización** suele acabar en reclamaciones de propiedad intelectual y bloqueo de la oferta. Guarda siempre las **facturas de compra** del proveedor."
    },
    {
     "tipo": "dica",
     "corpo": "Este curso se centra en la **marca propia**, que ofrece más control y es donde la selección de productos (Mundo 3) marca más diferencia. Pero todo lo que aprendas sobre tarifas, impuestos, listados y anuncios también sirve para la reventa."
    }
   ],
   "quiz": [
    {
     "id": "1-3-q1",
     "tipo": "multipla",
     "enunciado": "¿Cuál de estas es una ventaja típica de la marca propia?",
     "opcoes": [
      "No pagas tarifas de Amazon",
      "El catálogo es tuyo y, en general, no compartes la Buy Box",
      "No necesitas stock",
      "La demanda ya existe"
     ],
     "correta": 1,
     "explicacao": "Con marca propia controlas la página y la oferta. Las tarifas existen en cualquier modelo."
    },
    {
     "id": "1-3-q2",
     "tipo": "multipla",
     "enunciado": "¿Cuál es un riesgo típico de la reventa?",
     "opcoes": [
      "Márgenes ajustados y competencia por la Buy Box",
      "Imposibilidad de comprar a proveedores",
      "Prohibición de usar FBA",
      "Tener que crear un logotipo"
     ],
     "correta": 0,
     "explicacao": "En la reventa compartes la página con otros vendedores y compites mucho en precio y entrega."
    },
    {
     "id": "1-3-q3",
     "tipo": "vf",
     "enunciado": "Revender una marca conocida sin autorización es seguro siempre que pagues menos que el precio de Amazon.",
     "correta": false,
     "explicacao": "Sin autorización y sin facturas de procedencia, la marca puede reclamar y la oferta puede bloquearse, aunque el precio sea bajo."
    },
    {
     "id": "1-3-q4",
     "tipo": "lacuna",
     "enunciado": "El profesional que busca fábricas y negocia con ellas por ti se llama agente de ___.",
     "opcoes": [
      "sourcing",
      "PPC",
      "prep"
     ],
     "correta": 0,
     "explicacao": "El agente de sourcing encuentra proveedores, pide muestras y negocia, y es una de las piezas que más se delegan."
    },
    {
     "id": "1-3-q5",
     "tipo": "multipla",
     "enunciado": "¿Quién debe tomar la decisión final sobre qué producto vender?",
     "opcoes": [
      "El dueño, con apoyo de datos y especialistas",
      "Siempre el agente de sourcing",
      "Siempre el gestor de anuncios",
      "La gestoría"
     ],
     "correta": 0,
     "explicacao": "Se puede delegar la investigación y la ejecución, pero la decisión del producto es del dueño: es la que define el riesgo y el capital."
    }
   ]
  },
  {
   "id": "1-4",
   "titulo": "Arbitraje, dropshipping y otros caminos",
   "minutos": 6,
   "fontes": [
    "sell-es-dropshipping",
    "sc-es-dropshipping",
    "sell-es-handmade",
    "sell-es-precios"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Arbitraje: comprar barato aquí, vender caro allí",
     "corpo": "En el **arbitraje** compras productos en tiendas (físicas u online), normalmente en oferta, y los revendes en Amazon más caros.\n\nParece sencillo, pero tiene trampas:\n\n- **Procedencia:** Amazon puede pedir justificantes de compra. Sin ellos, la oferta puede retirarse.\n- **Marcas y categorías restringidas:** no todos los productos los puede ofertar cualquier vendedor.\n- **Sin repetición:** la oferta se acaba y no puedes reponer al mismo coste.\n- **Trabajo manual:** es una actividad de cazar oportunidades, difícil de convertir en empresa.",
     "termos": [
      "arbitragem"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Dropshipping: lo que Amazon permite",
     "corpo": "En el [[dropshipping]], tú vendes, pero **otra empresa envía** el producto directamente al cliente. Amazon lo **permite** si cumples normas claras:\n\n- tú eres el **vendedor registrado** y apareces como tal en todo lo que recibe el cliente\n- el proveedor debe **eliminar** nombre, logotipo, facturas y precios dentro y fuera del paquete\n- tú **aceptas y gestionas las devoluciones**\n- cumples el acuerdo de vendedor y las demás políticas",
     "termos": [
      "dropshipping"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Qué está prohibido en el dropshipping",
     "corpo": "Está **prohibido** comprar a otro minorista y pedirle que envíe directamente a tu cliente con su documentación. También está prohibido que nombres, logotipos o datos de contacto de terceros aparezcan en facturas, etiquetas o embalaje.\n\nQuien lo incumple ve caer la salud de su cuenta y pierde la posibilidad de usar ciertos servicios logísticos. Si Amazon ve llegar al cliente un paquete de la competencia, **es tu cuenta la que paga**."
    },
    {
     "tipo": "texto",
     "titulo": "Otros caminos, de un vistazo",
     "corpo": "- **Amazon Handmade:** para artesanos que fabrican su propio producto. Exige solicitud y auditoría. La página oficial indica una tarifa por referencia del **12,36 %**, alta con el plan Profesional y categorías permitidas (digitales, alimentos y electrónica quedan fuera).\n- **KDP (Kindle Direct Publishing):** publicación de libros en ebook y tapa blanda, un programa de regalías aparte.\n- **Merch on Demand:** camisetas y artículos impresos bajo demanda, también un programa aparte, con solicitud.\n\nLos dos últimos son mundos propios, con normas y cuentas distintas. Aquí solo los presentamos: **confirma la disponibilidad y las condiciones actuales en la web de cada programa**.",
     "termos": [
      "handmade"
     ]
    },
    {
     "tipo": "comparacao",
     "titulo": "Grado de riesgo y de trabajo",
     "colunas": [
      "Riesgo",
      "¿Se puede escalar?",
      "¿Se delega bien?"
     ],
     "linhas": [
      [
       "Marca propia",
       "Medio",
       "Sí",
       "Sí"
      ],
      [
       "Reventa autorizada",
       "Medio",
       "Sí",
       "Sí"
      ],
      [
       "Arbitraje",
       "Alto",
       "Poco",
       "Poco"
      ],
      [
       "Dropshipping",
       "Alto (normas estrictas)",
       "Depende del proveedor",
       "Sí, con contrato"
      ],
      [
       "Handmade",
       "Bajo a medio",
       "Limitado por la producción",
       "Poco"
      ]
     ],
     "nota": "Cuadro de referencia del curso, en niveles cualitativos."
    },
    {
     "tipo": "delegar",
     "corpo": "Si eliges dropshipping, el contrato con el proveedor debe decir por escrito: **embalaje neutro, sin sus facturas en el paquete, plazo de envío y quién paga la devolución**. Pide a un abogado o a la gestoría que lo revise."
    },
    {
     "tipo": "dica",
     "corpo": "Si la idea es montar una empresa que **funcione sin que tú pongas las manos**, los caminos que mejor encajan son la **marca propia** y la **reventa autorizada**. El arbitraje es un trabajo; el dropshipping es un juego de normas."
    }
   ],
   "quiz": [
    {
     "id": "1-4-q1",
     "tipo": "vf",
     "enunciado": "Amazon prohíbe cualquier forma de dropshipping.",
     "correta": false,
     "explicacao": "Está permitido, con condiciones: tú eres el vendedor registrado, el proveedor desaparece de los documentos y tú te ocupas de las devoluciones."
    },
    {
     "id": "1-4-q2",
     "tipo": "multipla",
     "enunciado": "¿Qué práctica está prohibida en el dropshipping?",
     "opcoes": [
      "Usar un proveedor para enviar el pedido",
      "Comprar a otro minorista y enviar directamente al cliente con su factura y su embalaje",
      "Quitar el nombre del proveedor del paquete",
      "Aceptar devoluciones"
     ],
     "correta": 1,
     "explicacao": "Cuando el nombre, la factura o el logotipo de otro minorista llegan al cliente, se ha incumplido la política."
    },
    {
     "id": "1-4-q3",
     "tipo": "multipla",
     "enunciado": "¿Por qué el arbitraje es difícil de convertir en un negocio estable?",
     "opcoes": [
      "Porque es ilegal",
      "Porque depende de ofertas pasajeras, sin reposición garantizada, y hay riesgo de procedencia",
      "Porque Amazon cobra el doble de tarifas",
      "Porque solo funciona con tarjeta de empresa"
     ],
     "correta": 1,
     "explicacao": "La oportunidad desaparece cuando acaba la oferta, y la procedencia del producto tiene que poder demostrarse."
    },
    {
     "id": "1-4-q4",
     "tipo": "multipla",
     "enunciado": "¿Cuál de estos productos NO se puede vender en Amazon Handmade, según la página oficial?",
     "opcoes": [
      "Joyería artesanal",
      "Decoración para el hogar hecha a mano",
      "Productos digitales, alimentos y electrónica",
      "Juguetes de madera fabricados por ti"
     ],
     "correta": 2,
     "explicacao": "La página indica que los productos digitales, la alimentación y la electrónica no están permitidos en el programa."
    },
    {
     "id": "1-4-q5",
     "tipo": "lacuna",
     "enunciado": "En el dropshipping, quien aparece como vendedor registrado en toda la documentación eres ___.",
     "opcoes": [
      "tú",
      "el proveedor",
      "el transportista"
     ],
     "correta": 0,
     "explicacao": "El proveedor actúa solo como socio logístico invisible para el cliente."
    }
   ]
  },
  {
   "id": "1-5",
   "titulo": "FBA, FBM y Prime: quién lleva la caja al cliente",
   "minutos": 6,
   "fontes": [
    "sell-es-sfp",
    "sell-es-home",
    "sell-es-europa-fba"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "FBA: Amazon hace la logística por ti",
     "corpo": "En [[fba]] (Logística de Amazon) envías el stock a un centro logístico de Amazon. A partir de ahí, cuando alguien compra, ella **prepara, embala y envía**; también se ocupa de la **atención y las devoluciones** de ese pedido. A cambio, cobra tarifas de logística y de almacenamiento.\n\nPara quien no quiere operar, es el camino más natural: te centras en el producto, la marca y el margen.",
     "termos": [
      "fba"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "FBM: entregas por tu cuenta",
     "corpo": "En [[fbm]] (gestionado por el vendedor) el stock está contigo, o con un operador logístico contratado, y eres tú quien embala y despacha cada pedido. Amazon muestra la oferta y cobra la comisión.\n\nEs útil para productos grandes, frágiles, de temporada o de rotación lenta, y para quien ya tiene estructura logística. Pero exige disciplina: **cada retraso y cada cancelación afecta a la salud de tu cuenta**.",
     "termos": [
      "fbm"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Prime gestionado por el vendedor",
     "corpo": "Existe un término medio: **Prime gestionado por el vendedor** (Seller Fulfilled Prime). Envías desde tu propio stock, pero el producto lleva el distintivo Prime. Según la página oficial de Amazon.es:\n\n- exige un periodo de prueba antes de que aparezca el distintivo\n- al menos un **90 % de entregas a tiempo**\n- seguimiento válido en al menos el **99 %** de los envíos\n- cancelaciones de hasta el **0,5 %**\n- envío y devolución gratuitos para miembros Prime\n\nAmazon se ocupa de la atención posventa sin coste adicional. La página cita el plan Profesional (39 €/mes, sin IVA).",
     "termos": [
      "sfp"
     ]
    },
    {
     "tipo": "comparacao",
     "titulo": "Tres formas de entregar",
     "colunas": [
      "FBA",
      "FBM",
      "Prime del vendedor"
     ],
     "linhas": [
      [
       "Dónde está el stock",
       "Almacén de Amazon",
       "Contigo o con tu operador",
       "Contigo o con tu operador"
      ],
      [
       "Quién embala y envía",
       "Amazon",
       "Tú",
       "Tú"
      ],
      [
       "Distintivo Prime",
       "Sí",
       "No",
       "Sí, si cumples los requisitos"
      ],
      [
       "Atención al cliente y devoluciones",
       "Amazon",
       "Tú",
       "Amazon (atención posventa)"
      ],
      [
       "Exigencia operativa",
       "Preparar y enviar el stock",
       "Mucha disciplina diaria",
       "Objetivos estrictos de plazo y seguimiento"
      ]
     ]
    },
    {
     "tipo": "fluxo",
     "titulo": "Recorrido del pedido en FBA",
     "etapas": [
      {
       "titulo": "Preparas y envías el stock",
       "texto": "Etiquetado y embalado (ver el Mundo 4)"
      },
      {
       "titulo": "Amazon lo guarda en el centro logístico"
      },
      {
       "titulo": "El cliente compra"
      },
      {
       "titulo": "Amazon embala y entrega",
       "texto": "Y se ocupa de las devoluciones"
      }
     ]
    },
    {
     "tipo": "delegar",
     "corpo": "Incluso en FBA, alguien tiene que **preparar el stock** (etiquetas, embalaje) y seguir los envíos. Es el trabajo de un **prep center** o de un **operador logístico**. En FBM, el operador logístico es casi obligatorio si no quieres tener el stock en casa.",
     "termos": [
      "prep-center"
     ]
    },
    {
     "tipo": "dica",
     "corpo": "Regla práctica para empezar: **FBA para productos pequeños y ligeros** que roten bien. Para artículos grandes o muy baratos, haz bien las cuentas: las tarifas logísticas pesan más (harás esa cuenta en el Mundo 5)."
    }
   ],
   "quiz": [
    {
     "id": "1-5-q1",
     "tipo": "multipla",
     "enunciado": "En FBA, ¿quién se ocupa del envío y las devoluciones de cada pedido?",
     "opcoes": [
      "Tú",
      "Amazon",
      "El cliente",
      "La gestoría"
     ],
     "correta": 1,
     "explicacao": "Amazon prepara, embala, envía y atiende al cliente en los pedidos FBA."
    },
    {
     "id": "1-5-q2",
     "tipo": "vf",
     "enunciado": "En FBM, los retrasos y cancelaciones no afectan a la salud de la cuenta porque Amazon solo muestra la oferta.",
     "correta": false,
     "explicacao": "En FBM el rendimiento de envío es tuyo y cuenta para la salud de la cuenta."
    },
    {
     "id": "1-5-q3",
     "tipo": "multipla",
     "enunciado": "¿Cuál es uno de los requisitos publicados para Prime gestionado por el vendedor?",
     "opcoes": [
      "Seguimiento válido en al menos el 99 % de los envíos",
      "Stock obligatorio en un almacén de Amazon",
      "Más de 10 marcas registradas",
      "Usar solo FBA"
     ],
     "correta": 0,
     "explicacao": "Seguimiento válido en al menos el 99 %, entregas a tiempo de al menos el 90 % y cancelaciones de hasta el 0,5 %."
    },
    {
     "id": "1-5-q4",
     "tipo": "multipla",
     "enunciado": "¿Para qué tipo de producto suele tener más sentido FBM?",
     "opcoes": [
      "Pequeño, ligero y de rotación rápida",
      "Grande, frágil, de temporada o de rotación lenta",
      "Siempre el más barato",
      "Siempre el que tiene marca registrada"
     ],
     "correta": 1,
     "explicacao": "Los artículos voluminosos o de baja rotación pueden salir caros en la logística de Amazon; el envío propio o con operador puede salir mejor."
    },
    {
     "id": "1-5-q5",
     "tipo": "ordenar",
     "enunciado": "Ordena el recorrido de un pedido FBA:",
     "opcoes": [
      "Envías el stock al almacén de Amazon",
      "El cliente hace el pedido",
      "Amazon embala y envía",
      "Amazon gestiona la devolución, si la hay"
     ],
     "explicacao": "Primero el stock llega al almacén, luego viene el pedido y el envío. La posventa cierra el ciclo."
    }
   ]
  },
  {
   "id": "1-6",
   "titulo": "El equipo del dueño: qué delegar",
   "minutos": 5,
   "fontes": [
    "sell-es-vender-online"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Eres el dueño, no el operador",
     "corpo": "Quien tiene varias empresas lo sabe: el trabajo del dueño es **decidir, exigir y proteger la caja**. En Amazon es igual. Casi todo lo pueden hacer colaboradores, pero **la decisión y la responsabilidad son tuyas**.\n\nUn negocio en Amazon es, en el fondo, una pequeña empresa con un equipo externalizado. Esta lección monta el organigrama."
    },
    {
     "tipo": "comparacao",
     "titulo": "Quién hace qué",
     "rotuloLinhas": "Colaborador",
     "colunas": [
      "Qué hace",
      "Cuándo contratarlo"
     ],
     "linhas": [
      [
       "Gestoría",
       "Impuestos, IVA, declaraciones, altas en Hacienda",
       "Antes de abrir la cuenta de vendedor"
      ],
      [
       "Agente de sourcing",
       "Encuentra fábricas, pide muestras, negocia, sigue la producción",
       "Al elegir el primer producto"
      ],
      [
       "Prep center / operador logístico",
       "Recibe, etiqueta, embala y envía al almacén",
       "Antes del primer envío de stock"
      ],
      [
       "Diseñador y fotógrafo",
       "Embalaje, fotos e imágenes de la página",
       "Antes de lanzar la página"
      ],
      [
       "Gestor de PPC",
       "Crea y optimiza los anuncios",
       "Después del lanzamiento, con presupuesto definido"
      ],
      [
       "Asistente virtual",
       "Tareas repetitivas, hojas de cálculo, atención sencilla",
       "Cuando la rutina semanal supere unas pocas horas"
      ]
     ],
     "termos": [
      "gestoria",
      "prep-center"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Nunca compartas la contraseña principal",
     "corpo": "Da acceso a cada persona con **su propio usuario, con permisos limitados**, y mantén la cuenta principal y la verificación en dos pasos **bajo tu control**. Así, si un colaborador se va, retiras el acceso sin cambiar nada más."
    },
    {
     "tipo": "passos",
     "titulo": "Lo que siempre queda contigo",
     "itens": [
      "Elegir el producto y el proveedor",
      "Aprobar el presupuesto de compra y de anuncios",
      "Ser titular de la cuenta de vendedor, del banco y de la marca",
      "Leer el panel semanal de resultados (30 minutos)"
     ]
    },
    {
     "tipo": "delegar",
     "titulo": "Empieza ligero",
     "corpo": "No contrates a seis personas el primer mes. Empieza con **gestoría + agente de sourcing**; añade el prep center cuando el primer lote esté en camino y el gestor de PPC cuando la página esté lista. Paga por tarea o por proyecto antes de firmar contratos largos."
    },
    {
     "tipo": "dica",
     "corpo": "Pide siempre **entregables por escrito**: informe de la gestoría, presupuesto del prep center, informe semanal del gestor de PPC. Un dueño que lee informes se ahorra reuniones."
    }
   ],
   "quiz": [
    {
     "id": "1-6-q1",
     "tipo": "multipla",
     "enunciado": "¿Quién se ocupa normalmente del IVA y las declaraciones en España?",
     "opcoes": [
      "Agente de sourcing",
      "Gestoría",
      "Fotógrafo",
      "Prep center"
     ],
     "correta": 1,
     "explicacao": "La gestoría es el despacho especializado en la parte fiscal y contable de los pequeños negocios."
    },
    {
     "id": "1-6-q2",
     "tipo": "vf",
     "enunciado": "Para que el asistente trabaje en Seller Central, lo más seguro es crear un usuario con permisos limitados.",
     "correta": true,
     "explicacao": "Los usuarios separados permiten controlar y retirar el acceso sin exponer la cuenta principal."
    },
    {
     "id": "1-6-q3",
     "tipo": "multipla",
     "enunciado": "¿Cuál de estas tareas debe quedar siempre en manos del dueño?",
     "opcoes": [
      "Elegir el producto y aprobar presupuestos",
      "Escribir la descripción del producto",
      "Pegar etiquetas en las cajas",
      "Responder correos sencillos"
     ],
     "correta": 0,
     "explicacao": "El producto y el dinero definen el riesgo del negocio, y por eso la decisión es del dueño."
    },
    {
     "id": "1-6-q4",
     "tipo": "multipla",
     "enunciado": "¿Cuál es la mejor estrategia de contratación al principio?",
     "opcoes": [
      "Contratar a todo el equipo el primer mes",
      "Empezar ligero (gestoría y sourcing) e ir añadiendo colaboradores según avanza el negocio",
      "Hacerlo todo tú solo",
      "Contratar solo cuando factures mucho"
     ],
     "correta": 1,
     "explicacao": "Contrata por etapas: cada colaborador entra cuando hay una tarea para él."
    }
   ]
  }
 ]
};

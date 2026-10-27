// Mundo 2 (es). Gerado por tools/i18n-mundos.mjs a partir de js/content/world2.js.
export default {
 "id": 2,
 "chefe": {
  "id": "burocratio",
  "nome": "Burocratio, el Sellador",
  "hp": 100,
  "fala": "¡Sin sello no hay cuenta! ¿Has traído todos los formularios? ¡Lo dudo!",
  "derrota": "Mis sellos... estaban todos en orden. Puedes pasar, emprendedor.",
  "perguntas": [
   {
    "id": "b2-1",
    "tipo": "multipla",
    "licaoRef": "2-1",
    "enunciado": "¿Qué papel tiene el NIE para quien va a emprender en España?",
    "opcoes": [
     "Es la contraseña de la cuenta de Seller Central",
     "Es el número de identificación fiscal de los extranjeros, necesario para abrir una empresa, firmar contratos y abrir cuentas",
     "Es el número del plan Profesional",
     "Es el código de barras del producto"
    ],
    "correta": 1,
    "explicacao": "El NIE identifica al extranjero ante la administración y es la base de casi todos los trámites fiscales y bancarios."
   },
   {
    "id": "b2-2",
    "tipo": "vf",
    "licaoRef": "2-1",
    "enunciado": "Tener un NIE ya significa, por sí solo, tener permiso para trabajar por cuenta propia en España.",
    "correta": false,
    "explicacao": "El NIE es identificación, no autorización de trabajo. El permiso depende de tu tipo de residencia y debe confirmarse con un abogado de extranjería."
   },
   {
    "id": "b2-3",
    "tipo": "multipla",
    "licaoRef": "2-2",
    "enunciado": "¿Cuál es el capital social mínimo de una SL (sociedad limitada) según la Ley 18/2022?",
    "opcoes": [
     "3.000 euros, sin excepción",
     "1 euro, con reglas de protección hasta llegar a 3.000",
     "60.000 euros",
     "No existe capital social"
    ],
    "correta": 1,
    "explicacao": "La ley fijó el mínimo en 1 euro, pero hasta alcanzar 3.000 euros hay una reserva legal reforzada y responsabilidad de los socios en la liquidación."
   },
   {
    "id": "b2-4",
    "tipo": "multipla",
    "licaoRef": "2-2",
    "enunciado": "¿Cuál es la principal diferencia de responsabilidad entre autónomo y SL?",
    "opcoes": [
     "Ninguna",
     "El autónomo responde con su patrimonio personal; la SL separa el patrimonio de la empresa del de los socios (con excepciones)",
     "La SL responde siempre con patrimonio personal",
     "El autónomo nunca paga impuestos"
    ],
    "correta": 1,
    "explicacao": "La SL crea una persona jurídica separada. Autónomo y persona física son la misma persona ante los acreedores."
   },
   {
    "id": "b2-5",
    "tipo": "multipla",
    "licaoRef": "2-3",
    "enunciado": "Un vendedor de fuera de la UE almacena productos en España mediante FBA. ¿Qué indica Amazon?",
    "opcoes": [
     "No hay que hacer nada",
     "Hay que registrarse en el IVA español y, para no residentes en la UE, puede hacer falta un representante fiscal",
     "Basta con abrir una cuenta de PayPal",
     "Solo necesita el EORI"
    ],
    "correta": 1,
    "explicacao": "Tener stock en España genera obligación de IVA local. Fuera de la UE puede exigir un representante fiscal con responsabilidad solidaria."
   },
   {
    "id": "b2-6",
    "tipo": "multipla",
    "licaoRef": "2-4",
    "enunciado": "¿Cuáles son los tipos de IVA de España según la Agencia Tributaria?",
    "opcoes": [
     "General 21 %, reducidos 10 % y 4 %",
     "General 25 %, reducido 12 %",
     "General 19 %, reducido 7 %",
     "Único del 10 %"
    ],
    "correta": 0,
    "explicacao": "21 % general, con el 10 % y el 4 % como tipos reducidos, y 0 % en ciertas operaciones."
   },
   {
    "id": "b2-7",
    "tipo": "multipla",
    "licaoRef": "2-4",
    "enunciado": "Un producto cuesta 24,20 € con el 21 % de IVA incluido. ¿Cuál es el precio sin IVA?",
    "opcoes": [
     "19,36 €",
     "20,00 €",
     "21,00 €",
     "24,20 €"
    ],
    "correta": 1,
    "explicacao": "24,20 ÷ 1,21 = 20,00 €. El IVA es de 4,20 €. Dividir entre 1,21 (no restar el 21 %) es el error más común."
   },
   {
    "id": "b2-8",
    "tipo": "vf",
    "licaoRef": "2-4",
    "enunciado": "El modelo 303 (IVA) trimestral se presenta entre los días 1 y 20 del mes siguiente al trimestre, salvo el 4.º trimestre, que va del 1 al 30 de enero.",
    "correta": true,
    "explicacao": "Plazos publicados por la Agencia Tributaria. Si el último día es inhábil, pasa al siguiente día hábil."
   },
   {
    "id": "b2-9",
    "tipo": "multipla",
    "licaoRef": "2-5",
    "enunciado": "¿Cuál es el límite de ventas a consumidores de otros países de la UE por debajo del cual se aplica el IVA de tu país?",
    "opcoes": [
     "1.000 euros al mes",
     "10.000 euros al año (sin IVA), sumando el año actual y el anterior",
     "35.000 euros al trimestre",
     "No existe límite"
    ],
    "correta": 1,
    "explicacao": "Al superar los 10.000 €, se aplica el IVA del país del cliente, y la OSS permite declararlo todo en un solo lugar."
   },
   {
    "id": "b2-10",
    "tipo": "vf",
    "licaoRef": "2-5",
    "enunciado": "Las declaraciones de la OSS sustituyen a las declaraciones normales de IVA de tu país.",
    "correta": false,
    "explicacao": "La OSS es adicional: sigues presentando las declaraciones nacionales."
   },
   {
    "id": "b2-11",
    "tipo": "multipla",
    "licaoRef": "2-6",
    "enunciado": "¿Para qué sirve el EORI?",
    "opcoes": [
     "Para vender en Amazon.de",
     "Para identificar a los operadores ante la aduana de la UE, necesario antes de declarar importaciones",
     "Para pagar el IVA",
     "Para registrar la marca"
    ],
    "correta": 1,
    "explicacao": "Es el número aduanero europeo. Para quien tiene NIF en España, es ES + NIF."
   },
   {
    "id": "b2-12",
    "tipo": "multipla",
    "licaoRef": "2-6",
    "enunciado": "¿Qué justificante de domicilio acepta Amazon en la verificación?",
    "opcoes": [
     "Un documento manuscrito",
     "Una captura de pantalla de la app del banco",
     "Una factura de suministros o un extracto fechado en los últimos 180 días, con el mismo nombre y dirección del registro",
     "Cualquier foto de la fachada"
    ],
    "correta": 2,
    "explicacao": "No puede ser manuscrito ni una captura de pantalla, y el nombre y la dirección deben coincidir con Seller Central."
   },
   {
    "id": "b2-13",
    "tipo": "multipla",
    "licaoRef": "2-7",
    "enunciado": "¿Quién aplica el marcado CE a un producto de marca propia fabricado por encargo?",
    "opcoes": [
     "Amazon",
     "Un organismo central de la UE",
     "El fabricante, entendido como quien manda producir y vende con su propio nombre",
     "El transportista"
    ],
    "correta": 2,
    "explicacao": "Quien vende con su propia marca asume el papel de fabricante y responde de la conformidad. No hay un organismo central que \"conceda\" el marcado."
   },
   {
    "id": "b2-14",
    "tipo": "ordenar",
    "licaoRef": "2-1",
    "enunciado": "Ordena una secuencia lógica para montar la estructura:",
    "opcoes": [
     "NIE y situación de residencia/trabajo resueltas",
     "Elección entre autónomo y SL con la gestoría",
     "Alta en Hacienda y Seguridad Social (o constitución de la SL)",
     "Apertura de la cuenta de vendedor en Amazon"
    ],
    "explicacao": "Primero identidad y permiso, luego la forma jurídica, después las altas y solo entonces la cuenta de vendedor."
   }
  ]
 },
 "licoes": [
  {
   "id": "2-1",
   "titulo": "NIE, TIE y NIF: existir para Hacienda",
   "minutos": 6,
   "fontes": [
    "aeat-eori",
    "sell-es-registro"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "porto",
     "titulo": "Antes de vender, tienes que existir en el sistema",
     "corpo": "España organiza casi todo en torno a **números de identificación**. Sin ellos no hay empresa, cuenta bancaria de empresa, contrato de alquiler ni cuenta de vendedor.\n\nLos principales para ti:\n\n- [[nie]]: número de identidad de extranjero, base de los trámites\n- **TIE:** la tarjeta física de residencia, para quien tiene autorización de residencia\n- [[nif]]: número fiscal; para extranjeros personas físicas suele ser el propio NIE, y para empresas es el código de la sociedad",
     "termos": [
      "nie",
      "nif"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "El NIE no es autorización de trabajo",
     "corpo": "Tener un NIE **no garantiza** que puedas trabajar o abrir un negocio por cuenta propia. Eso depende del **tipo de autorización de residencia** que tengas o vayas a pedir.\n\nComo te mudas a Madrid, la primera conversación es con un **abogado de extranjería**: qué visado o autorización permite la actividad empresarial y por cuenta propia en tu caso. Este curso **no sustituye** esa consulta."
    },
    {
     "tipo": "passos",
     "titulo": "El camino típico",
     "itens": [
      "Definir con el abogado de extranjería la autorización de residencia adecuada",
      "Obtener el NIE (la solicitud usa el formulario oficial EX-15, en el consulado o en España)",
      "Pedir la TIE, si corresponde a tu autorización",
      "Abrir una cuenta bancaria española",
      "Pasar a la forma jurídica (lección 2-2)"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Por qué Hacienda importa tanto",
     "corpo": "**Hacienda** es como todo el mundo llama a la Agencia Tributaria. Todos los impuestos que verás (IVA, IRPF, sociedades) pasan por ella.\n\nPor eso aquí, más que en ningún sitio, vale la regla: **ten todo en orden desde el primer día**. Un alta mal hecha cuesta más corregirla que hacerla bien.",
     "termos": [
      "hacienda"
     ]
    },
    {
     "tipo": "delegar",
     "titulo": "Quién lo hace por ti",
     "corpo": "**Abogado de extranjería:** autorización de residencia y trabajo, NIE, TIE.\n\n**Gestoría:** NIF, alta fiscal y Seguridad Social, una vez resuelta la base legal.\n\nPide un presupuesto **cerrado por escrito** antes de empezar. Los precios varían mucho y no hay una tarifa oficial única.",
     "termos": [
      "gestoria"
     ]
    },
    {
     "tipo": "dica",
     "corpo": "Ya tienes cuatro empresas en Brasil, y eso cuenta como experiencia, pero **no** se convierte automáticamente en una empresa española. Pregunta al abogado y a la gestoría cómo interactúa tu situación societaria brasileña con la apertura en España."
    }
   ],
   "quiz": [
    {
     "id": "2-1-q1",
     "tipo": "multipla",
     "enunciado": "¿Qué es el NIE?",
     "opcoes": [
      "El número de identificación de extranjeros en España",
      "El código del producto en Amazon",
      "El número de la tarjeta de crédito",
      "El impuesto sobre las ventas"
     ],
     "correta": 0,
     "explicacao": "El NIE identifica al extranjero ante la administración española."
    },
    {
     "id": "2-1-q2",
     "tipo": "vf",
     "enunciado": "Tener un NIE ya garantiza el derecho a abrir un negocio por cuenta propia.",
     "correta": false,
     "explicacao": "El NIE identifica, pero el permiso para trabajar viene de la autorización de residencia. Confírmalo con un abogado de extranjería."
    },
    {
     "id": "2-1-q3",
     "tipo": "multipla",
     "enunciado": "¿Cómo llaman los españoles a la Agencia Tributaria?",
     "opcoes": [
      "Gestoría",
      "Hacienda",
      "Cámara",
      "Registro"
     ],
     "correta": 1,
     "explicacao": "Hacienda es el apodo de la Agencia Tributaria. La gestoría es el despacho que trata con ella por ti."
    },
    {
     "id": "2-1-q4",
     "tipo": "ordenar",
     "enunciado": "Ordena la secuencia de preparación:",
     "opcoes": [
      "Resolver la residencia y el permiso de trabajo",
      "Obtener el NIE",
      "Abrir una cuenta bancaria española",
      "Definir la forma jurídica (autónomo o SL)"
     ],
     "explicacao": "Primero la base legal, después la identificación, el banco y solo entonces la estructura del negocio."
    }
   ]
  },
  {
   "id": "2-2",
   "titulo": "¿Autónomo o SL?",
   "minutos": 7,
   "fontes": [
    "ss-cotizacion-reta",
    "ss-tarifa-plana",
    "boe-rdl-13-2022",
    "boe-ley-18-2022",
    "aeat-sociedades"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Dos formas de ser empresario en España",
     "corpo": "El **autónomo** es la persona física que trabaja por cuenta propia. La **SL (sociedad limitada)** es una empresa con personalidad jurídica propia, con socios y capital social.\n\nPara quien vende en Amazon, esta elección define **cuánto pagas de cotización, cuánto de impuestos y cuánto de tu patrimonio personal queda expuesto**.",
     "termos": [
      "autonomo"
     ]
    },
    {
     "tipo": "comparacao",
     "titulo": "Lado a lado",
     "colunas": [
      "Autónomo",
      "SL"
     ],
     "linhas": [
      [
       "Responsabilidad",
       "Personal: tus bienes responden de las deudas",
       "Por regla general limitada al capital (con excepciones legales)"
      ],
      [
       "Coste de apertura",
       "Bajo: alta como autónomo",
       "Mayor: escritura, registro, gestoría"
      ],
      [
       "Capital social",
       "No existe",
       "Mínimo de 1 euro, según la Ley 18/2022"
      ],
      [
       "Cotización social",
       "Cuota mensual de autónomo por tramo de rendimientos",
       "El administrador-socio normalmente también cotiza como autónomo societario; confirmar con la gestoría"
      ],
      [
       "Impuesto sobre el beneficio",
       "IRPF progresivo en la persona física",
       "Impuesto sobre Sociedades"
      ],
      [
       "Contabilidad",
       "Más sencilla",
       "Más completa (cuentas anuales)"
      ]
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Lo oficial: cifras del autónomo",
     "corpo": "- **Cuota por rendimientos reales:** la Seguridad Social usa **tramos** de rendimiento neto. En 2026, el primer tramo (hasta 670 €/mes) tiene una base de cotización entre **653,59 € y 718,94 €**.\n- **Tipos en 2026:** 28,30 % por contingencias comunes, 1,30 % profesionales, 0,90 % cese de actividad, 0,10 % formación, más un 0,9 % del mecanismo de equidad intergeneracional.\n- **Tarifa plana (cuota reducida):** fue de **80 €/mes durante los 12 primeros meses entre 2023 y 2025** para quien empieza como autónomo o no ha estado de alta en los dos años anteriores, prorrogable si los rendimientos son bajos. **Desde 2026 el importe se fija cada año**, así que confirma el importe actual en la Seguridad Social."
    },
    {
     "tipo": "texto",
     "titulo": "Lo oficial: cifras de la SL",
     "corpo": "- **Capital mínimo:** 1 euro. Mientras no llegue a 3.000 euros, el 20 % del beneficio va a la reserva legal hasta sumar 3.000 y, en la liquidación, los socios responden de la diferencia.\n- **Constitución:** el sistema CIRCE permite iniciarla telemáticamente; la escritura notarial sigue existiendo.\n- **Impuesto sobre Sociedades:** tipo general del **25 %**; tipo del **15 % para entidades de nueva creación** (2024, 2025 y 2026), con condiciones.",
     "termos": []
    },
    {
     "tipo": "alerta",
     "corpo": "Estas cifras son **una referencia para planificar**, no para decidir solo. Hay condiciones, excepciones y cambios anuales. La cuenta final de qué forma compensa solo la puede hacer la gestoría, con tu situación real."
    },
    {
     "tipo": "delegar",
     "titulo": "Cómo elegir",
     "corpo": "Lleva a la gestoría tres datos: **cuánto piensas facturar el primer año**, **cuánto capital vas a invertir en stock** y **si tendrás socios**. Pide una simulación por escrito que compare autónomo y SL en cada escenario.\n\nRegla práctica: una inversión alta en stock y el deseo de proteger el patrimonio personal empujan hacia la **SL**; empezar pequeño y probar empuja hacia **autónomo**, y se puede cambiar después."
    },
    {
     "tipo": "dica",
     "corpo": "Muchos emprendedores empiezan como autónomos para validar el primer producto y **abren la SL cuando el negocio demuestra que funciona**. Lo importante es planificar la transición, porque el stock, la marca y las cuentas quedan a nombre de quien los creó."
    }
   ],
   "quiz": [
    {
     "id": "2-2-q1",
     "tipo": "multipla",
     "enunciado": "¿Cuál es la diferencia central de responsabilidad entre autónomo y SL?",
     "opcoes": [
      "El autónomo responde con bienes personales; la SL, por regla general, separa el patrimonio de los socios",
      "La SL responde siempre con bienes personales",
      "No hay diferencia",
      "El autónomo nunca tiene deudas"
     ],
     "correta": 0,
     "explicacao": "Autónomo y persona física son lo mismo para los acreedores; la SL crea una persona jurídica separada."
    },
    {
     "id": "2-2-q2",
     "tipo": "multipla",
     "enunciado": "¿Cuál es el tipo general del Impuesto sobre Sociedades en España, según la Agencia Tributaria?",
     "opcoes": [
      "10%",
      "15%",
      "25%",
      "35%"
     ],
     "correta": 2,
     "explicacao": "El 25 % es el tipo general, con un 15 % para entidades de nueva creación en los años indicados."
    },
    {
     "id": "2-2-q3",
     "tipo": "multipla",
     "enunciado": "La tarifa plana de autónomos...",
     "opcoes": [
      "Es un importe eterno de 80 euros",
      "Fue de 80 €/mes entre 2023 y 2025 y, a partir de 2026, se fija cada año",
      "Ya no existe",
      "Es solo para SL"
     ],
     "correta": 1,
     "explicacao": "El importe depende de la ley anual. Confírmalo en la Seguridad Social antes de usarlo en tus cuentas."
    },
    {
     "id": "2-2-q4",
     "tipo": "vf",
     "enunciado": "La Ley 18/2022 exige un capital social mínimo de 3.000 euros para constituir una SL.",
     "correta": false,
     "explicacao": "El mínimo es de 1 euro; los 3.000 euros son el umbral a partir del cual dejan de aplicarse las reglas de protección."
    },
    {
     "id": "2-2-q5",
     "tipo": "multipla",
     "enunciado": "¿Quién debe comparar los escenarios autónomo vs. SL en tu caso?",
     "opcoes": [
      "La gestoría, con datos de tu facturación e inversión",
      "El gestor de PPC",
      "El prep center",
      "Amazon"
     ],
     "correta": 0,
     "explicacao": "La gestoría conoce las normas y puede hacer la simulación con tus cifras."
    }
   ]
  },
  {
   "id": "2-3",
   "titulo": "Vender desde una empresa extranjera",
   "minutos": 6,
   "fontes": [
    "sell-es-registro",
    "sell-es-iva",
    "aeat-eori"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Amazon permite vender sin empresa española",
     "corpo": "Según Amazon.es, **no necesitas constituir una entidad jurídica española** para abrir una cuenta de vendedor. Es útil para quien ya tiene una empresa en otro país, como las tuyas en Brasil.\n\nPero la facilidad para abrir la cuenta **no elimina las obligaciones fiscales locales**."
    },
    {
     "tipo": "passos",
     "titulo": "Lo que Amazon pide a los vendedores extranjeros",
     "itens": [
      "Obtener un **NIF** de la Agencia Tributaria",
      "Si hay stock en España (por ejemplo, FBA), **registrarse en el IVA español**",
      "Fuera de la UE: nombrar un **representante fiscal**, que puede tener responsabilidad solidaria",
      "Importar de fuera de la UE: tener **EORI**",
      "Productos electrónicos, pilas y envases: **registro de responsabilidad del productor (RAP)** antes de activar los anuncios"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Tener stock en España lo cambia todo",
     "corpo": "Cuando guardas productos en un almacén en España, la venta se **localiza en España**. Eso exige **número de IVA español** y declaraciones periódicas (modelo 303). Amazon también indica que sus centros logísticos **no pueden ser el importador registrado** en las entradas desde fuera de la UE."
    },
    {
     "tipo": "comparacao",
     "titulo": "Empresa de Brasil vs. empresa en España",
     "colunas": [
      "Cuenta con empresa de fuera de la UE",
      "Cuenta con empresa/autónomo en España"
     ],
     "linhas": [
      [
       "Representante fiscal",
       "Puede exigirse, con responsabilidad solidaria",
       "No se aplica"
      ],
      [
       "IVA local",
       "Registro necesario si hay stock o ventas locales por encima de los límites",
       "Registro directo, sin intermediario"
      ],
      [
       "Banco y tarjeta",
       "Las cuentas y tarjetas extranjeras pueden funcionar, pero hay fricción",
       "Cuenta y tarjeta locales, más sencillo"
      ],
      [
       "Cuándo tiene sentido",
       "Prueba rápida con una estructura que ya existe",
       "Operación continua y a largo plazo"
      ]
     ],
     "nota": "Comparación cualitativa. La viabilidad de cada caso depende de tu tipo de residencia y de las normas del país de origen."
    },
    {
     "tipo": "delegar",
     "corpo": "**Contable de Brasil + gestoría en España:** los dos tienen que hablar sobre la tributación de la renta en Brasil y en España y sobre un posible convenio para evitar la doble imposición.\n\n**Amazon VAT Services:** Amazon ofrece en Seller Central un servicio que ayuda a registrar y declarar el IVA en varios países. Las condiciones y los costes cambian, así que pide también presupuesto a una gestoría para comparar."
    },
    {
     "tipo": "dica",
     "corpo": "Como vas a vivir en Madrid, el camino más limpio a largo plazo suele ser **tener la estructura en la propia España**. Pero confirma el impacto fiscal de trasladar la operación: el cliente de Amazon estará en Europa y el dueño será residente fiscal en España."
    }
   ],
   "quiz": [
    {
     "id": "2-3-q1",
     "tipo": "vf",
     "enunciado": "Para abrir una cuenta de vendedor en Amazon.es, es obligatorio constituir una empresa española.",
     "correta": false,
     "explicacao": "Según Amazon, no hace falta constituir una entidad española, pero hay obligaciones fiscales locales."
    },
    {
     "id": "2-3-q2",
     "tipo": "multipla",
     "enunciado": "¿Qué cambia cuando guardas stock en España?",
     "opcoes": [
      "Necesitas IVA español y las declaraciones periódicas",
      "Nada",
      "Solo pagas una tarifa a Amazon",
      "Debes abrir una tienda física"
     ],
     "correta": 0,
     "explicacao": "El stock local convierte la venta en española a efectos de IVA: alta y modelo 303."
    },
    {
     "id": "2-3-q3",
     "tipo": "multipla",
     "enunciado": "¿Quién puede ser el importador registrado en las entradas desde fuera de la UE?",
     "opcoes": [
      "El centro logístico de Amazon",
      "Tú o un colaborador (Amazon dice que sus centros no pueden)",
      "El cliente",
      "El banco"
     ],
     "correta": 1,
     "explicacao": "Amazon indica que sus centros logísticos no actúan como importador registrado."
    },
    {
     "id": "2-3-q4",
     "tipo": "multipla",
     "enunciado": "Para los vendedores de fuera de la UE, ¿qué cita Amazon como posible requisito?",
     "opcoes": [
      "Un representante fiscal, a veces con responsabilidad solidaria",
      "Permiso de conducir español",
      "Stock mínimo",
      "Nada"
     ],
     "correta": 0,
     "explicacao": "En algunos países se exige un representante fiscal, que puede responder solidariamente de las deudas de IVA."
    }
   ]
  },
  {
   "id": "2-4",
   "titulo": "IVA en España: tipos, declaraciones y recargo",
   "minutos": 8,
   "fontes": [
    "aeat-tipos-iva",
    "aeat-303-plazo",
    "aeat-recargo",
    "aeat-recargo-tipos",
    "sell-es-iva"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "IVA: el impuesto que pasa por tu caja",
     "corpo": "El [[iva]] es un impuesto sobre el consumo. Lo paga el **cliente final**, pero quien lo **recauda e ingresa** en Hacienda eres tú. La lógica es sencilla:\n\n**IVA cobrado a los clientes (repercutido) − IVA que pagaste en las compras (soportado) = IVA a pagar**\n\nSi el IVA de las compras es mayor, el saldo es a tu favor. Por eso el IVA **no es un coste del negocio**, siempre que estés bien dado de alta y tengas facturas correctas.",
     "termos": [
      "iva"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Los tipos de IVA en España",
     "corpo": "Según la Agencia Tributaria:\n\n- **Tipo general: 21 %**, el que se aplica a la mayoría de los productos\n- **Tipos reducidos: 10 % y 4 %**, para bienes y servicios concretos\n- **0 %:** ciertas operaciones\n\nQué producto va en qué tipo lo definen tablas anuales de la Agencia Tributaria. **Antes de elegir un producto**, confirma el tipo aplicable: alimentos, libros y artículos de salud suelen tener un tratamiento distinto."
    },
    {
     "tipo": "calculo",
     "titulo": "Precio con y sin IVA",
     "corpo": "El precio en Amazon.es es **con IVA incluido**. Mira un producto a 24,20 €:",
     "linhas": [
      [
       "Precio de venta al cliente (con IVA)",
       "24,20 €"
      ],
      [
       "Precio sin IVA (24,20 ÷ 1,21)",
       "20,00 €"
      ],
      [
       "IVA a ingresar en Hacienda (21 %)",
       "4,20 €"
      ]
     ],
     "total": [
      "Ingreso real de la venta",
      "20,00 €"
     ],
     "nota": "Error común: calcular \"precio − 21 %\". Lo correcto es dividir entre 1,21."
    },
    {
     "tipo": "texto",
     "titulo": "La declaración periódica: modelo 303",
     "corpo": "La declaración de IVA se llama **modelo 303**. Plazos publicados por la Agencia Tributaria:\n\n- **Trimestral:** del 1 al 20 de abril, julio y octubre; el 4.º trimestre, del 1 al 30 de enero\n- **Mensual:** del 1 al 30 del mes siguiente (enero va hasta final de febrero)\n- Si el último día es inhábil, pasa al siguiente día hábil\n\nTambién está el **modelo 390**, el resumen anual. La gestoría se ocupa de los dos.",
     "termos": []
    },
    {
     "tipo": "texto",
     "titulo": "Recargo de equivalencia: el régimen de los minoristas",
     "corpo": "Algunos minoristas están en el **recargo de equivalencia**: pagan un recargo al proveedor en la compra y, a cambio, **no presentan la declaración del IVA de las ventas**.\n\nSegún la Agencia Tributaria, los tipos son:\n\n- IVA del 21 %: recargo del **5,2 %**\n- IVA del 10 %: recargo del **1,4 %**\n- IVA del 4 %: recargo del **0,5 %**\n\nEl régimen se aplica a **comerciantes minoristas personas físicas** (o entidades en atribución de rentas) que revenden **sin fabricar ni transformar**, con más del 80 % de las ventas a consumidores finales. Hay categorías excluidas, como vehículos, joyas y materiales de construcción."
    },
    {
     "tipo": "alerta",
     "titulo": "Puede aplicarse a ti o no",
     "corpo": "Quien vende en Amazon con una **SL** no entra en este régimen, porque es para personas físicas. Para el autónomo depende del tipo de actividad, y hay implicaciones al vender a otros países de la UE.\n\n**Pregunta para la gestoría:** \"¿Mi caso encaja en el recargo de equivalencia? ¿Qué cambia para el IVA de Amazon y de las ventas en la UE?\""
    },
    {
     "tipo": "delegar",
     "corpo": "**Gestoría:** modelos 303 y 390, alta en el IVA, recargo de equivalencia.\n\n**Tú:** guardar **todas las facturas** de compra (proveedor, flete, servicios) con los datos fiscales de tu empresa. Sin factura correcta no hay IVA que deducir.",
     "termos": [
      "gestoria"
     ]
    }
   ],
   "quiz": [
    {
     "id": "2-4-q1",
     "tipo": "multipla",
     "enunciado": "¿Cuál es el tipo general de IVA en España?",
     "opcoes": [
      "10%",
      "19%",
      "21%",
      "25%"
     ],
     "correta": 2,
     "explicacao": "El 21 % es el tipo general, con el 10 % y el 4 % como tipos reducidos."
    },
    {
     "id": "2-4-q2",
     "tipo": "multipla",
     "enunciado": "Un producto cuesta 12,10 € con el 21 % de IVA incluido. ¿Cuánto recibes sin IVA?",
     "opcoes": [
      "9,57 €",
      "10,00 €",
      "10,50 €",
      "12,10 €"
     ],
     "correta": 1,
     "explicacao": "12,10 ÷ 1,21 = 10,00 €. El IVA es de 2,10 €."
    },
    {
     "id": "2-4-q3",
     "tipo": "vf",
     "enunciado": "El IVA que pagas en las compras de stock es, por regla general, un coste definitivo del negocio.",
     "correta": false,
     "explicacao": "Si estás bien dado de alta y tienes facturas correctas, el IVA pagado en las compras se deduce del IVA cobrado a los clientes."
    },
    {
     "id": "2-4-q4",
     "tipo": "multipla",
     "enunciado": "¿Cuál es el plazo del modelo 303 del 4.º trimestre?",
     "opcoes": [
      "Del 1 al 20 de enero",
      "Del 1 al 30 de enero",
      "Del 1 al 30 de diciembre",
      "Hasta el 31 de marzo"
     ],
     "correta": 1,
     "explicacao": "Los demás trimestres van del 1 al 20 del mes siguiente; el 4.º, del 1 al 30 de enero."
    },
    {
     "id": "2-4-q5",
     "tipo": "multipla",
     "enunciado": "En el recargo de equivalencia, para un producto con IVA del 21 %, ¿cuál es el recargo?",
     "opcoes": [
      "0,5%",
      "1,4%",
      "5,2%",
      "21%"
     ],
     "correta": 2,
     "explicacao": "5,2 % (y 1,4 % para el 10 %, 0,5 % para el 4 %)."
    },
    {
     "id": "2-4-q6",
     "tipo": "lacuna",
     "enunciado": "El resumen anual del IVA se llama modelo ___.",
     "opcoes": [
      "390",
      "303",
      "036"
     ],
     "correta": 0,
     "explicacao": "El 303 es la declaración periódica y el 390 es el resumen anual."
    }
   ]
  },
  {
   "id": "2-5",
   "titulo": "Vender a la UE: la OSS y el límite de 10.000",
   "minutos": 6,
   "fontes": [
    "ue-oss",
    "sell-es-iva"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "El problema: vender a otro país de la UE",
     "corpo": "Si vendes desde un país de la UE a consumidores finales de otro, el IVA es, por regla general, **el del país del cliente**. Sin un sistema sencillo, tendrías que registrarte en el IVA de cada país.\n\nLa solución es la [[oss]] (One Stop Shop, ventanilla única): **declaras y pagas el IVA de todos los países en un solo lugar**, en tu país de identificación.",
     "termos": [
      "oss"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "El límite de 10.000 euros",
     "corpo": "Según la Comisión Europea, existe un **límite anual de 10.000 euros (sin IVA)** para las ventas a distancia de bienes a consumidores de otros países de la UE. Condiciones:\n\n- cuenta la suma del **año actual y el anterior**\n- tienes que estar establecido en **un solo** país de la UE\n- **por debajo** del límite: puedes aplicar el IVA de tu país\n- **por encima:** se aplica siempre el IVA del país de destino\n- puedes optar por aplicar las reglas generales desde el principio, pero quedas vinculado a esa elección durante dos años naturales"
    },
    {
     "tipo": "calculo",
     "titulo": "Ejemplo de seguimiento",
     "corpo": "Una empresa establecida solo en España sigue sus ventas a consumidores de otros países de la UE:",
     "linhas": [
      [
       "Ventas a distancia UE el año pasado",
       "6.200 €"
      ],
      [
       "Ventas a distancia UE este año hasta septiembre",
       "4.100 €"
      ],
      [
       "Suma (año actual + anterior)",
       "10.300 €"
      ]
     ],
     "total": [
      "Límite de 10.000 € superado",
      "Sí"
     ],
     "nota": "Valores de ejemplo. Al superar el límite, las ventas siguientes llevan el IVA del país del cliente."
    },
    {
     "tipo": "passos",
     "titulo": "Cómo funciona la OSS en la práctica",
     "itens": [
      "Te registras en la OSS en la Agencia Tributaria, tu \"Estado de identificación\"",
      "Cobras el IVA del país del cliente en las ventas a distancia",
      "Presentas **una declaración trimestral** de OSS",
      "España reparte el impuesto a los demás países",
      "Sigues presentando el modelo 303 normal: **la OSS es adicional**"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "El stock en otros países es otro tema",
     "corpo": "La OSS cubre las ventas a distancia desde **tu** país. Si guardas stock en otro país (FBA Pan-EU), Amazon indica que necesitarás **IVA registrado en ese país**. Eso llega en el Mundo 9."
    },
    {
     "tipo": "delegar",
     "corpo": "**Gestoría:** alta en la OSS y declaración trimestral. Conviene pedirle también que siga el límite de 10.000 € para avisarte cuando te acerques."
    },
    {
     "tipo": "dica",
     "corpo": "Quien empieza solo en España **no necesita la OSS ahora**. Pero entiende el concepto: es la base de la expansión del Mundo 9."
    }
   ],
   "quiz": [
    {
     "id": "2-5-q1",
     "tipo": "multipla",
     "enunciado": "¿Qué es la OSS?",
     "opcoes": [
      "Un régimen para declarar y pagar, en un solo lugar, el IVA de las ventas a consumidores de otros países de la UE",
      "Un tipo de anuncio",
      "Un programa logístico",
      "Un sello de calidad"
     ],
     "correta": 0,
     "explicacao": "La ventanilla única concentra en tu país la declaración del IVA de toda la UE."
    },
    {
     "id": "2-5-q2",
     "tipo": "multipla",
     "enunciado": "¿Cuál es el límite anual que aparece para las ventas a distancia de bienes en la UE?",
     "opcoes": [
      "1.000 €",
      "10.000 € sin IVA",
      "100.000 €",
      "No existe"
     ],
     "correta": 1,
     "explicacao": "10.000 € (sin IVA), sumando el año actual y el anterior, para empresas establecidas en un solo país."
    },
    {
     "id": "2-5-q3",
     "tipo": "vf",
     "enunciado": "Las declaraciones de la OSS sustituyen a las declaraciones normales de tu país.",
     "correta": false,
     "explicacao": "La OSS es adicional y las declaraciones nacionales se mantienen."
    },
    {
     "id": "2-5-q4",
     "tipo": "multipla",
     "enunciado": "Por encima del límite, ¿qué IVA se aplica a las ventas a consumidores de otro país de la UE?",
     "opcoes": [
      "El de tu país",
      "El del país del cliente",
      "Ninguno",
      "El de Amazon"
     ],
     "correta": 1,
     "explicacao": "Superado el límite, se aplica el IVA del país de destino."
    }
   ]
  },
  {
   "id": "2-6",
   "titulo": "EORI, verificación y apertura de la cuenta",
   "minutos": 7,
   "fontes": [
    "aeat-eori",
    "sell-es-registro",
    "sell-es-verificacion",
    "sell-es-precios"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "EORI: el pasaporte aduanero",
     "corpo": "El [[eori]] es un número **único en la UE** que se usa en las relaciones con la aduana, como las declaraciones de importación. Es obligatorio **antes** de presentar una declaración aduanera.\n\nSegún la Agencia Tributaria:\n\n- para operadores con NIF español, el número es **ES + NIF**\n- se solicita en la **Sede Electrónica** de la Agencia Tributaria o por escrito a la dependencia de aduanas de tu domicilio fiscal\n- la página oficial **no menciona ningún coste**\n\nSi vas a importar de China o de cualquier país de fuera de la UE, lo necesitas.",
     "termos": [
      "eori"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Individual o Profesional",
     "corpo": "Según Amazon.es:\n\n- **Individual:** para quien vende menos de 35 artículos al mes. Paga **0,99 € por artículo vendido** (sin IVA).\n- **Profesional:** para más de 35 artículos al mes. Paga **39 € al mes** (sin IVA), sin la tarifa de 0,99 por artículo.\n\nAmbos pagan también las tarifas por venta según la categoría.\n\nPara quien quiere construir una marca y vender con regularidad, el **Profesional** suele ser el camino natural (confirma en Seller Central qué funciones incluye cada plan)."
    },
    {
     "tipo": "passos",
     "titulo": "Los 6 pasos del registro",
     "itens": [
      "Información empresarial: país, tipo de negocio, nombre, dirección, teléfono (verificado por SMS o llamada)",
      "Información del vendedor: documento de identidad oficial, datos personales, justificante de domicilio",
      "Facturación: tarjeta de crédito con CVV (no sirven tarjetas prepago, vales ni PayPal)",
      "Tienda y productos: nombre de la tienda y códigos de producto, si procede",
      "Cuenta bancaria: titular, número y código; extracto de los últimos 180 días si no se verifica automáticamente",
      "Verificación de identidad: foto de la cara y del documento, videollamada o envío del documento"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Lo que verifica Amazon",
     "corpo": "La verificación abarca a **todas las personas vinculadas a la cuenta** (contacto principal, representante legal, beneficiarios, usuarios).\n\n- **Identidad:** pasaporte, documento nacional, permiso de conducir o título de residencia, vigentes y con foto\n- **Domicilio:** factura de suministros o extracto bancario **de los últimos 180 días**, con el mismo nombre y dirección del registro; **no puede** ser manuscrito ni una captura de pantalla\n- **Cuenta bancaria** y, para empresas, **documentos de la empresa**\n\nAmazon indica que la verificación suele tardar **tres días hábiles o menos** y acepta documentos en inglés y en otros idiomas admitidos, incluido el portugués. Otros idiomas pueden requerir traducción oficial."
    },
    {
     "tipo": "alerta",
     "titulo": "Errores que bloquean la cuenta",
     "corpo": "- **Nombre y dirección distintos** entre el documento y el registro\n- **Justificante antiguo** (más de 180 días)\n- **Captura de pantalla** en lugar del documento original\n- **Más de una cuenta** para la misma persona, lo que incumple las normas\n\nSin la información exigida, la cuenta queda restringida y **no vende**. Hazlo una vez, con calma y con los documentos a mano."
    },
    {
     "tipo": "delegar",
     "corpo": "**Gestoría:** NIF y EORI. **Tú:** verificación de identidad (es personal y la foto de la cara no se puede delegar). **Contable:** comprobar que el nombre de la cuenta bancaria coincide con el del registro en Amazon.\n\nAprovecha para guardar una **carpeta digital** con todos los documentos y sus fechas de caducidad."
    },
    {
     "tipo": "dica",
     "corpo": "Si todavía no tienes los documentos españoles, lo que Amazon pide es **coherencia**: el mismo nombre y la misma dirección en todas partes. Resuelve la base (NIE, domicilio, banco) **antes** de abrir la cuenta."
    }
   ],
   "quiz": [
    {
     "id": "2-6-q1",
     "tipo": "multipla",
     "enunciado": "Para operadores con NIF en España, ¿cómo se forma el EORI?",
     "opcoes": [
      "ES + NIF",
      "EU + NIE",
      "Un número sorteado por Amazon",
      "Solo el número de pasaporte"
     ],
     "correta": 0,
     "explicacao": "La Agencia Tributaria lo indica: ES seguido del NIF."
    },
    {
     "id": "2-6-q2",
     "tipo": "multipla",
     "enunciado": "¿Qué plan se recomienda para quien vende más de 35 artículos al mes?",
     "opcoes": [
      "Individual",
      "Profesional",
      "Handmade",
      "Prime"
     ],
     "correta": 1,
     "explicacao": "El Individual es para menos de 35; el Profesional, para más de 35 artículos, a 39 €/mes sin IVA."
    },
    {
     "id": "2-6-q3",
     "tipo": "multipla",
     "enunciado": "¿Qué justificante de domicilio acepta Amazon?",
     "opcoes": [
      "Manuscrito",
      "Captura de pantalla",
      "Factura de suministros o extracto de los últimos 180 días, igual que el registro",
      "Foto de la casa"
     ],
     "correta": 2,
     "explicacao": "Debe estar fechado en los últimos 180 días y coincidir con el nombre y la dirección de Seller Central."
    },
    {
     "id": "2-6-q4",
     "tipo": "vf",
     "enunciado": "Las tarjetas prepago y PayPal se aceptan en el registro.",
     "correta": false,
     "explicacao": "Amazon acepta AMEX, VISA y Mastercard; prepago, vales y PayPal no."
    },
    {
     "id": "2-6-q5",
     "tipo": "multipla",
     "enunciado": "El EORI es obligatorio para...",
     "opcoes": [
      "Todos los vendedores, siempre",
      "Quien presenta declaraciones aduaneras, como importaciones de fuera de la UE",
      "Quien vende solo en Brasil",
      "Quien usa FBM"
     ],
     "correta": 1,
     "explicacao": "El EORI hace falta antes de presentar una declaración aduanera. Quien no importa de fuera de la UE puede que ni lo necesite."
    }
   ]
  },
  {
   "id": "2-7",
   "titulo": "Normas del producto: CE, GPSR y RAP",
   "minutos": 8,
   "fontes": [
    "ue-ce",
    "ue-gpsr-faq",
    "miteco-envases-faq",
    "miteco-raee",
    "sell-es-registro"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Un buen producto también tiene que ser legal",
     "corpo": "Antes de vender, el producto debe cumplir las normas de la UE: **seguridad, identificación del fabricante y responsabilidad ambiental**. Si falla, Amazon bloquea la oferta, el cliente se hace daño o la autoridad multa.\n\nTres siglas dominan esta conversación: **CE**, **GPSR** y **RAP (EPR)**."
    },
    {
     "tipo": "texto",
     "titulo": "Marcado CE",
     "corpo": "El marcado CE indica que **el fabricante declara** que el producto cumple las normas de la UE aplicables. Puntos oficiales:\n\n- **no existe un organismo central** que conceda el marcado\n- solo es obligatorio en **categorías reguladas**: juguetes, electrónica y aparatos eléctricos, baterías, máquinas, equipos de protección individual, productos sanitarios y otras\n- si la UE no lo exige para el producto, **no debe usarse**\n- lo aplica el **fabricante**: quien manda producir y vende con su propio nombre o marca\n- exige documentación técnica y declaración UE de conformidad, guardadas durante **al menos 10 años**\n- tamaño mínimo del marcado: **5 mm**",
     "termos": []
    },
    {
     "tipo": "texto",
     "titulo": "GPSR: el reglamento general de seguridad",
     "corpo": "El **GPSR** (Reglamento General de Seguridad de los Productos) se aplica desde el 13 de diciembre de 2024 a los productos de consumo comercializados en la UE, incluidos los vendidos en línea. Puntos de la Comisión Europea:\n\n- debe haber una **persona responsable establecida en la UE** para cada producto\n- en el producto figuran **nombre del fabricante, marca, dirección postal y dirección electrónica**; un código QR por sí solo **no basta**\n- si el fabricante es de fuera de la UE, la oferta muestra también los datos de la persona responsable\n- el fabricante conserva **el análisis de riesgos y la documentación técnica durante al menos 10 años**\n- los marketplaces deben mostrar esta información en la oferta\n\nSi vendes una marca propia fabricada en China, **tú eres el fabricante a efectos legales**, y necesitas a alguien en la UE como persona responsable. Puedes ser tú, si estás establecido en la UE.",
     "termos": []
    },
    {
     "tipo": "texto",
     "titulo": "RAP: pagar por el fin de vida de lo que pones en el mercado",
     "corpo": "La **responsabilidad ampliada del productor (RAP, en inglés EPR)** obliga a quien pone productos en el mercado a financiar la gestión de los residuos. En España, los flujos que más afectan a los vendedores son:\n\n- **Envases:** alta en el **Registro de Productores de Producto** (MITECO) e informe anual. Los productores sin establecimiento en España deben nombrar un **representante autorizado**. Si no lo hacen, la responsabilidad puede pasar subsidiariamente a otros agentes, y la plataforma puede asumir parte de las obligaciones.\n- **Aparatos eléctricos y electrónicos (RAEE):** el fabricante debe financiar la gestión de los residuos, normalmente a través de sistemas colectivos.\n- **Pilas y baterías:** régimen propio.\n\nAmazon.es avisa de que **la electrónica, las pilas y los envases exigen registro RAP antes de activar los anuncios**."
    },
    {
     "tipo": "alerta",
     "titulo": "No es opcional ni solo para los grandes",
     "corpo": "El **registro RAP y la identificación de la persona responsable** valen para empresas de cualquier tamaño. Las facturas de los proveedores de envases deben incluir el número de registro del productor, y **su ausencia puede indicar un incumplimiento** del proveedor.\n\nUn producto que depende de un informe (juguete, eléctrico) puede exigir **ensayos de laboratorio**, con un coste que tiene que entrar en tus cuentas del Mundo 5."
    },
    {
     "tipo": "delegar",
     "titulo": "Quién lo hace por ti",
     "corpo": "**Fábrica/agente de sourcing:** aportar la declaración de conformidad y los informes de ensayo. **Laboratorio de ensayos:** pruebas cuando se exijan. **Servicio de representante autorizado / persona responsable GPSR:** lo ofrecen empresas especializadas en la UE. **Sistema colectivo de RAP (SCRAP):** se ocupa de envases y RAEE. **Gestoría o consultor ambiental:** las altas en el MITECO.\n\nPide siempre **los documentos por escrito** y guárdalos al menos 10 años."
    },
    {
     "tipo": "dica",
     "corpo": "En la selección (Mundo 3), al principio elige **productos sin exigencia de CE o sin electrónica**: menos papeleo, menos coste y menos riesgo. Ganas experiencia antes de enfrentarte a categorías reguladas."
    }
   ],
   "quiz": [
    {
     "id": "2-7-q1",
     "tipo": "multipla",
     "enunciado": "¿Quién aplica el marcado CE?",
     "opcoes": [
      "Amazon",
      "Un organismo central de la UE",
      "El fabricante, incluido quien vende con su propia marca",
      "La aduana"
     ],
     "correta": 2,
     "explicacao": "El fabricante declara la conformidad. No existe un organismo que conceda el marcado."
    },
    {
     "id": "2-7-q2",
     "tipo": "vf",
     "enunciado": "Todo producto vendido en la UE debe llevar el marcado CE.",
     "correta": false,
     "explicacao": "Solo los productos de categorías reguladas. Si no hay exigencia, el marcado no debe usarse."
    },
    {
     "id": "2-7-q3",
     "tipo": "multipla",
     "enunciado": "¿Durante cuánto tiempo guarda el fabricante la documentación técnica, según las fuentes oficiales?",
     "opcoes": [
      "1 año",
      "3 años",
      "Al menos 10 años",
      "No hace falta guardarla"
     ],
     "correta": 2,
     "explicacao": "Para CE y GPSR, la documentación técnica se guarda al menos 10 años."
    },
    {
     "id": "2-7-q4",
     "tipo": "multipla",
     "enunciado": "¿El código QR en el producto sustituye a la información del fabricante?",
     "opcoes": [
      "Sí, por completo",
      "No: sirve de complemento, pero no sustituye a la información física",
      "Solo si es de color",
      "Solo en electrónica"
     ],
     "correta": 1,
     "explicacao": "La Comisión afirma que la información solo digital no basta y debe figurar en el producto."
    },
    {
     "id": "2-7-q5",
     "tipo": "multipla",
     "enunciado": "Quien vende una marca propia fabricada por una fábrica en Asia es, a efectos legales...",
     "opcoes": [
      "Solo un revendedor",
      "El fabricante, con las responsabilidades correspondientes",
      "Irresponsable de la seguridad",
      "Representado automáticamente por Amazon"
     ],
     "correta": 1,
     "explicacao": "Quien vende con su propio nombre asume las obligaciones de fabricante."
    },
    {
     "id": "2-7-q6",
     "tipo": "multipla",
     "enunciado": "¿Qué dice Amazon.es sobre la electrónica, las pilas y los envases?",
     "opcoes": [
      "No hay requisitos",
      "Exigen registro de responsabilidad del productor antes de activar los anuncios",
      "Están prohibidos",
      "Solo los puede vender Amazon"
     ],
     "correta": 1,
     "explicacao": "El registro RAP es un requisito previo para activar anuncios en esas categorías."
    }
   ]
  }
 ]
};

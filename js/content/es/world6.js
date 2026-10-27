// Mundo 6 (es). Gerado por tools/i18n-mundos.mjs a partir de js/content/world6.js.
export default {
 "id": 6,
 "chefe": {
  "id": "esfinge",
  "nome": "Esfinge del Algoritmo",
  "hp": 100,
  "fala": "Descíframe o pierdes el escaparate: ¿qué hace que una página venda sin anuncios?",
  "derrota": "Has leído bien el enigma. El escaparate es tuyo.",
  "perguntas": [
   {
    "id": "b6-1",
    "tipo": "multipla",
    "licaoRef": "6-1",
    "enunciado": "¿Hasta cuántos caracteres puede tener el título de un producto en la mayoría de las categorías?",
    "opcoes": [
     "80",
     "150",
     "200",
     "400"
    ],
    "correta": 2,
    "explicacao": "200 caracteres, incluidos los espacios, según Amazon.es."
   },
   {
    "id": "b6-2",
    "tipo": "vf",
    "licaoRef": "6-1",
    "enunciado": "Un título puede contener símbolos como ! y $ para llamar la atención.",
    "correta": false,
    "explicacao": "Esos caracteres no están permitidos (salvo como parte del nombre de la marca)."
   },
   {
    "id": "b6-3",
    "tipo": "multipla",
    "licaoRef": "6-2",
    "enunciado": "¿Cómo debe ser la imagen principal, según Amazon.es?",
    "opcoes": [
     "Fondo blanco puro, producto ocupando alrededor del 85 %, sin texto, logotipo ni marca de agua",
     "Fondo de color con sello de oferta",
     "Foto con modelo y texto",
     "Dibujo del producto"
    ],
    "correta": 0,
    "explicacao": "Fondo blanco puro (255,255,255), producto en alrededor del 85 % del encuadre y sin textos."
   },
   {
    "id": "b6-4",
    "tipo": "multipla",
    "licaoRef": "6-2",
    "enunciado": "¿Cuáles son las tres imágenes que Amazon dice que necesita toda página?",
    "opcoes": [
     "Producto sobre fondo blanco, producto en contexto e imagen con información del producto",
     "Tres fotos iguales",
     "Logotipo, sello y precio",
     "Vídeo, audio y texto"
    ],
    "correta": 0,
    "explicacao": "Fondo blanco, contexto y una imagen informativa (medidas, por ejemplo)."
   },
   {
    "id": "b6-5",
    "tipo": "multipla",
    "licaoRef": "6-3",
    "enunciado": "¿Cuál es el mejor principio para escribir el título y las viñetas en español?",
    "opcoes": [
     "Escribir para personas, con las palabras que usa el cliente español",
     "Repetir palabras clave al máximo",
     "Traducir palabra por palabra",
     "Usar solo mayúsculas"
    ],
    "correta": 0,
    "explicacao": "La regla de repetición y el sentido común mandan escribir para el cliente, no para el algoritmo."
   },
   {
    "id": "b6-6",
    "tipo": "multipla",
    "licaoRef": "6-4",
    "enunciado": "¿Cuánto cuesta la tasa base de una marca de la UE en la EUIPO para la primera clase?",
    "opcoes": [
     "85 €",
     "850 €",
     "8.500 €",
     "Gratis"
    ],
    "correta": 1,
    "explicacao": "850 € la primera clase, 50 € la segunda y 150 € por cada clase a partir de la tercera."
   },
   {
    "id": "b6-7",
    "tipo": "multipla",
    "licaoRef": "6-4",
    "enunciado": "Registrar la marca en Brand Registry de Amazon.es cuesta...",
    "opcoes": [
     "39 €",
     "Nada: es un servicio gratuito",
     "850 €",
     "Depende de la facturación"
    ],
    "correta": 1,
    "explicacao": "Amazon afirma que registrar una marca es gratuito (la suscripción de vendedor va aparte)."
   },
   {
    "id": "b6-8",
    "tipo": "multipla",
    "licaoRef": "6-4",
    "enunciado": "¿Cuál de estas ventajas es exclusiva de las marcas inscritas en Brand Registry?",
    "opcoes": [
     "Brand Analytics",
     "Comisión cero",
     "Stock gratis",
     "Distintivo Prime automático"
    ],
    "correta": 0,
    "explicacao": "Brand Analytics es exclusivo para marcas inscritas."
   },
   {
    "id": "b6-9",
    "tipo": "multipla",
    "licaoRef": "6-5",
    "enunciado": "Según GS1 Spain, ¿qué acepta Amazon como código de barras válido?",
    "opcoes": [
     "Cualquier EAN que salga de un generador en línea",
     "Solo códigos únicos, auténticos y globales de GS1",
     "Códigos de cualquier color",
     "Ningún código"
    ],
    "correta": 1,
    "explicacao": "GS1 afirma que Amazon no acepta cualquier EAN, solo códigos GS1 auténticos."
   },
   {
    "id": "b6-10",
    "tipo": "multipla",
    "licaoRef": "6-5",
    "enunciado": "¿Cuándo NO está disponible la exención de GTIN?",
    "opcoes": [
     "Cuando el producto o el embalaje ya tienen código GS1",
     "Cuando el producto es azul",
     "Cuando está fabricado en Europa",
     "Nunca está disponible"
    ],
    "correta": 0,
    "explicacao": "Si hay un código GS1 autorizado, debe usarse ese código en lugar de la exención."
   },
   {
    "id": "b6-11",
    "tipo": "ordenar",
    "licaoRef": "6-4",
    "enunciado": "Ordena el camino para tener la marca protegida en Amazon:",
    "opcoes": [
     "Comprobar si el nombre está disponible",
     "Registrar la marca (o solicitud pendiente mediante IP Accelerator)",
     "Inscribir la marca en el Registro de Marcas",
     "Usar el Contenido A+, Brand Analytics y las herramientas de protección"
    ],
    "explicacao": "Disponibilidad, registro, inscripción y solo entonces las ventajas."
   }
  ]
 },
 "licoes": [
  {
   "id": "6-1",
   "titulo": "Anatomía de una página de producto",
   "minutos": 7,
   "fontes": [
    "sell-es-vender-online",
    "sc-es-titulos"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "torre",
     "titulo": "El escaparate decide si el cliente compra",
     "corpo": "Con el producto elegido y el stock en camino, toca construir la **página de producto**. Tiene que hacer tres cosas en segundos: **que la encuentren**, **llamar la atención** y **convencer**.\n\nUna página tiene estos bloques, de arriba abajo:"
    },
    {
     "tipo": "passos",
     "titulo": "Los bloques de la página",
     "itens": [
      "**Título:** qué es el producto y para quién",
      "**Imágenes y vídeo:** la primera impresión (lección 6-2)",
      "**Precio y botón de compra** (Buy Box)",
      "**Puntos clave (viñetas):** frases cortas con ventajas",
      "**Descripción y Contenido A+:** la historia completa (para dueños de marca)",
      "**Reseñas y preguntas:** la prueba social",
      "**Palabras clave de búsqueda (entre bastidores):** para que Amazon encuentre el producto"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Título: lo que dice Amazon.es",
     "corpo": "Según la página de listados de Amazon.es, el título tiene **como máximo 200 caracteres**, con la **primera letra de cada palabra en mayúscula**. Desde el **21 de enero de 2025** se aplican también estas normas:\n\n- **sin los caracteres** ! $ ? _ { } ^ (salvo en el nombre de la marca)\n- **la misma palabra no puede aparecer más de dos veces** (salvo preposiciones, artículos y conjunciones)\n\nEl límite exacto varía según la categoría. La fórmula práctica: **Marca + qué es + característica principal + para quién o tamaño/color**."
    },
    {
     "tipo": "exemplo",
     "titulo": "Ejemplo ilustrativo de título",
     "corpo": "**Marca ficticia:** *Cocinita*\n\n\"Cocinita Organizador Magnético para Cocina, Soporte de Especias con Imán Fuerte, Pack de 6 Botes de Cristal, Color Negro\"\n\nTiene marca, qué es, el diferencial (imán fuerte, 6 botes) y el color. **Sin repetir palabras y sin símbolos prohibidos.**"
    },
    {
     "tipo": "texto",
     "titulo": "Viñetas, descripción y palabras clave",
     "corpo": "- **Viñetas:** Amazon.es dice que son frases cortas con características y ventajas. La página no indica cuántas, así que sigue los campos del formulario.\n- **Descripción:** la página recomienda que los anuncios sean **concisos, precisos y fáciles de entender**.\n- **Palabras clave:** los términos de búsqueda son campos del formulario. No repitas las que ya están en el título y **no uses marcas de la competencia**.\n- **Variaciones:** colores, aromas o tamaños pueden ir en la **misma página** como variaciones.",
     "termos": []
    },
    {
     "tipo": "delegar",
     "corpo": "**Redactor nativo de España:** título, viñetas y descripción. **Diseñador/fotógrafo:** imágenes. **Asistente virtual:** alta en Seller Central. **Tú:** apruebas el conjunto como si fueras el cliente."
    },
    {
     "tipo": "dica",
     "corpo": "Abre la página de los **3 mejores competidores** y lee solo el **título y las primeras viñetas**. Lo que se repite es lo que el cliente espera. Lo que haces distinto es lo que te hará destacar."
    }
   ],
   "quiz": [
    {
     "id": "6-1-q1",
     "tipo": "multipla",
     "enunciado": "¿Cuál es el límite de caracteres del título en la mayoría de las categorías?",
     "opcoes": [
      "100",
      "200",
      "500",
      "1000"
     ],
     "correta": 1,
     "explicacao": "200 caracteres, incluidos los espacios."
    },
    {
     "id": "6-1-q2",
     "tipo": "vf",
     "enunciado": "La misma palabra se puede repetir varias veces en el título.",
     "correta": false,
     "explicacao": "No más de dos veces, salvo preposiciones, artículos y conjunciones."
    },
    {
     "id": "6-1-q3",
     "tipo": "multipla",
     "enunciado": "¿Cuál es la fórmula práctica de un título?",
     "opcoes": [
      "Marca + qué es + característica principal + tamaño o color",
      "Solo el precio",
      "Solo palabras clave",
      "Solo el nombre de la fábrica"
     ],
     "correta": 0,
     "explicacao": "Ayuda al cliente a entender rápidamente qué es el producto."
    },
    {
     "id": "6-1-q4",
     "tipo": "multipla",
     "enunciado": "¿Qué recomienda Amazon.es para la descripción?",
     "opcoes": [
      "Que sea concisa, precisa y fácil de entender",
      "Que sea lo más larga posible",
      "Que solo tenga emojis",
      "Que copie a la competencia"
     ],
     "correta": 0,
     "explicacao": "La página recomienda anuncios concisos, precisos y fáciles de entender."
    }
   ]
  },
  {
   "id": "6-2",
   "titulo": "Imágenes que venden y cumplen las normas",
   "minutos": 6,
   "fontes": [
    "sc-es-imagenes",
    "sc-es-imagenes-seleccion",
    "sell-es-vender-online"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "El cliente compra con los ojos",
     "corpo": "En Amazon el cliente **no puede tocar el producto**. Las imágenes cumplen ese papel. Una buena serie de imágenes responde a las preguntas antes de que se hagan: **cómo es, qué tamaño tiene, cómo se usa, qué viene en la caja**."
    },
    {
     "tipo": "passos",
     "titulo": "Normas de la imagen principal (Amazon.es)",
     "itens": [
      "Fondo **blanco puro** (RGB 255, 255, 255)",
      "Producto ocupando alrededor del **85 %** del encuadre",
      "**Sin texto, logotipo ni marca de agua**",
      "Imagen **nítida**, sin compresión excesiva",
      "Formatos **JPEG, PNG o TIFF**, modo de color **RGB**",
      "Evitar filtros o retoques exagerados, incluida la IA que haga que el producto parezca irreal"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Tamaño en píxeles: consulta la norma actual",
     "corpo": "La página de listados de Amazon.es cita **500 × 500 o 1000 × 1000 píxeles**. Una publicación oficial del foro cita un **mínimo de 1000 × 1000**. Un vendedor cita la página oficial con **500 a 10.000 px en el lado más largo**. Las fuentes no coinciden. Usa **1000 píxeles o más** en el lado más largo (así cumples todas las lecturas) y **consulta la página oficial** de requisitos de imagen."
    },
    {
     "tipo": "texto",
     "titulo": "Las tres imágenes que selecciona Amazon",
     "corpo": "Según un anuncio oficial, cada página necesita **al menos tres imágenes**:\n\n1. **Producto sobre fondo blanco**\n2. **Producto en contexto** (en uso)\n3. **Imagen con información del producto** (dimensiones, composición, información nutricional...)\n\nAmazon también indicó que da **prioridad a las imágenes de los titulares de la marca** y usa imágenes de otros vendedores solo cuando faltan las necesarias. Un motivo más para ser dueño de la marca."
    },
    {
     "tipo": "passos",
     "titulo": "Una serie de imágenes que funciona",
     "itens": [
      "**Principal:** fondo blanco",
      "**Ventaja:** el problema que resuelve",
      "**Medidas:** tamaño con regla o mano",
      "**Uso:** la persona usándolo",
      "**Detalles:** material y acabado",
      "**Qué viene en la caja**",
      "**Comparación o prueba**, si la tienes"
     ]
    },
    {
     "tipo": "delegar",
     "corpo": "**Fotógrafo de producto** (o estudio con fondo infinito): paquete con principal + 6 de lifestyle e infografías. **Diseñador:** infografías con el texto en español de España. **Tú:** revisas que las imágenes **no prometan lo que el producto no cumple**: eso genera devoluciones y malas reseñas."
    },
    {
     "tipo": "dica",
     "corpo": "Mira la página como un cliente **en el móvil**: la mayoría ve imágenes pequeñas. El texto diminuto en las imágenes se convierte en un borrón."
    }
   ],
   "quiz": [
    {
     "id": "6-2-q1",
     "tipo": "multipla",
     "enunciado": "¿Cómo debe ser el fondo de la imagen principal?",
     "opcoes": [
      "Blanco puro (RGB 255, 255, 255)",
      "Gris",
      "De color",
      "Transparente con sombra"
     ],
     "correta": 0,
     "explicacao": "El fondo blanco puro es la norma de la imagen principal."
    },
    {
     "id": "6-2-q2",
     "tipo": "vf",
     "enunciado": "La imagen principal puede tener logotipo y texto promocional.",
     "correta": false,
     "explicacao": "No puede tener texto, logotipo ni marca de agua."
    },
    {
     "id": "6-2-q3",
     "tipo": "multipla",
     "enunciado": "¿Cuántas imágenes como mínimo dice Amazon que necesita cada página?",
     "opcoes": [
      "1",
      "3",
      "9",
      "20"
     ],
     "correta": 1,
     "explicacao": "Al menos tres: fondo blanco, contexto e información del producto."
    },
    {
     "id": "6-2-q4",
     "tipo": "multipla",
     "enunciado": "¿Quién tiene prioridad en las imágenes de la página, según Amazon?",
     "opcoes": [
      "Los titulares de la marca",
      "El competidor más barato",
      "El primero que las subió",
      "Nadie"
     ],
     "correta": 0,
     "explicacao": "Amazon da prioridad a las imágenes de los titulares de la marca."
    },
    {
     "id": "6-2-q5",
     "tipo": "multipla",
     "enunciado": "¿Cuál es la actitud más segura con el tamaño en píxeles?",
     "opcoes": [
      "Usar 1000 píxeles o más en el lado más largo y consultar la página oficial",
      "Usar 100 px",
      "Ignorarlo",
      "Usar solo 500 px"
     ],
     "correta": 0,
     "explicacao": "Las fuentes no coinciden. 1000 px o más cumple todas las lecturas."
    }
   ]
  },
  {
   "id": "6-3",
   "titulo": "Textos en español de España",
   "minutos": 6,
   "fontes": [
    "sc-es-titulos",
    "sell-es-vender-online"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Texto que informa, convence y se encuentra",
     "corpo": "El **copy** es el texto de la página: título, viñetas, descripción, A+. Tiene dos lectores: **el cliente** y **el buscador de Amazon**. La regla de oro es: **escribe para el cliente, y al buscador también le gustará**."
    },
    {
     "tipo": "passos",
     "titulo": "La estructura de una viñeta que vende",
     "itens": [
      "Empieza con la **ventaja** en pocas palabras (en mayúsculas)",
      "Después explica **la característica** que la produce",
      "Usa **números y medidas** concretos",
      "Termina con la **tranquilidad** (garantía, compatibilidad, cuidado)"
     ]
    },
    {
     "tipo": "comparacao",
     "titulo": "Flojo vs. fuerte",
     "colunas": [
      "Flojo",
      "Fuerte"
     ],
     "linhas": [
      [
       "Ventaja",
       "Material de calidad.",
       "DURA MÁS: silicona alimentaria resistente a 200 °C y apta para lavavajillas."
      ],
      [
       "Tamaño",
       "Tamaño grande.",
       "TAMAÑO IDEAL: 30 x 20 cm, cabe en cualquier cajón estándar."
      ],
      [
       "Garantía",
       "El mejor producto.",
       "SIN RIESGO: si no te convence, devolución gratuita en 30 días (según la política de tu tienda)."
      ]
     ],
     "nota": "Ejemplos ficticios; las cifras del ejemplo no son de tu producto. Promete solo lo que el producto cumple y lo que permite la política de tu tienda."
    },
    {
     "tipo": "alerta",
     "titulo": "Lo que no hay que escribir",
     "corpo": "- **Promesas médicas** o de salud sin demostrar\n- **Comparaciones** con marcas de la competencia\n- **\"El mejor\", \"número 1\"** sin pruebas\n- Información que **no coincide** con el embalaje\n- Texto **copiado** de otro vendedor\n\nEsto genera reclamaciones, retirada de la oferta y pérdida de confianza."
    },
    {
     "tipo": "delegar",
     "titulo": "Redactor nativo",
     "corpo": "Contrata a un **redactor nativo de España** con experiencia en comercio electrónico. Entrégale: público objetivo, **3 elementos diferenciadores**, medidas, materiales, lo que **no** hay que prometer y palabras de búsqueda. Pide **título, 5 viñetas (o lo que pida el formulario), descripción y texto para A+**.\n\nTú lo revisas **como cliente**: ¿has entendido el producto en 10 segundos?"
    },
    {
     "tipo": "dica",
     "corpo": "Para España, usa el **tuteo** (\"tú\") de forma natural y evita regionalismos latinoamericanos. Pide al redactor un **glosario de los términos** que ha usado, para mantener la coherencia en los próximos productos."
    }
   ],
   "quiz": [
    {
     "id": "6-3-q1",
     "tipo": "multipla",
     "enunciado": "¿Para quién escribes el copy?",
     "opcoes": [
      "Para el cliente (y el buscador lo acompaña)",
      "Solo para el buscador",
      "Solo para la fábrica",
      "Solo para la competencia"
     ],
     "correta": 0,
     "explicacao": "Escribe para el cliente y usa las palabras adecuadas."
    },
    {
     "id": "6-3-q2",
     "tipo": "vf",
     "enunciado": "Copiar el texto de la competencia es una buena forma de ganar tiempo.",
     "correta": false,
     "explicacao": "Puede generar reclamaciones y no diferencia tu producto."
    },
    {
     "id": "6-3-q3",
     "tipo": "multipla",
     "enunciado": "¿Cuál es una buena viñeta?",
     "opcoes": [
      "\"Material de calidad\"",
      "Ventaja + característica + número concreto",
      "Solo mayúsculas",
      "Una frase de 500 palabras"
     ],
     "correta": 1,
     "explicacao": "Ventaja, característica y número concreto."
    },
    {
     "id": "6-3-q4",
     "tipo": "multipla",
     "enunciado": "¿Quién debe escribir el copy final en español de España?",
     "opcoes": [
      "Un traductor automático sin revisión",
      "Un redactor nativo de España, revisado por ti",
      "La fábrica",
      "El transportista"
     ],
     "correta": 1,
     "explicacao": "Un nativo evita errores que hacen que el producto parezca de fuera."
    }
   ]
  },
  {
   "id": "6-4",
   "titulo": "Marca registrada y Registro de Marcas",
   "minutos": 8,
   "fontes": [
    "sell-es-brand-registry",
    "euipo-tasas",
    "oepm-tasas",
    "sc-es-aplus"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "La marca es tu activo",
     "corpo": "Un producto se copia. La **marca registrada** es lo que protege tu nombre y abre puertas dentro de Amazon. Para quien quiere construir algo duradero, es la inversión más importante después del producto.\n\nRegistrar una marca **no es** obligatorio para vender, pero **Brand Registry** (la herramienta de protección de Amazon) **exige** una marca registrada o una solicitud pendiente."
    },
    {
     "tipo": "texto",
     "titulo": "Lo que da Brand Registry, según Amazon.es",
     "corpo": "- **Brand Analytics:** términos de búsqueda, compras repetidas, análisis de cesta, comparación de productos y datos demográficos\n- **Contenido A+**, vídeos y modelos 3D en las páginas\n- **Anuncios** Sponsored Products, Sponsored Brands y Sponsored Display\n- **Amazon Stores** (tienda de la marca)\n- **Protección:** Transparency, Project Zero, Counterfeit Crimes Unit y denuncia de infracciones\n- **Reseñas:** poder responder a reseñas de tres estrellas o menos\n- **Vine:** programa de reseñas para productos con pocas o ninguna reseña (para inscritos en Brand Registry; la página no indica el número de unidades)\n- **Incentivos** para marcas nuevas: hasta 47.250 € (con un 10 % sobre las primeras ventas de hasta 45.000 €), según las condiciones de Amazon\n\nEl registro en Amazon es **gratuito**. La suscripción de vendedor cuesta 39 € al mes, sin IVA."
    },
    {
     "tipo": "texto",
     "titulo": "Lo que pide Amazon para inscribir la marca",
     "corpo": "- **Marca registrada activa** en cada país donde quieras inscribirte, **o solicitud pendiente** (hecha a través de **IP Accelerator**, que conecta con abogados asociados)\n- Marca **denominativa** (palabras) o **figurativa con palabras**; el texto debe coincidir con la marca de la solicitud\n- **Lista de categorías** de productos\n- **Verificación** mediante un código enviado a la oficina de marcas o al contacto registrado\n- Se aceptan marcas de la **UE (EUIPO)** y de la **OMPI/WIPO**; la lista de países incluye España, Francia, Alemania, Italia y Reino Unido",
     "termos": []
    },
    {
     "tipo": "comparacao",
     "titulo": "Dónde registrar: España o UE",
     "colunas": [
      "OEPM (España)",
      "EUIPO (marca de la UE)"
     ],
     "linhas": [
      [
       "Cobertura",
       "Solo España",
       "Toda la Unión Europea, en un solo registro"
      ],
      [
       "Tasa de solicitud",
       "Tabla de la OEPM vigente desde el 1/4/2026: unos 148 € la primera clase con tramitación electrónica y unos 99 € por cada clase adicional (consultar el PDF)",
       "850 € la primera clase, 50 € la segunda, 150 € por clase a partir de la tercera"
      ],
      [
       "Validez",
       "10 años, renovable",
       "10 años, renovable indefinidamente"
      ],
      [
       "Cuándo tiene sentido",
       "Enfoque solo en España, presupuesto menor",
       "Plan de expansión por Europa"
      ]
     ],
     "nota": "Importes oficiales comprobados el 2026-10-26. La tasa de la OEPM tiene variantes en la tabla y la lectura automática no etiquetó cada columna: consulta el PDF antes de pagar."
    },
    {
     "tipo": "passos",
     "titulo": "El camino de la marca",
     "itens": [
      "**Elegir un nombre** corto, fácil de pronunciar en español y en inglés",
      "**Comprobar la disponibilidad** en las bases de la OEPM y de la EUIPO (con ayuda de un abogado o agente de PI)",
      "**Definir las clases** de producto en las que vas a operar (las tasas suben con las clases)",
      "**Solicitar el registro** (España, UE o ambos)",
      "**Inscribirte en Brand Registry** (con el registro o la solicitud pendiente)",
      "Usar las herramientas: **A+, Brand Analytics, protección, anuncios de marca**"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Cuidado con el nombre",
     "corpo": "Un nombre **ya registrado** por otro en tu clase puede generar **oposición** y la pérdida de la inversión. No pagues la tasa antes de **comprobar la disponibilidad**. Y si el nombre se parece a una marca famosa, **cámbialo**."
    },
    {
     "tipo": "delegar",
     "titulo": "Quién lo hace por ti",
     "corpo": "**Agente de la propiedad industrial o abogado de marcas:** búsqueda de anterioridades, definición de clases, solicitud y seguimiento. **IP Accelerator (Amazon):** conecta con abogados asociados para marcas pendientes. **Tú:** eliges el nombre y apruebas el presupuesto."
    }
   ],
   "quiz": [
    {
     "id": "6-4-q1",
     "tipo": "multipla",
     "enunciado": "¿Cuánto cuesta la tasa de una marca de la UE en la EUIPO para la primera clase?",
     "opcoes": [
      "85 €",
      "850 €",
      "1.850 €",
      "Gratuita"
     ],
     "correta": 1,
     "explicacao": "850 € la primera clase, 50 € la segunda y 150 € por clase adicional a partir de la tercera."
    },
    {
     "id": "6-4-q2",
     "tipo": "multipla",
     "enunciado": "¿Qué acepta Amazon para inscribir una marca en Brand Registry?",
     "opcoes": [
      "Solo marcas con 5 años de registro",
      "Marca registrada activa o solicitud pendiente mediante IP Accelerator",
      "El nombre de la empresa",
      "Nada"
     ],
     "correta": 1,
     "explicacao": "Marca activa o solicitud pendiente, con verificación mediante código."
    },
    {
     "id": "6-4-q3",
     "tipo": "vf",
     "enunciado": "Registrar la marca en Brand Registry de Amazon es gratuito.",
     "correta": true,
     "explicacao": "Amazon afirma que es un servicio gratuito (la suscripción de vendedor va aparte)."
    },
    {
     "id": "6-4-q4",
     "tipo": "multipla",
     "enunciado": "¿Cuál es la validez de una marca de la UE?",
     "opcoes": [
      "1 año",
      "5 años",
      "10 años, renovable",
      "Para siempre sin renovar"
     ],
     "correta": 2,
     "explicacao": "10 años, renovable por periodos de diez años."
    },
    {
     "id": "6-4-q5",
     "tipo": "multipla",
     "enunciado": "¿Cuál de estas es una ventaja que cita Amazon para quien tiene Brand Registry?",
     "opcoes": [
      "Brand Analytics",
      "Comisión cero",
      "Envío gratis para siempre",
      "Stock gratuito"
     ],
     "correta": 0,
     "explicacao": "Brand Analytics, A+, Stores, anuncios de marca y herramientas de protección."
    },
    {
     "id": "6-4-q6",
     "tipo": "multipla",
     "enunciado": "¿Qué precaución va antes de pagar la tasa de registro?",
     "opcoes": [
      "Comprobar si el nombre está disponible",
      "Hacer una fiesta",
      "Comprar más stock",
      "Nada"
     ],
     "correta": 0,
     "explicacao": "Un nombre ya registrado puede generar oposición y la pérdida de la inversión."
    }
   ]
  },
  {
   "id": "6-5",
   "titulo": "GTIN, EAN y GS1",
   "minutos": 5,
   "fontes": [
    "gs1-amazon",
    "sc-es-gtin-exencion",
    "sell-es-vender-online"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "El DNI de tu producto",
     "corpo": "Cuando creas un producto nuevo en Amazon, te pide un **identificador**: el [[gtin]] (también llamado EAN en Europa o UPC en EE. UU.). Es el número que aparece **bajo el código de barras**. Evita que se confundan dos productos distintos.\n\n- **EAN/GTIN-13:** 13 dígitos, estándar europeo\n- **UPC/GTIN-12:** 12 dígitos, estándar norteamericano",
     "termos": [
      "gtin"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Por qué importa GS1",
     "corpo": "**GS1** es la organización mundial que emite los códigos. En España, los códigos vienen de **AECOC/GS1 Spain**. GS1 Spain afirma que Amazon **no acepta cualquier EAN**, sino **códigos únicos, auténticos y globales de GS1**. Y que un producto bloqueado por un código que no es de GS1 **no se puede corregir**, y pierde su historial.\n\nEs decir: **comprar códigos baratos en webs genéricas es una trampa**. Pueden estar repetidos o no ser tuyos.",
     "termos": []
    },
    {
     "tipo": "alerta",
     "titulo": "GS1 Spain no publica precios en la página",
     "corpo": "La página de códigos para Amazon de GS1 Spain dice que la asociación da acceso a **códigos ilimitados**, pero **no indica importes**. Pide presupuesto directamente a AECOC/GS1 Spain."
    },
    {
     "tipo": "texto",
     "titulo": "Exención de GTIN: cuando no hay código",
     "corpo": "Si el producto **no tiene código GS1**, Amazon permite pedir una **exención de GTIN**. Según una respuesta oficial de Amazon.es en el foro (confirma la ruta actual en Seller Central):\n\n- **no está disponible** cuando el producto o el embalaje ya tienen código GS1: en ese caso, usa el código\n- necesitas **entre 2 y 9 imágenes reales** del producto y del embalaje, de todos los lados\n- la **marca** escrita en la solicitud debe ser **igual** a la que aparece en el producto o en el embalaje\n- la marca debe estar **fijada de forma permanente** en el producto o en el embalaje\n- incluso con exención, ciertos productos de marca no se pueden publicar sin identificador"
    },
    {
     "tipo": "comparacao",
     "titulo": "Código GS1 vs. exención",
     "colunas": [
      "Código GS1",
      "Exención de GTIN"
     ],
     "linhas": [
      [
       "Coste",
       "Asociación a GS1 (pide presupuesto)",
       "Sin coste de código"
      ],
      [
       "Cuándo",
       "El camino más sólido para marcas que quieren crecer",
       "Para productos sin código, con condiciones"
      ],
      [
       "Ventaja",
       "Código propio y válido en otras tiendas y minoristas",
       "Rápido para empezar"
      ],
      [
       "Cuidado",
       "Pagar por códigos legítimos",
       "Exige fotos reales y marca permanente en el producto"
      ]
     ],
     "nota": "Cuadro cualitativo. Amazon no publica en la página los criterios completos de la exención."
    },
    {
     "tipo": "delegar",
     "corpo": "**Fábrica:** imprime el código de barras en el embalaje (tú envías el archivo). **Asistente:** pide presupuesto a GS1 y da de alta los códigos. **Tú:** decides entre GS1 y exención según el plan de marca."
    },
    {
     "tipo": "dica",
     "corpo": "Si piensas **vender en otras tiendas o minoristas** además de Amazon, los códigos **GS1** valen en todos. Para una marca a largo plazo, es el camino más limpio."
    }
   ],
   "quiz": [
    {
     "id": "6-5-q1",
     "tipo": "multipla",
     "enunciado": "¿Qué es el GTIN?",
     "opcoes": [
      "El número bajo el código de barras que identifica el producto",
      "El impuesto sobre las ventas",
      "El nombre de la marca",
      "La tarifa FBA"
     ],
     "correta": 0,
     "explicacao": "El GTIN es el identificador bajo el código de barras, también llamado EAN o UPC."
    },
    {
     "id": "6-5-q2",
     "tipo": "vf",
     "enunciado": "Amazon acepta cualquier EAN de cualquier generador en línea.",
     "correta": false,
     "explicacao": "GS1 afirma que solo acepta códigos únicos, auténticos y globales de GS1."
    },
    {
     "id": "6-5-q3",
     "tipo": "multipla",
     "enunciado": "¿Cuándo no está disponible la exención de GTIN?",
     "opcoes": [
      "Cuando el producto o el embalaje ya tienen código GS1",
      "Cuando el producto es de cocina",
      "Cuando se vende en España",
      "Nunca"
     ],
     "correta": 0,
     "explicacao": "Si existe un código GS1, hay que usar el código."
    },
    {
     "id": "6-5-q4",
     "tipo": "multipla",
     "enunciado": "Para pedir la exención, ¿cuántas imágenes reales indica Amazon (respuesta oficial en el foro)?",
     "opcoes": [
      "1",
      "De 2 a 9",
      "50",
      "Ninguna"
     ],
     "correta": 1,
     "explicacao": "De 2 a 9 imágenes reales del producto y del embalaje."
    },
    {
     "id": "6-5-q5",
     "tipo": "multipla",
     "enunciado": "¿Cuántos dígitos tiene un EAN/GTIN-13?",
     "opcoes": [
      "8",
      "12",
      "13",
      "20"
     ],
     "correta": 2,
     "explicacao": "13 dígitos, estándar europeo. El UPC tiene 12."
    }
   ]
  }
 ]
};

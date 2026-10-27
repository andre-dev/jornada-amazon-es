// Mundo 8 (es). Gerado por tools/i18n-mundos.mjs a partir de js/content/world8.js.
export default {
 "id": 8,
 "chefe": {
  "id": "auditor",
  "nome": "El Auditor Sombrío",
  "hp": 100,
  "fala": "Veo cada retraso, cada reclamación, cada stock parado. ¿Aguanta tu cuenta una auditoría?",
  "derrota": "Nada que señalar. Tu cuenta es un modelo de disciplina.",
  "perguntas": [
   {
    "id": "b8-1",
    "tipo": "multipla",
    "licaoRef": "8-1",
    "enunciado": "¿Cuál es el valor objetivo del ODR (índice de pedidos defectuosos) que indica Amazon.es?",
    "opcoes": [
     "Por debajo del 1 %",
     "Por debajo del 10 %",
     "Por debajo del 25 %",
     "Por encima del 50 %"
    ],
    "correta": 0,
    "explicacao": "El objetivo es un ODR inferior al 1 %."
   },
   {
    "id": "b8-2",
    "tipo": "multipla",
    "licaoRef": "8-1",
    "enunciado": "¿Qué entra en el ODR?",
    "opcoes": [
     "Valoraciones negativas, reclamaciones de la Garantía de la A a la Z y devoluciones de cargo por servicio",
     "Solo el precio",
     "Solo el stock",
     "Solo el IVA"
    ],
    "correta": 0,
    "explicacao": "Un pedido cuenta una vez, aunque tenga más de un problema."
   },
   {
    "id": "b8-3",
    "tipo": "multipla",
    "licaoRef": "8-2",
    "enunciado": "¿Qué tres informaciones pidió Amazon en el plan de acción, según las respuestas oficiales?",
    "opcoes": [
     "Causa raíz, acciones correctivas y medidas preventivas",
     "Precio, stock e IVA",
     "Nombre, dirección y teléfono",
     "Foto, vídeo y audio"
    ],
    "correta": 0,
    "explicacao": "Causas detalladas, lo que se hizo para resolverlo y lo que se hará para evitar una nueva infracción."
   },
   {
    "id": "b8-4",
    "tipo": "vf",
    "licaoRef": "8-2",
    "enunciado": "Abrir una segunda cuenta para esquivar una suspensión es una buena estrategia.",
    "correta": false,
    "explicacao": "La regla práctica del sector es no hacerlo: puede agravar el problema. Sigue el proceso de apelación."
   },
   {
    "id": "b8-5",
    "tipo": "multipla",
    "licaoRef": "8-3",
    "enunciado": "¿Cuántos días de stock recomienda Amazon.es mantener para vender bien?",
    "opcoes": [
     "Cubrir de 30 a 60 días de ventas previstas",
     "7 días",
     "365 días",
     "Ninguno"
    ],
    "correta": 0,
    "explicacao": "La página de gestión de inventario recomienda cubrir de 30 a 60 días."
   },
   {
    "id": "b8-6",
    "tipo": "multipla",
    "licaoRef": "8-3",
    "enunciado": "¿A partir de cuántos días sin vender considera Amazon que un producto es excedente?",
    "opcoes": [
     "30",
     "60",
     "90",
     "365"
    ],
    "correta": 2,
    "explicacao": "El inventario que supera los 90 días almacenado sin venderse se considera excedente."
   },
   {
    "id": "b8-7",
    "tipo": "multipla",
    "licaoRef": "8-3",
    "enunciado": "¿Por qué evitar un stock grande en el último trimestre del año?",
    "opcoes": [
     "El almacenamiento FBA estándar sube de octubre a diciembre",
     "Amazon cierra",
     "No hay IVA",
     "La cuenta se suspende"
    ],
    "correta": 0,
    "explicacao": "El almacenamiento estándar general pasa de 27,54 € a 52,20 € por m³ al mes."
   },
   {
    "id": "b8-8",
    "tipo": "multipla",
    "licaoRef": "8-4",
    "enunciado": "¿Cuál es el plazo legal de desistimiento en compras en línea a distancia en la UE?",
    "opcoes": [
     "14 días",
     "3 días",
     "6 meses",
     "No existe"
    ],
    "correta": 0,
    "explicacao": "El consumidor puede desistir en 14 días, sin justificación, contados desde la entrega de los bienes."
   },
   {
    "id": "b8-9",
    "tipo": "multipla",
    "licaoRef": "8-4",
    "enunciado": "¿Cuánto dura, como mínimo, la garantía legal de un bien comprado en la UE?",
    "opcoes": [
     "2 años desde la recepción de los bienes",
     "30 días",
     "10 años",
     "No existe"
    ],
    "correta": 0,
    "explicacao": "El vendedor debe reparar, sustituir o reembolsar los bienes defectuosos, con una garantía mínima de 2 años."
   },
   {
    "id": "b8-10",
    "tipo": "multipla",
    "licaoRef": "8-5",
    "enunciado": "¿Cuál es el objetivo de la rutina semanal de 30 minutos?",
    "opcoes": [
     "Ver las cifras clave y decidir antes de que los problemas crezcan",
     "Sustituir a la gestoría",
     "Evitar los anuncios",
     "Contratar equipo"
    ],
    "correta": 0,
    "explicacao": "Es una revisión corta y regular de los indicadores de cuenta, stock, anuncios, caja e impuestos."
   },
   {
    "id": "b8-11",
    "tipo": "multipla",
    "licaoRef": "8-5",
    "enunciado": "¿Cuál es el plazo del modelo 303 trimestral de abril?",
    "opcoes": [
     "Hasta el 20 de abril",
     "Hasta el 31 de diciembre",
     "Hasta el 1 de junio",
     "No hay plazo"
    ],
    "correta": 0,
    "explicacao": "Trimestrales: del 1 al 20 de abril, julio y octubre, y del 1 al 30 de enero."
   }
  ]
 },
 "licoes": [
  {
   "id": "8-1",
   "titulo": "Salud de la cuenta: las cifras que importan",
   "minutos": 7,
   "fontes": [
    "amz-rendimiento",
    "sell-es-sfp"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "montanha",
     "titulo": "La cuenta es tu activo más frágil",
     "corpo": "Toda la operación (productos, anuncios, stock, marca) depende de **una cuenta de vendedor activa**. Si se suspende, todo se para: las ventas y, en muchos casos, los pagos.\n\nPor eso la **salud de la cuenta** va antes que el crecimiento. Es una rutina, no un evento."
    },
    {
     "tipo": "texto",
     "titulo": "La cifra central: el ODR",
     "corpo": "El **ODR** (índice de pedidos defectuosos) es el porcentaje de pedidos que han tenido:\n\n- una **valoración negativa** (1 o 2 estrellas) del vendedor\n- una **reclamación de la Garantía de la A a la Z**\n- una **devolución de cargo por servicio** en la tarjeta de crédito\n\nUn pedido cuenta una sola vez, aunque tenga más de un problema. Todas las reclamaciones cuentan, **incluso las no concedidas o retiradas por el comprador**.\n\n**Valor objetivo que indica Amazon.es: por debajo del 1 %.**"
    },
    {
     "tipo": "calculo",
     "titulo": "Ejemplo ilustrativo del ODR",
     "corpo": "En un mes ficticio:",
     "linhas": [
      [
       "Pedidos del periodo",
       "400"
      ],
      [
       "Con valoración negativa",
       "2"
      ],
      [
       "Con reclamación A a Z",
       "1"
      ],
      [
       "Con devolución de cargo",
       "0"
      ],
      [
       "Pedidos defectuosos (cada uno cuenta una vez)",
       "3"
      ]
     ],
     "total": [
      "ODR (3 ÷ 400)",
      "0,75%"
     ],
     "nota": "Por debajo del 1 %, dentro del objetivo. Con pocos pedidos, un solo problema pesa mucho: 1 de cada 100 ya es el 1 %."
    },
    {
     "tipo": "texto",
     "titulo": "Cuándo se calcula el ODR",
     "corpo": "Amazon calcula el ODR normalmente con pedidos de **más de 30 días** (los defectos suelen aparecer semanas después). Esperar **90 días** da una imagen más precisa, pero el panel puede mostrar datos a los 30 días.\n\nNo alcanzar los objetivos **no perjudica necesariamente la cuenta**, pero **no mejorar puede afectarla**. Las cuentas muy por debajo de los umbrales **pueden suspenderse o bloquearse temporalmente**."
    },
    {
     "tipo": "texto",
     "titulo": "Otros objetivos que aparecen",
     "corpo": "Si usas **envío propio o Prime gestionado por el vendedor**, Amazon.es publica objetivos aún más estrictos: en el programa Prime gestionado por el vendedor, por ejemplo, **90 % de entregas a tiempo**, **seguimiento válido en el 99 % de los envíos** y **cancelaciones de como máximo el 0,5 %** (Mundo 1).\n\nEn **FBA**, Amazon se encarga del envío y la atención de ese pedido, pero **el producto y la página siguen siendo tuyos**: las valoraciones negativas por defectos o porque \"no era lo que decía la página\" cuentan en tu contra."
    },
    {
     "tipo": "alerta",
     "corpo": "Los valores del panel (índices de cancelación, retrasos, objetivos por categoría) **cambian** y pueden variar. Usa el panel **Estado de la cuenta** de Seller Central como fuente oficial actual. Lo que garantiza este curso es la **disciplina de mirarlo cada semana**."
    },
    {
     "tipo": "delegar",
     "corpo": "**Asistente virtual:** abre el panel Estado de la cuenta cada semana y te envía un **resumen de una línea** por indicador. **Tú:** actúas a la primera señal amarilla, en lugar de esperar a la roja."
    },
    {
     "tipo": "dica",
     "corpo": "La mejor forma de mantener el ODR bajo es **prevenir**: una página fiel al producto, buen embalaje, instrucciones claras y atención rápida."
    }
   ],
   "quiz": [
    {
     "id": "8-1-q1",
     "tipo": "multipla",
     "enunciado": "¿Cuál es el valor objetivo del ODR, según Amazon.es?",
     "opcoes": [
      "Por debajo del 1 %",
      "Por debajo del 15 %",
      "Por encima del 5 %",
      "Cualquier valor"
     ],
     "correta": 0,
     "explicacao": "Por debajo del 1 %."
    },
    {
     "id": "8-1-q2",
     "tipo": "multipla",
     "enunciado": "400 pedidos, 3 de ellos defectuosos. ¿Cuál es el ODR?",
     "opcoes": [
      "0,075%",
      "0,75%",
      "7,5%",
      "75%"
     ],
     "correta": 1,
     "explicacao": "3 ÷ 400 = 0,75 %."
    },
    {
     "id": "8-1-q3",
     "tipo": "vf",
     "enunciado": "Una reclamación retirada por el comprador deja de contar en el ODR.",
     "correta": false,
     "explicacao": "Todas las reclamaciones cuentan, incluso las no concedidas o retiradas."
    },
    {
     "id": "8-1-q4",
     "tipo": "multipla",
     "enunciado": "Un mismo pedido tiene una valoración negativa y una reclamación A a Z. ¿Cuántas veces cuenta en el ODR?",
     "opcoes": [
      "Una vez",
      "Dos veces",
      "Ninguna",
      "Tres veces"
     ],
     "correta": 0,
     "explicacao": "Un pedido solo cuenta una vez."
    },
    {
     "id": "8-1-q5",
     "tipo": "multipla",
     "enunciado": "¿Cuál es la mejor defensa para mantener el ODR bajo?",
     "opcoes": [
      "Prevenir: página fiel al producto, buen embalaje y buena atención",
      "Ignorarlo",
      "Borrar valoraciones",
      "Abrir otra cuenta"
     ],
     "correta": 0,
     "explicacao": "Prevenir es más barato que corregir."
    }
   ]
  },
  {
   "id": "8-2",
   "titulo": "Suspensiones, plan de acción y apelación",
   "minutos": 7,
   "fontes": [
    "sc-es-plan-accion",
    "amz-rendimiento",
    "sc-es-restringidos"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Si ocurre, no te asustes",
     "corpo": "Una **suspensión** (o desactivación) puede venir por un mal rendimiento, por infringir una política (producto restringido, propiedad intelectual, manipulación de reseñas), por una verificación pendiente o por falta de documentos. Casi siempre hay **un camino de respuesta**, y la forma en que respondes decide el resultado."
    },
    {
     "tipo": "passos",
     "titulo": "Qué hacer, por orden",
     "itens": [
      "**Leer la notificación entera** y el motivo exacto",
      "**No responder en caliente**: entender la causa real",
      "**Congelar** lo que generó el problema (retirar la oferta, parar el envío)",
      "Redactar el **plan de acción** (ver abajo)",
      "Enviarlo con el **botón de apelación** de la página Estado de la cuenta",
      "Seguir la respuesta y **contestar rápido a las peticiones adicionales**"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "El plan de acción: tres bloques",
     "corpo": "En respuestas oficiales de Amazon en el foro, cuando un plan se rechazó por falta de información, pidió estos tres elementos:\n\n1. **Causa raíz:** información detallada sobre **por qué** se produjo la infracción\n2. **Acciones correctivas:** lo que **se ha hecho** para resolverlo\n3. **Medidas preventivas:** lo que **se hará** para que no se repita\n\nUna respuesta oficial recomendó enviar el plan **con el botón de apelación** de la página \"Estado de la cuenta\" y usar el botón **\"Llámeme ahora\"** para obtener ayuda adicional. Los testimonios sobre **plazos** varían mucho, y **ninguna respuesta oficial** indica un plazo.",
     "termos": []
    },
    {
     "tipo": "comparacao",
     "titulo": "Plan sólido vs. plan flojo",
     "colunas": [
      "Flojo",
      "Sólido"
     ],
     "linhas": [
      [
       "Causa",
       "Fue un error, disculpen",
       "Descripción precisa de lo ocurrido, con fechas y productos afectados"
      ],
      [
       "Acción",
       "Ya lo he corregido",
       "Lista de lo hecho: ofertas retiradas, proveedor cambiado, texto corregido, con pruebas"
      ],
      [
       "Prevención",
       "No volverá a pasar",
       "Nueva rutina: quién revisa qué, cuándo y con qué lista de comprobación"
      ],
      [
       "Tono",
       "A la defensiva o emotivo",
       "Objetivo, por puntos, asumiendo la responsabilidad"
      ]
     ],
     "nota": "Estructura de buenas prácticas basada en los tres elementos que pidió Amazon."
    },
    {
     "tipo": "alerta",
     "titulo": "Lo que NO hay que hacer",
     "corpo": "- **Abrir otra cuenta** para escapar (regla práctica: suele empeorar la situación; sigue la apelación)\n- **Mentir** o adjuntar documentos falsos\n- **Enviar el mismo texto varias veces** en tono amenazante\n- **Contratar a \"especialistas\"** que prometen la reactivación garantizada\n- Esperar sin hacer nada"
    },
    {
     "tipo": "delegar",
     "corpo": "**Consultor/agencia especializada en suspensiones:** puede ayudar a redactar el plan, pero **desconfía de las promesas de garantía**. **Abogado:** en casos de deuda o bloqueo de saldo. **Tú:** conoces la operación y firmas la explicación."
    },
    {
     "tipo": "dica",
     "corpo": "Mantén **un archivo de pruebas** desde el primer día: facturas de proveedores, certificados del producto, fotos del embalaje y capturas de la configuración. Si algún día tienes que apelar, ya lo tendrás todo."
    }
   ],
   "quiz": [
    {
     "id": "8-2-q1",
     "tipo": "multipla",
     "enunciado": "¿Cuáles son los tres bloques del plan de acción que pidió Amazon?",
     "opcoes": [
      "Causa raíz, acciones correctivas y medidas preventivas",
      "Precio, stock e IVA",
      "Fotos, vídeos y audios",
      "Nombre, correo y teléfono"
     ],
     "correta": 0,
     "explicacao": "Causa, lo que se hizo y lo que se hará para evitarlo."
    },
    {
     "id": "8-2-q2",
     "tipo": "vf",
     "enunciado": "Abrir una segunda cuenta es una buena forma de resolver una suspensión.",
     "correta": false,
     "explicacao": "Suele empeorar la situación. Sigue el proceso de apelación."
    },
    {
     "id": "8-2-q3",
     "tipo": "multipla",
     "enunciado": "¿Dónde enviar el plan, según una respuesta oficial en el foro?",
     "opcoes": [
      "Con el botón de apelación de la página Estado de la cuenta",
      "Por redes sociales",
      "Por correo postal",
      "En ningún sitio"
     ],
     "correta": 0,
     "explicacao": "Con el botón de apelación, y el botón \"Llámeme ahora\" para ayuda adicional."
    },
    {
     "id": "8-2-q4",
     "tipo": "multipla",
     "enunciado": "¿Qué tener a mano desde el primer día para una posible apelación?",
     "opcoes": [
      "Un archivo de pruebas: facturas, certificados, fotos y capturas",
      "Nada",
      "Solo la contraseña",
      "Una cuenta de reserva"
     ],
     "correta": 0,
     "explicacao": "Las pruebas organizadas aceleran y refuerzan la apelación."
    },
    {
     "id": "8-2-q5",
     "tipo": "multipla",
     "enunciado": "¿De qué desconfiar en los servicios de reactivación?",
     "opcoes": [
      "De las promesas de reactivación garantizada",
      "Del presupuesto por escrito",
      "De las referencias verificables",
      "Del contrato claro"
     ],
     "correta": 0,
     "explicacao": "Nadie, aparte de Amazon, puede garantizar la reactivación."
    }
   ]
  },
  {
   "id": "8-3",
   "titulo": "Gestión de stock y picos del año",
   "minutos": 7,
   "fontes": [
    "sell-es-inventario",
    "sc-es-capacidad",
    "sell-es-precios",
    "amz-rate-card-es"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Demasiado stock hunde la caja; demasiado poco pierde ventas",
     "corpo": "Gestionar el stock es encontrar el punto entre dos errores:\n\n- **Quedarse sin stock:** pierdes ventas, pierdes posición y frustras a los clientes\n- **Que sobre (excedente):** pagas almacenamiento, inmovilizas caja y acabas liquidando\n\nAmazon.es recomienda mantener stock para cubrir de **30 a 60 días** de ventas previstas."
    },
    {
     "tipo": "passos",
     "titulo": "El ciclo de reposición",
     "itens": [
      "**Medir** las ventas medias por día",
      "**Sumar el plazo de reposición**: producción, flete, despacho, envío a FBA y recepción",
      "**Pedir** cuando el stock restante cubra solo el plazo de reposición **más un margen**",
      "**Comprobar** la recepción y las etiquetas",
      "**Repetir**, ajustando por estacionalidad"
     ]
    },
    {
     "tipo": "calculo",
     "titulo": "Ejemplo de cobertura de stock",
     "corpo": "Producto ficticio:",
     "linhas": [
      [
       "Ventas medias",
       "20 unidades al día"
      ],
      [
       "Plazo total de reposición (de la producción a la recepción)",
       "70 días"
      ],
      [
       "Margen de seguridad",
       "15 días"
      ],
      [
       "Stock necesario para cubrir el plazo y el margen (20 × 85)",
       "1.700 unidades"
      ]
     ],
     "total": [
      "Punto de reposición: pedir cuando queden",
      "1.700 unidades"
     ],
     "nota": "Valores hipotéticos. Lo que importa es la lógica: cuanto más largo es el plazo de reposición, antes tienes que pedir. En la práctica, las herramientas de Amazon y la previsión estacional lo ajustan."
    },
    {
     "tipo": "texto",
     "titulo": "Herramientas oficiales de inventario",
     "corpo": "Amazon.es cita estas herramientas en Seller Central:\n\n- **Reabastecer inventario:** muestra los productos que pueden agotarse en los próximos **28 días**\n- **Panel de inventario** y **gestión de excedentes**\n- **Antigüedad del inventario:** cuánto tiempo lleva el stock en los almacenes\n- **Índice de rendimiento del inventario:** clasifica la salud como **Excelente, Bueno, Suficiente o Deficiente**\n\nAmazon considera **excedente** el producto con más de **90 días** sin venderse, y avisa **6 semanas** antes de limpiar el inventario."
    },
    {
     "tipo": "texto",
     "titulo": "Límites de capacidad y almacenamiento",
     "corpo": "Desde 2023, el límite de capacidad es **mensual por tipo de almacenamiento**, se anuncia en la **tercera semana completa** de cada mes y tiene en cuenta el **índice de rendimiento del inventario**, las **previsiones de ventas** y el **tiempo de recepción**. Superar el límite genera una tarifa por exceso. Consulta el panel **Control de capacidad**.\n\nEl almacenamiento FBA estándar general cuesta **27,54 €/m³ al mes** de enero a septiembre y **52,20 €/m³** de octubre a diciembre. El stock con más de **241 días** entra en la tarifa por stock antiguo."
    },
    {
     "tipo": "alerta",
     "titulo": "Los picos del año",
     "corpo": "Para quien vende en España, los picos incluyen **Prime Day**, **Black Friday y Cyber Monday**, **Navidad** y las **campañas del Día de la Madre y del Padre**. Para estar listo:\n\n- envía el stock a FBA **con antelación** (la recepción puede tardar)\n- **no dejes** stock atascado después del pico: el almacenamiento sube de octubre a diciembre\n- **ajusta el presupuesto** de anuncios, porque el coste por clic suele subir\n- **revisa el ODR** de antemano"
    },
    {
     "tipo": "delegar",
     "corpo": "**Asistente o gestor de inventario:** hoja de cobertura por producto y avisos de reposición. **Prep center/transitario:** franja de entrega en el almacén. **Tú:** apruebas el pedido de reposición."
    },
    {
     "tipo": "dica",
     "corpo": "Para el primer producto, calcula el **punto de reposición** antes del primer lote y **apunta la fecha** en que vas a pedir el segundo. Quien espera a que se acabe el stock ya ha perdido el plazo."
    }
   ],
   "quiz": [
    {
     "id": "8-3-q1",
     "tipo": "multipla",
     "enunciado": "¿Cuántos días de ventas recomienda Amazon.es mantener en stock?",
     "opcoes": [
      "De 30 a 60 días",
      "1 día",
      "300 días",
      "Ninguno"
     ],
     "correta": 0,
     "explicacao": "La página de gestión de inventario recomienda de 30 a 60 días."
    },
    {
     "id": "8-3-q2",
     "tipo": "multipla",
     "enunciado": "Ventas de 20 al día, plazo de reposición de 70 días y margen de 15 días. ¿Cuál es el punto de reposición?",
     "opcoes": [
      "1.400 unidades",
      "1.700 unidades",
      "2.000 unidades",
      "850 unidades"
     ],
     "correta": 1,
     "explicacao": "20 × (70 + 15) = 1.700 unidades."
    },
    {
     "id": "8-3-q3",
     "tipo": "multipla",
     "enunciado": "¿A partir de cuántos días sin venderse se considera excedente un producto?",
     "opcoes": [
      "30",
      "60",
      "90",
      "365"
     ],
     "correta": 2,
     "explicacao": "Más de 90 días almacenado sin venderse."
    },
    {
     "id": "8-3-q4",
     "tipo": "vf",
     "enunciado": "Almacenar mucho stock nunca tiene coste.",
     "correta": false,
     "explicacao": "Hay almacenamiento por m³, tarifa por stock antiguo, tarifa por exceso y caja inmovilizada."
    },
    {
     "id": "8-3-q5",
     "tipo": "multipla",
     "enunciado": "¿Qué herramienta muestra los productos que pueden agotarse en los próximos 28 días?",
     "opcoes": [
      "Reabastecer inventario",
      "Brand Analytics",
      "Amazon Attribution",
      "Vine"
     ],
     "correta": 0,
     "explicacao": "La herramienta Reabastecer inventario proyecta el riesgo de rotura de stock."
    }
   ]
  },
  {
   "id": "8-4",
   "titulo": "Atención al cliente y devoluciones",
   "minutos": 6,
   "fontes": [
    "sc-es-devol30",
    "ue-devolucion-14",
    "ue-garantia-2",
    "amz-rendimiento"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Las devoluciones son parte del juego",
     "corpo": "Todos los vendedores tienen devoluciones. Lo que separa un negocio sano de uno problemático es **cuántas**, **por qué** y **cómo reaccionas**. En FBA, Amazon recibe la devolución y atiende al cliente, pero **los costes y las consecuencias son tuyos**."
    },
    {
     "tipo": "texto",
     "titulo": "Los plazos que tienes que conocer",
     "corpo": "- **Derecho de desistimiento (ley de la UE):** en compras en línea, el consumidor puede desistir en **14 días**, sin dar motivos, contados desde la **entrega** de los bienes. Hay excepciones (bienes personalizados, perecederos, productos precintados abiertos, etc.).\n- **Garantía legal:** los bienes defectuosos o distintos de lo anunciado dan derecho a **reparación, sustitución o reembolso**, con una garantía mínima de **2 años**; un defecto que aparece en **1 año** se presume existente en la entrega (en algunos países, 2 años).\n- **Política de Amazon:** una respuesta oficial en el foro indica que permite devoluciones **hasta 30 días desde la recepción**, y que las condiciones generales de Amazon **prevalecen** sobre la política del vendedor. Confirma las normas actuales en Seller Central.",
     "termos": []
    },
    {
     "tipo": "alerta",
     "titulo": "Compradores particulares vs. profesionales",
     "corpo": "Estos derechos se aplican a **compras de consumidores a profesionales**. Como vendedor profesional, **es tu caso**. No intentes \"limitar\" los plazos de Amazon: las condiciones generales prevalecen."
    },
    {
     "tipo": "passos",
     "titulo": "Cómo reducir las devoluciones",
     "itens": [
      "**Página fiel**: medidas, colores y materiales reales",
      "**Instrucciones claras** de uso y montaje",
      "**Embalaje resistente** al transporte",
      "**Control de calidad** antes del embarque (Mundo 4)",
      "**Lee los motivos de devolución** en Seller Central y corrige la causa",
      "**Responde rápido** a los mensajes de los clientes"
     ]
    },
    {
     "tipo": "calculo",
     "titulo": "Ejemplo ilustrativo: el coste de una devolución",
     "corpo": "Producto ficticio de 30,00 € que se devuelve y no se puede revender como nuevo:",
     "linhas": [
      [
       "Reembolso al cliente",
       "30,00 €"
      ],
      [
       "Coste del producto perdido (hipotético)",
       "7,00 €"
      ],
      [
       "Tarifas que quizá no se devuelvan (comisión mínima, logística)",
       "variable"
      ]
     ],
     "total": [
      "Pérdida estimada de una devolución inservible",
      "≈ 7,00 € o más, sin contar el ingreso"
     ],
     "nota": "Cada categoría y cada situación cambian el cálculo. Usa el porcentaje de devolución en el Taller."
    },
    {
     "tipo": "delegar",
     "corpo": "**Asistente de atención al cliente (en español):** responde a los mensajes con plantillas aprobadas por ti. **Prep center:** inspecciona las devoluciones y las vuelve a embalar cuando es posible. **Tú:** revisas cada mes los **motivos** de devolución y decides los cambios."
    },
    {
     "tipo": "dica",
     "corpo": "Un informe mensual sencillo con los **tres principales motivos** de devolución y una **acción** para cada uno ya reduce el problema."
    }
   ],
   "quiz": [
    {
     "id": "8-4-q1",
     "tipo": "multipla",
     "enunciado": "¿Cuál es el plazo legal de desistimiento en compras en línea en la UE?",
     "opcoes": [
      "14 días",
      "2 días",
      "60 días",
      "No existe"
     ],
     "correta": 0,
     "explicacao": "14 días, sin justificación, desde la entrega de los bienes."
    },
    {
     "id": "8-4-q2",
     "tipo": "multipla",
     "enunciado": "¿Cuál es la garantía legal mínima de los bienes en la UE?",
     "opcoes": [
      "2 años",
      "30 días",
      "6 meses",
      "No existe"
     ],
     "correta": 0,
     "explicacao": "Un mínimo de 2 años desde la recepción de los bienes."
    },
    {
     "id": "8-4-q3",
     "tipo": "vf",
     "enunciado": "El vendedor puede acortar libremente el plazo de devolución de Amazon a 7 días.",
     "correta": false,
     "explicacao": "Las condiciones generales de Amazon prevalecen sobre la política del vendedor."
    },
    {
     "id": "8-4-q4",
     "tipo": "multipla",
     "enunciado": "¿Cuál es la mejor forma de reducir las devoluciones?",
     "opcoes": [
      "Página fiel, buenas instrucciones, embalaje resistente y control de calidad",
      "Esconder el producto",
      "Subir el precio sin motivo",
      "Ignorar el problema"
     ],
     "correta": 0,
     "explicacao": "Atacar la causa es más barato que absorber el coste."
    },
    {
     "id": "8-4-q5",
     "tipo": "multipla",
     "enunciado": "Según la respuesta oficial en el foro, ¿hasta cuántos días desde la recepción permite Amazon una devolución cuando el comprador no está satisfecho?",
     "opcoes": [
      "30 días",
      "3 días",
      "1 año",
      "Ninguno"
     ],
     "correta": 0,
     "explicacao": "Hasta 30 días, y las condiciones generales de Amazon prevalecen."
    }
   ]
  },
  {
   "id": "8-5",
   "titulo": "La rutina semanal de 30 minutos del dueño",
   "minutos": 6,
   "fontes": [
    "amz-rendimiento",
    "aeat-303-plazo",
    "sell-es-inventario",
    "ads-acos"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Tú no operas, tú supervisas",
     "corpo": "Un dueño de varias empresas sabe que la atención es el bien más escaso. La rutina semanal de **30 minutos** sirve para ver lo **esencial**, decidir y volver a tu vida. El resto es cosa del equipo."
    },
    {
     "tipo": "passos",
     "titulo": "El guion semanal (30 minutos)",
     "itens": [
      "**Estado de la cuenta (3 min):** ODR, avisos, cualquier elemento amarillo o rojo",
      "**Ventas y margen (5 min):** unidades, ingresos, beneficio por unidad frente al plan",
      "**Stock (5 min):** días de cobertura de cada producto y plazo de reposición",
      "**Anuncios (5 min):** gasto, ACoS y TACoS frente al objetivo (informe del gestor)",
      "**Reseñas y mensajes (4 min):** nota media, reseñas nuevas, mensajes sin responder",
      "**Caja (4 min):** saldo, próximos pagos de fábrica, flete e impuestos",
      "**Decisiones de la semana (4 min):** qué reponer, ajustar, pausar, preguntar"
     ]
    },
    {
     "tipo": "calculo",
     "titulo": "Marcador de la semana: plantilla sencilla",
     "corpo": "Rellena una línea por producto (valores ficticios):",
     "linhas": [
      [
       "ODR",
       "0,8 % (objetivo por debajo del 1 %)"
      ],
      [
       "Días de cobertura del stock",
       "42 días (objetivo de 30 a 60)"
      ],
      [
       "ACoS y TACoS",
       "24 % y 9 % (objetivos 28 % y 10 %)"
      ],
      [
       "Nota media y nuevas reseñas",
       "4,4 estrellas, 6 nuevas"
      ],
      [
       "Caja disponible",
       "Cubre 10 semanas de gastos"
      ]
     ],
     "nota": "Los objetivos son ejemplos. Define los tuyos con la cuenta del margen del Mundo 5."
    },
    {
     "tipo": "texto",
     "titulo": "Calendario fiscal que no se puede olvidar",
     "corpo": "- **Modelo 303 (IVA) trimestral:** del 1 al 20 de abril, julio y octubre, y del 1 al 30 de enero\n- **Modelo 390 (resumen anual):** lo controla la gestoría\n- **OSS trimestral**, si estás registrado\n- **Renovaciones** de marcas (cada 10 años), certificados y documentos de conformidad\n\nPide a la gestoría un **calendario por escrito** con las fechas y lo que necesita de ti."
    },
    {
     "tipo": "delegar",
     "titulo": "El equipo detrás de los 30 minutos",
     "corpo": "**Asistente virtual:** prepara el marcador cada lunes por la mañana. **Gestor de PPC:** informe semanal. **Gestoría:** calendario fiscal y avisos. **Tú:** una reunión corta con las cifras en la mano. Si el marcador está en verde, **terminas antes**."
    },
    {
     "tipo": "alerta",
     "corpo": "La rutina solo funciona si es **siempre el mismo día y a la misma hora**. Una semana saltada se convierte en un mes saltado, y un problema pequeño se convierte en uno grande."
    },
    {
     "tipo": "dica",
     "corpo": "Decide **antes** qué dispara una acción: por ejemplo, un ODR por encima del 0,8 %, una cobertura de stock por debajo de 35 días o un ACoS por encima del objetivo durante dos semanas. Los avisos por escrito quitan la emoción de la decisión."
    }
   ],
   "quiz": [
    {
     "id": "8-5-q1",
     "tipo": "multipla",
     "enunciado": "¿Cuál es el objetivo de la rutina de 30 minutos?",
     "opcoes": [
      "Ver las cifras clave y decidir pronto",
      "Operarlo todo tú solo",
      "Sustituir al equipo",
      "Evitar impuestos"
     ],
     "correta": 0,
     "explicacao": "Es una revisión corta y regular para decidir antes de que los problemas crezcan."
    },
    {
     "id": "8-5-q2",
     "tipo": "multipla",
     "enunciado": "¿Cuál es el plazo del modelo 303 de julio?",
     "opcoes": [
      "Hasta el 20 de julio",
      "Hasta el 31 de diciembre",
      "Hasta el 1 de agosto",
      "No hay plazo"
     ],
     "correta": 0,
     "explicacao": "Trimestrales: del 1 al 20 de abril, julio y octubre; del 1 al 30 de enero."
    },
    {
     "id": "8-5-q3",
     "tipo": "vf",
     "enunciado": "La rutina funciona mejor si se hace cuando haya tiempo.",
     "correta": false,
     "explicacao": "Solo funciona con un día y una hora fijos."
    },
    {
     "id": "8-5-q4",
     "tipo": "multipla",
     "enunciado": "¿Qué son los avisos de acción?",
     "opcoes": [
      "Reglas escritas que disparan una decisión (por ejemplo, cobertura por debajo de 35 días)",
      "Piezas de una máquina",
      "Un tipo de anuncio",
      "Un impuesto"
     ],
     "correta": 0,
     "explicacao": "Los avisos por escrito quitan la emoción de la decisión."
    },
    {
     "id": "8-5-q5",
     "tipo": "multipla",
     "enunciado": "¿Quién prepara el marcador semanal?",
     "opcoes": [
      "El asistente, y tú lo lees",
      "Nadie",
      "El cliente",
      "La fábrica"
     ],
     "correta": 0,
     "explicacao": "Delega la preparación, y la decisión sigue siendo tuya."
    }
   ]
  }
 ]
};

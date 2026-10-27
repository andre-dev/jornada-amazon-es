// Mundo 6 (en). Gerado por tools/i18n-mundos.mjs a partir de js/content/world6.js.
export default {
 "id": 6,
 "chefe": {
  "id": "esfinge",
  "nome": "Algorithm Sphinx",
  "hp": 100,
  "fala": "Solve me or lose the shopfront: what makes a page sell without ads?",
  "derrota": "You read the riddle right. The shopfront is yours.",
  "perguntas": [
   {
    "id": "b6-1",
    "tipo": "multipla",
    "licaoRef": "6-1",
    "enunciado": "How many characters can a product title have in most categories?",
    "opcoes": [
     "80",
     "150",
     "200",
     "400"
    ],
    "correta": 2,
    "explicacao": "200 characters, including spaces, according to Amazon.es."
   },
   {
    "id": "b6-2",
    "tipo": "vf",
    "licaoRef": "6-1",
    "enunciado": "A title can include symbols like ! and $ to grab attention.",
    "correta": false,
    "explicacao": "Those characters aren't allowed (except as part of the brand name)."
   },
   {
    "id": "b6-3",
    "tipo": "multipla",
    "licaoRef": "6-2",
    "enunciado": "What should the main image look like, according to Amazon.es?",
    "opcoes": [
     "Pure white background, product filling about 85%, no text, logo or watermark",
     "Coloured background with a sale badge",
     "Photo with a model and text",
     "A drawing of the product"
    ],
    "correta": 0,
    "explicacao": "Pure white background (255,255,255), product filling about 85% of the frame and no text."
   },
   {
    "id": "b6-4",
    "tipo": "multipla",
    "licaoRef": "6-2",
    "enunciado": "Which three images does Amazon say every page needs?",
    "opcoes": [
     "Product on a white background, product in context and an image with product information",
     "Three identical photos",
     "Logo, badge and price",
     "Video, audio and text"
    ],
    "correta": 0,
    "explicacao": "White background, context and an informative image (dimensions, for example)."
   },
   {
    "id": "b6-5",
    "tipo": "multipla",
    "licaoRef": "6-3",
    "enunciado": "What's the best principle for writing the title and bullet points in Spanish?",
    "opcoes": [
     "Write for people, using the words Spanish customers use",
     "Repeat keywords as much as possible",
     "Translate word for word",
     "Use capitals only"
    ],
    "correta": 0,
    "explicacao": "The repetition rule and common sense both say: write for the customer, not the algorithm."
   },
   {
    "id": "b6-6",
    "tipo": "multipla",
    "licaoRef": "6-4",
    "enunciado": "How much is the base EUIPO fee for an EU trademark in the first class?",
    "opcoes": [
     "85 €",
     "850 €",
     "8.500 €",
     "Free"
    ],
    "correta": 1,
    "explicacao": "€850 for the first class, €50 for the second and €150 for each class from the third."
   },
   {
    "id": "b6-7",
    "tipo": "multipla",
    "licaoRef": "6-4",
    "enunciado": "Registering your brand in Amazon.es's Brand Registry costs...",
    "opcoes": [
     "39 €",
     "Nothing: it's a free service",
     "850 €",
     "It depends on turnover"
    ],
    "correta": 1,
    "explicacao": "Amazon says registering a brand is free (the seller subscription is separate)."
   },
   {
    "id": "b6-8",
    "tipo": "multipla",
    "licaoRef": "6-4",
    "enunciado": "Which of these benefits is exclusive to brands enrolled in Brand Registry?",
    "opcoes": [
     "Brand Analytics",
     "Zero commission",
     "Free stock",
     "Automatic Prime badge"
    ],
    "correta": 0,
    "explicacao": "Brand Analytics is exclusive to enrolled brands."
   },
   {
    "id": "b6-9",
    "tipo": "multipla",
    "licaoRef": "6-5",
    "enunciado": "According to GS1 Spain, what does Amazon accept as a valid barcode?",
    "opcoes": [
     "Any EAN from an online generator",
     "Only unique, authentic, global GS1 codes",
     "Codes in any colour",
     "No code at all"
    ],
    "correta": 1,
    "explicacao": "GS1 says Amazon doesn't accept just any EAN, only authentic GS1 codes."
   },
   {
    "id": "b6-10",
    "tipo": "multipla",
    "licaoRef": "6-5",
    "enunciado": "When is the GTIN exemption NOT available?",
    "opcoes": [
     "When the product or packaging already has a GS1 code",
     "When the product is blue",
     "When it's made in Europe",
     "It's never available"
    ],
    "correta": 0,
    "explicacao": "If there's an authorised GS1 code, that code must be used instead of the exemption."
   },
   {
    "id": "b6-11",
    "tipo": "ordenar",
    "licaoRef": "6-4",
    "enunciado": "Put the path to a protected brand on Amazon in order:",
    "opcoes": [
     "Check whether the name is available",
     "Register the trademark (or a pending application via IP Accelerator)",
     "Enrol the brand in Brand Registry",
     "Use A+ Content, Brand Analytics and the protection tools"
    ],
    "explicacao": "Availability, registration, enrolment, and only then the benefits."
   }
  ]
 },
 "licoes": [
  {
   "id": "6-1",
   "titulo": "Anatomy of a product page",
   "minutos": 7,
   "fontes": [
    "sell-es-vender-online",
    "sc-es-titulos"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "torre",
     "titulo": "The shopfront decides whether the customer buys",
     "corpo": "With the product chosen and stock on its way, it's time to build the **product page**. It has to do three things in seconds: **be found**, **grab attention** and **persuade**.\n\nA page has these blocks, from top to bottom:"
    },
    {
     "tipo": "passos",
     "titulo": "The page's blocks",
     "itens": [
      "**Title:** what the product is and who it's for",
      "**Images and video:** the first impression (lesson 6-2)",
      "**Price and buy button** (Buy Box)",
      "**Key points (bullets):** short sentences with benefits",
      "**Description and A+ Content:** the full story (for brand owners)",
      "**Reviews and questions:** social proof",
      "**Search keywords (behind the scenes):** so Amazon can find the product"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Title: what Amazon.es says",
     "corpo": "According to Amazon.es's listing page, the title has **at most 200 characters**, with the **first letter of each word capitalised**. Since **21 January 2025** these rules also apply:\n\n- **none of the characters** ! $ ? _ { } ^ (except in the brand name)\n- **the same word can't appear more than twice** (except prepositions, articles and conjunctions)\n\nThe exact limit varies by category. The practical formula: **Brand + what it is + main feature + who it's for or size/colour**."
    },
    {
     "tipo": "exemplo",
     "titulo": "Illustrative title example",
     "corpo": "**Fictional brand:** *Cocinita*\n\n\"Cocinita Organizador Magnético para Cocina, Soporte de Especias con Imán Fuerte, Pack de 6 Botes de Cristal, Color Negro\"\n\nIt has the brand, what it is, the differentiator (strong magnet, 6 jars) and the colour. **No repeated words and no prohibited symbols.**"
    },
    {
     "tipo": "texto",
     "titulo": "Bullets, description and keywords",
     "corpo": "- **Bullets:** Amazon.es says they're short sentences with features and benefits. The page doesn't say how many, so follow the form's fields.\n- **Description:** the page recommends listings be **concise, accurate and easy to understand**.\n- **Keywords:** search terms are form fields. Don't repeat those already in the title and **don't use competitors' brands**.\n- **Variations:** colours, scents or sizes can sit on the **same page** as variations.",
     "termos": []
    },
    {
     "tipo": "delegar",
     "corpo": "**Native copywriter from Spain:** title, bullets and description. **Designer/photographer:** images. **Virtual assistant:** setup in Seller Central. **You:** approve the whole thing as if you were the customer."
    },
    {
     "tipo": "dica",
     "corpo": "Open the pages of the **top 3 competitors** and read only the **title and first bullets**. What repeats is what customers expect. What you do differently is what will make you stand out."
    }
   ],
   "quiz": [
    {
     "id": "6-1-q1",
     "tipo": "multipla",
     "enunciado": "What's the title character limit in most categories?",
     "opcoes": [
      "100",
      "200",
      "500",
      "1000"
     ],
     "correta": 1,
     "explicacao": "200 characters, including spaces."
    },
    {
     "id": "6-1-q2",
     "tipo": "vf",
     "enunciado": "The same word can be repeated several times in the title.",
     "correta": false,
     "explicacao": "No more than twice, except prepositions, articles and conjunctions."
    },
    {
     "id": "6-1-q3",
     "tipo": "multipla",
     "enunciado": "What's the practical formula for a title?",
     "opcoes": [
      "Brand + what it is + main feature + size or colour",
      "Just the price",
      "Just keywords",
      "Just the factory's name"
     ],
     "correta": 0,
     "explicacao": "It helps the customer quickly understand what the product is."
    },
    {
     "id": "6-1-q4",
     "tipo": "multipla",
     "enunciado": "What does Amazon.es recommend for the description?",
     "opcoes": [
      "That it be concise, accurate and easy to understand",
      "That it be as long as possible",
      "That it contain only emojis",
      "That it copy the competitor"
     ],
     "correta": 0,
     "explicacao": "The page recommends concise, accurate and easy-to-understand listings."
    }
   ]
  },
  {
   "id": "6-2",
   "titulo": "Images that sell and pass the rules",
   "minutos": 6,
   "fontes": [
    "sc-es-imagenes",
    "sc-es-imagenes-seleccion",
    "sell-es-vender-online"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Customers buy with their eyes",
     "corpo": "On Amazon the customer **can't touch the product**. Images play that role. A good set of images answers questions before they're asked: **what it looks like, how big it is, how it's used, what's in the box**."
    },
    {
     "tipo": "passos",
     "titulo": "Main image rules (Amazon.es)",
     "itens": [
      "**Pure white** background (RGB 255, 255, 255)",
      "Product filling about **85%** of the frame",
      "**No text, logo or watermark**",
      "**Sharp** image, without excessive compression",
      "**JPEG, PNG or TIFF** formats, **RGB** colour mode",
      "Avoid heavy filters or retouching, including AI that makes the product look unreal"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Pixel size: check the current rule",
     "corpo": "Amazon.es's listing page mentions **500 × 500 or 1000 × 1000 pixels**. An official forum post mentions a **minimum of 1000 × 1000**. A seller quotes the official page as **500 to 10,000 px on the longest side**. The sources don't agree. Use **1000 pixels or more** on the longest side (that satisfies every reading) and **check the official** image requirements page."
    },
    {
     "tipo": "texto",
     "titulo": "The three images Amazon selects",
     "corpo": "According to an official announcement, every page needs **at least three images**:\n\n1. **Product on a white background**\n2. **Product in context** (in use)\n3. **Image with product information** (dimensions, composition, nutrition information...)\n\nAmazon also said it gives **priority to brand owners' images**, and uses other sellers' images only when the required ones are missing. One more reason to own the brand."
    },
    {
     "tipo": "passos",
     "titulo": "An image set that works",
     "itens": [
      "**Main:** white background",
      "**Benefit:** the problem it solves",
      "**Dimensions:** size shown with a ruler or hand",
      "**Use:** a person using it",
      "**Details:** material and finish",
      "**What's in the box**",
      "**Comparison or proof**, if you have it"
     ]
    },
    {
     "tipo": "delegar",
     "corpo": "**Product photographer** (or studio with an infinity backdrop): a package with the main image + 6 lifestyle shots and infographics. **Designer:** infographics with text in Spain's Spanish. **You:** check the images **don't promise what the product doesn't deliver**: that leads to returns and bad reviews."
    },
    {
     "tipo": "dica",
     "corpo": "View the page as a customer would **on a phone**: most see small images. Tiny text in images turns into a blur."
    }
   ],
   "quiz": [
    {
     "id": "6-2-q1",
     "tipo": "multipla",
     "enunciado": "What should the main image background be?",
     "opcoes": [
      "Pure white (RGB 255, 255, 255)",
      "Grey",
      "Coloured",
      "Transparent with a shadow"
     ],
     "correta": 0,
     "explicacao": "A pure white background is the main image rule."
    },
    {
     "id": "6-2-q2",
     "tipo": "vf",
     "enunciado": "The main image can include a logo and promotional text.",
     "correta": false,
     "explicacao": "It can't have text, a logo or a watermark."
    },
    {
     "id": "6-2-q3",
     "tipo": "multipla",
     "enunciado": "What minimum number of images does Amazon say each page needs?",
     "opcoes": [
      "1",
      "3",
      "9",
      "20"
     ],
     "correta": 1,
     "explicacao": "At least three: white background, context and product information."
    },
    {
     "id": "6-2-q4",
     "tipo": "multipla",
     "enunciado": "Whose images take priority on the page, according to Amazon?",
     "opcoes": [
      "The brand owners'",
      "The cheapest competitor's",
      "Whoever uploaded first",
      "Nobody's"
     ],
     "correta": 0,
     "explicacao": "Amazon gives priority to brand owners' images."
    },
    {
     "id": "6-2-q5",
     "tipo": "multipla",
     "enunciado": "What's the safest approach to pixel size?",
     "opcoes": [
      "Use 1000 pixels or more on the longest side and check the official page",
      "Use 100 px",
      "Ignore it",
      "Use only 500 px"
     ],
     "correta": 0,
     "explicacao": "The sources differ. 1000 px or more satisfies every reading."
    }
   ]
  },
  {
   "id": "6-3",
   "titulo": "Copy in Spain's Spanish",
   "minutos": 6,
   "fontes": [
    "sc-es-titulos",
    "sell-es-vender-online"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Copy that informs, persuades and gets found",
     "corpo": "**Copy** is the page's text: title, bullets, description, A+. It has two readers: **the customer** and **Amazon's search engine**. The golden rule: **write for the customer, and the search engine will like it too**."
    },
    {
     "tipo": "passos",
     "titulo": "The structure of a bullet that sells",
     "itens": [
      "Start with the **benefit** in a few words (in capitals)",
      "Then explain **the feature** that delivers it",
      "Use concrete **numbers and measurements**",
      "Finish with **reassurance** (guarantee, compatibility, care)"
     ]
    },
    {
     "tipo": "comparacao",
     "titulo": "Weak vs strong",
     "colunas": [
      "Weak",
      "Strong"
     ],
     "linhas": [
      [
       "Benefit",
       "Quality material.",
       "DURA MÁS: silicona alimentaria resistente a 200 °C y apta para lavavajillas."
      ],
      [
       "Size",
       "Large size.",
       "TAMAÑO IDEAL: 30 x 20 cm, cabe en cualquier cajón estándar."
      ],
      [
       "Guarantee",
       "Best product.",
       "SIN RIESGO: si no te convence, devolución gratuita en 30 días (según política de tu tienda)."
      ]
     ],
     "nota": "Fictional examples in Spanish, as they'd appear on Amazon.es; the figures aren't your product's. Only promise what the product delivers and what your store's policy allows."
    },
    {
     "tipo": "alerta",
     "titulo": "What not to write",
     "corpo": "- **Medical** or health claims without proof\n- **Comparisons** with competitors' brands\n- **\"El mejor\" (the best), \"número 1\"** without proof\n- Information that **doesn't match** the packaging\n- Copy **copied** from another seller\n\nThis leads to complaints, offer removal and loss of trust."
    },
    {
     "tipo": "delegar",
     "titulo": "Native copywriter",
     "corpo": "Hire a **native copywriter from Spain** with e-commerce experience. Give them: target audience, **3 differentiators**, dimensions, materials, what **not** to promise and search words. Ask for **a title, 5 bullets (or whatever the form asks for), a description and A+ copy**.\n\nYou review it **as a customer**: did you understand the product in 10 seconds?"
    },
    {
     "tipo": "dica",
     "corpo": "For Spain, use **tuteo** (the informal \"tú\") naturally and avoid Latin American regionalisms. Ask the copywriter for a **glossary of the terms** they used, to stay consistent across future products."
    }
   ],
   "quiz": [
    {
     "id": "6-3-q1",
     "tipo": "multipla",
     "enunciado": "Who are you writing the copy for?",
     "opcoes": [
      "The customer (and the search engine follows)",
      "Only the search engine",
      "Only the factory",
      "Only the competitor"
     ],
     "correta": 0,
     "explicacao": "Write for the customer and use the right words."
    },
    {
     "id": "6-3-q2",
     "tipo": "vf",
     "enunciado": "Copying a competitor's copy is a good way to save time.",
     "correta": false,
     "explicacao": "It can lead to complaints and doesn't differentiate your product."
    },
    {
     "id": "6-3-q3",
     "tipo": "multipla",
     "enunciado": "What makes a good bullet?",
     "opcoes": [
      "\"Quality material\"",
      "Benefit + feature + concrete number",
      "Capitals only",
      "A 500-word sentence"
     ],
     "correta": 1,
     "explicacao": "Benefit, feature and a concrete number."
    },
    {
     "id": "6-3-q4",
     "tipo": "multipla",
     "enunciado": "Who should write the final copy in Spain's Spanish?",
     "opcoes": [
      "An unchecked machine translator",
      "A native copywriter from Spain, reviewed by you",
      "The factory",
      "The carrier"
     ],
     "correta": 1,
     "explicacao": "A native speaker avoids mistakes that make the product look foreign."
    }
   ]
  },
  {
   "id": "6-4",
   "titulo": "Registered trademark and Brand Registry",
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
     "titulo": "The brand is your asset",
     "corpo": "Products get copied. A **registered trademark** is what protects your name and opens doors inside Amazon. For anyone wanting to build something lasting, it's the most important investment after the product.\n\nRegistering a trademark **isn't** required to sell, but **Brand Registry** (Amazon's protection tool) **requires** a registered trademark or a pending application."
    },
    {
     "tipo": "texto",
     "titulo": "What Brand Registry gives you, according to Amazon.es",
     "corpo": "- **Brand Analytics:** search terms, repeat purchases, basket analysis, product comparison and demographics\n- **A+ Content**, videos and 3D models on pages\n- **Ads:** Sponsored Products, Sponsored Brands and Sponsored Display\n- **Amazon Stores** (brand store)\n- **Protection:** Transparency, Project Zero, Counterfeit Crimes Unit and infringement reporting\n- **Reviews:** the ability to respond to reviews of three stars or fewer\n- **Vine:** a review programme for products with few or no reviews (for Brand Registry members; the page doesn't state the number of units)\n- **Incentives** for new brands: up to €47,250 (with 10% back on the first sales up to €45,000), subject to Amazon's conditions\n\nRegistration on Amazon is **free**. The seller subscription costs €39 a month, excl. VAT."
    },
    {
     "tipo": "texto",
     "titulo": "What Amazon asks for to enrol a brand",
     "corpo": "- An **active registered trademark** in each country where you want to enrol, **or a pending application** (filed through **IP Accelerator**, which connects you with partner law firms)\n- A **word mark** or a **figurative mark with words**; the text must match the trademark in the application\n- A **list of product categories**\n- **Verification** via a code sent to the trademark office or registered contact\n- **EU (EUIPO)** and **WIPO** trademarks are accepted; the list of countries includes Spain, France, Germany, Italy and the UK",
     "termos": []
    },
    {
     "tipo": "comparacao",
     "titulo": "Where to register: Spain or the EU",
     "colunas": [
      "OEPM (Spain)",
      "EUIPO (EU trademark)"
     ],
     "linhas": [
      [
       "Coverage",
       "Spain only",
       "The whole European Union, in one registration"
      ],
      [
       "Application fee",
       "OEPM table in force since 1/4/2026: about €148 for the first class filed online and about €99 for each additional class (check the PDF)",
       "€850 for the first class, €50 for the second, €150 per class from the third"
      ],
      [
       "Validity",
       "10 years, renewable",
       "10 years, renewable indefinitely"
      ],
      [
       "When it makes sense",
       "Focus on Spain only, smaller budget",
       "Plans to expand across Europe"
      ]
     ],
     "nota": "Official amounts checked on 2026-10-26. The OEPM fee has variants in the table and the automatic reading didn't label each column: check the PDF before paying."
    },
    {
     "tipo": "passos",
     "titulo": "The brand path",
     "itens": [
      "**Choose a name** that's short and easy to pronounce in Spanish and English",
      "**Check availability** in the OEPM and EUIPO databases (with help from a lawyer or IP agent)",
      "**Define the product classes** you'll operate in (fees grow with the classes)",
      "**Apply for registration** (Spain, EU or both)",
      "**Enrol in Brand Registry** (with the registration or pending application)",
      "Use the tools: **A+, Brand Analytics, protection, brand ads**"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Be careful with the name",
     "corpo": "A name **already registered** by someone else in your class can lead to **opposition** and losing your investment. Don't pay any fee before **checking availability**. And if the name resembles a famous brand, **change it**."
    },
    {
     "tipo": "delegar",
     "titulo": "Who does this for you",
     "corpo": "**Industrial property agent or trademark lawyer:** prior-rights search, class definition, application and follow-up. **IP Accelerator (Amazon):** connects you with partner lawyers for pending trademarks. **You:** choose the name and approve the budget."
    }
   ],
   "quiz": [
    {
     "id": "6-4-q1",
     "tipo": "multipla",
     "enunciado": "How much is the EUIPO fee for an EU trademark in the first class?",
     "opcoes": [
      "85 €",
      "850 €",
      "1.850 €",
      "Free"
     ],
     "correta": 1,
     "explicacao": "€850 for the first class, €50 for the second and €150 per additional class from the third."
    },
    {
     "id": "6-4-q2",
     "tipo": "multipla",
     "enunciado": "What does Amazon accept to enrol a brand in Brand Registry?",
     "opcoes": [
      "Only trademarks registered for 5 years",
      "An active registered trademark or a pending application via IP Accelerator",
      "A company name",
      "Nothing"
     ],
     "correta": 1,
     "explicacao": "An active trademark or pending application, with verification by code."
    },
    {
     "id": "6-4-q3",
     "tipo": "vf",
     "enunciado": "Registering a brand in Amazon's Brand Registry is free.",
     "correta": true,
     "explicacao": "Amazon says it's a free service (the seller subscription is separate)."
    },
    {
     "id": "6-4-q4",
     "tipo": "multipla",
     "enunciado": "How long is an EU trademark valid?",
     "opcoes": [
      "1 year",
      "5 years",
      "10 years, renewable",
      "Forever with no renewal"
     ],
     "correta": 2,
     "explicacao": "10 years, renewable for further ten-year periods."
    },
    {
     "id": "6-4-q5",
     "tipo": "multipla",
     "enunciado": "Which of these is a benefit Amazon mentions for Brand Registry members?",
     "opcoes": [
      "Brand Analytics",
      "Zero commission",
      "Free shipping forever",
      "Free stock"
     ],
     "correta": 0,
     "explicacao": "Brand Analytics, A+, Stores, brand ads and protection tools."
    },
    {
     "id": "6-4-q6",
     "tipo": "multipla",
     "enunciado": "What precaution comes before paying the registration fee?",
     "opcoes": [
      "Checking whether the name is available",
      "Throwing a party",
      "Buying more stock",
      "Nothing"
     ],
     "correta": 0,
     "explicacao": "A name that's already registered can lead to opposition and losing your investment."
    }
   ]
  },
  {
   "id": "6-5",
   "titulo": "GTIN, EAN and GS1",
   "minutos": 5,
   "fontes": [
    "gs1-amazon",
    "sc-es-gtin-exencion",
    "sell-es-vender-online"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Your product's ID card",
     "corpo": "When you create a new product on Amazon, it asks for an **identifier**: the [[gtin]] (also called EAN in Europe or UPC in the US). It's the number **under the barcode**. It stops two different products being confused.\n\n- **EAN/GTIN-13:** 13 digits, the European standard\n- **UPC/GTIN-12:** 12 digits, the North American standard",
     "termos": [
      "gtin"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Why GS1 matters",
     "corpo": "**GS1** is the global organisation that issues the codes. In Spain, codes come from **AECOC/GS1 Spain**. GS1 Spain says Amazon **doesn't accept just any EAN**, only **unique, authentic, global GS1 codes**. And that a product blocked because of a non-GS1 code **can't be fixed**, and loses its history.\n\nIn other words: **buying cheap codes from generic websites is a trap**. They may be duplicates or not belong to you.",
     "termos": []
    },
    {
     "tipo": "alerta",
     "titulo": "GS1 Spain doesn't publish prices on the page",
     "corpo": "GS1 Spain's codes-for-Amazon page says membership gives access to **unlimited codes**, but **doesn't give prices**. Ask AECOC/GS1 Spain for a quote directly."
    },
    {
     "tipo": "texto",
     "titulo": "GTIN exemption: when there's no code",
     "corpo": "If the product **has no GS1 code**, Amazon lets you apply for a **GTIN exemption**. According to an official Amazon.es answer on the forum (confirm the current path in Seller Central):\n\n- it's **not available** when the product or packaging already has a GS1 code: in that case, use the code\n- you need **between 2 and 9 real images** of the product and packaging, from all sides\n- the **brand** written in the application must be **the same** as on the product or packaging\n- the brand must be **permanently affixed** to the product or packaging\n- even with an exemption, certain branded products can't be listed without an identifier"
    },
    {
     "tipo": "comparacao",
     "titulo": "GS1 code vs exemption",
     "colunas": [
      "GS1 code",
      "GTIN exemption"
     ],
     "linhas": [
      [
       "Cost",
       "GS1 membership (ask for a quote)",
       "No code cost"
      ],
      [
       "When",
       "The most robust route for brands that want to grow",
       "For products without a code, with conditions"
      ],
      [
       "Advantage",
       "Your own code, valid in other stores and retailers",
       "Quick to get started"
      ],
      [
       "Watch out",
       "Pay for legitimate codes",
       "Requires real photos and a permanent brand on the product"
      ]
     ],
     "nota": "Qualitative chart. Amazon doesn't publish the full exemption criteria on the page."
    },
    {
     "tipo": "delegar",
     "corpo": "**Factory:** prints the barcode on the packaging (you send the file). **Assistant:** gets a quote from GS1 and registers the codes. **You:** decide between GS1 and exemption according to your brand plan."
    },
    {
     "tipo": "dica",
     "corpo": "If you plan to **sell in other stores or retailers** besides Amazon, **GS1** codes work everywhere. For a long-term brand, it's the cleanest route."
    }
   ],
   "quiz": [
    {
     "id": "6-5-q1",
     "tipo": "multipla",
     "enunciado": "What is the GTIN?",
     "opcoes": [
      "The number under the barcode that identifies the product",
      "The sales tax",
      "The brand name",
      "The FBA fee"
     ],
     "correta": 0,
     "explicacao": "The GTIN is the identifier under the barcode, also called EAN or UPC."
    },
    {
     "id": "6-5-q2",
     "tipo": "vf",
     "enunciado": "Amazon accepts any EAN from any online generator.",
     "correta": false,
     "explicacao": "GS1 says Amazon only accepts unique, authentic, global GS1 codes."
    },
    {
     "id": "6-5-q3",
     "tipo": "multipla",
     "enunciado": "When is the GTIN exemption not available?",
     "opcoes": [
      "When the product or packaging already has a GS1 code",
      "When it's a kitchen product",
      "When it's sold in Spain",
      "Never"
     ],
     "correta": 0,
     "explicacao": "If a GS1 code exists, you must use the code."
    },
    {
     "id": "6-5-q4",
     "tipo": "multipla",
     "enunciado": "To apply for the exemption, how many real images does Amazon indicate (official forum answer)?",
     "opcoes": [
      "1",
      "2 to 9",
      "50",
      "None"
     ],
     "correta": 1,
     "explicacao": "2 to 9 real images of the product and packaging."
    },
    {
     "id": "6-5-q5",
     "tipo": "multipla",
     "enunciado": "How many digits does an EAN/GTIN-13 have?",
     "opcoes": [
      "8",
      "12",
      "13",
      "20"
     ],
     "correta": 2,
     "explicacao": "13 digits, the European standard. The UPC has 12."
    }
   ]
  }
 ]
};

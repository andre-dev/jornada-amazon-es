// Mundo 4 (en). Gerado por tools/i18n-mundos.mjs a partir de js/content/world4.js.
export default {
 "id": 4,
 "chefe": {
  "id": "capitao-container",
  "nome": "Captain Container",
  "hp": 100,
  "fala": "Ahoy! Your batch is stuck in port without paperwork. Answer right or you stay anchored!",
  "derrota": "You sailed well. The cargo heads on to the warehouse.",
  "perguntas": [
   {
    "id": "b4-1",
    "tipo": "multipla",
    "licaoRef": "4-1",
    "enunciado": "What's the first thing to check about a new supplier?",
    "opcoes": [
     "Whether it's a factory or a middleman, and whether the company really exists (registration, address, references)",
     "Whether the logo looks nice",
     "Whether they reply to messages quickly",
     "Whether they have the lowest price"
    ],
    "correta": 0,
    "explicacao": "A low price and quick replies prove nothing. Start with real existence and capacity."
   },
   {
    "id": "b4-2",
    "tipo": "vf",
    "licaoRef": "4-2",
    "enunciado": "Ordering a sample is optional when the supplier has good photos.",
    "correta": false,
    "explicacao": "A photo doesn't show material, finish or dimensions. The sample is your first quality check."
   },
   {
    "id": "b4-3",
    "tipo": "multipla",
    "licaoRef": "4-2",
    "enunciado": "What's a third-party pre-shipment inspection for?",
    "opcoes": [
     "To check the batch against the agreed specification before paying the balance and shipping",
     "To pay less tax",
     "To register the trademark",
     "To avoid needing a contract"
    ],
    "correta": 0,
    "explicacao": "Inspecting before shipping is cheaper than finding the defect after the stock has arrived."
   },
   {
    "id": "b4-4",
    "tipo": "multipla",
    "licaoRef": "4-3",
    "enunciado": "Under the EXW Incoterm, who handles transport and export clearance?",
    "opcoes": [
     "The seller, entirely",
     "The buyer",
     "Amazon",
     "The bank"
    ],
    "correta": 1,
    "explicacao": "Under EXW the seller just makes the goods available at their premises. The buyer takes on transport and export formalities."
   },
   {
    "id": "b4-5",
    "tipo": "multipla",
    "licaoRef": "4-3",
    "enunciado": "Why does the ICC article suggest FCA instead of EXW and DAP instead of DDP where possible?",
    "opcoes": [
     "Because they're always cheaper",
     "Because they reduce export or import clearance difficulties",
     "Because they eliminate taxes",
     "Because they don't need transport"
    ],
    "correta": 1,
    "explicacao": "FCA saves the buyer from clearing exports in the seller's country, and DAP saves the seller from clearing imports."
   },
   {
    "id": "b4-6",
    "tipo": "multipla",
    "licaoRef": "4-4",
    "enunciado": "When importing, what's the role of TARIC?",
    "opcoes": [
     "Registering trademarks",
     "Looking up the goods' classification, customs duties, import VAT and other applicable measures",
     "Opening a seller account",
     "Paying freight"
    ],
    "correta": 1,
    "explicacao": "TARIC brings together the EU common customs tariff and trade policy measures for each product."
   },
   {
    "id": "b4-7",
    "tipo": "multipla",
    "licaoRef": "4-4",
    "enunciado": "According to the Agencia Tributaria, the import VAT base starts from...",
    "opcoes": [
     "Just the factory price",
     "Customs value plus duties and other charges, and costs up to the first destination in the EU",
     "The selling price on Amazon",
     "The profit"
    ],
    "correta": 1,
    "explicacao": "Customs value + duties and charges (except VAT itself) + incidental costs up to the first destination within the EU."
   },
   {
    "id": "b4-8",
    "tipo": "multipla",
    "licaoRef": "4-4",
    "enunciado": "Customs value €5,650, hypothetical import duty of 3% (€169.50) and transport to the warehouse of €150. What's the import VAT at 21%?",
    "opcoes": [
     "1.186,50 €",
     "1.253,60 €",
     "1.300,00 €",
     "1.000,00 €"
    ],
    "correta": 1,
    "explicacao": "Base = 5,650 + 169.50 + 150 = 5,969.50. VAT = 21% of 5,969.50 = €1,253.60."
   },
   {
    "id": "b4-9",
    "tipo": "vf",
    "licaoRef": "4-4",
    "enunciado": "Amazon says its fulfilment centres can be the importer of record for your goods from outside the EU.",
    "correta": false,
    "explicacao": "Amazon.es says its fulfilment centres can't be the importer of record."
   },
   {
    "id": "b4-10",
    "tipo": "multipla",
    "licaoRef": "4-5",
    "enunciado": "What's the new maximum standard box length for new FBA shipments in Spain, according to the official announcement?",
    "opcoes": [
     "40 cm",
     "63.5 cm",
     "91.4 cm",
     "120 cm"
    ],
    "correta": 1,
    "explicacao": "The maximum length was cut from 91.4 cm to 63.5 cm. Non-compliant shipments may be refused or incur fees."
   },
   {
    "id": "b4-11",
    "tipo": "ordenar",
    "licaoRef": "4-5",
    "enunciado": "Put the batch's journey to becoming sellable in FBA in order:",
    "opcoes": [
     "The factory produces and labels to specification",
     "Pre-shipment inspection",
     "Transport and clearance in the EU",
     "Delivery to the Amazon fulfilment centre and check-in"
    ],
    "explicacao": "Production, inspection, transport and clearance, delivery and check-in."
   }
  ]
 },
 "licoes": [
  {
   "id": "4-1",
   "titulo": "Where to find suppliers",
   "minutos": 6,
   "fontes": [
    "sell-es-vender-online"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "mercado",
     "titulo": "The market is big, and so is the trap",
     "corpo": "For own brand, most sellers buy from **factories in Asia**, but there are also suppliers in **Europe** (Portugal, Turkey, Spain and others). Each region trades off **price, lead time, quality and paperwork**.\n\nThe Supplier Market rule: **whoever buys cheapest without checking ends up paying more**."
    },
    {
     "tipo": "comparacao",
     "titulo": "Where to look",
     "colunas": [
      "Advantage",
      "Watch out"
     ],
     "linhas": [
      [
       "Online B2B platforms (Alibaba, Made-in-China, Global Sources and similar)",
       "Lots of suppliers, quick comparison",
       "There are middlemen and weak profiles: check everything"
      ],
      [
       "Trade fairs (in person)",
       "You see the product, the factory and the person",
       "Travel cost and time"
      ],
      [
       "Sourcing agent",
       "Knows factories, negotiates and follows up",
       "Commission; choose an agent with references"
      ],
      [
       "European manufacturers",
       "Short lead time, no customs, easy communication",
       "Unit cost usually higher"
      ]
     ],
     "nota": "Qualitative comparison. Platform names are examples, not recommendations."
    },
    {
     "tipo": "passos",
     "titulo": "How to check a supplier",
     "itens": [
      "Ask for the **company registration** and factory address; check they match",
      "Ask whether it's a **factory** or a **trading company** (middleman)",
      "Ask for **references** and photos/videos of the production line",
      "Do a **video call** with the factory",
      "Ask for the **certificates** your product needs (CE, tests), with number and date",
      "Start with a **small order** and protected payment"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Warning signs",
     "corpo": "- A price **far below** everyone else's\n- Refusing a video call or to send documents\n- Asking for full payment up front to a **personal** account\n- A bank account in a different name from the company\n- Generic certificates, with no number or odd dates\n\nAny one of these is a reason to pause, and two together a reason to walk away."
    },
    {
     "tipo": "delegar",
     "titulo": "Who does this for you",
     "corpo": "**Sourcing agent:** searches, filters, visits and negotiates. **You:** decide and pay safely (ideally company account to company account, with a contract). **Lawyer or gestoría:** review the purchase contract if the amount is large.",
     "termos": []
    },
    {
     "tipo": "dica",
     "corpo": "Get quotes from **3 to 5 suppliers** and compare **spec by spec**, not just price. The cheapest quote often uses a different material or finish."
    }
   ],
   "quiz": [
    {
     "id": "4-1-q1",
     "tipo": "multipla",
     "enunciado": "What's the most important question in your first conversation with a supplier?",
     "opcoes": [
      "Is it a factory or a middleman, and what's its real capacity?",
      "What's your maximum discount?",
      "Do you have a logo?",
      "How old is the owner?"
     ],
     "correta": 0,
     "explicacao": "Knowing who you're talking to changes price, lead time and quality control."
    },
    {
     "id": "4-1-q2",
     "tipo": "vf",
     "enunciado": "The supplier with the lowest price is always the best choice.",
     "correta": false,
     "explicacao": "A very low price often hides an inferior spec or a scam."
    },
    {
     "id": "4-1-q3",
     "tipo": "multipla",
     "enunciado": "Which of these is a warning sign?",
     "opcoes": [
      "Agrees to a video call",
      "Asks for full payment up front to a personal account",
      "Sends certificates with numbers",
      "Has a verifiable factory address"
     ],
     "correta": 1,
     "explicacao": "A personal account and full payment up front are typical signs of a scam."
    },
    {
     "id": "4-1-q4",
     "tipo": "multipla",
     "enunciado": "What's the main advantage of European manufacturers?",
     "opcoes": [
      "Always cheaper",
      "Short lead time and no import customs",
      "No contract",
      "No quality control"
     ],
     "correta": 1,
     "explicacao": "Within the EU there's no import clearance and lead times are usually shorter, although unit costs may be higher."
    }
   ]
  },
  {
   "id": "4-2",
   "titulo": "Samples, MOQ, contract and inspection",
   "minutos": 7,
   "fontes": [
    "ue-ce",
    "ue-gpsr-faq",
    "sell-es-fba"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "The right order: sample, then order, then inspection",
     "corpo": "The classic mistake is ordering thousands of units of a product you've never held. The safe path:\n\n1. **A sample** of each finalist\n2. **Test** the samples (use, open, measure, weigh, bend them)\n3. **A pilot order** (small)\n4. **Inspection** before shipping\n5. **A bigger order**, only after the pilot sells"
    },
    {
     "tipo": "texto",
     "titulo": "MOQ: minimum order quantity",
     "corpo": "The **MOQ** (minimum order quantity) is the smallest batch the factory accepts. It **varies a lot** by product and factory and is almost always **negotiable**, especially if you accept less customisation.\n\nThe MOQ sets the **capital you put at risk**. Do the maths on your first purchase with the margin calculated in World 5, and only accept an MOQ you could afford to lose.",
     "termos": []
    },
    {
     "tipo": "passos",
     "titulo": "What the contract or order must state",
     "itens": [
      "Full **specification**: material, dimensions, colour, weight, finish",
      "**Approved sample** as the standard (signed and photographed)",
      "**Packaging and label**: what goes in each unit's box",
      "Production and delivery **lead time**, with a late-delivery penalty if possible",
      "**Payment terms** and when the balance is released",
      "**Documents**: declaration of conformity, test reports, commercial invoice",
      "**Intellectual property**: the brand and design are yours, and the factory doesn't sell them to others"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "What the EU requires of your product",
     "corpo": "Selling under your own brand makes you **the manufacturer for legal purposes** (World 2). So the order must include:\n\n- **CE marking** and EU declaration of conformity, when the product requires it (the documentation must be kept for at least 10 years)\n- **GPSR information** on the product itself: manufacturer's name and brand, postal and email address and, if outside the EU, the details of the EU responsible person\n- The product's correct **barcode label**"
    },
    {
     "tipo": "texto",
     "titulo": "Inspection: confirm before shipping",
     "corpo": "**Third-party inspection** companies visit the factory and check a **sample of the batch** against your specification. When the batch is ready, **before** paying the balance and shipping.\n\nIt's a small cost compared with defective stock. You set the acceptance criteria (how many defects are tolerated) and they deliver a **report with photos**.",
     "termos": []
    },
    {
     "tipo": "delegar",
     "corpo": "**Sourcing agent:** handles samples and negotiation. **Inspection company:** audits the batch. **Lab:** safety tests when required. **Lawyer:** reviews high-value contracts. **You:** approve the final sample and release payment."
    },
    {
     "tipo": "dica",
     "corpo": "Keep **everything in writing**: specification, approved sample (with photo), conversations and reports. If there's a dispute with the factory, the evidence is what counts."
    }
   ],
   "quiz": [
    {
     "id": "4-2-q1",
     "tipo": "ordenar",
     "enunciado": "Put the safe buying path in order:",
     "opcoes": [
      "Order and test samples",
      "Place a small pilot order",
      "Inspect the batch before shipping",
      "Place a bigger order after the pilot sells"
     ],
     "explicacao": "Sample, pilot, inspection, and only then scale."
    },
    {
     "id": "4-2-q2",
     "tipo": "multipla",
     "enunciado": "What is MOQ?",
     "opcoes": [
      "An import tax",
      "The factory's minimum order quantity",
      "A barcode",
      "An Amazon fee"
     ],
     "correta": 1,
     "explicacao": "MOQ is the smallest batch the factory will produce or sell."
    },
    {
     "id": "4-2-q3",
     "tipo": "vf",
     "enunciado": "The MOQ is always fixed and can't be negotiated.",
     "correta": false,
     "explicacao": "It's often negotiable, especially with less customisation."
    },
    {
     "id": "4-2-q4",
     "tipo": "multipla",
     "enunciado": "When does the third-party inspection take place?",
     "opcoes": [
      "After the stock reaches the warehouse",
      "Before shipping and before paying the balance",
      "Before ordering the sample",
      "Never"
     ],
     "correta": 1,
     "explicacao": "The inspection should happen once the batch is ready, before releasing the balance and shipping."
    },
    {
     "id": "4-2-q5",
     "tipo": "multipla",
     "enunciado": "Someone selling their own brand made by a factory should require in the order...",
     "opcoes": [
      "Just the price",
      "A declaration of conformity, test reports and the information GPSR requires where applicable",
      "Nothing",
      "Just the invoice"
     ],
     "correta": 1,
     "explicacao": "You're the manufacturer for legal purposes. The documentation must exist and be kept."
    }
   ]
  },
  {
   "id": "4-3",
   "titulo": "Freight and Incoterms",
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
     "titulo": "How much it costs and how long it takes",
     "corpo": "Goods travel by **sea, air, rail or express courier**. The qualitative rule applies to any route:\n\n- **Sea:** the cheapest per unit, and the slowest\n- **Air:** fast and expensive, good for urgency or high-value, low-weight products\n- **Rail:** in between on time and cost, where available\n- **Express:** handy for samples and small batches, uneconomical for volume\n\nLead times and prices **change every week**. Always get a quote from a **freight forwarder** at the time of ordering."
    },
    {
     "tipo": "texto",
     "titulo": "Incoterms: who does what",
     "corpo": "**Incoterms** are ICC (International Chamber of Commerce) rules that set out **responsibilities, costs and risks** between seller and buyer. Incoterms 2020 has **11 rules**: seven for any mode of transport (**EXW, FCA, CPT, CIP, DAP, DPU, DDP**) and four for sea transport only (**FAS, FOB, CFR, CIF**).\n\nThey **don't** set the price, payment method, transfer of ownership or clearance documents in the buyer's country: that goes in the contract.",
     "termos": [
      "incoterm"
     ]
    },
    {
     "tipo": "comparacao",
     "titulo": "The two extremes",
     "colunas": [
      "EXW",
      "DDP"
     ],
     "linhas": [
      [
       "Seller",
       "Only makes the goods available at the factory or warehouse",
       "Delivers to the agreed destination, bearing transport, costs and risks up to there"
      ],
      [
       "Buyer",
       "Loads, transports and bears costs and risks from the factory",
       "Only unloads the final vehicle"
      ],
      [
       "Clearance",
       "The buyer handles export and import",
       "The seller handles export and import"
      ],
      [
       "Risk passes to the buyer",
       "When the goods are made available at the factory",
       "On arrival at the destination"
      ]
     ],
     "nota": "According to the ICC. The article suggests FCA instead of EXW and DAP instead of DDP where possible, to reduce clearance difficulties."
    },
    {
     "tipo": "texto",
     "titulo": "What this means in practice",
     "corpo": "- **FOB** (sea only): the seller delivers the goods on board at the port of origin and, after that, the buyer takes on main transport and risk.\n- **CIF** (sea only): the seller pays freight to the destination port and basic insurance; standard cover is level \"C\" of the Institute Cargo Clauses.\n- **EXW:** looks cheap, but **you** have to arrange export in China. For beginners, it's the riskiest.\n- **DDP:** looks convenient, but is hard in practice, because some countries forbid foreign companies from clearing imports.\n\nFor a first batch, many importers use **FOB or FCA** with a forwarder."
    },
    {
     "tipo": "alerta",
     "titulo": "Freight has to go into the numbers",
     "corpo": "Freight, insurance, clearance and inland transport to the warehouse **are part of the product cost**. Without them, the World 5 margin is an illusion. Ask the forwarder for a **door-to-door** quote (factory to warehouse) with **every line**."
    },
    {
     "tipo": "delegar",
     "corpo": "**Freight forwarder:** quotes, books and tracks the cargo. **Customs agent:** files the EU import declaration (lesson 4-4). **Insurer or the forwarder itself:** cargo insurance. **Amazon:** the Partnered Carrier programme and Amazon Global Logistics can help with FBA inbound shipments."
    },
    {
     "tipo": "dica",
     "corpo": "Get quotes from **two or three forwarders** and compare the **total of everything**, not just the freight line."
    }
   ],
   "quiz": [
    {
     "id": "4-3-q1",
     "tipo": "multipla",
     "enunciado": "How many rules does Incoterms 2020 have?",
     "opcoes": [
      "5",
      "8",
      "11",
      "20"
     ],
     "correta": 2,
     "explicacao": "11: seven for any mode of transport and four for sea transport."
    },
    {
     "id": "4-3-q2",
     "tipo": "multipla",
     "enunciado": "Under EXW, who handles export?",
     "opcoes": [
      "The seller",
      "The buyer",
      "Amazon",
      "Nobody"
     ],
     "correta": 1,
     "explicacao": "Under EXW the buyer takes on export and import formalities."
    },
    {
     "id": "4-3-q3",
     "tipo": "multipla",
     "enunciado": "Which mode is usually cheapest per unit and slowest?",
     "opcoes": [
      "Air",
      "Sea",
      "Express",
      "Drone"
     ],
     "correta": 1,
     "explicacao": "Sea freight is the most economical for volume and the slowest."
    },
    {
     "id": "4-3-q4",
     "tipo": "vf",
     "enunciado": "Incoterms set the payment method and the price of the goods.",
     "correta": false,
     "explicacao": "Incoterms cover delivery, costs and risks. Price and payment belong in the contract."
    },
    {
     "id": "4-3-q5",
     "tipo": "multipla",
     "enunciado": "What should go into the product cost besides the factory price?",
     "opcoes": [
      "Nothing",
      "Freight, insurance, clearance and transport to the warehouse",
      "Only sea freight",
      "Only VAT"
     ],
     "correta": 1,
     "explicacao": "Everything until the product is in the warehouse is part of the cost."
    }
   ]
  },
  {
   "id": "4-4",
   "titulo": "EU customs: TARIC, SAD and import VAT",
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
     "titulo": "You've reached the EU border",
     "corpo": "Goods from outside the EU must be **declared to customs** to enter. The declaration (in Spain, the **DUA**, Single Administrative Document) states what the product is, where it comes from, what it's worth and which duties apply.\n\nThe **EORI** (World 2) is mandatory before filing a customs declaration.",
     "termos": [
      "eori"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "TARIC: the tariff map",
     "corpo": "**TARIC** is the regulation that brings together the **EU common customs tariff** and other measures. According to the Agencia Tributaria, it shows the **customs duties and import VAT** that apply to a product, as well as trade policy measures.\n\nThe tariff is based on the **Combined Nomenclature**, updated every year. Each product has a **classification code**. The wrong code changes the duty and requirements and can lead to fines. The Agencia Tributaria offers a public TARIC lookup on its website.",
     "termos": [
      "taric"
     ]
    },
    {
     "tipo": "passos",
     "titulo": "How clearance works",
     "itens": [
      "The **product code** is set (TARIC)",
      "The **declarant** (you or your customs agent) files the **DUA** with value, origin and documents (commercial invoice, packing list, bill of lading)",
      "Customs releases the goods **or** asks for an inspection or documents",
      "You pay **import duties and import VAT**",
      "The cargo goes on to the warehouse"
     ],
     "termos": [
      "dua"
     ]
    },
    {
     "tipo": "calculo",
     "titulo": "Hypothetical example: a €5,000 batch from outside the EU",
     "corpo": "The duty rate (3%) is **hypothetical**: the real one comes from TARIC based on the code and origin.",
     "linhas": [
      [
       "Customs value (goods + freight and insurance to the EU)",
       "5.650,00 €"
      ],
      [
       "Hypothetical import duty (3% of customs value)",
       "169,50 €"
      ],
      [
       "Transport to the first destination in the EU",
       "150,00 €"
      ],
      [
       "VAT base (5,650.00 + 169.50 + 150.00)",
       "5.969,50 €"
      ]
     ],
     "total": [
      "Import VAT (21% of the base)",
      "1.253,60 €"
     ],
     "nota": "According to the Agencia Tributaria, the VAT base is the customs value plus duties, charges (except VAT itself) and costs up to the first destination in the EU. Import VAT is, as a rule, **recoverable** on your VAT return (ask your gestoría)."
    },
    {
     "tipo": "alerta",
     "titulo": "The €3 tax mistake",
     "corpo": "On 1 July 2026 the EU began charging a **temporary flat duty of €3 per item** on **low-value consignments (up to €150)** from distance sales outside the EU, until 1 July 2028. It was designed for **parcels to consumers**. A **commercial batch for the warehouse** goes through normal clearance, but **confirm how it's treated** with your customs agent."
    },
    {
     "tipo": "texto",
     "titulo": "Who the importer of record is",
     "corpo": "Amazon says its **fulfilment centres can't be the importer of record** for goods from outside the EU. In other words: **you** (with an EORI) or a **partner** (customs agent, forwarder, specialist service) imports on your behalf.\n\nThat means **responsibility**: if the declaration is wrong, the customs debt belongs to the importer."
    },
    {
     "tipo": "delegar",
     "titulo": "Who does this for you",
     "corpo": "**Customs agent / forwarder with customs service:** classifies the product, files the DUA, pays duties and VAT and delivers the batch. **Gestoría:** records the import VAT on your return. **You:** send a correct commercial invoice, packing list and product photos.\n\nAsk for a **quote with all clearance costs** before shipping."
    }
   ],
   "quiz": [
    {
     "id": "4-4-q1",
     "tipo": "multipla",
     "enunciado": "What's the import VAT base, according to the Agencia Tributaria?",
     "opcoes": [
      "Just the factory price",
      "Customs value + duties and charges (except VAT) + costs up to the first destination in the EU",
      "The selling price on Amazon",
      "Zero"
     ],
     "correta": 1,
     "explicacao": "VAT applies to the customs value plus duties, charges and costs up to the first destination."
    },
    {
     "id": "4-4-q2",
     "tipo": "multipla",
     "enunciado": "What is TARIC for?",
     "opcoes": [
      "Looking up customs duties, VAT and measures for each product",
      "Opening a company",
      "Applying for the NIE",
      "Registering a trademark"
     ],
     "correta": 0,
     "explicacao": "TARIC is the EU's integrated customs tariff."
    },
    {
     "id": "4-4-q3",
     "tipo": "vf",
     "enunciado": "Amazon's fulfilment centres can be the importer of record for your goods from outside the EU.",
     "correta": false,
     "explicacao": "According to Amazon.es, they can't."
    },
    {
     "id": "4-4-q4",
     "tipo": "multipla",
     "enunciado": "What temporary flat duty does the EU apply to low-value items sold at a distance from 1/7/2026?",
     "opcoes": [
      "€1 per parcel",
      "€3 per item",
      "10% of the value",
      "€50 per consignment"
     ],
     "correta": 1,
     "explicacao": "€3 per item, until 1 July 2028, for consignments up to €150."
    },
    {
     "id": "4-4-q5",
     "tipo": "multipla",
     "enunciado": "Calculate: VAT base of €5,969.50 at 21%. What's the VAT?",
     "opcoes": [
      "1.186,50 €",
      "1.253,60 €",
      "1.500,00 €",
      "1.000,00 €"
     ],
     "correta": 1,
     "explicacao": "5,969.50 × 0.21 = €1,253.60."
    },
    {
     "id": "4-4-q6",
     "tipo": "multipla",
     "enunciado": "Which number is mandatory before filing a customs declaration in the EU?",
     "opcoes": [
      "TARIC",
      "EORI",
      "ASIN",
      "GTIN"
     ],
     "correta": 1,
     "explicacao": "The EORI identifies the operator to EU customs."
    }
   ]
  },
  {
   "id": "4-5",
   "titulo": "Prep and send to the warehouse",
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
     "titulo": "From container to Amazon's shelf",
     "corpo": "After clearance, the batch has to reach the **Amazon fulfilment centre** in the right condition. According to Amazon.es, the path has five stages:\n\n1. **Register** the seller account\n2. **Listings** created or converted\n3. **Prep and shipping** following the packaging and prep requirements\n4. **Receiving** (shipment statuses: delivered, checked in, receiving, closed)\n5. **Managing** inventory with Seller Central reports"
    },
    {
     "tipo": "texto",
     "titulo": "Labels: every unit needs an identity",
     "corpo": "Every unit sent to FBA needs a **barcode label**, usually Amazon's [[fnsku]], so the warehouse knows whose item it is. There are two ways: **label it yourself** (or have the factory or prep centre do it) or **let Amazon label it** (charged per unit: check the current fee in Seller Central).\n\nAsk the factory to **apply the labels** already, if the product is confirmed, and avoid rework.",
     "termos": [
      "fnsku"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Boxes: the limit that changed",
     "corpo": "According to an official Amazon.es announcement, the **maximum standard box length** for new FBA shipments (UK, France, Germany, Italy and Spain) fell from **91.4 cm to 63.5 cm**, with width and height of **63.5 cm**. Non-compliant shipments may be **refused** or incur **fees**.\n\nOn **maximum weight per box**, sellers mention 15 kg and 23 kg, but that's **not official**: check the current limit in Seller Central's shipping requirements before putting the batch together."
    },
    {
     "tipo": "alerta",
     "titulo": "Large and heavy items are a separate case",
     "corpo": "For large and heavy items, Amazon.es has the **Large and Heavy programme** (Grande y Pesado). For Spain, the page mentions length of **175 to 300 cm**, weight of **31.5 to 120 kg** and girth of **360 to 800 cm**. The FBA fee in that range is much higher and charged by weight."
    },
    {
     "tipo": "texto",
     "titulo": "Entry incentives Amazon advertises",
     "corpo": "For sellers sending their first batch, Amazon.es describes (subject to change):\n\n- **Partnered Carrier:** a **€90** credit on shipping costs, activated when Amazon receives the first shipment. The first shipment must arrive **within 90 days** of publishing the first sellable product\n- **Amazon Global Logistics:** a **€180** credit on fulfilment fees for new sellers\n- **New Selection:** free monthly storage, free liquidations and free returns processing (conditions on the page)\n- First-year exemptions from some storage and inventory coverage fees\n\nConditions and amounts change. Read the terms before counting on them."
    },
    {
     "tipo": "delegar",
     "titulo": "Who does this for you",
     "corpo": "**Prep centre or factory:** label and pack according to the rules. **Forwarder:** schedule delivery to the fulfilment centre. **Account manager/assistant:** create the shipment in Seller Central. **You:** check the **first unit** of the batch in person (have one sent to your address) and approve the shipment."
    },
    {
     "tipo": "dica",
     "corpo": "For the first batch, many sellers order **one extra unit to their home** to check the label, packaging and GPSR details before the bulk goes to the warehouse."
    }
   ],
   "quiz": [
    {
     "id": "4-5-q1",
     "tipo": "multipla",
     "enunciado": "What's the maximum standard box length for new FBA shipments, according to the official announcement?",
     "opcoes": [
      "63.5 cm",
      "91.4 cm",
      "120 cm",
      "30 cm"
     ],
     "correta": 0,
     "explicacao": "The limit fell from 91.4 to 63.5 cm for new shipments."
    },
    {
     "id": "4-5-q2",
     "tipo": "vf",
     "enunciado": "The per-box weight limits sellers mention on the forum (15 kg and 23 kg) are an official Amazon rule.",
     "correta": false,
     "explicacao": "They're unofficial reports. Confirm in Seller Central."
    },
    {
     "id": "4-5-q3",
     "tipo": "multipla",
     "enunciado": "What must every unit sent to FBA have?",
     "opcoes": [
      "A barcode label that identifies it (such as the FNSKU)",
      "A ribbon",
      "A letter",
      "Nothing"
     ],
     "correta": 0,
     "explicacao": "Without the right label, the warehouse doesn't know whose item it is."
    },
    {
     "id": "4-5-q4",
     "tipo": "multipla",
     "enunciado": "What's the Partnered Carrier programme credit mentioned by Amazon.es?",
     "opcoes": [
      "10 €",
      "90 €",
      "900 €",
      "9.000 €"
     ],
     "correta": 1,
     "explicacao": "€90 on shipping costs, with conditions, and it may change."
    },
    {
     "id": "4-5-q5",
     "tipo": "multipla",
     "enunciado": "Why order an extra unit to your home with the first batch?",
     "opcoes": [
      "To check the label, packaging and required details before the main shipment",
      "To sell it outside Amazon",
      "To pay less tax",
      "No reason"
     ],
     "correta": 0,
     "explicacao": "A label or paperwork error across a whole batch is far more expensive to fix."
    }
   ]
  }
 ]
};

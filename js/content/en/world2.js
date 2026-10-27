// Mundo 2 (en). Gerado por tools/i18n-mundos.mjs a partir de js/content/world2.js.
export default {
 "id": 2,
 "chefe": {
  "id": "burocratio",
  "nome": "Bureaucratius, the Stamper",
  "hp": 100,
  "fala": "No stamp, no account! Did you bring all the forms? I doubt it!",
  "derrota": "My stamps... were all in order. You may pass, entrepreneur.",
  "perguntas": [
   {
    "id": "b2-1",
    "tipo": "multipla",
    "licaoRef": "2-1",
    "enunciado": "What role does the NIE play for someone starting a business in Spain?",
    "opcoes": [
     "It's the Seller Central account password",
     "It's the tax identification number for foreigners, needed to open a company, sign contracts and open accounts",
     "It's the Professional plan number",
     "It's the product's barcode"
    ],
    "correta": 1,
    "explicacao": "The NIE identifies the foreigner to the authorities and is the basis for almost every tax and banking procedure."
   },
   {
    "id": "b2-2",
    "tipo": "vf",
    "licaoRef": "2-1",
    "enunciado": "Having an NIE on its own means you're allowed to be self-employed in Spain.",
    "correta": false,
    "explicacao": "The NIE is identification, not a work permit. Permission depends on your type of residence and must be confirmed with an immigration lawyer."
   },
   {
    "id": "b2-3",
    "tipo": "multipla",
    "licaoRef": "2-2",
    "enunciado": "What's the minimum share capital for an SL (limited company) under Law 18/2022?",
    "opcoes": [
     "€3,000, no exceptions",
     "€1, with protective rules until it reaches €3,000",
     "€60,000",
     "There's no share capital"
    ],
    "correta": 1,
    "explicacao": "The law set the minimum at €1, but until it reaches €3,000 there's a reinforced legal reserve and partners are liable on liquidation."
   },
   {
    "id": "b2-4",
    "tipo": "multipla",
    "licaoRef": "2-2",
    "enunciado": "What's the main difference in liability between autónomo and SL?",
    "opcoes": [
     "None",
     "The autónomo is liable with personal assets; the SL separates the company's assets from the partners' (with exceptions)",
     "The SL is always liable with personal assets",
     "The autónomo never pays tax"
    ],
    "correta": 1,
    "explicacao": "The SL creates a separate legal entity. An autónomo and the individual are the same person to creditors."
   },
   {
    "id": "b2-5",
    "tipo": "multipla",
    "licaoRef": "2-3",
    "enunciado": "A seller from outside the EU stores products in Spain via FBA. What does Amazon say?",
    "opcoes": [
     "Nothing needs to be done",
     "You must register for Spanish VAT and, for non-EU residents, a fiscal representative may be required",
     "Just open a PayPal account",
     "You only need an EORI"
    ],
    "correta": 1,
    "explicacao": "Stock in Spain creates a local VAT obligation. Outside the EU it may require a fiscal representative with joint liability."
   },
   {
    "id": "b2-6",
    "tipo": "multipla",
    "licaoRef": "2-4",
    "enunciado": "What are Spain's VAT rates according to the Agencia Tributaria?",
    "opcoes": [
     "Standard 21%, reduced 10% and 4%",
     "Standard 25%, reduced 12%",
     "Standard 19%, reduced 7%",
     "A single 10% rate"
    ],
    "correta": 0,
    "explicacao": "21% standard, with 10% and 4% as reduced rates, and 0% on certain transactions."
   },
   {
    "id": "b2-7",
    "tipo": "multipla",
    "licaoRef": "2-4",
    "enunciado": "A product costs €24.20 including 21% VAT. What's the price excluding VAT?",
    "opcoes": [
     "19,36 €",
     "20,00 €",
     "21,00 €",
     "24,20 €"
    ],
    "correta": 1,
    "explicacao": "24.20 ÷ 1.21 = €20.00. The VAT is €4.20. Dividing by 1.21 (not subtracting 21%) is the most common mistake."
   },
   {
    "id": "b2-8",
    "tipo": "vf",
    "licaoRef": "2-4",
    "enunciado": "The quarterly form 303 (VAT) is filed between the 1st and 20th of the month after the quarter, except Q4, which runs from 1 to 30 January.",
    "correta": true,
    "explicacao": "Deadlines published by the Agencia Tributaria. If the last day isn't a working day, it moves to the next working day."
   },
   {
    "id": "b2-9",
    "tipo": "multipla",
    "licaoRef": "2-5",
    "enunciado": "What's the threshold for sales to consumers in other EU countries below which your own country's VAT applies?",
    "opcoes": [
     "€1,000 a month",
     "€10,000 a year (excl. VAT), adding the current and previous year",
     "€35,000 a quarter",
     "There's no threshold"
    ],
    "correta": 1,
    "explicacao": "Above €10,000, the customer's country's VAT applies, and OSS lets you declare it all in one place."
   },
   {
    "id": "b2-10",
    "tipo": "vf",
    "licaoRef": "2-5",
    "enunciado": "OSS returns replace your country's normal VAT returns.",
    "correta": false,
    "explicacao": "OSS is additional: you keep filing your national returns."
   },
   {
    "id": "b2-11",
    "tipo": "multipla",
    "licaoRef": "2-6",
    "enunciado": "What is the EORI for?",
    "opcoes": [
     "Selling on Amazon.de",
     "Identifying operators to EU customs, required before declaring imports",
     "Paying VAT",
     "Registering the trademark"
    ],
    "correta": 1,
    "explicacao": "It's the European customs number. For anyone with a Spanish NIF, it's ES + NIF."
   },
   {
    "id": "b2-12",
    "tipo": "multipla",
    "licaoRef": "2-6",
    "enunciado": "Which proof of address does Amazon accept in verification?",
    "opcoes": [
     "A handwritten document",
     "A screenshot of a banking app",
     "A utility bill or statement dated within the last 180 days, matching the registered name and address",
     "Any photo of the building"
    ],
    "correta": 2,
    "explicacao": "It can't be handwritten or a screenshot, and the name and address must match Seller Central."
   },
   {
    "id": "b2-13",
    "tipo": "multipla",
    "licaoRef": "2-7",
    "enunciado": "Who applies the CE marking to an own-brand product made to order by a factory?",
    "opcoes": [
     "Amazon",
     "A central EU body",
     "The manufacturer, meaning whoever has it made and sells it under their own name",
     "The carrier"
    ],
    "correta": 2,
    "explicacao": "Whoever sells under their own brand takes on the manufacturer's role and is responsible for conformity. No central body \"grants\" the marking."
   },
   {
    "id": "b2-14",
    "tipo": "ordenar",
    "licaoRef": "2-1",
    "enunciado": "Put a logical setup sequence in order:",
    "opcoes": [
     "NIE and residence/work status sorted",
     "Choose between autónomo and SL with the gestoría",
     "Register with Hacienda and Social Security (or incorporate the SL)",
     "Open the Amazon seller account"
    ],
    "explicacao": "First identity and permission, then the legal form, then registrations, and only then the seller account."
   }
  ]
 },
 "licoes": [
  {
   "id": "2-1",
   "titulo": "NIE, TIE and NIF: existing for Hacienda",
   "minutos": 6,
   "fontes": [
    "aeat-eori",
    "sell-es-registro"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "porto",
     "titulo": "Before selling, you need to exist in the system",
     "corpo": "Spain organises almost everything around **identification numbers**. Without them there's no company, business bank account, rental contract or seller account.\n\nThe main ones for you:\n\n- [[nie]]: foreigner's identity number, the basis for procedures\n- **TIE:** the physical residence card, for those with residence authorisation\n- [[nif]]: tax number; for individual foreigners it's usually the NIE itself, and for companies it's the company code",
     "termos": [
      "nie",
      "nif"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "An NIE is not a work permit",
     "corpo": "Having an NIE **doesn't guarantee** you can work or run a business on your own account. That depends on the **type of residence authorisation** you have or will apply for.\n\nSince you're moving to Madrid, your first conversation is with an **immigration lawyer (extranjería)**: which visa or authorisation allows business and self-employed activity in your case. This course **doesn't replace** that consultation."
    },
    {
     "tipo": "passos",
     "titulo": "The typical path",
     "itens": [
      "Agree the right residence authorisation with your immigration lawyer",
      "Get the NIE (the application uses the official EX-15 form, at the consulate or in Spain)",
      "Apply for the TIE, if your authorisation requires it",
      "Open a Spanish bank account",
      "Move on to the legal form (lesson 2-2)"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Why Hacienda matters so much",
     "corpo": "**Hacienda** is what everyone calls the Agencia Tributaria, Spain's tax authority. Every tax you'll see (VAT, income tax, corporate tax) goes through it.\n\nThat's why here, more than anywhere, the rule applies: **keep everything in order from day one**. A wrong registration costs more to fix than to do right.",
     "termos": [
      "hacienda"
     ]
    },
    {
     "tipo": "delegar",
     "titulo": "Who does this for you",
     "corpo": "**Immigration lawyer:** residence and work authorisation, NIE, TIE.\n\n**Gestoría:** NIF, tax and Social Security registration, once the legal basis is sorted.\n\nAsk for a **fixed written quote** before starting. Prices vary a lot and there's no single official fee schedule.",
     "termos": [
      "gestoria"
     ]
    },
    {
     "tipo": "dica",
     "corpo": "You already have four companies in Brazil, and that counts as experience, but it **doesn't** automatically become a Spanish company. Ask the lawyer and the gestoría how your Brazilian corporate situation interacts with setting up in Spain."
    }
   ],
   "quiz": [
    {
     "id": "2-1-q1",
     "tipo": "multipla",
     "enunciado": "What is the NIE?",
     "opcoes": [
      "The identification number for foreigners in Spain",
      "The product code on Amazon",
      "The credit card number",
      "The sales tax"
     ],
     "correta": 0,
     "explicacao": "The NIE identifies the foreigner to the Spanish authorities."
    },
    {
     "id": "2-1-q2",
     "tipo": "vf",
     "enunciado": "Having an NIE already guarantees the right to run a business on your own account.",
     "correta": false,
     "explicacao": "The NIE identifies you, but permission to work comes from your residence authorisation. Confirm with an immigration lawyer."
    },
    {
     "id": "2-1-q3",
     "tipo": "multipla",
     "enunciado": "What do Spaniards call the Agencia Tributaria?",
     "opcoes": [
      "Gestoría",
      "Hacienda (tax authority)",
      "Cámara",
      "Registro"
     ],
     "correta": 1,
     "explicacao": "Hacienda is the nickname for the Agencia Tributaria. The gestoría is the firm that deals with it for you."
    },
    {
     "id": "2-1-q4",
     "tipo": "ordenar",
     "enunciado": "Put the preparation sequence in order:",
     "opcoes": [
      "Sort out residence and work permission",
      "Get the NIE",
      "Open a Spanish bank account",
      "Decide the legal form (autónomo or SL)"
     ],
     "explicacao": "Legal basis first, then identification, bank, and only then the business structure."
    }
   ]
  },
  {
   "id": "2-2",
   "titulo": "Autónomo or SL?",
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
     "titulo": "Two ways to be in business in Spain",
     "corpo": "An **autónomo** is an individual working on their own account. An **SL (sociedad limitada)** is a company with its own legal personality, with partners and share capital.\n\nFor an Amazon seller, this choice determines **how much you pay in contributions, how much in tax and how much of your personal wealth is exposed**.",
     "termos": [
      "autonomo"
     ]
    },
    {
     "tipo": "comparacao",
     "titulo": "Side by side",
     "colunas": [
      "Autónomo (self-employed)",
      "SL (limited company)"
     ],
     "linhas": [
      [
       "Liability",
       "Personal: your assets cover the debts",
       "Generally limited to the capital (with legal exceptions)"
      ],
      [
       "Cost to set up",
       "Low: registering as autónomo",
       "Higher: deed, registry, gestoría"
      ],
      [
       "Share capital",
       "None",
       "Minimum €1, under Law 18/2022"
      ],
      [
       "Social contributions",
       "Monthly autónomo fee by income band",
       "The partner-director usually also contributes as a corporate autónomo; confirm with the gestoría"
      ],
      [
       "Tax on profit",
       "Progressive personal income tax (IRPF)",
       "Corporate income tax"
      ],
      [
       "Bookkeeping",
       "Simpler",
       "More complete (annual accounts)"
      ]
     ]
    },
    {
     "tipo": "texto",
     "titulo": "The official part: autónomo figures",
     "corpo": "- **Contribution based on real income:** Social Security uses net income **bands**. In 2026, the first band (up to €670/month) has a contribution base between **€653.59 and €718.94**.\n- **Rates in 2026:** 28.30% for common contingencies, 1.30% occupational, 0.90% cessation of activity, 0.10% training, plus 0.9% for the intergenerational equity mechanism.\n- **Flat rate (reduced fee):** it was **€80/month for the first 12 months between 2023 and 2025** for new autónomos or those not registered in the previous two years, extendable if income is low. **Since 2026 the amount is set each year**, so check the current figure with Social Security."
    },
    {
     "tipo": "texto",
     "titulo": "The official part: SL figures",
     "corpo": "- **Minimum capital:** €1. Until it reaches €3,000, 20% of profit goes to the legal reserve until it totals €3,000 and, on liquidation, partners are liable for the difference.\n- **Incorporation:** the CIRCE system lets you start online; the notarial deed still exists.\n- **Corporate income tax:** standard rate of **25%**; **15% rate for newly created entities** (2024, 2025 and 2026), subject to conditions.",
     "termos": []
    },
    {
     "tipo": "alerta",
     "corpo": "These figures are **a reference for planning**, not for deciding alone. There are conditions, exceptions and annual changes. Only the gestoría can work out which form pays off, using your real situation."
    },
    {
     "tipo": "delegar",
     "titulo": "How to choose",
     "corpo": "Bring the gestoría three figures: **how much you plan to turn over in year one**, **how much capital you'll invest in stock** and **whether you'll have partners**. Ask for a written simulation comparing autónomo and SL in each scenario.\n\nRule of thumb: heavy stock investment and wanting to protect personal assets point to an **SL**; starting small and testing points to **autónomo**, and you can switch later."
    },
    {
     "tipo": "dica",
     "corpo": "Many entrepreneurs start as autónomos to validate the first product and **set up the SL once the business proves it works**. The key is to plan the transition, because stock, brand and accounts stay in the name of whoever created them."
    }
   ],
   "quiz": [
    {
     "id": "2-2-q1",
     "tipo": "multipla",
     "enunciado": "What's the core difference in liability between autónomo and SL?",
     "opcoes": [
      "The autónomo is liable with personal assets; the SL generally separates the partners' assets",
      "The SL is always liable with personal assets",
      "There's no difference",
      "The autónomo never has debts"
     ],
     "correta": 0,
     "explicacao": "To creditors, the autónomo and the individual are the same; the SL creates a separate legal entity."
    },
    {
     "id": "2-2-q2",
     "tipo": "multipla",
     "enunciado": "What's the standard corporate income tax rate in Spain, according to the Agencia Tributaria?",
     "opcoes": [
      "10%",
      "15%",
      "25%",
      "35%"
     ],
     "correta": 2,
     "explicacao": "25% is the standard rate, with 15% for newly created entities in the years stated."
    },
    {
     "id": "2-2-q3",
     "tipo": "multipla",
     "enunciado": "The autónomo flat rate...",
     "opcoes": [
      "Is a permanent €80",
      "Was €80/month between 2023 and 2025 and, from 2026, is set annually",
      "No longer exists",
      "Is only for SLs"
     ],
     "correta": 1,
     "explicacao": "The amount depends on the annual law. Check with Social Security before using it in your numbers."
    },
    {
     "id": "2-2-q4",
     "tipo": "vf",
     "enunciado": "Law 18/2022 requires minimum share capital of €3,000 to incorporate an SL.",
     "correta": false,
     "explicacao": "The minimum is €1; €3,000 is the threshold above which the protective rules stop applying."
    },
    {
     "id": "2-2-q5",
     "tipo": "multipla",
     "enunciado": "Who should compare the autónomo vs SL scenarios for your case?",
     "opcoes": [
      "The gestoría, with your turnover and investment figures",
      "The PPC manager",
      "The prep centre",
      "Amazon"
     ],
     "correta": 0,
     "explicacao": "The gestoría knows the rules and can run the simulation with your numbers."
    }
   ]
  },
  {
   "id": "2-3",
   "titulo": "Selling from a foreign company",
   "minutos": 6,
   "fontes": [
    "sell-es-registro",
    "sell-es-iva",
    "aeat-eori"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Amazon lets you sell without a Spanish company",
     "corpo": "According to Amazon.es, **you don't need to set up a Spanish legal entity** to open a seller account. That's useful if you already have a company in another country, like yours in Brazil.\n\nBut how easy it is to open the account **doesn't remove local tax obligations**."
    },
    {
     "tipo": "passos",
     "titulo": "What Amazon asks of foreign sellers",
     "itens": [
      "Get a **NIF** from the Agencia Tributaria",
      "If there's stock in Spain (e.g. FBA), **register for Spanish VAT**",
      "Outside the EU: appoint a **fiscal representative**, who may have joint liability",
      "Importing from outside the EU: have an **EORI**",
      "Electronics, batteries and packaging: **extended producer responsibility (EPR) registration** before activating listings"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Stock in Spain changes everything",
     "corpo": "When you store products in a warehouse in Spain, the sale is **located in Spain**. That requires a **Spanish VAT number** and periodic returns (form 303). Amazon also says its fulfilment centres **can't be the importer of record** for goods coming from outside the EU."
    },
    {
     "tipo": "comparacao",
     "titulo": "Brazilian company vs company in Spain",
     "colunas": [
      "Account with a non-EU company",
      "Account with a company/autónomo in Spain"
     ],
     "linhas": [
      [
       "Fiscal representative",
       "May be required, with joint liability",
       "Doesn't apply"
      ],
      [
       "Local VAT",
       "Registration needed if there's stock or local sales above the thresholds",
       "Direct registration, no intermediary"
      ],
      [
       "Bank and card",
       "Foreign accounts and cards can work, but there's friction",
       "Local account and card, simpler"
      ],
      [
       "When it makes sense",
       "A quick test with an existing structure",
       "Ongoing, long-term operation"
      ]
     ],
     "nota": "Qualitative comparison. Whether each option works depends on your type of residence and the rules of the home country."
    },
    {
     "tipo": "delegar",
     "corpo": "**Brazilian accountant + Spanish gestoría:** they need to talk about income taxation in Brazil and Spain and about any treaty to avoid double taxation.\n\n**Amazon VAT Services:** Amazon offers a service in Seller Central that helps register and file VAT in several countries. Terms and costs change, so also get a quote from a gestoría to compare."
    },
    {
     "tipo": "dica",
     "corpo": "Since you'll live in Madrid, the cleanest long-term route is usually **having the structure in Spain itself**. But confirm the tax impact of moving the operation: Amazon's customers will be in Europe and the owner will be tax resident in Spain."
    }
   ],
   "quiz": [
    {
     "id": "2-3-q1",
     "tipo": "vf",
     "enunciado": "To open a seller account on Amazon.es, you must set up a Spanish company.",
     "correta": false,
     "explicacao": "According to Amazon, you don't need to set up a Spanish entity, but there are local tax obligations."
    },
    {
     "id": "2-3-q2",
     "tipo": "multipla",
     "enunciado": "What changes when you store stock in Spain?",
     "opcoes": [
      "You need Spanish VAT and the periodic returns",
      "Nothing",
      "You only pay a fee to Amazon",
      "You must open a physical shop"
     ],
     "correta": 0,
     "explicacao": "Local stock makes the sale Spanish for VAT purposes: registration and form 303."
    },
    {
     "id": "2-3-q3",
     "tipo": "multipla",
     "enunciado": "Who can be the importer of record for goods from outside the EU?",
     "opcoes": [
      "Amazon's fulfilment centre",
      "You or a partner (Amazon says its centres can't)",
      "The customer",
      "The bank"
     ],
     "correta": 1,
     "explicacao": "Amazon states that its fulfilment centres don't act as importer of record."
    },
    {
     "id": "2-3-q4",
     "tipo": "multipla",
     "enunciado": "For sellers from outside the EU, what does Amazon mention as a possible requirement?",
     "opcoes": [
      "A fiscal representative, sometimes with joint liability",
      "A Spanish driving licence",
      "Minimum stock",
      "Nothing"
     ],
     "correta": 0,
     "explicacao": "In some countries a fiscal representative is required and may be jointly liable for VAT debts."
    }
   ]
  },
  {
   "id": "2-4",
   "titulo": "VAT in Spain: rates, returns and the surcharge",
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
     "titulo": "VAT: the tax that passes through your till",
     "corpo": "[[iva]] (VAT) is a consumption tax. The **end customer** pays it, but **you collect it and pay it over** to Hacienda. The logic is simple:\n\n**VAT charged to customers (output) − VAT you paid on purchases (input) = VAT payable**\n\nIf input VAT is higher, the balance is in your favour. That's why VAT **isn't a business cost**, as long as you're properly registered and have correct invoices.",
     "termos": [
      "iva"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "VAT rates in Spain",
     "corpo": "According to the Agencia Tributaria:\n\n- **Standard rate: 21%**, which applies to most products\n- **Reduced rates: 10% and 4%**, for specific goods and services\n- **0%:** certain transactions\n\nWhich product falls under which rate is set in the Agencia Tributaria's annual tables. **Before choosing a product**, confirm the applicable rate: food, books and health items often get different treatment."
    },
    {
     "tipo": "calculo",
     "titulo": "Price with and without VAT",
     "corpo": "Prices on Amazon.es **include VAT**. Look at a product at €24.20:",
     "linhas": [
      [
       "Selling price to the customer (incl. VAT)",
       "24,20 €"
      ],
      [
       "Price excl. VAT (24.20 ÷ 1.21)",
       "20,00 €"
      ],
      [
       "VAT to pay Hacienda (21%)",
       "4,20 €"
      ]
     ],
     "total": [
      "Real revenue from the sale",
      "20,00 €"
     ],
     "nota": "Common mistake: calculating \"price − 21%\". The right way is to divide by 1.21."
    },
    {
     "tipo": "texto",
     "titulo": "The periodic return: form 303",
     "corpo": "The VAT return is called **form 303**. Deadlines published by the Agencia Tributaria:\n\n- **Quarterly:** 1 to 20 April, July and October; Q4, 1 to 30 January\n- **Monthly:** 1 to 30 of the following month (January runs to the end of February)\n- If the last day isn't a working day, it moves to the next working day\n\nThere's also **form 390**, the annual summary. The gestoría handles both.",
     "termos": []
    },
    {
     "tipo": "texto",
     "titulo": "Recargo de equivalencia: the retailers' scheme",
     "corpo": "Some retailers are under the **recargo de equivalencia** (equivalence surcharge): they pay a surcharge to the supplier when buying and, in return, **don't file VAT returns on their sales**.\n\nAccording to the Agencia Tributaria, the rates are:\n\n- 21% VAT carries a **5.2%** surcharge\n- 10% VAT carries a **1.4%** surcharge\n- 4% VAT carries a **0.5%** surcharge\n\nThe scheme applies to **individual retailers** (or entities under income attribution) who resell **without manufacturing or transforming**, with more than 80% of sales to end consumers. Some categories are excluded, such as vehicles, jewellery and building materials."
    },
    {
     "tipo": "alerta",
     "titulo": "It may or may not apply to you",
     "corpo": "Selling on Amazon through an **SL** keeps you out of this scheme, because it's for individuals. For an autónomo it depends on the type of activity, and there are implications for selling to other EU countries.\n\n**Question for the gestoría:** \"Does my case fall under the recargo de equivalencia? What changes for Amazon VAT and EU sales?\""
    },
    {
     "tipo": "delegar",
     "corpo": "**Gestoría:** forms 303 and 390, VAT registration, recargo de equivalencia.\n\n**You:** keep **every purchase invoice** (supplier, freight, services) with your company's tax details. Without a correct invoice there's no VAT to deduct.",
     "termos": [
      "gestoria"
     ]
    }
   ],
   "quiz": [
    {
     "id": "2-4-q1",
     "tipo": "multipla",
     "enunciado": "What's the standard VAT rate in Spain?",
     "opcoes": [
      "10%",
      "19%",
      "21%",
      "25%"
     ],
     "correta": 2,
     "explicacao": "21% is the standard rate, with 10% and 4% as reduced rates."
    },
    {
     "id": "2-4-q2",
     "tipo": "multipla",
     "enunciado": "A product costs €12.10 including 21% VAT. How much do you receive excluding VAT?",
     "opcoes": [
      "9,57 €",
      "10,00 €",
      "10,50 €",
      "12,10 €"
     ],
     "correta": 1,
     "explicacao": "12.10 ÷ 1.21 = €10.00. The VAT is €2.10."
    },
    {
     "id": "2-4-q3",
     "tipo": "vf",
     "enunciado": "The VAT you pay on stock purchases is, as a rule, a final cost to the business.",
     "correta": false,
     "explicacao": "If you're properly registered and have correct invoices, VAT paid on purchases is deducted from VAT charged to customers."
    },
    {
     "id": "2-4-q4",
     "tipo": "multipla",
     "enunciado": "What's the form 303 deadline for Q4?",
     "opcoes": [
      "1 to 20 January",
      "1 to 30 January",
      "1 to 30 December",
      "By 31 March"
     ],
     "correta": 1,
     "explicacao": "The other quarters run from the 1st to the 20th of the following month; Q4, from 1 to 30 January."
    },
    {
     "id": "2-4-q5",
     "tipo": "multipla",
     "enunciado": "Under the recargo de equivalencia, what's the surcharge for a product with 21% VAT?",
     "opcoes": [
      "0,5%",
      "1,4%",
      "5,2%",
      "21%"
     ],
     "correta": 2,
     "explicacao": "5.2% (and 1.4% for 10%, 0.5% for 4%)."
    },
    {
     "id": "2-4-q6",
     "tipo": "lacuna",
     "enunciado": "The annual VAT summary is called form ___.",
     "opcoes": [
      "390",
      "303",
      "036"
     ],
     "correta": 0,
     "explicacao": "Form 303 is the periodic return and form 390 is the annual summary."
    }
   ]
  },
  {
   "id": "2-5",
   "titulo": "Selling to the EU: OSS and the 10,000 threshold",
   "minutos": 6,
   "fontes": [
    "ue-oss",
    "sell-es-iva"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "The problem: selling to another EU country",
     "corpo": "If you sell from one EU country to end consumers in another, VAT is, as a rule, **the customer's country's**. Without a simple system, you'd have to register for VAT in every country.\n\nThe solution is [[oss]] (One Stop Shop): you **declare and pay VAT for all countries in one place**, in your country of identification.",
     "termos": [
      "oss"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "The €10,000 threshold",
     "corpo": "According to the European Commission, there's an **annual threshold of €10,000 (excl. VAT)** for distance sales of goods to consumers in other EU countries. Conditions:\n\n- it counts the total for the **current and previous year**\n- you must be established in **only one** EU country\n- **below** the threshold: you can apply your own country's VAT\n- **above it:** the destination country's VAT always applies\n- you can opt to apply the general rules from the start, but you're locked into that choice for two calendar years"
    },
    {
     "tipo": "calculo",
     "titulo": "Tracking example",
     "corpo": "A company established only in Spain tracks its sales to consumers in other EU countries:",
     "linhas": [
      [
       "EU distance sales last year",
       "6.200 €"
      ],
      [
       "EU distance sales this year to September",
       "4.100 €"
      ],
      [
       "Total (current + previous year)",
       "10.300 €"
      ]
     ],
     "total": [
      "€10,000 threshold exceeded",
      "Yes"
     ],
     "nota": "Example figures. Once over the threshold, subsequent sales carry the customer's country's VAT."
    },
    {
     "tipo": "passos",
     "titulo": "How OSS works in practice",
     "itens": [
      "You register for OSS with the Agencia Tributaria, your \"Member State of identification\"",
      "You charge the customer's country's VAT on distance sales",
      "You file **one quarterly** OSS return",
      "Spain passes the tax on to the other countries",
      "You keep filing the normal form 303: **OSS is additional**"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Stock in other countries is a different matter",
     "corpo": "OSS covers distance sales from **your** country. If you store stock in another country (FBA Pan-EU), Amazon says you'll need **VAT registration in that country**. That comes in World 9."
    },
    {
     "tipo": "delegar",
     "corpo": "**Gestoría:** OSS registration and quarterly return. It's worth asking them to track the €10,000 threshold and warn you as you approach it."
    },
    {
     "tipo": "dica",
     "corpo": "If you're starting in Spain only, you **don't need OSS yet**. But understand the concept: it's the basis for the expansion in World 9."
    }
   ],
   "quiz": [
    {
     "id": "2-5-q1",
     "tipo": "multipla",
     "enunciado": "What is OSS?",
     "opcoes": [
      "A scheme to declare and pay, in one place, VAT on sales to consumers in other EU countries",
      "A type of ad",
      "A fulfilment programme",
      "A quality badge"
     ],
     "correta": 0,
     "explicacao": "The One Stop Shop centralises VAT reporting for the whole EU in your own country."
    },
    {
     "id": "2-5-q2",
     "tipo": "multipla",
     "enunciado": "What annual threshold applies to distance sales of goods in the EU?",
     "opcoes": [
      "1.000 €",
      "€10,000 excl. VAT",
      "100.000 €",
      "There isn't one"
     ],
     "correta": 1,
     "explicacao": "€10,000 (excl. VAT), adding the current and previous year, for businesses established in a single country."
    },
    {
     "id": "2-5-q3",
     "tipo": "vf",
     "enunciado": "OSS returns replace your country's normal returns.",
     "correta": false,
     "explicacao": "OSS is additional and national returns continue."
    },
    {
     "id": "2-5-q4",
     "tipo": "multipla",
     "enunciado": "Above the threshold, which VAT applies to sales to consumers in another EU country?",
     "opcoes": [
      "Your country's",
      "The customer's country's",
      "None",
      "Amazon's"
     ],
     "correta": 1,
     "explicacao": "Once over the threshold, the destination country's VAT applies."
    }
   ]
  },
  {
   "id": "2-6",
   "titulo": "EORI, verification and opening the account",
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
     "titulo": "EORI: the customs passport",
     "corpo": "The [[eori]] is a number **unique across the EU** used when dealing with customs, such as import declarations. It's mandatory **before** filing a customs declaration.\n\nAccording to the Agencia Tributaria:\n\n- for operators with a Spanish NIF, the number is **ES + NIF**\n- you apply through the Agencia Tributaria's **Sede Electrónica** (online office) or in writing to the customs office for your tax address\n- the official page **doesn't mention any cost**\n\nIf you'll import from China or any country outside the EU, you need it.",
     "termos": [
      "eori"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Individual or Professional",
     "corpo": "According to Amazon.es:\n\n- **Individual:** for those selling fewer than 35 items a month. You pay **€0.99 per item sold** (excl. VAT).\n- **Professional:** for more than 35 items a month. You pay **€39 a month** (excl. VAT), with no €0.99 per-item fee.\n\nBoth also pay the selling fees by category.\n\nIf you want to build a brand and sell regularly, **Professional** is usually the natural choice (check in Seller Central which features each plan includes)."
    },
    {
     "tipo": "passos",
     "titulo": "The 6 registration steps",
     "itens": [
      "Business information: country, business type, name, address, phone (verified by SMS or call)",
      "Seller information: official ID document, personal details, proof of address",
      "Billing: credit card with CVV (prepaid cards, vouchers and PayPal don't work)",
      "Store and products: store name and product codes, if applicable",
      "Bank account: holder, number and code; statement from the last 180 days if not verified automatically",
      "Identity verification: photo of your face and the document, a video call, or document upload"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "What Amazon verifies",
     "corpo": "Verification covers **everyone linked to the account** (primary contact, legal representative, beneficial owners, users).\n\n- **Identity:** passport, national ID, driving licence or residence permit, valid and with a photo\n- **Address:** utility bill or bank statement **from the last 180 days**, with the same name and address as the registration; it **can't** be handwritten or a screenshot\n- **Bank account** and, for companies, **company documents**\n\nAmazon says verification usually takes **three working days or less** and accepts documents in English and other supported languages, including Portuguese. Other languages may need an official translation."
    },
    {
     "tipo": "alerta",
     "titulo": "Mistakes that block the account",
     "corpo": "- **Name and address that differ** between the document and the registration\n- **Old proof of address** (over 180 days)\n- **A screenshot** instead of the original document\n- **More than one account** for the same person, which breaks the rules\n\nWithout the required information, the account is restricted and **can't sell**. Do it once, calmly, with your documents at hand."
    },
    {
     "tipo": "delegar",
     "corpo": "**Gestoría:** NIF and EORI. **You:** identity verification (it's personal, and the face photo can't be delegated). **Accountant:** check that the bank account name matches the Amazon registration.\n\nTake the chance to keep a **digital folder** with all the documents and their expiry dates."
    },
    {
     "tipo": "dica",
     "corpo": "If you don't have your Spanish documents yet, what Amazon asks for is **consistency**: the same name and address everywhere. Sort out the basics (NIE, address, bank) **before** opening the account."
    }
   ],
   "quiz": [
    {
     "id": "2-6-q1",
     "tipo": "multipla",
     "enunciado": "For operators with a NIF in Spain, how is the EORI formed?",
     "opcoes": [
      "ES + NIF",
      "EU + NIE",
      "A number drawn by Amazon",
      "Just the passport number"
     ],
     "correta": 0,
     "explicacao": "The Agencia Tributaria states: ES followed by the NIF."
    },
    {
     "id": "2-6-q2",
     "tipo": "multipla",
     "enunciado": "Which plan is recommended for selling more than 35 items a month?",
     "opcoes": [
      "Individual",
      "Professional",
      "Handmade",
      "Prime"
     ],
     "correta": 1,
     "explicacao": "Individual is for fewer than 35; Professional, for more than 35 items, at €39/month excl. VAT."
    },
    {
     "id": "2-6-q3",
     "tipo": "multipla",
     "enunciado": "Which proof of address does Amazon accept?",
     "opcoes": [
      "Handwritten",
      "A screenshot",
      "A utility bill or statement from the last 180 days, matching the registration",
      "A photo of the house"
     ],
     "correta": 2,
     "explicacao": "It must be dated within the last 180 days and match the name and address in Seller Central."
    },
    {
     "id": "2-6-q4",
     "tipo": "vf",
     "enunciado": "Prepaid cards and PayPal are accepted during registration.",
     "correta": false,
     "explicacao": "Amazon accepts AMEX, VISA and Mastercard; not prepaid cards, vouchers or PayPal."
    },
    {
     "id": "2-6-q5",
     "tipo": "multipla",
     "enunciado": "The EORI is mandatory for...",
     "opcoes": [
      "Every seller, always",
      "Anyone filing customs declarations, such as imports from outside the EU",
      "Anyone selling only in Brazil",
      "Anyone using FBM"
     ],
     "correta": 1,
     "explicacao": "The EORI is needed before filing a customs declaration. If you don't import from outside the EU, you may not need it at all."
    }
   ]
  },
  {
   "id": "2-7",
   "titulo": "Product rules: CE, GPSR and EPR",
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
     "titulo": "A good product also has to be legal",
     "corpo": "Before selling, the product must meet EU rules: **safety, manufacturer identification and environmental responsibility**. If it fails, Amazon blocks the listing, the customer gets hurt or the authorities fine you.\n\nThree acronyms dominate this conversation: **CE**, **GPSR** and **EPR**."
    },
    {
     "tipo": "texto",
     "titulo": "CE marking",
     "corpo": "CE marking shows that **the manufacturer declares** the product meets the applicable EU rules. Official points:\n\n- **there's no central body** that grants the marking\n- it's only mandatory for **regulated categories**: toys, electronics and electrical goods, batteries, machinery, personal protective equipment, medical devices and others\n- if the EU doesn't require it for the product, **it must not be used**\n- the **manufacturer** applies it: whoever has the product made and sells it under their own name or brand\n- it requires technical documentation and an EU declaration of conformity, kept for **at least 10 years**\n- minimum size of the marking: **5 mm**",
     "termos": []
    },
    {
     "tipo": "texto",
     "titulo": "GPSR: the general safety regulation",
     "corpo": "The **GPSR** (General Product Safety Regulation) has applied since 13 December 2024 to consumer products placed on the EU market, including those sold online. Points from the European Commission:\n\n- there must be a **responsible person established in the EU** for each product\n- the product must show **the manufacturer's name, brand, postal address and email address**; a QR code alone **isn't enough**\n- if the manufacturer is outside the EU, the listing also shows the responsible person's details\n- the manufacturer keeps **the risk analysis and technical documentation for at least 10 years**\n- marketplaces must display this information on the listing\n\nIf you sell your own brand made in China, **you're the manufacturer for legal purposes**, and you need someone in the EU as the responsible person. That can be you, if you're established in the EU.",
     "termos": []
    },
    {
     "tipo": "texto",
     "titulo": "EPR: paying for the end of life of what you put on the market",
     "corpo": "**Extended producer responsibility (EPR)** requires whoever puts products on the market to fund waste management. In Spain, the streams that most affect sellers are:\n\n- **Packaging:** registration in the **Product Producers Register** (MITECO) and an annual report. Producers without an establishment in Spain must appoint an **authorised representative**. If they don't, liability may pass to other parties and the platform may take on part of the obligations.\n- **Electrical and electronic equipment (WEEE/RAEE):** the manufacturer must fund waste management, usually through collective schemes.\n- **Batteries:** their own regime.\n\nAmazon.es warns that **electronics, batteries and packaging require EPR registration before listings can be activated**."
    },
    {
     "tipo": "alerta",
     "titulo": "It's not optional and not just for the big players",
     "corpo": "**EPR registration and naming a responsible person** apply to businesses of any size. Packaging suppliers' invoices should show the producer registration number, and **its absence may indicate non-compliance** by the supplier.\n\nA product that depends on a test report (a toy, an electrical item) may require **lab testing**, with a cost that has to go into your World 5 numbers."
    },
    {
     "tipo": "delegar",
     "titulo": "Who does this for you",
     "corpo": "**Factory/sourcing agent:** provide the declaration of conformity and test reports. **Testing lab:** tests when required. **Authorised representative / GPSR responsible person service:** offered by specialist firms in the EU. **Collective EPR scheme (SCRAP):** handles packaging and WEEE. **Gestoría or environmental consultant:** the MITECO registrations.\n\nAlways ask for **documents in writing** and keep them for at least 10 years."
    },
    {
     "tipo": "dica",
     "corpo": "In curation (World 3), start with **products that need no CE marking and have no electronics**: less paperwork, less cost and less risk. You gain experience before tackling regulated categories."
    }
   ],
   "quiz": [
    {
     "id": "2-7-q1",
     "tipo": "multipla",
     "enunciado": "Who applies the CE marking?",
     "opcoes": [
      "Amazon",
      "A central EU body",
      "The manufacturer, including whoever sells under their own brand",
      "Customs"
     ],
     "correta": 2,
     "explicacao": "The manufacturer declares conformity. No body grants the marking."
    },
    {
     "id": "2-7-q2",
     "tipo": "vf",
     "enunciado": "Every product sold in the EU must carry the CE marking.",
     "correta": false,
     "explicacao": "Only products in regulated categories. If there's no requirement, the marking must not be used."
    },
    {
     "id": "2-7-q3",
     "tipo": "multipla",
     "enunciado": "How long does the manufacturer keep the technical documentation, according to official sources?",
     "opcoes": [
      "1 year",
      "3 years",
      "At least 10 years",
      "It doesn't need to be kept"
     ],
     "correta": 2,
     "explicacao": "For CE and GPSR, technical documentation is kept for at least 10 years."
    },
    {
     "id": "2-7-q4",
     "tipo": "multipla",
     "enunciado": "Does a QR code on the product replace the manufacturer's information?",
     "opcoes": [
      "Yes, completely",
      "No: it can complement it, but doesn't replace the physical information",
      "Only if it's in colour",
      "Only for electronics"
     ],
     "correta": 1,
     "explicacao": "The Commission says digital-only information isn't enough and it must appear on the product."
    },
    {
     "id": "2-7-q5",
     "tipo": "multipla",
     "enunciado": "Someone selling their own brand made by a factory in Asia is, for legal purposes...",
     "opcoes": [
      "Just a reseller",
      "The manufacturer, with the corresponding responsibilities",
      "Not responsible for safety",
      "Automatically represented by Amazon"
     ],
     "correta": 1,
     "explicacao": "Whoever sells under their own name takes on the manufacturer's obligations."
    },
    {
     "id": "2-7-q6",
     "tipo": "multipla",
     "enunciado": "What does Amazon.es say about electronics, batteries and packaging?",
     "opcoes": [
      "There are no requirements",
      "They require producer responsibility registration before listings are activated",
      "They're banned",
      "Only Amazon can sell them"
     ],
     "correta": 1,
     "explicacao": "EPR registration is a prerequisite for activating listings in those categories."
    }
   ]
  }
 ]
};

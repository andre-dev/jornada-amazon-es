// Mundo 9 (en). Gerado por tools/i18n-mundos.mjs a partir de js/content/world9.js.
export default {
 "id": 9,
 "chefe": {
  "id": "chefao",
  "nome": "THE BIG BOSS OF SALES",
  "hp": 100,
  "vidas": 5,
  "final": true,
  "fala": "You've come a long way. But real selling is Spain, operations and Europe all at once. Prove you've mastered all three.",
  "derrota": "Impossible... a seller who knows what they're doing, calculates before acting and follows the rules. The crown is yours.",
  "fases": [
   {
    "nome": "Phase 1: Spain",
    "perguntas": [
     {
      "id": "bf-1",
      "tipo": "multipla",
      "licaoRef": "2-5",
      "enunciado": "What is the standard VAT rate in Spain?",
      "opcoes": [
       "21%",
       "7%",
       "35%",
       "0%"
      ],
      "correta": 0,
      "explicacao": "The standard rate is 21%, with 10% and 4% for specific cases."
     },
     {
      "id": "bf-2",
      "tipo": "multipla",
      "licaoRef": "2-5",
      "enunciado": "What does the OSS let you do when selling to consumers in other EU countries?",
      "opcoes": [
       "Declare and pay those countries' VAT in a single return, in the country of identification",
       "Never pay VAT",
       "Sell worldwide without an EORI",
       "Replace the national return"
      ],
      "correta": 0,
      "explicacao": "It is additional: the national Modelo 303 continues."
     },
     {
      "id": "bf-3",
      "tipo": "multipla",
      "licaoRef": "2-5",
      "enunciado": "What is the OSS threshold, excluding VAT, adding the current and previous year?",
      "opcoes": [
       "10.000 €",
       "1.000 €",
       "100.000 €",
       "There isn't one"
      ],
      "correta": 0,
      "explicacao": "Above €10,000, the VAT of the customer's country applies."
     },
     {
      "id": "bf-4",
      "tipo": "vf",
      "licaoRef": "2-1",
      "enunciado": "Having an NIE on its own already authorises you to be self-employed in Spain.",
      "correta": false,
      "explicacao": "It depends on the type of residence permit. Talk to an immigration lawyer."
     },
     {
      "id": "bf-5",
      "tipo": "multipla",
      "licaoRef": "5-1",
      "enunciado": "Why calculate the margin with all fees before buying a batch?",
      "opcoes": [
       "Because referral fees, logistics, ads, VAT and returns eat into profit",
       "Because Amazon requires it",
       "Because it's optional",
       "To pay less tax"
      ],
      "correta": 0,
      "explicacao": "Without the full calculation, a nice product can lose money."
     },
     {
      "id": "bf-6",
      "tipo": "multipla",
      "licaoRef": "6-4",
      "enunciado": "What is Brand Registry for?",
      "opcoes": [
       "Protecting and controlling your brand and your product pages",
       "Paying lower referral fees",
       "Avoiding VAT",
       "Creating extra accounts"
      ],
      "correta": 0,
      "explicacao": "It requires a registered trademark or a pending application, and gives more control over the page."
     },
     {
      "id": "bf-7",
      "tipo": "multipla",
      "licaoRef": "4-3",
      "enunciado": "Which document identifies the goods and their import duties from outside the EU?",
      "opcoes": [
       "Customs declaration (DUA) with a TARIC code",
       "Business card",
       "Ad invoice",
       "Bank statement"
      ],
      "correta": 0,
      "explicacao": "The customs code sets duties and rules; the customs broker handles the declaration."
     }
    ]
   },
   {
    "nome": "Phase 2: Operations",
    "perguntas": [
     {
      "id": "bf-8",
      "tipo": "multipla",
      "licaoRef": "8-1",
      "enunciado": "What ODR target does Amazon.es state?",
      "opcoes": [
       "Below 1%",
       "Below 10%",
       "Below 25%",
       "There is no target"
      ],
      "correta": 0,
      "explicacao": "An order counts once, even with more than one problem."
     },
     {
      "id": "bf-9",
      "tipo": "multipla",
      "licaoRef": "8-3",
      "enunciado": "After how many days idle does Amazon treat stock as excess?",
      "opcoes": [
       "90 days",
       "7 days",
       "15 days",
       "365 days"
      ],
      "correta": 0,
      "explicacao": "Inventory unsold for more than 90 days is treated as excess."
     },
     {
      "id": "bf-10",
      "tipo": "multipla",
      "licaoRef": "8-4",
      "enunciado": "What is the consumer withdrawal period for online purchases in the EU?",
      "opcoes": [
       "14 days",
       "3 days",
       "6 months",
       "There isn't one"
      ],
      "correta": 0,
      "explicacao": "No reason needed, counted from delivery."
     },
     {
      "id": "bf-11",
      "tipo": "ordenar",
      "licaoRef": "8-2",
      "enunciado": "Put the response to an account-at-risk warning in order:",
      "opcoes": [
       "Read the warning and identify the problem",
       "Find the root cause",
       "Fix and document the actions",
       "Submit the plan of action with preventive measures"
      ],
      "explicacao": "Amazon asks for root cause, corrective actions and preventive measures."
     },
     {
      "id": "bf-12",
      "tipo": "vf",
      "licaoRef": "8-2",
      "enunciado": "Opening a new account to get around a suspension is a good way out.",
      "correta": false,
      "explicacao": "It can make things worse. The way forward is the plan of action and the appeal."
     },
     {
      "id": "bf-13",
      "tipo": "multipla",
      "licaoRef": "7-4",
      "enunciado": "If your ad's ACoS is higher than the product's margin before ads, what happens?",
      "opcoes": [
       "Every ad-driven sale loses money",
       "You earn more",
       "Nothing changes",
       "Amazon refunds the difference"
      ],
      "correta": 0,
      "explicacao": "ACoS above the break-even margin means selling at a loss."
     },
     {
      "id": "bf-14",
      "tipo": "multipla",
      "licaoRef": "8-5",
      "enunciado": "What makes the 30-minute weekly routine work?",
      "opcoes": [
       "A fixed day and time, with key numbers and written triggers",
       "Doing it when you have spare time",
       "Only looking when there's a problem",
       "Delegating everything and never looking"
      ],
      "correta": 0,
      "explicacao": "A routine is a habit. Delegate collecting the numbers and keep the decision."
     }
    ]
   },
   {
    "nome": "Phase 3: Europe",
    "perguntas": [
     {
      "id": "bf-15",
      "tipo": "vf",
      "licaoRef": "9-2",
      "enunciado": "With a seller account in Spain, you can already sell in every European store without creating other accounts.",
      "correta": false,
      "explicacao": "According to Amazon, there is no single account: you need to create a seller account for each destination store."
     },
     {
      "id": "bf-16",
      "tipo": "multipla",
      "licaoRef": "9-2",
      "enunciado": "What is the Build International Listings tool for?",
      "opcoes": [
       "Creating offers in other stores from an existing store, syncing prices",
       "Registering the brand",
       "Paying VAT",
       "Opening a warehouse"
      ],
      "correta": 0,
      "explicacao": "It reuses the catalogue; you still check translation and prices."
     },
     {
      "id": "bf-17",
      "tipo": "multipla",
      "licaoRef": "9-3",
      "enunciado": "In Pan-EU, what does Amazon require regarding VAT?",
      "opcoes": [
       "Meeting VAT obligations, including a VAT number in each country where stock is held",
       "Nothing",
       "Only Spanish VAT",
       "Paying VAT twice"
      ],
      "correta": 0,
      "explicacao": "A VAT number is needed in each country where the goods are stored."
     },
     {
      "id": "bf-18",
      "tipo": "multipla",
      "licaoRef": "9-3",
      "enunciado": "What should someone selling to consumers in Germany and France with their own shipping packaging worry about?",
      "opcoes": [
       "Extended producer responsibility (packaging registration and recycling)",
       "Only the language",
       "Only the box colour",
       "Nothing, because Amazon covers everything"
      ],
      "correta": 0,
      "explicacao": "Germany has LUCID registration and the dual system; France requires joining an EPR organisation. Get help from a specialist."
     },
     {
      "id": "bf-19",
      "tipo": "multipla",
      "licaoRef": "9-4",
      "enunciado": "Is the United Kingdom part of Pan-EU?",
      "opcoes": [
       "No, it left on 1 January 2021",
       "Yes",
       "Only in December",
       "Only for books"
      ],
      "correta": 0,
      "explicacao": "The UK has its own VAT and customs rules."
     },
     {
      "id": "bf-20",
      "tipo": "multipla",
      "licaoRef": "9-1",
      "enunciado": "When is the best time to expand to another country?",
      "opcoes": [
       "When the product and operation are already stable and profitable in Spain",
       "When everything in Spain is going wrong",
       "On day one",
       "When someone asks"
      ],
      "correta": 0,
      "explicacao": "Expanding multiplies what already works, and the problems too."
     }
    ]
   }
  ]
 },
 "licoes": [
  {
   "id": "9-1",
   "titulo": "When it's time to expand",
   "minutos": 5,
   "fontes": [
    "amz-global-guia",
    "sell-es-europa-fba"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "coroa",
     "titulo": "Europe is big, but it's not for right now",
     "corpo": "Amazon lists **27 stores** worldwide, and in Europe Spain is just one of the doors. Before opening another, the right question is: **what's working in Spain that I can repeat?**\n\nExpanding **multiplies** what exists. A product that makes money in Spain can make money in another country. A disorganised operation only gets **more chaos**."
    },
    {
     "tipo": "passos",
     "titulo": "Signs you're ready",
     "itens": [
      "The product has a **confirmed margin** (World 5) after all fees",
      "The **ODR is below 1%** and the account is healthy (World 8)",
      "You have **stable stock and supplier**: you can produce more without hurting quality",
      "Spain's **VAT returns** are up to date",
      "You have a **weekly routine** and someone to help with it"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "What Amazon warns",
     "corpo": "For each new store, Amazon suggests **checking taxes, regulations and compliance requirements** before deciding what to sell, and consulting tax, legal and banking advisers."
    },
    {
     "tipo": "texto",
     "titulo": "Choose your first country wisely",
     "corpo": "Don't choose by country size but by **least friction**:\n\n- **Language:** can you serve customers and review the listing?\n- **Logistics:** is it cheap to ship from where the stock is?\n- **Rules:** are there specific **packaging, waste or certification** requirements?\n- **Competition:** does your product stand out there?\n\nWith FBA, Amazon provides **customer service in the local language**. With your own shipping, you need to hire someone to handle it."
    },
    {
     "tipo": "delegar",
     "corpo": "**Tax adviser (gestor):** tells you whether the new sales create VAT obligations. **Native translator:** reviews the listings. **You:** decide the country and budget based on the numbers."
    },
    {
     "tipo": "dica",
     "corpo": "Start with **one** country and **a few** products, your best sellers in Spain. Learn the routine and only then add the next one."
    }
   ],
   "quiz": [
    {
     "id": "9-1-q1",
     "tipo": "multipla",
     "enunciado": "When is the best time to expand?",
     "opcoes": [
      "When the operation in Spain is stable and profitable",
      "When everything is going wrong",
      "Before selling the first item",
      "Never"
     ],
     "correta": 0,
     "explicacao": "Expansion multiplies what exists, for better or worse."
    },
    {
     "id": "9-1-q2",
     "tipo": "vf",
     "enunciado": "Amazon suggests checking taxes and compliance requirements before selling in a new country.",
     "correta": true,
     "explicacao": "And consulting tax, legal and banking advisers."
    },
    {
     "id": "9-1-q3",
     "tipo": "multipla",
     "enunciado": "Which criterion is NOT good for choosing the first country?",
     "opcoes": [
      "Only the size of the country",
      "Language and customer service",
      "Logistics cost",
      "Packaging rules"
     ],
     "correta": 0,
     "explicacao": "Size alone doesn't pay the bills; friction (language, logistics, rules) matters more."
    },
    {
     "id": "9-1-q4",
     "tipo": "multipla",
     "enunciado": "Who provides local-language customer service with FBA?",
     "opcoes": [
      "Amazon",
      "You, necessarily",
      "The bank",
      "No one"
     ],
     "correta": 0,
     "explicacao": "With your own shipping, you hire a provider."
    }
   ]
  },
  {
   "id": "9-2",
   "titulo": "Build international listings",
   "minutos": 6,
   "fontes": [
    "amz-global-guia",
    "sell-es-europa-fba"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "coroa",
     "titulo": "One account per store",
     "corpo": "Amazon states that **there is no single seller account**: for each destination store you create a **new seller account**, even if you already sell in another. The account can use your customer account email or a separate business email.\n\n**Performance is measured separately** for each account. **Brand registration, however, is global**: once approved in one country, it applies in every store."
    },
    {
     "tipo": "passos",
     "titulo": "Steps to open a new store",
     "itens": [
      "Decide **what to sell** and check tax and compliance rules",
      "Create the store's **seller account**",
      "List the products (up to 20 items can be done manually; beyond that, **bulk files**)",
      "Choose **FBA or your own shipping** and send stock",
      "Manage everything in **Seller Central**"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Build International Listings",
     "corpo": "The tool (in Spanish, \"Crear listados internacionales\") **creates offers in other stores from an existing store**. With it, Amazon states that:\n\n- **prices are synced** and adjusted for exchange-rate changes\n- you can still create **separate listings with different prices**\n- product **ratings** are carried over, **only at first**, until the product gets local ratings",
     "termos": []
    },
    {
     "tipo": "alerta",
     "titulo": "Listing in the local language",
     "corpo": "Listings must be **in the local language**. If the product already has a page in the destination store, just **match your offer** to it. On new pages, translation is usually **automatic**, but read it carefully: a translation mistake turns into **returns and bad reviews**. Use a native translator from Amazon's provider network or an independent one."
    },
    {
     "tipo": "texto",
     "titulo": "Pricing with a cool head",
     "corpo": "Amazon recommends considering **shipping, customer service, currency conversion, taxes and fees** when setting prices. The same price as in Spain doesn't always work: **local VAT, logistics and competition** change. Redo the calculation in the **Workshop** for each country."
    },
    {
     "tipo": "delegar",
     "corpo": "**Native translator:** reviews title, bullets and description. **Virtual assistant:** uploads bulk files and checks prices. **You:** approve the final margin per country."
    }
   ],
   "quiz": [
    {
     "id": "9-2-q1",
     "tipo": "vf",
     "enunciado": "With a Spanish seller account, you automatically sell in every store.",
     "correta": false,
     "explicacao": "You need to create an account for each destination store."
    },
    {
     "id": "9-2-q2",
     "tipo": "multipla",
     "enunciado": "What is global, applying in every store?",
     "opcoes": [
      "Brand registration",
      "The seller account",
      "Performance",
      "VAT"
     ],
     "correta": 0,
     "explicacao": "Once approved in one country, the brand can be used in the other stores."
    },
    {
     "id": "9-2-q3",
     "tipo": "multipla",
     "enunciado": "Product ratings are carried over to other stores...",
     "opcoes": [
      "Only at first, until local ratings arrive",
      "Forever",
      "Never",
      "Only the negative ones"
     ],
     "correta": 0,
     "explicacao": "It's an initial boost."
    },
    {
     "id": "9-2-q4",
     "tipo": "multipla",
     "enunciado": "Why review the automatic translation?",
     "opcoes": [
      "Translation mistakes lead to returns and bad reviews",
      "Because translating is forbidden",
      "There's no need to review it",
      "Because VAT changes"
     ],
     "correta": 0,
     "explicacao": "Use a native translator."
    },
    {
     "id": "9-2-q5",
     "tipo": "lacuna",
     "enunciado": "Amazon recommends listing up to about 20 products manually; beyond that, use ___.",
     "opcoes": [
      "bulk inventory files",
      "extra accounts",
      "only the app",
      "the phone"
     ],
     "correta": 0,
     "explicacao": "Bulk files save a lot of time."
    }
   ]
  },
  {
   "id": "9-3",
   "titulo": "Fulfilment and VAT by country",
   "minutos": 8,
   "fontes": [
    "sell-es-europa-fba",
    "sell-es-iva",
    "ue-oss",
    "de-verpackungsregister-online",
    "citeo-adhesion"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "coroa",
     "titulo": "Three ways to deliver in Europe",
     "corpo": "1. **Own shipping (FBM):** you ship from your stock. More control, more cost and more time.\n2. **EFN:** stock **local only**; Amazon delivers locally or ships to other countries, charging the **cross-border fee**.\n3. **Pan-EU:** Amazon **distributes stock across the activated countries**, at no extra cost, and you pay the **local fee** where it's stored.\n\nAmazon cites **up to 53% savings** on fulfilment fees and up to 24% more sales, but Amazon itself says these come from a 2023 study and are **not guaranteed**.",
     "termos": [
      "pan-eu"
     ]
    },
    {
     "tipo": "passos",
     "titulo": "What Pan-EU requires",
     "itens": [
      "List with the **same SKU/FNSKU** in the required stores: **Germany, France, Italy, Spain and the Netherlands**",
      "Activate storage in **at least two countries** (Germany, France, Italy, Spain or Poland)",
      "Make sure the products are **eligible**",
      "**Meet VAT obligations**",
      "Send stock to an EU fulfilment centre",
      "In Germany and France: comply with **extended producer responsibility (EPR)**"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Dates cited on Amazon's page",
     "corpo": "**3 September 2026:** all Pan-EU products must have an active offer in the **Netherlands**. **26 February 2027:** the same for **Belgium**, with at least 30 days' notice. Programme rules change: **reread the official page** before enrolling."
    },
    {
     "tipo": "texto",
     "titulo": "VAT: where there's stock, there's a VAT number",
     "corpo": "For Pan-EU, you need **a VAT number in each country where the goods are stored**. Generally, no VAT number is needed in the customer's destination country.\n\nTo sell from one country to consumers in another **without stock there**, the regime is **distance selling**, and the [[oss]] lets you declare it all in a single quarterly return in the country of identification.",
     "termos": [
      "oss",
      "iva"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Heads-up: two sources, different numbers",
     "corpo": "Amazon.es's VAT page still shows **per-country thresholds** for distance selling (for example €100,000 for Germany and €35,000 for France and Italy). The official EU page on the OSS mentions **a single €10,000 threshold** for suppliers established in only one Member State, since 1 July 2021.\n\nTo decide, **follow the EU rule and confirm with your accountant**. Amazon itself says the obligation depends on your home country, where the stock is and your sales volume."
    },
    {
     "tipo": "texto",
     "titulo": "Packaging: Germany and France",
     "corpo": "**Germany:** anyone shipping packaging directly to German consumers is, at minimum, the **manufacturer and producer** of the shipping packaging, wherever they are. The steps are **LUCID registration**, a **contract with a dual system** and **volume reporting**. Foreigners without a base in Germany need an **authorised representative**. Marketplaces must check registration before allowing sales.\n\n**France:** anyone placing packaged products sold to consumers on the market must **join an extended producer responsibility organisation**. Without an identifier (UIN), the marketplace may **declare and charge a fee per order**. The fine for not joining can reach **€7,500 per tonne or unit**, according to Citeo.",
     "termos": [
      "epr"
     ]
    },
    {
     "tipo": "delegar",
     "corpo": "**Accountant/tax representative:** VAT numbers, OSS and returns per country. **EPR service (German and French):** LUCID, dual system, membership and reporting. **You:** decide which countries to activate stock in based on cost and margin."
    }
   ],
   "quiz": [
    {
     "id": "9-3-q1",
     "tipo": "multipla",
     "enunciado": "What is the difference between Pan-EU and EFN?",
     "opcoes": [
      "In Pan-EU Amazon distributes stock across activated countries; in EFN it stays local only",
      "They're the same",
      "EFN is only for books",
      "Pan-EU is free"
     ],
     "correta": 0,
     "explicacao": "Both use Amazon's network, with different stock logistics."
    },
    {
     "id": "9-3-q2",
     "tipo": "multipla",
     "enunciado": "In which countries does Pan-EU require you to list?",
     "opcoes": [
      "Germany, France, Italy, Spain and the Netherlands",
      "Only Spain",
      "Every EU country",
      "Only the UK"
     ],
     "correta": 0,
     "explicacao": "Plus storage in at least two countries."
    },
    {
     "id": "9-3-q3",
     "tipo": "multipla",
     "enunciado": "Where is a VAT number needed in Pan-EU?",
     "opcoes": [
      "In each country where the goods are stored",
      "Only in Spain",
      "In no country",
      "Only where the customer lives"
     ],
     "correta": 0,
     "explicacao": "Generally not needed in the destination country."
    },
    {
     "id": "9-3-q4",
     "tipo": "multipla",
     "enunciado": "What is the single OSS threshold for EU distance sales (supplier in only one Member State)?",
     "opcoes": [
      "€10,000 per year, excluding VAT",
      "€35,000 per country",
      "€100,000 per country",
      "There is no threshold"
     ],
     "correta": 0,
     "explicacao": "When the pages disagree, follow the EU and confirm with your accountant."
    },
    {
     "id": "9-3-q5",
     "tipo": "vf",
     "enunciado": "In Germany, a foreign seller shipping directly to consumers can ignore LUCID.",
     "correta": false,
     "explicacao": "They are, at minimum, the manufacturer and producer of the shipping packaging."
    },
    {
     "id": "9-3-q6",
     "tipo": "multipla",
     "enunciado": "What can happen in France without an EPR identifier?",
     "opcoes": [
      "The marketplace can declare for you and charge a fee per order",
      "Nothing",
      "Amazon pays",
      "The product becomes free"
     ],
     "correta": 0,
     "explicacao": "Better to join and give the identifier to the marketplaces."
    }
   ]
  },
  {
   "id": "9-4",
   "titulo": "The European marketplaces, one by one",
   "minutos": 7,
   "fontes": [
    "sell-es-europa-fba",
    "amz-global-guia",
    "gov-uk-iva-overseas",
    "sell-es-iva"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "coroa",
     "titulo": "The Pan-EU map",
     "corpo": "According to Amazon.es, Pan-EU covers **Germany, France, Italy, Spain, the Netherlands, Poland, Sweden, Belgium and Ireland**. **Sweden, Ireland and Poland** are optional stores. For local fees in Sweden and the Netherlands, you need to activate **Germany**; for Belgium, **Germany or France**."
    },
    {
     "tipo": "comparacao",
     "titulo": "Overview of the first markets",
     "colunas": [
      "Germany",
      "France",
      "Italy"
     ],
     "rotuloLinhas": "Watch out for",
     "linhas": [
      [
       "Language",
       "German",
       "French",
       "Italian"
      ],
      [
       "Pan-EU",
       "Required in Pan-EU",
       "Required in Pan-EU",
       "Required in Pan-EU"
      ],
      [
       "Packaging",
       "LUCID and dual system",
       "Joining an EPR organisation",
       "Confirm rules with your accountant"
      ],
      [
       "What to check",
       "Authorised representative, if no local base",
       "UIN for the marketplace",
       "VAT number if you hold stock"
      ]
     ],
     "nota": "Summary of what was confirmed in official sources. Prices, categories and competition vary by country: research before deciding."
    },
    {
     "tipo": "texto",
     "titulo": "Netherlands, Poland, Sweden, Belgium",
     "corpo": "The **Netherlands** is a required Pan-EU store and **Belgium** becomes required from the date Amazon gives (check the page). **Poland** is a country where storage can be activated and also an optional store. **Sweden and Ireland** are optional stores.\n\nEach country has **its own VAT and packaging rules**. Before activating, ask your accountant for a **country** checklist."
    },
    {
     "tipo": "texto",
     "titulo": "United Kingdom: another universe",
     "corpo": "The UK **left Pan-EU on 1 January 2021**. According to HMRC, consignments of up to **£135** from outside the UK pay **UK VAT at the point of sale** (the seller charges and declares it, which requires **VAT registration**). Above £135, **normal import rules** apply. Goods you already hold in the UK require **registration and VAT** on direct sales.\n\nAmazon.es also cites the UK's own thresholds (for example £85,000 domestic and £70,000 for sales from another EU country). Since rules change, **confirm with your accountant** before selling there."
    },
    {
     "tipo": "alerta",
     "corpo": "This course **does not give prices, fees or rankings by country** that it couldn't confirm in an official source. Before choosing your 2nd market, use Amazon's **Product Opportunity Explorer** and a **keyword search** in that country's store."
    },
    {
     "tipo": "delegar",
     "corpo": "**Local translator/market analyst:** researches competition and keywords in the language. **Tax accountant:** VAT and packaging per country. **You:** choose the 2nd market based on the margin calculated in the Workshop."
    }
   ],
   "quiz": [
    {
     "id": "9-4-q1",
     "tipo": "multipla",
     "enunciado": "Which are the optional Pan-EU stores according to Amazon.es?",
     "opcoes": [
      "Sweden, Ireland and Poland",
      "Germany and France",
      "Spain and Italy",
      "All"
     ],
     "correta": 0,
     "explicacao": "Germany, France, Italy, Spain and the Netherlands are the required ones."
    },
    {
     "id": "9-4-q2",
     "tipo": "vf",
     "enunciado": "The United Kingdom is part of Pan-EU.",
     "correta": false,
     "explicacao": "It left on 1 January 2021."
    },
    {
     "id": "9-4-q3",
     "tipo": "multipla",
     "enunciado": "According to HMRC, for consignments of up to £135 from outside the UK, who charges UK VAT?",
     "opcoes": [
      "The seller, at the point of sale",
      "The customer on delivery, always",
      "No one",
      "The carrier"
     ],
     "correta": 0,
     "explicacao": "This requires the seller to be VAT-registered, except for B2B sales with a UK VAT number."
    },
    {
     "id": "9-4-q4",
     "tipo": "multipla",
     "enunciado": "What is the best way to choose your 2nd market?",
     "opcoes": [
      "Research demand and competition in the country and calculate the local margin",
      "Pick the biggest country",
      "Draw lots",
      "Copy a friend"
     ],
     "correta": 0,
     "explicacao": "Data and margin, not hunches."
    }
   ]
  },
  {
   "id": "9-5",
   "titulo": "Scaling up and maybe selling the business",
   "minutos": 6,
   "fontes": [
    "amz-global-guia"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "coroa",
     "titulo": "Scaling is growing without drowning",
     "corpo": "Growing isn't just selling more: it's **selling more without losing control**. Four levers:\n\n1. **More products** that complement the ones already selling\n2. **More countries**, one at a time\n3. **More channels** (your own site, other marketplaces, B2B)\n4. **Less of you** in operations: written routines and trusted people\n\nAmazon suggests listing a **broad selection of your catalogue** in new stores and removing what doesn't sell."
    },
    {
     "tipo": "passos",
     "titulo": "A safe order for growth",
     "itens": [
      "**Stabilise** Spain: margin, healthy account and VAT up to date",
      "**Document** the routine so someone else can do it",
      "Open **one new country** with a few products",
      "Measure the **real margin** per country after 60 to 90 days",
      "Only then **add products or countries**"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "A strong brand is worth more",
     "corpo": "Whoever has a **registered own brand**, well-made pages, good reviews and **organised accounts** builds an asset they can **protect and, if they want, sell**. Without a brand and documentation, the business depends on you alone.\n\nBrand registration is **global on Amazon**: it applies in every store you enter."
    },
    {
     "tipo": "alerta",
     "titulo": "About selling the business",
     "corpo": "Buyers look at **real profit, clean books, a registered trademark, stable suppliers and owner dependence**. There is no reliable pricing rule here (multiples vary a lot), so **don't bet on a number someone promised you**. To value and negotiate, use a **lawyer and an accountant**."
    },
    {
     "tipo": "delegar",
     "corpo": "**Accountant:** clean financial statements per country. **Lawyer:** supply and trademark contracts. **Operations manager:** takes over the routine. **You:** strategy, product and the big decisions."
    },
    {
     "tipo": "dica",
     "corpo": "You started from zero. Each world was a **step**. Now go back to the **Workshop** and the **Real-Life Missions** and turn what you've learned into action."
    }
   ],
   "quiz": [
    {
     "id": "9-5-q1",
     "tipo": "multipla",
     "enunciado": "What is the safe order for growth?",
     "opcoes": [
      "Stabilise, document, open a new country, measure and only then expand",
      "Open every country at once",
      "Stop looking at the numbers",
      "Wait for luck"
     ],
     "correta": 0,
     "explicacao": "Short steps with measurement."
    },
    {
     "id": "9-5-q2",
     "tipo": "vf",
     "enunciado": "There is a fixed, reliable rule for how many times profit an Amazon business is worth.",
     "correta": false,
     "explicacao": "Multiples vary a lot. Use an accountant and a lawyer."
    },
    {
     "id": "9-5-q3",
     "tipo": "multipla",
     "enunciado": "What makes the business more sellable?",
     "opcoes": [
      "A registered trademark, clean books and little owner dependence",
      "Total secrecy",
      "Having many accounts",
      "Having no documentation"
     ],
     "correta": 0,
     "explicacao": "Organisation and brand make up the asset."
    },
    {
     "id": "9-5-q4",
     "tipo": "multipla",
     "enunciado": "Who makes the big product and strategy decisions?",
     "opcoes": [
      "You",
      "The factory",
      "The customer",
      "No one"
     ],
     "correta": 0,
     "explicacao": "Delegate operations, keep the strategy."
    }
   ]
  }
 ]
};

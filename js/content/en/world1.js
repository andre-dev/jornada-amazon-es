// Mundo 1 (en). Gerado por tools/i18n-mundos.mjs a partir de js/content/world1.js.
export default {
 "id": 1,
 "slug": "vila-do-zero",
 "titulo": "Zero Village",
 "subtitulo": "What selling on Amazon is",
 "cor": "var(--sol)",
 "cenario": "vila",
 "chefe": {
  "id": "nevoeiro",
  "nome": "The Fog of Doubt",
  "hp": 100,
  "fala": "Sell on Amazon? In Spain? Without native Spanish? Better give up...",
  "derrota": "Fine, fine... the doubt has cleared. You may pass.",
  "perguntas": [
   {
    "id": "b1-1",
    "tipo": "multipla",
    "licaoRef": "1-1",
    "enunciado": "Two sellers offer the same ASIN on Amazon.es. What decides who appears in the buy button?",
    "opcoes": [
     "A draw between the sellers",
     "A combination of offer factors, such as total price, availability, delivery and seller performance",
     "Always whoever registered first",
     "Always whoever has had their account longest"
    ],
    "correta": 1,
    "explicacao": "The Buy Box is decided by a set of offer and seller factors. Price isn't everything: delivery and performance matter."
   },
   {
    "id": "b1-2",
    "tipo": "vf",
    "licaoRef": "1-1",
    "enunciado": "In the 3P (third-party seller) model, Amazon buys your stock and sets the selling price.",
    "correta": false,
    "explicacao": "That describes the 1P (vendor) model. In 3P you keep the stock, set the price, and Amazon charges fees for using the platform."
   },
   {
    "id": "b1-3",
    "tipo": "multipla",
    "licaoRef": "1-2",
    "enunciado": "Which of these stores is NOT part of the Pan-EU fulfilment programme, according to the official page?",
    "opcoes": [
     "Amazon.de",
     "Amazon.it",
     "Amazon.co.uk",
     "Amazon.nl"
    ],
    "correta": 2,
    "explicacao": "The United Kingdom left Pan-EU on 1 January 2021. It's handled under a separate programme."
   },
   {
    "id": "b1-4",
    "tipo": "multipla",
    "licaoRef": "1-3",
    "enunciado": "What's the main advantage of your own brand over reselling well-known brands?",
    "opcoes": [
     "It needs less capital",
     "You control the product, the page and (usually) the Buy Box",
     "It requires no attention to quality",
     "It doesn't need ads"
    ],
    "correta": 1,
    "explicacao": "With your own brand the listing is yours: you choose the product, images and copy, and you don't compete for the same offer with dozens of resellers."
   },
   {
    "id": "b1-5",
    "tipo": "vf",
    "licaoRef": "1-4",
    "enunciado": "Under Amazon's policy, dropshipping is allowed as long as you are the seller of record and the supplier doesn't appear on the customer's paperwork.",
    "correta": true,
    "explicacao": "Exactly: the seller of record's name must appear on everything the customer receives, the supplier must be removed from invoices, labels and packaging, and returns are your responsibility."
   },
   {
    "id": "b1-6",
    "tipo": "multipla",
    "licaoRef": "1-4",
    "enunciado": "Why is retail arbitrage (buying in shops and reselling on Amazon) risky?",
    "opcoes": [
     "Because it's illegal in Spain",
     "Because Amazon may ask for proof of origin, brands may challenge the sale, and there's no guaranteed restock",
     "Because the products never have a margin",
     "Because it only works in December"
    ],
    "correta": 1,
    "explicacao": "The risk lies in authenticity, proof of purchase, restricted categories and brand complaints. Plus, a shop's sale ends and you can't restock."
   },
   {
    "id": "b1-7",
    "tipo": "ordenar",
    "licaoRef": "1-5",
    "enunciado": "Put the journey of an FBA order in order, from the customer's click to delivery.",
    "opcoes": [
     "The customer buys on Amazon.es",
     "Amazon picks and packs the product in the warehouse",
     "Amazon ships it to the customer",
     "Amazon handles tracking, customer service and any return"
    ],
    "explicacao": "With FBA, Amazon takes over after the purchase: it picks, packs, ships and serves the customer."
   },
   {
    "id": "b1-8",
    "tipo": "multipla",
    "licaoRef": "1-5",
    "enunciado": "Which of these is one of the published requirements for Seller Fulfilled Prime in Spain?",
    "opcoes": [
     "Valid tracking on at least 99% of shipments",
     "Having at least three registered trademarks",
     "Using only Amazon's warehouse",
     "Selling only fashion products"
    ],
    "correta": 0,
    "explicacao": "The official page lists, among others, 90% on-time delivery, valid tracking on at least 99% of shipments and cancellations of up to 0.5%."
   },
   {
    "id": "b1-9",
    "tipo": "multipla",
    "licaoRef": "1-6",
    "enunciado": "Who usually handles taxes, returns and tax registrations for small businesses in Spain?",
    "opcoes": [
     "The PPC manager",
     "The gestoría",
     "The prep centre",
     "The photographer"
    ],
    "correta": 1,
    "explicacao": "A gestoría is the firm that handles tax and accounting paperwork for the self-employed and small businesses."
   },
   {
    "id": "b1-10",
    "tipo": "vf",
    "licaoRef": "1-6",
    "enunciado": "To delegate work in Seller Central, the best approach is to share your main password with your assistant.",
    "correta": false,
    "explicacao": "Don't. Create users with limited permissions for each person: that way you control access and can revoke it whenever you want."
   }
  ]
 },
 "licoes": [
  {
   "id": "1-1",
   "titulo": "How the marketplace works inside",
   "minutos": 6,
   "fontes": [
    "sell-es-vender-online",
    "sell-es-home"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "vila",
     "titulo": "A giant mall with thousands of shops",
     "corpo": "Amazon.es is a **marketplace**: a single shopfront where Amazon itself and thousands of independent sellers coexist. The customer buys on the site, but the product often comes from a seller like you.\n\nFor sellers, this means something valuable: **you rent access to millions of shoppers** without building a shop or paying to attract your first visitor. The price is the fees and the house rules."
    },
    {
     "tipo": "comparacao",
     "titulo": "1P vs 3P: two ways to be on Amazon",
     "rotuloLinhas": "",
     "colunas": [
      "1P (vendor)",
      "3P (third-party seller)"
     ],
     "linhas": [
      [
       "Who buys the stock",
       "Amazon buys from you and resells",
       "You keep the stock as owner"
      ],
      [
       "Who sets the price",
       "Amazon",
       "You"
      ],
      [
       "Who appears as the seller",
       "Amazon",
       "You"
      ],
      [
       "How to get in",
       "Usually by Amazon's invitation",
       "By opening a seller account"
      ],
      [
       "Control over brand and offer",
       "Less",
       "More"
      ]
     ],
     "nota": "This course is about **3P**, the path open to any entrepreneur.",
     "termos": [
      "1p",
      "3p"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "The shared catalogue and the ASIN",
     "corpo": "Each product has a single page, identified by a 10-character code: the [[asin]]. If three sellers sell the same bottle, all three **offer on the same ASIN**, on the same page.\n\nThat's why you don't \"create a shop\" on Amazon: you **create or join catalogue pages**. If the product already exists, you offer on it. If it's a new product of your own, you create the ASIN (usually with a [[gtin]], the barcode).",
     "termos": [
      "asin",
      "gtin"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "The Buy Box: the button that concentrates sales",
     "corpo": "When several sellers offer on the same ASIN, Amazon picks **one offer** to fill the \"Añadir a la cesta\" (Add to basket) button. That's the [[buy-box]]. Whoever wins it gets most of that page's purchases.\n\nThe choice considers a set of offer and seller factors, such as:\n\n- total price (product + shipping)\n- stock availability\n- speed and reliability of delivery\n- account performance (cancellations, delays, complaints)\n\nAmazon doesn't publish the exact formula. What matters: **a low price alone isn't enough**.",
     "termos": [
      "buy-box"
     ]
    },
    {
     "tipo": "exemplo",
     "titulo": "The insulated bottle with five offers",
     "corpo": "Imagine a well-known brand's bottle with five sellers on the same ASIN. One ships from Amazon's warehouse, delivers fast and has a spotless account. Another is 2% cheaper but ships from their own garage in four days.\n\nIt's common for the first to win the Buy Box even while charging a bit more. Moral: **delivery and reputation buy price**."
    },
    {
     "tipo": "dica",
     "corpo": "When you create **your own product** with **your brand**, the ASIN is yours and nobody competes with you for the Buy Box. That's the big argument for your own brand, which we'll see in lesson 3."
    },
    {
     "tipo": "alerta",
     "titulo": "Amazon can also be your competitor",
     "corpo": "On many pages Amazon itself sells the product (1P). When that happens, winning the Buy Box is much harder. Before choosing a resale product, check **who is selling** on the page."
    },
    {
     "tipo": "delegar",
     "corpo": "You don't need to run Seller Central day to day. You need to understand these four concepts (ASIN, catalogue, Buy Box, 1P vs 3P) to **hold to account** whoever runs it for you and to **decide** which kind of product is worth it."
    }
   ],
   "quiz": [
    {
     "id": "1-1-q1",
     "tipo": "multipla",
     "enunciado": "What is an ASIN?",
     "opcoes": [
      "The 10-character code that identifies a product page in the catalogue",
      "The seller's tax number in Spain",
      "The fee charged per item sold",
      "The name of Amazon's warehouse"
     ],
     "correta": 0,
     "explicacao": "The ASIN is the product's identifier in the catalogue. Several sellers can offer on the same ASIN."
    },
    {
     "id": "1-1-q2",
     "tipo": "vf",
     "enunciado": "In the shared catalogue, each seller has their own page for the same product.",
     "correta": false,
     "explicacao": "There's one page per product (ASIN). All sellers of that product appear on it as offers."
    },
    {
     "id": "1-1-q3",
     "tipo": "multipla",
     "enunciado": "What's the best description of the Buy Box?",
     "opcoes": [
      "The security deposit the seller pays",
      "The buy button, filled by one of the ASIN's offers",
      "The box the product is shipped in",
      "A badge for registered trademarks"
     ],
     "correta": 1,
     "explicacao": "The Buy Box is the main buy button. Whoever holds it gets most of the ASIN's sales."
    },
    {
     "id": "1-1-q4",
     "tipo": "lacuna",
     "enunciado": "In the ___ model, you are the seller, keep the stock and set the price.",
     "opcoes": [
      "3P",
      "1P",
      "FNSKU"
     ],
     "correta": 0,
     "explicacao": "3P is the third-party seller: you sell, Amazon brokers and charges fees."
    },
    {
     "id": "1-1-q5",
     "tipo": "ordenar",
     "enunciado": "Put the journey of a third-party sale in order:",
     "opcoes": [
      "The customer searches and opens the ASIN page",
      "One offer holds the Buy Box",
      "The customer buys",
      "The seller delivers the order (or Amazon, if it's FBA)"
     ],
     "explicacao": "The sale starts with search, goes through the Buy Box and ends with delivery."
    }
   ]
  },
  {
   "id": "1-2",
   "titulo": "Amazon.es and the European marketplaces",
   "minutos": 5,
   "fontes": [
    "sell-es-europa-fba",
    "sell-es-home"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "One store per country",
     "corpo": "Amazon isn't a single site for Europe. There's **one store per country**: Amazon.es (Spain), Amazon.de (Germany), Amazon.fr (France) and so on. Each has its own language, customers, shopping habits and tax rules.\n\nThe good news: Amazon itself says the seller account is set up to sell across Europe. You **don't open a new company in each country** to be present in the stores."
    },
    {
     "tipo": "texto",
     "titulo": "Which European stores you can sell in",
     "corpo": "According to the official Fulfilment by Amazon Europe page, the Pan-EU programme stores are:\n\n- **Mandatory:** Germany, France, Italy, Spain and the Netherlands (the last one mandatory from 3 September 2026)\n- **Available:** Poland, Sweden, Belgium and Ireland (Belgium becomes mandatory on 26 February 2027)\n\nThe **United Kingdom** left Pan-EU on 1 January 2021 and is handled under a separate programme, because it's no longer in the European Union.",
     "termos": [
      "pan-eu"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "One account doesn't mean one tax",
     "corpo": "Getting into the stores is easy. The hard part is **complying with each country's rules**: VAT, packaging, labels, product safety. That's why the recommended strategy for beginners is to master **one** store before opening the others."
    },
    {
     "tipo": "comparacao",
     "titulo": "Starting in Spain only vs starting across Europe",
     "colunas": [
      "Spain only",
      "All of Europe"
     ],
     "linhas": [
      [
       "Language and culture",
       "Just one (and you live there)",
       "Several languages, several audiences"
      ],
      [
       "Tax complexity",
       "Lower",
       "Higher: VAT and rules per country"
      ],
      [
       "Risk of mistakes",
       "Easier to control",
       "Multiplies"
      ],
      [
       "When it makes sense",
       "First product, first months",
       "Validated product and healthy margin"
      ]
     ]
    },
    {
     "tipo": "passos",
     "titulo": "The recommended route",
     "itens": [
      "Set up the tax structure and account and sell in Spain",
      "Prove the product: steady sales, good reviews, real margin",
      "Expand to neighbouring countries with translated listings",
      "Only then optimise pan-European fulfilment (World 9)"
     ]
    },
    {
     "tipo": "dica",
     "corpo": "Since you'll be living in **Madrid**, Spain is the perfect training ground: the language on your doorstep, couriers and service providers nearby, and the rules you'll learn in World 2 form the basis for everything else."
    }
   ],
   "quiz": [
    {
     "id": "1-2-q1",
     "tipo": "multipla",
     "enunciado": "According to the official page, which store left Pan-EU in 2021?",
     "opcoes": [
      "Amazon.fr",
      "Amazon.co.uk",
      "Amazon.it",
      "Amazon.pl"
     ],
     "correta": 1,
     "explicacao": "The United Kingdom left Pan-EU on 1 January 2021."
    },
    {
     "id": "1-2-q2",
     "tipo": "vf",
     "enunciado": "Having a seller account that reaches several European stores means VAT is the same in all of them.",
     "correta": false,
     "explicacao": "Access to the stores is shared, but each country has its own tax and product rules."
    },
    {
     "id": "1-2-q3",
     "tipo": "multipla",
     "enunciado": "Why is Spain a good first store for someone living in Madrid?",
     "opcoes": [
      "Because it's the only one that accepts foreign sellers",
      "Because the language, service providers and rules are within reach, reducing the risk of mistakes",
      "Because there's no VAT there",
      "Because it's the biggest store in Europe"
     ],
     "correta": 1,
     "explicacao": "Learning with a single store reduces risk. The other stores accept foreigners too, and VAT exists in all of them."
    },
    {
     "id": "1-2-q4",
     "tipo": "ordenar",
     "enunciado": "Put the recommended expansion route in order:",
     "opcoes": [
      "Sell in Spain",
      "Validate the product with real data",
      "Translate and list in neighbouring countries",
      "Optimise pan-European fulfilment"
     ],
     "explicacao": "First prove the product where it's simplest, then expand, and only at the end optimise fulfilment."
    }
   ]
  },
  {
   "id": "1-3",
   "titulo": "Own brand and resale: the two main paths",
   "minutos": 7,
   "fontes": [
    "sell-es-home"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Path 1: own brand (private label)",
     "corpo": "You choose a product that factories already make, put **your brand** on it (usually with design, packaging or bundle improvements) and sell it as exclusive. The listing becomes yours.\n\n**Advantages:** control of the page and price, potentially higher margin, an asset that grows (the brand), no fight for the Buy Box.\n\n**Challenges:** it takes research, samples, importing, attention to product safety and ad spend to get discovered. A product mistake hits the whole brand.",
     "termos": [
      "marca-propria"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Path 2: resale (wholesale)",
     "corpo": "You buy from **authorised brands or distributors** and resell on Amazon. The product already has demand and a reputation.\n\n**Advantages:** less product work, existing demand, the starting capital can be lower.\n\n**Challenges:** tight margins, competition for the Buy Box, the risk of the brand selling directly or changing distributors, and the need for **authorisation and invoices** proving the origin. There are also VAT implications for resellers (we'll see them in World 2).",
     "termos": [
      "wholesale"
     ]
    },
    {
     "tipo": "comparacao",
     "titulo": "Side by side",
     "rotuloLinhas": "",
     "colunas": [
      "Own brand",
      "Resale"
     ],
     "linhas": [
      [
       "Page control",
       "Full",
       "Shared with other sellers"
      ],
      [
       "Buy Box",
       "Usually yours alone",
       "Contested"
      ],
      [
       "Potential margin",
       "Higher",
       "Lower and under pressure"
      ],
      [
       "Upfront work",
       "High (product, brand, photos)",
       "Medium (contracts with brands)"
      ],
      [
       "Capital and lead time",
       "Large stock and import lead time",
       "Recurring purchases, faster turnover"
      ],
      [
       "Main risk",
       "Choosing the wrong product",
       "Depending on a few brands and on price"
      ]
     ],
     "nota": "The levels are qualitative: they vary a lot by product and category."
    },
    {
     "tipo": "delegar",
     "titulo": "What you can delegate",
     "corpo": "**Own brand:** sourcing agent (finds and negotiates with factories), packaging and photo designer, ads manager, prep centre to label and ship.\n\n**Resale:** purchasing assistant to contact brands and distributors, an automatic repricing tool and the gestoría for invoices and VAT.\n\nEither way, **choosing the product and supplier is your decision**."
    },
    {
     "tipo": "exemplo",
     "titulo": "Two ideas for the same budget",
     "corpo": "**Own brand:** a kitchen drawer organiser, light and simple. You customise the colour and bundle, create the brand and you're the only seller.\n\n**Resale:** coffee from an authorised Spanish roaster. It already sells well, but you share the page with other resellers and depend on your contract with the roaster."
    },
    {
     "tipo": "alerta",
     "corpo": "Reselling well-known brands **without authorisation** usually ends in intellectual property complaints and blocked offers. Always keep the supplier's **purchase invoices**."
    },
    {
     "tipo": "dica",
     "corpo": "This course focuses on **own brand**, which gives more control and is where product curation (World 3) makes the biggest difference. But everything you learn about fees, taxes, listings and ads applies to resale too."
    }
   ],
   "quiz": [
    {
     "id": "1-3-q1",
     "tipo": "multipla",
     "enunciado": "Which of these is a typical advantage of your own brand?",
     "opcoes": [
      "You don't pay Amazon fees",
      "The listing is yours and you usually don't share the Buy Box",
      "You don't need stock",
      "The demand is already there"
     ],
     "correta": 1,
     "explicacao": "With your own brand you control the page and the offer. Fees exist in every model."
    },
    {
     "id": "1-3-q2",
     "tipo": "multipla",
     "enunciado": "What's a typical risk of resale?",
     "opcoes": [
      "Tight margins and competition for the Buy Box",
      "Being unable to buy from suppliers",
      "Being banned from using FBA",
      "Having to create a logo"
     ],
     "correta": 0,
     "explicacao": "In resale you share the page with other sellers and compete hard on price and delivery."
    },
    {
     "id": "1-3-q3",
     "tipo": "vf",
     "enunciado": "Reselling a well-known brand without authorisation is safe as long as you pay less than Amazon's price.",
     "correta": false,
     "explicacao": "Without authorisation and proof-of-origin invoices, the brand can complain and the offer can be blocked, even at a low price."
    },
    {
     "id": "1-3-q4",
     "tipo": "lacuna",
     "enunciado": "The professional who finds and negotiates with factories for you is called a ___ agent.",
     "opcoes": [
      "sourcing",
      "PPC",
      "prep"
     ],
     "correta": 0,
     "explicacao": "A sourcing agent finds suppliers, orders samples and negotiates, and is one of the most commonly delegated roles."
    },
    {
     "id": "1-3-q5",
     "tipo": "multipla",
     "enunciado": "Who should make the final decision on which product to sell?",
     "opcoes": [
      "The owner, supported by data and specialists",
      "Always the sourcing agent",
      "Always the ads manager",
      "The gestoría"
     ],
     "correta": 0,
     "explicacao": "You can delegate the research and execution, but the product decision belongs to the owner: it defines the risk and the capital."
    }
   ]
  },
  {
   "id": "1-4",
   "titulo": "Arbitrage, dropshipping and other paths",
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
     "titulo": "Arbitrage: buy cheap here, sell dear there",
     "corpo": "In **arbitrage** you buy products in shops (physical or online), usually on sale, and resell them on Amazon for more.\n\nIt looks simple, but there are traps:\n\n- **Origin:** Amazon may ask for proof of purchase. Without it, the offer can be removed.\n- **Restricted brands and categories:** not every seller can offer every product.\n- **No repeat:** the sale ends and you can't restock at the same cost.\n- **Manual work:** it's opportunity hunting, hard to turn into a company.",
     "termos": [
      "arbitragem"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Dropshipping: what Amazon allows",
     "corpo": "In [[dropshipping]], you sell, but **another company ships** the product directly to the customer. Amazon **allows** it if you follow clear rules:\n\n- you are the **seller of record** and appear as such on everything the customer receives\n- the supplier must **remove** their name, logo, invoices and prices inside and outside the package\n- you **accept and process returns**\n- you follow the seller agreement and other policies",
     "termos": [
      "dropshipping"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "What's prohibited in dropshipping",
     "corpo": "It's **prohibited** to buy from another retailer and have them ship directly to your customer with their own paperwork. It's also prohibited for third-party names, logos or contact details to appear on invoices, labels or packaging.\n\nAnyone who breaks the rules sees their account health drop and loses access to certain fulfilment services. If Amazon sees a competitor's package reaching the customer, **your account pays the price**."
    },
    {
     "tipo": "texto",
     "titulo": "Other paths at a glance",
     "corpo": "- **Amazon Handmade:** for artisans who make their own products. It requires an application and audit. The official page lists a referral fee of **12.36%**, sign-up on the Professional plan and permitted categories (digital, food and electronics are excluded).\n- **KDP (Kindle Direct Publishing):** publishing books as ebooks and paperbacks, a separate royalties programme.\n- **Merch on Demand:** print-on-demand T-shirts and items, also a separate programme that requires an application.\n\nThe last two are worlds of their own, with different rules and accounts. We only introduce them here: **check current availability and terms on each programme's site**.",
     "termos": [
      "handmade"
     ]
    },
    {
     "tipo": "comparacao",
     "titulo": "Level of risk and work",
     "colunas": [
      "Risk",
      "Can it scale?",
      "Easy to delegate?"
     ],
     "linhas": [
      [
       "Own brand",
       "Medium",
       "Yes",
       "Yes"
      ],
      [
       "Authorised resale",
       "Medium",
       "Yes",
       "Yes"
      ],
      [
       "Arbitrage",
       "High",
       "A little",
       "A little"
      ],
      [
       "Dropshipping",
       "High (strict rules)",
       "Depends on the supplier",
       "Yes, with a contract"
      ],
      [
       "Handmade",
       "Low to medium",
       "Limited by production",
       "A little"
      ]
     ],
     "nota": "The course's reference chart, in qualitative levels."
    },
    {
     "tipo": "delegar",
     "corpo": "If you choose dropshipping, your contract with the supplier must state in writing: **neutral packaging, none of their invoices in the package, shipping time and who pays for returns**. Have a lawyer or your gestoría review it."
    },
    {
     "tipo": "dica",
     "corpo": "If the goal is a company that **runs without you doing the work**, the best-fitting paths are **own brand** and **authorised resale**. Arbitrage is a job; dropshipping is a game of rules."
    }
   ],
   "quiz": [
    {
     "id": "1-4-q1",
     "tipo": "vf",
     "enunciado": "Amazon bans all forms of dropshipping.",
     "correta": false,
     "explicacao": "It's allowed, with conditions: you're the seller of record, the supplier disappears from the paperwork and you handle returns."
    },
    {
     "id": "1-4-q2",
     "tipo": "multipla",
     "enunciado": "Which practice is prohibited in dropshipping?",
     "opcoes": [
      "Using a supplier to ship the order",
      "Buying from another retailer and shipping directly to the customer with their invoice and packaging",
      "Removing the supplier's name from the package",
      "Accepting returns"
     ],
     "correta": 1,
     "explicacao": "When another retailer's name, invoice or logo reaches the customer, the policy has been broken."
    },
    {
     "id": "1-4-q3",
     "tipo": "multipla",
     "enunciado": "Why is arbitrage hard to turn into a stable business?",
     "opcoes": [
      "Because it's illegal",
      "Because it depends on temporary sales, with no guaranteed restock, and there's an origin risk",
      "Because Amazon charges double fees",
      "Because it only works with a company card"
     ],
     "correta": 1,
     "explicacao": "The opportunity vanishes when the sale ends, and the product's origin must be provable."
    },
    {
     "id": "1-4-q4",
     "tipo": "multipla",
     "enunciado": "Which of these products CANNOT be sold through Amazon Handmade, according to the official page?",
     "opcoes": [
      "Handmade jewellery",
      "Handmade home decor",
      "Digital products, food and electronics",
      "Wooden toys you make yourself"
     ],
     "correta": 2,
     "explicacao": "The page lists digital, food and electronics as not allowed in the programme."
    },
    {
     "id": "1-4-q5",
     "tipo": "lacuna",
     "enunciado": "In dropshipping, the seller of record on all the paperwork is ___.",
     "opcoes": [
      "you",
      "the supplier",
      "the carrier"
     ],
     "correta": 0,
     "explicacao": "The supplier acts only as a logistics partner invisible to the customer."
    }
   ]
  },
  {
   "id": "1-5",
   "titulo": "FBA, FBM and Prime: who gets the box to the customer",
   "minutos": 6,
   "fontes": [
    "sell-es-sfp",
    "sell-es-home",
    "sell-es-europa-fba"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "FBA: Amazon does the fulfilment for you",
     "corpo": "With [[fba]] (Fulfilment by Amazon) you send your stock to an Amazon fulfilment centre. From then on, when someone buys, Amazon **picks, packs and ships**; it also handles **customer service and returns** for that order. In return, it charges fulfilment and storage fees.\n\nFor anyone who doesn't want to run operations, it's the most natural path: you focus on product, brand and margin.",
     "termos": [
      "fba"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "FBM: you deliver yourself",
     "corpo": "With [[fbm]] (fulfilled by the merchant) the stock stays with you, or with a logistics provider you hire, and you pack and dispatch each order. Amazon shows the offer and takes the commission.\n\nIt's useful for large, fragile, seasonal or slow-moving products, and for those who already have logistics in place. But it takes discipline: **every delay and every cancellation affects your account health**.",
     "termos": [
      "fbm"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "Seller Fulfilled Prime",
     "corpo": "There's a middle ground: **Seller Fulfilled Prime** (Prime gestionado por el vendedor). You ship from your own stock, but the product gets the Prime badge. According to Amazon.es's official page:\n\n- it requires a trial period before the badge appears\n- at least **90% on-time delivery**\n- valid tracking on at least **99%** of shipments\n- cancellations of up to **0.5%**\n- free shipping and returns for Prime members\n\nAmazon handles after-sales customer service at no extra cost. The page mentions the Professional plan (€39/month, excl. VAT).",
     "termos": [
      "sfp"
     ]
    },
    {
     "tipo": "comparacao",
     "titulo": "Three ways to deliver",
     "colunas": [
      "FBA",
      "FBM",
      "Seller Fulfilled Prime"
     ],
     "linhas": [
      [
       "Where the stock is",
       "Amazon's warehouse",
       "With you or your provider",
       "With you or your provider"
      ],
      [
       "Who packs and ships",
       "Amazon",
       "You",
       "You"
      ],
      [
       "Prime badge",
       "Yes",
       "No",
       "Yes, if you meet the requirements"
      ],
      [
       "Customer service and returns",
       "Amazon",
       "You",
       "Amazon (after-sales service)"
      ],
      [
       "Operational demands",
       "Preparing and sending stock",
       "Lots of daily discipline",
       "Strict delivery-time and tracking targets"
      ]
     ]
    },
    {
     "tipo": "fluxo",
     "titulo": "The FBA order journey",
     "etapas": [
      {
       "titulo": "You prepare and send the stock",
       "texto": "Labelled and packed (see World 4)"
      },
      {
       "titulo": "Amazon stores it in the fulfilment centre"
      },
      {
       "titulo": "The customer buys"
      },
      {
       "titulo": "Amazon packs and delivers",
       "texto": "And handles returns"
      }
     ]
    },
    {
     "tipo": "delegar",
     "corpo": "Even with FBA, someone has to **prepare the stock** (labels, packaging) and track shipments. That's the job of a **prep centre** or a **logistics provider**. For FBM, a logistics provider is almost essential if you don't want to keep stock at home.",
     "termos": [
      "prep-center"
     ]
    },
    {
     "tipo": "dica",
     "corpo": "Rule of thumb to start: **FBA for small, light products** that sell well. For large or very cheap items, do the maths carefully: fulfilment fees weigh more (you'll do that calculation in World 5)."
    }
   ],
   "quiz": [
    {
     "id": "1-5-q1",
     "tipo": "multipla",
     "enunciado": "With FBA, who handles shipping and returns for each order?",
     "opcoes": [
      "You",
      "Amazon",
      "The customer",
      "The gestoría"
     ],
     "correta": 1,
     "explicacao": "Amazon picks, packs, ships and serves the customer on FBA orders."
    },
    {
     "id": "1-5-q2",
     "tipo": "vf",
     "enunciado": "With FBM, delays and cancellations don't affect account health because Amazon only shows the offer.",
     "correta": false,
     "explicacao": "With FBM, shipping performance is yours and counts towards account health."
    },
    {
     "id": "1-5-q3",
     "tipo": "multipla",
     "enunciado": "What's one of the published requirements for Seller Fulfilled Prime?",
     "opcoes": [
      "Valid tracking on at least 99% of shipments",
      "Stock must be in an Amazon warehouse",
      "More than 10 registered trademarks",
      "Using FBA only"
     ],
     "correta": 0,
     "explicacao": "Valid tracking on at least 99%, on-time delivery of at least 90% and cancellations of up to 0.5%."
    },
    {
     "id": "1-5-q4",
     "tipo": "multipla",
     "enunciado": "For which kind of product does FBM usually make more sense?",
     "opcoes": [
      "Small, light and fast-moving",
      "Large, fragile, seasonal or slow-moving",
      "Always the cheapest",
      "Always the trademarked one"
     ],
     "correta": 1,
     "explicacao": "Bulky or slow-moving items can be expensive in Amazon's fulfilment; shipping yourself or through a provider can work out better."
    },
    {
     "id": "1-5-q5",
     "tipo": "ordenar",
     "enunciado": "Put the journey of an FBA order in order:",
     "opcoes": [
      "You send the stock to Amazon's warehouse",
      "The customer places the order",
      "Amazon packs and ships",
      "Amazon handles any return"
     ],
     "explicacao": "First the stock reaches the warehouse, then comes the order and the shipment. After-sales closes the loop."
    }
   ]
  },
  {
   "id": "1-6",
   "titulo": "The owner's team: what to delegate",
   "minutos": 5,
   "fontes": [
    "sell-es-vender-online"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "You're the owner, not the operator",
     "corpo": "Anyone with several companies knows it: the owner's job is to **decide, hold people to account and protect cash**. Amazon is no different. Almost everything can be done by partners, but **the decision and the responsibility stay with you**.\n\nAn Amazon business is, at heart, a small company with an outsourced team. This lesson builds the org chart."
    },
    {
     "tipo": "comparacao",
     "titulo": "Who does what",
     "rotuloLinhas": "Partner",
     "colunas": [
      "What they do",
      "When to hire"
     ],
     "linhas": [
      [
       "Gestoría",
       "Taxes, VAT, returns, registrations with Hacienda",
       "Before opening the seller account"
      ],
      [
       "Sourcing agent",
       "Finds factories, orders samples, negotiates, follows production",
       "When choosing the first product"
      ],
      [
       "Prep centre / logistics provider",
       "Receives, labels, packs and sends to the warehouse",
       "Before the first stock shipment"
      ],
      [
       "Designer and photographer",
       "Packaging, photos and page images",
       "Before launching the page"
      ],
      [
       "PPC manager",
       "Creates and optimises the ads",
       "After launch, with a set budget"
      ],
      [
       "Virtual assistant",
       "Repetitive tasks, spreadsheets, simple customer service",
       "When the weekly routine goes beyond a few hours"
      ]
     ],
     "termos": [
      "gestoria",
      "prep-center"
     ]
    },
    {
     "tipo": "alerta",
     "titulo": "Never share your main password",
     "corpo": "Give each person access through **their own user, with limited permissions**, and keep the main account and two-step verification **under your control**. That way, if a provider leaves, you revoke access without changing anything else."
    },
    {
     "tipo": "passos",
     "titulo": "What always stays with you",
     "itens": [
      "Choosing the product and supplier",
      "Approving the purchasing and ad budget",
      "Being the holder of the seller account, the bank account and the trademark",
      "Reading the weekly results dashboard (30 minutes)"
     ]
    },
    {
     "tipo": "delegar",
     "titulo": "Start lean",
     "corpo": "Don't hire six people in the first month. Start with **gestoría + sourcing agent**; add a prep centre when the first batch is on its way and a PPC manager when the page is ready. Pay per task or per project before signing long contracts."
    },
    {
     "tipo": "dica",
     "corpo": "Always ask for **written deliverables**: the gestoría's report, the prep centre's quote, the PPC manager's weekly report. An owner who reads reports doesn't need meetings."
    }
   ],
   "quiz": [
    {
     "id": "1-6-q1",
     "tipo": "multipla",
     "enunciado": "Who usually handles VAT and tax returns in Spain?",
     "opcoes": [
      "Sourcing agent",
      "Gestoría",
      "Photographer",
      "Prep centre"
     ],
     "correta": 1,
     "explicacao": "A gestoría is the firm specialising in the tax and accounting side of small businesses."
    },
    {
     "id": "1-6-q2",
     "tipo": "vf",
     "enunciado": "For your assistant to work in Seller Central, the safest option is to create a user with limited permissions.",
     "correta": true,
     "explicacao": "Separate users let you control and revoke access without exposing the main account."
    },
    {
     "id": "1-6-q3",
     "tipo": "multipla",
     "enunciado": "Which of these tasks should always stay with the owner?",
     "opcoes": [
      "Choosing the product and approving budgets",
      "Typing up the product description",
      "Sticking labels on boxes",
      "Answering simple emails"
     ],
     "correta": 0,
     "explicacao": "Product and money define the business's risk, which is why the decision is the owner's."
    },
    {
     "id": "1-6-q4",
     "tipo": "multipla",
     "enunciado": "What's the best hiring strategy at the start?",
     "opcoes": [
      "Hire the whole team in the first month",
      "Start lean (gestoría and sourcing) and add partners as the business grows",
      "Do everything yourself",
      "Only hire once revenue is high"
     ],
     "correta": 1,
     "explicacao": "Hire in stages: each partner comes in when there's a task for them."
    }
   ]
  }
 ]
};

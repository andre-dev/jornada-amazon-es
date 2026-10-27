// Mundo 5 (en). Gerado por tools/i18n-mundos.mjs a partir de js/content/world5.js.
export default {
 "id": 5,
 "chefe": {
  "id": "contador-voraz",
  "nome": "The Ravenous Accountant",
  "hp": 100,
  "fala": "Every cent you didn't count is mine. Show me your full calculation!",
  "derrota": "Not a single line slipped through. Your profit is real.",
  "perguntas": [
   {
    "id": "b5-1",
    "tipo": "multipla",
    "licaoRef": "5-1",
    "enunciado": "Which Amazon.es plan is recommended for more than 35 items a month, and how much does it cost excl. VAT?",
    "opcoes": [
     "Individual, €0.99 a month",
     "Professional, €39 a month",
     "Handmade, €5 a month",
     "Prime, €100 a month"
    ],
    "correta": 1,
    "explicacao": "Professional: €39 a month excl. VAT, on top of selling fees."
   },
   {
    "id": "b5-2",
    "tipo": "multipla",
    "licaoRef": "5-1",
    "enunciado": "In the Jewellery category (20% up to €250 and 5% above, per portion), what's the referral fee on a ring sold for €300?",
    "opcoes": [
     "15,00 €",
     "52,50 €",
     "60,00 €",
     "30,00 €"
    ],
    "correta": 1,
    "explicacao": "20% of 250 = 50.00 and 5% of the remaining 50 = 2.50, for a total of €52.50."
   },
   {
    "id": "b5-3",
    "tipo": "multipla",
    "licaoRef": "5-1",
    "enunciado": "In the Home category, what's the referral fee on a €24.90 item? (8% if the total price is up to €20, 15% above, on the whole item)",
    "opcoes": [
     "1,99 €",
     "3,74 €",
     "2,49 €",
     "4,98 €"
    ],
    "correta": 1,
    "explicacao": "Because the price is over €20, 15% applies to the whole amount: €3.74."
   },
   {
    "id": "b5-4",
    "tipo": "vf",
    "licaoRef": "5-1",
    "enunciado": "The referral fee is calculated on the total price the customer pays, including shipping and gift wrapping.",
    "correta": true,
    "explicacao": "The pricing page defines the total price as the buyer's full payment."
   },
   {
    "id": "b5-5",
    "tipo": "multipla",
    "licaoRef": "5-2",
    "enunciado": "What's the core difference between Pan-EU and EFN?",
    "opcoes": [
     "Pan-EU stores stock in more than one country and uses local fees; EFN ships from one country to customers in others, with its own fee",
     "There's no difference",
     "EFN is free",
     "Pan-EU only applies to the UK"
    ],
    "correta": 0,
    "explicacao": "With Pan-EU you pay local fees where stock is enabled and EFN in the other countries."
   },
   {
    "id": "b5-6",
    "tipo": "multipla",
    "licaoRef": "5-2",
    "enunciado": "What does storing stock in another EU country require, according to Amazon?",
    "opcoes": [
     "Nothing",
     "A VAT number in that country",
     "Just the EORI",
     "A physical shop"
    ],
    "correta": 1,
    "explicacao": "You need VAT registration in every country where you hold stock."
   },
   {
    "id": "b5-7",
    "tipo": "multipla",
    "licaoRef": "5-3",
    "enunciado": "Which cost do importers often forget?",
    "opcoes": [
     "The logo",
     "Inspection, prep centre, samples, testing, gestoría and insurance",
     "Office coffee",
     "The Seller Central password"
    ],
    "correta": 1,
    "explicacao": "These costs outside Amazon add up and must go into the numbers."
   },
   {
    "id": "b5-8",
    "tipo": "multipla",
    "licaoRef": "5-4",
    "enunciado": "Price €30.00 including 21% VAT. What's the revenue excl. VAT?",
    "opcoes": [
     "23,70 €",
     "24,79 €",
     "25,00 €",
     "30,00 €"
    ],
    "correta": 1,
    "explicacao": "30.00 ÷ 1.21 = €24.79."
   },
   {
    "id": "b5-9",
    "tipo": "multipla",
    "licaoRef": "5-4",
    "enunciado": "Revenue €24.79, referral fee €4.50, FBA €4.05, storage €0.12, cost €7.00, returns €0.80 and ads €3.00. What's the profit per unit?",
    "opcoes": [
     "5,32 €",
     "9,12 €",
     "7,42 €",
     "2,00 €"
    ],
    "correta": 0,
    "explicacao": "24,79 − 4,50 − 4,05 − 0,12 − 7,00 − 0,80 − 3,00 = 5,32 €."
   },
   {
    "id": "b5-10",
    "tipo": "multipla",
    "licaoRef": "5-4",
    "enunciado": "In the example above, what's the ROI on the €7.00 cost?",
    "opcoes": [
     "32%",
     "53%",
     "76%",
     "100%"
    ],
    "correta": 2,
    "explicacao": "5.32 ÷ 7.00 = 76%."
   },
   {
    "id": "b5-11",
    "tipo": "multipla",
    "licaoRef": "5-5",
    "enunciado": "According to Amazon.es, after the first payout, how often are payouts made?",
    "opcoes": [
     "Every day",
     "Every 7 days",
     "Every 90 days",
     "Once a year"
    ],
    "correta": 1,
    "explicacao": "The first payout comes 14 days after registration and then every 7 days."
   },
   {
    "id": "b5-12",
    "tipo": "multipla",
    "licaoRef": "5-5",
    "enunciado": "Which of these factors most increases the need for working capital?",
    "opcoes": [
     "Paying the factory, freight and import VAT before selling the first unit",
     "Having few variations",
     "Using the Individual plan",
     "Ordering a sample"
    ],
    "correta": 0,
    "explicacao": "Money goes out months before it comes back through sales."
   }
  ]
 },
 "licoes": [
  {
   "id": "5-1",
   "titulo": "The map of all the fees",
   "minutos": 8,
   "fontes": [
    "sell-es-precios",
    "amz-rate-card-es",
    "sell-es-bajo-precio"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "cidadela",
     "titulo": "Six places money leaks out",
     "corpo": "When someone says \"Amazon charges 15%\", they're only talking about **one** of the fees. The full map has:\n\n1. **Plan:** the monthly fee (or per-item fee)\n2. **Referral fee:** a percentage by category\n3. **FBA fulfilment:** a fixed amount per unit, by size and weight\n4. **Storage:** by volume and month\n5. **Surcharges and extra fees:** fuel, returns, aged stock\n6. **Advertising:** the ads you choose to buy\n\nAnd then there's everything **outside** Amazon (lesson 5-3)."
    },
    {
     "tipo": "comparacao",
     "titulo": "1. Plans (amounts excl. VAT)",
     "colunas": [
      "Individual",
      "Professional"
     ],
     "linhas": [
      [
       "Who it's for",
       "Fewer than 35 items a month",
       "More than 35 items a month"
      ],
      [
       "Fixed cost",
       "€0.99 per item sold",
       "€39 a month"
      ],
      [
       "Fees by category",
       "Yes",
       "Yes"
      ]
     ],
     "nota": "Source: Amazon.es pricing page."
    },
    {
     "tipo": "texto",
     "titulo": "2. Referral fee",
     "corpo": "It's a **percentage of the total price** (what the customer pays, including shipping and gift wrap), with a **minimum of €0.30 per item** in most categories. Examples from Amazon.es:\n\n- **Electronics and Computers:** 7%\n- **Kitchen, Toys, Sports:** 15%\n- **DIY and tools:** 13%\n- **Handmade:** 12%\n- **Home:** 8% up to €20 and 15% above\n- **Beauty and Baby:** 8% up to €10 and 15% above\n- **Clothing:** 5% up to €15, 10% from €15 to €20 and 15% above\n- **Jewellery:** 20% up to €250 and 5% above\n\nThe full list is in the Workshop. Some categories apply the tiers to the **whole item** (e.g. Home), and others to **the portion of the price** within each tier (e.g. Jewellery, Furniture and Automotive)."
    },
    {
     "tipo": "calculo",
     "titulo": "Per-item tier vs per-portion tier",
     "corpo": "Two real examples of the method:",
     "linhas": [
      [
       "Home at €24.90 (whole-item tier: 15% above €20)",
       "3,74 €"
      ],
      [
       "Home at €19.90 (whole-item tier: 8% up to €20)",
       "1,59 €"
      ],
      [
       "Jewellery at €300 (per portion: 20% of 250 + 5% of 50)",
       "52,50 €"
      ]
     ],
     "nota": "Home: 15% × 24.90 = 3.735, and 8% × 19.90 = 1.592. Jewellery: 50.00 + 2.50."
    },
    {
     "tipo": "texto",
     "titulo": "3. FBA fulfilment",
     "corpo": "It's a **fixed fee per unit**, based on **size and weight**. From Amazon.es's rate card (in force since 1/7/2026, local shipping):\n\n- **Light envelope ≤20 g:** €2.77 · **Standard envelope ≤460 g:** €3.45\n- **Small parcel ≤400 g:** €3.74 · **≤1.4 kg:** €4.21\n- **Standard parcel ≤900 g:** €3.99 · **≤11.9 kg:** €7.85\n- **Large and bulky** items: from €5.68 and rising per kilo\n\nA **1.5% fuel and logistics surcharge** applies on top (since 17/4/2026). **Lithium batteries or dangerous goods** pay €0.10 more per unit.",
     "termos": [
      "fba"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "The low-price programme",
     "corpo": "For **small, light and cheap** products, Amazon automatically applies reduced FBA fees: a price of up to **€20 incl. VAT** (since 5/1/2026, except some categories), **up to 35 × 25 × 12 cm and 400 g**. Examples: a light envelope ≤20 g pays €2.15 instead of €2.77, and a small parcel ≤400 g pays €3.46 instead of €3.74.\n\nAmazon's page has an FAQ that still says €12: **confirm the threshold in Seller Central**."
    },
    {
     "tipo": "texto",
     "titulo": "4 and 5. Storage and extras",
     "corpo": "**Monthly storage** (per m³, non-dangerous): general standard **€27.54** from January to September and **€52.20** from October to December. Clothing, eyewear, shoes and bags: **€19.99** and **€29.23**. Large: **€21.78** and **€34.49**.\n\nThere's also: an **aged inventory fee** (units stored for more than 241 days), a **storage utilisation fee** (if the ratio exceeds 22 weeks), a **low inventory level fee** in Pan-EU, a **refund administration fee** (the lower of €5 and 20% of the referral fee) and removal, disposal and labelling fees (amounts in Seller Central)."
    },
    {
     "tipo": "alerta",
     "corpo": "The rate card says figures change, and they **really do**: the 1.5% surcharge and the low-price threshold both changed in 2026 alone. The game's Workshop uses the table checked on **2026-10-26**: **always check the PDF and the official revenue calculator** before buying stock."
    }
   ],
   "quiz": [
    {
     "id": "5-1-q1",
     "tipo": "multipla",
     "enunciado": "How much does the Professional plan cost, excl. VAT?",
     "opcoes": [
      "€0.99 a month",
      "€25 a month",
      "€39 a month",
      "€99 a month"
     ],
     "correta": 2,
     "explicacao": "€39 a month excl. VAT, plus the selling fees."
    },
    {
     "id": "5-1-q2",
     "tipo": "multipla",
     "enunciado": "What's the referral fee on the Home item sold at €19.90?",
     "opcoes": [
      "1,59 €",
      "2,98 €",
      "3,00 €",
      "0,30 €"
     ],
     "correta": 0,
     "explicacao": "Total price up to €20: 8% of the whole item, or €1.59."
    },
    {
     "id": "5-1-q3",
     "tipo": "multipla",
     "enunciado": "On the rate card, what's the local FBA fee for a small parcel up to 400 g (before the 1.5% surcharge)?",
     "opcoes": [
      "2,15 €",
      "3,74 €",
      "5,50 €",
      "7,85 €"
     ],
     "correta": 1,
     "explicacao": "€3.74 in the standard table; €3.46 if eligible for low price."
    },
    {
     "id": "5-1-q4",
     "tipo": "vf",
     "enunciado": "The referral fee never has a minimum amount.",
     "correta": false,
     "explicacao": "In most categories the minimum is €0.30 per item (books, video games and grocery have no minimum)."
    },
    {
     "id": "5-1-q5",
     "tipo": "multipla",
     "enunciado": "After how many days in storage does the aged inventory fee kick in, according to the pricing page?",
     "opcoes": [
      "30",
      "90",
      "241",
      "500"
     ],
     "correta": 2,
     "explicacao": "Units stored for more than 241 days fall under the aged inventory fee."
    },
    {
     "id": "5-1-q6",
     "tipo": "multipla",
     "enunciado": "What's the general standard FBA storage rate (non-dangerous) from October to December, per m³?",
     "opcoes": [
      "19,99 €",
      "27,54 €",
      "52,20 €",
      "100 €"
     ],
     "correta": 2,
     "explicacao": "€52.20 from October to December (€27.54 from January to September)."
    }
   ]
  },
  {
   "id": "5-2",
   "titulo": "Stock only in Spain, EFN or Pan-EU",
   "minutos": 6,
   "fontes": [
    "sell-es-europa-fba",
    "amz-rate-card-es",
    "sell-es-iva"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Three ways to serve Europe",
     "corpo": "1. **Spain only:** stock stays in Spain and you sell to customers in Spain.\n2. **EFN** (European Fulfilment Network): stock sits in one country and Amazon **ships to customers in other countries**, charging an EFN fee.\n3. **Pan-EU:** you enable **stock in several countries**, Amazon distributes it, and you pay **local** fees where you have enabled stock.\n\nThe choice affects **fulfilment fees, VAT and delivery time**.",
     "termos": [
      "pan-eu"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "What Amazon says about Pan-EU",
     "corpo": "- Mandatory countries: **Germany, France, Italy, Spain and the Netherlands** (the latter from 3/9/2026). Also available: **Poland, Sweden, Belgium and Ireland** (Belgium becomes mandatory on 26/2/2027)\n- you must enable stock in **at least two countries** and use the **same SKU**\n- with Pan-EU, you pay **local** fees where stock is enabled, and **EFN** in the others\n- you need a **VAT number in every country** where you hold stock\n- Amazon says savings can reach **53%** compared with EFN (Amazon's own claim, depends on the case)"
    },
    {
     "tipo": "calculo",
     "titulo": "Comparing the FBA fee: local vs EFN",
     "corpo": "Fulfilment fee for a **small parcel up to 400 g**, in euros, before the 1.5% surcharge:",
     "linhas": [
      [
       "Local shipping (stock in the customer's country)",
       "3,74 €"
      ],
      [
       "EFN (CEP/IT/ES/FR column of the rate card)",
       "7,05 €"
      ],
      [
       "Difference per unit",
       "3,31 €"
      ]
     ],
     "nota": "The rate card has other EFN columns (Netherlands/Belgium, Sweden, Poland, UK) with different values. Check the column for your case."
    },
    {
     "tipo": "comparacao",
     "titulo": "When each option usually makes sense",
     "colunas": [
      "Spain only",
      "EFN",
      "Pan-EU"
     ],
     "linhas": [
      [
       "Tax complexity",
       "Lower",
       "Lower than Pan-EU (distance-sales VAT)",
       "Higher: VAT in every country with stock"
      ],
      [
       "FBA fee per unit",
       "Local",
       "Higher (EFN)",
       "Local in each country"
      ],
      [
       "Delivery time to customer",
       "Fast in Spain",
       "Slower abroad",
       "Fastest"
      ],
      [
       "To start with",
       "Ideal",
       "Test",
       "Only with volume and structure"
      ]
     ],
     "nota": "Qualitative chart."
    },
    {
     "tipo": "alerta",
     "titulo": "Other stock countries, other rules",
     "corpo": "Stock in another country requires **VAT registration there** and filings there. For sellers with no EU establishment, it may require a **fiscal representative** (sometimes with joint liability). That's for World 9: **don't start here**."
    },
    {
     "tipo": "delegar",
     "corpo": "**A gestoría experienced in international e-commerce** (or Amazon's VAT service): VAT registrations by country. **You:** decide on expansion with each country's margin already calculated."
    },
    {
     "tipo": "dica",
     "corpo": "For the first year: **Spain only**. Once the product sells steadily, test **EFN** in a neighbouring country before thinking about Pan-EU."
    }
   ],
   "quiz": [
    {
     "id": "5-2-q1",
     "tipo": "multipla",
     "enunciado": "What is EFN?",
     "opcoes": [
      "A network where stock sits in one country and Amazon delivers to customers in others, with its own fee",
      "A tax",
      "A registered trademark",
      "A type of ad"
     ],
     "correta": 0,
     "explicacao": "EFN ships from one country to customers in others, with its own fee."
    },
    {
     "id": "5-2-q2",
     "tipo": "multipla",
     "enunciado": "What does Amazon require to join Pan-EU?",
     "opcoes": [
      "Enabling stock in at least two countries, with the same SKU",
      "A single store",
      "Paying in pounds",
      "Having a physical shop"
     ],
     "correta": 0,
     "explicacao": "At least two countries and the same SKU."
    },
    {
     "id": "5-2-q3",
     "tipo": "multipla",
     "enunciado": "In the small parcel ≤400 g example, what's the fee difference between EFN and local shipping?",
     "opcoes": [
      "None",
      "3,31 €",
      "10 €",
      "0,31 €"
     ],
     "correta": 1,
     "explicacao": "7,05 − 3,74 = 3,31 €."
    },
    {
     "id": "5-2-q4",
     "tipo": "vf",
     "enunciado": "Stock in another EU country exempts you from VAT in that country.",
     "correta": false,
     "explicacao": "You need VAT registration in every country where you hold stock."
    },
    {
     "id": "5-2-q5",
     "tipo": "multipla",
     "enunciado": "What's the course's recommendation for the first year?",
     "opcoes": [
      "Spain only",
      "All 9 countries at once",
      "Pan-EU straight away",
      "EFN only"
     ],
     "correta": 0,
     "explicacao": "Master one store before opening others."
    }
   ]
  },
  {
   "id": "5-3",
   "titulo": "The costs outside Amazon",
   "minutos": 5,
   "fontes": [
    "aeat-iva-importacion",
    "sell-es-vender-online"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Amazon isn't the only one charging",
     "corpo": "Many people do the maths with Amazon's fees only and get a surprise at the end of the month. The costs **outside** Amazon can be as large as those inside. They break down into:\n\n- **To get the product:** factory, samples, inspection, testing, packaging\n- **To bring the product in:** freight, insurance, import duties, import VAT, clearance, inland transport\n- **To prepare the product:** prep centre, labels, boxes\n- **To run the business:** gestoría, bookkeeping, software, virtual assistant\n- **To protect the business:** trademark, insurance, test reports\n- **To sell:** photos, videos, copy, ads"
    },
    {
     "tipo": "comparacao",
     "titulo": "One-off vs recurring costs",
     "colunas": [
      "When it happens",
      "Examples"
     ],
     "linhas": [
      [
       "One-off (per product)",
       "At launch",
       "Samples, testing, photos, copy, packaging design, trademark registration"
      ],
      [
       "Per batch",
       "With every purchase",
       "Factory, inspection, freight, duties, import VAT, prep centre"
      ],
      [
       "Per unit sold",
       "With every sale",
       "Referral fee, FBA, storage, returns, ads"
      ],
      [
       "Fixed monthly",
       "Every month",
       "Professional plan, gestoría, tools"
      ]
     ],
     "nota": "We don't list amounts here because they vary a lot by product and supplier. Get quotes and put your own numbers into the Workshop."
    },
    {
     "tipo": "alerta",
     "titulo": "Import VAT: money that goes out before it comes back",
     "corpo": "Import VAT is paid at customs and, as a rule, **recovered** on your VAT return. But that's **months of cash** that must be available. If you don't have it, the batch is held. Talk to your gestoría to plan ahead."
    },
    {
     "tipo": "texto",
     "titulo": "Returns are a hidden cost",
     "corpo": "Every product sold has a **chance of being returned**. Some returns come back sellable; others become a loss. To estimate it, start with a conservative percentage in the Workshop and **adjust it with your real data** after the first months. Fashion and sized products tend to have more returns."
    },
    {
     "tipo": "delegar",
     "corpo": "**Gestoría:** checks whether any cost is deductible. **Assistant or accountant:** keeps a cost spreadsheet per batch. **You:** demand **every cost before approving the order**."
    },
    {
     "tipo": "dica",
     "corpo": "Keep a **\"real cost per unit\"** for each batch: add up everything you spent until the unit is in the warehouse and divide by the number of sellable units. That's the number that counts."
    }
   ],
   "quiz": [
    {
     "id": "5-3-q1",
     "tipo": "multipla",
     "enunciado": "What does \"real cost per unit\" mean?",
     "opcoes": [
      "Just the factory price",
      "Everything spent until the unit is in the warehouse, divided by the sellable units",
      "The selling price",
      "The referral fee"
     ],
     "correta": 1,
     "explicacao": "It's the full cost of getting the unit into the warehouse."
    },
    {
     "id": "5-3-q2",
     "tipo": "vf",
     "enunciado": "Only Amazon's fees matter in the margin calculation.",
     "correta": false,
     "explicacao": "Costs outside Amazon can be as large as those inside."
    },
    {
     "id": "5-3-q3",
     "tipo": "multipla",
     "enunciado": "What's the cash-flow risk of import VAT?",
     "opcoes": [
      "None",
      "It's paid before it's recovered, so it needs available capital",
      "It's never recovered",
      "The customer pays it"
     ],
     "correta": 1,
     "explicacao": "It's paid at customs and recovered later on the return."
    },
    {
     "id": "5-3-q4",
     "tipo": "multipla",
     "enunciado": "Which cost is one-off per product?",
     "opcoes": [
      "Referral fee",
      "Samples, photos and trademark registration",
      "Storage",
      "Monthly plan"
     ],
     "correta": 1,
     "explicacao": "Samples, photos and trademark registration happen at launch."
    }
   ]
  },
  {
   "id": "5-4",
   "titulo": "Doing the full calculation, step by step",
   "minutos": 8,
   "fontes": [
    "sell-es-precios",
    "amz-rate-card-es",
    "aeat-tipos-iva"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "The calculation that decides everything",
     "corpo": "This is the most important lesson in this world. You'll build **the unit calculation**, line by line, from the shop-window price to profit.\n\nThe order of the lines:\n\n1. Selling price (**incl. VAT**)\n2. Minus **VAT** → real revenue\n3. Minus Amazon's **referral fee**\n4. Minus FBA **fulfilment** (with the 1.5% surcharge)\n5. Minus **storage** per unit\n6. Minus **product cost** to the warehouse\n7. Minus **returns provision**\n8. Minus **ads** per unit\n9. = **Profit per unit**"
    },
    {
     "tipo": "calculo",
     "titulo": "Full example (hypothetical cost and ads)",
     "corpo": "A fictional **Sports and outdoors** product (15% referral fee), standard parcel of **900 g**, price **€30.00**:",
     "linhas": [
      [
       "Selling price (incl. VAT)",
       "30,00 €"
      ],
      [
       "Revenue excl. VAT (30.00 ÷ 1.21)",
       "24,79 €"
      ],
      [
       "− 15% referral fee on €30.00",
       "− 4,50 €"
      ],
      [
       "− Fulfilment (standard parcel ≤900 g, €3.99 + 1.5%)",
       "− 4,05 €"
      ],
      [
       "− Storage (assumption: 3 months)",
       "− 0,12 €"
      ],
      [
       "− Product cost in the warehouse (hypothetical)",
       "− 7,00 €"
      ],
      [
       "− Returns provision (assumption)",
       "− 0,80 €"
      ],
      [
       "− Ads per unit sold (assumption)",
       "− 3,00 €"
      ]
     ],
     "total": [
      "Profit per unit",
      "5,32 €"
     ],
     "nota": "Margin on revenue: 5.32 ÷ 24.79 = 21.5%. ROI on product cost: 5.32 ÷ 7.00 = 76%."
    },
    {
     "tipo": "texto",
     "titulo": "The three measures that matter",
     "corpo": "- **Margin:** profit ÷ revenue excl. VAT. It shows how much of each euro sold you keep.\n- **ROI:** profit ÷ product cost in the warehouse. It shows the return on the capital you put into stock.\n- **Break-even point:** the minimum price at which profit per unit is zero. Below it, every sale is a loss.\n\nThe game has a **Workshop** with calculators for all of this, so you don't have to redo the maths by hand."
    },
    {
     "tipo": "calculo",
     "titulo": "Sensitivity: what changes if...",
     "corpo": "Same example, changing one variable at a time:",
     "linhas": [
      [
       "Product cost rises from €7.00 to €8.00",
       "Profit €4.32"
      ],
      [
       "Ads rise from €3.00 to €4.50",
       "Profit €3.82"
      ],
      [
       "Returns rise from €0.80 to €2.00",
       "Profit €4.12"
      ],
      [
       "Price drops from €30.00 to €27.00",
       "Much lower profit"
      ]
     ],
     "nota": "Each line changes just one variable. The last one changes revenue, referral fee and VAT together: use the Workshop to see the exact amount."
    },
    {
     "tipo": "alerta",
     "titulo": "Questions the calculation must answer",
     "corpo": "- What if **freight costs double**?\n- What if ad **CPC** rises 30%?\n- What if **10% of the batch** becomes unusable returns?\n- What if the batch **takes 2 months longer** to sell?\n\nIf the product only makes a profit **when everything goes perfectly**, it's too risky."
    },
    {
     "tipo": "delegar",
     "corpo": "**Accountant/gestoría:** validates VAT and import costs. **Amazon:** the **official revenue calculator** gives the exact fees. **You:** use the Workshop to compare scenarios and decide."
    },
    {
     "tipo": "dica",
     "corpo": "Set a **minimum margin** before calculating any product (for example, \"I only go in if it's above X%\"). Deciding the bar in advance stops enthusiasm from tweaking the numbers."
    }
   ],
   "quiz": [
    {
     "id": "5-4-q1",
     "tipo": "multipla",
     "enunciado": "Price €36.30 including 21% VAT. What's the revenue excl. VAT?",
     "opcoes": [
      "28,68 €",
      "30,00 €",
      "31,00 €",
      "36,30 €"
     ],
     "correta": 1,
     "explicacao": "36.30 ÷ 1.21 = €30.00."
    },
    {
     "id": "5-4-q2",
     "tipo": "multipla",
     "enunciado": "Profit of €5.32 and cost of €7.00. What's the ROI?",
     "opcoes": [
      "32%",
      "53%",
      "76%",
      "100%"
     ],
     "correta": 2,
     "explicacao": "5.32 ÷ 7.00 = 0.76, or 76%."
    },
    {
     "id": "5-4-q3",
     "tipo": "multipla",
     "enunciado": "What's the FBA fee for a standard parcel ≤900 g with the 1.5% surcharge (€3.99 base)?",
     "opcoes": [
      "3,99 €",
      "4,05 €",
      "4,50 €",
      "5,00 €"
     ],
     "correta": 1,
     "explicacao": "3.99 × 1.015 = €4.05."
    },
    {
     "id": "5-4-q4",
     "tipo": "ordenar",
     "enunciado": "Put the calculation lines in order, from the start to profit:",
     "opcoes": [
      "Selling price incl. VAT",
      "Remove VAT to reach real revenue",
      "Subtract referral fee, FBA and storage",
      "Subtract product cost, returns and ads"
     ],
     "explicacao": "Price first, then VAT, Amazon's fees and finally the remaining costs."
    },
    {
     "id": "5-4-q5",
     "tipo": "vf",
     "enunciado": "A product that only makes a profit if everything goes perfectly is a good candidate.",
     "correta": false,
     "explicacao": "Without a safety margin, any variation becomes a loss."
    }
   ]
  },
  {
   "id": "5-5",
   "titulo": "Cash flow: when the money comes back",
   "minutos": 6,
   "fontes": [
    "sell-es-home",
    "sell-es-precios"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "Paper profit doesn't pay the factory",
     "corpo": "Plenty of people go bust with a profitable product. The reason is **cash flow**: money **goes out** months before it **comes back**. The gap between the two is the **working capital** you need to have.\n\nOn Amazon the rule is simple: **you pay first and get paid later**."
    },
    {
     "tipo": "fluxo",
     "titulo": "The money timeline",
     "etapas": [
      {
       "titulo": "Deposit to the factory",
       "texto": "Money out"
      },
      {
       "titulo": "Production and inspection",
       "texto": "Balance, inspection, testing"
      },
      {
       "titulo": "Freight and clearance",
       "texto": "Freight, duties and import VAT"
      },
      {
       "titulo": "Prep centre and shipping to FBA",
       "texto": "Labels and transport"
      },
      {
       "titulo": "Sales begin",
       "texto": "Ads consume cash"
      },
      {
       "titulo": "Amazon payouts",
       "texto": "Money back"
      }
     ]
    },
    {
     "tipo": "texto",
     "titulo": "When Amazon pays",
     "corpo": "Amazon.es's home page says the **first payout comes 14 days after registration** and then payouts happen **every 7 days**. Amazon may hold funds in certain situations (for example, account problems). Check current terms in Seller Central."
    },
    {
     "tipo": "calculo",
     "titulo": "Illustrative example of tied-up capital",
     "corpo": "A fictional batch of **1,000 units** costing **€7.00** per unit in the warehouse:",
     "linhas": [
      [
       "Factory (€6.00 per unit)",
       "6.000 €"
      ],
      [
       "Freight, duties and transport (assumption)",
       "700 €"
      ],
      [
       "Import VAT to recover (assumption, ~21% of €6,700)",
       "1.407 €"
      ],
      [
       "Inspection, prep centre and labels (assumption)",
       "300 €"
      ],
      [
       "First month's ads (assumption)",
       "500 €"
      ]
     ],
     "total": [
      "Cash needed before the first sales come back",
      "8.907 €"
     ],
     "nota": "All figures are assumptions. Import VAT is, as a rule, recoverable later: the money comes back, but it's tied up for months."
    },
    {
     "tipo": "alerta",
     "titulo": "Idle stock is a loss too",
     "corpo": "Every stored unit pays **storage**, which goes up from **October to December**. Units older than **241 days** incur the aged inventory fee. Don't buy ten months of stock in your first order."
    },
    {
     "tipo": "passos",
     "titulo": "Rules to protect your cash",
     "itens": [
      "Keep the first batch **small**",
      "Have a **reserve** for 2 to 3 months of operations",
      "Avoid mixing company cash with personal money",
      "**Reinvest gradually**: only increase the order once the previous one is selling",
      "Track **money in and out** every week"
     ]
    },
    {
     "tipo": "delegar",
     "corpo": "**Gestoría/accountant:** weekly reconciliation and VAT forecast. **Bank:** a separate business account. **You:** approve purchase orders. Anyone with several companies already knows: **one company's cash shouldn't prop up another without controls**."
    }
   ],
   "quiz": [
    {
     "id": "5-5-q1",
     "tipo": "multipla",
     "enunciado": "Why can a profitable product sink the business?",
     "opcoes": [
      "Because Amazon charges extra taxes",
      "Because money goes out months before it comes back",
      "Because profit doesn't exist",
      "Because the seller account expires"
     ],
     "correta": 1,
     "explicacao": "Capital is tied up between buying and getting paid."
    },
    {
     "id": "5-5-q2",
     "tipo": "multipla",
     "enunciado": "According to Amazon.es, payouts after the first one happen...",
     "opcoes": [
      "Every day",
      "Every 7 days",
      "Every 30 days",
      "Once a year"
     ],
     "correta": 1,
     "explicacao": "The first comes 14 days after registration and then every 7 days."
    },
    {
     "id": "5-5-q3",
     "tipo": "vf",
     "enunciado": "Buying 10 months of stock in your first order is the safest way to start.",
     "correta": false,
     "explicacao": "Large stock ties up cash and incurs storage and the aged inventory fee."
    },
    {
     "id": "5-5-q4",
     "tipo": "multipla",
     "enunciado": "What's the best rule for the first batch?",
     "opcoes": [
      "Small, one you'd be willing to lose",
      "As big as possible",
      "The same as the competitor's",
      "Any size"
     ],
     "correta": 0,
     "explicacao": "A small batch protects your cash and teaches you what the product is worth."
    }
   ]
  }
 ]
};

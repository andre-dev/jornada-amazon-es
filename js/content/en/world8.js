// Mundo 8 (en). Gerado por tools/i18n-mundos.mjs a partir de js/content/world8.js.
export default {
 "id": 8,
 "chefe": {
  "id": "auditor",
  "nome": "The Shadow Auditor",
  "hp": 100,
  "fala": "I see every delay, every claim, every idle unit of stock. Can your account survive an audit?",
  "derrota": "Nothing to flag. Your account is a model of discipline.",
  "perguntas": [
   {
    "id": "b8-1",
    "tipo": "multipla",
    "licaoRef": "8-1",
    "enunciado": "What ODR (Order Defect Rate) target does Amazon.es state?",
    "opcoes": [
     "Below 1%",
     "Below 10%",
     "Below 25%",
     "Above 50%"
    ],
    "correta": 0,
    "explicacao": "The target is an ODR below 1%."
   },
   {
    "id": "b8-2",
    "tipo": "multipla",
    "licaoRef": "8-1",
    "enunciado": "What goes into the ODR?",
    "opcoes": [
     "Negative feedback, A-to-z Guarantee claims and service chargebacks",
     "Only price",
     "Only stock",
     "Only VAT"
    ],
    "correta": 0,
    "explicacao": "An order counts once, even if it has more than one problem."
   },
   {
    "id": "b8-3",
    "tipo": "multipla",
    "licaoRef": "8-2",
    "enunciado": "Which three pieces of information did Amazon ask for in the plan of action, according to official replies?",
    "opcoes": [
     "Root cause, corrective actions and preventive measures",
     "Price, stock and VAT",
     "Name, address and phone",
     "Photo, video and audio"
    ],
    "correta": 0,
    "explicacao": "Detailed causes, what was done to fix it and what will be done to prevent a new violation."
   },
   {
    "id": "b8-4",
    "tipo": "vf",
    "licaoRef": "8-2",
    "enunciado": "Opening a second account to dodge a suspension is a good strategy.",
    "correta": false,
    "explicacao": "The industry rule of thumb is not to: it can make things worse. Follow the appeal process."
   },
   {
    "id": "b8-5",
    "tipo": "multipla",
    "licaoRef": "8-3",
    "enunciado": "How many days of stock does Amazon.es recommend holding to sell well?",
    "opcoes": [
     "Enough for 30 to 60 days of expected sales",
     "7 days",
     "365 days",
     "None"
    ],
    "correta": 0,
    "explicacao": "The inventory management page recommends covering 30 to 60 days."
   },
   {
    "id": "b8-6",
    "tipo": "multipla",
    "licaoRef": "8-3",
    "enunciado": "After how many days without selling does Amazon treat a product as excess?",
    "opcoes": [
     "30",
     "60",
     "90",
     "365"
    ],
    "correta": 2,
    "explicacao": "Inventory stored for more than 90 days without selling is treated as excess."
   },
   {
    "id": "b8-7",
    "tipo": "multipla",
    "licaoRef": "8-3",
    "enunciado": "Why avoid holding large stock in the last quarter of the year?",
    "opcoes": [
     "Standard FBA storage goes up from October to December",
     "Amazon closes",
     "There is no VAT",
     "The account gets suspended"
    ],
    "correta": 0,
    "explicacao": "General standard storage goes from €27.54 to €52.20 per m³ per month."
   },
   {
    "id": "b8-8",
    "tipo": "multipla",
    "licaoRef": "8-4",
    "enunciado": "What is the legal withdrawal period for online distance purchases in the EU?",
    "opcoes": [
     "14 days",
     "3 days",
     "6 months",
     "There isn't one"
    ],
    "correta": 0,
    "explicacao": "The consumer can withdraw within 14 days, without giving a reason, counted from delivery of the goods."
   },
   {
    "id": "b8-9",
    "tipo": "multipla",
    "licaoRef": "8-4",
    "enunciado": "What is the minimum legal guarantee for goods bought in the EU?",
    "opcoes": [
     "2 years from receipt of the goods",
     "30 days",
     "10 years",
     "There isn't one"
    ],
    "correta": 0,
    "explicacao": "The seller must repair, replace or refund defective goods, with a minimum 2-year guarantee."
   },
   {
    "id": "b8-10",
    "tipo": "multipla",
    "licaoRef": "8-5",
    "enunciado": "What is the goal of the 30-minute weekly routine?",
    "opcoes": [
     "See the key numbers and decide before problems grow",
     "Replace the accountant",
     "Avoid ads",
     "Hire staff"
    ],
    "correta": 0,
    "explicacao": "It is a short, regular review of account, stock, ads, cash and tax indicators."
   },
   {
    "id": "b8-11",
    "tipo": "multipla",
    "licaoRef": "8-5",
    "enunciado": "What is the deadline for the April quarterly Modelo 303?",
    "opcoes": [
     "By 20 April",
     "By 31 December",
     "By 1 June",
     "There is no deadline"
    ],
    "correta": 0,
    "explicacao": "Quarterly: 1–20 April, July and October, and 1–30 January."
   }
  ]
 },
 "licoes": [
  {
   "id": "8-1",
   "titulo": "Account health: the numbers that matter",
   "minutos": 7,
   "fontes": [
    "amz-rendimiento",
    "sell-es-sfp"
   ],
   "cards": [
    {
     "tipo": "texto",
     "arte": "montanha",
     "titulo": "Your account is your most fragile asset",
     "corpo": "The whole operation (products, ads, stock, brand) depends on **one active seller account**. If it is suspended, everything stops: sales and, in many cases, payouts.\n\nThat is why **account health** comes before growth. It is a routine, not an event."
    },
    {
     "tipo": "texto",
     "titulo": "The central number: ODR",
     "corpo": "The **ODR** (Order Defect Rate) is the percentage of orders that had:\n\n- **negative seller feedback** (1 or 2 stars)\n- an **A-to-z Guarantee claim**\n- a **service chargeback** on the credit card\n\nAn order counts only once, even if it has more than one problem. All claims count, **even those denied or withdrawn by the buyer**.\n\n**Target stated by Amazon.es: below 1%.**"
    },
    {
     "tipo": "calculo",
     "titulo": "Illustrative ODR example",
     "corpo": "In a fictional month:",
     "linhas": [
      [
       "Orders in the period",
       "400"
      ],
      [
       "With negative feedback",
       "2"
      ],
      [
       "With an A-to-z claim",
       "1"
      ],
      [
       "With a chargeback",
       "0"
      ],
      [
       "Defective orders (each counts once)",
       "3"
      ]
     ],
     "total": [
      "ODR (3 ÷ 400)",
      "0,75%"
     ],
     "nota": "Below 1%, within target. With few orders, a single problem weighs a lot: 1 in 100 is already 1%."
    },
    {
     "tipo": "texto",
     "titulo": "When the ODR is calculated",
     "corpo": "Amazon usually calculates the ODR from orders **more than 30 days** old (defects tend to show up weeks later). Waiting **90 days** gives a more accurate picture, but the dashboard may show data at 30 days.\n\nMissing the targets **does not necessarily harm the account**, but **failing to improve can affect it**. Accounts well below the thresholds **can be suspended or temporarily blocked**."
    },
    {
     "tipo": "texto",
     "titulo": "Other targets you will see",
     "corpo": "If you use **your own shipping or Seller Fulfilled Prime**, Amazon.es publishes even stricter targets: in the Seller Fulfilled Prime programme, for example, **90% on-time delivery**, **valid tracking on 99% of shipments** and **cancellations of at most 0.5%** (World 1).\n\nWith **FBA**, Amazon handles shipping and customer service for that order, but **the product and the listing are still yours**: negative feedback for defects or for \"not as described\" counts against you."
    },
    {
     "tipo": "alerta",
     "corpo": "The dashboard values (cancellation rates, late shipments, category targets) **change** and can vary. Use the **Account Health** dashboard in Seller Central as the current official source. What this course guarantees is the **discipline of checking it every week**."
    },
    {
     "tipo": "delegar",
     "corpo": "**Virtual assistant:** opens the Account Health dashboard every week and sends you a **one-line summary** per indicator. **You:** act at the first yellow sign, instead of waiting for red."
    },
    {
     "tipo": "dica",
     "corpo": "The best way to keep the ODR low is **prevention**: a listing true to the product, good packaging, clear instructions and fast service."
    }
   ],
   "quiz": [
    {
     "id": "8-1-q1",
     "tipo": "multipla",
     "enunciado": "What is the ODR target, according to Amazon.es?",
     "opcoes": [
      "Below 1%",
      "Below 15%",
      "Above 5%",
      "Any value"
     ],
     "correta": 0,
     "explicacao": "Below 1%."
    },
    {
     "id": "8-1-q2",
     "tipo": "multipla",
     "enunciado": "400 orders, 3 of them defective. What is the ODR?",
     "opcoes": [
      "0,075%",
      "0,75%",
      "7,5%",
      "75%"
     ],
     "correta": 1,
     "explicacao": "3 ÷ 400 = 0.75%."
    },
    {
     "id": "8-1-q3",
     "tipo": "vf",
     "enunciado": "A claim withdrawn by the buyer stops counting toward the ODR.",
     "correta": false,
     "explicacao": "All claims count, even those denied or withdrawn."
    },
    {
     "id": "8-1-q4",
     "tipo": "multipla",
     "enunciado": "The same order has negative feedback and an A-to-z claim. How many times does it count toward the ODR?",
     "opcoes": [
      "Once",
      "Twice",
      "Never",
      "Three times"
     ],
     "correta": 0,
     "explicacao": "An order counts only once."
    },
    {
     "id": "8-1-q5",
     "tipo": "multipla",
     "enunciado": "What is the best defence for keeping the ODR low?",
     "opcoes": [
      "Prevention: a faithful listing, good packaging and good service",
      "Ignoring it",
      "Deleting feedback",
      "Opening another account"
     ],
     "correta": 0,
     "explicacao": "Preventing is cheaper than correcting."
    }
   ]
  },
  {
   "id": "8-2",
   "titulo": "Suspensions, plan of action and appeal",
   "minutos": 7,
   "fontes": [
    "sc-es-plan-accion",
    "amz-rendimiento",
    "sc-es-restringidos"
   ],
   "cards": [
    {
     "tipo": "texto",
     "titulo": "If it happens, don't panic",
     "corpo": "A **suspension** (or deactivation) can come from poor performance, a policy violation (restricted product, intellectual property, review manipulation), a pending verification or missing documents. There is almost always **a way to respond**, and how you respond decides the outcome."
    },
    {
     "tipo": "passos",
     "titulo": "What to do, in order",
     "itens": [
      "**Read the whole notification** and the exact reason",
      "**Don't reply in the heat of the moment**: understand the real cause",
      "**Freeze** whatever caused the problem (remove the offer, stop the shipment)",
      "Write the **plan of action** (see below)",
      "Submit it with the **appeal button** on the Account Health page",
      "Follow the response and **answer additional requests quickly**"
     ]
    },
    {
     "tipo": "texto",
     "titulo": "The plan of action: three blocks",
     "corpo": "In official Amazon replies on the forum, when a plan was rejected for lack of information, it asked for these three elements:\n\n1. **Root cause:** detailed information on **why** the violation happened\n2. **Corrective actions:** what **has been done** to fix it\n3. **Preventive measures:** what **will be done** so it does not happen again\n\nOne official reply recommended submitting the plan **with the appeal button** on the \"Account Health\" page and using the **\"Call me now\"** button for extra help. Accounts of **timelines** vary a lot, and **no official reply** gives a deadline.",
     "termos": []
    },
    {
     "tipo": "comparacao",
     "titulo": "Strong plan vs. weak plan",
     "colunas": [
      "Weak",
      "Strong"
     ],
     "linhas": [
      [
       "Cause",
       "It was a mistake, sorry",
       "Precise description of what happened, with dates and affected products"
      ],
      [
       "Action",
       "I've already fixed it",
       "List of what was done: offers removed, supplier changed, text corrected, with evidence"
      ],
      [
       "Prevention",
       "It won't happen again",
       "New routine: who checks what, when and with which checklist"
      ],
      [
       "Tone",
       "Defensive or emotional",
       "Objective, in bullet points, taking responsibility"
      ]
     ],
     "nota": "Best-practice structure based on the three elements Amazon asked for."
    },
    {
     "tipo": "alerta",
     "titulo": "What NOT to do",
     "corpo": "- **Open another account** to escape (rule of thumb: it usually makes things worse; follow the appeal)\n- **Lie** or attach fake documents\n- **Send the same text several times** in a threatening tone\n- **Hire \"specialists\"** who promise guaranteed reinstatement\n- Wait and do nothing"
    },
    {
     "tipo": "delegar",
     "corpo": "**Suspension consultant/agency:** can help write the plan, but **be wary of guarantees**. **Lawyer:** for debt or held balances. **You:** know the operation and sign the explanation."
    },
    {
     "tipo": "dica",
     "corpo": "Keep **an evidence file** from day one: supplier invoices, product certificates, packaging photos and settings screenshots. If you ever need to appeal, you'll already have everything."
    }
   ],
   "quiz": [
    {
     "id": "8-2-q1",
     "tipo": "multipla",
     "enunciado": "What are the three blocks of the plan of action Amazon asked for?",
     "opcoes": [
      "Root cause, corrective actions and preventive measures",
      "Price, stock and VAT",
      "Photos, videos and audio",
      "Name, email and phone"
     ],
     "correta": 0,
     "explicacao": "Cause, what was done and what will be done to prevent it."
    },
    {
     "id": "8-2-q2",
     "tipo": "vf",
     "enunciado": "Opening a second account is a good way to resolve a suspension.",
     "correta": false,
     "explicacao": "It usually makes things worse. Follow the appeal process."
    },
    {
     "id": "8-2-q3",
     "tipo": "multipla",
     "enunciado": "Where should you submit the plan, according to an official forum reply?",
     "opcoes": [
      "With the appeal button on the Account Health page",
      "On social media",
      "By post",
      "Nowhere"
     ],
     "correta": 0,
     "explicacao": "With the appeal button, and the \"Call me now\" button for extra help."
    },
    {
     "id": "8-2-q4",
     "tipo": "multipla",
     "enunciado": "What should you have ready from day one for a possible appeal?",
     "opcoes": [
      "An evidence file: invoices, certificates, photos and screenshots",
      "Nothing",
      "Just the password",
      "A backup account"
     ],
     "correta": 0,
     "explicacao": "Organised evidence speeds up and strengthens the appeal."
    },
    {
     "id": "8-2-q5",
     "tipo": "multipla",
     "enunciado": "What should you be wary of in reinstatement services?",
     "opcoes": [
      "Promises of guaranteed reinstatement",
      "A written quote",
      "Verifiable references",
      "A clear contract"
     ],
     "correta": 0,
     "explicacao": "No one but Amazon can guarantee reinstatement."
    }
   ]
  },
  {
   "id": "8-3",
   "titulo": "Inventory management and the year's peaks",
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
     "titulo": "Too much stock sinks your cash; too little loses sales",
     "corpo": "Managing stock means finding the point between two mistakes:\n\n- **Running out:** you lose sales, lose ranking and frustrate customers\n- **Overstock (excess):** you pay storage, tie up cash and end up liquidating\n\nAmazon.es recommends holding stock to cover **30 to 60 days** of expected sales."
    },
    {
     "tipo": "passos",
     "titulo": "The replenishment cycle",
     "itens": [
      "**Measure** average sales per day",
      "**Add up the lead time**: production, freight, customs, shipping to FBA and receiving",
      "**Order** when remaining stock covers only the lead time **plus a buffer**",
      "**Check** receiving and labels",
      "**Repeat**, adjusting for seasonality"
     ]
    },
    {
     "tipo": "calculo",
     "titulo": "Stock coverage example",
     "corpo": "Fictional product:",
     "linhas": [
      [
       "Average sales",
       "20 units per day"
      ],
      [
       "Total lead time (from production to receiving)",
       "70 days"
      ],
      [
       "Safety buffer",
       "15 days"
      ],
      [
       "Stock needed to cover lead time and buffer (20 × 85)",
       "1,700 units"
      ]
     ],
     "total": [
      "Reorder point: order when there are",
      "1,700 units"
     ],
     "nota": "Hypothetical values. What matters is the logic: the longer the lead time, the earlier you must order. In practice, Amazon's tools and seasonal forecasting adjust it."
    },
    {
     "tipo": "texto",
     "titulo": "Official inventory tools",
     "corpo": "Amazon.es lists these tools in Seller Central:\n\n- **Restock Inventory:** shows products that may run out in the next **28 days**\n- **Inventory dashboard** and **excess inventory management**\n- **Inventory Age:** how long stock has been in the warehouses\n- **Inventory Performance Index:** rates health as **Excellent, Good, Fair or Poor**\n\nAmazon treats a product unsold for more than **90 days** as **excess**, and gives **6 weeks'** notice before clearing inventory."
    },
    {
     "tipo": "texto",
     "titulo": "Capacity and storage limits",
     "corpo": "Since 2023, the capacity limit is **monthly per storage type**, announced in the **third full week** of each month, and takes into account the **Inventory Performance Index**, **sales forecasts** and **receiving time**. Exceeding the limit triggers an overage fee. Check the **Capacity Monitor** dashboard.\n\nGeneral standard FBA storage costs **€27.54/m³ per month** from January to September and **€52.20/m³** from October to December. Stock older than **241 days** is charged the aged inventory surcharge."
    },
    {
     "tipo": "alerta",
     "titulo": "The year's peaks",
     "corpo": "For sellers in Spain, the peaks include **Prime Day**, **Black Friday and Cyber Monday**, **Christmas** and the **Mother's and Father's Day campaigns**. To be ready:\n\n- send stock to FBA **early** (receiving can take time)\n- **don't leave** stock stuck after the peak: storage goes up from October to December\n- **adjust the ad budget**, because cost per click tends to rise\n- **check the ODR** beforehand"
    },
    {
     "tipo": "delegar",
     "corpo": "**Assistant or inventory manager:** coverage sheet per product and reorder alerts. **Prep center/freight forwarder:** warehouse delivery slot. **You:** approve the reorder."
    },
    {
     "tipo": "dica",
     "corpo": "For your first product, calculate the **reorder point** before the first batch and **write down the date** you'll order the second one. Whoever waits for stock to run out has already missed the lead time."
    }
   ],
   "quiz": [
    {
     "id": "8-3-q1",
     "tipo": "multipla",
     "enunciado": "How many days of sales does Amazon.es recommend holding in stock?",
     "opcoes": [
      "30 to 60 days",
      "1 day",
      "300 days",
      "None"
     ],
     "correta": 0,
     "explicacao": "The inventory management page recommends 30 to 60 days."
    },
    {
     "id": "8-3-q2",
     "tipo": "multipla",
     "enunciado": "Sales of 20 per day, a 70-day lead time and a 15-day buffer. What is the reorder point?",
     "opcoes": [
      "1,400 units",
      "1,700 units",
      "2,000 units",
      "850 units"
     ],
     "correta": 1,
     "explicacao": "20 × (70 + 15) = 1,700 units."
    },
    {
     "id": "8-3-q3",
     "tipo": "multipla",
     "enunciado": "After how many days without selling is a product treated as excess?",
     "opcoes": [
      "30",
      "60",
      "90",
      "365"
     ],
     "correta": 2,
     "explicacao": "More than 90 days stored without selling."
    },
    {
     "id": "8-3-q4",
     "tipo": "vf",
     "enunciado": "Storing a lot of stock never costs anything.",
     "correta": false,
     "explicacao": "There is storage per m³, an aged inventory surcharge, an overage fee and tied-up cash."
    },
    {
     "id": "8-3-q5",
     "tipo": "multipla",
     "enunciado": "Which tool shows products that may run out in the next 28 days?",
     "opcoes": [
      "Restock Inventory",
      "Brand Analytics",
      "Amazon Attribution",
      "Vine"
     ],
     "correta": 0,
     "explicacao": "The Restock Inventory tool projects stock-out risk."
    }
   ]
  },
  {
   "id": "8-4",
   "titulo": "Customer service and returns",
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
     "titulo": "Returns are part of the game",
     "corpo": "Every seller has returns. What separates a healthy business from a troubled one is **how many**, **why** and **how you react**. With FBA, Amazon receives the return and handles the customer, but **the costs and consequences are yours**."
    },
    {
     "tipo": "texto",
     "titulo": "The deadlines you need to know",
     "corpo": "- **Right of withdrawal (EU law):** for online purchases, the consumer can withdraw within **14 days**, without giving reasons, counted from **delivery** of the goods. There are exceptions (personalised goods, perishables, opened sealed products, etc.).\n- **Legal guarantee:** goods that are defective or not as advertised entitle the buyer to **repair, replacement or refund**, with a minimum guarantee of **2 years**; a defect appearing within **1 year** is presumed to have existed at delivery (2 years in some countries).\n- **Amazon policy:** an official forum reply says it allows returns **up to 30 days from receipt**, and that Amazon's general terms **take precedence** over the seller's policy. Confirm current rules in Seller Central.",
     "termos": []
    },
    {
     "tipo": "alerta",
     "titulo": "Consumer vs. business buyers",
     "corpo": "These rights apply to **consumer purchases from businesses**. As a professional seller, **that's you**. Don't try to \"limit\" Amazon's deadlines: the general terms take precedence."
    },
    {
     "tipo": "passos",
     "titulo": "How to reduce returns",
     "itens": [
      "**Faithful listing**: real dimensions, colours and materials",
      "**Clear instructions** for use and assembly",
      "**Sturdy packaging** for transport",
      "**Quality control** before shipment (World 4)",
      "**Read the return reasons** in Seller Central and fix the cause",
      "**Reply quickly** to customer messages"
     ]
    },
    {
     "tipo": "calculo",
     "titulo": "Illustrative example: the cost of a return",
     "corpo": "A fictional €30.00 product that is returned and cannot be resold as new:",
     "linhas": [
      [
       "Refund to the customer",
       "30,00 €"
      ],
      [
       "Cost of the lost product (hypothetical)",
       "7,00 €"
      ],
      [
       "Fees that may not be refunded (minimum referral fee, logistics)",
       "variable"
      ]
     ],
     "total": [
      "Estimated loss from an unsellable return",
      "≈ €7.00 or more, not counting the revenue"
     ],
     "nota": "Each category and situation changes the calculation. Use the return rate in the Workshop."
    },
    {
     "tipo": "delegar",
     "corpo": "**Customer service assistant (in Spanish):** answers messages with templates you've approved. **Prep center:** inspects returns and repackages them when possible. **You:** review the return **reasons** every month and decide on changes."
    },
    {
     "tipo": "dica",
     "corpo": "A simple monthly report with the **top three** return reasons and one **action** for each already reduces the problem."
    }
   ],
   "quiz": [
    {
     "id": "8-4-q1",
     "tipo": "multipla",
     "enunciado": "What is the legal withdrawal period for online purchases in the EU?",
     "opcoes": [
      "14 days",
      "2 days",
      "60 days",
      "There isn't one"
     ],
     "correta": 0,
     "explicacao": "14 days, without giving a reason, from delivery of the goods."
    },
    {
     "id": "8-4-q2",
     "tipo": "multipla",
     "enunciado": "What is the minimum legal guarantee for goods in the EU?",
     "opcoes": [
      "2 years",
      "30 days",
      "6 months",
      "There isn't one"
     ],
     "correta": 0,
     "explicacao": "A minimum of 2 years from receipt of the goods."
    },
    {
     "id": "8-4-q3",
     "tipo": "vf",
     "enunciado": "The seller can freely shorten Amazon's return period to 7 days.",
     "correta": false,
     "explicacao": "Amazon's general terms take precedence over the seller's policy."
    },
    {
     "id": "8-4-q4",
     "tipo": "multipla",
     "enunciado": "What is the best way to reduce returns?",
     "opcoes": [
      "Faithful listing, good instructions, sturdy packaging and quality control",
      "Hiding the product",
      "Raising the price for no reason",
      "Ignoring the problem"
     ],
     "correta": 0,
     "explicacao": "Tackling the cause is cheaper than absorbing the cost."
    },
    {
     "id": "8-4-q5",
     "tipo": "multipla",
     "enunciado": "According to the official forum reply, up to how many days from receipt does Amazon allow a return when the buyer is not satisfied?",
     "opcoes": [
      "30 days",
      "3 days",
      "1 year",
      "None"
     ],
     "correta": 0,
     "explicacao": "Up to 30 days, and Amazon's general terms take precedence."
    }
   ]
  },
  {
   "id": "8-5",
   "titulo": "The owner's 30-minute weekly routine",
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
     "titulo": "You don't operate, you oversee",
     "corpo": "An owner of several businesses knows attention is the scarcest resource. The **30-minute** weekly routine is for seeing what's **essential**, deciding and getting back to your life. The rest is the team's job."
    },
    {
     "tipo": "passos",
     "titulo": "The weekly script (30 minutes)",
     "itens": [
      "**Account health (3 min):** ODR, alerts, anything yellow or red",
      "**Sales and margin (5 min):** units, revenue, profit per unit vs. plan",
      "**Stock (5 min):** days of coverage per product and lead time",
      "**Ads (5 min):** spend, ACoS and TACoS vs. target (manager's report)",
      "**Reviews and messages (4 min):** average rating, new reviews, unanswered messages",
      "**Cash (4 min):** balance, upcoming factory, freight and tax payments",
      "**This week's decisions (4 min):** what to restock, adjust, pause, ask"
     ]
    },
    {
     "tipo": "calculo",
     "titulo": "Weekly scorecard: a simple template",
     "corpo": "Fill in one line per product (fictional values):",
     "linhas": [
      [
       "ODR",
       "0.8% (target below 1%)"
      ],
      [
       "Days of stock coverage",
       "42 days (target 30 to 60)"
      ],
      [
       "ACoS and TACoS",
       "24% and 9% (targets 28% and 10%)"
      ],
      [
       "Average rating and new reviews",
       "4.4 stars, 6 new"
      ],
      [
       "Available cash",
       "Covers 10 weeks of expenses"
      ]
     ],
     "nota": "The targets are examples. Set your own using the margin calculation from World 5."
    },
    {
     "tipo": "texto",
     "titulo": "Tax calendar you can't forget",
     "corpo": "- **Modelo 303 (VAT) quarterly:** 1–20 April, July and October, and 1–30 January\n- **Modelo 390 (annual summary):** handled by the accountant\n- **Quarterly OSS**, if you're registered\n- **Renewals** of trademarks (every 10 years), certificates and conformity documents\n\nAsk your accountant for a **written calendar** with the dates and what they need from you."
    },
    {
     "tipo": "delegar",
     "titulo": "The team behind the 30 minutes",
     "corpo": "**Virtual assistant:** prepares the scorecard every Monday morning. **PPC manager:** weekly report. **Accountant:** tax calendar and reminders. **You:** a short meeting with the numbers in hand. If the scorecard is green, **you finish early**."
    },
    {
     "tipo": "alerta",
     "corpo": "The routine only works if it's **always the same day and time**. One skipped week becomes a skipped month, and a small problem becomes a big one."
    },
    {
     "tipo": "dica",
     "corpo": "Decide **in advance** what triggers an action: for example, an ODR above 0.8%, stock coverage below 35 days, or ACoS above target for two weeks. Written triggers take the emotion out of the decision."
    }
   ],
   "quiz": [
    {
     "id": "8-5-q1",
     "tipo": "multipla",
     "enunciado": "What is the goal of the 30-minute routine?",
     "opcoes": [
      "See the key numbers and decide early",
      "Run everything yourself",
      "Replace the team",
      "Avoid taxes"
     ],
     "correta": 0,
     "explicacao": "It's a short, regular review so you decide before problems grow."
    },
    {
     "id": "8-5-q2",
     "tipo": "multipla",
     "enunciado": "What is the deadline for the July Modelo 303?",
     "opcoes": [
      "By 20 July",
      "By 31 December",
      "By 1 August",
      "There is no deadline"
     ],
     "correta": 0,
     "explicacao": "Quarterly: 1–20 April, July and October; 1–30 January."
    },
    {
     "id": "8-5-q3",
     "tipo": "vf",
     "enunciado": "The routine works best if you do it whenever you have time.",
     "correta": false,
     "explicacao": "It only works with a fixed day and time."
    },
    {
     "id": "8-5-q4",
     "tipo": "multipla",
     "enunciado": "What are action triggers?",
     "opcoes": [
      "Written rules that trigger a decision (e.g. coverage below 35 days)",
      "Machine parts",
      "A type of ad",
      "A tax"
     ],
     "correta": 0,
     "explicacao": "Written triggers take the emotion out of the decision."
    },
    {
     "id": "8-5-q5",
     "tipo": "multipla",
     "enunciado": "Who prepares the weekly scorecard?",
     "opcoes": [
      "The assistant, and you read it",
      "No one",
      "The customer",
      "The factory"
     ],
     "correta": 0,
     "explicacao": "Delegate the preparation, and the decision stays with you."
    }
   ]
  }
 ]
};

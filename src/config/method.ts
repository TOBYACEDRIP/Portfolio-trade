/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  THE TOBYACE METHOD™ — content
 * ─────────────────────────────────────────────────────────────────────────────
 *  Framework: Top-Down Analysis + POI Logic + Entry Model + Refinements.
 *  Written as education, not as a promise of results. Edit freely.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type MethodPillar = {
  step: string;
  title: string;
  question: string;
  summary: string;
  points: string[];
};

export const methodIntro = {
  name: "The TOBYACE Method™",
  formula: ["Top-Down Analysis", "POI Logic", "Entry Model", "Refinements"],
  lede:
    "A structured way of reading price. It doesn't predict the market — it gives every decision a reason, a location and a defined risk.",
  body: [
    "Most inconsistency in trading comes from a lack of process, not a lack of indicators. The TOBYACE Method is the framework I use to keep my analysis repeatable: start with the bigger picture, narrow down to the areas that matter, wait for price to confirm, and only then refine the execution.",
    "Each stage answers one question. If a stage can't be answered clearly, there is no trade — and that is a valid outcome.",
  ],
};

export const methodPillars: MethodPillar[] = [
  {
    step: "01",
    title: "Top-Down Analysis",
    question: "Where is price most likely being delivered?",
    summary:
      "Direction comes from the higher timeframes. I read the weekly, daily and four-hour charts to establish structure and identify which liquidity pools price is drawn towards.",
    points: [
      "Establish higher-timeframe market structure and the current dealing range.",
      "Identify resting liquidity — old highs, old lows, equal highs and lows.",
      "Form a directional bias, then hold it loosely until price confirms it.",
    ],
  },
  {
    step: "02",
    title: "POI Logic",
    question: "Where does it make sense to look for a trade?",
    summary:
      "A Point of Interest is an area where price has a structural reason to react. Not every level qualifies — a POI needs context, a liquidity story and alignment with the higher-timeframe bias.",
    points: [
      "Map order blocks, fair value gaps and breakers inside the dealing range.",
      "Prefer POIs in discount for longs and premium for shorts.",
      "Ask what liquidity has been taken — and what is still resting — before price reaches the POI.",
    ],
  },
  {
    step: "03",
    title: "Entry Model",
    question: "Has price confirmed the idea?",
    summary:
      "Reaching a POI isn't a signal. The entry model waits for the lower timeframe to show intent: a sweep of liquidity, a shift in structure and displacement away from the area.",
    points: [
      "Look for a liquidity sweep into the POI.",
      "Wait for a Market Structure Shift or Change in State of Delivery.",
      "Enter on the retracement into the imbalance or order block left by displacement.",
    ],
  },
  {
    step: "04",
    title: "Refinements",
    question: "How do I execute with precision and protect capital?",
    summary:
      "Refinements are the details that turn a valid idea into a well-managed position: timing, risk placement, targets and the discipline to do nothing when conditions aren't met.",
    points: [
      "Define invalidation before entry and size the position from it.",
      "Target opposing liquidity, and manage the trade at logical structure.",
      "Filter by session timing and news; journal every outcome.",
    ],
  },
];

export type MethodConcept = {
  term: string;
  group: "Structure" | "Liquidity" | "Arrays" | "Confirmation" | "Discipline";
  definition: string;
};

export const methodConcepts: MethodConcept[] = [
  {
    term: "Market Structure",
    group: "Structure",
    definition:
      "The sequence of highs and lows that describes how price is being delivered. Higher highs and higher lows describe bullish order flow; lower lows and lower highs describe bearish order flow. Structure is the first filter for everything else.",
  },
  {
    term: "Higher-Timeframe Direction",
    group: "Structure",
    definition:
      "The bias formed on the weekly, daily and four-hour charts. Lower-timeframe setups are only taken when they align with where the higher timeframe is likely to deliver price.",
  },
  {
    term: "Liquidity",
    group: "Liquidity",
    definition:
      "Clusters of resting orders — typically stop-losses and pending orders above old highs and below old lows. Price tends to seek liquidity, so identifying where it rests helps frame both entries and targets.",
  },
  {
    term: "Liquidity Sweep",
    group: "Liquidity",
    definition:
      "A move that runs through a pool of liquidity and then fails to continue. A sweep into a valid POI is often the first sign that the opposing side is taking control.",
  },
  {
    term: "Points of Interest (POI)",
    group: "Arrays",
    definition:
      "Areas where price has a structural reason to react: order blocks, fair value gaps, breakers and similar arrays. A POI only matters in context — location in the range and the liquidity around it.",
  },
  {
    term: "Order Block",
    group: "Arrays",
    definition:
      "The last opposing candle (or series of candles) before a displacive move that breaks structure. It marks where significant orders were placed and often acts as an area of reaction on a return.",
  },
  {
    term: "Fair Value Gap",
    group: "Arrays",
    definition:
      "A three-candle imbalance where price moved so efficiently that the wicks of the first and third candles don't overlap. These gaps are frequently revisited and can act as entry areas.",
  },
  {
    term: "Breaker",
    group: "Arrays",
    definition:
      "An order block that failed — price traded through it after a liquidity sweep. The failed block can then act as support or resistance from the other side.",
  },
  {
    term: "Market Structure Shift (MSS)",
    group: "Confirmation",
    definition:
      "A break of the most recent swing point against the prevailing short-term direction, ideally with displacement. It is evidence — not proof — that order flow is changing.",
  },
  {
    term: "Change in State of Delivery (CISD)",
    group: "Confirmation",
    definition:
      "The moment price stops delivering in one direction and begins delivering in the other, often seen as a close through the opening of the series of candles that created the last move.",
  },
  {
    term: "Displacement",
    group: "Confirmation",
    definition:
      "A strong, decisive move that leaves imbalance behind it. Displacement shows intent, and the gaps it creates become the areas to refine entries from.",
  },
  {
    term: "Risk Management",
    group: "Discipline",
    definition:
      "Defined risk on every position, sized from invalidation — never from the outcome you hope for. Survival comes first; consistency follows from it.",
  },
  {
    term: "Trading Psychology",
    group: "Discipline",
    definition:
      "Executing the plan when it is uncomfortable and sitting out when there is no setup. Most mistakes are behavioural, so the process is built to reduce discretion where discretion hurts.",
  },
];

export const methodPrinciples = [
  {
    title: "Process over prediction",
    body: "The goal isn't to be right about the next candle. It's to take trades that fit a defined process, with risk that is known in advance.",
  },
  {
    title: "No setup is a position",
    body: "Sitting on your hands is part of the method. Forcing trades in conditions that don't qualify is the fastest way to give back progress.",
  },
  {
    title: "Losses are part of the model",
    body: "No framework wins every trade. The method is designed so that losses are controlled, expected and survivable.",
  },
];

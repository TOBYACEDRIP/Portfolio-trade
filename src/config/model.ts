/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  THE TOBYACE MODEL™ — content
 * ─────────────────────────────────────────────────────────────────────────────
 *  TOP-DOWN ANALYSIS + POI LOGIC + ENTRY MODEL + REFINEMENTS,
 *  with Market Narrative as the reasoning layer over all four.
 *  Educational content — describes a process, never a promised outcome.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const modelName = "The TOBYACE Model™";

export const modelFormula = ["Top-Down Analysis", "POI Logic", "Entry Model", "Refinements"] as const;

export const modelIntro = {
  statement: "Structure gives context. Liquidity gives direction. Confirmation defines execution.",
  lede:
    "A structured analytical and execution framework. Four pillars, connected by one reasoning process — so that every trade idea has an explanation before execution is ever considered.",
};

/* ── MARKET NARRATIVE ─────────────────────────────────────────────────────── */

export type NarrativeStep = {
  id: "where" | "happened" | "draw" | "confirm";
  number: string;
  question: string;
  short: string;
  purpose: string;
  body: string;
  topics: string[];
};

export const narrativeIntro = {
  title: "Market Narrative",
  principle: "Where are we in price, and where are we likely drawing into?",
  body: [
    "Market Narrative is the reasoning layer behind the entire model. Before looking for an entry, the analysis has to explain the sequence of price delivery: where the market is, what brought it there, and what its next logical objective is.",
    "A narrative is a hypothesis, not a position. It becomes a trade only when price confirms it — and it is abandoned the moment price invalidates it.",
  ],
};

export const narrativeSteps: NarrativeStep[] = [
  {
    id: "where",
    number: "01",
    question: "Where are we in price?",
    short: "Establish context",
    purpose: "Establish market context.",
    body:
      "Start with location. Read the higher-timeframe condition and daily bias, frame the H4 swing structure, define the current dealing range and decide whether price is trading at a premium or a discount — and how it sits relative to the POIs that matter.",
    topics: [
      "Higher-timeframe market condition",
      "Daily directional bias",
      "H4 swing structure",
      "Current dealing range",
      "Premium and discount",
      "Relevant swing highs and lows",
      "Internal range liquidity",
      "External range liquidity",
      "Position relative to key POIs",
    ],
  },
  {
    id: "happened",
    number: "02",
    question: "What has happened?",
    short: "Read the delivery",
    purpose: "Understand the events that brought price here.",
    body:
      "Price arrives somewhere for a reason. Trace the previous delivery: which structure broke, which liquidity was taken, where inducement formed, whether price displaced, and whether a shift in market structure changed its behaviour — and what that means for the significance of the current POI.",
    topics: [
      "Previous price delivery",
      "Structural breaks",
      "Liquidity taken",
      "Inducement",
      "Displacement",
      "Market Structure Shifts",
      "Changes in market behaviour",
      "Significance of the current POI",
    ],
  },
  {
    id: "draw",
    number: "03",
    question: "Where are we likely drawing into?",
    short: "Define the objective",
    purpose: "Establish a directional expectation.",
    body:
      "Identify the draw on liquidity — the next logical objective. Buy-side or sell-side liquidity, equal highs and lows, previous daily and weekly extremes, external range liquidity and higher-timeframe POIs all compete as candidates. The narrative chooses the most coherent one.",
    topics: [
      "Draw on liquidity",
      "Buy-side liquidity",
      "Sell-side liquidity",
      "Equal highs and lows",
      "Previous daily highs and lows",
      "Previous weekly highs and lows",
      "External range liquidity",
      "Higher-timeframe POIs",
      "Logical opposing objectives",
    ],
  },
  {
    id: "confirm",
    number: "04",
    question: "What confirms or invalidates the narrative?",
    short: "Separate hypothesis from trade",
    purpose: "Distinguish a hypothesis from a confirmed execution opportunity.",
    body:
      "Define, in advance, what price must do to confirm the idea — a liquidity sweep, a shift in structure, displacement, a change in state of delivery — and what behaviour would prove it wrong. Keep the alternative scenario in view. Without confirmation, there is no trade.",
    topics: [
      "Liquidity sweeps",
      "Market Structure Shift (MSS)",
      "Change of Character (CHoCH)",
      "Displacement",
      "Change in State of Delivery (CISD)",
      "Entry confirmation",
      "Invalidating price behaviour",
      "Alternative directional scenarios",
    ],
  },
];

/* ── THE FOUR PILLARS ─────────────────────────────────────────────────────── */

export type Topic = { term: string; note: string };

export type Pillar = {
  id: "top-down" | "poi" | "entry" | "refinements";
  number: string;
  title: string;
  role: string;
  /** How the pillar feeds the next one — used by the model diagram. */
  output: string;
  summary: string;
  body: string[];
  insight: string;
  topics: Topic[];
};

export const pillars: Pillar[] = [
  {
    id: "top-down",
    number: "01",
    title: "Top-Down Analysis",
    role: "Establishes the directional hypothesis.",
    output: "Context & bias",
    summary: "Direction is established on the higher timeframes and refined downwards — never the other way round.",
    body: [
      "Top-down analysis begins on the daily chart. Higher-timeframe structure defines the dealing range, the liquidity resting at its extremes and whether price is currently expensive or cheap within it. H4 swing structure then shows how that larger move is being delivered.",
      "Timeframes are not separate opinions. Each lower timeframe is a magnified view of the one above it, and lower-timeframe execution only makes sense when it is aligned with higher-timeframe context.",
    ],
    insight: "The higher timeframe gives direction. The lower timeframe gives timing. When they disagree, the higher timeframe wins — or there is no trade.",
    topics: [
      { term: "Daily directional analysis", note: "The daily chart frames the bias: which side of the market is in control and what it is reaching for." },
      { term: "Higher-timeframe structure", note: "The sequence of significant swing highs and lows that defines the prevailing order flow." },
      { term: "H4 swing structure", note: "How the higher-timeframe move is being delivered — expansion, retracement or consolidation." },
      { term: "Liquidity objectives", note: "The resting liquidity price is most likely to target next, which gives the analysis its destination." },
      { term: "Premium & discount", note: "Above equilibrium of the range is premium, below is discount. Buy in discount, sell in premium." },
      { term: "Dealing ranges", note: "The swing high and swing low currently containing price — the frame for every other decision." },
      { term: "Internal & external range liquidity", note: "Price tends to alternate between internal imbalances and the liquidity resting outside the range." },
      { term: "Previous daily highs & lows", note: "Obvious reference points where stops cluster, and frequent short-term objectives." },
      { term: "Previous weekly highs & lows", note: "Larger liquidity pools that often define the week's draw." },
      { term: "Directional alignment", note: "Daily, H4 and execution timeframes pointing the same way before risk is considered." },
    ],
  },
  {
    id: "poi",
    number: "02",
    title: "POI Logic",
    role: "Identifies where a trade is worth considering.",
    output: "Location",
    summary: "A Point of Interest is a location where price has a structural reason to react — and not every one qualifies.",
    body: [
      "Order blocks, fair value gaps and breakers are everywhere on a chart. What separates a quality POI from a random one is context: where it sits in the dealing range, whether it caused displacement, whether it has already been mitigated and whether it aligns with the higher-timeframe narrative.",
      "POI Logic is the discipline of grading locations before price reaches them, so that the decision is made calmly in advance rather than impulsively in the moment.",
    ],
    insight: "A POI without context is just a rectangle on a chart. Confluence with the narrative is what gives it meaning.",
    topics: [
      { term: "Order Blocks", note: "The last opposing candle before a displacive move that breaks structure — where significant orders were placed." },
      { term: "Fair Value Gaps", note: "Three-candle imbalances where price moved so efficiently that one side of the market was barely offered." },
      { term: "Breakers", note: "Order blocks that failed after a liquidity sweep and may now act as support or resistance from the other side." },
      { term: "Mitigation", note: "Price returning to an area to fill orders left behind. A mitigated POI usually carries less weight." },
      { term: "POI quality", note: "Graded by location, displacement, liquidity context and alignment with the higher timeframe." },
      { term: "Freshness & relevance", note: "Unmitigated areas formed by the most recent meaningful delivery tend to matter most." },
      { term: "Displacement", note: "A POI that produced a strong, imbalanced move shows intent; one that didn't is weaker evidence." },
      { term: "Higher-timeframe POI selection", note: "Choosing the daily or H4 area where the narrative expects a reaction." },
      { term: "Lower-timeframe alignment", note: "Refining the higher-timeframe POI to a precise lower-timeframe array for execution." },
      { term: "Premium / discount positioning", note: "Bullish POIs belong in discount and bearish POIs in premium — location before pattern." },
    ],
  },
  {
    id: "entry",
    number: "03",
    title: "Entry Model",
    role: "Turns a directional idea into an executable trade.",
    output: "Confirmation",
    summary: "Reaching a POI is not a signal. Execution requires price to confirm the narrative first.",
    body: [
      "The entry model waits for the lower timeframe to show intent at the POI: liquidity is taken, structure shifts in the expected direction, and price displaces away — leaving an imbalance or order block to enter from.",
      "Risk is defined by structure. The stop sits where the idea is genuinely invalid, the target sits at opposing liquidity, and the trade is only taken if that relationship makes sense.",
    ],
    insight: "Anticipation builds the watchlist. Confirmation builds the position.",
    topics: [
      { term: "Liquidity sweep", note: "Price runs a pool of resting orders and fails to continue — often the first sign of intent." },
      { term: "Inducement", note: "A minor, obvious level that attracts early entries before the real move — and is usually taken first." },
      { term: "Market Structure Shift", note: "A break of the most recent swing against the short-term direction, ideally with displacement." },
      { term: "Change of Character", note: "The first break in structure that signals the previous order flow may be ending." },
      { term: "Break of Structure", note: "Continuation: a new high or low in the direction of the established order flow." },
      { term: "Displacement", note: "Decisive, imbalanced price movement that shows commitment rather than drift." },
      { term: "Fair Value Gap formation", note: "The imbalance left by displacement — frequently the refined entry area." },
      { term: "CISD", note: "Change in State of Delivery: price stops delivering one way and begins delivering the other." },
      { term: "Order Block entry", note: "Entering on the return to the order block that originated the displacement." },
      { term: "Breaker entry", note: "Entering on the retest of a failed order block after the sweep and shift." },
      { term: "Stop-loss placement", note: "Beyond the level that invalidates the idea — usually the sweep extreme — not an arbitrary distance." },
      { term: "Target selection", note: "Opposing liquidity identified by the narrative's draw, with logical partials at structure." },
      { term: "Risk-to-reward", note: "The trade is only valid if the distance to the objective justifies the defined risk." },
      { term: "Execution confirmation", note: "A checklist met in full — partial confirmation is treated as no confirmation." },
    ],
  },
  {
    id: "refinements",
    number: "04",
    title: "Refinements",
    role: "Improves selection, timing and risk.",
    output: "Selection & risk",
    summary: "The details that separate a valid setup from a well-chosen, well-managed trade.",
    body: [
      "Refinements add context around the technical model. Fundamental analysis explains why a currency may be strengthening or weakening, the economic calendar shows when volatility is likely, and sessions show when price tends to deliver.",
      "Fundamentals support the technical framework; they do not replace it. Risk management and psychology then decide whether — and how much — to participate.",
    ],
    insight: "Fundamentals give the story weight. Risk and psychology decide whether you are still in the game to see it play out.",
    topics: [
      { term: "Fundamental context", note: "The macro backdrop that explains why a currency may be in demand or under pressure." },
      { term: "Economic calendar", note: "Knowing when high-impact data is released, and adjusting exposure around it." },
      { term: "Interest rates", note: "Rate differentials and expectations are a primary long-term driver of currency flows." },
      { term: "Central bank policy", note: "Statements, decisions and guidance that can reprice a currency's outlook." },
      { term: "Currency strength", note: "Pairing a strengthening currency against a weakening one improves directional clarity." },
      { term: "Macroeconomic developments", note: "Inflation, employment and growth trends that shape the narrative over weeks and months." },
      { term: "Trading sessions", note: "London and New York tend to provide the liquidity and volatility that deliver the move." },
      { term: "News awareness", note: "Avoiding entries immediately before major releases unless the plan explicitly accounts for them." },
      { term: "Risk management", note: "Fixed, defined risk per trade, decided before entry and never increased to recover losses." },
      { term: "Position sizing", note: "Calculated from the stop distance and the risk amount — never from conviction." },
      { term: "Trading psychology", note: "Executing the plan when it is uncomfortable and doing nothing when there is no setup." },
      { term: "Emotional regulation", note: "Recognising fear, greed and frustration before they change behaviour." },
      { term: "Patience", note: "Waiting for location and confirmation, and accepting missed moves as part of the process." },
      { term: "Trade selection", note: "Fewer, higher-quality trades that meet every criterion, rather than many that meet some." },
    ],
  },
];

export const modelPrinciples = [
  { title: "Analysis begins with context, not confirmation", body: "Patterns only gain meaning once location and narrative are clear." },
  { title: "A hypothesis is not a position", body: "Directional expectations are held loosely until price confirms them." },
  { title: "No model wins every trade", body: "The framework is built so that losses are defined, expected and survivable." },
];

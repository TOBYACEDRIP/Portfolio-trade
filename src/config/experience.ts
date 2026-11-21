/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EXPERIENCE — /experience
 * ─────────────────────────────────────────────────────────────────────────────
 *  An editorial account of how the approach was developed. It intentionally
 *  contains no dates, years of experience, results, credentials or career
 *  history — add those to `milestones` only once confirmed.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const experienceIntro = {
  headline: "Market understanding is built, not memorised.",
  lede:
    "Concepts can be learned in an afternoon. Understanding how price actually behaves — across trends, ranges, expansions and quiet sessions — takes sustained observation, honest review and a framework that holds up under uncertainty.",
};

export const experienceChapters = [
  {
    id: "study",
    eyebrow: "Study",
    title: "Studying price, not just patterns",
    body: [
      "My work in the Forex market has been driven by one question: why does price move where it moves? Answering it meant studying charts far beyond the textbook examples — watching how markets deliver, where they pause, which levels they respect and which they run through.",
      "Most technical concepts look obvious in hindsight. The real work is learning to recognise them in real time, with incomplete information and without knowing what happens next.",
    ],
  },
  {
    id: "conditions",
    eyebrow: "Market conditions",
    title: "Learning how context changes everything",
    body: [
      "The same pattern means different things in different environments. An order block in a trending market with clean displacement is not the same as one in a choppy, news-driven range.",
      "Observing markets across expansions, retracements, consolidations and reversals is what turned isolated concepts into a sense of context — knowing when a setup is valid, and when the market is simply not offering one.",
    ],
  },
  {
    id: "framework",
    eyebrow: "Framework",
    title: "From concepts to a coherent model",
    body: [
      "Over time, market structure, liquidity and price delivery stopped being separate ideas and became one connected process. That process is the TOBYACE Model™: top-down context, POI logic, a confirmation-based entry model and the refinements that improve selection and risk.",
      "Market Narrative sits above it all. Every idea has to answer where price is, what has happened, where it is likely drawing into, and what would confirm or invalidate that view.",
    ],
  },
  {
    id: "discipline",
    eyebrow: "Risk & psychology",
    title: "Decision-making under uncertainty",
    body: [
      "No analysis removes uncertainty. What it does is define it: where an idea is wrong, how much it costs to find out and what the reward is if it is right.",
      "Risk management and psychology are therefore not add-ons to the model — they are what allow it to be executed consistently. Patience, acceptance of losses and the discipline to do nothing are as much a part of trading as any entry.",
    ],
  },
  {
    id: "adaptability",
    eyebrow: "Adaptability",
    title: "Staying a student of the market",
    body: [
      "Markets evolve, and so does the work. Every trade, every missed move and every losing week is reviewed against the process. The framework is refined by evidence, not by opinion.",
    ],
  },
];

export const experiencePillars = [
  { title: "Price behaviour", body: "How markets deliver, retrace, consolidate and expand." },
  { title: "Market structure", body: "Reading order flow through swings, breaks and shifts." },
  { title: "Liquidity & delivery", body: "Where orders rest, and how price seeks them out." },
  { title: "Directional analysis", body: "Building and testing a narrative from the top down." },
  { title: "Risk management", body: "Defined, consistent risk that protects capital." },
  { title: "Trading psychology", body: "Discipline, patience and acceptance of uncertainty." },
];

/**
 * PLACEHOLDER — confirmed milestones only (e.g. when you started trading, when
 * the Liquidity Room launched). The timeline section stays hidden while empty.
 */
export const milestones: { year: string; title: string; body?: string }[] = [];

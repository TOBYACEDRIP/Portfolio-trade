/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ABOUT — long-form personal content for /about
 * ─────────────────────────────────────────────────────────────────────────────
 *  Written in first person. It deliberately avoids dates, places, numbers and
 *  achievements that haven't been confirmed. Where a specific detail would make
 *  a section stronger, a `PLACEHOLDER` note says what to add.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type AboutSection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export const aboutIntro = {
  headline: "I'm Toby. Most people online know me as TheTobyAce.",
  lede:
    "I'm a Forex trader, a trading educator and an entrepreneur who also happens to write software. Different disciplines — but they share the same foundation: understand the system, build a process, and stay patient enough to let it work.",
};

export const aboutSections: AboutSection[] = [
  {
    id: "background",
    eyebrow: "Background",
    title: "Curious about how things work",
    paragraphs: [
      "I've always been the person who wants to understand why something behaves the way it does — not just that it does. That curiosity has shaped almost every decision I've made, from what I studied to how I trade.",
      // PLACEHOLDER — optionally add a sentence about where you grew up or are based.
    ],
  },
  {
    id: "engineering",
    eyebrow: "Engineering",
    title: "An engineer's way of thinking",
    paragraphs: [
      "My academic background is in Electrical and Electronics Engineering. Engineering teaches you to break complex systems into components, to respect inputs and outputs, and to test assumptions instead of trusting them.",
      "That mindset carried directly into the markets. A chart is a system too: price is the output, liquidity and order flow are the inputs, and a trading plan is just a well-defined procedure for responding to what the system shows you.",
      "It's also where my interest in technology and software started. I still build — tools, websites and systems that make work more efficient.",
    ],
  },
  {
    id: "trading",
    eyebrow: "Trading",
    title: "From noise to a process",
    paragraphs: [
      "Like most traders, I started by trying everything. Over time I stripped my approach back to what actually explains price: market structure, liquidity and the areas where price has a reason to react.",
      "That work became the TOBYACE Method™ — a top-down framework of analysis, points of interest, a confirmation-based entry model and the refinements that protect capital. It isn't a shortcut. It's a way to make decisions consistently.",
      // PLACEHOLDER — optionally add when you started trading and which markets/pairs you focus on.
    ],
  },
  {
    id: "content",
    eyebrow: "Content",
    title: "Teaching in public",
    paragraphs: [
      "I create content because explaining something clearly is the best test of whether you really understand it. Trade breakdowns, market analysis and educational videos are how I share the process — including the trades that don't work out.",
      "The aim is simple: give people a clearer, more honest picture of what trading actually involves.",
    ],
  },
  {
    id: "entrepreneurship",
    eyebrow: "Entrepreneurship",
    title: "Building beyond the charts",
    paragraphs: [
      "Trading taught me to think in terms of risk, probability and long time horizons. Those same ideas apply to building a business. I'm interested in projects that combine education, technology and media — and in doing them properly rather than quickly.",
      "Outside of work I'm drawn to technology, self-development and anything that rewards patience and deliberate practice.",
      // PLACEHOLDER — optionally name ventures or interests you'd like listed.
    ],
  },
];

export const philosophy = {
  title: "Personal philosophy",
  statement: "Discipline is a design problem.",
  body:
    "Motivation comes and goes. A good process doesn't. Whether it's a trade, a business or a piece of software, I'd rather build a system that makes the right decision easy than rely on willpower in the moment.",
  principles: [
    { title: "Clarity first", body: "If I can't explain why I'm doing something, I don't do it yet." },
    { title: "Protect the downside", body: "In markets and in business, staying in the game is what makes compounding possible." },
    { title: "Show the real work", body: "Honest education includes losses, uncertainty and the slow parts." },
  ],
};

/** Short facts shown as a strip on /about. Only include confirmed facts. */
export const aboutFacts: { label: string; value: string }[] = [
  { label: "Known as", value: "TheTobyAce" },
  { label: "Studied", value: "Electrical & Electronics Engineering" },
  { label: "Trades", value: "Forex" },
  { label: "Teaches", value: "The Liquidity Room" },
];

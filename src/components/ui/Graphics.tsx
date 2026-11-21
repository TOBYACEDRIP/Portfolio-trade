import Image from "next/image";
import { person } from "@/config/site";

/**
 * Small illustrative diagram of price structure — a liquidity sweep followed by
 * a shift. Purely explanatory line-art, not a chart of real data.
 */
export function StructureGlyph({
  className = "",
  variant = "sweep",
}: {
  className?: string;
  variant?: "sweep" | "range" | "displacement";
}) {
  const shapes = {
    sweep: {
      path: "M4 70 L26 44 L40 58 L62 26 L78 44 L96 18 L108 34 L118 12 L128 46 L146 30 L170 62 L196 52",
      level: 18,
      dot: [118, 12],
    },
    range: {
      path: "M4 60 L24 30 L42 54 L64 28 L84 56 L104 30 L120 62 L136 66 L152 40 L174 24 L196 14",
      level: 66,
      dot: [136, 66],
    },
    displacement: {
      path: "M4 30 L24 50 L40 38 L58 60 L72 52 L88 68 L104 62 L120 72 L136 20 L150 34 L168 26 L196 10",
      level: 72,
      dot: [120, 72],
    },
  }[variant];

  return (
    <svg viewBox="0 0 200 80" className={className} fill="none" aria-hidden="true" focusable="false">
      <line
        x1="0"
        x2="200"
        y1={shapes.level}
        y2={shapes.level}
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeDasharray="2 4"
      />
      <path d={shapes.path} stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.25" strokeLinejoin="round" />
      <circle cx={shapes.dot[0]} cy={shapes.dot[1]} r="3" fill="var(--color-gold)" />
      <circle cx={shapes.dot[0]} cy={shapes.dot[1]} r="8" stroke="var(--color-gold)" strokeOpacity="0.35" />
    </svg>
  );
}

/**
 * Portrait slot. Shows the configured photo, or — until one is added in
 * src/config/site.ts — an intentional monogram treatment.
 */
export function Portrait({ priority = false, sizes = "(min-width: 1024px) 33vw, 100vw" }: { priority?: boolean; sizes?: string }) {
  if (person.portrait) {
    return (
      <div className="absolute inset-0">
        <Image
          src={person.portrait}
          alt={person.portraitAlt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top grayscale-[15%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg/85 via-bg/10 to-transparent" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden" role="img" aria-label="TheTobyAce monogram">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgb(198_166_107/0.14),transparent_55%),radial-gradient(ellipse_at_80%_90%,rgb(255_255_255/0.05),transparent_50%)]"
      />
      <div aria-hidden="true" className="grid-texture absolute inset-0 opacity-60" />
      <div aria-hidden="true" className="absolute inset-5 rounded-[0.9rem] border border-gold/15" />
      <span
        aria-hidden="true"
        className="relative select-none font-display text-[7.5rem] leading-none tracking-tight text-fg/90 italic sm:text-[9rem]"
      >
        T<span className="text-gold">A</span>
      </span>
    </div>
  );
}

function hash(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) h = (h * 31 + input.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/**
 * Designed typographic cover for work items and articles without an image.
 * Deterministic per id, so each item keeps the same look between builds.
 */
export function CoverArt({ id, label }: { id: string; label: string }) {
  const h = hash(id);
  const variants = ["sweep", "range", "displacement"] as const;
  const angle = [20, 120, 200, 300, 160][h % 5];
  const mirrored = (h >> 3) % 2 === 1;
  const glyphPosition = ["right-6 top-6", "right-6 bottom-6", "left-6 top-6"][(h >> 5) % 3];
  const labelTop = glyphPosition.includes("bottom");
  return (
    <div
      className="relative h-full w-full overflow-hidden bg-surface"
      style={{ backgroundImage: `linear-gradient(${angle}deg, rgb(198 166 107 / 0.11), transparent 60%)` }}
      aria-hidden="true"
    >
      <div className="grid-texture absolute inset-0 opacity-70" />
      <StructureGlyph
        variant={variants[(h >> 1) % 3]}
        className={`absolute h-auto w-[55%] text-fg opacity-60 ${glyphPosition} ${mirrored ? "-scale-x-100" : ""}`}
      />
      <p
        className={`absolute font-display text-[2.6rem] italic leading-none text-fg/85 ${
          labelTop ? "left-6 top-6" : glyphPosition.startsWith("left") ? "right-6 bottom-5" : "left-6 bottom-5"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

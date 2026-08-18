import { cn } from "../lib/utils";

// Decorative PCB-trace + signal-pulse backdrop, reused (with different trace
// layouts) across every section for a consistent "engineering lab" feel.
// Purely presentational: aria-hidden, pointer-events disabled, no
// informational content — safe to ignore for screen readers / keyboard nav.
// Respects prefers-reduced-motion globally via index.css.

type Variant = "hero" | "a" | "b" | "c" | "d";

interface TraceSet {
  traces: string[];
  pads: [number, number][];
  signal: string;
}

const VARIANTS: Record<Exclude<Variant, "hero">, TraceSet> = {
  a: {
    traces: [
      "M -20 90 H 220 L 260 130 V 260 L 300 300 H 620",
      "M -20 420 H 160 L 200 460 V 560 L 240 600 H 480",
    ],
    pads: [
      [260, 130],
      [300, 300],
      [200, 460],
      [240, 600],
    ],
    signal: "M -20 220 L 100 220 L 130 170 L 170 270 L 200 130 L 240 300 L 280 220 L 1220 220",
  },
  b: {
    traces: [
      "M 1220 110 H 960 L 920 150 V 300 L 880 340 H 600",
      "M 1220 460 H 1040 L 1000 500 V 600 L 960 640 H 700",
    ],
    pads: [
      [920, 150],
      [880, 340],
      [1000, 500],
      [960, 640],
    ],
    signal: "M 1220 260 L 1080 260 L 1050 210 L 1010 310 L 980 170 L 940 340 L 900 260 L -20 260",
  },
  c: {
    traces: [
      "M -20 200 H 300 L 340 240 V 100 L 380 60 H 640",
      "M -20 540 H 260 L 300 500 V 380 L 340 340 H 700",
    ],
    pads: [
      [340, 240],
      [380, 60],
      [300, 500],
      [340, 340],
    ],
    signal: "M -20 380 L 140 380 L 170 330 L 210 430 L 250 300 L 290 420 L 330 380 L 1220 380",
  },
  d: {
    traces: [
      "M 1220 180 H 900 L 860 220 V 90 L 820 50 H 560",
      "M 1220 520 H 1000 L 960 480 V 600 L 920 640 H 640",
    ],
    pads: [
      [860, 220],
      [820, 50],
      [960, 480],
      [920, 640],
    ],
    signal: "M 1220 340 L 1060 340 L 1030 290 L 990 390 L 950 260 L 910 380 L 870 340 L -20 340",
  },
};

export function CircuitBackground({
  variant = "hero",
  flip = false,
}: {
  variant?: Variant;
  flip?: boolean;
}) {
  const isHero = variant === "hero";
  const set = isHero ? null : VARIANTS[variant];

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute inset-0 bg-grid",
          isHero ? "mask-fade-b opacity-70" : "opacity-40"
        )}
      />

      <svg
        className={cn(
          "absolute inset-0 h-full w-full",
          isHero && "mask-fade-b",
          flip && "scale-x-[-1]"
        )}
        viewBox="0 0 1200 700"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
      >
        {isHero ? (
          <>
            <g stroke="var(--color-accent)" strokeWidth="1.5" strokeOpacity="0.35">
              <path d="M -20 120 H 260 L 300 160 V 340 L 340 380 H 700" />
              <path d="M 1220 90 H 940 L 900 130 V 260 L 860 300 H 520" />
              <path d="M -20 480 H 180 L 220 520 V 600 L 260 640 H 560" />
              <path d="M 1220 560 H 1000 L 960 520 V 400 L 920 360 H 640" />
            </g>
            <g fill="var(--color-accent)" fillOpacity="0.55">
              <circle cx="300" cy="160" r="3.5" />
              <circle cx="340" cy="380" r="3.5" />
              <circle cx="900" cy="130" r="3.5" />
              <circle cx="860" cy="300" r="3.5" />
              <circle cx="220" cy="520" r="3.5" />
              <circle cx="260" cy="640" r="3.5" />
              <circle cx="960" cy="520" r="3.5" />
              <circle cx="920" cy="360" r="3.5" />
            </g>
            <path
              d="M -20 240 L 120 240 L 150 190 L 190 290 L 220 150 L 260 320 L 300 240 L 1220 240"
              stroke="var(--color-signal)"
              strokeWidth="2"
              strokeOpacity="0.45"
              strokeDasharray="8 6"
              className="animate-dash"
            />
            <circle r="4" fill="var(--color-signal)">
              <animateMotion
                dur="7s"
                repeatCount="indefinite"
                path="M -20 240 L 120 240 L 150 190 L 190 290 L 220 150 L 260 320 L 300 240 L 1220 240"
              />
            </circle>
          </>
        ) : (
          set && (
            <>
              <g stroke="var(--color-accent)" strokeWidth="1.75" strokeOpacity="0.5">
                {set.traces.map((d) => (
                  <path key={d} d={d} />
                ))}
              </g>
              <g fill="var(--color-accent)" fillOpacity="0.75">
                {set.pads.map(([cx, cy]) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" />
                ))}
              </g>
              <path
                d={set.signal}
                stroke="var(--color-signal)"
                strokeWidth="2"
                strokeOpacity="0.55"
                strokeDasharray="7 6"
                className="animate-dash"
              />
              <circle r="4.5" fill="var(--color-signal)">
                <animateMotion dur="9s" repeatCount="indefinite" path={set.signal} />
              </circle>
            </>
          )
        )}
      </svg>
    </div>
  );
}

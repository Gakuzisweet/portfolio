// Decorative, subtle PCB-trace + waveform backdrop for the hero section.
// Purely presentational: aria-hidden, no informational content.
export function CircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-70" />

      <svg
        className="absolute inset-0 h-full w-full mask-fade-b opacity-[0.55]"
        viewBox="0 0 1200 700"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
      >
        {/* PCB-style traces */}
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

        {/* animated signal trace, drawn once and looped via dash animation */}
        <path
          d="M -20 240 L 120 240 L 150 190 L 190 290 L 220 150 L 260 320 L 300 240 L 1220 240"
          stroke="var(--color-signal)"
          strokeWidth="2"
          strokeOpacity="0.45"
          strokeDasharray="8 6"
          className="animate-dash"
        />
      </svg>
    </div>
  );
}

/**
 * The site's signature motif: a waveform rendered as a row of bars.
 * Deterministic per `seed` (no Math.random) so server and client markup match.
 * Pure CSS animation — safe to render on the server, no "use client" needed.
 */
function heightsFor(seed: number, count: number): number[] {
  const heights: number[] = [];
  let x = seed || 1;
  for (let i = 0; i < count; i++) {
    // xorshift32 — cheap, deterministic, good enough spread for a visual motif
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    x |= 0;
    const n = (Math.abs(x) % 1000) / 1000; // 0..1
    heights.push(0.18 + n * 0.82);
  }
  return heights;
}

export function Waveform({
  seed = 7,
  bars = 48,
  animated = false,
  tone = "brass",
  className = "",
}: {
  seed?: number;
  bars?: number;
  animated?: boolean;
  tone?: "brass" | "wine" | "paper" | "lake";
  className?: string;
}) {
  const heights = heightsFor(seed, bars);
  const color =
    tone === "brass"
      ? "bg-brass"
      : tone === "wine"
        ? "bg-wine"
        : tone === "lake"
          ? "bg-lake"
          : "bg-paper";

  return (
    <div
      aria-hidden="true"
      className={`flex items-end gap-[3px] h-10 ${className}`}
    >
      {heights.map((h, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full ${color} ${animated ? "animate-waveform" : ""}`}
          style={{
            height: `${Math.round(h * 100)}%`,
            transformOrigin: "bottom",
            animationDelay: animated ? `${(i % 12) * 0.07}s` : undefined,
            opacity: animated ? undefined : 0.55 + h * 0.45,
          }}
        />
      ))}
    </div>
  );
}

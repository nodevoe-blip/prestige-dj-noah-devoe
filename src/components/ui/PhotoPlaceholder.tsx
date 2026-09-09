/**
 * Stands in for real photography. Never swap this for stock/AI imagery —
 * the entire pitch of Noah's portfolio pages is that the photos are real,
 * specific weddings. Replace each instance with an actual photo + real alt text.
 */
export function PhotoPlaceholder({
  caption,
  aspect = "aspect-[4/5]",
  tone = "wine",
  className = "",
}: {
  caption: string;
  aspect?: string;
  tone?: "wine" | "brass";
  className?: string;
}) {
  const accent = tone === "wine" ? "border-wine-bright" : "border-brass";
  return (
    <div
      className={`relative flex items-end overflow-hidden rounded-sm border ${accent} bg-ink-soft ${aspect} ${className}`}
      style={{
        backgroundImage:
          tone === "wine"
            ? "repeating-linear-gradient(135deg, rgba(122,36,54,0.35) 0px, rgba(122,36,54,0.35) 2px, transparent 2px, transparent 14px)"
            : "repeating-linear-gradient(135deg, rgba(198,149,47,0.3) 0px, rgba(198,149,47,0.3) 2px, transparent 2px, transparent 14px)",
      }}
    >
      <p className="m-3 rounded-sm bg-ink/80 px-2.5 py-1.5 font-mono text-[10px] uppercase leading-snug tracking-wider text-smoke">
        [Photo] {caption}
      </p>
    </div>
  );
}

/** The thin navy underline rule — a recurring brand device beneath the hero
 * tagline and major section headers, not a one-off hero decoration.
 * `tone` must match the surface it sits on: "navy" (default) on light/ivory
 * backgrounds, "espresso" on dark/charcoal ones — navy itself fails contrast
 * on charcoal, so the dark surface needs the bright/sky value instead. */
export function AccentRule({
  className = "",
  tone = "navy",
}: {
  className?: string;
  tone?: "navy" | "espresso";
}) {
  const color = tone === "navy" ? "bg-navy" : "bg-navy-bright";
  return <span aria-hidden="true" className={`block h-[3px] w-16 ${color} ${className}`} />;
}

/**
 * Renders as visibly "sample" content (dashed border + tag) so a placeholder
 * quote can never be mistaken for — or accidentally shipped as — a real
 * couple's review. Swap for real, attributed testimonials before launch and
 * drop the `placeholder` prop.
 */
export function Testimonial({
  quote,
  attribution,
  placeholder = true,
  tone = "onPaper",
}: {
  quote: string;
  attribution: string;
  placeholder?: boolean;
  tone?: "onPaper" | "onInk";
}) {
  const border = placeholder
    ? "border-dashed border-ash/60"
    : tone === "onPaper"
      ? "border-paper-line"
      : "border-ink-line";
  const text = tone === "onPaper" ? "text-ink" : "text-paper";
  const muted = tone === "onPaper" ? "text-ash" : "text-smoke";

  return (
    <figure className={`rounded-sm border ${border} p-6`}>
      {placeholder && (
        <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-espresso-bright">
          Sample — replace with a real review
        </p>
      )}
      <blockquote className={`font-accent text-xl italic leading-snug ${text}`}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className={`mt-4 font-mono text-xs uppercase tracking-wider ${muted}`}>
        {attribution}
      </figcaption>
    </figure>
  );
}

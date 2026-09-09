import Link from "next/link";

/**
 * Makes it unambiguous which layer of the site a visitor is on, and cross-links
 * to the other layer in the same breath. Required on every page per the site's
 * content guardrails — never let a visitor mistake "Noah personally" for
 * "the Prestige team," or vice versa.
 */
export function LayerBadge({
  layer,
  tone = "onPaper",
}: {
  layer: "noah" | "prestige";
  tone?: "onPaper" | "onInk";
}) {
  const textMuted = tone === "onPaper" ? "text-ash" : "text-smoke";
  const border = tone === "onPaper" ? "border-paper-line" : "border-ink-line";

  if (layer === "noah") {
    return (
      <p
        className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-sm border ${border} px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider ${textMuted}`}
      >
        <span className="text-espresso-bright">&#9679; Noah, personally</span>
        <span>— his own bookings, his own mixes, his own crowd.</span>
        <Link href="/wedding-dj" className="text-navy underline decoration-dotted underline-offset-2 hover:text-navy-bright">
          Date taken? Browse Prestige&rsquo;s full DJ team &rarr;
        </Link>
      </p>
    );
  }

  return (
    <p
      className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-sm border ${border} px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider ${textMuted}`}
    >
      <span className="text-navy">&#9679; Prestige, the company</span>
      <span>— a full team of DJs, one of whom is Noah.</span>
      <Link href="/noah-devoe" className="text-espresso-bright underline decoration-dotted underline-offset-2 hover:text-espresso">
        Meet co-owner Noah DeVoe &rarr;
      </Link>
    </p>
  );
}

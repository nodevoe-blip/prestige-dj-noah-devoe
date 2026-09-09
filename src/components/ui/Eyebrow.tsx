/** Mono "cue sheet" label used above headings — e.g. "00:01 — THE STORY" */
export function Eyebrow({
  index,
  children,
  tone = "brass",
}: {
  index?: string;
  children: React.ReactNode;
  tone?: "brass" | "wine" | "lake";
}) {
  const color = tone === "brass" ? "text-brass" : tone === "wine" ? "text-wine-bright" : "text-lake-bright";
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.18em] ${color} flex items-center gap-2`}>
      {index && <span className="opacity-70">{index}</span>}
      <span>{children}</span>
    </p>
  );
}

/** Small letter-spaced label used above headings — e.g. "The Story" */
export function Eyebrow({
  index,
  children,
  tone = "navy",
}: {
  index?: string;
  children: React.ReactNode;
  tone?: "navy" | "espresso";
}) {
  const color = tone === "navy" ? "text-navy" : "text-espresso-bright";
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.18em] ${color} flex items-center gap-2`}>
      {index && <span className="opacity-70">{index}</span>}
      <span>{children}</span>
    </p>
  );
}

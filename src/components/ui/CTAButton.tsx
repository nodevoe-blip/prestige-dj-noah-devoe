import Link from "next/link";

const base =
  "group inline-flex items-center gap-2 rounded-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] [touch-action:manipulation] transition-[background-color,color,border-color,transform] duration-150 ease-press active:scale-95";

const variants = {
  // Fill is navy (works as a bg on either surface — ivory text clears AA on
  // it either way). Hover shifts the fill to the sky accent, which is a
  // light color, so the text has to swap to charcoal on hover or it reads
  // as light-on-light — per the v6 spec's dark-button hover rule, applied
  // here regardless of surface since the fill swap is identical either way.
  navy: "bg-navy text-paper hover:bg-navy-bright hover:text-ink",
  espresso: "bg-espresso text-paper hover:bg-espresso-bright hover:text-ink",
  outline: "border border-paper-line text-ink hover:border-ink hover:bg-ink/5",
  "outline-ink": "border border-ink-line text-paper hover:border-paper hover:bg-paper/5",
} as const;

export function CTAButton({
  href,
  children,
  variant = "navy",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-150 ease-enter group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </Link>
  );
}

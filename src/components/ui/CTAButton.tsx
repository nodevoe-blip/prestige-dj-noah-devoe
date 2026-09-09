import Link from "next/link";

const base =
  "inline-flex items-center gap-2 rounded-sm px-6 py-3 font-mono text-xs uppercase tracking-[0.14em] transition-colors";

const variants = {
  navy: "bg-navy text-paper hover:bg-navy-bright",
  espresso: "bg-espresso text-paper hover:bg-espresso-bright",
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
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

/** The thin clay underline rule — a recurring brand device beneath the hero
 * tagline and major section headers, not a one-off hero decoration. */
export function AccentRule({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`block h-[3px] w-16 bg-navy-bright ${className}`} />;
}

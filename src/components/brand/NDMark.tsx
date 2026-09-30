/**
 * The ND monogram — Noah's primary logo. These are the real, approved brand
 * assets (`/Noah DeVoe/DJ Noah Media/ND Logo Assets/`), not a redrawn
 * approximation — every consumer here just picks the right file for its
 * theme/layout. Swapping in a revised export later is a one-file change.
 */

const ICON = {
  light: "/brand/nd/nd-icon-fullcolor.svg", // charcoal + clay, for light/ivory backgrounds
  dark: "/brand/nd/nd-icon-fullcolor-reverse.svg", // ivory + clay, for dark/charcoal backgrounds
} as const;

const LOCKUP = {
  light: "/brand/nd/nd-lockup-horizontal.svg",
  dark: "/brand/nd/nd-lockup-horizontal-reverse.svg",
} as const;

const PRIMARY = {
  light: "/brand/nd/nd-primary-logo.svg",
  dark: "/brand/nd/nd-primary-logo-reverse.svg",
} as const;

export function NDIcon({
  theme = "dark",
  className = "",
}: {
  theme?: "dark" | "light";
  className?: string;
}) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={ICON[theme]} alt="" aria-hidden="true" className={className} />;
}

/** Icon | rule | "NOAH DEVOE / WEDDING DJ + MC" — standard header lockup.
 * Collapses to the icon-only mark on scroll (compact) and always on mobile
 * (the file itself has no responsive behavior, so that's handled by the
 * caller passing `compact` and by the CSS below). */
export function NDLockup({
  theme = "dark",
  compact = false,
  className = "",
}: {
  theme?: "dark" | "light";
  compact?: boolean;
  className?: string;
}) {
  if (compact) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={ICON[theme]} alt="Noah DeVoe" className={`h-8 w-auto ${className}`} />;
  }
  return (
    <span className={`inline-flex items-center ${className}`}>
      {/* Full lockup from sm up; icon-only below that, same file swap pattern. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={ICON[theme]} alt="Noah DeVoe" className="h-8 w-auto sm:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={LOCKUP[theme]} alt="Noah DeVoe — Wedding DJ + MC" className="hidden h-9 w-auto sm:block" />
    </span>
  );
}

/** Icon above wordmark, centered — footer mark / social-avatar / favicon-fallback contexts. */
export function NDStacked({
  theme = "dark",
  className = "",
}: {
  theme?: "dark" | "light";
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={PRIMARY[theme]} alt="Noah DeVoe — Wedding DJ + MC" className={className} />
  );
}

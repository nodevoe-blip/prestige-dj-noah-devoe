import Link from "next/link";
import { primaryNav } from "@/lib/site-config";
import { MobileMenu } from "./MobileMenu";
import { Waveform } from "@/components/ui/Waveform";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-line bg-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-brass focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Waveform seed={3} bars={5} className="h-5" tone="brass" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-paper">
              PRESTIGE
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-smoke">
              Weddings &amp; Events
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((section) => (
              <li key={section.href} className="group relative">
                <Link
                  href={section.href}
                  className={`font-mono text-[11px] uppercase tracking-wider transition-colors ${
                    section.label === "Noah DeVoe"
                      ? "text-wine-bright hover:text-brass"
                      : "text-paper/85 hover:text-brass"
                  }`}
                >
                  {section.label}
                </Link>
                <ul className="invisible absolute left-1/2 top-full z-10 min-w-[190px] -translate-x-1/2 translate-y-1 rounded-sm border border-ink-line bg-ink-soft py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-2 group-focus-within:opacity-100">
                  {section.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-smoke hover:bg-ink hover:text-paper"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/wedding-dj#check-availability"
            className="hidden rounded-sm bg-brass px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-ink transition-colors hover:bg-brass-bright sm:inline-block"
          >
            Check Availability
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

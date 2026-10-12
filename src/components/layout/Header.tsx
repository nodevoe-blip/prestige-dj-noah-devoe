"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/lib/site-config";
import { NDLockup } from "@/components/brand/NDMark";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-ink transition-[border-color,box-shadow] duration-300 ease-move ${
        scrolled ? "border-ink-line shadow-[0_1px_0_0_rgba(0,0,0,0.4)]" : "border-transparent shadow-none"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-navy focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-paper"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center" aria-label="Noah DeVoe — Wedding DJ + MC — home">
          <NDLockup theme="dark" compact={scrolled} />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {primaryNav.map((section) => (
              <li key={section.href} className="group relative">
                <Link
                  href={section.href}
                  className={`relative font-mono text-[11px] uppercase tracking-wider transition-colors ${
                    section.label === "Noah DeVoe"
                      ? "text-espresso-bright hover:text-navy-bright"
                      : "text-paper/85 hover:text-navy-bright"
                  }`}
                >
                  {section.label}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-navy-bright transition-transform duration-200 ease-enter group-hover:scale-x-100"
                  />
                </Link>
                <ul className="invisible absolute left-1/2 top-full z-10 min-w-[190px] -translate-x-1/2 translate-y-1 rounded-sm border border-ink-line bg-ink-soft py-2 opacity-0 shadow-lg transition-[opacity,transform] duration-150 ease-enter group-hover:visible group-hover:translate-y-2 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-2 group-focus-within:opacity-100">
                  {section.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-smoke transition-colors hover:bg-ink hover:text-paper"
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
            className="hidden rounded-sm bg-navy px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-paper [touch-action:manipulation] transition-[background-color,color,transform] duration-150 ease-press hover:bg-navy-bright hover:text-ink active:scale-95 sm:inline-block"
          >
            Check Availability
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

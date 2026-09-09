"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/lib/site-config";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-sm border border-ink-line text-paper"
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
          {open ? (
            <path
              d="M1 1 17 13M17 1 1 13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          ) : (
            <>
              <line x1="0" y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="1.6" />
              <line x1="0" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.6" />
              <line x1="0" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.6" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-ink-line bg-ink px-6 py-8"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-6">
              {primaryNav.map((section) => (
                <li key={section.href}>
                  <Link
                    href={section.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl font-semibold text-paper"
                  >
                    {section.label}
                  </Link>
                  <ul className="mt-2 flex flex-col gap-1.5 border-l border-ink-line pl-4">
                    {section.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="font-mono text-xs uppercase tracking-wider text-smoke hover:text-paper"
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
        </div>
      )}
    </div>
  );
}

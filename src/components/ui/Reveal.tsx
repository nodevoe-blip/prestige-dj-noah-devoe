"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades + lifts its children in once they scroll into view. Defaults to
 * fully visible (no inline style, no hidden state) so content never depends
 * on JS running — only after mount does it arm itself and wait for the
 * IntersectionObserver, which is what keeps SSR/no-JS/crawler output
 * identical to the settled state instead of stuck invisible.
 * Use for a few chosen below-the-fold moments, not every section.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setArmed(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden = armed && !visible;

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-enter ${
        hidden ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      } ${className}`}
    >
      {children}
    </div>
  );
}

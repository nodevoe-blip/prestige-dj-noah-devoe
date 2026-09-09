import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTAButton } from "@/components/ui/CTAButton";
import type { Crumb } from "@/components/schema/BreadcrumbSchema";

/**
 * Shared shell for routes that exist in the site's information architecture
 * but haven't been populated with full content yet — keeps every planned
 * page reachable (no dead nav links) without faking depth it doesn't have.
 * Each usage still supplies a real, specific intro paragraph and CTA; only
 * the surrounding chrome is shared.
 */
export function StubPage({
  layer,
  eyebrow,
  title,
  intro,
  breadcrumbs,
  ctaHref,
  ctaLabel,
  children,
}: {
  layer: "noah" | "prestige";
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumbs: Crumb[];
  ctaHref: string;
  ctaLabel: string;
  children?: React.ReactNode;
}) {
  const accentTone = layer === "noah" ? "espresso" : "navy";
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <Breadcrumbs items={breadcrumbs} tone="ink" />
        <LayerBadge layer={layer} tone="onInk" />

        <div className="mt-10 max-w-2xl">
          <Eyebrow tone={accentTone}>{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg text-smoke">{intro}</p>
          <div className="mt-8">
            <CTAButton href={ctaHref} variant={layer === "noah" ? "espresso" : "navy"}>
              {ctaLabel}
            </CTAButton>
          </div>
        </div>

        {children && <div className="mt-16">{children}</div>}
      </div>
    </section>
  );
}

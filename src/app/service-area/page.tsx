import { pageMetadata } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { serviceAreas } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Service Areas — Prestige Weddings & Events",
  description:
    "Prestige Weddings & Events serves Michigan wedding couples across Oakland County, Metro Detroit, Grand Rapids, Southwest Michigan, and Traverse City.",
  path: "/service-area",
});

export default function ServiceAreaIndexPage() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <Breadcrumbs items={[{ label: "Service Areas", path: "/service-area" }]} tone="ink" />
        <LayerBadge layer="prestige" tone="onInk" />

        <div className="mt-10 max-w-2xl">
          <Eyebrow tone="brass">Where we work</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Service Areas
          </h1>
          <p className="mt-5 text-lg text-smoke">
            Based in Oakland County, booked across Michigan. Each region below has its own local
            guide — real venues, real logistics, not a copy-pasted city name.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((a) => (
            <a
              key={a.slug}
              href={`/service-area/${a.slug}`}
              className="rounded-sm border border-ink-line bg-ink-soft p-6 transition-colors hover:border-brass"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-brass">{a.region}</p>
              <h2 className="mt-1 font-display text-xl font-semibold text-paper">{a.name}</h2>
              <p className="mt-2 text-sm text-smoke">{a.blurb}</p>
              {!a.live && (
                <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-smoke/70">
                  Full local guide coming soon
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

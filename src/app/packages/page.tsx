import { pageMetadata } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import { services, prestige, stats } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Wedding Packages & Bundles — Prestige Weddings & Events",
  description:
    "Bundled Michigan wedding packages from Prestige Weddings & Events — combine DJ, photography, videography, coordination, photo booth, and lighting for multi-service savings.",
  path: "/packages",
});

const bundles = [
  {
    name: "DJ + Photography",
    detail: "Our two most-booked services together, coordinated on one shared timeline.",
    includes: ["Wedding DJ & MC", "Wedding Photography"],
  },
  {
    name: "Full Production",
    detail: "DJ, photography, videography & day-of coordination — one team, one contract.",
    includes: ["Wedding DJ & MC", "Wedding Photography", "Wedding Videography", "Day-Of Coordination"],
  },
  {
    name: "Reception Experience",
    detail: "DJ, lighting & effects, and photo booth for a reception-focused night.",
    includes: ["Wedding DJ & MC", "Lighting & Effects", "Photo Booth"],
  },
];

export default function PackagesPage() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <Breadcrumbs items={[{ label: "Packages", path: "/packages" }]} tone="ink" />
        <LayerBadge layer="prestige" tone="onInk" />

        <div className="mt-10 max-w-2xl">
          <Eyebrow tone="navy">Bundle &amp; save</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Packages &amp; Bundles
          </h1>
          <p className="mt-5 text-lg text-smoke">
            Every service below can be booked on its own — bundling two or more with Prestige
            means one shared timeline, one point of contact, and a lower combined rate than
            booking each vendor separately. DJ service alone starts at{" "}
            <span className="text-navy">{stats.teamDjStartingPrice}</span>; bundles run higher
            depending on what you add.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {bundles.map((b) => (
            <div key={b.name} className="rounded-sm border border-ink-line bg-ink-soft p-6">
              <h2 className="font-display text-xl font-semibold text-paper">{b.name}</h2>
              <p className="mt-3 text-sm text-smoke">{b.detail}</p>
              <ul className="mt-4 space-y-1.5 border-t border-ink-line pt-4">
                {b.includes.map((i) => (
                  <li key={i} className="font-mono text-[11px] uppercase tracking-wider text-smoke">
                    &mdash; {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-smoke">
          Exact bundle pricing depends on which services and hours you combine — tell us the mix
          you want and we&rsquo;ll send a custom quote.
        </p>

        <div className="mt-12">
          <h2 className="font-display text-2xl font-bold">All services, a la carte</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {services.map((s) => (
              <a
                key={s.slug}
                href={s.path}
                className="rounded-sm border border-ink-line px-4 py-2 font-mono text-xs uppercase tracking-wider text-smoke hover:border-navy hover:text-navy"
              >
                {s.shortName}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <CTAButton href={`tel:${prestige.telephone}`} variant="navy">
            Build a custom bundle
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

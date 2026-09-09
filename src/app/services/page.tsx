import { pageMetadata } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import { services } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Wedding Services — Prestige Weddings & Events",
  description:
    "DJ, photography, videography, day-of coordination, photo booth, and lighting — every wedding service Prestige Weddings & Events runs in-house across Michigan.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <Breadcrumbs items={[{ label: "Services", path: "/services" }]} tone="ink" />
        <LayerBadge layer="prestige" tone="onInk" />

        <div className="mt-10 max-w-2xl">
          <Eyebrow tone="navy">Everything in-house</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Wedding Services
          </h1>
          <p className="mt-5 text-lg text-smoke">
            Six services, one team, one point of contact — book them separately or bundled.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.slug}
              href={s.path}
              className="rounded-sm border border-ink-line bg-ink-soft p-6 transition-colors hover:border-navy"
            >
              <h2 className="font-display text-xl font-semibold text-paper">{s.name}</h2>
              <p className="mt-2 text-sm text-smoke">{s.blurb}</p>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <CTAButton href="/packages" variant="navy">
            See bundled packages
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

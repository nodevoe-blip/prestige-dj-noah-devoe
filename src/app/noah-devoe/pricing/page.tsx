import { pageMetadata } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import { prestige, stats } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Book Noah DeVoe — Pricing & Availability",
  description:
    "Pricing and booking details for hiring Noah DeVoe directly as your wedding DJ, plus how to check his availability versus booking another Prestige DJ.",
  path: "/noah-devoe/pricing",
});

export default function NoahPricingPage() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <Breadcrumbs
          items={[
            { label: "Noah DeVoe", path: "/noah-devoe" },
            { label: "Pricing", path: "/noah-devoe/pricing" },
          ]}
          tone="ink"
        />
        <LayerBadge layer="noah" tone="onInk" />

        <div className="mt-10 max-w-2xl">
          <Eyebrow tone="espresso">Booking me directly</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Book Noah — Pricing &amp; Availability
          </h1>
          <p className="mt-5 text-lg text-smoke">
            This is pricing for booking me personally, separate from Prestige&rsquo;s general team
            packages. I take a limited number of dates each season, so availability — not budget —
            is usually the real question.
          </p>
        </div>

        <div className="mt-12 max-w-md rounded-sm border border-ink-line bg-ink-soft p-8">
          <p className="font-mono text-[11px] uppercase tracking-wider text-smoke">Starting at</p>
          <p className="mt-2 font-display text-5xl font-bold text-espresso-bright">{stats.noahStartingPrice}</p>
          <p className="mt-4 text-sm text-smoke">
            Final pricing depends on hours of coverage, ceremony vs. reception-only, and any
            add-ons (uplighting, extra hours, rehearsal-dinner sets). Tell me your date and venue
            and I&rsquo;ll send an exact quote.
          </p>
        </div>

        <div className="mt-12 rounded-sm border border-ink-line bg-ink-soft p-6">
          <h2 className="font-display text-xl font-semibold text-paper">
            Me vs. the Prestige team — what&rsquo;s the actual difference?
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-smoke">
            <li>&mdash; Booking me reserves my own calendar, not a substitute DJ on the day.</li>
            <li>&mdash; If I&rsquo;m already booked for your date, I&rsquo;ll personally recommend which Prestige DJ fits your venue and vibe.</li>
            <li>&mdash; Every Prestige DJ trained under me and runs the same planning process — the gap between &ldquo;me&rdquo; and &ldquo;the team&rdquo; is availability, not quality.</li>
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <CTAButton href={`tel:${prestige.telephone}`} variant="espresso">
            Set up a call
          </CTAButton>
          <CTAButton href="/wedding-dj" variant="outline-ink">
            Or see the full team
          </CTAButton>
        </div>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-smoke">
          Prefer email? Send your contact info and I&rsquo;ll reach out —{" "}
          <a href={`mailto:${prestige.email}`} className="text-espresso-bright underline decoration-dotted underline-offset-2">
            {prestige.email}
          </a>
        </p>
      </div>
    </section>
  );
}

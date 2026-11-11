import { pageMetadata } from "@/lib/metadata";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTAButton } from "@/components/ui/CTAButton";
import { PackageTiers, AddOnGrid, type PackageTier, type AddOn } from "@/components/ui/PackageTiers";

export const metadata = pageMetadata({
  title: "Day-Of Wedding Coordination — Prestige Weddings & Events",
  description:
    "A dedicated day-of wedding coordinator from Prestige Weddings & Events runs your timeline and vendors so you don't have to on your wedding day.",
  path: "/services/coordination",
});

const alwaysIncluded: AddOn[] = [
  {
    name: "Planning support",
    detail: "An intro meeting with a planning-portal tour, a 30-day final details meeting, and a vendor recommendations list.",
  },
  { name: "Final timeline", detail: "Your wedding-day timeline, finalized and distributed to every vendor." },
  { name: "Day-of coverage", detail: "Managing ceremony & reception events as your primary point of contact." },
  { name: "Vendor oversight", detail: "Overseeing vendors on-site and running a final walk-through of both spaces." },
  { name: "Final logistics", detail: "Distributing final payments & gratuities so you don't have to." },
  { name: "Emergency kit", detail: "Access to the coordinator's on-site emergency kit, start to finish." },
];

const coordinationTiers: PackageTier[] = [
  {
    name: "Baby's Breath",
    meta: "1 coordinator · up to 10 hours",
    items: [
      "Decor setup OR tear-down assistance",
      "1-hour ceremony rehearsal coordination",
      "Three meetings: intro, 60-day & 30-day final",
    ],
  },
  {
    name: "Magnolia",
    meta: "1 coordinator · up to 12 hours",
    items: [
      "Decor setup AND tear-down assistance",
      "1-hour ceremony rehearsal coordination",
      "Three meetings: intro, 60-day & 30-day final",
    ],
  },
  {
    name: "Rose",
    popular: true,
    meta: "2 coordinators · up to 12 hours",
    items: [
      "Built for weddings with more moving parts — DIY centerpieces, 200+ guests, multiple locations, or a private residence",
      "Decor setup AND tear-down assistance",
      "2-hour ceremony rehearsal coordination",
      "Option to hand off personal decor items at the rehearsal",
      "Four meetings: intro, 90-day, 60-day & 30-day final",
    ],
  },
];

export default function CoordinationPage() {
  return (
    <>
      <ServiceSchema
        name="Day-Of Wedding Coordination"
        description="Dedicated day-of coordination running the wedding-day timeline and vendor logistics, from the Prestige Weddings & Events team."
        path="/services/coordination"
      />

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
          <Breadcrumbs
            items={[
              { label: "Services", path: "/services" },
              { label: "Coordination", path: "/services/coordination" },
            ]}
            tone="ink"
          />
          <div className="mt-10 max-w-2xl">
            <Eyebrow tone="espresso">Coordination</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Day-Of Coordination
            </h1>
            <p className="mt-5 text-lg text-smoke">
              A dedicated coordinator runs your timeline, vendor check-ins, and any last-minute
              fires on the wedding day itself — especially useful when you&rsquo;ve also booked
              our DJ or photo team, since the timeline is already shared.
            </p>
            <div className="mt-8">
              <CTAButton href="/packages" variant="navy">
                See bundled packages
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-paper-line">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <Eyebrow tone="navy">What&rsquo;s always included</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Every coordination package starts here
          </h2>
          <AddOnGrid addOns={alwaysIncluded} />
        </div>
      </section>

      <section className="border-t border-paper-line bg-paper-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <Eyebrow tone="navy">Pick your coverage</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Three coordination packages
          </h2>
          <p className="mt-4 max-w-2xl text-ash">
            Each package builds on &ldquo;what&rsquo;s always included&rdquo; above. Exact
            pricing depends on hours, coordinator count, and your wedding&rsquo;s complexity —
            tell us your date and venue for a quote.
          </p>
          <PackageTiers tiers={coordinationTiers} />
        </div>
      </section>
    </>
  );
}

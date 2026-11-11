import { pageMetadata } from "@/lib/metadata";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTAButton } from "@/components/ui/CTAButton";
import { PackageTiers, AddOnGrid, type PackageTier, type AddOn } from "@/components/ui/PackageTiers";

export const metadata = pageMetadata({
  title: "Wedding Photography — Prestige Weddings & Events",
  description:
    "Full-day Michigan wedding photography from Prestige Weddings & Events, from getting-ready through the last dance — bundled with DJ, video, and coordination if you'd like.",
  path: "/services/photography",
});

const photoTiers: PackageTier[] = [
  {
    name: "Pine",
    items: [
      "Up to 7 hours of wedding-day coverage",
      "1 professional photographer",
      "Online gallery of all edited images, with download access & printing rights",
      "Unlimited email communication",
      "Final planning meeting with your photographer",
      "Client portal with planning resources & timeline tools",
    ],
  },
  {
    name: "Oak",
    popular: true,
    items: [
      "Up to 8 hours of wedding-day coverage",
      "1 professional photographer",
      "Online gallery, download access & printing rights",
      "Client portal, planning resources & timeline tools",
      "Engagement photography session included",
      "Sneak peeks within 1 week",
    ],
  },
  {
    name: "Birch",
    items: [
      "Up to 10 hours of wedding-day coverage",
      "2 professional photographers",
      "Online gallery, download access & printing rights",
      "Engagement photography session included",
      "Sneak peeks within 1 week",
      "Custom wedding album, up to 20 pages",
    ],
  },
];

const photoAddOns: AddOn[] = [
  {
    name: "Engagement session",
    detail: "A 1-hour, 1-location session with up to 2 outfits — all edited images included, with printing rights.",
  },
  { name: "Additional time", detail: "Extend wedding-day coverage with your lead photographer." },
  {
    name: "Additional photographer",
    detail: "A second photographer for simultaneous angles — walking down the aisle, getting-ready shots in two places, or a tight pre-ceremony window.",
  },
];

export default function PhotographyPage() {
  return (
    <>
      <ServiceSchema
        name="Wedding Photography"
        description="Full-day wedding photography coverage from getting-ready through the reception, from the Prestige Weddings & Events team."
        path="/services/photography"
      />

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
          <Breadcrumbs
            items={[
              { label: "Services", path: "/services" },
              { label: "Photography", path: "/services/photography" },
            ]}
            tone="ink"
          />
          <div className="mt-10 max-w-2xl">
            <Eyebrow tone="espresso">Photography</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Wedding Photography
            </h1>
            <p className="mt-5 text-lg text-smoke">
              Full-day coverage from getting-ready through the last dance, shot by a team that
              already knows how the DJ, coordinator, and timeline fit together.
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
          <Eyebrow tone="navy">Pick your coverage</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Three photography packages
          </h2>
          <p className="mt-4 max-w-2xl text-ash">
            Every package includes a full online gallery with download access and printing
            rights. Exact pricing depends on hours, photographer count, and add-ons — tell us
            your date and venue for a quote.
          </p>
          <PackageTiers tiers={photoTiers} />
          <h3 className="mt-14 font-display text-xl font-semibold text-ink">Add to any package</h3>
          <AddOnGrid addOns={photoAddOns} />
        </div>
      </section>
    </>
  );
}

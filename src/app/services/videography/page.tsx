import { pageMetadata } from "@/lib/metadata";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTAButton } from "@/components/ui/CTAButton";
import { PackageTiers, AddOnGrid, type PackageTier, type AddOn } from "@/components/ui/PackageTiers";

export const metadata = pageMetadata({
  title: "Wedding Videography — Prestige Weddings & Events",
  description:
    "Cinematic Michigan wedding videography from Prestige Weddings & Events — highlight films and full ceremony and reception footage.",
  path: "/services/videography",
});

const videoTiers: PackageTier[] = [
  {
    name: "Zilwaukee",
    items: [
      "Up to 7 hours of video coverage",
      "One videographer, two cameras",
      "Documentary-style edits of ceremony, formal dances & speeches",
    ],
  },
  {
    name: "Blue Water",
    popular: true,
    items: [
      "Up to 8 hours of video coverage",
      "One videographer, two cameras",
      "Documentary-style edits of every main event",
      "1 social-media teaser",
      "5–8 minute cinematic highlight film",
      "Coverage of one getting-ready location, up to four photo locations, and open dancing",
    ],
  },
  {
    name: "Mackinac",
    items: [
      "Up to 10 hours of video coverage",
      "Two videographers, four cameras",
      "Documentary-style edits of every main event",
      "2 social-media teasers",
      "12–15 minute cinematic highlight film",
      "Coverage of two getting-ready locations, up to four photo locations, and open dancing",
    ],
  },
];

const videoAddOns: AddOn[] = [
  {
    name: "Ceremony-only coverage",
    detail: "2.5 hours of coverage and a documentary-style edit, for couples who just want the ceremony filmed.",
  },
  {
    name: "Drone footage",
    detail: "Aerial shots for your cinematic film — available on Blue Water and Mackinac, subject to availability.",
  },
  { name: "Additional hours", detail: "Extend your videographer's time on the day." },
  {
    name: "Raw footage",
    detail: "Up to an hour of additional raw footage, cut into extra documentary-style edits.",
  },
  {
    name: "Additional shooter",
    detail: "A second videographer for up to 7 hours — useful for large bridal parties or multiple simultaneous angles.",
  },
  {
    name: "Live streaming",
    detail: "Stream the ceremony or full wedding to family and friends who can't attend, with a private link.",
  },
];

export default function VideographyPage() {
  return (
    <>
      <ServiceSchema
        name="Wedding Videography"
        description="Cinematic highlight films and full ceremony/reception footage from the Prestige Weddings & Events team."
        path="/services/videography"
      />

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
          <Breadcrumbs
            items={[
              { label: "Services", path: "/services" },
              { label: "Videography", path: "/services/videography" },
            ]}
            tone="ink"
          />
          <div className="mt-10 max-w-2xl">
            <Eyebrow tone="espresso">Videography</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Wedding Videography
            </h1>
            <p className="mt-5 text-lg text-smoke">
              Cinematic highlight films and full ceremony and reception footage, coordinated with
              your photographer and DJ so nobody&rsquo;s in each other&rsquo;s shot.
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
            Three videography packages
          </h2>
          <p className="mt-4 max-w-2xl text-ash">
            Every package includes documentary-style edits of your main events. Exact pricing
            depends on hours, crew size, and add-ons — tell us your date and venue for a quote.
          </p>
          <PackageTiers tiers={videoTiers} />
          <h3 className="mt-14 font-display text-xl font-semibold text-ink">Add to any package</h3>
          <AddOnGrid addOns={videoAddOns} />
        </div>
      </section>
    </>
  );
}

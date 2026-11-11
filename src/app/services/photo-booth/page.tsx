import { pageMetadata } from "@/lib/metadata";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTAButton } from "@/components/ui/CTAButton";
import { PackageTiers, AddOnGrid, type PackageTier, type AddOn } from "@/components/ui/PackageTiers";

export const metadata = pageMetadata({
  title: "Wedding Photo Booth — Prestige Weddings & Events",
  description:
    "Open-air and enclosed wedding photo booths from Prestige Weddings & Events, with instant prints and digital sharing, serving Michigan weddings.",
  path: "/services/photo-booth",
});

const alwaysIncluded: AddOn[] = [
  { name: "Wedding planning website", detail: "A planning form so your timeline and preferences are set before the day." },
  { name: "Free setup & tear-down", detail: "Setup 1.5 hours prior, and tear-down after, at no extra charge." },
  { name: "Open-air kiosk", detail: "A sleek open-air photo booth, not an enclosed box." },
  { name: "Unlimited sessions", detail: "Unlimited digital photo sessions for the whole night." },
  { name: "Personalized look", detail: "A personalized graphic and backdrop selection to match your wedding." },
  { name: "Attendant & digital copies", detail: "A professional booth attendant on-site, plus a digital copy of every session in color or black & white." },
];

const photoBoothTiers: PackageTier[] = [
  {
    name: "Open Dancing",
    meta: "3 hours of service",
    items: ["Booth open for open dancing"],
  },
  {
    name: "Cocktail Hour & Open Dancing",
    popular: true,
    meta: "4 hours of service",
    items: [
      "1 hour open during cocktail hour",
      "1 idle hour during dinner & formalities",
      "3 hours open during open dancing",
    ],
  },
  {
    name: "Full Day Experience",
    meta: "Up to 7 hours of service",
    items: ["Booth open for the entire wedding day"],
  },
];

const photoBoothAddOns: AddOn[] = [
  { name: "Upgrade to prints", detail: "2x6 photo-strip prints or 4x6 prints for every guest in every session." },
  { name: "Additional service time", detail: "Extend the booth's open hours." },
  { name: "Idle/closed hours", detail: "Let the booth sit quiet during dinner or formalities, then reopen for dancing." },
  { name: "Extra print of all sessions", detail: "A second printed copy of every guest session, for a full host-side collection." },
  { name: "Keepsake album", detail: "A dedicated album to collect every printed strip in one place." },
  { name: "Guestbook album", detail: "A keepsake album with room for guests to leave a note next to their photo." },
  { name: "10x10 tent rental", detail: "Covers the booth and equipment for an outdoor setup." },
  { name: "Light tubes", detail: "A set of 4 accent light tubes for the DJ setup and dance floor." },
];

export default function PhotoBoothPage() {
  return (
    <>
      <ServiceSchema
        name="Wedding Photo Booth"
        description="Open-air or enclosed photo booth rental with instant prints and digital sharing for Michigan weddings, from the Prestige Weddings & Events team."
        path="/services/photo-booth"
      />

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
          <Breadcrumbs
            items={[
              { label: "Services", path: "/services" },
              { label: "Photo Booth", path: "/services/photo-booth" },
            ]}
            tone="ink"
          />
          <div className="mt-10 max-w-2xl">
            <Eyebrow tone="espresso">Photo Booth</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Photo Booth
            </h1>
            <p className="mt-5 text-lg text-smoke">
              Open-air booths with instant prints and digital sharing, run by the same team
              handling your DJ and lighting — one setup crew, one less vendor to coordinate.
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
          <Eyebrow tone="navy">Every package includes</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            The same setup, start to finish
          </h2>
          <AddOnGrid addOns={alwaysIncluded} />
        </div>
      </section>

      <section className="border-t border-paper-line bg-paper-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <Eyebrow tone="navy">Pick your timeline</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Three photo booth packages
          </h2>
          <p className="mt-4 max-w-2xl text-ash">
            Booking just a photo booth without a bundle? It&rsquo;s also available a la carte in
            4- or 5-hour blocks. Exact pricing depends on hours and add-ons — tell us your date
            and venue for a quote.
          </p>
          <PackageTiers tiers={photoBoothTiers} />
          <h3 className="mt-14 font-display text-xl font-semibold text-ink">Add to any package</h3>
          <AddOnGrid addOns={photoBoothAddOns} />
        </div>
      </section>
    </>
  );
}

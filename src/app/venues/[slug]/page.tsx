import Image from "next/image";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import { venues, serviceAreas } from "@/lib/site-config";

export const dynamicParams = false; // only real, listed venues get a page — no arbitrary-slug crawling

export function generateStaticParams() {
  return venues.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const venue = venues.find((v) => v.slug === slug);
  if (!venue) return {};
  return pageMetadata({
    title: `${venue.name} Wedding DJ — Noah DeVoe`,
    description: `Noah DeVoe's firsthand experience DJing weddings at ${venue.name} in ${venue.city}, Michigan.`,
    path: `/venues/${venue.slug}`,
  });
}

const facts: { key: keyof typeof venues[number]; label: string }[] = [
  { key: "ceremonySetup", label: "Ceremony setup" },
  { key: "receptionSetup", label: "Reception setup" },
  { key: "djPlacement", label: "DJ placement" },
  { key: "audioNotes", label: "Audio notes" },
  { key: "loadIn", label: "Load-in" },
  { key: "parking", label: "Parking" },
  { key: "noiseRestrictions", label: "Noise & curfew" },
  { key: "danceFloorNotes", label: "Dance floor" },
];

export default async function VenuePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const venue = venues.find((v) => v.slug === slug);
  if (!venue) notFound();

  const region = serviceAreas.find((a) => a.slug === venue.regionSlug);
  const knownFacts = facts.filter((f) => venue[f.key]);

  return (
    <>
      <ServiceSchema
        name={`Wedding DJ at ${venue.name}`}
        description={`Wedding DJ and MC coverage at ${venue.name} in ${venue.city}, Michigan, from Noah DeVoe.`}
        path={`/venues/${venue.slug}`}
        areaServed={[`${venue.city}, Michigan`]}
      />

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
          <Breadcrumbs
            items={[
              { label: "Venue Guide", path: "/venues" },
              { label: venue.name, path: `/venues/${venue.slug}` },
            ]}
            tone="ink"
          />
          <LayerBadge layer="noah" tone="onInk" />

          <div className="mt-10 max-w-2xl">
            <Eyebrow tone="espresso">{venue.city}, Michigan</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {venue.name} Wedding DJ
            </h1>
            <p className="mt-5 text-lg text-smoke">{venue.blurb}</p>
            {venue.weddingsWorked && (
              <p className="mt-3 font-mono text-xs uppercase tracking-wider text-espresso-bright">
                {venue.weddingsWorked}
              </p>
            )}
            <div className="mt-8">
              <CTAButton href="/noah-devoe/pricing" variant="espresso">
                Check my availability
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {knownFacts.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <Eyebrow tone="espresso">What I already know about this room</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Not my first time here
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {knownFacts.map((f) => (
              <div key={f.key} className="rounded-sm border border-paper-line p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{f.label}</h3>
                <p className="mt-2 text-sm text-ash">{venue[f.key] as string}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {venue.photos && venue.photos.length > 0 && (
        <section className="border-t border-paper-line bg-paper-soft">
          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
            <Eyebrow tone="espresso">Real moments from this venue</Eyebrow>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {venue.photos.map((slug) => (
                <div key={slug} className="relative aspect-[4/5] overflow-hidden rounded-sm border border-paper-line">
                  <Image
                    src={`/images/portfolio/${slug}.jpg`}
                    alt={`Wedding reception at ${venue.name} in ${venue.city}, Michigan`}
                    fill
                    sizes="(min-width: 768px) 22vw, 45vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <div className="flex flex-wrap gap-4">
          {region && (
            <CTAButton href={`/service-area/${region.slug}`} variant="outline">
              {region.name} wedding DJ
            </CTAButton>
          )}
          <CTAButton href="/noah-devoe" variant="outline">
            About Noah
          </CTAButton>
        </div>
      </section>
    </>
  );
}

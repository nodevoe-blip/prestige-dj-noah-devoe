import Image from "next/image";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import { Testimonial } from "@/components/ui/Testimonial";
import { venues, serviceAreas, realWeddings } from "@/lib/site-config";

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
    description: `${venue.name} in ${venue.city}, Michigan — a Michigan wedding DJ's guide, from Noah DeVoe of Prestige Weddings & Events.`,
    path: `/venues/${venue.slug}`,
  });
}

const aboutFacts: { key: "about" | "spaces" | "publicParkingNotes" | "publishedPolicies"; label: string }[] = [
  { key: "about", label: "About this venue" },
  { key: "spaces", label: "Ceremony & reception spaces" },
  { key: "publicParkingNotes", label: "Parking" },
  { key: "publishedPolicies", label: "Published policies" },
];

const firsthandFacts: { key: "ceremonySetup" | "receptionSetup" | "djPlacement" | "audioNotes" | "loadIn" | "parking" | "noiseRestrictions" | "danceFloorNotes"; label: string }[] = [
  { key: "ceremonySetup", label: "Ceremony setup" },
  { key: "receptionSetup", label: "Reception setup" },
  { key: "djPlacement", label: "DJ placement" },
  { key: "audioNotes", label: "Audio notes" },
  { key: "loadIn", label: "Load-in" },
  { key: "parking", label: "Parking, in Noah's experience" },
  { key: "noiseRestrictions", label: "Noise & curfew" },
  { key: "danceFloorNotes", label: "Dance floor" },
];

export default async function VenuePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const venue = venues.find((v) => v.slug === slug);
  if (!venue) notFound();

  const region = serviceAreas.find((a) => a.slug === venue.regionSlug);
  const knownAbout = aboutFacts.filter((f) => venue[f.key]);
  const knownFirsthand = firsthandFacts.filter((f) => venue[f.key]);
  const relatedWeddings = realWeddings.filter((w) => w.venueSlug === venue.slug);

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
            <Eyebrow tone="espresso">{venue.city}</Eyebrow>
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

      {knownAbout.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <Eyebrow tone="navy">Researched, not experienced</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            What&rsquo;s publicly known about this venue
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {knownAbout.map((f) => (
              <div key={f.key} className="rounded-sm border border-paper-line p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{f.label}</h3>
                <p className="mt-2 text-sm text-ash">{venue[f.key] as string}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {knownFirsthand.length > 0 && (
        <section className="border-t border-paper-line bg-paper-soft">
          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
            <Eyebrow tone="espresso">From actually working here</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Not my first time in this room
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {knownFirsthand.map((f) => (
                <div key={f.key} className="rounded-sm border border-paper-line bg-paper p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{f.label}</h3>
                  <p className="mt-2 text-sm text-ash">{venue[f.key] as string}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {venue.photos && venue.photos.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
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
        </section>
      )}

      {relatedWeddings.length > 0 && (
        <section className="border-t border-paper-line bg-paper-soft">
          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
            <Eyebrow tone="espresso">A real couple, right here</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Weddings I&rsquo;ve DJ&rsquo;d at {venue.name}
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {relatedWeddings.map((w) =>
                w.testimonial ? (
                  <Testimonial
                    key={w.slug}
                    placeholder={false}
                    quote={w.testimonial.quote}
                    attribution={w.testimonial.attribution}
                  />
                ) : null,
              )}
            </div>
            <div className="mt-8">
              <CTAButton href={`/noah-devoe/weddings/${relatedWeddings[0].slug}`} variant="outline">
                See the full story
              </CTAButton>
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

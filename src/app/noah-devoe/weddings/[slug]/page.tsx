import Image from "next/image";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import { Testimonial } from "@/components/ui/Testimonial";
import { realWeddings, venues, serviceAreas } from "@/lib/site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return realWeddings.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const wedding = realWeddings.find((w) => w.slug === slug);
  if (!wedding) return {};
  const title = wedding.venueName
    ? `${wedding.couple}'s Wedding at ${wedding.venueName} — Noah DeVoe`
    : `${wedding.couple}'s Wedding — Noah DeVoe`;
  return pageMetadata({
    title,
    description: `A real Michigan wedding Noah DeVoe personally DJ'd${wedding.venueName ? ` at ${wedding.venueName}` : ""}.`,
    path: `/noah-devoe/weddings/${wedding.slug}`,
  });
}

const details: { key: "date" | "guestCount" | "musicStyle" | "notableMoments" | "danceFloorNotes"; label: string }[] = [
  { key: "date", label: "Date" },
  { key: "guestCount", label: "Guest count" },
  { key: "musicStyle", label: "Music style" },
  { key: "notableMoments", label: "Notable moments" },
  { key: "danceFloorNotes", label: "Dance floor" },
];

export default async function RealWeddingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const wedding = realWeddings.find((w) => w.slug === slug);
  if (!wedding) notFound();

  const venue = wedding.venueSlug ? venues.find((v) => v.slug === wedding.venueSlug) : undefined;
  const region = wedding.regionSlug ? serviceAreas.find((a) => a.slug === wedding.regionSlug) : undefined;
  const knownDetails = details.filter((d) => wedding[d.key]);

  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <Breadcrumbs
          items={[
            { label: "Noah DeVoe", path: "/noah-devoe" },
            { label: "Weddings", path: "/noah-devoe/weddings" },
            { label: wedding.couple, path: `/noah-devoe/weddings/${wedding.slug}` },
          ]}
          tone="ink"
        />
        <LayerBadge layer="noah" tone="onInk" />

        <div className="mt-10 max-w-2xl">
          <Eyebrow tone="espresso">A real wedding I DJ&rsquo;d</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {wedding.couple}
            {wedding.venueName && <span className="text-smoke"> — {wedding.venueName}</span>}
          </h1>
        </div>

        {knownDetails.length > 0 && (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {knownDetails.map((d) => (
              <div key={d.key} className="rounded-sm border border-ink-line bg-ink-soft p-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-smoke">{d.label}</p>
                <p className="mt-1 text-sm text-paper">{wedding[d.key] as string}</p>
              </div>
            ))}
          </div>
        )}

        {wedding.photos && wedding.photos.length > 0 && (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {wedding.photos.map((p) => (
              <div key={p} className="relative aspect-[4/5] overflow-hidden rounded-sm border border-espresso-bright">
                <Image
                  src={`/images/portfolio/${p}.jpg`}
                  alt={`${wedding.couple}'s wedding${wedding.venueName ? ` at ${wedding.venueName}` : ""}`}
                  fill
                  sizes="(min-width: 768px) 30vw, 45vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {wedding.testimonial && (
          <div className="mt-12 max-w-xl">
            <Testimonial
              placeholder={false}
              quote={wedding.testimonial.quote}
              attribution={wedding.testimonial.attribution}
              tone="onInk"
            />
          </div>
        )}

        <div className="mt-12 flex flex-wrap gap-4">
          {venue && (
            <CTAButton href={`/venues/${venue.slug}`} variant="outline-ink">
              More about {venue.name}
            </CTAButton>
          )}
          {region && (
            <CTAButton href={`/service-area/${region.slug}`} variant="outline-ink">
              {region.name} wedding DJ
            </CTAButton>
          )}
          <CTAButton href="/noah-devoe/pricing" variant="espresso">
            Check my availability
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

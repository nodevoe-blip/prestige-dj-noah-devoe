import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { venues, serviceAreas } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Michigan Wedding Venue Guide — Noah DeVoe",
  description:
    "Real, firsthand notes on Michigan wedding venues Noah DeVoe has personally DJ'd — ceremony and reception setup, load-in, audio, and logistics.",
  path: "/venues",
  // Flip this off once at least a few venues below have real content —
  // an empty guide isn't worth indexing yet.
  noindex: venues.length === 0,
});

export default function VenuesIndexPage() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <Breadcrumbs items={[{ label: "Venue Guide", path: "/venues" }]} tone="ink" />
        <LayerBadge layer="noah" tone="onInk" />

        <div className="mt-10 max-w-2xl">
          <Eyebrow tone="espresso">Firsthand, not generic</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Michigan Wedding Venue Guide
          </h1>
          <p className="mt-5 text-lg text-smoke">
            Real notes from weddings I&rsquo;ve actually DJ&rsquo;d — ceremony and reception
            setup, load-in, audio quirks, dance floor observations. Not a directory of venues I&rsquo;ve
            never seen.
          </p>
        </div>

        {venues.length === 0 ? (
          <p className="mt-12 max-w-2xl text-sm text-smoke">
            This guide is being built one real venue at a time — check back soon, or see the{" "}
            <Link href="/noah-devoe/weddings" className="text-espresso-bright underline decoration-dotted underline-offset-2">
              weddings I&rsquo;ve personally DJ&rsquo;d
            </Link>{" "}
            in the meantime.
          </p>
        ) : (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {venues.map((v) => {
              const region = serviceAreas.find((a) => a.slug === v.regionSlug);
              return (
                <Link
                  key={v.slug}
                  href={`/venues/${v.slug}`}
                  className="rounded-sm border border-ink-line bg-ink-soft p-6 transition-colors hover:border-espresso-bright"
                >
                  {region && (
                    <p className="font-mono text-[11px] uppercase tracking-wider text-espresso-bright">
                      {region.name}
                    </p>
                  )}
                  <h2 className="mt-1 font-display text-xl font-semibold text-paper">{v.name}</h2>
                  <p className="mt-2 text-sm text-smoke">{v.blurb}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

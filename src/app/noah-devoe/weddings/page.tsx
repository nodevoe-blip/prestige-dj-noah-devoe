import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata = pageMetadata({
  title: "Weddings I've DJ'd — Noah DeVoe",
  description:
    "A portfolio of Michigan weddings Noah DeVoe has personally DJ'd — real couples, real venues, shared with permission.",
  path: "/noah-devoe/weddings",
});

const featured = [
  {
    couple: "Casey & Michael",
    photos: ["casey-michael-01", "casey-michael-02", "casey-michael-03", "casey-michael-04", "casey-michael-05"],
  },
  {
    couple: "The Beckers",
    venue: "Danceasaur Brewery",
    photos: ["becker-danceasaur-brewery"],
  },
];

const gallery = [
  "reception-01",
  "reception-02",
  "reception-03",
  "reception-04",
  "reception-05",
  "wedding-01",
  "wedding-02",
  "wedding-03",
  "wedding-04",
  "wedding-05",
  "wedding-06",
  "wedding-07",
  "wedding-08",
  "wedding-09",
  "wedding-10",
  "wedding-11",
  "wedding-12",
  "wedding-13",
  "wedding-14",
  "wedding-15",
  "wedding-16",
  "wedding-17",
  "wedding-18",
  "wedding-19",
  "wedding-20",
  "wedding-21",
  "wedding-22",
  "wedding-23",
  "wedding-24",
];

export default function WeddingsPage() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <Breadcrumbs
          items={[
            { label: "Noah DeVoe", path: "/noah-devoe" },
            { label: "Weddings", path: "/noah-devoe/weddings" },
          ]}
          tone="ink"
        />
        <LayerBadge layer="noah" tone="onInk" />

        <div className="mt-10 max-w-2xl">
          <Eyebrow tone="espresso">A working portfolio</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Weddings I&rsquo;ve DJ&rsquo;d
          </h1>
          <p className="mt-5 text-lg text-smoke">
            Every photo below is from a wedding I personally DJ&rsquo;d, shared with the
            couple&rsquo;s permission — not stock photography. This is my own portfolio, distinct
            from the wider Prestige team&rsquo;s work.
          </p>
        </div>

        {featured.map((f) => (
          <div key={f.couple} className="mt-14">
            <p className="font-mono text-xs uppercase tracking-wider text-espresso-bright">
              {f.couple}
              {f.venue && <span className="text-smoke"> — {f.venue}</span>}
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {f.photos.map((slug) => (
                <div key={slug} className="relative aspect-[4/5] overflow-hidden rounded-sm border border-espresso-bright">
                  <Image
                    src={`/images/portfolio/${slug}.jpg`}
                    alt={`${f.couple}'s wedding${f.venue ? ` at ${f.venue}` : ""}`}
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16">
          <p className="font-mono text-xs uppercase tracking-wider text-espresso-bright">
            More real receptions
          </p>
          <div className="mt-5 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {gallery.map((slug) => (
              <div key={slug} className="relative aspect-square overflow-hidden rounded-sm border border-ink-line">
                <Image
                  src={`/images/portfolio/${slug}.jpg`}
                  alt="Michigan wedding reception Noah DeVoe DJ'd"
                  fill
                  sizes="(min-width: 1024px) 15vw, (min-width: 640px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <CTAButton href="/noah-devoe/mixes" variant="outline-ink">
            Hear what these sounded like
          </CTAButton>
          <CTAButton href="/noah-devoe/pricing" variant="espresso">
            Check my availability
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

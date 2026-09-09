import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import { team } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Grand Rapids Wedding DJ — Prestige Weddings & Events",
  description:
    "Prestige Weddings & Events' Grand Rapids team, led by co-owner Brandon — 6 local wedding DJs serving Grand Rapids, Rockford, and the Grand River valley.",
  path: "/service-area/grand-rapids",
});

const grTeam = team.filter((m) => m.market === "Grand Rapids");

export default function GrandRapidsPage() {
  return (
    <>
      <ServiceSchema
        name="Grand Rapids Wedding DJ"
        description="Wedding DJ and MC coverage across Grand Rapids and West Michigan, from Prestige Weddings & Events' local Grand Rapids team."
        path="/service-area/grand-rapids"
        areaServed={["Grand Rapids, Michigan"]}
      />

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
          <Breadcrumbs
            items={[
              { label: "Service Areas", path: "/service-area" },
              { label: "Grand Rapids", path: "/service-area/grand-rapids" },
            ]}
            tone="ink"
          />
          <LayerBadge layer="prestige" tone="onInk" />

          <div className="mt-10 max-w-2xl">
            <Eyebrow tone="navy">West Michigan</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Grand Rapids Wedding DJ
            </h1>
            <p className="mt-5 text-lg text-smoke">
              Prestige runs a dedicated {grTeam.length}-DJ team based in Grand Rapids — not a
              Detroit DJ driving out for the day. It&rsquo;s led by local co-owner Brandon, who
              also DJs Central Michigan University&rsquo;s football and basketball games.
            </p>
            <div className="mt-8">
              <CTAButton href="/wedding-dj#check-availability" variant="navy">
                Check availability
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <Eyebrow tone="navy">The Grand Rapids team</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          Meet your local DJs
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {grTeam.map((m) => (
            <div key={m.slug}>
              <div className="relative aspect-square overflow-hidden rounded-sm border border-paper-line">
                <Image
                  src={m.image}
                  alt={`${m.name}, ${m.title}`}
                  fill
                  sizes="(min-width: 768px) 30vw, 45vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 font-display text-base font-semibold text-ink">{m.name}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ash">{m.title}</p>
              <p className="mt-2 text-sm text-ash">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-paper-line bg-paper-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <Eyebrow tone="navy">Coming soon to this page</Eyebrow>
          <p className="max-w-2xl text-ash">
            A full local guide — real Grand Rapids and Grand River valley venues, load-in
            logistics, and neighborhood-by-neighborhood detail, in the same style as our{" "}
            <a href="/service-area/oakland-county" className="text-navy underline decoration-dotted underline-offset-2">
              Oakland County page
            </a>
            . The team above is already booking West Michigan weddings today.
          </p>
        </div>
      </section>
    </>
  );
}

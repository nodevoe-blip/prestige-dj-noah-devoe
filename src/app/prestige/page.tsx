import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import { services, founder, team } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Our Story — Prestige Weddings & Events",
  description:
    "Prestige Weddings & Events was founded by Mike and has grown into a 25-DJ Michigan wedding team across Detroit and Grand Rapids, including Detroit co-owner DJ Noah DeVoe.",
  path: "/prestige",
});

export default function PrestigeAboutPage() {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
          <Breadcrumbs items={[{ label: "About Prestige", path: "/prestige" }]} tone="ink" />
          <LayerBadge layer="prestige" tone="onInk" />

          <div className="mt-10 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <Eyebrow tone="brass">Our story</Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                From one DJ to a {team.length}-DJ Michigan wedding team
              </h1>
              <p className="mt-5 text-lg text-smoke">
                Prestige was founded by {founder.name}, who built the company&rsquo;s
                customized-feel, service-first approach from the ground up. It&rsquo;s since grown
                into a full team across Metro Detroit and Grand Rapids — led locally by co-owners{" "}
                Noah DeVoe in Detroit and Brandon in Grand Rapids — covering DJ, photography,
                videography, coordination, photo booth, and lighting.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href="/prestige/team" variant="brass">
                  Meet the team
                </CTAButton>
                <CTAButton href="/noah-devoe" variant="outline-ink">
                  Meet co-owner Noah
                </CTAButton>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-brass">
              <Image
                src="/images/team/mike.webp"
                alt={`${founder.name}, ${founder.jobTitle}`}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
              <p className="absolute bottom-3 left-3 rounded-sm bg-ink/80 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-smoke">
                {founder.name} — {founder.jobTitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <Eyebrow tone="brass">What we run</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          One team, six services
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-paper-line bg-paper-line sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => (
            <a key={s.slug} href={s.path} className="bg-paper p-6 hover:bg-paper-soft">
              <h3 className="font-display text-lg font-semibold text-ink">{s.name}</h3>
              <p className="mt-2 text-sm text-ash">{s.blurb}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

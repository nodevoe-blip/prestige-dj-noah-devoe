import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { serviceAreas, services, team, stats } from "@/lib/site-config";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata = pageMetadata({
  title: "Noah DeVoe | Michigan Wedding DJ & MC | Prestige Weddings",
  description:
    "Noah DeVoe is a Michigan wedding DJ & MC who has personally DJ'd 600+ weddings. Co-owner of Prestige Weddings & Events, serving Metro Detroit, Oakland County, Grand Rapids, and beyond.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Hero — Noah first. Prestige is introduced as who's behind him, not a co-equal fork. */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-16 sm:px-8 sm:pt-24 md:pt-28">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <Eyebrow index={`${stats.yearsInBusiness} YEARS OF MICHIGAN WEDDINGS`} tone="espresso">
                Michigan Wedding DJ &amp; MC
              </Eyebrow>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
                Noah DeVoe
              </h1>
              <p className="mt-6 max-w-lg text-lg text-smoke">
                I&rsquo;ve personally DJ&rsquo;d {stats.weddingsDjdByNoah} Michigan weddings — ceremony
                through last dance. I also co-own Prestige Weddings &amp; Events, so if my calendar
                doesn&rsquo;t line up with your date, I can still get you a DJ trained to the same
                standard.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href="/noah-devoe/pricing" variant="espresso">
                  Check my availability
                </CTAButton>
                <CTAButton href="/noah-devoe#mixes" variant="outline-ink">
                  Hear my mixes
                </CTAButton>
              </div>

              <div className="mt-10 rounded-sm border border-ink-line bg-ink-soft p-5">
                <p className="text-sm text-smoke">
                  Date already spoken for, or planning more than a DJ? I co-own{" "}
                  <Link href="/wedding-dj" className="text-navy-bright underline decoration-dotted underline-offset-2">
                    Prestige Weddings &amp; Events
                  </Link>{" "}
                  — {team.length} DJs plus photo, video, coordination, photo booth &amp; lighting
                  across Michigan.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-espresso-bright">
              <Image
                src="/images/noah/noah-portrait.jpg"
                alt="Noah DeVoe, Michigan wedding DJ and MC"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip — Noah's own number leads */}
      <section className="border-b border-paper-line bg-paper-soft">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-5 py-10 sm:px-8 md:grid-cols-4">
          {[
            { label: "Weddings DJ'd by Noah", value: stats.weddingsDjdByNoah },
            { label: "Years DJing Michigan weddings", value: stats.yearsInBusiness },
            { label: "Prestige team DJs", value: `${team.length}` },
            { label: "Michigan regions covered", value: `${serviceAreas.length}` },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-ink sm:text-4xl">{stat.value}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ash">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Noah's own work */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <Eyebrow index="01" tone="espresso">
          See &amp; hear it yourself
        </Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          Real mixes, real weddings, not a sales pitch
        </h2>
        <p className="mt-4 max-w-2xl text-ash">
          Most Michigan wedding DJ sites ask you to take their word for it. Here&rsquo;s mine, on
          record.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-paper-line bg-paper-line sm:grid-cols-3">
          <Link href="/noah-devoe" className="group bg-paper p-6 transition-colors hover:bg-ink">
            <h3 className="font-display text-lg font-semibold text-ink group-hover:text-paper">
              My story
            </h3>
            <p className="mt-2 text-sm text-ash group-hover:text-smoke">
              How I ended up reading a room for a living.
            </p>
          </Link>
          <Link href="/noah-devoe/mixes" className="group bg-paper p-6 transition-colors hover:bg-ink">
            <h3 className="font-display text-lg font-semibold text-ink group-hover:text-paper">
              My mixes
            </h3>
            <p className="mt-2 text-sm text-ash group-hover:text-smoke">
              Unedited clips from actual receptions.
            </p>
          </Link>
          <Link href="/noah-devoe/weddings" className="group bg-paper p-6 transition-colors hover:bg-ink">
            <h3 className="font-display text-lg font-semibold text-ink group-hover:text-paper">
              My portfolio
            </h3>
            <p className="mt-2 text-sm text-ash group-hover:text-smoke">
              Real couples, real venues I&rsquo;ve personally DJ&rsquo;d.
            </p>
          </Link>
        </div>
      </section>

      {/* Prestige — secondary, framed as "the team behind me" */}
      <section className="border-t border-paper-line bg-paper-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <Eyebrow index="02" tone="navy">
            The team behind me
          </Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Prestige Weddings &amp; Events covers everything else
          </h2>
          <p className="mt-4 max-w-2xl text-ash">
            {team.length} wedding DJs, plus photography, videography, coordination, photo booth, and
            lighting — the company I co-own, for whenever you need more than just me.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-paper-line bg-paper-line sm:grid-cols-2 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={s.path}
                className="group bg-paper p-6 transition-colors hover:bg-ink"
              >
                <h3 className="font-display text-lg font-semibold text-ink group-hover:text-paper">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-ash group-hover:text-smoke">{s.blurb}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/wedding-dj" variant="outline">
              Meet the full team
            </CTAButton>
            <CTAButton href="/packages" variant="outline">
              See bundled packages
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <Eyebrow index="03" tone="navy">
          Where we work
        </Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          Based in Oakland County, booked across Michigan.
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {serviceAreas.map((a) => (
            <Link
              key={a.slug}
              href={`/service-area/${a.slug}`}
              className="rounded-sm border border-paper-line bg-paper px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-navy hover:text-navy"
            >
              {a.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA — Noah primary, team secondary */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-20 text-center sm:px-8">
          <h2 className="font-accent text-4xl italic sm:text-5xl">
            Tell me your date. I&rsquo;ll tell you who&rsquo;s free.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-smoke">
            Me, if I&rsquo;m open — or the right DJ from the Prestige team if I&rsquo;m not.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="/noah-devoe/pricing" variant="espresso">
              Check my availability
            </CTAButton>
            <CTAButton href="/wedding-dj#check-availability" variant="outline-ink">
              Check the full team
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

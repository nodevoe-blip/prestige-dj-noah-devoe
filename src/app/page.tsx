import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { serviceAreas, services, team, stats } from "@/lib/site-config";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata = pageMetadata({
  title: "Prestige Weddings & Events — Michigan Wedding DJ, Photo & Video",
  description:
    "Prestige Weddings & Events is a Michigan wedding DJ, photography, videography, and coordination team co-owned by DJ Noah DeVoe. Book the full team, or book Noah specifically.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Hero — the fork. This is the one page that has to serve both audiences at once. */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-16 sm:px-8 sm:pt-24 md:pt-28">
          <Eyebrow index="SIDE A / SIDE B">Two ways onto the dance floor</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            One Michigan wedding team.{" "}
            <span className="text-navy">Book the whole crew</span>, or{" "}
            <span className="text-espresso-bright">book Noah</span> himself.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-smoke">
            Prestige Weddings &amp; Events is a full Michigan wedding team — DJs, photographers,
            videographers, coordinators, photo booth, and lighting. Noah DeVoe co-owns Prestige and
            still personally DJs a limited number of weddings each year. Pick whichever path fits
            what you&rsquo;re planning.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Link
              href="/wedding-dj"
              className="group relative overflow-hidden rounded-sm border border-ink-line bg-ink-soft p-8 transition-colors hover:border-navy"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-navy">
                The Prestige team
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                Book Michigan&rsquo;s full-service wedding team
              </h2>
              <p className="mt-3 text-sm text-smoke">
                A team of wedding DJs, plus photo, video, coordination, photo booth &amp; lighting.
                Best if you want one team handling more than just the DJ booth — or Noah&rsquo;s
                date is already booked.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-navy group-hover:text-navy-bright">
                See the DJ team &rarr;
              </span>
            </Link>

            <Link
              href="/noah-devoe"
              className="group relative overflow-hidden rounded-sm border border-ink-line bg-ink-soft p-8 transition-colors hover:border-espresso-bright"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-espresso-bright">
                Noah, personally
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                Book Noah DeVoe for your wedding
              </h2>
              <p className="mt-3 text-sm text-smoke">
                Noah&rsquo;s own mixes, his own portfolio of weddings, and his own booking calendar.
                Best if you specifically want Noah behind the booth — availability is limited.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-espresso-bright group-hover:text-espresso">
                Hear his mixes &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-paper-line bg-paper-soft">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-5 py-10 sm:px-8 md:grid-cols-4">
          {[
            { label: "Weddings served", value: stats.weddingsServedCompanyWide },
            { label: "Team members", value: `${team.length}` },
            { label: "Years in business", value: stats.yearsInBusiness },
            { label: "Service regions", value: `${serviceAreas.length}` },
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

      {/* Services overview */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <Eyebrow index="01">What Prestige covers</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          Every vendor a Michigan wedding actually needs, from one booked-solid team.
        </h2>
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
        <div className="mt-8">
          <CTAButton href="/packages" variant="outline">
            See bundled packages
          </CTAButton>
        </div>
      </section>

      {/* Service areas */}
      <section className="border-t border-paper-line bg-paper-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <Eyebrow index="02">Where we work</Eyebrow>
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-20 text-center sm:px-8">
          <h2 className="font-accent text-4xl italic sm:text-5xl">
            Tell us your date. We&rsquo;ll tell you who&rsquo;s free.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-smoke">
            Whether that&rsquo;s the full Prestige team or Noah himself.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="/wedding-dj#check-availability" variant="navy">
              Check team availability
            </CTAButton>
            <CTAButton href="/noah-devoe/pricing" variant="outline-ink">
              Check Noah&rsquo;s availability
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

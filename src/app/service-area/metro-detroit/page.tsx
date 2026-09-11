import { pageMetadata } from "@/lib/metadata";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FaqSchema } from "@/components/schema/FaqSchema";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import { Testimonial } from "@/components/ui/Testimonial";
import { venues, realWeddings, prestige, stats } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Metro Detroit Wedding DJ — Noah DeVoe",
  description:
    "Noah DeVoe and the Prestige Weddings & Events team DJ weddings across Metro Detroit — Shelby Township, downtown Detroit, Eastern Market, Fenton, and Brighton.",
  path: "/service-area/metro-detroit",
});

const metroDetroitVenues = venues.filter((v) => v.regionSlug === "metro-detroit");
const metroDetroitWeddings = realWeddings.filter((w) => w.regionSlug === "metro-detroit");

const faqs = [
  {
    question: "Do you DJ weddings outside the city of Detroit itself?",
    answer:
      "Yes — \"Metro Detroit\" here covers a wide radius: Shelby Township, Eastern Market, and out toward Fenton and Brighton, not just downtown.",
  },
  {
    question: "How much does a Metro Detroit wedding DJ cost?",
    answer: `Prestige DJ packages start at ${stats.teamDjStartingPrice}, depending on venue, hours, and add-ons. Historic and industrial venues in this region sometimes have their own load-in or insurance requirements, which we handle as part of planning.`,
  },
  {
    question: "Can Noah DJ our Metro Detroit wedding personally?",
    answer:
      "Sometimes, yes — check his availability directly. Otherwise, every Prestige DJ trained under the same standard covers the rest of the region.",
  },
];

export default function MetroDetroitPage() {
  return (
    <>
      <ServiceSchema
        name="Metro Detroit Wedding DJ"
        description="Wedding DJ and MC coverage across Metro Detroit, from Noah DeVoe and the Prestige Weddings & Events team."
        path="/service-area/metro-detroit"
        areaServed={["Metro Detroit, Michigan"]}
      />
      <FaqSchema items={faqs} />

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
          <Breadcrumbs
            items={[
              { label: "Service Areas", path: "/service-area" },
              { label: "Metro Detroit", path: "/service-area/metro-detroit" },
            ]}
            tone="ink"
          />
          <LayerBadge layer="prestige" tone="onInk" />

          <div className="mt-10 max-w-2xl">
            <Eyebrow tone="navy">Southeast Michigan</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Metro Detroit Wedding DJ
            </h1>
            <p className="mt-5 text-lg text-smoke">
              From a converted automotive landmark in Shelby Township to a barrel-lined distillery
              floor in Eastern Market, Metro Detroit&rsquo;s wedding venues don&rsquo;t share a
              single style — the team that DJs them shouldn&rsquo;t either.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/wedding-dj#check-availability" variant="navy">
                Check availability
              </CTAButton>
              <CTAButton href="/noah-devoe/pricing" variant="outline-ink">
                Ask for Noah
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <Eyebrow tone="navy">Venues we know firsthand</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          Real Metro Detroit venues, not a directory
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metroDetroitVenues.map((v) => (
            <a
              key={v.slug}
              href={`/venues/${v.slug}`}
              className="rounded-sm border border-paper-line p-6 transition-colors hover:border-navy"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-navy">{v.city}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink">{v.name}</h3>
              <p className="mt-2 text-sm text-ash">{v.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      {metroDetroitWeddings.length > 0 && (
        <section className="border-t border-paper-line bg-paper-soft">
          <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
            <Eyebrow tone="navy">Real couples</Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Metro Detroit weddings we&rsquo;ve been part of
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {metroDetroitWeddings
                .filter((w) => w.testimonial)
                .map((w) => (
                  <Testimonial
                    key={w.slug}
                    placeholder={false}
                    quote={w.testimonial!.quote}
                    attribution={`${w.couple}${w.venueName ? ` — ${w.venueName}` : ""}`}
                  />
                ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <Eyebrow tone="navy">Metro Detroit FAQ</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          Common questions from local couples
        </h2>
        <div className="mt-10 divide-y divide-paper-line border-y border-paper-line">
          {faqs.map((f) => (
            <div key={f.question} className="py-6">
              <h3 className="font-display text-lg font-semibold text-ink">{f.question}</h3>
              <p className="mt-2 max-w-2xl text-sm text-ash">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <Eyebrow tone="navy">Next step</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Planning a Metro Detroit wedding?
              </h2>
              <p className="mt-4 max-w-md text-smoke">
                Tell us your venue and date — we&rsquo;ll tell you who&rsquo;s free.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href="/wedding-dj#check-availability" variant="navy">
                  Check team availability
                </CTAButton>
                <CTAButton href="/noah-devoe/pricing" variant="outline-ink">
                  Ask for Noah
                </CTAButton>
              </div>
            </div>
            <div className="rounded-sm border border-ink-line bg-ink-soft p-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-smoke">
                Reach the team directly
              </p>
              <p className="mt-4 font-display text-2xl font-semibold">
                <a href={`tel:${prestige.telephone}`} className="hover:text-navy-bright">
                  {prestige.telephone}
                </a>
              </p>
              <p className="mt-1">
                <a href={`mailto:${prestige.email}`} className="text-smoke hover:text-navy-bright">
                  {prestige.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

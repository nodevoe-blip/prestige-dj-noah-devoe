import { pageMetadata } from "@/lib/metadata";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FaqSchema } from "@/components/schema/FaqSchema";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Testimonial } from "@/components/ui/Testimonial";
import { prestige, stats } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Oakland County Wedding DJ — Prestige Weddings & Events",
  description:
    "Prestige Weddings & Events is an Oakland County wedding DJ team based in the county, covering Birmingham, Rochester, Bloomfield Hills, Clarkston, Novi & Troy — plus co-owner Noah DeVoe personally.",
  path: "/service-area/oakland-county",
});

const faqs = [
  {
    question: "Do you DJ weddings outside downtown Birmingham and Rochester?",
    answer:
      "Yes — the team regularly covers the whole county, from Clarkston orchard venues in the north to Novi and Troy event centers along I-75/M-5 in the south.",
  },
  {
    question: "How much does an Oakland County wedding DJ cost?",
    answer:
      `Prestige DJ packages start at ${stats.teamDjStartingPrice}, depending on venue, hours, and add-ons like uplighting. Estate and country-club venues sometimes require additional insurance or load-in coordination, which we handle as part of planning.`,
  },
  {
    question: "Can Noah DJ our Oakland County wedding personally?",
    answer:
      "Often, yes — Noah is based in the county and prioritizes local dates when his calendar allows. Check his availability directly, or the wider Prestige team covers any date he can't.",
  },
];

export default function OaklandCountyPage() {
  return (
    <>
      <ServiceSchema
        name="Oakland County Wedding DJ"
        description="Wedding DJ, MC, and reception coverage across Oakland County, Michigan, from the Prestige Weddings & Events team."
        path="/service-area/oakland-county"
        areaServed={["Oakland County, Michigan"]}
      />
      <FaqSchema items={faqs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
          <Breadcrumbs
            items={[
              { label: "Service Areas", path: "/service-area" },
              { label: "Oakland County", path: "/service-area/oakland-county" },
            ]}
            tone="ink"
          />
          <LayerBadge layer="prestige" tone="onInk" />

          <div className="mt-10 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <Eyebrow index="HOME TURF" tone="brass">
                Metro Detroit / Northern Woodward Corridor
              </Eyebrow>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
                Oakland County Wedding DJ
              </h1>
              <p className="mt-6 max-w-lg text-lg text-smoke">
                Prestige is based in Oakland County — this is the area we know best, from
                Birmingham ballrooms to Clarkston barns. Co-owner Noah DeVoe personally covers a
                share of local dates himself.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href="/wedding-dj#check-availability" variant="brass">
                  Check availability
                </CTAButton>
                <CTAButton href="/noah-devoe" variant="outline-ink">
                  Ask for Noah
                </CTAButton>
              </div>
            </div>
            <PhotoPlaceholder
              caption="Reception dance floor, Oakland County estate venue"
              aspect="aspect-[4/5]"
              tone="brass"
            />
          </div>
        </div>
      </section>

      {/* Local specifics */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <Eyebrow index="01" tone="brass">
          Where we actually work
        </Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          Every corner of the county, not just one zip code
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              "Birmingham & Bloomfield Hills",
              "Formal ballroom and country-club receptions along the Woodward corridor — tight load-in windows, dressier MC style.",
            ],
            [
              "Rochester & Rochester Hills",
              "Home base — our office is on Hamlin Rd in Rochester Hills, so this is the shortest load-in and the most local availability on the calendar.",
            ],
            [
              "Clarkston",
              "Barn and orchard venues north of the county — rural power access and a rain-plan backup are standard parts of planning here.",
            ],
            [
              "Novi & Troy",
              "Modern event centers and hotel ballrooms near I-75/M-5, usually higher guest counts and later curfews.",
            ],
            [
              "Lake Orion & Oxford",
              "Lakeside and rural-estate venues in the county's northeast — Addison Oaks is out this way.",
            ],
            [
              "Royal Oak & Ferndale",
              "Smaller, design-forward venues and lofts — compact DJ footprint, often a later-night dance-floor focus.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="rounded-sm border border-paper-line p-6">
              <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-ash">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Logistics */}
      <section className="border-t border-paper-line bg-paper-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <Eyebrow index="02" tone="brass">
            Planning notes specific to this county
          </Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            The stuff generic city pages skip
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            <li className="rounded-sm border border-paper-line bg-paper p-6">
              <h3 className="font-display text-lg font-semibold text-ink">Tent &amp; rain planning</h3>
              <p className="mt-2 text-sm text-ash">
                A meaningful share of Oakland County weddings — especially in Clarkston and Rochester
                — involve an outdoor ceremony with an indoor or tented backup. We plan sound and
                power for both from the start, not as a same-day scramble.
              </p>
            </li>
            <li className="rounded-sm border border-paper-line bg-paper p-6">
              <h3 className="font-display text-lg font-semibold text-ink">Noise &amp; curfew variance</h3>
              <p className="mt-2 text-sm text-ash">
                Sound curfews and outdoor-amplification rules vary by municipality across the
                county. We confirm your venue&rsquo;s specific policy during planning so the last
                song doesn&rsquo;t get cut early.
              </p>
            </li>
            <li className="rounded-sm border border-paper-line bg-paper p-6">
              <h3 className="font-display text-lg font-semibold text-ink">Load-in at estate &amp; club venues</h3>
              <p className="mt-2 text-sm text-ash">
                Country club and historic-estate venues around Birmingham and Bloomfield Hills
                often require certificates of insurance and vendor check-in ahead of time — we
                handle that paperwork directly with your venue coordinator.
              </p>
            </li>
            <li className="rounded-sm border border-paper-line bg-paper p-6">
              <h3 className="font-display text-lg font-semibold text-ink">Local travel &amp; setup time</h3>
              <p className="mt-2 text-sm text-ash">
                Based on Hamlin Rd in Rochester Hills, most of Oakland County is under a
                30-minute drive for the team — meaning earlier arrival windows and less risk of
                traffic eating into setup time.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <Eyebrow index="03" tone="brass">
          Local couples
        </Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          Oakland County weddings we&rsquo;ve been part of
        </h2>
        <div className="mt-10 max-w-xl">
          <Testimonial
            placeholder={false}
            quote="Noah was a phenomenal DJ at our wedding!! He goes above and beyond to understand your vision for the day — he met with us for over an hour to go over every detail and understand our music taste. He's an awesome MC, all the events of the day went so smoothly and the dancing part of the evening was perfect!!"
            attribution="Lana & Brian — Addison Oaks, Oxford Township"
          />
        </div>
        <p className="mt-4 max-w-2xl text-xs text-ash">
          More Oakland County reviews are on the way — see{" "}
          <a href="/noah-devoe" className="text-wine-bright underline decoration-dotted underline-offset-2">
            Noah&rsquo;s full review list
          </a>{" "}
          for weddings across Michigan.
        </p>
      </section>

      {/* FAQ */}
      <section className="border-t border-paper-line bg-paper-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <Eyebrow index="04" tone="brass">
            Oakland County FAQ
          </Eyebrow>
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <Eyebrow index="05" tone="brass">
                Next step
              </Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Planning an Oakland County wedding?
              </h2>
              <p className="mt-4 max-w-md text-smoke">
                Tell us your venue and date — we&rsquo;ll tell you who on the team is free, or
                whether Noah himself can take it.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href="/wedding-dj#check-availability" variant="brass">
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
                <a href={`tel:${prestige.telephone}`} className="hover:text-brass">
                  {prestige.telephone}
                </a>
              </p>
              <p className="mt-1">
                <a href={`mailto:${prestige.email}`} className="text-smoke hover:text-brass">
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

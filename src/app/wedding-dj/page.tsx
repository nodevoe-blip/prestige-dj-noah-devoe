import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { FaqSchema } from "@/components/schema/FaqSchema";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Testimonial } from "@/components/ui/Testimonial";
import { prestige, serviceAreas, team, founder, stats } from "@/lib/site-config";

const teamPreview = [
  team.find((m) => m.slug === "noah")!,
  team.find((m) => m.slug === "mike")!,
  team.find((m) => m.slug === "brandon-m")!,
  team.find((m) => m.slug === "spencer")!,
];

export const metadata = pageMetadata({
  title: "Michigan Wedding DJ — Prestige Weddings & Events",
  description:
    "Prestige Weddings & Events fields a full team of Michigan wedding DJs for ceremony, cocktail hour, and reception. Co-owned by DJ Noah DeVoe. Serving Metro Detroit, Oakland County, Grand Rapids, and beyond.",
  path: "/wedding-dj",
});

const faqs = [
  {
    question: "How much does a Michigan wedding DJ cost?",
    answer:
      `Prestige wedding DJ packages start at ${stats.teamDjStartingPrice}, with the final price depending on hours, MC involvement, and add-ons like uplighting or a photo booth. You'll get an exact quote after telling us your date and venue.`,
  },
  {
    question: "Can we specifically book Noah?",
    answer:
      "Yes, for a limited number of dates each season. Noah DeVoe co-owns Prestige and still personally DJs select weddings. If his calendar is open for your date, you can book him directly — otherwise, every other Prestige DJ is trained to the same standard.",
  },
  {
    question: "How far in advance should we book a Michigan wedding DJ?",
    answer:
      "For peak Michigan wedding season (May through October), 9–12 months out is typical for popular dates and venues. Off-season and weekday weddings often have more flexibility.",
  },
  {
    question: "Do you provide ceremony sound, not just reception music?",
    answer:
      "Yes — every Prestige wedding DJ package includes ceremony and cocktail-hour sound, not just the reception dance floor.",
  },
];

export default function WeddingDjPage() {
  return (
    <>
      <ServiceSchema
        name="Wedding DJ & MC"
        description="Full-service wedding DJ and MC coverage — ceremony, cocktail hour, and reception — from the Prestige Weddings & Events team."
        path="/wedding-dj"
        areaServed={serviceAreas.map((a) => `${a.name}, Michigan`)}
      />
      <FaqSchema items={faqs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
          <Breadcrumbs items={[{ label: "Wedding DJ", path: "/wedding-dj" }]} tone="ink" />
          <LayerBadge layer="prestige" tone="onInk" />

          <div className="mt-10 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <Eyebrow index={`TEAM OF ${team.length}`} tone="navy">
                Michigan Wedding DJ Team
              </Eyebrow>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
                A Michigan wedding DJ team that&rsquo;s never double-booked
              </h1>
              <p className="mt-6 max-w-lg text-lg text-smoke">
                Prestige Weddings &amp; Events runs {team.length} professional wedding DJs across
                Metro Detroit and Grand Rapids — including Detroit co-owner DJ Noah DeVoe — all
                trained to the same standard.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href="#check-availability" variant="navy">
                  Check availability
                </CTAButton>
                <CTAButton href="/packages" variant="outline-ink">
                  See packages &amp; pricing
                </CTAButton>
              </div>
            </div>
            <PhotoPlaceholder
              caption="The Prestige DJ team, group shot at a recent reception"
              aspect="aspect-[4/5]"
              tone="navy"
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-paper-line bg-paper-soft">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-5 py-10 sm:px-8 md:grid-cols-4">
          {[
            { label: "Wedding DJs on the team", value: `${team.length}` },
            { label: "Weddings DJ'd", value: stats.weddingsServedCompanyWide },
            { label: "Michigan regions served", value: `${serviceAreas.length}` },
            { label: "Years running", value: stats.yearsInBusiness },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-bold text-ink sm:text-4xl">{s.value}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ash">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team teaser */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow index="01" tone="navy">
              Not a one-person shop
            </Eyebrow>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
              Meet the DJs behind the booth
            </h2>
          </div>
          <a href="/prestige/team" className="font-mono text-xs uppercase tracking-wider text-navy hover:text-navy-bright">
            Full team &rarr;
          </a>
        </div>
        <p className="mt-4 max-w-2xl text-ash">
          Founded by {founder.name}, with{" "}
          <a href="/noah-devoe" className="text-espresso-bright underline decoration-dotted underline-offset-2">
            Noah DeVoe
          </a>{" "}
          co-owning the Detroit market and Brandon co-owning Grand Rapids — every DJ on the team
          runs the same reading-the-room approach, the same equipment standard, the same planning
          process.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {teamPreview.map((m) => (
            <div key={m.slug}>
              <div className="relative aspect-square overflow-hidden rounded-sm border border-paper-line">
                <Image
                  src={m.image}
                  alt={`${m.name}, ${m.title}`}
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 font-display text-sm font-semibold text-ink">{m.name}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-ash">{m.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="border-t border-paper-line bg-paper-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <Eyebrow index="02" tone="navy">
            What&rsquo;s included
          </Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Every package covers the whole day, not just the dance floor
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-paper-line bg-paper-line sm:grid-cols-2 md:grid-cols-3">
            {[
              ["Ceremony sound", "Wireless mics for vows, processional & recessional music cued live."],
              ["Cocktail hour", "Background music sets the tone while your photos happen."],
              ["MC-led reception", "Introductions, toasts, timeline cues — run by a real MC, not a laptop."],
              ["Michigan-tested gear", "Backup systems for outdoor tents, barns & unpredictable weather."],
              ["Planning tools", "A shared timeline & music questionnaire before the wedding day."],
              ["Add-ons available", "Uplighting, monograms, cold-spark effects & photo booth bundles."],
            ].map(([title, body]) => (
              <div key={title} className="bg-paper p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ash">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <Eyebrow index="03" tone="navy">
          Where the team travels
        </Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          Serving Michigan wedding venues statewide
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((a) => (
            <a
              key={a.slug}
              href={`/service-area/${a.slug}`}
              className="rounded-sm border border-paper-line p-5 transition-colors hover:border-navy"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-navy">{a.region}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink">{a.name}</h3>
              <p className="mt-2 text-sm text-ash">{a.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Reviews teaser */}
      <section className="border-t border-paper-line bg-paper-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow index="04" tone="navy">
                What couples say
              </Eyebrow>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
                What couples say about booking the team
              </h2>
            </div>
            <a href="/reviews" className="font-mono text-xs uppercase tracking-wider text-navy hover:text-navy-bright">
              All reviews &rarr;
            </a>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Testimonial
              placeholder={false}
              quote="We hired Prestige for both DJ services and Day of Coordination — by far one of the best decisions made during the planning process. The dance floor was not empty once during the reception!"
              attribution="Shannon & Brandyn — Vale Royal Barn"
            />
            <Testimonial
              placeholder={false}
              quote="From the moment I decided to hire them for DJ, coordinator, and videography services, they made wedding planning as seamless and easy as possible. My wedding would not have been the fairytale it was without Prestige!"
              attribution="Abby & Alexander — The Whiskey Factory"
            />
            <Testimonial
              placeholder={false}
              quote="Noah and Gage are the ultimate dream team. His transitions were seamless, and he knew exactly how to read the room to keep guests of all ages up and moving."
              attribution="Matt — WeddingWire, 5/5"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <Eyebrow index="05" tone="navy">
          Questions couples actually ask
        </Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">FAQ</h2>
        <div className="mt-10 divide-y divide-paper-line border-y border-paper-line">
          {faqs.map((f) => (
            <div key={f.question} className="py-6">
              <h3 className="font-display text-lg font-semibold text-ink">{f.question}</h3>
              <p className="mt-2 max-w-2xl text-sm text-ash">{f.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <CTAButton href="/faq" variant="outline">
            Read the full FAQ
          </CTAButton>
        </div>
      </section>

      {/* Availability CTA */}
      <section id="check-availability" className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <Eyebrow index="06" tone="navy">
                Get in touch
              </Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Tell us your date &amp; venue
              </h2>
              <p className="mt-4 max-w-md text-smoke">
                We&rsquo;ll confirm which DJs are open and send package pricing — usually within 24
                hours.
              </p>
            </div>
            <div className="rounded-sm border border-ink-line bg-ink-soft p-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-smoke">
                Reach the team directly
              </p>
              <p className="mt-4 font-display text-2xl font-semibold">
                <a href={`tel:${prestige.telephone}`} className="hover:text-navy">
                  {prestige.telephone}
                </a>
              </p>
              <p className="mt-1">
                <a href={`mailto:${prestige.email}`} className="text-smoke hover:text-navy">
                  {prestige.email}
                </a>
              </p>
              <p className="mt-6 text-xs text-smoke">
                Want Noah specifically instead?{" "}
                <a href="/noah-devoe/pricing" className="text-espresso-bright underline decoration-dotted underline-offset-2">
                  Check his calendar
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

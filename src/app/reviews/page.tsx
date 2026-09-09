import { pageMetadata } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { Testimonial } from "@/components/ui/Testimonial";
import { prestige } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Reviews — Prestige Weddings & Events",
  description:
    "Real reviews from Prestige Weddings & Events couples, plus verified profiles on WeddingWire and Trustindex.",
  path: "/reviews",
});

const directories = [
  { name: "WeddingWire", href: prestige.sameAs[0] },
  { name: "Trustindex", href: prestige.sameAs[5] },
  { name: "The Knot", href: prestige.sameAs[1] },
];

const reviews = [
  {
    quote:
      "DJ Noah was without a doubt the standout vendor. His mixing and DJ skills shined hard, even mixing between English and Brazilian turned out so good. He was great at reading the vibe of the room and just kept the energy up and moving the whole time. We even had a storm roll through and knock out the power for a few minutes and he kept it alive while things got set up again.",
    attribution: "Larissa & Connor — Packard Proving Grounds",
  },
  {
    quote:
      "He's an awesome MC, all the events of the day went so smoothly and the dancing part of the evening was perfect!! He chose all the right songs, read the crowd so well and created the perfect balance of a fun dance floor without feeling like a club, exactly what we wanted.",
    attribution: "Lana & Brian — Addison Oaks",
  },
  {
    quote:
      "Noah made the wedding reception EPIC. Not only was he a great MC, but the dance floor was absolutely packed the entire night. We plan to refer Noah/Prestige to all our friends and family for their DJ'ing needs.",
    attribution: "Aubrey & Alex — The Gem Theatre",
  },
  {
    quote:
      "We hired Prestige for both DJ services and Day of Coordination. This was by far one of the best decisions made during the planning process. The dance floor was not empty once during the reception!",
    attribution: "Shannon & Brandyn — Vale Royal Barn",
  },
  {
    quote:
      "From the moment I decided to hire them for DJ, coordinator, and videography services, they made wedding planning as seamless and easy as possible. My wedding would not have been the fairytale it was without Prestige!",
    attribution: "Abby & Alexander — The Whiskey Factory",
  },
  {
    quote:
      "Noah is an absolute genius at what he does. He listened to exactly what we wanted, caught on to our vibe instantly, and executed the timeline flawlessly. He kept the dance floor packed all night long.",
    attribution: "Matt — WeddingWire, 5/5, June 2026",
  },
  {
    quote:
      "Noah is a phenomenal DJ, and did an excellent job incorporating my daughter/son-in-law's playlist and keeping the dance floor hopping all night long. Amber's coordination skills and ability to execute all the details cannot be matched.",
    attribution: "Trustindex review",
  },
];

export default function ReviewsPage() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <Breadcrumbs items={[{ label: "Reviews", path: "/reviews" }]} tone="ink" />
        <LayerBadge layer="prestige" tone="onInk" />

        <div className="mt-10 max-w-2xl">
          <Eyebrow tone="navy">Real couples, real weddings</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Reviews
          </h1>
          <p className="mt-5 text-lg text-smoke">
            This page covers Prestige as a company. Reviews attributed specifically to Noah live on{" "}
            <a href="/noah-devoe" className="text-espresso-bright underline decoration-dotted underline-offset-2">
              his own page
            </a>{" "}
            too.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {directories.map((d) => (
            <a
              key={d.name}
              href={d.href}
              className="rounded-sm border border-ink-line bg-ink-soft p-6 text-center transition-colors hover:border-navy"
            >
              <p className="font-display text-lg font-semibold text-paper">{d.name}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-smoke">
                Read reviews &rarr;
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {reviews.map((r) => (
            <Testimonial key={r.attribution} placeholder={false} quote={r.quote} attribution={r.attribution} tone="onInk" />
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-xs text-smoke">
          [This page intentionally doesn&rsquo;t display an aggregate star-rating number —
          fabricated ratings violate Google&rsquo;s review-snippet guidelines. Once a real,
          current aggregate rating is pulled from WeddingWire or Google Business Profile, wire it
          into AggregateRating schema with the real number.]
        </p>
      </div>
    </section>
  );
}

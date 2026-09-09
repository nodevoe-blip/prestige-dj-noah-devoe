import { pageMetadata } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";

export const metadata = pageMetadata({
  title: "Blog — Prestige Weddings & Events",
  description:
    "Wedding planning guides, venue spotlights, and real Michigan wedding recaps from Prestige Weddings & Events.",
  path: "/blog",
  noindex: true,
});

const contentPlan = [
  {
    category: "Planning guides",
    example: "How Far in Advance Should You Book Michigan Wedding Vendors?",
    note: "Evergreen, question-shaped posts that internally link to service & FAQ pages.",
  },
  {
    category: "Venue spotlights",
    example: "What to Know About Getting Married at [Partner Venue]",
    note: "One post per partner venue, linking to that venue's landing page.",
  },
  {
    category: "Real wedding recaps",
    example: "[Couple names]'s Clarkston Barn Wedding",
    note: "Published only with the couple's permission — links to the relevant city & venue pages.",
  },
  {
    category: "In Noah's voice",
    example: "What I Actually Listen For When Reading a Dance Floor",
    note: "Occasional first-person posts that reinforce Noah's personal-portfolio pages.",
  },
];

export default function BlogIndexPage() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <Breadcrumbs items={[{ label: "Blog", path: "/blog" }]} tone="ink" />
        <LayerBadge layer="prestige" tone="onInk" />

        <div className="mt-10 max-w-2xl">
          <Eyebrow tone="navy">Coming soon</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p className="mt-5 text-lg text-smoke">
            No posts published yet — this page is left out of search results until there are real
            ones. Here&rsquo;s the actual content plan it&rsquo;ll follow:
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {contentPlan.map((c) => (
            <div key={c.category} className="rounded-sm border border-ink-line bg-ink-soft p-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-navy">{c.category}</p>
              <h2 className="mt-2 font-display text-lg font-semibold text-paper">{c.example}</h2>
              <p className="mt-2 text-sm text-smoke">{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

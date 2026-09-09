import { pageMetadata } from "@/lib/metadata";
import { FaqSchema } from "@/components/schema/FaqSchema";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import { stats } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Wedding DJ & Vendor FAQ — Prestige Weddings & Events",
  description:
    "Answers to the most common questions Michigan couples ask about booking a wedding DJ, Prestige's full-service team, and booking co-owner Noah DeVoe specifically.",
  path: "/faq",
});

const faqs = [
  {
    question: "How much does a Michigan wedding DJ cost?",
    answer:
      `Prestige wedding DJ packages start at ${stats.teamDjStartingPrice}, with the final price depending on hours, MC involvement, and add-ons like uplighting, a photo booth, or ceremony sound at a separate location. Booking Noah personally starts at ${stats.noahStartingPrice}.`,
  },
  {
    question: "Can we specifically book Noah DeVoe?",
    answer:
      "Yes, for a limited number of dates each season — Noah co-owns Prestige and still personally DJs select weddings. Check his availability directly on his booking page; if his calendar's full, every other Prestige DJ trained under him and follows the same process.",
  },
  {
    question: "What's the difference between booking Noah and booking 'a Prestige DJ'?",
    answer:
      "Booking Noah reserves him specifically — not a substitute. Booking 'a Prestige DJ' reserves the team generally, and we assign whichever DJ fits your date, venue, and style best. Both go through the same planning process and equipment standard.",
  },
  {
    question: "How far in advance should we book a Michigan wedding DJ?",
    answer:
      "For peak wedding season (May through October), 9–12 months out is typical for popular dates and venues. Off-season and weekday weddings often have more flexibility, sometimes down to a few months out.",
  },
  {
    question: "Do you provide ceremony sound, not just reception music?",
    answer:
      "Yes — every Prestige wedding DJ package includes ceremony and cocktail-hour sound, not just the reception dance floor, including wireless mics for vows.",
  },
  {
    question: "What happens if it rains at an outdoor Michigan wedding?",
    answer:
      "We plan power and sound for both the outdoor ceremony and the indoor/tented backup from the start of planning, not as a same-day scramble — this comes up often enough in Michigan that it's part of our standard questionnaire.",
  },
  {
    question: "Can we combine DJ services with photography or videography?",
    answer:
      "Yes — bundling two or more Prestige services means one shared timeline and a lower combined rate than booking each vendor separately. See the packages page for current bundles.",
  },
  {
    question: "Do you take song requests, and can we make a do-not-play list?",
    answer:
      "Yes to both. Every booking includes a music questionnaire ahead of the wedding day covering must-plays, do-not-plays, and any specific moments (first dance, parent dances, grand entrance) you want handled a certain way.",
  },
];

export default function FaqPage() {
  return (
    <>
      <FaqSchema items={faqs} />
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
          <Breadcrumbs items={[{ label: "FAQ", path: "/faq" }]} tone="ink" />
          <LayerBadge layer="prestige" tone="onInk" />

          <div className="mt-10 max-w-2xl">
            <Eyebrow tone="navy">Questions couples actually ask</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              FAQ
            </h1>
          </div>

          <div className="mt-12 divide-y divide-ink-line border-y border-ink-line">
            {faqs.map((f) => (
              <div key={f.question} className="py-6">
                <h2 className="font-display text-lg font-semibold text-paper">{f.question}</h2>
                <p className="mt-2 max-w-2xl text-sm text-smoke">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href="/wedding-dj#check-availability" variant="navy">
              Check team availability
            </CTAButton>
            <CTAButton href="/noah-devoe/pricing" variant="outline-ink">
              Ask about booking Noah
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

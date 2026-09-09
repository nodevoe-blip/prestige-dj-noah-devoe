import { pageMetadata } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { AudioPlayer, type Track } from "@/components/ui/AudioPlayer";
import { Waveform } from "@/components/ui/Waveform";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata = pageMetadata({
  title: "Mixes & Live Sets — Noah DeVoe",
  description:
    "Unedited mix clips from Noah DeVoe's actual Michigan wedding receptions — ceremony, cocktail hour, and reception sets you can hear before you book.",
  path: "/noah-devoe/mixes",
});

const tracks: Track[] = [
  {
    title: "Quick Mix",
    detail: "A short sample of Noah's style",
    seed: 4,
    src: "/audio/mixes/quick-mix.mp3",
  },
  { title: "Ceremony to Reception", detail: "More samples coming soon", seed: 2 },
  { title: "Peak Hour — Full Floor", detail: "More samples coming soon", seed: 12 },
];

export default function MixesPage() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <Breadcrumbs
          items={[
            { label: "Noah DeVoe", path: "/noah-devoe" },
            { label: "Mixes", path: "/noah-devoe/mixes" },
          ]}
          tone="ink"
        />
        <LayerBadge layer="noah" tone="onInk" />

        <div className="mt-10 max-w-2xl">
          <Eyebrow tone="wine">The full library</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Mixes &amp; Live Sets
          </h1>
          <p className="mt-5 text-lg text-smoke">
            Every clip below is an unedited excerpt from an actual Michigan wedding I DJ&rsquo;d —
            not a studio mix. This is what the room actually heard.
          </p>
        </div>

        <Waveform seed={40} bars={72} tone="wine" className="mt-12 h-8 opacity-40" />

        <div className="mt-10 space-y-3">
          {tracks.map((t) => (
            <AudioPlayer key={t.title} track={t} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <CTAButton href="/noah-devoe/weddings" variant="outline-ink">
            See the weddings behind these sets
          </CTAButton>
          <CTAButton href="/noah-devoe/pricing" variant="wine">
            Check my availability
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

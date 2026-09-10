import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AudioPlayer, type Track } from "@/components/ui/AudioPlayer";
import { VideoPlayer, type VideoClip } from "@/components/ui/VideoPlayer";
import { getVimeoThumbnail } from "@/lib/vimeo";
import { Testimonial } from "@/components/ui/Testimonial";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { stats } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Noah DeVoe — Michigan Wedding DJ & MC",
  description:
    "Noah DeVoe is a Michigan wedding DJ and MC, and co-owner of Prestige Weddings & Events. Hear his mixes, see the weddings he's personally DJ'd, and check his availability.",
  path: "/noah-devoe",
});

const tracks: Track[] = [
  {
    title: "Quick Mix",
    detail: "A short sample of Noah's style",
    seed: 4,
    src: "/audio/mixes/quick-mix.mp3",
  },
  { title: "First Dance — Slow Build", detail: "More samples coming soon", seed: 9 },
  { title: "Last Call — Full Send", detail: "More samples coming soon", seed: 15 },
];

const highlightReels: { title: string; detail: string; vimeoId: string }[] = [
  { title: "Highlight Reel", detail: "Full reception recap", vimeoId: "1055414791" },
  { title: "Extended Highlights", detail: "More from the night", vimeoId: "1050052961" },
];

const grandEntrances: { title: string; detail: string; vimeoId: string }[] = [
  { title: "Hype Entrance", detail: "High-energy grand entrance", vimeoId: "1225337171" },
  { title: "Relaxed Entrance", detail: "Low-key, easy-does-it entrance", vimeoId: "1225340373" },
];

const formalDances: { title: string; detail: string; vimeoId: string }[] = [
  { title: "Formal Dances", detail: "First dance & parent dances", vimeoId: "945897108" },
];

const weddingPhotos = [
  { src: "/images/portfolio/becker-danceasaur-brewery.jpg", caption: "The Beckers — Danceasaur Brewery" },
  { src: "/images/portfolio/casey-michael-01.jpg", caption: "Casey & Michael" },
  { src: "/images/portfolio/reception-01.jpg", caption: "Packed dance floor" },
  { src: "/images/portfolio/wedding-06.jpg", caption: "Reception" },
];

async function withPosters(clips: { title: string; detail: string; vimeoId: string }[]): Promise<VideoClip[]> {
  return Promise.all(
    clips.map(async (v) => ({ ...v, poster: await getVimeoThumbnail(v.vimeoId) })),
  );
}

export default async function NoahDeVoePage() {
  const [reels, entrances, dances] = await Promise.all([
    withPosters(highlightReels),
    withPosters(grandEntrances),
    withPosters(formalDances),
  ]);

  return (
    <>
      {/* PersonSchema is mounted sitewide in the root layout now, not per-page */}

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
          <Breadcrumbs items={[{ label: "Noah DeVoe", path: "/noah-devoe" }]} tone="ink" />
          <LayerBadge layer="noah" tone="onInk" />

          <div className="mt-10 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <Eyebrow index="DJING WEDDINGS SINCE AGE 17" tone="espresso">
                Michigan Wedding DJ &amp; MC
              </Eyebrow>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
                Noah DeVoe
              </h1>
              <p className="mt-6 max-w-lg text-lg text-smoke">
                I have the best job in the world — I get to play music and help friends, family,
                and loved ones celebrate love. I DJ and MC a limited number of Michigan weddings
                myself each year, and co-own Prestige Weddings &amp; Events, where a full team of
                DJs covers the rest. This page is mine — my mixes, my portfolio, my calendar.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href="/noah-devoe/pricing" variant="espresso">
                  Check my availability
                </CTAButton>
                <CTAButton href="#mixes" variant="outline-ink">
                  Hear a mix
                </CTAButton>
              </div>
              <div className="mt-10 flex items-baseline gap-3 border-t border-ink-line pt-6">
                <p className="font-display text-4xl font-bold text-espresso-bright">
                  {stats.weddingsDjdByNoah}
                </p>
                <p className="font-mono text-xs uppercase tracking-wider text-smoke">
                  Weddings personally DJ&rsquo;d
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-espresso-bright">
              <Image
                src="/images/noah/noah-portrait.jpg"
                alt="Noah DeVoe at a Michigan wedding reception"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow index="00:00" tone="espresso">
              The story
            </Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              How I ended up reading a room for a living
            </h2>
          </div>
          <div className="space-y-4 text-ink/90">
            <p>
              My story? Pretty simple. I&rsquo;ve always loved music and have created mixes and
              playlists for as long as I can remember. I would ask for iTunes gift cards for my
              birthday so I could buy new singles and albums when they were released. As a
              teenager, I made music using Fruity Loops and played multiple instruments — piano,
              guitar, trumpet, and tuba. I can still pick up a guitar and jam on the piano, but I
              wouldn&rsquo;t know what to do with a trumpet or tuba anymore.
            </p>
            <p>
              When I was 17, I got introduced to DJing weddings. A lot of DJs get their start at
              bars, clubs, or house parties — I have always DJ&rsquo;d weddings. I&rsquo;ve learned
              and grown a lot since those first dozen or so, but the core has always been there:
              take amazing care of people, and good things happen.
            </p>
            <p>
              I&rsquo;m the proud co-owner of Prestige Weddings &amp; Events, one of Michigan&rsquo;s
              largest wedding and event companies. We&rsquo;ve grown slowly and carefully, and
              mentoring aspiring DJs has been one of the most rewarding parts of it. That same
              amazing-care approach is why I still personally DJ a limited number of weddings a
              year — the rest of Michigan gets covered by the{" "}
              <a href="/prestige/team" className="text-espresso-bright underline decoration-dotted underline-offset-2">
                rest of the Prestige team
              </a>
              , who I trained and trust with my own name on the invoice.
            </p>
          </div>
        </div>

        <blockquote className="mt-16 border-l-2 border-espresso-bright pl-6 sm:pl-8">
          <p className="font-accent text-2xl italic leading-snug text-ink sm:text-3xl">
            &ldquo;That &lsquo;take amazing care&rsquo; approach is exactly how I&rsquo;m going to
            approach your wedding. I&rsquo;m going to take amazing care of you, listen to your
            vision and vibe, give tasteful advice when asked, and make your wedding epic.
            That&rsquo;s a promise.&rdquo;
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-wider text-espresso-bright">
            — Noah DeVoe
          </p>
        </blockquote>
      </section>

      {/* Mixes */}
      <section id="mixes" className="border-y border-ink-line bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <Eyebrow index="00:01" tone="espresso">
                    Actually hear it
                  </Eyebrow>
                  <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                    Real sets from real Michigan receptions
                  </h2>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-smoke">
                Most Michigan wedding DJ sites don&rsquo;t let you hear anything before you book.
                This is unedited — what the room actually heard.
              </p>
              <div className="mt-10 space-y-3">
                {tracks.map((t) => (
                  <AudioPlayer key={t.title} track={t} />
                ))}
              </div>
              <a
                href="/noah-devoe/mixes"
                className="mt-6 inline-block font-mono text-xs uppercase tracking-wider text-espresso-bright hover:text-espresso"
              >
                All mixes &rarr;
              </a>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-espresso-bright">
              <Image
                src="/images/noah/noah-booth-energy.jpg"
                alt="Noah DeVoe mixing at a wedding reception booth"
                fill
                sizes="(min-width: 768px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <Eyebrow index="00:01.5" tone="espresso">
          Watch it, too
        </Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          MC &amp; DJ work on video
        </h2>
        <p className="mt-4 max-w-2xl text-ash">
          Real clips, not a demo reel edited to hide the boring parts.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {reels.map((v) => (
            <VideoPlayer key={v.title} clip={v} tone="espresso" />
          ))}
        </div>

        <div className="mt-14">
          <p className="font-mono text-xs uppercase tracking-wider text-espresso-bright">
            Pick your grand entrance energy
          </p>
          <p className="mt-2 max-w-2xl text-sm text-ash">
            Two real options, same couple&rsquo;s wedding, two different vibes — tell me which one
            sounds like you.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {entrances.map((v) => (
              <VideoPlayer key={v.title} clip={v} tone="espresso" />
            ))}
          </div>
        </div>

        <div className="mt-14 max-w-md">
          <p className="font-mono text-xs uppercase tracking-wider text-espresso-bright">
            Formal moments
          </p>
          <div className="mt-6">
            {dances.map((v) => (
              <VideoPlayer key={v.title} clip={v} tone="espresso" />
            ))}
          </div>
        </div>
      </section>

      {/* Weddings performed */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow index="00:02" tone="espresso">
              Weddings I&rsquo;ve personally DJ&rsquo;d
            </Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">A working portfolio</h2>
          </div>
          <a
            href="/noah-devoe/weddings"
            className="font-mono text-xs uppercase tracking-wider text-espresso-bright hover:text-espresso"
          >
            Full portfolio &rarr;
          </a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {weddingPhotos.map((p) => (
            <div key={p.src} className="relative aspect-[4/5] overflow-hidden rounded-sm border border-paper-line">
              <Image
                src={p.src}
                alt={p.caption}
                fill
                sizes="(min-width: 768px) 22vw, 45vw"
                className="object-cover"
              />
              <p className="absolute bottom-2 left-2 rounded-sm bg-ink/80 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-smoke">
                {p.caption}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-ash">
          Every photo on this page is from a wedding I actually DJ&rsquo;d, shared with the
          couple&rsquo;s permission — not stock photography.
        </p>
      </section>

      {/* Testimonials */}
      <section className="border-t border-paper-line bg-paper-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <Eyebrow index="00:03" tone="espresso">
            From couples I&rsquo;ve worked with
          </Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Reviews attributed to me by name, not the company
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Testimonial
              placeholder={false}
              quote="DJ Noah was without a doubt the standout vendor. His mixing and DJ skills shined hard, even mixing between English and Brazilian turned out so good. He was great at reading the vibe of the room and just kept the energy up and moving the whole time."
              attribution="Larissa & Connor — Packard Proving Grounds"
            />
            <Testimonial
              placeholder={false}
              quote="He's an awesome MC, all the events of the day went so smoothly and the dancing part of the evening was perfect!! He chose all the right songs, read the crowd so well and created the perfect balance of a fun dance floor without feeling like a club."
              attribution="Lana & Brian — Addison Oaks"
            />
            <Testimonial
              placeholder={false}
              quote="Noah made the wedding reception EPIC. The dance floor was absolutely packed the entire night. He knew exactly how to keep the party going."
              attribution="Aubrey & Alex — The Gem Theatre"
            />
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-ash">
            More reviews on{" "}
            <a href="/reviews" className="underline decoration-dotted underline-offset-2 hover:text-ink">
              the Prestige reviews page
            </a>
          </p>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <Eyebrow index="00:04" tone="espresso">
                Booking
              </Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Sound like we should work together?
              </h2>
              <p className="mt-4 max-w-md text-smoke">
                Let&rsquo;s make it happen. Click to set up a call, or send me your contact info and
                I&rsquo;ll reach out. I only personally DJ a limited number of dates each wedding
                season — if I&rsquo;m already booked for yours, I&rsquo;ll introduce you to the
                Prestige DJ I&rsquo;d personally recommend for your venue and vibe.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href="/noah-devoe/pricing" variant="espresso">
                  See pricing — starts at {stats.noahStartingPrice}
                </CTAButton>
                <CTAButton href="/wedding-dj" variant="outline-ink">
                  Or browse the full DJ team
                </CTAButton>
              </div>
            </div>
            <div className="rounded-sm border border-ink-line bg-ink-soft p-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-smoke">
                Good to know
              </p>
              <ul className="mt-4 space-y-3 text-sm text-smoke">
                <li>&mdash; Booking me locks in my calendar, not a substitute DJ.</li>
                <li>
                  &mdash; If my date&rsquo;s taken, every other Prestige DJ trained under the same
                  standards.
                </li>
                <li>&mdash; Pricing is separate from the company&rsquo;s general packages.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

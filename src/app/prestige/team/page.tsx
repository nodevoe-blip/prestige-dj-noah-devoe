import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LayerBadge } from "@/components/ui/LayerBadge";
import { CTAButton } from "@/components/ui/CTAButton";
import { team, founder, type TeamMember } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Meet the Team — Prestige Weddings & Events",
  description:
    "Meet all 25 Prestige Weddings & Events wedding DJs across Detroit and Grand Rapids, including co-owner Noah DeVoe.",
  path: "/prestige/team",
});

const detroitTeam = team.filter((m) => m.market === "Detroit");
const grTeam = team.filter((m) => m.market === "Grand Rapids");

function TeamCard({ member }: { member: TeamMember }) {
  const isInternal = member.profileUrl?.startsWith("/");
  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-sm border border-ink-line bg-ink-soft">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.title}`}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
          className="object-cover"
        />
      </div>
      <p className="mt-3 font-display text-base font-semibold text-paper">{member.name}</p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-smoke">{member.title}</p>
      <p className="mt-2 text-sm text-smoke">{member.bio}</p>
      {isInternal && (
        <Link
          href={member.profileUrl!}
          className="mt-2 inline-block font-mono text-[11px] uppercase tracking-wider text-wine-bright hover:text-wine"
        >
          Full profile &rarr;
        </Link>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <Breadcrumbs
          items={[
            { label: "About Prestige", path: "/prestige" },
            { label: "Team", path: "/prestige/team" },
          ]}
          tone="ink"
        />
        <LayerBadge layer="prestige" tone="onInk" />

        <div className="mt-10 max-w-2xl">
          <Eyebrow tone="brass">The full bench — {team.length} DJs</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Meet the team
          </h1>
          <p className="mt-5 text-lg text-smoke">
            Prestige runs {detroitTeam.length} DJs in Metro Detroit and {grTeam.length} in Grand
            Rapids, founded by {founder.name} and co-owned locally by {" "}
            <Link href="/noah-devoe" className="text-wine-bright underline decoration-dotted underline-offset-2">
              Noah DeVoe
            </Link>{" "}
            in Detroit. Every DJ on this page trained under the same standard — you&rsquo;re never
            gambling on which one you get.
          </p>
        </div>

        <div className="mt-16">
          <Eyebrow tone="brass">Metro Detroit — {detroitTeam.length} DJs</Eyebrow>
          <div className="mt-8 grid gap-x-6 gap-y-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {detroitTeam.map((m) => (
              <TeamCard key={m.slug} member={m} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Eyebrow tone="brass">Grand Rapids — {grTeam.length} DJs</Eyebrow>
          <div className="mt-8 grid gap-x-6 gap-y-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {grTeam.map((m) => (
              <TeamCard key={m.slug} member={m} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <CTAButton href="/wedding-dj#check-availability" variant="brass">
            Check who&rsquo;s free for your date
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

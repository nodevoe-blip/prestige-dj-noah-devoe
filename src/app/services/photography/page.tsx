import { pageMetadata } from "@/lib/metadata";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { StubPage } from "@/components/layout/StubPage";

export const metadata = pageMetadata({
  title: "Wedding Photography — Prestige Weddings & Events",
  description:
    "Full-day Michigan wedding photography from Prestige Weddings & Events, from getting-ready through the last dance — bundled with DJ, video, and coordination if you'd like.",
  path: "/services/photography",
});

export default function PhotographyPage() {
  return (
    <>
      <ServiceSchema
        name="Wedding Photography"
        description="Full-day wedding photography coverage from getting-ready through the reception, from the Prestige Weddings & Events team."
        path="/services/photography"
      />
      <StubPage
        layer="prestige"
        eyebrow="Photography"
        title="Wedding Photography"
        intro="Full-day coverage from getting-ready through the last dance, shot by a team that already knows how the DJ, coordinator, and timeline fit together. [Placeholder — replace with real photography package details, style, and sample gallery.]"
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: "Photography", path: "/services/photography" },
        ]}
        ctaHref="/packages"
        ctaLabel="See bundled packages"
      />
    </>
  );
}

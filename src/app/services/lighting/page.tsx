import { pageMetadata } from "@/lib/metadata";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { StubPage } from "@/components/layout/StubPage";

export const metadata = pageMetadata({
  title: "Wedding Lighting & Effects — Prestige Weddings & Events",
  description:
    "Uplighting, dance-floor washes, monograms, and cold-spark effects from Prestige Weddings & Events for Michigan wedding receptions.",
  path: "/services/lighting",
});

export default function LightingPage() {
  return (
    <>
      <ServiceSchema
        name="Wedding Lighting & Effects"
        description="Uplighting, dance-floor lighting washes, monograms, and cold-spark effects for wedding receptions, from the Prestige Weddings & Events team."
        path="/services/lighting"
      />
      <StubPage
        layer="prestige"
        eyebrow="Lighting & Effects"
        title="Lighting & Effects"
        intro="Uplighting, dance-floor washes, custom monograms, and cold-spark effects — designed alongside your DJ setup, not bolted on separately. [Placeholder — replace with real lighting package details and venue photos.]"
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: "Lighting", path: "/services/lighting" },
        ]}
        ctaHref="/packages"
        ctaLabel="See bundled packages"
      />
    </>
  );
}

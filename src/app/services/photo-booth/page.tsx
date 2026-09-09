import { pageMetadata } from "@/lib/metadata";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { StubPage } from "@/components/layout/StubPage";

export const metadata = pageMetadata({
  title: "Wedding Photo Booth — Prestige Weddings & Events",
  description:
    "Open-air and enclosed wedding photo booths from Prestige Weddings & Events, with instant prints and digital sharing, serving Michigan weddings.",
  path: "/services/photo-booth",
});

export default function PhotoBoothPage() {
  return (
    <>
      <ServiceSchema
        name="Wedding Photo Booth"
        description="Open-air or enclosed photo booth rental with instant prints and digital sharing for Michigan weddings, from the Prestige Weddings & Events team."
        path="/services/photo-booth"
      />
      <StubPage
        layer="prestige"
        eyebrow="Photo Booth"
        title="Photo Booth"
        intro="Open-air or enclosed booths with instant prints and digital sharing, run by the same team handling your DJ and lighting — one setup crew, one less vendor to coordinate. [Placeholder — replace with real photo booth package details and sample strip designs.]"
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: "Photo Booth", path: "/services/photo-booth" },
        ]}
        ctaHref="/packages"
        ctaLabel="See bundled packages"
      />
    </>
  );
}

import { pageMetadata } from "@/lib/metadata";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { StubPage } from "@/components/layout/StubPage";

export const metadata = pageMetadata({
  title: "Wedding Videography — Prestige Weddings & Events",
  description:
    "Cinematic Michigan wedding videography from Prestige Weddings & Events — highlight films and full ceremony and reception footage.",
  path: "/services/videography",
});

export default function VideographyPage() {
  return (
    <>
      <ServiceSchema
        name="Wedding Videography"
        description="Cinematic highlight films and full ceremony/reception footage from the Prestige Weddings & Events team."
        path="/services/videography"
      />
      <StubPage
        layer="prestige"
        eyebrow="Videography"
        title="Wedding Videography"
        intro="Cinematic highlight films and full ceremony and reception footage, coordinated with your photographer and DJ so nobody's in each other's shot. [Placeholder — replace with real videography package details and a sample highlight reel.]"
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: "Videography", path: "/services/videography" },
        ]}
        ctaHref="/packages"
        ctaLabel="See bundled packages"
      />
    </>
  );
}

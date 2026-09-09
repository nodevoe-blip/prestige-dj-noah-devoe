import { pageMetadata } from "@/lib/metadata";
import { ServiceSchema } from "@/components/schema/ServiceSchema";
import { StubPage } from "@/components/layout/StubPage";

export const metadata = pageMetadata({
  title: "Day-Of Wedding Coordination — Prestige Weddings & Events",
  description:
    "A dedicated day-of wedding coordinator from Prestige Weddings & Events runs your timeline and vendors so you don't have to on your wedding day.",
  path: "/services/coordination",
});

export default function CoordinationPage() {
  return (
    <>
      <ServiceSchema
        name="Day-Of Wedding Coordination"
        description="Dedicated day-of coordination running the wedding-day timeline and vendor logistics, from the Prestige Weddings & Events team."
        path="/services/coordination"
      />
      <StubPage
        layer="prestige"
        eyebrow="Coordination"
        title="Day-Of Coordination"
        intro="A dedicated coordinator runs your timeline, vendor check-ins, and any last-minute fires on the wedding day itself — especially useful when you've also booked our DJ or photo team, since the timeline is already shared. [Placeholder — replace with real coordination package details.]"
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: "Coordination", path: "/services/coordination" },
        ]}
        ctaHref="/packages"
        ctaLabel="See bundled packages"
      />
    </>
  );
}

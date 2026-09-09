import { pageMetadata } from "@/lib/metadata";
import { StubPage } from "@/components/layout/StubPage";

export const metadata = pageMetadata({
  title: "Traverse City Wedding DJ — Prestige Weddings & Events",
  description:
    "Prestige Weddings & Events serves Traverse City weddings — Traverse City, Old Mission and Leelanau Peninsula vineyard venues.",
  path: "/service-area/traverse-city",
  noindex: true,
});

export default function TraverseCityPage() {
  return (
    <StubPage
      layer="prestige"
      eyebrow="Northern Michigan"
      title="Traverse City Wedding DJ"
      intro="This local guide is still being written — it'll follow the same pattern as our Oakland County page: real Old Mission & Leelanau Peninsula vineyard-venue details, real logistics, no filler. In the meantime, the team already books Northern Michigan weddings regularly."
      breadcrumbs={[
        { label: "Service Areas", path: "/service-area" },
        { label: "Traverse City", path: "/service-area/traverse-city" },
      ]}
      ctaHref="/wedding-dj#check-availability"
      ctaLabel="Check availability for Traverse City"
    />
  );
}

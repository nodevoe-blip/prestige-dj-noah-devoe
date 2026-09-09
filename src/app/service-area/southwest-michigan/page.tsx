import { pageMetadata } from "@/lib/metadata";
import { StubPage } from "@/components/layout/StubPage";

export const metadata = pageMetadata({
  title: "Southwest Michigan Wedding DJ — Prestige Weddings & Events",
  description:
    "Prestige Weddings & Events serves Southwest Michigan weddings — Kalamazoo, St. Joseph and the lakeshore wine-country venues.",
  path: "/service-area/southwest-michigan",
  noindex: true,
});

export default function SouthwestMichiganPage() {
  return (
    <StubPage
      layer="prestige"
      eyebrow="Southwest Michigan"
      title="Southwest Michigan Wedding DJ"
      intro="This local guide is still being written — it'll follow the same pattern as our Oakland County page: real Kalamazoo & lakeshore-venue details, real logistics, no filler. In the meantime, the team already books Southwest Michigan weddings regularly."
      breadcrumbs={[
        { label: "Service Areas", path: "/service-area" },
        { label: "Southwest Michigan", path: "/service-area/southwest-michigan" },
      ]}
      ctaHref="/wedding-dj#check-availability"
      ctaLabel="Check availability for Southwest Michigan"
    />
  );
}

import { pageMetadata } from "@/lib/metadata";
import { StubPage } from "@/components/layout/StubPage";

export const metadata = pageMetadata({
  title: "Metro Detroit Wedding DJ — Prestige Weddings & Events",
  description:
    "Prestige Weddings & Events serves Metro Detroit weddings — Detroit, Dearborn, Grosse Pointe and the riverfront and loft-venue scene.",
  path: "/service-area/metro-detroit",
  noindex: true,
});

export default function MetroDetroitPage() {
  return (
    <StubPage
      layer="prestige"
      eyebrow="Southeast Michigan"
      title="Metro Detroit Wedding DJ"
      intro="This local guide is still being written — it'll follow the same pattern as our Oakland County page: real Detroit, Dearborn & Grosse Pointe venues, real logistics, no filler. In the meantime, the team already books Metro Detroit weddings regularly."
      breadcrumbs={[
        { label: "Service Areas", path: "/service-area" },
        { label: "Metro Detroit", path: "/service-area/metro-detroit" },
      ]}
      ctaHref="/wedding-dj#check-availability"
      ctaLabel="Check availability for Metro Detroit"
    />
  );
}

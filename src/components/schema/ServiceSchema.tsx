import { JsonLd } from "./JsonLd";
import { prestige, SITE_URL } from "@/lib/site-config";

export function ServiceSchema({
  name,
  description,
  path,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: string[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: `${SITE_URL}${path}`,
        provider: {
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#organization`,
          name: prestige.name,
        },
        areaServed: (areaServed ?? ["Michigan"]).map((a) => ({
          "@type": "AdministrativeArea",
          name: a,
        })),
      }}
    />
  );
}

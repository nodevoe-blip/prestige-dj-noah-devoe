import { JsonLd } from "./JsonLd";
import { SITE_URL } from "@/lib/site-config";

export type Crumb = { label: string; path: string };

export function BreadcrumbSchema({ items }: { items: Crumb[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.label,
          item: `${SITE_URL}${item.path}`,
        })),
      }}
    />
  );
}

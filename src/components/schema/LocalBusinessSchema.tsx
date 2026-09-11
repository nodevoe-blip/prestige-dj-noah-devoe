import { JsonLd } from "./JsonLd";
import { founder, prestige, serviceAreas, SITE_URL } from "@/lib/site-config";

/** True for real values; false for our "[BRACKETED PLACEHOLDER]" convention. */
function isReal(value: string): boolean {
  return !value.startsWith("[");
}

/**
 * WeddingService/LocalBusiness entity for Prestige as a whole.
 * Mount once, sitewide (root layout) — represents the company, not any one DJ.
 * Fields still using the "[BRACKETED PLACEHOLDER]" convention in site-config
 * are omitted here rather than emitted as literal structured data.
 */
export function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#organization`,
        name: prestige.name,
        legalName: prestige.legalName,
        description: prestige.description,
        url: SITE_URL,
        telephone: prestige.telephone,
        ...(isReal(prestige.email) && { email: prestige.email }),
        priceRange: prestige.priceRange,
        ...(isReal(prestige.founded) && { foundingDate: prestige.founded }),
        address: {
          "@type": "PostalAddress",
          streetAddress: prestige.address.streetAddress,
          addressLocality: prestige.address.addressLocality,
          addressRegion: prestige.address.addressRegion,
          postalCode: prestige.address.postalCode,
          addressCountry: prestige.address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: prestige.geo.latitude,
          longitude: prestige.geo.longitude,
        },
        areaServed: serviceAreas.map((a) => ({
          "@type": "AdministrativeArea",
          name: `${a.name}, Michigan`,
        })),
        sameAs: prestige.sameAs.filter(isReal),
        founder: {
          "@type": "Person",
          name: founder.name,
          jobTitle: founder.jobTitle,
        },
        // Real number sourced from WeddingWire's own listing — see the
        // comment on prestige.aggregateRating in site-config.ts before ever
        // changing this.
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: prestige.aggregateRating.ratingValue,
          reviewCount: prestige.aggregateRating.reviewCount,
          bestRating: 5,
        },
      }}
    />
  );
}

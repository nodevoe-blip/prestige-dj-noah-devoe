import { JsonLd } from "./JsonLd";
import { noah, prestige, SITE_URL } from "@/lib/site-config";

/**
 * Person entity for Noah DeVoe, linked to the Prestige LocalBusiness via worksFor.
 * Mount on /noah-devoe and anywhere else Noah is introduced by name (team page, bio blurbs).
 */
export function PersonSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SITE_URL}/noah-devoe#person`,
        name: noah.name,
        jobTitle: noah.jobTitle,
        description: noah.bio,
        url: `${SITE_URL}/noah-devoe`,
        sameAs: noah.sameAs,
        worksFor: {
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#organization`,
          name: prestige.name,
        },
      }}
    />
  );
}

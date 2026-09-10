import type { Metadata } from "next";
import { SITE_URL } from "./site-config";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** OG image path relative to /public, defaults to the sitewide social card */
  image?: string;
  /**
   * Keep this route out of search results (still linkable/crawlable for
   * discovery) — use for templated stub pages that don't have unique,
   * locally-specific content yet. Never leave a page noindexed by accident;
   * flip this off once the page is genuinely populated.
   */
  noindex?: boolean;
};

/**
 * Builds consistent, unique per-page metadata.
 * Callers write the title exactly as it should appear — Noah's personal pages
 * should lead with his name, Prestige's pages should lead with the business
 * name and the service/city keyword. No shared boilerplate is appended here
 * so no two pages can accidentally collide on title/description.
 */
export function pageMetadata({ title, description, path, image, noindex }: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? "/og-default.jpg";

  return {
    title,
    description,
    alternates: { canonical: url },
    ...(noindex && { robots: { index: false, follow: true } }),
    openGraph: {
      title,
      description,
      url,
      siteName: "Noah DeVoe | Prestige Weddings & Events",
      images: [{ url: ogImage }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

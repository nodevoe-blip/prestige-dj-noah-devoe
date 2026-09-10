import type { MetadataRoute } from "next";
import { SITE_URL, serviceAreas, services, venues, realWeddings } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/noah-devoe",
    "/noah-devoe/mixes",
    "/noah-devoe/weddings",
    "/noah-devoe/pricing",
    "/wedding-dj",
    "/prestige",
    "/prestige/team",
    "/services",
    "/packages",
    "/service-area",
    "/faq",
    "/reviews",
    // "/blog" omitted — noindexed until real posts exist
  ];

  const dynamicRoutes = [
    // "wedding-dj" already covered by /wedding-dj in staticRoutes above
    ...services.filter((s) => s.slug !== "wedding-dj").map((s) => s.path),
    // Only list city pages that are actually built & indexable — the rest
    // are reachable in nav but marked noindex until populated (avoids the
    // thin/templated doorway-page pattern Google penalizes).
    ...serviceAreas.filter((a) => a.live).map((a) => `/service-area/${a.slug}`),
    // /venues (hub) is noindexed and omitted while empty — see src/app/venues/page.tsx
    ...(venues.length > 0 ? ["/venues"] : []),
    ...venues.map((v) => `/venues/${v.slug}`),
    ...realWeddings.map((w) => `/noah-devoe/weddings/${w.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("/service-area/") || path === "/wedding-dj" ? 0.9 : 0.6,
  }));
}

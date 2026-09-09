import { JsonLd } from "./JsonLd";
import { SITE_URL } from "@/lib/site-config";

/**
 * Review / AggregateRating schema, kept separate per entity (Noah's personal
 * reviews vs. Prestige's company aggregate) per Google's guidance.
 *
 * DO NOT call these with placeholder or invented numbers — fabricated review
 * content in structured data violates Google's Review Snippet guidelines and
 * can trigger a manual action. Wire these up only once real testimonials and
 * a real aggregate rating (e.g. pulled from Google Business Profile,
 * WeddingWire, or The Knot) are available.
 */

export type ReviewInput = {
  authorName: string;
  reviewBody: string;
  ratingValue: number; // 1-5
  datePublished: string; // ISO date
};

export function ReviewSchema({
  itemName,
  itemPath,
  reviews,
}: {
  itemName: string;
  itemPath: string;
  reviews: ReviewInput[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: {
          "@type": "LocalBusiness",
          name: itemName,
          url: `${SITE_URL}${itemPath}`,
        },
        review: reviews.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.authorName },
          reviewBody: r.reviewBody,
          datePublished: r.datePublished,
          reviewRating: {
            "@type": "Rating",
            ratingValue: r.ratingValue,
            bestRating: 5,
          },
        })),
      }}
    />
  );
}

export function AggregateRatingSchema({
  itemName,
  itemPath,
  ratingValue,
  reviewCount,
}: {
  itemName: string;
  itemPath: string;
  ratingValue: number;
  reviewCount: number;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: itemName,
        url: `${SITE_URL}${itemPath}`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue,
          reviewCount,
          bestRating: 5,
        },
      }}
    />
  );
}

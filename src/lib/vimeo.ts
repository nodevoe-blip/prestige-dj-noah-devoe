/** Accepts a bare id ("123456789"), a full URL, or a private URL with a hash ("id/hash"). */
export function parseVimeoId(input: string): string {
  const trimmed = input.trim();
  const match = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/([\w-]+))?/);
  if (match) return match[2] ? `${match[1]}/${match[2]}` : match[1];
  return trimmed; // already a bare id, or "id/hash" for an unlisted video
}

type OEmbedResponse = { thumbnail_url?: string };

/**
 * Server-side only — fetches the real Vimeo thumbnail via the public oEmbed
 * endpoint (no API key needed for public/unlisted videos with a hash).
 * Cached for a day; returns null on any failure so callers can fall back
 * to a manual poster instead of breaking the page.
 */
export async function getVimeoThumbnail(vimeoId: string): Promise<string | null> {
  const [id, hash] = vimeoId.split("/");
  const url = `https://vimeo.com/${id}${hash ? `/${hash}` : ""}`;
  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(url)}`,
      { next: { revalidate: 60 * 60 * 24 } },
    );
    if (!res.ok) return null;
    const data: OEmbedResponse = await res.json();
    return data.thumbnail_url ?? null;
  } catch {
    return null;
  }
}

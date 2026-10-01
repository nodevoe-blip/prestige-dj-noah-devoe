"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";

export type VideoClip = {
  title: string;
  detail: string; // e.g. "Reception highlight · 2024"
  /** Vimeo video id, or "id/hash" for an unlisted video with a privacy hash. */
  vimeoId?: string;
  /** Path under /public/video — used only if vimeoId isn't set. */
  src?: string;
  /** Poster image. For Vimeo clips, pass the result of getVimeoThumbnail() server-side. */
  poster?: string | null;
};

/** Fired when a player starts, so every other player on the page can stop
 * itself — without this, playing a second clip leaves the first one running
 * (and audible) off-screen with no visible way to stop it. */
const PLAY_EVENT = "video-player:play";

/**
 * Facade pattern: shows a poster + custom play button and loads nothing
 * (no Vimeo iframe, no <video> src) until clicked — matches the AudioPlayer's
 * lazy, never-autoplaying approach. Once clicked, autoplay on the embed is
 * fine since it's a direct result of that click, not a page-load autoplay.
 */
export function VideoPlayer({ clip, tone = "espresso" }: { clip: VideoClip; tone?: "espresso" | "navy" }) {
  const id = useId();
  const [playing, setPlaying] = useState(false);
  const accent = tone === "espresso" ? "border-espresso-bright" : "border-navy";
  const accentBg = tone === "espresso" ? "bg-espresso hover:bg-espresso-bright" : "bg-navy hover:bg-navy-bright";

  const hasSource = Boolean(clip.vimeoId || clip.src);

  // Stop this player whenever a different one starts.
  useEffect(() => {
    const onPlay = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== id) setPlaying(false);
    };
    window.addEventListener(PLAY_EVENT, onPlay);
    return () => window.removeEventListener(PLAY_EVENT, onPlay);
  }, [id]);

  const play = () => {
    window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: id }));
    setPlaying(true);
  };

  if (!hasSource) {
    return (
      <div className={`flex aspect-video flex-col items-center justify-center gap-2 rounded-sm border ${accent} bg-ink-soft`}>
        <p className="font-display text-base font-semibold text-paper">{clip.title}</p>
        <p className="font-mono text-[10px] uppercase tracking-wider text-smoke">Video coming soon</p>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-sm border ${accent} bg-ink-soft`}>
      <div className="relative aspect-video">
        {playing ? (
          <>
            {clip.vimeoId ? (
              <iframe
                src={`https://player.vimeo.com/video/${clip.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={clip.title}
              />
            ) : (
              <video src={clip.src} controls autoPlay className="h-full w-full object-cover" />
            )}
            <button
              type="button"
              aria-label={`Stop ${clip.title}`}
              onClick={() => setPlaying(false)}
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-ink/80 text-paper transition-colors hover:bg-ink"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M1 1 13 13 M13 1 1 13" />
              </svg>
            </button>
          </>
        ) : (
          <button
            type="button"
            aria-label={`Play ${clip.title}`}
            onClick={play}
            className="group absolute inset-0 flex items-center justify-center bg-ink"
          >
            {clip.poster && (
              <Image
                src={clip.poster}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-80 transition-opacity group-hover:opacity-60"
              />
            )}
            <span className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-paper ${accentBg}`}>
              <svg width="16" height="16" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                <path d="M0 0 14 7 0 14Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="px-4 py-3">
        <p className="truncate font-display text-sm font-semibold text-paper">{clip.title}</p>
        <p className="truncate font-mono text-[10px] uppercase tracking-wider text-smoke">{clip.detail}</p>
      </div>
    </div>
  );
}

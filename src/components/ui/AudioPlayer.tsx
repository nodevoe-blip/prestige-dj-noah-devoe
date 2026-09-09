"use client";

import { useRef, useState } from "react";
import { Waveform } from "./Waveform";

export type Track = {
  title: string;
  detail: string; // e.g. "Reception open · 2023"
  /** Path under /public/audio. Omit while a real recording isn't uploaded yet. */
  src?: string;
  seed: number;
};

/**
 * Lazy — the <audio> element loads nothing until the listener presses play
 * (preload="none"), and never autoplays. Falls back to a clearly-labeled
 * "sample coming soon" state when no src is wired up yet.
 */
export function AudioPlayer({ track }: { track: Track }) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
    } else {
      void ref.current.play();
    }
  };

  return (
    <div className="group flex items-center gap-4 rounded-sm border border-ink-line bg-ink-soft px-4 py-3 sm:px-5 sm:py-4">
      <button
        type="button"
        onClick={toggle}
        disabled={!track.src}
        aria-label={playing ? `Pause ${track.title}` : `Play ${track.title}`}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-espresso-bright bg-espresso text-paper transition-colors hover:bg-espresso-bright disabled:cursor-not-allowed disabled:opacity-40"
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            <rect x="1" width="4" height="14" />
            <rect x="9" width="4" height="14" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            <path d="M0 0 14 7 0 14Z" />
          </svg>
        )}
      </button>

      <div className="min-w-0 flex-1">
        <p className="truncate font-display text-base font-semibold text-paper">{track.title}</p>
        <p className="truncate font-mono text-[11px] uppercase tracking-wider text-smoke">
          {track.detail}
        </p>
      </div>

      <Waveform seed={track.seed} bars={28} animated={playing} tone="espresso" className="hidden sm:flex" />

      {track.src ? (
        <audio
          ref={ref}
          src={track.src}
          preload="none"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />
      ) : (
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-smoke">
          Sample coming soon
        </span>
      )}
    </div>
  );
}

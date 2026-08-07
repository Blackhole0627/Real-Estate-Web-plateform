"use client";

import { useRef, useState } from "react";

interface Props {
  src: string;
  label: string;
}

/** Click-to-play video: nothing plays (or downloads beyond metadata) until the user asks. */
export default function VideoPlayer({ src, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
    ref.current?.play().catch(() => {});
  };

  return (
    <div className="vp">
      <video
        ref={ref}
        src={src}
        preload="metadata"
        controls={playing}
        playsInline
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button type="button" className="vp-play" aria-label={label} onClick={start}>
          <span className="vp-btn" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 6.5v11l9-5.5-9-5.5z" />
            </svg>
          </span>
          <span className="vp-label">{label}</span>
        </button>
      )}
    </div>
  );
}

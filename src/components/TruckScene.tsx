function Wheel({ cx }: { cx: number }) {
  return (
    <g>
      <circle cx={cx} cy={236} r="27" fill="#050b18" stroke="#1f3a6b" strokeWidth="4" />
      <circle cx={cx} cy={236} r="27" fill="none" stroke="#0f1d38" strokeWidth="8" />
      <g className="wheel-spin" style={{ transformOrigin: `${cx}px 236px` }}>
        <circle cx={cx} cy={236} r="11" fill="#16294d" stroke="#f59e0b" strokeWidth="2.5" />
        <g stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round">
          <line x1={cx} y1={236 - 9} x2={cx} y2={236 + 9} />
          <line x1={cx - 9} y1={236} x2={cx + 9} y2={236} />
          <line x1={cx - 6.4} y1={236 - 6.4} x2={cx + 6.4} y2={236 + 6.4} />
          <line x1={cx - 6.4} y1={236 + 6.4} x2={cx + 6.4} y2={236 - 6.4} />
        </g>
      </g>
    </g>
  );
}

/** Animated side-view TIR: spinning wheels, moving road, speed lines. */
export function TruckScene() {
  return (
    <svg
      viewBox="0 0 900 300"
      className="h-auto w-full max-w-2xl"
      fill="none"
      role="img"
      aria-label="Hikmetoglu Transport TIR yük maşını"
    >
      {/* speed lines */}
      <g stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" opacity="0.7">
        <line className="speed-line" x1="120" y1="120" x2="60" y2="120" style={{ animationDelay: "0s" }} />
        <line className="speed-line" x1="120" y1="160" x2="50" y2="160" style={{ animationDelay: "0.45s" }} />
        <line className="speed-line" x1="120" y1="200" x2="70" y2="200" style={{ animationDelay: "0.2s" }} />
      </g>

      <g className="truck-bob">
        {/* ground shadow */}
        <ellipse cx="470" cy="272" rx="330" ry="12" fill="#050b18" opacity="0.6" />

        {/* trailer */}
        <rect x="250" y="70" width="490" height="160" rx="14" fill="#0f1d38" stroke="#1f3a6b" strokeWidth="3" />
        <rect x="250" y="146" width="490" height="12" fill="#f59e0b" opacity="0.9" />
        {/* trailer panel lines */}
        <g stroke="#16294d" strokeWidth="3">
          <line x1="340" y1="78" x2="340" y2="138" />
          <line x1="430" y1="78" x2="430" y2="138" />
          <line x1="520" y1="78" x2="520" y2="138" />
          <line x1="610" y1="78" x2="610" y2="138" />
          <line x1="700" y1="78" x2="700" y2="138" />
        </g>
        {/* logo arc motif on trailer */}
        <g transform="translate(300 178)">
          <path d="M0 26c14-34 54-34 68 0" fill="none" stroke="#fbbf24" strokeWidth="7" strokeLinecap="round" />
          <circle cx="0" cy="26" r="6" fill="#fbbf24" />
          <circle cx="68" cy="26" r="6" fill="#fbbf24" />
        </g>

        {/* cab */}
        <path d="M250 230 L250 96 L150 96 L112 150 L112 230 Z" fill="#16294d" stroke="#1f3a6b" strokeWidth="3" />
        {/* windshield */}
        <path d="M158 104 L242 104 L242 150 L126 150 Z" fill="#0a1426" />
        <path d="M158 104 L242 104 L242 150 L126 150 Z" fill="#2c4f8f" opacity="0.25" />
        {/* cab amber trim */}
        <rect x="112" y="222" width="138" height="8" fill="#f59e0b" />
        {/* headlight */}
        <circle cx="120" cy="196" r="7" fill="#fbbf24" />
        <path d="M127 196 h26" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

        {/* wheels */}
        <Wheel cx={195} />
        <Wheel cx={560} />
        <Wheel cx={660} />
      </g>

      {/* road */}
      <line x1="40" y1="276" x2="860" y2="276" stroke="#1f3a6b" strokeWidth="4" />
      <line
        className="road-move"
        x1="40"
        y1="276"
        x2="860"
        y2="276"
        stroke="#f59e0b"
        strokeWidth="4"
        opacity="0.7"
      />
    </svg>
  );
}

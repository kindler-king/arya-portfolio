"use client";

/**
 * A tiny sleeping cat that rests on a section divider — one of the quiet
 * personal easter eggs. Ears, curled body, a slowly twitching tail, and a
 * soft "z z z" that only the observant will catch.
 */
export default function SleepingCat({
  className = "",
  size = 54,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={`pointer-events-none inline-block ${className}`}
      aria-hidden
      title="shhh — debugging partner at work"
    >
      <svg width={size} height={size * 0.62} viewBox="0 0 100 62" fill="none">
        {/* z z z */}
        <g fill="var(--color-gold-soft)" opacity="0.6">
          <text x="74" y="20" fontSize="8" fontFamily="monospace">
            z
            <animate
              attributeName="opacity"
              values="0;0.8;0"
              dur="3s"
              repeatCount="indefinite"
              begin="0s"
            />
          </text>
          <text x="82" y="13" fontSize="10" fontFamily="monospace">
            z
            <animate
              attributeName="opacity"
              values="0;0.8;0"
              dur="3s"
              repeatCount="indefinite"
              begin="1s"
            />
          </text>
        </g>
        {/* curled body */}
        <path
          d="M20 52 Q8 52 8 40 Q8 24 30 24 Q54 24 66 34 Q78 44 66 52 Z"
          fill="var(--color-panel-2)"
          stroke="var(--color-hair-strong)"
          strokeWidth="1"
        />
        {/* head */}
        <circle
          cx="24"
          cy="42"
          r="12"
          fill="var(--color-panel-2)"
          stroke="var(--color-hair-strong)"
          strokeWidth="1"
        />
        {/* ears */}
        <path d="M15 34 L13 25 L23 31 Z" fill="var(--color-panel-2)" stroke="var(--color-hair-strong)" strokeWidth="1" />
        <path d="M33 33 L37 25 L26 30 Z" fill="var(--color-panel-2)" stroke="var(--color-hair-strong)" strokeWidth="1" />
        {/* closed eye + nose */}
        <path d="M18 42 Q21 45 24 42" stroke="var(--color-muted)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <circle cx="15" cy="44" r="1.2" fill="var(--color-gold-soft)" opacity="0.7" />
        {/* tail */}
        <g style={{ transformOrigin: "66px 48px", animation: "catTail 4s ease-in-out infinite" }}>
          <path
            d="M66 50 Q84 50 84 38 Q84 32 78 33"
            stroke="var(--color-panel-2)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </span>
  );
}

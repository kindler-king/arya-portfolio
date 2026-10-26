"use client";

import { motion } from "motion/react";

const colors: Record<string, { a: string; b: string }> = {
  gold: { a: "#d9bd6a", b: "#c9a227" },
  violet: { a: "#9d8fd0", b: "#7c6bae" },
  champagne: { a: "#ead9b0", b: "#cbb883" },
};

/**
 * Bespoke abstract motif per project — no stock screenshots. Each one hints at
 * the system's shape: orbiting agents, a retrieval lattice, a streaming wave.
 */
export default function ProjectVisual({
  accent,
  active,
}: {
  accent: string;
  active: boolean;
}) {
  const c = colors[accent] ?? colors.gold;

  if (accent === "violet") {
    // Retrieval lattice — a document grid feeding a central node
    return (
      <Frame c={c}>
        <g opacity="0.9">
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, col) => {
              const x = 40 + col * 34;
              const y = 30 + r * 30;
              return (
                <motion.rect
                  key={`${r}-${col}`}
                  x={x}
                  y={y}
                  width="18"
                  height="12"
                  rx="2"
                  fill={c.b}
                  initial={{ opacity: 0.12 }}
                  animate={{ opacity: active ? [0.12, 0.55, 0.12] : 0.16 }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: (r + col) * 0.15,
                  }}
                />
              );
            })
          )}
        </g>
        <circle cx="250" cy="105" r="26" fill="none" stroke={c.a} strokeWidth="1.2" opacity="0.5" />
        <circle cx="250" cy="105" r="9" fill={c.a} />
        {[45, 75, 105, 135, 165].map((y, i) => (
          <motion.line
            key={y}
            x1="120"
            y1={y}
            x2="230"
            y2="105"
            stroke={c.a}
            strokeWidth="0.8"
            initial={{ pathLength: 0, opacity: 0.15 }}
            animate={{ opacity: active ? [0.1, 0.5, 0.1] : 0.12 }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
          />
        ))}
      </Frame>
    );
  }

  if (accent === "champagne") {
    // Streaming waveform → translated waveform
    const bars = Array.from({ length: 40 });
    return (
      <Frame c={c}>
        <g>
          {bars.map((_, i) => {
            const x = 20 + i * 6.6;
            return (
              <motion.rect
                key={i}
                x={x}
                width="2.4"
                rx="1.2"
                fill={i < 20 ? c.a : c.b}
                initial={{ height: 10, y: 100 }}
                animate={{
                  height: active
                    ? [8, 20 + Math.abs(Math.sin(i * 0.9)) * 60, 8]
                    : 10 + Math.abs(Math.sin(i)) * 20,
                  y: active
                    ? [101, 105 - (20 + Math.abs(Math.sin(i * 0.9)) * 60) / 2, 101]
                    : 100,
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.035,
                  ease: "easeInOut",
                }}
                opacity={i < 20 ? 0.85 : 0.5}
              />
            );
          })}
          <line x1="150" y1="30" x2="150" y2="180" stroke={c.a} strokeWidth="0.6" opacity="0.25" strokeDasharray="3 4" />
        </g>
      </Frame>
    );
  }

  // gold — orbiting multi-agent system
  return (
    <Frame c={c}>
      <circle cx="150" cy="105" r="70" fill="none" stroke={c.b} strokeWidth="0.7" opacity="0.25" />
      <circle cx="150" cy="105" r="46" fill="none" stroke={c.b} strokeWidth="0.7" opacity="0.2" />
      <circle cx="150" cy="105" r="14" fill="none" stroke={c.a} strokeWidth="1.4" />
      <circle cx="150" cy="105" r="4" fill={c.a} />
      <motion.g
        style={{ originX: "150px", originY: "105px" }}
        animate={{ rotate: active ? 360 : 0 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        {[0, 72, 144, 216, 288].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const R = i % 2 === 0 ? 70 : 46;
          const x = 150 + Math.cos(rad) * R;
          const y = 105 + Math.sin(rad) * R;
          return (
            <g key={deg}>
              <line x1="150" y1="105" x2={x} y2={y} stroke={c.a} strokeWidth="0.5" opacity="0.3" />
              <circle cx={x} cy={y} r="6" fill={c.a} opacity="0.9" />
              <circle cx={x} cy={y} r="10" fill="none" stroke={c.a} strokeWidth="0.6" opacity="0.4" />
            </g>
          );
        })}
      </motion.g>
    </Frame>
  );
}

function Frame({
  c,
  children,
}: {
  c: { a: string; b: string };
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 300 210"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={`g-${c.b}`} cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor={c.b} stopOpacity="0.14" />
          <stop offset="100%" stopColor={c.b} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="300" height="210" fill={`url(#g-${c.b})`} />
      {children}
    </svg>
  );
}

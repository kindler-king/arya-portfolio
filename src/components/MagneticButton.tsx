"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  ariaLabel?: string;
};

/**
 * A button/link that gently pulls toward the cursor when hovered — the
 * "magnetic" micro-interaction. Uses a spring so it feels weighty, not twitchy.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 160, damping: 15, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 160, damping: 15, mass: 0.5 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-b from-[#e7d09b] to-[#c9a227] text-[#20180a] hover:from-[#f0dcae] hover:to-[#d4af57] shadow-[0_10px_40px_-12px_rgba(201,162,39,0.6)]"
      : "border border-[color:var(--color-hair-strong)] text-ink/90 hover:border-[color:var(--color-gold-soft)]/50 hover:text-ivory";

  const inner = (
    <motion.span
      className="flex items-center gap-2"
      style={{ x: sx, y: sy }}
    >
      {children}
    </motion.span>
  );

  const commonProps = {
    ref: ref as never,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    className: `${base} ${styles} ${className}`,
    "data-cursor": "hover",
    "aria-label": ariaLabel,
  };

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        {...commonProps}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }

  return (
    <button {...commonProps} onClick={onClick} type="button">
      {inner}
    </button>
  );
}

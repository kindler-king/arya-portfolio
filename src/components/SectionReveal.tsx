"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Whole-section entrance: each section fades and rises into place the first
 * time it scrolls into view, so the page reveals one section at a time.
 * Kept subtle (opacity + small lift) so it layers cleanly over the finer
 * per-element Reveal animations inside each section.
 */
export default function SectionReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.95, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </motion.div>
  );
}

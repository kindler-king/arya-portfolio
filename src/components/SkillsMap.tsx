"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { skills, skillGroups, type SkillNode } from "@/lib/data";
import Reveal from "./Reveal";

const DEFAULT_SKILL =
  skills.find((s) => s.label === "Multi-Agent") ?? skills[0];

export default function SkillsMap() {
  const [active, setActive] = useState<SkillNode>(DEFAULT_SKILL);

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-6 sm:py-36">
      <Reveal>
        <span className="eyebrow">Skills</span>
        <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
          An architecture, <span className="text-gradient-gold italic">not a checklist.</span>
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
          The stack behind production AI. Hover a node.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        {/* the map */}
        <Reveal delay={0.1} className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                  {group.label}
                </span>
                <span className="hairline" />
              </div>
              <div className="flex flex-wrap gap-2.5">
                {skills
                  .filter((s) => s.group === group.id)
                  .map((s) => {
                    const isActive = active.label === s.label;
                    return (
                      <button
                        key={s.label}
                        type="button"
                        data-cursor="hover"
                        onMouseEnter={() => setActive(s)}
                        onFocus={() => setActive(s)}
                        onClick={() => setActive(s)}
                        className={`relative rounded-xl border px-4 py-2.5 text-sm transition-all duration-300 ${
                          isActive
                            ? "border-[color:var(--color-gold-soft)]/60 bg-[color:var(--color-gold)]/[0.08] text-ivory"
                            : "border-[color:var(--color-hair)] text-muted hover:border-[color:var(--color-hair-strong)] hover:text-ink"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="skill-glow"
                            className="absolute inset-0 -z-10 rounded-xl"
                            style={{
                              boxShadow:
                                "0 12px 40px -14px rgba(201,162,39,0.6)",
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 320,
                              damping: 30,
                            }}
                          />
                        )}
                        {s.label}
                      </button>
                    );
                  })}
              </div>
            </div>
          ))}
        </Reveal>

        {/* detail panel */}
        <Reveal delay={0.15}>
          <div className="panel min-h-[240px] overflow-hidden rounded-[var(--radius-xl2)] p-7">
            <div className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold-soft)]" />
              System Node
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
              >
                <h3 className="font-display text-3xl tracking-tight text-ink">
                  {active.label}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {active.detail}
                </p>
                <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-gold-soft)]/80">
                  {skillGroups.find((g) => g.id === active.group)?.label}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

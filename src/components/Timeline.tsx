"use client";

import { motion } from "motion/react";
import { Briefcase, FlaskConical, GraduationCap } from "lucide-react";
import { timeline, type TimelineNode } from "@/lib/data";
import Reveal from "./Reveal";

const icon = (kind: TimelineNode["kind"]) => {
  if (kind === "work") return Briefcase;
  if (kind === "award") return GraduationCap;
  return FlaskConical;
};

export default function Timeline() {
  const featured = timeline.find((n) => n.featured);
  const rest = timeline.filter((n) => !n.featured);

  return (
    <section
      id="timeline"
      className="relative border-y border-[color:var(--color-hair)] bg-[color:var(--color-obsidian-2)] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <span className="eyebrow">Experience</span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
            From research labs to{" "}
            <span className="text-gradient-gold italic">production systems.</span>
          </h2>
        </Reveal>

        {/* Featured current role */}
        {featured && (
          <Reveal delay={0.05}>
            <div className="panel relative mt-12 overflow-hidden rounded-[var(--radius-xl2)] p-7 sm:p-9">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(600px 220px at 85% -10%, rgba(201,162,39,0.12), transparent 60%)",
                }}
              />
              <div className="relative flex flex-wrap items-start gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gradient-to-b from-[#e7d09b] to-[#c9a227] text-[#20180a] shadow-[0_10px_30px_-10px_rgba(201,162,39,0.7)]">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
                      {featured.role}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-gold-soft)]/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-gold-soft)]">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-gold-soft)] opacity-70" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold-soft)]" />
                      </span>
                      Now
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-[color:var(--color-gold-soft)]/90">
                    {featured.org} · {featured.period}
                  </p>
                  <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink/80">
                    {featured.note}
                  </p>
                  {featured.tags && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {featured.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[color:var(--color-hair-strong)] bg-white/[0.02] px-3 py-1 font-mono text-[11px] tracking-wide text-ink/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* The earlier roles — horizontal rail on desktop, stacked on mobile */}
        <div className="mt-14 -mx-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="relative flex min-w-max gap-6 sm:min-w-0 sm:grid sm:grid-cols-4 sm:gap-0">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-[46px] hidden h-px bg-gradient-to-r from-transparent via-[color:var(--color-hair-strong)] to-transparent sm:block"
            />
            {rest.map((node, i) => {
              const Icon = icon(node.kind);
              return (
                <motion.div
                  key={node.role}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="group relative w-[260px] flex-none sm:w-auto sm:px-3"
                >
                  <div className="font-mono text-xs text-[color:var(--color-gold-soft)]">
                    {node.period}
                  </div>

                  <div className="relative mt-4 flex h-[40px] items-center">
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-hair-strong)] bg-[color:var(--color-obsidian)] transition-colors duration-300 group-hover:border-[color:var(--color-gold-soft)]/60">
                      <Icon className="h-4 w-4 text-muted transition-colors group-hover:text-[color:var(--color-gold-soft)]" />
                    </span>
                  </div>

                  <h3 className="mt-5 text-[15px] font-medium leading-snug text-ink">
                    {node.role}
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--color-gold-soft)]/80">
                    {node.org}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted">
                    {node.note}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

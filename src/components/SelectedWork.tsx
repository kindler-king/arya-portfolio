"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import Reveal from "./Reveal";
import ProjectVisual from "./ProjectVisual";

const accentColor: Record<string, string> = {
  gold: "var(--color-gold-soft)",
  violet: "var(--color-violet)",
  champagne: "var(--color-champagne)",
};

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const [hover, setHover] = useState(false);
  const color = accentColor[p.accent];

  return (
    <Reveal delay={i * 0.08}>
      <motion.a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="hover"
        aria-label={`${p.name} — open ${p.linkLabel}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
        className="panel group relative block overflow-hidden rounded-[var(--radius-xl2)] p-6 sm:p-8"
        style={{
          boxShadow: hover
            ? `0 30px 80px -40px ${color}, inset 0 1px 0 0 rgba(255,255,255,0.04)`
            : "inset 0 1px 0 0 rgba(255,255,255,0.03)",
        }}
      >
        {/* accent border wash on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[var(--radius-xl2)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px 200px at 80% 0%, ${color}12, transparent 60%)`,
          }}
        />

        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-faint">{p.index}</span>
              <span className="hairline max-w-[80px]" />
              <span
                className="font-mono text-[11px] uppercase tracking-[0.22em]"
                style={{ color }}
              >
                {p.kind}
              </span>
            </div>

            <h3 className="mt-5 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
              {p.name}
            </h3>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="eyebrow mb-1.5 text-[color:var(--color-muted)]">
                  Problem
                </dt>
                <dd className="text-[15px] leading-relaxed text-muted">
                  {p.problem}
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-1.5 text-[color:var(--color-muted)]">
                  Architecture
                </dt>
                <dd className="text-[15px] leading-relaxed text-ink/80">
                  {p.architecture}
                </dd>
              </div>
            </dl>

            <ul className="mt-6 space-y-2">
              {p.impact.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-ink/85"
                >
                  <span
                    className="mt-1.5 h-1 w-1 flex-none rounded-full"
                    style={{ background: color }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[color:var(--color-hair)] px-3 py-1 font-mono text-[11px] tracking-wide text-muted transition-colors group-hover:border-[color:var(--color-hair-strong)]"
                >
                  {s}
                </span>
              ))}
            </div>

            <div
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium"
              style={{ color }}
            >
              <span>{p.linkLabel}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <div className="relative order-first aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[color:var(--color-hair)] bg-[color:var(--color-obsidian-2)] lg:order-last">
            {p.image ? (
              <>
                <Image
                  src={p.image}
                  alt={`${p.name} — live product screenshot`}
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.04]"
                  style={{ objectPosition: p.imagePos }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,8,10,0.85) 0%, rgba(8,8,10,0.1) 32%, transparent 55%), radial-gradient(130% 90% at 50% -10%, transparent 55%, rgba(8,8,10,0.5))",
                  }}
                />
              </>
            ) : (
              <ProjectVisual accent={p.accent} active={hover} />
            )}
            <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--color-hair-strong)] bg-[color:var(--color-obsidian)]/60 backdrop-blur transition-all duration-500 group-hover:border-[color:var(--color-gold-soft)]/50 group-hover:bg-[color:var(--color-obsidian)]/80">
              <ArrowUpRight className="h-4 w-4 text-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </motion.a>
    </Reveal>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-6 sm:py-36">
      <Reveal>
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Selected Work</span>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-ink sm:text-5xl">
              Three systems, <span className="text-gradient-gold italic">shipped.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-muted md:block">
            Not a gallery of demos. Production AI, running for real users, under
            real load.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 space-y-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}

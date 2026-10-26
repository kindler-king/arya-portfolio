"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import SleepingCat from "./SleepingCat";

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-[color:var(--color-hair)] bg-[color:var(--color-obsidian-2)] py-28 sm:py-36"
    >
      {/* cat naps on the divider */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <SleepingCat size={58} />
      </div>

      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        {/* portrait */}
        <Reveal>
          <div className="group relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[var(--radius-xl2)] border border-[color:var(--color-hair-strong)]">
            <Image
              src="/portrait-arya.jpg"
              alt="Arya Sarkar"
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.03]"
              priority
            />
            {/* warm gold wash + bottom scrim for the caption */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(420px 300px at 72% 12%, rgba(201,162,39,0.12), transparent 62%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[color:var(--color-obsidian)] via-[color:var(--color-obsidian)]/50 to-transparent"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-ink/85">
              <span>Arya Sarkar</span>
              <span>Kolkata · IN</span>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">About</span>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 font-display text-[clamp(1.7rem,3.4vw,2.9rem)] leading-[1.15] tracking-tight text-ink">
              I&apos;m an engineer who ships AI systems — research-backed, built
              to hold up in production, not just in a demo. Four years turning{" "}
              <span className="text-gradient-gold italic">prototypes into products people use.</span>
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                My focus is systems — orchestration, retrieval, evaluation,
                observability. The machinery that makes AI reliable enough to
                charge for. I care more about latency graphs than launch tweets.
              </p>
              <p className="flex items-start gap-3">
                <span className="mt-1 inline-block h-4 w-4 flex-none">
                  <CatGlyph />
                </span>
                <span>
                  My favourite debugging partner is my cat. She reviews every
                  late-night deploy from the corner of the desk, unimpressed.
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[color:var(--color-hair)] pt-8">
              {[
                { k: "4+", v: "Years in production AI" },
                { k: "0→1", v: "Products led as founder" },
                { k: "8+", v: "Peer-reviewed papers" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-gradient-gold sm:text-4xl">
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-muted">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* faint personality line — anime/LoL nod, kept quiet */}
      <Reveal>
        <motion.p className="mx-auto mt-20 max-w-6xl px-5 text-center font-mono text-[11px] tracking-[0.18em] text-faint sm:px-6">
          off the clock: league of legends · late-night anime · one very
          opinionated cat
        </motion.p>
      </Reveal>
    </section>
  );
}

function CatGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M4 5l3 4M20 5l-3 4M5 9c0 6 3 9 7 9s7-3 7-9c0-1.5-.6-3-1.4-4M6.4 5C5.6 6 5 7.5 5 9"
        stroke="var(--color-gold-soft)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="11" r="0.9" fill="var(--color-gold-soft)" />
      <circle cx="14.5" cy="11" r="0.9" fill="var(--color-gold-soft)" />
    </svg>
  );
}

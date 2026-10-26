"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { publications, awards, profile } from "@/lib/data";
import Reveal from "./Reveal";

function Row({
  year,
  title,
  venue,
  i,
  href,
}: {
  year: string;
  title: string;
  venue: string;
  i: number;
  href?: string;
}) {
  const inner = (
    <>
      <span className="font-mono text-xs text-[color:var(--color-gold-soft)]/70">
        {year}
      </span>
      <div>
        <p className="flex items-start gap-1.5 text-[15px] leading-snug text-ink/90 transition-colors group-hover:text-ivory">
          <span>{title}</span>
          {href && (
            <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 flex-none -translate-x-1 text-[color:var(--color-gold-soft)] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          )}
        </p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          {venue}
        </p>
      </div>
    </>
  );

  const grid =
    "grid grid-cols-[auto_1fr] gap-x-5 border-t border-[color:var(--color-hair)] py-4 transition-colors hover:bg-white/[0.015]";

  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: i * 0.06 }}
      className="group"
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="hover"
          aria-label={`${title} — open on Google Scholar`}
          className={`${grid} rounded-lg`}
        >
          {inner}
        </a>
      ) : (
        <div className={grid}>{inner}</div>
      )}
    </motion.li>
  );
}

export default function ResearchAwards() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-28">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <span className="eyebrow">Research</span>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-ink">
              Publications
            </h2>
          </Reveal>
          <ul className="mt-8">
            {publications.map((p, i) => (
              <Row key={p.title} {...p} i={i} href={profile.links.scholar} />
            ))}
          </ul>
          <Reveal delay={0.1}>
            <a
              href={profile.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="group mt-7 inline-flex items-center gap-2 border-t border-[color:var(--color-hair)] pt-6 text-sm font-medium text-[color:var(--color-gold-soft)] transition-colors hover:text-champagne"
            >
              View more on Google Scholar
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <span className="eyebrow">Recognition</span>
            <h2 className="mt-4 font-display text-3xl tracking-tight text-ink">
              Awards
            </h2>
          </Reveal>
          <ul className="mt-8">
            {awards.map((a, i) => (
              <Row key={a.title + a.year} {...a} i={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight } from "lucide-react";

function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58l-.01-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
    </svg>
  );
}
import { profile } from "@/lib/data";
import ConstellationField from "./ConstellationField";
import MagneticButton from "./MagneticButton";

const words = ["I build AI systems", "that run in production."];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);

  const [manifesto, setManifesto] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setManifesto((m) => (m + 1) % profile.manifesto.length),
      3800
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="noise relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <ConstellationField />
      {/* horizon glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[color:var(--color-gold)]/[0.05] to-transparent"
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-gold-soft)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-gold-soft)]" />
          </span>
          <span className="eyebrow">Senior AI Engineer · Kolkata</span>
        </motion.div>

        <h1 className="font-display text-[clamp(2.6rem,8.5vw,7.2rem)] leading-[0.98] tracking-[-0.02em]">
          {words.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.4 + i * 0.12,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className={`block ${
                  i === 1 ? "text-gradient-gold italic" : "text-ink"
                }`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {profile.subhead}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#work">
            View Work
            <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </MagneticButton>
          <MagneticButton href={profile.links.resume} variant="ghost">
            Resume
          </MagneticButton>
          <MagneticButton
            href={profile.links.github}
            variant="ghost"
            ariaLabel="GitHub"
          >
            <GithubMark className="h-4 w-4" />
            GitHub
          </MagneticButton>
        </motion.div>

        {/* rotating manifesto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 h-6 overflow-hidden"
        >
          <motion.p
            key={manifesto}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            className="font-mono text-xs tracking-wide text-faint"
          >
            <span className="text-[color:var(--color-gold-soft)]">{"// "}</span>
            {profile.manifesto[manifesto]}
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
            Scroll
          </span>
          <div className="h-10 w-px overflow-hidden bg-[color:var(--color-hair-strong)]">
            <motion.div
              animate={{ y: [-40, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-4 w-px bg-[color:var(--color-gold-soft)]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

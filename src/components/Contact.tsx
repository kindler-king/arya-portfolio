"use client";

import { useState } from "react";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import ConstellationField from "./ConstellationField";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  return (
    <section
      id="contact"
      className="noise relative overflow-hidden py-32 sm:py-44"
    >
      <ConstellationField density={0.00006} />
      <div className="relative z-10 mx-auto max-w-6xl px-5 text-center sm:px-6">
        <Reveal>
          <span className="eyebrow">Contact</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,7vw,6rem)] leading-[0.98] tracking-[-0.02em] text-ink">
            Let&apos;s build something
            <br />
            <span className="text-gradient-gold italic">that survives production.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-muted">
            If you&apos;re building AI that has to work in production — founding
            roles, hard infrastructure, real users at scale — my inbox is open.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
            <button
              type="button"
              onClick={copy}
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-hair-strong)] px-5 py-3.5 text-sm text-muted transition-colors hover:border-[color:var(--color-gold-soft)]/50 hover:text-ink"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[color:var(--color-gold-soft)]" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy email
                </>
              )}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

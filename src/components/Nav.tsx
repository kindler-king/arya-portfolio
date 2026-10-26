"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "@/lib/data";

const links = [
  { label: "Work", href: "#work" },
  { label: "Timeline", href: "#timeline" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

const sectionIds = ["work", "timeline", "skills", "about", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let raf = 0;
    const update = () => {
      setScrolled(window.scrollY > 24);
      // scrollspy: the section currently sitting under the nav wins
      const anchor = 160;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= anchor && r.bottom > anchor) current = id;
      }
      // near page bottom, force the last section active
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 2
      ) {
        current = sectionIds[sectionIds.length - 1];
      }
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "border border-[color:var(--color-hair)] bg-[color:var(--color-obsidian)]/70 backdrop-blur-xl"
            : "border border-transparent"
        }`}
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          data-cursor="hover"
          aria-label="Arya Sarkar — home"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--color-gold-soft)]/40">
            <span className="font-display text-[15px] leading-none text-gradient-gold">
              A
            </span>
            <span className="absolute inset-0 animate-[breathe_4s_ease-in-out_infinite] rounded-full border border-[color:var(--color-gold-soft)]/20" />
          </span>
          <span className="font-display text-lg tracking-tight text-ink">
            Arya<span className="text-muted"> Sarkar</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                data-cursor="hover"
                aria-current={isActive ? "true" : undefined}
                className={`group relative text-sm transition-colors ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[color:var(--color-gold-soft)] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="hidden rounded-full border border-[color:var(--color-hair-strong)] px-4 py-2 text-sm text-ink/90 transition-colors hover:border-[color:var(--color-gold-soft)]/50 hover:text-ivory sm:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-hair-strong)] md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-ink transition-all ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-ink transition-all ${open ? "-translate-y-1 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute left-4 right-4 top-[72px] flex flex-col gap-1 rounded-3xl border border-[color:var(--color-hair)] bg-[color:var(--color-obsidian)]/95 p-3 backdrop-blur-xl md:hidden"
          >
            {[...links, { label: "Contact", href: "#contact" }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base text-ink/90 transition-colors hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

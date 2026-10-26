"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * A brief, champion-select-flavored intro: a hexagonal emblem locks in, a
 * counter fills, then the curtain lifts. Only shows once per session.
 */
export default function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("arya-intro")) {
      setShow(false);
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";

    const duration = reduced ? 400 : 1600;
    const start = Date.now();
    // Timer-driven completion so the intro always finishes even when
    // requestAnimationFrame is throttled (background/inactive tabs).
    const counter = setInterval(() => {
      const p = Math.min((Date.now() - start) / duration, 1);
      setCount(Math.floor(p * 100));
    }, 40);

    const finish = setTimeout(() => {
      clearInterval(counter);
      setCount(100);
      setDone(true);
      sessionStorage.setItem("arya-intro", "1");
      hide = setTimeout(() => {
        setShow(false);
        document.body.style.overflow = "";
      }, 700);
    }, duration);

    let hide: ReturnType<typeof setTimeout>;
    return () => {
      clearInterval(counter);
      clearTimeout(finish);
      clearTimeout(hide);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[color:var(--color-obsidian)]"
          initial={{ opacity: 1 }}
          animate={{ opacity: done ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
          <motion.div
            animate={{ scale: done ? 1.08 : 1, opacity: done ? 0 : 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex h-28 w-28 items-center justify-center"
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
              <motion.path
                d="M50 4 L88 26 L88 74 L50 96 L12 74 L12 26 Z"
                fill="none"
                stroke="var(--color-gold-soft)"
                strokeWidth="1.4"
                initial={{ pathLength: 0, opacity: 0.3 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
              <motion.path
                d="M50 18 L74 32 L74 68 L50 82 L26 68 L26 32 Z"
                fill="none"
                stroke="var(--color-violet)"
                strokeWidth="0.8"
                opacity="0.5"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                style={{ transformOrigin: "50px 50px" }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </svg>
            <span className="font-display text-4xl text-gradient-gold">A</span>
          </motion.div>

          <div className="mt-8 flex items-baseline gap-2 font-mono text-xs tracking-[0.3em] text-muted">
            <span className="text-[color:var(--color-gold-soft)]">
              {String(count).padStart(3, "0")}
            </span>
            <span className="text-faint">/ LOADING SYSTEMS</span>
          </div>
          <div className="mt-4 h-px w-40 overflow-hidden bg-[color:var(--color-hair)]">
            <motion.div
              className="h-full bg-[color:var(--color-gold-soft)]"
              animate={{ width: `${count}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

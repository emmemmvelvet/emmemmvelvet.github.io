"use client";

import * as React from "react";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

/* ── types ───────────────────────────────────────────────────── */

export type ArcRevealGreeting = {
  /** Greeting text in the target script */
  text: string;
  /** Optional `lang` attribute applied to the span (helps screen readers / font rendering) */
  lang?: string;
};

export interface ArcRevealHeroProps {
  /** Greetings cycled before the arc reveal. */
  greetings?: ArcRevealGreeting[];
  /** How long each greeting is held on screen (ms). @default 480 */
  greetingHold?: number;
  /** Duration of the curved curtain reveal (ms). @default 1100 */
  revealDuration?: number;
  /** Outer `<section>` class. Receives the *post-reveal* surface. */
  className?: string;
  /** Class for the intro (pre-reveal) overlay surface. */
  introClassName?: string;
  /** Class for the cycled greeting `<span>`. */
  greetingClassName?: string;
  /** Class for the wrapper around `children` (the revealed content). */
  revealClassName?: string;
  /** Flat background color for the preloader surface & curtain (default: #FFFFFF). */
  curtainColor?: string;
  /**
   * Optional `sessionStorage` key — when set, the intro plays only once per
   * session for the same key. Leave unset to replay on every mount.
   */
  storageKey?: string;
  /** Content shown after the curtain reveal (the "landing"). */
  children?: React.ReactNode;
}

/* ── defaults ────────────────────────────────────────────────── */

const DEFAULT_GREETINGS: ArcRevealGreeting[] = [
  { text: "Emm Emm Velvet" },
  { text: "Est. 1995 · Panipat" },
  { text: "Home Furnishings" },
  { text: "Sofa Fabric · Covers · Bedding · Cushions" },
];

type Phase = "intro" | "reveal" | "done";

/* ── component ───────────────────────────────────────────────── */

export function ArcRevealHero({
  greetings = DEFAULT_GREETINGS,
  greetingHold = 480,
  revealDuration = 1100,
  className,
  introClassName,
  greetingClassName,
  revealClassName,
  curtainColor = "#FFFFFF",
  storageKey,
  children,
}: ArcRevealHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const [phase, setPhase] = React.useState<Phase>("intro");
  const [index, setIndex] = React.useState(0);

  // Drive the arc shape from a single 0→1 progress.
  // The curve is a quadratic bezier with an upward arch.
  // At p=0 (intro): curtain covers the entire screen (0 to 130). Full flat white background.
  // At p=1 (reveal complete): curtain lifts above screen (to -40). Full content unveiled.
  const progress = useMotionValue(0);
  const arcPath = useTransform(progress, (p: number) => {
    const edge = 130 - p * 170;
    const control = edge - 25;
    return `M 0 0 L 100 0 L 100 ${edge} Q 50 ${control} 0 ${edge} Z`;
  });

  // Lock body scroll during preloader
  React.useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  // Honor reduced-motion + replay-suppression on mount.
  React.useEffect(() => {
    if (prefersReducedMotion) {
      setPhase("done");
      return;
    }
    if (storageKey && typeof window !== "undefined") {
      try {
        if (window.sessionStorage.getItem(storageKey) === "done") {
          setPhase("done");
        }
      } catch {
        /* sessionStorage can throw in private mode — fall through */
      }
    }
  }, [prefersReducedMotion, storageKey]);

  // Greeting cycle.
  React.useEffect(() => {
    if (phase !== "intro") return;
    const isLast = index >= greetings.length - 1;
    if (isLast) {
      const t = window.setTimeout(() => setPhase("reveal"), greetingHold + 250);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setIndex((i) => i + 1), greetingHold);
    return () => window.clearTimeout(t);
  }, [phase, index, greetingHold, greetings.length]);

  // Drive the curtain reveal.
  React.useEffect(() => {
    if (phase !== "reveal") return;
    const controls = animate(progress, 1, {
      duration: revealDuration / 1000,
      ease: [0.85, 0, 0.15, 1],
      onComplete: () => {
        if (storageKey && typeof window !== "undefined") {
          try {
            window.sessionStorage.setItem(storageKey, "done");
          } catch {
            /* ignore */
          }
        }
        setPhase("done");
      },
    });
    return () => controls.stop();
  }, [phase, progress, revealDuration, storageKey]);

  const showOverlay = phase !== "done";
  const current = greetings[Math.min(index, greetings.length - 1)];

  return (
    <section
      aria-label="Hero"
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-background text-foreground",
        className,
      )}
    >
      <div className={cn("relative z-0", revealClassName)}>{children}</div>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="arc-reveal-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
              "fixed inset-0 z-[9999] h-screen w-screen overflow-hidden pointer-events-auto",
              introClassName,
            )}
            style={{
              backgroundColor: phase === "intro" ? curtainColor : "transparent",
            }}
          >
            {/* Rising curved curtain */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <motion.path d={arcPath} style={{ fill: curtainColor }} />
            </svg>

            {/* Cycled greeting */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <AnimatePresence mode="wait">
                {phase === "intro" && current && (
                  <motion.span
                    key={`${index}-${current.text}`}
                    lang={current.lang}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "select-none px-6 text-center text-4xl sm:text-6xl md:text-7xl font-serif font-light tracking-tight text-[#141715]",
                      greetingClassName,
                    )}
                  >
                    {current.text}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ArcRevealHero;

import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Returns a ref + boolean that is `true` once the element enters the viewport.
 * `once: true` means the animation plays only the first time it enters.
 */
export function useScrollReveal(options?: { threshold?: number; once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: options?.threshold ?? 0.15,
    once: options?.once ?? true,
  });
  return { ref, isInView };
}

/** Pre-built Framer Motion variants for consistent animations */
export const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -64 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export const fadeRight = {
  hidden: { opacity: 0, x: 64 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const lineReveal = {
  hidden: { scaleX: 0, originX: 0 },
  visible: (i = 0) => ({
    scaleX: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

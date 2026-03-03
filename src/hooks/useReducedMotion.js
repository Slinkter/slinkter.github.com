import { useReducedMotion as useMotionReducedMotion } from "motion/react";

/**
 * A hook that reads the OS-level `prefers-reduced-motion` setting.
 * When true, all motion-based animations should be disabled or drastically reduced.
 *
 * This wraps motion's own hook so we have a single, project-level import path.
 *
 * @returns {boolean} True if the user prefers reduced motion.
 *
 * @example
 * const shouldReduce = useReducedMotion();
 * const variants = shouldReduce ? staticVariants : animatedVariants;
 */
export function useReducedMotion() {
  return useMotionReducedMotion();
}

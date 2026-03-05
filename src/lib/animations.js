/**
 * @typedef {import("motion/react").Variants} Variants
 */

/**
 * Shared Motion Animations
 *
 * Design principles:
 * - Cards NEVER declare `initial` on their own — they inherit from the
 *   nearest orchestrator container that owns `whileInView`.
 * - This prevents each card from starting "hidden" independently, which
 *   causes the flicker/blink seen when scrolling into view.
 * - CSS `transition-*` + Motion transforms must NOT coexist on the same
 *   element. Use Motion `whileHover` instead of Tailwind `hover:translate-y-*`.
 */

// ─── Orchestrator ────────────────────────────────────────────────────────────

/**
 * Stagger wrapper — owns `whileInView` and coordinates child entrance.
 * Children only need `variants={cardItem}`, no `initial`/`animate`.
 *
 * @param {number} [stagger=0.08] - Delay between children (seconds)
 * @param {number} [delay=0]     - Delay before first child starts (seconds)
 * @returns {Variants}
 */
export const staggerContainer = (stagger = 0.08, delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

// ─── Child variants ───────────────────────────────────────────────────────────

/**
 * Standard fade-up for cards orchestrated by `staggerContainer`.
 * Safe to use on `m.article` / `m.div` WITHOUT `initial` or `animate` props.
 *
 * @type {Variants}
 */
export const cardItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Alias kept for backward-compat.
 * @type {Variants}
 */
export const fadeUp = cardItem;

/**
 * Subtle scale-in — use for modals, tooltips, badges.
 * @type {Variants}
 */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ─── Hover / interaction ──────────────────────────────────────────────────────

/**
 * Card lift on hover — replaces Tailwind `hover:-translate-y-*`.
 * MUST be applied via `whileHover` prop to avoid transform conflicts.
 *
 * @example
 * <m.article whileHover={cardHover} transition={cardHoverTransition}>
 */
export const cardHover = { y: -8, scale: 1.01 };

/**
 * Spring transition for cardHover — feels physical.
 */
export const cardHoverTransition = {
  type: "spring",
  stiffness: 280,
  damping: 22,
};

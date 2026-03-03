/**
 * @typedef {import("motion/react").Variants} Variants
 */

/**
 * Shared Motion Animations
 * 
 * Centralized variants to maintain consistency and reduce bundle size.
 */

/**
 * Standard fade-up animation for cards and elements.
 * @type {Variants}
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
    },
  },
};

/**
 * Factory for staggered children entrance.
 * 
 * @param {number} [staggerChildren=0.1] Delay between each child
 * @param {number} [delayChildren=0] Initial delay for the container
 * @returns {Variants}
 */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Subtle scale-in animation.
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

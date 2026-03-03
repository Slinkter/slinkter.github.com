/**
 * Shared Motion Animations
 * 
 * Centralized variants to maintain consistency and reduce bundle size.
 */

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      ...custom 
    },
  }),
};

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

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

import PropTypes from "prop-types";
import { m } from "motion/react";
import { cn } from "@/lib/utils";
import { staggerContainer } from "@/lib/animations";

/**
 * Section Component
 *
 * Reusable, animated layout wrapper for page sections.
 * Owns `whileInView` + stagger orchestration so child cards
 * NEVER need `initial` / `whileInView` of their own — this is
 * what prevents the scroll-triggered flicker/blink bug.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title   - Section heading text
 * @param {string} [props.id]    - HTML id attribute
 * @param {React.ReactNode} props.children
 */
const Section = ({ title, id, children }) => {
  return (
    <section id={id} className="py-20 w-full">
      <h2
        className={cn(
          "text-3xl font-bold text-center mb-16 relative inline-block w-full text-content-main",
          "after:content-[''] after:block after:w-20 after:h-1",
          "after:bg-brand-primary after:mx-auto after:mt-4 after:rounded-full",
        )}
      >
        {title}
      </h2>

      {/* ── Motion orchestrator ──────────────────────────────────────────── */}
      {/* Single whileInView here → children just inherit via `variants` prop */}
      <m.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 container mx-auto"
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {children}
      </m.div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;

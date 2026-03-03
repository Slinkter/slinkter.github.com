import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

/**
 * Section Component
 *
 * Reusable layout wrapper for page sections.
 * Pure Tailwind — no BEM abstraction.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title - Section heading text
 * @param {"gray"|"dark"} [props.bgVariant="gray"] - Background variant
 * @param {string} [props.id] - HTML id attribute
 * @param {React.ReactNode} props.children
 */
const Section = ({ title, bgVariant = "gray", id, children }) => {
  return (
    <section
      id={id}
      className={cn(
        "py-20 w-full",
        bgVariant === "dark"
          ? "bg-white dark:bg-gray-900"
          : "bg-gray-50 dark:bg-gray-800/50",
      )}
    >
      <h2
        className={cn(
          "text-3xl font-bold text-center mb-16 relative inline-block w-full",
          "after:content-[''] after:block after:w-20 after:h-1",
          "after:bg-blue-500 after:mx-auto after:mt-4 after:rounded-full",
        )}
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 container mx-auto">
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  bgVariant: PropTypes.oneOf(["gray", "dark"]),
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;

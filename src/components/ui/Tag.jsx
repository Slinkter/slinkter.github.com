import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

/**
 * Tag Component
 * 
 * Reusable UI atomic component for technology tags or labels.
 */
const Tag = ({ children, className }) => {
  return (
    <span
      className={cn(
        "px-3 py-1 text-xs font-semibold rounded-full",
        "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800",
        className
      )}
    >
      {children}
    </span>
  );
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Tag;

import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

/**
 * Tag Component
 *
 * Reusable UI atomic component for technology tags or labels.
 * Uses brand-primary design token — adapts to both light/dark themes automatically.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Tag text content
 * @param {string} [props.className] - Optional additional classes via cn()
 */
const Tag = ({ children, className }) => {
  return (
    <span
      className={cn(
        "px-3 py-1 text-xs font-semibold rounded-full",
        "bg-brand-primary/10 text-brand-primary border border-brand-primary/25",
        className,
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

import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

/**
 * Input Component
 *
 * Reusable form input with standardized styles and focus states.
 * Uses design tokens exclusively — focus ring and border use brand-primary.
 *
 * @param {Object} props
 * @param {string} [props.label] - Visible label for the input
 * @param {string} props.id - Must match the label's htmlFor for a11y
 * @param {string} [props.className] - Optional wrapper class overrides
 * @param {string} [props.error] - Error message, triggers red border state
 */
export const Input = ({ label, id, className, error, ...props }) => {
  const inputBase = cn(
    "w-full px-4 py-3 rounded-xl",
    "bg-surface-base border border-separator",
    "focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/25 outline-none",
    "transition-all text-content-main placeholder:text-content-muted/60",
    "disabled:opacity-70 disabled:cursor-not-allowed",
  );

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-content-muted mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          inputBase,
          error && "border-red-500 focus:ring-red-400/25",
        )}
        {...props}
      />
    </div>
  );
};

/**
 * TextArea Component
 *
 * Reusable textarea with standardized styles.
 * Uses design tokens exclusively — focus ring and border use brand-primary.
 *
 * @param {Object} props
 * @param {string} [props.label] - Visible label
 * @param {string} props.id - Must match the label's htmlFor for a11y
 * @param {string} [props.className] - Optional wrapper class overrides
 */
export const TextArea = ({ label, id, className, ...props }) => {
  const inputBase = cn(
    "w-full px-4 py-3 rounded-xl",
    "bg-surface-base border border-separator",
    "focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/25 outline-none",
    "transition-all text-content-main placeholder:text-content-muted/60",
    "disabled:opacity-70 disabled:cursor-not-allowed resize-none",
  );

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-content-muted mb-1"
        >
          {label}
        </label>
      )}
      <textarea id={id} className={inputBase} {...props} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  error: PropTypes.string,
};

TextArea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

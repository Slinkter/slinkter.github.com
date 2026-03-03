import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

/**
 * Input Component
 * 
 * Reusable form input with standardized styles and focus states.
 */
export const Input = ({ label, id, className, error, ...props }) => {
  const inputBase = "w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all text-gray-800 dark:text-white disabled:opacity-70 disabled:cursor-not-allowed";

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(inputBase, error && "border-red-500 focus:ring-red-200")}
        {...props}
      />
    </div>
  );
};

/**
 * TextArea Component
 * 
 * Reusable textarea with standardized styles.
 */
export const TextArea = ({ label, id, className, ...props }) => {
  const inputBase = "w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all text-gray-800 dark:text-white disabled:opacity-70 disabled:cursor-not-allowed resize-none";

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
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

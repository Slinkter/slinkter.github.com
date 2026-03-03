import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

/**
 * Button Component - Portfolio Standard
 * 
 * Standardized action button following the "Send Message" reference design.
 * Features: rounded-full, brand shadow, hover scaling, and semantic colors.
 */
const Button = ({ 
  children, 
  className, 
  variant = "primary", 
  isLoading = false, 
  disabled, 
  icon: Icon,
  as: Component = "button",
  ...props 
}) => {
  const baseStyles = "inline-flex px-8 py-3 rounded-full font-bold transition-all items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-primary hover:bg-blue-700 text-white shadow-lg shadow-brand-primary/30 hover:scale-105 active:scale-95 focus-visible:ring-brand-primary",
    secondary: "bg-surface-elevated hover:bg-surface-base text-content-main border border-separator shadow-sm hover:scale-105 active:scale-95 focus-visible:ring-separator",
    neutral: "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white shadow-lg hover:scale-105 active:scale-95 focus-visible:ring-gray-500",
  };

  return (
    <Component
      className={cn(baseStyles, variants[variant], className)}
      disabled={isLoading || disabled}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span>Procesando...</span>
      ) : (
        <>
          {Icon && <Icon className="text-xl" />}
          <span>{children}</span>
        </>
      )}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "neutral"]),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.elementType,
  as: PropTypes.elementType,
};

export default Button;

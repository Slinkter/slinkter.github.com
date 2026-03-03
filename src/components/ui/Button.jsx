import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

/**
 * Button Component - Portfolio Standard
 *
 * Standardized action button following the "Send Message" reference design.
 * Features: rounded-full, brand shadow, hover scaling, and semantic colors.
 * Loading state renders an animated CSS spinner for premium feel.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button label text
 * @param {string} [props.className] - Optional additional classes
 * @param {"primary"|"secondary"|"neutral"} [props.variant="primary"] - Visual variant
 * @param {boolean} [props.isLoading=false] - Replaces content with animated spinner
 * @param {boolean} [props.disabled] - Disables the button
 * @param {React.ElementType} [props.icon] - Optional react-icon component
 * @param {React.ElementType} [props.as="button"] - Polymorphic element type (e.g. "a")
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
  const baseStyles =
    "inline-flex px-8 py-3 rounded-full font-bold transition-all items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-brand-primary hover:opacity-90 text-white shadow-lg shadow-brand-primary/30 hover:scale-105 active:scale-95 focus-visible:ring-brand-primary",
    secondary:
      "bg-surface-elevated hover:bg-surface-base text-content-main border border-separator shadow-sm hover:scale-105 active:scale-95 focus-visible:ring-separator",
    neutral:
      "bg-surface-elevated hover:bg-surface-section text-content-main border border-separator shadow-md hover:shadow-brand-primary/20 hover:border-brand-primary/30 hover:scale-105 active:scale-95 focus-visible:ring-brand-primary/50",
  };

  return (
    <Component
      className={cn(baseStyles, variants[variant], className)}
      disabled={isLoading || disabled}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          {/* Animated CSS spinner */}
          <span
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
            aria-hidden="true"
          />
          <span>Procesando...</span>
        </span>
      ) : (
        <>
          {Icon && <Icon className="text-xl" aria-hidden="true" />}
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

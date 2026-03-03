import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

/**
 * SkeletonWorkCard Component
 *
 * Loading placeholder that mirrors WorkCard layout.
 * Pure Tailwind — no BEM abstraction.
 *
 * @component
 * @param {Object} props
 * @param {boolean} [props.vertical=false] - Use stacked (vertical) layout
 * @returns {React.JSX.Element}
 */
const SkeletonWorkCard = ({ vertical = false }) => {
  return (
    <article
      className={cn(
        "bg-white dark:bg-gray-800 rounded-3xl overflow-hidden flex flex-col h-full",
        !vertical && "md:flex-row",
      )}
    >
      {/* Image skeleton */}
      <div
        className={cn(
          "relative overflow-hidden w-full skeleton",
          vertical ? "h-48" : "h-64 md:h-auto md:w-2/5",
        )}
      />

      {/* Content skeleton */}
      <div
        className={cn(
          "p-8 flex flex-col justify-center flex-grow",
          !vertical && "md:w-3/5",
        )}
      >
        <div className="flex justify-between items-start mb-4 w-full">
          <div className="w-full">
            <div className="h-4 w-24 skeleton mb-2" />
            <div className="h-8 w-3/4 skeleton" />
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <div className="h-4 w-full skeleton" />
          <div className="h-4 w-full skeleton" />
          <div className="h-4 w-2/3 skeleton" />
        </div>

        <div className="flex gap-2 mt-auto">
          <div className="h-6 w-16 rounded-full skeleton" />
          <div className="h-6 w-16 rounded-full skeleton" />
          <div className="h-6 w-16 rounded-full skeleton" />
        </div>
      </div>
    </article>
  );
};

SkeletonWorkCard.propTypes = {
  vertical: PropTypes.bool,
};

export default SkeletonWorkCard;

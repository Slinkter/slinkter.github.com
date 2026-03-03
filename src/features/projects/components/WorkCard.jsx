import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { m } from "motion/react";
import { cn } from "@/lib/utils";
import Tag from "@/components/ui/Tag";
import { fadeUp } from "@/lib/animations";

const DEFAULT_TAGS = [];

/**
 * WorkCard Component
 *
 * Displays a work/project card that can be vertical (stacked) or horizontal.
 * Pure Tailwind — no BEM abstraction. Uses cn() for conditional layout.
 *
 * @component
 * @param {Object} props
 * @param {string} props.name
 * @param {string} [props.role]
 * @param {string} [props.description]
 * @param {string} props.image
 * @param {string} props.link
 * @param {string[]} [props.tags]
 * @param {boolean} [props.vertical=false]
 */
const WorkCard = ({
  name,
  role,
  description,
  image,
  link,
  tags = DEFAULT_TAGS,
  vertical = false,
}) => {
  return (
    <m.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col hover:-translate-y-1 h-full",
        !vertical && "md:flex-row",
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative overflow-hidden w-full",
          vertical ? "h-48" : "h-64 md:h-auto md:w-2/5",
        )}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 pointer-events-none",
            !vertical &&
              "md:bg-gradient-to-r md:from-transparent md:to-black/10",
          )}
        />
      </div>

      {/* Content */}
      <div
        className={cn(
          "p-8 flex flex-col justify-center flex-grow",
          !vertical && "md:w-3/5",
        )}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1 block">
              {role}
            </span>
            <h3 className="text-xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              {name}
            </h3>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-surface-elevated text-content-muted hover:bg-brand-primary hover:text-white transition-all shadow-sm hover:shadow-brand-primary/30 hover:scale-110 active:scale-95 border border-separator flex items-center justify-center"
            aria-label="Ver Proyecto"
          >
            <FaExternalLinkAlt size={16} />
          </a>
        </div>

        <p className="text-content-muted mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Tag key={tag} className="bg-surface-base border-separator text-content-muted hover:border-brand-primary/50 transition-colors">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </m.article>
  );
};


WorkCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  vertical: PropTypes.bool,
};

export default WorkCard;

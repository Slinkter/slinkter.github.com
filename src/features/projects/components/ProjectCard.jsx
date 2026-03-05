import { memo } from "react";
import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { m } from "motion/react";
import Tag from "@/components/ui/Tag";
import { cardItem, cardHover, cardHoverTransition } from "@/lib/animations";

const DEFAULT_TAGS = ["React", "HTML"];

/**
 * ProjectCard Component
 *
 * Displays a project with image, title, tags and demo link.
 * Pure Tailwind — no BEM abstraction.
 *
 * Animation: does NOT own `initial`/`animate`/`whileInView`; those are
 * delegated to the nearest Section orchestrator. This prevents the
 * scroll-triggered flicker caused by competing animation states.
 *
 * @component
 * @param {Object} props
 * @param {string} props.projectName
 * @param {string} props.projectImage
 * @param {string} props.projectLink
 * @param {string[]} [props.tags]
 */
const ProjectCard = memo(
  ({ projectName, projectImage, projectLink, tags = DEFAULT_TAGS }) => {
    return (
      <m.article
        variants={cardItem}
        whileHover={cardHover}
        transition={cardHoverTransition}
        className="group bg-surface-elevated rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-separator flex flex-col h-full"
      >
        {/* Image */}
        <div className="w-full h-56 overflow-hidden relative">
          <img
            src={projectImage}
            alt={projectName}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-content-main/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-surface-base rounded-full text-brand-primary shadow-2xl hover:scale-110 active:scale-95 transition-all"
              aria-label={`Ver demo de ${projectName}`}
            >
              <FaExternalLinkAlt size={20} />
            </a>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-grow">
          <h3 className="text-xl font-extrabold text-content-main mb-4 tracking-tight">
            {projectName}
          </h3>

          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <Tag
                key={tag}
                className="text-[10px] px-3 py-1 bg-surface-elevated border-separator text-content-muted font-bold"
              >
                {tag}
              </Tag>
            ))}
          </div>

          <div className="mt-auto">
            <a
              href={projectLink}
              className="inline-flex items-center gap-2 text-sm font-black text-brand-primary hover:gap-3 transition-all group/link"
              target="_blank"
              rel="noopener noreferrer"
            >
              EXPLORAR PROYECTO
              <FaExternalLinkAlt
                size={12}
                className="group-hover/link:rotate-12 transition-transform"
              />
            </a>
          </div>
        </div>
      </m.article>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;

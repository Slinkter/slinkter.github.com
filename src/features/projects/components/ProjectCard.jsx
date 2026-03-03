import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { m } from "motion/react";
import Tag from "@/components/ui/Tag";
import { fadeUp } from "@/lib/animations";

/**
 * ProjectCard Component
 *
 * Displays a project with image, title, tags and demo link.
 * Pure Tailwind — no BEM abstraction.
 * Animates into view using motion whileInView.
 *
 * @component
 * @param {Object} props
 * @param {string} props.projectName
 * @param {string} props.projectImage
 * @param {string} props.projectLink
 * @param {string[]} [props.tags]
 */
const ProjectCard = ({
  projectName,
  projectImage,
  projectLink,
  tags = ["React", "HTML"],
}) => {
  return (
    <m.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group bg-surface-elevated rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-separator flex flex-col h-full hover:-translate-y-2 transition-all duration-500"
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
            <Tag key={tag} className="text-[10px] px-3 py-1 bg-surface-elevated border-separator text-content-muted font-bold">
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
            <FaExternalLinkAlt size={12} className="group-hover/link:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </m.article>
  );
};


ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;

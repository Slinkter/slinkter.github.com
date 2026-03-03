import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { m } from "motion/react";

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
    >
      {/* Image */}
      <div className="w-full h-48 overflow-hidden relative">
        <img
          src={projectImage}
          alt={projectName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {projectName}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-2 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-4">
          <a
            href={projectLink}
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo en vivo <FaExternalLinkAlt size={12} />
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

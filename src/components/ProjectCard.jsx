import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  projectName,
  projectImage,
  projectLink,
  tags = ["React", "HTML"],
}) => {
  // Default tags if none provided

  return (
    <article className="card group">
      {/* Card Header */}
      <div className="card__image-container">
        <img
          src={projectImage}
          alt={projectName}
          className="card__image"
          loading="lazy"
        />
        {/* Overlay on hover (Optional enchancement) */}
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

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {projectName}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span key={idx} className="tag">
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
    </article>
  );
};

ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;

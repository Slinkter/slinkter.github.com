import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  projectName,
  projectImage,
  projectLink,
  tags = ["React", "HTML"],
}) => {
  return (
    <article className="card-base group">
      {/* Header */}
      <div className="card__header h-48">
        <img
          src={projectImage}
          alt={projectName}
          className="card__image"
          loading="lazy"
        />
        <div className="card__overlay flex justify-end items-start p-4">
          {/* Optional: GitHub link could go here if available in data */}
        </div>
      </div>

      {/* Body */}
      <div className="card__body">
        <div className="flex justify-between items-center mb-2">
          <h3 className="card__title text-xl mb-0">{projectName}</h3>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card-action"
            aria-label="Ver Demo"
          >
            <FaExternalLinkAlt size={12} />
          </a>
        </div>

        <div className="card__tags mt-2">
          {tags.map((tag, idx) => (
            <span key={idx} className="tag">
              {tag}
            </span>
          ))}
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

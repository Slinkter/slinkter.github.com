import PropTypes from "prop-types";

const ProjectCard = ({ projectName, projectImage, projectLink }) => {
  return (
    <article className="card">
      {/* Card Header */}
      <div className="card__header">
        <img
          src={projectImage}
          alt={projectName}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </div>
      {/* Card Body */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {projectName}
        </h3>
      </div>
      {/* Card Footer */}
      <div className="p-4 flex justify-center items-center">
        <a
          href={projectLink}
          className="p-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300 inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver proyecto ${projectName}`}
        >
          Ver Proyecto
        </a>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
};

export default ProjectCard;

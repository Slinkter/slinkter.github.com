import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";

const WorkCard = ({ name, role, description, image, link, tags = [] }) => {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row h-full group hover:-translate-y-1">
      {/* Card Image - Left side on Desktop */}
      <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10 opacity-60"></div>
      </div>

      {/* Card Content - Right side */}
      <div className="p-8 md:w-3/5 flex flex-col justify-center">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1 block">
              {role}
            </span>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              {name}
            </h3>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all transform hover:rotate-12"
            aria-label="Ver Proyecto"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm font-medium rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

WorkCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default WorkCard;

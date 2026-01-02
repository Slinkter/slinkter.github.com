import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";

const WorkCard = ({ name, role, description, image, link, tags = [] }) => {
  return (
    <article className="card-base group">
      {/* Header: Image & Overlay */}
      <div className="card__header">
        <img src={image} alt={name} className="card__image" loading="lazy" />
        <div className="card__overlay">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
            {role}
          </span>
        </div>
      </div>

      {/* Body: Content */}
      <div className="card__body">
        <div className="flex justify-between items-start">
          <h3 className="card__title">{name}</h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card-action"
            aria-label="Ver Proyecto"
          >
            <FaExternalLinkAlt size={14} />
          </a>
        </div>

        <p className="card__description">{description}</p>

        {/* Tags inline if needed, or in footer */}
        <div className="card__tags mt-auto pt-4">
          {tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="tag">
              {tag}
            </span>
          ))}
          {tags.length > 3 && <span className="tag">+{tags.length - 3}</span>}
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

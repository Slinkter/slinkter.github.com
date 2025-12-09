import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";

const WorkCard = ({
    name,
    role,
    description,
    image,
    link,
    tags = [],
    vertical = false,
}) => {
    return (
        <article
            className={`work-card ${
                vertical ? "work-card--vertical" : "work-card--horizontal"
            }`}
        >
            {/* Card Image */}
            <div
                className={`work-card__image-container ${
                    vertical
                        ? "work-card__image-container--vertical"
                        : "work-card__image-container--horizontal"
                }`}
            >
                <img
                    src={image}
                    alt={name}
                    className="work-card__image"
                    loading="lazy"
                />
                <div
                    className={`work-card__overlay ${
                        !vertical ? "work-card__overlay--horizontal" : ""
                    }`}
                ></div>
            </div>

            {/* Card Content */}
            <div
                className={`work-card__content ${
                    vertical ? "" : "work-card__content--horizontal"
                }`}
            >
                <div className="work-card__header">
                    <div>
                        <span className="work-card__role">{role}</span>
                        <h3 className="work-card__title">{name}</h3>
                    </div>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-card__link"
                        aria-label="Ver Proyecto"
                    >
                        <FaExternalLinkAlt size={18} />
                    </a>
                </div>

                <p className="work-card__description line-clamp-3">
                    {description}
                </p>

                {/* Tags */}
                <div className="work-card__tags">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="tag--work">
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
    vertical: PropTypes.bool,
};

export default WorkCard;

import PropTypes from "prop-types";

/* 
    Component: Section
    Description: Reusable section component for displaying a grid of items (projects, works, etc).
    Implements BEM classes from index.css.
*/
const Section = ({ title, bgClass, id, children }) => {
    return (
        <section id={id} className={`section ${bgClass}`}>
            <h2 className="section__title">{title}</h2>
            <div className="section__grid">{children}</div>
        </section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    bgClass: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Section.defaultProps = {
    bgClass: "section--gray", // Default background
    id: null,
};

export default Section;

import { skills } from "../data/skills";

const Skills = () => {
  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <p className="skill-text">{skill}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;

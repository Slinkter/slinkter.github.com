import { skillsData } from "@/features/portfolio/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills__container">
        <h3 className="skills__header">Stack Tecnológico</h3>

        <div className="skills__grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card group">
              <skill.icon className={`skill-card__icon ${skill.color}`} />
              <p className="skill-card__name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

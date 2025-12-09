import { skillsData } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <h3 className="section__title">Stack Tecnológico</h3>

        <div className="grid grid-cols-2 small:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card group">
              <skill.icon className={`skill-icon ${skill.color}`} />
              <p className="skill-text group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

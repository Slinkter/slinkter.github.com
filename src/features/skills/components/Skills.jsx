import { memo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { skillsData } from "../data/skills";

/** @type {import("motion/react").Variants} */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

/** @type {import("motion/react").Variants} */
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

/**
 * Skills Component
 *
 * Displays the tech stack grid with animated entrance per card.
 * Pure Tailwind — no BEM abstraction.
 * Uses whileInView so animation only fires once the grid enters the viewport.
 *
 * @component
 * @returns {React.JSX.Element}
 */
const Skills = memo(function Skills() {
  return (
    <section id="skills" className="w-full py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2
          className={cn(
            "text-3xl font-bold text-center mb-16 relative inline-block w-full",
            "after:content-[''] after:block after:w-20 after:h-1",
            "after:bg-blue-500 after:mx-auto after:mt-4 after:rounded-full",
          )}
        >
          Stack Tecnológico
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.06, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 cursor-default"
            >
              <skill.icon
                className={cn(
                  "text-4xl mb-3 text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-blue-500 group-hover:scale-110",
                  skill.color,
                )}
                aria-hidden="true"
              />
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2 text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

export default Skills;

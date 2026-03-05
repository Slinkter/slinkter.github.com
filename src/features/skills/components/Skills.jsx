import { memo } from "react";
import { m } from "motion/react";
import { cn } from "@/lib/utils";
import { skillsData } from "../data/skills";
import { staggerContainer, cardItem } from "@/lib/animations";

/**
 * Skills Component
 *
 * Displays the tech stack grid with staggered entrance per card.
 * Pure Tailwind — no BEM abstraction.
 *
 * The grid (`m.div`) owns `whileInView` + stagger orchestration.
 * Each skill pill only declares `variants={cardItem}` — no `initial`/
 * `animate` of its own — so all entrance animations are in sync and
 * flicker-free. `whileHover` controls lift via Motion (not Tailwind
 * `hover:translate-y-*`) to avoid transform conflicts.
 *
 * @component
 * @returns {React.JSX.Element}
 */
const Skills = memo(function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-20 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <h2
          className={cn(
            "text-3xl font-bold text-center mb-16 relative inline-block w-full text-content-main",
            "after:content-[''] after:block after:w-20 after:h-1",
            "after:bg-brand-primary after:mx-auto after:mt-4 after:rounded-full",
          )}
        >
          Stack Tecnológico
        </h2>

        {/* ── Motion orchestrator: owns whileInView + stagger ──────────── */}
        <m.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
          variants={staggerContainer(0.055, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          role="list"
          aria-label="Lista de habilidades técnicas"
        >
          {skillsData.map((skill) => (
            <m.div
              key={skill.name}
              variants={cardItem}
              whileHover={{ scale: 1.06, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex flex-col items-center justify-center p-6 bg-surface-elevated rounded-2xl shadow-sm hover:shadow-xl border border-separator cursor-default"
              role="listitem"
            >
              <skill.icon
                className={cn(
                  "text-4xl mb-3 text-content-muted transition-colors duration-300 group-hover:text-brand-primary group-hover:scale-110",
                  skill.color,
                )}
                aria-hidden="true"
              />
              <p className="text-sm font-bold text-content-muted mt-2 text-center group-hover:text-content-main transition-colors">
                {skill.name}
              </p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
});

export default Skills;

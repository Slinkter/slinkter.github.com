import { RiFileDownloadLine } from "react-icons/ri";
import { m } from "motion/react";
import cvFile from "@/cv/CV_LuisCuevaR_2026_01.pdf";
import Button from "@/components/ui/Button";

/** @type {import("motion/react").Variants} */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

/** @type {import("motion/react").Variants} */
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * Hero Component
 *
 * Landing section with staggered entrance animations.
 * Pure Tailwind — no BEM abstraction.
 *
 * @component
 * @returns {React.JSX.Element}
 */
const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex flex-col justify-center items-center pt-16 sm:pt-20 relative overflow-hidden"
    >
      <m.div
        className="container mx-auto text-center px-4 relative z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <m.span
          variants={itemVariants}
          className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-widest border border-blue-100 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
        >
          Ingeniero de Sistemas
        </m.span>

        <m.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4 tracking-tight"
        >
          Luis Jhonata Cueva R.
        </m.h1>

        <m.p
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-200 mb-6 tracking-tight"
        >
          Frontend Developer{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Especializado en React SPA
          </span>
        </m.p>

        <m.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 md:mb-10 max-w-2xl leading-relaxed font-light px-2 sm:px-0"
        >
          Lidero el diseño y desarrollo de software bajo un ciclo de mejora
          continua, integrando <strong>auditorías de IA</strong> para garantizar
          arquitecturas escalables, rendimiento optimizado y código de alta
          precisión.
        </m.p>

        <m.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
        >
          <Button
            as="a"
            href={cvFile}
            download
            variant="neutral"
            icon={RiFileDownloadLine}
            aria-label="Descargar Curriculum Vitae"
          >
            Descargar CV
          </Button>
        </m.div>
      </m.div>
    </section>
  );
};

export default Hero;

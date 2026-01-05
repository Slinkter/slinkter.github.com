import { RiFileDownloadLine } from "react-icons/ri";
import cvFile from "../cv/CV_LuisCuevaR_2026_01.pdf";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <span className="hero__badge">Ingeniero de Sistemas</span>

        <h1 className="hero__title">Luis Jhonata Cueva R.</h1>

        <p className="hero__headline">
          Frontend Developer
          <span className="text-blue-600 dark:text-blue-400">
            Especializado en React SPA
          </span>
        </p>

        <p className="hero__description">
          Lidero el diseño y desarrollo de software bajo un ciclo de mejora
          continua, integrando <strong>auditorías de IA</strong> para garantizar
          arquitecturas escalables, rendimiento optimizado y código de alta
          precisión.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <a
            href={cvFile}
            download
            className="btn-secondary"
            aria-label="Descargar Curriculum Vitae"
          >
            <RiFileDownloadLine className="h-5 w-5" />
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

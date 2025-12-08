import { FaSun, FaMoon } from "react-icons/fa";
import ContactLinks from "./ContactLinks";
import Skills from "./Skills";
import useTheme from "../hooks/useTheme";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Luis Jhonata Cueva R.</h1>

        <h2 className="hero__subtitle">Habilidades</h2>

        <Skills />

        <div className="flex flex-col items-center gap-4">
          <ContactLinks />

          <a
            href="/CV_LuisCuevaR_2024_11.pdf"
            download
            className="btn-download"
            aria-label="Descargar Curriculum Vitae"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="btn-download__icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
            Descargar CV
          </a>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Alternar tema oscuro/claro"
      >
        {theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>
    </header>
  );
};

export default Hero;

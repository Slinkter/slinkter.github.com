import { RiFileDownloadLine } from "react-icons/ri";

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero__content">
                <h1 className="hero__title">Luis Jhonata Cueva R.</h1>

                <p className="hero__subtitle">
                    Ingeniero de Sistemas & Frontend Developer.
                    <br />
                    Especializado en React, liderazgo de proyectos (PMI) y
                    creación de soluciones digitales de alto impacto. Explorando
                    las fronteras entre IA y Desarrollo Web.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                    <a
                        href="/CV_LuisCuevaR_2024_11.pdf"
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

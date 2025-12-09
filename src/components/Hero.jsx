import { RiFileDownloadLine } from "react-icons/ri";

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero__content">
                <span className="mb-4 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide">
                    Disponible para trabajar
                </span>

                <h1 className="hero__title">Luis Jhonata Cueva R.</h1>

                <p className="hero__subtitle">
                    Arquitecto de Software Fullstack & Desarrollador Android.
                    <br />
                    Transformando ideas complejas en experiencias digitales
                    fluidas.
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

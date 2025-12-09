
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
          Transformando ideas complejas en experiencias digitales fluidas.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <a
            href="/CV_LuisCuevaR_2024_11.pdf"
            download
            className="btn-secondary"
            aria-label="Descargar Curriculum Vitae"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 12v8.25m0-8.25-3-3m3 3 3-3"
      </div>
    </section>
  );
};

export default Hero;

import ContactLinks from "./components/ContactLinks";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import "./App.css";
import { useContext } from "react";
import { CustomThemeContext } from "./CustomThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
    const { theme, toggleTheme } = useContext(CustomThemeContext);

    const url =
        "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main";

    const db_projectbasics = [
        {
            name: "Project 01 ",
            image: url + "/src/assets/api01.png",
            link: "https://slinkter.github.io/myprojectapi01/",
        },
        {
            name: "Project 02 ",
            image: url + "/src/assets/api02.png",
            link: "https://slinkter.github.io/myprojectapi02/",
        },
        {
            name: "Project 03 ",
            image: url + "/src/assets/api03.png",
            link: "https://slinkter.github.io/myprojectapi03/",
        },
        {
            name: "Project 04 ",
            image: url + "/src/assets/api04.png",
            link: "https://slinkter.github.io/myprojectapi04/",
        },
        {
            name: "Project 05 ",
            image: url + "/src/assets/api05.png",
            link: "https://slinkter.github.io/myprojectapi05/",
        },
        {
            name: "Project 06 ",
            image: url + "/src/assets/api06.png",
            link: "https://slinkter.github.io/myprojectapi06/",
        },
        {
            name: "Project 07 ",
            image: url + "/src/assets/api01.png",
            link: "https://slinkter.github.io/myprojectapi07/",
        },
        {
            name: "Project 08 ",
            image: url + "/src/assets/api08.png",
            link: "https://slinkter.github.io/myprojectapi08/",
        },
        {
            name: "Project 09 ",
            image: url + "/src/assets/api09.png",
            link: "https://slinkter.github.io/myprojectapi09/",
        },
        {
            name: "Project 10 ",
            image: url + "/src/assets/api10.png",
            link: "https://slinkter.github.io/myprojectapi10/",
        },
        {
            name: "Project 11 ",
            image: url + "/src/assets/api11.png",
            link: "https://slinkter.github.io/myprojectapi11/",
        },
        {
            name: "Project 12 ",
            image: url + "/src/assets/api12.png",
            link: "https://slinkter.github.io/myprojectapi12/",
        },
    ];

    return (
        <div className="App">
            {/* Sección de Información Personal */}
            <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 relative">
                <div className="container-md mx-auto text-center p-8 relative">
                    <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 text-center ">
                        Luis Jhonata Cueva R.
                    </h1>
                    <ContactLinks />

                    <h2 className="text-3xl font-semibold dark:text-white mb-10">
                        Habilidades
                    </h2>
                    <Skills />

                    {/* Botón para cambiar el tema */}
                </div>
                <button
                    onClick={toggleTheme}
                    className="mt-4 p-2 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-full absolute bottom-10  "
                >
                    {theme === "dark" ? (
                        <FaSun size={24} />
                    ) : (
                        <FaMoon size={24} />
                    )}
                </button>
            </section>

            {/* Sección de Proyectos */}
            <section className="min-h-screen bg-white dark:bg-gray-800 py-12 ">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-10 dark:text-white">
                        Mis Trabajos
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10">
                        {db_projectbasics.map((item, index) => (
                            <ProjectCard
                                key={index}
                                projectName={`Proyecto ${index + 1}`}
                                projectImage={item.image}
                                projectLink={item.link}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Sección de Habilidades */}
            <section className="min-h-screen flex flex-col items-center bg-gray-200 dark:bg-gray-700 py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-10 dark:text-white">
                        Mis Proyectos
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10">
                        {db_projectbasics.map((item, index) => (
                            <ProjectCard
                                key={index}
                                projectName={`Proyecto ${index + 1}`}
                                projectImage={item.image}
                                projectLink={item.link}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;

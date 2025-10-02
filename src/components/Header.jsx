import { useContext } from "react";
import { CustomThemeContext } from "../CustomThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import ContactLinks from "./ContactLinks";

const Header = () => {
    const { theme, toggleTheme } = useContext(CustomThemeContext);

    return (
        <header className="bg-gray-100 dark:bg-gray-900 py-8">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100">
                    Luis Jhonata Cueva R.
                </h1>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-full"
                    >
                        {theme === "dark" ? <FaSun size={24} /> : <FaMoon size={24} />}
                    </button>
                </div>
                <div className="mt-8">
                    <ContactLinks />
                </div>
                <a
                    href="/CV_LuisCuevaR_2024_11.pdf"
                    download
                    className="mt-4 inline-block p-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Descargar CV
                </a>
            </div>
        </header>
    );
};

export default Header;

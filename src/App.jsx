// App.jsx
import { useContext } from "react";
import { Button } from "@material-tailwind/react";
import CustomThemeContext from "./CustomThemeContext";

const App = () => {
    const { theme, toggleTheme } = useContext(CustomThemeContext);

    return (
        <div
            className={`min-h-screen ${
                theme === "dark" ? "bg-gray-900" : "bg-white"
            } flex justify-center items-center`}
        >
            <div className="text-center">
                <h1
                    className={`text-4xl ${
                        theme === "dark" ? "text-white" : "text-black"
                    }`}
                >
                    {theme === "dark" ? "Dark Mode" : "Light Mode"}
                </h1>
                <Button
                    color={theme === "dark" ? "blue" : "amber"}
                    onClick={toggleTheme}
                    className="mt-4"
                >
                    Toggle Theme
                </Button>
            </div>
        </div>
    );
};

export default App;

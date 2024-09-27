import { createContext, useEffect, useState } from "react";

export const CustomThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme); // Almacena el tema en localStorage
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <CustomThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </CustomThemeContext.Provider>
    );
};

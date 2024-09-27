// CustomThemeContext.js
import { createContext, useEffect, useState } from "react";

const CustomThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
    );

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        const systemThemeChangeListener = (e) => {
            setTheme(e.matches ? "dark" : "light");
        };
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.addEventListener("change", systemThemeChangeListener);

        return () => {
            mediaQuery.removeEventListener("change", systemThemeChangeListener);
        };
    }, []);

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return (
        <CustomThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </CustomThemeContext.Provider>
    );
};

export default CustomThemeContext;

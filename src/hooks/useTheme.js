import { useContext } from "react";
import { CustomThemeContext } from "@/context/ThemeContext";

/**
 * Custom Hook to access the theme context
 * @returns {{ theme: string, toggleTheme: () => void }}
 */
const useTheme = () => {
    const context = useContext(CustomThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a CustomThemeProvider");
    }
    return context;
};

export default useTheme;

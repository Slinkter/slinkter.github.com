import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { CustomThemeProvider } from "./CustomThemeContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            {" "}
            {/* Material Tailwind ThemeProvider */}
            <CustomThemeProvider>
                {" "}
                {/* Tu propio ThemeProvider */}
                <App />
            </CustomThemeProvider>
        </ThemeProvider>
    </StrictMode>
);

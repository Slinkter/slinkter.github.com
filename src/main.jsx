import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import { CustomThemeProvider } from "@/context/ThemeContext";
import App from "@/App";
import "@/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </ThemeProvider>
  </StrictMode>
);

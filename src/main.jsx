import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import { LazyMotion, domAnimation } from "motion/react";
import { CustomThemeProvider } from "@/app/providers/ThemeProvider";
import App from "@/App";
import "@/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CustomThemeProvider>
        <LazyMotion features={domAnimation}>
          <App />
        </LazyMotion>
      </CustomThemeProvider>
    </ThemeProvider>
  </StrictMode>,
);

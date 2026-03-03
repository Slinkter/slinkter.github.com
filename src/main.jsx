import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LazyMotion, domAnimation } from "motion/react";
import { CustomThemeProvider } from "@/app/providers/ThemeProvider";
import App from "@/App";
import "@/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomThemeProvider>
      <LazyMotion features={domAnimation}>
        <App />
      </LazyMotion>
    </CustomThemeProvider>
  </StrictMode>,
);

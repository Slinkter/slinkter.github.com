/**
 * @file Hook to synchronize application appearance with the DOM.
 * @description Manages theme (dark/light mode) and font family by:
 * - Applying CSS classes to the document root
 * - Persisting preferences to localStorage
 */

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { STORAGE_KEY_THEME, STORAGE_KEY_FONT } from "@config/storageKeys";

const persistToStorage = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.error(`Failed to persist ${key} to localStorage:`, error);
    }
};

const applyThemeToDom = (themeMode) => {
    const root = document.documentElement;
    root.classList.toggle("dark", themeMode === "dark");
};

const applyFontToDom = (fontFamily) => {
    const root = document.documentElement;
    root.style.setProperty("--font-family", fontFamily);
};

export const useAppearance = () => {
    const themeMode = useSelector((state) => state.theme.mode);
    const fontFamily = useSelector((state) => state.font.family);

    useEffect(() => {
        applyThemeToDom(themeMode);
        persistToStorage(STORAGE_KEY_THEME, themeMode);
    }, [themeMode]);

    useEffect(() => {
        applyFontToDom(fontFamily);
        persistToStorage(STORAGE_KEY_FONT, fontFamily);
    }, [fontFamily]);
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ── Typography ──────────────────────────────────────────────────────
      fontFamily: {
        // ✅ ACTIVA — Plus Jakarta Sans
        sans: [
          '"Plus Jakarta Sans"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],

        // 🅰 Outfit
        // sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],

        // 🅱 DM Sans
        // sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],

        // 🅲 Syne (solo para display) + DM Sans (body, reemplaza "sans")
        // display: ["Syne", "ui-sans-serif", "sans-serif"],
        // sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },

      // ── Colors ──────────────────────────────────────────────────────────
      colors: {
        brand: {
          primary: "rgb(var(--brand-primary) / <alpha-value>)",
          glow: "rgb(var(--brand-glow) / <alpha-value>)",
        },
        surface: {
          base: "rgb(var(--surface-base) / <alpha-value>)",
          elevated: "rgb(var(--surface-elevated) / <alpha-value>)",
          section: "rgb(var(--surface-section) / <alpha-value>)",
          footer: "rgb(var(--surface-footer) / <alpha-value>)",
        },
        content: {
          main: "rgb(var(--text-main) / <alpha-value>)",
          muted: "rgb(var(--text-muted) / <alpha-value>)",
        },
        separator: "rgb(var(--border-subtle) / <alpha-value>)",
      },

      // ── Animations (legacy — preferir motion/react para animaciones UI) ─
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeIn 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

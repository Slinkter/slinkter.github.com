const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    darkMode: "class", // Esto habilita el modo oscuro basado en clases
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
});

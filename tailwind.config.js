/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
                mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
            },
            colors: {
                "custom-blue": "#1E40AF",
                "custom-green": {
                    light: "#6EE7B7",
                    DEFAULT: "#10B981",
                    dark: "#047857",
                },
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".writing-vertical-rl": {
                    "writing-mode": "vertical-rl",
                },
            });
        }),
    ],
};

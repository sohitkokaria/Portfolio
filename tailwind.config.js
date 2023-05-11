/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                yellow: "#facf0f",
            },
            fontFamily: {
                sourcesans: ["Source Sans Pro", "sans-serif"],
            },
            boxShadow: {
                "3xl": "0 10px 100px rgba(0, 0, 0, 0.1)",
            },
            height: {
                letter: "1100px",
            },
            width: {
                letter: "850px",
            }
        },
    },
    plugins: [],
};

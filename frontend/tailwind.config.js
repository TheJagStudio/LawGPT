/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#faf5ff",
                    100: "#f3e8ff",
                    200: "#e9d5ff",
                    300: "#d8b4fe",
                    400: "#c084fc",
                    500: "#a855f7",
                    600: "#9333ea",
                    700: "#7e22ce",
                    800: "#6b21a8",
                    900: "#581c87",
                    950: "#3b0764",
                },
                // primary: {
                //     50: "#ffeff3",
                //     100: "#ffe0e8",
                //     200: "#ffc6d8",
                //     300: "#ff97b7",
                //     400: "#ff5d92",
                //     500: "#ff2472",
                //     600: "#f80061",
                //     700: "#d70054",
                //     800: "#b4004f",
                //     900: "#99024a",
                //     950: "#570023",
                // },
                black: "#1b1a21",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(0deg)" },
                    "25%, 75%": { transform: "rotate(3deg)" },
                    "50%": { transform: "rotate(-3deg)" },
                },
            },
            animation: {
                wiggle: "wiggle 1s ease-in-out",
            },
            boxShadow: {
                custom: "0 0 10px rgba(0,0,0,0.2)",
            },
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
        extend: {
            colors: {
                "myRed": "#C00000"
            },
            boxShadow: {
                navbar: "0px 10px 80px 0px rgba(3,3,0.03). 0 1px 2px -1px rgba(3, 4, 4, 0.03)"
            },
            animation: {
                blob: 'blob 10s infinite'
            },
            keyframes: {
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                    '33%': {
                        transform: 'translate(20px, -60px) scale(1.1)',
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px) scale(0.9)',
                    },
                    '100%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                }
            }
        },
        screens: {
            'xs': '400px',
            ...defaultTheme.screens,
        }
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/aspect-ratio"),
    ],
    corePlugins: {
        // ...
        ringOpacity: false,
    },

}


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#edf2f8', // blue-50 or 100
                secondary: '#313bac', // blue-900
                skill: '#fef4f5', // red-50
            },
        },
    },
    plugins: [
        require("daisyui"),
        require('tailwind-scrollbar'),
    ],
    variants: {
        scrollbar: ['rounded']
    }
}
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-black': '#0b0b0f',
                'brand-gray': '#3b3d3f',
                'brand-light-gray': '#959ca3',
                'brand-light-blue': '#a3e2ff',
                'brand-white': '#f9f8ff',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                script: ['"Story Script"', 'cursive'],
            }
        }
    },
    plugins: [],
}
const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
            },
            gridTemplateRows: {
                pageWrapper: '1fr auto',
            },
            gridTemplateColumns: {
                coursesList: 'repeat(auto-fill, minmax(300px, 1fr))',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('tailwind-scrollbar-hide')],
}

module.exports = config

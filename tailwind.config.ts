const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      aspectRatio: {
        portrait: '1.7 / 3',
      },
      colors: {
        primary: '#00ff99',
      },
      fontFamily: {
        sans: ['--font-cutive-mono', ...fontFamily.sans],
      },
      // keyframes: {},
      // animation: {},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // ...
  ],
}
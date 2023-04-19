const { fontFamily } = require('tailwindcss/defaultTheme')
const radixColors = require('./src/styles/radixColors.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#00ff99',
        ...radixColors,
      },
      fontFamily: {
        sans: ['--font-cutive-mono', ...fontFamily.sans],
      },

      aspectRatio: {
        portrait: '1 / 2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // ...
  ],
}

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
      aspectRatio: {
        portrait: '1 / 2',
      },
      // backgroundImage: {
      //   'hero-video-bg': "url('/img/video-hero-poster.png')",
      // },
      colors: {
        primary: '#00ff99',
        ...radixColors,
      },
      fontFamily: {
        sans: ['--font-cutive-mono', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // ...
  ],
}

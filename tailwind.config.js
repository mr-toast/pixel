/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const tailwindRadix = require('tailwind-radix-colors')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  experimental: {
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },
  theme: {
    colors: {
      ...tailwindRadix.colors,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      primary: '#00ff99',
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-cutive-mono)'],
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss'), tailwindRadix.plugin()],
}

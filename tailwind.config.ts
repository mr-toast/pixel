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
      keyframes: {
        flickerI: {
          '0%': { opacity: 0.4 },
          '5%': { opacity: 0.5 },
          '10%': { opacity: 0.6 },
          '15%': { opacity: 0.85 },
          '25%': { opacity: 0.5 },
          '30%': { opacity: 1 },
          '35%': { opacity: 0.1 },
          '40%': { opacity: 0.25 },
          '45%': { opacity: 0.5 },
          '60%': { opacity: 1 },
          '70%': { opacity: 0.85 },
          '80%': { opacity: 0.4 },
          '90%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        flickerPX: {
          '0%': { opacity: 0.19 },
          '5%': { opacity: 0.2 },
          '10%': { opacity: 0.25 },
          '15%': { opacity: 0.35 },
          '25%': { opacity: 0.2 },
          '30%': { opacity: 0.4 },
          '35%': { opacity: 0.1 },
          '40%': { opacity: 0.25 },
          '45%': { opacity: 0.2 },
          '60%': { opacity: 0.4 },
          '70%': { opacity: 0.35 },
          '80%': { opacity: 0.4 },
          '90%': { opacity: 0.2 },
          '100%': { opacity: 0.4 },
        },
        flickerE: {
          '0%': { opacity: 0.15 },
          '5%': { opacity: 0.2 },
          '10%': { opacity: 0.12 },
          '15%': { opacity: 0.2 },
          '25%': { opacity: 0.15 },
          '30%': { opacity: 0.4 },
          '35%': { opacity: 0.05 },
          '40%': { opacity: 0.12 },
          '45%': { opacity: 0.15 },
          '60%': { opacity: 0.3 },
          '70%': { opacity: 0.2 },
          '80%': { opacity: 0.3 },
          '90%': { opacity: 0.18 },
          '100%': { opacity: 0.3 },
        },
        flickerL: {
          '0%': { opacity: 0.01 },
          '5%': { opacity: 0.05 },
          '10%': { opacity: 0.03 },
          '15%': { opacity: 0.1 },
          '25%': { opacity: 0.07 },
          '30%': { opacity: 0.1 },
          '35%': { opacity: 0.05 },
          '40%': { opacity: 0.06 },
          '45%': { opacity: 0.1 },
          '60%': { opacity: 0 },
          '70%': { opacity: 0.1 },
          '80%': { opacity: 0 },
          '90%': { opacity: 0 },
          '100%': { opacity: 0.1 },
        },
      },
      animation: {
        flickerI: 'flickerI 2s linear reverse infinite',
        flickerPX: 'flickerPX 2s linear reverse infinite',
        flickerE: 'flickerE 2s linear reverse infinite',
        flickerL: 'flickerL 2s linear reverse infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // ...
  ],
}

// #I {
// 	opacity: 1;
// 	animation: flickerI 2s linear  reverse infinite;
// }
// #I::after {
// 	content: '';
// 	width: 150%;
// 	-webkit-box-shadow: -35px 0px 60px 8px rgba(255,255,255,1);
// 	-moz-box-shadow: -35px 0px 60px 8px rgba(255,255,255,1);
// 	box-shadow: -35px 0px 60px 8px rgba(255,255,255,1);
// }

// #I {
// 	opacity: 1;
// 	animation: flickerI 2s linear  reverse infinite;
// }
// #I::after {
// 	content: '';
// 	width: 150%;
// 	-webkit-box-shadow: -35px 0px 60px 8px rgba(255,255,255,1);
// 	-moz-box-shadow: -35px 0px 60px 8px rgba(255,255,255,1);
// 	box-shadow: -35px 0px 60px 8px rgba(255,255,255,1);
// }
// #L, #G {
// 	animation: flickerLG 2s linear reverse infinite;
// 	position: relative;
// }
// #L::after,
// #L::before  {
// 	content:' ';
// 	width: 100px;
// 	height: 100px;
// 	background: var(--white);
// 	position: absolute;
// 	top: -50%;
// 	left: 100%;
// 	border-radius: 100%;
// 	opacity: 0.05;
// 	filter: blur(10px);
// }
// #L::after {
// 	width: 200px;
// 	height: 200px;
// 	top: -150%;
// 	left: -5%;
// 	opacity: 0.1;
// 	filter: blur(10px);
// }

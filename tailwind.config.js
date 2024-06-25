import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
      'hero-pattern':"url('./src/assets/video.jpg')",
      'item1-pattern':"url('./src/assets/slider1.jpg')",
      'item2-pattern':"url('./src/assets/slider2.jpg')",
      'item3-pattern':"url('./src/assets/video.jpg')",
      'intro':"url('./src/assets/intro.jpg')",
     


      },

      keyframes:{
        wave:{
          "0%":{transform:"rotate(0deg)"},
          "100%":{transform:"rotate(180deg)"},
        }
      },

      animation:{
        "rotate":"wave 1s linear forwards"
      }

     
    },
  },
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit')],
}


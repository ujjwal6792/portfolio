/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transitionDuration: {
      DEFAULT: '300ms'
    },
    extend: {
      colors: {
        'new-black': '#181823',
        'new-white': '#eeeeff',
        'new-cyan': '#C0EEF2',
        'new-blue': '#537FE7', 
        'button-yellow': '#FBCA1F',
      },
      fontSize: {
        home: "clamp(2.5rem,10vw,4rem)",
      },
      width:{
        'home-image': 'clamp(200px, 80%, 450px)',
      }
    },    
  },
  plugins: [],
}

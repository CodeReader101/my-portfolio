

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        cursive: ["Qwitcher Grypen", "cursive"],
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          
          '-ms-overflow-style': 'none', 
          'scrollbar-width': 'none', 
        },
      });
    },
  ],
}
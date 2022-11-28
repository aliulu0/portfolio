/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '280px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily:{
        Montserrat:["Montserrat", "sans-serif"],
        OpenSans:["OpenSans", "sans-serif"],
        Courgette:["Courgette", "cursive"]
      },
      animation:{
        'spin-once':'spin 1s linear 1',
      }
    },
  },
  plugins: [],
}

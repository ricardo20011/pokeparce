/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'azulOscuro': 'rgb(3 7 18 / 90%)',
    },
    extend: {
      height: {
        '18' : '4.5rem',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'n-15' : '-15px',
      },
      colors: {
        'azulOscuro': 'rgb(3 7 18 / 90%)',
      },
      height: {
        '18' : '4.5rem',
      },
    },
  },
  plugins: [],
}


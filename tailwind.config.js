/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
     '3xl' : '1800px',
     '4xl' : '2000px',
     '5xl' : '2400px',
     '6xl' : '2800px',
    },
    extend: {
      spacing: {
        'n-15' : '-15px',
        'cardX' : 'calc(50% - 200px)',
        'cardY' : 'calc(50% - 272px)',
      },
      colors: {
        'azulOscuro': 'rgb(3 7 18 / 70%)',
      },
      height: {
        '18' : '4.5rem',
        '130' : '34rem'
      },
      width: {
        '110' : '25rem',
      },
    },
  },
  plugins: [],
}


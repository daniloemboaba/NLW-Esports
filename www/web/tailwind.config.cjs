/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {

      backgroundImage:{
        galaxy: "URL('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 15.08%, #43E7AD 35.94%, #E1D55D 80.57%);'
      },
    },
  },
  plugins: [],
}

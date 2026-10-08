/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./src/**/*.{html,js}",
    "./asstes/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#153052',
        'primary-dark': '#0f243e',
        secondary: '#2d91cf',
        'secondary-dark': '#2274a5',
        gold: '#D4AF37',
        'gold-dark': '#B8960F',
      }
    },
  },
  plugins: [],
}
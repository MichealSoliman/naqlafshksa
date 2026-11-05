/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./about/**/*.html",
    "./areas/**/*.html",
    "./blog/**/*.html",
    "./contact/**/*.html",
    "./crane-winch-furniture-lifting-riyadh/**/*.html",
    "./dina-furniture-moving-riyadh/**/*.html",
    "./furniture-disassembly-and-reassembly-in-riyadh/**/*.html",
    "./furniture-moving-outside-riyadh/**/*.html",
    "./furniture-moving-prices-riyadh/**/*.html",
    "./furniture-packaging-wrapping-riyadh/**/*.html",
    "./furniture-storage-riyadh/**/*.html",
    "./office-commercial-moving-riyadh/**/*.html",
    "./wanet-furniture-moving-riyadh/**/*.html",
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

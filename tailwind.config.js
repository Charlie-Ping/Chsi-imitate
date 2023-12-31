/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html, js}", "./src/**/*.{vue, js}"],
  theme: {
    extend: {
      display: ['hover'],
      colors: {
        'main-teal': '#00bac7',
      }
    },
  },
  plugins: [],
}


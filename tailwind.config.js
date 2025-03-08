/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
      },
      colors: {
        'warm': '#FFFCF6',
        'dull-blue': '#4A90A3',
        'ocean': '#4A90A3',
        'sage': '#B8C4BB',
        'sand': '#F5E6D3',
        'sky-light': '#E6F3F7',
        'lavender-soft': '#E2E4F6',
        'cloud': '#FAFAFA',
      }
    },
  },
  plugins: [require("tailgrids/plugin")],
}
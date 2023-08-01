/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#15803d',
        secondary: '#94a3b8',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1328px'
      }
    },
  },
  plugins: [],
}


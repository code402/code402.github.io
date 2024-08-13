/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'text': '#000000',
          'accent': '#64a4ac',
          'background': '#ffffff',
        },
        listStyleType: {
          'oDisc': 'circle',
        },
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    plugins: [
    ],
  }
  
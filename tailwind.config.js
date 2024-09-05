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
          'teal1': '#0d7490',
          'magenta1': '#cd087d',
          'blue1': '#a1d6e2',
          'yellow1': '#ffcf48',
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
  

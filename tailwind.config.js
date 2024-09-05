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
          'src-teal': '#0d7490',
          'src-magenta': '#cd087d',
          'src-blue': '#a1d6e2',
          'src-yellow': '#ffcf48',
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
  

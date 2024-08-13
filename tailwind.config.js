/** @type {import('tailwindcss').Config} */

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
        fontFamily: {
          'sans': 'Noto Sans, Open Sans, Helvetica Neue, sans-serif',
          'headers': 'Roboto Slab, Open Sans, Helvetica Neue, sans-serif',
        }
      },
    },
    plugins: [
    ],
  }
  
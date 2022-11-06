/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],

  theme: {
    extend: {
      colors: {
        purple: '#47294B',
        primary: '#97711E',
        secondary: '#D8AE55',
        tertiary: '#C0A2BA',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}

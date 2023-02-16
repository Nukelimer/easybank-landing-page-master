/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
  //   screens: {
  //     'small': { 'max': '639px' },
  //     'medium': { 'max': '767px'}
  // },
    fontFamily: {
      sans: [
        'Montserrat, sans-serif',
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
      extend: {},
    },
    plugins: [],
  },
};

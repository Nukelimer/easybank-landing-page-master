/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}, ./index.html'],
  theme: {
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

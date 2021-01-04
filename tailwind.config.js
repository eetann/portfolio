module.exports = {
  purge: ['./src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1/10': '10%',
      },
      maxWidth: {
        '5/6': '83.333333%',
        '1/2': '50%',
        '45rem': '45rem',
      },
      maxHeight: {
        '5/6': '83.333333%',
        '4/5': '80%',
        '1/2': '50%',
        '1/10': '10%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

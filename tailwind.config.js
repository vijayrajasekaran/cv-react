module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      resize: ['hover', 'focus'],
      flexShrink: ['hover', 'focus']
    },
  },
  plugins: [],
}

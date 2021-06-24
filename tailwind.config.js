module.exports = {
  purge: {
    enabled: process.env.NODE_ENV !== "development",
    content: [`./src/**/*.vue`],
    options: {
      whitelist: []
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

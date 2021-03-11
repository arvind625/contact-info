module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    theme: {
      colors: {
        primary: "#5c6ac4",
        secondary: "#ecc94b",
        // ...
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

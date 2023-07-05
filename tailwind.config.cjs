/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: "hsla(39, 19%, 76%, 1)",
        secondary: "hsla(21, 13%, 44%, 1)",
        success: "hsla(171, 100%, 24%, 1)",
        error: "hsla(4, 48%, 68%, 1)",
        light: "hsla(0, 0%, 100%, 1)",
        light50: "hsla(0, 0%, 100%, 0.5)",
        dark: "hsla(0, 0%, 0%, 1)",
      },
    },
  },
  plugins: [],
};

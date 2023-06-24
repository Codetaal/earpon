/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        epPurple: "#7d7a9b",
        epLightPurple: "#c6c6d3",
        epSalmon: "#feaaaa",
      },
      fontSize: {
        xxs: ['0.5rem', '0.75rem'],
      },
      screens: {
        '3xl': '2000px',
      },
    },
  },
  plugins: [],
}
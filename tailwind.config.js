/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  themes: ["dracula", "light", "dark", "retro"],
  plugins: [require("daisyui")],
};

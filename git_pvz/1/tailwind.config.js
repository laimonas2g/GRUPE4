// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Adjust this to match your source files (HTML/JS)
  ],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" }, // Add print as a screen
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["print"],
    },
  },
};
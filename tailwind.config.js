/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#2cb34a", dark: "#1e8a37" },
        secondary: { DEFAULT: "#0f172a" },
        soft: "#f3f6f4"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.08)"
      }
    }
  },
  plugins: []
}

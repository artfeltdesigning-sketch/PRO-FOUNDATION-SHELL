/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "rgba(255,255,255,0.08)",
        glass: "rgba(255,255,255,0.06)",
        surface: "#0b1020",
        accent: "#7c5cff",
        accent2: "#4da6ff"
      },
      backdropBlur: {
        xl: "24px"
      },
      boxShadow: {
        glass: "0 10px 40px rgba(0,0,0,0.35)"
      },
      borderRadius: {
        xl2: "24px"
      }
    }
  },
  plugins: []
};

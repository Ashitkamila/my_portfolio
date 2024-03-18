/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#100028",
        secondary: "#007bff",
        tertiary: "#20c997",
      },
    },
    screens: {
      sm: { max: "640px" },

      lg: { max: "2024px" },
    },
  },
  plugins: [],
};

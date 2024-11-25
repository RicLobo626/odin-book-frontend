/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#3b82f6",
        error: "#ef4444",
        current: "currentColor",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

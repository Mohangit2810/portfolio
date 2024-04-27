/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { min: "1535px" },
      xl: { min: "1279px" },
      lg: { min: "1000px" },
      md: { min: "767px" },
      sm: { min: "639px" },
      xs: { min: "350px" },
    },
    extend: {
      backgroundImage: {
        "landing-image": "url('/public/landing.jpg')",
      },
    },
  },
  plugins: [],
};

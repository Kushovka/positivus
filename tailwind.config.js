/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B9FF66",
        secondary: "#191A23",
        tartiary: "#F3F3F3",
      },
            borderRadius: {
        '45': '45px',
      },
    },
  },
  plugins: [],
};

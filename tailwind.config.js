/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#fff",
        background: "#171717",
        primary: "#9443FE",
        secondary: "#F2F2F2",
        accent: "#3DBCF7",
      },
      backgroundImage: {
        pattern: "url(/pattern.png)",
      },
    },
  },
  plugins: [],
};

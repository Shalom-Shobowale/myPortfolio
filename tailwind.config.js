/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ THIS IS CRITICAL - add this line
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#3c096c",
        tertiary: "#e9ecef",
        bgBody: "#f8f9fa",
      },
      fontFamily: {
        Mont: ["Roboto", "open sans"],
        Pacifico: ["Pacifico", "open sans"],
      },
      animation: {
        fillbars: "fillbars 2.5s ease-in-out 1",
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fillbars: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
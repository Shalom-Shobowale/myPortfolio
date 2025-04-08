/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#ffffff",
        secondary:"#3c096c",
        tertiary:"#e9ecef",
        bgBody:"#f8f9fa"
      },
      fontFamily:{
        Mont:["Roboto", "open sans"],
        Pacifico:["Pacifico", "open sans"]

      },
      animation: {
        fillbars: 'fillbars 2.5s ease-in-out 1',
      },
      keyframes: {
        fillbars: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      translate: {
        '1/3': '33.33%',
        '2/3': '66.67%',
        'custom-value': '20px',
      },
      content: {
        per: 'attr(per)',
      },
    },
  },
  plugins: [],
}
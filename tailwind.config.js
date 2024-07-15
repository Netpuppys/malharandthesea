/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'inset-custom': 'inset 0px 0px 300px 0px rgba(0, 0, 0, 1)',
      },
      fontFamily: {
        sans: ['Pathway Gothic One', 'sans-serif'],
      },
      colors: {
        'off-white': "#e8e8e8",
        'aqua': "#39D7D7",
        "pink": "#E81AB0"
      },
      animation: {
        "slide-in": "aurora 300ms linear",
       
      },
      keyframes: {
        aurora: {
          from: {
            right: "calc(-10rem)",
            opacity: 0.5,
          },
          to: {
            left: null,
            right: "100%",
            opacity: 1
          },
        }
      }
    },
  },
  plugins: [],
};

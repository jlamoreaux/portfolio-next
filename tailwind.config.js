/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "spin-y": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
    animation: {
      "spin-y": "spin-y 2s linear",
      "fade-in-0": "1000ms ease-in fade-in",
      "fade-in-1": "2000ms ease-in fade-in",
      "fade-in-2": "3000ms ease-in fade-in",
    },
  },
  plugins: [],
};

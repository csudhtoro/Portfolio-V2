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
      keyframes: {
        wheel: {
          "0%": { transform: "translateY(-21px)", opacity: "1" },
          "50%": { transform: "translateY(10px)", opacity: "0.05" },
          "100%": { transform: "translateY(5px)", opacity: "0" },
        },
      },
      animation: {
        wheel: "wheel 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

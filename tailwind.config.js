module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Space-Mono": ["Space-Mono", "monospace"],
        Egghead: ["Egghead", "sans-serif"],
      },
      keyframes: {
        fade: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
        typing: {
          "0%": {
            width: "0",
          },
          "80%": {
            width: "34ch",
          },
          "100%": {
            width: "34ch",
          },
        },
      },
      animation: {
        fade: "fade 1s linear infinite",
        typing: "typing 5s steps(34)",
      },
    },
  },
  plugins: [],
};

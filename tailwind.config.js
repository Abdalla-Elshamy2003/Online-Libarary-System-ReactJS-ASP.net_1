module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#71887B",
        secondary: "#03151E",
        logo: "#11142D",
        bgbtn: "#163C26",
        bgbtnHome: "#506E5C",
      },
      boxShadow: {
        custom: "0 0 20px 1px #FF7A00",
        btnSwiper: "0px 0px 20px 12px white",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};

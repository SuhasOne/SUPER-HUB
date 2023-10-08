/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#f7f7f9",
        black: "#000",
        gray: {
          "100": "#949495",
          "200": "#949494",
          "300": "#21293c",
          "400": "rgba(0, 0, 0, 0.1)",
          "500": "rgba(255, 255, 255, 0.85)",
          "600": "rgba(255, 255, 255, 0)",
          "700": "rgba(0, 0, 0, 0.06)",
          "800": "rgba(255, 255, 255, 0.5)",
        },
        tomato: {
          "100": "#ff4142",
          "200": "#ff4141",
        },
        gainsboro: "#dedee0",
        dimgray: {
          "100": "#727272",
          "200": "#707070",
        },
        mediumspringgreen: "#33d875",
        silver: "rgba(196, 196, 198, 0.5)",
        steelblue: "rgba(75, 88, 124, 0.5)",
        darkslategray: "#333",
      },
      spacing: {},
      fontFamily: {
        "swear-display": "'Swear Display'",
        gilroy: "Gilroy",
        inter: "Inter",
        avenir: "Avenir",
      },
      borderRadius: {
        "13xl": "32px",
        "341xl": "360px",
        "81xl": "100px",
        sm: "14px",
        "61xl": "80px",
      },
    },
    fontSize: {
      "6xl": "25px",
      xl: "20px",
      smi: "13px",
      "16xl": "35px",
      sm: "14px",
      "11xl": "30px",
      base: "16px",
      mid: "17px",
      "3xl": "22px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

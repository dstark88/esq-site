/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      boxShadow: {},
      colors: {},
      fontSize: {},
      fontFamily: {
        "connections-bold": ["Connections-Bold"],
        "connections-light": ["Connections-Light"],
        "connections-medium": ["Connections-Medium"],
        "connections-reg": ["Connections-Regular"],
        "roboto-bold": ["Roboto-Bold"],
        "roboto-light": ["Roboto-Light"],
        "roboto-med": ["Roboto-Medium"],
        "roboto-thin": ["Roboto-Thin"],
      },
      padding: {},
      margin: {},
      screens: {
        mob: { max: "575.97" },
        "tab-s": { min: "576", max: "767.97" },
        tab: { min: "768", max: "1023.97" },
        m: { min: "1024", max: "1439.97" },
        l: { min: "1440", max: "1919.97" },
        xl: { max: "1920" },

        "tab-u": { max: "1023.97" },
        "tab-a": { min: "576", max: "1023.97" },
      },
    },
  },
  plugins: [],
};

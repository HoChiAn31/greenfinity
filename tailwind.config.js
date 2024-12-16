/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-50": "#EDEDED",
        "gray-100": "#DBDBDB",
        "gray-200": "#B6B6B6",
        "gray-300": "#929292",
        "gray-400": "#6D6D6D",
        "gray-500": "#494949",
        "gray-600": "#373737",
        "gray-700": "#252525",
        "gray-800": "#121212",
        "gray-900": "#070707",
        "primary-50": "#F2FFFD",
        "primary-100": "#D7F7F9",
        "primary-200": "#99D4CD",
        "primary-300": "#66BEB5",
        "primary-400": "#33A99C",
        "primary-500": "#009383",
        "primary-600": "#006E62",
        "primary-700": "#004A42",
        "primary-800": "#002521",
        "primary-900": "#000F0D",
      },
      backgroundImage: {
        multiple:
          "url(https://i.imgur.com/Ac2o44y.png), url('https://i.imgur.com/jGaTtgj.png'), url('https://i.imgur.com/JIZj4uw.png')",
      },
    },
  },
  plugins: [],
};

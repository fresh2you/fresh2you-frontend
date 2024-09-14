/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-verify": "#47AAAD",
        "custom-green": "#40A578",
        "custom-green-200": "#b9e1ca",
        "custom-green-300": "#8bcaaa",
        "custom-green-900": "#173d2f",
        "custom-green-hover": "#3A956C",
        "custom-gray-light": "#D3D3D3",
        "custom-gray-dark": "#7D7D7D",
        "custom-black": "#333333",
      },
      screens: {
        "2xs": { max: "375px" },
        xs: { max: "425px" },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* Firefox */
          "scrollbar-width": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-default": {
          /* IE and Edge */
          "-ms-overflow-style": "auto",
          /* Firefox */
          "scrollbar-width": "auto",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "block",
          },
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};

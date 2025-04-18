/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-verify": "#47AAAD",
        "custom-green": "#40A578",
        "custom-green-100": "#dbf0e3",
        "custom-green-200": "#b9e1ca",
        "custom-green-300": "#8bcaaa",
        "custom-green-600": "#277453",
        "custom-green-700": "#205c44",
        "custom-green-900": "#173d2f",
        "custom-green-hover": "#3A956C",
        "custom-gray-light": "#D3D3D3",
        "custom-gray-dark": "#7D7D7D",
        "custom-black": "#333333",
        "custom-kakao": "#fae100",
      },
      screens: {
        xs: { max: "374px" },
        mobile: { min: "375px" },
        "tablet-sm": { min: "480px" },
        tablet: { min: "768px" },
        "desktop-sm": { min: "1024px" },
        desktop: { min: "1280px" },
      },
      fontSize: {
        "custom-sm-p": "clamp(0.8rem, 4vw, 1.07rem)",
        "custom-p": "clamp(1rem, 4vw, 1.25rem)",
        "custom-p-lg": "clamp(1.2rem, 4vw, 1.4rem)",
        "custom-h": "clamp(2.5rem, 9vw, 3.75rem)",
        "custom-h2": "clamp(1.5rem, 8vw, 2rem)",
        "custom-h3": "clamp(0.7rem, 5vw, 1.5rem)",
        "custom-btn-text": "clamp(0.85rem, 3vw, 1rem)",
        "custom-span": "clamp(1rem, 4vw, 1.1rem)",
        "custom-input": "clamp(1rem, 4vw, 1.13rem)",
      },
      grayscale: {
        40: "40%",
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
        ".center": {
          "justify-content": "center",
          "align-items": "center",
        },
        ".separator": {
          width: "2px",
          height: "45%",
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};

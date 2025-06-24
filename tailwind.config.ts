import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        "2xsmall": "320px",
        "xsmall": "512px",
        "small": "1024px",
        "medium": "1280px",
        "large": "1440px",
        "xxl": "1500px",
        "xlarge": "1680px",
        "2xlarge": "1920px",
      },
      fontFamily: {
        ptsans : ['PTSans', 'cursive'],
        lexend : ['Lexend_Deca', 'cursive'],
        lexendmed : ['Lexend_Deca-Med', 'cursive'],

      },
      keyframes: {
        borderSlide: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
          '100%': { borderColor: 'transparent' },
        },
        scroll: {
  				to: {
  					transform: 'translate(calc(-50% - 0.5rem))'
  				}
  			}
      },
      animation: {
        borderSlide: 'borderSlide 2s ease-out', // 2-second animation
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite'
      },
    },
  },
  plugins: [],
};
export default config;

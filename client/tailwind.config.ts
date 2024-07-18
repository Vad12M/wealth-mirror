import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00D094',
        primaryDark: '#345027',
        primaryLight: '#4B5754',
        primaryLight2: '#E0FFDF',

        border1: '#458244',

        opsColor: '#BCE8BB',

        white: '#FFF',
        black: '#112520',
        grayBody: '#838B7F',
        grayBody2: '#BEBEBE',


        naturalBlack: '#000',
        gray: '#4B5754',
        grayLight: '#BEBEBE',

        darkGray1: '#343839',
        darkGray2: '#232627',
        darkGray3: '#141718',

        lightGray4: '#6C7275',
        placeholder: '#797979',

        bodyGray: '#9E9E9E',

        mediumColor: "#969696",
        neutralGray: '#404040',
        danger: '#B31B1B',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

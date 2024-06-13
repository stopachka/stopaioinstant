import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
      mono: ['Berk Mono', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;

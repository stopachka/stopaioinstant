import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ['var(--font-spectral)', ...defaultTheme.fontFamily.serif],
      mono: ['var(--font-fira-code)', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;

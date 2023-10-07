import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        firstColor: '#6366F1',
        // darkColor: '#070d1f',
        darkColor: '#121212',
        darkColorAlt: '#282b3a',
        whiteColor: '#e6e7e9',
      },
      zIndex: {
        fixed: '100',
      },
    },
  },
  plugins: [],
};
export default config;

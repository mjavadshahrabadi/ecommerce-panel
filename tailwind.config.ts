import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-yekan)'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      boxShadow: {
        light: '-6px 10px 35px -16px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
export default config

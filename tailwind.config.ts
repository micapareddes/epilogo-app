import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      // sobre-escreve as cores do tailwind
      transparent: 'transparent',

      white: '#F3F3E9',
      black: '#1F1F1B',
      contrast: '#181717',

      gray: {
        100: '#DCDCD3',
        200: '#BEBEB6',
        300: '#ADADA5',
        400: '#95958F',
        500: '#898982',
        600: '#54544E',
        700: '#34342F',
        800: '#292926',
      },
      primary: {
        400: '#F86624',
        600: '#BF4A15',
      },
    },
    fontSize: {
      h1: ['4.75rem', { lineHeight: '110%' }],
      h2: ['3.563rem', { lineHeight: '120%' }],
      h3: ['2.688rem', { lineHeight: '120%' }],
      h4: ['2rem', { lineHeight: '120%' }],
      h5: ['1.5rem', { lineHeight: '120%' }],
      h6: ['1.125rem', { lineHeight: '110%' }],
      p1: ['1.5rem', { lineHeight: '170%' }],
      p2: ['1.25rem', { lineHeight: '170%' }],
      p3: ['1.125rem', { lineHeight: '170%' }],
      p4: ['1rem', { lineHeight: '170%' }],
      p5: ['0.75rem', { lineHeight: '170%' }],
      p6: ['0.625rem', { lineHeight: '170%' }],
    },
    borderRadius: {
      full: '9999px',
      xxs: '0.281rem',
      xs: '0.438rem',
      s: '0.688rem',
      m: '1.125rem',
      l: '1.625rem',
      xlg: '2.625rem',
      '2xl': '4.25rem',
      '3xl': '6.875rem',
    },
    extend: {
      spacing: {
        xxs: '0.281rem',
        xs: '0.438rem',
        s: '0.688rem',
        m: '1.125rem',
        l: '1.625rem',
        xl: '2.625rem',
        xxl: '4.25rem',
        xxxl: '6.875rem',
      },
      boxShadow: {
        around: '1px 2px 5px 0 rgba(31, 31, 27, 0.25);',
      },
    }, // acresenta ao tailwind
  },
  plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        // +20% on body-level sizes only. 2xl and above untouched so section headings stay the same.
        'xs':   ['0.9rem',   { lineHeight: '1.55' }],
        'sm':   ['1.05rem',  { lineHeight: '1.65' }],
        'base': ['1.2rem',   { lineHeight: '1.7'  }],
        'lg':   ['1.35rem',  { lineHeight: '1.65' }],
        'xl':   ['1.5rem',   { lineHeight: '1.55' }],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', sm: '2rem', lg: '3rem', xl: '4rem', '2xl': '4rem' },
      },
    },
  },
  plugins: [],
}

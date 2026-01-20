/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      bg: {
        main: 'rgb(var(--bg-main) / <alpha-value>)',
        surface: 'rgb(var(--bg-surface) / <alpha-value>)',
        elevated: 'rgb(var(--bg-elevated) / <alpha-value>)',
      },
      text: {
        primary: 'rgb(var(--text-primary) / <alpha-value>)',
        secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
        muted: 'rgb(var(--text-muted) / <alpha-value>)',
      },
      border: {
        subtle: 'rgb(var(--border-subtle) / <alpha-value>)',
        strong: 'rgb(var(--border-strong) / <alpha-value>)',
      },
      accent: {
        primary: 'rgb(var(--accent-primary) / <alpha-value>)',
        hover: 'rgb(var(--accent-hover) / <alpha-value>)',
        active: 'rgb(var(--accent-active) / <alpha-value>)',
        soft: 'rgb(var(--accent-soft) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-nunito)'],
      },
    },
  },
  plugins: [],
};

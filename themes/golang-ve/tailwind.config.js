/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './assets/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        background: 'oklch(0.08 0.02 240)',
        foreground: 'oklch(0.98 0.01 240)',
        card: 'oklch(0.12 0.02 240)',
        'card-foreground': 'oklch(0.95 0.01 240)',
        primary: 'oklch(0.65 0.15 200)',
        'primary-foreground': 'oklch(0.08 0.02 240)',
        secondary: 'oklch(0.18 0.02 240)',
        'secondary-foreground': 'oklch(0.95 0.01 240)',
        muted: 'oklch(0.15 0.02 240)',
        'muted-foreground': 'oklch(0.65 0.01 240)',
        accent: 'oklch(0.55 0.18 180)',
        'accent-foreground': 'oklch(0.08 0.02 240)',
        border: 'oklch(0.22 0.02 240)',
        input: 'oklch(0.18 0.02 240)',
        ring: 'oklch(0.65 0.15 200)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        gold: {
          DEFAULT: 'rgb(var(--gold) / <alpha-value>)',
          light: 'rgb(var(--gold-light) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--muted) / 0.5)',
          foreground: 'rgb(var(--muted) / 0.7)',
        },
        border: 'rgb(var(--border) / 0.1)',
        // Win2k border system
        win: {
          light: '#555',
          mid: '#333',
          dark: '#1a1a1a',
          face: '#2a2a2f',
          titlebar: 'rgb(var(--gold) / 0.12)',
        },
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#070a10',
        surface: '#0d121c',
        'surface-secondary': '#111827',
        'text-primary': '#f8fafc',
        'text-secondary': '#94a3b8',
        'accent-blue': '#3b82f6',
        'accent-purple': '#8b5cf6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
